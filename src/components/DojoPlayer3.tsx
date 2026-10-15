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
  CheckCircle2,
  Share2,
  Bookmark,
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
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(2200);
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

  // Phím tắt bàn phím — cô lập hoàn toàn khi đang mở Modal/Dialog
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
      <div className="p-8 rounded-3xl bg-[#140B07]/80 border border-[#F5D06C]/25 text-center space-y-2">
        <p className="text-amber-100 text-base">
          Bài học này là chuyên đề lý thuyết / tư liệu lịch sử tổng hợp.
        </p>
        <div className="text-sm text-[#F5D06C] font-mono font-semibold">
          Chuyên đề: {lesson.title}
        </div>
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
    <div className="rounded-3xl bg-gradient-to-b from-[#170D08]/95 to-[#0F0805]/95 border border-[#F5D06C]/25 shadow-2xl p-5 sm:p-8 lg:p-10 space-y-8">
      {/* =========================================================================
          TẦNG TRUNG TÂM: KIẾN TRÚC KHÔNG GIAN MỞ 50/50 (ZERO BOX-IN-BOX)
          - Cột Trái (5/12): Sân Khấu Thị Giác Khổ Lớn (Ảnh Sách Gốc 420px / Video Đại Sư)
          - Cột Phải (7/12): Chỉ Dẫn Sư Phạm Chữ Khổ Lớn (Đọc rõ từ khoảng cách đứng tấn 2 mét)
      ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* CỘT TRÁI (lg:col-span-5): SÂN KHẤU THỊ GIÁC KHỔ LỚN */}
        <div className="lg:col-span-5 flex flex-col items-center space-y-4">
          {/* Thanh chuyển đổi chế độ thị giác thoáng đãng, chữ 14px rõ nét */}
          <div className="w-full max-w-[420px] flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#0D0704] border border-white/10">
            <button
              type="button"
              onClick={() => setLeftMediaMode("photo")}
              className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
                leftMediaMode === "photo"
                  ? "bg-[#F5D06C] text-[#2A0E0A] shadow-md"
                  : "text-amber-100/75 hover:text-white"
              }`}
            >
              <span>📸 Ảnh Sách Gốc ({totalMotions})</span>
            </button>
            <button
              type="button"
              onClick={() => setLeftMediaMode("video")}
              className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-bold transition flex items-center justify-center gap-2 cursor-pointer ${
                leftMediaMode === "video"
                  ? "bg-emerald-500 text-[#0A1810] shadow-md"
                  : "text-emerald-300 hover:text-white"
              }`}
            >
              <PlayCircle className="w-4 h-4" />
              <span>Video Đại Sư ({formVideos.length})</span>
            </button>
          </div>

          {leftMediaMode === "photo" ? (
            <div
              className="martial-photo-frame w-full max-w-[420px] h-[360px] sm:h-[430px] rounded-3xl overflow-hidden p-4 relative flex items-center justify-center group shadow-2xl touch-action-manipulation select-none"
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
                  className="object-contain filter drop-shadow-md martial-filter pointer-events-none"
                  sizes="(max-width: 768px) 340px, 420px"
                  priority
                />
              </div>

              {/* Nút chuyển nhanh Trái / Phải tinh tế trên mép khung ảnh */}
              <button
                type="button"
                onClick={() =>
                  onSelectMotionIndex((activeMotionIndex - 1 + totalMotions) % totalMotions)
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#140C08]/80 hover:bg-[#F5D06C] text-white hover:text-[#140C08] flex items-center justify-center opacity-0 group-hover:opacity-100 transition cursor-pointer shadow-lg"
                title="Thế trước (Phím ←)"
                aria-label="Chuyển về thế trước"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => onSelectMotionIndex((activeMotionIndex + 1) % totalMotions)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#140C08]/80 hover:bg-[#F5D06C] text-white hover:text-[#140C08] flex items-center justify-center opacity-0 group-hover:opacity-100 transition cursor-pointer shadow-lg"
                title="Thế tiếp theo (Phím →)"
                aria-label="Chuyển sang thế tiếp theo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Thanh công cụ tối giản dưới đáy khung ảnh */}
              <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-[#140C08]/85 text-[#F5D06C] text-xs font-mono font-semibold backdrop-blur-sm">
                  Trang {currentMotion.pdfPage} • Hình {currentMotion.displayId}
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setIsMirrorFlipped(!isMirrorFlipped)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow transition flex items-center gap-1.5 cursor-pointer backdrop-blur-sm ${
                      isMirrorFlipped
                        ? "bg-[#F5D06C] text-[#2A0E0A] font-bold"
                        : "bg-[#140C08]/85 text-white hover:bg-[#F5D06C] hover:text-[#2A0E0A]"
                    }`}
                    title="Lật gương võ học để tập đối xứng"
                    aria-label="Lật gương võ học"
                  >
                    <FlipHorizontal className="w-3.5 h-3.5" />
                    <span>{isMirrorFlipped ? "Đang Lật Gương" : "Lật Gương"}</span>
                  </button>

                  <button
                    onClick={() => onOpenLightbox(currentMotion)}
                    className="p-2 rounded-full bg-[#140C08]/85 text-[#F5D06C] hover:bg-[#F5D06C] hover:text-[#2A0E0A] transition shadow flex items-center justify-center cursor-pointer backdrop-blur-sm"
                    title="Phóng to ảnh 2x Retina"
                    aria-label="Phóng to ảnh động tác"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ) : activeInlineVideo ? (
            <div className="w-full max-w-[420px] h-[360px] sm:h-[430px] flex flex-col justify-between space-y-3">
              <div className="relative w-full flex-1 rounded-2xl overflow-hidden border border-[#F5D06C]/40 bg-black shadow-2xl">
                <iframe
                  key={activeInlineVideo.youtubeId}
                  src={`https://www.youtube.com/embed/${activeInlineVideo.youtubeId}?rel=0&modestbranding=1`}
                  title={activeInlineVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                {formVideos.map((v, vIdx) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setInlineVideoIdx(vIdx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold shrink-0 border transition cursor-pointer ${
                      vIdx === inlineVideoIdx
                        ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C] font-bold"
                        : "bg-[#1A0E09] text-amber-100/85 border-white/10 hover:text-white"
                    }`}
                  >
                    #{vIdx + 1}{" "}
                    {v.masterName.replace(
                      /^(Đại Tông Sư|Đại Sư|Võ Sư|Cố Võ Sư|HLV)\s+/i,
                      ""
                    )}
                  </button>
                ))}
              </div>
              {onSwitchToVideoTab && (
                <button
                  type="button"
                  onClick={onSwitchToVideoTab}
                  className="w-full py-2 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/40 text-xs sm:text-sm font-bold transition cursor-pointer"
                >
                  Mở Phòng Chiếu Rộng ({formVideos.length} Video Đại Sư) ↗
                </button>
              )}
            </div>
          ) : null}
        </div>

        {/* CỘT PHẢI (lg:col-span-7): KHÔNG GIAN CHỈ DẪN EDITORIAL KHÔNG KHUNG VIỀN (ĐỌC RÕ TỪ 2 MÉT) */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
          {/* 1. Dòng Eyebrow Định Danh Tinh Tế + Nút Lưu/Chia Sẻ (Không đóng hộp) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2.5 flex-wrap text-xs sm:text-sm font-mono tracking-wider uppercase">
                <span className="px-3 py-1 rounded-full bg-[#F5D06C] text-[#2A0E0A] font-extrabold">
                  THẾ {currentMotion.stepNo} / {totalMotions}
                </span>
                {chieuBadge && (
                  <span className="text-[#F5D06C] font-bold">
                    • {chieuBadge}
                  </span>
                )}
                {currentMotion.bookStepNo && (
                  <span className="text-emerald-400 font-semibold">
                    • Sách gốc: {currentMotion.bookStepNo}
                  </span>
                )}
                <span className="text-amber-200/70 hidden sm:inline">
                  • {kinematics.kieu}
                </span>
              </div>

              {/* Cụm nút Lưu & Chia sẻ tối giản */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleBookmark}
                  className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                    isBookmarked
                      ? "bg-[#F5D06C] text-[#2A0E0A]"
                      : "bg-white/5 hover:bg-white/10 text-amber-100"
                  }`}
                  title={isBookmarked ? "Bỏ lưu động tác này" : "Lưu lại động tác này"}
                >
                  <Bookmark className={`w-4 h-4 ${isBookmarked ? "fill-[#2A0E0A]" : ""}`} />
                  <span>{isBookmarked ? "Đã lưu" : "Lưu thế"}</span>
                </button>
                {bookmarksList.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setShowBookmarksPanel((prev) => !prev)}
                    className="px-2.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs sm:text-sm text-[#F5D06C] font-mono font-bold transition cursor-pointer"
                    aria-label="Mở danh sách động tác đã lưu"
                  >
                    ({bookmarksList.length})
                  </button>
                )}
                <button
                  onClick={handleShare}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-amber-100 hover:text-white transition cursor-pointer"
                  title="Sao chép liên kết động tác"
                  aria-label="Sao chép liên kết chia sẻ"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                {copiedShare && (
                  <span className="text-xs sm:text-sm text-emerald-400 font-bold">Đã chép!</span>
                )}
                {shareError && (
                  <span className="text-xs sm:text-sm text-rose-400 font-bold">Lỗi chép</span>
                )}
              </div>
            </div>

            {/* Thanh tiến độ mảnh tinh tế */}
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#E2B743] to-[#F5D06C] transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {showBookmarksPanel && bookmarksList.length > 0 && (
              <div className="p-4 rounded-2xl bg-[#1C100B] border border-[#F5D06C]/30 space-y-2.5 text-sm">
                <div className="flex items-center justify-between text-[#F5D06C] font-bold">
                  <span>Danh sách thế võ đã đánh dấu ({bookmarksList.length})</span>
                  <button
                    type="button"
                    onClick={() => setShowBookmarksPanel(false)}
                    className="text-amber-200 hover:text-white cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
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
                        className={`px-3 py-1 rounded-full font-mono text-xs transition cursor-pointer ${
                          bKey === currentBookmarkKey
                            ? "bg-[#F5D06C] text-[#140C08] font-bold"
                            : "bg-white/5 text-amber-100 hover:bg-white/15"
                        }`}
                      >
                        {bLessonId} • Thế {stepNum || 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* 2. CHỈ DẪN ĐỘNG TÁC CHỮ KHỔ LỚN (24px–32px SERIF, KHÔNG ĐÓNG HỘP, ĐỌC RÕ TỪ 2 MÉT) */}
          <div className="space-y-4 py-1">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#FAF6F0] leading-[1.38] tracking-tight">
              {cleanedDesc && !cleanedDesc.includes("trang PDF")
                ? cleanedDesc
                : `Thực hiện tư thế số ${currentMotion.stepNo} của bài ${lesson.title} theo đúng trục trung tuyến.`}
            </h3>

            {/* Khẩu quyết dẫn lối bằng đường viền vàng bên trái (Editorial Pull-Quote, không đóng khung 4 cạnh) */}
            <div className="border-l-4 border-[#F5D06C] pl-4 sm:pl-5 py-1 space-y-2">
              <p className="text-base sm:text-lg text-amber-100/95 font-serif italic leading-relaxed">
                &ldquo;{kinematics.khauQuyet}&rdquo;
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  type="button"
                  onClick={() => setShowKinematicsDrawer(!showKinematicsDrawer)}
                  className="text-xs sm:text-sm font-semibold text-[#F5D06C] hover:text-amber-200 flex items-center gap-1.5 transition cursor-pointer"
                >
                  <span>
                    {showKinematicsDrawer
                      ? "Thu gọn Yếu lĩnh & 3 Điểm cốt tử"
                      : "Xem Yếu lĩnh thân pháp & 3 Điểm cốt tử"}
                  </span>
                  {showKinematicsDrawer ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                {onSwitchToIntroTab && (
                  <button
                    type="button"
                    onClick={onSwitchToIntroTab}
                    className="text-xs sm:text-sm font-semibold text-amber-200/80 hover:text-white flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4 text-[#F5D06C]" />
                    <span>Đọc nguyên văn Sách gốc ↗</span>
                  </button>
                )}
              </div>
            </div>

            {/* Ngăn kéo Yếu lĩnh & 3 Điểm cốt tử (Chữ 15px–16px thoáng, dễ đọc) */}
            {showKinematicsDrawer && (
              <div className="pt-3 pb-1 pl-4 sm:pl-5 border-l-2 border-emerald-500/40 space-y-3 text-sm sm:text-base animate-fadeIn">
                <p className="text-amber-100/95 leading-relaxed">
                  <strong className="text-[#F5D06C]">Yếu lĩnh thân pháp:</strong>{" "}
                  {kinematics.yeuLinh}
                </p>
                <div className="space-y-1.5">
                  <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>3 Điểm cốt tử cần giữ vững:</span>
                  </div>
                  <ul className="space-y-1.5 text-amber-100/90 pl-1">
                    {kinematics.cotTu.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-emerald-400 font-bold">{i + 1}.</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* 3. DÒNG DỰ BÁO NHỊP TIẾP THEO (1 DÒNG MỞ THAY CHO 3 HỘP NHỎ CHẬT CHỘI) */}
          {nextMotion && (
            <div className="flex items-center justify-between gap-3 py-2.5 border-y border-white/10 text-sm sm:text-base">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-xs sm:text-sm font-mono font-bold uppercase text-emerald-400 shrink-0">
                  Nhịp tiếp (Thế {nextMotion.stepNo}):
                </span>
                <span className="text-amber-100/90 truncate font-serif">
                  {cleanMotionTitle(nextMotion.desc) || `Động tác thứ ${nextMotion.stepNo}`}
                </span>
              </div>
              <button
                type="button"
                onClick={() => onSelectMotionIndex((activeMotionIndex + 1) % totalMotions)}
                className="text-xs sm:text-sm font-bold text-[#F5D06C] hover:text-white flex items-center gap-1 shrink-0 cursor-pointer"
              >
                <span>Chuyển sang</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* 4. THANH ĐIỀU KHIỂN TRUNG TÂM KIỂU MASTERCLASS / APPLE FITNESS+ (NÚT LỚN, RÕ RÀNG) */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => {
                  if (activeMotionIndex > 0) onSelectMotionIndex(activeMotionIndex - 1);
                  else onSelectMotionIndex(totalMotions - 1);
                }}
                className="min-h-[46px] px-5 py-2.5 rounded-full bg-white/8 hover:bg-white/15 text-white border border-white/15 transition flex items-center gap-2 text-sm sm:text-base font-semibold cursor-pointer"
                title="Động tác trước (Phím mũi tên Trái)"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Thế Trước</span>
              </button>

              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Tạm dừng phát chuỗi" : "Tự động phát chuỗi động tác"}
                className={`min-h-[46px] px-6 sm:px-7 py-2.5 rounded-full font-bold text-sm sm:text-base shadow-xl transition flex items-center justify-center gap-2 cursor-pointer ${
                  isPlaying
                    ? "bg-rose-600 hover:bg-rose-700 text-white"
                    : "bg-[#F5D06C] hover:bg-[#FFF3B8] text-[#2A0E0A]"
                }`}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4 fill-current" />
                )}
                <span>{isPlaying ? "Tạm Dừng" : "Tự Động Tập"}</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectMotionIndex((activeMotionIndex + 1) % totalMotions)}
                className="min-h-[46px] px-5 py-2.5 rounded-full bg-white/8 hover:bg-white/15 text-white border border-white/15 transition flex items-center gap-2 text-sm sm:text-base font-semibold cursor-pointer"
                title="Động tác tiếp theo (Phím mũi tên Phải)"
              >
                <span>Thế Tiếp</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => onSelectMotionIndex(0)}
                disabled={activeMotionIndex === 0}
                className="min-h-[42px] px-3.5 py-2 rounded-full bg-white/5 hover:bg-white/10 text-amber-200 hover:text-white disabled:opacity-35 transition flex items-center gap-1.5 text-xs sm:text-sm cursor-pointer"
                title="Về động tác số 1"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Đầu bài</span>
              </button>

              <select
                value={playbackSpeed}
                onChange={(e) => setPlaybackSpeed(Number(e.target.value))}
                className="min-h-[42px] bg-[#1C100B] border border-white/15 rounded-full px-3.5 py-2 text-xs sm:text-sm font-semibold text-amber-200 focus:outline-none focus:border-[#F5D06C] cursor-pointer"
                aria-label="Tốc độ tự động phát"
              >
                <option value={1500}>Nhịp 1.5s / thế</option>
                <option value={2200}>Nhịp 2.2s / thế</option>
                <option value={3500}>Nhịp 3.5s / thế</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          TẦNG ĐÁY: DẢI PHIM LIÊN HOÀN KHỔ LỚN THOÁNG ĐÃNG (GALLERY TIMELINE)
      ========================================================================= */}
      <div className="pt-6 border-t border-white/10 space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="text-xs sm:text-sm text-amber-200/80 font-medium">
            Tiến trình toàn bài <strong className="text-white">{lesson.title}</strong> ({totalMotions} thế) — Nhấp chọn thế bất kỳ hoặc dùng phím <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-amber-200 font-mono text-xs">←</kbd> <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-amber-200 font-mono text-xs">→</kbd>
          </span>
          <button
            type="button"
            onClick={() => setIsMatrixOpen(true)}
            className="text-xs sm:text-sm font-semibold text-[#F5D06C] hover:text-white flex items-center gap-1.5 transition cursor-pointer"
          >
            <Grid className="w-4 h-4" />
            <span>Xem toàn bộ {totalMotions} thế trên 1 bảng ↗</span>
          </button>
        </div>

        <div
          ref={filmstripContainerRef}
          className="flex items-center gap-3 overflow-x-auto pb-2 pt-1 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-[#140B07] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#F5D06C]/40 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[#F5D06C]"
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
                className={`relative w-16 h-20 sm:w-[70px] sm:h-[88px] rounded-2xl bg-[#FBF9F5] p-1.5 shrink-0 transition-all flex flex-col items-center justify-between border cursor-pointer ${
                  isActive
                    ? "border-[#F5D06C] ring-2 ring-[#F5D06C] shadow-xl scale-105 z-10"
                    : "border-white/20 hover:border-[#F5D06C] opacity-65 hover:opacity-100"
                }`}
              >
                <div className="relative w-full flex-1">
                  <Image
                    src={m.imgUrl}
                    alt={cleanMotionTitle(m.desc) || `Thế ${m.stepNo}`}
                    fill
                    className="object-contain filter martial-filter"
                    sizes="68px"
                  />
                </div>
                <span
                  className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded-md w-full text-center ${
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsMatrixOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl max-h-[88vh] glass-panel rounded-3xl border border-[#F5D06C]/40 shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/10 bg-[#1A0E09]">
              <div className="flex items-center gap-3">
                <Grid className="w-5 h-5 text-[#F5D06C]" />
                <div>
                  <h4 className="font-bold text-lg sm:text-xl text-white font-serif">
                    Bảng Toàn Cảnh {totalMotions} Động Tác • {lesson.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-amber-200/75">
                    Bấm trực tiếp vào tư thế bất kỳ để nhảy tới ngay tức thì
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsMatrixOpen(false)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-[#F5D06C] hover:text-[#2A0E0A] text-amber-200 transition cursor-pointer"
                aria-label="Đóng ma trận động tác"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 sm:p-6 overflow-y-auto flex-1 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-3 scrollbar-thin">
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
                    className={`relative aspect-[3/4] rounded-2xl bg-[#FBF9F5] p-1.5 transition-all flex flex-col items-center justify-between border cursor-pointer group ${
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
                        sizes="80px"
                      />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-800 bg-white/90 px-1.5 py-0.5 rounded w-full text-center truncate">
                      #{m.stepNo}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
