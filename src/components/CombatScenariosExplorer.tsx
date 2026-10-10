"use client";

import React, { useState, useMemo } from "react";
import { 
  COMBAT_SCENARIOS, 
  CombatScenario, 
  ScenarioCategory, 
  ScenarioDangerLevel 
} from "@/data/combatScenarios";
import { 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Sparkles, 
  Award, 
  Flame, 
  Search, 
  Filter, 
  ExternalLink, 
  Compass, 
  HelpCircle,
  Swords,
  ChevronRight,
  BookOpen,
  ArrowRight,
  LayoutList,
  LayoutGrid
} from "lucide-react";

interface CombatScenariosExplorerProps {
  onNavigateForm?: (formId: string, techCode?: string) => void;
}

const CATEGORIES: { id: "all" | ScenarioCategory; label: string; count: number }[] = [
  { id: "all", label: "Tất Cả", count: 200 },
  { id: "Thượng Bàn (Đầu/Mặt)", label: "Thượng Bàn", count: 40 },
  { id: "Trung Bàn (Ngực/Sườn)", label: "Trung Bàn", count: 40 },
  { id: "Hạ Bàn (Chân/Háng)", label: "Hạ Bàn", count: 40 },
  { id: "Cầm Nã & Khóa Siết", label: "Cầm Nã & Khóa", count: 40 },
  { id: "Tự Vệ Đường Phố & Góc Hẹp", label: "Tự Vệ Phố", count: 40 },
];

// Loại bỏ tiền tố dài dòng "Tình huống X:" để hiển thị tên thế võ gọn gàng, chuẩn mực
export const getCleanScenarioTitle = (title: string): string => {
  return title.replace(/^Tình huống\s*\d+:\s*/i, "").trim();
};

export const getScenarioNumber = (id: string, title?: string): number => {
  const matchId = id.match(/SCEN-(\d+)/i);
  if (matchId) return parseInt(matchId[1], 10);
  if (title) {
    const matchTitle = title.match(/Tình huống\s*(\d+)/i);
    if (matchTitle) return parseInt(matchTitle[1], 10);
  }
  return 0;
};

// Thuật toán xáo trộn ngẫu nhiên Fisher-Yates (Knuth shuffle) O(N) bảo đảm phân phối đều tuyệt đối
function fisherYatesShuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = result[i];
    result[i] = result[j];
    result[j] = temp;
  }
  return result;
}

export const CombatScenariosExplorer: React.FC<CombatScenariosExplorerProps> = ({
  onNavigateForm,
}) => {
  const [activeMode, setActiveMode] = useState<"library" | "quiz">("library");
  const [selectedCategory, setSelectedCategory] = useState<"all" | ScenarioCategory>("all");
  const [selectedDanger, setSelectedDanger] = useState<"all" | ScenarioDangerLevel>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedScenarioForModal, setSelectedScenarioForModal] = useState<CombatScenario | null>(null);
  const [viewLayout, setViewLayout] = useState<"compact" | "cards">("compact");

  // Quiz State
  const [quizQuestionCount, setQuizQuestionCount] = useState<number>(10);
  const [quizScenarios, setQuizScenarios] = useState<CombatScenario[]>([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isQuizSubmitted, setIsQuizSubmitted] = useState<boolean>(false);

  // Initialize or start Quiz with randomized questions and shuffled options
  const startQuiz = (count: number, cat: "all" | ScenarioCategory = selectedCategory) => {
    let pool = COMBAT_SCENARIOS;
    if (cat !== "all") {
      pool = pool.filter((s) => s.category === cat);
    }
    // Xáo trộn ngẫu nhiên ngân hàng câu hỏi bằng thuật toán Fisher-Yates
    const shuffledPool = fisherYatesShuffle(pool);
    const selected = shuffledPool.slice(0, Math.min(count, shuffledPool.length)).map((sc) => {
      // Xáo trộn 4 phương án lựa chọn (A, B, C, D) và ánh xạ lại vị trí đáp án đúng (không cố định vị trí A)
      const originalCorrectOption = sc.quiz.options[sc.quiz.correctIndex];
      const shuffledOptions = fisherYatesShuffle(sc.quiz.options);
      const newCorrectIndex = shuffledOptions.indexOf(originalCorrectOption);
      return {
        ...sc,
        quiz: {
          ...sc.quiz,
          options: shuffledOptions,
          correctIndex: newCorrectIndex >= 0 ? newCorrectIndex : 0,
        },
      };
    });

    setQuizQuestionCount(selected.length);
    setQuizScenarios(selected);
    setCurrentQuizIndex(0);
    setUserAnswers({});
    setIsQuizSubmitted(false);
    setActiveMode("quiz");
  };

  // Filtered scenarios for Library Mode
  const filteredScenarios = useMemo(() => {
    return COMBAT_SCENARIOS.filter((s) => {
      if (selectedCategory !== "all" && s.category !== selectedCategory) return false;
      if (selectedDanger !== "all" && s.dangerLevel !== selectedDanger) return false;
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase().trim();
        const matchTitle = s.title.toLowerCase().includes(query);
        const matchAttack = s.opponentAction.toLowerCase().includes(query);
        const matchDefense = s.wingChunSolution.toLowerCase().includes(query);
        const matchKinh = s.coreKinh.toLowerCase().includes(query);
        const matchCode = s.id.toLowerCase().includes(query);
        return matchTitle || matchAttack || matchDefense || matchKinh || matchCode;
      }
      return true;
    });
  }, [selectedCategory, selectedDanger, searchQuery]);

  const handleSelectQuizOption = (optionIndex: number) => {
    if (isQuizSubmitted) return;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQuizIndex]: optionIndex,
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    quizScenarios.forEach((s, idx) => {
      if (userAnswers[idx] === s.quiz.correctIndex) {
        correct++;
      }
    });
    return correct;
  };

  const getDangerBadgeClass = (level: ScenarioDangerLevel) => {
    switch (level) {
      case "Nguy cấp":
        return "bg-rose-950/80 text-rose-300 border-rose-600/50";
      case "Cao":
        return "bg-amber-950/80 text-amber-300 border-amber-600/50";
      case "Trung bình":
        return "bg-blue-950/80 text-blue-300 border-blue-600/50";
      default:
        return "bg-emerald-950/80 text-emerald-300 border-emerald-600/50";
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Header Banner */}
      <section className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#3D291F] relative overflow-hidden shadow-2xl">
        <div className="absolute -right-8 -top-8 w-64 h-64 bg-[#E2B743]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E2B743]/15 border border-[#E2B743]/40 text-[#E2B743] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Thực Chiến &amp; Phản Xạ • 200 Thế
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif gold-gradient">
              200 Tình Huống Đối Kháng Thực Chiến
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-amber-100/70 max-w-3xl leading-relaxed">
              Hệ thống 200 kịch bản công thủ đối kháng từ cận chiến, góc hẹp, khóa siết đến đoạt vũ khí gắn liền với 108 đại pháp và 18 bài quyền truyền thừa.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-2 bg-[#1A100B] p-1.5 rounded-xl border border-[#3D291F] shrink-0">
            <button
              onClick={() => setActiveMode("library")}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeMode === "library"
                  ? "bg-[#E2B743] text-[#140C08] shadow-lg shadow-[#E2B743]/20 font-bold"
                  : "text-amber-200/70 hover:text-[#FBF8F3]"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Thư Viện (200)</span>
            </button>
            <button
              onClick={() => {
                if (quizScenarios.length === 0) {
                  startQuiz(10);
                } else {
                  setActiveMode("quiz");
                }
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeMode === "quiz"
                  ? "bg-[#E2B743] text-[#140C08] shadow-lg shadow-[#E2B743]/20 font-bold"
                  : "text-amber-200/70 hover:text-[#FBF8F3]"
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Luyện Phản Xạ ({quizQuestionCount})</span>
            </button>
          </div>
        </div>
      </section>

      {/* MODE 1: THƯ VIỆN TÌNH HUỐNG (LIBRARY MODE) */}
      {activeMode === "library" && (
        <div className="space-y-6">
          {/* Controls Bar: Category Pills + Search + Danger Filter */}
          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-[#3D291F] space-y-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    selectedCategory === cat.id
                      ? "bg-[#E2B743] text-[#140C08] shadow-md shadow-[#E2B743]/20"
                      : "bg-[#1A100B] text-amber-200/70 hover:bg-[#281810] border border-[#3D291F]"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    selectedCategory === cat.id ? "bg-[#140C08]/30 text-[#140C08]" : "bg-[#3D291F] text-amber-300"
                  }`}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Input & Danger Filter */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-[#3D291F]/60">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-amber-400/60" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm theo đòn đánh, thế hóa giải, khẩu quyết, cước pháp, SCEN-..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#140C08] border border-[#3D291F] text-xs sm:text-sm text-[#FBF8F3] placeholder-amber-200/40 focus:outline-none focus:border-[#E2B743]/60 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    aria-label="Xóa nội dung tìm kiếm"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-amber-400 hover:text-white"
                  >
                    Xóa
                  </button>
                )}
              </div>

              {/* Danger Level Selector */}
              <div className="flex items-center gap-2 shrink-0">
                <Filter className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs text-amber-200/70">Mức nguy hiểm:</span>
                <select
                  value={selectedDanger}
                  onChange={(e) => setSelectedDanger(e.target.value as "all" | ScenarioDangerLevel)}
                  aria-label="Lọc theo mức độ nguy hiểm"
                  className="bg-[#140C08] border border-[#3D291F] rounded-xl px-2.5 py-1.5 text-xs text-amber-100 focus:outline-none focus:border-[#E2B743]"
                >
                  <option value="all">Tất cả cấp độ</option>
                  <option value="Thấp">Thấp</option>
                  <option value="Trung bình">Trung bình</option>
                  <option value="Cao">Cao</option>
                  <option value="Nguy cấp">Nguy cấp</option>
                </select>
              </div>

              {/* Launch Quiz from current filter */}
              <button
                onClick={() => startQuiz(10, selectedCategory)}
                className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#C49A32] to-[#E2B743] text-[#140C08] text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-[#E2B743]/20 hover:brightness-110 shrink-0"
              >
                <Flame className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Làm Test Nhanh (10 Câu)</span>
                <span className="sm:hidden">Luyện 10 Câu</span>
              </button>
            </div>
          </div>

          {/* Results Count Banner & View Layout Switcher */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-amber-200/60 px-1">
            <div className="flex items-center gap-2">
              <span>
                Hiển thị <strong className="text-[#E2B743]">{filteredScenarios.length}</strong> / 200 thế đối kháng
              </span>
              {searchQuery && (
                <span className="text-amber-200/40">| Lọc: &quot;{searchQuery}&quot;</span>
              )}
            </div>

            {/* View Layout Switcher */}
            <div className="flex items-center gap-1 bg-[#140C08] p-1 rounded-xl border border-[#3D291F] self-start sm:self-auto">
              <button
                onClick={() => setViewLayout("compact")}
                className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 sm:gap-1.5 transition cursor-pointer ${
                  viewLayout === "compact"
                    ? "bg-[#E2B743] text-[#140C08] font-bold shadow-sm"
                    : "text-amber-200/60 hover:text-white"
                }`}
                title="Xem danh sách gọn"
              >
                <LayoutList className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Xem Gọn</span>
                <span className="sm:hidden">Gọn</span>
              </button>
              <button
                onClick={() => setViewLayout("cards")}
                className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 sm:gap-1.5 transition cursor-pointer ${
                  viewLayout === "cards"
                    ? "bg-[#E2B743] text-[#140C08] font-bold shadow-sm"
                    : "text-amber-200/60 hover:text-white"
                }`}
                title="Xem dạng thẻ chi tiết"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Thẻ Chi Tiết</span>
                <span className="sm:hidden">Thẻ</span>
              </button>
            </div>
          </div>

          {/* Scenarios List / Grid */}
          {viewLayout === "compact" ? (
            /* COMPACT LIST VIEW: DANH SÁCH GỌN GÀNG */
            <div className="space-y-2.5">
              {filteredScenarios.map((s) => {
                const num = getScenarioNumber(s.id, s.title);
                const cleanTitle = getCleanScenarioTitle(s.title);
                return (
                  <div
                    key={s.id}
                    className="p-3.5 sm:p-4 rounded-2xl bg-[#180E09]/90 hover:bg-[#22130C] border border-[#3D291F] hover:border-[#E2B743]/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-3 group shadow-md"
                  >
                    <div className="flex items-start md:items-center gap-3 min-w-0 flex-1">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-lg bg-[#E2B743]/15 text-[#E2B743] border border-[#E2B743]/30 shrink-0">
                        #{num.toString().padStart(3, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] text-amber-200/70 font-semibold bg-[#20150F] px-2 py-0.5 rounded border border-[#3D291F]">
                            {s.category}
                          </span>
                          <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full border ${getDangerBadgeClass(s.dangerLevel)}`}>
                            {s.dangerLevel}
                          </span>
                        </div>
                        <h4 className="text-xs sm:text-sm font-bold text-[#FBF8F3] group-hover:text-[#E2B743] transition-colors line-clamp-1">
                          {cleanTitle}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-1 text-[11px] text-amber-200/80">
                          <span className="truncate text-rose-300/90">
                            <strong className="text-rose-400">Địch:</strong> {s.opponentAction}
                          </span>
                          <span className="truncate text-emerald-300/90">
                            <strong className="text-emerald-400">Hóa giải:</strong> {s.wingChunSolution}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-end md:self-center">
                      <button
                        onClick={() => setSelectedScenarioForModal(s)}
                        className="px-3 py-1.5 rounded-xl bg-[#20150F] hover:bg-[#2E1810] text-[#E2B743] border border-[#E2B743]/30 text-xs font-semibold transition cursor-pointer flex items-center gap-1"
                        title="Xem chi tiết & câu hỏi trắc nghiệm"
                      >
                        <HelpCircle className="w-3.5 h-3.5" />
                        <span>Trắc nghiệm</span>
                      </button>
                      {onNavigateForm && (
                        <button
                          onClick={() => onNavigateForm(s.relatedFormId, s.relatedTechCode)}
                          className="px-3 py-1.5 rounded-xl bg-[#E2B743] hover:bg-[#E2B743]/90 text-[#140C08] text-xs font-bold transition cursor-pointer flex items-center gap-1 shadow"
                          title="Xem phân thế bài quyền tương ứng"
                        >
                          <span>Phân thế</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* DETAILED CARDS VIEW: THẺ CHI TIẾT */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredScenarios.map((s) => {
                const num = getScenarioNumber(s.id, s.title);
                const cleanTitle = getCleanScenarioTitle(s.title);
                return (
                  <div
                    key={s.id}
                    className="glass-panel p-5 rounded-2xl border border-[#3D291F] hover:border-[#E2B743]/40 transition-all flex flex-col justify-between group shadow-lg"
                  >
                    <div>
                      {/* Top Metadata */}
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-[#E2B743] bg-[#E2B743]/15 px-2.5 py-0.5 rounded border border-[#E2B743]/30">
                            #{num.toString().padStart(3, "0")}
                          </span>
                          <span className="text-[11px] text-amber-200/60 font-medium">
                            {s.category}
                          </span>
                        </div>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getDangerBadgeClass(s.dangerLevel)}`}>
                          {s.dangerLevel}
                        </span>
                      </div>

                      {/* Title: Gọn gàng không tiền tố thừa */}
                      <h3 className="text-sm sm:text-base font-bold text-[#FBF8F3] group-hover:text-[#E2B743] transition-colors leading-snug">
                        {cleanTitle}
                      </h3>

                      {/* Opponent Attack vs Wing Chun Solution */}
                      <div className="mt-3.5 space-y-2.5 text-xs">
                        <div className="p-2.5 rounded-xl bg-[#2A1510]/50 border border-rose-900/40 text-rose-200/90 flex items-start gap-2">
                          <Swords className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-rose-300 font-semibold block text-[11px] uppercase tracking-wide">
                              Đòn Tấn Công Của Địch:
                            </strong>
                            <p className="mt-0.5 leading-relaxed">{s.opponentAction}</p>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-xl bg-[#142318]/50 border border-emerald-800/40 text-emerald-200/90 flex items-start gap-2">
                          <ShieldAlert className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <div>
                            <strong className="text-emerald-300 font-semibold block text-[11px] uppercase tracking-wide">
                              Hóa Giải Vịnh Xuân:
                            </strong>
                            <p className="mt-0.5 leading-relaxed">{s.wingChunSolution}</p>
                          </div>
                        </div>
                      </div>

                      {/* Khẩu Quyết & Thủ Pháp */}
                      <div className="mt-3 pt-3 border-t border-[#3D291F]/60 flex flex-wrap items-center gap-1.5 text-[11px]">
                        <span className="text-amber-400 font-medium">Thủ pháp:</span>
                        {s.hands.map((h, i) => (
                          <span key={i} className="px-1.5 py-0.5 rounded bg-[#20150F] text-amber-200/80 border border-[#3D291F]">
                            {h}
                          </span>
                        ))}
                        <span className="text-amber-400 font-medium ml-2">Tấn:</span>
                        {s.stances.map((st, i) => (
                          <span key={i} className="px-1.5 py-0.5 rounded bg-[#20150F] text-amber-200/80 border border-[#3D291F]">
                            {st}
                          </span>
                        ))}
                      </div>

                      {/* Core Kinh */}
                      <div className="mt-2 text-[11px] text-amber-200/60 italic flex items-center gap-1">
                        <Compass className="w-3 h-3 text-[#E2B743] shrink-0" />
                        <span className="truncate">&quot;{s.coreKinh}&quot;</span>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-4 pt-3 border-t border-[#3D291F] flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedScenarioForModal(s)}
                        className="text-xs text-amber-400 hover:text-[#E2B743] font-semibold flex items-center gap-1 py-1 cursor-pointer"
                      >
                        <HelpCircle className="w-3.5 h-3.5" />
                        Xem Câu Hỏi Trắc Nghiệm
                      </button>

                      {onNavigateForm && (
                        <button
                          onClick={() => onNavigateForm(s.relatedFormId, s.relatedTechCode)}
                          className="px-3 py-1.5 rounded-xl bg-[#2A1B10] hover:bg-[#3D291F] text-[#E2B743] text-xs font-semibold border border-[#E2B743]/30 flex items-center gap-1.5 transition-all shadow cursor-pointer"
                        >
                          <span>Xem Phân Thế</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* MODE 2: KHẢO THÍ PHẢN XẠ VÕ HỌC (INTERACTIVE QUIZ MODE) */}
      {activeMode === "quiz" && quizScenarios.length > 0 && (
        <div className="space-y-6">
          {/* Quiz Top Navigation Bar */}
          <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-[#3D291F] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E2B743]/20 border border-[#E2B743]/50 flex items-center justify-center text-[#E2B743] font-bold">
                {currentQuizIndex + 1}/{quizScenarios.length}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#FBF8F3]">
                  Bài Khảo Thí Phản Xạ Thực Chiến
                </h3>
                <p className="text-xs text-amber-200/60">
                  {quizScenarios[currentQuizIndex]?.category} • Độ nguy hiểm: {quizScenarios[currentQuizIndex]?.dangerLevel}
                </p>
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => startQuiz(10)}
                className="px-3 py-1.5 rounded-lg bg-[#1F140D] border border-[#3D291F] text-xs text-amber-200/80 hover:text-[#FBF8F3] flex items-center gap-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Đổi Bộ Đề (10 Câu)
              </button>
              <button
                onClick={() => startQuiz(20)}
                className="px-3 py-1.5 rounded-lg bg-[#1F140D] border border-[#3D291F] text-xs text-amber-200/80 hover:text-[#FBF8F3]"
              >
                Đề 20 Câu
              </button>
              <button
                onClick={() => setActiveMode("library")}
                className="px-3 py-1.5 rounded-lg bg-[#E2B743]/20 border border-[#E2B743]/40 text-[#E2B743] text-xs font-semibold"
              >
                Về Thư Viện
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#1F140D] h-2 rounded-full overflow-hidden border border-[#3D291F]">
            <div
              className="bg-gradient-to-r from-[#C49A32] to-[#E2B743] h-full transition-all duration-300"
              style={{
                width: `${((currentQuizIndex + 1) / quizScenarios.length) * 100}%`,
              }}
            />
          </div>

          {/* Question Card */}
          {!isQuizSubmitted && quizScenarios[currentQuizIndex] && (
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-[#3D291F] space-y-6 shadow-2xl animate-fadeIn">
              {/* Question Context */}
              <div className="p-4 rounded-xl bg-[#20150F] border border-[#3D291F] space-y-2">
                <span className="text-xs font-semibold text-[#E2B743] uppercase tracking-wider block">
                  Bối Cảnh Tình Huống:
                </span>
                <p className="text-sm sm:text-base font-medium text-[#FBF8F3]">
                  {quizScenarios[currentQuizIndex].opponentAction}
                </p>
              </div>

              {/* Main Quiz Question */}
              <div>
                <h4 className="text-base sm:text-lg font-bold text-amber-100 flex items-start gap-2.5">
                  <span className="text-[#E2B743] font-serif text-xl leading-none">?</span>
                  <span>{quizScenarios[currentQuizIndex].quiz.question}</span>
                </h4>
              </div>

              {/* 4 Options */}
              <div className="grid grid-cols-1 gap-3">
                {quizScenarios[currentQuizIndex].quiz.options.map((option, optIdx) => {
                  const isSelected = userAnswers[currentQuizIndex] === optIdx;
                  const isCorrect = optIdx === quizScenarios[currentQuizIndex].quiz.correctIndex;
                  const showResult = isQuizSubmitted || userAnswers[currentQuizIndex] !== undefined;

                  let cardStyle = "bg-[#1A100B] border-[#3D291F] hover:border-[#E2B743]/50 text-amber-100/90";
                  if (showResult) {
                    if (isCorrect) {
                      cardStyle = "bg-emerald-950/70 border-emerald-500 text-emerald-200 font-semibold";
                    } else if (isSelected) {
                      cardStyle = "bg-rose-950/70 border-rose-500 text-rose-200";
                    }
                  } else if (isSelected) {
                    cardStyle = "bg-[#E2B743]/20 border-[#E2B743] text-[#FBF8F3] font-semibold";
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectQuizOption(optIdx)}
                      className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-3 ${cardStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs font-mono shrink-0">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span>{option}</span>
                      </div>

                      {showResult && (
                        <div>
                          {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                          {!isCorrect && isSelected && <XCircle className="w-5 h-5 text-rose-400 shrink-0" />}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation (Shown when answered) */}
              {(isQuizSubmitted || userAnswers[currentQuizIndex] !== undefined) && (
                <div className="p-4 rounded-xl bg-[#20150F] border border-[#E2B743]/30 space-y-2 animate-fadeIn">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#E2B743] uppercase tracking-wider">
                    <Sparkles className="w-4 h-4" />
                    Phân Tích Võ Lý & Khẩu Quyết:
                  </div>
                  <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                    {quizScenarios[currentQuizIndex].quiz.explanation}
                  </p>
                  <p className="text-xs text-amber-200/60 italic pt-1 border-t border-[#3D291F]">
                    Sinh cơ học: {quizScenarios[currentQuizIndex].biomechanics}
                  </p>
                </div>
              )}

              {/* Navigation Controls in Question */}
              <div className="flex items-center justify-between pt-4 border-t border-[#3D291F]">
                <button
                  disabled={currentQuizIndex === 0}
                  onClick={() => setCurrentQuizIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl bg-[#1A100B] border border-[#3D291F] text-xs font-semibold text-amber-200/80 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#281810]"
                >
                  Câu Trước
                </button>

                <div className="flex items-center gap-2">
                  {onNavigateForm && (
                    <button
                      onClick={() => onNavigateForm(
                        quizScenarios[currentQuizIndex].relatedFormId,
                        quizScenarios[currentQuizIndex].relatedTechCode
                      )}
                      className="px-3 py-2 rounded-xl bg-[#2A1B10] text-[#E2B743] text-xs font-semibold border border-[#E2B743]/30 hover:bg-[#3D291F] flex items-center gap-1"
                    >
                      <span>Xem Bài Quyền</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {currentQuizIndex < quizScenarios.length - 1 ? (
                    <button
                      onClick={() => setCurrentQuizIndex((prev) => prev + 1)}
                      className="px-5 py-2 rounded-xl bg-[#E2B743] text-[#140C08] text-xs font-bold hover:brightness-110 flex items-center gap-1 shadow-md shadow-[#E2B743]/20"
                    >
                      <span>Câu Tiếp Theo</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsQuizSubmitted(true)}
                      className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 text-[#140C08] text-xs font-bold hover:brightness-110 flex items-center gap-1 shadow-lg shadow-emerald-500/20"
                    >
                      <span>Hoàn Thành & Xem Điểm</span>
                      <Award className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Results Summary Box when submitted */}
          {isQuizSubmitted && (
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-emerald-500/50 bg-[#16251A]/60 text-center space-y-4 animate-fadeIn shadow-2xl">
              <Award className="w-12 h-12 text-[#E2B743] mx-auto" />
              <h3 className="text-xl sm:text-2xl font-bold font-serif gold-gradient">
                Kết Quả Khảo Thí Phản Xạ Võ Học
              </h3>
              <p className="text-sm text-amber-100/80">
                Bạn đã trả lời đúng <strong className="text-emerald-400 font-bold text-lg">{calculateScore()}</strong> / {quizScenarios.length} tình huống thực chiến ({Math.round((calculateScore() / quizScenarios.length) * 100)}%).
              </p>
              
              <div className="p-3 rounded-xl bg-[#140C08] border border-[#3D291F] max-w-md mx-auto text-xs text-amber-200/70">
                {calculateScore() / quizScenarios.length >= 0.8 ? (
                  <p className="text-emerald-300 font-semibold">
                    Phản xạ rất tốt! Bạn đã nắm vững võ lý Tý Ngọ Tuyến và khẩu quyết giải phóng lực của Phật Gia Vịnh Xuân.
                  </p>
                ) : (
                  <p className="text-amber-300 font-semibold">
                    Khá tốt! Hãy ôn lại các chiêu thức Than Thủ, Bàng Thủ và quy chuẩn Tấn Kiềm Dương để phản xạ sắc bén hơn.
                  </p>
                )}
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => startQuiz(quizScenarios.length)}
                  className="px-5 py-2.5 rounded-xl bg-[#E2B743] text-[#140C08] text-xs font-bold hover:brightness-110 shadow-lg"
                >
                  Làm Lại Đề Này
                </button>
                <button
                  onClick={() => setActiveMode("library")}
                  className="px-5 py-2.5 rounded-xl bg-[#2A1B10] border border-[#3D291F] text-xs font-bold text-amber-100 hover:text-white"
                >
                  Quay Lại Thư Viện 200 Tình Huống
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* MODAL CHI TIẾT TRẮC NGHIỆM ĐƠN LẺ */}
      {selectedScenarioForModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fadeIn"
          onClick={() => setSelectedScenarioForModal(null)}
        >
          <div
            className="glass-panel w-full max-w-2xl rounded-2xl border border-[#E2B743]/50 p-6 space-y-4 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#3D291F] pb-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#E2B743] bg-[#E2B743]/15 px-2.5 py-0.5 rounded border border-[#E2B743]/30">
                  #{getScenarioNumber(selectedScenarioForModal.id, selectedScenarioForModal.title).toString().padStart(3, "0")}
                </span>
                <span className="text-xs font-semibold text-amber-200/80">
                  {selectedScenarioForModal.category}
                </span>
              </div>
              <button
                onClick={() => setSelectedScenarioForModal(null)}
                aria-label="Đóng chi tiết tình huống"
                className="text-amber-400 hover:text-white text-xs font-bold px-2.5 py-1 rounded bg-[#20150F] border border-[#3D291F] cursor-pointer"
              >
                Đóng ✕
              </button>
            </div>

            <h3 className="text-base sm:text-lg font-bold text-[#FBF8F3]">
              {getCleanScenarioTitle(selectedScenarioForModal.title)}
            </h3>

            <div className="p-3.5 rounded-xl bg-[#20150F] border border-[#3D291F] text-xs space-y-2">
              <p className="text-rose-300">
                <strong>Địch:</strong> {selectedScenarioForModal.opponentAction}
              </p>
              <p className="text-emerald-300">
                <strong>Hóa giải:</strong> {selectedScenarioForModal.wingChunSolution}
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <p className="text-xs font-bold text-[#E2B743] uppercase tracking-wide">
                Câu Hỏi Trắc Nghiệm Phản Xạ:
              </p>
              <p className="text-sm font-medium text-amber-100">
                {selectedScenarioForModal.quiz.question}
              </p>

              <div className="space-y-1.5 pt-2">
                {selectedScenarioForModal.quiz.options.map((opt, i) => (
                  <div
                    key={i}
                    className={`p-2.5 rounded-lg text-xs border ${
                      i === selectedScenarioForModal.quiz.correctIndex
                        ? "bg-emerald-950/80 border-emerald-500 text-emerald-200 font-semibold"
                        : "bg-[#140C08] border-[#3D291F] text-amber-200/70"
                    }`}
                  >
                    <span className="font-mono font-bold mr-2">{String.fromCharCode(65 + i)}.</span>
                    {opt}
                    {i === selectedScenarioForModal.quiz.correctIndex && (
                      <span className="ml-2 text-[10px] text-emerald-400 font-bold uppercase">(Đáp án chuẩn)</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#140C08] border border-[#3D291F] text-xs text-amber-200/80 space-y-1">
              <strong className="text-[#E2B743] block">Võ lý & Giải phẫu:</strong>
              <p>{selectedScenarioForModal.quiz.explanation}</p>
              <p className="text-[11px] text-amber-300/60 italic pt-1">{selectedScenarioForModal.biomechanics}</p>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              {onNavigateForm && (
                <button
                  onClick={() => {
                    const formId = selectedScenarioForModal.relatedFormId;
                    const code = selectedScenarioForModal.relatedTechCode;
                    setSelectedScenarioForModal(null);
                    onNavigateForm(formId, code);
                  }}
                  className="px-4 py-2 rounded-xl bg-[#E2B743] text-[#140C08] text-xs font-bold hover:brightness-110 flex items-center gap-1.5"
                >
                  <span>Xem Phân Thế Chiêu Thức Này</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
