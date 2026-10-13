// DỮ LIỆU CHUẨN XÁC: LỜI NÓI ĐẦU, TRIẾT LÝ YẾU CHỈ & ĐỐI SÁNH VỊNH XUÂN THẾ GIỚI CỦA 18 BÀI QUYỀN
// Căn cứ: Giáo trình Phật Gia Vịnh Xuân Quyền (PGS.TS Y khoa Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức)
// Mở rộng nghiên cứu học thuật: Đối chiếu hệ thống Vịnh Xuân Quốc Tế (Diệp Vấn, Nguyễn Kỳ Sơn - Sầm Năng, Hoàng Thuần Lương, Chu Thượng Đồng, Lương Đỉnh, Bành Nam...)

export interface WorldLineageContext {
  globalName: string; // Tên gọi quốc tế (Cantonese / English / Hanzi)
  globalStanding: string; // Vị thế kinh điển trong hệ thống Vịnh Xuân thế giới
  historicalRoots: string; // Nguồn gốc lịch sử & liên hệ chi phái
  universalPrinciples: string[]; // Các nguyên lý sinh cơ học phổ quát mà Vịnh Xuân thế giới đều tuân thủ
  lineageVariantNotes?: string; // Dị bản chi phái (nhánh Nguyễn Kỳ Sơn, Samuel Kwok, Mui Wing Chun...)
}

export interface PgvxUniqueness {
  distinctiveFeatures: string; // Nét dị biệt tinh hoa của Phật Gia Vịnh Xuân Việt Nam
  biomechanicalMedicalValue: string; // Giá trị y học, sinh cơ học cột sống & dưỡng sinh khớp (PGS.TS Nguyễn Mạnh Nhâm)
  combatDoctrine: string; // Tôn chỉ chiến thuật thực chiến đặc trưng
}

export interface FormIntroduction {
  formId: string;
  title: string;
  hanziName?: string;
  category: "Tam Đại Quyền" | "108 Thế Liên Hoàn" | "Cọc Gỗ Mộc Nhân" | "Ngũ Hình Quyền" | "Kho Binh Khí";
  categoryOrder: number;
  formOrder: number;
  demonstrator?: string;
  meaning: string;
  philosophy: string;
  principles: string[];
  keyMantra: string;
  introQuote: string;
  worldLineageContext?: WorldLineageContext;
  pgvxUniqueness?: PgvxUniqueness;
  globalBridge?: {
    master: string;
    doctrine: string;
    correlation: string;
  };
}

// ==============================================================================
// LỤC ĐẠI TRỤ CỘT KINH ĐIỂN VỊNH XUÂN THẾ GIỚI (THE SIX CLASSICAL PILLARS)
// ==============================================================================
export interface Classical6Pillar {
  order: number;
  code: string;
  formTitle: string;
  hanziName: string;
  coreMnemonic: string; // 6 ý ghi nhớ kinh điển: "Xây nền", "Chuyển động", "Ứng biến", "Chỉnh góc", "Rèn lực tầm dài", "Binh khí ngắn"
  meaning: string;
  coreFunction: string;
  pedagogicalRole: string;
  scholarlyInsight: string;
  pgvxIntegration: string;
}

export const CLASSICAL_6_PILLARS: Classical6Pillar[] = [
  {
    order: 1,
    code: "siu-nim-tau",
    formTitle: "Tiểu Niệm Đầu",
    hanziName: "小念頭 • Siu Nim Tau",
    coreMnemonic: "Tiểu Niệm Đầu xây nền",
    meaning: "Ý niệm nhỏ ban đầu — Những ý niệm căn bản đầu tiên",
    coreFunction: "Xây dựng nền móng tĩnh: Định hình tư thế Nhị Tự Kiềm Dương Tấn, cấu trúc thân thể chóp nêm, vị trí khuỷu tay thủ trung lộ và khả năng thả lỏng tuyệt đối khi vận động.",
    pedagogicalRole: "Bài thường tập tại chỗ, giúp người học chú ý tới chất lượng từng milimet động tác. Mọi bài quyền sau đều phát triển từ nền tảng này.",
    scholarlyInsight: "Rèn luyện cấu trúc khi đứng tương đối tĩnh; triệt tiêu hoàn toàn sự phụ thuộc vào quán tính bước chân để ép các khớp xương và gân cơ tự phát lực.",
    pgvxIntegration: "Phật Gia Vịnh Xuân kết hợp Nhị Tự Kiềm Dương Tấn chân hẹp che kín hạ bộ và nguyên lý giải phẫu cột sống của PGS.TS Nguyễn Mạnh Nhâm (cuộn xương cùng cụt, thẳng cột sống thắt lưng chống thoái hóa L4-L5)."
  },
  {
    order: 2,
    code: "chum-kiu",
    formTitle: "Tầm Kiều",
    hanziName: "尋橋 / 沉橋 • Chum Kiu",
    coreMnemonic: "Tầm Kiều đưa cơ thể vào chuyển động",
    meaning: "Tìm cầu ('cầu' chỉ cánh tay tạo tiếp xúc) / Trầm cầu (dìm nén cầu đối phương)",
    coreFunction: "Đưa nền tảng tĩnh vào chuyển động: Xoay thân biên thân, bước chân đạp bộ, phối hợp tay - thân - chân nhịp nhàng và kỹ thuật cước triệt hạ thấp.",
    pedagogicalRole: "Tiếp cận, thiết lập tiếp xúc xúc giác và xử lý lực của đối phương trong khi toàn thân vẫn giữ được sự phối hợp đồng trục.",
    scholarlyInsight: "Mối quan hệ hữu cơ: Tiểu Niệm Đầu rèn cấu trúc khi đứng tĩnh; Tầm Kiều rèn cách giữ và sử dụng cấu trúc ấy khi di chuyển. Dòng Nguyễn Kỳ Sơn — Sầm Năng (Quảng Châu) còn gọi là 'Trầm Kiều' (nhấn chìm, đè nén cầu đối phương).",
    pgvxIntegration: "PGVX dung hợp cả hai: 'Vấn lộ' đưa tay hỏi đường nghe lực (Tìm Kiều) và 'Thủ chìm cùi chỏ' nêm trôi ép góc phá thế địch (Trầm Kiều), kết hợp bộ pháp Xước mã đạp bộ trượt sát đất."
  },
  {
    order: 3,
    code: "biu-jee",
    formTitle: "Tiêu Chỉ",
    hanziName: "標指 • Biu Jee / Biu Ji",
    coreMnemonic: "Tiêu Chỉ phát triển ứng biến & phục hồi",
    meaning: "Ngón tay phóng ra qua đầu ngón — Kỹ pháp cứu nguy khẩn cấp",
    coreFunction: "Phát triển khả năng ứng biến và phục hồi: Bổ sung cách phát lực ở cự ly cực ngắn (thốn kình), kỹ thuật cùi chỏ cận chiến, chuyển hướng đột ngột và xử lý khi bị kẹt tay hoặc rơi vào vị trí bất lợi.",
    pedagogicalRole: "Trong nhiều nhánh Diệp Vấn và Samuel Kwok, bài được giải thích như hệ kỹ thuật 'cứu nguy' (Emergency Recovery). Ý nghĩa của bài rộng hơn nhiều so với riêng động tác ngón tay.",
    scholarlyInsight: "Khôi phục trung tuyến khi bị phá vỡ cấu trúc phòng thủ; giải thoát cơ thể khỏi các đòn khóa siết hoặc các góc kẹt bằng chỏ pháp và chỉ pháp xỉa xuyên thấu.",
    pgvxIntegration: "Khẩu quyết chân truyền PGVX: 'Dĩ công vi thủ, dĩ đả vi tiêu' kết hợp bộ pháp hoành thoái lách góc hẹp và kỹ thuật điểm huyệt giải phẫu chuẩn xác."
  },
  {
    order: 4,
    code: "muk-yan-jong",
    formTitle: "Mộc Nhân Thung",
    hanziName: "木人樁 • Muk Yan Jong",
    coreMnemonic: "Mộc Nhân chỉnh khoảng cách và góc",
    meaning: "Cọc người gỗ — Người bạn tập vô hình không bao giờ khoan nhượng",
    coreFunction: "Kiểm tra kỹ thuật trên đối tượng có cấu trúc cố định: Rèn khoảng cách, góc tiếp xúc, vị trí thân người, bộ pháp và sự phối hợp đồng bộ giữa đòn tay và đòn chân.",
    pedagogicalRole: "Kết nối kiến thức của ba bài tay không với thực tế vận dụng; nguồn Mui Wing Chun và truyền thống nhấn mạnh trọng tâm không chỉ ở động tác tay mà nằm ở cách đặt và di chuyển cơ thể quanh cọc.",
    scholarlyInsight: "Cọc gỗ cố định buộc người tập phải tự uốn nắn cơ thể mình thích ứng với không gian vật lý, thay vì chờ đợi đối thủ di chuyển theo ý mình.",
    pgvxIntegration: "Bảo tồn cây Mộc Nhân lịch sử 1954 tại 38 Gia Ngư; chia thành 2 bài: Mộc Nhân Số 1 (rèn nêm góc lướt gỗ, khóa chân cọc cong) và Mộc Nhân Tiến Lùi (né diện kích trắc, chuyển góc 180° - 360° quanh cọc)."
  },
  {
    order: 5,
    code: "luk-dim-boon-gwun",
    formTitle: "Lục Điểm Bán Côn",
    hanziName: "六點半棍 • Luk Dim Boon Gwun",
    coreMnemonic: "Côn rèn lực và độ chính xác ở tầm dài",
    meaning: "Côn sáu điểm rưỡi — Hệ phương pháp trường binh đoản dụng",
    coreFunction: "Rèn luyện binh khí dài (2.4m - 2.7m): Độ vững của chân, phối hợp toàn thân, khả năng truyền lực từ gót chân qua eo hông tới đầu côn và độ chính xác về phương hướng.",
    pedagogicalRole: "Chiều dài của côn khiến những sai lệch nhỏ ở thân thể trở nên rất lớn ở đầu côn, hoạt động như một công cụ khuếch đại sai số giúp người tập tự chỉnh lại kỹ thuật phát lực.",
    scholarlyInsight: "Đoản binh trường dụng: Vận dụng cây gậy dài với tốc độ và sự súc tích của đoản quyền, đâm xuyên trung tâm bằng thương kình Thiếu Lâm.",
    pgvxIntegration: "Ứng dụng trên thế tấn Kiềm Dương hạ thấp vững như bàn thạch, đòn đâm thẳng trung lộ 'Thương kình nhập côn' làm chủ đạo, phát kình chấn động sâu sắc."
  },
  {
    order: 6,
    code: "baat-jaam-do",
    formTitle: "Bát Trảm Đao",
    hanziName: "八斬刀 • Baat Jaam Do",
    coreMnemonic: "Song đao mở rộng nguyên lý sang binh khí ngắn",
    meaning: "Tám phép chém đao — Cặp song đao cận chiến ngắn",
    coreFunction: "Rèn luyện binh khí ngắn đôi: Phối hợp độc lập hai tay, bộ pháp áp sát nhập nội, góc vận động biến ảo và kiểm soát cự ly chiến thuật khi cầm binh khí.",
    pedagogicalRole: "Củng cố các nguyên lý tiết kiệm động tác (motion economy) và chuyển hướng lực đã học trong quyền tay không; là bài học hoàn thiện giai đoạn sau của môn phái.",
    scholarlyInsight: "Song đao như đôi cánh sắt nối dài cẳng tay; lưỡi đao áp sát cẳng tay bảo vệ trung lộ và các đường chém triệt hạ cổ tay, khuỷu tay và chân đối thủ.",
    pgvxIntegration: "Lưỡi đao ép sát xương cẳng tay dùng sống đao đỡ đòn vũ khí dài và xoay cổ tay chém xả cận chiến, kết hợp xước mã đạp bộ nhập nội triệt tiêu ưu thế binh khí dài."
  }
];

// ==============================================================================
// CHUYÊN KHẢO HỌC THUẬT: ĐỐI SÁNH CÁC DÒNG TRUYỀN THỪA & NGUYÊN LÝ THỰC VẬN
// ==============================================================================
export interface LineageInsight {
  id: string;
  title: string;
  subtitle: string;
  historicalContext: string;
  coreDoctrine: string;
  pgvxCorrelation: string;
  bulletPoints: string[];
}

export const LINEAGE_SCHOLARLY_INSIGHTS: LineageInsight[] = [
  {
    id: "yuen-brothers-lineage",
    title: "Mối Liên Hệ Huyết Thống Sư Tổ Nguyễn Tế Công & Đại Sư Nguyễn Kỳ Sơn",
    subtitle: "Hai Anh Em Lừng Danh Phật Sơn — Thập Nhị Tán Thức & 'Trầm Kiều' vs 'Tìm Kiều'",
    historicalContext: "Sư Tổ Nguyễn Tế Công (Yuen Chai Wan, 1877–1959, người truyền bá Vịnh Xuân sang Việt Nam) và Đại Sư Nguyễn Kỳ Sơn (Yuen Kay Shan, 1889–1956, trụ cột Vịnh Xuân Quảng Châu - dòng Sầm Năng Sum Nung) là hai anh em ruột xuất thân từ gia tộc quyền quý tại Phật Sơn. Nguyễn Tế Công là anh cả, Nguyễn Kỳ Sơn là người em thứ năm (thường gọi là Nguyễn Lão Ngũ).",
    coreDoctrine: "Dòng Nguyễn Kỳ Sơn lưu giữ hệ thống 'Thập Nhị Tán Thức' (12 nhóm kỹ thuật rời) bên cạnh 3 bài quyền, mộc nhân, côn và song đao. Đặc biệt, bài thứ hai ở dòng này được diễn giải là 'Trầm Kiều' (沉橋 - dìm nén, nhấn chìm cầu đối phương) thay vì chỉ là 'Tìm Kiều' (尋橋 - tìm kiếm tiếp xúc).",
    pgvxCorrelation: "Trong Phật Gia Vịnh Xuân của PGS.TS Nguyễn Mạnh Nhâm, cả hai tầng nghĩa đều được dung hợp hoàn hảo: Vừa 'Vấn lộ' đưa tay hỏi đường lắng nghe lực (Tìm Kiều), vừa hạ chìm cùi chỏ 'Thủ lưu trung tuyến' để dìm nén đường phát lực của địch (Trầm Kiều).",
    bulletPoints: [
      "Huyết thống cội nguồn: Hai anh em Nguyễn Tế Công và Nguyễn Kỳ Sơn cùng thọ giáo Hoắc Bảo Toàn và Phùng Thiếu Khanh.",
      "Thập Nhị Tán Thức: Nhánh Quảng Châu phát triển 12 thức rời; nhánh Việt Nam phát triển hệ thống đồ sộ 108 Chiêu thức (đơn luyện & đối luyện).",
      "Tìm Kiều vs Trầm Kiều: Tìm kiếm nhịp cầu tiếp xúc (xúc giác) đồng thời dìm nén trọng tâm và đòn đánh của địch xuống (cơ học)."
    ]
  },
  {
    id: "forms-vs-chi-sao-reality",
    title: "Bản Chất Bài Quyền vs Niêm Thủ (Chi Sao) & Giải Mã Kiến Trúc 108 Đối Luyện",
    subtitle: "Bài Quyền Lưu Giữ Nguyên Lý — Niêm Thủ & Đối Luyện Là Chiếc Cầu Nối Người Thật",
    historicalContext: "Trong võ học Vịnh Xuân toàn cầu, bài quyền là kho lưu trữ nguyên lý cơ học và phương tiện tự rèn luyện cơ thể (đơn luyện). Tuy nhiên, bài quyền một mình không thể tạo ra khả năng chiến đấu nếu thiếu luyện tập với người thật.",
    coreDoctrine: "Niêm thủ (Chi Sao) là phương pháp luyện đôi, không phải là một bài quyền đơn lẻ; nó đóng vai trò cầu nối sống còn nối liền động tác đã học với cảm nhận xúc giác (thính kình) và phản xạ sinh tồn khi tiếp xúc.",
    pgvxCorrelation: "Đây chính là lý do Phật Gia Vịnh Xuân thiết lập kiến trúc đối xứng độc bản: Bài 108 Tại Chỗ Đơn Luyện đi kèm Bài 108 Tại Chỗ Đối Luyện; Bài 108 Tiến Lùi Đơn Luyện đi kèm Bài 108 Tiến Lùi Đối Luyện. Các bài đối luyện này thực chất là hệ thống hóa toàn diện các kịch bản Niêm thủ 2 người, giúp võ sinh chuyển hóa trọn vẹn kỹ thuật từ lý thuyết sang phản xạ da thịt.",
    bulletPoints: [
      "Bài quyền = Bản đồ nguyên lý và rèn luyện chất lượng cấu trúc cá nhân.",
      "Niêm thủ (Chi Sao) = Phòng thí nghiệm xúc giác, loại bỏ độ trễ thị giác của não bộ.",
      "108 Đối Luyện PGVX = Hệ thống kịch bản đối kháng 2 người hoàn chỉnh, hiện thực hóa Niêm Thủ thành thực chiến."
    ]
  },
  {
    id: "biu-jee-recovery-and-pole-precision",
    title: "Tiêu Chỉ: Kỹ Pháp Cứu Nguy Phục Hồi & Côn Dài Khuếch Đại Sai Lệch",
    subtitle: "Giải Mã Hệ Thống Thoát Kẹt Tay Của Samuel Kwok & Nguyên Lý Đòn Bẩy 2.7 Mét",
    historicalContext: "Trong các nhánh truyền thừa Diệp Vấn và đặc biệt là hệ thống của Đại sư Samuel Kwok, bài Tiêu Chỉ (Biu Jee) được giảng giải là bài quyền 'Cứu nguy khẩn cấp' khi người tập rơi vào tình thế bất lợi hoặc bị khóa kẹt tay.",
    coreDoctrine: "Tiêu Chỉ dạy cách phóng sức từ cùi chỏ và đầu ngón tay ở cự ly hẹp nhất để lật ngược tình thế khi đường trung lộ bị phá vỡ. Trong khi đó, Lục Điểm Bán Côn (dài 2.7m) biến những sai lệch nhỏ ở thân thể thành lỗi sai lớn ở đầu côn, buộc người tập phải tinh chỉnh sự đồng bộ toàn thân.",
    pgvxCorrelation: "PGS.TS Nguyễn Mạnh Nhâm nhấn mạnh: Tiêu Chỉ là 'Dĩ công vi thủ, dĩ đả vi tiêu' — khi bị ép vào góc kẹt, chỉ có phản công xuyên thấu mới là lối thoát duy nhất. Còn với Lục Điểm Bán Côn, sức mạnh phát ra không phải từ cơ bắp cánh tay mà là 'Thương kình' phóng từ gót chân Kiềm Dương qua eo hông.",
    bulletPoints: [
      "Tiêu Chỉ: Ý nghĩa bài vượt xa động tác ngón tay, là nghệ thuật xoay chuyển càn khôn khi bị kẹt tay hoặc vỡ trung tuyến.",
      "Lục Điểm Bán Côn: Côn dài 2.7m hoạt động như chiếc kính lúp phóng đại mọi sai lệch cơ học ở eo và chân.",
      "Bát Trảm Đao: Củng cố tính tiết kiệm động tác (kinematic economy) tột cùng trong không gian hẹp."
    ]
  }
];

// ==============================================================================
// DANH MỤC CHI TIẾT 18 BÀI QUYỀN & BINH KHÍ
// ==============================================================================
export const FORMS_18_INTRO: Record<string, FormIntroduction> = {
  // ==============================================================================
  // 1. TAM ĐẠI QUYỀN PHÁP CỐT LÕI
  // ==============================================================================
  "bai-07": {
    formId: "bai-07",
    title: "Tiểu Niệm Đầu",
    hanziName: "小念頭 • Siu Nim Tau",
    category: "Tam Đại Quyền",
    categoryOrder: 1,
    formOrder: 1,
    meaning: "Ý niệm nhỏ ban đầu — Những ý niệm căn bản đầu tiên xây nền móng toàn phái",
    philosophy: "Định tâm thủ trung, quy nguyên bế khí. Không cầu chiêu thức hoa mỹ, toàn bộ bài quyền tập trung rèn luyện cảm giác thăng bằng của Nhị Tự Kiềm Dương Tấn, định hình trục Tý Ngọ Tuyến và cùi chỏ thủ trung lộ.",
    principles: [
      "Thủ trung dụng trung: Mọi đường phát lực đều xuất phát từ hoặc bảo vệ đường trung tuyến.",
      "Khép cùi chỏ, chìm vai hạ hông: Cùi chỏ cách ngực một nắm tay, khóa kín mạn sườn và hạ bộ.",
      "Ý thủ đan điền: Thở sâu bằng bụng dưới (cơ hoành), dùng ý dẫn khí, dĩ nhu khắc cương."
    ],
    keyMantra: "Tiểu Niệm Đầu xây nền • Định tâm thủ trung • Nhu trung hữu cương",
    introQuote: "Tiểu Niệm Đầu là bài quyền cơ bản nhất nhưng cũng là bài quan trọng nhất của Phật Gia Vịnh Xuân. Toàn bộ các thủ pháp cốt lõi: Than Thủ, Bàng Thủ, Phục Thủ, Nhật Tự Quyền đều được định hình chuẩn mực tại đây.",
    worldLineageContext: {
      globalName: "Siu Nim Tau (Little Idea / Little Beginning / 小念頭)",
      globalStanding: "Bài quyền nhập môn số 1 bắt buộc của mọi chi phái Vịnh Xuân toàn cầu. Trụ cột thứ nhất: 'Tiểu Niệm Đầu xây nền' — rèn luyện cấu trúc khi đứng tương đối tĩnh, giúp người học chú ý tới chất lượng từng động tác.",
      historicalRoots: "Bảo tồn nguyên vẹn từ cội nguồn Hồng Thuyền Quảng Đông và truyền thừa Diệp Vấn Hồng Kông, Bành Nam Phật Sơn đến Nguyễn Tế Công Việt Nam.",
      universalPrinciples: [
        "Trục Tý Ngọ Tuyến (Centerline Theory) chia đôi cơ thể.",
        "Khép cùi chỏ phát lực (Elbow Energy - Kình lực khuỷu tay cách ngực 1 quyền).",
        "Đứng yên một vị trí triệt tiêu quán tính bước chân, buộc khớp xương tự phát lực và thả lỏng khi vận động."
      ],
      lineageVariantNotes: "Mọi tổ chức Vịnh Xuân quốc tế (Ip Man Ving Tsun, Leung Ting WingTsun, Wong Shun Leung) đều coi bài này là nền móng tĩnh bất biến định hình khung tay."
    },
    pgvxUniqueness: {
      distinctiveFeatures: "Thế Nhị Tự Kiềm Dương Tấn chân rất hẹp (khoảng cách hai gót chân chỉ khoảng một nắm tay, mũi chân khép nhọn), bảo vệ triệt để hạ bộ và khớp háng khác với tấn rộng bằng vai của các chi phái Hồng Kông.",
      biomechanicalMedicalValue: "Dưới góc nhìn giải phẫu y học của PGS.TS Nguyễn Mạnh Nhâm, việc cuộn nhẹ xương cùng cụt và giữ thẳng cột sống thắt lưng giúp giải tỏa áp lực đè nén lên đĩa đệm L4-L5 và S1, kích hoạt hô hấp cơ hoành sâu tăng cường dung tích phổi.",
      combatDoctrine: "Bất động chế vạn động — Xây dựng bộ khung phòng thủ chóp nêm tam giác không thể bị xô đổ ở cự ly cận chiến."
    },
    globalBridge: {
      master: "Đại Sư Diệp Vấn (Ip Man)",
      doctrine: "Thủ Trung Dụng Trung & Độc Thủ Bất Hành",
      correlation: "Diệp Vấn coi Tiểu Niệm Đầu là bài học nhập môn và cũng là bài học suốt đời để tôi luyện cấu trúc cánh tay. Tương thích 100% với trục Tý Ngọ Tuyến và Nhị Tự Kiềm Dương Tấn của Phật Gia Vịnh Xuân."
    }
  },

  "bai-09": {
    formId: "bai-09",
    title: "Tầm Kiều",
    hanziName: "尋橋 / 沉橋 • Chum Kiu",
    category: "Tam Đại Quyền",
    categoryOrder: 1,
    formOrder: 2,
    demonstrator: "HLV Nguyễn Trọng Sơn",
    meaning: "Tìm cầu ('cầu' là cánh tay tiếp xúc) / Trầm cầu (dìm nén cầu đối phương)",
    philosophy: "Tầm kiều là tìm cầu nối giữa mình và đối thủ ('Tầm kiều tầm sư, tầm hữu, tầm đối phương'). Tay đưa ra trước (vấn thủ) như để hỏi đường (vấn lộ). Nhờ tiếp xúc mà thấu hiểu sức mạnh (thính kình) và hướng đánh của địch, từ đó tay chân tự động xuất đòn hóa giải.",
    principles: [
      "Xước mã đạp bộ: Di chuyển theo kiểu leo núi, chân trước tiến kéo chân sau theo, trọng tâm 7/3 giữ ở chân sau.",
      "Xoay người biên thân: Vận dụng tối đa các góc xoay thân để hóa giải thế tấn công trực diện và tạo góc phản đòn hiểm hóc.",
      "Bàng Thủ hóa giải: Bàng Thủ là chiêu thức chủ đạo, dùng để lướt trôi lực của đối phương và nhập nội cận chiến."
    ],
    keyMantra: "Tầm Kiều chuyển động • Vấn lộ thính kình • Xước mã nhập nội",
    introQuote: "Tầm Kiều di chuyển theo kiểu leo núi (đạp bộ)... Tay thường đưa ra trước (vấn thủ) như để hỏi đường (vấn lộ). Do tay đưa ra trước mà ta hiểu được nhiều yếu tố của đối phương như sức mạnh (thính kình), hướng đánh, nhiều khi biết được chiêu đó là hư hay thực. Bàng Thủ là chiêu thức được dùng nhiều nhất, thiên về phòng ngự.",
    worldLineageContext: {
      globalName: "Chum Kiu (Seeking the Bridge / Sinking the Bridge / 尋橋 / 沉橋)",
      globalStanding: "Trụ cột thứ hai: 'Tầm Kiều đưa cơ thể vào chuyển động'. Nếu Tiểu Niệm Đầu rèn cấu trúc khi đứng tĩnh, thì Tầm Kiều rèn cách giữ và sử dụng cấu trúc ấy khi di chuyển, xoay thân và tung đòn đá thấp.",
      historicalRoots: "Hệ thống hóa nguyên lý bắc cầu tiếp xúc (Bridge Contact) truyền thừa từ Lương Tán tại Phật Sơn; dòng Nguyễn Kỳ Sơn — Sầm Năng diễn giải là 'Trầm Kiều' (nhấn chìm đè nén cầu đối phương).",
      universalPrinciples: [
        "Xoay eo chuyển trục (Turning Stance / Waist Torque) giải phóng lực trực diện.",
        "Thiết lập cầu nối xúc giác (Bridge Concept) để lắng nghe ý đồ đối thủ.",
        "Đòn đá thấp triệt hạ (Low Kicking Techniques) nhắm vào khớp gối và cẳng chân."
      ],
      lineageVariantNotes: "Mối liên hệ đối xứng: Nhánh Diệp Vấn nhấn mạnh 'Tìm cầu' (Seeking); nhánh Nguyễn Kỳ Sơn nhấn mạnh 'Trầm cầu' (Sinking). PGVX hợp nhất cả hai trong thủ pháp vấn lộ và chìm chỏ."
    },
    pgvxUniqueness: {
      distinctiveFeatures: "Kỹ thuật 'Vấn lộ' (hỏi đường bằng cẳng tay) kết hợp đòn cước triệt hạ ngầm kín đáo tuyệt đối không nâng chân quá thắt lưng để bảo toàn trọng tâm.",
      biomechanicalMedicalValue: "Vận động xoay vặn trục cột sống và khớp hông nhịp nhàng giúp bôi trơn bao hoạt dịch khớp háng, rèn luyện sự phối hợp thần kinh - cơ bắp phản ứng nhanh với lực cản ngoại lai.",
      combatDoctrine: "Tầm kiều nhập nội — Bắc cầu tiếp xúc cẳng tay, lách người 45 độ mượn đà trôi lực và lập tức lấp kín khoảng trống cận chiến."
    },
    globalBridge: {
      master: "Võ Sư Hoàng Thuần Lương (Wong Shun Leung)",
      doctrine: "Xúc Giác Niêm Thủ & Chiếm Góc 45°",
      correlation: "Hoàng Thuần Lương coi Tầm Kiều là chiếc chìa khóa mở cánh cửa cận chiến bằng cách dùng cẳng tay bắc cầu hỏi đường (vấn thủ), khớp hoàn toàn với nguyên lý nghe lực (thính kình) của PGS.TS Nguyễn Mạnh Nhâm."
    }
  },

  "bai-10": {
    formId: "bai-10",
    title: "Tiêu Chỉ",
    hanziName: "鏢指 • Biu Jee",
    category: "Tam Đại Quyền",
    categoryOrder: 1,
    formOrder: 3,
    demonstrator: "Võ sư Hồ Chí Cang",
    meaning: "Ngón tay phóng sức — Kỹ pháp cứu nguy khẩn cấp và phục hồi trung lộ",
    philosophy: "Phóng sức ra qua những đầu ngón tay — kỹ pháp chuyên sâu môn phái ('Tiêu Chỉ bất xuất môn'). Chuyển từ thế phòng ngự sang phản công chủ động: 'Dĩ công vi thủ, dĩ đả vi tiêu'. Dùng bàn tay mở và ngón tay xỉa xuyên thấu để đạt tầm với tối ưu và xử lý khi bị kẹt tay hoặc bất lợi.",
    principles: [
      "Mở bàn tay, phát lực đầu ngón: Không nắm quyền mà dùng ngón tay xỉa xuyên thấu (chỉ pháp), gia tăng tầm với và độ hiểm sát thương.",
      "Hoành thoái, mã chéo: Bộ pháp chuyển đổi đột ngột ở cự ly cực ngắn, thoát khỏi vòng vây hoặc góc kẹt.",
      "Phục hồi trung tuyến: Khi bị phá vỡ cấu trúc phòng thủ, dùng chỉ pháp và chỏ pháp xoay chuyển tình thế tức thì."
    ],
    keyMantra: "Tiêu Chỉ ứng biến • Cứu nguy phục hồi • Dĩ công vi thủ",
    introQuote: "Tiêu Chỉ được coi là cao hơn Tầm Kiều, chủ yếu dùng bàn tay và các ngón tay... Theo tên thì đây là 'phóng sức ra qua những đầu ngón tay', một kỹ pháp đặc sắc của VXQ. Chủ trương tấn công là chủ yếu (dĩ công vi thủ, dĩ đả vi tiêu).",
    worldLineageContext: {
      globalName: "Biu Jee (Darting Fingers / Thrusting Fingers / 鏢指)",
      globalStanding: "Trụ cột thứ ba: 'Tiêu Chỉ phát triển ứng biến & phục hồi'. Được định danh là hệ kỹ thuật cứu nguy khẩn cấp (Emergency Recovery Form) khi cấu trúc bị phá vỡ hoặc bị kẹt tay ở cự ly gần.",
      historicalRoots: "Từng được giữ kín nghiêm ngặt trong nội môn truyền thống ('Tiêu Chỉ bất xuất môn'); hệ Samuel Kwok và Diệp Vấn đều nhấn mạnh khả năng ứng biến trong tình thế hiểm nghèo.",
      universalPrinciples: [
        "Khôi phục trung tuyến khi bị phá vỡ cấu trúc bảo vệ ban đầu.",
        "Phát lực đầu ngón tay (Finger Thrusts) mở rộng tầm đánh tối đa.",
        "Chỏ pháp cận chiến hiệu quả giải cứu khi bị ôm ghì khóa khớp hoặc kẹt tay."
      ],
      lineageVariantNotes: "Ý nghĩa của Tiêu Chỉ rộng hơn riêng động tác ngón tay; đó là tư duy phục hồi vị thế chiến thuật khi rơi vào góc chết."
    },
    pgvxUniqueness: {
      distinctiveFeatures: "Vận dụng nguyên lý 'Chỉ thấu kình' — ngón tay phóng lực như mũi phi tiêu kết hợp điểm huyệt giải phẫu, chuyển hướng thân pháp bằng bộ hoành thoái cự ly hẹp.",
      biomechanicalMedicalValue: "Luyện độ dẻo dai của gân gấp - duỗi ngón tay, kích hoạt các đầu mút dây thần kinh ngoại biên, kết hợp thả lỏng khớp vai để đạt gia tốc góc lớn nhất mà không tổn hại khớp cổ tay.",
      combatDoctrine: "Dĩ công vi thủ, dĩ đả vi tiêu — Khi rơi vào thế hiểm nghèo, cách phòng ngự an toàn nhất là lập tức tung đòn tấn công xuyên thấu triệt hạ đối phương."
    },
    globalBridge: {
      master: "Lý Tiểu Long (Bruce Lee)",
      doctrine: "Triệt Quyền Đạo — Dĩ Công Vi Thủ & Finger Jab",
      correlation: "Lý Tiểu Long phát triển đòn xỉa ngón tay (Finger Jab) và nguyên lý 'Dĩ công vi thủ' từ chính bài Tiêu Chỉ của Vịnh Xuân Quyền, tương đồng với phân tích của PGS.TS Nguyễn Mạnh Nhâm trong giáo trình gốc khi luận giải về bài quyền Tiêu Chỉ."
    }
  },

  // ==============================================================================
  // 2. HỆ THỐNG 108 THẾ LIÊN HOÀN (ĐƠN LUYỆN & ĐỐI LUYỆN)
  // ==============================================================================
  "bai-12": {
    formId: "bai-12",
    title: "108 Tại Chỗ — Đơn Luyện",
    hanziName: "一百零八式 (原地單練) • 108 Stationary Solo",
    category: "108 Thế Liên Hoàn",
    categoryOrder: 2,
    formOrder: 4,
    demonstrator: "HLV Phạm Đức Hùng",
    meaning: "108 Chiêu thức liên hoàn tại chỗ — Khung xương kỹ thuật cơ bản đơn luyện của môn phái",
    philosophy: "Đây là bài quyền cơ bản và toàn diện nhất. Luyện tập tại chỗ trên thế Tấn Kiềm Dương giúp định hình chuẩn xác các góc độ công thủ, khắc sâu phản xạ cơ bắp và rèn luyện tính liên hoàn của 108 thế võ chân truyền.",
    principles: [
      "Định hình góc độ chuẩn xác: Khớp vai, cùi chỏ và cổ tay di chuyển đúng tọa độ trung tuyến.",
      "Thế tấn vững như bàn thạch: Hai chân khép hẹp, gối kiềm chặt che hạ bộ, xoay eo sinh kình.",
      "Liên hoàn không ngắt quãng: Đòn trước vừa chạm đích, đòn sau lập tức tiếp nối liên hoàn."
    ],
    keyMantra: "Tấn kiềm sinh kình • Thủ pháp liên hoàn • Bách bát quy nhất",
    introQuote: "Đây là bài võ cơ bản nhất, thường gọi tắt là Bài 108. Theo truyền thống thì bài có 108 thế, bao gồm toàn bộ các đòn thế công thủ nền tảng của Phật Gia Vịnh Xuân.",
    worldLineageContext: {
      globalName: "108 Stationary Solo Drills (一百零八式 原地單練)",
      globalStanding: "Con số 108 mang tính biểu tượng Phật giáo thiêng liêng (đoạn trừ 108 phiền não). Trong khi Vịnh Xuân Hồng Kông đưa 108/116 thế lên Mộc Nhân, nhánh Việt Nam bảo tồn trọn vẹn 108 thế tay không đơn luyện.",
      historicalRoots: "Truyền thừa trực tiếp từ Sư Tổ Nguyễn Tế Công truyền dạy cho Cụ Trần Thúc Tiển tại Hà Nội từ những năm 1940 - 1950, tương ứng với tinh thần đúc kết kỹ thuật của dòng họ Nguyễn Phật Sơn.",
      universalPrinciples: [
        "In vết đường truyền thần kinh cơ bắp qua chuỗi lặp lại vận động.",
        "Thiết lập tọa độ không gian chính xác đến từng milimet của mọi thủ pháp.",
        "Cân bằng hai bán cầu đại não thông qua luyện tập đồng đều tay trái và tay phải."
      ],
      lineageVariantNotes: "Bài quyền đóng vai trò lưu giữ nguyên lý và rèn cấu trúc thân thể; là tiền đề không thể thiếu trước khi bước vào đối luyện người thật."
    },
    pgvxUniqueness: {
      distinctiveFeatures: "Thực hiện hoàn toàn trên thế Tấn Kiềm Dương chân hẹp không rời vị trí, tạo nên khả năng xoay hông phát kình nội lực mạnh mẽ trong phạm vi chật hẹp.",
      biomechanicalMedicalValue: "Tạo sự co thắt đẳng trương (isometric contraction) của nhóm cơ khép đùi và cơ sàn chậu, tăng cường tuần hoàn vùng chậu và ổn định khớp cùng chậu.",
      combatDoctrine: "Bách bát quy nhất — 108 đòn thế là từ điển sống, khi ứng biến tự động tuôn chảy thành phản xạ tự nhiên không cần suy nghĩ."
    },
    globalBridge: {
      master: "Đại Sư Chu Thượng Đồng (Chu Shong Tin)",
      doctrine: "Vua Niệm Đầu — Cấu Trúc Khớp & Kình Lực Nội Tại",
      correlation: "Chu Thượng Đồng dành cả đời chứng minh việc đứng yên tại chỗ luyện chuẩn cấu trúc khớp sẽ sản sinh kình lực vô tận, hoàn toàn tương thích với triết lý luyện 108 tại chỗ của Phật Gia Vịnh Xuân."
    }
  },

  "bai-13": {
    formId: "bai-13",
    title: "108 Tại Chỗ — Đối Luyện",
    hanziName: "一百零八式 (原地對練) • 108 Stationary Partner",
    category: "108 Thế Liên Hoàn",
    categoryOrder: 2,
    formOrder: 5,
    meaning: "Đối kháng 108 thế tại cự ly cố định — Cầu nối Niêm Thủ (Chi Sao) đưa bài quyền vào người thật",
    philosophy: "Đưa 108 thế vào bài tập thực hành 2 người tại chỗ. Học cách hóa giải lực đánh trực diện của đối phương mà không cần lùi bước, ứng dụng triệt để nguyên lý 'Mượn lực đả lực' (tá lực sinh kình).",
    principles: [
      "Duy trì tiếp xúc da thịt: Luôn giữ tay tiếp chạm đối thủ để lắng nghe hướng lực và ý đồ.",
      "Hóa giải trước, phản đòn sau: Dùng nêm góc chệch hướng đòn đánh của bạn tập, lập tức chèn đòn vào sơ hở.",
      "Hòa ái tương trợ: Kiểm soát kình lực chuẩn xác để đảm bảo an toàn tuyệt đối cho bạn tập."
    ],
    keyMantra: "Cầu nối Niêm Thủ • Tá lực đả lực • Lai lưu khứ tống",
    introQuote: "Đối luyện 108 thế tại chỗ giúp môn sinh chuyển hóa các thế võ đơn lẻ thành phản xạ sinh tồn khi đối mặt với lực đánh thực tế từ bạn tập.",
    worldLineageContext: {
      globalName: "108 Stationary Partner Drills (Two-Person Applied Chi Sao Sets)",
      globalStanding: "Chiếc cầu nối kinh điển: Niêm thủ (Chi Sao) không phải bài quyền đơn độc mà là phương pháp luyện đôi; 108 Đối Luyện chính là hình thái hóa hoàn chỉnh của Niêm thủ thành các kịch bản đối kháng 2 người.",
      historicalRoots: "Phương pháp rèn luyện đối kháng kinh điển của Phật Sơn xưa, đảm bảo người học không rơi vào tình trạng 'quyền hoa thế tú' phi thực tế.",
      universalPrinciples: [
        "Xúc giác phản xạ thay thế thị giác (Tactile Reflexes loại bỏ độ trễ não bộ).",
        "Nguyên lý chiếc nêm tam giác trôi lực (Deflection Wedge).",
        "Mượn lực đối phương để hoàn trả lực (Borrowing Force)."
      ],
      lineageVariantNotes: "Nối liền khoảng cách giữa bài quyền lý thuyết và chiến đấu thực tế; kiểm chứng xem cấu trúc thân thể có giữ được khi chịu ngoại lực ép thật hay không."
    },
    pgvxUniqueness: {
      distinctiveFeatures: "Đứng đối diện cự ly hẹp không lùi bước, sử dụng biên thân và xoay hông để hóa giải quả đấm nặng của đối phương, phản đòn ngay trên đường về của đòn địch.",
      biomechanicalMedicalValue: "Rèn luyện khả năng hấp thụ và phân tán lực chấn động dọc theo hệ thống gân cơ, bảo vệ các khớp xương không bị tổn thương do va chạm cứng.",
      combatDoctrine: "Lai lưu khứ tống — Địch đến dính sát làm chệch hướng, địch rút theo bén gót, buông tay lập tức phóng quyền xuyên tâm."
    },
    globalBridge: {
      master: "Đại Sư Lương Đỉnh (Leung Ting)",
      doctrine: "IWTA — 4 Nguyên Lý Lực & Phản Xạ Da Thịt",
      correlation: "4 nguyên lý lực của Lương Đỉnh (tiến lên khi đường thông suốt, dính sát khi chạm, nhường bước trước lực lớn, theo sát khi địch rút) phản ánh chính xác cấu trúc bài 108 đối luyện tại chỗ."
    }
  },

  "bai-14": {
    formId: "bai-14",
    title: "108 Tiến Lùi — Đơn Luyện",
    hanziName: "一百零八式 (進退單練) • 108 Stepping Solo",
    category: "108 Thế Liên Hoàn",
    categoryOrder: 2,
    formOrder: 6,
    meaning: "108 Thế vận động tiến thoái — Rèn luyện bộ pháp di động và phối hợp tay chân đồng bộ",
    philosophy: "Giải phóng thân pháp khỏi vị trí đứng yên. Môn sinh học cách tiến, lùi, chuyển tấn, xoay góc 45 độ trong khi vẫn duy trì sự ổn định của trục Tý Ngọ Tuyến và uy lực của đòn đánh.",
    principles: [
      "Thân động tấn bất động: Chân bước dứt khoát nhưng trọng tâm luôn vững vàng, không chao đảo nhấp nhô.",
      "Tiến thoái đồng trục: Tiến bước chèn ép không gian, thoái bộ né đòn và giữ cự ly phản kích.",
      "Điều tức nhịp nhàng: Thở ra khi tiến công phát kình, hít sâu khi thu thế chuyển tấn."
    ],
    keyMantra: "Tiến thoái như phong • Trọng tâm bất động • Khí trầm đan điền",
    introQuote: "Bài 108 tiến lùi phát triển khả năng vận động không gian của người tập, đưa các thế võ vào trạng thái động uyển chuyển.",
    worldLineageContext: {
      globalName: "108 Stepping Solo Form (進退單練)",
      globalStanding: "Bước phát triển nâng cao của bộ pháp Vịnh Xuân, kết hợp giữa kỹ thuật tay của Siu Nim Tau và bộ pháp linh hoạt của Chum Kiu.",
      historicalRoots: "Được đúc kết để thích nghi với địa hình hẹp của các ngõ phố và không gian thực chiến đời thực.",
      universalPrinciples: [
        "Duy trì trục thẳng đứng của cột sống trong suốt quá trình di chuyển.",
        "Bộ pháp trượt mặt đất (Sliding Steps) giữ độ bám vững chắc của bàn chân.",
        "Đồng bộ hóa nhịp chân và nhịp phát lực của cánh tay."
      ]
    },
    pgvxUniqueness: {
      distinctiveFeatures: "Bộ pháp tiến lùi trượt sát đất theo hình tam giác, luôn giữ tư thế Tấn Kiềm Dương thu mông khép gối trong mọi bước di chuyển.",
      biomechanicalMedicalValue: "Tăng cường sức mạnh cơ tứ đầu đùi, cơ tam đầu cẳng chân và cải thiện hệ thống giữ thăng bằng tiền đình ốc tai của hệ thần kinh trung ương.",
      combatDoctrine: "Chiếm không gian đoạt tiên cơ — Di chuyển lấn át không gian vận động của đối thủ, không cho đối phương cơ hội lấy đà phát lực."
    },
    globalBridge: {
      master: "Đại Sư Bành Nam (Pan Nam - Vịnh Xuân Phật Sơn)",
      doctrine: "Thân Bộ Hợp Nhất & Khí Trầm Đan Điền",
      correlation: "Bành Nam đặc biệt coi trọng bộ pháp tiến thoái kết hợp khí công nội tạng, tương đồng sâu sắc với yếu lĩnh thở sâu và bước chân kiềm dương của bài 108 tiến lùi."
    }
  },

  "bai-15": {
    formId: "bai-15",
    title: "108 Tiến Lùi — Đối Luyện",
    hanziName: "一百零八式 (進退對練) • 108 Mobile Partner Combat",
    category: "108 Thế Liên Hoàn",
    categoryOrder: 2,
    formOrder: 7,
    meaning: "Đối kháng di động toàn diện 108 thế — Ứng dụng thực chiến tay không tự do",
    philosophy: "Mô phỏng tình huống chiến đấu thực tế nhất của bài 108: Cả hai võ sinh cùng di chuyển tiến lùi, hóa giải và phản kích liên hoàn. Kiểm tra toàn diện sự phối hợp nhịp nhàng giữa mắt, bộ pháp, thủ pháp và giác quan xúc giác.",
    principles: [
      "Khoảng cách chiến thuật chuẩn mực: Không để bị áp sát gây nghẽn đòn, không đứng quá xa làm mất tiếp xúc.",
      "Chiếm giữ đường trung lộ khi di chuyển: Luôn đi chân nêm vào giữa hai chân đối phương để phá thế đứng.",
      "Phản xạ linh giác tức thì: Khi bị dồn ép, lập tức xoay thân thoát góc và chuyển sang phản đòn."
    ],
    keyMantra: "Tùy cơ ứng biến • Phá thế đoạt môn • Cận chiến liên hoàn",
    introQuote: "108 Tiến lùi đối luyện là bài kiểm nghiệm thực tế cao nhất của hệ thống 108 thế, rèn luyện bản lĩnh cận chiến vững vàng.",
    worldLineageContext: {
      globalName: "108 Mobile Partner Dynamic Combat (進退對練)",
      globalStanding: "Bài tập đối kháng ứng dụng nâng cao, giúp người tập làm quen với cự ly cận chiến.",
      historicalRoots: "Kế thừa tinh hoa tỉ võ cận chiến của các võ phái Nam Thiếu Lâm và Vịnh Xuân Phật Sơn cổ truyền.",
      universalPrinciples: [
        "Kiểm soát cự ly chiến đấu (Distance Management).",
        "Chiếm góc mù đối thủ qua bộ pháp di động (Flanking Maneuvers).",
        "Tung đòn liên hoàn không ngắt quãng (Continuous Pressure)."
      ]
    },
    pgvxUniqueness: {
      distinctiveFeatures: "Kỹ thuật 'Bước vào giữa hai chân đối thủ' (chiếm lĩnh nội môn) phá vỡ hoàn toàn trọng tâm của địch, kết hợp triệt cước và đoản quyền.",
      biomechanicalMedicalValue: "Rèn luyện khả năng thích ứng tim mạch và phản ứng thăng bằng động (dynamic balance) trong các điều kiện ngoại lực thay đổi liên tục.",
      combatDoctrine: "Dĩ công vi thủ, liên tiêu đới đả — Vừa bước tiến vừa hóa giải vừa tung đòn dứt điểm trong cùng một nhịp thở."
    },
    globalBridge: {
      master: "Tông Sư Lương Tán (Leung Jan - Phật Sơn Tán Tiên Sinh)",
      doctrine: "Đoản Đả Cận Chiến & Chiếm Lĩnh Trung Môn",
      correlation: "Lương Tán nổi danh nhờ khả năng di chuyển áp sát và tung đòn đoản đả liên hoàn thực tiễn, là hình mẫu tiêu biểu của bài 108 tiến lùi đối luyện."
    }
  },

  // ==============================================================================
  // 3. CỌC GỖ MỘC NHÂN (MỘC NHÂN THUNG)
  // ==============================================================================
  "bai-17": {
    formId: "bai-17",
    title: "Bài Mộc Nhân Số 1",
    hanziName: "木人樁第一套 • Mok Yan Jong 1",
    category: "Cọc Gỗ Mộc Nhân",
    categoryOrder: 3,
    formOrder: 8,
    demonstrator: "HLV Nguyễn Quốc Minh (38 Gia Ngư, 1954)",
    meaning: "Bài Mộc Nhân Thung tại chỗ — Kiểm tra kỹ thuật trên cấu trúc cố định, rèn khoảng cách và góc",
    philosophy: "Cọc gỗ Mộc Nhân là người bạn tập vô hình không bao giờ khoan nhượng. Luyện Mộc Nhân giúp tôi luyện cẳng tay, cạnh bàn tay và ống chân cứng cáp, đồng thời định hình kỹ năng nêm góc chuẩn xác quanh 3 tay và chân cọc gỗ.",
    principles: [
      "Nêm góc lướt gỗ: Coi 2 tay trên của cọc như đòn tấn công, dùng Bàng Thủ và Than Thủ lướt sát mặt gỗ.",
      "Chặn khóa chân cọc: Dùng gối và cẳng chân gài sát chân gỗ cong để rèn kỹ năng khóa chân và quật ngã.",
      "Phát kình giật từ eo hông: Không đánh bầm tay vào gỗ mà dùng lực xoay hông giật phát kình nội gia."
    ],
    keyMantra: "Mộc Nhân chỉnh góc • Gỗ cứng tôi cốt • Nêm góc lướt tay",
    introQuote: "Mộc Nhân (người gỗ) là một phương pháp luyện tập độc đáo của Vịnh Xuân Quyền. Cây Mộc Nhân lịch sử chế tác năm 1954 tại 38 Gia Ngư là chứng nhân di sản của môn phái.",
    worldLineageContext: {
      globalName: "Mok Yan Jong Form 1 (Wooden Dummy Solo Routine / 木人樁)",
      globalStanding: "Trụ cột thứ tư: 'Mộc Nhân chỉnh khoảng cách và góc'. Kiểm tra kỹ thuật trên một đối tượng có cấu trúc cố định: rèn khoảng cách, góc tiếp xúc, vị trí thân người, bộ pháp và sự phối hợp các động tác.",
      historicalRoots: "Khởi nguồn từ 108 cọc gỗ Thiếu Lâm Tự, được các nghệ nhân Hồng Thuyền thu gọn thành một cây cọc đơn lập duy nhất; nhánh Mui Wing Chun nhấn mạnh việc đặt cơ thể hơn là đánh tay.",
      universalPrinciples: [
        "Chuẩn hóa góc độ hình học không gian của thủ pháp đối với vật thể cố định.",
        "Tôi luyện độ cứng cáp của màng xương cẳng tay và cẳng chân.",
        "Rèn luyện kỹ thuật ép góc và chèn đòn qua khe hở tay đối phương."
      ],
      lineageVariantNotes: "Trọng tâm Mộc Nhân không phải là đánh mạnh vào gỗ mà là cách điều chỉnh vị trí thân thể và bộ pháp để tìm góc thâm nhập tối ưu."
    },
    pgvxUniqueness: {
      distinctiveFeatures: "Gắn liền với cây Mộc Nhân lịch sử chế tác năm 1954 tại 38 Gia Ngư (Hà Nội). Kỹ thuật nêm góc lướt gỗ tinh tế, tuyệt đối không dùng sức đập thô bạo làm tổn hại xương khớp.",
      biomechanicalMedicalValue: "Kích thích quá trình tái tạo màng xương (Wolff's Law), tăng mật độ xương cẳng tay và kích hoạt các huyệt đạo vùng cổ tay (Nội Quan, Ngoại Quan, Thái Uyên).",
      combatDoctrine: "Lướt gỗ sinh kình — Cọ xát cẳng tay vào tay cọc để tạo thói quen trôi lực và luồn đòn vào điểm yếu của đối thủ."
    },
    globalBridge: {
      master: "Tông Sư Trần Hoa Thuận (Chan Wah Shun)",
      doctrine: "Hoa Tiền Trảo — Tôi Cốt Cẳng Tay & Thung Pháp Chuẩn Mực",
      correlation: "Trần Hoa Thuận nổi danh với đôi cẳng tay sắt đá tôi luyện từ cọc gỗ Mộc Nhân, phản ánh chuẩn xác triết lý rèn đòn không khoan nhượng của bài Mộc Nhân số 1."
    }
  },

  "bai-18": {
    formId: "bai-18",
    title: "Bài Mộc Nhân Tiến Lùi",
    hanziName: "木人樁進退 • Mok Yan Jong Movement",
    category: "Cọc Gỗ Mộc Nhân",
    categoryOrder: 3,
    formOrder: 9,
    demonstrator: "HLV Phạm Vũ Toản",
    meaning: "Bộ pháp chuyển vòng Mộc Nhân — Đột kích mạn sườn và góc chết quanh cọc gỗ",
    philosophy: "Không đứng yên trước mặt cọc gỗ. Môn sinh di chuyển chuyển góc quanh cọc, tấn công từ bên sườn, luồn ra sau lưng cọc để tập kỹ năng đột kích mạn sườn và góc hiểm của đối phương.",
    principles: [
      "Vòng tròn thân pháp quanh cọc: Bước chân xoay chuyển 180 độ bám sát thân gỗ.",
      "Đổi tay liên hoàn: Tay trước gạt tay cọc, tay sau đánh thẳng vào thân cọc trong một nhịp thở.",
      "Kỹ thuật quấn chân: Móc chân vào chân cọc khi đổi góc để tập kỹ năng triệt hạ đối thủ."
    ],
    keyMantra: "Né diện kích trắc • Quấn chân đổi góc • Thân pháp như phong",
    introQuote: "Bài mộc nhân tiến lùi phát triển khả năng vận động đa chiều quanh đối thủ, rèn luyện sự linh hoạt tối đa của bộ pháp.",
    worldLineageContext: {
      globalName: "Dynamic Moving Wooden Dummy Form (木人樁進退)",
      globalStanding: "Bài tập nâng cao biến cọc gỗ tĩnh thành đối thủ chuyển động, giải phóng người tập khỏi góc nhìn một chiều.",
      historicalRoots: "Được phát triển từ các phương pháp chiến đấu trên sàn thuyền bập bềnh của nghĩa sĩ Hồng Thuyền.",
      universalPrinciples: [
        "Bộ pháp bao vây mạn sườn (Flanking Angles).",
        "Triệt tiêu đường công kích chính diện của đối thủ.",
        "Kỹ thuật gài chân quật ngã bằng cẳng chân và khớp gối."
      ]
    },
    pgvxUniqueness: {
      distinctiveFeatures: "Nguyên tắc 'Né diện kích trắc' (tránh mặt trước, đánh từ mạn sườn) kết hợp kỹ thuật móc chân triệt cước vào chân cọc gỗ uốn cong.",
      biomechanicalMedicalValue: "Gia tăng sự linh hoạt của khớp gối và cổ chân trong các chuyển động xoay vặn, phòng chống chấn thương dây chằng chéo và mắt cá chân.",
      combatDoctrine: "Biến góc đoạt vị — Luồn lách ra sau lưng đối thủ, biến điểm mạnh của địch thành thế trống trải hoàn toàn."
    },
    globalBridge: {
      master: "Đại Sư Diệp Bộ Thanh (Yip Bo Ching)",
      doctrine: "Bát Quái Bộ Quanh Thung & Đột Kích Mạn Sườn",
      correlation: "Diệp Bộ Thanh coi việc di chuyển chuyển vòng quanh cọc gỗ là chìa khóa để đối phó với các đối thủ to lớn hung hãn, tương đồng với bài Mộc Nhân tiến lùi của PGVX."
    }
  },

  // ==============================================================================
  // 4. NGŨ HÌNH QUYỀN & QUYỀN TỔNG HỢP
  // ==============================================================================
  "bai-21": {
    formId: "bai-21",
    title: "Long Quyền",
    hanziName: "龍拳 • Dragon Form",
    category: "Ngũ Hình Quyền",
    categoryOrder: 4,
    formOrder: 10,
    demonstrator: "Võ sư Hồ Văn Khang",
    meaning: "Rồng cuộn mây bay — Luyện Thần, tĩnh trung cầu động, nhu trung hữu cương",
    philosophy: "Long hình chủ luyện Thần (thần khí). Đường quyền uyển chuyển như rồng lượn trên mây, bề ngoài mềm mại nhưng bên trong ẩn chứa kình lực dũng mãnh, lấy sự thư thái của tâm trí làm cốt lõi.",
    principles: [
      "Thân pháp uốn lượn: Cột sống xoay chuyển linh hoạt như thân rồng uốn khúc.",
      "Chưởng pháp biến ảo: Dùng lòng bàn tay và gót chưởng phát kình chấn động nội tạng.",
      "Tĩnh trung cầu động: Tâm tĩnh như mặt nước phẳng, khi xuất đòn thì linh hoạt tùy duyên tiếp lực."
    ],
    keyMantra: "Long hình luyện thần • Tĩnh trung cầu động • Nhu trung hữu cương",
    introQuote: "Long quyền trong Ngũ hình chủ về luyện thần. Thần thái uy nghiêm, thân pháp uốn lượn mềm dẻo nhưng phát kình chấn động sâu sắc.",
    worldLineageContext: {
      globalName: "Dragon Form (Long Quyền / 龍拳)",
      globalStanding: "Bài quyền đứng đầu trong hệ thống Ngũ Hình Thiếu Lâm cổ truyền, đại diện cho linh thú tâm linh cao nhất.",
      historicalRoots: "Trong khi Vịnh Xuân Hồng Kông tinh giản ngũ hình, nhánh Nguyễn Tế Công Việt Nam và Bành Nam Phật Sơn bảo tồn trọn vẹn Ngũ Hình Thập Nhị Thao.",
      universalPrinciples: [
        "Luyện Thần (Spiritual Clarity & Mind Focus).",
        "Thân pháp cột sống uốn lượn hình sóng (Spinal Wave Dynamics).",
        "Chưởng lực phát xuất từ tâm ý và hơi thở nội tại."
      ]
    },
    pgvxUniqueness: {
      distinctiveFeatures: "Long quyền trong Phật Gia Vịnh Xuân kết hợp chặt chẽ với động tác chưởng pháp xoay vòng, lấy tâm bình khí hòa chế ngự hung khí đối phương.",
      biomechanicalMedicalValue: "Theo y học cổ truyền và phân tích của PGS.TS Nguyễn Mạnh Nhâm, Long quyền tác động đến kinh Tâm (Tim mạch), điều hòa huyết áp, dưỡng tâm an thần và giải tỏa stress thần kinh.",
      combatDoctrine: "Thần định tâm an — Tâm trí tĩnh lặng như nước tù, đối phương vừa động là chưởng kình lập tức phát ra chấn động nội tạng."
    },
    globalBridge: {
      master: "Thiền Tông Nam Thiếu Lâm",
      doctrine: "Thần Định Khí An & Động Thiền Chánh Niệm",
      correlation: "Cội nguồn Phật môn của Long quyền nhấn mạnh việc tu dưỡng thần thái an định, biến mỗi chuyển động thành một bài thiền động bảo dưỡng sinh mạng."
    }
  },

  "bai-22": {
    formId: "bai-22",
    title: "Xà Quyền",
    hanziName: "蛇拳 • Snake Form",
    category: "Ngũ Hình Quyền",
    categoryOrder: 4,
    formOrder: 11,
    demonstrator: "Võ sư Lê Đắc Kiên",
    meaning: "Rắn trườn trong cỏ — Luyện Khí, nhu nhuyễn xỉa huyệt, dĩ nhu khắc cương",
    philosophy: "Xà hình chủ luyện Khí. Đường quyền mềm mại như dải lụa, luồn lách né tránh đòn đánh nặng nề của đối phương, rồi bất ngờ phóng ra ngón tay xuyên thấu như rắn độc cắn vào các yếu huyệt.",
    principles: [
      "Thủ pháp mỏ rắn (Xà thủ): Các ngón tay khép chụm hoặc mở linh hoạt, xỉa thẳng vào yết hầu, mắt, nách.",
      "Uốn lượn triệt tiêu lực: Khi đối phương phát lực, thân người uốn éo theo chiều lực để vô hiệu hóa chấn động.",
      "Khí trầm đan điền: Hơi thở dài êm, kình lực phát ra đầu ngón tay sắc lẹm như mũi kim đâm."
    ],
    keyMantra: "Xà hình luyện khí • Nhu nhuyễn nhập cốt • Xỉa huyệt đoạt môn",
    introQuote: "Xà quyền chủ về luyện khí. Đặc trưng là đòn đánh mềm mại, uyển chuyển luồn lách nhưng khi điểm huyệt thì cực kỳ chuẩn xác và hiểm ác.",
    worldLineageContext: {
      globalName: "Snake Form (Xà Quyền / 蛇拳)",
      globalStanding: "Linh vật đại diện cho tính nhu nhuyễn thuần khiết nhất trong Ngũ Hình Nam Quyền.",
      historicalRoots: "Gắn liền với truyền thuyết Ni sư Ngũ Mai quan sát trận chiến giữa Rắn và Hạc để sáng tạo nên các nguyên lý Vịnh Xuân.",
      universalPrinciples: [
        "Luyện Khí (Internal Breath & Soft Energy).",
        "Đòn đánh điểm huyệt bằng ngón tay xuyên thấu (Piercing Snake Strikes).",
        "Uốn lượn triệt tiêu ngoại lực va chạm trực tiếp."
      ]
    },
    pgvxUniqueness: {
      distinctiveFeatures: "Thủ pháp 'Mỏ rắn' (Xà thủ) biến ảo kết hợp với bộ pháp trượt lách sát sườn, đòn xỉa xuất phát từ cùi chỏ thả lỏng hoàn toàn đạt tốc độ cực hạn.",
      biomechanicalMedicalValue: "Tác động sâu đến kinh Thận (Thận chủ cốt tủy, chủ nạp khí), làm mềm dẻo các khớp đốt sống và dây chằng liên gai, bồi dưỡng nguyên khí.",
      combatDoctrine: "Dĩ nhu thắng cương — Không đỡ gạt cứng, luồn theo kẽ hở của tay địch và phóng độc thủ điểm trúng yếu huyệt."
    },
    globalBridge: {
      master: "Tông Sư Diễn Sinh Đường (Quảng Châu)",
      doctrine: "Xà Hình Nhu Kình & Điểm Huyệt Đoạt Môn",
      correlation: "Dòng Vịnh Xuân Xà hình Quảng Châu chia sẻ kỹ pháp xỉa ngón tay xuyên thấu và sự mềm mại tuyệt đối tương đồng với Xà quyền Phật Gia Vịnh Xuân."
    }
  },

  "bai-23": {
    formId: "bai-23",
    title: "Hổ Quyền",
    hanziName: "虎拳 • Tiger Form",
    category: "Ngũ Hình Quyền",
    categoryOrder: 4,
    formOrder: 12,
    demonstrator: "Võ sư Đặng Danh Tuấn",
    meaning: "Mãnh hổ vồ mồi — Luyện Cốt, phát kình dũng mãnh, thế tấn vững chãi",
    philosophy: "Hổ hình chủ luyện Cốt (xương cốt). Đòn đánh mang khí thế áp đảo của chúa sơn lâm, kình lực phát xuất từ gót chân truyền qua eo hông lên móng vuốt, cấu xé và chấn động nội tạng đối thủ.",
    principles: [
      "Hổ trảo (Móng vuốt hổ): 5 ngón tay cong quắp vững chắc, dùng để bóp nát, chộp bắt và giật đứt gân cơ.",
      "Hạ bàn trầm thấp: Tấn bộ vững chãi, tạo điểm tựa phóng lực toàn thân.",
      "Khí thế áp đảo: Phát lực dũng mãnh kèm theo tiếng thở dồn nén làm rúng động tinh thần địch thủ."
    ],
    keyMantra: "Hổ hình luyện cốt • Khí thế trầm ổn • Kình lực sung mãn",
    introQuote: "Hổ quyền chủ về luyện cốt. Luyện tập giúp xương cốt cứng cáp, gân lực dũng mãnh, phát kình chấn động toàn thân.",
    worldLineageContext: {
      globalName: "Tiger Form (Hổ Quyền / 虎拳)",
      globalStanding: "Hình tượng sức mạnh cương mãnh bậc nhất của Thiếu Lâm, đối trọng hoàn hảo với tính nhu của Xà quyền.",
      historicalRoots: "Kế thừa từ Hổ Hạc Song Hình Quyền của Hồng Gia và Nam Thiếu Lâm trước khi được tích hợp vào hệ thống quyền Vịnh Xuân.",
      universalPrinciples: [
        "Luyện Cốt (Bone Density & Tendon Strength).",
        "Thủ pháp Hổ Trảo (Tiger Claw) chộp bẻ khớp và giật cơ.",
        "Phát lực cương kình chấn động từ hạ bàn (Rooted Ground Force)."
      ]
    },
    pgvxUniqueness: {
      distinctiveFeatures: "Hổ trảo trong PGVX không vung rộng cánh tay mà đánh thu gọn trong trục Tý Ngọ Tuyến, chộp bắt cổ tay và giật mạnh phá vỡ cấu trúc khớp của địch.",
      biomechanicalMedicalValue: "Tác động đến kinh Phế (Phổi) và hệ thống màng xương, gia tăng sức chịu lực nén của khung xương và tăng cường dung tích thông khí phổi.",
      combatDoctrine: "Cương kình chấn áp — Khi đối thủ mất thăng bằng, lập tức áp sát tung hổ trảo bẻ khớp hoặc đánh sập hạ bàn đối phương."
    },
    globalBridge: {
      master: "Ngũ Mai Sư Thái (Ng Mui Nun)",
      doctrine: "Cương Nhu Tương Tế — Hổ Trảo Phá Khớp",
      correlation: "Ngũ Mai kết hợp sức mạnh móng vuốt Hổ với độ nhạy bén của cành liễu, tạo nên thế đòn vừa vững vàng vừa uy lực trong Phật Gia Vịnh Xuân."
    }
  },

  "bai-24": {
    formId: "bai-24",
    title: "Báo Quyền",
    hanziName: "豹拳 • Leopard Form",
    category: "Ngũ Hình Quyền",
    categoryOrder: 4,
    formOrder: 13,
    demonstrator: "Võ sư Trần Bạch Tiến",
    meaning: "Báo gấm săn mồi — Luyện Lực, tốc độ bão táp, tấn công dồn dập",
    philosophy: "Báo hình chủ luyện Lực (sức bật và tốc độ). Báo không nặng nề như Hổ mà nhanh nhẹn phi thường, tận dụng sức bật cơ bắp để tung ra chuỗi đòn chớp nhoáng liên hồi không ngừng nghỉ.",
    principles: [
      "Báo quyền (Nắm đấm báo): Các khớp ngón tay gập vuông, mặt đốt ngón phẳng để đập mạnh vào thái dương, chấn thủy.",
      "Tấn công chớp nhoáng: Xuất liên tiếp nhiều đòn trong một nhịp thở khiến đối phương không kịp chống đỡ.",
      "Bộ pháp thoăn thoắt: Lướt cự ly ngắn, đổi góc đánh liên tục làm hoa mắt đối thủ."
    ],
    keyMantra: "Báo hình luyện lực • Thần tốc như lôi • Liên hoàn công phá",
    introQuote: "Báo quyền chủ về luyện lực và tốc độ. Đòn thế phát ra chớp nhoáng, sắc bén, dồn dập khiến đối phương trở tay không kịp.",
    worldLineageContext: {
      globalName: "Leopard Form (Báo Quyền / 豹拳)",
      globalStanding: "Đại diện cho tốc độ bộc phát cực đại và sự hung hãn chớp nhoáng trong ngũ hình quyền truyền thống.",
      historicalRoots: "Được tôi luyện qua các trận cận chiến thực tế đòi hỏi kết thúc giao tranh trong vài giây ngắn ngủi.",
      universalPrinciples: [
        "Luyện Lực & Tốc độ bộc phát (Explosive Speed & Fast-twitch Muscles).",
        "Nắm đấm đốt ngón tay (Leopard Fist / Half-fist).",
        "Chuỗi đòn tấn công liên hồi không cho đối phương cơ hội thở."
      ]
    },
    pgvxUniqueness: {
      distinctiveFeatures: "Báo quyền Phật Gia Vịnh Xuân sử dụng mặt phẳng các đốt ngón tay đập chéo vào thái dương, yết hầu hoặc xương sườn, đòn đánh dồn dập như mưa rào.",
      biomechanicalMedicalValue: "Tác động đến kinh Can (Gan chủ cân - gân cơ), kích thích hệ cơ xương khớp co bóp nhanh, giải tỏa ứ trệ khí huyết và tăng khả năng phản xạ thần kinh vận động.",
      combatDoctrine: "Thần tốc liên hoàn — Không cho địch thủ kịp định thần, liên tiếp tung chuỗi đòn hủy diệt mọi ý chí kháng cự."
    },
    globalBridge: {
      master: "Võ Sư Phùng Thiếu Khanh (Fung Siu Ching)",
      doctrine: "Thần Tốc Như Lôi & Cận Chiến Dồn Dập",
      correlation: "Phùng Thiếu Khanh nổi tiếng với các đòn đoản đả tốc độ cao của phái Vịnh Xuân thuyền đỏ, phản ánh xuất sắc linh hồn tốc độ của Báo quyền."
    }
  },

  "bai-25": {
    formId: "bai-25",
    title: "Hạc Quyền",
    hanziName: "鶴拳 • Crane Form",
    category: "Ngũ Hình Quyền",
    categoryOrder: 4,
    formOrder: 14,
    meaning: "Hạc trắng trong sương — Luyện Tinh, thăng bằng thoát tục, điểm huyệt hiểm hóc",
    philosophy: "Hạc hình chủ luyện Tinh (sự tinh túy và tinh thần). Hạc đứng trên một chân vững như bàn thạch, cánh hạc xòe rộng hóa giải mọi đòn tấn công, mỏ hạc xỉa điểm huyệt với độ chính xác cao.",
    principles: [
      "Hạc chủy và Hạc dực: Chụm ngón tay làm mỏ hạc mổ vào yếu huyệt, cổ tay cong quạt lực bảo vệ ngực mặt.",
      "Độc lập tấn: Luyện thăng bằng đứng trên một chân, chân kia sẵn sàng tung cước hiểm vào hạ bộ hoặc gối đối phương.",
      "Điềm tĩnh thanh cao: Thần thái ung dung, lấy tĩnh chế động, lấy thăng bằng thắng hỗn loạn."
    ],
    keyMantra: "Hạc hình luyện tinh • Điểm huyệt thanh linh • Độc lập thăng bằng",
    introQuote: "Hạc quyền chủ về luyện tinh. Đòn đánh nhẹ nhàng, thanh thoát, tập trung vào sự thăng bằng ổn định và định vị mục tiêu chuẩn xác.",
    worldLineageContext: {
      globalName: "Crane Form (Hạc Quyền / 鶴拳 - White Crane Roots)",
      globalStanding: "Cội nguồn kỹ thuật trực tiếp nhất của Vịnh Xuân Quyền (bắt nguồn từ Bạch Hạc Phúc Kiến của Phương Thất Nương).",
      historicalRoots: "Mọi đòn Than Thủ, Bàng Thủ, Phục Thủ của Vịnh Xuân đều mang hơi thở của đôi cánh Hạc xòe khép hóa giải kình lực.",
      universalPrinciples: [
        "Luyện Tinh (Refined Focus & Precise Energy).",
        "Hạc dực (Cánh hạc) gạt hóa giải lực xung kích.",
        "Thăng bằng độc lập một chân (Single-leg Balance)."
      ]
    },
    pgvxUniqueness: {
      distinctiveFeatures: "Độc lập tấn đứng một chân cực kỳ vững chãi, chân giấu ngầm bên dưới sẵn sàng tung đòn triệt hạ khớp gối đối thủ một cách bất ngờ.",
      biomechanicalMedicalValue: "Tác động đến kinh Tỳ (Hệ tiêu hóa), rèn luyện sự ổn định của khớp cổ chân, khớp gối và tăng cường chức năng thăng bằng của tiểu não.",
      combatDoctrine: "Thanh linh điểm huyệt — Nhẹ nhàng như mây gió, dùng mỏ hạc mổ chính xác vào huyệt đạo then chốt kết thúc giao tranh."
    },
    globalBridge: {
      master: "Sư Tổ Nghiêm Vịnh Xuân (Yim Wing Chun)",
      doctrine: "Bạch Hạc Hóa Giải & Độc Lập Thăng Bằng",
      correlation: "Nghiêm Vịnh Xuân học được yếu lĩnh Bạch Hạc từ Ngũ Mai để khắc chế kẻ địch to lớn, chính là cái nôi khai sinh ra toàn bộ triết lý Hạc quyền Phật Gia Vịnh Xuân."
    }
  },

  "bai-26": {
    formId: "bai-26",
    title: "Ngũ Hình Quyền Tổng Hợp",
    hanziName: "五形綜合拳 • Combined 5 Animals",
    category: "Ngũ Hình Quyền",
    categoryOrder: 4,
    formOrder: 15,
    meaning: "Ngũ thú hợp nhất — Tổng hòa linh hoạt các yếu lĩnh của Long, Xà, Hổ, Báo, Hạc",
    philosophy: "Hợp nhất trọn vẹn cả 5 linh thú: Thần của Rồng, Khí của Rắn, Cốt của Cọp, Lực của Báo, Tinh của Hạc. Võ sinh biến hóa không ngừng tùy theo thế đánh của đối phương, khi thì mềm mại như lụa, khi thì dũng mãnh như sét đánh.",
    principles: [
      "Ngũ hành tương sinh tương khắc: Gặp địch cương mãnh dùng Xà Hạc hóa giải, gặp địch né tránh dùng Hổ Báo áp đảo.",
      "Thân pháp biến ảo vô cùng: Không câu nệ một hình tướng, hòa quyện tự nhiên theo dòng chảy đối kháng.",
      "Nội ngoại tương hợp: Khí lực, gân cốt và tinh thần hòa làm một thể thống nhất."
    ],
    keyMantra: "Ngũ thú quy nhất • Biến hóa vô cùng • Nội ngoại tương hợp",
    introQuote: "Bài Ngũ hình tổng hợp là sự kết tinh toàn diện của 5 linh vật võ thuật, thể hiện nét đặc sắc nghệ thuật quyền pháp Phật Gia Vịnh Xuân.",
    worldLineageContext: {
      globalName: "Shaolin Five Animals Synthesis Form (五形綜合拳)",
      globalStanding: "Sự dung hợp hài hòa của quyền thuật mô phỏng tự nhiên, kết tinh trí tuệ của nền võ học phương Đông.",
      historicalRoots: "Được Sư Tổ Nguyễn Tế Công và Cụ Trần Thúc Tiển gìn giữ như di sản truyền thống quý báu của Phật Gia Vịnh Xuân tại Hà Nội.",
      universalPrinciples: [
        "Vô hình vô tướng — Tùy cơ ứng biến không rập khuôn.",
        "Dung hợp hoàn hảo giữa Nhu (Xà, Hạc) và Cương (Hổ, Báo) dưới sự chỉ huy của Tâm (Long).",
        "Cân bằng lục phủ ngũ tạng theo thuyết Ngũ Hành phương Đông."
      ]
    },
    pgvxUniqueness: {
      distinctiveFeatures: "Chuyển hóa mượt mà giữa các hình thái linh vật trong cùng một bài quyền: Vừa mở đầu mềm mại như Rắn luồn cỏ, lập tức biến thành Móng vuốt Cọp bẻ khớp và tung Cánh hạc bay lượn.",
      biomechanicalMedicalValue: "Bài tập dưỡng sinh toàn thân toàn bích nhất: Vận hành trọn vẹn cả 5 tạng (Tâm - Can - Tỳ - Phế - Thận) và thông suốt 12 đường kinh lạc chính của cơ thể.",
      combatDoctrine: "Dĩ bất biến ứng vạn biến — Không để lộ ý đồ, đòn thế chuyển đổi linh hoạt uyển chuyển như nước chảy mây trôi."
    },
    globalBridge: {
      master: "Sư Tổ Nguyễn Tế Công (Yuen Chai Wan)",
      doctrine: "Ngũ Thú Quy Nhất & Y Võ Song Tu",
      correlation: "Sư Tổ Nguyễn Tế Công truyền dạy Ngũ Hình Quyền Tổng Hợp như một di sản quý báu, minh chứng cho nét đặc sắc của dòng Vịnh Xuân tại Việt Nam."
    }
  },

  // ==============================================================================
  // 5. KHO BINH KHÍ CỔ TRUYỀN
  // ==============================================================================
  "bai-31": {
    formId: "bai-31",
    title: "Bát Trảm Đao",
    hanziName: "八斬刀 • Baat Jaam Do / Bart Cham Dao",
    category: "Kho Binh Khí",
    categoryOrder: 5,
    formOrder: 16,
    demonstrator: "Võ sư Nguyễn Chí Kiên",
    meaning: "Tám phép chém đao — Mở rộng nguyên lý tiết kiệm động tác sang song binh khí ngắn",
    philosophy: "Bát Trảm Đao là cặp đao ngắn dính liền với cẳng tay như mọc thêm đôi cánh sắt. Đao không múa lượn rườm rà mà áp dụng nguyên lý cùi chỏ và Tý Ngọ Tuyến của tay không, chém xả dứt khoát trong cự ly hẹp.",
    principles: [
      "Đao sát cẳng tay: Lưỡi đao luôn nằm sát cạnh tay để vừa đỡ đòn của đối phương, vừa chém xoay bất ngờ.",
      "Song đao phối hợp: Một đao đỡ gạt khống chế vũ khí địch, một đao lập tức chém vào cổ tay hoặc yết hầu.",
      "Cước bộ linh hoạt: Kết hợp xước mã và đạp bộ nhanh nhẹn để nhập nội áp sát đối phương."
    ],
    keyMantra: "Song đao mở rộng • Tiết kiệm động tác • Bát trảm đoạn môn",
    introQuote: "Bát Trảm Đao là vũ khí tiêu biểu nhất của Vịnh Xuân Quyền. Đao ngắn gọn, thực dụng, kết hợp nhuần nhuyễn giữa kỹ thuật chém, đỡ và nhập nội.",
    worldLineageContext: {
      globalName: "Baat Jaam Do (Eight Slash Butterfly Swords / 八斬刀)",
      globalStanding: "Trụ cột thứ sáu: 'Song đao mở rộng nguyên lý sang binh khí ngắn'. Rèn luyện phối hợp độc lập hai tay, bộ pháp, góc vận động và kiểm soát cự ly; củng cố tính tiết kiệm động tác (motion economy) đã học ở tay không.",
      historicalRoots: "Được thiết kế cho các cao thủ Hồng Thuyền để chiến đấu cận chiến trong khoang thuyền hẹp chống lại giáo mác dài của quan binh.",
      universalPrinciples: [
        "Song đao coi như sự kéo dài của cẳng tay (Extension of the Arms).",
        "Áp dụng nguyên lý góc chóp nêm và bảo vệ Tý Ngọ Tuyến như quyền pháp tay không.",
        "8 tiết đoạn chém triệt hạ vũ khí và các khớp cổ tay của đối phương."
      ],
      lineageVariantNotes: "Thường được truyền dạy ở giai đoạn sau cùng để hoàn thiện tư duy chiến thuật toàn diện của môn đồ."
    },
    pgvxUniqueness: {
      distinctiveFeatures: "Bản đao dày dặn, lưỡi đao ép sát xương cẳng tay dùng sống đao đỡ đòn nặng và xoay cổ tay chém xả chớp nhoáng, kết hợp bộ pháp tiến thoái áp sát triệt tiêu ưu thế binh khí dài.",
      biomechanicalMedicalValue: "Gia tăng sức mạnh gân cơ cẳng tay, sự linh hoạt của khớp cổ tay và phản xạ thần kinh vận động phối hợp độc lập giữa hai tay.",
      combatDoctrine: "Đoản binh nhập nội — Luồn lách áp sát qua tầm sát thương của vũ khí dài, tung 8 đường chém đoạt môn vô hiệu hóa đối thủ."
    },
    globalBridge: {
      master: "Tông Sư Lương Tán & Diệp Vấn",
      doctrine: "Song Đao Hộ Thân & Đao Sát Cẳng Tay",
      correlation: "Diệp Vấn coi Bát Trảm Đao là bảo vật chỉ truyền dạy cho môn đồ chân truyền, hoàn toàn tương thích với vị trí tối cao của đao pháp trong Phật Gia Vịnh Xuân."
    }
  },

  "con": {
    formId: "con",
    title: "Lục Điểm Bán Côn",
    hanziName: "六點半棍 • Luk Dim Boon Gwun",
    category: "Kho Binh Khí",
    categoryOrder: 5,
    formOrder: 17,
    demonstrator: "Võ sư Nguyễn Văn Chiến",
    meaning: "Côn sáu điểm rưỡi — Rèn lực và độ chính xác ở tầm dài, khuếch đại sai lệch kỹ thuật",
    philosophy: "Cây côn dài hơn 2 mét nhưng vận dụng kỹ thuật 'đoản binh trường dụng'. Lục Điểm Bán Côn tập trung vào 6 điểm rưỡi then chốt: Đâm, gạt, nâng, đè, chém, đập và nửa điểm mượn lực, phóng kình từ gót chân lên đầu côn.",
    principles: [
      "Thương kình nhập côn: Dùng đầu côn đâm xuyên như ngọn giáo, phát lực kình chấn động cực mạnh.",
      "Trung tuyến côn pháp: Giữ thân côn luôn chiếm đường giữa, kiểm soát hoàn toàn không gian trước mặt.",
      "Vững như bàn thạch: Tấn pháp trầm thấp, eo hông xoay mở tối đa để sinh lực phóng ra đầu côn."
    ],
    keyMantra: "Côn rèn tầm dài • Khuếch đại sai số • Trực chỉ trung tâm",
    introQuote: "Lục Điểm Bán Côn là môn binh khí dài độc đáo. Côn pháp tinh giản nhưng ẩn chứa kình lực sâu dày phát xuất từ toàn thân.",
    worldLineageContext: {
      globalName: "Luk Dim Boon Gwun (Six and a Half Point Pole / 六點半棍)",
      globalStanding: "Trụ cột thứ năm: 'Côn rèn lực và độ chính xác ở tầm dài'. Chiều dài 2.7m của côn khiến những sai lệch nhỏ ở chân - eo - tay trở nên rất rõ ràng ở đầu côn, giúp người tập tự chỉnh lại toàn bộ cấu trúc phát lực.",
      historicalRoots: "Truyền từ Chí Thiện Thiền Sư (Chi Shin) truyền cho Lương Nhị Đệ (Leung Yee Tai) trên Hồng Thuyền, sau đó dung hợp vào Vịnh Xuân.",
      universalPrinciples: [
        "Sáu điểm rưỡi kỹ thuật chuẩn mực (Hồi, Tiêu, Đạn, Khiêu, Lang, Triệt, và Bán Điểm).",
        "Đoản binh trường dụng — Dùng côn dài với sự nhanh gọn của đoản đả.",
        "Phát lực từ eo hông và gót chân xuyên suốt thân côn ra đầu côn."
      ],
      lineageVariantNotes: "Chiều dài của côn đóng vai trò như đòn bẩy đo lường tính chuẩn xác của cấu trúc cơ sinh học toàn thân."
    },
    pgvxUniqueness: {
      distinctiveFeatures: "Thế tấn Kiềm Dương hạ thấp vững chắc, đòn đâm thẳng trung lộ (Thương kình) làm chủ đạo, không múa may hoa mỹ, đâm thẳng vào tim mục tiêu với sức công phá cực mạnh.",
      biomechanicalMedicalValue: "Cải thiện sức mạnh của khối cơ lưng rộng (latissimus dorsi), cơ thang và toàn bộ chuỗi cơ trục cột sống thắt lưng, rèn luyện lực nắm bàn tay cực đại.",
      combatDoctrine: "Nhất thốn trường nhất thốn cường — Kiểm soát cự ly tuyệt đối, một đòn đâm thẳng trung tâm triệt hạ mọi sự tiếp cận của địch."
    },
    globalBridge: {
      master: "Chí Thiện Thiền Sư (Hồng Thuyền)",
      doctrine: "Thương Kình Nhập Côn & Trực Chỉ Trung Tâm",
      correlation: "Chí Thiện Thiền Sư đem thương pháp Thiếu Lâm dung nạp vào thân côn gỗ, tạo nên đòn côn súc tích uy lực của Phật Gia Vịnh Xuân ngày nay."
    }
  },

  "lieu-diep-kiem": {
    formId: "lieu-diep-kiem",
    title: "Liễu Diệp Kiếm",
    hanziName: "柳葉劍 • Willow Leaf Sword",
    category: "Kho Binh Khí",
    categoryOrder: 5,
    formOrder: 18,
    demonstrator: "Võ sư Phật Gia Vịnh Xuân",
    meaning: "Thanh kiếm mềm mại như lá liễu — Kiếm khí thanh linh, điểm huyệt thoát tục",
    philosophy: "Thanh kiếm mềm mại thanh thoát như lá liễu trước gió. Không dùng sức mạnh cơ bắp đối đầu trực diện với đao thương nặng, mà dùng mũi kiếm mượn đà trượt theo thân vũ khí đối phương, đâm điểm vào yếu huyệt chớp nhoáng.",
    principles: [
      "Kiếm khí thanh linh: Cổ tay dẻo dai điều khiển mũi kiếm biến ảo như chim én lượn.",
      "Điểm kiếm, triệt kiếm: Dùng sống kiếm gạt trôi đòn tấn công, dùng mũi kiếm điểm vào khớp tay đối thủ.",
      "Thân kiếm hợp nhất: Người đi theo kiếm, kiếm dẫn dắt người, bộ pháp nhẹ nhàng không vương bụi trần."
    ],
    keyMantra: "Kiếm khí thanh linh • Thân kiếm hợp nhất • Điểm huyệt như phong",
    introQuote: "Liễu Diệp Kiếm mang nét đẹp thanh tao, thoát tục của Phật gia. Kiếm pháp đòi hỏi sự tĩnh lặng của tâm hồn và độ nhạy cảm phi thường của cổ tay.",
    worldLineageContext: {
      globalName: "Willow Leaf Sword (Liễu Diệp Kiếm / 柳葉劍)",
      globalStanding: "Binh khí thanh thoát hiếm có mang phong vị thiền môn sâu đậm, bổ khuyết cho tính cương mãnh của đao và côn.",
      historicalRoots: "Được các bậc tiền bối Phật môn gìn giữ và truyền thừa trong nhánh Phật Gia Vịnh Xuân Việt Nam.",
      universalPrinciples: [
        "Kiếm pháp dĩ nhu thắng cương, mượn đà trôi lực.",
        "Điểm huyệt triệt khí giới thay vì sát phạt đẫm máu.",
        "Thân kiếm hợp nhất — Thần thái ung dung tự tại."
      ]
    },
    pgvxUniqueness: {
      distinctiveFeatures: "Lưỡi kiếm mỏng dẻo, vận dụng triệt để nguyên lý 'Thính kình' qua sự tiếp xúc của sống kiếm, trượt theo vũ khí địch để điểm vào cổ tay tước khí giới theo tinh thần từ bi hộ sinh.",
      biomechanicalMedicalValue: "Luyện độ dẻo dai phi thường của khớp cổ tay và vai, điều hòa hơi thở êm dịu, rèn luyện sự tập trung chánh niệm cao độ của tâm trí.",
      combatDoctrine: "Từ bi hộ sinh — Xuất kiếm hóa giải hiểm nguy, tước vũ khí đối phương mà không làm tổn hại sinh mạng."
    },
    globalBridge: {
      master: "Cội Nguồn Phật Gia Võ Đạo",
      doctrine: "Kiếm Khí Thanh Linh & Từ Bi Hộ Sinh",
      correlation: "Liễu Diệp Kiếm thể hiện trọn vẹn bản sắc Phật Gia: Võ thuật không nhằm sát phạt mà là công cụ rèn luyện thân tâm và bảo vệ sự bình an của muôn loài."
    }
  }
};

export const FORM_CATEGORIES = [
  { id: "all", name: "Tất Cả 18 Bài", count: 18, desc: "Trọn bộ 18 bài quyền & binh khí truyền thừa" },
  { id: "Tam Đại Quyền", name: "Tam Đại Quyền", count: 3, desc: "Tiểu Niệm Đầu, Tầm Kiều, Tiêu Chỉ" },
  { id: "108 Thế Liên Hoàn", name: "108 Thế Liên Hoàn", count: 4, desc: "Đơn luyện & đối luyện (tại chỗ và tiến lùi)" },
  { id: "Cọc Gỗ Mộc Nhân", name: "Cọc Gỗ Mộc Nhân", count: 2, desc: "Mộc nhân số 1 và mộc nhân tiến lùi" },
  { id: "Ngũ Hình Quyền", name: "Ngũ Hình Quyền", count: 6, desc: "Long, Xà, Hổ, Báo, Hạc và Ngũ hình tổng hợp" },
  { id: "Kho Binh Khí", name: "Kho Binh Khí Cổ Truyền", count: 3, desc: "Bát Trảm Đao, Lục Điểm Bán Côn, Liễu Diệp Kiếm" }
] as const;

export const FORMS_18_STAGES = [
  {
    sequence: 1,
    id: "stage-tam-dai-quyen",
    title: "Chặng 1: Tam Đại Quyền Pháp Cốt Lõi",
    desc: "Nền tảng quyền thuật tay không kinh điển: Khởi đầu từ Tiểu Niệm Đầu, mở rộng qua Tầm Kiều và tinh thông với Tiêu Chỉ.",
    formIds: ["bai-07", "bai-09", "bai-10"]
  },
  {
    sequence: 2,
    id: "stage-108-the",
    title: "Chặng 2: Hệ Thống 108 Thế Liên Hoàn",
    desc: "Bộ pháp và quyền pháp hoàn chỉnh gồm 108 thế võ chân truyền, luyện cả đơn luyện và đối luyện 2 người.",
    formIds: ["bai-12", "bai-13", "bai-14", "bai-15"]
  },
  {
    sequence: 3,
    id: "stage-moc-nhan",
    title: "Chặng 3: Mộc Nhân (Mộc Nhân Thung)",
    desc: "Rèn luyện độ cứng cáp của cẳng tay, bộ pháp nêm góc và phản xạ xúc giác quanh cây mộc nhân di sản 1954.",
    formIds: ["bai-17", "bai-18"]
  },
  {
    sequence: 4,
    id: "stage-ngu-hinh",
    title: "Chặng 4: Ngũ Hình Quyền & Quyền Tổng Hợp",
    desc: "Mô phỏng thần thái và đặc tính của 5 linh vật võ thuật: Long (Thần), Xà (Khí), Hổ (Cốt), Báo (Lực), Hạc (Tinh).",
    formIds: ["bai-21", "bai-22", "bai-23", "bai-24", "bai-25", "bai-26"]
  },
  {
    sequence: 5,
    id: "stage-binh-khi",
    title: "Chặng 5: Kho Binh Khí Cổ Truyền",
    desc: "Ứng dụng chuyên sâu binh khí Phật Gia Vịnh Xuân: Song đao Bát Trảm Đao, Lục Điểm Bán Côn và Liễu Diệp Kiếm.",
    formIds: ["bai-31", "con", "lieu-diep-kiem"]
  }
];

export function getFormIntro(formId: string): FormIntroduction | undefined {
  return FORMS_18_INTRO[formId];
}
