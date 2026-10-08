"use client";

import React from "react";
import { X, ShieldCheck, Check, AlertOctagon } from "lucide-react";

interface StanceCheckerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StanceCheckerModal: React.FC<StanceCheckerModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="w-full max-w-xl bg-[#1D130E] rounded-3xl border border-[#10B981]/50 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#3D291F] bg-[#10B981]/10">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-6 h-6 text-[#10B981]" />
            <h3 className="font-serif font-bold text-lg text-white">
              Quy Chuẩn Tấn Kiềm Dương Phật Gia Vịnh Xuân
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-[#2A1C14]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 text-sm">
          <div className="p-4 rounded-2xl bg-[#140C08] border border-[#3D291F] space-y-2">
            <h4 className="font-bold text-[#E2B743] uppercase text-xs tracking-wider">
              Đặc Trưng Cốt Lõi: Tấn Đứng Chân Hẹp
            </h4>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
              Khác với các môn phái ngoại gia thường đứng trung bình tấn bành rộng hai chân, <strong>Phật Gia Vịnh Xuân</strong> (truyền thừa từ Sư Tổ Nguyễn Tế Công) sử dụng <strong>Nhị Tự Kiềm Dương Tấn (二字鉗羊馬)</strong> với khoảng cách hai chân rất hẹp để tối ưu hóa khả năng luồn lách và bảo vệ tuyệt đối vùng hạ bộ.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Quy chuẩn đúng */}
            <div className="p-4 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 space-y-2.5">
              <h5 className="font-bold text-[#10B981] flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <Check className="w-4 h-4" /> Bắt Buộc Tuân Thủ
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li>• Hai chân đứng sát nhau (hẹp hơn độ rộng vai).</li>
                <li>• Hai mũi chân hơi hướng vào trong hình chữ bát ngửa.</li>
                <li>• Hai đầu gối hơi chùng và khép nhẹ che kín hạ bộ.</li>
                <li>• Lưng giữ thẳng trục đứng, ngực hơi hàm, mông thu.</li>
              </ul>
            </div>

            {/* Điều cấm kỵ */}
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 space-y-2.5">
              <h5 className="font-bold text-red-400 flex items-center gap-1.5 text-xs uppercase tracking-wider">
                <AlertOctagon className="w-4 h-4" /> Tuyệt Đối Tránh
              </h5>
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li>• Không đứng bành rộng hai chân (kỵ mã tấn Thiếu Lâm).</li>
                <li>• Không xoạc rộng làm hở hạ bàn.</li>
                <li>• Không chổng mông hoặc cong võng sống lưng.</li>
                <li>• Không vung cùi chỏ ra ngoài trung tuyến.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#140C08] border-t border-[#3D291F] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#10B981] text-black font-bold text-xs hover:bg-[#10B981]/90 transition"
          >
            Đã Hiểu Quy Chuẩn
          </button>
        </div>

      </div>
    </div>
  );
};
