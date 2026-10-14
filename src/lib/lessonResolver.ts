// Bộ Phân Giải Liên Thông Toàn Diện (Unified Lesson & Motion Resolver)
// Chuẩn hóa ID bài học, đối chiếu số hiệu chiêu/thế gốc (bookStepNo) và hỗ trợ hoàn tác/tương thích ngược.

import { CANONICAL_LESSONS } from "@/data/canonicalCatalog";

export interface ResolvedNavigation {
  lessonId: string;
  tab: "forms" | "fundamentals" | "dummy" | "centerline" | "library" | "lineage" | "scenarios";
  motionIndex?: number;
}

const LEGACY_ID_MAP: Record<string, string> = {
  // Quyền tay không & Đối luyện chuẩn từ 200 tình huống
  "01-tieu-niem-dau": "bai-07",
  "tieu-niem-dau": "bai-07",
  "02-tam-kieu": "bai-09",
  "tam-kieu": "bai-09",
  "bai-08-1": "bai-08",
  "bai-08-2": "bai-08",
  "03-tieu-chi": "bai-10",
  "tieu-chi": "bai-10",
  "04-108-tai-cho": "bai-12",
  "04-108-don-luyen": "bai-12",
  "108-the": "bai-12",
  "108-don-luyen": "bai-12",
  "05-108-tai-cho-doi": "bai-13",
  "05-108-doi-luyen": "bai-13",
  "108-doi-luyen": "bai-13",
  "06-108-tien-lui": "bai-14",
  "06-108-tien-lui-don": "bai-14",
  "108-tien-lui": "bai-14",
  "07-108-tien-lui-doi": "bai-15",
  "07-108-tien-lui-doi-luyen": "bai-15",
  "108-tien-lui-doi-luyen": "bai-15",
  "bai-to": "bai-06",
  "khai-the-bai-to": "bai-06",
  "nghi-thuc-bai-to": "bai-06",

  // Mộc nhân (bao gồm các biến thể ID trong 200 tình huống thực chiến)
  "08-moc-nhan": "bai-17",
  "08-moc-nhan-1": "bai-17",
  "08-moc-nhan-so-1": "bai-17",
  "08-moc-nhan-108": "bai-17",
  "108-moc-nhan": "bai-17",
  "moc-nhan": "bai-17",
  "dummy": "bai-17",
  "moc-nhan-1": "bai-17",
  "08-moc-nhan-108-doi-luyen": "bai-18",
  "09-moc-nhan-doi": "bai-18",
  "09-moc-nhan-tien-lui": "bai-18",
  "moc-nhan-tien-lui": "bai-18",
  "moc-nhan-2": "bai-18",

  // Ngũ hình
  "10-ngu-hinh": "gioi-thieu-ngu-hinh",
  "bai-19": "bai-luyen-tong-hop",
  "bai-luyen-tong-hop": "bai-luyen-tong-hop",
  "bai-20": "gioi-thieu-ngu-hinh",
  "gioi-thieu-ngu-hinh": "gioi-thieu-ngu-hinh",
  "long-quyen": "bai-21",
  "10-long-quyen": "bai-21",
  "xa-quyen": "bai-22",
  "11-xa-quyen": "bai-22",
  "ho-quyen": "bai-23",
  "12-ho-quyen": "bai-23",
  "bao-quyen": "bai-24",
  "13-bao-quyen": "bai-24",
  "hac-quyen": "bai-25",
  "14-hac-quyen": "bai-25",
  "ngu-hinh": "bai-26",
  "ngu-hinh-tong-hop": "bai-26",
  "ngu-hinh-doi-luyen": "bai-26",
  "15-ngu-hinh-doi-luyen": "bai-26",

  // Khí công & lý luận
  "linh-giac": "bai-27",
  "khau-quyet": "bai-28",
  "nguyen-tac-va-khau-quyet": "bai-28",
  "noi-cong": "bai-29",

  // Vũ khí
  "vu-khi": "bai-30",
  "gioi-thieu-vu-khi": "bai-30",
  "bat-tram-dao": "bai-31",
  "16-bat-tram-dao": "bai-31",
  "bai-32": "con",
  "con": "con",
  "17-luc-diem-ban-con": "con",
  "luc-diem-ban-con": "con",
  "bai-33": "lieu-diep-kiem",
  "lieu-diep-kiem": "lieu-diep-kiem",
  "18-lieu-diep-kiem": "lieu-diep-kiem",

  // Lịch sử & Phụ lục
  "thong-tin-sach": "bai-01",
  "loi-gioi-thieu": "bai-02",
  "muc-luc": "bai-03",
  "thay-loi-tua": "bai-04",
  "lich-su": "bai-05",
  "nen-tang": "bai-06",
  "thieu-lam-tu": "bai-34",
  "nhan-vat": "bai-35",
  "vo-duong": "bai-36",
};

/**
 * Phân giải bất kỳ formId, code hoặc slug nào sang canonical lessonId chuẩn (36 bài)
 */
export function resolveLessonId(rawId: string | undefined | null): string {
  if (!rawId) return "bai-07"; // Mặc định Tiểu Niệm Đầu
  const clean = rawId.trim().toLowerCase();

  if (LEGACY_ID_MAP[clean]) {
    return LEGACY_ID_MAP[clean];
  }

  // Nếu đã là mã chuẩn trong CANONICAL_LESSONS
  if (CANONICAL_LESSONS.some((l) => l.id === clean)) {
    return clean;
  }

  // Khớp mờ (fuzzy match) — ưu tiên kiểm tra mộc nhân trước đối luyện/108 để tránh nuốt nhầm ID
  if (clean.includes("moc-nhan") || clean.includes("moc_nhan")) {
    if (clean.includes("tien-lui") || clean.includes("tien_lui") || clean.includes("doi") || clean.includes("2")) {
      return "bai-18";
    }
    return "bai-17";
  }

  if ((clean.includes("tien-lui") || clean.includes("tien_lui")) && (clean.includes("doi") || clean.includes("doi-luyen"))) {
    return "bai-15";
  }
  if (clean.includes("doi-luyen") || clean.includes("doi_luyen") || clean.includes("doi")) {
    return "bai-13";
  }
  if (clean.includes("tien-lui") || clean.includes("tien_lui")) {
    return "bai-14";
  }
  if (clean.includes("108")) {
    return "bai-12";
  }
  if (clean.includes("tam-kieu") || clean.includes("tam_kieu")) return "bai-09";
  if (clean.includes("tieu-chi") || clean.includes("tieu_chi")) return "bai-10";
  if (clean.includes("tieu-niem-dau") || clean.includes("tieu_niem_dau")) return "bai-07";
  if (clean.includes("dao")) return "bai-31";
  if (clean.includes("kiem")) return "lieu-diep-kiem";
  if (clean.includes("con")) return "con";
  if (clean.includes("long")) return "bai-21";
  if (clean.includes("xa")) return "bai-22";
  if (clean.includes("ho")) return "bai-23";
  if (clean.includes("bao")) return "bai-24";
  if (clean.includes("hac")) return "bai-25";
  if (clean.includes("linh-giac")) return "bai-27";
  if (clean.includes("khau-quyet")) return "bai-28";
  if (clean.includes("noi-cong")) return "bai-29";

  return "bai-07";
}

/**
 * Kiểm tra bài học có phải là chương lý thuyết / toàn văn (không có chuỗi động tác Dojo Player) hay không
 */
export function isReadingOnlyLesson(lessonId: string): boolean {
  const resolved = resolveLessonId(lessonId);
  const lesson = CANONICAL_LESSONS.find((l) => l.id === resolved);
  return !lesson || lesson.motions.length === 0;
}

/**
 * Chuẩn hóa chuỗi mã bước kỹ thuật từ techCode (ví dụ: "108_25" -> "25", "TND_02_5" -> "2.5", "DL_07_1" -> "7.1")
 */
export function parseStepFromTechCode(techCode?: string | null): string | null {
  if (!techCode) return null;
  const trimmed = techCode.trim();
  if (!trimmed) return null;

  // Tách phần hậu tố số sau tiền tố bài (ví dụ: "108_25", "TND_02_5", "TLDOI_18_1", "MN1_39_1")
  const parts = trimmed.split("_");
  const numericParts = parts.length > 1 ? parts.slice(1) : parts;
  const normalizedSegments = numericParts
    .map((seg) => {
      const m = seg.match(/\d+/);
      return m ? String(parseInt(m[0], 10)) : "";
    })
    .filter(Boolean);

  if (normalizedSegments.length === 0) return null;
  return normalizedSegments.join(".");
}

/**
 * Phân giải mục tiêu điều hướng từ Tình huống thực chiến (200 kịch bản) sang đúng bài quyền và chỉ số động tác (0-indexed)
 */
export function resolveScenarioTarget(
  formId: string | undefined | null,
  techCode?: string | null
): { lessonId: string; motionIndex: number; matchedStepNo?: string } {
  const lessonId = resolveLessonId(formId);
  const lesson = CANONICAL_LESSONS.find((l) => l.id === lessonId);
  if (!lesson || lesson.motions.length === 0) {
    return { lessonId, motionIndex: 0 };
  }

  const targetStep = parseStepFromTechCode(techCode);
  if (!targetStep) {
    return { lessonId, motionIndex: 0, matchedStepNo: lesson.motions[0]?.bookStepNo };
  }

  // 1. Khớp chính xác bookStepNo (ví dụ "2.5" === "2.5" hoặc "25" === "25")
  const exactIdx = lesson.motions.findIndex((m) => m.bookStepNo === targetStep);
  if (exactIdx !== -1) {
    return {
      lessonId,
      motionIndex: exactIdx,
      matchedStepNo: lesson.motions[exactIdx].bookStepNo,
    };
  }

  // 2. Khớp bước con đầu tiên của chiêu đó (ví dụ targetStep = "25" khớp "25.1")
  const subStepPrefix = `${targetStep}.`;
  const subStepIdx = lesson.motions.findIndex((m) => m.bookStepNo?.startsWith(subStepPrefix));
  if (subStepIdx !== -1) {
    return {
      lessonId,
      motionIndex: subStepIdx,
      matchedStepNo: lesson.motions[subStepIdx].bookStepNo,
    };
  }

  // 3. Khớp theo phần nguyên của chiêu (ví dụ targetStep = "7.2" nhưng bài chỉ có "7" hoặc "7.1")
  const majorNum = parseInt(targetStep.split(".")[0], 10);
  if (!Number.isNaN(majorNum) && majorNum > 0) {
    const majorIdx = lesson.motions.findIndex((m) => {
      if (!m.bookStepNo) return false;
      const mMajor = parseInt(m.bookStepNo.split(".")[0], 10);
      return mMajor === majorNum;
    });
    if (majorIdx !== -1) {
      return {
        lessonId,
        motionIndex: majorIdx,
        matchedStepNo: lesson.motions[majorIdx].bookStepNo,
      };
    }

    // 4. Nếu là chiêu đối xứng không in ảnh riêng trong sách (ví dụ Chiêu 25 bài 108 đơn luyện tập tương tự Chiêu 24),
    // chọn động tác minh họa liền trước có mMajor <= majorNum
    let nearestPrevIdx = -1;
    for (let i = 0; i < lesson.motions.length; i++) {
      const m = lesson.motions[i];
      if (!m.bookStepNo || m.isSymmetricLeft) continue;
      const mMajor = parseInt(m.bookStepNo.split(".")[0], 10);
      if (!Number.isNaN(mMajor) && mMajor <= majorNum) {
        nearestPrevIdx = i;
      }
    }
    if (nearestPrevIdx !== -1) {
      return {
        lessonId,
        motionIndex: nearestPrevIdx,
        matchedStepNo: lesson.motions[nearestPrevIdx].bookStepNo,
      };
    }

    // 5. Fallback kẹp biên an toàn trong phạm vi [0, lesson.motions.length - 1]
    const clampedIdx = Math.max(0, Math.min(lesson.motions.length - 1, majorNum - 1));
    return {
      lessonId,
      motionIndex: clampedIdx,
      matchedStepNo: lesson.motions[clampedIdx].bookStepNo,
    };
  }

  return { lessonId, motionIndex: 0, matchedStepNo: lesson.motions[0]?.bookStepNo };
}
