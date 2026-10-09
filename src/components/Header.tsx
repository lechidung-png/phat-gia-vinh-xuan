"use client";

import React, { useState } from "react";
import {
  Home,
  Search,
  Swords,
  BookOpen,
  GitBranch,
  ShieldCheck,
  Compass,
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
    { id: "welcome", label: "Trang Chủ", shortLabel: "Trang Chủ", icon: Home },
    { id: "forms", label: "7 Bài Quyền", shortLabel: "7 Bài Quyền", icon: Swords },
    { id: "fundamentals", label: "Cơ Bản Công", shortLabel: "Cơ Bản", icon: Hand },
    { id: "dummy", label: "Cọc Mộc Nhân", shortLabel: "Mộc Nhân", icon: Sparkles },
    { id: "scenarios", label: "200 Tình Huống", shortLabel: "Tình Huống", icon: ShieldAlert },
    { id: "centerline", label: "Tý Ngọ Tuyến", shortLabel: "Tý Ngọ", icon: Compass },
    { id: "library", label: "Tàng Kinh Các", shortLabel: "Kinh Các", icon: BookOpen },
    { id: "lineage", label: "Truyền Thừa", shortLabel: "Truyền Thừa", icon: GitBranch },
  ];

  const handleSelectNav = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 glass-panel border-b border-[#3D291F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Logo & Title */}
        <div
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none shrink-0"
          onClick={() => handleSelectNav("welcome")}
        >
          <div className="w-10 h-10 rounded-xl bg-[#E2B743]/15 border border-[#E2B743]/40 flex items-center justify-center text-[#E2B743] font-serif font-black text-xl shadow-lg shadow-[#E2B743]/10">
            佛
          </div>
          <div>
            <h1 className="font-bold text-sm sm:text-base tracking-wide gold-gradient leading-tight uppercase font-serif">
              Phật Gia Vịnh Xuân
            </h1>
            <p className="text-[10px] sm:text-xs text-amber-200/70 tracking-wider">
              Di Sản Võ Học
            </p>
          </div>
        </div>

        {/* Desktop Navigation Menu (Visible on lg & up, No Scrollbar, Perfectly Spaced) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectNav(item.id)}
                className={`px-2.5 xl:px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#E2B743] text-black font-bold shadow-md shadow-[#E2B743]/20"
                    : "text-slate-300 hover:text-white hover:bg-[#20150F]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action Icons: Search + Stance Guide + Mobile Menu Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Compact Search Trigger */}
          <button
            onClick={openSearch}
            title="Tra cứu nhanh võ học (Ctrl+K)"
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-[#140C08] border border-[#3D291F] hover:border-[#E2B743]/50 text-slate-300 hover:text-white transition-all text-xs cursor-pointer shadow-inner"
          >
            <Search className="w-4 h-4 text-[#E2B743]" />
            <span className="hidden md:inline text-xs text-slate-300">Tra cứu</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] bg-[#2A1C14] rounded border border-[#3D291F] text-amber-200/80 font-mono">
              Ctrl+K
            </kbd>
          </button>

          {/* Quick Stance Guide Button */}
          <button
            onClick={openStanceGuide}
            title="Quy chuẩn Tấn Kiềm Dương (Chân Hẹp)"
            className="p-2 rounded-xl text-[#10B981] bg-[#10B981]/15 border border-[#10B981]/30 hover:bg-[#10B981]/25 transition-all cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4" />
          </button>

          {/* Mobile Menu Hamburger Button (< lg) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-[#20150F] border border-[#3D291F] text-slate-300 hover:text-white hover:border-[#E2B743]/50 transition-all cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#E2B743]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile / Tablet Dropdown Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#180E09] border-b border-[#3D291F] px-4 py-3 space-y-1 shadow-2xl animate-fadeIn">
          <div className="text-[10px] font-bold text-amber-200/60 uppercase tracking-widest px-2 py-1">
            Danh Mục Võ Đường Số
          </div>
          <div className="grid grid-cols-2 gap-1.5 pt-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectNav(item.id)}
                  className={`px-3 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
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
