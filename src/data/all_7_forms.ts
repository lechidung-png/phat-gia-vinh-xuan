import { Technique } from "./techniques";

export interface FormCatalogItem {
  id: string;
  name: string;
  codeName: string;
  demonstrators: string;
  scanPages: string;
  bookPages: string;
  techniqueCount: number;
  description: string;
  type: "single" | "two_person";
}

export const FORMS_CATALOG: FormCatalogItem[] = [
  {
    id: "01-tieu-niem-dau",
    name: "Bài 1: Tiểu Niệm Đầu",
    codeName: "Siu Lim Tao",
    demonstrators: "HLV Đặng Xuân Hùng",
    scanPages: "Trang 37 - 43",
    bookPages: "38 - 43",
    techniqueCount: 18,
    description: "Nền tảng khởi thủy của Phật Gia Vịnh Xuân: Nhị Tự Kiềm Dương Tấn chân hẹp, cùi chỏ thủ trung tuyến, Nhật Tự Quyền, Thung kình, Khẩu thủ xoay cổ tay, Du chưởng.",
    type: "single"
  },
  {
    id: "02-tam-kieu",
    name: "Bài 2: Tầm Kiều",
    codeName: "Chum Kiu",
    demonstrators: "HLV Nguyễn Trọng Sơn",
    scanPages: "Trang 44 - 49",
    bookPages: "45 - 49",
    techniqueCount: 6,
    description: "Tìm cầu nối nhập nội, xoay trục hông 90° - 180°, Song Bàng Thủ, Lan Thủ, đòn triệt cước quét chân tầm thấp, cùi chỏ giáp chiến.",
    type: "single"
  },
  {
    id: "03-tieu-chi",
    name: "Bài 3: Tiêu Chỉ",
    codeName: "Biu Jee",
    demonstrators: "VS Hồ Chí Quang",
    scanPages: "Trang 49 - 54",
    bookPages: "50 - 54",
    techniqueCount: 19,
    description: "Tuyệt kỹ cứu nguy hiểm nan: Phóng ngón tay bắn tỉa tiêu thủ, chém xoay tròn, hoành thoái, vồ long trảo, lật ngược thế cờ khi bị áp chế.",
    type: "single"
  },
  {
    id: "04-108-don-luyen",
    name: "Bài 4: Bài Võ 108 Thế (Tại Chỗ)",
    codeName: "108 Single Form (In-Place)",
    demonstrators: "HLV Phạm Đức Hùng",
    scanPages: "Trang 55 - 65",
    bookPages: "56 - 65",
    techniqueCount: 108,
    description: "Đại pháp 108 thế đơn luyện tại chỗ (Không Thông): Luyện thủ pháp khép chặt hạ bộ, xỉa song thủ, than thủ, bàng thủ, phục thủ, thung kình, câu thủ.",
    type: "single"
  },
  {
    id: "05-108-doi-luyen",
    name: "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    codeName: "108 Sparring (In-Place)",
    demonstrators: "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    scanPages: "Trang 65 - 75",
    bookPages: "66 - 75",
    techniqueCount: 108,
    description: "Đối kháng 2 người tại chỗ: Cầm nã thực chiến, bẻ khóa cổ tay khuỷu tay, triệt quyền xuyên tâm, bàng thủ giải thế song quyền.",
    type: "two_person"
  },
  {
    id: "06-108-tien-lui-don",
    name: "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
    codeName: "108 Advance & Retreat (Single)",
    demonstrators: "HLV Lương Thành Trung",
    scanPages: "Trang 75 - 83",
    bookPages: "76 - 83",
    techniqueCount: 56,
    description: "Bộ pháp tiến lùi: Đinh tấn, Khoa chân tròn mượn quán tính, Hoành thoái né đòn, Lướt chân đấm bồi, Trảm thủ nghịch hướng.",
    type: "single"
  },
  {
    id: "07-108-tien-lui-doi",
    name: "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
    codeName: "108 Sparring Advance & Retreat",
    demonstrators: "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
    scanPages: "Trang 83 - 92",
    bookPages: "84 - 92",
    techniqueCount: 56,
    description: "Cầm nã đối kháng tiến lùi đỉnh cao: Vồ long trảo, quàng cổ thúc gối nhọn, quét gót hạ bàn, thốn kình rung giật cự ly 1 tấc.",
    type: "two_person"
  }
];

// Dữ liệu 18 chiêu Tiểu Niệm Đầu
export const TIEU_NIEM_DAU_TECHNIQUES: Technique[] = [
  {
    id: "TND-01",
    code: "TND_01",
    name: "Chiêu 1: Khởi Tấn Kiềm Dương & Hạ Bái Tổ Đan Điền",
    formId: "01-tieu-niem-dau",
    formName: "Bài 1: Tiểu Niệm Đầu",
    order: 1,
    instructor: "HLV Đặng Xuân Hùng",
    summary: "Đứng tấn kiềm dương mã chân hẹp, hai nắm đấm thu sát nách. Đưa 2 tay ngang ngực bắt chéo hạ xuống đan điền, rồi nâng lên ngang cằm thu về.",
    stances: ["Nhị Tự Kiềm Dương Tấn"],
    hands: ["Song Thủ Giao Thoa", "Thu Quyền"],
    targetZones: ["Trung Bàn", "Hạ Bàn"],
    difficulty: "Cơ bản",
    isSymmetricLeft: false,
    steps: [
      {
        stepNo: "1",
        desc: "Đứng tấn kiềm dương mã, 2 nắm đấm thu sát nách.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_1.png",
        keypoints: ["Chân hẹp hơn vai", "Hai đầu gối khép che hạ bộ", "Lưng thẳng", "Thả lỏng toàn thân"]
      },
      {
        stepNo: "1.1",
        desc: "Đưa 2 tay ngang ngực và chéo vào nhau nhưng không chạm nhau đẩy từ trên xuống dưới đan điền.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_1_1.png",
        keypoints: ["Dẫn khí chìm sâu xuống Khí Hải", "Hai cẳng tay giao thoa khép kín trung lộ"]
      },
      {
        stepNo: "1.2",
        desc: "Tương tự như vậy đưa 2 tay lên trên đến ngang cằm thì dừng lại và thu tay về vị trí như hình 1.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_1_2.png",
        keypoints: ["Mở lồng ngực tự nhiên", "Cùi chỏ ép sát sườn", "Thu quyền thốn kình"]
      }
    ]
  },
  {
    id: "TND-02",
    code: "TND_02",
    name: "Chiêu 2: Nhật Tự Quyền, Tiêu Thủ & Khẩu Thủ Phải",
    formId: "01-tieu-niem-dau",
    formName: "Bài 1: Tiểu Niệm Đầu",
    order: 2,
    instructor: "HLV Đặng Xuân Hùng",
    summary: "Đấm thẳng Nhật tự quyền theo trục trung tuyến, phóng ngón tay tiêu thủ, lật ngửa - úp bàn tay và quay cổ tay theo chiều kim đồng hồ rồi thu về.",
    stances: ["Nhị Tự Kiềm Dương Tấn"],
    hands: ["Nhật Tự Quyền", "Tiêu Thủ", "Khẩu Thủ"],
    targetZones: ["Trung Bàn", "Thượng Bàn"],
    difficulty: "Cơ bản",
    isSymmetricLeft: false,
    steps: [
      {
        stepNo: "2.1",
        desc: "Đấm thẳng Nhật tự quyền ra phía trước theo trục Tý Ngọ Tuyến.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_2_1.png",
        keypoints: ["Nắm đấm chữ Nhật thẳng đứng", "Phát kình xoay tại điểm chạm", "Cùi chỏ ép trung tâm"]
      },
      {
        stepNo: "2.2",
        desc: "Phóng ngón tay xòe ra phía trước (Tiêu thủ).",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_2_2.png",
        keypoints: ["Vươn thẳng các ngón tay", "Kéo giãn gân cốt khớp cổ tay"]
      },
      {
        stepNo: "2.3",
        desc: "Lật ngửa bàn tay phải.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_2_3.png",
        keypoints: ["Mở lòng bàn tay hướng lên trời", "Cổ tay thả lỏng"]
      },
      {
        stepNo: "2.4",
        desc: "Lật úp bàn tay phải.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_2_4.png",
        keypoints: ["Úp lòng bàn tay xuống đất", "Giữ thẳng trục cánh tay"]
      },
      {
        stepNo: "2.5",
        desc: "Quay cổ tay theo chiều kim đồng hồ (Khẩu thủ xoay tròn).",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_2_5.png",
        keypoints: ["Vòng xoay cổ tay linh hoạt mềm mại", "Không rung lắc cẳng tay"]
      },
      {
        stepNo: "2.6",
        desc: "Từ từ kéo tay về vị trí như hình 1.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_2_6.png",
        keypoints: ["Thu quyền sát nách", "Ép cùi chỏ ra sau bảo vệ sườn"]
      }
    ]
  },
  {
    id: "TND-03",
    code: "TND_03",
    name: "Chiêu 3: Nhật Tự Quyền, Tiêu Thủ & Khẩu Thủ Trái",
    formId: "01-tieu-niem-dau",
    formName: "Bài 1: Tiểu Niệm Đầu",
    order: 3,
    instructor: "HLV Đặng Xuân Hùng",
    summary: "Tương tự như Chiêu 2 nhưng chuyển sang thực hiện với tay trái.",
    stances: ["Nhị Tự Kiềm Dương Tấn"],
    hands: ["Nhật Tự Quyền", "Tiêu Thủ", "Khẩu Thủ"],
    targetZones: ["Trung Bàn", "Thượng Bàn"],
    difficulty: "Cơ bản",
    isSymmetricLeft: true,
    symmetricRef: "Chiêu 2: Nhật Tự Quyền, Tiêu Thủ & Khẩu Thủ Phải",
    symmetricNote: "Thế đối xứng bên trái. Thực hiện toàn bộ chuỗi động tác của Chiêu 2 nhưng đổi sang tay trái.",
    steps: [
      {
        stepNo: "3.1",
        desc: "[Thế đối xứng trái] Đấm thẳng Nhật tự quyền tay trái ra phía trước theo trục Tý Ngọ Tuyến.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_2_1.png",
        isSymmetricLeft: true,
        keypoints: ["Đổi đấm tay trái", "Nắm đấm thẳng đứng", "Phát kình điểm chạm"]
      },
      {
        stepNo: "3.2",
        desc: "[Thế đối xứng trái] Phóng ngón tay trái xòe ra phía trước (Tiêu thủ).",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_2_2.png",
        isSymmetricLeft: true,
        keypoints: ["Vươn thẳng các ngón tay trái"]
      },
      {
        stepNo: "3.3",
        desc: "[Thế đối xứng trái] Lật ngửa bàn tay trái.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_2_3.png",
        isSymmetricLeft: true,
        keypoints: ["Mở lòng bàn tay trái ngửa"]
      },
      {
        stepNo: "3.4",
        desc: "[Thế đối xứng trái] Lật úp bàn tay trái.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_2_4.png",
        isSymmetricLeft: true,
        keypoints: ["Úp lòng bàn tay trái"]
      },
      {
        stepNo: "3.5",
        desc: "[Thế đối xứng trái] Quay cổ tay trái theo chiều kim đồng hồ.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_2_5.png",
        isSymmetricLeft: true,
        keypoints: ["Cuộn cổ tay trái mềm dẻo"]
      },
      {
        stepNo: "3.6",
        desc: "[Thế đối xứng trái] Từ từ kéo tay trái về sát nách.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_2_6.png",
        isSymmetricLeft: true,
        keypoints: ["Thu quyền trái sát sườn"]
      }
    ]
  },
  {
    id: "TND-04",
    code: "TND_04",
    name: "Chiêu 4: Hộ Thủ, Vỗ Ngực & Thung Kình Phải",
    formId: "01-tieu-niem-dau",
    formName: "Bài 1: Tiểu Niệm Đầu",
    order: 4,
    instructor: "HLV Đặng Xuân Hùng",
    summary: "Xòe ngửa bàn tay phải đưa thẳng ra trước, quay cổ tay ngược chiều kim đồng hồ, dựng bàn tay hộ thủ. Kéo bàn tay về vỗ ngực và phát thung kình mặt lưng cổ tay (lặp lại 3 lần).",
    stances: ["Nhị Tự Kiềm Dương Tấn"],
    hands: ["Hộ Thủ", "Vỗ Ngực", "Thung Kình"],
    targetZones: ["Trung Bàn"],
    difficulty: "Trung cấp",
    isSymmetricLeft: false,
    steps: [
      {
        stepNo: "4.1",
        desc: "Xòe ngửa bàn tay phải đưa thẳng ra phía trước.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_4_1.png",
        keypoints: ["Mở ngửa bàn tay", "Cẳng tay thẳng trục trung tuyến"]
      },
      {
        stepNo: "4.2",
        desc: "Quay cổ tay theo chiều ngược chiều kim đồng hồ.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_4_2.png",
        keypoints: ["Cuộn cổ tay ngược chiều kim đồng hồ"]
      },
      {
        stepNo: "4.3",
        desc: "Dựng bàn tay lên (lòng bàn tay hướng sang trái và vuông góc với cẳng tay).",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_4_3.png",
        keypoints: ["Hộ thủ vuông góc 90 độ", "Cùi chỏ ép sườn"]
      },
      {
        stepNo: "4.4",
        desc: "Kéo bàn tay về giữa ngực.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_4_4.png",
        keypoints: ["Kéo cẳng tay sát ngực"]
      },
      {
        stepNo: "4.5",
        desc: "Vỗ nhẹ tay vào ngực điều hòa khí huyết.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_4_5.png",
        keypoints: ["Vỗ chấn thủy điều tức"]
      },
      {
        stepNo: "4.6",
        desc: "Dùng mặt lưng của cổ tay tưởng tượng đẩy một vật nặng ra (Thung kình). Lặp lại (4.4; 4.5; 4.6) 3 lần.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_4_6.png",
        keypoints: ["Phát lực mặt lưng cổ tay", "Thung kình dũng mãnh", "Lặp lại 3 lần"]
      }
    ]
  },
  {
    id: "TND-05",
    code: "TND_05",
    name: "Chiêu 5: Hộ Thủ, Vỗ Ngực & Thung Kình Trái",
    formId: "01-tieu-niem-dau",
    formName: "Bài 1: Tiểu Niệm Đầu",
    order: 5,
    instructor: "HLV Đặng Xuân Hùng",
    summary: "Tương tự như Chiêu 4 nhưng chuyển sang thực hiện với tay trái.",
    stances: ["Nhị Tự Kiềm Dương Tấn"],
    hands: ["Hộ Thủ", "Vỗ Ngực", "Thung Kình"],
    targetZones: ["Trung Bàn"],
    difficulty: "Trung cấp",
    isSymmetricLeft: true,
    symmetricRef: "Chiêu 4: Hộ Thủ, Vỗ Ngực & Thung Kình Phải",
    symmetricNote: "Thế đối xứng bên trái của Chiêu 4.",
    steps: [
      {
        stepNo: "5.1",
        desc: "[Thế đối xứng trái] Xòe ngửa bàn tay trái đưa thẳng ra phía trước.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_4_1.png",
        isSymmetricLeft: true,
        keypoints: ["Tay trái mở ngửa ra trước"]
      },
      {
        stepNo: "5.2",
        desc: "[Thế đối xứng trái] Quay cổ tay trái theo chiều ngược chiều kim đồng hồ.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_4_2.png",
        isSymmetricLeft: true,
        keypoints: ["Cuộn cổ tay trái ngược chiều"]
      },
      {
        stepNo: "5.3",
        desc: "[Thế đối xứng trái] Dựng bàn tay trái lên vuông góc với cẳng tay (Hộ thủ trái).",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_4_3.png",
        isSymmetricLeft: true,
        keypoints: ["Hộ thủ trái che trung tuyến"]
      },
      {
        stepNo: "5.4",
        desc: "[Thế đối xứng trái] Kéo bàn tay trái về giữa ngực.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_4_4.png",
        isSymmetricLeft: true,
        keypoints: ["Kéo cẳng tay trái sát ngực"]
      },
      {
        stepNo: "5.5",
        desc: "[Thế đối xứng trái] Vỗ tay trái vào ngực.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_4_5.png",
        isSymmetricLeft: true,
        keypoints: ["Vỗ ngực điều hòa khí huyết"]
      },
      {
        stepNo: "5.6",
        desc: "[Thế đối xứng trái] Dùng mặt lưng cổ tay trái phát thung kình đẩy ra trước (lặp lại 3 lần rồi thu về).",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_4_6.png",
        isSymmetricLeft: true,
        keypoints: ["Thung kình mặt lưng cổ tay trái", "Lặp lại 3 lần"]
      }
    ]
  },
  {
    id: "TND-06",
    code: "TND_06",
    name: "Chiêu 6: Chưởng Tạt Sang Vai & Đánh Chưởng Thẳng Phải",
    formId: "01-tieu-niem-dau",
    formName: "Bài 1: Tiểu Niệm Đầu",
    order: 6,
    instructor: "HLV Đặng Xuân Hùng",
    summary: "Dùng chưởng đánh sang vai trái, kéo cổ tay sang vai phải, đưa chưởng vào giữa đánh thẳng ra trước, phóng ngón tay lắc 2 bên 3 lần.",
    stances: ["Nhị Tự Kiềm Dương Tấn"],
    hands: ["Chưởng Tạt", "Kéo Cổ Tay", "Chưởng Thẳng", "Tiêu Thủ"],
    targetZones: ["Trung Bàn", "Thượng Bàn"],
    difficulty: "Trung cấp",
    isSymmetricLeft: false,
    steps: [
      {
        stepNo: "6.4",
        desc: "Dùng chưởng đánh sang bên trái, đến hết vai trái thì dừng lại.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_6_4.png",
        keypoints: ["Đánh chưởng ngang vai trái", "Trục thân bất động"]
      },
      {
        stepNo: "6.5",
        desc: "Dùng mặt lưng của cổ tay kéo sang bên phải đến hết vai phải.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_6_5.png",
        keypoints: ["Mặt lưng cổ tay gạt sang phải"]
      },
      {
        stepNo: "6.6",
        desc: "Đưa chưởng vào giữa và đánh thẳng ra trước.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_6_6.png",
        keypoints: ["Chưởng thẳng Tý Ngọ Tuyến"]
      },
      {
        stepNo: "6.7",
        desc: "Phóng ngón tay ra phía trước sau đó đánh mũi bàn tay sang 2 bên 3 lần.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_6_7.png",
        keypoints: ["Phóng ngón tay lắc gân khớp", "Thu tay về nách như 2.5, 2.6"]
      }
    ]
  },
  {
    id: "TND-07",
    code: "TND_07",
    name: "Chiêu 7: Chưởng Tạt Sang Vai & Đánh Chưởng Thẳng Trái",
    formId: "01-tieu-niem-dau",
    formName: "Bài 1: Tiểu Niệm Đầu",
    order: 7,
    instructor: "HLV Đặng Xuân Hùng",
    summary: "Tương tự như Chiêu 6 nhưng chuyển sang thực hiện với tay trái.",
    stances: ["Nhị Tự Kiềm Dương Tấn"],
    hands: ["Chưởng Tạt", "Kéo Cổ Tay", "Chưởng Thẳng"],
    targetZones: ["Trung Bàn"],
    difficulty: "Trung cấp",
    isSymmetricLeft: true,
    symmetricRef: "Chiêu 6: Chưởng Tạt Sang Vai & Đánh Chưởng Thẳng Phải",
    symmetricNote: "Thế đối xứng bên trái của Chiêu 6.",
    steps: [
      {
        stepNo: "7.4",
        desc: "[Thế đối xứng trái] Dùng chưởng trái đánh sang vai phải.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_6_4.png",
        isSymmetricLeft: true,
        keypoints: ["Chưởng trái tạt sang phải"]
      },
      {
        stepNo: "7.5",
        desc: "[Thế đối xứng trái] Dùng mặt lưng cổ tay trái kéo sang vai trái.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_6_5.png",
        isSymmetricLeft: true,
        keypoints: ["Gạt lưng tay trái sang trái"]
      },
      {
        stepNo: "7.6",
        desc: "[Thế đối xứng trái] Đưa chưởng trái vào giữa đánh thẳng ra trước.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_6_6.png",
        isSymmetricLeft: true,
        keypoints: ["Chưởng trái phát lực trung tuyến"]
      },
      {
        stepNo: "7.7",
        desc: "[Thế đối xứng trái] Phóng ngón tay lắc 2 bên 3 lần rồi cuộn thu về.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_6_7.png",
        isSymmetricLeft: true,
        keypoints: ["Lắc ngón tay trái và thu quyền"]
      }
    ]
  },
  {
    id: "TND-08",
    code: "TND_08",
    name: "Chiêu 8: Thượng Đỡ, Hạ Đỡ & Xoay Cổ Tay Phải",
    formId: "01-tieu-niem-dau",
    formName: "Bài 1: Tiểu Niệm Đầu",
    order: 8,
    instructor: "HLV Đặng Xuân Hùng",
    summary: "Đưa tay phải lên đỡ đòn thượng, đưa xuống đỡ đòn hạ, đánh chưởng giữa, quay cổ tay 3 lần thuận và 3 lần ngược rồi thu về.",
    stances: ["Nhị Tự Kiềm Dương Tấn"],
    hands: ["Thượng Đỡ", "Hạ Đỡ", "Khẩu Thủ"],
    targetZones: ["Thượng Bàn", "Hạ Bàn"],
    difficulty: "Cơ bản",
    isSymmetricLeft: false,
    steps: [
      {
        stepNo: "8.1",
        desc: "Đưa tay phải lên tưởng tượng như đỡ một đòn đánh của đối thủ ở phần thượng.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_8_1.png",
        keypoints: ["Đỡ thượng bàn bảo vệ mặt"]
      },
      {
        stepNo: "8.2",
        desc: "Đưa tay xuống như đỡ một đòn đánh ở phần hạ.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_8_2.png",
        keypoints: ["Đỡ hạ bàn bảo vệ bụng"]
      },
      {
        stepNo: "8.5",
        desc: "Quay cổ tay theo chiều kim đồng hồ 3 lần sau đó quay ngược lại 3 lần rồi thu tay về.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_8_5.png",
        keypoints: ["Khẩu thủ xoay tròn hai chiều", "Thu quyền sát nách"]
      }
    ]
  },
  {
    id: "TND-09",
    code: "TND_09",
    name: "Chiêu 9: Thượng Đỡ, Hạ Đỡ & Xoay Cổ Tay Trái",
    formId: "01-tieu-niem-dau",
    formName: "Bài 1: Tiểu Niệm Đầu",
    order: 9,
    instructor: "HLV Đặng Xuân Hùng",
    summary: "Tương tự như Chiêu thứ 8 nhưng chuyển sang thực hiện với tay trái.",
    stances: ["Nhị Tự Kiềm Dương Tấn"],
    hands: ["Thượng Đỡ", "Hạ Đỡ", "Khẩu Thủ"],
    targetZones: ["Thượng Bàn", "Hạ Bàn"],
    difficulty: "Cơ bản",
    isSymmetricLeft: true,
    symmetricRef: "Chiêu 8: Thượng Đỡ, Hạ Đỡ & Xoay Cổ Tay Phải",
    symmetricNote: "Thế đối xứng bên trái của Chiêu 8.",
    steps: [
      {
        stepNo: "9.1",
        desc: "[Thế đối xứng trái] Đưa tay trái lên đỡ thượng bàn.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_8_1.png",
        isSymmetricLeft: true,
        keypoints: ["Tay trái đỡ thượng"]
      },
      {
        stepNo: "9.2",
        desc: "[Thế đối xứng trái] Đưa tay trái xuống đỡ hạ bàn.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_8_2.png",
        isSymmetricLeft: true,
        keypoints: ["Tay trái gạt hạ"]
      },
      {
        stepNo: "9.5",
        desc: "[Thế đối xứng trái] Quay cổ tay trái 3 lần thuận và 3 lần ngược rồi thu quyền.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_8_5.png",
        isSymmetricLeft: true,
        keypoints: ["Khẩu thủ tay trái"]
      }
    ]
  },
  {
    id: "TND-10",
    code: "TND_10",
    name: "Chiêu 10: Tứ Hướng Án Chưởng & Song Chém Ngang",
    formId: "01-tieu-niem-dau",
    formName: "Bài 1: Tiểu Niệm Đầu",
    order: 10,
    instructor: "HLV Đặng Xuân Hùng",
    summary: "Ấn lòng bàn tay phải rồi trái xuống dưới; đẩy 2 tay ra sau ưỡn người; đẩy 2 tay ra trước; đưa cánh tay lên ngang vai và chém sang hai bên.",
    stances: ["Nhị Tự Kiềm Dương Tấn"],
    hands: ["Án Chưởng", "Chém Song Thủ"],
    targetZones: ["Hạ Bàn", "Trung Bàn"],
    difficulty: "Trung cấp",
    isSymmetricLeft: false,
    steps: [
      {
        stepNo: "10.1",
        desc: "Từ vị trí hình 1, ấn lòng bàn tay phải xuống dưới.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_10_1.png",
        keypoints: ["Ấn tay phải hạ bàn"]
      },
      {
        stepNo: "10.2",
        desc: "Tương tự như vậy đối với tay trái.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_10_2.png",
        keypoints: ["Ấn tay trái hạ bàn"]
      },
      {
        stepNo: "10.3",
        desc: "Đưa 2 bàn tay ra sau, thân người hơi ưỡn về phía trước đẩy 2 lòng bàn tay xuống.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_10_3.png",
        keypoints: ["Đẩy sau lưng mở rộng khớp vai"]
      },
      {
        stepNo: "10.4",
        desc: "Đưa 2 bàn tay ra phía trước, đẩy 2 lòng bàn tay xuống.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_10_4.png",
        keypoints: ["Ấn song chưởng ra trước"]
      },
      {
        stepNo: "10.5",
        desc: "Đưa cánh tay và cẳng tay lên ngang vai, bàn tay phải ở trên bàn tay trái, 2 bàn tay úp.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_10_5.png",
        keypoints: ["Xếp chéo tay ngang ngực"]
      },
      {
        stepNo: "10.6",
        desc: "Chém mạnh mẽ sang hai bên.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_10_6.png",
        keypoints: ["Song trảm thủ mở rộng 180 độ"]
      }
    ]
  },
  {
    id: "TND-11",
    code: "TND_11",
    name: "Chiêu 11: Xoa Bàn Tay Đan Điền & Song Chưởng Xuất Kình",
    formId: "01-tieu-niem-dau",
    formName: "Bài 1: Tiểu Niệm Đầu",
    order: 11,
    instructor: "HLV Đặng Xuân Hùng",
    summary: "Đưa 2 bàn tay xuống thắt lưng phải, xoa hai bàn tay trên hai mặt phẳng 3 lần theo chiều kim đồng hồ, sau đó đánh song chưởng ra trước. Đổi bên trái (tập 3 lần).",
    stances: ["Nhị Tự Kiềm Dương Tấn"],
    hands: ["Xoa Chưởng", "Song Chưởng"],
    targetZones: ["Trung Bàn", "Hạ Bàn"],
    difficulty: "Trung cấp",
    isSymmetricLeft: false,
    steps: [
      {
        stepNo: "11.2",
        desc: "Đưa 2 bàn tay xuống đặt ở bên phải thắt lưng. Bàn tay phải đặt trên tay trái, xoa hai bàn tay trên hai mặt phẳng theo chiều kim đồng hồ 3 lần.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_11_2.png",
        keypoints: ["Xoa tay phải thắt lưng", "Điều hòa nội khí đan điền"]
      },
      {
        stepNo: "11.3",
        desc: "Kết thúc lần xoa thứ 3 đánh hai tay ra phía trước.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_11_3.png",
        keypoints: ["Phát song chưởng thẳng Tý Ngọ Tuyến"]
      }
    ]
  },
  {
    id: "TND-12",
    code: "TND_12",
    name: "Chiêu 12: Song Cổ Tay Gạt Trái - Phải & Đè Vỗ Xuất Chưởng",
    formId: "01-tieu-niem-dau",
    formName: "Bài 1: Tiểu Niệm Đầu",
    order: 12,
    instructor: "HLV Đặng Xuân Hùng",
    summary: "Tay phải ngoài tay trái trong đánh 2 cổ tay sang trái; đánh lưng cổ tay phải sang phải (tay trái Bàng thủ); vỗ 2 tay xuống; đè tay trái đánh chưởng phải ra trước.",
    stances: ["Nhị Tự Kiềm Dương Tấn"],
    hands: ["Bàng Thủ", "Gạt Cổ Tay", "Vỗ Xuống", "Chưởng Pháp"],
    targetZones: ["Trung Bàn"],
    difficulty: "Trung cấp",
    isSymmetricLeft: false,
    steps: [
      {
        stepNo: "12.1",
        desc: "Tay phải ở ngoài tay trái ở trong đánh 2 cổ tay sang trái.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_12_1.png",
        keypoints: ["Gạt hai cổ tay sang trái"]
      },
      {
        stepNo: "12.2",
        desc: "Đánh lưng cổ tay phải sang bên phải, tay trái Bàng thủ.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_12_2.png",
        keypoints: ["Tay phải gạt lưng tay, tay trái Bàng thủ"]
      },
      {
        stepNo: "12.3",
        desc: "Hai bàn tay vỗ xuống hạ bàn.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_12_3.png",
        keypoints: ["Vỗ hai bàn tay đè lực"]
      },
      {
        stepNo: "12.4",
        desc: "Tay trái đè xuống tay phải đánh thẳng chưởng ra trước, sau đó thu tay về như hình 1 (tập 3 lần cả 2 bên).",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_12_4.png",
        keypoints: ["Tay trái đè tay phải phóng chưởng"]
      }
    ]
  },
  {
    id: "TND-13",
    code: "TND_13",
    name: "Chiêu 13: Vuốt Chéo & Chọc Thẳng",
    formId: "01-tieu-niem-dau",
    formName: "Bài 1: Tiểu Niệm Đầu",
    order: 13,
    instructor: "HLV Đặng Xuân Hùng",
    summary: "Tay phải ở ngoài tay trái ở trong vuốt chéo xuống; tay phải chọc thẳng lên trên, tay trái theo sau.",
    stances: ["Nhị Tự Kiềm Dương Tấn"],
    hands: ["Vuốt Chéo", "Chọc Thẳng"],
    targetZones: ["Thượng Bàn", "Hạ Bàn"],
    difficulty: "Trung cấp",
    isSymmetricLeft: false,
    steps: [
      {
        stepNo: "13.1",
        desc: "Tay phải ở ngoài tay trái ở trong vuốt chéo xuống.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_13_1.png",
        keypoints: ["Vuốt cẳng tay chéo xuống hạ bàn"]
      },
      {
        stepNo: "13.2",
        desc: "Tay phải chọc thẳng lên trên, tay trái theo sau.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_13_2.png",
        keypoints: ["Chọc tiêu thủ lên thượng bàn"]
      }
    ]
  },
  {
    id: "TND-14",
    code: "TND_14",
    name: "Chiêu 14: Đổi Vị Trí Tay Ngửa - Úp",
    formId: "01-tieu-niem-dau",
    formName: "Bài 1: Tiểu Niệm Đầu",
    order: 14,
    instructor: "HLV Đặng Xuân Hùng",
    summary: "Đưa tay lên với lòng bàn tay phải ngửa, lòng bàn tay trái úp; luân phiên chuyển vị trí tấn công và phòng thủ tuần tự 2 tay.",
    stances: ["Nhị Tự Kiềm Dương Tấn"],
    hands: ["Ngửa Úp Song Thủ"],
    targetZones: ["Trung Bàn", "Thượng Bàn"],
    difficulty: "Trung cấp",
    isSymmetricLeft: false,
    steps: [
      {
        stepNo: "14.2",
        desc: "Tương tự 13.2 đưa tay lên nhưng lòng bàn tay phải ngửa, lòng bàn tay trái úp.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_14_2.png",
        keypoints: ["Tay phải ngửa tay trái úp luân chuyển"]
      }
    ]
  },
  {
    id: "TND-15",
    code: "TND_15",
    name: "Chiêu 15: Song Thủ Lên Cao, Vuốt Xuống & Xỉa Chéo",
    formId: "01-tieu-niem-dau",
    formName: "Bài 1: Tiểu Niệm Đầu",
    order: 15,
    instructor: "HLV Đặng Xuân Hùng",
    summary: "Đưa 2 tay lên cao ngửa lòng bàn tay; vuốt xuống úp lòng bàn tay; xỉa chéo lên; dùng lưng cổ tay đánh lên rồi thu tay về sát nách.",
    stances: ["Nhị Tự Kiềm Dương Tấn"],
    hands: ["Song Thủ Thượng", "Vuốt Hạ", "Xỉa Chéo"],
    targetZones: ["Thượng Bàn"],
    difficulty: "Cơ bản",
    isSymmetricLeft: false,
    steps: [
      {
        stepNo: "15.1",
        desc: "Đưa 2 tay lên cao, hai lòng bàn tay ngửa hướng lên.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_15_1.png",
        keypoints: ["Hai tay dâng cao hướng thiên"]
      },
      {
        stepNo: "15.2",
        desc: "Hai bàn tay vuốt xuống, hai lòng bàn tay úp.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_15_2.png",
        keypoints: ["Vuốt úp xuống đan điền"]
      },
      {
        stepNo: "15.3",
        desc: "Hai bàn tay xỉa chéo lên trên.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_15_3.png",
        keypoints: ["Xỉa chéo song thủ"]
      },
      {
        stepNo: "15.5",
        desc: "Dùng lưng cổ tay đánh lên rồi thu tay về vị trí hình 1.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_15_5.png",
        keypoints: ["Lưng cổ tay đánh hất lên rồi thu quyền sát nách"]
      }
    ]
  },
  {
    id: "TND-16",
    code: "TND_16",
    name: "Chiêu 16: Bàng Thủ, Than Thủ & Đánh Cạnh Chưởng",
    formId: "01-tieu-niem-dau",
    formName: "Bài 1: Tiểu Niệm Đầu",
    order: 16,
    instructor: "HLV Đặng Xuân Hùng",
    summary: "Đưa tay phải ra đỡ Bàng thủ; chuyển sang Than thủ; đánh cạnh chưởng ra trước rồi thu tay về sát nách. Đổi tay trái (tập 3 lần).",
    stances: ["Nhị Tự Kiềm Dương Tấn"],
    hands: ["Bàng Thủ", "Than Thủ", "Cạnh Chưởng"],
    targetZones: ["Trung Bàn"],
    difficulty: "Cơ bản",
    isSymmetricLeft: false,
    steps: [
      {
        stepNo: "16.1",
        desc: "Từ vị trí hình 1, đưa tay phải ra đỡ Bàng thủ.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_16_1.png",
        keypoints: ["Cánh cung Bàng thủ hóa giải đòn đấm"]
      },
      {
        stepNo: "16.2",
        desc: "Từ Bàng thủ chuyển sang Than thủ (ngửa lòng bàn tay lên trên).",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_16_2.png",
        keypoints: ["Than thủ mở lòng bàn tay nâng đỡ"]
      },
      {
        stepNo: "16.3",
        desc: "Đánh cạnh chưởng ra trước sau đó thu tay về vị trí như hình 1.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_16_3.png",
        keypoints: ["Trảm cạnh bàn tay thẳng trung tuyến"]
      }
    ]
  },
  {
    id: "TND-17",
    code: "TND_17",
    name: "Chiêu 17: Cườm Tay Đánh Ra",
    formId: "01-tieu-niem-dau",
    formName: "Bài 1: Tiểu Niệm Đầu",
    order: 17,
    instructor: "HLV Đặng Xuân Hùng",
    summary: "Đưa tay phải lên trên ngang vai; tay trái kéo về cườm tay phải đánh ra. Thực hiện xong tay phải chuyển sang tay trái (tập 3 lần).",
    stances: ["Nhị Tự Kiềm Dương Tấn"],
    hands: ["Cườm Tay"],
    targetZones: ["Thượng Bàn"],
    difficulty: "Cơ bản",
    isSymmetricLeft: false,
    steps: [
      {
        stepNo: "17.1",
        desc: "Đưa tay phải lên trên ngang vai.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_17_1.png",
        keypoints: ["Dâng tay phải ngang vai"]
      },
      {
        stepNo: "17.2",
        desc: "Tay trái kéo về, cườm tay phải đánh mạnh ra trước.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_17_2.png",
        keypoints: ["Phát lực cườm tay gãy góc"]
      }
    ]
  },
  {
    id: "TND-18",
    code: "TND_18",
    name: "Chiêu 18: Tam Tầng Liên Hoàn Quyền, Song Chưởng & Bái Tổ Kết Thúc",
    formId: "01-tieu-niem-dau",
    formName: "Bài 1: Tiểu Niệm Đầu",
    order: 18,
    instructor: "HLV Đặng Xuân Hùng",
    summary: "Đấm tay phải lên thượng, đấm tay trái vào trung, đấm tay phải xuống hạ; đánh thẳng song chưởng ra trước; hai tay đánh ấn chưởng xuống dưới dọc thân người. BÁI TỔ - Kết thúc bài!",
    stances: ["Nhị Tự Kiềm Dương Tấn"],
    hands: ["Tam Tầng Quyền", "Song Chưởng", "Ấn Chưởng"],
    targetZones: ["Thượng Bàn", "Trung Bàn", "Hạ Bàn"],
    difficulty: "Nâng cao",
    isSymmetricLeft: false,
    steps: [
      {
        stepNo: "18.1",
        desc: "Đấm tay phải lên vùng thượng.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_18_1.png",
        keypoints: ["Đấm bốc lên cằm"]
      },
      {
        stepNo: "18.2",
        desc: "Đấm tay trái vào vùng trung.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_18_2.png",
        keypoints: ["Đấm xuyên tâm chấn thủy"]
      },
      {
        stepNo: "18.3",
        desc: "Đấm tay phải xuống vùng hạ.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_18_3.png",
        keypoints: ["Đấm cắm hạ bộ"]
      },
      {
        stepNo: "18.4",
        desc: "Đánh thẳng song chưởng ra trước.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_18_4.png",
        keypoints: ["Song chưởng phát lực"]
      },
      {
        stepNo: "18.5",
        desc: "Hai tay đánh ấn chưởng xuống dưới dọc theo thân người. BÁI TỔ - KẾT THÚC BÀI TIỂU NIỆM ĐẦU.",
        imgUrl: "/assets/images/forms/01_tieu_niem_dau/tnd_18_5.png",
        keypoints: ["Ấn chưởng hạ bàn", "Thu chân khép gối Bái Tổ hoàn tất"]
      }
    ]
  }
];

// Dữ liệu 6 chiêu lớn của Bài 2: Tầm Kiều (HLV Nguyễn Trọng Sơn)
export const TAM_KIEU_TECHNIQUES: Technique[] = [
  {
    id: "TK-01",
    code: "TK_01",
    name: "Chiêu 1: Bái Tổ Khởi Thức & Tam Bắt Chéo",
    formId: "02-tam-kieu",
    formName: "Bài 2: Tầm Kiều",
    order: 1,
    instructor: "HLV Nguyễn Trọng Sơn",
    summary: "Bao gồm 3 động tác: Bắt chéo 2 tay đưa dần xuống thắt lưng, đưa lên trên gấp cổ tay thả lỏng ngón tay, dựng bàn tay xòe bắt chéo rồi thu về.",
    stances: ["Nhị Tự Kiềm Dương Tấn"],
    hands: ["Song Thủ Giao Thoa", "Khẩu Thủ", "Thu Quyền"],
    targetZones: ["Trung Bàn", "Hạ Bàn"],
    difficulty: "Cơ bản",
    isSymmetricLeft: false,
    steps: [
      {
        stepNo: "1.1",
        desc: "Hai tay bắt chéo, tay trái ở trong đưa dần từ trên xuống dưới đến ngang mức thắt lưng.",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_1_1.png",
        keypoints: ["Tay trái trong tay phải ngoài", "Hạ dần xuống đan điền"]
      },
      {
        stepNo: "1.2",
        desc: "Đưa tay lên trên, gấp cổ tay thả lỏng ngón tay.",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_1_2.png",
        keypoints: ["Gấp cổ tay dẻo", "Mở rộng góc vai"]
      },
      {
        stepNo: "1.3",
        desc: "Dựng bàn tay, hai tay xòe bắt chéo rồi thu về sát nách.",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_1_3.png",
        keypoints: ["Xòe bắt chéo che mặt", "Thu quyền sát nách"]
      }
    ]
  },
  {
    id: "TK-02",
    code: "TK_02",
    name: "Chiêu 2: Nhật Tự Quyền & Thất Biến Khẩu Thủ Phải",
    formId: "02-tam-kieu",
    formName: "Bài 2: Tầm Kiều",
    order: 2,
    instructor: "HLV Nguyễn Trọng Sơn",
    summary: "Bao gồm 8 động tác: Đấm thẳng tay phải, mở 5 đầu ngón tay, đánh cổ tay lên - xuống (3 lần), úp bàn tay đánh cạnh cổ tay sang hai bên (3 lần), xoay tròn cổ tay 3 vòng thuận và 3 vòng ngược, xoay từ trong ra ngoài tưởng tượng nắm cổ tay đối phương kéo về nách. Lặp lại với tay trái.",
    stances: ["Nhị Tự Kiềm Dương Tấn"],
    hands: ["Nhật Tự Quyền", "Tiêu Thủ", "Khẩu Thủ", "Cầm Nã"],
    targetZones: ["Trung Bàn", "Thượng Bàn"],
    difficulty: "Trung cấp",
    isSymmetricLeft: false,
    steps: [
      {
        stepNo: "2.1",
        desc: "Đứng kiềm dương tấn. Đấm thẳng tay phải ra trước. Mắt nhìn thẳng.",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_2_1.png",
        keypoints: ["Đấm thẳng Tý Ngọ Tuyến"]
      },
      {
        stepNo: "2.2",
        desc: "Mở bung 5 đầu ngón tay ra trước (Tiêu thủ).",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_2_2.png",
        keypoints: ["Xòe căng 5 ngón tay"]
      },
      {
        stepNo: "2.3",
        desc: "Đánh cổ tay lên trên rồi xuống dưới (3 lần).",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_2_3.png",
        keypoints: ["Vận động khớp cổ tay dẻo dai"]
      },
      {
        stepNo: "2.5",
        desc: "Xoay úp bàn tay. Đánh cạnh cổ tay sang hai bên phải - trái (3 lần).",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_2_5.png",
        keypoints: ["Đánh cạnh cổ tay linh hoạt"]
      },
      {
        stepNo: "2.6",
        desc: "Xoay tròn cổ tay theo chiều kim đồng hồ 3 vòng, rồi ngược lại 3 vòng.",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_2_6.png",
        keypoints: ["Khẩu thủ hai chiều"]
      },
      {
        stepNo: "2.8",
        desc: "Xoay cổ tay từ trong ra ngoài, tưởng tượng nắm cổ tay đối phương rồi kéo về sát nách. Lặp lại chiêu số 2 với tay bên trái.",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_2_8.png",
        keypoints: ["Cầm nã khóa kéo về sườn"]
      }
    ]
  },
  {
    id: "TK-03",
    code: "TK_03",
    name: "Chiêu 3: Nhập Nội Xoay Trục 180°, Song Bàng Thủ & Thúc Khuỷu Tay",
    formId: "02-tam-kieu",
    formName: "Bài 2: Tầm Kiều",
    order: 3,
    instructor: "HLV Nguyễn Trọng Sơn",
    summary: "Bao gồm 18 động tác kinh điển của Tầm Kiều: Đánh thẳng hai bàn tay xuống, thu về đánh thẳng ra trước, xoay người 90° - 180°, song bàng thủ, khốn thủ than - bàng, xoay vặn thân hình cánh cung thúc cùi chỏ ra sau, chém cạnh ngoài cẳng tay sang phải. Lặp lại toàn bộ với tay bên trái.",
    stances: ["Nhị Tự Kiềm Dương Tấn", "Đinh Tấn", "Xoay Trục 180°"],
    hands: ["Song Bàng Thủ", "Than Thủ", "Thúc Khuỷu Tay", "Chém Cẳng Tay"],
    targetZones: ["Trung Bàn", "Thượng Bàn"],
    difficulty: "Nâng cao",
    isSymmetricLeft: false,
    steps: [
      {
        stepNo: "3.1",
        desc: "Chân đứng kiềm dương tấn. Mở bàn tay, đánh thẳng hai bàn tay xuống dưới.",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_3_1.png",
        keypoints: ["Đánh hạ bàn hai chưởng"]
      },
      {
        stepNo: "3.2",
        desc: "Thu hai tay về sát nách rồi đánh thẳng ra phía trước.",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_3_2.png",
        keypoints: ["Song chưởng thẳng trung tuyến"]
      },
      {
        stepNo: "3.4",
        desc: "Xoay người sang phải, hai bàn chân song song.",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_3_4.png",
        keypoints: ["Xoay trục hông 90 độ"]
      },
      {
        stepNo: "3.7",
        desc: "Chân giữ nguyên. Xoay cẳng tay phải thành than thủ, tay trái đặt lên tay phải.",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_3_7.png",
        keypoints: ["Khốn thủ bảo vệ sườn"]
      },
      {
        stepNo: "3.13",
        desc: "Xoay người 180 độ. Tay phải kéo ra sau, đánh cẳng tay trái ra trước tạo thế giương cung.",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_3_13.png",
        keypoints: ["Xoay nghịch hướng 180 độ", "Thế giương cung"]
      },
      {
        stepNo: "3.15",
        desc: "Xoay vặn người tối đa tạo hình cánh cung. Đánh cùi chỏ ra sau theo hướng từ trên xuống dưới.",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_3_15.png",
        keypoints: ["Thúc cùi chỏ phá nách sau"]
      },
      {
        stepNo: "3.17",
        desc: "Xoay người ra sau. Chân lập kiềm dương tấn. Chém cạnh ngoài cẳng tay phải sang phải.",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_3_17.png",
        keypoints: ["Chém cẳng tay", "Về kiềm dương tấn"]
      }
    ]
  },
  {
    id: "TK-04",
    code: "TK_04",
    name: "Chiêu 4: Triệt Cước Đá Thẳng & Tiến Truy Mã Thúc Cùi Chỏ",
    formId: "02-tam-kieu",
    formName: "Bài 2: Tầm Kiều",
    order: 4,
    instructor: "HLV Nguyễn Trọng Sơn",
    summary: "Bao gồm 3 động tác: Xoay người sang phải, co gối đá thẳng cạnh ngoài bàn chân phải ra trước; đặt chân xuống tiến truy mã đánh 3 lần cùi chỏ trái, bổ song quyền xuống dưới. Lặp lại với bên trái.",
    stances: ["Độc Cước Tấn", "Truy Mã"],
    hands: ["Cùi Chỏ", "Bổ Song Quyền"],
    targetZones: ["Hạ Bàn", "Trung Bàn"],
    difficulty: "Nâng cao",
    isSymmetricLeft: false,
    steps: [
      {
        stepNo: "4.1",
        desc: "Xoay người sang phải. Cẳng tay phải vuông góc mặt đất bàn tay úp. Thu gối kéo chân phải lên.",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_4_1.png",
        keypoints: ["Co gối thủ hạ bộ", "Độc cước vững vàng"]
      },
      {
        stepNo: "4.2",
        desc: "Đá thẳng cạnh ngoài bàn chân phải ra trước (Triệt cước).",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_4_2.png",
        keypoints: ["Đá cạnh bàn chân", "Mũi chân bẻ vuông góc"]
      },
      {
        stepNo: "4.3",
        desc: "Đặt chân phải xuống, thực hiện 3 lần đánh cùi chỏ tay trái ra trước kèm tiến truy mã, bổ song quyền xuống dưới rồi thu về.",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_4_3.png",
        keypoints: ["Truy mã áp sát giáp chiến", "Cùi chỏ liên hoàn"]
      }
    ]
  },
  {
    id: "TK-05",
    code: "TK_05",
    name: "Chiêu 5: Xoay Tròn Đá Móc & Song Thủ Tiến Xỉa Song Song",
    formId: "02-tam-kieu",
    formName: "Bài 2: Tầm Kiều",
    order: 5,
    instructor: "HLV Nguyễn Trọng Sơn",
    summary: "Bao gồm 8 động tác: Nâng gối phải xoay tròn ngược chiều kim đồng hồ đá móc lên; đặt chân xuống xỉa 2 tay xấp rồi ngửa tiến truy mã; đánh cạnh hai bàn tay từ dưới lên; xỉa song thủ và phát song chưởng thẳng ra trước.",
    stances: ["Độc Cước", "Truy Mã", "Kiềm Dương Tấn"],
    hands: ["Đá Móc", "Xỉa Song Thủ", "Song Chưởng"],
    targetZones: ["Hạ Bàn", "Trung Bàn"],
    difficulty: "Nâng cao",
    isSymmetricLeft: false,
    steps: [
      {
        stepNo: "5.1",
        desc: "Xoay người sang phải, nâng gối phải lên cao.",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_5_1.png",
        keypoints: ["Dâng gối che ngực"]
      },
      {
        stepNo: "5.2",
        desc: "Mũi bàn chân phải xoay tròn một vòng ngược chiều kim đồng hồ đá móc lên.",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_4_2.png",
        keypoints: ["Đá móc gót chân vào khớp gối địch"]
      },
      {
        stepNo: "5.5",
        desc: "Kéo chân trái lên trước tạo thế kiềm dương tấn. Đánh cạnh hai bàn tay từ dưới lên trên.",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_5_5.png",
        keypoints: ["Đánh cạnh bàn tay hất cằm"]
      },
      {
        stepNo: "5.7",
        desc: "Xỉa cả hai bàn tay ra trước, giật về đánh thẳng song chưởng rồi kéo tay về nách.",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_5_7.png",
        keypoints: ["Xỉa song thủ rồi phát song chưởng"]
      }
    ]
  },
  {
    id: "TK-06",
    code: "TK_06",
    name: "Chiêu 6: Đá Chếch Ngang, Khốn Thủ & Bái Tổ Hoàn Tất",
    formId: "02-tam-kieu",
    formName: "Bài 2: Tầm Kiều",
    order: 6,
    instructor: "HLV Nguyễn Trọng Sơn",
    summary: "Bao gồm 4 động tác: Đá chếch ngang với bàn chân phải; đặt chân xuống làm thế khốn thủ than - bàng; xoay người 180° đổi than - bàng; biên thân đánh chưởng thẳng ra trước. Thu về Kiềm dương tấn đánh song chưởng. BÁI TỔ - Kết thúc bài Tầm Kiều!",
    stances: ["Đinh Tấn", "Kiềm Dương Tấn"],
    hands: ["Khốn Thủ", "Than Thủ", "Bàng Thủ", "Biên Thân Chưởng"],
    targetZones: ["Trung Bàn", "Hạ Bàn"],
    difficulty: "Nâng cao",
    isSymmetricLeft: false,
    steps: [
      {
        stepNo: "6.1",
        desc: "Từ kiềm dương tấn, xoay người sang phải, đá chếch ngang với bàn chân phải.",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_6_1.png",
        keypoints: ["Đá chếch ngang triệt hạ"]
      },
      {
        stepNo: "6.2",
        desc: "Đặt chân phải xuống song song chân trái. Tay phải than thủ, tay trái bàng thủ (Khốn thủ).",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_6_2.png",
        keypoints: ["Khốn thủ bàng than chặt chẽ"]
      },
      {
        stepNo: "6.3",
        desc: "Xoay hai chân sang trái 180 độ. Đồng thời đổi tay: tay phải chuyển bàng thủ, tay trái than thủ.",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_6_3.png",
        keypoints: ["Chuyển trục 180 độ biến hóa"]
      },
      {
        stepNo: "6.4",
        desc: "Xoay người ra trước biên thân đánh thẳng chưởng trái, gạt than thủ phải. Thu chân về kiềm dương tấn đánh song chưởng. BÁI TỔ - KẾT THÚC BÀI TẦM KIỀU.",
        imgUrl: "/assets/images/forms/02_tam_kieu/tk_6_4.png",
        keypoints: ["Biên thân chưởng dứt điểm", "Bái Tổ hoàn tất bài"]
      }
    ]
  }
];

// Dữ liệu 19 chiêu của Bài 3: Tiêu Chỉ (VS Hồ Chí Quang)
export const TIEU_CHI_TECHNIQUES: Technique[] = [
{
    id: "TC-01",
    code: "TC_01",
    name: "Chiêu 1: Bái Tổ Tiêu Chỉ & Thượng Giật Cùi Chỏ",
    formId: "03-tieu-chi",
    formName: "Bài 3: Tiêu Chỉ",
    order: 1,
    instructor: "VS Hồ Chí Quang",
    summary: "Từ Kiềm dương tấn, bắt chéo 2 tay hạ xuống đan điền (cổ tay trái dưới cổ tay phải); đánh 2 tay hướng lên trên vẫn bắt chéo; thu giật mạnh 2 cùi chỏ về sau mạn sườn.",
    stances: ["Nhị Tự Kiềm Dương Tấn"],
    hands: ["Song Thủ Bắt Chéo", "Giật Cùi Chỏ"],
    targetZones: ["Hạ Bàn", "Thượng Bàn"],
    difficulty: "Cơ bản",
    isSymmetricLeft: false,
    steps: [
{
        stepNo: "1.1",
        desc: "Từ Kiềm dương tấn, bắt chéo hai tay hạ xuống đan điền, cổ tay trái dưới cổ tay phải.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_1_1.png",
        keypoints: ["Bắt chéo hạ đan điền"]
      },
{
        stepNo: "1.2",
        desc: "Đánh hai tay hướng lên trên, vẫn bắt chéo che chắn diện mạo.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_1_2.png",
        keypoints: ["Dâng cao bắt chéo che thượng bàn"]
      },
{
        stepNo: "1.3",
        desc: "Thu giật mạnh hai cùi chỏ về sau mạn sườn, phát lực thốn kình.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_1_3.png",
        keypoints: ["Giật cùi chỏ phát kình"]
      }
    ]
  },
{
    id: "TC-02",
    code: "TC_02",
    name: "Chiêu 2: Tiêu Thủ Phóng Xòe & Tam Biến Lắc Cổ Tay",
    formId: "03-tieu-chi",
    formName: "Bài 3: Tiêu Chỉ",
    order: 2,
    instructor: "VS Hồ Chí Quang",
    summary: "Đấm Nhật tự quyền tay phải; phóng xòe bàn tay ra; lắc bàn tay lên xuống 3 lần (cổ tay bất động); lật sấp bàn tay lắc trái phải 3 lần; cuốn cổ tay xoay tròn theo chiều kim đồng hồ thu về nách.",
    stances: ["Nhị Tự Kiềm Dương Tấn"],
    hands: ["Tiêu Thủ", "Nhật Tự Quyền", "Lắc Cổ Tay", "Khẩu Thủ"],
    targetZones: ["Trung Bàn", "Thượng Bàn"],
    difficulty: "Trung cấp",
    isSymmetricLeft: false,
    steps: [
{
        stepNo: "2.1",
        desc: "Tay phải đấm Nhật tự quyền ra trước.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_2_1.png",
        keypoints: ["Đấm thẳng Tý Ngọ Tuyến"]
      },
{
        stepNo: "2.2",
        desc: "Phóng xòe bàn tay ra (Tiêu thủ bắn tỉa).",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_2_2.png",
        keypoints: ["Ngón tay vươn thẳng xuyên thấu"]
      },
{
        stepNo: "2.3",
        desc: "Lắc bàn tay phải lên xuống 3 lần, cổ tay bất động tôi luyện gân ngón.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_2_3.png",
        keypoints: ["Lắc gân ngón tay"]
      },
{
        stepNo: "2.4",
        desc: "Sau đó lật sấp bàn tay, lắc bàn tay sang trái - phải 3 lần, cổ tay bất động.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_2_4.png",
        keypoints: ["Lắc ngang kéo dãn khớp"]
      },
{
        stepNo: "2.5",
        desc: "Cuốn cổ tay phải, quay vòng tròn theo chiều kim đồng hồ, thu tay về.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_2_5.png",
        keypoints: ["Khẩu thủ cuộn thu sát nách"]
      }
    ]
  },
{
    id: "TC-03",
    code: "TC_03",
    name: "Chiêu 3: Tiêu Thủ Phóng Xòe & Tam Biến Cổ Tay Trái (Đối Xứng Trái)",
    formId: "03-tieu-chi",
    formName: "Bài 3: Tiêu Chỉ",
    order: 3,
    instructor: "VS Hồ Chí Quang",
    summary: "Tương tự chiêu thứ 2 nhưng đối xứng bên trái: Tay trái đấm Nhật tự quyền, phóng xòe ngón tay, lắc lên xuống, lật sấp lắc trái phải, cuộn tròn cổ tay thu về nách.",
    stances: ["Nhị Tự Kiềm Dương Tấn"],
    hands: ["Tiêu Thủ", "Khẩu Thủ"],
    targetZones: ["Trung Bàn", "Thượng Bàn"],
    difficulty: "Trung cấp",
    isSymmetricLeft: true,
    symmetricRef: "Chiêu 2: Tiêu Thủ Phóng Xòe & Tam Biến Lắc Cổ Tay",
    symmetricNote: "Thế đối xứng bên trái của Chiêu 2.",
    steps: [
{
        stepNo: "3.1",
        desc: "[Thế đối xứng trái] Tay trái đấm Nhật tự quyền ra trước.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_2_1.png",
        isSymmetricLeft: true,
        keypoints: ["Đấm tay trái"]
      },
{
        stepNo: "3.2",
        desc: "[Thế đối xứng trái] Phóng xòe bàn tay trái (Tiêu thủ bắn tỉa).",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_2_2.png",
        isSymmetricLeft: true,
        keypoints: ["Tiêu thủ ngón tay trái"]
      },
{
        stepNo: "3.3",
        desc: "[Thế đối xứng trái] Lắc bàn tay trái lên xuống 3 lần, cổ tay bất động.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_2_3.png",
        isSymmetricLeft: true,
        keypoints: ["Lắc gân ngón tay trái"]
      },
{
        stepNo: "3.4",
        desc: "[Thế đối xứng trái] Lật sấp bàn tay trái, lắc sang phải - trái 3 lần.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_2_4.png",
        isSymmetricLeft: true,
        keypoints: ["Lắc ngang cổ tay trái"]
      },
{
        stepNo: "3.5",
        desc: "[Thế đối xứng trái] Cuốn cổ tay trái, quay vòng tròn ngược chiều kim đồng hồ, thu tay về nách.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_2_5.png",
        isSymmetricLeft: true,
        keypoints: ["Thu quyền trái"]
      }
    ]
  },
{
    id: "TC-04",
    code: "TC_04",
    name: "Chiêu 4: Khoa Chân Tròn, Vắt Tay Long Trảo & Xỉa Song Song",
    formId: "03-tieu-chi",
    formName: "Bài 3: Tiêu Chỉ",
    order: 4,
    instructor: "VS Hồ Chí Quang",
    summary: "Trụ chân trái, nhấc chân phải khoa 1 vòng tròn từ trong ra ngoài, sau đó trụ chân phải khoa chân trái; vặn eo lưng vắt tay trái long trảo sang phải; làm tương tự sang trái với tay phải; xỉa tay phải rồi tay trái song song, cuộn 2 cổ tay thu về nách.",
    stances: ["Khoa Chân Tròn", "Kiềm Dương Tấn"],
    hands: ["Long Trảo", "Xỉa Song Thủ", "Cuộn Cổ Tay"],
    targetZones: ["Hạ Bàn", "Trung Bàn"],
    difficulty: "Nâng cao",
    isSymmetricLeft: false,
    steps: [
{
        stepNo: "4.1",
        desc: "Trụ chân trái, nhấc chân phải khoa 1 vòng tròn từ trong ra ngoài, sau đó trụ chân phải khoa chân trái tương tự.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_4_1.png",
        keypoints: ["Khoa chân tròn mượn lực quán tính"]
      },
{
        stepNo: "4.2",
        desc: "Vặn eo lưng sang phải, vắt tay trái long trảo ngang sang phải, mắt nhìn theo hướng đánh.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_4_2.png",
        keypoints: ["Vặn eo phát kình long trảo"]
      },
{
        stepNo: "4.3",
        desc: "Làm tương tự sang trái với tay phải; làm một lần nữa động tác trên với tay trái.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_4_3.png",
        keypoints: ["Đổi hướng long trảo sang trái"]
      },
{
        stepNo: "4.4",
        desc: "Tay phải úp xấp xỉa bàn tay về phía trước, bước chân trái lên để thành Kiềm dương tấn.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_4_4.png",
        keypoints: ["Xỉa tay phải về trước"]
      },
{
        stepNo: "4.5",
        desc: "Giữ nguyên tay phải, tay trái xấp xỉa về phía trước song song, cuộn 2 cổ tay thu về nách. Quay về hướng Kiềm dương khởi đầu.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_4_5.png",
        keypoints: ["Song thủ xỉa thẳng rồi thu quyền"]
      }
    ]
  },
{
    id: "TC-05",
    code: "TC_05",
    name: "Chiêu 5: Khoa Chân & Long Trảo Đối Xứng Trái",
    formId: "03-tieu-chi",
    formName: "Bài 3: Tiêu Chỉ",
    order: 5,
    instructor: "VS Hồ Chí Quang",
    summary: "Tương tự chiêu thứ 4 nhưng đối xứng bên trái.",
    stances: ["Khoa Chân", "Kiềm Dương Tấn"],
    hands: ["Long Trảo", "Xỉa Song Thủ"],
    targetZones: ["Trung Bàn"],
    difficulty: "Nâng cao",
    isSymmetricLeft: true,
    symmetricRef: "Chiêu 4: Khoa Chân Tròn, Vắt Tay Long Trảo & Xỉa Song Song",
    symmetricNote: "Thế đối xứng bên trái của Chiêu 4.",
    steps: [
{
        stepNo: "5.1",
        desc: "[Thế đối xứng trái] Khoa chân đổi bên, trụ chân phải khoa chân trái từ trong ra ngoài.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_4_1.png",
        isSymmetricLeft: true,
        keypoints: ["Khoa chân đổi bên trái"]
      },
{
        stepNo: "5.2",
        desc: "[Thế đối xứng trái] Vặn eo lưng sang trái, vắt tay phải long trảo ngang sang trái.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_4_2.png",
        isSymmetricLeft: true,
        keypoints: ["Long trảo vắt sang trái"]
      },
{
        stepNo: "5.3",
        desc: "[Thế đối xứng trái] Làm tương tự sang phải với tay trái, rồi vắt long trảo phải sang trái.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_4_3.png",
        isSymmetricLeft: true,
        keypoints: ["Đổi bên vồ long trảo"]
      },
{
        stepNo: "5.4",
        desc: "[Thế đối xứng trái] Tay trái úp xấp xỉa ra trước, bước chân phải lên thành Kiềm dương tấn.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_4_4.png",
        isSymmetricLeft: true,
        keypoints: ["Xỉa tay trái về trước"]
      },
{
        stepNo: "5.5",
        desc: "[Thế đối xứng trái] Tay phải xấp xỉa song song, cuộn 2 cổ tay thu về nách.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_4_5.png",
        isSymmetricLeft: true,
        keypoints: ["Thu quyền về nách"]
      }
    ]
  },
{
    id: "TC-06",
    code: "TC_06",
    name: "Chiêu 6: Chưởng Thẳng Lùi Chân, Chém Phạt Ngang, Dựng Thủ & Thu Rút Chém",
    formId: "03-tieu-chi",
    formName: "Bài 3: Tiêu Chỉ",
    order: 6,
    instructor: "VS Hồ Chí Quang",
    summary: "Khoa chân tròn; quay người tiến vắt long trảo; lùi chân trái đánh chưởng thẳng tay phải; tiến chân trái đánh chưởng trái; chém phạt ngang bàn tay xấp; bước lên dựng 2 bàn tay song song; thực hiện động tác kinh điển Thu tay _ Rút _ Chém về Kiềm dương tấn.",
    stances: ["Tiến Lùi Bộ", "Kiềm Dương Tấn"],
    hands: ["Chưởng Thẳng", "Chém Phạt Ngang", "Dựng Thủ", "Thu Rút Chém"],
    targetZones: ["Trung Bàn", "Thượng Bàn"],
    difficulty: "Nâng cao",
    isSymmetricLeft: false,
    steps: [
{
        stepNo: "6.1",
        desc: "Khoa tròn chân phải một lần bên phải, chân trái một lần bên trái (đứng như hình 4.1).",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_4_1.png",
        keypoints: ["Khoa chân khởi đòn"]
      },
{
        stepNo: "6.2",
        desc: "Quay người sang phải, chân trái tiến 1 bước, đồng thời vắt tay trái vồ long trảo, tay phải thủ bên sườn (như hình 4.2).",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_4_2.png",
        keypoints: ["Vồ long trảo nhập nội"]
      },
{
        stepNo: "6.3",
        desc: "Quay người, lùi chân trái, đánh chưởng thẳng tay phải, tay trái về thủ (hình 6.3 nhìn từ phía sau).",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_6_3.png",
        keypoints: ["Lùi chân đánh chưởng thẳng"]
      },
{
        stepNo: "6.4",
        desc: "Quay người tiến chân trái lên, tay trái đánh chưởng, tay phải về thủ.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_6_4.png",
        keypoints: ["Tiến chân đổi chưởng"]
      },
{
        stepNo: "6.5",
        desc: "Quay người sang trái, tay trái chém phạt ngang - bàn tay xấp; tay phải đi theo sang ngang; chân về Kiềm dương khởi đầu.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_6_5.png",
        keypoints: ["Chém phạt ngang hiểm hóc"]
      },
{
        stepNo: "6.6",
        desc: "Quay đầu nhìn chính diện; chân trái bước lên; hai bàn tay dựng song song.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_6_6.png",
        keypoints: ["Dựng song thủ chính diện"]
      },
{
        stepNo: "6.7",
        desc: "Tay trái cuốn nắm đấm rút về sườn.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_6_7.png",
        keypoints: ["Cuốn nắm đấm rút về"]
      },
{
        stepNo: "6.8",
        desc: "Đồng thời tay phải chém ngang về trước rồi thu về nách; về Kiềm dương tấn khởi đầu (Động tác Thu tay _ Rút _ Chém).",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_6_8.png",
        keypoints: ["Động tác thu tay - rút - chém đặc trưng của Tiêu Chỉ"]
      }
    ]
  },
{
    id: "TC-07",
    code: "TC_07",
    name: "Chiêu 7: Chưởng Thẳng Lùi Chân & Chém Phạt Ngang Đối Xứng Trái",
    formId: "03-tieu-chi",
    formName: "Bài 3: Tiêu Chỉ",
    order: 7,
    instructor: "VS Hồ Chí Quang",
    summary: "Tương tự chiêu thứ 6 nhưng đối xứng bên trái.",
    stances: ["Tiến Lùi Bộ", "Kiềm Dương Tấn"],
    hands: ["Chưởng Thẳng", "Chém Phạt Ngang", "Thu Rút Chém"],
    targetZones: ["Trung Bàn", "Thượng Bàn"],
    difficulty: "Nâng cao",
    isSymmetricLeft: true,
    symmetricRef: "Chiêu 6: Chưởng Thẳng Lùi Chân, Chém Phạt Ngang, Dựng Thủ & Thu Rút Chém",
    symmetricNote: "Thế đối xứng bên trái của Chiêu 6.",
    steps: [
{
        stepNo: "7.3",
        desc: "[Thế đối xứng trái] Quay người, lùi chân phải, đánh chưởng thẳng tay trái, tay phải về thủ.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_6_3.png",
        isSymmetricLeft: true,
        keypoints: ["Lùi chân đánh chưởng trái"]
      },
{
        stepNo: "7.4",
        desc: "[Thế đối xứng trái] Tiến chân phải lên, tay phải đánh chưởng, tay trái về thủ.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_6_4.png",
        isSymmetricLeft: true,
        keypoints: ["Tiến chân đổi chưởng phải"]
      },
{
        stepNo: "7.5",
        desc: "[Thế đối xứng trái] Quay người sang phải, tay phải chém phạt ngang bàn tay xấp.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_6_5.png",
        isSymmetricLeft: true,
        keypoints: ["Chém phạt ngang tay phải"]
      },
{
        stepNo: "7.6",
        desc: "[Thế đối xứng trái] Hai bàn tay dựng song song, nhìn chính diện.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_6_6.png",
        isSymmetricLeft: true,
        keypoints: ["Dựng song thủ"]
      },
{
        stepNo: "7.8",
        desc: "[Thế đối xứng trái] Thu tay _ Rút _ Chém đối xứng bên trái, về Kiềm dương tấn.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_6_8.png",
        isSymmetricLeft: true,
        keypoints: ["Thu rút chém bên trái"]
      }
    ]
  },
{
    id: "TC-08",
    code: "TC_08",
    name: "Chiêu 8: Đỡ Bàng Thủ Trái, Chưởng Xiên Xuống & Chém Ngược Lên",
    formId: "03-tieu-chi",
    formName: "Bài 3: Tiêu Chỉ",
    order: 8,
    instructor: "VS Hồ Chí Quang",
    summary: "Khoa chân tròn, quay người tiến 1 bước đỡ Bàng thủ trái; lùi chân trái đánh chưởng phải xuống; tiến chân trái đánh chưởng xiên xuống; quay ngang chém ngược lên; dựng 2 bàn tay rồi Thu tay _ Rút _ Chém.",
    stances: ["Tiến Lùi", "Kiềm Dương Tấn"],
    hands: ["Bàng Thủ", "Chưởng Xiên", "Chém Ngược", "Thu Rút Chém"],
    targetZones: ["Hạ Bàn", "Thượng Bàn"],
    difficulty: "Nâng cao",
    isSymmetricLeft: false,
    steps: [
{
        stepNo: "8.1",
        desc: "Khoa chân tròn, quay người chân trái bước lên 1 bước, đỡ bàng thủ tay trái.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_8_1.png",
        keypoints: ["Bàng thủ trái nhập nội"]
      },
{
        stepNo: "8.2",
        desc: "Quay người, lùi chân trái, đánh chưởng tay phải xuống, tay trái đỡ.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_8_2.png",
        keypoints: ["Chưởng hạ đè đối thủ"]
      },
{
        stepNo: "8.3",
        desc: "Tiến chân trái lên, đánh chưởng tay trái xiên xuống dưới.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_8_3.png",
        keypoints: ["Chưởng xiên hạ bàn"]
      },
{
        stepNo: "8.4",
        desc: "Quay ngang tay trái chém ngược lên (cạnh bàn tay hướng lên trên).",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_8_4.png",
        keypoints: ["Chém ngược cằm và yết hầu"]
      },
{
        stepNo: "8.5",
        desc: "Quay về chính diện, thủ hai bàn tay dựng (như hình 6.6).",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_6_6.png",
        keypoints: ["Dựng song thủ"]
      },
{
        stepNo: "8.6",
        desc: "Thu tay _ Rút _ Chém (như hình 6.7, 6.8). Về tấn kiềm dương.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_6_8.png",
        keypoints: ["Thu tay rút chém kết thúc"]
      }
    ]
  },
{
    id: "TC-09",
    code: "TC_09",
    name: "Chiêu 9: Đỡ Bàng Thủ Phải & Chém Ngược Lên Đối Xứng Trái",
    formId: "03-tieu-chi",
    formName: "Bài 3: Tiêu Chỉ",
    order: 9,
    instructor: "VS Hồ Chí Quang",
    summary: "Tương tự chiêu thứ 8 nhưng đối xứng bên trái.",
    stances: ["Tiến Lùi", "Kiềm Dương Tấn"],
    hands: ["Bàng Thủ Phải", "Chém Ngược", "Thu Rút Chém"],
    targetZones: ["Hạ Bàn", "Thượng Bàn"],
    difficulty: "Nâng cao",
    isSymmetricLeft: true,
    symmetricRef: "Chiêu 8: Đỡ Bàng Thủ Trái, Chưởng Xiên Xuống & Chém Ngược Lên",
    symmetricNote: "Thế đối xứng bên trái của Chiêu 8.",
    steps: [
{
        stepNo: "9.1",
        desc: "[Thế đối xứng trái] Khoa chân tròn, quay người chân phải bước lên 1 bước, đỡ bàng thủ tay phải.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_8_1.png",
        isSymmetricLeft: true,
        keypoints: ["Bàng thủ phải nhập nội"]
      },
{
        stepNo: "9.2",
        desc: "[Thế đối xứng trái] Lùi chân phải, đánh chưởng tay trái xuống, tay phải đỡ.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_8_2.png",
        isSymmetricLeft: true,
        keypoints: ["Chưởng hạ tay trái"]
      },
{
        stepNo: "9.3",
        desc: "[Thế đối xứng trái] Tiến chân phải lên, đánh chưởng tay phải xiên xuống dưới.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_8_3.png",
        isSymmetricLeft: true,
        keypoints: ["Chưởng xiên tay phải"]
      },
{
        stepNo: "9.4",
        desc: "[Thế đối xứng trái] Quay ngang tay phải chém ngược lên.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_8_4.png",
        isSymmetricLeft: true,
        keypoints: ["Chém ngược tay phải"]
      },
{
        stepNo: "9.6",
        desc: "[Thế đối xứng trái] Thu tay _ Rút _ Chém về kiềm dương tấn.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_6_8.png",
        isSymmetricLeft: true,
        keypoints: ["Thu rút chém bên trái"]
      }
    ]
  },
{
    id: "TC-10",
    code: "TC_10",
    name: "Chiêu 10: Song Thủ Chém Ngược, Đánh Cổ Tay & Xoay Thân Về Chính Diện",
    formId: "03-tieu-chi",
    formName: "Bài 3: Tiêu Chỉ",
    order: 10,
    instructor: "VS Hồ Chí Quang",
    summary: "Chém ngược 2 bàn tay về bên phải, tiếp theo chém tương tự về bên trái và lại chém về bên phải (như hình 8.4); thủ 2 tay trước ngực hai bàn tay song song (như 6.6); quay người sang phải tay phải đánh cổ tay, tay trái theo, xoay thân về chính diện lặp lại 2 lần; Thu tay _ Rút _ Chém.",
    stances: ["Xoay Thân", "Kiềm Dương Tấn"],
    hands: ["Chém Ngược Song Thủ", "Đánh Cổ Tay", "Thu Rút Chém"],
    targetZones: ["Thượng Bàn", "Trung Bàn"],
    difficulty: "Nâng cao",
    isSymmetricLeft: false,
    steps: [
{
        stepNo: "10.1",
        desc: "Chém ngược 2 bàn tay về bên phải, tiếp theo chém tương tự về bên trái và lại chém về bên phải (như hình 8.4).",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_8_4.png",
        keypoints: ["Chém ngược liên hoàn 2 hướng"]
      },
{
        stepNo: "10.2",
        desc: "Thủ 2 tay trước ngực, hai bàn tay song song (như hình 6.6).",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_6_6.png",
        keypoints: ["Thủ dựng song song"]
      },
{
        stepNo: "10.3",
        desc: "Quay người sang phải, tay phải đánh cổ tay, tay trái theo, sau đó lại xoay thân về chính diện như hình 6.6. Lập lại thêm 2 lần động tác này.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_10_3.png",
        keypoints: ["Đánh cổ tay phát lực kình giáp"]
      },
{
        stepNo: "10.4",
        desc: "Thu tay _ Rút _ Chém (như 6.7, 6.8). Về tấn kiềm dương.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_6_8.png",
        keypoints: ["Thu tay rút chém"]
      }
    ]
  },
{
    id: "TC-11",
    code: "TC_11",
    name: "Chiêu 11: Song Thủ Chém Ngược & Đánh Cổ Tay Đối Xứng Trái",
    formId: "03-tieu-chi",
    formName: "Bài 3: Tiêu Chỉ",
    order: 11,
    instructor: "VS Hồ Chí Quang",
    summary: "Tương tự chiêu thứ 10 nhưng đối xứng bên trái.",
    stances: ["Xoay Thân", "Kiềm Dương Tấn"],
    hands: ["Chém Ngược", "Đánh Cổ Tay Trái", "Thu Rút Chém"],
    targetZones: ["Thượng Bàn", "Trung Bàn"],
    difficulty: "Nâng cao",
    isSymmetricLeft: true,
    symmetricRef: "Chiêu 10: Song Thủ Chém Ngược, Đánh Cổ Tay & Xoay Thân Về Chính Diện",
    symmetricNote: "Thế đối xứng bên trái của Chiêu 10.",
    steps: [
{
        stepNo: "11.1",
        desc: "[Thế đối xứng trái] Chém ngược 2 bàn tay về bên trái, đổi bên và chém lặp lại.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_8_4.png",
        isSymmetricLeft: true,
        keypoints: ["Chém ngược bên trái"]
      },
{
        stepNo: "11.3",
        desc: "[Thế đối xứng trái] Quay người sang trái, tay trái đánh cổ tay, tay phải theo, xoay thân về chính diện.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_10_3.png",
        isSymmetricLeft: true,
        keypoints: ["Đánh cổ tay trái"]
      },
{
        stepNo: "11.4",
        desc: "[Thế đối xứng trái] Thu tay _ Rút _ Chém về tấn kiềm dương.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_6_8.png",
        isSymmetricLeft: true,
        keypoints: ["Thu rút chém bên trái"]
      }
    ]
  },
{
    id: "TC-12",
    code: "TC_12",
    name: "Chiêu 12: Tiến Bộ Xà Xỉa, Hoành Thoái Đánh Song Chưởng & Rút Chém",
    formId: "03-tieu-chi",
    formName: "Bài 3: Tiêu Chỉ",
    order: 12,
    instructor: "VS Hồ Chí Quang",
    summary: "Tiến chân phải xà xỉa ra trước; tiến chân trái xà xỉa; hoành thoái chân phải đánh chưởng 2 tay; bước vòng chân phải đánh song chưởng rồi rút chém về Kiềm dương tấn.",
    stances: ["Hoành Thoái", "Kiềm Dương Tấn"],
    hands: ["Xà Xỉa", "Song Chưởng Hoành Thoái", "Thu Rút Chém"],
    targetZones: ["Trung Bàn", "Thượng Bàn"],
    difficulty: "Nâng cao",
    isSymmetricLeft: false,
    steps: [
{
        stepNo: "12.1",
        desc: "Tiến chân phải về phía trước một bước, đồng thời hai tay xà xỉa ra trước.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_12_1.png",
        keypoints: ["Xà xỉa xuyên thấu"]
      },
{
        stepNo: "12.2",
        desc: "Sau đó tiến chân trái, xỉa 2 tay sang bên trái; tiếp tục tiến chân phải, xỉa 2 tay xà bên phải 1 lần nữa.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_12_2.png",
        keypoints: ["Liên hoàn xà xỉa đa hướng"]
      },
{
        stepNo: "12.3",
        desc: "Hoành thoái chân phải đánh chưởng 2 tay (trái ra trước); quay người bước vòng chân phải theo ngược chiều kim đồng hồ (về bên trái), tay đánh 2 chưởng; tiếp tục hoành thoái chân phải và đánh 2 chưởng như trên.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_12_3.png",
        keypoints: ["Hoành thoái xoay thân thoát hiểm"]
      },
{
        stepNo: "12.4",
        desc: "Động tác Thu tay _ Rút _ Chém. Thu về kiềm dương.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_6_8.png",
        keypoints: ["Thu rút chém kiềm dương"]
      }
    ]
  },
{
    id: "TC-13",
    code: "TC_13",
    name: "Chiêu 13: Tiến Bộ Xà Xỉa & Hoành Thoái Đối Xứng Trái",
    formId: "03-tieu-chi",
    formName: "Bài 3: Tiêu Chỉ",
    order: 13,
    instructor: "VS Hồ Chí Quang",
    summary: "Tương tự chiêu thứ 12 nhưng đối xứng bên trái.",
    stances: ["Hoành Thoái", "Kiềm Dương Tấn"],
    hands: ["Xà Xỉa", "Song Chưởng"],
    targetZones: ["Trung Bàn", "Thượng Bàn"],
    difficulty: "Nâng cao",
    isSymmetricLeft: true,
    symmetricRef: "Chiêu 12: Tiến Bộ Xà Xỉa, Hoành Thoái Đánh Song Chưởng & Rút Chém",
    symmetricNote: "Thế đối xứng bên trái của Chiêu 12.",
    steps: [
{
        stepNo: "13.1",
        desc: "[Thế đối xứng trái] Tiến chân trái ra trước, xà xỉa song thủ.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_12_1.png",
        isSymmetricLeft: true,
        keypoints: ["Xà xỉa chân trái"]
      },
{
        stepNo: "13.2",
        desc: "[Thế đối xứng trái] Tiến chân phải xỉa bên phải, rồi tiến chân trái xỉa bên trái.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_12_2.png",
        isSymmetricLeft: true,
        keypoints: ["Liên hoàn xà xỉa bên trái"]
      },
{
        stepNo: "13.3",
        desc: "[Thế đối xứng trái] Hoành thoái chân trái đánh chưởng 2 tay (phải ra trước), bước vòng theo chiều kim đồng hồ đánh 2 chưởng.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_12_3.png",
        isSymmetricLeft: true,
        keypoints: ["Hoành thoái bên trái"]
      },
{
        stepNo: "13.4",
        desc: "[Thế đối xứng trái] Thu tay _ Rút _ Chém về kiềm dương tấn.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_6_8.png",
        isSymmetricLeft: true,
        keypoints: ["Thu rút chém"]
      }
    ]
  },
{
    id: "TC-14",
    code: "TC_14",
    name: "Chiêu 14: Đấm Thẳng 2 Tay, Lật Cổ Tay Chém, Lùi Cạnh Cườm & Song Long Trảo Trước Sau",
    formId: "03-tieu-chi",
    formName: "Bài 3: Tiêu Chỉ",
    order: 14,
    instructor: "VS Hồ Chí Quang",
    summary: "Đấm thẳng 2 tay; bước vòng chân phải lật cổ tay chém; lùi vòng chân phải đánh cườm tay; thực hiện hoành thoái cùng lúc tay phải vồ long trảo trước, tay trái long trảo sau. Đánh cườm tay hạ bàn rồi thu - rút - chém.",
    stances: ["Hoành Thoái", "Bước Vòng"],
    hands: ["Lật Cổ Tay Chém", "Cườm Tay", "Song Long Trảo", "Thu Rút Chém"],
    targetZones: ["Thượng Bàn", "Trung Bàn"],
    difficulty: "Thượng thừa",
    isSymmetricLeft: false,
    steps: [
{
        stepNo: "14.1",
        desc: "Đấm thẳng 2 tay về phía trước.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_14_1.png",
        keypoints: ["Đấm thẳng song thủ"]
      },
{
        stepNo: "14.2",
        desc: "Bước vòng chân phải tiến 1 bước, lật cổ tay chém từ phải sang trái, tay trái đi theo gạt đỡ.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_14_2.png",
        keypoints: ["Bước vòng lật cổ tay chém"]
      },
{
        stepNo: "14.3",
        desc: "Sau đó bước vòng tiến chân trái 1 bước, đánh tương tự với tay trái; lại bước lần nữa chân phải, tay phải chém.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_14_2.png",
        isSymmetricLeft: true,
        keypoints: ["Bước vòng tiến chém đối bên"]
      },
{
        stepNo: "14.4",
        desc: "Lùi vòng chân phải 1 bước, đánh cạnh cườm tay trái từ trái sang phải (bàn tay xấp), tay phải xấp đỡ bằng cạnh trong bàn tay.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_14_4.png",
        keypoints: ["Lùi vòng đánh cạnh cườm tay"]
      },
{
        stepNo: "14.5",
        desc: "Tương tự với lùi tiếp chân trái đánh tay phải, và một lần nữa với lùi tiếp chân phải đánh tay trái.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_14_5.png",
        keypoints: ["Liên hoàn lùi cạnh cườm tay"]
      },
{
        stepNo: "14.6",
        desc: "Thực hiện động tác hoành thoái, cùng lúc đó tay phải vồ long trảo về trước, tay trái long trảo về phía sau.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_14_6.png",
        keypoints: ["Song long trảo trước sau hóa giải đa hướng"]
      },
{
        stepNo: "14.7",
        desc: "Quay về chính diện, bước chân trái lên, thủ hai bàn tay dựng song song nhau, đánh cườm tay xuống. Thu - rút - chém. Về kiềm dương tấn.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_14_7.png",
        keypoints: ["Cườm tay hạ kình & thu rút chém"]
      }
    ]
  },
{
    id: "TC-15",
    code: "TC_15",
    name: "Chiêu 15: Song Long Trảo & Cạnh Cườm Đối Xứng Trái",
    formId: "03-tieu-chi",
    formName: "Bài 3: Tiêu Chỉ",
    order: 15,
    instructor: "VS Hồ Chí Quang",
    summary: "Tương tự chiêu thứ 14 nhưng đối xứng bên trái.",
    stances: ["Hoành Thoái", "Bước Vòng"],
    hands: ["Lật Cổ Tay Chém", "Song Long Trảo"],
    targetZones: ["Thượng Bàn", "Trung Bàn"],
    difficulty: "Thượng thừa",
    isSymmetricLeft: true,
    symmetricRef: "Chiêu 14: Lật Cổ Tay Chém, Lùi Vòng Cạnh Cườm & Song Long Trảo Trước Sau",
    symmetricNote: "Thế đối xứng bên trái của Chiêu 14.",
    steps: [
{
        stepNo: "15.1",
        desc: "[Thế đối xứng trái] Đấm thẳng 2 tay về phía trước.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_14_1.png",
        isSymmetricLeft: true,
        keypoints: ["Đấm thẳng 2 tay"]
      },
{
        stepNo: "15.2",
        desc: "[Thế đối xứng trái] Bước vòng chân trái, lật cổ tay chém từ trái sang phải.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_14_2.png",
        isSymmetricLeft: true,
        keypoints: ["Lật cổ tay chém bên trái"]
      },
{
        stepNo: "15.4",
        desc: "[Thế đối xứng trái] Lùi vòng chân trái, đánh cạnh cườm tay phải.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_14_4.png",
        isSymmetricLeft: true,
        keypoints: ["Lùi vòng đánh cườm tay phải"]
      },
{
        stepNo: "15.6",
        desc: "[Thế đối xứng trái] Hoành thoái tay trái long trảo trước, tay phải long trảo sau.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_14_6.png",
        isSymmetricLeft: true,
        keypoints: ["Song long trảo bên trái"]
      },
{
        stepNo: "15.7",
        desc: "[Thế đối xứng trái] Đánh cườm tay xuống, Thu - rút - chém về kiềm dương tấn.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_14_7.png",
        isSymmetricLeft: true,
        keypoints: ["Thu rút chém bên trái"]
      }
    ]
  },
{
    id: "TC-16",
    code: "TC_16",
    name: "Chiêu 16: Đại Luân Khí Công Duỗi Cánh Tay & Áp Tay Cúi Đất",
    formId: "03-tieu-chi",
    formName: "Bài 3: Tiêu Chỉ",
    order: 16,
    instructor: "VS Hồ Chí Quang",
    summary: "Chân mở rộng hơn một chút; duỗi thẳng 2 cánh tay quay tròn về trước mặt 3 lần; cúi gập người ấn 2 lòng bàn tay xuống; đứng thẳng quay 2 tay ra sau 3 vòng rồi cúi áp tay xuống đất.",
    stances: ["Khai Bộ Tấn", "Cúi Gập Thân"],
    hands: ["Đại Luân Xoay Tròn", "Án Chưởng Đất"],
    targetZones: ["Khí Công Toàn Thân"],
    difficulty: "Thượng thừa",
    isSymmetricLeft: false,
    steps: [
{
        stepNo: "16.1",
        desc: "Chân mở rộng hơn một chút. Duỗi thẳng 2 cánh tay, quay tròn về trước mặt 3 lần.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_16_1.png",
        keypoints: ["Vận khí đại luân hai cánh tay"]
      },
{
        stepNo: "16.2",
        desc: "Cúi gập người ấn 2 lòng bàn tay xuống sát mặt đất.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_16_2.png",
        keypoints: ["Cúi người kéo dãn cột sống và gân khoeo"]
      },
{
        stepNo: "16.3",
        desc: "Đứng thẳng lên, quay hai tay duỗi thẳng quay ngược lại phía sau 3 vòng. Sau đó lại quay hai tay về phía trước 3 vòng, cúi người áp tay xuống đất. Đứng thẳng, làm lại 1 lần nữa.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_16_3.png",
        keypoints: ["Thông kinh hoạt lạc toàn thân"]
      }
    ]
  },
{
    id: "TC-17",
    code: "TC_17",
    name: "Chiêu 17: Nhảy Bật Biên Thân & Cửu Quyền Tứ Hướng",
    formId: "03-tieu-chi",
    formName: "Bài 3: Tiêu Chỉ",
    order: 17,
    instructor: "VS Hồ Chí Quang",
    summary: "Nhảy bật 2 chân thành biên thân bên phải, đấm Nhật tự quyền cùng lúc cả 2 tay; quay người đấm bên trái; quay theo chiều kim đồng hồ đấm đủ 4 hướng tổng cộng 9 quyền.",
    stances: ["Nhảy Bật Biên Thân", "Tứ Hướng Xoay"],
    hands: ["Song Nhật Tự Quyền", "Cửu Quyền Liên Hoàn"],
    targetZones: ["Tứ Phía Thượng Trung"],
    difficulty: "Thượng thừa",
    isSymmetricLeft: false,
    steps: [
{
        stepNo: "17.1",
        desc: "Nhảy bật 2 chân thành biên thân bên phải, đấm Nhật tự quyền cùng lúc cả 2 tay (nắm đấm phải trước).",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_17_1.png",
        keypoints: ["Bật nhảy xoay trục tức thời"]
      },
{
        stepNo: "17.2",
        desc: "Sau đó quay người đấm bên trái 2 tay (tay trái trước).",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_17_2.png",
        keypoints: ["Đổi hướng song quyền"]
      },
{
        stepNo: "17.3",
        desc: "Tiếp tục đấm biên thân kèm quay người theo chiều kim đồng hồ cho đủ 4 hướng. Tổng cộng đánh ra 9 quyền.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_17_1.png",
        keypoints: ["Cửu quyền tứ hướng phá vòng vây"]
      }
    ]
  },
{
    id: "TC-18",
    code: "TC_18",
    name: "Chiêu 18: Quay Ngược Chiều Kim Đồng Hồ & Cửu Quyền Tứ Hướng",
    formId: "03-tieu-chi",
    formName: "Bài 3: Tiêu Chỉ",
    order: 18,
    instructor: "VS Hồ Chí Quang",
    summary: "Quay người ngược lại (ngược chiều kim đồng hồ) đánh 9 quyền tương tự chiêu 17.",
    stances: ["Nhảy Bật Biên Thân", "Tứ Hướng Xoay"],
    hands: ["Song Nhật Tự Quyền", "Cửu Quyền Liên Hoàn"],
    targetZones: ["Tứ Phía Thượng Trung"],
    difficulty: "Thượng thừa",
    isSymmetricLeft: true,
    symmetricRef: "Chiêu 17: Nhảy Bật Biên Thân & Cửu Quyền Tứ Hướng",
    symmetricNote: "Quay người ngược lại (ngược chiều kim đồng hồ) đánh 9 quyền tương tự.",
    steps: [
{
        stepNo: "18.1",
        desc: "[Quay ngược chiều] Nhảy bật biên thân bên trái, đấm Nhật tự quyền cùng lúc cả 2 tay (nắm đấm trái trước).",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_17_2.png",
        isSymmetricLeft: true,
        keypoints: ["Bật nhảy xoay trục ngược chiều"]
      },
{
        stepNo: "18.2",
        desc: "[Quay ngược chiều] Tiếp tục đấm biên thân kèm quay người ngược chiều kim đồng hồ đủ 4 hướng tổng cộng 9 quyền.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_17_1.png",
        isSymmetricLeft: true,
        keypoints: ["Cửu quyền tứ hướng ngược chiều kim đồng hồ"]
      }
    ]
  },
{
    id: "TC-19",
    code: "TC_19",
    name: "Chiêu 19: Tiến Song Quyền Chồng Nhau, Lướt Chân Đánh Thêm & Bái Tổ Hoàn Tất",
    formId: "03-tieu-chi",
    formName: "Bài 3: Tiêu Chỉ",
    order: 19,
    instructor: "VS Hồ Chí Quang",
    summary: "Về kiềm dương tấn, đấm lần lượt 2 tay (9 đấm); tiến chân phải đánh 2 nắm tay chồng lên nhau (phải trên); tiến chân trái đánh 2 tay chồng; lướt 2 chân đánh thêm 1 đòn; lùi nhanh về sau một quãng dài thu giật cùi chỏ. Về kiềm dương khởi đầu. BÁI TỔ - KẾT THÚC BÀI TIÊU CHỈ!",
    stances: ["Kiềm Dương Tấn", "Tiến Lướt Chân", "Lùi Nhanh"],
    hands: ["Song Quyền Chồng Nhau", "Giật Cùi Chỏ", "Bái Tổ"],
    targetZones: ["Trung Bàn", "Thượng Bàn"],
    difficulty: "Thượng thừa",
    isSymmetricLeft: false,
    steps: [
{
        stepNo: "19.1",
        desc: "Về kiềm dương tấn. Đấm ra trước, lần lượt hai tay, 9 đấm (tay phải trước, tay kia thủ và ngược lại).",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_2_1.png",
        keypoints: ["Cửu quyền kiềm dương"]
      },
{
        stepNo: "19.2",
        desc: "Tiến chân phải đánh ra trước với hai nắm tay chồng lên nhau, nắm tay phải ở trên.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_19_2.png",
        keypoints: ["Hai nắm đấm chồng nhau khóa trục"]
      },
{
        stepNo: "19.3",
        desc: "Tiến chân trái đấm tiếp 2 tay (tay trái trên). Sau đó, làm lại lần nữa với bên phải (như hình 19.2).",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_19_3.png",
        keypoints: ["Tiến liên tục dồn ép"]
      },
{
        stepNo: "19.4",
        desc: "Tay giữ nguyên vị trí 2 đấm, lướt 2 chân ra trước đánh thêm 1 đòn dứt điểm.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_19_4.png",
        keypoints: ["Lướt chân phát thốn kình"]
      },
{
        stepNo: "19.5",
        desc: "Lùi nhanh về sau một quãng dài, đồng thời thu giật cùi chỏ hai tay ra sau. Về tấn kiềm dương khởi đầu. BÁI TỔ - KẾT THÚC BÀI TIÊU CHỈ.",
        imgUrl: "/assets/images/forms/03_tieu_chi/tc_19_5.png",
        keypoints: ["Lùi thoát hiểm chớp nhoáng", "Bái Tổ hoàn tất đại pháp Tiêu Chỉ"]
      }
    ]
  }
];

// ============================================================================
// DỮ LIỆU BÀI 5: BÀI VÕ 108 THẾ ĐỐI LUYỆN (TẠI CHỖ)
// Thị phạm: HLV Nguyễn Việt Dũng (A - Bên Trái) & HLV Nguyễn Trường Thanh (B - Bên Phải)
// Nguồn: Sách GS.TS Nguyễn Mạnh Nhâm (2012) - Trang scan 65 đến 75
// ============================================================================

// ============================================================================
// DỮ LIỆU BÀI 5: BÀI VÕ 108 THẾ ĐỐI LUYỆN (TẠI CHỖ)
// Thị phạm: HLV Nguyễn Việt Dũng (A - Bên Trái) & HLV Nguyễn Trường Thanh (B - Bên Phải)
// Nguồn: Sách GS.TS Nguyễn Mạnh Nhâm (2012) - Trang scan 65 đến 74
// Bóc tách đối soát 100% hình ảnh nguyên bản, chuẩn nhãn dưới bàn chân
// ============================================================================
export const DOI_LUYEN_108_TECHNIQUES: Technique[] = [
  {
    "id": "DL-000",
    "code": "DL_BAI_TO",
    "name": "★ Nghi Thức Bái Tổ Đối Luyện Tại Chỗ (Chào Nhau & Thu Quyền)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 0,
    "instructor": "HLV Nguyễn Việt Dũng (A - Bên Trái) & HLV Nguyễn Trường Thanh (B - Bên Phải)",
    "summary": "Hai võ sư A và B đứng thẳng chào nhau cung kính, sau đó đồng thời thu hai nắm đấm về thủ sát nách, hạ trọng tâm đứng Kiềm Dương Tấn sẵn sàng nhập trận đối kháng.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đứng Thẳng Bái Tổ"
    ],
    "hands": [
      "Bái Tổ Cung Kính",
      "Thu Quyền Sát Nách"
    ],
    "targetZones": [
      "Trung Bàn"
    ],
    "difficulty": "Cơ bản",
    "isNarrowStance": true,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "A và B đứng đối diện nhau",
      "defender": "Đồng bộ bái tổ và thu quyền",
      "tactics": "Chuẩn bị tâm thế thiền định võ học, mắt quan sát linh giác đối phương"
    },
    "steps": [
      {
        "stepNo": "0.1",
        "desc": "A và B đứng thẳng người, hai tay chắp ngang ngực cúi chào nhau tôn sư trọng đạo.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_0_1.png",
        "keypoints": [
          "Mắt nhìn thẳng đối diện",
          "Lưng thẳng",
          "Tâm thế tĩnh lặng"
        ]
      },
      {
        "stepNo": "0.2",
        "desc": "A và B đồng thời thu hai nắm đấm về sát nách, mở chân đứng Nhị Tự Kiềm Dương Tấn chân hẹp chuẩn mực.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_0_2.png",
        "keypoints": [
          "Hai đầu gối khép che hạ bộ",
          "Cùi chỏ ép sát sườn",
          "Khí trầm đan điền"
        ]
      }
    ]
  },
  {
    "id": "DL-001",
    "code": "DL_01",
    "name": "Chiêu 1: Bái Tổ & Xỉa Song Thủ (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 1,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Hóa giải đòn tấn công trực diện và phóng song thủ xỉa yết hầu đối phương. Đối luyện: A đấm thẳng, B xỉa tay vào giữa hai tay A hất đòn sang hai bên.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Hóa giải đòn tấn công trực diện và phóng song thủ xỉa yết hầu đối phương. Đối luyện: A đấm thẳng, B xỉa tay vào giữa hai tay A hất đòn sang hai bên."
    },
    "steps": [
      {
        "stepNo": "1",
        "desc": "Hóa giải đòn tấn công trực diện và phóng song thủ xỉa yết hầu đối phương. Đối luyện: A đấm thẳng, B xỉa tay vào giữa hai tay A hất đòn sang hai bên.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_1.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-002",
    "code": "DL_02",
    "name": "Chiêu 2: Song Chưởng Hạ Trảm (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 2,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Đè gạt đòn tấn công tầm thấp vào bụng hoặc hạ bộ của đối thủ. Đối luyện: A thúc đòn thấp, B ấn hai cườm tay đè bẻ khớp cổ tay đối phương.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Đè gạt đòn tấn công tầm thấp vào bụng hoặc hạ bộ của đối thủ. Đối luyện: A thúc đòn thấp, B ấn hai cườm tay đè bẻ khớp cổ tay đối phương."
    },
    "steps": [
      {
        "stepNo": "2",
        "desc": "Đè gạt đòn tấn công tầm thấp vào bụng hoặc hạ bộ của đối thủ. Đối luyện: A thúc đòn thấp, B ấn hai cườm tay đè bẻ khớp cổ tay đối phương.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_2.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-003",
    "code": "DL_03",
    "name": "Chiêu 3: Biên Thân Gạt Ngang & Giật Cổ Tay Phóng Chưởng (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 3,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Né tránh đòn đấm thẳng chính diện, gạt tay đối thủ và phóng chưởng dập xương sườn. Đối luyện: A đấm mặt, B xoay biên thân né đòn và chưởng phản công.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Né tránh đòn đấm thẳng chính diện, gạt tay đối thủ và phóng chưởng dập xương sườn. Đối luyện: A đấm mặt, B xoay biên thân né đòn và chưởng phản công."
    },
    "steps": [
      {
        "stepNo": "3.1",
        "desc": "Né tránh đòn đấm thẳng chính diện, gạt tay đối thủ và phóng chưởng dập xương sườn. Đối luyện: A đấm mặt, B xoay biên thân né đòn và chưởng phản công.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_3_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      },
      {
        "stepNo": "3.2",
        "desc": "Thị phạm bước 2 Chiêu 3",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_3_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      },
      {
        "stepNo": "3.3",
        "desc": "Thị phạm bước 3 Chiêu 3",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_3_3.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-004",
    "code": "DL_04",
    "name": "Chiêu 4: Biên Thân Gạt Ngang & Phóng Chưởng Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 4,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 3, thực hiện với tay bên kia: Hóa giải đòn tấn công cánh phải của đối thủ và phản đòn chưởng trái.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-003",
    "symmetricNote": "Đối luyện tương tự chiêu 3 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 3, thực hiện với tay bên kia: Hóa giải đòn tấn công cánh phải của đối thủ và phản đòn chưởng trái."
    },
    "steps": [
      {
        "stepNo": "4.1",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 3, thực hiện với tay bên kia: Hóa giải đòn tấn công cánh phải của đối thủ và phản đòn chưởng trái.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_3_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      },
      {
        "stepNo": "4.2",
        "desc": "Thị phạm bước 2 Chiêu 4",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_3_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      },
      {
        "stepNo": "4.3",
        "desc": "Thị phạm bước 3 Chiêu 4",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_3_3.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-005",
    "code": "DL_05",
    "name": "Chiêu 5: Biên Thân Đỡ & Chưởng Ngang Phải (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 5,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Đỡ gạt cú đấm vòng và tạt chưởng ngang bẻ gãy xương sườn non. Đối luyện: A đấm móc, B dùng cẳng tay trái đỡ rồi phóng chưởng phải chấn thương sườn A.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Đỡ gạt cú đấm vòng và tạt chưởng ngang bẻ gãy xương sườn non. Đối luyện: A đấm móc, B dùng cẳng tay trái đỡ rồi phóng chưởng phải chấn thương sườn A."
    },
    "steps": [
      {
        "stepNo": "5",
        "desc": "Đỡ gạt cú đấm vòng và tạt chưởng ngang bẻ gãy xương sườn non. Đối luyện: A đấm móc, B dùng cẳng tay trái đỡ rồi phóng chưởng phải chấn thương sườn A.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_5.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-006",
    "code": "DL_06",
    "name": "Chiêu 6: Biên Thân Đỡ & Chưởng Ngang Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 6,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 5, thực hiện với tay bên kia: Hóa giải đòn đánh bên sườn phải và chưởng trả bằng tay phải.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-005",
    "symmetricNote": "Đối luyện tương tự chiêu 5 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 5, thực hiện với tay bên kia: Hóa giải đòn đánh bên sườn phải và chưởng trả bằng tay phải."
    },
    "steps": [
      {
        "stepNo": "6",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 5, thực hiện với tay bên kia: Hóa giải đòn đánh bên sườn phải và chưởng trả bằng tay phải.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_5.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-007",
    "code": "DL_07",
    "name": "Chiêu 7: Than Thủ & Bàng Thủ Xoay Trục (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 7,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Kỹ thuật kinh điển kết hợp hai thủ pháp trụ cột Bàng - Than để vô hiệu hóa liên hoàn quyền của địch.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Kỹ thuật kinh điển kết hợp hai thủ pháp trụ cột Bàng - Than để vô hiệu hóa liên hoàn quyền của địch."
    },
    "steps": [
      {
        "stepNo": "7.1",
        "desc": "Kỹ thuật kinh điển kết hợp hai thủ pháp trụ cột Bàng - Than để vô hiệu hóa liên hoàn quyền của địch.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_7_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      },
      {
        "stepNo": "7.2",
        "desc": "Thị phạm bước 2 Chiêu 7",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_7_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-008",
    "code": "DL_08",
    "name": "Chiêu 8: Than Thủ & Bàng Thủ Đối Xứng Bên Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 8,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 7, thực hiện với tay bên kia: Hóa giải đòn đấm ngang sườn, bẻ khớp và chém nghịch cổ họng đối phương.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-007",
    "symmetricNote": "Đối luyện tương tự chiêu 7 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 7, thực hiện với tay bên kia: Hóa giải đòn đấm ngang sườn, bẻ khớp và chém nghịch cổ họng đối phương."
    },
    "steps": [
      {
        "stepNo": "8.1",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 7, thực hiện với tay bên kia: Hóa giải đòn đấm ngang sườn, bẻ khớp và chém nghịch cổ họng đối phương.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_7_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      },
      {
        "stepNo": "8.2",
        "desc": "Thị phạm bước 2 Chiêu 8",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_7_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-009",
    "code": "DL_09",
    "name": "Chiêu 9: Song Quyền Thượng Trảm Hạ Giác (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 9,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Phá vỡ thế thủ ôm khóa đầu của đối phương và đánh giáng bẻ gãy đòn ôm.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Phá vỡ thế thủ ôm khóa đầu của đối phương và đánh giáng bẻ gãy đòn ôm."
    },
    "steps": [
      {
        "stepNo": "9",
        "desc": "Phá vỡ thế thủ ôm khóa đầu của đối phương và đánh giáng bẻ gãy đòn ôm.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_9.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-010",
    "code": "DL_10",
    "name": "Chiêu 10: Song Quyền Thượng Trảm Đối Xứng Trái & Than Thủ Song Thôi Chưởng (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 10,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 9, thực hiện với tay bên kia: Hóa giải đòn chém từ trên xuống, xoay góc né lực và phóng song chưởng đánh bay đối thủ.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-009",
    "symmetricNote": "Đối luyện tương tự chiêu 9 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 9, thực hiện với tay bên kia: Hóa giải đòn chém từ trên xuống, xoay góc né lực và phóng song chưởng đánh bay đối thủ."
    },
    "steps": [
      {
        "stepNo": "10",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 9, thực hiện với tay bên kia: Hóa giải đòn chém từ trên xuống, xoay góc né lực và phóng song chưởng đánh bay đối thủ.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_9.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-011",
    "code": "DL_11",
    "name": "Chiêu 11: Song Xà Xỉa Thủ Biên Thân (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 11,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Luồn tay qua khe hở của đối phương để thọc thẳng vào mắt và yết hầu.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Luồn tay qua khe hở của đối phương để thọc thẳng vào mắt và yết hầu."
    },
    "steps": [
      {
        "stepNo": "11",
        "desc": "Luồn tay qua khe hở của đối phương để thọc thẳng vào mắt và yết hầu.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_11.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-012",
    "code": "DL_12",
    "name": "Chiêu 12: Song Xà Xỉa Thủ Đối Xứng Bên Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 12,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 11, thực hiện với tay bên kia: Tấn công áp đảo liên hoàn tầm cao khiến đối phương không kịp chống đỡ.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-011",
    "symmetricNote": "Đối luyện tương tự chiêu 11 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 11, thực hiện với tay bên kia: Tấn công áp đảo liên hoàn tầm cao khiến đối phương không kịp chống đỡ."
    },
    "steps": [
      {
        "stepNo": "12",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 11, thực hiện với tay bên kia: Tấn công áp đảo liên hoàn tầm cao khiến đối phương không kịp chống đỡ.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_11.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-013",
    "code": "DL_13",
    "name": "Chiêu 13: Song Chưởng Hất Thượng (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 13,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Hất tung tay đối thủ khi bị đè ép cận chiến và mở toang vùng bụng địch.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Hất tung tay đối thủ khi bị đè ép cận chiến và mở toang vùng bụng địch."
    },
    "steps": [
      {
        "stepNo": "13",
        "desc": "Hất tung tay đối thủ khi bị đè ép cận chiến và mở toang vùng bụng địch.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_13.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-014",
    "code": "DL_14",
    "name": "Chiêu 14: Song Chưởng Hất Thượng Đối Xứng & Đấm Thẳng Lật Chém (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 14,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 13, thực hiện với tay bên kia: Tổ hợp công thủ toàn diện: đấm - chém - gạt - hoành thoái bẻ khớp cổ tay.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-013",
    "symmetricNote": "Đối luyện tương tự chiêu 13 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 13, thực hiện với tay bên kia: Tổ hợp công thủ toàn diện: đấm - chém - gạt - hoành thoái bẻ khớp cổ tay."
    },
    "steps": [
      {
        "stepNo": "14",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 13, thực hiện với tay bên kia: Tổ hợp công thủ toàn diện: đấm - chém - gạt - hoành thoái bẻ khớp cổ tay.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_13.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-015",
    "code": "DL_15",
    "name": "Chiêu 15: Song Cẳng Tay Nghịch Hướng (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 15,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Bắt kẹp cánh tay đối thủ và vặn xoắn bẻ gãy khớp khuỷu tay cận chiến.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Bắt kẹp cánh tay đối thủ và vặn xoắn bẻ gãy khớp khuỷu tay cận chiến."
    },
    "steps": [
      {
        "stepNo": "15",
        "desc": "Bắt kẹp cánh tay đối thủ và vặn xoắn bẻ gãy khớp khuỷu tay cận chiến.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_15.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-016",
    "code": "DL_16",
    "name": "Chiêu 16: Song Cẳng Tay Nghịch Hướng Đối Xứng Bên Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 16,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 15, thực hiện với tay bên kia: Bẻ khóa khớp khuỷu tay đối phương bên hướng ngược lại.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-015",
    "symmetricNote": "Đối luyện tương tự chiêu 15 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 15, thực hiện với tay bên kia: Bẻ khóa khớp khuỷu tay đối phương bên hướng ngược lại."
    },
    "steps": [
      {
        "stepNo": "16",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 15, thực hiện với tay bên kia: Bẻ khóa khớp khuỷu tay đối phương bên hướng ngược lại.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_15.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-017",
    "code": "DL_17",
    "name": "Chiêu 17: Thu Bụng Phóng Song Chưởng & Nhảy Bật Biên Thân 9 Quyền (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 17,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Thoát thế ôm sau lưng và quay đả liên hoàn 4 hướng chống đám đông.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Thoát thế ôm sau lưng và quay đả liên hoàn 4 hướng chống đám đông."
    },
    "steps": [
      {
        "stepNo": "17",
        "desc": "Thoát thế ôm sau lưng và quay đả liên hoàn 4 hướng chống đám đông.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_17.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-018",
    "code": "DL_18",
    "name": "Chiêu 18: Nhảy Bật Biên Thân Đánh Ngược Lại 9 Quyền (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 18,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 17, thực hiện với tay bên kia: Tác chiến đa hướng, xoay chuyển linh hoạt vô hiệu hóa sự bao vây.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-017",
    "symmetricNote": "Đối luyện tương tự chiêu 17 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 17, thực hiện với tay bên kia: Tác chiến đa hướng, xoay chuyển linh hoạt vô hiệu hóa sự bao vây."
    },
    "steps": [
      {
        "stepNo": "18",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 17, thực hiện với tay bên kia: Tác chiến đa hướng, xoay chuyển linh hoạt vô hiệu hóa sự bao vây.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_17.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-019",
    "code": "DL_19",
    "name": "Chiêu 19: Liên Hoàn 9 Quyền, Kiềm Dương Lướt Chân & Bái Tổ (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 19,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Bộ quyền kết thúc đợt 1: áp đảo tầm trung và rút về thủ hạ bàn an toàn tuyệt đối.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Bộ quyền kết thúc đợt 1: áp đảo tầm trung và rút về thủ hạ bàn an toàn tuyệt đối."
    },
    "steps": [
      {
        "stepNo": "19",
        "desc": "Bộ quyền kết thúc đợt 1: áp đảo tầm trung và rút về thủ hạ bàn an toàn tuyệt đối.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_19.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-020",
    "code": "DL_20",
    "name": "Chiêu 20: Hồi Tấn Khởi Thế Giai Đoạn 2 (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 20,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 19, thực hiện với tay bên kia: Dưỡng khí, ổn định tâm thức giữa các đợt giao tranh quyết liệt.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-019",
    "symmetricNote": "Đối luyện tương tự chiêu 19 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 19, thực hiện với tay bên kia: Dưỡng khí, ổn định tâm thức giữa các đợt giao tranh quyết liệt."
    },
    "steps": [
      {
        "stepNo": "20",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 19, thực hiện với tay bên kia: Dưỡng khí, ổn định tâm thức giữa các đợt giao tranh quyết liệt.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_19.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-021",
    "code": "DL_21",
    "name": "Chiêu 21: Khoa Chân Bàng Thủ & Chưởng Hạ Phải (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 21,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Gạt đòn đấm thẳng và chưởng gãy xương sườn non.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Gạt đòn đấm thẳng và chưởng gãy xương sườn non."
    },
    "steps": [
      {
        "stepNo": "21",
        "desc": "Gạt đòn đấm thẳng và chưởng gãy xương sườn non.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_21.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-022",
    "code": "DL_22",
    "name": "Chiêu 22: Khoa Chân Bàng Thủ & Chưởng Hạ Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 22,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 21, thực hiện với tay bên kia: Hóa giải đòn sườn bên phải và phản kích.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-021",
    "symmetricNote": "Đối luyện tương tự chiêu 21 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 21, thực hiện với tay bên kia: Hóa giải đòn sườn bên phải và phản kích."
    },
    "steps": [
      {
        "stepNo": "22",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 21, thực hiện với tay bên kia: Hóa giải đòn sườn bên phải và phản kích.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_21.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-023",
    "code": "DL_23",
    "name": "Chiêu 23: Khấu Thủ Cuốn Cổ Tay & Phóng Tiêu Thủ (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 23,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Bẻ gãy khớp cổ tay khi đối phương nắm bắt và đâm tiêu thủ vào điểm yếu.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Bẻ gãy khớp cổ tay khi đối phương nắm bắt và đâm tiêu thủ vào điểm yếu."
    },
    "steps": [
      {
        "stepNo": "23",
        "desc": "Bẻ gãy khớp cổ tay khi đối phương nắm bắt và đâm tiêu thủ vào điểm yếu.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_23.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-024",
    "code": "DL_24",
    "name": "Chiêu 24: Khấu Thủ Cuốn Cổ Tay Đối Xứng Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 24,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 23, thực hiện với tay bên kia: Bẻ khớp và tiêu thủ bên trái.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-023",
    "symmetricNote": "Đối luyện tương tự chiêu 23 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 23, thực hiện với tay bên kia: Bẻ khớp và tiêu thủ bên trái."
    },
    "steps": [
      {
        "stepNo": "24",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 23, thực hiện với tay bên kia: Bẻ khớp và tiêu thủ bên trái.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_23.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-025",
    "code": "DL_25",
    "name": "Chiêu 25: Báo Chuỳ Đập Thái Dương & Trửu Pháp (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 25,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Triệt hạ đối thủ cận chiến bằng đòn đánh hiểm hóc vào huyệt đạo đầu và ngực.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Triệt hạ đối thủ cận chiến bằng đòn đánh hiểm hóc vào huyệt đạo đầu và ngực."
    },
    "steps": [
      {
        "stepNo": "25",
        "desc": "Triệt hạ đối thủ cận chiến bằng đòn đánh hiểm hóc vào huyệt đạo đầu và ngực.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_25.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-026",
    "code": "DL_26",
    "name": "Chiêu 26: Báo Chuỳ & Trửu Pháp Đối Xứng Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 26,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 25, thực hiện với tay bên kia: Đánh gục địch thủ từ mạn sườn trái.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-025",
    "symmetricNote": "Đối luyện tương tự chiêu 25 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 25, thực hiện với tay bên kia: Đánh gục địch thủ từ mạn sườn trái."
    },
    "steps": [
      {
        "stepNo": "26",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 25, thực hiện với tay bên kia: Đánh gục địch thủ từ mạn sườn trái.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_25.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-027",
    "code": "DL_27",
    "name": "Chiêu 27: Hạc Dực Quét Cánh & Hạc Chuỳ Điểm Huyệt (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 27,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Dụ địch lao vào rồi quét cánh gạt đòn và điểm huyệt gây tê liệt tay địch.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Dụ địch lao vào rồi quét cánh gạt đòn và điểm huyệt gây tê liệt tay địch."
    },
    "steps": [
      {
        "stepNo": "27",
        "desc": "Dụ địch lao vào rồi quét cánh gạt đòn và điểm huyệt gây tê liệt tay địch.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_27.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-028",
    "code": "DL_28",
    "name": "Chiêu 28: Hạc Dực & Hạc Chuỳ Đối Xứng Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 28,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 27, thực hiện với tay bên kia: Hóa giải và điểm huyệt bên trái.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-027",
    "symmetricNote": "Đối luyện tương tự chiêu 27 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 27, thực hiện với tay bên kia: Hóa giải và điểm huyệt bên trái."
    },
    "steps": [
      {
        "stepNo": "28",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 27, thực hiện với tay bên kia: Hóa giải và điểm huyệt bên trái.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_27.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-029",
    "code": "DL_29",
    "name": "Chiêu 29: Phục Thủ Đè Đòn & Nhật Tự Quyền Xuyên Tâm (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 29,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Đòn cơ bản nhưng có sức sát thương cực cao trong giao đấu thực tế.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Đòn cơ bản nhưng có sức sát thương cực cao trong giao đấu thực tế."
    },
    "steps": [
      {
        "stepNo": "29",
        "desc": "Đòn cơ bản nhưng có sức sát thương cực cao trong giao đấu thực tế.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_29.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-030",
    "code": "DL_30",
    "name": "Chiêu 30: Phục Thủ & Nhật Tự Quyền Đối Xứng Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 30,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 29, thực hiện với tay bên kia: Đè đòn và đấm thẳng bên trái.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-029",
    "symmetricNote": "Đối luyện tương tự chiêu 29 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 29, thực hiện với tay bên kia: Đè đòn và đấm thẳng bên trái."
    },
    "steps": [
      {
        "stepNo": "30",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 29, thực hiện với tay bên kia: Đè đòn và đấm thẳng bên trái.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_29.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-031",
    "code": "DL_31",
    "name": "Chiêu 31: Thao Thủ Cuốn Cẳng Tay & Bẻ Cổ Tay (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 31,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Hóa giải đòn đấm thẳng và khống chế bắt sống đối phương.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Hóa giải đòn đấm thẳng và khống chế bắt sống đối phương."
    },
    "steps": [
      {
        "stepNo": "31.1",
        "desc": "Hóa giải đòn đấm thẳng và khống chế bắt sống đối phương.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_31_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      },
      {
        "stepNo": "31.2",
        "desc": "Thị phạm bước 2 Chiêu 31",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_31_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      },
      {
        "stepNo": "31.3",
        "desc": "Thị phạm bước 3 Chiêu 31",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_31_3.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-032",
    "code": "DL_32",
    "name": "Chiêu 32: Thao Thủ Cuốn Bẻ Khớp Đối Xứng Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 32,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Khống chế đối thủ bên trái.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Khống chế đối thủ bên trái."
    },
    "steps": [
      {
        "stepNo": "32.1",
        "desc": "Khống chế đối thủ bên trái.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_32_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      },
      {
        "stepNo": "32.2",
        "desc": "Thị phạm bước 2 Chiêu 32",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_32_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-033",
    "code": "DL_33",
    "name": "Chiêu 33: Đát Thủ Gạt Tạt & Chưởng Vạt Cổ (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 33,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 32, thực hiện với tay bên kia: Phản công tốc độ chớp giật vào vùng đầu cổ đối phương.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-032",
    "symmetricNote": "Đối luyện tương tự chiêu 32 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 32, thực hiện với tay bên kia: Phản công tốc độ chớp giật vào vùng đầu cổ đối phương."
    },
    "steps": [
      {
        "stepNo": "33.1",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 32, thực hiện với tay bên kia: Phản công tốc độ chớp giật vào vùng đầu cổ đối phương.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_32_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      },
      {
        "stepNo": "33.2",
        "desc": "Thị phạm bước 2 Chiêu 33",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_32_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-034",
    "code": "DL_34",
    "name": "Chiêu 34: Đát Thủ & Chưởng Vạt Cổ Đối Xứng Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 34,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Quất đát thủ và trảm cổ bên trái.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Quất đát thủ và trảm cổ bên trái."
    },
    "steps": [
      {
        "stepNo": "34.1",
        "desc": "Quất đát thủ và trảm cổ bên trái.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_34_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      },
      {
        "stepNo": "34.2",
        "desc": "Thị phạm bước 2 Chiêu 34",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_34_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-035",
    "code": "DL_35",
    "name": "Chiêu 35: Song Thao Thủ & Chưởng Chấn Thủy (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 35,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 34, thực hiện với tay bên kia: Khóa chặt đòn tấn công song thủ của đối phương và phản đòn chấn thương tim phổi.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-034",
    "symmetricNote": "Đối luyện tương tự chiêu 34 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 34, thực hiện với tay bên kia: Khóa chặt đòn tấn công song thủ của đối phương và phản đòn chấn thương tim phổi."
    },
    "steps": [
      {
        "stepNo": "35.1",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 34, thực hiện với tay bên kia: Khóa chặt đòn tấn công song thủ của đối phương và phản đòn chấn thương tim phổi.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_34_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      },
      {
        "stepNo": "35.2",
        "desc": "Thị phạm bước 2 Chiêu 35",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_34_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-036",
    "code": "DL_36",
    "name": "Chiêu 36: Song Thao Thủ Đối Xứng Bên Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 36,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Hóa giải và phóng song chưởng.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Hóa giải và phóng song chưởng."
    },
    "steps": [
      {
        "stepNo": "36",
        "desc": "Hóa giải và phóng song chưởng.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_36.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-037",
    "code": "DL_37",
    "name": "Chiêu 37: Lan Thủ Đỡ Cản & Xỉa Độc Thủ (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 37,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 36, thực hiện với tay bên kia: Chặn đứng đòn tấn công bạo lực và kết liễu nhanh gọn.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-036",
    "symmetricNote": "Đối luyện tương tự chiêu 36 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 36, thực hiện với tay bên kia: Chặn đứng đòn tấn công bạo lực và kết liễu nhanh gọn."
    },
    "steps": [
      {
        "stepNo": "37",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 36, thực hiện với tay bên kia: Chặn đứng đòn tấn công bạo lực và kết liễu nhanh gọn.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_36.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-038",
    "code": "DL_38",
    "name": "Chiêu 38: Lan Thủ & Xỉa Độc Thủ Đối Xứng Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 38,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Chặn và xỉa độc thủ bên trái.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Chặn và xỉa độc thủ bên trái."
    },
    "steps": [
      {
        "stepNo": "38.1",
        "desc": "Chặn và xỉa độc thủ bên trái.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_38_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      },
      {
        "stepNo": "38.2",
        "desc": "Thị phạm bước 2 Chiêu 38",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_38_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-039",
    "code": "DL_39",
    "name": "Chiêu 39: Cầm Nã Khóa Cánh Tay & Lên Gối Sườn (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 39,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 38, thực hiện với tay bên kia: Tổ hợp cầm nã và cước pháp triệt hạ đối phương cận chiến.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-038",
    "symmetricNote": "Đối luyện tương tự chiêu 38 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 38, thực hiện với tay bên kia: Tổ hợp cầm nã và cước pháp triệt hạ đối phương cận chiến."
    },
    "steps": [
      {
        "stepNo": "39.1",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 38, thực hiện với tay bên kia: Tổ hợp cầm nã và cước pháp triệt hạ đối phương cận chiến.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_38_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      },
      {
        "stepNo": "39.2",
        "desc": "Thị phạm bước 2 Chiêu 39",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_38_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-040",
    "code": "DL_40",
    "name": "Chiêu 40: Cầm Nã & Lên Gối Đối Xứng Bên Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 40,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Kéo giật và lên gối bên trái.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Kéo giật và lên gối bên trái."
    },
    "steps": [
      {
        "stepNo": "40.1",
        "desc": "Kéo giật và lên gối bên trái.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_40_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      },
      {
        "stepNo": "40.2",
        "desc": "Thị phạm bước 2 Chiêu 40",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_40_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-041",
    "code": "DL_41",
    "name": "Chiêu 41: Triệt Cước Quét Chân Hạ Bàn & Đấm Thẳng (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 41,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 40, thực hiện với tay bên kia: Khiến đối phương ngã ngửa vì trên bị đấm dưới bị triệt chân.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-040",
    "symmetricNote": "Đối luyện tương tự chiêu 40 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 40, thực hiện với tay bên kia: Khiến đối phương ngã ngửa vì trên bị đấm dưới bị triệt chân."
    },
    "steps": [
      {
        "stepNo": "41.1",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 40, thực hiện với tay bên kia: Khiến đối phương ngã ngửa vì trên bị đấm dưới bị triệt chân.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_40_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      },
      {
        "stepNo": "41.2",
        "desc": "Thị phạm bước 2 Chiêu 41",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_40_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-042",
    "code": "DL_42",
    "name": "Chiêu 42: Triệt Cước & Đấm Thẳng Đối Xứng Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 42,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Phá trụ và đấm mặt bên trái.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Phá trụ và đấm mặt bên trái."
    },
    "steps": [
      {
        "stepNo": "42.1",
        "desc": "Phá trụ và đấm mặt bên trái.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_42_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      },
      {
        "stepNo": "42.2",
        "desc": "Thị phạm bước 2 Chiêu 42",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_42_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      },
      {
        "stepNo": "42.3",
        "desc": "Thị phạm bước 3 Chiêu 42",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_42_3.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      },
      {
        "stepNo": "42.4",
        "desc": "Thị phạm bước 4 Chiêu 42",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_42_4.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-043",
    "code": "DL_43",
    "name": "Chiêu 43: Kéo Dính & Thiết Đầu Công Húc Trán (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 43,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 42, thực hiện với tay bên kia: Đòn hiểm cận chiến khi bị ôm sát người.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-042",
    "symmetricNote": "Đối luyện tương tự chiêu 42 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 42, thực hiện với tay bên kia: Đòn hiểm cận chiến khi bị ôm sát người."
    },
    "steps": [
      {
        "stepNo": "43.1",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 42, thực hiện với tay bên kia: Đòn hiểm cận chiến khi bị ôm sát người.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_42_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      },
      {
        "stepNo": "43.2",
        "desc": "Thị phạm bước 2 Chiêu 43",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_42_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      },
      {
        "stepNo": "43.3",
        "desc": "Thị phạm bước 3 Chiêu 43",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_42_3.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      },
      {
        "stepNo": "43.4",
        "desc": "Thị phạm bước 4 Chiêu 43",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_42_4.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-044",
    "code": "DL_44",
    "name": "Chiêu 44: Thung Kình Vẩy Cổ Tay Rung Giật (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 44,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Bật tung các đòn đè kẹp cận chiến của đối thủ.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Bật tung các đòn đè kẹp cận chiến của đối thủ."
    },
    "steps": [
      {
        "stepNo": "44",
        "desc": "Bật tung các đòn đè kẹp cận chiến của đối thủ.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_44.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-045",
    "code": "DL_45",
    "name": "Chiêu 45: Long Thủ Hộ Hạ Môn & Móc Giật Long Trảo (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 45,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 44, thực hiện với tay bên kia: Bảo vệ hạ bộ và bẻ gãy tay đối phương khi bị đánh lén tầm thấp.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-044",
    "symmetricNote": "Đối luyện tương tự chiêu 44 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 44, thực hiện với tay bên kia: Bảo vệ hạ bộ và bẻ gãy tay đối phương khi bị đánh lén tầm thấp."
    },
    "steps": [
      {
        "stepNo": "45",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 44, thực hiện với tay bên kia: Bảo vệ hạ bộ và bẻ gãy tay đối phương khi bị đánh lén tầm thấp.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_44.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-046",
    "code": "DL_46",
    "name": "Chiêu 46: Bắt Chéo Song Thủ & Chém Cạnh Bàn Tay (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 46,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Tóm áo khống chế và chém gục đối thủ.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Tóm áo khống chế và chém gục đối thủ."
    },
    "steps": [
      {
        "stepNo": "46",
        "desc": "Tóm áo khống chế và chém gục đối thủ.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_46.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-047",
    "code": "DL_47",
    "name": "Chiêu 47: Liên Hoàn Thúc Gối Phải Tầm Cao (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 47,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 46, thực hiện với tay bên kia: Đòn gối uy lực bẻ gãy lồng ngực đối phương.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-046",
    "symmetricNote": "Đối luyện tương tự chiêu 46 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 46, thực hiện với tay bên kia: Đòn gối uy lực bẻ gãy lồng ngực đối phương."
    },
    "steps": [
      {
        "stepNo": "47",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 46, thực hiện với tay bên kia: Đòn gối uy lực bẻ gãy lồng ngực đối phương.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_46.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-048",
    "code": "DL_48",
    "name": "Chiêu 48: Liên Hoàn Thúc Gối Vòng Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 48,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Liên hoàn gối bồi đòn không cho đối thủ cơ hội phản kháng.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Liên hoàn gối bồi đòn không cho đối thủ cơ hội phản kháng."
    },
    "steps": [
      {
        "stepNo": "48",
        "desc": "Liên hoàn gối bồi đòn không cho đối thủ cơ hội phản kháng.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_48.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-049",
    "code": "DL_49",
    "name": "Chiêu 49: Giật Chéo Đánh Miết Gối Hạ Trọng Tâm (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 49,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 48, thực hiện với tay bên kia: Bẻ gãy khớp gối và hạ gục đối thủ tại chỗ.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-048",
    "symmetricNote": "Đối luyện tương tự chiêu 48 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 48, thực hiện với tay bên kia: Bẻ gãy khớp gối và hạ gục đối thủ tại chỗ."
    },
    "steps": [
      {
        "stepNo": "49",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 48, thực hiện với tay bên kia: Bẻ gãy khớp gối và hạ gục đối thủ tại chỗ.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_48.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-050",
    "code": "DL_50",
    "name": "Chiêu 50: Đẩy Song Cẳng Tay & Song Quyền Thẳng Bụng (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 50,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Đòn kết hợp công thủ toàn diện đánh gục vùng bụng đối thủ.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Trung cấp",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Đòn kết hợp công thủ toàn diện đánh gục vùng bụng đối thủ."
    },
    "steps": [
      {
        "stepNo": "50.1",
        "desc": "Đòn kết hợp công thủ toàn diện đánh gục vùng bụng đối thủ.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_50_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      },
      {
        "stepNo": "50.2",
        "desc": "Thị phạm bước 2 Chiêu 50",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_50_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      },
      {
        "stepNo": "50.3",
        "desc": "Thị phạm bước 3 Chiêu 50",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_50_3.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-051",
    "code": "DL_51",
    "name": "Chiêu 51: Xà Thủ Thốc Thượng & Bàn Tay Dựng Đỡ (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 51,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Đỡ đòn đấm mặt và xỉa móc cằm đối phương cùng lúc.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Đỡ đòn đấm mặt và xỉa móc cằm đối phương cùng lúc."
    },
    "steps": [
      {
        "stepNo": "51",
        "desc": "Đỡ đòn đấm mặt và xỉa móc cằm đối phương cùng lúc.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_51.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-052",
    "code": "DL_52",
    "name": "Chiêu 52: Xà Thủ Thốc Thượng Đối Xứng Bên Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 52,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 51, thực hiện với tay bên kia: Hóa giải và xỉa móc cằm bên trái.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-051",
    "symmetricNote": "Đối luyện tương tự chiêu 51 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 51, thực hiện với tay bên kia: Hóa giải và xỉa móc cằm bên trái."
    },
    "steps": [
      {
        "stepNo": "52",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 51, thực hiện với tay bên kia: Hóa giải và xỉa móc cằm bên trái.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_51.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-053",
    "code": "DL_53",
    "name": "Chiêu 53: Báo Thủ Vòng Đập Huyệt Thái Dương (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 53,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Đánh gục đối thủ tức khắc bằng đòn đập thái dương hiểm hóc.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Đánh gục đối thủ tức khắc bằng đòn đập thái dương hiểm hóc."
    },
    "steps": [
      {
        "stepNo": "53",
        "desc": "Đánh gục đối thủ tức khắc bằng đòn đập thái dương hiểm hóc.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_53.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-054",
    "code": "DL_54",
    "name": "Chiêu 54: Báo Thủ Vòng Thái Dương Đối Xứng Bên Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 54,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 53, thực hiện với tay bên kia: Kết thúc phân đoạn 54 cặp thế tại chỗ hoàn hảo.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-053",
    "symmetricNote": "Đối luyện tương tự chiêu 53 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 53, thực hiện với tay bên kia: Kết thúc phân đoạn 54 cặp thế tại chỗ hoàn hảo."
    },
    "steps": [
      {
        "stepNo": "54",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 53, thực hiện với tay bên kia: Kết thúc phân đoạn 54 cặp thế tại chỗ hoàn hảo.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_53.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-055",
    "code": "DL_55",
    "name": "Chiêu 55: Ép Chưởng Khớp Khuỷu & Kẹp Cổ Tay (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 55,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Khóa bẻ gãy cẳng tay đối thủ khi bị đấm thẳng vào ngực.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Khóa bẻ gãy cẳng tay đối thủ khi bị đấm thẳng vào ngực."
    },
    "steps": [
      {
        "stepNo": "55",
        "desc": "Khóa bẻ gãy cẳng tay đối thủ khi bị đấm thẳng vào ngực.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_55.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-056",
    "code": "DL_56",
    "name": "Chiêu 56: Ép Chưởng Khớp Khuỷu Đối Xứng Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 56,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 55, thực hiện với tay bên kia: Bẻ khớp tay bên trái.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-055",
    "symmetricNote": "Đối luyện tương tự chiêu 55 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 55, thực hiện với tay bên kia: Bẻ khớp tay bên trái."
    },
    "steps": [
      {
        "stepNo": "56",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 55, thực hiện với tay bên kia: Bẻ khớp tay bên trái.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_55.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-057",
    "code": "DL_57",
    "name": "Chiêu 57: Song Thủ Ôm Đẩy Cẳng Tay & Vững Hạ Bàn (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 57,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Hóa giải đòn đấm thốc bụng và hất văng đối phương ra xa.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Hóa giải đòn đấm thốc bụng và hất văng đối phương ra xa."
    },
    "steps": [
      {
        "stepNo": "57",
        "desc": "Hóa giải đòn đấm thốc bụng và hất văng đối phương ra xa.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_57.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-058",
    "code": "DL_58",
    "name": "Chiêu 58: Song Thủ Ôm Đẩy Đối Xứng Bên Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 58,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 57, thực hiện với tay bên kia: Hất văng đối thủ bên trái.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-057",
    "symmetricNote": "Đối luyện tương tự chiêu 57 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 57, thực hiện với tay bên kia: Hất văng đối thủ bên trái."
    },
    "steps": [
      {
        "stepNo": "58",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 57, thực hiện với tay bên kia: Hất văng đối thủ bên trái.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_57.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-059",
    "code": "DL_59",
    "name": "Chiêu 59: Hóa Giải Đòn Đấm Kép Thượng Hạ & Đánh 2 Cổ Tay (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 59,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Hóa giải thế đấm kép hiểm hóc của đối phương.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Hóa giải thế đấm kép hiểm hóc của đối phương."
    },
    "steps": [
      {
        "stepNo": "59",
        "desc": "Hóa giải thế đấm kép hiểm hóc của đối phương.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_59.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-060",
    "code": "DL_60",
    "name": "Chiêu 60: Hóa Giải Đòn Đấm Kép Đối Xứng Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 60,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 59, thực hiện với tay bên kia: Hóa giải đòn đấm kép bên trái.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-059",
    "symmetricNote": "Đối luyện tương tự chiêu 59 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 59, thực hiện với tay bên kia: Hóa giải đòn đấm kép bên trái."
    },
    "steps": [
      {
        "stepNo": "60",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 59, thực hiện với tay bên kia: Hóa giải đòn đấm kép bên trái.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_59.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-061",
    "code": "DL_61",
    "name": "Chiêu 61: Khuyên Thủ Cuốn Tròn & Khẩu Thủ Bẻ Cổ Tay (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 61,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Thoát thế bị đối phương nắm cả hai cổ tay và vặn ngược bẻ khớp đối thủ.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Thoát thế bị đối phương nắm cả hai cổ tay và vặn ngược bẻ khớp đối thủ."
    },
    "steps": [
      {
        "stepNo": "61.1",
        "desc": "Thoát thế bị đối phương nắm cả hai cổ tay và vặn ngược bẻ khớp đối thủ.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_61_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      },
      {
        "stepNo": "61.2",
        "desc": "Thị phạm bước 2 Chiêu 61",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_61_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-062",
    "code": "DL_62",
    "name": "Chiêu 62: Khuyên Thủ Cuốn Tròn Đối Xứng Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 62,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Bẻ khóa tay đối thủ chiều ngược lại.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Bẻ khóa tay đối thủ chiều ngược lại."
    },
    "steps": [
      {
        "stepNo": "62",
        "desc": "Bẻ khóa tay đối thủ chiều ngược lại.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_62.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-063",
    "code": "DL_63",
    "name": "Chiêu 63: Tiến Bước Xỉa Song Xà Thủ Tầm Thấp (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 63,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 62, thực hiện với tay bên kia: Đánh luồn dưới nách vào sườn khi đối phương sơ hở vùng trung bàn.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-062",
    "symmetricNote": "Đối luyện tương tự chiêu 62 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 62, thực hiện với tay bên kia: Đánh luồn dưới nách vào sườn khi đối phương sơ hở vùng trung bàn."
    },
    "steps": [
      {
        "stepNo": "63",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 62, thực hiện với tay bên kia: Đánh luồn dưới nách vào sườn khi đối phương sơ hở vùng trung bàn.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_62.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-064",
    "code": "DL_64",
    "name": "Chiêu 64: Tiến Bước Xỉa Song Xà Đối Xứng Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 64,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Xỉa sườn non bên trái.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Xỉa sườn non bên trái."
    },
    "steps": [
      {
        "stepNo": "64.1",
        "desc": "Xỉa sườn non bên trái.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_64_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      },
      {
        "stepNo": "64.2",
        "desc": "Thị phạm bước 2 Chiêu 64",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_64_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-065",
    "code": "DL_65",
    "name": "Chiêu 65: Hoành Thoái Vắt Tay Long Trảo Đỡ Đòn (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 65,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 64, thực hiện với tay bên kia: Tránh né cú đấm tạt uy lực và khóa cánh tay đối thủ.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-064",
    "symmetricNote": "Đối luyện tương tự chiêu 64 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 64, thực hiện với tay bên kia: Tránh né cú đấm tạt uy lực và khóa cánh tay đối thủ."
    },
    "steps": [
      {
        "stepNo": "65.1",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 64, thực hiện với tay bên kia: Tránh né cú đấm tạt uy lực và khóa cánh tay đối thủ.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_64_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      },
      {
        "stepNo": "65.2",
        "desc": "Thị phạm bước 2 Chiêu 65",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_64_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-066",
    "code": "DL_66",
    "name": "Chiêu 66: Hoành Thoái Long Trảo Đối Xứng Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 66,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Khóa cánh tay địch bên trái.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Khóa cánh tay địch bên trái."
    },
    "steps": [
      {
        "stepNo": "66",
        "desc": "Khóa cánh tay địch bên trái.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_66.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-067",
    "code": "DL_67",
    "name": "Chiêu 67: Song Thủ Khẩu Quyền & Đánh Chỏ Hướng Sau (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 67,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 66, thực hiện với tay bên kia: Hạ gục kẻ ôm lén từ phía sau lưng.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-066",
    "symmetricNote": "Đối luyện tương tự chiêu 66 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 66, thực hiện với tay bên kia: Hạ gục kẻ ôm lén từ phía sau lưng."
    },
    "steps": [
      {
        "stepNo": "67",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 66, thực hiện với tay bên kia: Hạ gục kẻ ôm lén từ phía sau lưng.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_66.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-068",
    "code": "DL_68",
    "name": "Chiêu 68: Song Thủ Khẩu Quyền Đối Xứng Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 68,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Đánh chỏ sau bên trái.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Đánh chỏ sau bên trái."
    },
    "steps": [
      {
        "stepNo": "68",
        "desc": "Đánh chỏ sau bên trái.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_68.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-069",
    "code": "DL_69",
    "name": "Chiêu 69: Tiến Chân Đấm Nhật Tự Quyền & Thung Kình Phải (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 69,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 68, thực hiện với tay bên kia: Đòn đấm đo ván đối thủ bằng thốn kình ở khoảng cách chỉ 1 tấc.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-068",
    "symmetricNote": "Đối luyện tương tự chiêu 68 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 68, thực hiện với tay bên kia: Đòn đấm đo ván đối thủ bằng thốn kình ở khoảng cách chỉ 1 tấc."
    },
    "steps": [
      {
        "stepNo": "69",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 68, thực hiện với tay bên kia: Đòn đấm đo ván đối thủ bằng thốn kình ở khoảng cách chỉ 1 tấc.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_68.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-070",
    "code": "DL_70",
    "name": "Chiêu 70: Tiến Chân Đấm Thẳng Đối Xứng Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 70,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Đấm thốn kình tay trái.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Đấm thốn kình tay trái."
    },
    "steps": [
      {
        "stepNo": "70.1",
        "desc": "Đấm thốn kình tay trái.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_70_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      },
      {
        "stepNo": "70.2",
        "desc": "Thị phạm bước 2 Chiêu 70",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_70_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-071",
    "code": "DL_71",
    "name": "Chiêu 71: Khoa Chân Bàng Thủ Vòng Cung & Chém Trảm Nghịch (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 71,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 70, thực hiện với tay bên kia: Xoay người hạ gục đối thủ bất ngờ tấn công từ phía sau.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-070",
    "symmetricNote": "Đối luyện tương tự chiêu 70 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 70, thực hiện với tay bên kia: Xoay người hạ gục đối thủ bất ngờ tấn công từ phía sau."
    },
    "steps": [
      {
        "stepNo": "71.1",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 70, thực hiện với tay bên kia: Xoay người hạ gục đối thủ bất ngờ tấn công từ phía sau.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_70_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      },
      {
        "stepNo": "71.2",
        "desc": "Thị phạm bước 2 Chiêu 71",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_70_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-072",
    "code": "DL_72",
    "name": "Chiêu 72: Khoa Chân Bàng Thủ Đối Xứng Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 72,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Chém trảm nghịch bên trái.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Chém trảm nghịch bên trái."
    },
    "steps": [
      {
        "stepNo": "72.1",
        "desc": "Chém trảm nghịch bên trái.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_72_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      },
      {
        "stepNo": "72.2",
        "desc": "Thị phạm bước 2 Chiêu 72",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_72_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-073",
    "code": "DL_73",
    "name": "Chiêu 73: Song Long Trảo Cấu Bẻ Cổ & Quét Gót Hạ Bàn (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 73,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 72, thực hiện với tay bên kia: Hạ gục đối thủ to lớn bằng đòn phối hợp cấu cổ và quét chân.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-072",
    "symmetricNote": "Đối luyện tương tự chiêu 72 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 72, thực hiện với tay bên kia: Hạ gục đối thủ to lớn bằng đòn phối hợp cấu cổ và quét chân."
    },
    "steps": [
      {
        "stepNo": "73.1",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 72, thực hiện với tay bên kia: Hạ gục đối thủ to lớn bằng đòn phối hợp cấu cổ và quét chân.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_72_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      },
      {
        "stepNo": "73.2",
        "desc": "Thị phạm bước 2 Chiêu 73",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_72_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-074",
    "code": "DL_74",
    "name": "Chiêu 74: Song Long Trảo Quét Chân Đối Xứng Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 74,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Quét ngã đối thủ hướng bên trái.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Quét ngã đối thủ hướng bên trái."
    },
    "steps": [
      {
        "stepNo": "74.1",
        "desc": "Quét ngã đối thủ hướng bên trái.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_74_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      },
      {
        "stepNo": "74.2",
        "desc": "Thị phạm bước 2 Chiêu 74",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_74_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-075",
    "code": "DL_75",
    "name": "Chiêu 75: Đát Thủ Bung Lực & Xỉa Hầu Xuyên Tâm (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 75,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 74, thực hiện với tay bên kia: Phản công tức thì vào tử huyệt đối thủ.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-074",
    "symmetricNote": "Đối luyện tương tự chiêu 74 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 74, thực hiện với tay bên kia: Phản công tức thì vào tử huyệt đối thủ."
    },
    "steps": [
      {
        "stepNo": "75.1",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 74, thực hiện với tay bên kia: Phản công tức thì vào tử huyệt đối thủ.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_74_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      },
      {
        "stepNo": "75.2",
        "desc": "Thị phạm bước 2 Chiêu 75",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_74_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-076",
    "code": "DL_76",
    "name": "Chiêu 76: Đát Thủ Bung Lực Đối Xứng Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 76,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Xỉa yết hầu bên trái.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Xỉa yết hầu bên trái."
    },
    "steps": [
      {
        "stepNo": "76.1",
        "desc": "Xỉa yết hầu bên trái.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_76_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      },
      {
        "stepNo": "76.2",
        "desc": "Thị phạm bước 2 Chiêu 76",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_76_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-077",
    "code": "DL_77",
    "name": "Chiêu 77: Chưởng Phạt Song Song & Kẹp Hạ Bộ (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 77,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 76, thực hiện với tay bên kia: Đặc trưng tuyệt kỹ Tấn Kiềm Dương dùng gối kẹp bẻ chân đối thủ.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-076",
    "symmetricNote": "Đối luyện tương tự chiêu 76 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 76, thực hiện với tay bên kia: Đặc trưng tuyệt kỹ Tấn Kiềm Dương dùng gối kẹp bẻ chân đối thủ."
    },
    "steps": [
      {
        "stepNo": "77.1",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 76, thực hiện với tay bên kia: Đặc trưng tuyệt kỹ Tấn Kiềm Dương dùng gối kẹp bẻ chân đối thủ.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_76_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      },
      {
        "stepNo": "77.2",
        "desc": "Thị phạm bước 2 Chiêu 77",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_76_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-078",
    "code": "DL_78",
    "name": "Chiêu 78: Chưởng Phạt Song Song Đối Xứng Trái (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 78,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Khóa chân và phạt sườn bên trái.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Khóa chân và phạt sườn bên trái."
    },
    "steps": [
      {
        "stepNo": "78",
        "desc": "Khóa chân và phạt sườn bên trái.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_78.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-079",
    "code": "DL_79",
    "name": "Chiêu 79: Phục Thủ Đè Nách & Đấm Móc Chấn Thủy (Đối Luyện A & B)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 79,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] Đối luyện tương tự chiêu 78, thực hiện với tay bên kia: Đòn cận chiến khóa tay và dứt điểm hiểm hóc.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-078",
    "symmetricNote": "Đối luyện tương tự chiêu 78 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] Đối luyện tương tự chiêu 78, thực hiện với tay bên kia: Đòn cận chiến khóa tay và dứt điểm hiểm hóc."
    },
    "steps": [
      {
        "stepNo": "79",
        "desc": "[Thế đối xứng trái] Đối luyện tương tự chiêu 78, thực hiện với tay bên kia: Đòn cận chiến khóa tay và dứt điểm hiểm hóc.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_78.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-080",
    "code": "DL_80",
    "name": "Chiêu 80: Tóm Cổ Tay & Đè Cẳng Tay Bẻ Khuỷu Đối Phương",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 80,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: A: Tay trái đấm vào bụng B. B: Xoay người, tay trái tóm cổ tay A, vừa kéo vừa xoay, cẳng tay phải đè vào khớp khuỷu tay, bẻ tay A.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "A: Tay trái đấm vào bụng B. B: Xoay người, tay trái tóm cổ tay A, vừa kéo vừa xoay, cẳng tay phải đè vào khớp khuỷu tay, bẻ tay A."
    },
    "steps": [
      {
        "stepNo": "80",
        "desc": "A: Tay trái đấm vào bụng B. B: Xoay người, tay trái tóm cổ tay A, vừa kéo vừa xoay, cẳng tay phải đè vào khớp khuỷu tay, bẻ tay A.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_80.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-081",
    "code": "DL_81",
    "name": "Chiêu 81: Tóm Cổ Tay & Đè Cẳng Tay Bẻ Khuỷu (Thế Đối Xứng Trái)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 81,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] A: Tay phải đấm vào bụng B. B: Xoay người, tay phải tóm cổ tay A, vừa kéo vừa xoay, cẳng tay trái đè vào khớp khuỷu tay, bẻ tay A.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-080",
    "symmetricNote": "Đối luyện tương tự chiêu 80 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] A: Tay phải đấm vào bụng B. B: Xoay người, tay phải tóm cổ tay A, vừa kéo vừa xoay, cẳng tay trái đè vào khớp khuỷu tay, bẻ tay A."
    },
    "steps": [
      {
        "stepNo": "81",
        "desc": "[Thế đối xứng trái] A: Tay phải đấm vào bụng B. B: Xoay người, tay phải tóm cổ tay A, vừa kéo vừa xoay, cẳng tay trái đè vào khớp khuỷu tay, bẻ tay A.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_80.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-082",
    "code": "DL_82",
    "name": "Chiêu 82: Nắm Cổ Tay & Nắm Khuỷu Tay Kéo Về - Gật Đầu Đánh Vào Mắt",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 82,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: A: Tay phải đấm vào bụng B. B: Xoay người, tay trái nắm cổ tay, tay phải nắm khuỷu tay A kéo về phía mình, gật đầu đánh vào mắt A.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "A: Tay phải đấm vào bụng B. B: Xoay người, tay trái nắm cổ tay, tay phải nắm khuỷu tay A kéo về phía mình, gật đầu đánh vào mắt A."
    },
    "steps": [
      {
        "stepNo": "82",
        "desc": "A: Tay phải đấm vào bụng B. B: Xoay người, tay trái nắm cổ tay, tay phải nắm khuỷu tay A kéo về phía mình, gật đầu đánh vào mắt A.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_82.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-083",
    "code": "DL_83",
    "name": "Chiêu 83: Nắm Cổ Tay & Khuỷu Kéo Về - Gật Đầu Đánh Vào Mắt (Thế Đối Xứng Trái)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 83,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] A: Tay trái đấm vào bụng B. B: Xoay người, tay phải nắm cổ tay, tay trái nắm khuỷu tay A kéo về phía mình, gật đầu đánh vào mắt A.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-082",
    "symmetricNote": "Đối luyện tương tự chiêu 82 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] A: Tay trái đấm vào bụng B. B: Xoay người, tay phải nắm cổ tay, tay trái nắm khuỷu tay A kéo về phía mình, gật đầu đánh vào mắt A."
    },
    "steps": [
      {
        "stepNo": "83",
        "desc": "[Thế đối xứng trái] A: Tay trái đấm vào bụng B. B: Xoay người, tay phải nắm cổ tay, tay trái nắm khuỷu tay A kéo về phía mình, gật đầu đánh vào mắt A.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_82.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-084",
    "code": "DL_84",
    "name": "Chiêu 84: Đứng Kiềm Dương Song Thủ Gạt Hai Nắm Đấm Sang Hai Bên",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 84,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: A: Hai tay đấm song song vào ngực B. B: Đứng Kiềm Dương Tấn, hai tay đưa xuống gạt hai tay đấm của A sang hai bên.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "A: Hai tay đấm song song vào ngực B. B: Đứng Kiềm Dương Tấn, hai tay đưa xuống gạt hai tay đấm của A sang hai bên."
    },
    "steps": [
      {
        "stepNo": "84",
        "desc": "A: Hai tay đấm song song vào ngực B. B: Đứng Kiềm Dương Tấn, hai tay đưa xuống gạt hai tay đấm của A sang hai bên.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_84.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-085",
    "code": "DL_85",
    "name": "Chiêu 85: Hạ Thấp Che Hạ Bộ & Chộp Hạ Bộ Đối Phương Giật Về",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 85,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: A: Ra đòn tấn công trung bàn. B: Hạ thấp người, tay trái che bộ hạ, tay phải đưa ra chộp vào bộ hạ A, bóp mạnh và giật về.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "A: Ra đòn tấn công trung bàn. B: Hạ thấp người, tay trái che bộ hạ, tay phải đưa ra chộp vào bộ hạ A, bóp mạnh và giật về."
    },
    "steps": [
      {
        "stepNo": "85",
        "desc": "A: Ra đòn tấn công trung bàn. B: Hạ thấp người, tay trái che bộ hạ, tay phải đưa ra chộp vào bộ hạ A, bóp mạnh và giật về.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_85.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-086",
    "code": "DL_86",
    "name": "Chiêu 86: Hạ Thấp Che Hạ Bộ & Chộp Hạ Bộ (Thế Đối Xứng Trái)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 86,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] A: Ra đòn tấn công trung bàn. B: Hạ thấp người, tay phải che bộ hạ, tay trái đưa ra chộp vào bộ hạ A, bóp mạnh và giật về.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-085",
    "symmetricNote": "Đối luyện tương tự chiêu 85 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] A: Ra đòn tấn công trung bàn. B: Hạ thấp người, tay phải che bộ hạ, tay trái đưa ra chộp vào bộ hạ A, bóp mạnh và giật về."
    },
    "steps": [
      {
        "stepNo": "86",
        "desc": "[Thế đối xứng trái] A: Ra đòn tấn công trung bàn. B: Hạ thấp người, tay phải che bộ hạ, tay trái đưa ra chộp vào bộ hạ A, bóp mạnh và giật về.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_85.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-087",
    "code": "DL_87",
    "name": "Chiêu 87: Song Thủ Bắt Chéo Đỡ Đấm & Chặt Vào Dưới Nách",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 87,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: 87.1- A: Tay phải đấm vào mặt B. B: Xoay người, hai tay bắt chéo đưa lên đỡ.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "87.1- A: Tay phải đấm vào mặt B. B: Xoay người, hai tay bắt chéo đưa lên đỡ."
    },
    "steps": [
      {
        "stepNo": "87.1",
        "desc": "87.1- A: Tay phải đấm vào mặt B. B: Xoay người, hai tay bắt chéo đưa lên đỡ.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_87_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      },
      {
        "stepNo": "87.2",
        "desc": "87.2- B: Tay trái nắm lấy cổ tay A kéo về, tay phải chặt vào dưới nách A.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_87_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-088",
    "code": "DL_88",
    "name": "Chiêu 88: Song Thủ Bắt Chéo Đỡ Đấm & Chặt Dưới Nách (Thế Đối Xứng Trái)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 88,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] 87.1- A: Tay trái đấm vào mặt B. B: Xoay người, hai tay bắt chéo đưa lên đỡ.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-087",
    "symmetricNote": "Đối luyện tương tự chiêu 87 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] 87.1- A: Tay trái đấm vào mặt B. B: Xoay người, hai tay bắt chéo đưa lên đỡ."
    },
    "steps": [
      {
        "stepNo": "88.1",
        "desc": "[Thế đối xứng trái] 87.1- A: Tay trái đấm vào mặt B. B: Xoay người, hai tay bắt chéo đưa lên đỡ.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_87_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      },
      {
        "stepNo": "88.2",
        "desc": "[Thế đối xứng trái] 87.2- B: Tay phải nắm lấy cổ tay A kéo về, tay trái chặt vào dưới nách A.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_87_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-089",
    "code": "DL_89",
    "name": "Chiêu 89: Nắm Cổ Tay Khuỷu Tay Kéo Về & Thúc Gối Tấn Công",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 89,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: A: Tay phải đấm vào bụng B. B: Xoay người, tay phải nắm cổ tay, tay trái nắm khuỷu tay A kéo về phía mình. Chân phải lên gối.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "A: Tay phải đấm vào bụng B. B: Xoay người, tay phải nắm cổ tay, tay trái nắm khuỷu tay A kéo về phía mình. Chân phải lên gối."
    },
    "steps": [
      {
        "stepNo": "89",
        "desc": "A: Tay phải đấm vào bụng B. B: Xoay người, tay phải nắm cổ tay, tay trái nắm khuỷu tay A kéo về phía mình. Chân phải lên gối.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_89.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-090",
    "code": "DL_90",
    "name": "Chiêu 90: Nắm Cổ Tay Khuỷu Tay & Thúc Gối (Thế Đối Xứng Trái)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 90,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] A: Tay trái đấm vào bụng B. B: Xoay người, tay trái nắm cổ tay, tay phải nắm khuỷu tay A kéo về phía mình. Chân trái lên gối.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-089",
    "symmetricNote": "Đối luyện tương tự chiêu 89 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] A: Tay trái đấm vào bụng B. B: Xoay người, tay trái nắm cổ tay, tay phải nắm khuỷu tay A kéo về phía mình. Chân trái lên gối."
    },
    "steps": [
      {
        "stepNo": "90",
        "desc": "[Thế đối xứng trái] A: Tay trái đấm vào bụng B. B: Xoay người, tay trái nắm cổ tay, tay phải nắm khuỷu tay A kéo về phía mình. Chân trái lên gối.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_89.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-091",
    "code": "DL_91",
    "name": "Chiêu 91: Nắm Cổ Tay Khuỷu Tay Kéo Mạnh & Lên Gối Phía Sau Vào Thận",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 91,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: A: Tay trái đấm vào bụng B. B: Xoay người, tay trái nắm cổ tay, tay phải nắm khuỷu tay A kéo mạnh. Chân phải lên gối vào phía sau (thận) A.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "A: Tay trái đấm vào bụng B. B: Xoay người, tay trái nắm cổ tay, tay phải nắm khuỷu tay A kéo mạnh. Chân phải lên gối vào phía sau (thận) A."
    },
    "steps": [
      {
        "stepNo": "91",
        "desc": "A: Tay trái đấm vào bụng B. B: Xoay người, tay trái nắm cổ tay, tay phải nắm khuỷu tay A kéo mạnh. Chân phải lên gối vào phía sau (thận) A.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_91.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-092",
    "code": "DL_92",
    "name": "Chiêu 92: Nắm Cổ Tay & Lên Gối Phía Sau Vào Thận (Thế Đối Xứng Trái)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 92,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] A: Tay phải đấm vào bụng B. B: Xoay người, tay phải nắm cổ tay, tay trái nắm khuỷu tay A kéo mạnh. Chân trái lên gối vào phía sau (thận) A.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-091",
    "symmetricNote": "Đối luyện tương tự chiêu 91 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] A: Tay phải đấm vào bụng B. B: Xoay người, tay phải nắm cổ tay, tay trái nắm khuỷu tay A kéo mạnh. Chân trái lên gối vào phía sau (thận) A."
    },
    "steps": [
      {
        "stepNo": "92",
        "desc": "[Thế đối xứng trái] A: Tay phải đấm vào bụng B. B: Xoay người, tay phải nắm cổ tay, tay trái nắm khuỷu tay A kéo mạnh. Chân trái lên gối vào phía sau (thận) A.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_91.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-093",
    "code": "DL_93",
    "name": "Chiêu 93: Nắm Cổ Tay Cánh Tay Kéo Mạnh & Dùng Gối Đánh Miết Xuống",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 93,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: A: Tay phải đấm vào bụng B. B: Xoay người, tay trái nắm cổ tay, tay phải nắm cánh tay A kéo mạnh, chân phải dùng gối đánh miết xuống.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "A: Tay phải đấm vào bụng B. B: Xoay người, tay trái nắm cổ tay, tay phải nắm cánh tay A kéo mạnh, chân phải dùng gối đánh miết xuống."
    },
    "steps": [
      {
        "stepNo": "93",
        "desc": "A: Tay phải đấm vào bụng B. B: Xoay người, tay trái nắm cổ tay, tay phải nắm cánh tay A kéo mạnh, chân phải dùng gối đánh miết xuống.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_93.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-094",
    "code": "DL_94",
    "name": "Chiêu 94: Nắm Cổ Tay Cánh Tay & Đánh Gối Miết Xuống (Thế Đối Xứng Trái)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 94,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] A: Tay trái đấm vào bụng B. B: Xoay người, tay phải nắm cổ tay, tay trái nắm cánh tay A kéo mạnh, chân trái dùng gối đánh miết xuống.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-093",
    "symmetricNote": "Đối luyện tương tự chiêu 93 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] A: Tay trái đấm vào bụng B. B: Xoay người, tay phải nắm cổ tay, tay trái nắm cánh tay A kéo mạnh, chân trái dùng gối đánh miết xuống."
    },
    "steps": [
      {
        "stepNo": "94",
        "desc": "[Thế đối xứng trái] A: Tay trái đấm vào bụng B. B: Xoay người, tay phải nắm cổ tay, tay trái nắm cánh tay A kéo mạnh, chân trái dùng gối đánh miết xuống.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_93.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-095",
    "code": "DL_95",
    "name": "Chiêu 95: Hai Tay Nắm Cổ Tay Dập Xuống & Lên Gối Bẻ Khuỷu Tay",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 95,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: A: Tay trái vào đấm bụng B. B: Xoay người, hai tay nắm cổ tay A dập xuống, chân phải lên gối đánh lên khuỷu tay A (bẻ).",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "A: Tay trái vào đấm bụng B. B: Xoay người, hai tay nắm cổ tay A dập xuống, chân phải lên gối đánh lên khuỷu tay A (bẻ)."
    },
    "steps": [
      {
        "stepNo": "95",
        "desc": "A: Tay trái vào đấm bụng B. B: Xoay người, hai tay nắm cổ tay A dập xuống, chân phải lên gối đánh lên khuỷu tay A (bẻ).",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_95.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-096",
    "code": "DL_96",
    "name": "Chiêu 96: Nắm Cổ Tay Dập Xuống & Lên Gối Bẻ Khuỷu Tay (Thế Đối Xứng Trái)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 96,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] A: Tay phải vào đấm bụng B. B: Xoay người, hai tay nắm cổ tay A dập xuống, chân trái lên gối đánh lên khuỷu tay A (bẻ).",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-095",
    "symmetricNote": "Đối luyện tương tự chiêu 95 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] A: Tay phải vào đấm bụng B. B: Xoay người, hai tay nắm cổ tay A dập xuống, chân trái lên gối đánh lên khuỷu tay A (bẻ)."
    },
    "steps": [
      {
        "stepNo": "96",
        "desc": "[Thế đối xứng trái] A: Tay phải vào đấm bụng B. B: Xoay người, hai tay nắm cổ tay A dập xuống, chân trái lên gối đánh lên khuỷu tay A (bẻ).",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_95.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-097",
    "code": "DL_97",
    "name": "Chiêu 97: Hai Tay Song Song Đập Xuống Tay & Chân Đưa Lên Đá Móc Hạ Bộ",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 97,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: A: Tay phải đấm bụng B. B: Hai tay song song đập xuống tay A, chân phải đưa lên đá móc vào hạ bộ A.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "A: Tay phải đấm bụng B. B: Hai tay song song đập xuống tay A, chân phải đưa lên đá móc vào hạ bộ A."
    },
    "steps": [
      {
        "stepNo": "97",
        "desc": "A: Tay phải đấm bụng B. B: Hai tay song song đập xuống tay A, chân phải đưa lên đá móc vào hạ bộ A.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_97.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-098",
    "code": "DL_98",
    "name": "Chiêu 98: Hai Tay Song Song Đập Xuống & Đá Móc Hạ Bộ (Thế Đối Xứng Trái)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 98,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] A: Tay trái đấm bụng B. B: Hai tay song song đập xuống tay A, chân trái đưa lên đá móc vào hạ bộ A.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-097",
    "symmetricNote": "Đối luyện tương tự chiêu 97 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] A: Tay trái đấm bụng B. B: Hai tay song song đập xuống tay A, chân trái đưa lên đá móc vào hạ bộ A."
    },
    "steps": [
      {
        "stepNo": "98",
        "desc": "[Thế đối xứng trái] A: Tay trái đấm bụng B. B: Hai tay song song đập xuống tay A, chân trái đưa lên đá móc vào hạ bộ A.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_97.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-099",
    "code": "DL_99",
    "name": "Chiêu 99: Hai Bàn Tay Xà Xỉa Từ Sau Ra Trước & Đá Móc Vào Hạ Bộ",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 99,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: A: Tay trái đấm lên mặt B. B: Hai bàn tay xà xỉa từ sau ra trước, chân phải đưa lên đá móc vào hạ bộ A.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "A: Tay trái đấm lên mặt B. B: Hai bàn tay xà xỉa từ sau ra trước, chân phải đưa lên đá móc vào hạ bộ A."
    },
    "steps": [
      {
        "stepNo": "99",
        "desc": "A: Tay trái đấm lên mặt B. B: Hai bàn tay xà xỉa từ sau ra trước, chân phải đưa lên đá móc vào hạ bộ A.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_99.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-100",
    "code": "DL_100",
    "name": "Chiêu 100: Hai Bàn Tay Xà Xỉa & Đá Móc Hạ Bộ (Thế Đối Xứng Trái)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 100,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] A: Tay phải đấm lên mặt B. B: Hai bàn tay xà xỉa từ sau ra trước, chân trái đưa lên đá móc vào hạ bộ A.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-099",
    "symmetricNote": "Đối luyện tương tự chiêu 99 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] A: Tay phải đấm lên mặt B. B: Hai bàn tay xà xỉa từ sau ra trước, chân trái đưa lên đá móc vào hạ bộ A."
    },
    "steps": [
      {
        "stepNo": "100",
        "desc": "[Thế đối xứng trái] A: Tay phải đấm lên mặt B. B: Hai bàn tay xà xỉa từ sau ra trước, chân trái đưa lên đá móc vào hạ bộ A.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_99.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-101",
    "code": "DL_101",
    "name": "Chiêu 101: Tay Trái Cạnh Ngoài Đỡ Đấm - Tay Phải Lòng Bàn Tay Đánh - Đá Móc Hạ Bộ",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 101,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: A: Tay trái đấm mặt B. B: Tay trái đỡ đấm bằng cạnh ngoài bàn tay, tay phải đánh bằng lòng bàn tay, chân phải đưa lên đá móc vào hạ bộ A.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "A: Tay trái đấm mặt B. B: Tay trái đỡ đấm bằng cạnh ngoài bàn tay, tay phải đánh bằng lòng bàn tay, chân phải đưa lên đá móc vào hạ bộ A."
    },
    "steps": [
      {
        "stepNo": "101",
        "desc": "A: Tay trái đấm mặt B. B: Tay trái đỡ đấm bằng cạnh ngoài bàn tay, tay phải đánh bằng lòng bàn tay, chân phải đưa lên đá móc vào hạ bộ A.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_101.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-102",
    "code": "DL_102",
    "name": "Chiêu 102: Đỡ Đấm & Đánh Lòng Bàn Tay - Đá Móc Hạ Bộ (Thế Đối Xứng Trái)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 102,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] A: Tay phải đấm mặt B. B: Tay phải đỡ đấm bằng cạnh ngoài bàn tay, tay trái đánh bằng lòng bàn tay, chân trái đưa lên đá móc vào hạ bộ A.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-101",
    "symmetricNote": "Đối luyện tương tự chiêu 101 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] A: Tay phải đấm mặt B. B: Tay phải đỡ đấm bằng cạnh ngoài bàn tay, tay trái đánh bằng lòng bàn tay, chân trái đưa lên đá móc vào hạ bộ A."
    },
    "steps": [
      {
        "stepNo": "102",
        "desc": "[Thế đối xứng trái] A: Tay phải đấm mặt B. B: Tay phải đỡ đấm bằng cạnh ngoài bàn tay, tay trái đánh bằng lòng bàn tay, chân trái đưa lên đá móc vào hạ bộ A.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_101.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-103",
    "code": "DL_103",
    "name": "Chiêu 103: Quặp Cổ Tay - Hất Đánh Khuỷu Tay & Đá Móc Hạ Bộ",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 103,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: A: Tay trái đấm mặt B. B: Tay trái thẳng đứng hạ xuống quặp cổ tay A, tay phải hất từ dưới lên đánh vào khuỷu tay A, đá móc vào hạ bộ A.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "A: Tay trái đấm mặt B. B: Tay trái thẳng đứng hạ xuống quặp cổ tay A, tay phải hất từ dưới lên đánh vào khuỷu tay A, đá móc vào hạ bộ A."
    },
    "steps": [
      {
        "stepNo": "103",
        "desc": "A: Tay trái đấm mặt B. B: Tay trái thẳng đứng hạ xuống quặp cổ tay A, tay phải hất từ dưới lên đánh vào khuỷu tay A, đá móc vào hạ bộ A.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_103.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-104",
    "code": "DL_104",
    "name": "Chiêu 104: Quặp Cổ Tay - Hất Đánh Khuỷu Tay & Đá Móc (Thế Đối Xứng Trái)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 104,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] A: Tay phải đấm mặt B. B: Tay phải thẳng đứng hạ xuống quặp cổ tay A, tay trái hất từ dưới lên đánh vào khuỷu tay A, đá móc vào hạ bộ A.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-103",
    "symmetricNote": "Đối luyện tương tự chiêu 103 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] A: Tay phải đấm mặt B. B: Tay phải thẳng đứng hạ xuống quặp cổ tay A, tay trái hất từ dưới lên đánh vào khuỷu tay A, đá móc vào hạ bộ A."
    },
    "steps": [
      {
        "stepNo": "104",
        "desc": "[Thế đối xứng trái] A: Tay phải đấm mặt B. B: Tay phải thẳng đứng hạ xuống quặp cổ tay A, tay trái hất từ dưới lên đánh vào khuỷu tay A, đá móc vào hạ bộ A.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_103.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-105",
    "code": "DL_105",
    "name": "Chiêu 105: Song Thủ Hất Thượng & Đè Hạ Khóa Quyền",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 105,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: 105.1- A: Hai tay đấm song song vào ngực B. B: Hai chân đứng kiềm dương. Hai bàn tay ngửa, đánh hất 2 tay A lên trên (như hình 50.1).",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "105.1- A: Hai tay đấm song song vào ngực B. B: Hai chân đứng kiềm dương. Hai bàn tay ngửa, đánh hất 2 tay A lên trên (như hình 50.1)."
    },
    "steps": [
      {
        "stepNo": "105.1",
        "desc": "105.1- A: Hai tay đấm song song vào ngực B. B: Hai chân đứng kiềm dương. Hai bàn tay ngửa, đánh hất 2 tay A lên trên (như hình 50.1).",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_50_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      },
      {
        "stepNo": "105.2",
        "desc": "105.2- B: Hai tay theo tay A, vòng lên trên ép hai cánh tay A xuống dưới (như hình 50.2).",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_50_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-106",
    "code": "DL_106",
    "name": "Chiêu 106: Song Thủ Hất Thượng & Đè Hạ Khóa Quyền (Thế Đối Xứng Trái)",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 106,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: [Thế đối xứng trái] 105.1- A: Hai tay đấm song song vào ngực B. B: Hai chân đứng kiềm dương. Hai bàn tay ngửa, đánh hất 2 tay A lên trên (như hình 50.1).",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": true,
    "symmetricRef": "DL-105",
    "symmetricNote": "Đối luyện tương tự chiêu 105 nhưng thực hiện với thế đối xứng bên trái.",
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "[Thế đối xứng trái] 105.1- A: Hai tay đấm song song vào ngực B. B: Hai chân đứng kiềm dương. Hai bàn tay ngửa, đánh hất 2 tay A lên trên (như hình 50.1)."
    },
    "steps": [
      {
        "stepNo": "106.1",
        "desc": "[Thế đối xứng trái] 105.1- A: Hai tay đấm song song vào ngực B. B: Hai chân đứng kiềm dương. Hai bàn tay ngửa, đánh hất 2 tay A lên trên (như hình 50.1).",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_50_1.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      },
      {
        "stepNo": "106.2",
        "desc": "[Thế đối xứng trái] 105.2- B: Hai tay theo tay A, vòng lên trên ép hai cánh tay A xuống dưới (như hình 50.2).",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_50_2.png",
        "keypoints": [
          "Đúng nhịp kình",
          "Linh giác dính sát",
          "Phản kích trung tuyến"
        ],
        "isSymmetricLeft": true
      }
    ]
  },
  {
    "id": "DL-107",
    "code": "DL_107",
    "name": "Chiêu 107: Thu Quyền Về Sát Nách & Kiềm Dương Tấn Đối Luyện",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 107,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Hai võ sư A và B đồng thời thu hai nắm đấm về sát nách, mở chân đứng Nhị Tự Kiềm Dương Tấn chân hẹp chuẩn mực, khí trầm đan điền chuẩn bị nghi thức kết thúc bài.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Hai võ sư A và B đồng thời thu hai nắm đấm về sát nách, mở chân đứng Nhị Tự Kiềm Dương Tấn chân hẹp chuẩn mực, khí trầm đan điền chuẩn bị nghi thức kết thúc bài."
    },
    "steps": [
      {
        "stepNo": "107",
        "desc": "Hai võ sư A và B đồng thời thu hai nắm đấm về sát nách, mở chân đứng Nhị Tự Kiềm Dương Tấn chân hẹp chuẩn mực, khí trầm đan điền chuẩn bị nghi thức kết thúc bài.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_0_2.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  },
  {
    "id": "DL-108",
    "code": "DL_108",
    "name": "Chiêu 108: Song Thủ Hợp Chưởng Bái Tổ Đối Luyện Hoàn Tất Đại Pháp",
    "formId": "05-108-doi-luyen",
    "formName": "Bài 5: Bài Võ 108 Thế Đối Luyện (Tại Chỗ)",
    "order": 108,
    "instructor": "HLV Nguyễn Việt Dũng (A) & HLV Nguyễn Trường Thanh (B)",
    "summary": "Đối luyện thực chiến A & B: Hai võ sư A và B đứng thẳng người, hai tay chắp ngang ngực cung kính cúi chào nhau tôn sư trọng đạo, hoàn tất viên mãn 108 thế đối luyện tại chỗ của môn phái.",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thủ Pháp Đối Luyện"
    ],
    "targetZones": [
      "Trung Bàn",
      "Thượng Bàn"
    ],
    "difficulty": "Nâng cao",
    "isNarrowStance": true,
    "isSymmetricLeft": false,
    "symmetricRef": null,
    "symmetricNote": null,
    "isTwoPerson": true,
    "sparringInfo": {
      "attacker": "HLV Nguyễn Việt Dũng (A) phát lực tấn công",
      "defender": "HLV Nguyễn Trường Thanh (B) cảm ứng hóa giải phản công",
      "tactics": "Hai võ sư A và B đứng thẳng người, hai tay chắp ngang ngực cung kính cúi chào nhau tôn sư trọng đạo, hoàn tất viên mãn 108 thế đối luyện tại chỗ của môn phái."
    },
    "steps": [
      {
        "stepNo": "108",
        "desc": "Hai võ sư A và B đứng thẳng người, hai tay chắp ngang ngực cung kính cúi chào nhau tôn sư trọng đạo, hoàn tất viên mãn 108 thế đối luyện tại chỗ của môn phái.",
        "imgUrl": "/assets/images/forms/05_108_doi_luyen/dl_0_1.png",
        "keypoints": [
          "A xuất đòn tấn công chân thực",
          "B vận dụng cùi chỏ hóa giải",
          "Khép chặt trung lộ"
        ],
        "isSymmetricLeft": false
      }
    ]
  }
];

export const TIEN_LUI_DON_108_TECHNIQUES: Technique[] = [
{
  "id": "TLD-000",
  "code": "TLD_00",
  "name": "★ Nghi Thức Bái Tổ Đứng Kiềm Dương Tấn (Tiến Lùi Đơn)",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 0,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Đứng tấn kiềm dương mã chân hẹp, cùi chỏ ép sát sườn, hai nắm đấm thu sát nách chuẩn bị thi triển bộ pháp tiến lùi.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Nhị Tự Kiềm Dương Tấn"
  ],
  "hands": [
    "Thu Quyền Sát Nách",
    "Khai Thế"
  ],
  "targetZones": [
    "Trung Bàn"
  ],
  "difficulty": "Cơ bản",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "0",
      "desc": "HLV Lương Thành Trung đứng Kiềm Dương Tấn chuẩn mực khởi thức Bài 108 Tiến Lùi.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_1.png",
      "keypoints": [
        "Chân hẹp che hạ bộ",
        "Cùi chỏ ép sát",
        "Lưng thẳng ngực hàm"
      ]
    }
  ]
},
{
  "id": "TLD-001",
  "code": "TLD_01",
  "name": "Chiêu 1: Tiến Chân Phải Đưa Hai Tay Ra Phía Trước",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 1,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Chân Phải Đưa Hai Tay Ra Phía Trước.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "1",
      "desc": "HLV Lương Thành Trung thị phạm: Tiến Chân Phải Đưa Hai Tay Ra Phía Trước.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_1.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-002",
  "code": "TLD_02",
  "name": "Chiêu 2: Lùi Chân Phải Đỡ Vòng Qua Mặt & Thu Quyền",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 2,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Lùi Chân Phải Đỡ Vòng Qua Mặt & Thu Quyền.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "2",
      "desc": "HLV Lương Thành Trung thị phạm: Lùi Chân Phải Đỡ Vòng Qua Mặt & Thu Quyền.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_2.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-003",
  "code": "TLD_03",
  "name": "Chiêu 3: Tiến Chân Phải Thủ Thấp Đánh Chưởng Tới",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 3,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Chân Phải Thủ Thấp Đánh Chưởng Tới.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "3",
      "desc": "HLV Lương Thành Trung thị phạm: Tiến Chân Phải Thủ Thấp Đánh Chưởng Tới.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_3.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-004",
  "code": "TLD_04",
  "name": "Chiêu 4: Lùi Chân Phải Bàng Thủ & Rút Quyền Sát Nách",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 4,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Lùi Chân Phải Bàng Thủ & Rút Quyền Sát Nách.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "4",
      "desc": "HLV Lương Thành Trung thị phạm: Lùi Chân Phải Bàng Thủ & Rút Quyền Sát Nách.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_4.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-005",
  "code": "TLD_05",
  "name": "Chiêu 5: Tiến Chân Phải Đánh Song Quyền Từ Trên Xuống",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 5,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Chân Phải Đánh Song Quyền Từ Trên Xuống.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "5",
      "desc": "HLV Lương Thành Trung thị phạm: Tiến Chân Phải Đánh Song Quyền Từ Trên Xuống.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_5.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-006",
  "code": "TLD_06",
  "name": "Chiêu 6: Lùi Chân Phải Xỉa Đôi Đồng Thời Từ Trong Ra",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 6,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Lùi Chân Phải Xỉa Đôi Đồng Thời Từ Trong Ra.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "6",
      "desc": "HLV Lương Thành Trung thị phạm: Lùi Chân Phải Xỉa Đôi Đồng Thời Từ Trong Ra.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_6.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-007",
  "code": "TLD_07",
  "name": "Chiêu 7: Tiến Chân Phải Vẩy Hai Bàn Tay Từ Dưới Lên",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 7,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Chân Phải Vẩy Hai Bàn Tay Từ Dưới Lên.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "7",
      "desc": "HLV Lương Thành Trung thị phạm: Tiến Chân Phải Vẩy Hai Bàn Tay Từ Dưới Lên.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_7.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-008",
  "code": "TLD_08",
  "name": "Chiêu 8: Lùi Chân Phải Dựng & Vặn Cẳng Tay Vào Trong",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 8,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Lùi Chân Phải Dựng & Vặn Cẳng Tay Vào Trong.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "8",
      "desc": "HLV Lương Thành Trung thị phạm: Lùi Chân Phải Dựng & Vặn Cẳng Tay Vào Trong.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_8.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-009",
  "code": "TLD_09",
  "name": "Chiêu 9: Tiến Chân Phải Điệp Chưởng Đánh Bật Ra Trước",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 9,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Chân Phải Điệp Chưởng Đánh Bật Ra Trước.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "9",
      "desc": "HLV Lương Thành Trung thị phạm: Tiến Chân Phải Điệp Chưởng Đánh Bật Ra Trước.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_9.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-010",
  "code": "TLD_10",
  "name": "Chiêu 10: Lùi Chân Phải Vồ Long Trảo Đan Điền",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 10,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Lùi Chân Phải Vồ Long Trảo Đan Điền.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "10",
      "desc": "HLV Lương Thành Trung thị phạm: Lùi Chân Phải Vồ Long Trảo Đan Điền.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_10.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-011",
  "code": "TLD_11",
  "name": "Chiêu 11: Tiến Chân Phải Đâm Thẳng Nhật Tự Quyền",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 11,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Chân Phải Đâm Thẳng Nhật Tự Quyền.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "11",
      "desc": "HLV Lương Thành Trung thị phạm: Tiến Chân Phải Đâm Thẳng Nhật Tự Quyền.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_11.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-012",
  "code": "TLD_12",
  "name": "Chiêu 12: Lùi Chân Phải Bàng Thủ Phản Trảm",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 12,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Lùi Chân Phải Bàng Thủ Phản Trảm.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "12",
      "desc": "HLV Lương Thành Trung thị phạm: Lùi Chân Phải Bàng Thủ Phản Trảm.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_12.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-013",
  "code": "TLD_13",
  "name": "Chiêu 13: Tiến Chân Phải Thúc Cùi Chỏ Hạ Bàn",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 13,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Chân Phải Thúc Cùi Chỏ Hạ Bàn.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "13",
      "desc": "HLV Lương Thành Trung thị phạm: Tiến Chân Phải Thúc Cùi Chỏ Hạ Bàn.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_13.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-014",
  "code": "TLD_14",
  "name": "Chiêu 14: Lùi Chân Phải Khoa Chân Tròn Hoành Thoái",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 14,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Lùi Chân Phải Khoa Chân Tròn Hoành Thoái.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "14",
      "desc": "HLV Lương Thành Trung thị phạm: Lùi Chân Phải Khoa Chân Tròn Hoành Thoái.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_14.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-015",
  "code": "TLD_15",
  "name": "Chiêu 15: Tiến Chân Phải Song Chưởng Đè Ép Trung Tuyến",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 15,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Chân Phải Song Chưởng Đè Ép Trung Tuyến.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "15",
      "desc": "HLV Lương Thành Trung thị phạm: Tiến Chân Phải Song Chưởng Đè Ép Trung Tuyến.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_15.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-016",
  "code": "TLD_16",
  "name": "Chiêu 16: Lùi Chân Phải Thu Quyền Chìm Sâu Khí Hải (2 Bước Liên Hoàn)",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 16,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Lùi Chân Phải Thu Quyền Chìm Sâu Khí Hải (2 Bước Liên Hoàn).",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "16.1",
      "desc": "Bước 1: HLV Lương Thành Trung chuyển thế Lùi Chân Phải Thu Quyền Chìm Sâu Khí Hải (2 Bước Liên Hoàn).",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_16_1.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    },
    {
      "stepNo": "16.2",
      "desc": "Bước 2: HLV Lương Thành Trung chuyển thế Lùi Chân Phải Thu Quyền Chìm Sâu Khí Hải (2 Bước Liên Hoàn).",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_16_2.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    }
  ]
},
{
  "id": "TLD-017",
  "code": "TLD_17",
  "name": "Chiêu 17: Tiến Lướt Chân Đấm Bồi Nhật Tự Quyền (2 Bước Liên Hoàn)",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 17,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Lướt Chân Đấm Bồi Nhật Tự Quyền (2 Bước Liên Hoàn).",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "17.1",
      "desc": "Bước 1: HLV Lương Thành Trung chuyển thế Tiến Lướt Chân Đấm Bồi Nhật Tự Quyền (2 Bước Liên Hoàn).",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_17_1.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    },
    {
      "stepNo": "17.2",
      "desc": "Bước 2: HLV Lương Thành Trung chuyển thế Tiến Lướt Chân Đấm Bồi Nhật Tự Quyền (2 Bước Liên Hoàn).",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_17_2.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    }
  ]
},
{
  "id": "TLD-018",
  "code": "TLD_18",
  "name": "Chiêu 18: Lùi Chân Phải Chém Xoay Tròn Ngang Cổ (2 Bước Liên Hoàn)",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 18,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Lùi Chân Phải Chém Xoay Tròn Ngang Cổ (2 Bước Liên Hoàn).",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "18.1",
      "desc": "Bước 1: HLV Lương Thành Trung chuyển thế Lùi Chân Phải Chém Xoay Tròn Ngang Cổ (2 Bước Liên Hoàn).",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_18_1.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    },
    {
      "stepNo": "18.2",
      "desc": "Bước 2: HLV Lương Thành Trung chuyển thế Lùi Chân Phải Chém Xoay Tròn Ngang Cổ (2 Bước Liên Hoàn).",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_18_2.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    }
  ]
},
{
  "id": "TLD-019",
  "code": "TLD_19",
  "name": "Chiêu 19: Tiến Chân Phải Gạt Cẳng Tay & Thúc Gối Nhọn",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 19,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Chân Phải Gạt Cẳng Tay & Thúc Gối Nhọn.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "19",
      "desc": "HLV Lương Thành Trung thị phạm: Tiến Chân Phải Gạt Cẳng Tay & Thúc Gối Nhọn.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_19.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-020",
  "code": "TLD_20",
  "name": "Chiêu 20: Lùi Chân Phải Bàng Thủ & Cước Phá Khớp (2 Bước Liên Hoàn)",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 20,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Lùi Chân Phải Bàng Thủ & Cước Phá Khớp (2 Bước Liên Hoàn).",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "20.1",
      "desc": "Bước 1: HLV Lương Thành Trung chuyển thế Lùi Chân Phải Bàng Thủ & Cước Phá Khớp (2 Bước Liên Hoàn).",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_20_1.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    },
    {
      "stepNo": "20.2",
      "desc": "Bước 2: HLV Lương Thành Trung chuyển thế Lùi Chân Phải Bàng Thủ & Cước Phá Khớp (2 Bước Liên Hoàn).",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_20_2.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    }
  ]
},
{
  "id": "TLD-021",
  "code": "TLD_21",
  "name": "Chiêu 21: Tiến Chân Phải Song Chưởng Tạt Ngang (2 Bước)",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 21,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Chân Phải Song Chưởng Tạt Ngang (2 Bước).",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "21.1",
      "desc": "Bước 1: HLV Lương Thành Trung chuyển thế Tiến Chân Phải Song Chưởng Tạt Ngang (2 Bước).",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_21_1.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    },
    {
      "stepNo": "21.2",
      "desc": "Bước 2: HLV Lương Thành Trung chuyển thế Tiến Chân Phải Song Chưởng Tạt Ngang (2 Bước).",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_21_2.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    }
  ]
},
{
  "id": "TLD-022",
  "code": "TLD_22",
  "name": "Chiêu 22: Chuỗi 3 Bước: Tiến Đinh Tấn - Xoay Trục - Phóng Tiêu Thủ",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 22,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Chuỗi 3 Bước: Tiến Đinh Tấn - Xoay Trục - Phóng Tiêu Thủ.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "22.1",
      "desc": "Bước 1: HLV Lương Thành Trung chuyển thế Chuỗi 3 Bước: Tiến Đinh Tấn - Xoay Trục - Phóng Tiêu Thủ.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_22_1.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    },
    {
      "stepNo": "22.2",
      "desc": "Bước 2: HLV Lương Thành Trung chuyển thế Chuỗi 3 Bước: Tiến Đinh Tấn - Xoay Trục - Phóng Tiêu Thủ.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_22_2.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    },
    {
      "stepNo": "22.3",
      "desc": "Bước 3: HLV Lương Thành Trung chuyển thế Chuỗi 3 Bước: Tiến Đinh Tấn - Xoay Trục - Phóng Tiêu Thủ.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_22_3.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    }
  ]
},
{
  "id": "TLD-023",
  "code": "TLD_23",
  "name": "Chiêu 23: Lùi Chân Phải Triệt Quyền Nghịch Hướng",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 23,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Lùi Chân Phải Triệt Quyền Nghịch Hướng.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "23",
      "desc": "HLV Lương Thành Trung thị phạm: Lùi Chân Phải Triệt Quyền Nghịch Hướng.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_23.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-024",
  "code": "TLD_24",
  "name": "Chiêu 24: Tiến Chân Phải Song Bàng Thủ Đẩy Cao",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 24,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Chân Phải Song Bàng Thủ Đẩy Cao.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "24",
      "desc": "HLV Lương Thành Trung thị phạm: Tiến Chân Phải Song Bàng Thủ Đẩy Cao.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_24.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-025",
  "code": "TLD_25",
  "name": "Chiêu 25: Lùi Chân Phải Đè Chưởng Phục Trung Tâm",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 25,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Lùi Chân Phải Đè Chưởng Phục Trung Tâm.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "25",
      "desc": "HLV Lương Thành Trung thị phạm: Lùi Chân Phải Đè Chưởng Phục Trung Tâm.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_25.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-026",
  "code": "TLD_26",
  "name": "Chiêu 26: Chuỗi 3 Bước: Hoành Thoái Lướt Chân - Đấm Đứng Liên Hoàn",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 26,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Chuỗi 3 Bước: Hoành Thoái Lướt Chân - Đấm Đứng Liên Hoàn.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "26.1",
      "desc": "Bước 1: HLV Lương Thành Trung chuyển thế Chuỗi 3 Bước: Hoành Thoái Lướt Chân - Đấm Đứng Liên Hoàn.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_26_1.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    },
    {
      "stepNo": "26.2",
      "desc": "Bước 2: HLV Lương Thành Trung chuyển thế Chuỗi 3 Bước: Hoành Thoái Lướt Chân - Đấm Đứng Liên Hoàn.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_26_2.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    },
    {
      "stepNo": "26.3",
      "desc": "Bước 3: HLV Lương Thành Trung chuyển thế Chuỗi 3 Bước: Hoành Thoái Lướt Chân - Đấm Đứng Liên Hoàn.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_26_3.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    }
  ]
},
{
  "id": "TLD-027",
  "code": "TLD_27",
  "name": "Chiêu 27: Tiến Chân Phải Hổ Khẩu Chộp Yết Hầu",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 27,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Chân Phải Hổ Khẩu Chộp Yết Hầu.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "27",
      "desc": "HLV Lương Thành Trung thị phạm: Tiến Chân Phải Hổ Khẩu Chộp Yết Hầu.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_27.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-028",
  "code": "TLD_28",
  "name": "Chiêu 28: Lùi Chân Phải Tản Thủ Triệt Kình",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 28,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Lùi Chân Phải Tản Thủ Triệt Kình.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "28",
      "desc": "HLV Lương Thành Trung thị phạm: Lùi Chân Phải Tản Thủ Triệt Kình.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_28.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-029",
  "code": "TLD_29",
  "name": "Chiêu 29: Tiến Chân Phải Đâm Thung Kình Xuyên Tâm",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 29,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Chân Phải Đâm Thung Kình Xuyên Tâm.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "29",
      "desc": "HLV Lương Thành Trung thị phạm: Tiến Chân Phải Đâm Thung Kình Xuyên Tâm.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_29.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-030",
  "code": "TLD_30",
  "name": "Chiêu 30: Lùi Chân Phải Vặn Thân Chém Cạnh Bàn Tay",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 30,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Lùi Chân Phải Vặn Thân Chém Cạnh Bàn Tay.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Trung cấp",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "30",
      "desc": "HLV Lương Thành Trung thị phạm: Lùi Chân Phải Vặn Thân Chém Cạnh Bàn Tay.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_30.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-031",
  "code": "TLD_31",
  "name": "Chiêu 31: Tiến Chân Phải Khóa Cổ Tay & Bẻ Khớp",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 31,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Chân Phải Khóa Cổ Tay & Bẻ Khớp.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "31",
      "desc": "HLV Lương Thành Trung thị phạm: Tiến Chân Phải Khóa Cổ Tay & Bẻ Khớp.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_31.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-032",
  "code": "TLD_32",
  "name": "Chiêu 32: Lùi Chân Phải Kéo Chân Tròn Thoát Hiểm",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 32,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Lùi Chân Phải Kéo Chân Tròn Thoát Hiểm.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "32",
      "desc": "HLV Lương Thành Trung thị phạm: Lùi Chân Phải Kéo Chân Tròn Thoát Hiểm.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_32.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-033",
  "code": "TLD_33",
  "name": "Chiêu 33: Tiến Chân Phải Phóng Đơn Chỉ Bắn Tỉa",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 33,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Chân Phải Phóng Đơn Chỉ Bắn Tỉa.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "33",
      "desc": "HLV Lương Thành Trung thị phạm: Tiến Chân Phải Phóng Đơn Chỉ Bắn Tỉa.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_33.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-034",
  "code": "TLD_34",
  "name": "Chiêu 34: Tiến Lùi 2 Bước: Vẩy Cổ Tay & Đánh Đáy Chưởng",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 34,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Lùi 2 Bước: Vẩy Cổ Tay & Đánh Đáy Chưởng.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "34.1",
      "desc": "Bước 1: HLV Lương Thành Trung chuyển thế Tiến Lùi 2 Bước: Vẩy Cổ Tay & Đánh Đáy Chưởng.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_34_1.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    },
    {
      "stepNo": "34.2",
      "desc": "Bước 2: HLV Lương Thành Trung chuyển thế Tiến Lùi 2 Bước: Vẩy Cổ Tay & Đánh Đáy Chưởng.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_34_2.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    }
  ]
},
{
  "id": "TLD-035",
  "code": "TLD_35",
  "name": "Chiêu 35: Lùi Chân Phải Nhập Nội Đánh Chỏ Trái",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 35,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Lùi Chân Phải Nhập Nội Đánh Chỏ Trái.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "35",
      "desc": "HLV Lương Thành Trung thị phạm: Lùi Chân Phải Nhập Nội Đánh Chỏ Trái.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_35.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-036",
  "code": "TLD_36",
  "name": "Chiêu 36: Tiến Chân Phải Đánh Chỏ Phải Xuyên Ngực",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 36,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Chân Phải Đánh Chỏ Phải Xuyên Ngực.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "36",
      "desc": "HLV Lương Thành Trung thị phạm: Tiến Chân Phải Đánh Chỏ Phải Xuyên Ngực.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_36.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-037",
  "code": "TLD_37",
  "name": "Chiêu 37: Tiến Lùi 2 Bước: Đỡ Thượng Bàn & Chưởng Hạ Tiêu",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 37,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Lùi 2 Bước: Đỡ Thượng Bàn & Chưởng Hạ Tiêu.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "37.1",
      "desc": "Bước 1: HLV Lương Thành Trung chuyển thế Tiến Lùi 2 Bước: Đỡ Thượng Bàn & Chưởng Hạ Tiêu.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_37_1.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    },
    {
      "stepNo": "37.2",
      "desc": "Bước 2: HLV Lương Thành Trung chuyển thế Tiến Lùi 2 Bước: Đỡ Thượng Bàn & Chưởng Hạ Tiêu.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_37_2.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    }
  ]
},
{
  "id": "TLD-038",
  "code": "TLD_38",
  "name": "Chiêu 38: Tiến Lùi 2 Bước: Gạt Bàng Thủ & Đấm Móc",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 38,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Lùi 2 Bước: Gạt Bàng Thủ & Đấm Móc.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "38.1",
      "desc": "Bước 1: HLV Lương Thành Trung chuyển thế Tiến Lùi 2 Bước: Gạt Bàng Thủ & Đấm Móc.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_38_1.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    },
    {
      "stepNo": "38.2",
      "desc": "Bước 2: HLV Lương Thành Trung chuyển thế Tiến Lùi 2 Bước: Gạt Bàng Thủ & Đấm Móc.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_38_2.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    }
  ]
},
{
  "id": "TLD-039",
  "code": "TLD_39",
  "name": "Chiêu 39: Tiến Lùi 2 Bước: Nhảy Lướt Tấn & Song Phách Chưởng",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 39,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Lùi 2 Bước: Nhảy Lướt Tấn & Song Phách Chưởng.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "39.1",
      "desc": "Bước 1: HLV Lương Thành Trung chuyển thế Tiến Lùi 2 Bước: Nhảy Lướt Tấn & Song Phách Chưởng.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_39_1.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    },
    {
      "stepNo": "39.2",
      "desc": "Bước 2: HLV Lương Thành Trung chuyển thế Tiến Lùi 2 Bước: Nhảy Lướt Tấn & Song Phách Chưởng.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_39_2.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    }
  ]
},
{
  "id": "TLD-040",
  "code": "TLD_40",
  "name": "Chiêu 40: Tiến Lùi 2 Bước: Khoa Chân Vòng & Tiêu Thủ Kép",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 40,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Lùi 2 Bước: Khoa Chân Vòng & Tiêu Thủ Kép.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "40.1",
      "desc": "Bước 1: HLV Lương Thành Trung chuyển thế Tiến Lùi 2 Bước: Khoa Chân Vòng & Tiêu Thủ Kép.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_40_1.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    },
    {
      "stepNo": "40.2",
      "desc": "Bước 2: HLV Lương Thành Trung chuyển thế Tiến Lùi 2 Bước: Khoa Chân Vòng & Tiêu Thủ Kép.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_40_2.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    }
  ]
},
{
  "id": "TLD-041",
  "code": "TLD_41",
  "name": "Chiêu 41: Lùi Chân Phải Vỗ Chưởng Đè Chân",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 41,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Lùi Chân Phải Vỗ Chưởng Đè Chân.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "41",
      "desc": "HLV Lương Thành Trung thị phạm: Lùi Chân Phải Vỗ Chưởng Đè Chân.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_41.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-042",
  "code": "TLD_42",
  "name": "Chiêu 42: Tiến Chân Phải Đấm Thẳng Đinh Tấn Phải",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 42,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Chân Phải Đấm Thẳng Đinh Tấn Phải.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "42",
      "desc": "HLV Lương Thành Trung thị phạm: Tiến Chân Phải Đấm Thẳng Đinh Tấn Phải.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_42.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-043",
  "code": "TLD_43",
  "name": "Chiêu 43: Lùi Chân Phải Vặn Hông Trảm Thủ Nghịch",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 43,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Lùi Chân Phải Vặn Hông Trảm Thủ Nghịch.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "43",
      "desc": "HLV Lương Thành Trung thị phạm: Lùi Chân Phải Vặn Hông Trảm Thủ Nghịch.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_43.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-044",
  "code": "TLD_44",
  "name": "Chiêu 44: Tiến Chân Phải Dậm Chân Triệt Hạ Bàn",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 44,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Chân Phải Dậm Chân Triệt Hạ Bàn.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "44",
      "desc": "HLV Lương Thành Trung thị phạm: Tiến Chân Phải Dậm Chân Triệt Hạ Bàn.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_44.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-045",
  "code": "TLD_45",
  "name": "Chiêu 45: Lùi Chân Phải Khép Gối Bảo Vệ Đan Điền",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 45,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Lùi Chân Phải Khép Gối Bảo Vệ Đan Điền.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "45",
      "desc": "HLV Lương Thành Trung thị phạm: Lùi Chân Phải Khép Gối Bảo Vệ Đan Điền.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_45.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-046",
  "code": "TLD_46",
  "name": "Chiêu 46: Tiến Lùi 2 Bước: Song Thủ Giao Thoa Đè Kình",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 46,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Lùi 2 Bước: Song Thủ Giao Thoa Đè Kình.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "46.1",
      "desc": "Bước 1: HLV Lương Thành Trung chuyển thế Tiến Lùi 2 Bước: Song Thủ Giao Thoa Đè Kình.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_46_1.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    },
    {
      "stepNo": "46.2",
      "desc": "Bước 2: HLV Lương Thành Trung chuyển thế Tiến Lùi 2 Bước: Song Thủ Giao Thoa Đè Kình.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_46_2.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    }
  ]
},
{
  "id": "TLD-047",
  "code": "TLD_47",
  "name": "Chiêu 47: Tiến Chân Phải Đánh Chưởng Lật Ngửa",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 47,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Chân Phải Đánh Chưởng Lật Ngửa.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "47",
      "desc": "HLV Lương Thành Trung thị phạm: Tiến Chân Phải Đánh Chưởng Lật Ngửa.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_47.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-048",
  "code": "TLD_48",
  "name": "Chiêu 48: Lùi Chân Phải Quét Gót Cước Vòng",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 48,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Lùi Chân Phải Quét Gót Cước Vòng.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "48",
      "desc": "HLV Lương Thành Trung thị phạm: Lùi Chân Phải Quét Gót Cước Vòng.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_48.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-049",
  "code": "TLD_49",
  "name": "Chiêu 49: Tiến Chân Phải Đấm Bồi Trực Diện",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 49,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Chân Phải Đấm Bồi Trực Diện.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "49",
      "desc": "HLV Lương Thành Trung thị phạm: Tiến Chân Phải Đấm Bồi Trực Diện.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_49.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-050",
  "code": "TLD_50",
  "name": "Chiêu 50: Lùi Chân Phải Thu Thế Kiềm Dương Tấn",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 50,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Lùi Chân Phải Thu Thế Kiềm Dương Tấn.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "50",
      "desc": "HLV Lương Thành Trung thị phạm: Lùi Chân Phải Thu Thế Kiềm Dương Tấn.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_50.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-051",
  "code": "TLD_51",
  "name": "Chiêu 51: Tiến Chân Phải Xỉa Bàn Tay Xà Lướt",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 51,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Chân Phải Xỉa Bàn Tay Xà Lướt.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "51",
      "desc": "HLV Lương Thành Trung thị phạm: Tiến Chân Phải Xỉa Bàn Tay Xà Lướt.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_51.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-052",
  "code": "TLD_52",
  "name": "Chiêu 52: Lùi Chân Phải Bàng Thủ Vặn Trục 45 Độ",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 52,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Lùi Chân Phải Bàng Thủ Vặn Trục 45 Độ.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "52",
      "desc": "HLV Lương Thành Trung thị phạm: Lùi Chân Phải Bàng Thủ Vặn Trục 45 Độ.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_52.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-053",
  "code": "TLD_53",
  "name": "Chiêu 53: Tiến Chân Phải Đánh Song Quyền Ngang Tai",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 53,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Chân Phải Đánh Song Quyền Ngang Tai.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "53",
      "desc": "HLV Lương Thành Trung thị phạm: Tiến Chân Phải Đánh Song Quyền Ngang Tai.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_53.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-054",
  "code": "TLD_54",
  "name": "Chiêu 54: Lùi Chân Phải Cắt Chưởng Ngang Sườn",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 54,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Lùi Chân Phải Cắt Chưởng Ngang Sườn.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "54",
      "desc": "HLV Lương Thành Trung thị phạm: Lùi Chân Phải Cắt Chưởng Ngang Sườn.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_54.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-055",
  "code": "TLD_55",
  "name": "Chiêu 55: Tiến Lùi 2 Bước: Khóa Tay Áp Sát Thúc Cùi Chỏ",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 55,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Tiến Lùi 2 Bước: Khóa Tay Áp Sát Thúc Cùi Chỏ.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "55.1",
      "desc": "Bước 1: HLV Lương Thành Trung chuyển thế Tiến Lùi 2 Bước: Khóa Tay Áp Sát Thúc Cùi Chỏ.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_55_1.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    },
    {
      "stepNo": "55.2",
      "desc": "Bước 2: HLV Lương Thành Trung chuyển thế Tiến Lùi 2 Bước: Khóa Tay Áp Sát Thúc Cùi Chỏ.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_55_2.png",
      "keypoints": [
        "Nhịp nhàng liên hoàn",
        "Cùi chỏ giữ vững trung lộ",
        "Chân lướt không nhấc cao"
      ]
    }
  ]
},
{
  "id": "TLD-056",
  "code": "TLD_56",
  "name": "Chiêu 56: Đại Kết Bài: Đứng Kiềm Dương Tấn Phát Kình Toàn Thân",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 56,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Bộ pháp tiến lùi biến hóa kết hợp thủ pháp Vịnh Xuân chính tông: Đại Kết Bài: Đứng Kiềm Dương Tấn Phát Kình Toàn Thân.",
  "stances": [
    "Tiến Lùi Bên Phải",
    "Đinh Tấn",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Thủ Pháp Tiến Lùi",
    "Quyền Pháp",
    "Chưởng Pháp"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "56",
      "desc": "HLV Lương Thành Trung thị phạm: Đại Kết Bài: Đứng Kiềm Dương Tấn Phát Kình Toàn Thân.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_56.png",
      "keypoints": [
        "Bước ngắn linh hoạt",
        "Trọng tâm chuyển tiếp mượt mà",
        "Bảo vệ kín kẽ hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLD-057",
  "code": "TLD_57",
  "name": "★ Thu Thức Bái Tổ Hoàn Tất Bài 108 Tiến Lùi Đơn",
  "formId": "06-108-tien-lui-don",
  "formName": "Bài 6: Bài 108 Tiến Lùi Bên Phải (Đơn Luyện)",
  "order": 57,
  "instructor": "HLV Lương Thành Trung",
  "summary": "Thu chân về Tấn Kiềm Dương, hai tay chắp ngang ngực cúi chào tạ ơn sư môn.",
  "stances": [
    "Nhị Tự Kiềm Dương Tấn"
  ],
  "hands": [
    "Bái Tổ Thu Quyền"
  ],
  "targetZones": [
    "Trung Bàn"
  ],
  "difficulty": "Cơ bản",
  "isNarrowStance": true,
  "isTwoPerson": false,
  "steps": [
    {
      "stepNo": "1b",
      "desc": "HLV Lương Thành Trung thu chân bái tổ hoàn tất toàn bộ 56 chiêu thức tiến lùi.",
      "imgUrl": "/assets/images/forms/06_108_tien_lui_don/tld_1b.png",
      "keypoints": [
        "Khí trầm đan điền",
        "Tâm định tĩnh",
        "Kính cẩn tạ ơn sư môn"
      ]
    }
  ]
},
];

// ============================================================================
// DỮ LIỆU BÀI 7: BÀI 108 TIẾN LÙI ĐỐI LUYỆN - BÊN PHẢI
// Thị phạm: HLV Đỗ Quốc Khánh (A - Bên Phải) & HLV Đỗ Chiến Thắng (B - Bên Trái)
// Nguồn: Sách GS.TS Nguyễn Mạnh Nhâm (2012) - Trang scan 83 đến 91
// Bóc tách đối soát 100% hình ảnh nguyên bản, chuẩn nhãn dưới bàn chân
// ============================================================================
export const TIEN_LUI_DOI_108_TECHNIQUES: Technique[] = [
{
  "id": "TLDOI-000",
  "code": "TLDOI_00",
  "name": "★ Nghi Thức Bái Tổ Đối Luyện Tiến Lùi (Thân Trên Thẳng)",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 0,
  "instructor": "HLV Đỗ Quốc Khánh (A - Bên Phải) & HLV Đỗ Chiến Thắng (B - Bên Trái)",
  "summary": "Hai võ sư A và B đứng thẳng đối diện, cung kính cúi đầu bái tổ sư môn, chuẩn bị tiến hành bài tập đối kháng tiến lùi đỉnh cao.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Nhị Tự Kiềm Dương Tấn"
  ],
  "hands": [
    "Bái Tổ Đối Luyện",
    "Thu Quyền Sát Nách"
  ],
  "targetZones": [
    "Trung Bàn"
  ],
  "difficulty": "Cơ bản",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) đứng đối diện",
    "defender": "HLV Đỗ Chiến Thắng (B) bái tổ cung kính",
    "tactics": "Tâm thế hòa ái, linh giác dán dính, chuẩn bị nhập cuộc"
  },
  "steps": [
    {
      "stepNo": "0",
      "desc": "A và B đứng thẳng người bái tổ cung kính trước khi đối luyện.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_0.png",
      "keypoints": [
        "Mắt nhìn thẳng đối phương",
        "Tâm định tĩnh",
        "Kính cẩn tôn sư trọng đạo"
      ]
    }
  ]
},
{
  "id": "TLDOI-001",
  "code": "TLDOI_01",
  "name": "Chiêu 1: A Tiến Đấm Thái Dương - B Tiến Xỉa Tam Giác Đỡ",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 1,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Tiến Đấm Thái Dương - B Tiến Xỉa Tam Giác Đỡ.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Tiến Đấm Thái Dương - B Tiến Xỉa Tam Giác Đỡ"
  },
  "steps": [
    {
      "stepNo": "1",
      "desc": "A và B thị phạm đối kháng: A Tiến Đấm Thái Dương - B Tiến Xỉa Tam Giác Đỡ.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_1.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-002",
  "code": "TLDOI_02",
  "name": "Chiêu 2: A Bước Đấm Thẳng Phải - B Kéo Chân Trái Đỡ Đòn",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 2,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Bước Đấm Thẳng Phải - B Kéo Chân Trái Đỡ Đòn.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Bước Đấm Thẳng Phải - B Kéo Chân Trái Đỡ Đòn"
  },
  "steps": [
    {
      "stepNo": "2",
      "desc": "A và B thị phạm đối kháng: A Bước Đấm Thẳng Phải - B Kéo Chân Trái Đỡ Đòn.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_2.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-003",
  "code": "TLDOI_03",
  "name": "Chiêu 3: A Lùi Đấm Trái - B Bước Lên Đỡ & Chưởng Sườn",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 3,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Lùi Đấm Trái - B Bước Lên Đỡ & Chưởng Sườn.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Lùi Đấm Trái - B Bước Lên Đỡ & Chưởng Sườn"
  },
  "steps": [
    {
      "stepNo": "3",
      "desc": "A và B thị phạm đối kháng: A Lùi Đấm Trái - B Bước Lên Đỡ & Chưởng Sườn.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_3.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-004",
  "code": "TLDOI_04",
  "name": "Chiêu 4: A Bước Đấm Phải - B Kéo Chân Bàng Thủ & Thu Quyền",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 4,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Bước Đấm Phải - B Kéo Chân Bàng Thủ & Thu Quyền.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Bước Đấm Phải - B Kéo Chân Bàng Thủ & Thu Quyền"
  },
  "steps": [
    {
      "stepNo": "4",
      "desc": "A và B thị phạm đối kháng: A Bước Đấm Phải - B Kéo Chân Bàng Thủ & Thu Quyền.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_4.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-005",
  "code": "TLDOI_05",
  "name": "Chiêu 5: A Lùi Đấm Thẳng Trái - B Bước Lên Đánh Hai Quyền Hạ",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 5,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Lùi Đấm Thẳng Trái - B Bước Lên Đánh Hai Quyền Hạ.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Lùi Đấm Thẳng Trái - B Bước Lên Đánh Hai Quyền Hạ"
  },
  "steps": [
    {
      "stepNo": "5",
      "desc": "A và B thị phạm đối kháng: A Lùi Đấm Thẳng Trái - B Bước Lên Đánh Hai Quyền Hạ.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_5.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-006",
  "code": "TLDOI_06",
  "name": "Chiêu 6: A Bước Đấm Phải - B Kéo Chân Xỉa Song Xà Ra Trước",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 6,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Bước Đấm Phải - B Kéo Chân Xỉa Song Xà Ra Trước.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Bước Đấm Phải - B Kéo Chân Xỉa Song Xà Ra Trước"
  },
  "steps": [
    {
      "stepNo": "6",
      "desc": "A và B thị phạm đối kháng: A Bước Đấm Phải - B Kéo Chân Xỉa Song Xà Ra Trước.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_6.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-007",
  "code": "TLDOI_07",
  "name": "Chiêu 7: A Lùi Đấm Trái - B Bước Lên Đánh Hai Tay Dưới Lên",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 7,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Lùi Đấm Trái - B Bước Lên Đánh Hai Tay Dưới Lên.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Lùi Đấm Trái - B Bước Lên Đánh Hai Tay Dưới Lên"
  },
  "steps": [
    {
      "stepNo": "7",
      "desc": "A và B thị phạm đối kháng: A Lùi Đấm Trái - B Bước Lên Đánh Hai Tay Dưới Lên.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_7.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-008",
  "code": "TLDOI_08",
  "name": "Chiêu 8: A Bước Đấm Phải - B Kéo Chân Vặn Cẳng Tay Triệt Kình",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 8,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Bước Đấm Phải - B Kéo Chân Vặn Cẳng Tay Triệt Kình.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Bước Đấm Phải - B Kéo Chân Vặn Cẳng Tay Triệt Kình"
  },
  "steps": [
    {
      "stepNo": "8",
      "desc": "A và B thị phạm đối kháng: A Bước Đấm Phải - B Kéo Chân Vặn Cẳng Tay Triệt Kình.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_8.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-009",
  "code": "TLDOI_09",
  "name": "Chiêu 9: A Tiến Đấm Bồi - B Tiến Điệp Chưởng Đánh Bật",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 9,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Tiến Đấm Bồi - B Tiến Điệp Chưởng Đánh Bật.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Tiến Đấm Bồi - B Tiến Điệp Chưởng Đánh Bật"
  },
  "steps": [
    {
      "stepNo": "9",
      "desc": "A và B thị phạm đối kháng: A Tiến Đấm Bồi - B Tiến Điệp Chưởng Đánh Bật.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_9.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-010",
  "code": "TLDOI_10",
  "name": "Chiêu 10: A Vồ Long Trảo - B Lùi Bàng Thủ Khóa Cổ Tay",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 10,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Vồ Long Trảo - B Lùi Bàng Thủ Khóa Cổ Tay.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Vồ Long Trảo - B Lùi Bàng Thủ Khóa Cổ Tay"
  },
  "steps": [
    {
      "stepNo": "10",
      "desc": "A và B thị phạm đối kháng: A Vồ Long Trảo - B Lùi Bàng Thủ Khóa Cổ Tay.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_10.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-011",
  "code": "TLDOI_11",
  "name": "Chiêu 11: A Thúc Gối Nhọn - B Hạ Chưởng Chặn Khớp Gối",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 11,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Thúc Gối Nhọn - B Hạ Chưởng Chặn Khớp Gối.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Thúc Gối Nhọn - B Hạ Chưởng Chặn Khớp Gối"
  },
  "steps": [
    {
      "stepNo": "11",
      "desc": "A và B thị phạm đối kháng: A Thúc Gối Nhọn - B Hạ Chưởng Chặn Khớp Gối.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_11.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-012",
  "code": "TLDOI_12",
  "name": "Chiêu 12: A Đấm Móc Nghịch - B Hoành Thoái Né Đòn Vỗ Chưởng",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 12,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Đấm Móc Nghịch - B Hoành Thoái Né Đòn Vỗ Chưởng.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Đấm Móc Nghịch - B Hoành Thoái Né Đòn Vỗ Chưởng"
  },
  "steps": [
    {
      "stepNo": "12",
      "desc": "A và B thị phạm đối kháng: A Đấm Móc Nghịch - B Hoành Thoái Né Đòn Vỗ Chưởng.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_12.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-013",
  "code": "TLDOI_13",
  "name": "Chiêu 13: A Quét Chân Hạ Bàn - B Nhấc Gối Nhảy Lướt Đấm Bồi",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 13,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Quét Chân Hạ Bàn - B Nhấc Gối Nhảy Lướt Đấm Bồi.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Quét Chân Hạ Bàn - B Nhấc Gối Nhảy Lướt Đấm Bồi"
  },
  "steps": [
    {
      "stepNo": "13",
      "desc": "A và B thị phạm đối kháng: A Quét Chân Hạ Bàn - B Nhấc Gối Nhảy Lướt Đấm Bồi.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_13.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-014",
  "code": "TLDOI_14",
  "name": "Chiêu 14: A Áp Sát Cầm Nã - B Thốn Kình Rung Giật 1 Tấc Bật Xa",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 14,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Áp Sát Cầm Nã - B Thốn Kình Rung Giật 1 Tấc Bật Xa.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Áp Sát Cầm Nã - B Thốn Kình Rung Giật 1 Tấc Bật Xa"
  },
  "steps": [
    {
      "stepNo": "14",
      "desc": "A và B thị phạm đối kháng: A Áp Sát Cầm Nã - B Thốn Kình Rung Giật 1 Tấc Bật Xa.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_14.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-015",
  "code": "TLDOI_15",
  "name": "Chiêu 15: A Phóng Tiêu Thủ - B Đỡ Lan Thủ Bẻ Khóa Khuỷu",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 15,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Phóng Tiêu Thủ - B Đỡ Lan Thủ Bẻ Khóa Khuỷu.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Phóng Tiêu Thủ - B Đỡ Lan Thủ Bẻ Khóa Khuỷu"
  },
  "steps": [
    {
      "stepNo": "15",
      "desc": "A và B thị phạm đối kháng: A Phóng Tiêu Thủ - B Đỡ Lan Thủ Bẻ Khóa Khuỷu.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_15.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-016",
  "code": "TLDOI_16",
  "name": "Chiêu 16: Chuỗi 2 Bước: A Đấm Chéo - B Tiến Bàng Thủ & Triệt Quyền",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 16,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: Chuỗi 2 Bước: A Đấm Chéo - B Tiến Bàng Thủ & Triệt Quyền.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "Chuỗi 2 Bước: A Đấm Chéo - B Tiến Bàng Thủ & Triệt Quyền"
  },
  "steps": [
    {
      "stepNo": "16.1",
      "desc": "Pha 1: Chuỗi 2 Bước: A Đấm Chéo - B Tiến Bàng Thủ & Triệt Quyền.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_16_1.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    },
    {
      "stepNo": "16.2",
      "desc": "Pha 2: Chuỗi 2 Bước: A Đấm Chéo - B Tiến Bàng Thủ & Triệt Quyền.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_16_2.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    }
  ]
},
{
  "id": "TLDOI-017",
  "code": "TLDOI_17",
  "name": "Chiêu 17: Chuỗi 2 Bước: A Đấm Xuyên - B Luồn Tay Phục Đè Trung Lộ",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 17,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: Chuỗi 2 Bước: A Đấm Xuyên - B Luồn Tay Phục Đè Trung Lộ.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "Chuỗi 2 Bước: A Đấm Xuyên - B Luồn Tay Phục Đè Trung Lộ"
  },
  "steps": [
    {
      "stepNo": "17.1",
      "desc": "Pha 1: Chuỗi 2 Bước: A Đấm Xuyên - B Luồn Tay Phục Đè Trung Lộ.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_17_1.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    },
    {
      "stepNo": "17.2",
      "desc": "Pha 2: Chuỗi 2 Bước: A Đấm Xuyên - B Luồn Tay Phục Đè Trung Lộ.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_17_2.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    }
  ]
},
{
  "id": "TLDOI-018",
  "code": "TLDOI_18",
  "name": "Chiêu 18: Chuỗi 2 Bước: A Thọc Sườn - B Chặn Gối & Trảm Cổ",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 18,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: Chuỗi 2 Bước: A Thọc Sườn - B Chặn Gối & Trảm Cổ.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "Chuỗi 2 Bước: A Thọc Sườn - B Chặn Gối & Trảm Cổ"
  },
  "steps": [
    {
      "stepNo": "18.1",
      "desc": "Pha 1: Chuỗi 2 Bước: A Thọc Sườn - B Chặn Gối & Trảm Cổ.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_18_1.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    },
    {
      "stepNo": "18.2",
      "desc": "Pha 2: Chuỗi 2 Bước: A Thọc Sườn - B Chặn Gối & Trảm Cổ.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_18_2.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    }
  ]
},
{
  "id": "TLDOI-019",
  "code": "TLDOI_19",
  "name": "Chiêu 19: A Đấm Vòng Cầu - B Hoành Thoái Né Vỗ Chấn Thủy",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 19,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Đấm Vòng Cầu - B Hoành Thoái Né Vỗ Chấn Thủy.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Đấm Vòng Cầu - B Hoành Thoái Né Vỗ Chấn Thủy"
  },
  "steps": [
    {
      "stepNo": "19",
      "desc": "A và B thị phạm đối kháng: A Đấm Vòng Cầu - B Hoành Thoái Né Vỗ Chấn Thủy.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_19.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-020",
  "code": "TLDOI_20",
  "name": "Chiêu 20: Chuỗi 2 Bước: A Vồ Trảo Hai Tay - B Khóa Tay Bẻ Khớp Ngược",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 20,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: Chuỗi 2 Bước: A Vồ Trảo Hai Tay - B Khóa Tay Bẻ Khớp Ngược.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "Chuỗi 2 Bước: A Vồ Trảo Hai Tay - B Khóa Tay Bẻ Khớp Ngược"
  },
  "steps": [
    {
      "stepNo": "20.1",
      "desc": "Pha 1: Chuỗi 2 Bước: A Vồ Trảo Hai Tay - B Khóa Tay Bẻ Khớp Ngược.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_20_1.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    },
    {
      "stepNo": "20.2",
      "desc": "Pha 2: Chuỗi 2 Bước: A Vồ Trảo Hai Tay - B Khóa Tay Bẻ Khớp Ngược.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_20_2.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    }
  ]
},
{
  "id": "TLDOI-021",
  "code": "TLDOI_21",
  "name": "Chiêu 21: Chuỗi 2 Bước: A Quàng Cổ - B Thúc Cùi Chỏ Vào Mạng Sườn",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 21,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: Chuỗi 2 Bước: A Quàng Cổ - B Thúc Cùi Chỏ Vào Mạng Sườn.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "Chuỗi 2 Bước: A Quàng Cổ - B Thúc Cùi Chỏ Vào Mạng Sườn"
  },
  "steps": [
    {
      "stepNo": "21.1",
      "desc": "Pha 1: Chuỗi 2 Bước: A Quàng Cổ - B Thúc Cùi Chỏ Vào Mạng Sườn.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_21_1.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    },
    {
      "stepNo": "21.2",
      "desc": "Pha 2: Chuỗi 2 Bước: A Quàng Cổ - B Thúc Cùi Chỏ Vào Mạng Sườn.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_21_2.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    }
  ]
},
{
  "id": "TLDOI-022",
  "code": "TLDOI_22",
  "name": "Chiêu 22: Chuỗi 4 Bước Đỉnh Cao: A Tấn Công Dồn Dập - B Hóa Giải Liên Hoàn & Bẻ Khóa",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 22,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: Chuỗi 4 Bước Đỉnh Cao: A Tấn Công Dồn Dập - B Hóa Giải Liên Hoàn & Bẻ Khóa.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "Chuỗi 4 Bước Đỉnh Cao: A Tấn Công Dồn Dập - B Hóa Giải Liên Hoàn & Bẻ Khóa"
  },
  "steps": [
    {
      "stepNo": "22.1",
      "desc": "Pha 1: Chuỗi 4 Bước Đỉnh Cao: A Tấn Công Dồn Dập - B Hóa Giải Liên Hoàn & Bẻ Khóa.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_22_1.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    },
    {
      "stepNo": "22.2",
      "desc": "Pha 2: Chuỗi 4 Bước Đỉnh Cao: A Tấn Công Dồn Dập - B Hóa Giải Liên Hoàn & Bẻ Khóa.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_22_2.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    },
    {
      "stepNo": "22.3",
      "desc": "Pha 3: Chuỗi 4 Bước Đỉnh Cao: A Tấn Công Dồn Dập - B Hóa Giải Liên Hoàn & Bẻ Khóa.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_22_3.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    },
    {
      "stepNo": "22.4",
      "desc": "Pha 4: Chuỗi 4 Bước Đỉnh Cao: A Tấn Công Dồn Dập - B Hóa Giải Liên Hoàn & Bẻ Khóa.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_22_4.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    }
  ]
},
{
  "id": "TLDOI-023",
  "code": "TLDOI_23",
  "name": "Chiêu 23: A Đấm Thẳng Hạ Tiêu - B Đè Chưởng Ấn Bụng",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 23,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Đấm Thẳng Hạ Tiêu - B Đè Chưởng Ấn Bụng.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Đấm Thẳng Hạ Tiêu - B Đè Chưởng Ấn Bụng"
  },
  "steps": [
    {
      "stepNo": "23",
      "desc": "A và B thị phạm đối kháng: A Đấm Thẳng Hạ Tiêu - B Đè Chưởng Ấn Bụng.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_23.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-024",
  "code": "TLDOI_24",
  "name": "Chiêu 24: A Tạt Ngang - B Bàng Thủ Gạt Bay Đòn",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 24,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Tạt Ngang - B Bàng Thủ Gạt Bay Đòn.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Tạt Ngang - B Bàng Thủ Gạt Bay Đòn"
  },
  "steps": [
    {
      "stepNo": "24",
      "desc": "A và B thị phạm đối kháng: A Tạt Ngang - B Bàng Thủ Gạt Bay Đòn.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_24.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-025",
  "code": "TLDOI_25",
  "name": "Chiêu 25: A Đấm Bồi - B Đánh Đáy Chưởng Phản Công",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 25,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Đấm Bồi - B Đánh Đáy Chưởng Phản Công.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Nâng cao",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Đấm Bồi - B Đánh Đáy Chưởng Phản Công"
  },
  "steps": [
    {
      "stepNo": "25",
      "desc": "A và B thị phạm đối kháng: A Đấm Bồi - B Đánh Đáy Chưởng Phản Công.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_25.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-026",
  "code": "TLDOI_26",
  "name": "Chiêu 26: Chuỗi 3 Bước: A Lao Vào Cầm Nã - B Xoay Trục Bẻ Cổ Tay & Triệt Hạ Bàn",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 26,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: Chuỗi 3 Bước: A Lao Vào Cầm Nã - B Xoay Trục Bẻ Cổ Tay & Triệt Hạ Bàn.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "Chuỗi 3 Bước: A Lao Vào Cầm Nã - B Xoay Trục Bẻ Cổ Tay & Triệt Hạ Bàn"
  },
  "steps": [
    {
      "stepNo": "26.1",
      "desc": "Pha 1: Chuỗi 3 Bước: A Lao Vào Cầm Nã - B Xoay Trục Bẻ Cổ Tay & Triệt Hạ Bàn.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_26_1.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    },
    {
      "stepNo": "26.2",
      "desc": "Pha 2: Chuỗi 3 Bước: A Lao Vào Cầm Nã - B Xoay Trục Bẻ Cổ Tay & Triệt Hạ Bàn.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_26_2.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    },
    {
      "stepNo": "26.3",
      "desc": "Pha 3: Chuỗi 3 Bước: A Lao Vào Cầm Nã - B Xoay Trục Bẻ Cổ Tay & Triệt Hạ Bàn.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_26_3.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    }
  ]
},
{
  "id": "TLDOI-027",
  "code": "TLDOI_27",
  "name": "Chiêu 27: A Đấm Trực Diện - B Xỉa Song Thủ Đâm Mắt",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 27,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Đấm Trực Diện - B Xỉa Song Thủ Đâm Mắt.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Đấm Trực Diện - B Xỉa Song Thủ Đâm Mắt"
  },
  "steps": [
    {
      "stepNo": "27",
      "desc": "A và B thị phạm đối kháng: A Đấm Trực Diện - B Xỉa Song Thủ Đâm Mắt.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_27.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-028",
  "code": "TLDOI_28",
  "name": "Chiêu 28: A Gạt Tay - B Trượt Cùi Chỏ Đâm Ngực",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 28,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Gạt Tay - B Trượt Cùi Chỏ Đâm Ngực.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Gạt Tay - B Trượt Cùi Chỏ Đâm Ngực"
  },
  "steps": [
    {
      "stepNo": "28",
      "desc": "A và B thị phạm đối kháng: A Gạt Tay - B Trượt Cùi Chỏ Đâm Ngực.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_28.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-029",
  "code": "TLDOI_29",
  "name": "Chiêu 29: A Bước Đấm Móc - B Lùi Khoa Chân Bắt Cổ Tay",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 29,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Bước Đấm Móc - B Lùi Khoa Chân Bắt Cổ Tay.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Bước Đấm Móc - B Lùi Khoa Chân Bắt Cổ Tay"
  },
  "steps": [
    {
      "stepNo": "29",
      "desc": "A và B thị phạm đối kháng: A Bước Đấm Móc - B Lùi Khoa Chân Bắt Cổ Tay.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_29.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-030",
  "code": "TLDOI_30",
  "name": "Chiêu 30: A Lùi Đấm Phản - B Tiến Song Quyền Hạ Đo ván",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 30,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Lùi Đấm Phản - B Tiến Song Quyền Hạ Đo ván.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Lùi Đấm Phản - B Tiến Song Quyền Hạ Đo ván"
  },
  "steps": [
    {
      "stepNo": "30",
      "desc": "A và B thị phạm đối kháng: A Lùi Đấm Phản - B Tiến Song Quyền Hạ Đo ván.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_30.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-031",
  "code": "TLDOI_31",
  "name": "Chiêu 31: A Cắt Chưởng Ngang - B Nâng Bàng Thủ Chắn Mặt",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 31,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Cắt Chưởng Ngang - B Nâng Bàng Thủ Chắn Mặt.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Cắt Chưởng Ngang - B Nâng Bàng Thủ Chắn Mặt"
  },
  "steps": [
    {
      "stepNo": "31",
      "desc": "A và B thị phạm đối kháng: A Cắt Chưởng Ngang - B Nâng Bàng Thủ Chắn Mặt.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_31.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-032",
  "code": "TLDOI_32",
  "name": "Chiêu 32: A Đấm Thẳng - B Đánh Cạnh Bàn Tay Cắt Yết Hầu",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 32,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Đấm Thẳng - B Đánh Cạnh Bàn Tay Cắt Yết Hầu.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Đấm Thẳng - B Đánh Cạnh Bàn Tay Cắt Yết Hầu"
  },
  "steps": [
    {
      "stepNo": "32",
      "desc": "A và B thị phạm đối kháng: A Đấm Thẳng - B Đánh Cạnh Bàn Tay Cắt Yết Hầu.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_32.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-033",
  "code": "TLDOI_33",
  "name": "Chiêu 33: A Thúc Gối - B Dậm Cước Phá Khớp Gối",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 33,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Thúc Gối - B Dậm Cước Phá Khớp Gối.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Thúc Gối - B Dậm Cước Phá Khớp Gối"
  },
  "steps": [
    {
      "stepNo": "33",
      "desc": "A và B thị phạm đối kháng: A Thúc Gối - B Dậm Cước Phá Khớp Gối.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_33.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-034",
  "code": "TLDOI_34",
  "name": "Chiêu 34: Chuỗi 2 Bước: A Quét Hạ Bàn - B Nhảy Bật Né & Chưởng Đỉnh Đầu",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 34,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: Chuỗi 2 Bước: A Quét Hạ Bàn - B Nhảy Bật Né & Chưởng Đỉnh Đầu.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "Chuỗi 2 Bước: A Quét Hạ Bàn - B Nhảy Bật Né & Chưởng Đỉnh Đầu"
  },
  "steps": [
    {
      "stepNo": "34.1",
      "desc": "Pha 1: Chuỗi 2 Bước: A Quét Hạ Bàn - B Nhảy Bật Né & Chưởng Đỉnh Đầu.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_34_1.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    },
    {
      "stepNo": "34.2",
      "desc": "Pha 2: Chuỗi 2 Bước: A Quét Hạ Bàn - B Nhảy Bật Né & Chưởng Đỉnh Đầu.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_34_2.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    }
  ]
},
{
  "id": "TLDOI-035",
  "code": "TLDOI_35",
  "name": "Chiêu 35: A Áp Sát Khóa Thân - B Thốn Kình Đan Điền Hất Tung",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 35,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Áp Sát Khóa Thân - B Thốn Kình Đan Điền Hất Tung.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Áp Sát Khóa Thân - B Thốn Kình Đan Điền Hất Tung"
  },
  "steps": [
    {
      "stepNo": "35",
      "desc": "A và B thị phạm đối kháng: A Áp Sát Khóa Thân - B Thốn Kình Đan Điền Hất Tung.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_35.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-036",
  "code": "TLDOI_36",
  "name": "Chiêu 36: A Đấm Lao - B Vặn Hông Đỡ Gạt Chém Cổ",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 36,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Đấm Lao - B Vặn Hông Đỡ Gạt Chém Cổ.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Đấm Lao - B Vặn Hông Đỡ Gạt Chém Cổ"
  },
  "steps": [
    {
      "stepNo": "36",
      "desc": "A và B thị phạm đối kháng: A Đấm Lao - B Vặn Hông Đỡ Gạt Chém Cổ.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_36.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-037",
  "code": "TLDOI_37",
  "name": "Chiêu 37: Chuỗi 2 Bước: A Đấm Song Quyền - B Bẻ Khóa Khớp Khuỷu",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 37,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: Chuỗi 2 Bước: A Đấm Song Quyền - B Bẻ Khóa Khớp Khuỷu.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "Chuỗi 2 Bước: A Đấm Song Quyền - B Bẻ Khóa Khớp Khuỷu"
  },
  "steps": [
    {
      "stepNo": "37.1",
      "desc": "Pha 1: Chuỗi 2 Bước: A Đấm Song Quyền - B Bẻ Khóa Khớp Khuỷu.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_37_1.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    },
    {
      "stepNo": "37.2",
      "desc": "Pha 2: Chuỗi 2 Bước: A Đấm Song Quyền - B Bẻ Khóa Khớp Khuỷu.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_37_2.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    }
  ]
},
{
  "id": "TLDOI-038",
  "code": "TLDOI_38",
  "name": "Chiêu 38: Chuỗi 2 Bước: A Lao Vào Vật - B Đè Chưởng & Thúc Chỏ Sau",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 38,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: Chuỗi 2 Bước: A Lao Vào Vật - B Đè Chưởng & Thúc Chỏ Sau.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "Chuỗi 2 Bước: A Lao Vào Vật - B Đè Chưởng & Thúc Chỏ Sau"
  },
  "steps": [
    {
      "stepNo": "38.1",
      "desc": "Pha 1: Chuỗi 2 Bước: A Lao Vào Vật - B Đè Chưởng & Thúc Chỏ Sau.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_38_1.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    },
    {
      "stepNo": "38.2",
      "desc": "Pha 2: Chuỗi 2 Bước: A Lao Vào Vật - B Đè Chưởng & Thúc Chỏ Sau.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_38_2.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    }
  ]
},
{
  "id": "TLDOI-039",
  "code": "TLDOI_39",
  "name": "Chiêu 39: Chuỗi 2 Bước: A Đấm Bồi Bên Trái - B Chặn Tay & Đấm Mũi",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 39,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: Chuỗi 2 Bước: A Đấm Bồi Bên Trái - B Chặn Tay & Đấm Mũi.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "Chuỗi 2 Bước: A Đấm Bồi Bên Trái - B Chặn Tay & Đấm Mũi"
  },
  "steps": [
    {
      "stepNo": "39.1",
      "desc": "Pha 1: Chuỗi 2 Bước: A Đấm Bồi Bên Trái - B Chặn Tay & Đấm Mũi.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_39_1.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    },
    {
      "stepNo": "39.2",
      "desc": "Pha 2: Chuỗi 2 Bước: A Đấm Bồi Bên Trái - B Chặn Tay & Đấm Mũi.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_39_2.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    }
  ]
},
{
  "id": "TLDOI-040",
  "code": "TLDOI_40",
  "name": "Chiêu 40: Chuỗi 2 Bước: A Cắt Tay Trong - B Khóa Tay Ngoài Vặn Ngược",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 40,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: Chuỗi 2 Bước: A Cắt Tay Trong - B Khóa Tay Ngoài Vặn Ngược.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "Chuỗi 2 Bước: A Cắt Tay Trong - B Khóa Tay Ngoài Vặn Ngược"
  },
  "steps": [
    {
      "stepNo": "40.1",
      "desc": "Pha 1: Chuỗi 2 Bước: A Cắt Tay Trong - B Khóa Tay Ngoài Vặn Ngược.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_40_1.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    },
    {
      "stepNo": "40.2",
      "desc": "Pha 2: Chuỗi 2 Bước: A Cắt Tay Trong - B Khóa Tay Ngoài Vặn Ngược.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_40_2.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    }
  ]
},
{
  "id": "TLDOI-041",
  "code": "TLDOI_41",
  "name": "Chiêu 41: A Đấm Vòng - B Bàng Thủ Hóa Kình",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 41,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Đấm Vòng - B Bàng Thủ Hóa Kình.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Đấm Vòng - B Bàng Thủ Hóa Kình"
  },
  "steps": [
    {
      "stepNo": "41",
      "desc": "A và B thị phạm đối kháng: A Đấm Vòng - B Bàng Thủ Hóa Kình.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_41.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-042",
  "code": "TLDOI_42",
  "name": "Chiêu 42: A Thọc Bụng - B Hạ Chưởng Ép Khớp",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 42,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Thọc Bụng - B Hạ Chưởng Ép Khớp.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Thọc Bụng - B Hạ Chưởng Ép Khớp"
  },
  "steps": [
    {
      "stepNo": "42",
      "desc": "A và B thị phạm đối kháng: A Thọc Bụng - B Hạ Chưởng Ép Khớp.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_42.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-043",
  "code": "TLDOI_43",
  "name": "Chiêu 43: A Đấm Thái Dương - B Xỉa Tiêu Thủ Chặn Đòn",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 43,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Đấm Thái Dương - B Xỉa Tiêu Thủ Chặn Đòn.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Đấm Thái Dương - B Xỉa Tiêu Thủ Chặn Đòn"
  },
  "steps": [
    {
      "stepNo": "43",
      "desc": "A và B thị phạm đối kháng: A Đấm Thái Dương - B Xỉa Tiêu Thủ Chặn Đòn.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_43.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-044",
  "code": "TLDOI_44",
  "name": "Chiêu 44: A Quàng Cổ - B Cùi Chỏ Đâm Ngược Chấn Thủy",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 44,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Quàng Cổ - B Cùi Chỏ Đâm Ngược Chấn Thủy.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Quàng Cổ - B Cùi Chỏ Đâm Ngược Chấn Thủy"
  },
  "steps": [
    {
      "stepNo": "44",
      "desc": "A và B thị phạm đối kháng: A Quàng Cổ - B Cùi Chỏ Đâm Ngược Chấn Thủy.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_44.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-045",
  "code": "TLDOI_45",
  "name": "Chiêu 45: A Đấm Bồi - B Đánh Điệp Chưởng Đẩy Bật",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 45,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Đấm Bồi - B Đánh Điệp Chưởng Đẩy Bật.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Đấm Bồi - B Đánh Điệp Chưởng Đẩy Bật"
  },
  "steps": [
    {
      "stepNo": "45",
      "desc": "A và B thị phạm đối kháng: A Đấm Bồi - B Đánh Điệp Chưởng Đẩy Bật.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_45.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-046",
  "code": "TLDOI_46",
  "name": "Chiêu 46: Chuỗi 2 Bước: A Đấm Hai Tầm - B Song Phách Chưởng Đỡ Toàn Diện",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 46,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: Chuỗi 2 Bước: A Đấm Hai Tầm - B Song Phách Chưởng Đỡ Toàn Diện.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "Chuỗi 2 Bước: A Đấm Hai Tầm - B Song Phách Chưởng Đỡ Toàn Diện"
  },
  "steps": [
    {
      "stepNo": "46.1",
      "desc": "Pha 1: Chuỗi 2 Bước: A Đấm Hai Tầm - B Song Phách Chưởng Đỡ Toàn Diện.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_46_1.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    },
    {
      "stepNo": "46.2",
      "desc": "Pha 2: Chuỗi 2 Bước: A Đấm Hai Tầm - B Song Phách Chưởng Đỡ Toàn Diện.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_46_2.png",
      "keypoints": [
        "Chuyển biến mau lẹ",
        "Hóa giải mượn lực",
        "Bảo vệ kín kẽ trung môn"
      ]
    }
  ]
},
{
  "id": "TLDOI-047",
  "code": "TLDOI_47",
  "name": "Chiêu 47: A Cầm Nã - B Tháo Gỡ Bằng Cổ Tay Xoay Tròn",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 47,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Cầm Nã - B Tháo Gỡ Bằng Cổ Tay Xoay Tròn.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Cầm Nã - B Tháo Gỡ Bằng Cổ Tay Xoay Tròn"
  },
  "steps": [
    {
      "stepNo": "47",
      "desc": "A và B thị phạm đối kháng: A Cầm Nã - B Tháo Gỡ Bằng Cổ Tay Xoay Tròn.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_47.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-048",
  "code": "TLDOI_48",
  "name": "Chiêu 48: A Đấm Thẳng Mũi - B Than Thủ Nâng Đòn & Đấm Bồi",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 48,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Đấm Thẳng Mũi - B Than Thủ Nâng Đòn & Đấm Bồi.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Đấm Thẳng Mũi - B Than Thủ Nâng Đòn & Đấm Bồi"
  },
  "steps": [
    {
      "stepNo": "48",
      "desc": "A và B thị phạm đối kháng: A Đấm Thẳng Mũi - B Than Thủ Nâng Đòn & Đấm Bồi.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_48.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-049",
  "code": "TLDOI_49",
  "name": "Chiêu 49: A Đấm Hạ Bộ - B Phục Thủ Chắn & Đá Triệt",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 49,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Đấm Hạ Bộ - B Phục Thủ Chắn & Đá Triệt.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Đấm Hạ Bộ - B Phục Thủ Chắn & Đá Triệt"
  },
  "steps": [
    {
      "stepNo": "49",
      "desc": "A và B thị phạm đối kháng: A Đấm Hạ Bộ - B Phục Thủ Chắn & Đá Triệt.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_49.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-050",
  "code": "TLDOI_50",
  "name": "Chiêu 50: A Lao Người Ôm Chân - B Hạ Trọng Tâm Đè Gáy",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 50,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Lao Người Ôm Chân - B Hạ Trọng Tâm Đè Gáy.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Lao Người Ôm Chân - B Hạ Trọng Tâm Đè Gáy"
  },
  "steps": [
    {
      "stepNo": "50",
      "desc": "A và B thị phạm đối kháng: A Lao Người Ôm Chân - B Hạ Trọng Tâm Đè Gáy.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_50.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-051",
  "code": "TLDOI_51",
  "name": "Chiêu 51: A Đấm Móc Trái - B Hoành Thoái Vỗ Nách",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 51,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Đấm Móc Trái - B Hoành Thoái Vỗ Nách.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Đấm Móc Trái - B Hoành Thoái Vỗ Nách"
  },
  "steps": [
    {
      "stepNo": "51",
      "desc": "A và B thị phạm đối kháng: A Đấm Móc Trái - B Hoành Thoái Vỗ Nách.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_51.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-052",
  "code": "TLDOI_52",
  "name": "Chiêu 52: A Đấm Móc Phải - B Lướt Chân Chém Cổ",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 52,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Đấm Móc Phải - B Lướt Chân Chém Cổ.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Đấm Móc Phải - B Lướt Chân Chém Cổ"
  },
  "steps": [
    {
      "stepNo": "52",
      "desc": "A và B thị phạm đối kháng: A Đấm Móc Phải - B Lướt Chân Chém Cổ.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_52.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-053",
  "code": "TLDOI_53",
  "name": "Chiêu 53: A Song Quyền Lao Tới - B Song Bàng Thủ Đẩy Bật",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 53,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Song Quyền Lao Tới - B Song Bàng Thủ Đẩy Bật.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Song Quyền Lao Tới - B Song Bàng Thủ Đẩy Bật"
  },
  "steps": [
    {
      "stepNo": "53",
      "desc": "A và B thị phạm đối kháng: A Song Quyền Lao Tới - B Song Bàng Thủ Đẩy Bật.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_53.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-054",
  "code": "TLDOI_54",
  "name": "Chiêu 54: A Tung Đòn Quyết Định - B Thốn Kình Toàn Thân Hóa Giải & Khóa Chặt",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 54,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Đối kháng tiến lùi cự ly thực chiến A & B: A Tung Đòn Quyết Định - B Thốn Kình Toàn Thân Hóa Giải & Khóa Chặt.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Thủ",
    "Đối Kháng Tán Thủ",
    "Thốn Kình"
  ],
  "targetZones": [
    "Trung Bàn",
    "Thượng Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "HLV Đỗ Quốc Khánh (A) di chuyển tiến lùi áp lực",
    "defender": "HLV Đỗ Chiến Thắng (B) cảm ứng linh giác, triệt tiêu lực đòn và phản công",
    "tactics": "A Tung Đòn Quyết Định - B Thốn Kình Toàn Thân Hóa Giải & Khóa Chặt"
  },
  "steps": [
    {
      "stepNo": "54",
      "desc": "A và B thị phạm đối kháng: A Tung Đòn Quyết Định - B Thốn Kình Toàn Thân Hóa Giải & Khóa Chặt.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_54.png",
      "keypoints": [
        "Khoảng cách cự ly chuẩn",
        "Linh giác dán dính",
        "Phát lực thốn kình dứt khoát"
      ]
    }
  ]
},
{
  "id": "TLDOI-055",
  "code": "TLDOI_55",
  "name": "Chiêu 55: Cầm Nã Bẻ Cổ Tay & Triệt Hạ Bàn (Thực Hiện Như Hình 26)",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 55,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Thực hiện như động tác hình 26 (bước 26.1 và 26.2): Bắt chặt cổ tay đối phương, vặn bẻ khóa khớp và lướt chân triệt hạ bàn.",
  "stances": [
    "Tiến Lùi Đối Luyện",
    "Kiềm Dương Tấn"
  ],
  "hands": [
    "Cầm Nã Bẻ Cổ Tay"
  ],
  "targetZones": [
    "Trung Bàn",
    "Hạ Bàn"
  ],
  "difficulty": "Thượng thừa",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "A phát đòn lao vào cầm nã",
    "defender": "B xoay trục bẻ cổ tay và triệt hạ bàn",
    "tactics": "Dẫn chiếu tư liệu hình 26.1 và 26.2"
  },
  "steps": [
    {
      "stepNo": "55.1",
      "desc": "A và B thực hiện cầm nã khóa cổ tay như tư liệu hình 26.1.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_26_1.png",
      "keypoints": [
        "Khóa chặt cổ tay",
        "Bẻ ngược khớp",
        "Dùng sức bả vai"
      ]
    },
    {
      "stepNo": "55.2",
      "desc": "Lướt chân triệt hạ bàn đối phương như tư liệu hình 26.2.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_26_2.png",
      "keypoints": [
        "Hạ trọng tâm",
        "Chân lướt sát đất",
        "Khóa hạ bàn"
      ]
    }
  ]
},
{
  "id": "TLDOI-056",
  "code": "TLDOI_56",
  "name": "★ Thu Thức Bái Tổ Hoàn Tất Bài 108 Tiến Lùi Đối Luyện",
  "formId": "07-108-tien-lui-doi",
  "formName": "Bài 7: Bài 108 Tiến Lùi Đối Luyện - Bên Phải",
  "order": 56,
  "instructor": "HLV Đỗ Quốc Khánh (A) & HLV Đỗ Chiến Thắng (B)",
  "summary": "Hai võ sư A và B thu chân về Nhị Tự Kiềm Dương Tấn, chắp tay cúi chào tạ ơn sư môn hoàn tất toàn bộ 56 chiêu thức đối kháng tiến lùi.",
  "stances": [
    "Nhị Tự Kiềm Dương Tấn"
  ],
  "hands": [
    "Bái Tổ Cung Kính"
  ],
  "targetZones": [
    "Trung Bàn"
  ],
  "difficulty": "Cơ bản",
  "isNarrowStance": true,
  "isTwoPerson": true,
  "sparringInfo": {
    "attacker": "A thu chân bái tổ",
    "defender": "B thu chân bái tổ",
    "tactics": "Kính cẩn tôn sư trọng đạo, thiền định hồi khí"
  },
  "steps": [
    {
      "stepNo": "56",
      "desc": "A và B đứng thẳng chào nhau cung kính hoàn tất bài võ.",
      "imgUrl": "/assets/images/forms/07_108_tien_lui_doi/tldoi_0.png",
      "keypoints": [
        "Khí trầm đan điền",
        "Tâm định tĩnh",
        "Kính cẩn tạ ơn sư môn"
      ]
    }
  ]
},
];

export function getTechniquesByForm(formId: string, base108Techniques: Technique[]): Technique[] {
  switch (formId) {
    case "01-tieu-niem-dau":
      return TIEU_NIEM_DAU_TECHNIQUES;
    case "02-tam-kieu":
      return TAM_KIEU_TECHNIQUES;
    case "03-tieu-chi":
      return TIEU_CHI_TECHNIQUES;
    case "04-108-don-luyen":
      return base108Techniques;
    case "05-108-doi-luyen":
      return DOI_LUYEN_108_TECHNIQUES;
    case "06-108-tien-lui-don":
      return TIEN_LUI_DON_108_TECHNIQUES;
    case "07-108-tien-lui-doi":
      return TIEN_LUI_DOI_108_TECHNIQUES;
    default:
      return base108Techniques;
  }
}
