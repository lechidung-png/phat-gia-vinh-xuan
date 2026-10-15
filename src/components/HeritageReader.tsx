"use client";

import React, { useMemo, useState } from "react";
import { BookOpen, Sparkles, ZoomIn, X } from "lucide-react";
import { getLessonFullText, LessonFullText } from "@/data/lessonsFullText";

interface HeritageReaderProps {
  lessonId: string;
  lessonTitle: string;
  pageRange: string;
}

type ParsedBlock =
  | { type: "page_marker"; page: number }
  | { type: "h1"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "h4"; text: string }
  | { type: "quote"; lines: string[] }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "image"; alt: string; src: string }
  | { type: "hr" }
  | { type: "p"; text: string };

function normalizeAssetUrl(rawUrl: string): string {
  const trimmed = rawUrl.trim();
  if (trimmed.startsWith("../du-lieu/")) {
    return trimmed.replace(/^\.\.\/du-lieu\//, "/assets/");
  }
  if (trimmed.startsWith("du-lieu/")) {
    return `/assets/${trimmed.slice("du-lieu/".length)}`;
  }
  return trimmed;
}

function renderInlineMarkdown(text: string): React.ReactNode[] {
  // Xử lý **đậm**, *nghiêng*, `mã` mà không để sót dấu sao thô
  const tokens = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g);
  return tokens.map((tok, i) => {
    if (tok.startsWith("**") && tok.endsWith("**") && tok.length > 4) {
      return (
        <strong key={i} className="font-bold text-[#F5D06C]">
          {tok.slice(2, -2)}
        </strong>
      );
    }
    if (tok.startsWith("*") && tok.endsWith("*") && tok.length > 2) {
      return (
        <em key={i} className="italic text-amber-100">
          {tok.slice(1, -1)}
        </em>
      );
    }
    if (tok.startsWith("`") && tok.endsWith("`") && tok.length > 2) {
      return (
        <code
          key={i}
          className="px-1.5 py-0.5 rounded bg-black/40 border border-[#F5D06C]/30 font-mono text-xs text-[#F5D06C]"
        >
          {tok.slice(1, -1)}
        </code>
      );
    }
    return <React.Fragment key={i}>{tok}</React.Fragment>;
  });
}

function parseMarkdownToBlocks(md: string): ParsedBlock[] {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const blocks: ParsedBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    if (!line) {
      i++;
      continue;
    }

    // Neo trang PDF: <a id="trang-036"></a>
    const pageMatch = line.match(/<a\s+id=["']trang-(\d+)["']\s*><\/a>/i);
    if (pageMatch) {
      blocks.push({ type: "page_marker", page: parseInt(pageMatch[1], 10) });
      i++;
      continue;
    }

    // Đường kẻ ngang
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(line)) {
      blocks.push({ type: "hr" });
      i++;
      continue;
    }

    // Hình ảnh: ![alt](src)
    const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imgMatch) {
      blocks.push({
        type: "image",
        alt: imgMatch[1] || "Hình tư liệu sách gốc",
        src: normalizeAssetUrl(imgMatch[2]),
      });
      i++;
      continue;
    }

    // Tiêu đề H1..H4
    if (line.startsWith("#### ")) {
      blocks.push({ type: "h4", text: line.replace(/^####\s+/, "") });
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      blocks.push({ type: "h3", text: line.replace(/^###\s+/, "") });
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.replace(/^##\s+/, "") });
      i++;
      continue;
    }
    if (line.startsWith("# ")) {
      blocks.push({ type: "h1", text: line.replace(/^#\s+/, "") });
      i++;
      continue;
    }

    // Bảng Markdown: dòng bắt đầu bằng | và dòng tiếp theo là |---|
    if (
      line.startsWith("|") &&
      i + 1 < lines.length &&
      /^\s*\|?[\s:-]+\|[\s|:-]*$/.test(lines[i + 1])
    ) {
      const parseRow = (r: string) =>
        r
          .trim()
          .replace(/^\|/, "")
          .replace(/\|$/, "")
          .split("|")
          .map((c) => c.trim());
      const headers = parseRow(line);
      i += 2; // bỏ qua dòng phân cách |---|
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        rows.push(parseRow(lines[i]));
        i++;
      }
      blocks.push({ type: "table", headers, rows });
      continue;
    }

    // Trích dẫn (> ...)
    if (line.startsWith(">")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ""));
        i++;
      }
      blocks.push({ type: "quote", lines: quoteLines });
      continue;
    }

    // Danh sách không thứ tự (- hoặc * đầu dòng)
    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*]\s+/, ""));
        i++;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    // Danh sách có thứ tự (1. ...)
    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ""));
        i++;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    // Đoạn văn thường (gộp các dòng liên tiếp không phải block đặc biệt)
    const paraLines: string[] = [line];
    i++;
    while (i < lines.length) {
      const next = lines[i].trim();
      if (
        !next ||
        next.startsWith("#") ||
        next.startsWith(">") ||
        next.startsWith("![") ||
        next.startsWith("<a ") ||
        next.startsWith("|") ||
        /^[-*]\s+/.test(next) ||
        /^\d+\.\s+/.test(next) ||
        /^(-{3,}|\*{3,}|_{3,})$/.test(next)
      ) {
        break;
      }
      paraLines.push(next);
      i++;
    }
    blocks.push({ type: "p", text: paraLines.join(" ") });
  }

  return blocks;
}

export const HeritageReader: React.FC<HeritageReaderProps> = ({
  lessonId,
  lessonTitle,
  pageRange,
}) => {
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);

  const fullTextData: LessonFullText | null = useMemo(() => {
    return getLessonFullText(lessonId);
  }, [lessonId]);

  const blocks = useMemo(() => {
    if (!fullTextData?.markdown) return [];
    return parseMarkdownToBlocks(fullTextData.markdown);
  }, [fullTextData]);

  if (!fullTextData || !fullTextData.markdown) {
    return (
      <div className="glass-panel p-8 rounded-3xl border border-[#F5D06C]/30 text-center space-y-3">
        <p className="text-amber-200/90 text-sm">
          Không tìm thấy dữ liệu toàn văn cho chương mục này ({lessonTitle}).
        </p>
        <span className="text-xs text-[#F5D06C] font-mono">Phạm vi: {pageRange}</span>
      </div>
    );
  }

  const firstParagraphIndex = blocks.findIndex((b) => b.type === "p");

  return (
    <article className="glass-panel p-6 sm:p-10 rounded-3xl border border-[#F5D06C]/35 shadow-2xl space-y-8 animate-fadeIn max-w-5xl mx-auto">
      {/* Header Chuyên Khảo Di Sản */}
      <div className="border-b border-[#F5D06C]/25 pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5D06C]/15 border border-[#F5D06C]/40 text-[#F5D06C] text-xs font-bold font-mono uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            Toàn Văn Giáo Trình Gốc • Bài {fullTextData.bookOrder}
          </div>
          <span className="text-xs font-mono text-amber-200/80 bg-black/30 px-3 py-1 rounded-lg border border-[#3D291F]">
            Trang sách gốc: {pageRange}
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-white leading-tight">
          {lessonTitle}
        </h2>

        <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed font-serif italic">
          Nguyên tác: PGS.TS Y khoa Nguyễn Mạnh Nhâm &amp; ThS.DS Nguyễn Duy Thức • NXB Văn Hóa Thông Tin (2012)
        </p>
      </div>

      {/* Nội Dung Bản Thảo Khảo Cứu Với Hỗ Trợ Đầy Đủ Heading, Bảng, Hình, Chú Thích */}
      <div className="space-y-5 text-[#FBF9F5] leading-relaxed text-sm sm:text-base font-serif">
        {blocks.map((item, idx) => {
          if (item.type === "page_marker") {
            return (
              <div
                key={idx}
                id={`trang-${String(item.page).padStart(3, "0")}`}
                className="flex items-center gap-3 pt-4 pb-1 text-xs font-mono text-[#E2B743]/80"
              >
                <span className="px-2.5 py-0.5 rounded bg-[#E2B743]/15 border border-[#E2B743]/30">
                  Trang sách gốc {item.page}
                </span>
                <div className="flex-1 h-px bg-[#3D291F]" />
              </div>
            );
          }

          if (item.type === "hr") {
            return <hr key={idx} className="border-[#3D291F] my-4" />;
          }

          if (item.type === "h1") {
            return (
              <h3
                key={idx}
                className="text-xl sm:text-2xl font-bold text-[#F5D06C] pt-4 border-t border-[#F5D06C]/20 font-serif"
              >
                {renderInlineMarkdown(item.text)}
              </h3>
            );
          }

          if (item.type === "h2") {
            return (
              <h4
                key={idx}
                className="text-lg sm:text-xl font-bold text-amber-100 pt-3 font-serif flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#F5D06C] shrink-0" />
                <span>{renderInlineMarkdown(item.text)}</span>
              </h4>
            );
          }

          if (item.type === "h3") {
            return (
              <h5 key={idx} className="text-base sm:text-lg font-bold text-[#E2B743] pt-2 font-serif">
                {renderInlineMarkdown(item.text)}
              </h5>
            );
          }

          if (item.type === "h4") {
            return (
              <h6 key={idx} className="text-sm sm:text-base font-bold text-amber-200 pt-1 font-serif">
                {renderInlineMarkdown(item.text)}
              </h6>
            );
          }

          if (item.type === "quote") {
            return (
              <blockquote
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-[#F5D06C]/10 border-l-4 border-[#F5D06C] text-amber-100 italic font-serif leading-relaxed shadow-inner space-y-2"
              >
                {item.lines.map((line, lIdx) => (
                  <p key={lIdx}>{renderInlineMarkdown(line)}</p>
                ))}
              </blockquote>
            );
          }

          if (item.type === "ul") {
            return (
              <ul key={idx} className="space-y-2 pl-5 list-disc marker:text-[#F5D06C]">
                {item.items.map((li, lIdx) => (
                  <li key={lIdx} className="leading-relaxed">
                    {renderInlineMarkdown(li)}
                  </li>
                ))}
              </ul>
            );
          }

          if (item.type === "ol") {
            return (
              <ol key={idx} className="space-y-2 pl-5 list-decimal marker:text-[#F5D06C] marker:font-bold">
                {item.items.map((li, lIdx) => (
                  <li key={lIdx} className="leading-relaxed">
                    {renderInlineMarkdown(li)}
                  </li>
                ))}
              </ol>
            );
          }

          if (item.type === "table") {
            return (
              <div key={idx} className="overflow-x-auto my-4 rounded-2xl border border-[#3D291F] bg-black/30">
                <table className="w-full text-left border-collapse text-xs sm:text-sm font-sans">
                  <thead>
                    <tr className="bg-[#231710] border-b border-[#3D291F] text-[#F5D06C]">
                      {item.headers.map((h, hIdx) => (
                        <th key={hIdx} className="py-2.5 px-3 font-bold">
                          {renderInlineMarkdown(h)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#3D291F]/60">
                    {item.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-white/5">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="py-2 px-3 text-slate-200">
                            {renderInlineMarkdown(cell)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }

          if (item.type === "image") {
            return (
              <figure
                key={idx}
                className="my-4 p-4 rounded-2xl bg-black/35 border border-[#3D291F] flex flex-col items-center gap-2.5"
              >
                <button
                  type="button"
                  onClick={() => setZoomedImage({ src: item.src, alt: item.alt })}
                  className="relative group overflow-hidden rounded-xl border border-[#3D291F] hover:border-[#F5D06C]/60 transition focus:outline-none focus:ring-2 focus:ring-[#F5D06C]"
                  aria-label={`Phóng to ${item.alt}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="max-h-72 w-auto object-contain mx-auto bg-[#120B07]"
                  />
                  <span className="absolute bottom-2 right-2 px-2 py-1 rounded-lg bg-black/75 text-[#F5D06C] text-xs font-sans flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                    <ZoomIn className="w-3 h-3" /> Phóng to
                  </span>
                </button>
                <figcaption className="text-xs text-amber-200/80 font-sans text-center">
                  {item.alt}
                </figcaption>
              </figure>
            );
          }

          const isFirst = idx === firstParagraphIndex;

          return (
            <p
              key={idx}
              className={`leading-relaxed text-justify ${
                isFirst
                  ? "first-letter:text-3xl first-letter:font-bold first-letter:text-[#F5D06C] first-letter:mr-1.5 text-base sm:text-lg"
                  : ""
              }`}
            >
              {renderInlineMarkdown(item.text)}
            </p>
          );
        })}
      </div>

      {/* Footer Chuyên Đề */}
      <div className="pt-6 border-t border-[#F5D06C]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-200/70">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#F5D06C]" />
          <span>Nguyên văn giáo trình Phật Gia Vịnh Xuân Quyền (2012)</span>
        </div>
        <div className="font-mono text-[#F5D06C]">
          Bài {fullTextData.bookOrder} / 36 • Trang {pageRange}
        </div>
      </div>

      {/* Lightbox xem ảnh trong bài đọc */}
      {zoomedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={zoomedImage.alt}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#18100C] border border-[#F5D06C]/40 rounded-2xl p-4 sm:p-6 flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between border-b border-[#3D291F] pb-3">
              <span className="text-sm font-bold text-[#F5D06C] font-sans">{zoomedImage.alt}</span>
              <button
                type="button"
                onClick={() => setZoomedImage(null)}
                aria-label="Đóng ảnh phóng to"
                className="p-1.5 rounded-lg bg-black/50 text-slate-300 hover:text-white border border-[#3D291F]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={zoomedImage.src}
              alt={zoomedImage.alt}
              className="max-h-[75vh] w-auto object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </article>
  );
};
