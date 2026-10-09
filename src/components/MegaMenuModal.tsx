"use client";

import React, { useState } from "react";
import {
  X,
  BookOpen,
  Layers,
  Swords,
  ChevronRight,
  Sparkles,
  Compass,
  Hand,
  ShieldAlert,
  GitBranch,
  Search,
} from "lucide-react";
import { CONTENT_GROUPS, CANONICAL_LESSONS } from "@/data/canonicalCatalog";
import { NavTab } from "@/components/Header";

interface MegaMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: NavTab, lessonId?: string) => void;
}

export const MegaMenuModal: React.FC<MegaMenuModalProps> = ({
  isOpen,
  onClose,
  onNavigateTab,
}) => {
  const [filterQuery, setFilterQuery] = useState("");

  if (!isOpen) return null;

  const quickNavPillars = [
    { id: "forms" as NavTab, label: "36 Bài Quyền & Vũ Khí", icon: Swords, desc: "11 Phân hệ võ học toàn vẹn", count: "36 Bài" },
    { id: "scenarios" as NavTab, label: "200 Tình Huống Thực Chiến", icon: ShieldAlert, desc: "Khảo thí phản xạ & thực chiến", count: "200 Thế" },
    { id: "dummy" as NavTab, label: "Cọc Gỗ Mộc Nhân", icon: Sparkles, desc: "Bản vẽ 1954 & Thao pháp", count: "3 Phân hệ" },
    { id: "fundamentals" as NavTab, label: "Cơ Bản Công & Tấn Pháp", icon: Hand, desc: "Tam Thủ & Kiềm Dương Tấn", count: "14 Thủ pháp" },
    { id: "centerline" as NavTab, label: "Trục Tý Ngọ Tuyến", icon: Compass, desc: "Đạo trung lộ & 7 đại huyệt", count: "7 Huyệt đạo" },
    { id: "lineage" as NavTab, label: "Truyền Thừa & Triết Lý", icon: GitBranch, desc: "4 Thế hệ & Võ Sư Lê Đắc Kiên", count: "4 Thế hệ" },
    { id: "library" as NavTab, label: "Tàng Kinh Các (225 Trang)", icon: BookOpen, desc: "Toàn văn 7 chuyên đề kinh điển", count: "225 Trang" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[92vh] glass-panel rounded-3xl border border-[#F5D06C]/40 shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#F5D06C]/20 bg-[#20150F]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#F5D06C]/15 border border-[#F5D06C]/30 flex items-center justify-center text-[#F5D06C] font-serif font-black text-xl">
              佛
            </div>
            <div>
              <h3 className="text-base sm:text-xl font-bold font-serif gold-gradient">
                Mục Lục Toàn Cảnh • Võ Đường Số Phật Gia Vịnh Xuân
              </h3>
              <p className="text-xs text-amber-200/80">
                Toàn bộ 11 Đại Phân Hệ, 36 Bài Giáo Trình và 7 Trụ Cột Võ Học Kinh Điển
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#2A0E0A] hover:bg-[#F5D06C] hover:text-[#2A0E0A] text-amber-200 transition border border-[#F5D06C]/30 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Access Pillars Grid */}
        <div className="p-4 sm:p-6 border-b border-[#F5D06C]/15 bg-black/30">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#F5D06C] mb-3 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5" /> 7 Đại Trụ Cột Của Nền Tảng Võ Đường Số:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2.5">
            {quickNavPillars.map((p) => {
              const Icon = p.icon;
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    onNavigateTab(p.id);
                    onClose();
                  }}
                  className="p-3 rounded-2xl bg-[#20150F] hover:bg-[#F5D06C]/15 border border-[#F5D06C]/25 hover:border-[#F5D06C] transition text-left flex flex-col justify-between group cursor-pointer shadow"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <Icon className="w-4 h-4 text-[#F5D06C]" />
                    <span className="text-[9px] font-mono font-bold text-amber-200/70 bg-[#2A0E0A] px-1.5 py-0.5 rounded">
                      {p.count}
                    </span>
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-white group-hover:text-[#F5D06C] transition line-clamp-1">
                      {p.label}
                    </h5>
                    <p className="text-[10px] text-amber-200/60 line-clamp-1 mt-0.5">
                      {p.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 11 Groups & 36 Lessons Hierarchical Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6 scrollbar-thin">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F5D06C] flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> Trọn Bộ 11 Đại Phân Hệ Giáo Trình (36 Bài Học • 225 Trang):
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-amber-200/60 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Lọc bài học nhanh..."
                className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#20150F] border border-[#F5D06C]/30 rounded-xl text-white focus:outline-none focus:border-[#F5D06C] placeholder-amber-200/40"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CONTENT_GROUPS.map((group) => {
              let groupLessons = CANONICAL_LESSONS.filter((l) => l.groupId === group.id);
              if (filterQuery.trim()) {
                const q = filterQuery.toLowerCase();
                groupLessons = groupLessons.filter(
                  (l) => l.title.toLowerCase().includes(q) || l.pageRange.toLowerCase().includes(q)
                );
              }
              if (groupLessons.length === 0) return null;

              return (
                <div
                  key={group.id}
                  className="p-4 rounded-2xl bg-[#20150F]/90 border border-[#F5D06C]/25 space-y-3 shadow-md"
                >
                  <div className="flex items-center justify-between border-b border-[#F5D06C]/15 pb-2">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#F5D06C] uppercase">
                        Nhóm {group.order} • {group.pages.replace("Trang PDF ", "Trang ")}
                      </span>
                      <h4 className="font-bold text-sm text-white font-serif">{group.name}</h4>
                    </div>
                    <span className="text-[10px] font-mono text-amber-200/70 bg-[#2A0E0A] px-2 py-0.5 rounded border border-[#F5D06C]/20">
                      {groupLessons.length} bài
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    {groupLessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => {
                          onNavigateTab("forms", lesson.id);
                          onClose();
                        }}
                        className="w-full p-2 rounded-xl bg-[#2A0E0A]/60 hover:bg-[#F5D06C]/20 border border-transparent hover:border-[#F5D06C]/40 text-left transition flex items-center justify-between group cursor-pointer"
                      >
                        <div className="min-w-0 pr-2">
                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-amber-200/70">
                            <span className="font-bold text-[#F5D06C]">#{lesson.bookOrder.toString().padStart(2, "0")}</span>
                            <span>•</span>
                            <span>{lesson.assetCount > 0 ? `${lesson.assetCount} ảnh HD` : "Toàn văn"}</span>
                          </div>
                          <h6 className="font-semibold text-xs text-slate-200 group-hover:text-white truncate">
                            {lesson.title}
                          </h6>
                        </div>
                        <ChevronRight className="w-3.5 h-3.5 text-amber-200/40 group-hover:text-[#F5D06C] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#20150F] border-t border-[#F5D06C]/20 flex items-center justify-between text-xs text-amber-200/70">
          <span>Nhấp vào bất kỳ bài học nào để mở ngay Sàn tập hoặc Đài đọc di sản</span>
          <span className="font-mono text-[#F5D06C]">Đầy đủ 100% tài liệu không bỏ sót</span>
        </div>
      </div>
    </div>
  );
};
