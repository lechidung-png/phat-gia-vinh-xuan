"use client";

import React, { useState } from "react";
import { Header, NavTab } from "@/components/Header";
import { WelcomePortal } from "@/components/WelcomePortal";
import { CurriculumExplorer } from "@/components/CurriculumExplorer";
import { FundamentalHandFootAtlas } from "@/components/FundamentalHandFootAtlas";
import { KnowledgeHub } from "@/components/KnowledgeHub";
import { WoodenDummyCanvas } from "@/components/WoodenDummyCanvas";
import { CenterlineExplorer } from "@/components/CenterlineExplorer";
import { LineageTree } from "@/components/LineageTree";
import { CombatScenariosExplorer } from "@/components/CombatScenariosExplorer";
import { CommandPalette } from "@/components/CommandPalette";
import { StanceCheckerModal } from "@/components/StanceCheckerModal";
import { MegaMenuModal } from "@/components/MegaMenuModal";
import { TECHNIQUES, Technique } from "@/data/techniques";
import { resolveLessonId } from "@/lib/lessonResolver";

export default function Home() {
  // Mặc định mở Trang Chủ Chào Mừng (Welcome Portal) hoành tráng & ấn tượng
  const [activeTab, setActiveTab] = useState<NavTab>("welcome");
  const [selectedFormId, setSelectedFormId] = useState<string>("bai-07");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStanceGuideOpen, setIsStanceGuideOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const handleNavigateTab = (tab: NavTab, formId?: string) => {
    setActiveTab(tab);
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
    } else if (stageId === "bai-to") {
      setSelectedFormId("bai-07");
      setActiveTab("forms");
    } else if (stageId === "dojo" || stageId === "forms") {
      setSelectedFormId("bai-12");
      setActiveTab("forms");
    } else if (stageId === "dummy") {
      setActiveTab("dummy");
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

  const handleNavigateFromScenario = (formId: string) => {
    setSelectedFormId(resolveLessonId(formId));
    setActiveTab("forms");
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 380, behavior: "smooth" });
    }
  };

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
      <main suppressHydrationWarning className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Tab 0: Trang Chủ Chào Mừng (Welcome Portal & Di Sản Võ Học) */}
        {activeTab === "welcome" && (
          <WelcomePortal
            onNavigateTab={handleNavigateTab}
            openSearch={() => setIsSearchOpen(true)}
            openStanceGuide={() => setIsStanceGuideOpen(true)}
          />
        )}
        {/* Tab 1: Bách Khoa 36 Bài Quyền & Vũ Khí (Bảng Tổng Thể 1.096 Ảnh Phục Chế & Sàn Tập 280px) */}
        {activeTab === "forms" && (
          <CurriculumExplorer initialLessonId={selectedFormId || "bai-07"} />
        )}

        {/* Tab 2: Cơ Bản Công - Thủ Pháp & Cước Pháp Chuẩn Mực (Trang 28-35) */}
        {activeTab === "fundamentals" && (
          <FundamentalHandFootAtlas onNavigateStage={handleNavigateStage} />
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

        {/* Tab 5: Tàng Kinh Các (Bộ lọc ma trận & Toàn văn chuyên đề 225 trang) */}
        {activeTab === "library" && (
          <KnowledgeHub
            techniques={TECHNIQUES}
            onSelectTechnique={handleSelectTechnique}
          />
        )}

        {/* Tab 6: Sơ Đồ Truyền Thừa Võ Học */}
        {activeTab === "lineage" && <LineageTree />}
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

      {/* Modern Martial Footer */}
      <footer className="mt-auto border-t border-[#3D291F] glass-panel py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-amber-200/60">
          <p className="text-center sm:text-left font-medium">
            Võ đường Huỳnh Thúc Kháng xây dựng • Phật Gia Vịnh Xuân Quyền
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-[#E2B743]">Di Sản Võ Học 1954 - 2012</span>
            <span>•</span>
            <span className="text-[#10B981]">Chuẩn WCAG 2.1 Level A</span>
            <span>•</span>
            <span className="text-slate-400">GS.TS Nguyễn Mạnh Nhâm & ThS. Nguyễn Duy Thức</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
