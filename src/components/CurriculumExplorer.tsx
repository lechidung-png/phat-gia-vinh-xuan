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
  HeartPulse,
  GraduationCap,
  Scale,
  PlayCircle,
  Film,
  Columns,
  Eye,
  CheckCircle2,
  ChevronLeft,
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
  CLASSICAL_6_PILLARS,
  LINEAGE_SCHOLARLY_INSIGHTS,
  COMPOSITE_TRAINING_ROUTINE_8,
  getFormIntro,
  FormIntroduction,
} from "@/data/formsIntro";
import {
  getMasterVideosForForm,
  AUTHORITATIVE_REFERENCES,
  MasterVideoItem,
} from "@/data/masterVideos";
import { DojoPlayer3 } from "@/components/DojoPlayer3";
import { MartialEmblem } from "@/components/MartialEmblem";
import { NavTab } from "@/components/Header";
import { cleanMotionTitle, extractMotionChieu } from "@/lib/formatters";

interface CurriculumExplorerProps {
  initialLessonId?: string;
  initialMotionIndex?: number;
  navigationSeq?: number;
  onNavigateTab?: (tab: NavTab) => void;
}

const FORM_FALLBACK_ALIAS: Record<string, string> = {
  "bai-08": "bai-09",
  "bai-08-1": "bai-09",
  "bai-08-2": "bai-09",
  "bai-11": "bai-10",
  "gioi-thieu-ngu-hinh": "bai-21",
  "bai-20": "bai-21",
  "bai-30": "bai-31",
  "bai-32": "con",
  "bai-33": "lieu-diep-kiem",
};

export const CurriculumExplorer: React.FC<CurriculumExplorerProps> = ({
  initialLessonId = "bai-07", // Mặc định mở Tiểu Niệm Đầu
  initialMotionIndex = 0,
  navigationSeq = 0,
  onNavigateTab,
}) => {
  // Lọc duy nhất 18 bài quyền & binh khí (có motions thị phạm thực tế)
  const FORMS_18 = useMemo(() => {
    return CANONICAL_LESSONS.filter((l) => l.motions && l.motions.length > 0);
  }, []);

  const normalizeToFormId = (id: string) => {
    if (FORMS_18.some((l) => l.id === id)) return id;
    if (FORM_FALLBACK_ALIAS[id]) return FORM_FALLBACK_ALIAS[id];
    return "bai-07";
  };

  const resolvedInitFormId = normalizeToFormId(initialLessonId);
  const initLessonObj = FORMS_18.find((l) => l.id === resolvedInitFormId) || FORMS_18[0];
  const clampedInitMotion = Math.max(
    0,
    Math.min(Math.max(0, (initLessonObj?.motions?.length || 1) - 1), initialMotionIndex || 0)
  );

  const [selectedLessonId, setSelectedLessonId] = useState<string>(resolvedInitFormId);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [viewStyle, setViewStyle] = useState<"stages" | "catalog">("stages");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeMotionIndex, setActiveMotionIndex] = useState(clampedInitMotion);
  const [zoomedMotion, setZoomedMotion] = useState<MotionStep | null>(null);
  // 5 Chế độ Phòng Tập Tinh Gọn (Tách biệt hoàn toàn để Luyện Từng Thế vừa khít 1 màn hình)
  const [activeFormTab, setActiveFormTab] = useState<
    "dojo" | "video" | "intro" | "matrix" | "roadmap"
  >("dojo");
  // Ngăn kéo chọn nhanh 18 bài quyền ngay trên thanh Studio Command Bar
  const [isQuickSwitcherOpen, setIsQuickSwitcherOpen] = useState(false);
  const [selectedVideoIdx, setSelectedVideoIdx] = useState(0);
  const [videoStudyMode, setVideoStudyMode] = useState<"split" | "cinema">("split");
  const [matrixSearch, setMatrixSearch] = useState("");
  const [isMatrixFlipped, setIsMatrixFlipped] = useState(false);

  // Đồng bộ khi prop initialLessonId, initialMotionIndex hoặc navigationSeq thay đổi từ bên ngoài
  const navSignature = `${initialLessonId}::${initialMotionIndex ?? 0}::${navigationSeq}`;
  const [prevNavSignature, setPrevNavSignature] = useState(navSignature);
  if (navSignature !== prevNavSignature) {
    setPrevNavSignature(navSignature);
    const targetFormId = normalizeToFormId(initialLessonId);
    const targetLesson = FORMS_18.find((l) => l.id === targetFormId) || FORMS_18[0];
    const maxMotionIdx = Math.max(0, (targetLesson?.motions?.length || 1) - 1);
    const safeMotionIdx = Math.max(0, Math.min(maxMotionIdx, initialMotionIndex || 0));

    setSelectedLessonId(targetFormId);
    setActiveMotionIndex(safeMotionIdx);
    setSelectedVideoIdx(0);
    setActiveFormTab("dojo");
    setIsQuickSwitcherOpen(false);
    const targetIntro = getFormIntro(targetFormId);
    if (targetIntro) {
      setSelectedCategory(targetIntro.category);
    }
  }

  // Bài quyền hiện tại & vị trí thứ tự trong 18 bài
  const currentFormIndex = useMemo(() => {
    const idx = FORMS_18.findIndex((l) => l.id === selectedLessonId);
    return idx >= 0 ? idx : 0;
  }, [selectedLessonId, FORMS_18]);

  const currentLesson: CanonicalLesson = useMemo(() => {
    return FORMS_18[currentFormIndex] || FORMS_18[0];
  }, [currentFormIndex, FORMS_18]);

  // Thông tin Lời nói đầu & Triết lý yếu chỉ của bài hiện tại
  const currentFormIntro: FormIntroduction = useMemo(() => {
    return getFormIntro(currentLesson.id) || FORMS_18_INTRO["bai-07"];
  }, [currentLesson.id]);

  // Danh sách Video Đại Sư Thị Phạm của bài hiện tại
  const currentVideos: MasterVideoItem[] = useMemo(() => {
    return getMasterVideosForForm(currentLesson.id);
  }, [currentLesson.id]);

  const activeVideo: MasterVideoItem = currentVideos[selectedVideoIdx] || currentVideos[0];

  // Trạng thái mở rộng xem toàn bộ chuyên khảo học thuật
  const [showAllInsights, setShowAllInsights] = useState(false);

  // Chuyên khảo phù hợp nhất với bài hiện tại
  const relevantInsight = useMemo(() => {
    if (currentLesson.id === "bai-07" || currentLesson.id === "bai-09") {
      return LINEAGE_SCHOLARLY_INSIGHTS[0];
    }
    if (["bai-12", "bai-13", "bai-14", "bai-15"].includes(currentLesson.id)) {
      return LINEAGE_SCHOLARLY_INSIGHTS[1];
    }
    if (["bai-10", "con", "bai-31"].includes(currentLesson.id)) {
      return LINEAGE_SCHOLARLY_INSIGHTS[2];
    }
    return LINEAGE_SCHOLARLY_INSIGHTS[0];
  }, [currentLesson.id]);

  // Lắng nghe phím Escape để đóng Modal Lightbox hoặc QuickSwitcher
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (zoomedMotion) setZoomedMotion(null);
        else if (isQuickSwitcherOpen) setIsQuickSwitcherOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomedMotion, isQuickSwitcherOpen]);

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

  // Xử lý chọn một bài quyền và chuyển ngay vào phòng tập
  const handleSelectForm = (formId: string, targetTab?: "dojo" | "video" | "intro" | "matrix") => {
    setSelectedLessonId(formId);
    setActiveMotionIndex(0);
    setSelectedVideoIdx(0);
    setIsQuickSwitcherOpen(false);
    if (targetTab) {
      setActiveFormTab(targetTab);
    } else if (activeFormTab === "roadmap") {
      setActiveFormTab("dojo");
    }
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-3 animate-fadeIn">
      {/* =========================================================================
          1. THANH ĐIỀU KHIỂN PHÒNG TẬP TINH GỌN (COMPACT STUDIO COMMAND BAR - 1 HÀNG)
          Thiết kế chuẩn 1-Screen Studio: Định danh bài đang tập + Nút Đổi Bài Nhanh + 5 Tab Chế Độ
      ========================================================================= */}
      <section className="glass-panel px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-2xl border border-[#F5D06C]/40 shadow-xl relative">
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          {/* CỤM TRÁI: ĐỊNH DANH BÀI QUYỀN HIỆN TẠI & NÚT ĐỔI BÀI NHANH (18 BÀI) */}
          <div className="flex flex-wrap items-center gap-2.5 min-w-0">
            <div className="flex items-center gap-2.5 min-w-0">
              <MartialEmblem
                formId={currentLesson.id}
                size={36}
                variant="badge"
                className="shrink-0 shadow-md"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[10px] font-mono font-bold text-[#2A0E0A] bg-[#F5D06C] px-1.5 py-0.5 rounded uppercase">
                    Bài {currentFormIndex + 1}/18 • {currentFormIntro.category}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/70 border border-emerald-700/40 px-1.5 py-0.5 rounded font-bold">
                    {currentLesson.motions.length} thế
                  </span>
                  {(currentFormIntro.category === "Tam Đại Quyền" ||
                    currentFormIntro.category === "108 Thế Liên Hoàn") && (
                    <span
                      className="text-[10px] font-serif italic font-semibold text-amber-200 bg-[#2A150B] border border-[#F5D06C]/45 px-2 py-0.5 rounded hidden sm:inline-flex items-center gap-1"
                      title="Châm ngôn cốt lõi của các bài quyền cơ bản: Cấu trúc chuẩn xác trước, Tốc độ theo sau"
                    >
                      &ldquo;Structure before Speed&rdquo; • Cấu trúc trước Tốc độ
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1.5 mt-0.5">
                  <h2 className="text-base sm:text-xl font-bold font-serif text-white truncate">
                    {currentLesson.title}
                  </h2>
                  {currentFormIntro.hanziName && (
                    <span className="text-[11px] text-[#F5D06C]/75 font-sans hidden 2xl:inline">
                      ({currentFormIntro.hanziName})
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Nút Đổi Bài Nhanh (Bung khay 18 bài ngay tại chỗ, không cần cuộn trang) */}
            <div className="flex items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={() => {
                  const prevIdx = (currentFormIndex - 1 + FORMS_18.length) % FORMS_18.length;
                  handleSelectForm(FORMS_18[prevIdx].id);
                }}
                className="p-1.5 rounded-xl bg-[#20150F] hover:bg-[#2E1A10] text-amber-200 hover:text-white border border-[#F5D06C]/30 transition cursor-pointer"
                title="Chuyển sang bài quyền trước"
                aria-label="Bài quyền trước"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setIsQuickSwitcherOpen(!isQuickSwitcherOpen)}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition cursor-pointer ${
                  isQuickSwitcherOpen
                    ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C] shadow-md"
                    : "bg-[#20150F] hover:bg-[#2E1A10] text-[#F5D06C] border-[#F5D06C]/40"
                }`}
                title="Mở bảng chuyển nhanh 18 bài quyền & binh khí"
              >
                <Compass className="w-3.5 h-3.5" />
                <span>Đổi Bài (18)</span>
                {isQuickSwitcherOpen ? (
                  <ChevronUp className="w-3.5 h-3.5" />
                ) : (
                  <ChevronDown className="w-3.5 h-3.5" />
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  const nextIdx = (currentFormIndex + 1) % FORMS_18.length;
                  handleSelectForm(FORMS_18[nextIdx].id);
                }}
                className="p-1.5 rounded-xl bg-[#20150F] hover:bg-[#2E1A10] text-amber-200 hover:text-white border border-[#F5D06C]/30 transition cursor-pointer"
                title="Chuyển sang bài quyền tiếp theo"
                aria-label="Bài quyền tiếp theo"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* CỤM PHẢI: 5 TAB CHẾ ĐỘ HỌC TẬP RÕ RÀNG (SEGMENTED STUDIO SWITCHER) */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-[#140C08] border border-[#F5D06C]/30 rounded-xl shrink-0">
            <button
              type="button"
              onClick={() => setActiveFormTab("dojo")}
              className={`px-2.5 py-1.5 text-xs font-bold rounded-lg transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeFormTab === "dojo"
                  ? "bg-[#F5D06C] text-[#2A0E0A] shadow-sm"
                  : "text-amber-200/75 hover:text-white"
              }`}
            >
              <Swords className="w-3.5 h-3.5" />
              <span>Luyện Từng Thế ({currentLesson.motions.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveFormTab("video")}
              className={`px-2.5 py-1.5 text-xs font-bold rounded-lg transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeFormTab === "video"
                  ? "bg-gradient-to-r from-[#F5D06C] to-[#E2B743] text-[#2A0E0A] shadow-sm"
                  : "text-emerald-300 hover:text-white bg-emerald-950/40 border border-emerald-500/30"
              }`}
            >
              <PlayCircle className="w-3.5 h-3.5" />
              <span>Video Đại Sư ({currentVideos.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveFormTab("intro")}
              className={`px-2.5 py-1.5 text-xs font-bold rounded-lg transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeFormTab === "intro"
                  ? "bg-[#F5D06C] text-[#2A0E0A] shadow-sm"
                  : "text-amber-200/75 hover:text-white"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sách Gốc &amp; Triết Lý</span>
              <span className="sm:hidden">Sách Gốc</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveFormTab("matrix")}
              className={`px-2.5 py-1.5 text-xs font-bold rounded-lg transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeFormTab === "matrix"
                  ? "bg-[#F5D06C] text-[#2A0E0A] shadow-sm"
                  : "text-amber-200/75 hover:text-white"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Ma Trận ({currentLesson.motions.length})</span>
              <span className="sm:hidden">Ma Trận</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveFormTab("roadmap")}
              className={`px-2.5 py-1.5 text-xs font-bold rounded-lg transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                activeFormTab === "roadmap"
                  ? "bg-[#F5D06C] text-[#2A0E0A] shadow-sm"
                  : "text-amber-200/75 hover:text-white"
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Lộ Trình 18 Bài</span>
              <span className="sm:hidden">18 Bài</span>
            </button>
          </div>
        </div>

        {/* NGĂN KÉO CHỌN NHANH 18 BÀI QUYỀN (BUNG RA KHI BẤM "ĐỔI BÀI (18)") */}
        {isQuickSwitcherOpen && (
          <div className="mt-2.5 pt-2.5 border-t border-[#F5D06C]/25 space-y-2.5 animate-fadeIn">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono font-bold text-[#F5D06C] uppercase flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Chọn nhanh trong 18 Bài Quyền &amp; Binh Khí theo 5 Chặng Sư Phạm:
              </span>
              <button
                type="button"
                onClick={() => setIsQuickSwitcherOpen(false)}
                className="text-amber-200/70 hover:text-white flex items-center gap-1 text-xs cursor-pointer"
              >
                <span>Đóng khay</span>
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
              {FORMS_18_STAGES.map((stage) => {
                const stageLessons = FORMS_18.filter((l) => stage.formIds.includes(l.id));
                return (
                  <div
                    key={stage.id}
                    className="p-2 rounded-xl bg-[#140B07] border border-[#F5D06C]/20 space-y-1"
                  >
                    <div className="text-[10px] font-mono font-bold text-[#F5D06C] uppercase border-b border-[#F5D06C]/15 pb-1">
                      Chặng {stage.sequence}: {stage.title.replace(/^Chặng \d+:\s*/, "")}
                    </div>
                    <div className="space-y-1">
                      {stageLessons.map((l) => {
                        const isCurrent = l.id === selectedLessonId;
                        return (
                          <button
                            key={l.id}
                            type="button"
                            onClick={() => handleSelectForm(l.id)}
                            className={`w-full px-2 py-1 rounded-lg text-xs text-left transition flex items-center justify-between gap-1.5 cursor-pointer ${
                              isCurrent
                                ? "bg-[#F5D06C] text-[#2A0E0A] font-bold shadow"
                                : "hover:bg-[#24140D] text-amber-100/90"
                            }`}
                          >
                            <span className="truncate">{l.title}</span>
                            <span
                              className={`text-[10px] font-mono px-1.5 py-0.2 rounded shrink-0 ${
                                isCurrent
                                  ? "bg-[#2A0E0A] text-[#F5D06C]"
                                  : "bg-[#F5D06C]/15 text-[#F5D06C]"
                              }`}
                            >
                              {l.motions.length}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>

      {/* =========================================================================
          2. KHÔNG GIAN NỘI DUNG THEO TỪNG CHẾ ĐỘ (5 STUDIO MODES TÁCH BIỆT)
      ========================================================================= */}
      {activeFormTab === "dojo" ? (
        /* -----------------------------------------------------------------------
           CHẾ ĐỘ 1 (MẶC ĐỊNH): PHÒNG TẬP TỪNG ĐỘNG TÁC GỌN TRỌN TRONG 1 MÀN HÌNH
           Không còn bất kỳ khối văn bản dài hay danh mục 5 chặng gây nhiễu bên dưới!
        ----------------------------------------------------------------------- */
        <section>
          <DojoPlayer3
            lesson={currentLesson}
            activeMotionIndex={activeMotionIndex}
            onSelectMotionIndex={setActiveMotionIndex}
            onOpenLightbox={(motion) => setZoomedMotion(motion)}
            onSelectBookmarkLesson={(bLessonId, bMotionIdx) => {
              const targetFormId = normalizeToFormId(bLessonId);
              const targetLesson = FORMS_18.find((l) => l.id === targetFormId) || FORMS_18[0];
              const maxIdx = Math.max(0, (targetLesson?.motions?.length || 1) - 1);
              setSelectedLessonId(targetFormId);
              setActiveMotionIndex(Math.max(0, Math.min(maxIdx, bMotionIdx)));
            }}
            onSwitchToVideoTab={() => setActiveFormTab("video")}
            onSwitchToIntroTab={() => setActiveFormTab("intro")}
          />
        </section>
      ) : activeFormTab === "video" ? (
        /* -----------------------------------------------------------------------
           CHẾ ĐỘ 2: PHÒNG CHIẾU VIDEO ĐẠI SƯ THỊ PHẠM & ĐỐI CHIẾU SÁCH GỐC
           Đưa Khung Trình Phát Video + Đối Chiếu Sách Gốc lên ngay màn hình đầu tiên!
        ----------------------------------------------------------------------- */
        <section className="space-y-4 animate-fadeIn">
          <div className="glass-panel p-4 sm:p-5 rounded-3xl border border-[#F5D06C]/40 bg-gradient-to-r from-[#22120B] via-[#180D08] to-[#120905] shadow-xl space-y-3.5">
            {/* Thanh Tiêu đề + Chế độ xem + Chọn nhanh Video #1..#N trên 1 cụm gọn */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2.5 border-b border-[#F5D06C]/20 pb-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold">
                  <Film className="w-3.5 h-3.5" />
                  Phòng Chiếu Đa Phương Thức
                </span>
                <h4 className="text-base sm:text-xl font-bold font-serif text-white">
                  {currentLesson.title} ({currentVideos.length} Video Đại Sư)
                </h4>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <button
                  onClick={() => setVideoStudyMode("split")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer border ${
                    videoStudyMode === "split"
                      ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C] shadow-md"
                      : "bg-[#140C08] text-amber-200/80 border-[#F5D06C]/25 hover:text-white"
                  }`}
                >
                  <Columns className="w-3.5 h-3.5" />
                  <span>Song hành: Video + Sách gốc</span>
                </button>
                <button
                  onClick={() => setVideoStudyMode("cinema")}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition cursor-pointer border ${
                    videoStudyMode === "cinema"
                      ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C] shadow-md"
                      : "bg-[#140C08] text-amber-200/80 border-[#F5D06C]/25 hover:text-white"
                  }`}
                >
                  <Film className="w-3.5 h-3.5" />
                  <span>Phòng chiếu rộng (Cinema)</span>
                </button>
              </div>
            </div>

            {/* Thanh Chọn Nhanh Video Đại Sư (1 hàng ngang gọn gàng ngay trên trình phát) */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {currentVideos.map((vid, vIdx) => {
                const isSelected = vIdx === selectedVideoIdx;
                return (
                  <button
                    key={vid.id}
                    onClick={() => setSelectedVideoIdx(vIdx)}
                    className={`px-3 py-1.5 rounded-xl border text-xs transition-all cursor-pointer flex items-center gap-2 shrink-0 ${
                      isSelected
                        ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C] font-bold shadow-md"
                        : "bg-[#140A06]/90 text-amber-100/90 border-[#F5D06C]/25 hover:border-[#F5D06C]/60"
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] px-1.5 py-0.5 rounded ${
                        isSelected ? "bg-[#2A0E0A] text-[#F5D06C]" : "bg-[#F5D06C]/15 text-[#F5D06C]"
                      }`}
                    >
                      #{vIdx + 1}
                    </span>
                    <span className="truncate max-w-[180px]">{vid.masterName}</span>
                  </button>
                );
              })}
            </div>

            {/* KHU VỰC TRÌNH PHÁT CHÍNH + ĐỐI CHIẾU SÁCH GỐC NGAY TRONG MÀN HÌNH ĐẦU TIÊN */}
            {activeVideo && (
              <div
                className={`grid grid-cols-1 ${
                  videoStudyMode === "split" ? " lg:grid-cols-12 " : ""
                } gap-4 items-start`}
              >
                <div className={videoStudyMode === "split" ? "lg:col-span-7 space-y-3" : "space-y-3"}>
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-[#F5D06C]/50 shadow-2xl bg-black">
                    <iframe
                      key={activeVideo.youtubeId}
                      src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?rel=0&modestbranding=1`}
                      title={activeVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>

                  <div className="p-3.5 sm:p-4 rounded-2xl bg-[#140A06] border border-[#F5D06C]/35 space-y-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h5 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#F5D06C] flex items-center gap-1.5">
                        <Eye className="w-4 h-4 text-[#F5D06C]" />
                        <span>Điểm Chạm Quan Sát Sư Phạm ({activeVideo.masterName})</span>
                      </h5>
                      <a
                        href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-amber-300 hover:text-[#F5D06C] underline"
                      >
                        Mở trên YouTube ↗
                      </a>
                    </div>
                    <p className="text-xs sm:text-sm text-[#F7E7D9] leading-relaxed">
                      <strong className="text-[#F5D06C]">Trọng tâm sư phạm:</strong> {activeVideo.pedagogicalFocus}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {activeVideo.watchPoints.map((wp, wIdx) => (
                        <div
                          key={wIdx}
                          className="p-2.5 rounded-xl bg-[#1D100A] border border-[#F5D06C]/20 text-xs text-amber-100/95 leading-relaxed flex items-start gap-1.5"
                        >
                          <span className="text-[#F5D06C] font-mono font-bold bg-[#F5D06C]/15 px-1.5 py-0.5 rounded shrink-0">
                            {wIdx + 1}
                          </span>
                          <span>{wp}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-100/95 leading-relaxed flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-emerald-300">Đối sánh Sách Gốc PGVX:</strong> {activeVideo.comparisonWithBook}
                      </span>
                    </div>
                  </div>
                </div>

                {videoStudyMode === "split" && currentLesson.motions[activeMotionIndex] && (
                  <div className="lg:col-span-5 p-4 rounded-2xl bg-[#160C08] border border-[#F5D06C]/35 space-y-3 shadow-xl">
                    <div className="flex items-center justify-between gap-2 border-b border-[#F5D06C]/20 pb-2.5">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#F5D06C] block font-bold">
                          Đối Chiếu Sách Gốc Từng Nhịp
                        </span>
                        <h5 className="text-sm font-serif font-bold text-white">
                          Thế {currentLesson.motions[activeMotionIndex].stepNo} / {currentLesson.motions.length} •{" "}
                          {extractMotionChieu(currentLesson.motions[activeMotionIndex].desc) || "Chiêu thức"}
                        </h5>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setActiveMotionIndex(Math.max(0, activeMotionIndex - 1))}
                          disabled={activeMotionIndex === 0}
                          className="p-2 rounded-xl bg-[#24130C] hover:bg-[#331B11] disabled:opacity-40 text-[#F5D06C] border border-[#F5D06C]/30 cursor-pointer"
                          title="Thế trước"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() =>
                            setActiveMotionIndex(
                              Math.min(currentLesson.motions.length - 1, activeMotionIndex + 1)
                            )
                          }
                          disabled={activeMotionIndex === currentLesson.motions.length - 1}
                          className="p-2 rounded-xl bg-[#F5D06C] hover:bg-[#E2B743] disabled:opacity-40 text-[#2A0E0A] font-bold cursor-pointer"
                          title="Thế tiếp theo"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div
                      onClick={() => setZoomedMotion(currentLesson.motions[activeMotionIndex])}
                      className="relative rounded-2xl overflow-hidden bg-[#FBF9F5] p-2.5 border-2 border-[#F5D06C]/40 flex items-center justify-center h-60 sm:h-64 cursor-zoom-in group"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={
                          currentLesson.motions[activeMotionIndex].img2xUrl ||
                          currentLesson.motions[activeMotionIndex].imgUrl
                        }
                        alt={cleanMotionTitle(currentLesson.motions[activeMotionIndex].desc)}
                        className="h-full w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                      />
                      <span className="absolute bottom-2 right-2 px-2.5 py-1 rounded-lg bg-black/75 text-[#F5D06C] text-[11px] font-mono">
                        Trang {currentLesson.motions[activeMotionIndex].pdfPage} • Hình {currentLesson.motions[activeMotionIndex].displayId}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-[#1E100A] border border-[#F5D06C]/25 space-y-1">
                      <div className="text-[11px] font-mono font-bold text-[#F5D06C] uppercase">
                        Mô tả chuẩn trong Sách Gốc ({currentFormIntro.demonstrator}):
                      </div>
                      <p className="text-xs sm:text-sm text-[#F7E7D9] leading-relaxed font-serif">
                        {cleanMotionTitle(currentLesson.motions[activeMotionIndex].desc)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-0.5">
                      <span className="text-[11px] font-mono text-amber-200/70">
                        Nhảy nhanh tới thế:
                      </span>
                      <select
                        aria-label="Chọn thế võ trong bài"
                        value={activeMotionIndex}
                        onChange={(e) => setActiveMotionIndex(Number(e.target.value))}
                        className="bg-[#24130C] text-amber-100 border border-[#F5D06C]/35 rounded-xl px-2.5 py-1.5 text-xs font-mono focus:outline-none focus:border-[#F5D06C]"
                      >
                        {currentLesson.motions.map((m, idx) => (
                          <option key={m.id || idx} value={idx}>
                            Thế {m.stepNo} ({extractMotionChieu(m.desc) || `Hình ${m.displayId}`})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* LƯỚI THẺ VIDEO CÓ THUMBNAIL THẬT CỦA BÀI ĐANG CHỌN */}
            <div className="pt-3 border-t border-[#F5D06C]/20 space-y-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h5 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#F5D06C] flex items-center gap-2">
                  <PlayCircle className="w-4 h-4 text-[#F5D06C]" />
                  <span>
                    Danh Sách Chi Tiết {currentVideos.length} Video Thị Phạm Của Bài: {currentLesson.title}
                  </span>
                </h5>
                <span className="text-xs text-amber-200/75 font-mono">
                  Nhấp vào thẻ bất kỳ để phát trên màn hình chính phía trên
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {currentVideos.map((vid, vIdx) => {
                  const isSelected = vIdx === selectedVideoIdx;
                  return (
                    <div
                      key={vid.id}
                      onClick={() => setSelectedVideoIdx(vIdx)}
                      className={`group rounded-2xl border overflow-hidden transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? "bg-[#2E180F] border-[#F5D06C] ring-2 ring-[#F5D06C]/45 shadow-xl"
                          : "bg-[#140A06]/95 border-[#F5D06C]/25 hover:border-[#F5D06C]/65 hover:bg-[#1D100A]"
                      }`}
                    >
                      <div>
                        <div className="relative w-full aspect-video bg-black overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={`https://i.ytimg.com/vi/${vid.youtubeId}/mqdefault.jpg`}
                            alt={vid.title}
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                          <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 text-[#F5D06C] text-[10px] font-mono font-bold border border-[#F5D06C]/35">
                            {vid.lineageBadge}
                          </span>
                          <span
                            className={`absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                              isSelected
                                ? "bg-emerald-500 text-black"
                                : "bg-black/80 text-emerald-400 border border-emerald-500/40"
                            }`}
                          >
                            {isSelected ? "▶ Đang phát" : `Video #${vIdx + 1}`}
                          </span>
                          <div className="absolute bottom-2 left-2 right-2 text-[11px] font-mono text-amber-200 font-semibold truncate">
                            👤 {vid.masterName}
                          </div>
                        </div>

                        <div className="p-3 space-y-1.5">
                          <div className="text-xs font-bold font-serif text-white line-clamp-2 leading-snug">
                            {vid.title}
                          </div>
                          <p className="text-[11px] text-amber-100/75 line-clamp-2 leading-relaxed">
                            {vid.pedagogicalFocus}
                          </p>
                        </div>
                      </div>

                      <div className="px-3 pb-2.5 pt-1 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-[#F5D06C] font-bold">
                          {isSelected ? "● Đang chọn" : "Nhấp để phát"}
                        </span>
                        <a
                          href={`https://www.youtube.com/watch?v=${vid.youtubeId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-amber-300 hover:text-white underline"
                        >
                          YouTube ↗
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Thanh Trụ Cột Tam Đại Bộ Quyền & KHO TỔNG HỢP VIDEO CỦA ĐỦ 18 BÀI QUYỀN */}
            <div className="pt-4 border-t border-[#F5D06C]/25 space-y-4">
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#2A140B] via-[#1E0F09] to-[#160B06] border border-[#F5D06C]/40 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#F5D06C] flex items-center gap-1.5 flex-wrap">
                    <Sparkles className="w-3.5 h-3.5 text-[#F5D06C]" />
                    <span>
                      Trụ Cột Nền Tảng: Tam Đại Bộ Quyền (
                      {getMasterVideosForForm("bai-07").length +
                        getMasterVideosForForm("bai-09").length +
                        getMasterVideosForForm("bai-10").length}{" "}
                      Video Đại Sư)
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#F5D06C]/15 border border-[#F5D06C]/35 text-amber-200 font-serif italic normal-case">
                      &ldquo;Structure before Speed&rdquo;
                    </span>
                  </div>
                  <p className="text-xs text-amber-100/85">
                    Châm ngôn cốt tủy <strong className="text-[#F5D06C]">&ldquo;Structure before Speed&rdquo; (Cấu trúc trước Tốc độ)</strong> — Ba bài quyền gốc rễ quyết định toàn bộ cấu trúc trung tuyến, chuyển mã phát kình và tuyệt kỹ cứu nguy:
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 shrink-0">
                  {[
                    {
                      id: "bai-07",
                      step: "1. Sơ Cấp",
                      name: "Tiểu Niệm Đầu",
                      focus: `Tùng tĩnh • Lập Trung Tuyến (${getMasterVideosForForm("bai-07").length} Video)`,
                    },
                    {
                      id: "bai-09",
                      step: "2. Trung Cấp",
                      name: "Tầm Kiều",
                      focus: `Chuyển Mã • Hợp Nhất Thân Bộ (${getMasterVideosForForm("bai-09").length} Video)`,
                    },
                    {
                      id: "bai-10",
                      step: "3. Cao Cấp",
                      name: "Tiêu Chỉ",
                      focus: `Phóng Chỉ • Cấp Trửu Cứu Nguy (${getMasterVideosForForm("bai-10").length} Video)`,
                    },
                  ].map((core) => {
                    const isCoreActive = currentLesson.id === core.id;
                    return (
                      <button
                        key={core.id}
                        onClick={() => {
                          setSelectedLessonId(core.id);
                          setActiveMotionIndex(0);
                          setSelectedVideoIdx(0);
                        }}
                        className={`px-3 py-2 rounded-xl border text-left transition cursor-pointer ${
                          isCoreActive
                            ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C] shadow-md font-bold"
                            : "bg-[#140A06] text-amber-100 border-[#F5D06C]/30 hover:border-[#F5D06C]/70"
                        }`}
                      >
                        <div className="text-[10px] font-mono uppercase opacity-85">
                          {core.step} • {core.name}
                        </div>
                        <div className="text-[11px] truncate mt-0.5 opacity-95">
                          {core.focus}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* DANH MỤC TOÀN CẢNH VIDEO ĐẠI SƯ CỦA 18 BÀI QUYỀN & BINH KHÍ */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#120905] border border-[#F5D06C]/30 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F5D06C]/20 pb-3">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                      Thư Viện Video Toàn Phái • 18/18 Bài Quyền &amp; Binh Khí Đều Có Video Cụ Thể
                    </span>
                    <h5 className="text-sm sm:text-lg font-serif font-bold text-white">
                      Tổng Hợp Toàn Bộ{" "}
                      {FORMS_18.reduce((sum, f) => sum + getMasterVideosForForm(f.id).length, 0)}{" "}
                      Video Đại Sư Thị Phạm (Theo 5 Chặng Sư Phạm)
                    </h5>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#F5D06C]/15 border border-[#F5D06C]/35 text-[#F5D06C] text-xs font-mono font-bold">
                    {FORMS_18.reduce((sum, f) => sum + getMasterVideosForForm(f.id).length, 0)} Video Xác Thực YouTube oEmbed 100%
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {FORMS_18.map((fLesson, fIdx) => {
                    const fVideos = getMasterVideosForForm(fLesson.id);
                    const isCurrentForm = fLesson.id === currentLesson.id;
                    return (
                      <div
                        key={fLesson.id}
                        className={`p-3 rounded-xl border transition space-y-2 ${
                          isCurrentForm
                            ? "bg-[#26140C] border-[#F5D06C]"
                            : "bg-[#180D08] border-[#F5D06C]/20 hover:border-[#F5D06C]/50"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-1.5">
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedLessonId(fLesson.id);
                              setActiveMotionIndex(0);
                              setSelectedVideoIdx(0);
                            }}
                            className="text-left font-serif font-bold text-xs sm:text-sm text-white hover:text-[#F5D06C] transition cursor-pointer truncate"
                          >
                            {fIdx + 1}. {fLesson.title}
                          </button>
                          <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[10px] font-mono font-bold shrink-0">
                            {fVideos.length} Video
                          </span>
                        </div>
                        <div className="space-y-1">
                          {fVideos.map((v, vIdx) => {
                            const isPlayingNow = isCurrentForm && vIdx === selectedVideoIdx;
                            return (
                              <button
                                key={v.id}
                                type="button"
                                onClick={() => {
                                  setSelectedLessonId(fLesson.id);
                                  setActiveMotionIndex(0);
                                  setSelectedVideoIdx(vIdx);
                                  window.scrollTo({ top: 0, behavior: "smooth" });
                                }}
                                className={`w-full px-2 py-1.5 rounded-lg text-left text-[11px] transition flex items-center justify-between gap-2 cursor-pointer ${
                                  isPlayingNow
                                    ? "bg-[#F5D06C] text-[#2A0E0A] font-bold"
                                    : "bg-black/35 hover:bg-black/60 text-amber-100/90"
                                }`}
                              >
                                <span className="truncate">
                                  ▶ #{vIdx + 1} {v.masterName}: {v.title}
                                </span>
                                <span className="text-[10px] font-mono opacity-80 shrink-0">
                                  Xem
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : activeFormTab === "intro" ? (
        /* -----------------------------------------------------------------------
           CHẾ ĐỘ 3: NGUYÊN VĂN SÁCH GỐC, HƯỚNG DẪN TẬP LUYỆN, TÁC DỤNG & ĐỐI SÁNH
        ----------------------------------------------------------------------- */
        <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#F5D06C]/40 space-y-6 shadow-2xl bg-gradient-to-br from-[#20150F] via-[#1A0E0A] to-[#140A06] animate-fadeIn">
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
                  <span>Cẩm Nang Sách Gốc &amp; Triết Lý Võ Đạo • {currentLesson.title}</span>
                </div>
                <p className="text-xs text-amber-200/80 mt-0.5">
                  Bảo toàn 100% nguyên văn hướng dẫn tập luyện, tác dụng và khẩu quyết của PGS.TS Nguyễn Mạnh Nhâm &amp; ThS.DS Nguyễn Duy Thức
                </p>
              </div>
            </div>
            <button
              onClick={() => setActiveFormTab("dojo")}
              className="px-4 py-2 rounded-xl bg-[#F5D06C] text-[#2A0E0A] font-bold text-xs flex items-center gap-1.5 hover:bg-[#F5D06C]/90 transition cursor-pointer shadow-md shrink-0 self-start sm:self-auto"
            >
              <span>Quay lại Luyện Từng Thế</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[#F5D06C] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5D06C]" />
                  1. Ý Nghĩa Danh Xưng &amp; Tôn Chỉ
                </h4>
                <p className="text-base sm:text-lg text-amber-100 font-serif leading-[1.8] max-w-reading">
                  {currentFormIntro.meaning}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[#F5D06C] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#F5D06C]" />
                  2. Triết Lý Võ Đạo &amp; Nguyên Lý Vận Động
                </h4>
                <p className="text-sm sm:text-base text-[#F7E7D9] leading-[1.8] font-sans max-w-reading">
                  {currentFormIntro.philosophy}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#2A160E] border border-[#F5D06C]/35 shadow-inner space-y-2">
                <div className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#F5D06C] flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#F5D06C]" />
                  Khẩu Quyết Cốt Tủy
                </div>
                <p className="text-base sm:text-lg font-bold text-[#FFFDF8] font-serif italic leading-[1.75]">
                  &ldquo;{currentFormIntro.keyMantra}&rdquo;
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-[#F5D06C] mb-2.5 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#F5D06C]" />
                  3 Yếu Lĩnh Cốt Tử Khi Thực Hiện
                </h4>
                <div className="space-y-3">
                  {currentFormIntro.principles.map((pr, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 sm:p-4 rounded-xl bg-[#140C08] border border-[#F5D06C]/25 flex items-start gap-3 text-sm sm:text-base text-[#F7E7D9] leading-[1.75]"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#F5D06C]/25 text-[#F5D06C] font-mono font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{pr}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-[#140C08] border-l-4 border-l-[#F5D06C] border border-[#F5D06C]/25 text-sm sm:text-base text-amber-100/95 italic font-serif leading-[1.8]">
                <span className="font-mono not-italic uppercase font-bold text-[#F5D06C] block mb-1.5 text-xs">
                  Trích Giáo Trình (PGS.TS Nguyễn Mạnh Nhâm):
                </span>
                &ldquo;{currentFormIntro.introQuote}&rdquo;
              </div>
            </div>

            {/* Khối Nguyên Văn Giáo Trình Sách Gốc */}
            {(currentFormIntro.bookOriginalIntro ||
              currentFormIntro.bookTrainingGuidelines ||
              currentFormIntro.bookBenefits ||
              currentFormIntro.bookMantras) && (
              <div className="col-span-1 md:col-span-2 p-5 sm:p-7 rounded-3xl bg-gradient-to-br from-[#23140C] via-[#1B0F09] to-[#140A06] border-2 border-[#F5D06C]/45 space-y-5 shadow-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F5D06C]/25 pb-3.5">
                  <div className="flex items-center gap-2.5 text-sm sm:text-base font-bold uppercase tracking-wider text-[#F5D06C]">
                    <BookOpen className="w-5 h-5 text-[#F5D06C]" />
                    <span>Nguyên Văn Hướng Dẫn Tập Luyện, Tác Dụng &amp; Khẩu Quyết Trong Sách Gốc</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#2A0E0A] bg-[#F5D06C] px-3 py-1 rounded-full">
                    Bảo Toàn 100% Giáo Trình Gốc
                  </span>
                </div>

                {currentFormIntro.bookOriginalIntro && currentFormIntro.bookOriginalIntro.length > 0 && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#140C08] border border-[#F5D06C]/25 space-y-2.5">
                    <h5 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#F5D06C] flex items-center gap-2">
                      <Quote className="w-4 h-4 text-[#F5D06C]" />
                      Lời Dẫn Nhập, Danh Xưng &amp; Điển Tích Trong Sách Gốc:
                    </h5>
                    <div className="space-y-2.5 text-sm sm:text-base text-amber-100/95 font-serif leading-[1.85]">
                      {currentFormIntro.bookOriginalIntro.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {currentFormIntro.bookTrainingGuidelines && currentFormIntro.bookTrainingGuidelines.length > 0 && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#180E09] border border-amber-500/35 space-y-3">
                      <h5 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#F5D06C] flex items-center gap-2">
                        <Shield className="w-4 h-4 text-[#F5D06C]" />
                        Những Điểm Cần Biết / Chú Ý Khi Tập ({currentLesson.title}):
                      </h5>
                      <div className="space-y-2.5">
                        {currentFormIntro.bookTrainingGuidelines.map((guide, gIdx) => (
                          <div
                            key={gIdx}
                            className="p-3 rounded-xl bg-[#120A06] border border-[#F5D06C]/20 text-sm sm:text-base text-[#F7E7D9] leading-[1.8] flex items-start gap-2.5"
                          >
                            <span className="text-[#F5D06C] font-bold font-mono shrink-0 mt-0.5">•</span>
                            <span>{guide}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentFormIntro.bookBenefits && currentFormIntro.bookBenefits.length > 0 && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#180E09] border border-emerald-500/35 space-y-3">
                      <h5 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                        <HeartPulse className="w-4 h-4 text-emerald-400" />
                        Các Tác Dụng &amp; Lợi Ích Chính Của Bài ({currentLesson.title}):
                      </h5>
                      <div className="space-y-2.5">
                        {currentFormIntro.bookBenefits.map((ben, bIdx) => (
                          <div
                            key={bIdx}
                            className="p-3 rounded-xl bg-[#120A06] border border-emerald-500/20 text-sm sm:text-base text-emerald-100/95 leading-[1.8] flex items-start gap-2.5"
                          >
                            <span className="text-emerald-400 font-bold font-mono shrink-0 mt-0.5">✓</span>
                            <span>{ben}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {currentFormIntro.bookMantras && currentFormIntro.bookMantras.length > 0 && (
                  <div className="space-y-2.5">
                    <h5 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#F5D06C] flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#F5D06C]" />
                      Khẩu Quyết &amp; Yếu Quyết Quan Trọng Trong Bài:
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {currentFormIntro.bookMantras.map((bm, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-3.5 sm:p-4 rounded-2xl bg-[#26140C] border border-[#F5D06C]/35 space-y-1"
                        >
                          <div className="text-sm sm:text-base font-bold text-[#F5D06C] font-serif">
                            &ldquo;{bm.mantra}&rdquo;
                          </div>
                          <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                            {bm.explanation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {currentFormIntro.bookClosingNote && (
                  <div className="p-3.5 rounded-xl bg-[#140C08] border border-[#F5D06C]/30 text-xs sm:text-sm text-amber-200 font-serif italic flex items-center gap-2">
                    <UserCheck className="w-4 h-4 text-[#F5D06C] shrink-0" />
                    <span>{currentFormIntro.bookClosingNote}</span>
                  </div>
                )}
              </div>
            )}

            {/* Bài Luyện Tổng Hợp 8 Phần */}
            <div className="col-span-1 md:col-span-2 p-5 sm:p-6 rounded-3xl bg-[#170E09] border border-[#F5D06C]/35 space-y-4 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F5D06C]/20 pb-3">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#F5D06C]">
                  <Layers className="w-4 h-4 text-[#F5D06C]" />
                  <span>{COMPOSITE_TRAINING_ROUTINE_8.title}</span>
                </div>
                <span className="text-xs font-mono text-amber-200/80 bg-[#2A160E] px-3 py-1 rounded-full border border-[#F5D06C]/30">
                  {COMPOSITE_TRAINING_ROUTINE_8.sourcePage}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-amber-100/95 leading-relaxed">
                {COMPOSITE_TRAINING_ROUTINE_8.intro}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                {COMPOSITE_TRAINING_ROUTINE_8.parts.map((part, pIdx) => (
                  <div
                    key={pIdx}
                    className="p-3 rounded-xl bg-[#120A06] border border-[#F5D06C]/20 text-xs sm:text-sm text-[#F7E7D9] leading-relaxed"
                  >
                    {part}
                  </div>
                ))}
              </div>
              <div className="p-3.5 rounded-2xl bg-[#22120B] border border-[#F5D06C]/25 space-y-1.5 text-xs sm:text-sm text-amber-100/90">
                <div className="font-mono font-bold text-[#F5D06C] uppercase text-xs">
                  Chú ý khi tập Bài Luyện Tổng Hợp (Nguyên văn sách gốc):
                </div>
                {COMPOSITE_TRAINING_ROUTINE_8.notes.map((n, nIdx) => (
                  <p key={nIdx} className="leading-relaxed">• {n}</p>
                ))}
              </div>
            </div>

            {/* Đối Sánh Vịnh Xuân Thế Giới */}
            {currentFormIntro.worldLineageContext && (
              <div className="col-span-1 md:col-span-2 p-5 sm:p-7 rounded-3xl bg-[#170E0A] border border-[#F5D06C]/35 space-y-4 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F5D06C]/20 pb-3">
                  <div className="flex items-center gap-2 text-sm sm:text-base font-bold uppercase tracking-wider text-[#F5D06C]">
                    <Globe className="w-4 h-4 text-[#F5D06C]" />
                    <span>3. Đối Sánh Hệ Thống Vịnh Xuân Thế Giới • Bối Cảnh &amp; Nguyên Lý Phổ Quát</span>
                  </div>
                  <span className="text-xs sm:text-sm font-mono font-bold text-amber-200 bg-[#2A160E] px-3.5 py-1 rounded-full border border-[#F5D06C]/30">
                    {currentFormIntro.worldLineageContext.globalName}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm sm:text-base">
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs sm:text-sm font-mono uppercase font-bold text-[#F5D06C] block mb-1.5">
                        Vị Thế Trong Hệ Thống Vịnh Xuân Toàn Cầu:
                      </span>
                      <p className="text-amber-100/95 leading-[1.8]">
                        {currentFormIntro.worldLineageContext.globalStanding}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-mono uppercase font-bold text-[#F5D06C] block mb-1.5">
                        Cội Nguồn Lịch Sử &amp; Liên Hệ Chi Phái:
                      </span>
                      <p className="text-[#F7E7D9] leading-[1.8] font-sans">
                        {currentFormIntro.worldLineageContext.historicalRoots}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <span className="text-xs sm:text-sm font-mono uppercase font-bold text-[#F5D06C] block mb-1.5">
                      Nguyên Lý Sinh Cơ Học Phổ Quát Chung:
                    </span>
                    <div className="space-y-2.5">
                      {currentFormIntro.worldLineageContext.universalPrinciples.map((up, uIdx) => (
                        <div
                          key={uIdx}
                          className="p-3 rounded-xl bg-[#20120B] border border-[#F5D06C]/20 flex items-start gap-2.5 text-sm text-[#F7E7D9] leading-[1.75]"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#F5D06C] mt-2 shrink-0" />
                          <span>{up}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Bản Sắc Đặc Thù & Giá Trị Y Võ */}
            {currentFormIntro.pgvxUniqueness && (
              <div className="col-span-1 md:col-span-2 p-5 sm:p-7 rounded-3xl bg-gradient-to-br from-[#24130A] to-[#180D08] border border-emerald-500/35 space-y-4 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-500/20 pb-3">
                  <div className="flex items-center gap-2 text-sm sm:text-base font-bold uppercase tracking-wider text-emerald-400">
                    <HeartPulse className="w-4 h-4 text-emerald-400" />
                    <span>4. Bản Sắc Đặc Thù &amp; Giá Trị Y Võ Phật Gia Vịnh Xuân Việt Nam</span>
                  </div>
                  <span className="text-xs sm:text-sm font-mono font-bold text-emerald-300 bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-700/40">
                    Truyền Thừa &amp; Y Sinh Học PGS.TS Nguyễn Mạnh Nhâm
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm sm:text-base">
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#140C08] border border-emerald-500/25 space-y-2">
                    <span className="text-xs sm:text-sm font-mono uppercase font-bold text-emerald-400 block">
                      Nét Dị Biệt Tinh Hoa:
                    </span>
                    <p className="text-emerald-100/95 leading-[1.75]">
                      {currentFormIntro.pgvxUniqueness.distinctiveFeatures}
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-[#140C08] border border-emerald-500/25 space-y-2">
                    <span className="text-xs sm:text-sm font-mono uppercase font-bold text-emerald-400 block">
                      Giá Trị Y Học &amp; Cột Sống (Y Võ):
                    </span>
                    <p className="text-emerald-100/95 leading-[1.75]">
                      {currentFormIntro.pgvxUniqueness.biomechanicalMedicalValue}
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-[#140C08] border border-emerald-500/25 space-y-2">
                    <span className="text-xs sm:text-sm font-mono uppercase font-bold text-emerald-400 block">
                      Tôn Chỉ Thực Chiến Cận Chiến:
                    </span>
                    <p className="text-emerald-100/95 leading-[1.75]">
                      {currentFormIntro.pgvxUniqueness.combatDoctrine}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Cầu Nối Tông Sư Thế Giới */}
            {currentFormIntro.globalBridge && (
              <div className="col-span-1 md:col-span-2 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#24130A] via-[#1E1009] to-[#140C08] border border-[#F5D06C]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 text-[#F5D06C] text-xs sm:text-sm font-mono font-bold uppercase tracking-wider">
                    <Globe className="w-4 h-4 text-[#F5D06C]" />
                    <span>Cầu Nối Học Thuật Tông Sư Thế Giới • {currentFormIntro.globalBridge.master}</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-200 font-serif leading-[1.8] max-w-reading">
                    <strong className="text-amber-200">{currentFormIntro.globalBridge.doctrine}:</strong> {currentFormIntro.globalBridge.correlation}
                  </p>
                </div>
              </div>
            )}

            {/* Lục Đại Trụ Cột */}
            <div className="col-span-1 md:col-span-2 p-5 sm:p-6 rounded-3xl bg-[#150D09] border border-[#F5D06C]/35 space-y-4 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F5D06C]/20 pb-3">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#F5D06C]">
                  <GraduationCap className="w-4 h-4 text-[#F5D06C]" />
                  <span>6. Lục Đại Trụ Cột Vịnh Xuân Thế Giới &amp; 6 Ý Ghi Nhớ Cốt Tủy</span>
                </div>
                <span className="text-xs font-mono text-amber-200/80 italic">
                  Hệ thống hóa chuẩn mực theo Vịnh Xuân quốc tế
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
                {CLASSICAL_6_PILLARS.map((p) => {
                  const isCurrent =
                    (p.code === "siu-nim-tau" && currentLesson.id === "bai-07") ||
                    (p.code === "chum-kiu" && currentLesson.id === "bai-09") ||
                    (p.code === "biu-jee" && currentLesson.id === "bai-10") ||
                    (p.code === "muk-yan-jong" && (currentLesson.id === "bai-17" || currentLesson.id === "bai-18")) ||
                    (p.code === "luk-dim-boon-gwun" && currentLesson.id === "con") ||
                    (p.code === "baat-jaam-do" && currentLesson.id === "bai-31");

                  const targetFormId =
                    p.code === "siu-nim-tau"
                      ? "bai-07"
                      : p.code === "chum-kiu"
                      ? "bai-09"
                      : p.code === "biu-jee"
                      ? "bai-10"
                      : p.code === "muk-yan-jong"
                      ? "bai-17"
                      : p.code === "luk-dim-boon-gwun"
                      ? "con"
                      : "bai-31";

                  return (
                    <div
                      key={p.code}
                      onClick={() => handleSelectForm(targetFormId, "intro")}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isCurrent
                          ? "bg-[#2E180E] border-[#F5D06C] shadow-lg shadow-[#F5D06C]/15 ring-2 ring-[#F5D06C]/50"
                          : "bg-[#1C100B] hover:bg-[#25140E] border-[#F5D06C]/20 hover:border-[#F5D06C]/50"
                      }`}
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-mono font-bold text-[#F5D06C]">
                            Trụ cột #{p.order}
                          </span>
                          {isCurrent && (
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#F5D06C] text-[#2A0E0A] font-bold">
                              Đang xem
                            </span>
                          )}
                        </div>
                        <h5 className="font-bold text-white text-xs sm:text-sm font-serif">
                          {p.formTitle}
                        </h5>
                        <div className="inline-block px-2 py-0.5 rounded-md bg-[#F5D06C]/15 text-[#F5D06C] text-[10px] font-bold font-mono">
                          {p.coreMnemonic}
                        </div>
                        <p className="text-[11px] text-amber-200/80 leading-relaxed font-sans">
                          {p.coreFunction}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Chuyên Khảo Học Thuật */}
            <div className="col-span-1 md:col-span-2 p-5 sm:p-6 rounded-3xl bg-gradient-to-br from-[#1C100B] to-[#120A06] border border-amber-500/35 space-y-4 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-500/20 pb-3">
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-amber-300">
                  <Scale className="w-4 h-4 text-amber-300" />
                  <span>7. Chuyên Khảo Học Thuật: Đối Sánh Truyền Thừa &amp; Niêm Thủ Thực Vận</span>
                </div>
                <button
                  onClick={() => setShowAllInsights(!showAllInsights)}
                  className="text-xs text-[#F5D06C] hover:underline font-mono font-bold flex items-center gap-1 self-start sm:self-auto cursor-pointer"
                >
                  <span>{showAllInsights ? "Thu gọn chuyên khảo" : "Xem trọn bộ 3 chuyên khảo"}</span>
                  {showAllInsights ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className="space-y-4">
                {(showAllInsights ? LINEAGE_SCHOLARLY_INSIGHTS : [relevantInsight]).map((ins) => (
                  <div
                    key={ins.id}
                    className="p-4 sm:p-5 rounded-2xl bg-[#140C08] border border-[#F5D06C]/25 space-y-3"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono font-bold text-[#F5D06C] uppercase tracking-wider block">
                        Chuyên Đề Nghiên Cứu • {ins.subtitle}
                      </span>
                      <h5 className="text-sm sm:text-base font-bold text-white font-serif">
                        {ins.title}
                      </h5>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="space-y-2">
                        <div>
                          <strong className="text-amber-200 block mb-0.5">Bối cảnh lịch sử &amp; Truyền thừa:</strong>
                          <p className="text-amber-100/90 leading-relaxed font-sans">{ins.historicalContext}</p>
                        </div>
                        <div>
                          <strong className="text-amber-200 block mb-0.5">Lý luận cốt lõi:</strong>
                          <p className="text-amber-100/90 leading-relaxed font-sans">{ins.coreDoctrine}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div>
                          <strong className="text-emerald-400 block mb-0.5">Dung hợp trong Phật Gia Vịnh Xuân:</strong>
                          <p className="text-emerald-100/90 leading-relaxed font-sans">{ins.pgvxCorrelation}</p>
                        </div>
                        <div className="space-y-1.5 pt-1">
                          {ins.bulletPoints.map((bp, bIdx) => (
                            <div
                              key={bIdx}
                              className="flex items-start gap-2 text-[11px] text-amber-200/90 leading-snug"
                            >
                              <span className="text-[#F5D06C] font-bold">✓</span>
                              <span>{bp}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 8. Nguồn Tham Khảo Học Thuật */}
            <div className="col-span-1 md:col-span-2 p-4 sm:p-5 rounded-2xl bg-[#140A06]/90 border border-[#F5D06C]/30 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F5D06C]/15 pb-2.5">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#F5D06C]">
                  <BookOpen className="w-4 h-4 text-[#F5D06C]" />
                  <span>8. Nguồn Tham Khảo Học Thuật, Y Học &amp; Kinh Điển Quốc Tế</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-300 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-700/50">
                  Chuẩn Học Thuật &amp; Sư Phạm Quốc Tế
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {AUTHORITATIVE_REFERENCES.map((ref) => (
                  <div
                    key={ref.id}
                    className="p-3.5 rounded-xl bg-[#1B100B] border border-[#F5D06C]/20 flex flex-col justify-between space-y-2"
                  >
                    <div className="space-y-1">
                      <span className="inline-block text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-[#F5D06C]/15 text-[#F5D06C] border border-[#F5D06C]/30">
                        {ref.categoryLabel} • {ref.year}
                      </span>
                      <h5 className="text-xs sm:text-sm font-bold font-serif text-white leading-snug">
                        {ref.title}
                      </h5>
                      <p className="text-[11px] text-amber-200/80 font-mono">
                        {ref.authors} — <em>{ref.publisherOrJournal}</em>
                      </p>
                    </div>
                    <p className="text-xs text-amber-100/85 leading-relaxed pt-1.5 border-t border-white/5">
                      {ref.keyContribution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : activeFormTab === "matrix" ? (
        /* -----------------------------------------------------------------------
           CHẾ ĐỘ 4: MA TRẬN TOÀN BỘ CÁC TƯ THẾ (GRID VIEW)
        ----------------------------------------------------------------------- */
        <section className="space-y-4 animate-fadeIn">
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
                  Nhấp vào bất kỳ ô nào để phóng to ảnh 2x Retina hoặc chuyển sang chế độ Luyện Từng Thế.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative flex-1 sm:w-60">
                <Search className="w-3.5 h-3.5 text-amber-200/60 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={matrixSearch}
                  onChange={(e) => setMatrixSearch(e.target.value)}
                  placeholder="Tìm chiêu, thế số, mã H..."
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#20150F] border border-[#F5D06C]/30 text-white rounded-xl focus:outline-none focus:border-[#F5D06C] placeholder-amber-200/40"
                />
              </div>

              <button
                onClick={() => setIsMatrixFlipped(!isMatrixFlipped)}
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
        </section>
      ) : (
        /* -----------------------------------------------------------------------
           CHẾ ĐỘ 5: BẢN ĐỒ LỘ TRÌNH 5 CHẶNG & DANH MỤC 18 BÀI QUYỀN
        ----------------------------------------------------------------------- */
        <section className="space-y-6 animate-fadeIn">
          <div className="glass-panel p-5 sm:p-6 rounded-3xl border border-[#F5D06C]/35 space-y-5 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1.5 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5D06C]/15 text-[#F5D06C] border border-[#F5D06C]/40 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-[#F5D06C]" />
                  Bản Đồ Hệ Thống Quyền Pháp Truyền Thừa • 18 Bài Quyền &amp; Binh Khí
                </div>
                <h3 className="text-xl sm:text-3xl font-extrabold font-serif text-white">
                  Lộ Trình Sư Phạm 5 Chặng (18 Bài Quyền &amp; Binh Khí)
                </h3>
                <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                  Nhấp chọn bất kỳ bài quyền nào dưới đây để bước ngay vào <strong>Phòng Tập 1 Màn Hình (Dojo Studio)</strong> của bài đó.
                </p>
              </div>

              <div className="flex items-center gap-2 bg-[#20150F] p-1.5 rounded-2xl border border-[#F5D06C]/30 shrink-0 self-start">
                <button
                  onClick={() => setViewStyle("stages")}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    viewStyle === "stages"
                      ? "bg-[#F5D06C] text-[#2A0E0A] shadow-md"
                      : "text-amber-200/70 hover:text-white"
                  }`}
                >
                  <Compass className="w-4 h-4" />
                  <span>Lộ Trình 5 Chặng</span>
                </button>
                <button
                  onClick={() => setViewStyle("catalog")}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    viewStyle === "catalog"
                      ? "bg-[#F5D06C] text-[#2A0E0A] shadow-md"
                      : "text-amber-200/70 hover:text-white"
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Tìm Kiếm 18 Bài</span>
                </button>
              </div>
            </div>

            {viewStyle === "stages" ? (
              <div className="space-y-5">
                {FORMS_18_STAGES.map((stage) => {
                  const stageLessons = FORMS_18.filter((l) => stage.formIds.includes(l.id));
                  return (
                    <div
                      key={stage.id}
                      className="p-4 sm:p-5 rounded-2xl bg-[#160D08] border border-[#F5D06C]/25 space-y-3.5"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F5D06C]/15 pb-2.5">
                        <div>
                          <span className="text-xs font-mono font-bold text-[#F5D06C] uppercase tracking-wider">
                            Chặng {stage.sequence}
                          </span>
                          <h4 className="text-base sm:text-lg font-bold font-serif text-white">
                            {stage.title}
                          </h4>
                          <p className="text-xs text-amber-200/70">{stage.desc}</p>
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
                              onClick={() => handleSelectForm(lesson.id, "dojo")}
                              onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                  e.preventDefault();
                                  handleSelectForm(lesson.id, "dojo");
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
                                  <span className="text-amber-200/70">{intro?.category}</span>
                                </div>
                                <div className="flex items-start gap-3">
                                  <MartialEmblem
                                    formId={lesson.id}
                                    size={40}
                                    variant="badge"
                                    className="shrink-0"
                                  />
                                  <div className="min-w-0 flex-1">
                                    <h5 className="font-bold text-sm text-white line-clamp-1">
                                      {lesson.title}
                                    </h5>
                                    {intro?.meaning && (
                                      <p className="text-xs text-amber-200/80 line-clamp-2 mt-1 font-serif italic">
                                        &ldquo;{intro.meaning}&rdquo;
                                      </p>
                                    )}
                                    {(intro?.category === "Tam Đại Quyền" ||
                                      intro?.category === "108 Thế Liên Hoàn") && (
                                      <span className="inline-block mt-1.5 px-2 py-0.5 rounded bg-[#F5D06C]/15 border border-[#F5D06C]/35 text-[10px] font-serif italic text-[#F5D06C]">
                                        &ldquo;Structure before Speed&rdquo;
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="mt-3 pt-2 border-t border-[#F5D06C]/15 flex items-center justify-between text-xs">
                                <span className="text-[#F5D06C] font-semibold flex items-center gap-1">
                                  {isSelected ? "Đang chọn • Mở Phòng Tập" : "Vào Phòng Tập Bài Này"}
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
            ) : (
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {FORM_CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition cursor-pointer ${
                          selectedCategory === cat.id
                            ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C]"
                            : "bg-[#140B07] text-amber-200/80 border-[#F5D06C]/25 hover:text-white"
                        }`}
                      >
                        {cat.name} ({cat.count})
                      </button>
                    ))}
                  </div>
                  <div className="relative w-full sm:w-72">
                    <Search className="w-4 h-4 text-amber-200/60 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Tìm bài: Tiểu Niệm Đầu, Đao, Kiếm..."
                      className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#20150F] border border-[#F5D06C]/30 text-white rounded-xl focus:outline-none focus:border-[#F5D06C]"
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
                        onClick={() => handleSelectForm(lesson.id, "dojo")}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleSelectForm(lesson.id, "dojo");
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
                            <span className="text-amber-200/70">{intro?.category}</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <MartialEmblem
                              formId={lesson.id}
                              size={40}
                              variant="badge"
                              className="shrink-0"
                            />
                            <div className="min-w-0 flex-1">
                              <h5 className="font-bold text-sm text-white line-clamp-1">
                                {lesson.title}
                              </h5>
                              {intro?.meaning && (
                                <p className="text-xs text-amber-200/80 line-clamp-2 mt-1 font-serif italic">
                                  &ldquo;{intro.meaning}&rdquo;
                                </p>
                              )}
                              {(intro?.category === "Tam Đại Quyền" ||
                                intro?.category === "108 Thế Liên Hoàn") && (
                                <span className="inline-block mt-1.5 px-2 py-0.5 rounded bg-[#F5D06C]/15 border border-[#F5D06C]/35 text-[10px] font-serif italic text-[#F5D06C]">
                                  &ldquo;Structure before Speed&rdquo;
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 pt-2 border-t border-[#F5D06C]/15 flex items-center justify-between text-xs">
                          <span className="text-[#F5D06C] font-semibold flex items-center gap-1">
                            {isSelected ? "Đang chọn • Mở Phòng Tập" : "Vào Phòng Tập Bài Này"}
                          </span>
                          <ChevronRight className="w-3.5 h-3.5 text-amber-200/60" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Liên kết sang Tab Lý Thuyết */}
            {onNavigateTab && (
              <div className="p-4 rounded-2xl bg-[#140B07] border border-[#F5D06C]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="text-xs text-amber-200/80">
                  <strong className="text-white">Khảo cứu 18 Chuyên đề Lý thuyết &amp; Lịch sử Môn phái:</strong> Toàn văn Lịch sử Nam Thiếu Lâm, Khí công dưỡng sinh, Linh giác...
                </div>
                <button
                  onClick={() => onNavigateTab("library")}
                  className="text-xs font-bold text-[#F5D06C] bg-[#2A160E] hover:bg-[#3D140E] px-4 py-2 rounded-xl border border-[#F5D06C]/40 shrink-0 transition cursor-pointer flex items-center gap-1.5"
                >
                  <span>Mở Tab &ldquo;Lý Thuyết&rdquo;</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* =========================================================================
          3. MODAL LIGHTBOX PHÓNG TO ẢNH ĐỘNG TÁC (2X RETINA)
      ========================================================================= */}
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

            <div className="relative rounded-2xl overflow-hidden bg-[#FBF9F5] p-2 sm:p-3 shadow-inner border border-[#F5D06C]/40 max-h-[55vh] flex items-center justify-center w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={zoomedMotion.img2xUrl || zoomedMotion.imgUrl}
                alt={cleanMotionTitle(zoomedMotion.desc) || `Động tác ${zoomedMotion.stepNo}`}
                className="max-h-[50vh] w-auto max-w-full object-contain rounded-lg filter drop-shadow-md"
              />
            </div>

            {zoomedMotion.desc && (
              <p className="text-xs sm:text-sm text-amber-100 text-center font-serif leading-relaxed max-w-lg px-1">
                &ldquo;{cleanMotionTitle(zoomedMotion.desc)}&rdquo;
              </p>
            )}

            <div className="text-[11px] font-mono text-amber-200/75 uppercase tracking-wider text-center">
              Mã tư liệu ảnh: {zoomedMotion.displayId}
              {zoomedMotion.bookStepNo ? ` • Chiêu/Thế sách gốc: ${zoomedMotion.bookStepNo}` : ""}
              {zoomedMotion.pdfPage ? ` • Trang ${zoomedMotion.pdfPage}` : ""}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
