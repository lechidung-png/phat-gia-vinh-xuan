import { CANONICAL_LESSONS, CanonicalLesson, MotionStep } from "@/data/canonicalCatalog";
import { MONOGRAPHS, MonographSection } from "@/data/monographs";
import { Technique } from "@/data/techniques";
import { cleanMotionTitle } from "@/lib/formatters";

// Chuẩn hóa chuỗi tiếng Việt: Bỏ dấu và đưa về chữ thường
export function removeVietnameseAccents(str: string): string {
  if (!str) return "";
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d")
    .trim();
}

export interface SearchResultItem {
  id: string;
  type: "technique" | "monograph";
  title: string;
  subtitle: string;
  badge: string;
  imgUrl?: string;
  highlightSnippet?: string;
  rawTechnique?: Technique;
  rawMonograph?: MonographSection;
  score: number;
}

interface IndexedLessonItem {
  lesson: CanonicalLesson;
  normTitle: string;
  normGroupId: string;
  normPageRange: string;
  summaryLabel: string;
  rawTechnique: Technique;
}

interface IndexedMotionItem {
  lesson: CanonicalLesson;
  motion: MotionStep;
  motionIndex: number;
  normLessonTitle: string;
  normStepNo: string;
  normBookStepNo: string;
  normDisplayId: string;
  normDesc: string;
  rawTechnique: Technique;
}

interface IndexedMonographItem {
  mono: MonographSection;
  normTitle: string;
  normExcerpt: string;
  normContent: string;
  normChapter: string;
}

// 1. Tiền xử lý chỉ mục 36 Bài Học Chuẩn (Canonical Lessons)
const INDEXED_LESSONS: IndexedLessonItem[] = CANONICAL_LESSONS.map((lesson) => {
  const firstMotion = lesson.motions?.[0];
  const firstImg =
    firstMotion?.img2xUrl ||
    firstMotion?.imgUrl ||
    lesson.assets?.[0]?.img2xUrl ||
    lesson.assets?.[0]?.imgUrl ||
    "/assets/hinh-2x/p038-h01.png";

  const motionCount = lesson.motions?.length || 0;
  const isReadingLesson = motionCount === 0;
  const summaryLabel =
    motionCount > 0
      ? `${motionCount} bước động tác • ${lesson.assetCount} ảnh`
      : lesson.assetCount > 0
        ? `Chương lý thuyết • ${lesson.assetCount} hình tư liệu`
        : "Chương khảo cứu toàn văn";

  const rawTech: Technique = {
    id: lesson.id,
    code: lesson.id.toUpperCase(),
    name: lesson.title,
    formId: lesson.id,
    formName: lesson.title,
    order: lesson.bookOrder,
    summary: summaryLabel,
    stances: [],
    hands: [],
    targetZones: [],
    difficulty: "Cơ bản",
    motionIndex: 0,
    isReadingLesson,
    steps: [
      {
        stepNo: firstMotion?.stepNo || "1",
        desc: firstMotion?.desc || lesson.title,
        imgUrl: firstImg,
        keypoints: [],
      },
    ],
  };

  return {
    lesson,
    normTitle: removeVietnameseAccents(lesson.title),
    normGroupId: removeVietnameseAccents(lesson.groupId),
    normPageRange: removeVietnameseAccents(lesson.pageRange),
    summaryLabel,
    rawTechnique: rawTech,
  };
});

// 2. Tiền xử lý chỉ mục 917 Động Tác thuộc 18 Bài Quyền & Binh Khí
const INDEXED_MOTIONS: IndexedMotionItem[] = [];
for (const lesson of CANONICAL_LESSONS) {
  const motions = lesson.motions || [];
  for (let mIdx = 0; mIdx < motions.length; mIdx++) {
    const motion = motions[mIdx];
    const stepLabel =
      motion.bookStepNo && motion.bookStepNo !== motion.stepNo
        ? `Chiêu ${motion.bookStepNo} (Bước ${motion.stepNo})`
        : `Thế ${motion.stepNo}`;

    const rawTech: Technique = {
      id: `${lesson.id}-${motion.id}`,
      code: `THE_${motion.bookStepNo || motion.stepNo}`,
      name: `${lesson.title} — ${stepLabel}`,
      formId: lesson.id,
      formName: lesson.title,
      order: parseInt(motion.stepNo, 10) || mIdx + 1,
      summary: cleanMotionTitle(motion.desc),
      stances: [],
      hands: [],
      targetZones: [],
      difficulty: "Cơ bản",
      motionIndex: mIdx,
      bookStepNo: motion.bookStepNo || motion.stepNo,
      isReadingLesson: false,
      steps: [
        {
          stepNo: motion.stepNo,
          desc: cleanMotionTitle(motion.desc),
          imgUrl: motion.img2xUrl || motion.imgUrl,
          keypoints: [],
        },
      ],
    };

    INDEXED_MOTIONS.push({
      lesson,
      motion,
      motionIndex: mIdx,
      normLessonTitle: removeVietnameseAccents(lesson.title),
      normStepNo: motion.stepNo.toLowerCase(),
      normBookStepNo: (motion.bookStepNo || motion.stepNo).toLowerCase(),
      normDisplayId: (motion.displayId || "").toLowerCase(),
      normDesc: removeVietnameseAccents(motion.desc),
      rawTechnique: rawTech,
    });
  }
}

// 3. Tiền xử lý chỉ mục Chuyên Khảo Lý Luận (Monographs)
const INDEXED_MONOGRAPHS: IndexedMonographItem[] = MONOGRAPHS.map((mono) => ({
  mono,
  normTitle: removeVietnameseAccents(mono.title),
  normExcerpt: removeVietnameseAccents(mono.excerpt),
  normContent: removeVietnameseAccents(mono.content.join(" ")),
  normChapter: removeVietnameseAccents(mono.chapter),
}));

/**
 * In-memory Search Engine tối ưu hóa cho Di Sản Phật Gia Vịnh Xuân
 * Phủ kín 36 bài học sách gốc, 917 bước động tác (1.095 tư liệu ảnh) và 6 chuyên đề khảo cứu.
 */
export function searchKnowledgeBase(query: string): SearchResultItem[] {
  const cleanQuery = query.trim();
  if (!cleanQuery) return [];

  const normQuery = removeVietnameseAccents(cleanQuery);
  const queryTokens = normQuery.split(/\s+/).filter(Boolean);

  const results: SearchResultItem[] = [];

  // A. Tìm kiếm theo Bài Học (36 bài học sách gốc)
  for (const item of INDEXED_LESSONS) {
    const { lesson, normTitle, normGroupId, summaryLabel, rawTechnique } = item;
    let score = 0;

    if (normTitle === normQuery || lesson.id === normQuery) {
      score += 150;
    } else if (normTitle.includes(normQuery)) {
      score += 80;
    }

    let tokensMatched = 0;
    for (const token of queryTokens) {
      if (normTitle.includes(token) || normGroupId.includes(token)) {
        tokensMatched++;
      }
    }
    if (tokensMatched === queryTokens.length) {
      score += 30 * tokensMatched;
    }

    if (score > 0) {
      const firstImg = rawTechnique.steps?.[0]?.imgUrl || "/assets/hinh-2x/p038-h01.png";
      results.push({
        id: lesson.id,
        type: "technique",
        title: lesson.title,
        subtitle: `${summaryLabel} • Trang ${lesson.pageRange}`,
        badge: `Bài ${lesson.bookOrder}`,
        imgUrl: firstImg,
        highlightSnippet: rawTechnique.isReadingLesson
          ? "Mở chương đọc toàn văn sách gốc"
          : "Mở bài luyện tương tác từng động tác",
        rawTechnique,
        score,
      });
    }
  }

  // B. Tìm kiếm theo từng Động Tác (917 Motions)
  const numMatch = cleanQuery.match(/\b\d+(?:\.\d+)?\b/);
  for (const item of INDEXED_MOTIONS) {
    const {
      lesson,
      motion,
      normLessonTitle,
      normStepNo,
      normBookStepNo,
      normDisplayId,
      normDesc,
      rawTechnique,
    } = item;
    let score = 0;

    // Khớp mã ảnh thư viện Hxxxx (ví dụ "H0120", "h0001")
    if (normDisplayId && (normDisplayId === normQuery || normQuery.includes(normDisplayId))) {
      score += 120;
    }

    // Khớp số thứ tự thế võ hoặc số chiêu sách gốc (ví dụ "15", "2.5", "39.1")
    if (numMatch) {
      const targetNum = numMatch[0];
      if (targetNum === normBookStepNo) {
        score += 55;
      } else if (targetNum === normStepNo) {
        score += 45;
      }
    }

    // Khớp tên bài học trong truy vấn
    if (normLessonTitle.includes(normQuery)) {
      score += 30;
    }

    // Khớp mô tả chiêu thức
    if (normDesc.includes(normQuery)) {
      score += 60;
    }

    // Khớp từng token từ khóa
    let tokensMatched = 0;
    for (const token of queryTokens) {
      if (
        normDesc.includes(token) ||
        normLessonTitle.includes(token) ||
        normBookStepNo === token ||
        normDisplayId === token
      ) {
        tokensMatched++;
      }
    }
    if (tokensMatched === queryTokens.length) {
      score += 20 * tokensMatched;
    }

    if (score > 30) {
      const stepBadge =
        motion.bookStepNo && motion.bookStepNo !== motion.stepNo
          ? `Chiêu ${motion.bookStepNo}`
          : `#${motion.stepNo}`;
      results.push({
        id: `${lesson.id}-${motion.id}`,
        type: "technique",
        title: rawTechnique.name,
        subtitle: `${lesson.title} • Ảnh ${motion.displayId} • Trang ${motion.pdfPage}`,
        badge: stepBadge,
        imgUrl: motion.img2xUrl || motion.imgUrl,
        highlightSnippet: cleanMotionTitle(motion.desc),
        rawTechnique,
        score,
      });
    }
  }

  // C. Tìm kiếm trong các Chuyên Đề Lý Luận (Monographs)
  for (const item of INDEXED_MONOGRAPHS) {
    const { mono, normTitle, normExcerpt, normContent, normChapter } = item;
    let score = 0;

    if (normTitle.includes(normQuery)) score += 60;
    if (normExcerpt.includes(normQuery)) score += 30;
    if (normChapter.includes(normQuery)) score += 20;

    let tokensMatched = 0;
    for (const token of queryTokens) {
      if (normTitle.includes(token) || normExcerpt.includes(token) || normContent.includes(token)) {
        tokensMatched++;
      }
    }
    if (tokensMatched === queryTokens.length) {
      score += 15 * tokensMatched;
    }

    if (normContent.includes(normQuery)) score += 10;

    if (score > 25) {
      results.push({
        id: mono.id,
        type: "monograph",
        title: mono.title,
        subtitle: `${mono.chapter} • Đọc ~${mono.readTime}`,
        badge: mono.badge,
        highlightSnippet: mono.excerpt,
        rawMonograph: mono,
        score,
      });
    }
  }

  // Sắp xếp kết quả theo điểm số giảm dần
  return results.sort((a, b) => b.score - a.score);
}
