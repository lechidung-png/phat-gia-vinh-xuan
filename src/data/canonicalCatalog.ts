// TẬP HỢP TOÀN BỘ 11 NHÓM & 36 BÀI HỌC VÀ 1.096 ẢNH PHỤC CHẾ PHẬT GIA VỊNH XUÂN
// Căn cứ: Tài liệu bàn giao kỹ thuật BAN-GIAO-PHAT-TRIEN-WEBSITE.md

export interface ContentGroup {
  id: string;
  order: number;
  name: string;
  desc: string;
  pages: string;
  icon: string;
}

export interface MotionAsset {
  assetId: string;
  displayId: string;
  pdfPage: number;
  imgUrl: string;
  img2xUrl: string;
  width: number;
  height: number;
}

export interface MotionStep {
  id: string;
  stepNo: string;
  assetId: string;
  displayId: string;
  pdfPage: number;
  imgUrl: string;
  img2xUrl: string;
  width: number;
  height: number;
  desc: string;
  isSymmetricLeft?: boolean;
}

export interface CanonicalLesson {
  id: string;
  title: string;
  groupId: string;
  bookOrder: number;
  contentType: string;
  pdfPages: number[];
  pageRange: string;
  assetCount: number;
  assets: MotionAsset[];
  motions: MotionStep[];
  recommendedPrerequisites: string[];
}

export interface CurriculumStage {
  id: string;
  sequence: number;
  title: string;
  desc: string;
  lessonIds: string[];
}

export const CONTENT_GROUPS: ContentGroup[] = [
  {
    "id": "thong-tin-sach",
    "order": 1,
    "name": "Thông Tin & Khai Môn",
    "desc": "Xuất bản, tác giả, lời giới thiệu và thay lời tựa của sách.",
    "pages": "Trang 1 – 9",
    "icon": "BookOpen"
  },
  {
    "id": "lich-su",
    "order": 2,
    "name": "Lịch Sử & Truyền Thừa",
    "desc": "Sự hình thành và phát triển Phật gia Vịnh Xuân quyền qua các thế hệ.",
    "pages": "Trang 10 – 24",
    "icon": "GitBranch"
  },
  {
    "id": "nen-tang",
    "order": 3,
    "name": "Nền Tảng Quyền Thuật",
    "desc": "Quyền thuật và quyền pháp cơ bản, Tam Thủ cốt lõi và Nhị Tự Kiềm Dương Tấn.",
    "pages": "Trang 25 – 35",
    "icon": "Compass"
  },
  {
    "id": "quyen-tay-khong",
    "order": 4,
    "name": "Quyền Pháp Tay Không",
    "desc": "Tiểu Niệm Đầu, Tầm Kiều, Tiêu Chỉ, Bài 108 tại chỗ và Bài 108 tiến lùi (đơn & đối luyện).",
    "pages": "Trang 36 – 91",
    "icon": "Swords"
  },
  {
    "id": "moc-nhan",
    "order": 5,
    "name": "Cọc Gỗ Mộc Nhân (Mộc Nhân Thung)",
    "desc": "Bản vẽ nhân trắc học, cọc 5 tầng 1954 tại 38 Gia Ngư, Bài 1 & Bài tiến lùi.",
    "pages": "Trang 92 – 116",
    "icon": "Layers"
  },
  {
    "id": "ngu-hinh-va-tong-hop",
    "order": 6,
    "name": "Tổng Hợp & Ngũ Hình Quyền",
    "desc": "Bài luyện tổng hợp và 5 bài Ngũ Hình Quyền: Long, Xà, Hổ, Báo, Hạc.",
    "pages": "Trang 117 – 145",
    "icon": "Flame"
  },
  {
    "id": "linh-giac",
    "order": 7,
    "name": "Linh Giác (Niêm Thủ / Tay Dính)",
    "desc": "Luyện thính kình, độ nhạy phản xạ cơ bắp và niêm dính hóa giải đòn thế.",
    "pages": "Trang 146 – 160",
    "icon": "Target"
  },
  {
    "id": "khau-quyet",
    "order": 8,
    "name": "Cốt Tủy Khẩu Quyết",
    "desc": "Nguyên tắc sinh tồn, trục Tý Ngọ Tuyến và các khẩu quyết truyền đời.",
    "pages": "Trang 161 – 166",
    "icon": "Quote"
  },
  {
    "id": "noi-cong",
    "order": 9,
    "name": "Khí Công & Nội Công Dưỡng Sinh",
    "desc": "Khí trầm đan điền, đả thông kinh mạch và phương pháp phát kình nội gia.",
    "pages": "Trang 167 – 184",
    "icon": "Zap"
  },
  {
    "id": "vu-khi",
    "order": 10,
    "name": "Kho Binh Khí Cổ Truyền",
    "desc": "Bát Trảm Đao song đao, Lục Điểm Bán Côn uy lực và Liễu Diệp Kiếm thanh thoát.",
    "pages": "Trang 185 – 206",
    "icon": "Shield"
  },
  {
    "id": "tu-lieu",
    "order": 11,
    "name": "Tư Liệu & Phụ Lục",
    "desc": "Lịch sử Thiếu Lâm Tự, nhân vật tiêu biểu võ học Trung Hoa và giới thiệu võ đường.",
    "pages": "Phụ Lục & Tư Liệu",
    "icon": "Award"
  }
];

export const CURRICULUM_STAGES: CurriculumStage[] = [
  {
    id: "lam-quen",
    sequence: 1,
    title: "1. Làm Quen & Khai Môn",
    desc: "Nắm bắt thông tin môn phái, bối cảnh lịch sử, triết lý Phật gia và nền tảng quyền thuật.",
    lessonIds: ["bai-01", "bai-02", "bai-04", "bai-05", "bai-06"]
  },
  {
    id: "nen-tang",
    sequence: 2,
    title: "2. Nền Tảng Tiểu Niệm Đầu",
    desc: "Bài quyền căn bản số 1 của Phật Gia Vịnh Xuân: Luyện kiềm dương tấn, khai thông kinh lạc.",
    lessonIds: ["bai-07"]
  },
  {
    id: "mo-rong",
    sequence: 3,
    title: "3. Mở Rộng Quyền Pháp",
    desc: "Tầm Kiều (tìm cầu bắc cầu) và Tiêu Chỉ (ngón tay xuyên thấu, đòn hiểm cận chiến).",
    lessonIds: ["bai-08-1", "bai-09", "bai-08-2", "bai-10"]
  },
  {
    id: "nhom-108",
    sequence: 4,
    title: "4. Hệ Thống Bài Võ 108 Thế",
    desc: "108 thế tại chỗ và tiến lùi (bao gồm cả phân thế đơn luyện và đối luyện 2 người).",
    lessonIds: ["bai-11", "bai-12", "bai-13", "bai-14", "bai-15"]
  },
  {
    id: "moc-nhan",
    sequence: 5,
    title: "5. Cọc Gỗ Mộc Nhân",
    desc: "Luyện thung kình, phản xạ nêm góc và bộ pháp quanh cọc mộc nhân gỗ.",
    lessonIds: ["bai-16", "bai-17", "bai-18"]
  },
  {
    id: "tong-hop-ngu-hinh",
    sequence: 6,
    title: "6. Tổng Hợp & Ngũ Hình Quyền",
    desc: "Bài luyện tổng hợp 8 phần và 5 linh vật: Long, Xà, Hổ, Báo, Hạc cùng bài tổng hợp.",
    lessonIds: ["bai-luyen-tong-hop", "gioi-thieu-ngu-hinh", "bai-21", "bai-22", "bai-23", "bai-24", "bai-25", "bai-26"]
  },
  {
    id: "vu-khi",
    sequence: 7,
    title: "7. Kho Binh Khí Cổ Truyền",
    desc: "Bát Trảm Đao song đao, Lục Điểm Bán Côn và Liễu Diệp Kiếm thần tốc.",
    lessonIds: ["bai-30", "bai-31", "con", "lieu-diep-kiem"]
  }
];

export const PARALLEL_SUPPORT_LESSONS = ["bai-27", "bai-28", "bai-29"]; // Linh giác, Khẩu quyết, Nội công
export const FURTHER_READING_LESSONS = ["bai-34", "bai-35", "bai-36"]; // Thiếu Lâm, Nhân vật, Võ đường

export const CANONICAL_LESSONS: CanonicalLesson[] = [
  {
    "id": "bai-01",
    "title": "Thông tin xuất bản và hình ảnh mở đầu",
    "groupId": "thong-tin-sach",
    "bookOrder": 1,
    "contentType": "reading",
    "pdfPages": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "pageRange": "Trang PDF 1 – 6",
    "assetCount": 2,
    "assets": [
      {
        "assetId": "p003-h01",
        "displayId": "H0001",
        "pdfPage": 3,
        "imgUrl": "/assets/hinh/p003-h01.png",
        "img2xUrl": "/assets/hinh-2x/p003-h01.png",
        "width": 826,
        "height": 1255
      },
      {
        "assetId": "p004-h01",
        "displayId": "H0002",
        "pdfPage": 4,
        "imgUrl": "/assets/hinh/p004-h01.png",
        "img2xUrl": "/assets/hinh-2x/p004-h01.png",
        "width": 797,
        "height": 1258
      }
    ],
    "motions": [
    
    ],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-02",
    "title": "Lời giới thiệu",
    "groupId": "thong-tin-sach",
    "bookOrder": 2,
    "contentType": "reading",
    "pdfPages": [
      7
    ],
    "pageRange": "Trang PDF 7 – 7",
    "assetCount": 0,
    "assets": [],
    "motions": [],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-03",
    "title": "Mục lục của sách",
    "groupId": "thong-tin-sach",
    "bookOrder": 3,
    "contentType": "reading",
    "pdfPages": [
      8
    ],
    "pageRange": "Trang PDF 8 – 8",
    "assetCount": 0,
    "assets": [],
    "motions": [],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-04",
    "title": "Thay lời tựa",
    "groupId": "thong-tin-sach",
    "bookOrder": 4,
    "contentType": "reading",
    "pdfPages": [
      9
    ],
    "pageRange": "Trang PDF 9 – 9",
    "assetCount": 0,
    "assets": [],
    "motions": [],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-05",
    "title": "Phần I — Sự hình thành và phát triển Phật gia Vịnh Xuân quyền",
    "groupId": "lich-su",
    "bookOrder": 5,
    "contentType": "reading",
    "pdfPages": [
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ],
    "pageRange": "Trang PDF 10 – 24",
    "assetCount": 26,
    "assets": [
      {
        "assetId": "p011-h01",
        "displayId": "H0003",
        "pdfPage": 11,
        "imgUrl": "/assets/hinh/p011-h01.png",
        "img2xUrl": "/assets/hinh-2x/p011-h01.png",
        "width": 855,
        "height": 1243
      },
      {
        "assetId": "p013-h01",
        "displayId": "H0004",
        "pdfPage": 13,
        "imgUrl": "/assets/hinh/p013-h01.png",
        "img2xUrl": "/assets/hinh-2x/p013-h01.png",
        "width": 845,
        "height": 593
      },
      {
        "assetId": "p014-h01",
        "displayId": "H0005",
        "pdfPage": 14,
        "imgUrl": "/assets/hinh/p014-h01.png",
        "img2xUrl": "/assets/hinh-2x/p014-h01.png",
        "width": 530,
        "height": 764
      },
      {
        "assetId": "p015-h01",
        "displayId": "H0006",
        "pdfPage": 15,
        "imgUrl": "/assets/hinh/p015-h01.png",
        "img2xUrl": "/assets/hinh-2x/p015-h01.png",
        "width": 489,
        "height": 518
      },
      {
        "assetId": "p016-h01",
        "displayId": "H0007",
        "pdfPage": 16,
        "imgUrl": "/assets/hinh/p016-h01.png",
        "img2xUrl": "/assets/hinh-2x/p016-h01.png",
        "width": 423,
        "height": 691
      },
      {
        "assetId": "p016-h02",
        "displayId": "H0008",
        "pdfPage": 16,
        "imgUrl": "/assets/hinh/p016-h02.png",
        "img2xUrl": "/assets/hinh-2x/p016-h02.png",
        "width": 230,
        "height": 327
      },
      {
        "assetId": "p016-h03",
        "displayId": "H0009",
        "pdfPage": 16,
        "imgUrl": "/assets/hinh/p016-h03.png",
        "img2xUrl": "/assets/hinh-2x/p016-h03.png",
        "width": 222,
        "height": 327
      },
      {
        "assetId": "p016-h04",
        "displayId": "H0010",
        "pdfPage": 16,
        "imgUrl": "/assets/hinh/p016-h04.png",
        "img2xUrl": "/assets/hinh-2x/p016-h04.png",
        "width": 472,
        "height": 305
      },
      {
        "assetId": "p018-h01",
        "displayId": "H0011",
        "pdfPage": 18,
        "imgUrl": "/assets/hinh/p018-h01.png",
        "img2xUrl": "/assets/hinh-2x/p018-h01.png",
        "width": 871,
        "height": 741
      },
      {
        "assetId": "p019-h01",
        "displayId": "H0012",
        "pdfPage": 19,
        "imgUrl": "/assets/hinh/p019-h01.png",
        "img2xUrl": "/assets/hinh-2x/p019-h01.png",
        "width": 531,
        "height": 592
      },
      {
        "assetId": "p020-h01",
        "displayId": "H0013",
        "pdfPage": 20,
        "imgUrl": "/assets/hinh/p020-h01.png",
        "img2xUrl": "/assets/hinh-2x/p020-h01.png",
        "width": 115,
        "height": 280
      },
      {
        "assetId": "p020-h02",
        "displayId": "H0014",
        "pdfPage": 20,
        "imgUrl": "/assets/hinh/p020-h02.png",
        "img2xUrl": "/assets/hinh-2x/p020-h02.png",
        "width": 115,
        "height": 280
      },
      {
        "assetId": "p020-h03",
        "displayId": "H0015",
        "pdfPage": 20,
        "imgUrl": "/assets/hinh/p020-h03.png",
        "img2xUrl": "/assets/hinh-2x/p020-h03.png",
        "width": 115,
        "height": 280
      },
      {
        "assetId": "p020-h04",
        "displayId": "H0016",
        "pdfPage": 20,
        "imgUrl": "/assets/hinh/p020-h04.png",
        "img2xUrl": "/assets/hinh-2x/p020-h04.png",
        "width": 115,
        "height": 280
      },
      {
        "assetId": "p020-h05",
        "displayId": "H0017",
        "pdfPage": 20,
        "imgUrl": "/assets/hinh/p020-h05.png",
        "img2xUrl": "/assets/hinh-2x/p020-h05.png",
        "width": 115,
        "height": 280
      },
      {
        "assetId": "p020-h06",
        "displayId": "H0018",
        "pdfPage": 20,
        "imgUrl": "/assets/hinh/p020-h06.png",
        "img2xUrl": "/assets/hinh-2x/p020-h06.png",
        "width": 115,
        "height": 280
      },
      {
        "assetId": "p020-h07",
        "displayId": "H0019",
        "pdfPage": 20,
        "imgUrl": "/assets/hinh/p020-h07.png",
        "img2xUrl": "/assets/hinh-2x/p020-h07.png",
        "width": 115,
        "height": 280
      },
      {
        "assetId": "p020-h08",
        "displayId": "H0020",
        "pdfPage": 20,
        "imgUrl": "/assets/hinh/p020-h08.png",
        "img2xUrl": "/assets/hinh-2x/p020-h08.png",
        "width": 115,
        "height": 280
      },
      {
        "assetId": "p020-h09",
        "displayId": "H0021",
        "pdfPage": 20,
        "imgUrl": "/assets/hinh/p020-h09.png",
        "img2xUrl": "/assets/hinh-2x/p020-h09.png",
        "width": 115,
        "height": 280
      },
      {
        "assetId": "p021-h01",
        "displayId": "H0022",
        "pdfPage": 21,
        "imgUrl": "/assets/hinh/p021-h01.png",
        "img2xUrl": "/assets/hinh-2x/p021-h01.png",
        "width": 449,
        "height": 650
      },
      {
        "assetId": "p021-h02",
        "displayId": "H0023",
        "pdfPage": 21,
        "imgUrl": "/assets/hinh/p021-h02.png",
        "img2xUrl": "/assets/hinh-2x/p021-h02.png",
        "width": 449,
        "height": 650
      },
      {
        "assetId": "p021-h03",
        "displayId": "H0024",
        "pdfPage": 21,
        "imgUrl": "/assets/hinh/p021-h03.png",
        "img2xUrl": "/assets/hinh-2x/p021-h03.png",
        "width": 466,
        "height": 635
      },
      {
        "assetId": "p022-h01",
        "displayId": "H0025",
        "pdfPage": 22,
        "imgUrl": "/assets/hinh/p022-h01.png",
        "img2xUrl": "/assets/hinh-2x/p022-h01.png",
        "width": 468,
        "height": 609
      },
      {
        "assetId": "p022-h02",
        "displayId": "H0026",
        "pdfPage": 22,
        "imgUrl": "/assets/hinh/p022-h02.png",
        "img2xUrl": "/assets/hinh-2x/p022-h02.png",
        "width": 456,
        "height": 610
      },
      {
        "assetId": "p022-h03",
        "displayId": "H0027",
        "pdfPage": 22,
        "imgUrl": "/assets/hinh/p022-h03.png",
        "img2xUrl": "/assets/hinh-2x/p022-h03.png",
        "width": 401,
        "height": 595
      },
      {
        "assetId": "p024-h01",
        "displayId": "H0028",
        "pdfPage": 24,
        "imgUrl": "/assets/hinh/p024-h01.png",
        "img2xUrl": "/assets/hinh-2x/p024-h01.png",
        "width": 984,
        "height": 547
      }
    ],
    "motions": [
    
    ],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-06",
    "title": "Phần II — Chương I — Quyền thuật và quyền pháp cơ bản",
    "groupId": "nen-tang",
    "bookOrder": 6,
    "contentType": "reading",
    "pdfPages": [
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35
    ],
    "pageRange": "Trang PDF 25 – 35",
    "assetCount": 35,
    "assets": [
      {
        "assetId": "p026-h01",
        "displayId": "H0029",
        "pdfPage": 26,
        "imgUrl": "/assets/hinh/p026-h01.png",
        "img2xUrl": "/assets/hinh-2x/p026-h01.png",
        "width": 831,
        "height": 1274
      },
      {
        "assetId": "p028-h01",
        "displayId": "H0030",
        "pdfPage": 28,
        "imgUrl": "/assets/hinh/p028-h01.png",
        "img2xUrl": "/assets/hinh-2x/p028-h01.png",
        "width": 200,
        "height": 266
      },
      {
        "assetId": "p028-h02",
        "displayId": "H0031",
        "pdfPage": 28,
        "imgUrl": "/assets/hinh/p028-h02.png",
        "img2xUrl": "/assets/hinh-2x/p028-h02.png",
        "width": 234,
        "height": 82
      },
      {
        "assetId": "p028-h03",
        "displayId": "H0032",
        "pdfPage": 28,
        "imgUrl": "/assets/hinh/p028-h03.png",
        "img2xUrl": "/assets/hinh-2x/p028-h03.png",
        "width": 178,
        "height": 192
      },
      {
        "assetId": "p028-h04",
        "displayId": "H0033",
        "pdfPage": 28,
        "imgUrl": "/assets/hinh/p028-h04.png",
        "img2xUrl": "/assets/hinh-2x/p028-h04.png",
        "width": 245,
        "height": 208
      },
      {
        "assetId": "p028-h05",
        "displayId": "H0034",
        "pdfPage": 28,
        "imgUrl": "/assets/hinh/p028-h05.png",
        "img2xUrl": "/assets/hinh-2x/p028-h05.png",
        "width": 256,
        "height": 163
      },
      {
        "assetId": "p028-h06",
        "displayId": "H0035",
        "pdfPage": 28,
        "imgUrl": "/assets/hinh/p028-h06.png",
        "img2xUrl": "/assets/hinh-2x/p028-h06.png",
        "width": 412,
        "height": 252
      },
      {
        "assetId": "p028-h07",
        "displayId": "H0036",
        "pdfPage": 28,
        "imgUrl": "/assets/hinh/p028-h07.png",
        "img2xUrl": "/assets/hinh-2x/p028-h07.png",
        "width": 212,
        "height": 237
      },
      {
        "assetId": "p028-h08",
        "displayId": "H0037",
        "pdfPage": 28,
        "imgUrl": "/assets/hinh/p028-h08.png",
        "img2xUrl": "/assets/hinh-2x/p028-h08.png",
        "width": 234,
        "height": 192
      },
      {
        "assetId": "p028-h09",
        "displayId": "H0038",
        "pdfPage": 28,
        "imgUrl": "/assets/hinh/p028-h09.png",
        "img2xUrl": "/assets/hinh-2x/p028-h09.png",
        "width": 167,
        "height": 193
      },
      {
        "assetId": "p028-h10",
        "displayId": "H0039",
        "pdfPage": 28,
        "imgUrl": "/assets/hinh/p028-h10.png",
        "img2xUrl": "/assets/hinh-2x/p028-h10.png",
        "width": 189,
        "height": 207
      },
      {
        "assetId": "p028-h11",
        "displayId": "H0040",
        "pdfPage": 28,
        "imgUrl": "/assets/hinh/p028-h11.png",
        "img2xUrl": "/assets/hinh-2x/p028-h11.png",
        "width": 167,
        "height": 192
      },
      {
        "assetId": "p028-h12",
        "displayId": "H0041",
        "pdfPage": 28,
        "imgUrl": "/assets/hinh/p028-h12.png",
        "img2xUrl": "/assets/hinh-2x/p028-h12.png",
        "width": 212,
        "height": 252
      },
      {
        "assetId": "p029-h01",
        "displayId": "H0042",
        "pdfPage": 29,
        "imgUrl": "/assets/hinh/p029-h01.png",
        "img2xUrl": "/assets/hinh-2x/p029-h01.png",
        "width": 222,
        "height": 221
      },
      {
        "assetId": "p029-h02",
        "displayId": "H0043",
        "pdfPage": 29,
        "imgUrl": "/assets/hinh/p029-h02.png",
        "img2xUrl": "/assets/hinh-2x/p029-h02.png",
        "width": 223,
        "height": 221
      },
      {
        "assetId": "p029-h03",
        "displayId": "H0044",
        "pdfPage": 29,
        "imgUrl": "/assets/hinh/p029-h03.png",
        "img2xUrl": "/assets/hinh-2x/p029-h03.png",
        "width": 245,
        "height": 354
      },
      {
        "assetId": "p029-h04",
        "displayId": "H0045",
        "pdfPage": 29,
        "imgUrl": "/assets/hinh/p029-h04.png",
        "img2xUrl": "/assets/hinh-2x/p029-h04.png",
        "width": 223,
        "height": 265
      },
      {
        "assetId": "p029-h05",
        "displayId": "H0046",
        "pdfPage": 29,
        "imgUrl": "/assets/hinh/p029-h05.png",
        "img2xUrl": "/assets/hinh-2x/p029-h05.png",
        "width": 501,
        "height": 634
      },
      {
        "assetId": "p030-h01",
        "displayId": "H0047",
        "pdfPage": 30,
        "imgUrl": "/assets/hinh/p030-h01.png",
        "img2xUrl": "/assets/hinh-2x/p030-h01.png",
        "width": 260,
        "height": 465
      },
      {
        "assetId": "p030-h02",
        "displayId": "H0048",
        "pdfPage": 30,
        "imgUrl": "/assets/hinh/p030-h02.png",
        "img2xUrl": "/assets/hinh-2x/p030-h02.png",
        "width": 260,
        "height": 465
      },
      {
        "assetId": "p030-h03",
        "displayId": "H0049",
        "pdfPage": 30,
        "imgUrl": "/assets/hinh/p030-h03.png",
        "img2xUrl": "/assets/hinh-2x/p030-h03.png",
        "width": 257,
        "height": 465
      },
      {
        "assetId": "p031-h01",
        "displayId": "H0050",
        "pdfPage": 31,
        "imgUrl": "/assets/hinh/p031-h01.png",
        "img2xUrl": "/assets/hinh-2x/p031-h01.png",
        "width": 871,
        "height": 593
      },
      {
        "assetId": "p031-h02",
        "displayId": "H0051",
        "pdfPage": 31,
        "imgUrl": "/assets/hinh/p031-h02.png",
        "img2xUrl": "/assets/hinh-2x/p031-h02.png",
        "width": 386,
        "height": 623
      },
      {
        "assetId": "p032-h01",
        "displayId": "H0052",
        "pdfPage": 32,
        "imgUrl": "/assets/hinh/p032-h01.png",
        "img2xUrl": "/assets/hinh-2x/p032-h01.png",
        "width": 484,
        "height": 563
      },
      {
        "assetId": "p032-h02",
        "displayId": "H0053",
        "pdfPage": 32,
        "imgUrl": "/assets/hinh/p032-h02.png",
        "img2xUrl": "/assets/hinh-2x/p032-h02.png",
        "width": 352,
        "height": 266
      },
      {
        "assetId": "p032-h03",
        "displayId": "H0054",
        "pdfPage": 32,
        "imgUrl": "/assets/hinh/p032-h03.png",
        "img2xUrl": "/assets/hinh-2x/p032-h03.png",
        "width": 352,
        "height": 296
      },
      {
        "assetId": "p033-h01",
        "displayId": "H0055",
        "pdfPage": 33,
        "imgUrl": "/assets/hinh/p033-h01.png",
        "img2xUrl": "/assets/hinh-2x/p033-h01.png",
        "width": 935,
        "height": 417
      },
      {
        "assetId": "p033-h02",
        "displayId": "H0056",
        "pdfPage": 33,
        "imgUrl": "/assets/hinh/p033-h02.png",
        "img2xUrl": "/assets/hinh-2x/p033-h02.png",
        "width": 408,
        "height": 244
      },
      {
        "assetId": "p033-h03",
        "displayId": "H0057",
        "pdfPage": 33,
        "imgUrl": "/assets/hinh/p033-h03.png",
        "img2xUrl": "/assets/hinh-2x/p033-h03.png",
        "width": 408,
        "height": 297
      },
      {
        "assetId": "p033-h04",
        "displayId": "H0058",
        "pdfPage": 33,
        "imgUrl": "/assets/hinh/p033-h04.png",
        "img2xUrl": "/assets/hinh-2x/p033-h04.png",
        "width": 405,
        "height": 662
      },
      {
        "assetId": "p034-h01",
        "displayId": "H0059",
        "pdfPage": 34,
        "imgUrl": "/assets/hinh/p034-h01.png",
        "img2xUrl": "/assets/hinh-2x/p034-h01.png",
        "width": 411,
        "height": 319
      },
      {
        "assetId": "p034-h02",
        "displayId": "H0060",
        "pdfPage": 34,
        "imgUrl": "/assets/hinh/p034-h02.png",
        "img2xUrl": "/assets/hinh-2x/p034-h02.png",
        "width": 410,
        "height": 376
      },
      {
        "assetId": "p034-h03",
        "displayId": "H0061",
        "pdfPage": 34,
        "imgUrl": "/assets/hinh/p034-h03.png",
        "img2xUrl": "/assets/hinh-2x/p034-h03.png",
        "width": 410,
        "height": 370
      },
      {
        "assetId": "p035-h01",
        "displayId": "H0062",
        "pdfPage": 35,
        "imgUrl": "/assets/hinh/p035-h01.png",
        "img2xUrl": "/assets/hinh-2x/p035-h01.png",
        "width": 831,
        "height": 368
      },
      {
        "assetId": "p035-h02",
        "displayId": "H0063",
        "pdfPage": 35,
        "imgUrl": "/assets/hinh/p035-h02.png",
        "img2xUrl": "/assets/hinh-2x/p035-h02.png",
        "width": 831,
        "height": 378
      }
    ],
    "motions": [],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-07",
    "title": "Tiểu Niệm Đầu",
    "groupId": "quyen-tay-khong",
    "bookOrder": 7,
    "contentType": "practice_or_mixed",
    "pdfPages": [
      36,
      37,
      38,
      39,
      40,
      41,
      42
    ],
    "pageRange": "Trang PDF 36 – 42",
    "assetCount": 52,
    "assets": [
      {
        "assetId": "p037-h01",
        "displayId": "H0064",
        "pdfPage": 37,
        "imgUrl": "/assets/hinh/p037-h01.png",
        "img2xUrl": "/assets/hinh-2x/p037-h01.png",
        "width": 145,
        "height": 343
      },
      {
        "assetId": "p037-h02",
        "displayId": "H0065",
        "pdfPage": 37,
        "imgUrl": "/assets/hinh/p037-h02.png",
        "img2xUrl": "/assets/hinh-2x/p037-h02.png",
        "width": 133,
        "height": 342
      },
      {
        "assetId": "p037-h03",
        "displayId": "H0066",
        "pdfPage": 37,
        "imgUrl": "/assets/hinh/p037-h03.png",
        "img2xUrl": "/assets/hinh-2x/p037-h03.png",
        "width": 131,
        "height": 343
      },
      {
        "assetId": "p037-h04",
        "displayId": "H0067",
        "pdfPage": 37,
        "imgUrl": "/assets/hinh/p037-h04.png",
        "img2xUrl": "/assets/hinh-2x/p037-h04.png",
        "width": 132,
        "height": 341
      },
      {
        "assetId": "p037-h05",
        "displayId": "H0068",
        "pdfPage": 37,
        "imgUrl": "/assets/hinh/p037-h05.png",
        "img2xUrl": "/assets/hinh-2x/p037-h05.png",
        "width": 207,
        "height": 339
      },
      {
        "assetId": "p037-h06",
        "displayId": "H0069",
        "pdfPage": 37,
        "imgUrl": "/assets/hinh/p037-h06.png",
        "img2xUrl": "/assets/hinh-2x/p037-h06.png",
        "width": 202,
        "height": 339
      },
      {
        "assetId": "p037-h07",
        "displayId": "H0070",
        "pdfPage": 37,
        "imgUrl": "/assets/hinh/p037-h07.png",
        "img2xUrl": "/assets/hinh-2x/p037-h07.png",
        "width": 204,
        "height": 335
      },
      {
        "assetId": "p037-h08",
        "displayId": "H0071",
        "pdfPage": 37,
        "imgUrl": "/assets/hinh/p037-h08.png",
        "img2xUrl": "/assets/hinh-2x/p037-h08.png",
        "width": 128,
        "height": 331
      },
      {
        "assetId": "p037-h09",
        "displayId": "H0072",
        "pdfPage": 37,
        "imgUrl": "/assets/hinh/p037-h09.png",
        "img2xUrl": "/assets/hinh-2x/p037-h09.png",
        "width": 128,
        "height": 332
      },
      {
        "assetId": "p038-h01",
        "displayId": "H0073",
        "pdfPage": 38,
        "imgUrl": "/assets/hinh/p038-h01.png",
        "img2xUrl": "/assets/hinh-2x/p038-h01.png",
        "width": 131,
        "height": 340
      },
      {
        "assetId": "p038-h02",
        "displayId": "H0074",
        "pdfPage": 38,
        "imgUrl": "/assets/hinh/p038-h02.png",
        "img2xUrl": "/assets/hinh-2x/p038-h02.png",
        "width": 185,
        "height": 343
      },
      {
        "assetId": "p038-h03",
        "displayId": "H0075",
        "pdfPage": 38,
        "imgUrl": "/assets/hinh/p038-h03.png",
        "img2xUrl": "/assets/hinh-2x/p038-h03.png",
        "width": 167,
        "height": 345
      },
      {
        "assetId": "p038-h04",
        "displayId": "H0076",
        "pdfPage": 38,
        "imgUrl": "/assets/hinh/p038-h04.png",
        "img2xUrl": "/assets/hinh-2x/p038-h04.png",
        "width": 139,
        "height": 344
      },
      {
        "assetId": "p038-h05",
        "displayId": "H0077",
        "pdfPage": 38,
        "imgUrl": "/assets/hinh/p038-h05.png",
        "img2xUrl": "/assets/hinh-2x/p038-h05.png",
        "width": 146,
        "height": 344
      },
      {
        "assetId": "p038-h06",
        "displayId": "H0078",
        "pdfPage": 38,
        "imgUrl": "/assets/hinh/p038-h06.png",
        "img2xUrl": "/assets/hinh-2x/p038-h06.png",
        "width": 169,
        "height": 346
      },
      {
        "assetId": "p038-h07",
        "displayId": "H0079",
        "pdfPage": 38,
        "imgUrl": "/assets/hinh/p038-h07.png",
        "img2xUrl": "/assets/hinh-2x/p038-h07.png",
        "width": 143,
        "height": 343
      },
      {
        "assetId": "p038-h08",
        "displayId": "H0080",
        "pdfPage": 38,
        "imgUrl": "/assets/hinh/p038-h08.png",
        "img2xUrl": "/assets/hinh-2x/p038-h08.png",
        "width": 156,
        "height": 339
      },
      {
        "assetId": "p038-h09",
        "displayId": "H0081",
        "pdfPage": 38,
        "imgUrl": "/assets/hinh/p038-h09.png",
        "img2xUrl": "/assets/hinh-2x/p038-h09.png",
        "width": 177,
        "height": 344
      },
      {
        "assetId": "p038-h10",
        "displayId": "H0082",
        "pdfPage": 38,
        "imgUrl": "/assets/hinh/p038-h10.png",
        "img2xUrl": "/assets/hinh-2x/p038-h10.png",
        "width": 219,
        "height": 345
      },
      {
        "assetId": "p039-h01",
        "displayId": "H0083",
        "pdfPage": 39,
        "imgUrl": "/assets/hinh/p039-h01.png",
        "img2xUrl": "/assets/hinh-2x/p039-h01.png",
        "width": 137,
        "height": 355
      },
      {
        "assetId": "p039-h02",
        "displayId": "H0084",
        "pdfPage": 39,
        "imgUrl": "/assets/hinh/p039-h02.png",
        "img2xUrl": "/assets/hinh-2x/p039-h02.png",
        "width": 147,
        "height": 342
      },
      {
        "assetId": "p039-h03",
        "displayId": "H0085",
        "pdfPage": 39,
        "imgUrl": "/assets/hinh/p039-h03.png",
        "img2xUrl": "/assets/hinh-2x/p039-h03.png",
        "width": 133,
        "height": 338
      },
      {
        "assetId": "p039-h04",
        "displayId": "H0086",
        "pdfPage": 39,
        "imgUrl": "/assets/hinh/p039-h04.png",
        "img2xUrl": "/assets/hinh-2x/p039-h04.png",
        "width": 158,
        "height": 339
      },
      {
        "assetId": "p039-h05",
        "displayId": "H0087",
        "pdfPage": 39,
        "imgUrl": "/assets/hinh/p039-h05.png",
        "img2xUrl": "/assets/hinh-2x/p039-h05.png",
        "width": 175,
        "height": 340
      },
      {
        "assetId": "p039-h06",
        "displayId": "H0088",
        "pdfPage": 39,
        "imgUrl": "/assets/hinh/p039-h06.png",
        "img2xUrl": "/assets/hinh-2x/p039-h06.png",
        "width": 141,
        "height": 328
      },
      {
        "assetId": "p039-h07",
        "displayId": "H0089",
        "pdfPage": 39,
        "imgUrl": "/assets/hinh/p039-h07.png",
        "img2xUrl": "/assets/hinh-2x/p039-h07.png",
        "width": 172,
        "height": 332
      },
      {
        "assetId": "p039-h08",
        "displayId": "H0090",
        "pdfPage": 39,
        "imgUrl": "/assets/hinh/p039-h08.png",
        "img2xUrl": "/assets/hinh-2x/p039-h08.png",
        "width": 186,
        "height": 338
      },
      {
        "assetId": "p039-h09",
        "displayId": "H0091",
        "pdfPage": 39,
        "imgUrl": "/assets/hinh/p039-h09.png",
        "img2xUrl": "/assets/hinh-2x/p039-h09.png",
        "width": 351,
        "height": 373
      },
      {
        "assetId": "p040-h01",
        "displayId": "H0092",
        "pdfPage": 40,
        "imgUrl": "/assets/hinh/p040-h01.png",
        "img2xUrl": "/assets/hinh-2x/p040-h01.png",
        "width": 149,
        "height": 339
      },
      {
        "assetId": "p040-h02",
        "displayId": "H0093",
        "pdfPage": 40,
        "imgUrl": "/assets/hinh/p040-h02.png",
        "img2xUrl": "/assets/hinh-2x/p040-h02.png",
        "width": 175,
        "height": 343
      },
      {
        "assetId": "p040-h03",
        "displayId": "H0094",
        "pdfPage": 40,
        "imgUrl": "/assets/hinh/p040-h03.png",
        "img2xUrl": "/assets/hinh-2x/p040-h03.png",
        "width": 133,
        "height": 339
      },
      {
        "assetId": "p040-h04",
        "displayId": "H0095",
        "pdfPage": 40,
        "imgUrl": "/assets/hinh/p040-h04.png",
        "img2xUrl": "/assets/hinh-2x/p040-h04.png",
        "width": 127,
        "height": 339
      },
      {
        "assetId": "p040-h05",
        "displayId": "H0096",
        "pdfPage": 40,
        "imgUrl": "/assets/hinh/p040-h05.png",
        "img2xUrl": "/assets/hinh-2x/p040-h05.png",
        "width": 154,
        "height": 342
      },
      {
        "assetId": "p040-h06",
        "displayId": "H0097",
        "pdfPage": 40,
        "imgUrl": "/assets/hinh/p040-h06.png",
        "img2xUrl": "/assets/hinh-2x/p040-h06.png",
        "width": 134,
        "height": 339
      },
      {
        "assetId": "p040-h07",
        "displayId": "H0098",
        "pdfPage": 40,
        "imgUrl": "/assets/hinh/p040-h07.png",
        "img2xUrl": "/assets/hinh-2x/p040-h07.png",
        "width": 196,
        "height": 384
      },
      {
        "assetId": "p040-h08",
        "displayId": "H0099",
        "pdfPage": 40,
        "imgUrl": "/assets/hinh/p040-h08.png",
        "img2xUrl": "/assets/hinh-2x/p040-h08.png",
        "width": 167,
        "height": 340
      },
      {
        "assetId": "p040-h09",
        "displayId": "H0100",
        "pdfPage": 40,
        "imgUrl": "/assets/hinh/p040-h09.png",
        "img2xUrl": "/assets/hinh-2x/p040-h09.png",
        "width": 216,
        "height": 388
      },
      {
        "assetId": "p041-h01",
        "displayId": "H0101",
        "pdfPage": 41,
        "imgUrl": "/assets/hinh/p041-h01.png",
        "img2xUrl": "/assets/hinh-2x/p041-h01.png",
        "width": 126,
        "height": 338
      },
      {
        "assetId": "p041-h02",
        "displayId": "H0102",
        "pdfPage": 41,
        "imgUrl": "/assets/hinh/p041-h02.png",
        "img2xUrl": "/assets/hinh-2x/p041-h02.png",
        "width": 186,
        "height": 382
      },
      {
        "assetId": "p041-h03",
        "displayId": "H0103",
        "pdfPage": 41,
        "imgUrl": "/assets/hinh/p041-h03.png",
        "img2xUrl": "/assets/hinh-2x/p041-h03.png",
        "width": 129,
        "height": 338
      },
      {
        "assetId": "p041-h04",
        "displayId": "H0104",
        "pdfPage": 41,
        "imgUrl": "/assets/hinh/p041-h04.png",
        "img2xUrl": "/assets/hinh-2x/p041-h04.png",
        "width": 137,
        "height": 338
      },
      {
        "assetId": "p041-h05",
        "displayId": "H0105",
        "pdfPage": 41,
        "imgUrl": "/assets/hinh/p041-h05.png",
        "img2xUrl": "/assets/hinh-2x/p041-h05.png",
        "width": 128,
        "height": 338
      },
      {
        "assetId": "p041-h06",
        "displayId": "H0106",
        "pdfPage": 41,
        "imgUrl": "/assets/hinh/p041-h06.png",
        "img2xUrl": "/assets/hinh-2x/p041-h06.png",
        "width": 137,
        "height": 341
      },
      {
        "assetId": "p041-h07",
        "displayId": "H0107",
        "pdfPage": 41,
        "imgUrl": "/assets/hinh/p041-h07.png",
        "img2xUrl": "/assets/hinh-2x/p041-h07.png",
        "width": 233,
        "height": 383
      },
      {
        "assetId": "p041-h08",
        "displayId": "H0108",
        "pdfPage": 41,
        "imgUrl": "/assets/hinh/p041-h08.png",
        "img2xUrl": "/assets/hinh-2x/p041-h08.png",
        "width": 142,
        "height": 339
      },
      {
        "assetId": "p042-h01",
        "displayId": "H0109",
        "pdfPage": 42,
        "imgUrl": "/assets/hinh/p042-h01.png",
        "img2xUrl": "/assets/hinh-2x/p042-h01.png",
        "width": 143,
        "height": 344
      },
      {
        "assetId": "p042-h02",
        "displayId": "H0110",
        "pdfPage": 42,
        "imgUrl": "/assets/hinh/p042-h02.png",
        "img2xUrl": "/assets/hinh-2x/p042-h02.png",
        "width": 137,
        "height": 339
      },
      {
        "assetId": "p042-h03",
        "displayId": "H0111",
        "pdfPage": 42,
        "imgUrl": "/assets/hinh/p042-h03.png",
        "img2xUrl": "/assets/hinh-2x/p042-h03.png",
        "width": 133,
        "height": 340
      },
      {
        "assetId": "p042-h04",
        "displayId": "H0112",
        "pdfPage": 42,
        "imgUrl": "/assets/hinh/p042-h04.png",
        "img2xUrl": "/assets/hinh-2x/p042-h04.png",
        "width": 134,
        "height": 339
      },
      {
        "assetId": "p042-h05",
        "displayId": "H0113",
        "pdfPage": 42,
        "imgUrl": "/assets/hinh/p042-h05.png",
        "img2xUrl": "/assets/hinh-2x/p042-h05.png",
        "width": 150,
        "height": 343
      },
      {
        "assetId": "p042-h06",
        "displayId": "H0114",
        "pdfPage": 42,
        "imgUrl": "/assets/hinh/p042-h06.png",
        "img2xUrl": "/assets/hinh-2x/p042-h06.png",
        "width": 136,
        "height": 343
      },
      {
        "assetId": "p042-h07",
        "displayId": "H0115",
        "pdfPage": 42,
        "imgUrl": "/assets/hinh/p042-h07.png",
        "img2xUrl": "/assets/hinh-2x/p042-h07.png",
        "width": 170,
        "height": 340
      }
    ],
    "motions": [
      {
        "id": "bai-07-m-1",
        "stepNo": "1",
        "assetId": "p037-h01",
        "displayId": "H0064",
        "pdfPage": 37,
        "imgUrl": "/assets/hinh/p037-h01.png",
        "img2xUrl": "/assets/hinh-2x/p037-h01.png",
        "width": 145,
        "height": 343,
        "desc": "CHIÊU 1: Đứng tấn kiềm dương mã, 2 nắm đấm thu sát nách."
      },
      {
        "id": "bai-07-m-2",
        "stepNo": "2",
        "assetId": "p037-h02",
        "displayId": "H0065",
        "pdfPage": 37,
        "imgUrl": "/assets/hinh/p037-h02.png",
        "img2xUrl": "/assets/hinh-2x/p037-h02.png",
        "width": 133,
        "height": 342,
        "desc": "CHIÊU 1: Đưa 2 tay ngang ngực và chéo vào nhau nhưng không chạm nhau đẩy từ trên xuống dưới."
      },
      {
        "id": "bai-07-m-3",
        "stepNo": "3",
        "assetId": "p037-h03",
        "displayId": "H0066",
        "pdfPage": 37,
        "imgUrl": "/assets/hinh/p037-h03.png",
        "img2xUrl": "/assets/hinh-2x/p037-h03.png",
        "width": 131,
        "height": 343,
        "desc": "CHIÊU 1: Tương tự như vậy đưa 2 tay lên trên đến ngang căm thì dừng lại và thu tay về."
      },
      {
        "id": "bai-07-m-4",
        "stepNo": "4",
        "assetId": "p037-h04",
        "displayId": "H0067",
        "pdfPage": 37,
        "imgUrl": "/assets/hinh/p037-h04.png",
        "img2xUrl": "/assets/hinh-2x/p037-h04.png",
        "width": 132,
        "height": 341,
        "desc": "CHIÊU 2: Đấm thẳng ra trước."
      },
      {
        "id": "bai-07-m-5",
        "stepNo": "5",
        "assetId": "p037-h05",
        "displayId": "H0068",
        "pdfPage": 37,
        "imgUrl": "/assets/hinh/p037-h05.png",
        "img2xUrl": "/assets/hinh-2x/p037-h05.png",
        "width": 207,
        "height": 339,
        "desc": "CHIÊU 2: Phóng ngón tay ra phía trước."
      },
      {
        "id": "bai-07-m-6",
        "stepNo": "6",
        "assetId": "p037-h06",
        "displayId": "H0069",
        "pdfPage": 37,
        "imgUrl": "/assets/hinh/p037-h06.png",
        "img2xUrl": "/assets/hinh-2x/p037-h06.png",
        "width": 202,
        "height": 339,
        "desc": "CHIÊU 2: Lật ngửa bàn tay."
      },
      {
        "id": "bai-07-m-7",
        "stepNo": "7",
        "assetId": "p037-h07",
        "displayId": "H0070",
        "pdfPage": 37,
        "imgUrl": "/assets/hinh/p037-h07.png",
        "img2xUrl": "/assets/hinh-2x/p037-h07.png",
        "width": 204,
        "height": 335,
        "desc": "CHIÊU 2: Lật ngửa bàn tay."
      },
      {
        "id": "bai-07-m-8",
        "stepNo": "8",
        "assetId": "p037-h08",
        "displayId": "H0071",
        "pdfPage": 37,
        "imgUrl": "/assets/hinh/p037-h08.png",
        "img2xUrl": "/assets/hinh-2x/p037-h08.png",
        "width": 128,
        "height": 331,
        "desc": "CHIÊU 2: Quay cổ tay theo chiều kim đồng hồ."
      },
      {
        "id": "bai-07-m-9",
        "stepNo": "9",
        "assetId": "p037-h09",
        "displayId": "H0072",
        "pdfPage": 37,
        "imgUrl": "/assets/hinh/p037-h09.png",
        "img2xUrl": "/assets/hinh-2x/p037-h09.png",
        "width": 128,
        "height": 332,
        "desc": "CHIÊU 2: Từ từ kéo tay về vị trí như hình 1."
      },
      {
        "id": "bai-07-m-10",
        "stepNo": "10",
        "assetId": "p038-h01",
        "displayId": "H0073",
        "pdfPage": 38,
        "imgUrl": "/assets/hinh/p038-h01.png",
        "img2xUrl": "/assets/hinh-2x/p038-h01.png",
        "width": 131,
        "height": 340,
        "desc": "CHIÊU 2: Từ từ kéo tay về vị trí như hình 1."
      },
      {
        "id": "bai-07-m-11",
        "stepNo": "11",
        "assetId": "p038-h02",
        "displayId": "H0074",
        "pdfPage": 38,
        "imgUrl": "/assets/hinh/p038-h02.png",
        "img2xUrl": "/assets/hinh-2x/p038-h02.png",
        "width": 185,
        "height": 343,
        "desc": "CHIÊU 4: Quay cổ tay theo chiều ngược chiều kim đồng hồ."
      },
      {
        "id": "bai-07-m-12",
        "stepNo": "12",
        "assetId": "p038-h03",
        "displayId": "H0075",
        "pdfPage": 38,
        "imgUrl": "/assets/hinh/p038-h03.png",
        "img2xUrl": "/assets/hinh-2x/p038-h03.png",
        "width": 167,
        "height": 345,
        "desc": "CHIÊU 4: Quay cổ tay theo chiều ngược chiều kim đồng hồ."
      },
      {
        "id": "bai-07-m-13",
        "stepNo": "13",
        "assetId": "p038-h04",
        "displayId": "H0076",
        "pdfPage": 38,
        "imgUrl": "/assets/hinh/p038-h04.png",
        "img2xUrl": "/assets/hinh-2x/p038-h04.png",
        "width": 139,
        "height": 344,
        "desc": "CHIÊU 4: Kéo bàn tay về giữa ngực."
      },
      {
        "id": "bai-07-m-14",
        "stepNo": "14",
        "assetId": "p038-h05",
        "displayId": "H0077",
        "pdfPage": 38,
        "imgUrl": "/assets/hinh/p038-h05.png",
        "img2xUrl": "/assets/hinh-2x/p038-h05.png",
        "width": 146,
        "height": 344,
        "desc": "CHIÊU 4: Kéo bàn tay về giữa ngực."
      },
      {
        "id": "bai-07-m-15",
        "stepNo": "15",
        "assetId": "p038-h06",
        "displayId": "H0078",
        "pdfPage": 38,
        "imgUrl": "/assets/hinh/p038-h06.png",
        "img2xUrl": "/assets/hinh-2x/p038-h06.png",
        "width": 169,
        "height": 346,
        "desc": "CHIÊU 4: Vô tay vào ngực."
      },
      {
        "id": "bai-07-m-16",
        "stepNo": "16",
        "assetId": "p038-h07",
        "displayId": "H0079",
        "pdfPage": 38,
        "imgUrl": "/assets/hinh/p038-h07.png",
        "img2xUrl": "/assets/hinh-2x/p038-h07.png",
        "width": 143,
        "height": 343,
        "desc": "CHIÊU 6: Dùng chướng đánh sang bên trái, đến hết vai trái thì dừng lại."
      },
      {
        "id": "bai-07-m-17",
        "stepNo": "17",
        "assetId": "p038-h08",
        "displayId": "H0080",
        "pdfPage": 38,
        "imgUrl": "/assets/hinh/p038-h08.png",
        "img2xUrl": "/assets/hinh-2x/p038-h08.png",
        "width": 156,
        "height": 339,
        "desc": "CHIÊU 6: Dùng mặt lưng của cổ tay kéo sang bên phải đến hết vai phải."
      },
      {
        "id": "bai-07-m-18",
        "stepNo": "18",
        "assetId": "p038-h09",
        "displayId": "H0081",
        "pdfPage": 38,
        "imgUrl": "/assets/hinh/p038-h09.png",
        "img2xUrl": "/assets/hinh-2x/p038-h09.png",
        "width": 177,
        "height": 344,
        "desc": "CHIÊU 6: Đưa chưởng vào giữa và đánh thăng ra trước."
      },
      {
        "id": "bai-07-m-19",
        "stepNo": "19",
        "assetId": "p038-h10",
        "displayId": "H0082",
        "pdfPage": 38,
        "imgUrl": "/assets/hinh/p038-h10.png",
        "img2xUrl": "/assets/hinh-2x/p038-h10.png",
        "width": 219,
        "height": 345,
        "desc": "CHIÊU 6: Dùng chướng đánh sang bên trái, đến hết vai trái thì dừng lại."
      },
      {
        "id": "bai-07-m-20",
        "stepNo": "20",
        "assetId": "p039-h01",
        "displayId": "H0083",
        "pdfPage": 39,
        "imgUrl": "/assets/hinh/p039-h01.png",
        "img2xUrl": "/assets/hinh-2x/p039-h01.png",
        "width": 137,
        "height": 355,
        "desc": "CHIÊU 6: Dùng mặt lưng của cổ tay kéo sang bên phải đến hết vai phải."
      },
      {
        "id": "bai-07-m-21",
        "stepNo": "21",
        "assetId": "p039-h02",
        "displayId": "H0084",
        "pdfPage": 39,
        "imgUrl": "/assets/hinh/p039-h02.png",
        "img2xUrl": "/assets/hinh-2x/p039-h02.png",
        "width": 147,
        "height": 342,
        "desc": "CHIÊU 8: Đưa tay xuống như đỡ một đòn đánh ở phần hạ."
      },
      {
        "id": "bai-07-m-22",
        "stepNo": "22",
        "assetId": "p039-h03",
        "displayId": "H0085",
        "pdfPage": 39,
        "imgUrl": "/assets/hinh/p039-h03.png",
        "img2xUrl": "/assets/hinh-2x/p039-h03.png",
        "width": 133,
        "height": 338,
        "desc": "CHIÊU 6: Phóng ngón tay ra phía trước sau đó đánh mũi bàn tay sang 2 bên 3 lần."
      },
      {
        "id": "bai-07-m-23",
        "stepNo": "23",
        "assetId": "p039-h04",
        "displayId": "H0086",
        "pdfPage": 39,
        "imgUrl": "/assets/hinh/p039-h04.png",
        "img2xUrl": "/assets/hinh-2x/p039-h04.png",
        "width": 158,
        "height": 339,
        "desc": "CHIÊU 6: Như 2.5"
      },
      {
        "id": "bai-07-m-24",
        "stepNo": "24",
        "assetId": "p039-h05",
        "displayId": "H0087",
        "pdfPage": 39,
        "imgUrl": "/assets/hinh/p039-h05.png",
        "img2xUrl": "/assets/hinh-2x/p039-h05.png",
        "width": 175,
        "height": 340,
        "desc": "CHIÊU 10: Tương tự như vậy đối với tay trái."
      },
      {
        "id": "bai-07-m-25",
        "stepNo": "25",
        "assetId": "p039-h06",
        "displayId": "H0088",
        "pdfPage": 39,
        "imgUrl": "/assets/hinh/p039-h06.png",
        "img2xUrl": "/assets/hinh-2x/p039-h06.png",
        "width": 141,
        "height": 328,
        "desc": "CHIÊU 10: Đưa 2 bàn tay ra sau, thân người hơi ưỡn về phía trước đẩy 2 lòng bàn tay xuống."
      },
      {
        "id": "bai-07-m-26",
        "stepNo": "26",
        "assetId": "p039-h07",
        "displayId": "H0089",
        "pdfPage": 39,
        "imgUrl": "/assets/hinh/p039-h07.png",
        "img2xUrl": "/assets/hinh-2x/p039-h07.png",
        "width": 172,
        "height": 332,
        "desc": "CHIÊU 10: Dưa 2 bàn tay ra phía trước, đầy 2 lòng bàn tay xuống."
      },
      {
        "id": "bai-07-m-27",
        "stepNo": "27",
        "assetId": "p039-h08",
        "displayId": "H0090",
        "pdfPage": 39,
        "imgUrl": "/assets/hinh/p039-h08.png",
        "img2xUrl": "/assets/hinh-2x/p039-h08.png",
        "width": 186,
        "height": 338,
        "desc": "CHIÊU 10: Đưa cánh tay và căng tay lên ngang vai, bàn tay phải ở trên bàn tay trái, 2 bàn tay úp."
      },
      {
        "id": "bai-07-m-28",
        "stepNo": "28",
        "assetId": "p039-h09",
        "displayId": "H0091",
        "pdfPage": 39,
        "imgUrl": "/assets/hinh/p039-h09.png",
        "img2xUrl": "/assets/hinh-2x/p039-h09.png",
        "width": 351,
        "height": 373,
        "desc": "CHIÊU 10: Chém sang hai bên."
      },
      {
        "id": "bai-07-m-29",
        "stepNo": "29",
        "assetId": "p040-h01",
        "displayId": "H0092",
        "pdfPage": 40,
        "imgUrl": "/assets/hinh/p040-h01.png",
        "img2xUrl": "/assets/hinh-2x/p040-h01.png",
        "width": 149,
        "height": 339,
        "desc": "CHIÊU 11: Đưa 2 bàn tay xuống đặt ở bên phải thắt lưng. - Bàn tay phải đặt trên tay trái. - Xoa hai bàn tay trên hai mặt phẳng theo chiều kim đồng hồ. - Xoa3 lần."
      },
      {
        "id": "bai-07-m-30",
        "stepNo": "30",
        "assetId": "p040-h02",
        "displayId": "H0093",
        "pdfPage": 40,
        "imgUrl": "/assets/hinh/p040-h02.png",
        "img2xUrl": "/assets/hinh-2x/p040-h02.png",
        "width": 175,
        "height": 343,
        "desc": "CHIÊU 11: Kết thúc lần xoa thứ 3 đánh hai tay ra phía trước."
      },
      {
        "id": "bai-07-m-31",
        "stepNo": "31",
        "assetId": "p040-h03",
        "displayId": "H0094",
        "pdfPage": 40,
        "imgUrl": "/assets/hinh/p040-h03.png",
        "img2xUrl": "/assets/hinh-2x/p040-h03.png",
        "width": 133,
        "height": 339,
        "desc": "CHIÊU 10: Từ vị trí hình 1, ấn lòng bàn tay phải xuống dưới."
      },
      {
        "id": "bai-07-m-32",
        "stepNo": "32",
        "assetId": "p040-h04",
        "displayId": "H0095",
        "pdfPage": 40,
        "imgUrl": "/assets/hinh/p040-h04.png",
        "img2xUrl": "/assets/hinh-2x/p040-h04.png",
        "width": 127,
        "height": 339,
        "desc": "CHIÊU 10: Tương tự như vậy đối với tay trái."
      },
      {
        "id": "bai-07-m-33",
        "stepNo": "33",
        "assetId": "p040-h05",
        "displayId": "H0096",
        "pdfPage": 40,
        "imgUrl": "/assets/hinh/p040-h05.png",
        "img2xUrl": "/assets/hinh-2x/p040-h05.png",
        "width": 154,
        "height": 342,
        "desc": "CHIÊU 12: Tay trái đề xuống tay phải đánh thăng chưởng ra trước, sau đó thu tay về như hình 1. Tập bên phải sau đó chuyển sang bên trái là 1 lần. Tập 3 lần tất cả."
      },
      {
        "id": "bai-07-m-34",
        "stepNo": "34",
        "assetId": "p040-h06",
        "displayId": "H0097",
        "pdfPage": 40,
        "imgUrl": "/assets/hinh/p040-h06.png",
        "img2xUrl": "/assets/hinh-2x/p040-h06.png",
        "width": 134,
        "height": 339,
        "desc": "CHIÊU 12: Hai bàn tay vỗ xuống."
      },
      {
        "id": "bai-07-m-35",
        "stepNo": "35",
        "assetId": "p040-h07",
        "displayId": "H0098",
        "pdfPage": 40,
        "imgUrl": "/assets/hinh/p040-h07.png",
        "img2xUrl": "/assets/hinh-2x/p040-h07.png",
        "width": 196,
        "height": 384,
        "desc": "CHIÊU 13: Tay phải ở ngoài tay trái Ở trong vuốt chéo xuống (xem hình 13.1B)."
      },
      {
        "id": "bai-07-m-36",
        "stepNo": "36",
        "assetId": "p040-h08",
        "displayId": "H0099",
        "pdfPage": 40,
        "imgUrl": "/assets/hinh/p040-h08.png",
        "img2xUrl": "/assets/hinh-2x/p040-h08.png",
        "width": 167,
        "height": 340,
        "desc": "CHIÊU 10: Chém sang hai bên."
      },
      {
        "id": "bai-07-m-37",
        "stepNo": "37",
        "assetId": "p040-h09",
        "displayId": "H0100",
        "pdfPage": 40,
        "imgUrl": "/assets/hinh/p040-h09.png",
        "img2xUrl": "/assets/hinh-2x/p040-h09.png",
        "width": 216,
        "height": 388,
        "desc": "CHIÊU 13: Tay phải chọc thẳng lên trên, tay trái theo."
      },
      {
        "id": "bai-07-m-38",
        "stepNo": "38",
        "assetId": "p041-h01",
        "displayId": "H0101",
        "pdfPage": 41,
        "imgUrl": "/assets/hinh/p041-h01.png",
        "img2xUrl": "/assets/hinh-2x/p041-h01.png",
        "width": 126,
        "height": 338,
        "desc": "CHIÊU 14: Tương tự 13.2 ta cũng đưa tay lên nhưng lòng tay phải ngửa, lòng bàn tay trái úp (xem thêm H14.2N). Tương tự như Chiêu thứ 13 ta cũng chuyền vị trí tay tuân tự từ tay phải sang tay trái. Tập 2 tay tính là một lần. Tập 3 lần tất cả."
      },
      {
        "id": "bai-07-m-39",
        "stepNo": "39",
        "assetId": "p041-h02",
        "displayId": "H0102",
        "pdfPage": 41,
        "imgUrl": "/assets/hinh/p041-h02.png",
        "img2xUrl": "/assets/hinh-2x/p041-h02.png",
        "width": 186,
        "height": 382,
        "desc": "CHIÊU 11: Như hình 1"
      },
      {
        "id": "bai-07-m-40",
        "stepNo": "40",
        "assetId": "p041-h03",
        "displayId": "H0103",
        "pdfPage": 41,
        "imgUrl": "/assets/hinh/p041-h03.png",
        "img2xUrl": "/assets/hinh-2x/p041-h03.png",
        "width": 129,
        "height": 338,
        "desc": "CHIÊU 11: Đưa 2 bàn tay xuống đặt ở bên phải thắt lưng. - Bàn tay phải đặt trên tay trái. - Xoa hai bàn tay trên hai mặt phẳng theo chiều kim đồng hồ. - Xoa3 lần."
      },
      {
        "id": "bai-07-m-41",
        "stepNo": "41",
        "assetId": "p041-h04",
        "displayId": "H0104",
        "pdfPage": 41,
        "imgUrl": "/assets/hinh/p041-h04.png",
        "img2xUrl": "/assets/hinh-2x/p041-h04.png",
        "width": 137,
        "height": 338,
        "desc": "CHIÊU 11: Kết thúc lần xoa thứ 3 đánh hai tay ra phía trước."
      },
      {
        "id": "bai-07-m-42",
        "stepNo": "42",
        "assetId": "p041-h05",
        "displayId": "H0105",
        "pdfPage": 41,
        "imgUrl": "/assets/hinh/p041-h05.png",
        "img2xUrl": "/assets/hinh-2x/p041-h05.png",
        "width": 128,
        "height": 338,
        "desc": "CHIÊU 11: Như hình 1 Tương tự như vậy chuyển sang bên trái. Lưu ý: khi chuyển sang bên hái thì lúc này bàn tay trái lại ở trên còn bàn tay phải ở dưới. Tập bên phải sau đó chuyên sang bên trái là 1 lần. Tập 3 lần tất câ."
      },
      {
        "id": "bai-07-m-43",
        "stepNo": "43",
        "assetId": "p041-h06",
        "displayId": "H0106",
        "pdfPage": 41,
        "imgUrl": "/assets/hinh/p041-h06.png",
        "img2xUrl": "/assets/hinh-2x/p041-h06.png",
        "width": 137,
        "height": 341,
        "desc": "CHIÊU 12: Tay phải ở ngoài tay trái ở trong đánh 2 cổ tay sang trái."
      },
      {
        "id": "bai-07-m-44",
        "stepNo": "44",
        "assetId": "p041-h07",
        "displayId": "H0107",
        "pdfPage": 41,
        "imgUrl": "/assets/hinh/p041-h07.png",
        "img2xUrl": "/assets/hinh-2x/p041-h07.png",
        "width": 233,
        "height": 383,
        "desc": "CHIÊU 16: Từ Băng thủ chuyền sang Than thủ."
      },
      {
        "id": "bai-07-m-45",
        "stepNo": "45",
        "assetId": "p041-h08",
        "displayId": "H0108",
        "pdfPage": 41,
        "imgUrl": "/assets/hinh/p041-h08.png",
        "img2xUrl": "/assets/hinh-2x/p041-h08.png",
        "width": 142,
        "height": 339,
        "desc": "CHIÊU 12: Hai bàn tay vỗ xuống."
      },
      {
        "id": "bai-07-m-46",
        "stepNo": "46",
        "assetId": "p042-h01",
        "displayId": "H0109",
        "pdfPage": 42,
        "imgUrl": "/assets/hinh/p042-h01.png",
        "img2xUrl": "/assets/hinh-2x/p042-h01.png",
        "width": 143,
        "height": 344,
        "desc": "CHIÊU 17: Đưa tay phải lên trên ngang vai."
      },
      {
        "id": "bai-07-m-47",
        "stepNo": "47",
        "assetId": "p042-h02",
        "displayId": "H0110",
        "pdfPage": 42,
        "imgUrl": "/assets/hinh/p042-h02.png",
        "img2xUrl": "/assets/hinh-2x/p042-h02.png",
        "width": 137,
        "height": 339,
        "desc": "CHIÊU 17: Tay trái kéo về, cườm tay phải đánh ra. Thực hiện xong tay phải thì chuyên sang tay trái. Tập tay phải và tay trái tính 1 lằn. Tập 3 lần tất cả. CHIỀU 18: Gồm các động tác: 18.1,"
      },
      {
        "id": "bai-07-m-48",
        "stepNo": "48",
        "assetId": "p042-h03",
        "displayId": "H0111",
        "pdfPage": 42,
        "imgUrl": "/assets/hinh/p042-h03.png",
        "img2xUrl": "/assets/hinh-2x/p042-h03.png",
        "width": 133,
        "height": 340,
        "desc": "CHIÊU 17: Đấm tay phải lên vùng thượng."
      },
      {
        "id": "bai-07-m-49",
        "stepNo": "49",
        "assetId": "p042-h04",
        "displayId": "H0112",
        "pdfPage": 42,
        "imgUrl": "/assets/hinh/p042-h04.png",
        "img2xUrl": "/assets/hinh-2x/p042-h04.png",
        "width": 134,
        "height": 339,
        "desc": "CHIÊU 17: Đấm tay trái vào vùng trung."
      },
      {
        "id": "bai-07-m-50",
        "stepNo": "50",
        "assetId": "p042-h05",
        "displayId": "H0113",
        "pdfPage": 42,
        "imgUrl": "/assets/hinh/p042-h05.png",
        "img2xUrl": "/assets/hinh-2x/p042-h05.png",
        "width": 150,
        "height": 343,
        "desc": "CHIÊU 17: Đấm tay phải xuống vùng hạ."
      },
      {
        "id": "bai-07-m-51",
        "stepNo": "51",
        "assetId": "p042-h06",
        "displayId": "H0114",
        "pdfPage": 42,
        "imgUrl": "/assets/hinh/p042-h06.png",
        "img2xUrl": "/assets/hinh-2x/p042-h06.png",
        "width": 136,
        "height": 343,
        "desc": "CHIÊU 17: Đánh thẳng song chướng ra trước."
      },
      {
        "id": "bai-07-m-52",
        "stepNo": "52",
        "assetId": "p042-h07",
        "displayId": "H0115",
        "pdfPage": 42,
        "imgUrl": "/assets/hinh/p042-h07.png",
        "img2xUrl": "/assets/hinh-2x/p042-h07.png",
        "width": 170,
        "height": 340,
        "desc": "CHIÊU 17: Hai tay đánh ấn chưởng xuống dưới dọc theo thân người. BÁI TỔ - Kết thúc bài"
      }
    ],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-08-1",
    "title": "Giới thiệu Tầm Kiều",
    "groupId": "quyen-tay-khong",
    "bookOrder": 8,
    "contentType": "reading",
    "pdfPages": [43],
    "pageRange": "Trang PDF 43",
    "assetCount": 0,
    "assets": [],
    "motions": [],
    "recommendedPrerequisites": ["bai-07"]
  },
  {
    "id": "bai-08-2",
    "title": "Giới thiệu Tiêu Chỉ",
    "groupId": "quyen-tay-khong",
    "bookOrder": 8,
    "contentType": "reading",
    "pdfPages": [43],
    "pageRange": "Trang PDF 43",
    "assetCount": 0,
    "assets": [],
    "motions": [],
    "recommendedPrerequisites": ["bai-08-1"]
  },
  {
  "id": "bai-09",
  "title": "Tầm Kiều",
  "groupId": "quyen-tay-khong",
  "bookOrder": 9,
  "contentType": "practice_or_mixed",
  "pdfPages": [
    44,
    45,
    46,
    47,
    48
  ],
  "pageRange": "Trang PDF 44 – 48",
  "assetCount": 45,
  "assets": [
    {
      "assetId": "p044-h01",
      "displayId": "H0116",
      "pdfPage": 44,
      "imgUrl": "/assets/hinh/p044-h01.png",
      "img2xUrl": "/assets/hinh-2x/p044-h01.png",
      "width": 136,
      "height": 338
    },
    {
      "assetId": "p044-h02",
      "displayId": "H0117",
      "pdfPage": 44,
      "imgUrl": "/assets/hinh/p044-h02.png",
      "img2xUrl": "/assets/hinh-2x/p044-h02.png",
      "width": 133,
      "height": 339
    },
    {
      "assetId": "p044-h03",
      "displayId": "H0118",
      "pdfPage": 44,
      "imgUrl": "/assets/hinh/p044-h03.png",
      "img2xUrl": "/assets/hinh-2x/p044-h03.png",
      "width": 132,
      "height": 339
    },
    {
      "assetId": "p044-h04",
      "displayId": "H0119",
      "pdfPage": 44,
      "imgUrl": "/assets/hinh/p044-h04.png",
      "img2xUrl": "/assets/hinh-2x/p044-h04.png",
      "width": 142,
      "height": 338
    },
    {
      "assetId": "p044-h05",
      "displayId": "H0120",
      "pdfPage": 44,
      "imgUrl": "/assets/hinh/p044-h05.png",
      "img2xUrl": "/assets/hinh-2x/p044-h05.png",
      "width": 252,
      "height": 383
    },
    {
      "assetId": "p044-h06",
      "displayId": "H0121",
      "pdfPage": 44,
      "imgUrl": "/assets/hinh/p044-h06.png",
      "img2xUrl": "/assets/hinh-2x/p044-h06.png",
      "width": 234,
      "height": 384
    },
    {
      "assetId": "p044-h07",
      "displayId": "H0122",
      "pdfPage": 44,
      "imgUrl": "/assets/hinh/p044-h07.png",
      "img2xUrl": "/assets/hinh-2x/p044-h07.png",
      "width": 209,
      "height": 376
    },
    {
      "assetId": "p044-h08",
      "displayId": "H0123",
      "pdfPage": 44,
      "imgUrl": "/assets/hinh/p044-h08.png",
      "img2xUrl": "/assets/hinh-2x/p044-h08.png",
      "width": 143,
      "height": 339
    },
    {
      "assetId": "p044-h09",
      "displayId": "H0124",
      "pdfPage": 44,
      "imgUrl": "/assets/hinh/p044-h09.png",
      "img2xUrl": "/assets/hinh-2x/p044-h09.png",
      "width": 141,
      "height": 340
    },
    {
      "assetId": "p045-h01",
      "displayId": "H0125",
      "pdfPage": 45,
      "imgUrl": "/assets/hinh/p045-h01.png",
      "img2xUrl": "/assets/hinh-2x/p045-h01.png",
      "width": 140,
      "height": 339
    },
    {
      "assetId": "p045-h02",
      "displayId": "H0126",
      "pdfPage": 45,
      "imgUrl": "/assets/hinh/p045-h02.png",
      "img2xUrl": "/assets/hinh-2x/p045-h02.png",
      "width": 141,
      "height": 340
    },
    {
      "assetId": "p045-h03",
      "displayId": "H0127",
      "pdfPage": 45,
      "imgUrl": "/assets/hinh/p045-h03.png",
      "img2xUrl": "/assets/hinh-2x/p045-h03.png",
      "width": 131,
      "height": 338
    },
    {
      "assetId": "p045-h04",
      "displayId": "H0128",
      "pdfPage": 45,
      "imgUrl": "/assets/hinh/p045-h04.png",
      "img2xUrl": "/assets/hinh-2x/p045-h04.png",
      "width": 136,
      "height": 339
    },
    {
      "assetId": "p045-h05",
      "displayId": "H0129",
      "pdfPage": 45,
      "imgUrl": "/assets/hinh/p045-h05.png",
      "img2xUrl": "/assets/hinh-2x/p045-h05.png",
      "width": 145,
      "height": 339
    },
    {
      "assetId": "p045-h06",
      "displayId": "H0130",
      "pdfPage": 45,
      "imgUrl": "/assets/hinh/p045-h06.png",
      "img2xUrl": "/assets/hinh-2x/p045-h06.png",
      "width": 137,
      "height": 339
    },
    {
      "assetId": "p045-h07",
      "displayId": "H0131",
      "pdfPage": 45,
      "imgUrl": "/assets/hinh/p045-h07.png",
      "img2xUrl": "/assets/hinh-2x/p045-h07.png",
      "width": 138,
      "height": 341
    },
    {
      "assetId": "p045-h08",
      "displayId": "H0132",
      "pdfPage": 45,
      "imgUrl": "/assets/hinh/p045-h08.png",
      "img2xUrl": "/assets/hinh-2x/p045-h08.png",
      "width": 235,
      "height": 382
    },
    {
      "assetId": "p045-h09",
      "displayId": "H0133",
      "pdfPage": 45,
      "imgUrl": "/assets/hinh/p045-h09.png",
      "img2xUrl": "/assets/hinh-2x/p045-h09.png",
      "width": 239,
      "height": 383
    },
    {
      "assetId": "p045-h10",
      "displayId": "H0134",
      "pdfPage": 45,
      "imgUrl": "/assets/hinh/p045-h10.png",
      "img2xUrl": "/assets/hinh-2x/p045-h10.png",
      "width": 230,
      "height": 383
    },
    {
      "assetId": "p046-h01",
      "displayId": "H0135",
      "pdfPage": 46,
      "imgUrl": "/assets/hinh/p046-h01.png",
      "img2xUrl": "/assets/hinh-2x/p046-h01.png",
      "width": 157,
      "height": 337
    },
    {
      "assetId": "p046-h02",
      "displayId": "H0136",
      "pdfPage": 46,
      "imgUrl": "/assets/hinh/p046-h02.png",
      "img2xUrl": "/assets/hinh-2x/p046-h02.png",
      "width": 168,
      "height": 338
    },
    {
      "assetId": "p046-h03",
      "displayId": "H0137",
      "pdfPage": 46,
      "imgUrl": "/assets/hinh/p046-h03.png",
      "img2xUrl": "/assets/hinh-2x/p046-h03.png",
      "width": 280,
      "height": 380
    },
    {
      "assetId": "p046-h04",
      "displayId": "H0138",
      "pdfPage": 46,
      "imgUrl": "/assets/hinh/p046-h04.png",
      "img2xUrl": "/assets/hinh-2x/p046-h04.png",
      "width": 252,
      "height": 380
    },
    {
      "assetId": "p046-h05",
      "displayId": "H0139",
      "pdfPage": 46,
      "imgUrl": "/assets/hinh/p046-h05.png",
      "img2xUrl": "/assets/hinh-2x/p046-h05.png",
      "width": 183,
      "height": 336
    },
    {
      "assetId": "p046-h06",
      "displayId": "H0140",
      "pdfPage": 46,
      "imgUrl": "/assets/hinh/p046-h06.png",
      "img2xUrl": "/assets/hinh-2x/p046-h06.png",
      "width": 142,
      "height": 336
    },
    {
      "assetId": "p046-h07",
      "displayId": "H0141",
      "pdfPage": 46,
      "imgUrl": "/assets/hinh/p046-h07.png",
      "img2xUrl": "/assets/hinh-2x/p046-h07.png",
      "width": 176,
      "height": 335
    },
    {
      "assetId": "p046-h08",
      "displayId": "H0142",
      "pdfPage": 46,
      "imgUrl": "/assets/hinh/p046-h08.png",
      "img2xUrl": "/assets/hinh-2x/p046-h08.png",
      "width": 262,
      "height": 379
    },
    {
      "assetId": "p046-h09",
      "displayId": "H0143",
      "pdfPage": 46,
      "imgUrl": "/assets/hinh/p046-h09.png",
      "img2xUrl": "/assets/hinh-2x/p046-h09.png",
      "width": 281,
      "height": 379
    },
    {
      "assetId": "p047-h01",
      "displayId": "H0144",
      "pdfPage": 47,
      "imgUrl": "/assets/hinh/p047-h01.png",
      "img2xUrl": "/assets/hinh-2x/p047-h01.png",
      "width": 110,
      "height": 339
    },
    {
      "assetId": "p047-h02",
      "displayId": "H0145",
      "pdfPage": 47,
      "imgUrl": "/assets/hinh/p047-h02.png",
      "img2xUrl": "/assets/hinh-2x/p047-h02.png",
      "width": 200,
      "height": 320
    },
    {
      "assetId": "p047-h03",
      "displayId": "H0146",
      "pdfPage": 47,
      "imgUrl": "/assets/hinh/p047-h03.png",
      "img2xUrl": "/assets/hinh-2x/p047-h03.png",
      "width": 275,
      "height": 319
    },
    {
      "assetId": "p047-h04",
      "displayId": "H0147",
      "pdfPage": 47,
      "imgUrl": "/assets/hinh/p047-h04.png",
      "img2xUrl": "/assets/hinh-2x/p047-h04.png",
      "width": 241,
      "height": 383
    },
    {
      "assetId": "p047-h05",
      "displayId": "H0148",
      "pdfPage": 47,
      "imgUrl": "/assets/hinh/p047-h05.png",
      "img2xUrl": "/assets/hinh-2x/p047-h05.png",
      "width": 213,
      "height": 336
    },
    {
      "assetId": "p047-h06",
      "displayId": "H0149",
      "pdfPage": 47,
      "imgUrl": "/assets/hinh/p047-h06.png",
      "img2xUrl": "/assets/hinh-2x/p047-h06.png",
      "width": 248,
      "height": 333
    },
    {
      "assetId": "p047-h07",
      "displayId": "H0150",
      "pdfPage": 47,
      "imgUrl": "/assets/hinh/p047-h07.png",
      "img2xUrl": "/assets/hinh-2x/p047-h07.png",
      "width": 202,
      "height": 383
    },
    {
      "assetId": "p047-h08",
      "displayId": "H0151",
      "pdfPage": 47,
      "imgUrl": "/assets/hinh/p047-h08.png",
      "img2xUrl": "/assets/hinh-2x/p047-h08.png",
      "width": 215,
      "height": 383
    },
    {
      "assetId": "p048-h01",
      "displayId": "H0152",
      "pdfPage": 48,
      "imgUrl": "/assets/hinh/p048-h01.png",
      "img2xUrl": "/assets/hinh-2x/p048-h01.png",
      "width": 193,
      "height": 383
    },
    {
      "assetId": "p048-h02",
      "displayId": "H0153",
      "pdfPage": 48,
      "imgUrl": "/assets/hinh/p048-h02.png",
      "img2xUrl": "/assets/hinh-2x/p048-h02.png",
      "width": 109,
      "height": 340
    },
    {
      "assetId": "p048-h03",
      "displayId": "H0154",
      "pdfPage": 48,
      "imgUrl": "/assets/hinh/p048-h03.png",
      "img2xUrl": "/assets/hinh-2x/p048-h03.png",
      "width": 172,
      "height": 339
    },
    {
      "assetId": "p048-h04",
      "displayId": "H0155",
      "pdfPage": 48,
      "imgUrl": "/assets/hinh/p048-h04.png",
      "img2xUrl": "/assets/hinh-2x/p048-h04.png",
      "width": 124,
      "height": 339
    },
    {
      "assetId": "p048-h05",
      "displayId": "H0156",
      "pdfPage": 48,
      "imgUrl": "/assets/hinh/p048-h05.png",
      "img2xUrl": "/assets/hinh-2x/p048-h05.png",
      "width": 203,
      "height": 381
    },
    {
      "assetId": "p048-h06",
      "displayId": "H0157",
      "pdfPage": 48,
      "imgUrl": "/assets/hinh/p048-h06.png",
      "img2xUrl": "/assets/hinh-2x/p048-h06.png",
      "width": 251,
      "height": 334
    },
    {
      "assetId": "p048-h07",
      "displayId": "H0158",
      "pdfPage": 48,
      "imgUrl": "/assets/hinh/p048-h07.png",
      "img2xUrl": "/assets/hinh-2x/p048-h07.png",
      "width": 203,
      "height": 382
    },
    {
      "assetId": "p048-h08",
      "displayId": "H0159",
      "pdfPage": 48,
      "imgUrl": "/assets/hinh/p048-h08.png",
      "img2xUrl": "/assets/hinh-2x/p048-h08.png",
      "width": 204,
      "height": 382
    },
    {
      "assetId": "p048-h09",
      "displayId": "H0160",
      "pdfPage": 48,
      "imgUrl": "/assets/hinh/p048-h09.png",
      "img2xUrl": "/assets/hinh-2x/p048-h09.png",
      "width": 209,
      "height": 383
    }
  ],
  "motions": [
    {
      "id": "bai-09-m-1",
      "stepNo": "1",
      "assetId": "p044-h01",
      "displayId": "H0116",
      "pdfPage": 44,
      "imgUrl": "/assets/hinh/p044-h01.png",
      "img2xUrl": "/assets/hinh-2x/p044-h01.png",
      "width": 136,
      "height": 338,
      "desc": "Hai tay bắt chéo, tay trái ở trong đưa dần từ trên xuống dưới đến ngang mức thắt lưng."
    },
    {
      "id": "bai-09-m-2",
      "stepNo": "2",
      "assetId": "p044-h02",
      "displayId": "H0117",
      "pdfPage": 44,
      "imgUrl": "/assets/hinh/p044-h02.png",
      "img2xUrl": "/assets/hinh-2x/p044-h02.png",
      "width": 133,
      "height": 339,
      "desc": "Đưa tay lên trên, gấp cổ tay thả lỏng ngón tay."
    },
    {
      "id": "bai-09-m-3",
      "stepNo": "3",
      "assetId": "p044-h03",
      "displayId": "H0118",
      "pdfPage": 44,
      "imgUrl": "/assets/hinh/p044-h03.png",
      "img2xUrl": "/assets/hinh-2x/p044-h03.png",
      "width": 132,
      "height": 339,
      "desc": "Dựng bàn tay, hai tay xòe bắt chéo rồi thu về."
    },
    {
      "id": "bai-09-m-4",
      "stepNo": "4",
      "assetId": "p044-h04",
      "displayId": "H0119",
      "pdfPage": 44,
      "imgUrl": "/assets/hinh/p044-h04.png",
      "img2xUrl": "/assets/hinh-2x/p044-h04.png",
      "width": 142,
      "height": 338,
      "desc": "CHIÊU 2: Đứng kiềm dương tấn. Đấm thẳng tay phải ra trước. Mắt nhìn thẳng."
    },
    {
      "id": "bai-09-m-5",
      "stepNo": "5",
      "assetId": "p044-h05",
      "displayId": "H0120",
      "pdfPage": 44,
      "imgUrl": "/assets/hinh/p044-h05.png",
      "img2xUrl": "/assets/hinh-2x/p044-h05.png",
      "width": 252,
      "height": 383,
      "desc": "CHIÊU 2: Mở bung 5 đầu ngón tay ra trước."
    },
    {
      "id": "bai-09-m-6",
      "stepNo": "6",
      "assetId": "p044-h06",
      "displayId": "H0121",
      "pdfPage": 44,
      "imgUrl": "/assets/hinh/p044-h06.png",
      "img2xUrl": "/assets/hinh-2x/p044-h06.png",
      "width": 234,
      "height": 384,
      "desc": "CHIÊU 2: Đánh cổ tay lên trên."
    },
    {
      "id": "bai-09-m-7",
      "stepNo": "7",
      "assetId": "p044-h07",
      "displayId": "H0122",
      "pdfPage": 44,
      "imgUrl": "/assets/hinh/p044-h07.png",
      "img2xUrl": "/assets/hinh-2x/p044-h07.png",
      "width": 209,
      "height": 376,
      "desc": "CHIÊU 2: Đánh cổ tay xuống dưới. Lặp lại động tác đánh cổ tay 03 lần."
    },
    {
      "id": "bai-09-m-8",
      "stepNo": "8",
      "assetId": "p044-h08",
      "displayId": "H0123",
      "pdfPage": 44,
      "imgUrl": "/assets/hinh/p044-h08.png",
      "img2xUrl": "/assets/hinh-2x/p044-h08.png",
      "width": 143,
      "height": 339,
      "desc": "CHIÊU 2: Xoay úp bàn tay. Đánh cạnh cổ tay sang hai bên phải - trái (03 lần)."
    },
    {
      "id": "bai-09-m-9",
      "stepNo": "9",
      "assetId": "p044-h09",
      "displayId": "H0124",
      "pdfPage": 44,
      "imgUrl": "/assets/hinh/p044-h09.png",
      "img2xUrl": "/assets/hinh-2x/p044-h09.png",
      "width": 141,
      "height": 340,
      "desc": "CHIÊU 2: Xoay tròn cổ tay theo chiều kim đồng hồ 3 vòng."
    },
    {
      "id": "bai-09-m-10",
      "stepNo": "10",
      "assetId": "p045-h01",
      "displayId": "H0125",
      "pdfPage": 45,
      "imgUrl": "/assets/hinh/p045-h01.png",
      "img2xUrl": "/assets/hinh-2x/p045-h01.png",
      "width": 140,
      "height": 339,
      "desc": "CHIÊU 2: Xoay cổ tay theo hướng ngược lại 3 vòng."
    },
    {
      "id": "bai-09-m-11",
      "stepNo": "11",
      "assetId": "p045-h02",
      "displayId": "H0126",
      "pdfPage": 45,
      "imgUrl": "/assets/hinh/p045-h02.png",
      "img2xUrl": "/assets/hinh-2x/p045-h02.png",
      "width": 141,
      "height": 340,
      "desc": "CHIÊU 2: Xoay cổ tay theo hướng từ trong ra ngoài, tưởng tượng nắm cổ tay đối phương rồi kéo về sát nách. Lặp lại chiêu số 2 với tay bên trái."
    },
    {
      "id": "bai-09-m-12",
      "stepNo": "12",
      "assetId": "p045-h03",
      "displayId": "H0127",
      "pdfPage": 45,
      "imgUrl": "/assets/hinh/p045-h03.png",
      "img2xUrl": "/assets/hinh-2x/p045-h03.png",
      "width": 131,
      "height": 338,
      "desc": "CHIÊU 2: Chân đứng kiềm dương tấn. Mở bàn tay, đánh thăng hai bàn tay xuông."
    },
    {
      "id": "bai-09-m-13",
      "stepNo": "13",
      "assetId": "p045-h04",
      "displayId": "H0128",
      "pdfPage": 45,
      "imgUrl": "/assets/hinh/p045-h04.png",
      "img2xUrl": "/assets/hinh-2x/p045-h04.png",
      "width": 136,
      "height": 339,
      "desc": "CHIÊU 2: Thu hai tay về sát nách rồi đánh thẳng ra phía trước."
    },
    {
      "id": "bai-09-m-14",
      "stepNo": "14",
      "assetId": "p045-h05",
      "displayId": "H0129",
      "pdfPage": 45,
      "imgUrl": "/assets/hinh/p045-h05.png",
      "img2xUrl": "/assets/hinh-2x/p045-h05.png",
      "width": 145,
      "height": 339,
      "desc": "CHIÊU 2: Thu hai tay về song song trước ngực, tay phải ở trên."
    },
    {
      "id": "bai-09-m-15",
      "stepNo": "15",
      "assetId": "p045-h06",
      "displayId": "H0130",
      "pdfPage": 45,
      "imgUrl": "/assets/hinh/p045-h06.png",
      "img2xUrl": "/assets/hinh-2x/p045-h06.png",
      "width": 137,
      "height": 339,
      "desc": "CHIÊU 2: Xoay người sang phải, hai bàn chân song song."
    },
    {
      "id": "bai-09-m-16",
      "stepNo": "16",
      "assetId": "p045-h07",
      "displayId": "H0131",
      "pdfPage": 45,
      "imgUrl": "/assets/hinh/p045-h07.png",
      "img2xUrl": "/assets/hinh-2x/p045-h07.png",
      "width": 138,
      "height": 341,
      "desc": "CHIÊU 2: Tương tự, xoay người sang trái"
    },
    {
      "id": "bai-09-m-17",
      "stepNo": "17",
      "assetId": "p045-h08",
      "displayId": "H0132",
      "pdfPage": 45,
      "imgUrl": "/assets/hinh/p045-h08.png",
      "img2xUrl": "/assets/hinh-2x/p045-h08.png",
      "width": 235,
      "height": 382,
      "desc": "CHIÊU 2: Xoay người sang phải một lần nữa, giữ nguyên cánh tay, mở bung 2 căng tay chém ra."
    },
    {
      "id": "bai-09-m-18",
      "stepNo": "18",
      "assetId": "p045-h09",
      "displayId": "H0133",
      "pdfPage": 45,
      "imgUrl": "/assets/hinh/p045-h09.png",
      "img2xUrl": "/assets/hinh-2x/p045-h09.png",
      "width": 239,
      "height": 383,
      "desc": "CHIÊU 2: Chân giữ nguyên. Xoay căng tay phải thành than thủ, tay trái đặt lên tay phải."
    },
    {
      "id": "bai-09-m-19",
      "stepNo": "19",
      "assetId": "p045-h10",
      "displayId": "H0134",
      "pdfPage": 45,
      "imgUrl": "/assets/hinh/p045-h10.png",
      "img2xUrl": "/assets/hinh-2x/p045-h10.png",
      "width": 230,
      "height": 383,
      "desc": "CHIÊU 2: Tiền chân trái lên trước, Xoay cẳng tay trái thành than thủ, tay phải đặt lên tay trái. Lặp lại động tác 3.7"
    },
    {
      "id": "bai-09-m-20",
      "stepNo": "20",
      "assetId": "p046-h01",
      "displayId": "H0135",
      "pdfPage": 46,
      "imgUrl": "/assets/hinh/p046-h01.png",
      "img2xUrl": "/assets/hinh-2x/p046-h01.png",
      "width": 157,
      "height": 337,
      "desc": "CHIÊU 2: Đưa hai tay ra trước làm động tác bắt đòn, hai bàn tay song song, tay trái ở trên, lòng bàn tay khum."
    },
    {
      "id": "bai-09-m-21",
      "stepNo": "21",
      "assetId": "p046-h02",
      "displayId": "H0136",
      "pdfPage": 46,
      "imgUrl": "/assets/hinh/p046-h02.png",
      "img2xUrl": "/assets/hinh-2x/p046-h02.png",
      "width": 168,
      "height": 338,
      "desc": "CHIÊU 2: Lùi chân phải, thi triển bắt đòn với tay phải ở trên."
    },
    {
      "id": "bai-09-m-22",
      "stepNo": "22",
      "assetId": "p046-h03",
      "displayId": "H0137",
      "pdfPage": 46,
      "imgUrl": "/assets/hinh/p046-h03.png",
      "img2xUrl": "/assets/hinh-2x/p046-h03.png",
      "width": 280,
      "height": 380,
      "desc": "CHIÊU 2: Tiến chân phải lên trước. Hai bàn tay dựng song song đánh thẳng ra trước."
    },
    {
      "id": "bai-09-m-23",
      "stepNo": "23",
      "assetId": "p046-h04",
      "displayId": "H0138",
      "pdfPage": 46,
      "imgUrl": "/assets/hinh/p046-h04.png",
      "img2xUrl": "/assets/hinh-2x/p046-h04.png",
      "width": 252,
      "height": 380,
      "desc": "CHIÊU 2: Chân đứng kiềm dương tấn. Mở bàn tay, đánh thăng hai bàn tay xuông."
    },
    {
      "id": "bai-09-m-24",
      "stepNo": "24",
      "assetId": "p046-h05",
      "displayId": "H0139",
      "pdfPage": 46,
      "imgUrl": "/assets/hinh/p046-h05.png",
      "img2xUrl": "/assets/hinh-2x/p046-h05.png",
      "width": 183,
      "height": 336,
      "desc": "CHIÊU 2: Xoay người 180, Tay phải kéo ra sau, đánh cẳng tay trái ra trước, (hai tay ra cùng lúc theo hướng đối nhau tạo thế giương cung)."
    },
    {
      "id": "bai-09-m-25",
      "stepNo": "25",
      "assetId": "p046-h06",
      "displayId": "H0140",
      "pdfPage": 46,
      "imgUrl": "/assets/hinh/p046-h06.png",
      "img2xUrl": "/assets/hinh-2x/p046-h06.png",
      "width": 142,
      "height": 336,
      "desc": "CHIÊU 2: Chân, thân giữ nguyện. Mở tay phải đặt bàn tay lên cổ tay trái."
    },
    {
      "id": "bai-09-m-26",
      "stepNo": "26",
      "assetId": "p046-h07",
      "displayId": "H0141",
      "pdfPage": 46,
      "imgUrl": "/assets/hinh/p046-h07.png",
      "img2xUrl": "/assets/hinh-2x/p046-h07.png",
      "width": 176,
      "height": 335,
      "desc": "CHIÊU 2: Xoay chân ngược lại phía sau. Xoay - vặn người tối đa tạo hình cánh cung. Đánh cùi chỏ ra sau theo hướng từ trên xuống dưới. Lặp lại động tác từ 3.13 đến 3.15 ba lần."
    },
    {
      "id": "bai-09-m-27",
      "stepNo": "27",
      "assetId": "p046-h08",
      "displayId": "H0142",
      "pdfPage": 46,
      "imgUrl": "/assets/hinh/p046-h08.png",
      "img2xUrl": "/assets/hinh-2x/p046-h08.png",
      "width": 262,
      "height": 379,
      "desc": "CHIÊU 2: Sau khi kết thúc động tác, xoay người lại phía sau, tư thế tương tự động tác 3.13 tuy nhiên lúc này tay phải nắm lại đặt trên tay trái. Tiến chân phải lên trước song song với chân trái. Đánh thắng hai quyền ra trước."
    },
    {
      "id": "bai-09-m-28",
      "stepNo": "28",
      "assetId": "p046-h09",
      "displayId": "H0143",
      "pdfPage": 46,
      "imgUrl": "/assets/hinh/p046-h09.png",
      "img2xUrl": "/assets/hinh-2x/p046-h09.png",
      "width": 281,
      "height": 379,
      "desc": "CHIÊU 2: Xoay người ra sau Chân lập kiềm dương tấn. Chém cạnh ngoài cẳng tay phải sang phải."
    },
    {
      "id": "bai-09-m-29",
      "stepNo": "29",
      "assetId": "p047-h01",
      "displayId": "H0144",
      "pdfPage": 47,
      "imgUrl": "/assets/hinh/p047-h01.png",
      "img2xUrl": "/assets/hinh-2x/p047-h01.png",
      "width": 110,
      "height": 339,
      "desc": "CHIÊU 2: Đưa chân phải ra trước song song với chân trái. Đánh cạnh ngoài hai cổ tay xuống dưới. Rút chân trái về kiềm dương tấn kèm xoay cổ tay trái, nắm lại rút Ta sau cùng lúc tay phải đánh cạnh bàn tay ra trước rồi thu về sát nách. Lặp lại toàn bộ chiêu số 3 từ 3.1 đến 3.18 với tay bên trái."
    },
    {
      "id": "bai-09-m-30",
      "stepNo": "30",
      "assetId": "p047-h02",
      "displayId": "H0145",
      "pdfPage": 47,
      "imgUrl": "/assets/hinh/p047-h02.png",
      "img2xUrl": "/assets/hinh-2x/p047-h02.png",
      "width": 200,
      "height": 320,
      "desc": "CHIÊU 4: Xoay người sang phải. Căng tay phải vuông góc với cánh tay, song song với mặt đất, bàn tay úp. Thu gối kéo chân phải lên."
    },
    {
      "id": "bai-09-m-31",
      "stepNo": "31",
      "assetId": "p047-h03",
      "displayId": "H0146",
      "pdfPage": 47,
      "imgUrl": "/assets/hinh/p047-h03.png",
      "img2xUrl": "/assets/hinh-2x/p047-h03.png",
      "width": 275,
      "height": 319,
      "desc": "CHIÊU 4: Đá thẳng cạnh ngoài bàn chân phải ra trước."
    },
    {
      "id": "bai-09-m-32",
      "stepNo": "32",
      "assetId": "p047-h04",
      "displayId": "H0147",
      "pdfPage": 47,
      "imgUrl": "/assets/hinh/p047-h04.png",
      "img2xUrl": "/assets/hinh-2x/p047-h04.png",
      "width": 241,
      "height": 383,
      "desc": "Dựng bàn tay, hai tay xòe bắt chéo rồi thu về."
    },
    {
      "id": "bai-09-m-33",
      "stepNo": "33",
      "assetId": "p047-h05",
      "displayId": "H0148",
      "pdfPage": 47,
      "imgUrl": "/assets/hinh/p047-h05.png",
      "img2xUrl": "/assets/hinh-2x/p047-h05.png",
      "width": 213,
      "height": 336,
      "desc": "CHIÊU 4: Xoay người sang phải, nâng gối phải lên cao."
    },
    {
      "id": "bai-09-m-34",
      "stepNo": "34",
      "assetId": "p047-h06",
      "displayId": "H0149",
      "pdfPage": 47,
      "imgUrl": "/assets/hinh/p047-h06.png",
      "img2xUrl": "/assets/hinh-2x/p047-h06.png",
      "width": 248,
      "height": 333,
      "desc": "CHIÊU 4: Mũi bàn chân phải xoay tròn một vòng ngược chiêu kim đồng hồ đá móc lên."
    },
    {
      "id": "bai-09-m-35",
      "stepNo": "35",
      "assetId": "p047-h07",
      "displayId": "H0150",
      "pdfPage": 47,
      "imgUrl": "/assets/hinh/p047-h07.png",
      "img2xUrl": "/assets/hinh-2x/p047-h07.png",
      "width": 202,
      "height": 383,
      "desc": "CHIÊU 4: Đặt chân phải xuống"
    },
    {
      "id": "bai-09-m-36",
      "stepNo": "36",
      "assetId": "p047-h08",
      "displayId": "H0151",
      "pdfPage": 47,
      "imgUrl": "/assets/hinh/p047-h08.png",
      "img2xUrl": "/assets/hinh-2x/p047-h08.png",
      "width": 215,
      "height": 383,
      "desc": "CHIÊU 4: Lặp lại động tác xỉa tay như trên 02 lần nữa kèm tiến hai bước ra trước theo thế truy mã."
    },
    {
      "id": "bai-09-m-37",
      "stepNo": "37",
      "assetId": "p048-h01",
      "displayId": "H0152",
      "pdfPage": 48,
      "imgUrl": "/assets/hinh/p048-h01.png",
      "img2xUrl": "/assets/hinh-2x/p048-h01.png",
      "width": 193,
      "height": 383,
      "desc": "CHIÊU 4: Kéo chân trái lên trước tạo thế kiềm dương tấn. Đánh cạnh hai bàn tay theo hướng từ dưới lên trên."
    },
    {
      "id": "bai-09-m-38",
      "stepNo": "38",
      "assetId": "p048-h02",
      "displayId": "H0153",
      "pdfPage": 48,
      "imgUrl": "/assets/hinh/p048-h02.png",
      "img2xUrl": "/assets/hinh-2x/p048-h02.png",
      "width": 109,
      "height": 340,
      "desc": "CHIÊU 4: Thu hai tay về trước ngực, chấp hai bàn tay."
    },
    {
      "id": "bai-09-m-39",
      "stepNo": "39",
      "assetId": "p048-h03",
      "displayId": "H0154",
      "pdfPage": 48,
      "imgUrl": "/assets/hinh/p048-h03.png",
      "img2xUrl": "/assets/hinh-2x/p048-h03.png",
      "width": 172,
      "height": 339,
      "desc": "CHIÊU 4: Xỉa cả hai bàn tay ra trước."
    },
    {
      "id": "bai-09-m-40",
      "stepNo": "40",
      "assetId": "p048-h04",
      "displayId": "H0155",
      "pdfPage": 48,
      "imgUrl": "/assets/hinh/p048-h04.png",
      "img2xUrl": "/assets/hinh-2x/p048-h04.png",
      "width": 124,
      "height": 339,
      "desc": "CHIÊU 4: Giật hai tay về. Mở bàn tay, đánh thẳng song chưởng ra trước. Vòng hai bàn tay rồi kéo về thành quyền thủ ở nách. Lặp lại toàn bộ các động tác từ 6.1 đến 6.18 nhưng ở bên tay trái (5.8B). Bao gồm 4 động tác:"
    },
    {
      "id": "bai-09-m-41",
      "stepNo": "41",
      "assetId": "p048-h05",
      "displayId": "H0156",
      "pdfPage": 48,
      "imgUrl": "/assets/hinh/p048-h05.png",
      "img2xUrl": "/assets/hinh-2x/p048-h05.png",
      "width": 203,
      "height": 381,
      "desc": "CHIÊU 4: Từ kiềm dương tấn, xoay người sang phải, đá chếch ngang với bàn chân phải."
    },
    {
      "id": "bai-09-m-42",
      "stepNo": "42",
      "assetId": "p048-h06",
      "displayId": "H0157",
      "pdfPage": 48,
      "imgUrl": "/assets/hinh/p048-h06.png",
      "img2xUrl": "/assets/hinh-2x/p048-h06.png",
      "width": 251,
      "height": 334,
      "desc": "CHIÊU 4: Từ kiềm dương tấn, xoay người sang phải, đá chếch ngang với bàn chân phải."
    },
    {
      "id": "bai-09-m-43",
      "stepNo": "43",
      "assetId": "p048-h07",
      "displayId": "H0158",
      "pdfPage": 48,
      "imgUrl": "/assets/hinh/p048-h07.png",
      "img2xUrl": "/assets/hinh-2x/p048-h07.png",
      "width": 203,
      "height": 382,
      "desc": "CHIÊU 4: Xoay hai chân sang trái, hai bàn chân song song. Thân người xoay 180 độ. Đồng thời tay phải chuyển bàng thủ, tay trái chuyển than thủ."
    },
    {
      "id": "bai-09-m-44",
      "stepNo": "44",
      "assetId": "p048-h08",
      "displayId": "H0159",
      "pdfPage": 48,
      "imgUrl": "/assets/hinh/p048-h08.png",
      "img2xUrl": "/assets/hinh-2x/p048-h08.png",
      "width": 204,
      "height": 382,
      "desc": "CHIÊU 4: Xoay hai chân sang trái, hai bàn chân song song. Thân người xoay 180 độ. Đồng thời tay phải chuyển bàng thủ, tay trái chuyển than thủ."
    },
    {
      "id": "bai-09-m-45",
      "stepNo": "45",
      "assetId": "p048-h09",
      "displayId": "H0160",
      "pdfPage": 48,
      "imgUrl": "/assets/hinh/p048-h09.png",
      "img2xUrl": "/assets/hinh-2x/p048-h09.png",
      "width": 209,
      "height": 383,
      "desc": "CHIÊU 4: Xoay người ra trước, biên thân. Mở bàn tay trái, đánh thăng ra trước, tay phải gạt than thủ. Quay người về đứng thẳng kiềm dương tấn đồng thời tay phải gạt đọc tay trái rồi kéo hai tay về thủ ở nách. Lặp lại động tác từ 6.1 đến"
    }
  ],
  "recommendedPrerequisites": [
    "bai-08-1"
  ]
},
  {
    "id": "bai-10",
    "title": "Tiêu Chỉ",
    "groupId": "quyen-tay-khong",
    "bookOrder": 10,
    "contentType": "practice_or_mixed",
    "pdfPages": [
      49,
      50,
      51,
      52,
      53
    ],
    "pageRange": "Trang PDF 49 – 53",
    "assetCount": 42,
    "assets": [
      {
        "assetId": "p049-h01",
        "displayId": "H0161",
        "pdfPage": 49,
        "imgUrl": "/assets/hinh/p049-h01.png",
        "img2xUrl": "/assets/hinh-2x/p049-h01.png",
        "width": 134,
        "height": 341
      },
      {
        "assetId": "p049-h02",
        "displayId": "H0162",
        "pdfPage": 49,
        "imgUrl": "/assets/hinh/p049-h02.png",
        "img2xUrl": "/assets/hinh-2x/p049-h02.png",
        "width": 146,
        "height": 339
      },
      {
        "assetId": "p049-h03",
        "displayId": "H0163",
        "pdfPage": 49,
        "imgUrl": "/assets/hinh/p049-h03.png",
        "img2xUrl": "/assets/hinh-2x/p049-h03.png",
        "width": 141,
        "height": 339
      },
      {
        "assetId": "p049-h04",
        "displayId": "H0164",
        "pdfPage": 49,
        "imgUrl": "/assets/hinh/p049-h04.png",
        "img2xUrl": "/assets/hinh-2x/p049-h04.png",
        "width": 213,
        "height": 385
      },
      {
        "assetId": "p049-h05",
        "displayId": "H0165",
        "pdfPage": 49,
        "imgUrl": "/assets/hinh/p049-h05.png",
        "img2xUrl": "/assets/hinh-2x/p049-h05.png",
        "width": 252,
        "height": 385
      },
      {
        "assetId": "p049-h06",
        "displayId": "H0166",
        "pdfPage": 49,
        "imgUrl": "/assets/hinh/p049-h06.png",
        "img2xUrl": "/assets/hinh-2x/p049-h06.png",
        "width": 222,
        "height": 386
      },
      {
        "assetId": "p049-h07",
        "displayId": "H0167",
        "pdfPage": 49,
        "imgUrl": "/assets/hinh/p049-h07.png",
        "img2xUrl": "/assets/hinh-2x/p049-h07.png",
        "width": 218,
        "height": 387
      },
      {
        "assetId": "p049-h08",
        "displayId": "H0168",
        "pdfPage": 49,
        "imgUrl": "/assets/hinh/p049-h08.png",
        "img2xUrl": "/assets/hinh-2x/p049-h08.png",
        "width": 207,
        "height": 387
      },
      {
        "assetId": "p049-h09",
        "displayId": "H0169",
        "pdfPage": 49,
        "imgUrl": "/assets/hinh/p049-h09.png",
        "img2xUrl": "/assets/hinh-2x/p049-h09.png",
        "width": 131,
        "height": 338
      },
      {
        "assetId": "p049-h10",
        "displayId": "H0170",
        "pdfPage": 49,
        "imgUrl": "/assets/hinh/p049-h10.png",
        "img2xUrl": "/assets/hinh-2x/p049-h10.png",
        "width": 142,
        "height": 339
      },
      {
        "assetId": "p050-h01",
        "displayId": "H0171",
        "pdfPage": 50,
        "imgUrl": "/assets/hinh/p050-h01.png",
        "img2xUrl": "/assets/hinh-2x/p050-h01.png",
        "width": 132,
        "height": 339
      },
      {
        "assetId": "p050-h02",
        "displayId": "H0172",
        "pdfPage": 50,
        "imgUrl": "/assets/hinh/p050-h02.png",
        "img2xUrl": "/assets/hinh-2x/p050-h02.png",
        "width": 172,
        "height": 388
      },
      {
        "assetId": "p050-h03",
        "displayId": "H0173",
        "pdfPage": 50,
        "imgUrl": "/assets/hinh/p050-h03.png",
        "img2xUrl": "/assets/hinh-2x/p050-h03.png",
        "width": 211,
        "height": 387
      },
      {
        "assetId": "p050-h04",
        "displayId": "H0174",
        "pdfPage": 50,
        "imgUrl": "/assets/hinh/p050-h04.png",
        "img2xUrl": "/assets/hinh-2x/p050-h04.png",
        "width": 240,
        "height": 386
      },
      {
        "assetId": "p050-h05",
        "displayId": "H0175",
        "pdfPage": 50,
        "imgUrl": "/assets/hinh/p050-h05.png",
        "img2xUrl": "/assets/hinh-2x/p050-h05.png",
        "width": 241,
        "height": 383
      },
      {
        "assetId": "p050-h06",
        "displayId": "H0176",
        "pdfPage": 50,
        "imgUrl": "/assets/hinh/p050-h06.png",
        "img2xUrl": "/assets/hinh-2x/p050-h06.png",
        "width": 272,
        "height": 383
      },
      {
        "assetId": "p050-h07",
        "displayId": "H0177",
        "pdfPage": 50,
        "imgUrl": "/assets/hinh/p050-h07.png",
        "img2xUrl": "/assets/hinh-2x/p050-h07.png",
        "width": 131,
        "height": 338
      },
      {
        "assetId": "p050-h08",
        "displayId": "H0178",
        "pdfPage": 50,
        "imgUrl": "/assets/hinh/p050-h08.png",
        "img2xUrl": "/assets/hinh-2x/p050-h08.png",
        "width": 136,
        "height": 343
      },
      {
        "assetId": "p051-h01",
        "displayId": "H0179",
        "pdfPage": 51,
        "imgUrl": "/assets/hinh/p051-h01.png",
        "img2xUrl": "/assets/hinh-2x/p051-h01.png",
        "width": 150,
        "height": 342
      },
      {
        "assetId": "p051-h02",
        "displayId": "H0180",
        "pdfPage": 51,
        "imgUrl": "/assets/hinh/p051-h02.png",
        "img2xUrl": "/assets/hinh-2x/p051-h02.png",
        "width": 150,
        "height": 337
      },
      {
        "assetId": "p051-h03",
        "displayId": "H0181",
        "pdfPage": 51,
        "imgUrl": "/assets/hinh/p051-h03.png",
        "img2xUrl": "/assets/hinh-2x/p051-h03.png",
        "width": 221,
        "height": 380
      },
      {
        "assetId": "p051-h04",
        "displayId": "H0182",
        "pdfPage": 51,
        "imgUrl": "/assets/hinh/p051-h04.png",
        "img2xUrl": "/assets/hinh-2x/p051-h04.png",
        "width": 149,
        "height": 342
      },
      {
        "assetId": "p051-h05",
        "displayId": "H0183",
        "pdfPage": 51,
        "imgUrl": "/assets/hinh/p051-h05.png",
        "img2xUrl": "/assets/hinh-2x/p051-h05.png",
        "width": 275,
        "height": 384
      },
      {
        "assetId": "p051-h06",
        "displayId": "H0184",
        "pdfPage": 51,
        "imgUrl": "/assets/hinh/p051-h06.png",
        "img2xUrl": "/assets/hinh-2x/p051-h06.png",
        "width": 230,
        "height": 384
      },
      {
        "assetId": "p051-h07",
        "displayId": "H0185",
        "pdfPage": 51,
        "imgUrl": "/assets/hinh/p051-h07.png",
        "img2xUrl": "/assets/hinh-2x/p051-h07.png",
        "width": 212,
        "height": 383
      },
      {
        "assetId": "p051-h08",
        "displayId": "H0186",
        "pdfPage": 51,
        "imgUrl": "/assets/hinh/p051-h08.png",
        "img2xUrl": "/assets/hinh-2x/p051-h08.png",
        "width": 222,
        "height": 385
      },
      {
        "assetId": "p052-h01",
        "displayId": "H0187",
        "pdfPage": 52,
        "imgUrl": "/assets/hinh/p052-h01.png",
        "img2xUrl": "/assets/hinh-2x/p052-h01.png",
        "width": 234,
        "height": 387
      },
      {
        "assetId": "p052-h02",
        "displayId": "H0188",
        "pdfPage": 52,
        "imgUrl": "/assets/hinh/p052-h02.png",
        "img2xUrl": "/assets/hinh-2x/p052-h02.png",
        "width": 132,
        "height": 340
      },
      {
        "assetId": "p052-h03",
        "displayId": "H0189",
        "pdfPage": 52,
        "imgUrl": "/assets/hinh/p052-h03.png",
        "img2xUrl": "/assets/hinh-2x/p052-h03.png",
        "width": 116,
        "height": 340
      },
      {
        "assetId": "p052-h04",
        "displayId": "H0190",
        "pdfPage": 52,
        "imgUrl": "/assets/hinh/p052-h04.png",
        "img2xUrl": "/assets/hinh-2x/p052-h04.png",
        "width": 116,
        "height": 340
      },
      {
        "assetId": "p052-h05",
        "displayId": "H0191",
        "pdfPage": 52,
        "imgUrl": "/assets/hinh/p052-h05.png",
        "img2xUrl": "/assets/hinh-2x/p052-h05.png",
        "width": 112,
        "height": 340
      },
      {
        "assetId": "p052-h06",
        "displayId": "H0192",
        "pdfPage": 52,
        "imgUrl": "/assets/hinh/p052-h06.png",
        "img2xUrl": "/assets/hinh-2x/p052-h06.png",
        "width": 111,
        "height": 341
      },
      {
        "assetId": "p052-h07",
        "displayId": "H0193",
        "pdfPage": 52,
        "imgUrl": "/assets/hinh/p052-h07.png",
        "img2xUrl": "/assets/hinh-2x/p052-h07.png",
        "width": 245,
        "height": 386
      },
      {
        "assetId": "p052-h08",
        "displayId": "H0194",
        "pdfPage": 52,
        "imgUrl": "/assets/hinh/p052-h08.png",
        "img2xUrl": "/assets/hinh-2x/p052-h08.png",
        "width": 252,
        "height": 401
      },
      {
        "assetId": "p053-h01",
        "displayId": "H0195",
        "pdfPage": 53,
        "imgUrl": "/assets/hinh/p053-h01.png",
        "img2xUrl": "/assets/hinh-2x/p053-h01.png",
        "width": 249,
        "height": 394
      },
      {
        "assetId": "p053-h02",
        "displayId": "H0196",
        "pdfPage": 53,
        "imgUrl": "/assets/hinh/p053-h02.png",
        "img2xUrl": "/assets/hinh-2x/p053-h02.png",
        "width": 232,
        "height": 384
      },
      {
        "assetId": "p053-h03",
        "displayId": "H0197",
        "pdfPage": 53,
        "imgUrl": "/assets/hinh/p053-h03.png",
        "img2xUrl": "/assets/hinh-2x/p053-h03.png",
        "width": 183,
        "height": 225
      },
      {
        "assetId": "p053-h04",
        "displayId": "H0198",
        "pdfPage": 53,
        "imgUrl": "/assets/hinh/p053-h04.png",
        "img2xUrl": "/assets/hinh-2x/p053-h04.png",
        "width": 242,
        "height": 385
      },
      {
        "assetId": "p053-h05",
        "displayId": "H0199",
        "pdfPage": 53,
        "imgUrl": "/assets/hinh/p053-h05.png",
        "img2xUrl": "/assets/hinh-2x/p053-h05.png",
        "width": 130,
        "height": 341
      },
      {
        "assetId": "p053-h06",
        "displayId": "H0200",
        "pdfPage": 53,
        "imgUrl": "/assets/hinh/p053-h06.png",
        "img2xUrl": "/assets/hinh-2x/p053-h06.png",
        "width": 126,
        "height": 338
      },
      {
        "assetId": "p053-h07",
        "displayId": "H0201",
        "pdfPage": 53,
        "imgUrl": "/assets/hinh/p053-h07.png",
        "img2xUrl": "/assets/hinh-2x/p053-h07.png",
        "width": 128,
        "height": 342
      },
      {
        "assetId": "p053-h08",
        "displayId": "H0202",
        "pdfPage": 53,
        "imgUrl": "/assets/hinh/p053-h08.png",
        "img2xUrl": "/assets/hinh-2x/p053-h08.png",
        "width": 142,
        "height": 343
      }
    ],
    "motions": [
      {
        "id": "bai-10-m-1",
        "stepNo": "1",
        "assetId": "p049-h01",
        "displayId": "H0161",
        "pdfPage": 49,
        "imgUrl": "/assets/hinh/p049-h01.png",
        "img2xUrl": "/assets/hinh-2x/p049-h01.png",
        "width": 134,
        "height": 341,
        "desc": "CHIÊU 1: Đánh hai tay hướng lên trên, vẫn bắt chéo."
      },
      {
        "id": "bai-10-m-2",
        "stepNo": "2",
        "assetId": "p049-h02",
        "displayId": "H0162",
        "pdfPage": 49,
        "imgUrl": "/assets/hinh/p049-h02.png",
        "img2xUrl": "/assets/hinh-2x/p049-h02.png",
        "width": 146,
        "height": 339,
        "desc": "CHIÊU 1: Từ Kiềm dương tấn, bắt chéo hai tay hạ xuống ! đan điền, cổ tay trái dưới cổ tay phải."
      },
      {
        "id": "bai-10-m-3",
        "stepNo": "3",
        "assetId": "p049-h03",
        "displayId": "H0163",
        "pdfPage": 49,
        "imgUrl": "/assets/hinh/p049-h03.png",
        "img2xUrl": "/assets/hinh-2x/p049-h03.png",
        "width": 141,
        "height": 339,
        "desc": "CHIÊU 1: Thu giật mạnh hai cùi chỏ về sau."
      },
      {
        "id": "bai-10-m-4",
        "stepNo": "4",
        "assetId": "p049-h04",
        "displayId": "H0164",
        "pdfPage": 49,
        "imgUrl": "/assets/hinh/p049-h04.png",
        "img2xUrl": "/assets/hinh-2x/p049-h04.png",
        "width": 213,
        "height": 385,
        "desc": "CHIÊU 12: Tiến chân phải về. hía trước một bước, đồng vời hai tay xà xia ra trước."
      },
      {
        "id": "bai-10-m-5",
        "stepNo": "5",
        "assetId": "p049-h05",
        "displayId": "H0165",
        "pdfPage": 49,
        "imgUrl": "/assets/hinh/p049-h05.png",
        "img2xUrl": "/assets/hinh-2x/p049-h05.png",
        "width": 252,
        "height": 385,
        "desc": "CHIÊU 12: Sau đó tiến chân trái, la 2 tay xà bên trái. Tiếp 1c tiến chân phải, xỉa 2 'y xà bên phải 1 lân nữa."
      },
      {
        "id": "bai-10-m-6",
        "stepNo": "6",
        "assetId": "p049-h06",
        "displayId": "H0166",
        "pdfPage": 49,
        "imgUrl": "/assets/hinh/p049-h06.png",
        "img2xUrl": "/assets/hinh-2x/p049-h06.png",
        "width": 222,
        "height": 386,
        "desc": "CHIÊU 2: Lắc bàn tay phải lên xuống 3 lần, cổ tay bất động."
      },
      {
        "id": "bai-10-m-7",
        "stepNo": "7",
        "assetId": "p049-h07",
        "displayId": "H0167",
        "pdfPage": 49,
        "imgUrl": "/assets/hinh/p049-h07.png",
        "img2xUrl": "/assets/hinh-2x/p049-h07.png",
        "width": 218,
        "height": 387,
        "desc": "CHIÊU 2: Sau đó lật sấp bàn tay, lắc bàn tay sang trái - phải 3 lần, cổ tay bất động."
      },
      {
        "id": "bai-10-m-8",
        "stepNo": "8",
        "assetId": "p049-h08",
        "displayId": "H0168",
        "pdfPage": 49,
        "imgUrl": "/assets/hinh/p049-h08.png",
        "img2xUrl": "/assets/hinh-2x/p049-h08.png",
        "width": 207,
        "height": 387,
        "desc": "CHIÊU 2: Cuốn cổ tay phải, quay vòng tròn theo chiều kim đồng hồ, thu tay về."
      },
      {
        "id": "bai-10-m-9",
        "stepNo": "9",
        "assetId": "p049-h09",
        "displayId": "H0169",
        "pdfPage": 49,
        "imgUrl": "/assets/hinh/p049-h09.png",
        "img2xUrl": "/assets/hinh-2x/p049-h09.png",
        "width": 131,
        "height": 338,
        "desc": "CHIÊU 5: Trụ chân trái, nhấc chân phải khoa 1 vòng tròn từ trong ra ngoài, sau đó trụ chân phải. Khoa chân trái tương tự và trụ. Làm lại 1 lần với chân phải."
      },
      {
        "id": "bai-10-m-10",
        "stepNo": "10",
        "assetId": "p049-h10",
        "displayId": "H0170",
        "pdfPage": 49,
        "imgUrl": "/assets/hinh/p049-h10.png",
        "img2xUrl": "/assets/hinh-2x/p049-h10.png",
        "width": 142,
        "height": 339,
        "desc": "CHIÊU 5: Trụ chân trái, nhấc chân phải khoa 1 vòng tròn từ trong ra ngoài, sau đó trụ chân phải. Khoa chân trái tương tự và trụ. Làm lại 1 lần với chân phải."
      },
      {
        "id": "bai-10-m-11",
        "stepNo": "11",
        "assetId": "p050-h01",
        "displayId": "H0171",
        "pdfPage": 50,
        "imgUrl": "/assets/hinh/p050-h01.png",
        "img2xUrl": "/assets/hinh-2x/p050-h01.png",
        "width": 132,
        "height": 339,
        "desc": "CHIÊU 5: Làm tương tự sang trái với tay phải. Làm một lần nữa động tác trên với tay trái."
      },
      {
        "id": "bai-10-m-12",
        "stepNo": "12",
        "assetId": "p050-h02",
        "displayId": "H0172",
        "pdfPage": 50,
        "imgUrl": "/assets/hinh/p050-h02.png",
        "img2xUrl": "/assets/hinh-2x/p050-h02.png",
        "width": 172,
        "height": 388,
        "desc": "CHIÊU 5: Tay phải úp xấp xỉa bàn tay về phía trước, bước chân trái lên để thành Kiềm dương tấn."
      },
      {
        "id": "bai-10-m-13",
        "stepNo": "13",
        "assetId": "p050-h03",
        "displayId": "H0173",
        "pdfPage": 50,
        "imgUrl": "/assets/hinh/p050-h03.png",
        "img2xUrl": "/assets/hinh-2x/p050-h03.png",
        "width": 211,
        "height": 387,
        "desc": "CHIÊU 5: Giữ nguyên tay phải, tay trái xấp,xỉa về phía trước: 2 tay song song nhau. Cuộn 2 cổ tay, thu về nách. Quay về hướng Kiềm dương khởi đầu."
      },
      {
        "id": "bai-10-m-14",
        "stepNo": "14",
        "assetId": "p050-h04",
        "displayId": "H0174",
        "pdfPage": 50,
        "imgUrl": "/assets/hinh/p050-h04.png",
        "img2xUrl": "/assets/hinh-2x/p050-h04.png",
        "width": 240,
        "height": 386,
        "desc": "CHIÊU 6: Khoa tròn chân phải một lần bên phải, chân trái một lần bên trái, (đứng như hình 4.1)."
      },
      {
        "id": "bai-10-m-15",
        "stepNo": "15",
        "assetId": "p050-h05",
        "displayId": "H0175",
        "pdfPage": 50,
        "imgUrl": "/assets/hinh/p050-h05.png",
        "img2xUrl": "/assets/hinh-2x/p050-h05.png",
        "width": 241,
        "height": 383,
        "desc": "CHIÊU 6: Quay người tiến chân trái lên, tay trái đánh ¡ chưởng, tay phải về thủ. |"
      },
      {
        "id": "bai-10-m-16",
        "stepNo": "16",
        "assetId": "p050-h06",
        "displayId": "H0176",
        "pdfPage": 50,
        "imgUrl": "/assets/hinh/p050-h06.png",
        "img2xUrl": "/assets/hinh-2x/p050-h06.png",
        "width": 272,
        "height": 383,
        "desc": "CHIÊU 6: Quay người sang trái, ! tay trái chém phạt ngang | - bàn tay xấp. Tay phải đi | theo sang ngang. Chân về."
      },
      {
        "id": "bai-10-m-17",
        "stepNo": "17",
        "assetId": "p050-h07",
        "displayId": "H0177",
        "pdfPage": 50,
        "imgUrl": "/assets/hinh/p050-h07.png",
        "img2xUrl": "/assets/hinh-2x/p050-h07.png",
        "width": 131,
        "height": 338,
        "desc": "CHIÊU 6: Quay người tiến chân trái lên, tay trái đánh ¡ chưởng, tay phải về thủ. |"
      },
      {
        "id": "bai-10-m-18",
        "stepNo": "18",
        "assetId": "p050-h08",
        "displayId": "H0178",
        "pdfPage": 50,
        "imgUrl": "/assets/hinh/p050-h08.png",
        "img2xUrl": "/assets/hinh-2x/p050-h08.png",
        "width": 136,
        "height": 343,
        "desc": "CHIÊU 6: Quay người sang trái, ! tay trái chém phạt ngang | - bàn tay xấp. Tay phải đi | theo sang ngang. Chân về."
      },
      {
        "id": "bai-10-m-19",
        "stepNo": "19",
        "assetId": "p051-h01",
        "displayId": "H0179",
        "pdfPage": 51,
        "imgUrl": "/assets/hinh/p051-h01.png",
        "img2xUrl": "/assets/hinh-2x/p051-h01.png",
        "width": 150,
        "height": 342,
        "desc": "CHIÊU 6: Quay đầu nhìn chính diện. Chân trái bước lên nai bản tay dựng song Ong."
      },
      {
        "id": "bai-10-m-20",
        "stepNo": "20",
        "assetId": "p051-h02",
        "displayId": "H0180",
        "pdfPage": 51,
        "imgUrl": "/assets/hinh/p051-h02.png",
        "img2xUrl": "/assets/hinh-2x/p051-h02.png",
        "width": 150,
        "height": 337,
        "desc": "CHIÊU 8: Khoa chân tròn một lần sang phải, một lần bên | trái . Sau đó quay người sang phải chân trái bước lên 1 bước, đỡ bàng thủ tay trái."
      },
      {
        "id": "bai-10-m-21",
        "stepNo": "21",
        "assetId": "p051-h03",
        "displayId": "H0181",
        "pdfPage": 51,
        "imgUrl": "/assets/hinh/p051-h03.png",
        "img2xUrl": "/assets/hinh-2x/p051-h03.png",
        "width": 221,
        "height": 380,
        "desc": "CHIÊU 8: Quay người, lùi chân trái, đánh chưởng tay phải xuống, tay trái đỡ."
      },
      {
        "id": "bai-10-m-22",
        "stepNo": "22",
        "assetId": "p051-h04",
        "displayId": "H0182",
        "pdfPage": 51,
        "imgUrl": "/assets/hinh/p051-h04.png",
        "img2xUrl": "/assets/hinh-2x/p051-h04.png",
        "width": 149,
        "height": 342,
        "desc": "CHIÊU 8: Tiền chân trái lên, đánh chưởng tay trái xiên xuống dưới."
      },
      {
        "id": "bai-10-m-23",
        "stepNo": "23",
        "assetId": "p051-h05",
        "displayId": "H0183",
        "pdfPage": 51,
        "imgUrl": "/assets/hinh/p051-h05.png",
        "img2xUrl": "/assets/hinh-2x/p051-h05.png",
        "width": 275,
        "height": 384,
        "desc": "CHIÊU 8: Quay người, lùi chân trái, đánh chưởng tay phải xuống, tay trái đỡ."
      },
      {
        "id": "bai-10-m-24",
        "stepNo": "24",
        "assetId": "p051-h06",
        "displayId": "H0184",
        "pdfPage": 51,
        "imgUrl": "/assets/hinh/p051-h06.png",
        "img2xUrl": "/assets/hinh-2x/p051-h06.png",
        "width": 230,
        "height": 384,
        "desc": "CHIÊU 8: Tiền chân trái lên, đánh chưởng tay trái xiên xuống dưới."
      },
      {
        "id": "bai-10-m-25",
        "stepNo": "25",
        "assetId": "p051-h07",
        "displayId": "H0185",
        "pdfPage": 51,
        "imgUrl": "/assets/hinh/p051-h07.png",
        "img2xUrl": "/assets/hinh-2x/p051-h07.png",
        "width": 212,
        "height": 383,
        "desc": "CHIÊU 8: Quay ngang tay trái chém ngược lên (cạnh bàn tay hướng lên trên)."
      },
      {
        "id": "bai-10-m-26",
        "stepNo": "26",
        "assetId": "p051-h08",
        "displayId": "H0186",
        "pdfPage": 51,
        "imgUrl": "/assets/hinh/p051-h08.png",
        "img2xUrl": "/assets/hinh-2x/p051-h08.png",
        "width": 222,
        "height": 385,
        "desc": "CHIÊU 8: Quay về chính diện. Thủ hai bàn tay dựng (như hình 6.6)."
      },
      {
        "id": "bai-10-m-27",
        "stepNo": "27",
        "assetId": "p052-h01",
        "displayId": "H0187",
        "pdfPage": 52,
        "imgUrl": "/assets/hinh/p052-h01.png",
        "img2xUrl": "/assets/hinh-2x/p052-h01.png",
        "width": 234,
        "height": 387,
        "desc": "CHIÊU 8: Thu tay - rút -chém. Về tấn kiềm dương."
      },
      {
        "id": "bai-10-m-28",
        "stepNo": "28",
        "assetId": "p052-h02",
        "displayId": "H0188",
        "pdfPage": 52,
        "imgUrl": "/assets/hinh/p052-h02.png",
        "img2xUrl": "/assets/hinh-2x/p052-h02.png",
        "width": 132,
        "height": 340,
        "desc": "CHIÊU 10: Chém ngược 2 bàn tay về bên phải , tiếp theo chém tương tự về bên trái và lại chém về bên phải (như hình 8,4)."
      },
      {
        "id": "bai-10-m-29",
        "stepNo": "29",
        "assetId": "p052-h03",
        "displayId": "H0189",
        "pdfPage": 52,
        "imgUrl": "/assets/hinh/p052-h03.png",
        "img2xUrl": "/assets/hinh-2x/p052-h03.png",
        "width": 116,
        "height": 340,
        "desc": "CHIÊU 14: Bước võng chân phải tiến 1 bước, lật cổ tay chém từ phải sang trái, tay trái đi theo gạt đỡ."
      },
      {
        "id": "bai-10-m-30",
        "stepNo": "30",
        "assetId": "p052-h04",
        "displayId": "H0190",
        "pdfPage": 52,
        "imgUrl": "/assets/hinh/p052-h04.png",
        "img2xUrl": "/assets/hinh-2x/p052-h04.png",
        "width": 116,
        "height": 340,
        "desc": "CHIÊU 14: Lùi vòng chân phải 1 bước, đánh cạnh cườm tay trải từ trái sang phải (bàn tay xấp), tay phải xấp đỡ bằng cạnh trong bàn tay."
      },
      {
        "id": "bai-10-m-31",
        "stepNo": "31",
        "assetId": "p052-h05",
        "displayId": "H0191",
        "pdfPage": 52,
        "imgUrl": "/assets/hinh/p052-h05.png",
        "img2xUrl": "/assets/hinh-2x/p052-h05.png",
        "width": 112,
        "height": 340,
        "desc": "CHIÊU 14: Tương tự với lùi tiếp chân trái- đánh tay phải, và một lần nữa với lùi tiếp chân phải -đánh tay trái."
      },
      {
        "id": "bai-10-m-32",
        "stepNo": "32",
        "assetId": "p052-h06",
        "displayId": "H0192",
        "pdfPage": 52,
        "imgUrl": "/assets/hinh/p052-h06.png",
        "img2xUrl": "/assets/hinh-2x/p052-h06.png",
        "width": 111,
        "height": 341,
        "desc": "CHIÊU 14: Thực hiện động tác hoành thoái, cùng lúc đó tay phải vô long trảo về _ trước , tay long trái vô về phía sau."
      },
      {
        "id": "bai-10-m-33",
        "stepNo": "33",
        "assetId": "p052-h07",
        "displayId": "H0193",
        "pdfPage": 52,
        "imgUrl": "/assets/hinh/p052-h07.png",
        "img2xUrl": "/assets/hinh-2x/p052-h07.png",
        "width": 245,
        "height": 386,
        "desc": "CHIÊU 14: Quay về chính diện. Bước chân trái lên. Thủ hai bàn tay dựng, song song nhau, đánh cườm tay xuống. Thu - rút -chém. Về kiềm dương tấn."
      },
      {
        "id": "bai-10-m-34",
        "stepNo": "34",
        "assetId": "p052-h08",
        "displayId": "H0194",
        "pdfPage": 52,
        "imgUrl": "/assets/hinh/p052-h08.png",
        "img2xUrl": "/assets/hinh-2x/p052-h08.png",
        "width": 252,
        "height": 401,
        "desc": "CHIÊU 16: Chân mở rộng hơn một chút. Duỗi thẳng 2 cánh tay, Quay tròn về rước mặt 3 lần."
      },
      {
        "id": "bai-10-m-35",
        "stepNo": "35",
        "assetId": "p053-h01",
        "displayId": "H0195",
        "pdfPage": 53,
        "imgUrl": "/assets/hinh/p053-h01.png",
        "img2xUrl": "/assets/hinh-2x/p053-h01.png",
        "width": 249,
        "height": 394,
        "desc": "CHIÊU 14: Đấm thẳng 2 tay về phía trước."
      },
      {
        "id": "bai-10-m-36",
        "stepNo": "36",
        "assetId": "p053-h02",
        "displayId": "H0196",
        "pdfPage": 53,
        "imgUrl": "/assets/hinh/p053-h02.png",
        "img2xUrl": "/assets/hinh-2x/p053-h02.png",
        "width": 232,
        "height": 384,
        "desc": "CHIÊU 14: Bước võng chân phải tiến 1 bước, lật cổ tay chém từ phải sang trái, tay trái đi theo gạt đỡ."
      },
      {
        "id": "bai-10-m-37",
        "stepNo": "37",
        "assetId": "p053-h03",
        "displayId": "H0197",
        "pdfPage": 53,
        "imgUrl": "/assets/hinh/p053-h03.png",
        "img2xUrl": "/assets/hinh-2x/p053-h03.png",
        "width": 183,
        "height": 225,
        "desc": "CHIÊU 16: Cúi gập người ấn 2 lòng bàn tay xuống."
      },
      {
        "id": "bai-10-m-38",
        "stepNo": "38",
        "assetId": "p053-h04",
        "displayId": "H0198",
        "pdfPage": 53,
        "imgUrl": "/assets/hinh/p053-h04.png",
        "img2xUrl": "/assets/hinh-2x/p053-h04.png",
        "width": 242,
        "height": 385,
        "desc": "CHIÊU 16: Sau đó, quay người, đấm bên trái 2 tay (tay trái trước)."
      },
      {
        "id": "bai-10-m-39",
        "stepNo": "39",
        "assetId": "p053-h05",
        "displayId": "H0199",
        "pdfPage": 53,
        "imgUrl": "/assets/hinh/p053-h05.png",
        "img2xUrl": "/assets/hinh-2x/p053-h05.png",
        "width": 130,
        "height": 341,
        "desc": "CHIÊU 19: Tiến chân phải đánh ra trước với hai nắm tay chồng lên nhau, nắm tay phải trên."
      },
      {
        "id": "bai-10-m-40",
        "stepNo": "40",
        "assetId": "p053-h06",
        "displayId": "H0200",
        "pdfPage": 53,
        "imgUrl": "/assets/hinh/p053-h06.png",
        "img2xUrl": "/assets/hinh-2x/p053-h06.png",
        "width": 126,
        "height": 338,
        "desc": "CHIÊU 19: Tiến chân trái đấm tiếp 2 tay, tay. trái trên. 1 Sauđó,Làmlạilầnnữa với q bên phải (như hình 19.2). Đ"
      },
      {
        "id": "bai-10-m-41",
        "stepNo": "41",
        "assetId": "p053-h07",
        "displayId": "H0201",
        "pdfPage": 53,
        "imgUrl": "/assets/hinh/p053-h07.png",
        "img2xUrl": "/assets/hinh-2x/p053-h07.png",
        "width": 128,
        "height": 342,
        "desc": "CHIÊU 14: Quay về chính diện. Bước chân trái lên. Thủ hai bàn tay dựng, song song nhau, đánh cườm tay xuống. Thu - rút -chém. Về kiềm dương tấn."
      },
      {
        "id": "bai-10-m-42",
        "stepNo": "42",
        "assetId": "p053-h08",
        "displayId": "H0202",
        "pdfPage": 53,
        "imgUrl": "/assets/hinh/p053-h08.png",
        "img2xUrl": "/assets/hinh-2x/p053-h08.png",
        "width": 142,
        "height": 343,
        "desc": "CHIÊU 16: Chân mở rộng hơn một chút. Duỗi thẳng 2 cánh tay, Quay tròn về rước mặt 3 lần."
      }
    ],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-11",
    "title": "Giới thiệu bài 108",
    "groupId": "quyen-tay-khong",
    "bookOrder": 11,
    "contentType": "reading",
    "pdfPages": [
      54
    ],
    "pageRange": "Trang PDF 54 – 54",
    "assetCount": 1,
    "assets": [
      {
        "assetId": "p054-h01",
        "displayId": "H0203",
        "pdfPage": 54,
        "imgUrl": "/assets/hinh/p054-h01.png",
        "img2xUrl": "/assets/hinh-2x/p054-h01.png",
        "width": 583,
        "height": 502
      }
    ],
    "motions": [
    
    ],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-12",
    "title": "Bài 108 tại chỗ — đơn luyện",
    "groupId": "quyen-tay-khong",
    "bookOrder": 12,
    "contentType": "practice_or_mixed",
    "pdfPages": [
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64
    ],
    "pageRange": "Trang PDF 55 – 64",
    "assetCount": 75,
    "assets": [
      {
        "assetId": "p055-h01",
        "displayId": "H0204",
        "pdfPage": 55,
        "imgUrl": "/assets/hinh/p055-h01.png",
        "img2xUrl": "/assets/hinh-2x/p055-h01.png",
        "width": 155,
        "height": 338
      },
      {
        "assetId": "p055-h02",
        "displayId": "H0205",
        "pdfPage": 55,
        "imgUrl": "/assets/hinh/p055-h02.png",
        "img2xUrl": "/assets/hinh-2x/p055-h02.png",
        "width": 147,
        "height": 339
      },
      {
        "assetId": "p055-h03",
        "displayId": "H0206",
        "pdfPage": 55,
        "imgUrl": "/assets/hinh/p055-h03.png",
        "img2xUrl": "/assets/hinh-2x/p055-h03.png",
        "width": 159,
        "height": 338
      },
      {
        "assetId": "p055-h04",
        "displayId": "H0207",
        "pdfPage": 55,
        "imgUrl": "/assets/hinh/p055-h04.png",
        "img2xUrl": "/assets/hinh-2x/p055-h04.png",
        "width": 129,
        "height": 337
      },
      {
        "assetId": "p055-h05",
        "displayId": "H0208",
        "pdfPage": 55,
        "imgUrl": "/assets/hinh/p055-h05.png",
        "img2xUrl": "/assets/hinh-2x/p055-h05.png",
        "width": 128,
        "height": 339
      },
      {
        "assetId": "p055-h06",
        "displayId": "H0209",
        "pdfPage": 55,
        "imgUrl": "/assets/hinh/p055-h06.png",
        "img2xUrl": "/assets/hinh-2x/p055-h06.png",
        "width": 125,
        "height": 338
      },
      {
        "assetId": "p055-h07",
        "displayId": "H0210",
        "pdfPage": 55,
        "imgUrl": "/assets/hinh/p055-h07.png",
        "img2xUrl": "/assets/hinh-2x/p055-h07.png",
        "width": 125,
        "height": 338
      },
      {
        "assetId": "p055-h08",
        "displayId": "H0211",
        "pdfPage": 55,
        "imgUrl": "/assets/hinh/p055-h08.png",
        "img2xUrl": "/assets/hinh-2x/p055-h08.png",
        "width": 155,
        "height": 338
      },
      {
        "assetId": "p055-h09",
        "displayId": "H0212",
        "pdfPage": 55,
        "imgUrl": "/assets/hinh/p055-h09.png",
        "img2xUrl": "/assets/hinh-2x/p055-h09.png",
        "width": 195,
        "height": 382
      },
      {
        "assetId": "p056-h01",
        "displayId": "H0213",
        "pdfPage": 56,
        "imgUrl": "/assets/hinh/p056-h01.png",
        "img2xUrl": "/assets/hinh-2x/p056-h01.png",
        "width": 136,
        "height": 337
      },
      {
        "assetId": "p056-h02",
        "displayId": "H0214",
        "pdfPage": 56,
        "imgUrl": "/assets/hinh/p056-h02.png",
        "img2xUrl": "/assets/hinh-2x/p056-h02.png",
        "width": 125,
        "height": 339
      },
      {
        "assetId": "p056-h03",
        "displayId": "H0215",
        "pdfPage": 56,
        "imgUrl": "/assets/hinh/p056-h03.png",
        "img2xUrl": "/assets/hinh-2x/p056-h03.png",
        "width": 228,
        "height": 384
      },
      {
        "assetId": "p056-h04",
        "displayId": "H0216",
        "pdfPage": 56,
        "imgUrl": "/assets/hinh/p056-h04.png",
        "img2xUrl": "/assets/hinh-2x/p056-h04.png",
        "width": 112,
        "height": 338
      },
      {
        "assetId": "p056-h05",
        "displayId": "H0217",
        "pdfPage": 56,
        "imgUrl": "/assets/hinh/p056-h05.png",
        "img2xUrl": "/assets/hinh-2x/p056-h05.png",
        "width": 213,
        "height": 383
      },
      {
        "assetId": "p056-h06",
        "displayId": "H0218",
        "pdfPage": 56,
        "imgUrl": "/assets/hinh/p056-h06.png",
        "img2xUrl": "/assets/hinh-2x/p056-h06.png",
        "width": 124,
        "height": 337
      },
      {
        "assetId": "p056-h07",
        "displayId": "H0219",
        "pdfPage": 56,
        "imgUrl": "/assets/hinh/p056-h07.png",
        "img2xUrl": "/assets/hinh-2x/p056-h07.png",
        "width": 128,
        "height": 338
      },
      {
        "assetId": "p056-h08",
        "displayId": "H0220",
        "pdfPage": 56,
        "imgUrl": "/assets/hinh/p056-h08.png",
        "img2xUrl": "/assets/hinh-2x/p056-h08.png",
        "width": 140,
        "height": 337
      },
      {
        "assetId": "p057-h01",
        "displayId": "H0221",
        "pdfPage": 57,
        "imgUrl": "/assets/hinh/p057-h01.png",
        "img2xUrl": "/assets/hinh-2x/p057-h01.png",
        "width": 120,
        "height": 337
      },
      {
        "assetId": "p057-h02",
        "displayId": "H0222",
        "pdfPage": 57,
        "imgUrl": "/assets/hinh/p057-h02.png",
        "img2xUrl": "/assets/hinh-2x/p057-h02.png",
        "width": 120,
        "height": 338
      },
      {
        "assetId": "p057-h03",
        "displayId": "H0223",
        "pdfPage": 57,
        "imgUrl": "/assets/hinh/p057-h03.png",
        "img2xUrl": "/assets/hinh-2x/p057-h03.png",
        "width": 116,
        "height": 340
      },
      {
        "assetId": "p057-h04",
        "displayId": "H0224",
        "pdfPage": 57,
        "imgUrl": "/assets/hinh/p057-h04.png",
        "img2xUrl": "/assets/hinh-2x/p057-h04.png",
        "width": 172,
        "height": 333
      },
      {
        "assetId": "p057-h05",
        "displayId": "H0225",
        "pdfPage": 57,
        "imgUrl": "/assets/hinh/p057-h05.png",
        "img2xUrl": "/assets/hinh-2x/p057-h05.png",
        "width": 120,
        "height": 336
      },
      {
        "assetId": "p057-h06",
        "displayId": "H0226",
        "pdfPage": 57,
        "imgUrl": "/assets/hinh/p057-h06.png",
        "img2xUrl": "/assets/hinh-2x/p057-h06.png",
        "width": 146,
        "height": 337
      },
      {
        "assetId": "p057-h07",
        "displayId": "H0227",
        "pdfPage": 57,
        "imgUrl": "/assets/hinh/p057-h07.png",
        "img2xUrl": "/assets/hinh-2x/p057-h07.png",
        "width": 122,
        "height": 337
      },
      {
        "assetId": "p058-h01",
        "displayId": "H0228",
        "pdfPage": 58,
        "imgUrl": "/assets/hinh/p058-h01.png",
        "img2xUrl": "/assets/hinh-2x/p058-h01.png",
        "width": 141,
        "height": 340
      },
      {
        "assetId": "p058-h02",
        "displayId": "H0229",
        "pdfPage": 58,
        "imgUrl": "/assets/hinh/p058-h02.png",
        "img2xUrl": "/assets/hinh-2x/p058-h02.png",
        "width": 122,
        "height": 338
      },
      {
        "assetId": "p058-h03",
        "displayId": "H0230",
        "pdfPage": 58,
        "imgUrl": "/assets/hinh/p058-h03.png",
        "img2xUrl": "/assets/hinh-2x/p058-h03.png",
        "width": 124,
        "height": 338
      },
      {
        "assetId": "p058-h04",
        "displayId": "H0231",
        "pdfPage": 58,
        "imgUrl": "/assets/hinh/p058-h04.png",
        "img2xUrl": "/assets/hinh-2x/p058-h04.png",
        "width": 118,
        "height": 337
      },
      {
        "assetId": "p058-h05",
        "displayId": "H0232",
        "pdfPage": 58,
        "imgUrl": "/assets/hinh/p058-h05.png",
        "img2xUrl": "/assets/hinh-2x/p058-h05.png",
        "width": 116,
        "height": 338
      },
      {
        "assetId": "p058-h06",
        "displayId": "H0233",
        "pdfPage": 58,
        "imgUrl": "/assets/hinh/p058-h06.png",
        "img2xUrl": "/assets/hinh-2x/p058-h06.png",
        "width": 122,
        "height": 339
      },
      {
        "assetId": "p058-h07",
        "displayId": "H0234",
        "pdfPage": 58,
        "imgUrl": "/assets/hinh/p058-h07.png",
        "img2xUrl": "/assets/hinh-2x/p058-h07.png",
        "width": 123,
        "height": 340
      },
      {
        "assetId": "p058-h08",
        "displayId": "H0235",
        "pdfPage": 58,
        "imgUrl": "/assets/hinh/p058-h08.png",
        "img2xUrl": "/assets/hinh-2x/p058-h08.png",
        "width": 134,
        "height": 340
      },
      {
        "assetId": "p059-h01",
        "displayId": "H0236",
        "pdfPage": 59,
        "imgUrl": "/assets/hinh/p059-h01.png",
        "img2xUrl": "/assets/hinh-2x/p059-h01.png",
        "width": 129,
        "height": 339
      },
      {
        "assetId": "p059-h02",
        "displayId": "H0237",
        "pdfPage": 59,
        "imgUrl": "/assets/hinh/p059-h02.png",
        "img2xUrl": "/assets/hinh-2x/p059-h02.png",
        "width": 118,
        "height": 337
      },
      {
        "assetId": "p059-h03",
        "displayId": "H0238",
        "pdfPage": 59,
        "imgUrl": "/assets/hinh/p059-h03.png",
        "img2xUrl": "/assets/hinh-2x/p059-h03.png",
        "width": 209,
        "height": 382
      },
      {
        "assetId": "p059-h04",
        "displayId": "H0239",
        "pdfPage": 59,
        "imgUrl": "/assets/hinh/p059-h04.png",
        "img2xUrl": "/assets/hinh-2x/p059-h04.png",
        "width": 178,
        "height": 380
      },
      {
        "assetId": "p059-h05",
        "displayId": "H0240",
        "pdfPage": 59,
        "imgUrl": "/assets/hinh/p059-h05.png",
        "img2xUrl": "/assets/hinh-2x/p059-h05.png",
        "width": 129,
        "height": 339
      },
      {
        "assetId": "p059-h06",
        "displayId": "H0241",
        "pdfPage": 59,
        "imgUrl": "/assets/hinh/p059-h06.png",
        "img2xUrl": "/assets/hinh-2x/p059-h06.png",
        "width": 137,
        "height": 338
      },
      {
        "assetId": "p059-h07",
        "displayId": "H0242",
        "pdfPage": 59,
        "imgUrl": "/assets/hinh/p059-h07.png",
        "img2xUrl": "/assets/hinh-2x/p059-h07.png",
        "width": 121,
        "height": 336
      },
      {
        "assetId": "p059-h08",
        "displayId": "H0243",
        "pdfPage": 59,
        "imgUrl": "/assets/hinh/p059-h08.png",
        "img2xUrl": "/assets/hinh-2x/p059-h08.png",
        "width": 120,
        "height": 337
      },
      {
        "assetId": "p060-h01",
        "displayId": "H0244",
        "pdfPage": 60,
        "imgUrl": "/assets/hinh/p060-h01.png",
        "img2xUrl": "/assets/hinh-2x/p060-h01.png",
        "width": 129,
        "height": 336
      },
      {
        "assetId": "p060-h02",
        "displayId": "H0245",
        "pdfPage": 60,
        "imgUrl": "/assets/hinh/p060-h02.png",
        "img2xUrl": "/assets/hinh-2x/p060-h02.png",
        "width": 131,
        "height": 339
      },
      {
        "assetId": "p060-h03",
        "displayId": "H0246",
        "pdfPage": 60,
        "imgUrl": "/assets/hinh/p060-h03.png",
        "img2xUrl": "/assets/hinh-2x/p060-h03.png",
        "width": 125,
        "height": 338
      },
      {
        "assetId": "p060-h04",
        "displayId": "H0247",
        "pdfPage": 60,
        "imgUrl": "/assets/hinh/p060-h04.png",
        "img2xUrl": "/assets/hinh-2x/p060-h04.png",
        "width": 123,
        "height": 336
      },
      {
        "assetId": "p060-h05",
        "displayId": "H0248",
        "pdfPage": 60,
        "imgUrl": "/assets/hinh/p060-h05.png",
        "img2xUrl": "/assets/hinh-2x/p060-h05.png",
        "width": 128,
        "height": 337
      },
      {
        "assetId": "p060-h06",
        "displayId": "H0249",
        "pdfPage": 60,
        "imgUrl": "/assets/hinh/p060-h06.png",
        "img2xUrl": "/assets/hinh-2x/p060-h06.png",
        "width": 131,
        "height": 339
      },
      {
        "assetId": "p060-h07",
        "displayId": "H0250",
        "pdfPage": 60,
        "imgUrl": "/assets/hinh/p060-h07.png",
        "img2xUrl": "/assets/hinh-2x/p060-h07.png",
        "width": 125,
        "height": 338
      },
      {
        "assetId": "p060-h08",
        "displayId": "H0251",
        "pdfPage": 60,
        "imgUrl": "/assets/hinh/p060-h08.png",
        "img2xUrl": "/assets/hinh-2x/p060-h08.png",
        "width": 128,
        "height": 336
      },
      {
        "assetId": "p061-h01",
        "displayId": "H0252",
        "pdfPage": 61,
        "imgUrl": "/assets/hinh/p061-h01.png",
        "img2xUrl": "/assets/hinh-2x/p061-h01.png",
        "width": 133,
        "height": 339
      },
      {
        "assetId": "p061-h02",
        "displayId": "H0253",
        "pdfPage": 61,
        "imgUrl": "/assets/hinh/p061-h02.png",
        "img2xUrl": "/assets/hinh-2x/p061-h02.png",
        "width": 120,
        "height": 339
      },
      {
        "assetId": "p061-h03",
        "displayId": "H0254",
        "pdfPage": 61,
        "imgUrl": "/assets/hinh/p061-h03.png",
        "img2xUrl": "/assets/hinh-2x/p061-h03.png",
        "width": 131,
        "height": 340
      },
      {
        "assetId": "p061-h04",
        "displayId": "H0255",
        "pdfPage": 61,
        "imgUrl": "/assets/hinh/p061-h04.png",
        "img2xUrl": "/assets/hinh-2x/p061-h04.png",
        "width": 116,
        "height": 338
      },
      {
        "assetId": "p061-h05",
        "displayId": "H0256",
        "pdfPage": 61,
        "imgUrl": "/assets/hinh/p061-h05.png",
        "img2xUrl": "/assets/hinh-2x/p061-h05.png",
        "width": 125,
        "height": 338
      },
      {
        "assetId": "p061-h06",
        "displayId": "H0257",
        "pdfPage": 61,
        "imgUrl": "/assets/hinh/p061-h06.png",
        "img2xUrl": "/assets/hinh-2x/p061-h06.png",
        "width": 192,
        "height": 382
      },
      {
        "assetId": "p061-h07",
        "displayId": "H0258",
        "pdfPage": 61,
        "imgUrl": "/assets/hinh/p061-h07.png",
        "img2xUrl": "/assets/hinh-2x/p061-h07.png",
        "width": 115,
        "height": 338
      },
      {
        "assetId": "p061-h08",
        "displayId": "H0259",
        "pdfPage": 61,
        "imgUrl": "/assets/hinh/p061-h08.png",
        "img2xUrl": "/assets/hinh-2x/p061-h08.png",
        "width": 118,
        "height": 336
      },
      {
        "assetId": "p062-h01",
        "displayId": "H0260",
        "pdfPage": 62,
        "imgUrl": "/assets/hinh/p062-h01.png",
        "img2xUrl": "/assets/hinh-2x/p062-h01.png",
        "width": 125,
        "height": 338
      },
      {
        "assetId": "p062-h02",
        "displayId": "H0261",
        "pdfPage": 62,
        "imgUrl": "/assets/hinh/p062-h02.png",
        "img2xUrl": "/assets/hinh-2x/p062-h02.png",
        "width": 172,
        "height": 366
      },
      {
        "assetId": "p062-h03",
        "displayId": "H0262",
        "pdfPage": 62,
        "imgUrl": "/assets/hinh/p062-h03.png",
        "img2xUrl": "/assets/hinh-2x/p062-h03.png",
        "width": 137,
        "height": 322
      },
      {
        "assetId": "p062-h04",
        "displayId": "H0263",
        "pdfPage": 62,
        "imgUrl": "/assets/hinh/p062-h04.png",
        "img2xUrl": "/assets/hinh-2x/p062-h04.png",
        "width": 132,
        "height": 321
      },
      {
        "assetId": "p062-h05",
        "displayId": "H0264",
        "pdfPage": 62,
        "imgUrl": "/assets/hinh/p062-h05.png",
        "img2xUrl": "/assets/hinh-2x/p062-h05.png",
        "width": 129,
        "height": 338
      },
      {
        "assetId": "p062-h06",
        "displayId": "H0265",
        "pdfPage": 62,
        "imgUrl": "/assets/hinh/p062-h06.png",
        "img2xUrl": "/assets/hinh-2x/p062-h06.png",
        "width": 177,
        "height": 384
      },
      {
        "assetId": "p062-h07",
        "displayId": "H0266",
        "pdfPage": 62,
        "imgUrl": "/assets/hinh/p062-h07.png",
        "img2xUrl": "/assets/hinh-2x/p062-h07.png",
        "width": 121,
        "height": 335
      },
      {
        "assetId": "p063-h01",
        "displayId": "H0267",
        "pdfPage": 63,
        "imgUrl": "/assets/hinh/p063-h01.png",
        "img2xUrl": "/assets/hinh-2x/p063-h01.png",
        "width": 139,
        "height": 337
      },
      {
        "assetId": "p063-h02",
        "displayId": "H0268",
        "pdfPage": 63,
        "imgUrl": "/assets/hinh/p063-h02.png",
        "img2xUrl": "/assets/hinh-2x/p063-h02.png",
        "width": 138,
        "height": 326
      },
      {
        "assetId": "p063-h03",
        "displayId": "H0269",
        "pdfPage": 63,
        "imgUrl": "/assets/hinh/p063-h03.png",
        "img2xUrl": "/assets/hinh-2x/p063-h03.png",
        "width": 124,
        "height": 336
      },
      {
        "assetId": "p063-h04",
        "displayId": "H0270",
        "pdfPage": 63,
        "imgUrl": "/assets/hinh/p063-h04.png",
        "img2xUrl": "/assets/hinh-2x/p063-h04.png",
        "width": 126,
        "height": 337
      },
      {
        "assetId": "p063-h05",
        "displayId": "H0271",
        "pdfPage": 63,
        "imgUrl": "/assets/hinh/p063-h05.png",
        "img2xUrl": "/assets/hinh-2x/p063-h05.png",
        "width": 176,
        "height": 334
      },
      {
        "assetId": "p063-h06",
        "displayId": "H0272",
        "pdfPage": 63,
        "imgUrl": "/assets/hinh/p063-h06.png",
        "img2xUrl": "/assets/hinh-2x/p063-h06.png",
        "width": 195,
        "height": 320
      },
      {
        "assetId": "p063-h07",
        "displayId": "H0273",
        "pdfPage": 63,
        "imgUrl": "/assets/hinh/p063-h07.png",
        "img2xUrl": "/assets/hinh-2x/p063-h07.png",
        "width": 122,
        "height": 337
      },
      {
        "assetId": "p063-h08",
        "displayId": "H0274",
        "pdfPage": 63,
        "imgUrl": "/assets/hinh/p063-h08.png",
        "img2xUrl": "/assets/hinh-2x/p063-h08.png",
        "width": 197,
        "height": 333
      },
      {
        "assetId": "p064-h01",
        "displayId": "H0275",
        "pdfPage": 64,
        "imgUrl": "/assets/hinh/p064-h01.png",
        "img2xUrl": "/assets/hinh-2x/p064-h01.png",
        "width": 135,
        "height": 338
      },
      {
        "assetId": "p064-h02",
        "displayId": "H0276",
        "pdfPage": 64,
        "imgUrl": "/assets/hinh/p064-h02.png",
        "img2xUrl": "/assets/hinh-2x/p064-h02.png",
        "width": 124,
        "height": 337
      },
      {
        "assetId": "p064-h03",
        "displayId": "H0277",
        "pdfPage": 64,
        "imgUrl": "/assets/hinh/p064-h03.png",
        "img2xUrl": "/assets/hinh-2x/p064-h03.png",
        "width": 128,
        "height": 337
      },
      {
        "assetId": "p064-h04",
        "displayId": "H0278",
        "pdfPage": 64,
        "imgUrl": "/assets/hinh/p064-h04.png",
        "img2xUrl": "/assets/hinh-2x/p064-h04.png",
        "width": 131,
        "height": 336
      }
    ],
    "motions": [
      {
        "id": "bai-12-m-1",
        "stepNo": "1",
        "assetId": "p055-h01",
        "displayId": "H0204",
        "pdfPage": 55,
        "imgUrl": "/assets/hinh/p055-h01.png",
        "img2xUrl": "/assets/hinh-2x/p055-h01.png",
        "width": 155,
        "height": 338,
        "desc": "CHIÊU 1: Hai tay chắp lại để ngang ngực, mũi tay hướng ra ngoài."
      },
      {
        "id": "bai-12-m-2",
        "stepNo": "2",
        "assetId": "p055-h02",
        "displayId": "H0205",
        "pdfPage": 55,
        "imgUrl": "/assets/hinh/p055-h02.png",
        "img2xUrl": "/assets/hinh-2x/p055-h02.png",
        "width": 147,
        "height": 339,
        "desc": "CHIÊU 60: Xoay đồng thời cả 2 ìy vào trong, sau đó xoay teo chiều ngược lại đẩy ra."
      },
      {
        "id": "bai-12-m-3",
        "stepNo": "3",
        "assetId": "p055-h03",
        "displayId": "H0206",
        "pdfPage": 55,
        "imgUrl": "/assets/hinh/p055-h03.png",
        "img2xUrl": "/assets/hinh-2x/p055-h03.png",
        "width": 159,
        "height": 338,
        "desc": "CHIÊU 2: Hai bàn tay để song song, đánh thăng xuống dưới."
      },
      {
        "id": "bai-12-m-4",
        "stepNo": "4",
        "assetId": "p055-h04",
        "displayId": "H0207",
        "pdfPage": 55,
        "imgUrl": "/assets/hinh/p055-h04.png",
        "img2xUrl": "/assets/hinh-2x/p055-h04.png",
        "width": 129,
        "height": 337,
        "desc": "CHIÊU 3: Tay để như hình vẽ, quay người 90 độ sang trái, tay gạt ngang. Biên thân. Tay trái thủ."
      },
      {
        "id": "bai-12-m-5",
        "stepNo": "5",
        "assetId": "p055-h05",
        "displayId": "H0208",
        "pdfPage": 55,
        "imgUrl": "/assets/hinh/p055-h05.png",
        "img2xUrl": "/assets/hinh-2x/p055-h05.png",
        "width": 128,
        "height": 339,
        "desc": "CHIÊU 3: Giật cổ tay phải theo hướng thăng đứng từ trên xuống."
      },
      {
        "id": "bai-12-m-6",
        "stepNo": "6",
        "assetId": "p055-h06",
        "displayId": "H0209",
        "pdfPage": 55,
        "imgUrl": "/assets/hinh/p055-h06.png",
        "img2xUrl": "/assets/hinh-2x/p055-h06.png",
        "width": 125,
        "height": 338,
        "desc": "CHIÊU 3: Tay phải đánh chưởng ra trước, tay trái thủ."
      },
      {
        "id": "bai-12-m-7",
        "stepNo": "7",
        "assetId": "p055-h07",
        "displayId": "H0210",
        "pdfPage": 55,
        "imgUrl": "/assets/hinh/p055-h07.png",
        "img2xUrl": "/assets/hinh-2x/p055-h07.png",
        "width": 125,
        "height": 338,
        "desc": "CHIÊU 5: Tay trái đỡ, tay phải đánh chưởng ngang ra phía trước (Biên thân)."
      },
      {
        "id": "bai-12-m-8",
        "stepNo": "8",
        "assetId": "p055-h08",
        "displayId": "H0211",
        "pdfPage": 55,
        "imgUrl": "/assets/hinh/p055-h08.png",
        "img2xUrl": "/assets/hinh-2x/p055-h08.png",
        "width": 155,
        "height": 338,
        "desc": "CHIÊU 7: Xoay người sang trái. Tay trái than thú, tay phải bàng thủ."
      },
      {
        "id": "bai-12-m-9",
        "stepNo": "9",
        "assetId": "p055-h09",
        "displayId": "H0212",
        "pdfPage": 55,
        "imgUrl": "/assets/hinh/p055-h09.png",
        "img2xUrl": "/assets/hinh-2x/p055-h09.png",
        "width": 195,
        "height": 382,
        "desc": "CHIÊU 7: Xoay người sang phải, chuyển thế tay phải than thủ, tay trái băng thủ."
      },
      {
        "id": "bai-12-m-10",
        "stepNo": "10",
        "assetId": "p056-h01",
        "displayId": "H0213",
        "pdfPage": 56,
        "imgUrl": "/assets/hinh/p056-h01.png",
        "img2xUrl": "/assets/hinh-2x/p056-h01.png",
        "width": 136,
        "height": 337,
        "desc": "CHIÊU 7: Chuyển thế tay trái than thủ, tay phải đánh chưởng ra trước. Xoay người. Ez"
      },
      {
        "id": "bai-12-m-11",
        "stepNo": "11",
        "assetId": "p056-h02",
        "displayId": "H0214",
        "pdfPage": 56,
        "imgUrl": "/assets/hinh/p056-h02.png",
        "img2xUrl": "/assets/hinh-2x/p056-h02.png",
        "width": 125,
        "height": 339,
        "desc": "CHIÊU 8: Hai tay nắm , giơ cao quá đầu. Xoay người sang trái."
      },
      {
        "id": "bai-12-m-12",
        "stepNo": "12",
        "assetId": "p056-h03",
        "displayId": "H0215",
        "pdfPage": 56,
        "imgUrl": "/assets/hinh/p056-h03.png",
        "img2xUrl": "/assets/hinh-2x/p056-h03.png",
        "width": 228,
        "height": 384,
        "desc": "CHIÊU 8: Đánh theo chiều thẳng đứng từ phía trên xuống."
      },
      {
        "id": "bai-12-m-13",
        "stepNo": "13",
        "assetId": "p056-h04",
        "displayId": "H0216",
        "pdfPage": 56,
        "imgUrl": "/assets/hinh/p056-h04.png",
        "img2xUrl": "/assets/hinh-2x/p056-h04.png",
        "width": 112,
        "height": 338,
        "desc": "CHIÊU 8: Hai bàn tay xà úp."
      },
      {
        "id": "bai-12-m-14",
        "stepNo": "14",
        "assetId": "p056-h05",
        "displayId": "H0217",
        "pdfPage": 56,
        "imgUrl": "/assets/hinh/p056-h05.png",
        "img2xUrl": "/assets/hinh-2x/p056-h05.png",
        "width": 213,
        "height": 383,
        "desc": "CHIÊU 8: Hai tay xỉa theo chiều từ sau ra trước. Biên thân."
      },
      {
        "id": "bai-12-m-15",
        "stepNo": "15",
        "assetId": "p056-h06",
        "displayId": "H0218",
        "pdfPage": 56,
        "imgUrl": "/assets/hinh/p056-h06.png",
        "img2xUrl": "/assets/hinh-2x/p056-h06.png",
        "width": 124,
        "height": 337,
        "desc": "CHIÊU 13: Hai tay hất theo chiều từ dưới lên trên. Tương tự chiêu 13 nhưng tập với bên trái."
      },
      {
        "id": "bai-12-m-16",
        "stepNo": "16",
        "assetId": "p056-h07",
        "displayId": "H0219",
        "pdfPage": 56,
        "imgUrl": "/assets/hinh/p056-h07.png",
        "img2xUrl": "/assets/hinh-2x/p056-h07.png",
        "width": 128,
        "height": 338,
        "desc": "CHIÊU 13: Cánh tay vuông góc với cắng tay, hai tay song song nhau đề trước ngực, lòng bàn tay hướng vào mặt. Quay người sang phải, hai cảng tay đẩy ngược chiều nhau."
      },
      {
        "id": "bai-12-m-17",
        "stepNo": "17",
        "assetId": "p056-h08",
        "displayId": "H0220",
        "pdfPage": 56,
        "imgUrl": "/assets/hinh/p056-h08.png",
        "img2xUrl": "/assets/hinh-2x/p056-h08.png",
        "width": 140,
        "height": 337,
        "desc": "CHIÊU 17: Hai bàn tay đặt như hình. Bụng hơi thót, thu hai tay vào sát người rồi ¡ đẩy thẳng ra trước. i"
      },
      {
        "id": "bai-12-m-18",
        "stepNo": "18",
        "assetId": "p057-h01",
        "displayId": "H0221",
        "pdfPage": 57,
        "imgUrl": "/assets/hinh/p057-h01.png",
        "img2xUrl": "/assets/hinh-2x/p057-h01.png",
        "width": 120,
        "height": 337,
        "desc": "CHIÊU 17: Hai bàn tay đặt như hình. Bụng hơi thót, thu hai tay vào sát người rồi ¡ đẩy thẳng ra trước. i"
      },
      {
        "id": "bai-12-m-19",
        "stepNo": "19",
        "assetId": "p057-h02",
        "displayId": "H0222",
        "pdfPage": 57,
        "imgUrl": "/assets/hinh/p057-h02.png",
        "img2xUrl": "/assets/hinh-2x/p057-h02.png",
        "width": 120,
        "height": 338,
        "desc": "CHIÊU 19: Tay phải và tay trái nắm bắt. Biên thân."
      },
      {
        "id": "bai-12-m-20",
        "stepNo": "20",
        "assetId": "p057-h03",
        "displayId": "H0223",
        "pdfPage": 57,
        "imgUrl": "/assets/hinh/p057-h03.png",
        "img2xUrl": "/assets/hinh-2x/p057-h03.png",
        "width": 116,
        "height": 340,
        "desc": "CHIÊU 21: Kéo thẳng chiều hướng xuống đất và sang trái."
      },
      {
        "id": "bai-12-m-21",
        "stepNo": "21",
        "assetId": "p057-h04",
        "displayId": "H0224",
        "pdfPage": 57,
        "imgUrl": "/assets/hinh/p057-h04.png",
        "img2xUrl": "/assets/hinh-2x/p057-h04.png",
        "width": 172,
        "height": 333,
        "desc": "CHIÊU 21: Tay phải vít, tay trái nắm bắt. Biên thân."
      },
      {
        "id": "bai-12-m-22",
        "stepNo": "22",
        "assetId": "p057-h05",
        "displayId": "H0225",
        "pdfPage": 57,
        "imgUrl": "/assets/hinh/p057-h05.png",
        "img2xUrl": "/assets/hinh-2x/p057-h05.png",
        "width": 120,
        "height": 336,
        "desc": "CHIÊU 21: Kéo thẳng chiều hướng xuống đất và sang trái."
      },
      {
        "id": "bai-12-m-23",
        "stepNo": "23",
        "assetId": "p057-h06",
        "displayId": "H0226",
        "pdfPage": 57,
        "imgUrl": "/assets/hinh/p057-h06.png",
        "img2xUrl": "/assets/hinh-2x/p057-h06.png",
        "width": 146,
        "height": 337,
        "desc": "CHIÊU 27: Hai cắng tay để song song trước ngực. Xoay i người sang trái, đánh hất ra ngoài băng hai cạnh cổ tay. -¬4eT"
      },
      {
        "id": "bai-12-m-24",
        "stepNo": "24",
        "assetId": "p057-h07",
        "displayId": "H0227",
        "pdfPage": 57,
        "imgUrl": "/assets/hinh/p057-h07.png",
        "img2xUrl": "/assets/hinh-2x/p057-h07.png",
        "width": 122,
        "height": 337,
        "desc": "CHIÊU 23: Hai bàn tay cùng bắt và kéo ngược chiều."
      },
      {
        "id": "bai-12-m-25",
        "stepNo": "25",
        "assetId": "p058-h01",
        "displayId": "H0228",
        "pdfPage": 58,
        "imgUrl": "/assets/hinh/p058-h01.png",
        "img2xUrl": "/assets/hinh-2x/p058-h01.png",
        "width": 141,
        "height": 340,
        "desc": "CHIÊU 25: Cảng tay phải để sát người, căng tay trái dựng thăng. Xoay người sang bên trái."
      },
      {
        "id": "bai-12-m-26",
        "stepNo": "26",
        "assetId": "p058-h02",
        "displayId": "H0229",
        "pdfPage": 58,
        "imgUrl": "/assets/hinh/p058-h02.png",
        "img2xUrl": "/assets/hinh-2x/p058-h02.png",
        "width": 122,
        "height": 338,
        "desc": "CHIÊU 31: Xoay người sang trái. Tay trái thủ trước ngực, cạnh tay phải chém chếch ra trước và lên trên."
      },
      {
        "id": "bai-12-m-27",
        "stepNo": "27",
        "assetId": "p058-h03",
        "displayId": "H0230",
        "pdfPage": 58,
        "imgUrl": "/assets/hinh/p058-h03.png",
        "img2xUrl": "/assets/hinh-2x/p058-h03.png",
        "width": 124,
        "height": 338,
        "desc": "CHIÊU 31: Xoay người sang phải, chém tay trái ngược với hình 31.2"
      },
      {
        "id": "bai-12-m-28",
        "stepNo": "28",
        "assetId": "p058-h04",
        "displayId": "H0231",
        "pdfPage": 58,
        "imgUrl": "/assets/hinh/p058-h04.png",
        "img2xUrl": "/assets/hinh-2x/p058-h04.png",
        "width": 118,
        "height": 337,
        "desc": "CHIÊU 32: Xoay người sang trái. Vỗ xuống. bằng lực phất hai cổ tay."
      },
      {
        "id": "bai-12-m-29",
        "stepNo": "29",
        "assetId": "p058-h05",
        "displayId": "H0232",
        "pdfPage": 58,
        "imgUrl": "/assets/hinh/p058-h05.png",
        "img2xUrl": "/assets/hinh-2x/p058-h05.png",
        "width": 116,
        "height": 338,
        "desc": "CHIÊU 32: Tay trái thủ trước ngực, tay phải đánh chưởng ra trước."
      },
      {
        "id": "bai-12-m-30",
        "stepNo": "30",
        "assetId": "p058-h06",
        "displayId": "H0233",
        "pdfPage": 58,
        "imgUrl": "/assets/hinh/p058-h06.png",
        "img2xUrl": "/assets/hinh-2x/p058-h06.png",
        "width": 122,
        "height": 339,
        "desc": "CHIÊU 31: Xoay người sang phải, chém tay trái ngược với hình 31.2"
      },
      {
        "id": "bai-12-m-31",
        "stepNo": "31",
        "assetId": "p058-h07",
        "displayId": "H0234",
        "pdfPage": 58,
        "imgUrl": "/assets/hinh/p058-h07.png",
        "img2xUrl": "/assets/hinh-2x/p058-h07.png",
        "width": 123,
        "height": 340,
        "desc": "CHIÊU 33: Tay trái đánh chưởng ngang, tay phải đánh bằng cạnh ngoài căng tay và bàn tay ra phía trước. CHIẾU 35: Tương tự chiêu 34, tập với bên trái."
      },
      {
        "id": "bai-12-m-32",
        "stepNo": "32",
        "assetId": "p058-h08",
        "displayId": "H0235",
        "pdfPage": 58,
        "imgUrl": "/assets/hinh/p058-h08.png",
        "img2xUrl": "/assets/hinh-2x/p058-h08.png",
        "width": 134,
        "height": 340,
        "desc": "CHIÊU 36;: Hai cánh tay đề song song trước ngực. Xoay người sang trái, đánh hất ra ngoài bằng hai cườm cổ tay. | L"
      },
      {
        "id": "bai-12-m-33",
        "stepNo": "33",
        "assetId": "p059-h01",
        "displayId": "H0236",
        "pdfPage": 59,
        "imgUrl": "/assets/hinh/p059-h01.png",
        "img2xUrl": "/assets/hinh-2x/p059-h01.png",
        "width": 129,
        "height": 339,
        "desc": "CHIÊU 38: Chân tấn kiềm dương. Cảng tay phải dựng thẳng đứng, gập cổ lay kéo thẳng xuống, cùng lúc đánh tay trái lên."
      },
      {
        "id": "bai-12-m-34",
        "stepNo": "34",
        "assetId": "p059-h02",
        "displayId": "H0237",
        "pdfPage": 59,
        "imgUrl": "/assets/hinh/p059-h02.png",
        "img2xUrl": "/assets/hinh-2x/p059-h02.png",
        "width": 118,
        "height": 337,
        "desc": "CHIÊU 38: Xoay sang phải. Tay trái vuốt về thủ trước ngực. Tay phải chém ra trước."
      },
      {
        "id": "bai-12-m-35",
        "stepNo": "35",
        "assetId": "p059-h03",
        "displayId": "H0238",
        "pdfPage": 59,
        "imgUrl": "/assets/hinh/p059-h03.png",
        "img2xUrl": "/assets/hinh-2x/p059-h03.png",
        "width": 209,
        "height": 382,
        "desc": "CHIÊU 40: Xoav người sang trái. Tay trái ngửa, bàn tay phải úp gạt ra sau."
      },
      {
        "id": "bai-12-m-36",
        "stepNo": "36",
        "assetId": "p059-h04",
        "displayId": "H0239",
        "pdfPage": 59,
        "imgUrl": "/assets/hinh/p059-h04.png",
        "img2xUrl": "/assets/hinh-2x/p059-h04.png",
        "width": 178,
        "height": 380,
        "desc": "CHIÊU 40: Giữ nguyên thế chân, tay phải chém ngược cạnh bàn tay ra trước. Tay trái úp thủ"
      },
      {
        "id": "bai-12-m-37",
        "stepNo": "37",
        "assetId": "p059-h05",
        "displayId": "H0240",
        "pdfPage": 59,
        "imgUrl": "/assets/hinh/p059-h05.png",
        "img2xUrl": "/assets/hinh-2x/p059-h05.png",
        "width": 129,
        "height": 339,
        "desc": "CHIÊU 42: Xoay người sang phải, tay phải đỡ bằng mặt sau cổ tay, tay trái đỡ bằng. bàng thủ."
      },
      {
        "id": "bai-12-m-38",
        "stepNo": "38",
        "assetId": "p059-h06",
        "displayId": "H0241",
        "pdfPage": 59,
        "imgUrl": "/assets/hinh/p059-h06.png",
        "img2xUrl": "/assets/hinh-2x/p059-h06.png",
        "width": 137,
        "height": 338,
        "desc": "CHIÊU 40: Xoav người sang trái. Tay trái ngửa, bàn tay phải úp gạt ra sau."
      },
      {
        "id": "bai-12-m-39",
        "stepNo": "39",
        "assetId": "p059-h07",
        "displayId": "H0242",
        "pdfPage": 59,
        "imgUrl": "/assets/hinh/p059-h07.png",
        "img2xUrl": "/assets/hinh-2x/p059-h07.png",
        "width": 121,
        "height": 336,
        "desc": "CHIÊU 46;: Xoay người sang trái, tayphảiđánhthốctừdưới T lên. Tay trái thủ. b"
      },
      {
        "id": "bai-12-m-40",
        "stepNo": "40",
        "assetId": "p059-h08",
        "displayId": "H0243",
        "pdfPage": 59,
        "imgUrl": "/assets/hinh/p059-h08.png",
        "img2xUrl": "/assets/hinh-2x/p059-h08.png",
        "width": 120,
        "height": 337,
        "desc": "CHIÊU 42: Như 34.1"
      },
      {
        "id": "bai-12-m-41",
        "stepNo": "41",
        "assetId": "p060-h01",
        "displayId": "H0244",
        "pdfPage": 60,
        "imgUrl": "/assets/hinh/p060-h01.png",
        "img2xUrl": "/assets/hinh-2x/p060-h01.png",
        "width": 129,
        "height": 336,
        "desc": "CHIÊU 50: Chân tấn kiềm dương. Hai căng tay song song. Đẩy hai bàn tay theo hướng từ dưới lên ."
      },
      {
        "id": "bai-12-m-42",
        "stepNo": "42",
        "assetId": "p060-h02",
        "displayId": "H0245",
        "pdfPage": 60,
        "imgUrl": "/assets/hinh/p060-h02.png",
        "img2xUrl": "/assets/hinh-2x/p060-h02.png",
        "width": 131,
        "height": 339,
        "desc": "CHIÊU 42: Như 32.1"
      },
      {
        "id": "bai-12-m-43",
        "stepNo": "43",
        "assetId": "p060-h03",
        "displayId": "H0246",
        "pdfPage": 60,
        "imgUrl": "/assets/hinh/p060-h03.png",
        "img2xUrl": "/assets/hinh-2x/p060-h03.png",
        "width": 125,
        "height": 338,
        "desc": "CHIÊU 5L: Xoay người sang trái. Tay phải đề tay xà, đánh thốc từ dưới lên. Tay trái thủ trước ngực."
      },
      {
        "id": "bai-12-m-44",
        "stepNo": "44",
        "assetId": "p060-h04",
        "displayId": "H0247",
        "pdfPage": 60,
        "imgUrl": "/assets/hinh/p060-h04.png",
        "img2xUrl": "/assets/hinh-2x/p060-h04.png",
        "width": 123,
        "height": 336,
        "desc": "CHIÊU 53: Xoay người sang trái. Tay phải hình báo, đánh vòng từ bên trái sang phải. Tay trái thú ."
      },
      {
        "id": "bai-12-m-45",
        "stepNo": "45",
        "assetId": "p060-h05",
        "displayId": "H0248",
        "pdfPage": 60,
        "imgUrl": "/assets/hinh/p060-h05.png",
        "img2xUrl": "/assets/hinh-2x/p060-h05.png",
        "width": 128,
        "height": 337,
        "desc": "CHIÊU 46;: Xoay người sang trái, tayphảiđánhthốctừdưới T lên. Tay trái thủ. b"
      },
      {
        "id": "bai-12-m-46",
        "stepNo": "46",
        "assetId": "p060-h06",
        "displayId": "H0249",
        "pdfPage": 60,
        "imgUrl": "/assets/hinh/p060-h06.png",
        "img2xUrl": "/assets/hinh-2x/p060-h06.png",
        "width": 131,
        "height": 339,
        "desc": "CHIÊU 57: Xoay người sang trái. 1 Haibàntay duỗithẳngđể È song song với nhau đẩy từ sauratrước. . CHIEU 58: d Tương tựchiêu 57,tậpvới È bên trái. n"
      },
      {
        "id": "bai-12-m-47",
        "stepNo": "47",
        "assetId": "p060-h07",
        "displayId": "H0250",
        "pdfPage": 60,
        "imgUrl": "/assets/hinh/p060-h07.png",
        "img2xUrl": "/assets/hinh-2x/p060-h07.png",
        "width": 125,
        "height": 338,
        "desc": "CHIÊU 59: l: Xoay người sang trái, H"
      },
      {
        "id": "bai-12-m-48",
        "stepNo": "48",
        "assetId": "p060-h08",
        "displayId": "H0251",
        "pdfPage": 60,
        "imgUrl": "/assets/hinh/p060-h08.png",
        "img2xUrl": "/assets/hinh-2x/p060-h08.png",
        "width": 128,
        "height": 336,
        "desc": "CHIÊU 50: Giữ nguyên thân và tấn. Hai bàn tay úp, đề xuống."
      },
      {
        "id": "bai-12-m-49",
        "stepNo": "49",
        "assetId": "p061-h01",
        "displayId": "H0252",
        "pdfPage": 61,
        "imgUrl": "/assets/hinh/p061-h01.png",
        "img2xUrl": "/assets/hinh-2x/p061-h01.png",
        "width": 133,
        "height": 339,
        "desc": "CHIÊU 50: Đấm thẳng tay phải, tay trái thủ (như hình 48)."
      },
      {
        "id": "bai-12-m-50",
        "stepNo": "50",
        "assetId": "p061-h02",
        "displayId": "H0253",
        "pdfPage": 61,
        "imgUrl": "/assets/hinh/p061-h02.png",
        "img2xUrl": "/assets/hinh-2x/p061-h02.png",
        "width": 120,
        "height": 339,
        "desc": "CHIÊU 50: Tập tương tự với đấm tay trái."
      },
      {
        "id": "bai-12-m-51",
        "stepNo": "51",
        "assetId": "p061-h03",
        "displayId": "H0254",
        "pdfPage": 61,
        "imgUrl": "/assets/hinh/p061-h03.png",
        "img2xUrl": "/assets/hinh-2x/p061-h03.png",
        "width": 131,
        "height": 340,
        "desc": "CHIÊU 5L: Xoay người sang trái. Tay phải đề tay xà, đánh thốc từ dưới lên. Tay trái thủ trước ngực."
      },
      {
        "id": "bai-12-m-52",
        "stepNo": "52",
        "assetId": "p061-h04",
        "displayId": "H0255",
        "pdfPage": 61,
        "imgUrl": "/assets/hinh/p061-h04.png",
        "img2xUrl": "/assets/hinh-2x/p061-h04.png",
        "width": 116,
        "height": 338,
        "desc": "CHIÊU 53: Xoay người sang trái. Tay phải hình báo, đánh vòng từ bên trái sang phải. Tay trái thú ."
      },
      {
        "id": "bai-12-m-53",
        "stepNo": "53",
        "assetId": "p061-h05",
        "displayId": "H0256",
        "pdfPage": 61,
        "imgUrl": "/assets/hinh/p061-h05.png",
        "img2xUrl": "/assets/hinh-2x/p061-h05.png",
        "width": 125,
        "height": 338,
        "desc": "CHIÊU 54: Xoay người sang trái, Chưởng phải đẩy ngang ép vào căng tay trái. Tương tự chiều 55, tập với c bên trái. Ị"
      },
      {
        "id": "bai-12-m-54",
        "stepNo": "54",
        "assetId": "p061-h06",
        "displayId": "H0257",
        "pdfPage": 61,
        "imgUrl": "/assets/hinh/p061-h06.png",
        "img2xUrl": "/assets/hinh-2x/p061-h06.png",
        "width": 192,
        "height": 382,
        "desc": "CHIÊU 68: Xoay người sang trái. Tay trái than thủ, tay phải đấm thẳng ra trước."
      },
      {
        "id": "bai-12-m-55",
        "stepNo": "55",
        "assetId": "p061-h07",
        "displayId": "H0258",
        "pdfPage": 61,
        "imgUrl": "/assets/hinh/p061-h07.png",
        "img2xUrl": "/assets/hinh-2x/p061-h07.png",
        "width": 115,
        "height": 338,
        "desc": "CHIÊU 69: Xoay ngườisang trái. t Đánh cùi chỏ tay phải theo chiều thẳng từ trên xuống, tay trái thủ. Giữ nguyên 1 chân và thân. b"
      },
      {
        "id": "bai-12-m-56",
        "stepNo": "56",
        "assetId": "p061-h08",
        "displayId": "H0259",
        "pdfPage": 61,
        "imgUrl": "/assets/hinh/p061-h08.png",
        "img2xUrl": "/assets/hinh-2x/p061-h08.png",
        "width": 118,
        "height": 336,
        "desc": "CHIÊU 60: Chân tấn kiềm ương. Dựng thăng hai 1y, lòng bàn tay hướng vào tặt."
      },
      {
        "id": "bai-12-m-57",
        "stepNo": "57",
        "assetId": "p062-h01",
        "displayId": "H0260",
        "pdfPage": 62,
        "imgUrl": "/assets/hinh/p062-h01.png",
        "img2xUrl": "/assets/hinh-2x/p062-h01.png",
        "width": 125,
        "height": 338,
        "desc": "CHIÊU 72: Xoay người sang trái. Đánh khủy tay phải sang phía trái. Tay trái thủ."
      },
      {
        "id": "bai-12-m-58",
        "stepNo": "58",
        "assetId": "p062-h02",
        "displayId": "H0261",
        "pdfPage": 62,
        "imgUrl": "/assets/hinh/p062-h02.png",
        "img2xUrl": "/assets/hinh-2x/p062-h02.png",
        "width": 172,
        "height": 366,
        "desc": "CHIÊU 60: Xoay người sang trái. Hai tay nắm đấm, tay phải ngửa, tay trái úp để trước ngực. Tay phải đấm móc lên, tay trái đấm móc xuống."
      },
      {
        "id": "bai-12-m-59",
        "stepNo": "59",
        "assetId": "p062-h03",
        "displayId": "H0262",
        "pdfPage": 62,
        "imgUrl": "/assets/hinh/p062-h03.png",
        "img2xUrl": "/assets/hinh-2x/p062-h03.png",
        "width": 137,
        "height": 322,
        "desc": "CHIÊU 63: Xoay người sang trái. Bàn tay phải đề tay xà, kéo lên gần má phải. Bàn tay trái thủ."
      },
      {
        "id": "bai-12-m-60",
        "stepNo": "60",
        "assetId": "p062-h04",
        "displayId": "H0263",
        "pdfPage": 62,
        "imgUrl": "/assets/hinh/p062-h04.png",
        "img2xUrl": "/assets/hinh-2x/p062-h04.png",
        "width": 132,
        "height": 321,
        "desc": "CHIÊU 63: Tay phải đánh chưởng thăng ra trước, tay trái thủ. Tương tự chiêu 64, tập với bên trái."
      },
      {
        "id": "bai-12-m-61",
        "stepNo": "61",
        "assetId": "p062-h05",
        "displayId": "H0264",
        "pdfPage": 62,
        "imgUrl": "/assets/hinh/p062-h05.png",
        "img2xUrl": "/assets/hinh-2x/p062-h05.png",
        "width": 129,
        "height": 338,
        "desc": "CHIÊU 78: Xoay người sang trái. Tay phải bàng thủ, đánh căng tay sang trái. Tay trái thủ."
      },
      {
        "id": "bai-12-m-62",
        "stepNo": "62",
        "assetId": "p062-h06",
        "displayId": "H0265",
        "pdfPage": 62,
        "imgUrl": "/assets/hinh/p062-h06.png",
        "img2xUrl": "/assets/hinh-2x/p062-h06.png",
        "width": 177,
        "height": 384,
        "desc": "CHIÊU 80: |: Xoay người sang trái - | Tay trái nắm bắt, tay phải | đánh cẳng tay xuống. |"
      },
      {
        "id": "bai-12-m-63",
        "stepNo": "63",
        "assetId": "p062-h07",
        "displayId": "H0266",
        "pdfPage": 62,
        "imgUrl": "/assets/hinh/p062-h07.png",
        "img2xUrl": "/assets/hinh-2x/p062-h07.png",
        "width": 121,
        "height": 335,
        "desc": "CHIÊU 69: Xoay ngườisang trái. t Đánh cùi chỏ tay phải theo chiều thẳng từ trên xuống, tay trái thủ. Giữ nguyên 1 chân và thân. b"
      },
      {
        "id": "bai-12-m-64",
        "stepNo": "64",
        "assetId": "p063-h01",
        "displayId": "H0267",
        "pdfPage": 63,
        "imgUrl": "/assets/hinh/p063-h01.png",
        "img2xUrl": "/assets/hinh-2x/p063-h01.png",
        "width": 139,
        "height": 337,
        "desc": "CHIÊU 84: Chân tấn kiềm dương, hai bàn tay đánh móc từ trong trục trung tâm sang hai bên."
      },
      {
        "id": "bai-12-m-65",
        "stepNo": "65",
        "assetId": "p063-h02",
        "displayId": "H0268",
        "pdfPage": 63,
        "imgUrl": "/assets/hinh/p063-h02.png",
        "img2xUrl": "/assets/hinh-2x/p063-h02.png",
        "width": 138,
        "height": 326,
        "desc": "CHIÊU 85: Xoay người sang trái, hạ thấp xuống. Tay phải dùng chảo đánh ra trước, bóp rồi giật về. Tay trái thủ hạ bô,"
      },
      {
        "id": "bai-12-m-66",
        "stepNo": "66",
        "assetId": "p063-h03",
        "displayId": "H0269",
        "pdfPage": 63,
        "imgUrl": "/assets/hinh/p063-h03.png",
        "img2xUrl": "/assets/hinh-2x/p063-h03.png",
        "width": 124,
        "height": 336,
        "desc": "CHIÊU 87: Xoay người sang trái. Hai tay đặt chéo, đưa từ dưới lên."
      },
      {
        "id": "bai-12-m-67",
        "stepNo": "67",
        "assetId": "p063-h04",
        "displayId": "H0270",
        "pdfPage": 63,
        "imgUrl": "/assets/hinh/p063-h04.png",
        "img2xUrl": "/assets/hinh-2x/p063-h04.png",
        "width": 126,
        "height": 337,
        "desc": "CHIÊU 74: Xoay người sang trái. Đánh giật khuỷu tay phải theo chiều từ trước ra sau."
      },
      {
        "id": "bai-12-m-68",
        "stepNo": "68",
        "assetId": "p063-h05",
        "displayId": "H0271",
        "pdfPage": 63,
        "imgUrl": "/assets/hinh/p063-h05.png",
        "img2xUrl": "/assets/hinh-2x/p063-h05.png",
        "width": 176,
        "height": 334,
        "desc": "CHIÊU 89: Xoay người sang trái, tay phải và tay trái nắm bất, kéo giật. Chân phải lên gối."
      },
      {
        "id": "bai-12-m-69",
        "stepNo": "69",
        "assetId": "p063-h06",
        "displayId": "H0272",
        "pdfPage": 63,
        "imgUrl": "/assets/hinh/p063-h06.png",
        "img2xUrl": "/assets/hinh-2x/p063-h06.png",
        "width": 195,
        "height": 320,
        "desc": "CHIÊU 76: Xoay người sang trái. Đánh khuỷu tay phải hất lên."
      },
      {
        "id": "bai-12-m-70",
        "stepNo": "70",
        "assetId": "p063-h07",
        "displayId": "H0273",
        "pdfPage": 63,
        "imgUrl": "/assets/hinh/p063-h07.png",
        "img2xUrl": "/assets/hinh-2x/p063-h07.png",
        "width": 122,
        "height": 337,
        "desc": "CHIÊU 93: Xoay người sang trái, tay phải và tay trái nắm kéo giậtsang bên trái. Đánh.” miết đầu gối từtrênxuống. Ï"
      },
      {
        "id": "bai-12-m-71",
        "stepNo": "71",
        "assetId": "p063-h08",
        "displayId": "H0274",
        "pdfPage": 63,
        "imgUrl": "/assets/hinh/p063-h08.png",
        "img2xUrl": "/assets/hinh-2x/p063-h08.png",
        "width": 197,
        "height": 333,
        "desc": "CHIÊU 78: Xoay người sang trái. Tay phải bàng thủ, đánh căng tay sang trái. Tay trái thủ."
      },
      {
        "id": "bai-12-m-72",
        "stepNo": "72",
        "assetId": "p064-h01",
        "displayId": "H0275",
        "pdfPage": 64,
        "imgUrl": "/assets/hinh/p064-h01.png",
        "img2xUrl": "/assets/hinh-2x/p064-h01.png",
        "width": 135,
        "height": 338,
        "desc": "CHIÊU 97: Xoay người sang trái, Hai tay úp, vỗ như chiêu số 32. Trụ chân trái, dâng cao gôi phải, vòng mũi bàn chân đá móc lên."
      },
      {
        "id": "bai-12-m-73",
        "stepNo": "73",
        "assetId": "p064-h02",
        "displayId": "H0276",
        "pdfPage": 64,
        "imgUrl": "/assets/hinh/p064-h02.png",
        "img2xUrl": "/assets/hinh-2x/p064-h02.png",
        "width": 124,
        "height": 337,
        "desc": "CHIÊU 99: Xoay người sang trái, hai tay xỉa như chiêu 11. Chân đá (như chiêu 97)."
      },
      {
        "id": "bai-12-m-74",
        "stepNo": "74",
        "assetId": "p064-h03",
        "displayId": "H0277",
        "pdfPage": 64,
        "imgUrl": "/assets/hinh/p064-h03.png",
        "img2xUrl": "/assets/hinh-2x/p064-h03.png",
        "width": 128,
        "height": 337,
        "desc": "CHIÊU 101: Xoay người sang trái, hai tay đánh hất từ dưới lên (giống chiêu 13). Chân đá (như chiêu sô 97)."
      },
      {
        "id": "bai-12-m-75",
        "stepNo": "75",
        "assetId": "p064-h04",
        "displayId": "H0278",
        "pdfPage": 64,
        "imgUrl": "/assets/hinh/p064-h04.png",
        "img2xUrl": "/assets/hinh-2x/p064-h04.png",
        "width": 131,
        "height": 336,
        "desc": "CHIÊU 103: Xoay người sang trái, tay đánh như động tác 38.1 Chân đá (như chiêu 97)."
      }
    ],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-13",
    "title": "Bài 108 tại chỗ — đối luyện",
    "groupId": "quyen-tay-khong",
    "bookOrder": 13,
    "contentType": "practice_or_mixed",
    "pdfPages": [
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74
    ],
    "pageRange": "Trang PDF 65 – 74",
    "assetCount": 77,
    "assets": [
      {
        "assetId": "p065-h01",
        "displayId": "H0279",
        "pdfPage": 65,
        "imgUrl": "/assets/hinh/p065-h01.png",
        "img2xUrl": "/assets/hinh-2x/p065-h01.png",
        "width": 232,
        "height": 318
      },
      {
        "assetId": "p065-h02",
        "displayId": "H0280",
        "pdfPage": 65,
        "imgUrl": "/assets/hinh/p065-h02.png",
        "img2xUrl": "/assets/hinh-2x/p065-h02.png",
        "width": 247,
        "height": 319
      },
      {
        "assetId": "p065-h03",
        "displayId": "H0281",
        "pdfPage": 65,
        "imgUrl": "/assets/hinh/p065-h03.png",
        "img2xUrl": "/assets/hinh-2x/p065-h03.png",
        "width": 211,
        "height": 318
      },
      {
        "assetId": "p065-h04",
        "displayId": "H0282",
        "pdfPage": 65,
        "imgUrl": "/assets/hinh/p065-h04.png",
        "img2xUrl": "/assets/hinh-2x/p065-h04.png",
        "width": 205,
        "height": 317
      },
      {
        "assetId": "p065-h05",
        "displayId": "H0283",
        "pdfPage": 65,
        "imgUrl": "/assets/hinh/p065-h05.png",
        "img2xUrl": "/assets/hinh-2x/p065-h05.png",
        "width": 249,
        "height": 317
      },
      {
        "assetId": "p065-h06",
        "displayId": "H0284",
        "pdfPage": 65,
        "imgUrl": "/assets/hinh/p065-h06.png",
        "img2xUrl": "/assets/hinh-2x/p065-h06.png",
        "width": 259,
        "height": 314
      },
      {
        "assetId": "p065-h07",
        "displayId": "H0285",
        "pdfPage": 65,
        "imgUrl": "/assets/hinh/p065-h07.png",
        "img2xUrl": "/assets/hinh-2x/p065-h07.png",
        "width": 239,
        "height": 317
      },
      {
        "assetId": "p065-h08",
        "displayId": "H0286",
        "pdfPage": 65,
        "imgUrl": "/assets/hinh/p065-h08.png",
        "img2xUrl": "/assets/hinh-2x/p065-h08.png",
        "width": 251,
        "height": 317
      },
      {
        "assetId": "p066-h01",
        "displayId": "H0287",
        "pdfPage": 66,
        "imgUrl": "/assets/hinh/p066-h01.png",
        "img2xUrl": "/assets/hinh-2x/p066-h01.png",
        "width": 209,
        "height": 321
      },
      {
        "assetId": "p066-h02",
        "displayId": "H0288",
        "pdfPage": 66,
        "imgUrl": "/assets/hinh/p066-h02.png",
        "img2xUrl": "/assets/hinh-2x/p066-h02.png",
        "width": 219,
        "height": 315
      },
      {
        "assetId": "p066-h03",
        "displayId": "H0289",
        "pdfPage": 66,
        "imgUrl": "/assets/hinh/p066-h03.png",
        "img2xUrl": "/assets/hinh-2x/p066-h03.png",
        "width": 256,
        "height": 317
      },
      {
        "assetId": "p066-h04",
        "displayId": "H0290",
        "pdfPage": 66,
        "imgUrl": "/assets/hinh/p066-h04.png",
        "img2xUrl": "/assets/hinh-2x/p066-h04.png",
        "width": 256,
        "height": 317
      },
      {
        "assetId": "p066-h05",
        "displayId": "H0291",
        "pdfPage": 66,
        "imgUrl": "/assets/hinh/p066-h05.png",
        "img2xUrl": "/assets/hinh-2x/p066-h05.png",
        "width": 253,
        "height": 317
      },
      {
        "assetId": "p066-h06",
        "displayId": "H0292",
        "pdfPage": 66,
        "imgUrl": "/assets/hinh/p066-h06.png",
        "img2xUrl": "/assets/hinh-2x/p066-h06.png",
        "width": 231,
        "height": 317
      },
      {
        "assetId": "p066-h07",
        "displayId": "H0293",
        "pdfPage": 66,
        "imgUrl": "/assets/hinh/p066-h07.png",
        "img2xUrl": "/assets/hinh-2x/p066-h07.png",
        "width": 247,
        "height": 316
      },
      {
        "assetId": "p066-h08",
        "displayId": "H0294",
        "pdfPage": 66,
        "imgUrl": "/assets/hinh/p066-h08.png",
        "img2xUrl": "/assets/hinh-2x/p066-h08.png",
        "width": 248,
        "height": 316
      },
      {
        "assetId": "p067-h01",
        "displayId": "H0295",
        "pdfPage": 67,
        "imgUrl": "/assets/hinh/p067-h01.png",
        "img2xUrl": "/assets/hinh-2x/p067-h01.png",
        "width": 212,
        "height": 314
      },
      {
        "assetId": "p067-h02",
        "displayId": "H0296",
        "pdfPage": 67,
        "imgUrl": "/assets/hinh/p067-h02.png",
        "img2xUrl": "/assets/hinh-2x/p067-h02.png",
        "width": 258,
        "height": 314
      },
      {
        "assetId": "p067-h03",
        "displayId": "H0297",
        "pdfPage": 67,
        "imgUrl": "/assets/hinh/p067-h03.png",
        "img2xUrl": "/assets/hinh-2x/p067-h03.png",
        "width": 242,
        "height": 315
      },
      {
        "assetId": "p067-h04",
        "displayId": "H0298",
        "pdfPage": 67,
        "imgUrl": "/assets/hinh/p067-h04.png",
        "img2xUrl": "/assets/hinh-2x/p067-h04.png",
        "width": 243,
        "height": 314
      },
      {
        "assetId": "p067-h05",
        "displayId": "H0299",
        "pdfPage": 67,
        "imgUrl": "/assets/hinh/p067-h05.png",
        "img2xUrl": "/assets/hinh-2x/p067-h05.png",
        "width": 283,
        "height": 362
      },
      {
        "assetId": "p067-h06",
        "displayId": "H0300",
        "pdfPage": 67,
        "imgUrl": "/assets/hinh/p067-h06.png",
        "img2xUrl": "/assets/hinh-2x/p067-h06.png",
        "width": 211,
        "height": 315
      },
      {
        "assetId": "p067-h07",
        "displayId": "H0301",
        "pdfPage": 67,
        "imgUrl": "/assets/hinh/p067-h07.png",
        "img2xUrl": "/assets/hinh-2x/p067-h07.png",
        "width": 214,
        "height": 314
      },
      {
        "assetId": "p067-h08",
        "displayId": "H0302",
        "pdfPage": 67,
        "imgUrl": "/assets/hinh/p067-h08.png",
        "img2xUrl": "/assets/hinh-2x/p067-h08.png",
        "width": 233,
        "height": 317
      },
      {
        "assetId": "p068-h01",
        "displayId": "H0303",
        "pdfPage": 68,
        "imgUrl": "/assets/hinh/p068-h01.png",
        "img2xUrl": "/assets/hinh-2x/p068-h01.png",
        "width": 247,
        "height": 316
      },
      {
        "assetId": "p068-h02",
        "displayId": "H0304",
        "pdfPage": 68,
        "imgUrl": "/assets/hinh/p068-h02.png",
        "img2xUrl": "/assets/hinh-2x/p068-h02.png",
        "width": 256,
        "height": 316
      },
      {
        "assetId": "p068-h03",
        "displayId": "H0305",
        "pdfPage": 68,
        "imgUrl": "/assets/hinh/p068-h03.png",
        "img2xUrl": "/assets/hinh-2x/p068-h03.png",
        "width": 249,
        "height": 315
      },
      {
        "assetId": "p068-h04",
        "displayId": "H0306",
        "pdfPage": 68,
        "imgUrl": "/assets/hinh/p068-h04.png",
        "img2xUrl": "/assets/hinh-2x/p068-h04.png",
        "width": 239,
        "height": 316
      },
      {
        "assetId": "p068-h05",
        "displayId": "H0307",
        "pdfPage": 68,
        "imgUrl": "/assets/hinh/p068-h05.png",
        "img2xUrl": "/assets/hinh-2x/p068-h05.png",
        "width": 243,
        "height": 316
      },
      {
        "assetId": "p068-h06",
        "displayId": "H0308",
        "pdfPage": 68,
        "imgUrl": "/assets/hinh/p068-h06.png",
        "img2xUrl": "/assets/hinh-2x/p068-h06.png",
        "width": 236,
        "height": 317
      },
      {
        "assetId": "p068-h07",
        "displayId": "H0309",
        "pdfPage": 68,
        "imgUrl": "/assets/hinh/p068-h07.png",
        "img2xUrl": "/assets/hinh-2x/p068-h07.png",
        "width": 244,
        "height": 316
      },
      {
        "assetId": "p068-h08",
        "displayId": "H0310",
        "pdfPage": 68,
        "imgUrl": "/assets/hinh/p068-h08.png",
        "img2xUrl": "/assets/hinh-2x/p068-h08.png",
        "width": 215,
        "height": 315
      },
      {
        "assetId": "p069-h01",
        "displayId": "H0311",
        "pdfPage": 69,
        "imgUrl": "/assets/hinh/p069-h01.png",
        "img2xUrl": "/assets/hinh-2x/p069-h01.png",
        "width": 220,
        "height": 317
      },
      {
        "assetId": "p069-h02",
        "displayId": "H0312",
        "pdfPage": 69,
        "imgUrl": "/assets/hinh/p069-h02.png",
        "img2xUrl": "/assets/hinh-2x/p069-h02.png",
        "width": 258,
        "height": 315
      },
      {
        "assetId": "p069-h03",
        "displayId": "H0313",
        "pdfPage": 69,
        "imgUrl": "/assets/hinh/p069-h03.png",
        "img2xUrl": "/assets/hinh-2x/p069-h03.png",
        "width": 199,
        "height": 314
      },
      {
        "assetId": "p069-h04",
        "displayId": "H0314",
        "pdfPage": 69,
        "imgUrl": "/assets/hinh/p069-h04.png",
        "img2xUrl": "/assets/hinh-2x/p069-h04.png",
        "width": 246,
        "height": 314
      },
      {
        "assetId": "p069-h05",
        "displayId": "H0315",
        "pdfPage": 69,
        "imgUrl": "/assets/hinh/p069-h05.png",
        "img2xUrl": "/assets/hinh-2x/p069-h05.png",
        "width": 254,
        "height": 316
      },
      {
        "assetId": "p069-h06",
        "displayId": "H0316",
        "pdfPage": 69,
        "imgUrl": "/assets/hinh/p069-h06.png",
        "img2xUrl": "/assets/hinh-2x/p069-h06.png",
        "width": 247,
        "height": 317
      },
      {
        "assetId": "p069-h07",
        "displayId": "H0317",
        "pdfPage": 69,
        "imgUrl": "/assets/hinh/p069-h07.png",
        "img2xUrl": "/assets/hinh-2x/p069-h07.png",
        "width": 251,
        "height": 314
      },
      {
        "assetId": "p069-h08",
        "displayId": "H0318",
        "pdfPage": 69,
        "imgUrl": "/assets/hinh/p069-h08.png",
        "img2xUrl": "/assets/hinh-2x/p069-h08.png",
        "width": 258,
        "height": 315
      },
      {
        "assetId": "p070-h01",
        "displayId": "H0319",
        "pdfPage": 70,
        "imgUrl": "/assets/hinh/p070-h01.png",
        "img2xUrl": "/assets/hinh-2x/p070-h01.png",
        "width": 218,
        "height": 315
      },
      {
        "assetId": "p070-h02",
        "displayId": "H0320",
        "pdfPage": 70,
        "imgUrl": "/assets/hinh/p070-h02.png",
        "img2xUrl": "/assets/hinh-2x/p070-h02.png",
        "width": 224,
        "height": 317
      },
      {
        "assetId": "p070-h03",
        "displayId": "H0321",
        "pdfPage": 70,
        "imgUrl": "/assets/hinh/p070-h03.png",
        "img2xUrl": "/assets/hinh-2x/p070-h03.png",
        "width": 224,
        "height": 316
      },
      {
        "assetId": "p070-h04",
        "displayId": "H0322",
        "pdfPage": 70,
        "imgUrl": "/assets/hinh/p070-h04.png",
        "img2xUrl": "/assets/hinh-2x/p070-h04.png",
        "width": 264,
        "height": 314
      },
      {
        "assetId": "p070-h05",
        "displayId": "H0323",
        "pdfPage": 70,
        "imgUrl": "/assets/hinh/p070-h05.png",
        "img2xUrl": "/assets/hinh-2x/p070-h05.png",
        "width": 221,
        "height": 316
      },
      {
        "assetId": "p070-h06",
        "displayId": "H0324",
        "pdfPage": 70,
        "imgUrl": "/assets/hinh/p070-h06.png",
        "img2xUrl": "/assets/hinh-2x/p070-h06.png",
        "width": 247,
        "height": 316
      },
      {
        "assetId": "p070-h07",
        "displayId": "H0325",
        "pdfPage": 70,
        "imgUrl": "/assets/hinh/p070-h07.png",
        "img2xUrl": "/assets/hinh-2x/p070-h07.png",
        "width": 245,
        "height": 316
      },
      {
        "assetId": "p070-h08",
        "displayId": "H0326",
        "pdfPage": 70,
        "imgUrl": "/assets/hinh/p070-h08.png",
        "img2xUrl": "/assets/hinh-2x/p070-h08.png",
        "width": 203,
        "height": 314
      },
      {
        "assetId": "p071-h01",
        "displayId": "H0327",
        "pdfPage": 71,
        "imgUrl": "/assets/hinh/p071-h01.png",
        "img2xUrl": "/assets/hinh-2x/p071-h01.png",
        "width": 224,
        "height": 316
      },
      {
        "assetId": "p071-h02",
        "displayId": "H0328",
        "pdfPage": 71,
        "imgUrl": "/assets/hinh/p071-h02.png",
        "img2xUrl": "/assets/hinh-2x/p071-h02.png",
        "width": 214,
        "height": 314
      },
      {
        "assetId": "p071-h03",
        "displayId": "H0329",
        "pdfPage": 71,
        "imgUrl": "/assets/hinh/p071-h03.png",
        "img2xUrl": "/assets/hinh-2x/p071-h03.png",
        "width": 253,
        "height": 317
      },
      {
        "assetId": "p071-h04",
        "displayId": "H0330",
        "pdfPage": 71,
        "imgUrl": "/assets/hinh/p071-h04.png",
        "img2xUrl": "/assets/hinh-2x/p071-h04.png",
        "width": 234,
        "height": 319
      },
      {
        "assetId": "p071-h05",
        "displayId": "H0331",
        "pdfPage": 71,
        "imgUrl": "/assets/hinh/p071-h05.png",
        "img2xUrl": "/assets/hinh-2x/p071-h05.png",
        "width": 234,
        "height": 315
      },
      {
        "assetId": "p071-h06",
        "displayId": "H0332",
        "pdfPage": 71,
        "imgUrl": "/assets/hinh/p071-h06.png",
        "img2xUrl": "/assets/hinh-2x/p071-h06.png",
        "width": 208,
        "height": 316
      },
      {
        "assetId": "p071-h07",
        "displayId": "H0333",
        "pdfPage": 71,
        "imgUrl": "/assets/hinh/p071-h07.png",
        "img2xUrl": "/assets/hinh-2x/p071-h07.png",
        "width": 221,
        "height": 321
      },
      {
        "assetId": "p071-h08",
        "displayId": "H0334",
        "pdfPage": 71,
        "imgUrl": "/assets/hinh/p071-h08.png",
        "img2xUrl": "/assets/hinh-2x/p071-h08.png",
        "width": 248,
        "height": 319
      },
      {
        "assetId": "p072-h01",
        "displayId": "H0335",
        "pdfPage": 72,
        "imgUrl": "/assets/hinh/p072-h01.png",
        "img2xUrl": "/assets/hinh-2x/p072-h01.png",
        "width": 256,
        "height": 314
      },
      {
        "assetId": "p072-h02",
        "displayId": "H0336",
        "pdfPage": 72,
        "imgUrl": "/assets/hinh/p072-h02.png",
        "img2xUrl": "/assets/hinh-2x/p072-h02.png",
        "width": 227,
        "height": 315
      },
      {
        "assetId": "p072-h03",
        "displayId": "H0337",
        "pdfPage": 72,
        "imgUrl": "/assets/hinh/p072-h03.png",
        "img2xUrl": "/assets/hinh-2x/p072-h03.png",
        "width": 237,
        "height": 316
      },
      {
        "assetId": "p072-h04",
        "displayId": "H0338",
        "pdfPage": 72,
        "imgUrl": "/assets/hinh/p072-h04.png",
        "img2xUrl": "/assets/hinh-2x/p072-h04.png",
        "width": 252,
        "height": 320
      },
      {
        "assetId": "p072-h05",
        "displayId": "H0339",
        "pdfPage": 72,
        "imgUrl": "/assets/hinh/p072-h05.png",
        "img2xUrl": "/assets/hinh-2x/p072-h05.png",
        "width": 260,
        "height": 308
      },
      {
        "assetId": "p072-h06",
        "displayId": "H0340",
        "pdfPage": 72,
        "imgUrl": "/assets/hinh/p072-h06.png",
        "img2xUrl": "/assets/hinh-2x/p072-h06.png",
        "width": 290,
        "height": 360
      },
      {
        "assetId": "p072-h07",
        "displayId": "H0341",
        "pdfPage": 72,
        "imgUrl": "/assets/hinh/p072-h07.png",
        "img2xUrl": "/assets/hinh-2x/p072-h07.png",
        "width": 254,
        "height": 320
      },
      {
        "assetId": "p072-h08",
        "displayId": "H0342",
        "pdfPage": 72,
        "imgUrl": "/assets/hinh/p072-h08.png",
        "img2xUrl": "/assets/hinh-2x/p072-h08.png",
        "width": 244,
        "height": 317
      },
      {
        "assetId": "p073-h01",
        "displayId": "H0343",
        "pdfPage": 73,
        "imgUrl": "/assets/hinh/p073-h01.png",
        "img2xUrl": "/assets/hinh-2x/p073-h01.png",
        "width": 227,
        "height": 313
      },
      {
        "assetId": "p073-h02",
        "displayId": "H0344",
        "pdfPage": 73,
        "imgUrl": "/assets/hinh/p073-h02.png",
        "img2xUrl": "/assets/hinh-2x/p073-h02.png",
        "width": 236,
        "height": 309
      },
      {
        "assetId": "p073-h03",
        "displayId": "H0345",
        "pdfPage": 73,
        "imgUrl": "/assets/hinh/p073-h03.png",
        "img2xUrl": "/assets/hinh-2x/p073-h03.png",
        "width": 234,
        "height": 320
      },
      {
        "assetId": "p073-h04",
        "displayId": "H0346",
        "pdfPage": 73,
        "imgUrl": "/assets/hinh/p073-h04.png",
        "img2xUrl": "/assets/hinh-2x/p073-h04.png",
        "width": 257,
        "height": 318
      },
      {
        "assetId": "p073-h05",
        "displayId": "H0347",
        "pdfPage": 73,
        "imgUrl": "/assets/hinh/p073-h05.png",
        "img2xUrl": "/assets/hinh-2x/p073-h05.png",
        "width": 236,
        "height": 315
      },
      {
        "assetId": "p073-h06",
        "displayId": "H0348",
        "pdfPage": 73,
        "imgUrl": "/assets/hinh/p073-h06.png",
        "img2xUrl": "/assets/hinh-2x/p073-h06.png",
        "width": 221,
        "height": 315
      },
      {
        "assetId": "p074-h01",
        "displayId": "H0349",
        "pdfPage": 74,
        "imgUrl": "/assets/hinh/p074-h01.png",
        "img2xUrl": "/assets/hinh-2x/p074-h01.png",
        "width": 233,
        "height": 305
      },
      {
        "assetId": "p074-h02",
        "displayId": "H0350",
        "pdfPage": 74,
        "imgUrl": "/assets/hinh/p074-h02.png",
        "img2xUrl": "/assets/hinh-2x/p074-h02.png",
        "width": 256,
        "height": 314
      },
      {
        "assetId": "p074-h03",
        "displayId": "H0351",
        "pdfPage": 74,
        "imgUrl": "/assets/hinh/p074-h03.png",
        "img2xUrl": "/assets/hinh-2x/p074-h03.png",
        "width": 244,
        "height": 309
      },
      {
        "assetId": "p074-h04",
        "displayId": "H0352",
        "pdfPage": 74,
        "imgUrl": "/assets/hinh/p074-h04.png",
        "img2xUrl": "/assets/hinh-2x/p074-h04.png",
        "width": 250,
        "height": 319
      },
      {
        "assetId": "p074-h05",
        "displayId": "H0353",
        "pdfPage": 74,
        "imgUrl": "/assets/hinh/p074-h05.png",
        "img2xUrl": "/assets/hinh-2x/p074-h05.png",
        "width": 252,
        "height": 315
      },
      {
        "assetId": "p074-h06",
        "displayId": "H0354",
        "pdfPage": 74,
        "imgUrl": "/assets/hinh/p074-h06.png",
        "img2xUrl": "/assets/hinh-2x/p074-h06.png",
        "width": 248,
        "height": 315
      },
      {
        "assetId": "p074-h07",
        "displayId": "H0355",
        "pdfPage": 74,
        "imgUrl": "/assets/hinh/p074-h07.png",
        "img2xUrl": "/assets/hinh-2x/p074-h07.png",
        "width": 233,
        "height": 312
      }
    ],
    "motions": [
      {
        "id": "bai-13-m-1",
        "stepNo": "1",
        "assetId": "p065-h01",
        "displayId": "H0279",
        "pdfPage": 65,
        "imgUrl": "/assets/hinh/p065-h01.png",
        "img2xUrl": "/assets/hinh-2x/p065-h01.png",
        "width": 232,
        "height": 318,
        "desc": "CHIÊU 50: A: Hai tay đấm song ong vào ngực B. : Hai chân đứng kiểm ương, hai bàn tay ngửa, ánh hất 2 tay A lên trên."
      },
      {
        "id": "bai-13-m-2",
        "stepNo": "2",
        "assetId": "p065-h02",
        "displayId": "H0280",
        "pdfPage": 65,
        "imgUrl": "/assets/hinh/p065-h02.png",
        "img2xUrl": "/assets/hinh-2x/p065-h02.png",
        "width": 247,
        "height": 319,
        "desc": "CHIÊU 2: A: Hai tay đấm song song xuống bụng B."
      },
      {
        "id": "bai-13-m-3",
        "stepNo": "3",
        "assetId": "p065-h03",
        "displayId": "H0281",
        "pdfPage": 65,
        "imgUrl": "/assets/hinh/p065-h03.png",
        "img2xUrl": "/assets/hinh-2x/p065-h03.png",
        "width": 211,
        "height": 318,
        "desc": "CHIÊU 6;: A: Tay trái đấm thẳng ngực B."
      },
      {
        "id": "bai-13-m-4",
        "stepNo": "4",
        "assetId": "p065-h04",
        "displayId": "H0282",
        "pdfPage": 65,
        "imgUrl": "/assets/hinh/p065-h04.png",
        "img2xUrl": "/assets/hinh-2x/p065-h04.png",
        "width": 205,
        "height": 317,
        "desc": "CHIÊU 50: Quay sang phải, tay trái đấm thẳng vào bụng A."
      },
      {
        "id": "bai-13-m-5",
        "stepNo": "5",
        "assetId": "p065-h05",
        "displayId": "H0283",
        "pdfPage": 65,
        "imgUrl": "/assets/hinh/p065-h05.png",
        "img2xUrl": "/assets/hinh-2x/p065-h05.png",
        "width": 249,
        "height": 317,
        "desc": "CHIÊU 6;: B: Tay trái đè nhẹ, tay phải hạ xuống theo chiều thăng đứng, bàn tay gập lại kéo tay A xuống."
      },
      {
        "id": "bai-13-m-6",
        "stepNo": "6",
        "assetId": "p065-h06",
        "displayId": "H0284",
        "pdfPage": 65,
        "imgUrl": "/assets/hinh/p065-h06.png",
        "img2xUrl": "/assets/hinh-2x/p065-h06.png",
        "width": 259,
        "height": 314,
        "desc": "CHIÊU 6;: A: Tay trái đấm thẳng ngực B."
      },
      {
        "id": "bai-13-m-7",
        "stepNo": "7",
        "assetId": "p065-h07",
        "displayId": "H0285",
        "pdfPage": 65,
        "imgUrl": "/assets/hinh/p065-h07.png",
        "img2xUrl": "/assets/hinh-2x/p065-h07.png",
        "width": 239,
        "height": 317,
        "desc": "CHIÊU 6;: B: Tay trái thủ, tay phải đánh chưởng thăng vào ngực A."
      },
      {
        "id": "bai-13-m-8",
        "stepNo": "8",
        "assetId": "p065-h08",
        "displayId": "H0286",
        "pdfPage": 65,
        "imgUrl": "/assets/hinh/p065-h08.png",
        "img2xUrl": "/assets/hinh-2x/p065-h08.png",
        "width": 251,
        "height": 317,
        "desc": "CHIÊU 5;: A:Taytráiđấmxuống b bụng B. (t B:Tay trái thủ đỡđấm,tay A phải đánh chưởng vào | mạng sườn A. P Ế, tr Tương tự chiêu 5, tập với ứ tay bên kia. đ"
      },
      {
        "id": "bai-13-m-9",
        "stepNo": "9",
        "assetId": "p066-h01",
        "displayId": "H0287",
        "pdfPage": 66,
        "imgUrl": "/assets/hinh/p066-h01.png",
        "img2xUrl": "/assets/hinh-2x/p066-h01.png",
        "width": 209,
        "height": 321,
        "desc": "CHIÊU 9: A: Tay trái đấm thẳng vào mặt B. B: Xoay người, đánh 2 tay từ trên xuống: tay trái đánh vào cô tay, tay phải bổ vào mặt, cẳng tay đánh vào cánh tay A."
      },
      {
        "id": "bai-13-m-10",
        "stepNo": "10",
        "assetId": "p066-h02",
        "displayId": "H0288",
        "pdfPage": 66,
        "imgUrl": "/assets/hinh/p066-h02.png",
        "img2xUrl": "/assets/hinh-2x/p066-h02.png",
        "width": 219,
        "height": 315,
        "desc": "CHIÊU 10: A: Tay trái đấm thẳng vào mặt B. B: Hai bàn tay xà, tay trái đỡ cổ tay, tay phải chọc vào mặt, căng tay đánh vào tay A.(Từ sau ra trước)"
      },
      {
        "id": "bai-13-m-11",
        "stepNo": "11",
        "assetId": "p066-h03",
        "displayId": "H0289",
        "pdfPage": 66,
        "imgUrl": "/assets/hinh/p066-h03.png",
        "img2xUrl": "/assets/hinh-2x/p066-h03.png",
        "width": 256,
        "height": 317,
        "desc": "CHIÊU 15: A: Tay trái đấm vào mặt B. B: Xoay người, tay trái đỡ bằng cạnh trong bàn tay, tay phải đánh bằng lòng bàn tay (chướng) từ dưới lên trên."
      },
      {
        "id": "bai-13-m-12",
        "stepNo": "12",
        "assetId": "p066-h04",
        "displayId": "H0290",
        "pdfPage": 66,
        "imgUrl": "/assets/hinh/p066-h04.png",
        "img2xUrl": "/assets/hinh-2x/p066-h04.png",
        "width": 256,
        "height": 317,
        "desc": "CHIÊU 91: A: Tay trái đấm vào ung B. : Xoay người, tay trái nắm tay, tay phải nắm khuỷu 'y Á kéo mạnh. Chân phải n gối vào phía sau (thận)"
      },
      {
        "id": "bai-13-m-13",
        "stepNo": "13",
        "assetId": "p066-h05",
        "displayId": "H0291",
        "pdfPage": 66,
        "imgUrl": "/assets/hinh/p066-h05.png",
        "img2xUrl": "/assets/hinh-2x/p066-h05.png",
        "width": 253,
        "height": 317,
        "desc": "CHIÊU 17: |: A: Tay trái đấm vào bụng B."
      },
      {
        "id": "bai-13-m-14",
        "stepNo": "14",
        "assetId": "p066-h06",
        "displayId": "H0292",
        "pdfPage": 66,
        "imgUrl": "/assets/hinh/p066-h06.png",
        "img2xUrl": "/assets/hinh-2x/p066-h06.png",
        "width": 231,
        "height": 317,
        "desc": "CHIÊU 15: A: Tay trái đấm vào | mặt B. B: Hai tay dựng thắng đứng, đồng thời với xoay thân. Tay trái kê vào cô tay, tay phải đè vào khớp khuỷu tay A. Bẻ tay A."
      },
      {
        "id": "bai-13-m-15",
        "stepNo": "15",
        "assetId": "p066-h07",
        "displayId": "H0293",
        "pdfPage": 66,
        "imgUrl": "/assets/hinh/p066-h07.png",
        "img2xUrl": "/assets/hinh-2x/p066-h07.png",
        "width": 247,
        "height": 316,
        "desc": "CHIÊU 19: A; Tay trái đấm xuống oụng B. B: Xoay người, tay trái nắm cổ tay, tay phải năm khuỷu tay A kéo giật về."
      },
      {
        "id": "bai-13-m-16",
        "stepNo": "16",
        "assetId": "p066-h08",
        "displayId": "H0294",
        "pdfPage": 66,
        "imgUrl": "/assets/hinh/p066-h08.png",
        "img2xUrl": "/assets/hinh-2x/p066-h08.png",
        "width": 248,
        "height": 316,
        "desc": "CHIÊU 19: A; Tay trái đấm xuống oụng B. B: Xoay người, tay trái nắm cổ tay, tay phải năm khuỷu tay A kéo giật về."
      },
      {
        "id": "bai-13-m-17",
        "stepNo": "17",
        "assetId": "p067-h01",
        "displayId": "H0295",
        "pdfPage": 67,
        "imgUrl": "/assets/hinh/p067-h01.png",
        "img2xUrl": "/assets/hinh-2x/p067-h01.png",
        "width": 212,
        "height": 314,
        "desc": "CHIÊU 21: A: Tay trái đấm xuống bụng B. B: Xoay người, tay trái nắm cổ tay, tay phải bắt cổ và kéo về."
      },
      {
        "id": "bai-13-m-18",
        "stepNo": "18",
        "assetId": "p067-h02",
        "displayId": "H0296",
        "pdfPage": 67,
        "imgUrl": "/assets/hinh/p067-h02.png",
        "img2xUrl": "/assets/hinh-2x/p067-h02.png",
        "width": 258,
        "height": 314,
        "desc": "CHIÊU 6;: B: Tay trái thủ, tay phải đánh chưởng thăng vào ngực A."
      },
      {
        "id": "bai-13-m-19",
        "stepNo": "19",
        "assetId": "p067-h03",
        "displayId": "H0297",
        "pdfPage": 67,
        "imgUrl": "/assets/hinh/p067-h03.png",
        "img2xUrl": "/assets/hinh-2x/p067-h03.png",
        "width": 242,
        "height": 315,
        "desc": "CHIÊU 25: A: Tay tay trái đấm vào ngực B. B: Xoay người, tay trái kẹp cổ tay A, cảng tay phải đặt song song sát với căng tay A. Đánh cùi chỏ vào khuỷu tay A."
      },
      {
        "id": "bai-13-m-20",
        "stepNo": "20",
        "assetId": "p067-h04",
        "displayId": "H0298",
        "pdfPage": 67,
        "imgUrl": "/assets/hinh/p067-h04.png",
        "img2xUrl": "/assets/hinh-2x/p067-h04.png",
        "width": 243,
        "height": 314,
        "desc": "CHIÊU 27: C: A: Tay phải đấm móc t từ ngoài vào mặt B. B: Xoay người, hai tay dựng đứng, hai bầntaysongsong T đánh vào cổ tay A. t"
      },
      {
        "id": "bai-13-m-21",
        "stepNo": "21",
        "assetId": "p067-h05",
        "displayId": "H0299",
        "pdfPage": 67,
        "imgUrl": "/assets/hinh/p067-h05.png",
        "img2xUrl": "/assets/hinh-2x/p067-h05.png",
        "width": 283,
        "height": 362,
        "desc": "CHIÊU 29: B: A:Taytrái đấm móctừ K ngoài vào mặt B. 3 B: Xoay người, tay phải t dựng thăng đứng đỡ, tay từ"
      },
      {
        "id": "bai-13-m-22",
        "stepNo": "22",
        "assetId": "p067-h06",
        "displayId": "H0300",
        "pdfPage": 67,
        "imgUrl": "/assets/hinh/p067-h06.png",
        "img2xUrl": "/assets/hinh-2x/p067-h06.png",
        "width": 211,
        "height": 315,
        "desc": "CHIÊU 51: B: Tương tự với tay phải đề, tay trái chặt cổ."
      },
      {
        "id": "bai-13-m-23",
        "stepNo": "23",
        "assetId": "p067-h07",
        "displayId": "H0301",
        "pdfPage": 67,
        "imgUrl": "/assets/hinh/p067-h07.png",
        "img2xUrl": "/assets/hinh-2x/p067-h07.png",
        "width": 214,
        "height": 314,
        "desc": "CHIÊU 6;: B: Tay trái đè nhẹ, tay phải hạ xuống theo chiều thăng đứng, bàn tay gập lại kéo tay A xuống."
      },
      {
        "id": "bai-13-m-24",
        "stepNo": "24",
        "assetId": "p067-h08",
        "displayId": "H0302",
        "pdfPage": 67,
        "imgUrl": "/assets/hinh/p067-h08.png",
        "img2xUrl": "/assets/hinh-2x/p067-h08.png",
        "width": 233,
        "height": 317,
        "desc": "CHIÊU 32: B: Tay trái giữ nguyên đè tay A, tay phải đánh chưởng vào ngực A."
      },
      {
        "id": "bai-13-m-25",
        "stepNo": "25",
        "assetId": "p068-h01",
        "displayId": "H0303",
        "pdfPage": 68,
        "imgUrl": "/assets/hinh/p068-h01.png",
        "img2xUrl": "/assets/hinh-2x/p068-h01.png",
        "width": 247,
        "height": 316,
        "desc": "CHIÊU 34: A: Tay phải đấm xuống bụng B. B: Xoay người, hai bàn tay úp, gạt tay đấm của A."
      },
      {
        "id": "bai-13-m-26",
        "stepNo": "26",
        "assetId": "p068-h02",
        "displayId": "H0304",
        "pdfPage": 68,
        "imgUrl": "/assets/hinh/p068-h02.png",
        "img2xUrl": "/assets/hinh-2x/p068-h02.png",
        "width": 256,
        "height": 316,
        "desc": "CHIÊU 34: A: Đấm tiếp tay trái vào bụng B. B: Tay trái đỡ, cẳng tay phải chặn vào căng tay trái của A, đông thời chặt ngang bụng A."
      },
      {
        "id": "bai-13-m-27",
        "stepNo": "27",
        "assetId": "p068-h03",
        "displayId": "H0305",
        "pdfPage": 68,
        "imgUrl": "/assets/hinh/p068-h03.png",
        "img2xUrl": "/assets/hinh-2x/p068-h03.png",
        "width": 249,
        "height": 315,
        "desc": "CHIÊU 36: A: Tay phải đấm móc từ ngoài. B: Xoay người, hai tay dựng đứng hai mặt bàn tay quay ra ngoài đánh vào cổ tay A."
      },
      {
        "id": "bai-13-m-28",
        "stepNo": "28",
        "assetId": "p068-h04",
        "displayId": "H0306",
        "pdfPage": 68,
        "imgUrl": "/assets/hinh/p068-h04.png",
        "img2xUrl": "/assets/hinh-2x/p068-h04.png",
        "width": 239,
        "height": 316,
        "desc": "CHIÊU 34: A: Đấm tiếp tay trái vào bụng B. B: Tay trái đỡ, cẳng tay phải chặn vào căng tay trái của A, đông thời chặt ngang bụng A."
      },
      {
        "id": "bai-13-m-29",
        "stepNo": "29",
        "assetId": "p068-h05",
        "displayId": "H0307",
        "pdfPage": 68,
        "imgUrl": "/assets/hinh/p068-h05.png",
        "img2xUrl": "/assets/hinh-2x/p068-h05.png",
        "width": 243,
        "height": 316,
        "desc": "CHIÊU 38: B: Xoay người, tay"
      },
      {
        "id": "bai-13-m-30",
        "stepNo": "30",
        "assetId": "p068-h06",
        "displayId": "H0308",
        "pdfPage": 68,
        "imgUrl": "/assets/hinh/p068-h06.png",
        "img2xUrl": "/assets/hinh-2x/p068-h06.png",
        "width": 236,
        "height": 317,
        "desc": "CHIÊU 40: A: Tay trái đấm xuống bụng B. B: Xoay người sang phải, tay phải ngửa, tay trái úp, hai tay vuốt tay A."
      },
      {
        "id": "bai-13-m-31",
        "stepNo": "31",
        "assetId": "p068-h07",
        "displayId": "H0309",
        "pdfPage": 68,
        "imgUrl": "/assets/hinh/p068-h07.png",
        "img2xUrl": "/assets/hinh-2x/p068-h07.png",
        "width": 244,
        "height": 316,
        "desc": "CHIÊU 40: B: Tay phải đề tay A, tay trái trượt lên chặt vào cổ A."
      },
      {
        "id": "bai-13-m-32",
        "stepNo": "32",
        "assetId": "p068-h08",
        "displayId": "H0310",
        "pdfPage": 68,
        "imgUrl": "/assets/hinh/p068-h08.png",
        "img2xUrl": "/assets/hinh-2x/p068-h08.png",
        "width": 215,
        "height": 315,
        "desc": "CHIÊU 40: A: Tay trái đấm xuống bụng B. B: Xoay người sang phải, tay phải ngửa, tay trái úp, hai tay vuốt tay A."
      },
      {
        "id": "bai-13-m-33",
        "stepNo": "33",
        "assetId": "p069-h01",
        "displayId": "H0311",
        "pdfPage": 69,
        "imgUrl": "/assets/hinh/p069-h01.png",
        "img2xUrl": "/assets/hinh-2x/p069-h01.png",
        "width": 220,
        "height": 317,
        "desc": "CHIÊU 40: B: Tay phải đề tay A, tay trái trượt lên chặt vào cổ A."
      },
      {
        "id": "bai-13-m-34",
        "stepNo": "34",
        "assetId": "p069-h02",
        "displayId": "H0312",
        "pdfPage": 69,
        "imgUrl": "/assets/hinh/p069-h02.png",
        "img2xUrl": "/assets/hinh-2x/p069-h02.png",
        "width": 258,
        "height": 315,
        "desc": "CHIÊU 42: A: Tay phải đấm vào bụng B. B: Xoay người, hai tay vỗ xuống tay A,"
      },
      {
        "id": "bai-13-m-35",
        "stepNo": "35",
        "assetId": "p069-h03",
        "displayId": "H0313",
        "pdfPage": 69,
        "imgUrl": "/assets/hinh/p069-h03.png",
        "img2xUrl": "/assets/hinh-2x/p069-h03.png",
        "width": 199,
        "height": 314,
        "desc": "CHIÊU 42: A: Tay trái đấm vào bụng B. B: Quay người qua phải, tay trái bằng thủ, tay phải đỡ bằng lưng cổ tay."
      },
      {
        "id": "bai-13-m-36",
        "stepNo": "36",
        "assetId": "p069-h04",
        "displayId": "H0314",
        "pdfPage": 69,
        "imgUrl": "/assets/hinh/p069-h04.png",
        "img2xUrl": "/assets/hinh-2x/p069-h04.png",
        "width": 246,
        "height": 314,
        "desc": "CHIÊU 42: A: Tay phải đấm vào bụng B. B: Xoay người, hai tay vỗ xuống tay A,"
      },
      {
        "id": "bai-13-m-37",
        "stepNo": "37",
        "assetId": "p069-h05",
        "displayId": "H0315",
        "pdfPage": 69,
        "imgUrl": "/assets/hinh/p069-h05.png",
        "img2xUrl": "/assets/hinh-2x/p069-h05.png",
        "width": 254,
        "height": 316,
        "desc": "CHIÊU 42: B: Tay trái giữ nguyên đề tay đối phương, tay phải đánh chưởng vào ngực A."
      },
      {
        "id": "bai-13-m-38",
        "stepNo": "38",
        "assetId": "p069-h06",
        "displayId": "H0316",
        "pdfPage": 69,
        "imgUrl": "/assets/hinh/p069-h06.png",
        "img2xUrl": "/assets/hinh-2x/p069-h06.png",
        "width": 247,
        "height": 317,
        "desc": "CHIÊU 48: B: A: Tay trái đấm vào d bụng B. đ"
      },
      {
        "id": "bai-13-m-39",
        "stepNo": "39",
        "assetId": "p069-h07",
        "displayId": "H0317",
        "pdfPage": 69,
        "imgUrl": "/assets/hinh/p069-h07.png",
        "img2xUrl": "/assets/hinh-2x/p069-h07.png",
        "width": 251,
        "height": 314,
        "desc": "CHIÊU 46: h: A: Tay trái đấm lên t mặt B. Ñ B: Xoay người, bàn tay trái dựng lên đỡ đấm, tay phải đấm thốc lên trên. 1"
      },
      {
        "id": "bai-13-m-40",
        "stepNo": "40",
        "assetId": "p069-h08",
        "displayId": "H0318",
        "pdfPage": 69,
        "imgUrl": "/assets/hinh/p069-h08.png",
        "img2xUrl": "/assets/hinh-2x/p069-h08.png",
        "width": 258,
        "height": 315,
        "desc": "CHIÊU 48: B: A: Tay trái đấm vào d bụng B. đ"
      },
      {
        "id": "bai-13-m-41",
        "stepNo": "41",
        "assetId": "p070-h01",
        "displayId": "H0319",
        "pdfPage": 70,
        "imgUrl": "/assets/hinh/p070-h01.png",
        "img2xUrl": "/assets/hinh-2x/p070-h01.png",
        "width": 218,
        "height": 315,
        "desc": "CHIÊU 50: B: 1-Xoay người, tay trái thủ, tay phải đấm thăng vào bụng A:"
      },
      {
        "id": "bai-13-m-42",
        "stepNo": "42",
        "assetId": "p070-h02",
        "displayId": "H0320",
        "pdfPage": 70,
        "imgUrl": "/assets/hinh/p070-h02.png",
        "img2xUrl": "/assets/hinh-2x/p070-h02.png",
        "width": 224,
        "height": 317,
        "desc": "CHIÊU 50: Quay sang phải, tay trái đấm thẳng vào bụng A."
      },
      {
        "id": "bai-13-m-43",
        "stepNo": "43",
        "assetId": "p070-h03",
        "displayId": "H0321",
        "pdfPage": 70,
        "imgUrl": "/assets/hinh/p070-h03.png",
        "img2xUrl": "/assets/hinh-2x/p070-h03.png",
        "width": 224,
        "height": 316,
        "desc": "CHIÊU 50: B: 1-Xoay người, tay trái thủ, tay phải đấm thăng vào bụng A:"
      },
      {
        "id": "bai-13-m-44",
        "stepNo": "44",
        "assetId": "p070-h04",
        "displayId": "H0322",
        "pdfPage": 70,
        "imgUrl": "/assets/hinh/p070-h04.png",
        "img2xUrl": "/assets/hinh-2x/p070-h04.png",
        "width": 264,
        "height": 314,
        "desc": "CHIÊU 53: À: Tay phải đấm mặt B B: Xoay người, bàn tay trái dựng lên đỡ đấm, tay phải võng ra ngoài, bàn tay báo đánh ngược vào huyệt thái dương A. Tương tự chiêu 53, tập với tay bên kia."
      },
      {
        "id": "bai-13-m-45",
        "stepNo": "45",
        "assetId": "p070-h05",
        "displayId": "H0323",
        "pdfPage": 70,
        "imgUrl": "/assets/hinh/p070-h05.png",
        "img2xUrl": "/assets/hinh-2x/p070-h05.png",
        "width": 221,
        "height": 316,
        "desc": "CHIÊU 53: À: Tay phải đấm mặt B B: Xoay người, bàn tay trái dựng lên đỡ đấm, tay phải võng ra ngoài, bàn tay báo đánh ngược vào huyệt thái dương A. Tương tự chiêu 53, tập với tay bên kia."
      },
      {
        "id": "bai-13-m-46",
        "stepNo": "46",
        "assetId": "p070-h06",
        "displayId": "H0324",
        "pdfPage": 70,
        "imgUrl": "/assets/hinh/p070-h06.png",
        "img2xUrl": "/assets/hinh-2x/p070-h06.png",
        "width": 247,
        "height": 316,
        "desc": "CHIÊU 55: A: Tay trái đấm vào ngực B. B: Xoay người, bàn tay trái để thẳng, kẹp cổ tay A. Bàn tay phải đánh chưởng vào khớp khuỷu A."
      },
      {
        "id": "bai-13-m-47",
        "stepNo": "47",
        "assetId": "p070-h07",
        "displayId": "H0325",
        "pdfPage": 70,
        "imgUrl": "/assets/hinh/p070-h07.png",
        "img2xUrl": "/assets/hinh-2x/p070-h07.png",
        "width": 245,
        "height": 316,
        "desc": "CHIÊU 57: .: A:Tay trái đấm bụngB. [ B:Xoay người,haibàn tay t ôm lấy cẳng tay trái của ỏ đối phương đẩy mạnh ra H phíatrước,chân cần vững. t"
      },
      {
        "id": "bai-13-m-48",
        "stepNo": "48",
        "assetId": "p070-h08",
        "displayId": "H0326",
        "pdfPage": 70,
        "imgUrl": "/assets/hinh/p070-h08.png",
        "img2xUrl": "/assets/hinh-2x/p070-h08.png",
        "width": 203,
        "height": 314,
        "desc": "CHIÊU 61: A: Hai tay đấm song song vào ngực B. B: Chân đứng thẳng kiềm dương, hai tay dựng đứng, hai căng tay kẹp hai căng tay A vừa vuốt theo vừa kéo về (bụng hóp)."
      },
      {
        "id": "bai-13-m-49",
        "stepNo": "49",
        "assetId": "p071-h01",
        "displayId": "H0327",
        "pdfPage": 71,
        "imgUrl": "/assets/hinh/p071-h01.png",
        "img2xUrl": "/assets/hinh-2x/p071-h01.png",
        "width": 224,
        "height": 316,
        "desc": "CHIÊU 61: A: Hai tay đấm song song vào ngực B. B: Chân đứng thẳng kiềm dương, hai tay dựng đứng, hai căng tay kẹp hai căng tay A vừa vuốt theo vừa kéo về (bụng hóp)."
      },
      {
        "id": "bai-13-m-50",
        "stepNo": "50",
        "assetId": "p071-h02",
        "displayId": "H0328",
        "pdfPage": 71,
        "imgUrl": "/assets/hinh/p071-h02.png",
        "img2xUrl": "/assets/hinh-2x/p071-h02.png",
        "width": 214,
        "height": 314,
        "desc": "CHIÊU 61: B: Quay ngược hai cẳng tay về phía A, đầy mạnh."
      },
      {
        "id": "bai-13-m-51",
        "stepNo": "51",
        "assetId": "p071-h03",
        "displayId": "H0329",
        "pdfPage": 71,
        "imgUrl": "/assets/hinh/p071-h03.png",
        "img2xUrl": "/assets/hinh-2x/p071-h03.png",
        "width": 253,
        "height": 317,
        "desc": "CHIÊU 61: A: Tay trái đấm vào ngực B. B: Xoay người, tay trái quặp vào cổ tay A, tay phải nắm đánh ngược lên khuỷu tay, đánh gãy tay A."
      },
      {
        "id": "bai-13-m-52",
        "stepNo": "52",
        "assetId": "p071-h04",
        "displayId": "H0330",
        "pdfPage": 71,
        "imgUrl": "/assets/hinh/p071-h04.png",
        "img2xUrl": "/assets/hinh-2x/p071-h04.png",
        "width": 234,
        "height": 319,
        "desc": "CHIÊU 64: A: Tay trái đấm lên mặtB. B: Xoay người, tay trái thủ trước bụng, tay phải dựng lên, bàn tay xà thu về gạt tay A."
      },
      {
        "id": "bai-13-m-53",
        "stepNo": "53",
        "assetId": "p071-h05",
        "displayId": "H0331",
        "pdfPage": 71,
        "imgUrl": "/assets/hinh/p071-h05.png",
        "img2xUrl": "/assets/hinh-2x/p071-h05.png",
        "width": 234,
        "height": 315,
        "desc": "CHIÊU 64: A: Tay phải đấm tiếp xuông bụng B. B: Tay trái đánh vào tay đấm, tay phải đánh chưởng vào ngực A. Tương tự chiêu 64, tập với tay bên kia."
      },
      {
        "id": "bai-13-m-54",
        "stepNo": "54",
        "assetId": "p071-h06",
        "displayId": "H0332",
        "pdfPage": 71,
        "imgUrl": "/assets/hinh/p071-h06.png",
        "img2xUrl": "/assets/hinh-2x/p071-h06.png",
        "width": 208,
        "height": 316,
        "desc": "CHIÊU 66: A: Hai tay đấm cùng lúc, tay phải đấm vào : ngực,taytráđấmxuống bụng B. ! B:Xoayngười,haibàntay Ï dụnglên,đánh bằngcạnh t bàn tay vào hai cổ tay A. 1"
      },
      {
        "id": "bai-13-m-55",
        "stepNo": "55",
        "assetId": "p071-h07",
        "displayId": "H0333",
        "pdfPage": 71,
        "imgUrl": "/assets/hinh/p071-h07.png",
        "img2xUrl": "/assets/hinh-2x/p071-h07.png",
        "width": 221,
        "height": 321,
        "desc": "CHIÊU 69: A: Tay trái đấm ngang bụng B. B: Xoay người, bàn tay trái dựng lên thủ trước ngực. Tay phải đánh cùi trỏ xuống cổ tay A."
      },
      {
        "id": "bai-13-m-56",
        "stepNo": "56",
        "assetId": "p071-h08",
        "displayId": "H0334",
        "pdfPage": 71,
        "imgUrl": "/assets/hinh/p071-h08.png",
        "img2xUrl": "/assets/hinh-2x/p071-h08.png",
        "width": 248,
        "height": 319,
        "desc": "CHIÊU 69: B: Tay trái ép tay A xuống. Tay phải đánh mặt sau quyền vào mặt A.(quậ! ngược)"
      },
      {
        "id": "bai-13-m-57",
        "stepNo": "57",
        "assetId": "p072-h01",
        "displayId": "H0335",
        "pdfPage": 72,
        "imgUrl": "/assets/hinh/p072-h01.png",
        "img2xUrl": "/assets/hinh-2x/p072-h01.png",
        "width": 256,
        "height": 314,
        "desc": "CHIÊU 69: B: Tay trái ép tay A xuống. Tay phải đánh mặt sau quyền vào mặt A.(quậ! ngược)"
      },
      {
        "id": "bai-13-m-58",
        "stepNo": "58",
        "assetId": "p072-h02",
        "displayId": "H0336",
        "pdfPage": 72,
        "imgUrl": "/assets/hinh/p072-h02.png",
        "img2xUrl": "/assets/hinh-2x/p072-h02.png",
        "width": 227,
        "height": 315,
        "desc": "CHIÊU 72: A: Tay phải đấm vào ngực B. B: Xoay người, tay trái thủ trước mặt, tay phải dựng lên dùng cùi chỏ đánh sang trái vào tay đấm của A."
      },
      {
        "id": "bai-13-m-59",
        "stepNo": "59",
        "assetId": "p072-h03",
        "displayId": "H0337",
        "pdfPage": 72,
        "imgUrl": "/assets/hinh/p072-h03.png",
        "img2xUrl": "/assets/hinh-2x/p072-h03.png",
        "width": 237,
        "height": 316,
        "desc": "CHIÊU 72: B: Tay trái ép tay đấm A xuống. Tay phải đánh mặt sau quyền vào mặt A.(quật ngược) Tương tự chiêu 72, tập với tay bên kia."
      },
      {
        "id": "bai-13-m-60",
        "stepNo": "60",
        "assetId": "p072-h04",
        "displayId": "H0338",
        "pdfPage": 72,
        "imgUrl": "/assets/hinh/p072-h04.png",
        "img2xUrl": "/assets/hinh-2x/p072-h04.png",
        "width": 252,
        "height": 320,
        "desc": "CHIÊU 74: B: Hạ thấp người,tay ' trái đưa ra cản tay đâm, tay phải đánh hất mu tay vào hạ bộ A."
      },
      {
        "id": "bai-13-m-61",
        "stepNo": "61",
        "assetId": "p072-h05",
        "displayId": "H0339",
        "pdfPage": 72,
        "imgUrl": "/assets/hinh/p072-h05.png",
        "img2xUrl": "/assets/hinh-2x/p072-h05.png",
        "width": 260,
        "height": 308,
        "desc": "CHIÊU 76: A: Tay trái đấm vào mặtB. ! B:Xoay người,taytráithủ trước ngực, tay phải dùng | cùi chỏ hất lên. |"
      },
      {
        "id": "bai-13-m-62",
        "stepNo": "62",
        "assetId": "p072-h06",
        "displayId": "H0340",
        "pdfPage": 72,
        "imgUrl": "/assets/hinh/p072-h06.png",
        "img2xUrl": "/assets/hinh-2x/p072-h06.png",
        "width": 290,
        "height": 360,
        "desc": "CHIÊU 76: B: Hạ thấp người , ay trái đưa lên thủ, tay phải hạ xuống, đánh hất mu tay vào hạ bộ A."
      },
      {
        "id": "bai-13-m-63",
        "stepNo": "63",
        "assetId": "p072-h07",
        "displayId": "H0341",
        "pdfPage": 72,
        "imgUrl": "/assets/hinh/p072-h07.png",
        "img2xUrl": "/assets/hinh-2x/p072-h07.png",
        "width": 254,
        "height": 320,
        "desc": "CHIÊU 76: B: Hạ thấp người , ay trái đưa lên thủ, tay phải hạ xuống, đánh hất mu tay vào hạ bộ A."
      },
      {
        "id": "bai-13-m-64",
        "stepNo": "64",
        "assetId": "p072-h08",
        "displayId": "H0342",
        "pdfPage": 72,
        "imgUrl": "/assets/hinh/p072-h08.png",
        "img2xUrl": "/assets/hinh-2x/p072-h08.png",
        "width": 244,
        "height": 317,
        "desc": "CHIÊU 78: A: Tay trái đấm vào bụng B. B: Xoay người, tay trái co vê thủ, tay phải bàng thủ đỡ tay đấm A."
      },
      {
        "id": "bai-13-m-65",
        "stepNo": "65",
        "assetId": "p073-h01",
        "displayId": "H0343",
        "pdfPage": 73,
        "imgUrl": "/assets/hinh/p073-h01.png",
        "img2xUrl": "/assets/hinh-2x/p073-h01.png",
        "width": 227,
        "height": 313,
        "desc": "CHIÊU 80: A: Tay trái đấm vào bụng B. B: Xoay người, tay trái tóm cổ tay A, vừa kéo vừa xoay, cẳng tay phải đè vào khớp khuỷu tay, bẻ tay A."
      },
      {
        "id": "bai-13-m-66",
        "stepNo": "66",
        "assetId": "p073-h02",
        "displayId": "H0344",
        "pdfPage": 73,
        "imgUrl": "/assets/hinh/p073-h02.png",
        "img2xUrl": "/assets/hinh-2x/p073-h02.png",
        "width": 236,
        "height": 309,
        "desc": "CHIÊU 82: A: Tay phải đấm vào bụng B. B: Xoay người, tay trái nắm cổ tay, tay phải nắm khuu tay A kéo về phía mình, gật đầu đánh vào mắt A."
      },
      {
        "id": "bai-13-m-67",
        "stepNo": "67",
        "assetId": "p073-h03",
        "displayId": "H0345",
        "pdfPage": 73,
        "imgUrl": "/assets/hinh/p073-h03.png",
        "img2xUrl": "/assets/hinh-2x/p073-h03.png",
        "width": 234,
        "height": 320,
        "desc": "CHIÊU 84: A: Hai tay đấm song song. B: Đứng kiểm dương, hai tay đưa xuống gạt hai tay đấm A sang hai bên."
      },
      {
        "id": "bai-13-m-68",
        "stepNo": "68",
        "assetId": "p073-h04",
        "displayId": "H0346",
        "pdfPage": 73,
        "imgUrl": "/assets/hinh/p073-h04.png",
        "img2xUrl": "/assets/hinh-2x/p073-h04.png",
        "width": 257,
        "height": 318,
        "desc": "CHIÊU 85;: B: Hạ thấp người tay trái che bộ hạ, tay phải đưa ra chộp vào bộ hạ A, bóp mạnh và giật về. 1"
      },
      {
        "id": "bai-13-m-69",
        "stepNo": "69",
        "assetId": "p073-h05",
        "displayId": "H0347",
        "pdfPage": 73,
        "imgUrl": "/assets/hinh/p073-h05.png",
        "img2xUrl": "/assets/hinh-2x/p073-h05.png",
        "width": 236,
        "height": 315,
        "desc": "CHIÊU 86:: A: Tay phải đấm vào mặt B. k B:Xoayngười,hai taybắt r chéo đưa lên đỡ."
      },
      {
        "id": "bai-13-m-70",
        "stepNo": "70",
        "assetId": "p073-h06",
        "displayId": "H0348",
        "pdfPage": 73,
        "imgUrl": "/assets/hinh/p073-h06.png",
        "img2xUrl": "/assets/hinh-2x/p073-h06.png",
        "width": 221,
        "height": 315,
        "desc": "CHIÊU 89: 9: A:Tayphảiđấmvào b ung B. B : Xoay người, tay phải l- ắm cổ tay, tay trái nắm t huỷutayAkéovềphía 1 nình.Chân phảilêngối. A"
      },
      {
        "id": "bai-13-m-71",
        "stepNo": "71",
        "assetId": "p074-h01",
        "displayId": "H0349",
        "pdfPage": 74,
        "imgUrl": "/assets/hinh/p074-h01.png",
        "img2xUrl": "/assets/hinh-2x/p074-h01.png",
        "width": 233,
        "height": 305,
        "desc": "CHIÊU 91: A: Tay trái đấm vào ung B. : Xoay người, tay trái nắm tay, tay phải nắm khuỷu 'y Á kéo mạnh. Chân phải n gối vào phía sau (thận)"
      },
      {
        "id": "bai-13-m-72",
        "stepNo": "72",
        "assetId": "p074-h02",
        "displayId": "H0350",
        "pdfPage": 74,
        "imgUrl": "/assets/hinh/p074-h02.png",
        "img2xUrl": "/assets/hinh-2x/p074-h02.png",
        "width": 256,
        "height": 314,
        "desc": "CHIÊU 92: A: Tay phải đấm vào bụng B. B: Xoay người, tay trái nấm cổ tay, tay phải nắm cánh tay A kéo mạnh chân phải dùng gối đánh miết xuống."
      },
      {
        "id": "bai-13-m-73",
        "stepNo": "73",
        "assetId": "p074-h03",
        "displayId": "H0351",
        "pdfPage": 74,
        "imgUrl": "/assets/hinh/p074-h03.png",
        "img2xUrl": "/assets/hinh-2x/p074-h03.png",
        "width": 244,
        "height": 309,
        "desc": "CHIÊU 95: A: Tay trái vào đấm bụng B. B: Xoay người, hai tay nắm cổ tay A dập xuống, chân phải lên gối đánh lên khuỷu tay A (bẻ)."
      },
      {
        "id": "bai-13-m-74",
        "stepNo": "74",
        "assetId": "p074-h04",
        "displayId": "H0352",
        "pdfPage": 74,
        "imgUrl": "/assets/hinh/p074-h04.png",
        "img2xUrl": "/assets/hinh-2x/p074-h04.png",
        "width": 250,
        "height": 319,
        "desc": "CHIÊU 97: A: Tay phải đấm bụng B. B: Hai tay song song đập xuống tay A, chân phải đưa lên đá móc vào hạ bộ A."
      },
      {
        "id": "bai-13-m-75",
        "stepNo": "75",
        "assetId": "p074-h05",
        "displayId": "H0353",
        "pdfPage": 74,
        "imgUrl": "/assets/hinh/p074-h05.png",
        "img2xUrl": "/assets/hinh-2x/p074-h05.png",
        "width": 252,
        "height": 315,
        "desc": "CHIÊU 99: A: Tay trái đấm lên mặt B. B: Hai bàn tav xà xia từ : sau ra trước, chân phải đưa. - lênđámócvàohạbộA. - Ì Tương tự chiếu 99, tập với : bên kia. ]"
      },
      {
        "id": "bai-13-m-76",
        "stepNo": "76",
        "assetId": "p074-h06",
        "displayId": "H0354",
        "pdfPage": 74,
        "imgUrl": "/assets/hinh/p074-h06.png",
        "img2xUrl": "/assets/hinh-2x/p074-h06.png",
        "width": 248,
        "height": 315,
        "desc": "CHIÊU 101: A: Tay trái đấm mặt. ' B: Tay trái đỡ đấm bằng cạnh ngoài bàn tay, tay phải đánh bằng lòng bàn tay, chân phải đưa lên đá F móc vào hạ bộ A. Ị"
      },
      {
        "id": "bai-13-m-77",
        "stepNo": "77",
        "assetId": "p074-h07",
        "displayId": "H0355",
        "pdfPage": 74,
        "imgUrl": "/assets/hinh/p074-h07.png",
        "img2xUrl": "/assets/hinh-2x/p074-h07.png",
        "width": 233,
        "height": 312,
        "desc": "CHIÊU 103: A: Tay trái đấm mặt B. 3: Tay trái thẳng đứng hạ cuống quặp cổ tay A, tay Shải hất từ dưới lên đánh rào khuỷu tay A, đá móc vào hạ bộ A."
      }
    ],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-14",
    "title": "Bài 108 tiến lùi",
    "groupId": "quyen-tay-khong",
    "bookOrder": 14,
    "contentType": "practice_or_mixed",
    "pdfPages": [
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82
    ],
    "pageRange": "Trang PDF 75 – 82",
    "assetCount": 73,
    "assets": [
      {
        "assetId": "p075-h01",
        "displayId": "H0356",
        "pdfPage": 75,
        "imgUrl": "/assets/hinh/p075-h01.png",
        "img2xUrl": "/assets/hinh-2x/p075-h01.png",
        "width": 165,
        "height": 382
      },
      {
        "assetId": "p075-h02",
        "displayId": "H0357",
        "pdfPage": 75,
        "imgUrl": "/assets/hinh/p075-h02.png",
        "img2xUrl": "/assets/hinh-2x/p075-h02.png",
        "width": 122,
        "height": 336
      },
      {
        "assetId": "p075-h03",
        "displayId": "H0358",
        "pdfPage": 75,
        "imgUrl": "/assets/hinh/p075-h03.png",
        "img2xUrl": "/assets/hinh-2x/p075-h03.png",
        "width": 138,
        "height": 340
      },
      {
        "assetId": "p075-h04",
        "displayId": "H0359",
        "pdfPage": 75,
        "imgUrl": "/assets/hinh/p075-h04.png",
        "img2xUrl": "/assets/hinh-2x/p075-h04.png",
        "width": 168,
        "height": 341
      },
      {
        "assetId": "p075-h05",
        "displayId": "H0360",
        "pdfPage": 75,
        "imgUrl": "/assets/hinh/p075-h05.png",
        "img2xUrl": "/assets/hinh-2x/p075-h05.png",
        "width": 219,
        "height": 382
      },
      {
        "assetId": "p075-h06",
        "displayId": "H0361",
        "pdfPage": 75,
        "imgUrl": "/assets/hinh/p075-h06.png",
        "img2xUrl": "/assets/hinh-2x/p075-h06.png",
        "width": 235,
        "height": 382
      },
      {
        "assetId": "p075-h07",
        "displayId": "H0362",
        "pdfPage": 75,
        "imgUrl": "/assets/hinh/p075-h07.png",
        "img2xUrl": "/assets/hinh-2x/p075-h07.png",
        "width": 279,
        "height": 382
      },
      {
        "assetId": "p075-h08",
        "displayId": "H0363",
        "pdfPage": 75,
        "imgUrl": "/assets/hinh/p075-h08.png",
        "img2xUrl": "/assets/hinh-2x/p075-h08.png",
        "width": 137,
        "height": 339
      },
      {
        "assetId": "p075-h09",
        "displayId": "H0364",
        "pdfPage": 75,
        "imgUrl": "/assets/hinh/p075-h09.png",
        "img2xUrl": "/assets/hinh-2x/p075-h09.png",
        "width": 133,
        "height": 340
      },
      {
        "assetId": "p076-h01",
        "displayId": "H0365",
        "pdfPage": 76,
        "imgUrl": "/assets/hinh/p076-h01.png",
        "img2xUrl": "/assets/hinh-2x/p076-h01.png",
        "width": 238,
        "height": 383
      },
      {
        "assetId": "p076-h02",
        "displayId": "H0366",
        "pdfPage": 76,
        "imgUrl": "/assets/hinh/p076-h02.png",
        "img2xUrl": "/assets/hinh-2x/p076-h02.png",
        "width": 236,
        "height": 383
      },
      {
        "assetId": "p076-h03",
        "displayId": "H0367",
        "pdfPage": 76,
        "imgUrl": "/assets/hinh/p076-h03.png",
        "img2xUrl": "/assets/hinh-2x/p076-h03.png",
        "width": 138,
        "height": 338
      },
      {
        "assetId": "p076-h04",
        "displayId": "H0368",
        "pdfPage": 76,
        "imgUrl": "/assets/hinh/p076-h04.png",
        "img2xUrl": "/assets/hinh-2x/p076-h04.png",
        "width": 146,
        "height": 339
      },
      {
        "assetId": "p076-h05",
        "displayId": "H0369",
        "pdfPage": 76,
        "imgUrl": "/assets/hinh/p076-h05.png",
        "img2xUrl": "/assets/hinh-2x/p076-h05.png",
        "width": 120,
        "height": 339
      },
      {
        "assetId": "p076-h06",
        "displayId": "H0370",
        "pdfPage": 76,
        "imgUrl": "/assets/hinh/p076-h06.png",
        "img2xUrl": "/assets/hinh-2x/p076-h06.png",
        "width": 175,
        "height": 383
      },
      {
        "assetId": "p076-h07",
        "displayId": "H0371",
        "pdfPage": 76,
        "imgUrl": "/assets/hinh/p076-h07.png",
        "img2xUrl": "/assets/hinh-2x/p076-h07.png",
        "width": 210,
        "height": 340
      },
      {
        "assetId": "p076-h08",
        "displayId": "H0372",
        "pdfPage": 76,
        "imgUrl": "/assets/hinh/p076-h08.png",
        "img2xUrl": "/assets/hinh-2x/p076-h08.png",
        "width": 278,
        "height": 382
      },
      {
        "assetId": "p076-h09",
        "displayId": "H0373",
        "pdfPage": 76,
        "imgUrl": "/assets/hinh/p076-h09.png",
        "img2xUrl": "/assets/hinh-2x/p076-h09.png",
        "width": 120,
        "height": 299
      },
      {
        "assetId": "p077-h01",
        "displayId": "H0374",
        "pdfPage": 77,
        "imgUrl": "/assets/hinh/p077-h01.png",
        "img2xUrl": "/assets/hinh-2x/p077-h01.png",
        "width": 231,
        "height": 366
      },
      {
        "assetId": "p077-h02",
        "displayId": "H0375",
        "pdfPage": 77,
        "imgUrl": "/assets/hinh/p077-h02.png",
        "img2xUrl": "/assets/hinh-2x/p077-h02.png",
        "width": 116,
        "height": 340
      },
      {
        "assetId": "p077-h03",
        "displayId": "H0376",
        "pdfPage": 77,
        "imgUrl": "/assets/hinh/p077-h03.png",
        "img2xUrl": "/assets/hinh-2x/p077-h03.png",
        "width": 176,
        "height": 339
      },
      {
        "assetId": "p077-h04",
        "displayId": "H0377",
        "pdfPage": 77,
        "imgUrl": "/assets/hinh/p077-h04.png",
        "img2xUrl": "/assets/hinh-2x/p077-h04.png",
        "width": 246,
        "height": 382
      },
      {
        "assetId": "p077-h05",
        "displayId": "H0378",
        "pdfPage": 77,
        "imgUrl": "/assets/hinh/p077-h05.png",
        "img2xUrl": "/assets/hinh-2x/p077-h05.png",
        "width": 130,
        "height": 342
      },
      {
        "assetId": "p077-h06",
        "displayId": "H0379",
        "pdfPage": 77,
        "imgUrl": "/assets/hinh/p077-h06.png",
        "img2xUrl": "/assets/hinh-2x/p077-h06.png",
        "width": 132,
        "height": 340
      },
      {
        "assetId": "p077-h07",
        "displayId": "H0380",
        "pdfPage": 77,
        "imgUrl": "/assets/hinh/p077-h07.png",
        "img2xUrl": "/assets/hinh-2x/p077-h07.png",
        "width": 147,
        "height": 342
      },
      {
        "assetId": "p077-h08",
        "displayId": "H0381",
        "pdfPage": 77,
        "imgUrl": "/assets/hinh/p077-h08.png",
        "img2xUrl": "/assets/hinh-2x/p077-h08.png",
        "width": 116,
        "height": 338
      },
      {
        "assetId": "p077-h09",
        "displayId": "H0382",
        "pdfPage": 77,
        "imgUrl": "/assets/hinh/p077-h09.png",
        "img2xUrl": "/assets/hinh-2x/p077-h09.png",
        "width": 199,
        "height": 384
      },
      {
        "assetId": "p078-h01",
        "displayId": "H0383",
        "pdfPage": 78,
        "imgUrl": "/assets/hinh/p078-h01.png",
        "img2xUrl": "/assets/hinh-2x/p078-h01.png",
        "width": 156,
        "height": 339
      },
      {
        "assetId": "p078-h02",
        "displayId": "H0384",
        "pdfPage": 78,
        "imgUrl": "/assets/hinh/p078-h02.png",
        "img2xUrl": "/assets/hinh-2x/p078-h02.png",
        "width": 242,
        "height": 383
      },
      {
        "assetId": "p078-h03",
        "displayId": "H0385",
        "pdfPage": 78,
        "imgUrl": "/assets/hinh/p078-h03.png",
        "img2xUrl": "/assets/hinh-2x/p078-h03.png",
        "width": 162,
        "height": 339
      },
      {
        "assetId": "p078-h04",
        "displayId": "H0386",
        "pdfPage": 78,
        "imgUrl": "/assets/hinh/p078-h04.png",
        "img2xUrl": "/assets/hinh-2x/p078-h04.png",
        "width": 242,
        "height": 383
      },
      {
        "assetId": "p078-h05",
        "displayId": "H0387",
        "pdfPage": 78,
        "imgUrl": "/assets/hinh/p078-h05.png",
        "img2xUrl": "/assets/hinh-2x/p078-h05.png",
        "width": 237,
        "height": 383
      },
      {
        "assetId": "p078-h06",
        "displayId": "H0388",
        "pdfPage": 78,
        "imgUrl": "/assets/hinh/p078-h06.png",
        "img2xUrl": "/assets/hinh-2x/p078-h06.png",
        "width": 131,
        "height": 338
      },
      {
        "assetId": "p078-h07",
        "displayId": "H0389",
        "pdfPage": 78,
        "imgUrl": "/assets/hinh/p078-h07.png",
        "img2xUrl": "/assets/hinh-2x/p078-h07.png",
        "width": 219,
        "height": 366
      },
      {
        "assetId": "p078-h08",
        "displayId": "H0390",
        "pdfPage": 78,
        "imgUrl": "/assets/hinh/p078-h08.png",
        "img2xUrl": "/assets/hinh-2x/p078-h08.png",
        "width": 285,
        "height": 382
      },
      {
        "assetId": "p078-h09",
        "displayId": "H0391",
        "pdfPage": 78,
        "imgUrl": "/assets/hinh/p078-h09.png",
        "img2xUrl": "/assets/hinh-2x/p078-h09.png",
        "width": 210,
        "height": 383
      },
      {
        "assetId": "p078-h10",
        "displayId": "H0392",
        "pdfPage": 78,
        "imgUrl": "/assets/hinh/p078-h10.png",
        "img2xUrl": "/assets/hinh-2x/p078-h10.png",
        "width": 136,
        "height": 339
      },
      {
        "assetId": "p079-h01",
        "displayId": "H0393",
        "pdfPage": 79,
        "imgUrl": "/assets/hinh/p079-h01.png",
        "img2xUrl": "/assets/hinh-2x/p079-h01.png",
        "width": 177,
        "height": 342
      },
      {
        "assetId": "p079-h02",
        "displayId": "H0394",
        "pdfPage": 79,
        "imgUrl": "/assets/hinh/p079-h02.png",
        "img2xUrl": "/assets/hinh-2x/p079-h02.png",
        "width": 194,
        "height": 381
      },
      {
        "assetId": "p079-h03",
        "displayId": "H0395",
        "pdfPage": 79,
        "imgUrl": "/assets/hinh/p079-h03.png",
        "img2xUrl": "/assets/hinh-2x/p079-h03.png",
        "width": 148,
        "height": 337
      },
      {
        "assetId": "p079-h04",
        "displayId": "H0396",
        "pdfPage": 79,
        "imgUrl": "/assets/hinh/p079-h04.png",
        "img2xUrl": "/assets/hinh-2x/p079-h04.png",
        "width": 128,
        "height": 339
      },
      {
        "assetId": "p079-h05",
        "displayId": "H0397",
        "pdfPage": 79,
        "imgUrl": "/assets/hinh/p079-h05.png",
        "img2xUrl": "/assets/hinh-2x/p079-h05.png",
        "width": 280,
        "height": 381
      },
      {
        "assetId": "p079-h06",
        "displayId": "H0398",
        "pdfPage": 79,
        "imgUrl": "/assets/hinh/p079-h06.png",
        "img2xUrl": "/assets/hinh-2x/p079-h06.png",
        "width": 116,
        "height": 339
      },
      {
        "assetId": "p079-h07",
        "displayId": "H0399",
        "pdfPage": 79,
        "imgUrl": "/assets/hinh/p079-h07.png",
        "img2xUrl": "/assets/hinh-2x/p079-h07.png",
        "width": 286,
        "height": 381
      },
      {
        "assetId": "p079-h08",
        "displayId": "H0400",
        "pdfPage": 79,
        "imgUrl": "/assets/hinh/p079-h08.png",
        "img2xUrl": "/assets/hinh-2x/p079-h08.png",
        "width": 157,
        "height": 339
      },
      {
        "assetId": "p079-h09",
        "displayId": "H0401",
        "pdfPage": 79,
        "imgUrl": "/assets/hinh/p079-h09.png",
        "img2xUrl": "/assets/hinh-2x/p079-h09.png",
        "width": 190,
        "height": 381
      },
      {
        "assetId": "p080-h01",
        "displayId": "H0402",
        "pdfPage": 80,
        "imgUrl": "/assets/hinh/p080-h01.png",
        "img2xUrl": "/assets/hinh-2x/p080-h01.png",
        "width": 118,
        "height": 338
      },
      {
        "assetId": "p080-h02",
        "displayId": "H0403",
        "pdfPage": 80,
        "imgUrl": "/assets/hinh/p080-h02.png",
        "img2xUrl": "/assets/hinh-2x/p080-h02.png",
        "width": 249,
        "height": 383
      },
      {
        "assetId": "p080-h03",
        "displayId": "H0404",
        "pdfPage": 80,
        "imgUrl": "/assets/hinh/p080-h03.png",
        "img2xUrl": "/assets/hinh-2x/p080-h03.png",
        "width": 115,
        "height": 338
      },
      {
        "assetId": "p080-h04",
        "displayId": "H0405",
        "pdfPage": 80,
        "imgUrl": "/assets/hinh/p080-h04.png",
        "img2xUrl": "/assets/hinh-2x/p080-h04.png",
        "width": 237,
        "height": 382
      },
      {
        "assetId": "p080-h05",
        "displayId": "H0406",
        "pdfPage": 80,
        "imgUrl": "/assets/hinh/p080-h05.png",
        "img2xUrl": "/assets/hinh-2x/p080-h05.png",
        "width": 130,
        "height": 339
      },
      {
        "assetId": "p080-h06",
        "displayId": "H0407",
        "pdfPage": 80,
        "imgUrl": "/assets/hinh/p080-h06.png",
        "img2xUrl": "/assets/hinh-2x/p080-h06.png",
        "width": 134,
        "height": 333
      },
      {
        "assetId": "p080-h07",
        "displayId": "H0408",
        "pdfPage": 80,
        "imgUrl": "/assets/hinh/p080-h07.png",
        "img2xUrl": "/assets/hinh-2x/p080-h07.png",
        "width": 150,
        "height": 337
      },
      {
        "assetId": "p080-h08",
        "displayId": "H0409",
        "pdfPage": 80,
        "imgUrl": "/assets/hinh/p080-h08.png",
        "img2xUrl": "/assets/hinh-2x/p080-h08.png",
        "width": 131,
        "height": 328
      },
      {
        "assetId": "p080-h09",
        "displayId": "H0410",
        "pdfPage": 80,
        "imgUrl": "/assets/hinh/p080-h09.png",
        "img2xUrl": "/assets/hinh-2x/p080-h09.png",
        "width": 123,
        "height": 337
      },
      {
        "assetId": "p081-h01",
        "displayId": "H0411",
        "pdfPage": 81,
        "imgUrl": "/assets/hinh/p081-h01.png",
        "img2xUrl": "/assets/hinh-2x/p081-h01.png",
        "width": 184,
        "height": 382
      },
      {
        "assetId": "p081-h02",
        "displayId": "H0412",
        "pdfPage": 81,
        "imgUrl": "/assets/hinh/p081-h02.png",
        "img2xUrl": "/assets/hinh-2x/p081-h02.png",
        "width": 116,
        "height": 338
      },
      {
        "assetId": "p081-h03",
        "displayId": "H0413",
        "pdfPage": 81,
        "imgUrl": "/assets/hinh/p081-h03.png",
        "img2xUrl": "/assets/hinh-2x/p081-h03.png",
        "width": 139,
        "height": 338
      },
      {
        "assetId": "p081-h04",
        "displayId": "H0414",
        "pdfPage": 81,
        "imgUrl": "/assets/hinh/p081-h04.png",
        "img2xUrl": "/assets/hinh-2x/p081-h04.png",
        "width": 131,
        "height": 331
      },
      {
        "assetId": "p081-h05",
        "displayId": "H0415",
        "pdfPage": 81,
        "imgUrl": "/assets/hinh/p081-h05.png",
        "img2xUrl": "/assets/hinh-2x/p081-h05.png",
        "width": 166,
        "height": 382
      },
      {
        "assetId": "p081-h06",
        "displayId": "H0416",
        "pdfPage": 81,
        "imgUrl": "/assets/hinh/p081-h06.png",
        "img2xUrl": "/assets/hinh-2x/p081-h06.png",
        "width": 170,
        "height": 382
      },
      {
        "assetId": "p081-h07",
        "displayId": "H0417",
        "pdfPage": 81,
        "imgUrl": "/assets/hinh/p081-h07.png",
        "img2xUrl": "/assets/hinh-2x/p081-h07.png",
        "width": 168,
        "height": 334
      },
      {
        "assetId": "p081-h08",
        "displayId": "H0418",
        "pdfPage": 81,
        "imgUrl": "/assets/hinh/p081-h08.png",
        "img2xUrl": "/assets/hinh-2x/p081-h08.png",
        "width": 257,
        "height": 321
      },
      {
        "assetId": "p081-h09",
        "displayId": "H0419",
        "pdfPage": 81,
        "imgUrl": "/assets/hinh/p081-h09.png",
        "img2xUrl": "/assets/hinh-2x/p081-h09.png",
        "width": 146,
        "height": 337
      },
      {
        "assetId": "p082-h01",
        "displayId": "H0420",
        "pdfPage": 82,
        "imgUrl": "/assets/hinh/p082-h01.png",
        "img2xUrl": "/assets/hinh-2x/p082-h01.png",
        "width": 158,
        "height": 337
      },
      {
        "assetId": "p082-h02",
        "displayId": "H0421",
        "pdfPage": 82,
        "imgUrl": "/assets/hinh/p082-h02.png",
        "img2xUrl": "/assets/hinh-2x/p082-h02.png",
        "width": 148,
        "height": 338
      },
      {
        "assetId": "p082-h03",
        "displayId": "H0422",
        "pdfPage": 82,
        "imgUrl": "/assets/hinh/p082-h03.png",
        "img2xUrl": "/assets/hinh-2x/p082-h03.png",
        "width": 188,
        "height": 366
      },
      {
        "assetId": "p082-h04",
        "displayId": "H0423",
        "pdfPage": 82,
        "imgUrl": "/assets/hinh/p082-h04.png",
        "img2xUrl": "/assets/hinh-2x/p082-h04.png",
        "width": 141,
        "height": 338
      },
      {
        "assetId": "p082-h05",
        "displayId": "H0424",
        "pdfPage": 82,
        "imgUrl": "/assets/hinh/p082-h05.png",
        "img2xUrl": "/assets/hinh-2x/p082-h05.png",
        "width": 135,
        "height": 339
      },
      {
        "assetId": "p082-h06",
        "displayId": "H0425",
        "pdfPage": 82,
        "imgUrl": "/assets/hinh/p082-h06.png",
        "img2xUrl": "/assets/hinh-2x/p082-h06.png",
        "width": 131,
        "height": 337
      },
      {
        "assetId": "p082-h07",
        "displayId": "H0426",
        "pdfPage": 82,
        "imgUrl": "/assets/hinh/p082-h07.png",
        "img2xUrl": "/assets/hinh-2x/p082-h07.png",
        "width": 136,
        "height": 338
      },
      {
        "assetId": "p082-h08",
        "displayId": "H0427",
        "pdfPage": 82,
        "imgUrl": "/assets/hinh/p082-h08.png",
        "img2xUrl": "/assets/hinh-2x/p082-h08.png",
        "width": 136,
        "height": 338
      },
      {
        "assetId": "p082-h09",
        "displayId": "H0428",
        "pdfPage": 82,
        "imgUrl": "/assets/hinh/p082-h09.png",
        "img2xUrl": "/assets/hinh-2x/p082-h09.png",
        "width": 157,
        "height": 337
      }
    ],
    "motions": [
      {
        "id": "bai-14-m-1",
        "stepNo": "1",
        "assetId": "p075-h01",
        "displayId": "H0356",
        "pdfPage": 75,
        "imgUrl": "/assets/hinh/p075-h01.png",
        "img2xUrl": "/assets/hinh-2x/p075-h01.png",
        "width": 165,
        "height": 382,
        "desc": "CHIÊU 2: Lùi chân phải, tay trái đưa vòng qua mặt đỡ, tay phải đồng thời đưa về nắm đấm thủ sát nách."
      },
      {
        "id": "bai-14-m-2",
        "stepNo": "2",
        "assetId": "p075-h02",
        "displayId": "H0357",
        "pdfPage": 75,
        "imgUrl": "/assets/hinh/p075-h02.png",
        "img2xUrl": "/assets/hinh-2x/p075-h02.png",
        "width": 122,
        "height": 336,
        "desc": "CHIÊU 3: Chân phải tiến lên trước, tay trái đưa xuống thủ, đồng thời tay phải đánh chướng ra trước."
      },
      {
        "id": "bai-14-m-3",
        "stepNo": "3",
        "assetId": "p075-h03",
        "displayId": "H0358",
        "pdfPage": 75,
        "imgUrl": "/assets/hinh/p075-h03.png",
        "img2xUrl": "/assets/hinh-2x/p075-h03.png",
        "width": 138,
        "height": 340,
        "desc": "CHIÊU 1: Chân trái tiền, hai tay đưa xuống, vẩy hai cổ tay từ trong ra ngoài. (Xem hình bên - 1B)"
      },
      {
        "id": "bai-14-m-4",
        "stepNo": "4",
        "assetId": "p075-h04",
        "displayId": "H0359",
        "pdfPage": 75,
        "imgUrl": "/assets/hinh/p075-h04.png",
        "img2xUrl": "/assets/hinh-2x/p075-h04.png",
        "width": 168,
        "height": 341,
        "desc": "CHIÊU 4: Lùi chân phải, tay trái đưa ra trước bàng thủ, tay phải rút về thú sát nách."
      },
      {
        "id": "bai-14-m-5",
        "stepNo": "5",
        "assetId": "p075-h05",
        "displayId": "H0360",
        "pdfPage": 75,
        "imgUrl": "/assets/hinh/p075-h05.png",
        "img2xUrl": "/assets/hinh-2x/p075-h05.png",
        "width": 219,
        "height": 382,
        "desc": "CHIÊU 5: Chân phải tiến lên, hai tay nắm đấm đánh từ trên xuống đỡ và đánh cùng lúc."
      },
      {
        "id": "bai-14-m-6",
        "stepNo": "6",
        "assetId": "p075-h06",
        "displayId": "H0361",
        "pdfPage": 75,
        "imgUrl": "/assets/hinh/p075-h06.png",
        "img2xUrl": "/assets/hinh-2x/p075-h06.png",
        "width": 235,
        "height": 382,
        "desc": "CHIÊU 5: Lùi chân phải, hai tay xỉa đồng thời từ trong ra."
      },
      {
        "id": "bai-14-m-7",
        "stepNo": "7",
        "assetId": "p075-h07",
        "displayId": "H0362",
        "pdfPage": 75,
        "imgUrl": "/assets/hinh/p075-h07.png",
        "img2xUrl": "/assets/hinh-2x/p075-h07.png",
        "width": 279,
        "height": 382,
        "desc": "CHIÊU 7: Tiến chân phải, vẩy hai bàn tay từ dưới lên."
      },
      {
        "id": "bai-14-m-8",
        "stepNo": "8",
        "assetId": "p075-h08",
        "displayId": "H0363",
        "pdfPage": 75,
        "imgUrl": "/assets/hinh/p075-h08.png",
        "img2xUrl": "/assets/hinh-2x/p075-h08.png",
        "width": 137,
        "height": 339,
        "desc": "CHIÊU 8: I: Lùi chân phải, dựng và vặn hai căng tay vào trong."
      },
      {
        "id": "bai-14-m-9",
        "stepNo": "9",
        "assetId": "p075-h09",
        "displayId": "H0364",
        "pdfPage": 75,
        "imgUrl": "/assets/hinh/p075-h09.png",
        "img2xUrl": "/assets/hinh-2x/p075-h09.png",
        "width": 133,
        "height": 340,
        "desc": "CHIÊU 9: Tiến chân phải lên, hai tay thu tạo thành điệp chưởng đánh bật ra trước."
      },
      {
        "id": "bai-14-m-10",
        "stepNo": "10",
        "assetId": "p076-h01",
        "displayId": "H0365",
        "pdfPage": 76,
        "imgUrl": "/assets/hinh/p076-h01.png",
        "img2xUrl": "/assets/hinh-2x/p076-h01.png",
        "width": 238,
        "height": 383,
        "desc": "CHIÊU 9: Lùi chân phải, hai tay nắm, giật ra sau."
      },
      {
        "id": "bai-14-m-11",
        "stepNo": "11",
        "assetId": "p076-h02",
        "displayId": "H0366",
        "pdfPage": 76,
        "imgUrl": "/assets/hinh/p076-h02.png",
        "img2xUrl": "/assets/hinh-2x/p076-h02.png",
        "width": 236,
        "height": 383,
        "desc": "CHIÊU 11: Tiến chân phải, tay phải đưa lên quặp lại, tay trái tóm. Hai tay vít và giật đồng thời ."
      },
      {
        "id": "bai-14-m-12",
        "stepNo": "12",
        "assetId": "p076-h03",
        "displayId": "H0367",
        "pdfPage": 76,
        "imgUrl": "/assets/hinh/p076-h03.png",
        "img2xUrl": "/assets/hinh-2x/p076-h03.png",
        "width": 138,
        "height": 338,
        "desc": "CHIÊU 12: Lùi chân phải, hai tay đưa lên, tay phải ở trong, tay trái ở ngoài, bắt và kéo ngược chiều nhau."
      },
      {
        "id": "bai-14-m-13",
        "stepNo": "13",
        "assetId": "p076-h04",
        "displayId": "H0368",
        "pdfPage": 76,
        "imgUrl": "/assets/hinh/p076-h04.png",
        "img2xUrl": "/assets/hinh-2x/p076-h04.png",
        "width": 146,
        "height": 339,
        "desc": "CHIÊU 13: Tiến chân phải lên, hai tay đưa lên ngang vai, căng tay phải song song với mặt đất, cảng tay trái vuông góc với mặt đât."
      },
      {
        "id": "bai-14-m-14",
        "stepNo": "14",
        "assetId": "p076-h05",
        "displayId": "H0369",
        "pdfPage": 76,
        "imgUrl": "/assets/hinh/p076-h05.png",
        "img2xUrl": "/assets/hinh-2x/p076-h05.png",
        "width": 120,
        "height": 339,
        "desc": "CHIÊU 14: Lùi chân phải, hai tay đưa lên ngang mặt, hai bàn tay song song , lắc hai cổ tay đánh từ trong ra."
      },
      {
        "id": "bai-14-m-15",
        "stepNo": "15",
        "assetId": "p076-h06",
        "displayId": "H0370",
        "pdfPage": 76,
        "imgUrl": "/assets/hinh/p076-h06.png",
        "img2xUrl": "/assets/hinh-2x/p076-h06.png",
        "width": 175,
        "height": 383,
        "desc": "CHIÊU 14: Tiến chân phải lên, căng tay trái dựng đứng, bàn tay phải đưa ra trước bắt và kéo sang phải."
      },
      {
        "id": "bai-14-m-16",
        "stepNo": "16",
        "assetId": "p076-h07",
        "displayId": "H0371",
        "pdfPage": 76,
        "imgUrl": "/assets/hinh/p076-h07.png",
        "img2xUrl": "/assets/hinh-2x/p076-h07.png",
        "width": 210,
        "height": 340,
        "desc": "CHIÊU 16: Lùi chần phải về đứng tấn kiềm dương, hai tay vuốt về phía bụng."
      },
      {
        "id": "bai-14-m-17",
        "stepNo": "17",
        "assetId": "p076-h08",
        "displayId": "H0372",
        "pdfPage": 76,
        "imgUrl": "/assets/hinh/p076-h08.png",
        "img2xUrl": "/assets/hinh-2x/p076-h08.png",
        "width": 278,
        "height": 382,
        "desc": "CHIÊU 16: Lùi chân phái, tay trái chém chếch lên trên, tay phải thủ."
      },
      {
        "id": "bai-14-m-18",
        "stepNo": "18",
        "assetId": "p076-h09",
        "displayId": "H0373",
        "pdfPage": 76,
        "imgUrl": "/assets/hinh/p076-h09.png",
        "img2xUrl": "/assets/hinh-2x/p076-h09.png",
        "width": 120,
        "height": 299,
        "desc": "CHIÊU 16: Lùi chần phải về đứng tấn kiềm dương, hai tay vuốt về phía bụng."
      },
      {
        "id": "bai-14-m-19",
        "stepNo": "19",
        "assetId": "p077-h01",
        "displayId": "H0374",
        "pdfPage": 77,
        "imgUrl": "/assets/hinh/p077-h01.png",
        "img2xUrl": "/assets/hinh-2x/p077-h01.png",
        "width": 231,
        "height": 366,
        "desc": "CHIÊU 17: Tay phải đánh chưởng, tay trái thủ."
      },
      {
        "id": "bai-14-m-20",
        "stepNo": "20",
        "assetId": "p077-h02",
        "displayId": "H0375",
        "pdfPage": 77,
        "imgUrl": "/assets/hinh/p077-h02.png",
        "img2xUrl": "/assets/hinh-2x/p077-h02.png",
        "width": 116,
        "height": 340,
        "desc": "CHIÊU 18: Lùi chân phải, hai tay úp đưa về đỡ."
      },
      {
        "id": "bai-14-m-21",
        "stepNo": "21",
        "assetId": "p077-h03",
        "displayId": "H0376",
        "pdfPage": 77,
        "imgUrl": "/assets/hinh/p077-h03.png",
        "img2xUrl": "/assets/hinh-2x/p077-h03.png",
        "width": 176,
        "height": 339,
        "desc": "CHIÊU 18: Ra vai, đánh cẳng ị . trái về phía trước, đông thời bàn tay phải đỡ."
      },
      {
        "id": "bai-14-m-22",
        "stepNo": "22",
        "assetId": "p077-h04",
        "displayId": "H0377",
        "pdfPage": 77,
        "imgUrl": "/assets/hinh/p077-h04.png",
        "img2xUrl": "/assets/hinh-2x/p077-h04.png",
        "width": 246,
        "height": 382,
        "desc": "CHIÊU 20: Lùi chân phải, tay phải lượn lên trên vào trong, tóm và kéo về, tay trái lượn xuống chém."
      },
      {
        "id": "bai-14-m-23",
        "stepNo": "23",
        "assetId": "p077-h05",
        "displayId": "H0378",
        "pdfPage": 77,
        "imgUrl": "/assets/hinh/p077-h05.png",
        "img2xUrl": "/assets/hinh-2x/p077-h05.png",
        "width": 130,
        "height": 342,
        "desc": "CHIÊU 20: Lùi chân phái về đứng tấn kiềm dương, hai tay đưa lên trước ngực đánh ngược chiều nhau (tay phải đánh từ dưới lên, bàn tay trái cụp và đánh từ trên xuống)."
      },
      {
        "id": "bai-14-m-24",
        "stepNo": "24",
        "assetId": "p077-h06",
        "displayId": "H0379",
        "pdfPage": 77,
        "imgUrl": "/assets/hinh/p077-h06.png",
        "img2xUrl": "/assets/hinh-2x/p077-h06.png",
        "width": 132,
        "height": 340,
        "desc": "CHIÊU 20: Lùi chân phái về đứng tấn kiềm dương, hai tay đưa lên trước ngực đánh ngược chiều nhau (tay phải đánh từ dưới lên, bàn tay trái cụp và đánh từ trên xuống)."
      },
      {
        "id": "bai-14-m-25",
        "stepNo": "25",
        "assetId": "p077-h07",
        "displayId": "H0380",
        "pdfPage": 77,
        "imgUrl": "/assets/hinh/p077-h07.png",
        "img2xUrl": "/assets/hinh-2x/p077-h07.png",
        "width": 147,
        "height": 342,
        "desc": "CHIÊU 21: Bàn tay trái lật úp, giữ nguyên, tay phải chém chéo lên."
      },
      {
        "id": "bai-14-m-26",
        "stepNo": "26",
        "assetId": "p077-h08",
        "displayId": "H0381",
        "pdfPage": 77,
        "imgUrl": "/assets/hinh/p077-h08.png",
        "img2xUrl": "/assets/hinh-2x/p077-h08.png",
        "width": 116,
        "height": 338,
        "desc": "CHIÊU 21: Bàn tay trái lật úp, giữ nguyên, tay phải chém chéo lên."
      },
      {
        "id": "bai-14-m-27",
        "stepNo": "27",
        "assetId": "p077-h09",
        "displayId": "H0382",
        "pdfPage": 77,
        "imgUrl": "/assets/hinh/p077-h09.png",
        "img2xUrl": "/assets/hinh-2x/p077-h09.png",
        "width": 199,
        "height": 384,
        "desc": "CHIÊU 22: Chân phải tiến, tay phải bàng thủ, tay trái đưa lưng cổ tay sang trái."
      },
      {
        "id": "bai-14-m-28",
        "stepNo": "28",
        "assetId": "p078-h01",
        "displayId": "H0383",
        "pdfPage": 78,
        "imgUrl": "/assets/hinh/p078-h01.png",
        "img2xUrl": "/assets/hinh-2x/p078-h01.png",
        "width": 156,
        "height": 339,
        "desc": "CHIÊU 22: Chân phải tiến, tay phải bàng thủ, tay trái đưa lưng cổ tay sang trái."
      },
      {
        "id": "bai-14-m-29",
        "stepNo": "29",
        "assetId": "p078-h02",
        "displayId": "H0384",
        "pdfPage": 78,
        "imgUrl": "/assets/hinh/p078-h02.png",
        "img2xUrl": "/assets/hinh-2x/p078-h02.png",
        "width": 242,
        "height": 383,
        "desc": "CHIÊU 22: Lùi chân phải, vỗ hai bàn tay xuống rồi tay trái đánh chưởng, tay phải thủ trước bụng."
      },
      {
        "id": "bai-14-m-30",
        "stepNo": "30",
        "assetId": "p078-h03",
        "displayId": "H0385",
        "pdfPage": 78,
        "imgUrl": "/assets/hinh/p078-h03.png",
        "img2xUrl": "/assets/hinh-2x/p078-h03.png",
        "width": 162,
        "height": 339,
        "desc": "CHIÊU 22: Chân phải tiền, hai tay đưa từ dưới lên ngang ngực, hai tay đấm ngược chiều nhau."
      },
      {
        "id": "bai-14-m-31",
        "stepNo": "31",
        "assetId": "p078-h04",
        "displayId": "H0386",
        "pdfPage": 78,
        "imgUrl": "/assets/hinh/p078-h04.png",
        "img2xUrl": "/assets/hinh-2x/p078-h04.png",
        "width": 242,
        "height": 383,
        "desc": "CHIÊU 24: Lũi chân phải, tay trái đấm thốc từ dưới lên, bàn tay phải che mặt."
      },
      {
        "id": "bai-14-m-32",
        "stepNo": "32",
        "assetId": "p078-h05",
        "displayId": "H0387",
        "pdfPage": 78,
        "imgUrl": "/assets/hinh/p078-h05.png",
        "img2xUrl": "/assets/hinh-2x/p078-h05.png",
        "width": 237,
        "height": 383,
        "desc": "CHIÊU 25: Tiến chân phải, tay trái vòng in vào trong, tay phải đầm ra trước."
      },
      {
        "id": "bai-14-m-33",
        "stepNo": "33",
        "assetId": "p078-h06",
        "displayId": "H0388",
        "pdfPage": 78,
        "imgUrl": "/assets/hinh/p078-h06.png",
        "img2xUrl": "/assets/hinh-2x/p078-h06.png",
        "width": 131,
        "height": 338,
        "desc": "CHIÊU 26: Lùi chân phải về đứng tấn kiềm dương, hai bàn tay đưa từ dưới lên."
      },
      {
        "id": "bai-14-m-34",
        "stepNo": "34",
        "assetId": "p078-h07",
        "displayId": "H0389",
        "pdfPage": 78,
        "imgUrl": "/assets/hinh/p078-h07.png",
        "img2xUrl": "/assets/hinh-2x/p078-h07.png",
        "width": 219,
        "height": 366,
        "desc": "CHIÊU 26: Bàn tay phải lượn vào trong, lùi chân phải, đấm tay trái ra trước."
      },
      {
        "id": "bai-14-m-35",
        "stepNo": "35",
        "assetId": "p078-h08",
        "displayId": "H0390",
        "pdfPage": 78,
        "imgUrl": "/assets/hinh/p078-h08.png",
        "img2xUrl": "/assets/hinh-2x/p078-h08.png",
        "width": 285,
        "height": 382,
        "desc": "CHIÊU 27: Tiến chân phải, tay phải xia từ dưới lên, tay trái đưa lên che mặt."
      },
      {
        "id": "bai-14-m-36",
        "stepNo": "36",
        "assetId": "p078-h09",
        "displayId": "H0391",
        "pdfPage": 78,
        "imgUrl": "/assets/hinh/p078-h09.png",
        "img2xUrl": "/assets/hinh-2x/p078-h09.png",
        "width": 210,
        "height": 383,
        "desc": "CHIÊU 28: Lùi chân phải, tay trái đưa lên đánh tay long, tay phải đưa lên che mặt."
      },
      {
        "id": "bai-14-m-37",
        "stepNo": "37",
        "assetId": "p078-h10",
        "displayId": "H0392",
        "pdfPage": 78,
        "imgUrl": "/assets/hinh/p078-h10.png",
        "img2xUrl": "/assets/hinh-2x/p078-h10.png",
        "width": 136,
        "height": 339,
        "desc": "CHIÊU 26: Lượn hai bàn tay lên trên rồi úp hai bàn tay xuống."
      },
      {
        "id": "bai-14-m-38",
        "stepNo": "38",
        "assetId": "p079-h01",
        "displayId": "H0393",
        "pdfPage": 79,
        "imgUrl": "/assets/hinh/p079-h01.png",
        "img2xUrl": "/assets/hinh-2x/p079-h01.png",
        "width": 177,
        "height": 342,
        "desc": "CHIÊU 28: Tiến chân phải, tay trái vuốt dọc, bàn tay phải dựng vuông góc đánh sang ngang."
      },
      {
        "id": "bai-14-m-39",
        "stepNo": "39",
        "assetId": "p079-h02",
        "displayId": "H0394",
        "pdfPage": 79,
        "imgUrl": "/assets/hinh/p079-h02.png",
        "img2xUrl": "/assets/hinh-2x/p079-h02.png",
        "width": 194,
        "height": 381,
        "desc": "CHIÊU 30: Lùi chân phải, miết hai lòng bàn tay vào gần nhau đây ra trước."
      },
      {
        "id": "bai-14-m-40",
        "stepNo": "40",
        "assetId": "p079-h03",
        "displayId": "H0395",
        "pdfPage": 79,
        "imgUrl": "/assets/hinh/p079-h03.png",
        "img2xUrl": "/assets/hinh-2x/p079-h03.png",
        "width": 148,
        "height": 337,
        "desc": "CHIÊU 31: Tiến chân phải, tay phải dựng đứng , căng tay trái song song với mặt đất, hai tay đánh sang trái."
      },
      {
        "id": "bai-14-m-41",
        "stepNo": "41",
        "assetId": "p079-h04",
        "displayId": "H0396",
        "pdfPage": 79,
        "imgUrl": "/assets/hinh/p079-h04.png",
        "img2xUrl": "/assets/hinh-2x/p079-h04.png",
        "width": 128,
        "height": 339,
        "desc": "CHIÊU 32: Chân phải lùi về đứng tấn kiềm dương, hai tay đưa lên ngang mặt, hai cảng | khép vặn vào trong rồi xoay hai căng tay đánh bật ra trước."
      },
      {
        "id": "bai-14-m-42",
        "stepNo": "42",
        "assetId": "p079-h05",
        "displayId": "H0397",
        "pdfPage": 79,
        "imgUrl": "/assets/hinh/p079-h05.png",
        "img2xUrl": "/assets/hinh-2x/p079-h05.png",
        "width": 280,
        "height": 381,
        "desc": "CHIÊU 33: Lùi chân phải, hai tay đưa lên, tay trái ở dưới gật nắm đấm lên trên, tay phải ở trên gật nắm đấm xuống."
      },
      {
        "id": "bai-14-m-43",
        "stepNo": "43",
        "assetId": "p079-h06",
        "displayId": "H0398",
        "pdfPage": 79,
        "imgUrl": "/assets/hinh/p079-h06.png",
        "img2xUrl": "/assets/hinh-2x/p079-h06.png",
        "width": 116,
        "height": 339,
        "desc": "CHIÊU 34: Hai tay đánh chướng ra trước (giống như động tác 17.2)."
      },
      {
        "id": "bai-14-m-44",
        "stepNo": "44",
        "assetId": "p079-h07",
        "displayId": "H0399",
        "pdfPage": 79,
        "imgUrl": "/assets/hinh/p079-h07.png",
        "img2xUrl": "/assets/hinh-2x/p079-h07.png",
        "width": 286,
        "height": 381,
        "desc": "CHIÊU 34: Hai tay đánh chướng ra trước (giống như động tác 17.2)."
      },
      {
        "id": "bai-14-m-45",
        "stepNo": "45",
        "assetId": "p079-h08",
        "displayId": "H0400",
        "pdfPage": 79,
        "imgUrl": "/assets/hinh/p079-h08.png",
        "img2xUrl": "/assets/hinh-2x/p079-h08.png",
        "width": 157,
        "height": 339,
        "desc": "CHIÊU 35: Lùi chân phải, hai tay \ đưa lên, hai bàn tay song Ñ song với nhau, đánh hai cổ tay sang bên."
      },
      {
        "id": "bai-14-m-46",
        "stepNo": "46",
        "assetId": "p079-h09",
        "displayId": "H0401",
        "pdfPage": 79,
        "imgUrl": "/assets/hinh/p079-h09.png",
        "img2xUrl": "/assets/hinh-2x/p079-h09.png",
        "width": 190,
        "height": 381,
        "desc": "CHIÊU 3: Chân phải tiến lên trước, tay trái đưa xuống thủ, đồng thời tay phải đánh chướng ra trước."
      },
      {
        "id": "bai-14-m-47",
        "stepNo": "47",
        "assetId": "p080-h01",
        "displayId": "H0402",
        "pdfPage": 80,
        "imgUrl": "/assets/hinh/p080-h01.png",
        "img2xUrl": "/assets/hinh-2x/p080-h01.png",
        "width": 118,
        "height": 338,
        "desc": "CHIÊU 37: Lùi chân phải, tay trái đánh cùi chỏ từ trên xuống."
      },
      {
        "id": "bai-14-m-48",
        "stepNo": "48",
        "assetId": "p080-h02",
        "displayId": "H0403",
        "pdfPage": 80,
        "imgUrl": "/assets/hinh/p080-h02.png",
        "img2xUrl": "/assets/hinh-2x/p080-h02.png",
        "width": 249,
        "height": 383,
        "desc": "CHIÊU 37: Đánh lưng quyền trái từ trên xuống, tay phải thủ."
      },
      {
        "id": "bai-14-m-49",
        "stepNo": "49",
        "assetId": "p080-h03",
        "displayId": "H0404",
        "pdfPage": 80,
        "imgUrl": "/assets/hinh/p080-h03.png",
        "img2xUrl": "/assets/hinh-2x/p080-h03.png",
        "width": 115,
        "height": 338,
        "desc": "CHIÊU 37: Tiến chân phải, tay phải đưa lên, đánh khuỷu- tay sang ngang, tay trái thủ."
      },
      {
        "id": "bai-14-m-50",
        "stepNo": "50",
        "assetId": "p080-h04",
        "displayId": "H0405",
        "pdfPage": 80,
        "imgUrl": "/assets/hinh/p080-h04.png",
        "img2xUrl": "/assets/hinh-2x/p080-h04.png",
        "width": 237,
        "height": 382,
        "desc": "CHIÊU 39: Lùi chân phải, tay trái đánh cùi chỏ về sau, tay phải thủ."
      },
      {
        "id": "bai-14-m-51",
        "stepNo": "51",
        "assetId": "p080-h05",
        "displayId": "H0406",
        "pdfPage": 80,
        "imgUrl": "/assets/hinh/p080-h05.png",
        "img2xUrl": "/assets/hinh-2x/p080-h05.png",
        "width": 130,
        "height": 339,
        "desc": "CHIÊU 39: Lùi chân phải, tay trái đánh cùi chỏ về sau, tay phải thủ."
      },
      {
        "id": "bai-14-m-52",
        "stepNo": "52",
        "assetId": "p080-h06",
        "displayId": "H0407",
        "pdfPage": 80,
        "imgUrl": "/assets/hinh/p080-h06.png",
        "img2xUrl": "/assets/hinh-2x/p080-h06.png",
        "width": 134,
        "height": 333,
        "desc": "CHIÊU 40: Tiến chân phải, đánh cùi chỏ từ dưới lên, tay trái thủ."
      },
      {
        "id": "bai-14-m-53",
        "stepNo": "53",
        "assetId": "p080-h07",
        "displayId": "H0408",
        "pdfPage": 80,
        "imgUrl": "/assets/hinh/p080-h07.png",
        "img2xUrl": "/assets/hinh-2x/p080-h07.png",
        "width": 150,
        "height": 337,
        "desc": "CHIÊU 40: Hạ trọng tâm, đánh vầy cổ tay phải, tay trái thủ (giống chiều 39 nhưng khác bên)."
      },
      {
        "id": "bai-14-m-54",
        "stepNo": "54",
        "assetId": "p080-h08",
        "displayId": "H0409",
        "pdfPage": 80,
        "imgUrl": "/assets/hinh/p080-h08.png",
        "img2xUrl": "/assets/hinh-2x/p080-h08.png",
        "width": 131,
        "height": 328,
        "desc": "CHIÊU 40: Hạ trọng tâm, đánh vầy cổ tay phải, tay trái thủ (giống chiều 39 nhưng khác bên)."
      },
      {
        "id": "bai-14-m-55",
        "stepNo": "55",
        "assetId": "p080-h09",
        "displayId": "H0410",
        "pdfPage": 80,
        "imgUrl": "/assets/hinh/p080-h09.png",
        "img2xUrl": "/assets/hinh-2x/p080-h09.png",
        "width": 123,
        "height": 337,
        "desc": "CHIÊU 3: Chân phải tiến lên trước, tay trái đưa xuống thủ, đồng thời tay phải đánh chướng ra trước."
      },
      {
        "id": "bai-14-m-56",
        "stepNo": "56",
        "assetId": "p081-h01",
        "displayId": "H0411",
        "pdfPage": 81,
        "imgUrl": "/assets/hinh/p081-h01.png",
        "img2xUrl": "/assets/hinh-2x/p081-h01.png",
        "width": 184,
        "height": 382,
        "desc": "CHIÊU 4: Lùi chân phải, hai tay bắt và kéo giống động tác 10, đồng thời gật đánh đầu ra trước."
      },
      {
        "id": "bai-14-m-57",
        "stepNo": "57",
        "assetId": "p081-h02",
        "displayId": "H0412",
        "pdfPage": 81,
        "imgUrl": "/assets/hinh/p081-h02.png",
        "img2xUrl": "/assets/hinh-2x/p081-h02.png",
        "width": 116,
        "height": 338,
        "desc": "CHIÊU 4: Lùi chân phải, hai tay bắt và kéo giống động tác 10, đồng thời gật đánh đầu ra trước."
      },
      {
        "id": "bai-14-m-58",
        "stepNo": "58",
        "assetId": "p081-h03",
        "displayId": "H0413",
        "pdfPage": 81,
        "imgUrl": "/assets/hinh/p081-h03.png",
        "img2xUrl": "/assets/hinh-2x/p081-h03.png",
        "width": 139,
        "height": 338,
        "desc": "CHIÊU 44: Tiến chân phải, hai chân đứng tấn kiềm dương, vẩy hai cổ tay từ trong ra ngoài."
      },
      {
        "id": "bai-14-m-59",
        "stepNo": "59",
        "assetId": "p081-h04",
        "displayId": "H0414",
        "pdfPage": 81,
        "imgUrl": "/assets/hinh/p081-h04.png",
        "img2xUrl": "/assets/hinh-2x/p081-h04.png",
        "width": 131,
        "height": 331,
        "desc": "CHIÊU 45: Lùi chân phải, hạ thấp trọng tâm, tay long phải che hạ bộ, tay long trái móc, bóp và giật về."
      },
      {
        "id": "bai-14-m-60",
        "stepNo": "60",
        "assetId": "p081-h05",
        "displayId": "H0415",
        "pdfPage": 81,
        "imgUrl": "/assets/hinh/p081-h05.png",
        "img2xUrl": "/assets/hinh-2x/p081-h05.png",
        "width": 166,
        "height": 382,
        "desc": "CHIÊU 46: Tay trái tóm và kéo, đồng thời tay phải vòng xuống chặt bằng cạnh bàn tay."
      },
      {
        "id": "bai-14-m-61",
        "stepNo": "61",
        "assetId": "p081-h06",
        "displayId": "H0416",
        "pdfPage": 81,
        "imgUrl": "/assets/hinh/p081-h06.png",
        "img2xUrl": "/assets/hinh-2x/p081-h06.png",
        "width": 170,
        "height": 382,
        "desc": "CHIÊU 47: Hai tay tóm, giật chéo xuống, đồng thời chân phải lên gối."
      },
      {
        "id": "bai-14-m-62",
        "stepNo": "62",
        "assetId": "p081-h07",
        "displayId": "H0417",
        "pdfPage": 81,
        "imgUrl": "/assets/hinh/p081-h07.png",
        "img2xUrl": "/assets/hinh-2x/p081-h07.png",
        "width": 168,
        "height": 334,
        "desc": "CHIÊU 47: Hai tay tóm, giật chéo xuống, đồng thời chân phải lên gối."
      },
      {
        "id": "bai-14-m-63",
        "stepNo": "63",
        "assetId": "p081-h08",
        "displayId": "H0418",
        "pdfPage": 81,
        "imgUrl": "/assets/hinh/p081-h08.png",
        "img2xUrl": "/assets/hinh-2x/p081-h08.png",
        "width": 257,
        "height": 321,
        "desc": "CHIÊU 48: Hai tay giật về bên phải, lên gối chân trái theo đường vòng từ ngoài vào trong."
      },
      {
        "id": "bai-14-m-64",
        "stepNo": "64",
        "assetId": "p081-h09",
        "displayId": "H0419",
        "pdfPage": 81,
        "imgUrl": "/assets/hinh/p081-h09.png",
        "img2xUrl": "/assets/hinh-2x/p081-h09.png",
        "width": 146,
        "height": 337,
        "desc": "CHIÊU 49: Hai tay chuyển sang bên trái, giật theo phương chéo từ trên xuống, chân phải đánh miết bằng đầu gối từ trên xuống."
      },
      {
        "id": "bai-14-m-65",
        "stepNo": "65",
        "assetId": "p082-h01",
        "displayId": "H0420",
        "pdfPage": 82,
        "imgUrl": "/assets/hinh/p082-h01.png",
        "img2xUrl": "/assets/hinh-2x/p082-h01.png",
        "width": 158,
        "height": 337,
        "desc": "CHIÊU 50: Hai tay vặn và đánh xuống đồng thời đánh đầu gối chân trái từ dưới lên."
      },
      {
        "id": "bai-14-m-66",
        "stepNo": "66",
        "assetId": "p082-h02",
        "displayId": "H0421",
        "pdfPage": 82,
        "imgUrl": "/assets/hinh/p082-h02.png",
        "img2xUrl": "/assets/hinh-2x/p082-h02.png",
        "width": 148,
        "height": 338,
        "desc": "CHIÊU 5: Chân phải tiến lên, hai tay nắm đấm đánh từ trên xuống đỡ và đánh cùng lúc."
      },
      {
        "id": "bai-14-m-67",
        "stepNo": "67",
        "assetId": "p082-h03",
        "displayId": "H0422",
        "pdfPage": 82,
        "imgUrl": "/assets/hinh/p082-h03.png",
        "img2xUrl": "/assets/hinh-2x/p082-h03.png",
        "width": 188,
        "height": 366,
        "desc": "CHIÊU 52: Hai tay đưa lên xia ra trước (giống chiêu 6) kèm đá móc chân trái."
      },
      {
        "id": "bai-14-m-68",
        "stepNo": "68",
        "assetId": "p082-h04",
        "displayId": "H0423",
        "pdfPage": 82,
        "imgUrl": "/assets/hinh/p082-h04.png",
        "img2xUrl": "/assets/hinh-2x/p082-h04.png",
        "width": 141,
        "height": 338,
        "desc": "CHIÊU 53: Hai tay đưa lên vẩy hai bàn tay (giông chiêu 7) kèm đá móc chân phải."
      },
      {
        "id": "bai-14-m-69",
        "stepNo": "69",
        "assetId": "p082-h05",
        "displayId": "H0424",
        "pdfPage": 82,
        "imgUrl": "/assets/hinh/p082-h05.png",
        "img2xUrl": "/assets/hinh-2x/p082-h05.png",
        "width": 135,
        "height": 339,
        "desc": "CHIÊU 54: Hai tay đưa lên đánh ngược chiều, kèm đá móc."
      },
      {
        "id": "bai-14-m-70",
        "stepNo": "70",
        "assetId": "p082-h06",
        "displayId": "H0425",
        "pdfPage": 82,
        "imgUrl": "/assets/hinh/p082-h06.png",
        "img2xUrl": "/assets/hinh-2x/p082-h06.png",
        "width": 131,
        "height": 337,
        "desc": "CHIÊU 55: Lượn hai bàn tay lên trên rồi úp xuống."
      },
      {
        "id": "bai-14-m-71",
        "stepNo": "71",
        "assetId": "p082-h07",
        "displayId": "H0426",
        "pdfPage": 82,
        "imgUrl": "/assets/hinh/p082-h07.png",
        "img2xUrl": "/assets/hinh-2x/p082-h07.png",
        "width": 136,
        "height": 338,
        "desc": "CHIÊU 56: Trở về vị trí ban đầu. BÁI TỔ - Kết thúc bài. Bài 108 Tiết lùi bê t Z* - Các động tác bài 108 Tiến Lùi Trái được đánh số thứ tự như bài 108 Tiến Lùi Phải (từ chiêu 2 đến chiêu 56) nhưng đối xứng qua bên trái, chỉ khác nhau ở chiêu thứ 1."
      },
      {
        "id": "bai-14-m-72",
        "stepNo": "72",
        "assetId": "p082-h08",
        "displayId": "H0427",
        "pdfPage": 82,
        "imgUrl": "/assets/hinh/p082-h08.png",
        "img2xUrl": "/assets/hinh-2x/p082-h08.png",
        "width": 136,
        "height": 338,
        "desc": "CHIÊU 55: Lượn hai bàn tay lên trên rồi úp xuống."
      },
      {
        "id": "bai-14-m-73",
        "stepNo": "73",
        "assetId": "p082-h09",
        "displayId": "H0428",
        "pdfPage": 82,
        "imgUrl": "/assets/hinh/p082-h09.png",
        "img2xUrl": "/assets/hinh-2x/p082-h09.png",
        "width": 157,
        "height": 337,
        "desc": "CHIÊU 56: Trở về vị trí ban đầu. BÁI TỔ - Kết thúc bài. Bài 108 Tiết lùi bê t Z* - Các động tác bài 108 Tiến Lùi Trái được đánh số thứ tự như bài 108 Tiến Lùi Phải (từ chiêu 2 đến chiêu 56) nhưng đối xứng qua bên trái, chỉ khác nhau ở chiêu thứ 1."
      }
    ],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-15",
    "title": "Bài 108 tiến lùi — đối luyện",
    "groupId": "quyen-tay-khong",
    "bookOrder": 15,
    "contentType": "practice_or_mixed",
    "pdfPages": [
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      91
    ],
    "pageRange": "Trang PDF 83 – 91",
    "assetCount": 71,
    "assets": [
      {
        "assetId": "p083-h01",
        "displayId": "H0429",
        "pdfPage": 83,
        "imgUrl": "/assets/hinh/p083-h01.png",
        "img2xUrl": "/assets/hinh-2x/p083-h01.png",
        "width": 232,
        "height": 304
      },
      {
        "assetId": "p083-h02",
        "displayId": "H0430",
        "pdfPage": 83,
        "imgUrl": "/assets/hinh/p083-h02.png",
        "img2xUrl": "/assets/hinh-2x/p083-h02.png",
        "width": 228,
        "height": 302
      },
      {
        "assetId": "p083-h03",
        "displayId": "H0431",
        "pdfPage": 83,
        "imgUrl": "/assets/hinh/p083-h03.png",
        "img2xUrl": "/assets/hinh-2x/p083-h03.png",
        "width": 247,
        "height": 301
      },
      {
        "assetId": "p083-h04",
        "displayId": "H0432",
        "pdfPage": 83,
        "imgUrl": "/assets/hinh/p083-h04.png",
        "img2xUrl": "/assets/hinh-2x/p083-h04.png",
        "width": 270,
        "height": 303
      },
      {
        "assetId": "p083-h05",
        "displayId": "H0433",
        "pdfPage": 83,
        "imgUrl": "/assets/hinh/p083-h05.png",
        "img2xUrl": "/assets/hinh-2x/p083-h05.png",
        "width": 261,
        "height": 302
      },
      {
        "assetId": "p083-h06",
        "displayId": "H0434",
        "pdfPage": 83,
        "imgUrl": "/assets/hinh/p083-h06.png",
        "img2xUrl": "/assets/hinh-2x/p083-h06.png",
        "width": 275,
        "height": 301
      },
      {
        "assetId": "p083-h07",
        "displayId": "H0435",
        "pdfPage": 83,
        "imgUrl": "/assets/hinh/p083-h07.png",
        "img2xUrl": "/assets/hinh-2x/p083-h07.png",
        "width": 268,
        "height": 302
      },
      {
        "assetId": "p083-h08",
        "displayId": "H0436",
        "pdfPage": 83,
        "imgUrl": "/assets/hinh/p083-h08.png",
        "img2xUrl": "/assets/hinh-2x/p083-h08.png",
        "width": 279,
        "height": 302
      },
      {
        "assetId": "p084-h01",
        "displayId": "H0437",
        "pdfPage": 84,
        "imgUrl": "/assets/hinh/p084-h01.png",
        "img2xUrl": "/assets/hinh-2x/p084-h01.png",
        "width": 234,
        "height": 302
      },
      {
        "assetId": "p084-h02",
        "displayId": "H0438",
        "pdfPage": 84,
        "imgUrl": "/assets/hinh/p084-h02.png",
        "img2xUrl": "/assets/hinh-2x/p084-h02.png",
        "width": 267,
        "height": 302
      },
      {
        "assetId": "p084-h03",
        "displayId": "H0439",
        "pdfPage": 84,
        "imgUrl": "/assets/hinh/p084-h03.png",
        "img2xUrl": "/assets/hinh-2x/p084-h03.png",
        "width": 247,
        "height": 301
      },
      {
        "assetId": "p084-h04",
        "displayId": "H0440",
        "pdfPage": 84,
        "imgUrl": "/assets/hinh/p084-h04.png",
        "img2xUrl": "/assets/hinh-2x/p084-h04.png",
        "width": 258,
        "height": 301
      },
      {
        "assetId": "p084-h05",
        "displayId": "H0441",
        "pdfPage": 84,
        "imgUrl": "/assets/hinh/p084-h05.png",
        "img2xUrl": "/assets/hinh-2x/p084-h05.png",
        "width": 259,
        "height": 301
      },
      {
        "assetId": "p084-h06",
        "displayId": "H0442",
        "pdfPage": 84,
        "imgUrl": "/assets/hinh/p084-h06.png",
        "img2xUrl": "/assets/hinh-2x/p084-h06.png",
        "width": 250,
        "height": 305
      },
      {
        "assetId": "p084-h07",
        "displayId": "H0443",
        "pdfPage": 84,
        "imgUrl": "/assets/hinh/p084-h07.png",
        "img2xUrl": "/assets/hinh-2x/p084-h07.png",
        "width": 257,
        "height": 302
      },
      {
        "assetId": "p084-h08",
        "displayId": "H0444",
        "pdfPage": 84,
        "imgUrl": "/assets/hinh/p084-h08.png",
        "img2xUrl": "/assets/hinh-2x/p084-h08.png",
        "width": 250,
        "height": 303
      },
      {
        "assetId": "p085-h01",
        "displayId": "H0445",
        "pdfPage": 85,
        "imgUrl": "/assets/hinh/p085-h01.png",
        "img2xUrl": "/assets/hinh-2x/p085-h01.png",
        "width": 232,
        "height": 306
      },
      {
        "assetId": "p085-h02",
        "displayId": "H0446",
        "pdfPage": 85,
        "imgUrl": "/assets/hinh/p085-h02.png",
        "img2xUrl": "/assets/hinh-2x/p085-h02.png",
        "width": 232,
        "height": 303
      },
      {
        "assetId": "p085-h03",
        "displayId": "H0447",
        "pdfPage": 85,
        "imgUrl": "/assets/hinh/p085-h03.png",
        "img2xUrl": "/assets/hinh-2x/p085-h03.png",
        "width": 246,
        "height": 301
      },
      {
        "assetId": "p085-h04",
        "displayId": "H0448",
        "pdfPage": 85,
        "imgUrl": "/assets/hinh/p085-h04.png",
        "img2xUrl": "/assets/hinh-2x/p085-h04.png",
        "width": 268,
        "height": 302
      },
      {
        "assetId": "p085-h05",
        "displayId": "H0449",
        "pdfPage": 85,
        "imgUrl": "/assets/hinh/p085-h05.png",
        "img2xUrl": "/assets/hinh-2x/p085-h05.png",
        "width": 267,
        "height": 303
      },
      {
        "assetId": "p085-h06",
        "displayId": "H0450",
        "pdfPage": 85,
        "imgUrl": "/assets/hinh/p085-h06.png",
        "img2xUrl": "/assets/hinh-2x/p085-h06.png",
        "width": 240,
        "height": 303
      },
      {
        "assetId": "p085-h07",
        "displayId": "H0451",
        "pdfPage": 85,
        "imgUrl": "/assets/hinh/p085-h07.png",
        "img2xUrl": "/assets/hinh-2x/p085-h07.png",
        "width": 242,
        "height": 305
      },
      {
        "assetId": "p085-h08",
        "displayId": "H0452",
        "pdfPage": 85,
        "imgUrl": "/assets/hinh/p085-h08.png",
        "img2xUrl": "/assets/hinh-2x/p085-h08.png",
        "width": 240,
        "height": 306
      },
      {
        "assetId": "p086-h01",
        "displayId": "H0453",
        "pdfPage": 86,
        "imgUrl": "/assets/hinh/p086-h01.png",
        "img2xUrl": "/assets/hinh-2x/p086-h01.png",
        "width": 248,
        "height": 301
      },
      {
        "assetId": "p086-h02",
        "displayId": "H0454",
        "pdfPage": 86,
        "imgUrl": "/assets/hinh/p086-h02.png",
        "img2xUrl": "/assets/hinh-2x/p086-h02.png",
        "width": 261,
        "height": 304
      },
      {
        "assetId": "p086-h03",
        "displayId": "H0455",
        "pdfPage": 86,
        "imgUrl": "/assets/hinh/p086-h03.png",
        "img2xUrl": "/assets/hinh-2x/p086-h03.png",
        "width": 247,
        "height": 305
      },
      {
        "assetId": "p086-h04",
        "displayId": "H0456",
        "pdfPage": 86,
        "imgUrl": "/assets/hinh/p086-h04.png",
        "img2xUrl": "/assets/hinh-2x/p086-h04.png",
        "width": 268,
        "height": 302
      },
      {
        "assetId": "p086-h05",
        "displayId": "H0457",
        "pdfPage": 86,
        "imgUrl": "/assets/hinh/p086-h05.png",
        "img2xUrl": "/assets/hinh-2x/p086-h05.png",
        "width": 258,
        "height": 305
      },
      {
        "assetId": "p086-h06",
        "displayId": "H0458",
        "pdfPage": 86,
        "imgUrl": "/assets/hinh/p086-h06.png",
        "img2xUrl": "/assets/hinh-2x/p086-h06.png",
        "width": 273,
        "height": 302
      },
      {
        "assetId": "p086-h07",
        "displayId": "H0459",
        "pdfPage": 86,
        "imgUrl": "/assets/hinh/p086-h07.png",
        "img2xUrl": "/assets/hinh-2x/p086-h07.png",
        "width": 255,
        "height": 303
      },
      {
        "assetId": "p086-h08",
        "displayId": "H0460",
        "pdfPage": 86,
        "imgUrl": "/assets/hinh/p086-h08.png",
        "img2xUrl": "/assets/hinh-2x/p086-h08.png",
        "width": 279,
        "height": 304
      },
      {
        "assetId": "p086-h09",
        "displayId": "H0461",
        "pdfPage": 86,
        "imgUrl": "/assets/hinh/p086-h09.png",
        "img2xUrl": "/assets/hinh-2x/p086-h09.png",
        "width": 264,
        "height": 305
      },
      {
        "assetId": "p087-h01",
        "displayId": "H0462",
        "pdfPage": 87,
        "imgUrl": "/assets/hinh/p087-h01.png",
        "img2xUrl": "/assets/hinh-2x/p087-h01.png",
        "width": 263,
        "height": 301
      },
      {
        "assetId": "p087-h02",
        "displayId": "H0463",
        "pdfPage": 87,
        "imgUrl": "/assets/hinh/p087-h02.png",
        "img2xUrl": "/assets/hinh-2x/p087-h02.png",
        "width": 227,
        "height": 305
      },
      {
        "assetId": "p087-h03",
        "displayId": "H0464",
        "pdfPage": 87,
        "imgUrl": "/assets/hinh/p087-h03.png",
        "img2xUrl": "/assets/hinh-2x/p087-h03.png",
        "width": 231,
        "height": 305
      },
      {
        "assetId": "p087-h04",
        "displayId": "H0465",
        "pdfPage": 87,
        "imgUrl": "/assets/hinh/p087-h04.png",
        "img2xUrl": "/assets/hinh-2x/p087-h04.png",
        "width": 231,
        "height": 306
      },
      {
        "assetId": "p087-h05",
        "displayId": "H0466",
        "pdfPage": 87,
        "imgUrl": "/assets/hinh/p087-h05.png",
        "img2xUrl": "/assets/hinh-2x/p087-h05.png",
        "width": 251,
        "height": 308
      },
      {
        "assetId": "p087-h06",
        "displayId": "H0467",
        "pdfPage": 87,
        "imgUrl": "/assets/hinh/p087-h06.png",
        "img2xUrl": "/assets/hinh-2x/p087-h06.png",
        "width": 254,
        "height": 301
      },
      {
        "assetId": "p087-h07",
        "displayId": "H0468",
        "pdfPage": 87,
        "imgUrl": "/assets/hinh/p087-h07.png",
        "img2xUrl": "/assets/hinh-2x/p087-h07.png",
        "width": 238,
        "height": 305
      },
      {
        "assetId": "p087-h08",
        "displayId": "H0469",
        "pdfPage": 87,
        "imgUrl": "/assets/hinh/p087-h08.png",
        "img2xUrl": "/assets/hinh-2x/p087-h08.png",
        "width": 258,
        "height": 302
      },
      {
        "assetId": "p088-h01",
        "displayId": "H0470",
        "pdfPage": 88,
        "imgUrl": "/assets/hinh/p088-h01.png",
        "img2xUrl": "/assets/hinh-2x/p088-h01.png",
        "width": 223,
        "height": 306
      },
      {
        "assetId": "p088-h02",
        "displayId": "H0471",
        "pdfPage": 88,
        "imgUrl": "/assets/hinh/p088-h02.png",
        "img2xUrl": "/assets/hinh-2x/p088-h02.png",
        "width": 206,
        "height": 303
      },
      {
        "assetId": "p088-h03",
        "displayId": "H0472",
        "pdfPage": 88,
        "imgUrl": "/assets/hinh/p088-h03.png",
        "img2xUrl": "/assets/hinh-2x/p088-h03.png",
        "width": 278,
        "height": 303
      },
      {
        "assetId": "p088-h04",
        "displayId": "H0473",
        "pdfPage": 88,
        "imgUrl": "/assets/hinh/p088-h04.png",
        "img2xUrl": "/assets/hinh-2x/p088-h04.png",
        "width": 259,
        "height": 303
      },
      {
        "assetId": "p088-h05",
        "displayId": "H0474",
        "pdfPage": 88,
        "imgUrl": "/assets/hinh/p088-h05.png",
        "img2xUrl": "/assets/hinh-2x/p088-h05.png",
        "width": 269,
        "height": 303
      },
      {
        "assetId": "p088-h06",
        "displayId": "H0475",
        "pdfPage": 88,
        "imgUrl": "/assets/hinh/p088-h06.png",
        "img2xUrl": "/assets/hinh-2x/p088-h06.png",
        "width": 228,
        "height": 301
      },
      {
        "assetId": "p088-h07",
        "displayId": "H0476",
        "pdfPage": 88,
        "imgUrl": "/assets/hinh/p088-h07.png",
        "img2xUrl": "/assets/hinh-2x/p088-h07.png",
        "width": 236,
        "height": 302
      },
      {
        "assetId": "p088-h08",
        "displayId": "H0477",
        "pdfPage": 88,
        "imgUrl": "/assets/hinh/p088-h08.png",
        "img2xUrl": "/assets/hinh-2x/p088-h08.png",
        "width": 283,
        "height": 303
      },
      {
        "assetId": "p089-h01",
        "displayId": "H0478",
        "pdfPage": 89,
        "imgUrl": "/assets/hinh/p089-h01.png",
        "img2xUrl": "/assets/hinh-2x/p089-h01.png",
        "width": 255,
        "height": 301
      },
      {
        "assetId": "p089-h02",
        "displayId": "H0479",
        "pdfPage": 89,
        "imgUrl": "/assets/hinh/p089-h02.png",
        "img2xUrl": "/assets/hinh-2x/p089-h02.png",
        "width": 268,
        "height": 300
      },
      {
        "assetId": "p089-h03",
        "displayId": "H0480",
        "pdfPage": 89,
        "imgUrl": "/assets/hinh/p089-h03.png",
        "img2xUrl": "/assets/hinh-2x/p089-h03.png",
        "width": 245,
        "height": 301
      },
      {
        "assetId": "p089-h04",
        "displayId": "H0481",
        "pdfPage": 89,
        "imgUrl": "/assets/hinh/p089-h04.png",
        "img2xUrl": "/assets/hinh-2x/p089-h04.png",
        "width": 266,
        "height": 301
      },
      {
        "assetId": "p089-h05",
        "displayId": "H0482",
        "pdfPage": 89,
        "imgUrl": "/assets/hinh/p089-h05.png",
        "img2xUrl": "/assets/hinh-2x/p089-h05.png",
        "width": 249,
        "height": 302
      },
      {
        "assetId": "p089-h06",
        "displayId": "H0483",
        "pdfPage": 89,
        "imgUrl": "/assets/hinh/p089-h06.png",
        "img2xUrl": "/assets/hinh-2x/p089-h06.png",
        "width": 253,
        "height": 302
      },
      {
        "assetId": "p089-h07",
        "displayId": "H0484",
        "pdfPage": 89,
        "imgUrl": "/assets/hinh/p089-h07.png",
        "img2xUrl": "/assets/hinh-2x/p089-h07.png",
        "width": 265,
        "height": 301
      },
      {
        "assetId": "p089-h08",
        "displayId": "H0485",
        "pdfPage": 89,
        "imgUrl": "/assets/hinh/p089-h08.png",
        "img2xUrl": "/assets/hinh-2x/p089-h08.png",
        "width": 261,
        "height": 302
      },
      {
        "assetId": "p089-h09",
        "displayId": "H0486",
        "pdfPage": 89,
        "imgUrl": "/assets/hinh/p089-h09.png",
        "img2xUrl": "/assets/hinh-2x/p089-h09.png",
        "width": 254,
        "height": 303
      },
      {
        "assetId": "p090-h01",
        "displayId": "H0487",
        "pdfPage": 90,
        "imgUrl": "/assets/hinh/p090-h01.png",
        "img2xUrl": "/assets/hinh-2x/p090-h01.png",
        "width": 263,
        "height": 300
      },
      {
        "assetId": "p090-h02",
        "displayId": "H0488",
        "pdfPage": 90,
        "imgUrl": "/assets/hinh/p090-h02.png",
        "img2xUrl": "/assets/hinh-2x/p090-h02.png",
        "width": 226,
        "height": 303
      },
      {
        "assetId": "p090-h03",
        "displayId": "H0489",
        "pdfPage": 90,
        "imgUrl": "/assets/hinh/p090-h03.png",
        "img2xUrl": "/assets/hinh-2x/p090-h03.png",
        "width": 241,
        "height": 301
      },
      {
        "assetId": "p090-h04",
        "displayId": "H0490",
        "pdfPage": 90,
        "imgUrl": "/assets/hinh/p090-h04.png",
        "img2xUrl": "/assets/hinh-2x/p090-h04.png",
        "width": 270,
        "height": 303
      },
      {
        "assetId": "p090-h05",
        "displayId": "H0491",
        "pdfPage": 90,
        "imgUrl": "/assets/hinh/p090-h05.png",
        "img2xUrl": "/assets/hinh-2x/p090-h05.png",
        "width": 256,
        "height": 300
      },
      {
        "assetId": "p090-h06",
        "displayId": "H0492",
        "pdfPage": 90,
        "imgUrl": "/assets/hinh/p090-h06.png",
        "img2xUrl": "/assets/hinh-2x/p090-h06.png",
        "width": 173,
        "height": 301
      },
      {
        "assetId": "p090-h07",
        "displayId": "H0493",
        "pdfPage": 90,
        "imgUrl": "/assets/hinh/p090-h07.png",
        "img2xUrl": "/assets/hinh-2x/p090-h07.png",
        "width": 229,
        "height": 302
      },
      {
        "assetId": "p090-h08",
        "displayId": "H0494",
        "pdfPage": 90,
        "imgUrl": "/assets/hinh/p090-h08.png",
        "img2xUrl": "/assets/hinh-2x/p090-h08.png",
        "width": 255,
        "height": 301
      },
      {
        "assetId": "p091-h01",
        "displayId": "H0495",
        "pdfPage": 91,
        "imgUrl": "/assets/hinh/p091-h01.png",
        "img2xUrl": "/assets/hinh-2x/p091-h01.png",
        "width": 244,
        "height": 303
      },
      {
        "assetId": "p091-h02",
        "displayId": "H0496",
        "pdfPage": 91,
        "imgUrl": "/assets/hinh/p091-h02.png",
        "img2xUrl": "/assets/hinh-2x/p091-h02.png",
        "width": 268,
        "height": 301
      },
      {
        "assetId": "p091-h03",
        "displayId": "H0497",
        "pdfPage": 91,
        "imgUrl": "/assets/hinh/p091-h03.png",
        "img2xUrl": "/assets/hinh-2x/p091-h03.png",
        "width": 256,
        "height": 300
      },
      {
        "assetId": "p091-h04",
        "displayId": "H0498",
        "pdfPage": 91,
        "imgUrl": "/assets/hinh/p091-h04.png",
        "img2xUrl": "/assets/hinh-2x/p091-h04.png",
        "width": 270,
        "height": 301
      },
      {
        "assetId": "p091-h05",
        "displayId": "H0499",
        "pdfPage": 91,
        "imgUrl": "/assets/hinh/p091-h05.png",
        "img2xUrl": "/assets/hinh-2x/p091-h05.png",
        "width": 257,
        "height": 300
      }
    ],
    "motions": [
      {
        "id": "bai-15-m-1",
        "stepNo": "1",
        "assetId": "p083-h01",
        "displayId": "H0429",
        "pdfPage": 83,
        "imgUrl": "/assets/hinh/p083-h01.png",
        "img2xUrl": "/assets/hinh-2x/p083-h01.png",
        "width": 232,
        "height": 304,
        "desc": "CHIÊU 1;: A: Tiến chân phải lên đấm vòng 2 tay vào thái dương B."
      },
      {
        "id": "bai-15-m-2",
        "stepNo": "2",
        "assetId": "p083-h02",
        "displayId": "H0430",
        "pdfPage": 83,
        "imgUrl": "/assets/hinh/p083-h02.png",
        "img2xUrl": "/assets/hinh-2x/p083-h02.png",
        "width": 228,
        "height": 302,
        "desc": "CHIÊU 1;: A: Tiến chân phải lên đấm vòng 2 tay vào thái dương B."
      },
      {
        "id": "bai-15-m-3",
        "stepNo": "3",
        "assetId": "p083-h03",
        "displayId": "H0431",
        "pdfPage": 83,
        "imgUrl": "/assets/hinh/p083-h03.png",
        "img2xUrl": "/assets/hinh-2x/p083-h03.png",
        "width": 247,
        "height": 301,
        "desc": "CHIÊU 2;: A: Bước chân phải lén đấm thẳng tay phải."
      },
      {
        "id": "bai-15-m-4",
        "stepNo": "4",
        "assetId": "p083-h04",
        "displayId": "H0432",
        "pdfPage": 83,
        "imgUrl": "/assets/hinh/p083-h04.png",
        "img2xUrl": "/assets/hinh-2x/p083-h04.png",
        "width": 270,
        "height": 303,
        "desc": "CHIÊU 4: A: Bước chân phải lên đấm tay phải."
      },
      {
        "id": "bai-15-m-5",
        "stepNo": "5",
        "assetId": "p083-h05",
        "displayId": "H0433",
        "pdfPage": 83,
        "imgUrl": "/assets/hinh/p083-h05.png",
        "img2xUrl": "/assets/hinh-2x/p083-h05.png",
        "width": 261,
        "height": 302,
        "desc": "CHIÊU 4: A: Bước chân phải lên đấm tay phải."
      },
      {
        "id": "bai-15-m-6",
        "stepNo": "6",
        "assetId": "p083-h06",
        "displayId": "H0434",
        "pdfPage": 83,
        "imgUrl": "/assets/hinh/p083-h06.png",
        "img2xUrl": "/assets/hinh-2x/p083-h06.png",
        "width": 275,
        "height": 301,
        "desc": "CHIÊU 5: A: Lùi chân phải đấm thăng tay trái."
      },
      {
        "id": "bai-15-m-7",
        "stepNo": "7",
        "assetId": "p083-h07",
        "displayId": "H0435",
        "pdfPage": 83,
        "imgUrl": "/assets/hinh/p083-h07.png",
        "img2xUrl": "/assets/hinh-2x/p083-h07.png",
        "width": 268,
        "height": 302,
        "desc": "CHIÊU 6: A: Bước chân phải lên đấm thẳng tay phải."
      },
      {
        "id": "bai-15-m-8",
        "stepNo": "8",
        "assetId": "p083-h08",
        "displayId": "H0436",
        "pdfPage": 83,
        "imgUrl": "/assets/hinh/p083-h08.png",
        "img2xUrl": "/assets/hinh-2x/p083-h08.png",
        "width": 279,
        "height": 302,
        "desc": "CHIÊU 7: 8: A: Lùi chân phải đấm đ thẳng tay trái. B B:Bướcchân phảilên,hai t bàn tay đánh từ dưới lên. b S4"
      },
      {
        "id": "bai-15-m-9",
        "stepNo": "9",
        "assetId": "p084-h01",
        "displayId": "H0437",
        "pdfPage": 84,
        "imgUrl": "/assets/hinh/p084-h01.png",
        "img2xUrl": "/assets/hinh-2x/p084-h01.png",
        "width": 234,
        "height": 302,
        "desc": "CHIÊU 10: A: Bước chân phải lên đấm thẳng tay phải. B: Kéo chân phải về, hai tay kéo giật"
      },
      {
        "id": "bai-15-m-10",
        "stepNo": "10",
        "assetId": "p084-h02",
        "displayId": "H0438",
        "pdfPage": 84,
        "imgUrl": "/assets/hinh/p084-h02.png",
        "img2xUrl": "/assets/hinh-2x/p084-h02.png",
        "width": 267,
        "height": 302,
        "desc": "CHIÊU 9: A: Lùi chân phải đấm tay trái . B: Bước chân phải lên, chập hai bàn tay bền sườn phải đỡ đòn đấm, bụng hơi hóp, rồi đẩy ra trước."
      },
      {
        "id": "bai-15-m-11",
        "stepNo": "11",
        "assetId": "p084-h03",
        "displayId": "H0439",
        "pdfPage": 84,
        "imgUrl": "/assets/hinh/p084-h03.png",
        "img2xUrl": "/assets/hinh-2x/p084-h03.png",
        "width": 247,
        "height": 301,
        "desc": "CHIÊU 10: A: Bước chân phải lên đấm thẳng tay phải. B: Kéo chân phải về, hai tay kéo giật"
      },
      {
        "id": "bai-15-m-12",
        "stepNo": "12",
        "assetId": "p084-h04",
        "displayId": "H0440",
        "pdfPage": 84,
        "imgUrl": "/assets/hinh/p084-h04.png",
        "img2xUrl": "/assets/hinh-2x/p084-h04.png",
        "width": 258,
        "height": 301,
        "desc": "CHIÊU 13: A: Đấm tay trái. B: Bước chân phải lên, tay trái dựng thẳng ép cổ tayA, đông thời đánh cùi chỏ tay phải vào khuỷu tay A (bẻ tay)."
      },
      {
        "id": "bai-15-m-13",
        "stepNo": "13",
        "assetId": "p084-h05",
        "displayId": "H0441",
        "pdfPage": 84,
        "imgUrl": "/assets/hinh/p084-h05.png",
        "img2xUrl": "/assets/hinh-2x/p084-h05.png",
        "width": 259,
        "height": 301,
        "desc": "CHIÊU 12: A: Tiến chân trái, đấm thằng tay trái. B: Kéo chân phải về, hai tay đưa lên ngang vai, giật ngược chiều nhau. tay phải giật cổ tay, tay trái giật vàc khuỷu tay (bẻ tay A)."
      },
      {
        "id": "bai-15-m-14",
        "stepNo": "14",
        "assetId": "p084-h06",
        "displayId": "H0442",
        "pdfPage": 84,
        "imgUrl": "/assets/hinh/p084-h06.png",
        "img2xUrl": "/assets/hinh-2x/p084-h06.png",
        "width": 250,
        "height": 305,
        "desc": "CHIÊU 13: A: Đấm tay trái. B: Bước chân phải lên, tay trái dựng thẳng ép cổ tayA, đông thời đánh cùi chỏ tay phải vào khuỷu tay A (bẻ tay)."
      },
      {
        "id": "bai-15-m-15",
        "stepNo": "15",
        "assetId": "p084-h07",
        "displayId": "H0443",
        "pdfPage": 84,
        "imgUrl": "/assets/hinh/p084-h07.png",
        "img2xUrl": "/assets/hinh-2x/p084-h07.png",
        "width": 257,
        "height": 302,
        "desc": "CHIÊU 13: A: Đấm tay trái. B: Bước chân phải lên, tay trái dựng thẳng ép cổ tayA, đông thời đánh cùi chỏ tay phải vào khuỷu tay A (bẻ tay)."
      },
      {
        "id": "bai-15-m-16",
        "stepNo": "16",
        "assetId": "p084-h08",
        "displayId": "H0444",
        "pdfPage": 84,
        "imgUrl": "/assets/hinh/p084-h08.png",
        "img2xUrl": "/assets/hinh-2x/p084-h08.png",
        "width": 250,
        "height": 303,
        "desc": "CHIÊU 15: A: Lùi chân trái đấm thăng tay phải. B: Bước chân phải lên, căng tay trái thăng đỡ đòn, tay phải vòng qua gập cổ tay bắt vào khuỷu tay (A) bè."
      },
      {
        "id": "bai-15-m-17",
        "stepNo": "17",
        "assetId": "p085-h01",
        "displayId": "H0445",
        "pdfPage": 85,
        "imgUrl": "/assets/hinh/p085-h01.png",
        "img2xUrl": "/assets/hinh-2x/p085-h01.png",
        "width": 232,
        "height": 306,
        "desc": "CHIÊU 16: A: Tiến chân trái lên đứng thế kiềm dương đấm hai tay. B: Kéo chân phải về ngàng chân trái, đứng tấn kiềm dương, hai tay đưa ra chộp tay A, miết giật về phía mình."
      },
      {
        "id": "bai-15-m-18",
        "stepNo": "18",
        "assetId": "p085-h02",
        "displayId": "H0446",
        "pdfPage": 85,
        "imgUrl": "/assets/hinh/p085-h02.png",
        "img2xUrl": "/assets/hinh-2x/p085-h02.png",
        "width": 232,
        "height": 303,
        "desc": "CHIÊU 16: B: Kéo chân phải về, gập cổ tay phải gạt hai tay A sang phải, tay trái chém vào cổ A."
      },
      {
        "id": "bai-15-m-19",
        "stepNo": "19",
        "assetId": "p085-h03",
        "displayId": "H0447",
        "pdfPage": 85,
        "imgUrl": "/assets/hinh/p085-h03.png",
        "img2xUrl": "/assets/hinh-2x/p085-h03.png",
        "width": 246,
        "height": 301,
        "desc": "CHIÊU 18: A: Bước chân trái lên đấm thẳng tay trái. B: Kéo chân phải về, dùng cạnh trong tay trái và cạnh ngoài tay phải đỡ đòn."
      },
      {
        "id": "bai-15-m-20",
        "stepNo": "20",
        "assetId": "p085-h04",
        "displayId": "H0448",
        "pdfPage": 85,
        "imgUrl": "/assets/hinh/p085-h04.png",
        "img2xUrl": "/assets/hinh-2x/p085-h04.png",
        "width": 268,
        "height": 302,
        "desc": "CHIÊU 17: B: Đánh tiếp - Tay phái đánh thăng vào ngực A tay trái đánh vào căng tay A."
      },
      {
        "id": "bai-15-m-21",
        "stepNo": "21",
        "assetId": "p085-h05",
        "displayId": "H0449",
        "pdfPage": 85,
        "imgUrl": "/assets/hinh/p085-h05.png",
        "img2xUrl": "/assets/hinh-2x/p085-h05.png",
        "width": 267,
        "height": 303,
        "desc": "CHIÊU 18: A: Bước chân trái lên đấm thẳng tay trái. B: Kéo chân phải về, dùng cạnh trong tay trái và cạnh ngoài tay phải đỡ đòn."
      },
      {
        "id": "bai-15-m-22",
        "stepNo": "22",
        "assetId": "p085-h06",
        "displayId": "H0450",
        "pdfPage": 85,
        "imgUrl": "/assets/hinh/p085-h06.png",
        "img2xUrl": "/assets/hinh-2x/p085-h06.png",
        "width": 240,
        "height": 303,
        "desc": "CHIÊU 18: A: Đánh tiếp - Tiến chân phải đấm móc vào sườn trái của B. B: Giữ nguyên tư thế, bàn tay trái chém vào bụng A, căng tay trái đỡ chặn cánh tay A, bàn tay phải đỡ đòn A."
      },
      {
        "id": "bai-15-m-23",
        "stepNo": "23",
        "assetId": "p085-h07",
        "displayId": "H0451",
        "pdfPage": 85,
        "imgUrl": "/assets/hinh/p085-h07.png",
        "img2xUrl": "/assets/hinh-2x/p085-h07.png",
        "width": 242,
        "height": 305,
        "desc": "CHIÊU 48: !: A; Lùi chân trái về bằng chân phải, đấm khẳng tay trái. B: Trụ chân phải, hai tay chộp tay A, kéo giật về phía phải, thúc gối trái vào bụng rồi giật miết xuống bụng dưới."
      },
      {
        "id": "bai-15-m-24",
        "stepNo": "24",
        "assetId": "p085-h08",
        "displayId": "H0452",
        "pdfPage": 85,
        "imgUrl": "/assets/hinh/p085-h08.png",
        "img2xUrl": "/assets/hinh-2x/p085-h08.png",
        "width": 240,
        "height": 306,
        "desc": "CHIÊU 20: t: A: Đấm thẳng tay Ñ phải. 2 B:Kéochânphảivềngang c chân trái, đứng kiềm c dương, thót bụng, tay trái t"
      },
      {
        "id": "bai-15-m-25",
        "stepNo": "25",
        "assetId": "p086-h01",
        "displayId": "H0453",
        "pdfPage": 86,
        "imgUrl": "/assets/hinh/p086-h01.png",
        "img2xUrl": "/assets/hinh-2x/p086-h01.png",
        "width": 248,
        "height": 301,
        "desc": "CHIÊU 21: B: Đánh tiếp - Tay trái lật úp bàn tay kéo cổ tay A, tay phải chém vào cổ A."
      },
      {
        "id": "bai-15-m-26",
        "stepNo": "26",
        "assetId": "p086-h02",
        "displayId": "H0454",
        "pdfPage": 86,
        "imgUrl": "/assets/hinh/p086-h02.png",
        "img2xUrl": "/assets/hinh-2x/p086-h02.png",
        "width": 261,
        "height": 304,
        "desc": "CHIÊU 21: A: Đấm thẳng tay phải. B: Bước chân phải lên, hai tay đưa sang trái đè miết tay A, bàn tay trái ngửa, bàn tay phải úp."
      },
      {
        "id": "bai-15-m-27",
        "stepNo": "27",
        "assetId": "p086-h03",
        "displayId": "H0455",
        "pdfPage": 86,
        "imgUrl": "/assets/hinh/p086-h03.png",
        "img2xUrl": "/assets/hinh-2x/p086-h03.png",
        "width": 247,
        "height": 305,
        "desc": "CHIÊU 21: A: Bước chân phải lên đấm tiếp tay phải. B: Bước chân phải lên, hai tay cùng đánh mặt cô tay sang trái."
      },
      {
        "id": "bai-15-m-28",
        "stepNo": "28",
        "assetId": "p086-h04",
        "displayId": "H0456",
        "pdfPage": 86,
        "imgUrl": "/assets/hinh/p086-h04.png",
        "img2xUrl": "/assets/hinh-2x/p086-h04.png",
        "width": 268,
        "height": 302,
        "desc": "CHIÊU 21: A: Lùi chân phải đấm thăng tay trái. B: Kéo chân phải về, hai tay cùng đánh ra, tay trái đánh cạnh ngoài sang phải, tay phải đánh cạnh trong sang phải."
      },
      {
        "id": "bai-15-m-29",
        "stepNo": "29",
        "assetId": "p086-h05",
        "displayId": "H0457",
        "pdfPage": 86,
        "imgUrl": "/assets/hinh/p086-h05.png",
        "img2xUrl": "/assets/hinh-2x/p086-h05.png",
        "width": 258,
        "height": 305,
        "desc": "CHIÊU 21: A: Bước chân phải lên đấm tiếp tay phải. B: Bước chân phải lên, hai tay cùng đánh mặt cô tay sang trái."
      },
      {
        "id": "bai-15-m-30",
        "stepNo": "30",
        "assetId": "p086-h06",
        "displayId": "H0458",
        "pdfPage": 86,
        "imgUrl": "/assets/hinh/p086-h06.png",
        "img2xUrl": "/assets/hinh-2x/p086-h06.png",
        "width": 273,
        "height": 302,
        "desc": "CHIÊU 21: A: Lùi chân phải đấm thăng tay trái. B: Kéo chân phải về, hai tay cùng vỗ xuống tay A."
      },
      {
        "id": "bai-15-m-31",
        "stepNo": "31",
        "assetId": "p086-h07",
        "displayId": "H0459",
        "pdfPage": 86,
        "imgUrl": "/assets/hinh/p086-h07.png",
        "img2xUrl": "/assets/hinh-2x/p086-h07.png",
        "width": 255,
        "height": 303,
        "desc": "CHIÊU 21: B: Đánh tiếp - Tay trái đánh thăng vào ngực A, tay phải đè vào căng tay A."
      },
      {
        "id": "bai-15-m-32",
        "stepNo": "32",
        "assetId": "p086-h08",
        "displayId": "H0460",
        "pdfPage": 86,
        "imgUrl": "/assets/hinh/p086-h08.png",
        "img2xUrl": "/assets/hinh-2x/p086-h08.png",
        "width": 279,
        "height": 304,
        "desc": "CHIÊU 23: A: Giữ nguyên tư thế đấm thẳng tay trái. B: Bước chân phải lên, tẩy trái phía trong đấm vào cổ tay, tay phải phía ngoài, đấm vào khuỷu tay A."
      },
      {
        "id": "bai-15-m-33",
        "stepNo": "33",
        "assetId": "p086-h09",
        "displayId": "H0461",
        "pdfPage": 86,
        "imgUrl": "/assets/hinh/p086-h09.png",
        "img2xUrl": "/assets/hinh-2x/p086-h09.png",
        "width": 264,
        "height": 305,
        "desc": "CHIÊU 26: A: bước chân phải lên đứng thế kiềm dương, đấm thẳng hai tay. B: Kéo chân phải về ngang chân trái, đứng kiềm dương, hai bàn tay mở, đánh từ dưới lên vào hai cằng tay A."
      },
      {
        "id": "bai-15-m-34",
        "stepNo": "34",
        "assetId": "p087-h01",
        "displayId": "H0462",
        "pdfPage": 87,
        "imgUrl": "/assets/hinh/p087-h01.png",
        "img2xUrl": "/assets/hinh-2x/p087-h01.png",
        "width": 263,
        "height": 301,
        "desc": "CHIÊU 26: B: Giữ nguyên tư thế, xoay lật hai cổ tay, đề tay A xuống."
      },
      {
        "id": "bai-15-m-35",
        "stepNo": "35",
        "assetId": "p087-h02",
        "displayId": "H0463",
        "pdfPage": 87,
        "imgUrl": "/assets/hinh/p087-h02.png",
        "img2xUrl": "/assets/hinh-2x/p087-h02.png",
        "width": 227,
        "height": 305,
        "desc": "CHIÊU 26: B: Kéo chân phải về, tay phải gạt hai tay A, tay trái đánh quyền thẳng vào A."
      },
      {
        "id": "bai-15-m-36",
        "stepNo": "36",
        "assetId": "p087-h03",
        "displayId": "H0464",
        "pdfPage": 87,
        "imgUrl": "/assets/hinh/p087-h03.png",
        "img2xUrl": "/assets/hinh-2x/p087-h03.png",
        "width": 231,
        "height": 305,
        "desc": "CHIÊU 27: A: Lùi chân phải đấm thẳng tay trái. B: Bước chân phải lên, tay trái dựng thẳng đỡ đòn, tay xà phải xia vào mặt A."
      },
      {
        "id": "bai-15-m-37",
        "stepNo": "37",
        "assetId": "p087-h04",
        "displayId": "H0465",
        "pdfPage": 87,
        "imgUrl": "/assets/hinh/p087-h04.png",
        "img2xUrl": "/assets/hinh-2x/p087-h04.png",
        "width": 231,
        "height": 306,
        "desc": "CHIÊU 28: A: Giữ nguyên tư thế, đấm thẳng tay trái. B: Kéo chân phải về, tay phải dựng thẳng đỡ đòn, tay báo trái đánh vào thái dương A,"
      },
      {
        "id": "bai-15-m-38",
        "stepNo": "38",
        "assetId": "p087-h05",
        "displayId": "H0466",
        "pdfPage": 87,
        "imgUrl": "/assets/hinh/p087-h05.png",
        "img2xUrl": "/assets/hinh-2x/p087-h05.png",
        "width": 251,
        "height": 308,
        "desc": "CHIÊU 27: A: Lùi chân phải đấm thẳng tay trái. B: Bước chân phải lên, tay trái dựng thẳng đỡ đòn, tay xà phải xia vào mặt A."
      },
      {
        "id": "bai-15-m-39",
        "stepNo": "39",
        "assetId": "p087-h06",
        "displayId": "H0467",
        "pdfPage": 87,
        "imgUrl": "/assets/hinh/p087-h06.png",
        "img2xUrl": "/assets/hinh-2x/p087-h06.png",
        "width": 254,
        "height": 301,
        "desc": "CHIÊU 28: A: Giữ nguyên tư thế, đấm thẳng tay trái. B: Kéo chân phải về, tay phải dựng thẳng đỡ đòn, tay báo trái đánh vào thái dương A,"
      },
      {
        "id": "bai-15-m-40",
        "stepNo": "40",
        "assetId": "p087-h07",
        "displayId": "H0468",
        "pdfPage": 87,
        "imgUrl": "/assets/hinh/p087-h07.png",
        "img2xUrl": "/assets/hinh-2x/p087-h07.png",
        "width": 238,
        "height": 305,
        "desc": "CHIÊU 29: A: Đấm thẳng tay trầi. B: Bước chân phải lên, tay trái ở trong ép vào cổ tay A, đồng thời tay phải dựng thẳng đánh vào khớp khuỷu tay, bẻ tay A."
      },
      {
        "id": "bai-15-m-41",
        "stepNo": "41",
        "assetId": "p087-h08",
        "displayId": "H0469",
        "pdfPage": 87,
        "imgUrl": "/assets/hinh/p087-h08.png",
        "img2xUrl": "/assets/hinh-2x/p087-h08.png",
        "width": 258,
        "height": 302,
        "desc": "CHIÊU 30: A: Bước chân phải lên đấm tay phải. B: Kéo chân phải về, hai tay chập ở cạnh sườn trái đánh ra xiết vào cổ tay A, đấy ra."
      },
      {
        "id": "bai-15-m-42",
        "stepNo": "42",
        "assetId": "p088-h01",
        "displayId": "H0470",
        "pdfPage": 88,
        "imgUrl": "/assets/hinh/p088-h01.png",
        "img2xUrl": "/assets/hinh-2x/p088-h01.png",
        "width": 223,
        "height": 306,
        "desc": "CHIÊU 30: A: Lùi chân phải đấm hai tay, tay trái trên tay phải dưới. B: Bước chân phải lên, tay phải dựng thăng, tay trái thấp hơn, hai tay phất sang trái đỡ đòn."
      },
      {
        "id": "bai-15-m-43",
        "stepNo": "43",
        "assetId": "p088-h02",
        "displayId": "H0471",
        "pdfPage": 88,
        "imgUrl": "/assets/hinh/p088-h02.png",
        "img2xUrl": "/assets/hinh-2x/p088-h02.png",
        "width": 206,
        "height": 303,
        "desc": "CHIÊU 32;: A: Bước chân phải lên đứng tấn kiềm dương, đấm thẳng hai tay. B: Kéo chân phải về ngang chân trái, đứng kiềm dương, đưa hai cánh tay về trước ngực, xoay hai tay vào trong kẹp hai tay A kéo vào sau đó bật ngược lại đẩy ra."
      },
      {
        "id": "bai-15-m-44",
        "stepNo": "44",
        "assetId": "p088-h03",
        "displayId": "H0472",
        "pdfPage": 88,
        "imgUrl": "/assets/hinh/p088-h03.png",
        "img2xUrl": "/assets/hinh-2x/p088-h03.png",
        "width": 278,
        "height": 303,
        "desc": "CHIÊU 33: B: Kéo chân phải về, hai tay quyền, tay phải đánh từ trên xuống cô tay A, tay trái đánh từ dưới lên khớp khuỷu tay, bẻ tay A."
      },
      {
        "id": "bai-15-m-45",
        "stepNo": "45",
        "assetId": "p088-h04",
        "displayId": "H0473",
        "pdfPage": 88,
        "imgUrl": "/assets/hinh/p088-h04.png",
        "img2xUrl": "/assets/hinh-2x/p088-h04.png",
        "width": 259,
        "height": 303,
        "desc": "CHIÊU 34: A: Đấm tay trái. B: Bước chân phải lên,tay trái thủ trước ngực, tay xà phải kéo giật về mang tai đánh cổ tay đỡ đòn."
      },
      {
        "id": "bai-15-m-46",
        "stepNo": "46",
        "assetId": "p088-h05",
        "displayId": "H0474",
        "pdfPage": 88,
        "imgUrl": "/assets/hinh/p088-h05.png",
        "img2xUrl": "/assets/hinh-2x/p088-h05.png",
        "width": 269,
        "height": 303,
        "desc": "CHIÊU 36: A: Lùi chân phải, tay phải đấm. B: Bước chân phải lên, tay trái than thủ, tay phải đấm"
      },
      {
        "id": "bai-15-m-47",
        "stepNo": "47",
        "assetId": "p088-h06",
        "displayId": "H0475",
        "pdfPage": 88,
        "imgUrl": "/assets/hinh/p088-h06.png",
        "img2xUrl": "/assets/hinh-2x/p088-h06.png",
        "width": 228,
        "height": 301,
        "desc": "CHIÊU 36: A: Bước chân phải lên đầm tay phải. B: Kéo chân phải về, đánh cùi chỗ tay trái xuống cổ tay A, tay phải thú trước ngực."
      },
      {
        "id": "bai-15-m-48",
        "stepNo": "48",
        "assetId": "p088-h07",
        "displayId": "H0476",
        "pdfPage": 88,
        "imgUrl": "/assets/hinh/p088-h07.png",
        "img2xUrl": "/assets/hinh-2x/p088-h07.png",
        "width": 236,
        "height": 302,
        "desc": "CHIÊU 36: A: Lùi chân phải, tay phải đấm. B: Bước chân phải lên, tay trái than thủ, tay phải đấm"
      },
      {
        "id": "bai-15-m-49",
        "stepNo": "49",
        "assetId": "p088-h08",
        "displayId": "H0477",
        "pdfPage": 88,
        "imgUrl": "/assets/hinh/p088-h08.png",
        "img2xUrl": "/assets/hinh-2x/p088-h08.png",
        "width": 283,
        "height": 303,
        "desc": "CHIÊU 38: A: Bước chân phải lên đấm tay phải. B: Bước chân phải lên, lắc khuỷu tay phải sang trái đỡ đòn, tay trái thủ trước ngực."
      },
      {
        "id": "bai-15-m-50",
        "stepNo": "50",
        "assetId": "p089-h01",
        "displayId": "H0478",
        "pdfPage": 89,
        "imgUrl": "/assets/hinh/p089-h01.png",
        "img2xUrl": "/assets/hinh-2x/p089-h01.png",
        "width": 255,
        "height": 301,
        "desc": "CHIÊU 36: B: Giữ nguyên tư thế, tay phải tỳ tay A, tay trái đánh lưng nắm đấm vào mặt A."
      },
      {
        "id": "bai-15-m-51",
        "stepNo": "51",
        "assetId": "p089-h02",
        "displayId": "H0479",
        "pdfPage": 89,
        "imgUrl": "/assets/hinh/p089-h02.png",
        "img2xUrl": "/assets/hinh-2x/p089-h02.png",
        "width": 268,
        "height": 300,
        "desc": "CHIÊU 39: A: Giữ nguyên tư thế đấm tay phải. B: Kéo chân phải về , tay phải thủ trước ngực, cùi chỏ tay trái đánh ra sườn trái đỡ đòn."
      },
      {
        "id": "bai-15-m-52",
        "stepNo": "52",
        "assetId": "p089-h03",
        "displayId": "H0480",
        "pdfPage": 89,
        "imgUrl": "/assets/hinh/p089-h03.png",
        "img2xUrl": "/assets/hinh-2x/p089-h03.png",
        "width": 245,
        "height": 301,
        "desc": "CHIÊU 39: B: Giữ nguyên tư thế, chùng chân, tay phải đánh sang trái, tay trái đánh lưng năm đấm vào hạ bộ A."
      },
      {
        "id": "bai-15-m-53",
        "stepNo": "53",
        "assetId": "p089-h04",
        "displayId": "H0481",
        "pdfPage": 89,
        "imgUrl": "/assets/hinh/p089-h04.png",
        "img2xUrl": "/assets/hinh-2x/p089-h04.png",
        "width": 266,
        "height": 301,
        "desc": "CHIÊU 39: A: Giữ nguyên tư thế đấm tay phải. B: Kéo chân phải về , tay phải thủ trước ngực, cùi chỏ tay trái đánh ra sườn trái đỡ đòn."
      },
      {
        "id": "bai-15-m-54",
        "stepNo": "54",
        "assetId": "p089-h05",
        "displayId": "H0482",
        "pdfPage": 89,
        "imgUrl": "/assets/hinh/p089-h05.png",
        "img2xUrl": "/assets/hinh-2x/p089-h05.png",
        "width": 249,
        "height": 302,
        "desc": "CHIÊU 40: B: Giữ nguyên tư thế chùng chân, tay trái thủ ngang mang tai, tay phải : đánh lưng nắm đấm vào hạ bộ A."
      },
      {
        "id": "bai-15-m-55",
        "stepNo": "55",
        "assetId": "p089-h06",
        "displayId": "H0483",
        "pdfPage": 89,
        "imgUrl": "/assets/hinh/p089-h06.png",
        "img2xUrl": "/assets/hinh-2x/p089-h06.png",
        "width": 253,
        "height": 302,
        "desc": "CHIÊU 40: À: Lùi chân phải đấm tay trái. B: Bước chân phải lên, hất cùi chỏ tay phải lên trên đỡ đòn A, tay trái thủ."
      },
      {
        "id": "bai-15-m-56",
        "stepNo": "56",
        "assetId": "p089-h07",
        "displayId": "H0484",
        "pdfPage": 89,
        "imgUrl": "/assets/hinh/p089-h07.png",
        "img2xUrl": "/assets/hinh-2x/p089-h07.png",
        "width": 265,
        "height": 301,
        "desc": "CHIÊU 42: A: Lùi chân phải đấm thăng tay trái. B: Bước chân phải lên, tay trái nắm cổ tay vặn giật tay A, đánh chặn cánh tay phải xuống khuỷu tay, bẻ tayA."
      },
      {
        "id": "bai-15-m-57",
        "stepNo": "57",
        "assetId": "p089-h08",
        "displayId": "H0485",
        "pdfPage": 89,
        "imgUrl": "/assets/hinh/p089-h08.png",
        "img2xUrl": "/assets/hinh-2x/p089-h08.png",
        "width": 261,
        "height": 302,
        "desc": "CHIÊU 41: A: Bước chân phải lên đấm thẳng tay phải. B: Kéo chân phảhvề, tay trái bàng thủ, tay phải nắm đấm thủ sát nách."
      },
      {
        "id": "bai-15-m-58",
        "stepNo": "58",
        "assetId": "p089-h09",
        "displayId": "H0486",
        "pdfPage": 89,
        "imgUrl": "/assets/hinh/p089-h09.png",
        "img2xUrl": "/assets/hinh-2x/p089-h09.png",
        "width": 254,
        "height": 303,
        "desc": "CHIÊU 42: A: Lùi chân phải đấm thăng tay trái. B: Bước chân phải lên, tay trái nắm cổ tay vặn giật tay A, đánh chặn cánh tay phải xuống khuỷu tay, bẻ tayA."
      },
      {
        "id": "bai-15-m-59",
        "stepNo": "59",
        "assetId": "p090-h01",
        "displayId": "H0487",
        "pdfPage": 90,
        "imgUrl": "/assets/hinh/p090-h01.png",
        "img2xUrl": "/assets/hinh-2x/p090-h01.png",
        "width": 263,
        "height": 300,
        "desc": "CHIÊU 33: B: Kéo chân phải về, hai tay quyền, tay phải đánh từ trên xuống cô tay A, tay trái đánh từ dưới lên khớp khuỷu tay, bẻ tay A."
      },
      {
        "id": "bai-15-m-60",
        "stepNo": "60",
        "assetId": "p090-h02",
        "displayId": "H0488",
        "pdfPage": 90,
        "imgUrl": "/assets/hinh/p090-h02.png",
        "img2xUrl": "/assets/hinh-2x/p090-h02.png",
        "width": 226,
        "height": 303,
        "desc": "CHIÊU 44: A: Bước chân phải lên đứng thế kiểm dương, đấm hai tay."
      },
      {
        "id": "bai-15-m-61",
        "stepNo": "61",
        "assetId": "p090-h03",
        "displayId": "H0489",
        "pdfPage": 90,
        "imgUrl": "/assets/hinh/p090-h03.png",
        "img2xUrl": "/assets/hinh-2x/p090-h03.png",
        "width": 241,
        "height": 301,
        "desc": "CHIÊU 45: B: Kéo chân phải về, dùng hai tay long, tay long phải thủ trước hạ bộ, tay long trái vỏ vào hạ bộ A."
      },
      {
        "id": "bai-15-m-62",
        "stepNo": "62",
        "assetId": "p090-h04",
        "displayId": "H0490",
        "pdfPage": 90,
        "imgUrl": "/assets/hinh/p090-h04.png",
        "img2xUrl": "/assets/hinh-2x/p090-h04.png",
        "width": 270,
        "height": 303,
        "desc": "CHIÊU 46: A: Lùi chân trái đấm thăng tay phải."
      },
      {
        "id": "bai-15-m-63",
        "stepNo": "63",
        "assetId": "p090-h05",
        "displayId": "H0491",
        "pdfPage": 90,
        "imgUrl": "/assets/hinh/p090-h05.png",
        "img2xUrl": "/assets/hinh-2x/p090-h05.png",
        "width": 256,
        "height": 300,
        "desc": "CHIÊU 48: !: A: Giữ nguyên tư thể đấm thẳng tay trái. B: Trụ chân trái, chuyển ! hai tay chộp tay A, giật về ì phía trái, đánh vòng gôi | phải vào vùng thận trái A."
      },
      {
        "id": "bai-15-m-64",
        "stepNo": "64",
        "assetId": "p090-h06",
        "displayId": "H0492",
        "pdfPage": 90,
        "imgUrl": "/assets/hinh/p090-h06.png",
        "img2xUrl": "/assets/hinh-2x/p090-h06.png",
        "width": 173,
        "height": 301,
        "desc": "CHIÊU 48: !: A; Lùi chân trái về bằng chân phải, đấm khẳng tay trái. B: Trụ chân phải, hai tay chộp tay A, kéo giật về phía phải, thúc gối trái vào bụng rồi giật miết xuống bụng dưới."
      },
      {
        "id": "bai-15-m-65",
        "stepNo": "65",
        "assetId": "p090-h07",
        "displayId": "H0493",
        "pdfPage": 90,
        "imgUrl": "/assets/hinh/p090-h07.png",
        "img2xUrl": "/assets/hinh-2x/p090-h07.png",
        "width": 229,
        "height": 302,
        "desc": "CHIÊU 48: !: A: Giữ nguyên tư thể đấm thẳng tay trái. B: Trụ chân trái, chuyển ! hai tay chộp tay A, giật về ì phía trái, đánh vòng gôi | phải vào vùng thận trái A."
      },
      {
        "id": "bai-15-m-66",
        "stepNo": "66",
        "assetId": "p090-h08",
        "displayId": "H0494",
        "pdfPage": 90,
        "imgUrl": "/assets/hinh/p090-h08.png",
        "img2xUrl": "/assets/hinh-2x/p090-h08.png",
        "width": 255,
        "height": 301,
        "desc": "CHIÊU 51: A: Giữ nguyên tư thế, đấm thẳng tay trái."
      },
      {
        "id": "bai-15-m-67",
        "stepNo": "67",
        "assetId": "p091-h01",
        "displayId": "H0495",
        "pdfPage": 91,
        "imgUrl": "/assets/hinh/p091-h01.png",
        "img2xUrl": "/assets/hinh-2x/p091-h01.png",
        "width": 244,
        "height": 303,
        "desc": "CHIÊU 50: A: Tiến chân trái lên đấm thẳng tay trái."
      },
      {
        "id": "bai-15-m-68",
        "stepNo": "68",
        "assetId": "p091-h02",
        "displayId": "H0496",
        "pdfPage": 91,
        "imgUrl": "/assets/hinh/p091-h02.png",
        "img2xUrl": "/assets/hinh-2x/p091-h02.png",
        "width": 268,
        "height": 301,
        "desc": "CHIÊU 51: A: Giữ nguyên tư thế, đấm thẳng tay trái."
      },
      {
        "id": "bai-15-m-69",
        "stepNo": "69",
        "assetId": "p091-h03",
        "displayId": "H0497",
        "pdfPage": 91,
        "imgUrl": "/assets/hinh/p091-h03.png",
        "img2xUrl": "/assets/hinh-2x/p091-h03.png",
        "width": 256,
        "height": 300,
        "desc": "CHIÊU 52: |: A: Đấm tay trái. ! B: Trụ chân trái, đánh như động tác 6, đồng thời lắc cổ chân phải đá móc vào hạ bộ A."
      },
      {
        "id": "bai-15-m-70",
        "stepNo": "70",
        "assetId": "p091-h04",
        "displayId": "H0498",
        "pdfPage": 91,
        "imgUrl": "/assets/hinh/p091-h04.png",
        "img2xUrl": "/assets/hinh-2x/p091-h04.png",
        "width": 270,
        "height": 301,
        "desc": "CHIÊU 55: Tương tự động tác"
      },
      {
        "id": "bai-15-m-71",
        "stepNo": "71",
        "assetId": "p091-h05",
        "displayId": "H0499",
        "pdfPage": 91,
        "imgUrl": "/assets/hinh/p091-h05.png",
        "img2xUrl": "/assets/hinh-2x/p091-h05.png",
        "width": 257,
        "height": 300,
        "desc": "CHIÊU 54;: A: Tiến chân trái lên, 1ấm thẳng tay trái. B: Trụ chân trái, đánh như động tác 20.1, đồng hời lắc cổ chân phải đá móc vào hạ bộ A."
      }
    ],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-16",
    "title": "Giới thiệu mộc nhân",
    "groupId": "moc-nhan",
    "bookOrder": 16,
    "contentType": "reading",
    "pdfPages": [
      92,
      93,
      94
    ],
    "pageRange": "Trang PDF 92 – 94",
    "assetCount": 4,
    "assets": [
      {
        "assetId": "p092-h01",
        "displayId": "H0500",
        "pdfPage": 92,
        "imgUrl": "/assets/hinh/p092-h01.png",
        "img2xUrl": "/assets/hinh-2x/p092-h01.png",
        "width": 444,
        "height": 754
      },
      {
        "assetId": "p093-h01",
        "displayId": "H0501",
        "pdfPage": 93,
        "imgUrl": "/assets/hinh/p093-h01.png",
        "img2xUrl": "/assets/hinh-2x/p093-h01.png",
        "width": 399,
        "height": 503
      },
      {
        "assetId": "p093-h02",
        "displayId": "H0502",
        "pdfPage": 93,
        "imgUrl": "/assets/hinh/p093-h02.png",
        "img2xUrl": "/assets/hinh-2x/p093-h02.png",
        "width": 961,
        "height": 443
      },
      {
        "assetId": "p094-h01",
        "displayId": "H0503",
        "pdfPage": 94,
        "imgUrl": "/assets/hinh/p094-h01.png",
        "img2xUrl": "/assets/hinh-2x/p094-h01.png",
        "width": 908,
        "height": 726
      }
    ],
    "motions": [
    
    ],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-17",
    "title": "Bài mộc nhân số 1",
    "groupId": "moc-nhan",
    "bookOrder": 17,
    "contentType": "practice_or_mixed",
    "pdfPages": [
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105
    ],
    "pageRange": "Trang PDF 95 – 105",
    "assetCount": 80,
    "assets": [
      {
        "assetId": "p095-h01",
        "displayId": "H0504",
        "pdfPage": 95,
        "imgUrl": "/assets/hinh/p095-h01.png",
        "img2xUrl": "/assets/hinh-2x/p095-h01.png",
        "width": 248,
        "height": 347
      },
      {
        "assetId": "p095-h02",
        "displayId": "H0505",
        "pdfPage": 95,
        "imgUrl": "/assets/hinh/p095-h02.png",
        "img2xUrl": "/assets/hinh-2x/p095-h02.png",
        "width": 230,
        "height": 346
      },
      {
        "assetId": "p095-h03",
        "displayId": "H0506",
        "pdfPage": 95,
        "imgUrl": "/assets/hinh/p095-h03.png",
        "img2xUrl": "/assets/hinh-2x/p095-h03.png",
        "width": 227,
        "height": 347
      },
      {
        "assetId": "p095-h04",
        "displayId": "H0507",
        "pdfPage": 95,
        "imgUrl": "/assets/hinh/p095-h04.png",
        "img2xUrl": "/assets/hinh-2x/p095-h04.png",
        "width": 250,
        "height": 356
      },
      {
        "assetId": "p095-h05",
        "displayId": "H0508",
        "pdfPage": 95,
        "imgUrl": "/assets/hinh/p095-h05.png",
        "img2xUrl": "/assets/hinh-2x/p095-h05.png",
        "width": 243,
        "height": 356
      },
      {
        "assetId": "p095-h06",
        "displayId": "H0509",
        "pdfPage": 95,
        "imgUrl": "/assets/hinh/p095-h06.png",
        "img2xUrl": "/assets/hinh-2x/p095-h06.png",
        "width": 259,
        "height": 351
      },
      {
        "assetId": "p095-h07",
        "displayId": "H0510",
        "pdfPage": 95,
        "imgUrl": "/assets/hinh/p095-h07.png",
        "img2xUrl": "/assets/hinh-2x/p095-h07.png",
        "width": 242,
        "height": 341
      },
      {
        "assetId": "p095-h08",
        "displayId": "H0511",
        "pdfPage": 95,
        "imgUrl": "/assets/hinh/p095-h08.png",
        "img2xUrl": "/assets/hinh-2x/p095-h08.png",
        "width": 239,
        "height": 347
      },
      {
        "assetId": "p096-h01",
        "displayId": "H0512",
        "pdfPage": 96,
        "imgUrl": "/assets/hinh/p096-h01.png",
        "img2xUrl": "/assets/hinh-2x/p096-h01.png",
        "width": 229,
        "height": 342
      },
      {
        "assetId": "p096-h02",
        "displayId": "H0513",
        "pdfPage": 96,
        "imgUrl": "/assets/hinh/p096-h02.png",
        "img2xUrl": "/assets/hinh-2x/p096-h02.png",
        "width": 234,
        "height": 348
      },
      {
        "assetId": "p096-h03",
        "displayId": "H0514",
        "pdfPage": 96,
        "imgUrl": "/assets/hinh/p096-h03.png",
        "img2xUrl": "/assets/hinh-2x/p096-h03.png",
        "width": 249,
        "height": 356
      },
      {
        "assetId": "p096-h04",
        "displayId": "H0515",
        "pdfPage": 96,
        "imgUrl": "/assets/hinh/p096-h04.png",
        "img2xUrl": "/assets/hinh-2x/p096-h04.png",
        "width": 243,
        "height": 355
      },
      {
        "assetId": "p096-h05",
        "displayId": "H0516",
        "pdfPage": 96,
        "imgUrl": "/assets/hinh/p096-h05.png",
        "img2xUrl": "/assets/hinh-2x/p096-h05.png",
        "width": 248,
        "height": 356
      },
      {
        "assetId": "p096-h06",
        "displayId": "H0517",
        "pdfPage": 96,
        "imgUrl": "/assets/hinh/p096-h06.png",
        "img2xUrl": "/assets/hinh-2x/p096-h06.png",
        "width": 239,
        "height": 355
      },
      {
        "assetId": "p096-h07",
        "displayId": "H0518",
        "pdfPage": 96,
        "imgUrl": "/assets/hinh/p096-h07.png",
        "img2xUrl": "/assets/hinh-2x/p096-h07.png",
        "width": 247,
        "height": 347
      },
      {
        "assetId": "p096-h08",
        "displayId": "H0519",
        "pdfPage": 96,
        "imgUrl": "/assets/hinh/p096-h08.png",
        "img2xUrl": "/assets/hinh-2x/p096-h08.png",
        "width": 246,
        "height": 352
      },
      {
        "assetId": "p097-h01",
        "displayId": "H0520",
        "pdfPage": 97,
        "imgUrl": "/assets/hinh/p097-h01.png",
        "img2xUrl": "/assets/hinh-2x/p097-h01.png",
        "width": 236,
        "height": 354
      },
      {
        "assetId": "p097-h02",
        "displayId": "H0521",
        "pdfPage": 97,
        "imgUrl": "/assets/hinh/p097-h02.png",
        "img2xUrl": "/assets/hinh-2x/p097-h02.png",
        "width": 220,
        "height": 344
      },
      {
        "assetId": "p097-h03",
        "displayId": "H0522",
        "pdfPage": 97,
        "imgUrl": "/assets/hinh/p097-h03.png",
        "img2xUrl": "/assets/hinh-2x/p097-h03.png",
        "width": 222,
        "height": 359
      },
      {
        "assetId": "p097-h04",
        "displayId": "H0523",
        "pdfPage": 97,
        "imgUrl": "/assets/hinh/p097-h04.png",
        "img2xUrl": "/assets/hinh-2x/p097-h04.png",
        "width": 230,
        "height": 357
      },
      {
        "assetId": "p097-h05",
        "displayId": "H0524",
        "pdfPage": 97,
        "imgUrl": "/assets/hinh/p097-h05.png",
        "img2xUrl": "/assets/hinh-2x/p097-h05.png",
        "width": 222,
        "height": 353
      },
      {
        "assetId": "p097-h06",
        "displayId": "H0525",
        "pdfPage": 97,
        "imgUrl": "/assets/hinh/p097-h06.png",
        "img2xUrl": "/assets/hinh-2x/p097-h06.png",
        "width": 222,
        "height": 347
      },
      {
        "assetId": "p097-h07",
        "displayId": "H0526",
        "pdfPage": 97,
        "imgUrl": "/assets/hinh/p097-h07.png",
        "img2xUrl": "/assets/hinh-2x/p097-h07.png",
        "width": 239,
        "height": 337
      },
      {
        "assetId": "p097-h08",
        "displayId": "H0527",
        "pdfPage": 97,
        "imgUrl": "/assets/hinh/p097-h08.png",
        "img2xUrl": "/assets/hinh-2x/p097-h08.png",
        "width": 241,
        "height": 352
      },
      {
        "assetId": "p098-h01",
        "displayId": "H0528",
        "pdfPage": 98,
        "imgUrl": "/assets/hinh/p098-h01.png",
        "img2xUrl": "/assets/hinh-2x/p098-h01.png",
        "width": 249,
        "height": 346
      },
      {
        "assetId": "p098-h02",
        "displayId": "H0529",
        "pdfPage": 98,
        "imgUrl": "/assets/hinh/p098-h02.png",
        "img2xUrl": "/assets/hinh-2x/p098-h02.png",
        "width": 245,
        "height": 344
      },
      {
        "assetId": "p098-h03",
        "displayId": "H0530",
        "pdfPage": 98,
        "imgUrl": "/assets/hinh/p098-h03.png",
        "img2xUrl": "/assets/hinh-2x/p098-h03.png",
        "width": 245,
        "height": 349
      },
      {
        "assetId": "p098-h04",
        "displayId": "H0531",
        "pdfPage": 98,
        "imgUrl": "/assets/hinh/p098-h04.png",
        "img2xUrl": "/assets/hinh-2x/p098-h04.png",
        "width": 235,
        "height": 349
      },
      {
        "assetId": "p098-h05",
        "displayId": "H0532",
        "pdfPage": 98,
        "imgUrl": "/assets/hinh/p098-h05.png",
        "img2xUrl": "/assets/hinh-2x/p098-h05.png",
        "width": 224,
        "height": 359
      },
      {
        "assetId": "p098-h06",
        "displayId": "H0533",
        "pdfPage": 98,
        "imgUrl": "/assets/hinh/p098-h06.png",
        "img2xUrl": "/assets/hinh-2x/p098-h06.png",
        "width": 227,
        "height": 358
      },
      {
        "assetId": "p098-h07",
        "displayId": "H0534",
        "pdfPage": 98,
        "imgUrl": "/assets/hinh/p098-h07.png",
        "img2xUrl": "/assets/hinh-2x/p098-h07.png",
        "width": 241,
        "height": 357
      },
      {
        "assetId": "p099-h01",
        "displayId": "H0535",
        "pdfPage": 99,
        "imgUrl": "/assets/hinh/p099-h01.png",
        "img2xUrl": "/assets/hinh-2x/p099-h01.png",
        "width": 245,
        "height": 344
      },
      {
        "assetId": "p099-h02",
        "displayId": "H0536",
        "pdfPage": 99,
        "imgUrl": "/assets/hinh/p099-h02.png",
        "img2xUrl": "/assets/hinh-2x/p099-h02.png",
        "width": 237,
        "height": 344
      },
      {
        "assetId": "p099-h03",
        "displayId": "H0537",
        "pdfPage": 99,
        "imgUrl": "/assets/hinh/p099-h03.png",
        "img2xUrl": "/assets/hinh-2x/p099-h03.png",
        "width": 246,
        "height": 349
      },
      {
        "assetId": "p099-h04",
        "displayId": "H0538",
        "pdfPage": 99,
        "imgUrl": "/assets/hinh/p099-h04.png",
        "img2xUrl": "/assets/hinh-2x/p099-h04.png",
        "width": 231,
        "height": 334
      },
      {
        "assetId": "p099-h05",
        "displayId": "H0539",
        "pdfPage": 99,
        "imgUrl": "/assets/hinh/p099-h05.png",
        "img2xUrl": "/assets/hinh-2x/p099-h05.png",
        "width": 250,
        "height": 346
      },
      {
        "assetId": "p099-h06",
        "displayId": "H0540",
        "pdfPage": 99,
        "imgUrl": "/assets/hinh/p099-h06.png",
        "img2xUrl": "/assets/hinh-2x/p099-h06.png",
        "width": 245,
        "height": 343
      },
      {
        "assetId": "p099-h07",
        "displayId": "H0541",
        "pdfPage": 99,
        "imgUrl": "/assets/hinh/p099-h07.png",
        "img2xUrl": "/assets/hinh-2x/p099-h07.png",
        "width": 229,
        "height": 357
      },
      {
        "assetId": "p099-h08",
        "displayId": "H0542",
        "pdfPage": 99,
        "imgUrl": "/assets/hinh/p099-h08.png",
        "img2xUrl": "/assets/hinh-2x/p099-h08.png",
        "width": 235,
        "height": 354
      },
      {
        "assetId": "p099-h09",
        "displayId": "H0543",
        "pdfPage": 99,
        "imgUrl": "/assets/hinh/p099-h09.png",
        "img2xUrl": "/assets/hinh-2x/p099-h09.png",
        "width": 238,
        "height": 350
      },
      {
        "assetId": "p100-h01",
        "displayId": "H0544",
        "pdfPage": 100,
        "imgUrl": "/assets/hinh/p100-h01.png",
        "img2xUrl": "/assets/hinh-2x/p100-h01.png",
        "width": 229,
        "height": 344
      },
      {
        "assetId": "p100-h02",
        "displayId": "H0545",
        "pdfPage": 100,
        "imgUrl": "/assets/hinh/p100-h02.png",
        "img2xUrl": "/assets/hinh-2x/p100-h02.png",
        "width": 237,
        "height": 343
      },
      {
        "assetId": "p100-h03",
        "displayId": "H0546",
        "pdfPage": 100,
        "imgUrl": "/assets/hinh/p100-h03.png",
        "img2xUrl": "/assets/hinh-2x/p100-h03.png",
        "width": 247,
        "height": 349
      },
      {
        "assetId": "p100-h04",
        "displayId": "H0547",
        "pdfPage": 100,
        "imgUrl": "/assets/hinh/p100-h04.png",
        "img2xUrl": "/assets/hinh-2x/p100-h04.png",
        "width": 247,
        "height": 348
      },
      {
        "assetId": "p100-h05",
        "displayId": "H0548",
        "pdfPage": 100,
        "imgUrl": "/assets/hinh/p100-h05.png",
        "img2xUrl": "/assets/hinh-2x/p100-h05.png",
        "width": 247,
        "height": 354
      },
      {
        "assetId": "p100-h06",
        "displayId": "H0549",
        "pdfPage": 100,
        "imgUrl": "/assets/hinh/p100-h06.png",
        "img2xUrl": "/assets/hinh-2x/p100-h06.png",
        "width": 237,
        "height": 345
      },
      {
        "assetId": "p100-h07",
        "displayId": "H0550",
        "pdfPage": 100,
        "imgUrl": "/assets/hinh/p100-h07.png",
        "img2xUrl": "/assets/hinh-2x/p100-h07.png",
        "width": 235,
        "height": 353
      },
      {
        "assetId": "p101-h01",
        "displayId": "H0551",
        "pdfPage": 101,
        "imgUrl": "/assets/hinh/p101-h01.png",
        "img2xUrl": "/assets/hinh-2x/p101-h01.png",
        "width": 238,
        "height": 354
      },
      {
        "assetId": "p101-h02",
        "displayId": "H0552",
        "pdfPage": 101,
        "imgUrl": "/assets/hinh/p101-h02.png",
        "img2xUrl": "/assets/hinh-2x/p101-h02.png",
        "width": 241,
        "height": 353
      },
      {
        "assetId": "p101-h03",
        "displayId": "H0553",
        "pdfPage": 101,
        "imgUrl": "/assets/hinh/p101-h03.png",
        "img2xUrl": "/assets/hinh-2x/p101-h03.png",
        "width": 224,
        "height": 347
      },
      {
        "assetId": "p101-h04",
        "displayId": "H0554",
        "pdfPage": 101,
        "imgUrl": "/assets/hinh/p101-h04.png",
        "img2xUrl": "/assets/hinh-2x/p101-h04.png",
        "width": 223,
        "height": 350
      },
      {
        "assetId": "p101-h05",
        "displayId": "H0555",
        "pdfPage": 101,
        "imgUrl": "/assets/hinh/p101-h05.png",
        "img2xUrl": "/assets/hinh-2x/p101-h05.png",
        "width": 238,
        "height": 355
      },
      {
        "assetId": "p101-h06",
        "displayId": "H0556",
        "pdfPage": 101,
        "imgUrl": "/assets/hinh/p101-h06.png",
        "img2xUrl": "/assets/hinh-2x/p101-h06.png",
        "width": 241,
        "height": 348
      },
      {
        "assetId": "p101-h07",
        "displayId": "H0557",
        "pdfPage": 101,
        "imgUrl": "/assets/hinh/p101-h07.png",
        "img2xUrl": "/assets/hinh-2x/p101-h07.png",
        "width": 245,
        "height": 344
      },
      {
        "assetId": "p101-h08",
        "displayId": "H0558",
        "pdfPage": 101,
        "imgUrl": "/assets/hinh/p101-h08.png",
        "img2xUrl": "/assets/hinh-2x/p101-h08.png",
        "width": 239,
        "height": 357
      },
      {
        "assetId": "p102-h01",
        "displayId": "H0559",
        "pdfPage": 102,
        "imgUrl": "/assets/hinh/p102-h01.png",
        "img2xUrl": "/assets/hinh-2x/p102-h01.png",
        "width": 238,
        "height": 348
      },
      {
        "assetId": "p102-h02",
        "displayId": "H0560",
        "pdfPage": 102,
        "imgUrl": "/assets/hinh/p102-h02.png",
        "img2xUrl": "/assets/hinh-2x/p102-h02.png",
        "width": 248,
        "height": 353
      },
      {
        "assetId": "p102-h03",
        "displayId": "H0561",
        "pdfPage": 102,
        "imgUrl": "/assets/hinh/p102-h03.png",
        "img2xUrl": "/assets/hinh-2x/p102-h03.png",
        "width": 244,
        "height": 352
      },
      {
        "assetId": "p102-h04",
        "displayId": "H0562",
        "pdfPage": 102,
        "imgUrl": "/assets/hinh/p102-h04.png",
        "img2xUrl": "/assets/hinh-2x/p102-h04.png",
        "width": 241,
        "height": 348
      },
      {
        "assetId": "p102-h05",
        "displayId": "H0563",
        "pdfPage": 102,
        "imgUrl": "/assets/hinh/p102-h05.png",
        "img2xUrl": "/assets/hinh-2x/p102-h05.png",
        "width": 242,
        "height": 355
      },
      {
        "assetId": "p102-h06",
        "displayId": "H0564",
        "pdfPage": 102,
        "imgUrl": "/assets/hinh/p102-h06.png",
        "img2xUrl": "/assets/hinh-2x/p102-h06.png",
        "width": 250,
        "height": 362
      },
      {
        "assetId": "p102-h07",
        "displayId": "H0565",
        "pdfPage": 102,
        "imgUrl": "/assets/hinh/p102-h07.png",
        "img2xUrl": "/assets/hinh-2x/p102-h07.png",
        "width": 244,
        "height": 340
      },
      {
        "assetId": "p103-h01",
        "displayId": "H0566",
        "pdfPage": 103,
        "imgUrl": "/assets/hinh/p103-h01.png",
        "img2xUrl": "/assets/hinh-2x/p103-h01.png",
        "width": 244,
        "height": 352
      },
      {
        "assetId": "p103-h02",
        "displayId": "H0567",
        "pdfPage": 103,
        "imgUrl": "/assets/hinh/p103-h02.png",
        "img2xUrl": "/assets/hinh-2x/p103-h02.png",
        "width": 239,
        "height": 349
      },
      {
        "assetId": "p103-h03",
        "displayId": "H0568",
        "pdfPage": 103,
        "imgUrl": "/assets/hinh/p103-h03.png",
        "img2xUrl": "/assets/hinh-2x/p103-h03.png",
        "width": 256,
        "height": 357
      },
      {
        "assetId": "p103-h04",
        "displayId": "H0569",
        "pdfPage": 103,
        "imgUrl": "/assets/hinh/p103-h04.png",
        "img2xUrl": "/assets/hinh-2x/p103-h04.png",
        "width": 240,
        "height": 355
      },
      {
        "assetId": "p103-h05",
        "displayId": "H0570",
        "pdfPage": 103,
        "imgUrl": "/assets/hinh/p103-h05.png",
        "img2xUrl": "/assets/hinh-2x/p103-h05.png",
        "width": 248,
        "height": 349
      },
      {
        "assetId": "p103-h06",
        "displayId": "H0571",
        "pdfPage": 103,
        "imgUrl": "/assets/hinh/p103-h06.png",
        "img2xUrl": "/assets/hinh-2x/p103-h06.png",
        "width": 233,
        "height": 348
      },
      {
        "assetId": "p103-h07",
        "displayId": "H0572",
        "pdfPage": 103,
        "imgUrl": "/assets/hinh/p103-h07.png",
        "img2xUrl": "/assets/hinh-2x/p103-h07.png",
        "width": 250,
        "height": 360
      },
      {
        "assetId": "p103-h08",
        "displayId": "H0573",
        "pdfPage": 103,
        "imgUrl": "/assets/hinh/p103-h08.png",
        "img2xUrl": "/assets/hinh-2x/p103-h08.png",
        "width": 236,
        "height": 357
      },
      {
        "assetId": "p104-h01",
        "displayId": "H0574",
        "pdfPage": 104,
        "imgUrl": "/assets/hinh/p104-h01.png",
        "img2xUrl": "/assets/hinh-2x/p104-h01.png",
        "width": 238,
        "height": 349
      },
      {
        "assetId": "p104-h02",
        "displayId": "H0575",
        "pdfPage": 104,
        "imgUrl": "/assets/hinh/p104-h02.png",
        "img2xUrl": "/assets/hinh-2x/p104-h02.png",
        "width": 214,
        "height": 350
      },
      {
        "assetId": "p104-h03",
        "displayId": "H0576",
        "pdfPage": 104,
        "imgUrl": "/assets/hinh/p104-h03.png",
        "img2xUrl": "/assets/hinh-2x/p104-h03.png",
        "width": 234,
        "height": 359
      },
      {
        "assetId": "p104-h04",
        "displayId": "H0577",
        "pdfPage": 104,
        "imgUrl": "/assets/hinh/p104-h04.png",
        "img2xUrl": "/assets/hinh-2x/p104-h04.png",
        "width": 178,
        "height": 332
      },
      {
        "assetId": "p104-h05",
        "displayId": "H0578",
        "pdfPage": 104,
        "imgUrl": "/assets/hinh/p104-h05.png",
        "img2xUrl": "/assets/hinh-2x/p104-h05.png",
        "width": 237,
        "height": 353
      },
      {
        "assetId": "p104-h06",
        "displayId": "H0579",
        "pdfPage": 104,
        "imgUrl": "/assets/hinh/p104-h06.png",
        "img2xUrl": "/assets/hinh-2x/p104-h06.png",
        "width": 249,
        "height": 345
      },
      {
        "assetId": "p104-h07",
        "displayId": "H0580",
        "pdfPage": 104,
        "imgUrl": "/assets/hinh/p104-h07.png",
        "img2xUrl": "/assets/hinh-2x/p104-h07.png",
        "width": 244,
        "height": 345
      },
      {
        "assetId": "p105-h01",
        "displayId": "H0581",
        "pdfPage": 105,
        "imgUrl": "/assets/hinh/p105-h01.png",
        "img2xUrl": "/assets/hinh-2x/p105-h01.png",
        "width": 247,
        "height": 343
      },
      {
        "assetId": "p105-h02",
        "displayId": "H0582",
        "pdfPage": 105,
        "imgUrl": "/assets/hinh/p105-h02.png",
        "img2xUrl": "/assets/hinh-2x/p105-h02.png",
        "width": 228,
        "height": 345
      },
      {
        "assetId": "p105-h03",
        "displayId": "H0583",
        "pdfPage": 105,
        "imgUrl": "/assets/hinh/p105-h03.png",
        "img2xUrl": "/assets/hinh-2x/p105-h03.png",
        "width": 227,
        "height": 343
      }
    ],
    "motions": [
      {
        "id": "bai-17-m-1",
        "stepNo": "1",
        "assetId": "p095-h01",
        "displayId": "H0504",
        "pdfPage": 95,
        "imgUrl": "/assets/hinh/p095-h01.png",
        "img2xUrl": "/assets/hinh-2x/p095-h01.png",
        "width": 248,
        "height": 347,
        "desc": "CHIÊU 30: Xoay người sang phải, Tay của Mộc Nhân: cánh ay phải dựng thăng đứng, làn tay trái ôm vòng lấy khần thân tay Mộc Nhân."
      },
      {
        "id": "bai-17-m-2",
        "stepNo": "2",
        "assetId": "p095-h02",
        "displayId": "H0505",
        "pdfPage": 95,
        "imgUrl": "/assets/hinh/p095-h02.png",
        "img2xUrl": "/assets/hinh-2x/p095-h02.png",
        "width": 230,
        "height": 346,
        "desc": "Hai tay chắp đánh thẳng về phía Mộc Nhân sao cho hai cánh tay tạo thế hình tam giác cân đánh chặn 2 Tay ngực của Mộc Nhân."
      },
      {
        "id": "bai-17-m-3",
        "stepNo": "3",
        "assetId": "p095-h03",
        "displayId": "H0506",
        "pdfPage": 95,
        "imgUrl": "/assets/hinh/p095-h03.png",
        "img2xUrl": "/assets/hinh-2x/p095-h03.png",
        "width": 227,
        "height": 347,
        "desc": "CHIÊU 2: Hai bàn tay để song song nhau đánh thẳng xuống Tay bụng của Mộc Nhân."
      },
      {
        "id": "bai-17-m-4",
        "stepNo": "4",
        "assetId": "p095-h04",
        "displayId": "H0507",
        "pdfPage": 95,
        "imgUrl": "/assets/hinh/p095-h04.png",
        "img2xUrl": "/assets/hinh-2x/p095-h04.png",
        "width": 250,
        "height": 356,
        "desc": "CHIÊU 4: Xoay người sang phải, tay phải chặn đầu tay ngực phải của Mộc Nhân, căng tay và bàn tay trái dựng thắng đứng đánh chặn tay ngực phải của Mộc Nhân."
      },
      {
        "id": "bai-17-m-5",
        "stepNo": "5",
        "assetId": "p095-h05",
        "displayId": "H0508",
        "pdfPage": 95,
        "imgUrl": "/assets/hinh/p095-h05.png",
        "img2xUrl": "/assets/hinh-2x/p095-h05.png",
        "width": 243,
        "height": 356,
        "desc": "CHIÊU 4: Gập bàn tay trái đánh từ trên xuống."
      },
      {
        "id": "bai-17-m-6",
        "stepNo": "6",
        "assetId": "p095-h06",
        "displayId": "H0509",
        "pdfPage": 95,
        "imgUrl": "/assets/hinh/p095-h06.png",
        "img2xUrl": "/assets/hinh-2x/p095-h06.png",
        "width": 259,
        "height": 351,
        "desc": "CHIÊU 6: §: Xoay người sang phải: L tayphảiđánhchặnphần đầu Tay bụng của Mộc ( Nhân, tay trái men theo ù Tay bụng của Mộc Nhân ‹ đánh thắng vào Thân của Mộc Nhân. §"
      },
      {
        "id": "bai-17-m-7",
        "stepNo": "7",
        "assetId": "p095-h07",
        "displayId": "H0510",
        "pdfPage": 95,
        "imgUrl": "/assets/hinh/p095-h07.png",
        "img2xUrl": "/assets/hinh-2x/p095-h07.png",
        "width": 242,
        "height": 341,
        "desc": "CHIÊU 6: §: Xoay người sang phải: L tayphảiđánhchặnphần đầu Tay bụng của Mộc ( Nhân, tay trái men theo ù Tay bụng của Mộc Nhân ‹ đánh thắng vào Thân của Mộc Nhân. §"
      },
      {
        "id": "bai-17-m-8",
        "stepNo": "8",
        "assetId": "p095-h08",
        "displayId": "H0511",
        "pdfPage": 95,
        "imgUrl": "/assets/hinh/p095-h08.png",
        "img2xUrl": "/assets/hinh-2x/p095-h08.png",
        "width": 239,
        "height": 347,
        "desc": "CHIÊU 81: Xoay người sang phải, tay phải nắm lấy phản đầu Tay bụng Mộc Nhân, căng tay trái đánh chặn từ trên xuống ."
      },
      {
        "id": "bai-17-m-9",
        "stepNo": "9",
        "assetId": "p096-h01",
        "displayId": "H0512",
        "pdfPage": 96,
        "imgUrl": "/assets/hinh/p096-h01.png",
        "img2xUrl": "/assets/hinh-2x/p096-h01.png",
        "width": 229,
        "height": 342,
        "desc": "CHIÊU 10: Xoay người sang phải, nắm đấm tay phải đánh chặn phần đầu Tay ngực phải của Mộc Nhân, năm đấm tay trái đánh thăng vào thân Mộc Nhân căng tay trái đánh chặn vào Tay ngực phải của Mộc Nhân."
      },
      {
        "id": "bai-17-m-10",
        "stepNo": "10",
        "assetId": "p096-h02",
        "displayId": "H0513",
        "pdfPage": 96,
        "imgUrl": "/assets/hinh/p096-h02.png",
        "img2xUrl": "/assets/hinh-2x/p096-h02.png",
        "width": 234,
        "height": 348,
        "desc": "CHIÊU 8: Xoay người sang phải dùng Than Thủ phải chặn Tay ngực trái của Mộc Nhân, tay trái đánh chưởng thăng."
      },
      {
        "id": "bai-17-m-11",
        "stepNo": "11",
        "assetId": "p096-h03",
        "displayId": "H0514",
        "pdfPage": 96,
        "imgUrl": "/assets/hinh/p096-h03.png",
        "img2xUrl": "/assets/hinh-2x/p096-h03.png",
        "width": 249,
        "height": 356,
        "desc": "CHIÊU 14: Xoay người sang phải, hai tay đồng thời hất lên đánh vào Tay ngực phải của Mộc Nhân."
      },
      {
        "id": "bai-17-m-12",
        "stepNo": "12",
        "assetId": "p096-h04",
        "displayId": "H0515",
        "pdfPage": 96,
        "imgUrl": "/assets/hinh/p096-h04.png",
        "img2xUrl": "/assets/hinh-2x/p096-h04.png",
        "width": 243,
        "height": 355,
        "desc": "CHIÊU 12;: Xoay người sang phải, hai tay xà đánh đồng thời xia thăng vào Mộc Nhân."
      },
      {
        "id": "bai-17-m-13",
        "stepNo": "13",
        "assetId": "p096-h05",
        "displayId": "H0516",
        "pdfPage": 96,
        "imgUrl": "/assets/hinh/p096-h05.png",
        "img2xUrl": "/assets/hinh-2x/p096-h05.png",
        "width": 248,
        "height": 356,
        "desc": "CHIÊU 14: Xoay người sang phải, hai tay đồng thời hất lên đánh vào Tay ngực phải của Mộc Nhân."
      },
      {
        "id": "bai-17-m-14",
        "stepNo": "14",
        "assetId": "p096-h06",
        "displayId": "H0517",
        "pdfPage": 96,
        "imgUrl": "/assets/hinh/p096-h06.png",
        "img2xUrl": "/assets/hinh-2x/p096-h06.png",
        "width": 239,
        "height": 355,
        "desc": "CHIÊU 16: |: Xoay người sang phải, hai căng tay dựng thăng đứng và song song nhau | đồng thời đánh vào Tay ngực phải của Mộc Nhân theo 2 chiều ngược nhau."
      },
      {
        "id": "bai-17-m-15",
        "stepNo": "15",
        "assetId": "p096-h07",
        "displayId": "H0518",
        "pdfPage": 96,
        "imgUrl": "/assets/hinh/p096-h07.png",
        "img2xUrl": "/assets/hinh-2x/p096-h07.png",
        "width": 247,
        "height": 347,
        "desc": "CHIÊU 22: Xoay người sang phải, bàn tay phải nắm phần đầu Tay ngực phải của Mộc Nhân, tay trái ôm vòng lấy Thân Mộc Nhân đồng thời kéo giật."
      },
      {
        "id": "bai-17-m-16",
        "stepNo": "16",
        "assetId": "p096-h08",
        "displayId": "H0519",
        "pdfPage": 96,
        "imgUrl": "/assets/hinh/p096-h08.png",
        "img2xUrl": "/assets/hinh-2x/p096-h08.png",
        "width": 246,
        "height": 352,
        "desc": "CHIÊU 20: Xoay người. sang phải, hai bàn tay nắm Tay bụng của Mộc Nhân kéo giật về phía sau ."
      },
      {
        "id": "bai-17-m-17",
        "stepNo": "17",
        "assetId": "p097-h01",
        "displayId": "H0520",
        "pdfPage": 97,
        "imgUrl": "/assets/hinh/p097-h01.png",
        "img2xUrl": "/assets/hinh-2x/p097-h01.png",
        "width": 236,
        "height": 354,
        "desc": "CHIÊU 22: Xoay người sang phải, bàn tay phải nắm phần đầu Tay ngực phải của Mộc Nhân, tay trái ôm vòng lấy Thân Mộc Nhân đồng thời kéo giật."
      },
      {
        "id": "bai-17-m-18",
        "stepNo": "18",
        "assetId": "p097-h02",
        "displayId": "H0521",
        "pdfPage": 97,
        "imgUrl": "/assets/hinh/p097-h02.png",
        "img2xUrl": "/assets/hinh-2x/p097-h02.png",
        "width": 220,
        "height": 344,
        "desc": "CHIÊU 24: Xoay người sang phải, hai bàn tay đồng thời nắm bắt Tay ngực trái của Mộc Nhân tay phải bắt phía trong, tay trái bắt phía ngoài và giật theo 2 hướng ngược chiều nhau"
      },
      {
        "id": "bai-17-m-19",
        "stepNo": "19",
        "assetId": "p097-h03",
        "displayId": "H0522",
        "pdfPage": 97,
        "imgUrl": "/assets/hinh/p097-h03.png",
        "img2xUrl": "/assets/hinh-2x/p097-h03.png",
        "width": 222,
        "height": 359,
        "desc": "CHIÊU 26: Xoay người sang phải, bê Tay ngực phải của Mộc Nhân: cánh tay phải dựng thăng, bàn tay phải gập xuống giữ phần đầu của tay Mộc Nhân, căng tay trái áp sát và đánh ngang i vào tay Mộc Nhân. : - Xoay người sang trái, P đánh theo cách thức của Ñ chiêu 28. ¡"
      },
      {
        "id": "bai-17-m-20",
        "stepNo": "20",
        "assetId": "p097-h04",
        "displayId": "H0523",
        "pdfPage": 97,
        "imgUrl": "/assets/hinh/p097-h04.png",
        "img2xUrl": "/assets/hinh-2x/p097-h04.png",
        "width": 230,
        "height": 357,
        "desc": "CHIÊU 28 !: Xoay người sang phải, hai bàn tay dựng thăng đứng và song song nhau 4 đánh chặn ngang phần đâu Tay ngực trái của Mộc ¡ Nhân. ¿ 3s"
      },
      {
        "id": "bai-17-m-21",
        "stepNo": "21",
        "assetId": "p097-h05",
        "displayId": "H0524",
        "pdfPage": 97,
        "imgUrl": "/assets/hinh/p097-h05.png",
        "img2xUrl": "/assets/hinh-2x/p097-h05.png",
        "width": 222,
        "height": 353,
        "desc": "CHIÊU 31: Xoay người sang trái, đánh theo cách thức của động tác 31.3"
      },
      {
        "id": "bai-17-m-22",
        "stepNo": "22",
        "assetId": "p097-h06",
        "displayId": "H0525",
        "pdfPage": 97,
        "imgUrl": "/assets/hinh/p097-h06.png",
        "img2xUrl": "/assets/hinh-2x/p097-h06.png",
        "width": 222,
        "height": 347,
        "desc": "CHIÊU 31: Xoay người sang phải, bàn tay phải chặn phần đầu của Tay ngực phải Mộc Nhân, tay trái chém chếch lên."
      },
      {
        "id": "bai-17-m-23",
        "stepNo": "23",
        "assetId": "p097-h07",
        "displayId": "H0526",
        "pdfPage": 97,
        "imgUrl": "/assets/hinh/p097-h07.png",
        "img2xUrl": "/assets/hinh-2x/p097-h07.png",
        "width": 239,
        "height": 337,
        "desc": "CHIÊU 31: Xoay người sang trái, đánh theo cách thức của động tác 31.3"
      },
      {
        "id": "bai-17-m-24",
        "stepNo": "24",
        "assetId": "p097-h08",
        "displayId": "H0527",
        "pdfPage": 97,
        "imgUrl": "/assets/hinh/p097-h08.png",
        "img2xUrl": "/assets/hinh-2x/p097-h08.png",
        "width": 241,
        "height": 352,
        "desc": "CHIÊU 31: Xoay người sang phải, bàn tay phải chặn phần đầu của Tay ngực phải Mộc Nhân, tay trái chém chếch lên."
      },
      {
        "id": "bai-17-m-25",
        "stepNo": "25",
        "assetId": "p098-h01",
        "displayId": "H0528",
        "pdfPage": 98,
        "imgUrl": "/assets/hinh/p098-h01.png",
        "img2xUrl": "/assets/hinh-2x/p098-h01.png",
        "width": 249,
        "height": 346,
        "desc": "CHIÊU 33: Xoay người sang phải, dùng hai lòng bàn tay đánh đồng thời từ trên xuống vào Tay bụng của Mộc Nhân."
      },
      {
        "id": "bai-17-m-26",
        "stepNo": "26",
        "assetId": "p098-h02",
        "displayId": "H0529",
        "pdfPage": 98,
        "imgUrl": "/assets/hinh/p098-h02.png",
        "img2xUrl": "/assets/hinh-2x/p098-h02.png",
        "width": 245,
        "height": 344,
        "desc": "CHIÊU 33: Giữ nguyên tư thế, bàn tay phải vẫn chặn phần đầu Tay bụng của Mộc Nhân, còn tay trái đánh thăng vào Thân Mộc Nhân."
      },
      {
        "id": "bai-17-m-27",
        "stepNo": "27",
        "assetId": "p098-h03",
        "displayId": "H0530",
        "pdfPage": 98,
        "imgUrl": "/assets/hinh/p098-h03.png",
        "img2xUrl": "/assets/hinh-2x/p098-h03.png",
        "width": 245,
        "height": 349,
        "desc": "CHIÊU 35: Xoay người sang phải, cạnh trong bàn tay phải chặn phần đầu Tay bụng của Mộc Nhân, cạnh ngoài bàn tay trái chặn ngang Tay ngực trái của Mộc Nhân."
      },
      {
        "id": "bai-17-m-28",
        "stepNo": "28",
        "assetId": "p098-h04",
        "displayId": "H0531",
        "pdfPage": 98,
        "imgUrl": "/assets/hinh/p098-h04.png",
        "img2xUrl": "/assets/hinh-2x/p098-h04.png",
        "width": 235,
        "height": 349,
        "desc": "CHIÊU 35: Giữ nguyên tư thế, . bàn tay phải đánh chặn phần đầu Tay bụng Mộc tà Nhân, cạnh bàn tay trái S đánh chặn ngang Thân Mộc Nhân."
      },
      {
        "id": "bai-17-m-29",
        "stepNo": "29",
        "assetId": "p098-h05",
        "displayId": "H0532",
        "pdfPage": 98,
        "imgUrl": "/assets/hinh/p098-h05.png",
        "img2xUrl": "/assets/hinh-2x/p098-h05.png",
        "width": 224,
        "height": 359,
        "desc": "CHIÊU 37: h: Xoay người sang phải, cl hai bàn tay dựng thăng N"
      },
      {
        "id": "bai-17-m-30",
        "stepNo": "30",
        "assetId": "p098-h06",
        "displayId": "H0533",
        "pdfPage": 98,
        "imgUrl": "/assets/hinh/p098-h06.png",
        "img2xUrl": "/assets/hinh-2x/p098-h06.png",
        "width": 227,
        "height": 358,
        "desc": "CHIÊU 41: Giữ nguyên tư thế, bàn tay phải úp, chặn phần đầu Tay ngực trái Mộc Nhân, cạnh bàn tay trái lướt dọc theo tay Mộc Nhân đánh thăng vào Thân Mộc Nhân."
      },
      {
        "id": "bai-17-m-31",
        "stepNo": "31",
        "assetId": "p098-h07",
        "displayId": "H0534",
        "pdfPage": 98,
        "imgUrl": "/assets/hinh/p098-h07.png",
        "img2xUrl": "/assets/hinh-2x/p098-h07.png",
        "width": 241,
        "height": 357,
        "desc": "CHIÊU 42: Xoay người sang phải, đánh như cách thức của động tác 35.1"
      },
      {
        "id": "bai-17-m-32",
        "stepNo": "32",
        "assetId": "p099-h01",
        "displayId": "H0535",
        "pdfPage": 99,
        "imgUrl": "/assets/hinh/p099-h01.png",
        "img2xUrl": "/assets/hinh-2x/p099-h01.png",
        "width": 245,
        "height": 344,
        "desc": "CHIÊU 42: Xoay người sang trái, đánh mặt sau cổ tay trái vào tay ngực phải Mộc Nhân, tay phải bàng thủ (tâm trung bình)."
      },
      {
        "id": "bai-17-m-33",
        "stepNo": "33",
        "assetId": "p099-h02",
        "displayId": "H0536",
        "pdfPage": 99,
        "imgUrl": "/assets/hinh/p099-h02.png",
        "img2xUrl": "/assets/hinh-2x/p099-h02.png",
        "width": 237,
        "height": 344,
        "desc": "CHIÊU 41: Giữ nguyên tư thế, bàn tay phải úp, chặn phần đầu Tay ngực trái Mộc Nhân, cạnh bàn tay trái lướt dọc theo tay Mộc Nhân đánh thăng vào Thân Mộc Nhân."
      },
      {
        "id": "bai-17-m-34",
        "stepNo": "34",
        "assetId": "p099-h03",
        "displayId": "H0537",
        "pdfPage": 99,
        "imgUrl": "/assets/hinh/p099-h03.png",
        "img2xUrl": "/assets/hinh-2x/p099-h03.png",
        "width": 246,
        "height": 349,
        "desc": "CHIÊU 42: Xoay người sang phải, đánh như cách thức của động tác 35.1"
      },
      {
        "id": "bai-17-m-35",
        "stepNo": "35",
        "assetId": "p099-h04",
        "displayId": "H0538",
        "pdfPage": 99,
        "imgUrl": "/assets/hinh/p099-h04.png",
        "img2xUrl": "/assets/hinh-2x/p099-h04.png",
        "width": 231,
        "height": 334,
        "desc": "CHIÊU 42: Xoay người sang trái, đánh mặt sau cổ tay trái vào tay ngực phải Mộc Nhân, tay phải bàng thủ (tâm trung bình)."
      },
      {
        "id": "bai-17-m-36",
        "stepNo": "36",
        "assetId": "p099-h05",
        "displayId": "H0539",
        "pdfPage": 99,
        "imgUrl": "/assets/hinh/p099-h05.png",
        "img2xUrl": "/assets/hinh-2x/p099-h05.png",
        "width": 250,
        "height": 346,
        "desc": "CHIÊU 47: Xoay người sang hi bàn tay phải chặn ph đầu Tay ngực phải Mộc Nhân, tay trái dùng quyền đánh thốc lên."
      },
      {
        "id": "bai-17-m-37",
        "stepNo": "37",
        "assetId": "p099-h06",
        "displayId": "H0540",
        "pdfPage": 99,
        "imgUrl": "/assets/hinh/p099-h06.png",
        "img2xUrl": "/assets/hinh-2x/p099-h06.png",
        "width": 245,
        "height": 343,
        "desc": "CHIÊU 49: Xoay người sang phải, dùng cạnh ngoài bàn tay phải đánh chặn phần đầu Tay bụng Mộc Nhân, tay trái dùng nắm đấm đánh chéo xuống sao cho cùng lúc đánh chặn Tay bụng Mộc Nhân."
      },
      {
        "id": "bai-17-m-38",
        "stepNo": "38",
        "assetId": "p099-h07",
        "displayId": "H0541",
        "pdfPage": 99,
        "imgUrl": "/assets/hinh/p099-h07.png",
        "img2xUrl": "/assets/hinh-2x/p099-h07.png",
        "width": 229,
        "height": 357,
        "desc": "CHIÊU 45: Xoay người sang phải, dùng hai tay quyền đồng thời đánh chặn vào Tay ngực phải Mộc Nhân."
      },
      {
        "id": "bai-17-m-39",
        "stepNo": "39",
        "assetId": "p099-h08",
        "displayId": "H0542",
        "pdfPage": 99,
        "imgUrl": "/assets/hinh/p099-h08.png",
        "img2xUrl": "/assets/hinh-2x/p099-h08.png",
        "width": 235,
        "height": 354,
        "desc": "CHIÊU 47: Xoay người sang hi bàn tay phải chặn ph đầu Tay ngực phải Mộc Nhân, tay trái dùng quyền đánh thốc lên."
      },
      {
        "id": "bai-17-m-40",
        "stepNo": "40",
        "assetId": "p099-h09",
        "displayId": "H0543",
        "pdfPage": 99,
        "imgUrl": "/assets/hinh/p099-h09.png",
        "img2xUrl": "/assets/hinh-2x/p099-h09.png",
        "width": 238,
        "height": 350,
        "desc": "CHIÊU 49: Xoay người sang phải, dùng cạnh ngoài bàn tay phải đánh chặn phần đầu Tay bụng Mộc Nhân, tay trái dùng nắm đấm đánh chéo xuống sao cho cùng lúc đánh chặn Tay bụng Mộc Nhân."
      },
      {
        "id": "bai-17-m-41",
        "stepNo": "41",
        "assetId": "p100-h01",
        "displayId": "H0544",
        "pdfPage": 100,
        "imgUrl": "/assets/hinh/p100-h01.png",
        "img2xUrl": "/assets/hinh-2x/p100-h01.png",
        "width": 229,
        "height": 344,
        "desc": "CHIÊU 50: Kiềm Dương tấn, dùng hai lòng bàn tay đánh từ dưới lên vào hai Tay ngực Mộc Nhân."
      },
      {
        "id": "bai-17-m-42",
        "stepNo": "42",
        "assetId": "p100-h02",
        "displayId": "H0545",
        "pdfPage": 100,
        "imgUrl": "/assets/hinh/p100-h02.png",
        "img2xUrl": "/assets/hinh-2x/p100-h02.png",
        "width": 237,
        "height": 343,
        "desc": "CHIÊU 50: Tiếp theo, dùng hai lòng bàn tay đánh từ trên xuông vào hai Tay ngực Mộc Nhân."
      },
      {
        "id": "bai-17-m-43",
        "stepNo": "43",
        "assetId": "p100-h03",
        "displayId": "H0546",
        "pdfPage": 100,
        "imgUrl": "/assets/hinh/p100-h03.png",
        "img2xUrl": "/assets/hinh-2x/p100-h03.png",
        "width": 247,
        "height": 349,
        "desc": "CHIÊU 50: Xoay người sang trái, đánh như cách thức của động tác 50.4"
      },
      {
        "id": "bai-17-m-44",
        "stepNo": "44",
        "assetId": "p100-h04",
        "displayId": "H0547",
        "pdfPage": 100,
        "imgUrl": "/assets/hinh/p100-h04.png",
        "img2xUrl": "/assets/hinh-2x/p100-h04.png",
        "width": 247,
        "height": 348,
        "desc": "CHIÊU 50: Xoay người sang phải, bàn tay phải đánh chặn phản đầu Tay bụng Mộc Nhân, tay trái đánh thăng vào thân Mộc Nhân."
      },
      {
        "id": "bai-17-m-45",
        "stepNo": "45",
        "assetId": "p100-h05",
        "displayId": "H0548",
        "pdfPage": 100,
        "imgUrl": "/assets/hinh/p100-h05.png",
        "img2xUrl": "/assets/hinh-2x/p100-h05.png",
        "width": 247,
        "height": 354,
        "desc": "CHIÊU 75: Giữ nguyên tư thế : tùng tấn xuống thấp, tay h hải chặn phần đầu Tay Ể ụng Mộc Nhân, tay trái \ ánh ngược mặt sau quyền n."
      },
      {
        "id": "bai-17-m-46",
        "stepNo": "46",
        "assetId": "p100-h06",
        "displayId": "H0549",
        "pdfPage": 100,
        "imgUrl": "/assets/hinh/p100-h06.png",
        "img2xUrl": "/assets/hinh-2x/p100-h06.png",
        "width": 237,
        "height": 345,
        "desc": "CHIÊU 54: |: Xoay người sang phải, tay phải chặn phản đầu Tay ngực trái Mộc Nhân,"
      },
      {
        "id": "bai-17-m-47",
        "stepNo": "47",
        "assetId": "p100-h07",
        "displayId": "H0550",
        "pdfPage": 100,
        "imgUrl": "/assets/hinh/p100-h07.png",
        "img2xUrl": "/assets/hinh-2x/p100-h07.png",
        "width": 235,
        "height": 353,
        "desc": "CHIÊU 56: Xoay người sang phải,"
      },
      {
        "id": "bai-17-m-48",
        "stepNo": "48",
        "assetId": "p101-h01",
        "displayId": "H0551",
        "pdfPage": 101,
        "imgUrl": "/assets/hinh/p101-h01.png",
        "img2xUrl": "/assets/hinh-2x/p101-h01.png",
        "width": 238,
        "height": 354,
        "desc": "CHIÊU 61: Tiếp theo, hai cẳng tay vuốt dọc hai Tay ngực Mộc Nhân theo hướng từ trước ra sau người tập, rôi hất đẩy ra trước."
      },
      {
        "id": "bai-17-m-49",
        "stepNo": "49",
        "assetId": "p101-h02",
        "displayId": "H0552",
        "pdfPage": 101,
        "imgUrl": "/assets/hinh/p101-h02.png",
        "img2xUrl": "/assets/hinh-2x/p101-h02.png",
        "width": 241,
        "height": 353,
        "desc": "CHIÊU 60: Xoay người sang phải, hai tay đánh đồng thời theo hướng từ ngoài vào trong: tay phải dựng, căng tay trái đánh ngang."
      },
      {
        "id": "bai-17-m-50",
        "stepNo": "50",
        "assetId": "p101-h03",
        "displayId": "H0553",
        "pdfPage": 101,
        "imgUrl": "/assets/hinh/p101-h03.png",
        "img2xUrl": "/assets/hinh-2x/p101-h03.png",
        "width": 224,
        "height": 347,
        "desc": "CHIÊU 61: Kiềm Dương, đưa hai căng tay lên song song nhau khép chặt hai Tay ngực Mộc Nhân từ ngoài vào trong."
      },
      {
        "id": "bai-17-m-51",
        "stepNo": "51",
        "assetId": "p101-h04",
        "displayId": "H0554",
        "pdfPage": 101,
        "imgUrl": "/assets/hinh/p101-h04.png",
        "img2xUrl": "/assets/hinh-2x/p101-h04.png",
        "width": 223,
        "height": 350,
        "desc": "CHIÊU 61: Tiếp theo, hai cẳng tay vuốt dọc hai Tay ngực Mộc Nhân theo hướng từ trước ra sau người tập, rôi hất đẩy ra trước."
      },
      {
        "id": "bai-17-m-52",
        "stepNo": "52",
        "assetId": "p101-h05",
        "displayId": "H0555",
        "pdfPage": 101,
        "imgUrl": "/assets/hinh/p101-h05.png",
        "img2xUrl": "/assets/hinh-2x/p101-h05.png",
        "width": 238,
        "height": 355,
        "desc": "CHIÊU 63: Xoay người sang phải, nắm đấm tay đánh ( gập xuống phần đầu còn năm đâm tay trái đánh gập theo hướng từ dưới lên vào Tay ngực phải Mộc Nhân."
      },
      {
        "id": "bai-17-m-53",
        "stepNo": "53",
        "assetId": "p101-h06",
        "displayId": "H0556",
        "pdfPage": 101,
        "imgUrl": "/assets/hinh/p101-h06.png",
        "img2xUrl": "/assets/hinh-2x/p101-h06.png",
        "width": 241,
        "height": 348,
        "desc": "CHIÊU 65: Xoay người sang L phải, tay phải chặn phần c đầu Tay bụng Mộc Nhân, taytráđể bàn tayỞtưthế s Xà dùng mặt sau cổ tay "
      },
      {
        "id": "bai-17-m-54",
        "stepNo": "54",
        "assetId": "p101-h07",
        "displayId": "H0557",
        "pdfPage": 101,
        "imgUrl": "/assets/hinh/p101-h07.png",
        "img2xUrl": "/assets/hinh-2x/p101-h07.png",
        "width": 245,
        "height": 344,
        "desc": "CHIÊU 71: Xoay người sang phải, tay phải chặn phần đầu Tay bụng Mộc Nhân, tay trái dùng củi chỏ đánh thẳng từ trên xuống Tay bụng Mộc Nhân"
      },
      {
        "id": "bai-17-m-55",
        "stepNo": "55",
        "assetId": "p101-h08",
        "displayId": "H0558",
        "pdfPage": 101,
        "imgUrl": "/assets/hinh/p101-h08.png",
        "img2xUrl": "/assets/hinh-2x/p101-h08.png",
        "width": 239,
        "height": 357,
        "desc": "CHIÊU 71: Giữ nguyên tư thế, tay phải chặn phần đầu Tay bụng Mộc Nhân, tay trái dùng mặt sau nắm đấm quật ngược vào Thân Mộc Nhân."
      },
      {
        "id": "bai-17-m-56",
        "stepNo": "56",
        "assetId": "p102-h01",
        "displayId": "H0559",
        "pdfPage": 102,
        "imgUrl": "/assets/hinh/p102-h01.png",
        "img2xUrl": "/assets/hinh-2x/p102-h01.png",
        "width": 238,
        "height": 348,
        "desc": "CHIÊU 67: Xoay người sang phải, tay phải dùng Than Thủ chặn Tay ngực trái Mộc Nhân, tay trái đánh thẳng vào Thân Mộc Nhân."
      },
      {
        "id": "bai-17-m-57",
        "stepNo": "57",
        "assetId": "p102-h02",
        "displayId": "H0560",
        "pdfPage": 102,
        "imgUrl": "/assets/hinh/p102-h02.png",
        "img2xUrl": "/assets/hinh-2x/p102-h02.png",
        "width": 248,
        "height": 353,
        "desc": "CHIÊU 73: Giữ nguyên tư thế, d tay phải chặn phần đầu T Tay ngực trái Mộc Nhân, 7 tay trái dùng mặt sau nắm Ò đấm quật ngược vào Thân Mộc Nhân. : - Xoay người sang trái, đánh theocách thứccủa © chiêu 75. š"
      },
      {
        "id": "bai-17-m-58",
        "stepNo": "58",
        "assetId": "p102-h03",
        "displayId": "H0561",
        "pdfPage": 102,
        "imgUrl": "/assets/hinh/p102-h03.png",
        "img2xUrl": "/assets/hinh-2x/p102-h03.png",
        "width": 244,
        "height": 352,
        "desc": "CHIÊU 75: Xoay người sang hải,tay phải thủ,tay trái ( ùng cùi trỏ đánh ngang ay bụng Mộc Nhân. :"
      },
      {
        "id": "bai-17-m-59",
        "stepNo": "59",
        "assetId": "p102-h04",
        "displayId": "H0562",
        "pdfPage": 102,
        "imgUrl": "/assets/hinh/p102-h04.png",
        "img2xUrl": "/assets/hinh-2x/p102-h04.png",
        "width": 241,
        "height": 348,
        "desc": "CHIÊU 75: Giữ nguyên tư thế : tùng tấn xuống thấp, tay h hải chặn phần đầu Tay Ể ụng Mộc Nhân, tay trái \ ánh ngược mặt sau quyền n."
      },
      {
        "id": "bai-17-m-60",
        "stepNo": "60",
        "assetId": "p102-h05",
        "displayId": "H0563",
        "pdfPage": 102,
        "imgUrl": "/assets/hinh/p102-h05.png",
        "img2xUrl": "/assets/hinh-2x/p102-h05.png",
        "width": 242,
        "height": 355,
        "desc": "CHIÊU 77: Xoay người bên phải rà hơi trùng tấn, tay phải hủ, tay trái dùng cùi chỏ lánh hất từ dưới lên ."
      },
      {
        "id": "bai-17-m-61",
        "stepNo": "61",
        "assetId": "p102-h06",
        "displayId": "H0564",
        "pdfPage": 102,
        "imgUrl": "/assets/hinh/p102-h06.png",
        "img2xUrl": "/assets/hinh-2x/p102-h06.png",
        "width": 250,
        "height": 362,
        "desc": "CHIÊU 77: Giữ nguyên tư thế, ay phải chặn phản đầu 'ay ngực phải Mộc Nhân, av trái đánh mặt sau tuyền lên."
      },
      {
        "id": "bai-17-m-62",
        "stepNo": "62",
        "assetId": "p102-h07",
        "displayId": "H0565",
        "pdfPage": 102,
        "imgUrl": "/assets/hinh/p102-h07.png",
        "img2xUrl": "/assets/hinh-2x/p102-h07.png",
        "width": 244,
        "height": 340,
        "desc": "CHIÊU 79: Xoay người sang phải, tay phải thú, tay trái dùng Bàng Thủ đánh Tay bụng Mộc Nhân."
      },
      {
        "id": "bai-17-m-63",
        "stepNo": "63",
        "assetId": "p103-h01",
        "displayId": "H0566",
        "pdfPage": 103,
        "imgUrl": "/assets/hinh/p103-h01.png",
        "img2xUrl": "/assets/hinh-2x/p103-h01.png",
        "width": 244,
        "height": 352,
        "desc": "CHIÊU 81: Xoay người sang phải, tay phải nắm lấy phản đầu Tay bụng Mộc Nhân, căng tay trái đánh chặn từ trên xuống ."
      },
      {
        "id": "bai-17-m-64",
        "stepNo": "64",
        "assetId": "p103-h02",
        "displayId": "H0567",
        "pdfPage": 103,
        "imgUrl": "/assets/hinh/p103-h02.png",
        "img2xUrl": "/assets/hinh-2x/p103-h02.png",
        "width": 239,
        "height": 349,
        "desc": "CHIÊU 85: Xoay người sang phải, hai bàn tay nắm Tay bụng Mộc Nhân kéo giật, gật đầu đánh ra trước."
      },
      {
        "id": "bai-17-m-65",
        "stepNo": "65",
        "assetId": "p103-h03",
        "displayId": "H0568",
        "pdfPage": 103,
        "imgUrl": "/assets/hinh/p103-h03.png",
        "img2xUrl": "/assets/hinh-2x/p103-h03.png",
        "width": 256,
        "height": 357,
        "desc": "CHIÊU 79: Xoay người sang phải, tay phải thú, tay trái dùng Bàng Thủ đánh Tay bụng Mộc Nhân."
      },
      {
        "id": "bai-17-m-66",
        "stepNo": "66",
        "assetId": "p103-h04",
        "displayId": "H0569",
        "pdfPage": 103,
        "imgUrl": "/assets/hinh/p103-h04.png",
        "img2xUrl": "/assets/hinh-2x/p103-h04.png",
        "width": 240,
        "height": 355,
        "desc": "CHIÊU 86: ': Xoay người sang phải, hai tay long: tay trái đánh móc từ dưới lên về phía | Mộc Nhân, tay phải che hạ bộ. | 4A"
      },
      {
        "id": "bai-17-m-67",
        "stepNo": "67",
        "assetId": "p103-h05",
        "displayId": "H0570",
        "pdfPage": 103,
        "imgUrl": "/assets/hinh/p103-h05.png",
        "img2xUrl": "/assets/hinh-2x/p103-h05.png",
        "width": 248,
        "height": 349,
        "desc": "CHIÊU 87: Xoay người sang phải, hai tay đan vào nhau tạo thành thế cắt kéo đánh từ dưới lên vào Tay ngực trái Mộc Nhân."
      },
      {
        "id": "bai-17-m-68",
        "stepNo": "68",
        "assetId": "p103-h06",
        "displayId": "H0571",
        "pdfPage": 103,
        "imgUrl": "/assets/hinh/p103-h06.png",
        "img2xUrl": "/assets/hinh-2x/p103-h06.png",
        "width": 233,
        "height": 348,
        "desc": "CHIÊU 87: Giữ nguyên tư thế, tay phải nắm lấy Tay ngực trái Mộc Nhân giật về, tay trái chém ngang."
      },
      {
        "id": "bai-17-m-69",
        "stepNo": "69",
        "assetId": "p103-h07",
        "displayId": "H0572",
        "pdfPage": 103,
        "imgUrl": "/assets/hinh/p103-h07.png",
        "img2xUrl": "/assets/hinh-2x/p103-h07.png",
        "width": 250,
        "height": 360,
        "desc": "CHIÊU 86: ': Xoay người sang phải, hai tay long: tay trái đánh móc từ dưới lên về phía | Mộc Nhân, tay phải che hạ bộ. | 4A"
      },
      {
        "id": "bai-17-m-70",
        "stepNo": "70",
        "assetId": "p103-h08",
        "displayId": "H0573",
        "pdfPage": 103,
        "imgUrl": "/assets/hinh/p103-h08.png",
        "img2xUrl": "/assets/hinh-2x/p103-h08.png",
        "width": 236,
        "height": 357,
        "desc": "CHIÊU 92: Xoay người vòng sang phải, hai bàn tay nắm và kéo Tay bụng Mộc Nhân: dùng đầu gối trái đánh vòng vào ngang Thân Mộc Nhân."
      },
      {
        "id": "bai-17-m-71",
        "stepNo": "71",
        "assetId": "p104-h01",
        "displayId": "H0574",
        "pdfPage": 104,
        "imgUrl": "/assets/hinh/p104-h01.png",
        "img2xUrl": "/assets/hinh-2x/p104-h01.png",
        "width": 238,
        "height": 349,
        "desc": "CHIÊU 94: Xoay người sang phải, hai bàn tay nắm và kéo Tay bụng Mộc Nhân: nâng đầu gối chân trái lên cao sau đó đánh vuốt từ trên xuống."
      },
      {
        "id": "bai-17-m-72",
        "stepNo": "72",
        "assetId": "p104-h02",
        "displayId": "H0575",
        "pdfPage": 104,
        "imgUrl": "/assets/hinh/p104-h02.png",
        "img2xUrl": "/assets/hinh-2x/p104-h02.png",
        "width": 214,
        "height": 350,
        "desc": "CHIÊU 89: Xoay người sang phải, 2 tay năm Tay bụng Mộc Nhân kéo đồng thời đánh gối phải lên."
      },
      {
        "id": "bai-17-m-73",
        "stepNo": "73",
        "assetId": "p104-h03",
        "displayId": "H0576",
        "pdfPage": 104,
        "imgUrl": "/assets/hinh/p104-h03.png",
        "img2xUrl": "/assets/hinh-2x/p104-h03.png",
        "width": 234,
        "height": 359,
        "desc": "CHIÊU 39: Xoay người sang hải, bàn tay phải chặn hẳn đầu Tay ngực phải độc Nhân, bàn tay trái ùng cạnh bàn tay chém ào Thân Mộc Nhân."
      },
      {
        "id": "bai-17-m-74",
        "stepNo": "74",
        "assetId": "p104-h04",
        "displayId": "H0577",
        "pdfPage": 104,
        "imgUrl": "/assets/hinh/p104-h04.png",
        "img2xUrl": "/assets/hinh-2x/p104-h04.png",
        "width": 178,
        "height": 332,
        "desc": "CHIÊU 102: Xoay người sang phải, đánh: tay như động tác 14, chân đá móc lên như cách thức của động tác 100."
      },
      {
        "id": "bai-17-m-75",
        "stepNo": "75",
        "assetId": "p104-h05",
        "displayId": "H0578",
        "pdfPage": 104,
        "imgUrl": "/assets/hinh/p104-h05.png",
        "img2xUrl": "/assets/hinh-2x/p104-h05.png",
        "width": 237,
        "height": 353,
        "desc": "CHIÊU 96: Xoay người sang phải, hai bàn tay vuốt kéo Tay P bụng Mộc Nhân về phía ñ trước, đánh gập theo ' hướng từ trên xuống dưới, đồng thời dùng đầu gối chân trái đánh từ dưới lên. '"
      },
      {
        "id": "bai-17-m-76",
        "stepNo": "76",
        "assetId": "p104-h06",
        "displayId": "H0579",
        "pdfPage": 104,
        "imgUrl": "/assets/hinh/p104-h06.png",
        "img2xUrl": "/assets/hinh-2x/p104-h06.png",
        "width": 249,
        "height": 345,
        "desc": "CHIÊU 104: Trở về vị trí đứng Kiềm Dương tấn, đánh như cách thức của động tác 50.1"
      },
      {
        "id": "bai-17-m-77",
        "stepNo": "77",
        "assetId": "p104-h07",
        "displayId": "H0580",
        "pdfPage": 104,
        "imgUrl": "/assets/hinh/p104-h07.png",
        "img2xUrl": "/assets/hinh-2x/p104-h07.png",
        "width": 244,
        "height": 345,
        "desc": "CHIÊU 104: Tiếp theo, đánh như cách thức của động tác"
      },
      {
        "id": "bai-17-m-78",
        "stepNo": "78",
        "assetId": "p105-h01",
        "displayId": "H0581",
        "pdfPage": 105,
        "imgUrl": "/assets/hinh/p105-h01.png",
        "img2xUrl": "/assets/hinh-2x/p105-h01.png",
        "width": 247,
        "height": 343,
        "desc": "CHIÊU 102: Xoay người sang phải, đánh: tay như động tác 14, chân đá móc lên như cách thức của động tác 100."
      },
      {
        "id": "bai-17-m-79",
        "stepNo": "79",
        "assetId": "p105-h02",
        "displayId": "H0582",
        "pdfPage": 105,
        "imgUrl": "/assets/hinh/p105-h02.png",
        "img2xUrl": "/assets/hinh-2x/p105-h02.png",
        "width": 228,
        "height": 345,
        "desc": "Chiêu 80 • Thu thế: Thu hồi kình lực, điều hòa hơi thở, thu quyền về thế kiềm dương ban đầu."
      },
      {
        "id": "bai-17-m-80",
        "stepNo": "80",
        "assetId": "p105-h03",
        "displayId": "H0583",
        "pdfPage": 105,
        "imgUrl": "/assets/hinh/p105-h03.png",
        "img2xUrl": "/assets/hinh-2x/p105-h03.png",
        "width": 227,
        "height": 343,
        "desc": "CHIÊU 104: Trở về vị trí đứng Kiềm Dương tấn, đánh như cách thức của động tác 50.1"
      }
    ],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-18",
    "title": "Bài mộc nhân tiến lùi",
    "groupId": "moc-nhan",
    "bookOrder": 18,
    "contentType": "practice_or_mixed",
    "pdfPages": [
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113,
      114,
      115,
      116
    ],
    "pageRange": "Trang PDF 106 – 116",
    "assetCount": 83,
    "assets": [
      {
        "assetId": "p106-h01",
        "displayId": "H0584",
        "pdfPage": 106,
        "imgUrl": "/assets/hinh/p106-h01.png",
        "img2xUrl": "/assets/hinh-2x/p106-h01.png",
        "width": 170,
        "height": 323
      },
      {
        "assetId": "p106-h02",
        "displayId": "H0585",
        "pdfPage": 106,
        "imgUrl": "/assets/hinh/p106-h02.png",
        "img2xUrl": "/assets/hinh-2x/p106-h02.png",
        "width": 217,
        "height": 322
      },
      {
        "assetId": "p106-h03",
        "displayId": "H0586",
        "pdfPage": 106,
        "imgUrl": "/assets/hinh/p106-h03.png",
        "img2xUrl": "/assets/hinh-2x/p106-h03.png",
        "width": 231,
        "height": 327
      },
      {
        "assetId": "p106-h04",
        "displayId": "H0587",
        "pdfPage": 106,
        "imgUrl": "/assets/hinh/p106-h04.png",
        "img2xUrl": "/assets/hinh-2x/p106-h04.png",
        "width": 205,
        "height": 324
      },
      {
        "assetId": "p106-h05",
        "displayId": "H0588",
        "pdfPage": 106,
        "imgUrl": "/assets/hinh/p106-h05.png",
        "img2xUrl": "/assets/hinh-2x/p106-h05.png",
        "width": 230,
        "height": 314
      },
      {
        "assetId": "p106-h06",
        "displayId": "H0589",
        "pdfPage": 106,
        "imgUrl": "/assets/hinh/p106-h06.png",
        "img2xUrl": "/assets/hinh-2x/p106-h06.png",
        "width": 231,
        "height": 331
      },
      {
        "assetId": "p106-h07",
        "displayId": "H0590",
        "pdfPage": 106,
        "imgUrl": "/assets/hinh/p106-h07.png",
        "img2xUrl": "/assets/hinh-2x/p106-h07.png",
        "width": 237,
        "height": 338
      },
      {
        "assetId": "p106-h08",
        "displayId": "H0591",
        "pdfPage": 106,
        "imgUrl": "/assets/hinh/p106-h08.png",
        "img2xUrl": "/assets/hinh-2x/p106-h08.png",
        "width": 254,
        "height": 344
      },
      {
        "assetId": "p107-h01",
        "displayId": "H0592",
        "pdfPage": 107,
        "imgUrl": "/assets/hinh/p107-h01.png",
        "img2xUrl": "/assets/hinh-2x/p107-h01.png",
        "width": 243,
        "height": 333
      },
      {
        "assetId": "p107-h02",
        "displayId": "H0593",
        "pdfPage": 107,
        "imgUrl": "/assets/hinh/p107-h02.png",
        "img2xUrl": "/assets/hinh-2x/p107-h02.png",
        "width": 224,
        "height": 319
      },
      {
        "assetId": "p107-h03",
        "displayId": "H0594",
        "pdfPage": 107,
        "imgUrl": "/assets/hinh/p107-h03.png",
        "img2xUrl": "/assets/hinh-2x/p107-h03.png",
        "width": 232,
        "height": 324
      },
      {
        "assetId": "p107-h04",
        "displayId": "H0595",
        "pdfPage": 107,
        "imgUrl": "/assets/hinh/p107-h04.png",
        "img2xUrl": "/assets/hinh-2x/p107-h04.png",
        "width": 239,
        "height": 323
      },
      {
        "assetId": "p107-h05",
        "displayId": "H0596",
        "pdfPage": 107,
        "imgUrl": "/assets/hinh/p107-h05.png",
        "img2xUrl": "/assets/hinh-2x/p107-h05.png",
        "width": 200,
        "height": 321
      },
      {
        "assetId": "p107-h06",
        "displayId": "H0597",
        "pdfPage": 107,
        "imgUrl": "/assets/hinh/p107-h06.png",
        "img2xUrl": "/assets/hinh-2x/p107-h06.png",
        "width": 242,
        "height": 327
      },
      {
        "assetId": "p107-h07",
        "displayId": "H0598",
        "pdfPage": 107,
        "imgUrl": "/assets/hinh/p107-h07.png",
        "img2xUrl": "/assets/hinh-2x/p107-h07.png",
        "width": 240,
        "height": 326
      },
      {
        "assetId": "p107-h08",
        "displayId": "H0599",
        "pdfPage": 107,
        "imgUrl": "/assets/hinh/p107-h08.png",
        "img2xUrl": "/assets/hinh-2x/p107-h08.png",
        "width": 220,
        "height": 332
      },
      {
        "assetId": "p108-h01",
        "displayId": "H0600",
        "pdfPage": 108,
        "imgUrl": "/assets/hinh/p108-h01.png",
        "img2xUrl": "/assets/hinh-2x/p108-h01.png",
        "width": 227,
        "height": 335
      },
      {
        "assetId": "p108-h02",
        "displayId": "H0601",
        "pdfPage": 108,
        "imgUrl": "/assets/hinh/p108-h02.png",
        "img2xUrl": "/assets/hinh-2x/p108-h02.png",
        "width": 241,
        "height": 344
      },
      {
        "assetId": "p108-h03",
        "displayId": "H0602",
        "pdfPage": 108,
        "imgUrl": "/assets/hinh/p108-h03.png",
        "img2xUrl": "/assets/hinh-2x/p108-h03.png",
        "width": 236,
        "height": 348
      },
      {
        "assetId": "p108-h04",
        "displayId": "H0603",
        "pdfPage": 108,
        "imgUrl": "/assets/hinh/p108-h04.png",
        "img2xUrl": "/assets/hinh-2x/p108-h04.png",
        "width": 207,
        "height": 340
      },
      {
        "assetId": "p108-h05",
        "displayId": "H0604",
        "pdfPage": 108,
        "imgUrl": "/assets/hinh/p108-h05.png",
        "img2xUrl": "/assets/hinh-2x/p108-h05.png",
        "width": 206,
        "height": 341
      },
      {
        "assetId": "p108-h06",
        "displayId": "H0605",
        "pdfPage": 108,
        "imgUrl": "/assets/hinh/p108-h06.png",
        "img2xUrl": "/assets/hinh-2x/p108-h06.png",
        "width": 231,
        "height": 335
      },
      {
        "assetId": "p108-h07",
        "displayId": "H0606",
        "pdfPage": 108,
        "imgUrl": "/assets/hinh/p108-h07.png",
        "img2xUrl": "/assets/hinh-2x/p108-h07.png",
        "width": 226,
        "height": 342
      },
      {
        "assetId": "p108-h08",
        "displayId": "H0607",
        "pdfPage": 108,
        "imgUrl": "/assets/hinh/p108-h08.png",
        "img2xUrl": "/assets/hinh-2x/p108-h08.png",
        "width": 229,
        "height": 342
      },
      {
        "assetId": "p109-h01",
        "displayId": "H0608",
        "pdfPage": 109,
        "imgUrl": "/assets/hinh/p109-h01.png",
        "img2xUrl": "/assets/hinh-2x/p109-h01.png",
        "width": 227,
        "height": 339
      },
      {
        "assetId": "p109-h02",
        "displayId": "H0609",
        "pdfPage": 109,
        "imgUrl": "/assets/hinh/p109-h02.png",
        "img2xUrl": "/assets/hinh-2x/p109-h02.png",
        "width": 229,
        "height": 339
      },
      {
        "assetId": "p109-h03",
        "displayId": "H0610",
        "pdfPage": 109,
        "imgUrl": "/assets/hinh/p109-h03.png",
        "img2xUrl": "/assets/hinh-2x/p109-h03.png",
        "width": 240,
        "height": 340
      },
      {
        "assetId": "p109-h04",
        "displayId": "H0611",
        "pdfPage": 109,
        "imgUrl": "/assets/hinh/p109-h04.png",
        "img2xUrl": "/assets/hinh-2x/p109-h04.png",
        "width": 247,
        "height": 347
      },
      {
        "assetId": "p109-h05",
        "displayId": "H0612",
        "pdfPage": 109,
        "imgUrl": "/assets/hinh/p109-h05.png",
        "img2xUrl": "/assets/hinh-2x/p109-h05.png",
        "width": 238,
        "height": 347
      },
      {
        "assetId": "p109-h06",
        "displayId": "H0613",
        "pdfPage": 109,
        "imgUrl": "/assets/hinh/p109-h06.png",
        "img2xUrl": "/assets/hinh-2x/p109-h06.png",
        "width": 247,
        "height": 340
      },
      {
        "assetId": "p109-h07",
        "displayId": "H0614",
        "pdfPage": 109,
        "imgUrl": "/assets/hinh/p109-h07.png",
        "img2xUrl": "/assets/hinh-2x/p109-h07.png",
        "width": 237,
        "height": 349
      },
      {
        "assetId": "p109-h08",
        "displayId": "H0615",
        "pdfPage": 109,
        "imgUrl": "/assets/hinh/p109-h08.png",
        "img2xUrl": "/assets/hinh-2x/p109-h08.png",
        "width": 247,
        "height": 348
      },
      {
        "assetId": "p110-h01",
        "displayId": "H0616",
        "pdfPage": 110,
        "imgUrl": "/assets/hinh/p110-h01.png",
        "img2xUrl": "/assets/hinh-2x/p110-h01.png",
        "width": 218,
        "height": 340
      },
      {
        "assetId": "p110-h02",
        "displayId": "H0617",
        "pdfPage": 110,
        "imgUrl": "/assets/hinh/p110-h02.png",
        "img2xUrl": "/assets/hinh-2x/p110-h02.png",
        "width": 228,
        "height": 337
      },
      {
        "assetId": "p110-h03",
        "displayId": "H0618",
        "pdfPage": 110,
        "imgUrl": "/assets/hinh/p110-h03.png",
        "img2xUrl": "/assets/hinh-2x/p110-h03.png",
        "width": 234,
        "height": 338
      },
      {
        "assetId": "p110-h04",
        "displayId": "H0619",
        "pdfPage": 110,
        "imgUrl": "/assets/hinh/p110-h04.png",
        "img2xUrl": "/assets/hinh-2x/p110-h04.png",
        "width": 244,
        "height": 352
      },
      {
        "assetId": "p110-h05",
        "displayId": "H0620",
        "pdfPage": 110,
        "imgUrl": "/assets/hinh/p110-h05.png",
        "img2xUrl": "/assets/hinh-2x/p110-h05.png",
        "width": 241,
        "height": 351
      },
      {
        "assetId": "p110-h06",
        "displayId": "H0621",
        "pdfPage": 110,
        "imgUrl": "/assets/hinh/p110-h06.png",
        "img2xUrl": "/assets/hinh-2x/p110-h06.png",
        "width": 217,
        "height": 330
      },
      {
        "assetId": "p110-h07",
        "displayId": "H0622",
        "pdfPage": 110,
        "imgUrl": "/assets/hinh/p110-h07.png",
        "img2xUrl": "/assets/hinh-2x/p110-h07.png",
        "width": 237,
        "height": 347
      },
      {
        "assetId": "p110-h08",
        "displayId": "H0623",
        "pdfPage": 110,
        "imgUrl": "/assets/hinh/p110-h08.png",
        "img2xUrl": "/assets/hinh-2x/p110-h08.png",
        "width": 240,
        "height": 344
      },
      {
        "assetId": "p111-h01",
        "displayId": "H0624",
        "pdfPage": 111,
        "imgUrl": "/assets/hinh/p111-h01.png",
        "img2xUrl": "/assets/hinh-2x/p111-h01.png",
        "width": 238,
        "height": 345
      },
      {
        "assetId": "p111-h02",
        "displayId": "H0625",
        "pdfPage": 111,
        "imgUrl": "/assets/hinh/p111-h02.png",
        "img2xUrl": "/assets/hinh-2x/p111-h02.png",
        "width": 241,
        "height": 344
      },
      {
        "assetId": "p111-h03",
        "displayId": "H0626",
        "pdfPage": 111,
        "imgUrl": "/assets/hinh/p111-h03.png",
        "img2xUrl": "/assets/hinh-2x/p111-h03.png",
        "width": 240,
        "height": 346
      },
      {
        "assetId": "p111-h04",
        "displayId": "H0627",
        "pdfPage": 111,
        "imgUrl": "/assets/hinh/p111-h04.png",
        "img2xUrl": "/assets/hinh-2x/p111-h04.png",
        "width": 245,
        "height": 346
      },
      {
        "assetId": "p111-h05",
        "displayId": "H0628",
        "pdfPage": 111,
        "imgUrl": "/assets/hinh/p111-h05.png",
        "img2xUrl": "/assets/hinh-2x/p111-h05.png",
        "width": 242,
        "height": 343
      },
      {
        "assetId": "p111-h06",
        "displayId": "H0629",
        "pdfPage": 111,
        "imgUrl": "/assets/hinh/p111-h06.png",
        "img2xUrl": "/assets/hinh-2x/p111-h06.png",
        "width": 225,
        "height": 346
      },
      {
        "assetId": "p111-h07",
        "displayId": "H0630",
        "pdfPage": 111,
        "imgUrl": "/assets/hinh/p111-h07.png",
        "img2xUrl": "/assets/hinh-2x/p111-h07.png",
        "width": 248,
        "height": 348
      },
      {
        "assetId": "p111-h08",
        "displayId": "H0631",
        "pdfPage": 111,
        "imgUrl": "/assets/hinh/p111-h08.png",
        "img2xUrl": "/assets/hinh-2x/p111-h08.png",
        "width": 239,
        "height": 346
      },
      {
        "assetId": "p112-h01",
        "displayId": "H0632",
        "pdfPage": 112,
        "imgUrl": "/assets/hinh/p112-h01.png",
        "img2xUrl": "/assets/hinh-2x/p112-h01.png",
        "width": 228,
        "height": 339
      },
      {
        "assetId": "p112-h02",
        "displayId": "H0633",
        "pdfPage": 112,
        "imgUrl": "/assets/hinh/p112-h02.png",
        "img2xUrl": "/assets/hinh-2x/p112-h02.png",
        "width": 234,
        "height": 351
      },
      {
        "assetId": "p112-h03",
        "displayId": "H0634",
        "pdfPage": 112,
        "imgUrl": "/assets/hinh/p112-h03.png",
        "img2xUrl": "/assets/hinh-2x/p112-h03.png",
        "width": 246,
        "height": 344
      },
      {
        "assetId": "p112-h04",
        "displayId": "H0635",
        "pdfPage": 112,
        "imgUrl": "/assets/hinh/p112-h04.png",
        "img2xUrl": "/assets/hinh-2x/p112-h04.png",
        "width": 236,
        "height": 348
      },
      {
        "assetId": "p112-h05",
        "displayId": "H0636",
        "pdfPage": 112,
        "imgUrl": "/assets/hinh/p112-h05.png",
        "img2xUrl": "/assets/hinh-2x/p112-h05.png",
        "width": 221,
        "height": 344
      },
      {
        "assetId": "p112-h06",
        "displayId": "H0637",
        "pdfPage": 112,
        "imgUrl": "/assets/hinh/p112-h06.png",
        "img2xUrl": "/assets/hinh-2x/p112-h06.png",
        "width": 247,
        "height": 343
      },
      {
        "assetId": "p112-h07",
        "displayId": "H0638",
        "pdfPage": 112,
        "imgUrl": "/assets/hinh/p112-h07.png",
        "img2xUrl": "/assets/hinh-2x/p112-h07.png",
        "width": 243,
        "height": 346
      },
      {
        "assetId": "p113-h01",
        "displayId": "H0639",
        "pdfPage": 113,
        "imgUrl": "/assets/hinh/p113-h01.png",
        "img2xUrl": "/assets/hinh-2x/p113-h01.png",
        "width": 240,
        "height": 355
      },
      {
        "assetId": "p113-h02",
        "displayId": "H0640",
        "pdfPage": 113,
        "imgUrl": "/assets/hinh/p113-h02.png",
        "img2xUrl": "/assets/hinh-2x/p113-h02.png",
        "width": 230,
        "height": 355
      },
      {
        "assetId": "p113-h03",
        "displayId": "H0641",
        "pdfPage": 113,
        "imgUrl": "/assets/hinh/p113-h03.png",
        "img2xUrl": "/assets/hinh-2x/p113-h03.png",
        "width": 235,
        "height": 355
      },
      {
        "assetId": "p113-h04",
        "displayId": "H0642",
        "pdfPage": 113,
        "imgUrl": "/assets/hinh/p113-h04.png",
        "img2xUrl": "/assets/hinh-2x/p113-h04.png",
        "width": 240,
        "height": 355
      },
      {
        "assetId": "p113-h05",
        "displayId": "H0643",
        "pdfPage": 113,
        "imgUrl": "/assets/hinh/p113-h05.png",
        "img2xUrl": "/assets/hinh-2x/p113-h05.png",
        "width": 230,
        "height": 355
      },
      {
        "assetId": "p113-h06",
        "displayId": "H0644",
        "pdfPage": 113,
        "imgUrl": "/assets/hinh/p113-h06.png",
        "img2xUrl": "/assets/hinh-2x/p113-h06.png",
        "width": 235,
        "height": 355
      },
      {
        "assetId": "p113-h07",
        "displayId": "H0645",
        "pdfPage": 113,
        "imgUrl": "/assets/hinh/p113-h07.png",
        "img2xUrl": "/assets/hinh-2x/p113-h07.png",
        "width": 230,
        "height": 355
      },
      {
        "assetId": "p113-h08",
        "displayId": "H0646",
        "pdfPage": 113,
        "imgUrl": "/assets/hinh/p113-h08.png",
        "img2xUrl": "/assets/hinh-2x/p113-h08.png",
        "width": 235,
        "height": 355
      },
      {
        "assetId": "p114-h01",
        "displayId": "H0647",
        "pdfPage": 114,
        "imgUrl": "/assets/hinh/p114-h01.png",
        "img2xUrl": "/assets/hinh-2x/p114-h01.png",
        "width": 235,
        "height": 340
      },
      {
        "assetId": "p114-h02",
        "displayId": "H0648",
        "pdfPage": 114,
        "imgUrl": "/assets/hinh/p114-h02.png",
        "img2xUrl": "/assets/hinh-2x/p114-h02.png",
        "width": 239,
        "height": 346
      },
      {
        "assetId": "p114-h03",
        "displayId": "H0649",
        "pdfPage": 114,
        "imgUrl": "/assets/hinh/p114-h03.png",
        "img2xUrl": "/assets/hinh-2x/p114-h03.png",
        "width": 253,
        "height": 343
      },
      {
        "assetId": "p114-h04",
        "displayId": "H0650",
        "pdfPage": 114,
        "imgUrl": "/assets/hinh/p114-h04.png",
        "img2xUrl": "/assets/hinh-2x/p114-h04.png",
        "width": 243,
        "height": 350
      },
      {
        "assetId": "p114-h05",
        "displayId": "H0651",
        "pdfPage": 114,
        "imgUrl": "/assets/hinh/p114-h05.png",
        "img2xUrl": "/assets/hinh-2x/p114-h05.png",
        "width": 228,
        "height": 344
      },
      {
        "assetId": "p114-h06",
        "displayId": "H0652",
        "pdfPage": 114,
        "imgUrl": "/assets/hinh/p114-h06.png",
        "img2xUrl": "/assets/hinh-2x/p114-h06.png",
        "width": 234,
        "height": 343
      },
      {
        "assetId": "p114-h07",
        "displayId": "H0653",
        "pdfPage": 114,
        "imgUrl": "/assets/hinh/p114-h07.png",
        "img2xUrl": "/assets/hinh-2x/p114-h07.png",
        "width": 244,
        "height": 348
      },
      {
        "assetId": "p115-h01",
        "displayId": "H0654",
        "pdfPage": 115,
        "imgUrl": "/assets/hinh/p115-h01.png",
        "img2xUrl": "/assets/hinh-2x/p115-h01.png",
        "width": 242,
        "height": 348
      },
      {
        "assetId": "p115-h02",
        "displayId": "H0655",
        "pdfPage": 115,
        "imgUrl": "/assets/hinh/p115-h02.png",
        "img2xUrl": "/assets/hinh-2x/p115-h02.png",
        "width": 256,
        "height": 346
      },
      {
        "assetId": "p115-h03",
        "displayId": "H0656",
        "pdfPage": 115,
        "imgUrl": "/assets/hinh/p115-h03.png",
        "img2xUrl": "/assets/hinh-2x/p115-h03.png",
        "width": 243,
        "height": 350
      },
      {
        "assetId": "p115-h04",
        "displayId": "H0657",
        "pdfPage": 115,
        "imgUrl": "/assets/hinh/p115-h04.png",
        "img2xUrl": "/assets/hinh-2x/p115-h04.png",
        "width": 246,
        "height": 343
      },
      {
        "assetId": "p115-h05",
        "displayId": "H0658",
        "pdfPage": 115,
        "imgUrl": "/assets/hinh/p115-h05.png",
        "img2xUrl": "/assets/hinh-2x/p115-h05.png",
        "width": 215,
        "height": 365
      },
      {
        "assetId": "p115-h06",
        "displayId": "H0659",
        "pdfPage": 115,
        "imgUrl": "/assets/hinh/p115-h06.png",
        "img2xUrl": "/assets/hinh-2x/p115-h06.png",
        "width": 223,
        "height": 350
      },
      {
        "assetId": "p115-h07",
        "displayId": "H0660",
        "pdfPage": 115,
        "imgUrl": "/assets/hinh/p115-h07.png",
        "img2xUrl": "/assets/hinh-2x/p115-h07.png",
        "width": 233,
        "height": 345
      },
      {
        "assetId": "p115-h08",
        "displayId": "H0661",
        "pdfPage": 115,
        "imgUrl": "/assets/hinh/p115-h08.png",
        "img2xUrl": "/assets/hinh-2x/p115-h08.png",
        "width": 227,
        "height": 353
      },
      {
        "assetId": "p116-h01",
        "displayId": "H0662",
        "pdfPage": 116,
        "imgUrl": "/assets/hinh/p116-h01.png",
        "img2xUrl": "/assets/hinh-2x/p116-h01.png",
        "width": 221,
        "height": 346
      },
      {
        "assetId": "p116-h02",
        "displayId": "H0663",
        "pdfPage": 116,
        "imgUrl": "/assets/hinh/p116-h02.png",
        "img2xUrl": "/assets/hinh-2x/p116-h02.png",
        "width": 255,
        "height": 346
      },
      {
        "assetId": "p116-h03",
        "displayId": "H0664",
        "pdfPage": 116,
        "imgUrl": "/assets/hinh/p116-h03.png",
        "img2xUrl": "/assets/hinh-2x/p116-h03.png",
        "width": 247,
        "height": 348
      },
      {
        "assetId": "p116-h04",
        "displayId": "H0665",
        "pdfPage": 116,
        "imgUrl": "/assets/hinh/p116-h04.png",
        "img2xUrl": "/assets/hinh-2x/p116-h04.png",
        "width": 249,
        "height": 347
      },
      {
        "assetId": "p116-h05",
        "displayId": "H0666",
        "pdfPage": 116,
        "imgUrl": "/assets/hinh/p116-h05.png",
        "img2xUrl": "/assets/hinh-2x/p116-h05.png",
        "width": 236,
        "height": 353
      }
    ],
    "motions": [
      {
        "id": "bai-18-m-1",
        "stepNo": "1",
        "assetId": "p106-h01",
        "displayId": "H0584",
        "pdfPage": 106,
        "imgUrl": "/assets/hinh/p106-h01.png",
        "img2xUrl": "/assets/hinh-2x/p106-h01.png",
        "width": 170,
        "height": 323,
        "desc": "CHIÊU 1: Tiến chân phải lên, 2 bàn tay úp vào nhau đồng thời xỉa thăng vào giữa 2 tay mộc nhân."
      },
      {
        "id": "bai-18-m-2",
        "stepNo": "2",
        "assetId": "p106-h02",
        "displayId": "H0585",
        "pdfPage": 106,
        "imgUrl": "/assets/hinh/p106-h02.png",
        "img2xUrl": "/assets/hinh-2x/p106-h02.png",
        "width": 217,
        "height": 322,
        "desc": "CHIÊU 2: Thu chân phải về bằng chân trái, đánh 2 bàn tay xuống tay mộc nhân phía dưới."
      },
      {
        "id": "bai-18-m-3",
        "stepNo": "3",
        "assetId": "p106-h03",
        "displayId": "H0586",
        "pdfPage": 106,
        "imgUrl": "/assets/hinh/p106-h03.png",
        "img2xUrl": "/assets/hinh-2x/p106-h03.png",
        "width": 231,
        "height": 327,
        "desc": "CHIÊU 3: Bước chéo chân phải sang phải, kéo theo chân trái cùng tiến lên một bước, xoay người đánh cạnh cảng tay vào tay mộc nhãn, tay trái thủ."
      },
      {
        "id": "bai-18-m-4",
        "stepNo": "4",
        "assetId": "p106-h04",
        "displayId": "H0587",
        "pdfPage": 106,
        "imgUrl": "/assets/hinh/p106-h04.png",
        "img2xUrl": "/assets/hinh-2x/p106-h04.png",
        "width": 205,
        "height": 324,
        "desc": "CHIÊU 3: Gập cổ tay phải và kéo giật xuông tay mộc nhân. Tay trái thủ."
      },
      {
        "id": "bai-18-m-5",
        "stepNo": "5",
        "assetId": "p106-h05",
        "displayId": "H0588",
        "pdfPage": 106,
        "imgUrl": "/assets/hinh/p106-h05.png",
        "img2xUrl": "/assets/hinh-2x/p106-h05.png",
        "width": 230,
        "height": 314,
        "desc": "CHIÊU 3: Tay phải trườn dọc tay mộc nhân đánh (chưởng) thăng. Tay trái thủ."
      },
      {
        "id": "bai-18-m-6",
        "stepNo": "6",
        "assetId": "p106-h06",
        "displayId": "H0589",
        "pdfPage": 106,
        "imgUrl": "/assets/hinh/p106-h06.png",
        "img2xUrl": "/assets/hinh-2x/p106-h06.png",
        "width": 231,
        "height": 331,
        "desc": "CHIÊU 4: Bước chéo chân trái sang phải, duny người, tay trái <n ng vắt qua tay mộc nhân, tay phải đánh Canh chưởng. :"
      },
      {
        "id": "bai-18-m-7",
        "stepNo": "7",
        "assetId": "p106-h07",
        "displayId": "H0590",
        "pdfPage": 106,
        "imgUrl": "/assets/hinh/p106-h07.png",
        "img2xUrl": "/assets/hinh-2x/p106-h07.png",
        "width": 237,
        "height": 338,
        "desc": "CHIÊU 7: Bước chéo chân trái sang phải, quay người, tay phải bàng thú, tay trái thủ."
      },
      {
        "id": "bai-18-m-8",
        "stepNo": "8",
        "assetId": "p106-h08",
        "displayId": "H0591",
        "pdfPage": 106,
        "imgUrl": "/assets/hinh/p106-h08.png",
        "img2xUrl": "/assets/hinh-2x/p106-h08.png",
        "width": 254,
        "height": 344,
        "desc": "CHIÊU 7: Lùi chân phải ra sau, tay phải than thủ, tay trái thủ."
      },
      {
        "id": "bai-18-m-9",
        "stepNo": "9",
        "assetId": "p107-h01",
        "displayId": "H0592",
        "pdfPage": 107,
        "imgUrl": "/assets/hinh/p107-h01.png",
        "img2xUrl": "/assets/hinh-2x/p107-h01.png",
        "width": 243,
        "height": 333,
        "desc": "CHIÊU 7: Tiến chân phải lên, tay phải đánh chưởng, tay trái thủ."
      },
      {
        "id": "bai-18-m-10",
        "stepNo": "10",
        "assetId": "p107-h02",
        "displayId": "H0593",
        "pdfPage": 107,
        "imgUrl": "/assets/hinh/p107-h02.png",
        "img2xUrl": "/assets/hinh-2x/p107-h02.png",
        "width": 224,
        "height": 319,
        "desc": "CHIÊU 9: Bước chéo chân trái sang phải, quay người đánh 2 nắm đấm từ trên xuống."
      },
      {
        "id": "bai-18-m-11",
        "stepNo": "11",
        "assetId": "p107-h03",
        "displayId": "H0594",
        "pdfPage": 107,
        "imgUrl": "/assets/hinh/p107-h03.png",
        "img2xUrl": "/assets/hinh-2x/p107-h03.png",
        "width": 232,
        "height": 324,
        "desc": "CHIÊU 11;: Bước chéo chân trái sang phải, quay người, xỉa 2 tay xà."
      },
      {
        "id": "bai-18-m-12",
        "stepNo": "12",
        "assetId": "p107-h04",
        "displayId": "H0595",
        "pdfPage": 107,
        "imgUrl": "/assets/hinh/p107-h04.png",
        "img2xUrl": "/assets/hinh-2x/p107-h04.png",
        "width": 239,
        "height": 323,
        "desc": "CHIÊU 13: Bước chéo chân trái sang phải, quay người, vây 2 cổ tay đánh hất tay mộc nhân."
      },
      {
        "id": "bai-18-m-13",
        "stepNo": "13",
        "assetId": "p107-h05",
        "displayId": "H0596",
        "pdfPage": 107,
        "imgUrl": "/assets/hinh/p107-h05.png",
        "img2xUrl": "/assets/hinh-2x/p107-h05.png",
        "width": 200,
        "height": 321,
        "desc": "CHIÊU 15: Bước chéo chân trái sang phải, quay người, dựng 2 tay kẹp vào tay mộc nhân và vặn căng tay vào trong."
      },
      {
        "id": "bai-18-m-14",
        "stepNo": "14",
        "assetId": "p107-h06",
        "displayId": "H0597",
        "pdfPage": 107,
        "imgUrl": "/assets/hinh/p107-h06.png",
        "img2xUrl": "/assets/hinh-2x/p107-h06.png",
        "width": 242,
        "height": 327,
        "desc": "CHIÊU 16: Bước chéo chân trái vàogiữa,quayngười,2tay Ï tạo thành điệp chưởng (tay ‹ trái trên, tay phải dưới) đây tay mộc nhân."
      },
      {
        "id": "bai-18-m-15",
        "stepNo": "15",
        "assetId": "p107-h07",
        "displayId": "H0598",
        "pdfPage": 107,
        "imgUrl": "/assets/hinh/p107-h07.png",
        "img2xUrl": "/assets/hinh-2x/p107-h07.png",
        "width": 240,
        "height": 326,
        "desc": "CHIÊU 21: Sau khi vít hết đà, lập tực đánh bật tở lại."
      },
      {
        "id": "bai-18-m-16",
        "stepNo": "16",
        "assetId": "p107-h08",
        "displayId": "H0599",
        "pdfPage": 107,
        "imgUrl": "/assets/hinh/p107-h08.png",
        "img2xUrl": "/assets/hinh-2x/p107-h08.png",
        "width": 220,
        "height": 332,
        "desc": "CHIÊU 23: Bước chân trái vào. giữa, quay người, 2 tay bắt vào tay trái mộc nhân (tay trái ở trong, tay phải ở ngoài) cùng lúc kéo mạnh, ngược chiều nhau."
      },
      {
        "id": "bai-18-m-17",
        "stepNo": "17",
        "assetId": "p108-h01",
        "displayId": "H0600",
        "pdfPage": 108,
        "imgUrl": "/assets/hinh/p108-h01.png",
        "img2xUrl": "/assets/hinh-2x/p108-h01.png",
        "width": 227,
        "height": 335,
        "desc": "CHIÊU 21: Sau khi vít hết đà, lập tực đánh bật tở lại."
      },
      {
        "id": "bai-18-m-18",
        "stepNo": "18",
        "assetId": "p108-h02",
        "displayId": "H0601",
        "pdfPage": 108,
        "imgUrl": "/assets/hinh/p108-h02.png",
        "img2xUrl": "/assets/hinh-2x/p108-h02.png",
        "width": 241,
        "height": 344,
        "desc": "CHIÊU 23: Bước chân trái vào. giữa, quay người, 2 tay bắt vào tay trái mộc nhân (tay trái ở trong, tay phải ở ngoài) cùng lúc kéo mạnh, ngược chiều nhau."
      },
      {
        "id": "bai-18-m-19",
        "stepNo": "19",
        "assetId": "p108-h03",
        "displayId": "H0602",
        "pdfPage": 108,
        "imgUrl": "/assets/hinh/p108-h03.png",
        "img2xUrl": "/assets/hinh-2x/p108-h03.png",
        "width": 236,
        "height": 348,
        "desc": "CHIÊU 23: Thu chân phải về bằng chân trái, xoay 2 bàn chân thăng hướng mộc nhân. Bước chân trái lên, thực hiện như chiêu 23 với bên trái."
      },
      {
        "id": "bai-18-m-20",
        "stepNo": "20",
        "assetId": "p108-h04",
        "displayId": "H0603",
        "pdfPage": 108,
        "imgUrl": "/assets/hinh/p108-h04.png",
        "img2xUrl": "/assets/hinh-2x/p108-h04.png",
        "width": 207,
        "height": 340,
        "desc": "CHIÊU 25: Bước chéo chân trái sang phải, quay người, tay trái dựng đứng tỳ vào mặt trong tay mộc nhân, căng tay phải áp dọc mặt ngoài, lắc vai phải về phía trước (bè)."
      },
      {
        "id": "bai-18-m-21",
        "stepNo": "21",
        "assetId": "p108-h05",
        "displayId": "H0604",
        "pdfPage": 108,
        "imgUrl": "/assets/hinh/p108-h05.png",
        "img2xUrl": "/assets/hinh-2x/p108-h05.png",
        "width": 206,
        "height": 341,
        "desc": "CHIÊU 30: Thu chân phải về bằng chân trái, xoay 2 bàn chân thẳng hướng mộc nhân. Tiến chân trái lên, thực hiện như chiêu 29 với bên kia."
      },
      {
        "id": "bai-18-m-22",
        "stepNo": "22",
        "assetId": "p108-h06",
        "displayId": "H0605",
        "pdfPage": 108,
        "imgUrl": "/assets/hinh/p108-h06.png",
        "img2xUrl": "/assets/hinh-2x/p108-h06.png",
        "width": 231,
        "height": 335,
        "desc": "CHIÊU 31: Thu chân trái về bằng chân phải, tấn kiềm dương. Hai căng tay song song, đề trên 2 tay mộc nhân, hơi hóp ngực, kéo vuốt tay mộc nhân về."
      },
      {
        "id": "bai-18-m-23",
        "stepNo": "23",
        "assetId": "p108-h07",
        "displayId": "H0606",
        "pdfPage": 108,
        "imgUrl": "/assets/hinh/p108-h07.png",
        "img2xUrl": "/assets/hinh-2x/p108-h07.png",
        "width": 226,
        "height": 342,
        "desc": "CHIÊU 29: Thu chân trái về bằng chân phải, xoay 2 bàn chân thẳng hướng mộc nhân. Tiến chân phải lên, tay trái dựng đứng, tỳ vào mặt trong (phần đầu) tay mộc nhân, tay phải bắt tay mộc nhân và giật."
      },
      {
        "id": "bai-18-m-24",
        "stepNo": "24",
        "assetId": "p108-h08",
        "displayId": "H0607",
        "pdfPage": 108,
        "imgUrl": "/assets/hinh/p108-h08.png",
        "img2xUrl": "/assets/hinh-2x/p108-h08.png",
        "width": 229,
        "height": 342,
        "desc": "CHIÊU 30: Thu chân phải về bằng chân trái, xoay 2 bàn chân thẳng hướng mộc nhân. Tiến chân trái lên, thực hiện như chiêu 29 với bên kia."
      },
      {
        "id": "bai-18-m-25",
        "stepNo": "25",
        "assetId": "p109-h01",
        "displayId": "H0608",
        "pdfPage": 109,
        "imgUrl": "/assets/hinh/p109-h01.png",
        "img2xUrl": "/assets/hinh-2x/p109-h01.png",
        "width": 227,
        "height": 339,
        "desc": "CHIÊU 31: Thu chân trái về bằng chân phải, xoay người vẩy 2 cổ tay vỗ xuống tay mộc nhân."
      },
      {
        "id": "bai-18-m-26",
        "stepNo": "26",
        "assetId": "p109-h02",
        "displayId": "H0609",
        "pdfPage": 109,
        "imgUrl": "/assets/hinh/p109-h02.png",
        "img2xUrl": "/assets/hinh-2x/p109-h02.png",
        "width": 229,
        "height": 339,
        "desc": "CHIÊU 31: Tiến chân phải lên tay phải chém vào mộc nhân theo hướng hơi chếch, tay trái thủ."
      },
      {
        "id": "bai-18-m-27",
        "stepNo": "27",
        "assetId": "p109-h03",
        "displayId": "H0610",
        "pdfPage": 109,
        "imgUrl": "/assets/hinh/p109-h03.png",
        "img2xUrl": "/assets/hinh-2x/p109-h03.png",
        "width": 240,
        "height": 340,
        "desc": "CHIÊU 34: Thu chân trái về bằng mũi chân phải, xoay sang trái, đánh 2 cạnh bàn tay úp vào tay mộc nhân."
      },
      {
        "id": "bai-18-m-28",
        "stepNo": "28",
        "assetId": "p109-h04",
        "displayId": "H0611",
        "pdfPage": 109,
        "imgUrl": "/assets/hinh/p109-h04.png",
        "img2xUrl": "/assets/hinh-2x/p109-h04.png",
        "width": 247,
        "height": 347,
        "desc": "CHIÊU 34: Tiến chân phải lên, ra vai, đánh căng tay và bàn tay phải vào mộc nhân, tay trái thủ."
      },
      {
        "id": "bai-18-m-29",
        "stepNo": "29",
        "assetId": "p109-h05",
        "displayId": "H0612",
        "pdfPage": 109,
        "imgUrl": "/assets/hinh/p109-h05.png",
        "img2xUrl": "/assets/hinh-2x/p109-h05.png",
        "width": 238,
        "height": 347,
        "desc": "CHIÊU 35: Thu chân trái về bằng mũi chân phải. Tiến chân phải lên, đồng thời lắc cổ tay đánh 2 cườm tay vào tay mộc nhân."
      },
      {
        "id": "bai-18-m-30",
        "stepNo": "30",
        "assetId": "p109-h06",
        "displayId": "H0613",
        "pdfPage": 109,
        "imgUrl": "/assets/hinh/p109-h06.png",
        "img2xUrl": "/assets/hinh-2x/p109-h06.png",
        "width": 247,
        "height": 340,
        "desc": "CHIÊU 37: Thu chân trái về bằng chân phải, tấn kiềm dương, tay phải dựng, quặp cổ tay đánh giật xuống tay mộc nhân, cùng lúc đánh bàn tay trái từ dưới lên."
      },
      {
        "id": "bai-18-m-31",
        "stepNo": "31",
        "assetId": "p109-h07",
        "displayId": "H0614",
        "pdfPage": 109,
        "imgUrl": "/assets/hinh/p109-h07.png",
        "img2xUrl": "/assets/hinh-2x/p109-h07.png",
        "width": 237,
        "height": 349,
        "desc": "CHIÊU 37: Bước chân phải lên, vòng bàn tay trái từ dưới lên trên tay mộc nhân vuốt và kéo về, cùng lúc luồn tay phải xuống dưới tay mộc nhân chém ra."
      },
      {
        "id": "bai-18-m-32",
        "stepNo": "32",
        "assetId": "p109-h08",
        "displayId": "H0615",
        "pdfPage": 109,
        "imgUrl": "/assets/hinh/p109-h08.png",
        "img2xUrl": "/assets/hinh-2x/p109-h08.png",
        "width": 247,
        "height": 348,
        "desc": "CHIÊU 40: Thu chân trái về bằng chân phải, xoay sang trái, 2 tay vuốt dọc tay mộc nhân về phía mình (tay trái than thủ, bàn tay phải úp)."
      },
      {
        "id": "bai-18-m-33",
        "stepNo": "33",
        "assetId": "p110-h01",
        "displayId": "H0616",
        "pdfPage": 110,
        "imgUrl": "/assets/hinh/p110-h01.png",
        "img2xUrl": "/assets/hinh-2x/p110-h01.png",
        "width": 218,
        "height": 340,
        "desc": "CHIÊU 37: Thu chân trái về bằng chân phải, tấn kiềm dương, tay phải dựng, quặp cổ tay đánh giật xuống tay mộc nhân, cùng lúc đánh bàn tay trái từ dưới lên."
      },
      {
        "id": "bai-18-m-34",
        "stepNo": "34",
        "assetId": "p110-h02",
        "displayId": "H0617",
        "pdfPage": 110,
        "imgUrl": "/assets/hinh/p110-h02.png",
        "img2xUrl": "/assets/hinh-2x/p110-h02.png",
        "width": 228,
        "height": 337,
        "desc": "CHIÊU 37: Bước chân phải lên, vòng bàn tay trái từ dưới lên trên tay mộc nhân vuốt và kéo về, cùng lúc luồn tay phải xuống dưới tay mộc nhân chém ra."
      },
      {
        "id": "bai-18-m-35",
        "stepNo": "35",
        "assetId": "p110-h03",
        "displayId": "H0618",
        "pdfPage": 110,
        "imgUrl": "/assets/hinh/p110-h03.png",
        "img2xUrl": "/assets/hinh-2x/p110-h03.png",
        "width": 234,
        "height": 338,
        "desc": "CHIÊU 40: Thu chân trái về bằng chân phải, xoay sang trái, 2 tay vuốt dọc tay mộc nhân về phía mình (tay trái than thủ, bàn tay phải úp)."
      },
      {
        "id": "bai-18-m-36",
        "stepNo": "36",
        "assetId": "p110-h04",
        "displayId": "H0619",
        "pdfPage": 110,
        "imgUrl": "/assets/hinh/p110-h04.png",
        "img2xUrl": "/assets/hinh-2x/p110-h04.png",
        "width": 244,
        "height": 352,
        "desc": "CHIÊU 42: Xoay sang trái, vẩy 2 cổ tay vỗ xuống tay mộc nhân (như hình 32.1)"
      },
      {
        "id": "bai-18-m-37",
        "stepNo": "37",
        "assetId": "p110-h05",
        "displayId": "H0620",
        "pdfPage": 110,
        "imgUrl": "/assets/hinh/p110-h05.png",
        "img2xUrl": "/assets/hinh-2x/p110-h05.png",
        "width": 241,
        "height": 351,
        "desc": "CHIÊU 42: Tiến chân phải lên, tay phải đánh chướng. Tay trái thủ (như hình 32.2). Ị s t"
      },
      {
        "id": "bai-18-m-38",
        "stepNo": "38",
        "assetId": "p110-h06",
        "displayId": "H0621",
        "pdfPage": 110,
        "imgUrl": "/assets/hinh/p110-h06.png",
        "img2xUrl": "/assets/hinh-2x/p110-h06.png",
        "width": 217,
        "height": 330,
        "desc": "CHIÊU 4& [: Bướcchéochân trái sang I phải, quay người, vòng 2 8"
      },
      {
        "id": "bai-18-m-39",
        "stepNo": "39",
        "assetId": "p110-h07",
        "displayId": "H0622",
        "pdfPage": 110,
        "imgUrl": "/assets/hinh/p110-h07.png",
        "img2xUrl": "/assets/hinh-2x/p110-h07.png",
        "width": 237,
        "height": 347,
        "desc": "CHIÊU 46: Thu chân trái về bằng chân phải, xoay 2 bàn chân thăng hướng mộc nhân, tiến chân phải lên, tay trái vắt, chặn tay mộc nhân, tay phải đấm xuống, sao cho mặt trong căng tay cùng lúc đánh chẹn vào tay mộc nhân."
      },
      {
        "id": "bai-18-m-40",
        "stepNo": "40",
        "assetId": "p110-h08",
        "displayId": "H0623",
        "pdfPage": 110,
        "imgUrl": "/assets/hinh/p110-h08.png",
        "img2xUrl": "/assets/hinh-2x/p110-h08.png",
        "width": 240,
        "height": 344,
        "desc": "CHIÊU 50: Thu chân trái về bằng chân phải, tấn kiềm dương. Hai tay đưa từ dưới lên tới 2 tay mộc nhân."
      },
      {
        "id": "bai-18-m-41",
        "stepNo": "41",
        "assetId": "p111-h01",
        "displayId": "H0624",
        "pdfPage": 111,
        "imgUrl": "/assets/hinh/p111-h01.png",
        "img2xUrl": "/assets/hinh-2x/p111-h01.png",
        "width": 238,
        "height": 345,
        "desc": "CHIÊU 50: Giữ nguyên tư thế, vòng 2 bàn tay lên trên tay mộc nhân và vỗ xuống."
      },
      {
        "id": "bai-18-m-42",
        "stepNo": "42",
        "assetId": "p111-h02",
        "displayId": "H0625",
        "pdfPage": 111,
        "imgUrl": "/assets/hinh/p111-h02.png",
        "img2xUrl": "/assets/hinh-2x/p111-h02.png",
        "width": 241,
        "height": 344,
        "desc": "CHIÊU 50: Tiến chân phải lên, tay phải đâm thăng, tay trái thủ."
      },
      {
        "id": "bai-18-m-43",
        "stepNo": "43",
        "assetId": "p111-h03",
        "displayId": "H0626",
        "pdfPage": 111,
        "imgUrl": "/assets/hinh/p111-h03.png",
        "img2xUrl": "/assets/hinh-2x/p111-h03.png",
        "width": 240,
        "height": 346,
        "desc": "CHIÊU 50: Tiến tiếp chân trái lên, đấm tay trái."
      },
      {
        "id": "bai-18-m-44",
        "stepNo": "44",
        "assetId": "p111-h04",
        "displayId": "H0627",
        "pdfPage": 111,
        "imgUrl": "/assets/hinh/p111-h04.png",
        "img2xUrl": "/assets/hinh-2x/p111-h04.png",
        "width": 245,
        "height": 346,
        "desc": "CHIÊU 50: Giữ nguyên vị trí, ra vai đấm đồng thời hai tay."
      },
      {
        "id": "bai-18-m-45",
        "stepNo": "45",
        "assetId": "p111-h05",
        "displayId": "H0628",
        "pdfPage": 111,
        "imgUrl": "/assets/hinh/p111-h05.png",
        "img2xUrl": "/assets/hinh-2x/p111-h05.png",
        "width": 242,
        "height": 343,
        "desc": "CHIÊU 51: Lùi chân trái về phía „. Sau, tay phải (tay xà) xỉa từ dưới lên, tay trái thủ."
      },
      {
        "id": "bai-18-m-46",
        "stepNo": "46",
        "assetId": "p111-h06",
        "displayId": "H0629",
        "pdfPage": 111,
        "imgUrl": "/assets/hinh/p111-h06.png",
        "img2xUrl": "/assets/hinh-2x/p111-h06.png",
        "width": 225,
        "height": 346,
        "desc": "CHIÊU 51: Lùi chân phải về phía sau, thực hiện như chiêu 51 với bên trái."
      },
      {
        "id": "bai-18-m-47",
        "stepNo": "47",
        "assetId": "p111-h07",
        "displayId": "H0630",
        "pdfPage": 111,
        "imgUrl": "/assets/hinh/p111-h07.png",
        "img2xUrl": "/assets/hinh-2x/p111-h07.png",
        "width": 248,
        "height": 348,
        "desc": "CHIÊU 55: Bước chéo chân phải sang trái, vòng tay phải lên đánh tay báo, bàn tay trái dựng che bên trong."
      },
      {
        "id": "bai-18-m-48",
        "stepNo": "48",
        "assetId": "p111-h08",
        "displayId": "H0631",
        "pdfPage": 111,
        "imgUrl": "/assets/hinh/p111-h08.png",
        "img2xUrl": "/assets/hinh-2x/p111-h08.png",
        "width": 239,
        "height": 346,
        "desc": "CHIÊU 4: Bước chéo chân trái sang phải, duny người, tay trái <n ng vắt qua tay mộc nhân, tay phải đánh Canh chưởng. :"
      },
      {
        "id": "bai-18-m-49",
        "stepNo": "49",
        "assetId": "p112-h01",
        "displayId": "H0632",
        "pdfPage": 112,
        "imgUrl": "/assets/hinh/p112-h01.png",
        "img2xUrl": "/assets/hinh-2x/p112-h01.png",
        "width": 228,
        "height": 339,
        "desc": "CHIÊU 55: Bước chéo chân phải sang trái, vòng tay phải lên đánh tay báo, bàn tay trái dựng che bên trong."
      },
      {
        "id": "bai-18-m-50",
        "stepNo": "50",
        "assetId": "p112-h02",
        "displayId": "H0633",
        "pdfPage": 112,
        "imgUrl": "/assets/hinh/p112-h02.png",
        "img2xUrl": "/assets/hinh-2x/p112-h02.png",
        "width": 234,
        "height": 351,
        "desc": "CHIÊU 56: Bước chéo chân phải sang trái, quay người, thực hiện như chiêu 55 với bên trái."
      },
      {
        "id": "bai-18-m-51",
        "stepNo": "51",
        "assetId": "p112-h03",
        "displayId": "H0634",
        "pdfPage": 112,
        "imgUrl": "/assets/hinh/p112-h03.png",
        "img2xUrl": "/assets/hinh-2x/p112-h03.png",
        "width": 246,
        "height": 344,
        "desc": "CHIÊU 57: Bước chân phải vào giữa, quay người đánh miết 2 lòng bàn tay (về phía trước) vào tay mộc nhân."
      },
      {
        "id": "bai-18-m-52",
        "stepNo": "52",
        "assetId": "p112-h04",
        "displayId": "H0635",
        "pdfPage": 112,
        "imgUrl": "/assets/hinh/p112-h04.png",
        "img2xUrl": "/assets/hinh-2x/p112-h04.png",
        "width": 236,
        "height": 348,
        "desc": "CHIÊU 59: Bước chân trái sang phải, quay người, đánh cùng lúc hai tay vào 2 tay mộc nhân."
      },
      {
        "id": "bai-18-m-53",
        "stepNo": "53",
        "assetId": "p112-h05",
        "displayId": "H0636",
        "pdfPage": 112,
        "imgUrl": "/assets/hinh/p112-h05.png",
        "img2xUrl": "/assets/hinh-2x/p112-h05.png",
        "width": 221,
        "height": 344,
        "desc": "CHIÊU 61;: Bước chân trái vào giữa, đứng tấn kiềm dương, dựng đứng 2 căng tay, kẹp chặt 2 tay mộc nhân vặn miết vào trong ! an đó xoay căng tay theo liêu ngược lại đánh bật ra trước."
      },
      {
        "id": "bai-18-m-54",
        "stepNo": "54",
        "assetId": "p112-h06",
        "displayId": "H0637",
        "pdfPage": 112,
        "imgUrl": "/assets/hinh/p112-h06.png",
        "img2xUrl": "/assets/hinh-2x/p112-h06.png",
        "width": 247,
        "height": 343,
        "desc": "CHIÊU 62: Tiếnchân phảilên,gập ' cổ tay đánh ngược chiêu 2 nắm đấm (tay trái ở trên, tay phải ở dưới tay mộc nhân). |"
      },
      {
        "id": "bai-18-m-55",
        "stepNo": "55",
        "assetId": "p112-h07",
        "displayId": "H0638",
        "pdfPage": 112,
        "imgUrl": "/assets/hinh/p112-h07.png",
        "img2xUrl": "/assets/hinh-2x/p112-h07.png",
        "width": 243,
        "height": 346,
        "desc": "CHIÊU 64: |: Thu chân trái về bằng chân phải, xoay người sang trái, đưa tay phải lên đỡ ! bằng mặt sau cổ tay. Tay | tái thủ,"
      },
      {
        "id": "bai-18-m-56",
        "stepNo": "56",
        "assetId": "p113-h01",
        "displayId": "H0639",
        "pdfPage": 113,
        "imgUrl": "/assets/hinh/p113-h01.png",
        "img2xUrl": "/assets/hinh-2x/p113-h01.png",
        "width": 240,
        "height": 355,
        "desc": "CHIÊU 64: |: Tiến chân phải lên, tay phải đánh chưởng ra trước, tay trái đánh chặn xuống tay dưới mộc nhân (như hình 32.2)."
      },
      {
        "id": "bai-18-m-57",
        "stepNo": "57",
        "assetId": "p113-h02",
        "displayId": "H0640",
        "pdfPage": 113,
        "imgUrl": "/assets/hinh/p113-h02.png",
        "img2xUrl": "/assets/hinh-2x/p113-h02.png",
        "width": 230,
        "height": 355,
        "desc": "CHIÊU 65: Thu chân trái về bằng chân phải, tiến chân phải lên, lắc cổ tay đánh 2 cạnh bàn tay vào 2 tay mộc nhân."
      },
      {
        "id": "bai-18-m-58",
        "stepNo": "58",
        "assetId": "p113-h03",
        "displayId": "H0641",
        "pdfPage": 113,
        "imgUrl": "/assets/hinh/p113-h03.png",
        "img2xUrl": "/assets/hinh-2x/p113-h03.png",
        "width": 235,
        "height": 355,
        "desc": "CHIÊU 65: Thu chân trái về bằng chân phải, tiến chân phải lên, tay trái than thủ, tay phải đấm thẳng."
      },
      {
        "id": "bai-18-m-59",
        "stepNo": "59",
        "assetId": "p113-h04",
        "displayId": "H0642",
        "pdfPage": 113,
        "imgUrl": "/assets/hinh/p113-h04.png",
        "img2xUrl": "/assets/hinh-2x/p113-h04.png",
        "width": 240,
        "height": 355,
        "desc": "CHIÊU 65: Thu chân trái về bằng chân phải, xoay sang trái, tay phải đánh cùi chỏ từ trên xuống tay mộc nhân, tay trái thủ."
      },
      {
        "id": "bai-18-m-60",
        "stepNo": "60",
        "assetId": "p113-h05",
        "displayId": "H0643",
        "pdfPage": 113,
        "imgUrl": "/assets/hinh/p113-h05.png",
        "img2xUrl": "/assets/hinh-2x/p113-h05.png",
        "width": 230,
        "height": 355,
        "desc": "CHIÊU 65: Tiến chân phải, đánh miết lưng nắm tay phải vào mộc nhân, tay trái thủ."
      },
      {
        "id": "bai-18-m-61",
        "stepNo": "61",
        "assetId": "p113-h06",
        "displayId": "H0644",
        "pdfPage": 113,
        "imgUrl": "/assets/hinh/p113-h06.png",
        "img2xUrl": "/assets/hinh-2x/p113-h06.png",
        "width": 235,
        "height": 355,
        "desc": "CHIÊU 65: Thu chân trái về bằng chân phải, đánh khuỷu tay phải sang trái tới tay mộc nhân, Tay trái thủ sau."
      },
      {
        "id": "bai-18-m-62",
        "stepNo": "62",
        "assetId": "p113-h07",
        "displayId": "H0645",
        "pdfPage": 113,
        "imgUrl": "/assets/hinh/p113-h07.png",
        "img2xUrl": "/assets/hinh-2x/p113-h07.png",
        "width": 230,
        "height": 355,
        "desc": "CHIÊU 65: Tiến chân phải lên, đánh miết lưng nắm đấm tay phải xuống mộc nhân (như 70.2)."
      },
      {
        "id": "bai-18-m-63",
        "stepNo": "63",
        "assetId": "p113-h08",
        "displayId": "H0646",
        "pdfPage": 113,
        "imgUrl": "/assets/hinh/p113-h08.png",
        "img2xUrl": "/assets/hinh-2x/p113-h08.png",
        "width": 235,
        "height": 355,
        "desc": "CHIÊU 65: Thu chân trái về bằng chân phải, xoay sang trái, đánh cùi chỏ tay phải về phía sau tới tay mộc nhân. Tay trái dựng vuông góc (thủ)."
      },
      {
        "id": "bai-18-m-64",
        "stepNo": "64",
        "assetId": "p114-h01",
        "displayId": "H0647",
        "pdfPage": 114,
        "imgUrl": "/assets/hinh/p114-h01.png",
        "img2xUrl": "/assets/hinh-2x/p114-h01.png",
        "width": 235,
        "height": 340,
        "desc": "CHIÊU 76: Thu chân trái về bằng chân phải, xoay sang trái, đánh hất cùi chỏ tay phái từ dưới lên tay mộc nhân, tay trái thủ."
      },
      {
        "id": "bai-18-m-65",
        "stepNo": "65",
        "assetId": "p114-h02",
        "displayId": "H0648",
        "pdfPage": 114,
        "imgUrl": "/assets/hinh/p114-h02.png",
        "img2xUrl": "/assets/hinh-2x/p114-h02.png",
        "width": 239,
        "height": 346,
        "desc": "CHIÊU 76: Tiến chân phải lên, đồng thời hạ thấp người, đánh vẩy cổ tay phải lên như 74.2. Bàn tay trái dựng thăng che mặt."
      },
      {
        "id": "bai-18-m-66",
        "stepNo": "66",
        "assetId": "p114-h03",
        "displayId": "H0649",
        "pdfPage": 114,
        "imgUrl": "/assets/hinh/p114-h03.png",
        "img2xUrl": "/assets/hinh-2x/p114-h03.png",
        "width": 253,
        "height": 343,
        "desc": "CHIÊU 76: Tiến chân phải lên, đồng thời hạ thấp người, đánh vẩy cổ tay phải lên như 74.2. Bàn tay trái dựng thăng che mặt."
      },
      {
        "id": "bai-18-m-67",
        "stepNo": "67",
        "assetId": "p114-h04",
        "displayId": "H0650",
        "pdfPage": 114,
        "imgUrl": "/assets/hinh/p114-h04.png",
        "img2xUrl": "/assets/hinh-2x/p114-h04.png",
        "width": 243,
        "height": 350,
        "desc": "CHIÊU 79: Thu chân phải về bằng chân trái, thực hiện như chiêu 78 với bên trái."
      },
      {
        "id": "bai-18-m-68",
        "stepNo": "68",
        "assetId": "p114-h05",
        "displayId": "H0651",
        "pdfPage": 114,
        "imgUrl": "/assets/hinh/p114-h05.png",
        "img2xUrl": "/assets/hinh-2x/p114-h05.png",
        "width": 228,
        "height": 344,
        "desc": "CHIÊU 79: Thu chân phải về bằng chân trái, thực hiện như chiêu 78 với bên trái."
      },
      {
        "id": "bai-18-m-69",
        "stepNo": "69",
        "assetId": "p114-h06",
        "displayId": "H0652",
        "pdfPage": 114,
        "imgUrl": "/assets/hinh/p114-h06.png",
        "img2xUrl": "/assets/hinh-2x/p114-h06.png",
        "width": 234,
        "height": 343,
        "desc": "CHIÊU 82: Thu chân trái về bằng chân phải, tiến chân phải lên, 2 tay nắm tay mộc | nhân kéo mạnh (như hình"
      },
      {
        "id": "bai-18-m-70",
        "stepNo": "70",
        "assetId": "p114-h07",
        "displayId": "H0653",
        "pdfPage": 114,
        "imgUrl": "/assets/hinh/p114-h07.png",
        "img2xUrl": "/assets/hinh-2x/p114-h07.png",
        "width": 244,
        "height": 348,
        "desc": "CHIÊU 82: Thu chân trái về bằng chân phải, tiến chân phải lên, 2 tay nắm tay mộc | nhân kéo mạnh (như hình"
      },
      {
        "id": "bai-18-m-71",
        "stepNo": "71",
        "assetId": "p115-h01",
        "displayId": "H0654",
        "pdfPage": 115,
        "imgUrl": "/assets/hinh/p115-h01.png",
        "img2xUrl": "/assets/hinh-2x/p115-h01.png",
        "width": 242,
        "height": 348,
        "desc": "CHIÊU 85: Tiến chân phải lên, hạ thấp người. Tay trái che hạ bộ, tay phải luôn xuống móc, bóp và giật về (hai tay đều dùng tay long)."
      },
      {
        "id": "bai-18-m-72",
        "stepNo": "72",
        "assetId": "p115-h02",
        "displayId": "H0655",
        "pdfPage": 115,
        "imgUrl": "/assets/hinh/p115-h02.png",
        "img2xUrl": "/assets/hinh-2x/p115-h02.png",
        "width": 256,
        "height": 346,
        "desc": "CHIÊU 86: Thu chân phải về bằng chấn trái, thực hiện như chiêu 85 với bên trái."
      },
      {
        "id": "bai-18-m-73",
        "stepNo": "73",
        "assetId": "p115-h03",
        "displayId": "H0656",
        "pdfPage": 115,
        "imgUrl": "/assets/hinh/p115-h03.png",
        "img2xUrl": "/assets/hinh-2x/p115-h03.png",
        "width": 243,
        "height": 350,
        "desc": "CHIÊU 87: Thu chân trái về bằng chân phải, xoay sang trái đưa 2 tay bắt chéo từ dưới lên đón tay mộc nhân (tay phải ở ngoài, tay trái trong)."
      },
      {
        "id": "bai-18-m-74",
        "stepNo": "74",
        "assetId": "p115-h04",
        "displayId": "H0657",
        "pdfPage": 115,
        "imgUrl": "/assets/hinh/p115-h04.png",
        "img2xUrl": "/assets/hinh-2x/p115-h04.png",
        "width": 246,
        "height": 343,
        "desc": "CHIÊU 87: Tiến chân phải lên, bàn tay trái tôm và kéo tay mộc nhân, tay phải vòng xuống chặt bằng cạnh bàn tay."
      },
      {
        "id": "bai-18-m-75",
        "stepNo": "75",
        "assetId": "p115-h05",
        "displayId": "H0658",
        "pdfPage": 115,
        "imgUrl": "/assets/hinh/p115-h05.png",
        "img2xUrl": "/assets/hinh-2x/p115-h05.png",
        "width": 215,
        "height": 365,
        "desc": "CHIÊU 89: Thu chân trái về bằng chân phải, 2 tay tóm tay mộc nhận giật về, chân phải lên gối."
      },
      {
        "id": "bai-18-m-76",
        "stepNo": "76",
        "assetId": "p115-h06",
        "displayId": "H0659",
        "pdfPage": 115,
        "imgUrl": "/assets/hinh/p115-h06.png",
        "img2xUrl": "/assets/hinh-2x/p115-h06.png",
        "width": 223,
        "height": 350,
        "desc": "CHIÊU 89: Thu chân trái về bằng chân phải, 2 tay tóm tay mộc nhận giật về, chân phải lên gối."
      },
      {
        "id": "bai-18-m-77",
        "stepNo": "77",
        "assetId": "p115-h07",
        "displayId": "H0660",
        "pdfPage": 115,
        "imgUrl": "/assets/hinh/p115-h07.png",
        "img2xUrl": "/assets/hinh-2x/p115-h07.png",
        "width": 233,
        "height": 345,
        "desc": "CHIÊU 91: Bước chéo chân trái 9 sang đhại, quay người,hai s tay tóm tay mộc nhân giật t; vềphía trá,chânphảilên c gối theo đường vòng từ Ẹ ngoài vào. x"
      },
      {
        "id": "bai-18-m-78",
        "stepNo": "78",
        "assetId": "p115-h08",
        "displayId": "H0661",
        "pdfPage": 115,
        "imgUrl": "/assets/hinh/p115-h08.png",
        "img2xUrl": "/assets/hinh-2x/p115-h08.png",
        "width": 227,
        "height": 353,
        "desc": "CHIÊU 9: Bước chéo chân trái sang phải, quay người đánh 2 nắm đấm từ trên xuống."
      },
      {
        "id": "bai-18-m-79",
        "stepNo": "79",
        "assetId": "p116-h01",
        "displayId": "H0662",
        "pdfPage": 116,
        "imgUrl": "/assets/hinh/p116-h01.png",
        "img2xUrl": "/assets/hinh-2x/p116-h01.png",
        "width": 221,
        "height": 346,
        "desc": "CHIÊU 95: Bước chéo chân trái sang phải, quay người, 2 tay năm tay mộc nhân vặn và ấn xuống, cùng lúc đánh đầu gối phải từ dưới lên."
      },
      {
        "id": "bai-18-m-80",
        "stepNo": "80",
        "assetId": "p116-h02",
        "displayId": "H0663",
        "pdfPage": 116,
        "imgUrl": "/assets/hinh/p116-h02.png",
        "img2xUrl": "/assets/hinh-2x/p116-h02.png",
        "width": 255,
        "height": 346,
        "desc": "CHIÊU 97: Bước chéo chân trái sang phải, quay người, vỗ hai tay xuống tay mộc nhân như 32.1, chân phải co gổi lên, ngoáy cổ chân ngược chiều kim đồng hồ, vây bàn chân đá móc."
      },
      {
        "id": "bai-18-m-81",
        "stepNo": "81",
        "assetId": "p116-h03",
        "displayId": "H0664",
        "pdfPage": 116,
        "imgUrl": "/assets/hinh/p116-h03.png",
        "img2xUrl": "/assets/hinh-2x/p116-h03.png",
        "width": 247,
        "height": 348,
        "desc": "CHIÊU 99: Bước chéo chân trái ] sang phải, quay người, hai , tay xỉa ra trước (giống l hình 11) cùng lúc nhấc t chânphải,ngoáycổchân ° đá móc (như chiêu 97). c"
      },
      {
        "id": "bai-18-m-82",
        "stepNo": "82",
        "assetId": "p116-h04",
        "displayId": "H0665",
        "pdfPage": 116,
        "imgUrl": "/assets/hinh/p116-h04.png",
        "img2xUrl": "/assets/hinh-2x/p116-h04.png",
        "width": 249,
        "height": 347,
        "desc": "CHIÊU 99: Bước chéo chân trái ] sang phải, quay người, hai , tay xỉa ra trước (giống l hình 11) cùng lúc nhấc t chânphải,ngoáycổchân ° đá móc (như chiêu 97). c"
      },
      {
        "id": "bai-18-m-83",
        "stepNo": "83",
        "assetId": "p116-h05",
        "displayId": "H0666",
        "pdfPage": 116,
        "imgUrl": "/assets/hinh/p116-h05.png",
        "img2xUrl": "/assets/hinh-2x/p116-h05.png",
        "width": 236,
        "height": 353,
        "desc": "CHIÊU 101: 1: Bước chéo chân trái t sang phải, quay người, 2 1 tayhấttaymộcnhân(như hình 13), cùng lúc ngoáy cổ chân phải đá móc. L"
      }
    ],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-luyen-tong-hop",
    "title": "Bài luyện tổng hợp",
    "groupId": "ngu-hinh-va-tong-hop",
    "bookOrder": 19,
    "contentType": "reading",
    "pdfPages": [
      117,
      118
    ],
    "pageRange": "Trang PDF 117 – 118",
    "assetCount": 6,
    "assets": [
      {
        "assetId": "p117-h01",
        "displayId": "H0667",
        "pdfPage": 117,
        "imgUrl": "/assets/hinh/p117-h01.png",
        "img2xUrl": "/assets/hinh-2x/p117-h01.png",
        "width": 459,
        "height": 355
      },
      {
        "assetId": "p117-h02",
        "displayId": "H0668",
        "pdfPage": 117,
        "imgUrl": "/assets/hinh/p117-h02.png",
        "img2xUrl": "/assets/hinh-2x/p117-h02.png",
        "width": 436,
        "height": 711
      },
      {
        "assetId": "p117-h03",
        "displayId": "H0669",
        "pdfPage": 117,
        "imgUrl": "/assets/hinh/p117-h03.png",
        "img2xUrl": "/assets/hinh-2x/p117-h03.png",
        "width": 459,
        "height": 370
      },
      {
        "assetId": "p118-h01",
        "displayId": "H0670",
        "pdfPage": 118,
        "imgUrl": "/assets/hinh/p118-h01.png",
        "img2xUrl": "/assets/hinh-2x/p118-h01.png",
        "width": 408,
        "height": 441
      },
      {
        "assetId": "p118-h02",
        "displayId": "H0671",
        "pdfPage": 118,
        "imgUrl": "/assets/hinh/p118-h02.png",
        "img2xUrl": "/assets/hinh-2x/p118-h02.png",
        "width": 409,
        "height": 440
      },
      {
        "assetId": "p118-h03",
        "displayId": "H0672",
        "pdfPage": 118,
        "imgUrl": "/assets/hinh/p118-h03.png",
        "img2xUrl": "/assets/hinh-2x/p118-h03.png",
        "width": 412,
        "height": 422
      }
    ],
    "motions": [],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-21",
    "title": "Long quyền",
    "groupId": "ngu-hinh-va-tong-hop",
    "bookOrder": 21,
    "contentType": "practice_or_mixed",
    "pdfPages": [
      120,
      121,
      122,
      123
    ],
    "pageRange": "Trang PDF 120 – 123",
    "assetCount": 25,
    "assets": [
      {
        "assetId": "p120-h01",
        "displayId": "H0675",
        "pdfPage": 120,
        "imgUrl": "/assets/hinh/p120-h01.png",
        "img2xUrl": "/assets/hinh-2x/p120-h01.png",
        "width": 129,
        "height": 324
      },
      {
        "assetId": "p120-h02",
        "displayId": "H0676",
        "pdfPage": 120,
        "imgUrl": "/assets/hinh/p120-h02.png",
        "img2xUrl": "/assets/hinh-2x/p120-h02.png",
        "width": 285,
        "height": 368
      },
      {
        "assetId": "p120-h03",
        "displayId": "H0677",
        "pdfPage": 120,
        "imgUrl": "/assets/hinh/p120-h03.png",
        "img2xUrl": "/assets/hinh-2x/p120-h03.png",
        "width": 294,
        "height": 367
      },
      {
        "assetId": "p120-h04",
        "displayId": "H0678",
        "pdfPage": 120,
        "imgUrl": "/assets/hinh/p120-h04.png",
        "img2xUrl": "/assets/hinh-2x/p120-h04.png",
        "width": 302,
        "height": 368
      },
      {
        "assetId": "p120-h05",
        "displayId": "H0679",
        "pdfPage": 120,
        "imgUrl": "/assets/hinh/p120-h05.png",
        "img2xUrl": "/assets/hinh-2x/p120-h05.png",
        "width": 280,
        "height": 324
      },
      {
        "assetId": "p120-h06",
        "displayId": "H0680",
        "pdfPage": 120,
        "imgUrl": "/assets/hinh/p120-h06.png",
        "img2xUrl": "/assets/hinh-2x/p120-h06.png",
        "width": 320,
        "height": 368
      },
      {
        "assetId": "p120-h07",
        "displayId": "H0681",
        "pdfPage": 120,
        "imgUrl": "/assets/hinh/p120-h07.png",
        "img2xUrl": "/assets/hinh-2x/p120-h07.png",
        "width": 121,
        "height": 326
      },
      {
        "assetId": "p121-h01",
        "displayId": "H0682",
        "pdfPage": 121,
        "imgUrl": "/assets/hinh/p121-h01.png",
        "img2xUrl": "/assets/hinh-2x/p121-h01.png",
        "width": 120,
        "height": 325
      },
      {
        "assetId": "p121-h02",
        "displayId": "H0683",
        "pdfPage": 121,
        "imgUrl": "/assets/hinh/p121-h02.png",
        "img2xUrl": "/assets/hinh-2x/p121-h02.png",
        "width": 121,
        "height": 325
      },
      {
        "assetId": "p121-h03",
        "displayId": "H0684",
        "pdfPage": 121,
        "imgUrl": "/assets/hinh/p121-h03.png",
        "img2xUrl": "/assets/hinh-2x/p121-h03.png",
        "width": 311,
        "height": 367
      },
      {
        "assetId": "p121-h04",
        "displayId": "H0685",
        "pdfPage": 121,
        "imgUrl": "/assets/hinh/p121-h04.png",
        "img2xUrl": "/assets/hinh-2x/p121-h04.png",
        "width": 321,
        "height": 371
      },
      {
        "assetId": "p121-h05",
        "displayId": "H0686",
        "pdfPage": 121,
        "imgUrl": "/assets/hinh/p121-h05.png",
        "img2xUrl": "/assets/hinh-2x/p121-h05.png",
        "width": 162,
        "height": 327
      },
      {
        "assetId": "p121-h06",
        "displayId": "H0687",
        "pdfPage": 121,
        "imgUrl": "/assets/hinh/p121-h06.png",
        "img2xUrl": "/assets/hinh-2x/p121-h06.png",
        "width": 159,
        "height": 326
      },
      {
        "assetId": "p121-h07",
        "displayId": "H0688",
        "pdfPage": 121,
        "imgUrl": "/assets/hinh/p121-h07.png",
        "img2xUrl": "/assets/hinh-2x/p121-h07.png",
        "width": 164,
        "height": 326
      },
      {
        "assetId": "p122-h01",
        "displayId": "H0689",
        "pdfPage": 122,
        "imgUrl": "/assets/hinh/p122-h01.png",
        "img2xUrl": "/assets/hinh-2x/p122-h01.png",
        "width": 142,
        "height": 326
      },
      {
        "assetId": "p122-h02",
        "displayId": "H0690",
        "pdfPage": 122,
        "imgUrl": "/assets/hinh/p122-h02.png",
        "img2xUrl": "/assets/hinh-2x/p122-h02.png",
        "width": 121,
        "height": 329
      },
      {
        "assetId": "p122-h03",
        "displayId": "H0691",
        "pdfPage": 122,
        "imgUrl": "/assets/hinh/p122-h03.png",
        "img2xUrl": "/assets/hinh-2x/p122-h03.png",
        "width": 126,
        "height": 330
      },
      {
        "assetId": "p122-h04",
        "displayId": "H0692",
        "pdfPage": 122,
        "imgUrl": "/assets/hinh/p122-h04.png",
        "img2xUrl": "/assets/hinh-2x/p122-h04.png",
        "width": 121,
        "height": 327
      },
      {
        "assetId": "p122-h05",
        "displayId": "H0693",
        "pdfPage": 122,
        "imgUrl": "/assets/hinh/p122-h05.png",
        "img2xUrl": "/assets/hinh-2x/p122-h05.png",
        "width": 230,
        "height": 370
      },
      {
        "assetId": "p122-h06",
        "displayId": "H0694",
        "pdfPage": 122,
        "imgUrl": "/assets/hinh/p122-h06.png",
        "img2xUrl": "/assets/hinh-2x/p122-h06.png",
        "width": 235,
        "height": 272
      },
      {
        "assetId": "p122-h07",
        "displayId": "H0695",
        "pdfPage": 122,
        "imgUrl": "/assets/hinh/p122-h07.png",
        "img2xUrl": "/assets/hinh-2x/p122-h07.png",
        "width": 237,
        "height": 372
      },
      {
        "assetId": "p123-h01",
        "displayId": "H0696",
        "pdfPage": 123,
        "imgUrl": "/assets/hinh/p123-h01.png",
        "img2xUrl": "/assets/hinh-2x/p123-h01.png",
        "width": 140,
        "height": 321
      },
      {
        "assetId": "p123-h02",
        "displayId": "H0697",
        "pdfPage": 123,
        "imgUrl": "/assets/hinh/p123-h02.png",
        "img2xUrl": "/assets/hinh-2x/p123-h02.png",
        "width": 130,
        "height": 319
      },
      {
        "assetId": "p123-h03",
        "displayId": "H0698",
        "pdfPage": 123,
        "imgUrl": "/assets/hinh/p123-h03.png",
        "img2xUrl": "/assets/hinh-2x/p123-h03.png",
        "width": 170,
        "height": 357
      },
      {
        "assetId": "p123-h04",
        "displayId": "H0699",
        "pdfPage": 123,
        "imgUrl": "/assets/hinh/p123-h04.png",
        "img2xUrl": "/assets/hinh-2x/p123-h04.png",
        "width": 125,
        "height": 317
      }
    ],
    "motions": [
      {
        "id": "bai-21-m-1",
        "stepNo": "1",
        "assetId": "p120-h01",
        "displayId": "H0675",
        "pdfPage": 120,
        "imgUrl": "/assets/hinh/p120-h01.png",
        "img2xUrl": "/assets/hinh-2x/p120-h01.png",
        "width": 129,
        "height": 324,
        "desc": "CHIÊU 1: Đứng kiềm dương, tay Long úp chéo trước ngực tay phải ngoài. CHIẾU 2:"
      },
      {
        "id": "bai-21-m-2",
        "stepNo": "2",
        "assetId": "p120-h02",
        "displayId": "H0676",
        "pdfPage": 120,
        "imgUrl": "/assets/hinh/p120-h02.png",
        "img2xUrl": "/assets/hinh-2x/p120-h02.png",
        "width": 285,
        "height": 368,
        "desc": "CHIÊU 1: Hai tay đầy từ ngực sang hai bên (ngang vai), bàn tay vuông góc, toàn thân rung như rũ nước."
      },
      {
        "id": "bai-21-m-3",
        "stepNo": "3",
        "assetId": "p120-h03",
        "displayId": "H0677",
        "pdfPage": 120,
        "imgUrl": "/assets/hinh/p120-h03.png",
        "img2xUrl": "/assets/hinh-2x/p120-h03.png",
        "width": 294,
        "height": 367,
        "desc": "CHIÊU 3: Giữ nguyên hai cánh tay thẳng ngang vai, úp 2 bàn tay xuống đất đồng thời cúi đẫu ra trước."
      },
      {
        "id": "bai-21-m-4",
        "stepNo": "4",
        "assetId": "p120-h04",
        "displayId": "H0678",
        "pdfPage": 120,
        "imgUrl": "/assets/hinh/p120-h04.png",
        "img2xUrl": "/assets/hinh-2x/p120-h04.png",
        "width": 302,
        "height": 368,
        "desc": "CHIÊU 3: Giữ nguyên hai cánh tay, lật ngửa hai bàn tay, đồng thời ngửa đầu ra \ phía sau. „"
      },
      {
        "id": "bai-21-m-5",
        "stepNo": "5",
        "assetId": "p120-h05",
        "displayId": "H0679",
        "pdfPage": 120,
        "imgUrl": "/assets/hinh/p120-h05.png",
        "img2xUrl": "/assets/hinh-2x/p120-h05.png",
        "width": 280,
        "height": 324,
        "desc": "CHIÊU 3: Lặp lại 3.1,3.2 thêm 2 lần."
      },
      {
        "id": "bai-21-m-6",
        "stepNo": "6",
        "assetId": "p120-h06",
        "displayId": "H0680",
        "pdfPage": 120,
        "imgUrl": "/assets/hinh/p120-h06.png",
        "img2xUrl": "/assets/hinh-2x/p120-h06.png",
        "width": 320,
        "height": 368,
        "desc": "CHIÊU 5: Hại bàn tay xoay tròn P 3 vòng, tay phải theo chiều kim đồng hồ, tay trái ngược lại, đồng thời đầu xoay 3 vòng theo chiều i kim đồng hồ. ậ"
      },
      {
        "id": "bai-21-m-7",
        "stepNo": "7",
        "assetId": "p120-h07",
        "displayId": "H0681",
        "pdfPage": 120,
        "imgUrl": "/assets/hinh/p120-h07.png",
        "img2xUrl": "/assets/hinh-2x/p120-h07.png",
        "width": 121,
        "height": 326,
        "desc": "CHIÊU 5: Chânphảitiến1lbước c lên trước, 2 tay Long vô ] vào trong. t"
      },
      {
        "id": "bai-21-m-8",
        "stepNo": "8",
        "assetId": "p121-h01",
        "displayId": "H0682",
        "pdfPage": 121,
        "imgUrl": "/assets/hinh/p121-h01.png",
        "img2xUrl": "/assets/hinh-2x/p121-h01.png",
        "width": 120,
        "height": 325,
        "desc": "CHIÊU 4: Lặp lại 4.1, 4.2 thêm 2 lần nữa."
      },
      {
        "id": "bai-21-m-9",
        "stepNo": "9",
        "assetId": "p121-h02",
        "displayId": "H0683",
        "pdfPage": 121,
        "imgUrl": "/assets/hinh/p121-h02.png",
        "img2xUrl": "/assets/hinh-2x/p121-h02.png",
        "width": 121,
        "height": 325,
        "desc": "CHIÊU 8: Đổi tay điệp chưởng tay trái ở trên, tay phải dưới. Lùi chân trái 1 bước về sau, 2 tay chưởng xoay ngược chiều kim đồng hồ, thân quay theo. Kéo chân phải theo về 1 bước, tay chưởng, thân quay trở về tư thế ban đầu."
      },
      {
        "id": "bai-21-m-10",
        "stepNo": "10",
        "assetId": "p121-h03",
        "displayId": "H0684",
        "pdfPage": 121,
        "imgUrl": "/assets/hinh/p121-h03.png",
        "img2xUrl": "/assets/hinh-2x/p121-h03.png",
        "width": 311,
        "height": 367,
        "desc": "CHIÊU 5: Giống 5.1 nhưng đổi ñ ngược chiều quay của đầu và cổ tay. ‹ 4 t CHIEU 6: t"
      },
      {
        "id": "bai-21-m-11",
        "stepNo": "11",
        "assetId": "p121-h04",
        "displayId": "H0685",
        "pdfPage": 121,
        "imgUrl": "/assets/hinh/p121-h04.png",
        "img2xUrl": "/assets/hinh-2x/p121-h04.png",
        "width": 321,
        "height": 371,
        "desc": "CHIÊU 15: Giống 12.2 nhưng đối xứng sang trái. |"
      },
      {
        "id": "bai-21-m-12",
        "stepNo": "12",
        "assetId": "p121-h05",
        "displayId": "H0686",
        "pdfPage": 121,
        "imgUrl": "/assets/hinh/p121-h05.png",
        "img2xUrl": "/assets/hinh-2x/p121-h05.png",
        "width": 162,
        "height": 327,
        "desc": "CHIÊU 5: Chânphải lùi về, tay 7 lặp lại như 6.1. ï"
      },
      {
        "id": "bai-21-m-13",
        "stepNo": "13",
        "assetId": "p121-h06",
        "displayId": "H0687",
        "pdfPage": 121,
        "imgUrl": "/assets/hinh/p121-h06.png",
        "img2xUrl": "/assets/hinh-2x/p121-h06.png",
        "width": 159,
        "height": 326,
        "desc": "CHIÊU 8: Đổi tay điệp chưởng tay trái ở trên, tay phải dưới. Lùi chân trái 1 bước về sau, 2 tay chưởng xoay ngược chiều kim đồng hồ, thân quay theo. Kéo chân phải theo về 1 bước, tay chưởng, thân quay trở về tư thế ban đầu."
      },
      {
        "id": "bai-21-m-14",
        "stepNo": "14",
        "assetId": "p121-h07",
        "displayId": "H0688",
        "pdfPage": 121,
        "imgUrl": "/assets/hinh/p121-h07.png",
        "img2xUrl": "/assets/hinh-2x/p121-h07.png",
        "width": 164,
        "height": 326,
        "desc": "CHIÊU 8: Lặp lại 8.1 thêm 2 làn."
      },
      {
        "id": "bai-21-m-15",
        "stepNo": "15",
        "assetId": "p122-h01",
        "displayId": "H0689",
        "pdfPage": 122,
        "imgUrl": "/assets/hinh/p122-h01.png",
        "img2xUrl": "/assets/hinh-2x/p122-h01.png",
        "width": 142,
        "height": 326,
        "desc": "CHIÊU 23: Tư thế như hình, chân phải làm trụ xoay thần và chân trái 60' ngược chiều kim đồng hồ liên tiếp 2 lần."
      },
      {
        "id": "bai-21-m-16",
        "stepNo": "16",
        "assetId": "p122-h02",
        "displayId": "H0690",
        "pdfPage": 122,
        "imgUrl": "/assets/hinh/p122-h02.png",
        "img2xUrl": "/assets/hinh-2x/p122-h02.png",
        "width": 121,
        "height": 329,
        "desc": "CHIÊU 24: Quay trái, chân trái tiền 1 bước, hai tay đánh điệp chưởng thăng từ dưới lên trên."
      },
      {
        "id": "bai-21-m-17",
        "stepNo": "17",
        "assetId": "p122-h03",
        "displayId": "H0691",
        "pdfPage": 122,
        "imgUrl": "/assets/hinh/p122-h03.png",
        "img2xUrl": "/assets/hinh-2x/p122-h03.png",
        "width": 126,
        "height": 330,
        "desc": "CHIÊU 25: Chân trái lướt tiếp một bước, hai bàn tay đánh chéo ngang (tay phải trên tay trái dưới)."
      },
      {
        "id": "bai-21-m-18",
        "stepNo": "18",
        "assetId": "p122-h04",
        "displayId": "H0692",
        "pdfPage": 122,
        "imgUrl": "/assets/hinh/p122-h04.png",
        "img2xUrl": "/assets/hinh-2x/p122-h04.png",
        "width": 121,
        "height": 327,
        "desc": "CHIÊU 26: |: Chân trái tiến tiếp một bước, hai tay Long dựng đứng vô chéo nhau sang 2 bên, tay trái trên tay ị phải dưới. |"
      },
      {
        "id": "bai-21-m-19",
        "stepNo": "19",
        "assetId": "p122-h05",
        "displayId": "H0693",
        "pdfPage": 122,
        "imgUrl": "/assets/hinh/p122-h05.png",
        "img2xUrl": "/assets/hinh-2x/p122-h05.png",
        "width": 230,
        "height": 370,
        "desc": "CHIÊU 28: Quay 2 cổ tay 3 vòng từ ngoài vào giữa thân, từ trên xuống, kết thúc vòng thứ 3 thì vô hai tay xuống."
      },
      {
        "id": "bai-21-m-20",
        "stepNo": "20",
        "assetId": "p122-h06",
        "displayId": "H0694",
        "pdfPage": 122,
        "imgUrl": "/assets/hinh/p122-h06.png",
        "img2xUrl": "/assets/hinh-2x/p122-h06.png",
        "width": 235,
        "height": 272,
        "desc": "CHIÊU 15: Hai cánh tay song song, bàn tay di chuyển thành vòng tròn 3 lần từ ngoài vào trong thân (theo chiều kim đồng hồ). Kết thúc vòng thứ 3 thì đánh"
      },
      {
        "id": "bai-21-m-21",
        "stepNo": "21",
        "assetId": "p122-h07",
        "displayId": "H0695",
        "pdfPage": 122,
        "imgUrl": "/assets/hinh/p122-h07.png",
        "img2xUrl": "/assets/hinh-2x/p122-h07.png",
        "width": 237,
        "height": 372,
        "desc": "CHIÊU 16: Hai cánh tay song song, bàn tay di chuyển thành vòng tròn 3 lân từ trong thân đi ra ngoài (ngược chiều kim đồng hồ). Kết thúc vòng thứ 3 thì vồ 2 tay xuống, chân lùi một bước về sau."
      },
      {
        "id": "bai-21-m-22",
        "stepNo": "22",
        "assetId": "p123-h01",
        "displayId": "H0696",
        "pdfPage": 123,
        "imgUrl": "/assets/hinh/p123-h01.png",
        "img2xUrl": "/assets/hinh-2x/p123-h01.png",
        "width": 140,
        "height": 321,
        "desc": "CHIÊU 17: Hai bàn tay di chuyển đuổi nhau tạo thành 3 vòng tròn từ ngoài vào"
      },
      {
        "id": "bai-21-m-23",
        "stepNo": "23",
        "assetId": "p123-h02",
        "displayId": "H0697",
        "pdfPage": 123,
        "imgUrl": "/assets/hinh/p123-h02.png",
        "img2xUrl": "/assets/hinh-2x/p123-h02.png",
        "width": 130,
        "height": 319,
        "desc": "CHIÊU 33: Quay người sang trái, tay trái đỡ hạ bộ, tay phải đưa thăng ra năm, giật."
      },
      {
        "id": "bai-21-m-24",
        "stepNo": "24",
        "assetId": "p123-h03",
        "displayId": "H0698",
        "pdfPage": 123,
        "imgUrl": "/assets/hinh/p123-h03.png",
        "img2xUrl": "/assets/hinh-2x/p123-h03.png",
        "width": 170,
        "height": 357,
        "desc": "CHIÊU 33: Chân phải tiến 1 bước, hai tay đánh điệp chưởng ra trước."
      },
      {
        "id": "bai-21-m-25",
        "stepNo": "25",
        "assetId": "p123-h04",
        "displayId": "H0699",
        "pdfPage": 123,
        "imgUrl": "/assets/hinh/p123-h04.png",
        "img2xUrl": "/assets/hinh-2x/p123-h04.png",
        "width": 125,
        "height": 317,
        "desc": "CHIÊU 35: Chân trái làm trụ nâng đầu gối phải đưa tay phải ra ngang, dựng tay. trái (bẻ) cùng lúc quay cổ chân phải đá móc lên ."
      }
    ],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-22",
    "title": "Xà quyền",
    "groupId": "ngu-hinh-va-tong-hop",
    "bookOrder": 22,
    "contentType": "practice_or_mixed",
    "pdfPages": [
      124,
      125,
      126,
      127,
      128
    ],
    "pageRange": "Trang PDF 124 – 128",
    "assetCount": 39,
    "assets": [
      {
        "assetId": "p124-h01",
        "displayId": "H0700",
        "pdfPage": 124,
        "imgUrl": "/assets/hinh/p124-h01.png",
        "img2xUrl": "/assets/hinh-2x/p124-h01.png",
        "width": 128,
        "height": 340
      },
      {
        "assetId": "p124-h02",
        "displayId": "H0701",
        "pdfPage": 124,
        "imgUrl": "/assets/hinh/p124-h02.png",
        "img2xUrl": "/assets/hinh-2x/p124-h02.png",
        "width": 126,
        "height": 343
      },
      {
        "assetId": "p124-h03",
        "displayId": "H0702",
        "pdfPage": 124,
        "imgUrl": "/assets/hinh/p124-h03.png",
        "img2xUrl": "/assets/hinh-2x/p124-h03.png",
        "width": 105,
        "height": 342
      },
      {
        "assetId": "p124-h04",
        "displayId": "H0703",
        "pdfPage": 124,
        "imgUrl": "/assets/hinh/p124-h04.png",
        "img2xUrl": "/assets/hinh-2x/p124-h04.png",
        "width": 114,
        "height": 343
      },
      {
        "assetId": "p124-h05",
        "displayId": "H0704",
        "pdfPage": 124,
        "imgUrl": "/assets/hinh/p124-h05.png",
        "img2xUrl": "/assets/hinh-2x/p124-h05.png",
        "width": 116,
        "height": 341
      },
      {
        "assetId": "p124-h06",
        "displayId": "H0705",
        "pdfPage": 124,
        "imgUrl": "/assets/hinh/p124-h06.png",
        "img2xUrl": "/assets/hinh-2x/p124-h06.png",
        "width": 123,
        "height": 343
      },
      {
        "assetId": "p124-h07",
        "displayId": "H0706",
        "pdfPage": 124,
        "imgUrl": "/assets/hinh/p124-h07.png",
        "img2xUrl": "/assets/hinh-2x/p124-h07.png",
        "width": 137,
        "height": 342
      },
      {
        "assetId": "p124-h08",
        "displayId": "H0707",
        "pdfPage": 124,
        "imgUrl": "/assets/hinh/p124-h08.png",
        "img2xUrl": "/assets/hinh-2x/p124-h08.png",
        "width": 179,
        "height": 343
      },
      {
        "assetId": "p125-h01",
        "displayId": "H0708",
        "pdfPage": 125,
        "imgUrl": "/assets/hinh/p125-h01.png",
        "img2xUrl": "/assets/hinh-2x/p125-h01.png",
        "width": 129,
        "height": 340
      },
      {
        "assetId": "p125-h02",
        "displayId": "H0709",
        "pdfPage": 125,
        "imgUrl": "/assets/hinh/p125-h02.png",
        "img2xUrl": "/assets/hinh-2x/p125-h02.png",
        "width": 159,
        "height": 308
      },
      {
        "assetId": "p125-h03",
        "displayId": "H0710",
        "pdfPage": 125,
        "imgUrl": "/assets/hinh/p125-h03.png",
        "img2xUrl": "/assets/hinh-2x/p125-h03.png",
        "width": 163,
        "height": 306
      },
      {
        "assetId": "p125-h04",
        "displayId": "H0711",
        "pdfPage": 125,
        "imgUrl": "/assets/hinh/p125-h04.png",
        "img2xUrl": "/assets/hinh-2x/p125-h04.png",
        "width": 235,
        "height": 387
      },
      {
        "assetId": "p125-h05",
        "displayId": "H0712",
        "pdfPage": 125,
        "imgUrl": "/assets/hinh/p125-h05.png",
        "img2xUrl": "/assets/hinh-2x/p125-h05.png",
        "width": 242,
        "height": 383
      },
      {
        "assetId": "p125-h06",
        "displayId": "H0713",
        "pdfPage": 125,
        "imgUrl": "/assets/hinh/p125-h06.png",
        "img2xUrl": "/assets/hinh-2x/p125-h06.png",
        "width": 280,
        "height": 388
      },
      {
        "assetId": "p125-h07",
        "displayId": "H0714",
        "pdfPage": 125,
        "imgUrl": "/assets/hinh/p125-h07.png",
        "img2xUrl": "/assets/hinh-2x/p125-h07.png",
        "width": 202,
        "height": 226
      },
      {
        "assetId": "p125-h08",
        "displayId": "H0715",
        "pdfPage": 125,
        "imgUrl": "/assets/hinh/p125-h08.png",
        "img2xUrl": "/assets/hinh-2x/p125-h08.png",
        "width": 236,
        "height": 271
      },
      {
        "assetId": "p126-h01",
        "displayId": "H0716",
        "pdfPage": 126,
        "imgUrl": "/assets/hinh/p126-h01.png",
        "img2xUrl": "/assets/hinh-2x/p126-h01.png",
        "width": 104,
        "height": 343
      },
      {
        "assetId": "p126-h02",
        "displayId": "H0717",
        "pdfPage": 126,
        "imgUrl": "/assets/hinh/p126-h02.png",
        "img2xUrl": "/assets/hinh-2x/p126-h02.png",
        "width": 216,
        "height": 388
      },
      {
        "assetId": "p126-h03",
        "displayId": "H0718",
        "pdfPage": 126,
        "imgUrl": "/assets/hinh/p126-h03.png",
        "img2xUrl": "/assets/hinh-2x/p126-h03.png",
        "width": 152,
        "height": 342
      },
      {
        "assetId": "p126-h04",
        "displayId": "H0719",
        "pdfPage": 126,
        "imgUrl": "/assets/hinh/p126-h04.png",
        "img2xUrl": "/assets/hinh-2x/p126-h04.png",
        "width": 162,
        "height": 345
      },
      {
        "assetId": "p126-h05",
        "displayId": "H0720",
        "pdfPage": 126,
        "imgUrl": "/assets/hinh/p126-h05.png",
        "img2xUrl": "/assets/hinh-2x/p126-h05.png",
        "width": 123,
        "height": 345
      },
      {
        "assetId": "p126-h06",
        "displayId": "H0721",
        "pdfPage": 126,
        "imgUrl": "/assets/hinh/p126-h06.png",
        "img2xUrl": "/assets/hinh-2x/p126-h06.png",
        "width": 168,
        "height": 346
      },
      {
        "assetId": "p126-h07",
        "displayId": "H0722",
        "pdfPage": 126,
        "imgUrl": "/assets/hinh/p126-h07.png",
        "img2xUrl": "/assets/hinh-2x/p126-h07.png",
        "width": 229,
        "height": 389
      },
      {
        "assetId": "p126-h08",
        "displayId": "H0723",
        "pdfPage": 126,
        "imgUrl": "/assets/hinh/p126-h08.png",
        "img2xUrl": "/assets/hinh-2x/p126-h08.png",
        "width": 130,
        "height": 344
      },
      {
        "assetId": "p127-h01",
        "displayId": "H0724",
        "pdfPage": 127,
        "imgUrl": "/assets/hinh/p127-h01.png",
        "img2xUrl": "/assets/hinh-2x/p127-h01.png",
        "width": 105,
        "height": 340
      },
      {
        "assetId": "p127-h02",
        "displayId": "H0725",
        "pdfPage": 127,
        "imgUrl": "/assets/hinh/p127-h02.png",
        "img2xUrl": "/assets/hinh-2x/p127-h02.png",
        "width": 120,
        "height": 341
      },
      {
        "assetId": "p127-h03",
        "displayId": "H0726",
        "pdfPage": 127,
        "imgUrl": "/assets/hinh/p127-h03.png",
        "img2xUrl": "/assets/hinh-2x/p127-h03.png",
        "width": 121,
        "height": 342
      },
      {
        "assetId": "p127-h04",
        "displayId": "H0727",
        "pdfPage": 127,
        "imgUrl": "/assets/hinh/p127-h04.png",
        "img2xUrl": "/assets/hinh-2x/p127-h04.png",
        "width": 122,
        "height": 342
      },
      {
        "assetId": "p127-h05",
        "displayId": "H0728",
        "pdfPage": 127,
        "imgUrl": "/assets/hinh/p127-h05.png",
        "img2xUrl": "/assets/hinh-2x/p127-h05.png",
        "width": 110,
        "height": 341
      },
      {
        "assetId": "p127-h06",
        "displayId": "H0729",
        "pdfPage": 127,
        "imgUrl": "/assets/hinh/p127-h06.png",
        "img2xUrl": "/assets/hinh-2x/p127-h06.png",
        "width": 110,
        "height": 341
      },
      {
        "assetId": "p127-h07",
        "displayId": "H0730",
        "pdfPage": 127,
        "imgUrl": "/assets/hinh/p127-h07.png",
        "img2xUrl": "/assets/hinh-2x/p127-h07.png",
        "width": 130,
        "height": 341
      },
      {
        "assetId": "p128-h01",
        "displayId": "H0731",
        "pdfPage": 128,
        "imgUrl": "/assets/hinh/p128-h01.png",
        "img2xUrl": "/assets/hinh-2x/p128-h01.png",
        "width": 153,
        "height": 341
      },
      {
        "assetId": "p128-h02",
        "displayId": "H0732",
        "pdfPage": 128,
        "imgUrl": "/assets/hinh/p128-h02.png",
        "img2xUrl": "/assets/hinh-2x/p128-h02.png",
        "width": 224,
        "height": 387
      },
      {
        "assetId": "p128-h03",
        "displayId": "H0733",
        "pdfPage": 128,
        "imgUrl": "/assets/hinh/p128-h03.png",
        "img2xUrl": "/assets/hinh-2x/p128-h03.png",
        "width": 119,
        "height": 342
      },
      {
        "assetId": "p128-h04",
        "displayId": "H0734",
        "pdfPage": 128,
        "imgUrl": "/assets/hinh/p128-h04.png",
        "img2xUrl": "/assets/hinh-2x/p128-h04.png",
        "width": 119,
        "height": 343
      },
      {
        "assetId": "p128-h05",
        "displayId": "H0735",
        "pdfPage": 128,
        "imgUrl": "/assets/hinh/p128-h05.png",
        "img2xUrl": "/assets/hinh-2x/p128-h05.png",
        "width": 128,
        "height": 344
      },
      {
        "assetId": "p128-h06",
        "displayId": "H0736",
        "pdfPage": 128,
        "imgUrl": "/assets/hinh/p128-h06.png",
        "img2xUrl": "/assets/hinh-2x/p128-h06.png",
        "width": 128,
        "height": 344
      },
      {
        "assetId": "p128-h07",
        "displayId": "H0737",
        "pdfPage": 128,
        "imgUrl": "/assets/hinh/p128-h07.png",
        "img2xUrl": "/assets/hinh-2x/p128-h07.png",
        "width": 128,
        "height": 340
      },
      {
        "assetId": "p128-h08",
        "displayId": "H0738",
        "pdfPage": 128,
        "imgUrl": "/assets/hinh/p128-h08.png",
        "img2xUrl": "/assets/hinh-2x/p128-h08.png",
        "width": 121,
        "height": 342
      }
    ],
    "motions": [
      {
        "id": "bai-22-m-1",
        "stepNo": "1",
        "assetId": "p124-h01",
        "displayId": "H0700",
        "pdfPage": 124,
        "imgUrl": "/assets/hinh/p124-h01.png",
        "img2xUrl": "/assets/hinh-2x/p124-h01.png",
        "width": 128,
        "height": 340,
        "desc": "CHIÊU 1: Hai bàn tay hình xà, di chuyển theo 2 đường tròn chiều từ ngoài vào trong, thân lắc lư theo, lặp lại 3 lần."
      },
      {
        "id": "bai-22-m-2",
        "stepNo": "2",
        "assetId": "p124-h02",
        "displayId": "H0701",
        "pdfPage": 124,
        "imgUrl": "/assets/hinh/p124-h02.png",
        "img2xUrl": "/assets/hinh-2x/p124-h02.png",
        "width": 126,
        "height": 343,
        "desc": "CHIÊU 1: Như động tác 1.1 nhưng đổi ngược chiều hai tay."
      },
      {
        "id": "bai-22-m-3",
        "stepNo": "3",
        "assetId": "p124-h03",
        "displayId": "H0702",
        "pdfPage": 124,
        "imgUrl": "/assets/hinh/p124-h03.png",
        "img2xUrl": "/assets/hinh-2x/p124-h03.png",
        "width": 105,
        "height": 342,
        "desc": "CHIÊU 2: Tiến chân phải lên phía trước, hai bàn tay chém ngang. Bàn tay phải ngửa, bàn tay trái sấp."
      },
      {
        "id": "bai-22-m-4",
        "stepNo": "4",
        "assetId": "p124-h04",
        "displayId": "H0703",
        "pdfPage": 124,
        "imgUrl": "/assets/hinh/p124-h04.png",
        "img2xUrl": "/assets/hinh-2x/p124-h04.png",
        "width": 114,
        "height": 343,
        "desc": "CHIÊU 2: Rút chân trái về phía sau một bước, thu chân phải về, hai tay vuốt chéo từ trên xuống."
      },
      {
        "id": "bai-22-m-5",
        "stepNo": "5",
        "assetId": "p124-h05",
        "displayId": "H0704",
        "pdfPage": 124,
        "imgUrl": "/assets/hinh/p124-h05.png",
        "img2xUrl": "/assets/hinh-2x/p124-h05.png",
        "width": 116,
        "height": 341,
        "desc": "CHIÊU 4: Kéo chân trái lên song song với chân phải, tay trái xia lên trước, tay phải thu về. z"
      },
      {
        "id": "bai-22-m-6",
        "stepNo": "6",
        "assetId": "p124-h06",
        "displayId": "H0705",
        "pdfPage": 124,
        "imgUrl": "/assets/hinh/p124-h06.png",
        "img2xUrl": "/assets/hinh-2x/p124-h06.png",
        "width": 123,
        "height": 343,
        "desc": "CHIÊU 5: é: Kéochân trái vềsau một g bước dài, kéo tiếp chân phải về bắt chéo qua chân trái, tay phải chém chéo 8 xuống, tay trái gattrên mặt. hp"
      },
      {
        "id": "bai-22-m-7",
        "stepNo": "7",
        "assetId": "p124-h07",
        "displayId": "H0706",
        "pdfPage": 124,
        "imgUrl": "/assets/hinh/p124-h07.png",
        "img2xUrl": "/assets/hinh-2x/p124-h07.png",
        "width": 137,
        "height": 342,
        "desc": "CHIÊU 6: È: Rútchân trái về đưa hai tt"
      },
      {
        "id": "bai-22-m-8",
        "stepNo": "8",
        "assetId": "p124-h08",
        "displayId": "H0707",
        "pdfPage": 124,
        "imgUrl": "/assets/hinh/p124-h08.png",
        "img2xUrl": "/assets/hinh-2x/p124-h08.png",
        "width": 179,
        "height": 343,
        "desc": "CHIÊU 4: Kéo chân trái lên song song với chân phải, tay trái xia lên trước, tay phải thu về. z"
      },
      {
        "id": "bai-22-m-9",
        "stepNo": "9",
        "assetId": "p125-h01",
        "displayId": "H0708",
        "pdfPage": 125,
        "imgUrl": "/assets/hinh/p125-h01.png",
        "img2xUrl": "/assets/hinh-2x/p125-h01.png",
        "width": 129,
        "height": 340,
        "desc": "CHIÊU 4: Lướtđồngthời2chân lên trước, hai tay xỉa chéo lên (như hình 3). C"
      },
      {
        "id": "bai-22-m-10",
        "stepNo": "10",
        "assetId": "p125-h02",
        "displayId": "H0709",
        "pdfPage": 125,
        "imgUrl": "/assets/hinh/p125-h02.png",
        "img2xUrl": "/assets/hinh-2x/p125-h02.png",
        "width": 159,
        "height": 308,
        "desc": "CHIÊU 8: Lùi chân trái về ngang chân phải, hạ xuống thế trung bình tấn. Hai tay xà di chuyên tương tự như động tác 1.2"
      },
      {
        "id": "bai-22-m-11",
        "stepNo": "11",
        "assetId": "p125-h03",
        "displayId": "H0710",
        "pdfPage": 125,
        "imgUrl": "/assets/hinh/p125-h03.png",
        "img2xUrl": "/assets/hinh-2x/p125-h03.png",
        "width": 163,
        "height": 306,
        "desc": "CHIÊU 8: Giữ nguyên tư thể, tay đi giống động tác 1.1"
      },
      {
        "id": "bai-22-m-12",
        "stepNo": "12",
        "assetId": "p125-h04",
        "displayId": "H0711",
        "pdfPage": 125,
        "imgUrl": "/assets/hinh/p125-h04.png",
        "img2xUrl": "/assets/hinh-2x/p125-h04.png",
        "width": 235,
        "height": 387,
        "desc": "CHIÊU 10: Di chân phải lên trước 1 bước, đưa hai tay ra trước, tay phải úp, tay trái ngửa, hơi đổ trụ lên chân trước. ¬"
      },
      {
        "id": "bai-22-m-13",
        "stepNo": "13",
        "assetId": "p125-h05",
        "displayId": "H0712",
        "pdfPage": 125,
        "imgUrl": "/assets/hinh/p125-h05.png",
        "img2xUrl": "/assets/hinh-2x/p125-h05.png",
        "width": 242,
        "height": 383,
        "desc": "CHIÊU 10: Lật ngửa bàn tay phải và úp bàn tay trái, đồng thời thân người hơi ngả về sau."
      },
      {
        "id": "bai-22-m-14",
        "stepNo": "14",
        "assetId": "p125-h06",
        "displayId": "H0713",
        "pdfPage": 125,
        "imgUrl": "/assets/hinh/p125-h06.png",
        "img2xUrl": "/assets/hinh-2x/p125-h06.png",
        "width": 280,
        "height": 388,
        "desc": "CHIÊU 14: Rút chân trái về, hất lòng bàn tay phải lên, tay trái úp thủ thế."
      },
      {
        "id": "bai-22-m-15",
        "stepNo": "15",
        "assetId": "p125-h07",
        "displayId": "H0714",
        "pdfPage": 125,
        "imgUrl": "/assets/hinh/p125-h07.png",
        "img2xUrl": "/assets/hinh-2x/p125-h07.png",
        "width": 202,
        "height": 226,
        "desc": "CHIÊU 8: Lùi chân trái về ngang chân phải, hạ xuống thế trung bình tấn. Hai tay xà di chuyên tương tự như động tác 1.2"
      },
      {
        "id": "bai-22-m-16",
        "stepNo": "16",
        "assetId": "p125-h08",
        "displayId": "H0715",
        "pdfPage": 125,
        "imgUrl": "/assets/hinh/p125-h08.png",
        "img2xUrl": "/assets/hinh-2x/p125-h08.png",
        "width": 236,
        "height": 271,
        "desc": "CHIÊU 8: Giữ nguyên tư thể, tay đi giống động tác 1.1"
      },
      {
        "id": "bai-22-m-17",
        "stepNo": "17",
        "assetId": "p126-h01",
        "displayId": "H0716",
        "pdfPage": 126,
        "imgUrl": "/assets/hinh/p126-h01.png",
        "img2xUrl": "/assets/hinh-2x/p126-h01.png",
        "width": 104,
        "height": 343,
        "desc": "CHIÊU 16;: Đứng thẳng lên, thân người xoay sang phải. Nhảy lên đồng thời đổi vị trí hai chân; chân trái lên trước, chân phải sau. Tay trái ngửa và xia ra phía trước. Tay phải úp thủ."
      },
      {
        "id": "bai-22-m-18",
        "stepNo": "18",
        "assetId": "p126-h02",
        "displayId": "H0717",
        "pdfPage": 126,
        "imgUrl": "/assets/hinh/p126-h02.png",
        "img2xUrl": "/assets/hinh-2x/p126-h02.png",
        "width": 216,
        "height": 388,
        "desc": "CHIÊU 17: Di chân trái lén trước, hai băn tay úp, đông thời xoa thành hình tròn song song mặt đất 3 lằn theo chiều kim đồng hồ."
      },
      {
        "id": "bai-22-m-19",
        "stepNo": "19",
        "assetId": "p126-h03",
        "displayId": "H0718",
        "pdfPage": 126,
        "imgUrl": "/assets/hinh/p126-h03.png",
        "img2xUrl": "/assets/hinh-2x/p126-h03.png",
        "width": 152,
        "height": 342,
        "desc": "CHIÊU 10: Lặp lại động tác 10.1."
      },
      {
        "id": "bai-22-m-20",
        "stepNo": "20",
        "assetId": "p126-h04",
        "displayId": "H0719",
        "pdfPage": 126,
        "imgUrl": "/assets/hinh/p126-h04.png",
        "img2xUrl": "/assets/hinh-2x/p126-h04.png",
        "width": 162,
        "height": 345,
        "desc": "CHIÊU 18: Di chân trái lên trước bắt chéo qua chân phải, đánh căng tay ra trước."
      },
      {
        "id": "bai-22-m-21",
        "stepNo": "21",
        "assetId": "p126-h05",
        "displayId": "H0720",
        "pdfPage": 126,
        "imgUrl": "/assets/hinh/p126-h05.png",
        "img2xUrl": "/assets/hinh-2x/p126-h05.png",
        "width": 123,
        "height": 345,
        "desc": "CHIÊU 11: Lặp lại động tác của chiêu 10 nhưng đối xứng qua bên trái. Lặp lại chiêu 4."
      },
      {
        "id": "bai-22-m-22",
        "stepNo": "22",
        "assetId": "p126-h06",
        "displayId": "H0721",
        "pdfPage": 126,
        "imgUrl": "/assets/hinh/p126-h06.png",
        "img2xUrl": "/assets/hinh-2x/p126-h06.png",
        "width": 168,
        "height": 346,
        "desc": "CHIÊU 14: Rút chân trái về, hất lòng bàn tay phải lên, tay trái úp thủ thế."
      },
      {
        "id": "bai-22-m-23",
        "stepNo": "23",
        "assetId": "p126-h07",
        "displayId": "H0722",
        "pdfPage": 126,
        "imgUrl": "/assets/hinh/p126-h07.png",
        "img2xUrl": "/assets/hinh-2x/p126-h07.png",
        "width": 229,
        "height": 389,
        "desc": "CHIÊU 15: Quỳ chân phải, bàn tay phải úp, đập xuống : phía trước, tay trái úp. \ Ea 4"
      },
      {
        "id": "bai-22-m-24",
        "stepNo": "24",
        "assetId": "p126-h08",
        "displayId": "H0723",
        "pdfPage": 126,
        "imgUrl": "/assets/hinh/p126-h08.png",
        "img2xUrl": "/assets/hinh-2x/p126-h08.png",
        "width": 130,
        "height": 344,
        "desc": "CHIÊU 16;: Đứng thẳng lên, thân người xoay sang phải. Nhảy lên đồng thời đổi vị trí hai chân; chân trái lên trước, chân phải sau. Tay trái ngửa và xia ra phía trước. Tay phải úp thủ."
      },
      {
        "id": "bai-22-m-25",
        "stepNo": "25",
        "assetId": "p127-h01",
        "displayId": "H0724",
        "pdfPage": 127,
        "imgUrl": "/assets/hinh/p127-h01.png",
        "img2xUrl": "/assets/hinh-2x/p127-h01.png",
        "width": 105,
        "height": 340,
        "desc": "CHIÊU 23: Dịch gót chân, về sau haicổ đánhsang phải. -"
      },
      {
        "id": "bai-22-m-26",
        "stepNo": "26",
        "assetId": "p127-h02",
        "displayId": "H0725",
        "pdfPage": 127,
        "imgUrl": "/assets/hinh/p127-h02.png",
        "img2xUrl": "/assets/hinh-2x/p127-h02.png",
        "width": 120,
        "height": 341,
        "desc": "CHIÊU 25: Di chân phải 90' sang trái, hai tay úp, tay phải đề trên tay trái và cùng đánh chéo xuống."
      },
      {
        "id": "bai-22-m-27",
        "stepNo": "27",
        "assetId": "p127-h03",
        "displayId": "H0726",
        "pdfPage": 127,
        "imgUrl": "/assets/hinh/p127-h03.png",
        "img2xUrl": "/assets/hinh-2x/p127-h03.png",
        "width": 121,
        "height": 342,
        "desc": "CHIÊU 17: Chân phải lùi 1 bước, xoay người, hai bàn tay bắt và kéo ra sau."
      },
      {
        "id": "bai-22-m-28",
        "stepNo": "28",
        "assetId": "p127-h04",
        "displayId": "H0727",
        "pdfPage": 127,
        "imgUrl": "/assets/hinh/p127-h04.png",
        "img2xUrl": "/assets/hinh-2x/p127-h04.png",
        "width": 122,
        "height": 342,
        "desc": "CHIÊU 18: Di chân phải lên, lặp lại động tác 17.1"
      },
      {
        "id": "bai-22-m-29",
        "stepNo": "29",
        "assetId": "p127-h05",
        "displayId": "H0728",
        "pdfPage": 127,
        "imgUrl": "/assets/hinh/p127-h05.png",
        "img2xUrl": "/assets/hinh-2x/p127-h05.png",
        "width": 110,
        "height": 341,
        "desc": "CHIÊU 18: Di chân trái lên trước bắt chéo qua chân phải, đánh căng tay ra trước."
      },
      {
        "id": "bai-22-m-30",
        "stepNo": "30",
        "assetId": "p127-h06",
        "displayId": "H0729",
        "pdfPage": 127,
        "imgUrl": "/assets/hinh/p127-h06.png",
        "img2xUrl": "/assets/hinh-2x/p127-h06.png",
        "width": 110,
        "height": 341,
        "desc": "CHIÊU 27: Tiến chân trái người xoay sang phải. Thực hiện như động tác 27.1 nhưng với tay trái. Tổng cộng 6 lằn !"
      },
      {
        "id": "bai-22-m-31",
        "stepNo": "31",
        "assetId": "p127-h07",
        "displayId": "H0730",
        "pdfPage": 127,
        "imgUrl": "/assets/hinh/p127-h07.png",
        "img2xUrl": "/assets/hinh-2x/p127-h07.png",
        "width": 130,
        "height": 341,
        "desc": "CHIÊU 19: Dịch gót chân chân về sau, hai bàn tay đánh cạnh bàn tay sang phải."
      },
      {
        "id": "bai-22-m-32",
        "stepNo": "32",
        "assetId": "p128-h01",
        "displayId": "H0731",
        "pdfPage": 128,
        "imgUrl": "/assets/hinh/p128-h01.png",
        "img2xUrl": "/assets/hinh-2x/p128-h01.png",
        "width": 153,
        "height": 341,
        "desc": "CHIÊU 27: Dựng hai lòng bàn tay lên song song. Hai bàn tay đi theo hai vòng tròn nhưng đuổi nhau. Kết thúc vòng thứ 3, tiến lên phía trước 1 bước, tay phải trên."
      },
      {
        "id": "bai-22-m-33",
        "stepNo": "33",
        "assetId": "p128-h02",
        "displayId": "H0732",
        "pdfPage": 128,
        "imgUrl": "/assets/hinh/p128-h02.png",
        "img2xUrl": "/assets/hinh-2x/p128-h02.png",
        "width": 224,
        "height": 387,
        "desc": "CHIÊU 21: r: Hai bàn chân sát : nhau. Dịch hai mũi bàn chân về sau. Hai mu bàn tay đưa lên. 2"
      },
      {
        "id": "bai-22-m-34",
        "stepNo": "34",
        "assetId": "p128-h03",
        "displayId": "H0733",
        "pdfPage": 128,
        "imgUrl": "/assets/hinh/p128-h03.png",
        "img2xUrl": "/assets/hinh-2x/p128-h03.png",
        "width": 119,
        "height": 342,
        "desc": "CHIÊU 33: Tiến chân trái, xoay người, hai căng tay và bàn tay dựng thăng lên đỡ song song."
      },
      {
        "id": "bai-22-m-35",
        "stepNo": "35",
        "assetId": "p128-h04",
        "displayId": "H0734",
        "pdfPage": 128,
        "imgUrl": "/assets/hinh/p128-h04.png",
        "img2xUrl": "/assets/hinh-2x/p128-h04.png",
        "width": 119,
        "height": 343,
        "desc": "CHIÊU 33: Tiến chân trái, xoay người, hai căng tay và bàn tay dựng thăng lên đỡ song song."
      },
      {
        "id": "bai-22-m-36",
        "stepNo": "36",
        "assetId": "p128-h05",
        "displayId": "H0735",
        "pdfPage": 128,
        "imgUrl": "/assets/hinh/p128-h05.png",
        "img2xUrl": "/assets/hinh-2x/p128-h05.png",
        "width": 128,
        "height": 344,
        "desc": "CHIÊU 35: Hai tay đập chéo nhau tay phải trên, tay trái dưới từ ngoài vào trong, từ trên xuống dưới. :"
      },
      {
        "id": "bai-22-m-37",
        "stepNo": "37",
        "assetId": "p128-h06",
        "displayId": "H0736",
        "pdfPage": 128,
        "imgUrl": "/assets/hinh/p128-h06.png",
        "img2xUrl": "/assets/hinh-2x/p128-h06.png",
        "width": 128,
        "height": 344,
        "desc": "CHIÊU 35: Hai bàn tay úp vuốt - xuông. ("
      },
      {
        "id": "bai-22-m-38",
        "stepNo": "38",
        "assetId": "p128-h07",
        "displayId": "H0737",
        "pdfPage": 128,
        "imgUrl": "/assets/hinh/p128-h07.png",
        "img2xUrl": "/assets/hinh-2x/p128-h07.png",
        "width": 128,
        "height": 340,
        "desc": "CHIÊU 23: Dịch gót chân, về sau haicổ đánhsang phải. -"
      },
      {
        "id": "bai-22-m-39",
        "stepNo": "39",
        "assetId": "p128-h08",
        "displayId": "H0738",
        "pdfPage": 128,
        "imgUrl": "/assets/hinh/p128-h08.png",
        "img2xUrl": "/assets/hinh-2x/p128-h08.png",
        "width": 121,
        "height": 342,
        "desc": "CHIÊU 23: Lặp lại 2 lần động tác"
      }
    ],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-23",
    "title": "Hổ quyền",
    "groupId": "ngu-hinh-va-tong-hop",
    "bookOrder": 23,
    "contentType": "practice_or_mixed",
    "pdfPages": [
      129,
      130,
      131,
      132
    ],
    "pageRange": "Trang PDF 129 – 132",
    "assetCount": 36,
    "assets": [
      {
        "assetId": "p129-h01",
        "displayId": "H0739",
        "pdfPage": 129,
        "imgUrl": "/assets/hinh/p129-h01.png",
        "img2xUrl": "/assets/hinh-2x/p129-h01.png",
        "width": 151,
        "height": 338
      },
      {
        "assetId": "p129-h02",
        "displayId": "H0740",
        "pdfPage": 129,
        "imgUrl": "/assets/hinh/p129-h02.png",
        "img2xUrl": "/assets/hinh-2x/p129-h02.png",
        "width": 150,
        "height": 337
      },
      {
        "assetId": "p129-h03",
        "displayId": "H0741",
        "pdfPage": 129,
        "imgUrl": "/assets/hinh/p129-h03.png",
        "img2xUrl": "/assets/hinh-2x/p129-h03.png",
        "width": 159,
        "height": 339
      },
      {
        "assetId": "p129-h04",
        "displayId": "H0742",
        "pdfPage": 129,
        "imgUrl": "/assets/hinh/p129-h04.png",
        "img2xUrl": "/assets/hinh-2x/p129-h04.png",
        "width": 147,
        "height": 340
      },
      {
        "assetId": "p129-h05",
        "displayId": "H0743",
        "pdfPage": 129,
        "imgUrl": "/assets/hinh/p129-h05.png",
        "img2xUrl": "/assets/hinh-2x/p129-h05.png",
        "width": 153,
        "height": 341
      },
      {
        "assetId": "p129-h06",
        "displayId": "H0744",
        "pdfPage": 129,
        "imgUrl": "/assets/hinh/p129-h06.png",
        "img2xUrl": "/assets/hinh-2x/p129-h06.png",
        "width": 148,
        "height": 338
      },
      {
        "assetId": "p129-h07",
        "displayId": "H0745",
        "pdfPage": 129,
        "imgUrl": "/assets/hinh/p129-h07.png",
        "img2xUrl": "/assets/hinh-2x/p129-h07.png",
        "width": 183,
        "height": 341
      },
      {
        "assetId": "p129-h08",
        "displayId": "H0746",
        "pdfPage": 129,
        "imgUrl": "/assets/hinh/p129-h08.png",
        "img2xUrl": "/assets/hinh-2x/p129-h08.png",
        "width": 150,
        "height": 337
      },
      {
        "assetId": "p129-h09",
        "displayId": "H0747",
        "pdfPage": 129,
        "imgUrl": "/assets/hinh/p129-h09.png",
        "img2xUrl": "/assets/hinh-2x/p129-h09.png",
        "width": 147,
        "height": 340
      },
      {
        "assetId": "p130-h01",
        "displayId": "H0748",
        "pdfPage": 130,
        "imgUrl": "/assets/hinh/p130-h01.png",
        "img2xUrl": "/assets/hinh-2x/p130-h01.png",
        "width": 135,
        "height": 343
      },
      {
        "assetId": "p130-h02",
        "displayId": "H0749",
        "pdfPage": 130,
        "imgUrl": "/assets/hinh/p130-h02.png",
        "img2xUrl": "/assets/hinh-2x/p130-h02.png",
        "width": 147,
        "height": 338
      },
      {
        "assetId": "p130-h03",
        "displayId": "H0750",
        "pdfPage": 130,
        "imgUrl": "/assets/hinh/p130-h03.png",
        "img2xUrl": "/assets/hinh-2x/p130-h03.png",
        "width": 154,
        "height": 340
      },
      {
        "assetId": "p130-h04",
        "displayId": "H0751",
        "pdfPage": 130,
        "imgUrl": "/assets/hinh/p130-h04.png",
        "img2xUrl": "/assets/hinh-2x/p130-h04.png",
        "width": 142,
        "height": 339
      },
      {
        "assetId": "p130-h05",
        "displayId": "H0752",
        "pdfPage": 130,
        "imgUrl": "/assets/hinh/p130-h05.png",
        "img2xUrl": "/assets/hinh-2x/p130-h05.png",
        "width": 137,
        "height": 340
      },
      {
        "assetId": "p130-h06",
        "displayId": "H0753",
        "pdfPage": 130,
        "imgUrl": "/assets/hinh/p130-h06.png",
        "img2xUrl": "/assets/hinh-2x/p130-h06.png",
        "width": 125,
        "height": 337
      },
      {
        "assetId": "p130-h07",
        "displayId": "H0754",
        "pdfPage": 130,
        "imgUrl": "/assets/hinh/p130-h07.png",
        "img2xUrl": "/assets/hinh-2x/p130-h07.png",
        "width": 292,
        "height": 371
      },
      {
        "assetId": "p130-h08",
        "displayId": "H0755",
        "pdfPage": 130,
        "imgUrl": "/assets/hinh/p130-h08.png",
        "img2xUrl": "/assets/hinh-2x/p130-h08.png",
        "width": 283,
        "height": 371
      },
      {
        "assetId": "p130-h09",
        "displayId": "H0756",
        "pdfPage": 130,
        "imgUrl": "/assets/hinh/p130-h09.png",
        "img2xUrl": "/assets/hinh-2x/p130-h09.png",
        "width": 281,
        "height": 369
      },
      {
        "assetId": "p131-h01",
        "displayId": "H0757",
        "pdfPage": 131,
        "imgUrl": "/assets/hinh/p131-h01.png",
        "img2xUrl": "/assets/hinh-2x/p131-h01.png",
        "width": 151,
        "height": 340
      },
      {
        "assetId": "p131-h02",
        "displayId": "H0758",
        "pdfPage": 131,
        "imgUrl": "/assets/hinh/p131-h02.png",
        "img2xUrl": "/assets/hinh-2x/p131-h02.png",
        "width": 298,
        "height": 382
      },
      {
        "assetId": "p131-h03",
        "displayId": "H0759",
        "pdfPage": 131,
        "imgUrl": "/assets/hinh/p131-h03.png",
        "img2xUrl": "/assets/hinh-2x/p131-h03.png",
        "width": 144,
        "height": 338
      },
      {
        "assetId": "p131-h04",
        "displayId": "H0760",
        "pdfPage": 131,
        "imgUrl": "/assets/hinh/p131-h04.png",
        "img2xUrl": "/assets/hinh-2x/p131-h04.png",
        "width": 141,
        "height": 337
      },
      {
        "assetId": "p131-h05",
        "displayId": "H0761",
        "pdfPage": 131,
        "imgUrl": "/assets/hinh/p131-h05.png",
        "img2xUrl": "/assets/hinh-2x/p131-h05.png",
        "width": 143,
        "height": 339
      },
      {
        "assetId": "p131-h06",
        "displayId": "H0762",
        "pdfPage": 131,
        "imgUrl": "/assets/hinh/p131-h06.png",
        "img2xUrl": "/assets/hinh-2x/p131-h06.png",
        "width": 150,
        "height": 338
      },
      {
        "assetId": "p131-h07",
        "displayId": "H0763",
        "pdfPage": 131,
        "imgUrl": "/assets/hinh/p131-h07.png",
        "img2xUrl": "/assets/hinh-2x/p131-h07.png",
        "width": 118,
        "height": 341
      },
      {
        "assetId": "p131-h08",
        "displayId": "H0764",
        "pdfPage": 131,
        "imgUrl": "/assets/hinh/p131-h08.png",
        "img2xUrl": "/assets/hinh-2x/p131-h08.png",
        "width": 144,
        "height": 339
      },
      {
        "assetId": "p132-h01",
        "displayId": "H0765",
        "pdfPage": 132,
        "imgUrl": "/assets/hinh/p132-h01.png",
        "img2xUrl": "/assets/hinh-2x/p132-h01.png",
        "width": 318,
        "height": 367
      },
      {
        "assetId": "p132-h02",
        "displayId": "H0766",
        "pdfPage": 132,
        "imgUrl": "/assets/hinh/p132-h02.png",
        "img2xUrl": "/assets/hinh-2x/p132-h02.png",
        "width": 224,
        "height": 367
      },
      {
        "assetId": "p132-h03",
        "displayId": "H0767",
        "pdfPage": 132,
        "imgUrl": "/assets/hinh/p132-h03.png",
        "img2xUrl": "/assets/hinh-2x/p132-h03.png",
        "width": 253,
        "height": 365
      },
      {
        "assetId": "p132-h04",
        "displayId": "H0768",
        "pdfPage": 132,
        "imgUrl": "/assets/hinh/p132-h04.png",
        "img2xUrl": "/assets/hinh-2x/p132-h04.png",
        "width": 131,
        "height": 336
      },
      {
        "assetId": "p132-h05",
        "displayId": "H0769",
        "pdfPage": 132,
        "imgUrl": "/assets/hinh/p132-h05.png",
        "img2xUrl": "/assets/hinh-2x/p132-h05.png",
        "width": 145,
        "height": 338
      },
      {
        "assetId": "p132-h06",
        "displayId": "H0770",
        "pdfPage": 132,
        "imgUrl": "/assets/hinh/p132-h06.png",
        "img2xUrl": "/assets/hinh-2x/p132-h06.png",
        "width": 142,
        "height": 337
      },
      {
        "assetId": "p132-h07",
        "displayId": "H0771",
        "pdfPage": 132,
        "imgUrl": "/assets/hinh/p132-h07.png",
        "img2xUrl": "/assets/hinh-2x/p132-h07.png",
        "width": 147,
        "height": 338
      },
      {
        "assetId": "p132-h08",
        "displayId": "H0772",
        "pdfPage": 132,
        "imgUrl": "/assets/hinh/p132-h08.png",
        "img2xUrl": "/assets/hinh-2x/p132-h08.png",
        "width": 144,
        "height": 338
      },
      {
        "assetId": "p132-h09",
        "displayId": "H0773",
        "pdfPage": 132,
        "imgUrl": "/assets/hinh/p132-h09.png",
        "img2xUrl": "/assets/hinh-2x/p132-h09.png",
        "width": 148,
        "height": 341
      },
      {
        "assetId": "p132-h10",
        "displayId": "H0774",
        "pdfPage": 132,
        "imgUrl": "/assets/hinh/p132-h10.png",
        "img2xUrl": "/assets/hinh-2x/p132-h10.png",
        "width": 147,
        "height": 338
      }
    ],
    "motions": [
      {
        "id": "bai-23-m-1",
        "stepNo": "1",
        "assetId": "p129-h01",
        "displayId": "H0739",
        "pdfPage": 129,
        "imgUrl": "/assets/hinh/p129-h01.png",
        "img2xUrl": "/assets/hinh-2x/p129-h01.png",
        "width": 151,
        "height": 338,
        "desc": "CHIÊU 1: Hai tay để ngang trước mặt, đánh tay phải xuống."
      },
      {
        "id": "bai-23-m-2",
        "stepNo": "2",
        "assetId": "p129-h02",
        "displayId": "H0740",
        "pdfPage": 129,
        "imgUrl": "/assets/hinh/p129-h02.png",
        "img2xUrl": "/assets/hinh-2x/p129-h02.png",
        "width": 150,
        "height": 337,
        "desc": "CHIÊU 1: Đánh tay trái xuống tương tự, tay phải nhấc lên."
      },
      {
        "id": "bai-23-m-3",
        "stepNo": "3",
        "assetId": "p129-h03",
        "displayId": "H0741",
        "pdfPage": 129,
        "imgUrl": "/assets/hinh/p129-h03.png",
        "img2xUrl": "/assets/hinh-2x/p129-h03.png",
        "width": 159,
        "height": 339,
        "desc": "CHIÊU 22;: Quay người 180° ra phía sau, lặp lại chiêu 21."
      },
      {
        "id": "bai-23-m-4",
        "stepNo": "4",
        "assetId": "p129-h04",
        "displayId": "H0742",
        "pdfPage": 129,
        "imgUrl": "/assets/hinh/p129-h04.png",
        "img2xUrl": "/assets/hinh-2x/p129-h04.png",
        "width": 147,
        "height": 340,
        "desc": "CHIÊU 2: Đấm tay phải ra trước."
      },
      {
        "id": "bai-23-m-5",
        "stepNo": "5",
        "assetId": "p129-h05",
        "displayId": "H0743",
        "pdfPage": 129,
        "imgUrl": "/assets/hinh/p129-h05.png",
        "img2xUrl": "/assets/hinh-2x/p129-h05.png",
        "width": 153,
        "height": 341,
        "desc": "CHIÊU 23: Quay người sang trái 0, tiến chân phải lên rước, hai tay duỗi thẳng cả ánh tay, đánh vòng từ igoài vào: phải, trái (3 lần)."
      },
      {
        "id": "bai-23-m-6",
        "stepNo": "6",
        "assetId": "p129-h06",
        "displayId": "H0744",
        "pdfPage": 129,
        "imgUrl": "/assets/hinh/p129-h06.png",
        "img2xUrl": "/assets/hinh-2x/p129-h06.png",
        "width": 148,
        "height": 338,
        "desc": "CHIÊU 5: Tiến chân trái 1 bước, đấm 2 quyền ra trước tay trái trên."
      },
      {
        "id": "bai-23-m-7",
        "stepNo": "7",
        "assetId": "p129-h07",
        "displayId": "H0745",
        "pdfPage": 129,
        "imgUrl": "/assets/hinh/p129-h07.png",
        "img2xUrl": "/assets/hinh-2x/p129-h07.png",
        "width": 183,
        "height": 341,
        "desc": "CHIÊU 5: Chân phải tiến 1 bước, đấm 2 quyền ra trước tay phải trên."
      },
      {
        "id": "bai-23-m-8",
        "stepNo": "8",
        "assetId": "p129-h08",
        "displayId": "H0746",
        "pdfPage": 129,
        "imgUrl": "/assets/hinh/p129-h08.png",
        "img2xUrl": "/assets/hinh-2x/p129-h08.png",
        "width": 150,
        "height": 337,
        "desc": "CHIÊU 5: Tiến chân trái 1 bước, đấm 2 quyền ra trước tay trái trên."
      },
      {
        "id": "bai-23-m-9",
        "stepNo": "9",
        "assetId": "p129-h09",
        "displayId": "H0747",
        "pdfPage": 129,
        "imgUrl": "/assets/hinh/p129-h09.png",
        "img2xUrl": "/assets/hinh-2x/p129-h09.png",
        "width": 147,
        "height": 340,
        "desc": "CHIÊU 6: —_ động tác 6.1 nhưng đôi xứng sang trái."
      },
      {
        "id": "bai-23-m-10",
        "stepNo": "10",
        "assetId": "p130-h01",
        "displayId": "H0748",
        "pdfPage": 130,
        "imgUrl": "/assets/hinh/p130-h01.png",
        "img2xUrl": "/assets/hinh-2x/p130-h01.png",
        "width": 135,
        "height": 343,
        "desc": "CHIÊU 9: Lùi 1 bước đánh 2 chỏ ra sau."
      },
      {
        "id": "bai-23-m-11",
        "stepNo": "11",
        "assetId": "p130-h02",
        "displayId": "H0749",
        "pdfPage": 130,
        "imgUrl": "/assets/hinh/p130-h02.png",
        "img2xUrl": "/assets/hinh-2x/p130-h02.png",
        "width": 147,
        "height": 338,
        "desc": "CHIÊU 6: Tay phải đỡ gạt ngang mặt, tay trái đỡ chéo từ trên xuống."
      },
      {
        "id": "bai-23-m-12",
        "stepNo": "12",
        "assetId": "p130-h03",
        "displayId": "H0750",
        "pdfPage": 130,
        "imgUrl": "/assets/hinh/p130-h03.png",
        "img2xUrl": "/assets/hinh-2x/p130-h03.png",
        "width": 154,
        "height": 340,
        "desc": "CHIÊU 6: —_ động tác 6.1 nhưng đôi xứng sang trái."
      },
      {
        "id": "bai-23-m-13",
        "stepNo": "13",
        "assetId": "p130-h04",
        "displayId": "H0751",
        "pdfPage": 130,
        "imgUrl": "/assets/hinh/p130-h04.png",
        "img2xUrl": "/assets/hinh-2x/p130-h04.png",
        "width": 142,
        "height": 339,
        "desc": "CHIÊU 11: Lùi chân phải một bước, hai cổ tay hất lưng nắm đấm lên."
      },
      {
        "id": "bai-23-m-14",
        "stepNo": "14",
        "assetId": "p130-h05",
        "displayId": "H0752",
        "pdfPage": 130,
        "imgUrl": "/assets/hinh/p130-h05.png",
        "img2xUrl": "/assets/hinh-2x/p130-h05.png",
        "width": 137,
        "height": 340,
        "desc": "CHIÊU 11: Tiến chân phải lên trước, hai tay quay cổ tay vòng đánh từ dưới lên."
      },
      {
        "id": "bai-23-m-15",
        "stepNo": "15",
        "assetId": "p130-h06",
        "displayId": "H0753",
        "pdfPage": 130,
        "imgUrl": "/assets/hinh/p130-h06.png",
        "img2xUrl": "/assets/hinh-2x/p130-h06.png",
        "width": 125,
        "height": 337,
        "desc": "CHIÊU 11: Lùi chân phải, hai cổ tay gập đánh xuống."
      },
      {
        "id": "bai-23-m-16",
        "stepNo": "16",
        "assetId": "p130-h07",
        "displayId": "H0754",
        "pdfPage": 130,
        "imgUrl": "/assets/hinh/p130-h07.png",
        "img2xUrl": "/assets/hinh-2x/p130-h07.png",
        "width": 292,
        "height": 371,
        "desc": "CHIÊU 12;: Lùi chân phải về ngang chân trái, người quay 180° ra sau lưng, hai tay đánh ra hai bên ngang vai."
      },
      {
        "id": "bai-23-m-17",
        "stepNo": "17",
        "assetId": "p130-h08",
        "displayId": "H0755",
        "pdfPage": 130,
        "imgUrl": "/assets/hinh/p130-h08.png",
        "img2xUrl": "/assets/hinh-2x/p130-h08.png",
        "width": 283,
        "height": 371,
        "desc": "CHIÊU 12;: Hai tay đánh chếch sang ngang, tay phải trên, tay trái dưới."
      },
      {
        "id": "bai-23-m-18",
        "stepNo": "18",
        "assetId": "p130-h09",
        "displayId": "H0756",
        "pdfPage": 130,
        "imgUrl": "/assets/hinh/p130-h09.png",
        "img2xUrl": "/assets/hinh-2x/p130-h09.png",
        "width": 281,
        "height": 369,
        "desc": "CHIÊU 12;: Tay đánh đảo lại động tác 13.2, tay phải dưới, tay trái trên."
      },
      {
        "id": "bai-23-m-19",
        "stepNo": "19",
        "assetId": "p131-h01",
        "displayId": "H0757",
        "pdfPage": 131,
        "imgUrl": "/assets/hinh/p131-h01.png",
        "img2xUrl": "/assets/hinh-2x/p131-h01.png",
        "width": 151,
        "height": 340,
        "desc": "CHIÊU 11: Quay lại người sang trái 90 về hướng cũ, hai tay bắt chéo đỡ trước bụng, tay phải ở ngoài."
      },
      {
        "id": "bai-23-m-20",
        "stepNo": "20",
        "assetId": "p131-h02",
        "displayId": "H0758",
        "pdfPage": 131,
        "imgUrl": "/assets/hinh/p131-h02.png",
        "img2xUrl": "/assets/hinh-2x/p131-h02.png",
        "width": 298,
        "height": 382,
        "desc": "CHIÊU 11: Lùi chân phải một bước, hai cổ tay hất lưng nắm đấm lên."
      },
      {
        "id": "bai-23-m-21",
        "stepNo": "21",
        "assetId": "p131-h03",
        "displayId": "H0759",
        "pdfPage": 131,
        "imgUrl": "/assets/hinh/p131-h03.png",
        "img2xUrl": "/assets/hinh-2x/p131-h03.png",
        "width": 144,
        "height": 338,
        "desc": "CHIÊU 17: Quay người sang trái 90, chân đứng kiềm dương, đánh căng tay xuống ngang bụng."
      },
      {
        "id": "bai-23-m-22",
        "stepNo": "22",
        "assetId": "p131-h04",
        "displayId": "H0760",
        "pdfPage": 131,
        "imgUrl": "/assets/hinh/p131-h04.png",
        "img2xUrl": "/assets/hinh-2x/p131-h04.png",
        "width": 141,
        "height": 337,
        "desc": "CHIÊU 17: Thu tay phải về, tay trái đánh tương tự 17.1."
      },
      {
        "id": "bai-23-m-23",
        "stepNo": "23",
        "assetId": "p131-h05",
        "displayId": "H0761",
        "pdfPage": 131,
        "imgUrl": "/assets/hinh/p131-h05.png",
        "img2xUrl": "/assets/hinh-2x/p131-h05.png",
        "width": 143,
        "height": 339,
        "desc": "CHIÊU 18;: Tay phải gạt đỡ mặt, tay trái thủ."
      },
      {
        "id": "bai-23-m-24",
        "stepNo": "24",
        "assetId": "p131-h06",
        "displayId": "H0762",
        "pdfPage": 131,
        "imgUrl": "/assets/hinh/p131-h06.png",
        "img2xUrl": "/assets/hinh-2x/p131-h06.png",
        "width": 150,
        "height": 338,
        "desc": "CHIÊU 18;: Tay phải gạt xuống."
      },
      {
        "id": "bai-23-m-25",
        "stepNo": "25",
        "assetId": "p131-h07",
        "displayId": "H0763",
        "pdfPage": 131,
        "imgUrl": "/assets/hinh/p131-h07.png",
        "img2xUrl": "/assets/hinh-2x/p131-h07.png",
        "width": 118,
        "height": 341,
        "desc": "CHIÊU 12;: Lặp lại động tác 11.2."
      },
      {
        "id": "bai-23-m-26",
        "stepNo": "26",
        "assetId": "p131-h08",
        "displayId": "H0764",
        "pdfPage": 131,
        "imgUrl": "/assets/hinh/p131-h08.png",
        "img2xUrl": "/assets/hinh-2x/p131-h08.png",
        "width": 144,
        "height": 339,
        "desc": "CHIÊU 20: Quay người 180\" ra sau, tay trái đỡ, tay phải đánh ra trước."
      },
      {
        "id": "bai-23-m-27",
        "stepNo": "27",
        "assetId": "p132-h01",
        "displayId": "H0765",
        "pdfPage": 132,
        "imgUrl": "/assets/hinh/p132-h01.png",
        "img2xUrl": "/assets/hinh-2x/p132-h01.png",
        "width": 318,
        "height": 367,
        "desc": "CHIÊU 12;: Lặp lại động tác 11.4."
      },
      {
        "id": "bai-23-m-28",
        "stepNo": "28",
        "assetId": "p132-h02",
        "displayId": "H0766",
        "pdfPage": 132,
        "imgUrl": "/assets/hinh/p132-h02.png",
        "img2xUrl": "/assets/hinh-2x/p132-h02.png",
        "width": 224,
        "height": 367,
        "desc": "CHIÊU 12;: Lặp lại động tác 11.5."
      },
      {
        "id": "bai-23-m-29",
        "stepNo": "29",
        "assetId": "p132-h03",
        "displayId": "H0767",
        "pdfPage": 132,
        "imgUrl": "/assets/hinh/p132-h03.png",
        "img2xUrl": "/assets/hinh-2x/p132-h03.png",
        "width": 253,
        "height": 365,
        "desc": "CHIÊU 23: Quay 2 tay từ sau ra trước (3 lân)."
      },
      {
        "id": "bai-23-m-30",
        "stepNo": "30",
        "assetId": "p132-h04",
        "displayId": "H0768",
        "pdfPage": 132,
        "imgUrl": "/assets/hinh/p132-h04.png",
        "img2xUrl": "/assets/hinh-2x/p132-h04.png",
        "width": 131,
        "height": 336,
        "desc": "CHIÊU 24: i: Lùi chân phải ra sau chân trái cánh tay đánh chéo vào nhau, tay phải trên."
      },
      {
        "id": "bai-23-m-31",
        "stepNo": "31",
        "assetId": "p132-h05",
        "displayId": "H0769",
        "pdfPage": 132,
        "imgUrl": "/assets/hinh/p132-h05.png",
        "img2xUrl": "/assets/hinh-2x/p132-h05.png",
        "width": 145,
        "height": 338,
        "desc": "CHIÊU 24: i: Hai tay đánh liên tiếp từ dưới lên 6 lân."
      },
      {
        "id": "bai-23-m-32",
        "stepNo": "32",
        "assetId": "p132-h06",
        "displayId": "H0770",
        "pdfPage": 132,
        "imgUrl": "/assets/hinh/p132-h06.png",
        "img2xUrl": "/assets/hinh-2x/p132-h06.png",
        "width": 142,
        "height": 337,
        "desc": "CHIÊU 24: i: Hai tay đánh liên tiếp trên xuống 6 lần."
      },
      {
        "id": "bai-23-m-33",
        "stepNo": "33",
        "assetId": "p132-h07",
        "displayId": "H0771",
        "pdfPage": 132,
        "imgUrl": "/assets/hinh/p132-h07.png",
        "img2xUrl": "/assets/hinh-2x/p132-h07.png",
        "width": 147,
        "height": 338,
        "desc": "CHIÊU 24: i: Hai tay lặp lại như 25.1 nhưng đổi tay trái ở trên."
      },
      {
        "id": "bai-23-m-34",
        "stepNo": "34",
        "assetId": "p132-h08",
        "displayId": "H0772",
        "pdfPage": 132,
        "imgUrl": "/assets/hinh/p132-h08.png",
        "img2xUrl": "/assets/hinh-2x/p132-h08.png",
        "width": 144,
        "height": 338,
        "desc": "CHIÊU 24: i: Hai tay đánh liên tiếp từ dưới lên 6 làn."
      },
      {
        "id": "bai-23-m-35",
        "stepNo": "35",
        "assetId": "p132-h09",
        "displayId": "H0773",
        "pdfPage": 132,
        "imgUrl": "/assets/hinh/p132-h09.png",
        "img2xUrl": "/assets/hinh-2x/p132-h09.png",
        "width": 148,
        "height": 341,
        "desc": "CHIÊU 24: i: Hai tay đánh liên tiếp trên xuống 6 lần. BÁI TỔ - Kết thúc bài"
      },
      {
        "id": "bai-23-m-36",
        "stepNo": "36",
        "assetId": "p132-h10",
        "displayId": "H0774",
        "pdfPage": 132,
        "imgUrl": "/assets/hinh/p132-h10.png",
        "img2xUrl": "/assets/hinh-2x/p132-h10.png",
        "width": 147,
        "height": 338,
        "desc": "CHIÊU 24: i: Tiến chân phải bằng chân trái đứng Kiềm dương, cổ tay cố định, đánh chéo vào nhau, tay phải trên."
      }
    ],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-24",
    "title": "Báo quyền",
    "groupId": "ngu-hinh-va-tong-hop",
    "bookOrder": 24,
    "contentType": "practice_or_mixed",
    "pdfPages": [
      133,
      134,
      135,
      136
    ],
    "pageRange": "Trang PDF 133 – 136",
    "assetCount": 33,
    "assets": [
      {
        "assetId": "p133-h01",
        "displayId": "H0775",
        "pdfPage": 133,
        "imgUrl": "/assets/hinh/p133-h01.png",
        "img2xUrl": "/assets/hinh-2x/p133-h01.png",
        "width": 132,
        "height": 338
      },
      {
        "assetId": "p133-h02",
        "displayId": "H0776",
        "pdfPage": 133,
        "imgUrl": "/assets/hinh/p133-h02.png",
        "img2xUrl": "/assets/hinh-2x/p133-h02.png",
        "width": 160,
        "height": 339
      },
      {
        "assetId": "p133-h03",
        "displayId": "H0777",
        "pdfPage": 133,
        "imgUrl": "/assets/hinh/p133-h03.png",
        "img2xUrl": "/assets/hinh-2x/p133-h03.png",
        "width": 124,
        "height": 341
      },
      {
        "assetId": "p133-h04",
        "displayId": "H0778",
        "pdfPage": 133,
        "imgUrl": "/assets/hinh/p133-h04.png",
        "img2xUrl": "/assets/hinh-2x/p133-h04.png",
        "width": 123,
        "height": 338
      },
      {
        "assetId": "p133-h05",
        "displayId": "H0779",
        "pdfPage": 133,
        "imgUrl": "/assets/hinh/p133-h05.png",
        "img2xUrl": "/assets/hinh-2x/p133-h05.png",
        "width": 192,
        "height": 339
      },
      {
        "assetId": "p133-h06",
        "displayId": "H0780",
        "pdfPage": 133,
        "imgUrl": "/assets/hinh/p133-h06.png",
        "img2xUrl": "/assets/hinh-2x/p133-h06.png",
        "width": 162,
        "height": 341
      },
      {
        "assetId": "p133-h07",
        "displayId": "H0781",
        "pdfPage": 133,
        "imgUrl": "/assets/hinh/p133-h07.png",
        "img2xUrl": "/assets/hinh-2x/p133-h07.png",
        "width": 229,
        "height": 320
      },
      {
        "assetId": "p133-h08",
        "displayId": "H0782",
        "pdfPage": 133,
        "imgUrl": "/assets/hinh/p133-h08.png",
        "img2xUrl": "/assets/hinh-2x/p133-h08.png",
        "width": 244,
        "height": 385
      },
      {
        "assetId": "p133-h09",
        "displayId": "H0783",
        "pdfPage": 133,
        "imgUrl": "/assets/hinh/p133-h09.png",
        "img2xUrl": "/assets/hinh-2x/p133-h09.png",
        "width": 219,
        "height": 387
      },
      {
        "assetId": "p134-h01",
        "displayId": "H0784",
        "pdfPage": 134,
        "imgUrl": "/assets/hinh/p134-h01.png",
        "img2xUrl": "/assets/hinh-2x/p134-h01.png",
        "width": 231,
        "height": 320
      },
      {
        "assetId": "p134-h02",
        "displayId": "H0785",
        "pdfPage": 134,
        "imgUrl": "/assets/hinh/p134-h02.png",
        "img2xUrl": "/assets/hinh-2x/p134-h02.png",
        "width": 160,
        "height": 339
      },
      {
        "assetId": "p134-h03",
        "displayId": "H0786",
        "pdfPage": 134,
        "imgUrl": "/assets/hinh/p134-h03.png",
        "img2xUrl": "/assets/hinh-2x/p134-h03.png",
        "width": 228,
        "height": 326
      },
      {
        "assetId": "p134-h04",
        "displayId": "H0787",
        "pdfPage": 134,
        "imgUrl": "/assets/hinh/p134-h04.png",
        "img2xUrl": "/assets/hinh-2x/p134-h04.png",
        "width": 224,
        "height": 385
      },
      {
        "assetId": "p134-h05",
        "displayId": "H0788",
        "pdfPage": 134,
        "imgUrl": "/assets/hinh/p134-h05.png",
        "img2xUrl": "/assets/hinh-2x/p134-h05.png",
        "width": 187,
        "height": 345
      },
      {
        "assetId": "p134-h06",
        "displayId": "H0789",
        "pdfPage": 134,
        "imgUrl": "/assets/hinh/p134-h06.png",
        "img2xUrl": "/assets/hinh-2x/p134-h06.png",
        "width": 246,
        "height": 279
      },
      {
        "assetId": "p134-h07",
        "displayId": "H0790",
        "pdfPage": 134,
        "imgUrl": "/assets/hinh/p134-h07.png",
        "img2xUrl": "/assets/hinh-2x/p134-h07.png",
        "width": 145,
        "height": 343
      },
      {
        "assetId": "p134-h08",
        "displayId": "H0791",
        "pdfPage": 134,
        "imgUrl": "/assets/hinh/p134-h08.png",
        "img2xUrl": "/assets/hinh-2x/p134-h08.png",
        "width": 190,
        "height": 234
      },
      {
        "assetId": "p135-h01",
        "displayId": "H0792",
        "pdfPage": 135,
        "imgUrl": "/assets/hinh/p135-h01.png",
        "img2xUrl": "/assets/hinh-2x/p135-h01.png",
        "width": 170,
        "height": 338
      },
      {
        "assetId": "p135-h02",
        "displayId": "H0793",
        "pdfPage": 135,
        "imgUrl": "/assets/hinh/p135-h02.png",
        "img2xUrl": "/assets/hinh-2x/p135-h02.png",
        "width": 159,
        "height": 340
      },
      {
        "assetId": "p135-h03",
        "displayId": "H0794",
        "pdfPage": 135,
        "imgUrl": "/assets/hinh/p135-h03.png",
        "img2xUrl": "/assets/hinh-2x/p135-h03.png",
        "width": 125,
        "height": 340
      },
      {
        "assetId": "p135-h04",
        "displayId": "H0795",
        "pdfPage": 135,
        "imgUrl": "/assets/hinh/p135-h04.png",
        "img2xUrl": "/assets/hinh-2x/p135-h04.png",
        "width": 135,
        "height": 339
      },
      {
        "assetId": "p135-h05",
        "displayId": "H0796",
        "pdfPage": 135,
        "imgUrl": "/assets/hinh/p135-h05.png",
        "img2xUrl": "/assets/hinh-2x/p135-h05.png",
        "width": 126,
        "height": 340
      },
      {
        "assetId": "p135-h06",
        "displayId": "H0797",
        "pdfPage": 135,
        "imgUrl": "/assets/hinh/p135-h06.png",
        "img2xUrl": "/assets/hinh-2x/p135-h06.png",
        "width": 124,
        "height": 339
      },
      {
        "assetId": "p135-h07",
        "displayId": "H0798",
        "pdfPage": 135,
        "imgUrl": "/assets/hinh/p135-h07.png",
        "img2xUrl": "/assets/hinh-2x/p135-h07.png",
        "width": 129,
        "height": 340
      },
      {
        "assetId": "p135-h08",
        "displayId": "H0799",
        "pdfPage": 135,
        "imgUrl": "/assets/hinh/p135-h08.png",
        "img2xUrl": "/assets/hinh-2x/p135-h08.png",
        "width": 115,
        "height": 341
      },
      {
        "assetId": "p136-h01",
        "displayId": "H0800",
        "pdfPage": 136,
        "imgUrl": "/assets/hinh/p136-h01.png",
        "img2xUrl": "/assets/hinh-2x/p136-h01.png",
        "width": 269,
        "height": 392
      },
      {
        "assetId": "p136-h02",
        "displayId": "H0801",
        "pdfPage": 136,
        "imgUrl": "/assets/hinh/p136-h02.png",
        "img2xUrl": "/assets/hinh-2x/p136-h02.png",
        "width": 310,
        "height": 379
      },
      {
        "assetId": "p136-h03",
        "displayId": "H0802",
        "pdfPage": 136,
        "imgUrl": "/assets/hinh/p136-h03.png",
        "img2xUrl": "/assets/hinh-2x/p136-h03.png",
        "width": 156,
        "height": 339
      },
      {
        "assetId": "p136-h04",
        "displayId": "H0803",
        "pdfPage": 136,
        "imgUrl": "/assets/hinh/p136-h04.png",
        "img2xUrl": "/assets/hinh-2x/p136-h04.png",
        "width": 202,
        "height": 384
      },
      {
        "assetId": "p136-h05",
        "displayId": "H0804",
        "pdfPage": 136,
        "imgUrl": "/assets/hinh/p136-h05.png",
        "img2xUrl": "/assets/hinh-2x/p136-h05.png",
        "width": 129,
        "height": 339
      },
      {
        "assetId": "p136-h06",
        "displayId": "H0805",
        "pdfPage": 136,
        "imgUrl": "/assets/hinh/p136-h06.png",
        "img2xUrl": "/assets/hinh-2x/p136-h06.png",
        "width": 121,
        "height": 340
      },
      {
        "assetId": "p136-h07",
        "displayId": "H0806",
        "pdfPage": 136,
        "imgUrl": "/assets/hinh/p136-h07.png",
        "img2xUrl": "/assets/hinh-2x/p136-h07.png",
        "width": 125,
        "height": 340
      },
      {
        "assetId": "p136-h08",
        "displayId": "H0807",
        "pdfPage": 136,
        "imgUrl": "/assets/hinh/p136-h08.png",
        "img2xUrl": "/assets/hinh-2x/p136-h08.png",
        "width": 127,
        "height": 337
      }
    ],
    "motions": [
      {
        "id": "bai-24-m-1",
        "stepNo": "1",
        "assetId": "p133-h01",
        "displayId": "H0775",
        "pdfPage": 133,
        "imgUrl": "/assets/hinh/p133-h01.png",
        "img2xUrl": "/assets/hinh-2x/p133-h01.png",
        "width": 132,
        "height": 338,
        "desc": "CHIÊU 1: Tiến chân phải, hai tay úp đánh ra trước."
      },
      {
        "id": "bai-24-m-2",
        "stepNo": "2",
        "assetId": "p133-h02",
        "displayId": "H0776",
        "pdfPage": 133,
        "imgUrl": "/assets/hinh/p133-h02.png",
        "img2xUrl": "/assets/hinh-2x/p133-h02.png",
        "width": 160,
        "height": 339,
        "desc": "CHIÊU 1: Lướt chân lên phía trước 1 bước hai tay đánh vòng từ ngoài vào."
      },
      {
        "id": "bai-24-m-3",
        "stepNo": "3",
        "assetId": "p133-h03",
        "displayId": "H0777",
        "pdfPage": 133,
        "imgUrl": "/assets/hinh/p133-h03.png",
        "img2xUrl": "/assets/hinh-2x/p133-h03.png",
        "width": 124,
        "height": 341,
        "desc": "CHIÊU 1: Giữ nguyên tư thế, hai tay đánh ngược ra ngoài."
      },
      {
        "id": "bai-24-m-4",
        "stepNo": "4",
        "assetId": "p133-h04",
        "displayId": "H0778",
        "pdfPage": 133,
        "imgUrl": "/assets/hinh/p133-h04.png",
        "img2xUrl": "/assets/hinh-2x/p133-h04.png",
        "width": 123,
        "height": 338,
        "desc": "CHIÊU 1: Tiến chân phải, hai tay ngửa đánh múc vòng từ dưới lên."
      },
      {
        "id": "bai-24-m-5",
        "stepNo": "5",
        "assetId": "p133-h05",
        "displayId": "H0779",
        "pdfPage": 133,
        "imgUrl": "/assets/hinh/p133-h05.png",
        "img2xUrl": "/assets/hinh-2x/p133-h05.png",
        "width": 192,
        "height": 339,
        "desc": "CHIÊU 2: Tay phải xoa vòng tròn theo chiều kim đồng hồ, tay trái xoa vòng tròn theo chiều ngược lại. Hai tay xoa xong 1 vòng thì lùi 1 bước. Tiếp tục lặp lại 2 lằn."
      },
      {
        "id": "bai-24-m-6",
        "stepNo": "6",
        "assetId": "p133-h06",
        "displayId": "H0780",
        "pdfPage": 133,
        "imgUrl": "/assets/hinh/p133-h06.png",
        "img2xUrl": "/assets/hinh-2x/p133-h06.png",
        "width": 162,
        "height": 341,
        "desc": "CHIÊU 13: Hạ thấp người ngôi rào chân trái, hai tạy ngửa ên đánh lần lượt hai tay uống 6 lần."
      },
      {
        "id": "bai-24-m-7",
        "stepNo": "7",
        "assetId": "p133-h07",
        "displayId": "H0781",
        "pdfPage": 133,
        "imgUrl": "/assets/hinh/p133-h07.png",
        "img2xUrl": "/assets/hinh-2x/p133-h07.png",
        "width": 229,
        "height": 320,
        "desc": "CHIÊU 5: Tay phải đánh vòng từ ngoài vào đồng thời chân phải đá Bàng long."
      },
      {
        "id": "bai-24-m-8",
        "stepNo": "8",
        "assetId": "p133-h08",
        "displayId": "H0782",
        "pdfPage": 133,
        "imgUrl": "/assets/hinh/p133-h08.png",
        "img2xUrl": "/assets/hinh-2x/p133-h08.png",
        "width": 244,
        "height": 385,
        "desc": "CHIÊU 7;: Tiến chân phải, tay phải đánh thăng."
      },
      {
        "id": "bai-24-m-9",
        "stepNo": "9",
        "assetId": "p133-h09",
        "displayId": "H0783",
        "pdfPage": 133,
        "imgUrl": "/assets/hinh/p133-h09.png",
        "img2xUrl": "/assets/hinh-2x/p133-h09.png",
        "width": 219,
        "height": 387,
        "desc": "CHIÊU 7;: Giữ nguyên chân, tay phải co về tay trái đánh ra phía trước."
      },
      {
        "id": "bai-24-m-10",
        "stepNo": "10",
        "assetId": "p134-h01",
        "displayId": "H0784",
        "pdfPage": 134,
        "imgUrl": "/assets/hinh/p134-h01.png",
        "img2xUrl": "/assets/hinh-2x/p134-h01.png",
        "width": 231,
        "height": 320,
        "desc": "CHIÊU 7;: Tay phải đánh ra trước đồng thời đá thẳng chân phải ra trước."
      },
      {
        "id": "bai-24-m-11",
        "stepNo": "11",
        "assetId": "p134-h02",
        "displayId": "H0785",
        "pdfPage": 134,
        "imgUrl": "/assets/hinh/p134-h02.png",
        "img2xUrl": "/assets/hinh-2x/p134-h02.png",
        "width": 160,
        "height": 339,
        "desc": "CHIÊU 9: Lùi chân phải 1 bước ra, hai tay đánh chỏ ra sau lưng."
      },
      {
        "id": "bai-24-m-12",
        "stepNo": "12",
        "assetId": "p134-h03",
        "displayId": "H0786",
        "pdfPage": 134,
        "imgUrl": "/assets/hinh/p134-h03.png",
        "img2xUrl": "/assets/hinh-2x/p134-h03.png",
        "width": 228,
        "height": 326,
        "desc": "CHIÊU 9: Giữ nguyên tư thế đánh tay giống hình 1.2."
      },
      {
        "id": "bai-24-m-13",
        "stepNo": "13",
        "assetId": "p134-h04",
        "displayId": "H0787",
        "pdfPage": 134,
        "imgUrl": "/assets/hinh/p134-h04.png",
        "img2xUrl": "/assets/hinh-2x/p134-h04.png",
        "width": 224,
        "height": 385,
        "desc": "CHIÊU 9: Giữ nguyên tư thế đánh tay giống hình 1.4."
      },
      {
        "id": "bai-24-m-14",
        "stepNo": "14",
        "assetId": "p134-h05",
        "displayId": "H0788",
        "pdfPage": 134,
        "imgUrl": "/assets/hinh/p134-h05.png",
        "img2xUrl": "/assets/hinh-2x/p134-h05.png",
        "width": 187,
        "height": 345,
        "desc": "CHIÊU 9: Lùi chân phải 1 bước ra, hai tay đánh chỏ ra sau lưng."
      },
      {
        "id": "bai-24-m-15",
        "stepNo": "15",
        "assetId": "p134-h06",
        "displayId": "H0789",
        "pdfPage": 134,
        "imgUrl": "/assets/hinh/p134-h06.png",
        "img2xUrl": "/assets/hinh-2x/p134-h06.png",
        "width": 246,
        "height": 279,
        "desc": "CHIÊU 9: Tiến chân trái lên 1 bước, tay đánh như động tác 1.1"
      },
      {
        "id": "bai-24-m-16",
        "stepNo": "16",
        "assetId": "p134-h07",
        "displayId": "H0790",
        "pdfPage": 134,
        "imgUrl": "/assets/hinh/p134-h07.png",
        "img2xUrl": "/assets/hinh-2x/p134-h07.png",
        "width": 145,
        "height": 343,
        "desc": "CHIÊU 9: Chân phải đá thẳng ra phía trước, hai tay đánh song song ra trước. Thu chân phải về, quay người sang trái, lặp lại giống chiêu thứ 9 nhưng đối xứng sang trái."
      },
      {
        "id": "bai-24-m-17",
        "stepNo": "17",
        "assetId": "p134-h08",
        "displayId": "H0791",
        "pdfPage": 134,
        "imgUrl": "/assets/hinh/p134-h08.png",
        "img2xUrl": "/assets/hinh-2x/p134-h08.png",
        "width": 190,
        "height": 234,
        "desc": "CHIÊU 11: Thu chân trái quay về vị trí ban đầu, tiến chân phải tay phải đánh từ trong ra ngoài, tay trái thủ."
      },
      {
        "id": "bai-24-m-18",
        "stepNo": "18",
        "assetId": "p135-h01",
        "displayId": "H0792",
        "pdfPage": 135,
        "imgUrl": "/assets/hinh/p135-h01.png",
        "img2xUrl": "/assets/hinh-2x/p135-h01.png",
        "width": 170,
        "height": 338,
        "desc": "CHIÊU 11: Lùi (xước mã) 1 bước, lặp lại đối xứng động tác :"
      },
      {
        "id": "bai-24-m-19",
        "stepNo": "19",
        "assetId": "p135-h02",
        "displayId": "H0793",
        "pdfPage": 135,
        "imgUrl": "/assets/hinh/p135-h02.png",
        "img2xUrl": "/assets/hinh-2x/p135-h02.png",
        "width": 159,
        "height": 340,
        "desc": "CHIÊU 12: ù: Tiếnchân phải lbước 1 tay đánh giống hình 11 Ẹ"
      },
      {
        "id": "bai-24-m-20",
        "stepNo": "20",
        "assetId": "p135-h03",
        "displayId": "H0794",
        "pdfPage": 135,
        "imgUrl": "/assets/hinh/p135-h03.png",
        "img2xUrl": "/assets/hinh-2x/p135-h03.png",
        "width": 125,
        "height": 340,
        "desc": "CHIÊU 12: ù: Chân giữ nguyên, tay ï đánh giống 1,2 |"
      },
      {
        "id": "bai-24-m-21",
        "stepNo": "21",
        "assetId": "p135-h04",
        "displayId": "H0795",
        "pdfPage": 135,
        "imgUrl": "/assets/hinh/p135-h04.png",
        "img2xUrl": "/assets/hinh-2x/p135-h04.png",
        "width": 135,
        "height": 339,
        "desc": "CHIÊU 18: Hai tay úp, lắc cổ tay sang 2 bên 6 lần, sang trái, phải."
      },
      {
        "id": "bai-24-m-22",
        "stepNo": "22",
        "assetId": "p135-h05",
        "displayId": "H0796",
        "pdfPage": 135,
        "imgUrl": "/assets/hinh/p135-h05.png",
        "img2xUrl": "/assets/hinh-2x/p135-h05.png",
        "width": 126,
        "height": 340,
        "desc": "CHIÊU 18: Đánh hất 2 cổ tay lên."
      },
      {
        "id": "bai-24-m-23",
        "stepNo": "23",
        "assetId": "p135-h06",
        "displayId": "H0797",
        "pdfPage": 135,
        "imgUrl": "/assets/hinh/p135-h06.png",
        "img2xUrl": "/assets/hinh-2x/p135-h06.png",
        "width": 124,
        "height": 339,
        "desc": "CHIÊU 13: Hạ thấp người ngôi rào chân trái, hai tạy ngửa ên đánh lần lượt hai tay uống 6 lần."
      },
      {
        "id": "bai-24-m-24",
        "stepNo": "24",
        "assetId": "p135-h07",
        "displayId": "H0798",
        "pdfPage": 135,
        "imgUrl": "/assets/hinh/p135-h07.png",
        "img2xUrl": "/assets/hinh-2x/p135-h07.png",
        "width": 129,
        "height": 340,
        "desc": "CHIÊU 13: Giữ nguyên tư thế, tay hải đánh úp xuống, đồng hời tay trái đánh ngửa lên, ấp lại động tác 3 lần."
      },
      {
        "id": "bai-24-m-25",
        "stepNo": "25",
        "assetId": "p135-h08",
        "displayId": "H0799",
        "pdfPage": 135,
        "imgUrl": "/assets/hinh/p135-h08.png",
        "img2xUrl": "/assets/hinh-2x/p135-h08.png",
        "width": 115,
        "height": 341,
        "desc": "CHIÊU 20: Quay người 180?"
      },
      {
        "id": "bai-24-m-26",
        "stepNo": "26",
        "assetId": "p136-h01",
        "displayId": "H0800",
        "pdfPage": 136,
        "imgUrl": "/assets/hinh/p136-h01.png",
        "img2xUrl": "/assets/hinh-2x/p136-h01.png",
        "width": 269,
        "height": 392,
        "desc": "CHIÊU 14: Đánh giống đối xứng sang trái."
      },
      {
        "id": "bai-24-m-27",
        "stepNo": "27",
        "assetId": "p136-h02",
        "displayId": "H0801",
        "pdfPage": 136,
        "imgUrl": "/assets/hinh/p136-h02.png",
        "img2xUrl": "/assets/hinh-2x/p136-h02.png",
        "width": 310,
        "height": 379,
        "desc": "CHIÊU 23: Chân giữ nguyên, hai tay thăng đánh từ dưới lên, liên tiếp 6 lằn."
      },
      {
        "id": "bai-24-m-28",
        "stepNo": "28",
        "assetId": "p136-h03",
        "displayId": "H0802",
        "pdfPage": 136,
        "imgUrl": "/assets/hinh/p136-h03.png",
        "img2xUrl": "/assets/hinh-2x/p136-h03.png",
        "width": 156,
        "height": 339,
        "desc": "CHIÊU 24: Chân phải trước, trái sau, hai căng tay ngửa đánh từ dưới lên liên tiếp 6 lằn, khuỷu tay giữ nguyên."
      },
      {
        "id": "bai-24-m-29",
        "stepNo": "29",
        "assetId": "p136-h04",
        "displayId": "H0803",
        "pdfPage": 136,
        "imgUrl": "/assets/hinh/p136-h04.png",
        "img2xUrl": "/assets/hinh-2x/p136-h04.png",
        "width": 202,
        "height": 384,
        "desc": "CHIÊU 24: Hai tay úp, đánh liên tiếp 6 lần từ trên xuống, khuÝu tay giữ nguyên."
      },
      {
        "id": "bai-24-m-30",
        "stepNo": "30",
        "assetId": "p136-h05",
        "displayId": "H0804",
        "pdfPage": 136,
        "imgUrl": "/assets/hinh/p136-h05.png",
        "img2xUrl": "/assets/hinh-2x/p136-h05.png",
        "width": 129,
        "height": 339,
        "desc": "CHIÊU 14: Lùi chân trái về sau chân phải, tay đánh theo hình 15.1."
      },
      {
        "id": "bai-24-m-31",
        "stepNo": "31",
        "assetId": "p136-h06",
        "displayId": "H0805",
        "pdfPage": 136,
        "imgUrl": "/assets/hinh/p136-h06.png",
        "img2xUrl": "/assets/hinh-2x/p136-h06.png",
        "width": 121,
        "height": 340,
        "desc": "CHIÊU 25: Hai li nn đánh liên tiếp 6 lần từ dưới lên. (chỉ dùng cổ tay)."
      },
      {
        "id": "bai-24-m-32",
        "stepNo": "32",
        "assetId": "p136-h07",
        "displayId": "H0806",
        "pdfPage": 136,
        "imgUrl": "/assets/hinh/p136-h07.png",
        "img2xUrl": "/assets/hinh-2x/p136-h07.png",
        "width": 125,
        "height": 340,
        "desc": "CHIÊU 17: Tiến chân trái, lặp lại động tác 17.1 với chiều ngược lại."
      },
      {
        "id": "bai-24-m-33",
        "stepNo": "33",
        "assetId": "p136-h08",
        "displayId": "H0807",
        "pdfPage": 136,
        "imgUrl": "/assets/hinh/p136-h08.png",
        "img2xUrl": "/assets/hinh-2x/p136-h08.png",
        "width": 127,
        "height": 337,
        "desc": "CHIÊU 25: Hại tay xoay dọc, đánh liên tiếp 6 lần từ trên xuống. (chỉ dùng cổ tay). BÁI TỔ - Kết thúc bài."
      }
    ],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-25",
    "title": "Hạc quyền",
    "groupId": "ngu-hinh-va-tong-hop",
    "bookOrder": 25,
    "contentType": "practice_or_mixed",
    "pdfPages": [
      137,
      138,
      139,
      140
    ],
    "pageRange": "Trang PDF 137 – 140",
    "assetCount": 32,
    "assets": [
      {
        "assetId": "p137-h01",
        "displayId": "H0808",
        "pdfPage": 137,
        "imgUrl": "/assets/hinh/p137-h01.png",
        "img2xUrl": "/assets/hinh-2x/p137-h01.png",
        "width": 241,
        "height": 364
      },
      {
        "assetId": "p137-h02",
        "displayId": "H0809",
        "pdfPage": 137,
        "imgUrl": "/assets/hinh/p137-h02.png",
        "img2xUrl": "/assets/hinh-2x/p137-h02.png",
        "width": 163,
        "height": 321
      },
      {
        "assetId": "p137-h03",
        "displayId": "H0810",
        "pdfPage": 137,
        "imgUrl": "/assets/hinh/p137-h03.png",
        "img2xUrl": "/assets/hinh-2x/p137-h03.png",
        "width": 133,
        "height": 326
      },
      {
        "assetId": "p137-h04",
        "displayId": "H0811",
        "pdfPage": 137,
        "imgUrl": "/assets/hinh/p137-h04.png",
        "img2xUrl": "/assets/hinh-2x/p137-h04.png",
        "width": 124,
        "height": 322
      },
      {
        "assetId": "p137-h05",
        "displayId": "H0812",
        "pdfPage": 137,
        "imgUrl": "/assets/hinh/p137-h05.png",
        "img2xUrl": "/assets/hinh-2x/p137-h05.png",
        "width": 341,
        "height": 363
      },
      {
        "assetId": "p137-h06",
        "displayId": "H0813",
        "pdfPage": 137,
        "imgUrl": "/assets/hinh/p137-h06.png",
        "img2xUrl": "/assets/hinh-2x/p137-h06.png",
        "width": 155,
        "height": 322
      },
      {
        "assetId": "p137-h07",
        "displayId": "H0814",
        "pdfPage": 137,
        "imgUrl": "/assets/hinh/p137-h07.png",
        "img2xUrl": "/assets/hinh-2x/p137-h07.png",
        "width": 282,
        "height": 363
      },
      {
        "assetId": "p137-h08",
        "displayId": "H0815",
        "pdfPage": 137,
        "imgUrl": "/assets/hinh/p137-h08.png",
        "img2xUrl": "/assets/hinh-2x/p137-h08.png",
        "width": 181,
        "height": 322
      },
      {
        "assetId": "p138-h01",
        "displayId": "H0816",
        "pdfPage": 138,
        "imgUrl": "/assets/hinh/p138-h01.png",
        "img2xUrl": "/assets/hinh-2x/p138-h01.png",
        "width": 286,
        "height": 363
      },
      {
        "assetId": "p138-h02",
        "displayId": "H0817",
        "pdfPage": 138,
        "imgUrl": "/assets/hinh/p138-h02.png",
        "img2xUrl": "/assets/hinh-2x/p138-h02.png",
        "width": 124,
        "height": 324
      },
      {
        "assetId": "p138-h03",
        "displayId": "H0818",
        "pdfPage": 138,
        "imgUrl": "/assets/hinh/p138-h03.png",
        "img2xUrl": "/assets/hinh-2x/p138-h03.png",
        "width": 369,
        "height": 352
      },
      {
        "assetId": "p138-h04",
        "displayId": "H0819",
        "pdfPage": 138,
        "imgUrl": "/assets/hinh/p138-h04.png",
        "img2xUrl": "/assets/hinh-2x/p138-h04.png",
        "width": 253,
        "height": 288
      },
      {
        "assetId": "p138-h05",
        "displayId": "H0820",
        "pdfPage": 138,
        "imgUrl": "/assets/hinh/p138-h05.png",
        "img2xUrl": "/assets/hinh-2x/p138-h05.png",
        "width": 380,
        "height": 304
      },
      {
        "assetId": "p138-h06",
        "displayId": "H0821",
        "pdfPage": 138,
        "imgUrl": "/assets/hinh/p138-h06.png",
        "img2xUrl": "/assets/hinh-2x/p138-h06.png",
        "width": 202,
        "height": 364
      },
      {
        "assetId": "p138-h07",
        "displayId": "H0822",
        "pdfPage": 138,
        "imgUrl": "/assets/hinh/p138-h07.png",
        "img2xUrl": "/assets/hinh-2x/p138-h07.png",
        "width": 118,
        "height": 321
      },
      {
        "assetId": "p138-h08",
        "displayId": "H0823",
        "pdfPage": 138,
        "imgUrl": "/assets/hinh/p138-h08.png",
        "img2xUrl": "/assets/hinh-2x/p138-h08.png",
        "width": 115,
        "height": 322
      },
      {
        "assetId": "p139-h01",
        "displayId": "H0824",
        "pdfPage": 139,
        "imgUrl": "/assets/hinh/p139-h01.png",
        "img2xUrl": "/assets/hinh-2x/p139-h01.png",
        "width": 117,
        "height": 324
      },
      {
        "assetId": "p139-h02",
        "displayId": "H0825",
        "pdfPage": 139,
        "imgUrl": "/assets/hinh/p139-h02.png",
        "img2xUrl": "/assets/hinh-2x/p139-h02.png",
        "width": 156,
        "height": 317
      },
      {
        "assetId": "p139-h03",
        "displayId": "H0826",
        "pdfPage": 139,
        "imgUrl": "/assets/hinh/p139-h03.png",
        "img2xUrl": "/assets/hinh-2x/p139-h03.png",
        "width": 226,
        "height": 365
      },
      {
        "assetId": "p139-h04",
        "displayId": "H0827",
        "pdfPage": 139,
        "imgUrl": "/assets/hinh/p139-h04.png",
        "img2xUrl": "/assets/hinh-2x/p139-h04.png",
        "width": 248,
        "height": 354
      },
      {
        "assetId": "p139-h05",
        "displayId": "H0828",
        "pdfPage": 139,
        "imgUrl": "/assets/hinh/p139-h05.png",
        "img2xUrl": "/assets/hinh-2x/p139-h05.png",
        "width": 143,
        "height": 320
      },
      {
        "assetId": "p139-h06",
        "displayId": "H0829",
        "pdfPage": 139,
        "imgUrl": "/assets/hinh/p139-h06.png",
        "img2xUrl": "/assets/hinh-2x/p139-h06.png",
        "width": 260,
        "height": 312
      },
      {
        "assetId": "p139-h07",
        "displayId": "H0830",
        "pdfPage": 139,
        "imgUrl": "/assets/hinh/p139-h07.png",
        "img2xUrl": "/assets/hinh-2x/p139-h07.png",
        "width": 260,
        "height": 365
      },
      {
        "assetId": "p139-h08",
        "displayId": "H0831",
        "pdfPage": 139,
        "imgUrl": "/assets/hinh/p139-h08.png",
        "img2xUrl": "/assets/hinh-2x/p139-h08.png",
        "width": 182,
        "height": 320
      },
      {
        "assetId": "p140-h01",
        "displayId": "H0832",
        "pdfPage": 140,
        "imgUrl": "/assets/hinh/p140-h01.png",
        "img2xUrl": "/assets/hinh-2x/p140-h01.png",
        "width": 107,
        "height": 319
      },
      {
        "assetId": "p140-h02",
        "displayId": "H0833",
        "pdfPage": 140,
        "imgUrl": "/assets/hinh/p140-h02.png",
        "img2xUrl": "/assets/hinh-2x/p140-h02.png",
        "width": 172,
        "height": 367
      },
      {
        "assetId": "p140-h03",
        "displayId": "H0834",
        "pdfPage": 140,
        "imgUrl": "/assets/hinh/p140-h03.png",
        "img2xUrl": "/assets/hinh-2x/p140-h03.png",
        "width": 214,
        "height": 366
      },
      {
        "assetId": "p140-h04",
        "displayId": "H0835",
        "pdfPage": 140,
        "imgUrl": "/assets/hinh/p140-h04.png",
        "img2xUrl": "/assets/hinh-2x/p140-h04.png",
        "width": 170,
        "height": 322
      },
      {
        "assetId": "p140-h05",
        "displayId": "H0836",
        "pdfPage": 140,
        "imgUrl": "/assets/hinh/p140-h05.png",
        "img2xUrl": "/assets/hinh-2x/p140-h05.png",
        "width": 183,
        "height": 314
      },
      {
        "assetId": "p140-h06",
        "displayId": "H0837",
        "pdfPage": 140,
        "imgUrl": "/assets/hinh/p140-h06.png",
        "img2xUrl": "/assets/hinh-2x/p140-h06.png",
        "width": 141,
        "height": 323
      },
      {
        "assetId": "p140-h07",
        "displayId": "H0838",
        "pdfPage": 140,
        "imgUrl": "/assets/hinh/p140-h07.png",
        "img2xUrl": "/assets/hinh-2x/p140-h07.png",
        "width": 282,
        "height": 210
      },
      {
        "assetId": "p140-h08",
        "displayId": "H0839",
        "pdfPage": 140,
        "imgUrl": "/assets/hinh/p140-h08.png",
        "img2xUrl": "/assets/hinh-2x/p140-h08.png",
        "width": 130,
        "height": 320
      }
    ],
    "motions": [
      {
        "id": "bai-25-m-1",
        "stepNo": "1",
        "assetId": "p137-h01",
        "displayId": "H0808",
        "pdfPage": 137,
        "imgUrl": "/assets/hinh/p137-h01.png",
        "img2xUrl": "/assets/hinh-2x/p137-h01.png",
        "width": 241,
        "height": 364,
        "desc": "Tiến chân phải lên, biên thân, tay phải đánh từ dưới lên, tay trái thủ."
      },
      {
        "id": "bai-25-m-2",
        "stepNo": "2",
        "assetId": "p137-h02",
        "displayId": "H0809",
        "pdfPage": 137,
        "imgUrl": "/assets/hinh/p137-h02.png",
        "img2xUrl": "/assets/hinh-2x/p137-h02.png",
        "width": 163,
        "height": 321,
        "desc": "CHIÊU 3: Tiến chân phải, biên thân, đánh tay phải vòng theo chiều kim đồng hồ từ dưới lên đến ngang thái dương, tay trái thủ."
      },
      {
        "id": "bai-25-m-3",
        "stepNo": "3",
        "assetId": "p137-h03",
        "displayId": "H0810",
        "pdfPage": 137,
        "imgUrl": "/assets/hinh/p137-h03.png",
        "img2xUrl": "/assets/hinh-2x/p137-h03.png",
        "width": 133,
        "height": 326,
        "desc": "CHIÊU 5: Tiến chân phải lên, đồng thời đánh vòng tay phải từ dưới lên trên đầu, tay phải ngửa lên trên, tay trái thủ."
      },
      {
        "id": "bai-25-m-4",
        "stepNo": "4",
        "assetId": "p137-h04",
        "displayId": "H0811",
        "pdfPage": 137,
        "imgUrl": "/assets/hinh/p137-h04.png",
        "img2xUrl": "/assets/hinh-2x/p137-h04.png",
        "width": 124,
        "height": 322,
        "desc": "CHIÊU 7: Tấn kiềm dương, hai tay bắt chéo, lòng bàn tay hướng vào trong, tay phải ngoài."
      },
      {
        "id": "bai-25-m-5",
        "stepNo": "5",
        "assetId": "p137-h05",
        "displayId": "H0812",
        "pdfPage": 137,
        "imgUrl": "/assets/hinh/p137-h05.png",
        "img2xUrl": "/assets/hinh-2x/p137-h05.png",
        "width": 341,
        "height": 363,
        "desc": "CHIÊU 7: Chém thẳng 2 bàn tay sang 2 bên."
      },
      {
        "id": "bai-25-m-6",
        "stepNo": "6",
        "assetId": "p137-h06",
        "displayId": "H0813",
        "pdfPage": 137,
        "imgUrl": "/assets/hinh/p137-h06.png",
        "img2xUrl": "/assets/hinh-2x/p137-h06.png",
        "width": 155,
        "height": 322,
        "desc": "CHIÊU 8: Chân đứng kiềm dương, hai cánh tay thả lỏnghạxuốngđểápvào2 ] bên ngang hông."
      },
      {
        "id": "bai-25-m-7",
        "stepNo": "7",
        "assetId": "p137-h07",
        "displayId": "H0814",
        "pdfPage": 137,
        "imgUrl": "/assets/hinh/p137-h07.png",
        "img2xUrl": "/assets/hinh-2x/p137-h07.png",
        "width": 282,
        "height": 363,
        "desc": "CHIÊU 8: Đánh 2 lưng bàn tay lên ngang đầu. í"
      },
      {
        "id": "bai-25-m-8",
        "stepNo": "8",
        "assetId": "p137-h08",
        "displayId": "H0815",
        "pdfPage": 137,
        "imgUrl": "/assets/hinh/p137-h08.png",
        "img2xUrl": "/assets/hinh-2x/p137-h08.png",
        "width": 181,
        "height": 322,
        "desc": "CHIÊU 7: Chém thẳng 2 bàn tay sang 2 bên."
      },
      {
        "id": "bai-25-m-9",
        "stepNo": "9",
        "assetId": "p138-h01",
        "displayId": "H0816",
        "pdfPage": 138,
        "imgUrl": "/assets/hinh/p138-h01.png",
        "img2xUrl": "/assets/hinh-2x/p138-h01.png",
        "width": 286,
        "height": 363,
        "desc": "CHIÊU 8: Chân đứng kiềm dương, hai cánh tay thả lỏnghạxuốngđểápvào2 ] bên ngang hông."
      },
      {
        "id": "bai-25-m-10",
        "stepNo": "10",
        "assetId": "p138-h02",
        "displayId": "H0817",
        "pdfPage": 138,
        "imgUrl": "/assets/hinh/p138-h02.png",
        "img2xUrl": "/assets/hinh-2x/p138-h02.png",
        "width": 124,
        "height": 324,
        "desc": "CHIÊU 8: Đánh 2 lưng bàn tay lên ngang đầu. í"
      },
      {
        "id": "bai-25-m-11",
        "stepNo": "11",
        "assetId": "p138-h03",
        "displayId": "H0818",
        "pdfPage": 138,
        "imgUrl": "/assets/hinh/p138-h03.png",
        "img2xUrl": "/assets/hinh-2x/p138-h03.png",
        "width": 369,
        "height": 352,
        "desc": "CHIÊU 10: Bắt chéo chân phải sang trái, hai tay bắt chéo tay phải ở ngoài ị"
      },
      {
        "id": "bai-25-m-12",
        "stepNo": "12",
        "assetId": "p138-h04",
        "displayId": "H0819",
        "pdfPage": 138,
        "imgUrl": "/assets/hinh/p138-h04.png",
        "img2xUrl": "/assets/hinh-2x/p138-h04.png",
        "width": 253,
        "height": 288,
        "desc": "CHIÊU 10: Xoay người 180° theo chiều ngược kim đồng hồ, đánh 2 tay chưởng sang hai bên, đông thời chần trái đá ngang sang trái."
      },
      {
        "id": "bai-25-m-13",
        "stepNo": "13",
        "assetId": "p138-h05",
        "displayId": "H0820",
        "pdfPage": 138,
        "imgUrl": "/assets/hinh/p138-h05.png",
        "img2xUrl": "/assets/hinh-2x/p138-h05.png",
        "width": 380,
        "height": 304,
        "desc": "CHIÊU 11;: Hạ chân trái, bắt chéo chân trái sang phải, hai tay bất chéo như 10.1 nhưng tay trái ở ngoài."
      },
      {
        "id": "bai-25-m-14",
        "stepNo": "14",
        "assetId": "p138-h06",
        "displayId": "H0821",
        "pdfPage": 138,
        "imgUrl": "/assets/hinh/p138-h06.png",
        "img2xUrl": "/assets/hinh-2x/p138-h06.png",
        "width": 202,
        "height": 364,
        "desc": "CHIÊU 16: Xoay người sang bên phải, tay phải than thủ, tay trái bàng thủ."
      },
      {
        "id": "bai-25-m-15",
        "stepNo": "15",
        "assetId": "p138-h07",
        "displayId": "H0822",
        "pdfPage": 138,
        "imgUrl": "/assets/hinh/p138-h07.png",
        "img2xUrl": "/assets/hinh-2x/p138-h07.png",
        "width": 118,
        "height": 321,
        "desc": "CHIÊU 14: Đánh 2 tay chưởng ¡ phía trước, đồng thời đạr thốc chân phải ra sau"
      },
      {
        "id": "bai-25-m-16",
        "stepNo": "16",
        "assetId": "p138-h08",
        "displayId": "H0823",
        "pdfPage": 138,
        "imgUrl": "/assets/hinh/p138-h08.png",
        "img2xUrl": "/assets/hinh-2x/p138-h08.png",
        "width": 115,
        "height": 322,
        "desc": "CHIÊU 16: Xoay người tiến chân phải đồng thời đánh tay phải ra trước, tay trái than thủ."
      },
      {
        "id": "bai-25-m-17",
        "stepNo": "17",
        "assetId": "p139-h01",
        "displayId": "H0824",
        "pdfPage": 139,
        "imgUrl": "/assets/hinh/p139-h01.png",
        "img2xUrl": "/assets/hinh-2x/p139-h01.png",
        "width": 117,
        "height": 324,
        "desc": "CHIÊU 16: Xoay người sang bên trái, tay trái than thủ, tay phải bàng thủ."
      },
      {
        "id": "bai-25-m-18",
        "stepNo": "18",
        "assetId": "p139-h02",
        "displayId": "H0825",
        "pdfPage": 139,
        "imgUrl": "/assets/hinh/p139-h02.png",
        "img2xUrl": "/assets/hinh-2x/p139-h02.png",
        "width": 156,
        "height": 317,
        "desc": "CHIÊU 18: Tiến chân phải lên, bàn tay trái duỗi thăng áp sát vào căng. tay phải, thúc khuỷu tay phải ra trước."
      },
      {
        "id": "bai-25-m-19",
        "stepNo": "19",
        "assetId": "p139-h03",
        "displayId": "H0826",
        "pdfPage": 139,
        "imgUrl": "/assets/hinh/p139-h03.png",
        "img2xUrl": "/assets/hinh-2x/p139-h03.png",
        "width": 226,
        "height": 365,
        "desc": "CHIÊU 18: Đánh lưng nắm đấm phải xuống, bàn tay trái thú."
      },
      {
        "id": "bai-25-m-20",
        "stepNo": "20",
        "assetId": "p139-h04",
        "displayId": "H0827",
        "pdfPage": 139,
        "imgUrl": "/assets/hinh/p139-h04.png",
        "img2xUrl": "/assets/hinh-2x/p139-h04.png",
        "width": 248,
        "height": 354,
        "desc": "CHIÊU 18: Chãn phải đá chéo xuống trước mặt đồng thời tay phải chặt xuống dưới, tay trái đỡ lên trên."
      },
      {
        "id": "bai-25-m-21",
        "stepNo": "21",
        "assetId": "p139-h05",
        "displayId": "H0828",
        "pdfPage": 139,
        "imgUrl": "/assets/hinh/p139-h05.png",
        "img2xUrl": "/assets/hinh-2x/p139-h05.png",
        "width": 143,
        "height": 320,
        "desc": "CHIÊU 20: Xoay người sang bên phải, căng tay phải cùng bàn tay trái vuốt từ trước ra sau, biên thân, mắt nhìn phía trước."
      },
      {
        "id": "bai-25-m-22",
        "stepNo": "22",
        "assetId": "p139-h06",
        "displayId": "H0829",
        "pdfPage": 139,
        "imgUrl": "/assets/hinh/p139-h06.png",
        "img2xUrl": "/assets/hinh-2x/p139-h06.png",
        "width": 260,
        "height": 312,
        "desc": "CHIÊU 18: Đánh lưng nắm đấm phải xuống, bàn tay trái thú."
      },
      {
        "id": "bai-25-m-23",
        "stepNo": "23",
        "assetId": "p139-h07",
        "displayId": "H0830",
        "pdfPage": 139,
        "imgUrl": "/assets/hinh/p139-h07.png",
        "img2xUrl": "/assets/hinh-2x/p139-h07.png",
        "width": 260,
        "height": 365,
        "desc": "CHIÊU 18: Chãn phải đá chéo xuống trước mặt đồng thời tay phải chặt xuống dưới, tay trái đỡ lên trên."
      },
      {
        "id": "bai-25-m-24",
        "stepNo": "24",
        "assetId": "p139-h08",
        "displayId": "H0831",
        "pdfPage": 139,
        "imgUrl": "/assets/hinh/p139-h08.png",
        "img2xUrl": "/assets/hinh-2x/p139-h08.png",
        "width": 182,
        "height": 320,
        "desc": "CHIÊU 22: Tương tự 22.1 nhưng đối xứng sang trái."
      },
      {
        "id": "bai-25-m-25",
        "stepNo": "25",
        "assetId": "p140-h01",
        "displayId": "H0832",
        "pdfPage": 140,
        "imgUrl": "/assets/hinh/p140-h01.png",
        "img2xUrl": "/assets/hinh-2x/p140-h01.png",
        "width": 107,
        "height": 319,
        "desc": "CHIÊU 22: Tiến chân trái lên trước, tay đánh giông 22.2."
      },
      {
        "id": "bai-25-m-26",
        "stepNo": "26",
        "assetId": "p140-h02",
        "displayId": "H0833",
        "pdfPage": 140,
        "imgUrl": "/assets/hinh/p140-h02.png",
        "img2xUrl": "/assets/hinh-2x/p140-h02.png",
        "width": 172,
        "height": 367,
        "desc": "CHIÊU 22: Chân phải tiến lên, đồng thời chưởng phải đánh ra trước, tay trái than thủ."
      },
      {
        "id": "bai-25-m-27",
        "stepNo": "27",
        "assetId": "p140-h03",
        "displayId": "H0834",
        "pdfPage": 140,
        "imgUrl": "/assets/hinh/p140-h03.png",
        "img2xUrl": "/assets/hinh-2x/p140-h03.png",
        "width": 214,
        "height": 366,
        "desc": "CHIÊU 22: Lấy chân trái làm trụ, hoành thoái, xoay 270', đông thời đánh tay chưởng trái ra trước, tay phải thủ."
      },
      {
        "id": "bai-25-m-28",
        "stepNo": "28",
        "assetId": "p140-h04",
        "displayId": "H0835",
        "pdfPage": 140,
        "imgUrl": "/assets/hinh/p140-h04.png",
        "img2xUrl": "/assets/hinh-2x/p140-h04.png",
        "width": 170,
        "height": 322,
        "desc": "CHIÊU 25: Tay trái và phải túm giật về sau, đồng thời gối trái đánh thốc lên."
      },
      {
        "id": "bai-25-m-29",
        "stepNo": "29",
        "assetId": "p140-h05",
        "displayId": "H0836",
        "pdfPage": 140,
        "imgUrl": "/assets/hinh/p140-h05.png",
        "img2xUrl": "/assets/hinh-2x/p140-h05.png",
        "width": 183,
        "height": 314,
        "desc": "CHIÊU 25: Tay trái và phải túm giật về sau, đồng thời gối phải đánh từ phía sau ra trước."
      },
      {
        "id": "bai-25-m-30",
        "stepNo": "30",
        "assetId": "p140-h06",
        "displayId": "H0837",
        "pdfPage": 140,
        "imgUrl": "/assets/hinh/p140-h06.png",
        "img2xUrl": "/assets/hinh-2x/p140-h06.png",
        "width": 141,
        "height": 323,
        "desc": "CHIÊU 30: Quay người sang, tấn kiếm dương."
      },
      {
        "id": "bai-25-m-31",
        "stepNo": "31",
        "assetId": "p140-h07",
        "displayId": "H0838",
        "pdfPage": 140,
        "imgUrl": "/assets/hinh/p140-h07.png",
        "img2xUrl": "/assets/hinh-2x/p140-h07.png",
        "width": 282,
        "height": 210,
        "desc": "CHIÊU 22: Tương tự 22.1 nhưng đối xứng sang trái."
      },
      {
        "id": "bai-25-m-32",
        "stepNo": "32",
        "assetId": "p140-h08",
        "displayId": "H0839",
        "pdfPage": 140,
        "imgUrl": "/assets/hinh/p140-h08.png",
        "img2xUrl": "/assets/hinh-2x/p140-h08.png",
        "width": 130,
        "height": 320,
        "desc": "CHIÊU 22: Lặp lại 22.1,"
      }
    ],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-26",
    "title": "Ngũ Hình quyền tổng hợp",
    "groupId": "ngu-hinh-va-tong-hop",
    "bookOrder": 26,
    "contentType": "practice_or_mixed",
    "pdfPages": [
      141,
      142,
      143,
      144,
      145
    ],
    "pageRange": "Trang PDF 141 – 145",
    "assetCount": 37,
    "assets": [
      {
        "assetId": "p141-h01",
        "displayId": "H0840",
        "pdfPage": 141,
        "imgUrl": "/assets/hinh/p141-h01.png",
        "img2xUrl": "/assets/hinh-2x/p141-h01.png",
        "width": 125,
        "height": 334
      },
      {
        "assetId": "p141-h02",
        "displayId": "H0841",
        "pdfPage": 141,
        "imgUrl": "/assets/hinh/p141-h02.png",
        "img2xUrl": "/assets/hinh-2x/p141-h02.png",
        "width": 131,
        "height": 322
      },
      {
        "assetId": "p141-h03",
        "displayId": "H0842",
        "pdfPage": 141,
        "imgUrl": "/assets/hinh/p141-h03.png",
        "img2xUrl": "/assets/hinh-2x/p141-h03.png",
        "width": 112,
        "height": 335
      },
      {
        "assetId": "p141-h04",
        "displayId": "H0843",
        "pdfPage": 141,
        "imgUrl": "/assets/hinh/p141-h04.png",
        "img2xUrl": "/assets/hinh-2x/p141-h04.png",
        "width": 110,
        "height": 334
      },
      {
        "assetId": "p141-h05",
        "displayId": "H0844",
        "pdfPage": 141,
        "imgUrl": "/assets/hinh/p141-h05.png",
        "img2xUrl": "/assets/hinh-2x/p141-h05.png",
        "width": 111,
        "height": 333
      },
      {
        "assetId": "p141-h06",
        "displayId": "H0845",
        "pdfPage": 141,
        "imgUrl": "/assets/hinh/p141-h06.png",
        "img2xUrl": "/assets/hinh-2x/p141-h06.png",
        "width": 117,
        "height": 334
      },
      {
        "assetId": "p141-h07",
        "displayId": "H0846",
        "pdfPage": 141,
        "imgUrl": "/assets/hinh/p141-h07.png",
        "img2xUrl": "/assets/hinh-2x/p141-h07.png",
        "width": 127,
        "height": 334
      },
      {
        "assetId": "p141-h08",
        "displayId": "H0847",
        "pdfPage": 141,
        "imgUrl": "/assets/hinh/p141-h08.png",
        "img2xUrl": "/assets/hinh-2x/p141-h08.png",
        "width": 129,
        "height": 333
      },
      {
        "assetId": "p141-h09",
        "displayId": "H0848",
        "pdfPage": 141,
        "imgUrl": "/assets/hinh/p141-h09.png",
        "img2xUrl": "/assets/hinh-2x/p141-h09.png",
        "width": 116,
        "height": 334
      },
      {
        "assetId": "p142-h01",
        "displayId": "H0849",
        "pdfPage": 142,
        "imgUrl": "/assets/hinh/p142-h01.png",
        "img2xUrl": "/assets/hinh-2x/p142-h01.png",
        "width": 123,
        "height": 334
      },
      {
        "assetId": "p142-h02",
        "displayId": "H0850",
        "pdfPage": 142,
        "imgUrl": "/assets/hinh/p142-h02.png",
        "img2xUrl": "/assets/hinh-2x/p142-h02.png",
        "width": 124,
        "height": 334
      },
      {
        "assetId": "p142-h03",
        "displayId": "H0851",
        "pdfPage": 142,
        "imgUrl": "/assets/hinh/p142-h03.png",
        "img2xUrl": "/assets/hinh-2x/p142-h03.png",
        "width": 130,
        "height": 335
      },
      {
        "assetId": "p142-h04",
        "displayId": "H0852",
        "pdfPage": 142,
        "imgUrl": "/assets/hinh/p142-h04.png",
        "img2xUrl": "/assets/hinh-2x/p142-h04.png",
        "width": 127,
        "height": 335
      },
      {
        "assetId": "p142-h05",
        "displayId": "H0853",
        "pdfPage": 142,
        "imgUrl": "/assets/hinh/p142-h05.png",
        "img2xUrl": "/assets/hinh-2x/p142-h05.png",
        "width": 129,
        "height": 334
      },
      {
        "assetId": "p142-h06",
        "displayId": "H0854",
        "pdfPage": 142,
        "imgUrl": "/assets/hinh/p142-h06.png",
        "img2xUrl": "/assets/hinh-2x/p142-h06.png",
        "width": 126,
        "height": 332
      },
      {
        "assetId": "p142-h07",
        "displayId": "H0855",
        "pdfPage": 142,
        "imgUrl": "/assets/hinh/p142-h07.png",
        "img2xUrl": "/assets/hinh-2x/p142-h07.png",
        "width": 126,
        "height": 335
      },
      {
        "assetId": "p142-h08",
        "displayId": "H0856",
        "pdfPage": 142,
        "imgUrl": "/assets/hinh/p142-h08.png",
        "img2xUrl": "/assets/hinh-2x/p142-h08.png",
        "width": 126,
        "height": 333
      },
      {
        "assetId": "p142-h09",
        "displayId": "H0857",
        "pdfPage": 142,
        "imgUrl": "/assets/hinh/p142-h09.png",
        "img2xUrl": "/assets/hinh-2x/p142-h09.png",
        "width": 121,
        "height": 336
      },
      {
        "assetId": "p143-h01",
        "displayId": "H0858",
        "pdfPage": 143,
        "imgUrl": "/assets/hinh/p143-h01.png",
        "img2xUrl": "/assets/hinh-2x/p143-h01.png",
        "width": 130,
        "height": 334
      },
      {
        "assetId": "p143-h02",
        "displayId": "H0859",
        "pdfPage": 143,
        "imgUrl": "/assets/hinh/p143-h02.png",
        "img2xUrl": "/assets/hinh-2x/p143-h02.png",
        "width": 123,
        "height": 335
      },
      {
        "assetId": "p143-h03",
        "displayId": "H0860",
        "pdfPage": 143,
        "imgUrl": "/assets/hinh/p143-h03.png",
        "img2xUrl": "/assets/hinh-2x/p143-h03.png",
        "width": 135,
        "height": 333
      },
      {
        "assetId": "p143-h04",
        "displayId": "H0861",
        "pdfPage": 143,
        "imgUrl": "/assets/hinh/p143-h04.png",
        "img2xUrl": "/assets/hinh-2x/p143-h04.png",
        "width": 143,
        "height": 336
      },
      {
        "assetId": "p143-h05",
        "displayId": "H0862",
        "pdfPage": 143,
        "imgUrl": "/assets/hinh/p143-h05.png",
        "img2xUrl": "/assets/hinh-2x/p143-h05.png",
        "width": 134,
        "height": 336
      },
      {
        "assetId": "p143-h06",
        "displayId": "H0863",
        "pdfPage": 143,
        "imgUrl": "/assets/hinh/p143-h06.png",
        "img2xUrl": "/assets/hinh-2x/p143-h06.png",
        "width": 140,
        "height": 332
      },
      {
        "assetId": "p143-h07",
        "displayId": "H0864",
        "pdfPage": 143,
        "imgUrl": "/assets/hinh/p143-h07.png",
        "img2xUrl": "/assets/hinh-2x/p143-h07.png",
        "width": 137,
        "height": 335
      },
      {
        "assetId": "p143-h08",
        "displayId": "H0865",
        "pdfPage": 143,
        "imgUrl": "/assets/hinh/p143-h08.png",
        "img2xUrl": "/assets/hinh-2x/p143-h08.png",
        "width": 171,
        "height": 334
      },
      {
        "assetId": "p143-h09",
        "displayId": "H0866",
        "pdfPage": 143,
        "imgUrl": "/assets/hinh/p143-h09.png",
        "img2xUrl": "/assets/hinh-2x/p143-h09.png",
        "width": 161,
        "height": 336
      },
      {
        "assetId": "p144-h01",
        "displayId": "H0867",
        "pdfPage": 144,
        "imgUrl": "/assets/hinh/p144-h01.png",
        "img2xUrl": "/assets/hinh-2x/p144-h01.png",
        "width": 138,
        "height": 334
      },
      {
        "assetId": "p144-h02",
        "displayId": "H0868",
        "pdfPage": 144,
        "imgUrl": "/assets/hinh/p144-h02.png",
        "img2xUrl": "/assets/hinh-2x/p144-h02.png",
        "width": 132,
        "height": 336
      },
      {
        "assetId": "p144-h03",
        "displayId": "H0869",
        "pdfPage": 144,
        "imgUrl": "/assets/hinh/p144-h03.png",
        "img2xUrl": "/assets/hinh-2x/p144-h03.png",
        "width": 122,
        "height": 335
      },
      {
        "assetId": "p144-h04",
        "displayId": "H0870",
        "pdfPage": 144,
        "imgUrl": "/assets/hinh/p144-h04.png",
        "img2xUrl": "/assets/hinh-2x/p144-h04.png",
        "width": 169,
        "height": 333
      },
      {
        "assetId": "p144-h05",
        "displayId": "H0871",
        "pdfPage": 144,
        "imgUrl": "/assets/hinh/p144-h05.png",
        "img2xUrl": "/assets/hinh-2x/p144-h05.png",
        "width": 280,
        "height": 237
      },
      {
        "assetId": "p144-h06",
        "displayId": "H0872",
        "pdfPage": 144,
        "imgUrl": "/assets/hinh/p144-h06.png",
        "img2xUrl": "/assets/hinh-2x/p144-h06.png",
        "width": 235,
        "height": 279
      },
      {
        "assetId": "p144-h07",
        "displayId": "H0873",
        "pdfPage": 144,
        "imgUrl": "/assets/hinh/p144-h07.png",
        "img2xUrl": "/assets/hinh-2x/p144-h07.png",
        "width": 137,
        "height": 334
      },
      {
        "assetId": "p145-h01",
        "displayId": "H0874",
        "pdfPage": 145,
        "imgUrl": "/assets/hinh/p145-h01.png",
        "img2xUrl": "/assets/hinh-2x/p145-h01.png",
        "width": 133,
        "height": 335
      },
      {
        "assetId": "p145-h02",
        "displayId": "H0875",
        "pdfPage": 145,
        "imgUrl": "/assets/hinh/p145-h02.png",
        "img2xUrl": "/assets/hinh-2x/p145-h02.png",
        "width": 124,
        "height": 335
      },
      {
        "assetId": "p145-h03",
        "displayId": "H0876",
        "pdfPage": 145,
        "imgUrl": "/assets/hinh/p145-h03.png",
        "img2xUrl": "/assets/hinh-2x/p145-h03.png",
        "width": 138,
        "height": 335
      }
    ],
    "motions": [
      {
        "id": "bai-26-m-1",
        "stepNo": "1",
        "assetId": "p141-h01",
        "displayId": "H0840",
        "pdfPage": 141,
        "imgUrl": "/assets/hinh/p141-h01.png",
        "img2xUrl": "/assets/hinh-2x/p141-h01.png",
        "width": 125,
        "height": 334,
        "desc": "CHIÊU 1: Tấn kiềm dương, hai tay di chuyền thành hai đường tròn đối xứng nhau từ trong ra ngoài. Thực hiện 3 lần."
      },
      {
        "id": "bai-26-m-2",
        "stepNo": "2",
        "assetId": "p141-h02",
        "displayId": "H0841",
        "pdfPage": 141,
        "imgUrl": "/assets/hinh/p141-h02.png",
        "img2xUrl": "/assets/hinh-2x/p141-h02.png",
        "width": 131,
        "height": 322,
        "desc": "CHIÊU 1: Hai tay lặp lại 1.1 nhưng đổi ngược chiều di chuyền."
      },
      {
        "id": "bai-26-m-3",
        "stepNo": "3",
        "assetId": "p141-h03",
        "displayId": "H0842",
        "pdfPage": 141,
        "imgUrl": "/assets/hinh/p141-h03.png",
        "img2xUrl": "/assets/hinh-2x/p141-h03.png",
        "width": 112,
        "height": 335,
        "desc": "CHIÊU 2: Tiến chân phải lên trước 1 bước, hai bàn tay chém ngang, tay phải ngửa, tay trái sau úp."
      },
      {
        "id": "bai-26-m-4",
        "stepNo": "4",
        "assetId": "p141-h04",
        "displayId": "H0843",
        "pdfPage": 141,
        "imgUrl": "/assets/hinh/p141-h04.png",
        "img2xUrl": "/assets/hinh-2x/p141-h04.png",
        "width": 110,
        "height": 334,
        "desc": "CHIÊU 2: Tiến tiếp chân trái lên trước, lặp lại động tác 2.1, đổi tay phải úp, tay trái ngửa."
      },
      {
        "id": "bai-26-m-5",
        "stepNo": "5",
        "assetId": "p141-h05",
        "displayId": "H0844",
        "pdfPage": 141,
        "imgUrl": "/assets/hinh/p141-h05.png",
        "img2xUrl": "/assets/hinh-2x/p141-h05.png",
        "width": 111,
        "height": 333,
        "desc": "CHIÊU 5: Lùi 1 bước, hai bàn tay cùng vuốt về phía sau."
      },
      {
        "id": "bai-26-m-6",
        "stepNo": "6",
        "assetId": "p141-h06",
        "displayId": "H0845",
        "pdfPage": 141,
        "imgUrl": "/assets/hinh/p141-h06.png",
        "img2xUrl": "/assets/hinh-2x/p141-h06.png",
        "width": 117,
        "height": 334,
        "desc": "CHIÊU 5: Tiến chân phải 1 bước, xỉa tay phải chéo lên."
      },
      {
        "id": "bai-26-m-7",
        "stepNo": "7",
        "assetId": "p141-h07",
        "displayId": "H0846",
        "pdfPage": 141,
        "imgUrl": "/assets/hinh/p141-h07.png",
        "img2xUrl": "/assets/hinh-2x/p141-h07.png",
        "width": 127,
        "height": 334,
        "desc": "CHIÊU 5: Tiến chân trái theo chân phải xỉa tay trái (tay phải thu về)."
      },
      {
        "id": "bai-26-m-8",
        "stepNo": "8",
        "assetId": "p141-h08",
        "displayId": "H0847",
        "pdfPage": 141,
        "imgUrl": "/assets/hinh/p141-h08.png",
        "img2xUrl": "/assets/hinh-2x/p141-h08.png",
        "width": 129,
        "height": 333,
        "desc": "CHIÊU 4: Chân phải bước chéo về phía sau chân trái, cánh tay phải chém thắng xuống cánh tay trái đỡ."
      },
      {
        "id": "bai-26-m-9",
        "stepNo": "9",
        "assetId": "p141-h09",
        "displayId": "H0848",
        "pdfPage": 141,
        "imgUrl": "/assets/hinh/p141-h09.png",
        "img2xUrl": "/assets/hinh-2x/p141-h09.png",
        "width": 116,
        "height": 334,
        "desc": "CHIÊU 5: Lùi chân trái ra sau, hai tay chưởng hướng vào nhau, quay đuổi nhau 3 vòng từ sau ra trước."
      },
      {
        "id": "bai-26-m-10",
        "stepNo": "10",
        "assetId": "p142-h01",
        "displayId": "H0849",
        "pdfPage": 142,
        "imgUrl": "/assets/hinh/p142-h01.png",
        "img2xUrl": "/assets/hinh-2x/p142-h01.png",
        "width": 123,
        "height": 334,
        "desc": "CHIÊU 6: Tiến chân phải lên trước một bước, đánh điệp chưởng từ dưới lên trên."
      },
      {
        "id": "bai-26-m-11",
        "stepNo": "11",
        "assetId": "p142-h02",
        "displayId": "H0850",
        "pdfPage": 142,
        "imgUrl": "/assets/hinh/p142-h02.png",
        "img2xUrl": "/assets/hinh-2x/p142-h02.png",
        "width": 124,
        "height": 334,
        "desc": "CHIÊU 5: Lùi chân trái ra sau, hai tay chưởng hướng vào nhau, quay đuổi nhau 3 vòng từ sau ra trước."
      },
      {
        "id": "bai-26-m-12",
        "stepNo": "12",
        "assetId": "p142-h03",
        "displayId": "H0851",
        "pdfPage": 142,
        "imgUrl": "/assets/hinh/p142-h03.png",
        "img2xUrl": "/assets/hinh-2x/p142-h03.png",
        "width": 130,
        "height": 335,
        "desc": "CHIÊU 6: Tay phải chuyền thành hình Long vô từ trên xuống dưới"
      },
      {
        "id": "bai-26-m-13",
        "stepNo": "13",
        "assetId": "p142-h04",
        "displayId": "H0852",
        "pdfPage": 142,
        "imgUrl": "/assets/hinh/p142-h04.png",
        "img2xUrl": "/assets/hinh-2x/p142-h04.png",
        "width": 127,
        "height": 335,
        "desc": "CHIÊU 6: Tiến chân phải lên trước một bước, đánh điệp chưởng từ dưới lên trên."
      },
      {
        "id": "bai-26-m-14",
        "stepNo": "14",
        "assetId": "p142-h05",
        "displayId": "H0853",
        "pdfPage": 142,
        "imgUrl": "/assets/hinh/p142-h05.png",
        "img2xUrl": "/assets/hinh-2x/p142-h05.png",
        "width": 129,
        "height": 334,
        "desc": "CHIÊU 6: Tay phải chuyền thành hình Long vô từ trên xuống dưới"
      },
      {
        "id": "bai-26-m-15",
        "stepNo": "15",
        "assetId": "p142-h06",
        "displayId": "H0854",
        "pdfPage": 142,
        "imgUrl": "/assets/hinh/p142-h06.png",
        "img2xUrl": "/assets/hinh-2x/p142-h06.png",
        "width": 126,
        "height": 332,
        "desc": "CHIÊU 6: Tay phải giữ nguyên hình Long vô từ bên phải sang trái."
      },
      {
        "id": "bai-26-m-16",
        "stepNo": "16",
        "assetId": "p142-h07",
        "displayId": "H0855",
        "pdfPage": 142,
        "imgUrl": "/assets/hinh/p142-h07.png",
        "img2xUrl": "/assets/hinh-2x/p142-h07.png",
        "width": 126,
        "height": 335,
        "desc": "CHIÊU 9: Xoay người ra sau, chân trái trước, 2 bàn tay hướng vào nhau (hình Báo) đánh thẳng về phía trước."
      },
      {
        "id": "bai-26-m-17",
        "stepNo": "17",
        "assetId": "p142-h08",
        "displayId": "H0856",
        "pdfPage": 142,
        "imgUrl": "/assets/hinh/p142-h08.png",
        "img2xUrl": "/assets/hinh-2x/p142-h08.png",
        "width": 126,
        "height": 333,
        "desc": "CHIÊU 9: Úp 2 tay đánh ra trước."
      },
      {
        "id": "bai-26-m-18",
        "stepNo": "18",
        "assetId": "p142-h09",
        "displayId": "H0857",
        "pdfPage": 142,
        "imgUrl": "/assets/hinh/p142-h09.png",
        "img2xUrl": "/assets/hinh-2x/p142-h09.png",
        "width": 121,
        "height": 336,
        "desc": "CHIÊU 10: Lùi chân trái ra sau, hai tay Hổ, tay trái gạt đỡ trên mặt đồng thời tay phải đấm thẳng phía trước."
      },
      {
        "id": "bai-26-m-19",
        "stepNo": "19",
        "assetId": "p143-h01",
        "displayId": "H0858",
        "pdfPage": 143,
        "imgUrl": "/assets/hinh/p143-h01.png",
        "img2xUrl": "/assets/hinh-2x/p143-h01.png",
        "width": 130,
        "height": 334,
        "desc": "CHIÊU 8: Tiến chân trái 1 bước, hai bàn tay tiếp tục đặt chéo nhau và đánh về phía trước, đổi tay trái đặt trên."
      },
      {
        "id": "bai-26-m-20",
        "stepNo": "20",
        "assetId": "p143-h02",
        "displayId": "H0859",
        "pdfPage": 143,
        "imgUrl": "/assets/hinh/p143-h02.png",
        "img2xUrl": "/assets/hinh-2x/p143-h02.png",
        "width": 123,
        "height": 335,
        "desc": "CHIÊU 8: Tiến chân phải lên 1 bước, lặp lại động tác 8.1."
      },
      {
        "id": "bai-26-m-21",
        "stepNo": "21",
        "assetId": "p143-h03",
        "displayId": "H0860",
        "pdfPage": 143,
        "imgUrl": "/assets/hinh/p143-h03.png",
        "img2xUrl": "/assets/hinh-2x/p143-h03.png",
        "width": 135,
        "height": 333,
        "desc": "CHIÊU 12: Bước chân trái thành tấn kiềm dương, tay phải gạt đỡ từ dưới lên, bàn tay hình Hồ đồng thời tay trái đánh quyền chéo từ trên xuống."
      },
      {
        "id": "bai-26-m-22",
        "stepNo": "22",
        "assetId": "p143-h04",
        "displayId": "H0861",
        "pdfPage": 143,
        "imgUrl": "/assets/hinh/p143-h04.png",
        "img2xUrl": "/assets/hinh-2x/p143-h04.png",
        "width": 143,
        "height": 336,
        "desc": "CHIÊU 9: Úp 2 tay đánh ra trước."
      },
      {
        "id": "bai-26-m-23",
        "stepNo": "23",
        "assetId": "p143-h05",
        "displayId": "H0862",
        "pdfPage": 143,
        "imgUrl": "/assets/hinh/p143-h05.png",
        "img2xUrl": "/assets/hinh-2x/p143-h05.png",
        "width": 134,
        "height": 336,
        "desc": "CHIÊU 9: Tiến chân phải lên trước, tay đánh theo động tác 9.1, 9.2."
      },
      {
        "id": "bai-26-m-24",
        "stepNo": "24",
        "assetId": "p143-h06",
        "displayId": "H0863",
        "pdfPage": 143,
        "imgUrl": "/assets/hinh/p143-h06.png",
        "img2xUrl": "/assets/hinh-2x/p143-h06.png",
        "width": 140,
        "height": 332,
        "desc": "CHIÊU 13: Đấm thẳng ra trước bằng tay phải, đồng thời giật tay trái về phía sau sát nách."
      },
      {
        "id": "bai-26-m-25",
        "stepNo": "25",
        "assetId": "p143-h07",
        "displayId": "H0864",
        "pdfPage": 143,
        "imgUrl": "/assets/hinh/p143-h07.png",
        "img2xUrl": "/assets/hinh-2x/p143-h07.png",
        "width": 137,
        "height": 335,
        "desc": "CHIÊU 10: Lùi chân trái ra sau, hai tay Hổ, tay trái gạt đỡ trên mặt đồng thời tay phải đấm thẳng phía trước."
      },
      {
        "id": "bai-26-m-26",
        "stepNo": "26",
        "assetId": "p143-h08",
        "displayId": "H0865",
        "pdfPage": 143,
        "imgUrl": "/assets/hinh/p143-h08.png",
        "img2xUrl": "/assets/hinh-2x/p143-h08.png",
        "width": 171,
        "height": 334,
        "desc": "CHIÊU 14: Thúc chỗ phải về phía trước, tay trái thủ."
      },
      {
        "id": "bai-26-m-27",
        "stepNo": "27",
        "assetId": "p143-h09",
        "displayId": "H0866",
        "pdfPage": 143,
        "imgUrl": "/assets/hinh/p143-h09.png",
        "img2xUrl": "/assets/hinh-2x/p143-h09.png",
        "width": 161,
        "height": 336,
        "desc": "CHIÊU 11: Tiến chân phải lên một bước, kéo chân trái theo, đánh 2 quyền về phía trước, tay phải trên."
      },
      {
        "id": "bai-26-m-28",
        "stepNo": "28",
        "assetId": "p144-h01",
        "displayId": "H0867",
        "pdfPage": 144,
        "imgUrl": "/assets/hinh/p144-h01.png",
        "img2xUrl": "/assets/hinh-2x/p144-h01.png",
        "width": 138,
        "height": 334,
        "desc": "CHIÊU 11: Tiến chân trái lên 1 bước, tay đánh như động tác 11.1 đôi tay trên, dưới."
      },
      {
        "id": "bai-26-m-29",
        "stepNo": "29",
        "assetId": "p144-h02",
        "displayId": "H0868",
        "pdfPage": 144,
        "imgUrl": "/assets/hinh/p144-h02.png",
        "img2xUrl": "/assets/hinh-2x/p144-h02.png",
        "width": 132,
        "height": 336,
        "desc": "CHIÊU 11: Tiến chân phải lên 1 bước, lặp lại động tác 11.1."
      },
      {
        "id": "bai-26-m-30",
        "stepNo": "30",
        "assetId": "p144-h03",
        "displayId": "H0869",
        "pdfPage": 144,
        "imgUrl": "/assets/hinh/p144-h03.png",
        "img2xUrl": "/assets/hinh-2x/p144-h03.png",
        "width": 122,
        "height": 335,
        "desc": "CHIÊU 16: Xoay ngược người lại đánh chỏ như động tác 16.1. ì"
      },
      {
        "id": "bai-26-m-31",
        "stepNo": "31",
        "assetId": "p144-h04",
        "displayId": "H0870",
        "pdfPage": 144,
        "imgUrl": "/assets/hinh/p144-h04.png",
        "img2xUrl": "/assets/hinh-2x/p144-h04.png",
        "width": 169,
        "height": 333,
        "desc": "CHIÊU 12: Như động tác 12.1 nhưng đôi xứng sang trái."
      },
      {
        "id": "bai-26-m-32",
        "stepNo": "32",
        "assetId": "p144-h05",
        "displayId": "H0871",
        "pdfPage": 144,
        "imgUrl": "/assets/hinh/p144-h05.png",
        "img2xUrl": "/assets/hinh-2x/p144-h05.png",
        "width": 280,
        "height": 237,
        "desc": "CHIÊU 12: Lặp lại động tác 12.1."
      },
      {
        "id": "bai-26-m-33",
        "stepNo": "33",
        "assetId": "p144-h06",
        "displayId": "H0872",
        "pdfPage": 144,
        "imgUrl": "/assets/hinh/p144-h06.png",
        "img2xUrl": "/assets/hinh-2x/p144-h06.png",
        "width": 235,
        "height": 279,
        "desc": "CHIÊU 13: Đấm thẳng ra trước bằng tay phải, đồng thời giật tay trái về phía sau sát nách."
      },
      {
        "id": "bai-26-m-34",
        "stepNo": "34",
        "assetId": "p144-h07",
        "displayId": "H0873",
        "pdfPage": 144,
        "imgUrl": "/assets/hinh/p144-h07.png",
        "img2xUrl": "/assets/hinh-2x/p144-h07.png",
        "width": 137,
        "height": 334,
        "desc": "CHIÊU 13: Như động tác 13.1 đổi tay đấm."
      },
      {
        "id": "bai-26-m-35",
        "stepNo": "35",
        "assetId": "p145-h01",
        "displayId": "H0874",
        "pdfPage": 145,
        "imgUrl": "/assets/hinh/p145-h01.png",
        "img2xUrl": "/assets/hinh-2x/p145-h01.png",
        "width": 133,
        "height": 335,
        "desc": "CHIÊU 22: Tay phải đánh cạnh ngoài cổ tay sang phải."
      },
      {
        "id": "bai-26-m-36",
        "stepNo": "36",
        "assetId": "p145-h02",
        "displayId": "H0875",
        "pdfPage": 145,
        "imgUrl": "/assets/hinh/p145-h02.png",
        "img2xUrl": "/assets/hinh-2x/p145-h02.png",
        "width": 124,
        "height": 335,
        "desc": "CHIÊU 22: Tay phải xỉa ra trước."
      },
      {
        "id": "bai-26-m-37",
        "stepNo": "37",
        "assetId": "p145-h03",
        "displayId": "H0876",
        "pdfPage": 145,
        "imgUrl": "/assets/hinh/p145-h03.png",
        "img2xUrl": "/assets/hinh-2x/p145-h03.png",
        "width": 138,
        "height": 335,
        "desc": "CHIÊU 24: Như chiêu 21."
      }
    ],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-27",
    "title": "Chương II — Linh giác",
    "groupId": "linh-giac",
    "bookOrder": 27,
    "contentType": "reading",
    "pdfPages": [
      146,
      147,
      148,
      149,
      150,
      151,
      152,
      153,
      154,
      155,
      156,
      157,
      158,
      159,
      160
    ],
    "pageRange": "Trang PDF 146 – 160",
    "assetCount": 59,
    "assets": [
      {
        "assetId": "p146-h01",
        "displayId": "H0877",
        "pdfPage": 146,
        "imgUrl": "/assets/hinh/p146-h01.png",
        "img2xUrl": "/assets/hinh-2x/p146-h01.png",
        "width": 556,
        "height": 742
      },
      {
        "assetId": "p147-h01",
        "displayId": "H0878",
        "pdfPage": 147,
        "imgUrl": "/assets/hinh/p147-h01.png",
        "img2xUrl": "/assets/hinh-2x/p147-h01.png",
        "width": 469,
        "height": 167
      },
      {
        "assetId": "p148-h01",
        "displayId": "H0879",
        "pdfPage": 148,
        "imgUrl": "/assets/hinh/p148-h01.png",
        "img2xUrl": "/assets/hinh-2x/p148-h01.png",
        "width": 561,
        "height": 564
      },
      {
        "assetId": "p148-h02",
        "displayId": "H0880",
        "pdfPage": 148,
        "imgUrl": "/assets/hinh/p148-h02.png",
        "img2xUrl": "/assets/hinh-2x/p148-h02.png",
        "width": 560,
        "height": 719
      },
      {
        "assetId": "p149-h01",
        "displayId": "H0881",
        "pdfPage": 149,
        "imgUrl": "/assets/hinh/p149-h01.png",
        "img2xUrl": "/assets/hinh-2x/p149-h01.png",
        "width": 891,
        "height": 770
      },
      {
        "assetId": "p150-h01",
        "displayId": "H0882",
        "pdfPage": 150,
        "imgUrl": "/assets/hinh/p150-h01.png",
        "img2xUrl": "/assets/hinh-2x/p150-h01.png",
        "width": 578,
        "height": 769
      },
      {
        "assetId": "p151-h01",
        "displayId": "H0883",
        "pdfPage": 151,
        "imgUrl": "/assets/hinh/p151-h01.png",
        "img2xUrl": "/assets/hinh-2x/p151-h01.png",
        "width": 581,
        "height": 803
      },
      {
        "assetId": "p152-h01",
        "displayId": "H0884",
        "pdfPage": 152,
        "imgUrl": "/assets/hinh/p152-h01.png",
        "img2xUrl": "/assets/hinh-2x/p152-h01.png",
        "width": 976,
        "height": 830
      },
      {
        "assetId": "p153-h01",
        "displayId": "H0885",
        "pdfPage": 153,
        "imgUrl": "/assets/hinh/p153-h01.png",
        "img2xUrl": "/assets/hinh-2x/p153-h01.png",
        "width": 224,
        "height": 311
      },
      {
        "assetId": "p153-h02",
        "displayId": "H0886",
        "pdfPage": 153,
        "imgUrl": "/assets/hinh/p153-h02.png",
        "img2xUrl": "/assets/hinh-2x/p153-h02.png",
        "width": 228,
        "height": 311
      },
      {
        "assetId": "p153-h03",
        "displayId": "H0887",
        "pdfPage": 153,
        "imgUrl": "/assets/hinh/p153-h03.png",
        "img2xUrl": "/assets/hinh-2x/p153-h03.png",
        "width": 221,
        "height": 308
      },
      {
        "assetId": "p153-h04",
        "displayId": "H0888",
        "pdfPage": 153,
        "imgUrl": "/assets/hinh/p153-h04.png",
        "img2xUrl": "/assets/hinh-2x/p153-h04.png",
        "width": 222,
        "height": 310
      },
      {
        "assetId": "p153-h05",
        "displayId": "H0889",
        "pdfPage": 153,
        "imgUrl": "/assets/hinh/p153-h05.png",
        "img2xUrl": "/assets/hinh-2x/p153-h05.png",
        "width": 238,
        "height": 310
      },
      {
        "assetId": "p153-h06",
        "displayId": "H0890",
        "pdfPage": 153,
        "imgUrl": "/assets/hinh/p153-h06.png",
        "img2xUrl": "/assets/hinh-2x/p153-h06.png",
        "width": 224,
        "height": 307
      },
      {
        "assetId": "p154-h01",
        "displayId": "H0891",
        "pdfPage": 154,
        "imgUrl": "/assets/hinh/p154-h01.png",
        "img2xUrl": "/assets/hinh-2x/p154-h01.png",
        "width": 230,
        "height": 312
      },
      {
        "assetId": "p154-h02",
        "displayId": "H0892",
        "pdfPage": 154,
        "imgUrl": "/assets/hinh/p154-h02.png",
        "img2xUrl": "/assets/hinh-2x/p154-h02.png",
        "width": 213,
        "height": 312
      },
      {
        "assetId": "p154-h03",
        "displayId": "H0893",
        "pdfPage": 154,
        "imgUrl": "/assets/hinh/p154-h03.png",
        "img2xUrl": "/assets/hinh-2x/p154-h03.png",
        "width": 232,
        "height": 314
      },
      {
        "assetId": "p154-h04",
        "displayId": "H0894",
        "pdfPage": 154,
        "imgUrl": "/assets/hinh/p154-h04.png",
        "img2xUrl": "/assets/hinh-2x/p154-h04.png",
        "width": 232,
        "height": 314
      },
      {
        "assetId": "p154-h05",
        "displayId": "H0895",
        "pdfPage": 154,
        "imgUrl": "/assets/hinh/p154-h05.png",
        "img2xUrl": "/assets/hinh-2x/p154-h05.png",
        "width": 225,
        "height": 311
      },
      {
        "assetId": "p154-h06",
        "displayId": "H0896",
        "pdfPage": 154,
        "imgUrl": "/assets/hinh/p154-h06.png",
        "img2xUrl": "/assets/hinh-2x/p154-h06.png",
        "width": 250,
        "height": 310
      },
      {
        "assetId": "p155-h01",
        "displayId": "H0897",
        "pdfPage": 155,
        "imgUrl": "/assets/hinh/p155-h01.png",
        "img2xUrl": "/assets/hinh-2x/p155-h01.png",
        "width": 252,
        "height": 305
      },
      {
        "assetId": "p155-h02",
        "displayId": "H0898",
        "pdfPage": 155,
        "imgUrl": "/assets/hinh/p155-h02.png",
        "img2xUrl": "/assets/hinh-2x/p155-h02.png",
        "width": 284,
        "height": 305
      },
      {
        "assetId": "p155-h03",
        "displayId": "H0899",
        "pdfPage": 155,
        "imgUrl": "/assets/hinh/p155-h03.png",
        "img2xUrl": "/assets/hinh-2x/p155-h03.png",
        "width": 274,
        "height": 305
      },
      {
        "assetId": "p155-h04",
        "displayId": "H0900",
        "pdfPage": 155,
        "imgUrl": "/assets/hinh/p155-h04.png",
        "img2xUrl": "/assets/hinh-2x/p155-h04.png",
        "width": 237,
        "height": 352
      },
      {
        "assetId": "p155-h05",
        "displayId": "H0901",
        "pdfPage": 155,
        "imgUrl": "/assets/hinh/p155-h05.png",
        "img2xUrl": "/assets/hinh-2x/p155-h05.png",
        "width": 223,
        "height": 304
      },
      {
        "assetId": "p156-h01",
        "displayId": "H0902",
        "pdfPage": 156,
        "imgUrl": "/assets/hinh/p156-h01.png",
        "img2xUrl": "/assets/hinh-2x/p156-h01.png",
        "width": 225,
        "height": 306
      },
      {
        "assetId": "p156-h02",
        "displayId": "H0903",
        "pdfPage": 156,
        "imgUrl": "/assets/hinh/p156-h02.png",
        "img2xUrl": "/assets/hinh-2x/p156-h02.png",
        "width": 234,
        "height": 305
      },
      {
        "assetId": "p156-h03",
        "displayId": "H0904",
        "pdfPage": 156,
        "imgUrl": "/assets/hinh/p156-h03.png",
        "img2xUrl": "/assets/hinh-2x/p156-h03.png",
        "width": 252,
        "height": 307
      },
      {
        "assetId": "p156-h04",
        "displayId": "H0905",
        "pdfPage": 156,
        "imgUrl": "/assets/hinh/p156-h04.png",
        "img2xUrl": "/assets/hinh-2x/p156-h04.png",
        "width": 245,
        "height": 306
      },
      {
        "assetId": "p156-h05",
        "displayId": "H0906",
        "pdfPage": 156,
        "imgUrl": "/assets/hinh/p156-h05.png",
        "img2xUrl": "/assets/hinh-2x/p156-h05.png",
        "width": 251,
        "height": 306
      },
      {
        "assetId": "p156-h06",
        "displayId": "H0907",
        "pdfPage": 156,
        "imgUrl": "/assets/hinh/p156-h06.png",
        "img2xUrl": "/assets/hinh-2x/p156-h06.png",
        "width": 258,
        "height": 307
      },
      {
        "assetId": "p156-h07",
        "displayId": "H0908",
        "pdfPage": 156,
        "imgUrl": "/assets/hinh/p156-h07.png",
        "img2xUrl": "/assets/hinh-2x/p156-h07.png",
        "width": 228,
        "height": 304
      },
      {
        "assetId": "p157-h01",
        "displayId": "H0909",
        "pdfPage": 157,
        "imgUrl": "/assets/hinh/p157-h01.png",
        "img2xUrl": "/assets/hinh-2x/p157-h01.png",
        "width": 212,
        "height": 317
      },
      {
        "assetId": "p157-h02",
        "displayId": "H0910",
        "pdfPage": 157,
        "imgUrl": "/assets/hinh/p157-h02.png",
        "img2xUrl": "/assets/hinh-2x/p157-h02.png",
        "width": 210,
        "height": 315
      },
      {
        "assetId": "p157-h03",
        "displayId": "H0911",
        "pdfPage": 157,
        "imgUrl": "/assets/hinh/p157-h03.png",
        "img2xUrl": "/assets/hinh-2x/p157-h03.png",
        "width": 219,
        "height": 312
      },
      {
        "assetId": "p157-h04",
        "displayId": "H0912",
        "pdfPage": 157,
        "imgUrl": "/assets/hinh/p157-h04.png",
        "img2xUrl": "/assets/hinh-2x/p157-h04.png",
        "width": 246,
        "height": 310
      },
      {
        "assetId": "p157-h05",
        "displayId": "H0913",
        "pdfPage": 157,
        "imgUrl": "/assets/hinh/p157-h05.png",
        "img2xUrl": "/assets/hinh-2x/p157-h05.png",
        "width": 218,
        "height": 318
      },
      {
        "assetId": "p157-h06",
        "displayId": "H0914",
        "pdfPage": 157,
        "imgUrl": "/assets/hinh/p157-h06.png",
        "img2xUrl": "/assets/hinh-2x/p157-h06.png",
        "width": 239,
        "height": 318
      },
      {
        "assetId": "p157-h07",
        "displayId": "H0915",
        "pdfPage": 157,
        "imgUrl": "/assets/hinh/p157-h07.png",
        "img2xUrl": "/assets/hinh-2x/p157-h07.png",
        "width": 223,
        "height": 312
      },
      {
        "assetId": "p158-h01",
        "displayId": "H0916",
        "pdfPage": 158,
        "imgUrl": "/assets/hinh/p158-h01.png",
        "img2xUrl": "/assets/hinh-2x/p158-h01.png",
        "width": 245,
        "height": 303
      },
      {
        "assetId": "p158-h02",
        "displayId": "H0917",
        "pdfPage": 158,
        "imgUrl": "/assets/hinh/p158-h02.png",
        "img2xUrl": "/assets/hinh-2x/p158-h02.png",
        "width": 264,
        "height": 305
      },
      {
        "assetId": "p158-h03",
        "displayId": "H0918",
        "pdfPage": 158,
        "imgUrl": "/assets/hinh/p158-h03.png",
        "img2xUrl": "/assets/hinh-2x/p158-h03.png",
        "width": 266,
        "height": 308
      },
      {
        "assetId": "p158-h04",
        "displayId": "H0919",
        "pdfPage": 158,
        "imgUrl": "/assets/hinh/p158-h04.png",
        "img2xUrl": "/assets/hinh-2x/p158-h04.png",
        "width": 273,
        "height": 307
      },
      {
        "assetId": "p158-h05",
        "displayId": "H0920",
        "pdfPage": 158,
        "imgUrl": "/assets/hinh/p158-h05.png",
        "img2xUrl": "/assets/hinh-2x/p158-h05.png",
        "width": 272,
        "height": 305
      },
      {
        "assetId": "p158-h06",
        "displayId": "H0921",
        "pdfPage": 158,
        "imgUrl": "/assets/hinh/p158-h06.png",
        "img2xUrl": "/assets/hinh-2x/p158-h06.png",
        "width": 280,
        "height": 306
      },
      {
        "assetId": "p158-h07",
        "displayId": "H0922",
        "pdfPage": 158,
        "imgUrl": "/assets/hinh/p158-h07.png",
        "img2xUrl": "/assets/hinh-2x/p158-h07.png",
        "width": 207,
        "height": 309
      },
      {
        "assetId": "p158-h08",
        "displayId": "H0923",
        "pdfPage": 158,
        "imgUrl": "/assets/hinh/p158-h08.png",
        "img2xUrl": "/assets/hinh-2x/p158-h08.png",
        "width": 213,
        "height": 290
      },
      {
        "assetId": "p158-h09",
        "displayId": "H0924",
        "pdfPage": 158,
        "imgUrl": "/assets/hinh/p158-h09.png",
        "img2xUrl": "/assets/hinh-2x/p158-h09.png",
        "width": 235,
        "height": 313
      },
      {
        "assetId": "p159-h01",
        "displayId": "H0925",
        "pdfPage": 159,
        "imgUrl": "/assets/hinh/p159-h01.png",
        "img2xUrl": "/assets/hinh-2x/p159-h01.png",
        "width": 233,
        "height": 310
      },
      {
        "assetId": "p159-h02",
        "displayId": "H0926",
        "pdfPage": 159,
        "imgUrl": "/assets/hinh/p159-h02.png",
        "img2xUrl": "/assets/hinh-2x/p159-h02.png",
        "width": 229,
        "height": 310
      },
      {
        "assetId": "p159-h03",
        "displayId": "H0927",
        "pdfPage": 159,
        "imgUrl": "/assets/hinh/p159-h03.png",
        "img2xUrl": "/assets/hinh-2x/p159-h03.png",
        "width": 230,
        "height": 310
      },
      {
        "assetId": "p159-h04",
        "displayId": "H0928",
        "pdfPage": 159,
        "imgUrl": "/assets/hinh/p159-h04.png",
        "img2xUrl": "/assets/hinh-2x/p159-h04.png",
        "width": 229,
        "height": 310
      },
      {
        "assetId": "p160-h01",
        "displayId": "H0929",
        "pdfPage": 160,
        "imgUrl": "/assets/hinh/p160-h01.png",
        "img2xUrl": "/assets/hinh-2x/p160-h01.png",
        "width": 231,
        "height": 321
      },
      {
        "assetId": "p160-h02",
        "displayId": "H0930",
        "pdfPage": 160,
        "imgUrl": "/assets/hinh/p160-h02.png",
        "img2xUrl": "/assets/hinh-2x/p160-h02.png",
        "width": 221,
        "height": 319
      },
      {
        "assetId": "p160-h03",
        "displayId": "H0931",
        "pdfPage": 160,
        "imgUrl": "/assets/hinh/p160-h03.png",
        "img2xUrl": "/assets/hinh-2x/p160-h03.png",
        "width": 234,
        "height": 319
      },
      {
        "assetId": "p160-h04",
        "displayId": "H0932",
        "pdfPage": 160,
        "imgUrl": "/assets/hinh/p160-h04.png",
        "img2xUrl": "/assets/hinh-2x/p160-h04.png",
        "width": 216,
        "height": 321
      },
      {
        "assetId": "p160-h05",
        "displayId": "H0933",
        "pdfPage": 160,
        "imgUrl": "/assets/hinh/p160-h05.png",
        "img2xUrl": "/assets/hinh-2x/p160-h05.png",
        "width": 214,
        "height": 316
      },
      {
        "assetId": "p160-h06",
        "displayId": "H0934",
        "pdfPage": 160,
        "imgUrl": "/assets/hinh/p160-h06.png",
        "img2xUrl": "/assets/hinh-2x/p160-h06.png",
        "width": 213,
        "height": 317
      },
      {
        "assetId": "p160-h07",
        "displayId": "H0935",
        "pdfPage": 160,
        "imgUrl": "/assets/hinh/p160-h07.png",
        "img2xUrl": "/assets/hinh-2x/p160-h07.png",
        "width": 208,
        "height": 317
      }
    ],
    "motions": [],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-28",
    "title": "Chương III — Khẩu quyết",
    "groupId": "khau-quyet",
    "bookOrder": 28,
    "contentType": "reading",
    "pdfPages": [
      161,
      162,
      163,
      164,
      165,
      166
    ],
    "pageRange": "Trang PDF 161 – 166",
    "assetCount": 5,
    "assets": [
      {
        "assetId": "p161-h01",
        "displayId": "H0936",
        "pdfPage": 161,
        "imgUrl": "/assets/hinh/p161-h01.png",
        "img2xUrl": "/assets/hinh-2x/p161-h01.png",
        "width": 369,
        "height": 633
      },
      {
        "assetId": "p162-h01",
        "displayId": "H0937",
        "pdfPage": 162,
        "imgUrl": "/assets/hinh/p162-h01.png",
        "img2xUrl": "/assets/hinh-2x/p162-h01.png",
        "width": 592,
        "height": 914
      },
      {
        "assetId": "p163-h01",
        "displayId": "H0938",
        "pdfPage": 163,
        "imgUrl": "/assets/hinh/p163-h01.png",
        "img2xUrl": "/assets/hinh-2x/p163-h01.png",
        "width": 560,
        "height": 882
      },
      {
        "assetId": "p164-h01",
        "displayId": "H0939",
        "pdfPage": 164,
        "imgUrl": "/assets/hinh/p164-h01.png",
        "img2xUrl": "/assets/hinh-2x/p164-h01.png",
        "width": 572,
        "height": 883
      },
      {
        "assetId": "p165-h01",
        "displayId": "H0940",
        "pdfPage": 165,
        "imgUrl": "/assets/hinh/p165-h01.png",
        "img2xUrl": "/assets/hinh-2x/p165-h01.png",
        "width": 920,
        "height": 741
      }
    ],
    "motions": [],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-29",
    "title": "Chương IV — Nội công",
    "groupId": "noi-cong",
    "bookOrder": 29,
    "contentType": "reading",
    "pdfPages": [
      167,
      168,
      169,
      170,
      171,
      172,
      173,
      174,
      175,
      176,
      177,
      178,
      179,
      180,
      181,
      182,
      183,
      184
    ],
    "pageRange": "Trang PDF 167 – 184",
    "assetCount": 17,
    "assets": [
      {
        "assetId": "p168-h01",
        "displayId": "H0941",
        "pdfPage": 168,
        "imgUrl": "/assets/hinh/p168-h01.png",
        "img2xUrl": "/assets/hinh-2x/p168-h01.png",
        "width": 847,
        "height": 1260
      },
      {
        "assetId": "p169-h01",
        "displayId": "H0942",
        "pdfPage": 169,
        "imgUrl": "/assets/hinh/p169-h01.png",
        "img2xUrl": "/assets/hinh-2x/p169-h01.png",
        "width": 860,
        "height": 610
      },
      {
        "assetId": "p170-h01",
        "displayId": "H0943",
        "pdfPage": 170,
        "imgUrl": "/assets/hinh/p170-h01.png",
        "img2xUrl": "/assets/hinh-2x/p170-h01.png",
        "width": 868,
        "height": 587
      },
      {
        "assetId": "p171-h01",
        "displayId": "H0944",
        "pdfPage": 171,
        "imgUrl": "/assets/hinh/p171-h01.png",
        "img2xUrl": "/assets/hinh-2x/p171-h01.png",
        "width": 454,
        "height": 550
      },
      {
        "assetId": "p172-h01",
        "displayId": "H0945",
        "pdfPage": 172,
        "imgUrl": "/assets/hinh/p172-h01.png",
        "img2xUrl": "/assets/hinh-2x/p172-h01.png",
        "width": 547,
        "height": 1232
      },
      {
        "assetId": "p172-h02",
        "displayId": "H0946",
        "pdfPage": 172,
        "imgUrl": "/assets/hinh/p172-h02.png",
        "img2xUrl": "/assets/hinh-2x/p172-h02.png",
        "width": 369,
        "height": 663
      },
      {
        "assetId": "p172-h03",
        "displayId": "H0947",
        "pdfPage": 172,
        "imgUrl": "/assets/hinh/p172-h03.png",
        "img2xUrl": "/assets/hinh-2x/p172-h03.png",
        "width": 374,
        "height": 601
      },
      {
        "assetId": "p174-h01",
        "displayId": "H0948",
        "pdfPage": 174,
        "imgUrl": "/assets/hinh/p174-h01.png",
        "img2xUrl": "/assets/hinh-2x/p174-h01.png",
        "width": 407,
        "height": 370
      },
      {
        "assetId": "p174-h02",
        "displayId": "H0949",
        "pdfPage": 174,
        "imgUrl": "/assets/hinh/p174-h02.png",
        "img2xUrl": "/assets/hinh-2x/p174-h02.png",
        "width": 406,
        "height": 360
      },
      {
        "assetId": "p174-h03",
        "displayId": "H0950",
        "pdfPage": 174,
        "imgUrl": "/assets/hinh/p174-h03.png",
        "img2xUrl": "/assets/hinh-2x/p174-h03.png",
        "width": 408,
        "height": 367
      },
      {
        "assetId": "p174-h04",
        "displayId": "H0951",
        "pdfPage": 174,
        "imgUrl": "/assets/hinh/p174-h04.png",
        "img2xUrl": "/assets/hinh-2x/p174-h04.png",
        "width": 406,
        "height": 388
      },
      {
        "assetId": "p176-h01",
        "displayId": "H0952",
        "pdfPage": 176,
        "imgUrl": "/assets/hinh/p176-h01.png",
        "img2xUrl": "/assets/hinh-2x/p176-h01.png",
        "width": 1025,
        "height": 667
      },
      {
        "assetId": "p178-h01",
        "displayId": "H0953",
        "pdfPage": 178,
        "imgUrl": "/assets/hinh/p178-h01.png",
        "img2xUrl": "/assets/hinh-2x/p178-h01.png",
        "width": 539,
        "height": 713
      },
      {
        "assetId": "p179-h01",
        "displayId": "H0954",
        "pdfPage": 179,
        "imgUrl": "/assets/hinh/p179-h01.png",
        "img2xUrl": "/assets/hinh-2x/p179-h01.png",
        "width": 404,
        "height": 436
      },
      {
        "assetId": "p179-h02",
        "displayId": "H0955",
        "pdfPage": 179,
        "imgUrl": "/assets/hinh/p179-h02.png",
        "img2xUrl": "/assets/hinh-2x/p179-h02.png",
        "width": 399,
        "height": 709
      },
      {
        "assetId": "p182-h01",
        "displayId": "H0956",
        "pdfPage": 182,
        "imgUrl": "/assets/hinh/p182-h01.png",
        "img2xUrl": "/assets/hinh-2x/p182-h01.png",
        "width": 893,
        "height": 635
      },
      {
        "assetId": "p184-h01",
        "displayId": "H0957",
        "pdfPage": 184,
        "imgUrl": "/assets/hinh/p184-h01.png",
        "img2xUrl": "/assets/hinh-2x/p184-h01.png",
        "width": 866,
        "height": 594
      }
    ],
    "motions": [],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-30",
    "title": "Chương V — Vũ khí — giới thiệu",
    "groupId": "vu-khi",
    "bookOrder": 30,
    "contentType": "reading",
    "pdfPages": [
      185,
      186,
      187,
      188,
      189,
      190
    ],
    "pageRange": "Trang PDF 185 – 190",
    "assetCount": 5,
    "assets": [
      {
        "assetId": "p186-h01",
        "displayId": "H0958",
        "pdfPage": 186,
        "imgUrl": "/assets/hinh/p186-h01.png",
        "img2xUrl": "/assets/hinh-2x/p186-h01.png",
        "width": 888,
        "height": 1270
      },
      {
        "assetId": "p187-h01",
        "displayId": "H0959",
        "pdfPage": 187,
        "imgUrl": "/assets/hinh/p187-h01.png",
        "img2xUrl": "/assets/hinh-2x/p187-h01.png",
        "width": 893,
        "height": 636
      },
      {
        "assetId": "p187-h02",
        "displayId": "H0960",
        "pdfPage": 187,
        "imgUrl": "/assets/hinh/p187-h02.png",
        "img2xUrl": "/assets/hinh-2x/p187-h02.png",
        "width": 893,
        "height": 591
      },
      {
        "assetId": "p188-h01",
        "displayId": "H0961",
        "pdfPage": 188,
        "imgUrl": "/assets/hinh/p188-h01.png",
        "img2xUrl": "/assets/hinh-2x/p188-h01.png",
        "width": 909,
        "height": 619
      },
      {
        "assetId": "p190-h01",
        "displayId": "H0962",
        "pdfPage": 190,
        "imgUrl": "/assets/hinh/p190-h01.png",
        "img2xUrl": "/assets/hinh-2x/p190-h01.png",
        "width": 973,
        "height": 828
      }
    ],
    "motions": [
    
    ],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-31",
    "title": "Bát Trảm Đao",
    "groupId": "vu-khi",
    "bookOrder": 31,
    "contentType": "practice_or_mixed",
    "pdfPages": [
      191,
      192,
      193,
      194,
      195,
      196,
      197,
      198
    ],
    "pageRange": "Trang PDF 191 – 198",
    "assetCount": 61,
    "assets": [
      {
        "assetId": "p191-h01",
        "displayId": "H0963",
        "pdfPage": 191,
        "imgUrl": "/assets/hinh/p191-h01.png",
        "img2xUrl": "/assets/hinh-2x/p191-h01.png",
        "width": 140,
        "height": 320
      },
      {
        "assetId": "p191-h02",
        "displayId": "H0964",
        "pdfPage": 191,
        "imgUrl": "/assets/hinh/p191-h02.png",
        "img2xUrl": "/assets/hinh-2x/p191-h02.png",
        "width": 145,
        "height": 320
      },
      {
        "assetId": "p191-h03",
        "displayId": "H0965",
        "pdfPage": 191,
        "imgUrl": "/assets/hinh/p191-h03.png",
        "img2xUrl": "/assets/hinh-2x/p191-h03.png",
        "width": 142,
        "height": 320
      },
      {
        "assetId": "p191-h04",
        "displayId": "H0966",
        "pdfPage": 191,
        "imgUrl": "/assets/hinh/p191-h04.png",
        "img2xUrl": "/assets/hinh-2x/p191-h04.png",
        "width": 145,
        "height": 320
      },
      {
        "assetId": "p191-h05",
        "displayId": "H0967",
        "pdfPage": 191,
        "imgUrl": "/assets/hinh/p191-h05.png",
        "img2xUrl": "/assets/hinh-2x/p191-h05.png",
        "width": 147,
        "height": 320
      },
      {
        "assetId": "p191-h06",
        "displayId": "H0968",
        "pdfPage": 191,
        "imgUrl": "/assets/hinh/p191-h06.png",
        "img2xUrl": "/assets/hinh-2x/p191-h06.png",
        "width": 142,
        "height": 320
      },
      {
        "assetId": "p191-h07",
        "displayId": "H0969",
        "pdfPage": 191,
        "imgUrl": "/assets/hinh/p191-h07.png",
        "img2xUrl": "/assets/hinh-2x/p191-h07.png",
        "width": 145,
        "height": 320
      },
      {
        "assetId": "p191-h08",
        "displayId": "H0970",
        "pdfPage": 191,
        "imgUrl": "/assets/hinh/p191-h08.png",
        "img2xUrl": "/assets/hinh-2x/p191-h08.png",
        "width": 152,
        "height": 320
      },
      {
        "assetId": "p191-h09",
        "displayId": "H0971",
        "pdfPage": 191,
        "imgUrl": "/assets/hinh/p191-h09.png",
        "img2xUrl": "/assets/hinh-2x/p191-h09.png",
        "width": 140,
        "height": 320
      },
      {
        "assetId": "p192-h01",
        "displayId": "H0972",
        "pdfPage": 192,
        "imgUrl": "/assets/hinh/p192-h01.png",
        "img2xUrl": "/assets/hinh-2x/p192-h01.png",
        "width": 135,
        "height": 322
      },
      {
        "assetId": "p192-h02",
        "displayId": "H0973",
        "pdfPage": 192,
        "imgUrl": "/assets/hinh/p192-h02.png",
        "img2xUrl": "/assets/hinh-2x/p192-h02.png",
        "width": 140,
        "height": 322
      },
      {
        "assetId": "p192-h03",
        "displayId": "H0974",
        "pdfPage": 192,
        "imgUrl": "/assets/hinh/p192-h03.png",
        "img2xUrl": "/assets/hinh-2x/p192-h03.png",
        "width": 145,
        "height": 322
      },
      {
        "assetId": "p192-h04",
        "displayId": "H0975",
        "pdfPage": 192,
        "imgUrl": "/assets/hinh/p192-h04.png",
        "img2xUrl": "/assets/hinh-2x/p192-h04.png",
        "width": 120,
        "height": 320
      },
      {
        "assetId": "p192-h05",
        "displayId": "H0976",
        "pdfPage": 192,
        "imgUrl": "/assets/hinh/p192-h05.png",
        "img2xUrl": "/assets/hinh-2x/p192-h05.png",
        "width": 210,
        "height": 320
      },
      {
        "assetId": "p192-h06",
        "displayId": "H0977",
        "pdfPage": 192,
        "imgUrl": "/assets/hinh/p192-h06.png",
        "img2xUrl": "/assets/hinh-2x/p192-h06.png",
        "width": 200,
        "height": 320
      },
      {
        "assetId": "p192-h07",
        "displayId": "H0978",
        "pdfPage": 192,
        "imgUrl": "/assets/hinh/p192-h07.png",
        "img2xUrl": "/assets/hinh-2x/p192-h07.png",
        "width": 210,
        "height": 323
      },
      {
        "assetId": "p192-h08",
        "displayId": "H0979",
        "pdfPage": 192,
        "imgUrl": "/assets/hinh/p192-h08.png",
        "img2xUrl": "/assets/hinh-2x/p192-h08.png",
        "width": 195,
        "height": 323
      },
      {
        "assetId": "p193-h01",
        "displayId": "H0980",
        "pdfPage": 193,
        "imgUrl": "/assets/hinh/p193-h01.png",
        "img2xUrl": "/assets/hinh-2x/p193-h01.png",
        "width": 208,
        "height": 315
      },
      {
        "assetId": "p193-h02",
        "displayId": "H0981",
        "pdfPage": 193,
        "imgUrl": "/assets/hinh/p193-h02.png",
        "img2xUrl": "/assets/hinh-2x/p193-h02.png",
        "width": 211,
        "height": 315
      },
      {
        "assetId": "p193-h03",
        "displayId": "H0982",
        "pdfPage": 193,
        "imgUrl": "/assets/hinh/p193-h03.png",
        "img2xUrl": "/assets/hinh-2x/p193-h03.png",
        "width": 250,
        "height": 315
      },
      {
        "assetId": "p193-h04",
        "displayId": "H0983",
        "pdfPage": 193,
        "imgUrl": "/assets/hinh/p193-h04.png",
        "img2xUrl": "/assets/hinh-2x/p193-h04.png",
        "width": 248,
        "height": 317
      },
      {
        "assetId": "p193-h05",
        "displayId": "H0984",
        "pdfPage": 193,
        "imgUrl": "/assets/hinh/p193-h05.png",
        "img2xUrl": "/assets/hinh-2x/p193-h05.png",
        "width": 120,
        "height": 317
      },
      {
        "assetId": "p193-h06",
        "displayId": "H0985",
        "pdfPage": 193,
        "imgUrl": "/assets/hinh/p193-h06.png",
        "img2xUrl": "/assets/hinh-2x/p193-h06.png",
        "width": 125,
        "height": 317
      },
      {
        "assetId": "p194-h01",
        "displayId": "H0986",
        "pdfPage": 194,
        "imgUrl": "/assets/hinh/p194-h01.png",
        "img2xUrl": "/assets/hinh-2x/p194-h01.png",
        "width": 150,
        "height": 312
      },
      {
        "assetId": "p194-h02",
        "displayId": "H0987",
        "pdfPage": 194,
        "imgUrl": "/assets/hinh/p194-h02.png",
        "img2xUrl": "/assets/hinh-2x/p194-h02.png",
        "width": 130,
        "height": 332
      },
      {
        "assetId": "p194-h03",
        "displayId": "H0988",
        "pdfPage": 194,
        "imgUrl": "/assets/hinh/p194-h03.png",
        "img2xUrl": "/assets/hinh-2x/p194-h03.png",
        "width": 125,
        "height": 320
      },
      {
        "assetId": "p194-h06",
        "displayId": "H0989",
        "pdfPage": 194,
        "imgUrl": "/assets/hinh/p194-h06.png",
        "img2xUrl": "/assets/hinh-2x/p194-h06.png",
        "width": 210,
        "height": 321
      },
      {
        "assetId": "p194-h04",
        "displayId": "H0990",
        "pdfPage": 194,
        "imgUrl": "/assets/hinh/p194-h04.png",
        "img2xUrl": "/assets/hinh-2x/p194-h04.png",
        "width": 215,
        "height": 321
      },
      {
        "assetId": "p194-h05",
        "displayId": "H0991",
        "pdfPage": 194,
        "imgUrl": "/assets/hinh/p194-h05.png",
        "img2xUrl": "/assets/hinh-2x/p194-h05.png",
        "width": 130,
        "height": 321
      },
      {
        "assetId": "p195-h03",
        "displayId": "H0992",
        "pdfPage": 195,
        "imgUrl": "/assets/hinh/p195-h03.png",
        "img2xUrl": "/assets/hinh-2x/p195-h03.png",
        "width": 110,
        "height": 316
      },
      {
        "assetId": "p195-h01",
        "displayId": "H0993",
        "pdfPage": 195,
        "imgUrl": "/assets/hinh/p195-h01.png",
        "img2xUrl": "/assets/hinh-2x/p195-h01.png",
        "width": 145,
        "height": 316
      },
      {
        "assetId": "p195-h02",
        "displayId": "H0994",
        "pdfPage": 195,
        "imgUrl": "/assets/hinh/p195-h02.png",
        "img2xUrl": "/assets/hinh-2x/p195-h02.png",
        "width": 145,
        "height": 320
      },
      {
        "assetId": "p195-h04",
        "displayId": "H0995",
        "pdfPage": 195,
        "imgUrl": "/assets/hinh/p195-h04.png",
        "img2xUrl": "/assets/hinh-2x/p195-h04.png",
        "width": 105,
        "height": 320
      },
      {
        "assetId": "p195-h05",
        "displayId": "H0996",
        "pdfPage": 195,
        "imgUrl": "/assets/hinh/p195-h05.png",
        "img2xUrl": "/assets/hinh-2x/p195-h05.png",
        "width": 125,
        "height": 325
      },
      {
        "assetId": "p195-h06",
        "displayId": "H0997",
        "pdfPage": 195,
        "imgUrl": "/assets/hinh/p195-h06.png",
        "img2xUrl": "/assets/hinh-2x/p195-h06.png",
        "width": 135,
        "height": 325
      },
      {
        "assetId": "p195-h07",
        "displayId": "H0998",
        "pdfPage": 195,
        "imgUrl": "/assets/hinh/p195-h07.png",
        "img2xUrl": "/assets/hinh-2x/p195-h07.png",
        "width": 260,
        "height": 310
      },
      {
        "assetId": "p195-h08",
        "displayId": "H0999",
        "pdfPage": 195,
        "imgUrl": "/assets/hinh/p195-h08.png",
        "img2xUrl": "/assets/hinh-2x/p195-h08.png",
        "width": 268,
        "height": 310
      },
      {
        "assetId": "p196-h01",
        "displayId": "H1000",
        "pdfPage": 196,
        "imgUrl": "/assets/hinh/p196-h01.png",
        "img2xUrl": "/assets/hinh-2x/p196-h01.png",
        "width": 258,
        "height": 320
      },
      {
        "assetId": "p196-h02",
        "displayId": "H1001",
        "pdfPage": 196,
        "imgUrl": "/assets/hinh/p196-h02.png",
        "img2xUrl": "/assets/hinh-2x/p196-h02.png",
        "width": 195,
        "height": 320
      },
      {
        "assetId": "p196-h03",
        "displayId": "H1002",
        "pdfPage": 196,
        "imgUrl": "/assets/hinh/p196-h03.png",
        "img2xUrl": "/assets/hinh-2x/p196-h03.png",
        "width": 175,
        "height": 320
      },
      {
        "assetId": "p196-h04",
        "displayId": "H1003",
        "pdfPage": 196,
        "imgUrl": "/assets/hinh/p196-h04.png",
        "img2xUrl": "/assets/hinh-2x/p196-h04.png",
        "width": 120,
        "height": 320
      },
      {
        "assetId": "p196-h05",
        "displayId": "H1004",
        "pdfPage": 196,
        "imgUrl": "/assets/hinh/p196-h05.png",
        "img2xUrl": "/assets/hinh-2x/p196-h05.png",
        "width": 125,
        "height": 320
      },
      {
        "assetId": "p196-h06",
        "displayId": "H1005",
        "pdfPage": 196,
        "imgUrl": "/assets/hinh/p196-h06.png",
        "img2xUrl": "/assets/hinh-2x/p196-h06.png",
        "width": 120,
        "height": 320
      },
      {
        "assetId": "p196-h07",
        "displayId": "H1006",
        "pdfPage": 196,
        "imgUrl": "/assets/hinh/p196-h07.png",
        "img2xUrl": "/assets/hinh-2x/p196-h07.png",
        "width": 125,
        "height": 323
      },
      {
        "assetId": "p196-h08",
        "displayId": "H1006B",
        "pdfPage": 196,
        "imgUrl": "/assets/hinh/p196-h08.png",
        "img2xUrl": "/assets/hinh-2x/p196-h08.png",
        "width": 123,
        "height": 314
      },
      {
        "assetId": "p197-h02",
        "displayId": "H1007",
        "pdfPage": 197,
        "imgUrl": "/assets/hinh/p197-h02.png",
        "img2xUrl": "/assets/hinh-2x/p197-h02.png",
        "width": 140,
        "height": 325
      },
      {
        "assetId": "p197-h01",
        "displayId": "H1008",
        "pdfPage": 197,
        "imgUrl": "/assets/hinh/p197-h01.png",
        "img2xUrl": "/assets/hinh-2x/p197-h01.png",
        "width": 275,
        "height": 325
      },
      {
        "assetId": "p197-h03",
        "displayId": "H1009",
        "pdfPage": 197,
        "imgUrl": "/assets/hinh/p197-h03.png",
        "img2xUrl": "/assets/hinh-2x/p197-h03.png",
        "width": 150,
        "height": 325
      },
      {
        "assetId": "p197-h04",
        "displayId": "H1010",
        "pdfPage": 197,
        "imgUrl": "/assets/hinh/p197-h04.png",
        "img2xUrl": "/assets/hinh-2x/p197-h04.png",
        "width": 280,
        "height": 325
      },
      {
        "assetId": "p197-h05",
        "displayId": "H1011",
        "pdfPage": 197,
        "imgUrl": "/assets/hinh/p197-h05.png",
        "img2xUrl": "/assets/hinh-2x/p197-h05.png",
        "width": 115,
        "height": 325
      },
      {
        "assetId": "p197-h06",
        "displayId": "H1012",
        "pdfPage": 197,
        "imgUrl": "/assets/hinh/p197-h06.png",
        "img2xUrl": "/assets/hinh-2x/p197-h06.png",
        "width": 135,
        "height": 325
      },
      {
        "assetId": "p197-h07",
        "displayId": "H1013",
        "pdfPage": 197,
        "imgUrl": "/assets/hinh/p197-h07.png",
        "img2xUrl": "/assets/hinh-2x/p197-h07.png",
        "width": 125,
        "height": 315
      },
      {
        "assetId": "p197-h08",
        "displayId": "H1014",
        "pdfPage": 197,
        "imgUrl": "/assets/hinh/p197-h08.png",
        "img2xUrl": "/assets/hinh-2x/p197-h08.png",
        "width": 120,
        "height": 315
      },
      {
        "assetId": "p197-h09",
        "displayId": "H1015",
        "pdfPage": 197,
        "imgUrl": "/assets/hinh/p197-h09.png",
        "img2xUrl": "/assets/hinh-2x/p197-h09.png",
        "width": 150,
        "height": 315
      },
      {
        "assetId": "p198-h01",
        "displayId": "H1016",
        "pdfPage": 198,
        "imgUrl": "/assets/hinh/p198-h01.png",
        "img2xUrl": "/assets/hinh-2x/p198-h01.png",
        "width": 145,
        "height": 340
      },
      {
        "assetId": "p198-h02",
        "displayId": "H1017",
        "pdfPage": 198,
        "imgUrl": "/assets/hinh/p198-h02.png",
        "img2xUrl": "/assets/hinh-2x/p198-h02.png",
        "width": 150,
        "height": 335
      },
      {
        "assetId": "p198-h03",
        "displayId": "H1018",
        "pdfPage": 198,
        "imgUrl": "/assets/hinh/p198-h03.png",
        "img2xUrl": "/assets/hinh-2x/p198-h03.png",
        "width": 155,
        "height": 335
      },
      {
        "assetId": "p198-h04",
        "displayId": "H1019",
        "pdfPage": 198,
        "imgUrl": "/assets/hinh/p198-h04.png",
        "img2xUrl": "/assets/hinh-2x/p198-h04.png",
        "width": 165,
        "height": 325
      },
      {
        "assetId": "p198-h06",
        "displayId": "H1020",
        "pdfPage": 198,
        "imgUrl": "/assets/hinh/p198-h06.png",
        "img2xUrl": "/assets/hinh-2x/p198-h06.png",
        "width": 150,
        "height": 325
      },
      {
        "assetId": "p198-h05",
        "displayId": "H1021",
        "pdfPage": 198,
        "imgUrl": "/assets/hinh/p198-h05.png",
        "img2xUrl": "/assets/hinh-2x/p198-h05.png",
        "width": 135,
        "height": 325
      },
      {
        "assetId": "p198-h07",
        "displayId": "H1022",
        "pdfPage": 198,
        "imgUrl": "/assets/hinh/p198-h07.png",
        "img2xUrl": "/assets/hinh-2x/p198-h07.png",
        "width": 130,
        "height": 325
      },
      {
        "assetId": "p198-h08",
        "displayId": "H1023",
        "pdfPage": 198,
        "imgUrl": "/assets/hinh/p198-h08.png",
        "img2xUrl": "/assets/hinh-2x/p198-h08.png",
        "width": 165,
        "height": 325
      }
    ],
    "motions": [
      {
        "id": "bai-31-m-1",
        "stepNo": "1",
        "assetId": "p191-h01",
        "displayId": "H0963",
        "pdfPage": 191,
        "imgUrl": "/assets/hinh/p191-h01.png",
        "img2xUrl": "/assets/hinh-2x/p191-h01.png",
        "width": 140,
        "height": 320,
        "desc": "CHIÊU 1: Đứng Kiềm Dương Tay phải nắm đấm kéo lên thủ ngang ngực, tay trái cằm cán song đao, lưỡi đao quay ra ngoài (khởi thể)."
      },
      {
        "id": "bai-31-m-2",
        "stepNo": "2",
        "assetId": "p191-h02",
        "displayId": "H0964",
        "pdfPage": 191,
        "imgUrl": "/assets/hinh/p191-h02.png",
        "img2xUrl": "/assets/hinh-2x/p191-h02.png",
        "width": 145,
        "height": 320,
        "desc": "CHIÊU 1: Tay phải đấm Nhật tự quyền ra phía trước."
      },
      {
        "id": "bai-31-m-3",
        "stepNo": "3",
        "assetId": "p191-h03",
        "displayId": "H0965",
        "pdfPage": 191,
        "imgUrl": "/assets/hinh/p191-h03.png",
        "img2xUrl": "/assets/hinh-2x/p191-h03.png",
        "width": 142,
        "height": 320,
        "desc": "CHIÊU 1: Nắm đấm chuyển thành tay chưởng, xỉa ra phía trước, đánh cạnh bàn tay ngoài lên phía trên."
      },
      {
        "id": "bai-31-m-4",
        "stepNo": "4",
        "assetId": "p191-h04",
        "displayId": "H0966",
        "pdfPage": 191,
        "imgUrl": "/assets/hinh/p191-h04.png",
        "img2xUrl": "/assets/hinh-2x/p191-h04.png",
        "width": 145,
        "height": 320,
        "desc": "CHIÊU 1: Đánh cạnh trong bàn tay xuống, lặp lại lần lượt động tác ở hình 13; 14 thêm 2 lần."
      },
      {
        "id": "bai-31-m-5",
        "stepNo": "5",
        "assetId": "p191-h05",
        "displayId": "H0967",
        "pdfPage": 191,
        "imgUrl": "/assets/hinh/p191-h05.png",
        "img2xUrl": "/assets/hinh-2x/p191-h05.png",
        "width": 147,
        "height": 320,
        "desc": "CHIÊU 1: Úp bàn tay phải xuống song song mặt đất, đánh cạnh trong cổ tay sang trái."
      },
      {
        "id": "bai-31-m-6",
        "stepNo": "6",
        "assetId": "p191-h06",
        "displayId": "H0968",
        "pdfPage": 191,
        "imgUrl": "/assets/hinh/p191-h06.png",
        "img2xUrl": "/assets/hinh-2x/p191-h06.png",
        "width": 142,
        "height": 320,
        "desc": "CHIÊU 1: Đánh cạnh ngoài bàn tay sang phải, lặp lại lần lượt động tác ở hình 1.5,"
      },
      {
        "id": "bai-31-m-7",
        "stepNo": "7",
        "assetId": "p191-h07",
        "displayId": "H0969",
        "pdfPage": 191,
        "imgUrl": "/assets/hinh/p191-h07.png",
        "img2xUrl": "/assets/hinh-2x/p191-h07.png",
        "width": 145,
        "height": 320,
        "desc": "CHIÊU 1: Cổ tay giữ nguyên, bàn tay quay 1 vòng theo chiều kim đồng hồ , nắm thành quyền, thu tay về."
      },
      {
        "id": "bai-31-m-8",
        "stepNo": "8",
        "assetId": "p191-h08",
        "displayId": "H0970",
        "pdfPage": 191,
        "imgUrl": "/assets/hinh/p191-h08.png",
        "img2xUrl": "/assets/hinh-2x/p191-h08.png",
        "width": 152,
        "height": 320,
        "desc": "CHIÊU 2: Bước chân trái lên phía trước một bước, chân phải nhấc cao đầu gối, quay cổ chân đá hất mũi bàn chân từ dưới lên trên."
      },
      {
        "id": "bai-31-m-9",
        "stepNo": "9",
        "assetId": "p191-h09",
        "displayId": "H0971",
        "pdfPage": 191,
        "imgUrl": "/assets/hinh/p191-h09.png",
        "img2xUrl": "/assets/hinh-2x/p191-h09.png",
        "width": 140,
        "height": 320,
        "desc": "CHIÊU 2: Hạ chân xuống thành Kiềm Dương Tấn, tay phải đưa sang cầm 1 đao, hai tay cằm đao song song, đưa 2 đao ra phía trước. 14Gơo"
      },
      {
        "id": "bai-31-m-10",
        "stepNo": "10",
        "assetId": "p192-h01",
        "displayId": "H0972",
        "pdfPage": 192,
        "imgUrl": "/assets/hinh/p192-h01.png",
        "img2xUrl": "/assets/hinh-2x/p192-h01.png",
        "width": 135,
        "height": 322,
        "desc": "CHIÊU 2: Tay phải chém đao xuống, tay trái giữ nguyên."
      },
      {
        "id": "bai-31-m-11",
        "stepNo": "11",
        "assetId": "p192-h02",
        "displayId": "H0973",
        "pdfPage": 192,
        "imgUrl": "/assets/hinh/p192-h02.png",
        "img2xUrl": "/assets/hinh-2x/p192-h02.png",
        "width": 140,
        "height": 322,
        "desc": "CHIÊU 2: Tay phải hất đao về vị trí cũ đồng thời tay trái chém thẳng xuống. Lặp lại động tác 3.1; 3.2 thêm 1 lần."
      },
      {
        "id": "bai-31-m-12",
        "stepNo": "12",
        "assetId": "p192-h03",
        "displayId": "H0974",
        "pdfPage": 192,
        "imgUrl": "/assets/hinh/p192-h03.png",
        "img2xUrl": "/assets/hinh-2x/p192-h03.png",
        "width": 145,
        "height": 322,
        "desc": "CHIÊU 2: Giống động tác 313.2 nhưng đôi xứng sang trái."
      },
      {
        "id": "bai-31-m-13",
        "stepNo": "13",
        "assetId": "p192-h04",
        "displayId": "H0975",
        "pdfPage": 192,
        "imgUrl": "/assets/hinh/p192-h04.png",
        "img2xUrl": "/assets/hinh-2x/p192-h04.png",
        "width": 120,
        "height": 320,
        "desc": "CHIÊU 4: Chân phải tiến lên phía trước, hai chân song song, thân quay nghiêng. Cổ tay trái, cổ tay phải quay lưỡi đao vào nhau và song song, tay phải phía trước."
      },
      {
        "id": "bai-31-m-14",
        "stepNo": "14",
        "assetId": "p192-h05",
        "displayId": "H0976",
        "pdfPage": 192,
        "imgUrl": "/assets/hinh/p192-h05.png",
        "img2xUrl": "/assets/hinh-2x/p192-h05.png",
        "width": 210,
        "height": 320,
        "desc": "CHIÊU 4: Tay trái dùng đao gạt đỡ trước bụng, tay phải bổ đao về phía trước từ trên xuống."
      },
      {
        "id": "bai-31-m-15",
        "stepNo": "15",
        "assetId": "p192-h06",
        "displayId": "H0977",
        "pdfPage": 192,
        "imgUrl": "/assets/hinh/p192-h06.png",
        "img2xUrl": "/assets/hinh-2x/p192-h06.png",
        "width": 200,
        "height": 320,
        "desc": "CHIÊU 6: Thân quay sang bên trái, hai tay chém 2 đao song song với mặt đất tay phải ở dưới, tay trái ở trên."
      },
      {
        "id": "bai-31-m-16",
        "stepNo": "16",
        "assetId": "p192-h07",
        "displayId": "H0978",
        "pdfPage": 192,
        "imgUrl": "/assets/hinh/p192-h07.png",
        "img2xUrl": "/assets/hinh-2x/p192-h07.png",
        "width": 210,
        "height": 323,
        "desc": "CHIÊU 6: Thân quay sang bên phải, hai tay chém 2 đao song song với mặt đất tay phải ở trên, tay trái ở dưới."
      },
      {
        "id": "bai-31-m-17",
        "stepNo": "17",
        "assetId": "p192-h08",
        "displayId": "H0979",
        "pdfPage": 192,
        "imgUrl": "/assets/hinh/p192-h08.png",
        "img2xUrl": "/assets/hinh-2x/p192-h08.png",
        "width": 195,
        "height": 323,
        "desc": "CHIÊU 7: Tiến chân phải lên trước, hai tay chém 2 đao songsong với mặt đất tay ' phảiở dưới, taytráiởtrên. `"
      },
      {
        "id": "bai-31-m-18",
        "stepNo": "18",
        "assetId": "p193-h01",
        "displayId": "H0980",
        "pdfPage": 193,
        "imgUrl": "/assets/hinh/p193-h01.png",
        "img2xUrl": "/assets/hinh-2x/p193-h01.png",
        "width": 208,
        "height": 315,
        "desc": "CHIÊU 7: Thuchânphảivềvịtrí ` ban đầu tiến chân trái lên trước, hai tay chém 2 đao songsong với mặt đấttay ! trái ở dưới, tay phảiở trên. |"
      },
      {
        "id": "bai-31-m-19",
        "stepNo": "19",
        "assetId": "p193-h02",
        "displayId": "H0981",
        "pdfPage": 193,
        "imgUrl": "/assets/hinh/p193-h02.png",
        "img2xUrl": "/assets/hinh-2x/p193-h02.png",
        "width": 211,
        "height": 315,
        "desc": "CHIÊU 8: Tiến về hướng phía trước 3 bước (quay thân) kết hợp với các động tác tương ứng 7.1;72; 7.1."
      },
      {
        "id": "bai-31-m-20",
        "stepNo": "20",
        "assetId": "p193-h03",
        "displayId": "H0982",
        "pdfPage": 193,
        "imgUrl": "/assets/hinh/p193-h03.png",
        "img2xUrl": "/assets/hinh-2x/p193-h03.png",
        "width": 250,
        "height": 315,
        "desc": "CHIÊU 12: Lùi về 3 bước (lật thân) động tác tay theo th tự như sau: 7.177.2;7.1."
      },
      {
        "id": "bai-31-m-21",
        "stepNo": "21",
        "assetId": "p193-h04",
        "displayId": "H0983",
        "pdfPage": 193,
        "imgUrl": "/assets/hinh/p193-h04.png",
        "img2xUrl": "/assets/hinh-2x/p193-h04.png",
        "width": 248,
        "height": 317,
        "desc": "CHIÊU 12: Thu đao về thế 222."
      },
      {
        "id": "bai-31-m-22",
        "stepNo": "22",
        "assetId": "p193-h05",
        "displayId": "H0984",
        "pdfPage": 193,
        "imgUrl": "/assets/hinh/p193-h05.png",
        "img2xUrl": "/assets/hinh-2x/p193-h05.png",
        "width": 120,
        "height": 317,
        "desc": "CHIÊU 13: Chân đứng Kiềm Dương, tay phải đâm đao về phía trước, tay trái giữ nguyên."
      },
      {
        "id": "bai-31-m-23",
        "stepNo": "23",
        "assetId": "p193-h06",
        "displayId": "H0985",
        "pdfPage": 193,
        "imgUrl": "/assets/hinh/p193-h06.png",
        "img2xUrl": "/assets/hinh-2x/p193-h06.png",
        "width": 125,
        "height": 317,
        "desc": "CHIÊU 13: Tay phải hất đao đựng thăng đứng, tay trái đâm đao phía trước."
      },
      {
        "id": "bai-31-m-24",
        "stepNo": "24",
        "assetId": "p194-h01",
        "displayId": "H0986",
        "pdfPage": 194,
        "imgUrl": "/assets/hinh/p194-h01.png",
        "img2xUrl": "/assets/hinh-2x/p194-h01.png",
        "width": 150,
        "height": 312,
        "desc": "CHIÊU 13: Lặp lại động tác 13.1,"
      },
      {
        "id": "bai-31-m-25",
        "stepNo": "25",
        "assetId": "p194-h02",
        "displayId": "H0987",
        "pdfPage": 194,
        "imgUrl": "/assets/hinh/p194-h02.png",
        "img2xUrl": "/assets/hinh-2x/p194-h02.png",
        "width": 130,
        "height": 332,
        "desc": "CHIÊU 13: Lặp lại các động tác theo thứ tự 13.213.1; 13.2."
      },
      {
        "id": "bai-31-m-26",
        "stepNo": "26",
        "assetId": "p194-h03",
        "displayId": "H0988",
        "pdfPage": 194,
        "imgUrl": "/assets/hinh/p194-h03.png",
        "img2xUrl": "/assets/hinh-2x/p194-h03.png",
        "width": 125,
        "height": 320,
        "desc": "CHIÊU 14: Động tác chém đao ở hình 4.2 (tay phải chém)"
      },
      {
        "id": "bai-31-m-27",
        "stepNo": "27",
        "assetId": "p194-h06",
        "displayId": "H0989",
        "pdfPage": 194,
        "imgUrl": "/assets/hinh/p194-h06.png",
        "img2xUrl": "/assets/hinh-2x/p194-h06.png",
        "width": 210,
        "height": 321,
        "desc": "CHIÊU 14: Tập đối xứng với"
      },
      {
        "id": "bai-31-m-28",
        "stepNo": "28",
        "assetId": "p194-h04",
        "displayId": "H0990",
        "pdfPage": 194,
        "imgUrl": "/assets/hinh/p194-h04.png",
        "img2xUrl": "/assets/hinh-2x/p194-h04.png",
        "width": 215,
        "height": 321,
        "desc": "CHIÊU 15: Chân trái làm trụ xoay người sang phía phải, hai bàn chân song song, chém đao như 4.2."
      },
      {
        "id": "bai-31-m-29",
        "stepNo": "29",
        "assetId": "p194-h05",
        "displayId": "H0991",
        "pdfPage": 194,
        "imgUrl": "/assets/hinh/p194-h05.png",
        "img2xUrl": "/assets/hinh-2x/p194-h05.png",
        "width": 130,
        "height": 321,
        "desc": "CHIÊU 15: Chân phải làm trụ quay về phía sau lưng, tay trái chém ra trước, tay phải gạt đao đỡ trước bụng."
      },
      {
        "id": "bai-31-m-30",
        "stepNo": "30",
        "assetId": "p195-h03",
        "displayId": "H0992",
        "pdfPage": 195,
        "imgUrl": "/assets/hinh/p195-h03.png",
        "img2xUrl": "/assets/hinh-2x/p195-h03.png",
        "width": 110,
        "height": 316,
        "desc": "CHIÊU 16: Quay trở về hướng : banđầu(khởithế) tiến về 1 phía trước 3 bước,tayđao t như chiêu 15 đánh theo C thứ tự: 15.1715.2;15.1. G"
      },
      {
        "id": "bai-31-m-31",
        "stepNo": "31",
        "assetId": "p195-h01",
        "displayId": "H0993",
        "pdfPage": 195,
        "imgUrl": "/assets/hinh/p195-h01.png",
        "img2xUrl": "/assets/hinh-2x/p195-h01.png",
        "width": 145,
        "height": 316,
        "desc": "CHIÊU 16: Tiếnchân trái bằng 1 chân phải thành thế Kiềm c dương tân lặp lại 3 động G tác chém 3.2/3.1/3.2. †"
      },
      {
        "id": "bai-31-m-32",
        "stepNo": "32",
        "assetId": "p195-h02",
        "displayId": "H0994",
        "pdfPage": 195,
        "imgUrl": "/assets/hinh/p195-h02.png",
        "img2xUrl": "/assets/hinh-2x/p195-h02.png",
        "width": 145,
        "height": 320,
        "desc": "CHIÊU 17: Chân trái làm trụ 1 quayl80°ngượcchiều kim ( đồnghồrasaulưng.Tiến t 3 bước về phía trước, tay † đao như chiêu 15 đánh )"
      },
      {
        "id": "bai-31-m-33",
        "stepNo": "33",
        "assetId": "p195-h04",
        "displayId": "H0995",
        "pdfPage": 195,
        "imgUrl": "/assets/hinh/p195-h04.png",
        "img2xUrl": "/assets/hinh-2x/p195-h04.png",
        "width": 105,
        "height": 320,
        "desc": "CHIÊU 17: Tiếnchânphảithành 1 hế Kiềm dương lặp lại 3 1 lộngtácchém giốngnhư t lộng tác 3.1/3.2/3.1. ‹"
      },
      {
        "id": "bai-31-m-34",
        "stepNo": "34",
        "assetId": "p195-h05",
        "displayId": "H0996",
        "pdfPage": 195,
        "imgUrl": "/assets/hinh/p195-h05.png",
        "img2xUrl": "/assets/hinh-2x/p195-h05.png",
        "width": 125,
        "height": 325,
        "desc": "CHIÊU 17: Chân trái làm trụ luay 180? ngược chiều kim lồng hồ về phía sau lưng, ay đao thủ về thế 2.2,"
      },
      {
        "id": "bai-31-m-35",
        "stepNo": "35",
        "assetId": "p195-h06",
        "displayId": "H0997",
        "pdfPage": 195,
        "imgUrl": "/assets/hinh/p195-h06.png",
        "img2xUrl": "/assets/hinh-2x/p195-h06.png",
        "width": 135,
        "height": 325,
        "desc": "CHIÊU 18: Chân trái làm trụ, | iến chân phải lên trước, hân quay sang bên trái, ayphảichéếm đao từ trên 1 uống tay trái đưa sống §"
      },
      {
        "id": "bai-31-m-36",
        "stepNo": "36",
        "assetId": "p195-h07",
        "displayId": "H0998",
        "pdfPage": 195,
        "imgUrl": "/assets/hinh/p195-h07.png",
        "img2xUrl": "/assets/hinh-2x/p195-h07.png",
        "width": 260,
        "height": 310,
        "desc": "CHIÊU 18: Thu chân về bằng kim đồng hồ 180' ra sau thau, chân phải làm trụ, lưng đánh ra động tác tại iến chân trái lên, thân hình18.2 Juay sang bên phải. Tay rái chém đao, tay phải CHIÊU 20: lưa sống đạo lên đỡ . 20.1- Quay son nhìn về hướng ban đầu (khởi thể)."
      },
      {
        "id": "bai-31-m-37",
        "stepNo": "37",
        "assetId": "p195-h08",
        "displayId": "H0999",
        "pdfPage": 195,
        "imgUrl": "/assets/hinh/p195-h08.png",
        "img2xUrl": "/assets/hinh-2x/p195-h08.png",
        "width": 268,
        "height": 310,
        "desc": "CHIÊU 19: j Tiến về phía trước 3 bước,: Thuchân trái về, lấy tay đao đánh theo thứ tự hân tráilàm trụ xoay chân. các động tác 18.1; 18.2; tgượcchiềukimđồnghồ 181. núp Pha Phðid nhi xã 20.2- Tiến chân trái bằn xa . H4 ngiegseogog: chân phải thành Kiềm l9.2- Chân trái làm trụ dương tấn đâm đao theo oay người thuận chiều thứ tự 132, 13.1,13.2."
      },
      {
        "id": "bai-31-m-38",
        "stepNo": "38",
        "assetId": "p196-h01",
        "displayId": "H1000",
        "pdfPage": 196,
        "imgUrl": "/assets/hinh/p196-h01.png",
        "img2xUrl": "/assets/hinh-2x/p196-h01.png",
        "width": 258,
        "height": 320,
        "desc": "CHIÊU 21: Chân trái làm trụ quay người 180' về hướng ban đầu ( khởi thể). Tiến về phía trước 3 bước, tay đao theo thứ tự các động tác 18.2;18.1/18.2."
      },
      {
        "id": "bai-31-m-39",
        "stepNo": "39",
        "assetId": "p196-h02",
        "displayId": "H1001",
        "pdfPage": 196,
        "imgUrl": "/assets/hinh/p196-h02.png",
        "img2xUrl": "/assets/hinh-2x/p196-h02.png",
        "width": 195,
        "height": 320,
        "desc": "CHIÊU 21: Tiến chân phải bằng chân trái thành Kiềm Dương tân đâm đao theo thứ tự 13.1713.2/13.1. Chân trái làm trụ quay . 180° ngược chiều kim đồng hồ về phía sau lưng, tay đao thủ về thế 2.2."
      },
      {
        "id": "bai-31-m-40",
        "stepNo": "40",
        "assetId": "p196-h03",
        "displayId": "H1002",
        "pdfPage": 196,
        "imgUrl": "/assets/hinh/p196-h03.png",
        "img2xUrl": "/assets/hinh-2x/p196-h03.png",
        "width": 175,
        "height": 320,
        "desc": "CHIÊU 22: Chân phải nhấc lên, thân quay sang trái, tay phải chém đao xuông, tay trái gạt đao đỡ trên mặt."
      },
      {
        "id": "bai-31-m-41",
        "stepNo": "41",
        "assetId": "p196-h04",
        "displayId": "H1003",
        "pdfPage": 196,
        "imgUrl": "/assets/hinh/p196-h04.png",
        "img2xUrl": "/assets/hinh-2x/p196-h04.png",
        "width": 120,
        "height": 320,
        "desc": "CHIÊU 22: Lặp lại bên trái đối xứng với động tác 22.1. ."
      },
      {
        "id": "bai-31-m-42",
        "stepNo": "42",
        "assetId": "p196-h05",
        "displayId": "H1004",
        "pdfPage": 196,
        "imgUrl": "/assets/hinh/p196-h05.png",
        "img2xUrl": "/assets/hinh-2x/p196-h05.png",
        "width": 125,
        "height": 320,
        "desc": "CHIÊU 23: Thu chân trái về, lấy chân trái làm trụ xoay chân ngược chiều kim đồng hồ sang phía trái đánh ra động tác tại hình 22.1."
      },
      {
        "id": "bai-31-m-43",
        "stepNo": "43",
        "assetId": "p196-h06",
        "displayId": "H1005",
        "pdfPage": 196,
        "imgUrl": "/assets/hinh/p196-h06.png",
        "img2xUrl": "/assets/hinh-2x/p196-h06.png",
        "width": 120,
        "height": 320,
        "desc": "CHIÊU 23: Hạ chân trái xuống, chân phải làm trụ xoay người thuận chiều kim đồng hồ 180 về sau lưng đánh ra động tác 22.2. ự"
      },
      {
        "id": "bai-31-m-44",
        "stepNo": "44",
        "assetId": "p196-h07",
        "displayId": "H1006",
        "pdfPage": 196,
        "imgUrl": "/assets/hinh/p196-h07.png",
        "img2xUrl": "/assets/hinh-2x/p196-h07.png",
        "width": 125,
        "height": 323,
        "desc": "CHIÊU 24:: Quay người nhìn về : hướng ban đầu (khởi thế). - Tiến về phía trước3bước theo thứ tự các động tác ("
      },
      {
        "id": "bai-31-m-44b",
        "stepNo": "44B",
        "assetId": "p196-h08",
        "displayId": "H1006B",
        "pdfPage": 196,
        "imgUrl": "/assets/hinh/p196-h08.png",
        "img2xUrl": "/assets/hinh-2x/p196-h08.png",
        "width": 123,
        "height": 314,
        "desc": "CHIÊU 24:: Tiếnchân trái bằng 1 chân phải thành Kiểm t dương tần đâm đao theo thứ tự: 13.2/13.1;13.2."
      },
      {
        "id": "bai-31-m-45",
        "stepNo": "45",
        "assetId": "p197-h02",
        "displayId": "H1007",
        "pdfPage": 197,
        "imgUrl": "/assets/hinh/p197-h02.png",
        "img2xUrl": "/assets/hinh-2x/p197-h02.png",
        "width": 140,
        "height": 325,
        "desc": "CHIÊU 25: .: Chân trái làm trụ ] quay người 180' nhìn về c phíasaulưng.Tiếnvề phía c trước 3 bước, tay đao theo. 1"
      },
      {
        "id": "bai-31-m-46",
        "stepNo": "46",
        "assetId": "p197-h01",
        "displayId": "H1008",
        "pdfPage": 197,
        "imgUrl": "/assets/hinh/p197-h01.png",
        "img2xUrl": "/assets/hinh-2x/p197-h01.png",
        "width": 275,
        "height": 325,
        "desc": "CHIÊU 25: .: Tiếnchânphảibằng hân trái thành Kiềm 2 lươngtấn,đâm đao theo r hứ từ 13.1)13.2;13.1. t \"hân trái làm trụ quay 2 80\" ngược chiều kim đồng - tỖ nhìn về phía sau lưng ay đao thủ về thế 2.2. :"
      },
      {
        "id": "bai-31-m-47",
        "stepNo": "47",
        "assetId": "p197-h03",
        "displayId": "H1009",
        "pdfPage": 197,
        "imgUrl": "/assets/hinh/p197-h03.png",
        "img2xUrl": "/assets/hinh-2x/p197-h03.png",
        "width": 150,
        "height": 325,
        "desc": "CHIÊU 26: ỹ: Chân phải làm trụ ¿ Ooayngườitiếnchântrái 2 ên trước. Tay phải chém T héo ra trước, tay trái đỡ t hếch đao với chiều cao lưỡi 'gang bụng (Bàng đao)."
      },
      {
        "id": "bai-31-m-48",
        "stepNo": "48",
        "assetId": "p197-h04",
        "displayId": "H1010",
        "pdfPage": 197,
        "imgUrl": "/assets/hinh/p197-h04.png",
        "img2xUrl": "/assets/hinh-2x/p197-h04.png",
        "width": 280,
        "height": 325,
        "desc": "CHIÊU 26: ỹ: Rút chân trái về, tiến. 27.1- Chân trái làm trụ hân phải lên lặp lại đối quay người 180F nhìn về ứng động tác 26.1. hướng sau lung."
      },
      {
        "id": "bai-31-m-49",
        "stepNo": "49",
        "assetId": "p197-h05",
        "displayId": "H1011",
        "pdfPage": 197,
        "imgUrl": "/assets/hinh/p197-h05.png",
        "img2xUrl": "/assets/hinh-2x/p197-h05.png",
        "width": 115,
        "height": 325,
        "desc": "CHIÊU 26: ỹ: Tiến chân 3 bước, 27.2- Tiến về phía trước 3 hốihợpvớithếđaotheo bước tập tương tự chiêu 26 hứ tự các động tác 26.1; nhưng đối xứng sang trái. 62/261. 27.3- Chân trái làm trụ"
      },
      {
        "id": "bai-31-m-50",
        "stepNo": "50",
        "assetId": "p197-h06",
        "displayId": "H1012",
        "pdfPage": 197,
        "imgUrl": "/assets/hinh/p197-h06.png",
        "img2xUrl": "/assets/hinh-2x/p197-h06.png",
        "width": 135,
        "height": 325,
        "desc": "CHIÊU 26: ỹ: Tiến chân phải lên quay 180° ngược chiều kim gang chân trái thành tấn đồng hồ về phái sau lưng, iềm dương,chém hất đao. ÈAy đạo thủ về thế 2.2. ay phải từ dưới lên như li 205 CHIÊU 28: 7 28.1- Tiến chân phải lên"
      },
      {
        "id": "bai-31-m-51",
        "stepNo": "51",
        "assetId": "p197-h07",
        "displayId": "H1013",
        "pdfPage": 197,
        "imgUrl": "/assets/hinh/p197-h07.png",
        "img2xUrl": "/assets/hinh-2x/p197-h07.png",
        "width": 125,
        "height": 315,
        "desc": "CHIÊU 26: ỹ: Tay phải chém lên trước tay phải dựng đao, gang vai thì hạ xuống, tay trái đáo đao chúc ay trái chém lên theo. xuống dưới. Hải đao thành & 1 đường thẳng (nhất tự CHIẾU 24 đao) đánh 2 đao ra trước."
      },
      {
        "id": "bai-31-m-52",
        "stepNo": "52",
        "assetId": "p197-h08",
        "displayId": "H1014",
        "pdfPage": 197,
        "imgUrl": "/assets/hinh/p197-h08.png",
        "img2xUrl": "/assets/hinh-2x/p197-h08.png",
        "width": 120,
        "height": 315,
        "desc": "CHIÊU 26: ỹ: Lùi chân phải về bằng chân trái, tập đối xứng 28.1 sang bên trái."
      },
      {
        "id": "bai-31-m-53",
        "stepNo": "53",
        "assetId": "p197-h09",
        "displayId": "H1015",
        "pdfPage": 197,
        "imgUrl": "/assets/hinh/p197-h09.png",
        "img2xUrl": "/assets/hinh-2x/p197-h09.png",
        "width": 150,
        "height": 315,
        "desc": "CHIÊU 29: Thu chân trái về, lấy chân trái làm trụ xoay chân ngược chiều kim đồng hồ sang phía trái đánh ra động tác tại hình"
      },
      {
        "id": "bai-31-m-54",
        "stepNo": "54",
        "assetId": "p198-h01",
        "displayId": "H1016",
        "pdfPage": 198,
        "imgUrl": "/assets/hinh/p198-h01.png",
        "img2xUrl": "/assets/hinh-2x/p198-h01.png",
        "width": 145,
        "height": 340,
        "desc": "CHIÊU 29: Chân phải làm trụ xoay người thuận chiều kim đồng hồ 180° ra sau lưng, tay đảo đao ngược lại đánh ra động tác 28.2."
      },
      {
        "id": "bai-31-m-55",
        "stepNo": "55",
        "assetId": "p198-h02",
        "displayId": "H1017",
        "pdfPage": 198,
        "imgUrl": "/assets/hinh/p198-h02.png",
        "img2xUrl": "/assets/hinh-2x/p198-h02.png",
        "width": 150,
        "height": 335,
        "desc": "CHIÊU 30: Quay về phía khởi thế lặp lại động tác 28.1."
      },
      {
        "id": "bai-31-m-56",
        "stepNo": "56",
        "assetId": "p198-h03",
        "displayId": "H1018",
        "pdfPage": 198,
        "imgUrl": "/assets/hinh/p198-h03.png",
        "img2xUrl": "/assets/hinh-2x/p198-h03.png",
        "width": 155,
        "height": 335,
        "desc": "CHIÊU 30: Tay phải quay đao về cầm bình thường chém thốc từ dưới lên, tay trái dựng đao thủ trước ngực."
      },
      {
        "id": "bai-31-m-57",
        "stepNo": "57",
        "assetId": "p198-h04",
        "displayId": "H1019",
        "pdfPage": 198,
        "imgUrl": "/assets/hinh/p198-h04.png",
        "img2xUrl": "/assets/hinh-2x/p198-h04.png",
        "width": 165,
        "height": 325,
        "desc": "CHIÊU 30: Chém xong tay phải quay ngang đỡ, tay trái giữ nguyên"
      },
      {
        "id": "bai-31-m-58",
        "stepNo": "58",
        "assetId": "p198-h06",
        "displayId": "H1020",
        "pdfPage": 198,
        "imgUrl": "/assets/hinh/p198-h06.png",
        "img2xUrl": "/assets/hinh-2x/p198-h06.png",
        "width": 150,
        "height": 325,
        "desc": "CHIÊU 30: Tay trái quay đao sát gióng tay trái, giơ lên đỡ song song với tay đao bên phải."
      },
      {
        "id": "bai-31-m-59",
        "stepNo": "59",
        "assetId": "p198-h05",
        "displayId": "H1021",
        "pdfPage": 198,
        "imgUrl": "/assets/hinh/p198-h05.png",
        "img2xUrl": "/assets/hinh-2x/p198-h05.png",
        "width": 135,
        "height": 325,
        "desc": "CHIÊU 30: Chân trái lùi về phía sau tay phải quay đao về bình thường chém xuống trước, tay trái dựng đao thủ."
      },
      {
        "id": "bai-31-m-60",
        "stepNo": "60",
        "assetId": "p198-h07",
        "displayId": "H1022",
        "pdfPage": 198,
        "imgUrl": "/assets/hinh/p198-h07.png",
        "img2xUrl": "/assets/hinh-2x/p198-h07.png",
        "width": 130,
        "height": 325,
        "desc": "CHIÊU 30: Chân trái làm trụ, lùi chân phải tiếp 1 bước nữa. Tay phải quay đao, sống đao gập áp sát cánh tay. Tay trái cằm đao, hai đao chập thành đường thẳng, chém đao tay trái chéo xuống."
      },
      {
        "id": "bai-31-m-61",
        "stepNo": "61",
        "assetId": "p198-h08",
        "displayId": "H1023",
        "pdfPage": 198,
        "imgUrl": "/assets/hinh/p198-h08.png",
        "img2xUrl": "/assets/hinh-2x/p198-h08.png",
        "width": 165,
        "height": 325,
        "desc": "CHIÊU 30: Chân trái rút về song song với bàn chấn phải. Thân quay sang trái. Tay trái quay đao gấp sống đao vào cánh tay, tay phải quay đao chém chéo xuống phía trước, sao cho 2 cán đao chạm nhau, 2 lưỡi đao tạo thành đường thẳng."
      }
    ],
    "recommendedPrerequisites": []
  },
  {
    "id": "con",
    "title": "Côn",
    "groupId": "vu-khi",
    "bookOrder": 32,
    "contentType": "weapon_form",
    "pdfPages": [
      199,
      200,
      201,
      202
    ],
    "pageRange": "Trang PDF 199 – 202",
    "assetCount": 32,
    "assets": [
      {
        "assetId": "p199-h01",
        "displayId": "H1024",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h01.png",
        "img2xUrl": "/assets/hinh-2x/p199-h01.png",
        "width": 155,
        "height": 323
      },
      {
        "assetId": "p199-h03",
        "displayId": "H1025",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h03.png",
        "img2xUrl": "/assets/hinh-2x/p199-h03.png",
        "width": 140,
        "height": 328
      },
      {
        "assetId": "p199-h04",
        "displayId": "H1026",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h04.png",
        "img2xUrl": "/assets/hinh-2x/p199-h04.png",
        "width": 140,
        "height": 378
      },
      {
        "assetId": "p199-h06",
        "displayId": "H1027",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h06.png",
        "img2xUrl": "/assets/hinh-2x/p199-h06.png",
        "width": 145,
        "height": 377
      },
      {
        "assetId": "p199-h05",
        "displayId": "H1028",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h05.png",
        "img2xUrl": "/assets/hinh-2x/p199-h05.png",
        "width": 335,
        "height": 317
      },
      {
        "assetId": "p199-h07",
        "displayId": "H1029",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h07.png",
        "img2xUrl": "/assets/hinh-2x/p199-h07.png",
        "width": 330,
        "height": 325
      },
      {
        "assetId": "p199-h02",
        "displayId": "H1030",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h02.png",
        "img2xUrl": "/assets/hinh-2x/p199-h02.png",
        "width": 350,
        "height": 325
      },
      {
        "assetId": "p199-h08",
        "displayId": "H1031",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h08.png",
        "img2xUrl": "/assets/hinh-2x/p199-h08.png",
        "width": 335,
        "height": 325
      },
      {
        "assetId": "p200-h01",
        "displayId": "H1032",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h01.png",
        "img2xUrl": "/assets/hinh-2x/p200-h01.png",
        "width": 110,
        "height": 368
      },
      {
        "assetId": "p200-h02",
        "displayId": "H1033",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h02.png",
        "img2xUrl": "/assets/hinh-2x/p200-h02.png",
        "width": 105,
        "height": 320
      },
      {
        "assetId": "p200-h03",
        "displayId": "H1034",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h03.png",
        "img2xUrl": "/assets/hinh-2x/p200-h03.png",
        "width": 330,
        "height": 320
      },
      {
        "assetId": "p200-h04",
        "displayId": "H1035",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h04.png",
        "img2xUrl": "/assets/hinh-2x/p200-h04.png",
        "width": 147,
        "height": 345
      },
      {
        "assetId": "p200-h06",
        "displayId": "H1036",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h06.png",
        "img2xUrl": "/assets/hinh-2x/p200-h06.png",
        "width": 185,
        "height": 330
      },
      {
        "assetId": "p200-h05",
        "displayId": "H1037",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h05.png",
        "img2xUrl": "/assets/hinh-2x/p200-h05.png",
        "width": 130,
        "height": 345
      },
      {
        "assetId": "p200-h09",
        "displayId": "H1038",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h09.png",
        "img2xUrl": "/assets/hinh-2x/p200-h09.png",
        "width": 145,
        "height": 328
      },
      {
        "assetId": "p200-h07",
        "displayId": "H1039",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h07.png",
        "img2xUrl": "/assets/hinh-2x/p200-h07.png",
        "width": 110,
        "height": 333
      },
      {
        "assetId": "p200-h08",
        "displayId": "H1040",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h08.png",
        "img2xUrl": "/assets/hinh-2x/p200-h08.png",
        "width": 110,
        "height": 333
      },
      {
        "assetId": "p201-h01",
        "displayId": "H1041",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h01.png",
        "img2xUrl": "/assets/hinh-2x/p201-h01.png",
        "width": 125,
        "height": 322
      },
      {
        "assetId": "p201-h03",
        "displayId": "H1042",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h03.png",
        "img2xUrl": "/assets/hinh-2x/p201-h03.png",
        "width": 110,
        "height": 322
      },
      {
        "assetId": "p201-h02",
        "displayId": "H1043",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h02.png",
        "img2xUrl": "/assets/hinh-2x/p201-h02.png",
        "width": 160,
        "height": 322
      },
      {
        "assetId": "p201-h04",
        "displayId": "H1044",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h04.png",
        "img2xUrl": "/assets/hinh-2x/p201-h04.png",
        "width": 110,
        "height": 317
      },
      {
        "assetId": "p201-h05",
        "displayId": "H1045",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h05.png",
        "img2xUrl": "/assets/hinh-2x/p201-h05.png",
        "width": 275,
        "height": 292
      },
      {
        "assetId": "p201-h06",
        "displayId": "H1046",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h06.png",
        "img2xUrl": "/assets/hinh-2x/p201-h06.png",
        "width": 360,
        "height": 324
      },
      {
        "assetId": "p201-h07",
        "displayId": "H1047",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h07.png",
        "img2xUrl": "/assets/hinh-2x/p201-h07.png",
        "width": 280,
        "height": 324
      },
      {
        "assetId": "p202-h01",
        "displayId": "H1048",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h01.png",
        "img2xUrl": "/assets/hinh-2x/p202-h01.png",
        "width": 135,
        "height": 380
      },
      {
        "assetId": "p202-h02",
        "displayId": "H1049",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h02.png",
        "img2xUrl": "/assets/hinh-2x/p202-h02.png",
        "width": 150,
        "height": 330
      },
      {
        "assetId": "p202-h03",
        "displayId": "H1050",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h03.png",
        "img2xUrl": "/assets/hinh-2x/p202-h03.png",
        "width": 152,
        "height": 338
      },
      {
        "assetId": "p202-h04",
        "displayId": "H1051",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h04.png",
        "img2xUrl": "/assets/hinh-2x/p202-h04.png",
        "width": 365,
        "height": 316
      },
      {
        "assetId": "p202-h05",
        "displayId": "H1052",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h05.png",
        "img2xUrl": "/assets/hinh-2x/p202-h05.png",
        "width": 130,
        "height": 316
      },
      {
        "assetId": "p202-h06",
        "displayId": "H1053",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h06.png",
        "img2xUrl": "/assets/hinh-2x/p202-h06.png",
        "width": 160,
        "height": 320
      },
      {
        "assetId": "p202-h07",
        "displayId": "H1054",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h07.png",
        "img2xUrl": "/assets/hinh-2x/p202-h07.png",
        "width": 135,
        "height": 315
      },
      {
        "assetId": "p202-h08",
        "displayId": "H1055",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h08.png",
        "img2xUrl": "/assets/hinh-2x/p202-h08.png",
        "width": 180,
        "height": 350
      }
    ],
    "motions": [
      {
        "id": "con-m-1",
        "stepNo": "1",
        "assetId": "p199-h01",
        "displayId": "H1024",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h01.png",
        "img2xUrl": "/assets/hinh-2x/p199-h01.png",
        "width": 155,
        "height": 323,
        "desc": "Chuẩn bị: 2 chân sát nhau, tay trái cằm côn, 2 tay để sát thân và đứng thẳng."
      },
      {
        "id": "con-m-2",
        "stepNo": "2",
        "assetId": "p199-h03",
        "displayId": "H1025",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h03.png",
        "img2xUrl": "/assets/hinh-2x/p199-h03.png",
        "width": 140,
        "height": 328,
        "desc": "Côn lễ: Tấn Kiềm dương. Tay phải đưa sang trái. Bàn tay phải xoè, úp chạm sát côn."
      },
      {
        "id": "con-m-3",
        "stepNo": "3",
        "assetId": "p199-h04",
        "displayId": "H1026",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h04.png",
        "img2xUrl": "/assets/hinh-2x/p199-h04.png",
        "width": 140,
        "height": 378,
        "desc": "Hai tay cằm 1/3 côn tính từ 2 đầu côn, xoay người sang phải đỡ sang."
      },
      {
        "id": "con-m-4",
        "stepNo": "4",
        "assetId": "p199-h06",
        "displayId": "H1027",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h06.png",
        "img2xUrl": "/assets/hinh-2x/p199-h06.png",
        "width": 145,
        "height": 377,
        "desc": "Tương tự động tác 1.1 chỉ khác ở chỗ quay người và đỡ sang trái."
      },
      {
        "id": "con-m-5",
        "stepNo": "5",
        "assetId": "p199-h05",
        "displayId": "H1028",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h05.png",
        "img2xUrl": "/assets/hinh-2x/p199-h05.png",
        "width": 335,
        "height": 317,
        "desc": "CHIÊU 2: Xoay người tiến chân phải 1 bước đập côn xuống."
      },
      {
        "id": "con-m-6",
        "stepNo": "6",
        "assetId": "p199-h07",
        "displayId": "H1029",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h07.png",
        "img2xUrl": "/assets/hinh-2x/p199-h07.png",
        "width": 330,
        "height": 325,
        "desc": "CHIÊU 2: Cổ tay xoay 1 vòng tròn, sau đó đập côn bằng xuông."
      },
      {
        "id": "con-m-7",
        "stepNo": "7",
        "assetId": "p199-h02",
        "displayId": "H1030",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h02.png",
        "img2xUrl": "/assets/hinh-2x/p199-h02.png",
        "width": 350,
        "height": 325,
        "desc": "CHIÊU 3: Lướt 2 chân về phía trước 1 bước, thúc côn hướng lên trên (tay, chân phải ở trước)."
      },
      {
        "id": "con-m-8",
        "stepNo": "8",
        "assetId": "p199-h08",
        "displayId": "H1031",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h08.png",
        "img2xUrl": "/assets/hinh-2x/p199-h08.png",
        "width": 335,
        "height": 325,
        "desc": "CHIÊU 3: Tiếp tục lướt 2 chân về phía trước 1 bước, thúc côn hướng xuống dưới."
      },
      {
        "id": "con-m-9",
        "stepNo": "9",
        "assetId": "p200-h01",
        "displayId": "H1032",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h01.png",
        "img2xUrl": "/assets/hinh-2x/p200-h01.png",
        "width": 110,
        "height": 368,
        "desc": "CHIÊU 4: Đập đầu côn xuống đất 3 lần tại 3 điểm tạo thành hình tam giác."
      },
      {
        "id": "con-m-10",
        "stepNo": "10",
        "assetId": "p200-h02",
        "displayId": "H1033",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h02.png",
        "img2xUrl": "/assets/hinh-2x/p200-h02.png",
        "width": 105,
        "height": 320,
        "desc": "CHIÊU 5: Lùi 2 chân về phía sau 1 bước, kéo lê côn 1 lần. Lùi tất cả 3 bước kéo lê côn theo 3 lân (tư thê như hình 4)."
      },
      {
        "id": "con-m-11",
        "stepNo": "11",
        "assetId": "p200-h03",
        "displayId": "H1034",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h03.png",
        "img2xUrl": "/assets/hinh-2x/p200-h03.png",
        "width": 330,
        "height": 320,
        "desc": "CHIÊU 6: Xoay người tiến chân trái 1 bước, quay côn đánh đầu côn sau ra trước."
      },
      {
        "id": "con-m-12",
        "stepNo": "12",
        "assetId": "p200-h04",
        "displayId": "H1035",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h04.png",
        "img2xUrl": "/assets/hinh-2x/p200-h04.png",
        "width": 147,
        "height": 345,
        "desc": "CHIÊU 6: Như động tác 6.1 nhưng tiến chân phái."
      },
      {
        "id": "con-m-13",
        "stepNo": "13",
        "assetId": "p200-h06",
        "displayId": "H1036",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h06.png",
        "img2xUrl": "/assets/hinh-2x/p200-h06.png",
        "width": 185,
        "height": 330,
        "desc": "CHIÊU 6: Lặp lại động tác 6.1"
      },
      {
        "id": "con-m-14",
        "stepNo": "14",
        "assetId": "p200-h05",
        "displayId": "H1037",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h05.png",
        "img2xUrl": "/assets/hinh-2x/p200-h05.png",
        "width": 130,
        "height": 345,
        "desc": "CHIÊU 7: Lùi chân trái 1 bước, đảo đầu côn hất lên trên."
      },
      {
        "id": "con-m-15",
        "stepNo": "15",
        "assetId": "p200-h09",
        "displayId": "H1038",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h09.png",
        "img2xUrl": "/assets/hinh-2x/p200-h09.png",
        "width": 145,
        "height": 328,
        "desc": "CHIÊU 7: như động tác 7.1 nhưng lùi chân phải."
      },
      {
        "id": "con-m-16",
        "stepNo": "16",
        "assetId": "p200-h07",
        "displayId": "H1039",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h07.png",
        "img2xUrl": "/assets/hinh-2x/p200-h07.png",
        "width": 110,
        "height": 333,
        "desc": "CHIÊU 7: Lặp lại động tác 7.1"
      },
      {
        "id": "con-m-17",
        "stepNo": "17",
        "assetId": "p200-h08",
        "displayId": "H1040",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h08.png",
        "img2xUrl": "/assets/hinh-2x/p200-h08.png",
        "width": 110,
        "height": 333,
        "desc": "CHIÊU 8: Trở ngược đầu côn vặn người đánh đầu côn sau vát sang phải hướng lên trên (tay trái, chân phải ở trước)."
      },
      {
        "id": "con-m-18",
        "stepNo": "18",
        "assetId": "p201-h01",
        "displayId": "H1041",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h01.png",
        "img2xUrl": "/assets/hinh-2x/p201-h01.png",
        "width": 125,
        "height": 322,
        "desc": "CHIÊU 8: Chỉ dùng cổ tay trái ngoáy đầu côn 3 vòng sau đó thúc ra trước."
      },
      {
        "id": "con-m-19",
        "stepNo": "19",
        "assetId": "p201-h03",
        "displayId": "H1042",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h03.png",
        "img2xUrl": "/assets/hinh-2x/p201-h03.png",
        "width": 110,
        "height": 322,
        "desc": "CHIÊU 8: Dùng côn chặn xuống, côn song song mặt đất."
      },
      {
        "id": "con-m-20",
        "stepNo": "20",
        "assetId": "p201-h02",
        "displayId": "H1043",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h02.png",
        "img2xUrl": "/assets/hinh-2x/p201-h02.png",
        "width": 160,
        "height": 322,
        "desc": "CHIÊU 9: Như động tác 8.1 Nhưng thực hiện bên phải."
      },
      {
        "id": "con-m-21",
        "stepNo": "21",
        "assetId": "p201-h04",
        "displayId": "H1044",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h04.png",
        "img2xUrl": "/assets/hinh-2x/p201-h04.png",
        "width": 110,
        "height": 317,
        "desc": "CHIÊU 9: Như động tác 8.2."
      },
      {
        "id": "con-m-22",
        "stepNo": "22",
        "assetId": "p201-h05",
        "displayId": "H1045",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h05.png",
        "img2xUrl": "/assets/hinh-2x/p201-h05.png",
        "width": 275,
        "height": 292,
        "desc": "CHIÊU 9: Như động tác 8.3."
      },
      {
        "id": "con-m-23",
        "stepNo": "23",
        "assetId": "p201-h06",
        "displayId": "H1046",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h06.png",
        "img2xUrl": "/assets/hinh-2x/p201-h06.png",
        "width": 360,
        "height": 324,
        "desc": "CHIÊU 10: Tiến chân phải, thúc côn ra trước."
      },
      {
        "id": "con-m-24",
        "stepNo": "24",
        "assetId": "p201-h07",
        "displayId": "H1047",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h07.png",
        "img2xUrl": "/assets/hinh-2x/p201-h07.png",
        "width": 280,
        "height": 324,
        "desc": "CHIÊU 10: Xoay người 180' về bên trái. Tiến chân trái 1 bước, thúc côn ra sau."
      },
      {
        "id": "con-m-25",
        "stepNo": "25",
        "assetId": "p202-h01",
        "displayId": "H1048",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h01.png",
        "img2xUrl": "/assets/hinh-2x/p202-h01.png",
        "width": 135,
        "height": 380,
        "desc": "CHIÊU 11;: Trở ngược đầu côn vặn người vụt côn ngang sang trái (tay phải, chân trái ở phía trước)."
      },
      {
        "id": "con-m-26",
        "stepNo": "26",
        "assetId": "p202-h02",
        "displayId": "H1049",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h02.png",
        "img2xUrl": "/assets/hinh-2x/p202-h02.png",
        "width": 150,
        "height": 330,
        "desc": "CHIÊU 11;: Trở ngược đầu côn, vặn người vụt ngang sang phải (ngược lại chiều cũ)."
      },
      {
        "id": "con-m-27",
        "stepNo": "27",
        "assetId": "p202-h03",
        "displayId": "H1050",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h03.png",
        "img2xUrl": "/assets/hinh-2x/p202-h03.png",
        "width": 152,
        "height": 338,
        "desc": "CHIÊU 12: Trở ngược đầu côn vặn người vụt sang phải."
      },
      {
        "id": "con-m-28",
        "stepNo": "28",
        "assetId": "p202-h04",
        "displayId": "H1051",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h04.png",
        "img2xUrl": "/assets/hinh-2x/p202-h04.png",
        "width": 365,
        "height": 316,
        "desc": "CHIÊU 12: Trở ngược đầu côn vặn người vụt ngược lại."
      },
      {
        "id": "con-m-29",
        "stepNo": "29",
        "assetId": "p202-h05",
        "displayId": "H1052",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h05.png",
        "img2xUrl": "/assets/hinh-2x/p202-h05.png",
        "width": 130,
        "height": 316,
        "desc": "CHIÊU 13: Đứng Chảo mã tấn, lướt người vào, thu 2 tay cầm côn gần sát nhau, thúc chếch lên."
      },
      {
        "id": "con-m-30",
        "stepNo": "30",
        "assetId": "p202-h06",
        "displayId": "H1053",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h06.png",
        "img2xUrl": "/assets/hinh-2x/p202-h06.png",
        "width": 160,
        "height": 320,
        "desc": "CHIÊU 14: Xoay người 180° về bên trái, vụt ngang côn theo hướng xoay, thu 2 tay gần sát nhau về gần cuối côn và sát ngực như tư thế của người thổi sáo."
      },
      {
        "id": "con-m-31",
        "stepNo": "31",
        "assetId": "p202-h07",
        "displayId": "H1054",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h07.png",
        "img2xUrl": "/assets/hinh-2x/p202-h07.png",
        "width": 135,
        "height": 315,
        "desc": "CHIÊU 15: (loan côn): Xoayngườitiếnchân - sau lên, người cũng xoay theo, trở ngược mũi côn | vụt ra trước. 2 đầu côn thay nhau đảo chiều để đánh kết hợp với sự vặn chéo nhịp nhàng của 2 căng tay tạo thành đòn đánh liên hoàn, kèm tiến lên. : Đây là động tác loan côn tiến và ta lặp lại 3 lân."
      },
      {
        "id": "con-m-32",
        "stepNo": "32",
        "assetId": "p202-h08",
        "displayId": "H1055",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h08.png",
        "img2xUrl": "/assets/hinh-2x/p202-h08.png",
        "width": 180,
        "height": 350,
        "desc": "CHIÊU 15: (loan côn): Xoay lùi chân tr người cũng xoay thec ngược mũi côn hất từ lên trên. 2 đầu côn th nhau đảo chiều để đá cùng kết hợp với sự v chéo nhịp nhàng của tay tạo thành đòn đái hoàn, kèm bước lùi. Đây là động tác loan cön lùi và ta lặp lại 5 lân."
      }
    ],
    "recommendedPrerequisites": []
  },
  {
    "id": "lieu-diep-kiem",
    "title": "Liễu Diệp Kiếm",
    "groupId": "vu-khi",
    "bookOrder": 33,
    "contentType": "weapon_form",
    "pdfPages": [
      202,
      203,
      204,
      205,
      206
    ],
    "pageRange": "Trang PDF 202 – 206",
    "assetCount": 56,
    "assets": [
      {
        "assetId": "p199-h01",
        "displayId": "H1024",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h01.png",
        "img2xUrl": "/assets/hinh-2x/p199-h01.png",
        "width": 155,
        "height": 323
      },
      {
        "assetId": "p199-h03",
        "displayId": "H1025",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h03.png",
        "img2xUrl": "/assets/hinh-2x/p199-h03.png",
        "width": 140,
        "height": 328
      },
      {
        "assetId": "p199-h04",
        "displayId": "H1026",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h04.png",
        "img2xUrl": "/assets/hinh-2x/p199-h04.png",
        "width": 140,
        "height": 378
      },
      {
        "assetId": "p199-h06",
        "displayId": "H1027",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h06.png",
        "img2xUrl": "/assets/hinh-2x/p199-h06.png",
        "width": 145,
        "height": 377
      },
      {
        "assetId": "p199-h05",
        "displayId": "H1028",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h05.png",
        "img2xUrl": "/assets/hinh-2x/p199-h05.png",
        "width": 335,
        "height": 317
      },
      {
        "assetId": "p199-h07",
        "displayId": "H1029",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h07.png",
        "img2xUrl": "/assets/hinh-2x/p199-h07.png",
        "width": 330,
        "height": 325
      },
      {
        "assetId": "p199-h02",
        "displayId": "H1030",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h02.png",
        "img2xUrl": "/assets/hinh-2x/p199-h02.png",
        "width": 350,
        "height": 325
      },
      {
        "assetId": "p199-h08",
        "displayId": "H1031",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h08.png",
        "img2xUrl": "/assets/hinh-2x/p199-h08.png",
        "width": 335,
        "height": 325
      },
      {
        "assetId": "p200-h01",
        "displayId": "H1032",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h01.png",
        "img2xUrl": "/assets/hinh-2x/p200-h01.png",
        "width": 110,
        "height": 368
      },
      {
        "assetId": "p200-h02",
        "displayId": "H1033",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h02.png",
        "img2xUrl": "/assets/hinh-2x/p200-h02.png",
        "width": 105,
        "height": 320
      },
      {
        "assetId": "p200-h03",
        "displayId": "H1034",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h03.png",
        "img2xUrl": "/assets/hinh-2x/p200-h03.png",
        "width": 330,
        "height": 320
      },
      {
        "assetId": "p200-h04",
        "displayId": "H1035",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h04.png",
        "img2xUrl": "/assets/hinh-2x/p200-h04.png",
        "width": 147,
        "height": 345
      },
      {
        "assetId": "p200-h06",
        "displayId": "H1036",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h06.png",
        "img2xUrl": "/assets/hinh-2x/p200-h06.png",
        "width": 185,
        "height": 330
      },
      {
        "assetId": "p200-h05",
        "displayId": "H1037",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h05.png",
        "img2xUrl": "/assets/hinh-2x/p200-h05.png",
        "width": 130,
        "height": 345
      },
      {
        "assetId": "p200-h09",
        "displayId": "H1038",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h09.png",
        "img2xUrl": "/assets/hinh-2x/p200-h09.png",
        "width": 145,
        "height": 328
      },
      {
        "assetId": "p200-h07",
        "displayId": "H1039",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h07.png",
        "img2xUrl": "/assets/hinh-2x/p200-h07.png",
        "width": 110,
        "height": 333
      },
      {
        "assetId": "p200-h08",
        "displayId": "H1040",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h08.png",
        "img2xUrl": "/assets/hinh-2x/p200-h08.png",
        "width": 110,
        "height": 333
      },
      {
        "assetId": "p201-h01",
        "displayId": "H1041",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h01.png",
        "img2xUrl": "/assets/hinh-2x/p201-h01.png",
        "width": 125,
        "height": 322
      },
      {
        "assetId": "p201-h03",
        "displayId": "H1042",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h03.png",
        "img2xUrl": "/assets/hinh-2x/p201-h03.png",
        "width": 110,
        "height": 322
      },
      {
        "assetId": "p201-h02",
        "displayId": "H1043",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h02.png",
        "img2xUrl": "/assets/hinh-2x/p201-h02.png",
        "width": 160,
        "height": 322
      },
      {
        "assetId": "p201-h04",
        "displayId": "H1044",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h04.png",
        "img2xUrl": "/assets/hinh-2x/p201-h04.png",
        "width": 110,
        "height": 317
      },
      {
        "assetId": "p201-h05",
        "displayId": "H1045",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h05.png",
        "img2xUrl": "/assets/hinh-2x/p201-h05.png",
        "width": 275,
        "height": 292
      },
      {
        "assetId": "p201-h06",
        "displayId": "H1046",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h06.png",
        "img2xUrl": "/assets/hinh-2x/p201-h06.png",
        "width": 360,
        "height": 324
      },
      {
        "assetId": "p201-h07",
        "displayId": "H1047",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h07.png",
        "img2xUrl": "/assets/hinh-2x/p201-h07.png",
        "width": 280,
        "height": 324
      },
      {
        "assetId": "p202-h01",
        "displayId": "H1048",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h01.png",
        "img2xUrl": "/assets/hinh-2x/p202-h01.png",
        "width": 135,
        "height": 380
      },
      {
        "assetId": "p202-h02",
        "displayId": "H1049",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h02.png",
        "img2xUrl": "/assets/hinh-2x/p202-h02.png",
        "width": 150,
        "height": 330
      },
      {
        "assetId": "p202-h03",
        "displayId": "H1050",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h03.png",
        "img2xUrl": "/assets/hinh-2x/p202-h03.png",
        "width": 152,
        "height": 338
      },
      {
        "assetId": "p202-h04",
        "displayId": "H1051",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h04.png",
        "img2xUrl": "/assets/hinh-2x/p202-h04.png",
        "width": 365,
        "height": 316
      },
      {
        "assetId": "p202-h05",
        "displayId": "H1052",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h05.png",
        "img2xUrl": "/assets/hinh-2x/p202-h05.png",
        "width": 130,
        "height": 316
      },
      {
        "assetId": "p202-h06",
        "displayId": "H1053",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h06.png",
        "img2xUrl": "/assets/hinh-2x/p202-h06.png",
        "width": 160,
        "height": 320
      },
      {
        "assetId": "p202-h07",
        "displayId": "H1054",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h07.png",
        "img2xUrl": "/assets/hinh-2x/p202-h07.png",
        "width": 135,
        "height": 315
      },
      {
        "assetId": "p202-h08",
        "displayId": "H1055",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h08.png",
        "img2xUrl": "/assets/hinh-2x/p202-h08.png",
        "width": 180,
        "height": 350
      },
      {
        "assetId": "p203-h01",
        "displayId": "H1056",
        "pdfPage": 203,
        "imgUrl": "/assets/hinh/p203-h01.png",
        "img2xUrl": "/assets/hinh-2x/p203-h01.png",
        "width": 370,
        "height": 318
      },
      {
        "assetId": "p203-h03",
        "displayId": "H1057",
        "pdfPage": 203,
        "imgUrl": "/assets/hinh/p203-h03.png",
        "img2xUrl": "/assets/hinh-2x/p203-h03.png",
        "width": 360,
        "height": 318
      },
      {
        "assetId": "p203-h05",
        "displayId": "H1058",
        "pdfPage": 203,
        "imgUrl": "/assets/hinh/p203-h05.png",
        "img2xUrl": "/assets/hinh-2x/p203-h05.png",
        "width": 102,
        "height": 317
      },
      {
        "assetId": "p203-h02",
        "displayId": "H1059",
        "pdfPage": 203,
        "imgUrl": "/assets/hinh/p203-h02.png",
        "img2xUrl": "/assets/hinh-2x/p203-h02.png",
        "width": 192,
        "height": 317
      },
      {
        "assetId": "p203-h04",
        "displayId": "H1060",
        "pdfPage": 203,
        "imgUrl": "/assets/hinh/p203-h04.png",
        "img2xUrl": "/assets/hinh-2x/p203-h04.png",
        "width": 272,
        "height": 317
      },
      {
        "assetId": "p203-h06",
        "displayId": "H1061",
        "pdfPage": 203,
        "imgUrl": "/assets/hinh/p203-h06.png",
        "img2xUrl": "/assets/hinh-2x/p203-h06.png",
        "width": 95,
        "height": 320
      },
      {
        "assetId": "p204-h01",
        "displayId": "H1062",
        "pdfPage": 204,
        "imgUrl": "/assets/hinh/p204-h01.png",
        "img2xUrl": "/assets/hinh-2x/p204-h01.png",
        "width": 440,
        "height": 293
      },
      {
        "assetId": "p204-h02",
        "displayId": "H1063",
        "pdfPage": 204,
        "imgUrl": "/assets/hinh/p204-h02.png",
        "img2xUrl": "/assets/hinh-2x/p204-h02.png",
        "width": 280,
        "height": 333
      },
      {
        "assetId": "p204-h03",
        "displayId": "H1064",
        "pdfPage": 204,
        "imgUrl": "/assets/hinh/p204-h03.png",
        "img2xUrl": "/assets/hinh-2x/p204-h03.png",
        "width": 255,
        "height": 315
      },
      {
        "assetId": "p204-h04",
        "displayId": "H1065",
        "pdfPage": 204,
        "imgUrl": "/assets/hinh/p204-h04.png",
        "img2xUrl": "/assets/hinh-2x/p204-h04.png",
        "width": 200,
        "height": 320
      },
      {
        "assetId": "p204-h05",
        "displayId": "H1066",
        "pdfPage": 204,
        "imgUrl": "/assets/hinh/p204-h05.png",
        "img2xUrl": "/assets/hinh-2x/p204-h05.png",
        "width": 100,
        "height": 395
      },
      {
        "assetId": "p204-h06",
        "displayId": "H1067",
        "pdfPage": 204,
        "imgUrl": "/assets/hinh/p204-h06.png",
        "img2xUrl": "/assets/hinh-2x/p204-h06.png",
        "width": 275,
        "height": 330
      },
      {
        "assetId": "p205-h01",
        "displayId": "H1068",
        "pdfPage": 205,
        "imgUrl": "/assets/hinh/p205-h01.png",
        "img2xUrl": "/assets/hinh-2x/p205-h01.png",
        "width": 205,
        "height": 329
      },
      {
        "assetId": "p205-h02",
        "displayId": "H1069",
        "pdfPage": 205,
        "imgUrl": "/assets/hinh/p205-h02.png",
        "img2xUrl": "/assets/hinh-2x/p205-h02.png",
        "width": 205,
        "height": 329
      },
      {
        "assetId": "p205-h03",
        "displayId": "H1070",
        "pdfPage": 205,
        "imgUrl": "/assets/hinh/p205-h03.png",
        "img2xUrl": "/assets/hinh-2x/p205-h03.png",
        "width": 265,
        "height": 324
      },
      {
        "assetId": "p205-h04",
        "displayId": "H1071",
        "pdfPage": 205,
        "imgUrl": "/assets/hinh/p205-h04.png",
        "img2xUrl": "/assets/hinh-2x/p205-h04.png",
        "width": 172,
        "height": 334
      },
      {
        "assetId": "p205-h06",
        "displayId": "H1072",
        "pdfPage": 205,
        "imgUrl": "/assets/hinh/p205-h06.png",
        "img2xUrl": "/assets/hinh-2x/p205-h06.png",
        "width": 105,
        "height": 334
      },
      {
        "assetId": "p205-h05",
        "displayId": "H1073",
        "pdfPage": 205,
        "imgUrl": "/assets/hinh/p205-h05.png",
        "img2xUrl": "/assets/hinh-2x/p205-h05.png",
        "width": 170,
        "height": 401
      },
      {
        "assetId": "p205-h07",
        "displayId": "H1074",
        "pdfPage": 205,
        "imgUrl": "/assets/hinh/p205-h07.png",
        "img2xUrl": "/assets/hinh-2x/p205-h07.png",
        "width": 100,
        "height": 331
      },
      {
        "assetId": "p205-h08",
        "displayId": "H1075",
        "pdfPage": 205,
        "imgUrl": "/assets/hinh/p205-h08.png",
        "img2xUrl": "/assets/hinh-2x/p205-h08.png",
        "width": 325,
        "height": 321
      },
      {
        "assetId": "p206-h01",
        "displayId": "H1076",
        "pdfPage": 206,
        "imgUrl": "/assets/hinh/p206-h01.png",
        "img2xUrl": "/assets/hinh-2x/p206-h01.png",
        "width": 170,
        "height": 330
      },
      {
        "assetId": "p206-h02",
        "displayId": "H1077",
        "pdfPage": 206,
        "imgUrl": "/assets/hinh/p206-h02.png",
        "img2xUrl": "/assets/hinh-2x/p206-h02.png",
        "width": 360,
        "height": 290
      },
      {
        "assetId": "p206-h03",
        "displayId": "H1078",
        "pdfPage": 206,
        "imgUrl": "/assets/hinh/p206-h03.png",
        "img2xUrl": "/assets/hinh-2x/p206-h03.png",
        "width": 170,
        "height": 348
      },
      {
        "assetId": "p206-h04",
        "displayId": "H1079",
        "pdfPage": 206,
        "imgUrl": "/assets/hinh/p206-h04.png",
        "img2xUrl": "/assets/hinh-2x/p206-h04.png",
        "width": 145,
        "height": 323
      }
    ],
    "motions": [
      {
        "id": "lieu-diep-kiem-m-1",
        "stepNo": "1",
        "assetId": "p199-h01",
        "displayId": "H1024",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h01.png",
        "img2xUrl": "/assets/hinh-2x/p199-h01.png",
        "width": 155,
        "height": 323,
        "desc": "CHIÊU 4: Kéo chân phải, xoay người 180\" ra phía sau, theo chiều kim đồng hồ, đồng thời đưa lưỡi kiểm >> vòng qua đầu."
      },
      {
        "id": "lieu-diep-kiem-m-2",
        "stepNo": "2",
        "assetId": "p199-h03",
        "displayId": "H1025",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h03.png",
        "img2xUrl": "/assets/hinh-2x/p199-h03.png",
        "width": 140,
        "height": 328,
        "desc": "CHIÊU 4: Và chém kiếm xuống."
      },
      {
        "id": "lieu-diep-kiem-m-3",
        "stepNo": "3",
        "assetId": "p199-h04",
        "displayId": "H1026",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h04.png",
        "img2xUrl": "/assets/hinh-2x/p199-h04.png",
        "width": 140,
        "height": 378,
        "desc": "CHIÊU 5: Lướt người tiến lên đồng thời đâm kiếm, sau đó lùi lại vị trí trước khi đâm (như hình 1)."
      },
      {
        "id": "lieu-diep-kiem-m-4",
        "stepNo": "4",
        "assetId": "p199-h06",
        "displayId": "H1027",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h06.png",
        "img2xUrl": "/assets/hinh-2x/p199-h06.png",
        "width": 145,
        "height": 377,
        "desc": "CHIÊU 6: Đứng tại chỗ, lắc cổ tay hất đầu kiếm lên."
      },
      {
        "id": "lieu-diep-kiem-m-5",
        "stepNo": "5",
        "assetId": "p199-h05",
        "displayId": "H1028",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h05.png",
        "img2xUrl": "/assets/hinh-2x/p199-h05.png",
        "width": 335,
        "height": 317,
        "desc": "CHIÊU 6: Lắc cổ tay hất đầu kiếm xuống."
      },
      {
        "id": "lieu-diep-kiem-m-6",
        "stepNo": "6",
        "assetId": "p199-h07",
        "displayId": "H1029",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h07.png",
        "img2xUrl": "/assets/hinh-2x/p199-h07.png",
        "width": 330,
        "height": 325,
        "desc": "CHIÊU 6: Đâm kiếm về phía trước, sau đó kéo kiếm về, lắc cổ tay chặn kiếm xuống."
      },
      {
        "id": "lieu-diep-kiem-m-7",
        "stepNo": "7",
        "assetId": "p199-h02",
        "displayId": "H1030",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h02.png",
        "img2xUrl": "/assets/hinh-2x/p199-h02.png",
        "width": 350,
        "height": 325,
        "desc": "CHIÊU 8: Đứng tại chỗ, xoay mũi 1 kiếm 1 vòng nhỏ theo : chiều kim đồng hồ rồi : đâm về phía trước; thu kiếm về tiếp tục xoay mũi kiếm 1 vòng ngược chiều kim đồng hồ rồi đâm về ` phía trước; sau đó thu ] kiếm về (tư thế như 4.2). ù s"
      },
      {
        "id": "lieu-diep-kiem-m-8",
        "stepNo": "8",
        "assetId": "p199-h08",
        "displayId": "H1031",
        "pdfPage": 199,
        "imgUrl": "/assets/hinh/p199-h08.png",
        "img2xUrl": "/assets/hinh-2x/p199-h08.png",
        "width": 335,
        "height": 325,
        "desc": "CHIÊU 10: 1: Tương tự chiêu 9 b nhưngxoaykiếmsangbên s phải 15' rồi mới thực hiện s động tác. Ì"
      },
      {
        "id": "lieu-diep-kiem-m-9",
        "stepNo": "9",
        "assetId": "p200-h01",
        "displayId": "H1032",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h01.png",
        "img2xUrl": "/assets/hinh-2x/p200-h01.png",
        "width": 110,
        "height": 368,
        "desc": "CHIÊU 11: Tương tựchiêu 9nhưng ' Oay kiếm sang bên trái 15? ði mới thực hiện động tác."
      },
      {
        "id": "lieu-diep-kiem-m-10",
        "stepNo": "10",
        "assetId": "p200-h02",
        "displayId": "H1033",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h02.png",
        "img2xUrl": "/assets/hinh-2x/p200-h02.png",
        "width": 105,
        "height": 320,
        "desc": "CHIÊU 11: Dựng đứng kiếm, nũi hướng xuống, gạt ang 2 bên trái phải. |"
      },
      {
        "id": "lieu-diep-kiem-m-11",
        "stepNo": "11",
        "assetId": "p200-h03",
        "displayId": "H1034",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h03.png",
        "img2xUrl": "/assets/hinh-2x/p200-h03.png",
        "width": 330,
        "height": 320,
        "desc": "CHIÊU 11: Người hơi chùng | uống, kéo chân phải về au đồng thời đâm kiếm về. - aulưng,chếnh từ dưới đất ! ên, tay trái thủ trước mặt."
      },
      {
        "id": "lieu-diep-kiem-m-12",
        "stepNo": "12",
        "assetId": "p200-h04",
        "displayId": "H1035",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h04.png",
        "img2xUrl": "/assets/hinh-2x/p200-h04.png",
        "width": 147,
        "height": 345,
        "desc": "CHIÊU 11: Hất kiếm từ sau ra trước, tay trái thủ sau lưng. nà"
      },
      {
        "id": "lieu-diep-kiem-m-13",
        "stepNo": "13",
        "assetId": "p200-h06",
        "displayId": "H1036",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h06.png",
        "img2xUrl": "/assets/hinh-2x/p200-h06.png",
        "width": 185,
        "height": 330,
        "desc": "CHIÊU 14: Biên thân, tiến 3 bước đồng thời mũi kiếm vẽ 3 vòng số 8 song song, kích khước 3 số 8 này lần lượt: - lo, vừa, nhỏ. Kem\" ."
      },
      {
        "id": "lieu-diep-kiem-m-14",
        "stepNo": "14",
        "assetId": "p200-h05",
        "displayId": "H1037",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h05.png",
        "img2xUrl": "/assets/hinh-2x/p200-h05.png",
        "width": 130,
        "height": 345,
        "desc": "CHIÊU 14: Cuối cùng đâm kiếm về phía trước."
      },
      {
        "id": "lieu-diep-kiem-m-15",
        "stepNo": "15",
        "assetId": "p200-h09",
        "displayId": "H1038",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h09.png",
        "img2xUrl": "/assets/hinh-2x/p200-h09.png",
        "width": 145,
        "height": 328,
        "desc": "CHIÊU 15: Tương tự 3"
      },
      {
        "id": "lieu-diep-kiem-m-16",
        "stepNo": "16",
        "assetId": "p200-h07",
        "displayId": "H1039",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h07.png",
        "img2xUrl": "/assets/hinh-2x/p200-h07.png",
        "width": 110,
        "height": 333,
        "desc": "CHIÊU 15: Tương tự 4.1"
      },
      {
        "id": "lieu-diep-kiem-m-17",
        "stepNo": "17",
        "assetId": "p200-h08",
        "displayId": "H1040",
        "pdfPage": 200,
        "imgUrl": "/assets/hinh/p200-h08.png",
        "img2xUrl": "/assets/hinh-2x/p200-h08.png",
        "width": 110,
        "height": 333,
        "desc": "CHIÊU 15: Tương tự 4.2 ~"
      },
      {
        "id": "lieu-diep-kiem-m-18",
        "stepNo": "18",
        "assetId": "p201-h01",
        "displayId": "H1041",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h01.png",
        "img2xUrl": "/assets/hinh-2x/p201-h01.png",
        "width": 125,
        "height": 322,
        "desc": "CHIÊU 16: Lướt người tiến lên đồng thời đâm kiếm (tư thế như hình 1)."
      },
      {
        "id": "lieu-diep-kiem-m-19",
        "stepNo": "19",
        "assetId": "p201-h03",
        "displayId": "H1042",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h03.png",
        "img2xUrl": "/assets/hinh-2x/p201-h03.png",
        "width": 110,
        "height": 322,
        "desc": "CHIÊU 16: sau đó quay sang phải 90' đồng thời chặt kiếm ngang người."
      },
      {
        "id": "lieu-diep-kiem-m-20",
        "stepNo": "20",
        "assetId": "p201-h02",
        "displayId": "H1043",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h02.png",
        "img2xUrl": "/assets/hinh-2x/p201-h02.png",
        "width": 160,
        "height": 322,
        "desc": "CHIÊU 17: Đâm kiếm liên tiếp 2 nhát chếch từ dưới lên."
      },
      {
        "id": "lieu-diep-kiem-m-21",
        "stepNo": "21",
        "assetId": "p201-h04",
        "displayId": "H1044",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h04.png",
        "img2xUrl": "/assets/hinh-2x/p201-h04.png",
        "width": 110,
        "height": 317,
        "desc": "CHIÊU 17: Lắc cổ tay chúc mũi s kiếm xuống, rồi thích ngược mũi kiếm lên như"
      },
      {
        "id": "lieu-diep-kiem-m-22",
        "stepNo": "22",
        "assetId": "p201-h05",
        "displayId": "H1045",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h05.png",
        "img2xUrl": "/assets/hinh-2x/p201-h05.png",
        "width": 275,
        "height": 292,
        "desc": "CHIÊU 18: Lướt người lên đánh đốc kiếm sang trái, mắt nhìn thăng trước mặt."
      },
      {
        "id": "lieu-diep-kiem-m-23",
        "stepNo": "23",
        "assetId": "p201-h06",
        "displayId": "H1046",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h06.png",
        "img2xUrl": "/assets/hinh-2x/p201-h06.png",
        "width": 360,
        "height": 324,
        "desc": "CHIÊU 18: Kéo chân phải về xoay người 180, ra phía sau theo chiều kim đồng hồ, đồng thời đâm kiếm (tư thế như hình 16.2)."
      },
      {
        "id": "lieu-diep-kiem-m-24",
        "stepNo": "24",
        "assetId": "p201-h07",
        "displayId": "H1047",
        "pdfPage": 201,
        "imgUrl": "/assets/hinh/p201-h07.png",
        "img2xUrl": "/assets/hinh-2x/p201-h07.png",
        "width": 280,
        "height": 324,
        "desc": "CHIÊU 19: Dựng đứng kiếm gạt sang ngang trước mặt 3 lằn theo thứ tự: trái, phải, trái."
      },
      {
        "id": "lieu-diep-kiem-m-25",
        "stepNo": "25",
        "assetId": "p202-h01",
        "displayId": "H1048",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h01.png",
        "img2xUrl": "/assets/hinh-2x/p202-h01.png",
        "width": 135,
        "height": 380,
        "desc": "CHIÊU 19: Thực hiện 2 lần tương tự 182 (tư thế như 17.1)."
      },
      {
        "id": "lieu-diep-kiem-m-26",
        "stepNo": "26",
        "assetId": "p202-h02",
        "displayId": "H1049",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h02.png",
        "img2xUrl": "/assets/hinh-2x/p202-h02.png",
        "width": 150,
        "height": 330,
        "desc": "CHIÊU 19: Lướt người lên đâm chéo mũi kiếm xưống thấp, phía bên phải."
      },
      {
        "id": "lieu-diep-kiem-m-27",
        "stepNo": "27",
        "assetId": "p202-h03",
        "displayId": "H1050",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h03.png",
        "img2xUrl": "/assets/hinh-2x/p202-h03.png",
        "width": 152,
        "height": 338,
        "desc": "CHIÊU 19: Kéo chân phải, xoay người 270' ngược chiều kim đồng hồ, đồng thời đâm kiếm (tư thế như hình 1)."
      },
      {
        "id": "lieu-diep-kiem-m-28",
        "stepNo": "28",
        "assetId": "p202-h04",
        "displayId": "H1051",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h04.png",
        "img2xUrl": "/assets/hinh-2x/p202-h04.png",
        "width": 365,
        "height": 316,
        "desc": "CHIÊU 21: Lướt người lên 1 bước, đánh đốc kiếm sang trái (tư thể như hình 18.1)."
      },
      {
        "id": "lieu-diep-kiem-m-29",
        "stepNo": "29",
        "assetId": "p202-h05",
        "displayId": "H1052",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h05.png",
        "img2xUrl": "/assets/hinh-2x/p202-h05.png",
        "width": 130,
        "height": 316,
        "desc": "CHIÊU 21: Lướt người lên 1 bước, đánh đốc kiếm sang phải."
      },
      {
        "id": "lieu-diep-kiem-m-30",
        "stepNo": "30",
        "assetId": "p202-h06",
        "displayId": "H1053",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h06.png",
        "img2xUrl": "/assets/hinh-2x/p202-h06.png",
        "width": 160,
        "height": 320,
        "desc": "CHIÊU 21: Lướt người lên 1 bước, đánh thốc đốc kiếm và đá chân phải từ dưới lên."
      },
      {
        "id": "lieu-diep-kiem-m-31",
        "stepNo": "31",
        "assetId": "p202-h07",
        "displayId": "H1054",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h07.png",
        "img2xUrl": "/assets/hinh-2x/p202-h07.png",
        "width": 135,
        "height": 315,
        "desc": "CHIÊU 22: Kéo chân phải, xoay người 180° theo chiều kim đồng hồ đâm kiếm ra sau."
      },
      {
        "id": "lieu-diep-kiem-m-32",
        "stepNo": "32",
        "assetId": "p202-h08",
        "displayId": "H1055",
        "pdfPage": 202,
        "imgUrl": "/assets/hinh/p202-h08.png",
        "img2xUrl": "/assets/hinh-2x/p202-h08.png",
        "width": 180,
        "height": 350,
        "desc": "CHIÊU 23: Lắc cổ tay, chém kiếm xuống phía bên trái."
      },
      {
        "id": "lieu-diep-kiem-m-33",
        "stepNo": "33",
        "assetId": "p203-h01",
        "displayId": "H1056",
        "pdfPage": 203,
        "imgUrl": "/assets/hinh/p203-h01.png",
        "img2xUrl": "/assets/hinh-2x/p203-h01.png",
        "width": 370,
        "height": 318,
        "desc": "CHIÊU 23: Tiến 1 bước, vặn lắc cổ tay hất kiếm lên ngang vai."
      },
      {
        "id": "lieu-diep-kiem-m-34",
        "stepNo": "34",
        "assetId": "p203-h03",
        "displayId": "H1057",
        "pdfPage": 203,
        "imgUrl": "/assets/hinh/p203-h03.png",
        "img2xUrl": "/assets/hinh-2x/p203-h03.png",
        "width": 360,
        "height": 318,
        "desc": "CHIÊU 25: Lướt người lên 1 bước đồng thời đâm kiếm (tư thế như hình 1)."
      },
      {
        "id": "lieu-diep-kiem-m-35",
        "stepNo": "35",
        "assetId": "p203-h05",
        "displayId": "H1058",
        "pdfPage": 203,
        "imgUrl": "/assets/hinh/p203-h05.png",
        "img2xUrl": "/assets/hinh-2x/p203-h05.png",
        "width": 102,
        "height": 317,
        "desc": "CHIÊU 26: Hai tay nắm chặt chuôi kiếm, kéo chân phải về, xoay người 180° chém ra sau."
      },
      {
        "id": "lieu-diep-kiem-m-36",
        "stepNo": "36",
        "assetId": "p203-h02",
        "displayId": "H1059",
        "pdfPage": 203,
        "imgUrl": "/assets/hinh/p203-h02.png",
        "img2xUrl": "/assets/hinh-2x/p203-h02.png",
        "width": 192,
        "height": 317,
        "desc": "CHIÊU 27: Tương tự động tác 23.1."
      },
      {
        "id": "lieu-diep-kiem-m-37",
        "stepNo": "37",
        "assetId": "p203-h04",
        "displayId": "H1060",
        "pdfPage": 203,
        "imgUrl": "/assets/hinh/p203-h04.png",
        "img2xUrl": "/assets/hinh-2x/p203-h04.png",
        "width": 272,
        "height": 317,
        "desc": "CHIÊU 27: Vặn, lắc cổ tay hất kiếm lên ngang vai. Đâm ngang 1 kiếm và tiến 1 bước. Quay trái và tập lại động tác này với bên trái (tư thế như hình 14.1)."
      },
      {
        "id": "lieu-diep-kiem-m-38",
        "stepNo": "38",
        "assetId": "p203-h06",
        "displayId": "H1061",
        "pdfPage": 203,
        "imgUrl": "/assets/hinh/p203-h06.png",
        "img2xUrl": "/assets/hinh-2x/p203-h06.png",
        "width": 95,
        "height": 320,
        "desc": "CHIÊU 28: Tương tự chiêu 26."
      },
      {
        "id": "lieu-diep-kiem-m-39",
        "stepNo": "39",
        "assetId": "p204-h01",
        "displayId": "H1062",
        "pdfPage": 204,
        "imgUrl": "/assets/hinh/p204-h01.png",
        "img2xUrl": "/assets/hinh-2x/p204-h01.png",
        "width": 440,
        "height": 293,
        "desc": "CHIÊU 30: Tương tự chiêu 25."
      },
      {
        "id": "lieu-diep-kiem-m-40",
        "stepNo": "40",
        "assetId": "p204-h02",
        "displayId": "H1063",
        "pdfPage": 204,
        "imgUrl": "/assets/hinh/p204-h02.png",
        "img2xUrl": "/assets/hinh-2x/p204-h02.png",
        "width": 280,
        "height": 333,
        "desc": "CHIÊU 31: Tay phải nắm chặt chuôi kiếm, tay trái tỳ vào đốc kiếm, lướt lên 1 bước, đâm thẳng ra trước."
      },
      {
        "id": "lieu-diep-kiem-m-41",
        "stepNo": "41",
        "assetId": "p204-h03",
        "displayId": "H1064",
        "pdfPage": 204,
        "imgUrl": "/assets/hinh/p204-h03.png",
        "img2xUrl": "/assets/hinh-2x/p204-h03.png",
        "width": 255,
        "height": 315,
        "desc": "CHIÊU 32: Vắt chân phải về sau, đồng thời thu kiếm về vị trí song song thân người, mũi kiếm chỉ đất."
      },
      {
        "id": "lieu-diep-kiem-m-42",
        "stepNo": "42",
        "assetId": "p204-h04",
        "displayId": "H1065",
        "pdfPage": 204,
        "imgUrl": "/assets/hinh/p204-h04.png",
        "img2xUrl": "/assets/hinh-2x/p204-h04.png",
        "width": 200,
        "height": 320,
        "desc": "CHIÊU 33: Kéo chân trái về sau, 2 tay nắm chắc chuôi kiếm, đầm thốc từ dưới lên."
      },
      {
        "id": "lieu-diep-kiem-m-43",
        "stepNo": "43",
        "assetId": "p204-h05",
        "displayId": "H1066",
        "pdfPage": 204,
        "imgUrl": "/assets/hinh/p204-h05.png",
        "img2xUrl": "/assets/hinh-2x/p204-h05.png",
        "width": 100,
        "height": 395,
        "desc": "CHIÊU 34: Kéo chân trái lên, thu kiếm về trước mặt (tư thế như hình 0.1)."
      },
      {
        "id": "lieu-diep-kiem-m-44",
        "stepNo": "44",
        "assetId": "p204-h06",
        "displayId": "H1067",
        "pdfPage": 204,
        "imgUrl": "/assets/hinh/p204-h06.png",
        "img2xUrl": "/assets/hinh-2x/p204-h06.png",
        "width": 275,
        "height": 330,
        "desc": "CHIÊU 35: Kéo chân phải sát vào chân trái, bàn tay trái dựng đứng trước ngực, tay phải thu kiếm về sau lưng sao cho kiếm song song với cánh tay phải, mũi kiếm chỉ lên trời. - Kết thúc bài."
      },
      {
        "id": "lieu-diep-kiem-m-45",
        "stepNo": "45",
        "assetId": "p205-h01",
        "displayId": "H1068",
        "pdfPage": 205,
        "imgUrl": "/assets/hinh/p205-h01.png",
        "img2xUrl": "/assets/hinh-2x/p205-h01.png",
        "width": 205,
        "height": 329,
        "desc": "Thế 34: Kéo chân trái lên, thu kiếm về trước mặt (tư thế như hình 0.1)."
      },
      {
        "id": "lieu-diep-kiem-m-46",
        "stepNo": "46",
        "assetId": "p205-h02",
        "displayId": "H1069",
        "pdfPage": 205,
        "imgUrl": "/assets/hinh/p205-h02.png",
        "img2xUrl": "/assets/hinh-2x/p205-h02.png",
        "width": 205,
        "height": 329,
        "desc": "Thế 34: Kéo chân trái lên, thu kiếm về trước mặt (tư thế như hình 0.1)."
      },
      {
        "id": "lieu-diep-kiem-m-47",
        "stepNo": "47",
        "assetId": "p205-h03",
        "displayId": "H1070",
        "pdfPage": 205,
        "imgUrl": "/assets/hinh/p205-h03.png",
        "img2xUrl": "/assets/hinh-2x/p205-h03.png",
        "width": 265,
        "height": 324,
        "desc": "Thế 34: Kéo chân trái lên, thu kiếm về trước mặt (tư thế như hình 0.1)."
      },
      {
        "id": "lieu-diep-kiem-m-48",
        "stepNo": "48",
        "assetId": "p205-h04",
        "displayId": "H1071",
        "pdfPage": 205,
        "imgUrl": "/assets/hinh/p205-h04.png",
        "img2xUrl": "/assets/hinh-2x/p205-h04.png",
        "width": 172,
        "height": 334,
        "desc": "Thế 34: Kéo chân trái lên, thu kiếm về trước mặt (tư thế như hình 0.1)."
      },
      {
        "id": "lieu-diep-kiem-m-49",
        "stepNo": "49",
        "assetId": "p205-h06",
        "displayId": "H1072",
        "pdfPage": 205,
        "imgUrl": "/assets/hinh/p205-h06.png",
        "img2xUrl": "/assets/hinh-2x/p205-h06.png",
        "width": 105,
        "height": 334,
        "desc": "Thế 34: Kéo chân trái lên, thu kiếm về trước mặt (tư thế như hình 0.1)."
      },
      {
        "id": "lieu-diep-kiem-m-50",
        "stepNo": "50",
        "assetId": "p205-h05",
        "displayId": "H1073",
        "pdfPage": 205,
        "imgUrl": "/assets/hinh/p205-h05.png",
        "img2xUrl": "/assets/hinh-2x/p205-h05.png",
        "width": 170,
        "height": 401,
        "desc": "Thế 34: Kéo chân trái lên, thu kiếm về trước mặt (tư thế như hình 0.1)."
      },
      {
        "id": "lieu-diep-kiem-m-51",
        "stepNo": "51",
        "assetId": "p205-h07",
        "displayId": "H1074",
        "pdfPage": 205,
        "imgUrl": "/assets/hinh/p205-h07.png",
        "img2xUrl": "/assets/hinh-2x/p205-h07.png",
        "width": 100,
        "height": 331,
        "desc": "Thế 34: Kéo chân trái lên, thu kiếm về trước mặt (tư thế như hình 0.1)."
      },
      {
        "id": "lieu-diep-kiem-m-52",
        "stepNo": "52",
        "assetId": "p205-h08",
        "displayId": "H1075",
        "pdfPage": 205,
        "imgUrl": "/assets/hinh/p205-h08.png",
        "img2xUrl": "/assets/hinh-2x/p205-h08.png",
        "width": 325,
        "height": 321,
        "desc": "Thế 34: Kéo chân trái lên, thu kiếm về trước mặt (tư thế như hình 0.1)."
      },
      {
        "id": "lieu-diep-kiem-m-53",
        "stepNo": "53",
        "assetId": "p206-h01",
        "displayId": "H1076",
        "pdfPage": 206,
        "imgUrl": "/assets/hinh/p206-h01.png",
        "img2xUrl": "/assets/hinh-2x/p206-h01.png",
        "width": 170,
        "height": 330,
        "desc": "Thế 34: Kéo chân trái lên, thu kiếm về trước mặt (tư thế như hình 0.1)."
      },
      {
        "id": "lieu-diep-kiem-m-54",
        "stepNo": "54",
        "assetId": "p206-h02",
        "displayId": "H1077",
        "pdfPage": 206,
        "imgUrl": "/assets/hinh/p206-h02.png",
        "img2xUrl": "/assets/hinh-2x/p206-h02.png",
        "width": 360,
        "height": 290,
        "desc": "Thế 34: Kéo chân trái lên, thu kiếm về trước mặt (tư thế như hình 0.1)."
      },
      {
        "id": "lieu-diep-kiem-m-55",
        "stepNo": "55",
        "assetId": "p206-h03",
        "displayId": "H1078",
        "pdfPage": 206,
        "imgUrl": "/assets/hinh/p206-h03.png",
        "img2xUrl": "/assets/hinh-2x/p206-h03.png",
        "width": 170,
        "height": 348,
        "desc": "Thế 34: Kéo chân trái lên, thu kiếm về trước mặt (tư thế như hình 0.1)."
      },
      {
        "id": "lieu-diep-kiem-m-56",
        "stepNo": "56",
        "assetId": "p206-h04",
        "displayId": "H1079",
        "pdfPage": 206,
        "imgUrl": "/assets/hinh/p206-h04.png",
        "img2xUrl": "/assets/hinh-2x/p206-h04.png",
        "width": 145,
        "height": 323,
        "desc": "Thế 34: Kéo chân trái lên, thu kiếm về trước mặt (tư thế như hình 0.1)."
      }
    ],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-34",
    "title": "Phần III — Chương I — Thiếu Lâm Tự",
    "groupId": "tu-lieu",
    "bookOrder": 34,
    "contentType": "reading",
    "pdfPages": [
      207,
      208,
      209,
      210,
      211,
      212
    ],
    "pageRange": "Trang PDF 207 – 212",
    "assetCount": 6,
    "assets": [
      {
        "assetId": "p208-h01",
        "displayId": "H1080",
        "pdfPage": 208,
        "imgUrl": "/assets/hinh/p208-h01.png",
        "img2xUrl": "/assets/hinh-2x/p208-h01.png",
        "width": 1023,
        "height": 1276
      },
      {
        "assetId": "p209-h01",
        "displayId": "H1081",
        "pdfPage": 209,
        "imgUrl": "/assets/hinh/p209-h01.png",
        "img2xUrl": "/assets/hinh-2x/p209-h01.png",
        "width": 933,
        "height": 605
      },
      {
        "assetId": "p210-h01",
        "displayId": "H1082",
        "pdfPage": 210,
        "imgUrl": "/assets/hinh/p210-h01.png",
        "img2xUrl": "/assets/hinh-2x/p210-h01.png",
        "width": 422,
        "height": 566
      },
      {
        "assetId": "p210-h02",
        "displayId": "H1083",
        "pdfPage": 210,
        "imgUrl": "/assets/hinh/p210-h02.png",
        "img2xUrl": "/assets/hinh-2x/p210-h02.png",
        "width": 434,
        "height": 503
      },
      {
        "assetId": "p212-h01",
        "displayId": "H1084",
        "pdfPage": 212,
        "imgUrl": "/assets/hinh/p212-h01.png",
        "img2xUrl": "/assets/hinh-2x/p212-h01.png",
        "width": 512,
        "height": 425
      },
      {
        "assetId": "p212-h02",
        "displayId": "H1085",
        "pdfPage": 212,
        "imgUrl": "/assets/hinh/p212-h02.png",
        "img2xUrl": "/assets/hinh-2x/p212-h02.png",
        "width": 513,
        "height": 541
      }
    ],
    "motions": [
    
    ],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-35",
    "title": "Phần III — Chương II — Một số nhân vật tiêu biểu ở Trung Quốc",
    "groupId": "tu-lieu",
    "bookOrder": 35,
    "contentType": "reading",
    "pdfPages": [
      213,
      214,
      215,
      216,
      217,
      218,
      219,
      220,
      221,
      222,
      223,
      224
    ],
    "pageRange": "Trang PDF 213 – 224",
    "assetCount": 8,
    "assets": [
      {
        "assetId": "p213-h01",
        "displayId": "H1086",
        "pdfPage": 213,
        "imgUrl": "/assets/hinh/p213-h01.png",
        "img2xUrl": "/assets/hinh-2x/p213-h01.png",
        "width": 391,
        "height": 651
      },
      {
        "assetId": "p214-h01",
        "displayId": "H1087",
        "pdfPage": 214,
        "imgUrl": "/assets/hinh/p214-h01.png",
        "img2xUrl": "/assets/hinh-2x/p214-h01.png",
        "width": 398,
        "height": 428
      },
      {
        "assetId": "p216-h01",
        "displayId": "H1088",
        "pdfPage": 216,
        "imgUrl": "/assets/hinh/p216-h01.png",
        "img2xUrl": "/assets/hinh-2x/p216-h01.png",
        "width": 588,
        "height": 650
      },
      {
        "assetId": "p217-h01",
        "displayId": "H1089",
        "pdfPage": 217,
        "imgUrl": "/assets/hinh/p217-h01.png",
        "img2xUrl": "/assets/hinh-2x/p217-h01.png",
        "width": 564,
        "height": 619
      },
      {
        "assetId": "p219-h01",
        "displayId": "H1090",
        "pdfPage": 219,
        "imgUrl": "/assets/hinh/p219-h01.png",
        "img2xUrl": "/assets/hinh-2x/p219-h01.png",
        "width": 854,
        "height": 602
      },
      {
        "assetId": "p223-h01",
        "displayId": "H1091",
        "pdfPage": 223,
        "imgUrl": "/assets/hinh/p223-h01.png",
        "img2xUrl": "/assets/hinh-2x/p223-h01.png",
        "width": 598,
        "height": 453
      },
      {
        "assetId": "p224-h01",
        "displayId": "H1092",
        "pdfPage": 224,
        "imgUrl": "/assets/hinh/p224-h01.png",
        "img2xUrl": "/assets/hinh-2x/p224-h01.png",
        "width": 311,
        "height": 344
      },
      {
        "assetId": "p224-h02",
        "displayId": "H1093",
        "pdfPage": 224,
        "imgUrl": "/assets/hinh/p224-h02.png",
        "img2xUrl": "/assets/hinh-2x/p224-h02.png",
        "width": 933,
        "height": 657
      }
    ],
    "motions": [],
    "recommendedPrerequisites": []
  },
  {
    "id": "bai-36",
    "title": "Phụ lục — Giới thiệu võ đường",
    "groupId": "tu-lieu",
    "bookOrder": 36,
    "contentType": "reading",
    "pdfPages": [
      225
    ],
    "pageRange": "Phụ Lục",
    "assetCount": 2,
    "assets": [
      {
        "assetId": "p225-h01",
        "displayId": "H1094",
        "pdfPage": 225,
        "imgUrl": "/assets/hinh/p225-h01.png",
        "img2xUrl": "/assets/hinh-2x/p225-h01.png",
        "width": 210,
        "height": 213
      },
      {
        "assetId": "p225-h02",
        "displayId": "H1095",
        "pdfPage": 225,
        "imgUrl": "/assets/hinh/p225-h02.png",
        "img2xUrl": "/assets/hinh-2x/p225-h02.png",
        "width": 1004,
        "height": 397
      }
    ],
    "motions": [
    
    ],
    "recommendedPrerequisites": []
  }
];
