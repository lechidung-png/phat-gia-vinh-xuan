"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Play,
  Pause,
  FlipHorizontal,
  Sparkles,
  CheckCircle2,
  Share2,
  Bookmark,
  Layers,
  Zap,
  X,
  Grid,
  Volume2,
  VolumeX,
} from "lucide-react";
import { CanonicalLesson, MotionStep } from "@/data/canonicalCatalog";
import { getFormKinematics } from "@/data/martialKinematics";
import { cleanMotionTitle, extractMotionChieu } from "@/lib/formatters";
import { zenAudio } from "@/lib/zenAudio";

interface DojoPlayer3Props {
  lesson: CanonicalLesson;
  activeMotionIndex: number;
  onSelectMotionIndex: (idx: number) => void;
  onOpenLightbox: (motion: MotionStep) => void;
}

export const DojoPlayer3: React.FC<DojoPlayer3Props> = ({
  lesson,
  activeMotionIndex,
  onSelectMotionIndex,
  onOpenLightbox,
}) => {
  const [isMirrorFlipped, setIsMirrorFlipped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMatrixOpen, setIsMatrixOpen] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(2200); // 2.2s per step
  const [copiedShare, setCopiedShare] = useState(false);
  const [isZenAudioOn, setIsZenAudioOn] = useState<boolean>(() => zenAudio.isEnabled());
  const [isBookmarked, setIsBookmarked] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    try {
      const saved = localStorage.getItem("pgvx_bookmarks_3");
      return saved ? JSON.parse(saved).includes(lesson.id) : false;
    } catch {
      return false;
    }
  });

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const motions = lesson.motions || [];
  const totalMotions = motions.length;
  const currentMotion: MotionStep | undefined = motions[activeMotionIndex] || motions[0];

  // Auto-advance
  const advanceMotion = useCallback(() => {
    if (totalMotions <= 1) return;
    onSelectMotionIndex((activeMotionIndex + 1) % totalMotions);
  }, [totalMotions, activeMotionIndex, onSelectMotionIndex]);

  useEffect(() => {
    if (isPlaying && totalMotions > 1) {
      timerRef.current = setInterval(advanceMotion, playbackSpeed);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPlaying, playbackSpeed, totalMotions, advanceMotion]);

  // Phím tắt bàn phím
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (["input", "textarea"].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) return;
      if (e.code === "Space") {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      } else if (e.code === "ArrowRight") {
        e.preventDefault();
        if (totalMotions > 0) onSelectMotionIndex((activeMotionIndex + 1) % totalMotions);
      } else if (e.code === "ArrowLeft") {
        e.preventDefault();
        if (totalMotions > 0) onSelectMotionIndex((activeMotionIndex - 1 + totalMotions) % totalMotions);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeMotionIndex, totalMotions, onSelectMotionIndex]);

  // Phát tiếng mõ nhẹ khi chuyển thế võ (nếu bật âm thanh thiền)
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (isZenAudioOn) {
      zenAudio.playWoodBlock();
    }
  }, [activeMotionIndex, isZenAudioOn]);

  // Phát chuông xoay khi bắt đầu chuỗi tự động phát
  useEffect(() => {
    if (isPlaying && isZenAudioOn) {
      zenAudio.playSingingBowl();
    }
  }, [isPlaying, isZenAudioOn]);

  const handleToggleZenAudio = () => {
    const next = zenAudio.toggle();
    setIsZenAudioOn(next);
  };

  // Đồng bộ trạng thái bookmark khi đổi bài học
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const saved = localStorage.getItem("pgvx_bookmarks_3");
      const list: string[] = saved ? JSON.parse(saved) : [];
      setIsBookmarked(list.includes(lesson.id));
    } catch {
      setIsBookmarked(false);
    }
  }, [lesson.id]);

  const toggleBookmark = () => {
    try {
      const saved = localStorage.getItem("pgvx_bookmarks_3");
      let list: string[] = saved ? JSON.parse(saved) : [];
      if (isBookmarked) {
        list = list.filter((id) => id !== lesson.id);
        setIsBookmarked(false);
      } else {
        if (!list.includes(lesson.id)) {
          list.push(lesson.id);
        }
        setIsBookmarked(true);
      }
      localStorage.setItem("pgvx_bookmarks_3", JSON.stringify(list));
    } catch {
      // Ignore
    }
  };

  const handleShare = async () => {
    try {
      if (typeof window === "undefined") return;
      const url = `${window.location.origin}?lesson=${lesson.id}&motion=${activeMotionIndex}`;
      await navigator.clipboard.writeText(url);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2200);
    } catch (err) {
      console.warn("Không thể sao chép link:", err);
    }
  };

  if (!currentMotion || motions.length === 0) {
    return (
      <div className="glass-panel p-8 rounded-3xl border border-[#F5D06C]/30 text-center space-y-3">
        <p className="text-amber-200/90 text-sm">Bài học này là bài đọc lý thuyết / tư liệu lịch sử tổng hợp.</p>
        <div className="text-xs text-[#F5D06C] font-mono font-semibold">Chuyên đề: {lesson.title}</div>
      </div>
    );
  }

  const currentImgUrl = currentMotion.img2xUrl || currentMotion.imgUrl;

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#F5D06C]/35 shadow-2xl space-y-6">
      
      {/* PLAYER 2-COLUMN GRID (5 Cột Khung Ảnh Chuẩn 280px + 7 Cột Chỉ Dẫn Võ Học Rộng Rãi) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* CỘT TRÁI: KHUNG ẢNH GỌN GÀNG 280PX NÉT ĐANH (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col items-center space-y-4">
          
          {/* KHUNG TRANH GIẤY LỤA NGÀ #FBF9F5 VIỀN KIM SA CHUẨN 280PX */}
          <div
            className="martial-photo-frame w-[270px] sm:w-[290px] h-[390px] sm:h-[425px] rounded-3xl overflow-hidden p-3 relative flex items-center justify-center group shadow-2xl touch-action-manipulation select-none"
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
              touchStartY.current = e.touches[0].clientY;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null || touchStartY.current === null) return;
              const deltaX = touchStartX.current - e.changedTouches[0].clientX;
              const deltaY = touchStartY.current - e.changedTouches[0].clientY;
              if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
                if (deltaX > 0) {
                  onSelectMotionIndex((activeMotionIndex + 1) % totalMotions);
                } else {
                  if (activeMotionIndex > 0) onSelectMotionIndex(activeMotionIndex - 1);
                  else onSelectMotionIndex(totalMotions - 1);
                }
                if (typeof navigator !== "undefined" && navigator.vibrate) {
                  navigator.vibrate(15);
                }
              }
              touchStartX.current = null;
              touchStartY.current = null;
            }}
          >
            
            <div className={`relative w-full h-full transition-transform duration-300 ${isMirrorFlipped ? "scale-x-[-1]" : ""}`}>
              <Image
                src={currentImgUrl}
                alt={cleanMotionTitle(currentMotion.desc) || `Động tác ${currentMotion.stepNo}`}
                fill
                className="object-contain filter drop-shadow-sm martial-filter pointer-events-none"
                sizes="290px"
                priority
              />
            </div>

            {/* Top Badges */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5">
              <span className="px-2.5 py-1 rounded-lg bg-black/85 text-white text-[10px] font-mono flex items-center gap-1.5 shadow-md border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Thế {currentMotion.stepNo} / {totalMotions}</span>
              </span>
              {isMirrorFlipped && (
                <span className="px-2 py-0.5 rounded-lg bg-[#F5D06C] text-[#2A0E0A] text-[10px] font-bold shadow flex items-center gap-1">
                  <FlipHorizontal className="w-3 h-3" /> Trái
                </span>
              )}
            </div>

            {/* Bottom In-Image Action Pills (Touch Friendly >= 40px) */}
            <div className="absolute bottom-3 right-3 flex items-center gap-2">
              <button
                onClick={() => setIsMirrorFlipped(!isMirrorFlipped)}
                className={`min-h-[40px] px-3 py-1.5 rounded-xl text-xs font-semibold shadow transition flex items-center gap-1.5 border cursor-pointer ${
                  isMirrorFlipped
                    ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C]"
                    : "bg-[#2A0E0A]/95 text-white hover:bg-[#F5D06C] hover:text-[#2A0E0A] border-[#F5D06C]/40"
                }`}
                title="Lật gương võ học"
                aria-label="Lật gương võ học"
              >
                <FlipHorizontal className="w-3.5 h-3.5" />
                <span>{isMirrorFlipped ? "Đang Lật Trái" : "Lật Gương"}</span>
              </button>

              <button
                onClick={() => onOpenLightbox(currentMotion)}
                className="min-w-[40px] min-h-[40px] p-2 rounded-xl bg-[#2A0E0A]/95 text-white hover:bg-[#F5D06C] hover:text-[#2A0E0A] transition shadow-md border border-[#F5D06C]/50 flex items-center justify-center cursor-pointer"
                title="Phóng to ảnh (Toàn màn hình)"
                aria-label="Phóng to ảnh động tác"
              >
                <Maximize2 className="w-4 h-4 text-[#F5D06C]" />
              </button>
            </div>
          </div>



          {/* DẢI THUMBNAIL CÁC ĐỘNG TÁC LIÊN HOÀN (CAROUSEL) */}
          <div className="space-y-2 w-full max-w-[290px]">
            <div className="flex items-center justify-between text-xs text-amber-200/80">
              <span className="font-semibold flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-[#F5D06C]" />
                Chuỗi {totalMotions} Động Tác:
              </span>
              <button
                onClick={() => setIsMatrixOpen(true)}
                className="text-[11px] font-mono text-[#F5D06C] hover:text-white bg-[#2A0E0A] hover:bg-[#F5D06C]/20 px-2 py-0.5 rounded-lg border border-[#F5D06C]/30 flex items-center gap-1 transition cursor-pointer"
                title="Mở toàn bộ ma trận động tác"
                aria-label="Xem toàn bộ ma trận động tác"
              >
                <Grid className="w-3 h-3" />
                <span className="hidden sm:inline">Xem Tất Cả ({totalMotions})</span>
                <span className="sm:hidden">Ma Trận ({totalMotions})</span>
              </button>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {motions.map((m, idx) => {
                const isActive = idx === activeMotionIndex;
                return (
                  <button
                    key={m.id}
                    onClick={() => onSelectMotionIndex(idx)}
                    aria-label={`Xem động tác thứ ${m.stepNo}`}
                    className={`relative w-14 h-18 rounded-xl bg-[#FBF9F5] p-1 shrink-0 transition-all flex flex-col items-center justify-between border cursor-pointer ${
                      isActive
                        ? "border-[#F5D06C] ring-2 ring-[#F5D06C]/60 shadow-lg scale-105"
                        : "border-white/20 hover:border-[#F5D06C] opacity-75 hover:opacity-100"
                    }`}
                  >
                    <div className="relative w-full flex-1">
                      <Image
                        src={m.imgUrl}
                        alt={cleanMotionTitle(m.desc) || `Thế ${m.stepNo}`}
                        fill
                        className="object-contain filter martial-filter"
                        sizes="56px"
                      />
                    </div>
                    <span className="text-[9px] font-mono font-bold text-slate-800 mt-0.5">
                      #{m.stepNo}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* CỘT PHẢI: CHỈ DẪN, YẾU LĨNH THÂN PHÁP & PHÂN THẾ THỰC CHIẾN (lg:col-span-7) */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Header Thông Tin Chiêu Thức */}
          <div className="space-y-1.5 border-b border-[#F5D06C]/20 pb-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#F5D06C]/15 text-[#F5D06C] border border-[#F5D06C]/40 text-xs font-mono font-bold">
                {lesson.title}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleBookmark}
                  className={`p-1.5 rounded-lg border transition cursor-pointer ${
                    isBookmarked
                      ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C]"
                      : "bg-[#2A0E0A]/60 border-[#F5D06C]/30 text-amber-200/70 hover:text-white"
                  }`}
                  title="Lưu lại chiêu thức"
                  aria-label="Lưu lại chiêu thức này"
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-[#2A0E0A]" : ""}`} />
                </button>
                <button
                  onClick={handleShare}
                  className="p-1.5 rounded-lg bg-[#2A0E0A]/60 border border-[#F5D06C]/30 text-amber-200/70 hover:text-white transition cursor-pointer"
                  title="Sao chép liên kết"
                  aria-label="Sao chép liên kết chia sẻ"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                {copiedShare && (
                  <span className="text-xs text-emerald-400 font-bold animate-fadeIn">Đã chép!</span>
                )}
              </div>
            </div>

            {(() => {
              const cleanedDesc = cleanMotionTitle(currentMotion.desc);
              const chieuBadge = extractMotionChieu(currentMotion.desc);
              return (
                <>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-white pt-1 leading-snug">
                    Động Tác Thứ {currentMotion.stepNo}
                    {cleanedDesc && !cleanedDesc.includes("trang PDF") ? `: ${cleanedDesc}` : ""}
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap text-xs text-amber-200/80 font-mono">
                    <span>Động tác {currentMotion.stepNo} / {totalMotions}</span>
                    {chieuBadge && (
                      <span className="px-2 py-0.5 rounded-full bg-[#F5D06C]/15 border border-[#F5D06C]/30 text-[#F5D06C] font-semibold text-[11px]">
                        {chieuBadge}
                      </span>
                    )}
                    <span>•</span>
                    <span>{getFormKinematics(lesson.id).kieu}</span>
                  </div>
                </>
              );
            })()}
          </div>


          {/* Khẩu Quyết Võ Đạo Chuyên Biệt */}
          <div className="p-4 rounded-2xl bg-[#F5D06C]/10 border border-[#F5D06C]/30 space-y-1.5 shadow-inner">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5D06C] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F5D06C]" />
              Khẩu Quyết Cốt Tủy • {lesson.title}:
            </span>
            <p className="text-xs sm:text-sm text-amber-100 font-serif italic leading-relaxed">
              &quot;{getFormKinematics(lesson.id).khauQuyet}&quot;
            </p>
          </div>

          {/* Yếu Lĩnh Thân Pháp & Điểm Đặt Lực Chuyên Biệt */}
          <div className="p-4 rounded-2xl bg-black/30 border border-[#F5D06C]/20 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-200 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#F5D06C]" />
              Yếu Lĩnh Thân Pháp &amp; Vận Lực:
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {getFormKinematics(lesson.id).yeuLinh}
            </p>
          </div>

          {/* 3 Điểm Cốt Tử Cần Khắc Ghi Chuyên Biệt */}
          <div className="space-y-2 p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/25">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              3 Điểm Cốt Tử Khi Luyện Tập:
            </span>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
              {getFormKinematics(lesson.id).cotTu.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* BỘ ĐIỀU KHIỂN AUTO-PLAY & TIẾN/LÙI (RESPONSIVE 2 TẦNG CHỐNG TRÀN NGANG) */}
          <div className="pt-4 border-t border-[#F5D06C]/20 space-y-3 w-full">
            {/* Tầng 1: Playback Master Row (Lùi - Tự Động Phát - Tiến) */}
            <div className="flex items-center justify-between sm:justify-start gap-2.5 w-full">
              <button
                onClick={() => {
                  if (activeMotionIndex > 0) onSelectMotionIndex(activeMotionIndex - 1);
                  else onSelectMotionIndex(totalMotions - 1);
                }}
                className="min-w-[44px] min-h-[44px] p-2.5 rounded-xl bg-[#20150F] border border-[#F5D06C]/30 text-amber-200 hover:text-white hover:border-[#F5D06C] transition shadow-sm flex items-center justify-center cursor-pointer shrink-0"
                title="Động tác trước (Mũi tên Trái)"
                aria-label="Động tác trước đó"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Tạm dừng phát chuỗi" : "Tự động phát chuỗi động tác"}
                className={`flex-1 sm:flex-initial min-h-[44px] px-3 sm:px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer ${
                  isPlaying
                    ? "bg-rose-600 hover:bg-rose-700 text-white"
                    : "bg-[#F5D06C] hover:bg-[#FFF3B8] text-[#2A0E0A]"
                }`}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                <span className="hidden sm:inline">{isPlaying ? "Tạm Dừng" : "Tự Động Phát"}</span>
                <span className="sm:hidden">{isPlaying ? "Tạm Dừng" : "Tự Phát"}</span>
              </button>

              <button
                onClick={() => onSelectMotionIndex((activeMotionIndex + 1) % totalMotions)}
                className="min-w-[44px] min-h-[44px] p-2.5 rounded-xl bg-[#20150F] border border-[#F5D06C]/30 text-amber-200 hover:text-white hover:border-[#F5D06C] transition shadow-sm flex items-center justify-center cursor-pointer shrink-0"
                title="Động tác tiếp theo (Mũi tên Phải)"
                aria-label="Động tác tiếp theo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Tầng 2: Cài Đặt (Tốc Độ Phát & Chuông Thiền) + Phím Tắt Desktop */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-1">
              <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 w-full sm:w-auto">
                <select
                  value={playbackSpeed}
                  onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
                  className="min-h-[44px] bg-[#20150F] border border-[#F5D06C]/30 rounded-xl px-2.5 sm:px-3 py-2 text-xs font-semibold text-amber-200 focus:outline-none focus:border-[#F5D06C] cursor-pointer text-center sm:text-left w-full sm:w-auto"
                  aria-label="Tốc độ tự động phát"
                >
                  <option value={1500}>1.5s / thế</option>
                  <option value={2200}>2.2s (Chuẩn)</option>
                  <option value={3500}>3.5s (Chậm)</option>
                </select>

                <button
                  onClick={handleToggleZenAudio}
                  className={`min-h-[44px] px-2.5 sm:px-3 py-2 rounded-xl text-xs font-semibold shadow-sm transition flex items-center justify-center gap-1 sm:gap-1.5 border cursor-pointer w-full sm:w-auto ${
                    isZenAudioOn
                      ? "bg-[#F5D06C]/20 text-[#F5D06C] border-[#F5D06C]"
                      : "bg-[#20150F] text-amber-200/60 hover:text-white border-[#F5D06C]/30"
                  }`}
                  title="Âm thanh chuông xoay thiền & mõ đan điền theo nhịp thế võ"
                  aria-label={isZenAudioOn ? "Tắt âm thanh thiền đan điền" : "Bật âm thanh thiền đan điền"}
                >
                  {isZenAudioOn ? <Volume2 className="w-4 h-4 text-[#F5D06C]" /> : <VolumeX className="w-4 h-4" />}
                  <span className="hidden sm:inline">{isZenAudioOn ? "Chuông Thiền: Bật" : "Chuông Thiền"}</span>
                  <span className="sm:hidden">{isZenAudioOn ? "Chuông: Bật" : "Chuông Thiền"}</span>
                </button>
              </div>

              {/* Phím tắt chỉ hiển thị trên máy tính (sm & up) */}
              <div className="hidden sm:flex items-center gap-2 text-xs text-amber-200/60 font-medium">
                <span>Phím tắt:</span>
                <kbd className="px-2 py-0.5 rounded bg-black/40 text-amber-200 text-[10px] font-mono border border-white/10">Space</kbd>
                <kbd className="px-2 py-0.5 rounded bg-black/40 text-amber-200 text-[10px] font-mono border border-white/10">←</kbd>
                <kbd className="px-2 py-0.5 rounded bg-black/40 text-amber-200 text-[10px] font-mono border border-white/10">→</kbd>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* MODAL MA TRẬN ĐỘNG TÁC (TẤT CẢ TRONG MỘT MÀN HÌNH - KHÔNG CẦN CUỘN NGANG) */}
      {isMatrixOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsMatrixOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[88vh] glass-panel rounded-3xl border border-[#F5D06C]/40 shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 border-b border-[#F5D06C]/20 bg-[#20150F]">
              <div className="flex items-center gap-2.5">
                <Grid className="w-5 h-5 text-[#F5D06C]" />
                <div>
                  <h4 className="font-bold text-base text-white font-serif">
                    Ma Trận {totalMotions} Động Tác • {lesson.title}
                  </h4>
                  <p className="text-xs text-amber-200/70">
                    Bấm trực tiếp vào động tác bất kỳ để nhảy tới ngay tức thì
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsMatrixOpen(false)}
                className="p-2 rounded-xl bg-[#2A0E0A] hover:bg-[#F5D06C] hover:text-[#2A0E0A] text-amber-200 transition border border-[#F5D06C]/30 cursor-pointer"
                aria-label="Đóng ma trận động tác"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 sm:p-6 overflow-y-auto flex-1 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2.5 scrollbar-thin">
              {motions.map((m, idx) => {
                const isActive = idx === activeMotionIndex;
                return (
                  <button
                    key={m.id}
                    onClick={() => {
                      onSelectMotionIndex(idx);
                      setIsMatrixOpen(false);
                    }}
                    aria-label={`Chọn động tác thứ ${m.stepNo}`}
                    className={`relative aspect-[3/4] rounded-xl bg-[#FBF9F5] p-1 transition-all flex flex-col items-center justify-between border cursor-pointer group ${
                      isActive
                        ? "border-[#F5D06C] ring-2 ring-[#F5D06C] shadow-lg scale-105"
                        : "border-slate-300 hover:border-[#F5D06C] opacity-85 hover:opacity-100"
                    }`}
                  >
                    <div className="relative w-full flex-1">
                      <Image
                        src={m.imgUrl}
                        alt={cleanMotionTitle(m.desc) || `Thế ${m.stepNo}`}
                        fill
                        className="object-contain martial-filter"
                        sizes="70px"
                      />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-800 bg-white/90 px-1 rounded w-full text-center truncate">
                      #{m.stepNo}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="p-3 bg-[#20150F] border-t border-[#F5D06C]/20 text-center text-xs text-amber-200/70">
              Nhấp chọn 1 ô để tải ngay phân thế võ học
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
