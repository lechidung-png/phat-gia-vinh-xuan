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

export function getLessonFullText(lessonId: string): LessonFullText | null {
  return LESSONS_FULL_TEXT[lessonId] || null;
}
