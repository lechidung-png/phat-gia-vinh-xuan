"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  ChevronRight,
  ChevronLeft,
  BookOpen,
  FileText,
  CheckCircle2,
  X,
  Clock,
  Layers,
  Search,
  Play,
  Image as ImageIcon,
} from "lucide-react";
import { MONOGRAPHS, MonographSection } from "@/data/monographs";
import { CANONICAL_LESSONS, CONTENT_GROUPS } from "@/data/canonicalCatalog";
import { HeritageReader } from "@/components/HeritageReader";
import { resolveLessonId } from "@/lib/lessonResolver";

export interface KnowledgeHubProps {
  initialLessonId?: string | null;
  initialMonograph?: MonographSection | null;
  navigationSeq?: number;
  onOpenDojoLesson?: (lessonId: string) => void;
}

export const KnowledgeHub: React.FC<KnowledgeHubProps> = ({
  initialLessonId,
  initialMonograph,
  navigationSeq,
  onOpenDojoLesson,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<"fulltext" | "monographs">("fulltext");
  const [selectedGroupFilter, setSelectedGroupFilter] = useState<string>("all");
  const [chapterQuery, setChapterQuery] = useState<string>("");
  const [readingLessonId, setReadingLessonId] = useState<string | null>(
    initialLessonId ? resolveLessonId(initialLessonId) : null
  );
  const [selectedMonograph, setSelectedMonograph] = useState<MonographSection | null>(
    initialMonograph || null
  );

  // Đồng bộ khi điều hướng từ CommandPalette hoặc bên ngoài vào
  const navSig = `${initialLessonId || ""}::${initialMonograph?.id || ""}::${navigationSeq ?? 0}`;
  const [prevNavSig, setPrevNavSig] = useState(navSig);
  if (navSig !== prevNavSig) {
    setPrevNavSig(navSig);
    if (initialLessonId) {
      setActiveSubTab("fulltext");
      setReadingLessonId(resolveLessonId(initialLessonId));
      setSelectedMonograph(null);
    } else if (initialMonograph) {
      setActiveSubTab("monographs");
      setSelectedMonograph(initialMonograph);
    }
  }

  // Hỗ trợ phím Escape để đóng modal hoặc khung đọc
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedMonograph) setSelectedMonograph(null);
        else if (readingLessonId) setReadingLessonId(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedMonograph, readingLessonId]);

  const filteredChapters = useMemo(() => {
    const q = chapterQuery.trim().toLowerCase();
    return CANONICAL_LESSONS.filter((lesson) => {
      if (selectedGroupFilter !== "all" && lesson.groupId !== selectedGroupFilter) {
        return false;
      }
      if (!q) return true;
      return (
        lesson.title.toLowerCase().includes(q) ||
        lesson.id.toLowerCase().includes(q) ||
        `bài ${lesson.bookOrder}`.includes(q) ||
        lesson.pageRange.toLowerCase().includes(q)
      );
    });
  }, [selectedGroupFilter, chapterQuery]);

  const activeReadingLesson = useMemo(() => {
    if (!readingLessonId) return null;
    return CANONICAL_LESSONS.find((l) => l.id === readingLessonId) || null;
  }, [readingLessonId]);

  const activeLessonIndex = useMemo(() => {
    if (!activeReadingLesson) return -1;
    return CANONICAL_LESSONS.findIndex((l) => l.id === activeReadingLesson.id);
  }, [activeReadingLesson]);

  const prevLesson = activeLessonIndex > 0 ? CANONICAL_LESSONS[activeLessonIndex - 1] : null;
  const nextLesson =
    activeLessonIndex >= 0 && activeLessonIndex < CANONICAL_LESSONS.length - 1
      ? CANONICAL_LESSONS[activeLessonIndex + 1]
      : null;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Banner & Chuyển đổi giữa Toàn Văn 36 Chương Gốc vs 6 Chuyên Đề Biên Tập */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#3D291F] pb-4">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3" role="tablist" aria-label="Chế độ thư viện">
          <button
            role="tab"
            aria-selected={activeSubTab === "fulltext"}
            onClick={() => {
              setActiveSubTab("fulltext");
            }}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition ${
              activeSubTab === "fulltext"
                ? "bg-[#E2B743] text-[#140C08] shadow-md shadow-[#E2B743]/20"
                : "bg-[#1D130E] text-slate-300 border border-[#3D291F] hover:border-[#E2B743]/50"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Toàn Văn 36 Chương Sách Gốc (225 Trang)
          </button>

          <button
            role="tab"
            aria-selected={activeSubTab === "monographs"}
            onClick={() => {
              setActiveSubTab("monographs");
              setReadingLessonId(null);
            }}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition ${
              activeSubTab === "monographs"
                ? "bg-[#E2B743] text-[#140C08] shadow-md shadow-[#E2B743]/20"
                : "bg-[#1D130E] text-slate-300 border border-[#3D291F] hover:border-[#E2B743]/50"
            }`}
          >
            <Layers className="w-4 h-4" />
            6 Chuyên Đề Biên Tập Tóm Lược
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <FileText className="w-4 h-4 text-[#E2B743]" />
          <span>Ấn bản gốc 2012 • PGS.TS Nguyễn Mạnh Nhâm &amp; ThS.DS Nguyễn Duy Thức</span>
        </div>
      </div>

      {/* TAB 1: TOÀN VĂN 36 CHƯƠNG SÁCH GỐC */}
      {activeSubTab === "fulltext" && (
        <div className="space-y-6">
          {activeReadingLesson ? (
            <div className="space-y-4">
              {/* Thanh điều hướng bài đọc */}
              <div className="glass-panel p-4 rounded-2xl border border-[#3D291F] flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setReadingLessonId(null)}
                  className="px-3.5 py-2 rounded-xl bg-[#140C08] hover:bg-[#231710] text-amber-200 border border-[#3D291F] text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Danh mục 36 chương sách gốc
                </button>

                <div className="flex flex-wrap items-center gap-2">
                  {activeReadingLesson.motions.length > 0 && onOpenDojoLesson && (
                    <button
                      type="button"
                      onClick={() => onOpenDojoLesson(activeReadingLesson.id)}
                      className="px-3.5 py-2 rounded-xl bg-[#E2B743] hover:bg-[#F5D06C] text-[#140C08] text-xs font-extrabold flex items-center gap-1.5 transition shadow-md"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      Mở Dojo Player ({activeReadingLesson.motions.length} động tác)
                    </button>
                  )}

                  {prevLesson && (
                    <button
                      type="button"
                      onClick={() => setReadingLessonId(prevLesson.id)}
                      className="px-3 py-2 rounded-xl bg-[#1D130E] hover:bg-[#2A1C14] text-slate-200 border border-[#3D291F] text-xs font-semibold flex items-center gap-1 transition"
                      title={`Bài ${prevLesson.bookOrder}: ${prevLesson.title}`}
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      Bài {prevLesson.bookOrder}
                    </button>
                  )}

                  {nextLesson && (
                    <button
                      type="button"
                      onClick={() => setReadingLessonId(nextLesson.id)}
                      className="px-3 py-2 rounded-xl bg-[#1D130E] hover:bg-[#2A1C14] text-slate-200 border border-[#3D291F] text-xs font-semibold flex items-center gap-1 transition"
                      title={`Bài ${nextLesson.bookOrder}: ${nextLesson.title}`}
                    >
                      Bài {nextLesson.bookOrder}
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Nội dung toàn văn chương sách */}
              <HeritageReader
                lessonId={activeReadingLesson.id}
                lessonTitle={activeReadingLesson.title}
                pageRange={activeReadingLesson.pageRange}
              />
            </div>
          ) : (
            <>
              <div className="glass-panel p-6 rounded-2xl border border-[#3D291F] space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold font-serif gold-gradient flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-[#E2B743]" />
                      Toàn Văn 36 Chương Mục Sách Gốc (Trang 1–225)
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                      Bảo toàn nguyên vẹn 36 chương mục của sách gốc (bao gồm 18 chương lý thuyết, lịch sử, nội công, khẩu quyết, linh giác và 18 bài quyền/binh khí) cùng 1.095 tư liệu ảnh phục chế.
                    </p>
                  </div>

                  {/* Tìm nhanh chương */}
                  <div className="relative w-full md:w-72">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={chapterQuery}
                      onChange={(e) => setChapterQuery(e.target.value)}
                      placeholder="Tìm trong 36 chương sách..."
                      aria-label="Tìm trong 36 chương sách"
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#140C08] border border-[#3D291F] text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-[#E2B743]"
                    />
                  </div>
                </div>

                {/* Bộ lọc 11 phân hệ */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <button
                    type="button"
                    onClick={() => setSelectedGroupFilter("all")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                      selectedGroupFilter === "all"
                        ? "bg-[#E2B743] text-[#140C08]"
                        : "bg-[#140C08] text-slate-300 border border-[#3D291F] hover:border-[#E2B743]/40"
                    }`}
                  >
                    Tất cả (36 chương)
                  </button>
                  {CONTENT_GROUPS.map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setSelectedGroupFilter(g.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                        selectedGroupFilter === g.id
                          ? "bg-[#E2B743] text-[#140C08]"
                          : "bg-[#140C08] text-slate-300 border border-[#3D291F] hover:border-[#E2B743]/40"
                      }`}
                    >
                      {g.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Danh sách 36 chương */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredChapters.map((lesson) => {
                  const groupObj = CONTENT_GROUPS.find((g) => g.id === lesson.groupId);
                  const hasMotions = lesson.motions.length > 0;
                  return (
                    <div
                      key={lesson.id}
                      className="glass-panel hover:bg-[#231710] rounded-2xl p-5 border border-[#3D291F] hover:border-[#E2B743]/60 transition flex flex-col justify-between shadow-lg"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-2 text-xs">
                          <span className="px-2.5 py-0.5 rounded-full bg-[#E2B743]/15 text-[#E2B743] border border-[#E2B743]/30 font-bold font-mono">
                            Bài {String(lesson.bookOrder).padStart(2, "0")}
                          </span>
                          <span className="text-slate-400 font-mono text-xs">
                            Trang {lesson.pageRange}
                          </span>
                        </div>

                        <div>
                          <span className="text-xs text-amber-200/70 font-medium block mb-1">
                            {groupObj?.name || lesson.groupId}
                          </span>
                          <h4 className="text-base font-bold text-white font-serif leading-snug">
                            {lesson.title}
                          </h4>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300 pt-1">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-black/35 border border-[#3D291F]">
                            <ImageIcon className="w-3 h-3 text-[#E2B743]" />
                            {lesson.assetCount} ảnh tư liệu
                          </span>
                          {hasMotions ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/30 text-emerald-300">
                              <Play className="w-3 h-3" />
                              {lesson.motions.length} bước động tác
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-950/50 border border-amber-500/30 text-amber-200">
                              <BookOpen className="w-3 h-3" />
                              Chương khảo cứu lý luận
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="pt-4 mt-4 border-t border-[#3D291F] flex items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={() => setReadingLessonId(lesson.id)}
                          className="text-xs text-[#E2B743] hover:text-[#F5D06C] font-bold flex items-center gap-1 transition"
                        >
                          <span>Đọc toàn văn sách gốc</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>

                        {hasMotions && onOpenDojoLesson && (
                          <button
                            type="button"
                            onClick={() => onOpenDojoLesson(lesson.id)}
                            className="px-2.5 py-1 rounded-lg bg-[#E2B743]/15 hover:bg-[#E2B743]/30 text-[#F5D06C] border border-[#E2B743]/30 text-xs font-bold transition"
                          >
                            Tập bài quyền
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}

      {/* TAB 2: 6 CHUYÊN ĐỀ BIÊN TẬP TÓM LƯỢC */}
      {activeSubTab === "monographs" && (
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-[#3D291F] space-y-2">
            <h3 className="text-lg font-bold font-serif gold-gradient flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#E2B743]" />
              6 Chuyên Đề Biên Tập Tóm Lược (Tổng Hợp Chuyên Sâu)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Bản tóm lược biên tập hệ thống hóa các chủ đề lớn từ giáo trình gốc (Lời giới thiệu, Lịch sử truyền thừa, Cơ bản công, Mộc nhân trang 94, Linh giác &amp; Khẩu quyết, Nội công Khí công). Để đọc nguyên văn từng trang sách, vui lòng chọn thẻ <strong>Toàn Văn 36 Chương Sách Gốc</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MONOGRAPHS.map((mono) => (
              <div
                key={mono.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedMonograph(mono)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedMonograph(mono);
                  }
                }}
                className="glass-panel hover:bg-[#2A1C14] rounded-2xl p-5 border border-[#3D291F] hover:border-[#E2B743]/60 cursor-pointer transition flex flex-col justify-between group shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E2B743]/15 text-[#E2B743] border border-[#E2B743]/30 font-semibold">
                      {mono.badge}
                    </span>
                    <span className="text-slate-500 flex items-center gap-1 font-mono text-xs">
                      <Clock className="w-3 h-3" /> {mono.readTime}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 font-mono block mb-1">
                      {mono.chapter}
                    </span>
                    <h4 className="text-base font-bold text-white group-hover:text-[#E2B743] transition font-serif leading-snug">
                      {mono.title}
                    </h4>
                  </div>

                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                    {mono.excerpt}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#3D291F] flex items-center justify-between text-xs text-[#E2B743] font-semibold">
                  <span>Xem tóm lược chuyên đề</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modal Xem Chuyên Đề Biên Tập Tóm Lược */}
      {selectedMonograph && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedMonograph.title}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setSelectedMonograph(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[85vh] bg-[#1D130E] border border-[#E2B743]/40 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[#3D291F] pb-4 mb-4">
              <div className="space-y-1 pr-6">
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2.5 py-0.5 rounded bg-[#E2B743]/20 text-[#E2B743] font-bold font-mono">
                    {selectedMonograph.badge} • Bản Tóm Lược
                  </span>
                  <span className="text-slate-400">• {selectedMonograph.chapter}</span>
                  <span className="text-slate-400">• Đọc ~{selectedMonograph.readTime}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-white pt-1">
                  {selectedMonograph.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedMonograph(null)}
                aria-label="Đóng chuyên khảo"
                className="p-1.5 rounded-lg bg-[#140C08] hover:bg-[#20150F] text-slate-400 hover:text-white border border-[#3D291F] transition shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Scrollable */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-4 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
              <div className="p-3.5 rounded-xl bg-[#140C08] border border-[#3D291F] italic text-slate-300">
                &ldquo;{selectedMonograph.excerpt}&rdquo;
              </div>

              {selectedMonograph.content.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Keypoints Checklist */}
              {selectedMonograph.keypoints && selectedMonograph.keypoints.length > 0 && (
                <div className="mt-6 p-4 rounded-xl bg-[#E2B743]/10 border border-[#E2B743]/30 space-y-2">
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#E2B743] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Yếu Lĩnh Cốt Lõi Cần Nhớ
                  </h5>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {selectedMonograph.keypoints.map((kp, kidx) => (
                      <li key={kidx} className="flex items-start gap-2">
                        <span className="text-[#E2B743] font-bold mt-0.5">•</span>
                        <span>{kp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="pt-4 mt-4 border-t border-[#3D291F] flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <span>Bản biên tập tóm lược từ tác phẩm 2012 của PGS.TS Nguyễn Mạnh Nhâm</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const monoToLesson: Record<string, string> = {
                      "loi-gioi-thieu": "bai-02",
                      "lich-su-truyen-thua": "bai-05",
                      "co-ban-cong": "bai-06",
                      "moc-nhan-thung": "bai-16",
                      "linh-giac-niem-thu": "bai-27",
                      "noi-cong-khi-cong": "bai-29",
                    };
                    const targetId = monoToLesson[selectedMonograph.id] || "bai-02";
                    setSelectedMonograph(null);
                    setActiveSubTab("fulltext");
                    setReadingLessonId(targetId);
                  }}
                  className="px-3.5 py-2 rounded-xl bg-[#140C08] hover:bg-[#231710] text-[#F5D06C] border border-[#E2B743]/40 font-bold transition"
                >
                  Đọc nguyên văn chương sách gốc
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedMonograph(null)}
                  className="px-4 py-2 rounded-xl bg-[#E2B743] text-[#140C08] font-bold"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
