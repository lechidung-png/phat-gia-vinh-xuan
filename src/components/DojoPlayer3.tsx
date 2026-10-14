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
  RotateCcw,
  BookOpen,
  PlayCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";
import { CanonicalLesson, MotionStep } from "@/data/canonicalCatalog";
import { getFormKinematics } from "@/data/martialKinematics";
import { getMasterVideosForForm } from "@/data/masterVideos";
import { cleanMotionTitle, extractMotionChieu } from "@/lib/formatters";

interface DojoPlayer3Props {
  lesson: CanonicalLesson;
  activeMotionIndex: number;
  onSelectMotionIndex: (idx: number) => void;
  onOpenLightbox: (motion: MotionStep) => void;
  onSelectBookmarkLesson?: (lessonId: string, motionIdx: number) => void;
  onSwitchToVideoTab?: () => void;
  onSwitchToIntroTab?: () => void;
}

export const DojoPlayer3: React.FC<DojoPlayer3Props> = ({
  lesson,
  activeMotionIndex,
  onSelectMotionIndex,
  onOpenLightbox,
  onSelectBookmarkLesson,
  onSwitchToVideoTab,
  onSwitchToIntroTab,
}) => {
  const [isMirrorFlipped, setIsMirrorFlipped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMatrixOpen, setIsMatrixOpen] = useState(false);
  const [showKinematicsDrawer, setShowKinematicsDrawer] = useState(false);
  const [leftMediaMode, setLeftMediaMode] = useState<"photo" | "video">("photo");
  const [inlineVideoIdx, setInlineVideoIdx] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(2200); // 2.2s per step
  const [copiedShare, setCopiedShare] = useState(false);
  const [shareError, setShareError] = useState(false);
  const [showBookmarksPanel, setShowBookmarksPanel] = useState(false);
  const [bookmarksList, setBookmarksList] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem("pgvx_bookmarks_3");
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === "string") : [];
    } catch {
      return [];
    }
  });

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const filmstripContainerRef = useRef<HTMLDivElement | null>(null);
  const activeThumbRef = useRef<HTMLButtonElement | null>(null);

  const motions = lesson.motions || [];
  const totalMotions = motions.length;
  const currentMotion: MotionStep | undefined = motions[activeMotionIndex] || motions[0];
  const prevMotion: MotionStep | undefined =
    totalMotions > 1 ? motions[(activeMotionIndex - 1 + totalMotions) % totalMotions] : undefined;
  const nextMotion: MotionStep | undefined =
    totalMotions > 1 ? motions[(activeMotionIndex + 1) % totalMotions] : undefined;

  const currentBookmarkKey = `${lesson.id}#${activeMotionIndex + 1}`;
  const isBookmarked =
    bookmarksList.includes(currentBookmarkKey) || bookmarksList.includes(lesson.id);

  // Tự động cuộn dải Filmstrip ngang để động tác đang chọn luôn nằm ở trung tâm tầm nhìn
  useEffect(() => {
    if (activeThumbRef.current && filmstripContainerRef.current) {
      const container = filmstripContainerRef.current;
      const thumb = activeThumbRef.current;
      const targetLeft =
        thumb.offsetLeft - container.clientWidth / 2 + thumb.clientWidth / 2;
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: "smooth",
      });
    }
  }, [activeMotionIndex, lesson.id]);

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

  // Phím tắt bàn phím — cô lập hoàn toàn khi đang mở Modal/Dialog hoặc đang focus vào phần tử tương tác
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      if (e.key === "Escape" && isMatrixOpen) {
        e.preventDefault();
        setIsMatrixOpen(false);
        return;
      }

      if (isMatrixOpen || document.querySelector('[role="dialog"]') !== null) {
        return;
      }

      const target = e.target as HTMLElement | null;
      if (target) {
        const tag = target.tagName?.toLowerCase();
        if (
          tag === "input" ||
          tag === "textarea" ||
          tag === "select" ||
          target.isContentEditable ||
          target.closest('input, textarea, select, [contenteditable="true"], [role="dialog"]')
        ) {
          return;
        }
        if (e.code === "Space" && (tag === "button" || tag === "a" || target.closest("button, a"))) {
          return;
        }
      }

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
  }, [activeMotionIndex, totalMotions, onSelectMotionIndex, isMatrixOpen]);

  const toggleBookmark = () => {
    try {
      let next = [...bookmarksList];
      if (isBookmarked) {
        next = next.filter((id) => id !== currentBookmarkKey && id !== lesson.id);
      } else {
        next.push(currentBookmarkKey);
      }
      setBookmarksList(next);
      localStorage.setItem("pgvx_bookmarks_3", JSON.stringify(next));
    } catch {
      // Ignore storage quota errors
    }
  };

  const handleShare = async () => {
    if (typeof window === "undefined") return;
    const url = `${window.location.origin}${window.location.pathname}?tab=forms&lesson=${lesson.id}&step=${activeMotionIndex + 1}`;
    setShareError(false);

    try {
      if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
        await navigator.clipboard.writeText(url);
        setCopiedShare(true);
        setTimeout(() => setCopiedShare(false), 2200);
        return;
      }
    } catch {
      // Thử phương án dự phòng bên dưới
    }

    try {
      const textArea = document.createElement("textarea");
      textArea.value = url;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(textArea);
      if (ok) {
        setCopiedShare(true);
        setTimeout(() => setCopiedShare(false), 2200);
        return;
      }
    } catch {
      // Fallthrough
    }

    setShareError(true);
    setTimeout(() => setShareError(false), 3000);
  };

  if (!currentMotion || motions.length === 0) {
    return (
      <div className="glass-panel p-6 rounded-3xl border border-[#F5D06C]/30 text-center space-y-2">
        <p className="text-amber-200/90 text-sm">Bài học này là bài đọc lý thuyết / tư liệu lịch sử tổng hợp.</p>
        <div className="text-xs text-[#F5D06C] font-mono font-semibold">Chuyên đề: {lesson.title}</div>
      </div>
    );
  }

  const currentImgUrl = currentMotion.img2xUrl || currentMotion.imgUrl;
  const cleanedDesc = cleanMotionTitle(currentMotion.desc);
  const chieuBadge = extractMotionChieu(currentMotion.desc);
  const kinematics = getFormKinematics(lesson.id);
  const formVideos = getMasterVideosForForm(lesson.id);
  const activeInlineVideo = formVideos[inlineVideoIdx] || formVideos[0];
  const progressPercent = Math.round(((activeMotionIndex + 1) / Math.max(1, totalMotions)) * 100);

  return (
    <div className="glass-panel rounded-3xl p-3.5 sm:p-4 border border-[#F5D06C]/35 shadow-2xl space-y-3">
      {/* TẦNG CHÍNH: 2 CỘT CÂN ĐỐI GỌN TRONG 1 MÀN HÌNH (Cột Trái 4/12 Ảnh/Video Chuẩn + Cột Phải 8/12 Chỉ Dẫn & Điều Khiển) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        {/* CỘT TRÁI (lg:col-span-4): BỤC THỊ PHẠM ĐA PHƯƠNG THỨC (CHUYỂN TỨC THÌ ẢNH SÁCH GỐC <-> VIDEO ĐẠI SƯ) */}
        <div className="lg:col-span-4 flex flex-col items-center justify-between bg-[#140B07]/90 rounded-2xl p-2.5 border border-[#F5D06C]/25 space-y-2">
          {/* Thanh chuyển đổi tức thì: Ảnh Sách Gốc vs Phát Video Đại Sư ngay tại chỗ */}
          <div className="w-full flex items-center justify-between gap-1 p-1 rounded-xl bg-[#0E0704] border border-[#F5D06C]/25">
            <button
              type="button"
              onClick={() => setLeftMediaMode("photo")}
              className={`flex-1 py-1 px-2 rounded-lg text-[11px] font-bold transition flex items-center justify-center gap-1 cursor-pointer ${
                leftMediaMode === "photo"
                  ? "bg-[#F5D06C] text-[#2A0E0A] shadow"
                  : "text-amber-200/75 hover:text-white"
              }`}
            >
              <span>📸 Ảnh Sách Gốc ({totalMotions})</span>
            </button>
            <button
              type="button"
              onClick={() => setLeftMediaMode("video")}
              className={`flex-1 py-1 px-2 rounded-lg text-[11px] font-bold transition flex items-center justify-center gap-1 cursor-pointer ${
                leftMediaMode === "video"
                  ? "bg-emerald-500 text-[#0A1810] shadow"
                  : "text-emerald-300 hover:text-white bg-emerald-950/40"
              }`}
            >
              <PlayCircle className="w-3.5 h-3.5" />
              <span>Xem Video ({formVideos.length})</span>
            </button>
          </div>

          {leftMediaMode === "photo" ? (
            <div
              className="martial-photo-frame w-full max-w-[260px] h-[275px] sm:h-[290px] rounded-2xl overflow-hidden p-2 relative flex items-center justify-center group shadow-xl touch-action-manipulation select-none"
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
                }
                touchStartX.current = null;
                touchStartY.current = null;
              }}
            >
              <div
                className={`relative w-full h-full transition-transform duration-300 ${
                  isMirrorFlipped ? "scale-x-[-1]" : ""
                }`}
              >
                <Image
                  src={currentImgUrl}
                  alt={cleanedDesc || `Động tác ${currentMotion.stepNo}`}
                  fill
                  className="object-contain filter drop-shadow-sm martial-filter pointer-events-none"
                  sizes="260px"
                  priority
                />
              </div>

              {/* Nút chuyển nhanh Trái / Phải trực tiếp trên mép khung ảnh */}
              <button
                type="button"
                onClick={() =>
                  onSelectMotionIndex((activeMotionIndex - 1 + totalMotions) % totalMotions)
                }
                className="absolute left-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#140C08]/75 hover:bg-[#F5D06C] text-white hover:text-[#140C08] flex items-center justify-center opacity-75 group-hover:opacity-100 transition cursor-pointer shadow"
                title="Thế trước (Phím ←)"
                aria-label="Chuyển về thế trước"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onSelectMotionIndex((activeMotionIndex + 1) % totalMotions)}
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#140C08]/75 hover:bg-[#F5D06C] text-white hover:text-[#140C08] flex items-center justify-center opacity-75 group-hover:opacity-100 transition cursor-pointer shadow"
                title="Thế tiếp theo (Phím →)"
                aria-label="Chuyển sang thế tiếp theo"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Top Badges */}
              <div className="absolute top-2 left-2 flex items-center gap-1.5">
                <span className="px-2 py-0.5 rounded-lg bg-[#140C08]/90 text-white text-[11px] font-mono font-bold flex items-center gap-1.5 shadow border border-[#F5D06C]/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>
                    Thế {currentMotion.stepNo} / {totalMotions}
                  </span>
                </span>
                {isMirrorFlipped && (
                  <span className="px-2 py-0.5 rounded-lg bg-[#F5D06C] text-[#2A0E0A] text-[10px] font-bold shadow flex items-center gap-1">
                    <FlipHorizontal className="w-3 h-3" /> Gương
                  </span>
                )}
              </div>

              {/* Bottom In-Image Action Pills */}
              <div className="absolute bottom-2 right-2 left-2 flex items-center justify-between gap-1.5">
                <span className="px-2 py-0.5 rounded-lg bg-[#140C08]/85 text-[#F5D06C] text-[10px] font-mono border border-white/10">
                  {currentMotion.displayId} • Tr.{currentMotion.pdfPage}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setIsMirrorFlipped(!isMirrorFlipped)}
                    className={`px-2 py-1 rounded-lg text-[11px] font-semibold shadow transition flex items-center gap-1 border cursor-pointer ${
                      isMirrorFlipped
                        ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C]"
                        : "bg-[#140C08]/90 text-white hover:bg-[#F5D06C] hover:text-[#2A0E0A] border-[#F5D06C]/40"
                    }`}
                    title="Lật gương võ học"
                    aria-label="Lật gương võ học"
                  >
                    <FlipHorizontal className="w-3 h-3" />
                    <span>{isMirrorFlipped ? "Đang Lật" : "Lật Gương"}</span>
                  </button>

                  <button
                    onClick={() => onOpenLightbox(currentMotion)}
                    className="p-1.5 rounded-lg bg-[#140C08]/90 text-white hover:bg-[#F5D06C] hover:text-[#2A0E0A] transition shadow border border-[#F5D06C]/50 flex items-center justify-center cursor-pointer"
                    title="Phóng to ảnh (Toàn màn hình)"
                    aria-label="Phóng to ảnh động tác"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-[#F5D06C]" />
                  </button>
                </div>
              </div>
            </div>
          ) : activeInlineVideo ? (
            <div className="w-full h-[275px] sm:h-[290px] flex flex-col justify-between space-y-1.5">
              <div className="relative w-full flex-1 rounded-xl overflow-hidden border border-[#F5D06C]/50 bg-black shadow-lg">
                <iframe
                  key={activeInlineVideo.youtubeId}
                  src={`https://www.youtube.com/embed/${activeInlineVideo.youtubeId}?rel=0&modestbranding=1`}
                  title={activeInlineVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <div className="flex items-center gap-1 overflow-x-auto pb-0.5">
                {formVideos.map((v, vIdx) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setInlineVideoIdx(vIdx)}
                    className={`px-2 py-0.5 rounded-lg text-[10px] font-mono shrink-0 border transition cursor-pointer ${
                      vIdx === inlineVideoIdx
                        ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C] font-bold"
                        : "bg-[#1A0E09] text-amber-200/80 border-[#F5D06C]/25 hover:text-white"
                    }`}
                  >
                    #{vIdx + 1} {v.masterName.replace(/^(Đại Tông Sư|Đại Sư|Võ Sư|Cố Võ Sư|HLV)\s+/i, "")}
                  </button>
                ))}
              </div>
              {onSwitchToVideoTab && (
                <button
                  type="button"
                  onClick={onSwitchToVideoTab}
                  className="w-full py-1 rounded-lg bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold transition cursor-pointer"
                >
                  Mở Phòng Chiếu Rộng ({formVideos.length} Video Đại Sư) ↗
                </button>
              )}
            </div>
          ) : null}
        </div>

        {/* CỘT PHẢI (lg:col-span-8): BẢNG CHỈ DẪN TỪNG NHỊP, DÒNG CHẢY ĐỘNG HỌC & ĐIỀU KHIỂN TRUNG TÂM */}
        <div className="lg:col-span-8 flex flex-col justify-between space-y-2.5">
          {/* 1. Thanh Tiến Độ & Định Danh Động Tác */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2.5 py-0.5 rounded-lg bg-[#F5D06C] text-[#2A0E0A] text-xs font-mono font-extrabold">
                  BƯỚC {currentMotion.stepNo} / {totalMotions}
                </span>
                {currentMotion.bookStepNo && (
                  <span className="px-2 py-0.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-mono font-semibold text-xs">
                    Chiêu/Thế sách gốc: {currentMotion.bookStepNo}
                  </span>
                )}
                {chieuBadge && (
                  <span className="px-2 py-0.5 rounded-lg bg-[#F5D06C]/15 border border-[#F5D06C]/35 text-[#F5D06C] font-semibold text-xs">
                    {chieuBadge}
                  </span>
                )}
                <span className="text-xs text-amber-200/75 font-mono hidden sm:inline">
                  • {kinematics.kieu}
                </span>
              </div>

              {/* Cụm nút Lưu & Chia sẻ */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={toggleBookmark}
                  className={`px-2.5 py-1 rounded-lg border text-xs font-semibold flex items-center gap-1 transition cursor-pointer ${
                    isBookmarked
                      ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C]"
                      : "bg-[#20150F] border-[#F5D06C]/30 text-amber-200/80 hover:text-white"
                  }`}
                  title={isBookmarked ? "Bỏ lưu động tác này" : "Lưu lại động tác này"}
                  aria-label={isBookmarked ? "Bỏ lưu động tác này" : "Lưu lại động tác này"}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? "fill-[#2A0E0A]" : ""}`} />
                  <span className="hidden sm:inline">{isBookmarked ? "Đã lưu" : "Lưu thế"}</span>
                </button>
                {bookmarksList.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowBookmarksPanel((prev) => !prev)}
                    className="px-2 py-1 rounded-lg bg-[#2A0E0A]/80 border border-[#F5D06C]/40 text-xs text-[#F5D06C] hover:bg-[#F5D06C]/20 font-mono font-semibold transition cursor-pointer"
                    aria-label="Mở danh sách động tác đã lưu"
                  >
                    ({bookmarksList.length})
                  </button>
                )}
                <button
                  onClick={handleShare}
                  className="p-1.5 rounded-lg bg-[#20150F] border border-[#F5D06C]/30 text-amber-200/80 hover:text-white transition cursor-pointer"
                  title="Sao chép liên kết động tác"
                  aria-label="Sao chép liên kết chia sẻ"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </button>
                {copiedShare && (
                  <span className="text-xs text-emerald-400 font-bold animate-fadeIn">Đã chép!</span>
                )}
                {shareError && (
                  <span className="text-xs text-rose-400 font-bold animate-fadeIn">Lỗi chép</span>
                )}
              </div>
            </div>

            {/* Thanh Progress Bar trực quan */}
            <div className="w-full h-1.5 bg-[#241610] rounded-full overflow-hidden border border-[#F5D06C]/20">
              <div
                className="h-full bg-gradient-to-r from-[#E2B743] to-[#F5D06C] transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {showBookmarksPanel && bookmarksList.length > 0 && (
              <div className="p-2.5 rounded-xl bg-[#18100C] border border-[#F5D06C]/40 space-y-2 text-xs">
                <div className="flex items-center justify-between text-[#F5D06C] font-bold">
                  <span>Danh sách thế võ đã đánh dấu ({bookmarksList.length})</span>
                  <button
                    type="button"
                    onClick={() => setShowBookmarksPanel(false)}
                    className="text-slate-400 hover:text-white"
                    aria-label="Đóng danh sách đã lưu"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {bookmarksList.map((bKey) => {
                    const [bLessonId, bStepStr] = bKey.split("#");
                    const stepNum = bStepStr ? parseInt(bStepStr, 10) : 1;
                    const isSameLesson = bLessonId === lesson.id;
                    return (
                      <button
                        key={bKey}
                        type="button"
                        onClick={() => {
                          if (isSameLesson && !Number.isNaN(stepNum)) {
                            onSelectMotionIndex(Math.max(0, Math.min(totalMotions - 1, stepNum - 1)));
                            setShowBookmarksPanel(false);
                          } else if (onSelectBookmarkLesson) {
                            onSelectBookmarkLesson(bLessonId, Math.max(0, (stepNum || 1) - 1));
                            setShowBookmarksPanel(false);
                          }
                        }}
                        className={`px-2 py-0.5 rounded-lg border font-mono transition ${
                          bKey === currentBookmarkKey
                            ? "bg-[#F5D06C] text-[#140C08] border-[#F5D06C] font-bold"
                            : "bg-black/40 text-amber-100 border-[#3D291F] hover:border-[#F5D06C]/60"
                        }`}
                      >
                        {bLessonId} • Bước {stepNum || 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* 2. KHỐI TRỌNG TÂM: CHỈ DẪN ĐỘNG TÁC HIỆN TẠI (SÁCH GỐC) */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-[#26150D] via-[#1D100A] to-[#150B07] border border-[#F5D06C]/45 shadow-inner space-y-1.5">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#F5D06C] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F5D06C]" />
              Chỉ Dẫn Kỹ Thuật Động Tác Thứ {currentMotion.stepNo} (Sách Gốc Trang {currentMotion.pdfPage})
            </span>
            <h3 className="text-base sm:text-xl font-bold font-serif text-[#FFFDF9] leading-snug">
              {cleanedDesc && !cleanedDesc.includes("trang PDF")
                ? cleanedDesc
                : `Thực hiện tư thế số ${currentMotion.stepNo} của bài ${lesson.title} theo đúng trục trung tuyến.`}
            </h3>
          </div>

          {/* 3. DẢI CHUYỂN TIẾP ĐỘNG HỌC 3 NHỊP: THẾ TRƯỚC ➔ ĐANG TẬP ➔ THẾ TIẾP THEO */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {prevMotion && (
              <button
                type="button"
                onClick={() =>
                  onSelectMotionIndex((activeMotionIndex - 1 + totalMotions) % totalMotions)
                }
                className="p-2 rounded-xl bg-[#160D09] hover:bg-[#22140D] border border-[#F5D06C]/20 hover:border-[#F5D06C]/50 text-left transition flex items-center gap-2 cursor-pointer group"
              >
                <div className="relative w-9 h-11 rounded-lg bg-[#FBF9F5] p-0.5 shrink-0 border border-white/20">
                  <Image
                    src={prevMotion.imgUrl}
                    alt={`Thế ${prevMotion.stepNo}`}
                    fill
                    className="object-contain martial-filter"
                    sizes="36px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-mono text-amber-200/70 flex items-center gap-1">
                    <ChevronLeft className="w-3 h-3 text-[#F5D06C]" />
                    <span>Thế trước #{prevMotion.stepNo}</span>
                  </div>
                  <p className="text-xs text-amber-100/90 font-medium line-clamp-1 leading-tight mt-0.5">
                    {cleanMotionTitle(prevMotion.desc) || `Động tác ${prevMotion.stepNo}`}
                  </p>
                </div>
              </button>
            )}

            <div className="p-2 rounded-xl bg-[#2B170E] border-2 border-[#F5D06C] text-left flex items-center gap-2 shadow-md">
              <div className="relative w-9 h-11 rounded-lg bg-[#FBF9F5] p-0.5 shrink-0 border border-[#F5D06C]">
                <Image
                  src={currentMotion.imgUrl}
                  alt={`Thế ${currentMotion.stepNo}`}
                  fill
                  className="object-contain martial-filter"
                  sizes="36px"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-mono font-bold text-[#F5D06C] uppercase">
                  ● Đang tập #{currentMotion.stepNo}
                </div>
                <p className="text-xs text-white font-bold line-clamp-1 leading-tight mt-0.5">
                  {cleanedDesc || `Động tác ${currentMotion.stepNo}`}
                </p>
              </div>
            </div>

            {nextMotion && (
              <button
                type="button"
                onClick={() => onSelectMotionIndex((activeMotionIndex + 1) % totalMotions)}
                className="p-2 rounded-xl bg-[#160D09] hover:bg-[#22140D] border border-[#F5D06C]/20 hover:border-[#F5D06C]/50 text-left transition flex items-center gap-2 cursor-pointer group"
              >
                <div className="relative w-9 h-11 rounded-lg bg-[#FBF9F5] p-0.5 shrink-0 border border-white/20">
                  <Image
                    src={nextMotion.imgUrl}
                    alt={`Thế ${nextMotion.stepNo}`}
                    fill
                    className="object-contain martial-filter"
                    sizes="36px"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-mono text-emerald-300 flex items-center justify-between">
                    <span>Thế tiếp #{nextMotion.stepNo}</span>
                    <ArrowRight className="w-3 h-3 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <p className="text-xs text-amber-100/90 font-medium line-clamp-1 leading-tight mt-0.5">
                    {cleanMotionTitle(nextMotion.desc) || `Động tác ${nextMotion.stepNo}`}
                  </p>
                </div>
              </button>
            )}
          </div>

          {/* 4. THANH TÂM PHÁP & YẾU LĨNH TINH GỌN (1 DÒNG — BẤM ĐỂ MỞ RỘNG KHI CẦN) */}
          <div className="rounded-xl bg-[#160D09] border border-[#F5D06C]/25 overflow-hidden">
            <div className="px-3 py-1.5 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <Zap className="w-3.5 h-3.5 text-[#F5D06C] shrink-0" />
                <span className="text-xs font-bold text-[#F5D06C] shrink-0">Khẩu quyết:</span>
                <span className="text-xs text-amber-100/95 font-serif italic truncate">
                  &ldquo;{kinematics.khauQuyet}&rdquo;
                </span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowKinematicsDrawer(!showKinematicsDrawer)}
                  className="px-2.5 py-1 rounded-lg bg-[#24150E] hover:bg-[#321D13] text-[#F5D06C] border border-[#F5D06C]/30 text-[11px] font-semibold flex items-center gap-1 transition cursor-pointer"
                >
                  <span>{showKinematicsDrawer ? "Ẩn yếu lĩnh" : "Yếu lĩnh & 3 Điểm cốt tử"}</span>
                  {showKinematicsDrawer ? (
                    <ChevronUp className="w-3 h-3" />
                  ) : (
                    <ChevronDown className="w-3 h-3" />
                  )}
                </button>
                {onSwitchToIntroTab && (
                  <button
                    type="button"
                    onClick={onSwitchToIntroTab}
                    className="px-2.5 py-1 rounded-lg bg-[#F5D06C]/15 hover:bg-[#F5D06C]/25 text-amber-200 text-[11px] font-semibold flex items-center gap-1 border border-[#F5D06C]/25 transition cursor-pointer"
                  >
                    <BookOpen className="w-3 h-3 text-[#F5D06C]" />
                    <span className="hidden sm:inline">Hướng dẫn Sách gốc</span>
                  </button>
                )}
              </div>
            </div>

            {showKinematicsDrawer && (
              <div className="p-3 border-t border-[#F5D06C]/20 bg-[#120A06] grid grid-cols-1 md:grid-cols-2 gap-3 text-xs animate-fadeIn">
                <div className="space-y-1">
                  <span className="font-bold text-[#F5D06C] uppercase font-mono block">
                    Yếu lĩnh thân pháp &amp; vận lực:
                  </span>
                  <p className="text-amber-100/90 leading-relaxed">{kinematics.yeuLinh}</p>
                </div>
                <div className="space-y-1">
                  <span className="font-bold text-emerald-400 uppercase font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 3 Điểm cốt tử khi luyện tập:
                  </span>
                  <ul className="space-y-1 text-amber-100/90">
                    {kinematics.cotTu.map((pt, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold">{i + 1}.</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* 5. BỘ ĐIỀU KHIỂN TRUNG TÂM GỌN TRÊN 1 HÀNG DUY NHẤT */}
          <div className="pt-2 border-t border-[#F5D06C]/20 flex flex-wrap lg:flex-nowrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => onSelectMotionIndex(0)}
                disabled={activeMotionIndex === 0}
                className="min-h-[38px] px-2.5 py-1 rounded-xl bg-[#20150F] border border-[#F5D06C]/25 text-amber-200/80 hover:text-white disabled:opacity-40 transition flex items-center gap-1 text-xs cursor-pointer"
                title="Về động tác số 1"
                aria-label="Về động tác đầu tiên"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Đầu</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  if (activeMotionIndex > 0) onSelectMotionIndex(activeMotionIndex - 1);
                  else onSelectMotionIndex(totalMotions - 1);
                }}
                className="min-h-[38px] px-3 py-1 rounded-xl bg-[#20150F] border border-[#F5D06C]/35 text-amber-100 hover:text-white hover:border-[#F5D06C] transition flex items-center gap-1 text-xs font-bold cursor-pointer"
                title="Động tác trước (Mũi tên Trái)"
                aria-label="Động tác trước đó"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Thế Trước</span>
              </button>

              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Tạm dừng phát chuỗi" : "Tự động phát chuỗi động tác"}
                className={`min-h-[38px] px-3.5 py-1 rounded-xl font-bold text-xs shadow-md transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  isPlaying
                    ? "bg-rose-600 hover:bg-rose-700 text-white"
                    : "bg-[#F5D06C] hover:bg-[#FFF3B8] text-[#2A0E0A]"
                }`}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                <span>{isPlaying ? "Tạm Dừng" : "Tự Động Phát"}</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectMotionIndex((activeMotionIndex + 1) % totalMotions)}
                className="min-h-[38px] px-3 py-1 rounded-xl bg-[#20150F] border border-[#F5D06C]/35 text-amber-100 hover:text-white hover:border-[#F5D06C] transition flex items-center gap-1 text-xs font-bold cursor-pointer"
                title="Động tác tiếp theo (Mũi tên Phải)"
                aria-label="Động tác tiếp theo"
              >
                <span>Thế Tiếp</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-1.5">
              <select
                value={playbackSpeed}
                onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
                className="min-h-[36px] bg-[#20150F] border border-[#F5D06C]/30 rounded-xl px-2 py-1 text-xs font-semibold text-amber-200 focus:outline-none focus:border-[#F5D06C] cursor-pointer"
                aria-label="Tốc độ tự động phát"
              >
                <option value={1500}>1.5s / thế</option>
                <option value={2200}>2.2s / thế</option>
                <option value={3500}>3.5s / thế</option>
              </select>

              {onSwitchToVideoTab && (
                <button
                  type="button"
                  onClick={onSwitchToVideoTab}
                  className="min-h-[36px] px-2.5 py-1 rounded-xl bg-emerald-950/90 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/40 text-xs font-bold flex items-center gap-1 transition cursor-pointer"
                  title="Xem Video Đại Sư biểu diễn bài này"
                >
                  <PlayCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Video Mẫu</span>
                </button>
              )}

              <div className="hidden xl:flex items-center gap-1 text-[10px] text-amber-200/60 font-mono">
                <kbd className="px-1.5 py-0.5 rounded bg-black/40 text-amber-200 border border-white/10">
                  Space
                </kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-black/40 text-amber-200 border border-white/10">
                  ←
                </kbd>
                <kbd className="px-1.5 py-0.5 rounded bg-black/40 text-amber-200 border border-white/10">
                  →
                </kbd>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TẦNG ĐÁY (FULL-WIDTH 12 CỘT): DẢI PHIM LIÊN HOÀN TOÀN BÀI (THANH CUỘN VÀNG KIM MẢNH, KHÔNG CÒN THANH TRẮNG) */}
      <div className="pt-2.5 border-t border-[#F5D06C]/20 space-y-1.5">
        <div className="flex items-center justify-between text-xs text-amber-200/85">
          <span className="font-semibold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#F5D06C]" />
            <span>
              Dải Phim Liên Hoàn {totalMotions} Động Tác ({lesson.title}) — Nhấp chọn thế bất kỳ:
            </span>
          </span>
          <button
            type="button"
            onClick={() => setIsMatrixOpen(true)}
            className="text-xs font-mono font-bold text-[#F5D06C] hover:text-white bg-[#20150F] hover:bg-[#F5D06C]/20 px-2.5 py-0.5 rounded-xl border border-[#F5D06C]/35 flex items-center gap-1.5 transition cursor-pointer"
            title="Mở toàn bộ ma trận động tác trên 1 bảng"
            aria-label="Xem toàn bộ ma trận động tác"
          >
            <Grid className="w-3.5 h-3.5" />
            <span>Mở Bảng Ma Trận ({totalMotions} thế)</span>
          </button>
        </div>

        <div
          ref={filmstripContainerRef}
          className="flex items-center gap-2 overflow-x-auto pb-1 pt-0.5 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-[#140B07] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#F5D06C]/40 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#F5D06C]"
        >
          {motions.map((m, idx) => {
            const isActive = idx === activeMotionIndex;
            return (
              <button
                key={m.id}
                ref={isActive ? activeThumbRef : null}
                type="button"
                onClick={() => onSelectMotionIndex(idx)}
                aria-label={`Xem động tác thứ ${m.stepNo}`}
                className={`relative w-13 h-16 rounded-xl bg-[#FBF9F5] p-1 shrink-0 transition-all flex flex-col items-center justify-between border cursor-pointer ${
                  isActive
                    ? "border-[#F5D06C] ring-2 ring-[#F5D06C] shadow-lg scale-105 z-10"
                    : "border-white/20 hover:border-[#F5D06C] opacity-70 hover:opacity-100"
                }`}
              >
                <div className="relative w-full flex-1">
                  <Image
                    src={m.imgUrl}
                    alt={cleanMotionTitle(m.desc) || `Thế ${m.stepNo}`}
                    fill
                    className="object-contain filter martial-filter"
                    sizes="52px"
                  />
                </div>
                <span
                  className={`text-[9px] font-mono font-bold px-1 rounded w-full text-center ${
                    isActive ? "bg-[#F5D06C] text-[#2A0E0A]" : "text-slate-800"
                  }`}
                >
                  #{m.stepNo}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* MODAL MA TRẬN ĐỘNG TÁC (TẤT CẢ TRONG MỘT MÀN HÌNH) */}
      {isMatrixOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Ma trận ${totalMotions} động tác ${lesson.title}`}
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
