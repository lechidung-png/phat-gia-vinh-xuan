"use client";

import React, { useState } from "react";
import {
  Search,
  Swords,
  GitBranch,
  ShieldCheck,
  Sparkles,
  Hand,
  ShieldAlert,
  Menu,
  X,
} from "lucide-react";

export type NavTab = "welcome" | "forms" | "fundamentals" | "scenarios" | "dummy" | "centerline" | "library" | "lineage";

interface HeaderProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  openSearch: () => void;
  openStanceGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  openSearch,
  openStanceGuide,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string; shortLabel: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: "lineage", label: "Truyền Thừa", shortLabel: "Truyền Thừa", icon: GitBranch },
    { id: "fundamentals", label: "Cơ Bản", shortLabel: "Cơ Bản", icon: Hand },
    { id: "forms", label: "18 Bài Quyền", shortLabel: "18 Bài Quyền", icon: Swords },
    { id: "dummy", label: "Mộc Nhân", shortLabel: "Mộc Nhân", icon: Sparkles },
    { id: "scenarios", label: "Tình Huống", shortLabel: "Tình Huống", icon: ShieldAlert },
  ];

  const handleSelectNav = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 glass-panel border-b border-[#F5D06C]/30 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Logo & Title */}
        <div
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none shrink-0"
          onClick={() => handleSelectNav("welcome")}
        >
          <div className="w-10 h-10 rounded-xl bg-[#F5D06C]/15 border border-[#F5D06C]/40 flex items-center justify-center text-[#F5D06C] font-serif font-black text-xl shadow-lg shadow-[#F5D06C]/10">
            佛
          </div>
          <div>
            <h1 className="font-bold text-sm sm:text-base tracking-wide gold-gradient leading-tight uppercase font-serif">
              Phật Gia Vịnh Xuân
            </h1>
            <p className="text-[10px] sm:text-xs text-amber-200/80 tracking-wider">
              Di Sản Võ Học Cổ Truyền
            </p>
          </div>
        </div>

        {/* Desktop Navigation Menu (Visible on lg & up, No Scrollbar, Perfectly Spaced) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectNav(item.id)}
                className={`px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#E2B743] text-black font-bold shadow-md shadow-[#E2B743]/20"
                    : "text-slate-300 hover:text-white hover:bg-[#20150F]"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action Icons: Search + Stance Guide + Mobile Menu Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">

          {/* Quick Stance Guide Button (Chỉ hiển thị từ tablet md trở lên) */}
          <button
            onClick={openStanceGuide}
            title="Quy chuẩn Tấn Kiềm Dương (Chân Hẹp)"
            aria-label="Quy chuẩn Tấn Kiềm Dương (Chân Hẹp)"
            className="hidden md:flex min-w-[40px] min-h-[40px] items-center justify-center p-2 rounded-xl text-[#10B981] bg-[#10B981]/15 border border-[#10B981]/30 hover:bg-[#10B981]/25 transition-all cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" />
          </button>

          {/* Search Trigger (Chuẩn Touch Target >= 44px trên Mobile) */}
          <button
            onClick={openSearch}
            title="Tra cứu nhanh võ học (Ctrl+K)"
            aria-label="Tra cứu nhanh võ học (Ctrl+K)"
            className="flex items-center justify-center gap-1.5 min-h-[44px] px-3 py-2 rounded-xl bg-[#140C08] border border-[#3D291F] hover:border-[#E2B743]/50 text-slate-300 hover:text-white transition-all text-xs cursor-pointer shadow-inner"
          >
            <Search className="w-4 h-4 text-[#E2B743]" />
            <span className="hidden sm:inline text-xs text-slate-300 font-medium">Tra cứu</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] bg-[#2A1C14] rounded border border-[#3D291F] text-amber-200/80 font-mono">
              Ctrl+K
            </kbd>
          </button>

          {/* Mobile Menu Hamburger Button (< lg, Chuẩn Touch Target >= 44px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2.5 rounded-xl bg-[#20150F] border border-[#3D291F] text-slate-300 hover:text-white hover:border-[#E2B743]/50 transition-all cursor-pointer"
            aria-label="Bật tắt menu điều hướng di động"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#E2B743]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile / Tablet Dropdown Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#180E09] border-b border-[#3D291F] px-4 py-3.5 space-y-3 shadow-2xl animate-fadeIn">
          {/* Tiện ích Quick-Access trên Mobile (Quy Chuẩn Tấn) */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openStanceGuide();
            }}
            className="w-full p-2.5 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 text-emerald-200 hover:text-white flex items-center gap-2.5 transition cursor-pointer text-left"
            aria-label="Mở quy chuẩn Tấn Kiềm Dương"
          >
            <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
            <div className="min-w-0">
              <div className="text-xs font-bold text-emerald-400 truncate">Quy Chuẩn Tấn Kiềm Dương</div>
              <div className="text-[10px] text-emerald-200/60 truncate">Định hình trục thân &amp; chân hẹp chuẩn mực</div>
            </div>
          </button>

          <div className="text-[10px] font-bold text-amber-200/60 uppercase tracking-widest px-1">
            Danh Mục 5 Phân Hệ Võ Học
          </div>

          <div className="grid grid-cols-2 gap-2 pt-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectNav(item.id)}
                  className={`px-3 py-3 rounded-xl text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#E2B743] text-black font-bold shadow-md shadow-[#E2B743]/20"
                      : "text-slate-300 hover:text-white hover:bg-[#20150F] bg-[#140C08] border border-[#3D291F]"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
