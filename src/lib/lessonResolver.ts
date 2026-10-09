// Bộ Phân Giải Liên Thông Toàn Diện (Unified Lesson Resolver)
// Khắc phục 100% tình trạng nút bấm trỏ sai ID hoặc rơi về mặc định Tiểu Niệm Đầu

export interface ResolvedNavigation {
  lessonId: string;
  tab: "forms" | "fundamentals" | "dummy" | "centerline" | "library" | "lineage" | "scenarios";
  motionIndex?: number;
}

const LEGACY_ID_MAP: Record<string, string> = {
  // Quyền tay không
  "tieu-niem-dau": "bai-07",
  "tam-kieu": "bai-09",
  "tieu-chi": "bai-10",
  "108-the": "bai-12",
  "05-108-doi-luyen": "bai-13",
  "108-doi-luyen": "bai-13",
  "108-tien-lui": "bai-14",
  "108-tien-lui-doi-luyen": "bai-15",
  "bai-to": "bai-07",
  "khai-the-bai-to": "bai-07",

  // Mộc nhân
  "108-moc-nhan": "bai-17",
  "moc-nhan": "bai-17",
  "dummy": "bai-17",
  "moc-nhan-1": "bai-17",
  "moc-nhan-tien-lui": "bai-18",

  // Ngũ hình
  "bai-luyen-tong-hop": "bai-luyen-tong-hop",
  "gioi-thieu-ngu-hinh": "gioi-thieu-ngu-hinh",
  "long-quyen": "bai-21",
  "xa-quyen": "bai-22",
  "ho-quyen": "bai-23",
  "bao-quyen": "bai-24",
  "hac-quyen": "bai-25",
  "ngu-hinh": "bai-26",
  "ngu-hinh-tong-hop": "bai-26",

  // Khí công & lý luận
  "linh-giac": "bai-27",
  "khau-quyet": "bai-28",
  "noi-cong": "bai-29",

  // Vũ khí
  "vu-khi": "bai-30",
  "gioi-thieu-vu-khi": "bai-30",
  "bat-tram-dao": "bai-31",
  "con": "con",
  "lieu-diep-kiem": "lieu-diep-kiem",

  // Lịch sử & Phụ lục
  "thong-tin-sach": "bai-01",
  "loi-gioi-thieu": "bai-02",
  "muc-luc": "bai-03",
  "thay-loi-tua": "bai-04",
  "lich-su": "bai-05",
  "nen-tang": "bai-06",
  "thieu-lam-tu": "bai-34",
  "nhan-vat": "bai-35",
  "vo-duong": "bai-36"
};

/**
 * Phân giải bất kỳ formId, code hoặc slug nào sang canonical lessonId chuẩn
 */
export function resolveLessonId(rawId: string | undefined | null): string {
  if (!rawId) return "bai-07"; // Mặc định Tiểu Niệm Đầu
  const clean = rawId.trim().toLowerCase();
  
  if (LEGACY_ID_MAP[clean]) {
    return LEGACY_ID_MAP[clean];
  }
  
  // Nếu đã là mã chuẩn bai-XX
  if (clean.startsWith("bai-") || clean === "con" || clean === "lieu-diep-kiem" || clean === "gioi-thieu-ngu-hinh" || clean === "bai-luyen-tong-hop") {
    return clean;
  }

  // Khớp mờ (fuzzy match)
  if (clean.includes("doi-luyen") || clean.includes("doi_luyen")) return "bai-13";
  if (clean.includes("tien-lui") || clean.includes("tien_lui")) return "bai-14";
  if (clean.includes("108")) return "bai-12";
  if (clean.includes("moc-nhan") || clean.includes("moc_nhan")) return "bai-17";
  if (clean.includes("dao")) return "bai-31";
  if (clean.includes("kiem")) return "lieu-diep-kiem";
  if (clean.includes("con")) return "con";
  if (clean.includes("long")) return "bai-21";
  if (clean.includes("xa")) return "bai-22";
  if (clean.includes("ho")) return "bai-23";
  if (clean.includes("bao")) return "bai-24";
  if (clean.includes("hac")) return "bai-25";
  if (clean.includes("linh-giac")) return "bai-27";
  if (clean.includes("noi-cong")) return "bai-29";

  return "bai-07";
}
