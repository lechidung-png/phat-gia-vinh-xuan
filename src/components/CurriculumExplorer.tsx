"use client";

import React, { useState, useMemo } from "react";
import {
  BookOpen,
  Layers,
  Compass,
  ChevronRight,
  Search,
  Sparkles,
  Swords,
  ArrowRight,
} from "lucide-react";
import {
  CONTENT_GROUPS,
  CANONICAL_LESSONS,
  CURRICULUM_STAGES,
  CanonicalLesson,
  MotionStep,
} from "@/data/canonicalCatalog";
import { DojoPlayer3 } from "@/components/DojoPlayer3";

interface CurriculumExplorerProps {
  initialLessonId?: string;
}

export const CurriculumExplorer: React.FC<CurriculumExplorerProps> = ({
  initialLessonId = "bai-06-m-1", // Mặc định mở Tiểu Niệm Đầu
}) => {
  const [viewStyle, setViewStyle] = useState<"curriculum" | "book">("curriculum");
  const [selectedLessonId, setSelectedLessonId] = useState<string>(initialLessonId);
  const [selectedGroupId, setSelectedGroupId] = useState<string>("quyen-tay-khong"); // Mặc định nhóm quyền tay không
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMotionIndex, setActiveMotionIndex] = useState(0);
  const [, setZoomedMotion] = useState<MotionStep | null>(null);

  // Đồng bộ khi prop initialLessonId thay đổi từ bên ngoài (theo React pattern)
  const [prevInitialId, setPrevInitialId] = useState(initialLessonId);
  if (initialLessonId !== prevInitialId) {
    setPrevInitialId(initialLessonId);
    setSelectedLessonId(initialLessonId);
    setActiveMotionIndex(0);
    const target = CANONICAL_LESSONS.find((l) => l.id === initialLessonId);
    if (target && target.groupId) {
      setSelectedGroupId(target.groupId);
    }
  }

  // Bài học hiện tại
  const currentLesson: CanonicalLesson = useMemo(() => {
    return CANONICAL_LESSONS.find((l) => l.id === selectedLessonId) || CANONICAL_LESSONS[6]; // Tiểu Niệm Đầu
  }, [selectedLessonId]);

  // Danh sách bài học thuộc phân hệ đang chọn (dành cho dải Sub-lessons bar)
  const currentGroupLessons = useMemo(() => {
    if (selectedGroupId === "all") {
      return CANONICAL_LESSONS.filter((l) => l.motions.length > 0);
    }
    return CANONICAL_LESSONS.filter((l) => l.groupId === selectedGroupId);
  }, [selectedGroupId]);

  // Bộ lọc danh sách bài học ở mục dưới
  const filteredLessons = useMemo(() => {
    return CANONICAL_LESSONS.filter((lesson) => {
      if (selectedGroupId !== "all" && lesson.groupId !== selectedGroupId) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          lesson.title.toLowerCase().includes(q) ||
          lesson.id.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedGroupId, searchQuery]);

  // Xử lý khi chọn một Phân Hệ: TỰ ĐỘNG CHỌN BÀI ĐẦU TIÊN CỦA PHÂN HỆ ĐÓ
  const handleSelectGroup = (groupId: string) => {
    setSelectedGroupId(groupId);
    if (groupId === "all") {
      // Nếu chọn tất cả, giữ bài hiện tại hoặc chọn bài có động tác đầu tiên
      const firstValid = CANONICAL_LESSONS.find((l) => l.motions.length > 0);
      if (firstValid) {
        setSelectedLessonId(firstValid.id);
        setActiveMotionIndex(0);
      }
    } else {
      // Tìm bài đầu tiên thuộc phân hệ đó (ưu tiên bài có động tác)
      const groupLessons = CANONICAL_LESSONS.filter((l) => l.groupId === groupId);
      const firstWithMotions = groupLessons.find((l) => l.motions.length > 0) || groupLessons[0];
      if (firstWithMotions) {
        setSelectedLessonId(firstWithMotions.id);
        setActiveMotionIndex(0);
      }
    }
  };

  const handleSelectLesson = (lessonId: string) => {
    setSelectedLessonId(lessonId);
    setActiveMotionIndex(0);
    const target = CANONICAL_LESSONS.find((l) => l.id === lessonId);
    if (target && target.groupId) {
      setSelectedGroupId(target.groupId);
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
              Bách Khoa Võ Học Toàn Vẹn • 1.096 Thế Đòn Thị Phạm
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-white leading-tight">
              Bách Khoa Quyền Pháp &amp; Binh Khí Phật Gia Vịnh Xuân
            </h2>
            <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed">
              Trọn bộ <strong>11 Đại phân hệ</strong> và <strong>36 Bài học kinh điển</strong>: Quyền tay không (Tiểu Niệm Đầu, Tầm Kiều, Tiêu Chỉ, 108 Thế) đến Ngũ Hình Quyền (Long, Xà, Hổ, Báo, Hạc), Cọc gỗ Mộc Nhân, Bát Trảm Đao, Côn Pháp, Liễu Diệp Kiếm, Linh Giác và Nội Công.
            </p>
          </div>

          {/* Switcher Buttons: Lộ trình Sư Phạm vs Theo Danh Mục Bài */}
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
              <span>Toàn Bộ Bài Học</span>
            </button>
          </div>
        </div>

        {/* 11 GROUPS MATRIX GRID (KHÔNG CÒN SỐ TRANG, KHÔNG CUỘN NGANG) */}
        <div className="mt-6 pt-5 border-t border-[#F5D06C]/20 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#F5D06C] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Ma Trận 11 Phân Hệ Võ Học:
            </span>
            <span className="text-[11px] font-mono text-amber-200/70">
              Nhấp chọn để vào ngay sàn tập của phân hệ
            </span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            <button
              onClick={() => handleSelectGroup("all")}
              className={`p-3 rounded-2xl text-xs font-semibold transition text-left flex flex-col justify-between cursor-pointer border ${
                selectedGroupId === "all"
                  ? "bg-[#F5D06C] text-[#2A0E0A] font-bold shadow-lg border-[#F5D06C] ring-2 ring-[#F5D06C]/40"
                  : "bg-[#20150F] text-amber-200/80 hover:text-white border-[#F5D06C]/25 hover:border-[#F5D06C]"
              }`}
            >
              <span className="font-bold">Tất Cả Bài Học</span>
              <span className="text-[10px] opacity-75 font-mono mt-1">36 Bài Giáo Trình</span>
            </button>

            {CONTENT_GROUPS.map((g) => {
              const isSelected = selectedGroupId === g.id;
              const count = CANONICAL_LESSONS.filter((l) => l.groupId === g.id).length;
              return (
                <button
                  key={g.id}
                  onClick={() => handleSelectGroup(g.id)}
                  className={`p-3 rounded-2xl text-xs transition text-left flex flex-col justify-between cursor-pointer border ${
                    isSelected
                      ? "bg-[#F5D06C] text-[#2A0E0A] font-bold shadow-lg border-[#F5D06C] ring-2 ring-[#F5D06C]/40"
                      : "bg-[#20150F] text-amber-200/80 hover:text-white border-[#F5D06C]/25 hover:border-[#F5D06C]"
                  }`}
                >
                  <span className="font-bold line-clamp-1">{g.name}</span>
                  <span className="text-[10px] opacity-75 font-mono mt-1">
                    {count} Bài Học
                  </span>
                </button>
              );
            })}
          </div>

          {/* DẢI BÀI HỌC CON CỦA PHÂN HỆ ĐANG CHỌN (SUB-LESSONS PILLS) */}
          {currentGroupLessons.length > 0 && (
            <div className="pt-2 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
              <span className="text-[11px] text-amber-200/90 font-bold uppercase shrink-0 flex items-center gap-1">
                <ChevronRight className="w-3.5 h-3.5 text-[#F5D06C]" />
                Chọn bài tập:
              </span>
              <div className="flex items-center gap-1.5 flex-nowrap">
                {currentGroupLessons.map((l) => {
                  const isCurrent = l.id === selectedLessonId;
                  return (
                    <button
                      key={l.id}
                      onClick={() => handleSelectLesson(l.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition border cursor-pointer flex items-center gap-1.5 ${
                        isCurrent
                          ? "bg-gradient-to-r from-[#F5D06C] to-[#E2B743] text-[#2A0E0A] font-bold border-[#F5D06C] shadow-md shadow-[#F5D06C]/25"
                          : "bg-[#140C08] text-amber-200/80 hover:text-white border-[#F5D06C]/20 hover:border-[#F5D06C]/50"
                      }`}
                    >
                      <span>{l.title}</span>
                      {l.motions.length > 0 && (
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                            isCurrent
                              ? "bg-[#2A0E0A] text-[#F5D06C]"
                              : "bg-[#F5D06C]/15 text-[#F5D06C]"
                          }`}
                        >
                          {l.motions.length} đòn
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 2. KHU VỰC SÀN TẬP PHÂN THẾ VÕ HỌC (DOJO PLAYER CHÍNH) */}
      <section className="space-y-4 pt-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#F5D06C]/20 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#F5D06C] uppercase tracking-wider bg-[#F5D06C]/15 border border-[#F5D06C]/30 px-3 py-1 rounded-lg">
                Sàn Tập Phân Thế • Di Sản Võ Phái
              </span>
              {currentLesson.motions.length > 0 && (
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-0.5 rounded-md">
                  {currentLesson.motions.length} Động Tác Chuẩn Xác
                </span>
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white mt-1.5">
              {currentLesson.title}
            </h3>
          </div>
        </div>

        {/* Nội dung: Hiển thị Dojo Player khi có động tác, hoặc thẻ tóm tắt khi là bài lý thuyết */}
        {currentLesson.motions.length > 0 ? (
          <DojoPlayer3
            lesson={currentLesson}
            activeMotionIndex={activeMotionIndex}
            onSelectMotionIndex={setActiveMotionIndex}
            onOpenLightbox={(motion) => setZoomedMotion(motion)}
          />
        ) : (
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#F5D06C]/30 text-center space-y-4 shadow-xl">
            <div className="w-16 h-16 rounded-2xl bg-[#2A0E0A] border-2 border-[#F5D06C]/50 flex items-center justify-center mx-auto text-[#F5D06C] shadow-lg shadow-[#F5D06C]/20">
              <BookOpen className="w-8 h-8" />
            </div>
            <div className="space-y-2 max-w-xl mx-auto">
              <h4 className="text-xl sm:text-2xl font-bold font-serif text-white">
                {currentLesson.title}
              </h4>
              <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed">
                Bài học này thuộc phần lý luận, lịch sử và tổng quan tư liệu của môn phái. Để tiếp tục luyện tập thực hành thân pháp và thủ pháp, quý võ sinh vui lòng chọn các bài quyền thực hành dưới đây.
              </p>
            </div>
            <div className="pt-2 flex justify-center">
              <button
                onClick={() => handleSelectLesson("bai-06-m-1")}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#F5D06C] to-[#C27D38] text-[#2A0E0A] font-bold text-xs sm:text-sm hover:brightness-110 transition shadow-lg shadow-[#F5D06C]/20 flex items-center gap-2 cursor-pointer"
              >
                <Swords className="w-4 h-4" />
                <span>Vào Sàn Tập Tiểu Niệm Đầu (52 Đòn)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 3. CHẾ ĐỘ HIỂN THỊ: LỘ TRÌNH 7 CHẶNG HOẶC DANH MỤC TOÀN BỘ BÀI HỌC */}
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
                                {lesson.motions.length > 0 ? `${lesson.motions.length} Động Tác` : "Bài Đọc"}
                              </span>
                              <span className="text-amber-200/70">
                                {lesson.contentType === "reading" ? "Lý Luận" : "Sàn Tập"}
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
        /* CHẾ ĐỘ 2: THEO DANH MỤC TOÀN BỘ BÀI HỌC */
        <section className="space-y-4 pt-6 border-t border-[#F5D06C]/25">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#F5D06C]" />
              Danh Mục Toàn Bộ Bài Giáo Trình
            </h3>
            
            {/* Search input */}
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
                  <div>
                    <div className="flex items-center justify-between text-[11px] mb-1.5 font-mono">
                      <span className="font-bold text-[#2A0E0A] bg-[#F5D06C] px-2 py-0.5 rounded">
                        {lesson.motions.length > 0 ? `${lesson.motions.length} Đòn` : "Lý Thuyết"}
                      </span>
                      <span className="text-amber-200/70">
                        {lesson.groupId}
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
        </section>
      )}

    </div>
  );
};
