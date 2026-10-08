import { Technique, TECHNIQUES } from "@/data/techniques";
import { MONOGRAPHS, MonographSection } from "@/data/monographs";
import {
  TIEU_NIEM_DAU_TECHNIQUES,
  TAM_KIEU_TECHNIQUES,
  TIEU_CHI_TECHNIQUES,
  DOI_LUYEN_108_TECHNIQUES,
  TIEN_LUI_DON_108_TECHNIQUES,
  TIEN_LUI_DOI_108_TECHNIQUES,
} from "@/data/all_7_forms";

const ALL_7_FORMS_TECHNIQUES: Technique[] = [
  ...TIEU_NIEM_DAU_TECHNIQUES,
  ...TAM_KIEU_TECHNIQUES,
  ...TIEU_CHI_TECHNIQUES,
  ...TECHNIQUES,
  ...DOI_LUYEN_108_TECHNIQUES,
  ...TIEN_LUI_DON_108_TECHNIQUES,
  ...TIEN_LUI_DOI_108_TECHNIQUES,
];

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
  highlightSnippet?: string;
  rawTechnique?: Technique;
  rawMonograph?: MonographSection;
  score: number;
}

/**
 * In-memory Search Engine tối ưu hóa cho toàn bộ 7 Bài Quyền và các chuyên đề Vịnh Xuân
 * Độ trễ tìm kiếm < 2ms, hỗ trợ tìm kiếm không dấu, tìm theo số chiêu, tấn pháp, thủ pháp
 */
export function searchKnowledgeBase(query: string): SearchResultItem[] {
  const cleanQuery = query.trim();
  if (!cleanQuery) return [];

  const normQuery = removeVietnameseAccents(cleanQuery);
  const queryTokens = normQuery.split(/\s+/).filter(Boolean);

  const results: SearchResultItem[] = [];

  // 1. Tìm kiếm trong Toàn Bộ 7 Bài Quyền Chính Thống
  for (const tech of ALL_7_FORMS_TECHNIQUES) {
    const normCode = removeVietnameseAccents(tech.code);
    const normName = removeVietnameseAccents(tech.name);
    const normSummary = removeVietnameseAccents(tech.summary);
    const normCombat = removeVietnameseAccents(tech.combatApplication || "");
    const normStances = removeVietnameseAccents(tech.stances.join(" "));
    const normHands = removeVietnameseAccents(tech.hands.join(" "));
    const normZones = removeVietnameseAccents(tech.targetZones.join(" "));
    const normFormName = removeVietnameseAccents(tech.formName);
    const normInstructor = removeVietnameseAccents(tech.instructor || "");

    let score = 0;

    // Khớp chính xác mã chiêu thức (ví dụ: "38", "chiêu 38", "chieu 38", "the 38")
    const numMatch = cleanQuery.match(/\b\d{1,3}\b/);
    if (numMatch && parseInt(numMatch[0], 10) === tech.order) {
      score += 100;
    } else if (normCode === normQuery) {
      score += 90;
    }

    // Khớp tên chiêu
    if (normName.includes(normQuery)) {
      score += 60;
    }

    // Khớp thủ pháp, tấn pháp & vùng công phá
    if (normHands.includes(normQuery)) score += 40;
    if (normStances.includes(normQuery)) score += 35;
    if (normZones.includes(normQuery)) score += 30;
    if (normFormName.includes(normQuery)) score += 25;
    if (normInstructor.includes(normQuery)) score += 20;

    // Khớp từng từ khóa token
    let tokensMatched = 0;
    for (const token of queryTokens) {
      if (
        normName.includes(token) ||
        normHands.includes(token) ||
        normStances.includes(token) ||
        normSummary.includes(token) ||
        normCombat.includes(token)
      ) {
        tokensMatched++;
      }
    }

    if (tokensMatched === queryTokens.length) {
      score += 20 * tokensMatched;
    }

    // Khớp nội dung tóm tắt & phân thế thực chiến
    if (normSummary.includes(normQuery)) score += 15;
    if (normCombat.includes(normQuery)) score += 15;

    if (score > 0) {
      results.push({
        id: tech.id,
        type: "technique",
        title: tech.name,
        subtitle: `${tech.sectionName || tech.formName} • ${tech.instructor || "HLV"}`,
        badge: tech.code.replace("CHIEU_", ""),
        highlightSnippet: tech.summary,
        rawTechnique: tech,
        score,
      });
    }
  }

  // 2. Tìm kiếm trong Tàng Kinh Các (Chuyên đề sách 2012)
  for (const mono of MONOGRAPHS) {
    const normTitle = removeVietnameseAccents(mono.title);
    const normExcerpt = removeVietnameseAccents(mono.excerpt);
    const normContent = removeVietnameseAccents(mono.content.join(" "));
    const normChapter = removeVietnameseAccents(mono.chapter);

    let score = 0;

    if (normTitle.includes(normQuery)) score += 50;
    if (normExcerpt.includes(normQuery)) score += 25;
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

    if (score > 0) {
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
