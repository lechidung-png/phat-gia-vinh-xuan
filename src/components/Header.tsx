"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Search,
  Swords,
  GitBranch,
  Sparkles,
  Hand,
  ShieldAlert,
  Menu,
  X,
  Wind,
} from "lucide-react";
import { FontSizeControls } from "@/components/FontSizeProvider";


export type NavTab = "welcome" | "forms" | "fundamentals" | "meditation" | "scenarios" | "dummy" | "centerline" | "library" | "lineage";

interface HeaderProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  openSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  openSearch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavTab; label: string; shortLabel: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: "lineage", label: "Truyền Thừa", shortLabel: "Truyền Thừa", icon: GitBranch },
    { id: "fundamentals", label: "Cơ Bản", shortLabel: "Cơ Bản", icon: Hand },
    { id: "forms", label: "18 Bài Quyền", shortLabel: "18 Quyền", icon: Swords },
    { id: "meditation", label: "Thiền Khí Công", shortLabel: "Thiền", icon: Wind },
    { id: "dummy", label: "Mộc Nhân", shortLabel: "Mộc Nhân", icon: Sparkles },
    { id: "scenarios", label: "Tình Huống", shortLabel: "Tình Huống", icon: ShieldAlert },
  ];

  const handleSelectNav = (tab: NavTab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#140A06]/90 backdrop-blur-xl border-b border-white/10 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-3 sm:gap-6">
        
        {/* Logo & Title */}
        <div
          className="flex items-center gap-3 sm:gap-3.5 cursor-pointer select-none shrink-0"
          onClick={() => handleSelectNav("welcome")}
        >
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl overflow-hidden shadow-lg shadow-red-950/40 border border-[#F5D06C]/40 shrink-0 bg-[#FFFDF8] hover:scale-105 transition-transform">
            <Image
              src="/assets/images/logo/an_vuong_phat_gia_vinh_xuan.png"
              alt="Ấn Vuông Phật Gia Vịnh Xuân"
              fill
              sizes="48px"
              className="object-contain p-0.5"
              priority
            />
          </div>
          <div>
            <h1 className="font-bold text-base sm:text-lg tracking-wide gold-gradient leading-tight uppercase font-serif">
              Phật Gia Vịnh Xuân
            </h1>
            <p className="text-xs text-amber-200/80 tracking-wider mt-0.5">
              Di Sản Võ Học Cổ Truyền
            </p>
          </div>
        </div>

        {/* Desktop Navigation Menu (Spacious Pill Navigation) */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectNav(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#F5D06C] text-[#1E0C06] font-bold shadow-md shadow-[#F5D06C]/20"
                    : "text-amber-100/80 hover:text-white hover:bg-white/8"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action Icons: Font Size Switcher + Search + Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">

          {/* Bộ điều chỉnh cỡ chữ chống mỏi mắt (Desktop) */}
          <FontSizeControls className="hidden sm:inline-flex" />

          {/* Search Trigger (Chuẩn Touch Target >= 44px) */}
          <button
            onClick={openSearch}
            title="Tra cứu nhanh võ học (Ctrl+K)"
            aria-label="Tra cứu nhanh võ học (Ctrl+K)"
            className="flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 rounded-full bg-white/5 border border-white/15 hover:border-[#F5D06C]/60 text-amber-100 hover:text-white transition-all text-xs sm:text-sm cursor-pointer"
          >
            <Search className="w-4 h-4 text-[#F5D06C]" />
            <span className="hidden sm:inline font-medium">Tra cứu</span>
            <kbd className="hidden xl:inline-block px-2 py-0.5 text-xs bg-black/40 rounded-full border border-white/10 text-amber-200/80 font-mono">
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
          {/* Bộ chỉnh cỡ chữ trên mobile */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#140C08] border border-[#3D291F]">
            <span className="text-xs text-amber-200/90 font-medium">Cỡ chữ đọc (A- / A / A+):</span>
            <FontSizeControls />
          </div>

          <div className="text-[10px] font-bold text-amber-200/60 uppercase tracking-widest px-1">
            Danh Mục Phân Hệ Võ Học &amp; Khí Công
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
