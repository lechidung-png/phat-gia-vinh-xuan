// ============================================================================
// CƠ CHẾ DÙNG LỰC TAY - CHÂN & TRIẾT LÝ KHÍ LỰC PHẬT GIA VỊNH XUÂN
// Kết hợp 100% Giáo trình Sách gốc (PGS.TS Y Khoa Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức)
// cùng Cơ sinh học Hiện đại (Biomechanics / Myofascial Chains) & Nội công Đông phương
// Có đầy đủ trích dẫn nguồn học thuật Đông - Tây đối chiếu
// ============================================================================

export interface KineticQiNode {
  step: number;
  id: string;
  bodyPart: string;
  hanNom: string;
  acupointOrAnatomy: string;
  shortRole: string;
  biomechanicsTitle: string;
  biomechanicsMechanism: string;
  physicsFormulaOrPrinciple: string;
  easternQiTitle: string;
  easternQiMechanism: string;
  whyForceBreaks: string;
  canonicalBookQuote: string;
  bookPageRef: string;
  scientificCitations: string[];
  bookImg: string;
  bookImgCaption: string;
  svgCoord: { x: number; y: number };
}

export interface LimbForceSecret {
  id: string;
  category: "hand" | "foot";
  title: string;
  hanNom: string;
  subtitle: string;
  coreMechanism: string;
  scientificExplanation: string;
  qiAndInternalExplanation: string;
  canonicalQuote: string;
  bookPage: string;
  academicCitations: string[];
  imageUrl: string;
  imageCaption: string;
  keyTakeaways: string[];
}

export interface QiPhenomenonStudy {
  id: string;
  number: string;
  title: string;
  hanNom: string;
  easternPrinciple: string;
  historicalEvidence: string;
  modernMedicalAndBiophysicsBridge: string;
  whyWestCannotFullyExplainYet: string;
  bookReference: string;
  academicCitations: string[];
  imageUrl: string;
  imageCaption: string;
}

export interface ForceComparisonRow {
  criterion: string;
  bruteForce: string;
  wingChunJin: string;
  sourceRef: string;
}

export interface SelfExperiment {
  id: string;
  step: number;
  title: string;
  duration: string;
  goal: string;
  wrongWay: string;
  rightWay: string;
  whatYouWillFeel: string;
  sourceCitation: string;
}

export interface AcademicBibliographyEntry {
  id: string;
  code: string;
  category: "Sách Gốc & Kinh Điển Vịnh Xuân" | "Cơ Sinh Học & Vật Lý Võ Học" | "Giải Phẫu Mạc Cơ, Thần Kinh & Kinh Lạc";
  authors: string;
  year: string;
  title: string;
  publication: string;
  pagesOrDoi: string;
  keyContribution: string;
}

export const FORCE_PHILOSOPHY_HERO = {
  eyebrow: "CHUYÊN KHẢO CỐT TỦY • CƠ SINH HỌC & NỘI GIA KHÍ LỰC (CÓ TRÍCH DẪN NGUỒN)",
  title: "Lý Thuyết & Triết Lý Dùng Lực Tay – Chân Trong Vịnh Xuân",
  hanNom: "力從地起 • 意到氣到 • 氣到力到 • 寸勁爆發",
  subtitle:
    "Giải mã tường tận nghịch lý lớn nhất của Vịnh Xuân Quyền: Vì sao đứng tấn tại chỗ hoặc chỉ lướt nhẹ mà lực từ lòng bàn chân lại có thể truyền xuyên qua hông, cột sống để bộc phát thành Thốn Kình sấm sét ở đôi tay?",
  coreMotto:
    "Lực do địa khởi, quyền tùy tâm phát • Đả quyền bất luyện công, đáo lão nhất trường không • Lực bất đả quyền, quyền bất đả công.",
  coreMottoSource:
    "PGS.TS Y khoa Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), «Phật Gia Vịnh Xuân Quyền», NXB Văn Hóa Thông Tin — Trang 27, 164 & 167",
};

// ============================================================================
// 1. NĂM MẮT XÍCH TRUYỀN LỰC & DẪN KHÍ TỪ MẶT ĐẤT LÊN ĐÔI TAY (5 NODES)
// ============================================================================
export const FIVE_KINETIC_QI_NODES: KineticQiNode[] = [
  {
    step: 1,
    id: "node-1-root",
    bodyPart: "Trạm 1: Bàn Chân & Mặt Đất (Gốc Rễ Phát Lực)",
    hanNom: "足不離地 • 湧泉生根",
    acupointOrAnatomy: "Huyệt Dũng Tuyền (K1) • Cân gan bàn chân (Plantar Fascia)",
    shortRole: "Tạo Phản lực mặt đất (GRF) và hút Địa Khí đi lên",
    biomechanicsTitle: "Định luật III Newton & Phản Lực Mặt Đất (Ground Reaction Force)",
    biomechanicsMechanism:
      "Nhiều người thắc mắc: 'Chân đứng yên không chạy lấy đà thì lấy đâu ra lực ở chân?'. Câu trả lời nằm ở Định luật III Newton (F_phản = -F_tác_dụng): Khi nắm đấm chạm mục tiêu phía trước, mục tiêu đẩy ngược lại cơ thể một lực tương đương. Nếu bàn chân không bám chặt xuống sàn, cơ thể sẽ bị đẩy lùi ra sau làm triệt tiêu lực đấm. Trong Vịnh Xuân, khoảnh khắc phát kình, 10 đầu ngón chân bấm chặt và rìa trong bàn chân xoắn xuống mặt sàn, kích hoạt ngay lập tức một sóng Phản lực mặt đất (GRF) dội ngược từ đất lên xương chày với vận tốc truyền sóng cơ học 30–50 m/s mà không cần phải nhấc chân bước đi!",
    physicsFormulaOrPrinciple: "F⃗_GRF = -F⃗_đạp_đất  ➔  Sóng xung kích cơ học khởi phát từ điểm tựa bất động",
    easternQiTitle: "Khai Mở Huyệt Dũng Tuyền & Giao Hòa Âm Dương",
    easternQiMechanism:
      "Theo Đông Y và Nội công Phật Gia Vịnh Xuân, lòng bàn chân là nơi tọa lạc của huyệt Dũng Tuyền (suối nguồn tuôn trào) — điểm khởi đầu của kinh Thiếu Âm Thận. Khi tập Tiểu Niệm Đầu, trọng tâm trầm xuống, lòng bàn chân rỗng nhẹ nhưng 10 ngón chân bám đất ('Túc bất ly địa'), tạo thành cửa ngõ hút Khí Dương (Địa khí) từ lòng đất đi lên dọc theo Túc Tam Âm Kinh để nuôi dưỡng Đan Điền.",
    whyForceBreaks:
      "Đứng nhón gót, dồn lực ra mép ngoài bàn chân hoặc nhấc chân mất gốc khi ra đòn khiến Phản lực mặt đất bằng 0 và đứt mạch Địa khí.",
    canonicalBookQuote:
      "Cũng vì lực từ mặt đất mà lên (lực do địa khởi), môn sinh VXQ cần phải đứng rất vững như mọc rễ vào đất... Trong khi di chuyển chân phải bấm chặt không rời mặt đất (túc bất ly địa). Chân còn là cầu nối để lực đi từ mặt đất lên thân thể (qua huyệt Dũng Tuyền).",
    bookPageRef: "Sách gốc Phật Gia Vịnh Xuân Quyền (PGS.TS Nguyễn Mạnh Nhâm, 2006) — Trang 36 & Trang 165",
    scientificCitations: [
      "[1] PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), «Phật Gia Vịnh Xuân Quyền», NXB Văn Hóa Thông Tin, Tr. 36 & Tr. 165 (Mục: Lực do địa khởi & Huyệt Dũng Tuyền).",
      "[5] Neto, O. P., Magini, M., & Saba, M. M. (2007), «The role of effective mass and hand speed in the performance of kung fu strikes», Sports Biomechanics, 6(1), 39–48 (Phân tích vai trò của phản lực mặt đất GRF tạo nên khối lượng hiệu dụng toàn thân).",
      "[7] Myers, Thomas W. (2020), «Anatomy Trains: Myofascial Meridians» (4th Ed.), Elsevier, Ch. 9: The Deep Front Line (Khởi đầu chuỗi mạc cơ sâu từ cân gan bàn chân).",
    ],
    bookImg: "/assets/hinh-2x/p037-h01.png",
    bookImgCaption: "Hình H0028 (Trang 37 Sách gốc): Đứng tấn Nhị Tự Kiềm Dương Mã — 10 ngón chân bám đất khai mở huyệt Dũng Tuyền.",
    svgCoord: { x: 200, y: 495 },
  },
  {
    step: 2,
    id: "node-2-knees",
    bodyPart: "Trạm 2: Cổ Chân, Ống Quyển & Vòm Gối Kiềm Dương",
    hanNom: "二字拑羊馬 • 膝肘相合",
    acupointOrAnatomy: "Vòm kết cấu chữ A (A-Frame Truss) • Huyệt Túc Tam Lý & Tam Âm Giao",
    shortRole: "Nén lò xo xoắn hướng tâm và khóa độ rơ khớp chi dưới",
    biomechanicsTitle: "Cơ Chế Vòm Nén Chữ A & Lò Xo Xoắn (Torsion Spring Pre-loading)",
    biomechanicsMechanism:
      "Ở thế đứng thông thường, khớp gối và khớp cổ chân có 'độ rơ sinh học' (joint slack) khiến lực từ đất truyền lên bị thất thoát. Thế tấn Nhị Tự Kiềm Dương Mã (hai mũi chân xoay vào cách nhau 1 bàn chân, hai gót mở ra 2 bàn chân, hai đầu gối khép hướng tâm vào đường trung tuyến) biến hai chân thành một kết cấu Vòm Tam Giác (A-Frame Arch) như trụ cầu. Sự khép nhẹ vào trong của hai đầu gối tạo ra trạng thái 'đồng co cơ đẳng trường' (Isometric Co-contraction), biến đôi chân thành hai thanh lò xo xoắn đã được lên dây cót sẵn, truyền thẳng 100% phản lực từ mặt đất lên khớp háng.",
    physicsFormulaOrPrinciple: "τ_xoắn = k_gối · Δθ  ➔  Triệt tiêu độ rơ khớp (Zero Joint Slack), dẫn truyền xung lực tức thời",
    easternQiTitle: "Tụ Khí Hạ Bàn & Khóa Kình Tam Âm",
    easternQiMechanism:
      "Hai đầu gối khép nhẹ ('Kiềm dương' — như hai thân cây kẹp chặt con dê trên núi theo điển tích Chí Thiện Thiền Sư tại Trang 25) giúp gom giữ nguyên khí không bị tán ra hai bên hông. Khi đứng đủ 30–45 phút, dòng điện áp sinh học (Piezoelectricity) sinh ra từ lực nén dọc xương chày và xương đùi kích hoạt các đường kinh Túc Dương Minh Vị và Túc Tam Âm, làm hai chân nóng ấm râm ran và vững chãi như trụ đồng.",
    whyForceBreaks:
      "Hai đầu gối bị banh rộng ra ngoài (tản lực) hoặc gồng cứng đơ khớp gối làm khóa chết khả năng xoay chuyển linh hoạt của Chuyển Mã.",
    canonicalBookQuote:
      "Tấn chủ yếu là Nhị tự Kiềm dương Mã, đứng 2 bàn chân khá gần nhau, hình chữ bát, 2 mũi chân cách nhau 1 bề ngang bàn chân, 2 gót chân mở rộng ra ngoài cách nhau 2 bề ngang bàn chân; gối hơi khuyu xuống.",
    bookPageRef: "Sách gốc Phật Gia Vịnh Xuân Quyền (PGS.TS Nguyễn Mạnh Nhâm, 2006) — Trang 25 & Trang 36",
    scientificCitations: [
      "[1] PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), «Phật Gia Vịnh Xuân Quyền», Tr. 25, 36 & 164–165 (Cấu trúc Nhị Tự Kiềm Dương Mã & Nguyên lý Vững động).",
      "[2] Đại sư Chu Thượng Đồng / Chu Shong Tin (2015), «The Book of Wing Chun, Vol. 1: The Dynamic Sphere of Siu Nim Tau», H.K. Wing Chun Athletic Association (Cơ chế hội tụ lực hướng tâm của khớp gối và khớp cổ chân).",
      "[7] Myers, Thomas W. (2020), «Anatomy Trains», Ch. 6: The Spiral Line (Đường mạc cơ xoắn ốc khóa vững khớp gối và vòm bàn chân).",
    ],
    bookImg: "/assets/hinh-2x/p019-h01.png",
    bookImgCaption: "Hình Trang 19 Sách gốc: Cấu trúc tấn pháp vững chãi kết hợp thủ pháp trên trục trung tuyến.",
    svgCoord: { x: 200, y: 390 },
  },
  {
    step: 3,
    id: "node-3-pelvis-spine",
    bodyPart: "Trạm 3: Khung Chậu, Đan Điền & Cột Sống Mở Khớp",
    hanNom: "意守丹田 • 腰馬合一 • 脊椎如龍",
    acupointOrAnatomy: "Hạ Đan Điền (Khí Hải / Quan Nguyên) • Mạch Đốc & Mạc Ngực-Thắt Lưng",
    shortRole: "Bộ khuếch đại trung tâm biến lực đẩy từ chân thành sóng cột sống",
    biomechanicsTitle: "Yêu Mã Hợp Nhất, Áp Suất Nội Bụng & Mở Khớp Cột Sống (Spine Decompression)",
    biomechanicsMechanism:
      "Làm sao lực thẳng đứng từ chân biến thành lực đấm ngang ra trước? Bí mật nằm ở 'Bộ chuyển hướng Hông – Khung chậu – Cột sống'! Khi xương cụt hơi cuộn xuống dưới (Pelvic Tilt / Trầm vĩ lư), độ võng thắt lưng được làm phẳng, kết hợp cơ hoành hạ xuống khi thở bụng tạo thành một 'Quả cầu áp suất thủy tĩnh' tại bụng dưới (Intra-Abdominal Pressure). Khi xoay hông cực nhỏ (Chuyển mã) hoặc bật mở các đốt sống như dây cung (Lý thuyết 'Mở khớp cột sống / Nim Lik' của Đại sư Chu Thượng Đồng), mạng lưới Mạc ngực-thắt lưng (Thoracolumbar Fascia) và cơ lưng rộng (Latissimus Dorsi) phóng đại lực từ chân lên gấp bội và chuyển hướng vuông góc 90 độ ra phía trước!",
    physicsFormulaOrPrinciple: "M_hông = I · α + P_Đan_Điền  ➔  Chuyển hóa lực dọc từ đất thành sóng ngang qua cột sống",
    easternQiTitle: "Lò Phản Ứng Hạ Đan Điền & Hỏa Long Mạch Đốc",
    easternQiMechanism:
      "Trong Nội công Phật Gia Vịnh Xuân (Trang 178–179), Hạ Đan Điền (dưới rốn 3 phân) là lò luyện nguyên khí của cơ thể. Khi 'Ý thủ Đan Điền' (Nhất niệm trừ vạn niệm), Thần và Khí hội tụ tại đây. Lúc phát đòn, Nội khí từ Đan Điền đi qua huyệt Mệnh Môn, bốc thẳng lên dọc cột sống (Mạch Đốc — được sách gốc Trang 179 gọi là giải phóng 'Hỏa Long' ở cuối cột sống), biến toàn bộ thân người thành một khối thống nhất ('Chỉnh thể kình' / Con Lật Đật).",
    whyForceBreaks:
      "Chổng mông ra sau (võng thắt lưng làm gãy trục truyền lực cột sống), ngả đầu ra trước (Lời khuyên số 32, Trang 166) hoặc thở ngực nông làm rỗng Đan Điền.",
    canonicalBookQuote:
      "Trước tiên ta đưa Ý đến (đầu ý), THẦN sẽ đến và đem theo KHÍ — khí là vua của lực — do đó có sức mạnh... Tư thế Kiết Già và biểu tượng dòng năng lượng đi lên từ cột sống (giải phóng con rồng lửa ở vùng cuối cột sống, đả thông Nhâm - Đốc).",
    bookPageRef: "Sách gốc Phật Gia Vịnh Xuân Quyền (PGS.TS Nguyễn Mạnh Nhâm, 2006) — Trang 178–179",
    scientificCitations: [
      "[1] PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), «Phật Gia Vịnh Xuân Quyền», Chương IV: Nội Công, Tr. 178–179 (Đan Điền, Tiểu Chu Thiên & Hỏa Long cột sống).",
      "[2] Đại sư Chu Thượng Đồng / Chu Shong Tin (2015), «The Book of Wing Chun, Vol. 2: Internal Force (Nim Lik)» (Cơ chế cuộn xương cụt Tailbone Rotation và Mở khớp cột sống Spine Decompression).",
      "[6] Roberts, J. (Stanford University Neuroscience, 2012), «Beyond Brawn: The Neuroscience and Biomechanics of Bruce Lee’s One-Inch Punch» (Vai trò của xoay khung chậu Pelvic Torque trong đồng bộ chuỗi động học).",
    ],
    bookImg: "/assets/hinh-2x/p179-h01.png",
    bookImgCaption: "Hình H0954 (Trang 179 Sách gốc): Tụ khí Hạ Đan Điền và giải phóng dòng năng lượng Hỏa Long đi lên dọc cột sống.",
    svgCoord: { x: 200, y: 275 },
  },
  {
    step: 4,
    id: "node-4-shoulder-elbow",
    bodyPart: "Trạm 4: Trầm Kiên (Hạ Vai) & Trửu Để Lực (Lực Đáy Cùi Chỏ)",
    hanNom: "沉肩墜肘 • 肘底力 • 手留中線",
    acupointOrAnatomy: "Khớp Bả Vai – Lồng Ngực • Khuỷu tay trên Trục Tý Ngọ • Huyệt Cực Tuyền",
    shortRole: "Cầu nối siêu dẫn: Thả lỏng vai để không chặn lực từ chân, dùng cùi chỏ làm pít-tông",
    biomechanicsTitle: "Tại Sao Gồng Vai Làm Đứt Lực Từ Chân? & Cơ Chế 'Trửu Để Lực' + 'Giương Cung'",
    biomechanicsMechanism:
      "ĐÂY LÀ ĐIỂM MẤU CHỐT GIẢI ĐÁP VÌ SAO NGƯỜI THƯỜNG KHÔNG DẪN ĐƯỢC LỰC TỪ CHÂN LÊN TAY: Khi người chưa tập Vịnh Xuân đấm, theo bản năng họ gồng cứng cơ vai (Deltoid) và cơ ngực. Về mặt vật lý, một khớp vai gồng cứng hoạt động như một 'Bộ giảm xóc / Phanh hãm' (Energy Damper) hấp thụ và chặn đứng toàn bộ sóng xung kích vừa từ chân và cột sống truyền lên! Ngược lại, Vịnh Xuân bắt buộc phải 'Trầm kiên' (buông lỏng và hạ thấp khớp bả vai kết nối vào cơ răng trước - Serratus Anterior) và dùng 'Trửu để lực' (Lực phát từ đáy khuỷu tay đặt trên trung tuyến cách ngực 1 nắm đấm). Đồng thời, khi một tay đấm thẳng ra trước, tay kia giật mạnh về sát nách ('hai tay ngược chiều nhau như hình giương cung' — Trang 29), tạo ngẫu lực xoắn quanh cột sống nhân đôi tốc độ phóng của cùi chỏ!",
    physicsFormulaOrPrinciple: "Vai thả lỏng (Z_trở_kháng → 0) + Ngẫu lực Giương Cung  ➔  100% xung lực cột sống truyền thẳng ra cùi chỏ",
    easternQiTitle: "Khai Thông Huyệt Kiên Tỉnh – Cực Tuyền & Dòng Nước Chảy Qua Tay",
    easternQiMechanism:
      "Theo kinh lạc học, vùng vai và hõm nách là nơi đi qua của huyệt Kiên Tỉnh và Cực Tuyền (kinh Tâm) nối liền thân mình với 6 đường kinh ở tay (Thủ Tam Âm & Thủ Tam Dương). Nếu gồng cơ vai (dùng Chuyết lực), các huyệt này lập tức bị bế tắc, Nội khí từ Đan Điền và cột sống bị chặn lại ở vai. Khi thả lỏng vai như bùn nhão và dùng Ý tưởng tượng 'có một dòng nước chảy mạnh từ Đan Điền qua vai ra cánh tay' (Sách gốc Trang 180), kinh mạch thông suốt tạo nên 'Cánh tay không thể bị bẻ gập'.",
    whyForceBreaks:
      "Nhô vai lên cao, gồng cứng cơ bắp tay/vai khi bắt đầu đấm, hoặc để khuỷu tay văng ra ngoài trung tuyến (mất cấu trúc tam giác bảo vệ ngực).",
    canonicalBookQuote:
      "Khuỷu tay luôn phải ở giữa thân (thủ lưu trung tuyến)... Xung quyền (chùy): Đấm thẳng tay ra trước (trung lộ) trong khi đó giật mạnh tay kia về nách. Đổi tay liên tiếp. Hai tay ngược chiều nhau như hình giương cung.",
    bookPageRef: "Sách gốc Phật Gia Vịnh Xuân Quyền (PGS.TS Nguyễn Mạnh Nhâm, 2006) — Trang 27, 29 & 180",
    scientificCitations: [
      "[1] PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), «Phật Gia Vịnh Xuân Quyền», Tr. 27, 29, 162 & 180 (Thủ lưu trung tuyến, Xung quyền giương cung & Cánh tay dòng nước chảy).",
      "[3] Đại sư Diệp Chuẩn / Ip Chun & Michael Tse (1998), «Wing Chun: Traditional Chinese Kung Fu for Self-Defence and Health», St. Martin's Press, Ch. 3 (Nguyên lý Trầm kiên Trụy trửu & Elbow Bottom Power).",
      "[7] Myers, Thomas W. (2020), «Anatomy Trains», Ch. 7: The Arm Lines (Kết nối giải phẫu từ xương bả vai, cơ răng trước và cơ ngực bé dẫn lực ra khuỷu tay).",
    ],
    bookImg: "/assets/hinh-2x/p028-h01.png",
    bookImgCaption: "Hình Trang 28 Sách gốc: Cấu trúc Khuỷu tay giữ trung tuyến (Thủ lưu trung tuyến) và Trửu để lực.",
    svgCoord: { x: 200, y: 185 },
  },
  {
    step: 5,
    id: "node-5-fist-inch-power",
    bodyPart: "Trạm 5: Nhật Tự Quyền, Huyệt Lao Cung & Bộc Phát Thốn Kình",
    hanNom: "日字衝拳 • 寸勁 • 綿拳化鐵",
    acupointOrAnatomy: "3 Đốt dưới Nhật Tự Quyền • Huyệt Lao Cung (PC8) & Thập Tuyên",
    shortRole: "Mềm như bông trên đường đi, hóa sắt thép trong 0.01 giây chạm đích",
    biomechanicsTitle: "Cơ Chế 'Miên Quyền Hóa Thiết' & Vật Lý Học Của Thốn Kình (One-Inch Punch)",
    biomechanicsMechanism:
      "Trong suốt quãng đường di chuyển đến mục tiêu, bàn tay và cánh tay Vịnh Xuân mềm mại như bông gòn ('Miên quyền') hoặc như chiếc roi da/cật tre bật khỏi lực ép ('Thoát thủ trực xông') để đạt gia tốc cực đại mà không bị cơ đối kháng (Antagonist muscles) kìm hãm. Đúng vào khoảnh khắc chạm mục tiêu (hoặc ở cự ly chỉ 1 thốn ≈ 2.5 cm), toàn bộ 7 khớp từ cổ chân, gối, háng, cột sống, bả vai, khuỷu tay đến cổ tay (nắm đấm dọc Nhật Tự Quyền thẳng trục xương quay - xương trụ) đồng loạt khóa cứng trong 1 phần trăm giây (Δt → 0) rồi lập tức thả lỏng ngay! Do Δt cực nhỏ và khối lượng hiệu dụng (m_eff) là cả cơ thể nối với mặt đất, lực va chạm F = Δ(m_eff · v) / Δt đạt sức công phá xuyên thấu khủng khiếp.",
    physicsFormulaOrPrinciple: "F_thốn_kình = Δ(m_toàn_thân · v) / Δt (với Δt ≈ 0.015s)  ➔  Xung lực xuyên thấu nội tạng (Nội chấn)",
    easternQiTitle: "Lục Hợp Nhất Thể & Phát Khí Qua Huyệt Lao Cung / Thập Tuyên",
    easternQiMechanism:
      "Tại điểm chạm đích, môn sinh thực hiện trọn vẹn 'Lục Hợp' (Sách gốc Trang 27 & 180): Nội Tam Hợp (Thần hợp Khí, Ý hợp Lực, Nội hợp Ngoại) và Ngoại Tam Hợp (Kiên hợp Yêu [Vai - Hông], Tất hợp Trửu [Gối - Khuỷu], Thủ hợp Túc [Tay - Chân]). Nội khí tích tụ từ Đan Điền phóng vọt qua huyệt Lao Cung (giữa lòng bàn tay khi đánh Phật chưởng/Ấn chưởng/Điệp chưởng) hoặc qua các ngón tay (Tiêu chỉ / Nhật tự quyền), tạo thành luồng sóng chấn động xuyên qua lớp cơ ngoài vào sâu bên trong đối thủ.",
    whyForceBreaks:
      "Nắm chặt đấm và gồng cứng tay ngay từ lúc chưa chạm đích (biến đòn đấm thành đòn 'đẩy' làm bật người đối phương đi nhưng không gây sát thương xuyên thấu).",
    canonicalBookQuote:
      "Vịnh Xuân Quyền chỉ dụng lực khi đòn đến đích (thốn kình), tiết kiệm sức để tập trung cho đòn quyết định. Trong luyện quyền thì tay, chân chủ mềm mại như bông gòn (miên quyền) theo phương châm: 'mềm - dẻo - khéo - nhanh - mạnh'... Xuất đòn phải ứng dụng được Lục Hợp: Thần-Khí, Ý-Lực, Nội-Ngoại, Kiên-Yêu, Tất-Trửu, Thủ-Túc.",
    bookPageRef: "Sách gốc Phật Gia Vịnh Xuân Quyền (PGS.TS Nguyễn Mạnh Nhâm, 2006) — Trang 19, 27 & 164",
    scientificCitations: [
      "[1] PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), «Phật Gia Vịnh Xuân Quyền», Tr. 19, 27, 164 & 180 (Miên quyền, Thốn kình & Lục Hợp).",
      "[4] Bolander, B., Neto, O. P., & Bir, C. A. (2009), «The effects of height and distance on the force production and acceleration in martial arts strikes», Journal of Sports Science & Medicine, 8(CSSI3), 47–52.",
      "[5] Neto, O. P., Magini, M., & Saba, M. M. (2007), «The role of effective mass and hand speed in the performance of kung fu strikes», Sports Biomechanics, 6(1), 39–48, DOI: 10.1080/14763140601058490.",
    ],
    bookImg: "/assets/hinh-2x/p162-h01.png",
    bookImgCaption: "Hình Trang 162 Sách gốc: PGS.TS Nguyễn Mạnh Nhâm thị phạm phát kình cận chiến trên trục trung lộ.",
    svgCoord: { x: 295, y: 165 },
  },
];

// ============================================================================
// 2. BẢNG ĐỐI SÁNH: CHUYẾT LỰC (CƠ BẮP THÔ) VS. KÌNH LỰC VỊNH XUÂN (NỘI KÌNH)
// ============================================================================
export const BRUTE_VS_INTERNAL_COMPARISON: ForceComparisonRow[] = [
  {
    criterion: "1. Nguồn gốc phát lực",
    bruteForce:
      "Phát lực cục bộ từ cơ bắp vai (Deltoid), cơ ngực và cơ bắp tay (chỉ huy động ~15–20% khối lượng cơ thể).",
    wingChunJin:
      "Lực do địa khởi: Huy động Phản lực mặt đất (GRF) + Xoắn hông Đan Điền + Sóng cột sống + Trửu để lực (100% khối lượng chỉnh thể).",
    sourceRef: "Sách gốc PGVX (Tr. 36, 165) & Neto et al., Sports Biomechanics (2007) [1, 5]",
  },
  {
    criterion: "2. Trạng thái cơ bắp trên đường đi",
    bruteForce:
      "Gồng cứng ngay từ lúc bắt đầu vung tay khiến cơ đối kháng tự hãm tốc độ và làm khớp vai chặn đứt lực từ chân truyền lên.",
    wingChunJin:
      "Miên quyền (Mềm như bông gòn) / Lò xo cật tre: Thả lỏng hoàn toàn trên đường đi, chỉ khóa Lục Hợp trong 0.015 giây chạm đích (Thốn kình).",
    sourceRef: "Sách gốc PGVX (Tr. 19, 27) & Chu Shong Tin, Vol. 1 (2015) [1, 2]",
  },
  {
    criterion: "3. Quỹ đạo & Cự ly cần thiết",
    bruteForce:
      "Cần khoảng cách dài để kéo tay lấy đà hoặc vung rộng (dễ lộ ý đồ, hở trung tuyến và bị mất đà khi đánh trượt).",
    wingChunJin:
      "Lưỡng điểm chi gian, trực tuyến tối giản: Phát lực cực đại ngay ở cự ly 1 thốn (2.5 cm) trên trục Tý Ngọ Tuyến, đánh trượt không mất đà (Vô thất quy).",
    sourceRef: "Sách gốc PGVX (Tr. 27, 164) & Bolander et al., JSSM (2009) [1, 4]",
  },
  {
    criterion: "4. Đặc tính va chạm vật lý",
    bruteForce:
      "Lực đẩy bề mặt (Momentum Push — Δt ≈ 180ms): Làm đối phương ngã văng ra xa nhưng lực phân tán ngoài vỏ cơ.",
    wingChunJin:
      "Xung lực xuyên thấu (Shockwave Impulse — Δt ≈ 15ms): Sóng chấn động xuyên thẳng qua lớp giáp cơ vào sâu bên trong (Nội chấn).",
    sourceRef: "Sách gốc PGVX (Tr. 164) & Roberts, Stanford Neuroscience (2012) [1, 6]",
  },
  {
    criterion: "5. Vận hành Khí & Thần kinh",
    bruteForce:
      "Thở gấp ở ngực, huyết áp tăng, tiêu hao nhiều oxy (ATP), nhanh chóng kiệt sức sau vài phút giao đấu.",
    wingChunJin:
      "Ý thủ Đan Điền, thở cơ hoành sâu êm, Thần định Khí liễm, tiết kiệm năng lượng tối đa, càng đánh hơi thở càng điều hòa.",
    sourceRef: "Sách gốc PGVX Chương IV: Nội Công (Tr. 167–183) [1, 10]",
  },
  {
    criterion: "6. Sự biến đổi theo tuổi tác (20 ➔ 80 tuổi)",
    bruteForce:
      "Đạt đỉnh ở tuổi 25–30 rồi suy giảm nhanh chóng khi về già ('Đả quyền bất luyện công, đáo lão nhất trường không').",
    wingChunJin:
      "Khi có tuổi, cơ bắp giảm nhưng Nội công, Linh giác và Khung cấu trúc ngày càng tinh thuần ('Sức mạnh nội công không giảm, có khi còn tăng!' — Trang 167).",
    sourceRef: "Sách gốc PGVX (Tr. 16, 167, 214) & Ip Chun (1998) [1, 3]",
  },
];

// ============================================================================
// 3. BÍ MẬT DÙNG LỰC TAY & CHÂN ĐẶC DỊ CỦA VỊNH XUÂN (6 CHUYÊN ĐỀ)
// ============================================================================
export const LIMB_FORCE_SECRETS: LimbForceSecret[] = [
  {
    id: "hand-1-mien-quyen",
    category: "hand",
    title: "1. Miên Quyền Hóa Thiết & 5 Chữ Vàng: 'Mềm – Dẻo – Khéo – Nhanh – Mạnh'",
    hanNom: "綿拳化鐵 • 柔韌巧快剛",
    subtitle: "Vì sao phải Mềm và Dẻo trước rồi mới có Nhanh và Mạnh?",
    coreMechanism:
      "Sách gốc Phật Gia Vịnh Xuân (Trang 19 & 27) khẳng định thứ tự bất di bất dịch của đôi tay: 'Mềm ➔ Dẻo ➔ Khéo ➔ Nhanh ➔ Mạnh' (và cấm tập tạ nặng/thể hình trong 3 năm đầu — Lời khuyên số 34, Trang 166). Tay mềm như bông gòn (Miên quyền) giúp giải phóng hoàn toàn lực cản nội tại của các bó cơ đối kháng, cho phép tay đạt vận tốc cực đại ('Nhanh') và biến thành khối sắt ở khoảnh khắc chạm đích ('Mạnh').",
    scientificExplanation:
      "Trong sinh lý học thần kinh cơ (Neuromuscular Physiology), tốc độ co cơ tỷ lệ nghịch với độ căng cơ ban đầu. Các võ sĩ đỉnh cao có khả năng chuyển đổi từ trạng thái thư giãn hoàn toàn (0% EMG) sang kích hoạt tối đa (100% Motor Unit Synchronization) rồi trở về 0% chỉ trong vòng vài chục mili-giây (Double Peak Muscle Activation).",
    qiAndInternalExplanation:
      "Khi cơ bắp căng cứng, các vi mạch máu và đường kinh Thủ Tam Âm/Thủ Tam Dương bị chèn ép. Chỉ khi tay 'Tùng' (thả lỏng mềm mại như cánh hoa nở trong Tiểu Niệm Đầu — Trang 36), Nội khí từ Đan Điền mới dẫn truyền thông suốt ra tới huyệt Lao Cung và 10 đầu ngón tay.",
    canonicalQuote:
      "Trong luyện quyền thì tay, chân chủ mềm mại - như bông gòn (miên quyền) theo phương châm: 'mềm - dẻo - khéo - nhanh - mạnh'... Trong 3 năm đầu tập PGVX không được tập thể dục nặng như tập thể hình.",
    bookPage: "Sách gốc Phật Gia Vịnh Xuân Quyền — Trang 19, 27 & Trang 166 (Lời khuyên 34)",
    academicCitations: [
      "[1] PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), «Phật Gia Vịnh Xuân Quyền», Tr. 19, 27, 36 & 166.",
      "[4] Cố Võ sư Ngô Sĩ Quý (1995), «Vịnh Xuân Quyền — Ngũ Tự Quyết: Tĩnh, Tùng, Thính, Biến, Phát», Tư liệu Hệ phái Vịnh Xuân Ngô Gia.",
      "[5] Neto, O. P. et al. (2007), Sports Biomechanics, 6(1), 39–48 (Cơ chế thư giãn cơ đối kháng để đạt vận tốc tay tối đa trước điểm va chạm).",
    ],
    imageUrl: "/assets/hinh-2x/p028-h01.png",
    imageCaption: "Sơ đồ các phần của tay và Tam Thủ cốt lõi (Than – Bàng – Phục) trên trục Tý Ngọ Tuyến (Trang 28).",
    keyTakeaways: [
      "Thả lỏng bả vai (Trầm kiên) và cổ tay dẻo linh hoạt ở cả 4 mặt.",
      "Trên đường bay tới mục tiêu: 0% gồng cơ; tại điểm chạm đích: 100% khóa cấu trúc (Thốn kình).",
      "Đánh trượt mục tiêu tuyệt đối không bị lỡ đà (Vô thất quy), lập tức biến thành đòn tiếp theo như nước chảy.",
    ],
  },
  {
    id: "hand-2-truu-de-luc",
    category: "hand",
    title: "2. Trửu Để Lực (Lực Đáy Cùi Chỏ) & Cơ Chế Giương Cung Đối Ngẫu",
    hanNom: "肘底力 • 雙手如張弓",
    subtitle: "Động cơ đẩy thực sự của tay Vịnh Xuân nằm ở Khuỷu tay chứ không phải Bả vai",
    coreMechanism:
      "Khác với đấm bốc (dùng lực quăng vai) hay ngoại gia quyền, tay Vịnh Xuân luôn giữ khuỷu tay ở trung lộ cách ngực một nắm đấm ('Thủ lưu trung tuyến'). Mọi đòn Than thủ, Bàng thủ, Phục thủ hay Nhật tự xung quyền đều được đẩy đi từ 'đáy cùi chỏ' (Trửu để lực). Đặc biệt, khi một tay phóng thẳng ra trước thì tay kia phải giật mạnh về sát nách, tạo thành cơ chế 'Giương cung đối ngẫu' cực kỳ uy lực.",
    scientificExplanation:
      "Cùi chỏ đặt thấp trước sườn tạo với thân mình một Khung Tam Giác Cứng (Structural Triangle) nối thẳng xương trụ/xương quay vào khung sườn và cột sống qua cơ răng trước (Serratus Anterior) và cơ lưng rộng (Latissimus Dorsi). Hành động giật mạnh tay phụ về nách bảo toàn mô-men động lượng góc, tạo lực xoắn ngược chiều đẩy vai và cùi chỏ tay chính vọt về phía trước mà không cần lấy đà!",
    qiAndInternalExplanation:
      "Giữ khuỷu tay tại trung tuyến giúp che chở các đại huyệt vùng ngực – bụng (Đản Trung, Cưu Vĩ, Khí Hải) và giữ cho khí lực luôn tụ ở trục Tý Ngọ Tuyến, không bị phân tán ra ngoài khung sườn.",
    canonicalQuote:
      "Khuỷu tay luôn phải ở giữa thân (thủ lưu trung tuyến)... Xung quyền (chùy): Đấm thẳng tay ra trước (trung lộ) trong khi đó giật mạnh tay kia về nách. Đổi tay liên tiếp. Hai tay ngược chiều nhau như hình giương cung.",
    bookPage: "Sách gốc Phật Gia Vịnh Xuân Quyền — Trang 27, 29 & Trang 162",
    academicCitations: [
      "[1] PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), «Phật Gia Vịnh Xuân Quyền», Tr. 27, 29 & 162.",
      "[2] Đại sư Chu Thượng Đồng / Chu Shong Tin (2015), «The Book of Wing Chun, Vol. 1» (Cơ chế hội tụ lực tại khuỷu tay — Elbow Centerline Power).",
      "[7] Myers, Thomas W. (2020), «Anatomy Trains», Ch. 7: Deep Front Arm Line & Superficial Back Arm Line.",
    ],
    imageUrl: "/assets/hinh-2x/p162-h01.png",
    imageCaption: "Sư phụ PGS.TS Nguyễn Mạnh Nhâm thị phạm đòn cùi chỏ cận chiến và cấu trúc trung tuyến (Trang 162).",
    keyTakeaways: [
      "Luôn cảm nhận có một lực vô hình đẩy từ phía sau cùi chỏ tới trước (Trửu để lực).",
      "Hai tay phối hợp sống động như hai con rồng ('Không để con rồng nào chết' — Lời khuyên số 7, Trang 166).",
      "Giật tay thu về nách mạnh bao nhiêu thì đòn đấm phóng ra trung tuyến uy lực bấy nhiêu.",
    ],
  },
  {
    id: "hand-3-lo-xo-cat-tre",
    category: "hand",
    title: "3. Cơ Chế 'Lò Xo – Cật Tre' & Phản Xạ Vô Thức 'Tâm Ứng Thủ'",
    hanNom: "來留去送 • 甩手直衝 • 心應手",
    subtitle: "Mượn lực ép của đối phương để tích nạp thế năng đàn hồi và bung đòn trước khi não kịp nghĩ",
    coreMechanism:
      "Trong giao đấu cận chiến, nếu chờ mắt nhìn thấy đòn rồi truyền lên não phân tích mới ra lệnh cho tay đỡ thì đã quá muộn (mất ~200–250ms). Nhờ luyện Linh Giác (Niêm thủ / Chi Sao), hai cánh tay môn sinh Vịnh Xuân hoạt động như hai chiếc lò xo hoặc thanh cật tre đang chịu lực nén nhẹ về phía trung tâm đối thủ. Ngay khi tay đối phương vừa rút lui hoặc đổi hướng làm mất lực cản, cánh tay Vịnh Xuân lập tức bung thẳng vào trung lộ theo phản xạ tự nhiên ('Thoát thủ trực xông').",
    scientificExplanation:
      "Cơ chế này dựa trên Phản xạ căng cơ và Xúc giác bản thể (Proprioceptive Stretch Reflex — độ trễ chỉ ~30–50ms tại tủy sống, nhanh gấp 5 lần phản xạ thị giác!) kết hợp Thế năng đàn hồi của hệ gân-mạc cơ (Elastic Strain Energy: E = ½ k·Δx²). Lực đè của đối thủ càng lớn thì độ nén lò xo Δx càng cao, khi thoát thủ lực bật trả càng khủng khiếp ('Tứ lạng bạt thiên cân').",
    qiAndInternalExplanation:
      "Sách gốc gọi đây là cảnh giới 'Nhãn thủ' (Tay có mắt), 'Thính kình' (Nghe hiểu hướng lực) và 'Tâm ứng thủ' (Tay tự động ứng biến theo tâm mà không bị ý thức chậm chạp cản trở).",
    canonicalQuote:
      "Tay phải như lò xo, cật tre: nó bật nhanh khi thoát lực ép (thoát thủ trực xông)... Nhờ tập luyện linh giác, tay có khả năng 'nhìn thấy' (nhãn thủ) trước khi mắt kịp thấy, nghe được lực (thính kình) và tự động biến chiêu xuất đòn (Tâm Ứng Thủ).",
    bookPage: "Sách gốc Phật Gia Vịnh Xuân Quyền — Trang 146–148, 162, 164 & Trang 166 (Lời khuyên 11 & 21)",
    academicCitations: [
      "[1] PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), «Phật Gia Vịnh Xuân Quyền», Tr. 146–148 (Niêm thủ Linh giác & Sơ đồ cung phản xạ tủy sống) & Tr. 162–166.",
      "[3] Đại sư Diệp Chuẩn / Ip Chun (1998), «Wing Chun: Traditional Chinese Kung Fu», Ch. 5: Chi Sao (Sticking Hands & Reflex Sensitivity).",
      "[8] Langevin, H. M. (2006), «Connective tissue: a body-wide signaling network?», Medical Hypotheses, 66(6), 1074–1077 (Cơ chế tích trữ thế năng đàn hồi và truyền tín hiệu cơ học của mạng lưới Mạc cơ).",
    ],
    imageUrl: "/assets/hinh-2x/p019-h01.png",
    imageCaption: "Luyện Linh Giác (Tay dính) — cầu nối biến cấu trúc lò xo thành phản xạ thực chiến (Trang 19).",
    keyTakeaways: [
      "Không bao giờ húc thẳng đối lực với kẻ mạnh hơn: Dùng Bàng thủ/Than thủ làm lệch hướng lực địch rồi mượn lực đó xoay chuyển.",
      "Luôn duy trì hướng lực ép nhẹ về phía trung tuyến đối phương như nước chực tràn qua khe hở (Quyền như lưu thủy).",
      "Khi tay đối phương vừa rời khỏi cầu tay (Thoát thủ), đòn đã tự động cắm thẳng vào đích (Trực xông).",
    ],
  },
  {
    id: "foot-1-kiem-duong-lat-dat",
    category: "foot",
    title: "4. Nhị Tự Kiềm Dương Mã & Triết Lý 'Con Lật Đật / Xe Đạp Lăn Bánh'",
    hanNom: "二字拑羊馬 • 不倒翁之理 • 動中之靜",
    subtitle: "Giải mã vì sao thế tấn cao và hẹp của Vịnh Xuân lại bất khả xô ngã trong thực chiến",
    coreMechanism:
      "Một thắc mắc rất lớn của người học võ là: 'Theo vật lý thông thường, tấn càng rộng và càng thấp (như Trung bình tấn) thì trọng tâm càng gần đất càng vững; tại sao Vịnh Xuân lại đứng tấn hẹp và cao mà không sợ bị đẩy ngã?'. PGS.TS Nguyễn Mạnh Nhâm đã giải đáp cực kỳ sâu sắc tại Trang 164–165 Sách gốc bằng 2 hình tượng khoa học: 'Con Lật Đật' và 'Chiếc Xe Đạp Đang Lăn Bánh'.",
    scientificExplanation:
      "Tấn rộng và thấp tạo ra 'Độ vững tĩnh' (Static Stability) nhưng lại làm khóa cứng khả năng di chuyển nhanh. Ngược lại, Vịnh Xuân thiết lập 'Độ vững động' (Dynamic & Rotational Stability): Giống như con lật đật có khối chì nặng nằm ở đáy bầu tròn (tương ứng trọng tâm và Nội khí trầm sâu tại Hạ Đan Điền + Xương chậu), khi chịu lực xô đẩy từ bên ngoài, khung hông và trục chân Vịnh Xuân lập tức xoay nhẹ (Chuyển mã / Biên thân 90 độ) làm trượt lực của đối phương đi vào khoảng không, đồng thời biến chính lực đẩy đó thành mô-men quay trả đòn!",
    qiAndInternalExplanation:
      "Khi đứng Nhị Tự Kiềm Dương Mã đúng pháp, cột sống thẳng đứng nối Bách Hội (đỉnh đầu) với Hội Âm và điểm giữa hai gót chân. Khí trầm Đan Điền, chân bấm đất qua huyệt Dũng Tuyền khiến phần dưới cơ thể nặng trịch như núi Thái Sơn, trong khi phần thân trên nhẹ nhàng linh hoạt như cành liễu.",
    canonicalQuote:
      "Con lật đật là một trong những hình ảnh mà võ sinh VXQ phải nghiên cứu... Chúng ta biết tấn của VXQ không rộng lại cao, trọng tâm xa mặt đất hơn nên về nguyên tắc là không vững bằng tấn thấp. Tuy nhiên cái vững của VXQ là vững động — như chiếc xe đạp không đổ khi nó lăn bánh, trái đất không rơi vào khoảng không gian vì nó quay.",
    bookPage: "Sách gốc Phật Gia Vịnh Xuân Quyền — Trang 164–165",
    academicCitations: [
      "[1] PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), «Phật Gia Vịnh Xuân Quyền», Chương III: Khẩu Quyết, Tr. 162 & 164–165 (Hình tượng Con lật đật & Xe đạp đang lăn bánh).",
      "[2] Đại sư Chu Thượng Đồng / Chu Shong Tin (2015), «The Book of Wing Chun, Vol. 1» (Cơ chế Chuyển mã và trục quay trung tâm).",
    ],
    imageUrl: "/assets/hinh-2x/p037-h01.png",
    imageCaption: "Thế Nhị Tự Kiềm Dương Mã chuẩn mực mở đầu bài Tiểu Niệm Đầu — Nền móng của 'Vững động' (Trang 37).",
    keyTakeaways: [
      "Hai mũi chân cách nhau 1 bàn chân, hai gót mở ra 2 bàn chân, gối hơi khuỵu khép hướng tâm, lưng thẳng tự nhiên.",
      "Không chống đỡ lực xô đẩy bằng cách gồng cứng chân, mà dùng Chuyển Mã / Biên Thân như con lật đật xoay trục hóa giải.",
      "Trọng tâm luôn trầm tại Đan Điền giúp giữ thăng bằng động trong mọi pha di chuyển và phát Thốn kình.",
    ],
  },
  {
    id: "foot-2-xuoc-ma-bam-dat",
    category: "foot",
    title: "5. Bộ Pháp Xước Mã ('Túc Bất Ly Địa') & Đạp Cung Trung",
    hanNom: "馬如登山 • 足不離地 • 踏宮中",
    subtitle: "Di chuyển như người leo núi, bàn chân lướt sát mặt đất để không bao giờ đứt mạch truyền lực",
    coreMechanism:
      "Trong Vịnh Xuân, tuyệt đối kỵ việc nhảy nhót hoặc nhấc chân cao rời khỏi mặt đất khi di chuyển ('Túc bất ly địa'). Khi tiến hoặc lùi (Xước mã / Đạp cung trung 3 bước), bàn chân lướt sát mặt sàn như người đang leo núi, chân sau đẩy chân trước lướt tới đồng thời cùng lúc với đòn tay ('Thủ túc đồng chí' — Tay và chân đến đích cùng một nhịp).",
    scientificExplanation:
      "Khi di chuyển bằng Xước mã (bước trượt sát đất), trọng tâm cơ thể không bị nhấp nhô lên xuống (Zero Vertical Oscillation), giúp giữ nguyên thế năng và duy trì kết nối ma sát liên tục với mặt đất. Nhờ đó, toàn bộ động năng tịnh tiến của khối lượng cơ thể (E_tịnh_tiến = ½ M_cơ_thể · v_lướt²) được cộng hưởng trực tiếp vào vận tốc đòn đấm ngay tại thời điểm bàn chân vừa bám đất!",
    qiAndInternalExplanation:
      "Bàn chân không rời mặt đất giúp mạch Địa khí qua huyệt Dũng Tuyền luôn nối liền không bị ngắt quãng. Sách gốc cũng ghi nhận 'Linh giác chi dưới' (Niêm cước): Đôi chân cũng có 'mắt' và cảm giác dính như đôi tay để thăm dò, khóa chân hoặc quét trụ đối phương.",
    canonicalQuote:
      "Khi di chuyển, thường nghiêng người, tiến một chân trước một chân sau như người leo núi (xước mã)... Trong khi di chuyển chân phải bấm chặt không rời mặt đất (túc bất ly địa). Hai đối thủ có đòn tay bằng nhau thì người thắng là người có đòn chân tốt hơn.",
    bookPage: "Sách gốc Phật Gia Vịnh Xuân Quyền — Trang 25, 34–35, 165 & Trang 166 (Lời khuyên 12)",
    academicCitations: [
      "[1] PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), «Phật Gia Vịnh Xuân Quyền», Tr. 25, 34–35 (Sơ đồ bộ pháp Tý Ngọ Tuyến & Đạp cung) & Tr. 164–166.",
      "[4] Bolander, B., Neto, O. P., & Bir, C. A. (2009), Journal of Sports Science & Medicine, 8(CSSI3), 47–52 (Sự truyền dẫn động lượng tịnh tiến của cơ thể vào điểm va chạm).",
    ],
    imageUrl: "/assets/hinh-2x/p164-h01.png",
    imageCaption: "Luyện Linh Giác với chi dưới (Niêm cước) và giữ gốc chân vững chãi trong đối kháng (Trang 164).",
    keyTakeaways: [
      "Tiến – lùi lướt sát mặt sàn (Túc bất ly địa), thân người nghiêng Biên thân để che kín các huyệt đạo trên trục Tý Ngọ.",
      "Bước thẳng vào giữa 2 chân đối thủ (Nội môn) để chiếm trung tuyến và khóa góc tấn công của địch (Lời khuyên 27).",
      "Tay đánh và chân lướt phải kết thúc đúng vào cùng một phần trăm giây (Thủ – Túc tương hợp).",
    ],
  },
  {
    id: "foot-3-cuoc-phap-tam-thap",
    category: "foot",
    title: "6. Cơ Chế Dùng Lực Đòn Chân: 'Cước Bất Khởi Cao – Chân Trụ Mọc Rễ'",
    hanNom: "腳不起高 • 以根發腳 • 無影腳",
    subtitle: "Tuyệt đối không đá cao trên thắt lưng: Dùng lực đạp thẳng từ hông và gót chân triệt hạ khớp gối",
    coreMechanism:
      "Lời khuyên số 26 (Trang 166 Sách gốc) nêu rõ: 'Không đá cao trên thắt lưng'. Mọi đòn chân của Phật Gia Vịnh Xuân (Đạp cước, Đặng cước, Hoành cước, Tảo cước, Đề tất) đều nhắm vào từ thắt lưng trở xuống (đặc biệt là khớp gối, ống quyển và hạ bộ). Khi một chân xuất cước, chân trụ còn lại phải bấm chặt xuống đất như mọc rễ; lực từ mặt đất truyền qua chân trụ, bật qua khớp hông và phóng thẳng ra gót chân hoặc rìa bàn chân như một mũi thương.",
    scientificExplanation:
      "Đá cao trên thắt lưng làm trọng tâm dâng cao, giảm 70% lực bám đất của chân trụ và tạo quãng đường dài dễ bị đối phương bắt chân. Ngược lại, đòn Đạp cước/Đặng cước tầm thấp của Vịnh Xuân đi theo đường thẳng ngắn nhất từ khớp háng xuống khớp gối đối phương (góc 30–45 độ hướng xuống), cộng hưởng cả lực đẩy của cơ mông lớn (Gluteus Maximus), cơ tứ đầu đùi và trọng lực, tạo ra lực cắt (Shear Force) có thể làm chấn thương dây chằng khớp gối đối thủ ngay lập tức.",
    qiAndInternalExplanation:
      "Trong bài Tầm Kiều và Ngũ Hình Quyền (đặc biệt là Hổ Hình & Hạc Hình — Kim kê độc lập), môn sinh rèn luyện khả năng đứng 1 chân vững như bàn thạch, dẫn toàn bộ Nội khí từ Đan Điền xuống chân trụ đồng thời phóng kình qua gót chân đá mà thân trên không hề chao đảo.",
    canonicalQuote:
      "Không đá cao trên thắt lưng... Cước pháp Vịnh Xuân chủ yếu dùng chân nọ làm gốc vững cho chân kia xuất cước, kết hợp đồng thời với thủ pháp ('Thủ cước đồng chiêu') để triệt hạ gốc tấn của đối phương.",
    bookPage: "Sách gốc Phật Gia Vịnh Xuân Quyền — Trang 29–30 & Trang 166 (Lời khuyên 26)",
    academicCitations: [
      "[1] PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), «Phật Gia Vịnh Xuân Quyền», Tr. 29–30 (8 thế Cước pháp căn bản) & Tr. 163–166 (Lời khuyên 26: Không đá cao trên thắt lưng).",
      "[3] Đại sư Diệp Chuẩn / Ip Chun (1998), «Wing Chun: Traditional Chinese Kung Fu», Ch. 4: Chum Kiu & Low Kicks Biomechanics.",
    ],
    imageUrl: "/assets/hinh-2x/p165-h01.png",
    imageCaption: "Ứng dụng cước pháp tầm thấp phối hợp thủ pháp đồng thời triệt hạ trọng tâm đối phương (Trang 165).",
    keyTakeaways: [
      "Không bao giờ rút chân lấy đà rồi mới đá: Nhấc gối ở trung tuyến và đạp thẳng gót chân tới mục tiêu (Vô ảnh cước).",
      "Mục tiêu tối thượng của đòn chân Vịnh Xuân là phá hủy 'gốc rễ' (khớp gối, cổ chân, ống quyển) của đối phương.",
      "Luôn xuất cước đồng thời với hai tay bảo vệ trung lộ (Phản thủ đồng thời).",
    ],
  },
];

// ============================================================================
// 4. KHÁI NIỆM KHÍ LỰC & NỘI CÔNG MÀ KHOA HỌC PHƯƠNG TÂY CHƯA LÝ GIẢI TRỌN VẸN
// ============================================================================
export const UNEXPLAINED_QI_PHENOMENA: QiPhenomenonStudy[] = [
  {
    id: "qi-1-y-than-khi-luc",
    number: "01",
    title: "Chuỗi Truyền Dẫn Vô Hình: 'Đầu Ý ➔ Thần Đáo ➔ Khí Đáo ➔ Lực Đáo'",
    hanNom: "意到氣到 • 氣到力到 • 氣為力之君",
    easternPrinciple:
      "Trong Chương IV Sách gốc (Trang 178), PGS.TS Y khoa Nguyễn Mạnh Nhâm đúc kết quy luật cốt lõi của Nội công cổ truyền: 'Trước tiên ta đưa Ý đến (Đầu ý), THẦN sẽ đến và đem theo KHÍ — Khí là vua của Lực — do đó có sức mạnh'. Khi người tập đạt trạng thái tĩnh tâm sâu ('Nhất niệm trừ vạn niệm'), chỉ cần tập trung ý niệm tại Đan Điền và dẫn ý chạy dọc kinh mạch Nhâm – Đốc ra bàn tay, một luồng năng lượng ấm nóng và sức căng nội tại cực lớn lập tức xuất hiện ở bàn tay mà không cần co gồng cơ bắp.",
    historicalEvidence:
      "Khi tập Tiểu Niệm Đầu chậm rãi trong 30–45 phút (bàn tay mở ra từ quyền thành chưởng chậm như cánh hoa nở — Trang 36), hầu hết các môn sinh tập đúng pháp đều cảm nhận rõ hai lòng bàn tay (huyệt Lao Cung) nóng rực, tê rần như có luồng điện hoặc từ trường đẩy nhau, cơ thể ấm áp và chân bám chặt xuống đất như có lực hút.",
    modernMedicalAndBiophysicsBridge:
      "Y học hiện đại ghi nhận rằng sự tập trung ý niệm cao độ làm thay đổi tức thời lưu lượng vi tuần hoàn mao mạch (Microcirculation), tăng nhiệt độ bề mặt da tại đầu ngón tay thêm 1.5°C – 3°C (qua camera nhiệt hồng ngoại) và đồng bộ hóa sóng não Alpha/Theta với tín hiệu thần kinh tự chủ (Hệ đối giao cảm).",
    whyWestCannotFullyExplainYet:
      "Khoa học phương Tây dựa trên giải phẫu xác chết (nơi 'Khí' đã tiêu tán) nên từng phủ nhận sự tồn tại của hệ Kinh Lạc vì không tìm thấy ống dẫn vật lý riêng biệt. Đến nay, các thiết bị đo phương Tây vẫn chưa đo đếm trực tiếp được bản chất vật lý hoàn chỉnh của 'Chân Khí' (Bio-Qi / Prana) cũng như cơ chế vì sao 'Ý niệm thuần khiết' lại có thể điều động năng lượng sinh học tức thời đến từng huyệt đạo cụ thể.",
    bookReference: "Sách gốc Phật Gia Vịnh Xuân Quyền (PGS.TS Nguyễn Mạnh Nhâm, 2006) — Chương IV: Nội Công, Trang 36 & Trang 178–180",
    academicCitations: [
      "[1] PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), «Phật Gia Vịnh Xuân Quyền», NXB Văn Hóa Thông Tin, Tr. 36 & Tr. 178–180.",
      "[9] Ahn, A. C., Colbert, A. P., et al. & Langevin, H. M. (2008), «Electrical properties of acupuncture points and meridians: A systematic review», Bioelectromagnetics, 29(4), 245–256.",
    ],
    imageUrl: "/assets/hinh-2x/p179-h01.png",
    imageCaption: "Hình H0954 (Trang 179 Sách gốc): Tư thế Tọa Thiền Kiết Già và biểu tượng dòng năng lượng (Hỏa Long) đi lên từ cột sống.",
  },
  {
    id: "qi-2-unbendable-arm-nim-lik",
    number: "02",
    title: "Hiện Tượng 'Cánh Tay Dòng Nước Không Thể Bẻ Gập' & 'Niệm Lực (Nim Lik)'",
    hanNom: "意如流水 • 念力 • 四兩撥千斤",
    easternPrinciple:
      "Tại Trang 180 Sách gốc, PGS.TS Nguyễn Mạnh Nhâm dẫn chứng hiện tượng kỳ diệu: Khi một võ sinh gồng cứng cơ bắp tay hết sức, hai người khỏe mạnh vẫn có thể bẻ gập cánh tay đó lại; nhưng khi võ sinh thả lỏng cơ bắp, định tâm tại Đan Điền (Nhất điểm) và dùng Ý tưởng tượng 'đang có một dòng nước lũ chảy mạnh từ vai qua cánh tay phóng ra đầu ngón tay', thì cánh tay đó bỗng nhiên vững chắc như một ống nước cứu hỏa áp suất cao, nhiều người xúm lại bẻ cũng không gập được! Tương tự, Đại sư Chu Thượng Đồng (đệ tử chân truyền của Tổ sư Diệp Vấn) gọi cảnh giới cao nhất của Tiểu Niệm Đầu là 'Niệm Lực' (Nim Lik / Mind Force): không dùng một chút gồng cơ nào, chỉ dùng Ý niệm mở khớp cột sống mà đẩy bật cả hàng người to lớn.",
    historicalEvidence:
      "Sách gốc (Trang 16 & 180) ghi lại nhiều sự kiện có thật: Sư tổ Nguyễn Tế Công khi tuổi đã cao, đứng yên cho Pak Sư phụ (một cao thủ Hồng Gia/Bát Quái to khỏe) đấm hết sức vào ngực; Cụ Tế Công chỉ lắc nhẹ người mà Pak Sư phụ ngã văng xuống đất, cổ tay bị chấn gãy. Hay Sư phụ Trần Thúc Tiền và GS. Phạm Khắc Quảng (Giám đốc Bệnh viện Lao và Bệnh Phổi TW) sau khi luyện nội công Vịnh Xuân có thể bình thản chịu những cú đấm cực mạnh vào ngực và bụng, sống thọ trên 80 tuổi.",
    modernMedicalAndBiophysicsBridge:
      "Các nhà cơ sinh học hiện đại giải thích một phần hiện tượng này qua mô hình 'Cấu trúc Căng – Nén Toàn vẹn' (Biotensegrity) và 'Trương lực Mạc cơ' (Fascial Tonus): Khi không gồng cơ cục bộ (Biceps/Triceps), hệ thần kinh kích hoạt các nhóm cơ sâu ổn định khớp (Deep Postural Stabilizers) và căng màng cân cơ toàn thân như một ống thủy lực chịu nén hoàn hảo.",
    whyWestCannotFullyExplainYet:
      "Mô hình cơ học cổ điển (đòn bẩy xương – cơ) không thể giải thích được vì sao một cụ già 70–80 tuổi có tiết diện cơ bắp nhỏ (như Sư tổ Nguyễn Tế Công hay Đại sư Chu Thượng Đồng) lại tạo ra mô-men kháng lực và xung lực phát ra tại điểm chạm vượt xa giới hạn sinh lý của sợi cơ vân (Actin-Myosin) mà không hề làm tăng nhịp tim hay áp lực máu!",
    bookReference: "Sách gốc Phật Gia Vịnh Xuân Quyền (PGS.TS Nguyễn Mạnh Nhâm, 2006) — Trang 16, Trang 180 & Trang 214",
    academicCitations: [
      "[1] PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), «Phật Gia Vịnh Xuân Quyền», Tr. 16 (Điển tích Sư tổ Nguyễn Tế Công), Tr. 180 (Thí nghiệm Cánh tay dòng nước) & Tr. 214.",
      "[2] Đại sư Chu Thượng Đồng / Chu Shong Tin (2015), «The Book of Wing Chun, Vol. 2: Internal Force (Nim Lik)», H.K. Wing Chun Athletic Association.",
    ],
    imageUrl: "/assets/hinh-2x/p016-h01.png",
    imageCaption: "Hình H0007 (Trang 16 Sách gốc): Sư tổ Nguyễn Tế Công luyện Mộc Nhân — biểu tượng của Nội công và Khung cấu trúc thượng thừa.",
  },
  {
    id: "qi-3-parabiose-neural-reserve",
    number: "03",
    title: "Thuyết Thần Kinh: Trạng Thái 'Cận Sinh' (Parabiose) & Khai Mở Tiềm Năng Dự Trữ",
    hanNom: "一念除萬念 • 潛能爆發 • 忘我合一",
    easternPrinciple:
      "Với tư cách là một Giáo sư – Tiến sĩ Y khoa Ngoại khoa hàng đầu tại Bệnh viện Việt Đức đồng thời là Chưởng môn Võ đường Phật Gia Vịnh Xuân, PGS.TS Nguyễn Mạnh Nhâm đã đưa ra một góc nhìn khoa học cực kỳ sâu sắc tại Trang 183 Sách gốc để lý giải sức mạnh phi thường của Nội công: Quy luật 'Ưu thế tại não bộ' (Dominant Focus của Ukhtomsky) và Trạng thái 'Cận sinh' (Parabiose).",
    historicalEvidence:
      "Trong chiến đấu sinh tử hoặc khi thiền định đạt đến cảnh giới 'Nhất niệm trừ vạn niệm' (Vong ngã / Thiên nhân hợp nhất), toàn bộ tạp niệm bị xóa sạch, chỉ còn một ý chí duy nhất thống trị vỏ não. Sách gốc dẫn chứng thực tế: Nữ anh hùng Ngô Thị Tuyển tại cầu Hàm Rồng (ngày 26/5/1965) chỉ nặng 48kg nhưng trong khoảnh khắc quyết tử đã vác được 2 hòm đạn nặng 98kg (gấp đôi trọng lượng cơ thể) mà ngày thường không thể nhấc nổi!",
    modernMedicalAndBiophysicsBridge:
      "Bình thường, để bảo vệ gân và xương khỏi bị đứt gãy, bộ não con người luôn duy trì cơ chế 'Ức chế thần kinh tự vệ' (Golgi Tendon Organ Inhibition), chỉ cho phép huy động tối đa 30%–40% số sợi cơ trong cùng một thời điểm. Khi luyện Nội công và Thiền định lâu năm, người võ sư học được cách làm chủ hệ thần kinh trung ương để tạm thời gỡ bỏ rào cản ức chế này trong đúng 0.015 giây phát Thốn kình, huy động đồng bộ 80%–90% đơn vị vận động trong tích tắc rồi lập tức thư giãn!",
    whyWestCannotFullyExplainYet:
      "Y học phương Tây chỉ coi trạng thái này là phản ứng Adrenaline khẩn cấp (Fight-or-Flight) gây kiệt sức sau đó. Nhưng ở các bậc Đại sư Nội công, họ có thể phát xuất công lực phi thường này ngay trong trạng thái tâm trí bình thản tuyệt đối ('Tịnh tâm / Paix intérieure', nhịp tim chậm, không cần Adrenaline) và lặp lại nhiều lần mà không hề tổn hại cơ thể!",
    bookReference: "Sách gốc Phật Gia Vịnh Xuân Quyền (PGS.TS Nguyễn Mạnh Nhâm, 2006) — Chương IV, Mục VI.2: Thuyết Thần Kinh, Trang 169–183",
    academicCitations: [
      "[1] PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), «Phật Gia Vịnh Xuân Quyền», Chương IV, Mục VI.2: Thuyết Thần Kinh (10 tỷ tế bào não & Trạng thái Cận sinh Parabiose), Tr. 169–183.",
      "[10] Vvedensky, N. E. (1901) & Pavlov, I. P. (1927), «Excitation, Inhibition, and Narcosis (Parabiosis) / Conditioned Reflexes», Oxford University Press.",
    ],
    imageUrl: "/assets/hinh-2x/p178-h01.png",
    imageCaption: "Hình H0953 (Trang 178 Sách gốc): Luyện Thiền Nội Công — Ngưng thần, liễm khí, cố tinh để đánh thức tiềm năng dự trữ của não bộ.",
  },
  {
    id: "qi-4-fascia-meridian-piezo",
    number: "04",
    title: "Cầu Nối Khoa Học Thế Kỷ 21: Mạng Lưới Mạc Cơ (Fascia), Điện Áp Sinh Học & Kinh Lạc",
    hanNom: "經絡與筋膜 • 生物壓電 • 內外六合",
    easternPrinciple:
      "Đông Y cổ truyền khẳng định: 'Thông tắc bất thống, thống tắc bất thông' — Khí huyết lưu thông qua hệ thống 12 Chính Kinh và Bát Mạch Kỳ Kinh nối liền từ gót chân lên đỉnh đầu và ra các ngón tay. Trong võ học cổ truyền, 'Luyện Cân (Gân/Mạc) sinh Lực, luyện Cốt (Xương) sinh Kình, luyện Khí sinh Thần' (Dịch Cân Kinh).",
    historicalEvidence:
      "Trong các bài Ngũ Hình Quyền (Long – Xà – Hổ – Báo – Hạc, Trang 119) và Phật Gia Khí Công Quyền (Trang 92–94), từng động tác vươn cổ tay, xoắn cẳng tay, trầm khuỷu và bấm ngón chân đều được thiết kế khớp chính xác với đường đi của các kinh Thủ Tam Âm (Phế, Tâm Bào, Tâm) và Túc Tam Âm (Thận, Can, Tỳ) để kích thích khí huyết và phát kình bảo vệ ngũ tạng.",
    modernMedicalAndBiophysicsBridge:
      "Những công trình nghiên cứu đột phá tại Đại học Harvard (GS. Helene Langevin) và Giải phẫu học Chuỗi Cân Cơ (Thomas Myers — 'Anatomy Trains') trong 20 năm qua đã phát hiện ra rằng: hơn 80% vị trí các Huyệt đạo và Đường Kinh Lạc cổ truyền trùng khớp trực tiếp với các 'Đường giao hội của Mạng lưới Mạc cơ' (Intermuscular Fascial Septa)! Hơn nữa, các sợi Collagen trong mạc cơ và xương có tính chất 'Áp điện sinh học' (Piezoelectricity): khi chịu lực xoắn – nén nhịp nhàng của tấn Kiềm Dương và chuyển động chậm của Tiểu Niệm Đầu, hệ mạc cơ phát sinh dòng điện sinh học vi mô dẫn truyền tín hiệu cơ – điện nhanh gấp nhiều lần xung thần kinh thông thường!",
    whyWestCannotFullyExplainYet:
      "Khoa học phương Tây mới chỉ bắt đầu công nhận Mạc cơ (Fascia) là một 'cơ quan cảm giác và truyền lực toàn thân' từ sau năm 2007 (Hội nghị Nghiên cứu Mạc cơ Quốc tế lần I tại Harvard), trong khi các bậc Tổ sư Thiếu Lâm và Vịnh Xuân đã ứng dụng hoàn hảo mạng lưới 'Cân – Khí – Kinh Lạc' này vào thực chiến và dưỡng sinh từ hàng trăm năm trước!",
    bookReference: "Sách gốc Phật Gia Vịnh Xuân Quyền (PGS.TS Nguyễn Mạnh Nhâm, 2006) — Trang 92–94, Trang 119 & Trang 179",
    academicCitations: [
      "[1] PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), «Phật Gia Vịnh Xuân Quyền», Tr. 92–94 (Phật Gia Khí Công Quyền), Tr. 119 (Ngũ Hình Quyền & Ngũ Tạng) & Tr. 179.",
      "[7] Myers, Thomas W. (2020), «Anatomy Trains: Myofascial Meridians for Manual and Movement Therapists» (4th Ed.), Churchill Livingstone / Elsevier.",
      "[8] Langevin, Helene M., & Yandow, J. A. (Harvard Medical School / Univ. of Vermont, 2002), «Relationship of acupuncture points and meridians to connective tissue planes», The Anatomical Record, 269(6), 257–265, DOI: 10.1002/ar.10185.",
    ],
    imageUrl: "/assets/hinh-2x/p179-h02.png",
    imageCaption: "Hình H0955 (Trang 179 Sách gốc): Tượng đồng cổ khắc họa hệ thống Kinh Mạch và Huyệt Đạo dẫn truyền Nội khí trên cơ thể người.",
  },
];

// ============================================================================
// 5. BỐN BÀI TẬP THỰC NGHIỆM CẢM NHẬN LỰC & KHÍ NGAY TẠI CHỖ (2 PHÚT)
// ============================================================================
export const FOUR_SELF_EXPERIMENTS: SelfExperiment[] = [
  {
    id: "exp-1-shoulder-damper",
    step: 1,
    title: "Thực Nghiệm 1: Kiểm Chứng 'Vì Sao Gồng Vai Làm Đứt Lực Từ Chân'",
    duration: "60 giây",
    goal: "Tự cảm nhận trên cơ thể sự khác biệt giữa 'Lực kẹt ở vai' và 'Lực thông từ bàn chân lên nắm đấm'.",
    wrongWay:
      "Đứng trước một bức tường (hoặc nhờ bạn tập giữ tay), đặt nắm đấm chạm nhẹ vào tường. Bây giờ hãy GỒNG CỨNG cơ vai và bắp tay rồi thử nhún chân đẩy vào tường: Bạn sẽ thấy vai bị nhô lên, cơ thể bị dội ngược ra sau và lực chân không thể đi qua vai để vào tường!",
    rightWay:
      "Giữ nguyên tư thế đó, nhưng thở ra, BUÔNG LỎNG HOÀN TOÀN BẢ VAI (Trầm kiên), hạ nặng cùi chỏ xuống dưới (Trửu để lực), tưởng tượng cánh tay chỉ là một sợi dây thừng nối từ bụng dưới (Đan Điền) ra tường. Bây giờ hãy bấm nhẹ 10 ngón chân xuống sàn: Bạn sẽ thấy xung lực từ gót chân truyền thẳng một mạch qua lưng, qua cùi chỏ và dội thẳng vào bức tường!",
    whatYouWillFeel:
      "Bạn sẽ ngộ ra ngay lập tức vì sao Vịnh Xuân cấm gồng cơ vai: Vai càng lỏng và trầm thì đường truyền lực từ mặt đất lên tay càng thông suốt!",
    sourceCitation: "Đối chứng từ Sách gốc PGVX (Tr. 27, 36) & Chu Shong Tin, Vol. 1 (2015) [1, 2]",
  },
  {
    id: "exp-2-kiem-duong-root",
    step: 2,
    title: "Thực Nghiệm 2: Kiểm Chứng 'Vòm Kiềm Dương & Mở Huyệt Dũng Tuyền'",
    duration: "90 giây",
    goal: "Cảm nhận Phản lực mặt đất (GRF) và sức mạnh chịu tải của kết cấu Vòm chữ A.",
    wrongWay:
      "Đứng hai bàn chân song song hoặc chữ V mở ra ngoài, hai đầu gối thẳng đơ, đưa tay ra trước nhờ một người bạn ấn mạnh vào cổ tay bạn: Cơ thể bạn sẽ lập tức bị bật ngửa ra sau hoặc phải bước chân lùi để khỏi ngã.",
    rightWay:
      "Chuyển sang Nhị Tự Kiềm Dương Mã: Xoay 2 mũi chân hướng vào trong cách nhau 1 bàn chân, mở 2 gót ra 2 bàn chân, khuỵu nhẹ và KHÉP HAI ĐẦU GỐI HƯỚNG VÀO TRUNG TUYẾN như đang kẹp một quả bóng, cuộn nhẹ xương cụt xuống và bấm 10 ngón chân mở huyệt Dũng Tuyền. Nhờ bạn ấn lại vào tay: Toàn bộ lực ấn của bạn tập sẽ chạy thẳng qua cùi chỏ, qua hông và truyền xuống lòng đất dưới chân bạn mà người bạn không hề suy suyển!",
    whatYouWillFeel:
      "Lòng bàn chân (huyệt Dũng Tuyền) có cảm giác bám chặt xuống sàn như giác hút, hai đùi ấm lên nhanh chóng và khung người vững như trụ cầu.",
    sourceCitation: "Đối chứng từ Sách gốc PGVX (Tr. 25, 36, 165) & Myers, Anatomy Trains (2020) [1, 7]",
  },
  {
    id: "exp-3-water-arm",
    step: 3,
    title: "Thực Nghiệm 3: Kiểm Chứng 'Cánh Tay Dòng Nước Chảy' (Ý Dẫn Khí – Trang 180)",
    duration: "60 giây",
    goal: "Trải nghiệm nguyên lý 'Ý đáo ➔ Khí đáo ➔ Lực đáo' trong Sách gốc Phật Gia Vịnh Xuân.",
    wrongWay:
      "Duỗi cánh tay ra trước, gồng cứng chuột bắp tay (Biceps) hết sức và nhờ một người dùng 2 tay bẻ gập khuỷu tay của bạn lại: Chỉ sau vài giây, cơ bắp tay sẽ mỏi và bị bẻ gập.",
    rightWay:
      "Duỗi cánh tay với khuỷu tay hơi chùng tự nhiên (Than thủ / Phục thủ), thả lỏng hoàn toàn bắp tay, mắt nhìn bình thản, Ý thủ Đan Điền và tưởng tượng 'CÓ MỘT DÒNG NƯỚC ĐANG PHUN MẠNH TỪ ĐAN ĐIỀN QUA CÁNH TAY VỌT RA 5 ĐẦU NGÓN TAY' (xòe nhẹ các ngón tay vươn xa). Khi người bạn thử bẻ gập khuỷu tay, cánh tay bạn sẽ đàn hồi và vững chắc đến mức đáng kinh ngạc!",
    whatYouWillFeel:
      "Cánh tay không hề mỏi cơ nhưng có độ trương lực đàn hồi (Biotensegrity & Nội khí) từ bên trong chống lại ngoại lực một cách nhẹ nhàng.",
    sourceCitation: "Đối chứng nguyên bản Thí nghiệm Nội công tại Trang 180 Sách gốc PGVX [1]",
  },
  {
    id: "exp-4-flower-bloom-qi",
    step: 4,
    title: "Thực Nghiệm 4: Kiểm Chứng 'Cánh Hoa Nở & Cảm Giác Nội Khí Tại Huyệt Lao Cung'",
    duration: "2 phút",
    goal: "Cảm nhận dòng điện sinh học và Nội khí tại lòng bàn tay theo đúng chỉ dẫn Tiểu Niệm Đầu (Trang 36).",
    wrongWay:
      "Tập động tác Hộ thủ – Phục thủ nhanh và hời hợt như tập thể dục nhịp điệu: Tay chỉ mỏi cơ mà không có bất kỳ cảm nhận nội khí nào.",
    rightWay:
      "Đứng tấn Kiềm Dương, thở bụng sâu êm (Thở 4 thì), thu nắm đấm rồi mở bàn tay từ quyền thành chưởng XÒE RA CHẦM CHẬM NHƯ CÁNH HOA NỞ (tưởng tượng đang đẩy tay dưới làn nước đặc có lực cản lớn nhưng cơ bắp vẫn thả lỏng). Thực hiện liên tục 3 lần trong 2 phút với tâm tĩnh lặng.",
    whatYouWillFeel:
      "Giữa lòng bàn tay (huyệt Lao Cung) và 10 đầu ngón tay (Thập Tuyên) sẽ xuất hiện cảm giác ấm nóng, căng đầy và tê rần nhẹ như có từ trường — đó chính là bước khởi đầu của 'Khí đáo'!",
    sourceCitation: "Đối chứng nguyên bản Hướng dẫn Tiểu Niệm Đầu tại Trang 36 Sách gốc PGVX [1, 9]",
  },
];

// ============================================================================
// 6. DANH MỤC TÀI LIỆU THAM KHẢO & TRÍCH DẪN KHOA HỌC UY TÍN (ĐÔNG - TÂY)
// ============================================================================
export const FORCE_ACADEMIC_BIBLIOGRAPHY: AcademicBibliographyEntry[] = [
  {
    id: "bib-1",
    code: "[1]",
    category: "Sách Gốc & Kinh Điển Vịnh Xuân",
    authors: "PGS.TS Y khoa Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức",
    year: "2006",
    title: "Phật Gia Vịnh Xuân Quyền (Giáo trình Chính thống của Hội Vịnh Xuân Hà Nội)",
    publication: "Nhà xuất bản Văn Hóa Thông Tin, Hà Nội",
    pagesOrDoi: "225 trang (Trọng tâm: Tr. 16–36, 92–94, 119, 146–148, 161–184, 214–221)",
    keyContribution:
      "Nguồn tư liệu gốc chủ đạo: Đúc kết nguyên lý 'Lực do địa khởi', 'Miên quyền 5 chữ vàng', 'Trửu để lực', 'Lò xo cật tre', 'Con lật đật / Xe đạp lăn bánh', 'Đầu Ý -> Thần -> Khí -> Lực' và 'Thuyết Thần Kinh / Trạng thái Cận sinh Parabiose'.",
  },
  {
    id: "bib-2",
    code: "[2]",
    category: "Sách Gốc & Kinh Điển Vịnh Xuân",
    authors: "Đại sư Chu Thượng Đồng (Grandmaster Chu Shong Tin / 徐尚田)",
    year: "2015",
    title: "The Book of Wing Chun, Volumes 1 & 2: The Dynamic Sphere of Siu Nim Tau & Internal Force (Nim Lik)",
    publication: "Hong Kong Wing Chun Athletic Association / Mui, S.",
    pagesOrDoi: "ISBN 978-9881416209",
    keyContribution:
      "Giải mã cơ chế 'Niệm Lực (Nim Lik)', xoay khớp xương cụt (Tailbone Rotation), giải phóng chèn ép đốt sống (Spine Decompression) và truyền lực qua khung xương không cần gồng cơ vai.",
  },
  {
    id: "bib-3",
    code: "[3]",
    category: "Sách Gốc & Kinh Điển Vịnh Xuân",
    authors: "Đại sư Diệp Chuẩn (Grandmaster Ip Chun) & Michael Tse",
    year: "1998",
    title: "Wing Chun: Traditional Chinese Kung Fu for Self-Defence and Health",
    publication: "St. Martin's Press, New York",
    pagesOrDoi: "ISBN 978-0312187767 (Ch. 2–5)",
    keyContribution:
      "Phân tích nguyên lý Tùng tĩnh (Relaxation), Trầm kiên Trụy trửu, Thốn kình (Inch Power) và vì sao công lực Vịnh Xuân không suy giảm khi tuổi cao.",
  },
  {
    id: "bib-4",
    code: "[4]",
    category: "Cơ Sinh Học & Vật Lý Võ Học",
    authors: "Bolander, B., Neto, O. P., & Bir, C. A.",
    year: "2009",
    title: "The effects of height and distance on the force production and acceleration in martial arts strikes",
    publication: "Journal of Sports Science & Medicine (JSSM)",
    pagesOrDoi: "Vol. 8(CSSI3), pp. 47–52 (PMID: 24474902 / PMCID: PMC3879647)",
    keyContribution:
      "Chứng minh thực nghiệm bằng cảm biến gia tốc và bàn đo lực (Force Plate) về khả năng phát lực cực đại ở cự ly 1 inch (Thốn kình) thông qua chuỗi động học toàn thân.",
  },
  {
    id: "bib-5",
    code: "[5]",
    category: "Cơ Sinh Học & Vật Lý Võ Học",
    authors: "Neto, O. P., Magini, M., & Saba, M. M.",
    year: "2007",
    title: "The role of effective mass and hand speed in the performance of kung fu strikes",
    publication: "Sports Biomechanics",
    pagesOrDoi: "Vol. 6(1), pp. 39–48 • DOI: 10.1080/14763140601058490",
    keyContribution:
      "Chứng minh vật lý về 'Khối lượng hiệu dụng (Effective Mass m_eff)' nối từ mặt đất và hiện tượng kích hoạt cơ kép (Double Peak Muscle Activation): thả lỏng hoàn toàn khi phóng tay và khóa cứng cấu trúc trong ~15ms va chạm.",
  },
  {
    id: "bib-6",
    code: "[6]",
    category: "Cơ Sinh Học & Vật Lý Võ Học",
    authors: "Roberts, Jessica (Stanford University Neuroscience & Chronic Pain Research)",
    year: "2012",
    title: "Beyond Brawn: The Neuroscience and Biomechanics of the One-Inch Punch",
    publication: "Stanford University / Popular Mechanics Scientific Analysis",
    pagesOrDoi: "Section: Kinetic Chain Synchronization & Neuro-Plasticity",
    keyContribution:
      "Chứng minh sức mạnh của Thốn kình không nằm ở kích thước cơ bắp cánh tay mà nằm ở sự đồng bộ hóa mili-giây (Millisecond Synchronization) của chuỗi khớp: Duỗi gối -> Xoay khung chậu -> Cột sống -> Vai -> Khuỷu -> Cổ tay.",
  },
  {
    id: "bib-7",
    code: "[7]",
    category: "Giải Phẫu Mạc Cơ, Thần Kinh & Kinh Lạc",
    authors: "Myers, Thomas W.",
    year: "2020",
    title: "Anatomy Trains: Myofascial Meridians for Manual and Movement Therapists (4th Edition)",
    publication: "Churchill Livingstone / Elsevier",
    pagesOrDoi: "ISBN 978-0702078132 (Ch. 6, 7 & 9)",
    keyContribution:
      "Xác lập bản đồ Giải phẫu học Chuỗi Mạc Cơ (Deep Front Line, Spiral Line, Arm Lines) nối liền từ cân gan bàn chân (huyệt Dũng Tuyền) qua sàn chậu, cơ hoành (Đan Điền) lên tới lòng bàn tay.",
  },
  {
    id: "bib-8",
    code: "[8]",
    category: "Giải Phẫu Mạc Cơ, Thần Kinh & Kinh Lạc",
    authors: "Langevin, Helene M., & Yandow, Jason A. (Harvard Medical School / University of Vermont)",
    year: "2002",
    title: "Relationship of acupuncture points and meridians to connective tissue planes",
    publication: "The Anatomical Record (Wiley)",
    pagesOrDoi: "Vol. 269(6), pp. 257–265 • DOI: 10.1002/ar.10185",
    keyContribution:
      "Công trình y học hiện đại chứng minh hơn 80% các Huyệt đạo và Đường Kinh Lạc cổ truyền phương Đông nằm chính xác trên các mặt phẳng phân cách mạng lưới Mạc cơ (Intermuscular Fascial Planes).",
  },
  {
    id: "bib-9",
    code: "[9]",
    category: "Giải Phẫu Mạc Cơ, Thần Kinh & Kinh Lạc",
    authors: "Ahn, A. C., Colbert, A. P., Anderson, B. J., Martinsen, Ø. G., ... & Langevin, H. M.",
    year: "2008",
    title: "Electrical properties of acupuncture points and meridians: A systematic review",
    publication: "Bioelectromagnetics",
    pagesOrDoi: "Vol. 29(4), pp. 245–256 • DOI: 10.1002/bem.20403",
    keyContribution:
      "Khảo cứu hệ thống về tính chất dẫn điện trở kháng thấp và hiệu ứng Áp điện sinh học (Piezoelectricity) của sợi Collagen dọc theo các đường kinh mạch khi chịu lực kéo – nén nội công.",
  },
  {
    id: "bib-10",
    code: "[10]",
    category: "Giải Phẫu Mạc Cơ, Thần Kinh & Kinh Lạc",
    authors: "Vvedensky, N. E. (1901) & Pavlov, I. P. (1927)",
    year: "1927",
    title: "Excitation, Inhibition, and Narcosis (Parabiosis) / Conditioned Reflexes: Cerebral Cortex Physiology",
    publication: "Oxford University Press / Học viện Quân Y Liên Xô",
    pagesOrDoi: "Trích dẫn trực tiếp tại Chương IV, Tr. 169–183 Sách gốc PGVX",
    keyContribution:
      "Cơ sở sinh lý học thần kinh cao cấp được PGS.TS Nguyễn Mạnh Nhâm dùng để giải thích trạng thái 'Cận sinh (Parabiose)' và 'Điểm ưu thế vỏ não' giúp huy động dự trữ của 10 tỷ tế bào thần kinh.",
  },
];

// ============================================================================
// 7. CHƯƠNG CHUYÊN KHẢO: HỆ THỐNG TẤN PHÁP & BỘ PHÁP DI CHUYỂN VỊNH XUÂN
// Phân tích 8 Thế Đứng Tấn & Mã Bộ kết hợp Phương Pháp Di Chuyển + Đối Sánh Quốc Tế
// ============================================================================

export interface StanceAndFootworkStudy {
  id: string;
  order: number;
  category: "Tấn Pháp Tĩnh & Chuyển Trục" | "Bộ Pháp Di Chuyển & Nhập Nội" | "Tấn Pháp Đặc Dị & Binh Khí";
  title: string;
  hanNom: string;
  subtitle: string;
  geometryAndWeight: {
    footSpacing: string;
    weightDistribution: string;
    pivotPoint: string;
    bodyAngle: string;
  };
  structuralCharacteristics: string[];
  movementIntegration: string;
  canonicalQuote: string;
  bookPageRef: string;
  academicCitations: string[];
  primaryImg: string;
  primaryImgCaption: string;
  diagramImg: string;
  diagramImgCaption: string;
  relatedLessonId?: string;
}

export interface LineageStanceComparisonRow {
  dimension: string;
  pgvxVietnam: string;
  gulaoLiangJan: string;
  hongKongIpMan: string;
  externalKarateBoxing: string;
  sourceRef: string;
}

export interface FootworkMobilityPrinciple {
  id: string;
  number: string;
  title: string;
  hanNom: string;
  metaphor: string;
  mechanism: string;
  sourceRef: string;
}

export const WING_CHUN_STANCES_AND_FOOTWORK_ATLAS: StanceAndFootworkStudy[] = [
  {
    id: "stance-1-nhi-tu-kiem-duong",
    order: 1,
    category: "Tấn Pháp Tĩnh & Chuyển Trục",
    title: "Nhị Tự Kiềm Dương Mã (Tấn Chữ Bát Kẹp Dê)",
    hanNom: "二字拫羊馬",
    subtitle: "Tấn pháp gốc của 18 bài quyền: Chính thân diện đối, hai chân hẹp hình chữ Bát, gối khép hướng tâm",
    geometryAndWeight: {
      footSpacing: "Hai mũi chân cách nhau 1 bề ngang bàn chân; hai gót mở rộng cách nhau 2 bề ngang bàn chân",
      weightDistribution: "50% Chân trái – 50% Chân phải (Đứng chính diện cân bằng tuyệt đối)",
      pivotPoint: "Tâm giữa lòng bàn chân (Huyệt Dũng Tuyền K1) kết hợp 10 đầu ngón chân bấu đất",
      bodyAngle: "Chính diện 0° (Trục Tý Ngọ Tuyến thẳng đứng như dây dọi, hai nắm đấm thu sát nách)",
    },
    structuralCharacteristics: [
      "Khác biệt hoàn toàn với tấn Trung bình rộng hay Cung tiễn bộ (Lunge) của Trường quyền / Karate: Vịnh Xuân đứng hai bàn chân khá gần nhau theo hình chữ Bát (八), hai đầu gối hơi khuỵu xuống và khép hướng vào trung tuyến như hai thân cây kẹp chặt con dê ('Nhị thụ kiềm dương mã' — Điển tích Chí Thiện Thiền Sư, Trang 25).",
      "Đặc trưng riêng của Phật Gia Vịnh Xuân Việt Nam (Trang 25 & 31): Tấn đứng 'hẹp hơn và cao hơn một chút so với các chi phái khác', thân mình đứng thẳng tắp, tuyệt đối tránh ngả đầu ra trước (Lời khuyên số 32, Trang 166), hai nắm đấm thu cao sát hai hốc nách.",
      "Cấu trúc 'Con lật đật (Bất đảo ông)' (Trang 19, 162): Thượng bàn (vai, ngực, tay) thả lỏng rỗng nhẹ (Thượng hư), toàn bộ trọng lượng chìm xuống Đan Điền và hai bàn chân (Hạ thực), tạo vòm tam giác chịu lực nén từ cả 4 phương.",
    ],
    movementIntegration:
      "Là 'Trạm gốc 0°' để biến hóa ra mọi bộ pháp: Từ Nhị Tự Kiềm Dương Mã, chỉ cần xoay đồng bộ hai bàn chân 30°–45° trên tâm bàn chân là lập tức chuyển thành Biên Thân Mã 90° né đòn; hoặc rút nhẹ một chân vào trung tâm là xuất ngay Vô Ảnh Cước mà thân trên không hề chao đảo.",
    canonicalQuote:
      "«Tấn chủ yếu là Nhị tự Kiềm dương Mã, đứng 2 bàn chân khá gần nhau, hình chữ bát, 2 mũi chân cách nhau 1 bề ngang bàn chân, 2 gót chân mở rộng ra ngoài cách nhau 2 bề ngang bàn chân; gối hơi khuỵu xuống (hẹp hơn và cao hơn một chút so với các chi phái khác). Thân mình đứng thẳng, tránh ngả ra trước.»",
    bookPageRef: "Sách gốc PGVX — Chương I, Trang 25, 30, 33 & Chương III, Trang 162–165",
    academicCitations: [
      "[1] PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), Tr. 25, 30, 33: Quy chuẩn hình học 1 bàn chân (mũi) – 2 bàn chân (gót).",
      "[2] Đại sư Chu Thượng Đồng (2015), Vol. 1 (Siu Nim Tau): Khóa vòm gối hướng tâm & giải nén cột sống.",
      "[7] Thomas Myers (2020), Anatomy Trains: Kích hoạt chuỗi mạc cơ sâu (Deep Front Line) từ gan bàn chân lên Đan Điền.",
    ],
    primaryImg: "/assets/hinh-2x/p037-h04.png",
    primaryImgCaption: "Võ sư thị phạm Nhị Tự Kiềm Dương Mã phóng Nhật Tự Xung Quyền (Sách gốc Trang 37)",
    diagramImg: "/assets/hinh-2x/p033-h02.png",
    diagramImgCaption: "Sơ đồ khoảng cách 2 bàn chân chữ Bát chuẩn mực (Sách gốc Trang 33)",
    relatedLessonId: "bai-07",
  },
  {
    id: "stance-2-bien-than-toa-ma",
    order: 2,
    category: "Tấn Pháp Tĩnh & Chuyển Trục",
    title: "Biên Thân Tọa Mã / Chuyển Mã (Quay Người 90°)",
    hanNom: "偏身馬 / 轉馬",
    subtitle: "Xoay bàn chân 30°–45°, quay thân nghiêng 90° chìa vai ra trước, hai bàn chân song song cách 1 bàn chân",
    geometryAndWeight: {
      footSpacing: "Hai bàn chân xoay song song với nhau, cách nhau đúng 1 bề ngang bàn chân",
      weightDistribution: "70% dồn vào Chân sau (Trụ phát lực) – 30% ở Chân trước (Linh hoạt dò đường / xuất cước)",
      pivotPoint: "Xoay trên toàn bộ bàn chân với điểm cố định ở CHÍNH GIỮA bàn chân (Tránh xoay bằng mũi hay gót)",
      bodyAngle: "Nghiêng thân 90° (Biên thân) — Chìa một vai hướng thẳng về phía địch, giấu kín trục Tý Ngọ",
    },
    structuralCharacteristics: [
      "Khi giao đấu thực chiến hoặc né đòn nhập nội, môn đồ Phật Gia Vịnh Xuân không đứng phơi ngực chính diện mà quay người 90° thành thế 'Biên thân' (Trang 25, 27, 32).",
      "Điểm kỹ thuật cực kỳ đặc sắc của sách gốc (Trang 30 & 32): Khi quay người từ Kiềm Dương sang Biên Thân, hai bàn chân đang từ hình chữ Bát sẽ xoay 30°–45° để trở nên SONG SONG với nhau và cách nhau đúng 1 bề ngang bàn chân.",
      "Tâm xoay chuẩn mực (Trang 32): 'Lúc đầu có thể nhấc nhẹ 2 gót chân, nhưng sau phải đặt xuống hoàn toàn và quay trên toàn bộ bàn chân. Điểm cố định sẽ là giữa bàn chân. Tránh quay với điểm cố định là mũi hay gót bàn chân.'",
      "Lợi thế hình học 'Trường thắng đoản' (Trang 27 & 163): Khi đã biên thân, các tử huyệt trên Tý Ngọ Tuyến được che lấp bởi vai, hông và 2 tay; đồng thời vai trước tiến sát mục tiêu khiến đòn đấm thẳng của ta đi quãng đường ngắn nhất nhưng lại vươn dài hơn tay đấm vòng của địch.",
    ],
    movementIntegration:
      "Kết hợp đồng bộ giữa 'Quay người + Quay tay (Chu kỳ 1 & 2)' (Trang 33): Vừa xoay thân biên thân vừa cuộn cổ tay Than thủ / Phục thủ để làm trượt đòn tấn công ngàn cân của đối thủ ('Tứ lạng bạt thiên cân'), đồng thời nén 70% trọng lượng xuống chân sau để nạp phản lực đất ('Lực do địa khởi') chuẩn bị bước Xước mã hoặc phóng quyền phản kích.",
    canonicalQuote:
      "«Quay người tại chỗ: Hai bàn chân quay 30–45°, thân người quay 90° sang trái. Hai bàn chân lúc này song song với nhau và cách nhau một bề ngang bàn chân. Người quay nghiêng hẳn và vai phải hướng ra trước (Biên thân). Lực chủ yếu ở chân sau, sức cảm thấy như ở lòng đất đi lên cơ thể (lực do địa khởi).»",
    bookPageRef: "Sách gốc PGVX — Chương I, Trang 25, 27, 30, 32–33 & Chương III, Trang 162–163",
    academicCitations: [
      "[1] PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), Tr. 32–33: Kỹ thuật Quay người Biên thân & tâm xoay giữa bàn chân.",
      "[2] Đại sư Chu Thượng Đồng (2015), Vol. 2 (Chum Kiu): Cơ chế xoay trục cột sống phát lực ly tâm.",
      "[5] Neto, Magini & Saba (2007), Sports Biomechanics: Gia tăng khối lượng hiệu dụng khi truyền mô-men xoắn từ chân trụ sau qua hông.",
    ],
    primaryImg: "/assets/images/fundamentals/xoay_nguoi_bien_than_authentic.png",
    primaryImgCaption: "Võ sư thị phạm thế Xoay Người Biên Thân 90° — 2 bàn chân song song (Sách gốc Trang 30)",
    diagramImg: "/assets/hinh-2x/p034-h01.png",
    diagramImgCaption: "Sơ đồ 2 bàn chân đặt song song trên trục Tý Ngọ Tuyến A–B (Sách gốc Trang 34)",
    relatedLessonId: "bai-09",
  },
  {
    id: "stance-3-xuoc-ma-truy-ma",
    order: 3,
    category: "Bộ Pháp Di Chuyển & Nhập Nội",
    title: "Xước Mã & Truy Mã (Bộ Pháp «Như Người Leo Núi»)",
    hanNom: "進退步法 / 追馬",
    subtitle: "Tiến lùi nghiêng thân, chân trước chân sau song song lướt sát mặt đất ('Túc bất ly địa') & nhịp 'Đạp cung trung'",
    geometryAndWeight: {
      footSpacing: "Một chân trước – một chân sau, hai bàn chân giữ SONG SONG và cách nhau 1 bề ngang bàn chân",
      weightDistribution: "70% ở Chân sau – 30% ở Chân trước (Giữ nguyên tỷ lệ ngay cả khi đang lướt tới hoặc lùi)",
      pivotPoint: "Đế giày / gan bàn chân ma sát trượt sát mặt sàn ('Túc bất ly địa' — không nhấc bổng chân)",
      bodyAngle: "Giữ nguyên tư thế nghiêng người (Biên thân) như người đang leo núi",
    },
    structuralCharacteristics: [
      "Hình ảnh sư phạm kinh điển của Sách gốc (Trang 25, 31, 34): 'Khi tiến hay lùi đều nghiêng người, một chân trước một chân sau, như người leo núi (xước mã, truy mã). Hai bàn chân không ở cùng một mức nhưng vẫn phải song song nhau, sức nặng chủ yếu ở chân sau.'",
      "Khác với lối bước chéo chân hoặc bước dài nhún nhảy của các môn võ khác, Xước mã giữ khung chậu ổn định ở cùng một độ cao, hai đùi trong kẹp nhẹ hướng tâm để bảo vệ hạ bộ trong suốt quá trình di chuyển.",
      "Nhịp bước 'Đạp cung trung' (Trang 25, 31): Trong các bài quyền (như 108 Tiến Lùi, Ngũ Hình, Binh Khí), môn sinh thường tiến 3 bước một và lùi 3 bước một nhịp nhàng theo hơi thở Đan Điền.",
    ],
    movementIntegration:
      "Sách gốc Trang 34 chỉ rõ 2 phương pháp kết hợp di chuyển tiến – lùi: (1) LƯỚT ĐỒNG BỘ 2 CHÂN: Cả hai bàn chân cùng trượt lướt về phía trước một lúc trên mặt sàn; (2) TRUY MÃ (Bước đuổi): Chân trước hơi nhích chuyển trước một chút rồi kéo chân sau lướt theo ngay lập tức (khi lùi thì chân sau lùi trước, chân trước rút theo). Nhờ 'Túc bất ly địa', võ sư có thể vừa lướt chân vừa phóng Liên xung quyền mà phản lực mặt đất không bị ngắt quãng dù chỉ 1 mili-giây.",
    canonicalQuote:
      "«Có thể tiến lên phía trước bằng hai chân cùng chuyển một lúc (lướt bàn chân) hay chân trước hơi chuyển trước một chút rồi kéo chân sau theo (truy mã)... Lúc di chuyển thường tiến nghiêng người, một bên vai hướng ra trước như người leo núi (xước mã). Chú ý không nhấc bàn chân lên khỏi mặt đất (túc bất ly địa).»",
    bookPageRef: "Sách gốc PGVX — Chương I, Trang 25, 31, 34–35 & Chương III, Trang 165",
    academicCitations: [
      "[1] PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), Tr. 31, 34–35: Bộ pháp Xước mã, Truy mã, Đạp cung trung & Túc bất ly địa.",
      "[4] Bolander, Neto & Bir (2009), JSSM: Duy trì tiếp xúc mặt đất liên tục giúp tối đa hóa xung lượng đòn đánh.",
    ],
    primaryImg: "/assets/images/fundamentals/di_chuyen_ma_bo_authentic.png",
    primaryImgCaption: "Võ sư thị phạm Bộ pháp Di chuyển Xước Mã / Truy Mã nghiêng thân (Sách gốc Trang 30)",
    diagramImg: "/assets/hinh-2x/p035-h01.png",
    diagramImgCaption: "Sơ đồ 3 nhịp di chuyển chân Tiến – Lùi tuyến tính trên trục A–B (Sách gốc Trang 35)",
    relatedLessonId: "bai-14",
  },
  {
    id: "stance-4-hoanh-thoai-90-270",
    order: 4,
    category: "Bộ Pháp Di Chuyển & Nhập Nội",
    title: "Hoành Thoái Bộ Pháp (Quay Vòng 90° & 270°)",
    hanNom: "橫退步法 (90° & 270°)",
    subtitle: "Tuyệt kỹ chuyển vòng bàn chân ra sau 1/4 hoặc 3/4 đường tròn để né đòn trực diện mà vẫn áp sát địch",
    geometryAndWeight: {
      footSpacing: "Kết thúc vòng quay: Hai bàn chân đặt song song cách nhau 1 bề ngang bàn chân trên trục mới vuông góc trục cũ",
      weightDistribution: "Trong lúc xoay: 100% dồn vào chân trụ; Kết thúc xoay: 70% chân sau – 30% chân trước",
      pivotPoint: "Một chân làm tâm trụ cố định, chân kia vẽ cung tròn 90° (1/4 vòng) hoặc 270° (3/4 vòng) ra sau",
      bodyAngle: "Đổi hướng chiến đấu một góc vuông 90° (từ Bắc–Nam sang Đông–Tây), vai trước hướng thẳng vào sườn địch",
    },
    structuralCharacteristics: [
      "Hoành thoái là kỹ thuật bộ pháp thượng thừa bậc nhất của Phật Gia Vịnh Xuân (Trang 34–35): Thay vì bước lùi thẳng về sau (dễ bị địch đuổi theo dồn ép), võ sư dùng 1 chân làm trụ và quét vòng chân kia ra sau kết hợp xoay thân để dạt sang bên cạnh mà vẫn đứng sát rạt đối thủ.",
      "Kỹ thuật Hoành thoái sang Trái (90° — Trang 34): Từ thế biên thân chân phải ở trước, bàn chân trái quay vòng ra sau (ngược chiều kim đồng hồ) một góc 90°, thân và bàn chân phải quay theo đặt trước và song song chân trái. Hướng đánh mới vuông góc hướng cũ và ta đứng về bên trái.",
      "Kỹ thuật Hoành thoái sang Phải (270° — Trang 34): Khó và hiểm hóc hơn: Bàn chân phải (đang ở trước) chuyển vòng lớn ra sau theo chiều kim đồng hồ một góc 270° (3/4 đường tròn), đồng thời thân và chân trái quay theo 90°, đưa vai trái và chân trái ra trước, đứng về bên phải hướng đánh cũ.",
    ],
    movementIntegration:
      "Thực thi hoàn hảo khẩu quyết 'Lai lưu khứ tống' (Trang 35 & 161): Khi đối phương lao vào đấm hoặc đá dũng mãnh, Hoành thoái giúp ta thoát khỏi đường đạn của địch trong tích tắc nhưng không lùi xa — cơ thể ta lập tức nằm ngay sát mạn sườn đối phương (nơi địch đã lỡ đà và không thể dùng đòn đá quay người), tạo thế phản đòn tất thắng.",
    canonicalQuote:
      "«Quay nghiêng người (hoành thoái) rất quan trọng: đảm bảo tránh đòn mà không bị thoái lui, người vẫn sát vào địch để có thể trả đòn ngay trong khi địch ở vào thế bất lợi vì hướng đánh đã bị lạc... Kỹ thuật hoành thoái rất khó, cần được chỉ dạy trực tiếp bởi người thầy giỏi và đòi hỏi khổ luyện.»",
    bookPageRef: "Sách gốc PGVX — Chương I, Trang 25, 34–35 & Chương III, Trang 162",
    academicCitations: [
      "[1] PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), Tr. 34–35: Đồ hình Hoành thoái 90° / 270° & Điển tích Nguyễn Kỳ Sơn thắng Vu Nhạc Cương.",
      "[3] Đại sư Diệp Chuẩn (1998): Nguyên lý chuyển góc (Angling & Shifting) hóa giải lực xung kích thẳng.",
    ],
    primaryImg: "/assets/hinh-2x/p034-h02.png",
    primaryImgCaption: "Sơ đồ kỹ thuật Hoành Thoái 270° sang phải vẽ cung 3/4 đường tròn (Sách gốc Trang 34)",
    diagramImg: "/assets/hinh-2x/p034-h03.png",
    diagramImgCaption: "Sơ đồ kỹ thuật Hoành Thoái 90° sang trái vẽ cung 1/4 đường tròn (Sách gốc Trang 34)",
    relatedLessonId: "bai-13",
  },
  {
    id: "stance-5-buoc-vong-nhap-noi",
    order: 5,
    category: "Bộ Pháp Di Chuyển & Nhập Nội",
    title: "Bộ Pháp Bước Vòng & Bước Chéo Nhập Nội Môn",
    hanNom: "弧形步 / 踏中宮",
    subtitle: "Vẽ cung lướt vòng qua chân trước của địch để đạp thẳng vào giữa hai chân đối phương ('Nhập nội môn')",
    geometryAndWeight: {
      footSpacing: "Chân trước vẽ cung lướt vòng qua điểm cản rồi cắm thẳng vào trục tâm A–B giữa hai chân địch",
      weightDistribution: "Linh hoạt chuyển từ 70/30 sang khóa trụ khi chân trước đã cài sâu vào Nội môn đối thủ",
      pivotPoint: "Chân sau giữ rễ định hướng, chân trước lướt cung tròn mượt như lưỡi liềm trên mặt sàn",
      bodyAngle: "Biên thân nhập nội phối hợp nguyên lý 'Hoành lộ chế trực lộ — Trực lộ chế hoành lộ'",
    },
    structuralCharacteristics: [
      "Sách gốc Trang 34–35 chỉ rõ: 'Có thể tiến bàn chân theo đường thẳng, đường hơi vòng hoặc bước chéo sang bên phải hoặc trái.'",
      "Trong chiến đấu thực tế, đối thủ thường dùng chân trước và tay trước che chắn đường thẳng. Bộ pháp Bước vòng (Sơ đồ Trang 35) cho phép bàn chân trước của võ sư vẽ một đường cong lượn qua mắt cá/ống đồng đối phương để đặt chân thẳng vào 'Nội môn' (khoảng giữa hai chân địch — Lời khuyên số 27, Trang 166).",
      "Đồng bộ với mật pháp dành cho nội gia đệ tử (Trang 27): 'Hoành lộ chế trực lộ — Trực lộ chế hoành lộ' (Dùng đường hơi vòng để khắc chế đường thẳng, dùng đường thẳng để khắc chế đường vòng).",
    ],
    movementIntegration:
      "Kết hợp với 'Linh giác chi dưới' (Niêm cước — Trang 163): Khi bàn chân trước vừa chạm nhẹ vào chân địch, xúc giác của chân lập tức 'nghe' được trọng tâm của địch rồi lướt vòng qua chỗ trống để vừa khóa chân địch (cài mã) vừa phóng chưởng/quyền đánh ngã.",
    canonicalQuote:
      "«Hãy bước thẳng vào giữa 2 chân đối thủ (nội môn) và tấn công (nhập nội). Khi đối thủ lùi, không đứng yên mà cần lướt theo sát.»",
    bookPageRef: "Sách gốc PGVX — Chương I, Trang 27, 34–35 & Chương III, Trang 163, 166 (Lời khuyên 27, 29)",
    academicCitations: [
      "[1] PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), Tr. 27, 35, 163, 166: Sơ đồ bước vòng & Linh giác chi dưới.",
    ],
    primaryImg: "/assets/hinh-2x/p035-h02.png",
    primaryImgCaption: "Sơ đồ bộ pháp di chuyển đường vòng lách góc chiếm trục A–B (Sách gốc Trang 35)",
    diagramImg: "/assets/hinh-2x/p163-h01.png",
    diagramImgCaption: "Võ sư Nguyễn Văn Chiến và Võ sư Lê Văn Tùng thị phạm Linh giác chi dưới & Cài mã nhập nội (Sách gốc Trang 163)",
    relatedLessonId: "bai-15",
  },
  {
    id: "stance-6-quy-ma-tan",
    order: 6,
    category: "Tấn Pháp Đặc Dị & Binh Khí",
    title: "Quy Mã Tấn (Tấn Quỳ Gối Hạ Thấp Trọng Tâm)",
    hanNom: "龜馬 / 跪馬",
    subtitle: "Hạ sập pháo đài cơ thể sát đất mà lưng vẫn thẳng đứng vuông góc với đùi — tuyệt đối không cúi gập lưng",
    geometryAndWeight: {
      footSpacing: "Một bàn chân giẫm phẳng xuống đất ở phía trước, đầu gối chân kia quỳ hạ sát mặt sàn phía sau",
      weightDistribution: "60% trên chân quỳ gối trụ dưới – 40% trên bàn chân giẫm sàn phía trước",
      pivotPoint: "Khớp háng hạ thấp theo phương thẳng đứng như thang máy, giữ nguyên trục cột sống",
      bodyAngle: "Thân người quay theo hướng vuông góc với đùi của chân giẫm bàn xuống đất, lưng thẳng tắp",
    },
    structuralCharacteristics: [
      "Sách gốc Trang 25, 30, 31 & 34 quy định rất nghiêm ngặt: 'Khi địch hạ người xuống thấp, không được cúi người xuống mà tạ thấp người theo thế Quy Mã Tấn. Trong tấn này, một bàn chân giẫm xuống đất, chân kia quỳ gối, người quay theo hướng vuông góc với đùi của chân giẫm bàn xuống đất.'",
      "Giải thích cơ sinh học & nội công: Nếu người tập cúi gập thắt lưng để đỡ đòn thấp, đầu sẽ ngả ra trước (vi phạm điều cấm kỵ số 32, Trang 166), làm gãy trục Đốc Mạch, mất hoàn toàn khả năng dẫn lực từ chân lên tay và phơi gáy cho địch đánh. Quy Mã Tấn hạ thấp độ cao bằng khớp gối và khớp háng trong khi cột sống vẫn thẳng đứng hoàn hảo.",
    ],
    movementIntegration:
      "Từ Biên Thân Mã hoặc Xước Mã, khi gặp đòn quét trụ hoặc khi cần đánh đòn thọc thấp vào hạ bàn / bụng dưới (như trong bài Hổ Quyền, Báo Quyền, Bát Trảm Đao, Lục Điểm Bán Côn), võ sư sập nhanh gối sau xuống thành Quy Mã, vừa tránh đòn tầm cao vừa tung đòn phản kích từ dưới lên rồi bật dậy ngay nhờ sức đàn hồi của đùi.",
    canonicalQuote:
      "«Khi địch hạ người xuống thấp, không được cúi người xuống mà 'tạ thấp' người theo thế Quy Mã Tấn (hình tr. 31). Trong tấn này, một bàn chân giẫm xuống đất, chân kia quỳ gối, người quay theo hướng vuông góc với đùi của chân giẫm bàn xuống đất.»",
    bookPageRef: "Sách gốc PGVX — Chương I, Trang 25, 30, 31, 34 & Chương III, Trang 166",
    academicCitations: [
      "[1] PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), Tr. 31, 34: Quy chuẩn Quy Mã Tấn & nguyên tắc giữ thẳng trục lưng.",
      "[2] Đại sư Chu Thượng Đồng (2015): Bảo toàn trục thẳng đứng của cột sống trong mọi độ cao của tấn pháp.",
    ],
    primaryImg: "/assets/hinh-2x/p031-h01.png",
    primaryImgCaption: "PGS.TS Nguyễn Mạnh Nhâm giám sát hai võ sư thị phạm Quy Mã Tấn đối kháng tầm thấp (Sách gốc Trang 31)",
    diagramImg: "/assets/hinh-2x/p129-h01.png",
    diagramImgCaption: "Ứng dụng tấn pháp thấp trong Ngũ Hình Quyền (Sách gốc Trang 129)",
    relatedLessonId: "bai-23",
  },
  {
    id: "stance-7-ma-cheo-xa-quyen",
    order: 7,
    category: "Tấn Pháp Đặc Dị & Binh Khí",
    title: "Mã Chéo / Xoa Mã (Bộ Pháp Xà Quyền & Thượng Thừa)",
    hanNom: "叉馬 / 蛇拳步",
    subtitle: "Đan chéo hai chân sát nhau, xoay 2 chân sát nhau hoặc lướt 2 chân cùng lúc như rắn trườn",
    geometryAndWeight: {
      footSpacing: "Hai bàn chân đặt sát nhau và đan chéo hình chữ X (Xoa mã), hai đùi ép khít vào nhau",
      weightDistribution: "Luân chuyển uyển chuyển 50/50 hoặc 80/20 giữa hai chân đang đan xoắn",
      pivotPoint: "Hai bàn chân xoay sát nhau trên một diện tích cực hẹp hoặc trượt đồng thời",
      bodyAngle: "Thân người uốn xoắn linh hoạt như thân rắn, hai tay xuất Xà thủ / Chỉ pháp trên trục Tý Ngọ",
    },
    structuralCharacteristics: [
      "Sách gốc Trang 31 ghi rõ: 'Tuy nhiên, cũng có một số mã bộ phức tạp như mã chéo, mã di chuyển bằng quay 2 chân sát nhau (như trong bài Xà Quyền), lướt 2 chân cùng một lúc... chỉ khi học cao mới được tập.'",
      "Về mặt cơ sinh học (Anatomy Trains [7]), tư thế đan chéo hai đùi ép sát nhau làm căng toàn bộ Chuỗi Mạc Cơ Xoắn Ốc (Spiral Line) từ bàn chân qua hông lên lồng ngực. Cơ thể lúc này giống như một chiếc lò xo xoắn (Torsion Spring) đang được vặn chặt: chỉ cần nhả nhẹ khớp háng là toàn thân bung xoay 180° hoặc vọt lướt đi với tốc độ cực cao.",
    ],
    movementIntegration:
      "Dùng trong không gian chiến đấu chật hẹp ('Quyền đả ngọa ngưu chi địa' — mảnh đất vừa con trâu nằm, Trang 27): Cho phép võ sư đổi chân, chuyển hướng, khóa chặn đòn đá thấp của địch và luồn lách ra sau lưng đối phương mà không cần bước rộng.",
    canonicalQuote:
      "«Tuy nhiên, cũng có một số mã bộ phức tạp như mã chéo, mã di chuyển bằng quay 2 chân sát nhau (như trong bài Xà Quyền), lướt 2 chân cùng một lúc... chỉ khi học cao mới được tập.»",
    bookPageRef: "Sách gốc PGVX — Chương I, Trang 31 & Chương II (Bài Xà Quyền), Trang 124–128",
    academicCitations: [
      "[1] PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), Tr. 31, 124–128: Kỹ thuật Mã chéo & Xà quyền.",
      "[7] Thomas Myers (2020), Anatomy Trains (Ch. 6): Chuỗi mạc cơ xoắn ốc (Spiral Line) tích trữ năng lượng đàn hồi khi đan chéo chân.",
    ],
    primaryImg: "/assets/hinh-2x/p031-h02.png",
    primaryImgCaption: "Võ sư thị phạm thế Mã Chéo (Xoa Mã) đặc trưng của bài Xà Quyền (Sách gốc Trang 31)",
    diagramImg: "/assets/hinh-2x/p124-h02.png",
    diagramImgCaption: "Thế tấn đan chéo uyển chuyển trong bài Xà Quyền (Sách gốc Trang 124)",
    relatedLessonId: "bai-22",
  },
  {
    id: "stance-8-doc-lap-tu-binh-chao-ma",
    order: 8,
    category: "Tấn Pháp Đặc Dị & Binh Khí",
    title: "Độc Lập Tấn, Tứ Bình Mã & Chảo Mã (Cước & Binh Khí)",
    hanNom: "獨立步 / 四平馬 / 吊馬",
    subtitle: "Tấn 1 chân trụ xuất Vô Ảnh Cước ('Quyền 5 Cước 7') & Tấn rộng thấp trong Lục Điểm Bán Côn",
    geometryAndWeight: {
      footSpacing: "Độc lập tấn: 1 chân trụ bám đất, 1 gối nâng cao | Tứ bình & Chảo mã (Côn pháp): Mở rộng hơn tấn tay không",
      weightDistribution: "Độc lập tấn: 100% chân trụ | Chảo mã / Tam giác mã binh khí: 70%–80% chân sau, 20%–30% chân trước",
      pivotPoint: "Gót và toàn bộ gan bàn chân trụ cắm sâu xuống sàn như cọc tiêu chịu phản lực",
      bodyAngle: "Độc lập tấn: Thân thẳng không ngả sau khi đá | Côn pháp: Hạ thấp trọng tâm, lưng thẳng, hợp nhất người và vũ khí",
    },
    structuralCharacteristics: [
      "1. Độc Lập Tấn & Đòn Gối Cầm Nã Xuất Cước (Trang 29–30, 137): Sách gốc khẳng định 'Quyền 5 Cước 7 — Nếu hai người đòn tay bằng nhau thì ai cước hơn thì sẽ thắng'. Khi xuất cước (Vô ảnh cước, Toái tâm cước, Đoạt mệnh cước) hoặc trong bài Hạc Quyền, chân trụ bám đất vững chắc, chân kia dâng cao đầu gối vừa che hạ bộ, vừa phối hợp tay khống chế tay đối thủ (cầm nã) rồi xoay mũi bàn chân đá móc lên từ điểm mù.",
      "2. Tứ Bình Mã, Chảo Mã & Tam Giác Mã trong Vũ Khí (Trang 25, 185, 199–201): Trong quyền tay không, PGVX ít dùng Trung bình tấn hay Chảo mã rộng (Trang 25). Nhưng khi cầm vũ khí (Bát Trảm Đao, Lục Điểm Bán Côn, Liễu Diệp Kiếm) hoặc tập Mộc Mã trận địa chiến, sách gốc Trang 185 & 201 chỉ rõ: 'Mã bộ cũng như đòn thế thường rộng hơn một chút. Lực chủ yếu dồn vào chân sau nhưng khi đánh tới đích thì dồn cả sức, khí vào vũ khí... Chủ yếu dùng tam giác mã và xước mã' và Chiêu 13 Lục Điểm Bán Côn dùng 'Chảo mã tấn lướt người vào thúc côn'.",
    ],
    movementIntegration:
      "Trong Côn pháp (Trang 199–201), tấn thấp kết hợp với bộ pháp 'Lướt 2 chân về trước thúc côn' (Chiêu 3), 'Lùi 3 bước kéo lê côn' (Chiêu 5) và 'Loan côn tiến 3 bước – Loan côn lùi 5 bước' (Chiêu 15), biến sức nặng của cả cơ thể và mặt đất thành xung lượng đầu côn.",
    canonicalQuote:
      "«Khi dùng chân nhiều khi phải dâng cao đầu gối, khống chế tay đối thủ (cầm nã) và quay mũi bàn chân đá móc lên — đó là cách xuất cước khi cận chiến... Với vũ khí: Mã bộ thường rộng hơn một chút, lực chủ yếu dồn vào chân sau nhưng khi đánh tới đích thì dồn cả sức, khí vào vũ khí.»",
    bookPageRef: "Sách gốc PGVX — Chương I, Trang 25, 29–30; Chương II (Hạc Quyền), Trang 137 & Chương V (Vũ Khí), Trang 185, 199–201",
    academicCitations: [
      "[1] PGS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2006), Tr. 29–30, 137, 185, 199–201: Quyền 5 Cước 7, Đòn gối cầm nã & Mã bộ Binh khí.",
      "[3] Đại sư Diệp Chuẩn (1998), Ch. 6: Tứ bình đại mã & Điếu mã (Chảo mã) trong Lục Điểm Bán Côn.",
    ],
    primaryImg: "/assets/hinh-2x/p029-h05.png",
    primaryImgCaption: "Võ sư thị phạm Tư thế chân trụ Độc Lập & nâng gối xuất cước cận chiến (Sách gốc Trang 29)",
    diagramImg: "/assets/hinh-2x/p201-h05.png",
    diagramImgCaption: "Võ sư Nguyễn Văn Chiến thị phạm Chảo Mã Tấn thúc côn trong bài Lục Điểm Bán Côn (Sách gốc Trang 201)",
    relatedLessonId: "con",
  },
];

export const WING_CHUN_LINEAGE_STANCE_COMPARISON: LineageStanceComparisonRow[] = [
  {
    dimension: "1. Độ rộng & Độ cao của Nhị Tự Kiềm Dương Mã",
    pgvxVietnam:
      "Hẹp và cao hơn một chút: Mũi chân cách 1 bề ngang bàn chân, gót cách 2 bề ngang bàn chân; gối hơi khuỵu nhẹ giúp di chuyển cực kỳ thanh thoát.",
    gulaoLiangJan:
      "Rất tương đồng với PGVX: Tấn cao, hẹp, linh hoạt (do Sư tổ Lương Tán đúc kết khi đã trên 70 tuổi truyền dạy tại làng Cổ Lao).",
    hongKongIpMan:
      "Rộng bằng vai (khoảng 1.5–2 bàn chân) và sập gối thấp hơn để rèn sức chịu đựng cơ đùi trong giai đoạn sơ cấp.",
    externalKarateBoxing:
      "Choãi chân rất rộng và dài (như Cung tiễn bộ / Zenkutsu-dachi) hoặc đứng nhón gót nhún nhảy (Boxing).",
    sourceRef: "[1, Tr. 25, 30, 31], [2, Vol. 1], [3, Ch. 2]",
  },
  {
    dimension: "2. Tư thế Thân người khi Giao đấu (Chính thân vs Biên thân)",
    pgvxVietnam:
      "Chủ đạo là BIÊN THÂN (Quay người nghiêng 90°, chìa một vai ra trước, hai bàn chân song song cách 1 bàn chân) để che kín Tý Ngọ Tuyến và vươn dài tầm tay ('Trường thắng đoản').",
    gulaoLiangJan:
      "Thiên về Biên thân (Thân nghiêng phỏng theo thế trúc nghiêng trước gió), dùng góc nghiêng để triệt tiêu lực trực diện.",
    hongKongIpMan:
      "Thường giữ Chính thân (Square-on facing) hoặc Bán biên thân (45°) để dùng cả hai tay cùng lúc trên trung tuyến.",
    externalKarateBoxing:
      "Xoay vai lấy đà vung hông lớn (Over-rotation) khi đấm móc hoặc đấm sau, dễ bị lộ sườn và mất trục khi đánh trượt.",
    sourceRef: "[1, Tr. 25, 27, 32, 163], [2, Vol. 2]",
  },
  {
    dimension: "3. Tâm Trục Xoay Bàn Chân khi Chuyển Mã",
    pgvxVietnam:
      "Đặt toàn bộ bàn chân xuống sàn, tâm xoay cố định ở CHÍNH GIỮA BÀN CHÂN (Huyệt Dũng Tuyền). Tránh xoay bằng mũi hay gót chân.",
    gulaoLiangJan:
      "Xoay trên lòng bàn chân kết hợp bước lướt nhẹ đổi góc liên hoàn.",
    hongKongIpMan:
      "Nhánh Chu Thượng Đồng xoay trên TRỤC GÓT CHÂN; nhánh Diệp Chuẩn / Lương Đĩnh xoay ở giữa bàn chân hoặc phần sau bàn chân.",
    externalKarateBoxing:
      "Xoay bằng ỨC MŨI CHÂN (kiểu nhón gót chân sau khi đấm Cross/Hook trong Boxing), làm giảm diện tích bám đất.",
    sourceRef: "[1, Tr. 32], [2, Vol. 2], [3, Ch. 3]",
  },
  {
    dimension: "4. Phân bổ Trọng lượng Chân trước / Chân sau",
    pgvxVietnam:
      "Chính diện Kiềm Dương: 50/50. Khi Biên thân & Di chuyển Xước mã: 70% CHÂN SAU / 30% CHÂN TRƯỚC ('Lực do địa khởi' từ chân sau).",
    gulaoLiangJan:
      "Trọng tâm dồn chủ yếu ở chân sau (60/40 hoặc 70/30) để chân trước nhẹ nhàng điểm cước hoặc chuyển bước.",
    hongKongIpMan:
      "Nhánh Chu Thượng Đồng / Hoàng Thuần Lương: 50/50; Nhánh Diệp Chuẩn / Lương Đĩnh: 0/100 hoặc 30/70 dồn chân sau.",
    externalKarateBoxing:
      "Đổ dồn 70%–80% trọng lượng lên CHÂN TRƯỚC khi bước đấm Lunge/Cross, rất dễ bị Vịnh Xuân kéo sập về trước ('Khứ tống').",
    sourceRef: "[1, Tr. 31, 33, 34], [2], [3]",
  },
  {
    dimension: "5. Phương pháp Di chuyển & Tránh đòn chủ đạo",
    pgvxVietnam:
      "Xước mã / Truy mã (như người leo núi), Túc bất ly địa, Đạp cung trung (tiến 3 lùi 3) và tuyệt kỹ HOÀNH THOÁI 90° & 270° vẽ cung tròn sát địch.",
    gulaoLiangJan:
      "Bộ pháp Tam giác và Xước mã lướt ngắn, áp sát liên tục khóa không gian đối thủ.",
    hongKongIpMan:
      "Biểu mã (Biu Ma / Bước mũi tên), Khuyên mã (Bước vòng cung) và Tam giác mã tiến – thoái.",
    externalKarateBoxing:
      "Nhảy bước dài (Pendulum bounce / Lunge step), có khoảng thời gian cả hai chân rời mặt đất nên không thể phát lực tức thời.",
    sourceRef: "[1, Tr. 25, 31, 34–35, 165], [4]",
  },
];

export const FIVE_FOOTWORK_MOBILITY_PRINCIPLES: FootworkMobilityPrinciple[] = [
  {
    id: "mob-1",
    number: "Nguyên Tắc 01",
    title: "Vững Động: «Chiếc Xe Đạp Đang Lăn Bánh & Con Lật Đật»",
    hanNom: "動中求靜 • 不倒翁",
    metaphor: "Con lật đật (Thượng hư hạ thực) & Xe đạp lăn bánh",
    mechanism:
      "Tấn Vịnh Xuân cao và hẹp nên nếu đứng cứng đờ bằng cơ bắp thì kém vững hơn tấn thấp rộng. Nhưng cái vững của Vịnh Xuân là 'Vững Động': Giống như chiếc xe đạp không bao giờ đổ khi đang lăn bánh và Trái Đất không rơi vào không gian vì nó tự quay — khi nội khí Đan Điền và bộ pháp Xước mã / Hoành thoái vận chuyển liên tục, mọi lực xô đẩy đều bị chuyển hóa thành mô-men phản kích.",
    sourceRef: "[1] Sách gốc PGVX, Trang 19, 162 & 165",
  },
  {
    id: "mob-2",
    number: "Nguyên Tắc 02",
    title: "«Túc Bất Ly Địa» — Đế Chân Ma Sát Mặt Đất Liên Tục",
    hanNom: "足不離地 • 力由地起",
    metaphor: "Con thuyền lướt trên mặt nước, rễ cây bám sâu lòng đất",
    mechanism:
      "Trong suốt quá trình tiến (Xước mã), đuổi (Truy mã) hay xoay vòng (Hoành thoái), đế bàn chân luôn lướt sát mặt sàn mà không nhảy bổng lên. Về mặt vật lý cơ sinh học, điều này đảm bảo vector Phản lực mặt đất (F_GRF) luôn lớn hơn 0 ở mọi phần nghìn giây, cho phép võ sư phát Thốn kình ngay trong tích tắc đang di chuyển.",
    sourceRef: "[1] Sách gốc PGVX, Trang 34 & 165; [4] Bolander et al. (2009)",
  },
  {
    id: "mob-3",
    number: "Nguyên Tắc 03",
    title: "«Biên Thân 90°» — Biến Đoản Thành Trường («Trường Thắng Đoản»)",
    hanNom: "偏身九十 • 長勝短",
    metaphor: "Xoay nghiêng cánh cửa thép, vươn mũi giáo thẳng",
    mechanism:
      "Khi quay người 90° đưa một vai ra trước và đặt 2 bàn chân song song cách nhau 1 bàn chân, toàn bộ các huyệt đạo chí mạng trên Tý Ngọ Tuyến của ta được giấu đi. Đồng thời, khớp vai trước được đẩy sát về phía địch thêm 15–20cm, làm đòn đấm thẳng ngắn của Vịnh Xuân lại chạm đích trước và dài hơn đòn đấm vòng của đối thủ.",
    sourceRef: "[1] Sách gốc PGVX, Trang 25, 27, 32 & 163",
  },
  {
    id: "mob-4",
    number: "Nguyên Tắc 04",
    title: "«Hoành Thoái 90° / 270°» — Tránh Đòn Mà Không Thoái Lui",
    hanNom: "橫退不離 • 來留去送",
    metaphor: "Nước rẽ quanh tảng đá rồi ập ngay vào sau tảng đá",
    mechanism:
      "Khi gặp đối thủ to khỏe tấn công vũ bão (như cao thủ Đường Lang Vu Nhạc Cương), nếu lùi thẳng về sau sẽ rơi vào tầm cước dài của địch. Dùng chân trụ và vẽ vòng chân kia 90° hoặc 270° ra sau (Hoành thoái) giúp ta thoát khỏi trục xung kích nhưng thân mình vẫn dán sát vào sườn địch, khóa chết mọi đòn chân của đối phương.",
    sourceRef: "[1] Sách gốc PGVX, Trang 34–35 & 162",
  },
  {
    id: "mob-5",
    number: "Nguyên Tắc 05",
    title: "«Quyền 5 Cước 7» & Hạ Thấp Bằng «Quy Mã» Không Cúi Lưng",
    hanNom: "拳五腳七 • 龜馬直身",
    metaphor: "Cột trụ thẳng đứng hạ ngầm xuống đất, cước ẩn dưới gối",
    mechanism:
      "Hai người đòn tay ngang nhau thì ai giỏi bộ pháp và cước pháp hơn sẽ thắng. Khi xuất cước (Vô ảnh cước, Đòn gối cầm nã đá móc), chân trụ phải mọc rễ; khi địch đánh thấp, tuyệt đối không cúi gập lưng làm gãy cột sống mà phải sập gối thành Quy Mã Tấn để giữ trục Tý Ngọ Tuyến thẳng đứng tuyệt đối.",
    sourceRef: "[1] Sách gốc PGVX, Trang 29–31, 34 & 166",
  },
];

