"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Compass,
  Award,
  Sparkles,
  BookOpen,
  Quote,
  Globe,
  Search,
  Check,
  Copy,
  RefreshCw,
  Shield,
  Layers,
  Heart,
  Activity,
  Flame,
  Feather,
  CheckCircle2,
  Info
} from "lucide-react";
import {
  STRATEGIC_APHORISMS,
  MASTER_COUNSELS_42,
  GLOBAL_WING_CHUN_MASTERS,
  MARTIAL_WISDOM_QUOTES,
  MartialWisdomQuote
} from "@/data/martialPhilosophy";

type PhilosophySubTab = "aphorisms" | "counsels" | "global" | "quotes";

export const PhilosophyHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<PhilosophySubTab>("aphorisms");
  
  // State cho Tab 1: 7 Đại Khẩu Quyết
  const [selectedAphorismId, setSelectedAphorismId] = useState<string>("ty-ngo-tuyen");
  
  // State cho Tab 2: 42 Lời Khuyên Vàng
  const [counselFilter, setCounselFilter] = useState<"all" | "ethics" | "training" | "combat" | "health">("all");
  const [counselSearch, setCounselSearch] = useState<string>("");

  // State cho Tab 4: Trạm Châm Ngôn
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState<number>(0);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [copiedGlobalKey, setCopiedGlobalKey] = useState<string | null>(null);
  const [quoteAuthorFilter, setQuoteAuthorFilter] = useState<string>("all");
  const [quoteSearch, setQuoteSearch] = useState<string>("");

  const totalGlobalQuotes = useMemo(() => {
    return GLOBAL_WING_CHUN_MASTERS.reduce(
      (sum, m) => sum + (m.famousQuotes?.length || 1),
      0
    );
  }, []);

  const quoteAuthors = useMemo(() => {
    const counts = new Map<string, number>();
    for (const q of MARTIAL_WISDOM_QUOTES) {
      counts.set(q.author, (counts.get(q.author) || 0) + 1);
    }
    return Array.from(counts.entries()).map(([author, count]) => ({
      author,
      count,
    }));
  }, []);

  const filteredQuotesWithIndex = useMemo(() => {
    return MARTIAL_WISDOM_QUOTES.map((q, originalIndex) => ({
      q,
      originalIndex,
    })).filter(({ q }) => {
      const matchAuthor =
        quoteAuthorFilter === "all" || q.author === quoteAuthorFilter;
      if (!matchAuthor) return false;
      if (!quoteSearch.trim()) return true;
      const kw = quoteSearch.toLowerCase();
      return (
        q.quote.toLowerCase().includes(kw) ||
        q.author.toLowerCase().includes(kw) ||
        q.context.toLowerCase().includes(kw) ||
        (q.hanNom && q.hanNom.toLowerCase().includes(kw))
      );
    });
  }, [quoteAuthorFilter, quoteSearch]);

  const selectedAphorism = useMemo(() => {
    return STRATEGIC_APHORISMS.find((a) => a.id === selectedAphorismId) || STRATEGIC_APHORISMS[0];
  }, [selectedAphorismId]);

  const filteredCounsels = useMemo(() => {
    return MASTER_COUNSELS_42.filter((c) => {
      const matchCat = counselFilter === "all" || c.category === counselFilter;
      if (!matchCat) return false;
      if (!counselSearch.trim()) return true;
      const q = counselSearch.toLowerCase();
      return (
        c.text.toLowerCase().includes(q) ||
        c.elaboration.toLowerCase().includes(q) ||
        c.keywords.some((k) => k.toLowerCase().includes(q))
      );
    });
  }, [counselFilter, counselSearch]);

  const handleNextRandomQuote = () => {
    const pool =
      filteredQuotesWithIndex.length > 0
        ? filteredQuotesWithIndex.map((item) => item.originalIndex)
        : MARTIAL_WISDOM_QUOTES.map((_, idx) => idx);
    let nextIdx = pool[Math.floor(Math.random() * pool.length)];
    if (nextIdx === currentQuoteIndex && pool.length > 1) {
      const curPos = pool.indexOf(currentQuoteIndex);
      nextIdx = pool[(curPos + 1) % pool.length];
    }
    setCurrentQuoteIndex(nextIdx);
  };

  const handleCopyQuote = (quote: MartialWisdomQuote) => {
    const isNamedMaster =
      quote.author &&
      !quote.author.includes("Khẩu quyết") &&
      !quote.author.includes("Khẩu Quyết") &&
      !quote.author.includes("Yếu Lĩnh") &&
      !quote.author.includes("Lễ Nghi") &&
      !quote.author.includes("Ngạn ngữ") &&
      !quote.author.includes("Phật Gia Vịnh Xuân") &&
      !quote.author.includes("Võ Đường") &&
      !quote.author.includes("truyền dạy");
    const textToCopy = isNamedMaster ? `“${quote.quote}” — ${quote.author}` : `“${quote.quote}”`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const handleCopyGlobalQuote = (key: string, quoteText: string, masterName: string) => {
    const textToCopy = `“${quoteText}” — ${masterName}`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy);
      setCopiedGlobalKey(key);
      setTimeout(() => setCopiedGlobalKey(null), 2000);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner Của Đài Khảo Cứu Triết Lý */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#F5D06C]/35 relative overflow-hidden shadow-2xl bg-gradient-to-br from-[#2D160E] to-[#140C08]">
        {/* Chữ Hán Chìm Nghệ Thuật */}
        <div className="absolute -top-8 -right-8 select-none pointer-events-none opacity-5 text-[180px] font-serif font-black text-[#F5D06C] leading-none">
          道
        </div>
        <div className="relative z-10 space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F5D06C]/15 border border-[#F5D06C]/35 text-[#F5D06C] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Hệ Thống Lý Thuyết &amp; Yếu Quyết Võ Đạo Chân Truyền
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-serif gold-gradient">
            Triết Lý &amp; Yếu Quyết Võ Học
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-serif">
            Hệ thống hóa toàn bộ tư tưởng cốt tủy từ giáo trình gốc của <strong>PGS.TS Y Khoa Nguyễn Mạnh Nhâm &amp; ThS.DS Nguyễn Duy Thức</strong>, kết hợp đối chiếu tinh hoa các dòng phái Vịnh Xuân thế giới (Diệp Vấn, Lương Đỉnh, Hoàng Thuần Lương, Lý Tiểu Long).
          </p>
        </div>

        {/* 4 Nút Chuyển Phân Hệ Triết Lý (Sub-Tabs) */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mt-6 pt-6 border-t border-[#F5D06C]/20">
          <button
            onClick={() => setActiveTab("aphorisms")}
            className={`p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-3 ${
              activeTab === "aphorisms"
                ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C] font-bold shadow-lg shadow-[#F5D06C]/20"
                : "bg-[#180E0A]/90 hover:bg-[#2A160E] text-amber-100 border-[#F5D06C]/25"
            }`}
          >
            <div className={`p-2 rounded-xl shrink-0 ${activeTab === "aphorisms" ? "bg-[#2A0E0A]/15 text-[#2A0E0A]" : "bg-[#F5D06C]/15 text-[#F5D06C]"}`}>
              <Compass className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold truncate">
                <span className="hidden sm:inline">{STRATEGIC_APHORISMS.length} Đại Khẩu Quyết Sách Gốc</span>
                <span className="sm:hidden">{STRATEGIC_APHORISMS.length} Khẩu Quyết</span>
              </div>
              <div className={`text-xs truncate ${activeTab === "aphorisms" ? "text-[#2A0E0A]/80" : "text-amber-200/60"}`}>
                Trọn bộ Khẩu quyết Chương I–V
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("counsels")}
            className={`p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-3 ${
              activeTab === "counsels"
                ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C] font-bold shadow-lg shadow-[#F5D06C]/20"
                : "bg-[#180E0A]/90 hover:bg-[#2A160E] text-amber-100 border-[#F5D06C]/25"
            }`}
          >
            <div className={`p-2 rounded-xl shrink-0 ${activeTab === "counsels" ? "bg-[#2A0E0A]/15 text-[#2A0E0A]" : "bg-[#F5D06C]/15 text-[#F5D06C]"}`}>
              <Award className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold truncate">
                <span className="hidden sm:inline">42 Lời Khuyên Của Sư Phụ</span>
                <span className="sm:hidden">42 Lời Khuyên</span>
              </div>
              <div className={`text-xs truncate ${activeTab === "counsels" ? "text-[#2A0E0A]/80" : "text-amber-200/60"}`}>
                Sư phụ truyền đời • Yếu lĩnh tu tập
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("global")}
            className={`p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-3 ${
              activeTab === "global"
                ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C] font-bold shadow-lg shadow-[#F5D06C]/20"
                : "bg-[#180E0A]/90 hover:bg-[#2A160E] text-amber-100 border-[#F5D06C]/25"
            }`}
          >
            <div className={`p-2 rounded-xl shrink-0 ${activeTab === "global" ? "bg-[#2A0E0A]/15 text-[#2A0E0A]" : "bg-[#F5D06C]/15 text-[#F5D06C]"}`}>
              <Globe className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold truncate">
                <span className="hidden sm:inline">Tinh Hoa Thế Giới</span>
                <span className="sm:hidden">Vịnh Xuân TG</span>
              </div>
              <div className={`text-xs truncate ${activeTab === "global" ? "text-[#2A0E0A]/80" : "text-amber-200/60"}`}>
                {GLOBAL_WING_CHUN_MASTERS.length} Danh Sư • {totalGlobalQuotes} Câu Quote
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("quotes")}
            className={`p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-3 ${
              activeTab === "quotes"
                ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C] font-bold shadow-lg shadow-[#F5D06C]/20"
                : "bg-[#180E0A]/90 hover:bg-[#2A160E] text-amber-100 border-[#F5D06C]/25"
            }`}
          >
            <div className={`p-2 rounded-xl shrink-0 ${activeTab === "quotes" ? "bg-[#2A0E0A]/15 text-[#2A0E0A]" : "bg-[#F5D06C]/15 text-[#F5D06C]"}`}>
              <Quote className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold truncate">
                <span className="hidden sm:inline">Châm Ngôn Võ Đạo</span>
                <span className="sm:hidden">Châm Ngôn</span>
              </div>
              <div className={`text-xs truncate ${activeTab === "quotes" ? "text-[#2A0E0A]/80" : "text-amber-200/60"}`}>
                Kho {MARTIAL_WISDOM_QUOTES.length} Lời Răn &amp; Châm Ngôn
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* ==================================================================== */}
      {/* NỘI DUNG PHÂN HỆ 1: 7 ĐẠI KHẨU QUYẾT CHIẾN LƯỢC                      */}
      {/* ==================================================================== */}
      {activeTab === "aphorisms" && (
        <div className="space-y-6 animate-fadeIn">
          {/* Lưới 12 Đại Khẩu Quyết Sách Gốc — Hiển thị đầy đủ 100% thẻ không bị khuất */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {STRATEGIC_APHORISMS.map((aph) => {
              const isSelected = aph.id === selectedAphorismId;
              return (
                <button
                  key={aph.id}
                  onClick={() => setSelectedAphorismId(aph.id)}
                  className={`px-3.5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2.5 text-left cursor-pointer border ${
                    isSelected
                      ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C] shadow-md shadow-[#F5D06C]/20"
                      : "bg-[#1C120B] text-amber-200/80 border-[#F5D06C]/20 hover:border-[#F5D06C]/60 hover:text-white"
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full shrink-0 flex items-center justify-center font-mono text-xs ${isSelected ? "bg-[#2A0E0A] text-[#F5D06C]" : "bg-[#F5D06C]/15 text-[#F5D06C]"}`}>
                    {aph.order}
                  </span>
                  <span className="leading-snug line-clamp-2">{aph.title.split("(")[0].trim()}</span>
                </button>
              );
            })}
          </div>

          {/* Chi Tiết Khẩu Quyết Được Chọn */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-[#F5D06C]/35 shadow-xl space-y-6 bg-[#1A0E0A]/90">
            {/* Header Khẩu Quyết */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#F5D06C]/20 pb-5">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F5D06C]/20 text-[#F5D06C] border border-[#F5D06C]/40 text-xs font-mono font-bold">
                    Khẩu Quyết #{selectedAphorism.order}
                  </span>
                  <span className="text-xs font-serif text-amber-200/70 font-mono">
                    {selectedAphorism.hanzi}
                  </span>
                  <span className="text-xs text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40 font-mono">
                    Tâm Pháp Chân Truyền
                  </span>
                </div>
                <h3 className="text-xl sm:text-3xl font-extrabold font-serif text-white">
                  {selectedAphorism.title}
                </h3>
                <p className="text-xs sm:text-sm text-amber-200/90 font-serif italic">
                  &ldquo;{selectedAphorism.shortSummary}&rdquo;
                </p>
              </div>

              {/* Tags từ khóa cốt lõi */}
              <div className="flex flex-wrap gap-1.5">
                {selectedAphorism.keyConcepts.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-[#2D160E] border border-[#F5D06C]/30 text-[#F5D06C] text-xs font-mono"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Nội Dung Phân Tích 3 Cột: Triết Lý, Y Võ Cơ Sinh Học, Ứng Dụng Thực Chiến */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Cột 1: Luận Giải Triết Lý */}
              <div className="p-5 rounded-2xl bg-[#140C08] border border-[#F5D06C]/20 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[#F5D06C]">
                    <BookOpen className="w-4 h-4" />
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider">
                      1. Luận Giải Triết Lý Võ Học
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-serif">
                    {selectedAphorism.philosophy}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#F5D06C]/10 text-xs text-amber-200/60 font-mono">
                  Phật Gia Vịnh Xuân • Tông Chỉ
                </div>
              </div>

              {/* Cột 2: Phân Tích Giải Phẫu Y Học & Cơ Sinh Học */}
              <div className="p-5 rounded-2xl bg-[#140C08] border border-[#F5D06C]/20 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Activity className="w-4 h-4" />
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider">
                      2. Giải Phẫu &amp; Cơ Sinh Học
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-serif">
                    {selectedAphorism.biomechanics}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#F5D06C]/10 text-xs text-emerald-400/80 font-mono">
                  Cơ sở: PGS.TS Y Khoa Nguyễn Mạnh Nhâm
                </div>
              </div>

              {/* Cột 3: Chiến Thuật & Thực Chiến */}
              <div className="p-5 rounded-2xl bg-[#140C08] border border-[#F5D06C]/20 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sky-400">
                    <Shield className="w-4 h-4" />
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider">
                      3. Chiến Thuật &amp; Ứng Dụng
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-serif">
                    {selectedAphorism.tacticalApplication}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#F5D06C]/10 text-xs text-sky-400/80 font-mono">
                  Cận chiến sinh tồn
                </div>
              </div>
            </div>

            {/* Trích Dẫn Nguyên Bản Giáo Trình */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#2A140B] border-l-4 border-l-[#F5D06C] border border-[#F5D06C]/30 text-xs sm:text-sm text-amber-100 font-serif italic leading-relaxed">
              <span className="not-italic font-mono font-bold text-[#F5D06C] uppercase text-xs block mb-1">
                Trích Dẫn Nguyên Văn Giáo Trình:
              </span>
              &ldquo;{selectedAphorism.originalQuote}&rdquo;
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* NỘI DUNG PHÂN HỆ 2: TRỌN BỘ 42 LỜI KHUYÊN VÀNG SƯ PHỤ                */}
      {/* ==================================================================== */}
      {activeTab === "counsels" && (
        <div className="space-y-6 animate-fadeIn">
          {/* Thanh Bộ Lọc & Tìm Kiếm */}
          <div className="glass-panel p-4 rounded-2xl border border-[#F5D06C]/30 bg-[#1A0E0A]/90 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Bộ lọc theo nhóm chủ đề */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setCounselFilter("all")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition shrink-0 cursor-pointer ${
                  counselFilter === "all"
                    ? "bg-[#F5D06C] text-[#2A0E0A] shadow"
                    : "bg-[#20150F] text-amber-200/80 hover:text-white"
                }`}
              >
                Tất Cả (42)
              </button>
              <button
                onClick={() => setCounselFilter("ethics")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition shrink-0 cursor-pointer flex items-center gap-1 ${
                  counselFilter === "ethics"
                    ? "bg-amber-400 text-[#2A0E0A] shadow"
                    : "bg-[#20150F] text-amber-300 hover:text-white"
                }`}
              >
                <Heart className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Đạo Đức &amp; Tư Tưởng</span>
                <span className="sm:hidden">Đạo Đức</span>
              </button>
              <button
                onClick={() => setCounselFilter("training")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition shrink-0 cursor-pointer flex items-center gap-1 ${
                  counselFilter === "training"
                    ? "bg-emerald-400 text-[#2A0E0A] shadow"
                    : "bg-[#20150F] text-emerald-300 hover:text-white"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Luyện Công &amp; Thân Pháp</span>
                <span className="sm:hidden">Thân Pháp</span>
              </button>
              <button
                onClick={() => setCounselFilter("combat")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition shrink-0 cursor-pointer flex items-center gap-1 ${
                  counselFilter === "combat"
                    ? "bg-rose-400 text-[#2A0E0A] shadow"
                    : "bg-[#20150F] text-rose-300 hover:text-white"
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Chiến Lược &amp; Thực Chiến</span>
                <span className="sm:hidden">Thực Chiến</span>
              </button>
              <button
                onClick={() => setCounselFilter("health")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition shrink-0 cursor-pointer flex items-center gap-1 ${
                  counselFilter === "health"
                    ? "bg-sky-400 text-[#2A0E0A] shadow"
                    : "bg-[#20150F] text-sky-300 hover:text-white"
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Y Võ &amp; Dưỡng Sinh</span>
                <span className="sm:hidden">Y Võ</span>
              </button>
            </div>

            {/* Ô tìm kiếm nhanh lời khuyên */}
            <div className="relative w-full md:w-64 shrink-0">
              <Search className="w-3.5 h-3.5 text-amber-200/60 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={counselSearch}
                onChange={(e) => setCounselSearch(e.target.value)}
                placeholder="Tìm lời khuyên: cùi chỏ, thở bụng..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#20150F] border border-[#F5D06C]/30 text-white rounded-xl focus:outline-none focus:border-[#F5D06C] placeholder-amber-200/40"
              />
            </div>
          </div>

          {/* Lưới Thẻ 42 Lời Khuyên */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCounsels.map((counsel) => {
              const badgeStyle =
                counsel.category === "ethics"
                  ? "bg-amber-950/80 text-amber-300 border-amber-800/40"
                  : counsel.category === "training"
                  ? "bg-emerald-950/80 text-emerald-300 border-emerald-800/40"
                  : counsel.category === "combat"
                  ? "bg-rose-950/80 text-rose-300 border-rose-800/40"
                  : "bg-sky-950/80 text-sky-300 border-sky-800/40";

              return (
                <div
                  key={counsel.number}
                  className="glass-panel p-5 rounded-2xl border border-[#F5D06C]/25 bg-[#160D09]/95 hover:border-[#F5D06C]/60 hover:bg-[#20120B] transition-all space-y-3 flex flex-col justify-between group"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-xl bg-gradient-to-r from-[#F5D06C] to-[#E2B743] text-[#2A0E0A] font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                          #{counsel.number}
                        </span>
                        <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded-md border ${badgeStyle}`}>
                          {counsel.categoryLabel}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-sm sm:text-base font-serif font-bold text-white leading-snug group-hover:text-amber-100 transition">
                      &ldquo;{counsel.text}&rdquo;
                    </h4>

                    <p className="text-xs text-slate-300 font-serif leading-relaxed">
                      {counsel.elaboration}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#F5D06C]/15 flex flex-wrap gap-1">
                    {counsel.keywords.map((kw, i) => (
                      <span key={i} className="text-xs text-amber-200/60 font-mono">
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredCounsels.length === 0 && (
            <div className="glass-panel p-8 rounded-3xl border border-[#F5D06C]/30 text-center space-y-2">
              <p className="text-amber-200/90 text-sm">
                Không tìm thấy lời khuyên nào phù hợp với từ khóa &ldquo;{counselSearch}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setCounselSearch("");
                  setCounselFilter("all");
                }}
                className="px-3 py-1.5 rounded-xl bg-[#F5D06C] text-[#2A0E0A] font-bold text-xs"
              >
                Xóa bộ lọc
              </button>
            </div>
          )}
        </div>
      )}

      {/* ==================================================================== */}
      {/* NỘI DUNG PHÂN HỆ 3: TINH HOA VỊNH XUÂN THẾ GIỚI                      */}
      {/* ==================================================================== */}
      {activeTab === "global" && (
        <div className="space-y-6 animate-fadeIn">
          <div className="glass-panel p-5 rounded-2xl border border-[#F5D06C]/25 bg-[#180E0A]/90 text-xs sm:text-sm text-slate-300 font-serif leading-relaxed flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="max-w-3xl">
              Vịnh Xuân Quyền là môn võ mang tính học thuật và thực nghiệm cao. Dù tỏa nhánh sang Hồng Kông, Châu Âu hay Việt Nam, các nguyên lý cơ học (trục trung tuyến, cảm ứng cẳng tay, mượn lực đả lực) đều quy về một mối. Dưới đây là bảng đối chiếu cùng <strong>{totalGlobalQuotes} câu danh ngôn &amp; khẩu quyết kinh điển</strong> (4 câu cho mỗi bậc danh sư) giữa các nhánh Vịnh Xuân thế giới và giáo trình <strong>Phật Gia Vịnh Xuân Việt Nam</strong>.
            </p>
            <div className="shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#2A140B] border border-[#F5D06C]/35 text-[#F5D06C] font-mono text-xs font-bold">
              <Quote className="w-4 h-4" />
              <span>{GLOBAL_WING_CHUN_MASTERS.length} Danh Sư • {totalGlobalQuotes} Câu Quote</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {GLOBAL_WING_CHUN_MASTERS.map((master) => {
              const masterQuotes =
                master.famousQuotes && master.famousQuotes.length > 0
                  ? master.famousQuotes
                  : [{ quote: master.famousQuote, context: master.coreDoctrine }];

              return (
                <div
                  key={master.id}
                  className="glass-panel p-6 sm:p-7 rounded-3xl border border-[#F5D06C]/30 bg-[#160D09]/95 hover:border-[#F5D06C]/60 transition-all space-y-5"
                >
                  {/* Header Tông Sư — Cân đối tỷ lệ Chân dung 3:4 và Khối danh vị */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-b border-[#F5D06C]/20 pb-5">
                    <div className="flex items-center gap-4 sm:gap-5">
                      {master.portraitUrl ? (
                        <div className="relative w-20 h-26 sm:w-24 sm:h-32 rounded-2xl overflow-hidden border-2 border-[#F5D06C]/50 bg-[#1e100a] shrink-0 shadow-xl ring-2 ring-[#F5D06C]/15 group">
                          <Image
                            src={master.portraitUrl}
                            alt={master.masterName}
                            fill
                            sizes="(max-width: 640px) 80px, 96px"
                            className="object-cover object-top hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ) : (
                        <div className="w-20 h-26 sm:w-24 sm:h-32 rounded-2xl border-2 border-[#F5D06C]/35 bg-[#25120a] flex flex-col items-center justify-center shrink-0 text-[#F5D06C] gap-1">
                          <BookOpen className="w-8 h-8 opacity-75" />
                          <span className="text-xs font-serif opacity-60">Tông Sư</span>
                        </div>
                      )}
                      <div className="space-y-1">
                        <div className="inline-flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-[#F5D06C]">
                          <span className="font-semibold">{master.branch}</span>
                          <span>•</span>
                          <span className="text-amber-200/80">{master.period}</span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
                          {master.masterName}
                        </h3>
                        {master.hanziName && (
                          <p className="text-xs sm:text-sm font-serif text-amber-200/75">
                            {master.hanziName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
                      <span className="px-3 py-1 rounded-full bg-amber-950/70 border border-amber-700/40 text-amber-200 text-xs font-mono font-semibold">
                        {masterQuotes.length} Câu Quote Kinh Điển
                      </span>
                      <span className="px-3.5 py-1.5 rounded-full bg-[#F5D06C]/15 border border-[#F5D06C]/35 text-[#F5D06C] text-xs font-mono font-bold">
                        {master.coreDoctrine}
                      </span>
                    </div>
                  </div>

                  {/* Tuyển Tập Danh Ngôn Kinh Điển Của Vị Sư Phụ (4 Câu/Vị) */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5D06C] flex items-center gap-1.5">
                        <Quote className="w-3.5 h-3.5" />
                        Tuyển Tập Danh Ngôn &amp; Khẩu Quyết ({masterQuotes.length} Câu):
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {masterQuotes.map((qItem, qIdx) => {
                        const copyKey = `${master.id}-q-${qIdx}`;
                        const isThisCopied = copiedGlobalKey === copyKey;
                        return (
                          <div
                            key={copyKey}
                            className="p-4 sm:p-5 rounded-2xl bg-[#24120B] border-l-4 border-l-[#F5D06C] border border-[#F5D06C]/20 flex flex-col justify-between gap-3 hover:border-[#F5D06C]/50 transition"
                          >
                            <div className="space-y-2">
                              <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <span className="px-2 py-0.5 rounded-md bg-[#F5D06C]/20 text-[#F5D06C] font-mono text-xs font-bold">
                                    Quote #{qIdx + 1}
                                  </span>
                                  {qItem.hanziOrOriginal && (
                                    <span className="text-xs font-mono text-amber-200/80">
                                      {qItem.hanziOrOriginal}
                                    </span>
                                  )}
                                </div>
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleCopyGlobalQuote(
                                      copyKey,
                                      qItem.quote,
                                      master.masterName
                                    )
                                  }
                                  title="Sao chép câu danh ngôn này"
                                  className="px-2.5 py-1 rounded-lg bg-[#160D09] hover:bg-[#2E1810] text-amber-200/80 hover:text-white border border-[#F5D06C]/25 text-xs font-mono flex items-center gap-1 cursor-pointer transition shrink-0"
                                >
                                  {isThisCopied ? (
                                    <>
                                      <Check className="w-3 h-3 text-emerald-400" />
                                      <span className="text-emerald-300">Đã chép</span>
                                    </>
                                  ) : (
                                    <>
                                      <Copy className="w-3 h-3" />
                                      <span>Chép</span>
                                    </>
                                  )}
                                </button>
                              </div>
                              <p className="text-sm sm:text-base text-amber-100 font-serif italic font-semibold leading-relaxed">
                                &ldquo;{qItem.quote}&rdquo;
                              </p>
                            </div>
                            <p className="text-xs sm:text-sm text-slate-300/95 font-serif leading-relaxed border-t border-[#F5D06C]/10 pt-2.5">
                              <span className="text-[#F5D06C] font-mono text-xs uppercase mr-1.5 font-semibold">
                                Ý nghĩa:
                              </span>
                              {qItem.context}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Bảng Đối Chiếu 2 Cột */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm font-serif">
                    <div className="p-4 rounded-2xl bg-[#140C08] border border-[#F5D06C]/15 space-y-2">
                      <div className="flex items-center gap-1.5 text-[#F5D06C] font-mono font-bold text-xs uppercase">
                        <Info className="w-3.5 h-3.5" />
                        Bối Cảnh Lịch Sử &amp; Cống Hiến:
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {master.historicalContext}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#140C08] border border-emerald-800/30 space-y-2">
                      <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-bold text-xs uppercase">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Đối Chiếu Phật Gia Vịnh Xuân:
                      </div>
                      <p className="text-emerald-100/90 leading-relaxed">
                        {master.pgvxCorrelation}
                      </p>
                    </div>
                  </div>

                  {/* Các Nguyên Lý Chia Sẻ Chung */}
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-amber-200/70">Nguyên lý chung:</span>
                    {master.sharedPrinciples.map((p, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-[#24130C] border border-[#F5D06C]/20 text-amber-200 text-xs font-serif"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* NỘI DUNG PHÂN HỆ 4: TRẠM CHÂM NGÔN VÕ ĐẠO (QUOTE GENERATOR)         */}
      {/* ==================================================================== */}
      {activeTab === "quotes" && (
        <div className="space-y-6 animate-fadeIn">
          {/* Card Thư Pháp Lụa Ngà Hiển Thị Quote Lớn — Bố Cục 2 Cột Cân Xứng Ảnh & Chữ */}
          {(() => {
            const currentQuote = MARTIAL_WISDOM_QUOTES[currentQuoteIndex] || MARTIAL_WISDOM_QUOTES[0];
            return (
              <div className="glass-panel p-6 sm:p-8 lg:p-10 rounded-3xl border-2 border-[#F5D06C]/40 bg-gradient-to-br from-[#2D160E] via-[#1E0F09] to-[#120A06] shadow-2xl relative overflow-hidden">
                {/* Chữ Hán Nghệ Thuật Chìm Làm Nền Cân Đối */}
                <div className="absolute -bottom-6 -right-4 select-none pointer-events-none opacity-[0.04] text-[160px] font-serif font-black text-[#F5D06C] leading-none">
                  禪
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
                  {/* CỘT TRÁI (4/12): KHUNG CHÂN DUNG DANH SƯ TỶ LỆ 3:4 CÂN XỨNG */}
                  <div className="md:col-span-4 flex flex-col items-center justify-center space-y-3.5 md:border-r md:border-[#F5D06C]/20 md:pr-6">
                    {currentQuote.authorImage ? (
                      <div className="relative w-44 h-56 sm:w-52 sm:h-68 md:w-full md:max-w-[230px] md:h-[290px] rounded-2xl overflow-hidden border-2 border-[#F5D06C]/80 ring-4 ring-[#F5D06C]/15 shadow-2xl bg-[#0F0805]">
                        <Image
                          src={currentQuote.authorImage}
                          alt={currentQuote.author}
                          fill
                          sizes="(max-width: 768px) 208px, 240px"
                          className="object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className="w-44 h-56 sm:w-52 sm:h-68 md:w-full md:max-w-[230px] md:h-[290px] rounded-2xl border-2 border-[#F5D06C]/40 bg-gradient-to-b from-[#26130B] to-[#120905] flex flex-col items-center justify-center p-6 text-center shadow-2xl space-y-3">
                        <div className="w-16 h-16 rounded-2xl bg-[#F5D06C]/15 border border-[#F5D06C]/40 flex items-center justify-center text-[#F5D06C] font-serif text-3xl font-bold">
                          詠春
                        </div>
                        <Quote className="w-8 h-8 text-[#F5D06C]/50 rotate-180" />
                        <span className="text-xs font-mono text-amber-200/70 uppercase tracking-widest">
                          Tâm Pháp Cổ Truyền
                        </span>
                      </div>
                    )}

                    {/* Bảng Danh Vị Tác Giả Tích Hợp Dưới Chân Dung (Không lặp lại 2 lần) */}
                    <div className="text-center space-y-1 max-w-[250px]">
                      <div className="text-base sm:text-lg font-serif font-bold text-[#F5D06C] leading-snug">
                        {currentQuote.imageCaption || currentQuote.author}
                      </div>
                      <div className="text-xs font-serif text-amber-200/75 leading-relaxed">
                        {currentQuote.roleOrSource}
                      </div>
                    </div>
                  </div>

                  {/* CỘT PHẢI (8/12): NỘI DUNG CHÂM NGÔN, HÁN NÔM & LUẬN GIẢI CÂN ĐỐI */}
                  <div className="md:col-span-8 flex flex-col justify-between space-y-5 text-center md:text-left">
                    {/* Hàng Badge Số Thứ Tự & Nguyên Bản Chữ Hán */}
                    <div className="flex flex-wrap items-center justify-center md:justify-between gap-2 border-b border-[#F5D06C]/15 pb-3">
                      <span className="px-3 py-1 rounded-full bg-[#F5D06C]/15 border border-[#F5D06C]/35 text-[#F5D06C] text-xs font-mono font-bold">
                        Châm Ngôn #{currentQuoteIndex + 1} / {MARTIAL_WISDOM_QUOTES.length}
                      </span>
                      {currentQuote.hanNom && (
                        <span className="text-sm sm:text-base font-serif text-[#F5D06C] tracking-wider font-mono bg-[#180C07] px-3 py-1 rounded-xl border border-[#F5D06C]/25">
                          {currentQuote.hanNom}
                        </span>
                      )}
                    </div>

                    {/* Câu Châm Ngôn Chính — Cỡ Chữ Cân Xứng Với Khung Ảnh */}
                    <blockquote className="text-xl sm:text-2xl lg:text-2xl font-serif font-bold text-white leading-relaxed gold-gradient py-1">
                      &ldquo;{currentQuote.quote}&rdquo;
                    </blockquote>

                    {/* Khối Luận Giải Võ Đạo — Đóng Khung Trang Trọng, Chữ Rõ Nét Dễ Đọc */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#160B07]/90 border-l-4 border-l-[#F5D06C] border border-[#F5D06C]/25 text-left space-y-1.5 shadow-inner">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#F5D06C] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Luận Giải Võ Đạo &amp; Ứng Dụng:
                      </div>
                      <p className="text-sm sm:text-base text-amber-100/95 font-serif leading-relaxed">
                        {currentQuote.context}
                      </p>
                    </div>

                    {/* Thanh Nút Hành Động */}
                    <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-3">
                      <button
                        onClick={handleNextRandomQuote}
                        className="px-5 py-2.5 rounded-2xl bg-[#F5D06C] hover:bg-[#E2B743] text-[#2A0E0A] font-bold text-xs sm:text-sm flex items-center gap-2 transition cursor-pointer shadow-lg shadow-[#F5D06C]/20"
                      >
                        <RefreshCw className="w-4 h-4" />
                        <span>Đổi Câu Khác</span>
                      </button>

                      <button
                        onClick={() => handleCopyQuote(currentQuote)}
                        className="px-4 py-2.5 rounded-2xl bg-[#20150F] hover:bg-[#2E1810] text-amber-200 border border-[#F5D06C]/35 text-xs sm:text-sm font-semibold flex items-center gap-2 transition cursor-pointer"
                      >
                        {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                        <span>{isCopied ? "Đã Sao Chép!" : "Sao Chép Quote"}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Danh Sách Toàn Bộ Các Câu Quote Dưới Dạng Lưới Thẻ Cân Đối Ảnh & Chữ */}
          <div className="space-y-4 pt-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <h3 className="text-lg sm:text-xl font-bold font-serif text-white flex items-center gap-2">
                <Feather className="w-4 h-4 text-[#F5D06C]" />
                Kho Châm Ngôn &amp; Yếu Quyết Truyền Đời ({MARTIAL_WISDOM_QUOTES.length} Câu)
              </h3>

              {/* Ô tìm kiếm châm ngôn */}
              <div className="relative w-full md:w-72 shrink-0">
                <Search className="w-3.5 h-3.5 text-amber-200/60 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={quoteSearch}
                  onChange={(e) => setQuoteSearch(e.target.value)}
                  placeholder="Tìm theo câu quote, danh sư, Hán Nôm..."
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#20150F] border border-[#F5D06C]/30 text-white rounded-xl focus:outline-none focus:border-[#F5D06C] placeholder-amber-200/40"
                />
              </div>
            </div>

            {/* Thanh Lọc Theo Tông Sư / Danh Sư */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setQuoteAuthorFilter("all")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition shrink-0 cursor-pointer border ${
                  quoteAuthorFilter === "all"
                    ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C] shadow"
                    : "bg-[#1C120B] text-amber-200/80 border-[#F5D06C]/20 hover:text-white"
                }`}
              >
                Tất Cả ({MARTIAL_WISDOM_QUOTES.length})
              </button>
              {quoteAuthors.map(({ author, count }) => (
                <button
                  key={author}
                  onClick={() => setQuoteAuthorFilter(author)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition shrink-0 cursor-pointer border ${
                    quoteAuthorFilter === author
                      ? "bg-[#F5D06C] text-[#2A0E0A] border-[#F5D06C] font-bold shadow"
                      : "bg-[#1C120B] text-amber-200/80 border-[#F5D06C]/20 hover:border-[#F5D06C]/50 hover:text-white"
                  }`}
                >
                  {author} ({count})
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredQuotesWithIndex.map(({ q, originalIndex }) => (
                <div
                  key={q.id}
                  onClick={() => setCurrentQuoteIndex(originalIndex)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex items-start gap-4 ${
                    originalIndex === currentQuoteIndex
                      ? "bg-[#2D160E] border-[#F5D06C] shadow-lg ring-1 ring-[#F5D06C]"
                      : "bg-[#160D09]/90 border-[#F5D06C]/25 hover:border-[#F5D06C]/55 hover:bg-[#1E110A]"
                  }`}
                >
                  {/* Khung Ảnh Chân Dung Bên Trái Thẻ Nhỏ (Tỷ lệ 3:4 cân đối với khối chữ) */}
                  {q.authorImage ? (
                    <div className="relative w-16 h-20 sm:w-20 sm:h-24 rounded-xl overflow-hidden border border-[#F5D06C]/50 bg-[#0F0805] shrink-0 shadow-md">
                      <Image
                        src={q.authorImage}
                        alt={q.author}
                        fill
                        sizes="80px"
                        className="object-cover object-top"
                      />
                    </div>
                  ) : (
                    <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-xl border border-[#F5D06C]/35 bg-[#24120B] flex flex-col items-center justify-center shrink-0 text-[#F5D06C]">
                      <Quote className="w-5 h-5 opacity-70 rotate-180" />
                      <span className="text-xs font-serif mt-1 opacity-75">Khẩu Quyết</span>
                    </div>
                  )}

                  {/* Khối Chữ Bên Phải Thẻ Nhỏ */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between space-y-2">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2 text-xs font-mono">
                        <span className="text-[#F5D06C] font-serif font-bold truncate">
                          {q.author}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#F5D06C]/15 text-[#F5D06C] font-bold text-xs shrink-0">
                          #{originalIndex + 1}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-serif text-white font-medium line-clamp-2 leading-relaxed">
                        &ldquo;{q.quote}&rdquo;
                      </p>
                    </div>
                    <div className="pt-1.5 border-t border-[#F5D06C]/10 flex items-center justify-between gap-2 text-xs">
                      <span className="text-amber-200/65 truncate">{q.roleOrSource}</span>
                      <span className="text-[#F5D06C]/70 text-xs font-mono shrink-0">Xem chi tiết →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredQuotesWithIndex.length === 0 && (
              <div className="glass-panel p-8 rounded-3xl border border-[#F5D06C]/30 text-center space-y-2">
                <p className="text-amber-200/90 text-sm">
                  Không tìm thấy châm ngôn nào phù hợp với bộ lọc hiện tại.
                </p>
                <button
                  onClick={() => {
                    setQuoteSearch("");
                    setQuoteAuthorFilter("all");
                  }}
                  className="px-3 py-1.5 rounded-xl bg-[#F5D06C] text-[#2A0E0A] font-bold text-xs cursor-pointer"
                >
                  Hiển thị toàn bộ {MARTIAL_WISDOM_QUOTES.length} câu
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
