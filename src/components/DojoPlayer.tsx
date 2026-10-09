"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Target,
  Swords,
  Maximize2,
  CheckCircle2,
  RotateCcw,
  Play,
  Pause,
  Compass,
  Bookmark,
  Share2,
  X,
  ZoomIn,
  Layers,
  ArrowRight,
  Info,
  FlipHorizontal,
} from "lucide-react";
import { Technique, TechniqueStep } from "@/data/techniques";
import { FORMS_CATALOG, getTechniquesByForm } from "@/data/all_7_forms";

interface DojoPlayerProps {
  technique: Technique;
  onSelectTechnique: (tech: Technique) => void;
  allTechniques: Technique[];
  selectedFormId?: string;
  onSelectForm?: (formId: string) => void;
}

export const DojoPlayer: React.FC<DojoPlayerProps> = ({
  technique,
  onSelectTechnique,
  allTechniques,
  selectedFormId,
  onSelectForm,
}) => {
  const [currentFormId, setCurrentFormId] = useState<string>(
    selectedFormId || technique.formId || "01-tieu-niem-dau"
  );
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isZoomedModalOpen, setIsZoomedModalOpen] = useState(false);
  const [showCenterlineGrid, setShowCenterlineGrid] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      const saved = localStorage.getItem("pgvx_bookmarks");
      if (saved) {
        return JSON.parse(saved).includes(technique.id);
      }
    } catch {
      // Ignore
    }
    return false;
  });
  const [copiedShare, setCopiedShare] = useState(false);
  const [isMirrorFlipped, setIsMirrorFlipped] = useState<boolean>(technique.isSymmetricLeft || false);
  const [isPlayingSequence, setIsPlayingSequence] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(2200); // 2200ms per step
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Điều chỉnh state khi prop technique thay đổi (React pattern: Adjusting state during render)
  const [prevTechniqueId, setPrevTechniqueId] = useState(technique.id);
  if (prevTechniqueId !== technique.id) {
    setPrevTechniqueId(technique.id);
    setCurrentStepIndex(0);
    setIsPlayingSequence(false);
    setIsMirrorFlipped(technique.isSymmetricLeft || false);
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("pgvx_bookmarks");
        setIsBookmarked(saved ? JSON.parse(saved).includes(technique.id) : false);
      } catch {
        setIsBookmarked(false);
      }
    }
  }

  // Điều chỉnh currentFormId khi selectedFormId thay đổi
  const [prevSelectedFormId, setPrevSelectedFormId] = useState(selectedFormId);
  if (selectedFormId && prevSelectedFormId !== selectedFormId) {
    setPrevSelectedFormId(selectedFormId);
    setCurrentFormId(selectedFormId);
  }

  // Danh sách kỹ thuật theo Bài Quyền đang chọn
  const activeTechniquesList = React.useMemo(() => {
    return getTechniquesByForm(currentFormId, allTechniques);
  }, [currentFormId, allTechniques]);

  const currentForm = React.useMemo(() => {
    return FORMS_CATALOG.find((f) => f.id === currentFormId) || FORMS_CATALOG[0];
  }, [currentFormId]);

  const handleFormChange = (newFormId: string) => {
    setCurrentFormId(newFormId);
    const formTechs = getTechniquesByForm(newFormId, allTechniques);
    if (formTechs.length > 0) {
      onSelectTechnique(formTechs[0]);
    }
    if (onSelectForm) {
      onSelectForm(newFormId);
    }
  };

  const steps: TechniqueStep[] = technique.steps || [];
  const totalSteps = steps.length;
  const currentStep: TechniqueStep =
    steps[currentStepIndex] ||
    steps[0] || {
      stepNo: "1",
      desc: technique.summary,
      imgUrl: "/assets/images/techniques/series/fig_1_1.png",
      keypoints: ["Giữ vững Kiềm Dương Tấn", "Định hình trục Tý Ngọ Tuyến"],
    };

  const toggleBookmark = () => {
    try {
      const saved = localStorage.getItem("pgvx_bookmarks");
      let list: string[] = saved ? JSON.parse(saved) : [];
      if (isBookmarked) {
        list = list.filter((id) => id !== technique.id);
        setIsBookmarked(false);
      } else {
        list.push(technique.id);
        setIsBookmarked(true);
      }
      localStorage.setItem("pgvx_bookmarks", JSON.stringify(list));
    } catch {
      // Ignore
    }
  };

  const handleShare = () => {
    try {
      const url = `${window.location.origin}?tech=${technique.code}`;
      navigator.clipboard.writeText(url);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    } catch {
      // Fallback
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2500);
    }
  };

  // Logic Tự động phát chuỗi động tác liên hoàn (Auto-Play Motion Flow)
  const advanceStep = useCallback(() => {
    if (totalSteps <= 1) return;
    setCurrentStepIndex((prev) => (prev + 1) % totalSteps);
  }, [totalSteps, setCurrentStepIndex]);

  useEffect(() => {
    if (isPlayingSequence && totalSteps > 1) {
      autoPlayTimerRef.current = setInterval(advanceStep, playbackSpeed);
    } else {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
        autoPlayTimerRef.current = null;
      }
    }
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
        autoPlayTimerRef.current = null;
      }
    };
  }, [isPlayingSequence, playbackSpeed, totalSteps, advanceStep]);



  // Phím tắt bàn phím
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Tránh cướp phím khi đang gõ text
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentStepIndex((prev) => (prev > 0 ? prev - 1 : totalSteps - 1));
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setCurrentStepIndex((prev) => (prev < totalSteps - 1 ? prev + 1 : 0));
      } else if (e.key === " " && totalSteps > 1) {
        e.preventDefault();
        setIsPlayingSequence((prev) => !prev);
      } else if (e.key.toLowerCase() === "c") {
        setShowCenterlineGrid((prev) => !prev);
      } else if (e.key.toLowerCase() === "m") {
        setIsMirrorFlipped((prev) => !prev);
      } else if (e.key.toLowerCase() === "f" || e.key.toLowerCase() === "z") {
        setIsZoomedModalOpen((prev) => !prev);
      } else if (e.key === "Escape" && isZoomedModalOpen) {
        setIsZoomedModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [totalSteps, isZoomedModalOpen]);

  // Tìm chiêu trước và chiêu sau trong danh mục bài quyền đang chọn
  const currentIndex = activeTechniquesList.findIndex((t) => t.id === technique.id);
  const prevTechnique = currentIndex > 0 ? activeTechniquesList[currentIndex - 1] : null;
  const nextTechnique =
    currentIndex >= 0 && currentIndex < activeTechniquesList.length - 1
      ? activeTechniquesList[currentIndex + 1]
      : null;

  // Nếu chiêu này là đối xứng trái, tìm chiêu gốc tương ứng
  const symmetricParentTech = technique.isSymmetricLeft
    ? activeTechniquesList.find((t) => {
        if (!technique.symmetricRef) return false;
        const match = technique.symmetricRef.match(/\d+/);
        return match ? t.order === parseInt(match[0], 10) : false;
      })
    : null;

  return (
    <div className="space-y-6">
      {/* Top Banner: Quick Switcher & Technique Master Header */}
      <div className="glass-panel rounded-2xl p-5 sm:p-6 border border-[#3D291F] shadow-2xl relative overflow-hidden">
        {/* Background Subtle Accent */}
        <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#E2B743]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="space-y-2">
            {/* Badges Bar */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-lg bg-[#E2B743]/15 text-[#E2B743] border border-[#E2B743]/30 font-mono text-xs font-bold tracking-wider">
                {currentForm.name.split(":")[1]?.trim() || currentForm.name}
              </span>

              <span className="px-3 py-1 rounded-lg bg-[#20150F] text-amber-200/90 border border-[#3D291F] text-xs font-medium">
                {technique.sectionName || currentForm.scanPages}
              </span>

              <span className="px-3 py-1 rounded-lg bg-[#140C08] text-emerald-400 border border-emerald-800/40 text-xs font-semibold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Thị phạm: {technique.instructor || currentForm.demonstrators}</span>
              </span>

              <span
                className={`px-3 py-1 rounded-lg text-xs font-bold border ${
                  technique.difficulty === "Cơ bản"
                    ? "bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30"
                    : technique.difficulty === "Trung cấp"
                    ? "bg-[#E2B743]/15 text-[#E2B743] border-[#E2B743]/30"
                    : "bg-[#DC2626]/15 text-[#DC2626] border-[#DC2626]/30"
                }`}
              >
                {technique.difficulty}
              </span>

              {totalSteps > 1 && (
                <span className="px-3 py-1 rounded-lg bg-[#C27D38]/20 text-amber-300 border border-[#C27D38]/40 text-xs font-semibold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Chuỗi {totalSteps} bước liên hoàn</span>
                </span>
              )}

              {technique.isSymmetricLeft && (
                <span className="px-3 py-1 rounded-lg bg-indigo-950/80 text-indigo-300 border border-indigo-700/60 text-xs font-bold flex items-center gap-1.5">
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Thế đối xứng trái</span>
                </span>
              )}
            </div>

            {/* Technique Full Name */}
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif text-[#FBF8F3] tracking-wide">
              {technique.name}
            </h1>

            {/* Sub-summary */}
            <p className="text-xs sm:text-sm text-amber-200/80 max-w-3xl leading-relaxed">
              {technique.summary}
            </p>
          </div>

          {/* Action Tools: Form Selector, Technique Selector, Quick Bái Tổ, Bookmark, Share */}
          <div className="flex flex-wrap items-center gap-2 self-stretch lg:self-auto justify-end">
            {/* Form Selector Dropdown (7 Bài Quyền) */}
            <div className="flex items-center gap-1.5">
              <select
                aria-label="Chọn Bài Quyền trong 7 Bài Quyền chính thống"
                value={currentFormId}
                onChange={(e) => handleFormChange(e.target.value)}
                className="px-3 py-2 rounded-xl bg-[#140C08] border border-[#E2B743]/60 text-xs font-bold text-[#E2B743] hover:border-[#E2B743] focus:outline-none focus:ring-1 focus:ring-[#E2B743] transition cursor-pointer max-w-[210px] truncate shadow-inner"
              >
                {FORMS_CATALOG.map((f) => (
                  <option key={f.id} value={f.id} className="bg-[#1C120D] text-amber-100 font-medium">
                    {f.name} — {f.demonstrators} ({f.scanPages})
                  </option>
                ))}
              </select>
            </div>

            {/* Quick Technique Selector Dropdown */}
            <select
              aria-label="Chọn chiêu thức trong bài quyền"
              value={technique.id}
              onChange={(e) => {
                const selected = activeTechniquesList.find((t) => t.id === e.target.value);
                if (selected) onSelectTechnique(selected);
              }}
              className="px-3 py-2 rounded-xl bg-[#20150F] border border-[#3D291F] text-xs font-medium text-amber-100 hover:border-[#E2B743]/50 focus:outline-none focus:ring-1 focus:ring-[#E2B743] transition cursor-pointer max-w-[200px] truncate"
            >
              {activeTechniquesList.map((t) => (
                <option
                  key={t.id}
                  value={t.id}
                  className={`bg-[#1C120D] ${t.order === 0 ? "text-[#E2B743] font-bold" : "text-amber-100"}`}
                >
                  {t.order === 0 ? "★ Nghi Thức Bái Tổ" : `${t.order}. ${t.name.split(":")[1]?.trim() || t.name}`}
                </option>
              ))}
            </select>

            {/* Quick Button to Bái Tổ */}
            {technique.code !== "BAI_TO" && (
              <button
                onClick={() => {
                  const baiTo = allTechniques.find((t) => t.code === "BAI_TO") || activeTechniquesList.find((t) => t.order === 0);
                  if (baiTo) onSelectTechnique(baiTo);
                }}
                className="px-2.5 py-2 rounded-xl bg-gradient-to-r from-[#E2B743]/20 to-amber-700/20 hover:from-[#E2B743]/35 hover:to-amber-700/35 border border-[#E2B743]/60 text-amber-200 text-xs font-bold transition flex items-center gap-1 shadow-md hover:scale-105 active:scale-95"
                title="Xem nghi thức Bái Tổ nhập môn"
              >
                <span>🙏 Bái Tổ</span>
              </button>
            )}

            {/* Bookmark Button */}
            <button
              onClick={toggleBookmark}
              className={`p-2 rounded-xl border text-xs font-medium transition flex items-center gap-1.5 ${
                isBookmarked
                  ? "bg-[#E2B743]/20 border-[#E2B743] text-[#E2B743] font-bold"
                  : "bg-[#20150F] border-[#3D291F] text-slate-300 hover:border-slate-500 hover:text-white"
              }`}
              title={isBookmarked ? "Đã lưu vào danh sách yêu thích" : "Lưu chiêu thức yêu thích"}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-[#E2B743]" : ""}`} />
            </button>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-[#20150F] border border-[#3D291F] hover:border-[#E2B743]/50 text-slate-300 hover:text-white text-xs font-medium transition flex items-center gap-1.5 relative"
              title="Sao chép liên kết chiêu thức"
            >
              <Share2 className="w-4 h-4" />
              {copiedShare && (
                <span className="absolute -top-8 right-0 px-2 py-1 rounded bg-[#E2B743] text-black font-bold text-[10px] whitespace-nowrap shadow-lg animate-fadeIn">
                  Đã sao chép!
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Symmetric Left Explanatory Banner (Khi là chiêu đối xứng trái) */}
        {technique.isSymmetricLeft && (
          <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-r from-indigo-950/60 to-purple-950/40 border border-indigo-500/40 text-xs text-indigo-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg">
            <div className="flex items-start gap-2.5">
              <Info className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Quy chuẩn võ học Phật Gia:</strong>{" "}
                {technique.symmetricNote ||
                  "Đòn thế đối xứng bên trái. Thực hiện toàn bộ kỹ thuật và thủ pháp tương tự nhưng đảo trục thân và bộ pháp sang bên trái."}
                <span className="block text-[11px] text-indigo-300/80 mt-0.5">
                  💡 Giữ nguyên khẩu quyết: Trọng tâm dồn chân sau, hai đầu gối khép che hạ bộ, xoay trục Tý Ngọ Tuyến đảo chiều.
                </span>
              </div>
            </div>

            {symmetricParentTech && (
              <button
                onClick={() => onSelectTechnique(symmetricParentTech)}
                className="px-3 py-1.5 rounded-lg bg-indigo-600/80 hover:bg-indigo-600 text-white font-semibold text-xs transition flex items-center gap-1.5 shrink-0 shadow"
              >
                <span>Xem {technique.symmetricRef || `Chiêu ${symmetricParentTech.order}`}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Main Interactive Stage Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Authentic Restored Photo Stage & Series Flow Player */}
        <div className="lg:col-span-6 xl:col-span-6 glass-panel rounded-2xl p-5 border border-[#3D291F] flex flex-col items-center relative overflow-hidden group">
          {/* Header Controls of Picture Box */}
          <div className="w-full flex items-center justify-between mb-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-[#140C08] border border-[#3D291F] font-semibold text-[#10B981] text-xs flex items-center gap-1.5 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5" /> Ảnh Tư Liệu Gốc 2012
              </span>
              {totalSteps > 1 && (
                <span className="px-2 py-0.5 rounded bg-[#E2B743]/10 text-amber-300 border border-[#E2B743]/30 font-semibold text-[11px]">
                  Chuỗi {totalSteps} động tác liên hoàn
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              {/* Martial Mirror Mode Toggle (Lật Gương Võ Học) */}
              <button
                onClick={() => setIsMirrorFlipped(!isMirrorFlipped)}
                className={`p-1.5 rounded-lg border text-xs flex items-center gap-1.5 transition ${
                  isMirrorFlipped
                    ? "bg-indigo-600/30 border-indigo-400 text-indigo-200 shadow-sm shadow-indigo-500/20"
                    : "bg-[#20150F] border-[#3D291F] text-slate-300 hover:text-white"
                }`}
                title={
                  isMirrorFlipped
                    ? "Đang bật chế độ Lật Gương (đòn bên trái). Bấm để xem ảnh gốc (Phím M)."
                    : "Bật chế độ Lật Gương Võ Học để quan sát trực quan đòn thế bên trái (Phím M)"
                }
              >
                <FlipHorizontal className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px] font-medium">
                  {isMirrorFlipped ? "Gương (Trái)" : "Gốc (Phải)"}
                </span>
              </button>

              {/* Centerline Grid Overlay Toggle */}
              <button
                onClick={() => setShowCenterlineGrid(!showCenterlineGrid)}
                className={`p-1.5 rounded-lg border text-xs flex items-center gap-1 transition ${
                  showCenterlineGrid
                    ? "bg-[#E2B743]/20 border-[#E2B743] text-[#E2B743]"
                    : "bg-[#20150F] border-[#3D291F] text-slate-300 hover:text-white"
                }`}
                title="Bật/Tắt Lưới Trục Tý Ngọ Tuyến (Phím C)"
              >
                <Compass className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px]">Trục Tuyến</span>
              </button>

              {/* Fullscreen Zoom */}
              <button
                onClick={() => setIsZoomedModalOpen(true)}
                className="p-1.5 rounded-lg bg-[#20150F] hover:bg-[#2A1C14] text-slate-300 hover:text-white border border-[#3D291F] transition"
                title="Phóng to ảnh xem chi tiết (Phím F hoặc Z)"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Picture Box - Pure White Background #FFFFFF */}
          <div className="relative w-full rounded-xl overflow-hidden bg-white shadow-2xl flex items-center justify-center min-h-[420px] sm:min-h-[460px] border border-slate-200">
            <div className="relative w-full h-[400px] sm:h-[440px]">
              <Image
                src={currentStep.imgUrl}
                alt={`Thế võ ${technique.name} - Bước ${currentStep.stepNo}`}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className={`object-contain transition-transform duration-300 group-hover:scale-[1.02] ${
                  isMirrorFlipped ? "-scale-x-100" : ""
                }`}
                style={{ transform: isMirrorFlipped ? "scaleX(-1)" : undefined }}
                priority
              />
            </div>

            {/* Badge Indicator khi bật chế độ Lật Gương Võ Học */}
            {isMirrorFlipped && (
              <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md bg-indigo-950/90 text-indigo-200 border border-indigo-500/40 text-[10px] font-semibold flex items-center gap-1.5 shadow-lg backdrop-blur animate-fadeIn">
                <FlipHorizontal className="w-3.5 h-3.5 text-indigo-400" />
                <span>Chế độ Gương Võ Học (Luyện Tập Bên Trái)</span>
              </div>
            )}

            {/* Optional Centerline Grid Guide Overlay */}
            {showCenterlineGrid && (
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                {/* Trục Tung Tý Ngọ Tuyến */}
                <div className="w-[1.5px] h-full bg-red-500/70 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                {/* Trục Hoành Ngang Ngực */}
                <div className="absolute h-[1.5px] w-full bg-red-500/50" />
                {/* Vòng Tròn Đan Điền */}
                <div className="absolute w-28 h-28 rounded-full border border-dashed border-red-500/50" />
                <div className="absolute top-3 left-3 bg-black/80 text-red-300 px-2 py-0.5 rounded text-[10px] font-mono">
                  Trục Tý Ngọ Tuyến (Centerline)
                </div>
              </div>
            )}

            {/* VỊ TRÍ SỐ THỨ TỰ BẮT BUỘC Ở BÊN DƯỚI BÀN CHÂN VÕ SƯ */}
            <div className="absolute bottom-3 inset-x-0 flex flex-col items-center justify-center pointer-events-none z-10 px-4">
              <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-black/95 via-[#1C120D]/95 to-black/95 border border-[#E2B743]/80 text-white font-mono text-xs sm:text-sm font-bold shadow-2xl backdrop-blur flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#E2B743] animate-pulse" />
                <span className="text-[#E2B743] tracking-wide">
                  Động tác {currentStep.stepNo}
                </span>
                {totalSteps > 1 && (
                  <span className="text-slate-400 font-sans font-normal text-xs">
                    (Bước {currentStepIndex + 1}/{totalSteps})
                  </span>
                )}
                {isMirrorFlipped && (
                  <span className="text-indigo-300 font-sans text-[11px] bg-indigo-950 px-2 py-0.5 rounded-full border border-indigo-500/50">
                    Đối xứng trái (Lật Gương Võ Học)
                  </span>
                )}
              </div>
            </div>

            {/* Badge Stamp: Provenance */}
            <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded bg-[#140C08]/90 text-white text-[10px] font-mono backdrop-blur border border-white/20 flex items-center gap-1.5 shadow">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
              <span>100% Ảnh Phục Chế HD • {technique.instructor || currentForm.demonstrators}</span>
            </div>
          </div>

          {/* Series Motion Flow Controller (Dành cho các chiêu có chuỗi nhiều bước) */}
          <div className="w-full mt-4 p-3.5 rounded-xl bg-[#20150F] border border-[#3D291F] space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-200">
                  Chuỗi Động Tác Liên Hoàn ({totalSteps} bước)
                </span>
                {technique.isSymmetricLeft && (
                  <span className="text-[10px] text-indigo-400 font-medium">
                    (Kế thừa từ {technique.symmetricRef || "chiêu gốc"})
                  </span>
                )}
              </div>

              {/* Auto-Play Toggle & Speed */}
              {totalSteps > 1 && (
                <div className="flex items-center gap-2">
                  <div className="flex items-center bg-[#140C08] rounded-lg p-0.5 border border-[#3D291F]">
                    <button
                      onClick={() => setPlaybackSpeed(3200)}
                      className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${
                        playbackSpeed === 3200
                          ? "bg-[#E2B743] text-black font-bold"
                          : "text-slate-400 hover:text-white"
                      }`}
                      title="Tốc độ chậm (3.2s)"
                    >
                      0.75x
                    </button>
                    <button
                      onClick={() => setPlaybackSpeed(2200)}
                      className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${
                        playbackSpeed === 2200
                          ? "bg-[#E2B743] text-black font-bold"
                          : "text-slate-400 hover:text-white"
                      }`}
                      title="Tốc độ chuẩn (2.2s)"
                    >
                      1x
                    </button>
                    <button
                      onClick={() => setPlaybackSpeed(1400)}
                      className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${
                        playbackSpeed === 1400
                          ? "bg-[#E2B743] text-black font-bold"
                          : "text-slate-400 hover:text-white"
                      }`}
                      title="Tốc độ nhanh (1.4s)"
                    >
                      1.5x
                    </button>
                  </div>

                  <button
                    onClick={() => setIsPlayingSequence(!isPlayingSequence)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 transition ${
                      isPlayingSequence
                        ? "bg-[#DC2626] text-white hover:bg-red-700"
                        : "bg-[#E2B743] text-black hover:bg-yellow-400 font-bold shadow-md shadow-[#E2B743]/20"
                    }`}
                    title="Phát liên hoàn các bước động tác theo nhịp điệu võ thuật (Phím Space)"
                  >
                    {isPlayingSequence ? (
                      <>
                        <Pause className="w-3.5 h-3.5" />
                        <span>Tạm Dừng</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Tự Động Phát</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Filmstrip / Thumbnail Row of Series Steps */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pt-1">
              {steps.map((st, idx) => {
                const isActive = idx === currentStepIndex;
                return (
                  <button
                    key={`${st.stepNo}-${idx}`}
                    onClick={() => {
                      setCurrentStepIndex(idx);
                      setIsPlayingSequence(false);
                    }}
                    className={`p-2 rounded-xl border text-left transition-all flex items-center gap-2.5 relative group ${
                      isActive
                        ? "border-[#E2B743] bg-[#E2B743]/15 shadow-lg shadow-[#E2B743]/10"
                        : "border-[#3D291F] bg-[#140C08] hover:border-slate-500 hover:bg-[#1C120D]"
                    }`}
                  >
                    {/* Tiny Thumbnail */}
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white shrink-0 border border-slate-300">
                      <Image
                        src={st.imgUrl}
                        alt={`Bước ${st.stepNo}`}
                        fill
                        sizes="40px"
                        className="object-contain p-0.5"
                        style={{ transform: isMirrorFlipped ? "scaleX(-1)" : undefined }}
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-xs font-bold font-mono ${
                            isActive ? "text-[#E2B743]" : "text-slate-300"
                          }`}
                        >
                          {st.stepNo}
                        </span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#E2B743] animate-pulse" />
                        )}
                      </div>
                      <p className="text-[10px] text-slate-400 truncate mt-0.5">{st.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Prev / Next Step Buttons */}
            {totalSteps > 1 && (
              <div className="flex items-center justify-between pt-2 border-t border-[#3D291F] text-xs">
                <button
                  onClick={() => {
                    setCurrentStepIndex((prev) => (prev > 0 ? prev - 1 : totalSteps - 1));
                    setIsPlayingSequence(false);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-[#140C08] border border-[#3D291F] hover:border-[#E2B743] text-slate-300 hover:text-white transition flex items-center gap-1"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Bước trước</span>
                </button>

                <span className="text-[11px] font-mono text-slate-400">
                  Bước {currentStepIndex + 1} trên tổng số {totalSteps}
                </span>

                <button
                  onClick={() => {
                    setCurrentStepIndex((prev) => (prev < totalSteps - 1 ? prev + 1 : 0));
                    setIsPlayingSequence(false);
                  }}
                  className="px-3 py-1.5 rounded-lg bg-[#140C08] border border-[#3D291F] hover:border-[#E2B743] text-slate-300 hover:text-white transition flex items-center gap-1"
                >
                  <span>Bước kế</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Stance Accuracy Reminder */}
          {technique.isNarrowStance && (
            <div className="mt-4 w-full p-3.5 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
              <div className="text-xs">
                <p className="font-bold text-[#10B981]">Quy Chuẩn Võ Học: Tấn Kiềm Dương (Chân Hẹp)</p>
                <p className="text-amber-100/90 mt-1 leading-relaxed">{technique.stanceRule}</p>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Step Description, Keypoints, Combat Application & Metronome */}
        <div className="lg:col-span-6 xl:col-span-6 space-y-6">
          {/* Step Detail Card */}
          <div className="glass-panel rounded-2xl p-6 border border-[#3D291F] space-y-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E2B743] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#E2B743]">
                  Yếu Lĩnh Chi Tiết Bước {currentStep.stepNo}
                </span>
              </div>

              {/* Prev / Next Step Navigation */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setCurrentStepIndex((prev) => (prev > 0 ? prev - 1 : totalSteps - 1));
                    setIsPlayingSequence(false);
                  }}
                  className="p-1.5 rounded-lg border border-[#3D291F] bg-[#140C08] text-slate-300 hover:text-white hover:border-[#E2B743] transition"
                  title="Bước trước (←)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono font-bold text-slate-300 px-1">
                  {currentStepIndex + 1} / {totalSteps}
                </span>
                <button
                  onClick={() => {
                    setCurrentStepIndex((prev) => (prev < totalSteps - 1 ? prev + 1 : 0));
                    setIsPlayingSequence(false);
                  }}
                  className="p-1.5 rounded-lg border border-[#3D291F] bg-[#140C08] text-slate-300 hover:text-white hover:border-[#E2B743] transition"
                  title="Bước tiếp theo (→)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Description Text */}
            <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed">
              {currentStep.desc}
            </p>

            {/* Mirror Mode Direction Guide */}
            {isMirrorFlipped && (
              <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/40 text-xs text-indigo-200 space-y-1.5 shadow-md">
                <div className="flex items-center gap-1.5 font-bold text-indigo-300">
                  <FlipHorizontal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Quy chuẩn đối xứng gương (Luyện tập bên Trái):</span>
                </div>
                <p className="text-[11px] text-indigo-200/90 leading-relaxed">
                  Ảnh minh họa đang được lật gương để môn sinh quan sát trực quan thế thủ bên trái. Hãy hoán đổi vai trò: <strong>Tay phải ⇄ Tay trái</strong>, <strong>Chân phải ⇄ Chân trái</strong>, xoay trục Tý Ngọ Tuyến sang hướng đối diện.
                </p>
              </div>
            )}

            {/* Keypoints Checklist */}
            <div className="pt-4 border-t border-[#3D291F] space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-200/90 flex items-center gap-2">
                <Target className="w-4 h-4 text-[#E2B743]" />
                Điểm Then Chốt Cần Lưu Ý (Yếu Lĩnh Võ Học)
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                {currentStep.keypoints.map((kp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#E2B743] shrink-0 mt-0.5" />
                    <span>{kp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Combat Application Box */}
            <div className="pt-4 border-t border-[#3D291F] space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-amber-200/90 flex items-center gap-2">
                <Swords className="w-4 h-4 text-[#E2B743]" />
                Ứng Dụng Thực Chiến & Phân Thế Chiêu Thức
              </h4>
              <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed italic bg-[#140C08]/90 p-3.5 rounded-xl border border-[#3D291F]">
                {technique.combatApplication}
              </p>
            </div>

            {/* Sparring Breakdown Box (Nếu là chiêu đối kháng 2 người) */}
            {technique.isTwoPerson && technique.sparringInfo && (
              <div className="pt-4 border-t border-[#3D291F] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#DC2626] uppercase tracking-wide">
                  <Swords className="w-4 h-4" />
                  <span>Phân Định Tác Chiến Đối Luyện</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="bg-[#140C08]/90 p-2.5 rounded-lg border border-slate-800">
                    <span className="font-bold text-[#E2B743] block mb-0.5">Võ Sư A (Tấn công):</span>
                    <p className="text-slate-300 leading-relaxed">{technique.sparringInfo.attacker}</p>
                  </div>
                  <div className="bg-[#140C08]/90 p-2.5 rounded-lg border border-slate-800">
                    <span className="font-bold text-[#10B981] block mb-0.5">
                      Võ Sư B (Hóa giải / Phản đòn):
                    </span>
                    <p className="text-slate-300 leading-relaxed">{technique.sparringInfo.defender}</p>
                  </div>
                </div>
              </div>
            )}
          </div>



          {/* Next / Previous Continuous Sequence Controls */}
          <div className="flex items-center justify-between pt-2">
            {prevTechnique ? (
              <button
                onClick={() => onSelectTechnique(prevTechnique)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#20150F] hover:bg-[#2A1C14] border border-[#3D291F] hover:border-[#E2B743]/50 text-xs text-slate-300 hover:text-white transition shadow"
              >
                <ChevronLeft className="w-4 h-4 text-[#E2B743]" />
                <div className="text-left">
                  <span className="text-[10px] text-amber-200/60 block">Chiêu trước</span>
                  <span className="font-semibold line-clamp-1">
                    {prevTechnique.code}: {prevTechnique.name.split(":")[1]?.trim() || prevTechnique.name}
                  </span>
                </div>
              </button>
            ) : (
              <div />
            )}

            {nextTechnique && (
              <button
                onClick={() => onSelectTechnique(nextTechnique)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#20150F] hover:bg-[#2A1C14] border border-[#3D291F] hover:border-[#E2B743]/50 text-xs text-slate-300 hover:text-white transition text-right shadow"
              >
                <div className="text-right">
                  <span className="text-[10px] text-amber-200/60 block">Chiêu kế tiếp</span>
                  <span className="font-semibold line-clamp-1">
                    {nextTechnique.code}: {nextTechnique.name.split(":")[1]?.trim() || nextTechnique.name}
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#E2B743]" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen HD Modal for Zoomed View */}
      {isZoomedModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setIsZoomedModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#1C120D] border border-[#E2B743]/50 rounded-2xl p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#3D291F] pb-3">
              <div>
                <h3 className="text-base font-bold text-white font-serif">
                  {technique.name}
                </h3>
                <p className="text-xs text-amber-200/80">{currentStep.desc}</p>
              </div>
              <button
                onClick={() => setIsZoomedModalOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative w-full h-[65vh] bg-white rounded-xl overflow-hidden flex items-center justify-center p-4">
              <Image
                src={currentStep.imgUrl}
                alt={currentStep.desc}
                fill
                sizes="100vw"
                className={`object-contain transition-transform duration-200 ${
                  isMirrorFlipped ? "-scale-x-100" : ""
                }`}
                style={{ transform: isMirrorFlipped ? "scaleX(-1)" : undefined }}
                priority
              />
              {isMirrorFlipped && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-indigo-950/90 text-indigo-200 border border-indigo-500/40 text-xs font-semibold flex items-center gap-1.5 shadow-lg backdrop-blur">
                  <FlipHorizontal className="w-4 h-4 text-indigo-400" />
                  <span>Đang xem chế độ Lật Gương Võ Học (Luyện Tập Bên Trái)</span>
                </div>
              )}

              {/* SỐ THỨ TỰ BÊN DƯỚI BÀN CHÂN TRONG MODAL ZOOM */}
              <div className="absolute bottom-4 inset-x-0 flex justify-center pointer-events-none z-10 px-4">
                <div className="px-5 py-2 rounded-full bg-gradient-to-r from-black/95 via-[#1C120D]/95 to-black/95 border border-[#E2B743] text-white font-mono text-sm font-bold shadow-2xl backdrop-blur flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E2B743] animate-pulse" />
                  <span className="text-[#E2B743]">Động tác {currentStep.stepNo}</span>
                  {totalSteps > 1 && (
                    <span className="text-slate-400 font-sans font-normal text-xs">
                      (Bước {currentStepIndex + 1}/{totalSteps})
                    </span>
                  )}
                  {isMirrorFlipped && (
                    <span className="text-indigo-300 font-sans text-xs bg-indigo-950 px-2 py-0.5 rounded-full border border-indigo-500/50">
                      Đối xứng trái
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-[#10B981]">
                <ZoomIn className="w-4 h-4" />
                Ảnh phục chế HD tư liệu 2012 ({technique.instructor || "HLV Phạm Đức Hùng"}) — Sách GS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức
              </span>
              <span className="font-mono text-slate-500">Ấn ESC hoặc bấm bên ngoài để đóng</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
