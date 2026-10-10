import React from "react";
import Link from "next/link";
import { Compass, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#2A0E0A] text-[#FBF9F5] flex items-center justify-center p-4">
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#F5D06C]/40 bg-[#1C0D08]/95 max-w-lg w-full text-center space-y-6 shadow-2xl animate-fadeIn">
        <div className="w-16 h-16 rounded-2xl bg-[#F5D06C]/15 border border-[#F5D06C]/40 text-[#F5D06C] flex items-center justify-center mx-auto shadow-lg">
          <Compass className="w-8 h-8 text-[#F5D06C]" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold uppercase text-[#F5D06C] tracking-widest block">
            Lỗi 404 • Lạc Bước Hành Trình
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white gold-gradient">
            Không Tìm Thấy Trang Yêu Cầu
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-serif leading-relaxed">
            Đường dẫn võ học này không tồn tại hoặc đã được quy hoạch vào các phân hệ chính thức của môn phái.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#F5D06C] hover:bg-[#E2B743] text-[#2A0E0A] font-bold text-sm transition shadow-lg shadow-[#F5D06C]/20"
          >
            <Home className="w-4 h-4" />
            <span>Quay Về Trang Chủ Võ Đường</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
