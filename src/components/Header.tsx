"use client";

import React from "react";
import { Search, Swords, BookOpen, GitBranch, ShieldCheck, Compass, Sparkles, Hand, ShieldAlert } from "lucide-react";

export type NavTab = "forms" | "fundamentals" | "scenarios" | "dummy" | "centerline" | "library" | "lineage";

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
  const navItems: { id: NavTab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: "forms", label: "7 Bài Quyền Chính Tông", icon: Swords },
    { id: "fundamentals", label: "Cơ Bản Công", icon: Hand },
    { id: "scenarios", label: "200 Tình Huống", icon: ShieldAlert },
    { id: "dummy", label: "Cọc Gỗ Mộc Nhân", icon: Sparkles },
    { id: "centerline", label: "Tý Ngọ Tuyến", icon: Compass },
    { id: "library", label: "Tàng Kinh Các", icon: BookOpen },
    { id: "lineage", label: "Truyền Thừa", icon: GitBranch },
  ];

  return (
    <header className="sticky top-0 z-40 glass-panel border-b border-[#3D291F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3 sm:gap-4">
        
        {/* Logo & Title */}
        <div
          className="flex items-center gap-2.5 sm:gap-3 cursor-pointer select-none shrink-0"
          onClick={() => setActiveTab("forms")}
        >
          <div className="w-10 h-10 rounded-xl bg-[#E2B743]/15 border border-[#E2B743]/40 flex items-center justify-center text-[#E2B743] font-serif font-black text-xl shadow-lg shadow-[#E2B743]/10">
            佛
          </div>
          <div>
            <h1 className="font-bold text-sm sm:text-base tracking-wide gold-gradient leading-tight uppercase font-serif">
              Phật Gia Vịnh Xuân
            </h1>
            <p className="text-[10px] sm:text-xs text-amber-200/70 tracking-wider">
              Di Sản Võ Học • Võ Phục Nâu Đất
            </p>
          </div>
        </div>

        {/* Search Bar Input Trigger */}
        <div className="flex-1 max-w-xs md:max-w-sm lg:max-w-md mx-2 hidden md:block">
          <button
            onClick={openSearch}
            className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#140C08] border border-[#3D291F] text-slate-400 text-xs sm:text-sm hover:border-[#E2B743]/50 hover:bg-[#20150F] transition-all shadow-inner"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-[#E2B743]" />
              <span className="truncate">Tra cứu 108 chiêu, tấn pháp, khẩu quyết...</span>
            </div>
            <kbd className="px-2 py-0.5 text-[10px] bg-[#2A1C14] rounded border border-[#3D291F] text-amber-200/80 font-mono shrink-0">
              Ctrl+K
            </kbd>
          </button>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto py-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-[#E2B743]/20 text-[#E2B743] border border-[#E2B743]/50 shadow-md shadow-[#E2B743]/10"
                    : "text-slate-300 hover:text-white hover:bg-[#20150F]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            );
          })}

          {/* Quick Stance Guide Button */}
          <button
            onClick={openStanceGuide}
            title="Quy chuẩn Tấn Kiềm Dương (Chân Hẹp)"
            className="p-2 rounded-lg text-[#10B981] bg-[#10B981]/15 border border-[#10B981]/30 hover:bg-[#10B981]/25 transition-all ml-1 shrink-0"
          >
            <ShieldCheck className="w-4 h-4" />
          </button>
        </nav>

      </div>
    </header>
  );
};
