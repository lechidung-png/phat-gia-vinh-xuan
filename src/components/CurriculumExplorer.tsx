"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  BookOpen,
  Layers,
  Compass,
  ChevronRight,
  Search,
  Sparkles,
  Swords,
  ArrowRight,
  X,
  Quote,
  Shield,
  Zap,
  ChevronDown,
  ChevronUp,
  UserCheck,
  LayoutGrid,
  FlipHorizontal,
  Maximize2,
  Globe,
} from "lucide-react";
import {
  CANONICAL_LESSONS,
  CanonicalLesson,
  MotionStep,
} from "@/data/canonicalCatalog";
import {
  FORMS_18_INTRO,
  FORM_CATEGORIES,
  FORMS_18_STAGES,
  getFormIntro,
  FormIntroduction,
} from "@/data/formsIntro";
import { DojoPlayer3 } from "@/components/DojoPlayer3";
import { MartialEmblem } from "@/components/MartialEmblem";
import { NavTab } from "@/components/Header";
import { cleanMotionTitle, extractMotionChieu } from "@/lib/formatters";

interface CurriculumExplorerProps {
  initialLessonId?: string;
  initialMotionIndex?: number;
  onNavigateTab?: (tab: NavTab) => void;
}

export const CurriculumExplorer: React.FC<CurriculumExplorerProps> = ({
  initialLessonId = "bai-07", // Mặc định mở Tiểu Niệm Đầu
  initialMotionIndex = 0,
  onNavigateTab,
}) => {
  // Lọc duy nhất 18 bài quyền & binh khí chính tông (có motions thị phạm thực tế)
  const FORMS_18 = useMemo(() => {
    return CANONICAL_LESSONS.filter((l) => l.motions && l.motions.length > 0);
  }, []);

  const [selectedLessonId, setSelectedLessonId] = useState<string>(initialLessonId);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewStyle, setViewStyle] = useState<"stages" | "catalog">("stages");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMotionIndex, setActiveMotionIndex] = useState(initialMotionIndex);
  const [zoomedMotion, setZoomedMotion] = useState<MotionStep | null>(null);
  const [activeFormTab, setActiveFormTab] = useState<"dojo" | "matrix" | "intro">("dojo");
  const [isIntroCollapsed, setIsIntroCollapsed] = useState(false);
  const [matrixSearch, setMatrixSearch] = useState("");
  const [isMatrixFlipped, setIsMatrixFlipped] = useState(false);

  // Đồng bộ khi prop initialLessonId thay đổi từ bên ngoài (URL params hoặc MegaMenu)
  const [prevInitialId, setPrevInitialId] = useState(initialLessonId);
  if (initialLessonId !== prevInitialId) {
    setPrevInitialId(initialLessonId);
    setSelectedLessonId(initialLessonId);
    setActiveMotionIndex(initialMotionIndex || 0);
    const targetIntro = getFormIntro(initialLessonId);
    if (targetIntro) {
      setSelectedCategory(targetIntro.category);
    }
  }

  // Bài quyền hiện tại
  const currentLesson: CanonicalLesson = useMemo(() => {
    return FORMS_18.find((l) => l.id === selectedLessonId) || FORMS_18[0];
  }, [selectedLessonId, FORMS_18]);

  // Thông tin Lời nói đầu & Triết lý yếu chỉ của bài hiện tại
  const currentFormIntro: FormIntroduction = useMemo(() => {
    return getFormIntro(currentLesson.id) || FORMS_18_INTRO["bai-07"];
  }, [currentLesson.id]);

  // Lắng nghe phím Escape để đóng Modal Lightbox phóng to ảnh
  useEffect(() => {
    if (!zoomedMotion) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setZoomedMotion(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomedMotion]);

  // Danh sách bài quyền thuộc phân hệ đang chọn (dành cho dải sub-lessons pills)
  const categoryLessons = useMemo(() => {
    if (selectedCategory === "all") {
      return FORMS_18;
    }
    return FORMS_18.filter((l) => {
      const intro = getFormIntro(l.id);
      return intro && intro.category === selectedCategory;
    });
  }, [selectedCategory, FORMS_18]);

  // Danh sách bài quyền được tìm kiếm ở chế độ catalog
  const filteredCatalogLessons = useMemo(() => {
    return FORMS_18.filter((l) => {
      const intro = getFormIntro(l.id);
      if (selectedCategory !== "all" && intro?.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          l.title.toLowerCase().includes(q) ||
          (intro?.meaning && intro.meaning.toLowerCase().includes(q)) ||
          (intro?.demonstrator && intro.demonstrator.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [selectedCategory, searchQuery, FORMS_18]);

  // Danh sách tư thế được lọc trong ma trận
  const filteredMatrixMotions = useMemo(() => {
    if (!matrixSearch.trim()) return currentLesson.motions;
    const q = matrixSearch.toLowerCase();
    return currentLesson.motions.filter(
      (m) =>
        m.desc?.toLowerCase().includes(q) ||
        m.stepNo.toString().includes(q) ||
        m.displayId?.toLowerCase().includes(q)
    );
  }, [currentLesson.motions, matrixSearch]);

  // Xử lý chọn phân hệ
  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    if (catId === "all") {
      // Giữ nguyên bài hiện tại
    } else {
      // Chọn bài đầu tiên của phân hệ đó
      const firstInCat = FORMS_18.find((l) => {
        const intro = getFormIntro(l.id);
        return intro && intro.category === catId;
      });
      if (firstInCat) {
        setSelectedLessonId(firstInCat.id);
        setActiveMotionIndex(0);
      }
    }
  };

  // Xử lý chọn một bài quyền
  const handleSelectForm = (formId: string) => {
    setSelectedLessonId(formId);
    setActiveMotionIndex(0);
    const targetIntro = getFormIntro(formId);
    if (targetIntro && selectedCategory !== "all" && selectedCategory !== targetIntro.category) {
      setSelectedCategory(targetIntro.category);
    }
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 340, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* 1. TOP HERO: 18 BÀI QUYỀN CHÍNH TÔNG & 5 ĐẠI PHÂN HỆ QUYỀN PHÁP */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#F5D06C]/35 relative overflow-hidden shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5D06C]/15 text-[#F5D06C] border border-[#F5D06C]/40 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#F5D06C]" />
              Hệ Thống Quyền Pháp Chính Tông • 18 Bài Quyền &amp; Binh Khí
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-white leading-tight">
              18 Bài Quyền Pháp &amp; Binh Khí
            </h2>
            <p className="text-xs sm:text-sm text-amber-200/80 leading-relaxed">
              Trọn bộ <strong>18 bài quyền &amp; binh khí thị phạm thực tế</strong> từ giáo trình chính thống: Tam Đại Quyền Pháp (Tiểu Niệm Đầu, Tầm Kiều, Tiêu Chỉ), 108 Thế liên hoàn (đơn luyện &amp; đối luyện), Mộc Nhân, Ngũ Hình Quyền (Long, Xà, Hổ, Báo, Hạc) và Kho Binh Khí Cổ Truyền (Bát Trảm Đao, Côn, Kiếm).
            </p>
          </div>

          {/* Switcher Buttons: Lộ trình Sư Phạm 5 Chặng vs Danh Mục 18 Bài */}
          <div className="flex flex-col sm:flex-row items-center gap-2 bg-[#20150F] p-1.5 rounded-2xl border border-[#F5D06C]/30 shrink-0 self-start md:self-auto">
            <button
              onClick={() => setViewStyle("stages")}
              className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer ${
                viewStyle === "stages"
                  ? "bg-[#F5D06C] text-[#2A0E0A] shadow-md border border-[#F5D06C]"
                  : "text-amber-200/70 hover:text-white"
              }`}
            >
              <Compass className="w-4 h-4" />
              <span className="hidden sm:inline">Lộ Trình 5 Chặng</span>
              <span className="sm:hidden">5 Chặng</span>
            </button>
            <button
              onClick={() => setViewStyle("catalog")}
              className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer ${
                viewStyle === "catalog"
                  ? "bg-[#F5D06C] text-[#2A0E0A] shadow-md border border-[#F5D06C]"
                  : "text-amber-200/70 hover:text-white"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Toàn Bộ 18 Bài</span>
              <span className="sm:hidden">18 Bài</span>
            </button>
          </div>
        </div>

        {/* 5 PHÂN HỆ QUYỀN PHÁP CHÍNH TÔNG */}
        <div className="mt-6 pt-5 border-t border-[#F5D06C]/20 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-[#F5D06C] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> 5 Phân Hệ Quyền Pháp &amp; Binh Khí:
            </span>
            <span className="text-[11px] font-mono text-amber-200/70">
              Nhấp chọn để lọc bài học
            </span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
            {FORM_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleSelectCategory(cat.id)}
                  className={`p-3 rounded-2xl text-xs transition text-left flex flex-col justify-between cursor-pointer border ${
                    isSelected
                      ? "bg-[#F5D06C] text-[#2A0E0A] font-bold shadow-lg border-[#F5D06C] ring-2 ring-[#F5D06C]/40"
                      : "bg-[#20150F] text-amber-200/80 hover:text-white border-[#F5D06C]/25 hover:border-[#F5D06C]"
                  }`}
                >
                  <span className="font-bold line-clamp-1">{cat.name}</span>
                  <span className="text-[10px] opacity-75 font-mono mt-1">
                    {cat.count} Bài Quyền
                  </span>
                </button>
              );
            })}
          </div>

          {/* DẢI BÀI QUYỀN CON CỦA PHÂN HỆ ĐANG CHỌN (SUB-LESSONS PILLS) */}
          {categoryLessons.length > 0 && (
            <div className="pt-2 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
              <span className="text-[11px] text-amber-200/90 font-bold uppercase shrink-0 flex items-center gap-1">
                <ChevronRight className="w-3.5 h-3.5 text-[#F5D06C]" />
                Chọn bài:
              </span>
              <div className="flex items-center gap-1.5 flex-nowrap">
                {categoryLessons.map((l) => {
                  const isCurrent = l.id === selectedLessonId;
                  return (
                    <button
                      key={l.id}
                      onClick={() => handleSelectForm(l.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition border cursor-pointer flex items-center gap-1.5 ${
                        isCurrent
                          ? "bg-gradient-to-r from-[#F5D06C] to-[#E2B743] text-[#2A0E0A] font-bold border-[#F5D06C] shadow-md shadow-[#F5D06C]/25"
                          : "bg-[#140C08] text-amber-200/80 hover:text-white border-[#F5D06C]/20 hover:border-[#F5D06C]/50"
                      }`}
                    >
                      <MartialEmblem formId={l.id} size={15} variant="icon" />
                      <span>{l.title}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                          isCurrent
                            ? "bg-[#2A0E0A] text-[#F5D06C]"
                            : "bg-[#F5D06C]/15 text-[#F5D06C]"
                        }`}
                      >
                        {l.motions.length} đòn
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 2. KHU VỰC TRÌNH BÀY BÀI QUYỀN: LỜI NÓI ĐẦU, TRIẾT LÝ YẾU CHỈ & PHÂN THẾ */}
      <section className="space-y-6 pt-1">
        
        {/* HEADER BÀI QUYỀN & CHUYỂN ĐỔI CHẾ ĐỘ XEM */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F5D06C]/20 pb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#F5D06C] uppercase tracking-wider bg-[#F5D06C]/15 border border-[#F5D06C]/30 px-3 py-1 rounded-lg">
                {currentFormIntro.category}
              </span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2.5 py-1 rounded-lg font-bold">
                {currentLesson.motions.length} động tác thị phạm
              </span>
              {currentFormIntro.demonstrator && (
                <span className="text-xs text-amber-200/80 bg-[#20150F] border border-[#F5D06C]/20 px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5 text-[#F5D06C]" />
                  {currentFormIntro.demonstrator}
                </span>
              )}
            </div>
            
            <div className="mt-2.5 flex items-center gap-3.5">
              <MartialEmblem
                formId={currentLesson.id}
                size={48}
                variant="badge"
                className="shrink-0 shadow-lg"
              />
              <div>
                <h3 className="text-2xl sm:text-4xl font-bold font-serif text-white flex items-center gap-3">
                  <span>{currentLesson.title}</span>
                  {currentFormIntro.hanziName && (
                    <span className="text-sm sm:text-base font-normal text-[#F5D06C]/70 font-sans">
                      ({currentFormIntro.hanziName})
                    </span>
                  )}
                </h3>
                <p className="text-xs sm:text-sm text-amber-200/80 italic mt-1 font-serif">
                  &ldquo;{currentFormIntro.meaning}&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Bộ 3 Tab Chế Độ Xem Cho Bài Quyền */}
          <div className="flex items-center gap-1 sm:gap-1.5 p-1 bg-[#140C08] border border-[#F5D06C]/30 rounded-2xl shrink-0 self-start sm:self-center shadow-lg overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveFormTab("dojo")}
              className={`px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs font-bold rounded-xl transition cursor-pointer flex items-center gap-1 sm:gap-1.5 whitespace-nowrap ${
                activeFormTab === "dojo"
                  ? "bg-[#F5D06C] text-[#2A0E0A] shadow-md shadow-[#F5D06C]/20"
                  : "text-amber-200/70 hover:text-white"
              }`}
            >
              <Swords className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Từng động tác ({currentLesson.motions.length})</span>
              <span className="sm:hidden">Chi tiết ({currentLesson.motions.length})</span>
            </button>
            <button
              onClick={() => setActiveFormTab("matrix")}
              className={`px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs font-bold rounded-xl transition cursor-pointer flex items-center gap-1 sm:gap-1.5 whitespace-nowrap ${
                activeFormTab === "matrix"
                  ? "bg-[#F5D06C] text-[#2A0E0A] shadow-md shadow-[#F5D06C]/20"
                  : "text-amber-200/70 hover:text-white"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Ma trận toàn bộ ({currentLesson.motions.length} thế)</span>
              <span className="sm:hidden">Ma trận ({currentLesson.motions.length})</span>
            </button>
            <button
              onClick={() => setActiveFormTab("intro")}
              className={`px-2.5 sm:px-3.5 py-1.5 sm:py-2 text-xs font-bold rounded-xl transition cursor-pointer flex items-center gap-1 sm:gap-1.5 whitespace-nowrap ${
                activeFormTab === "intro"
                  ? "bg-[#F5D06C] text-[#2A0E0A] shadow-md shadow-[#F5D06C]/20"
                  : "text-amber-200/70 hover:text-white"
              }`}
            >
              <MartialEmblem formId={currentLesson.id} size={15} variant="icon" />
              <span className="hidden sm:inline">Lời nói đầu &amp; Triết lý</span>
              <span className="sm:hidden">Triết lý</span>
            </button>
          </div>
        </div>

        {/* BANNER LỜI NÓI ĐẦU & TRIẾT LÝ YẾU CHỈ (HIỂN THỊ TRÊN ĐẦU KHI XEM PHÂN THẾ HOẶC TAB TRIẾT LÝ) */}
        {activeFormTab === "intro" ? (
          /* CHẾ ĐỘ TAB 1: HIỂN THỊ ĐẦY ĐỦ TOÀN DIỆN LỜI NÓI ĐẦU & TRIẾT LÝ YẾU CHỈ */
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#F5D06C]/40 space-y-6 shadow-2xl bg-gradient-to-br from-[#20150F] via-[#1A0E0A] to-[#140A06]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F5D06C]/20 pb-4">
              <div className="flex items-center gap-3.5">
                <MartialEmblem
                  formId={currentLesson.id}
                  size={52}
                  variant="badge"
                  className="shrink-0 shadow-xl"
                />
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#F5D06C]">
                    <Quote className="w-4 h-4 text-[#F5D06C]" />
                    <span>Lời Nói Đầu &amp; Triết Lý Võ Đạo • {currentLesson.title}</span>
                  </div>
                  <p className="text-xs text-amber-200/80 mt-0.5">
                    Huy hiệu linh thú &amp; Yếu lĩnh chân truyền Phật Gia Vịnh Xuân
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveFormTab("dojo")}
                className="px-4 py-2 rounded-xl bg-[#F5D06C] text-[#2A0E0A] font-bold text-xs flex items-center gap-1.5 hover:bg-[#F5D06C]/90 transition cursor-pointer shadow-md shrink-0 self-start sm:self-auto"
              >
                <span>Xem phân thế động tác</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Khối Ý Nghĩa & Triết Lý */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5D06C] mb-1">
                    1. Ý Nghĩa Danh Xưng &amp; Tôn Chỉ
                  </h4>
                  <p className="text-sm sm:text-base text-amber-100 font-serif leading-relaxed">
                    {currentFormIntro.meaning}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5D06C] mb-1">
                    2. Triết Lý Võ Đạo &amp; Nguyên Lý Vận Động
                  </h4>
                  <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed font-sans">
                    {currentFormIntro.philosophy}
                  </p>
                </div>

                {/* Khẩu quyết cốt tủy */}
                <div className="p-4 rounded-2xl bg-[#2A160E] border border-[#F5D06C]/30 shadow-inner">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#F5D06C] mb-1 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#F5D06C]" />
                    Khẩu Quyết Cốt Tủy
                  </div>
                  <p className="text-sm font-bold text-white font-serif italic">
                    &ldquo;{currentFormIntro.keyMantra}&rdquo;
                  </p>
                </div>
              </div>

              {/* Cột Phải: 3 Yếu Lĩnh Cốt Tử & Trích Đoạn Sách Gốc */}
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5D06C] mb-2 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#F5D06C]" />
                    3 Yếu Lĩnh Cốt Tử Khi Thực Hiện
                  </h4>
                  <div className="space-y-2.5">
                    {currentFormIntro.principles.map((pr, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#140C08] border border-[#F5D06C]/20 flex items-start gap-2.5 text-xs text-amber-100/90 leading-relaxed"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#F5D06C]/20 text-[#F5D06C] font-mono font-bold flex items-center justify-center shrink-0 text-[11px]">
                          {idx + 1}
                        </span>
                        <span>{pr}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trích đoạn giáo trình */}
                <div className="p-4 rounded-2xl bg-[#140C08] border-l-4 border-l-[#F5D06C] border border-[#F5D06C]/20 text-xs text-amber-200/80 italic font-serif leading-relaxed">
                  <span className="font-mono not-italic uppercase font-bold text-[#F5D06C] block mb-1 text-[10px]">
                    Trích Giáo Trình Chính Thống:
                  </span>
                  &ldquo;{currentFormIntro.introQuote}&rdquo;
                </div>
              </div>

              {/* Đối Chiếu Tinh Hoa Vịnh Xuân Thế Giới (Nếu có) */}
              {currentFormIntro.globalBridge && (
                <div className="col-span-1 md:col-span-2 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#24130A] to-[#160D08] border border-[#F5D06C]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2 text-[#F5D06C] text-xs font-mono font-bold uppercase tracking-wider">
                      <Globe className="w-3.5 h-3.5 text-[#F5D06C]" />
                      <span>Đối Chiếu Tinh Hoa Vịnh Xuân Thế Giới • {currentFormIntro.globalBridge.master}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 font-serif leading-relaxed">
                      <strong className="text-amber-200">{currentFormIntro.globalBridge.doctrine}:</strong> {currentFormIntro.globalBridge.correlation}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-[#F5D06C]/20 flex flex-wrap items-center justify-end gap-3">
              <button
                onClick={() => setActiveFormTab("matrix")}
                className="px-5 py-2.5 rounded-2xl bg-[#2A160E] hover:bg-[#3D1E14] text-[#F5D06C] border border-[#F5D06C]/40 font-bold text-xs sm:text-sm flex items-center gap-2 transition cursor-pointer shadow-md"
              >
                <LayoutGrid className="w-4 h-4" />
                <span>Xem ma trận toàn bộ ({currentLesson.motions.length} thế)</span>
              </button>
              <button
                onClick={() => setActiveFormTab("dojo")}
                className="px-6 py-2.5 rounded-2xl bg-[#F5D06C] hover:bg-[#E2B743] text-[#2A0E0A] font-bold text-xs sm:text-sm flex items-center gap-2 transition cursor-pointer shadow-lg shadow-[#F5D06C]/20"
              >
                <span>Luyện từng động tác (1 → {currentLesson.motions.length})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : activeFormTab === "matrix" ? (
          /* CHẾ ĐỘ TAB 2: MA TRẬN TOÀN BỘ CÁC TƯ THẾ (GRID VIEW) */
          <div className="space-y-4 animate-fadeIn">
            {/* Thanh công cụ của ma trận */}
            <div className="glass-panel p-4 rounded-2xl border border-[#F5D06C]/30 bg-[#1A0E0A]/90 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="p-2 rounded-xl bg-[#F5D06C]/15 text-[#F5D06C] border border-[#F5D06C]/30 shrink-0">
                  <LayoutGrid className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-white font-serif flex items-center gap-2">
                    <span>Bảng Ma Trận Toàn Cảnh: {currentLesson.title}</span>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-800/40 text-emerald-400 font-bold">
                      {currentLesson.motions.length} tư thế liên hoàn
                    </span>
                  </h4>
                  <p className="text-xs text-amber-200/70 mt-0.5">
                    Hiển thị trọn vẹn toàn bộ các thế võ dạng ô ma trận. Bấm vào bất kỳ ô nào để phóng to xem chi tiết hoặc chuyển sang luyện tập từng bước.
                  </p>
                </div>
              </div>

              {/* Bộ lọc nhanh trong ma trận + Lật gương */}
              <div className="flex items-center gap-2 shrink-0 self-start md:self-auto">
                <div className="relative w-44 sm:w-56">
                  <Search className="w-3.5 h-3.5 text-amber-200/60 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={matrixSearch}
                    onChange={(e) => setMatrixSearch(e.target.value)}
                    placeholder="Lọc thế: Bàng thủ, bái tổ..."
                    className="w-full pl-8 pr-2.5 py-1.5 text-xs bg-[#20150F] border border-[#F5D06C]/30 text-white rounded-xl focus:outline-none focus:border-[#F5D06C] placeholder-amber-200/40"
                  />
                  {matrixSearch && (
                    <button
                      onClick={() => setMatrixSearch("")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-amber-200/50 hover:text-white"
                      title="Xóa tìm kiếm"
                      aria-label="Xóa bộ lọc tìm kiếm"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>

                <button
                  onClick={() => setIsMatrixFlipped(!isMatrixFlipped)}
                  aria-label="Lật gương toàn bộ hình để tập hướng đối xứng"
                  className={`p-2 rounded-xl text-xs font-semibold border transition cursor-pointer flex items-center gap-1.5 ${
                    isMatrixFlipped
                      ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C] font-bold shadow"
                      : "bg-[#20150F] text-amber-200/80 border-[#F5D06C]/25 hover:text-white"
                  }`}
                  title="Lật gương toàn bộ hình để tập hướng đối xứng"
                >
                  <FlipHorizontal className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline text-[11px]">Lật gương</span>
                </button>
              </div>
            </div>

            {/* LƯỚI MA TRẬN CÁC TƯ THẾ */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
              {filteredMatrixMotions.map((motion, idx) => {
                const isActive = activeMotionIndex === idx;
                return (
                  <div
                    key={motion.id || idx}
                    onClick={() => setZoomedMotion(motion)}
                    className={`glass-panel group relative rounded-2xl border transition-all duration-200 p-2.5 sm:p-3 cursor-pointer flex flex-col justify-between ${
                      isActive
                        ? "bg-[#2D180F] border-[#F5D06C] shadow-lg shadow-[#F5D06C]/15 ring-2 ring-[#F5D06C]/40"
                        : "bg-[#180E0A]/90 hover:bg-[#24130D] border-[#F5D06C]/25 hover:border-[#F5D06C]/70 hover:shadow-xl"
                    }`}
                  >
                    {/* Header ô ma trận */}
                    <div className="flex items-center justify-between text-[11px] mb-2 font-mono">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-bold text-[#2A0E0A] bg-gradient-to-r from-[#F5D06C] to-[#E2B743] px-2 py-0.5 rounded-md shadow-xs">
                          Thế {motion.stepNo}
                        </span>
                        {extractMotionChieu(motion.desc) && (
                          <span className="text-[10px] text-[#F5D06C] bg-[#F5D06C]/10 border border-[#F5D06C]/30 px-1.5 py-0.5 rounded font-sans font-medium">
                            {extractMotionChieu(motion.desc)}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-amber-200/60 font-mono">
                        {motion.displayId}
                      </span>
                    </div>

                    {/* Khung ảnh võ sư 2x Retina */}
                    <div className="relative rounded-xl overflow-hidden bg-[#FBF9F5] p-2 shadow-inner border border-[#F5D06C]/30 flex items-center justify-center aspect-[3/4]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={motion.img2xUrl || motion.imgUrl}
                        alt={cleanMotionTitle(motion.desc) || `Thế ${motion.stepNo}`}
                        className={`h-full w-auto object-contain filter drop-shadow-sm transition-transform duration-200 group-hover:scale-105 ${
                          isMatrixFlipped ? "scale-x-[-1]" : ""
                        }`}
                        loading="lazy"
                      />
                      <span className="absolute bottom-1 right-1 p-1 rounded-md bg-black/60 text-[#F5D06C] opacity-0 group-hover:opacity-100 transition">
                        <Maximize2 className="w-3 h-3" />
                      </span>
                    </div>

                    {/* Mô tả tư thế */}
                    <div className="mt-2.5 space-y-2">
                      <p className="text-xs font-serif text-amber-100/95 line-clamp-2 leading-snug group-hover:text-white transition">
                        {cleanMotionTitle(motion.desc) || `Động tác thứ ${motion.stepNo} của bài ${currentLesson.title}.`}
                      </p>


                      <div className="pt-2 border-t border-[#F5D06C]/15 flex items-center justify-between text-[11px]">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveMotionIndex(idx);
                            setActiveFormTab("dojo");
                          }}
                          className="w-full py-1.5 px-2 rounded-lg bg-[#F5D06C]/15 hover:bg-[#F5D06C] text-[#F5D06C] hover:text-[#2A0E0A] font-semibold transition text-center flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <span>Luyện thế này</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredMatrixMotions.length === 0 && (
              <div className="glass-panel p-8 rounded-3xl border border-[#F5D06C]/30 text-center space-y-2">
                <p className="text-amber-200/90 text-sm">
                  Không tìm thấy tư thế nào phù hợp với từ khóa &ldquo;{matrixSearch}&rdquo;.
                </p>
                <button
                  onClick={() => setMatrixSearch("")}
                  className="px-3 py-1.5 rounded-xl bg-[#F5D06C] text-[#2A0E0A] font-bold text-xs"
                >
                  Xóa bộ lọc
                </button>
              </div>
            )}
          </div>
        ) : (
          /* CHẾ ĐỘ TAB 3: HIỂN THỊ PHÂN THẾ ĐỘNG TÁC + KHUNG TÓM TẮT TRIẾT LÝ PHÍA TRÊN */
          <div className="space-y-4">
            
            {/* Thanh Tóm Tắt Triết Lý Gọn Nhẹ Phía Trên Trình Phát Động Tác */}
            <div className="glass-panel p-4 rounded-2xl border border-[#F5D06C]/30 bg-[#1A0E0A]/90 shadow-md">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="p-1.5 rounded-lg bg-[#F5D06C]/15 text-[#F5D06C] shrink-0">
                    <Quote className="w-3.5 h-3.5" />
                  </span>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono font-bold text-[#F5D06C] uppercase tracking-wider block">
                      Yếu Quyết: {currentFormIntro.keyMantra}
                    </span>
                    <p className="text-xs text-amber-100/90 truncate font-serif italic">
                      &ldquo;{currentFormIntro.meaning}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setIsIntroCollapsed(!isIntroCollapsed)}
                    className="p-1.5 rounded-xl bg-[#20150F] hover:bg-[#2E1810] text-amber-200/80 hover:text-[#F5D06C] border border-[#F5D06C]/25 text-xs font-semibold flex items-center gap-1 transition cursor-pointer"
                    title={isIntroCollapsed ? "Mở rộng triết lý" : "Thu gọn"}
                  >
                    <span className="hidden sm:inline text-[11px]">
                      {isIntroCollapsed ? "Xem yếu lĩnh" : "Thu gọn"}
                    </span>
                    {isIntroCollapsed ? (
                      <ChevronDown className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronUp className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <button
                    onClick={() => setActiveFormTab("intro")}
                    className="px-2.5 py-1.5 rounded-xl bg-[#F5D06C]/15 hover:bg-[#F5D06C]/25 text-[#F5D06C] border border-[#F5D06C]/30 text-[11px] font-bold transition cursor-pointer"
                  >
                    Xem toàn bộ triết lý
                  </button>
                </div>
              </div>

              {/* Nội dung mở rộng khi không thu gọn */}
              {!isIntroCollapsed && (
                <div className="mt-3 pt-3 border-t border-[#F5D06C]/15 grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs text-amber-100/90">
                  {currentFormIntro.principles.map((pr, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-[#140C08] border border-[#F5D06C]/15 flex items-start gap-2"
                    >
                      <span className="text-[#F5D06C] font-mono font-bold text-[10px] bg-[#F5D06C]/15 px-1.5 py-0.5 rounded">
                        #{i + 1}
                      </span>
                      <span className="leading-snug text-[11px]">{pr}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* TRÌNH PHÁT PHÂN THẾ ĐỘNG TÁC (DOJO PLAYER 3.0) */}
            <DojoPlayer3
              lesson={currentLesson}
              activeMotionIndex={activeMotionIndex}
              onSelectMotionIndex={setActiveMotionIndex}
              onOpenLightbox={(motion) => setZoomedMotion(motion)}
            />
          </div>
        )}
      </section>

      {/* 3. CHẾ ĐỘ KHÁM PHÁ BÊN DƯỚI: LỘ TRÌNH 5 CHẶNG HOẶC DANH MỤC 18 BÀI */}
      {viewStyle === "stages" ? (
        /* CHẾ ĐỘ 1: LỘ TRÌNH SƯ PHẠM 5 CHẶNG (CHUẨN XÁC 18 BÀI) */
        <section className="space-y-6 pt-6 border-t border-[#F5D06C]/25">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-[#F5D06C]" />
                Lộ Trình Sư Phạm 5 Chặng (18 Bài Quyền &amp; Binh Khí)
              </h3>
              <p className="text-xs text-amber-200/70 mt-0.5">
                Trình tự tu tập khoa học từ cơ bản đến tinh thông của Phật Gia Vịnh Xuân
              </p>
            </div>
            <span className="text-xs text-[#F5D06C] font-mono bg-[#20150F] border border-[#F5D06C]/30 px-3 py-1.5 rounded-xl self-start sm:self-auto">
              5 Chặng • Đủ 18 Bài
            </span>
          </div>

          <div className="space-y-6">
            {FORMS_18_STAGES.map((stage) => {
              const stageLessons = FORMS_18.filter((l) => stage.formIds.includes(l.id));
              return (
                <div
                  key={stage.id}
                  className="glass-panel p-5 sm:p-6 rounded-3xl border border-[#F5D06C]/30 space-y-4 shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F5D06C]/20 pb-3">
                    <div>
                      <span className="text-xs font-mono font-bold text-[#F5D06C] uppercase tracking-wider">
                        Chặng {stage.sequence}
                      </span>
                      <h4 className="text-lg font-bold font-serif text-white">{stage.title}</h4>
                      <p className="text-xs text-amber-200/70 mt-0.5">{stage.desc}</p>
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#20150F] text-[#F5D06C] border border-[#F5D06C]/30 self-start sm:self-auto">
                      {stageLessons.length} bài quyền
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {stageLessons.map((lesson) => {
                      const isSelected = lesson.id === selectedLessonId;
                      const intro = getFormIntro(lesson.id);
                      return (
                        <div
                          key={lesson.id}
                          role="button"
                          tabIndex={0}
                          onClick={() => handleSelectForm(lesson.id)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              handleSelectForm(lesson.id);
                            }
                          }}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? "bg-[#F5D06C]/20 border-[#F5D06C] shadow-lg ring-2 ring-[#F5D06C]/40"
                              : "bg-[#20150F]/80 border-[#F5D06C]/25 hover:border-[#F5D06C] hover:bg-[#20150F]"
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between text-[11px] mb-2 font-mono">
                              <span className="font-bold text-[#2A0E0A] bg-[#F5D06C] px-2 py-0.5 rounded">
                                {lesson.motions.length} động tác
                              </span>
                              <span className="text-amber-200/70">
                                {intro?.category}
                              </span>
                            </div>
                            <div className="flex items-start gap-3">
                              <MartialEmblem
                                formId={lesson.id}
                                size={40}
                                variant="badge"
                                className="shrink-0"
                              />
                              <div className="min-w-0 flex-1">
                                <h5 className="font-bold text-sm text-white line-clamp-1">{lesson.title}</h5>
                                {intro?.meaning && (
                                  <p className="text-xs text-amber-200/80 line-clamp-2 mt-1 font-serif italic">
                                    &ldquo;{intro.meaning}&rdquo;
                                  </p>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="mt-3 pt-2 border-t border-[#F5D06C]/15 flex items-center justify-between text-xs">
                            <span className="text-[#F5D06C] font-semibold flex items-center gap-1">
                              {isSelected ? "Đang chọn xem ✓" : "Nhấp để xem"}
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
        /* CHẾ ĐỘ 2: THEO DANH MỤC TOÀN BỘ 18 BÀI */
        <section className="space-y-4 pt-6 border-t border-[#F5D06C]/25">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#F5D06C]" />
                Danh Mục 18 Bài Quyền &amp; Binh Khí
              </h3>
              <p className="text-xs text-amber-200/70">
                Tìm kiếm và tra cứu nhanh bài quyền theo tên gọi hoặc người thị phạm
              </p>
            </div>
            
            {/* Ô tìm kiếm */}
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
            {filteredCatalogLessons.map((lesson) => {
              const isSelected = lesson.id === selectedLessonId;
              const intro = getFormIntro(lesson.id);
              return (
                <div
                  key={lesson.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleSelectForm(lesson.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleSelectForm(lesson.id);
                    }
                  }}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#F5D06C]/20 border-[#F5D06C] shadow-lg ring-2 ring-[#F5D06C]/40"
                      : "bg-[#20150F]/80 border-[#F5D06C]/25 hover:border-[#F5D06C] hover:bg-[#20150F]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] mb-2 font-mono">
                      <span className="font-bold text-[#2A0E0A] bg-[#F5D06C] px-2 py-0.5 rounded">
                        {lesson.motions.length} động tác
                      </span>
                      <span className="text-amber-200/70">
                        {intro?.category}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MartialEmblem
                        formId={lesson.id}
                        size={40}
                        variant="badge"
                        className="shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <h5 className="font-bold text-sm text-white line-clamp-1">{lesson.title}</h5>
                        {intro?.meaning && (
                          <p className="text-xs text-amber-200/80 line-clamp-2 mt-1 font-serif italic">
                            &ldquo;{intro.meaning}&rdquo;
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-[#F5D06C]/15 flex items-center justify-between text-xs">
                    <span className="text-[#F5D06C] font-semibold flex items-center gap-1">
                      {isSelected ? "Đang chọn xem ✓" : "Nhấp để xem"}
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-amber-200/60" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 4. CHỈ DẪN TRANG TRỌNG VỀ PHẦN LÝ THUYẾT & CHUYÊN ĐỀ KHẢO CỨU */}
      <section className="p-4 sm:p-5 rounded-2xl bg-[#180E09] border border-[#F5D06C]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="p-2.5 rounded-xl bg-[#F5D06C]/15 text-[#F5D06C] shrink-0">
            <BookOpen className="w-5 h-5" />
          </span>
          <div>
            <h4 className="text-sm font-bold text-white font-serif">
              Bạn Muốn Khảo Cứu Toàn Văn Lý Thuyết &amp; Lịch Sử Môn Phái?
            </h4>
            <p className="text-xs text-amber-200/70">
              18 chuyên đề văn bản: Lịch sử Nam Thiếu Lâm, Khí công dưỡng sinh, Cốt tủy khẩu quyết, Linh giác... được lưu trữ trọn vẹn tại phân hệ Khảo Cứu.
            </p>
          </div>
        </div>
        {onNavigateTab ? (
          <button
            onClick={() => onNavigateTab("library")}
            className="text-xs font-bold text-[#F5D06C] bg-[#2A160E] hover:bg-[#3D140E] px-4 py-2 rounded-xl border border-[#F5D06C]/40 shrink-0 self-start sm:self-auto transition cursor-pointer flex items-center gap-1.5 shadow-md"
          >
            <span>Mở Tab &ldquo;Lý Thuyết&rdquo;</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <span className="text-xs font-bold text-[#F5D06C] bg-[#2A160E] px-3 py-1.5 rounded-xl border border-[#F5D06C]/30 shrink-0 self-start sm:self-auto">
            Xem Tab &ldquo;Lý Thuyết&rdquo; Trên Menu
          </span>
        )}
      </section>

      {/* 5. MODAL LIGHTBOX PHÓNG TO ẢNH ĐỘNG TÁC (2X RETINA) */}
      {zoomedMotion && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Phóng to ảnh động tác"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 overflow-hidden max-w-full w-full"
          onClick={() => setZoomedMotion(null)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[92vh] bg-[#1C0A06] border border-[#F5D06C]/40 rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col items-center gap-3 sm:gap-4 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="w-full flex items-center justify-between border-b border-[#F5D06C]/20 pb-3">
              <div className="min-w-0 pr-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-mono font-bold text-[#F5D06C] uppercase tracking-wider">
                    Động Tác {zoomedMotion.stepNo}
                  </span>
                  {extractMotionChieu(zoomedMotion.desc) && (
                    <span className="px-1.5 py-0.5 rounded bg-[#F5D06C]/15 border border-[#F5D06C]/30 text-[#F5D06C] text-[10px] font-mono font-semibold">
                      {extractMotionChieu(zoomedMotion.desc)}
                    </span>
                  )}
                </div>
                <h4 className="text-base sm:text-lg font-bold font-serif text-white mt-0.5 truncate">
                  {currentLesson.title}
                </h4>
              </div>
              <button
                onClick={() => setZoomedMotion(null)}
                className="min-w-[44px] min-h-[44px] p-2.5 rounded-xl bg-[#2A0E0A] hover:bg-[#3D140E] text-amber-200 hover:text-white border border-[#F5D06C]/40 transition flex items-center justify-center cursor-pointer shrink-0"
                title="Đóng (Esc)"
                aria-label="Đóng cửa sổ phóng to ảnh"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Khung ảnh phóng to */}
            <div className="relative rounded-2xl overflow-hidden bg-[#FBF9F5] p-2 sm:p-3 shadow-inner border border-[#F5D06C]/40 max-h-[55vh] flex items-center justify-center w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={zoomedMotion.img2xUrl || zoomedMotion.imgUrl}
                alt={cleanMotionTitle(zoomedMotion.desc) || `Động tác ${zoomedMotion.stepNo}`}
                className="max-h-[50vh] w-auto max-w-full object-contain rounded-lg filter drop-shadow-md"
              />
            </div>

            {/* Mô tả động tác */}
            {zoomedMotion.desc && (
              <p className="text-xs sm:text-sm text-amber-100 text-center font-serif leading-relaxed max-w-lg px-1">
                &ldquo;{cleanMotionTitle(zoomedMotion.desc)}&rdquo;
              </p>
            )}

            <div className="text-[10px] font-mono text-amber-200/50 uppercase tracking-widest">
              Mã động tác: {zoomedMotion.displayId}
            </div>

            {/* Nút Đóng Ở Đáy Dễ Bấm Bằng Ngón Cái (Chỉ hiện trên Mobile) */}
            <div className="w-full pt-2 sm:hidden border-t border-[#F5D06C]/20">
              <button
                onClick={() => setZoomedMotion(null)}
                className="w-full py-3 px-4 rounded-xl bg-[#F5D06C] text-[#2A0E0A] font-bold text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                aria-label="Đóng cửa sổ phóng to ảnh"
              >
                <X className="w-4 h-4" />
                <span>Đóng Cửa Sổ</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
