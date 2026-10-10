"use client";

import React, { useState, useEffect } from "react";
import { Header, NavTab } from "@/components/Header";
import { WelcomePortal } from "@/components/WelcomePortal";
import { CurriculumExplorer } from "@/components/CurriculumExplorer";
import { FundamentalHandFootAtlas, FundamentalSubTab } from "@/components/FundamentalHandFootAtlas";
import { KnowledgeHub } from "@/components/KnowledgeHub";
import { WoodenDummyCanvas } from "@/components/WoodenDummyCanvas";
import { CenterlineExplorer } from "@/components/CenterlineExplorer";
import { LineageTree } from "@/components/LineageTree";
import { CombatScenariosExplorer } from "@/components/CombatScenariosExplorer";
import { CommandPalette } from "@/components/CommandPalette";
import { StanceCheckerModal } from "@/components/StanceCheckerModal";
import { MegaMenuModal } from "@/components/MegaMenuModal";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { VisitorAnalyticsWidget } from "@/components/VisitorAnalyticsWidget";
import { AnalyticsModal } from "@/components/AnalyticsModal";
import { TECHNIQUES, Technique } from "@/data/techniques";
import { resolveLessonId } from "@/lib/lessonResolver";
import {
  recordPageVisit,
  recordContentView,
  getAnalyticsSummary,
  AnalyticsSummary,
} from "@/lib/analytics";

import { LandingSplash } from "@/components/LandingSplash";

export default function Home() {
  const [hasEntered, setHasEntered] = useState(false);
  const [activeTab, setActiveTab] = useState<NavTab>("welcome");
  const [selectedFormId, setSelectedFormId] = useState<string>("bai-07");
  const [fundamentalsSubTab, setFundamentalsSubTab] = useState<FundamentalSubTab>("hands");
  const [lineageSubTab, setLineageSubTab] = useState<"tree" | "philosophy">("tree");
  const [initialMotionIndex, setInitialMotionIndex] = useState<number | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStanceGuideOpen, setIsStanceGuideOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);
  const [analyticsData, setAnalyticsData] = useState<AnalyticsSummary>(() => getAnalyticsSummary());

  // Đọc query parameters từ URL khi mở trang (hỗ trợ liên kết chia sẻ)
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const params = new URLSearchParams(window.location.search);
      const lessonParam = params.get("lesson");
      const motionParam = params.get("motion");
      const tabParam = params.get("tab") as NavTab | null;

      if (lessonParam) {
        setHasEntered(true);
        setActiveTab("forms");
        setSelectedFormId(resolveLessonId(lessonParam));
        if (motionParam !== null) {
          const mIdx = parseInt(motionParam, 10);
          if (!isNaN(mIdx)) setInitialMotionIndex(mIdx);
        }
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
      // Ignore
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

  // Theo dõi lượt truy cập trang web (đếm tự động khi vào trang)
  useEffect(() => {
    recordPageVisit();
    setAnalyticsData(getAnalyticsSummary());
  }, []);

  // Theo dõi lượt xem nội dung khi người dùng chuyển phân hệ hoặc bài quyền
  useEffect(() => {
    if (activeTab === "forms") {
      recordContentView(selectedFormId || "bai-07");
    } else if (activeTab === "fundamentals") {
      recordContentView(fundamentalsSubTab || "hands");
    } else if (activeTab === "dummy") {
      recordContentView("dummy");
    } else if (activeTab === "scenarios") {
      recordContentView("scenarios");
    } else if (activeTab === "lineage") {
      recordContentView("philosophy");
    }
    setAnalyticsData(getAnalyticsSummary());
  }, [activeTab, selectedFormId, fundamentalsSubTab]);

  const handleNavigateFromAnalytics = (id: string, category: string) => {
    if (category === "forms") {
      handleNavigateTab("forms", id);
    } else if (category === "dummy") {
      handleNavigateTab("dummy");
    } else if (category === "scenarios") {
      handleNavigateTab("scenarios");
    } else if (category === "fundamentals") {
      if (id === "centerline") {
        handleNavigateTab("centerline");
      } else if (id === "bai-to") {
        handleNavigateTab("fundamentals", undefined, "bai-to");
      } else if (id === "4-bai-luyen") {
        handleNavigateTab("fundamentals", undefined, "drills");
      } else {
        handleNavigateTab("fundamentals", undefined, "hands");
      }
    } else if (category === "lineage") {
      handleNavigateTab("lineage");
    }
  };

  const handleNavigateTab = (tab: NavTab, formId?: string, subTab?: string) => {
    if (tab === "centerline") {
      setActiveTab("fundamentals");
      setFundamentalsSubTab("centerline");
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (tab === "library") {
      setActiveTab("fundamentals");
      setFundamentalsSubTab("theory");
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
    }
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSelectTechnique = (tech: Technique) => {
    if (tech.formId) {
      setSelectedFormId(resolveLessonId(tech.formId));
    } else {
      setSelectedFormId("bai-07");
    }
    setActiveTab("forms");
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 380, behavior: "smooth" });
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
      setSelectedFormId("bai-07"); // Tiểu Niệm Đầu
      setActiveTab("forms");
    } else if (stageId === "108-the") {
      setSelectedFormId("bai-12"); // 108 Thế Tại Chỗ
      setActiveTab("forms");
    } else if (stageId === "dummy") {
      setActiveTab("dummy");
    } else if (stageId === "weapons") {
      setSelectedFormId("bai-31"); // Bát Trảm Đao
      setActiveTab("forms");
    } else if (stageId === "dojo" || stageId === "forms") {
      setSelectedFormId("bai-12");
      setActiveTab("forms");
    } else if (stageId === "scenarios") {
      setActiveTab("scenarios");
    } else {
      setSelectedFormId(resolveLessonId(stageId));
      setActiveTab("forms");
    }
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 380, behavior: "smooth" });
    }
  };

  const handleNavigateFromScenario = (formId: string, techCode?: string) => {
    setSelectedFormId(resolveLessonId(formId));
    if (techCode) {
      const numMatch = techCode.match(/\d+/);
      if (numMatch) {
        const idx = Math.max(0, parseInt(numMatch[0], 10) - 1);
        setInitialMotionIndex(idx);
      }
    } else {
      setInitialMotionIndex(0);
    }
    setActiveTab("forms");
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 380, behavior: "smooth" });
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
        openStanceGuide={() => setIsStanceGuideOpen(true)}
        openMegaMenu={() => setIsMegaMenuOpen(true)}
      />

      {/* Main Content Area */}
      <main suppressHydrationWarning className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-28 lg:pb-8">
        {/* Tab 0: Trang Chủ Chào Mừng (Welcome Portal & Di Sản Võ Học) */}
        {activeTab === "welcome" && (
          <WelcomePortal
            onNavigateTab={handleNavigateTab}
            openSearch={() => setIsSearchOpen(true)}
            openStanceGuide={() => setIsStanceGuideOpen(true)}
          />
        )}
        {/* Tab 1: Hệ Thống 18 Bài Quyền Pháp & Binh Khí (18 Bài Quyền Chính Tông & Lời Dẫn) */}
        {activeTab === "forms" && (
          <CurriculumExplorer 
            initialLessonId={selectedFormId || "bai-07"} 
            initialMotionIndex={initialMotionIndex}
            onNavigateTab={handleNavigateTab}
          />
        )}

        {/* Tab 2: Cơ Bản Công - Thủ Pháp & Cước Pháp Chuẩn Mực (Trang 28-35) */}
        {activeTab === "fundamentals" && (
          <FundamentalHandFootAtlas 
            initialSubTab={fundamentalsSubTab}
            onNavigateStage={handleNavigateStage} 
          />
        )}

        {/* Tab 3: 200 Tình Huống Thực Chiến & Khảo Thí Phản Xạ Võ Học */}
        {activeTab === "scenarios" && (
          <CombatScenariosExplorer onNavigateForm={handleNavigateFromScenario} />
        )}

        {/* Tab 3: Cọc Gỗ Mộc Nhân Số Hóa (Digital Wooden Dummy) */}
        {activeTab === "dummy" && (
          <WoodenDummyCanvas
            techniques={TECHNIQUES}
            onSelectTechnique={handleSelectTechnique}
          />
        )}

        {/* Tab 4: Trục Tý Ngọ Tuyến & Tam Giác Sinh Lực */}
        {activeTab === "centerline" && <CenterlineExplorer />}

        {/* Tab 5: Tàng Kinh Các (Toàn văn chuyên đề 225 trang) */}
        {activeTab === "library" && (
          <KnowledgeHub />
        )}

        {/* Tab 6: Sơ Đồ Truyền Thừa & Triết Lý Võ Học */}
        {activeTab === "lineage" && (
          <LineageTree
            initialSubTab={lineageSubTab}
            onSelectSubTab={setLineageSubTab}
          />
        )}
      </main>

      {/* Global Command Palette Modal (Ctrl + K) */}
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        techniques={TECHNIQUES}
        onSelectTechnique={handleSelectTechnique}
        onSelectMonograph={() => handleNavigateTab("library")}
      />

      {/* Stance Checker Modal (Quy chuẩn Tấn Kiềm Dương) */}
      <StanceCheckerModal
        isOpen={isStanceGuideOpen}
        onClose={() => setIsStanceGuideOpen(false)}
      />

      {/* Mục Lục Toàn Cảnh (Mega Menu Modal) */}
      <MegaMenuModal
        isOpen={isMegaMenuOpen}
        onClose={() => setIsMegaMenuOpen(false)}
        onNavigateTab={handleNavigateTab}
      />

      {/* Modal Thống Kê Chi Tiết (Analytics Modal) */}
      <AnalyticsModal
        isOpen={isAnalyticsOpen}
        onClose={() => setIsAnalyticsOpen(false)}
        data={analyticsData}
        onNavigateToContent={handleNavigateFromAnalytics}
      />

      {/* Thanh Thống Kê Truy Cập & Nội Dung Xem Nhiều (Chân Trang) */}
      <VisitorAnalyticsWidget
        data={analyticsData}
        onOpenDetails={() => setIsAnalyticsOpen(true)}
      />

      {/* Modern Martial Footer */}
      <footer className="mt-auto border-t border-[#3D291F] glass-panel py-5 mb-16 lg:mb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-200/60">
          <p className="text-center sm:text-left font-medium">
            Đơn vị đóng góp xây dựng: Võ đường Huỳnh Thúc Kháng • Phật Gia Vịnh Xuân Quyền
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-[#E2B743]">Di Sản Võ Học</span>
            <span>•</span>
            <span className="text-slate-400">Tài liệu: GS.TS Nguyễn Mạnh Nhâm &amp; ThS. Nguyễn Duy Thức</span>
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
