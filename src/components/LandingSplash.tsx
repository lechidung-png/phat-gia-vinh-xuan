import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

interface LandingSplashProps {
  onEnter: () => void;
}

export const LandingSplash: React.FC<LandingSplashProps> = ({ onEnter }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A0604] overflow-hidden selection:bg-[#E2B743]/30">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#3D291F]/40 via-[#0A0604] to-[#0A0604]"></div>
        
        {/* Subtle animated light beams/centerline */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#E2B743]/10 to-transparent shadow-[0_0_15px_rgba(226,183,67,0.15)] opacity-50"></div>
        
        {/* Abstract animated dust/particles (using pure CSS gradient) */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#E2B743_1px,transparent_1px)] [background-size:24px_24px] mix-blend-overlay"></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 flex flex-col items-center text-center transition-all duration-1500 ease-out transform ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}>
        
        {/* Giant Calligraphy Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] md:text-[400px] lg:text-[500px] font-black font-serif text-white/[0.02] pointer-events-none select-none tracking-tighter whitespace-nowrap">
          詠春
        </div>

        {/* Central Emblem */}
        <div className="relative w-28 h-28 md:w-36 md:h-36 mb-10 flex items-center justify-center group">
          <div className="absolute inset-0 rounded-full border border-[#E2B743]/20 animate-spin" style={{ animationDuration: '15s' }}></div>
          <div className="absolute inset-2 rounded-full border border-[#E2B743]/40 border-dashed animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#E2B743]/10 to-transparent blur-md group-hover:blur-xl transition-all duration-700"></div>
          <div className="relative z-10 text-5xl md:text-7xl font-serif text-[#E2B743] gold-gradient drop-shadow-[0_0_15px_rgba(226,183,67,0.4)]">
            佛
          </div>
        </div>

        {/* Typography */}
        <div className="space-y-4 mb-14 px-6">
          <p className="text-[#E2B743] uppercase tracking-[0.3em] sm:tracking-[0.5em] text-xs sm:text-sm font-semibold opacity-90">
            Di Sản Võ Học
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white tracking-wide uppercase drop-shadow-2xl">
            Phật Gia <span className="gold-gradient">Vịnh Xuân</span>
          </h1>
          <div className="flex items-center justify-center gap-4 text-slate-400 font-serif italic text-sm md:text-base max-w-lg mx-auto">
            <span>&ldquo;Lai lưu khứ tống&rdquo;</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#E2B743]/50"></span>
            <span>&ldquo;Thoát thủ trực xông&rdquo;</span>
          </div>
        </div>

        {/* Enter Button */}
        <button
          onClick={onEnter}
          aria-label="Khám phá Di Sản Võ Học Phật Gia Vịnh Xuân"
          className="group relative px-8 py-4 bg-transparent outline-none overflow-hidden rounded-full border border-[#E2B743]/50 hover:border-[#E2B743] transition-colors duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#E2B743]/0 via-[#E2B743]/10 to-[#E2B743]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
          <div className="absolute inset-0 bg-[#E2B743]/5 group-hover:bg-[#E2B743]/10 transition-colors duration-500"></div>
          
          <div className="relative flex items-center gap-3 text-[#E2B743] font-semibold tracking-widest uppercase text-sm">
            <span>Khám phá</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
          </div>
        </button>

      </div>

      {/* Footer Meta */}
      <div className={`absolute bottom-8 left-0 right-0 text-center transition-opacity duration-1000 delay-700 ${
        mounted ? "opacity-100" : "opacity-0"
      }`}>
        <p className="text-[10px] sm:text-xs text-slate-500/70 tracking-widest uppercase">
          Tài Liệu Nội Bộ Võ Đường Huỳnh Thúc Kháng
        </p>
      </div>

    </div>
  );
};
