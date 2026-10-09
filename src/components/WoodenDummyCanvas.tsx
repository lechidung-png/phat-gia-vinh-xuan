"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ChevronRight,
  Swords,
  Ruler,
  Shield,
  Compass,
  History,
  ZoomIn,
  Eye,
  X,
  Sparkles,
} from "lucide-react";
import { Technique } from "@/data/techniques";

interface WoodenDummyCanvasProps {
  techniques: Technique[];
  onSelectTechnique: (tech: Technique) => void;
}

type DummyViewMode = "top_down" | "side_elevation" | "historical_archives";

interface DummyArchiveCard {
  id: string;
  imgUrl: string;
  pageBadge: string;
  title: string;
  subtitle: string;
  desc: string;
  focusPoint: string;
}

const ARCHIVE_CARDS: DummyArchiveCard[] = [
  {
    id: "card-1954-dummy",
    imgUrl: "/assets/hinh-2x/p093-h01.png",
    pageBadge: "Di Sản Lịch Sử • Năm 1954",
    title: "Cây Mộc Nhân 38 Phố Gia Ngư",
    subtitle: "Nguyên bản thiết kế của Sư Tổ Nguyễn Tế Công",
    desc: "Cây mộc nhân 5 tầng cọc nguyên bản do đích thân Sư Tổ Nguyễn Tế Công làm tại nhà Cụ Trần Thúc Tiển những năm 1954–1958 để truyền dạy môn sinh tại Hà Nội.",
    focusPoint: "5 tầng cọc đặc thù: xà ngang đỉnh đầu, 2 tay ngực, 1 tay rốn, 2 cọc chân hạ bàn.",
  },
  {
    id: "card-p095-h01",
    imgUrl: "/assets/hinh-2x/p095-h01.png",
    pageBadge: "Trang 95 Sách Gốc • Thế 0 (Bái Tổ)",
    title: "Khởi Thế Bái Tổ Mộc Nhân",
    subtitle: "HLV Nguyễn Quốc Minh thị phạm",
    desc: "Đứng thế Nhị Tự Kiềm Dương Tấn trước cọc mộc nhân ở cự ly chuẩn 2 bàn chân. Hai tay chắp thủ trước ngực, trầm thân hạ khí đan điền, định tâm chuẩn bị khai triển quyền pháp.",
    focusPoint: "Tấn chân hẹp chuẩn mực, ngực thẳng, mắt nhìn thấu suốt cọc mộc nhân theo trục Tý Ngọ.",
  },
  {
    id: "card-p095-h02",
    imgUrl: "/assets/hinh-2x/p095-h02.png",
    pageBadge: "Trang 95 Sách Gốc • Chiêu 1",
    title: "Chiêu 1: Tam Giác Thủ Phá Hai Cọc Ngực",
    subtitle: "Đòn nêm mở đường phá trung lộ",
    desc: "Hai tay chắp đánh thẳng về phía cọc sao cho hai cẳng tay tạo thế hình tam giác cân, chẻ góc đón đỡ và chặn đứng đồng thời cả hai tay ngực của Mộc Nhân.",
    focusPoint: "Lực phát từ gót chân truyền lên hông, hai cùi chỏ khép hướng tâm giữ vững trung tuyến.",
  },
  {
    id: "card-p095-h03",
    imgUrl: "/assets/hinh-2x/p095-h03.png",
    pageBadge: "Trang 95 Sách Gốc • Chiêu 2",
    title: "Chiêu 2: Song Thủ Đánh Xuống Cọc Bụng",
    subtitle: "Kiểm soát hạ lộ & chấn thủy",
    desc: "Hai bàn tay đặt song song nhau đánh thẳng hạ kình xuống phần tay bụng (trung thung) của Mộc Nhân, ghìm đòn đánh xốc của đối phương và áp chế không gian.",
    focusPoint: "Song thủ chưởng hạ kình, bảo toàn khoảng cách an toàn không để tay bụng đối phương luồn nách.",
  },
  {
    id: "card-p095-h04",
    imgUrl: "/assets/hinh-2x/p095-h04.png",
    pageBadge: "Trang 95 Sách Gốc • Chiêu 4.1",
    title: "Chiêu 4.1: Xoay Biên Thân Chặn Cọc Ngực",
    subtitle: "Biên thân thoát trục Tý Ngọ",
    desc: "Xoay người sang phải, tay phải chặn đầu tay ngực phải của Mộc Nhân, cẳng tay và bàn tay trái dựng thẳng đứng đánh chặn mặt trong tay ngực, mở đường nhập nội áp sát.",
    focusPoint: "Thân hình xoay 45° né mũi nhọn phản hồi, bàn tay trái dựng đứng tạo góc khóa đòn hiểm hóc.",
  },
  {
    id: "card-p095-h08",
    imgUrl: "/assets/hinh-2x/p095-h08.png",
    pageBadge: "Trang 95 Sách Gốc • Chiêu 8.1",
    title: "Chiêu 8.1: Song Thủ Phối Hợp Bàng Thủ Cọc Bụng",
    subtitle: "Liên hoàn thủ pháp công thủ toàn diện",
    desc: "Xoay người sang phải, hai tay xuất chiêu đồng thời: bàn tay phải đánh chặn đầu tay bụng, tay trái thi triển Bàng Thủ đánh chặn vào phần thân tay bụng của Mộc Nhân.",
    focusPoint: "Cánh tay Bàng Thủ uốn cánh cung hoá giải triệt để lực thọc thẳng vào bụng dưới.",
  },
];

export const WoodenDummyCanvas: React.FC<WoodenDummyCanvasProps> = ({
  techniques,
  onSelectTechnique,
}) => {
  const [viewMode, setViewMode] = useState<DummyViewMode>("top_down");
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  // Lọc các chiêu thức thuộc phần Mộc Nhân hoặc tương ứng
  const dummyTechniques = techniques.filter(
    (t) =>
      t.sectionId === "108-moc-nhan" ||
      t.order >= 85 ||
      t.summary.toLowerCase().includes("mộc nhân") ||
      t.name.toLowerCase().includes("mộc nhân")
  );

  return (
    <div className="space-y-6">
      {/* Header Banner - Nâu Ánh Kim Sa Cao Cấp */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#F5D06C]/30 relative overflow-hidden">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5D06C]/15 text-[#F5D06C] border border-[#F5D06C]/30 text-xs font-bold uppercase tracking-widest">
            <Ruler className="w-3.5 h-3.5" /> Hồ Sơ Bản Vẽ Kiến Trúc & Tư Liệu Gốc Trang 93 - 95
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif gold-gradient">
            Khảo Cứu Cọc Gỗ Mộc Nhân Phật Gia Vịnh Xuân
          </h2>
          <p className="text-[#F7E7D9] text-xs sm:text-sm leading-relaxed">
            Hồ sơ phục chế kỹ thuật kiến trúc, kết cấu cơ khí và nhân trắc học cọc gỗ Mộc Nhân dựa trên tài liệu gốc của <strong>GS.TS Y Khoa Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2012)</strong>. Khảo sát đa chiều từ bản vẽ mặt bằng nhìn từ trên cao (Trang 94), ảnh chụp ngang khung treo (Trang 93 & 94) đến bộ ảnh phục chế HD từng chiêu thức Mộc Nhân Thao Pháp (Trang 95).
          </p>
        </div>

        {/* 3 Tab Navigation - Chuẩn Mực Kiến Trúc */}
        <div className="flex flex-wrap gap-2.5 mt-6 pt-5 border-t border-[#F5D06C]/20">
          <button
            onClick={() => setViewMode("top_down")}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition ${
              viewMode === "top_down"
                ? "bg-[#F5D06C] text-[#2A0E0A] font-bold shadow-lg shadow-[#F5D06C]/25"
                : "bg-[#2A0E0A]/80 text-[#D9C3B4] hover:text-white border border-[#F5D06C]/20"
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>1. Mặt Bằng Từ Trên Cao (Top-down Plan - Trang 94)</span>
          </button>

          <button
            onClick={() => setViewMode("side_elevation")}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition ${
              viewMode === "side_elevation"
                ? "bg-[#F5D06C] text-[#2A0E0A] font-bold shadow-lg shadow-[#F5D06C]/25"
                : "bg-[#2A0E0A]/80 text-[#D9C3B4] hover:text-white border border-[#F5D06C]/20"
            }`}
          >
            <Ruler className="w-4 h-4" />
            <span>2. Mặt Đứng & Chụp Ngang (Elevation & Side - Trang 93 & 94)</span>
          </button>

          <button
            onClick={() => setViewMode("historical_archives")}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition ${
              viewMode === "historical_archives"
                ? "bg-[#F5D06C] text-[#2A0E0A] font-bold shadow-lg shadow-[#F5D06C]/25"
                : "bg-[#2A0E0A]/80 text-[#D9C3B4] hover:text-white border border-[#F5D06C]/20"
            }`}
          >
            <History className="w-4 h-4" />
            <span>3. Tư Liệu Gốc 38 Gia Ngư & Chiêu Thức Mộc Nhân (Trang 93 - 95)</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: MẶT BẰNG TỪ TRÊN CAO (TOP-DOWN PLAN VIEW) - CHUẨN TRANG 94        */}
      {/* ========================================================================= */}
      {viewMode === "top_down" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left 8 Cols: Graphic Display */}
            <div className="lg:col-span-8 glass-panel rounded-2xl p-5 sm:p-6 border border-[#F5D06C]/25 flex flex-col items-center shadow-2xl">
              <div className="w-full flex items-center justify-between mb-3 text-xs">
                <span className="font-semibold text-[#F5D06C] flex items-center gap-1.5">
                  <Compass className="w-4 h-4" />
                  Bản Vẽ Kỹ Thuật Nguyên Bản Phục Chế HD (Trang 94)
                </span>
                <span className="text-[11px] font-mono text-amber-300 font-semibold bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-800/40">
                  Mã p094-h01 • Retina 2×
                </span>
              </div>

              {/* ẢNH BẢN VẼ GỐC TỪ SÁCH TRANG 94 */}
              <div className="w-full space-y-3">
                <div
                  onClick={() => setZoomedImage("/assets/hinh-2x/p094-h01.png")}
                  className="relative w-full aspect-[16/9] sm:aspect-[2/1] martial-photo-frame rounded-2xl overflow-hidden p-3 cursor-zoom-in group"
                >
                  <Image
                    src="/assets/hinh-2x/p094-h01.png"
                    alt="Bản vẽ mặt bằng từ trên cao vị trí khi tập với Mộc Nhân - Sách 2012 trang 94"
                    fill
                    className="object-contain martial-filter"
                    priority
                  />
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/80 text-white text-[11px] font-mono flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition shadow">
                    <ZoomIn className="w-3.5 h-3.5 text-[#F5D06C]" />
                    Phóng to chi tiết
                  </div>
                </div>
                <div className="text-center text-xs text-[#F7E7D9] italic">
                  Bản vẽ nguyên bản từ trang 94 sách in: <strong>Hình bên trái</strong> thể hiện vị trí tấn Kiềm Dương đứng thẳng (cự ly 2 bàn chân); <strong>Hình bên phải</strong> thể hiện vị trí xoay chân biên thân né trục Tý Ngọ Tuyến đâm thẳng ra trước.
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Architectural & Martial Analysis */}
            <div className="lg:col-span-4 space-y-4 text-xs sm:text-sm">
              <div className="glass-panel p-5 rounded-2xl border border-[#F5D06C]/25 space-y-3">
                <div className="flex items-center gap-2 text-[#F5D06C] font-bold uppercase tracking-wider text-xs">
                  <Ruler className="w-4 h-4" />
                  Quy Chuẩn Kích Thước Bản Vẽ Mặt Bằng
                </div>
                <div className="space-y-2 text-[#F7E7D9] leading-relaxed text-xs">
                  <p>
                    • <strong>Thân mộc nhân tròn:</strong> Đường kính chuẩn <strong>Ø30cm</strong>. Đủ nặng để không bị xô lệch, nhưng không quá to làm choãi tay môn sinh.
                  </p>
                  <p>
                    • <strong>Hai tay ngực (Tả/Hữu thượng thung):</strong> Mở góc chữ V hướng tâm, đón lực nêm 45°. Khoảng cách giữa 2 đầu ngón tay ngực bằng chiều rộng lồng ngực người tập (~20-22cm).
                  </p>
                  <p>
                    • <strong>Tay giữa (Trung thung / rốn):</strong> Đặt ngay trên trục Tý Ngọ Tuyến, vươn ra ngắn hơn hai tay trên 5-7cm để môn sinh luồn cùi chỏ vào trong.
                  </p>
                  <p>
                    • <strong>Cơ cấu mộng phía sau:</strong> 3 đuôi tay xuyên thẳng qua thân cọc, có đục lỗ then cài chốt ngang để tạo <em>&quot;độ giơ&quot; (độ rơ cơ học)</em> rung lắc hấp thụ kình lực.
                  </p>
                </div>
              </div>

              <div className="glass-panel p-5 rounded-2xl border border-[#F5D06C]/25 space-y-3">
                <div className="flex items-center gap-2 text-[#10B981] font-bold uppercase tracking-wider text-xs">
                  <Compass className="w-4 h-4" />
                  Ý Nghĩa Bộ Pháp: Đứng Thẳng vs Biên Thân
                </div>
                <div className="space-y-2.5 text-[#F7E7D9] leading-relaxed text-xs">
                  <div className="p-2.5 rounded-xl bg-[#2A0E0A]/90 border border-[#F5D06C]/20">
                    <strong className="text-amber-300 block mb-0.5">1. Thế Đứng Thẳng (Nhị Tự Kiềm Dương Tấn):</strong>
                    Cách cọc mộc nhân đúng <strong>2 bàn chân</strong> (~50-60cm). Mũi chân hướng vào trong, đầu gối khép che hạ bộ. Đứng chính diện trục Tý Ngọ Tuyến để rèn luyện song thủ xỉa, than thủ, bàng thủ và thung kình đối xứng.
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#2A0E0A]/90 border border-[#F5D06C]/20">
                    <strong className="text-emerald-300 block mb-0.5">2. Thế Xoay Chân (Biên Thân Tam Giác Bộ):</strong>
                    Xoay trục hông và 2 bàn chân 45° sang bên. Trọng tâm dồn 70% vào chân sau. Mũi tên trục Tý Ngọ của Mộc Nhân đâm thẳng ra khoảng không, trong khi môn sinh đã lách vào nách cọc để tung đòn trảm sườn hoặc bẻ khớp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: MẶT ĐỨNG & ẢNH CHỤP NGANG (ELEVATION & SIDE VIEW) - CHUẨN 93 & 94   */}
      {/* ========================================================================= */}
      {viewMode === "side_elevation" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left 6 Cols: Ảnh Chụp Ngang Thực Tế Trang 93-94 */}
            <div className="lg:col-span-6 glass-panel rounded-2xl p-5 sm:p-6 border border-[#F5D06C]/25 flex flex-col items-center shadow-xl space-y-3">
              <div className="w-full flex items-center justify-between text-xs">
                <span className="font-bold text-[#F5D06C] flex items-center gap-1.5">
                  <Eye className="w-4 h-4" /> 1. Cọc Mộc Nhân Treo Trên Khung Giá Đỡ (Trang 93)
                </span>
                <span className="text-[10px] font-mono text-amber-300 bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-800/40">
                  Mã p093-h02 • Retina 2×
                </span>
              </div>

              <div
                onClick={() => setZoomedImage("/assets/hinh-2x/p093-h02.png")}
                className="relative w-full h-[380px] sm:h-[440px] martial-photo-frame rounded-2xl overflow-hidden p-3 cursor-zoom-in group flex items-center justify-center"
              >
                <Image
                  src="/assets/hinh-2x/p093-h02.png"
                  alt="Ảnh chụp ngang mộc nhân trên khung giá đỡ 2 trụ - Sách 2012 trang 93"
                  fill
                  className="object-contain martial-filter"
                  priority
                />
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/80 text-white text-[11px] font-mono flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition shadow">
                  <ZoomIn className="w-3.5 h-3.5 text-[#F5D06C]" />
                  Phóng to
                </div>
              </div>

              <div className="text-xs text-[#F7E7D9] leading-relaxed">
                <strong className="text-amber-300 block mb-1">Đặc Điểm Kết Cấu Khung Giá Treo (Trang 93 & 94):</strong>
                • Thân mộc nhân được treo trên <strong>khung giá đỡ gồm 2 cột trụ đứng</strong> hai bên có chân đế bản mã bắt vít xuống sàn nhà.
                <br />• <strong>2 thanh xà ngang giằng</strong> xuyên qua giữ thân cọc chắc chắn nhưng vẫn cho phép thân cọc có độ đàn hồi tự nhiên khi chịu đòn thung kình.
                <br />• Chú thích nguyên văn sách gốc: <em>&quot;• Một kiểu mộc nhân khác, thay vì 2 tay thẳng của đầu gối và bàn chân, chỉ dùng một tay cong xuống dưới.&quot;</em>
              </div>
            </div>

            {/* Right 6 Cols: Cây Mộc Nhân 5 Tầng Cọc Sư Tổ Tế Công 1954 (Trang 93) */}
            <div className="lg:col-span-6 glass-panel rounded-2xl p-5 sm:p-6 border border-[#F5D06C]/25 flex flex-col items-center shadow-xl space-y-3">
              <div className="w-full flex items-center justify-between text-xs">
                <span className="font-bold text-[#10B981] flex items-center gap-1.5">
                  <Shield className="w-4 h-4" /> 2. Cây Mộc Nhân 5 Tầng Cọc Sư Tổ Tế Công 1954 (Trang 93)
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/40">
                  Mã p093-h01 • Chuẩn Bản 38 Gia Ngư
                </span>
              </div>

              <div
                onClick={() => setZoomedImage("/assets/hinh-2x/p093-h01.png")}
                className="relative w-full h-[380px] sm:h-[440px] martial-photo-frame rounded-2xl overflow-hidden p-3 cursor-zoom-in group flex items-center justify-center"
              >
                <Image
                  src="/assets/hinh-2x/p093-h01.png"
                  alt="Cây Mộc Nhân 5 tầng cọc Sư Tổ Tế Công 1954 tại 38 phố Gia Ngư - Sách 2012 trang 93"
                  fill
                  className="object-contain martial-filter"
                  priority
                />
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/80 text-white text-[11px] font-mono flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition shadow">
                  <ZoomIn className="w-3.5 h-3.5 text-[#F5D06C]" />
                  Phóng to
                </div>
              </div>

              <div className="text-xs text-[#F7E7D9] leading-relaxed">
                <strong className="text-emerald-300 block mb-1">Cấu Tạo 5 Tầng Cọc Độc Bản Của Sư Tổ Tế Công (Trang 93):</strong>
                • <strong>Tầng 1 (Đỉnh cao +1,70m):</strong> Có <strong>xà ngang trên cao</strong> và cọc đứng phía trước dùng luyện Lục Điểm Bán Côn, Bát Trảm Đao và Liễu Diệp Kiếm.
                <br />• <strong>Tầng 2 (Ngực +1,30m):</strong> 2 tay ngực tạo đáy tam giác cân (ngang 2 núm vú).
                <br />• <strong>Tầng 3 (Rốn +1,05m):</strong> 1 tay bụng đỉnh tam giác cân dưới.
                <br />• <strong>Tầng 4 & 5 (Hạ bàn):</strong> Gồm <strong>2 cọc chân thẳng</strong> (1 cọc ngang đầu gối + 1 cọc sát đất 5cm ngang mắt cá chân) để luyện triệt cước và đạp cổ chân.
              </div>
            </div>
          </div>

          {/* Bảng Đo Cao Độ Nhân Trắc Học Chuẩn Kiến Trúc Sư */}
          <div className="glass-panel p-6 rounded-2xl border border-[#F5D06C]/25 space-y-4">
            <h3 className="text-sm sm:text-base font-bold text-[#F5D06C] flex items-center gap-2">
              <Ruler className="w-4 h-4" />
              Bảng Cao Độ Nhân Trắc Học Mộc Nhân (Theo GS.TS Y Khoa Nguyễn Mạnh Nhâm)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#F5D06C]/20 text-[#D9C3B4] font-mono">
                    <th className="py-2.5 px-3">Bộ Phận Cọc Gỗ</th>
                    <th className="py-2.5 px-3">Cao Độ Chuẩn (mm)</th>
                    <th className="py-2.5 px-3">Kích Thước Đường Kính</th>
                    <th className="py-2.5 px-3">Mô Phỏng Giải Phẫu Đối Thủ</th>
                    <th className="py-2.5 px-3">Mục Đích Luyện Tập Võ Học</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F5D06C]/15 text-[#F7E7D9]">
                  <tr className="hover:bg-[#2A0E0A]/60">
                    <td className="py-2.5 px-3 font-bold text-amber-300">1. Xà Ngang Binh Khí</td>
                    <td className="py-2.5 px-3 font-mono text-[#F5D06C] font-bold">+1650 đến +1700</td>
                    <td className="py-2.5 px-3 font-mono">Xà vuông 80x80mm</td>
                    <td className="py-2.5 px-3">Đỉnh đầu / Tầm vung đao kiếm</td>
                    <td className="py-2.5 px-3">Luyện Lục Điểm Bán Côn, Bát Trảm Đao, chém thượng bàn</td>
                  </tr>
                  <tr className="hover:bg-[#2A0E0A]/60">
                    <td className="py-2.5 px-3 font-bold text-white">2. Tay Ngực Trái & Phải</td>
                    <td className="py-2.5 px-3 font-mono text-[#F5D06C] font-bold">+1250 đến +1300</td>
                    <td className="py-2.5 px-3 font-mono">Ø 7-8cm (gốc) &rarr; 5-6cm (ngọn)</td>
                    <td className="py-2.5 px-3">Ngang 2 núm vú đối phương</td>
                    <td className="py-2.5 px-3">Luyện Than Thủ, Bàng Thủ, Phục Thủ, Nhật Tự Quyền</td>
                  </tr>
                  <tr className="hover:bg-[#2A0E0A]/60">
                    <td className="py-2.5 px-3 font-bold text-white">3. Tay Bụng (Trung Thung)</td>
                    <td className="py-2.5 px-3 font-mono text-[#F5D06C] font-bold">+1000 đến +1050</td>
                    <td className="py-2.5 px-3 font-mono">Ø 7-8cm thuôn quả xoan</td>
                    <td className="py-2.5 px-3">Ngang rốn / Chấn thủy</td>
                    <td className="py-2.5 px-3">Kiểm soát Đan Điền, chặn đòn đấm xốc, Hạ Bàng Thủ</td>
                  </tr>
                  <tr className="hover:bg-[#2A0E0A]/60">
                    <td className="py-2.5 px-3 font-bold text-white">4. Cọc Đầu Gối (Hạ Thung)</td>
                    <td className="py-2.5 px-3 font-mono text-[#F5D06C] font-bold">+450 đến +500</td>
                    <td className="py-2.5 px-3 font-mono">Dài bằng 2/3 tay trên</td>
                    <td className="py-2.5 px-3">Khớp gối đối phương</td>
                    <td className="py-2.5 px-3">Luyện Triệt Cước, đạp khóa khớp gối khi nhập nội</td>
                  </tr>
                  <tr className="hover:bg-[#2A0E0A]/60">
                    <td className="py-2.5 px-3 font-bold text-emerald-300">5. Cọc Mắt Cá Sát Đất</td>
                    <td className="py-2.5 px-3 font-mono text-[#10B981] font-bold">+50 (cách đất 5cm)</td>
                    <td className="py-2.5 px-3 font-mono">Dài bằng 2/3 tay trên</td>
                    <td className="py-2.5 px-3">Cổ chân / Mắt cá chân</td>
                    <td className="py-2.5 px-3">Luyện đạp mu bàn chân, quét gót, cài chân kiềm dương</td>
                  </tr>
                  <tr className="hover:bg-[#2A0E0A]/60">
                    <td className="py-2.5 px-3 font-bold text-slate-400">6. Bệ Đế Ổ Bi Chôn Đất</td>
                    <td className="py-2.5 px-3 font-mono text-slate-400 font-bold">&plusmn;0.00 đến -600</td>
                    <td className="py-2.5 px-3 font-mono">Bao bê tông + ổ bi thép</td>
                    <td className="py-2.5 px-3">Mặt đất sàn tập</td>
                    <td className="py-2.5 px-3">Tạo độ xoay quanh trục, rung giật thốn kình chân thực</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: TƯ LIỆU GỐC 38 GIA NGƯ & CHIÊU THỨC MỘC NHÂN (TRANG 93 - 95)       */}
      {/* ========================================================================= */}
      {viewMode === "historical_archives" && (
        <div className="space-y-6">
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-[#F5D06C]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F5D06C] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> Bộ Ảnh Phục Chế HD Siêu Nét • Bản 2× Retina
              </div>
              <h3 className="text-lg sm:text-xl font-bold font-serif text-white mt-1">
                Tư Liệu Gốc 38 Gia Ngư & Bộ Chiêu Thức Mộc Nhân Thao Pháp (Trang 93 – 95)
              </h3>
              <p className="text-xs text-[#D9C3B4] mt-1 max-w-3xl">
                Toàn bộ ảnh tư liệu scan cũ đã được thay thế 100% bằng bản phục chế HD đơn chiếc sạch sẽ, loại bỏ hoàn toàn vết chữ mờ mặt sau sách, đặt trên nền giấy lụa ngà viền kim sa chuẩn mực.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2">
              <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-[#2A0E0A] border border-[#F5D06C]/30 text-[#F5D06C] font-semibold">
                6 Tư Liệu Chuẩn Xác
              </span>
            </div>
          </div>

          {/* Lưới 6 Thẻ Phục Chế HD Trang 93 - 95 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARCHIVE_CARDS.map((card) => (
              <div
                key={card.id}
                onClick={() => setZoomedImage(card.imgUrl)}
                className="glass-panel p-4 rounded-2xl border border-[#F5D06C]/25 hover:border-[#F5D06C] transition-all duration-300 cursor-pointer group flex flex-col shadow-lg hover:shadow-2xl hover:shadow-[#F5D06C]/10"
              >
                {/* Khung ảnh giấy lụa ngà viền kim sa chuẩn mực */}
                <div className="relative w-full h-[280px] martial-photo-frame rounded-xl overflow-hidden p-2 flex items-center justify-center">
                  <Image
                    src={card.imgUrl}
                    alt={card.title}
                    fill
                    className="object-contain martial-filter transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-black/80 text-white text-[10px] font-mono flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition shadow">
                    <ZoomIn className="w-3 h-3 text-[#F5D06C]" />
                    Phóng to
                  </div>
                </div>

                {/* Nội dung tư liệu võ học chuẩn xác */}
                <div className="mt-4 flex-1 flex flex-col justify-between space-y-2.5">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono text-[#F5D06C] font-semibold uppercase tracking-wider block bg-[#2A0E0A] px-2 py-0.5 rounded border border-[#F5D06C]/20 w-fit">
                      {card.pageBadge}
                    </span>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#F5D06C] transition font-serif line-clamp-1">
                      {card.title}
                    </h4>
                    <p className="text-[11px] font-medium text-amber-200/90 italic">
                      {card.subtitle}
                    </p>
                    <p className="text-xs text-[#D9C3B4] leading-relaxed line-clamp-3">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#F5D06C]/15 text-[11px] text-[#F7E7D9]/80 flex items-start gap-1.5">
                    <span className="text-[#F5D06C] font-bold shrink-0">&bull; Điểm cốt tủy:</span>
                    <span className="line-clamp-2">{card.focusPoint}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chiêu Thức Mộc Nhân Thao Pháp Liên Quan Trong Data */}
          <div className="glass-panel p-6 rounded-2xl border border-[#F5D06C]/25 space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#F7E7D9] flex items-center gap-2">
                <Swords className="w-4 h-4 text-[#F5D06C]" />
                Chiêu Thức Mộc Nhân Thao Pháp Khác ({dummyTechniques.length} thế)
              </h4>
              <span className="text-xs text-[#D9C3B4] font-mono">Bấm vào chiêu để xem trên Sàn Tập Võ Đường Số</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {dummyTechniques.slice(0, 9).map((tech) => (
                <div
                  key={tech.id}
                  onClick={() => onSelectTechnique(tech)}
                  className="p-3 rounded-xl bg-[#2A0E0A]/90 hover:bg-[#3A140E] border border-[#F5D06C]/20 hover:border-[#F5D06C]/60 cursor-pointer transition flex items-center justify-between group shadow-sm hover:shadow"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {tech.steps?.[0]?.imgUrl ? (
                      <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-[#FBF9F5] shrink-0 border border-[#F5D06C]/40">
                        <Image
                          src={tech.steps[0].imgUrl}
                          alt={tech.name}
                          fill
                          sizes="44px"
                          className="object-contain p-0.5 martial-filter"
                        />
                      </div>
                    ) : null}
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono text-[#F5D06C] font-bold">
                          {tech.code}
                        </span>
                        <h5 className="text-xs font-bold text-white truncate group-hover:text-[#F5D06C] transition">
                          {tech.name.split(":")[1]?.trim() || tech.name}
                        </h5>
                      </div>
                      <p className="text-[11px] text-[#D9C3B4] line-clamp-1 mt-0.5">
                        {tech.summary}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#D9C3B4]/60 group-hover:text-[#F5D06C] transition shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal Phóng To Ảnh Chi Tiết */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setZoomedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-[#FBF9F5] rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col items-center border-2 border-[#F5D06C]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-xl border-2 border-white transition"
              aria-label="Đóng phóng to"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full h-[65vh] sm:h-[75vh]">
              <Image
                src={zoomedImage}
                alt="Ảnh tư liệu phóng to mộc nhân"
                fill
                className="object-contain martial-filter"
                priority
              />
            </div>
            <div className="mt-3 text-center text-xs text-[#461A14] font-medium font-mono">
              Tư liệu võ học phục chế HD: GS.TS Y Khoa Nguyễn Mạnh Nhâm &amp; ThS.DS Nguyễn Duy Thức (2012)
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
