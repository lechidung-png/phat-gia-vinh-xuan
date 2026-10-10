"use client";

import React, { useState } from "react";
import {
  ChevronRight,
  BookOpen,
  FileText,
  CheckCircle2,
  X,
  Clock,
} from "lucide-react";
import { MONOGRAPHS, MonographSection } from "@/data/monographs";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface KnowledgeHubProps {
}

export const KnowledgeHub: React.FC<KnowledgeHubProps> = () => {
  const [selectedMonograph, setSelectedMonograph] = useState<MonographSection | null>(null);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#3D291F] pb-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition bg-[#E2B743] text-[#140C08] shadow-md shadow-[#E2B743]/20"
          >
            <BookOpen className="w-4 h-4" />
            Lý thuyết & Lịch sử
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <FileText className="w-4 h-4 text-[#E2B743]" />
          <span>Ấn bản gốc 2012 • GS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức</span>
        </div>
      </div>

      {/* Tab Chuyên Đề Lý Thuyết */}
      <div className="space-y-6">
        <div className="glass-panel p-6 rounded-2xl border border-[#3D291F] space-y-2">
          <h3 className="text-lg font-bold font-serif gold-gradient flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#E2B743]" />
            Tài liệu khảo cứu võ học
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            Không gian tĩnh lặng lưu trữ toàn bộ lịch sử truyền thừa, lời tựa, triết lý võ đạo, phương pháp luyện khí đan điền và các văn bản gốc từ 225 trang sách của GS.TS Y khoa Nguyễn Mạnh Nhâm và ThS.DS Nguyễn Duy Thức.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {MONOGRAPHS.map((mono) => (
            <div
              key={mono.id}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedMonograph(mono)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedMonograph(mono);
                }
              }}
              className="glass-panel hover:bg-[#2A1C14] rounded-2xl p-5 border border-[#3D291F] hover:border-[#E2B743]/60 cursor-pointer transition flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#E2B743]/15 text-[#E2B743] border border-[#E2B743]/30 font-semibold">
                    {mono.badge}
                  </span>
                  <span className="text-slate-500 flex items-center gap-1 font-mono text-[11px]">
                    <Clock className="w-3 h-3" /> {mono.readTime}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-slate-400 font-mono block mb-1">
                    {mono.chapter}
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-[#E2B743] transition font-serif leading-snug">
                    {mono.title}
                  </h4>
                </div>

                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                  {mono.excerpt}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#3D291F] flex items-center justify-between text-xs text-[#E2B743] font-semibold">
                <span>Đọc toàn văn chuyên đề</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Đọc Toàn Văn Chuyên Đề Tàng Kinh Các */}
      {selectedMonograph && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setSelectedMonograph(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[85vh] bg-[#1D130E] border border-[#E2B743]/40 rounded-2xl p-6 sm:p-8 shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-[#3D291F] pb-4 mb-4">
              <div className="space-y-1 pr-6">
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2.5 py-0.5 rounded bg-[#E2B743]/20 text-[#E2B743] font-bold font-mono">
                    {selectedMonograph.badge}
                  </span>
                  <span className="text-slate-400">• {selectedMonograph.chapter}</span>
                  <span className="text-slate-400">• Đọc ~{selectedMonograph.readTime}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-white pt-1">
                  {selectedMonograph.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedMonograph(null)}
                aria-label="Đóng chuyên khảo"
                className="p-1.5 rounded-lg bg-[#140C08] hover:bg-[#20150F] text-slate-400 hover:text-white border border-[#3D291F] transition shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Scrollable */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-4 text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
              <div className="p-3.5 rounded-xl bg-[#140C08] border border-[#3D291F] italic text-slate-300">
                &ldquo;{selectedMonograph.excerpt}&rdquo;
              </div>

              {selectedMonograph.content.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Keypoints Checklist */}
              {selectedMonograph.keypoints && selectedMonograph.keypoints.length > 0 && (
                <div className="mt-6 p-4 rounded-xl bg-[#E2B743]/10 border border-[#E2B743]/30 space-y-2">
                  <h5 className="font-bold text-xs uppercase tracking-wider text-[#E2B743] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Yếu Lĩnh Cốt Lõi Cần Nhớ
                  </h5>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {selectedMonograph.keypoints.map((kp, kidx) => (
                      <li key={kidx} className="flex items-start gap-2">
                        <span className="text-[#E2B743] font-bold mt-0.5">•</span>
                        <span>{kp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="pt-4 mt-4 border-t border-[#3D291F] flex items-center justify-between text-xs text-slate-500">
              <span>Trích từ tác phẩm 2012 của GS.TS Nguyễn Mạnh Nhâm</span>
              <button
                onClick={() => setSelectedMonograph(null)}
                className="px-4 py-2 rounded-xl bg-[#E2B743] text-[#140C08] font-bold"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
