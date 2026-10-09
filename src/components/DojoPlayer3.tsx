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
} from "lucide-react";
import { CanonicalLesson, MotionStep } from "@/data/canonicalCatalog";

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
  const [useRetina2x, setUseRetina2x] = useState(true); // Mặc định luôn nạp bản Retina 2x nét căng
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(2200); // 2.2s per step
  const [copiedShare, setCopiedShare] = useState(false);
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

  const toggleBookmark = () => {
    try {
      const saved = localStorage.getItem("pgvx_bookmarks_3");
      let list: string[] = saved ? JSON.parse(saved) : [];
      if (isBookmarked) {
        list = list.filter((id) => id !== lesson.id);
        setIsBookmarked(false);
      } else {
        list.push(lesson.id);
        setIsBookmarked(true);
      }
      localStorage.setItem("pgvx_bookmarks_3", JSON.stringify(list));
    } catch {
      // Ignore
    }
  };

  const handleShare = () => {
    try {
      const url = `${window.location.origin}?lesson=${lesson.id}`;
      navigator.clipboard.writeText(url);
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2200);
    } catch {
      setCopiedShare(true);
      setTimeout(() => setCopiedShare(false), 2200);
    }
  };

  if (!currentMotion || motions.length === 0) {
    return (
      <div className="glass-panel p-8 rounded-3xl border border-[#F5D06C]/30 text-center space-y-3">
        <p className="text-amber-200/90 text-sm">Bài học này là bài đọc lý thuyết / tư liệu lịch sử tổng hợp.</p>
        <div className="text-xs text-[#F5D06C] font-mono font-semibold">Phạm vi: {lesson.pageRange}</div>
      </div>
    );
  }

  const currentImgUrl = useRetina2x ? (currentMotion.img2xUrl || currentMotion.imgUrl) : currentMotion.imgUrl;

  return (
    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#F5D06C]/35 shadow-2xl space-y-6">
      
      {/* PLAYER 2-COLUMN GRID (5 Cột Khung Ảnh Chuẩn 280px + 7 Cột Chỉ Dẫn Võ Học Rộng Rãi) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* CỘT TRÁI: KHUNG ẢNH GỌN GÀNG 280PX NÉT ĐANH (lg:col-span-5) */}
        <div className="lg:col-span-5 flex flex-col items-center space-y-4">
          
          {/* KHUNG TRANH GIẤY LỤA NGÀ #FBF9F5 VIỀN KIM SA CHUẨN 280PX */}
          <div className="martial-photo-frame w-[270px] sm:w-[290px] h-[390px] sm:h-[425px] rounded-3xl overflow-hidden p-3 relative flex items-center justify-center group shadow-2xl">
            
            <div className={`relative w-full h-full transition-transform duration-300 ${isMirrorFlipped ? "scale-x-[-1]" : ""}`}>
              <Image
                src={currentImgUrl}
                alt={currentMotion.desc}
                fill
                className="object-contain filter drop-shadow-sm martial-filter"
                sizes="290px"
                priority
              />
            </div>

            {/* Top Badges */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5">
              <span className="px-2.5 py-1 rounded-lg bg-black/85 text-white text-[10px] font-mono flex items-center gap-1.5 shadow-md border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Retina 2× • Trang {currentMotion.pdfPage}</span>
              </span>
              {isMirrorFlipped && (
                <span className="px-2 py-0.5 rounded-lg bg-[#F5D06C] text-[#2A0E0A] text-[10px] font-bold shadow flex items-center gap-1">
                  <FlipHorizontal className="w-3 h-3" /> Trái
                </span>
              )}
            </div>

            {/* Bottom In-Image Action Pills */}
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5">
              <button
                onClick={() => setUseRetina2x(!useRetina2x)}
                className={`px-2 py-1 rounded-lg text-[10px] font-mono font-bold shadow transition border cursor-pointer ${
                  useRetina2x
                    ? "bg-emerald-600 text-white border-emerald-500"
                    : "bg-[#2A0E0A]/90 text-amber-200 border-[#F5D06C]/40"
                }`}
                title="Bật/tắt chế độ ảnh Retina 2x"
              >
                {useRetina2x ? "2× HD" : "1×"}
              </button>

              <button
                onClick={() => setIsMirrorFlipped(!isMirrorFlipped)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold shadow transition flex items-center gap-1 border cursor-pointer ${
                  isMirrorFlipped
                    ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C]"
                    : "bg-[#2A0E0A]/90 text-white hover:bg-[#F5D06C] hover:text-[#2A0E0A] border-[#F5D06C]/40"
                }`}
                title="Lật gương võ học sang bên trái"
              >
                <FlipHorizontal className="w-3.5 h-3.5" />
                <span>{isMirrorFlipped ? "Đang Lật Trái" : "Lật Gương"}</span>
              </button>

              <button
                onClick={() => onOpenLightbox(currentMotion)}
                className="p-1.5 rounded-lg bg-[#2A0E0A]/90 text-white hover:bg-[#F5D06C] hover:text-[#2A0E0A] transition shadow border border-[#F5D06C]/40 cursor-pointer"
                title="Kính lúp phóng to cực đại"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <p className="text-[11px] text-amber-200/70 text-center font-mono max-w-[280px]">
            Khung 280px vừa vặn độ phân giải gốc • Nét đanh 100%
          </p>

          {/* DẢI THUMBNAIL CÁC ĐỘNG TÁC LIÊN HOÀN (CAROUSEL) */}
          <div className="space-y-2 w-full max-w-[290px]">
            <div className="flex items-center justify-between text-xs text-amber-200/80">
              <span className="font-semibold flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-[#F5D06C]" />
                Chuỗi {totalMotions} Động Tác:
              </span>
              <span className="font-mono text-[#F5D06C]">
                #{activeMotionIndex + 1} / {totalMotions}
              </span>
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {motions.map((m, idx) => {
                const isActive = idx === activeMotionIndex;
                return (
                  <button
                    key={m.id}
                    onClick={() => onSelectMotionIndex(idx)}
                    className={`relative w-14 h-18 rounded-xl bg-[#FBF9F5] p-1 shrink-0 transition-all flex flex-col items-center justify-between border cursor-pointer ${
                      isActive
                        ? "border-[#F5D06C] ring-2 ring-[#F5D06C]/60 shadow-lg scale-105"
                        : "border-white/20 hover:border-[#F5D06C] opacity-75 hover:opacity-100"
                    }`}
                  >
                    <div className="relative w-full flex-1">
                      <Image
                        src={m.imgUrl}
                        alt={m.desc}
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
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-[#2A0E0A]" : ""}`} />
                </button>
                <button
                  onClick={handleShare}
                  className="p-1.5 rounded-lg bg-[#2A0E0A]/60 border border-[#F5D06C]/30 text-amber-200/70 hover:text-white transition cursor-pointer"
                  title="Sao chép liên kết"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                {copiedShare && (
                  <span className="text-xs text-emerald-400 font-bold animate-fadeIn">Đã chép!</span>
                )}
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white pt-1">
              Động Tác Thứ {currentMotion.stepNo}: {currentMotion.desc || `Phân thế động tác ${currentMotion.stepNo}`}
            </h3>
            <p className="text-xs text-amber-200/80 font-mono">
              Động tác {currentMotion.stepNo} / {totalMotions} • Mã {currentMotion.displayId}
            </p>
          </div>

          {/* Khẩu Quyết & Ý Cảnh */}
          <div className="p-4 rounded-2xl bg-[#F5D06C]/10 border border-[#F5D06C]/30 space-y-1 shadow-inner">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#F5D06C] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#F5D06C]" />
              Khẩu Quyết & Ý Cảnh Võ Đạo:
            </span>
            <p className="text-xs sm:text-sm text-amber-100 font-serif italic leading-relaxed">
              &quot;Ý thủ đan điền • Trực chỉ trung tuyến • Nhu hòa phát kình • Tùy cơ ứng biến.&quot;
            </p>
          </div>

          {/* Yếu Lĩnh Thân Pháp & Giải Phẫu */}
          <div className="p-4 rounded-2xl bg-black/30 border border-[#F5D06C]/20 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-200 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-[#F5D06C]" />
              Yếu Lĩnh Thân Pháp & Điểm Đặt Lực:
            </span>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Giữ thẳng cột sống, hạ bàn kiềm dương tấn vững chãi. Cùi chỏ ghì sát mạn sườn, đón lực và xuất lực xuyên suốt trên trục Tý Ngọ Tuyến. Hai vai buông lỏng, hơi thở tự nhiên hạ trầm đan điền.
            </p>
          </div>

          {/* 3 Điểm Cốt Tử Cần Khắc Ghi */}
          <div className="space-y-2 p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/25">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              3 Điểm Cốt Tử Khi Luyện Tập:
            </span>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Không gồng cứng cơ bắp; chuyển động mềm mại như nước chảy để tích lũy nội kình.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Khép hai đầu gối hướng tâm bảo vệ hạ bàn, không choãi chân làm hở cửa dưới.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">•</span>
                <span>Mắt nhìn thẳng tầm mắt đối phương, duy trì thần thái trầm tĩnh an định.</span>
              </li>
            </ul>
          </div>

          {/* BỘ ĐIỀU KHIỂN AUTO-PLAY & TIẾN/LÙI */}
          <div className="pt-4 border-t border-[#F5D06C]/20 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (activeMotionIndex > 0) onSelectMotionIndex(activeMotionIndex - 1);
                  else onSelectMotionIndex(totalMotions - 1);
                }}
                className="p-2.5 rounded-xl bg-[#20150F] border border-[#F5D06C]/30 text-amber-200 hover:text-white hover:border-[#F5D06C] transition shadow-sm cursor-pointer"
                title="Động tác trước (Mũi tên Trái)"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`px-4 py-2.5 rounded-xl font-bold text-xs shadow-md transition flex items-center gap-2 cursor-pointer ${
                  isPlaying
                    ? "bg-rose-600 hover:bg-rose-700 text-white"
                    : "bg-[#F5D06C] hover:bg-[#FFF3B8] text-[#2A0E0A]"
                }`}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isPlaying ? "Tạm Dừng" : "Tự Động Phát Chuỗi"}</span>
              </button>

              <button
                onClick={() => onSelectMotionIndex((activeMotionIndex + 1) % totalMotions)}
                className="p-2.5 rounded-xl bg-[#20150F] border border-[#F5D06C]/30 text-amber-200 hover:text-white hover:border-[#F5D06C] transition shadow-sm cursor-pointer"
                title="Động tác tiếp theo (Mũi tên Phải)"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <select
                value={playbackSpeed}
                onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
                className="bg-[#20150F] border border-[#F5D06C]/30 rounded-xl px-2.5 py-2 text-xs font-semibold text-amber-200 focus:outline-none focus:border-[#F5D06C] cursor-pointer"
              >
                <option value={1500}>1.5s / bước</option>
                <option value={2200}>2.2s / bước (Chuẩn)</option>
                <option value={3500}>3.5s / bước (Chậm thiền)</option>
              </select>
            </div>

            <div className="flex items-center gap-2 text-xs text-amber-200/60 font-medium">
              <span>Phím tắt:</span>
              <kbd className="px-2 py-0.5 rounded bg-black/40 text-amber-200 text-[10px] font-mono border border-white/10">Space</kbd>
              <kbd className="px-2 py-0.5 rounded bg-black/40 text-amber-200 text-[10px] font-mono border border-white/10">←</kbd>
              <kbd className="px-2 py-0.5 rounded bg-black/40 text-amber-200 text-[10px] font-mono border border-white/10">→</kbd>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
