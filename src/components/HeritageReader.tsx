"use client";

import React, { useMemo } from "react";
import { BookOpen, Sparkles } from "lucide-react";
import { getLessonFullText, LessonFullText } from "@/data/lessonsFullText";

interface HeritageReaderProps {
  lessonId: string;
  lessonTitle: string;
  pageRange: string;
}

export const HeritageReader: React.FC<HeritageReaderProps> = ({
  lessonId,
  lessonTitle,
  pageRange,
}) => {
  const fullTextData: LessonFullText | null = useMemo(() => {
    return getLessonFullText(lessonId);
  }, [lessonId]);

  if (!fullTextData || !fullTextData.markdown) {
    return (
      <div className="glass-panel p-8 rounded-3xl border border-[#F5D06C]/30 text-center space-y-3">
        <p className="text-amber-200/90 text-sm">
          Đang cập nhật toàn văn hiệu đính cho chuyên đề này ({lessonTitle}).
        </p>
        <span className="text-xs text-[#F5D06C] font-mono">Phạm vi: {pageRange}</span>
      </div>
    );
  }

  // Phân tích các khối văn bản thô sang các đoạn văn đẹp mắt
  const paragraphs = fullTextData.markdown
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0 && !p.startsWith("<a id=") && !p.startsWith("!["))
    .map((p) => {
      // Loại bỏ các tiêu đề Markdown cơ bản để hiển thị nội dung đọc tao nhã
      if (p.startsWith("### ")) return { type: "h3", text: p.replace(/^###\s+/, "") };
      if (p.startsWith("## ")) return { type: "h2", text: p.replace(/^##\s+/, "") };
      if (p.startsWith("# ")) return { type: "h1", text: p.replace(/^#\s+/, "") };
      if (p.startsWith("> ")) return { type: "quote", text: p.replace(/^>\s+/, "") };
      return { type: "p", text: p };
    });

  return (
    <article className="glass-panel p-6 sm:p-10 rounded-3xl border border-[#F5D06C]/35 shadow-2xl space-y-8 animate-fadeIn max-w-5xl mx-auto">
      {/* Header Chuyên Khảo Di Sản */}
      <div className="border-b border-[#F5D06C]/25 pb-6 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5D06C]/15 border border-[#F5D06C]/40 text-[#F5D06C] text-xs font-bold font-mono uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            Toàn Văn Giáo Trình
          </div>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-white leading-tight">
          {lessonTitle}
        </h2>

        <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed font-serif italic">
          Biên soạn: GS.TS Y Khoa Nguyễn Mạnh Nhâm &amp; ThS.DS Nguyễn Duy Thức • NXB Văn Hóa Thông Tin
        </p>
      </div>

      {/* Nội Dung Bản Thảo Khảo Cứu Với Typography Cổ Điển */}
      <div className="space-y-6 text-[#FBF9F5] leading-relaxed text-sm sm:text-base font-serif">
        {paragraphs.map((item, idx) => {
          if (item.type === "h1") {
            return (
              <h3 key={idx} className="text-xl sm:text-2xl font-bold text-[#F5D06C] pt-6 border-t border-[#F5D06C]/20 font-serif">
                {item.text}
              </h3>
            );
          }
          if (item.type === "h2") {
            return (
              <h4 key={idx} className="text-lg sm:text-xl font-bold text-amber-100 pt-4 font-serif flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F5D06C]" />
                <span>{item.text}</span>
              </h4>
            );
          }
          if (item.type === "h3") {
            return (
              <h5 key={idx} className="text-base sm:text-lg font-bold text-[#E2B743] pt-2 font-serif">
                {item.text}
              </h5>
            );
          }
          if (item.type === "quote") {
            return (
              <blockquote key={idx} className="p-4 sm:p-5 rounded-2xl bg-[#F5D06C]/10 border-l-4 border-[#F5D06C] text-amber-100 italic font-serif leading-relaxed shadow-inner">
                {item.text}
              </blockquote>
            );
          }

          // Kiểm tra xem đoạn văn có phải trích dẫn giải phẫu y học
          const isMedical = item.text.includes("huyệt") || item.text.includes("khí") || item.text.includes("yết hầu") || item.text.includes("đan điền") || item.text.includes("khớp");

          return (
            <p
              key={idx}
              className={`leading-relaxed text-justify ${
                idx === 0
                  ? "first-letter:text-4xl first-letter:font-bold first-letter:text-[#F5D06C] first-letter:mr-2 first-letter:float-left text-base sm:text-lg"
                  : ""
              } ${isMedical ? "bg-black/25 p-3.5 rounded-xl border border-[#F5D06C]/15" : ""}`}
            >
              {item.text}
            </p>
          );
        })}
      </div>

      {/* Footer Chuyên Đề */}
      <div className="pt-6 border-t border-[#F5D06C]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-200/70">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#F5D06C]" />
          <span>Trích xuất từ giáo trình chính thống Phật Gia Vịnh Xuân Quyền</span>
        </div>
        <div className="font-mono text-[#F5D06C]">
          Lưu trữ số hóa di sản võ phái
        </div>
      </div>
    </article>
  );
};
