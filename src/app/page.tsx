"use client";

import React, { useState } from "react";
import { Header, NavTab } from "@/components/Header";
import { FormsExplorer } from "@/components/FormsExplorer";
import { FundamentalHandFootAtlas } from "@/components/FundamentalHandFootAtlas";
import { KnowledgeHub } from "@/components/KnowledgeHub";
import { WoodenDummyCanvas } from "@/components/WoodenDummyCanvas";
import { CenterlineExplorer } from "@/components/CenterlineExplorer";
import { LineageTree } from "@/components/LineageTree";
import { CombatScenariosExplorer } from "@/components/CombatScenariosExplorer";
import { CommandPalette } from "@/components/CommandPalette";
import { StanceCheckerModal } from "@/components/StanceCheckerModal";
import { TECHNIQUES, Technique } from "@/data/techniques";
import { FORMS_CATALOG, getTechniquesByForm, TIEU_NIEM_DAU_TECHNIQUES } from "@/data/all_7_forms";

export default function Home() {
  // Mặc định mở 7 Bài Quyền Chính Tông để người xem thấy ngay bức tranh tổng thể hào hùng của môn phái
  const [activeTab, setActiveTab] = useState<NavTab>("forms");
  const [selectedFormId, setSelectedFormId] = useState<string>("01-tieu-niem-dau");
  const [selectedTechnique, setSelectedTechnique] = useState<Technique>(TIEU_NIEM_DAU_TECHNIQUES[0]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStanceGuideOpen, setIsStanceGuideOpen] = useState(false);

  const handleSelectTechnique = (tech: Technique) => {
    setSelectedTechnique(tech);
    if (tech.formId) {
      setSelectedFormId(tech.formId);
    }
    setActiveTab("forms");
  };

  const handleNavigateStage = (stageId: string) => {
    if (stageId === "fundamentals") {
      setActiveTab("fundamentals");
    } else if (stageId === "bai-to") {
      setSelectedFormId("bai-to");
      setActiveTab("forms");
    } else if (stageId === "dojo" || stageId === "forms") {
      setSelectedFormId("01-tieu-niem-dau");
      setActiveTab("forms");
    } else if (stageId === "dummy") {
      setActiveTab("dummy");
    } else if (stageId === "scenarios") {
      setActiveTab("scenarios");
    }
  };

  const handleNavigateFromScenario = (formId: string, techCode?: string) => {
    setSelectedFormId(formId);
    if (techCode) {
      const match = TECHNIQUES.find(t => t.id === techCode || t.code === techCode);
      if (match) {
        setSelectedTechnique(match);
      }
    }
    setActiveTab("forms");
  };

  return (
    <div suppressHydrationWarning className="min-h-screen flex flex-col bg-[#140C08] text-[#FBF8F3]">
      {/* Top Sticky Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openSearch={() => setIsSearchOpen(true)}
        openStanceGuide={() => setIsStanceGuideOpen(true)}
      />

      {/* Main Content Area */}
      <main suppressHydrationWarning className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Tab 1: 7 Bài Quyền Chính Tông (Bảng Tổng Thể Hàng Chục Động Tác & Sàn Tập) */}
        {activeTab === "forms" && (
          <FormsExplorer
            allTechniques={TECHNIQUES}
            selectedFormId={selectedFormId}
            onSelectForm={setSelectedFormId}
            onSelectTechnique={setSelectedTechnique}
          />
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
      />

      {/* Stance Checker Modal (Quy chuẩn Tấn Kiềm Dương) */}
      <StanceCheckerModal
        isOpen={isStanceGuideOpen}
        onClose={() => setIsStanceGuideOpen(false)}
      />

      {/* Modern Martial Footer */}
      <footer className="mt-auto border-t border-[#3D291F] glass-panel py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-200/60">
          <p>© 2026 Phật Gia Vịnh Xuân Quyền. Nền tảng số hóa di sản võ học & tra cứu trực tuyến.</p>
          <div className="flex items-center gap-4">
            <span className="text-[#10B981]">Chuẩn WCAG 2.1 Level A</span>
            <span>•</span>
            <span className="text-[#E2B743]">Next.js 15 Fullstack SSG</span>
            <span>•</span>
            <span className="text-amber-100/80">Sách Gốc 2012 (225 Trang)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
