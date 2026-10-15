"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Sparkles,
  Clock,
  CheckCircle2,
  Sliders,
  Maximize2,
  Minimize2,
  Wind,
  Moon,
  Sun,
} from "lucide-react";
import {
  BREATHING_PHASES,
  BREATHING_PRESETS,
  BreathingPhaseGuide,
  BreathingPreset,
  DISCHARGE_STEPS,
} from "@/data/meditationQiGong";
import { zenAudio } from "@/lib/zenAudio";

interface MeditationBreathingGuideProps {
  onOpenTheoryTab?: () => void;
}

export const MeditationBreathingGuide: React.FC<MeditationBreathingGuideProps> = () => {
  // Trạng thái vận hành
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [selectedPresetId, setSelectedPresetId] = useState<string>("standard");
  const [secondsPerPhase, setSecondsPerPhase] = useState<number>(5); // Mặc định 5s theo giáo trình gốc
  const [targetDurationMinutes, setTargetDurationMinutes] = useState<number>(15); // Mặc định 15 phút

  // Vòng đời thì thở: 0: exhale (thì 1), 1: hold_empty (thì 2), 2: inhale (thì 3), 3: hold_full (thì 4)
  const [currentPhaseIndex, setCurrentPhaseIndex] = useState<number>(2); // Khởi đầu bằng Hít vào (thì 3) hoặc Thở ra (thì 1)
  const [phaseSecondsLeft, setPhaseSecondsLeft] = useState<number>(5);
  const [totalSecondsElapsed, setTotalSecondsElapsed] = useState<number>(0);
  const [completedCycles, setCompletedCycles] = useState<number>(0);
  const [isSessionFinished, setIsSessionFinished] = useState<boolean>(false);

  // Âm thanh thiền
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [metronomeTick] = useState<boolean>(false); // Gõ mõ từng giây
  const [isFullscreenMode, setIsFullscreenMode] = useState<boolean>(false);

  // Tham chiếu timer
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentPhase: BreathingPhaseGuide = BREATHING_PHASES[currentPhaseIndex] || BREATHING_PHASES[0];

  // Đồng bộ preset
  const handleSelectPreset = (preset: BreathingPreset) => {
    setSelectedPresetId(preset.id);
    setSecondsPerPhase(preset.secondsPerPhase);
    setPhaseSecondsLeft(preset.secondsPerPhase);
  };

  // Bật/tắt âm thanh
  const handleToggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    zenAudio.setEnabled(next);
    if (next) {
      zenAudio.playSingingBowl(528);
    }
  };

  // Reset toàn bộ phiên tập
  const handleReset = useCallback(() => {
    setIsRunning(false);
    setIsSessionFinished(false);
    setCurrentPhaseIndex(2); // Khởi đầu hít vào để bắt đầu tích cực
    setPhaseSecondsLeft(secondsPerPhase);
    setTotalSecondsElapsed(0);
    setCompletedCycles(0);
  }, [secondsPerPhase]);

  // Âm thanh chuyển thì chuông xoay
  const playPhaseChime = useCallback(
    (phaseIdx: number) => {
      if (!soundEnabled) return;
      try {
        // Tần số năng lượng biến hóa theo từng thì:
        // Thì 3 (Hít vào): 528Hz (Tần số phục hồi sinh lực)
        // Thì 4 (Nín đầy): 432Hz (Tần số hài hòa an định)
        // Thì 1 (Thở ra): 396Hz (Tần số giải phóng ứ trệ, buông xả)
        // Thì 2 (Nín xẹp): 285Hz (Tần số tái tạo tế bào, tịch tịnh)
        const frequencies = [396, 285, 528, 432];
        const freq = frequencies[phaseIdx] || 432;
        zenAudio.playSingingBowl(freq);
      } catch {
        // Safe fallback
      }
    },
    [soundEnabled]
  );

  // Hiệu ứng hoàn tất phiên tập
  const handleFinishSession = useCallback(() => {
    setIsRunning(false);
    setIsSessionFinished(true);
    if (soundEnabled) {
      zenAudio.playSingingBowl(528);
      setTimeout(() => zenAudio.playSingingBowl(432), 1200);
      setTimeout(() => zenAudio.playSingingBowl(639), 2400);
    }
  }, [soundEnabled]);

  // Vòng lặp đếm nhịp từng giây (Engine Thở 4 Thì)
  useEffect(() => {
    if (!isRunning) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = setInterval(() => {
      setTotalSecondsElapsed((prev) => {
        const nextTotal = prev + 1;
        // Kiểm tra đạt mục tiêu thời lượng
        if (nextTotal >= targetDurationMinutes * 60) {
          handleFinishSession();
        }
        return nextTotal;
      });

      setPhaseSecondsLeft((prevLeft) => {
        if (prevLeft <= 1) {
          // Chuyển sang thì kế tiếp
          setCurrentPhaseIndex((prevIdx) => {
            const nextIdx = (prevIdx + 1) % 4;
            // Nếu hoàn tất thì 4 chuyển sang thì 1 -> hoàn thành 1 chu kỳ trọn vẹn
            if (nextIdx === 0) {
              setCompletedCycles((c) => c + 1);
            }
            playPhaseChime(nextIdx);
            return nextIdx;
          });
          return secondsPerPhase;
        } else {
          // Tiếng mõ nhẹ mỗi giây nếu bật metronome
          if (soundEnabled && metronomeTick) {
            zenAudio.playWoodBlock();
          }
          return prevLeft - 1;
        }
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [
    isRunning,
    secondsPerPhase,
    targetDurationMinutes,
    soundEnabled,
    metronomeTick,
    playPhaseChime,
    handleFinishSession,
  ]);

  // Tính tỷ lệ co giãn động của vòng tròn thở
  let circleScale = 0.8;
  if (currentPhase.id === "inhale") {
    // Hít vào: nở từ 0.65 lên 1.05
    circleScale = 0.65 + (0.4 * (secondsPerPhase - phaseSecondsLeft + 1)) / secondsPerPhase;
  } else if (currentPhase.id === "hold_full") {
    // Nín thở đầy: giữ ở mức cực đại 1.05
    circleScale = 1.05;
  } else if (currentPhase.id === "exhale") {
    // Thở ra: co từ 1.05 xuống 0.65
    circleScale = 1.05 - (0.4 * (secondsPerPhase - phaseSecondsLeft + 1)) / secondsPerPhase;
  } else if (currentPhase.id === "hold_empty") {
    // Nín thở xẹp: giữ ở mức nhỏ nhất 0.65
    circleScale = 0.65;
  }

  // Định dạng thời gian mm:ss
  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className={`space-y-8 transition-all ${
        isFullscreenMode
          ? "fixed inset-0 z-50 bg-[#160A06] overflow-y-auto p-4 sm:p-8 flex flex-col justify-center items-center"
          : ""
      }`}
    >
      {/* KHUNG TRỰC QUAN HÓA HƠI THỞ MASTER DISPLAY */}
      <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-[#F5D06C]/40 shadow-2xl relative overflow-hidden w-full max-w-5xl mx-auto">
        
        {/* Nền hiệu ứng hào quang chuyển sắc theo từng thì */}
        <div
          className={`absolute inset-0 opacity-20 transition-all duration-1000 pointer-events-none ${
            currentPhase.id === "inhale"
              ? "bg-radial from-emerald-500/40 via-teal-900/10 to-transparent"
              : currentPhase.id === "hold_full"
              ? "bg-radial from-amber-400/40 via-yellow-900/10 to-transparent"
              : currentPhase.id === "exhale"
              ? "bg-radial from-amber-600/30 via-orange-950/10 to-transparent"
              : "bg-radial from-purple-600/30 via-violet-950/10 to-transparent"
          }`}
        />

        {/* Thanh công cụ đỉnh (Bộ Preset & Nút Điều Khiển Phụ) */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#F5D06C]/20 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[#F5D06C]/20 border border-[#F5D06C]/40 flex items-center justify-center text-[#F5D06C] shadow">
              <Wind className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-serif flex items-center gap-2">
                Trình Luyện Thở 4 Thì Trực Quan
                <span className="hidden sm:inline px-2 py-0.5 rounded-full text-xs font-mono bg-[#F5D06C]/15 text-[#F5D06C] border border-[#F5D06C]/30">
                  Thở Vuông Đan Điền
                </span>
              </h3>
              <p className="text-xs text-amber-200/70">
                Phương pháp nội công Vịnh Xuân của PGS.TS Nguyễn Mạnh Nhâm
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Nút Bật/Tắt Âm Thanh Chuông */}
            <button
              onClick={handleToggleSound}
              className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer ${
                soundEnabled
                  ? "bg-[#F5D06C]/20 text-[#F5D06C] border-[#F5D06C]"
                  : "bg-black/40 text-slate-400 border-white/10 hover:text-white"
              }`}
              title={soundEnabled ? "Tắt âm thanh chuông thiền" : "Bật âm thanh chuông thiền chuyển thì"}
              aria-label="Bật tắt âm thanh chuông"
            >
              {soundEnabled ? <Volume2 className="w-4 h-4 text-[#F5D06C]" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden md:inline">{soundEnabled ? "Chuông: Bật" : "Chuông: Tắt"}</span>
            </button>

            {/* Nút Toàn Màn Hình */}
            <button
              onClick={() => setIsFullscreenMode(!isFullscreenMode)}
              className="p-2 rounded-xl bg-black/40 border border-white/10 text-amber-200/70 hover:text-white transition cursor-pointer"
              title={isFullscreenMode ? "Thoát toàn màn hình" : "Toàn màn hình chuyên chú"}
              aria-label="Toàn màn hình thiền"
            >
              {isFullscreenMode ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* KHÔNG GIAN TRUNG TÂM: VÒNG TRÒN NĂNG LƯỢNG THỞ ĐỘNG (BREATH MANDALA) */}
        <div className="relative z-10 py-10 sm:py-16 flex flex-col items-center justify-center min-h-[380px] sm:min-h-[440px]">
          
          {/* Vòng Tròn Năng Lượng Đa Tầng Co Giãn Tự Động */}
          <div className="relative flex items-center justify-center w-64 sm:w-80 h-64 sm:h-80">
            
            {/* Vòng tĩnh bên ngoài (Thước đo quỹ đạo) */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#F5D06C]/20 animate-[spin_60s_linear_infinite]" />

            {/* Vòng hào quang phát sáng đan điền */}
            <div
              className={`absolute inset-4 rounded-full transition-transform duration-1000 ease-in-out filter blur-xl opacity-60 ${currentPhase.colorTheme.glow}`}
              style={{
                transform: `scale(${circleScale})`,
                backgroundColor: currentPhase.colorTheme.circleColor,
              }}
            />

            {/* Quả cầu năng lượng trung tâm (Chuyển động co dãn theo giây) */}
            <div
              className={`relative z-10 w-48 sm:w-56 h-48 sm:h-56 rounded-full flex flex-col items-center justify-center p-4 text-center transition-all duration-1000 ease-in-out border-2 shadow-2xl backdrop-blur-md ${currentPhase.colorTheme.border} ${currentPhase.colorTheme.bg}`}
              style={{
                transform: `scale(${circleScale})`,
              }}
            >
              {/* Icon biểu tượng thì thở */}
              <div className="mb-1 text-amber-200/90">
                {currentPhase.id === "inhale" && <Sun className="w-6 h-6 text-emerald-400 animate-pulse" />}
                {currentPhase.id === "hold_full" && <Sparkles className="w-6 h-6 text-[#F5D06C] animate-spin" />}
                {currentPhase.id === "exhale" && <Wind className="w-6 h-6 text-amber-400" />}
                {currentPhase.id === "hold_empty" && <Moon className="w-6 h-6 text-purple-400" />}
              </div>

              {/* Tên thì ngắn */}
              <span className={`text-xs font-mono font-bold uppercase tracking-widest ${currentPhase.colorTheme.text}`}>
                {currentPhase.shortTitle}
              </span>

              {/* Bộ đếm giây to rõ đan điền */}
              <div className="text-4xl sm:text-5xl font-black font-mono text-white tracking-tight my-1">
                {phaseSecondsLeft}
                <span className="text-xs sm:text-sm font-normal text-amber-200/60 ml-1">/ {secondsPerPhase}s</span>
              </div>

              {/* Hướng dẫn chuyển động bụng */}
              <span className="text-xs sm:text-sm text-amber-100/90 font-medium px-2 leading-tight">
                {currentPhase.bellyAction.split("như")[0]}
              </span>
            </div>

            {/* Chỉ báo 4 thì quanh vòng tròn */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-between text-xs font-mono text-amber-200/75">
              <span className={`absolute left-0 -translate-x-1 sm:-translate-x-3 px-2 py-0.5 rounded ${currentPhaseIndex === 0 ? "text-[#F5D06C] font-bold bg-[#F5D06C]/10" : ""}`}>
                1. Thở Ra
              </span>
              <span className={`absolute top-0 -translate-y-2 px-2 py-0.5 rounded ${currentPhaseIndex === 1 ? "text-purple-300 font-bold bg-purple-500/10" : ""}`}>
                2. Nín Xẹp
              </span>
              <span className={`absolute right-0 translate-x-1 sm:translate-x-3 px-2 py-0.5 rounded ${currentPhaseIndex === 2 ? "text-emerald-300 font-bold bg-emerald-500/10" : ""}`}>
                3. Hít Vào
              </span>
              <span className={`absolute bottom-0 translate-y-2 px-2 py-0.5 rounded ${currentPhaseIndex === 3 ? "text-[#F5D06C] font-bold bg-amber-500/10" : ""}`}>
                4. Nín Đầy
              </span>
            </div>
          </div>

          {/* DÒNG HƯỚNG DẪN QUÁN TƯỞNG THỜI GIAN THỰC (REAL-TIME VISUALIZATION CUE) */}
          <div className="mt-8 max-w-xl text-center space-y-2 px-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 border border-[#F5D06C]/30 text-xs text-[#F5D06C]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tâm Pháp Quán Tưởng • {currentPhase.title}</span>
            </div>
            <p className="text-sm sm:text-base text-amber-100 font-serif italic leading-relaxed">
              &quot;{currentPhase.mindAction}&quot;
            </p>
            <p className="text-xs text-amber-200/60 leading-normal">
              {currentPhase.action}
            </p>
          </div>

        </div>

        {/* BẢNG ĐIỀU KHIỂN CHÍNH (MASTER CONTROLLER & TRACKER) */}
        <div className="relative z-10 border-t border-[#F5D06C]/20 pt-6 space-y-6">
          
          {/* Dãy nút tương tác chính: Bắt đầu / Tạm dừng / Đặt lại */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                if (!isRunning) {
                  setIsRunning(true);
                  if (soundEnabled) {
                    zenAudio.playSingingBowl(528);
                  }
                } else {
                  setIsRunning(false);
                }
              }}
              className={`min-h-[50px] px-8 py-3 rounded-2xl font-bold text-sm sm:text-base shadow-xl transition-all flex items-center gap-2.5 cursor-pointer ${
                isRunning
                  ? "bg-rose-600 hover:bg-rose-700 text-white shadow-rose-900/30 scale-105"
                  : "bg-[#F5D06C] hover:bg-[#FFF3B8] text-[#2A0E0A] shadow-[#F5D06C]/20 hover:scale-105"
              }`}
              aria-label={isRunning ? "Tạm dừng luyện thở" : "Bắt đầu chu kỳ luyện thở"}
            >
              {isRunning ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
              <span>{isRunning ? "Tạm Dừng Luyện Thở" : "Bắt Đầu Luyện Thở"}</span>
            </button>

            <button
              onClick={handleReset}
              className="min-h-[50px] px-5 py-3 rounded-2xl bg-[#20150F] hover:bg-[#3D291F] border border-[#F5D06C]/30 text-amber-200 hover:text-white transition flex items-center gap-2 text-sm font-semibold cursor-pointer"
              title="Đặt lại từ đầu"
              aria-label="Đặt lại chu kỳ"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Đặt Lại</span>
            </button>
          </div>

          {/* Dải Thống Kê Tiến Trình: Chu Kỳ, Thời Gian Đã Tập, Mục Tiêu */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-center space-y-0.5">
              <span className="text-xs sm:text-sm text-amber-200/60 uppercase font-mono">Chu kỳ hoàn tất</span>
              <div className="text-xl sm:text-2xl font-bold font-mono text-[#F5D06C]">
                {completedCycles} <span className="text-xs font-normal text-slate-400">vòng</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-center space-y-0.5">
              <span className="text-xs sm:text-sm text-amber-200/60 uppercase font-mono">Thời gian đã thiền</span>
              <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
                {formatTime(totalSecondsElapsed)}
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-center space-y-0.5">
              <span className="text-xs sm:text-sm text-amber-200/60 uppercase font-mono">Mục tiêu buổi tập</span>
              <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                {targetDurationMinutes} <span className="text-xs font-normal text-slate-400">phút</span>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-black/40 border border-white/10 text-center space-y-0.5">
              <span className="text-xs sm:text-sm text-amber-200/60 uppercase font-mono">Độ dài mỗi thì</span>
              <div className="text-xl sm:text-2xl font-bold font-mono text-amber-300">
                {secondsPerPhase}s <span className="text-xs font-normal text-slate-400">/ thì</span>
              </div>
            </div>
          </div>

          {/* Cài Đặt Nhịp Thở & Thời Lượng (Presets) */}
          <div className="p-4 sm:p-5 rounded-2xl bg-black/30 border border-[#F5D06C]/20 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F5D06C] flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5" />
                Lựa Chọn Nhịp Thở Vuông (Độ Dài Từng Thì):
              </span>
              <span className="text-xs text-amber-200/60 italic">
                *Các thì luôn bằng nhau theo nguyên lý Thở Vuông
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {BREATHING_PRESETS.map((preset) => {
                const isSelected = selectedPresetId === preset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => handleSelectPreset(preset)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-[#F5D06C]/15 border-[#F5D06C] shadow-md shadow-[#F5D06C]/10"
                        : "bg-[#20150F]/70 border-white/10 hover:border-[#F5D06C]/40 text-slate-300"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold mb-1">
                        <span className={isSelected ? "text-[#F5D06C]" : "text-white"}>{preset.name}</span>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#F5D06C]" />}
                      </div>
                      <p className="text-xs text-amber-200/70 leading-relaxed mb-2 line-clamp-2">
                        {preset.description}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-emerald-400/90 font-medium">
                      Chu kỳ: {preset.secondsPerPhase * 4}s
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Tùy Chỉnh Mục Tiêu Thời Lượng */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-200/70" />
                <span className="text-xs text-amber-200/80 font-medium">Thời lượng buổi thiền:</span>
              </div>
              <div className="flex items-center gap-1.5 flex-wrap">
                {[5, 10, 15, 30, 45].map((mins) => (
                  <button
                    key={mins}
                    onClick={() => setTargetDurationMinutes(mins)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
                      targetDurationMinutes === mins
                        ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C]"
                        : "bg-black/40 text-amber-200/70 border-white/10 hover:text-white"
                    }`}
                  >
                    {mins} Phút {mins === 45 ? "(1 Tuần Hương)" : ""}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* THÔNG BÁO HOÀN THÀNH BUỔI THIỀN & HƯỚNG DẪN XẢ THIỀN */}
      {isSessionFinished && (
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border-2 border-emerald-500/50 shadow-2xl bg-emerald-950/40 space-y-4 animate-fadeIn max-w-5xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-300">
              <CheckCircle2 className="w-6 h-6" />
            </span>
            <div>
              <h4 className="text-lg font-bold text-emerald-200 font-serif">
                Chúc Mừng Bạn Đã Hoàn Thành Trọn Vẹn Buổi Luyện Thở!
              </h4>
              <p className="text-xs text-emerald-300/80">
                Đã hoàn tất {completedCycles} chu kỳ ({formatTime(totalSecondsElapsed)}). Hãy tiến hành Xả Thiền theo đúng quy trình để khí huyết lưu thông hài hòa.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            {DISCHARGE_STEPS.map((step) => (
              <div key={step.step} className="p-3.5 rounded-xl bg-black/40 border border-emerald-500/20 space-y-1">
                <span className="text-xs font-bold text-emerald-400 font-mono">
                  Bước {step.step}: {step.title}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
