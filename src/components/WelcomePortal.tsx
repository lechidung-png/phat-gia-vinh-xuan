"use client";

import React from "react";
import Image from "next/image";
import {
  Swords,
  Hand,
  Sparkles,
  Compass,
  BookOpen,
  GitBranch,
  Search,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Award,
  Layers,
} from "lucide-react";
import { NavTab } from "@/components/Header";

interface WelcomePortalProps {
  onNavigateTab: (tab: NavTab, formId?: string) => void;
  openSearch: () => void;
  openStanceGuide: () => void;
}

export const WelcomePortal: React.FC<WelcomePortalProps> = ({
  onNavigateTab,
  openSearch,
  openStanceGuide,
}) => {
  const portalGateways = [
    {
      id: "forms" as NavTab,
      formId: "01-tieu-niem-dau",
      title: "Bách Khoa 7 Bài Quyền",
      subtitle: "Hệ thống quyền pháp cốt lõi",
      desc: "Nghi thức Bái Tổ (9 bước) & toàn bộ 7 bài quyền: Tiểu Niệm Đầu, Tầm Kiều, Tiêu Chỉ, 108 thế tại chỗ & tiến lùi (đơn & đối luyện).",
      icon: Swords,
      badge: "7 Bài Quyền • 435+ Ảnh HD",
      color: "from-amber-500/20 to-amber-900/10",
      borderColor: "border-[#E2B743]/40 hover:border-[#E2B743]",
      tagColor: "bg-[#E2B743]/20 text-[#E2B743]",
    },
    {
      id: "dummy" as NavTab,
      title: "Cọc Gỗ Mộc Nhân",
      subtitle: "Bản vẽ 1954 & Trang 94 Sách In",
      desc: "Bản vẽ kỹ thuật mặt bằng nhìn từ trên cao, 2 thế bộ pháp Kiềm Dương vs Biên Thân 45°, hồ sơ 5 tầng cọc Sư Tổ Tế Công tại 38 Gia Ngư.",
      icon: Sparkles,
      badge: "Bản Vẽ Chuẩn CAD & 1954",
      color: "from-amber-700/20 to-amber-950/10",
      borderColor: "border-amber-600/40 hover:border-amber-400",
      tagColor: "bg-amber-600/20 text-amber-300",
    },
    {
      id: "fundamentals" as NavTab,
      title: "Cơ Bản Công & Tấn Pháp",
      subtitle: "Nền tảng khởi nguyên võ học",
      desc: "2 trang scan gốc (28-29), Tam Thủ cốt lõi (Than, Bàng, Phục), Nhị Tự Kiềm Dương Tấn chân hẹp chuẩn Trang 31 sách gốc.",
      icon: Hand,
      badge: "Trang 28–35 • Khẩu Quyết",
      color: "from-emerald-900/20 to-emerald-950/10",
      borderColor: "border-[#10B981]/40 hover:border-[#10B981]",
      tagColor: "bg-[#10B981]/20 text-[#10B981]",
    },
    {
      id: "lineage" as NavTab,
      title: "Truyền Thừa & Triết Lý",
      subtitle: "Bốn thế hệ & Võ Sư Lê Đắc Kiên",
      desc: "Phả hệ truyền thừa từ Sư Tổ Nguyễn Tế Công đến Võ Sư Lê Đắc Kiên (Võ đường Huỳnh Thúc Kháng) cùng 5 chuyên đề triết lý võ đạo sâu xa.",
      icon: GitBranch,
      badge: "Huỳnh Thúc Kháng Dojo",
      color: "from-amber-600/20 to-orange-950/10",
      borderColor: "border-[#C27D38]/40 hover:border-[#C27D38]",
      tagColor: "bg-[#C27D38]/20 text-amber-200",
    },
    {
      id: "centerline" as NavTab,
      title: "Trục Tý Ngọ Tuyến",
      subtitle: "Đạo trung lộ & Tam giác sinh lực",
      desc: "Nguyên lý trung tâm bất biến của Vịnh Xuân, khảo sát 7 đại huyệt đạo trên trục Tý Ngọ và mô phỏng phản xạ công thủ 4 hướng.",
      icon: Compass,
      badge: "7 Huyệt Đạo • Tương Tác",
      color: "from-blue-900/20 to-indigo-950/10",
      borderColor: "border-blue-500/40 hover:border-blue-400",
      tagColor: "bg-blue-500/20 text-blue-300",
    },
    {
      id: "library" as NavTab,
      title: "Tàng Kinh Các (225 Trang)",
      subtitle: "Toàn văn chuyên khảo học thuật",
      desc: "Lưu trữ toàn văn 7 chuyên đề lý thuyết kinh điển của GS.TS Y Khoa Nguyễn Mạnh Nhâm và ma trận phân loại 109 thế võ.",
      icon: BookOpen,
      badge: "Sách Gốc 2012 Toàn Văn",
      color: "from-amber-900/20 to-stone-950/10",
      borderColor: "border-amber-700/40 hover:border-amber-500",
      tagColor: "bg-amber-800/20 text-amber-300",
    },
  ];

  const learningSteps = [
    {
      step: 1,
      name: "Cơ Bản Công & Tấn Pháp",
      desc: "Nhị Tự Kiềm Dương Tấn (chân hẹp), Tam Thủ cốt lõi (Than, Bàng, Phục thủ).",
      tab: "fundamentals" as NavTab,
    },
    {
      step: 2,
      name: "Bái Tổ & Tiểu Niệm Đầu",
      desc: "9 bước tôn sư trọng đạo, mở thông kinh mạch, định hình cấu trúc thân pháp.",
      tab: "forms" as NavTab,
      formId: "01-tieu-niem-dau",
    },
    {
      step: 3,
      name: "Đại Pháp 108 Thế",
      desc: "108 thế tại chỗ & tiến lùi, kết hợp đối luyện song đấu 2 người thực chiến.",
      tab: "forms" as NavTab,
      formId: "04-108-the-tai-cho",
    },
    {
      step: 4,
      name: "Cọc Gỗ Mộc Nhân",
      desc: "Đỉnh cao thính kình, bộ pháp Tý Ngọ Tuyến và 108 thế mộc nhân thao pháp.",
      tab: "dummy" as NavTab,
    },
  ];

  return (
    <div className="space-y-10 sm:space-y-14 animate-fadeIn">
      {/* 1. GRAND MARTIAL HERO BANNER */}
      <section className="relative rounded-3xl glass-panel p-6 sm:p-10 lg:p-12 border border-[#E2B743]/30 overflow-hidden shadow-2xl">
        {/* Background Watermarks */}
        <div className="absolute -top-12 -right-12 select-none pointer-events-none opacity-5 text-[220px] font-serif font-black text-[#E2B743] leading-none">
          佛
        </div>
        <div className="absolute -bottom-16 -left-10 select-none pointer-events-none opacity-5 text-[180px] font-serif font-black text-[#C27D38] leading-none">
          詠春
        </div>

        <div className="relative z-10 max-w-4xl space-y-5">
          {/* Top Heritage Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#E2B743]/15 border border-[#E2B743]/40 text-[#E2B743] text-xs font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#E2B743] animate-pulse" />
            Di Sản Võ Học Cổ Truyền • Phật Gia Vịnh Xuân Quyền (1954 - 2012)
          </div>

          {/* Main Title */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight leading-tight gold-gradient">
              Võ Đường Số Phật Gia Vịnh Xuân
            </h1>
            <p className="text-base sm:text-xl text-amber-200/90 font-serif font-medium tracking-wide">
              Không Gian Số Hóa & Khảo Cứu Toàn Thư 225 Trang Di Sản Võ Học Kinh Điển
            </p>
          </div>

          {/* Tagline */}
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
            Bảo tồn & phát huy di sản võ học Phật Gia Vịnh Xuân — Võ Đường Huỳnh Thúc Kháng.
          </p>

          {/* CTA Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={() => onNavigateTab("forms", "01-tieu-niem-dau")}
              className="px-5 sm:px-6 py-3 rounded-2xl bg-gradient-to-r from-[#E2B743] to-[#C27D38] text-black font-bold text-xs sm:text-sm hover:brightness-110 transition shadow-lg shadow-[#E2B743]/20 flex items-center gap-2 group cursor-pointer"
            >
              <Swords className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
              <span>Khám Phá 7 Bài Quyền</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigateTab("dummy")}
              className="px-5 sm:px-6 py-3 rounded-2xl bg-[#20150F] border border-[#E2B743]/40 text-amber-200 hover:text-white hover:bg-[#2D1D16] hover:border-[#E2B743] font-semibold text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#E2B743]" />
              <span>Cọc Gỗ Mộc Nhân (1954)</span>
            </button>

            <button
              onClick={openSearch}
              className="px-4 py-3 rounded-2xl bg-[#140C08] border border-[#3D291F] text-slate-300 hover:text-[#E2B743] hover:border-[#E2B743]/50 font-medium text-xs sm:text-sm transition flex items-center gap-2 cursor-pointer"
            >
              <Search className="w-4 h-4 text-[#E2B743]" />
              <span>Tra Cứu Chiêu Thức</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] bg-[#2A1C14] rounded border border-[#3D291F] text-amber-200/80 font-mono">
                Ctrl+K
              </kbd>
            </button>
          </div>
        </div>

        {/* 4 Heritage Stats Pillars */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-8 border-t border-[#3D291F]">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#140C08]/80 border border-[#3D291F]">
            <div className="text-xl sm:text-3xl font-serif font-black text-[#E2B743]">225</div>
            <div className="text-[11px] sm:text-xs font-bold text-white mt-0.5">Trang Sách Gốc 2012</div>
            <div className="text-[10px] text-slate-400 mt-1">Phục chế toàn văn 7 chuyên đề</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#140C08]/80 border border-[#3D291F]">
            <div className="text-xl sm:text-3xl font-serif font-black text-[#E2B743]">7 + 1</div>
            <div className="text-[11px] sm:text-xs font-bold text-white mt-0.5">Bài Quyền Chính Tông</div>
            <div className="text-[10px] text-slate-400 mt-1">9 bước Bái Tổ & hàng trăm chiêu thức</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#140C08]/80 border border-[#3D291F]">
            <div className="text-xl sm:text-3xl font-serif font-black text-[#E2B743]">435+</div>
            <div className="text-[11px] sm:text-xs font-bold text-white mt-0.5">Ảnh Phục Chế HD</div>
            <div className="text-[10px] text-slate-400 mt-1">Chuẩn giải phẫu, zero-amputation</div>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#140C08]/80 border border-[#3D291F]">
            <div className="text-xl sm:text-3xl font-serif font-black text-[#10B981]">4</div>
            <div className="text-[11px] sm:text-xs font-bold text-white mt-0.5">Thế Hệ Di Sản</div>
            <div className="text-[10px] text-slate-400 mt-1">Từ Sư Tổ đến VS Lê Đắc Kiên</div>
          </div>
        </div>
      </section>

      {/* 2. CỔNG KHÁM PHÁ 6 ĐẠI PHÂN HỆ (6 GATEWAY CARDS) */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#3D291F] pb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E2B743]">
              <Layers className="w-3.5 h-3.5" /> Bản Đồ Võ Quán Số
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
              Cổng Khám Phá 6 Đại Phân Hệ Võ Học
            </h2>
          </div>
          <p className="text-xs text-slate-400 max-w-md">
            Mọi bài quyền, tư liệu và sơ đồ được bố trí khoa học, tra cứu tức thì chỉ với một thao tác nhấp chuột.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {portalGateways.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                onClick={() => onNavigateTab(item.id, item.formId)}
                className={`group p-5 sm:p-6 rounded-3xl bg-gradient-to-br ${item.color} bg-[#1C120D] border ${item.borderColor} transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-[#E2B743]/10 cursor-pointer flex flex-col justify-between`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-[#140C08] border border-[#3D291F] group-hover:border-[#E2B743]/60 flex items-center justify-center text-[#E2B743] shadow-md transition-all group-hover:scale-110">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full font-mono ${item.tagColor}`}>
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-[#E2B743] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-amber-200/70 font-medium">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300/90 leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#3D291F]/60 flex items-center justify-between text-xs font-semibold text-[#E2B743]">
                  <span>Vào phân hệ</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. FEATURED WISDOM: VÕ SƯ LÊ ĐẮC KIÊN & TRIẾT LÝ VÕ ĐẠO */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#C27D38]/40 relative overflow-hidden shadow-xl">
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
          {/* Portrait of Master Le Dac Kien - To rõ & Trang trọng */}
          <div className="relative shrink-0 flex flex-col items-center">
            <div className="w-48 h-60 sm:w-60 sm:h-76 md:w-72 md:h-92 rounded-3xl overflow-hidden border-2 border-[#E2B743] shadow-2xl shadow-amber-950/80 relative bg-[#140C08] group">
              <Image
                src="/assets/images/instructors/vo_su_le_dac_kien.jpg"
                alt="Võ sư Lê Đắc Kiên - Chủ nhiệm Võ đường Huỳnh Thúc Kháng"
                fill
                sizes="(max-width: 640px) 192px, (max-width: 768px) 240px, 288px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 inset-x-2 text-center">
                <span className="text-xs font-mono font-bold text-[#E2B743] bg-black/85 px-3 py-1 rounded-full border border-[#E2B743]/50 shadow-lg">
                  Võ Sư Lê Đắc Kiên
                </span>
              </div>
            </div>
            <div className="mt-2.5 px-3 py-1 rounded-full bg-[#E2B743] text-black text-xs font-bold shadow-md font-mono flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              20 Năm Võ Nghiệp
            </div>
          </div>

          {/* Quote & Wisdom Content */}
          <div className="space-y-3 text-center lg:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/30 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-[#E2B743]" />
              Võ Sư Lê Đắc Kiên • Chủ Nhiệm Võ Đường Huỳnh Thúc Kháng
            </div>

            <blockquote className="font-serif italic text-base sm:text-lg lg:text-xl text-amber-100 font-semibold leading-relaxed">
              &quot;Đến thì mở lòng đón nhận, đi thì nhẹ nhàng đưa tiễn; buông lỏng toàn thân để mượn lực đả lực. Đỉnh cao của Vịnh Xuân không phải là thắng người bằng sức mạnh cơ bắp, mà là chiến thắng chính sự nóng vội và bản ngã của bản thân.&quot;
            </blockquote>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-amber-200/70">
              <span>Môn Sinh Đời Thứ Tư</span>
              <span>•</span>
              <span>Kế Thừa Tinh Hoa Phật Gia Vịnh Xuân</span>
              <span>•</span>
              <button
                onClick={() => onNavigateTab("lineage")}
                className="text-[#E2B743] hover:underline font-bold inline-flex items-center gap-1 cursor-pointer"
              >
                Khám phá 5 chủ đề triết lý võ đạo <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LỘ TRÌNH SƯ PHẠM 4 BƯỚC (LEARNING ROADMAP) */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#3D291F] space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#3D291F] pb-3">
          <div>
            <span className="text-[11px] font-bold text-[#E2B743] uppercase tracking-wider">
              Khuyến Nghị Huấn Luyện
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Lộ Trình Tầm Đạo 4 Giai Đoạn Chuẩn Sư Phạm
            </h3>
          </div>
          <button
            onClick={openStanceGuide}
            className="self-start sm:self-auto text-xs px-3 py-1.5 rounded-xl bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] font-semibold hover:bg-[#10B981]/30 transition flex items-center gap-1.5 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Quy Chuẩn Tấn Kiềm Dương</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {learningSteps.map((s) => (
            <div
              key={s.step}
              onClick={() => onNavigateTab(s.tab, s.formId)}
              className="p-4 rounded-2xl bg-[#140C08] border border-[#3D291F] hover:border-[#E2B743]/50 hover:bg-[#20150F] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#2A1C14] text-[#E2B743] font-mono">
                    Giai Đoạn 0{s.step}
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#E2B743] group-hover:translate-x-1 transition-all" />
                </div>
                <h4 className="font-serif font-bold text-sm text-white group-hover:text-[#E2B743] transition-colors">
                  {s.name}
                </h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-[#3D291F]/50 text-[11px] text-[#E2B743] font-medium flex items-center gap-1">
                Bắt đầu học <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
