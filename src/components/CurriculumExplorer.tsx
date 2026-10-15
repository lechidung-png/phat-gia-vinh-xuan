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
  Shield,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  FlipHorizontal,
  Globe,
  HeartPulse,
  PlayCircle,
  Film,
  Columns,
  Eye,
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
  getFormIntro,
  FormIntroduction,
} from "@/data/formsIntro";
import {
  getMasterVideosForForm,
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
  initialLessonId = "bai-07",
  initialMotionIndex = 0,
  navigationSeq = 0,
}) => {
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
  const [activeFormTab, setActiveFormTab] = useState<
    "dojo" | "video" | "intro" | "matrix" | "roadmap"
  >("dojo");
  const [isQuickSwitcherOpen, setIsQuickSwitcherOpen] = useState(false);
  const [selectedVideoIdx, setSelectedVideoIdx] = useState(0);
  const [videoStudyMode, setVideoStudyMode] = useState<"split" | "cinema">("split");
  const [matrixSearch, setMatrixSearch] = useState("");
  const [isMatrixFlipped, setIsMatrixFlipped] = useState(false);

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

  const currentFormIndex = useMemo(() => {
    const idx = FORMS_18.findIndex((l) => l.id === selectedLessonId);
    return idx >= 0 ? idx : 0;
  }, [selectedLessonId, FORMS_18]);

  const currentLesson: CanonicalLesson = useMemo(() => {
    return FORMS_18[currentFormIndex] || FORMS_18[0];
  }, [currentFormIndex, FORMS_18]);

  const currentFormIntro: FormIntroduction = useMemo(() => {
    return getFormIntro(currentLesson.id) || FORMS_18_INTRO["bai-07"];
  }, [currentLesson.id]);

  const currentVideos: MasterVideoItem[] = useMemo(() => {
    return getMasterVideosForForm(currentLesson.id);
  }, [currentLesson.id]);

  const activeVideo: MasterVideoItem = currentVideos[selectedVideoIdx] || currentVideos[0];

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
    <div className="space-y-6 animate-fadeIn">
      {/* =========================================================================
          1. THANH ĐIỀU HƯỚNG KHÔNG GIAN MỞ (OPEN EDITORIAL STUDIO HEADER)
          Thoát khỏi các ô viền chật chội: Tiêu đề lớn, chữ 14px–24px thoáng đãng
      ========================================================================= */}
      <section className="pb-4 border-b border-white/10 relative">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
          {/* CỤM TRÁI: TÊN BÀI QUYỀN KHỔ LỚN & NÚT ĐỔI BÀI NHANH */}
          <div className="flex flex-wrap items-center gap-4 min-w-0">
            <MartialEmblem
              formId={currentLesson.id}
              size={48}
              variant="badge"
              className="shrink-0 shadow-lg"
            />
            <div className="min-w-0 space-y-1">
              <div className="flex items-center gap-2.5 flex-wrap text-xs sm:text-sm font-mono">
                <span className="text-[#F5D06C] font-bold uppercase">
                  Bài {currentFormIndex + 1}/18 • {currentFormIntro.category}
                </span>
                <span className="text-white/75">•</span>
                <span className="text-emerald-400 font-semibold">
                  {currentLesson.motions.length} thế võ
                </span>
                {(currentFormIntro.category === "Tam Đại Quyền" ||
                  currentFormIntro.category === "108 Thế Liên Hoàn") && (
                  <>
                    <span className="text-white/75 hidden sm:inline">•</span>
                    <span className="text-amber-200 font-serif italic hidden sm:inline">
                      &ldquo;Structure before Speed&rdquo;
                    </span>
                  </>
                )}
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white tracking-tight">
                  {currentLesson.title}
                </h2>
                {currentFormIntro.hanziName && (
                  <span className="text-sm sm:text-base text-[#F5D06C]/80 font-sans hidden md:inline">
                    ({currentFormIntro.hanziName})
                  </span>
                )}

                {/* Nút Đổi Bài Nhanh tinh tế */}
                <div className="flex items-center gap-1.5 ml-1">
                  <button
                    type="button"
                    onClick={() => {
                      const prevIdx = (currentFormIndex - 1 + FORMS_18.length) % FORMS_18.length;
                      handleSelectForm(FORMS_18[prevIdx].id);
                    }}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-amber-200 hover:text-white transition cursor-pointer"
                    title="Bài quyền trước"
                    aria-label="Bài quyền trước"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsQuickSwitcherOpen(!isQuickSwitcherOpen)}
                    className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1.5 border transition cursor-pointer ${
                      isQuickSwitcherOpen
                        ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C] shadow-md"
                        : "bg-white/5 hover:bg-white/10 text-[#F5D06C] border-[#F5D06C]/35"
                    }`}
                  >
                    <Compass className="w-4 h-4" />
                    <span>Đổi Bài (18)</span>
                    {isQuickSwitcherOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const nextIdx = (currentFormIndex + 1) % FORMS_18.length;
                      handleSelectForm(FORMS_18[nextIdx].id);
                    }}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-amber-200 hover:text-white transition cursor-pointer"
                    title="Bài quyền tiếp theo"
                    aria-label="Bài quyền tiếp theo"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* CỤM PHẢI: 5 CHẾ ĐỘ HỌC TẬP VỚI CHỮ 14px RÕ NÉT, KHOẢNG CÁCH THOÁNG */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#120A06] border border-white/10 rounded-2xl shrink-0">
            <button
              type="button"
              onClick={() => setActiveFormTab("dojo")}
              className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeFormTab === "dojo"
                  ? "bg-[#F5D06C] text-[#2A0E0A] shadow-md"
                  : "text-amber-100/80 hover:text-white hover:bg-white/5"
              }`}
            >
              <Swords className="w-4 h-4" />
              <span>Luyện Từng Thế ({currentLesson.motions.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveFormTab("video")}
              className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeFormTab === "video"
                  ? "bg-gradient-to-r from-[#F5D06C] to-[#E2B743] text-[#2A0E0A] shadow-md"
                  : "text-emerald-300 hover:text-white bg-emerald-950/40 border border-emerald-500/30"
              }`}
            >
              <PlayCircle className="w-4 h-4" />
              <span>Video Đại Sư ({currentVideos.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveFormTab("intro")}
              className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeFormTab === "intro"
                  ? "bg-[#F5D06C] text-[#2A0E0A] shadow-md"
                  : "text-amber-100/80 hover:text-white hover:bg-white/5"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Sách Gốc &amp; Triết Lý</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveFormTab("matrix")}
              className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeFormTab === "matrix"
                  ? "bg-[#F5D06C] text-[#2A0E0A] shadow-md"
                  : "text-amber-100/80 hover:text-white hover:bg-white/5"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>Ma Trận ({currentLesson.motions.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveFormTab("roadmap")}
              className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl transition cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeFormTab === "roadmap"
                  ? "bg-[#F5D06C] text-[#2A0E0A] shadow-md"
                  : "text-amber-100/80 hover:text-white hover:bg-white/5"
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Lộ Trình 18 Bài</span>
            </button>
          </div>
        </div>

        {/* NGĂN KÉO CHỌN NHANH 18 BÀI QUYỀN (CHỮ RÕ RÀNG 14px, BỐ CỤC THOÁNG) */}
        {isQuickSwitcherOpen && (
          <div className="mt-4 p-5 rounded-3xl bg-[#160C08] border border-[#F5D06C]/35 space-y-4 shadow-2xl animate-fadeIn">
            <div className="flex items-center justify-between">
              <span className="text-sm font-mono font-bold text-[#F5D06C] uppercase flex items-center gap-2">
                <Layers className="w-4 h-4" />
                Chọn nhanh trong 18 Bài Quyền &amp; Binh Khí theo 5 Chặng:
              </span>
              <button
                type="button"
                onClick={() => setIsQuickSwitcherOpen(false)}
                className="px-3 py-1 rounded-full bg-white/5 hover:bg-white/15 text-amber-200 hover:text-white flex items-center gap-1.5 text-xs sm:text-sm cursor-pointer"
              >
                <span>Đóng</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {FORMS_18_STAGES.map((stage) => {
                const stageLessons = FORMS_18.filter((l) => stage.formIds.includes(l.id));
                return (
                  <div
                    key={stage.id}
                    className="space-y-2 border-l-2 border-[#F5D06C]/30 pl-3"
                  >
                    <div className="text-xs font-mono font-bold text-[#F5D06C] uppercase">
                      Chặng {stage.sequence}
                    </div>
                    <div className="space-y-1.5">
                      {stageLessons.map((l) => {
                        const isCurrent = l.id === selectedLessonId;
                        return (
                          <button
                            key={l.id}
                            type="button"
                            onClick={() => handleSelectForm(l.id)}
                            className={`w-full px-3 py-2 rounded-xl text-xs sm:text-sm text-left transition flex items-center justify-between gap-2 cursor-pointer ${
                              isCurrent
                                ? "bg-[#F5D06C] text-[#2A0E0A] font-bold shadow"
                                : "hover:bg-white/5 text-amber-100/90"
                            }`}
                          >
                            <span className="truncate">{l.title}</span>
                            <span
                              className={`text-xs font-mono px-2 py-0.5 rounded-full shrink-0 ${
                                isCurrent
                                  ? "bg-[#2A0E0A] text-[#F5D06C]"
                                  : "bg-white/10 text-amber-200"
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
           CHẾ ĐỘ 1: SÂN KHẤU LUYỆN TẬP 50/50 KHÔNG KHUNG VIỀN (ĐỌC RÕ TỪ 2 MÉT)
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
           CHẾ ĐỘ 2: PHÒNG CHIẾU VIDEO ĐẠI SƯ KIỂU MASTERCLASS CINEMA
        ----------------------------------------------------------------------- */
        <section className="space-y-8 animate-fadeIn">
          <div className="rounded-3xl bg-gradient-to-b from-[#170D08] to-[#0E0704] border border-[#F5D06C]/25 p-5 sm:p-8 lg:p-10 shadow-2xl space-y-6">
            {/* Thanh Tiêu đề + Chế độ xem */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-emerald-400 uppercase font-bold">
                  <Film className="w-4 h-4" />
                  <span>Phòng Chiếu Tư Liệu Đại Sư • 4 Đại Sư Phụ Tinh Tuyển</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  {currentLesson.title} ({currentVideos.length} Video Đại Sư)
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <button
                  onClick={() => setVideoStudyMode("split")}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition cursor-pointer border ${
                    videoStudyMode === "split"
                      ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C] shadow-md"
                      : "bg-white/5 text-amber-100 border-white/15 hover:text-white"
                  }`}
                >
                  <Columns className="w-4 h-4" />
                  <span>Song hành: Video + Sách gốc</span>
                </button>
                <button
                  onClick={() => setVideoStudyMode("cinema")}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-2 transition cursor-pointer border ${
                    videoStudyMode === "cinema"
                      ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C] shadow-md"
                      : "bg-white/5 text-amber-100 border-white/15 hover:text-white"
                  }`}
                >
                  <Film className="w-4 h-4" />
                  <span>Phòng chiếu rộng (Cinema)</span>
                </button>
              </div>
            </div>

            {/* Thanh Chọn Nhanh Đại Sư (Chữ 14px–16px thoáng, sang trọng) */}
            <div className="flex items-center gap-2.5 overflow-x-auto pb-1">
              {currentVideos.map((vid, vIdx) => {
                const isSelected = vIdx === selectedVideoIdx;
                return (
                  <button
                    key={vid.id}
                    onClick={() => setSelectedVideoIdx(vIdx)}
                    className={`px-4 py-2.5 rounded-full border text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-2.5 shrink-0 ${
                      isSelected
                        ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C] font-bold shadow-lg"
                        : "bg-white/5 text-amber-100 border-white/15 hover:border-[#F5D06C]/60"
                    }`}
                  >
                    <span
                      className={`font-mono text-xs px-2 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-[#2A0E0A] text-[#F5D06C]"
                          : "bg-white/10 text-[#F5D06C]"
                      }`}
                    >
                      #{vIdx + 1}
                    </span>
                    <span>{vid.masterName}</span>
                  </button>
                );
              })}
            </div>

            {/* KHU VỰC TRÌNH PHÁT CHÍNH + ĐỐI CHIẾU SÁCH GỐC */}
            {activeVideo && (
              <div
                className={`grid grid-cols-1 ${
                  videoStudyMode === "split" ? "lg:grid-cols-12" : ""
                } gap-8 items-start`}
              >
                <div
                  className={
                    videoStudyMode === "split" ? "lg:col-span-7 space-y-5" : "space-y-5"
                  }
                >
                  <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-[#F5D06C]/40 shadow-2xl bg-black">
                    <iframe
                      key={activeVideo.youtubeId}
                      src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?rel=0&modestbranding=1`}
                      title={activeVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full border-0"
                    />
                  </div>

                  {/* Phân tích sư phạm mở (Editorial Layout, không đóng nhiều hộp nhỏ) */}
                  <div className="space-y-4 pt-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-lg sm:text-2xl font-serif font-bold text-white">
                        {activeVideo.title}
                      </h4>
                      <a
                        href={`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-mono text-[#F5D06C] hover:underline"
                      >
                        Mở trên YouTube ↗
                      </a>
                    </div>

                    <p className="text-base sm:text-lg text-amber-100/95 leading-relaxed">
                      <strong className="text-[#F5D06C]">Trọng tâm sư phạm:</strong>{" "}
                      {activeVideo.pedagogicalFocus}
                    </p>

                    <div className="border-l-4 border-[#F5D06C] pl-4 sm:pl-5 space-y-2.5">
                      <div className="text-xs sm:text-sm font-mono font-bold uppercase text-[#F5D06C] flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span>3 Điểm Chạm Quan Sát Khi Xem ({activeVideo.masterName}):</span>
                      </div>
                      <ul className="space-y-2 text-sm sm:text-base text-amber-100/90">
                        {activeVideo.watchPoints.map((wp, wIdx) => (
                          <li key={wIdx} className="flex items-start gap-2.5 leading-relaxed">
                            <span className="text-[#F5D06C] font-bold font-mono">
                              {wIdx + 1}.
                            </span>
                            <span>{wp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-l-4 border-emerald-500 pl-4 sm:pl-5 py-1 text-sm sm:text-base text-emerald-100/95 leading-relaxed">
                      <strong className="text-emerald-300">Đối sánh Sách Gốc PGVX:</strong>{" "}
                      {activeVideo.comparisonWithBook}
                    </div>
                  </div>
                </div>

                {videoStudyMode === "split" && currentLesson.motions[activeMotionIndex] && (
                  <div className="lg:col-span-5 p-6 rounded-3xl bg-[#140B07] border border-white/10 space-y-5 shadow-xl">
                    <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
                      <div>
                        <span className="text-xs font-mono uppercase tracking-wider text-[#F5D06C] block font-bold">
                          Đối Chiếu Sách Gốc Từng Nhịp
                        </span>
                        <h5 className="text-base sm:text-lg font-serif font-bold text-white mt-0.5">
                          Thế {currentLesson.motions[activeMotionIndex].stepNo} /{" "}
                          {currentLesson.motions.length} •{" "}
                          {extractMotionChieu(currentLesson.motions[activeMotionIndex].desc) ||
                            "Chiêu thức"}
                        </h5>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            setActiveMotionIndex(Math.max(0, activeMotionIndex - 1))
                          }
                          disabled={activeMotionIndex === 0}
                          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white cursor-pointer"
                          title="Thế trước"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() =>
                            setActiveMotionIndex(
                              Math.min(
                                currentLesson.motions.length - 1,
                                activeMotionIndex + 1
                              )
                            )
                          }
                          disabled={activeMotionIndex === currentLesson.motions.length - 1}
                          className="p-2.5 rounded-full bg-[#F5D06C] hover:bg-[#E2B743] disabled:opacity-40 text-[#2A0E0A] font-bold cursor-pointer"
                          title="Thế tiếp theo"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div
                      onClick={() =>
                        setZoomedMotion(currentLesson.motions[activeMotionIndex])
                      }
                      className="relative rounded-2xl overflow-hidden bg-[#FBF9F5] p-3 border border-[#F5D06C]/30 flex items-center justify-center h-72 sm:h-80 cursor-zoom-in group"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={
                          currentLesson.motions[activeMotionIndex].img2xUrl ||
                          currentLesson.motions[activeMotionIndex].imgUrl
                        }
                        alt={cleanMotionTitle(
                          currentLesson.motions[activeMotionIndex].desc
                        )}
                        className="h-full w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                      />
                      <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/75 text-[#F5D06C] text-xs font-mono">
                        Trang {currentLesson.motions[activeMotionIndex].pdfPage} • Hình{" "}
                        {currentLesson.motions[activeMotionIndex].displayId}
                      </span>
                    </div>

                    <p className="text-base sm:text-lg text-[#FAF6F0] leading-relaxed font-serif">
                      {cleanMotionTitle(currentLesson.motions[activeMotionIndex].desc)}
                    </p>

                    <div className="flex items-center justify-between gap-3 pt-2 border-t border-white/10">
                      <span className="text-xs sm:text-sm font-mono text-amber-200/80">
                        Nhảy nhanh tới thế:
                      </span>
                      <select
                        aria-label="Chọn thế võ trong bài"
                        value={activeMotionIndex}
                        onChange={(e) => setActiveMotionIndex(Number(e.target.value))}
                        className="bg-[#20120B] text-amber-100 border border-white/15 rounded-full px-3.5 py-2 text-xs sm:text-sm font-mono focus:outline-none focus:border-[#F5D06C]"
                      >
                        {currentLesson.motions.map((m, idx) => (
                          <option key={m.id || idx} value={idx}>
                            Thế {m.stepNo} (
                            {extractMotionChieu(m.desc) || `Hình ${m.displayId}`})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* LƯỚI THẺ VIDEO ĐẠI SƯ CỦA BÀI ĐANG CHỌN */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <h5 className="text-sm sm:text-base font-mono font-bold uppercase tracking-wider text-[#F5D06C] flex items-center gap-2">
                <PlayCircle className="w-4 h-4 text-[#F5D06C]" />
                <span>
                  {currentVideos.length} Video Đại Sư Thị Phạm Của Bài {currentLesson.title}
                </span>
              </h5>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {currentVideos.map((vid, vIdx) => {
                  const isSelected = vIdx === selectedVideoIdx;
                  return (
                    <div
                      key={vid.id}
                      onClick={() => setSelectedVideoIdx(vIdx)}
                      className={`group rounded-2xl border overflow-hidden transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? "bg-[#26140C] border-[#F5D06C] ring-2 ring-[#F5D06C]/45 shadow-xl"
                          : "bg-[#140A06] border-white/10 hover:border-[#F5D06C]/60"
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
                          <span
                            className={`absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full text-xs font-mono font-bold ${
                              isSelected
                                ? "bg-emerald-500 text-black"
                                : "bg-black/80 text-emerald-400"
                            }`}
                          >
                            {isSelected ? "▶ Đang phát" : `Video #${vIdx + 1}`}
                          </span>
                          <div className="absolute bottom-2.5 left-3 right-3 text-xs sm:text-sm font-mono text-amber-200 font-bold truncate">
                            {vid.masterName}
                          </div>
                        </div>

                        <div className="p-4 space-y-2">
                          <div className="text-sm sm:text-base font-bold font-serif text-white line-clamp-2 leading-snug">
                            {vid.title}
                          </div>
                          <p className="text-xs sm:text-sm text-amber-100/75 line-clamp-2 leading-relaxed">
                            {vid.pedagogicalFocus}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Trụ Cột Tam Đại Bộ Quyền ("Structure before Speed") */}
            <div className="pt-6 border-t border-white/10">
              <div className="p-6 rounded-3xl bg-[#160C07] border border-[#F5D06C]/30 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                <div className="space-y-1.5">
                  <div className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#F5D06C] flex items-center gap-2 flex-wrap">
                    <Sparkles className="w-4 h-4 text-[#F5D06C]" />
                    <span>
                      Trụ Cột Nền Tảng: Tam Đại Bộ Quyền (
                      {getMasterVideosForForm("bai-07").length +
                        getMasterVideosForForm("bai-09").length +
                        getMasterVideosForForm("bai-10").length}{" "}
                      Video Đại Sư)
                    </span>
                    <span className="px-3 py-0.5 rounded-full bg-[#F5D06C]/15 border border-[#F5D06C]/35 text-amber-200 font-serif italic normal-case">
                      &ldquo;Structure before Speed&rdquo;
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-amber-100/90">
                    Châm ngôn cốt tủy{" "}
                    <strong className="text-[#F5D06C]">
                      &ldquo;Structure before Speed&rdquo; (Cấu trúc trước Tốc độ)
                    </strong>{" "}
                    — Ba bài quyền gốc rễ của Vịnh Xuân Quyền:
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 shrink-0">
                  {[
                    {
                      id: "bai-07",
                      step: "1. Sơ Cấp",
                      name: "Tiểu Niệm Đầu",
                      focus: `${getMasterVideosForForm("bai-07").length} Video Đại Sư`,
                    },
                    {
                      id: "bai-09",
                      step: "2. Trung Cấp",
                      name: "Tầm Kiều",
                      focus: `${getMasterVideosForForm("bai-09").length} Video Đại Sư`,
                    },
                    {
                      id: "bai-10",
                      step: "3. Cao Cấp",
                      name: "Tiêu Chỉ",
                      focus: `${getMasterVideosForForm("bai-10").length} Video Đại Sư`,
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
                        className={`px-4 py-3 rounded-2xl border text-left transition cursor-pointer ${
                          isCoreActive
                            ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C] shadow-md font-bold"
                            : "bg-white/5 text-amber-100 border-white/15 hover:border-[#F5D06C]/70"
                        }`}
                      >
                        <div className="text-xs font-mono uppercase opacity-85">
                          {core.step} • {core.name}
                        </div>
                        <div className="text-sm font-bold mt-0.5">{core.focus}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : activeFormTab === "intro" ? (
        /* -----------------------------------------------------------------------
           CHẾ ĐỘ 3: CẨM NANG SÁCH GỐC & TRIẾT LÝ PHONG CÁCH TẠP CHÍ EDITORIAL
           (Loại bỏ các hộp con chật chội, dùng chữ khổ lớn 18px–22px và khoảng thở rộng)
        ----------------------------------------------------------------------- */
        <section className="rounded-3xl bg-gradient-to-b from-[#180E09] to-[#110906] border border-[#F5D06C]/25 p-6 sm:p-10 lg:p-12 space-y-12 shadow-2xl animate-fadeIn">
          {/* 1. TIÊU ĐỀ TẠP CHÍ & PULL-QUOTE TRUNG TÂM */}
          <div className="space-y-6 border-b border-white/10 pb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#F5D06C]">
                  Cẩm Nang Sách Gốc &amp; Triết Lý Võ Đạo • Bảo Toàn 100% Giáo Trình Gốc
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold font-serif text-white">
                  {currentLesson.title}{" "}
                  {currentFormIntro.hanziName && (
                    <span className="text-xl sm:text-2xl text-[#F5D06C]/80 font-normal">
                      ({currentFormIntro.hanziName})
                    </span>
                  )}
                </h3>
              </div>
              <button
                onClick={() => setActiveFormTab("dojo")}
                className="px-5 py-2.5 rounded-full bg-[#F5D06C] text-[#2A0E0A] font-bold text-sm flex items-center gap-2 hover:bg-[#F5D06C]/90 transition cursor-pointer shadow-lg shrink-0 self-start"
              >
                <span>Vào Sân Khấu Luyện Tập</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Đại Khẩu Quyết (Editorial Pull-Quote khổ lớn 22px–26px) */}
            <blockquote className="border-l-4 border-[#F5D06C] pl-6 py-2 space-y-2">
              <p className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-[#FFFDF8] leading-relaxed">
                &ldquo;{currentFormIntro.keyMantra}&rdquo;
              </p>
              <footer className="text-sm sm:text-base text-amber-200/80 font-mono">
                — {currentFormIntro.meaning}
              </footer>
            </blockquote>
          </div>

          {/* 2. TRIẾT LÝ VÕ ĐẠO & 3 YẾU LĨNH CỐT TỬ (2 CỘT MỞ KHÔNG VIỀN HỘP) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 border-b border-white/10 pb-10">
            <div className="lg:col-span-6 space-y-5">
              <h4 className="text-base sm:text-lg font-mono font-bold uppercase tracking-wider text-[#F5D06C]">
                01. Triết Lý Võ Đạo &amp; Trích Dẫn Sách Gốc
              </h4>
              <p className="text-lg sm:text-xl text-[#FAF6F0] leading-[1.85] font-serif">
                {currentFormIntro.philosophy}
              </p>
              <div className="border-l-2 border-amber-400/50 pl-5 py-1 text-base sm:text-lg text-amber-100/90 italic font-serif leading-[1.85]">
                &ldquo;{currentFormIntro.introQuote}&rdquo;
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <h4 className="text-base sm:text-lg font-mono font-bold uppercase tracking-wider text-[#F5D06C]">
                02. Ba Yếu Lĩnh Cốt Tử Khi Thực Hiện
              </h4>
              <div className="space-y-4">
                {currentFormIntro.principles.map((pr, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 text-base sm:text-lg text-[#FAF6F0] leading-[1.8]"
                  >
                    <span className="w-8 h-8 rounded-full bg-[#F5D06C] text-[#2A0E0A] font-mono font-bold flex items-center justify-center shrink-0 text-sm mt-1">
                      0{idx + 1}
                    </span>
                    <span>{pr}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. NGUYÊN VĂN SÁCH GỐC: LỜI DẪN, ĐIỂM CẦN BIẾT & TÁC DỤNG (EDITORIAL SPREAD) */}
          {(currentFormIntro.bookOriginalIntro ||
            currentFormIntro.bookTrainingGuidelines ||
            currentFormIntro.bookBenefits ||
            currentFormIntro.bookMantras) && (
            <div className="space-y-10 border-b border-white/10 pb-10">
              <div className="space-y-2">
                <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-emerald-400">
                  Nguyên Bản Giáo Trình PGS.TS Nguyễn Mạnh Nhâm &amp; ThS.DS Nguyễn Duy Thức
                </span>
                <h4 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                  03. Toàn Văn Hướng Dẫn Tập Luyện, Tác Dụng &amp; Khẩu Quyết
                </h4>
              </div>

              {currentFormIntro.bookOriginalIntro &&
                currentFormIntro.bookOriginalIntro.length > 0 && (
                  <div className="space-y-4 max-w-4xl">
                    <h5 className="text-sm sm:text-base font-mono font-bold uppercase tracking-wider text-[#F5D06C]">
                      Lời Dẫn Nhập &amp; Điển Tích Trong Sách Gốc:
                    </h5>
                    <div className="space-y-4 text-base sm:text-lg text-amber-100/95 font-serif leading-[1.9]">
                      {currentFormIntro.bookOriginalIntro.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>
                  </div>
                )}

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-2">
                {currentFormIntro.bookTrainingGuidelines &&
                  currentFormIntro.bookTrainingGuidelines.length > 0 && (
                    <div className="space-y-4">
                      <h5 className="text-base sm:text-lg font-mono font-bold uppercase tracking-wider text-[#F5D06C] flex items-center gap-2 border-b border-[#F5D06C]/25 pb-2">
                        <Shield className="w-5 h-5 text-[#F5D06C]" />
                        Những Điểm Cần Biết Khi Tập ({currentLesson.title})
                      </h5>
                      <ul className="space-y-4 text-base sm:text-lg text-[#FAF6F0] leading-[1.85]">
                        {currentFormIntro.bookTrainingGuidelines.map((guide, gIdx) => (
                          <li key={gIdx} className="flex items-start gap-3">
                            <span className="text-[#F5D06C] font-bold font-mono mt-0.5">
                              •
                            </span>
                            <span>{guide}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {currentFormIntro.bookBenefits &&
                  currentFormIntro.bookBenefits.length > 0 && (
                    <div className="space-y-4">
                      <h5 className="text-base sm:text-lg font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2 border-b border-emerald-500/25 pb-2">
                        <HeartPulse className="w-5 h-5 text-emerald-400" />
                        Các Tác Dụng &amp; Lợi Ích Chính ({currentLesson.title})
                      </h5>
                      <ul className="space-y-4 text-base sm:text-lg text-emerald-50/95 leading-[1.85]">
                        {currentFormIntro.bookBenefits.map((ben, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3">
                            <span className="text-emerald-400 font-bold font-mono mt-0.5">
                              ✓
                            </span>
                            <span>{ben}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
              </div>

              {currentFormIntro.bookMantras &&
                currentFormIntro.bookMantras.length > 0 && (
                  <div className="space-y-4 pt-2">
                    <h5 className="text-base sm:text-lg font-mono font-bold uppercase tracking-wider text-[#F5D06C]">
                      Khẩu Quyết &amp; Yếu Quyết Quan Trọng Trong Bài:
                    </h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {currentFormIntro.bookMantras.map((bm, mIdx) => (
                        <div
                          key={mIdx}
                          className="border-l-4 border-[#F5D06C] pl-5 py-1 space-y-1.5"
                        >
                          <div className="text-lg sm:text-xl font-bold text-[#F5D06C] font-serif">
                            &ldquo;{bm.mantra}&rdquo;
                          </div>
                          <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed">
                            {bm.explanation}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          )}

          {/* 4. ĐỐI SÁNH VỊNH XUÂN THẾ GIỚI & GIÁ TRỊ Y VÕ (2 CỘT THOÁNG) */}
          {currentFormIntro.worldLineageContext && currentFormIntro.pgvxUniqueness && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-4">
                <h4 className="text-base sm:text-lg font-mono font-bold uppercase tracking-wider text-[#F5D06C] flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  <span>04. Đối Sánh Hệ Thống Vịnh Xuân Thế Giới</span>
                </h4>
                <p className="text-base sm:text-lg text-amber-100/95 leading-[1.85]">
                  {currentFormIntro.worldLineageContext.globalStanding}
                </p>
                <ul className="space-y-2.5 text-sm sm:text-base text-amber-100/85 pt-1">
                  {currentFormIntro.worldLineageContext.universalPrinciples.map(
                    (up, uIdx) => (
                      <li key={uIdx} className="flex items-start gap-2.5">
                        <span className="text-[#F5D06C] font-bold">•</span>
                        <span>{up}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-base sm:text-lg font-mono font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                  <HeartPulse className="w-5 h-5" />
                  <span>05. Giá Trị Y Võ &amp; Bản Sắc Phật Gia Vịnh Xuân</span>
                </h4>
                <p className="text-base sm:text-lg text-emerald-50/95 leading-[1.85]">
                  {currentFormIntro.pgvxUniqueness.distinctiveFeatures}
                </p>
                <p className="text-sm sm:text-base text-emerald-200/90 leading-[1.8]">
                  <strong className="text-emerald-300">Giải phẫu &amp; Cột sống:</strong>{" "}
                  {currentFormIntro.pgvxUniqueness.biomechanicalMedicalValue}
                </p>
              </div>
            </div>
          )}
        </section>
      ) : activeFormTab === "matrix" ? (
        /* -----------------------------------------------------------------------
           CHẾ ĐỘ 4: BẢNG MA TRẬN TOÀN CẢNH KHỔ LỚN (GALLERY GRID VIEW)
        ----------------------------------------------------------------------- */
        <section className="space-y-6 animate-fadeIn">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-serif">
                Bảng Ma Trận Toàn Cảnh: {currentLesson.title} ({currentLesson.motions.length} tư thế)
              </h3>
              <p className="text-sm text-amber-200/75 mt-1">
                Nhấp vào bất kỳ ô nào để phóng to ảnh 2x Retina hoặc chuyển sang chế độ Luyện Từng Thế.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative flex-1 sm:w-64">
                <Search className="w-4 h-4 text-amber-200/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={matrixSearch}
                  onChange={(e) => setMatrixSearch(e.target.value)}
                  placeholder="Tìm chiêu, thế số, mã H..."
                  className="w-full pl-10 pr-4 py-2 text-sm bg-[#1A0E09] border border-white/15 text-white rounded-full focus:outline-none focus:border-[#F5D06C] placeholder-amber-200/40"
                />
              </div>

              <button
                onClick={() => setIsMatrixFlipped(!isMatrixFlipped)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition cursor-pointer flex items-center gap-2 ${
                  isMatrixFlipped
                    ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C] font-bold shadow"
                    : "bg-white/5 text-amber-100 border-white/15 hover:text-white"
                }`}
              >
                <FlipHorizontal className="w-4 h-4" />
                <span>Lật gương</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredMatrixMotions.map((motion, idx) => {
              const isActive = activeMotionIndex === idx;
              return (
                <div
                  key={motion.id || idx}
                  onClick={() => setZoomedMotion(motion)}
                  className={`group relative rounded-3xl border transition-all duration-200 p-4 cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? "bg-[#26140C] border-[#F5D06C] shadow-xl ring-2 ring-[#F5D06C]/40"
                      : "bg-[#150C08] hover:bg-[#1E110B] border-white/10 hover:border-[#F5D06C]/60"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs sm:text-sm mb-3 font-mono">
                    <span className="font-bold text-[#2A0E0A] bg-[#F5D06C] px-3 py-0.5 rounded-full">
                      Thế {motion.stepNo}
                    </span>
                    <span className="text-amber-200/70">
                      {extractMotionChieu(motion.desc) || `Hình ${motion.displayId}`}
                    </span>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden bg-[#FBF9F5] p-3 flex items-center justify-center aspect-[3/4]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={motion.img2xUrl || motion.imgUrl}
                      alt={cleanMotionTitle(motion.desc) || `Thế ${motion.stepNo}`}
                      className={`h-full w-auto object-contain filter drop-shadow-sm transition-transform duration-200 group-hover:scale-105 ${
                        isMatrixFlipped ? "scale-x-[-1]" : ""
                      }`}
                      loading="lazy"
                    />
                  </div>

                  <div className="mt-3.5 space-y-3">
                    <p className="text-sm sm:text-base font-serif text-amber-50 line-clamp-2 leading-snug">
                      {cleanMotionTitle(motion.desc) ||
                        `Động tác thứ ${motion.stepNo} của bài ${currentLesson.title}.`}
                    </p>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMotionIndex(idx);
                        setActiveFormTab("dojo");
                      }}
                      className="w-full py-2 px-3 rounded-full bg-white/8 hover:bg-[#F5D06C] text-[#F5D06C] hover:text-[#2A0E0A] text-xs sm:text-sm font-bold transition text-center flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Luyện thế này</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        /* -----------------------------------------------------------------------
           CHẾ ĐỘ 5: BẢN ĐỒ LỘ TRÌNH 5 CHẶNG & DANH MỤC 18 BÀI QUYỀN (GALLERY CARDS)
        ----------------------------------------------------------------------- */
        <section className="space-y-8 animate-fadeIn">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[#F5D06C]">
                Hệ Thống 18 Bài Quyền &amp; Binh Khí Chân Truyền • &ldquo;Structure before Speed&rdquo;
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold font-serif text-white">
                Lộ Trình Sư Phạm 5 Chặng Toàn Phái
              </h3>
              <p className="text-sm sm:text-base text-amber-100/85 leading-relaxed">
                Nhấp chọn bất kỳ bài quyền nào dưới đây để bước ngay vào{" "}
                <strong className="text-[#F5D06C]">Sân Khấu Luyện Tập 50/50</strong> của bài đó.
              </p>
            </div>

            <div className="flex items-center gap-2 bg-[#160C08] p-1.5 rounded-full border border-white/15 shrink-0 self-start">
              <button
                onClick={() => setViewStyle("stages")}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  viewStyle === "stages"
                    ? "bg-[#F5D06C] text-[#2A0E0A] shadow-md"
                    : "text-amber-200/80 hover:text-white"
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>Theo 5 Chặng</span>
              </button>
              <button
                onClick={() => setViewStyle("catalog")}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  viewStyle === "catalog"
                    ? "bg-[#F5D06C] text-[#2A0E0A] shadow-md"
                    : "text-amber-200/80 hover:text-white"
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Tìm Kiếm 18 Bài</span>
              </button>
            </div>
          </div>

          {viewStyle === "stages" ? (
            <div className="space-y-10">
              {FORMS_18_STAGES.map((stage) => {
                const stageLessons = FORMS_18.filter((l) => stage.formIds.includes(l.id));
                return (
                  <div key={stage.id} className="space-y-5">
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-white/10 pb-3">
                      <div className="space-y-1">
                        <span className="text-xs sm:text-sm font-mono font-bold text-[#F5D06C] uppercase tracking-wider">
                          Chặng 0{stage.sequence}
                        </span>
                        <h4 className="text-xl sm:text-2xl font-bold font-serif text-white">
                          {stage.title}
                        </h4>
                        <p className="text-sm sm:text-base text-amber-200/80">
                          {stage.desc}
                        </p>
                      </div>
                      <span className="text-xs sm:text-sm font-mono font-semibold px-3.5 py-1 rounded-full bg-white/5 text-[#F5D06C] border border-white/10 self-start sm:self-auto">
                        {stageLessons.length} bài quyền
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {stageLessons.map((lesson) => {
                        const isSelected = lesson.id === selectedLessonId;
                        const intro = getFormIntro(lesson.id);
                        const vids = getMasterVideosForForm(lesson.id);
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
                            className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between space-y-5 ${
                              isSelected
                                ? "bg-[#26140C] border-[#F5D06C] shadow-2xl ring-2 ring-[#F5D06C]/40"
                                : "bg-[#150C08] border-white/10 hover:border-[#F5D06C]/70 hover:bg-[#1C100A]"
                            }`}
                          >
                            <div className="space-y-4">
                              <div className="flex items-center justify-between text-xs sm:text-sm font-mono">
                                <span className="font-bold text-[#2A0E0A] bg-[#F5D06C] px-3 py-1 rounded-full">
                                  {lesson.motions.length} động tác
                                </span>
                                <span className="text-emerald-400 font-semibold">
                                  {vids.length} Video Đại Sư
                                </span>
                              </div>

                              <div className="flex items-start gap-4">
                                <MartialEmblem
                                  formId={lesson.id}
                                  size={48}
                                  variant="badge"
                                  className="shrink-0"
                                />
                                <div className="min-w-0 flex-1 space-y-1.5">
                                  <h5 className="font-bold text-lg sm:text-xl text-white font-serif">
                                    {lesson.title}
                                  </h5>
                                  {intro?.meaning && (
                                    <p className="text-sm text-amber-100/85 line-clamp-2 font-serif italic leading-relaxed">
                                      &ldquo;{intro.meaning}&rdquo;
                                    </p>
                                  )}
                                  {(intro?.category === "Tam Đại Quyền" ||
                                    intro?.category === "108 Thế Liên Hoàn") && (
                                    <div className="pt-1">
                                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#F5D06C]/15 border border-[#F5D06C]/35 text-xs font-serif italic text-[#F5D06C]">
                                        &ldquo;Structure before Speed&rdquo;
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-sm font-bold text-[#F5D06C]">
                              <span>
                                {isSelected
                                  ? "Đang chọn • Mở Sân Khấu Tập"
                                  : "Vào Sân Khấu Luyện Tập"}
                              </span>
                              <ArrowRight className="w-4 h-4" />
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
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {FORM_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold border transition cursor-pointer ${
                        selectedCategory === cat.id
                          ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C]"
                          : "bg-white/5 text-amber-100 border-white/15 hover:text-white"
                      }`}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>
                <div className="relative w-full sm:w-80">
                  <Search className="w-4 h-4 text-amber-200/60 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm bài: Tiểu Niệm Đầu, Đao, Kiếm..."
                    className="w-full pl-10 pr-4 py-2 text-sm bg-[#1A0E09] border border-white/15 text-white rounded-full focus:outline-none focus:border-[#F5D06C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCatalogLessons.map((lesson) => {
                  const isSelected = lesson.id === selectedLessonId;
                  const intro = getFormIntro(lesson.id);
                  const vids = getMasterVideosForForm(lesson.id);
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
                      className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between space-y-5 ${
                        isSelected
                          ? "bg-[#26140C] border-[#F5D06C] shadow-2xl ring-2 ring-[#F5D06C]/40"
                          : "bg-[#150C08] border-white/10 hover:border-[#F5D06C]/70 hover:bg-[#1C100A]"
                      }`}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs sm:text-sm font-mono">
                          <span className="font-bold text-[#2A0E0A] bg-[#F5D06C] px-3 py-1 rounded-full">
                            {lesson.motions.length} động tác
                          </span>
                          <span className="text-emerald-400 font-semibold">
                            {vids.length} Video Đại Sư
                          </span>
                        </div>
                        <div className="flex items-start gap-4">
                          <MartialEmblem
                            formId={lesson.id}
                            size={48}
                            variant="badge"
                            className="shrink-0"
                          />
                          <div className="min-w-0 flex-1 space-y-1.5">
                            <h5 className="font-bold text-lg sm:text-xl text-white font-serif">
                              {lesson.title}
                            </h5>
                            {intro?.meaning && (
                              <p className="text-sm text-amber-100/85 line-clamp-2 font-serif italic leading-relaxed">
                                &ldquo;{intro.meaning}&rdquo;
                              </p>
                            )}
                            {(intro?.category === "Tam Đại Quyền" ||
                              intro?.category === "108 Thế Liên Hoàn") && (
                              <div className="pt-1">
                                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#F5D06C]/15 border border-[#F5D06C]/35 text-xs font-serif italic text-[#F5D06C]">
                                  &ldquo;Structure before Speed&rdquo;
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-sm font-bold text-[#F5D06C]">
                        <span>
                          {isSelected
                            ? "Đang chọn • Mở Sân Khấu Tập"
                            : "Vào Sân Khấu Luyện Tập"}
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200 overflow-hidden max-w-full w-full"
          onClick={() => setZoomedMotion(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[92vh] bg-[#160B06] border border-[#F5D06C]/40 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col items-center gap-5 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs sm:text-sm font-mono font-bold text-[#F5D06C] uppercase tracking-wider">
                  Động Tác {zoomedMotion.stepNo} • {currentLesson.title}
                </span>
                <h4 className="text-lg sm:text-xl font-bold font-serif text-white mt-1">
                  {cleanMotionTitle(zoomedMotion.desc)}
                </h4>
              </div>
              <button
                onClick={() => setZoomedMotion(null)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-[#F5D06C] hover:text-[#2A0E0A] text-amber-200 transition cursor-pointer shrink-0"
                title="Đóng (Esc)"
                aria-label="Đóng cửa sổ phóng to ảnh"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-[#FBF9F5] p-4 shadow-inner border border-[#F5D06C]/40 max-h-[60vh] flex items-center justify-center w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={zoomedMotion.img2xUrl || zoomedMotion.imgUrl}
                alt={cleanMotionTitle(zoomedMotion.desc) || `Động tác ${zoomedMotion.stepNo}`}
                className="max-h-[55vh] w-auto max-w-full object-contain rounded-lg filter drop-shadow-md"
              />
            </div>

            <div className="text-xs sm:text-sm font-mono text-amber-200/80 uppercase tracking-wider text-center">
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
