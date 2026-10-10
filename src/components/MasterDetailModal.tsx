"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Award,
  MapPin,
  Calendar,
  Quote,
  Sparkles,
  BookOpen,
  CheckCircle2,
  BookmarkCheck,
  History
} from "lucide-react";
import { MasterProfile, MASTER_PROFILES, MASTER_IDS } from "@/data/masterProfiles";

interface MasterDetailModalProps {
  master: MasterProfile | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectMaster: (masterId: string) => void;
}

export const MasterDetailModal: React.FC<MasterDetailModalProps> = ({
  master,
  isOpen,
  onClose,
  onSelectMaster,
}) => {
  // Đóng modal bằng phím Escape, phím mũi tên trái/phải để chuyển vị thầy
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen || !master) return;
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        const currentIdx = MASTER_IDS.indexOf(master.id);
        if (currentIdx > 0) {
          onSelectMaster(MASTER_IDS[currentIdx - 1]);
        }
      } else if (e.key === "ArrowRight") {
        const currentIdx = MASTER_IDS.indexOf(master.id);
        if (currentIdx < MASTER_IDS.length - 1) {
          onSelectMaster(MASTER_IDS[currentIdx + 1]);
        }
      }
    },
    [isOpen, master, onClose, onSelectMaster]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !master) return null;

  const currentIdx = MASTER_IDS.indexOf(master.id);
  const prevMasterId = currentIdx > 0 ? MASTER_IDS[currentIdx - 1] : null;
  const nextMasterId = currentIdx < MASTER_IDS.length - 1 ? MASTER_IDS[currentIdx + 1] : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-8 bg-black/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="master-detail-title"
    >
      {/* Background Click to Close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Modal Box */}
      <div className="relative z-10 w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl bg-[#140C08] border-2 border-[#F5D06C]/60 shadow-2xl overflow-hidden text-slate-200">
        {/* TOP BAR / HEADER */}
        <div className="flex items-center justify-between px-5 sm:px-7 py-3.5 sm:py-4 border-b border-[#3D291F] bg-[#1E110A]/95 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#2A0E0A] border border-[#F5D06C]/50 flex items-center justify-center text-[#F5D06C] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#F5D06C] bg-[#F5D06C]/15 px-2 py-0.5 rounded-full border border-[#F5D06C]/30">
                  {master.generationLabel}
                </span>
                {master.hanzi && (
                  <span className="text-xs font-serif text-amber-200/60 font-mono hidden sm:inline">
                    {master.hanzi}
                  </span>
                )}
              </div>
              <h2
                id="master-detail-title"
                className="text-lg sm:text-2xl font-serif font-bold text-white leading-tight gold-gradient"
              >
                {master.name}
              </h2>
            </div>
          </div>

          {/* Quick Navigator & Close Button */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1.5 mr-2">
              <button
                onClick={() => prevMasterId && onSelectMaster(prevMasterId)}
                disabled={!prevMasterId}
                className="p-2 rounded-xl border border-[#3D291F] text-amber-200 hover:text-white hover:border-[#F5D06C]/50 disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
                title="Vị thầy trước (Mũi tên trái)"
                aria-label="Vị thầy trước"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-amber-200/70 px-1">
                {currentIdx + 1} / {MASTER_IDS.length}
              </span>
              <button
                onClick={() => nextMasterId && onSelectMaster(nextMasterId)}
                disabled={!nextMasterId}
                className="p-2 rounded-xl border border-[#3D291F] text-amber-200 hover:text-white hover:border-[#F5D06C]/50 disabled:opacity-30 disabled:pointer-events-none transition cursor-pointer"
                title="Vị thầy kế tiếp (Mũi tên phải)"
                aria-label="Vị thầy kế tiếp"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 sm:p-3 rounded-2xl bg-[#20150F] hover:bg-rose-950/40 text-slate-300 hover:text-rose-300 border border-[#3D291F] hover:border-rose-500/50 transition cursor-pointer"
              title="Đóng cửa sổ (Escape)"
              aria-label="Đóng cửa sổ"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* BODY SCROLL CONTENT */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-8 space-y-8 custom-scrollbar">
          {/* TOP PROFILE HERO CARD */}
          <div className="flex flex-col md:flex-row gap-6 lg:gap-8 items-center md:items-start p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#20130B] via-[#1A0E08] to-[#120804] border border-[#F5D06C]/35 shadow-xl">
            {/* Master Portrait */}
            <div className="shrink-0 flex flex-col items-center space-y-2.5">
              <div className="relative w-44 h-58 sm:w-52 sm:h-68 md:w-56 md:h-74 rounded-3xl overflow-hidden border-2 border-[#F5D06C] shadow-2xl bg-[#0F0805]">
                <Image
                  src={master.portrait}
                  alt={master.name}
                  fill
                  sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 224px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <span className="text-[11px] font-mono text-[#F5D06C] bg-black/70 px-3 py-1 rounded-full border border-[#F5D06C]/30 text-center font-bold">
                {master.period}
              </span>
            </div>

            {/* Quick Metadata & Core Quote */}
            <div className="space-y-4 flex-1 text-center md:text-left">
              <div className="space-y-1.5">
                <span className="text-xs font-mono text-[#F5D06C] uppercase tracking-wider font-semibold">
                  {master.roleTitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white gold-gradient">
                  {master.name}
                  {master.courtesyName && (
                    <span className="text-base sm:text-lg font-serif font-normal text-amber-200/80 block sm:inline sm:ml-2">
                      ({master.courtesyName})
                    </span>
                  )}
                </h3>
              </div>

              {/* Hometown & Locations */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 text-xs text-slate-300">
                <span className="inline-flex items-center gap-1 text-amber-200 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#F5D06C]" /> {master.hometown}
                </span>
                {master.generation !== 4 && (
                  <>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-emerald-400" /> Sinh năm {master.birthYear}
                    </span>
                  </>
                )}
              </div>

              {/* Core Quote Box */}
              {master.coreQuote && master.coreQuote.trim().length > 0 && (
                <div className="p-4 sm:p-5 rounded-2xl bg-[#140C08]/90 border border-[#F5D06C]/40 space-y-2">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-[#F5D06C] shrink-0 mt-1 rotate-180" />
                    <blockquote className="text-base sm:text-lg font-serif font-bold text-white italic leading-relaxed">
                      &ldquo;{master.coreQuote}&rdquo;
                    </blockquote>
                  </div>
                  {master.quoteContext && (
                    <p className="text-[11px] text-amber-200/70 font-mono pl-8 italic">
                      — {master.quoteContext}
                    </p>
                  )}
                </div>
              )}

              {/* Historical Locations Pills */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block">
                  Địa danh lịch sử gắn liền:
                </span>
                <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                  {master.historicalLocations.map((loc, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-lg bg-[#2A160E] border border-[#3D291F] text-[11px] font-mono text-amber-200/80"
                    >
                      {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SUMMARY OVERVIEW */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#180E09] border border-[#3D291F] text-xs sm:text-sm text-slate-200 leading-relaxed font-serif italic border-l-4 border-l-[#F5D06C]">
            {master.summary}
          </div>

          {/* DETAILED SECTIONS */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-[#3D291F] pb-2">
              <BookOpen className="w-4 h-4 text-[#F5D06C]" />
              <h4 className="text-sm uppercase tracking-widest font-bold text-white">
                Khảo Luận Tiểu Sử &amp; Sự Nghiệp Võ Học
              </h4>
            </div>

            <div className="space-y-5">
              {master.sections.map((sec, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-[#140C08] border border-[#3D291F] space-y-3 hover:border-[#F5D06C]/40 transition-colors"
                >
                  <div>
                    <h5 className="text-base sm:text-lg font-serif font-bold text-white text-[#F5D06C]">
                      {sec.title}
                    </h5>
                    {sec.subtitle && (
                      <span className="text-xs text-amber-200/70 italic font-serif">
                        {sec.subtitle}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {sec.content.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {sec.keyHighlight && (
                    <div className="p-3 rounded-xl bg-[#24130A] border border-[#F5D06C]/30 text-xs text-amber-100 flex items-start gap-2.5 font-medium">
                      <Sparkles className="w-4 h-4 text-[#F5D06C] shrink-0 mt-0.5" />
                      <span>{sec.keyHighlight}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* KEY CONTRIBUTIONS */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#160D08] border border-[#3D291F] space-y-4">
            <div className="flex items-center gap-2">
              <BookmarkCheck className="w-4 h-4 text-[#10B981]" />
              <h4 className="text-sm uppercase tracking-wider font-bold text-white">
                Đóng Góp Di Sản Cho Phật Gia Vịnh Xuân
              </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {master.keyContributions.map((c, i) => (
                <div
                  key={i}
                  className="p-3 rounded-xl bg-[#1F120B] border border-[#3D291F] flex items-start gap-2 text-xs text-slate-200"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                  <span>{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAMOUS ANECDOTES (IF ANY) */}
          {master.famousAnecdotes && master.famousAnecdotes.length > 0 && (
            <div className="p-5 sm:p-6 rounded-2xl bg-[#1F120B] border border-[#F5D06C]/30 space-y-3">
              <div className="flex items-center gap-2">
                <History className="w-4 h-4 text-[#F5D06C]" />
                <h4 className="text-sm uppercase tracking-wider font-bold text-[#F5D06C]">
                  Giai Thoại Võ Lâm Chân Thực
                </h4>
              </div>

              {master.famousAnecdotes.map((a, i) => (
                <div key={i} className="space-y-1.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                  <h6 className="font-serif font-bold text-white text-amber-200">
                    {a.title}
                  </h6>
                  <p className="italic text-slate-300 font-serif">
                    &ldquo;{a.story}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* MASTER SWITCHER PILLS (AT BOTTOM) */}
          <div className="pt-4 border-t border-[#3D291F] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 font-mono">
              Bốn Thế Hệ Tiếp Nối Ngọn Lửa Di Sản:
            </span>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {MASTER_PROFILES.map((m) => {
                const isSelected = m.id === master.id;
                return (
                  <button
                    key={m.id}
                    onClick={() => onSelectMaster(m.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-serif font-bold transition-all flex items-center gap-1.5 cursor-pointer border ${
                      isSelected
                        ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C] shadow-md shadow-[#F5D06C]/20 scale-105"
                        : "bg-[#20150F] text-amber-200/80 border-[#3D291F] hover:border-[#F5D06C]/50 hover:text-white"
                    }`}
                  >
                    <span>{m.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* BOTTOM ACTION BAR */}
        <div className="px-6 py-3.5 border-t border-[#3D291F] bg-[#1A0E08] flex items-center justify-between shrink-0">
          <span className="text-[11px] text-slate-400 font-mono hidden sm:inline">
            Nhấn <kbd className="px-1.5 py-0.5 rounded bg-black border border-white/20 text-white font-bold">Esc</kbd> để đóng • Dùng <kbd className="px-1.5 py-0.5 rounded bg-black border border-white/20 text-white font-bold">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-black border border-white/20 text-white font-bold">→</kbd> để chuyển vị thầy
          </span>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2 rounded-xl bg-gradient-to-r from-[#F5D06C] to-[#C27D38] text-[#2A0E0A] font-bold text-xs hover:brightness-110 transition shadow cursor-pointer ml-auto"
          >
            Đóng Cửa Sổ
          </button>
        </div>
      </div>
    </div>
  );
};
