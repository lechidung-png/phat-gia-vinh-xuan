"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Header, NavTab } from "@/components/Header";
import { WelcomePortal } from "@/components/WelcomePortal";
import { LandingSplash } from "@/components/LandingSplash";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import type { FundamentalSubTab } from "@/components/FundamentalHandFootAtlas";
import type { Technique } from "@/data/techniques";
import type { MonographSection } from "@/data/monographs";
import {
  resolveLessonId,
  resolveScenarioTarget,
  isReadingOnlyLesson,
} from "@/lib/lessonResolver";
import { trackTabChange, trackFormView } from "@/lib/analytics";

// Tách gói (Code-splitting) các phân hệ lớn để giảm tải JS khởi tạo ban đầu
const CurriculumExplorer = dynamic(() =>
  import("@/components/CurriculumExplorer").then((m) => m.CurriculumExplorer)
);
const FundamentalHandFootAtlas = dynamic(() =>
  import("@/components/FundamentalHandFootAtlas").then((m) => m.FundamentalHandFootAtlas)
);
const KnowledgeHub = dynamic(() =>
  import("@/components/KnowledgeHub").then((m) => m.KnowledgeHub)
);
const WoodenDummyCanvas = dynamic(() =>
  import("@/components/WoodenDummyCanvas").then((m) => m.WoodenDummyCanvas)
);
const CenterlineExplorer = dynamic(() =>
  import("@/components/CenterlineExplorer").then((m) => m.CenterlineExplorer)
);
const LineageTree = dynamic(() =>
  import("@/components/LineageTree").then((m) => m.LineageTree)
);
const CombatScenariosExplorer = dynamic(() =>
  import("@/components/CombatScenariosExplorer").then((m) => m.CombatScenariosExplorer)
);
const MeditationQiGongHub = dynamic(() =>
  import("@/components/MeditationQiGongHub").then((m) => m.MeditationQiGongHub)
);
const CommandPalette = dynamic(() =>
  import("@/components/CommandPalette").then((m) => m.CommandPalette)
);

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [activeTab, setActiveTab] = useState<NavTab>("welcome");
  const [selectedFormId, setSelectedFormId] = useState<string>("bai-07");
  const [fundamentalsSubTab, setFundamentalsSubTab] = useState<FundamentalSubTab>("hands");
  const [lineageSubTab, setLineageSubTab] = useState<"tree" | "philosophy">("tree");
  const [initialMotionIndex, setInitialMotionIndex] = useState<number>(0);
  const [libraryLessonId, setLibraryLessonId] = useState<string | null>(null);
  const [selectedMonograph, setSelectedMonograph] = useState<MonographSection | null>(null);
  const [navigationSeq, setNavigationSeq] = useState<number>(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Đọc query parameters từ URL khi mở trang (hỗ trợ cả ?step=1..N lẫn ?motion=0..N-1 và chương đọc toàn văn)
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const params = new URLSearchParams(window.location.search);
      const lessonParam = params.get("lesson");
      const stepParam = params.get("step");
      const motionParam = params.get("motion");
      const tabParam = params.get("tab") as NavTab | null;

      if (lessonParam) {
        setHasEntered(true);
        const resolvedId = resolveLessonId(lessonParam);

        if (isReadingOnlyLesson(resolvedId) && tabParam !== "forms") {
          setActiveTab("fundamentals");
          setFundamentalsSubTab("theory");
          setLibraryLessonId(resolvedId);
          setNavigationSeq((s) => s + 1);
          return;
        }

        setActiveTab("forms");
        setSelectedFormId(resolvedId);
        if (stepParam !== null) {
          const stepNum = parseInt(stepParam, 10);
          if (!Number.isNaN(stepNum)) {
            setInitialMotionIndex(Math.max(0, stepNum - 1));
          }
        } else if (motionParam !== null) {
          const mIdx = parseInt(motionParam, 10);
          if (!Number.isNaN(mIdx)) {
            setInitialMotionIndex(Math.max(0, mIdx));
          }
        }
        setNavigationSeq((s) => s + 1);
      } else if (tabParam) {
        setHasEntered(true);
        if (tabParam === "centerline") {
          setActiveTab("fundamentals");
          setFundamentalsSubTab("centerline");
        } else if (tabParam === "library") {
          setActiveTab("fundamentals");
          setFundamentalsSubTab("theory");
        } else if (tabParam === "lineage") {
          setActiveTab("lineage");
          const subParam = params.get("subTab");
          if (subParam === "philosophy") setLineageSubTab("philosophy");
        } else {
          setActiveTab(tabParam);
        }
      }
    } catch {
      // Ignore malformed URL parameters
    }
  }, []);

  // Toàn cục lắng nghe phím Ctrl+K / Cmd+K để mở hộp tra cứu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Theo dõi sự kiện chuyển tab và bài quyền lên hệ thống Analytics
  useEffect(() => {
    trackTabChange(activeTab);
    if (activeTab === "forms" && selectedFormId) {
      trackFormView(selectedFormId, selectedFormId);
    }
  }, [activeTab, selectedFormId]);

  const handleNavigateTab = (tab: NavTab, formId?: string, subTab?: string) => {
    if (tab === "centerline") {
      setActiveTab("fundamentals");
      setFundamentalsSubTab("centerline");
      setNavigationSeq((s) => s + 1);
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (tab === "library") {
      setActiveTab("fundamentals");
      setFundamentalsSubTab("theory");
      setNavigationSeq((s) => s + 1);
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setActiveTab(tab);
    if (tab === "fundamentals" && subTab) {
      if (
        subTab === "hands" ||
        subTab === "feet" ||
        subTab === "bai-to" ||
        subTab === "drills" ||
        subTab === "centerline" ||
        subTab === "theory"
      ) {
        setFundamentalsSubTab(subTab);
      }
    }
    if (tab === "lineage" && subTab) {
      if (subTab === "tree" || subTab === "philosophy") {
        setLineageSubTab(subTab);
      }
    }
    if (formId) {
      setSelectedFormId(resolveLessonId(formId));
      setInitialMotionIndex(0);
    }
    setNavigationSeq((s) => s + 1);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSelectTechnique = (tech: Technique) => {
    const resolvedId = resolveLessonId(tech.formId || tech.id);

    // Nếu là chương đọc lý thuyết / toàn văn (không có chuỗi động tác), mở thẳng chương đó trong Tàng Kinh Các
    if (tech.isReadingLesson || isReadingOnlyLesson(resolvedId)) {
      setLibraryLessonId(resolvedId);
      setSelectedMonograph(null);
      setActiveTab("fundamentals");
      setFundamentalsSubTab("theory");
      setNavigationSeq((s) => s + 1);
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    setSelectedFormId(resolvedId);
    setInitialMotionIndex(typeof tech.motionIndex === "number" ? tech.motionIndex : 0);
    setNavigationSeq((s) => s + 1);
    setActiveTab("forms");
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSelectMonograph = (mono: MonographSection) => {
    setSelectedMonograph(mono);
    setLibraryLessonId(null);
    setActiveTab("fundamentals");
    setFundamentalsSubTab("theory");
    setNavigationSeq((s) => s + 1);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleOpenDojoLesson = (lessonId: string) => {
    const resolvedId = resolveLessonId(lessonId);
    setSelectedFormId(resolvedId);
    setInitialMotionIndex(0);
    setNavigationSeq((s) => s + 1);
    setActiveTab("forms");
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavigateStage = (stageId: string) => {
    if (stageId === "fundamentals") {
      setActiveTab("fundamentals");
      setFundamentalsSubTab("hands");
    } else if (stageId === "bai-to") {
      setActiveTab("fundamentals");
      setFundamentalsSubTab("bai-to");
    } else if (stageId === "drills") {
      setActiveTab("fundamentals");
      setFundamentalsSubTab("drills");
    } else if (stageId === "feet") {
      setActiveTab("fundamentals");
      setFundamentalsSubTab("feet");
    } else if (stageId === "centerline") {
      setActiveTab("fundamentals");
      setFundamentalsSubTab("centerline");
    } else if (stageId === "theory" || stageId === "library") {
      setActiveTab("fundamentals");
      setFundamentalsSubTab("theory");
    } else if (stageId === "forms-core") {
      setSelectedFormId("bai-07");
      setInitialMotionIndex(0);
      setActiveTab("forms");
    } else if (stageId === "108-the") {
      setSelectedFormId("bai-12");
      setInitialMotionIndex(0);
      setActiveTab("forms");
    } else if (stageId === "dummy") {
      setActiveTab("dummy");
    } else if (stageId === "weapons") {
      setSelectedFormId("bai-31");
      setInitialMotionIndex(0);
      setActiveTab("forms");
    } else if (stageId === "dojo" || stageId === "forms") {
      setSelectedFormId("bai-12");
      setInitialMotionIndex(0);
      setActiveTab("forms");
    } else if (stageId === "scenarios") {
      setActiveTab("scenarios");
    } else if (stageId === "meditation" || stageId === "khi-cong") {
      setActiveTab("meditation");
    } else {
      const resolved = resolveLessonId(stageId);
      setSelectedFormId(resolved);
      setInitialMotionIndex(0);
      setActiveTab("forms");
    }
    setNavigationSeq((s) => s + 1);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavigateFromScenario = (formId: string, techCode?: string) => {
    const target = resolveScenarioTarget(formId, techCode);
    setSelectedFormId(target.lessonId);
    setInitialMotionIndex(target.motionIndex);
    setNavigationSeq((s) => s + 1);
    setActiveTab("forms");
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!hasEntered) {
    return <LandingSplash onEnter={() => setHasEntered(true)} />;
  }

  return (
    <div suppressHydrationWarning className="min-h-screen flex flex-col bg-[#2A0E0A] text-[#FBF9F5]">
      {/* Top Sticky Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area — Spacious 1440px Gallery Canvas */}
      <main suppressHydrationWarning className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-10 pt-6 sm:pt-8 pb-28 lg:pb-10">
        {/* Tab 0: Trang Chủ Chào Mừng (Welcome Portal & Di Sản Võ Học) */}
        {activeTab === "welcome" && (
          <WelcomePortal
            onNavigateTab={handleNavigateTab}
            openSearch={() => setIsSearchOpen(true)}
          />
        )}

        {/* Tab 1: Hệ Thống 18 Bài Quyền Pháp & Binh Khí */}
        {activeTab === "forms" && (
          <CurriculumExplorer
            initialLessonId={selectedFormId || "bai-07"}
            initialMotionIndex={initialMotionIndex}
            navigationSeq={navigationSeq}
            onNavigateTab={handleNavigateTab}
          />
        )}

        {/* Tab 2: Cơ Bản Công - Thủ Pháp, Cước Pháp & Tàng Kinh Các */}
        {activeTab === "fundamentals" && (
          <FundamentalHandFootAtlas
            initialSubTab={fundamentalsSubTab}
            initialLibraryLessonId={libraryLessonId}
            initialMonograph={selectedMonograph}
            navigationSeq={navigationSeq}
            onNavigateStage={handleNavigateStage}
            onOpenDojoLesson={handleOpenDojoLesson}
          />
        )}

        {/* Tab Chuyên Biệt: Thiền & Khí Công Dưỡng Sinh (Thở 4 Thì) */}
        {activeTab === "meditation" && <MeditationQiGongHub />}

        {/* Tab 3: 200 Tình Huống Thực Chiến & Khảo Thí Phản Xạ Võ Học */}
        {activeTab === "scenarios" && (
          <CombatScenariosExplorer onNavigateForm={handleNavigateFromScenario} />
        )}

        {/* Tab 4: Cọc Gỗ Mộc Nhân Số Hóa (Digital Wooden Dummy) */}
        {activeTab === "dummy" && (
          <WoodenDummyCanvas onSelectTechnique={handleSelectTechnique} />
        )}

        {/* Tab 5: Trục Tý Ngọ Tuyến & Tam Giác Sinh Lực */}
        {activeTab === "centerline" && <CenterlineExplorer />}

        {/* Tab 6: Tàng Kinh Các (Toàn văn 36 chương sách gốc & 6 chuyên đề) */}
        {activeTab === "library" && (
          <KnowledgeHub
            initialLessonId={libraryLessonId}
            initialMonograph={selectedMonograph}
            navigationSeq={navigationSeq}
            onOpenDojoLesson={handleOpenDojoLesson}
          />
        )}

        {/* Tab 7: Sơ Đồ Truyền Thừa & Triết Lý Võ Học */}
        {activeTab === "lineage" && (
          <LineageTree
            initialSubTab={lineageSubTab}
            onSelectSubTab={setLineageSubTab}
          />
        )}
      </main>

      {/* Global Command Palette Modal (Ctrl + K) */}
      {isSearchOpen && (
        <CommandPalette
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectTechnique={handleSelectTechnique}
          onSelectMonograph={handleSelectMonograph}
        />
      )}

      {/* Modern Martial Footer */}
      <footer className="mt-auto border-t border-white/10 glass-panel py-6 mb-16 lg:mb-0">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-amber-200/80">
          <div className="flex items-center gap-3">
            <div className="relative w-7 h-7 rounded-lg overflow-hidden border border-[#F5D06C]/40 shrink-0 bg-[#FFFDF8] shadow-sm">
              <Image
                src="/assets/images/logo/an_vuong_phat_gia_vinh_xuan.png"
                alt="Ấn Vuông Phật Gia Vịnh Xuân"
                fill
                sizes="28px"
                className="object-contain p-0.5"
              />
            </div>
            <p className="text-center sm:text-left font-medium text-[#FAF6F0]">
              Đơn vị đóng góp xây dựng: Võ đường Huỳnh Thúc Kháng • Phật Gia Vịnh Xuân Quyền
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <span className="text-[#F5D06C] font-semibold">Di Sản Võ Học</span>
            <span>•</span>
            <span className="text-amber-100/75">Tài liệu: PGS.TS Nguyễn Mạnh Nhâm &amp; ThS. Nguyễn Duy Thức</span>
          </div>
        </div>
      </footer>

      {/* Thanh Điều Hướng Đáy Cho Di Động (Mobile Bottom Dock) */}
      <MobileBottomBar
        activeTab={activeTab}
        setActiveTab={handleNavigateTab}
      />
    </div>
  );
}
