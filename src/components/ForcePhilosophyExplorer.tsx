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
  Flame,
  ShieldCheck,
  ArrowRight,
  Layers,
  GraduationCap,
  LayoutGrid,
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
  LimbForceSecret,
} from "@/data/forcePhilosophy";

interface ForcePhilosophyExplorerProps {
  onOpenDojoLesson?: (lessonId: string) => void;
}

export type ForceChapterTab =
  | "all"
  | "stations"
  | "stances"
  | "secrets"
  | "qi-science"
  | "experiments-bib";

export const ForcePhilosophyExplorer: React.FC<ForcePhilosophyExplorerProps> = ({
  onOpenDojoLesson,
}) => {
  // Chế độ phân chương cân đối (Mặc định hiển thị tất cả theo bố cục đối xứng chuẩn, hoặc lọc từng chương)
  const [activeChapter, setActiveChapter] = useState<ForceChapterTab>("all");

  // Chương I: Trạm đang chọn trong sơ đồ 5 trạm (0..4)
  const [selectedStationIndex, setSelectedStationIndex] = useState<number>(0);
  const [simulationMode, setSimulationMode] = useState<"connected" | "blocked">("connected");
  const [stanceBodyView, setStanceBodyView] = useState<"chinh-than" | "bien-than">("chinh-than");

  // Chương II: Thế đứng tấn / Bộ pháp đang chọn (1..8)
  const [selectedStanceId, setSelectedStanceId] = useState<string>(
    WING_CHUN_STANCES_AND_FOOTWORK_ATLAS[0].id
  );
  const [stanceCategoryFilter, setStanceCategoryFilter] = useState<
    "all" | StanceAndFootworkStudy["category"]
  >("all");

  // Chương III: Bí quyết dùng lực Tay & Chân (1..6) + Đồ thị Vật lý
  const [selectedSecretId, setSelectedSecretId] = useState<string>(LIMB_FORCE_SECRETS[0].id);
  const [chartType, setChartType] = useState<"impulse" | "longevity">("impulse");

  // Chương IV: Chuyên khảo Khí công đang chọn (1..4)
  const [activeQiId, setActiveQiId] = useState<string>(UNEXPLAINED_QI_PHENOMENA[0].id);

  // Lightbox phóng to ảnh tư liệu
  const [zoomImg, setZoomImg] = useState<{ src: string; title: string; caption?: string } | null>(
    null
  );

  const activeNode: KineticQiNode =
    FIVE_KINETIC_QI_NODES[selectedStationIndex] || FIVE_KINETIC_QI_NODES[0];

  const activeStanceStudy: StanceAndFootworkStudy =
    WING_CHUN_STANCES_AND_FOOTWORK_ATLAS.find((s) => s.id === selectedStanceId) ||
    WING_CHUN_STANCES_AND_FOOTWORK_ATLAS[0];

  const activeLimbSecret: LimbForceSecret =
    LIMB_FORCE_SECRETS.find((s) => s.id === selectedSecretId) || LIMB_FORCE_SECRETS[0];

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

  // Tọa độ 5 trạm chuẩn xác trên ảnh Võ sư Sách gốc (viewBox 0 0 600 600)
  const svgStationCoords =
    stanceBodyView === "chinh-than"
      ? [
          { station: 1, x: 255, y: 535, short: "1. Bàn Chân Chữ Bát & Dũng Tuyền (K1)" },
          { station: 2, x: 270, y: 420, short: "2. Vòm Khóa Gối Nhị Tự Kiềm Dương" },
          { station: 3, x: 295, y: 310, short: "3. Hạ Đan Điền & Trục Lưng Thẳng" },
          { station: 4, x: 330, y: 195, short: "4. Trầm Kiên & Thu Quyền Sát Nách" },
          { station: 5, x: 245, y: 205, short: "5. Lao Cung & Nhật Tự Xung Quyền" },
        ]
      : [
          { station: 1, x: 235, y: 535, short: "1. Chân Sau 70% & Túc Bất Ly Địa" },
          { station: 2, x: 265, y: 420, short: "2. Khớp Gối Đàn Hồi Tiến Bộ" },
          { station: 3, x: 285, y: 310, short: "3. Trục Xoay Biên Thân 90° & Đan Điền" },
          { station: 4, x: 315, y: 195, short: "4. Vai Thả Lỏng Chìa Ra Trước" },
          { station: 5, x: 205, y: 185, short: "5. Nhật Tự Xung Quyền Bộc Phát" },
        ];

  const chapterTabs: {
    id: ForceChapterTab;
    label: string;
    shortLabel: string;
    countBadge: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    {
      id: "all",
      label: "Toàn Cảnh 5 Chương",
      shortLabel: "Tất Cả",
      countBadge: "Đầy đủ",
      icon: LayoutGrid,
    },
    {
      id: "stations",
      label: "I. Chuỗi 5 Trạm (Chân ➔ Tay)",
      shortLabel: "I. 5 Trạm Lực",
      countBadge: "5 Trạm",
      icon: Activity,
    },
    {
      id: "stances",
      label: "II. Tấn Pháp & Bộ Pháp",
      shortLabel: "II. 8 Bộ Pháp",
      countBadge: "8 Bộ",
      icon: Footprints,
    },
    {
      id: "secrets",
      label: "III. Bí Quyết Tay – Chân & Vật Lý",
      shortLabel: "III. 6 Bí Quyết",
      countBadge: "6 Cơ chế",
      icon: Hand,
    },
    {
      id: "qi-science",
      label: "IV. Khí Lực & Khoa Học",
      shortLabel: "IV. Khí Lực",
      countBadge: "4 Chuyên khảo",
      icon: Flame,
    },
    {
      id: "experiments-bib",
      label: "V. Thực Nghiệm & Nguồn [1]–[10]",
      shortLabel: "V. Thực Nghiệm",
      countBadge: "10 Nguồn",
      icon: GraduationCap,
    },
  ];

  const showSection = (sec: ForceChapterTab) =>
    activeChapter === "all" || activeChapter === sec;

  const featuredPrinciple = FIVE_FOOTWORK_MOBILITY_PRINCIPLES[0];
  const gridPrinciples = FIVE_FOOTWORK_MOBILITY_PRINCIPLES.slice(1);

  return (
    <div className="space-y-10 sm:space-y-12 animate-fadeIn">
      {/* ========================================================================= */}
      {/* 1. HERO BANNER CÂN ĐỐI 6:6 + THANH ĐIỀU HƯỚNG 5 CHƯƠNG CHUYÊN KHẢO        */}
      {/* ========================================================================= */}
      <section className="relative rounded-3xl glass-panel p-6 sm:p-8 lg:p-10 border border-[#F5D06C]/35 overflow-hidden shadow-2xl bg-gradient-to-br from-[#1C0F0A] via-[#130A06] to-[#1F110B]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Cột Trái (6 Cols): Tuyên ngôn & Khẩu quyết */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5D06C]/15 border border-[#F5D06C]/40 text-[#F5D06C] text-xs sm:text-sm font-bold tracking-wider uppercase">
                <Zap className="w-4 h-4" />
                <span>{FORCE_PHILOSOPHY_HERO.eyebrow}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-serif tracking-tight leading-tight gold-gradient">
                {FORCE_PHILOSOPHY_HERO.title}
              </h1>

              <p className="text-sm sm:text-base text-[#FAF6F0] leading-relaxed">
                {FORCE_PHILOSOPHY_HERO.subtitle}
              </p>
            </div>

            {/* Khẩu quyết đối xứng Đông - Tây */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#180D08]/95 border-l-4 border-[#F5D06C] space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-mono font-bold text-[#F5D06C] tracking-wider uppercase">
                  {FORCE_PHILOSOPHY_HERO.hanNom}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-200 text-xs font-serif italic">
                  &ldquo;Structure before Speed&rdquo;
                </span>
              </div>
              <p className="text-base sm:text-lg font-serif font-bold text-white">
                &ldquo;{FORCE_PHILOSOPHY_HERO.coreMotto}&rdquo;
              </p>
              <p className="text-xs text-amber-200/90 font-mono">
                📚 Nguồn trích dẫn gốc: {FORCE_PHILOSOPHY_HERO.coreMottoSource}
              </p>
            </div>
          </div>

          {/* Cột Phải (6 Cols): Đồ Hình Chuẩn Tư Liệu Sách Gốc + 4 Chỉ Số Cốt Lõi */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            <div
              onClick={() =>
                setZoomImg({
                  src: "/assets/images/fundamentals/wing_chun_kinetic_qi_diagram.jpg",
                  title:
                    "Đồ Hình Chuẩn Sách Gốc: Hệ Thống Tấn Pháp, Bộ Pháp & Chuỗi Truyền Lực 5 Trạm Vịnh Xuân",
                  caption:
                    "Dựng trực tiếp từ ảnh võ sư thị phạm và sơ đồ bàn chân nguyên bản trong sách «Phật Gia Vịnh Xuân Quyền» (PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức, 2006 — Trang 19, 30–35, 37, 161–166): Nhị Tự Kiềm Dương Mã (2 mũi chân cách 1 bàn chân, 2 gót cách 2 bàn chân, gối hơi khuỵu, lưng thẳng, tay thu sát nách) kết hợp Biên Thân 90°, Xước Mã và Hoành Thoái.",
                })
              }
              className="group relative rounded-2xl overflow-hidden border-2 border-[#F5D06C]/45 hover:border-[#F5D06C] shadow-2xl cursor-pointer bg-[#110A07] transition-all flex-1 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/assets/images/fundamentals/wing_chun_kinetic_qi_diagram.jpg"
                  alt="Đồ hình Chuẩn Sách Gốc: Tấn pháp, Bộ pháp và Chuỗi truyền lực 5 trạm Vịnh Xuân Quyền"
                  fill
                  className="object-contain bg-[#110A07] group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="p-3 bg-[#140A06]/95 border-t border-white/10 flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm font-medium text-amber-100">
                  Đồ hình Tấn Pháp &amp; 5 Trạm Dẫn Lực (Chuẩn Sách Gốc Tr. 30–37)
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#F5D06C] shrink-0">
                  <Maximize2 className="w-4 h-4" />
                  Phóng to
                </span>
              </div>
            </div>

            {/* 4 ô thống kê cân đối dưới đồ hình */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <span className="text-base sm:text-lg font-extrabold text-[#F5D06C] block">
                  5 Trạm
                </span>
                <span className="text-xs text-amber-100/90">Chân ➔ Đan Điền ➔ Tay</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <span className="text-base sm:text-lg font-extrabold text-emerald-300 block">
                  8 Bộ Pháp
                </span>
                <span className="text-xs text-amber-100/90">Tấn &amp; Di chuyển gốc</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <span className="text-base sm:text-lg font-extrabold text-[#F5D06C] block">
                  6 Bí Quyết
                </span>
                <span className="text-xs text-amber-100/90">3 Thủ pháp • 3 Bộ cước</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <span className="text-base sm:text-lg font-extrabold text-emerald-300 block">
                  10 Nguồn
                </span>
                <span className="text-xs text-amber-100/90">Sách gốc &amp; Quốc tế</span>
              </div>
            </div>
          </div>
        </div>

        {/* Thanh Chuyển Chương Cân Đối 6 Nút (Grid 2x3 trên Mobile, 6 Cột đều nhau trên Desktop) */}
        <div className="mt-7 pt-5 border-t border-white/10 space-y-2.5">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-200/90">
              Chọn chế độ xem toàn cảnh hoặc tập trung từng chương chuyên khảo:
            </span>
            <span className="text-xs font-mono text-emerald-300">
              ✨ Bố cục đối xứng chuẩn mực • Dễ đọc • Không cuộn mỏi mắt
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {chapterTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeChapter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveChapter(tab.id)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? "bg-[#F5D06C] text-[#140A06] border-[#F5D06C] font-bold shadow-lg shadow-[#F5D06C]/25"
                      : "bg-[#160B07]/90 text-amber-100 border-white/15 hover:border-[#F5D06C]/60 hover:bg-white/5"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1.5 w-full">
                    <Icon
                      className={`w-4 h-4 shrink-0 ${
                        isActive ? "text-[#140A06]" : "text-[#F5D06C]"
                      }`}
                    />
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-[#140A06]/15 text-[#140A06] font-extrabold"
                          : "bg-white/10 text-amber-200"
                      }`}
                    >
                      {tab.countBadge}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold mt-2 line-clamp-1">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CHƯƠNG I: MÔ HÌNH TƯƠNG TÁC 5 TRẠM TRÊN TƯ THẾ ĐỨNG TẤN SÁCH GỐC       */}
      {/* ========================================================================= */}
      {showSection("stations") && (
        <section id="kinetic-5-stations" className="space-y-6 scroll-mt-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div className="space-y-1.5 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-[#F5D06C] text-xs sm:text-sm font-bold uppercase tracking-wider">
                <Activity className="w-4 h-4" />
                <span>Chương I • Giải Phẫu Chuỗi Động Học &amp; Kinh Mạch Trên Tấn Pháp Chuẩn Sách Gốc</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif gold-gradient">
                Vì Sao Đứng Tấn Nhị Tự Kiềm Dương Hẹp &amp; Thẳng Lưng Mà Lực Từ Chân Chạy Lên Tay Được?
              </h2>
              <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed">
                Bấm vào từng <strong>Trạm (1 → 5)</strong> trên hình chụp Võ sư Sách gốc hoặc chuyển đổi giữa{" "}
                <strong className="text-emerald-300">Tùng Tĩnh Thông Mạch (100%)</strong> và{" "}
                <strong className="text-rose-300">Gồng Vai Đứt Mạch (Chỉ còn 15%)</strong> để đối chiếu cơ chế.
              </p>
            </div>

            {/* Nút chuyển chế độ mô phỏng Thông Mạch vs Đứt Mạch */}
            <div className="flex flex-wrap items-center gap-2 bg-[#160B07] p-1.5 rounded-2xl border border-white/15 shrink-0">
              <button
                onClick={() => setSimulationMode("connected")}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  simulationMode === "connected"
                    ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/25"
                    : "text-amber-100 hover:text-white"
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Tùng Tĩnh Thông Mạch (100%)</span>
              </button>
              <button
                onClick={() => {
                  setSimulationMode("blocked");
                  setSelectedStationIndex(3);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                  simulationMode === "blocked"
                    ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30"
                    : "text-amber-100 hover:text-white"
                }`}
              >
                <AlertTriangle className="w-4 h-4" />
                <span>Lỗi Gồng Vai (Đứt Mạch)</span>
              </button>
            </div>
          </div>

          {/* Bố cục 12 Cột Cân Đối Chiều Cao 100% (items-stretch): Trái 5 Cột | Phải 7 Cột */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* CỘT TRÁI (5 COLS): Ảnh Võ Sư Sách Gốc + Sơ Đồ Dấu Chân Tách Riêng Không Đè Lên Chân Võ Sư */}
            <div className="lg:col-span-5 glass-panel rounded-3xl p-5 sm:p-6 border border-[#F5D06C]/35 bg-[#120906] flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-bold font-serif text-[#FAF6F0]">
                    Tư Thế Võ Sư Thực Tế Trong Sách Gốc
                  </h3>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold shrink-0 ${
                      simulationMode === "connected"
                        ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                        : "bg-rose-500/20 text-rose-300 border border-rose-500/40"
                    }`}
                  >
                    {simulationMode === "connected" ? "Mạch Khép Kín 100%" : "Đứt Mạch Ở Vai"}
                  </span>
                </div>

                {/* Chuyển đổi giữa 2 tư thế đứng tấn thật trong Sách gốc */}
                <div className="grid grid-cols-2 gap-2 bg-[#1A0E09] p-1.5 rounded-2xl border border-white/10">
                  <button
                    onClick={() => setStanceBodyView("chinh-than")}
                    className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      stanceBodyView === "chinh-than"
                        ? "bg-[#F5D06C] text-[#140A06] shadow-md"
                        : "text-amber-100 hover:text-white"
                    }`}
                  >
                    1. Chính Thân Kiềm Dương (H.37)
                  </button>
                  <button
                    onClick={() => setStanceBodyView("bien-than")}
                    className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      stanceBodyView === "bien-than"
                        ? "bg-[#F5D06C] text-[#140A06] shadow-md"
                        : "text-amber-100 hover:text-white"
                    }`}
                  >
                    2. Biên Thân Tiến Mã (H.22)
                  </button>
                </div>

                {/* Khung Ảnh Võ Sư + Lớp Phủ SVG 5 Trạm (Tỷ lệ vuông 600x600 cân đối, không bị hộp chữ đè lên bàn chân) */}
                <div className="relative w-full aspect-square bg-[#FBF9F5] rounded-2xl border-2 border-[#F5D06C]/50 overflow-hidden shadow-inner">
                  <div className="absolute inset-0 p-3 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <Image
                        src={
                          stanceBodyView === "chinh-than"
                            ? "/assets/hinh-2x/p037-h04.png"
                            : "/assets/images/fundamentals/di_chuyen_ma_bo_authentic.png"
                        }
                        alt={
                          stanceBodyView === "chinh-than"
                            ? "Võ sư đứng Nhị Tự Kiềm Dương Mã phóng Nhật Tự Xung Quyền (Sách gốc Trang 37)"
                            : "Võ sư đứng Biên Thân tiến Xước Mã (Sách gốc Trang 30)"
                        }
                        fill
                        className="object-contain martial-filter"
                        sizes="(max-width: 1024px) 100vw, 460px"
                      />
                    </div>
                  </div>

                  {/* Lớp phủ SVG Vector Dẫn Lực & 5 Trạm Tương Tác */}
                  <svg
                    viewBox="0 0 600 600"
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

                    <line
                      x1="290"
                      y1="25"
                      x2="290"
                      y2="575"
                      stroke="#B45309"
                      strokeOpacity="0.35"
                      strokeDasharray="6 6"
                      strokeWidth="2"
                    />

                    <path
                      d={`M ${svgStationCoords[0].x} ${svgStationCoords[0].y} L ${svgStationCoords[1].x} ${svgStationCoords[1].y} L ${svgStationCoords[2].x} ${svgStationCoords[2].y} L ${svgStationCoords[3].x} ${svgStationCoords[3].y}`}
                      fill="none"
                      stroke="#D97706"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeDasharray="10 5"
                    />

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
                          r="40"
                          fill="url(#punchShockwave)"
                        />
                        <rect
                          x="16"
                          y="14"
                          width="285"
                          height="32"
                          rx="8"
                          fill="#140A06"
                          fillOpacity="0.9"
                          stroke="#10B981"
                          strokeWidth="1.5"
                        />
                        <text x="28" y="35" fill="#34D399" fontSize="13" fontWeight="bold">
                          ⚡ TÙNG TĨNH THÔNG MẠCH: 100% KÌNH
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
                          r="28"
                          fill="#DC2626"
                          fillOpacity="0.35"
                          stroke="#DC2626"
                          strokeWidth="2.5"
                        />
                        <rect
                          x="16"
                          y="14"
                          width="335"
                          height="44"
                          rx="8"
                          fill="#450A0A"
                          fillOpacity="0.95"
                          stroke="#F87171"
                          strokeWidth="1.5"
                        />
                        <text x="28" y="33" fill="#FCA5A5" fontSize="12" fontWeight="bold">
                          ✕ GỒNG VAI (TRẠM 4) = ĐỨT MẠCH LỰC TỪ CHÂN!
                        </text>
                        <text x="28" y="49" fill="#FECACA" fontSize="12">
                          Nắm đấm chỉ còn ~15% sức cơ bắp cánh tay cục bộ
                        </text>
                      </>
                    )}

                    <circle
                      cx={svgStationCoords[2].x}
                      cy={svgStationCoords[2].y}
                      r="30"
                      fill="url(#dantianGlow)"
                    />

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
              </div>

              {/* Chân đế Cột Trái: Sơ Đồ Bàn Chân Sách Gốc + Chú Giải 2 Luồng Lực (Tách riêng gọn gàng, cân đối) */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-1 items-stretch">
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
                  className="sm:col-span-5 rounded-2xl bg-[#FBF9F5] border-2 border-[#F5D06C]/45 p-2.5 flex flex-col justify-between cursor-pointer hover:border-[#F5D06C] transition-all"
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
                      sizes="180px"
                    />
                  </div>
                  <p className="text-xs font-serif font-bold text-stone-900 text-center mt-1">
                    {stanceBodyView === "chinh-than"
                      ? "👣 H.29: Mũi cách 1, gót cách 2 bàn chân"
                      : "👣 H.30: 2 bàn chân xoay song song"}
                  </p>
                </div>

                <div className="sm:col-span-7 flex flex-col justify-between gap-2">
                  <div className="p-2.5 rounded-xl bg-[#1C100B] border border-[#F5D06C]/30 flex items-center gap-2.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-[#F5D06C] shrink-0" />
                    <div className="text-xs">
                      <strong className="text-[#F5D06C] block">Luồng Cơ Sinh Học (Tây Y)</strong>
                      <span className="text-amber-100/90">Phản lực đất → Khớp → Mạc cơ</span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#1C100B] border border-emerald-500/30 flex items-center gap-2.5">
                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 shrink-0" />
                    <div className="text-xs">
                      <strong className="text-emerald-300 block">Mạch Nội Khí (Đông Y)</strong>
                      <span className="text-amber-100/90">Dũng Tuyền → Đan Điền → Lao Cung</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CỘT PHẢI (7 COLS): Thanh Chọn 5 Trạm + Phân Tích Đối Xứng Tây Y / Đông Y (Khớp chiều cao 100% với Cột Trái) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
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
                      <span className="text-xs sm:text-sm font-bold mt-1 line-clamp-1">
                        {node.bodyPart.replace(/^Trạm \d:\s*/, "")}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Hộp Nội Dung Chuyên Sâu Của Trạm Đang Chọn (flex-1 để cân bằng chiều cao với cột trái) */}
              <div className="glass-panel rounded-3xl p-5 sm:p-7 border border-[#F5D06C]/40 bg-[#160C08] flex-1 flex flex-col justify-between space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className="px-3 py-1 rounded-full bg-[#F5D06C] text-[#140A06] text-xs font-extrabold">
                        TRẠM {activeNode.step} / 5
                      </span>
                      <span className="text-xs sm:text-sm font-mono font-bold text-[#F5D06C]">
                        {activeNode.hanNom}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mt-1.5">
                      {activeNode.bodyPart}
                    </h3>
                    <p className="text-xs sm:text-sm text-amber-200/90 mt-1">
                      <strong>Giải phẫu &amp; Huyệt đạo:</strong> {activeNode.acupointOrAnatomy} •{" "}
                      <span className="text-emerald-300 font-semibold">{activeNode.shortRole}</span>
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      setSelectedStationIndex((prev) =>
                        prev < FIVE_KINETIC_QI_NODES.length - 1 ? prev + 1 : 0
                      )
                    }
                    className="self-start sm:self-auto px-4 py-2.5 rounded-xl bg-[#F5D06C] hover:bg-[#E2B743] text-[#140A06] text-xs sm:text-sm font-extrabold flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
                  >
                    <span>Trạm tiếp theo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* 2 Cột Đối Chiếu Cân Xứng: Khoa học Cơ sinh học Phương Tây vs Nội công Kinh mạch Phương Đông */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#1F110B] border border-[#F5D06C]/35 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-[#F5D06C] text-xs sm:text-sm font-bold uppercase tracking-wider">
                        <Activity className="w-4 h-4 shrink-0" />
                        <span>1. Cơ Sinh Học: {activeNode.biomechanicsTitle}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#FAF6F0] leading-relaxed">
                        {activeNode.biomechanicsMechanism}
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-[#F5D06C]/25 text-xs font-mono text-amber-200">
                      📐 {activeNode.physicsFormulaOrPrinciple}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-[#111C16] border border-emerald-500/35 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
                        <Wind className="w-4 h-4 shrink-0" />
                        <span>2. Nội Khí Đông Y: {activeNode.easternQiTitle}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#FAF6F0] leading-relaxed">
                        {activeNode.easternQiMechanism}
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-black/40 border border-emerald-500/25 text-xs text-emerald-200 font-serif italic">
                      📜 &ldquo;{activeNode.canonicalBookQuote}&rdquo;
                      <span className="block not-italic font-mono text-xs text-emerald-300/90 mt-1">
                        — {activeNode.bookPageRef}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hàng Đáy Cân Đối: Cảnh Báo Điểm Nghẽn + Ảnh Sách Gốc + Nguồn Trích Dẫn */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
                  <div className="md:col-span-7 flex flex-col justify-between gap-3">
                    <div className="p-4 rounded-2xl bg-rose-950/35 border border-rose-500/40 space-y-1.5">
                      <div className="flex items-center gap-2 text-rose-300 text-xs font-bold uppercase tracking-wider">
                        <AlertTriangle className="w-4 h-4 shrink-0" />
                        <span>Vì sao lực bị đứt nghẽn tại Trạm {activeNode.step}?</span>
                      </div>
                      <p className="text-xs sm:text-sm text-rose-100 leading-relaxed">
                        {activeNode.whyForceBreaks}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-xs font-bold uppercase text-[#F5D06C] flex items-center gap-1.5">
                        <GraduationCap className="w-4 h-4" /> Nguồn Trích Dẫn Trạm {activeNode.step}:
                      </span>
                      <ul className="space-y-0.5 text-xs text-amber-100/90 font-mono">
                        {activeNode.scientificCitations.map((cit, cIdx) => (
                          <li key={cIdx}>• {cit}</li>
                        ))}
                      </ul>
                    </div>
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
                      className="h-full group rounded-2xl overflow-hidden border-2 border-[#F5D06C]/40 bg-[#FBF9F5] p-3 flex flex-col justify-between cursor-pointer hover:border-[#F5D06C] transition-all"
                    >
                      <div className="relative h-36 w-full my-auto">
                        <Image
                          src={activeNode.bookImg}
                          alt={activeNode.bookImgCaption}
                          fill
                          className="object-contain martial-filter group-hover:scale-105 transition-transform"
                          sizes="(max-width: 768px) 100vw, 260px"
                        />
                      </div>
                      <p className="text-xs text-amber-950 font-serif font-bold text-center mt-2 line-clamp-2">
                        📖 {activeNode.bookImgCaption} (Phóng to)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 3. CHƯƠNG II: HỆ THỐNG 8 TẤN PHÁP & BỘ PHÁP DI CHUYỂN VỊNH XUÂN           */}
      {/* ========================================================================= */}
      {showSection("stances") && (
        <section id="stances-footwork-atlas" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-white/10 pb-5">
            <div className="space-y-2 max-w-4xl">
              <div className="inline-flex items-center gap-2 text-[#F5D06C] text-xs sm:text-sm font-bold uppercase tracking-wider">
                <Footprints className="w-4 h-4" />
                <span>Chương II • Chuyên Khảo Tấn Pháp, Bộ Pháp &amp; Phương Pháp Di Chuyển Vịnh Xuân</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif gold-gradient">
                Tổng Hợp 8 Thế Đứng Tấn &amp; Bộ Pháp Di Chuyển Của Vịnh Xuân Quyền
              </h2>
              <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed">
                Khảo cứu đối chứng từ <strong>Sách gốc Phật Gia Vịnh Xuân Quyền</strong> (Trang 19–20, 25, 29–35, 124, 137, 161–166, 185, 199–201) kết hợp công trình của{" "}
                <strong>Đại Tông Sư Diệp Vấn, Đại sư Chu Thượng Đồng, Đại sư Diệp Chuẩn</strong> và <strong>Sư tổ Lương Tán (Vịnh Xuân Cổ Lao)</strong>.
              </p>
            </div>

            {/* Bộ lọc nhóm Tấn pháp & Bộ pháp */}
            <div className="flex flex-wrap items-center gap-1.5 bg-[#160B07] p-1.5 rounded-2xl border border-white/15 shrink-0">
              <button
                onClick={() => setStanceCategoryFilter("all")}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  stanceCategoryFilter === "all"
                    ? "bg-[#F5D06C] text-[#140A06]"
                    : "text-amber-100 hover:text-white"
                }`}
              >
                Tất Cả (8 Bộ)
              </button>
              <button
                onClick={() => setStanceCategoryFilter("Tấn Pháp Tĩnh & Chuyển Trục")}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  stanceCategoryFilter === "Tấn Pháp Tĩnh & Chuyển Trục"
                    ? "bg-[#F5D06C] text-[#140A06]"
                    : "text-amber-100 hover:text-white"
                }`}
              >
                Tấn Gốc &amp; Xoay Trục
              </button>
              <button
                onClick={() => setStanceCategoryFilter("Bộ Pháp Di Chuyển & Nhập Nội")}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  stanceCategoryFilter === "Bộ Pháp Di Chuyển & Nhập Nội"
                    ? "bg-[#F5D06C] text-[#140A06]"
                    : "text-amber-100 hover:text-white"
                }`}
              >
                Tiến Lùi &amp; Hoành Thoái
              </button>
              <button
                onClick={() => setStanceCategoryFilter("Tấn Pháp Đặc Dị & Binh Khí")}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  stanceCategoryFilter === "Tấn Pháp Đặc Dị & Binh Khí"
                    ? "bg-[#F5D06C] text-[#140A06]"
                    : "text-amber-100 hover:text-white"
                }`}
              >
                Quy Mã, Xà, Cước &amp; Côn
              </button>
            </div>
          </div>

          {/* 1. Lưới Chọn 8 Thế Tấn & Bộ Pháp Cân Đối 2 Hàng × 4 Cột (Không bị hẹp hay trùng lặp) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {WING_CHUN_STANCES_AND_FOOTWORK_ATLAS.map((stance) => {
              const isSelected = activeStanceStudy.id === stance.id;
              const isDimmed =
                stanceCategoryFilter !== "all" && stance.category !== stanceCategoryFilter;
              return (
                <button
                  key={stance.id}
                  onClick={() => setSelectedStanceId(stance.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3.5 ${
                    isSelected
                      ? "bg-[#F5D06C] text-[#140A06] border-[#F5D06C] font-bold shadow-xl shadow-[#F5D06C]/20"
                      : isDimmed
                      ? "bg-[#120906] text-amber-200/70 border-white/10 hover:border-[#F5D06C]/40"
                      : "bg-[#180D09] text-amber-100 border-white/15 hover:border-[#F5D06C]/60"
                  }`}
                >
                  <div className="relative w-14 h-14 rounded-xl bg-[#FBF9F5] border border-amber-900/20 overflow-hidden shrink-0">
                    <Image
                      src={stance.primaryImg}
                      alt={stance.title}
                      fill
                      className="object-contain martial-filter p-1"
                      sizes="56px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <span
                        className={`text-xs font-mono uppercase ${
                          isSelected ? "text-amber-950 font-extrabold" : "text-[#F5D06C]"
                        }`}
                      >
                        Bộ 0{stance.order}/08
                      </span>
                      <span
                        className={`text-xs font-mono truncate ${
                          isSelected ? "text-amber-900" : "text-emerald-300"
                        }`}
                      >
                        {stance.hanNom}
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold mt-0.5 line-clamp-2 leading-snug">
                      {stance.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* 2. BẢNG PHÂN TÍCH BỘ PHÁP ĐANG CHỌN — CÂN ĐỐI 5 CỘT TRÁI (HÌNH ẢNH & THÔNG SỐ) : 7 CỘT PHẢI (CẤU TRÚC & DI CHUYỂN) */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border-2 border-[#F5D06C]/45 bg-gradient-to-br from-[#190E09] via-[#130A06] to-[#1B0F0A] space-y-6 shadow-2xl">
            {/* Header Bộ pháp */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3.5 py-1 rounded-full bg-[#F5D06C] text-[#140A06] text-xs font-extrabold">
                    BỘ PHÁP 0{activeStanceStudy.order} / 08
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                    {activeStanceStudy.category}
                  </span>
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#F5D06C]">
                    {activeStanceStudy.hanNom}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold font-serif text-white">
                  {activeStanceStudy.title}
                </h3>
                <p className="text-xs sm:text-sm text-amber-200 font-medium">
                  🎯 {activeStanceStudy.subtitle}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                {onOpenDojoLesson && activeStanceStudy.relatedLessonId && (
                  <button
                    onClick={() => onOpenDojoLesson(activeStanceStudy.relatedLessonId!)}
                    className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-[#F5D06C]/40 text-[#F5D06C] text-xs sm:text-sm font-bold transition-all cursor-pointer"
                  >
                    🥋 Vào Bài Tập ({activeStanceStudy.relatedLessonId.toUpperCase()})
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
                  className="px-4 py-2.5 rounded-xl bg-[#F5D06C] hover:bg-[#E2B743] text-[#140A06] text-xs sm:text-sm font-extrabold flex items-center gap-2 transition-all cursor-pointer shadow-lg"
                >
                  <span>Bộ Pháp Tiếp Theo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Nội dung 12 Cột Đối Xứng Chiều Cao (items-stretch): Trái 5 Cột | Phải 7 Cột */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* CỘT TRÁI (5 COLS): Cặp Ảnh Sách Gốc Đặt Cạnh Nhau + Lưới 2x2 Thông Số Hình Học */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                {/* Cặp ảnh Võ sư & Sơ đồ bàn chân đặt song song cân xứng */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div
                    onClick={() =>
                      setZoomImg({
                        src: activeStanceStudy.primaryImg,
                        title: `${activeStanceStudy.title} — Ảnh Tư Liệu Sách Gốc`,
                        caption: activeStanceStudy.primaryImgCaption,
                      })
                    }
                    className="group rounded-2xl overflow-hidden border-2 border-[#F5D06C]/45 bg-[#FBF9F5] p-3 flex flex-col justify-between cursor-pointer hover:border-[#F5D06C] transition-all shadow-md"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={activeStanceStudy.primaryImg}
                        alt={activeStanceStudy.primaryImgCaption}
                        fill
                        className="object-contain martial-filter group-hover:scale-105 transition-transform"
                        sizes="240px"
                      />
                    </div>
                    <div className="mt-2 pt-2 border-t border-amber-900/15 text-center">
                      <span className="text-xs font-extrabold uppercase text-amber-900 block">
                        📸 Ảnh Thị Phạm Gốc
                      </span>
                      <p className="text-xs text-stone-800 line-clamp-2 mt-0.5">
                        {activeStanceStudy.primaryImgCaption}
                      </p>
                    </div>
                  </div>

                  <div
                    onClick={() =>
                      setZoomImg({
                        src: activeStanceStudy.diagramImg,
                        title: `${activeStanceStudy.title} — Sơ Đồ Bàn Chân & Đối Chứng`,
                        caption: activeStanceStudy.diagramImgCaption,
                      })
                    }
                    className="group rounded-2xl overflow-hidden border-2 border-emerald-500/45 bg-[#FBF9F5] p-3 flex flex-col justify-between cursor-pointer hover:border-emerald-400 transition-all shadow-md"
                  >
                    <div className="relative h-48 w-full">
                      <Image
                        src={activeStanceStudy.diagramImg}
                        alt={activeStanceStudy.diagramImgCaption}
                        fill
                        className="object-contain martial-filter group-hover:scale-105 transition-transform"
                        sizes="240px"
                      />
                    </div>
                    <div className="mt-2 pt-2 border-t border-amber-900/15 text-center">
                      <span className="text-xs font-extrabold uppercase text-emerald-900 block">
                        👣 Sơ Đồ / Đối Chứng
                      </span>
                      <p className="text-xs text-stone-800 line-clamp-2 mt-0.5">
                        {activeStanceStudy.diagramImgCaption}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Lưới 2x2 Thông Số Hình Học & Trọng Lượng */}
                <div className="rounded-2xl bg-[#1F110B] border border-[#F5D06C]/35 p-4 sm:p-5 space-y-3 flex-1 flex flex-col justify-between">
                  <h4 className="text-sm sm:text-base font-bold font-serif text-[#F5D06C] border-b border-white/10 pb-2">
                    📐 Thông Số Hình Học &amp; Phân Bổ Trọng Tâm (Sách Gốc)
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-black/35 border border-white/10 space-y-1">
                      <span className="text-xs font-bold uppercase text-amber-300 block">
                        1. Khoảng cách chân:
                      </span>
                      <p className="text-xs sm:text-sm text-white leading-relaxed">
                        {activeStanceStudy.geometryAndWeight.footSpacing}
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-black/35 border border-white/10 space-y-1">
                      <span className="text-xs font-bold uppercase text-emerald-300 block">
                        2. Trọng lượng (Hư–Thực):
                      </span>
                      <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                        {activeStanceStudy.geometryAndWeight.weightDistribution}
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-black/35 border border-white/10 space-y-1">
                      <span className="text-xs font-bold uppercase text-[#F5D06C] block">
                        3. Tâm xoay bàn chân:
                      </span>
                      <p className="text-xs sm:text-sm text-amber-100 leading-relaxed">
                        {activeStanceStudy.geometryAndWeight.pivotPoint}
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-black/35 border border-white/10 space-y-1">
                      <span className="text-xs font-bold uppercase text-sky-300 block">
                        4. Góc thân &amp; Trục Tý Ngọ:
                      </span>
                      <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
                        {activeStanceStudy.geometryAndWeight.bodyAngle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CỘT PHẢI (7 COLS): Đặc Điểm Cấu Trúc + Kết Hợp Di Chuyển + Trích Dẫn Sách Gốc & Học Thuật */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                {/* Hộp 1: Đặc điểm cấu trúc thân – thủ – bộ */}
                <div className="p-5 rounded-2xl bg-[#170C08] border border-white/15 space-y-2.5">
                  <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[#F5D06C] flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    <span>1. Đặc Điểm Cấu Trúc Thân – Thủ – Bộ Trong Sách Gốc</span>
                  </h4>
                  <ul className="space-y-2">
                    {activeStanceStudy.structuralCharacteristics.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#FAF6F0] leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#F5D06C] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hộp 2: Phương pháp kết hợp di chuyển */}
                <div className="p-5 rounded-2xl bg-[#111C16] border border-emerald-500/35 space-y-2">
                  <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-emerald-300 flex items-center gap-2">
                    <Footprints className="w-4 h-4" />
                    <span>2. Phương Pháp Kết Hợp Di Chuyển &amp; Ứng Dụng Thực Chiến</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed">
                    {activeStanceStudy.movementIntegration}
                  </p>
                </div>

                {/* Hộp 3: Nguyên văn sách gốc + Nguồn học thuật đặt cân xứng ở đáy cột phải */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
                  <div className="md:col-span-7 p-4 rounded-2xl bg-black/45 border-l-4 border-[#F5D06C] flex flex-col justify-between space-y-1.5">
                    <p className="text-xs sm:text-sm font-serif italic text-amber-100 leading-relaxed">
                      {activeStanceStudy.canonicalQuote}
                    </p>
                    <span className="block text-xs font-mono font-bold text-[#F5D06C]">
                      — {activeStanceStudy.bookPageRef}
                    </span>
                  </div>

                  <div className="md:col-span-5 p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-1">
                    <span className="text-xs font-bold uppercase text-emerald-300 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4" /> Nguồn Đối Chứng:
                    </span>
                    <ul className="space-y-1 text-xs font-mono text-amber-100/90">
                      {activeStanceStudy.academicCitations.map((cit, idx) => (
                        <li key={idx}>• {cit}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. NĂM NGUYÊN TẮC VÀNG VỮNG ĐỘNG — BỐ CỤC 1 BANNER TÂM ĐIỂM + LƯỚI 2x2 CÂN XỨNG TUYỆT ĐỐI (KHÔNG KHUYẾT Ô) */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#F5D06C]/35 bg-[#150B07] space-y-5">
            <div className="space-y-1 border-b border-white/10 pb-4">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-300 block">
                Nguyên Lý Cốt Tủy Khi Vận Bộ (Sách Gốc Trang 31–35 &amp; 161–166)
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                5 Nguyên Tắc Vàng Kết Hợp Giữa Đứng Tấn &amp; Phương Pháp Di Chuyển Vịnh Xuân
              </h3>
            </div>

            {/* Thẻ Tâm Điểm Số 01 (Full Width 12 Cols cân đối) */}
            {featuredPrinciple && (
              <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#22120B] via-[#1B0E09] to-[#131D17] border-2 border-[#F5D06C]/45 grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                <div className="lg:col-span-5 space-y-2">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-[#F5D06C] text-[#140A06] text-xs font-extrabold">
                      {featuredPrinciple.number} • Nền Tảng Cốt Lõi
                    </span>
                    <span className="text-xs font-mono font-bold text-[#F5D06C]">
                      {featuredPrinciple.hanNom}
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold font-serif text-white">
                    {featuredPrinciple.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-serif italic text-emerald-300 bg-emerald-950/40 p-3 rounded-xl border border-emerald-500/30">
                    💡 Hình ảnh ẩn dụ: {featuredPrinciple.metaphor}
                  </p>
                </div>
                <div className="lg:col-span-7 space-y-2.5">
                  <p className="text-sm sm:text-base text-[#FAF6F0] leading-relaxed">
                    {featuredPrinciple.mechanism}
                  </p>
                  <p className="text-xs font-mono text-amber-200/90">
                    📚 {featuredPrinciple.sourceRef}
                  </p>
                </div>
              </div>
            )}

            {/* 4 Nguyên Tắc Còn Lại (02, 03, 04, 05) Xếp Lưới 2x2 Đối Xứng Hoàn Hảo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
              {gridPrinciples.map((prin) => (
                <div
                  key={prin.id}
                  className="p-5 rounded-2xl bg-[#1D100A] border border-white/15 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-3 py-0.5 rounded-full bg-[#F5D06C]/20 border border-[#F5D06C]/40 text-[#F5D06C] text-xs font-extrabold">
                        {prin.number}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#F5D06C]">
                        {prin.hanNom}
                      </span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold font-serif text-white leading-snug">
                      {prin.title}
                    </h4>
                    <p className="text-xs sm:text-sm font-serif italic text-emerald-300 bg-emerald-950/30 p-2.5 rounded-xl border border-emerald-500/30">
                      💡 Hình ảnh ẩn dụ: {prin.metaphor}
                    </p>
                    <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
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

          {/* 4. BẢNG ĐỐI SÁNH QUỐC TẾ 4 HỆ PHÁI (4 CỘT ĐỀU NHAU TRÊN MỖI TIÊU CHÍ) */}
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
                  className="p-5 sm:p-6 space-y-3.5 hover:bg-white/[0.02] transition-colors"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-base sm:text-lg font-bold font-serif text-[#F5D06C]">
                      {row.dimension}
                    </h4>
                    <span className="text-xs font-mono text-amber-200/90">
                      📖 {row.sourceRef}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                    <div className="p-4 rounded-2xl bg-amber-950/35 border border-[#F5D06C]/45 space-y-1.5 flex flex-col justify-between">
                      <span className="text-xs font-extrabold uppercase text-[#F5D06C] block">
                        🇻🇳 1. Phật Gia Vịnh Xuân (VN)
                      </span>
                      <p className="text-xs sm:text-sm text-[#FAF6F0] leading-relaxed">
                        {row.pgvxVietnam}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/35 space-y-1.5 flex flex-col justify-between">
                      <span className="text-xs font-extrabold uppercase text-emerald-300 block">
                        🏮 2. Vịnh Xuân Cổ Lao (Lương Tán)
                      </span>
                      <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed">
                        {row.gulaoLiangJan}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-sky-950/30 border border-sky-400/35 space-y-1.5 flex flex-col justify-between">
                      <span className="text-xs font-extrabold uppercase text-sky-300 block">
                        🇭🇰 3. Vịnh Xuân Hồng Kông (Diệp Vấn)
                      </span>
                      <p className="text-xs sm:text-sm text-sky-50 leading-relaxed">
                        {row.hongKongIpMan}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-rose-950/25 border border-rose-500/30 space-y-1.5 flex flex-col justify-between">
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
      )}

      {/* ========================================================================= */}
      {/* 4. CHƯƠNG III: 6 BÍ QUYẾT DÙNG LỰC TAY – CHÂN & ĐỒ THỊ VẬT LÝ THỐN KÌNH    */}
      {/* ========================================================================= */}
      {showSection("secrets") && (
        <section id="limb-force-secrets" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-white/10 pb-5">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-[#F5D06C] text-xs sm:text-sm font-bold uppercase tracking-wider">
                <Hand className="w-4 h-4" />
                <span>Chương III • 6 Cơ Chế Dùng Lực Tay – Chân &amp; Đồ Thị Vật Lý Thốn Kình</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif gold-gradient">
                6 Cơ Chế Dùng Lực Tay &amp; Chân Riêng Biệt Của Vịnh Xuân
              </h2>
              <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed">
                Chọn từng bí quyết trong <strong>3 Tuyệt kỹ Thủ pháp</strong> và <strong>3 Tuyệt kỹ Bộ &amp; Cước pháp</strong> để xem đối chứng giải phẫu, tâm pháp và hình tư liệu sách gốc.
              </p>
            </div>
          </div>

          {/* Thanh Chọn 6 Bí Quyết Cân Đối (3 Tay + 3 Chân = 6 Cột Đều Nhau) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {LIMB_FORCE_SECRETS.map((sec, idx) => {
              const isSelected = activeLimbSecret.id === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => setSelectedSecretId(sec.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#F5D06C] text-[#140A06] border-[#F5D06C] font-bold shadow-xl shadow-[#F5D06C]/20"
                      : "bg-[#170C08] text-amber-100 border-white/15 hover:border-[#F5D06C]/60"
                  }`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span
                      className={`text-xs font-mono uppercase ${
                        isSelected ? "text-amber-950 font-extrabold" : "text-[#F5D06C]"
                      }`}
                    >
                      0{idx + 1} • {sec.category === "hand" ? "Thủ Pháp" : "Bộ & Cước"}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold mt-2 line-clamp-2 leading-snug">
                    {sec.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sân Khấu Chi Tiết Bí Quyết Đang Chọn — Cân Đối 5 Cột Trái : 7 Cột Phải (items-stretch) */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border-2 border-[#F5D06C]/40 bg-[#150B07] grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Cột Trái (5 Cols): Ảnh Tư Liệu Sách Gốc + Khẩu Quyết + Hình Ảnh Ví Dụ */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
              <div
                onClick={() =>
                  setZoomImg({
                    src: activeLimbSecret.imageUrl,
                    title: activeLimbSecret.title,
                    caption: activeLimbSecret.imageCaption,
                  })
                }
                className="group rounded-2xl overflow-hidden border-2 border-[#F5D06C]/45 bg-[#FBF9F5] p-4 flex flex-col justify-between cursor-pointer hover:border-[#F5D06C] transition-all"
              >
                <div className="relative h-56 sm:h-64 w-full">
                  <Image
                    src={activeLimbSecret.imageUrl}
                    alt={activeLimbSecret.imageCaption}
                    fill
                    className="object-contain martial-filter group-hover:scale-105 transition-transform"
                    sizes="(max-width: 1024px) 100vw, 380px"
                  />
                </div>
                <div className="mt-3 pt-2.5 border-t border-amber-900/20 text-center space-y-1">
                  <p className="text-xs sm:text-sm font-serif font-bold text-stone-900">
                    📖 {activeLimbSecret.imageCaption}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 underline">
                    <Maximize2 className="w-3.5 h-3.5" /> Bấm để xem ảnh lớn
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#1F110B] border-l-4 border-[#F5D06C] space-y-1">
                <p className="text-sm sm:text-base font-serif italic text-[#F5D06C]">
                  &ldquo;{activeLimbSecret.canonicalQuote}&rdquo;
                </p>
                <span className="block text-xs font-mono text-amber-200/90">
                  — {activeLimbSecret.bookPage}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1">
                <span className="text-xs font-bold uppercase text-amber-300 block">
                  💡 Nguyên lý &amp; Hình ảnh ví dụ trong Sách gốc:
                </span>
                <p className="text-xs sm:text-sm text-[#FAF6F0] leading-relaxed">
                  {activeLimbSecret.coreMechanism}
                </p>
              </div>
            </div>

            {/* Cột Phải (7 Cols): Phân Tích Khoa Học + Khí Lực + Điểm Cốt Tử + Nguồn Trích Dẫn */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-[#F5D06C] text-[#140A06] text-xs font-extrabold">
                      {activeLimbSecret.category === "hand"
                        ? "BÍ QUYẾT LỰC TAY (THỦ PHÁP)"
                        : "BÍ QUYẾT LỰC CHÂN (BỘ & CƯỚC PHÁP)"}
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#F5D06C]">
                      {activeLimbSecret.hanNom}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mt-2">
                    {activeLimbSecret.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F5D06C] mt-0.5">
                    {activeLimbSecret.subtitle}
                  </p>
                </div>

                <button
                  onClick={() => {
                    const currIdx = LIMB_FORCE_SECRETS.findIndex(
                      (s) => s.id === activeLimbSecret.id
                    );
                    const nextIdx =
                      currIdx < LIMB_FORCE_SECRETS.length - 1 ? currIdx + 1 : 0;
                    setSelectedSecretId(LIMB_FORCE_SECRETS[nextIdx].id);
                  }}
                  className="self-start sm:self-auto px-4 py-2.5 rounded-xl bg-[#F5D06C] hover:bg-[#E2B743] text-[#140A06] text-xs sm:text-sm font-extrabold flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
                >
                  <span>Bí quyết tiếp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#1A0E09] border border-white/15 space-y-2">
                  <h4 className="text-xs sm:text-sm font-bold uppercase text-emerald-300 tracking-wider">
                    🔬 1. Phân tích Cơ sinh học &amp; Vật lý:
                  </h4>
                  <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                    {activeLimbSecret.scientificExplanation}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#111C16] border border-emerald-500/35 space-y-2">
                  <h4 className="text-xs sm:text-sm font-bold uppercase text-[#F5D06C] tracking-wider">
                    ☯️ 2. Cơ chế Khí Lực &amp; Tâm Pháp:
                  </h4>
                  <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                    {activeLimbSecret.qiAndInternalExplanation}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/35 border border-white/10 space-y-2">
                <span className="text-xs font-bold uppercase text-emerald-300 block">
                  ✅ Yếu lĩnh thực hành cốt tử:
                </span>
                <ul className="space-y-1.5">
                  {activeLimbSecret.keyTakeaways.map((tk, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-emerald-100"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{tk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-xs font-bold text-[#F5D06C] uppercase block">
                  📚 Nguồn trích dẫn học thuật &amp; đối chứng:
                </span>
                {activeLimbSecret.academicCitations.map((cit, cIdx) => (
                  <p key={cIdx} className="text-xs font-mono text-amber-100/90 leading-relaxed">
                    • {cit}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Đồ Thị Vật Lý Thốn Kình & Đường Cong Sức Mạnh Theo Tuổi */}
          <div id="physics-longevity-charts" className="glass-panel rounded-3xl p-6 sm:p-8 border border-[#F5D06C]/35 bg-[#130A06] space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-bold uppercase text-[#F5D06C] block">
                  Mô Hình Toán Lý &amp; Sinh Học Thực Nghiệm
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                  Đồ Thị Xung Lực Thốn Kình F(t) &amp; Đường Cong Nội Lực Theo Độ Tuổi (20–80 Tuổi)
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-2 bg-[#160B07] p-1.5 rounded-2xl border border-white/15 shrink-0">
                <button
                  onClick={() => setChartType("impulse")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    chartType === "impulse"
                      ? "bg-[#F5D06C] text-[#140A06] shadow-md"
                      : "text-amber-100 hover:text-white"
                  }`}
                >
                  📊 Đồ Thị Xung Lực Thốn Kình F(t)
                </button>
                <button
                  onClick={() => setChartType("longevity")}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    chartType === "longevity"
                      ? "bg-[#F5D06C] text-[#140A06] shadow-md"
                      : "text-amber-100 hover:text-white"
                  }`}
                >
                  📈 Đường Cong Sức Mạnh Theo Tuổi (20–80)
                </button>
              </div>
            </div>

            {chartType === "impulse" ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7">
                  <svg
                    viewBox="0 0 680 320"
                    className="w-full h-auto bg-[#0D0604] rounded-2xl border border-white/10 p-3"
                    role="img"
                    aria-label="Đồ thị so sánh đỉnh xung lực F(t) giữa Thốn kình Vịnh Xuân và đòn đẩy cơ bắp"
                  >
                    <line x1="70" y1="265" x2="640" y2="265" stroke="#FAF6F0" strokeOpacity="0.4" strokeWidth="2" />
                    <line x1="70" y1="25" x2="70" y2="265" stroke="#FAF6F0" strokeOpacity="0.4" strokeWidth="2" />
                    <text x="80" y="45" fill="#F5D06C" fontSize="13" fontWeight="bold">
                      Lực Tác Động Đỉnh F_max (Newton)
                    </text>
                    <text x="450" y="298" fill="#FAF6F0" fontSize="13">
                      Thời gian tiếp xúc Δt (mili-giây)
                    </text>
                    <path
                      d="M70 265 Q180 265 240 195 Q330 145 430 200 Q520 250 610 265"
                      fill="#F87171"
                      fillOpacity="0.15"
                      stroke="#F87171"
                      strokeWidth="3.5"
                      strokeDasharray="8 4"
                    />
                    <text x="275" y="165" fill="#FCA5A5" fontSize="13" fontWeight="bold">
                      Chuyết Lực / Đòn Đẩy Thường (Δt ≈ 180ms • Lực tản mát)
                    </text>
                    <path
                      d="M70 265 L145 265 L170 42 L198 265 L610 265"
                      fill="#F5D06C"
                      fillOpacity="0.25"
                      stroke="#F5D06C"
                      strokeWidth="4"
                    />
                    <circle cx="170" cy="42" r="7" fill="#34D399" stroke="#FFFFFF" strokeWidth="2" />
                    <text x="190" y="50" fill="#34D399" fontSize="14" fontWeight="bold">
                      ⚡ Đỉnh Thốn Kình Vịnh Xuân (Δt ≈ 15ms • Xuyên thấu nội tạng)
                    </text>
                  </svg>
                </div>

                <div className="lg:col-span-5 space-y-3.5">
                  <h4 className="text-lg sm:text-xl font-bold font-serif text-white">
                    Bí Mật Vật Lý Của Thốn Kình: Rút Ngắn Δt Về Tiệm Cận 0
                  </h4>
                  <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                    Theo định lý Xung lượng – Động lượng: <strong>F_đỉnh = Δp / Δt</strong>. Nếu gồng cứng vai để &ldquo;đẩy&rdquo; đối phương (Δt ≈ 0.18s), lực biến thành lực đẩy làm đối phương lùi về sau nhưng không chấn thương bên trong.
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed">
                    Vịnh Xuân giữ tay hoàn toàn <strong>Tùng tĩnh (thả lỏng như roi da)</strong> để đạt vận tốc cực đại, và chỉ <strong>khóa khớp kết cấu trong 0.015 giây cuối cùng</strong> khi chạm mục tiêu rồi thu về ngay. Khi Δt giảm đi 10 lần, lực đỉnh F_đỉnh tăng vọt gấp nhiều lần.
                  </p>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-amber-200/90">
                    📚 Nguồn: Sách gốc PGVX (Tr. 19, 164) [1]; Bolander et al. (2009) [4]; Neto et al. (2007) [5].
                  </div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7">
                  <svg
                    viewBox="0 0 680 320"
                    className="w-full h-auto bg-[#0D0604] rounded-2xl border border-white/10 p-3"
                    role="img"
                    aria-label="Đồ thị so sánh sức mạnh theo độ tuổi từ 20 đến 80 tuổi"
                  >
                    <line x1="70" y1="265" x2="640" y2="265" stroke="#FAF6F0" strokeOpacity="0.4" strokeWidth="2" />
                    <line x1="70" y1="25" x2="70" y2="265" stroke="#FAF6F0" strokeOpacity="0.4" strokeWidth="2" />
                    <text x="80" y="45" fill="#F5D06C" fontSize="13" fontWeight="bold">
                      Hiệu Suất Kình Lực &amp; Khống Chế Thực Chiến
                    </text>
                    <text x="100" y="292" fill="#FAF6F0" fontSize="12">20 tuổi</text>
                    <text x="215" y="292" fill="#FAF6F0" fontSize="12">30 tuổi</text>
                    <text x="330" y="292" fill="#FAF6F0" fontSize="12">45 tuổi</text>
                    <text x="445" y="292" fill="#FAF6F0" fontSize="12">60 tuổi</text>
                    <text x="560" y="292" fill="#FAF6F0" fontSize="12">80 tuổi</text>
                    <path
                      d="M100 180 Q210 70 260 100 Q380 170 580 245"
                      fill="none"
                      stroke="#F87171"
                      strokeWidth="3.5"
                      strokeDasharray="8 4"
                    />
                    <text x="165" y="78" fill="#FCA5A5" fontSize="13" fontWeight="bold">
                      Sức Cơ Bắp Thô (Đỉnh ở 28–32 tuổi, suy giảm sau 40)
                    </text>
                    <path
                      d="M100 235 Q240 185 360 125 Q480 72 590 50"
                      fill="none"
                      stroke="#34D399"
                      strokeWidth="4.5"
                    />
                    <circle cx="590" cy="50" r="7" fill="#F5D06C" stroke="#FFFFFF" strokeWidth="2" />
                    <text x="250" y="60" fill="#34D399" fontSize="14" fontWeight="bold">
                      🌱 Nội Kình, Cấu Trúc &amp; Linh Giác Vịnh Xuân (Tăng tiến đến 80 tuổi)
                    </text>
                  </svg>
                </div>

                <div className="lg:col-span-5 space-y-3.5">
                  <h4 className="text-lg sm:text-xl font-bold font-serif text-white">
                    Vì Sao Các Đại Sư Vịnh Xuân Ở Tuổi 70–80 Vẫn Đánh Bật Thanh Niên Trai Tráng?
                  </h4>
                  <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                    Nếu dựa vào sợi cơ co rút (<em>Chuyết lực</em>), con người mất khối lượng cơ từ sau tuổi 35. Nhưng Vịnh Xuân dựa vào <strong>Khung xương tự khóa</strong>, <strong>Độ đàn hồi Mạc cơ – Gân</strong> và <strong>Nội khí Đan Điền</strong>.
                  </p>
                  <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed">
                    Càng luyện lâu năm, sự buông bỏ lực thừa (<em>Tùng tĩnh</em>) và cảm giác <em>Thính kình</em> càng tinh nhạy — như Sư tổ Nguyễn Tế Công, Đại Tông Sư Diệp Vấn, Đại sư Chu Thượng Đồng ở tuổi 70–80.
                  </p>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-amber-200/90">
                    📚 Nguồn: Sách gốc PGVX Chương IV (Tr. 167, 214) [1]; Ip Chun (1998) [3].
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bảng Đối Sánh 6 Chiều Chuyết Lực vs Nội Kình — Xếp Lưới 2 Hàng × 3 Cột Cân Đối Tuyệt Đối */}
          <div className="space-y-4">
            <h3 className="text-lg sm:text-xl font-bold font-serif text-[#F5D06C]">
              Ma Trận Đối Chiếu 6 Chiều: Chuyết Lực (Cơ Bắp Thô) vs. Kình Lực &amp; Nội Khí Vịnh Xuân
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
              {BRUTE_VS_INTERNAL_COMPARISON.map((row, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#140B07] border border-white/15 flex flex-col justify-between space-y-3.5"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#F5D06C] text-[#140A06] text-xs font-extrabold">
                        Tiêu chí 0{idx + 1}
                      </span>
                      <span className="text-xs font-mono text-amber-200/90">
                        {row.sourceRef}
                      </span>
                    </div>
                    <h4 className="text-base font-bold font-serif text-white">
                      {row.criterion}
                    </h4>

                    <div className="p-3.5 rounded-xl bg-rose-950/25 border border-rose-500/30 space-y-1">
                      <span className="text-xs font-bold uppercase text-rose-300 block">
                        ❌ Chuyết Lực (Gồng Cơ):
                      </span>
                      <p className="text-xs sm:text-sm text-rose-100 leading-relaxed">
                        {row.bruteForce}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-emerald-950/25 border border-emerald-500/35 space-y-1">
                      <span className="text-xs font-bold uppercase text-emerald-300 block">
                        ✅ Kình Lực Vịnh Xuân:
                      </span>
                      <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                        {row.wingChunJin}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 5. CHƯƠNG IV: KHÍ LỰC & NHỮNG HIỆN TƯỢNG KHOA HỌC CHƯA LÝ GIẢI TRỌN VẸN     */}
      {/* ========================================================================= */}
      {showSection("qi-science") && (
        <section id="eastern-qi-mysteries" className="space-y-6 scroll-mt-24">
          <div className="space-y-2 border-b border-white/10 pb-4">
            <div className="inline-flex items-center gap-2 text-emerald-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4" />
              <span>Chương IV • Nội Công, Khí Lực &amp; Giới Hạn Của Giải Phẫu Học Phương Tây</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif gold-gradient">
              Khí Lực, Niệm Lực &amp; Những Hiện Tượng Khoa Học Phương Tây Chưa Chứng Minh Trọn Vẹn
            </h2>
            <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed max-w-4xl">
              PGS.TS Y khoa Nguyễn Mạnh Nhâm đã dành trọn Chương IV (trang 167–184) để phân tích ranh giới giữa giải phẫu học phương Tây và những hiện tượng thực chứng của <strong>Nội Khí, Kinh Lạc, Đan Điền, Niệm Lực (Nim Lik)</strong>.
            </p>
          </div>

          {/* 4 Nút Chọn Chuyên Khảo Cân Xứng (4 Cột Đều Nhau) */}
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
                  <h3 className="text-xs sm:text-sm font-bold mt-2 line-clamp-2">
                    {item.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Bố Cục Đối Xứng Chiều Cao 100% (4 Cột Trái : 8 Cột Phải Lưới 2x2) */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-emerald-500/40 bg-gradient-to-br from-[#131B16] via-[#120A07] to-[#170E0A] grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Cột Trái (4 Cols): Ảnh Tư Liệu + Chuỗi Điều Khiển 4 Cấp */}
            <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
              <div
                onClick={() =>
                  setZoomImg({
                    src: activeQiPhenomenon.imageUrl,
                    title: activeQiPhenomenon.title,
                    caption: activeQiPhenomenon.imageCaption,
                  })
                }
                className="group rounded-2xl overflow-hidden border-2 border-[#F5D06C]/45 bg-[#FBF9F5] p-3.5 flex flex-col justify-between cursor-pointer hover:border-[#F5D06C] transition-all shadow-lg"
              >
                <div className="relative h-52 sm:h-56 w-full">
                  <Image
                    src={activeQiPhenomenon.imageUrl}
                    alt={activeQiPhenomenon.imageCaption}
                    fill
                    className="object-contain martial-filter group-hover:scale-105 transition-transform"
                    sizes="(max-width: 1024px) 100vw, 340px"
                  />
                </div>
                <div className="mt-2.5 pt-2.5 border-t border-amber-900/20 text-center space-y-1">
                  <p className="text-xs font-serif font-bold text-stone-900 line-clamp-2">
                    {activeQiPhenomenon.imageCaption}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-800 underline">
                    <Maximize2 className="w-3.5 h-3.5" /> Phóng to hình sách gốc
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#1A0F0A] border border-[#F5D06C]/35 space-y-2.5 flex-1 flex flex-col justify-between">
                <h4 className="text-xs font-bold uppercase text-[#F5D06C] tracking-wider">
                  Chuỗi Điều Khiển Tối Thượng (Sách gốc Tr. 167–178)
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <strong className="text-white block">1. ĐẦU Ý</strong>
                    <span className="text-[#F5D06C] font-mono">Tâm niệm tĩnh</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    <strong className="text-white block">2. THẦN ĐÁO</strong>
                    <span className="text-[#F5D06C] font-mono">Thần kinh tụ</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30">
                    <strong className="text-emerald-300 block">3. KHÍ ĐÁO</strong>
                    <span className="text-emerald-200 font-mono">Khí là Vua</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#F5D06C]/20 border border-[#F5D06C]/40">
                    <strong className="text-[#F5D06C] block">4. LỰC ĐÁO</strong>
                    <span className="text-amber-100 font-mono">Thốn kình phát</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cột Phải (8 Cols): Header + Lưới 2x2 Của 4 Luận Điểm + Nguồn Trích Dẫn (Khớp chiều cao 100%) */}
            <div className="lg:col-span-8 flex flex-col justify-between space-y-4">
              <div className="border-b border-white/10 pb-3">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold">
                  Chuyên khảo {activeQiPhenomenon.number} • {activeQiPhenomenon.hanNom}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mt-2">
                  {activeQiPhenomenon.title}
                </h3>
              </div>

              {/* Lưới 2x2 Đối Xứng Cho 4 Khía Cạnh Phân Tích */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch flex-1">
                <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-500/35 space-y-1.5 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold uppercase text-emerald-300 tracking-wider">
                      1. Nguyên lý Nội công &amp; Y Võ Đông Phương:
                    </h4>
                    <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                      {activeQiPhenomenon.easternPrinciple}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/40 border border-white/15 space-y-1.5 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold uppercase text-[#F5D06C] tracking-wider">
                      2. Hiện tượng Thực chứng trong Võ học:
                    </h4>
                    <p className="text-xs sm:text-sm text-[#FAF6F0] leading-relaxed">
                      {activeQiPhenomenon.historicalEvidence}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-950/30 border border-[#F5D06C]/35 space-y-1.5 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold uppercase text-[#F5D06C] tracking-wider">
                      3. Cầu nối Y học &amp; Vật lý Sinh học Hiện đại:
                    </h4>
                    <p className="text-xs sm:text-sm text-amber-100 leading-relaxed">
                      {activeQiPhenomenon.modernMedicalAndBiophysicsBridge}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-purple-950/30 border border-purple-400/35 space-y-1.5 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold uppercase text-purple-300 tracking-wider">
                      4. Vì sao Khoa học Phương Tây chưa giải mã hết?
                    </h4>
                    <p className="text-xs sm:text-sm text-purple-100 leading-relaxed">
                      {activeQiPhenomenon.whyWestCannotFullyExplainYet}
                    </p>
                  </div>
                </div>
              </div>

              {/* Nguồn trích dẫn */}
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                <span className="text-xs font-bold uppercase text-[#F5D06C] block">
                  📚 Nguồn Trích Dẫn Học Thuật &amp; Giáo Trình ({activeQiPhenomenon.bookReference}):
                </span>
                {activeQiPhenomenon.academicCitations.map((cit, cIdx) => (
                  <p key={cIdx} className="text-xs font-mono text-amber-100/90">
                    • {cit}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 6. CHƯƠNG V: 4 BÀI THỰC NGHIỆM (LƯỚI 2x2) & 10 NGUỒN HỌC THUẬT (LƯỚI 2x5)  */}
      {/* ========================================================================= */}
      {showSection("experiments-bib") && (
        <div className="space-y-10">
          {/* 4 Bài Thực Nghiệm — Lưới 2x2 Cân Đối, Bên Trong Mỗi Thẻ Chia 2 Cột Đối Chiếu Trực Diện */}
          <section id="self-experiments" className="space-y-6 scroll-mt-24">
            <div className="space-y-1.5 border-b border-white/10 pb-4">
              <div className="inline-flex items-center gap-2 text-[#F5D06C] text-xs sm:text-sm font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Chương V • Phòng Thí Nghiệm Thực Chứng Cơ Sinh Học &amp; Khí Lực</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif gold-gradient">
                4 Bài Thực Nghiệm 2 Phút Để Tự Kiểm Chứng Trên Chính Cơ Thể Bạn
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              {FOUR_SELF_EXPERIMENTS.map((exp) => (
                <div
                  key={exp.id}
                  className="glass-panel rounded-3xl p-5 sm:p-6 border border-white/15 bg-[#160C08] flex flex-col justify-between space-y-4 hover:border-[#F5D06C]/50 transition-all"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full bg-[#F5D06C] text-[#140A06] text-xs font-extrabold">
                        THỰC NGHIỆM 0{exp.step}
                      </span>
                      <span className="text-xs font-mono text-amber-200/90">
                        ⏱ {exp.duration}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base sm:text-lg font-bold font-serif text-white">
                        {exp.title}
                      </h3>
                      <p className="text-xs text-[#F5D06C] mt-1">
                        <strong>Mục tiêu:</strong> {exp.goal}
                      </p>
                    </div>

                    {/* 2 cột song song bên trong mỗi thẻ thực nghiệm: Sai vs Đúng */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-stretch">
                      <div className="p-3.5 rounded-2xl bg-rose-950/25 border border-rose-500/30 space-y-1">
                        <span className="text-xs font-bold uppercase text-rose-300 block">
                          ❌ Bước 1 — Gồng cơ bắp:
                        </span>
                        <p className="text-xs sm:text-sm text-rose-100 leading-relaxed">
                          {exp.wrongWay}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-[#1F110B] border border-[#F5D06C]/35 space-y-1">
                        <span className="text-xs font-bold uppercase text-[#F5D06C] block">
                          ✅ Bước 2 — Tùng tĩnh &amp; Dẫn Ý:
                        </span>
                        <p className="text-xs sm:text-sm text-[#FAF6F0] leading-relaxed">
                          {exp.rightWay}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/35 space-y-1">
                      <span className="text-xs font-bold uppercase text-emerald-300 block">
                        🎯 Kết quả cảm nhận tức thì:
                      </span>
                      <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                        {exp.whatYouWillFeel}
                      </p>
                    </div>
                    <p className="text-xs font-mono text-amber-200/85">
                      📖 {exp.sourceCitation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 10 Nguồn Học Thuật — Lưới 2 Cột × 5 Hàng Cân Xứng Hoàn Hảo */}
          <section id="academic-bibliography" className="space-y-5 scroll-mt-24">
            <div className="space-y-1.5 border-b border-white/10 pb-4">
              <div className="inline-flex items-center gap-2 text-[#F5D06C] text-xs sm:text-sm font-bold uppercase tracking-wider">
                <GraduationCap className="w-4 h-4" />
                <span>Thư Mục Nguồn Trích Dẫn Học Thuật &amp; Giáo Trình Kinh Điển</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif gold-gradient">
                10 Công Trình Khoa Học &amp; Giáo Trình Chân Truyền Đối Chứng ([1] – [10])
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
              {FORCE_ACADEMIC_BIBLIOGRAPHY.map((bib) => (
                <div
                  key={bib.id}
                  className="p-5 rounded-2xl bg-[#150B07] border border-white/15 hover:border-[#F5D06C]/50 transition-all space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-lg bg-[#F5D06C] text-[#140A06] font-mono font-extrabold text-xs">
                        Mã trích dẫn {bib.code}
                      </span>
                      <span className="text-xs font-semibold text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                        {bib.category}
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold font-serif text-white leading-snug">
                      {bib.title} ({bib.year})
                    </h3>
                    <p className="text-xs text-[#F5D06C] font-medium">
                      ✍️ <strong>Tác giả:</strong> {bib.authors}
                    </p>
                    <p className="text-xs font-mono text-amber-200/85">
                      🏛️ {bib.publication} • {bib.pagesOrDoi}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-white/10 text-xs text-amber-100/90 leading-relaxed">
                    <strong className="text-emerald-300">Giá trị đối chứng:</strong>{" "}
                    {bib.keyContribution}
                  </div>
                </div>
              ))}
            </div>

            {onOpenDojoLesson && (
              <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-[#24130C] via-[#1B0E09] to-[#24130C] border border-[#F5D06C]/40 flex flex-col md:flex-row items-center justify-between gap-5">
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#F5D06C] flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Thực Hành Ngay Trong Bài Quyền</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-serif text-white">
                    Trải Nghiệm &ldquo;Structure before Speed&rdquo; Trong Tam Đại Bộ Quyền
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-100/85">
                    Vào phòng tập Tiểu Niệm Đầu (luyện khung &amp; tụ khí Đan Điền) hoặc Tầm Kiều (luyện xoay eo &amp; bộ pháp).
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    onClick={() => onOpenDojoLesson("bai-07")}
                    className="px-5 py-3 rounded-2xl bg-[#F5D06C] hover:bg-[#E2B743] text-[#140A06] font-extrabold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer shadow-lg"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Tập Tiểu Niệm Đầu</span>
                  </button>
                  <button
                    onClick={() => onOpenDojoLesson("bai-09")}
                    className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Tập Tầm Kiều</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>
      )}

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
