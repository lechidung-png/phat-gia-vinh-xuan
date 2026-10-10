"use client";

import React from "react";
import { Eye, BarChart2, Flame } from "lucide-react";
import { AnalyticsSummary } from "@/lib/analytics";

interface VisitorAnalyticsWidgetProps {
  data: AnalyticsSummary;
  onOpenDetails: () => void;
}

export const VisitorAnalyticsWidget: React.FC<VisitorAnalyticsWidgetProps> = ({
  data,
  onOpenDetails,
}) => {
  const top3 = data.topContents.slice(0, 3);

  return (
    <div className="w-full border-t border-[#3D291F]/80 bg-[#160D08]/90 backdrop-blur-md py-3 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
        {/* Số Lượt Truy Cập */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 text-amber-200/90">
          <div className="flex items-center gap-1.5 font-medium">
            <Eye className="w-3.5 h-3.5 text-[#E2B743]" />
            <span>Lượt truy cập:</span>
            <strong className="font-mono text-white font-bold bg-[#20150F] px-2 py-0.5 rounded border border-[#3D291F]">
              {data.totalVisits.toLocaleString()}
            </strong>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <span>Hôm nay:</span>
            <strong className="font-mono font-bold bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
              +{data.todayVisits.toLocaleString()}
            </strong>
          </div>
        </div>

        {/* Nội Dung Được Xem Nhiều Nhất */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-slate-300">
          <span className="flex items-center gap-1 text-[#E2B743] font-semibold">
            <Flame className="w-3.5 h-3.5 text-amber-500" /> Xem nhiều:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {top3.map((item, idx) => (
              <span
                key={item.id}
                className="px-2 py-0.5 rounded-lg bg-[#20150F] border border-[#3D291F] text-[11px] text-amber-100 hover:border-[#E2B743]/50 transition cursor-pointer"
                onClick={onOpenDetails}
                title={`${item.title} (${item.views.toLocaleString()} lượt xem)`}
              >
                <span className="text-[#E2B743] font-bold mr-1">#{idx + 1}</span>
                {item.title.split("(")[0].trim()}
              </span>
            ))}
          </div>
        </div>

        {/* Nút Xem Thống Kê Chi Tiết */}
        <div className="shrink-0">
          <button
            onClick={onOpenDetails}
            aria-label="Xem bảng thống kê truy cập chi tiết"
            className="px-3 py-1.5 rounded-xl bg-[#20150F] hover:bg-[#2F1D14] border border-[#E2B743]/40 hover:border-[#E2B743] text-amber-200 hover:text-white transition flex items-center gap-1.5 font-medium cursor-pointer shadow-sm"
          >
            <BarChart2 className="w-3.5 h-3.5 text-[#E2B743]" />
            <span>Thống kê chi tiết</span>
          </button>
        </div>
      </div>
    </div>
  );
};
