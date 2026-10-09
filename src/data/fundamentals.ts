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
  purpose: string;
  instructions: string[];
  repetition: string;
  martialPrinciple: string;
}

export const HAND_ANATOMY = {
  diagramUrl: "/assets/images/fundamentals/anatomy_hand.png",
  title: "Sơ Đồ Giải Phẫu Các Phần Của Tay",
  source: "Sách Phật Gia Vịnh Xuân Quyền (2012) - Trang scan 28",
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
    nameVn: "Than Thủ (Tay Ngửa Xin Ăn)",
    nameHán: "攤手",
    pinyin: "Tān Shǒu",
    isSanShouCore: true,
    imgUrl: "/assets/images/fundamentals/than_thu.png",
    level: "Trung (Chấn Thủy/Mỏ Ác)",
    shortDesc: "Bàn tay cẳng tay ngửa, cùi chỏ ở giữa người cách chéo áo một nắm tay. Cẳng tay và ngón tay duỗi thẳng mềm mại.",
    techniqueDetail: "Than thủ là thế đỡ cơ bản và quan trọng bậc nhất. Bàn tay mở ngửa hướng lên trời như người ăn mày ngửa tay xin ăn. Cùi chỏ ghim chặt vào trung lộ, không bao giờ nhấc bổng hay mở nách. Lực phát từ xương bả vai truyền thẳng qua cùi chỏ ra đầu ngón tay.",
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
    techniqueDetail: "Bàng thủ tạo thành hình cánh cung đàn hồi tuyệt đối. Vai và tay mềm mại thả lỏng hoàn toàn. Tuyệt đối không dùng sức cơ bắp để chống cự lại lực đối thủ, mà mượn cấu trúc vòm cung và chuyển động xoay trục thân mình để trượt tiêu biến toàn bộ kình lực của địch.",
    keyPoints: [
      "Cùi chỏ nâng cao hơn cổ tay một góc tù thoải mái (khoảng 120-135 độ)",
      "Cổ tay thả lỏng, bàn tay hướng nghiêng sang bên",
      "Không chống gượng lực đối kháng mà mượn lực trượt qua cánh cung"
    ],
    combatApplication: "Hóa giải các đòn đấm vòng, móc ngang hoặc đòn đấm mạnh xộc thẳng. Sau khi trượt lực lập tức biến thành Phục thủ hoặc phóng Nhật tự quyền phản công chớp nhoáng.",
    rhyme: "Bàng thủ cánh cung tiêu kình địch • Thân xoay né đòn hóa sát chiêu."
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
    techniqueDetail: "Phục thủ là thế tay kiểm soát trung môn siêu đẳng. Cổ tay cong mềm mại như chiếc móc câu, các ngón tay rủ nhẹ thả lỏng áp trên cẳng tay đối thủ. Khuỷu tay luôn hướng về rốn và trung lộ để truyền tải trọng lượng thân trên đè nén địch.",
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
    nameVn: "Đòn Cùi Chỏ (Khuỷu Tay / Trửu Pháp)",
    nameHán: "肘法",
    pinyin: "Zhǒu Fǎ",
    isSanShouCore: false,
    imgUrl: "/assets/images/fundamentals/don_cui_cho.png",
    level: "Đa Dụng",
    shortDesc: "Đòn cận chiến cực kỳ lợi hại. Dùng đầu khuỷu tay đánh vào những điểm quan trọng trong cự ly áp sát.",
    techniqueDetail: "Khuỷu tay là vũ khí cứng rắn bậc nhất trên cơ thể. Uy lực của đòn cùi chỏ cực lớn và tàn khốc vì truyền trực tiếp toàn bộ khối lượng thân người xoay hông mà không qua khớp giảm chấn cổ tay. Khớp vai và khuỷu tay phải cực kỳ linh hoạt.",
    keyPoints: [
      "Áp sát cự ly gần (Zero Distance)",
      "Phát lực đồng thời từ xoay eo và đạp gót chân",
      "Tay kia che chắn kín đáo bảo vệ mặt và sườn"
    ],
    combatApplication: "Đánh cùi chỏ thốc lên cằm, giật cùi chỏ ngang thái dương hoặc thúc cùi chỏ sau khi đối phương ôm vật.",
    rhyme: "Trửu pháp hiểm hóc cự ly gần • Khớp cứng như sắt bẻ vỡ địch."
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
    rhyme: "Khuyên thủ cuộn tròn thoát hiểm nguy • Cổ tay linh hoạt biến khôn lường."
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
    techniqueDetail: "Đòn đấm liên hoàn nổi tiếng nhất của Vịnh Xuân: Tay phải đấm ra thì tay trái giật về nách tích lực, khi tay phải chạm đích thì tay trái lập tức phóng tiếp nối theo đúng quỹ đạo. Hai tay vận hành ngược chiều nhau tạo mô-men xoắn cân bằng tuyệt đối.",
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
  }
];

export const FOOT_STANCES: FootStanceTechnique[] = [
  {
    id: "tan-kiem-duong",
    nameVn: "Nhị Tự Kiềm Dương Tấn (Tấn Chân Hẹp Chuẩn Mực)",
    nameHán: "二字鉗羊馬",
    imgUrl: "/assets/images/fundamentals/tan_kiem_duong_authentic.png",
    category: "Tấn Pháp",
    shortDesc: "Cốt lõi hạ bàn Vịnh Xuân: Cự ly hai chân hẹp (khoảng một bề ngang bàn chân), đầu gối hơi khuỵu khép che kín hạ môn, hai tay thu quyền sát nách.",
    techniqueDetail: "Nguyên tắc khẩu quyết chuẩn mực: 'Đứng: theo Nhị tự Kiềm dương Mã, chỉ hơi khuỵu khớp gối một chút. Bàn chân hình chữ bát, nhưng khi quay người thì 2 bàn chân song song, cách nhau khoảng một bề ngang bàn chân.' Hai đầu gối khép nhẹ che kín 100% vùng hạ bộ, xương cụt thu, đỉnh đầu treo như dây dọi.",
    keyPoints: [
      "Khoảng cách hai bàn chân hẹp (khoảng một bề ngang bàn chân)",
      "Hai đầu gối hơi khuỵu khép vào trong che kín hạ bộ",
      "Lưng thẳng, ngực hàm, xương cụt thu vào trong, đỉnh đầu treo như dây dọi",
      "Trọng tâm phân bổ đều 50/50 trên hai bàn chân"
    ],
    combatApplication: "Là bệ phóng cho toàn bộ 108 chiêu thức và bài Mộc Nhân. Giúp xoay trục né đòn trong nháy mắt mà không cần di chuyển vị trí bàn chân.",
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
    nameVn: "Tư Thế Chân Khi Xuất Cước (Cước Phạt Tầm Thấp)",
    nameHán: "出腳式 / 低腿",
    imgUrl: "/assets/images/fundamentals/hlv_xuat_cuoc_full.png",
    category: "Cước Pháp",
    shortDesc: "Chân trụ bám đất vững chắc, chân đá co gối dâng cao vuông góc bảo vệ hạ môn, cước phạt tầm thấp không quá thắt lưng.",
    techniqueDetail: "Nguyên lý bất di bất dịch của Vịnh Xuân: 'Vô ảnh cước - Cước bất xuất tầm cao' (Đá không cao quá rốn). Khi xuất cước, đầu gối dâng cao vuông góc bảo vệ hạ bộ của mình trước khi phóng cước. Mũi chân chúc nhẹ hướng vào khớp gối, ống quyển hoặc mắt cá chân đối thủ. Chân trụ đứng vững, hai tay thủ ngực bảo vệ trung tuyến.",
    keyPoints: [
      "Đầu gối chân đá dâng cao che kín hạ bộ trước khi duỗi cước",
      "Chỉ đá từ thắt lưng trở xuống (gối, cẳng chân, mắt cá)",
      "Chân trụ hơi chùng giữ thăng bằng tuyệt đối",
      "Hai tay vẫn giữ thế thủ chặt chẽ trước ngực"
    ],
    combatApplication: "Đá triệt gối (Triệt cước), dẫm mắt cá chân, đá móc hất gót hạ bộ đối thủ trong lúc tay đang giằng co cận chiến.",
    rhyme: "Cước xuất tầm thấp giấu bóng hình • Triệt gối gãy chân địch ngã lăn."
  }
];

export const BASIC_DRILLS: BasicDrill[] = [
  {
    id: "drill-quay-tay",
    number: 1,
    title: "Bài Tập Quay Tay (Xoay Khớp Cổ Tay & Cùi Chỏ)",
    purpose: "Khai mở toàn bộ 8 khớp xương vùng cổ tay và khớp khuỷu, rèn luyện độ mềm dẻo nhưng chứa nội kình thâm hậu.",
    instructions: [
      "Đứng thế Tấn Kiềm Dương chuẩn mực, giữ lưng thẳng, ngực hàm.",
      "Hai tay đưa ra phía trước ngang mức chấn thủy (mức trung bình).",
      "Thực hiện xoay tròn hai cổ tay theo chiều kim đồng hồ và ngược chiều kim đồng hồ.",
      "Cổ tay xoay tròn trịa mềm mại như vòng bi có mỡ bôi trơn, cánh tay và cùi chỏ giữ tĩnh tại trung lộ, không gồng cơ bắp."
    ],
    repetition: "100 lần xoay thuận + 100 lần xoay nghịch mỗi ngày",
    martialPrinciple: "Cổ tay mềm thì kình lực mới lưu thông; tay cứng đờ thì không thể hóa giải đòn đấm đối phương."
  },
  {
    id: "drill-quay-nguoi",
    number: 2,
    title: "Bài Tập Quay Người (Biên Thân Xoay Trục Né Đòn)",
    purpose: "Rèn luyện khả năng né đòn trong gang tấc trên trục Tý Ngọ Tuyến mà hai bàn chân không cần rời khỏi vị trí ban đầu.",
    instructions: [
      "Đứng Tấn Kiềm Dương, hai gót chân giữ nguyên vị trí bám chặt mặt sàn.",
      "Xoay trục hông và toàn bộ thân trên 90 độ sang trái, mắt nhìn hẳn sang trái, trọng tâm dồn 70% vào chân sau.",
      "Sau đó xoay ngược lại 90 độ sang phải, đổi trọng tâm tương tự.",
      "Cột sống giữ thẳng đứng như chiếc cột xoay quanh tim trục, không nghiêng ngả người."
    ],
    repetition: "50 lần sang trái + 50 lần sang phải nhịp nhàng",
    martialPrinciple: "Thân bất ly trục, dĩ dật đãi lao - Lấy sự xoay chuyển nhẹ nhàng của thân thể để triệt tiêu lực ngàn cân của địch."
  },
  {
    id: "drill-di-chuyen",
    number: 3,
    title: "Bài Tập Di Chuyển (Bộ Pháp Lướt Chân Giữ Cự Ly Hẹp)",
    purpose: "Rèn luyện sự linh hoạt của hạ bàn, tiến thoái nhịp nhàng mà hạ môn luôn được che kín.",
    instructions: [
      "Tiến bước: Chân trước nhích lên một bước ngắn (khoảng nửa bàn chân), chân sau lập tức lướt theo giữ nguyên cự ly hẹp.",
      "Lùi bước: Chân sau lùi trước một bước ngắn, chân trước lập tức rút theo.",
      "Khoa chân tròn: Chân vẽ một vòng tròn ngắn từ trong ra ngoài mượn quán tính xoay hông né đòn.",
      "Hai bàn chân luôn ma sát trượt trên sàn, không nhảy chồm chổm làm mất gốc thăng bằng."
    ],
    repetition: "Lướt tiến lùi 10 vòng võ đường mỗi buổi tập",
    martialPrinciple: "Chân đi như thuyền lướt trên nước, hạ bàn vững như bàn thạch."
  },
  {
    id: "drill-linh-giac",
    number: 4,
    title: "Bài Tập Khởi Điểm Linh Giác (Cảm Ứng Tiếp Xúc Kình Lực)",
    purpose: "Đánh thức giác quan xúc giác của da thịt, rèn phản xạ tự động hóa giải đòn mà không cần thông qua mắt nhìn và não bộ tính toán.",
    instructions: [
      "Hai người tập đứng đối diện nhau thế Tấn Kiềm Dương.",
      "Áp hai cẳng tay vào nhau (một người Than thủ, một người Phục thủ).",
      "Nhắm mắt lại hoặc nhìn thẳng vào ngực đối phương, chỉ dùng xúc giác tiếp xúc cẳng tay để cảm nhận hướng lực đẩy hoặc kéo.",
      "Khi đối thủ phát lực đẩy tới thì lập tức xoay thân hóa giải; khi đối thủ rút tay thì lập tức thọc quyền theo vào chỗ trống."
    ],
    repetition: "15 - 20 phút mỗi buổi tập đôi",
    martialPrinciple: "Đến thì đón, đi thì tiễn, buông tay thì phóng quyền (Lai lưu khứ tống, suất thủ trực xung)."
  }
];

export const LEARNING_STAGES = [
  {
    stage: 1,
    id: "fundamentals",
    title: "Giai Đoạn 1: Cơ Bản Công",
    subtitle: "Thủ Pháp, Cước Pháp & 4 Bài Luyện Căn Bản",
    icon: "Shield",
    desc: "Nắm vững Tam Thủ (Than-Bàng-Phục), Tấn Kiềm Dương chân hẹp, Trục Tý Ngọ Tuyến và xoay khớp cổ tay."
  },
  {
    stage: 2,
    id: "bai-to",
    title: "Giai Đoạn 2: Bái Tổ & Nhập Môn",
    subtitle: "Nghi Thức 9 Bước & Khởi Quyền",
    icon: "Flower2",
    desc: "Kính nhớ công đức Sư Tổ Tế Công, Hưng hóa võ đạo, mở huyệt đạo và khai thông kinh mạch."
  },
  {
    stage: 3,
    id: "dojo",
    title: "Giai Đoạn 3: Đại Pháp 108 Thế",
    subtitle: "108 Chiêu Liên Hoàn Đơn & Đối Luyện",
    icon: "Swords",
    desc: "Học trọn vẹn 108 chiêu thức liên hoàn tại chỗ và tiến lùi, cầm nã thực chiến và phản xạ tự nhiên."
  },
  {
    stage: 4,
    id: "dummy",
    title: "Giai Đoạn 4: Cọc Gỗ Mộc Nhân",
    subtitle: "Mộc Nhân Trang Sư Tổ Tế Công 1954",
    icon: "Sparkles",
    desc: "Rèn luyện thể lực thép, đo khoảng cách gang tấc, triệt hạ cước và thao pháp luồn lách quanh 5 tầng cọc."
  }
];
