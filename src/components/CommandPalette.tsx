"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { Search, X, ChevronRight, BookOpen, Swords, Sparkles } from "lucide-react";
import { Technique } from "@/data/techniques";
import { searchKnowledgeBase, SearchResultItem } from "@/lib/searchEngine";
import { MonographSection } from "@/data/monographs";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  techniques: Technique[];
  onSelectTechnique: (tech: Technique) => void;
  onSelectMonograph?: (mono: MonographSection) => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onSelectTechnique,
  onSelectMonograph,
}) => {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const searchResults = useMemo(() => {
    if (!query.trim()) {
      // Khi chưa gõ gì: Hiển thị gợi ý các chiêu thức tiêu biểu
      return searchKnowledgeBase("Tiểu Niệm Đầu").slice(0, 6);
    }
    return searchKnowledgeBase(query).slice(0, 12);
  }, [query]);



  const handleKeyDownList = (e: React.KeyboardEvent) => {
    if (searchResults.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % searchResults.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + searchResults.length) % searchResults.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = searchResults[selectedIndex];
      if (item) {
        handleSelectItem(item);
      }
    }
  };

  const handleSelectItem = (item: SearchResultItem) => {
    if (item.type === "technique" && item.rawTechnique) {
      onSelectTechnique(item.rawTechnique);
      onClose();
    } else if (item.type === "monograph" && item.rawMonograph && onSelectMonograph) {
      onSelectMonograph(item.rawMonograph);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4 bg-black/80 backdrop-blur-md transition-opacity"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl glass-panel rounded-2xl border border-[#D4AF37]/50 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDownList}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-[#1E293B] bg-[#111722]/90">
          <Search className="w-5 h-5 text-[#D4AF37] mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Tra cứu: Chiêu 38, Bàng thủ, Mộc nhân, Kiềm dương, GS.TS Nguyễn Mạnh Nhâm..."
            className="flex-1 bg-transparent text-white placeholder-slate-500 focus:outline-none text-sm"
          />
          {query && (
            <button
              onClick={() => {
                setQuery("");
                setSelectedIndex(0);
              }}
              className="p-1 rounded-lg text-slate-400 hover:text-white mr-2 text-xs"
              title="Xóa tìm kiếm"
              aria-label="Xóa nội dung tìm kiếm"
            >
              Xóa
            </button>
          )}
          <button
            onClick={onClose}
            aria-label="Đóng hộp tra cứu võ học"
            className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-2 space-y-1">
          {searchResults.length === 0 ? (
            <div className="py-12 px-4 text-center space-y-2">
              <p className="text-sm text-slate-400">
                Không tìm thấy nội dung nào khớp với &ldquo;<span className="text-[#D4AF37]">{query}</span>&rdquo;.
              </p>
              <p className="text-xs text-slate-500">
                Thử tìm theo số chiêu (ví dụ: &quot;38&quot;), tên thủ pháp (&quot;Bàng Thủ&quot;) hoặc tên võ sư.
              </p>
            </div>
          ) : (
            searchResults.map((item, idx) => {
              const isSelected = idx === selectedIndex;
              const isTech = item.type === "technique";

              return (
                <div
                  key={`${item.type}-${item.id}`}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleSelectItem(item)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleSelectItem(item);
                    }
                  }}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                    isSelected
                      ? "bg-[#D4AF37]/15 border-[#D4AF37]/50 shadow-md"
                      : "border-transparent hover:bg-slate-800/40"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Thumbnail if technique */}
                    {isTech && (item.imgUrl || item.rawTechnique?.steps?.[0]?.imgUrl) ? (
                      <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-white/95 shrink-0 border border-slate-700">
                        <Image
                          src={item.imgUrl || item.rawTechnique?.steps?.[0]?.imgUrl || ""}
                          alt={item.title}
                          fill
                          sizes="44px"
                          className="object-contain p-0.5"
                        />
                      </div>
                    ) : (
                      <div className="w-11 h-11 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                        {isTech ? <Swords className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
                      </div>
                    )}

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                            isTech
                              ? "bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30"
                              : "bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30"
                          }`}
                        >
                          {isTech ? `Thế ${item.badge}` : item.badge}
                        </span>
                        <h4
                          className={`text-sm font-semibold truncate ${
                            isSelected ? "text-[#D4AF37]" : "text-white"
                          }`}
                        >
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-400 truncate mt-0.5">
                        {item.highlightSnippet || item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <ChevronRight
                      className={`w-4 h-4 transition ${
                        isSelected ? "text-[#D4AF37] translate-x-0.5" : "text-slate-600"
                      }`}
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-[#080B10] border-t border-[#1E293B] flex items-center justify-between text-[11px] text-slate-500">
          <div className="hidden sm:flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300">↑↓</kbd> Di chuyển
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300">Enter</kbd> Chọn
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 bg-slate-800 rounded text-slate-300">ESC</kbd> Đóng
            </span>
          </div>
          <span className="sm:hidden text-amber-200/70 font-serif">
            Chạm vào kết quả để xem ngay
          </span>
          <div className="flex items-center gap-1.5 text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fuzzy Search &lt;2ms</span>
          </div>
        </div>
      </div>
    </div>
  );
};
