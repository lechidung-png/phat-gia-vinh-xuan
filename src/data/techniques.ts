// Định nghĩa kiểu dữ liệu Kỹ thuật & Động tác (TypeScript Interfaces)
// Nguồn dữ liệu thực tế: canonicalCatalog.ts (tích hợp từ gói Vinh xuan Phat gia / Phat-gia-Vinh-Xuan-Quyen-Phuc-che)

export interface TechniqueStep {
  stepNo: string;
  desc: string;
  imgUrl: string;
  keypoints: string[];
  isSymmetricLeft?: boolean;
}

export interface SparringInfo {
  attacker: string;
  defender: string;
  tactics: string;
}

export interface Technique {
  id: string;
  code: string;
  name: string;
  formId: string;
  formName: string;
  sectionId?: string;
  sectionName?: string;
  order: number;
  summary: string;
  stances: string[];
  hands: string[];
  targetZones: string[];
  difficulty: "Cơ bản" | "Trung cấp" | "Nâng cao" | "Chuyên sâu";
  isNarrowStance?: boolean;
  stanceRule?: string;
  isSymmetricLeft?: boolean;
  symmetricRef?: string | null;
  symmetricNote?: string | null;
  steps: TechniqueStep[];
  combatApplication?: string;
  instructor?: string;
  isTwoPerson?: boolean;
  sparringInfo?: SparringInfo | null;
  motionIndex?: number;
  bookStepNo?: string;
  isReadingLesson?: boolean;
}
