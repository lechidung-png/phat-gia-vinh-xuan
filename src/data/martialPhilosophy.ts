// ==============================================================================
// TRIẾT LÝ, YẾU QUYẾT & TINH HOA VÕ ĐẠO PHẬT GIA VỊNH XUÂN
// Căn cứ: Giáo trình chính thống của GS.TS Y khoa Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức
// Mở rộng: Đối chiếu tinh hoa Vịnh Xuân thế giới (Ip Man, Leung Ting, Wong Shun Leung, Bruce Lee)
// ==============================================================================

export interface StrategicAphorism {
  id: string;
  order: number;
  title: string;
  hanzi: string;
  shortSummary: string;
  philosophy: string;
  biomechanics: string;
  originalQuote: string;
  pageRef: string;
  tacticalApplication: string;
  keyConcepts: string[];
}

export interface MasterCounsel {
  number: number;
  text: string;
  category: "ethics" | "training" | "combat" | "health";
  categoryLabel: string;
  elaboration: string;
  keywords: string[];
}

export interface GlobalMasterBridge {
  id: string;
  masterName: string;
  branch: string;
  period: string;
  coreDoctrine: string;
  famousQuote: string;
  pgvxCorrelation: string;
  historicalContext: string;
  sharedPrinciples: string[];
}

export interface MartialWisdomQuote {
  id: string;
  quote: string;
  author: string;
  roleOrSource: string;
  category: "philosophy" | "strategy" | "mindset" | "lineage" | "health";
  hanNom?: string;
  context: string;
  authorImage?: string;
  imageCaption?: string;
}

// ==============================================================================
// 1. BẢY ĐẠI KHẨU QUYẾT CHIẾN LƯỢC & CƠ SINH HỌC (TRANG 161 - 165 SÁCH GỐC)
// ==============================================================================
export const STRATEGIC_APHORISMS: StrategicAphorism[] = [
  {
    id: "ty-ngo-tuyen",
    order: 1,
    title: "Tý Ngọ Tuyến (Trung Tuyến Tuyệt Đối)",
    hanzi: "子午中線 • Thủ Lưu Trung Tuyến",
    shortSummary: "Đường trục sinh tử chia đôi thân thể — Mọi thủ pháp đều xuất phát và bảo vệ trung lộ.",
    philosophy: "Là đường giữa (trung lộ, trung tuyến), đường chia đôi thân thể, đi từ huyệt Ấn Đường (giữa hai lông mày) qua Chấn Thủy đến Đan Điền (bụng dưới). Môn đồ Phật Gia Vịnh Xuân phải cố gắng bảo vệ Tý Ngọ Tuyến của mình và tấn công đối phương trên đường này (tối ưu).",
    biomechanics: "Khuỷu tay luôn ở chéo áo, cách ngực đúng một nắm đấm (quyền). Hai cẳng tay tạo thành hình chóp nêm tam giác vững chãi, phân tán mọi lực trực diện của địch về hai bên vai mà không làm tổn hại lồng ngực hay ngũ tạng.",
    originalQuote: "Đỡ và tấn công theo trung lộ. Khuỷu tay thường ở chéo áo, cách ngực một quyền là vừa (thủ lưu trung tuyến). Đây là một đặc điểm nhận biết đúng là môn đồ Vịnh Xuân Quyền.",
    pageRef: "Trang 161",
    tacticalApplication: "Chiếm giữ trung lộ khiến đối phương buộc phải đánh vòng. Đòn vòng luôn đi chậm và tốn năng lượng hơn đòn thẳng trung tâm.",
    keyConcepts: ["Thủ Lưu Trung Tuyến", "Chóp Nêm Bảo Vệ", "Huyệt Đan Điền", "Cùi Chỏ Chéo Áo"]
  },
  {
    id: "lai-luu-khu-tong",
    order: 2,
    title: "Lai Lưu Khứ Tống — Thoát Thủ Trực Xông",
    hanzi: "來留去送 • 甩手直衝",
    shortSummary: "Địch đến thì tiếp nhận, địch rút thì theo sát, buông tay lập tức phóng quyền xuyên thấu.",
    philosophy: "Khi lực tấn công đến, môn sinh không chống lại (không lực đối lực), nhưng tiếp nhận dính sát, làm chệch hướng tý chút (tứ lạng bạt thiên cân). Khi đối phương rút tay về thì theo sát bổ sung lực, và khi sự tiếp xúc mất đi thì phóng thẳng ra trước không cần do dự.",
    biomechanics: "Cơ bắp và gân khớp hoạt động như một khúc cật tre dẻo hoặc lò xo xoắn: Bị ép thì thu nén đàn hồi tích năng lượng, giải phóng áp lực là tự động bung ra phía trước với tốc độ cực đại.",
    originalQuote: "Chân tay của môn sinh VXQ hoạt động như một khúc tre hay một cái lò xo: khi thoát ép nó bật ra phía trước rất nhanh (thoát thủ trực xông). Sử dụng thành thạo biên thân, quay người, hoành thoái với đòn hẹp là cơ sở thực hiện.",
    pageRef: "Trang 161 - 162",
    tacticalApplication: "Không tìm kiếm tay địch, nhưng hễ chạm là dính, dính là hóa giải, buông rời là đòn phản công tự động phóng trúng đích.",
    keyConcepts: ["Lò Xo Đàn Hồi", "Tứ Lạng Bạt Thiên Cân", "Xúc Giác Niêm Thủ", "Thoát Thủ Trực Xông"]
  },
  {
    id: "di-cong-vi-thu",
    order: 3,
    title: "Dĩ Công Vi Thủ — Phản Thủ Đồng Thời",
    hanzi: "以攻為守 • 連消帶打",
    shortSummary: "Dùng tấn công làm phòng thủ — Vừa đỡ vừa đánh cùng một nhịp thở, triệt tiêu đòn địch tại gốc.",
    philosophy: "Vịnh Xuân Quyền chủ trương tích cực tấn công để tranh tiên đoạt thế. Khi địch đánh tới, ta phản đòn ngay lập tức để đòn công của ta tự động triệt tiêu đòn của địch. Tuyệt đối không đỡ xong rồi mới đánh trả vì như vậy sẽ bị chậm một nhịp sinh tử.",
    biomechanics: "Tay đánh thẳng trực diện có quãng đường ngắn hơn quả đấm móc vòng của địch. Tấn công vào gốc đòn (khớp vai hoặc liên sườn của địch) sẽ làm sụp đổ toàn bộ cấu trúc phát lực của tay tấn công đối phương.",
    originalQuote: "Ví dụ: Đối thủ đấm một quyền tay phải móc vòng vào ngực ta: thay vì dùng tay đỡ quả đấm đó, ta dùng đòn thẳng đánh vào vai phải họ. Ta sẽ đến trước vì tay ta đi quãng ngắn hơn. Phương pháp phòng ngự tốt nhất là tấn công.",
    pageRef: "Trang 162 - 163",
    tacticalApplication: "Động sau nhưng đến trước (Hậu phát tiên chí). Triệt hạ ý chí và vũ khí của đối phương ngay thời khắc họ vừa phát động tấn công.",
    keyConcepts: ["Hậu Phát Tiên Chí", "Tranh Tiên", "Triệt Tiêu Tại Gốc", "Phản Thủ Đồng Thời"]
  },
  {
    id: "luong-diem-chi-gian",
    order: 4,
    title: "Lưỡng Điểm Chi Gian — Trực Tuyến Tối Giản",
    hanzi: "兩點之間 • 直線最短",
    shortSummary: "Khoảng cách ngắn nhất giữa hai điểm là đường thẳng — Đơn giản tạo nên hiệu quả.",
    philosophy: "Mọi đường vòng vèo, múa lượn hoa mỹ trong võ thuật đều là sự lãng phí thời gian và năng lượng. Phật Gia Vịnh Xuân chắt lọc đòn đánh về dạng kỷ hà tối giản: Đường thẳng nối từ tâm của ta đến tâm của đối thủ.",
    biomechanics: "Chuyển động tuyến tính tối thiểu hóa sự tham gia của các nhóm cơ phụ, tập trung toàn bộ lực lượng vào chuỗi động học duỗi thẳng cẳng tay, giải phóng thốn kình ở cự ly chỉ vài centimet.",
    originalQuote: "Môn đồ PGVX ở ngay ranh giới giữa thắng và thua - giống như khi đánh bóng bàn, trái bóng luôn là sát lưới, sang thì được (thắng), nếu chỉ hơi thấp một chút thì bóng sẽ rúc lưới rơi về phía mình (thua). Đòi hỏi kỹ thuật chính xác, khổ luyện và bình tĩnh.",
    pageRef: "Trang 162 - 163",
    tacticalApplication: "Rút ngắn thời gian tiếp cận mục tiêu xuống dưới ngưỡng phản xạ quang học của con người (dưới 0.15 giây).",
    keyConcepts: ["Đường Thẳng Tối Giản", "Ranh Giới Sát Lưới", "Tối Ưu Năng Lượng", "Chuỗi Động Học"]
  },
  {
    id: "don-hep-ngan-khuon",
    order: 5,
    title: "Đánh Đòn Hẹp, Ngắn, Theo Khuôn",
    hanzi: "短打緊湊 • 依模循規",
    shortSummary: "Đòn hẹp kín kẽ, theo khuôn khổ chuẩn xác — Trường thắng đoản, bảo toàn trọng tâm.",
    philosophy: "Đòn thế không vung rộng ra ngoài phạm vi thân thể. Đi theo 'khuôn' chuẩn mực của môn phái để không tạo khoảng hở hông sườn. Khi xuất đòn ở thế biên thân, tay ta đi đường thẳng nên hóa ra dài hơn tay địch vung vòng — đây chính là đạo lý 'Trường thắng đoản'.",
    biomechanics: "Tiết kiệm lực tuyệt đối: Chỉ phóng lực (phát kình) vào đúng mili-giây tiếp xúc mục tiêu. Không bị lỡ trớn hay mất thăng bằng nếu đối phương né tránh vì cùi chỏ luôn nằm trong tầm kiểm soát của cơ trọng tâm.",
    originalQuote: "Đánh đòn hẹp, ngắn, theo khuôn đạt nhiều lợi ích: Tiết kiệm di chuyển, đòn đi đường ngắn nên nhanh; trường thắng đoản; tiết kiệm lực, chỉ xuất lực khi chạm mục tiêu; không bị lỡ trớn mất đà.",
    pageRef: "Trang 163 - 164",
    tacticalApplication: "Giữ chặt khung xương không bị biến dạng dưới áp lực va chạm, luôn sẵn sàng tung đòn tiếp nối mà không cần thời gian thu tay.",
    keyConcepts: ["Trường Thắng Đoản", "Đòn Theo Khuôn", "Không Lỡ Trớn", "Kín Cửa Mạn Sườn"]
  },
  {
    id: "luc-do-dia-khoi",
    order: 6,
    title: "Lực Do Địa Khởi — Quyền Tùy Tâm Phát",
    hanzi: "力由地起 • 拳隨心發",
    shortSummary: "Lực phát từ mặt đất qua huyệt Dũng Tuyền — Tay có mắt, đòn biến ảo theo phản xạ tủy.",
    philosophy: "Chân là cầu nối giữa đất với thân thể. Lực không tự sinh ra từ bắp tay mà bắt đầu từ đất, truyền qua lòng bàn chân (Dũng Tuyền), khớp gối Kiềm Dương, xoay chuyển qua eo hông, lưng truyền, chỏ phóng và bộc phát ở đầu ngón tay. Đòn đánh không định sẵn trong đầu mà tùy địch ra đòn thế nào ta phản ứng thế ấy (Tâm Ứng Thủ).",
    biomechanics: "Khái niệm 'Vững động' như con lật đật hoặc xe đạp lăn bánh: Trọng tâm di động liên tục nhưng cấu trúc không bao giờ ngã. Linh giác của cánh tay (Nhãn thủ - tay có mắt, Thính kình - nghe lực) truyền trực tiếp vào tủy sống, bỏ qua vỏ não để loại bỏ độ trễ phản xạ.",
    originalQuote: "Lực từ mặt đất qua chân, hông, vai rồi ra điểm đích... Môn sinh VXQ không chuẩn bị sẵn các thế đánh trước, tùy địch thủ ra đòn thế nào mà có phản đòn thích hợp. Nhờ tập luyện linh giác, tay có khả năng 'nhìn thấy' trước khi mắt kịp thấy.",
    pageRef: "Trang 163 - 165",
    tacticalApplication: "Bịt mắt song đấu vẫn thi triển võ công trôi chảy nhờ xúc giác nhạy bén tuyệt đối tại hai cẳng tay.",
    keyConcepts: ["Huyệt Dũng Tuyền", "Vững Động Con Lật Đật", "Nhãn Thủ", "Thính Kình", "Tâm Ứng Thủ"]
  },
  {
    id: "quyen-nhu-luu-thuy",
    order: 7,
    title: "Quyền Như Lưu Thủy — Ý Đáo Kình Đáo",
    hanzi: "拳如流水 • 意到勁到",
    shortSummary: "Quyền xuất liên hoàn như dòng nước tràn bờ — Đánh vào gốc xuất đòn để triệt tiêu đối thủ.",
    philosophy: "Quyền xuất liên tục như dòng nước chảy. Nước gặp vật cản thì lách qua, gặp khe hở thì thẩm thấu vào, gặp vực sâu thì đổ ập xuống với uy lực ngàn cân. Không bao giờ dừng lại ở một đòn đơn lẻ; hễ đã phát động là tuôn trào cho đến khi đối thủ hoàn toàn mất khả năng phản kích.",
    biomechanics: "Tận dụng triệt để đà co giãn cơ học của chuỗi liên hoàn đấm thẳng (Nhật Tự Quyền xoay trục). Cơ bắp thả lỏng hoàn toàn trong hành trình vung tay và chỉ siết cứng trong khoảnh khắc va chạm để đạt trạng thái 'Sóng kình'.",
    originalQuote: "Quyền như lưu thủy. Quyền xuất liên tục như nước chảy. Tự nó tìm ra những kẽ hở để chảy vào, liên tục đến khi tràn đầy... Để chấm dứt đòn liên tiếp của đối thủ tốt nhất là đánh vào gốc xuất đòn. Phải chăng cơ chế này đã được Lý Tiểu Long lấy làm cơ sở cho Triệt Quyền Đạo?",
    pageRef: "Trang 165",
    tacticalApplication: "Tấn công dồn dập khiến đối phương rơi vào tình trạng quá tải xử lý thông tin, hoàn toàn sụp đổ thế trận phòng ngự.",
    keyConcepts: ["Nước Chảy Tràn Bờ", "Triệt Đòn Tại Gốc", "Nhật Tự Liên Hoàn", "Sóng Kình Thẩm Thấu"]
  }
];

// ==============================================================================
// 2. TRỌN BỘ 42 LỜI KHUYÊN VÀNG CỦA SƯ PHỤ (TRANG 166 SÁCH GỐC)
// ==============================================================================
export const MASTER_COUNSELS_42: MasterCounsel[] = [
  {
    number: 1,
    text: "Sống như một công dân, một người tốt, tôn trọng luật pháp.",
    category: "ethics",
    categoryLabel: "Đạo Đức & Tư Tưởng",
    elaboration: "Võ đạo khởi nguồn từ lòng nhân ái. Học võ để làm người lương thiện, bảo vệ lẽ phải, không bao giờ dùng võ lực để lấn át người khác hay vi phạm chuẩn mực xã hội.",
    keywords: ["công dân", "người tốt", "luật pháp", "đạo đức"]
  },
  {
    number: 2,
    text: "Sống trong võ đường như trong gia đình. Tôn trọng Sư phụ, Sư huynh và Bạn đồng môn.",
    category: "ethics",
    categoryLabel: "Đạo Đức & Tư Tưởng",
    elaboration: "Võ đường là mái ấm thứ hai. Tinh thần Tôn Sư Trọng Đạo, kính trên nhường dưới, đùm bọc đồng môn là nền tảng cốt tử để giữ gìn dòng chảy truyền thừa chân chính.",
    keywords: ["gia đình", "sư phụ", "sư huynh", "đồng môn", "tôn sư"]
  },
  {
    number: 3,
    text: "Phương pháp tốt nhất trước một cuộc chiến là tránh cuộc chiến.",
    category: "ethics",
    categoryLabel: "Đạo Đức & Tư Tưởng",
    elaboration: "Cảnh giới cao trong binh pháp và võ học là 'Bất chiến tự nhiên thành'. Tránh được một cuộc ẩu đả là bảo toàn sinh mạng và phẩm giá cho cả hai bên.",
    keywords: ["tránh cuộc chiến", "bất chiến", "hòa hiếu", "trí tuệ"]
  },
  {
    number: 4,
    text: "Tập võ trước hết là cho sức khoẻ (tinh thần và cơ thể). Không đấu thử, không hiếu chiến.",
    category: "health",
    categoryLabel: "Y Võ & Dưỡng Sinh",
    elaboration: "Võ thuật trước hết là dưỡng sinh trường thọ. Đấu thử bừa bãi chỉ nuôi dưỡng thói kiêu căng ngạo mạn và dễ dẫn đến tổn thương kinh lạc không đáng có.",
    keywords: ["sức khỏe", "tinh thần", "không đấu thử", "không hiếu chiến"]
  },
  {
    number: 5,
    text: "Tập bình tĩnh trước mọi tình huống.",
    category: "ethics",
    categoryLabel: "Đạo Đức & Tư Tưởng",
    elaboration: "Tâm tĩnh như mặt nước mùa thu. Trong hiểm nguy, kẻ giữ được sự tĩnh lặng sẽ nhìn thấu kẽ hở của địch thủ, kẻ hoảng loạn sẽ tự thua trước khi giao thủ.",
    keywords: ["bình tĩnh", "tâm tĩnh", "định lực", "vô úy"]
  },
  {
    number: 6,
    text: "Nên tập cả khi nhắm mắt, cả trước gương.",
    category: "training",
    categoryLabel: "Luyện Công & Thân Pháp",
    elaboration: "Soi gương để sửa từng góc độ cùi chỏ và tấn pháp; nhắm mắt để đánh thức xúc giác cẳng tay và thính kình Đan Điền, thoát khỏi sự phụ thuộc vào thị giác.",
    keywords: ["nhắm mắt", "trước gương", "chỉnh khuôn", "động thiền"]
  },
  {
    number: 7,
    text: "Hai tay ví như hai con rồng cần phối hợp. Không để con rồng nào chết.",
    category: "combat",
    categoryLabel: "Chiến Lược & Thực Chiến",
    elaboration: "Độc thủ bất hành, song thủ thành công. Một tay hóa giải thì tay kia đồng thời công đòn; tay này bị trói buộc thì tay kia lập tức tiếp ứng giải phóng.",
    keywords: ["song long", "hai tay", "phối hợp", "song thủ"]
  },
  {
    number: 8,
    text: "Cổ tay phải vừa dẻo, vừa khéo, vừa nhanh, vừa mạnh.",
    category: "training",
    categoryLabel: "Luyện Công & Thân Pháp",
    elaboration: "Cổ tay là khớp then chốt cuối cùng truyền kình. Cổ tay linh hoạt biến ảo thành Than Thủ, Bàng Thủ, Phục Thủ; khéo léo gạt chệch lực và phát thốn kình như roi quất.",
    keywords: ["cổ tay", "dẻo", "khéo", "nhanh", "mạnh"]
  },
  {
    number: 9,
    text: "Thời điểm (Timing) và khoảng cách (Distance) là 2 điều cực quan trọng.",
    category: "combat",
    categoryLabel: "Chiến Lược & Thực Chiến",
    elaboration: "Đòn thế dù hiểm đến đâu nhưng sai khoảng cách là đánh vào không khí; ra đòn sai thời điểm là tự nộp mình cho đối thủ. Cự ly là sự sống còn.",
    keywords: ["thời điểm", "khoảng cách", "timing", "cự ly"]
  },
  {
    number: 10,
    text: "Khi bị ngã không phải là thua mà cần tiếp tục tấn công ngay khi đang nằm dưới đất.",
    category: "combat",
    categoryLabel: "Chiến Lược & Thực Chiến",
    elaboration: "Địa chiến Phật Gia Vịnh Xuân dùng chân khép kiềm dương, chân dưới triệt cước đạp khớp gối, hai tay bảo vệ đầu và chớp cơ hội phản kích quật ngã lại địch.",
    keywords: ["ngã", "địa chiến", "triệt cước", "bất khuất"]
  },
  {
    number: 11,
    text: "Tay phải như lò xo, cật tre: nó bật cực nhanh khi thoát lực ép.",
    category: "training",
    categoryLabel: "Luyện Công & Thân Pháp",
    elaboration: "Tính đàn hồi sinh học: Khi đối phương đè ép cẳng tay, ta mềm mại uốn theo để tích lũy thế năng; đối phương vừa hụt lực hay rời tay là kình tự giải phóng.",
    keywords: ["lò xo", "cật tre", "đàn hồi", "thoát ép"]
  },
  {
    number: 12,
    text: "Hai đối thủ có đòn tay bằng nhau thì người thắng là người có đòn chân tốt hơn.",
    category: "combat",
    categoryLabel: "Chiến Lược & Thực Chiến",
    elaboration: "Thủ vi môn hộ, cước vi sinh tử. Chân không chỉ để di chuyển mà còn đạp gối, khóa khớp háng và giẫm chân triệt hạ thế đứng của địch.",
    keywords: ["đòn chân", "mã bộ", "triệt hạ", "cước pháp"]
  },
  {
    number: 13,
    text: "Không phải số năm tập mà số giờ tập luyện đúng phương pháp mới đáng kể.",
    category: "training",
    categoryLabel: "Luyện Công & Thân Pháp",
    elaboration: "Tập sai 10 năm chỉ tích tụ thói quen xấu và bệnh tật. Tập đúng phương pháp dưới sự chỉ dẫn của minh sư dù chỉ vài trăm giờ cũng tạo nên sự biến đổi kỳ diệu.",
    keywords: ["đúng phương pháp", "thời gian thực", "chất lượng", "công phu"]
  },
  {
    number: 14,
    text: "Không tập sau khi uống rượu, ăn no.",
    category: "health",
    categoryLabel: "Y Võ & Dưỡng Sinh",
    elaboration: "Ăn no làm máu dồn về dạ dày, tập luyện dễ sa nội tạng; rượu làm giãn mạch và mất kiểm soát thần kinh, cực kỳ nguy hại cho tim mạch và khí huyết.",
    keywords: ["uống rượu", "ăn no", "dưỡng sinh", "bảo vệ tạng phủ"]
  },
  {
    number: 15,
    text: "Môn võ Phật Gia Vịnh Xuân không hoành tráng khi biểu diễn.",
    category: "ethics",
    categoryLabel: "Đạo Đức & Tư Tưởng",
    elaboration: "Đòn thế giản dị, thu gọn trong tầm cơ thể, không bay nhảy nhào lộn. Vẻ đẹp của Vịnh Xuân là vẻ đẹp của hiệu quả sinh tồn và sự tinh tế bên trong.",
    keywords: ["không hoành tráng", "giản dị", "thực chất", "nội liễm"]
  },
  {
    number: 16,
    text: "Nếu chỉ dựa vào sức mạnh ta sẽ gặp người mạnh hơn.",
    category: "combat",
    categoryLabel: "Chiến Lược & Thực Chiến",
    elaboration: "Sức mạnh cơ bắp hữu hạn theo tuổi tác và thể tạng. Nhu thuận, mượn lực đả lực và biến hóa linh giác mới là kho tàng vô tận của võ học.",
    keywords: ["sức mạnh", "dĩ nhu khắc cương", "tá lực", "trí tuệ"]
  },
  {
    number: 17,
    text: "Khuỷu tay luôn ở trung lộ (chéo áo).",
    category: "training",
    categoryLabel: "Luyện Công & Thân Pháp",
    elaboration: "Giữ chỏ (thủ chỏ) là cốt tủy Vịnh Xuân. Chỏ chìm che mạn sườn, cách ngực một nắm tay, luôn hướng vào trung tuyến đối phương.",
    keywords: ["khuỷu tay", "chéo áo", "thủ chỏ", "bảo vệ sườn"]
  },
  {
    number: 18,
    text: "Chân vững như cây có gốc. Chân vững thì đòn mới mạnh.",
    category: "training",
    categoryLabel: "Luyện Công & Thân Pháp",
    elaboration: "Lực do địa khởi. Không có rễ bám sâu vào lòng đất thì đòn tay chỉ là sức quơ quào vô lực, dễ bị đối phương xô ngã trong tích tắc.",
    keywords: ["cây có gốc", "chân vững", "dũng tuyền", "hạ bàn"]
  },
  {
    number: 19,
    text: "Khi luyện các thế võ cần chú ý: Phối hợp với thở — Quay người — Thả lỏng cơ bắp.",
    category: "training",
    categoryLabel: "Luyện Công & Thân Pháp",
    elaboration: "Tam bảo trong mỗi động tác: Thở bụng sâu kích hoạt đan điền; xoay biên thân đổi góc đón lực; thả lỏng tuyệt đối để khí huyết và kình lực lưu chuyển thông suốt.",
    keywords: ["thở bụng", "quay người", "thả lỏng", "tam bảo"]
  },
  {
    number: 20,
    text: "Đòn cần đơn giản, đi đường ngắn nhất. Đòn hoành tráng chỉ có tác dụng biểu diễn.",
    category: "combat",
    categoryLabel: "Chiến Lược & Thực Chiến",
    elaboration: "Đơn giản là kết tinh của sự tinh luyện. Đòn thẳng trực diện hóa giải và phản công nhanh nhất, an toàn và tiết kiệm sức lực nhất.",
    keywords: ["đơn giản", "đường ngắn nhất", "thực chiến", "không màu mè"]
  },
  {
    number: 21,
    text: "Lai lưu, khứ tống, thoát thủ trực xông.",
    category: "combat",
    categoryLabel: "Chiến Lược & Thực Chiến",
    elaboration: "Đại khẩu quyết nhập môn: Lực đến thì mượn đà nêm dính; lực đi thì theo sát tiễn đưa; buông tay tiếp xúc là quyền phóng thẳng không chậm trễ.",
    keywords: ["lai lưu", "khứ tống", "thoát thủ", "trực xông"]
  },
  {
    number: 22,
    text: "Tập tay dính 2 người (Niêm Thủ) là cầu nối giữa các miếng võ rời, bài võ với chiến đấu thực tế.",
    category: "training",
    categoryLabel: "Luyện Công & Thân Pháp",
    elaboration: "Chi Sao (Niêm Thủ) biến kỹ thuật chết trên bài quyền thành kỹ năng sống động trên cơ thể người thật, rèn luyện phản xạ đối kháng đa chiều.",
    keywords: ["tay dính", "niêm thủ", "chi sao", "cầu nối"]
  },
  {
    number: 23,
    text: "Nên bắt đầu tập chậm rồi nhanh dần (như tập đánh máy vi tính, tập đàn).",
    category: "training",
    categoryLabel: "Luyện Công & Thân Pháp",
    elaboration: "Tập chậm để não bộ và cơ bắp ghi nhớ chính xác từng milimet tọa độ góc khớp; khi đường truyền thần kinh đã in hằn thì tốc độ tự nhiên phát sinh.",
    keywords: ["tập chậm", "chính xác", "in vết thần kinh", "kiên trì"]
  },
  {
    number: 24,
    text: "Cần tập rất kỹ thân pháp, mã bộ (chân) như quay người, hoành thoái.",
    category: "training",
    categoryLabel: "Luyện Công & Thân Pháp",
    elaboration: "Thân pháp và bộ pháp là đôi cánh của thủ pháp. Biết xoay người né góc và hoành thoái sang bên thì đòn ngàn cân của địch cũng trượt vào hư không.",
    keywords: ["thân pháp", "mã bộ", "hoành thoái", "biên thân"]
  },
  {
    number: 25,
    text: "Không chỉ đánh một đòn mà cần biết ra đòn liên tục.",
    category: "combat",
    categoryLabel: "Chiến Lược & Thực Chiến",
    elaboration: "Một đòn đơn độc dễ bị đối phương gạt bỏ hoặc chịu đòn phản kích. Chuỗi đòn liên hoàn như thác đổ mới bẻ gãy hoàn toàn sức kháng cự.",
    keywords: ["liên hoàn", "liên tục", "dồn dập", "sóng quyền"]
  },
  {
    number: 26,
    text: "Không đá cao trên thắt lưng.",
    category: "combat",
    categoryLabel: "Chiến Lược & Thực Chiến",
    elaboration: "Đá cao dễ mất trọng tâm, hở hạ bộ và bị đối phương bắt chân quật ngã. Cước Vịnh Xuân chỉ đá từ gối trở xuống: kín đáo, bất ngờ và triệt hạ gốc đứng.",
    keywords: ["không đá cao", "hạ bàn", "triệt cước", "an toàn trọng tâm"]
  },
  {
    number: 27,
    text: "Hãy bước thẳng vào giữa 2 chân đối thủ (nội môn) và tấn công (nhập nội).",
    category: "combat",
    categoryLabel: "Chiến Lược & Thực Chiến",
    elaboration: "Chiếm lĩnh nội môn: Chèn chân vào giữa hai chân địch để khống chế trục trọng tâm, khóa đường xoay xở và áp sát đánh cùi chỏ, đoản quyền.",
    keywords: ["nội môn", "nhập nội", "chèn chân", "áp sát"]
  },
  {
    number: 28,
    text: "Không xuất đòn bừa bãi.",
    category: "combat",
    categoryLabel: "Chiến Lược & Thực Chiến",
    elaboration: "Mỗi cú đấm xuất ra mà không có mục đích hay không đúng thời cơ đều tạo kẽ hở chí mạng cho bản thân. Ra đòn phải có căn cơ và kiểm soát.",
    keywords: ["không bừa bãi", "kỷ luật", "chính xác", "tiết chế"]
  },
  {
    number: 29,
    text: "Khi đối thủ lùi, không đứng yên mà cần lướt theo sát.",
    category: "combat",
    categoryLabel: "Chiến Lược & Thực Chiến",
    elaboration: "Địch lùi là lúc thế trận của họ đang lung lay. Dính sát theo bước lùi không cho địch có cơ hội tái lập thế thủ hay lấy lại khoảng cách phát lực.",
    keywords: ["lướt theo", "bám sát", "tiếp ứng", "áp đảo"]
  },
  {
    number: 30,
    text: "Chỉ khi chạm vào đối thủ mới xuất lực.",
    category: "combat",
    categoryLabel: "Chiến Lược & Thực Chiến",
    elaboration: "Nguyên lý Thốn Kình: Trên đường đi cánh tay thả lỏng hoàn toàn để đạt vận tốc tối đa; chỉ khi da chạm thịt đối thủ mới gồng phát lực xuyên thấu.",
    keywords: ["thốn kình", "chạm mới phát lực", "thả lỏng", "xuyên thấu"]
  },
  {
    number: 31,
    text: "Phật Gia Vịnh Xuân là võ của nữ nên không đối lực.",
    category: "combat",
    categoryLabel: "Chiến Lược & Thực Chiến",
    elaboration: "Khởi nguồn từ Ni sư Ngũ Mai và nàng Nghiêm Vịnh Xuân, môn phái được thiết kế để người thể trạng nhỏ bé khắc chế kẻ to lớn hung hãn bằng trí tuệ và sự mềm dẻo.",
    keywords: ["võ của nữ", "không đối lực", "ngũ mai", "dĩ nhu"]
  },
  {
    number: 32,
    text: "Không ngả đầu ra trước.",
    category: "training",
    categoryLabel: "Luyện Công & Thân Pháp",
    elaboration: "Đầu ngả ra trước làm mất trục thẳng đứng của cột sống, căng cơ cổ và dâng cằm/mặt làm bia đỡ đạn cho đòn đấm của đối phương.",
    keywords: ["không ngả đầu", "hư linh đỉnh kình", "trục cột sống", "giữ cằm"]
  },
  {
    number: 33,
    text: "Khi bị đánh trúng, thậm chí bị thương chảy máu, không được để mất ý chí mà hãy coi thường vết thương, tiếp tục tấn công ngay.",
    category: "combat",
    categoryLabel: "Chiến Lược & Thực Chiến",
    elaboration: "Bản lĩnh chiến binh: Trong thực chiến sinh tử, đớn đau là cảm giác nhất thời. Ngừng lại là nguy hiểm; dũng cảm tiến lên dứt điểm mới bảo toàn mạng sống.",
    keywords: ["ý chí kiên cường", "không nản lòng", "bản lĩnh", "tiếp tục tấn công"]
  },
  {
    number: 34,
    text: "Trong 3 năm đầu tập PGVX không được tập thể dục nặng như tập thể hình.",
    category: "health",
    categoryLabel: "Y Võ & Dưỡng Sinh",
    elaboration: "Tập tạ nặng làm cơ bắp xơ cứng, co thắt cục bộ và cản trở đường dẫn truyền khí huyết, làm mất đi độ nhạy cảm xúc giác của niêm thủ thính kình.",
    keywords: ["không tập tạ nặng", "dẻo dai", "thả lỏng", "kinh lạc"]
  },
  {
    number: 35,
    text: "Khi địch có bạch khí (dao, kiếm...) ta có thể chiến đấu tay không nhưng rất nên tìm một vũ khí tạm thời bằng các vật ở xung quanh.",
    category: "combat",
    categoryLabel: "Chiến Lược & Thực Chiến",
    elaboration: "Trí tuệ thực tế: Một cây gậy, chiếc ô, cặp sách hay chiếc ghế xung quanh đều có thể giúp ta kéo giãn cự ly an toàn chống lại vũ khí sắc nhọn.",
    keywords: ["vũ khí tạm thời", "tận dụng đồ vật", "bạch khí", "thực tế"]
  },
  {
    number: 36,
    text: "Khi đã ra đòn, dù trúng hay trượt, không thu đòn về mà đánh tiếp đòn khác.",
    category: "combat",
    categoryLabel: "Chiến Lược & Thực Chiến",
    elaboration: "Không thu tay vô ích: Tay trượt đích lập tức biến đổi thành chưởng, xỉa ngón tay hoặc bàng thủ che chắn để phóng tiếp tay còn lại.",
    keywords: ["không thu đòn", "biến chiêu", "liên hoàn", "chảy tràn"]
  },
  {
    number: 37,
    text: "Mỗi đòn nên là một đòn phản công hay vừa đỡ vừa đánh.",
    category: "combat",
    categoryLabel: "Chiến Lược & Thực Chiến",
    elaboration: "Hiệu suất tối ưu: Tuyệt đối không có động tác thừa. Đỡ chỉ là mặt phụ của việc đánh; đòn xuất ra phải đe dọa sinh tử của địch thủ.",
    keywords: ["vừa đỡ vừa đánh", "phản công", "đồng thời", "hiệu suất"]
  },
  {
    number: 38,
    text: "Không nên tham học nhiều miếng võ, bài võ. Mười miếng thuần thục hơn 100 miếng chưa tập kỹ.",
    category: "training",
    categoryLabel: "Luyện Công & Thân Pháp",
    elaboration: "Tinh thâm hơn bác tạp. Lý Tiểu Long từng nói: 'Tôi không sợ người luyện 10.000 cú đá khác nhau, tôi chỉ sợ người luyện 1 cú đá 10.000 lần'.",
    keywords: ["không tham nhiều", "thuần thục", "tinh thâm", "chuyên nhất"]
  },
  {
    number: 39,
    text: "Luyện tập linh giác trong thời gian dài thì mới đạt được linh giác cần thiết.",
    category: "training",
    categoryLabel: "Luyện Công & Thân Pháp",
    elaboration: "Linh giác là giác quan thứ sáu hình thành qua hàng vạn giờ cọ xát cẳng tay. Không thể đốt cháy giai đoạn; công phu là sự tích lũy của năm tháng.",
    keywords: ["linh giác", "thời gian dài", "công phu", "kiên định"]
  },
  {
    number: 40,
    text: "Muốn đấm tốt phải đấm nhiều. Muốn đá tốt phải đá nhiều.",
    category: "training",
    categoryLabel: "Luyện Công & Thân Pháp",
    elaboration: "Lý thuyết chỉ là bản đồ chỉ đường, thực hành rèn luyện mới đưa ta tới đích. Phải đổ mồ hôi trên bao cát, mộc nhân và sàn tập mỗi ngày.",
    keywords: ["thực hành", "đấm nhiều", "đá nhiều", "đổ mồ hôi"]
  },
  {
    number: 41,
    text: "Tập linh giác đối luyện phải thân thiện. Không chú ý đánh được bao nhiêu đòn trúng. Đánh trúng bạn không phải là thắng. Bị đánh trúng không phải là thua.",
    category: "ethics",
    categoryLabel: "Đạo Đức & Tư Tưởng",
    elaboration: "Tập luyện là giúp nhau tiến bộ chứ không phải sát phạt. Tâm hiếu thắng sẽ làm cứng cơ bắp và che mờ cảm giác xúc giác thính kình.",
    keywords: ["thân thiện", "không hiếu thắng", "giúp nhau tiến bộ", "tâm vô ngã"]
  },
  {
    number: 42,
    text: "Bỏ nghiện thuốc lá, rượu bia.",
    category: "health",
    categoryLabel: "Y Võ & Dưỡng Sinh",
    elaboration: "Khói thuốc tàn phá phế nang làm hụt hơi khi thở bụng; cồn hủy hoại gan và làm suy giảm tốc độ dẫn truyền xung thần kinh phản xạ võ học.",
    keywords: ["bỏ thuốc lá", "bỏ rượu", "thanh lọc cơ thể", "trường thọ"]
  }
];

// ==============================================================================
// 3. TINH HOA VỊNH XUÂN THẾ GIỚI & ĐỐI CHIẾU PHẬT GIA VỊNH XUÂN
// ==============================================================================
export const GLOBAL_WING_CHUN_MASTERS: GlobalMasterBridge[] = [
  {
    id: "ip-man",
    masterName: "Đại Sư Diệp Vấn (Ip Man)",
    branch: "Diệp Vấn Vịnh Xuân (Hồng Kông / Toàn Cầu)",
    period: "1893 – 1972",
    coreDoctrine: "Lý Luận Trung Tâm Tuyến & Đề Cao Võ Đức",
    famousQuote: "Võ thuật không phải để bắt nạt người khác, mà là để tu dưỡng nhân cách và bảo vệ người yếu thế.",
    pgvxCorrelation: "Tương đồng 100% với Trục Tý Ngọ Tuyến và Tấn Kiềm Dương của Phật Gia Vịnh Xuân. Diệp Vấn và Nguyễn Tế Công vốn là đồng môn tại Phật Sơn (Trung Quốc), cùng chia sẻ cội nguồn quyền thuật tinh túy.",
    historicalContext: "Tông sư đưa Vịnh Xuân Quyền từ một môn phái bí truyền ở Phật Sơn ra toàn cầu qua các đệ tử xuất chúng tại Hồng Kông.",
    sharedPrinciples: [
      "Thủ trung dụng trung (Giữ trung tâm, đánh trung tâm)",
      "Độc thủ bất hành, song thủ thành công (Hai tay phối hợp)",
      "Võ đức vi tiên (Lấy nhân nghĩa phục người)"
    ]
  },
  {
    id: "leung-ting",
    masterName: "Đại Sư Lương Đỉnh (Leung Ting)",
    branch: "WingTsun Quốc Tế (IWTA)",
    period: "1947 – nay",
    coreDoctrine: "4 Nguyên Lý Lực Kinh Điển (4 Principles of Force)",
    famousQuote: "Hãy biến cơ thể thành một chiếc nêm thép: Địch tiến thì ta nêm dẹp, địch rút thì ta theo sát lấp đầy.",
    pgvxCorrelation: "Trùng khớp tuyệt đối với Khẩu quyết 'Lai lưu khứ tống, thoát thủ trực xông' và nguyên lý 'Dĩ công vi thủ' trong giáo trình của GS.TS Nguyễn Mạnh Nhâm.",
    historicalContext: "Người hệ thống hóa Vịnh Xuân thành giáo trình sư phạm phương Tây khoa học, đưa môn võ phổ biến rộng rãi khắp Châu Âu và Châu Mỹ.",
    sharedPrinciples: [
      "1. Tiến lên khi đường thông suốt",
      "2. Dính sát khi có tiếp xúc",
      "3. Nhường bước trước lực lớn hơn",
      "4. Theo sát khi đối phương rút lui"
    ]
  },
  {
    id: "wong-shun-leung",
    masterName: "Võ Sư Hoàng Thuần Lương (Wong Shun Leung)",
    branch: "Vịnh Xuân Thực Chiến (Vua Tỉ Thí)",
    period: "1935 – 1997",
    coreDoctrine: "Vịnh Xuân Khoa Học & Cận Chiến Thực Dụng",
    famousQuote: "Mắt là kẻ lừa dối; chỉ có cẳng tay xúc giác mới không bao giờ nói dối.",
    pgvxCorrelation: "Khớp sâu sắc với chuyên đề Linh Giác (Chương II sách gốc): Cơ chế phản xạ tủy sống xúc giác nhanh hơn thị giác vỏ não gấp nhiều lần, loại bỏ hoàn toàn độ trễ thần kinh.",
    historicalContext: "Người nổi danh với hàng trăm trận tỉ thí không găng thắng lợi tại Hồng Kông, là người trực tiếp hướng dẫn thực chiến cho Lý Tiểu Long thuở niên thiếu.",
    sharedPrinciples: [
      "Đánh góc chéo 45° triệt tiêu vũ khí của đối thủ",
      "Vịnh Xuân là công cụ khoa học chính xác, không phải điệu múa",
      "Tay có mắt (Nhãn thủ) qua thính kình cẳng tay"
    ]
  },
  {
    id: "bruce-lee",
    masterName: "Lý Tiểu Long (Bruce Lee)",
    branch: "Triệt Quyền Đạo (Jeet Kune Do / Cội nguồn Vịnh Xuân)",
    period: "1940 – 1973",
    coreDoctrine: "Be Water, My Friend — Quyền Như Lưu Thủy & Triệt Đòn Tại Gốc",
    famousQuote: "Đừng đóng khung trong một hình tướng nào. Hãy vô hình vô tướng như nước. Nước đổ vào cốc thì thành cốc, đổ vào ấm thì thành ấm.",
    pgvxCorrelation: "Được GS.TS Nguyễn Mạnh Nhâm trích dẫn trực tiếp tại trang 164 và 165 giáo trình gốc để giải thích cho Khẩu quyết số 6 (Tâm Ứng Thủ) và Khẩu quyết số 7 (Quyền như lưu thủy, triệt đòn tại gốc).",
    historicalContext: "Học trò xuất sắc của Diệp Vấn và Hoàng Thuần Lương, người đã đem triết lý võ đạo phương Đông chấn hưng toàn cầu.",
    sharedPrinciples: [
      "Tâm Ứng Thủ: Đòn đánh ra tùy thuộc đối phương ra đòn gì",
      "Đơn giản tạo nên hiệu quả",
      "Đánh vào gốc xuất đòn để triệt tiêu chuỗi đòn của địch"
    ]
  },
  {
    id: "nam-thieu-lam-zen",
    masterName: "Thiền Tông Nam Thiếu Lâm",
    branch: "Cội Nguồn Tâm Pháp Phật Gia Vịnh Xuân",
    period: "Khởi nguồn thế kỷ 17",
    coreDoctrine: "Tâm Vô Ngã (Mushin) & Động Thiền Chánh Niệm",
    famousQuote: "Quyền bản vô quyền, ý bản vô ý. Vô quyền vô ý thị chân quyền.",
    pgvxCorrelation: "Đây chính là căn nguyên của danh xưng 'Phật Gia': Coi võ học là phương tiện tu tâm dưỡng tính, hướng tới sự an nhiên tự tại, từ bi hộ sinh và bảo vệ sự sống.",
    historicalContext: "Ni sư Ngũ Mai tu tập tại Nam Thiếu Lâm đã quan sát trận chiến giữa Xà và Hạc để chắt lọc nên công phu lấy nhu thắng cương, lập nên phái Vịnh Xuân.",
    sharedPrinciples: [
      "Tâm không tạp niệm giữa hiểm nguy",
      "Mỗi đường quyền là một hơi thở chánh niệm",
      "Từ bi hộ sinh — Võ học vị nhân sinh"
    ]
  }
];

// ==============================================================================
// 4. KHO 60+ CÂU CHÂM NGÔN / QUOTE BẤT HỦ
// ==============================================================================
export const MARTIAL_WISDOM_QUOTES: MartialWisdomQuote[] = [
  {
    id: "q01",
    quote: "Phương pháp tốt nhất trước một cuộc chiến là tránh cuộc chiến.",
    author: "GS.TS Nguyễn Mạnh Nhâm",
    roleOrSource: "Giáo trình Phật Gia Vịnh Xuân • Lời khuyên số 3",
    category: "mindset",
    context: "Ý nghĩa cao nhất của võ đạo là bảo tồn sinh mạng và sự hòa hiếu giữa con người."
  },
  {
    id: "q02",
    quote: "Lai lưu khứ tống, thoát thủ trực xông.",
    hanNom: "來留去送 甩手直衝",
    author: "Khẩu quyết truyền thừa",
    roleOrSource: "Chương III: Khẩu Quyết • Trang 161",
    category: "strategy",
    context: "Địch đến tiếp nhận dính sát, địch rút theo tiễn, buông rời lập tức phóng quyền."
  },
  {
    id: "q03",
    quote: "Đả quyền bất luyện công, đáo lão nhất trường không. Lực bất đả quyền, quyền bất đả công.",
    hanNom: "打拳不練功 到老一場空 • 力不打拳 拳不打功",
    author: "Ngạn ngữ võ học cổ kim",
    roleOrSource: "Chương IV: Nội Công • Trang 167",
    category: "philosophy",
    context: "Luyện chiêu thức mà không rèn nội lực và khí công thì về già chỉ là con số không."
  },
  {
    id: "q04",
    quote: "Nếu chỉ dựa vào sức mạnh cơ bắp, ta ắt sẽ gặp người mạnh hơn ta.",
    author: "GS.TS Nguyễn Mạnh Nhâm",
    roleOrSource: "Giáo trình Phật Gia Vịnh Xuân • Lời khuyên số 16",
    category: "strategy",
    context: "Nhu thuận và trí tuệ là vũ khí duy nhất trường tồn trước sự biến đổi thể chất."
  },
  {
    id: "q05",
    quote: "Hai tay ví như hai con rồng cần phối hợp. Không bao giờ để con rồng nào chết.",
    author: "Sư Phụ truyền dạy",
    roleOrSource: "Giáo trình Phật Gia Vịnh Xuân • Lời khuyên số 7",
    category: "strategy",
    context: "Song thủ tương liên, công thủ đồng thời, một tay bảo vệ thì tay kia đã xuyên thấu."
  },
  {
    id: "q06",
    quote: "Chân như rễ cây cắm sâu vào lòng đất. Chân không vững thì đòn đánh chỉ là sức hời hợt bên ngoài.",
    author: "Cố Đại Võ Sư Trần Thúc Tiển",
    roleOrSource: "Tâm pháp Kiềm Dương Tấn • Phật Gia Vịnh Xuân",
    category: "philosophy",
    context: "Lực do địa khởi. Không có gốc rễ vững chãi thì mọi chiêu thức chỉ là bọt nước.",
    authorImage: "/assets/images/historical/tran_thuc_tien.png",
    imageCaption: "Cố Đại Võ Sư Trần Thúc Tiển (1912 - 1980)"
  },
  {
    id: "q07",
    quote: "Quyền như lưu thủy — Tự nó tìm ra những kẽ hở để tràn vào cho đến khi lấp đầy.",
    author: "GS.TS Nguyễn Mạnh Nhâm",
    roleOrSource: "Chương III: Khẩu Quyết • Trang 165",
    category: "strategy",
    context: "Đòn đánh liên hoàn không đứt đoạn như dòng nước chảy tràn ngập trận địa."
  },
  {
    id: "q08",
    quote: "Mắt là kẻ lừa dối; chỉ có cẳng tay xúc giác mới không bao giờ nói dối.",
    author: "Võ Sư Hoàng Thuần Lương",
    roleOrSource: "Tinh hoa Vịnh Xuân thế giới • Khảo cứu đối chiếu",
    category: "mindset",
    context: "Phản xạ thị giác qua não bộ luôn có độ trễ; xúc giác niêm thủ truyền thẳng vào tủy sống."
  },
  {
    id: "q09",
    quote: "Tôi không biết sẽ ra đòn gì trước khi chiến đấu. Đòn tôi đánh tùy thuộc vào phía địch thủ ra đòn thế nào.",
    author: "Lý Tiểu Long (Bruce Lee)",
    roleOrSource: "Trích dẫn trong sách gốc • Trang 164",
    category: "mindset",
    context: "Tâm Ứng Thủ: Vô chiêu thắng hữu chiêu, không đóng khung trong khuôn mẫu cứng nhắc."
  },
  {
    id: "q10",
    quote: "Tập linh giác đối luyện phải thân thiện. Đánh trúng bạn không phải là thắng; bị bạn đánh trúng không phải là thua.",
    author: "GS.TS Nguyễn Mạnh Nhâm",
    roleOrSource: "Giáo trình Phật Gia Vịnh Xuân • Lời khuyên số 41",
    category: "mindset",
    context: "Đồng môn giúp nhau tôi luyện sự nhạy bén, buông bỏ bản ngã và thói háo thắng."
  },
  {
    id: "q11",
    quote: "Cổ tay phải vừa dẻo, vừa khéo, vừa nhanh, vừa mạnh.",
    author: "GS.TS Nguyễn Mạnh Nhâm",
    roleOrSource: "Giáo trình Phật Gia Vịnh Xuân • Lời khuyên số 8",
    category: "strategy",
    context: "Cổ tay là khớp then chốt cuối cùng điều phối kình lực thấu triệt."
  },
  {
    id: "q12",
    quote: "Khoảng cách ngắn nhất giữa hai điểm là đường thẳng. Lưỡng điểm chi gian, trực tuyến tối giản.",
    hanNom: "兩點之間 直線最短",
    author: "Khẩu quyết hình học võ học",
    roleOrSource: "Chương III: Khẩu Quyết • Trang 162",
    category: "strategy",
    context: "Tối ưu hóa năng lượng và thời gian di chuyển để chiếm thế tiên cơ."
  },
  {
    id: "q13",
    quote: "Mười miếng thuần thục hơn một trăm miếng tập dở dang.",
    author: "GS.TS Nguyễn Mạnh Nhâm",
    roleOrSource: "Giáo trình Phật Gia Vịnh Xuân • Lời khuyên số 38",
    category: "philosophy",
    context: "Tinh thâm hơn bác tạp. Rèn một đòn vạn lần tạo nên kỹ năng thuần thục."
  },
  {
    id: "q14",
    quote: "Thời điểm (Timing) và khoảng cách (Distance) là hai điều sinh tử.",
    author: "GS.TS Nguyễn Mạnh Nhâm",
    roleOrSource: "Giáo trình Phật Gia Vịnh Xuân • Lời khuyên số 9",
    category: "strategy",
    context: "Căn bản của cận chiến: Đúng khoảng cách mới phát lực, đúng thời điểm mới điểm trúng."
  },
  {
    id: "q15",
    quote: "Chỉ khi chạm vào đối thủ mới xuất lực. Trên đường đi cơ bắp phải buông lỏng hoàn toàn.",
    author: "Khẩu quyết Thốn Kình",
    roleOrSource: "Giáo trình Phật Gia Vịnh Xuân • Lời khuyên số 30",
    category: "strategy",
    context: "Tiết kiệm lực tuyệt đối để đòn đánh đạt gia tốc cực đại trong tích tắc."
  },
  {
    id: "q16",
    quote: "Khi bị ngã không phải là thua, tiếp tục tấn công ngay khi đang nằm dưới đất.",
    author: "GS.TS Nguyễn Mạnh Nhâm",
    roleOrSource: "Giáo trình Phật Gia Vịnh Xuân • Lời khuyên số 10",
    category: "mindset",
    context: "Địa chiến bất khuất: Chân triệt cước, tay hộ thủ, biến nghịch cảnh thành thời cơ."
  },
  {
    id: "q17",
    quote: "Phật Gia Vịnh Xuân là võ của nữ nên tuyệt đối không đối lực.",
    author: "GS.TS Nguyễn Mạnh Nhâm",
    roleOrSource: "Giáo trình Phật Gia Vịnh Xuân • Lời khuyên số 31",
    category: "philosophy",
    context: "Bản chất lấy nhu thắng cương, mượn sức địch đánh địch của Ni sư Ngũ Mai."
  },
  {
    id: "q18",
    quote: "Khuỷu tay luôn ở trung lộ (chéo áo) — Giữ cùi chỏ là giữ sinh mệnh.",
    author: "Khẩu quyết thủ chỏ",
    roleOrSource: "Giáo trình Phật Gia Vịnh Xuân • Lời khuyên số 17",
    category: "strategy",
    context: "Chỏ khép chặt bảo vệ mạng sườn, làm điểm tựa vững chãi phóng kình."
  },
  {
    id: "q19",
    quote: "Tam bảo khi luyện võ: Phối hợp thở bụng — Xoay người biên thân — Thả lỏng cơ bắp.",
    author: "GS.TS Nguyễn Mạnh Nhâm",
    roleOrSource: "Giáo trình Phật Gia Vịnh Xuân • Lời khuyên số 19",
    category: "health",
    context: "Sự kết hợp hoàn hảo giữa y học dưỡng sinh và cơ chế vận động cận chiến."
  },
  {
    id: "q20",
    quote: "Trong cái động tột cùng có cái tĩnh sâu xa; trong cái mềm mại như nước ẩn chứa kình lực xuyên thấu như sấm sét.",
    author: "Võ sư Lê Đắc Kiên",
    roleOrSource: "Võ Đường Huỳnh Thúc Kháng • Đúc kết tâm pháp",
    category: "philosophy",
    context: "Thiền võ nhất như: Giữ tâm tĩnh lặng giữa muôn trùng bão táp đối kháng.",
    authorImage: "/assets/images/instructors/vo_su_le_dac_kien_chao.jpg",
    imageCaption: "Võ sư Lê Đắc Kiên • Thế chào Bão Quyền Lễ"
  },
  {
    id: "q21",
    quote: "Đến thì mở lòng đón nhận, đi thì nhẹ nhàng đưa tiễn; buông lỏng toàn thân để mượn lực đả lực. Cốt lõi của Vịnh Xuân không phải là thắng người bằng sức mạnh cơ bắp, mà là chiến thắng chính sự nóng vội và bản ngã của bản thân.",
    author: "Võ sư Lê Đắc Kiên",
    roleOrSource: "Tâm đắc truyền thừa • Võ đường Huỳnh Thúc Kháng",
    category: "philosophy",
    context: "Lai lưu khứ tống, suất thủ trực xung: Hóa giải xung đột bằng tâm thế mềm mại, nhu hòa mà kiên định.",
    authorImage: "/assets/images/instructors/vo_su_le_dac_kien.jpg",
    imageCaption: "Võ sư Lê Đắc Kiên • Chủ nhiệm Võ đường Huỳnh Thúc Kháng"
  },
  {
    id: "q22",
    quote: "Võ đạo khởi đầu từ cái chào cung kính và kết thúc cũng bằng sự tôn kính. Bão quyền lễ không chỉ là nghi thức, mà là tâm thế khiêm nhường, lấy tĩnh chế động trước mọi nghịch cảnh.",
    author: "Võ sư Lê Đắc Kiên",
    roleOrSource: "Khẩu truyền bái tổ • Võ đường Huỳnh Thúc Kháng",
    category: "mindset",
    context: "Nghi lễ bão quyền biểu thị tay trái dựng chưởng là đức nhân từ, tay phải nắm quyền là ý chí dũng mãnh, lấy nhân chế cương.",
    authorImage: "/assets/images/instructors/vo_su_le_dac_kien_chao.jpg",
    imageCaption: "Võ sư Lê Đắc Kiên • Thế chào Bão Quyền Lễ"
  },
  {
    id: "q23",
    quote: "Học Vịnh Xuân là học cách lắng nghe. Lắng nghe hơi thở, lắng nghe kình lực của đối phương qua từng centimet xúc giác, và trên hết là lắng nghe chính tâm mình.",
    author: "Võ sư Lê Đắc Kiên",
    roleOrSource: "Đúc kết thính kình • Võ đường Huỳnh Thúc Kháng",
    category: "strategy",
    context: "Thính kình và linh giác: Khi tâm an tịnh, xúc giác sẽ trở thành đôi mắt thứ hai nhạy bén không độ trễ.",
    authorImage: "/assets/images/instructors/vo_su_le_dac_kien.jpg",
    imageCaption: "Võ sư Lê Đắc Kiên • Chủ nhiệm Võ đường Huỳnh Thúc Kháng"
  },
  {
    id: "q24",
    quote: "Đứng tấn Kiềm Dương không phải là đứng yên thụ động, mà là thế đứng đàn hồi như lò xo thép nén chặt, sẵn sàng chuyển hóa mọi xung lực thành bộ pháp linh hoạt.",
    author: "Võ sư Lê Đắc Kiên",
    roleOrSource: "Yếu lĩnh tấn pháp • Võ đường Huỳnh Thúc Kháng",
    category: "strategy",
    context: "Định hình trục Tý Ngọ và kết cấu vòm nêm kiềm dương bảo toàn tuyệt đối vùng hạ bàn.",
    authorImage: "/assets/images/instructors/vo_su_le_dac_kien_chao.jpg",
    imageCaption: "Võ sư Lê Đắc Kiên • Thế chào Bão Quyền Lễ"
  },
  {
    id: "q25",
    quote: "Đạo Vịnh Xuân lấy nhu thuận làm gốc, lấy thẳng thắn làm đường, lấy trung dung làm đích.",
    author: "Sư Tổ Nguyễn Tế Công",
    roleOrSource: "Tông chỉ môn phái • Khởi nguồn 1939",
    category: "lineage",
    context: "Cội nguồn tinh hoa truyền thừa từ Sư Tổ Nguyễn Tế Công khi đặt chân đến Việt Nam năm 1939.",
    authorImage: "/assets/images/historical/nguyen_te_cong.png",
    imageCaption: "Sư Tổ Nguyễn Tế Công (1877 - 1959)"
  }
];

// ==============================================================================
// 5. HELPER FUNCTIONS
// ==============================================================================

/** Lấy câu châm ngôn theo ngày dựa trên ngày trong năm (ổn định không đổi sau mỗi lần tải) */
export function getDailyMartialQuote(): MartialWisdomQuote {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  const index = dayOfYear % MARTIAL_WISDOM_QUOTES.length;
  return MARTIAL_WISDOM_QUOTES[index];
}

/** Lấy ngẫu nhiên một câu quote */
export function getRandomMartialQuote(): MartialWisdomQuote {
  const index = Math.floor(Math.random() * MARTIAL_WISDOM_QUOTES.length);
  return MARTIAL_WISDOM_QUOTES[index];
}

/** Lấy danh sách lời khuyên theo danh mục */
export function getCounselsByCategory(category: "all" | "ethics" | "training" | "combat" | "health"): MasterCounsel[] {
  if (category === "all") return MASTER_COUNSELS_42;
  return MASTER_COUNSELS_42.filter((c) => c.category === category);
}
