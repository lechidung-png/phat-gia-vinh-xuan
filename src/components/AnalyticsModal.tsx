"use client";

import React, { useEffect, useCallback } from "react";
import {
  X,
  TrendingUp,
  Eye,
  Calendar,
  Users,
  Award,
  BookOpen,
  PieChart,
  Layers,
  ArrowRight,
} from "lucide-react";
import { AnalyticsSummary } from "@/lib/analytics";

interface AnalyticsModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: AnalyticsSummary;
  onNavigateToContent?: (id: string, category: string) => void;
}

export const AnalyticsModal: React.FC<AnalyticsModalProps> = ({
  isOpen,
  onClose,
  data,
  onNavigateToContent,
}) => {
  // Xử lý phím Escape để đóng modal
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const maxViews = data.topContents.length > 0 ? data.topContents[0].views : 1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="analytics-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-gradient-to-b from-[#1E130D] via-[#160D09] to-[#0E0704] border-2 border-[#E2B743]/50 shadow-2xl overflow-hidden text-white">
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#3D291F] bg-[#140C08]/80 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#E2B743]/15 border border-[#E2B743]/40 flex items-center justify-center text-[#E2B743]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h3 id="analytics-modal-title" className="text-lg sm:text-xl font-bold font-serif gold-gradient">
                Thống Kê Truy Cập &amp; Mức Độ Quan Tâm
              </h3>
              <p className="text-xs text-amber-200/70">
                Dữ liệu tra cứu và nghiên cứu thực tế của môn sinh &amp; độc giả
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Đóng bảng thống kê"
            className="w-10 h-10 rounded-2xl bg-[#20150F] hover:bg-[#2F1D14] border border-[#3D291F] hover:border-[#E2B743] flex items-center justify-center text-slate-300 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* 4 Thẻ KPI Chỉ Số */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <div className="p-4 rounded-2xl bg-[#140C08] border border-[#3D291F] space-y-1">
              <div className="flex items-center justify-between text-xs text-amber-200/80">
                <span>Tổng Lượt Xem</span>
                <Eye className="w-4 h-4 text-[#E2B743]" />
              </div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-white gold-gradient">
                {data.totalVisits.toLocaleString()}
              </p>
              <span className="text-[10px] text-slate-400 block">Lượt truy cập trang</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#140C08] border border-[#3D291F] space-y-1">
              <div className="flex items-center justify-between text-xs text-emerald-400">
                <span>Hôm Nay</span>
                <Calendar className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-emerald-300">
                +{data.todayVisits.toLocaleString()}
              </p>
              <span className="text-[10px] text-slate-400 block">Lượt xem trong ngày</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#140C08] border border-[#3D291F] space-y-1">
              <div className="flex items-center justify-between text-xs text-sky-400">
                <span>Độc Giả Ước Tính</span>
                <Users className="w-4 h-4 text-sky-400" />
              </div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-sky-200">
                {data.uniqueVisitors.toLocaleString()}
              </p>
              <span className="text-[10px] text-slate-400 block">Khách truy cập tự nhiên</span>
            </div>

            <div className="p-4 rounded-2xl bg-[#140C08] border border-[#3D291F] space-y-1">
              <div className="flex items-center justify-between text-xs text-amber-400">
                <span>Mục Di Sản</span>
                <BookOpen className="w-4 h-4 text-amber-400" />
              </div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-amber-200">
                {data.topContents.length}+
              </p>
              <span className="text-[10px] text-slate-400 block">Chuyên đề được tra cứu</span>
            </div>
          </div>

          {/* Hai Cột: Top Nội Dung Xem Nhiều & Tỷ Lệ Quan Tâm */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cột Trái (2 phần): Top 10 Nội Dung Xem Nhiều Nhất */}
            <div className="lg:col-span-2 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold font-serif text-white flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#E2B743]" />
                  Top Nội Dung Được Xem Nhiều Nhất
                </h4>
                <span className="text-[11px] text-amber-200/60 font-mono">
                  Sắp xếp theo số lượt tra cứu
                </span>
              </div>

              <div className="space-y-2">
                {data.topContents.slice(0, 10).map((item, index) => {
                  const percent = Math.round((item.views / maxViews) * 100);
                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        if (onNavigateToContent) {
                          onNavigateToContent(item.id, item.category);
                          onClose();
                        }
                      }}
                      className="group p-3 rounded-2xl bg-[#140C08] hover:bg-[#20150F] border border-[#3D291F] hover:border-[#E2B743]/50 transition cursor-pointer space-y-2"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2.5 min-w-0 flex-1">
                          <span
                            className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                              index === 0
                                ? "bg-[#E2B743] text-black"
                                : index === 1
                                ? "bg-slate-300 text-black"
                                : index === 2
                                ? "bg-amber-700 text-white"
                                : "bg-[#251810] text-slate-400"
                            }`}
                          >
                            {index + 1}
                          </span>
                          <span className="font-semibold text-white group-hover:text-[#E2B743] transition-colors truncate">
                            {item.title}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-black/40 text-amber-200/70 border border-white/5 shrink-0 hidden sm:inline">
                            {item.categoryLabel}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 text-right">
                          <span className="font-mono font-bold text-[#E2B743]">
                            {item.views.toLocaleString()} lượt
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#E2B743] group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>

                      {/* Thanh Progress Bar Trực Quan */}
                      <div className="w-full h-1.5 rounded-full bg-[#20150F] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#E2B743] to-[#C27D38] transition-all duration-500"
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Cột Phải (1 phần): Tỷ Lệ Quan Tâm Theo Nhóm Chuyên Mục */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold font-serif text-white flex items-center gap-2">
                <PieChart className="w-4 h-4 text-emerald-400" />
                Tỷ Lệ Mối Quan Tâm
              </h4>

              <div className="p-4 rounded-2xl bg-[#140C08] border border-[#3D291F] space-y-4">
                {data.categoryBreakdown.map((cat) => (
                  <div key={cat.category} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-medium">{cat.label}</span>
                      <span className="font-mono text-[#E2B743] font-bold">
                        {cat.percentage}%
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#20150F] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#10B981] to-[#E2B743]"
                        style={{ width: `${cat.percentage}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-slate-500 block text-right font-mono">
                      {cat.views.toLocaleString()} lượt xem
                    </span>
                  </div>
                ))}
              </div>

              {/* Thông Điệp Về Tôn Chỉ Lưu Trữ Di Sản */}
              <div className="p-4 rounded-2xl bg-[#20150F]/70 border border-[#3D291F] text-xs text-amber-200/80 leading-relaxed space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-[#E2B743]">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Ý Nghĩa Lưu Trữ Di Sản</span>
                </div>
                <p>
                  Trang web được xây dựng như một <strong>Tàng Thư Di Sản Võ Học</strong> lưu trữ toàn văn 225 trang giáo trình gốc. Dữ liệu thống kê giúp nhận diện những quyền thế, triết lý được cộng đồng quan tâm nhất để định hướng nội dung và giải thích chi tiết hơn.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-[#3D291F] bg-[#140C08]/90 flex items-center justify-between text-xs text-slate-400 shrink-0">
          <span>Dữ liệu thống kê được cập nhật tự động theo phiên duyệt web</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#E2B743] text-black font-bold hover:bg-[#F5D06C] transition cursor-pointer"
          >
            Đóng bảng thống kê
          </button>
        </div>
      </div>
    </div>
  );
};
