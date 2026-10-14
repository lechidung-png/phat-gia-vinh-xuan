export interface HandTechnique {
  id: string;
  nameVn: string;
  nameHán: string;
  pinyin?: string;
  isSanShouCore?: boolean; // Tam thủ căn bản: Than, Bàng, Phục
  imgUrl: string;
  level: "Cao (Ngực)" | "Trung (Chấn Thủy/Mỏ Ác)" | "Thấp (Bụng/Hạ Tiêu)" | "Đa Dụng";
  shortDesc: string;
  techniqueDetail: string;
  keyPoints: string[];
  combatApplication: string;
  rhyme?: string; // Khẩu quyết
}

export interface FootStanceTechnique {
  id: string;
  nameVn: string;
  nameHán: string;
  imgUrl: string;
  category: "Tấn Pháp" | "Cước Pháp" | "Bộ Pháp";
  shortDesc: string;
  techniqueDetail: string;
  keyPoints: string[];
  combatApplication: string;
  rhyme?: string;
}

export interface BasicDrill {
  id: string;
  number: number;
  title: string;
  nameHán?: string;
  purpose: string;
  instructions: string[];
  repetition: string;
  martialPrinciple: string;
  images?: Record<string, string>;
}

export const HAND_ANATOMY = {
  diagramUrl: "/assets/images/fundamentals/anatomy_hand.png",
  title: "Sơ Đồ Giải Phẫu Các Phần Của Tay",
  source: "Giáo trình Phật Gia Vịnh Xuân Quyền",
  parts: [
    { name: "Cánh tay", desc: "Từ khớp vai đến khớp khuỷu (cùi chỏ). Là bệ đỡ lực cho toàn bộ cánh tay." },
    { name: "Cùi chỏ (Khuỷu tay / Trửu)", desc: "Trọng tâm bảo vệ trung lộ, giữ góc tù hoặc góc vuông mềm mại, không bao giờ mở nách." },
    { name: "Cẳng tay", desc: "Từ cùi chỏ đến cổ tay, dùng cạnh ngoài hoặc cạnh trong để tiếp xúc và hóa giải kình lực." },
    { name: "Cổ tay", desc: "Khớp linh hoạt nhất, có thể chuyển động 360 độ xoay cuộn mềm như ổ bi." },
    { name: "Lòng bàn tay", desc: "Dùng trong Chưởng pháp, Phật chưởng, Điệp chưởng phát kình chấn động." },
    { name: "Cạnh ngoài bàn tay", desc: "Cạnh dao chém (Trảm thủ) và đỡ ngang." },
    { name: "Cạnh trong bàn tay", desc: "Mặt trong ngón cái và hổ khẩu dùng trong đòn kẹp bắt và chưởng ngang." }
  ],
  levels: [
    {
      level: "Mức Trung Bình",
      height: "Ngang mức cơ hoành cách mỏ ác (chấn thủy)",
      desc: "Vị trí chuẩn mực nhất của Vịnh Xuân: Cùi chỏ cách chéo áo một nắm tay, bảo vệ các cơ quan nội tạng tim, gan, lách, dạ dày."
    },
    {
      level: "Mức Cao",
      height: "Khuỷu tay nhích lên trên từ 10cm trở lên",
      desc: "Dùng để hóa giải đòn đánh tầm cao vào đầu, mặt, mắt, yết hầu (Phục thủ cao, Bàng thủ nâng, Khốn thủ)."
    },
    {
      level: "Mức Thấp",
      height: "Khuỷu tay nhích xuống dưới từ 10cm trở lên",
      desc: "Dùng để đè nén, chặn cước hạ bàn hoặc hóa giải đòn đấm vào bụng, bàng quang và hạ bộ (Ấn chưởng, Đát thủ hạ)."
    }
  ]
};

export const SAN_SHOU_CORE_MOTO = "Thực hiện chuẩn được Than, Bàng, Phục thủ thì mọi người phải nghe theo.";

export const HAND_TECHNIQUES: HandTechnique[] = [
  // --- TAM THỦ CĂN BẢN (VIP) ---
  {
    id: "than-thu",
    nameVn: "Than Thủ (Tay Ngửa)",
    nameHán: "攤手",
    pinyin: "Tān Shǒu",
    isSanShouCore: true,
    imgUrl: "/assets/images/fundamentals/than_thu.png",
    level: "Trung (Chấn Thủy/Mỏ Ác)",
    shortDesc: "Bàn tay cẳng tay ngửa, cùi chỏ ở giữa người cách chéo áo một nắm tay. Cẳng tay và ngón tay duỗi thẳng mềm mại.",
    techniqueDetail: "Than thủ là thế đỡ cơ bản và quan trọng bậc nhất. Bàn tay mở ngửa hướng lên trời, các ngón duỗi thẳng tự nhiên mềm mại. Cùi chỏ ghim chặt vào trung lộ, không bao giờ nhấc bổng hay mở nách. Lực phát từ xương bả vai truyền thẳng qua cùi chỏ ra đầu ngón tay.",
    keyPoints: [
      "Bàn tay ngửa, ngón tay khép tự nhiên nhưng không gồng cứng",
      "Khuỷu tay cách mỏ ác đúng bằng 1 nắm tay (khoảng 8-10cm)",
      "Cùi chỏ nằm trên trục Tý Ngọ Tuyến, che kín mạn sườn"
    ],
    combatApplication: "Chuyên dùng để đỡ và nâng các đòn đấm thẳng (Nhật tự quyền, trực quyền) của địch từ dưới lên, mượn lực xoay hông để làm chệch hướng đòn tấn công mà không tốn sức.",
    rhyme: "Than thủ ngửa tay cầu đón nhận • Trung tâm giữ vững chuyển ngàn cân."
  },
  {
    id: "bang-thu",
    nameVn: "Bàng Thủ (Tay Cánh Cung Đặc Hiệu)",
    nameHán: "膀手",
    pinyin: "Bǎng Shǒu",
    isSanShouCore: true,
    imgUrl: "/assets/images/fundamentals/bang_thu.png",
    level: "Trung (Chấn Thủy/Mỏ Ác)",
    shortDesc: "Đặc hiệu của Vịnh Xuân Quyền. Cánh tay chéo vào trong, cùi chỏ ở trung lộ, cẳng và bàn tay quay sang phía bên.",
    techniqueDetail: "Bàng thủ tạo thành hình cánh cung đàn hồi linh hoạt. Vai và tay mềm mại thả lỏng hoàn toàn. Không dùng sức cơ bắp để chống cự lại lực đối thủ, mà mượn cấu trúc vòm cung và chuyển động xoay trục thân mình để trượt tiêu biến toàn bộ kình lực của địch.",
    keyPoints: [
      "Cùi chỏ nâng cao hơn cổ tay một góc tù thoải mái (khoảng 120-135 độ)",
      "Cổ tay thả lỏng, bàn tay hướng nghiêng sang bên",
      "Không chống gượng lực đối kháng mà mượn lực trượt qua cánh cung"
    ],
    combatApplication: "Hóa giải các đòn đấm vòng, móc ngang hoặc đòn đấm mạnh xộc thẳng. Sau khi trượt lực lập tức biến thành Phục thủ hoặc phóng Nhật tự quyền phản công chớp nhoáng.",
    rhyme: "Bàng thủ cánh cung tiêu kình địch • Thân xoay né đòn hóa thế nguy."
  },
  {
    id: "phuc-thu",
    nameVn: "Phục Thủ (Tay Úp Rủ Cổ Tay)",
    nameHán: "伏手",
    pinyin: "Fú Shǒu",
    isSanShouCore: true,
    imgUrl: "/assets/images/fundamentals/phuc_thu.png",
    level: "Trung (Chấn Thủy/Mỏ Ác)",
    shortDesc: "Cổ tay mềm mại hơi cong rủ, khuỷu tay ở trung lộ, lòng bàn tay úp đè kiểm soát tay địch.",
    techniqueDetail: "Phục thủ là thế tay kiểm soát trung môn hiệu quả. Cổ tay cong mềm mại như chiếc móc câu, các ngón tay rủ nhẹ thả lỏng áp trên cẳng tay đối thủ. Khuỷu tay luôn hướng về rốn và trung lộ để truyền tải trọng lượng thân trên đè nén địch.",
    keyPoints: [
      "Cổ tay cong rủ tự nhiên, không gồng ngón tay",
      "Cùi chỏ ghim chặt vào trung tâm cơ thể",
      "Dùng độ dính (niêm) cảm nhận chuyển động của tay đối thủ"
    ],
    combatApplication: "Khống chế và đè nén cánh tay của đối phương trên trục trung tuyến, triệt tiêu mọi khả năng rút tay hoặc chuyển đòn của địch, mở đường cho đòn đánh thọc tâm.",
    rhyme: "Phục thủ móc câu đè trung lộ • Cảm nhận kình lực chế ngự địch."
  },

  // --- CÁC THẾ THỦ PHÁP CƠ BẢN KHÁC ---
  {
    id: "nhat-tu-quyen",
    nameVn: "Nhật Tự Quyền (Nắm Đấm Dựng Đứng)",
    nameHán: "日字拳",
    pinyin: "Rì Zì Quán",
    isSanShouCore: false,
    imgUrl: "/assets/images/fundamentals/nhat_tu_quyen.png",
    level: "Đa Dụng",
    shortDesc: "Nắm đấm dựng đứng theo chiều dọc như chữ Nhật (日). Mặt trước, sau, dưới đều dùng để sát thương.",
    techniqueDetail: "Nắm đấm đặc trưng số 1 của Vịnh Xuân. Ngón cái khóa bên ngoài ngón trỏ và giữa. Khi đấm, nắm đấm dựng đứng (không xoay úp nằm ngang như quyền Anh), 3 khớp đốt ngón dưới (út, áp út, giữa) thẳng hàng với xương trụ cẳng tay, triệt tiêu nguy cơ trật khớp.",
    keyPoints: [
      "Nắm quyền dựng thẳng đứng",
      "Phát lực từ 3 khớp ngón dưới tiếp xúc mục tiêu",
      "Cùi chỏ dẫn đường, đấm dọc đường trung tuyến"
    ],
    combatApplication: "Đòn đấm liên hoàn xuyên tâm (Liên xung quyền), tấn công thẳng vào mũi, cằm, yết hầu và chấn thủy đối thủ với tần suất 5-8 đòn/giây.",
    rhyme: "Nhật tự quyền thẳng như tên bắn • Xuyên tâm phá trận chẳng thể ngăn."
  },
  {
    id: "ngon-tay-chi",
    nameVn: "Ngón Tay / Chỉ Pháp (Xỉa & Chảo Thủ)",
    nameHán: "指法 / 爪法",
    pinyin: "Zhǐ Fǎ",
    isSanShouCore: false,
    imgUrl: "/assets/images/fundamentals/ngon_tay_chi.png",
    level: "Cao (Ngực)",
    shortDesc: "Dùng một, hai hay nhiều ngón tay duỗi thẳng xỉa hoặc cong thành móc (chảo) như móng rồng, chân chim ưng, tay báo, tay rắn.",
    techniqueDetail: "Hệ thống chỉ pháp và trảo pháp của Phật Gia Vịnh Xuân cực kỳ biến hóa. Khi duỗi thẳng gọi là Tiêu thủ / Xà thủ dùng đầu ngón xỉa vào mắt và yết hầu. Khi cong gập thành móng vuốt gọi là Long trảo, Hổ trảo, Chân ưng chuyên dùng để chộp cấu và bẻ khớp.",
    keyPoints: [
      "Ngón tay luyện gân cốt cứng cáp nhưng cổ tay phải mềm",
      "Nhắm vào các tử huyệt mềm không có xương che chắn",
      "Chuyển hóa linh hoạt giữa Xỉa (thọc) và Chộp (bắt)"
    ],
    combatApplication: "Điểm huyệt và sát thương các điểm chí mạng: Yết hầu, hõm cổ, mắt, huyệt nách, khớp thái dương.",
    rhyme: "Ngón tay mềm dẻo tựa đầu xà • Thọc xuyên tử huyệt địch hồn kinh."
  },
  {
    id: "don-cui-cho",
    nameVn: "Đòn Cùi Chỏ (Lục Chủng Trửu Pháp)",
    nameHán: "肘法 (六種肘)",
    pinyin: "Zhǒu Fǎ",
    isSanShouCore: false,
    imgUrl: "/assets/images/fundamentals/cui_cho.png",
    level: "Đa Dụng",
    shortDesc: "Đòn cận chiến uy lực rất lớn. Gồm 6 kiểu đánh khuỷu tay chính (Lục chủng trửu): Cát trửu, Quải trửu, Bài trửu, Bình trửu, Hậu trửu, Đỉnh trửu.",
    techniqueDetail: "Theo sách gốc (Trang 29–30), Phật Gia Vịnh Xuân có 6 kiểu đánh khuỷu tay (trửu) chính đánh đủ các hướng: (1) Cát trửu: dùng cùi chỏ đánh từ trên xuống; (2) Quải trửu: dùng cùi chỏ thúc ngang; (3) Bài trửu: dùng cùi chỏ đánh xéo; (4) Bình trửu: dùng cùi chỏ tạt ngang; (5) Hậu trửu: dùng cùi chỏ đánh ra sau; (6) Đỉnh trửu: dùng cùi chỏ đánh thốc từ dưới lên. Muốn có hiệu quả cao phải có khớp vai và khớp khuỷu linh hoạt, mềm dẻo và biết dùng thốn kình.",
    keyPoints: [
      "Cát trửu (trên xuống), Quải trửu (thúc ngang), Bài trửu (đánh xéo)",
      "Bình trửu (tạt ngang), Hậu trửu (đánh ra sau), Đỉnh trửu (thốc từ dưới lên)",
      "Khớp vai và khớp khuỷu phải thật mềm dẻo, phát thốn kình ở cự ly gần"
    ],
    combatApplication: "Đánh cùi chỏ bổ xuống phá kiều, thốc lên cằm, tạt ngang thái dương hoặc thúc cùi chỏ ra sau khi bị ôm khóa cận chiến.",
    rhyme: "Lục chủng trửu pháp cận thân công • Khớp xoay linh hoạt chế ngự đòn."
  },
  {
    id: "khuyen-thu",
    nameVn: "Khuyên Thủ (Tay Vòng Tròn Cuộn Cổ Tay)",
    nameHán: "圈手",
    pinyin: "Quān Shǒu",
    isSanShouCore: false,
    imgUrl: "/assets/images/fundamentals/khuyen_thu.png",
    level: "Trung (Chấn Thủy/Mỏ Ác)",
    shortDesc: "Quay cổ tay tròn trịa như cuộn một cái gì, thay đổi vị trí từ trong ra ngoài hoặc ngược lại.",
    techniqueDetail: "Khuyên thủ dùng chuyển động tròn của khớp cổ tay để thoát khỏi sự khống chế của đối thủ mà không cần giằng co sức lực. Tay xoay một vòng tròn nhỏ quanh cổ tay địch để lật ngược thế cờ từ bị giữ thành người nắm giữ.",
    keyPoints: [
      "Chuyển động phát sinh duy nhất từ khớp cổ tay",
      "Khuỷu tay giữ tĩnh tại trung lộ không vung vẩy",
      "Tốc độ xoay nhanh, êm ái như vòng bi bôi dầu"
    ],
    combatApplication: "Hóa giải đòn nắm cổ tay (cầm nã), luồn tay từ mặt trong ra mặt ngoài tay địch để tung chưởng hoặc quyền.",
    rhyme: "Khuyên thủ cuộn tròn thoát hiểm nguy • Cổ tay linh hoạt chuyển nhu mì."
  },
  {
    id: "hoanh-thu",
    nameVn: "Hoành Thủ (Tay Chém Ngang Vai)",
    nameHán: "橫手",
    pinyin: "Héng Shǒu",
    isSanShouCore: false,
    imgUrl: "/assets/images/fundamentals/hoanh_thu.png",
    level: "Cao (Ngực)",
    shortDesc: "Hai tay chuẩn bị chém ngang vai, tay phải đặt trên tay trái (như trong bài Tiểu Niệm Đầu).",
    techniqueDetail: "Hai cẳng tay song song nằm ngang ngực, bàn tay xòe phẳng theo phương ngang. Vừa có tác dụng lá chắn kép bảo vệ phần ngực và cổ, vừa tích tụ thế năng xoay thân để chém tạt cạnh bàn tay ra ngoài.",
    keyPoints: [
      "Hai cánh tay đặt ngang tầng ngực",
      "Tay nọ che đỡ cho tay kia",
      "Dùng cạnh ngoài bàn tay và cẳng tay gạt chặn"
    ],
    combatApplication: "Chặn đứng các đòn đấm vòng rộng hoặc đòn phang ngang của đối phương, đồng thời mở đòn trảm thủ chém gáy.",
    rhyme: "Hoành thủ giương ngang ngực vững vàng • Chặn đứng cuồng phong phá trận tiền."
  },
  {
    id: "phach-chuong",
    nameVn: "Phách Chưởng (Vỗ Mạnh Từ Trên Xuống)",
    nameHán: "拍掌",
    pinyin: "Pāi Zhǎng",
    isSanShouCore: false,
    imgUrl: "/assets/images/fundamentals/phach_chuong.png",
    level: "Trung (Chấn Thủy/Mỏ Ác)",
    shortDesc: "Vỗ mạnh (phách là vỗ) chủ yếu từ trên xuống hoặc vỗ tạt sang phía bên.",
    techniqueDetail: "Dùng lòng bàn tay và gót bàn tay phát lực vỗ dứt khoát làm gãy hướng tấn công của địch. Lực vỗ ngắn, giật nhanh (thốn kình), sau khi vỗ xong tay lập tức biến hóa thế công tiếp theo.",
    keyPoints: [
      "Lực vỗ phát ra gọn gàng dứt khoát",
      "Không đưa tay quá xa khỏi trục trung tâm",
      "Thu hồi tay chớp nhoáng chuyển thế"
    ],
    combatApplication: "Vỗ đè cổ tay hoặc cùi chỏ đối phương làm sụp đổ cấu trúc phòng ngự, tạo khoảng trống cho tay kia đấm thẳng.",
    rhyme: "Phách chưởng vỗ xuống ngắt đường công • Gãy trục kình lực địch chới với."
  },
  {
    id: "khon-thu",
    nameVn: "Khốn Thủ (Thế Tay Trói Buộc Đôi)",
    nameHán: "捆手",
    pinyin: "Kǔn Shǒu",
    isSanShouCore: false,
    imgUrl: "/assets/images/fundamentals/khon_thu.png",
    level: "Đa Dụng",
    shortDesc: "Kết hợp tay trên (Bàng thủ/Than thủ) và tay dưới (Hạ Than thủ) tạo thành gọng kìm trói tay địch.",
    techniqueDetail: "Một tay bảo vệ thượng bàn, một tay che chắn hạ bàn tạo thành thế phòng ngự hai tầng khép kín. Đối thủ tấn công vào bất kỳ tầng nào cũng bị chặn lại bởi một trong hai cánh tay.",
    keyPoints: [
      "Một tay cao một tay thấp tạo thành thế liên hoàn",
      "Khuỷu tay luôn hướng vào trong che chắn thân người",
      "Tấn bộ vững vàng phối hợp xoay thân"
    ],
    combatApplication: "Chống lại các tổ hợp đòn đấm kép trên-dưới (High-Low combo) hoặc đỡ đòn đấm đồng thời khóa chặt tay đối thủ.",
    rhyme: "Khốn thủ trói chặt cả hai tầng • Trên dưới vẹn toàn địch bó tay."
  },
  {
    id: "an-chuong",
    nameVn: "Ấn Chưởng (Đè Đánh Xuống Mặt Đất)",
    nameHán: "按掌",
    pinyin: "Àn Zhǎng",
    isSanShouCore: false,
    imgUrl: "/assets/images/fundamentals/an_chuong.png",
    level: "Thấp (Bụng/Hạ Tiêu)",
    shortDesc: "Bàn tay mở đè đánh thẳng xuống dưới, song song với mặt đất.",
    techniqueDetail: "Lòng bàn tay hướng xuống sàn, dùng gốc cườm tay phát lực đè chặn lực nâng hoặc cú đá tầm thấp của đối phương. Khớp cổ tay uốn gập chắc chắn, toàn thân dồn trọng lực xuống cẳng tay.",
    keyPoints: [
      "Bàn tay phẳng song song mặt đất",
      "Lực đè xuất phát từ trọng tâm cơ thể hạ thấp",
      "Gốc bàn tay chịu lực chính"
    ],
    combatApplication: "Chặn các đòn đấm thốc vào bụng (Móc dưới), triệt hạ các đòn đá tầm thấp hoặc đè tay đối phương xuống để lộ sơ hở.",
    rhyme: "Ấn chưởng đè xuống vững như non • Hóa giải đòn ngầm giữ hạ môn."
  },
  {
    id: "lien-xung-quyen",
    nameVn: "Liên Xung Quyền (Chuỗi Quyền Dọc Bắn Phá)",
    nameHán: "連衝拳",
    pinyin: "Lián Chōng Quán",
    isSanShouCore: false,
    imgUrl: "/assets/images/fundamentals/lien_xung_quyen.png",
    level: "Trung (Chấn Thủy/Mỏ Ác)",
    shortDesc: "Đấm thẳng tay ra trước (trung lộ), trong khi đó giật mạnh tay kia về nách. Đổi tay liên tiếp như giương cung.",
    techniqueDetail: "Đòn đấm liên hoàn nổi tiếng nhất của Vịnh Xuân: Tay phải đấm ra thì tay trái giật về nách tích lực, khi tay phải chạm đích thì tay trái lập tức phóng tiếp nối theo đúng quỹ đạo. Hai tay vận hành ngược chiều nhau tạo mô-men xoắn cân bằng ổn định.",
    keyPoints: [
      "Hai tay chuyển động ngược chiều như giương cung kéo tên",
      "Cả hai nắm đấm đều đi trên cùng một đường ray Tý Ngọ Tuyến",
      "Tần số ra đòn liên tục, dồn dập không có quãng nghỉ"
    ],
    combatApplication: "Áp đảo và đánh gục đối thủ trong tích tắc khi đã phá vỡ thế thủ, khiến địch không thể phản kháng hay thở.",
    rhyme: "Liên xung tên bắn tựa mưa rào • Trái phóng phải thu kình cuộn trào."
  },
  {
    id: "phat-chuong",
    nameVn: "Phật Chưởng (Chưởng Đứng Thẳng Phật Gia)",
    nameHán: "佛掌",
    pinyin: "Fó Zhǎng",
    isSanShouCore: false,
    imgUrl: "/assets/images/fundamentals/phat_chuong.png",
    level: "Trung (Chấn Thủy/Mỏ Ác)",
    shortDesc: "Bàn tay duỗi hết, các ngón tay đều khép kín hướng thẳng lên trời như bàn tay Phật.",
    techniqueDetail: "Bàn tay dựng đứng vuông góc với cẳng tay, năm ngón tay khép chặt thanh thoát. Điểm phát lực là gót chưởng (chấn chưởng) kết hợp với lực phóng thẳng của toàn thân.",
    keyPoints: [
      "Ngón tay khép chặt, ngón cái ép sát cạnh",
      "Gốc lòng bàn tay nhô ra tiếp xúc mục tiêu",
      "Cổ tay dựng thẳng 90 độ dũng mãnh"
    ],
    combatApplication: "Đánh thẳng vào xương ức, chấn thủy hoặc cằm đối thủ, gây chấn động sâu vào nội tạng mà không làm gãy xương tay.",
    rhyme: "Phật chưởng từ bi ẩn nội kình • Chấn tâm thoái địch giữ an bình."
  },
  {
    id: "diep-chuong",
    nameVn: "Điệp Chưởng (Chưởng Đôi Cánh Bướm)",
    nameHán: "蝶掌",
    pinyin: "Dié Zhǎng",
    isSanShouCore: false,
    imgUrl: "/assets/images/fundamentals/diep_chuong.png",
    level: "Trung (Chấn Thủy/Mỏ Ác)",
    shortDesc: "Hai bàn tay xòe, hai cổ tay áp nhau như hình cánh bướm chao lượn. Thường đánh ở cự ly gần.",
    techniqueDetail: "Hai bàn tay xòe ra, áp mặt trong hoặc hai cườm tay sát nhau tạo thành hình tượng đôi cánh bướm. Một tay có thể hơi cao hơn tay kia, phát lực đẩy chấn động mạnh mẽ trong cự ly rất ngắn (Thốn kình 1 tấc).",
    keyPoints: [
      "Hai cườm tay áp sát phối hợp nhịp nhàng",
      "Lực phát ra từ hai bàn tay cùng lúc (kình lực kép)",
      "Đánh ở cự ly cực gần (áp sát ngực)"
    ],
    combatApplication: "Đòn đánh sát thủ ở cự ly ôm sát, đẩy văng đối thủ ra xa hoặc làm gãy xương sườn địch thủ.",
    rhyme: "Điệp chưởng bướm lượn phát thốn kình • Cự ly gang tấc địch nghiêng ngả."
  },
  {
    id: "canh-thu",
    nameVn: "Canh Thủ (Tay Chém Chéo Phá Lộ)",
    nameHán: "耕手",
    pinyin: "Gēng Shǒu",
    isSanShouCore: false,
    imgUrl: "/assets/hinh-2x/p028-h06.png",
    level: "Thấp (Bụng/Hạ Tiêu)",
    shortDesc: "Bàn tay mở đánh chéo từ trên xuống vào cạnh sườn địch hoặc gạt chặn đòn đánh tầm trung – thấp.",
    techniqueDetail: "Theo sách gốc (Trang 29): 'Canh thủ: Bàn tay mở đánh chéo từ trên xuống vào cạnh sườn địch.' Cẳng tay cắt chéo qua trục trung tuyến như lưỡi cày lật đất, vừa hất văng đòn tấn công tầm thấp của đối phương vừa chém cạnh bàn tay vào sườn địch.",
    keyPoints: [
      "Bàn tay mở phẳng, cạnh ngoài cẳng tay và bàn tay phát lực cắt chéo",
      "Khuỷu tay không mở quá rộng khỏi khung sườn",
      "Thường phối hợp đồng thời với một tay Hộ thủ hoặc Phục thủ ở tầng trên"
    ],
    combatApplication: "Hóa giải đòn đấm thốc bụng hoặc đòn đá tầm thấp, đồng thời phản đòn chém vào mạn sườn đối phương.",
    rhyme: "Canh thủ cắt chéo tợ lưỡi cày • Phá đòn hạ lộ chém sườn ngay."
  },
  {
    id: "ho-thu",
    nameVn: "Hộ Thủ (Tay Dựng Đứng Hộ Trung Tuyến)",
    nameHán: "護手",
    pinyin: "Hù Shǒu",
    isSanShouCore: false,
    imgUrl: "/assets/hinh-2x/p028-h09.png",
    level: "Trung (Chấn Thủy/Mỏ Ác)",
    shortDesc: "Bàn tay dựng đứng tại trung tuyến, cùi chỏ thu sát ngực một nắm tay để hộ vệ trục sinh tử.",
    techniqueDetail: "Theo sách gốc (Trang 29): 'Hộ thủ: Bàn tay dựng đứng tại trung tuyến.' Đây là thế tay phòng hộ cốt tử xuất hiện xuyên suốt trong đoạn Tam Bái Phật của Tiểu Niệm Đầu và luôn đi kèm làm tay bọc lót phía sau khi tay trước xuất đòn.",
    keyPoints: [
      "Bàn tay mở, các ngón khép tự nhiên dựng đứng ngay trên đường Tý Ngọ Tuyến",
      "Khuỷu tay cách ngực đúng một nắm đấm",
      "Cổ tay linh hoạt sẵn sàng chuyển thành Phục thủ, Phách thủ hoặc Xung chưởng"
    ],
    combatApplication: "Làm lá chắn thứ hai bảo vệ vùng mặt, cổ họng và chấn thủy khi tay trước đang giao tiếp với địch.",
    rhyme: "Hộ thủ dựng đứng giữ trung tâm • Kín cổng cao tường chẳng ngại xâm."
  },
  {
    id: "tram-thu",
    nameVn: "Trầm Thủ (Đánh Cổ Tay Chìm Xuống)",
    nameHán: "沉手",
    pinyin: "Chén Shǒu",
    isSanShouCore: false,
    imgUrl: "/assets/hinh-2x/p028-h10.png",
    level: "Trung (Chấn Thủy/Mỏ Ác)",
    shortDesc: "Đánh cổ tay xuống ngắn và đanh, ít di động cẳng tay để triệt tiêu lực tay đối phương.",
    techniqueDetail: "Theo sách gốc (Trang 29): 'Trầm thủ: Đánh cổ tay xuống ít di động cẳng tay.' Lực phát ra từ độ chìm của khuỷu tay và nhịp gập bật của khớp cổ tay mà không cần vung cả cánh tay.",
    keyPoints: [
      "Biên độ cẳng tay cực nhỏ, chủ yếu phát lực chìm từ cổ tay và khuỷu tay",
      "Giữ nguyên cấu trúc trung tuyến không bị hở phần trên",
      "Sau nhịp đánh trầm xuống lập tức phóng thẳng ngón tay hoặc chưởng"
    ],
    combatApplication: "Đè sập tay đỡ của đối phương xuống vài centimet để mở toang cánh cổng trung lộ ngay lập tức.",
    rhyme: "Trầm thủ cổ tay giật ngắn đanh • Cẳng tay tĩnh tại kình lực nhanh."
  },
  {
    id: "tam-khong-thu",
    nameVn: "Tam Không Thủ (Đấm 3 Quyền Liên Tục)",
    nameHán: "三空手",
    pinyin: "Sān Kōng Shǒu",
    isSanShouCore: false,
    imgUrl: "/assets/hinh-2x/p029-h01.png",
    level: "Trung (Chấn Thủy/Mỏ Ác)",
    shortDesc: "Đấm ra 3 quyền Nhật tự liên tục theo đường thẳng trung tuyến.",
    techniqueDetail: "Theo sách gốc (Trang 27): 'Đấm ra 3 quyền liên tục gọi là Tam không thủ. Đánh ra nhiều quyền liên tục trái – phải... gọi là Liên xung chùy (quyền).' Tổ hợp 3 quyền nối tiếp nhau giúp phá vỡ phản xạ đỡ nhịp một của đối thủ.",
    keyPoints: [
      "Ba nắm đấm Nhật tự quyền phóng liên tiếp trên đường thẳng ngắn nhất",
      "Khuỷu tay luôn ở giữa thân (Thủ lưu trung tuyến)",
      "Không thu tay về lấy đà mà quyền sau nối sát quyền trước (Vô thất quy)"
    ],
    combatApplication: "Phá vỡ thế phòng thủ của đối phương bằng nhịp đấm thứ nhất và thứ hai, dứt điểm bằng quyền thứ ba.",
    rhyme: "Tam không ba quyền nối liền nhau • Trung tuyến xuyên thẳng chẳng dừng lâu."
  }
];

export const FOOT_STANCES: FootStanceTechnique[] = [
  {
    id: "tan-kiem-duong",
    nameVn: "Nhị Tự Kiềm Dương Tấn (Tấn Chân Hẹp Chuẩn Mực)",
    nameHán: "二字鉗羊馬",
    imgUrl: "/assets/images/fundamentals/tan_kiem_duong_authentic.png",
    category: "Tấn Pháp",
    shortDesc: "Cốt lõi hạ bàn Vịnh Xuân: Hai mũi chân quay vào nhau cách khoảng 1 bàn chân, hai gót chân mở rộng bằng 2 bàn chân; khi quay người 2 bàn chân song song cách nhau 1 bề ngang bàn chân.",
    techniqueDetail: "Nguyên tắc khẩu quyết chuẩn mực trong sách gốc (Trang 20 & 25): 'Đứng theo Nhị tự Kiềm dương Mã, chỉ hơi khuỵu khớp gối một chút. Bàn chân hình chữ bát (hai mũi chân cách nhau khoảng 1 bàn chân, hai gót chân mở rộng bằng 2 bàn chân), nhưng khi quay người thì 2 bàn chân song song, cách nhau khoảng một bề ngang bàn chân.' Hai đầu gối khép nhẹ che kín 100% vùng hạ bộ, xương cụt thu, đỉnh đầu treo như dây dọi.",
    keyPoints: [
      "Khi đứng tĩnh (chữ Bát): Hai mũi chân cách 1 bàn chân, hai gót chân cách 2 bàn chân",
      "Khi quay người (Biên thân): Hai bàn chân song song cách nhau khoảng 1 bề ngang bàn chân",
      "Hai đầu gối hơi khuỵu hướng vào trong che kín hạ bộ, lưng thẳng, ý thủ Đan điền",
      "Chân bám chặt vào mặt đất như mọc rễ xuống (Lực do địa khởi)"
    ],
    combatApplication: "Là bệ phóng cho toàn bộ 18 bài quyền và binh khí. Giúp xoay trục né đòn trong nháy mắt mà không cần di chuyển vị trí bàn chân.",
    rhyme: "Kiềm Dương khép gối vững kiên cường • Hạ bộ che kín tỏa uy quang."
  },
  {
    id: "xoay-nguoi-bien-than",
    nameVn: "Xoay Người Biên Thân (Biên Thân Mã Bộ)",
    nameHán: "轉身 / 偏身",
    imgUrl: "/assets/images/fundamentals/xoay_nguoi_bien_than_authentic.png",
    category: "Bộ Pháp",
    shortDesc: "Xoay người biên thân trên trục Tý Ngọ Tuyến: Vai và thân nghiêng hướng về phía trước, hai bàn chân song song cách nhau một bề ngang bàn chân.",
    techniqueDetail: "Yếu lĩnh khẩu quyết: 'Quay người hay hoành thoái thành tư thế nghiêng, vai hướng về phía trước (biên thân). Khi quay người thì 2 bàn chân song song, cách nhau khoảng một bề ngang bàn chân.' Kỹ thuật này giúp triệt tiêu đòn đánh trực diện của đối phương, đưa đối thủ vào góc chết trong khi ta vẫn giữ nguyên cự ly phản kích.",
    keyPoints: [
      "Hai bàn chân xoay song song cùng hướng",
      "Thân người nghiêng góc 45 độ né trục xung kích trực diện",
      "Trọng tâm dồn 70% vào chân sau, chân trước nhẹ nhàng linh hoạt",
      "Vai trước hướng thẳng vào trung tâm đối thủ"
    ],
    combatApplication: "Né tránh đòn đấm mạnh hoặc cú đá thọc của địch mà không cần lùi bước, mở đường cho đòn đánh chưởng vòng hoặc tóm cùi chỏ bẻ khóa.",
    rhyme: "Biên thân né đòn như cánh bướm • Mượn thế xoay trục chuyển ngàn cân."
  },
  {
    id: "di-chuyen-ma-bo",
    nameVn: "Di Chuyển Mã Bộ (Xước Mã & Truy Mã)",
    nameHán: "走馬 / 步法",
    imgUrl: "/assets/images/fundamentals/di_chuyen_ma_bo_authentic.png",
    category: "Bộ Pháp",
    shortDesc: "Bộ pháp tiến thoái luồn lách: Tiến lướt chân trước theo chân sau như người leo núi, sức nặng chủ yếu ở chân sau.",
    techniqueDetail: "Yếu lĩnh khẩu quyết: 'Khi tiến hay lùi đều nghiêng người, một chân trước một chân sau, như người leo núi (xước mã, truy mã). Trong các bài võ thường tiến 3 bước, lùi 3 bước (đạp cung trung). Hai bàn chân không ở cùng một mức nhưng vẫn phải song song nhau, sức nặng chủ yếu ở chân sau.'",
    keyPoints: [
      "Chân sau chịu 70% trọng lượng, chân trước 30%",
      "Di chuyển lướt nhẹ trên mặt sàn, không nhảy chồm",
      "Tiến chân trước bước trước - chân sau theo sau; Lùi chân sau bước trước - chân trước theo sau",
      "Khoảng cách hai chân luôn giữ cố định một bề ngang bàn chân"
    ],
    combatApplication: "Truy kích đối thủ đang thất thế hoặc rút lui an toàn khi bị dồn ép, giữ vững thế thăng bằng trên mọi địa hình cận chiến.",
    rhyme: "Truy mã lướt nhanh như gió thoảng • Tiến lùi nhịp nhàng nhập trung tâm."
  },
  {
    id: "hlv-xuat-cuoc-full",
    nameVn: "Cước Pháp & Đòn Gối Cầm Nã (Quyền 5 Cước 7)",
    nameHán: "腿法 / 膝法 (拳五腳七)",
    imgUrl: "/assets/images/fundamentals/hlv_xuat_cuoc_full.png",
    category: "Cước Pháp",
    shortDesc: "Nguyên lý 'Quyền 5 Cước 7': Vô ảnh cước, Tội tâm cước, Đoạt mệnh cước và đòn nâng cao đầu gối khống chế tay đối thủ (cầm nã) rồi quay mũi bàn chân đá móc lên.",
    techniqueDetail: "Theo sách gốc (Trang 30 & 148): 'Nhìn chung cước mạnh hơn quyền (Quyền 5 cước 7)... Nếu hai người đòn tay bằng nhau thì ai cước hơn thì sẽ thắng.' Dù không đá cao trên thắt lưng nhưng có những đòn đá cực kỳ nguy hiểm: Vô ảnh cước, Tội tâm cước (Toái tâm cước), Đoạt mệnh cước. Đặc biệt khi cận chiến: 'Dâng cao đầu gối, khống chế tay đối thủ (cầm nã) và quay mũi bàn chân đá móc lên — đòn này rất hiểm hóc vì đối thủ không nhìn thấy cú đá (bị gối che lấp)'. Ngoài ra khi gặp dịp còn dùng cả vai, hông, mông, đầu, lưng.",
    keyPoints: [
      "Quyền 5 Cước 7: Hai người đòn tay ngang nhau thì người giỏi cước hơn sẽ thắng",
      "Tam đại tuyệt cước tầm thấp: Vô ảnh cước, Tội tâm cước, Đoạt mệnh cước",
      "Đòn gối cầm nã đặc dị: Nâng gối khóa tay địch rồi xoay mũi bàn chân đá móc lên",
      "Phối hợp các phần khác của cơ thể khi cận chiến: Hích vai, hông, mông, đầu, lưng"
    ],
    combatApplication: "Khống chế tay đối phương bằng đầu gối, đá móc từ điểm mù hoặc triệt hạ khớp gối, ống quyển, hạ bộ trong lúc tay đang giao thủ.",
    rhyme: "Quyền năm cước bảy định hơn thua • Gối khóa chân móc địch khôn ngờ."
  },
  {
    id: "quy-ma-tan",
    nameVn: "Quy Mã Tấn (Tấn Hạ Thấp Trọng Tâm Sát Đất)",
    nameHán: "龜馬步 / 跪馬",
    imgUrl: "/assets/hinh-2x/p031-h01.png",
    category: "Tấn Pháp",
    shortDesc: "Khi địch hạ thấp người đánh hạ bàn, không được cúi gập lưng mà phải hạ thấp theo thế Quy Mã Tấn: quỳ một gối, chân kia giẫm sàn, người vuông góc đùi.",
    techniqueDetail: "Yếu lĩnh giáo trình: Khi địch hạ người xuống thấp, tuyệt đối không được cúi người xuống mà 'hạ thấp' người theo thế Quy Mã Tấn. Trong tấn này, một bàn chân giẫm xuống đất, chân kia quỳ gối, người quay theo hướng vuông góc với đùi của chân giẫm bàn xuống đất. Giữ lưng thẳng, che kín hạ bộ và sẵn sàng tung đòn đánh tầm thấp hoặc luồn lách né đòn.",
    keyPoints: [
      "Một chân giẫm vững trên sàn, một đầu gối quỳ sát đất",
      "Thân người giữ vuông góc với đùi của chân giẫm sàn, không cúi gập lưng",
      "Hai tay thủ kín chấn thủy và hạ bộ trên trục Tý Ngọ",
      "Dùng khi giáp chiến tầm cực thấp hoặc chống đòn quét hạ bàn của địch"
    ],
    combatApplication: "Đón đỡ các đòn đá quét chân, đòn đấm móc bụng hoặc các đòn quật ngã tầm thấp của đối phương mà không bị mất thăng bằng.",
    rhyme: "Quy mã hạ thấp định càn khôn • Thân thẳng hạ bàn vững tựa non."
  },
  {
    id: "ma-cheo-xa-quyen",
    nameVn: "Mã Chéo Xà Quyền (Bộ Pháp Đan Chéo Thần Tốc)",
    nameHán: "蛇拳叉馬",
    imgUrl: "/assets/hinh-2x/p031-h02.png",
    category: "Bộ Pháp",
    shortDesc: "Mã bộ phức tạp di chuyển bằng cách xoay 2 chân sát nhau đan chéo, lướt 2 chân cùng lúc, bộ pháp luồn lách đặc thù của Xà quyền.",
    techniqueDetail: "Yếu lĩnh giáo trình: 'Có một số mã bộ phức tạp như mã chéo, mã di chuyển bằng quay 2 chân sát nhau (như trong bài Xà Quyền), lướt 2 chân cùng một lúc... chỉ khi học cao mới được tập.' Đôi chân di chuyển mềm mại, vặn xoắn như thân rắn trườn bò, tạo ra những góc tiếp cận bất ngờ mà đối phương không thể lường trước.",
    keyPoints: [
      "Hai bàn chân đặt sát nhau đan chéo linh hoạt",
      "Lướt hai chân cùng một lúc ma sát sàn",
      "Thân người uốn lượn theo nhịp chuyển của hông và cột sống",
      "Kết hợp đòn xỉa ngón tay (Chỉ pháp) của Xà quyền"
    ],
    combatApplication: "Luồn lách vào mạn sườn hoặc sau lưng đối thủ trong góc hẹp, đánh lừa tầm nhìn và phản xạ của đối phương.",
    rhyme: "Mã chéo xà hành thân chuyển bước • Uyển chuyển luồn lách nhập trung môn."
  },
  {
    id: "bo-phap-ty-ngo",
    nameVn: "Sơ Đồ Bộ Pháp Trục Tý Ngọ (Tiến, Lùi, Xước Mã)",
    nameHán: "子午步法圖",
    imgUrl: "/assets/hinh-2x/p034-h01.png",
    category: "Bộ Pháp",
    shortDesc: "Sơ đồ các bước chân di chuyển tiến, lùi trên trục Tý Ngọ Tuyến A-B: chân trước tiến kéo chân sau theo, đạp cung trung, túc bất ly địa.",
    techniqueDetail: "Yếu lĩnh giáo trình: Bộ pháp di chuyển thẳng trên trục Tý Ngọ Tuyến. Tiến bước: Chân trước nhích lên một bước ngắn theo trục thẳng, chân sau lập tức lướt theo giữ nguyên cự ly hẹp. Lùi bước: Chân sau lùi trước, chân trước rút theo. Đạp cung trung: Thường tiến 3 bước, lùi 3 bước nhịp nhàng. Túc bất ly địa: Bàn chân luôn ma sát trượt sát mặt sàn.",
    keyPoints: [
      "Trục thẳng A-B định hướng đường tiến thoái trung tâm",
      "Chân trước bước trước - chân sau theo sau; Lùi chân sau bước trước - chân trước theo sau",
      "Hai mép ngoài bàn chân luôn giữ khoảng cách hẹp cố định",
      "Trọng tâm 70% ở chân sau, 30% chân trước"
    ],
    combatApplication: "Áp sát chiếm lĩnh trục trung lộ của đối thủ hoặc rút lui chiến thuật giữ vững cự ly phòng thủ.",
    rhyme: "Tý Ngọ trục tuyến bước tiến thoái • Đạp cung trung định thế ngàn cân."
  },
  {
    id: "hoanh-thoai-bien-than",
    nameVn: "Hoành Thoái Biên Thân (Quay 90° & 270°)",
    nameHán: "橫退邊身",
    imgUrl: "/assets/hinh-2x/p034-h02.png",
    category: "Bộ Pháp",
    shortDesc: "Kỹ thuật quay chuyển thân người 90° (sang trái) và 270° (sang phải) đưa vai ra trước thành thế biên thân né đòn trong chớp mắt.",
    techniqueDetail: "Yếu lĩnh giáo trình: Hoành thoái là quay chuyển thân người sang phải hay trái và kết quả là đưa vai trái hay phải ra trước với tư thế biên thân. Quay sang Trái (90°): Bàn chân trái quay ra sau 90°, bàn chân phải đặt trước song song chân trái. Quay sang Phải (270°): Bàn chân phải quay ra sau 270° theo chiều kim đồng hồ, thân quay 90° sang phải, vai trái và chân trái ra trước.",
    keyPoints: [
      "Quay người kết hợp di chuyển vòng của bàn chân",
      "Đưa thân về thế biên thân, thu hẹp diện tích tiếp xúc với đòn địch",
      "Điểm cố định xoay ở giữa bàn chân, không nhấc gót nhấc mũi",
      "Lực xuất phát từ lòng đất qua chân sau (Lực do địa khởi)"
    ],
    combatApplication: "Hóa giải các cú đấm thẳng mạnh mẽ của đối phương mà không cần lùi bước, biến góc đánh của địch thành sơ hở để phản công.",
    rhyme: "Hoành thoái xoay thân tiêu kình lực • Biên thân nhập nội chế địch quân."
  }
];

export const BASIC_DRILLS = [
  {
    id: "drill-quay-tay",
    number: 1,
    title: "Bài Tập Quay Tay (Xoay Khớp Cổ Tay & Cùi Chỏ)",
    nameHán: "旋手練習",
    purpose: "Khai mở toàn bộ 8 khớp xương vùng cổ tay và khớp khuỷu, rèn luyện độ mềm dẻo nhưng chứa nội kình thâm hậu.",
    instructions: [
      "Đứng thế Tấn Kiềm Dương chuẩn mực, giữ lưng thẳng, ngực hàm, ý thủ đan điền.",
      "Tay trái thu quyền sát nách; tay phải đưa ra trước ngực, khuỷu tay cách chéo áo 5-7cm ngang trên rốn.",
      "Chu kỳ 1 (Ngửa tay Than thủ): Đầu ngón tay giữa ở tâm O, đưa ra điểm B, xoay ngược kim đồng hồ B-M-A-N-B một vòng tròn. Lật úp bàn tay, đánh cổ tay sang trái từ B đến A.",
      "Chu kỳ 2 (Úp tay Phục thủ): Từ điểm A, quay cổ tay xuôi kim đồng hồ A-M-B-N-A một vòng tròn. Tại A lật ngửa bàn tay và đánh cổ tay từ A sang B trở về điểm xuất phát.",
      "Dụng cụ chuẩn theo sách gốc (Trang 32): Có thể dùng một vòng tròn bằng tre hay kim loại, đường kính khoảng 18cm, treo cố định để tập quay cổ tay trong vòng đó mà không chạm vành."
    ],
    repetition: "100 lần xoay thuận + 100 lần xoay nghịch mỗi ngày (khoảng 15-20 phút)",
    martialPrinciple: "Cổ tay mềm thì kình lực mới lưu thông; tay cứng đờ thì không thể hóa giải đòn đấm đối phương.",
    images: {
      masterPosture: "/assets/hinh-2x/p032-h01.png",
      cycle1Diagram: "/assets/hinh-2x/p032-h02.png",
      cycle2Diagram: "/assets/hinh-2x/p032-h03.png",
      fullStepsGuide: "/assets/hinh-2x/p033-h01.png"
    }
  },
  {
    id: "drill-quay-nguoi",
    number: 2,
    title: "Bài Tập Quay Người & Hoành Thoái (Biên Thân Né Đòn)",
    nameHán: "轉身橫退",
    purpose: "Rèn luyện khả năng né đòn trong gang tấc trên trục Tý Ngọ Tuyến mà hai bàn chân không cần rời khỏi vị trí ban đầu.",
    instructions: [
      "Đứng Tấn Kiềm Dương, hai tay thủ quyền dưới nách.",
      "Quay người tại chỗ: Hai bàn chân quay 30-45 độ, thân người quay 90 độ sang trái. Hai bàn chân song song cách nhau một bề ngang bàn chân, vai phải hướng ra trước (biên thân).",
      "Trục xoay bàn chân chuẩn sách gốc (Trang 32): Lúc đầu có thể được phép nhấc nhẹ 2 gót chân, nhưng sau phải đặt xuống hoàn toàn và quay trên toàn bộ bàn chân. Điểm cố định sẽ là giữa bàn chân. Tránh quay với điểm cố định là mũi hay gót bàn chân.",
      "Quay người kết hợp quay tay: Vừa xoay thân vừa xuất Than thủ hoặc Phục thủ, trọng tâm dồn 70% vào chân sau, cảm nhận lực từ lòng đất đi lên cơ thể (Lực do địa khởi).",
      "Hoành thoái 90° (sang trái) và Hoành thoái 270° (sang phải): Di chuyển vòng bàn chân ra sau đồng thời với quay người để chuyển hướng đánh vuông góc mà vẫn bám sát đối phương."
    ],
    repetition: "50 lần sang trái + 50 lần sang phải nhịp nhàng",
    martialPrinciple: "Thân bất ly trục, dĩ dật đãi lao - Lấy sự xoay chuyển nhẹ nhàng của thân thể để triệt tiêu lực ngàn cân của địch.",
    images: {
      turnLeftMaster: "/assets/hinh-2x/p033-h02.png",
      turnRightMaster: "/assets/hinh-2x/p033-h03.png",
      hoanhThoaiDiagram: "/assets/hinh-2x/p034-h02.png",
      hoanhThoai270Diagram: "/assets/hinh-2x/p034-h03.png"
    }
  },
  {
    id: "drill-di-chuyen",
    number: 3,
    title: "Bài Tập Di Chuyển Bước Chân (Mã Bộ & Bộ Pháp Tý Ngọ)",
    nameHán: "步法移動",
    purpose: "Rèn luyện sự linh hoạt của hạ bàn, tiến thoái nhịp nhàng mà hạ môn luôn được che kín.",
    instructions: [
      "Tiến bước (Xước mã leo núi / Truy mã): Chân trước nhích lên một bước ngắn theo trục thẳng A-B, chân sau lập tức lướt theo giữ nguyên cự ly hẹp.",
      "Lùi bước: Chân sau lùi trước một bước ngắn, chân trước lập tức rút theo giữ nguyên cấu trúc.",
      "Đạp cung trung: Tiến 3 bước, lùi 3 bước nhịp nhàng theo hơi thở Đan Điền.",
      "Túc bất ly địa: Hai bàn chân luôn ma sát trượt sát mặt sàn, không nhảy chồm chồm làm mất gốc thăng bằng.",
      "Khoảng cách giữa hai mép bàn chân luôn giữ cố định bằng một bề ngang bàn chân."
    ],
    repetition: "Lướt tiến lùi 10 vòng võ đường mỗi buổi tập",
    martialPrinciple: "Chân đi như thuyền lướt trên nước, hạ bàn vững như bàn thạch.",
    images: {
      centerlineStepsDiagram: "/assets/hinh-2x/p034-h01.png",
      advanceRetreatDiagram: "/assets/hinh-2x/p035-h01.png",
      footworkCurveDiagram: "/assets/hinh-2x/p035-h02.png"
    }
  },
  {
    id: "drill-linh-giac",
    number: 4,
    title: "Bài Tập Khởi Điểm Linh Giác & Tán Thủ (Cảm Ứng Kình Lực)",
    nameHán: "靈覺散手",
    purpose: "Đánh thức giác quan xúc giác của da thịt, rèn phản xạ tự động hóa giải đòn mà không cần thông qua mắt nhìn và não bộ tính toán.",
    instructions: [
      "Hai người tập đứng đối diện nhau thế Tấn Kiềm Dương.",
      "Áp hai cẳng tay vào nhau (một người Than thủ, một người Phục thủ) trên trục Tý Ngọ Tuyến.",
      "Nhắm mắt lại hoặc nhìn thẳng vào ngực đối phương, chỉ dùng xúc giác tiếp xúc cẳng tay để cảm nhận hướng lực đẩy hoặc kéo (Thính kình).",
      "Khi đối thủ phát lực đẩy tới thì lập tức xoay thân biên thân hóa giải; khi đối thủ rút tay thì lập tức thọc quyền theo vào chỗ trống (Lai lưu khứ tống, suất thủ trực xung).",
      "Tán thủ phối hợp: Tách riêng từng chiêu thức cơ bản để phân tích điểm mạnh, điểm yếu và kỹ thuật hóa giải tương ứng."
    ],
    repetition: "15 - 20 phút mỗi buổi tập đôi",
    martialPrinciple: "Đến thì đón, đi thì tiễn, buông tay thì phóng quyền (Lai lưu khứ tống, suất thủ trực xung).",
    images: {
      niemThuMasterImg: "/assets/hinh-2x/p146-h01.png",
      reflexDiagram: "/assets/hinh-2x/p147-h01.png",
      niemThuMasterPartner: "/assets/hinh-2x/p148-h01.png"
    }
  }
];

export const LEARNING_STAGES = [
  {
    stage: 1,
    id: "fundamentals",
    title: "Chặng 1: Cơ Bản & Bái Tổ",
    subtitle: "Tấn Pháp, Tam Thủ, Xoay Tay & Bộ Pháp",
    icon: "Shield",
    desc: "Nắm vững Nhị Tự Kiềm Dương Tấn, Tam Thủ (Than-Bàng-Phục), bài tập Xoay tay, Bộ pháp di chuyển và 9 bước Bái Tổ Sư Môn."
  },
  {
    stage: 2,
    id: "forms-core",
    title: "Chặng 2: Tam Đại Quyền Pháp",
    subtitle: "Tiểu Niệm Đầu ➔ Tầm Kiều ➔ Tiêu Chỉ",
    icon: "Flame",
    desc: "Bài võ cơ bản đầu tiên 'Niệm đầu bất chính chung thân bất chính', kế tiếp Tầm Kiều bắc nhịp và Tiêu Chỉ ngón tay phóng kình."
  },
  {
    stage: 3,
    id: "108-the",
    title: "Chặng 3: Hệ Thống 108 Thế",
    subtitle: "Tại Chỗ & Tiến Lùi (Đơn & Đối Luyện)",
    icon: "Swords",
    desc: "108 thế kinh điển hoàn chỉnh: đơn luyện định khuôn và đối luyện song đấu 2 người phá vỡ phòng tuyến đối phương."
  },
  {
    stage: 4,
    id: "dummy",
    title: "Chặng 4: Mộc Nhân",
    subtitle: "Mộc Nhân Trang 1954 Sư Tổ Tế Công",
    icon: "Sparkles",
    desc: "Rèn luyện thể lực thép, đo khoảng cách gang tấc, triệt hạ cước và thao pháp luồn lách quanh thân mộc nhân."
  },
  {
    stage: 5,
    id: "weapons",
    title: "Chặng 5: Ngũ Hình & Binh Khí",
    subtitle: "Long, Xà, Hổ, Báo, Hạc & Song Đao, Côn, Kiếm",
    icon: "Award",
    desc: "Ngũ hình quyền biến hóa cùng hệ thống binh khí cổ truyền: Bát Trảm Đao, Lục Điểm Bán Côn, Liễu Diệp Kiếm."
  }
];
