"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Wind,
  ShieldCheck,
  BookOpen,
  Sparkles,
  Flame,
  CheckCircle2,
  AlertTriangle,
  HeartPulse,
  Activity,
  UserCheck,
} from "lucide-react";
import {
  MEDITATION_POSTURES,
  FOUR_GOLDEN_RULES,
  FOUR_TABOOS_AND_THREE_NEEDS,
  MEDICAL_AND_MARTIAL_BENEFITS,
  DISCHARGE_STEPS,
} from "@/data/meditationQiGong";
import { MeditationBreathingGuide } from "./MeditationBreathingGuide";

export type MeditationTab = "breathing" | "benefits" | "theory" | "postures";

interface MeditationQiGongHubProps {
  initialTab?: MeditationTab;
}

export const MeditationQiGongHub: React.FC<MeditationQiGongHubProps> = ({
  initialTab = "breathing",
}) => {
  const [activeTab, setActiveTab] = useState<MeditationTab>(initialTab);

  const tabs: { id: MeditationTab; label: string; shortLabel: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: "breathing", label: "1. Phòng Luyện Thở 4 Thì", shortLabel: "Luyện Thở 4 Thì", icon: Wind },
    { id: "benefits", label: "2. Ý Nghĩa & Lợi Ích", shortLabel: "Ý Nghĩa & Lợi Ích", icon: ShieldCheck },
    { id: "theory", label: "3. Lý Thuyết & Khẩu Quyết", shortLabel: "Lý Thuyết & Khẩu Quyết", icon: BookOpen },
    { id: "postures", label: "4. Thân Pháp & Tư Thế", shortLabel: "Thân Pháp & Tư Thế", icon: UserCheck },
  ];

  return (
    <div className="space-y-8 animate-fadeIn max-w-7xl mx-auto">
      
      {/* HEADER BANNER TRANG TRỌNG */}
      <div className="glass-panel p-6 sm:p-10 rounded-3xl border border-[#F5D06C]/35 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#F5D06C]/10 to-transparent pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          <div className="space-y-4 flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5D06C]/15 border border-[#F5D06C]/35 text-[#F5D06C] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chương IV: Nội Công — Giáo Trình Phật Gia Vịnh Xuân Quyền</span>
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-4xl font-serif font-black gold-gradient leading-tight tracking-wide">
                Thiền &amp; Khí Công Dưỡng Sinh
              </h2>
              <p className="text-xs sm:text-sm text-amber-100/90 max-w-2xl leading-relaxed">
                Hệ thống tọa thiền tĩnh công, điều tức thổ nạp và phương pháp Thở 4 Thì đan điền được đúc kết từ công trình nghiên cứu của <span className="text-[#F5D06C] font-semibold">PGS.TS Y Khoa Nguyễn Mạnh Nhâm &amp; ThS.DS Nguyễn Duy Thức</span>, kết hợp tinh hoa y học hiện đại và tâm pháp Phật Gia.
              </p>
            </div>

            {/* Khẩu quyết vàng */}
            <div className="p-3 sm:p-4 rounded-2xl bg-black/40 border border-[#F5D06C]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-amber-200/90 font-serif italic text-left">
              <span>
                &quot;Đả quyền bất luyện công, đáo lão nhất trường không — Thần định Khí liễm, Ý thủ Đan Điền.&quot;
              </span>
              <span className="text-[11px] font-mono text-[#F5D06C] not-italic shrink-0">
                Khí là vua của Lực
              </span>
            </div>
          </div>

          {/* Khung Ảnh Thị Phạm Tọa Thiền Tĩnh Công */}
          <div className="shrink-0 flex flex-col items-center space-y-2">
            <div className="relative w-44 h-58 sm:w-52 sm:h-68 md:w-56 md:h-74 rounded-3xl overflow-hidden border-2 border-[#F5D06C] shadow-2xl bg-[#0F0805] group">
              <Image
                src="/assets/images/meditation/vo_su_le_dac_kien_thien.jpg"
                alt="Võ sư Lê Đắc Kiên"
                fill
                sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 224px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
            <span className="text-[11px] font-serif text-amber-200/80 italic text-center">
              Võ sư Lê Đắc Kiên • Võ đường Huỳnh Thúc Kháng
            </span>
          </div>
        </div>

        {/* BỘ TAB NAVIGATION ĐIỀU HƯỚNG 4 CHUYÊN ĐỀ */}
        <div className="relative z-10 pt-6 mt-6 border-t border-[#F5D06C]/20 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 whitespace-nowrap transition cursor-pointer ${
                  isActive
                    ? "bg-[#F5D06C] text-[#2A0E0A] font-bold shadow-lg shadow-[#F5D06C]/20"
                    : "bg-[#20150F]/70 text-slate-300 hover:text-white hover:bg-[#3D291F] border border-white/10"
                }`}
                aria-label={tab.label}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#2A0E0A]" : "text-[#F5D06C]"}`} />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.shortLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* NỘI DUNG TỪNG TAB */}

      {/* TAB 1: PHÒNG LUYỆN THỞ TRỰC QUAN 4 THÌ */}
      {activeTab === "breathing" && (
        <MeditationBreathingGuide onOpenTheoryTab={() => setActiveTab("theory")} />
      )}

      {/* TAB 2: Ý NGHĨA & LỢI ÍCH Y HỌC & VÕ HỌC */}
      {activeTab === "benefits" && (
        <div className="space-y-8 animate-fadeIn">
          {/* 2 Cột Đối Sánh: Y Học Hiện Đại vs Võ Học Truyền Thống */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {MEDICAL_AND_MARTIAL_BENEFITS.map((domain, dIdx) => (
              <div
                key={dIdx}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#F5D06C]/30 shadow-xl space-y-5"
              >
                <div className="flex items-center gap-2.5 border-b border-[#F5D06C]/20 pb-4">
                  <span className="p-2 rounded-xl bg-[#F5D06C]/15 border border-[#F5D06C]/30 text-[#F5D06C]">
                    {dIdx === 0 ? <HeartPulse className="w-5 h-5" /> : <Flame className="w-5 h-5" />}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-serif text-white">
                    {domain.domain}
                  </h3>
                </div>

                <div className="space-y-4">
                  {domain.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-4 rounded-2xl bg-black/30 border border-white/10 space-y-1.5 hover:border-[#F5D06C]/40 transition"
                    >
                      <h4 className="text-sm font-bold text-[#F5D06C] flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{pt.title}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
                        {pt.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Giai Thoại & Minh Chứng Lâm Sàng Thực Chứng */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/30 bg-emerald-950/20 shadow-xl space-y-4">
            <div className="flex items-center gap-2.5 text-emerald-400">
              <Activity className="w-5 h-5" />
              <h3 className="text-base sm:text-lg font-bold font-serif text-white">
                Giai Thoại &amp; Minh Chứng Thực Nghiệm Trong Lịch Sử Môn Phái
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <div className="p-4 rounded-2xl bg-black/40 border border-emerald-500/20 space-y-2">
                <span className="font-bold text-emerald-300 block">
                  1. Chữa lành bệnh lao phổi thời kỳ 3:
                </span>
                <p>
                  Cố Võ sư Trần Thúc Tiển từng bị lao phổi rất nặng, khái huyết và có nước màng phổi. Nhờ kiên trì luyện tập nội công và thở đan điền dưới sự chỉ dạy của Sư Tổ Nguyễn Tế Công, cụ không những khỏi hẳn bệnh mà còn tôi luyện hai lá phổi chịu được những quả đấm mạnh mẽ nhất.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-emerald-500/20 space-y-2">
                <span className="font-bold text-emerald-300 block">
                  2. Khả năng chịu lực đặc biệt trước võ sĩ quyền Anh:
                </span>
                <p>
                  Năm 1955-1956, khi cụ Tiển gần 50 tuổi (nặng chỉ hơn 40kg), cụ đứng một chân cho võ sĩ quyền Anh hạng lông Phạm Xuân Nhàn (23 tuổi, 57kg) lấy đà lao vào đẩy mà thân thể vẫn giữ thăng bằng vững vàng, dùng nội khí hóa giải hoàn toàn lực đấm mỏ ác.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: LÝ THUYẾT & KHẨU QUYẾT CỐT TỦY */}
      {activeTab === "theory" && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* 4 YẾU LĨNH VÀNG CỐT TỦY */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#F5D06C]/30 shadow-xl space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#F5D06C]">
                Tứ Đại Cương Lĩnh
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                4 Yếu Lĩnh Vàng Cốt Tủy Khi Luyện Khí Công
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FOUR_GOLDEN_RULES.map((rule) => (
                <div
                  key={rule.no}
                  className="p-5 rounded-2xl bg-[#20150F]/70 border border-[#F5D06C]/25 space-y-2 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <span className="w-7 h-7 rounded-lg bg-[#F5D06C]/20 border border-[#F5D06C]/40 flex items-center justify-center text-xs font-mono font-bold text-[#F5D06C]">
                      {rule.no}
                    </span>
                    <span className="text-xs font-serif text-amber-200/50">
                      {rule.hanzi}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {rule.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {rule.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 4 ĐIỀU ĐẠI KỴ & 3 ĐIỀU CẦN THIẾT */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* 4 Điều Đại Kỵ */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-rose-500/30 bg-rose-950/20 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-rose-400 border-b border-rose-500/20 pb-3">
                <AlertTriangle className="w-5 h-5" />
                <h3 className="text-lg font-bold font-serif text-white">
                  Bốn Điều Đại Kỵ Khi Luyện Nội Công
                </h3>
              </div>
              <div className="space-y-3">
                {FOUR_TABOOS_AND_THREE_NEEDS.taboos.map((t, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-rose-500/20 space-y-1">
                    <span className="text-xs font-bold text-rose-300 block font-serif">
                      {idx + 1}. {t.name}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3 Điều Cần Thiết */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/30 bg-emerald-950/20 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-emerald-400 border-b border-emerald-500/20 pb-3">
                <CheckCircle2 className="w-5 h-5" />
                <h3 className="text-lg font-bold font-serif text-white">
                  Ba Điều Cần Thiết Để Đắc Công
                </h3>
              </div>
              <div className="space-y-3">
                {FOUR_TABOOS_AND_THREE_NEEDS.needs.map((n, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-emerald-500/20 space-y-1">
                    <span className="text-xs font-bold text-emerald-300 block font-serif">
                      {idx + 1}. {n.name}
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {n.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Ý THỦ ĐAN ĐIỀN & CƠ CHẾ NÃO BỘ */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#F5D06C]/30 shadow-xl space-y-4">
            <h3 className="text-lg sm:text-xl font-bold font-serif text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#F5D06C]" />
              Quy Luật Ưu Thế Tại Não Bộ &amp; Nhất Niệm Trừ Vạn Niệm
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Theo PGS.TS Nguyễn Mạnh Nhâm, khó khăn lớn nhất của người ngồi thiền một mình trong đêm thanh vắng là <strong className="text-amber-200">Tạp niệm (ý mã tâm viên)</strong> và <strong className="text-amber-200">Sự nản chí</strong>. Thiền học Phật Gia áp dụng quy luật &quot;Ưu thế&quot; của hệ thần kinh: khi ta chuyên tâm tuyệt đối vào một ý nghĩ duy nhất tại Hạ Đan Điền, vùng hưng phấn này sẽ ức chế toàn bộ các vùng vỏ não khác, làm các suy nghĩ lan man tự động tan biến.
            </p>
            <div className="p-4 rounded-2xl bg-black/30 border border-white/10 text-xs text-amber-200/90 font-serif italic">
              &quot;Nước chảy đá mòn. Đừng trông chờ kết quả hiển nhiên trong vài ngày. Hãy coi việc ngồi thiền điều tức như việc đánh răng, rửa mặt mỗi ngày. Sau nhiều năm bền bỉ, công phu ắt tự thành tựu.&quot;
            </div>
          </div>

        </div>
      )}

      {/* TAB 4: THÂN PHÁP & TƯ THẾ TỌA THIỀN */}
      {activeTab === "postures" && (
        <div className="space-y-8 animate-fadeIn">
          
          {/* KHUNG THỊ PHẠM THÂN PHÁP TỌA THIỀN CHUẨN MỰC */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border-2 border-[#F5D06C]/40 bg-gradient-to-br from-[#20130B] via-[#1A0E08] to-[#120804] shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
              {/* Ảnh Võ sư Lê Đắc Kiên tọa thiền */}
              <div className="shrink-0 flex flex-col items-center space-y-2.5">
                <div className="relative w-52 h-68 sm:w-60 sm:h-76 md:w-64 md:h-84 rounded-3xl overflow-hidden border-2 border-[#F5D06C] shadow-2xl bg-[#0F0805]">
                  <Image
                    src="/assets/images/meditation/vo_su_le_dac_kien_thien_nghieng.jpg"
                    alt="Võ sư Lê Đắc Kiên"
                    fill
                    sizes="(max-width: 640px) 208px, (max-width: 768px) 240px, 256px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
                <span className="text-xs text-amber-200/80 font-serif italic text-center">
                  Võ sư Lê Đắc Kiên • Võ đường Huỳnh Thúc Kháng
                </span>
              </div>

              {/* 5 Yếu lĩnh thân pháp giải phẫu */}
              <div className="space-y-4 flex-1">
                <div className="space-y-1 text-center lg:text-left">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#F5D06C]">
                    Yếu Lĩnh Thân Pháp
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-white gold-gradient">
                    5 Chuẩn Mực Giải Phẫu Võ Học Khi Tọa Thiền
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Năm yếu lĩnh thân pháp cốt tủy trong tĩnh công theo giáo trình của PGS.TS Nguyễn Mạnh Nhâm:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-1">
                    <span className="font-bold text-[#F5D06C] flex items-center gap-1.5 font-serif">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      1. Cột Sống Thẳng Dây Dọi
                    </span>
                    <p className="text-xs text-slate-300">
                      Thuận hàng đề đính, đầu treo hư linh, cột sống dựng thẳng đứng tự nhiên từ xương cụt lên bách hội, không ưỡn không gù.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-1">
                    <span className="font-bold text-[#F5D06C] flex items-center gap-1.5 font-serif">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      2. Xuôi Vai &amp; Hàm Hung
                    </span>
                    <p className="text-xs text-slate-300">
                      Hai khớp vai thả lỏng tối đa, ngực hơi ngậm nhẹ (hàm hung bạt bối) để cơ hoành hạ sâu, giúp khí dễ dàng chìm xuống Đan Điền.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-1">
                    <span className="font-bold text-[#F5D06C] flex items-center gap-1.5 font-serif">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      3. Nối Nhịp Nhâm - Đốc
                    </span>
                    <p className="text-xs text-slate-300">
                      Miệng ngậm tự nhiên, đầu lưỡi uốn nhẹ chạm nướu răng hàm trên, tạo cầu nối khép kín thông suốt giữa hai mạch Nhâm và Đốc.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-1">
                    <span className="font-bold text-[#F5D06C] flex items-center gap-1.5 font-serif">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      4. Mắt Nhìn Ba Điểm (Nội Quan)
                    </span>
                    <p className="text-xs text-slate-300">
                      Mắt khép hờ lim dim: <em>Mắt nhìn đầu mũi — Mũi nhìn miệng — Miệng nhìn tâm</em>. Tuyệt đối không để ý nghĩ tán loạn theo ngoại giới.
                    </p>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-1 sm:col-span-2">
                    <span className="font-bold text-[#F5D06C] flex items-center gap-1.5 font-serif">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      5. Bắt Ấn Định Tâm Trước Hạ Đan Điền
                    </span>
                    <p className="text-xs text-slate-300">
                      Hai bàn tay xếp chồng mềm mại, hai ngón tay cái chạm nhẹ vào nhau đặt sát vùng bụng dưới (cách dưới rốn khoảng 3cm), tập trung mọi tâm thức tụ khí tại đây.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LƯỚI 4 TƯ THẾ TỌA THIỀN */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MEDITATION_POSTURES.map((p) => (
              <div
                key={p.id}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#F5D06C]/30 shadow-xl space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#F5D06C]/20 pb-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold font-serif text-white">
                        {p.name}
                      </h3>
                      <span className="text-xs text-[#F5D06C] font-mono">{p.alias}</span>
                    </div>
                    {p.hanzi && (
                      <span className="text-sm font-serif text-amber-200/50">
                        {p.hanzi}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {p.description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-200 block">
                      Yếu lĩnh thực hiện:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {p.instruction.map((ins, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2">
                          <span className="text-[#F5D06C] font-bold">•</span>
                          <span>{ins}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 text-xs text-emerald-400 font-medium">
                  {p.suitability}
                </div>
              </div>
            ))}
          </div>

          {/* QUY TRÌNH XẢ THIỀN & THU CÔNG AN TOÀN */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-amber-500/30 bg-amber-950/20 shadow-xl space-y-5">
            <div className="flex items-center gap-2.5 text-amber-400">
              <ShieldCheck className="w-5 h-5" />
              <h3 className="text-lg font-bold font-serif text-white">
                Quy Trình 4 Bước Xả Thiền &amp; Thu Công Bắt Buộc
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300">
              Sau khi kết thúc phiên thiền, tuyệt đối không được đứng dậy hoạt động ngay đột ngột. Cần thực hiện đầy đủ 4 bước xả thiền để chân khí thu liễm về kho Đan Điền và các khớp xương được hồi phục:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {DISCHARGE_STEPS.map((step) => (
                <div key={step.step} className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1.5">
                  <span className="w-6 h-6 rounded-full bg-[#F5D06C]/20 border border-[#F5D06C]/40 text-[#F5D06C] text-xs font-mono font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                  <h4 className="text-sm font-bold text-white font-serif">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
