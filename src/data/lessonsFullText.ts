// Dữ liệu toàn văn 36 bài học từ sách gốc Phật Gia Vịnh Xuân
// Nguồn: Phat-gia-Vinh-Xuan-Quyen-Phuc-che/noi-dung/

import lessonsData from "./lessonsFullText.json";
import { CANONICAL_LESSONS } from "./canonicalCatalog";

export interface LessonFullText {
  lessonId: string;
  title: string;
  bookOrder: number;
  pdfPages: number[];
  markdown: string;
}

const RAW_FULL_TEXT = lessonsData as unknown as Record<string, string | LessonFullText>;

const FULL_TEXT_ALIAS_MAP: Record<string, string> = {
  "bai-08-1": "bai-08",
  "bai-08-2": "bai-08",
  "bai-20": "gioi-thieu-ngu-hinh",
  "gioi-thieu-ngu-hinh": "bai-20",
  "bai-32": "con",
  "con": "bai-32",
  "bai-33": "lieu-diep-kiem",
  "lieu-diep-kiem": "bai-33",
  "thong-tin-sach": "bai-01",
  "loi-gioi-thieu": "bai-02",
  "su-to-nguyen-te-cong": "bai-03",
  "vo-su-tran-thuc-tien": "bai-04",
  "lich-su-phat-gia-vinh-xuan": "bai-05",
  "nghi-thuc-bai-to": "bai-06",
  "tieu-niem-dau": "bai-07",
  "tam-kieu": "bai-09",
  "tieu-chi": "bai-10",
  "moc-nhan-1": "bai-17",
  "moc-nhan-2": "bai-18",
  "bai-luyen-tong-hop": "bai-19",
  "long-quyen": "bai-21",
  "xa-quyen": "bai-22",
  "ho-quyen": "bai-23",
  "bao-quyen": "bai-24",
  "hac-quyen": "bai-25",
  "ngu-hinh-doi-luyen": "bai-26",
  "linh-giac": "bai-27",
  "nguyen-tac-va-khau-quyet": "bai-28",
  "noi-cong": "bai-29",
  "gioi-thieu-vu-khi": "bai-30",
  "bat-tram-dao": "bai-31",
  "200-tinh-huong": "bai-34",
  "thieu-lam-tu": "bai-35",
  "phu-luc-nhan-vat": "bai-36",
};

function toLessonFullText(key: string, val: string | LessonFullText): LessonFullText {
  if (typeof val === "object" && val !== null && "markdown" in val) {
    return val;
  }
  const lessonMeta = CANONICAL_LESSONS.find(
    (l) => l.id === key || l.id === FULL_TEXT_ALIAS_MAP[key]
  );
  return {
    lessonId: lessonMeta?.id || key,
    title: lessonMeta?.title || key,
    bookOrder: lessonMeta?.bookOrder || 1,
    pdfPages: lessonMeta?.pdfPages || [1],
    markdown: typeof val === "string" ? val : "",
  };
}

export function getLessonFullText(lessonId: string): LessonFullText | null {
  if (!lessonId) return null;
  const direct = RAW_FULL_TEXT[lessonId];
  if (direct) return toLessonFullText(lessonId, direct);
  const mappedKey = FULL_TEXT_ALIAS_MAP[lessonId];
  if (mappedKey && RAW_FULL_TEXT[mappedKey]) {
    return toLessonFullText(mappedKey, RAW_FULL_TEXT[mappedKey]);
  }
  return null;
}
