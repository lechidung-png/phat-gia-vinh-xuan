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
  rawTechnique: Technique;
}

interface IndexedMotionItem {
  lesson: CanonicalLesson;
  motion: MotionStep;
  normLessonTitle: string;
  normStepNo: string;
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

// 1. Tiền xử lý chỉ mục Bài Học (Canonical Lessons)
const INDEXED_LESSONS: IndexedLessonItem[] = CANONICAL_LESSONS.map((lesson) => {
  const firstMotion = lesson.motions?.[0];
  const firstImg = firstMotion?.img2xUrl || firstMotion?.imgUrl || lesson.assets?.[0]?.img2xUrl || "/assets/hinh-2x/p038-h01.png";
  
  const rawTech: Technique = {
    id: lesson.id,
    code: lesson.id.toUpperCase(),
    name: lesson.title,
    formId: lesson.id,
    formName: lesson.title,
    order: lesson.bookOrder,
    summary: `${lesson.assetCount} động tác • ${lesson.pageRange}`,
    stances: [],
    hands: [],
    targetZones: [],
    difficulty: "Cơ bản",
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
    rawTechnique: rawTech,
  };
});

// 2. Tiền xử lý chỉ mục Động Tác (1.096 Motions)
const INDEXED_MOTIONS: IndexedMotionItem[] = [];
for (const lesson of CANONICAL_LESSONS) {
  for (const motion of lesson.motions || []) {
    const rawTech: Technique = {
      id: `${lesson.id}-${motion.id}`,
      code: `THE_${motion.stepNo}`,
      name: `${lesson.title} — Thế ${motion.stepNo}`,
      formId: lesson.id,
      formName: lesson.title,
      order: parseInt(motion.stepNo, 10) || 1,
      summary: cleanMotionTitle(motion.desc),
      stances: [],
      hands: [],
      targetZones: [],
      difficulty: "Cơ bản",
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
      normLessonTitle: removeVietnameseAccents(lesson.title),
      normStepNo: motion.stepNo,
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
 * In-memory Search Engine tối ưu hóa cho 100% Di Sản Phật Gia Vịnh Xuân
 * Đạt độ trễ < 1ms, phủ kín 34 bài học, 1.096 động tác và 12 chuyên luận kinh điển.
 */
export function searchKnowledgeBase(query: string): SearchResultItem[] {
  const cleanQuery = query.trim();
  if (!cleanQuery) return [];

  const normQuery = removeVietnameseAccents(cleanQuery);
  const queryTokens = normQuery.split(/\s+/).filter(Boolean);

  const results: SearchResultItem[] = [];

  // A. Tìm kiếm theo Bài Học (Ưu tiên bài quyền)
  for (const item of INDEXED_LESSONS) {
    const { lesson, normTitle, normGroupId, rawTechnique } = item;
    let score = 0;

    if (normTitle === normQuery) {
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
        subtitle: `${lesson.assetCount} động tác • ${lesson.pageRange}`,
        badge: `Bài ${lesson.bookOrder}`,
        imgUrl: firstImg,
        highlightSnippet: `Giáo trình chính thống • Phân bổ ${lesson.pageRange}`,
        rawTechnique,
        score,
      });
    }
  }

  // B. Tìm kiếm theo từng Động Tác (1.096 Motions)
  for (const item of INDEXED_MOTIONS) {
    const { lesson, motion, normLessonTitle, normStepNo, normDesc, rawTechnique } = item;
    let score = 0;

    // Khớp số thứ tự thế võ (ví dụ gõ "15", "thế 15", "động tác 15")
    const numMatch = cleanQuery.match(/\b\d{1,3}\b/);
    if (numMatch && numMatch[0] === normStepNo) {
      score += 45;
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
      if (normDesc.includes(token) || normLessonTitle.includes(token)) {
        tokensMatched++;
      }
    }
    if (tokensMatched === queryTokens.length) {
      score += 20 * tokensMatched;
    }

    if (score > 30) {
      results.push({
        id: `${lesson.id}-${motion.id}`,
        type: "technique",
        title: `${lesson.title} — Thế ${motion.stepNo}`,
        subtitle: `${lesson.title} • Trang ${motion.pdfPage}`,
        badge: `#${motion.stepNo}`,
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
