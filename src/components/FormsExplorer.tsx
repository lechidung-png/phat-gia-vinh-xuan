"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Swords,
  Layers,
  Sparkles,
  Info,
  CheckCircle2,
  ChevronRight,
  Maximize2,
  X,
  Play,
  ArrowRight,
  Shield,
  Compass,
  Eye,
  Grid,
  Tv,
} from "lucide-react";
import { Technique, TechniqueStep } from "@/data/techniques";
import { FORMS_CATALOG, getTechniquesByForm, FormCatalogItem } from "@/data/all_7_forms";
import { DojoPlayer } from "@/components/DojoPlayer";

interface FormsExplorerProps {
  allTechniques: Technique[];
  selectedFormId?: string;
  onSelectForm?: (formId: string) => void;
  onSelectTechnique?: (tech: Technique) => void;
}

interface FlattenedMotionStep {
  id: string;
  stepNo: string;
  desc: string;
  imgUrl: string;
  keypoints?: string[];
  technique: Technique;
  stepIndex: number;
  isSymmetricLeft?: boolean;
}

export const FormsExplorer: React.FC<FormsExplorerProps> = ({
  allTechniques,
  selectedFormId = "01-tieu-niem-dau",
  onSelectForm,
  onSelectTechnique,
}) => {
  const [currentFormId, setCurrentFormId] = useState<string>(selectedFormId);
  const [viewMode, setViewMode] = useState<"gallery" | "dojo">("gallery");
  const [selectedTechnique, setSelectedTechnique] = useState<Technique>(allTechniques[0]);
  const [zoomedStep, setZoomedStep] = useState<FlattenedMotionStep | null>(null);

  // Danh mục 8 quyền pháp chính thống (Bái Tổ + 7 Bài Quyền)
  const fullFormsCatalog = useMemo(() => {
    const baiToItem: FormCatalogItem = {
      id: "bai-to",
      name: "Nghi Thức Bái Tổ (9 Bước)",
      codeName: "Salutation Ritual",
      demonstrators: "Võ sư Lê Văn Tùng",
      scanPages: "Trang 20 - 21",
      bookPages: "20 - 21",
      techniqueCount: 1,
      description: "Nghi thức Bái Tổ tôn sư trọng đạo mở đầu mọi buổi luyện tập: 9 bước liên hoàn cung kính, đứng Kiềm Dương Tấn, mở thông kinh mạch, thu quyền đan điền.",
      type: "single",
    };
    return [baiToItem, ...FORMS_CATALOG];
  }, []);

  const currentForm = useMemo(() => {
    return fullFormsCatalog.find((f) => f.id === currentFormId) || fullFormsCatalog[1];
  }, [currentFormId, fullFormsCatalog]);

  // Danh sách kỹ thuật theo bài quyền đang chọn
  const activeTechniques = useMemo(() => {
    if (currentFormId === "bai-to") {
      const baiToTech =
        allTechniques.find((t) => t.id === "PGVX-TECH-BAI-TO" || t.sectionId === "khai-the-bai-to" || t.id === "khai-the-bai-to") ||
        allTechniques[0];
      return [baiToTech];
    }
    return getTechniquesByForm(currentFormId, allTechniques);
  }, [currentFormId, allTechniques]);

  // Flatten toàn bộ các bước động tác (All Motion Steps) của bài quyền
  const allMotionSteps: FlattenedMotionStep[] = useMemo(() => {
    const stepsList: FlattenedMotionStep[] = [];
    activeTechniques.forEach((tech) => {
      if (tech.steps && tech.steps.length > 0) {
        tech.steps.forEach((step, idx) => {
          const isSym = Boolean(step.isSymmetricLeft ?? tech.isSymmetricLeft);
          stepsList.push({
            id: `${tech.id}-step-${idx}`,
            stepNo: step.stepNo || `${tech.order}.${idx + 1}`,
            desc: step.desc,
            imgUrl: step.imgUrl,
            keypoints: step.keypoints,
            technique: tech,
            stepIndex: idx,
            isSymmetricLeft: isSym,
          });
        });
      }
    });
    return stepsList;
  }, [activeTechniques]);

  const handleSelectForm = (formId: string) => {
    setCurrentFormId(formId);
    if (onSelectForm) {
      onSelectForm(formId);
    }
    const techs =
      formId === "bai-to"
        ? [allTechniques.find((t) => t.id === "PGVX-TECH-BAI-TO" || t.sectionId === "khai-the-bai-to" || t.id === "khai-the-bai-to") || allTechniques[0]]
        : getTechniquesByForm(formId, allTechniques);
    if (techs.length > 0) {
      setSelectedTechnique(techs[0]);
    }
  };

  const handleOpenInDojo = (tech: Technique) => {
    setSelectedTechnique(tech);
    setViewMode("dojo");
    if (onSelectTechnique) {
      onSelectTechnique(tech);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      {/* 1. IMPRESSIVE MARTIAL HERO BANNER & 8 FORMS MATRIX SELECTOR (ZERO SCROLL) */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#E2B743]/30 relative overflow-hidden shadow-2xl">
        {/* Background Subtle Watermark */}
        <div className="absolute -top-8 -right-8 select-none pointer-events-none opacity-5 text-[180px] font-serif font-black text-[#E2B743] leading-none">
          拳
        </div>

        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2B743]/15 text-[#E2B743] border border-[#E2B743]/30 text-xs font-bold uppercase tracking-widest">
            <Swords className="w-3.5 h-3.5" /> Bách Khoa 7 Bài Quyền Chính Tông (1954 - 2012)
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-serif gold-gradient leading-tight">
            Hệ Thống 7 Bài Quyền Phật Gia Vịnh Xuân
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed">
            Hệ thống quyền pháp hoàn chỉnh được phục chế toàn văn và đối soát 100% hình ảnh từ công trình của <strong>GS.TS Y Khoa Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2012)</strong>. Thể hiện đầy đủ từng bước động tác liên hoàn, yếu lĩnh thân pháp, nhịp thở đan điền và phân thế thực chiến.
          </p>
        </div>

        {/* 8 FORMS MATRIX SELECTOR (2x4 Grid View: 100% Visible, No Horizontal Scroll) */}
        <div className="relative z-10 mt-6 pt-5 border-t border-[#3D291F]">
          <div className="flex items-center justify-between mb-3 text-xs text-amber-200/80">
            <span className="font-bold uppercase tracking-wider text-[11px] text-[#E2B743] flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" /> Bảng Danh Mục 8 Bài Quyền (Nhấp Để Chuyển Bài):
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              Đang chọn: <strong className="text-[#E2B743]">{currentForm.name}</strong>
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
            {fullFormsCatalog.map((form, idx) => {
              const isSelected = form.id === currentFormId;
              return (
                <button
                  key={form.id}
                  onClick={() => handleSelectForm(form.id)}
                  className={`p-3 sm:p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between group cursor-pointer relative overflow-hidden ${
                    isSelected
                      ? "bg-[#E2B743] text-black border-[#E2B743] shadow-xl shadow-[#E2B743]/25 font-bold ring-2 ring-[#E2B743]/60 scale-[1.02]"
                      : "bg-[#180E09] text-slate-300 border-[#3D291F] hover:border-[#E2B743]/60 hover:bg-[#20150F]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider mb-1">
                      <span className={isSelected ? "text-amber-950 font-extrabold" : "text-[#E2B743]"}>
                        {idx === 0 ? "Khởi Thức" : `Bài Quyền 0${idx}`}
                      </span>
                      <span
                        className={`px-1.5 py-0.5 rounded text-[9px] ${
                          isSelected ? "bg-black/20 text-black font-bold" : "bg-black/40 text-slate-400"
                        }`}
                      >
                        {form.scanPages}
                      </span>
                    </div>
                    <h4 className={`text-xs sm:text-sm font-bold line-clamp-1 ${isSelected ? "text-black" : "text-white"}`}>
                      {form.name}
                    </h4>
                  </div>
                  <div className={`mt-2 pt-2 border-t flex items-center justify-between text-[11px] ${isSelected ? "border-black/15" : "border-[#3D291F]"}`}>
                    <span className={`line-clamp-1 ${isSelected ? "text-amber-950 font-semibold" : "text-slate-400"}`}>
                      {form.demonstrators.split("(")[0]?.trim()}
                    </span>
                    <span className="font-mono font-bold text-[10px] shrink-0 ml-1">
                      {form.id === "bai-to" ? "9 Bước" : `${form.techniqueCount} Thế`}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Detailed Form Summary & View Mode Switcher */}
      <div className="glass-panel p-6 rounded-2xl border border-[#3D291F] space-y-4 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#3D291F] pb-4">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#E2B743]/20 text-[#E2B743] font-mono font-bold border border-[#E2B743]/40">
                {currentForm.codeName}
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-amber-200 font-semibold">
                Thị phạm: <strong>{currentForm.demonstrators}</strong>
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs text-[#10B981] font-mono">
                Sách Gốc: {currentForm.scanPages}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
              {currentForm.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              {currentForm.description}
            </p>
          </div>

          {/* View Mode Toggle: [Gallery Grid] vs [Interactive Dojo] */}
          <div className="flex items-center gap-2 self-start lg:self-center shrink-0">
            <span className="text-xs text-slate-400 font-mono hidden sm:inline">Chế độ:</span>
            <div className="flex rounded-xl bg-[#140C08] p-1 border border-[#3D291F]">
              <button
                onClick={() => setViewMode("gallery")}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                  viewMode === "gallery"
                    ? "bg-[#E2B743] text-black font-bold shadow"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Grid className="w-4 h-4" />
                <span>Bảng Tổng Thể ({allMotionSteps.length} Động Tác)</span>
              </button>
              <button
                onClick={() => setViewMode("dojo")}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 ${
                  viewMode === "dojo"
                    ? "bg-[#E2B743] text-black font-bold shadow"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <Tv className="w-4 h-4" />
                <span>Sàn Tập Phân Thế (Dojo Player)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-[#180E09] border border-[#3D291F]">
            <span className="text-[10px] text-slate-400 block font-mono">TỔNG SỐ ĐỘNG TÁC</span>
            <span className="text-sm sm:text-base font-bold text-[#E2B743] font-mono">
              {allMotionSteps.length} Động Tác Minh Họa
            </span>
          </div>
          <div className="p-3 rounded-xl bg-[#180E09] border border-[#3D291F]">
            <span className="text-[10px] text-slate-400 block font-mono">HÌNH THỨC LUYỆN TẬP</span>
            <span className="text-sm sm:text-base font-bold text-white">
              {currentForm.type === "two_person" ? "Đối Kháng 2 Người (A & B)" : "Đơn Luyện Tại Chỗ / Tiến Lùi"}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-[#180E09] border border-[#3D291F]">
            <span className="text-[10px] text-slate-400 block font-mono">THẾ TẤN CHỦ ĐẠO</span>
            <span className="text-sm sm:text-base font-bold text-[#10B981]">
              Nhị Tự Kiềm Dương Tấn (Chân Hẹp)
            </span>
          </div>
          <div className="p-3 rounded-xl bg-[#180E09] border border-[#3D291F]">
            <span className="text-[10px] text-slate-400 block font-mono">NGUỒN TƯ LIỆU SÁCH</span>
            <span className="text-sm sm:text-base font-bold text-amber-300 font-mono">
              NXB TDTT 2012 (225 Trang)
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CHẾ ĐỘ 1: BẢNG TỔNG THỂ TOÀN BỘ ĐỘNG TÁC (VISUAL MOTION GALLERY GRID)     */}
      {/* ========================================================================= */}
      {viewMode === "gallery" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-300 px-1">
            <span>
              Hiển thị đầy đủ <strong>{allMotionSteps.length} động tác liên hoàn</strong> của {currentForm.name}. Bấm vào ảnh để phóng to chi tiết hoặc mở trên Sàn Tập.
            </span>
            <span className="text-[#E2B743] font-mono">100% Ảnh Phục Chế Chuẩn Võ Học</span>
          </div>

          {/* Full Grid of All Motion Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {allMotionSteps.map((step, idx) => {
              const isFlipped = Boolean(step.isSymmetricLeft || step.technique.isSymmetricLeft);
              return (
                <div
                  key={step.id}
                  className="glass-panel rounded-2xl p-4 border border-[#3D291F] hover:border-[#E2B743]/60 transition-all flex flex-col justify-between group shadow-lg hover:shadow-2xl hover:shadow-[#E2B743]/10"
                >
                  <div>
                    {/* Header bar of step card */}
                    <div className="flex items-center justify-between text-xs mb-2">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] font-mono font-bold text-[#E2B743] bg-[#E2B743]/15 px-2 py-0.5 rounded border border-[#E2B743]/30">
                          {step.technique.code || `CHIÊU ${idx + 1}`}
                        </span>
                        {isFlipped && (
                          <span className="text-[9px] font-sans font-semibold text-amber-300 bg-amber-500/20 px-1.5 py-0.5 rounded border border-amber-500/40">
                            Đối xứng trái
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => setZoomedStep(step)}
                        title="Phóng to ảnh"
                        className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/10 transition"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Image Container with Safe Margin & Pure White Background */}
                    <div
                      onClick={() => setZoomedStep(step)}
                      className="relative w-full aspect-[3/4] bg-white rounded-xl overflow-hidden p-2 border-2 border-slate-300 shadow-inner cursor-zoom-in group/img flex items-center justify-center mb-3"
                    >
                      {step.imgUrl ? (
                        <Image
                          src={step.imgUrl}
                          alt={step.desc}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className={`object-contain p-1 transition-transform group-hover/img:scale-105 ${
                            isFlipped ? "-scale-x-100" : ""
                          }`}
                          style={{ transform: isFlipped ? "scaleX(-1)" : undefined }}
                          loading="lazy"
                        />
                      ) : (
                        <span className="text-xs text-slate-400">Không có ảnh</span>
                      )}

                      {/* Numbering at bottom of foot */}
                      <div className="absolute bottom-2 inset-x-2 flex justify-center pointer-events-none">
                        <span className="px-2.5 py-0.5 rounded-full bg-black/80 text-[#E2B743] text-[10px] font-mono font-bold border border-[#E2B743]/40 shadow flex items-center gap-1">
                          Động tác {step.stepNo}
                          {isFlipped && <span className="text-[9px] text-amber-300 font-sans">• Trái</span>}
                        </span>
                      </div>
                    </div>

                    {/* Step Title & Description */}
                    <h5 className="font-bold text-xs sm:text-sm text-white line-clamp-1 mb-1 group-hover:text-[#E2B743] transition">
                      {step.technique.name.split(":")[1]?.trim() || step.technique.name}
                    </h5>
                    <p className="text-[11px] text-slate-300 line-clamp-3 leading-relaxed mb-3">
                      {step.desc}
                    </p>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-2 border-t border-[#3D291F] flex items-center justify-between gap-2">
                    <button
                      onClick={() => setZoomedStep(step)}
                      className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 font-mono transition"
                    >
                      <Eye className="w-3 h-3" /> Chi tiết
                    </button>

                    <button
                      onClick={() => handleOpenInDojo(step.technique)}
                      className="px-2.5 py-1 rounded-lg bg-[#E2B743]/20 hover:bg-[#E2B743] text-[#E2B743] hover:text-black font-semibold text-[11px] transition flex items-center gap-1 border border-[#E2B743]/40"
                    >
                      <span>Vào Sàn Tập</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* CHẾ ĐỘ 2: SÀN TẬP PHÂN THẾ CHI TIẾT (INTERACTIVE DOJO PLAYER)             */}
      {/* ========================================================================= */}
      {viewMode === "dojo" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>
              Đang luyện tập trên Sàn Tập Võ Đường Số cho: <strong>{currentForm.name}</strong>
            </span>
            <button
              onClick={() => setViewMode("gallery")}
              className="text-[#E2B743] hover:underline flex items-center gap-1 font-semibold"
            >
              <Grid className="w-3.5 h-3.5" /> Trở lại Bảng Tổng Thể Động Tác
            </button>
          </div>

          <DojoPlayer
            technique={selectedTechnique}
            onSelectTechnique={setSelectedTechnique}
            allTechniques={activeTechniques}
            selectedFormId={currentFormId}
            onSelectForm={handleSelectForm}
          />
        </div>
      )}

      {/* Modal Phóng To Động Tác Chi Tiết (Lightbox Modal) */}
      {zoomedStep && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setZoomedStep(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] bg-[#140C08] rounded-3xl p-5 sm:p-8 shadow-2xl flex flex-col border-2 border-[#E2B743] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoomedStep(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-xl border-2 border-white transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col md:flex-row gap-6 items-center">
              {/* Image Frame */}
              {(() => {
                const isZoomedFlipped = Boolean(zoomedStep.isSymmetricLeft || zoomedStep.technique.isSymmetricLeft);
                return (
                  <div className="relative w-full md:w-1/2 aspect-[3/4] bg-white rounded-2xl overflow-hidden p-3 border-2 border-slate-300 shadow-inner flex items-center justify-center shrink-0">
                    <Image
                      src={zoomedStep.imgUrl}
                      alt={zoomedStep.desc}
                      fill
                      className={`object-contain p-2 ${isZoomedFlipped ? "-scale-x-100" : ""}`}
                      style={{ transform: isZoomedFlipped ? "scaleX(-1)" : undefined }}
                      priority
                    />
                    <div className="absolute bottom-3 inset-x-3 flex justify-center">
                      <span className="px-3 py-1 rounded-full bg-black/85 text-[#E2B743] text-xs font-mono font-bold border border-[#E2B743]/50 shadow flex items-center gap-1.5">
                        Động tác {zoomedStep.stepNo}
                        {isZoomedFlipped && (
                          <span className="text-amber-300 font-sans text-[11px] font-normal">
                            (Đối Xứng Trái - Lật Gương Võ Học)
                          </span>
                        )}
                      </span>
                    </div>
                  </div>
                );
              })()}

              {/* Text Info */}
              <div className="w-full md:w-1/2 space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs px-2.5 py-0.5 rounded bg-[#E2B743]/20 text-[#E2B743] font-mono font-bold">
                      {zoomedStep.technique.code}
                    </span>
                    {(zoomedStep.isSymmetricLeft || zoomedStep.technique.isSymmetricLeft) && (
                      <span className="text-xs px-2 py-0.5 rounded bg-amber-500/25 text-amber-300 font-bold border border-amber-500/40">
                        Đối Xứng Trái (Lật Gương)
                      </span>
                    )}
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-[#10B981] font-mono">
                      {currentForm.name}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-serif text-white">
                    {zoomedStep.technique.name}
                  </h3>
                </div>

                <div className="p-4 rounded-xl bg-[#20150F] border border-[#3D291F] space-y-2">
                  <strong className="text-[#E2B743] text-xs uppercase tracking-wider block">
                    Lời Chỉ Dẫn Động Tác (Sách In 2012):
                  </strong>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {zoomedStep.desc}
                  </p>
                </div>

                {zoomedStep.keypoints && zoomedStep.keypoints.length > 0 && (
                  <div className="space-y-2">
                    <strong className="text-[#10B981] text-xs uppercase tracking-wider block">
                      Yếu Lĩnh Thân Pháp & Khẩu Quyết:
                    </strong>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {zoomedStep.keypoints.map((kp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{kp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    onClick={() => {
                      setZoomedStep(null);
                      handleOpenInDojo(zoomedStep.technique);
                    }}
                    className="px-4 py-2.5 rounded-xl bg-[#E2B743] hover:bg-amber-400 text-black font-bold text-xs transition flex items-center gap-2 shadow-lg shadow-[#E2B743]/20"
                  >
                    <span>Luyện Tập Chiêu Này Trên Sàn Tập</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
