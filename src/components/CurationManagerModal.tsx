"use client";

import React, { useState, useMemo, useRef } from "react";
import Image from "next/image";
import {
  X,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Download,
  Upload,
  Search,
  Sparkles,
  Layers,
  AlertTriangle,
  Eye,
  Filter,
} from "lucide-react";
import { Technique } from "@/data/techniques";
import originalImageQaData from "@/data/original_image_qa.json";

export interface OriginalImageQaItem {
  code: string;
  name: string;
  status: "eligible" | "warning" | "rejected_source";
  qualityScore: number;
  resolution: string;
  laplacianVar: number;
  handClarity: string;
  kneeClarity: string;
  feetClarity: string;
  unclearPoints: string[];
  recommendation: string;
}

const originalImageQa = originalImageQaData as Record<string, OriginalImageQaItem>;

export type CurationStatus = "approved" | "rejected" | "pending";

export interface CurationRecord {
  status: CurationStatus;
  note?: string;
  updatedAt: string;
}

export interface Hyper3DItem {
  code: string;
  name: string;
  img3d: string;
  auditImg: string;
  iou: string;
  stanceDiff: string;
  elbowDiff: string;
  note: string;
}

interface CurationManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  allTechniques: Technique[];
  curationMap: Record<string, CurationRecord>;
  onSetCuration: (techId: string, techCode: string, status: CurationStatus, note?: string) => void;
  onBatchUpdateCuration?: (newMap: Record<string, CurationRecord>) => void;
  onSelectTechnique: (tech: Technique) => void;
  hyper3dAssets: Record<string, Hyper3DItem>;
}

export const CurationManagerModal: React.FC<CurationManagerModalProps> = ({
  isOpen,
  onClose,
  allTechniques,
  curationMap,
  onSetCuration,
  onBatchUpdateCuration,
  onSelectTechnique,
  hyper3dAssets,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTab, setFilterTab] = useState<"all" | "has3d" | "approved" | "rejected" | "pending" | "rejected_source">("all");
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Tính toán thống kê
  const stats = useMemo(() => {
    let total = allTechniques.length;
    let has3dCount = 0;
    let approvedCount = 0;
    let rejectedCount = 0;
    let pendingCount = 0;
    let rejectedSourceCount = 0;

    allTechniques.forEach((t) => {
      const has3d = !!(hyper3dAssets[t.id] || hyper3dAssets[t.code]);
      if (has3d) has3dCount++;

      const record = curationMap[t.id] || curationMap[t.code];
      const status = record?.status || "pending";

      if (status === "approved") approvedCount++;
      else if (status === "rejected") rejectedCount++;
      else pendingCount++;

      const qa = originalImageQa[t.code] || originalImageQa[t.id];
      if (qa?.status === "rejected_source") {
        rejectedSourceCount++;
      }
    });

    return { total, has3dCount, approvedCount, rejectedCount, pendingCount, rejectedSourceCount };
  }, [allTechniques, curationMap, hyper3dAssets]);

  // Lọc danh sách chiêu thức
  const filteredTechniques = useMemo(() => {
    return allTechniques.filter((t) => {
      // Tìm kiếm theo tên hoặc mã
      const matchesSearch =
        t.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (t.sectionName && t.sectionName.toLowerCase().includes(searchTerm.toLowerCase()));

      if (!matchesSearch) return false;

      const has3d = !!(hyper3dAssets[t.id] || hyper3dAssets[t.code]);
      const record = curationMap[t.id] || curationMap[t.code];
      const status = record?.status || "pending";
      const qa = originalImageQa[t.code] || originalImageQa[t.id];

      if (filterTab === "has3d") return has3d;
      if (filterTab === "approved") return status === "approved";
      if (filterTab === "rejected") return status === "rejected";
      if (filterTab === "pending") return status === "pending";
      if (filterTab === "rejected_source") return qa?.status === "rejected_source";

      return true;
    });
  }, [allTechniques, searchTerm, filterTab, curationMap, hyper3dAssets]);

  // Xuất tệp JSON danh sách bị loại bỏ để hệ thống AI sinh lại (Re-gen Queue)
  const handleExportRejectedQueue = () => {
    const rejectedItems = allTechniques
      .filter((t) => {
        const record = curationMap[t.id] || curationMap[t.code];
        return record?.status === "rejected";
      })
      .map((t) => {
        const record = curationMap[t.id] || curationMap[t.code];
        const has3dData = hyper3dAssets[t.id] || hyper3dAssets[t.code];
        return {
          id: t.id,
          code: t.code,
          name: t.name,
          sectionName: t.sectionName || t.formName,
          curationNote: record?.note || "Không đảm bảo chất lượng, bị khác hoàn toàn so với ảnh gốc",
          rejectedAt: record?.updatedAt || new Date().toISOString(),
          currentMetrics: {
            iou: has3dData?.iou || "N/A",
            stanceDiff: has3dData?.stanceDiff || "N/A",
            elbowDiff: has3dData?.elbowDiff || "N/A",
          },
          reconstructionGuidance: {
            strictStanceConstraint:
              "Bắt buộc Nhị Tự Kiềm Dương Tấn: 2 đầu gối chùng sâu ép chặt/chụm sát vào nhau (knees clamped tightly inward), khoảng cách 2 mũi chân hẹp hướng vào trong hình chữ Bát, che kín 100% vùng hạ bộ.",
            strictHeadGazeConstraint:
              "Mặt và nhãn quang khóa thẳng phía trước nhìn thẳng vào camera theo trục Tý Ngọ Tuyến (centerline gaze lock), không xoay lệch hướng nhìn theo chuyển động của vai.",
          },
        };
      });

    const exportPayload = {
      title: "Hàng Đợi Tái Tạo Hình Ảnh 3D Võ Học (Re-generation Queue)",
      discipline: "Phật Gia Vịnh Xuân Quyền",
      exportedAt: new Date().toISOString(),
      totalRejected: rejectedItems.length,
      instructions:
        "Tập tin này chứa danh sách các thế võ đã bị Hội đồng Thẩm định Môn phái Loại Bỏ do sai lệch hình thể. Sử dụng danh sách này làm đầu vào cho công cụ batch_hyper_reconstructor.py để tinh chỉnh prompt và sinh lại ảnh chuẩn xác 100%.",
      items: rejectedItems,
    };

    const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `pgvx_curation_rejected_queue_${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Xuất toàn bộ Curation Map hiện tại
  const handleExportFullCurationMap = () => {
    const blob = new Blob([JSON.stringify(curationMap, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `pgvx_curation_full_state_${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Nạp Curation Map từ tệp JSON
  const handleImportCuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target?.result as string);
        if (imported && typeof imported === "object") {
          const merged = { ...curationMap, ...imported };
          if (onBatchUpdateCuration) {
            onBatchUpdateCuration(merged);
          } else {
            Object.keys(imported).forEach((key) => {
              const item = imported[key];
              if (item && item.status) {
                onSetCuration(key, key, item.status, item.note);
              }
            });
          }
          alert(`Đã nạp thành công ${Object.keys(imported).length} bản ghi kiểm định!`);
        }
      } catch {
        alert("Lỗi: Tệp JSON không hợp lệ.");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/95 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-6xl w-full bg-[#080C14] border border-[#D4AF37]/50 rounded-2xl p-5 sm:p-6 shadow-2xl space-y-5 my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#1E293B] pb-4 shrink-0">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40 text-xs font-bold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Trung Tâm Kiểm Định Chất Lượng Hình Ảnh
              </span>
              <span className="text-xs font-mono text-slate-400">V-AOF QA Verification Engine</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-serif tracking-wide">
              Bảng Quản Lý & Phê Duyệt 108 Hình Võ Học Phật Gia Vịnh Xuân
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Kiểm duyệt từng chiêu thức: <strong className="text-emerald-400">Giữ Lại</strong> nếu đạt chuẩn võ học hoặc <strong className="text-red-400">Loại Bỏ</strong> nếu bị khác hoàn toàn so với ảnh tư liệu gốc 2012.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Thống kê Tổng quan (Cards Grid) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 shrink-0">
          <div className="bg-[#111722] p-2.5 rounded-xl border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 block mb-0.5">Tổng Số Chiêu</span>
            <span className="text-xl font-bold font-mono text-white">{stats.total}</span>
            <span className="text-[9px] text-slate-500 block mt-0.5">108 Chiêu thức</span>
          </div>

          <div className="bg-[#111722] p-2.5 rounded-xl border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 block mb-0.5">Đã Có Mô Hình 3D</span>
            <span className="text-xl font-bold font-mono text-[#D4AF37]">{stats.has3dCount}</span>
            <span className="text-[9px] text-slate-500 block mt-0.5">Tái tạo siêu thực</span>
          </div>

          <div className="bg-emerald-950/30 p-2.5 rounded-xl border border-emerald-500/40 text-center">
            <span className="text-[10px] text-emerald-300 block mb-0.5">Đã Duyệt Giữ</span>
            <span className="text-xl font-bold font-mono text-emerald-400">{stats.approvedCount}</span>
            <span className="text-[9px] text-emerald-500 block mt-0.5">Đạt chuẩn võ học</span>
          </div>

          <div className="bg-red-950/30 p-2.5 rounded-xl border border-red-500/40 text-center">
            <span className="text-[10px] text-red-300 block mb-0.5">Đã Loại Bỏ</span>
            <span className="text-xl font-bold font-mono text-red-400">{stats.rejectedCount}</span>
            <span className="text-[9px] text-red-500 block mt-0.5">Cần AI sinh lại</span>
          </div>

          <div className="bg-amber-950/30 p-2.5 rounded-xl border border-amber-500/40 text-center">
            <span className="text-[10px] text-amber-300 block mb-0.5">Chờ Thẩm Định</span>
            <span className="text-xl font-bold font-mono text-amber-300">{stats.pendingCount}</span>
            <span className="text-[9px] text-amber-500 block mt-0.5">Chưa phân loại</span>
          </div>

          <div className="bg-red-950/50 p-2.5 rounded-xl border border-red-500/60 text-center">
            <span className="text-[10px] text-rose-300 font-bold block mb-0.5">🚫 Gốc Không Đạt</span>
            <span className="text-xl font-bold font-mono text-rose-400">{stats.rejectedSourceCount}</span>
            <span className="text-[9px] text-rose-400/80 block mt-0.5">Từ chối tạo 3D</span>
          </div>
        </div>

        {/* Action Bar: Tìm kiếm, Bộ lọc & Nút Xuất File */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 shrink-0 bg-[#0D131F] p-3 rounded-xl border border-slate-800">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm theo tên chiêu, mã chiêu, phân đoạn..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-[#111722] border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 text-xs">
            <button
              onClick={() => setFilterTab("all")}
              className={`px-2.5 py-1.5 rounded-lg font-medium transition ${
                filterTab === "all" ? "bg-[#D4AF37] text-black font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              Tất cả ({stats.total})
            </button>
            <button
              onClick={() => setFilterTab("has3d")}
              className={`px-2.5 py-1.5 rounded-lg font-medium transition flex items-center gap-1 ${
                filterTab === "has3d" ? "bg-amber-500 text-black font-bold" : "text-slate-400 hover:text-white"
              }`}
            >
              <Sparkles className="w-3 h-3" /> Có 3D ({stats.has3dCount})
            </button>
            <button
              onClick={() => setFilterTab("approved")}
              className={`px-2.5 py-1.5 rounded-lg font-medium transition ${
                filterTab === "approved" ? "bg-emerald-500 text-black font-bold" : "text-slate-400 hover:text-emerald-300"
              }`}
            >
              Đã Duyệt ({stats.approvedCount})
            </button>
            <button
              onClick={() => setFilterTab("rejected")}
              className={`px-2.5 py-1.5 rounded-lg font-medium transition ${
                filterTab === "rejected" ? "bg-red-500 text-black font-bold" : "text-slate-400 hover:text-red-300"
              }`}
            >
              Đã Loại Bỏ ({stats.rejectedCount})
            </button>
            <button
              onClick={() => setFilterTab("pending")}
              className={`px-2.5 py-1.5 rounded-lg font-medium transition ${
                filterTab === "pending" ? "bg-amber-600 text-black font-bold" : "text-slate-400 hover:text-amber-300"
              }`}
            >
              Chờ Duyệt ({stats.pendingCount})
            </button>
            <button
              onClick={() => setFilterTab("rejected_source")}
              className={`px-2.5 py-1.5 rounded-lg font-medium transition flex items-center gap-1 ${
                filterTab === "rejected_source" ? "bg-red-600 text-white font-bold" : "text-rose-400 hover:text-rose-300"
              }`}
            >
              <AlertTriangle className="w-3 h-3" /> Gốc Không Đạt ({stats.rejectedSourceCount})
            </button>
          </div>

          {/* Export / Import Buttons */}
          <div className="flex items-center gap-2">
            {stats.rejectedCount > 0 && (
              <button
                onClick={handleExportRejectedQueue}
                className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white text-xs font-bold flex items-center gap-1.5 transition shadow-lg shadow-red-600/20"
                title="Tải xuống tệp JSON chứa danh sách các chiêu bị loại bỏ để AI sinh lại"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Xuất Cần Sinh Lại ({stats.rejectedCount})</span>
              </button>
            )}

            <button
              onClick={handleExportFullCurationMap}
              className="px-3 py-1.5 rounded-lg bg-[#111722] hover:bg-[#1A2333] text-slate-300 border border-slate-700 text-xs font-medium flex items-center gap-1.5 transition"
              title="Xuất tệp JSON lưu toàn bộ trạng thái kiểm định"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Xuất Bản Lưu</span>
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="px-3 py-1.5 rounded-lg bg-[#111722] hover:bg-[#1A2333] text-slate-300 border border-slate-700 text-xs font-medium flex items-center gap-1.5 transition"
              title="Nạp tệp JSON kiểm định từ thiết bị khác"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Nạp Tệp</span>
            </button>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImportCuration}
              accept=".json"
              className="hidden"
            />
          </div>
        </div>

        {/* Danh Sách Chiêu Thức (Scrollable Area) */}
        <div className="flex-1 overflow-y-auto space-y-2 pr-1 min-h-[300px]">
          {filteredTechniques.length === 0 ? (
            <div className="py-12 text-center text-slate-500 text-sm">
              Không tìm thấy chiêu thức nào phù hợp với bộ lọc hiện tại.
            </div>
          ) : (
            filteredTechniques.map((tech) => {
              const has3d = hyper3dAssets[tech.id] || hyper3dAssets[tech.code];
              const record = curationMap[tech.id] || curationMap[tech.code];
              const status: CurationStatus = record?.status || "pending";
              const firstStepImg = tech.steps?.[0]?.imgUrl || "/assets/images/techniques/series/fig_1_1.png";
              const qa = originalImageQa[tech.code] || originalImageQa[tech.id];
              const isSourceRejected = qa?.status === "rejected_source";

              return (
                <div
                  key={tech.id}
                  className={`p-3 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition ${
                    isSourceRejected
                      ? "bg-rose-950/15 border-rose-900/50"
                      : status === "approved"
                      ? "bg-emerald-950/20 border-emerald-500/30"
                      : status === "rejected"
                      ? "bg-red-950/20 border-red-500/30"
                      : "bg-[#111722]/80 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  {/* Left: Chi tiết chiêu và Thumbnail song song */}
                  <div className="flex items-start gap-3 flex-1 min-w-0">
                    {/* Thumbnails: Ảnh gốc & Ảnh 3D (nếu có) */}
                    <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                      {/* Ảnh Gốc */}
                      <div
                        className={`relative w-12 h-14 rounded-lg overflow-hidden bg-white border shadow cursor-pointer group ${
                          isSourceRejected ? "border-rose-500 ring-1 ring-rose-500/50" : "border-slate-600"
                        }`}
                        onClick={() => {
                          onSelectTechnique(tech);
                          onClose();
                        }}
                        title={isSourceRejected ? "Ảnh gốc không đạt chuẩn - Từ chối tái tạo 3D" : "Bấm để xem chiêu này"}
                      >
                        <Image
                          src={firstStepImg}
                          alt={tech.name}
                          fill
                          sizes="48px"
                          className="object-contain"
                        />
                        <span className={`absolute bottom-0 right-0 px-1 py-0.2 text-[8px] font-mono ${
                          isSourceRejected ? "bg-rose-600 text-white font-bold" : "bg-black/80 text-slate-300"
                        }`}>
                          {isSourceRejected ? "Lỗi Gốc" : "Gốc"}
                        </span>
                      </div>

                      {/* Ảnh 3D Siêu Thực nếu có */}
                      {has3d ? (
                        <div
                          className="relative w-12 h-14 rounded-lg overflow-hidden bg-white border border-[#D4AF37] shadow cursor-pointer"
                          onClick={() => {
                            onSelectTechnique(tech);
                            onClose();
                          }}
                          title="Bấm để xem mô hình 3D của chiêu này"
                        >
                          <Image
                            src={has3d.img3d}
                            alt={tech.name}
                            fill
                            sizes="48px"
                            className="object-contain"
                          />
                          <span className="absolute bottom-0 right-0 px-1 py-0.2 bg-amber-600 text-[8px] text-black font-bold font-mono">
                            3D
                          </span>
                        </div>
                      ) : (
                        <div className="w-12 h-14 rounded-lg bg-slate-900 border border-dashed border-slate-800 flex items-center justify-center text-[9px] text-slate-600 font-mono text-center px-1">
                          {isSourceRejected ? "Không tạo" : "Chưa có 3D"}
                        </div>
                      )}
                    </div>

                    {/* Metadata chiêu thức & QA Details */}
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[11px] px-1.5 py-0.5 rounded bg-slate-800 text-[#D4AF37] font-bold border border-slate-700">
                          {tech.code}
                        </span>
                        <h4
                          onClick={() => {
                            onSelectTechnique(tech);
                            onClose();
                          }}
                          className="text-sm font-bold text-white hover:text-[#D4AF37] cursor-pointer transition line-clamp-1"
                        >
                          {tech.name}
                        </h4>

                        {/* Badges Thẩm định Ảnh Gốc */}
                        {qa?.status === "rejected_source" && (
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-rose-950/80 text-rose-300 font-bold border border-rose-600/60 flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3 text-rose-400" /> 🚫 Từ Chối 3D (Ảnh Gốc Không Đạt)
                          </span>
                        )}
                        {qa?.status === "warning" && (
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 font-medium border border-amber-600/50 flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3 text-amber-400" /> ⚠️ Cảnh Báo Ảnh Gốc Mờ
                          </span>
                        )}
                        {qa?.status === "eligible" && (
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 font-medium border border-emerald-600/50 flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3 text-emerald-400" /> 🟢 Ảnh Gốc Rõ Nét
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <span>{tech.sectionName || tech.formName}</span>
                        {has3d && (
                          <>
                            <span>•</span>
                            <span className="text-[#10B981] font-mono font-bold text-[11px]">
                              IoU: {has3d.iou}
                            </span>
                            <span>•</span>
                            <span className="text-[#D4AF37] font-mono text-[11px]">
                              &Delta; Tấn: {has3d.stanceDiff}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Hiển thị chi tiết các điểm không nhìn rõ trong ảnh gốc */}
                      {qa?.unclearPoints && qa.unclearPoints.length > 0 && (
                        <div className="mt-1 p-2 rounded-lg bg-black/40 border border-slate-800/80 text-[11px] space-y-1">
                          <div className="flex items-center gap-1.5 font-semibold text-slate-300">
                            <AlertTriangle className={`w-3.5 h-3.5 shrink-0 ${isSourceRejected ? "text-rose-400" : "text-amber-400"}`} />
                            <span className={isSourceRejected ? "text-rose-300" : "text-amber-300"}>
                              Điểm không nhìn rõ trong ảnh tư liệu gốc ({qa.resolution}, nét: {qa.laplacianVar}):
                            </span>
                          </div>
                          <ul className="list-disc pl-4 space-y-0.5 text-slate-400 text-[11px]">
                            {qa.unclearPoints.map((pt, idx) => (
                              <li key={idx} className={isSourceRejected ? "text-rose-200/90" : "text-slate-300"}>
                                {pt}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {record?.note && (
                        <p className="text-[11px] text-slate-300 italic line-clamp-1">
                          Ghi chú duyệt: {record.note}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right: Hành động kiểm duyệt (Approved / Rejected / Reset) */}
                  <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                    <button
                      onClick={() =>
                        onSetCuration(
                          tech.id,
                          tech.code,
                          "approved",
                          "Đạt chuẩn giải phẫu võ học, tư thế tấn Kiềm Dương và nhãn quang Tý Ngọ Tuyến"
                        )
                      }
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition border ${
                        status === "approved"
                          ? "bg-emerald-600 text-white border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                          : "bg-emerald-950/40 hover:bg-emerald-900/60 text-emerald-300 border-emerald-700/50"
                      }`}
                      title="Đạt chuẩn võ học, đồng ý giữ hình"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Giữ Hình</span>
                    </button>

                    <button
                      onClick={() =>
                        onSetCuration(
                          tech.id,
                          tech.code,
                          "rejected",
                          "Không đạt chuẩn chất lượng võ học (khác biệt ảnh gốc, tư thế chân hoặc hướng nhìn sai)"
                        )
                      }
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition border ${
                        status === "rejected"
                          ? "bg-red-600 text-white border-red-400 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                          : "bg-red-950/40 hover:bg-red-900/60 text-red-300 border-red-700/50"
                      }`}
                      title="Không đảm bảo chất lượng, loại bỏ hình này và đưa vào danh sách sinh lại"
                    >
                      <XCircle className="w-3.5 h-3.5" />
                      <span>Loại Bỏ</span>
                    </button>

                    {status !== "pending" && (
                      <button
                        onClick={() => onSetCuration(tech.id, tech.code, "pending")}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
                        title="Đặt lại về trạng thái chờ thẩm định"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                    )}

                    <button
                      onClick={() => {
                        onSelectTechnique(tech);
                        onClose();
                      }}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1 transition"
                      title="Mở chiêu này trong trình luyện tập"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span className="hidden md:inline">Vào Luyện</span>
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#1E293B] pt-4 shrink-0 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Hệ thống tự động lưu trạng thái vào trình duyệt (localStorage).</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold transition"
            >
              Đóng Cửa Sổ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
