// Dữ liệu toàn văn 36 bài học và 225 trang sách gốc Phật Gia Vịnh Xuân
// Nguồn: Phat-gia-Vinh-Xuan-Quyen-Phuc-che/noi-dung/

import lessonsData from "./lessonsFullText.json";

export interface LessonFullText {
  lessonId: string;
  title: string;
  bookOrder: number;
  pdfPages: number[];
  markdown: string;
}

export const LESSONS_FULL_TEXT: Record<string, LessonFullText> = lessonsData as Record<string, LessonFullText>;

const FULL_TEXT_ALIAS_MAP: Record<string, string> = {
  "bai-08-1": "bai-08",
  "bai-08-2": "bai-08",
  "con": "bai-32",
  "lieu-diep-kiem": "bai-33",
  "gioi-thieu-ngu-hinh": "bai-20",
  "thong-tin-sach": "bai-01",
};

export function getLessonFullText(lessonId: string): LessonFullText | null {
  if (LESSONS_FULL_TEXT[lessonId]) return LESSONS_FULL_TEXT[lessonId];
  const mapped = FULL_TEXT_ALIAS_MAP[lessonId];
  if (mapped && LESSONS_FULL_TEXT[mapped]) return LESSONS_FULL_TEXT[mapped];
  return null;
}
