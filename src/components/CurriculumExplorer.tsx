"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  BookOpen,
  Layers,
  Compass,
  ChevronRight,
  Search,
  X,
  Sparkles,
  Swords,
} from "lucide-react";
import {
  CONTENT_GROUPS,
  CANONICAL_LESSONS,
  CURRICULUM_STAGES,
  CanonicalLesson,
  MotionStep,
} from "@/data/canonicalCatalog";
import { DojoPlayer3 } from "@/components/DojoPlayer3";
import { HeritageReader } from "@/components/HeritageReader";

interface CurriculumExplorerProps {
  initialLessonId?: string;
}

export const CurriculumExplorer: React.FC<CurriculumExplorerProps> = ({
  initialLessonId = "bai-07", // Mặc định mở Tiểu Niệm Đầu
}) => {
  const [viewStyle, setViewStyle] = useState<"curriculum" | "book">("curriculum");
  const [selectedLessonId, setSelectedLessonId] = useState<string>(initialLessonId);
  const [lessonTab, setLessonTab] = useState<"player" | "reader">("player");
  const [selectedGroupId, setSelectedGroupId] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMotionIndex, setActiveMotionIndex] = useState(0);
  const [zoomedMotion, setZoomedMotion] = useState<MotionStep | null>(null);

  // Đồng bộ khi prop initialLessonId thay đổi từ bên ngoài (theo React pattern)
  const [prevInitialId, setPrevInitialId] = useState(initialLessonId);
  if (initialLessonId !== prevInitialId) {
    setPrevInitialId(initialLessonId);
    setSelectedLessonId(initialLessonId);
    setActiveMotionIndex(0);
    const target = CANONICAL_LESSONS.find((l) => l.id === initialLessonId);
    if (target && target.motions.length === 0) {
      setLessonTab("reader");
    } else {
      setLessonTab("player");
    }
  }

  // Bài học hiện tại
  const currentLesson: CanonicalLesson = useMemo(() => {
    return CANONICAL_LESSONS.find((l) => l.id === selectedLessonId) || CANONICAL_LESSONS[6]; // Tiểu Niệm Đầu
  }, [selectedLessonId]);

  // Bộ lọc danh sách bài học
  const filteredLessons = useMemo(() => {
    return CANONICAL_LESSONS.filter((lesson) => {
      if (selectedGroupId !== "all" && lesson.groupId !== selectedGroupId) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          lesson.title.toLowerCase().includes(q) ||
          lesson.id.toLowerCase().includes(q) ||
          lesson.pageRange.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedGroupId, searchQuery]);

  const handleSelectLesson = (lessonId: string) => {
    setSelectedLessonId(lessonId);
    setActiveMotionIndex(0);
    const target = CANONICAL_LESSONS.find((l) => l.id === lessonId);
    if (target && target.motions.length === 0) {
      setLessonTab("reader");
    } else {
      setLessonTab("player");
    }
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 380, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* 1. TOP HERO: ĐẦY ĐỦ 11 PHÂN HỆ & CHUYỂN ĐỔI CHẾ ĐỘ SƯ PHẠM */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#F5D06C]/35 relative overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5D06C]/15 text-[#F5D06C] border border-[#F5D06C]/40 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#F5D06C]" />
              Di Sản Võ Học Toàn Vẹn • 1.096 Ảnh Phục Chế Chuẩn HD
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-white leading-tight">
              Bách Khoa Quyền Pháp & Binh Khí Phật Gia Vịnh Xuân
            </h2>
            <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed">
              Trọn bộ <strong>11 Đại phân hệ</strong> và <strong>36 Bài học kinh điển</strong>: Từ Quyền tay không (Tiểu Niệm Đầu, Tầm Kiều, Tiêu Chỉ, 108 Thế) đến Ngũ Hình Quyền (Long, Xà, Hổ, Báo, Hạc), Cọc gỗ Mộc Nhân, Bát Trảm Đao, Côn Pháp, Liễu Diệp Kiếm, Linh Giác và Nội Công.
            </p>
          </div>

          {/* Switcher Buttons: Lộ trình Sư Phạm vs Đọc Sách 225 Trang */}
          <div className="flex flex-col sm:flex-row items-center gap-2 bg-[#20150F] p-1.5 rounded-2xl border border-[#F5D06C]/30 shrink-0 self-start md:self-auto">
            <button
              onClick={() => setViewStyle("curriculum")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                viewStyle === "curriculum"
                  ? "bg-[#F5D06C] text-[#2A0E0A] shadow-md border border-[#F5D06C]"
                  : "text-amber-200/70 hover:text-white"
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Lộ Trình 7 Chặng</span>
            </button>
            <button
              onClick={() => setViewStyle("book")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                viewStyle === "book"
                  ? "bg-[#F5D06C] text-[#2A0E0A] shadow-md border border-[#F5D06C]"
                  : "text-amber-200/70 hover:text-white"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Theo Thứ Tự Bài Học</span>
            </button>
          </div>
        </div>

        {/* 11 GROUPS MATRIX GRID (KHÔNG CÒN CUỘN NGANG) */}
        <div className="mt-6 pt-5 border-t border-[#F5D06C]/20">
          <div className="text-xs font-bold uppercase tracking-wider text-[#F5D06C] mb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Ma Trận 11 Phân Hệ Võ Học (Xem Toàn Cảnh 100%):
            </span>
            <span className="text-[11px] font-mono text-amber-200/70">
              Đang hiển thị {filteredLessons.length} / 36 bài học
            </span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            <button
              onClick={() => setSelectedGroupId("all")}
              className={`p-2.5 rounded-xl text-xs font-semibold transition text-left flex flex-col justify-between cursor-pointer border ${
                selectedGroupId === "all"
                  ? "bg-[#F5D06C] text-[#2A0E0A] font-bold shadow-md border-[#F5D06C] ring-2 ring-[#F5D06C]/40"
                  : "bg-[#20150F] text-amber-200/80 hover:text-white border-[#F5D06C]/25 hover:border-[#F5D06C]"
              }`}
            >
              <span className="font-bold">Tất Cả 36 Bài</span>
              <span className="text-[10px] opacity-75 font-mono">Toàn Bộ 11 Phân Hệ</span>
            </button>
            {CONTENT_GROUPS.map((g) => (
              <button
                key={g.id}
                onClick={() => setSelectedGroupId(g.id)}
                className={`p-2.5 rounded-xl text-xs transition text-left flex flex-col justify-between cursor-pointer border ${
                  selectedGroupId === g.id
                    ? "bg-[#F5D06C] text-[#2A0E0A] font-bold shadow-md border-[#F5D06C] ring-2 ring-[#F5D06C]/40"
                    : "bg-[#20150F] text-amber-200/80 hover:text-white border-[#F5D06C]/25 hover:border-[#F5D06C]"
                }`}
              >
                <span className="font-semibold line-clamp-1">{g.name}</span>
                <span className="text-[10px] opacity-75 font-mono truncate">{g.pages.replace("Trang PDF ", "Trang ")}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. KHU VỰC KHÁM PHÁ BÀI HỌC: SÀN TẬP PHÂN THẾ HOẶC ĐÀI ĐỌC DI SẢN */}
      <section className="space-y-4 pt-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#F5D06C] uppercase tracking-wider bg-[#F5D06C]/15 border border-[#F5D06C]/30 px-3 py-1 rounded-lg">
                {currentLesson.contentType === "reading" ? "Chuyên Khảo Học Thuật" : "Sàn Tập Phân Thế Công Thái Học"} • {currentLesson.pageRange}
              </span>
              {currentLesson.motions.length > 0 && (
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-0.5 rounded-md">
                  {currentLesson.motions.length} Động Tác HD
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mt-1.5">{currentLesson.title}</h3>
          </div>

          {/* Switcher: Sàn tập vs Toàn văn sách gốc (khi bài có động tác) */}
          {currentLesson.motions.length > 0 && (
            <div className="flex items-center gap-1.5 bg-[#20150F] p-1 rounded-xl border border-[#F5D06C]/30 shrink-0 self-start sm:self-auto">
              <button
                onClick={() => setLessonTab("player")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  lessonTab === "player"
                    ? "bg-[#F5D06C] text-[#2A0E0A] shadow"
                    : "text-amber-200/70 hover:text-white"
                }`}
              >
                <Swords className="w-3.5 h-3.5" />
                <span>Sàn Tập ({currentLesson.motions.length} Đòn)</span>
              </button>
              <button
                onClick={() => setLessonTab("reader")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 cursor-pointer ${
                  lessonTab === "reader"
                    ? "bg-[#F5D06C] text-[#2A0E0A] shadow"
                    : "text-amber-200/70 hover:text-white"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Toàn Văn Sách Gốc</span>
              </button>
            </div>
          )}
        </div>

        {/* Nội dung: Hoặc Sàn tập, hoặc Đài đọc di sản */}
        {currentLesson.motions.length > 0 && lessonTab === "player" ? (
          <DojoPlayer3
            lesson={currentLesson}
            activeMotionIndex={activeMotionIndex}
            onSelectMotionIndex={setActiveMotionIndex}
            onOpenLightbox={(motion) => setZoomedMotion(motion)}
          />
        ) : (
          <HeritageReader
            lessonId={currentLesson.id}
            lessonTitle={currentLesson.title}
            pageRange={currentLesson.pageRange}
          />
        )}
      </section>

      {/* 3. CHẾ ĐỘ HIỂN THỊ: LỘ TRÌNH 7 CHẶNG HOẶC DANH MỤC 36 BÀI */}
      {viewStyle === "curriculum" ? (
        /* CHẾ ĐỘ 1: LỘ TRÌNH SƯ PHẠM 7 CHẶNG */
        <section className="space-y-6 pt-6 border-t border-[#F5D06C]/25">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#F5D06C]" />
              Lộ Trình Tu Tập 7 Chặng (Từ Cơ Bản Đến Tinh Thông)
            </h3>
            <span className="text-xs text-amber-200/70 font-mono">Sư phạm Phật Gia Vịnh Xuân</span>
          </div>

          <div className="space-y-6">
            {CURRICULUM_STAGES.map((stage) => {
              const stageLessons = CANONICAL_LESSONS.filter((l) => stage.lessonIds.includes(l.id));
              return (
                <div key={stage.id} className="glass-panel p-5 sm:p-6 rounded-3xl border border-[#F5D06C]/30 space-y-4 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F5D06C]/20 pb-3">
                    <div>
                      <span className="text-xs font-mono font-bold text-[#F5D06C] uppercase tracking-wider">
                        Chặng {stage.sequence}
                      </span>
                      <h4 className="text-lg font-bold font-serif text-white">{stage.title}</h4>
                      <p className="text-xs text-amber-200/70 mt-0.5">{stage.desc}</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#20150F] text-[#F5D06C] border border-[#F5D06C]/30 self-start sm:self-auto">
                      {stageLessons.length} bài học
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {stageLessons.map((lesson) => {
                      const isSelected = lesson.id === selectedLessonId;
                      return (
                        <div
                          key={lesson.id}
                          onClick={() => handleSelectLesson(lesson.id)}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? "bg-[#F5D06C]/20 border-[#F5D06C] shadow-lg ring-2 ring-[#F5D06C]/40"
                              : "bg-[#20150F]/80 border-[#F5D06C]/25 hover:border-[#F5D06C] hover:bg-[#20150F]"
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between text-[11px] mb-1.5 font-mono">
                              <span className="font-bold text-[#2A0E0A] bg-[#F5D06C] px-2 py-0.5 rounded">
                                {lesson.pageRange}
                              </span>
                              <span className="text-amber-200/70">
                                {lesson.assetCount > 0 ? `${lesson.assetCount} Ảnh HD` : "Bài đọc"}
                              </span>
                            </div>
                            <h5 className="font-bold text-sm text-white line-clamp-2">{lesson.title}</h5>
                          </div>

                          <div className="mt-3 pt-2 border-t border-[#F5D06C]/15 flex items-center justify-between text-xs">
                            <span className="text-[#F5D06C] font-semibold flex items-center gap-1">
                              {isSelected ? "Đang chọn xem ✓" : "Nhấp để vào sàn tập"}
                            </span>
                            <ChevronRight className="w-3.5 h-3.5 text-amber-200/60" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        /* CHẾ ĐỘ 2: THEO THỨ TỰ 36 BÀI / 225 TRANG SÁCH GỐC */
        <section className="space-y-4 pt-6 border-t border-[#F5D06C]/25">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#F5D06C]" />
              Danh Mục Toàn Văn 36 Bài Giáo Trình Di Sản
            </h3>
            
            {/* Search input in book mode */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-amber-200/60 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm bài: Tiểu Niệm Đầu, Đao, Kiếm..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#20150F] border border-[#F5D06C]/30 text-white rounded-xl focus:outline-none focus:border-[#F5D06C] placeholder-amber-200/40"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {filteredLessons.map((lesson) => {
              const isSelected = lesson.id === selectedLessonId;
              return (
                <div
                  key={lesson.id}
                  onClick={() => handleSelectLesson(lesson.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#F5D06C]/20 border-[#F5D06C] shadow-lg ring-2 ring-[#F5D06C]/40"
                      : "bg-[#20150F]/80 border-[#F5D06C]/25 hover:border-[#F5D06C] hover:bg-[#20150F]"
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="px-2 py-0.5 rounded bg-[#2A0E0A] text-[#F5D06C] border border-[#F5D06C]/30 font-bold">
                        Bài {lesson.bookOrder.toString().padStart(2, "0")}
                      </span>
                      <span className="text-[#F5D06C] font-semibold">{lesson.contentType}</span>
                    </div>
                    <h5 className="font-bold text-sm text-white leading-snug">{lesson.title}</h5>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#F5D06C]/15 flex items-center justify-between text-xs text-amber-200/70">
                    <span>{lesson.assetCount} Ảnh phục chế</span>
                    <span className="text-[#F5D06C] font-semibold">{isSelected ? "Đang chọn ✓" : "Khám phá →"}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 4. MODAL KÍNH LÚP LIGHTBOX PHÓNG TO NÉT CĂNG */}
      {zoomedMotion && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setZoomedMotion(null)}
        >
          <div
            className="relative max-w-4xl w-full glass-panel rounded-3xl p-6 shadow-2xl border border-[#F5D06C]/40 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#F5D06C]/20 pb-3">
              <div>
                <span className="text-xs font-mono font-bold text-[#2A0E0A] bg-[#F5D06C] px-2.5 py-0.5 rounded">
                  Động Tác Số {zoomedMotion.stepNo} • Mã {zoomedMotion.displayId}
                </span>
                <h4 className="font-bold text-base text-white mt-1">
                  {currentLesson.title} — Động tác {zoomedMotion.stepNo}
                </h4>
              </div>
              <button
                onClick={() => setZoomedMotion(null)}
                className="p-2 rounded-xl bg-[#20150F] hover:bg-[#F5D06C] hover:text-[#2A0E0A] text-amber-200 transition border border-[#F5D06C]/30 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full h-[60vh] martial-photo-frame rounded-2xl overflow-hidden flex items-center justify-center border border-[#F5D06C]/40 p-4">
              <Image
                src={zoomedMotion.img2xUrl || zoomedMotion.imgUrl}
                alt={zoomedMotion.desc}
                fill
                className="object-contain martial-filter filter drop-shadow-md"
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
              />
            </div>

            <div className="flex items-center justify-between text-xs text-amber-200/80 font-mono">
              <span>Độ phân giải: {zoomedMotion.width} × {zoomedMotion.height} px (Retina 2×)</span>
              <span className="text-[#10B981] font-bold">100% Ảnh Phục Chế HD Chuẩn Xác</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
