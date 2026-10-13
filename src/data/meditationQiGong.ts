/**
 * meditationQiGong.ts
 * Hệ thống hóa toàn bộ lý thuyết, khẩu quyết, thân pháp và kỹ thuật Thở 4 Thì
 * thuộc Chương IV: Nội Công — Sách Giáo Trình Phật Gia Vịnh Xuân Quyền
 * Tác giả: GS.TS Y Khoa Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức (2012)
 * Cố vấn & thực hành: Võ Đường Huỳnh Thúc Kháng
 */

export interface BreathingPhaseGuide {
  id: "exhale" | "hold_empty" | "inhale" | "hold_full";
  phaseNumber: 1 | 2 | 3 | 4;
  title: string;
  shortTitle: string;
  action: string;
  bellyAction: string;
  mindAction: string;
  visualCue: string;
  colorTheme: {
    bg: string;
    border: string;
    text: string;
    glow: string;
    circleColor: string;
  };
  details: string[];
}

export interface BreathingPreset {
  id: string;
  name: string;
  description: string;
  secondsPerPhase: number; // Thời gian mỗi thì (giây) - thở vuông 4 thì bằng nhau
  recommendation: string;
}

export interface MeditationPosture {
  id: string;
  name: string;
  hanzi?: string;
  alias?: string;
  description: string;
  instruction: string[];
  suitability: string;
}

export interface MartialMaxim {
  text: string;
  pinyin?: string;
  meaning: string;
  source: string;
}

export const BREATHING_PHASES: BreathingPhaseGuide[] = [
  {
    id: "exhale",
    phaseNumber: 1,
    title: "Thì 1: Thở Ra — Tống Trọc Khí",
    shortTitle: "Thở Ra",
    action: "Thở ra từ từ, êm dịu, đều đặn qua miệng",
    bellyAction: "Bụng dưới (Đan Điền) xẹp dần từ trước ra sau như quả bóng bị xẹp",
    mindAction: "Ý thủ Đan Điền, theo dõi hơi thở thoát ra, tống xuất mọi trọc khí và căng thẳng",
    visualCue: "Vòng tròn từ từ co nhỏ lại, năng lượng thu liễm về tâm Đan Điền",
    colorTheme: {
      bg: "bg-amber-950/30",
      border: "border-amber-500/40",
      text: "text-amber-300",
      glow: "shadow-[0_0_50px_rgba(245,208,108,0.25)]",
      circleColor: "#F5D06C",
    },
    details: [
      "Miệng hé nhẹ, thở ra từ từ, êm dịu và đều đặn, không gấp gáp.",
      "Bụng dưới xẹp dần dần như 'quả bóng' bị ép từ trước ra sau.",
      "Khi xẹp hoàn toàn, hơi cũng được tống hết ra ngoài, tạo áp lực âm tự nhiên trong khoang bụng.",
      "Ý nghĩ chuyên chú tại Hạ Đan Điền, cảm nhận mọi tạp niệm và khí trọc tan biến theo làn hơi.",
    ],
  },
  {
    id: "hold_empty",
    phaseNumber: 2,
    title: "Thì 2: Nín Thở Khi Xẹp — Tĩnh Lặng Vô Vi",
    shortTitle: "Nín Thở (Xẹp)",
    action: "Nghỉ hoàn toàn mọi chuyển động hô hấp, toàn thân giữ nguyên trạng tĩnh lặng",
    bellyAction: "Bụng dưới giữ nguyên trạng thái xẹp hoàn toàn",
    mindAction: "Tâm rỗng rang, buông xả mọi ý niệm; có thể kết hợp nhẹ nhàng thút hậu môn (thút cốc đạo)",
    visualCue: "Vòng tròn ở kích thước thu nhỏ tĩnh lặng, ánh sáng thâm trầm, huyền định",
    colorTheme: {
      bg: "bg-purple-950/30",
      border: "border-purple-500/40",
      text: "text-purple-300",
      glow: "shadow-[0_0_50px_rgba(168,85,247,0.25)]",
      circleColor: "#C084FC",
    },
    details: [
      "Toàn thân buông lỏng, ngưng mọi động tác thở, tuyệt đối không gồng cứng.",
      "Bụng dưới duy trì ở trạng thái xẹp rỗng hoàn toàn trong suốt thời lượng thì này.",
      "Kỹ thuật thút cốc đạo (thu thút hậu môn): Người tập nhẹ nhàng thút hậu môn 2 nhịp nhỏ, giúp lưu thông tĩnh mạch trĩ, phòng ngừa táo bón và sa ruột theo y huấn của GS.TS Nguyễn Mạnh Nhâm.",
      "Tâm trí an định vào khoảng không tịch mịch, không vướng bận ngoại giới.",
    ],
  },
  {
    id: "inhale",
    phaseNumber: 3,
    title: "Thì 3: Hít Vào — Nạp Khí Thiên Cương",
    shortTitle: "Hít Vào",
    action: "Hít vào từ từ, đều nhẹ qua đường miệng (hoặc mũi), khí chạy thẳng xuống Đan Điền",
    bellyAction: "Bụng dưới phình căng dần dần như quả bóng được bơm căng đầy tròn",
    mindAction: "Quán tưởng nuốt khí Thiên Cương (Prana) thanh khiết và ánh trăng mát lành (thôn nguyệt) vào bụng",
    visualCue: "Vòng tròn từ từ nở rộng rực rỡ, đón nhận sinh khí ngọc bích của đất trời",
    colorTheme: {
      bg: "bg-emerald-950/30",
      border: "border-emerald-500/40",
      text: "text-emerald-300",
      glow: "shadow-[0_0_50px_rgba(52,211,153,0.3)]",
      circleColor: "#34D399",
    },
    details: [
      "Hít vào từ từ, nhẹ nhàng theo đường giữa thân thể (nhịp mạch Nhâm) chạy thẳng xuống Hạ Đan Điền.",
      "Bụng dưới nở rộng, phình căng dần đều như quả bóng đàn hồi căng đầy trọn vẹn.",
      "Khi khí vào thấy mát dịu ở vòm họng và đầu lưỡi, cảm giác thanh tịnh như tụt vào nội tại (nội quan).",
      "Quán tưởng pháp: Thôn Nguyệt (nuốt ánh trăng) — hút trọn năng lượng thanh lương tinh khiết của vũ trụ vào nuôi dưỡng từng tế bào.",
    ],
  },
  {
    id: "hold_full",
    phaseNumber: 4,
    title: "Thì 4: Nín Thở Khi Đầy — Tụ Khí Đan Điền",
    shortTitle: "Nín Thở (Đầy)",
    action: "Nghỉ hoàn toàn trong trạng thái bụng căng đầy dưỡng khí, Ý trụ vững chắc tại Đan Điền",
    bellyAction: "Bụng dưới giữ nguyên độ căng đầy tròn trịa, khí lắng đọng",
    mindAction: "Quán tưởng chân khí nuôi dưỡng toàn bộ ngũ tạng và khai thông kinh mạch",
    visualCue: "Vòng tròn ở độ mở cực đại, phát sáng hoàng kim rực rỡ, tỏa sáng toàn thân",
    colorTheme: {
      bg: "bg-amber-950/40",
      border: "border-[#F5D06C]/50",
      text: "text-[#F5D06C]",
      glow: "shadow-[0_0_60px_rgba(245,208,108,0.4)]",
      circleColor: "#F5D06C",
    },
    details: [
      "Toàn thân tĩnh lặng hoàn toàn, bụng dưới duy trì trạng thái căng tràn dưỡng khí.",
      "Ý thủ Đan Điền: Ý thức neo chặt tại một điểm duy nhất dưới rốn khoảng 3cm (Hạ Đan Điền).",
      "Có thể thực hiện thêm 1-2 lần thút hậu môn nhẹ nhàng để ép khí lan tỏa nuôi dưỡng tủy xương và kinh mạch.",
      "Cơ thể ở trạng thái hòa nhập vi diệu, huyết áp ổn định, nuôi dưỡng các tổ chức quý phái (tim và não bộ).",
    ],
  },
];

export const BREATHING_PRESETS: BreathingPreset[] = [
  {
    id: "beginner",
    name: "Khởi Đầu (4 Giây / Thì)",
    description: "Nhịp thở êm dịu, dễ thực hiện cho người mới làm quen với phương pháp thở bụng và thiền tĩnh tọa.",
    secondsPerPhase: 4,
    recommendation: "Mỗi chu kỳ 16 giây. Tập từ 10 - 15 phút mỗi ngày vào sáng sớm hoặc tối trước khi ngủ.",
  },
  {
    id: "standard",
    name: "Giáo Trình Chuẩn (5 Giây / Thì)",
    description: "Nhịp thở kinh điển được GS.TS Nguyễn Mạnh Nhâm hướng dẫn trong giáo trình Phật Gia Vịnh Xuân (2012).",
    secondsPerPhase: 5,
    recommendation: "Mỗi chu kỳ 20 giây. Thời lượng tối ưu từ 30 - 45 phút (tương đương tàn một tuần hương).",
  },
  {
    id: "intermediate",
    name: "Nâng Cao (6 Giây / Thì)",
    description: "Dành cho người đã tập luyện đều đặn trên 3 tháng, dung tích sống tăng cao, cơ hoành dẻo dai.",
    secondsPerPhase: 6,
    recommendation: "Mỗi chu kỳ 24 giây. Cần duy trì tâm thái hoàn toàn thư giãn, không gắng gượng gò bó.",
  },
  {
    id: "advanced",
    name: "Thâm Niên (8 Giây / Thì)",
    description: "Dành cho võ sinh thâm niên nội công, hơi thở sâu thẳm, dài lâu, khí tức tự nhiên hòa vào thiên nhiên.",
    secondsPerPhase: 8,
    recommendation: "Mỗi chu kỳ 32 giây. Trạng thái thiền sâu (thiên nhân hợp nhất), thân tâm an lạc tột cùng.",
  },
];

export const MEDITATION_POSTURES: MeditationPosture[] = [
  {
    id: "full_lotus",
    name: "Kiết Già (Song Bàn Tất)",
    hanzi: "結跏趺坐",
    alias: "Tư thế Hoa Sen Trọn Vẹn",
    description: "Bàn chân phải gác lên đùi trái, bàn chân trái gác lên đùi phải, hai lòng bàn chân hướng lên trời. Đây là tư thế vững chãi nhất của tọa thiền.",
    instruction: [
      "Ngồi trên bồ đoàn hoặc đệm êm, giữ xương chậu vững chắc.",
      "Lưng và cổ thẳng tắp như dây dọi (thuận hàng đề đính), không ngả trước, không nghiêng sau.",
      "Thả lỏng khớp vai, ngực hơi hàm nhẹ (hàm hung bạt bối).",
      "Lưỡi uốn nhẹ chạm nướu răng trên để nối hai mạch Nhâm và Đốc.",
      "Hai bàn tay đặt ngửa trên gối hoặc bắt ấn Phật thủ trước Đan Điền.",
    ],
    suitability: "Lựa chọn số một cho người có khớp hông và cơ gân mềm dẻo. Khóa chặt các dòng năng lượng rò rỉ.",
  },
  {
    id: "half_lotus",
    name: "Bán Già (Đơn Bàn Tất)",
    hanzi: "半跏趺坐",
    alias: "Tư thế Hoa Sen Một Nửa",
    description: "Một chân đặt sát vào đùi trong, chân kia gác lên bắp chân hoặc đùi của chân đối diện.",
    instruction: [
      "Thích hợp cho đa số môn sinh chưa thể ngồi Kiết Già ngay.",
      "Đảm bảo cột sống vẫn giữ thẳng trục đứng, đầu đỉnh hư linh.",
      "Có thể đổi luân phiên chân trên chân dưới giữa các buổi tập để cân bằng hai bên hông.",
      "Tập trung buông lỏng hai khớp vai và cơ mặt tối đa.",
    ],
    suitability: "Phổ biến nhất, thích hợp cho mọi lứa tuổi bắt đầu bước vào rèn luyện nội công.",
  },
  {
    id: "chair",
    name: "Ngồi Ghế Ngay Ngắn (Tọa Ỷ)",
    hanzi: "端坐椅上",
    alias: "Tư thế Ngồi Ghế Hiện Đại",
    description: "Ngồi trên ghế phẳng tự nhiên, hai bàn chân tiếp đất trọn vẹn song song, không dựa lưng vào thành ghế.",
    instruction: [
      "Đùi nằm ngang vuông góc với cẳng chân ở đầu gối.",
      "Cẳng chân vuông góc với mặt đất, hai bàn chân bấm nhẹ huyệt Dũng Tuyền xuống sàn.",
      "Lưng giữ thẳng độc lập, không tì lưng vào tựa ghế.",
      "Hai tay đặt úp hoặc ngửa nhẹ nhàng trên hai đầu đùi.",
    ],
    suitability: "Rất phù hợp cho nhân viên văn phòng, người cao tuổi hoặc người có vấn đề về khớp gối.",
  },
  {
    id: "kneeling",
    name: "Quỳ Gối (Chính Tọa)",
    hanzi: "正坐",
    alias: "Tư thế Quỳ Nhật Bản (Seiza)",
    description: "Quỳ gối trên đệm mềm, mông đặt lên hai gót chân, ngón chân cái bên trái nằm ngay dưới ngón chân cái bên phải.",
    instruction: [
      "Hai đầu gối cách nhau khoảng 1-2 nắm tay.",
      "Cột sống dựng thẳng đứng tự nhiên, lồng ngực mở thoáng nhưng thư giãn.",
      "Trọng tâm dồn nhẹ về Hạ Đan Điền.",
      "Rất tốt cho việc nắn chỉnh cột sống thắt lưng và giữ tâm trí tỉnh táo.",
    ],
    suitability: "Thích hợp khi tập trong không gian võ đường truyền thống hoặc khi cần chống lại sự buồn ngủ.",
  },
];

export const FOUR_GOLDEN_RULES = [
  {
    no: "1",
    title: "Bấm Chặt Chân Xuống Đất (Tiếp Địa Khí)",
    hanzi: "湧泉接地",
    desc: "Dù ngồi hay đứng luyện, các đầu ngón chân và huyệt Dũng Tuyền ở lòng bàn chân phải bám nhẹ vững chãi xuống đất, tạo thế liên kết vững bền với địa khí vũ trụ.",
  },
  {
    no: "2",
    title: "Thả Lỏng Toàn Thân Tối Đa (Thư Giãn Hoàn Toàn)",
    hanzi: "全身放鬆",
    desc: "Tuyệt đối không co cứng, lên gân. Điểm dễ co cứng nhất là hai vai, cơ trán, khóe mắt và quai hàm. Càng thả lỏng, kinh mạch càng thông suốt, khí huyết mới vận hành êm trôi.",
  },
  {
    no: "3",
    title: "Hô Hấp Theo Nhịp Điệu Đều Đặn (Thở 4 Thì)",
    hanzi: "調息有律",
    desc: "Tuân thủ nghiêm ngặt 4 thì thở (Thở ra - Nín thở - Hít vào - Nín thở). Độ dài mỗi thì bằng nhau (thở vuông), tạo nên chu kỳ tuần hoàn hài hòa, không thở gấp, không ngắt quãng.",
  },
  {
    no: "4",
    title: "Tập Trung Tư Tưởng Vào Đan Điền (Ý Thủ Đan Điền)",
    hanzi: "意守丹田",
    desc: "Khí là vua của Lực. Ý ở đâu Khí ở đó. Luôn neo giữ tâm thức tại Hạ Đan Điền (dưới rốn khoảng 3cm) trong suốt buổi thiền. Nhất niệm trừ vạn niệm, dập tắt mọi tạp niệm thế tục.",
  },
];

export const FOUR_TABOOS_AND_THREE_NEEDS = {
  taboos: [
    { name: "Thô Phù (粗浮)", desc: "Tập luyện hời hợt, nông cạn, không đào sâu vào bản chất tâm pháp và điều tức." },
    { name: "Táo Tiến (躁進)", desc: "Nóng vội muốn có kết quả nhanh, gượng ép hơi thở khiến tim đập nhanh và mệt mỏi." },
    { name: "Tham Đắc (貪得)", desc: "Tham lam công phu, muốn sở hữu kình lực kỳ dị mà quên đi cái gốc dưỡng sinh căn bản." },
    { name: "Việt Liệp (獵等)", desc: "Học nhảy cóc, đốt cháy giai đoạn, chưa vững tọa thiền cơ bản đã đòi luyện công phu thượng thừa." },
  ],
  needs: [
    { name: "Tiệm Tiến (漸進)", desc: "Kiên trì tiến từng bước vững chắc, thở từ 4 giây tăng dần lên 5 giây, 6 giây một cách tự nhiên." },
    { name: "Hằng Tâm (恆心)", desc: "Một lòng bền bỉ rèn luyện mỗi ngày như việc đánh răng rửa mặt, nước chảy đá mòn." },
    { name: "Tiết Dục (節慾)", desc: "Giữ gìn tinh lực, bảo tồn nguyên khí, sinh hoạt tiết chế để nuôi dưỡng thần khí dồi dào." },
  ],
};

export const MEDICAL_AND_MARTIAL_BENEFITS = [
  {
    domain: "Y Học & Cơ Sinh Học Hiện Đại",
    points: [
      {
        title: "Xoa Bóp & Tắm Rửa Nội Tạng (Massage Interne)",
        content: "Khi thở bụng 4 thì, cơ hoành di chuyển lên xuống với biên độ lớn, tác động xoa bóp trực tiếp lên dạ dày, gan, ruột, lách; thúc đẩy tuần hoàn vi mạch, cuốn trôi cặn bã ứ trệ, ngừa tắc mạch.",
      },
      {
        title: "Kích Hoạt 'Bộ Não Thứ Hai' Trong Khoang Bụng",
        content: "Theo GS. Gershon (ĐH Columbia), hệ thần kinh ruột chứa hàng trăm triệu nơ-ron hoạt động tự động. Thiền thở bụng kích thích mạng lưới này sản sinh Endorphin và Cytokine Interleukin giúp an thần, giảm đau và tăng cường miễn dịch tự nhiên.",
      },
      {
        title: "Bồi Bổ Tổ Chức Quý Phái (Tim Mạch & Não Bộ)",
        content: "Tăng dung tích sống của phổi, nâng cao nồng độ oxy hòa tan trong máu, nuôi dưỡng não bộ và cơ tim (tissue noble), bình ổn huyết áp và loại bỏ hoàn toàn căng thẳng thần kinh (tension nerveuse).",
      },
      {
        title: "Thực Chứng Lâm Sàng Trừ Bệnh",
        content: "Thực tế tại môn phái đã chứng minh nội công hỗ trợ chữa khỏi lao phổi nặng có nước màng phổi (trường hợp Cố Võ sư Trần Thúc Tiển), viêm xoang mạn tính, hen suyễn, đau dạ dày và bệnh trĩ (nhờ kỹ thuật thút cốc đạo).",
      },
    ],
  },
  {
    domain: "Võ Học & Kình Lực Phật Gia Vịnh Xuân",
    points: [
      {
        title: "Khí Là Vua Của Lực (Ý Đáo Khí Đáo, Khí Đáo Lực Đáo)",
        content: "'Đả quyền bất luyện công, đáo lão nhất trường không - Lực bất đả quyền, quyền bất đả công'. Cơ bắp có giới hạn theo tuổi tác, nhưng nội khí càng luyện càng thâm hậu. Khi xuất đòn, ý dẫn khí, khí phát kình lực thấu triệt.",
      },
      {
        title: "Phát Lực Thốn Kình Xuyên Thấu",
        content: "Nội công giúp võ sinh phát lực ở cự ly cực ngắn (thốn kình / một tấc) mà kình lực dẫn truyền sâu, không cần lấy đà cơ bắp.",
      },
      {
        title: "Hình Thành Vòng Khí Hộ Thân (Thiết Bố Sam)",
        content: "Khí vận hành điều hòa toàn thân, tăng khả năng chịu lực va đập tại các điểm xung yếu mà không tổn thương nội tạng.",
      },
      {
        title: "Thính Kình & Linh Giác Nhạy Bén",
        content: "Tâm có định thì thần mới sáng, giúp hệ thần kinh cảm nhận xúc giác nhạy bén (thính kình), nhận biết hướng lực của đối phương ngay khi vừa tiếp xúc tay.",
      },
    ],
  },
];

export const DISCHARGE_STEPS = [
  {
    step: "1",
    title: "Tĩnh Lưỡng Sau Thiền",
    desc: "Khi hết thời gian thiền, ngồi yên tại chỗ từ 2 - 3 phút, hít thở nhẹ nhàng tự nhiên, tận hưởng trạng thái thư thái, khoan khoái trước khi hoạt động.",
  },
  {
    step: "2",
    title: "Xoa Nóng Hai Bàn Tay & Áp Mắt",
    desc: "Xát mạnh hai lòng bàn tay vào nhau cho đến khi thật nóng rực, áp nhẹ lên hai hốc mắt để dưỡng thị lực, sau đó vuốt nhẹ từ trán xuống cằm và vuốt hai bên gáy.",
  },
  {
    step: "3",
    title: "Xoa Hạ Đan Điền 36 Vòng",
    desc: "Đặt hai bàn tay chồng lên nhau tại vùng dưới rốn, xoa tròn nhẹ nhàng quanh rốn theo chiều kim đồng hồ 36 vòng để thu liễm chân khí trở về kho Đan Điền.",
  },
  {
    step: "4",
    title: "Co Duỗi Khớp Chân Tay",
    desc: "Nhẹ nhàng duỗi hai chân ra phía trước, xoay cổ chân, bóp nhẹ hai bắp chân để giải trừ cảm giác tê mỏi (nếu có), từ từ đứng dậy khoan thai.",
  },
];
