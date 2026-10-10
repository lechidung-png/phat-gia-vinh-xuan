"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

interface ErrorBoundaryProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    // Ghi nhận lỗi nội bộ để phục vụ theo dõi và khắc phục
    console.error("Lỗi giao diện ứng dụng:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center p-4">
      <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[#F5D06C]/40 bg-[#1C0D08]/95 max-w-lg w-full text-center space-y-6 shadow-2xl animate-fadeIn">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/15 border border-amber-500/40 text-[#F5D06C] flex items-center justify-center mx-auto shadow-lg">
          <AlertTriangle className="w-8 h-8 text-[#F5D06C]" />
        </div>

        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-white gold-gradient">
            Đã Xảy Ra Gián Đoạn Kỹ Thuật
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-serif leading-relaxed">
            Hệ thống võ đường gặp sự cố tải trang tạm thời. Vui lòng bấm thử lại để tái khởi động không gian võ học.
          </p>
          {error.digest && (
            <p className="text-[10px] font-mono text-amber-200/50">
              Mã theo dõi: {error.digest}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-[#F5D06C] hover:bg-[#E2B743] text-[#2A0E0A] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition cursor-pointer shadow-lg shadow-[#F5D06C]/20"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Thử Lại</span>
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-2xl bg-[#20150F] hover:bg-[#2F1C14] text-amber-200 border border-[#F5D06C]/30 font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition"
          >
            <Home className="w-4 h-4" />
            <span>Về Trang Chủ</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
