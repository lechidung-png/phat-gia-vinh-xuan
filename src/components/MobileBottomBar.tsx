"use client";

import React from "react";
import {
  GitBranch,
  Hand,
  Swords,
  Sparkles,
  ShieldAlert,
} from "lucide-react";
import { NavTab } from "./Header";

interface MobileBottomBarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const navTabs: {
    id: NavTab;
    label: string;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    { id: "lineage", label: "Truyền Thừa", icon: GitBranch },
    { id: "fundamentals", label: "Cơ Bản", icon: Hand },
    { id: "forms", label: "18 Quyền", icon: Swords },
    { id: "dummy", label: "Mộc Nhân", icon: Sparkles },
    { id: "scenarios", label: "Tình Huống", icon: ShieldAlert },
  ];

  const handleTabClick = (tabId: NavTab) => {
    setActiveTab(tabId);
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(10);
    }
  };

  return (
    <nav
      role="navigation"
      aria-label="Thanh điều hướng nhanh trên di động"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#140C08]/95 backdrop-blur-xl border-t border-[#F5D06C]/30 shadow-2xl pb-safe transition-transform duration-300"
    >
      <div className="max-w-md mx-auto px-2 h-16 flex items-center justify-around">
        {navTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex flex-col items-center justify-center min-w-[56px] h-full py-1 px-1.5 rounded-xl transition-all relative cursor-pointer ${
                isActive
                  ? "text-[#F5D06C]"
                  : "text-slate-400 hover:text-slate-200"
              }`}
              aria-label={`Chuyển đến phân hệ ${tab.label}`}
              aria-current={isActive ? "page" : undefined}
            >
              <div
                className={`p-1.5 rounded-xl transition-all ${
                  isActive
                    ? "bg-[#F5D06C]/20 shadow-md shadow-[#F5D06C]/10 scale-105"
                    : ""
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-[#F5D06C]" : "text-slate-400"}`} />
              </div>
              <span
                className={`text-[10px] tracking-tight mt-0.5 font-medium leading-none ${
                  isActive ? "text-[#F5D06C] font-bold" : "text-slate-400"
                }`}
              >
                {tab.label}
              </span>

              {/* Chấm sáng đan điền dưới tab đang kích hoạt */}
              {isActive && (
                <span className="absolute bottom-1 w-1.5 h-1.5 rounded-full bg-[#F5D06C] shadow-sm shadow-[#F5D06C]" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
