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
  WING_CHUN_STANCES_AND_FOOTWORK_ATLAS,
  WING_CHUN_LINEAGE_STANCE_COMPARISON,
  FIVE_FOOTWORK_MOBILITY_PRINCIPLES,
  KineticQiNode,
  StanceAndFootworkStudy,
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
  // Tư thế gốc trên sơ đồ 5 trạm: "chinh-than" (Nhị Tự Kiềm Dương Xung Quyền p037-h04) vs "bien-than" (Xước Mã Di Chuyển p030-h03)
  const [stanceBodyView, setStanceBodyView] = useState<"chinh-than" | "bien-than">("chinh-than");
  // Thế đứng tấn / Bộ pháp đang chọn trong Chương Chuyên khảo Bộ pháp
  const [selectedStanceId, setSelectedStanceId] = useState<string>(
    WING_CHUN_STANCES_AND_FOOTWORK_ATLAS[0].id
  );
  // Chế độ hiển thị Chương Bộ pháp: lọc theo nhóm hoặc xem tất cả 8 bộ
  const [stanceCategoryFilter, setStanceCategoryFilter] = useState<
    "all" | StanceAndFootworkStudy["category"]
  >("all");
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

  const activeStanceStudy: StanceAndFootworkStudy =
    WING_CHUN_STANCES_AND_FOOTWORK_ATLAS.find((s) => s.id === selectedStanceId) ||
    WING_CHUN_STANCES_AND_FOOTWORK_ATLAS[0];

  const filteredStanceAtlas = WING_CHUN_STANCES_AND_FOOTWORK_ATLAS.filter((s) =>
    stanceCategoryFilter === "all" ? true : s.category === stanceCategoryFilter
  );

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

  // Tọa độ 5 trạm chuẩn xác trên ảnh Võ sư Sách gốc (viewBox 0 0 600 660)
  // Chính thân (p037-h04.png): Võ sư đứng Nhị Tự Kiềm Dương Mã phóng Nhật Tự Xung Quyền về phía trước
  // Biên thân (di_chuyen_ma_bo_authentic.png): Võ sư đứng Biên Thân / Xước Mã tiến bước phóng quyền
  const svgStationCoords =
    stanceBodyView === "chinh-than"
      ? [
          { station: 1, x: 255, y: 585, short: "1. Bàn Chân Chữ Bát & Dũng Tuyền (K1)" },
          { station: 2, x: 270, y: 465, short: "2. Vòm Khóa Gối Nhị Tự Kiềm Dương" },
          { station: 3, x: 295, y: 345, short: "3. Hạ Đan Điền & Trục Lưng Thẳng" },
          { station: 4, x: 330, y: 215, short: "4. Trầm Kiên & Thu Quyền Sát Nách" },
          { station: 5, x: 245, y: 225, short: "5. Lao Cung & Nhật Tự Xung Quyền" },
        ]
      : [
          { station: 1, x: 235, y: 585, short: "1. Chân Sau 70% & Túc Bất Ly Địa" },
          { station: 2, x: 265, y: 465, short: "2. Khớp Gối Đàn Hồi Tiến Bộ" },
          { station: 3, x: 285, y: 345, short: "3. Trục Xoay Biên Thân 90° & Đan Điền" },
          { station: 4, x: 315, y: 215, short: "4. Vai Thả Lỏng Chìa Ra Trước (Trường Thắng Đoản)" },
          { station: 5, x: 205, y: 205, short: "5. Nhật Tự Xung Quyền Bộc Phát" },
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

          {/* Right 5 Cols: Bức Đồ Hình Chuẩn Tư Liệu Sách Gốc (Tấn Pháp & Chuỗi Truyền Lực 5 Trạm) */}
          <div className="lg:col-span-5">
            <div
              onClick={() =>
                setZoomImg({
                  src: "/assets/images/fundamentals/wing_chun_kinetic_qi_diagram.jpg",
                  title: "Đồ Hình Chuẩn Sách Gốc: Hệ Thống Tấn Pháp, Bộ Pháp & Chuỗi Truyền Lực 5 Trạm Vịnh Xuân",
                  caption:
                    "Dựng trực tiếp từ ảnh võ sư thị phạm và sơ đồ bàn chân nguyên bản trong sách «Phật Gia Vịnh Xuân Quyền» (PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức, 2006 — Trang 19, 30–35, 37, 161–166): Nhị Tự Kiềm Dương Mã (2 mũi chân cách 1 bàn chân, 2 gót cách 2 bàn chân, gối hơi khuỵu, lưng thẳng, tay thu sát nách) kết hợp Biên Thân 90°, Xước Mã và Hoành Thoái.",
                })
              }
              className="group relative rounded-2xl overflow-hidden border-2 border-[#F5D06C]/40 hover:border-[#F5D06C] shadow-2xl cursor-pointer bg-[#0F0805] transition-all"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/assets/images/fundamentals/wing_chun_kinetic_qi_diagram.jpg"
                  alt="Đồ hình Chuẩn Sách Gốc: Tấn pháp, Bộ pháp và Chuỗi truyền lực 5 trạm Vịnh Xuân Quyền"
                  fill
                  className="object-contain bg-[#110A07] group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
              </div>
              <div className="p-3.5 bg-[#140A06]/95 border-t border-white/10 flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-medium text-amber-100">
                  Đồ hình Tấn Pháp &amp; 5 Trạm Dẫn Lực (Chuẩn Sách Gốc Tr. 30–37)
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
            1. Mô Phỏng 5 Trạm Trên Tấn Chuẩn
          </a>
          <a
            href="#stances-footwork-atlas"
            className="px-4 py-2 rounded-full bg-[#F5D06C]/20 border border-[#F5D06C]/50 hover:bg-[#F5D06C] text-[#F5D06C] hover:text-[#140A06] text-xs sm:text-sm font-bold transition-all"
          >
            2. Chuyên Khảo 8 Tấn Pháp &amp; Bộ Pháp Di Chuyển
          </a>
          <a
            href="#physics-longevity-charts"
            className="px-4 py-2 rounded-full bg-white/8 hover:bg-[#F5D06C] text-amber-100 hover:text-[#140A06] text-xs sm:text-sm font-semibold transition-all"
          >
            3. Đồ Thị Vật Lý Thốn Kình &amp; Độ Tuổi
          </a>
          <a
            href="#limb-force-secrets"
            className="px-4 py-2 rounded-full bg-white/8 hover:bg-[#F5D06C] text-amber-100 hover:text-[#140A06] text-xs sm:text-sm font-semibold transition-all"
          >
            4. 6 Bí Quyết Dùng Lực Tay &amp; Chân
          </a>
          <a
            href="#eastern-qi-mysteries"
            className="px-4 py-2 rounded-full bg-white/8 hover:bg-[#F5D06C] text-amber-100 hover:text-[#140A06] text-xs sm:text-sm font-semibold transition-all"
          >
            5. Khí Lực &amp; Những Điều Khoa Học Chưa Giải Mã Hết
          </a>
          <a
            href="#self-experiments"
            className="px-4 py-2 rounded-full bg-white/8 hover:bg-[#F5D06C] text-amber-100 hover:text-[#140A06] text-xs sm:text-sm font-semibold transition-all"
          >
            6. 4 Bài Tự Thực Nghiệm
          </a>
          <a
            href="#academic-bibliography"
            className="px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/40 hover:bg-[#F5D06C] text-emerald-200 hover:text-[#140A06] text-xs sm:text-sm font-semibold transition-all"
          >
            7. Nguồn Trích Dẫn Khoa Học ([1]–[10])
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. MÔ HÌNH TƯƠNG TÁC 5 TRẠM TRÊN TƯ THẾ ĐỨNG TẤN SÁCH GỐC                 */}
      {/* ========================================================================= */}
      <section id="kinetic-5-stations" className="space-y-8 scroll-mt-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-white/10 pb-5">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[#F5D06C] text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Activity className="w-4 h-4" />
              <span>Chương I • Giải Phẫu Chuỗi Động Học &amp; Kinh Mạch Trên Tấn Pháp Chuẩn Sách Gốc</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif gold-gradient">
              Vì Sao Đứng Tấn Nhị Tự Kiềm Dương Hẹp &amp; Thẳng Lưng Mà Lực Từ Chân Lại Chạy Lên Tay Được?
            </h2>
            <p className="text-sm sm:text-base text-amber-100/85 leading-relaxed">
              Khác hẳn với thế tấn choãi rộng kiểu Cung tiễn bộ của Ngoại gia hay nhón gót của Boxing, Vịnh Xuân đứng{" "}
              <strong className="text-[#F5D06C]">Nhị Tự Kiềm Dương Mã</strong> rất gọn (2 mũi chân cách 1 bàn chân, 2 gót cách 2 bàn chân, gối hơi khuỵu hướng tâm, lưng thẳng đứng, hai nắm đấm thu sát nách — <em>Sách gốc Tr. 29–33, 37</em>). Bấm vào từng <strong>Trạm (1 → 5)</strong> trực tiếp trên hình chụp Võ sư Sách gốc để mổ xẻ cơ chế truyền lực.
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

        {/* Khung Chính 12 Cột: Cột Trái (5 Cột) Ảnh Võ Sư Sách Gốc + Vector 5 Trạm | Cột Phải (7 Cột) Chi Tiết Trạm */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 5 COLS: Authentic Book Master Stance + Interactive SVG 5 Stations */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-5 sm:p-6 border border-[#F5D06C]/30 bg-[#120906] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold font-serif text-[#FAF6F0]">
                  Tư Thế Đứng Tấn Thực Tế Trong Sách Gốc
                </h3>
                <p className="text-xs sm:text-sm text-amber-200/80">
                  Chọn góc đứng tấn và nhấp vào các nút số 1–5 trên cơ thể võ sư
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold self-start sm:self-auto ${
                  simulationMode === "connected"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                    : "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                }`}
              >
                {simulationMode === "connected" ? "Mạch Khép Kín 100%" : "Đứt Mạch Ở Vai (Trạm 4)"}
              </span>
            </div>

            {/* Chuyển đổi giữa 2 tư thế đứng tấn thật trong Sách gốc */}
            <div className="grid grid-cols-2 gap-2 bg-[#1A0E09] p-1.5 rounded-2xl border border-white/10">
              <button
                onClick={() => setStanceBodyView("chinh-than")}
                className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  stanceBodyView === "chinh-than"
                    ? "bg-[#F5D06C] text-[#140A06] shadow-md"
                    : "text-amber-100/80 hover:text-white"
                }`}
              >
                1. Chính Thân Kiềm Dương (H.37)
              </button>
              <button
                onClick={() => setStanceBodyView("bien-than")}
                className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  stanceBodyView === "bien-than"
                    ? "bg-[#F5D06C] text-[#140A06] shadow-md"
                    : "text-amber-100/80 hover:text-white"
                }`}
              >
                2. Biên Thân Tiến Mã (H.22)
              </button>
            </div>

            {/* Interactive Canvas: Ảnh Chụp Võ Sư Sách Gốc + Sơ Đồ Dấu Chân + Lớp Phủ SVG 5 Trạm */}
            <div className="relative w-full aspect-[600/660] bg-[#FBF9F5] rounded-2xl border-2 border-[#F5D06C]/50 overflow-hidden shadow-inner">
              {/* Ảnh nền là hình chụp Võ sư thị phạm nguyên bản trong Sách gốc */}
              <div className="absolute inset-0 p-4 pb-20 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={
                      stanceBodyView === "chinh-than"
                        ? "/assets/hinh-2x/p037-h04.png"
                        : "/assets/images/fundamentals/di_chuyen_ma_bo_authentic.png"
                    }
                    alt={
                      stanceBodyView === "chinh-than"
                        ? "Võ sư đứng Nhị Tự Kiềm Dương Mã phóng Nhật Tự Xung Quyền (Sách gốc Trang 37 - Hình 37)"
                        : "Võ sư đứng Biên Thân tiến Xước Mã (Sách gốc Trang 30 - Hình 22)"
                    }
                    fill
                    className="object-contain martial-filter"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                </div>
              </div>

              {/* Hộp nhỏ góc dưới phải: Sơ đồ bàn chân chữ Bát / Song song nguyên bản trong Sách gốc Tr. 33-34 */}
              <div
                onClick={() =>
                  setZoomImg({
                    src:
                      stanceBodyView === "chinh-than"
                        ? "/assets/hinh-2x/p033-h02.png"
                        : "/assets/hinh-2x/p034-h01.png",
                    title:
                      stanceBodyView === "chinh-than"
                        ? "Sơ đồ hai bàn chân Nhị Tự Kiềm Dương Mã (Sách gốc Trang 33 - Hình 29)"
                        : "Sơ đồ hai bàn chân song song khi Biên Thân 90° (Sách gốc Trang 34 - Hình 30)",
                    caption:
                      stanceBodyView === "chinh-than"
                        ? "Hai mũi bàn chân xoay vào trong cách nhau 1 bàn chân, hai gót mở ra ngoài cách nhau 2 bàn chân tạo hình chữ Bát (八)."
                        : "Khi quay người sang phải/trái 90° (Biên thân), hai bàn chân xoay trên tâm chính giữa bàn chân, trở nên song song nhau và cách nhau 1 bàn chân.",
                  })
                }
                className="absolute bottom-2 right-2 z-20 w-36 sm:w-44 rounded-xl bg-white/95 border-2 border-[#140A06]/30 p-1.5 shadow-lg cursor-pointer hover:border-[#D97706] transition-all"
              >
                <div className="relative w-full h-14">
                  <Image
                    src={
                      stanceBodyView === "chinh-than"
                        ? "/assets/hinh-2x/p033-h02.png"
                        : "/assets/hinh-2x/p034-h01.png"
                    }
                    alt="Sơ đồ hai bàn chân sách gốc"
                    fill
                    className="object-contain"
                    sizes="176px"
                  />
                </div>
                <p className="text-xs font-serif font-bold text-stone-900 text-center leading-tight">
                  {stanceBodyView === "chinh-than"
                    ? "Sơ đồ H.29: Mũi cách 1, gót cách 2 bàn chân"
                    : "Sơ đồ H.30: 2 bàn chân xoay song song"}
                </p>
              </div>

              {/* Nhãn chú thích góc dưới trái */}
              <div className="absolute bottom-2 left-2 z-20 max-w-[52%] rounded-xl bg-[#140A06]/90 border border-[#F5D06C]/40 px-3 py-2 text-xs text-amber-100">
                <strong className="text-[#F5D06C] block">
                  {stanceBodyView === "chinh-than"
                    ? "📖 Sách gốc Tr. 37 (Hình 37):"
                    : "📖 Sách gốc Tr. 30 (Hình 22):"}
                </strong>
                <span>
                  {stanceBodyView === "chinh-than"
                    ? "Tấn Kiềm Dương cao vừa, gối hơi khuỵu, lưng thẳng, tay thu sát nách."
                    : "Biên thân nghiêng người, chân sau trụ 70%, chân trước lướt nhẹ 30%."}
                </span>
              </div>

              {/* Lớp phủ SVG Vector Dẫn Lực & 5 Trạm Tương Tác */}
              <svg
                viewBox="0 0 600 660"
                className="relative z-10 w-full h-full select-none"
                role="img"
                aria-label="Sơ đồ tương tác 5 trạm truyền lực và dẫn khí trực tiếp trên tư thế võ sư sách gốc"
              >
                <defs>
                  <radialGradient id="dantianGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.85" />
                    <stop offset="60%" stopColor="#D97706" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#D97706" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="punchShockwave" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#D97706" stopOpacity="0.9" />
                    <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Trục Tý Ngọ Tuyến thẳng đứng */}
                <line
                  x1="290"
                  y1="30"
                  x2="290"
                  y2="595"
                  stroke="#B45309"
                  strokeOpacity="0.4"
                  strokeDasharray="6 6"
                  strokeWidth="2"
                />

                {/* Đường dẫn Cơ sinh học từ Trạm 1 -> Trạm 2 -> Trạm 3 -> Trạm 4 */}
                <path
                  d={`M ${svgStationCoords[0].x} ${svgStationCoords[0].y} L ${svgStationCoords[1].x} ${svgStationCoords[1].y} L ${svgStationCoords[2].x} ${svgStationCoords[2].y} L ${svgStationCoords[3].x} ${svgStationCoords[3].y}`}
                  fill="none"
                  stroke="#D97706"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray="10 5"
                />

                {/* Đoạn từ Trạm 4 (Vai/Nách) ra Trạm 5 (Nắm đấm Nhật Tự Xung Quyền) */}
                {simulationMode === "connected" ? (
                  <>
                    <path
                      d={`M ${svgStationCoords[3].x} ${svgStationCoords[3].y} L ${svgStationCoords[4].x} ${svgStationCoords[4].y}`}
                      fill="none"
                      stroke="#D97706"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <path
                      d={`M ${svgStationCoords[0].x + 8} ${svgStationCoords[0].y} L ${svgStationCoords[1].x + 8} ${svgStationCoords[1].y} L ${svgStationCoords[2].x} ${svgStationCoords[2].y} L ${svgStationCoords[3].x} ${svgStationCoords[3].y - 6} L ${svgStationCoords[4].x} ${svgStationCoords[4].y}`}
                      fill="none"
                      stroke="#059669"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <circle
                      cx={svgStationCoords[4].x}
                      cy={svgStationCoords[4].y}
                      r="42"
                      fill="url(#punchShockwave)"
                    />
                    <rect
                      x="18"
                      y="16"
                      width="290"
                      height="34"
                      rx="10"
                      fill="#140A06"
                      fillOpacity="0.9"
                      stroke="#10B981"
                      strokeWidth="1.5"
                    />
                    <text x="30" y="38" fill="#34D399" fontSize="13" fontWeight="bold">
                      ⚡ TÙNG TĨNH THÔNG MẠCH: 100% THỐN KÌNH
                    </text>
                  </>
                ) : (
                  <>
                    <path
                      d={`M ${svgStationCoords[3].x} ${svgStationCoords[3].y} L ${svgStationCoords[4].x} ${svgStationCoords[4].y}`}
                      fill="none"
                      stroke="#DC2626"
                      strokeWidth="3"
                      strokeDasharray="4 8"
                    />
                    <circle
                      cx={svgStationCoords[3].x}
                      cy={svgStationCoords[3].y}
                      r="30"
                      fill="#DC2626"
                      fillOpacity="0.35"
                      stroke="#DC2626"
                      strokeWidth="2.5"
                    />
                    <rect
                      x="18"
                      y="16"
                      width="340"
                      height="46"
                      rx="10"
                      fill="#450A0A"
                      fillOpacity="0.95"
                      stroke="#F87171"
                      strokeWidth="1.5"
                    />
                    <text x="30" y="36" fill="#FCA5A5" fontSize="12" fontWeight="bold">
                      ✕ GỒNG VAI (TRẠM 4) = ĐỨT MẠCH LỰC TỪ CHÂN!
                    </text>
                    <text x="30" y="53" fill="#FECACA" fontSize="12">
                      Nắm đấm chỉ còn ~15% sức cơ bắp cánh tay cục bộ
                    </text>
                  </>
                )}

                {/* Quả cầu Nội Khí tại Hạ Đan Điền (Trạm 3) */}
                <circle
                  cx={svgStationCoords[2].x}
                  cy={svgStationCoords[2].y}
                  r="32"
                  fill="url(#dantianGlow)"
                />

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
                          r="25"
                          fill="none"
                          stroke="#D97706"
                          strokeWidth="3"
                          strokeDasharray="5 3"
                        />
                      )}
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={isSelected ? "17" : "14"}
                        fill={isSelected ? "#F5D06C" : "#140A06"}
                        stroke={isSelected ? "#140A06" : "#F5D06C"}
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
      {/* 2B. CHƯƠNG CHUYÊN KHẢO: HỆ THỐNG 8 TẤN PHÁP & BỘ PHÁP DI CHUYỂN VỊNH XUÂN  */}
      {/* ========================================================================= */}
      <section id="stances-footwork-atlas" className="space-y-10 scroll-mt-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 border-b border-white/10 pb-6">
          <div className="space-y-2.5 max-w-4xl">
            <div className="inline-flex items-center gap-2 text-[#F5D06C] text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Footprints className="w-4 h-4" />
              <span>Chương Chuyên Khảo Đặc Biệt • Tấn Pháp, Bộ Pháp &amp; Phương Pháp Di Chuyển Vịnh Xuân</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif gold-gradient">
              Tổng Hợp 8 Thế Đứng Tấn &amp; Bộ Pháp Di Chuyển Của Vịnh Xuân Quyền
            </h2>
            <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed">
              Khảo cứu đối chứng từ <strong>Sách gốc Phật Gia Vịnh Xuân Quyền</strong> (PGS.TS Nguyễn Mạnh Nhâm &amp; ThS.DS Nguyễn Duy Thức, 2006 — Trang 19–20, 25, 29–35, 124, 137, 161–166, 185, 199–201) kết hợp các công trình của{" "}
              <strong>Đại Tông Sư Diệp Vấn, Đại sư Chu Thượng Đồng, Đại sư Diệp Chuẩn</strong> và <strong>Sư tổ Lương Tán (Vịnh Xuân Cổ Lao)</strong>. Mỗi bộ pháp dưới đây đều đi kèm <strong>Ảnh Võ Sư Thị Phạm + Sơ Đồ Dấu Chân Sách Gốc + Cơ Chế Phối Hợp Di Chuyển</strong>.
            </p>
          </div>

          {/* Bộ lọc nhóm Tấn pháp & Bộ pháp */}
          <div className="flex flex-wrap items-center gap-2 bg-[#160B07] p-1.5 rounded-2xl border border-white/15 shrink-0">
            <button
              onClick={() => setStanceCategoryFilter("all")}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                stanceCategoryFilter === "all"
                  ? "bg-[#F5D06C] text-[#140A06]"
                  : "text-amber-100 hover:text-white"
              }`}
            >
              Tất Cả (8 Bộ)
            </button>
            <button
              onClick={() => setStanceCategoryFilter("Tấn Pháp Tĩnh & Chuyển Trục")}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                stanceCategoryFilter === "Tấn Pháp Tĩnh & Chuyển Trục"
                  ? "bg-[#F5D06C] text-[#140A06]"
                  : "text-amber-100 hover:text-white"
              }`}
            >
              Tấn Gốc &amp; Chuyển Trục
            </button>
            <button
              onClick={() => setStanceCategoryFilter("Bộ Pháp Di Chuyển & Nhập Nội")}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                stanceCategoryFilter === "Bộ Pháp Di Chuyển & Nhập Nội"
                  ? "bg-[#F5D06C] text-[#140A06]"
                  : "text-amber-100 hover:text-white"
              }`}
            >
              Bộ Pháp Di Chuyển &amp; Hoành Thoái
            </button>
            <button
              onClick={() => setStanceCategoryFilter("Tấn Pháp Đặc Dị & Binh Khí")}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                stanceCategoryFilter === "Tấn Pháp Đặc Dị & Binh Khí"
                  ? "bg-[#F5D06C] text-[#140A06]"
                  : "text-amber-100 hover:text-white"
              }`}
            >
              Quy Mã, Xà, Cước &amp; Binh Khí
            </button>
          </div>
        </div>

        {/* Thanh chọn nhanh 8 Thế Tấn & Bộ Pháp */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
          {WING_CHUN_STANCES_AND_FOOTWORK_ATLAS.map((stance) => {
            const isSelected = activeStanceStudy.id === stance.id;
            const isDimmed =
              stanceCategoryFilter !== "all" && stance.category !== stanceCategoryFilter;
            return (
              <button
                key={stance.id}
                onClick={() => setSelectedStanceId(stance.id)}
                className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#F5D06C] text-[#140A06] border-[#F5D06C] font-bold shadow-xl shadow-[#F5D06C]/20"
                    : isDimmed
                    ? "bg-[#120906] text-amber-200/70 border-white/10 hover:border-[#F5D06C]/40"
                    : "bg-[#190D09] text-amber-100 border-white/15 hover:border-[#F5D06C]/60"
                }`}
              >
                <span
                  className={`text-xs font-mono uppercase ${
                    isSelected ? "text-amber-950 font-extrabold" : "text-[#F5D06C]"
                  }`}
                >
                  Bộ 0{stance.order}/08
                </span>
                <span className="text-xs sm:text-sm font-bold mt-1.5 line-clamp-2">
                  {stance.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* BẢNG PHÂN TÍCH CHUYÊN SÂU CỦA BỘ PHÁP ĐANG CHỌN (ẢNH VÕ SƯ + SƠ ĐỒ BÀN CHÂN + PHÂN TÍCH) */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-[#F5D06C]/45 bg-gradient-to-br from-[#190E09] via-[#130A06] to-[#1B0F0A] space-y-8 shadow-2xl">
          {/* Header của Bộ pháp đang chọn */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3.5 py-1 rounded-full bg-[#F5D06C] text-[#140A06] text-xs sm:text-sm font-extrabold">
                  BỘ PHÁP 0{activeStanceStudy.order} / 08
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-bold">
                  {activeStanceStudy.category}
                </span>
                <span className="text-xs sm:text-sm font-mono font-bold text-[#F5D06C]">
                  {activeStanceStudy.hanNom}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-white">
                {activeStanceStudy.title}
              </h3>
              <p className="text-xs sm:text-sm text-amber-200 font-medium">
                🎯 {activeStanceStudy.subtitle}
              </p>
            </div>

            {/* Nút chuyển qua bộ pháp kế tiếp */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {onOpenDojoLesson && activeStanceStudy.relatedLessonId && (
                <button
                  onClick={() => onOpenDojoLesson(activeStanceStudy.relatedLessonId!)}
                  className="px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-[#F5D06C]/40 text-[#F5D06C] text-xs sm:text-sm font-bold transition-all cursor-pointer"
                >
                  🥋 Vào Bài Quyền Thực Hành ({activeStanceStudy.relatedLessonId.toUpperCase()})
                </button>
              )}
              <button
                onClick={() => {
                  const currentIdx = WING_CHUN_STANCES_AND_FOOTWORK_ATLAS.findIndex(
                    (s) => s.id === activeStanceStudy.id
                  );
                  const nextIdx =
                    currentIdx < WING_CHUN_STANCES_AND_FOOTWORK_ATLAS.length - 1
                      ? currentIdx + 1
                      : 0;
                  setSelectedStanceId(WING_CHUN_STANCES_AND_FOOTWORK_ATLAS[nextIdx].id);
                }}
                className="px-5 py-3 rounded-2xl bg-[#F5D06C] hover:bg-[#E2B743] text-[#140A06] text-xs sm:text-sm font-extrabold flex items-center gap-2 transition-all cursor-pointer shadow-lg"
              >
                <span>Bộ Pháp Tiếp Theo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hàng 1: Cặp Tư Liệu Đối Chứng Sách Gốc (Ảnh Võ Sư Thị Phạm + Sơ Đồ Bàn Chân) & Thông Số Hình Học */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Cột 1 (4 Cols): Ảnh Võ Sư Thị Phạm Sách Gốc */}
            <div
              onClick={() =>
                setZoomImg({
                  src: activeStanceStudy.primaryImg,
                  title: `${activeStanceStudy.title} — Ảnh Tư Liệu Sách Gốc`,
                  caption: activeStanceStudy.primaryImgCaption,
                })
              }
              className="lg:col-span-4 group rounded-2xl overflow-hidden border-2 border-[#F5D06C]/45 bg-[#FBF9F5] p-4 flex flex-col justify-between cursor-pointer hover:border-[#F5D06C] transition-all shadow-lg"
            >
              <div className="relative h-64 sm:h-72 w-full">
                <Image
                  src={activeStanceStudy.primaryImg}
                  alt={activeStanceStudy.primaryImgCaption}
                  fill
                  className="object-contain martial-filter group-hover:scale-105 transition-transform"
                  sizes="(max-width: 1024px) 100vw, 360px"
                />
              </div>
              <div className="mt-3 pt-3 border-t border-amber-900/20 text-center space-y-1">
                <span className="text-xs font-extrabold uppercase text-amber-900 block">
                  📸 Ảnh Tư Liệu Sách Gốc (Hình Chụp / Sơ Đồ Chính)
                </span>
                <p className="text-xs sm:text-sm font-serif font-bold text-stone-900">
                  {activeStanceStudy.primaryImgCaption}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 underline">
                  <Maximize2 className="w-3.5 h-3.5" /> Phóng to ảnh tư liệu
                </span>
              </div>
            </div>

            {/* Cột 2 (4 Cols): Sơ Đồ Dấu Chân / Quỹ Đạo Bước Chân Sách Gốc */}
            <div
              onClick={() =>
                setZoomImg({
                  src: activeStanceStudy.diagramImg,
                  title: `${activeStanceStudy.title} — Sơ Đồ Bàn Chân & Đối Chứng`,
                  caption: activeStanceStudy.diagramImgCaption,
                })
              }
              className="lg:col-span-4 group rounded-2xl overflow-hidden border-2 border-emerald-500/45 bg-[#FBF9F5] p-4 flex flex-col justify-between cursor-pointer hover:border-emerald-400 transition-all shadow-lg"
            >
              <div className="relative h-64 sm:h-72 w-full">
                <Image
                  src={activeStanceStudy.diagramImg}
                  alt={activeStanceStudy.diagramImgCaption}
                  fill
                  className="object-contain martial-filter group-hover:scale-105 transition-transform"
                  sizes="(max-width: 1024px) 100vw, 360px"
                />
              </div>
              <div className="mt-3 pt-3 border-t border-amber-900/20 text-center space-y-1">
                <span className="text-xs font-extrabold uppercase text-emerald-900 block">
                  👣 Sơ Đồ Bàn Chân / Ảnh Đối Chứng Sách Gốc
                </span>
                <p className="text-xs sm:text-sm font-serif font-bold text-stone-900">
                  {activeStanceStudy.diagramImgCaption}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 underline">
                  <Maximize2 className="w-3.5 h-3.5" /> Phóng to sơ đồ đối chứng
                </span>
              </div>
            </div>

            {/* Cột 3 (4 Cols): Hộp Thông Số Hình Học & Trọng Lượng Chuẩn Xác */}
            <div className="lg:col-span-4 rounded-2xl bg-[#1F110B] border border-[#F5D06C]/35 p-5 sm:p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3.5">
                <h4 className="text-base sm:text-lg font-bold font-serif text-[#F5D06C] border-b border-white/10 pb-2">
                  📐 Thông Số Hình Học &amp; Phân Bổ Trọng Tâm
                </h4>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase text-amber-300 block">
                    1. Khoảng cách &amp; Góc hai bàn chân:
                  </span>
                  <p className="text-xs sm:text-sm text-white leading-relaxed">
                    {activeStanceStudy.geometryAndWeight.footSpacing}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase text-emerald-300 block">
                    2. Phân bổ trọng lượng (Hư – Thực):
                  </span>
                  <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                    {activeStanceStudy.geometryAndWeight.weightDistribution}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase text-[#F5D06C] block">
                    3. Tâm xoay &amp; Điểm tựa bàn chân:
                  </span>
                  <p className="text-xs sm:text-sm text-amber-100 leading-relaxed">
                    {activeStanceStudy.geometryAndWeight.pivotPoint}
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase text-sky-300 block">
                    4. Góc thân người &amp; Trục Tý Ngọ:
                  </span>
                  <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
                    {activeStanceStudy.geometryAndWeight.bodyAngle}
                  </p>
                </div>
              </div>

              {/* Nguyên văn trích dẫn sách gốc */}
              <div className="p-3.5 rounded-xl bg-black/40 border-l-4 border-[#F5D06C] space-y-1">
                <p className="text-xs sm:text-sm font-serif italic text-amber-100">
                  {activeStanceStudy.canonicalQuote}
                </p>
                <span className="block text-xs font-mono font-bold text-[#F5D06C]">
                  — {activeStanceStudy.bookPageRef}
                </span>
              </div>
            </div>
          </div>

          {/* Hàng 2: Phân Tích Đặc Điểm Cấu Trúc + Phương Pháp Kết Hợp Di Chuyển + Nguồn Trích Dẫn */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Hộp 1 (7 Cols): Đặc điểm cấu trúc thân – thủ – bộ */}
            <div className="lg:col-span-7 p-5 sm:p-6 rounded-2xl bg-[#170C08] border border-white/15 space-y-3">
              <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#F5D06C] flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>1. Đặc Điểm Cấu Trúc Thân – Thủ – Bộ &amp; Phân Tích Sách Gốc</span>
              </h4>
              <ul className="space-y-2.5">
                {activeStanceStudy.structuralCharacteristics.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm sm:text-base text-[#FAF6F0] leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#F5D06C] shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hộp 2 (5 Cols): Phương pháp kết hợp di chuyển & Nguồn trích dẫn */}
            <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
              <div className="p-5 sm:p-6 rounded-2xl bg-[#111C16] border border-emerald-500/35 space-y-2.5">
                <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-2">
                  <Footprints className="w-4 h-4" />
                  <span>2. Phương Pháp Kết Hợp Di Chuyển &amp; Ứng Dụng Chiến Đấu</span>
                </h4>
                <p className="text-sm sm:text-base text-emerald-50 leading-relaxed">
                  {activeStanceStudy.movementIntegration}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                <span className="text-xs sm:text-sm font-bold uppercase text-[#F5D06C] flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4" /> Nguồn Trích Dẫn Cho Bộ Pháp 0{activeStanceStudy.order}:
                </span>
                <ul className="space-y-1 text-xs sm:text-sm font-mono text-amber-100/90">
                  {activeStanceStudy.academicCitations.map((cit, idx) => (
                    <li key={idx}>• {cit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* LƯỚI TỔNG QUAN TOÀN BỘ 8 TẤN PHÁP & BỘ PHÁP (GALLERY ATLAS ĐỐI CHIẾU NHANH) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg sm:text-xl font-bold font-serif text-[#F5D06C]">
              Bản Đồ Trực Quan Toàn Bộ {filteredStanceAtlas.length} Thế Đứng Tấn &amp; Bộ Pháp (Bấm Vào Thẻ Để Mổ Xẻ Chi Tiết)
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredStanceAtlas.map((stance) => {
              const isCurrent = activeStanceStudy.id === stance.id;
              return (
                <div
                  key={stance.id}
                  onClick={() => setSelectedStanceId(stance.id)}
                  className={`rounded-2xl p-4 border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                    isCurrent
                      ? "bg-[#22120B] border-2 border-[#F5D06C] shadow-xl"
                      : "bg-[#140B07] border-white/15 hover:border-[#F5D06C]/60"
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#F5D06C]/20 border border-[#F5D06C]/40 text-[#F5D06C] text-xs font-bold">
                        Bộ 0{stance.order}
                      </span>
                      <span className="text-xs font-mono text-emerald-300 truncate">
                        {stance.hanNom}
                      </span>
                    </div>

                    {/* Cặp ảnh thu nhỏ: Võ sư + Sơ đồ chân */}
                    <div className="grid grid-cols-2 gap-2 bg-[#FBF9F5] rounded-xl p-2 border border-amber-900/20">
                      <div className="relative h-28 w-full">
                        <Image
                          src={stance.primaryImg}
                          alt={stance.title}
                          fill
                          className="object-contain martial-filter"
                          sizes="140px"
                        />
                      </div>
                      <div className="relative h-28 w-full border-l border-stone-300 pl-1">
                        <Image
                          src={stance.diagramImg}
                          alt={stance.diagramImgCaption}
                          fill
                          className="object-contain martial-filter"
                          sizes="140px"
                        />
                      </div>
                    </div>

                    <h4 className="text-base font-bold font-serif text-white leading-snug">
                      {stance.title}
                    </h4>
                    <p className="text-xs text-amber-100/85 line-clamp-3 leading-relaxed">
                      {stance.subtitle}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#F5D06C]">
                    <span className="truncate max-w-[60%]">{stance.bookPageRef}</span>
                    <span className="underline font-bold shrink-0">
                      {isCurrent ? "Đang xem" : "Chi tiết →"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5 NGUYÊN TẮC VÀNG KHI KẾT HỢP TẤN PHÁP & DI CHUYỂN (SÁCH GỐC TR. 31-35, 161-166) */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#F5D06C]/35 bg-[#150B07] space-y-6">
          <div className="space-y-1.5 border-b border-white/10 pb-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-300 block">
              Nguyên Lý Cốt Tủy Khi Vận Bộ (Sách Gốc Trang 31–35 &amp; 161–166)
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
              5 Nguyên Tắc Vàng Kết Hợp Giữa Đứng Tấn &amp; Phương Pháp Di Chuyển Vịnh Xuân
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {FIVE_FOOTWORK_MOBILITY_PRINCIPLES.map((prin) => (
              <div
                key={prin.id}
                className="p-5 rounded-2xl bg-[#1D100A] border border-white/15 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-0.5 rounded-full bg-[#F5D06C] text-[#140A06] text-xs font-extrabold">
                      {prin.number}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#F5D06C]">
                      {prin.hanNom}
                    </span>
                  </div>
                  <h4 className="text-base sm:text-lg font-bold font-serif text-white leading-snug">
                    {prin.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-serif italic text-emerald-300 bg-emerald-950/30 p-3 rounded-xl border border-emerald-500/30">
                    💡 Hình ảnh ẩn dụ: {prin.metaphor}
                  </p>
                  <p className="text-sm text-amber-100/90 leading-relaxed">
                    {prin.mechanism}
                  </p>
                </div>
                <p className="text-xs font-mono text-amber-200/85 pt-2 border-t border-white/10">
                  📚 {prin.sourceRef}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* BẢNG ĐỐI SÁNH QUỐC TẾ 4 HỆ PHÁI: PHẬT GIA VỊNH XUÂN vs CỔ LAO vs HỒNG KÔNG vs NGOẠI GIA */}
        <div className="glass-panel rounded-3xl overflow-hidden border border-[#F5D06C]/35 bg-[#140B07]">
          <div className="p-5 sm:p-6 bg-[#1E110B] border-b border-white/10 space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F5D06C] block">
              Khảo Cứu Đối Chiếu Liên Hệ Phái (Sách Gốc Tr. 25, 31 &amp; Tư Liệu Quốc Tế [1], [2], [3], [4])
            </span>
            <h3 className="text-lg sm:text-2xl font-bold font-serif text-white">
              Bảng Đối Sánh Tấn Pháp &amp; Bộ Pháp: Phật Gia Vịnh Xuân (VN) • Vịnh Xuân Cổ Lao (Lương Tán) • Vịnh Xuân Hồng Kông (Diệp Vấn) • Võ Ngoại Gia
            </h3>
          </div>

          <div className="divide-y divide-white/10">
            {WING_CHUN_LINEAGE_STANCE_COMPARISON.map((row, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 space-y-4 hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-base sm:text-lg font-bold font-serif text-[#F5D06C]">
                    {row.dimension}
                  </h4>
                  <span className="text-xs font-mono text-amber-200/90">
                    📖 {row.sourceRef}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 rounded-2xl bg-amber-950/35 border border-[#F5D06C]/45 space-y-1">
                    <span className="text-xs font-extrabold uppercase text-[#F5D06C] block">
                      🇻🇳 1. Phật Gia Vịnh Xuân (Việt Nam)
                    </span>
                    <p className="text-xs sm:text-sm text-[#FAF6F0] leading-relaxed">
                      {row.pgvxVietnam}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/35 space-y-1">
                    <span className="text-xs font-extrabold uppercase text-emerald-300 block">
                      🏮 2. Vịnh Xuân Cổ Lao (Lương Tán)
                    </span>
                    <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed">
                      {row.gulaoLiangJan}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-sky-950/30 border border-sky-400/35 space-y-1">
                    <span className="text-xs font-extrabold uppercase text-sky-300 block">
                      🇭🇰 3. Vịnh Xuân Hồng Kông (Diệp Vấn)
                    </span>
                    <p className="text-xs sm:text-sm text-sky-50 leading-relaxed">
                      {row.hongKongIpMan}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-rose-950/25 border border-rose-500/30 space-y-1">
                    <span className="text-xs font-extrabold uppercase text-rose-300 block">
                      🥊 4. Võ Ngoại Gia / Karate / Boxing
                    </span>
                    <p className="text-xs sm:text-sm text-rose-100 leading-relaxed">
                      {row.externalKarateBoxing}
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
