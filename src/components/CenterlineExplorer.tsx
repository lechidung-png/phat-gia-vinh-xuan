"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Compass,
  ShieldCheck,
  Target,
  Zap,
  Award,
  UserCheck,
  EyeOff,
  Crosshair,
  Swords,
  Info,
  Maximize2,
  CheckCircle2,
} from "lucide-react";

type ViewMode = "person_centerline" | "real_combat" | "text_only";
type AttackVector = "center_punch" | "left_hook" | "right_hook" | "low_kick";

interface AcupointInfo {
  id: string;
  name: string;
  hanTu: string;
  topPercent: number; // percentage from top
  role: string;
  protection: string;
  wingChunTechnique: string;
}

const ACUPOINTS: AcupointInfo[] = [
  {
    id: "bach_hoi",
    name: "Bách Hội (Đỉnh Đầu)",
    hanTu: "百會",
    topPercent: 8,
    role: "Điểm cực Tý trên trục trung tâm. Đỉnh đầu vươn thẳng hướng thiên, hàm thu nhẹ, mắt nhìn ngang chân trời.",
    protection: "Giữ cột sống luôn thẳng đứng làm trục quay thăng bằng, giúp cơ thể không bị chao đảo khi dính đòn va chạm mạnh.",
    wingChunTechnique: "Hư Linh Đỉnh Kình (Đầu đội trời, khí trầm đan điền)",
  },
  {
    id: "an_duong",
    name: "Ấn Đường & Sống Mũi",
    hanTu: "印堂",
    topPercent: 14,
    role: "Huyệt đạo thần kinh và thị giác trung tâm khuôn mặt. Mục tiêu ưa thích nhất của các đòn đấm thẳng.",
    protection: "Thu cằm, dùng hai cẳng tay tạo vòm nêm Than Thủ / Vấn Thủ che chắn từ chóp mũi lên trán.",
    wingChunTechnique: "Vấn Thủ (Man Sao) & Than Thủ (Tan Sao) bảo vệ đầu mặt",
  },
  {
    id: "dan_trung",
    name: "Đản Trung (Chấn Thủy / Mỏ Ác)",
    hanTu: "膻中",
    topPercent: 32,
    role: "Trung tâm lồng ngực, nơi giao hội của khí huyết, vị trí hiểm tử khi bị chấn động vào tim và phổi.",
    protection: "Hai cùi chỏ luôn khép sát bảo vệ (cách mạng sườn đúng 1 nắm tay), hai bàn tay khép tạo thế kiềm tỏa.",
    wingChunTechnique: "Bàng Thủ (Bong Sao) & Phục Thủ (Fook Sao) chốt chặt trung môn",
  },
  {
    id: "than_khuyet",
    name: "Thần Khuyết (Rốn)",
    hanTu: "神闕",
    topPercent: 46,
    role: "Trục hoành trung tâm thân mình, giao điểm phân chia phần trên (thượng bàn) và phần dưới (hạ bàn).",
    protection: "Khớp xoay của eo (eo xoay 45° mượn lực và làm trượt đòn tấn công của đối thủ).",
    wingChunTechnique: "Chuyển Mã Thao Pháp (Xoay eo chuyển đòn lệch trục)",
  },
  {
    id: "khi_hai",
    name: "Khí Hải / Đan Điền (Hạ Bộ)",
    hanTu: "氣海",
    topPercent: 54,
    role: "Điểm cực Ngọ trên trục trung tâm. Trọng tâm sinh học của toàn bộ cơ thể, cội nguồn phát kình lực.",
    protection: "Trầm khí đan điền, hạ thấp trọng tâm, không ưỡn bụng làm hở rốn và ngực.",
    wingChunTechnique: "Trầm Khí Đan Điền & Chưởng Đan Điền phản kích",
  },
  {
    id: "kiem_duong_goi",
    name: "Khớp Gối Kiềm Dương",
    hanTu: "鉗陽膝",
    topPercent: 71,
    role: "Hai đầu gối hơi chùng và ép hướng tâm (khoảng cách giữa 2 đầu gối chỉ vừa đúng 1 nắm tay đấm).",
    protection: "Khóa kín tuyệt đối 100% vùng hạ bộ, vô hiệu hóa hoàn toàn mọi đòn đá thẳng hoặc đá móc vào háng.",
    wingChunTechnique: "Nhị Tự Kiềm Dương Tấn (Tấn chân hẹp khóa hạ bàn)",
  },
  {
    id: "ban_chan_v",
    name: "Hạ Bàn Mũi Chân Chữ V",
    hanTu: "八字步",
    topPercent: 92,
    role: "Hai bàn chân hướng vào trong tạo góc chữ V ngược (mũi chân hướng vào, gót chân mở rộng).",
    protection: "Bám rễ sâu xuống mặt đất như móng cọc, gót chân linh hoạt nhấc 5cm triệt phá cước đối thủ.",
    wingChunTechnique: "Triệt Cước (Đạp chặn ống đồng đối thủ ngay khi vừa phát động)",
  },
];

export const CenterlineExplorer: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("person_centerline");
  const [selectedVector, setSelectedVector] = useState<AttackVector>("center_punch");
  const [selectedAcupoint, setSelectedAcupoint] = useState<string>("dan_trung");
  const [showWedgeTriangle, setShowWedgeTriangle] = useState<boolean>(true);
  const [stancePosture, setStancePosture] = useState<"bai_to" | "strike">("bai_to");

  const vectorDetails: Record<
    AttackVector,
    {
      title: string;
      opponentAction: string;
      wingChunDefense: string;
      corePrinciple: string;
      hands: string;
      footwork: string;
      combatImg: string;
      combatCaption: string;
      practitioners: string;
      tacticalBreakdown: string;
    }
  > = {
    center_punch: {
      title: "Đòn Đấm Trực Diện (Trung Tuyến Xung Quyền)",
      opponentAction: "Đối phương tung cú đấm thẳng uy lực nhắm thẳng vào sống mũi hoặc chấn thủy theo trục giữa.",
      wingChunDefense: "Không đỡ cản vuông góc. Dùng Bàng Thủ (Bong Sao) hoặc Than Thủ (Tan Sao) tạo góc nêm lệch trục chỉ 5cm, dẫn hướng lực đấm trượt ra ngoài khoảng không, đồng thời tay kia phát Nhật Tự Xung Quyền phản kích ngay trên trục trung tâm.",
      corePrinciple: "Nguyên lý Mũi Nêm (Wedge Principle): Đường thẳng giữa hai điểm là đường ngắn nhất. Ai làm chủ trục trung tâm, người đó làm chủ sinh tử.",
      hands: "Bàng Thủ / Than Thủ + Nhật Tự Quyền",
      footwork: "Kiềm Dương Tấn chùng gối khép háng, xoay eo 45° mượn lực",
      combatImg: "/assets/images/forms/05_108_doi_luyen/dl_1.png",
      combatCaption: "Thế đối luyện chiêu 1: Đối phương đấm thẳng trung tuyến, võ sư Vịnh Xuân xuất đòn lệch trục hóa giải và thấu kình.",
      practitioners: "HLV Nguyễn Việt Dũng & HLV Nguyễn Trường Thanh",
      tacticalBreakdown: "Đòn đấm của địch đi thẳng nhưng bị gạt chệch 5cm. Tay phản kích của Vịnh Xuân phóng thẳng vào mỏ ác đối thủ mà không cần thu tay về lấy đà.",
    },
    left_hook: {
      title: "Đòn Móc Trái / Đòn Chém Tạt Mang Tai (Tả Trảm Quyền)",
      opponentAction: "Đối phương đánh vòng từ bên trái nhắm vào huyệt Thái Dương, hàm dưới hoặc mang tai.",
      wingChunDefense: "Dùng Cao Bàng Thủ bẻ góc nâng cao che chắn mang tai kết hợp Phục Thủ (Fook Sao) đè kẹp cổ tay đối phương. Đòn đánh vòng của địch phải đi đường cong xa hơn, đòn phản của ta đi đường thẳng ngắn hơn.",
      corePrinciple: "Lai Lưu Khứ Tống (Đến thì đón, đi thì tiễn): Đón lực vòng bằng độ dốc của cẳng tay, không dùng lực đối lực thô bạo.",
      hands: "Cao Bàng Thủ + Phục Thủ chẹn khớp",
      footwork: "Đinh Tấn xoay góc triệt bộ, hạ thấp trọng tâm",
      combatImg: "/assets/images/forms/05_108_doi_luyen/dl_7_1.png",
      combatCaption: "Thế đối luyện chiêu 7: Dùng Cao Bàng Thủ hóa giải đòn vòng chém mang tai, đồng thời chiếm lĩnh trục trung lộ.",
      practitioners: "HLV Nguyễn Việt Dũng & HLV Nguyễn Trường Thanh",
      tacticalBreakdown: "Đường vòng của địch mất 0.4s, đường thẳng của Vịnh Xuân chỉ mất 0.15s. Đòn phản luôn chạm đích trước khi đòn vòng của địch tới nơi.",
    },
    right_hook: {
      title: "Đòn Đấm Móc Phải / Đòn Phang Sườn (Hữu Câu Quyền)",
      opponentAction: "Đối phương dồn toàn lực đánh móc sườn phải hoặc chém tạt tầm trung hạ bàn.",
      wingChunDefense: "Hạ Bàng Thủ (Low Bong Sao) hoặc Thác Thủ (Pak Sao) vỗ bạt cổ tay đối phương chếch xuống dưới, dồn toàn bộ kình lực vào Chưởng Đan Điền đánh thẳng ức địch.",
      corePrinciple: "Bạt Thủ Triệt Tiêu: Đánh lệch hướng tấn công chỉ 5cm là đủ để toàn bộ lực đánh của đối thủ rơi vào hư không.",
      hands: "Hạ Bàng Thủ + Chấn Thủy Chưởng",
      footwork: "Hoành Thoái biến bộ lách sườn",
      combatImg: "/assets/images/forms/05_108_doi_luyen/dl_42_1.png",
      combatCaption: "Thế đối luyện chiêu 42: Hạ Bàng Thủ đè ép lực đấm sườn, mở toang trung môn đối phương để phát lực chưởng.",
      practitioners: "HLV Nguyễn Việt Dũng & HLV Nguyễn Trường Thanh",
      tacticalBreakdown: "Tay dưới đè chẹn đòn móc, tay trên xuất chưởng thẳng vào mỏ ác. Một nhịp tay vừa thủ vừa công hoàn hảo.",
    },
    low_kick: {
      title: "Đòn Đá Vòng Cầu Hạ Bàn / Quét Chân (Đê Cước)",
      opponentAction: "Đối phương tung đòn đá ống quyển hoặc quét gót phá trụ chân kiềm dương.",
      wingChunDefense: "Khép chặt hai đầu gối theo quy chuẩn Tấn Kiềm Dương (chân hẹp mũi hướng vào trong). Dùng gót chân nhấc nhẹ 5cm thực hiện Triệt Cước (đạp chặn ống đồng đối thủ ngay khi vừa phát động).",
      corePrinciple: "Quy chuẩn Chân Hẹp Bảo Vệ Hạ Bộ: Khoảng cách giữa 2 đầu gối chỉ bằng 1 nắm tay, đòn đá vào háng hoàn toàn vô hiệu.",
      hands: "Song Thủ hộ tâm thủ thế Tý Ngọ",
      footwork: "Nhị Tự Kiềm Dương Tấn triệt cước",
      combatImg: "/assets/images/forms/05_108_doi_luyen/dl_11.png",
      combatCaption: "Thế đối luyện chiêu 11: Khép gối kiềm dương khóa hạ bàn, đồng thời xuất cước chặn đứng đòn đá của đối phương.",
      practitioners: "HLV Nguyễn Việt Dũng & HLV Nguyễn Trường Thanh",
      tacticalBreakdown: "Đòn đá tầm xa của đối thủ bị chặn đứng ngay từ lúc vừa nhấc chân. Cổ chân Vịnh Xuân bẻ gập hướng gót triệt tiêu lực phát động.",
    },
  };

  const current = vectorDetails[selectedVector];
  const activeAcupointInfo = ACUPOINTS.find((a) => a.id === selectedAcupoint) || ACUPOINTS[2];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#3D291F] relative overflow-hidden">
        <div className="max-w-4xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2B743]/15 text-[#E2B743] border border-[#E2B743]/30 text-xs font-bold uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" /> Tuyệt Đỉnh Lý Luận Vịnh Xuân Quyền
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif gold-gradient">
            Trục Tý Ngọ Tuyến & Khảo Cứu Thực Chiến
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Trục Tý Ngọ Tuyến (Centerline) là trục sinh tử chạy dọc chính giữa cơ thể người thật, nơi tập trung toàn bộ các đại huyệt hiểm yếu nhất. Toàn bộ các bài quyền và thế đối luyện Phật Gia Vịnh Xuân đều vận hành dựa trên nguyên tắc: <strong>Giữ trục của mình - Chiếm trục của người</strong>.
          </p>
        </div>

        {/* View Mode Switcher Toolbar */}
        <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-[#3D291F]">
          <span className="text-xs font-semibold text-slate-400 mr-1 flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-[#E2B743]" /> Chế độ hiển thị:
          </span>
          <button
            onClick={() => setViewMode("person_centerline")}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
              viewMode === "person_centerline"
                ? "bg-[#E2B743] text-[#140C08] font-bold shadow-lg shadow-[#E2B743]/20"
                : "bg-[#20150F] text-slate-300 hover:text-white border border-[#3D291F]"
            }`}
          >
            <UserCheck className="w-4 h-4" /> Đồ Hình Người Thật (Võ Sư Trục Tuyến)
          </button>
          <button
            onClick={() => setViewMode("real_combat")}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
              viewMode === "real_combat"
                ? "bg-[#E2B743] text-[#140C08] font-bold shadow-lg shadow-[#E2B743]/20"
                : "bg-[#20150F] text-slate-300 hover:text-white border border-[#3D291F]"
            }`}
          >
            <Swords className="w-4 h-4" /> Ảnh Thực Chiến Đối Kháng (2 Võ Sư)
          </button>
          <button
            onClick={() => setViewMode("text_only")}
            className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all flex items-center gap-2 ${
              viewMode === "text_only"
                ? "bg-[#E2B743] text-[#140C08] font-bold shadow-lg shadow-[#E2B743]/20"
                : "bg-[#20150F] text-slate-300 hover:text-white border border-[#3D291F]"
            }`}
          >
            <EyeOff className="w-4 h-4" /> Ẩn Đồ Hình (Chỉ Xem Phân Thế)
          </button>
        </div>
      </div>

      {/* Main Grid: Visuals & Technical Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Visual Diagram / Real Human / Combat (Only shown if NOT text_only) */}
        {viewMode !== "text_only" && (
          <div className="lg:col-span-6 glass-panel rounded-2xl p-5 sm:p-6 border border-[#3D291F] flex flex-col items-center">
            
            {/* Visual Header */}
            <div className="w-full flex items-center justify-between mb-4 text-xs">
              <span className="font-semibold text-[#E2B743] flex items-center gap-1.5">
                {viewMode === "person_centerline" ? (
                  <>
                    <Crosshair className="w-4 h-4" /> Trục Tý Ngọ Trên Thân Người Thật
                  </>
                ) : (
                  <>
                    <Swords className="w-4 h-4" /> Ảnh Đối Kháng Thực Chiến Môn Phái
                  </>
                )}
              </span>
              <span className="text-[11px] font-mono text-slate-400 bg-[#20150F] px-2 py-0.5 rounded border border-[#3D291F]">
                {viewMode === "person_centerline" ? "Võ sư thị phạm giải phẫu" : current.practitioners}
              </span>
            </div>

            {/* Mode 1: REAL PERSON CENTERLINE VISUAL */}
            {viewMode === "person_centerline" && (
              <div className="w-full flex flex-col items-center">
                {/* Posture Switcher for Person */}
                <div className="flex items-center gap-2 mb-3 text-xs">
                  <span className="text-slate-400 text-[11px]">Tư thế võ sư:</span>
                  <button
                    onClick={() => setStancePosture("bai_to")}
                    className={`px-2.5 py-1 rounded-lg border text-[11px] transition ${
                      stancePosture === "bai_to"
                        ? "bg-[#E2B743]/20 border-[#E2B743] text-[#E2B743] font-semibold"
                        : "bg-[#140C08] border-[#3D291F] text-slate-400"
                    }`}
                  >
                    1. Khởi Thế Kiềm Dương (Bái Tổ)
                  </button>
                  <button
                    onClick={() => setStancePosture("strike")}
                    className={`px-2.5 py-1 rounded-lg border text-[11px] transition ${
                      stancePosture === "strike"
                        ? "bg-[#E2B743]/20 border-[#E2B743] text-[#E2B743] font-semibold"
                        : "bg-[#140C08] border-[#3D291F] text-slate-400"
                    }`}
                  >
                    2. Xỉa Song Thủ Trục Tuyến
                  </button>
                </div>

                {/* Martial Artist Photo Container with Centerline & Acupoints */}
                <div className="relative w-full max-w-[280px] sm:max-w-[300px] aspect-[168/390] bg-[#140C08] rounded-2xl border border-[#3D291F] overflow-hidden flex items-center justify-center shadow-2xl p-2 select-none group">
                  
                  {/* Photo of real martial artist */}
                  <Image
                    src={
                      stancePosture === "bai_to"
                        ? "/assets/images/techniques/series/fig_1_1.png"
                        : "/assets/images/techniques/series/fig_1_2.png"
                    }
                    alt="Võ sư thị phạm trục Tý Ngọ Tuyến"
                    fill
                    className="object-contain p-2 filter contrast-105"
                    sizes="300px"
                    priority
                  />

                  {/* Vertical Centerline (Laser Gold) running right through center of body */}
                  <div
                    className="absolute top-2 bottom-3 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-red-500 via-[#E2B743] to-red-600 shadow-[0_0_8px_#E2B743] pointer-events-none"
                    style={{ zIndex: 10 }}
                  >
                    {/* Top Tý Label */}
                    <div className="absolute -top-1 -left-7 px-1.5 py-0.5 rounded bg-red-900/90 text-red-200 border border-red-500/50 text-[9px] font-mono font-bold tracking-wider">
                      TÝ
                    </div>
                    {/* Bottom Ngọ Label */}
                    <div className="absolute -bottom-1 -left-7 px-1.5 py-0.5 rounded bg-red-900/90 text-red-200 border border-red-500/50 text-[9px] font-mono font-bold tracking-wider">
                      NGỌ
                    </div>
                  </div>

                  {/* Wedge Triangle Overlay (Optional toggled) */}
                  {showWedgeTriangle && (
                    <svg
                      viewBox="0 0 168 390"
                      className="absolute inset-0 w-full h-full pointer-events-none z-10"
                    >
                      {/* Triangle connecting nose/chest to shoulders/elbows */}
                      <polygon
                        points="84,120 40,165 128,165"
                        fill="rgba(226, 183, 67, 0.15)"
                        stroke="#E2B743"
                        strokeWidth="1.2"
                        strokeDasharray="3 3"
                      />
                      {/* Triangle for knees/feet */}
                      <polygon
                        points="84,210 52,360 116,360"
                        fill="rgba(16, 185, 129, 0.08)"
                        stroke="#10B981"
                        strokeWidth="1"
                        strokeDasharray="2 2"
                      />
                    </svg>
                  )}

                  {/* Interactive Acupoint Hotspots */}
                  {ACUPOINTS.map((acu) => {
                    const isSelected = selectedAcupoint === acu.id;
                    return (
                      <button
                        key={acu.id}
                        onClick={() => setSelectedAcupoint(acu.id)}
                        className={`absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform z-20 flex items-center justify-center ${
                          isSelected
                            ? "w-6 h-6 bg-[#E2B743] text-[#140C08] ring-4 ring-[#E2B743]/40 scale-110 shadow-lg"
                            : "w-4 h-4 bg-red-500 text-white hover:bg-amber-400 hover:scale-125 shadow"
                        }`}
                        style={{ top: `${acu.topPercent}%` }}
                        title={`${acu.name} - Bấm để xem phân tích`}
                        aria-label={acu.name}
                      >
                        <span className="text-[8px] font-bold">
                          {isSelected ? "●" : ""}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Controls below person photo */}
                <div className="flex items-center justify-between w-full max-w-[300px] mt-3 px-1 text-xs">
                  <label className="flex items-center gap-1.5 text-slate-300 text-[11px] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={showWedgeTriangle}
                      onChange={(e) => setShowWedgeTriangle(e.target.checked)}
                      className="rounded accent-[#E2B743]"
                    />
                    Vòm Tam Giác Thủ Hộ (Mũi Nêm)
                  </label>
                  <span className="text-slate-500 text-[10px]">
                    Bấm các chấm đỏ trên thân người để tra huyệt
                  </span>
                </div>

                {/* Selected Acupoint Details Card */}
                <div className="w-full mt-4 p-3.5 rounded-xl bg-[#20150F] border border-[#E2B743]/30 text-xs space-y-1.5 animate-fadeIn">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#E2B743] flex items-center gap-1.5 text-sm">
                      <Crosshair className="w-3.5 h-3.5" /> {activeAcupointInfo.name}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 px-2 py-0.5 bg-[#140C08] rounded border border-[#3D291F]">
                      Hán Tự: {activeAcupointInfo.hanTu}
                    </span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    <strong>Giải phẫu:</strong> {activeAcupointInfo.role}
                  </p>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    <strong>Võ lý bảo vệ:</strong> {activeAcupointInfo.protection}
                  </p>
                  <div className="pt-1 flex items-center gap-1.5 text-[11px] text-[#10B981] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Thủ pháp ứng dụng: {activeAcupointInfo.wingChunTechnique}</span>
                  </div>
                </div>

              </div>
            )}

            {/* Mode 2: REAL COMBAT APPLICATION PHOTO */}
            {viewMode === "real_combat" && (
              <div className="w-full flex flex-col items-center space-y-4">
                
                {/* 4 Attack Vector Selector Buttons */}
                <div className="grid grid-cols-2 gap-2 w-full text-xs">
                  <button
                    onClick={() => setSelectedVector("center_punch")}
                    className={`p-2 rounded-xl border text-left transition flex items-center justify-between ${
                      selectedVector === "center_punch"
                        ? "bg-[#E2B743]/20 border-[#E2B743] text-[#E2B743] font-bold"
                        : "bg-[#20150F] border-[#3D291F] text-slate-300 hover:border-slate-500"
                    }`}
                  >
                    <span>1. Đấm Trực Diện</span>
                    {selectedVector === "center_punch" && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => setSelectedVector("left_hook")}
                    className={`p-2 rounded-xl border text-left transition flex items-center justify-between ${
                      selectedVector === "left_hook"
                        ? "bg-[#E2B743]/20 border-[#E2B743] text-[#E2B743] font-bold"
                        : "bg-[#20150F] border-[#3D291F] text-slate-300 hover:border-slate-500"
                    }`}
                  >
                    <span>2. Đấm Móc Trái</span>
                    {selectedVector === "left_hook" && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => setSelectedVector("right_hook")}
                    className={`p-2 rounded-xl border text-left transition flex items-center justify-between ${
                      selectedVector === "right_hook"
                        ? "bg-[#E2B743]/20 border-[#E2B743] text-[#E2B743] font-bold"
                        : "bg-[#20150F] border-[#3D291F] text-slate-300 hover:border-slate-500"
                    }`}
                  >
                    <span>3. Móc Sườn Phải</span>
                    {selectedVector === "right_hook" && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={() => setSelectedVector("low_kick")}
                    className={`p-2 rounded-xl border text-left transition flex items-center justify-between ${
                      selectedVector === "low_kick"
                        ? "bg-[#E2B743]/20 border-[#E2B743] text-[#E2B743] font-bold"
                        : "bg-[#20150F] border-[#3D291F] text-slate-300 hover:border-slate-500"
                    }`}
                  >
                    <span>4. Đá Hạ Bàn</span>
                    {selectedVector === "low_kick" && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Authentic Combat Photo */}
                <div className="relative w-full aspect-[4/3] max-w-[380px] bg-[#140C08] rounded-2xl border border-[#3D291F] overflow-hidden shadow-2xl p-2 group">
                  <Image
                    src={current.combatImg}
                    alt={current.title}
                    fill
                    className="object-contain p-2"
                    sizes="400px"
                  />
                  {/* Subtle Badge */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-[#140C08]/90 text-[#E2B743] border border-[#E2B743]/30 text-[10px] font-semibold">
                    100% Ảnh Thực Chiến Sách Gốc
                  </div>
                </div>

                {/* Combat Photo Caption & Tactical Insight */}
                <div className="w-full p-3.5 rounded-xl bg-[#20150F] border border-[#3D291F] text-xs space-y-2">
                  <div className="flex items-center gap-2 text-[#E2B743] font-semibold">
                    <Target className="w-4 h-4 shrink-0" />
                    <span>{current.combatCaption}</span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    <strong>Phân tích trục tuyến:</strong> {current.tacticalBreakdown}
                  </p>
                </div>

              </div>
            )}

          </div>
        )}

        {/* Right Column (or Full Width if text_only): Technical Martial Analysis */}
        <div className={`${viewMode === "text_only" ? "lg:col-span-12" : "lg:col-span-6"} space-y-6`}>
          
          {/* If text_only, offer attack selector buttons on top */}
          {viewMode === "text_only" && (
            <div className="glass-panel p-4 rounded-2xl border border-[#3D291F]">
              <span className="text-xs font-semibold text-slate-400 block mb-2">
                Chọn đòn tấn công khảo cứu:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <button
                  onClick={() => setSelectedVector("center_punch")}
                  className={`p-2.5 rounded-xl border text-center transition ${
                    selectedVector === "center_punch"
                      ? "bg-[#E2B743]/20 border-[#E2B743] text-[#E2B743] font-bold"
                      : "bg-[#20150F] border-[#3D291F] text-slate-300"
                  }`}
                >
                  1. Đấm Trực Diện
                </button>
                <button
                  onClick={() => setSelectedVector("left_hook")}
                  className={`p-2.5 rounded-xl border text-center transition ${
                    selectedVector === "left_hook"
                      ? "bg-[#E2B743]/20 border-[#E2B743] text-[#E2B743] font-bold"
                      : "bg-[#20150F] border-[#3D291F] text-slate-300"
                  }`}
                >
                  2. Đấm Móc Trái
                </button>
                <button
                  onClick={() => setSelectedVector("right_hook")}
                  className={`p-2.5 rounded-xl border text-center transition ${
                    selectedVector === "right_hook"
                      ? "bg-[#E2B743]/20 border-[#E2B743] text-[#E2B743] font-bold"
                      : "bg-[#20150F] border-[#3D291F] text-slate-300"
                  }`}
                >
                  3. Móc Sườn Phải
                </button>
                <button
                  onClick={() => setSelectedVector("low_kick")}
                  className={`p-2.5 rounded-xl border text-center transition ${
                    selectedVector === "low_kick"
                      ? "bg-[#E2B743]/20 border-[#E2B743] text-[#E2B743] font-bold"
                      : "bg-[#20150F] border-[#3D291F] text-slate-300"
                  }`}
                >
                  4. Đá Hạ Bàn
                </button>
              </div>
            </div>
          )}

          {/* Tactical Breakdown Panel */}
          <div className="glass-panel p-6 rounded-2xl border border-[#3D291F] space-y-4">
            <div className="border-b border-[#3D291F] pb-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#E2B743] block">
                Phân Thế Đối Kháng Theo Trục Tuyến
              </span>
              <h3 className="text-xl font-bold font-serif text-white">{current.title}</h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="bg-[#140C08] p-3.5 rounded-xl border border-[#3D291F]">
                <strong className="text-red-400 flex items-center gap-1.5 mb-1">
                  <Target className="w-4 h-4" /> Ý đồ tấn công của đối thủ:
                </strong>
                <p className="text-slate-300 leading-relaxed text-xs sm:text-[13px]">{current.opponentAction}</p>
              </div>

              <div className="bg-[#140C08] p-3.5 rounded-xl border border-[#10B981]/30">
                <strong className="text-[#10B981] flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-4 h-4" /> Cách Vịnh Xuân giải mã & phản kích:
                </strong>
                <p className="text-slate-200 leading-relaxed text-xs sm:text-[13px]">{current.wingChunDefense}</p>
              </div>

              <div className="bg-[#140C08] p-3.5 rounded-xl border border-[#E2B743]/30">
                <strong className="text-[#E2B743] flex items-center gap-1.5 mb-1">
                  <Award className="w-4 h-4" /> Yếu lĩnh khẩu quyết cốt lõi:
                </strong>
                <p className="text-slate-300 italic leading-relaxed text-xs sm:text-[13px]">{current.corePrinciple}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-lg bg-[#20150F] border border-[#3D291F]">
                  <span className="text-[11px] text-slate-400 block mb-0.5">Thủ pháp đề xuất:</span>
                  <span className="font-semibold text-[#E2B743] text-xs">{current.hands}</span>
                </div>
                <div className="p-3 rounded-lg bg-[#20150F] border border-[#3D291F]">
                  <span className="text-[11px] text-slate-400 block mb-0.5">Tấn pháp vận hành:</span>
                  <span className="font-semibold text-[#10B981] text-xs">{current.footwork}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Three Golden Principles Box */}
          <div className="glass-panel p-5 rounded-2xl border border-[#3D291F] space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#E2B743]" />
              3 Định Luật Vàng Của Trục Tý Ngọ Tuyến
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded bg-[#E2B743]/20 text-[#E2B743] font-bold flex items-center justify-center shrink-0 text-[10px]">1</span>
                <p><strong>Cùi chỏ không rời nách quá 1 nắm tay (Quy tắc Giữ Chỏ):</strong> Cùi chỏ luôn nằm trên trục che chắn chấn thủy và liên sườn, tuyệt đối không vung tay sang ngang làm hở sườn và nách.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded bg-[#E2B743]/20 text-[#E2B743] font-bold flex items-center justify-center shrink-0 text-[10px]">2</span>
                <p><strong>Mũi nhọn hướng tâm (Vòm Mũi Nêm Sắt):</strong> Hai mũi bàn tay luôn hướng thẳng vào sống mũi hoặc ngực đối thủ, tạo thành mũi nêm dẫn hướng đòn đánh của địch trượt ra ngoài an toàn.</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded bg-[#E2B743]/20 text-[#E2B743] font-bold flex items-center justify-center shrink-0 text-[10px]">3</span>
                <p><strong>Triệt tiêu trước khi phát lực (Thủ Công Đồng Thời):</strong> Không đỡ rồi mới đánh; trong lúc bạt đòn đối thủ chệch trục 5cm thì tay kia lập tức thấu kình vào yếu huyệt trung môn.</p>
              </div>
            </div>
          </div>

          {/* Secret Poem from Tang Kinh Cac */}
          <div className="p-4 rounded-xl bg-[#20150F] border border-[#E2B743]/20 text-xs space-y-2">
            <span className="text-[10px] font-mono text-[#E2B743] uppercase tracking-wider block">
              Khẩu Quyết Bí Truyền Môn Phái (Tàng Kinh Các)
            </span>
            <p className="text-slate-300 italic text-[11px] leading-relaxed">
              &quot;Trục thẳng nối liền tâm ngực của ta và đối thủ. Ai khống chế được trục này, người đó kiểm soát trận đấu.<br />
              Lai lưu khứ tống, thoát thủ trực xông: Đòn tới thì mượn lực đón giữ, đòn rút đi thì áp sát tiễn theo; hễ tay rời đòn đỡ là lập tức phát xung quyền đánh thẳng vào trục trung môn đối phương.&quot;
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
