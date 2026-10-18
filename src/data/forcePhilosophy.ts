// ============================================================================
// CƠ CHẾ DÙNG LỰC TAY - CHÂN & TRIẾT LÝ KHÍ LỰC PHẬT GIA VỊNH XUÂN
// Kết hợp 100% Giáo trình Sách gốc (PGS.TS Y Khoa Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức)
// cùng Cơ sinh học Hiện đại (Biomechanics / Myofascial Chains) & Nội công Đông phương
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
  imageUrl: string;
  imageCaption: string;
}

export interface ForceComparisonRow {
  criterion: string;
  bruteForce: string;
  wingChunJin: string;
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
}

export const FORCE_PHILOSOPHY_HERO = {
  eyebrow: "CHUYÊN KHẢO CỐT TỦY • CƠ SINH HỌC & NỘI GIA KHÍ LỰC",
  title: "Lý Thuyết & Triết Lý Dùng Lực Tay – Chân Trong Vịnh Xuân",
  hanNom: "力從地起 • 意到氣到 • 氣到力到 • 寸勁爆發",
  subtitle:
    "Giải mã tường tận nghịch lý lớn nhất của Vịnh Xuân Quyền: Vì sao đứng tấn tại chỗ hoặc chỉ lướt nhẹ mà lực từ lòng bàn chân lại có thể truyền xuyên qua hông, cột sống để bộc phát thành Thốn Kình sấm sét ở đôi tay?",
  coreMotto:
    "Lực do địa khởi, quyền tùy tâm phát • Đả quyền bất luyện công, đáo lão nhất trường không • Lực bất đả quyền, quyền bất đả công.",
  coreMottoSource: "Sách gốc Phật Gia Vịnh Xuân Quyền — Trang 27, 164 & 167",
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
    bookPageRef: "Trang 36 & Trang 165 — Sách gốc Phật Gia Vịnh Xuân Quyền",
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
    bookPageRef: "Trang 25 & Trang 36 — Sách gốc Phật Gia Vịnh Xuân Quyền",
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
    bookPageRef: "Trang 178–179 — Sách gốc Phật Gia Vịnh Xuân Quyền",
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
    bookPageRef: "Trang 27, 29 & 180 — Sách gốc Phật Gia Vịnh Xuân Quyền",
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
    bookPageRef: "Trang 19, 27 & 164 — Sách gốc Phật Gia Vịnh Xuân Quyền",
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
  },
  {
    criterion: "2. Trạng thái cơ bắp trên đường đi",
    bruteForce:
      "Gồng cứng ngay từ lúc bắt đầu vung tay khiến cơ đối kháng tự hãm tốc độ và làm khớp vai chặn đứt lực từ chân truyền lên.",
    wingChunJin:
      "Miên quyền (Mềm như bông gòn) / Lò xo cật tre: Thả lỏng hoàn toàn trên đường đi, chỉ khóa Lục Hợp trong 0.01 giây chạm đích (Thốn kình).",
  },
  {
    criterion: "3. Quỹ đạo & Cự ly cần thiết",
    bruteForce:
      "Cần khoảng cách dài để kéo tay lấy đà hoặc vung rộng (dễ lộ ý đồ, hở trung tuyến và bị mất đà khi đánh trượt).",
    wingChunJin:
      "Lưỡng điểm chi gian, trực tuyến tối giản: Phát lực cực đại ngay ở cự ly 1 thốn (2.5 cm) trên trục Tý Ngọ Tuyến, đánh trượt không mất đà (Vô thất quy).",
  },
  {
    criterion: "4. Đặc tính va chạm vật lý",
    bruteForce:
      "Lực đẩy bề mặt (Momentum Push — Δt lớn): Làm đối phương ngã văng ra xa nhưng lực phân tán ngoài vỏ cơ.",
    wingChunJin:
      "Xung lực xuyên thấu (Shockwave Impulse — Δt cực nhỏ): Sóng chấn động xuyên thẳng qua lớp giáp cơ vào sâu bên trong (Nội chấn).",
  },
  {
    criterion: "5. Vận hành Khí & Thần kinh",
    bruteForce:
      "Thở gấp ở ngực, huyết áp tăng, tiêu hao nhiều oxy (ATP), nhanh chóng kiệt sức sau vài phút giao đấu.",
    wingChunJin:
      "Ý thủ Đan Điền, thở cơ hoành sâu êm, Thần định Khí liễm, tiết kiệm năng lượng tối đa, càng đánh hơi thở càng điều hòa.",
  },
  {
    criterion: "6. Sự biến đổi theo tuổi tác (20 ➔ 80 tuổi)",
    bruteForce:
      "Đạt đỉnh ở tuổi 25–30 rồi suy giảm nhanh chóng khi về già ('Đả quyền bất luyện công, đáo lão nhất trường không').",
    wingChunJin:
      "Khi có tuổi, cơ bắp giảm nhưng Nội công, Linh giác và Khung cấu trúc ngày càng tinh thuần ('Sức mạnh nội công không giảm, có khi còn tăng!' — Trang 167).",
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
    bookPage: "Trang 19, 27 & Trang 166 (Lời khuyên 34)",
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
    bookPage: "Trang 27, 29 & Trang 162",
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
    bookPage: "Trang 162, 164 & Trang 166 (Lời khuyên 11 & 21)",
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
    bookPage: "Trang 164–165 — Sách gốc Phật Gia Vịnh Xuân Quyền",
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
    bookPage: "Trang 25, 165 & Trang 166 (Lời khuyên 12)",
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
    bookPage: "Trang 29–30 & Trang 166 (Lời khuyên 26)",
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
    bookReference: "Chương IV: Nội Công — Trang 36 & Trang 178–180 Sách gốc Phật Gia Vịnh Xuân Quyền",
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
    bookReference: "Trang 16, Trang 180 & Trang 214 — Sách gốc Phật Gia Vịnh Xuân Quyền",
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
      "Bình thường, để bảo vệ gân và xương khỏi bị đứt gãy, bộ não con người luôn duy trì cơ chế 'Ức chế thần kinh tự vệ' (Golgi Tendon Organ Inhibition), chỉ cho phép huy động tối đa 30%–40% số sợi cơ trong cùng một thời điểm. Khi luyện Nội công và Thiền định lâu năm, người võ sư học được cách làm chủ hệ thần kinh trung ương để tạm thời gỡ bỏ rào cản ức chế này trong đúng 0.01 giây phát Thốn kình, huy động đồng bộ 80%–90% đơn vị vận động trong tích tắc rồi lập tức thư giãn!",
    whyWestCannotFullyExplainYet:
      "Y học phương Tây chỉ coi trạng thái này là phản ứng Adrenaline khẩn cấp (Fight-or-Flight) gây kiệt sức sau đó. Nhưng ở các bậc Đại sư Nội công, họ có thể phát xuất công lực phi thường này ngay trong trạng thái tâm trí bình thản tuyệt đối ('Tịnh tâm / Paix intérieure', nhịp tim chậm, không cần Adrenaline) và lặp lại nhiều lần mà không hề tổn hại cơ thể!",
    bookReference: "Chương IV, Mục VI.2: Thuyết Thần Kinh — Trang 180–183 Sách gốc Phật Gia Vịnh Xuân Quyền",
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
    bookReference: "Trang 92–94, Trang 119 & Trang 179 — Sách gốc Phật Gia Vịnh Xuân Quyền",
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
      "Cánh tay không hề mỏi cơ nhưng có độ trương lực đàn hồi (Tensegrity & Nội khí) từ bên trong chống lại ngoại lực một cách nhẹ nhàng.",
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
  },
];
