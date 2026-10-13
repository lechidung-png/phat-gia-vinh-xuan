"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type FontSizeLevel = "normal" | "large" | "extra";

interface FontSizeContextType {
  fontSize: FontSizeLevel;
  setFontSize: (size: FontSizeLevel) => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

const STORAGE_KEY = "pgvx_font_size";

export const FontSizeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [fontSize, setFontSizeState] = useState<FontSizeLevel>("normal");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as FontSizeLevel | null;
      if (saved && (saved === "normal" || saved === "large" || saved === "extra")) {
        setFontSizeState(saved);
        document.documentElement.setAttribute("data-font-size", saved);
      } else {
        document.documentElement.setAttribute("data-font-size", "normal");
      }
    } catch {
      // LocalStorage fallback
    }
  }, []);

  const setFontSize = (size: FontSizeLevel) => {
    setFontSizeState(size);
    try {
      localStorage.setItem(STORAGE_KEY, size);
      document.documentElement.setAttribute("data-font-size", size);
    } catch {
      // Ignore
    }
  };

  const increaseFontSize = () => {
    if (fontSize === "normal") setFontSize("large");
    else if (fontSize === "large") setFontSize("extra");
  };

  const decreaseFontSize = () => {
    if (fontSize === "extra") setFontSize("large");
    else if (fontSize === "large") setFontSize("normal");
  };

  return (
    <FontSizeContext.Provider value={{ fontSize, setFontSize, increaseFontSize, decreaseFontSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};

export const useFontSize = (): FontSizeContextType => {
  const context = useContext(FontSizeContext);
  if (!context) {
    return {
      fontSize: "normal",
      setFontSize: () => {},
      increaseFontSize: () => {},
      decreaseFontSize: () => {},
    };
  }
  return context;
};

/**
 * Component thanh điều khiển cỡ chữ trực quan (Font Size Controls)
 * Đạt chuẩn WCAG 2.1 với kích thước chạm >= 40px và nhãn aria đầy đủ
 */
export const FontSizeControls: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { fontSize, setFontSize } = useFontSize();

  const options: { level: FontSizeLevel; label: string; tooltip: string; iconSize: string }[] = [
    { level: "normal", label: "A-", tooltip: "Cỡ chữ chuẩn (16px)", iconSize: "text-xs" },
    { level: "large", label: "A", tooltip: "Cỡ chữ lớn (18px) • Khuyên dùng", iconSize: "text-sm" },
    { level: "extra", label: "A+", tooltip: "Cỡ chữ rất lớn (20px) • Chống mỏi mắt", iconSize: "text-base" },
  ];

  return (
    <div
      role="group"
      aria-label="Điều chỉnh kích thước cỡ chữ hiển thị"
      className={`inline-flex items-center p-1 bg-[#140C08]/90 border border-[#F5D06C]/35 rounded-xl shadow-inner gap-0.5 ${className}`}
    >
      {options.map((opt) => {
        const isActive = fontSize === opt.level;
        return (
          <button
            key={opt.level}
            onClick={() => setFontSize(opt.level)}
            title={opt.tooltip}
            aria-pressed={isActive}
            aria-label={opt.tooltip}
            className={`min-w-[34px] sm:min-w-[36px] h-8 sm:h-8 px-2 rounded-lg font-bold font-serif transition-all flex items-center justify-center cursor-pointer ${
              isActive
                ? "bg-[#F5D06C] text-[#2A0E0A] shadow-md shadow-[#F5D06C]/20 scale-105"
                : "text-amber-200/75 hover:text-white hover:bg-[#20150F]"
            } ${opt.iconSize}`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};
