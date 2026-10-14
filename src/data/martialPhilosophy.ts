// ==============================================================================
// TRIẾT LÝ, YẾU QUYẾT & TINH HOA VÕ ĐẠO PHẬT GIA VỊNH XUÂN
// Căn cứ: Giáo trình Phật Gia Vịnh Xuân Quyền của PGS.TS Y khoa Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức
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

export interface GlobalMasterQuoteItem {
  quote: string;
  hanziOrOriginal?: string;
  context?: string;
}

export interface GlobalMasterBridge {
  id: string;
  masterName: string;
  hanziName?: string;
  branch: string;
  period: string;
  portraitUrl?: string;
  coreDoctrine: string;
  famousQuote: string;
  famousQuotes: GlobalMasterQuoteItem[];
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
    pageRef: "Khẩu Quyết Số 1",
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
    pageRef: "Khẩu Quyết Số 2",
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
    pageRef: "Khẩu Quyết Số 3",
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
    pageRef: "Khẩu Quyết Số 4",
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
    biomechanics: "Tiết kiệm sức lực tối đa: Chỉ phóng lực (phát kình) vào đúng mili-giây tiếp xúc mục tiêu. Không bị lỡ trớn hay mất thăng bằng nếu đối phương né tránh vì cùi chỏ luôn nằm trong tầm kiểm soát của cơ trọng tâm.",
    originalQuote: "Đánh đòn hẹp, ngắn, theo khuôn đạt nhiều lợi ích: Tiết kiệm di chuyển, đòn đi đường ngắn nên nhanh; trường thắng đoản; tiết kiệm lực, chỉ xuất lực khi chạm mục tiêu; không bị lỡ trớn mất đà.",
    pageRef: "Khẩu Quyết Số 5",
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
    pageRef: "Khẩu Quyết Số 6",
    tacticalApplication: "Bịt mắt song đấu vẫn thi triển võ công trôi chảy nhờ linh giác xúc giác nhạy bén tại hai cẳng tay.",
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
    pageRef: "Khẩu Quyết Số 7 (Trang 164–165)",
    tacticalApplication: "Tấn công dồn dập khiến đối phương rơi vào tình trạng quá tải xử lý thông tin, hoàn toàn sụp đổ thế trận phòng ngự.",
    keyConcepts: ["Nước Chảy Tràn Bờ", "Triệt Đòn Tại Gốc", "Nhật Tự Liên Hoàn", "Sóng Kình Thẩm Thấu"]
  },
  {
    id: "niem-dau-bat-chinh",
    order: 8,
    title: "Niệm Đầu Bất Chính, Chung Thân Bất Chính — Đại Đồng Tiểu Dị",
    hanzi: "念頭不正 • 終身不正 • 大同小異",
    shortSummary: "Ý nghĩ ban đầu không chuẩn xác thì suốt đời võ học sai lệch — Tinh túy Tiểu Niệm Đầu & đơn giản chế phức tạp.",
    philosophy: "Tiểu Niệm Đầu hàm ý khuyên người học võ luôn tập trung tư tưởng và coi trọng ngay từ những thế võ căn bản ban đầu. Tuy các hệ phái Vịnh Xuân khác nhau đôi chút theo phương châm 'Đại đồng tiểu dị', nhưng đều lấy sự đơn giản chế ngự sự phức tạp, dùng tĩnh lặng và thả lỏng để nuôi dưỡng nội kình.",
    biomechanics: "Tập càng chậm càng tốt (tối thiểu 30–45 phút). Bàn tay mở ra từ quyền thành chưởng xòe chầm chậm như cánh hoa nở; tưởng tượng mỗi động tác đều thắng một trở lực rất lớn (như ngâm mình dưới nước) nhưng cơ bắp vẫn nới lỏng hoàn toàn. Đây là thiền đứng: qua chân, khí Dương đi lên, khí Âm đi xuống.",
    originalQuote: "Người Trung Hoa có câu 'Niệm đầu bất chính, chung thân bất chính' nghĩa là ý nghĩ ban đầu không chuẩn xác thì suốt đời không chuẩn xác... Tập chậm, càng chậm càng tốt (tối thiểu 30–45 phút). Các động tác không được cứng, mạnh (dùng sức nhiều). Thí dụ: Bàn tay mở ra từ quyền thành chưởng, lý tưởng là các ngón tay phải xòe ra chầm chậm như các cánh hoa nở.",
    pageRef: "Chương I • Tiểu Niệm Đầu (Trang 36)",
    tacticalApplication: "Xây dựng hạ bàn vững chãi như mọc rễ xuống đất, định hình chuẩn xác các thủ pháp cốt lõi (Than, Bàng, Phục, Trầm, Hộ, Lan thủ) làm gốc cho mọi biến hóa về sau.",
    keyConcepts: ["Niệm Đầu Bất Chính", "Đại Đồng Tiểu Dị", "Cánh Hoa Nở", "Thiền Đứng", "Chân Mọc Rễ"]
  },
  {
    id: "van-lo-tam-kieu-tieu-chi",
    order: 9,
    title: "Vấn Lộ Tầm Kiều Thủ Tiên Hành — Tiêu Chỉ Bất Xuất Môn",
    hanzi: "問路尋橋手先行 • 標指不出門",
    shortSummary: "Dò đường bắt cầu tay đi trước — Phóng ngón tay cứu nguy hiểm hóc không truyền ra ngoài môn phái.",
    philosophy: "Tầm Kiều là bài tìm cầu nối tiếp cận đối phương thông qua cước pháp, bộ pháp di chuyển và xoay hông phát lực lớn. Tiêu Chỉ là bài quyền cao cấp hóa giải tình huống hiểm nghèo (thất thế) để chuyển bại thành thắng với phương châm 'Dĩ công vi thủ, dĩ đả vi tiêu', do tính chất sát thương vào yếu huyệt nên cổ nhân răn 'Tiêu Chỉ bất xuất môn'.",
    biomechanics: "Tầm Kiều kết hợp bộ pháp linh hoạt với chuyển động cánh tay và xoay hông để phát lực toàn thân. Tiêu Chỉ rèn ngón tay cứng như thép kết hợp lắc cổ tay, xoay thân, bộ pháp linh hoạt và kình lực ngắn (Thốn kình) phóng ra từ cùi chỏ và đầu ngón tay.",
    originalQuote: "Vấn lộ Tầm Kiều thủ tiên hành (dò đường tìm cầu tay đi trước)... Do tính chất nguy hiểm của các đòn thế trong bài Tiêu Chỉ, nên người xưa đã lấy câu 'Tiêu Chỉ bất xuất môn' để răn đe những đệ tử trong bổn môn không được truyền dạy cho người ngoài.",
    pageRef: "Chương I • Tầm Kiều & Tiêu Chỉ (Trang 43)",
    tacticalApplication: "Tầm Kiều giúp bắc cầu kiểm soát trung tuyến và phá thế đứng của địch; Tiêu Chỉ giúp thoát hiểm trong gang tấc bằng đòn chỏ và xỉa chỉ vào mắt, cổ họng, thái dương.",
    keyConcepts: ["Vấn Lộ Tầm Kiều", "Tiêu Chỉ Bất Xuất Môn", "Dĩ Đả Vi Tiêu", "Chuyển Bại Thành Thắng"]
  },
  {
    id: "luc-hop-mien-quyen",
    order: 10,
    title: "Lục Hợp Nhất Thể — Miên Quyền: Mềm, Dẻo, Khéo, Nhanh, Mạnh",
    hanzi: "六合一體 • 綿拳柔巧快勁",
    shortSummary: "Sáu sự phối hợp nội ngoại đồng nhất — Thực hiện chuẩn Than, Bàng, Phục thủ thì mọi người phải nghe theo.",
    philosophy: "Phật Gia Vịnh Xuân còn gọi là Miên Quyền hay Nhu Quyền với tôn chỉ 5 chữ: Mềm – Dẻo – Khéo – Nhanh – Mạnh. Mọi chuyển động đều tuân theo Lục Hợp (3 Nội hợp: Thần–Khí, Ý–Lực, Nội–Ngoại; 3 Ngoại hợp: Kiên–Yêu, Tất–Trửu, Thủ–Túc) và chiến thuật 'Quyền đả ngọa ngưu chi địa' (chiến đấu trong phạm vi hẹp bằng chỗ con trâu nằm).",
    biomechanics: "Vai thả lỏng tương ứng với eo hông (Kiên dữ yêu hợp), đầu gối tương ứng với cùi chỏ (Tất dữ trửu hợp), bàn tay tương ứng với bàn chân (Thủ dữ túc hợp). Tay 3 phần chân 7 phần ('Quyền 5 cước 7', 'Túc bất ly địa'), lướt chân sát đất như rắn trườn.",
    originalQuote: "Trong Vịnh Xuân Quyền có câu: 'Thực hiện chuẩn được Than, Bàng, Phục thủ thì mọi người phải nghe theo'... Tôn chỉ của môn phái: Mềm - Dẻo - Khéo - Nhanh - Mạnh... Quyền đả ngọa ngưu chi địa, nghĩa là chỉ cần một phạm vi hẹp bằng chỗ con trâu nằm là đủ để dụng võ.",
    pageRef: "Chương I • Đặc Điểm & Nguyên Lý (Trang 26–35)",
    tacticalApplication: "Cận chiến nhập nội sát thân, dùng biên thân thu hẹp tiết diện mục tiêu và phát lực toàn thân đồng bộ trong không gian chật hẹp.",
    keyConcepts: ["Lục Hợp", "Miên Quyền", "Than Bàng Phục Thủ", "Ngọa Ngưu Chi Địa", "Túc Bất Ly Địa"]
  },
  {
    id: "di-than-dan-khi-noi-cong",
    order: 11,
    title: "Dĩ Thần Dẫn Khí — Khí Là Vua Của Lực & Thông Tức Bất Thống",
    hanzi: "以神引氣 • 氣為力之君 • 通則不痛",
    shortSummary: "Đả quyền bất luyện công, đáo lão nhất trường không — Nội công Thở 4 Thì, Tứ đại kỵ và Tam điều cần.",
    philosophy: "Ngạn ngữ có câu: 'Đả quyền bất luyện công, đáo lão nhất trường không; Lực bất đả quyền, quyền bất đả công'. Nội công Phật Gia Vịnh Xuân lấy nguyên lý 'Dĩ thần dẫn khí' (Thần dẫn Khí, Khí dẫn Huyết, Khí là vua của Lực). Trong tập luyện tuyệt đối tránh Tứ đại kỵ (Thô Phù, Táo Tiến, Tham Đắc, Việt Liệp) và giữ vững Tam điều cần (Tiệm tiến, Hằng tâm, Tiết dục).",
    biomechanics: "Thở bụng 4 thì có trở lực (Hít vào – Giữ hơi – Thở ra – Nghỉ) giúp cơ hoành lên xuống mạnh mẽ, xoa bóp nội tạng, tăng dung tích sống và khai thông Nhâm Đốc. Theo Đông y: 'Thông tức bất thống, thống tức bất thông' — khí huyết lưu thông thì cơ thể khỏe mạnh, đẩy lùi bệnh tật.",
    originalQuote: "Đả quyền bất luyện công, đáo lão nhất trường không; Lực bất đả quyền, quyền bất đả công... Nguyên lý Dĩ thần dẫn khí: Thần dẫn Khí, Khí dẫn Huyết. Khi Khí đã vượng thì Lực cũng mạnh thêm (Khí là vua của Lực)... Thông tức bất thống, thống tức bất thông.",
    pageRef: "Chương IV • Nội Công Dưỡng Sinh (Trang 167–178)",
    tacticalApplication: "Nuôi dưỡng nội lực bền bỉ từ bên trong, giữ nhịp thở sâu êm khi giao đấu và bảo vệ lục phủ ngũ tạng trước các chấn động ngoại lực.",
    keyConcepts: ["Dĩ Thần Dẫn Khí", "Khí Là Vua Của Lực", "Thông Tức Bất Thống", "Tứ Đại Kỵ", "Thở 4 Thì"]
  },
  {
    id: "khau-quyet-binh-khi",
    order: 12,
    title: "Đơn Đao Khán Thủ, Song Đao Khán Bộ — Lục Điểm Bán Côn & Kiếm Thân Hợp Nhất",
    hanzi: "單刀看手雙刀看步 • 六點半棍 • 劍身合一",
    shortSummary: "Đao như mãnh hổ, vũ khí càng ngắn càng nguy hiểm — So côn dính côn & Lục đại kiếm thế.",
    philosophy: "Hệ thống binh khí Phật Gia Vịnh Xuân gồm Bát Trảm Đao, Lục Điểm Bán Côn và Liễu Diệp Kiếm. Bát Trảm Đao tuân theo khẩu quyết 'Đơn đao khán thủ, song đao khán bộ' và 'Đao như mãnh hổ' (vũ khí càng ngắn càng nguy hiểm vì buộc phải nhập sát nội môn). Côn pháp tinh giản trong 6,5 điểm chuẩn xác. Kiếm pháp lấy thân pháp làm chủ, 'Kiếm thân hợp nhất'.",
    biomechanics: "Bát Trảm Đao tận dụng lực bật dẻo của hai cổ tay xoay lật chém-đỡ đồng thời. Lục Điểm Bán Côn rèn sức nặng hạ bàn Kiềm Dương, cơ bắp gân cốt cánh tay và độ nhạy cảm xúc giác qua bài 'So côn' (dính côn). Liễu Diệp Kiếm vận dụng Lục đại kiếm thế (Khuyên, Trầm, Trát, Thích, Phất, Lặc) uyển chuyển như lá liễu.",
    originalQuote: "Theo khẩu quyết cổ truyền: 'Đơn đao khán thủ, song đao khán bộ' (một đao xem tay, hai đao xem bước chân); 'Đao như mãnh hổ'... Một quy luật của võ học là: Vũ khí càng ngắn càng nguy hiểm... Bài Lục Điểm Bán Côn chỉ có 6 động tác rưỡi.",
    pageRef: "Chương V • Vũ Khí (Trang 185–190)",
    tacticalApplication: "Hoàn thiện bộ pháp lướt nhập nội, cổ tay linh hoạt và khả năng truyền thốn kình cùng thính kình từ nắm tay ra đến tận mũi binh khí.",
    keyConcepts: ["Song Đao Khán Bộ", "Đao Như Mãnh Hổ", "Lục Điểm Bán Côn", "So Côn", "Kiếm Thân Hợp Nhất"]
  }
];

// ==============================================================================
// 2. TRỌN BỘ 42 LỜI KHUYÊN CỦA SƯ PHỤ
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
    elaboration: "Soi gương để sửa từng góc độ cùi chỏ và tấn pháp; nhắm mắt để đánh thức xúc giác cẳng tay và thính kình Đan Điền, thoát khỏi sự phụ thuộc vào thị giác. Sách gốc (Trang 178) hướng dẫn bài tập định tâm: Nhắm mắt đi bộ tiến 20 bước rồi lùi 20 bước về đúng điểm xuất phát để luyện cảm giác định hướng không gian.",
    keywords: ["nhắm mắt", "trước gương", "chỉnh khuôn", "động thiền", "đi bộ 20 bước"]
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
    elaboration: "Tam bảo trong mỗi động tác: Thở bụng sâu kích hoạt đan điền; xoay biên thân đổi góc đón lực; thả lỏng tự nhiên để khí huyết và kình lực lưu chuyển thông suốt. Mẹo kiểm tra thở bụng (Sách gốc Trang 177): Khi thở ra bằng miệng, người mới tập nên lấy tay bịt mũi để chống rò khí qua mũi; đặt 1 bàn tay trên rốn và 1 bàn tay dưới rốn để kiểm tra bụng phình/xẹp đúng nhịp.",
    keywords: ["thở bụng", "quay người", "thả lỏng", "tam bảo", "bịt mũi chống rò khí"]
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
    elaboration: "Linh giác là cảm nhận tinh tế hình thành qua quá trình kiên trì cọ xát cẳng tay. Không thể đốt cháy giai đoạn; công phu là sự tích lũy của năm tháng.",
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
    id: "leung-jan",
    masterName: "Đại Danh Y Lương Tán (Leung Jan)",
    hanziName: "梁贊 • Leung Jan",
    branch: "Cội Nguồn Vịnh Xuân Phật Sơn",
    period: "1826 – 1901",
    portraitUrl: "/assets/images/masters/leung_jan.jpg",
    coreDoctrine: "Đoản Đả Cận Chiến & Thốn Kình Nhập Cốt",
    famousQuote: "Tập Vịnh Xuân giả, tiên tri trung tuyến, thứ minh thính kình, chung quy ư vô tướng. Đoản quyền đoản cước, thốn kình nhập cốt. Bất cầu hoa lệ, duy cầu chân thực.",
    famousQuotes: [
      {
        quote: "Tập Vịnh Xuân giả, tiên tri trung tuyến, thứ minh thính kình, chung quy ư vô tướng. Đoản quyền đoản cước, thốn kình nhập cốt. Bất cầu hoa lệ, duy cầu chân thực.",
        hanziOrOriginal: "習詠春者，先知中線，次明聽勁，終歸於無相。短橋短馬，寸勁入骨。",
        context: "Thứ lớp tu tập: trước hiểu trục trung tuyến, sau sáng tỏ thính kình, cuối cùng đạt tới phản xạ tự nhiên không câu nệ hình tướng."
      },
      {
        quote: "Y lý cùng quyền lý vốn đồng một gốc: bắt mạch cần tĩnh tâm để nghe khí huyết lưu chuyển; niêm thủ cần tĩnh ý để nghe hướng lực hư thực của đối phương.",
        hanziOrOriginal: "醫理與拳理同源：診脈貴靜以察氣血，黐手貴靜以聽虛實。",
        context: "Sự giao thoa giữa y đạo bắt mạch tại Vĩnh An Đường và nghệ thuật thính kình qua hai cẳng tay tiếp xúc."
      },
      {
        quote: "Kiều bất ly trung, chỏ bất ly hiếp; lấy bốn lạng đẩy ngàn cân, lấy đường thẳng ngắn chế ngự đường vòng rộng.",
        hanziOrOriginal: "橋不離中，肘不離脅；四兩撥千斤，以直制曲。",
        context: "Giữ cẳng tay trên trục giữa và cùi chỏ che kín mạng sườn để tạo cấu trúc hình nêm vững chắc."
      },
      {
        quote: "Người học võ trước phải dưỡng chính khí, sau mới luyện kỹ kích; khí huyết thông suốt thì gân cốt mới bền bỉ dẻo dai.",
        hanziOrOriginal: "習武先養正氣，後練技擊；氣血通暢，筋骨乃強。",
        context: "Triết lý y võ dưỡng sinh làm gốc rễ cho công phu lâu dài."
      }
    ],
    pgvxCorrelation: "Cội nguồn tổ sư truyền thừa xuống Nguyễn Tế Công và Trần Hoa Thuận. Tương thích 100% với tôn chỉ 'Đơn giản, đi đường ngắn nhất, không hoành tráng biểu diễn' của PGS.TS Nguyễn Mạnh Nhâm.",
    historicalContext: "Vị danh y mở hiệu thuốc Vĩnh An Đường tại Phật Sơn, người có công hệ thống hóa và truyền dạy Vịnh Xuân sâu rộng khắp Nam Trung Hoa.",
    sharedPrinciples: [
      "Thủ trung dụng trung (Giữ trung lộ tuyệt đối)",
      "Đoản quyền đoản đả cận chiến",
      "Thốn kình phát lực xuyên thấu"
    ]
  },
  {
    id: "yuen-kay-shan",
    masterName: "Đại Sư Nguyễn Kỳ Sơn (Yuen Kay Shan)",
    hanziName: "阮奇山 • Yuen Kay Shan",
    branch: "Vịnh Xuân Phật Sơn & Quảng Châu (Phái Sầm Năng)",
    period: "1889 – 1956",
    portraitUrl: "/assets/images/masters/yuen_kay_shan.jpg",
    coreDoctrine: "Thập Nhị Tán Thức & Trầm Kiều Áp Hạ",
    famousQuote: "Trầm kiều áp hạ, vấn lộ thông tâm. Bất tranh tiên phát, hậu phát tiên chí. Thập nhị tán thức, biến hóa vô cùng. Nhất thức thuần thục, vạn chiêu nan phá.",
    famousQuotes: [
      {
        quote: "Trầm kiều áp hạ, vấn lộ thông tâm. Bất tranh tiên phát, hậu phát tiên chí. Thập nhị tán thức, biến hóa vô cùng.",
        hanziOrOriginal: "沉橋壓下，問路通心。不爭先發，後發先至。",
        context: "Nhấn chìm cầu tay đối phương, dò đường thẳng vào trung tâm; động sau nhưng tới đích trước nhờ đường đi ngắn gọn."
      },
      {
        quote: "Lai lưu khứ tống, thoát thủ trực xông; kiều thủ tương giao, thính kình biện hướng.",
        hanziOrOriginal: "來留去送，甩手直衝；橋手相交，聽勁辨向。",
        context: "Khi hai cẳng tay vừa chạm nhau, lập tức dùng xúc giác phân biệt hướng lực để dẫn hóa hoặc phóng đòn."
      },
      {
        quote: "Luyện quyền như xây tháp từ móng: Tiểu Niệm Đầu luyện khí quy nguyên, Tầm Kiều luyện bộ pháp chuyển thân, Tiêu Chỉ phát kình đầu ngón.",
        hanziOrOriginal: "小念頭練氣歸元，尋橋練步法轉身，標指發勁於指端。",
        context: "Bố cục tam đại sáo lộ truyền thống của gia tộc họ Nguyễn tại Phật Sơn."
      },
      {
        quote: "Cổ tay mềm như bông nhưng trục chỏ trầm nặng như sắt; chưa chạm thì buông thư, vừa chạm đã thấu lực.",
        hanziOrOriginal: "腕柔如棉，肘沉如鐵；未觸則鬆，一觸即發。",
        context: "Nguyên lý kết hợp nhu và cương trong từng sát-na phát thốn kình."
      }
    ],
    pgvxCorrelation: "Là em ruột của Sư Tổ Nguyễn Tế Công (anh cả). Sự tương đồng sâu sắc giữa 'Trầm Kiều' của Nguyễn Kỳ Sơn và 'Vấn lộ - Chìm chỏ' của Phật Gia Vịnh Xuân Việt Nam minh chứng cho cội nguồn huyết thống võ học thuần khiết.",
    historicalContext: "Một trong 'Phật Sơn Vịnh Xuân Tam Hùng' (cùng Diệp Vấn và Diêu Tài), danh gia võ học tinh thông cả quyền pháp, thiết sa chưởng và song đao Bát Trảm Đao.",
    sharedPrinciples: [
      "Trầm kiều nhấn chìm đè nén cầu đối phương",
      "Thập Nhị Tán Thức ứng dụng linh hoạt",
      "Hậu phát tiên chí (Động sau đến trước)"
    ]
  },
  {
    id: "nguyen-te-cong",
    masterName: "Sư Tổ Nguyễn Tế Công (Yuen Chai Wan)",
    hanziName: "阮濟雲 • Yuen Chai Wan",
    branch: "Vịnh Xuân Việt Nam (Hà Nội & Sài Gòn - Chợ Lớn)",
    period: "1877 – 1959",
    portraitUrl: "/assets/images/historical/nguyen_te_cong.png",
    coreDoctrine: "Nhu Thuận Khắc Cương & Tông Chỉ Phật Gia Vịnh Xuân",
    famousQuote: "Đạo Vịnh Xuân lấy nhu thuận làm gốc, lấy thẳng thắn làm đường, lấy trung dung làm đích. Đứng tấn như tùng bách ngút ngàn, xuất thủ như mây bay nước chảy.",
    famousQuotes: [
      {
        quote: "Đạo Vịnh Xuân lấy nhu thuận làm gốc, lấy thẳng thắn làm đường, lấy trung dung làm đích. Đứng tấn như tùng bách ngút ngàn, xuất thủ như mây bay nước chảy.",
        hanziOrOriginal: "詠春之道，以柔順為本，以正直為徑，以中庸為的。",
        context: "Tông chỉ cốt lõi Sư Tổ Nguyễn Tế Công truyền thụ cho các thế hệ đệ tử tại Việt Nam từ năm 1939."
      },
      {
        quote: "Không lấy sức thô chọi sức thô; gặp cứng thì hóa nhu, gặp kẽ hở thì tiến thẳng, mượn sức của người để chế ngự người.",
        hanziOrOriginal: "不以拙力鬥拙力；遇剛則化柔，逢隙則直進。",
        context: "Nguyên tắc Dĩ nhu khắc cương và tá lực đả lực của dòng Vịnh Xuân Việt Nam."
      },
      {
        quote: "Hai tay phối hợp như đôi rồng quấn quýt: một tay hộ trung lộ thì tay kia đã xuất đòn, không bao giờ để một tay đứng chết.",
        hanziOrOriginal: "雙手配合如雙龍並進：一手護中，一手即發。",
        context: "Cội nguồn của lời răn dạy 'Hai tay ví như hai con rồng cần phối hợp' trong giáo trình Phật Gia Vịnh Xuân."
      },
      {
        quote: "Người luyện võ trước phải giữ lễ nghĩa khiêm nhường; tâm có tĩnh thì thần mới sáng, thần có sáng thì linh giác mới nhạy bén.",
        hanziOrOriginal: "習武先守謙禮；心靜則神明，神明則靈覺敏。",
        context: "Đạo đức võ học và tu dưỡng tâm tính là nền tảng của công phu niêm thủ."
      }
    ],
    pgvxCorrelation: "Cội nguồn khai sáng dòng truyền thừa Vịnh Xuân tại Việt Nam từ năm 1939, truyền dạy trực tiếp cho Cố Võ Sư Trần Thúc Tiển, đặt nền móng vĩnh cửu cho Phật Gia Vịnh Xuân.",
    historicalContext: "Anh ruột của Nguyễn Kỳ Sơn tại Phật Sơn, sang Việt Nam năm 1939 truyền dạy võ học tại Hà Nội và Chợ Lớn, được toàn thể các nhánh Vịnh Xuân Việt Nam đồng lòng tôn xưng là Sư Tổ.",
    sharedPrinciples: [
      "Dĩ nhu chế cương, mượn lực đả lực",
      "Trung tâm tuyến tuyệt đối trong công thủ",
      "Thính kình linh giác qua niêm thủ tay đôi"
    ]
  },
  {
    id: "tran-thuc-tien",
    masterName: "Cố Võ Sư Trần Thúc Tiển",
    hanziName: "陳叔展 • Trần Thúc Tiển",
    branch: "Phật Gia Vịnh Xuân Hà Nội",
    period: "1911 – 1980",
    portraitUrl: "/assets/images/historical/tran_thuc_tien.png",
    coreDoctrine: "Cước Căn Bàn Thạch, Tấn Đàn Hồi & Thốn Kình Thấu Cốt",
    famousQuote: "Chân vững như cây có gốc cắm sâu vào lòng đất. Chân không vững thì đòn tay chỉ là sức quơ quào hời hợt bên ngoài. Đấm không cần gồng cứng cơ bắp, hãy để kình lực từ gót chân truyền qua thắt lưng mà thấu vào xương tủy đối phương.",
    famousQuotes: [
      {
        quote: "Chân vững như cây có gốc cắm sâu vào lòng đất. Chân không vững thì đòn tay chỉ là sức quơ quào hời hợt bên ngoài.",
        context: "Yếu lĩnh Kiềm Dương Tấn và nguyên lý 'Lực do địa khởi' truyền dạy tại Hà Nội."
      },
      {
        quote: "Đấm không cần gồng cứng cơ bắp, hãy để kình lực từ mặt đất qua chân, hông, vai rồi phát ra ở điểm đích khi chạm mục tiêu.",
        context: "Cơ chế truyền chuỗi động học toàn thân thay vì dùng sức cục bộ của vai và bắp tay."
      },
      {
        quote: "Luyện cổ tay và cẳng tay phải đạt đủ bốn chữ: Dẻo, Khéo, Nhanh, Mạnh — mềm như cật tre bị uốn nhưng bật ra ngay khi thoát lực ép.",
        context: "Phương pháp rèn luyện độ đàn hồi sinh học của cánh tay trong các bài cơ bản và mộc nhân."
      },
      {
        quote: "Công phu không nằm ở việc thuộc nhiều bài, mà ở hàng vạn lần lặp lại đúng khuôn thước trong trạng thái thở sâu và thả lỏng.",
        context: "Tinh thần khổ luyện nghiêm cẩn, lấy chất lượng giờ tập làm thước đo tiến bộ."
      }
    ],
    pgvxCorrelation: "Thầy truyền dạy trực tiếp toàn bộ tinh hoa quyền pháp, 108 thế mộc nhân và khí công dưỡng sinh cho PGS.TS Nguyễn Mạnh Nhâm.",
    historicalContext: "Học trò xuất sắc của Sư Tổ Nguyễn Tế Công tại Hà Nội, nội lực thâm hậu, nổi tiếng với đôi tay hộ thủ vững chãi, nhu hòa.",
    sharedPrinciples: [
      "Cước căn vững vàng, tấn như lò xo nén",
      "Kình phát từ gót chân, eo hông điều khiển",
      "Buông lỏng tối đa để phát lực xuyên thấu"
    ]
  },
  {
    id: "nguyen-manh-nham",
    masterName: "PGS.TS Y Khoa Nguyễn Mạnh Nhâm",
    hanziName: "阮孟壬 • Nguyễn Mạnh Nhâm",
    branch: "Phật Gia Vịnh Xuân Việt Nam",
    period: "1932 – nay (Đại thọ 94 tuổi)",
    portraitUrl: "/assets/images/historical/pgs_ts_nguyen_manh_nham_3.jpg",
    coreDoctrine: "Y Võ Tương Thông & Khoa Học Hóa Vịnh Xuân",
    famousQuote: "Phương pháp tốt nhất trước một cuộc chiến là tránh cuộc chiến. Ý nghĩa cao nhất của võ đạo là bảo tồn sinh mạng và sự hòa hiếu giữa con người.",
    famousQuotes: [
      {
        quote: "Phương pháp tốt nhất trước một cuộc chiến là tránh cuộc chiến. Tập võ trước hết là cho sức khỏe tinh thần và cơ thể, không đấu thử, không hiếu chiến.",
        context: "Lời khuyên số 3 & số 4 trong giáo trình Phật Gia Vịnh Xuân Quyền (2012)."
      },
      {
        quote: "Đỡ và tấn công theo trung lộ. Khuỷu tay thường ở chéo áo, cách ngực một quyền là vừa (thủ lưu trung tuyến). Đây là đặc điểm nhận biết môn đồ Vịnh Xuân Quyền.",
        context: "Khẩu quyết số 1 (Tý Ngọ Tuyến) — trang PDF 161 sách gốc."
      },
      {
        quote: "Nhờ tập luyện linh giác, tay có khả năng 'nhìn thấy' trước khi mắt kịp thấy vì đường dẫn truyền xúc giác qua tủy sống ngắn hơn đường phản xạ thị giác qua vỏ não.",
        context: "Giải thích cơ chế sinh lý thần kinh của Linh Giác & Niêm Thủ trong Chương II sách gốc."
      },
      {
        quote: "Không nên tham học nhiều miếng võ, bài võ. Mười miếng thuần thục hơn một trăm miếng chưa tập kỹ. Không phải số năm tập mà số giờ tập luyện đúng phương pháp mới đáng kể.",
        context: "Lời khuyên số 13 & số 38 dành cho môn sinh về phương pháp tu tập thực chất."
      }
    ],
    pgvxCorrelation: "Tác giả công trình giáo trình 'Phật Gia Vịnh Xuân Quyền' (2012). Dùng tri thức y khoa hiện đại và cơ sinh học để đúc kết, hệ thống hóa và chuẩn hóa toàn bộ giáo lý chân truyền của môn phái.",
    historicalContext: "Nguyên Trưởng khoa Phẫu thuật Tiêu hóa Bệnh viện Hữu nghị Việt Đức, Chủ tịch Danh dự Hội Hậu môn Trực tràng VN, Nguyên Chủ tịch Hội Vịnh Xuân Hà Nội. Học trò chân truyền của Cụ Trần Thúc Tiển.",
    sharedPrinciples: [
      "Y võ tương thông, lấy y đạo bổ trợ võ đạo",
      "Thủ lưu trung tuyến, tối ưu hóa đường đi của lực",
      "Thính kình linh giác qua cơ chế phản xạ tủy sống"
    ]
  },
  {
    id: "nguyen-duy-thuc",
    masterName: "ThS.DS Nguyễn Duy Thức",
    hanziName: "Nguyễn Duy Thức • Thạc Sĩ - Dược Sĩ",
    branch: "Phật Gia Vịnh Xuân (Đồng Tác Giả 2012)",
    period: "Thế hệ kế thừa",
    portraitUrl: "/assets/images/historical/ths_nguyen_duy_thuc.jpg",
    coreDoctrine: "Phật Gia Khí Công, Vận Khí Dưỡng Sinh & Y Võ Tương Thông",
    famousQuote: "Khí công và nội công không phải là phép màu siêu nhiên, mà là sự hòa hợp tuyệt đối giữa hơi thở cơ hoành, hệ kinh lạc và tâm ý buông xả vô vi.",
    famousQuotes: [
      {
        quote: "Khí công và nội công không phải là phép màu siêu nhiên, mà là sự hòa hợp giữa hơi thở bụng bốn thì, hệ kinh lạc và tâm ý tĩnh tại.",
        context: "Chương IV: Nội công & Khí công dưỡng sinh trong giáo trình Phật Gia Vịnh Xuân Quyền (2012)."
      },
      {
        quote: "Khi luyện các thế võ cần luôn chú ý ba yếu tố đồng bộ: Phối hợp với hơi thở — Quay người biên thân — Thả lỏng cơ bắp.",
        context: "Nguyên tắc kết hợp nội công hô hấp vào từng chuyển động quyền pháp."
      },
      {
        quote: "Ngũ Hình Quyền gắn liền với Ngũ Hành và Ngũ Tạng: Long thuộc Thổ chủ Tỳ, Hổ thuộc Kim chủ Phế, Báo thuộc Mộc chủ Can, Xà thuộc Thủy chủ Thận, Hạc thuộc Hỏa chủ Tâm.",
        context: "Hệ thống Y Võ Ngũ Hình Quyền (trang PDF 118–119 sách gốc)."
      },
      {
        quote: "Trong luyện tập binh khí (Đao, Côn, Kiếm), vũ khí chính là cánh tay nối dài; mọi nguyên lý giữ trung lộ và linh giác cổ tay đều nhất quán với quyền tay không.",
        context: "Chương V: Vũ khí Phật Gia Vịnh Xuân (trang PDF 188–206)."
      }
    ],
    pgvxCorrelation: "Đồng tác giả cuốn sách giáo trình năm 2012 cùng thân phụ. Trực tiếp thực hiện và thị phạm bài quyền nội công Phật Gia Khí Công Quyền (trang 172) cùng các bài đối luyện binh khí nâng cao.",
    historicalContext: "Giảng viên Học Viện Y Dược Học Cổ Truyền Việt Nam, Trưởng khoa Dược. Được thân phụ truyền thụ các bí quyết nội gia từ sớm và phụ trách võ đường Phật Gia Vịnh Xuân Tuệ Tĩnh.",
    sharedPrinciples: [
      "Hô hấp cơ hoành bốn thì đan điền tích khí",
      "Khai thông kinh mạch, bồi bổ nguyên khí dưỡng sinh",
      "Vũ khí là cánh tay nối dài, lấy linh giác niêm dính"
    ]
  },
  {
    id: "ip-man",
    masterName: "Đại Sư Diệp Vấn (Ip Man)",
    hanziName: "葉問 • Ip Man",
    branch: "Diệp Vấn Vịnh Xuân (Hồng Kông / Toàn Cầu)",
    period: "1893 – 1972",
    portraitUrl: "/assets/images/masters/ip_man.jpg",
    coreDoctrine: "Lý Luận Trung Tâm Tuyến & Đề Cao Võ Đức",
    famousQuote: "Thủ trung dụng trung, độc thủ bất hành, song thủ thành công. Võ thuật không phải để chứng minh bạn mạnh hơn người khác, mà là để tu dưỡng nhân cách và bảo vệ người yếu thế.",
    famousQuotes: [
      {
        quote: "Thủ trung dụng trung, độc thủ bất hành, song thủ thành công. Võ thuật không phải để chứng minh bạn mạnh hơn người khác, mà là để tu dưỡng nhân cách và bảo vệ người yếu thế.",
        hanziOrOriginal: "守中用中，獨手不行，雙手成功。",
        context: "Giữ trung tuyến, dùng trung tuyến; hai tay luôn phối hợp công thủ đồng thời trên nền tảng võ đức."
      },
      {
        quote: "Không sợ đối phương hùng mạnh, chỉ sợ chính mình đánh mất trung tâm tuyến và sự điềm tĩnh.",
        hanziOrOriginal: "不怕對手強，只怕失中線與平常心。",
        context: "Giữ vững cấu trúc trục cơ thể và tâm lý ổn định trước áp lực tấn công."
      },
      {
        quote: "Kiều lai kiều thượng quá, vô kiều tự tạo kiều; hữu thân đả thân, vô thân đả ảnh.",
        hanziOrOriginal: "橋來橋上過，無橋自造橋；有身打身，無身打影。",
        context: "Cầu tay đối phương đến thì đi trên cầu mà vào; chưa có cầu tiếp xúc thì chủ động tạo cầu nối."
      },
      {
        quote: "Niệm đầu chính, chung thân chính; ý niệm ban đầu mà sai lệch một ly thì cả đời luyện võ sẽ đi chệch ngàn dặm.",
        hanziOrOriginal: "念頭正，終身正。",
        context: "Ý nghĩa triết học sâu xa của bài quyền mở đầu Tiểu Niệm Đầu (Siu Nim Tau)."
      }
    ],
    pgvxCorrelation: "Tương đồng 100% với Trục Tý Ngọ Tuyến và Tấn Kiềm Dương của Phật Gia Vịnh Xuân. Diệp Vấn và Nguyễn Tế Công vốn là đồng môn tại Phật Sơn, cùng chia sẻ cội nguồn quyền thuật tinh túy.",
    historicalContext: "Tông sư đưa Vịnh Xuân Quyền từ một môn phái truyền thống ở Phật Sơn ra toàn cầu qua các đệ tử xuất chúng tại Hồng Kông.",
    sharedPrinciples: [
      "Thủ trung dụng trung (Giữ trung tâm, đánh trung tâm)",
      "Độc thủ bất hành, song thủ thành công (Hai tay phối hợp)",
      "Võ đức vi tiên (Lấy nhân nghĩa phục người)"
    ]
  },
  {
    id: "wong-shun-leung",
    masterName: "Võ Sư Hoàng Thuần Lương (Wong Shun Leung)",
    hanziName: "黃淳樑 • Wong Shun Leung",
    branch: "Vịnh Xuân Thực Chiến Khoa Học (WSL Ving Tsun)",
    period: "1935 – 1997",
    portraitUrl: "/assets/images/masters/wong_shun_leung.jpg",
    coreDoctrine: "Vịnh Xuân Khoa Học & Cận Chiến Thực Dụng",
    famousQuote: "Mắt là kẻ lừa dối; chỉ có cẳng tay xúc giác mới không bao giờ nói dối. Vịnh Xuân không phải là một môn nghệ thuật để nhảy múa; nó là công cụ khoa học chính xác để kết thúc cuộc chiến nhanh nhất.",
    famousQuotes: [
      {
        quote: "Mắt là kẻ lừa dối; chỉ có cẳng tay xúc giác mới không bao giờ nói dối. Vịnh Xuân không phải là một môn nghệ thuật để nhảy múa; nó là công cụ khoa học chính xác để tự vệ hiệu quả.",
        hanziOrOriginal: "The eyes can be deceived, but the tactile feeling of the forearms never lies.",
        context: "Ưu thế của phản xạ xúc giác (Chi Sao / Niêm Thủ) so với phản xạ thị giác trong cận chiến."
      },
      {
        quote: "Đừng bao giờ đuổi theo bàn tay của đối phương; hãy đánh thẳng vào trung tâm cơ thể họ, tay họ khắc phải tự quay về cứu.",
        hanziOrOriginal: "Never chase the opponent's hands; attack their center of gravity directly.",
        context: "Tương ứng trực tiếp với khẩu quyết 'Dĩ công vi thủ' trong Phật Gia Vịnh Xuân."
      },
      {
        quote: "Học Vịnh Xuân không phải là chất chồng thêm những động tác phức tạp, mà là gọt bỏ dần những phản xạ thừa thãi cho đến khi chỉ còn lại chuyển động ngắn gọn, hợp lý.",
        hanziOrOriginal: "Learning Ving Tsun is about stripping away unnecessary movements until only economy of motion remains.",
        context: "Tính tiết kiệm chuyển động (Economy of Motion) trong cơ sinh học Vịnh Xuân."
      },
      {
        quote: "Một bài quyền chỉ thực sự có giá trị khi bạn hiểu rõ công năng thực tế của từng góc cùi chỏ và từng bước chuyển mã.",
        hanziOrOriginal: "A form is only useful when you understand the practical biomechanics behind every elbow angle and step.",
        context: "Đề cao tư duy phân tích khoa học thay vì tập vẹt hình thức."
      }
    ],
    pgvxCorrelation: "Khớp sâu sắc với chuyên đề Linh Giác: Cơ chế phản xạ tủy sống xúc giác nhanh hơn thị giác vỏ não, loại bỏ đáng kể độ trễ phản xạ.",
    historicalContext: "Người có kinh nghiệm giao lưu tỉ thí thực tế phong phú tại Hồng Kông, là người trực tiếp hướng dẫn luyện tập thực chiến cho Lý Tiểu Long thuở niên thiếu.",
    sharedPrinciples: [
      "Đánh góc chéo 45° triệt tiêu vũ khí của đối thủ",
      "Vịnh Xuân là công cụ khoa học chính xác, không phải điệu múa",
      "Tay có mắt (Nhãn thủ) qua thính kình cẳng tay"
    ]
  },
  {
    id: "bruce-lee",
    masterName: "Lý Tiểu Long (Bruce Lee)",
    hanziName: "李小龍 • Bruce Lee",
    branch: "Triệt Quyền Đạo (Jeet Kune Do / Cội nguồn Vịnh Xuân)",
    period: "1940 – 1973",
    portraitUrl: "/assets/images/masters/bruce_lee.jpg",
    coreDoctrine: "Be Water, My Friend — Quyền Như Lưu Thủy & Triệt Đòn Tại Gốc",
    famousQuote: "Hãy vô hình vô tướng như nước. Nước đổ vào cốc thì thành cốc, đổ vào ấm thì thành ấm. Nước có thể chảy trôi êm ả, nhưng cũng có thể phá nát đá tảng. Đơn giản là nét tinh tế cốt lõi.",
    famousQuotes: [
      {
        quote: "Hãy vô hình vô tướng như nước. Nước đổ vào cốc thì thành cốc, đổ vào ấm thì thành ấm. Nước có thể chảy trôi êm ả, nhưng cũng có thể phá vỡ đá tảng. Hãy như nước, bạn của tôi.",
        hanziOrOriginal: "Empty your mind, be formless, shapeless — like water. Be water, my friend.",
        context: "Tư tưởng 'Quyền như lưu thủy' bắt nguồn từ nền tảng Vịnh Xuân Quyền và triết học phương Đông."
      },
      {
        quote: "Tôi không biết sẽ ra đòn gì trước khi chiến đấu. Đòn tôi đánh tùy thuộc vào phía địch thủ ra đòn thế nào.",
        hanziOrOriginal: "I do not hit; 'it' hits all by itself in response to the opponent's action.",
        context: "Được PGS.TS Nguyễn Mạnh Nhâm trích dẫn trực tiếp ở Khẩu quyết số 6 (Tâm Ứng Thủ) trong sách gốc."
      },
      {
        quote: "Tôi không sợ người luyện 10.000 cú đá khác nhau chỉ một lần, mà chỉ nể trọng người luyện một cú đá 10.000 lần.",
        hanziOrOriginal: "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.",
        context: "Tương ứng với Lời khuyên số 38: 'Mười miếng thuần thục hơn một trăm miếng chưa tập kỹ'."
      },
      {
        quote: "Sự đơn giản là khoảng cách ngắn nhất giữa hai điểm. Để chấm dứt chuỗi đòn của đối thủ, cách hiệu quả là đánh chặn ngay tại gốc phát đòn.",
        hanziOrOriginal: "Simplicity is the shortest distance between two points. Intercept the attack at its root.",
        context: "Được PGS.TS Nguyễn Mạnh Nhâm dẫn giải ở Khẩu quyết số 4 & số 7 về cơ chế Triệt Quyền Đạo."
      }
    ],
    pgvxCorrelation: "Được PGS.TS Nguyễn Mạnh Nhâm dẫn giải trong giáo trình gốc khi phân tích Khẩu quyết số 6 (Tâm Ứng Thủ) và Khẩu quyết số 7 (Quyền như lưu thủy, triệt đòn tại gốc).",
    historicalContext: "Học trò xuất sắc của Diệp Vấn và Hoàng Thuần Lương, người đã đem triết lý võ đạo phương Đông chấn hưng toàn cầu.",
    sharedPrinciples: [
      "Tâm Ứng Thủ: Đòn đánh ra tùy thuộc đối phương ra đòn gì",
      "Đơn giản tạo nên hiệu quả",
      "Đánh vào gốc xuất đòn để triệt tiêu chuỗi đòn của địch"
    ]
  },
  {
    id: "chu-shong-tin",
    masterName: "Đại Sư Chu Thượng Đồng (Chu Shong Tin)",
    hanziName: "徐尚田 • Chu Shong Tin",
    branch: "Chu Shong Tin Ving Tsun (Ý Niệm Lực & Cấu Trúc Khớp)",
    period: "1933 – 2014",
    portraitUrl: "/assets/images/masters/chu_shong_tin.jpg",
    coreDoctrine: "Ý Niệm Lực (Nim Lik) & Giải Phóng Cơ Bắp",
    famousQuote: "Ý niệm lực không sinh ra từ cơ bắp gồng cứng, mà phát xuất từ sự thả lỏng tuyệt đối và cấu trúc xương khớp chuẩn xác. Tiểu Niệm Đầu chứa đựng trọn vẹn các nguyên lý cốt lõi của Vịnh Xuân.",
    famousQuotes: [
      {
        quote: "Ý niệm lực (Niệm lực) không sinh ra từ cơ bắp gồng cứng, mà phát xuất từ sự thả lỏng sâu và cấu trúc xương khớp chuẩn xác. Tiểu Niệm Đầu chứa đựng trọn vẹn các nguyên lý cốt lõi của Vịnh Xuân.",
        hanziOrOriginal: "念力非由拙力而生，乃源於鬆沉與骨骼結構之準確。",
        context: "Giải phóng sự co cứng của cơ vai để truyền lực thuần khiết qua khung xương."
      },
      {
        quote: "Khi bạn ngừng cố gắng dùng sức mạnh cơ bắp để thắng đối phương, lúc đó bạn mới bắt đầu cảm nhận được kình lực thực sự của Vịnh Xuân.",
        hanziOrOriginal: "When you stop trying to use muscular force, true internal structure begins to work.",
        context: "Nguyên tắc 'Buông lỏng cơ bắp, chỉ khi chạm mới xuất lực' trong Phật Gia Vịnh Xuân."
      },
      {
        quote: "Cột sống thẳng tự nhiên và sự xoay chuyển tinh tế của khớp hông là trục phát động cho mọi đòn tay mà không cần lấy đà.",
        hanziOrOriginal: "An aligned spine and subtle pelvic rotation generate power without wind-up.",
        context: "Vai trò của trục cột sống và xoay eo hông trong phát lực cự ly gần."
      },
      {
        quote: "Đứng tập Tiểu Niệm Đầu mỗi ngày chính là học cách lắng nghe từng khớp xương và hơi thở của chính mình.",
        hanziOrOriginal: "Practicing Siu Nim Tau daily is learning to listen to every joint and breath within yourself.",
        context: "Thiền động trong bài quyền căn bản đầu tiên của hệ thống Vịnh Xuân."
      }
    ],
    pgvxCorrelation: "Tương thích 100% với lời răn dạy số 19 và số 30 của PGS.TS Nguyễn Mạnh Nhâm: 'Thả lỏng cơ bắp, phối hợp với thở, chỉ khi chạm vào đối thủ mới xuất lực thốn kình'.",
    historicalContext: "Đệ tử thứ ba của Diệp Vấn tại Hồng Kông, người dành hơn 60 năm nghiên cứu chiều sâu cơ sinh học và kình lực nội tại của bài Tiểu Niệm Đầu.",
    sharedPrinciples: [
      "Cấu trúc xương khớp tối ưu truyền lực từ mặt đất",
      "Thả lỏng tuyệt đối để khí huyết và kình lực thông suốt",
      "Tiểu Niệm Đầu là gốc rễ của mọi công phu"
    ]
  },
  {
    id: "leung-ting",
    masterName: "Đại Sư Lương Đỉnh (Leung Ting)",
    hanziName: "梁挺 • Leung Ting",
    branch: "WingTsun Quốc Tế (IWTA)",
    period: "1947 – nay",
    portraitUrl: "/assets/images/masters/leung_ting.jpg",
    coreDoctrine: "4 Nguyên Lý Lực Kinh Điển (4 Principles of Force)",
    famousQuote: "Hãy biến cơ thể thành một chiếc nêm thép: Đường thông suốt thì tiến, có tiếp xúc thì dính, gặp lực lớn hơn thì nhường bước, đối phương rút lui thì bám sát theo sau.",
    famousQuotes: [
      {
        quote: "Hãy biến hai tay thành một chiếc nêm: Đường thông suốt thì tiến thẳng, có tiếp xúc thì dính sát, gặp lực lớn hơn thì nhường chuyển góc, đối phương rút lui thì bám theo sau.",
        hanziOrOriginal: "If the way is free, go forward; if there is contact, stick; if the force is greater, yield; if the opponent retreats, follow.",
        context: "Bốn nguyên lý vận động kinh điển tương ứng với khẩu quyết 'Lai lưu khứ tống, thoát thủ trực xông'."
      },
      {
        quote: "Bốn nguyên lý sức mạnh của Vịnh Xuân: Giải phóng khỏi sức cứng của chính mình, giải phóng khỏi sức ép của đối phương, mượn lực đối phương và cộng hưởng toàn thân.",
        hanziOrOriginal: "Free yourself from your own force, free yourself from the opponent's force, use the opponent's force, and add your own.",
        context: "Hệ thống hóa nguyên lý tá lực đả lực thành phương pháp sư phạm hiện đại."
      },
      {
        quote: "Trong cự ly cận chiến dưới một cánh tay, xúc giác tại cổ tay và khuỷu tay phản ứng nhanh gấp nhiều lần mắt nhìn.",
        hanziOrOriginal: "At close range, tactile reflexes at the wrist and elbow respond far faster than visual perception.",
        context: "Cơ sở khoa học của bài tập tay dính Chi Sao / Niêm Thủ."
      },
      {
        quote: "Vịnh Xuân được thiết kế để người có thể hình nhỏ nhắn vẫn có thể tự vệ hiệu quả nhờ cấu trúc góc độ và bước chuyển thân.",
        hanziOrOriginal: "WingTsun is designed so a smaller person can defend effectively through geometry and footwork.",
        context: "Tinh thần lấy kỹ thuật và góc độ bù đắp chênh lệch thể lực."
      }
    ],
    pgvxCorrelation: "Tương đồng chặt chẽ với Khẩu quyết 'Lai lưu khứ tống, thoát thủ trực xông' và nguyên lý 'Dĩ công vi thủ' trong giáo trình của PGS.TS Nguyễn Mạnh Nhâm.",
    historicalContext: "Người hệ thống hóa Vịnh Xuân thành giáo trình sư phạm phương Tây khoa học, đưa môn võ phổ biến rộng rãi khắp Châu Âu và Châu Mỹ.",
    sharedPrinciples: [
      "1. Tiến lên khi đường thông suốt",
      "2. Dính sát khi có tiếp xúc",
      "3. Nhường bước trước lực lớn hơn",
      "4. Theo sát khi đối phương rút lui"
    ]
  },
  {
    id: "moy-yat",
    masterName: "Đại Sư Mai Dật (Moy Yat)",
    hanziName: "梅逸 • Moy Yat",
    branch: "Moy Yat Ving Tsun (New York / Hoa Kỳ)",
    period: "1938 – 2001",
    coreDoctrine: "Ving Tsun Kuen Kuit — Khẩu Quyết Khắc Đá & Lối Sống Chánh Niệm",
    famousQuote: "Ving Tsun không phải là một lối đánh nhau; đó là một phong cách tư duy và một lối sống. Khẩu quyết không phải để đọc trên môi, mà để khắc tạc vào xương tủy qua hàng ngàn giờ đứng tấn.",
    famousQuotes: [
      {
        quote: "Vịnh Xuân không đơn thuần là một kỹ thuật chiến đấu; đó là một phong cách tư duy điềm tĩnh và một lối sống hài hòa.",
        hanziOrOriginal: "Ving Tsun is not merely a fighting technique; it is a way of thinking and a way of life.",
        context: "Đưa nguyên lý trung dung và tiết kiệm năng lượng của Vịnh Xuân vào đời sống hàng ngày."
      },
      {
        quote: "Khẩu quyết võ học (Kuen Kuit) không phải để ngâm nga trên đầu môi, mà để chiêm nghiệm qua hàng ngàn giờ đứng tấn và niêm thủ.",
        hanziOrOriginal: "拳訣非止於口誦，乃由千百時辰之站樁與黐手體悟所得。",
        context: "Ý nghĩa của bộ ấn đá khắc khẩu quyết Vịnh Xuân (Ving Tsun Kuen Kuit) của Mai Dật."
      },
      {
        quote: "Người thầy truyền cho trò cái khuôn chuẩn mực (Quy củ); người trò phải tự mình thổi hồn sống vào cái khuôn ấy bằng sự kiên trì.",
        hanziOrOriginal: "師傳規矩，徒化生機。",
        context: "Tương ứng với khẩu quyết 'Đánh đòn hẹp, ngắn, theo khuôn' rồi tiến tới biến hóa linh hoạt."
      },
      {
        quote: "Giữ được sự thư thái của đôi vai khi đang chịu áp lực chính là thước đo bản lĩnh của người tập Vịnh Xuân.",
        hanziOrOriginal: "Keeping your shoulders relaxed under pressure is the true measure of Ving Tsun kung fu.",
        context: "Trầm vai坠chỏ (Trầm kiên trụy chửu) giúp giữ tâm bình khí hòa."
      }
    ],
    pgvxCorrelation: "Khớp với phương châm 'Tu thân dưỡng tính, dĩ võ nhập đạo' của Phật Gia Vịnh Xuân: Coi võ thuật là phương tiện tu dưỡng nhân cách cao đẹp.",
    historicalContext: "Đệ tử chân truyền của Diệp Vấn tại Hồng Kông, người di cư sang New York năm 1973 khai mở hệ thống Moy Yat Ving Tsun lừng danh và khắc bộ khẩu quyết Vịnh Xuân lên đá hoa cương.",
    sharedPrinciples: [
      "Khẩu quyết truyền thừa định hình tư duy chiến lược",
      "Võ đạo gắn liền với nghệ thuật và văn hóa",
      "Tâm pháp chỉ đạo thủ pháp"
    ]
  },
  {
    id: "nam-thieu-lam-zen",
    masterName: "Thiền Tông Nam Thiếu Lâm & Ngũ Mai Sư Thái",
    hanziName: "五枚師太 • Ng Mui",
    branch: "Cội Nguồn Tâm Pháp Phật Gia Vịnh Xuân",
    period: "Khởi nguồn thế kỷ 17 – 18",
    coreDoctrine: "Tâm Vô Ngã (Mushin) & Dĩ Nhu Khắc Cương",
    famousQuote: "Quyền bản vô quyền, ý bản vô ý. Vô quyền vô ý thị chân quyền. Dĩ đoản chế trường, dĩ nhu khắc cương, từ bi hộ sinh.",
    famousQuotes: [
      {
        quote: "Quyền bản vô quyền, ý bản vô ý. Vô quyền vô ý thị chân quyền. Dĩ đoản chế trường, dĩ nhu khắc cương, từ bi hộ sinh.",
        hanziOrOriginal: "拳本無拳，意本無意。無拳無意是真拳。以短制長，以柔克剛，慈悲護生。",
        context: "Tâm pháp Thiền tông: không chấp trước vào chiêu thức cố định, ứng biến tự nhiên để bảo vệ sự sống."
      },
      {
        quote: "Xà linh hoạt uốn lượn giữ trục, Hạc tĩnh tại vung cánh hộ trung tâm; hợp cả linh hoạt của Xà và định tĩnh của Hạc mà thành quyền pháp.",
        hanziOrOriginal: "蛇靈活守軸，鶴靜定護中；蛇鶴相合，剛柔並濟。",
        context: "Điển tích Ngũ Mai Sư Thái quan sát Xà và Hạc giao đấu để sáng tạo nguyên lý Vịnh Xuân."
      },
      {
        quote: "Tâm như minh kính đài, vật đến thì chiếu soi rõ ràng, vật đi thì mặt gương lại phẳng lặng không lưu dấu vết.",
        hanziOrOriginal: "心如明鏡臺，物來則照，物去則空。",
        context: "Trạng thái tâm bình tĩnh không xao động trước đòn công của đối phương."
      },
      {
        quote: "Hơi thở điều hòa thì khí tụ Đan Điền; tâm niệm từ bi thì võ thuật trở thành phương tiện hộ thân và cứu người.",
        hanziOrOriginal: "息調則氣聚丹田；心懷慈悲，武術乃護身濟人之法。",
        context: "Bản sắc Phật Gia trong truyền thống Vịnh Xuân Quyền."
      }
    ],
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
// 4. KHO 72 CÂU CHÂM NGÔN & YẾU QUYẾT TRUYỀN ĐỜI (22 CÂU SÁCH GỐC + 50 CÂU THẾ GIỚI)
// ==============================================================================
export const MARTIAL_WISDOM_QUOTES: MartialWisdomQuote[] = [
  // --- PGS.TS Y KHOA NGUYỄN MẠNH NHÂM (8 CÂU) ---
  {
    id: "q01",
    quote: "Phương pháp tốt nhất trước một cuộc chiến là tránh cuộc chiến.",
    author: "PGS.TS Nguyễn Mạnh Nhâm",
    roleOrSource: "Giáo trình Phật Gia Vịnh Xuân • Lời khuyên số 3",
    category: "mindset",
    context: "Ý nghĩa cao nhất của võ đạo là bảo tồn sinh mạng và sự hòa hiếu giữa con người.",
    authorImage: "/assets/images/historical/pgs_ts_nguyen_manh_nham_3.jpg",
    imageCaption: "PGS.TS Nguyễn Mạnh Nhâm (1932 – nay)"
  },
  {
    id: "q02",
    quote: "Nếu chỉ dựa vào sức mạnh cơ bắp, ta ắt sẽ gặp người mạnh hơn ta.",
    author: "PGS.TS Nguyễn Mạnh Nhâm",
    roleOrSource: "Giáo trình Phật Gia Vịnh Xuân • Lời khuyên số 16",
    category: "strategy",
    context: "Nhu thuận và trí tuệ là vũ khí trường tồn trước sự biến đổi thể chất theo tuổi tác.",
    authorImage: "/assets/images/historical/pgs_ts_nguyen_manh_nham_3.jpg",
    imageCaption: "PGS.TS Nguyễn Mạnh Nhâm"
  },
  {
    id: "q03",
    quote: "Quyền như lưu thủy — Tự nó tìm ra những kẽ hở để tràn vào cho đến khi lấp đầy.",
    author: "PGS.TS Nguyễn Mạnh Nhâm",
    roleOrSource: "Chương III: Khẩu Quyết Truyền Thừa (Trang PDF 165)",
    category: "strategy",
    context: "Đòn đánh liên hoàn không đứt đoạn như dòng nước chảy tràn ngập trận địa.",
    authorImage: "/assets/images/historical/pgs_ts_nguyen_manh_nham_3.jpg",
    imageCaption: "PGS.TS Nguyễn Mạnh Nhâm"
  },
  {
    id: "q04",
    quote: "Tập linh giác đối luyện phải thân thiện. Đánh trúng bạn không phải là thắng; bị bạn đánh trúng không phải là thua.",
    author: "PGS.TS Nguyễn Mạnh Nhâm",
    roleOrSource: "Giáo trình Phật Gia Vịnh Xuân • Lời khuyên số 41",
    category: "mindset",
    context: "Đồng môn giúp nhau tôi luyện sự nhạy bén xúc giác, buông bỏ bản ngã và thói háo thắng.",
    authorImage: "/assets/images/historical/pgs_ts_nguyen_manh_nham_3.jpg",
    imageCaption: "PGS.TS Nguyễn Mạnh Nhâm"
  },
  {
    id: "q05",
    quote: "Cổ tay phải vừa dẻo, vừa khéo, vừa nhanh, vừa mạnh.",
    author: "PGS.TS Nguyễn Mạnh Nhâm",
    roleOrSource: "Giáo trình Phật Gia Vịnh Xuân • Lời khuyên số 8",
    category: "strategy",
    context: "Cổ tay là khớp then chốt cuối cùng điều phối hóa giải và phát kình lực thấu triệt.",
    authorImage: "/assets/images/historical/pgs_ts_nguyen_manh_nham_3.jpg",
    imageCaption: "PGS.TS Nguyễn Mạnh Nhâm"
  },
  {
    id: "q06",
    quote: "Mười miếng thuần thục hơn một trăm miếng chưa tập kỹ. Không phải số năm tập mà số giờ tập luyện đúng phương pháp mới đáng kể.",
    author: "PGS.TS Nguyễn Mạnh Nhâm",
    roleOrSource: "Giáo trình Phật Gia Vịnh Xuân • Lời khuyên số 13 & 38",
    category: "philosophy",
    context: "Tinh thâm hơn bác tạp; rèn luyện đúng phương pháp tạo nên phản xạ chuẩn xác.",
    authorImage: "/assets/images/historical/pgs_ts_nguyen_manh_nham_3.jpg",
    imageCaption: "PGS.TS Nguyễn Mạnh Nhâm"
  },
  {
    id: "q07",
    quote: "Thời điểm (Timing) và khoảng cách (Distance) là hai điều cực kỳ quan trọng trong thực chiến.",
    author: "PGS.TS Nguyễn Mạnh Nhâm",
    roleOrSource: "Giáo trình Phật Gia Vịnh Xuân • Lời khuyên số 9",
    category: "strategy",
    context: "Căn bản của cận chiến: đúng khoảng cách mới phát lực, đúng thời điểm mới điểm trúng.",
    authorImage: "/assets/images/historical/pgs_ts_nguyen_manh_nham_3.jpg",
    imageCaption: "PGS.TS Nguyễn Mạnh Nhâm"
  },
  {
    id: "q08",
    quote: "Khi luyện các thế võ cần luôn chú ý: Phối hợp với thở — Quay người — Thả lỏng cơ bắp.",
    author: "PGS.TS Nguyễn Mạnh Nhâm",
    roleOrSource: "Giáo trình Phật Gia Vịnh Xuân • Lời khuyên số 19",
    category: "health",
    context: "Sự kết hợp hài hòa giữa y học dưỡng sinh và cơ chế vận động cận chiến.",
    authorImage: "/assets/images/historical/pgs_ts_nguyen_manh_nham_3.jpg",
    imageCaption: "PGS.TS Nguyễn Mạnh Nhâm"
  },

  // --- THS.DS NGUYỄN DUY THỨC (4 CÂU) ---
  {
    id: "q09",
    quote: "Khí công và nội công không phải là phép màu siêu nhiên, mà là sự hòa hợp giữa hơi thở cơ hoành bốn thì, hệ kinh lạc và tâm ý tĩnh tại.",
    author: "ThS.DS Nguyễn Duy Thức",
    roleOrSource: "Chương IV: Nội Công & Khí Công (Đồng tác giả giáo trình 2012)",
    category: "health",
    context: "Khoa học hóa phương pháp luyện thở Đan Điền và vận khí dưỡng sinh của Phật Gia Vịnh Xuân.",
    authorImage: "/assets/images/historical/ths_nguyen_duy_thuc.jpg",
    imageCaption: "ThS.DS Nguyễn Duy Thức"
  },
  {
    id: "q10",
    quote: "Ngũ Hình Quyền gắn liền mật thiết với Ngũ Hành và Ngũ Tạng: Long thuộc Thổ chủ Tỳ, Hổ thuộc Kim chủ Phế, Báo thuộc Mộc chủ Can, Xà thuộc Thủy chủ Thận, Hạc thuộc Hỏa chủ Tâm.",
    author: "ThS.DS Nguyễn Duy Thức",
    roleOrSource: "Giới thiệu Ngũ Hình Quyền • Trang PDF 118–119",
    category: "health",
    context: "Mỗi bài hình quyền vừa rèn luyện một loại kình lực đặc thù vừa bồi bổ tạng phủ tương ứng.",
    authorImage: "/assets/images/historical/ths_nguyen_duy_thuc.jpg",
    imageCaption: "ThS.DS Nguyễn Duy Thức"
  },
  {
    id: "q11",
    quote: "Trong luyện tập binh khí (Bát Trảm Đao, Lục Điểm Bán Côn, Liễu Diệp Kiếm), vũ khí chính là cánh tay nối dài; mọi nguyên lý giữ trung lộ và linh giác cổ tay đều nhất quán với quyền tay không.",
    author: "ThS.DS Nguyễn Duy Thức",
    roleOrSource: "Chương V: Vũ Khí Phật Gia Vịnh Xuân • Trang PDF 188",
    category: "strategy",
    context: "Sự thống nhất giữa quyền thuật tay không và binh khí trong hệ thống Phật Gia Vịnh Xuân.",
    authorImage: "/assets/images/historical/ths_nguyen_duy_thuc.jpg",
    imageCaption: "ThS.DS Nguyễn Duy Thức"
  },
  {
    id: "q12",
    quote: "Nên bắt đầu tập chậm để cảm nhận đúng từng góc khớp và nhịp thở, rồi mới nhanh dần như người tập đàn hay tập gõ phím.",
    author: "ThS.DS Nguyễn Duy Thức",
    roleOrSource: "Giáo trình Phật Gia Vịnh Xuân • Phương pháp huấn luyện",
    category: "mindset",
    context: "Hình thành phản xạ thần kinh – cơ bắp chính xác tuyệt đối trước khi tăng tốc độ.",
    authorImage: "/assets/images/historical/ths_nguyen_duy_thuc.jpg",
    imageCaption: "ThS.DS Nguyễn Duy Thức"
  },

  // --- SƯ TỔ NGUYỄN TẾ CÔNG (4 CÂU) ---
  {
    id: "q13",
    quote: "Đạo Vịnh Xuân lấy nhu thuận làm gốc, lấy thẳng thắn làm đường, lấy trung dung làm đích. Đứng tấn như tùng bách ngút ngàn, xuất thủ như mây bay nước chảy.",
    hanNom: "詠春之道 以柔順為本 以正直為徑 以中庸為的",
    author: "Sư Tổ Nguyễn Tế Công",
    roleOrSource: "Tông chỉ môn phái • Khởi nguồn truyền thừa Việt Nam (1939)",
    category: "lineage",
    context: "Cội nguồn tinh hoa truyền thừa từ Sư Tổ Nguyễn Tế Công khi truyền dạy tại Việt Nam năm 1939.",
    authorImage: "/assets/images/historical/nguyen_te_cong.png",
    imageCaption: "Sư Tổ Nguyễn Tế Công (1877 – 1959)"
  },
  {
    id: "q14",
    quote: "Không lấy sức thô chọi sức thô; gặp cứng thì hóa nhu, gặp kẽ hở thì tiến thẳng, mượn sức của đối phương để chế ngự đối phương.",
    hanNom: "不以拙力鬥拙力 遇剛則化柔 逢隙則直進",
    author: "Sư Tổ Nguyễn Tế Công",
    roleOrSource: "Tâm pháp Dĩ Nhu Khắc Cương • Vịnh Xuân Việt Nam",
    category: "strategy",
    context: "Nguyên tắc hóa giải lực trực diện bằng sự mềm mại và chuyển góc biên thân.",
    authorImage: "/assets/images/historical/nguyen_te_cong.png",
    imageCaption: "Sư Tổ Nguyễn Tế Công (1877 – 1959)"
  },
  {
    id: "q15",
    quote: "Hai tay phối hợp như đôi rồng quấn quýt: một tay hộ trung lộ thì tay kia đã xuất đòn, không bao giờ để một tay đứng chết.",
    hanNom: "雙手配合如雙龍並進 一手護中 一手即發",
    author: "Sư Tổ Nguyễn Tế Công",
    roleOrSource: "Khẩu quyết Song Thủ Phối Hợp • Phật Sơn – Hà Nội",
    category: "strategy",
    context: "Song thủ tương liên, vừa đỡ vừa đánh trong cùng một nhịp chuyển thân.",
    authorImage: "/assets/images/historical/nguyen_te_cong.png",
    imageCaption: "Sư Tổ Nguyễn Tế Công (1877 – 1959)"
  },
  {
    id: "q16",
    quote: "Người luyện võ trước phải giữ lễ nghĩa khiêm nhường; tâm có tĩnh thì thần mới sáng, thần có sáng thì linh giác mới nhạy bén.",
    hanNom: "習武先守謙禮 心靜則神明 神明則靈覺敏",
    author: "Sư Tổ Nguyễn Tế Công",
    roleOrSource: "Lời dạy môn đồ • Truyền thống Tôn Sư Trọng Đạo",
    category: "mindset",
    context: "Lấy đạo đức khiêm cung và sự tĩnh tâm làm gốc cho cảm nhận linh giác.",
    authorImage: "/assets/images/historical/nguyen_te_cong.png",
    imageCaption: "Sư Tổ Nguyễn Tế Công (1877 – 1959)"
  },

  // --- CỐ VÕ SƯ TRẦN THÚC TIỂN (4 CÂU) ---
  {
    id: "q17",
    quote: "Chân như rễ cây cắm sâu vào lòng đất. Chân không vững thì đòn đánh chỉ là sức hời hợt bên ngoài.",
    author: "Cố Võ Sư Trần Thúc Tiển",
    roleOrSource: "Tâm pháp Kiềm Dương Tấn • Phật Gia Vịnh Xuân Hà Nội",
    category: "philosophy",
    context: "Lực do địa khởi: không có gốc rễ vững chãi thì mọi chiêu thức tay đều thiếu uy lực.",
    authorImage: "/assets/images/historical/tran_thuc_tien.png",
    imageCaption: "Cố Võ Sư Trần Thúc Tiển (1911 – 1980)"
  },
  {
    id: "q18",
    quote: "Đấm không cần gồng cứng cơ bắp, hãy để kình lực từ mặt đất qua chân, hông, vai rồi phát ra ở điểm đích khi chạm mục tiêu.",
    author: "Cố Võ Sư Trần Thúc Tiển",
    roleOrSource: "Yếu lĩnh phát Thốn Kình • Phật Gia Vịnh Xuân",
    category: "strategy",
    context: "Truyền lực toàn thân theo chuỗi động học từ huyệt Dũng Tuyền lên tới nắm quyền.",
    authorImage: "/assets/images/historical/tran_thuc_tien.png",
    imageCaption: "Cố Võ Sư Trần Thúc Tiển (1911 – 1980)"
  },
  {
    id: "q19",
    quote: "Tay người tập Vịnh Xuân phải như chiếc lò xo hay thanh cật tre: khi chịu ép thì uốn dẻo tích lực, khi thoát ép là bật thẳng ra phía trước tức thì.",
    author: "Cố Võ Sư Trần Thúc Tiển",
    roleOrSource: "Yếu lĩnh Thoát Thủ Trực Xông • Phật Gia Vịnh Xuân",
    category: "strategy",
    context: "Độ đàn hồi sinh học của gân khớp giúp chuyển hóa lực ép của địch thành đòn phản kích.",
    authorImage: "/assets/images/historical/tran_thuc_tien.png",
    imageCaption: "Cố Võ Sư Trần Thúc Tiển (1911 – 1980)"
  },
  {
    id: "q20",
    quote: "Luyện công phu không có đường tắt; mỗi ngày đứng tấn, xoay cổ tay và chạm mộc nhân trong sự điềm tĩnh mới kết tinh thành nội lực bền vững.",
    author: "Cố Võ Sư Trần Thúc Tiển",
    roleOrSource: "Lời răn dạy môn đồ tại Hà Nội",
    category: "mindset",
    context: "Đề cao sự kiên trì khổ luyện cơ bản công và mộc nhân trang hàng ngày.",
    authorImage: "/assets/images/historical/tran_thuc_tien.png",
    imageCaption: "Cố Võ Sư Trần Thúc Tiển (1911 – 1980)"
  },

  // --- ĐẠI DANH Y LƯƠNG TÁN (4 CÂU) ---
  {
    id: "q21",
    quote: "Tập Vịnh Xuân giả, tiên tri trung tuyến, thứ minh thính kình, chung quy ư vô tướng. Đoản quyền đoản cước, thốn kình nhập cốt.",
    hanNom: "習詠春者 先知中線 次明聽勁 終歸於無相",
    author: "Đại Danh Y Lương Tán (Leung Jan)",
    roleOrSource: "Tổ sư Vịnh Xuân Phật Sơn (1826 – 1901)",
    category: "lineage",
    context: "Ba bậc thăng tiến của Vịnh Xuân: hiểu trung tuyến, thông thính kình, và đạt tới vô tướng tự nhiên.",
    authorImage: "/assets/images/masters/leung_jan.jpg",
    imageCaption: "Đại Danh Y Lương Tán (1826 – 1901)"
  },
  {
    id: "q22",
    quote: "Y lý cùng quyền lý vốn đồng một gốc: bắt mạch cần tĩnh tâm để nghe khí huyết; niêm thủ cần tĩnh ý để nghe hướng lực hư thực của đối phương.",
    hanNom: "醫理與拳理同源 診脈貴靜 黐手貴靜",
    author: "Đại Danh Y Lương Tán (Leung Jan)",
    roleOrSource: "Vĩnh An Đường • Phật Sơn Y Võ Lục",
    category: "health",
    context: "Sự tương thông giữa nghệ thuật bắt mạch Đông y và cảm nhận lực trong Niêm Thủ.",
    authorImage: "/assets/images/masters/leung_jan.jpg",
    imageCaption: "Đại Danh Y Lương Tán (1826 – 1901)"
  },
  {
    id: "q23",
    quote: "Kiều bất ly trung, chỏ bất ly hiếp; lấy bốn lạng đẩy ngàn cân, lấy đường thẳng ngắn chế ngự đường vòng rộng.",
    hanNom: "橋不離中 肘不離脅 四兩撥千斤",
    author: "Đại Danh Y Lương Tán (Leung Jan)",
    roleOrSource: "Khẩu quyết Đoản Kiều Cận Chiến • Phật Sơn",
    category: "strategy",
    context: "Cẳng tay luôn giữ trung lộ, cùi chỏ che sườn tạo khung đỡ vững chãi.",
    authorImage: "/assets/images/masters/leung_jan.jpg",
    imageCaption: "Đại Danh Y Lương Tán (1826 – 1901)"
  },
  {
    id: "q24",
    quote: "Bất cầu hoa lệ, duy cầu chân thực; một đòn giản dị đúng thời cơ quý hơn muôn vàn thế múa phô trương.",
    hanNom: "不求華麗 唯求真實",
    author: "Đại Danh Y Lương Tán (Leung Jan)",
    roleOrSource: "Tông chỉ Vịnh Xuân Phật Sơn",
    category: "philosophy",
    context: "Trọng tính thực chất và hiệu quả tự vệ thay vì hình thức biểu diễn.",
    authorImage: "/assets/images/masters/leung_jan.jpg",
    imageCaption: "Đại Danh Y Lương Tán (1826 – 1901)"
  },

  // --- ĐẠI SƯ NGUYỄN KỲ SƠN (4 CÂU) ---
  {
    id: "q25",
    quote: "Trầm kiều áp hạ, vấn lộ thông tâm. Bất tranh tiên phát, hậu phát tiên chí. Thập nhị tán thức, biến hóa vô cùng.",
    hanNom: "沉橋壓下 問路通心 不爭先發 後發先至",
    author: "Đại Sư Nguyễn Kỳ Sơn (Yuen Kay Shan)",
    roleOrSource: "Phật Sơn Vịnh Xuân Tam Hùng (1889 – 1956)",
    category: "lineage",
    context: "Nhấn chìm cầu tay đối phương, hỏi đường thẳng vào trung lộ, phát động sau nhưng tới đích trước.",
    authorImage: "/assets/images/masters/yuen_kay_shan.jpg",
    imageCaption: "Đại Sư Nguyễn Kỳ Sơn (1889 – 1956)"
  },
  {
    id: "q26",
    quote: "Kiều thủ tương giao, thính kình biện hướng; đối phương vừa chuyển ý là cẳng tay ta đã cảm nhận và dẫn hóa.",
    hanNom: "橋手相交 聽勁辨向",
    author: "Đại Sư Nguyễn Kỳ Sơn (Yuen Kay Shan)",
    roleOrSource: "Tâm pháp Niêm Kiều • Gia tộc họ Nguyễn Phật Sơn",
    category: "strategy",
    context: "Luyện độ nhạy của hai cẳng tay để đọc ý định của đối thủ ngay tại điểm chạm.",
    authorImage: "/assets/images/masters/yuen_kay_shan.jpg",
    imageCaption: "Đại Sư Nguyễn Kỳ Sơn (1889 – 1956)"
  },
  {
    id: "q27",
    quote: "Tiểu Niệm Đầu luyện khí quy nguyên, Tầm Kiều luyện bộ pháp chuyển thân, Tiêu Chỉ phát kình đầu ngón.",
    hanNom: "小念頭練氣歸元 尋橋練步法轉身 標指發勁於指端",
    author: "Đại Sư Nguyễn Kỳ Sơn (Yuen Kay Shan)",
    roleOrSource: "Khẩu quyết Tam Đại Sáo Lộ Vịnh Xuân",
    category: "philosophy",
    context: "Mối liên hệ hữu cơ giữa 3 bài quyền nền tảng của hệ thống Vịnh Xuân.",
    authorImage: "/assets/images/masters/yuen_kay_shan.jpg",
    imageCaption: "Đại Sư Nguyễn Kỳ Sơn (1889 – 1956)"
  },
  {
    id: "q28",
    quote: "Cổ tay mềm như bông nhưng trục chỏ trầm nặng như sắt; chưa chạm thì buông thư, vừa chạm đã thấu lực.",
    hanNom: "腕柔如棉 肘沉如鐵 未觸則鬆 一觸即發",
    author: "Đại Sư Nguyễn Kỳ Sơn (Yuen Kay Shan)",
    roleOrSource: "Yếu quyết Trầm Kiều Thốn Kình",
    category: "strategy",
    context: "Sự kết hợp giữa cổ tay linh hoạt và khuỷu tay trầm vững trong cận chiến.",
    authorImage: "/assets/images/masters/yuen_kay_shan.jpg",
    imageCaption: "Đại Sư Nguyễn Kỳ Sơn (1889 – 1956)"
  },

  // --- ĐẠI SƯ DIỆP VẤN (4 CÂU) ---
  {
    id: "q29",
    quote: "Thủ trung dụng trung, độc thủ bất hành, song thủ thành công. Võ thuật không phải để chứng minh bạn mạnh hơn người khác, mà là để tu dưỡng nhân cách và bảo vệ người yếu thế.",
    hanNom: "守中用中 獨手不行 雙手成功",
    author: "Đại Sư Diệp Vấn (Ip Man)",
    roleOrSource: "Tông sư Vịnh Xuân Hồng Kông (1893 – 1972)",
    category: "lineage",
    context: "Giữ trung tuyến, phối hợp hai tay đồng thời và đặt võ đức lên hàng đầu.",
    authorImage: "/assets/images/masters/ip_man.jpg",
    imageCaption: "Đại Sư Diệp Vấn (1893 – 1972)"
  },
  {
    id: "q30",
    quote: "Không sợ đối phương hùng mạnh, chỉ sợ chính mình đánh mất trung tâm tuyến và sự điềm tĩnh.",
    hanNom: "不怕對手強 只怕失中線與平常心",
    author: "Đại Sư Diệp Vấn (Ip Man)",
    roleOrSource: "Khẩu quyết Diệp Vấn Vịnh Xuân",
    category: "mindset",
    context: "Khi giữ vững trục Tý Ngọ và tâm bình tĩnh, mọi đòn công mạnh bạo đều có thể hóa giải.",
    authorImage: "/assets/images/masters/ip_man.jpg",
    imageCaption: "Đại Sư Diệp Vấn (1893 – 1972)"
  },
  {
    id: "q31",
    quote: "Kiều lai kiều thượng quá, vô kiều tự tạo kiều; hữu thân đả thân, vô thân đả ảnh.",
    hanNom: "橋來橋上過 無橋自造橋",
    author: "Đại Sư Diệp Vấn (Ip Man)",
    roleOrSource: "Khẩu quyết Tầm Kiều & Đáp Kiều",
    category: "strategy",
    context: "Tay đối phương đưa tới thì nương theo cầu tay họ mà tiến vào; chưa có tiếp xúc thì chủ động tạo cầu.",
    authorImage: "/assets/images/masters/ip_man.jpg",
    imageCaption: "Đại Sư Diệp Vấn (1893 – 1972)"
  },
  {
    id: "q32",
    quote: "Niệm đầu chính, chung thân chính; ý niệm ban đầu mà ngay ngắn chuẩn mực thì cả hành trình võ đạo đều vững vàng.",
    hanNom: "念頭正 終身正",
    author: "Đại Sư Diệp Vấn (Ip Man)",
    roleOrSource: "Triết lý bài Tiểu Niệm Đầu (Siu Nim Tau)",
    category: "philosophy",
    context: "Giữ tâm niệm chánh trực và cấu trúc chuẩn xác ngay từ những bài tập cơ bản đầu tiên.",
    authorImage: "/assets/images/masters/ip_man.jpg",
    imageCaption: "Đại Sư Diệp Vấn (1893 – 1972)"
  },

  // --- VÕ SƯ HOÀNG THUẦN LƯƠNG (4 CÂU) ---
  {
    id: "q33",
    quote: "Mắt là kẻ lừa dối; chỉ có cẳng tay xúc giác mới không bao giờ nói dối.",
    author: "Võ Sư Hoàng Thuần Lương (Wong Shun Leung)",
    roleOrSource: "Tinh hoa Vịnh Xuân thực chiến (1935 – 1997)",
    category: "mindset",
    context: "Phản xạ thị giác qua vỏ não luôn có độ trễ; xúc giác niêm thủ truyền thẳng qua cung phản xạ tủy sống.",
    authorImage: "/assets/images/masters/wong_shun_leung.jpg",
    imageCaption: "Võ Sư Hoàng Thuần Lương (1935 – 1997)"
  },
  {
    id: "q34",
    quote: "Đừng bao giờ đuổi theo bàn tay của đối phương; hãy đánh thẳng vào trung tâm cơ thể họ, tay họ khắc phải tự quay về cứu.",
    author: "Võ Sư Hoàng Thuần Lương (Wong Shun Leung)",
    roleOrSource: "Nguyên lý Cận Chiến Khoa Học (WSL Ving Tsun)",
    category: "strategy",
    context: "Đuổi bắt tay đối phương sẽ dễ rơi vào đòn giả; tấn công thẳng trung lộ buộc đối phương phải bị động phòng thủ.",
    authorImage: "/assets/images/masters/wong_shun_leung.jpg",
    imageCaption: "Võ Sư Hoàng Thuần Lương (1935 – 1997)"
  },
  {
    id: "q35",
    quote: "Học Vịnh Xuân không phải là chất chồng thêm những động tác phức tạp, mà là gọt bỏ dần những phản xạ thừa thãi cho đến khi chỉ còn lại chuyển động ngắn gọn, hợp lý.",
    author: "Võ Sư Hoàng Thuần Lương (Wong Shun Leung)",
    roleOrSource: "Triết lý Tối Giản Cơ Học • Hồng Kông",
    category: "philosophy",
    context: "Loại bỏ mọi động tác thừa để đạt tốc độ và hiệu suất năng lượng cao.",
    authorImage: "/assets/images/masters/wong_shun_leung.jpg",
    imageCaption: "Võ Sư Hoàng Thuần Lương (1935 – 1997)"
  },
  {
    id: "q36",
    quote: "Vịnh Xuân không phải là một điệu múa để trình diễn; nó là một hệ thống hình học và cơ học thực tế phục vụ tự vệ.",
    author: "Võ Sư Hoàng Thuần Lương (Wong Shun Leung)",
    roleOrSource: "Khảo cứu đối chiếu Vịnh Xuân quốc tế",
    category: "philosophy",
    context: "Tương đồng hoàn toàn với Lời khuyên số 15 & 20 trong giáo trình Phật Gia Vịnh Xuân.",
    authorImage: "/assets/images/masters/wong_shun_leung.jpg",
    imageCaption: "Võ Sư Hoàng Thuần Lương (1935 – 1997)"
  },

  // --- LÝ TIỂU LONG (4 CÂU) ---
  {
    id: "q37",
    quote: "Tôi không biết sẽ ra đòn gì trước khi chiến đấu. Đòn tôi đánh tùy thuộc vào phía địch thủ ra đòn thế nào.",
    author: "Lý Tiểu Long (Bruce Lee)",
    roleOrSource: "Trích dẫn giáo trình Phật Gia Vịnh Xuân (Trang PDF 164)",
    category: "mindset",
    context: "Tâm Ứng Thủ: không định sẵn chiêu thức cứng nhắc, phản ứng tự nhiên theo biến hóa của đối thủ.",
    authorImage: "/assets/images/masters/bruce_lee.jpg",
    imageCaption: "Lý Tiểu Long (1940 – 1973)"
  },
  {
    id: "q38",
    quote: "Hãy vô hình vô tướng như nước. Nước đổ vào cốc thì thành cốc, đổ vào ấm thì thành ấm. Nước có thể chảy trôi êm ả, nhưng cũng có thể phá vỡ đá tảng.",
    hanNom: "Be Water, My Friend • 拳如流水",
    author: "Lý Tiểu Long (Bruce Lee)",
    roleOrSource: "Triết lý Lưu Thủy & Thích Ứng",
    category: "philosophy",
    context: "Sự mềm dẻo thích ứng không giới hạn, khởi nguồn từ khẩu quyết 'Quyền như lưu thủy' của Vịnh Xuân.",
    authorImage: "/assets/images/masters/bruce_lee.jpg",
    imageCaption: "Lý Tiểu Long (1940 – 1973)"
  },
  {
    id: "q39",
    quote: "Tôi không sợ người luyện 10.000 cú đá khác nhau chỉ một lần, mà chỉ nể trọng người luyện một cú đá 10.000 lần.",
    author: "Lý Tiểu Long (Bruce Lee)",
    roleOrSource: "Phương châm khổ luyện tinh thâm",
    category: "mindset",
    context: "Sự thuần thục tuyệt đối của một kỹ thuật cốt lõi tạo nên sức mạnh thực chiến.",
    authorImage: "/assets/images/masters/bruce_lee.jpg",
    imageCaption: "Lý Tiểu Long (1940 – 1973)"
  },
  {
    id: "q40",
    quote: "Sự đơn giản là khoảng cách ngắn nhất giữa hai điểm. Để chấm dứt chuỗi đòn của đối thủ, cách hiệu quả là đánh chặn ngay tại gốc phát đòn.",
    author: "Lý Tiểu Long (Bruce Lee)",
    roleOrSource: "Đối chiếu Khẩu quyết số 4 & số 7 • Sách gốc trang 163–165",
    category: "strategy",
    context: "Cơ sở hình thành Triệt Quyền Đạo từ nguyên lý đánh đường thẳng và triệt đòn tại gốc của Vịnh Xuân.",
    authorImage: "/assets/images/masters/bruce_lee.jpg",
    imageCaption: "Lý Tiểu Long (1940 – 1973)"
  },

  // --- ĐẠI SƯ CHU THƯỢNG ĐỒNG (4 CÂU) ---
  {
    id: "q41",
    quote: "Ý niệm lực không sinh ra từ cơ bắp gồng cứng, mà phát xuất từ sự thả lỏng sâu và cấu trúc xương khớp chuẩn xác.",
    hanNom: "念力非由拙力而生 乃源於鬆沉與骨骼結構",
    author: "Đại Sư Chu Thượng Đồng (Chu Shong Tin)",
    roleOrSource: "Tông sư Ý Niệm Lực Vịnh Xuân (1933 – 2014)",
    category: "lineage",
    context: "Buông lỏng cơ vai và cánh tay để toàn bộ trọng lượng và lực phản hồi từ mặt đất truyền qua khung xương.",
    authorImage: "/assets/images/masters/chu_shong_tin.jpg",
    imageCaption: "Đại Sư Chu Thượng Đồng (1933 – 2014)"
  },
  {
    id: "q42",
    quote: "Khi bạn ngừng cố gắng dùng sức mạnh cơ bắp để thắng đối phương, lúc đó bạn mới bắt đầu cảm nhận được kình lực thực sự của Vịnh Xuân.",
    author: "Đại Sư Chu Thượng Đồng (Chu Shong Tin)",
    roleOrSource: "Khảo cứu cơ sinh học Tiểu Niệm Đầu",
    category: "philosophy",
    context: "Sự chuyển hóa từ lực cơ bắp thô (Chuyết lực) sang kình lực đàn hồi của gân khớp.",
    authorImage: "/assets/images/masters/chu_shong_tin.jpg",
    imageCaption: "Đại Sư Chu Thượng Đồng (1933 – 2014)"
  },
  {
    id: "q43",
    quote: "Cột sống thẳng tự nhiên và sự xoay chuyển tinh tế của khớp hông là trục phát động cho mọi đòn tay mà không cần lấy đà.",
    author: "Đại Sư Chu Thượng Đồng (Chu Shong Tin)",
    roleOrSource: "Nguyên lý phát lực cự ly gần (Thốn Kình)",
    category: "strategy",
    context: "Giữ trục cột sống thẳng đứng ('Không ngả đầu ra trước') để xoay chuyển linh hoạt.",
    authorImage: "/assets/images/masters/chu_shong_tin.jpg",
    imageCaption: "Đại Sư Chu Thượng Đồng (1933 – 2014)"
  },
  {
    id: "q44",
    quote: "Đứng tập Tiểu Niệm Đầu mỗi ngày chính là học cách lắng nghe từng khớp xương và hơi thở của chính mình.",
    author: "Đại Sư Chu Thượng Đồng (Chu Shong Tin)",
    roleOrSource: "Tâm pháp Thiền Động Tiểu Niệm Đầu",
    category: "health",
    context: "Sự tĩnh lặng bên trong giúp khai mở cảm nhận cơ thể và điều hòa khí huyết.",
    authorImage: "/assets/images/masters/chu_shong_tin.jpg",
    imageCaption: "Đại Sư Chu Thượng Đồng (1933 – 2014)"
  },

  // --- ĐẠI SƯ LƯƠNG ĐỈNH (4 CÂU) ---
  {
    id: "q45",
    quote: "Hãy biến cơ thể thành một chiếc nêm: Đường thông suốt thì tiến, có tiếp xúc thì dính, gặp lực lớn hơn thì nhường bước, đối phương rút lui thì bám sát theo sau.",
    author: "Đại Sư Lương Đỉnh (Leung Ting)",
    roleOrSource: "4 Nguyên Lý Lực Vịnh Xuân Quốc Tế (IWTA)",
    category: "strategy",
    context: "Tương ứng chặt chẽ với khẩu quyết 'Lai lưu khứ tống, thoát thủ trực xông' và Lời khuyên số 29.",
    authorImage: "/assets/images/masters/leung_ting.jpg",
    imageCaption: "Đại Sư Lương Đỉnh (1947 – nay)"
  },
  {
    id: "q46",
    quote: "Bốn nguyên lý sức mạnh của Vịnh Xuân: Giải phóng khỏi sức cứng của chính mình, giải phóng khỏi sức ép của đối phương, mượn lực đối phương và cộng hưởng toàn thân.",
    author: "Đại Sư Lương Đỉnh (Leung Ting)",
    roleOrSource: "Giáo trình WingTsun Quốc Tế",
    category: "philosophy",
    context: "Giải thích rõ ràng cách mượn lực đối phương thông qua sự thả lỏng và góc độ cẳng tay.",
    authorImage: "/assets/images/masters/leung_ting.jpg",
    imageCaption: "Đại Sư Lương Đỉnh (1947 – nay)"
  },
  {
    id: "q47",
    quote: "Trong cự ly cận chiến dưới một cánh tay, xúc giác tại cổ tay và khuỷu tay phản ứng nhanh gấp nhiều lần mắt nhìn.",
    author: "Đại Sư Lương Đỉnh (Leung Ting)",
    roleOrSource: "Nghiên cứu phản xạ Chi Sao (Niêm Thủ)",
    category: "strategy",
    context: "Tương đồng với lý giải sinh lý thần kinh trong Chương II: Linh Giác của PGS.TS Nguyễn Mạnh Nhâm.",
    authorImage: "/assets/images/masters/leung_ting.jpg",
    imageCaption: "Đại Sư Lương Đỉnh (1947 – nay)"
  },
  {
    id: "q48",
    quote: "Vịnh Xuân được thiết kế để người có thể hình nhỏ nhắn vẫn có thể tự vệ hiệu quả nhờ cấu trúc góc độ và bước chuyển thân.",
    author: "Đại Sư Lương Đỉnh (Leung Ting)",
    roleOrSource: "Khảo cứu nguồn gốc Vịnh Xuân",
    category: "lineage",
    context: "Phù hợp với Lời khuyên số 31: 'Phật Gia Vịnh Xuân là võ của nữ nên không đối lực'.",
    authorImage: "/assets/images/masters/leung_ting.jpg",
    imageCaption: "Đại Sư Lương Đỉnh (1947 – nay)"
  },

  // --- ĐẠI SƯ MAI DẬT (4 CÂU) ---
  {
    id: "q49",
    quote: "Vịnh Xuân không đơn thuần là một kỹ thuật tự vệ; đó là một phong cách tư duy điềm tĩnh và một lối sống chánh niệm.",
    author: "Đại Sư Mai Dật (Moy Yat)",
    roleOrSource: "Moy Yat Ving Tsun (1938 – 2001)",
    category: "philosophy",
    context: "Ứng dụng sự giản dị, điềm tĩnh và giữ trung tâm của Vịnh Xuân vào cuộc sống.",
  },
  {
    id: "q50",
    quote: "Khẩu quyết võ học không phải để đọc trên đầu môi, mà để khắc tạc vào thân tâm qua hàng ngàn giờ đứng tấn và niêm thủ.",
    hanNom: "拳訣非止於口誦 乃由站樁與黐手體悟所得",
    author: "Đại Sư Mai Dật (Moy Yat)",
    roleOrSource: "Ving Tsun Kuen Kuit • Ấn Đá Khẩu Quyết",
    category: "mindset",
    context: "Lý thuyết phải đi đôi với sự thể nghiệm thực tế qua mồ hôi trên sàn tập.",
  },
  {
    id: "q51",
    quote: "Người thầy truyền cho trò cái khuôn chuẩn mực (Quy củ); người trò phải tự mình thổi hồn sống vào cái khuôn ấy bằng sự kiên trì.",
    hanNom: "師傳規矩 徒化生機",
    author: "Đại Sư Mai Dật (Moy Yat)",
    roleOrSource: "Triết lý Sư Đạo Vịnh Xuân",
    category: "lineage",
    context: "Tập đúng khuôn khổ cơ bản trước khi bước sang giai đoạn ứng biến linh hoạt.",
  },
  {
    id: "q52",
    quote: "Giữ được sự thư thái của đôi vai khi đang chịu áp lực chính là thước đo bản lĩnh của người tập Vịnh Xuân.",
    author: "Đại Sư Mai Dật (Moy Yat)",
    roleOrSource: "Yếu lĩnh Trầm Kiên Trụy Chửu (Hạ vai chìm chỏ)",
    category: "mindset",
    context: "Vai thả lỏng giúp hơi thở không bị bốc lên ngực và giữ vững trọng tâm hạ bàn.",
  },

  // --- NGŨ MAI SƯ THÁI & THIỀN TÔNG NAM THIẾU LÂM (4 CÂU) ---
  {
    id: "q53",
    quote: "Quyền bản vô quyền, ý bản vô ý. Vô quyền vô ý thị chân quyền. Dĩ đoản chế trường, dĩ nhu khắc cương, từ bi hộ sinh.",
    hanNom: "拳本無拳 意本無意 無拳無意是真拳",
    author: "Ngũ Mai Sư Thái • Thiền Tông Nam Thiếu Lâm",
    roleOrSource: "Cội nguồn tâm pháp Phật Gia Vịnh Xuân",
    category: "philosophy",
    context: "Khi công phu đạt độ chín muồi, đòn thế phát ra tự nhiên không còn dấu vết gượng gạo.",
  },
  {
    id: "q54",
    quote: "Xà linh hoạt uốn lượn giữ trục, Hạc tĩnh tại vung cánh hộ trung tâm; hợp cả linh hoạt của Xà và định tĩnh của Hạc mà thành quyền pháp.",
    hanNom: "蛇鶴相合 剛柔並濟",
    author: "Ngũ Mai Sư Thái • Thiền Tông Nam Thiếu Lâm",
    roleOrSource: "Điển tích sáng lập Vịnh Xuân Quyền • Chương I sách gốc",
    category: "lineage",
    context: "Sự kết hợp giữa tính nhu dẻo liên hoàn của Xà và sự trầm tĩnh chuẩn xác của Hạc.",
  },
  {
    id: "q55",
    quote: "Tâm như minh kính đài, vật đến thì chiếu soi rõ ràng, vật đi thì mặt gương lại phẳng lặng không lưu dấu vết.",
    hanNom: "心如明鏡臺 物來則照 物去則空",
    author: "Ngũ Mai Sư Thái • Thiền Tông Nam Thiếu Lâm",
    roleOrSource: "Thiền Võ Nhất Như • Phật Gia Vịnh Xuân",
    category: "mindset",
    context: "Tâm bình tĩnh phản ánh trung thực mọi chuyển động của đối phương mà không bị hoảng loạn.",
  },
  {
    id: "q56",
    quote: "Hơi thở điều hòa thì khí tụ Đan Điền; tâm niệm từ bi thì võ thuật trở thành phương tiện hộ thân và giúp đời.",
    hanNom: "息調則氣聚丹田 心懷慈悲武以護生",
    author: "Ngũ Mai Sư Thái • Thiền Tông Nam Thiếu Lâm",
    roleOrSource: "Tông chỉ Phật Gia • Từ Bi Hộ Sinh",
    category: "health",
    context: "Gắn kết thiền định, hơi thở dưỡng sinh và tinh thần nhân ái của nhà Phật.",
  },

  // --- KHẨU QUYẾT TRUYỀN THỪA & VÕ ĐƯỜNG PHẬT GIA VỊNH XUÂN (10 CÂU) ---
  {
    id: "q57",
    quote: "Lai lưu khứ tống, thoát thủ trực xông.",
    hanNom: "來留去送 甩手直衝",
    author: "Khẩu quyết truyền thừa",
    roleOrSource: "Chương III: Khẩu Quyết Truyền Thừa (Khẩu quyết số 2)",
    category: "strategy",
    context: "Địch đến tiếp nhận dính sát, địch rút theo tiễn, buông rời lập tức phóng quyền."
  },
  {
    id: "q58",
    quote: "Đả quyền bất luyện công, đáo lão nhất trường không. Lực bất đả quyền, quyền bất đả công.",
    hanNom: "打拳不練功 到老一場空 • 力不打拳 拳不打功",
    author: "Ngạn ngữ võ học cổ kim",
    roleOrSource: "Chương IV: Nội Công Dưỡng Sinh (Trang PDF 166)",
    category: "philosophy",
    context: "Luyện chiêu thức mà không rèn nội lực và khí công thì về già chỉ là con số không."
  },
  {
    id: "q59",
    quote: "Khoảng cách ngắn nhất giữa hai điểm là đường thẳng. Lưỡng điểm chi gian, trực tuyến tối giản.",
    hanNom: "兩點之間 直線最短",
    author: "Khẩu quyết hình học võ học",
    roleOrSource: "Chương III: Khẩu Quyết Truyền Thừa (Khẩu quyết số 4)",
    category: "strategy",
    context: "Tối ưu hóa năng lượng và thời gian di chuyển để chiếm thế tiên cơ."
  },
  {
    id: "q60",
    quote: "Chỉ khi chạm vào đối thủ mới xuất lực. Trên đường đi cơ bắp phải buông lỏng hoàn toàn.",
    author: "Khẩu quyết Thốn Kình",
    roleOrSource: "Giáo trình Phật Gia Vịnh Xuân • Lời khuyên số 30",
    category: "strategy",
    context: "Tiết kiệm sức lực để đòn đánh đạt gia tốc cao khi tiếp xúc mục tiêu."
  },
  {
    id: "q61",
    quote: "Khuỷu tay luôn ở trung lộ (chéo áo) — Giữ cùi chỏ là giữ vững cổng trung tâm.",
    author: "Khẩu quyết thủ chỏ",
    roleOrSource: "Giáo trình Phật Gia Vịnh Xuân • Lời khuyên số 17",
    category: "strategy",
    context: "Chỏ khép chặt bảo vệ mạng sườn, làm điểm tựa vững chãi phóng kình."
  },
  {
    id: "q62",
    quote: "Trong cái động có cái tĩnh sâu xa; trong cái mềm mại như nước ẩn chứa kình lực xuyên thấu thâm sâu.",
    author: "Võ Sư Lê Đắc Kiên • Võ Đường Huỳnh Thúc Kháng",
    roleOrSource: "Tông chỉ môn phái • Thiền võ nhất như",
    category: "philosophy",
    context: "Giữ tâm tĩnh lặng và tập trung trong từng động tác.",
    authorImage: "/assets/images/instructors/vo_su_le_dac_kien_chao.jpg",
    imageCaption: "Thế chào Bão Quyền Lễ • Võ đường Huỳnh Thúc Kháng"
  },
  {
    id: "q63",
    quote: "Đến thì mở lòng đón nhận, đi thì nhẹ nhàng đưa tiễn; buông lỏng toàn thân để mượn lực đả lực. Cốt lõi của Vịnh Xuân không phải là thắng người bằng sức mạnh cơ bắp, mà là chiến thắng chính sự nóng vội và bản ngã của bản thân.",
    author: "Võ Sư Lê Đắc Kiên • Võ Đường Huỳnh Thúc Kháng",
    roleOrSource: "Phật Gia Vịnh Xuân • Nguyên lý Lai Lưu Khứ Tống",
    category: "philosophy",
    context: "Lai lưu khứ tống: hóa giải xung đột bằng tâm thế mềm mại, nhu hòa mà kiên định.",
    authorImage: "/assets/images/instructors/vo_su_le_dac_kien.jpg",
    imageCaption: "Võ đường Huỳnh Thúc Kháng"
  },
  {
    id: "q64",
    quote: "Võ đạo khởi đầu từ cái chào cung kính và kết thúc cũng bằng sự tôn kính. Bão quyền lễ không chỉ là nghi thức, mà là tâm thế khiêm nhường, lấy tĩnh chế động trước mọi nghịch cảnh.",
    author: "Võ Sư Lê Đắc Kiên • Võ Đường Huỳnh Thúc Kháng",
    roleOrSource: "Phật Gia Vịnh Xuân • Nghi thức Bão Quyền Lễ",
    category: "mindset",
    context: "Nghi lễ bão quyền biểu thị tay trái dựng chưởng là đức nhân từ, tay phải nắm quyền là ý chí dũng mãnh, lấy nhân chế cương.",
    authorImage: "/assets/images/instructors/vo_su_le_dac_kien_chao.jpg",
    imageCaption: "Thế chào Bão Quyền Lễ • Võ đường Huỳnh Thúc Kháng"
  },
  {
    id: "q65",
    quote: "Học Vịnh Xuân là học cách lắng nghe. Lắng nghe hơi thở, lắng nghe kình lực của đối phương qua từng điểm tiếp xúc xúc giác, và trên hết là lắng nghe chính tâm mình.",
    author: "Võ Sư Lê Đắc Kiên • Võ Đường Huỳnh Thúc Kháng",
    roleOrSource: "Phật Gia Vịnh Xuân • Phương pháp Niêm Thủ",
    category: "strategy",
    context: "Thính kình và linh giác: cảm nhận lực và phương hướng bằng điểm tiếp xúc.",
    authorImage: "/assets/images/instructors/vo_su_le_dac_kien.jpg",
    imageCaption: "Võ đường Huỳnh Thúc Kháng"
  },
  {
    id: "q66",
    quote: "Kiến thức thì số hoá nhưng luyện tập vẫn là thật và cần thực hành hàng ngày.",
    author: "Võ Đường Huỳnh Thúc Kháng",
    roleOrSource: "Nhắc nhở người tập • Phật Gia Vịnh Xuân",
    category: "mindset",
    context: "Kiến thức có thể tra cứu trên hệ thống số hóa, nhưng sự thuần thục bắt buộc phải qua tập luyện thực tế mỗi ngày.",
    authorImage: "/assets/images/instructors/vo_su_le_dac_kien.jpg",
    imageCaption: "Võ đường Huỳnh Thúc Kháng"
  },
  {
    id: "q67",
    quote: "Niệm đầu bất chính, chung thân bất chính — Ý nghĩ ban đầu không chuẩn xác thì suốt đời không chuẩn xác. Tập chậm tối thiểu 30–45 phút, bàn tay mở ra từ quyền thành chưởng xòe chầm chậm như cánh hoa nở.",
    hanNom: "念頭不正 終身不正",
    author: "Khẩu quyết truyền thừa",
    roleOrSource: "Chương I • Bài Tiểu Niệm Đầu (Trang PDF 36)",
    category: "philosophy",
    context: "Yếu lĩnh cốt tử khi tập Tiểu Niệm Đầu: thả lỏng toàn thân, ý thủ đan điền, tưởng tượng mỗi động tác thắng một trở lực rất lớn nhưng cơ bắp vẫn nới lỏng."
  },
  {
    id: "q68",
    quote: "Vấn lộ Tầm Kiều thủ tiên hành — Dò đường tìm cầu tay đi trước. Tiêu Chỉ bất xuất môn — Dĩ công vi thủ, dĩ đả vi tiêu, chuyển bại thành thắng trong tình thế hiểm nghèo.",
    hanNom: "問路尋橋手先行 • 標指不出門",
    author: "Khẩu quyết truyền thừa",
    roleOrSource: "Chương I • Bài Tầm Kiều & Bài Tiêu Chỉ (Trang PDF 43)",
    category: "strategy",
    context: "Hai khẩu quyết kinh điển định hình sự khác biệt giữa tìm cầu tiếp cận (Tầm Kiều) và phóng chỉ thoát hiểm vào yếu huyệt (Tiêu Chỉ)."
  },
  {
    id: "q69",
    quote: "Thực hiện chuẩn được Than, Bàng, Phục thủ thì mọi người phải nghe theo. Tôn chỉ Miên Quyền: Mềm – Dẻo – Khéo – Nhanh – Mạnh.",
    hanNom: "攤膀伏手 • 綿拳柔巧快勁",
    author: "Khẩu quyết truyền thừa",
    roleOrSource: "Chương I • Đặc Điểm & Các Đòn Căn Bản (Trang PDF 26 & 31)",
    category: "strategy",
    context: "Ba thủ pháp hạt nhân (Tam chủng thủ: Than, Bàng, Phục) kết hợp Lục hợp nội ngoại tạo nên sức mạnh mềm dẻo mà uy lực của Phật Gia Vịnh Xuân."
  },
  {
    id: "q70",
    quote: "Quyền đả ngọa ngưu chi địa — Vô thất quy, vô loạn đả, quyền như lưu thủy, ý đáo.",
    hanNom: "拳打臥牛之地 • 無失規無亂打",
    author: "Khẩu quyết truyền thừa",
    roleOrSource: "Chương I • Nguyên Lý Chiến Đấu (Trang PDF 26–27)",
    category: "strategy",
    context: "Chỉ cần phạm vi hẹp bằng chỗ con trâu nằm là đủ dụng võ; đòn đánh không mất khuôn phép, không đánh loạn, liên hoàn như nước chảy."
  },
  {
    id: "q71",
    quote: "Dĩ thần dẫn khí: Thần dẫn Khí, Khí dẫn Huyết, Khí là vua của Lực. Thông tức bất thống, thống tức bất thông. Tránh Tứ đại kỵ (Thô Phù, Táo Tiến, Tham Đắc, Việt Liệp), giữ Tam điều cần (Tiệm tiến, Hằng tâm, Tiết dục).",
    hanNom: "以神引氣 • 通則不痛 痛則不通",
    author: "Khẩu quyết truyền thừa",
    roleOrSource: "Chương IV • Nội Công Dưỡng Sinh (Trang PDF 167–178)",
    category: "health",
    context: "Nguyên lý rèn luyện Nội công Thở 4 Thì và Khí công Dưỡng sinh trị bệnh trong Phật Gia Vịnh Xuân."
  },
  {
    id: "q72",
    quote: "Đơn đao khán thủ, song đao khán bộ; Đao như mãnh hổ, vũ khí càng ngắn càng nguy hiểm. Lục điểm bán côn so côn dính côn; Liễu diệp kiếm thân hợp nhất.",
    hanNom: "單刀看手雙刀看步 • 刀如猛虎 • 劍身合一",
    author: "Khẩu quyết truyền thừa",
    roleOrSource: "Chương V • Vũ Khí: Đao, Côn, Kiếm (Trang PDF 185–190)",
    category: "strategy",
    context: "Khẩu quyết tam đại binh khí Phật Gia Vịnh Xuân: Bát Trảm Đao, Lục Điểm Bán Côn và Liễu Diệp Kiếm."
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

/** Lấy ngẫu nhiên một câu quote (tránh lặp lại câu hiện tại nếu có thể) */
export function getRandomMartialQuote(excludeId?: string): MartialWisdomQuote {
  const pool = excludeId
    ? MARTIAL_WISDOM_QUOTES.filter((q) => q.id !== excludeId)
    : MARTIAL_WISDOM_QUOTES;
  const list = pool.length > 0 ? pool : MARTIAL_WISDOM_QUOTES;
  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

/** Lấy danh sách lời khuyên theo danh mục */
export function getCounselsByCategory(category: "all" | "ethics" | "training" | "combat" | "health"): MasterCounsel[] {
  if (category === "all") return MASTER_COUNSELS_42;
  return MASTER_COUNSELS_42.filter((c) => c.category === category);
}
