"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Swords,
  Hand,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Award,
  Layers,
  Quote,
} from "lucide-react";
import { NavTab } from "@/components/Header";
import { getRandomMartialQuote, MartialWisdomQuote } from "@/data/martialPhilosophy";

interface WelcomePortalProps {
  onNavigateTab: (tab: NavTab, formId?: string, subTab?: string) => void;
  openSearch?: () => void;
  openStanceGuide: () => void;
}

interface LearningStep {
  step: number;
  name: string;
  desc: string;
  tab: NavTab;
  formId?: string;
  subTab?: string;
}

export const WelcomePortal: React.FC<WelcomePortalProps> = ({
  onNavigateTab,
  openStanceGuide,
}) => {
  const [dailyQuote, setDailyQuote] = useState<MartialWisdomQuote>(() => getRandomMartialQuote());

  // Tự động ngẫu nhiên đổi câu châm ngôn võ đạo sau mỗi 12 giây
  useEffect(() => {
    const timer = setInterval(() => {
      setDailyQuote(getRandomMartialQuote());
    }, 12000);
    return () => clearInterval(timer);
  }, []);
  const portalGateways = [
    {
      id: "library" as NavTab,
      title: "1. Lý thuyết & Lịch sử",
      subtitle: "Thư viện chuyên khảo & Tư liệu gốc",
      desc: "Lịch sử truyền thừa, lời tựa, triết lý võ đạo, phương pháp luyện khí đan điền và các chuyên khảo giáo trình.",
      icon: BookOpen,
      badge: "Lý thuyết",
      color: "from-amber-900/30 to-stone-950/20",
      borderColor: "border-amber-700/50 hover:border-amber-400",
      tagColor: "bg-amber-800/30 text-amber-200",
    },
    {
      id: "fundamentals" as NavTab,
      title: "2. Cơ bản",
      subtitle: "Nền tảng quyền thuật & Tấn pháp",
      desc: "Nhị Tự Kiềm Dương Tấn, Tam Thủ cốt lõi (Than, Bàng, Phục), Trục Tý Ngọ và bài luyện căn bản.",
      icon: Hand,
      badge: "Nền tảng",
      color: "from-emerald-900/30 to-emerald-950/20",
      borderColor: "border-[#10B981]/50 hover:border-[#10B981]",
      tagColor: "bg-[#10B981]/30 text-[#10B981]",
    },
    {
      id: "forms" as NavTab,
      formId: "bai-07",
      title: "3. Quyền pháp & Binh khí",
      subtitle: "Phân thế chi tiết",
      desc: "Tiểu Niệm Đầu, Tầm Kiều, Tiêu Chỉ, 108 Thế, Mộc Nhân, Ngũ Hình và Binh Khí cổ truyền.",
      icon: Swords,
      badge: "Phân thế",
      color: "from-[#F5D06C]/30 to-[#461A14]/20",
      borderColor: "border-[#F5D06C]/50 hover:border-[#F5D06C]",
      tagColor: "bg-[#F5D06C]/30 text-[#F5D06C]",
    }
  ];

  const learningSteps: LearningStep[] = [
    {
      step: 1,
      name: "Cơ Bản & Bái Tổ",
      desc: "Tấn Kiềm Dương, Tam Thủ (Than, Bàng, Phục), bài tập Xoay tay, Bộ pháp & 9 bước Bái Tổ.",
      tab: "fundamentals" as NavTab,
      subTab: "hands",
    },
    {
      step: 2,
      name: "Tam Đại Quyền Pháp",
      desc: "Tiểu Niệm Đầu (định tâm), Tầm Kiều (tìm cầu bắc nhịp) & Tiêu Chỉ (ngón tay phóng kình).",
      tab: "forms" as NavTab,
      formId: "bai-07",
    },
    {
      step: 3,
      name: "Hệ Thống 108 Thế",
      desc: "108 thế liên hoàn tại chỗ & tiến lùi, đơn luyện định khuôn và đối luyện song đấu 2 người.",
      tab: "forms" as NavTab,
      formId: "bai-12",
    },
    {
      step: 4,
      name: "Mộc Nhân",
      desc: "Luyện thính kình, bộ pháp Tý Ngọ Tuyến và 108 thế mộc nhân thao pháp chân truyền.",
      tab: "dummy" as NavTab,
    },
    {
      step: 5,
      name: "Ngũ Hình & Binh Khí",
      desc: "Ngũ hình quyền (Long, Xà, Hổ, Báo, Hạc) và kho vũ khí (Bát Trảm Đao, Lục Điểm Côn, Kiếm).",
      tab: "forms" as NavTab,
      formId: "bai-31",
    },
  ];

  return (
    <div className="space-y-10 sm:space-y-14 animate-fadeIn">
      {/* 1. GRAND MARTIAL HERO BANNER */}
      <section className="relative rounded-3xl glass-panel p-6 sm:p-10 lg:p-12 border border-[#F5D06C]/35 overflow-hidden shadow-2xl">
        {/* Background Watermarks */}
        <div className="absolute -top-12 -right-12 select-none pointer-events-none opacity-5 text-[220px] font-serif font-black text-[#F5D06C] leading-none">
          佛
        </div>
        <div className="absolute -bottom-16 -left-10 select-none pointer-events-none opacity-5 text-[180px] font-serif font-black text-[#C27D38] leading-none">
          詠春
        </div>

        <div className="relative z-10 max-w-4xl space-y-5">
          {/* Top Heritage Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#F5D06C]/15 border border-[#F5D06C]/40 text-[#F5D06C] text-xs font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#F5D06C] animate-pulse" />
            Tàng Thư Kinh Điển • Phật Gia Vịnh Xuân Quyền
          </div>

          {/* Main Title */}
          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-serif tracking-tight leading-tight gold-gradient">
              Di Sản Võ Học Phật Gia Vịnh Xuân
            </h1>
          </div>

          {/* Tagline */}
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
            Được số hóa và gìn giữ bởi Võ Đường Huỳnh Thúc Kháng — Phục vụ môn sinh và người yêu võ tra cứu học tập.
          </p>

          {/* CTA Action Buttons: 3 Nút Điều Hướng Trọng Tâm */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5 sm:gap-4">
            <button
              onClick={() => onNavigateTab("lineage")}
              className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-gradient-to-r from-[#F5D06C] to-[#C27D38] text-[#2A0E0A] font-bold text-xs sm:text-sm hover:brightness-110 transition shadow-lg shadow-[#F5D06C]/20 flex items-center gap-1.5 sm:gap-2 group cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#2A0E0A]" />
              <span>Lịch sử và triết lý</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <button
              onClick={() => onNavigateTab("fundamentals")}
              className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-[#20150F] border border-[#F5D06C]/40 text-amber-200 hover:text-white hover:bg-[#2D1D16] hover:border-[#F5D06C] font-semibold text-xs sm:text-sm transition flex items-center gap-1.5 sm:gap-2 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-[#F5D06C]" />
              <span>Kiến thức chung</span>
            </button>

            <button
              onClick={() => onNavigateTab("forms", "bai-07")}
              className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-[#140C08] border border-[#3D291F] text-slate-300 hover:text-[#F5D06C] hover:border-[#F5D06C]/50 font-medium text-xs sm:text-sm transition flex items-center gap-1.5 sm:gap-2 cursor-pointer"
            >
              <Swords className="w-4 h-4 text-[#F5D06C]" />
              <span>Các bài quyền</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. LỜI GIỚI THIỆU & NGUỒN GỐC GIÁO TRÌNH DI SẢN (NÓI 1 LẦN DUY NHẤT) */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#F5D06C]/35 relative overflow-hidden shadow-xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-[#2A0E0A] border-2 border-[#F5D06C]/50 flex items-center justify-center shrink-0 text-[#F5D06C] shadow-lg shadow-[#F5D06C]/10">
            <BookOpen className="w-7 h-7" />
          </div>
          <div className="space-y-2 flex-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#F5D06C] uppercase tracking-wider">
              <span>Lời Giới Thiệu • Nguồn Gốc Tư Liệu Võ Học</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold font-serif text-white leading-snug">
              Giáo Trình Phật Gia Vịnh Xuân Quyền
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Toàn bộ hệ thống kỹ thuật quyền pháp, binh khí, đồ hình và khẩu quyết được số hóa từ giáo trình của môn phái: <strong>&ldquo;Phật Gia Vịnh Xuân Quyền&rdquo;</strong> do <strong>GS.TS Y Khoa Nguyễn Mạnh Nhâm</strong> (Chủ tịch Hội Vịnh Xuân Hà Nội) &amp; <strong>ThS.DS Nguyễn Duy Thức</strong> biên soạn (Nhà xuất bản Văn Hóa Thông Tin).
            </p>
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2 text-xs text-amber-200/90 italic bg-[#1E120B] p-2.5 rounded-xl border border-[#F5D06C]/25">
              <span className="text-[#F5D06C] font-bold not-italic shrink-0">Quy ước hiển thị:</span>
              <span>Hệ thống lược bỏ chú thích số trang trong từng chiêu thức để người tập tập trung vào yếu lĩnh thân pháp và tâm pháp võ học.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CHÂM NGÔN VÕ ĐẠO TỰ ĐỘNG (MARTIAL WISDOM - AUTO RANDOM) */}
      <section className="glass-panel p-6 sm:p-8 lg:p-10 rounded-3xl border border-[#F5D06C]/35 bg-gradient-to-br from-[#2D160E] to-[#140C08] relative overflow-hidden shadow-2xl">
        <div key={dailyQuote.id} className="flex flex-col sm:flex-row items-center sm:items-start lg:items-center gap-6 sm:gap-8 animate-fadeIn">
          {/* Khung Ảnh Người Nói - To Rõ Ràng & Cân Đối */}
          <div className="shrink-0 flex flex-col items-center space-y-2.5">
            <div className="relative w-36 h-48 sm:w-44 sm:h-58 lg:w-48 lg:h-64 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#F5D06C] shadow-2xl bg-[#0F0805]">
              {dailyQuote.authorImage ? (
                <Image
                  src={dailyQuote.authorImage}
                  alt={dailyQuote.author}
                  fill
                  sizes="(max-width: 640px) 144px, (max-width: 1024px) 176px, 192px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                  priority
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#2A160E] to-[#140C08] p-4 text-center">
                  <span className="text-5xl sm:text-6xl font-serif text-[#F5D06C] gold-gradient drop-shadow mb-1">
                    佛
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-200/70">
                    Phật Gia Vịnh Xuân
                  </span>
                </div>
              )}
            </div>
            {dailyQuote.imageCaption && (
              <span className="text-[11px] sm:text-xs font-mono text-[#F5D06C] text-center max-w-[200px] leading-tight opacity-90">
                {dailyQuote.imageCaption}
              </span>
            )}
          </div>

          {/* Khối Nội Dung Quote Cân Đối */}
          <div className="space-y-3.5 flex-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5D06C]/15 border border-[#F5D06C]/30 text-[#F5D06C] text-xs font-mono font-bold uppercase tracking-wider">
              <Quote className="w-3.5 h-3.5" />
              Châm Ngôn Võ Đạo
            </div>

            {dailyQuote.hanNom && (
              <p className="text-xs sm:text-sm font-serif text-[#F5D06C] tracking-widest font-mono">
                {dailyQuote.hanNom}
              </p>
            )}

            <blockquote className="text-lg sm:text-2xl lg:text-3xl font-serif font-bold text-white leading-relaxed lg:leading-normal gold-gradient">
              &ldquo;{dailyQuote.quote}&rdquo;
            </blockquote>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1 text-xs sm:text-sm">
              <span className="text-[#F5D06C] font-bold font-serif text-sm sm:text-base">
                {dailyQuote.author}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-amber-200/80 font-mono text-xs">
                {dailyQuote.roleOrSource}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CỔNG KHÁM PHÁ 3 KHÔNG GIAN (3 SPACES) */}
      <section className="space-y-4">
        <div className="border-b border-[#3D291F] pb-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E2B743]">
            <Layers className="w-3.5 h-3.5" /> Kiến trúc hệ thống
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
            Nội dung hệ thống
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-5">
          {portalGateways.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                role="button"
                tabIndex={0}
                onClick={() => onNavigateTab(item.id, item.formId)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onNavigateTab(item.id, item.formId);
                  }
                }}
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
          {/* Ảnh Võ sư Lê Đắc Kiên - To rõ & Trang trọng */}
          <div className="relative shrink-0 flex flex-col items-center space-y-2.5">
            <div className="w-48 h-60 sm:w-60 sm:h-76 md:w-72 md:h-92 rounded-3xl overflow-hidden border-2 border-[#E2B743] shadow-2xl shadow-amber-950/80 relative bg-[#140C08] group">
              <Image
                src="/assets/images/instructors/vo_su_le_dac_kien.jpg"
                alt="Võ sư Lê Đắc Kiên - Phụ trách Võ đường Huỳnh Thúc Kháng"
                fill
                sizes="(max-width: 640px) 192px, (max-width: 768px) 240px, 288px"
                className="object-cover object-top group-hover:scale-105 transition-all duration-500"
                priority
              />
            </div>

            <div className="px-3.5 py-1.5 rounded-xl bg-[#20150F] text-amber-200 border border-[#E2B743]/50 text-xs font-semibold shadow-md font-mono flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-[#E2B743]" />
              Võ Đường Huỳnh Thúc Kháng
            </div>
          </div>

          {/* Quote & Wisdom Content */}
          <div className="space-y-3 text-center lg:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/30 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <Award className="w-3.5 h-3.5 text-[#E2B743]" />
              Võ Sư Lê Đắc Kiên • Phụ trách Võ Đường Huỳnh Thúc Kháng
            </div>

            <blockquote className="font-serif italic text-base sm:text-lg lg:text-xl text-amber-100 font-semibold leading-relaxed">
              &ldquo;Đến thì mở lòng đón nhận, đi thì nhẹ nhàng đưa tiễn; buông lỏng toàn thân để mượn lực đả lực. Cốt lõi của Vịnh Xuân không phải là thắng người bằng sức mạnh cơ bắp, mà là chiến thắng chính sự nóng vội và bản ngã của bản thân.&rdquo;
            </blockquote>
            <p className="text-[11px] text-amber-200/70 font-mono italic">
              — Khẩu quyết quyền lý truyền thừa • Phật Gia Vịnh Xuân
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-amber-200/70">
              <span>Sinh năm 1968</span>
              <span>•</span>
              <span>Học trò GS.TS Nguyễn Mạnh Nhâm</span>
              <span>•</span>
              <button
                onClick={() => onNavigateTab("lineage")}
                className="text-[#E2B743] hover:underline font-bold inline-flex items-center gap-1 cursor-pointer"
              >
                Khám phá 6 chủ đề triết lý võ đạo <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LỘ TRÌNH SƯ PHẠM 5 CHẶNG (LEARNING ROADMAP) */}
      <section className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#3D291F] space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#3D291F] pb-3">
          <div>
            <span className="text-[11px] font-bold text-[#E2B743] uppercase tracking-wider">
              Khuyến Nghị Huấn Luyện Chuẩn Sách Gốc
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Lộ Trình Tầm Đạo 5 Chặng Chuẩn Sư Phạm Theo Sách Gốc
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {learningSteps.map((s) => (
            <div
              key={s.step}
              role="button"
              tabIndex={0}
              onClick={() => onNavigateTab(s.tab, s.formId, s.subTab)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onNavigateTab(s.tab, s.formId, s.subTab);
                }
              }}
              className="p-4 rounded-2xl bg-[#140C08] border border-[#3D291F] hover:border-[#E2B743]/50 hover:bg-[#20150F] transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#2A1C14] text-[#E2B743] font-mono">
                    Chặng 0{s.step}
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
