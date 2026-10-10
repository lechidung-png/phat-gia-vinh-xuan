// DỮ LIỆU CHUẨN XÁC: LỜI NÓI ĐẦU & TRIẾT LÝ YẾU CHỈ 18 BÀI QUYỀN CHÍNH TÔNG
// Căn cứ: Giáo trình Phật Gia Vịnh Xuân Quyền (GS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức)

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
  globalBridge?: {
    master: string;
    doctrine: string;
    correlation: string;
  };
}

export const FORMS_18_INTRO: Record<string, FormIntroduction> = {
  "bai-07": {
    formId: "bai-07",
    title: "Tiểu Niệm Đầu",
    hanziName: "小念頭 • Siu Nim Tau",
    category: "Tam Đại Quyền",
    categoryOrder: 1,
    formOrder: 1,
    meaning: "Ý niệm nhỏ ban đầu — Nền móng cội nguồn của toàn bộ hệ thống Phật Gia Vịnh Xuân",
    philosophy: "Định tâm thủ trung, quy nguyên bế khí. Không cầu chiêu thức hoa mỹ, toàn bộ bài quyền tập trung rèn luyện cảm giác thăng bằng của Nhị Tự Kiềm Dương Tấn, định hình trục Tý Ngọ Tuyến và cùi chỏ thủ trung lộ.",
    principles: [
      "Thủ trung dụng trung: Mọi đường phát lực đều xuất phát từ hoặc bảo vệ đường trung tuyến.",
      "Khép cùi chỏ, chìm vai hạ hông: Cùi chỏ cách ngực một nắm tay, khóa kín mạn sườn và hạ bộ.",
      "Ý thủ đan điền: Thở sâu bằng bụng dưới, dùng ý dẫn khí, dĩ nhu khắc cương."
    ],
    keyMantra: "Ý thủ đan điền • Trực chỉ trung tuyến • Nhu trung hữu cương",
    introQuote: "Tiểu Niệm Đầu là bài quyền cơ bản nhất nhưng cũng là bài quan trọng nhất của Phật Gia Vịnh Xuân. Toàn bộ các thủ pháp cốt lõi: Than Thủ, Bàng Thủ, Phục Thủ, Nhật Tự Quyền đều được định hình chuẩn mực tại đây.",
    globalBridge: {
      master: "Đại Sư Diệp Vấn (Ip Man)",
      doctrine: "Thủ Trung Dụng Trung & Độc Thủ Bất Hành",
      correlation: "Diệp Vấn coi Tiểu Niệm Đầu là bài học nhập môn và cũng là bài học suốt đời để định hình cấu trúc cánh tay. Tương thích 100% với trục Tý Ngọ Tuyến và Nhị Tự Kiềm Dương Tấn của Phật Gia Vịnh Xuân."
    }
  },
  "bai-09": {
    formId: "bai-09",
    title: "Tầm Kiều",
    hanziName: "尋橋 • Chum Kiu",
    category: "Tam Đại Quyền",
    categoryOrder: 1,
    formOrder: 2,
    demonstrator: "HLV Nguyễn Trọng Sơn",
    meaning: "Tìm cầu, bắc cầu — Kết nối và thiết lập tiếp xúc xúc giác với đối phương",
    philosophy: "Tầm kiều là tìm cầu nối giữa mình và đối thủ ('Tầm kiều tầm sư, tầm hữu, tầm đối phương'). Tay đưa ra trước (vấn thủ) như để hỏi đường (vấn lộ). Nhờ tiếp xúc mà thấu hiểu sức mạnh (thính kình) và hướng đánh của địch, từ đó tay chân tự động xuất đòn hóa giải.",
    principles: [
      "Xước mã đạp bộ: Di chuyển theo kiểu leo núi, chân trước tiến kéo chân sau theo, trọng tâm 7/3 giữ ở chân sau.",
      "Xoay người biên thân: Vận dụng tối đa các góc xoay thân để hóa giải thế tấn công trực diện và tạo góc phản đòn hiểm hóc.",
      "Bàng Thủ hóa giải: Bàng Thủ là chiêu thức chủ đạo, dùng để lướt trôi lực của đối phương và nhập nội cận chiến."
    ],
    keyMantra: "Vấn lộ Tầm Kiều thủ tiên hành • Thính kình hóa giải • Xước mã nhập nội",
    introQuote: "Tầm Kiều di chuyển theo kiểu leo núi (đạp bộ)... Tay thường đưa ra trước (vấn thủ) như để hỏi đường (vấn lộ). Do tay đưa ra trước mà ta hiểu được nhiều yếu tố của đối phương như sức mạnh (thính kình), hướng đánh, nhiều khi biết được chiêu đó là hư hay thực. Bàng Thủ là chiêu thức được dùng nhiều nhất, thiên về phòng ngự.",
    globalBridge: {
      master: "Võ Sư Hoàng Thuần Lương (Wong Shun Leung)",
      doctrine: "Xúc Giác Niêm Thủ & Chiếm Góc 45°",
      correlation: "Hoàng Thuần Lương coi Tầm Kiều là chiếc chìa khóa mở cánh cửa cận chiến bằng cách dùng cẳng tay bắc cầu hỏi đường (vấn thủ), khớp hoàn toàn với nguyên lý nghe lực (thính kình) của GS.TS Nguyễn Mạnh Nhâm."
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
    meaning: "Ngón tay phóng sức — Kỹ pháp cứu nguy và phản kích chớp nhoáng",
    philosophy: "Phóng sức ra qua những đầu ngón tay — kỹ pháp chuyên sâu môn phái ('Tiêu Chỉ bất xuất môn'). Chuyển từ thế phòng ngự sang phản công chủ động: 'Dĩ công vi thủ, dĩ đả vi tiêu'. Dùng bàn tay mở và ngón tay xỉa xuyên thấu để đạt tầm với tối ưu và tiếp cận điểm hiểm.",
    principles: [
      "Mở bàn tay, phát lực đầu ngón: Không nắm quyền mà dùng ngón tay xỉa xuyên thấu (chỉ pháp), gia tăng tầm với và độ hiểm sát thương.",
      "Hoành thoái, mã chéo: Bộ pháp chuyển đổi đột ngột ở cự ly cực ngắn, thoát khỏi vòng vây hoặc góc kẹt.",
      "Phục hồi trung tuyến: Khi bị phá vỡ cấu trúc phòng thủ, dùng chỉ pháp và chỏ pháp xoay chuyển tình thế tức thì."
    ],
    keyMantra: "Tiêu Chỉ bất xuất môn • Dĩ công vi thủ • Dĩ đả vi tiêu",
    introQuote: "Tiêu Chỉ được coi là cao hơn Tầm Kiều, chủ yếu dùng bàn tay và các ngón tay... Theo tên thì đây là 'phóng sức ra qua những đầu ngón tay', một kỹ pháp đặc sắc của VXQ. Chủ trương tấn công là chủ yếu (dĩ công vi thủ, dĩ đả vi tiêu).",
    globalBridge: {
      master: "Lý Tiểu Long (Bruce Lee)",
      doctrine: "Triệt Quyền Đạo — Dĩ Công Vi Thủ & Finger Jab",
      correlation: "Lý Tiểu Long phát triển đòn xỉa ngón tay (Finger Jab) và nguyên lý 'Dĩ công vi thủ' từ chính bài Tiêu Chỉ của Vịnh Xuân Quyền, khớp trực tiếp với trích dẫn của GS.TS Nguyễn Mạnh Nhâm tại trang 164."
    }
  },
  "bai-12": {
    formId: "bai-12",
    title: "108 Tại Chỗ — Đơn Luyện",
    hanziName: "一百零八式 (原地單練)",
    category: "108 Thế Liên Hoàn",
    categoryOrder: 2,
    formOrder: 4,
    demonstrator: "HLV Phạm Đức Hùng",
    meaning: "108 Chiêu thức liên hoàn tại chỗ — Khung xương kỹ thuật cơ bản nhất của môn phái",
    philosophy: "Đây là bài quyền cơ bản và toàn diện nhất. Luyện tập tại chỗ trên thế Tấn Kiềm Dương giúp định hình chuẩn xác các góc độ công thủ, khắc sâu phản xạ cơ bắp và rèn luyện tính liên hoàn của 108 thế võ chân truyền.",
    principles: [
      "Định hình góc độ chuẩn xác: Khớp vai, cùi chỏ và cổ tay di chuyển đúng tọa độ trung tuyến.",
      "Thế tấn vững như bàn thạch: Hai chân khép hẹp, gối kiềm chặt che hạ bộ, xoay eo sinh kình.",
      "Liên hoàn không ngắt quãng: Đòn trước vừa chạm đích, đòn sau lập tức tiếp nối liên hoàn."
    ],
    keyMantra: "Tấn kiềm sinh kình • Thủ pháp liên hoàn • Bách bát quy nhất",
    introQuote: "Đây là bài võ cơ bản nhất, thường gọi tắt là Bài 108. Theo truyền thống thì bài có 108 thế, bao gồm toàn bộ các đòn thế công thủ nền tảng của Phật Gia Vịnh Xuân."
  },
  "bai-13": {
    formId: "bai-13",
    title: "108 Tại Chỗ — Đối Luyện",
    hanziName: "一百零八式 (原地對練)",
    category: "108 Thế Liên Hoàn",
    categoryOrder: 2,
    formOrder: 5,
    meaning: "Đối kháng 108 thế tại cự ly cố định — Luyện thính kình và cảm nhận lực tiếp xúc thực tế",
    philosophy: "Đưa 108 thế vào bài tập thực hành 2 người tại chỗ. Học cách hóa giải lực đánh trực diện của đối phương mà không cần lùi bước, ứng dụng triệt để nguyên lý 'Mượn lực đả lực' (tá lực sinh kình).",
    principles: [
      "Duy trì tiếp xúc da thịt: Luôn giữ tay tiếp chạm đối thủ để lắng nghe hướng lực và ý đồ.",
      "Hóa giải trước, phản đòn sau: Dùng nêm góc chệch hướng đòn đánh của bạn tập, lập tức chèn đòn vào sơ hở.",
      "Hòa ái tương trợ: Kiểm soát kình lực chuẩn xác để đảm bảo an toàn tuyệt đối cho bạn tập."
    ],
    keyMantra: "Tá lực đả lực • Lai lưu khứ tống • Thính kình nhập nội",
    introQuote: "Đối luyện 108 thế tại chỗ giúp môn sinh chuyển hóa các thế võ đơn lẻ thành phản xạ sinh tồn khi đối mặt với lực đánh thực tế từ bạn tập."
  },
  "bai-14": {
    formId: "bai-14",
    title: "108 Tiến Lùi — Đơn Luyện",
    hanziName: "一百零八式 (進退單練)",
    category: "108 Thế Liên Hoàn",
    categoryOrder: 2,
    formOrder: 6,
    meaning: "108 Thế vận động tiến thoái — Kết hợp bộ pháp di chuyển linh hoạt và quyền pháp",
    philosophy: "Giải phóng thân pháp khỏi vị trí đứng yên. Môn sinh học cách tiến, lùi, chuyển tấn, xoay góc 45 độ trong khi vẫn duy trì sự ổn định của trục Tý Ngọ Tuyến và uy lực của đòn đánh.",
    principles: [
      "Thân động tấn bất động: Chân bước dứt khoát nhưng trọng tâm luôn vững vàng, không chao đảo nhấp nhô.",
      "Tiến thoái đồng trục: Tiến bước chèn ép không gian, thoái bộ né đòn và giữ cự ly phản kích.",
      "Điều tức nhịp nhàng: Thở ra khi tiến công phát kình, hít sâu khi thu thế chuyển tấn."
    ],
    keyMantra: "Tiến thoái như phong • Trọng tâm bất động • Khí trầm đan điền",
    introQuote: "Bài 108 tiến lùi phát triển khả năng vận động không gian của người tập, đưa các thế võ vào trạng thái động uyển chuyển."
  },
  "bai-15": {
    formId: "bai-15",
    title: "108 Tiến Lùi — Đối Luyện",
    hanziName: "一百零八式 (進退對練)",
    category: "108 Thế Liên Hoàn",
    categoryOrder: 2,
    formOrder: 7,
    meaning: "Đối kháng di động toàn diện 108 thế — Ứng dụng thực chiến tay không",
    philosophy: "Mô phỏng tình huống chiến đấu thực tế nhất của bài 108: Cả hai võ sinh cùng di chuyển tiến lùi, hóa giải và phản kích liên hoàn. Kiểm tra toàn diện sự phối hợp nhịp nhàng giữa mắt, bộ pháp, thủ pháp và giác quan xúc giác.",
    principles: [
      "Khoảng cách chiến thuật chuẩn mực: Không để bị áp sát gây nghẽn đòn, không đứng quá xa làm mất tiếp xúc.",
      "Chiếm giữ đường trung lộ khi di chuyển: Luôn đi chân nêm vào giữa hai chân đối phương để phá thế đứng.",
      "Phản xạ linh giác tức thì: Khi bị dồn ép, lập tức xoay thân thoát góc và chuyển sang phản đòn."
    ],
    keyMantra: "Tùy cơ ứng biến • Phá thế đoạt môn • Cận chiến liên hoàn",
    introQuote: "108 Tiến lùi đối luyện là bài kiểm nghiệm thực tế cao nhất của hệ thống 108 thế, rèn luyện bản lĩnh cận chiến vững vàng."
  },
  "bai-17": {
    formId: "bai-17",
    title: "Bài Mộc Nhân Số 1",
    hanziName: "木人樁第一套 • Mok Yan Jong 1",
    category: "Cọc Gỗ Mộc Nhân",
    categoryOrder: 3,
    formOrder: 8,
    demonstrator: "HLV Nguyễn Quốc Minh (38 Gia Ngư, 1954)",
    meaning: "Bài Mộc Nhân Thung tại chỗ — Rèn đòn và tôi luyện xương cốt trên cọc gỗ",
    philosophy: "Cọc gỗ Mộc Nhân là người bạn tập vô hình không bao giờ khoan nhượng. Luyện Mộc Nhân giúp tôi luyện cẳng tay, cạnh bàn tay và ống chân cứng cáp, đồng thời định hình kỹ năng nêm góc hoàn hảo quanh 3 tay và chân cọc gỗ.",
    principles: [
      "Nêm góc lướt gỗ: Coi 2 tay trên của cọc như đòn tấn công, dùng Bàng Thủ và Than Thủ lướt sát mặt gỗ.",
      "Chặn khóa chân cọc: Dùng gối và cẳng chân gài sát chân gỗ cong để rèn kỹ năng khóa chân và quật ngã.",
      "Phát kình giật từ eo hông: Không đánh bầm tay vào gỗ mà dùng lực xoay hông giật phát kình nội gia."
    ],
    keyMantra: "Gỗ cứng tôi cốt • Nêm góc lướt tay • Khóa chân phát kình",
    introQuote: "Mộc Nhân (người gỗ) là một phương pháp luyện tập độc đáo của Vịnh Xuân Quyền. Cây Mộc Nhân lịch sử chế tác năm 1954 tại 38 Gia Ngư là chứng nhân di sản của môn phái."
  },
  "bai-18": {
    formId: "bai-18",
    title: "Bài Mộc Nhân Tiến Lùi",
    hanziName: "木人樁進退 • Mok Yan Jong Movement",
    category: "Cọc Gỗ Mộc Nhân",
    categoryOrder: 3,
    formOrder: 9,
    demonstrator: "HLV Phạm Vũ Toản",
    meaning: "Bộ pháp chuyển vòng Mộc Nhân — Đột kích và chiếm lĩnh các góc chết quanh cọc gỗ",
    philosophy: "Không đứng yên trước mặt cọc gỗ. Môn sinh di chuyển chuyển góc quanh cọc, tấn công từ bên sườn, luồn ra sau lưng cọc để tập kỹ năng đột kích mạn sườn và góc hiểm của đối phương.",
    principles: [
      "Vòng tròn thân pháp quanh cọc: Bước chân xoay chuyển 180 độ bám sát thân gỗ.",
      "Đổi tay liên hoàn: Tay trước gạt tay cọc, tay sau đánh thẳng vào thân cọc trong một nhịp thở.",
      "Kỹ thuật quấn chân: Móc chân vào chân cọc khi đổi góc để tập kỹ năng triệt hạ đối thủ."
    ],
    keyMantra: "Né diện kích trắc • Quấn chân đổi góc • Thân pháp như phong",
    introQuote: "Bài mộc nhân tiến lùi phát triển khả năng vận động đa chiều quanh đối thủ, rèn luyện sự linh hoạt tối đa của bộ pháp."
  },
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
      "Tĩnh trung cầu động: Tâm tĩnh như mặt nước phẳng, khi xuất đòn thì biến hóa khôn lường."
    ],
    keyMantra: "Long hình luyện thần • Tĩnh trung cầu động • Nhu trung hữu cương",
    introQuote: "Long quyền trong Ngũ hình chủ về luyện thần. Thần thái uy nghiêm, thân pháp uốn lượn mềm dẻo nhưng phát kình chấn động sâu sắc."
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
    introQuote: "Xà quyền chủ về luyện khí. Đặc trưng là đòn đánh mềm mại, uyển chuyển luồn lách nhưng khi điểm huyệt thì cực kỳ chuẩn xác và hiểm ác."
  },
  "bai-23": {
    formId: "bai-23",
    title: "Hổ Quyền",
    hanziName: "虎拳 • Tiger Form",
    category: "Ngũ Hình Quyền",
    categoryOrder: 4,
    formOrder: 12,
    demonstrator: "Võ sư Đặng Danh Tuấn",
    meaning: "Mãnh hổ vồ mồi — Luyện Cốt, cương mãnh tuyệt luân, áp đảo đối thủ",
    philosophy: "Hổ hình chủ luyện Cốt (xương cốt). Đòn đánh mang khí thế áp đảo của chúa sơn lâm, kình lực phát xuất từ gót chân truyền qua eo hông lên móng vuốt, cấu xé và chấn động nội tạng đối thủ.",
    principles: [
      "Hổ trảo (Móng vuốt hổ): 5 ngón tay cong quắp vững chắc, dùng để bóp nát, chộp bắt và giật đứt gân cơ.",
      "Hạ bàn trầm thấp: Tấn bộ vững chãi, tạo điểm tựa phóng lực toàn thân.",
      "Khí thế áp đảo: Phát lực dũng mãnh kèm theo tiếng thở dồn nén làm rúng động tinh thần địch thủ."
    ],
    keyMantra: "Hổ hình luyện cốt • Khí thế xung thiên • Cương mãnh tuyệt luân",
    introQuote: "Hổ quyền chủ về luyện cốt. Luyện tập giúp xương cốt cứng cáp, gân lực dũng mãnh, phát kình chấn động toàn thân."
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
    introQuote: "Báo quyền chủ về luyện lực và tốc độ. Đòn thế phát ra chớp nhoáng, sắc bén, dồn dập khiến đối phương trở tay không kịp."
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
    introQuote: "Hạc quyền chủ về luyện tinh. Đòn đánh nhẹ nhàng, thanh thoát, tập trung vào sự thăng bằng tuyệt hảo và điểm huyệt chính xác."
  },
  "bai-26": {
    formId: "bai-26",
    title: "Ngũ Hình Quyền Tổng Hợp",
    hanziName: "五形綜合拳 • Combined 5 Animals",
    category: "Ngũ Hình Quyền",
    categoryOrder: 4,
    formOrder: 15,
    meaning: "Ngũ thú hợp nhất — Tinh hoa biến hóa khôn lường của Long, Xà, Hổ, Báo, Hạc",
    philosophy: "Hợp nhất trọn vẹn cả 5 linh thú: Thần của Rồng, Khí của Rắn, Cốt của Cọp, Lực của Báo, Tinh của Hạc. Võ sinh biến hóa không ngừng tùy theo thế đánh của đối phương, khi thì mềm mại như lụa, khi thì dũng mãnh như sét đánh.",
    principles: [
      "Ngũ hành tương sinh tương khắc: Gặp địch cương mãnh dùng Xà Hạc hóa giải, gặp địch né tránh dùng Hổ Báo áp đảo.",
      "Thân pháp biến ảo vô cùng: Không câu nệ một hình tướng, hòa quyện tự nhiên theo dòng chảy đối kháng.",
      "Nội ngoại tương hợp: Khí lực, gân cốt và tinh thần hòa làm một thể thống nhất."
    ],
    keyMantra: "Ngũ thú quy nhất • Biến hóa vô cùng • Nội ngoại tương hợp",
    introQuote: "Bài Ngũ hình tổng hợp là sự kết tinh toàn diện của 5 linh vật võ thuật, thể hiện nét đặc sắc nghệ thuật quyền pháp Phật Gia Vịnh Xuân."
  },
  "bai-31": {
    formId: "bai-31",
    title: "Bát Trảm Đao",
    hanziName: "八斬刀 • Bart Cham Dao",
    category: "Kho Binh Khí",
    categoryOrder: 5,
    formOrder: 16,
    demonstrator: "Võ sư Nguyễn Chí Kiên",
    meaning: "Tám đường chém hộ thân — Cặp song đao cận chiến đặc trưng của Vịnh Xuân Quyền",
    philosophy: "Bát Trảm Đao là cặp đao ngắn dính liền với cẳng tay như mọc thêm đôi cánh sắt. Đao không múa lượn rườm rà mà áp dụng nguyên lý cùi chỏ và Tý Ngọ Tuyến của tay không, chém xả dứt khoát trong cự ly hẹp.",
    principles: [
      "Đao sát cẳng tay: Lưỡi đao luôn nằm sát cạnh tay để vừa đỡ đòn của đối phương, vừa chém xoay bất ngờ.",
      "Song đao phối hợp: Một đao đỡ gạt khống chế vũ khí địch, một đao lập tức chém vào cổ tay hoặc yết hầu.",
      "Cước bộ linh hoạt: Kết hợp xước mã và đạp bộ nhanh nhẹn để nhập nội áp sát đối phương."
    ],
    keyMantra: "Song đao hộ thân • Đao sát cẳng tay • Bát trảm đoạn môn",
    introQuote: "Bát Trảm Đao là vũ khí tiêu biểu nhất của Vịnh Xuân Quyền. Đao ngắn gọn, thực dụng, kết hợp nhuần nhuyễn giữa kỹ thuật chém, đỡ và nhập nội."
  },
  "con": {
    formId: "con",
    title: "Lục Điểm Bán Côn",
    hanziName: "六點半棍 • Luk Dim Boon Kwun",
    category: "Kho Binh Khí",
    categoryOrder: 5,
    formOrder: 17,
    demonstrator: "Võ sư Nguyễn Văn Chiến",
    meaning: "Sáu điểm rưỡi đoản đả — Trường binh đoản đả đặc trưng của Vịnh Xuân",
    philosophy: "Cây côn dài hơn 2 mét nhưng vận dụng kỹ thuật 'đoản binh trường dụng'. Lục Điểm Bán Côn tập trung vào 6 điểm rưỡi then chốt: Đâm, gạt, nâng, đè, chém, đập và nửa điểm mượn lực, phóng kình từ gót chân lên đầu côn.",
    principles: [
      "Thương kình nhập côn: Dùng đầu côn đâm xuyên như ngọn giáo, phát lực kình chấn động cực mạnh.",
      "Trung tuyến côn pháp: Giữ thân côn luôn chiếm đường giữa, kiểm soát hoàn toàn không gian trước mặt.",
      "Vững như bàn thạch: Tấn pháp trầm thấp, eo hông xoay mở tối đa để sinh lực phóng ra đầu côn."
    ],
    keyMantra: "Lục điểm bán côn • Thương kình nhập côn • Trực chỉ trung tâm",
    introQuote: "Lục Điểm Bán Côn là môn binh khí dài độc đáo. Côn pháp tinh giản nhưng ẩn chứa kình lực sâu dày phát xuất từ toàn thân."
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
    introQuote: "Liễu Diệp Kiếm mang nét đẹp thanh tao, thoát tục của Phật gia. Kiếm pháp đòi hỏi sự tĩnh lặng của tâm hồn và độ nhạy cảm phi thường của cổ tay."
  }
};

export const FORM_CATEGORIES = [
  { id: "all", name: "Tất Cả 18 Bài", count: 18, desc: "Trọn bộ 18 bài quyền & binh khí chính tông" },
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
