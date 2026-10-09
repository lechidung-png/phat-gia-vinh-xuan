"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Search,
  Filter,
  ChevronRight,
  BookOpen,
  Swords,
  FileText,
  CheckCircle2,
  X,
  Bookmark,
  Clock,
} from "lucide-react";
import { Technique, SECTIONS_CATALOG } from "@/data/techniques";
import { MONOGRAPHS, MonographSection } from "@/data/monographs";
import { removeVietnameseAccents } from "@/lib/searchEngine";

interface KnowledgeHubProps {
  techniques: Technique[];
  onSelectTechnique: (tech: Technique) => void;
}

export const KnowledgeHub: React.FC<KnowledgeHubProps> = ({
  techniques,
  onSelectTechnique,
}) => {
  const [hubMode, setHubMode] = useState<"techniques" | "monographs">("techniques");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSection, setSelectedSection] = useState("all");
  const [selectedStance, setSelectedStance] = useState("all");
  const [selectedHand, setSelectedHand] = useState("all");
  const [onlyBookmarks, setOnlyBookmarks] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    try {
      const saved = localStorage.getItem("pgvx_bookmarks");
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Ignore
    }
    return [];
  });
  const [selectedMonograph, setSelectedMonograph] = useState<MonographSection | null>(null);

  const toggleBookmark = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    try {
      let updated: string[];
      if (bookmarkedIds.includes(id)) {
        updated = bookmarkedIds.filter((item) => item !== id);
      } else {
        updated = [...bookmarkedIds, id];
      }
      setBookmarkedIds(updated);
      localStorage.setItem("pgvx_bookmarks", JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  // Bộ lọc đa chiều tối ưu
  const filteredTechniques = useMemo(() => {
    const normQuery = removeVietnameseAccents(searchQuery);

    return techniques.filter((t) => {
      // 1. Khớp từ khóa tìm kiếm
      if (normQuery) {
        const normCode = removeVietnameseAccents(t.code);
        const normName = removeVietnameseAccents(t.name);
        const normSummary = removeVietnameseAccents(t.summary);
        const normCombat = removeVietnameseAccents(t.combatApplication || "");
        const normInstructor = removeVietnameseAccents(t.instructor || "");
        const normStances = removeVietnameseAccents(t.stances.join(" "));
        const normHands = removeVietnameseAccents(t.hands.join(" "));

        const match =
          normCode.includes(normQuery) ||
          normName.includes(normQuery) ||
          normSummary.includes(normQuery) ||
          normCombat.includes(normQuery) ||
          normInstructor.includes(normQuery) ||
          normStances.includes(normQuery) ||
          normHands.includes(normQuery);

        if (!match) return false;
      }

      // 2. Khớp phân đoạn
      if (selectedSection !== "all" && t.sectionId !== selectedSection) {
        return false;
      }

      // 3. Khớp tấn pháp
      if (selectedStance === "kiem-duong" && !t.isNarrowStance) {
        return false;
      }

      // 4. Khớp thủ pháp
      if (selectedHand !== "all") {
        const hasHand = t.hands.some((h) => {
          const nh = removeVietnameseAccents(h);
          return nh.includes(selectedHand);
        });
        if (!hasHand) return false;
      }

      // 5. Khớp Bookmarks
      if (onlyBookmarks && !bookmarkedIds.includes(t.id)) {
        return false;
      }

      return true;
    });
  }, [
    techniques,
    searchQuery,
    selectedSection,
    selectedStance,
    selectedHand,
    onlyBookmarks,
    bookmarkedIds,
  ]);

  return (
    <div className="space-y-6">
      {/* Top Mode Switcher Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#3D291F] pb-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setHubMode("techniques")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition ${
              hubMode === "techniques"
                ? "bg-[#E2B743] text-[#140C08] shadow-md shadow-[#E2B743]/20"
                : "bg-[#20150F] text-slate-300 border border-[#3D291F] hover:border-slate-500"
            }`}
          >
            <Swords className="w-4 h-4" />
            Tra Cứu Chiêu Thức ({techniques.length})
          </button>

          <button
            onClick={() => setHubMode("monographs")}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition ${
              hubMode === "monographs"
                ? "bg-[#E2B743] text-[#140C08] shadow-md shadow-[#E2B743]/20"
                : "bg-[#20150F] text-slate-300 border border-[#3D291F] hover:border-slate-500"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Tàng Kinh Các (225 Trang)
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-400">
          <FileText className="w-4 h-4 text-[#E2B743]" />
          <span>Ấn bản gốc 2012 • GS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức</span>
        </div>
      </div>

      {hubMode === "techniques" ? (
        <>
          {/* Search & Filter Header Box */}
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-[#3D291F] space-y-4">
            
            {/* Search Input Row */}
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <Search className="w-5 h-5 text-[#E2B743] absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm theo tên chiêu, bàng thủ, kiềm dương, chiêu 38, cầm nã, HLV Dũng..."
                  className="w-full pl-12 pr-10 py-3 bg-[#140C08] border border-[#3D291F] rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-[#E2B743] transition"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Bookmark Filter Toggle */}
              <button
                onClick={() => setOnlyBookmarks(!onlyBookmarks)}
                className={`px-3.5 py-3 rounded-xl border text-xs sm:text-sm font-semibold flex items-center gap-2 transition w-full md:w-auto justify-center shrink-0 ${
                  onlyBookmarks
                    ? "bg-[#E2B743]/20 border-[#E2B743] text-[#E2B743]"
                    : "bg-[#20150F] border-[#3D291F] text-slate-300 hover:border-slate-500"
                }`}
              >
                <Bookmark className={`w-4 h-4 ${onlyBookmarks ? "fill-[#E2B743]" : ""}`} />
                <span>Chiêu đã lưu ({bookmarkedIds.length})</span>
              </button>
            </div>

            {/* Matrix Filter Pills Row */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#3D291F]/60 text-xs">
              <span className="text-slate-400 flex items-center gap-1 mr-1 font-semibold">
                <Filter className="w-3.5 h-3.5 text-[#E2B743]" /> Phân đoạn:
              </span>

              <button
                onClick={() => setSelectedSection("all")}
                className={`px-3 py-1.5 rounded-lg border transition ${
                  selectedSection === "all"
                    ? "bg-[#E2B743]/20 border-[#E2B743] text-[#E2B743] font-bold"
                    : "bg-[#20150F] border-[#3D291F] text-slate-300 hover:border-slate-600"
                }`}
              >
                Tất cả 108 chiêu
              </button>

              {SECTIONS_CATALOG.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => setSelectedSection(sec.id)}
                  className={`px-3 py-1.5 rounded-lg border transition ${
                    selectedSection === sec.id
                      ? "bg-[#E2B743]/20 border-[#E2B743] text-[#E2B743] font-bold"
                      : "bg-[#20150F] border-[#3D291F] text-slate-300 hover:border-slate-600"
                  }`}
                >
                  {sec.name.replace("Phân đoạn ", "Đoạn ")} ({sec.count})
                </button>
              ))}
            </div>

            {/* Hand Techniques Sub-filters */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 mr-1 font-semibold">Thủ pháp:</span>
              {[
                { id: "all", name: "Tất cả" },
                { id: "bang thu", name: "Bàng Thủ" },
                { id: "than thu", name: "Than Thủ" },
                { id: "phuc thu", name: "Phục Thủ" },
                { id: "xia thu", name: "Xỉa Thủ" },
                { id: "chuong", name: "Chưởng Pháp" },
                { id: "tram", name: "Trảm Thủ" },
                { id: "co tay", name: "Cổ Tay" },
              ].map((h) => (
                <button
                  key={h.id}
                  onClick={() => setSelectedHand(h.id)}
                  className={`px-2.5 py-1 rounded-md border text-[11px] transition ${
                    selectedHand === h.id
                      ? "bg-[#C27D38]/30 border-[#C27D38] text-[#FDF3D6] font-bold"
                      : "bg-[#140C08] border-[#3D291F] text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {h.name}
                </button>
              ))}
            </div>

            {/* Stance Filter Sub-filters */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-slate-400 mr-1 font-semibold">Tấn pháp:</span>
              {[
                { id: "all", name: "Tất cả tấn" },
                { id: "kiem-duong", name: "Kiềm Dương Tấn Hẹp" },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedStance(s.id)}
                  className={`px-2.5 py-1 rounded-md border text-[11px] transition ${
                    selectedStance === s.id
                      ? "bg-[#C27D38]/30 border-[#C27D38] text-[#FDF3D6] font-bold"
                      : "bg-[#140C08] border-[#3D291F] text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>

          </div>

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>
              Tìm thấy <strong className="text-[#E2B743]">{filteredTechniques.length}</strong> / 108 chiêu thức
            </span>
            {(searchQuery || selectedSection !== "all" || selectedHand !== "all" || selectedStance !== "all" || onlyBookmarks) && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedSection("all");
                  setSelectedHand("all");
                  setSelectedStance("all");
                  setOnlyBookmarks(false);
                }}
                className="text-[#E2B743] hover:underline"
              >
                Đặt lại bộ lọc
              </button>
            )}
          </div>

          {/* Grid of 108 Techniques */}
          {filteredTechniques.length === 0 ? (
            <div className="glass-panel p-12 rounded-2xl border border-[#3D291F] text-center space-y-3">
              <p className="text-slate-300 text-sm font-semibold">
                Không tìm thấy chiêu thức nào khớp với tiêu chí tìm kiếm.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedSection("all");
                  setSelectedHand("all");
                  setOnlyBookmarks(false);
                }}
                className="px-4 py-2 rounded-xl bg-[#E2B743] text-[#140C08] text-xs font-bold"
              >
                Xem lại toàn bộ 108 chiêu
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredTechniques.map((tech) => {
                const isSaved = bookmarkedIds.includes(tech.id);
                const stepCount = tech.steps?.length || 1;

                return (
                  <div
                    key={tech.id}
                    onClick={() => onSelectTechnique(tech)}
                    className="glass-panel hover:bg-[#2A1C14] rounded-2xl p-4 border border-[#3D291F] hover:border-[#E2B743]/60 cursor-pointer transition-all duration-200 flex flex-col justify-between group shadow-lg"
                  >
                    <div>
                      {/* Image Thumbnail Stage - Clean Pure White #FFFFFF */}
                      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white mb-3 border border-slate-200 shadow-inner flex items-center justify-center">
                        {tech.steps?.[0]?.imgUrl ? (
                          <div className="relative w-full h-full p-2">
                            <Image
                              src={tech.steps[0].imgUrl}
                              alt={tech.name}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                              className="object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        ) : null}

                        {/* Top Badges */}
                        <div className="absolute top-2 left-2 flex items-center gap-1.5">
                          <span className="px-2 py-0.5 rounded bg-[#140C08]/85 text-[#E2B743] font-mono text-[10px] font-bold border border-white/10 backdrop-blur">
                            {tech.code.replace("_", " ")}
                          </span>
                        </div>

                        {/* Bookmark Button */}
                        <button
                          onClick={(e) => toggleBookmark(e, tech.id)}
                          className="absolute top-2 right-2 p-1.5 rounded-lg bg-[#140C08]/85 text-slate-300 hover:text-[#E2B743] border border-white/10 backdrop-blur transition"
                          title="Lưu yêu thích"
                        >
                          <Bookmark className={`w-3.5 h-3.5 ${isSaved ? "fill-[#E2B743] text-[#E2B743]" : ""}`} />
                        </button>

                        {/* Bottom Tag */}
                        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px]">
                          <span className="px-2 py-0.5 rounded bg-[#140C08]/85 text-slate-300 font-mono backdrop-blur">
                            {stepCount} bước động tác
                          </span>
                          {tech.isTwoPerson && (
                            <span className="px-1.5 py-0.5 rounded bg-[#DC2626]/90 text-white font-bold backdrop-blur">
                              2 Người
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Technique Title & Info */}
                      <div className="space-y-1">
                        <h4 className="font-bold text-sm text-white group-hover:text-[#E2B743] transition line-clamp-1 font-serif">
                          {tech.name}
                        </h4>
                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                          {tech.summary}
                        </p>
                      </div>
                    </div>

                    {/* Footer Info */}
                    <div className="pt-3 mt-3 border-t border-[#3D291F] flex items-center justify-between text-[11px] text-slate-400">
                      <span className="truncate max-w-[130px]">{tech.instructor || "HLV Môn Phái"}</span>
                      <div className="flex items-center gap-1 text-[#E2B743] font-semibold">
                        <span>Luyện tập</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      ) : (
        /* Tab Chuyên Đề Tàng Kinh Các (Toàn văn 13 bài khảo cứu 225 trang) */
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-[#3D291F] space-y-2">
            <h3 className="text-lg font-bold font-serif gold-gradient flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#E2B743]" />
              Kho Tàng Khảo Cứu Võ Học Kinh Điển
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Toàn bộ các chương mục lý thuyết, nguyên lý y võ, phương pháp luyện khí đan điền, cấu tạo huyệt đạo và lịch sử chân truyền trích lục từ công trình nghiên cứu của GS.TS Y khoa Nguyễn Mạnh Nhâm và ThS.DS Nguyễn Duy Thức.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {MONOGRAPHS.map((mono) => (
              <div
                key={mono.id}
                onClick={() => setSelectedMonograph(mono)}
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
      )}

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
