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
} from "lucide-react";
import { Technique } from "@/data/techniques";

interface WoodenDummyCanvasProps {
  techniques: Technique[];
  onSelectTechnique: (tech: Technique) => void;
}

type DummyViewMode = "top_down" | "side_elevation" | "historical_archives";

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
      {/* Header Banner - Tiếp Cận Kiến Trúc Sư Chuyên Nghiệp */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#3D291F] relative overflow-hidden">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2B743]/15 text-[#E2B743] border border-[#E2B743]/30 text-xs font-bold uppercase tracking-widest">
            <Ruler className="w-3.5 h-3.5" /> Hồ Sơ Bản Vẽ Kiến Trúc & Tư Liệu Gốc Trang 93 - 94
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold font-serif gold-gradient">
            Khảo Cứu Cọc Gỗ Mộc Nhân Phật Gia Vịnh Xuân
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Hồ sơ phân tích kỹ thuật kiến trúc, kết cấu cơ khí và nhân trắc học cọc gỗ Mộc Nhân dựa trên tài liệu gốc của <strong>GS.TS Y Khoa Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2012)</strong>. Khảo sát đa chiều từ góc chụp ngang trực diện đến bản vẽ mặt bằng nhìn từ trên cao (Top-down Plan View) và chứng tích 1954 tại 38 Gia Ngư.
          </p>
        </div>

        {/* 3 Tab Navigation - Chuẩn Mực Kiến Trúc */}
        <div className="flex flex-wrap gap-2.5 mt-6 pt-5 border-t border-[#3D291F]">
          <button
            onClick={() => setViewMode("top_down")}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition ${
              viewMode === "top_down"
                ? "bg-[#E2B743] text-black font-bold shadow-lg shadow-[#E2B743]/20"
                : "bg-[#20150F] text-slate-300 hover:text-white border border-[#3D291F]"
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>1. Mặt Bằng Từ Trên Cao (Top-down View - Trang 94)</span>
          </button>

          <button
            onClick={() => setViewMode("side_elevation")}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition ${
              viewMode === "side_elevation"
                ? "bg-[#E2B743] text-black font-bold shadow-lg shadow-[#E2B743]/20"
                : "bg-[#20150F] text-slate-300 hover:text-white border border-[#3D291F]"
            }`}
          >
            <Ruler className="w-4 h-4" />
            <span>2. Mặt Đứng & Chụp Ngang (Elevation & Side - Trang 93 & 94)</span>
          </button>

          <button
            onClick={() => setViewMode("historical_archives")}
            className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition ${
              viewMode === "historical_archives"
                ? "bg-[#E2B743] text-black font-bold shadow-lg shadow-[#E2B743]/20"
                : "bg-[#20150F] text-slate-300 hover:text-white border border-[#3D291F]"
            }`}
          >
            <History className="w-4 h-4" />
            <span>3. Tư Liệu Gốc 38 Gia Ngư & Chiêu Thức Mộc Nhân</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: MẶT BẰNG TỪ TRÊN CAO (TOP-DOWN PLAN VIEW) - CHUẨN TRANG 94        */}
      {/* ========================================================================= */}
      {viewMode === "top_down" && (
        <div className="space-y-6">

          {/* Main Visual Display Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left 8 Cols: Graphic Display */}
            <div className="lg:col-span-8 glass-panel rounded-2xl p-5 sm:p-6 border border-[#3D291F] flex flex-col items-center shadow-2xl">
              <div className="w-full flex items-center justify-between mb-3 text-xs">
                <span className="font-semibold text-[#E2B743] flex items-center gap-1.5">
                  <Compass className="w-4 h-4" />
                  Bản Vẽ Kỹ Thuật Nguyên Bản (Sách 2012 - Trang 94)
                </span>
                <span className="text-[11px] font-mono text-amber-300 font-semibold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
                  Góc Nhìn Từ Trên Cao (Top-down Plan)
                </span>
              </div>

              {/* ẢNH BẢN VẼ GỐC TỪ SÁCH TRANG 94 */}
              <div className="w-full space-y-3">
                  <div
                    onClick={() => setZoomedImage("/assets/images/diagrams/moc_nhan_trang94_mat_bang_tren_cao.png")}
                    className="relative w-full aspect-[16/9] sm:aspect-[2/1] bg-white rounded-2xl overflow-hidden p-3 border-2 border-slate-300 shadow-inner cursor-zoom-in group"
                  >
                    <Image
                      src="/assets/images/diagrams/moc_nhan_trang94_mat_bang_tren_cao.png"
                      alt="Bản vẽ mặt bằng từ trên cao vị trí khi tập với Mộc Nhân - Sách 2012 trang 94"
                      fill
                      className="object-contain"
                      priority
                    />
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/75 text-white text-[11px] font-mono flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition shadow">
                      <ZoomIn className="w-3.5 h-3.5 text-[#E2B743]" />
                      Click để phóng to chi tiết
                    </div>
                  </div>
                  <div className="text-center text-xs text-slate-300 italic">
                    Bản vẽ nguyên bản từ trang 94 sách in: <strong>Hình bên trái</strong> thể hiện vị trí tấn Kiềm Dương đứng thẳng (cự ly 2 bàn chân); <strong>Hình bên phải</strong> thể hiện vị trí xoay chân biên thân né trục Tý Ngọ Tuyến đâm thẳng ra trước.
                  </div>
                </div>
            </div>

            {/* Right 4 Cols: Architectural & Martial Analysis */}
            <div className="lg:col-span-4 space-y-4 text-xs sm:text-sm">
              <div className="glass-panel p-5 rounded-2xl border border-[#3D291F] space-y-3">
                <div className="flex items-center gap-2 text-[#E2B743] font-bold uppercase tracking-wider text-xs">
                  <Ruler className="w-4 h-4" />
                  Quy Chuẩn Kích Thước Bản Vẽ Mặt Bằng
                </div>
                <div className="space-y-2 text-slate-300 leading-relaxed text-xs">
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

              <div className="glass-panel p-5 rounded-2xl border border-[#3D291F] space-y-3">
                <div className="flex items-center gap-2 text-[#10B981] font-bold uppercase tracking-wider text-xs">
                  <Compass className="w-4 h-4" />
                  Ý Nghĩa Bộ Pháp: Đứng Thẳng vs Biên Thân
                </div>
                <div className="space-y-2.5 text-slate-300 leading-relaxed text-xs">
                  <div className="p-2.5 rounded-xl bg-[#20150F] border border-[#3D291F]">
                    <strong className="text-amber-300 block mb-0.5">1. Thế Đứng Thẳng (Nhị Tự Kiềm Dương Tấn):</strong>
                    Cách cọc mộc nhân đúng <strong>2 bàn chân</strong> (~50-60cm). Mũi chân hướng vào trong, đầu gối khép che hạ bộ. Đứng chính diện trục Tý Ngọ Tuyến để rèn luyện song thủ xỉa, than thủ, bàng thủ và thung kình đối xứng.
                  </div>
                  <div className="p-2.5 rounded-xl bg-[#20150F] border border-[#3D291F]">
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
            {/* Left 6 Cols: Ảnh Chụp Ngang Thực Tế Trang 94 */}
            <div className="lg:col-span-6 glass-panel rounded-2xl p-5 sm:p-6 border border-[#3D291F] flex flex-col items-center shadow-xl space-y-3">
              <div className="w-full flex items-center justify-between text-xs">
                <span className="font-bold text-[#E2B743] flex items-center gap-1.5">
                  <Eye className="w-4 h-4" /> 1. Ảnh Chụp Ngang Trên Khung Giá Đỡ (Trang 94)
                </span>
                <span className="text-[10px] font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded border border-[#3D291F]">
                  Sách 2012 Trang 94
                </span>
              </div>

              <div
                onClick={() => setZoomedImage("/assets/images/diagrams/moc_nhan_trang94_chup_ngang.png")}
                className="relative w-full h-[380px] sm:h-[440px] bg-white rounded-2xl overflow-hidden p-3 border-2 border-slate-300 shadow-inner cursor-zoom-in group flex items-center justify-center"
              >
                <Image
                  src="/assets/images/diagrams/moc_nhan_trang94_chup_ngang.png"
                  alt="Ảnh chụp ngang mộc nhân trên khung giá đỡ 2 trụ - Sách 2012 trang 94"
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/75 text-white text-[11px] font-mono flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition shadow">
                  <ZoomIn className="w-3.5 h-3.5 text-[#E2B743]" />
                  Phóng to
                </div>
              </div>

              <div className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-amber-300 block mb-1">Đặc Điểm Kết Cấu Khung Giá Treo (Trang 94):</strong>
                • Thân mộc nhân được treo trên <strong>khung giá đỡ gồm 2 cột trụ đứng</strong> hai bên có chân đế bản mã bắt vít xuống sàn nhà.
                <br />• <strong>2 thanh xà ngang giằng</strong> xuyên qua giữ thân cọc chắc chắn nhưng vẫn cho phép thân cọc có độ đàn hồi tự nhiên khi chịu đòn thung kình.
                <br />• Chú thích nguyên văn sách gốc: <em>&quot;• Một kiểu mộc nhân khác, thay vì 2 tay thẳng của đầu gối và bàn chân, chỉ dùng một tay cong xuống dưới.&quot;</em>
              </div>
            </div>

            {/* Right 6 Cols: Cây Mộc Nhân 5 Tầng Cọc Sư Tổ Tế Công 1954 (Trang 93) */}
            <div className="lg:col-span-6 glass-panel rounded-2xl p-5 sm:p-6 border border-[#3D291F] flex flex-col items-center shadow-xl space-y-3">
              <div className="w-full flex items-center justify-between text-xs">
                <span className="font-bold text-[#10B981] flex items-center gap-1.5">
                  <Shield className="w-4 h-4" /> 2. Cây Mộc Nhân 5 Tầng Cọc Sư Tổ Tế Công 1954 (Trang 93)
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  Chuẩn Bản 38 Gia Ngư
                </span>
              </div>

              <div
                onClick={() => setZoomedImage("/assets/images/diagrams/moc_nhan_trang93_te_cong_chuan.png")}
                className="relative w-full h-[380px] sm:h-[440px] bg-white rounded-2xl overflow-hidden p-3 border-2 border-slate-300 shadow-inner cursor-zoom-in group flex items-center justify-center"
              >
                <Image
                  src="/assets/images/diagrams/moc_nhan_trang93_te_cong_chuan.png"
                  alt="Cây Mộc Nhân 5 tầng cọc Sư Tổ Tế Công 1954 tại 38 phố Gia Ngư - Sách 2012 trang 93"
                  fill
                  className="object-contain"
                  priority
                />
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/75 text-white text-[11px] font-mono flex items-center gap-1.5 opacity-80 group-hover:opacity-100 transition shadow">
                  <ZoomIn className="w-3.5 h-3.5 text-[#E2B743]" />
                  Phóng to
                </div>
              </div>

              <div className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-emerald-300 block mb-1">Cấu Tạo 5 Tầng Cọc Độc Bản Của Sư Tổ Tế Công (Trang 93):</strong>
                • <strong>Tầng 1 (Đỉnh cao +1,70m):</strong> Có <strong>xà ngang trên cao</strong> và cọc đứng phía trước dùng luyện Lục Điểm Bán Côn, Bát Trảm Đao và Liễu Diệp Kiếm.
                <br />• <strong>Tầng 2 (Ngực +1,30m):</strong> 2 tay ngực tạo đáy tam giác cân (ngang 2 núm vú).
                <br />• <strong>Tầng 3 (Rốn +1,05m):</strong> 1 tay bụng đỉnh tam giác cân dưới.
                <br />• <strong>Tầng 4 & 5 (Hạ bàn):</strong> Gồm <strong>2 cọc chân thẳng</strong> (1 cọc ngang đầu gối + 1 cọc sát đất 5cm ngang mắt cá chân) để luyện triệt cước và đạp cổ chân.
              </div>
            </div>
          </div>

          {/* Bảng Đo Cao Độ Nhân Trắc Học Chuẩn Kiến Trúc Sư */}
          <div className="glass-panel p-6 rounded-2xl border border-[#3D291F] space-y-4">
            <h3 className="text-sm sm:text-base font-bold text-[#E2B743] flex items-center gap-2">
              <Ruler className="w-4 h-4" />
              Bảng Cao Độ Nhân Trắc Học Mộc Nhân (Theo GS.TS Y Khoa Nguyễn Mạnh Nhâm)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[#3D291F] text-slate-400 font-mono">
                    <th className="py-2.5 px-3">Bộ Phận Cọc Gỗ</th>
                    <th className="py-2.5 px-3">Cao Độ Chuẩn (mm)</th>
                    <th className="py-2.5 px-3">Kích Thước Đường Kính</th>
                    <th className="py-2.5 px-3">Mô Phỏng Giải Phẫu Đối Thủ</th>
                    <th className="py-2.5 px-3">Mục Đích Luyện Tập Võ Học</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#3D291F]/60 text-slate-300">
                  <tr className="hover:bg-[#20150F]/50">
                    <td className="py-2.5 px-3 font-bold text-amber-300">1. Xà Ngang Binh Khí</td>
                    <td className="py-2.5 px-3 font-mono text-[#E2B743] font-bold">+1650 đến +1700</td>
                    <td className="py-2.5 px-3 font-mono">Xà vuông 80x80mm</td>
                    <td className="py-2.5 px-3">Đỉnh đầu / Tầm vung đao kiếm</td>
                    <td className="py-2.5 px-3">Luyện Lục Điểm Bán Côn, Bát Trảm Đao, chém thượng bàn</td>
                  </tr>
                  <tr className="hover:bg-[#20150F]/50">
                    <td className="py-2.5 px-3 font-bold text-white">2. Tay Ngực Trái & Phải</td>
                    <td className="py-2.5 px-3 font-mono text-[#E2B743] font-bold">+1250 đến +1300</td>
                    <td className="py-2.5 px-3 font-mono">Ø 7-8cm (gốc) $\to$ 5-6cm (ngọn)</td>
                    <td className="py-2.5 px-3">Ngang 2 núm vú đối phương</td>
                    <td className="py-2.5 px-3">Luyện Than Thủ, Bàng Thủ, Phục Thủ, Nhật Tự Quyền</td>
                  </tr>
                  <tr className="hover:bg-[#20150F]/50">
                    <td className="py-2.5 px-3 font-bold text-white">3. Tay Bụng (Trung Thung)</td>
                    <td className="py-2.5 px-3 font-mono text-[#E2B743] font-bold">+1000 đến +1050</td>
                    <td className="py-2.5 px-3 font-mono">Ø 7-8cm thuôn quả xoan</td>
                    <td className="py-2.5 px-3">Ngang rốn / Chấn thủy</td>
                    <td className="py-2.5 px-3">Kiểm soát Đan Điền, chặn đòn đấm xốc, Hạ Bàng Thủ</td>
                  </tr>
                  <tr className="hover:bg-[#20150F]/50">
                    <td className="py-2.5 px-3 font-bold text-white">4. Cọc Đầu Gối (Hạ Thung)</td>
                    <td className="py-2.5 px-3 font-mono text-[#E2B743] font-bold">+450 đến +500</td>
                    <td className="py-2.5 px-3 font-mono">Dài bằng 2/3 tay trên</td>
                    <td className="py-2.5 px-3">Khớp gối đối phương</td>
                    <td className="py-2.5 px-3">Luyện Triệt Cước, đạp khóa khớp gối khi nhập nội</td>
                  </tr>
                  <tr className="hover:bg-[#20150F]/50">
                    <td className="py-2.5 px-3 font-bold text-emerald-300">5. Cọc Mắt Cá Sát Đất</td>
                    <td className="py-2.5 px-3 font-mono text-[#10B981] font-bold">+50 (cách đất 5cm)</td>
                    <td className="py-2.5 px-3 font-mono">Dài bằng 2/3 tay trên</td>
                    <td className="py-2.5 px-3">Cổ chân / Mắt cá chân</td>
                    <td className="py-2.5 px-3">Luyện đạp mu bàn chân, quét gót, cài chân kiềm dương</td>
                  </tr>
                  <tr className="hover:bg-[#20150F]/50">
                    <td className="py-2.5 px-3 font-bold text-slate-400">6. Bệ Đế Ổ Bi Chôn Đất</td>
                    <td className="py-2.5 px-3 font-mono text-slate-400 font-bold">±0.00 đến -600</td>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Cây Mộc Nhân 38 Gia Ngư 1954 */}
            <div
              onClick={() => setZoomedImage("/assets/images/diagrams/moc_nhan_trang93_te_cong_chuan.png")}
              className="glass-panel p-4 rounded-2xl border border-[#3D291F] hover:border-[#E2B743] transition cursor-pointer group flex flex-col"
            >
              <div className="relative w-full h-[260px] bg-white rounded-xl overflow-hidden p-2 border border-slate-300">
                <Image
                  src="/assets/images/diagrams/moc_nhan_trang93_te_cong_chuan.png"
                  alt="Cây Mộc Nhân nguyên bản Sư Tổ Tế Công 1954"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-3 space-y-1">
                <span className="text-[10px] font-mono text-[#E2B743] uppercase tracking-wider block">
                  Trang 93 Sách Gốc (1954)
                </span>
                <h4 className="text-sm font-bold text-white group-hover:text-[#E2B743] transition">
                  Cây Mộc Nhân 38 Phố Gia Ngư
                </h4>
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  Cây mộc nhân do Sư Tổ Nguyễn Tế Công làm tại nhà Cố Võ sư Trần Thúc Tiển những năm 1954-1958 để dạy các môn đồ tại Hà Nội.
                </p>
              </div>
            </div>

            {/* Card 2: Ảnh GS.TS Nguyễn Mạnh Nhâm & Các Môn Sinh 1995 */}
            <div
              onClick={() => setZoomedImage("/assets/images/diagrams/moc_nhan_master_nham.png")}
              className="glass-panel p-4 rounded-2xl border border-[#3D291F] hover:border-[#E2B743] transition cursor-pointer group flex flex-col"
            >
              <div className="relative w-full h-[260px] bg-white rounded-xl overflow-hidden p-2 border border-slate-300">
                <Image
                  src="/assets/images/diagrams/moc_nhan_master_nham.png"
                  alt="GS.TS Nguyễn Mạnh Nhâm và các học trò bên mộc nhân"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-3 space-y-1">
                <span className="text-[10px] font-mono text-[#E2B743] uppercase tracking-wider block">
                  Trang 95 Sách Gốc (1995)
                </span>
                <h4 className="text-sm font-bold text-white group-hover:text-[#E2B743] transition">
                  Thảo Luận Chiêu Thức Mộc Nhân
                </h4>
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  Sư phụ Nguyễn Mạnh Nhâm cùng các học trò phân tích yếu lĩnh niêm thủ, quấn, cuộn, luồn, lượn, nuốt, nhả của rắn trên cọc gỗ.
                </p>
              </div>
            </div>

            {/* Card 3: Ảnh HLV Nguyễn Quốc Minh Thị Phạm 2012 */}
            <div
              onClick={() => setZoomedImage("/assets/images/diagrams/moc_nhan_hlv_minh.png")}
              className="glass-panel p-4 rounded-2xl border border-[#3D291F] hover:border-[#E2B743] transition cursor-pointer group flex flex-col"
            >
              <div className="relative w-full h-[260px] bg-white rounded-xl overflow-hidden p-2 border border-slate-300">
                <Image
                  src="/assets/images/diagrams/moc_nhan_hlv_minh.png"
                  alt="HLV Nguyễn Quốc Minh thị phạm bài mộc nhân"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-3 space-y-1">
                <span className="text-[10px] font-mono text-[#E2B743] uppercase tracking-wider block">
                  Trang 95-115 Sách Gốc (2012)
                </span>
                <h4 className="text-sm font-bold text-white group-hover:text-[#E2B743] transition">
                  108 Thế Mộc Nhân Tại Chỗ
                </h4>
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  HLV Nguyễn Quốc Minh thị phạm trọn vẹn bộ 108 thế Mộc Nhân Thao Pháp bên trái phối hợp đòn đánh của môn phái.
                </p>
              </div>
            </div>
          </div>

          {/* Chiêu Thức Mộc Nhân Thao Pháp Liên Quan */}
          <div className="glass-panel p-6 rounded-2xl border border-[#3D291F] space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                <Swords className="w-4 h-4 text-[#E2B743]" />
                Chiêu Thức Mộc Nhân Thao Pháp ({dummyTechniques.length} thế)
              </h4>
              <span className="text-xs text-slate-400 font-mono">Bấm vào chiêu để xem trên Sàn Tập Võ Đường Số</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {dummyTechniques.slice(0, 9).map((tech) => (
                <div
                  key={tech.id}
                  onClick={() => onSelectTechnique(tech)}
                  className="p-3 rounded-xl bg-[#20150F] hover:bg-[#2A1C14] border border-[#3D291F] hover:border-[#E2B743]/50 cursor-pointer transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {tech.steps?.[0]?.imgUrl ? (
                      <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-white shrink-0 border border-slate-700">
                        <Image
                          src={tech.steps[0].imgUrl}
                          alt={tech.name}
                          fill
                          sizes="44px"
                          className="object-contain p-0.5"
                        />
                      </div>
                    ) : null}
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono text-[#E2B743] font-bold">
                          {tech.code}
                        </span>
                        <h5 className="text-xs font-bold text-white truncate group-hover:text-[#E2B743] transition">
                          {tech.name.split(":")[1]?.trim() || tech.name}
                        </h5>
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                        {tech.summary}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-[#E2B743] transition shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal Phóng To Ảnh Chi Tiết */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setZoomedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col items-center border-2 border-[#E2B743]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-xl border-2 border-white transition"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full h-[65vh] sm:h-[75vh]">
              <Image
                src={zoomedImage}
                alt="Ảnh tư liệu phóng to mộc nhân"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-3 text-center text-xs text-slate-700 font-mono">
              Bản vẽ tư liệu sách gốc: GS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2012)
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
