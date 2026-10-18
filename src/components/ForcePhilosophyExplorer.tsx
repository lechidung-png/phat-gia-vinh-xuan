"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Zap,
  Wind,
  Activity,
  Hand,
  Footprints,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Maximize2,
  X,
  BookOpen,
  Compass,
  Flame,
  ShieldCheck,
  ArrowRight,
  Layers,
  GraduationCap,
} from "lucide-react";
import {
  FORCE_PHILOSOPHY_HERO,
  FIVE_KINETIC_QI_NODES,
  BRUTE_VS_INTERNAL_COMPARISON,
  LIMB_FORCE_SECRETS,
  UNEXPLAINED_QI_PHENOMENA,
  FOUR_SELF_EXPERIMENTS,
  FORCE_ACADEMIC_BIBLIOGRAPHY,
  KineticQiNode,
} from "@/data/forcePhilosophy";

interface ForcePhilosophyExplorerProps {
  onOpenDojoLesson?: (lessonId: string) => void;
}

export const ForcePhilosophyExplorer: React.FC<ForcePhilosophyExplorerProps> = ({
  onOpenDojoLesson,
}) => {
  // Trạm đang chọn trong sơ đồ 5 trạm (0..4)
  const [selectedStationIndex, setSelectedStationIndex] = useState<number>(0);
  // Chế độ mô phỏng mạch lực: "connected" (Tùng tĩnh thông suốt 100%) vs "blocked" (Gồng vai đứt mạch lực tại Trạm 4)
  const [simulationMode, setSimulationMode] = useState<"connected" | "blocked">("connected");
  // Chế độ biểu đồ vật lý & tuổi tác: "impulse" (Xung lực Thốn kình F(t)) vs "longevity" (Đường cong sức mạnh 20-80 tuổi)
  const [chartType, setChartType] = useState<"impulse" | "longevity">("impulse");
  // Bộ lọc chuyên đề Tay / Chân
  const [limbFilter, setLimbFilter] = useState<"all" | "hand" | "foot">("all");
  // Chuyên khảo Khí công đang chọn
  const [activeQiId, setActiveQiId] = useState<string>(UNEXPLAINED_QI_PHENOMENA[0].id);
  // Lightbox phóng to ảnh tư liệu
  const [zoomImg, setZoomImg] = useState<{ src: string; title: string; caption?: string } | null>(null);

  const activeNode: KineticQiNode =
    FIVE_KINETIC_QI_NODES[selectedStationIndex] || FIVE_KINETIC_QI_NODES[0];

  const filteredLimbSecrets = LIMB_FORCE_SECRETS.filter((item) =>
    limbFilter === "all" ? true : item.category === limbFilter
  );

  const activeQiPhenomenon =
    UNEXPLAINED_QI_PHENOMENA.find((item) => item.id === activeQiId) ||
    UNEXPLAINED_QI_PHENOMENA[0];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomImg(null);
    };
    if (zoomImg) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomImg]);

  // Tọa độ các trạm trên sơ đồ SVG giải phẫu tương tác (viewBox 0 0 600 660)
  const svgStationCoords = [
    { station: 1, x: 255, y: 605, short: "1. Bàn Chân & Dũng Tuyền (K1)" },
    { station: 2, x: 280, y: 470, short: "2. Vòm Khóa Gối Kiềm Dương" },
    { station: 3, x: 250, y: 345, short: "3. Hạ Đan Điền & Cột Sống" },
    { station: 4, x: 255, y: 210, short: "4. Trầm Kiên & Trửu Để Lực" },
    { station: 5, x: 455, y: 205, short: "5. Lao Cung & Thốn Kình" },
  ];

  return (
    <div className="space-y-12 sm:space-y-16 animate-fadeIn">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER: TUYÊN NGÔN LÝ THUYẾT & TRIẾT LÝ DÙNG LỰC VỊNH XUÂN         */}
      {/* ========================================================================= */}
      <section className="relative rounded-3xl glass-panel p-6 sm:p-10 lg:p-12 border border-[#F5D06C]/35 overflow-hidden shadow-2xl bg-gradient-to-br from-[#1C0F0A] via-[#130A06] to-[#1F110B]">
        <div className="-top-10 -right-8 select-none pointer-events-none opacity-5 text-[180px] font-serif font-black text-[#F5D06C] leading-none absolute">
          勁氣
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5D06C]/15 border border-[#F5D06C]/40 text-[#F5D06C] text-xs sm:text-sm font-bold tracking-wider uppercase">
              <Zap className="w-4 h-4" />
              <span>{FORCE_PHILOSOPHY_HERO.eyebrow}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-serif tracking-tight leading-tight gold-gradient">
              {FORCE_PHILOSOPHY_HERO.title}
            </h1>

            <p className="text-base sm:text-lg text-[#FAF6F0] leading-relaxed">
              {FORCE_PHILOSOPHY_HERO.subtitle}
            </p>

            {/* Khẩu quyết đối xứng Đông - Tây */}
            <div className="p-5 rounded-2xl bg-[#180D08]/90 border-l-4 border-[#F5D06C] space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-mono font-bold text-[#F5D06C] tracking-wider uppercase">
                  {FORCE_PHILOSOPHY_HERO.hanNom}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-200 text-xs sm:text-sm font-serif italic">
                  &ldquo;Structure before Speed&rdquo;
                </span>
              </div>
              <p className="text-lg sm:text-xl font-serif font-bold text-white">
                &ldquo;{FORCE_PHILOSOPHY_HERO.coreMotto}&rdquo;
              </p>
              <p className="text-xs sm:text-sm text-amber-200/90 font-mono pt-1">
                📚 Nguồn trích dẫn gốc: {FORCE_PHILOSOPHY_HERO.coreMottoSource}
              </p>
            </div>
          </div>

          {/* Right 5 Cols: Bức Đồ Hình Giải Phẫu Cơ Sinh Học & Khí Lực */}
          <div className="lg:col-span-5">
            <div
              onClick={() =>
                setZoomImg({
                  src: "/assets/images/fundamentals/wing_chun_kinetic_qi_diagram.jpg",
                  title: "Đồ Hình Giải Phẫu Cơ Sinh Học & Kinh Mạch Khí Lực Vịnh Xuân Quyền",
                  caption:
                    "Sự giao thoa giữa Chuỗi Động Học Khép Kín (Phản lực mặt đất F_GRF -> Vòm gối -> Khung chậu -> Trầm kiên -> Trửu để lực) và Mạch Khí Đông Y (Huyệt Dũng Tuyền K1 -> Hạ Đan Điền -> Hỏa Long Mạch Đốc -> Huyệt Lao Cung PC8).",
                })
              }
              className="group relative rounded-2xl overflow-hidden border-2 border-[#F5D06C]/40 hover:border-[#F5D06C] shadow-2xl cursor-pointer bg-[#0F0805] transition-all"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/assets/images/fundamentals/wing_chun_kinetic_qi_diagram.jpg"
                  alt="Đồ hình Cơ chế dùng lực và Khí lực Vịnh Xuân Quyền"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
              </div>
              <div className="p-3.5 bg-[#140A06]/95 border-t border-white/10 flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-medium text-amber-100">
                  Sơ đồ tổng thể 5 Trạm Truyền Lực &amp; Dẫn Khí
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#F5D06C]">
                  <Maximize2 className="w-4 h-4" />
                  Phóng to
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Section Anchor Pills */}
        <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-2.5">
          <span className="text-xs sm:text-sm font-bold text-amber-200/80 uppercase tracking-wider mr-2">
            Chuyên mục trọng tâm:
          </span>
          <a
            href="#kinetic-5-stations"
            className="px-4 py-2 rounded-full bg-white/8 hover:bg-[#F5D06C] text-amber-100 hover:text-[#140A06] text-xs sm:text-sm font-semibold transition-all"
          >
            1. Mô Phỏng 5 Trạm Từ Chân Lên Tay
          </a>
          <a
            href="#physics-longevity-charts"
            className="px-4 py-2 rounded-full bg-white/8 hover:bg-[#F5D06C] text-amber-100 hover:text-[#140A06] text-xs sm:text-sm font-semibold transition-all"
          >
            2. Đồ Thị Vật Lý Thốn Kình &amp; Độ Tuổi
          </a>
          <a
            href="#limb-force-secrets"
            className="px-4 py-2 rounded-full bg-white/8 hover:bg-[#F5D06C] text-amber-100 hover:text-[#140A06] text-xs sm:text-sm font-semibold transition-all"
          >
            3. Cơ Chế Dùng Lực Tay &amp; Chân (6 Bí Quyết)
          </a>
          <a
            href="#eastern-qi-mysteries"
            className="px-4 py-2 rounded-full bg-white/8 hover:bg-[#F5D06C] text-amber-100 hover:text-[#140A06] text-xs sm:text-sm font-semibold transition-all"
          >
            4. Khí Lực &amp; Những Điều Khoa Học Chưa Giải Mã Hết
          </a>
          <a
            href="#self-experiments"
            className="px-4 py-2 rounded-full bg-white/8 hover:bg-[#F5D06C] text-amber-100 hover:text-[#140A06] text-xs sm:text-sm font-semibold transition-all"
          >
            5. 4 Bài Tự Thực Nghiệm
          </a>
          <a
            href="#academic-bibliography"
            className="px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/40 hover:bg-[#F5D06C] text-emerald-200 hover:text-[#140A06] text-xs sm:text-sm font-semibold transition-all"
          >
            6. Nguồn Trích Dẫn Khoa Học ([1]–[10])
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MÔ HÌNH TƯƠNG TÁC 5 TRẠM: VÌ SAO LỰC TỪ CHÂN CHẠY LÊN TAY ĐƯỢC?        */}
      {/* ========================================================================= */}
      <section id="kinetic-5-stations" className="space-y-8 scroll-mt-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-white/10 pb-5">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[#F5D06C] text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Activity className="w-4 h-4" />
              <span>Chương I • Giải Phẫu Chuỗi Động Học &amp; Kinh Mạch 5 Trạm</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif gold-gradient">
              Vì Sao Đứng Tấn Tại Chỗ Mà Lực Từ Chân Lại Chạy Lên Tay Được?
            </h2>
            <p className="text-sm sm:text-base text-amber-100/85 leading-relaxed">
              Bấm vào từng <strong>Trạm (1 → 5)</strong> trên sơ đồ tương tác hoặc chuyển đổi giữa chế độ{" "}
              <strong className="text-emerald-400">Thông Mạch Tùng Tĩnh (100%)</strong> và{" "}
              <strong className="text-rose-400">Lỗi Gồng Vai Đứt Mạch (Chỉ còn 15% sức tay)</strong> để thấy rõ cơ chế truyền lực kèm trích dẫn nguồn.
            </p>
          </div>

          {/* Nút chuyển chế độ mô phỏng Thông Mạch vs Đứt Mạch */}
          <div className="flex flex-wrap items-center gap-2 bg-[#160B07] p-1.5 rounded-2xl border border-white/15 shrink-0">
            <button
              onClick={() => setSimulationMode("connected")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                simulationMode === "connected"
                  ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/25"
                  : "text-amber-100/80 hover:text-white"
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Tùng Tĩnh Thông Mạch (100% Kình)</span>
            </button>
            <button
              onClick={() => {
                setSimulationMode("blocked");
                setSelectedStationIndex(3); // Nhảy tới Trạm 4 (Vai & Cùi chỏ) để giải thích điểm nghẽn
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                simulationMode === "blocked"
                  ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30"
                  : "text-amber-100/80 hover:text-white"
              }`}
            >
              <AlertTriangle className="w-4 h-4" />
              <span>Mô Phỏng Lỗi Gồng Vai (Đứt Mạch)</span>
            </button>
          </div>
        </div>

        {/* Khung Chính 12 Cột: Cột Trái (5 Cột) Sơ Đồ SVG Tương Tác + Cột Phải (7 Cột) Chi Tiết Trạm */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 5 COLS: Interactive SVG Kinetic & Qi Body Diagram */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-5 sm:p-6 border border-[#F5D06C]/30 bg-[#120906] space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold font-serif text-[#FAF6F0]">
                  Sơ Đồ Truyền Lực &amp; Dẫn Khí 5 Trạm
                </h3>
                <p className="text-xs sm:text-sm text-amber-200/80">
                  Nhấp vào các nút tròn số 1–5 trên cơ thể để mổ xẻ cơ chế
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  simulationMode === "connected"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                }`}
              >
                {simulationMode === "connected" ? "Mạch Khép Kín 100%" : "Đứt Mạch Ở Vai (Trạm 4)"}
              </span>
            </div>

            {/* Interactive SVG Canvas */}
            <div className="relative w-full aspect-[600/660] bg-gradient-to-b from-[#1A0E09] to-[#0D0604] rounded-2xl border border-white/10 overflow-hidden">
              <svg
                viewBox="0 0 600 660"
                className="w-full h-full select-none"
                role="img"
                aria-label="Sơ đồ tương tác 5 trạm truyền lực và dẫn khí từ bàn chân lên nắm đấm"
              >
                <defs>
                  <radialGradient id="dantianGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#34D399" stopOpacity="0.9" />
                    <stop offset="60%" stopColor="#F5D06C" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#F5D06C" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="punchShockwave" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#F5D06C" stopOpacity="0.95" />
                    <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Lưới tọa độ Tý Ngọ Tuyến nền */}
                <line x1="250" y1="30" x2="250" y2="630" stroke="#F5D06C" strokeOpacity="0.18" strokeDasharray="6 6" strokeWidth="1.5" />
                <line x1="60" y1="620" x2="540" y2="620" stroke="#F5D06C" strokeOpacity="0.35" strokeWidth="2" />
                <text x="380" y="645" fill="#F5D06C" fontSize="13" fontWeight="bold" opacity="0.85">
                  MẶT ĐẤT (PHẢN LỰC F_GRF)
                </text>

                {/* Phác họa Hình thái Giải phẫu Võ sư Đứng Tấn Kiềm Dương Phóng Quyền */}
                <circle cx="250" cy="115" r="34" fill="#2A1810" stroke="#F5D06C" strokeWidth="2" strokeOpacity="0.6" />
                <path d="M238 148 L238 175 L265 175 L265 148 Z" fill="#2A1810" stroke="#F5D06C" strokeWidth="1.5" strokeOpacity="0.5" />

                {/* Thân người & Cột sống */}
                <path
                  d="M210 175 Q195 260 205 355 L285 355 Q295 260 280 175 Z"
                  fill="#23130D"
                  stroke="#F5D06C"
                  strokeWidth="2"
                  strokeOpacity="0.55"
                />

                {/* Chân sau & Chân trước tạo Vòm Chữ A Nhị Tự Kiềm Dương */}
                <path
                  d="M215 355 L195 480 L175 605 L215 615 L235 485 L250 385 Z"
                  fill="#1E100B"
                  stroke="#F5D06C"
                  strokeWidth="1.8"
                  strokeOpacity="0.45"
                />
                <path
                  d="M250 355 L295 470 L255 605 L305 612 L330 470 L285 355 Z"
                  fill="#28150E"
                  stroke="#F5D06C"
                  strokeWidth="2"
                  strokeOpacity="0.65"
                />

                {/* Cánh tay phóng Nhật Tự Xung Quyền */}
                <path
                  d="M255 195 L325 255 L445 205 L445 182 L330 225 L268 180 Z"
                  fill="#2E1910"
                  stroke="#F5D06C"
                  strokeWidth="2"
                  strokeOpacity="0.7"
                />
                <rect x="442" y="178" width="32" height="38" rx="8" fill="#F5D06C" fillOpacity="0.25" stroke="#F5D06C" strokeWidth="2.5" />

                {/* 1. LUỒNG CƠ SINH HỌC (MÀU VÀNG KIM #F5D06C): Bàn chân -> Gối -> Khung chậu -> Vai */}
                <path
                  d="M255 605 C270 545, 290 500, 280 470 C270 430, 255 390, 250 345 C245 295, 248 250, 255 210"
                  fill="none"
                  stroke="#F5D06C"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray="10 5"
                />

                {/* Đoạn từ Vai (Trạm 4) ra Nắm đấm (Trạm 5): Phụ thuộc vào chế độ Tùng Tĩnh hay Gồng Vai */}
                {simulationMode === "connected" ? (
                  <>
                    <path
                      d="M255 210 L328 242 L455 198"
                      fill="none"
                      stroke="#F5D06C"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M265 605 C282 540, 298 495, 288 470 C278 425, 260 390, 250 345 C235 290, 238 245, 255 210 L330 232 L455 198"
                      fill="none"
                      stroke="#34D399"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <circle cx="468" cy="197" r="48" fill="url(#punchShockwave)" />
                    <path
                      d="M490 155 Q525 197 490 240"
                      fill="none"
                      stroke="#F5D06C"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <path
                      d="M508 140 Q552 197 508 255"
                      fill="none"
                      stroke="#34D399"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeDasharray="4 4"
                    />
                    <text x="395" y="95" fill="#34D399" fontSize="13" fontWeight="bold">
                      ⚡ 100% THỐN KÌNH BỘC PHÁT
                    </text>
                  </>
                ) : (
                  <>
                    <path
                      d="M255 210 L328 242 L455 198"
                      fill="none"
                      stroke="#F87171"
                      strokeWidth="2.5"
                      strokeDasharray="4 8"
                      strokeOpacity="0.6"
                    />
                    <circle cx="255" cy="210" r="32" fill="#DC2626" fillOpacity="0.3" stroke="#F87171" strokeWidth="2.5" />
                    <line x1="238" y1="193" x2="272" y2="227" stroke="#FCA5A5" strokeWidth="4" strokeLinecap="round" />
                    <line x1="272" y1="193" x2="238" y2="227" stroke="#FCA5A5" strokeWidth="4" strokeLinecap="round" />
                    <rect x="290" y="130" width="275" height="44" rx="8" fill="#450A0A" stroke="#F87171" strokeWidth="1.5" />
                    <text x="302" y="149" fill="#FCA5A5" fontSize="12" fontWeight="bold">
                      ✕ GỒNG VAI = ĐỨT MẠCH LỰC TỪ CHÂN!
                    </text>
                    <text x="302" y="166" fill="#FECACA" fontSize="11">
                      Nắm đấm chỉ còn ~15% sức cơ bắp cánh tay
                    </text>
                  </>
                )}

                {/* Quả cầu Nội Khí tại Hạ Đan Điền (Trạm 3) */}
                <circle cx="250" cy="345" r="36" fill="url(#dantianGlow)" />

                {/* Mũi tên Phản lực mặt đất F_GRF tại bàn chân */}
                <path d="M235 648 L235 615 M228 623 L235 613 L242 623" stroke="#F5D06C" strokeWidth="2.5" fill="none" />
                <path d="M275 648 L275 615 M268 623 L275 613 L282 623" stroke="#34D399" strokeWidth="2.5" fill="none" />

                {/* Vẽ 5 Nút Trạm Tương Tác (Interactive Nodes 1..5) */}
                {svgStationCoords.map((pt, idx) => {
                  const isSelected = selectedStationIndex === idx;
                  return (
                    <g
                      key={pt.station}
                      onClick={() => setSelectedStationIndex(idx)}
                      className="cursor-pointer"
                    >
                      {isSelected && (
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r="24"
                          fill="none"
                          stroke="#F5D06C"
                          strokeWidth="2.5"
                          strokeDasharray="4 3"
                        />
                      )}
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={isSelected ? "16" : "13"}
                        fill={isSelected ? "#F5D06C" : "#1A0E09"}
                        stroke={isSelected ? "#FFFFFF" : "#F5D06C"}
                        strokeWidth="2.5"
                      />
                      <text
                        x={pt.x}
                        y={pt.y + 5}
                        textAnchor="middle"
                        fill={isSelected ? "#140A06" : "#F5D06C"}
                        fontSize="14"
                        fontWeight="bold"
                      >
                        {pt.station}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Chú giải 2 luồng lực trên sơ đồ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-[#1C100B] border border-[#F5D06C]/30 flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-[#F5D06C] shrink-0" />
                <div className="text-xs sm:text-sm">
                  <strong className="text-[#F5D06C] block">Luồng Cơ Sinh Học (Tây Y)</strong>
                  <span className="text-amber-100/80">Phản lực đất → Khớp → Mạc cơ</span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-[#1C100B] border border-emerald-500/30 flex items-center gap-3">
                <span className="w-4 h-4 rounded-full bg-emerald-400 shrink-0" />
                <div className="text-xs sm:text-sm">
                  <strong className="text-emerald-300 block">Mạch Nội Khí (Đông Y)</strong>
                  <span className="text-amber-100/80">Dũng Tuyền → Đan Điền → Lao Cung</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT 7 COLS: Step-by-Step Selector & Deep Analysis of Selected Station */}
          <div className="lg:col-span-7 space-y-6">
            {/* Thanh chọn 5 Trạm ngang */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {FIVE_KINETIC_QI_NODES.map((node, idx) => {
                const isSelected = selectedStationIndex === idx;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedStationIndex(idx)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "bg-[#F5D06C] text-[#140A06] border-[#F5D06C] font-bold shadow-lg shadow-[#F5D06C]/20"
                        : "bg-[#1A0E09] text-amber-100 border-white/15 hover:border-[#F5D06C]/60"
                    }`}
                  >
                    <span
                      className={`text-xs font-mono uppercase ${
                        isSelected ? "text-amber-950 font-extrabold" : "text-[#F5D06C]"
                      }`}
                    >
                      Trạm {node.step}/5
                    </span>
                    <span className="text-xs sm:text-sm font-bold mt-1 line-clamp-2">
                      {node.bodyPart.replace(/^Trạm \d:\s*/, "")}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Hộp Nội Dung Chuyên Sâu Của Trạm Đang Chọn */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#F5D06C]/40 bg-[#160C08] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-[#F5D06C] text-[#140A06] text-xs sm:text-sm font-extrabold">
                      TRẠM {activeNode.step} / 5
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#F5D06C]">
                      {activeNode.hanNom}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-serif text-white mt-2">
                    {activeNode.bodyPart}
                  </h3>
                  <p className="text-sm sm:text-base text-amber-200/90 mt-1">
                    <strong>Giải phẫu &amp; Huyệt đạo:</strong> {activeNode.acupointOrAnatomy} •{" "}
                    <span className="text-emerald-300 font-semibold">{activeNode.shortRole}</span>
                  </p>
                </div>

                {/* Nút chuyển Trạm Tiếp Theo */}
                <button
                  onClick={() =>
                    setSelectedStationIndex((prev) =>
                      prev < FIVE_KINETIC_QI_NODES.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="self-start sm:self-auto px-4 py-2.5 rounded-xl bg-white/10 hover:bg-[#F5D06C] text-amber-100 hover:text-[#140A06] text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
                >
                  <span>Trạm tiếp theo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* 2 Cột Đối Chiếu: Khoa học Cơ sinh học Phương Tây vs Nội công Kinh mạch Phương Đông */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Cột 1: Cơ sinh học & Vật lý */}
                <div className="p-5 rounded-2xl bg-[#1F110B] border border-[#F5D06C]/35 space-y-3">
                  <div className="flex items-center gap-2 text-[#F5D06C] text-xs sm:text-sm font-bold uppercase tracking-wider">
                    <Activity className="w-4 h-4" />
                    <span>1. Cơ Sinh Học: {activeNode.biomechanicsTitle}</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#FAF6F0] leading-relaxed">
                    {activeNode.biomechanicsMechanism}
                  </p>
                  <div className="p-3 rounded-xl bg-black/40 border border-[#F5D06C]/25 text-xs sm:text-sm font-mono text-amber-200">
                    📐 {activeNode.physicsFormulaOrPrinciple}
                  </div>
                </div>

                {/* Cột 2: Nội công & Khí mạch Phương Đông */}
                <div className="p-5 rounded-2xl bg-[#111C16] border border-emerald-500/35 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
                    <Wind className="w-4 h-4" />
                    <span>2. Nội Khí Đông Y: {activeNode.easternQiTitle}</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#FAF6F0] leading-relaxed">
                    {activeNode.easternQiMechanism}
                  </p>
                  <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/25 text-xs sm:text-sm text-emerald-200 font-serif italic">
                    📜 &ldquo;{activeNode.canonicalBookQuote}&rdquo;
                    <span className="block not-italic font-mono text-xs text-emerald-300/90 mt-1">
                      — {activeNode.bookPageRef}
                    </span>
                  </div>
                </div>
              </div>

              {/* Cảnh báo Điểm Nghẽn + Ảnh Sách Gốc Đối Chứng */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                <div className="md:col-span-7 p-5 rounded-2xl bg-rose-950/35 border border-rose-500/40 space-y-2">
                  <div className="flex items-center gap-2 text-rose-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4" />
                    <span>Vì sao lực bị đứt nghẽn tại Trạm {activeNode.step}? (Lỗi thường gặp)</span>
                  </div>
                  <p className="text-sm sm:text-base text-rose-100 leading-relaxed">
                    {activeNode.whyForceBreaks}
                  </p>
                </div>

                <div className="md:col-span-5">
                  <div
                    onClick={() =>
                      setZoomImg({
                        src: activeNode.bookImg,
                        title: activeNode.bodyPart,
                        caption: activeNode.bookImgCaption,
                      })
                    }
                    className="group rounded-2xl overflow-hidden border border-[#F5D06C]/40 bg-[#FBF9F5] p-3 cursor-pointer hover:border-[#F5D06C] transition-all"
                  >
                    <div className="relative h-36 w-full">
                      <Image
                        src={activeNode.bookImg}
                        alt={activeNode.bookImgCaption}
                        fill
                        className="object-contain martial-filter group-hover:scale-105 transition-transform"
                        sizes="(max-width: 768px) 100vw, 280px"
                      />
                    </div>
                    <p className="text-xs text-amber-950 font-serif font-bold text-center mt-2 line-clamp-2">
                      📖 {activeNode.bookImgCaption} (Phóng to)
                    </p>
                  </div>
                </div>
              </div>

              {/* Khối Trích Dẫn Nguồn Học Thuật Cho Trạm Này */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                <span className="text-xs font-bold uppercase text-[#F5D06C] flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" /> Nguồn Trích Dẫn Khoa Học &amp; Giáo Trình Cho Trạm {activeNode.step}:
                </span>
                <ul className="space-y-1 text-xs sm:text-sm text-amber-100/90 font-mono">
                  {activeNode.scientificCitations.map((cit, cIdx) => (
                    <li key={cIdx}>• {cit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. ĐỒ THỊ VẬT LÝ THỐN KÌNH & ĐƯỜNG CONG SỨC MẠNH + BẢNG ĐỐI SÁNH 6 CHIỀU  */}
      {/* ========================================================================= */}
      <section id="physics-longevity-charts" className="space-y-8 scroll-mt-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-white/10 pb-5">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[#F5D06C] text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Chương II • Biểu Đồ Vật Lý Học &amp; Đối Sánh Chuyết Lực vs. Nội Kình</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif gold-gradient">
              Sự Khác Biệt Giữa Sức Cơ Bắp Thô (Chuyết Lực) &amp; Kình Lực Vịnh Xuân
            </h2>
            <p className="text-sm sm:text-base text-amber-100/85 leading-relaxed">
              Vịnh Xuân gọi sức gồng cơ bắp tự nhiên là <strong>Chuyết lực (拙力 — lực vụng về, có giới hạn tuổi tác)</strong>,
              còn lực truyền từ cấu trúc khung xương, mặt đất và nội khí là <strong>Kình lực (勁力 — càng lớn tuổi càng thâm hậu)</strong>.
            </p>
          </div>

          {/* Switcher cho 2 Biểu đồ */}
          <div className="flex flex-wrap items-center gap-2 bg-[#160B07] p-1.5 rounded-2xl border border-white/15 shrink-0">
            <button
              onClick={() => setChartType("impulse")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                chartType === "impulse"
                  ? "bg-[#F5D06C] text-[#140A06] shadow-md"
                  : "text-amber-100/80 hover:text-white"
              }`}
            >
              📊 Đồ Thị Xung Lực Thốn Kình F(t)
            </button>
            <button
              onClick={() => setChartType("longevity")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                chartType === "longevity"
                  ? "bg-[#F5D06C] text-[#140A06] shadow-md"
                  : "text-amber-100/80 hover:text-white"
              }`}
            >
              📈 Đường Cong Sức Mạnh Theo Tuổi (20–80)
            </button>
          </div>
        </div>

        {/* Biểu đồ SVG Tương tác */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#F5D06C]/35 bg-[#130A06]">
          {chartType === "impulse" ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <svg
                  viewBox="0 0 680 340"
                  className="w-full h-auto bg-[#0D0604] rounded-2xl border border-white/10 p-3"
                  role="img"
                  aria-label="Đồ thị so sánh đỉnh xung lực F(t) giữa Thốn kình Vịnh Xuân và đòn đẩy cơ bắp"
                >
                  <line x1="70" y1="280" x2="640" y2="280" stroke="#FAF6F0" strokeOpacity="0.4" strokeWidth="2" />
                  <line x1="70" y1="30" x2="70" y2="280" stroke="#FAF6F0" strokeOpacity="0.4" strokeWidth="2" />
                  <text x="80" y="50" fill="#F5D06C" fontSize="13" fontWeight="bold">
                    Lực Tác Động Đỉnh F_max (Newton)
                  </text>
                  <text x="450" y="315" fill="#FAF6F0" fontSize="13" opacity="0.85">
                    Thời gian tiếp xúc Δt (mili-giây)
                  </text>

                  <line x1="70" y1="100" x2="630" y2="100" stroke="#FAF6F0" strokeOpacity="0.1" strokeDasharray="4 4" />
                  <line x1="70" y1="190" x2="630" y2="190" stroke="#FAF6F0" strokeOpacity="0.1" strokeDasharray="4 4" />

                  <path
                    d="M70 280 Q180 280 240 205 Q330 155 430 210 Q520 265 610 280"
                    fill="#F87171"
                    fillOpacity="0.15"
                    stroke="#F87171"
                    strokeWidth="3.5"
                    strokeDasharray="8 4"
                  />
                  <text x="275" y="175" fill="#FCA5A5" fontSize="13" fontWeight="bold">
                    Chuyết Lực / Đòn Đẩy Thường (Δt ≈ 180ms • Lực tản mát)
                  </text>

                  <path
                    d="M70 280 L145 280 L170 48 L198 280 L610 280"
                    fill="#F5D06C"
                    fillOpacity="0.25"
                    stroke="#F5D06C"
                    strokeWidth="4"
                  />
                  <circle cx="170" cy="48" r="7" fill="#34D399" stroke="#FFFFFF" strokeWidth="2" />
                  <text x="190" y="55" fill="#34D399" fontSize="14" fontWeight="bold">
                    ⚡ Đỉnh Thốn Kình Vịnh Xuân (Δt ≈ 15ms • Xuyên thấu nội tạng)
                  </text>
                </svg>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                  Bí Mật Vật Lý Của Thốn Kình: Rút Ngắn Δt Về Tiệm Cận 0
                </h3>
                <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed">
                  Theo định lý Xung lượng – Động lượng: <strong>F_đỉnh = Δp / Δt</strong>. Cùng một động lượng Δp truyền từ mặt đất lên, nếu bạn gồng cứng vai để &ldquo;đẩy&rdquo; đối phương (Δt ≈ 0.18s), lực biến thành lực đẩy làm đối phương ngã lùi về sau nhưng không chấn thương bên trong.
                </p>
                <p className="text-sm sm:text-base text-emerald-200 leading-relaxed">
                  Ngược lại, Vịnh Xuân giữ tay hoàn toàn <strong>Tùng tĩnh (thả lỏng như roi da)</strong> để đạt vận tốc cực đại, và chỉ <strong>khóa khớp kết cấu trong 0.015 giây cuối cùng</strong> khi chạm mục tiêu rồi lập tức thu về (<em>Thốn kình</em>). Khi Δt giảm đi 10 lần, lực đỉnh F_đỉnh tăng vọt gấp nhiều lần, tạo sóng xung kích xuyên sâu vào bên trong.
                </p>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-amber-200/90">
                  📚 Nguồn đối chứng: Sách gốc PGVX (Tr. 19, 164) [1]; Bolander et al., JSSM (2009) [4]; Neto et al., Sports Biomechanics (2007) [5].
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <svg
                  viewBox="0 0 680 340"
                  className="w-full h-auto bg-[#0D0604] rounded-2xl border border-white/10 p-3"
                  role="img"
                  aria-label="Đồ thị so sánh sức mạnh theo độ tuổi từ 20 đến 80 tuổi giữa Ngoại gia cơ bắp và Nội công Vịnh Xuân"
                >
                  <line x1="70" y1="280" x2="640" y2="280" stroke="#FAF6F0" strokeOpacity="0.4" strokeWidth="2" />
                  <line x1="70" y1="30" x2="70" y2="280" stroke="#FAF6F0" strokeOpacity="0.4" strokeWidth="2" />
                  <text x="80" y="50" fill="#F5D06C" fontSize="13" fontWeight="bold">
                    Hiệu Suất Kình Lực &amp; Khống Chế Thực Chiến
                  </text>
                  <text x="100" y="308" fill="#FAF6F0" fontSize="12">20 tuổi</text>
                  <text x="215" y="308" fill="#FAF6F0" fontSize="12">30 tuổi</text>
                  <text x="330" y="308" fill="#FAF6F0" fontSize="12">45 tuổi</text>
                  <text x="445" y="308" fill="#FAF6F0" fontSize="12">60 tuổi</text>
                  <text x="560" y="308" fill="#FAF6F0" fontSize="12">80 tuổi</text>

                  <path
                    d="M100 190 Q210 75 260 105 Q380 180 580 255"
                    fill="none"
                    stroke="#F87171"
                    strokeWidth="3.5"
                    strokeDasharray="8 4"
                  />
                  <text x="165" y="82" fill="#FCA5A5" fontSize="13" fontWeight="bold">
                    Sức Cơ Bắp Thô (Đỉnh ở 28–32 tuổi, suy giảm sau 40)
                  </text>

                  <path
                    d="M100 245 Q240 195 360 135 Q480 78 590 55"
                    fill="none"
                    stroke="#34D399"
                    strokeWidth="4.5"
                  />
                  <circle cx="590" cy="55" r="7" fill="#F5D06C" stroke="#FFFFFF" strokeWidth="2" />
                  <text x="250" y="65" fill="#34D399" fontSize="14" fontWeight="bold">
                    🌱 Nội Kình, Cấu Trúc &amp; Linh Giác Vịnh Xuân (Tăng tiến đến 80 tuổi)
                  </text>
                </svg>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                  Vì Sao Các Đại Sư Vịnh Xuân Ở Tuổi 70–80 Vẫn Khiến Thanh Niên Trai Tráng Bật Ngửa?
                </h3>
                <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed">
                  Nếu dựa vào sợi cơ co rút (<em>Chuyết lực</em>), con người bắt đầu mất khối lượng cơ từ sau tuổi 35. Nhưng Vịnh Xuân dựa vào <strong>Khung xương tự khóa (Skeletal Alignment)</strong>, <strong>Độ đàn hồi của Mạc cơ – Gân (Fascia &amp; Tendons)</strong> và <strong>Độ tĩnh của Hệ thần kinh – Khí Đan Điền</strong>.
                </p>
                <p className="text-sm sm:text-base text-emerald-200 leading-relaxed">
                  Càng luyện lâu năm, sự buông bỏ lực thừa (<em>Tùng tĩnh</em>) và cảm giác <em>Thính kình</em> càng tinh nhạy. Đó là lý do Sư tổ Nguyễn Tế Công, Đại Tông Sư Diệp Vấn, Đại sư Chu Thượng Đồng hay Cố Võ sư Ngô Sĩ Quý khi ở tuổi thất thập, bát thập chỉ cần khẽ chuyển mình là hóa giải và đánh bật những võ sĩ trẻ nặng gấp rưỡi mình.
                </p>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-amber-200/90">
                  📚 Nguồn đối chứng: Sách gốc PGVX Chương IV: «Khi có tuổi, sức mạnh nội công không giảm, có khi còn tăng!» (Tr. 167, 214) [1]; Ip Chun (1998) [3].
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bảng Đối Sánh 6 Chiều: Chuyết Lực vs Kình Lực Nội Gia */}
        <div className="glass-panel rounded-3xl overflow-hidden border border-white/15 bg-[#140B07]">
          <div className="p-5 sm:p-6 bg-[#1D100A] border-b border-white/10">
            <h3 className="text-lg sm:text-xl font-bold font-serif text-[#F5D06C]">
              Bảng Đối Chiếu 6 Chiều: Chuyết Lực (Cơ Bắp Cục Bộ) vs. Kình Lực &amp; Khí Lực Vịnh Xuân
            </h3>
          </div>
          <div className="divide-y divide-white/10">
            {BRUTE_VS_INTERNAL_COMPARISON.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-5 sm:p-6 hover:bg-white/[0.02] transition-colors"
              >
                <div className="lg:col-span-3 space-y-1">
                  <span className="text-xs font-mono uppercase text-[#F5D06C] block">
                    Tiêu chí 0{idx + 1}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {row.criterion}
                  </h4>
                  <p className="text-xs font-mono text-amber-200/80 pt-1">
                    📖 {row.sourceRef}
                  </p>
                </div>
                <div className="lg:col-span-4 p-4 rounded-2xl bg-rose-950/25 border border-rose-500/30">
                  <span className="text-xs font-bold uppercase text-rose-300 block mb-1">
                    ❌ Chuyết Lực (Gồng Cơ Bắp Thô)
                  </span>
                  <p className="text-sm sm:text-base text-rose-100 leading-relaxed">
                    {row.bruteForce}
                  </p>
                </div>
                <div className="lg:col-span-5 p-4 rounded-2xl bg-emerald-950/25 border border-emerald-500/35">
                  <span className="text-xs font-bold uppercase text-emerald-300 block mb-1">
                    ✅ Kình Lực &amp; Nội Khí Vịnh Xuân (Chuẩn Chân Truyền)
                  </span>
                  <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
                    {row.wingChunJin}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SÁU BÍ QUYẾT DÙNG LỰC TAY & CHÂN ĐẶC THÙ CỦA PHẬT GIA VỊNH XUÂN         */}
      {/* ========================================================================= */}
      <section id="limb-force-secrets" className="space-y-8 scroll-mt-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-white/10 pb-5">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[#F5D06C] text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Hand className="w-4 h-4" />
              <span>Chương III • Giải Mã Kỹ Pháp Dùng Lực Tay &amp; Chân Trong Sách Gốc</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif gold-gradient">
              6 Cơ Chế Dùng Lực Tay &amp; Chân Riêng Biệt Của Vịnh Xuân
            </h2>
            <p className="text-sm sm:text-base text-amber-100/85 leading-relaxed">
              Trích xuất nguyên bản từ chương <em>Khẩu Quyết</em> (trang 161–166) và <em>Yếu Lĩnh Căn Bản</em> (trang 19, 25–30) của PGS.TS Y khoa Nguyễn Mạnh Nhâm &amp; ThS.DS Nguyễn Duy Thức, đối chiếu cùng giải phẫu học hiện đại.
            </p>
          </div>

          {/* Bộ lọc Tay / Chân */}
          <div className="flex items-center gap-2 bg-[#160B07] p-1.5 rounded-2xl border border-white/15 shrink-0">
            <button
              onClick={() => setLimbFilter("all")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                limbFilter === "all"
                  ? "bg-[#F5D06C] text-[#140A06]"
                  : "text-amber-100/80 hover:text-white"
              }`}
            >
              Tất Cả (6)
            </button>
            <button
              onClick={() => setLimbFilter("hand")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                limbFilter === "hand"
                  ? "bg-[#F5D06C] text-[#140A06]"
                  : "text-amber-100/80 hover:text-white"
              }`}
            >
              <Hand className="w-4 h-4" />
              <span>Dùng Lực Tay (3)</span>
            </button>
            <button
              onClick={() => setLimbFilter("foot")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                limbFilter === "foot"
                  ? "bg-[#F5D06C] text-[#140A06]"
                  : "text-amber-100/80 hover:text-white"
              }`}
            >
              <Footprints className="w-4 h-4" />
              <span>Dùng Lực Chân (3)</span>
            </button>
          </div>
        </div>

        {/* Lưới 6 Chuyên Đề Tay & Chân */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredLimbSecrets.map((secret) => (
            <div
              key={secret.id}
              className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#F5D06C]/30 bg-[#150B07] flex flex-col justify-between space-y-6 hover:border-[#F5D06C]/60 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span
                    className={`px-3.5 py-1 rounded-full text-xs sm:text-sm font-bold inline-flex items-center gap-1.5 ${
                      secret.category === "hand"
                        ? "bg-amber-500/20 text-[#F5D06C] border border-[#F5D06C]/40"
                        : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    }`}
                  >
                    {secret.category === "hand" ? (
                      <>
                        <Hand className="w-4 h-4" /> Bí Quyết Lực Tay (Thủ Pháp)
                      </>
                    ) : (
                      <>
                        <Footprints className="w-4 h-4" /> Bí Quyết Lực Chân (Bộ &amp; Cước Pháp)
                      </>
                    )}
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-amber-200/90">
                    {secret.hanNom}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                    {secret.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F5D06C] font-medium mt-1">
                    {secret.subtitle}
                  </p>
                </div>

                {/* Khẩu quyết sách gốc */}
                <div className="p-4 rounded-2xl bg-[#1F110B] border-l-4 border-[#F5D06C] space-y-1">
                  <p className="text-sm sm:text-base font-serif italic text-[#F5D06C]">
                    &ldquo;{secret.canonicalQuote}&rdquo;
                  </p>
                  <span className="block text-xs font-mono text-amber-200/80">
                    — {secret.bookPage}
                  </span>
                </div>

                {/* Cơ chế cốt lõi */}
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/25 space-y-1.5">
                  <span className="text-xs font-bold uppercase text-amber-300 block">
                    💡 Nguyên lý &amp; Hình ảnh ví dụ trong Sách gốc:
                  </span>
                  <p className="text-sm sm:text-base text-[#FAF6F0] leading-relaxed">
                    {secret.coreMechanism}
                  </p>
                </div>

                {/* Giải thích khoa học & Cơ chế */}
                <div className="space-y-2">
                  <h4 className="text-xs sm:text-sm font-bold uppercase text-emerald-300 tracking-wider">
                    🔬 Phân tích Cơ sinh học &amp; Vật lý:
                  </h4>
                  <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed">
                    {secret.scientificExplanation}
                  </p>
                </div>

                {/* Nội công & Khí lực */}
                <div className="space-y-2">
                  <h4 className="text-xs sm:text-sm font-bold uppercase text-[#F5D06C] tracking-wider">
                    ☯️ Cơ chế Khí Lực &amp; Tâm Pháp:
                  </h4>
                  <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed">
                    {secret.qiAndInternalExplanation}
                  </p>
                </div>

                {/* Key Takeaways */}
                <ul className="space-y-1.5 pt-1">
                  {secret.keyTakeaways.map((tk, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-emerald-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{tk}</span>
                    </li>
                  ))}
                </ul>

                {/* Trích dẫn nguồn học thuật */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-xs font-bold text-[#F5D06C] uppercase block">
                    📚 Nguồn trích dẫn học thuật &amp; đối chứng:
                  </span>
                  {secret.academicCitations.map((cit, cIdx) => (
                    <p key={cIdx} className="text-xs font-mono text-amber-100/85 leading-relaxed">
                      • {cit}
                    </p>
                  ))}
                </div>
              </div>

              {/* Ảnh minh họa sách gốc */}
              <div
                onClick={() =>
                  setZoomImg({
                    src: secret.imageUrl,
                    title: secret.title,
                    caption: secret.imageCaption,
                  })
                }
                className="group rounded-2xl overflow-hidden border border-white/15 bg-[#FBF9F5] p-3 flex items-center gap-4 cursor-pointer hover:border-[#F5D06C] transition-all"
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 bg-white rounded-xl overflow-hidden">
                  <Image
                    src={secret.imageUrl}
                    alt={secret.imageCaption}
                    fill
                    className="object-contain martial-filter group-hover:scale-105 transition-transform"
                    sizes="128px"
                  />
                </div>
                <div className="space-y-1.5">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-900 uppercase">
                    <BookOpen className="w-3.5 h-3.5" /> Tư Liệu Sách Gốc Đối Chứng
                  </span>
                  <p className="text-xs sm:text-sm font-serif font-bold text-stone-900 leading-snug">
                    {secret.imageCaption}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 underline">
                    <Maximize2 className="w-3.5 h-3.5" /> Bấm để xem ảnh lớn
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. KHÍ LỰC & NHỮNG HIỆN TƯỢNG KHOA HỌC PHƯƠNG TÂY CHƯA LÝ GIẢI TRỌN VẸN    */}
      {/* ========================================================================= */}
      <section id="eastern-qi-mysteries" className="space-y-8 scroll-mt-24">
        <div className="space-y-3 border-b border-white/10 pb-5">
          <div className="inline-flex items-center gap-2 text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Flame className="w-4 h-4" />
            <span>Chương IV • Nội Công, Khí Lực &amp; Giới Hạn Của Giải Phẫu Học Phương Tây</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif gold-gradient">
            Khí Lực, Niệm Lực &amp; Những Hiện Tượng Khoa Học Phương Tây Chưa Chứng Minh Trọn Vẹn
          </h2>
          <p className="text-sm sm:text-base text-amber-100/85 leading-relaxed max-w-4xl">
            Là một <strong>Phó Giáo sư – Tiến sĩ Y khoa</strong> đồng thời là truyền nhân Phật Gia Vịnh Xuân, tác giả <strong>Nguyễn Mạnh Nhâm</strong> đã dành trọn Chương IV (trang 167–184) để phân tích ranh giới giữa những gì giải phẫu học phương Tây đã giải thích được (hệ thần kinh, mạc cơ, phản xạ tủy sống) và những hiện tượng thực chứng của <strong>Nội Khí, Kinh Lạc, Đan Điền, Niệm Lực (Nim Lik)</strong> mà các máy đo cơ sinh học hiện đại vẫn chưa thể định lượng hết.
          </p>
        </div>

        {/* Selector 4 Chuyên khảo Khí Lực */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {UNEXPLAINED_QI_PHENOMENA.map((item) => {
            const isSelected = activeQiPhenomenon.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveQiId(item.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#F5D06C] text-[#140A06] border-[#F5D06C] font-bold shadow-xl shadow-[#F5D06C]/20"
                    : "bg-[#170C08] text-amber-100 border-white/15 hover:border-[#F5D06C]/60"
                }`}
              >
                <span
                  className={`text-xs font-mono uppercase ${
                    isSelected ? "text-amber-950 font-extrabold" : "text-emerald-300"
                  }`}
                >
                  Chuyên khảo {item.number} • {item.hanNom}
                </span>
                <h3 className="text-sm sm:text-base font-bold mt-2 line-clamp-2">
                  {item.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Nội dung chi tiết của Chuyên khảo Khí Lực đang chọn */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-emerald-500/40 bg-gradient-to-br from-[#131B16] via-[#120A07] to-[#170E0A] space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-5">
              <div className="space-y-2">
                <span className="px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold">
                  Chuyên khảo {activeQiPhenomenon.number} • {activeQiPhenomenon.hanNom}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white pt-1">
                  {activeQiPhenomenon.title}
                </h3>
              </div>

              {/* 1. Nguyên lý truyền thống Đông Phương */}
              <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/35 space-y-2">
                <h4 className="text-xs sm:text-sm font-bold uppercase text-emerald-300 tracking-wider">
                  1. Nguyên lý Nội công &amp; Y Võ Đông Phương:
                </h4>
                <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
                  {activeQiPhenomenon.easternPrinciple}
                </p>
              </div>

              {/* 2. Bằng chứng thực chứng lịch sử */}
              <div className="p-5 rounded-2xl bg-black/35 border border-white/10 space-y-2">
                <h4 className="text-xs sm:text-sm font-bold uppercase text-[#F5D06C] tracking-wider">
                  2. Hiện tượng Thực chứng trong Võ học &amp; Các Đại Sư:
                </h4>
                <p className="text-sm sm:text-base text-[#FAF6F0] leading-relaxed">
                  {activeQiPhenomenon.historicalEvidence}
                </p>
              </div>

              {/* 3. Cầu nối Y học & Vật lý Sinh học hiện đại */}
              <div className="p-5 rounded-2xl bg-amber-950/30 border border-[#F5D06C]/35 space-y-2">
                <h4 className="text-xs sm:text-sm font-bold uppercase text-[#F5D06C] tracking-wider">
                  3. Cầu nối Y học Thần kinh &amp; Vật lý Sinh học Hiện đại:
                </h4>
                <p className="text-sm sm:text-base text-amber-100 leading-relaxed">
                  {activeQiPhenomenon.modernMedicalAndBiophysicsBridge}
                </p>
              </div>

              {/* 4. Vì sao Khoa học phương Tây chưa giải mã hết */}
              <div className="p-5 rounded-2xl bg-purple-950/30 border border-purple-400/35 space-y-2">
                <h4 className="text-xs sm:text-sm font-bold uppercase text-purple-300 tracking-wider">
                  4. Vì sao Khoa học Phương Tây vẫn chưa chứng minh trọn vẹn?
                </h4>
                <p className="text-sm sm:text-base text-purple-100 leading-relaxed">
                  {activeQiPhenomenon.whyWestCannotFullyExplainYet}
                </p>
              </div>

              {/* Nguồn trích dẫn */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                <span className="text-xs font-bold uppercase text-[#F5D06C] block">
                  📚 Nguồn Trích Dẫn Học Thuật &amp; Giáo Trình:
                </span>
                <p className="text-xs sm:text-sm text-amber-200 font-serif italic">
                  • {activeQiPhenomenon.bookReference}
                </p>
                {activeQiPhenomenon.academicCitations.map((cit, cIdx) => (
                  <p key={cIdx} className="text-xs font-mono text-amber-100/85">
                    • {cit}
                  </p>
                ))}
              </div>
            </div>

            {/* Cột phải: Ảnh tư liệu Kinh mạch / Hỏa Long trong Sách gốc */}
            <div className="lg:col-span-4 space-y-4">
              <div
                onClick={() =>
                  setZoomImg({
                    src: activeQiPhenomenon.imageUrl,
                    title: activeQiPhenomenon.title,
                    caption: activeQiPhenomenon.imageCaption,
                  })
                }
                className="group rounded-3xl overflow-hidden border-2 border-[#F5D06C]/40 bg-[#FBF9F5] p-4 cursor-pointer hover:border-[#F5D06C] transition-all shadow-xl"
              >
                <div className="relative h-64 sm:h-72 w-full">
                  <Image
                    src={activeQiPhenomenon.imageUrl}
                    alt={activeQiPhenomenon.imageCaption}
                    fill
                    className="object-contain martial-filter group-hover:scale-105 transition-transform"
                    sizes="(max-width: 1024px) 100vw, 360px"
                  />
                </div>
                <div className="mt-3 pt-3 border-t border-amber-900/20 text-center space-y-1">
                  <p className="text-xs sm:text-sm font-serif font-bold text-stone-900">
                    {activeQiPhenomenon.imageCaption}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800">
                    <Maximize2 className="w-3.5 h-3.5" /> Phóng to hình tư liệu sách gốc
                  </span>
                </div>
              </div>

              {/* Sơ đồ chuỗi Đầu Ý -> Thần -> Khí -> Lực */}
              <div className="p-5 rounded-2xl bg-[#1A0F0A] border border-[#F5D06C]/30 space-y-3">
                <h4 className="text-xs sm:text-sm font-bold uppercase text-[#F5D06C] tracking-wider">
                  Chuỗi Điều Khiển Tối Thượng (Trang 167–178)
                </h4>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="font-bold text-white">1. ĐẦU Ý (Tâm Niệm Tĩnh)</span>
                    <span className="text-[#F5D06C] font-mono">Khởi nguồn</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="font-bold text-white">2. THẦN ĐÁO (Thần Kinh Hội Tụ)</span>
                    <span className="text-[#F5D06C] font-mono">Dẫn đường</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-between">
                    <span className="font-bold text-emerald-300">3. KHÍ ĐÁO (Khí Là Vua Của Lực)</span>
                    <span className="text-emerald-300 font-mono">Chủ soái</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F5D06C]/20 border border-[#F5D06C]/40 flex items-center justify-between">
                    <span className="font-bold text-[#F5D06C]">4. LỰC ĐÁO (Bộc Phát Thốn Kình)</span>
                    <span className="text-[#F5D06C] font-mono">Đích đến</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. BỐN BÀI THỰC NGHIỆM KIỂM CHỨNG NGAY TẠI CHỖ (2 PHÚT TỰ CẢM NHẬN)       */}
      {/* ========================================================================= */}
      <section id="self-experiments" className="space-y-8 scroll-mt-24">
        <div className="space-y-2 border-b border-white/10 pb-5">
          <div className="inline-flex items-center gap-2 text-[#F5D06C] text-xs sm:text-sm font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Chương V • Phòng Thí Nghiệm Thực Chứng Cơ Sinh Học &amp; Khí Lực</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif gold-gradient">
            4 Bài Thực Nghiệm 2 Phút Để Tự Kiểm Chứng Trên Chính Cơ Thể Bạn
          </h2>
          <p className="text-sm sm:text-base text-amber-100/85 leading-relaxed max-w-3xl">
            Đừng chỉ đọc lý thuyết — hãy thử ngay 4 thí nghiệm nhỏ dưới đây (một mình hoặc cùng một người bạn) để cảm nhận tức thì vì sao <strong>thả lỏng (Tùng tĩnh) và dẫn ý</strong> lại mạnh gấp nhiều lần gồng cứng cơ bắp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FOUR_SELF_EXPERIMENTS.map((exp) => (
            <div
              key={exp.id}
              className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/15 bg-[#160C08] flex flex-col justify-between space-y-5 hover:border-[#F5D06C]/50 transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#F5D06C] text-[#140A06] text-xs sm:text-sm font-extrabold">
                    THỰC NGHIỆM 0{exp.step}
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-amber-200/90">
                    ⏱ {exp.duration}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-serif text-white">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F5D06C] mt-1">
                    <strong>Mục tiêu:</strong> {exp.goal}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-rose-950/25 border border-rose-500/30 space-y-1">
                  <span className="text-xs font-bold uppercase text-rose-300 block">
                    ❌ Bước 1 — Thử theo lối gồng cơ bắp (Chuyết lực):
                  </span>
                  <p className="text-sm sm:text-base text-rose-100 leading-relaxed">
                    {exp.wrongWay}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#1F110B] border border-[#F5D06C]/35 space-y-1">
                  <span className="text-xs font-bold uppercase text-[#F5D06C] block">
                    ✅ Bước 2 — Thực hiện theo cơ chế Vịnh Xuân (Tùng tĩnh &amp; Dẫn Ý):
                  </span>
                  <p className="text-sm sm:text-base text-[#FAF6F0] leading-relaxed">
                    {exp.rightWay}
                  </p>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/35 space-y-1">
                  <span className="text-xs font-bold uppercase text-emerald-300 block">
                    🎯 Cảm nhận &amp; Kết quả kiểm chứng:
                  </span>
                  <p className="text-sm sm:text-base text-emerald-100 leading-relaxed">
                    {exp.whatYouWillFeel}
                  </p>
                </div>
                <p className="text-xs font-mono text-amber-200/80 px-1">
                  📖 {exp.sourceCitation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. CHƯƠNG VI: THƯ MỤC TÀI LIỆU THAM KHẢO & NGUỒN HỌC THUẬT ([1] - [10])   */}
      {/* ========================================================================= */}
      <section id="academic-bibliography" className="space-y-6 scroll-mt-24">
        <div className="space-y-2 border-b border-white/10 pb-5">
          <div className="inline-flex items-center gap-2 text-[#F5D06C] text-xs sm:text-sm font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>Chương VI • Thư Mục Nguồn Trích Dẫn Học Thuật &amp; Giáo Trình Kinh Điển</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif gold-gradient">
            10 Công Trình Khoa Học &amp; Giáo Trình Chân Truyền Đối Chứng ([1] – [10])
          </h2>
          <p className="text-sm sm:text-base text-amber-100/85 leading-relaxed max-w-4xl">
            Toàn bộ các phân tích cơ sinh học, vật lý học Thốn kình, giải phẫu chuỗi mạc cơ (<em>Anatomy Trains</em>), áp điện kinh lạc và thuyết thần kinh nội công trên trang này đều được trích dẫn minh bạch từ 10 nguồn tư liệu có thẩm quyền cao nhất dưới đây:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {FORCE_ACADEMIC_BIBLIOGRAPHY.map((bib) => (
            <div
              key={bib.id}
              className="p-5 sm:p-6 rounded-2xl bg-[#150B07] border border-white/15 hover:border-[#F5D06C]/50 transition-all space-y-2.5 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-lg bg-[#F5D06C] text-[#140A06] font-mono font-extrabold text-xs sm:text-sm">
                    Mã trích dẫn {bib.code}
                  </span>
                  <span className="text-xs font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                    {bib.category}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold font-serif text-white leading-snug">
                  {bib.title} ({bib.year})
                </h3>
                <p className="text-xs sm:text-sm text-[#F5D06C] font-medium">
                  ✍️ <strong>Tác giả:</strong> {bib.authors}
                </p>
                <p className="text-xs font-mono text-amber-200/85">
                  🏛️ {bib.publication} • {bib.pagesOrDoi}
                </p>
              </div>
              <div className="pt-2 border-t border-white/10 text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                <strong className="text-emerald-300">Giá trị đối chứng:</strong> {bib.keyContribution}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action: Áp dụng ngay vào Tiểu Niệm Đầu & Tầm Kiều */}
        {onOpenDojoLesson && (
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#24130C] via-[#1B0E09] to-[#24130C] border border-[#F5D06C]/40 flex flex-col md:flex-row items-center justify-between gap-6 mt-6">
            <div className="space-y-1.5">
              <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F5D06C] flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Thực Hành Ngay Trong Bài Quyền</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                Trải Nghiệm &ldquo;Structure before Speed&rdquo; Trong Tam Đại Bộ Quyền
              </h3>
              <p className="text-sm sm:text-base text-amber-100/85">
                Vào phòng tập Tiểu Niệm Đầu (luyện khung &amp; tụ khí Đan Điền) hoặc Tầm Kiều (luyện xoay eo truyền lực từ chân lên tay).
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => onOpenDojoLesson("bai-07")}
                className="px-5 py-3 rounded-2xl bg-[#F5D06C] hover:bg-[#E2B743] text-[#140A06] font-bold text-sm sm:text-base flex items-center gap-2 shadow-lg cursor-pointer transition-all"
              >
                <Layers className="w-4 h-4" />
                <span>Tập Tiểu Niệm Đầu</span>
              </button>
              <button
                onClick={() => onOpenDojoLesson("bai-09")}
                className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-[#F5D06C]/40 text-white font-bold text-sm sm:text-base flex items-center gap-2 cursor-pointer transition-all"
              >
                <span>Tập Tầm Kiều</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* ========================================================================= */}
      {/* LIGHTBOX MODAL PHÓNG TO ẢNH SÁCH GỐC & ĐỒ HÌNH                             */}
      {/* ========================================================================= */}
      {zoomImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-hidden max-w-full w-full"
          onClick={() => setZoomImg(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={zoomImg.title}
            className="relative max-w-5xl w-full max-h-[92vh] martial-photo-frame rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col items-center border-2 border-[#E2B743] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoomImg(null)}
              aria-label="Đóng phóng to"
              className="absolute top-3 right-3 min-w-[44px] min-h-[44px] rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-xl border-2 border-white transition cursor-pointer z-20"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full h-[58vh] sm:h-[72vh]">
              <Image
                src={zoomImg.src}
                alt={zoomImg.title}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            <div className="mt-4 text-center space-y-1 px-2 max-w-3xl">
              <h4 className="text-sm sm:text-base text-amber-950 font-serif font-bold">
                {zoomImg.title}
              </h4>
              {zoomImg.caption && (
                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                  {zoomImg.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
