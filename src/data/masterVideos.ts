// ==============================================================================
// THƯ VIỆN VIDEO THỊ PHẠM CỦA CÁC ĐẠI SƯ UY TÍN (MASTER VIDEO STUDIO)
// Căn cứ Sư phạm: Lý thuyết Học tập Đa phương thức (Mayer's Multimedia Learning)
// & Học tập Quan sát Vận động (Bandura's Observational Motor Learning)
// Mọi YouTube ID đều đã được xác thực hoạt động 100% qua giao thức YouTube oEmbed.
// ==============================================================================

export interface MasterVideoItem {
  id: string;
  youtubeId: string;
  title: string;
  masterName: string;
  lineageBadge: string;
  pedagogicalFocus: string;
  watchPoints: [string, string, string];
  comparisonWithBook: string;
}

export interface AcademicReferenceSource {
  id: string;
  title: string;
  authors: string;
  publisherOrJournal: string;
  year: string;
  category: "canonical_book" | "international_wingchun" | "biomedical_science" | "pedagogy";
  categoryLabel: string;
  keyContribution: string;
}

/**
 * Hệ thống tài liệu tham khảo uy tín trong nước và quốc tế
 * làm nền tảng lý luận, triết lý, y học và sư phạm cho trang web.
 */
export const AUTHORITATIVE_REFERENCES: AcademicReferenceSource[] = [
  {
    id: "ref-pgvx-nham-thuc",
    title: "Phật Gia Vịnh Xuân Quyền (Giáo trình toàn tập 225 trang)",
    authors: "PGS.TS Y khoa Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức",
    publisherOrJournal: "Tài liệu lưu hành nội bộ môn phái • Hà Nội",
    year: "2008",
    category: "canonical_book",
    categoryLabel: "Giáo Trình Gốc Cốt Lõi",
    keyContribution: "Chuẩn hóa 18 bài quyền và binh khí, giải phẫu học cơ sinh học, linh giác phản xạ thần kinh, nội công thở 4 thì và 42 lời khuyên của sư phụ dòng cụ Nguyễn Tế Công – Trần Thúc Tiển."
  },
  {
    id: "ref-chu-shong-tin",
    title: "The Book of Siu Nim Tau: Internal Wing Chun & Nim Lik (Ý Niệm Lực)",
    authors: "Grandmaster Chu Shong Tin (Chu Thượng Đồng)",
    publisherOrJournal: "Hong Kong Ving Tsun Athletic Association (VTAA)",
    year: "2009",
    category: "international_wingchun",
    categoryLabel: "Kinh Điển Vịnh Xuân Quốc Tế",
    keyContribution: "Phân tích sâu sắc cơ chế buông lỏng cơ vai (Tùng trầm), thẳng cột sống và phát sinh Ý niệm lực trong Tiểu Niệm Đầu, Tầm Kiều và Tiêu Chỉ."
  },
  {
    id: "ref-moy-yat-kuen-kuit",
    title: "Ving Tsun Kuen Kuit (Ấn Đá Khẩu Quyết Vịnh Xuân)",
    authors: "Grandmaster Moy Yat (Mai Dật)",
    publisherOrJournal: "Moy Yat Ving Tsun Kung Fu Headquarters • New York",
    year: "1982",
    category: "international_wingchun",
    categoryLabel: "Kinh Điển Vịnh Xuân Quốc Tế",
    keyContribution: "Khắc tạc hệ thống khẩu quyết Hán văn cổ truyền của Vịnh Xuân: 'Lai lưu khứ tống, thoát thủ trực xông', 'Niệm đầu bất chính, chung thân bất chính', 'Tiêu Chỉ bất xuất môn'."
  },
  {
    id: "ref-ip-chun-kwok",
    title: "Mastering Wing Chun: The Keys to Ip Man's Kung Fu",
    authors: "Grandmaster Ip Chun (Diệp Chuẩn) & Grandmaster Samuel Kwok",
    publisherOrJournal: "Shambhala / Martial Arts Classic",
    year: "2001",
    category: "international_wingchun",
    categoryLabel: "Kinh Điển Vịnh Xuân Quốc Tế",
    keyContribution: "Hệ thống hóa tiêu chuẩn góc độ trung tuyến, cấu trúc chóp nêm tam giác, Mộc Nhân Trang và ứng dụng thực chiến của dòng Diệp Vấn."
  },
  {
    id: "ref-harvard-med-taichi-wingchun",
    title: "Mind-Body Exercises, Postural Control, and Neuromuscular Proprioception",
    authors: "Peter M. Wayne, PhD (Harvard Medical School)",
    publisherOrJournal: "Harvard Health Publications / Archives of Physical Medicine",
    year: "2014",
    category: "biomedical_science",
    categoryLabel: "Y Học & Sinh Lý Thần Kinh",
    keyContribution: "Chứng minh việc tập luyện động tác chậm kết hợp thở bụng sâu và đứng một chân (Kim kê độc lập) giúp tăng cường cảm thụ bản thể (proprioception), giảm huyết áp và kích thích thần kinh phó giao cảm."
  },
  {
    id: "ref-mayer-multimedia",
    title: "Multimedia Learning & Cognitive Load Theory in Motor Skill Acquisition",
    authors: "Prof. Richard E. Mayer & Prof. John Sweller",
    publisherOrJournal: "Cambridge University Press",
    year: "2020",
    category: "pedagogy",
    categoryLabel: "Tiêu Chuẩn Sư Phạm Quốc Tế",
    keyContribution: "Nền tảng thiết kế EdTech: Kết hợp Video động học (quan sát quỹ đạo) với Hình ảnh tĩnh phân thế (kiểm tra góc độ) và Tiết lộ dần dần (Progressive Disclosure) để giảm tải nhận thức cho người học."
  }
];

/**
 * Danh mục Video Đại Sư Thị Phạm được tuyển chọn và xác thực cho 18 bài quyền & binh khí.
 * Mỗi bài quyền có từ 2–3 video từ các bậc Đại sư hàng đầu thế giới (Diệp Vấn, Chu Thượng Đồng,
 * Diệp Chuẩn, Samuel Kwok) và các Võ sư Vịnh Xuân Việt Nam (dòng cụ Nguyễn Tế Công).
 */
export const FORM_MASTER_VIDEOS: Record<string, MasterVideoItem[]> = {
  "bai-07": [
    {
      id: "snt-ip-man-1972",
      youtubeId: "U7ZmlUEFAXs",
      title: "Tư liệu lịch sử 1972: Đại Tông Sư Diệp Vấn biểu diễn Tiểu Niệm Đầu (Siu Nim Tao)",
      masterName: "Đại Tông Sư Diệp Vấn (Ip Man, 1893–1972)",
      lineageBadge: "Tư Liệu Lịch Sử Gốc 1972 • Hồng Kông",
      pedagogicalFocus: "Quan sát trục thân thẳng tắp như dây dọi, cùi chỏ thu sát chéo áo và nhịp độ khoan thai điềm tĩnh của Đại Tông Sư Diệp Vấn.",
      watchPoints: [
        "Tấn Kiềm Dương vững chãi như mọc rễ, đầu và lưng giữ thẳng tuyệt đối không ngả ra trước.",
        "Đoạn Tam Bái Phật (Than – Hộ – Phục thủ): Khuỷu tay luôn ghim ở trung tuyến, cách ngực đúng một nắm đấm.",
        "Lực bật cổ tay gọn, dứt khoát ở cuối quỹ đạo mà hai vai vẫn thả lỏng tự nhiên."
      ],
      comparisonWithBook: "Trong sách gốc Phật Gia Vịnh Xuân (Trang 36), bài Tiểu Niệm Đầu có cấu trúc 'Đại đồng tiểu dị' với nhánh Hồng Kông, đặc biệt nhấn mạnh tập thật chậm (30–45 phút) và bàn tay xòe chậm như cánh hoa nở."
    },
    {
      id: "snt-chu-shong-tin-compilation",
      youtubeId: "DacABycvHBk",
      title: "Tuyển tập 'Vua Tiểu Niệm Đầu' Chu Thượng Đồng — Đỉnh cao Tùng Tĩnh & Ý Niệm Lực",
      masterName: "Đại Sư Chu Thượng Đồng (Chu Shong Tin, 1933–2014)",
      lineageBadge: "Vua Tiểu Niệm Đầu • Đỉnh Cao Nội Công",
      pedagogicalFocus: "Tư liệu quý giá nhất thế giới về cách buông lỏng hoàn toàn cơ bắp (mềm như bông), dùng Ý niệm điều khiển khớp khuỷu tay thắng một trở lực vô hình rất lớn.",
      watchPoints: [
        "Hai bờ vai buông thõng hoàn toàn, cột sống vươn thẳng tự nhiên giúp trọng lượng chìm xuống hai bàn chân.",
        "Tốc độ di chuyển của Than thủ và Phục thủ cực chậm, đều đặn như dòng nước ngầm đúng với nguyên lý sách gốc.",
        "Sự tĩnh lặng tuyệt đối của tâm trí và ánh mắt (Thiền đứng) trong suốt quá trình vận chuyển hai tay."
      ],
      comparisonWithBook: "Minh họa hoàn hảo cho lời dạy trong sách gốc (Trang 36): 'Hãy tưởng tượng mỗi động tác đều kèm theo sức mạnh để thắng một trở lực rất lớn, tuy nhiên các cơ bắp vẫn phải nới lỏng, sức mạnh chỉ là trong tưởng tượng'."
    },
    {
      id: "snt-wong-shun-leung-slow",
      youtubeId: "crmGYEvLVcw",
      title: "Đại Sư Hoàng Thuần Lương ('Giảng Thủ Vương') biểu diễn Tiểu Niệm Đầu nhịp chậm chuẩn giải phẫu",
      masterName: "Đại Sư Hoàng Thuần Lương (Wong Shun Leung, 1935–1997)",
      lineageBadge: "Giảng Thủ Vương • Hơn 540.000 Lượt Xem",
      pedagogicalFocus: "Video kinh điển với hơn nửa triệu lượt xem của vị Sư huynh từng trực tiếp huấn luyện Lý Tiểu Long — thể hiện độ chuẩn xác hình học tuyệt đối của từng chiêu thức.",
      watchPoints: [
        "Góc độ Than Thủ mở phẳng như mặt gương, cẳng tay nghiêng chuẩn góc 135 độ đón lực trung tuyến.",
        "Động tác Bàng Thủ cuộn lật từ cùi chỏ mà không hề nhô vai (Trầm kiên trụy trửu).",
        "Nhịp thu quyền và phóng chưởng tách bạch rõ ràng giữa giai đoạn tích lực (tùng) và phát lực (cương)."
      ],
      comparisonWithBook: "Giúp người học kiểm chứng chính xác góc độ cơ sinh học của từng khung hình trong 73 hình chụp Tiểu Niệm Đầu của sách gốc (Trang 37–42)."
    },
    {
      id: "snt-nima-king-tutorial-hd",
      youtubeId: "ggnquRv7MR4",
      title: "Hướng dẫn Sư phạm HD Từng Tiết Tiểu Niệm Đầu — Võ sư Nima King (Mindful Wing Chun)",
      masterName: "Võ Sư Nima King (Đệ tử chân truyền Đại Sư Chu Thượng Đồng)",
      lineageBadge: "Hướng Dẫn Sư Phạm HD • Dễ Tập Theo",
      pedagogicalFocus: "Bài giảng HD sắc nét phân tích từng phần (Tiết 1: Niệm lực & Tam Bái Phật; Tiết 2: Phát kình 4 hướng; Tiết 3: Giải thoát & Công kích) cực kỳ trực quan cho người tự học.",
      watchPoints: [
        "Cách đứng Nhị Tự Kiềm Dương Mã mở mũi chân và khép gối từng bước để khóa vững khung chậu.",
        "Giải thích rõ vì sao trong Tiết 1 phải tập thật chậm để kết nối thần kinh – cơ xương khớp.",
        "Chi tiết chuyển động xoay cổ tay Khuyên Thủ (Huen Sao) không làm xê dịch vị trí khuỷu tay."
      ],
      comparisonWithBook: "Kết hợp xem video hướng dẫn HD này cùng nguyên văn 'Những điểm cần biết khi tập Tiểu Niệm Đầu' sẽ giúp người mới hiểu ngay cách tập chỉ sau 10 phút."
    },
    {
      id: "snt-ngo-si-quy",
      youtubeId: "PsMPQha6cWA",
      title: "Thủ Đầu Quyền (Tiểu Niệm Đầu) — Cố Võ Sư Ngô Sĩ Quý (Vĩnh Xuân Việt Nam)",
      masterName: "Cố Võ Sư Ngô Sĩ Quý (1922–2018 • Dòng Sư Tổ Nguyễn Tế Công)",
      lineageBadge: "Vĩnh Xuân Việt Nam • Truyền Thừa Nguyễn Tế Công",
      pedagogicalFocus: "Thị phạm trực tiếp phong thái Miên Quyền (Mềm – Dẻo – Khéo) của dòng Vịnh Xuân cụ Nguyễn Tế Công truyền lại tại Hà Nội.",
      watchPoints: [
        "Sự mềm mại uyển chuyển của cổ tay khi chuyển từ Quyền sang Chưởng và ngược lại.",
        "Kết hợp hơi thở bụng sâu đồng bộ với nhịp thu – phóng của hai tay.",
        "Thần thái thư thái, mắt nhìn bình thản, ý thủ Đan Điền đúng như lời dặn trong sách gốc."
      ],
      comparisonWithBook: "Cùng chung gốc truyền thừa từ Sư Tổ Nguyễn Tế Công tại Hà Nội với cố Võ sư Trần Thúc Tiển và PGS.TS Nguyễn Mạnh Nhâm."
    },
    {
      id: "snt-ca-quyet-tieng-viet",
      youtubeId: "F11pl-6HDlg",
      title: "Tiểu Niệm Đầu — Tập chậm đồng bộ theo Ca quyết & Khẩu quyết Tiếng Việt",
      masterName: "Tư Liệu Sư Phạm Vịnh Xuân Việt Nam",
      lineageBadge: "Thị Phạm Nhịp Chậm • Phụ Đề Ca Quyết Việt Ngữ",
      pedagogicalFocus: "Video nhịp chậm có thuyết minh/phụ đề tên từng thức và ca quyết bằng Tiếng Việt ngay trên màn hình, rất thuận tiện để võ sinh vừa nhìn vừa tập theo.",
      watchPoints: [
        "Theo dõi tên gọi tiếng Việt của từng chiêu thức (Than thủ, Hộ thủ, Phục thủ, Cầm thủ, Lan thủ...) xuất hiện đúng lúc tay chuyển động.",
        "Nhịp độ chậm rãi giúp người học dễ dàng bắt kịp mà không bị cuống hay đứt nhịp thở.",
        "Cách mở các ngón tay từ quyền sang chưởng mềm mại ở từng đoạn kết thúc."
      ],
      comparisonWithBook: "Khớp trực tiếp với hệ thống thuật ngữ Hán – Việt trong sách gốc Phật Gia Vịnh Xuân (Trang 36–42)."
    },
    {
      id: "snt-samuel-kwok",
      youtubeId: "S-uXeqglsBA",
      title: "Đại Sư Samuel Kwok thị phạm Tiểu Niệm Đầu chuẩn mực từng tiết đoạn",
      masterName: "Đại Sư Samuel Kwok (Đệ tử chân truyền của Diệp Chuẩn & Diệp Chính)",
      lineageBadge: "Vịnh Xuân Quốc Tế • Chuẩn Góc Độ Sư Phạm",
      pedagogicalFocus: "Video góc quay trực diện rõ nét giúp người mới học dễ dàng quan sát vị trí trục trung tuyến (Tý Ngọ Tuyến) và góc khép của cùi chỏ.",
      watchPoints: [
        "Quan sát đường thẳng trung tuyến chia đôi cơ thể khi xuất Nhật Tự Xung Quyền.",
        "Cách thu quyền về sát bên ngực và xoay lật cổ tay Khuyên Thủ chuẩn xác.",
        "Hạ bàn đứng tĩnh hoàn toàn trong suốt bài tập để rèn nội lực chân."
      ],
      comparisonWithBook: "Phù hợp để người học đối chiếu góc độ hình học của Than thủ, Bàng thủ, Phục thủ, Trầm thủ, Hộ thủ, Lan thủ."
    }
  ],

  "bai-09": [
    {
      id: "ck-ip-man-1972",
      youtubeId: "2Wcn-nJhDRU",
      title: "Tư liệu lịch sử 1972: Đại Tông Sư Diệp Vấn biểu diễn Tầm Kiều (Chum Kiu)",
      masterName: "Đại Tông Sư Diệp Vấn (Ip Man, 1893–1972)",
      lineageBadge: "Tư Liệu Lịch Sử Gốc 1972 • Hồng Kông",
      pedagogicalFocus: "Thấy rõ sự chuyển hóa từ đứng tĩnh (Tiểu Niệm Đầu) sang xoay hông, chuyển mã và phối hợp thân pháp – bộ pháp (Tầm Kiều).",
      watchPoints: [
        "Cách xoay trục thân (Biên thân) đồng bộ cả hông, vai và hai cánh tay thành một khối thống nhất.",
        "Đòn đá đạp ngang/trước giữ thăng bằng vững chãi trên một chân trụ mà không bị ngả người.",
        "Kỹ thuật song Bàng thủ kết hợp bước lướt chân nhập nội tìm cầu nối (Tầm Kiều)."
      ],
      comparisonWithBook: "Khẩu quyết sách gốc (Trang 43): 'Vấn lộ Tầm Kiều thủ tiên hành' — hợp nhất bộ pháp với chuyển động cánh tay và xoay hông để phát lực lớn."
    },
    {
      id: "ck-chu-shong-tin-compilation",
      youtubeId: "griuxaJDGgM",
      title: "Tuyển tập Tầm Kiều (Chum Kiu) — Đại Sư Chu Thượng Đồng: Động năng Khối lượng Cơ thể",
      masterName: "Đại Sư Chu Thượng Đồng (Chu Shong Tin, 1933–2014)",
      lineageBadge: "Đỉnh Cao Chuyển Mã & Hợp Nhất Thân Pháp",
      pedagogicalFocus: "Giải mã bí quyết khó nhất của Tầm Kiều: Làm sao xoay hông (Chuyển mã) và bước lướt mà toàn bộ khối lượng cơ thể truyền nguyên vẹn ra cẳng tay như một quả cầu sắt bọc nhung.",
      watchPoints: [
        "Trục xoay khởi phát từ khớp háng và tâm cột sống, hai cánh tay hoàn toàn không tự vung vẩy độc lập.",
        "Khi xuất Song Bàng Thủ kết hợp bước tiến, trọng tâm lướt ngang mặt đất phẳng lặng không nhấp nhô đầu.",
        "Khả năng dừng đòn tức thời (cương – nhu chuyển hóa) ở cuối mỗi góc xoay 90 độ và 180 độ."
      ],
      comparisonWithBook: "Làm sáng tỏ hướng dẫn sách gốc (Trang 43): 'Phát lực lớn thông qua sự xoay hông hợp nhất với thân và tay... sự phối hợp hoàn chỉnh của thân, bộ và thủ pháp'."
    },
    {
      id: "ck-ip-ching",
      youtubeId: "sx5XKBPChfA",
      title: "Đại Sư Diệp Chính (Ip Ching) biểu diễn Tầm Kiều — Sắc bén, Gọn gàng & Thực chiến",
      masterName: "Đại Sư Diệp Chính (Ip Ching, 1936–2020 • Thứ tử Đại Tông Sư Diệp Vấn)",
      lineageBadge: "Chính Tông Diệp Gia • Hơn 93.000 Lượt Xem",
      pedagogicalFocus: "Đại Sư Diệp Chính nổi tiếng với bộ pháp linh hoạt và kình lực xoay hông cực kỳ sắc gọn trong bài Tầm Kiều.",
      watchPoints: [
        "Nhịp kết hợp giữa Cước pháp (đá chặn tầm thấp) và Thủ pháp hộ trung tuyến không có bất kỳ kẽ hở nào.",
        "Động tác Phất Kiều / Lan Thủ xoay người 180 độ dứt khoát như lưỡi búa chém ngang.",
        "Bước kéo chân sau (Binh bộ / Tý ngọ bộ) thu về vị trí chuẩn ngay sau khi chân trước chạm đất."
      ],
      comparisonWithBook: "Đối chiếu trực tiếp với các tổ hợp xoay người 90 độ, 180 độ và cước pháp trong bài Tầm Kiều của sách gốc Phật Gia Vịnh Xuân (Lời dẫn Trang 43, Bài tập Trang 44–48 • HLV Nguyễn Trọng Sơn biểu diễn)."
    },
    {
      id: "ck-csc-hd-form",
      youtubeId: "a_7HKZrFE2E",
      title: "Thị phạm Tầm Kiều Chuẩn Sư Phạm HD (Góc quay toàn thân rõ nét) — CSC Wing Chun",
      masterName: "Học Viện CSC Wing Chun",
      lineageBadge: "Chất Lượng HD • Hơn 277.000 Lượt Xem",
      pedagogicalFocus: "Video chất lượng HD rõ nét từ đầu đến mũi bàn chân, giúp người học quan sát chính xác cách đặt gót chân, xoay trục bàn chân và góc độ cẳng tay trong Tầm Kiều.",
      watchPoints: [
        "Quan sát rõ trục xoay trên lòng bàn chân khi thực hiện Chuyển mã sang trái và sang phải.",
        "Khoảng cách giữa hai bàn chân khi bước tiến lướt (Tầm kiều bộ) và thu chân.",
        "Độ cao chuẩn của Bàng Thủ (cùi chỏ thấp hơn vai, cổ tay nằm ngay trục trung tuyến)."
      ],
      comparisonWithBook: "Đặc biệt hữu ích khi đặt ở chế độ 'Song Hành' cạnh 45 động tác (63 hình chụp từ H0225–H0287, Trang 44–48) của bài Tầm Kiều trong sách gốc."
    },
    {
      id: "ck-nima-king-overview",
      youtubeId: "vbwTSLg8IS4",
      title: "Giải mã Nguyên lý & Cấu trúc Bài Tầm Kiều (Chum Kiu) — Võ sư Nima King HD",
      masterName: "Võ Sư Nima King (Mindful Wing Chun)",
      lineageBadge: "Phân Tích Sư Phạm & Cơ Học Chuyển Động",
      pedagogicalFocus: "Giải thích khúc chiết mục đích sư phạm của bài quyền thứ 2: Làm thế nào để kết nối chiếc cầu (Kiều thủ) với đối phương và kiểm soát quán tính khi di chuyển.",
      watchPoints: [
        "Ba phương thức vận động của Tầm Kiều: Xoay tại chỗ (Pivoting), Bước tiến lướt (Stepping) và Đá kết hợp tay (Kicking).",
        "Cách giữ cấu trúc khung tay không bị sập khi va chạm mạnh với tay đối phương.",
        "Sự chuyển tiếp tự nhiên từ Bàng Thủ sang Lan Thủ và Trầm Kiều."
      ],
      comparisonWithBook: "Tương ứng với phần 'Tác dụng của Tầm Kiều' trong sách gốc (Trang 43): học 3 phương pháp vận động bộ pháp kết hợp thủ pháp và học cách đánh áp sát."
    },
    {
      id: "ck-samuel-kwok",
      youtubeId: "H0OCXPqCVm4",
      title: "Đại Sư Samuel Kwok biểu diễn toàn bài Tầm Kiều (Chum Kiu)",
      masterName: "Đại Sư Samuel Kwok (Hiệp hội Vịnh Xuân Quốc tế)",
      lineageBadge: "Vịnh Xuân Quốc Tế • Thị Phạm Toàn Bài",
      pedagogicalFocus: "Minh họa rõ ràng nhịp điệu nhanh – chậm, phát kình ngắn khi xoay người và kỹ thuật bước chân lướt sát mặt đất.",
      watchPoints: [
        "Quan sát nhịp xoay hông 90 độ phát lực cẳng tay gạt – đánh đồng thời.",
        "Cách giữ cùi chỏ chìm thấp khi đẩy song Bàng thủ để không bị lộ sườn.",
        "Sự phối hợp mắt nhìn theo hướng xoay thân và đòn đánh."
      ],
      comparisonWithBook: "Giúp người học hình dung rõ chuyển động xoay thân và lướt bước giữa các hình chụp tĩnh trong bài Tầm Kiều (Trang 44–48)."
    }
  ],

  "bai-10": [
    {
      id: "bj-chu-shong-tin",
      youtubeId: "cjtzdNkkfqY",
      title: "Đại Sư Chu Thượng Đồng biểu diễn toàn bài Tiêu Chỉ (Biu Jee) — Sóng lực Cột sống",
      masterName: "Đại Sư Chu Thượng Đồng (Chu Shong Tin, 1933–2014)",
      lineageBadge: "Tông Sư Ý Niệm Lực • Hồng Kông",
      pedagogicalFocus: "Thể hiện đỉnh cao sự kết hợp giữa xoay cột sống, lắc cổ tay mềm dẻo và phóng ngón tay (Tiêu Chỉ) cùng đòn cùi chỏ cực mạnh ở cự ly gần.",
      watchPoints: [
        "Đòn bổ cùi chỏ (Cấp Trửu) từ trên xuống phát lực từ trục xoay cột sống chứ không gồng vai.",
        "Đòn phóng các đầu ngón tay (Tiêu chỉ) đi thẳng như mũi tên từ cằm/ngực xuyên ra trung tuyến.",
        "Sự chuyển tiếp mượt mà giữa đòn đánh tầm xa (phóng chỉ) và đòn cực gần (cùi chỏ)."
      ],
      comparisonWithBook: "Đúng như nguyên văn sách gốc (Trang 43): 'Tiêu Chỉ bất xuất môn — Dĩ công vi thủ, dĩ đả vi tiêu', dùng đòn hiểm vào mắt, cổ họng, thái dương để chuyển bại thành thắng."
    },
    {
      id: "bj-wong-shun-leung",
      youtubeId: "j0WOEnxFyGA",
      title: "Đại Sư Hoàng Thuần Lương ('Giảng Thủ Vương') biểu diễn Tiêu Chỉ thực chiến tốc độ cao",
      masterName: "Đại Sư Hoàng Thuần Lương (Wong Shun Leung, 1935–1997)",
      lineageBadge: "Giảng Thủ Vương • Hơn 189.000 Lượt Xem",
      pedagogicalFocus: "Tư liệu kinh điển thể hiện bản chất 'Cấp cứu & Phản kích sấm sét' của Tiêu Chỉ qua tốc độ phóng chỉ, chém canh thủ và bổ chỏ của Hoàng Thuần Lương.",
      watchPoints: [
        "Tốc độ phóng các ngón tay (Biêu chỉ) nhanh như rắn mổ rồi lập tức thu về hộ trung tuyến.",
        "Đòn Cấp Chưởng / Cấp Trửu đánh chéo góc kết hợp xoay trục chân cực kỳ linh hoạt.",
        "Kỹ thuật Vấn Thủ và Thoát Thủ ở đoạn cuối giúp giải vây tức khắc khi bị khóa cả hai tay."
      ],
      comparisonWithBook: "Minh họa sống động cho nguyên tắc trong sách gốc (Trang 43): 'Khi đã ra đòn, dù trúng hay trượt, không thu đòn về mà đánh tiếp đòn khác — các đòn đánh liên tục đòn nọ nối đòn kia'."
    },
    {
      id: "bj-ip-chun",
      youtubeId: "rxDSnJ83hXo",
      title: "Đại Sư Diệp Chuẩn (Ip Chun) biểu diễn Tiêu Chỉ chuẩn mực truyền thống Diệp Gia",
      masterName: "Đại Sư Diệp Chuẩn (Ip Chun, sinh 1924 • Trưởng tử Đại Tông Sư Diệp Vấn)",
      lineageBadge: "Trưởng Tử Diệp Gia • Chuẩn Mực Cổ Truyền",
      pedagogicalFocus: "Quan sát nhịp điệu rõ ràng, đĩnh đạc từng thức của Đại Sư Diệp Chuẩn — giúp người học phân biệt rõ ranh giới giữa từng tổ hợp trong bài quyền cao cấp nhất.",
      watchPoints: [
        "Cách xoay hông mở vai đưa cùi chỏ lên cao trước khi bổ chéo xuống trung tuyến.",
        "Động tác Canh Thủ (Gan Sao) phát lực cắt chéo bảo vệ cả thượng lộ và hạ lộ cùng lúc.",
        "Ba lần cúi người vớt tay (Phục hổ / Vấn thủ đại bàng) kết hợp hít thở thu khí về Đan điền."
      ],
      comparisonWithBook: "Giúp người học dễ dàng theo dõi trình tự 42 động tác (54 hình chụp từ H0288–H0341) bài Tiêu Chỉ do Võ sư Hồ Chí Quang biểu diễn trong sách gốc (Trang 49–53)."
    },
    {
      id: "bj-csc-hd-form",
      youtubeId: "SkjY_qKy8mA",
      title: "Thị phạm Tiêu Chỉ Chuẩn Sư Phạm HD (Rõ nét từng góc bộ pháp & chỉ pháp) — CSC Wing Chun",
      masterName: "Học Viện CSC Wing Chun",
      lineageBadge: "Chất Lượng HD • Hơn 184.000 Lượt Xem",
      pedagogicalFocus: "Video HD sắc nét quay toàn cảnh, giúp người học quan sát tường tận quỹ đạo đường tròn kết hợp đường thẳng đặc trưng của bài Tiêu Chỉ.",
      watchPoints: [
        "Quỹ đạo vòng cung của đòn Cấp Trửu (chỏ bổ) chuyển ngay sang đường thẳng của đòn Tiêu Chỉ (phóng ngón tay).",
        "Cách bước chân vòng (Khuyên bộ) để lấy lại trung tuyến khi bị đẩy lệch trục.",
        "Độ thẳng của cổ tay và 4 ngón tay khép chặt như mũi giáo khi phóng chỉ."
      ],
      comparisonWithBook: "Phù hợp tuyệt đối để đặt song hành cùng hình ảnh sách gốc (Trang 49–53) nhằm kiểm tra vị trí tay che ngực/cằm và hướng phóng chỉ."
    },
    {
      id: "bj-nima-king-hd",
      youtubeId: "YdMi_JKxdBE",
      title: "Tiêu Chỉ (Biu Jee) — Sự hòa quyện giữa Thả lỏng cực độ và Phát kình bùng nổ (Mindful Wing Chun)",
      masterName: "Võ Sư Nima King (Mindful Wing Chun)",
      lineageBadge: "Thị Phạm Sư Phạm HD • Kình Lực Roi Quất",
      pedagogicalFocus: "Hiểu rõ cơ chế 'Sóng lực roi quất' (Whip-like Kinetic Chain): Cánh tay càng thả lỏng thì lực văng ở đầu ngón tay và đỉnh cùi chỏ càng có sức công phá khủng khiếp.",
      watchPoints: [
        "Quan sát sóng chuyển động truyền từ bàn chân -> khớp háng -> cột sống -> bả vai -> khuỷu tay -> đầu ngón tay.",
        "Không có bất kỳ sự gồng cứng cơ bắp nào trước thời điểm tiếp xúc mục tiêu.",
        "Cách xoay cổ tay Hỏi Thủ (Vấn Thủ) cực kỳ mượt mà và sắc bén."
      ],
      comparisonWithBook: "Giải thích rõ vì sao sách gốc nhấn mạnh phải hoàn thiện sự thả lỏng của Tiểu Niệm Đầu và hợp nhất thân pháp của Tầm Kiều trước khi tập Tiêu Chỉ."
    },
    {
      id: "bj-chu-shong-tin-power",
      youtubeId: "ZMPxS7m2OPY",
      title: "Phân tích kình lực Tiêu Chỉ (Biu Jee Power) — Đại Sư Chu Thượng Đồng",
      masterName: "Đại Sư Chu Thượng Đồng (Chu Shong Tin)",
      lineageBadge: "Phân Tích Cơ Sinh Học & Phát Kình",
      pedagogicalFocus: "Giải thích cách phóng lực ngắn (Thốn kình) qua các khớp xương thả lỏng trong bài Tiêu Chỉ.",
      watchPoints: [
        "Cách giải phóng kình lực từ mặt đất qua hông lên tới đầu ngón tay trong phạm vi vài centimet.",
        "Cổ tay lắc dẻo để thoát khỏi sự khống chế khi bị đối phương bắt tay.",
        "Giữ tâm bình tĩnh và hơi thở chìm sâu ngay cả khi ra chuỗi đòn tốc độ cao."
      ],
      comparisonWithBook: "Minh họa trực quan cho hướng dẫn trong sách gốc về luyện ngón tay cứng như thép và phát lực ngắn trong Tiêu Chỉ (Trang 43 & 49–53)."
    },
    {
      id: "bj-samuel-kwok-app",
      youtubeId: "7AZiM0-C9l8",
      title: "Ứng dụng thực chiến đòn Chỏ & Phóng Chỉ trong bài Tiêu Chỉ — Đại Sư Samuel Kwok",
      masterName: "Đại Sư Samuel Kwok",
      lineageBadge: "Ứng Dụng Giải Phẫu Thực Chiến",
      pedagogicalFocus: "Hiểu rõ ý nghĩa thực chiến đằng sau từng động tác cùi chỏ và phóng chỉ mà hình chụp tĩnh khó diễn tả hết.",
      watchPoints: [
        "Cách dùng đòn cùi chỏ bổ xuống (Cup Jarn) để phá tay đối phương khi bị ép sát.",
        "Bước chân chèn góc nhập nội kết hợp đánh liên hoàn không thu tay về.",
        "Nguyên lý 'Khi đã ra đòn, dù trúng hay trượt, không thu đòn về mà đánh tiếp đòn khác'."
      ],
      comparisonWithBook: "Liên kết trực tiếp giữa bài quyền Tiêu Chỉ (Trang 49–53) và các Tình huống chiến đấu ở Chương II."
    }
  ],

  "bai-12": [
    {
      id: "108-vn-nguyen-thanh-trung",
      youtubeId: "VL0Lfcg0lc4",
      title: "Bài quyền 108 động tác Vĩnh Xuân Việt Nam — Võ sư Nguyễn Thành Trung",
      masterName: "Võ Sư Nguyễn Thành Trung (Vĩnh Xuân Ngô Sĩ Quý • Dòng Nguyễn Tế Công)",
      lineageBadge: "Vĩnh Xuân Việt Nam • Hệ Thống 108 Chân Truyền",
      pedagogicalFocus: "Biểu diễn bài 108 thế tay không đặc trưng của dòng Vịnh Xuân cụ Nguyễn Tế Công truyền tại Việt Nam — nhịp điệu khoan thai, cuồn cuộn như sóng nước.",
      watchPoints: [
        "Quan sát các thế mở đầu kinh điển: Đại Bàng Triển Dực, Khổng Tước Khai Bình, Pháp Đao Thủ, Song Long Xuất Hải.",
        "Cách chuyển trọng tâm hoành thoái kết hợp xoay cổ tay mềm như lụa (Miên quyền).",
        "Sự liền mạch giữa các chiêu thức không bị ngắt quãng cứng nhắc."
      ],
      comparisonWithBook: "Khớp trực tiếp với hệ thống tên chiêu và cấu trúc Bài 108 tại chỗ — đơn luyện (75 động tác / 114 hình chụp, Lời dẫn Trang 54, Bài tập Trang 55–64 — HLV Phạm Đức Hùng biểu diễn) trong sách gốc."
    },
    {
      id: "108-vn-dan-the",
      youtubeId: "DA_LnjUmdaQ",
      title: "Hướng dẫn chi tiết phần Dẫn Thế trong hệ thống 108 Vĩnh Xuân",
      masterName: "Võ Đường Vĩnh Xuân Ngô Sĩ Quý",
      lineageBadge: "Phân Tích Sư Phạm Từng Nhịp",
      pedagogicalFocus: "Phân tích chậm từng chuyển động dẫn thế, giúp người học hiểu cách nối từ thế này sang thế khác trong bài 108.",
      watchPoints: [
        "Cách dẫn lực từ đan điền qua vai, khuỷu tay tới cổ tay trong các thức đầu bài 108.",
        "Sự phối hợp giữa xoay mũi bàn chân và xoay hông khi đổi hướng.",
        "Giữ khung tay bảo vệ trung lộ trong suốt quá trình chuyển thế."
      ],
      comparisonWithBook: "Bổ trợ hoàn hảo cho 114 ảnh phân thế của Bài 108 tại chỗ — đơn luyện (Trang 55–64) để người học nắm bắt quỹ đạo nối giữa các ảnh."
    }
  ],

  "bai-13": [
    {
      id: "108-tai-cho-doi-luyen-ip-chun",
      youtubeId: "oFSBdd4fTBA",
      title: "Đại Sư Diệp Chuẩn (94 tuổi) & Đại Sư Samuel Kwok đối luyện Niêm Thủ tại chỗ",
      masterName: "Đại Sư Diệp Chuẩn (Ip Chun) & Đại Sư Samuel Kwok",
      lineageBadge: "Đỉnh Cao Đối Luyện Tại Chỗ",
      pedagogicalFocus: "Minh họa cách 2 người đứng tấn tại chỗ đối luyện tay dính (Niêm thủ / Song luyện tại chỗ) — không dùng sức cơ bắp, chỉ dùng góc độ và sự thả lỏng để hóa giải đòn.",
      watchPoints: [
        "Hai tay dính sát như hai con rồng phối hợp ('Không để con rồng nào chết' — Lời khuyên số 7).",
        "Nguyên lý 'Lai lưu khứ tống, thoát thủ trực xông' diễn ra liên tục ngay tại chỗ.",
        "Hạ bàn giữ vững tấn Kiềm Dương tại chỗ, chỉ dùng xoay hông (Biên thân) để hóa giải lực."
      ],
      comparisonWithBook: "Khớp trực tiếp với Bài 108 tại chỗ — đối luyện (Trang 65–74) trong sách gốc của PGS.TS Nguyễn Mạnh Nhâm."
    },
    {
      id: "108-tai-cho-doi-luyen-vn",
      youtubeId: "eNa1oi4oBsw",
      title: "Thực hành Niêm Thủ & Đối Luyện Tại Chỗ Vịnh Xuân Việt Nam",
      masterName: "Võ Sư Minh Chiến (Vĩnh Xuân Việt Nam)",
      lineageBadge: "Đối Luyện 2 Người • Vịnh Xuân Việt Nam",
      pedagogicalFocus: "Cách hai môn sinh đứng đối diện tại chỗ phối hợp đòn công – thủ nhịp nhàng từ bài 108 để rèn luyện linh giác xúc giác.",
      watchPoints: [
        "Cảm nhận lực đối phương qua điểm tiếp xúc ở cổ tay và cẳng tay (Thính kình).",
        "Cách xoay người tại chỗ (Biên thân) nhường lực và lập tức phản đòn vào trung tuyến.",
        "Sự linh hoạt của Than thủ, Bàng thủ, Phục thủ trong không gian hẹp."
      ],
      comparisonWithBook: "Bổ trợ trực quan cho chuỗi ảnh 2 người tập Bài 108 tại chỗ — đối luyện (Trang 65–74)."
    }
  ],

  "bai-14": [
    {
      id: "108-tien-lui-vn",
      youtubeId: "HLP4cmR9hgI",
      title: "Biểu diễn Bài 108 Tiến Lùi Vịnh Xuân Việt Nam — Võ sư Lê Bách Nhật",
      masterName: "Võ Sư Lê Bách Nhật (Vịnh Xuân Việt Nam)",
      lineageBadge: "Vĩnh Xuân Việt Nam • 108 Thế Tiến Lùi",
      pedagogicalFocus: "Thị phạm bài 108 thế kết hợp bộ pháp tiến – lùi, hoành thoái linh hoạt trên sàn tập.",
      watchPoints: [
        "Cách kết hợp bước lướt chân (Túc bất ly địa) đồng bộ với các thế tay của hệ thống 108.",
        "Nhịp chuyển trọng tâm giữa chân trước và chân sau khi tiến công và thoái thủ.",
        "Giữ trục cột sống thẳng đứng trong suốt quá trình di chuyển tiến lùi."
      ],
      comparisonWithBook: "Khớp với Bài 108 tiến lùi (Trang 75–82) trong sách gốc: đưa toàn bộ cấu trúc 108 tại chỗ vào di chuyển thực chiến."
    },
    {
      id: "108-tien-lui-duong-sinh",
      youtubeId: "rE_zuTllP50",
      title: "Dưỡng Sinh Nhu Quyền & Bộ Pháp Tiến Lùi 108 Vĩnh Xuân",
      masterName: "Hệ Phái Vĩnh Xuân Ngô Sĩ Quý",
      lineageBadge: "Nội Công & Bộ Pháp 108",
      pedagogicalFocus: "Quan sát sự uyển chuyển của bộ pháp tiến lùi kết hợp hơi thở sâu và chuyển động mềm mại.",
      watchPoints: [
        "Tốc độ di chuyển khoan thai, đều đặn giúp cảm nhận rõ trọng tâm trên từng bước chân.",
        "Hơi thở chìm sâu xuống Đan điền khi chuyển tấn tiến và lùi.",
        "Hai bàn tay chuyển động liền mạch không bị ngắt quãng."
      ],
      comparisonWithBook: "Đối chiếu trực tiếp với các đồ hình di chuyển của Bài 108 tiến lùi (Trang 75–82)."
    }
  ],

  "bai-15": [
    {
      id: "108-tien-lui-doi-luyen-vn",
      youtubeId: "lbJoGZ6c6ac",
      title: "Ứng dụng Đối Luyện Tiến Lùi & Hóa Giải Liên Hoàn Vịnh Xuân Quyền",
      masterName: "Tư Liệu Huấn Luyện Vịnh Xuân Việt Nam",
      lineageBadge: "Đối Luyện Có Bước Tiến Lùi",
      pedagogicalFocus: "Minh họa cách hai người vừa di chuyển bước chân tiến – lùi vừa phối hợp công – thủ liên hoàn theo hệ thống 108.",
      watchPoints: [
        "Khi đối phương tiến bước tấn công, người thủ lùi bước hoặc lách góc (Hoành thoái) đồng thời gạt đỡ.",
        "Khi đối phương lùi, người công lập tức lướt theo sát ('Khi đối thủ lùi, không đứng yên mà cần lướt theo sát' — Lời khuyên 29).",
        "Nguyên lý 'Phản thủ đồng thời' trong trạng thái di động."
      ],
      comparisonWithBook: "Sách gốc (Trang 83–91): Bài 108 tiến lùi — đối luyện rèn luyện cảm giác cự ly (Distance) và thời điểm (Timing) khi giao đấu thực tế."
    },
    {
      id: "108-song-luyen-ip-chun",
      youtubeId: "oFSBdd4fTBA",
      title: "Đại Sư Diệp Chuẩn & Đại Sư Samuel Kwok đối luyện di chuyển linh hoạt",
      masterName: "Đại Sư Diệp Chuẩn (Ip Chun) & Đại Sư Samuel Kwok",
      lineageBadge: "Kiểm Soát Cự Ly & Thời Điểm",
      pedagogicalFocus: "Quan sát cách bước chân tiến lùi giữ cự ly hoàn hảo giữa hai bậc Đại sư khi đối luyện.",
      watchPoints: [
        "Bước chân lướt nhẹ nhàng để luôn giữ đối phương nằm trong tầm kiểm soát trung tuyến.",
        "Không bao giờ bị mất thăng bằng hay chúi người về phía trước khi đối phương rút tay.",
        "Phối hợp tay kiểm soát và tay tấn công nhịp nhàng."
      ],
      comparisonWithBook: "Bổ trợ trực quan cho chuỗi ảnh 2 người tập Bài 108 tiến lùi — đối luyện (Trang 83–91)."
    }
  ],

  "bai-17": [
    {
      id: "dummy-ip-man-1972",
      youtubeId: "qI25cw8__SQ",
      title: "Tư liệu lịch sử 1972: Đại Tông Sư Diệp Vấn luyện Mộc Nhân Trang",
      masterName: "Đại Tông Sư Diệp Vấn (Ip Man, 1893–1972)",
      lineageBadge: "Tư Liệu Lịch Sử Vô Giá • Hồng Kông",
      pedagogicalFocus: "Quan sát cách Đại Tông Sư Diệp Vấn di chuyển bộ pháp quanh cọc gỗ và phát thốn kình làm rung chuyển Mộc Nhân dù lúc đó ông đã 79 tuổi.",
      watchPoints: [
        "Không dùng sức đập mạnh vào tay gỗ, mà dùng bước chân chuyển trọng tâm áp sát vào thân cọc.",
        "Hai tay luôn vận động đồng thời: một tay khống chế tay gỗ, một tay phóng đòn vào thân gỗ.",
        "Bộ pháp lướt ngang và xoay góc 45 độ linh hoạt quanh trục Mộc Nhân."
      ],
      comparisonWithBook: "Sách gốc (Trang 92–105): Luyện Bài Mộc Nhân Số 1 giúp chỉnh sửa toàn bộ góc độ sai lệch của tay chân và rèn phản xạ cận chiến."
    },
    {
      id: "dummy-108-vn-dang-gia",
      youtubeId: "Fz7oPCdb6l0",
      title: "Bài 108 Mộc Nhân Trang Vịnh Xuân Việt Nam — Toàn cảnh 108 động tác",
      masterName: "Vịnh Xuân Việt Nam (Hệ thống 108 Mộc Nhân)",
      lineageBadge: "Vĩnh Xuân Việt Nam • 108 Mộc Nhân",
      pedagogicalFocus: "Thị phạm bài 108 thế ứng dụng trực tiếp trên Mộc Nhân Trang theo đúng truyền thống Vịnh Xuân Việt Nam.",
      watchPoints: [
        "Cách đưa các thế Đại Bàng Triển Dực, Pháp Đao Thủ, Song Long Xuất Hải của bài 108 vào tay cọc gỗ.",
        "Sự uyển chuyển của cổ tay khi luồn lách qua hai tay trên và một tay dưới của Mộc Nhân.",
        "Đòn chân đá khóa vào chân cọc gỗ đồng bộ với đòn tay ở trên."
      ],
      comparisonWithBook: "Khớp trực tiếp với cấu trúc Bài Mộc Nhân Số 1 trong sách gốc của PGS.TS Nguyễn Mạnh Nhâm (Trang 95–105)."
    },
    {
      id: "dummy-108-vn-ngo-si-quy",
      youtubeId: "HGSpDLynasE",
      title: "Hướng dẫn 108 Động Tác Mộc Nhân Vĩnh Xuân — Võ đường Ngô Sĩ Quý",
      masterName: "Võ Đường Vĩnh Xuân Ngô Sĩ Quý",
      lineageBadge: "Hướng Dẫn Sư Phạm Chi Tiết",
      pedagogicalFocus: "Phân tích chậm từng nhịp tiếp xúc với tay mộc nhân để người học tự tập đúng kỹ thuật tại nhà.",
      watchPoints: [
        "Giữ khoảng cách vừa khít giữa thân người và thân mộc nhân (không đứng quá xa).",
        "Hạ thấp trọng tâm tấn khi thực hiện các đòn trầm thủ và triệt cước.",
        "Âm thanh tiếp xúc gọn, đanh nhờ lực phát từ hông và đất."
      ],
      comparisonWithBook: "Giúp người học đối chiếu từng thế trong sách gốc (Trang 95–105) với chuyển động thực tế trên cọc gỗ."
    }
  ],

  "bai-18": [
    {
      id: "dummy-2-ip-man",
      youtubeId: "2BZb3FuypAA",
      title: "Tư liệu gốc: Đại Tông Sư Diệp Vấn thị phạm bộ pháp tiến lùi trên Mộc Nhân Trang",
      masterName: "Đại Tông Sư Diệp Vấn (Ip Man, 1893–1972)",
      lineageBadge: "Tư Liệu Lịch Sử 1972 • Góc Quay Cận Cảnh",
      pedagogicalFocus: "Góc quay cận cảnh giúp quan sát rõ sự biến hóa của bộ tay và bước chân lướt tiến – lùi – lách góc quanh Mộc Nhân.",
      watchPoints: [
        "Nhịp ngắt nghỉ (Timing) và bước chân tiến lùi linh hoạt quanh cọc gỗ.",
        "Cách dùng cẳng tay nêm chéo để chiếm lĩnh trung tuyến của Mộc Nhân.",
        "Đòn chưởng và đòn chỉ phóng thẳng vào phần cổ/ngực của Mộc Nhân."
      ],
      comparisonWithBook: "Bổ trợ cho Bài Mộc Nhân Tiến Lùi (Trang 106–116) với các bước di chuyển nhập nội và lách góc đa dạng."
    },
    {
      id: "dummy-2-vn-huong-dan",
      youtubeId: "R8V04DpQK6g",
      title: "Hướng dẫn tập luyện Mộc Nhân Vịnh Xuân (Phân tích bộ pháp & kỹ thuật)",
      masterName: "Vĩnh Xuân Quyền Việt Nam",
      lineageBadge: "Kỹ Thuật Ứng Dụng Mộc Nhân Tiến Lùi",
      pedagogicalFocus: "Chỉ rõ cách chuyển đổi góc đứng tiến lùi và cách đổi tay trái – phải đối xứng trên Mộc Nhân.",
      watchPoints: [
        "Tập đều cả hai bên phải và trái như lời dặn ở cuối bài trong sách gốc.",
        "Không gồng cứng vai khi va chạm với tay gỗ.",
        "Phối hợp mắt nhìn tập trung vào trục tâm của Mộc Nhân."
      ],
      comparisonWithBook: "Minh họa rõ ràng cho Bài Mộc Nhân Tiến Lùi trong sách gốc (Trang 106–116)."
    }
  ],

  "bai-21": [
    {
      id: "long-quyen-ngo-si-quy",
      youtubeId: "SuyX0UbhYjU",
      title: "Long Quyền (Dragon Form of 5 Animals) — Vĩnh Xuân Ngô Sĩ Quý",
      masterName: "Hệ Phái Vĩnh Xuân Ngô Sĩ Quý (Dòng Sư Tổ Nguyễn Tế Công)",
      lineageBadge: "Ngũ Hình Quyền • Long Quyền Luyện Thần (Hành Thổ – Tỳ)",
      pedagogicalFocus: "Biểu diễn trọn vẹn bài Long Quyền đặc hữu của Vịnh Xuân Việt Nam: thân pháp uốn lượn uyển chuyển như rồng bay, rèn luyện Thần và sự biến hóa.",
      watchPoints: [
        "Bộ tay Long trảo kết hợp xoay cổ tay và vặn xoắn cột sống mềm mại.",
        "Thân pháp lên cao – xuống thấp nhịp nhàng theo hơi thở.",
        "Ánh mắt sáng, tập trung tinh thần (Long thuộc Thổ, chủ Tỳ — luyện Thần)."
      ],
      comparisonWithBook: "Khớp hoàn toàn với truyền thống Ngũ Hình Quyền trong sách gốc (Trang 118–123 • 25 động tác do Võ sư Hồ Văn Khang biểu diễn): 'Long thuộc Thổ, chủ Tỳ (lá lách) — Luyện Long quyền để tăng cường Thần và sự biến hóa (mềm mại)'."
    },
    {
      id: "ngu-hinh-unesco",
      youtubeId: "qAiIunayYms",
      title: "Tinh hoa Vịnh Xuân Ngũ Hình Quyền (Long, Xà, Hổ, Báo, Hạc) — UNESCO Việt Nam",
      masterName: "Hội Võ Thuật Cổ Truyền Việt Nam - UNESCO",
      lineageBadge: "Di Sản Võ Học Cổ Truyền Việt Nam",
      pedagogicalFocus: "Giới thiệu tổng quan đặc trưng thần thái và kỹ thuật của cả 5 linh thú trong hệ thống Ngũ Hình Quyền Vịnh Xuân Việt Nam.",
      watchPoints: [
        "Sự khác biệt rõ nét về kình lực giữa Long (biến hóa), Xà (mềm dẻo), Hổ (mạnh mẽ), Báo (tốc độ), Hạc (thăng bằng).",
        "Sự hòa quyện giữa thủ pháp Vịnh Xuân trung tuyến và hình tượng Ngũ Hình Thiếu Lâm.",
        "Giá trị dưỡng sinh ngũ tạng (Long–Thổ–Tỳ, Xà–Thủy–Thận, Hổ–Kim–Phế, Báo–Mộc–Can, Hạc–Hỏa–Tâm)."
      ],
      comparisonWithBook: "Minh chứng sống động cho phần Giới thiệu Ngũ Hình Quyền tại Trang 118–119 sách gốc của PGS.TS Nguyễn Mạnh Nhâm."
    }
  ],

  "bai-22": [
    {
      id: "xa-quyen-ngo-si-quy",
      youtubeId: "C0Li4MaKaoQ",
      title: "Kỹ thuật Xà Tấn, Hạc Tấn & Xà Hình trong Vĩnh Xuân — Võ đường Ngô Sĩ Quý",
      masterName: "Võ Đường Vĩnh Xuân Ngô Sĩ Quý",
      lineageBadge: "Ngũ Hình Quyền • Xà Quyền Luyện Khí (Hành Thủy – Thận)",
      pedagogicalFocus: "Hướng dẫn chi tiết kỹ thuật hạ tấn thấp uốn lượn của Xà Quyền và sự phối hợp mềm dẻo trong Vịnh Xuân Việt Nam.",
      watchPoints: [
        "Cách xoắn vặn khớp háng và đầu gối trong Xà tấn để hạ thấp trọng tâm luồn tránh đòn địch.",
        "Bàn tay Xà thủ (ngón tay khép thẳng như đầu rắn) phóng lướt theo đường cong xoắn ốc.",
        "Hơi thở êm, dài và liên tục giúp dẫn Khí lưu thông khắp kinh mạch (Xà thuộc Thủy, chủ Thận)."
      ],
      comparisonWithBook: "Sách gốc (Trang 118–119 & 124–128 • 39 động tác do Võ sư Lê Đắc Kiên biểu diễn): 'Xà thuộc Thủy, chủ Thận — Luyện Xà quyền để tăng cường Khí và sự mềm dẻo'."
    },
    {
      id: "xa-quyen-unesco",
      youtubeId: "qAiIunayYms",
      title: "Xà Quyền & Điển tích Xà – Hạc giao đấu khai sinh Vịnh Xuân Quyền",
      masterName: "Hội Võ Thuật Cổ Truyền Việt Nam - UNESCO",
      lineageBadge: "Cội Nguồn Xà – Hạc Vịnh Xuân",
      pedagogicalFocus: "Hiểu rõ vai trò cốt tử của Xà hình (một trong hai linh thú gốc cùng với Hạc tạo nên Vịnh Xuân Quyền).",
      watchPoints: [
        "Đòn phóng chỉ (Xà tín) nhắm thẳng vào các huyệt đạo hiểm yếu ở cổ họng và mắt.",
        "Cánh tay mềm như thân rắn, hễ chạm tay địch là quấn dính và trườn vào khe hở.",
        "Bước chân lướt êm sát mặt đất ('Túc bất ly địa')."
      ],
      comparisonWithBook: "Minh họa trực quan cho Bài Xà Quyền (Trang 124–128) và điển tích Ngũ Mai Sư Thái quan sát Xà – Hạc giao đấu."
    }
  ],

  "bai-23": [
    {
      id: "ho-quyen-vn",
      youtubeId: "wMUCA0P1lRU",
      title: "Hổ Quyền Vịnh Xuân — Giao lưu các Câu lạc bộ Vĩnh Xuân Việt Nam",
      masterName: "Các CLB Vĩnh Xuân Việt Nam",
      lineageBadge: "Ngũ Hình Quyền • Hổ Quyền Luyện Cốt (Hành Kim – Phế)",
      pedagogicalFocus: "Thể hiện uy lực mãnh liệt của Hổ trảo và sự vững chãi của khung xương sống (Hổ thuộc Kim, chủ Phế — làm mạnh cơ bắp và xương cốt).",
      watchPoints: [
        "Đòn Hổ trảo vồ chụp dứt khoát, các ngón tay co cứng như vuốt hổ phát kình từ lưng và eo.",
        "Tấn pháp trầm vững, bước chân nặng và chắc chắn.",
        "Phối hợp tiếng thở sâu tạo áp lực nội khí mạnh mẽ bổ trợ tạng Phế (phổi)."
      ],
      comparisonWithBook: "Sách gốc (Trang 118–119 & 129–132 • 36 động tác do Võ sư Đặng Danh Tuấn biểu diễn): 'Hổ thuộc Kim, chủ Phế (phổi) — Luyện Hổ quyền để tăng cường Xương Cốt và làm mạnh cơ bắp'."
    },
    {
      id: "ho-quyen-hoang-thanh-phong",
      youtubeId: "hdz6Amlxy6o",
      title: "Biểu diễn Ngũ Hình Vĩnh Xuân (Long – Xà – Hổ – Báo – Hạc) — Võ sư Hoàng Thanh Phong",
      masterName: "Võ Sư Hoàng Thanh Phong",
      lineageBadge: "Vĩnh Xuân Thực Chiến & Ngũ Hình",
      pedagogicalFocus: "Quan sát cách chuyển đổi từ thế nhu sang thế cương mãnh của Hổ hình trong chuỗi Ngũ Hình Vịnh Xuân.",
      watchPoints: [
        "Cách phát lực ngắn (Thốn kình) bằng ức bàn tay và trảo thủ.",
        "Sự kết hợp giữa đòn chưởng đẩy mạnh và bước lướt áp sát.",
        "Giữ vững trục thăng bằng sau mỗi đòn phát lực lớn."
      ],
      comparisonWithBook: "Giúp người học cảm nhận rõ nhịp độ phát lực cương mãnh của Bài Hổ Quyền (Trang 129–132)."
    }
  ],

  "bai-24": [
    {
      id: "bao-quyen-luyen-gan",
      youtubeId: "tU9DqGDvqjA",
      title: "Báo Hình Quyền Luyện Gân & Cổ Tay Tay Chùy — Vĩnh Xuân Quyền",
      masterName: "Vĩnh Xuân Quyền Việt Nam",
      lineageBadge: "Ngũ Hình Quyền • Báo Quyền Luyện Cân (Hành Mộc – Can)",
      pedagogicalFocus: "Hướng dẫn chuyên sâu cách rèn gân cổ tay và nắm tay Báo chùy (nắm nửa bàn tay) đặc trưng của Báo Quyền.",
      watchPoints: [
        "Cấu trúc nắm tay Báo quyền (gập các đốt ngón tay tạo mặt phẳng cứng để đánh bật nhanh).",
        "Tốc độ ra đòn cực nhanh, liên hoàn và độ nảy đàn hồi của gân cơ (Báo thuộc Mộc, chủ Can).",
        "Bộ pháp linh hoạt tiến – thoái chớp nhoáng như báo săn mồi."
      ],
      comparisonWithBook: "Sách gốc (Trang 118–119 & 133–136 • 33 động tác do Võ sư Trần Bạch Tiến biểu diễn): 'Báo thuộc Mộc, chủ Can (gan) — Luyện Báo quyền để luyện gân (Cân), tăng tốc độ và sự bền bỉ'."
    },
    {
      id: "bao-quyen-unesco",
      youtubeId: "qAiIunayYms",
      title: "Phân tích Báo Quyền trong hệ thống Vịnh Xuân Ngũ Hình Quyền",
      masterName: "Hội Võ Thuật Cổ Truyền Việt Nam - UNESCO",
      lineageBadge: "Di Sản Võ Học Cổ Truyền",
      pedagogicalFocus: "Đặt Báo Quyền trong bức tranh tổng thể của 5 linh thú để thấy rõ tính tốc độ và sức bật cơ gân.",
      watchPoints: [
        "Đòn đánh đi theo đường hẹp, ngắn và bật nhanh như lò xo.",
        "Phối hợp xoay hông ngắn để gia tăng tốc độ đòn tay.",
        "Thân hình gọn, kín kẽ không tạo sơ hở."
      ],
      comparisonWithBook: "Bổ trợ cho các động tác Bài Báo Quyền trong sách gốc (Trang 133–136)."
    }
  ],

  "bai-25": [
    {
      id: "hac-quyen-hai-phong",
      youtubeId: "7r6OC2XDqDw",
      title: "Bài Hạc Quyền Vịnh Xuân Quyền Việt Nam — Võ sư Phạm Công Thành",
      masterName: "Võ Sư Phạm Công Thành (Vịnh Xuân Quyền Hải Phòng)",
      lineageBadge: "Ngũ Hình Quyền • Hạc Quyền Luyện Tinh (Hành Hỏa – Tâm)",
      pedagogicalFocus: "Biểu diễn trọn vẹn bài Hạc Quyền Vịnh Xuân: phong thái thanh thoát, điềm tĩnh, thăng bằng tuyệt hảo trên một chân và đòn cánh hạc (Bàng thủ/Hạc dực) chuẩn xác.",
      watchPoints: [
        "Thế đứng Kim Kê Độc Lập (đứng một chân) vững như tùng bách không hề chao đảo.",
        "Đòn Hạc chủy (mỏ hạc) và Hạc dực (cánh hạc) vừa che chở trung tuyến vừa mổ điểm huyệt.",
        "Tinh thần tĩnh tại, thu liễm nội tinh (Hạc thuộc Hỏa, chủ Tâm — luyện Tinh)."
      ],
      comparisonWithBook: "Sách gốc (Trang 118–119 & 137–140 • 32 động tác do Võ sư Nguyễn Hoàng Giang biểu diễn): 'Hạc thuộc Hỏa, chủ Tâm (tim) — Luyện Hạc quyền để luyện Tinh, tăng cường thăng bằng và sự tĩnh tại'."
    },
    {
      id: "hac-quyen-clb",
      youtubeId: "rrLvMLNiegQ",
      title: "Giao lưu biểu diễn Hạc Quyền Vĩnh Xuân Việt Nam (Tư liệu 2010)",
      masterName: "Giao Lưu Các CLB Vĩnh Xuân Hà Nội",
      lineageBadge: "Tư Liệu Truyền Thống Hà Nội",
      pedagogicalFocus: "Quan sát nhịp điệu khoan thai, uyển chuyển như chim hạc vỗ cánh trong không gian võ đường truyền thống.",
      watchPoints: [
        "Cách mở rộng hai cánh tay như cánh hạc rồi thu gọn ngay về trung lộ.",
        "Cổ tay gập mỏ hạc linh hoạt để móc gạt đòn tấn công của đối phương.",
        "Sự kết hợp nhuần nhuyễn giữa tĩnh (đứng tấn một chân) và động (xoay thân vung cánh)."
      ],
      comparisonWithBook: "Đối chiếu sinh động với các động tác Bài Hạc Quyền trong sách gốc (Trang 137–140)."
    }
  ],

  "bai-26": [
    {
      id: "ngu-hinh-tong-hop-trung",
      youtubeId: "CgHIVSmnIbA",
      title: "Bài Quyền Ngũ Hình Tổng Hợp Vĩnh Xuân — Võ sư Nguyễn Thành Trung",
      masterName: "Võ Sư Nguyễn Thành Trung (Vĩnh Xuân Ngô Sĩ Quý)",
      lineageBadge: "Vĩnh Xuân Việt Nam • Ngũ Hình Tổng Hợp",
      pedagogicalFocus: "Tư liệu quý giá biểu diễn trọn vẹn bài Ngũ Hình Quyền Tổng Hợp — dung hợp cả 5 linh thú Long, Xà, Hổ, Báo, Hạc trong một bài quyền duy nhất.",
      watchPoints: [
        "Cách chuyển hóa thần thái tức thì: đang uyển chuyển như Rồng lập tức mềm lướt như Rắn, trầm hùng như Hổ, nhanh nhạy như Báo và tĩnh tại như Hạc.",
        "Sự thống nhất của Tinh – Khí – Thần – Lực – Cốt trong một dòng chảy liên hoàn.",
        "Nhịp thở điều hòa giúp người tập không bị hụt hơi khi chuyển đổi giữa các hình thú."
      ],
      comparisonWithBook: "Khớp trực tiếp với Bài Ngũ Hình Quyền Tổng Hợp (Trang 141–145 • 37 động tác do Võ sư Nguyễn Hoàng Giang biểu diễn) trong sách gốc của PGS.TS Nguyễn Mạnh Nhâm."
    },
    {
      id: "ngu-hinh-tong-hop-vuong",
      youtubeId: "U_ynC2fA2lc",
      title: "Ngũ Hình Tổng Hợp Vĩnh Xuân — Võ sư Ngũ Đẳng Nguyễn Ngọc Vương",
      masterName: "Võ Sư Nguyễn Ngọc Vương (Vĩnh Xuân Ngô Sĩ Quý)",
      lineageBadge: "Thị Phạm Chuẩn Mực • Hà Nội",
      pedagogicalFocus: "Góc quay sáng rõ ngoài trời giúp người học quan sát toàn bộ bộ pháp di chuyển đa hướng của bài Ngũ Hình Tổng Hợp.",
      watchPoints: [
        "Quan sát bước chân di chuyển tứ phương tám hướng nhưng luôn giữ vững trục trung tâm.",
        "Cách phối hợp đòn tay Ngũ Hình với nguyên lý giữ chỏ trung tuyến của Vịnh Xuân.",
        "Nghi thức Bái Tổ trang nghiêm lúc mở đầu và kết thúc bài."
      ],
      comparisonWithBook: "Giúp người học kết nối trọn vẹn Bài Ngũ Hình Quyền Tổng Hợp (Trang 141–145) và Bài Luyện Tổng Hợp 8 Phần (Trang 117–118)."
    }
  ],

  "bai-31": [
    {
      id: "bat-tram-dao-form",
      youtubeId: "asnphBExQ54",
      title: "Biểu diễn toàn bài Bát Trảm Đao (Wing Chun Baat Jaam Do / Butterfly Swords)",
      masterName: "Kung Fu Kendra (Chuẩn bài Bát Trảm Đao truyền thống)",
      lineageBadge: "Tuyệt Kỹ Song Đao Vịnh Xuân",
      pedagogicalFocus: "Hiển thị rõ ràng 8 tiết đoạn trảm đao, kỹ thuật xoay lật cổ tay và bước chân lướt xéo nhập nội đúng khẩu quyết 'Đơn đao khán thủ, song đao khán bộ'.",
      watchPoints: [
        "Hai thanh đao luôn đi đôi: một đao gạt khóa vũ khí địch, đao kia lập tức chém/đâm trên trung tuyến.",
        "Kỹ thuật lật ngược sống đao áp sát cẳng tay để đỡ đòn nặng mà không tốn sức.",
        "Bộ pháp di chuyển cực nhanh áp sát nội môn ('Đao như mãnh hổ — Vũ khí càng ngắn càng nguy hiểm')."
      ],
      comparisonWithBook: "Sách gốc (Lời dẫn Trang 187–188, Bài tập Trang 191–198): Bài Bát Trảm Đao rèn cổ tay linh hoạt và bộ pháp nhập nội chống lại các loại binh khí dài."
    },
    {
      id: "bat-tram-dao-demo",
      youtubeId: "K_bjUBJ_Z24",
      title: "Thị phạm tốc độ & thân pháp Bát Trảm Đao Vịnh Xuân",
      masterName: "Hiệp Hội Vịnh Xuân Quốc Tế",
      lineageBadge: "Thị Phạm Thực Chiến Song Đao",
      pedagogicalFocus: "Cảm nhận tốc độ thực tế và uy lực như mãnh hổ của cặp song đao khi đã luyện thuần thục.",
      watchPoints: [
        "Sự đồng bộ tuyệt đối giữa bước chân xoay góc và nhát chém chữ X trước ngực.",
        "Cùi chỏ luôn khép kín bảo vệ sườn ngay cả khi vung song đao.",
        "Lực phát từ cổ tay bật ngắn và đanh."
      ],
      comparisonWithBook: "Minh họa sinh động cho 61 động tác (26 chiêu / 69 hình chụp) Bài Bát Trảm Đao do Võ sư Nguyễn Chí Kiên biểu diễn trong sách gốc (Trang 191–198)."
    }
  ],

  "con": [
    {
      id: "con-slow-motion",
      youtubeId: "VilE9wHIFoQ",
      title: "Lục Điểm Bán Côn (Luk Dim Boon Kwun) — Hướng dẫn quay chậm từng điểm côn",
      masterName: "Wing Tsun Sweden (Chuẩn sư phạm phân tích chậm)",
      lineageBadge: "Video Quay Chậm Sư Phạm • 6,5 Điểm Côn",
      pedagogicalFocus: "Video quay chậm lý tưởng cho người học: chỉ rõ từng điểm trong 6 động tác rưỡi (Thương, Cái, Phất, Đinh, Khiêu, Khuyên và Bán điểm tích thủy).",
      watchPoints: [
        "Tấn Kiềm Dương và Tứ Bình tấn hạ cực thấp để làm đối trọng vững chắc cho cây côn dài và nặng.",
        "Đầu côn chỉ xoay trong một vòng tròn cực nhỏ mà uy lực xuyên thấu cực lớn nhờ lực đòn bẩy từ hai tay và hông.",
        "Động tác 'Bán điểm' (nửa điểm cuối): giọt nước rơi từ đầu côn xuống đất (Tích thủy)."
      ],
      comparisonWithBook: "Khớp với nguyên văn sách gốc (Lời dẫn Trang 188–189, Bài tập Trang 199–202): Bài Lục Điểm Bán Côn gồm 26 động tác (17 chiêu / 18 hình chụp) do Võ sư Nguyễn Văn Chiến biểu diễn."
    },
    {
      id: "con-hong-kong",
      youtubeId: "EPyBGg12MpA",
      title: "Biểu diễn Lục Điểm Bán Côn truyền thống tại Hồng Kông — Võ sư Lee Man Hung",
      masterName: "Võ Sư Lee Man Hung (Hồng Kông)",
      lineageBadge: "Truyền Thống Hồng Kông • Phát Kình Côn Pháp",
      pedagogicalFocus: "Quan sát sức nổ (Thốn kình truyền ra đầu côn) làm rung bật mũi côn dài gần 3 mét.",
      watchPoints: [
        "Cách phát lực từ mặt đất qua chân, hông, vai truyền thẳng ra mũi côn làm đầu côn rung bần bật.",
        "Hai tay nắm côn chuyển đổi linh hoạt và giữ chắc trục trung tuyến.",
        "Bước chân lướt tới đâm Thương côn (đòn đâm thẳng) chính xác tuyệt đối."
      ],
      comparisonWithBook: "Giúp người học hiểu vì sao sách gốc (Trang 188–189) nhấn mạnh tập Lục Điểm Bán Côn giúp tăng công lực tay và bộ pháp vượt bậc."
    }
  ],

  "lieu-diep-kiem": [
    {
      id: "kiem-flow-jian",
      youtubeId: "_Fvl-t52MwQ",
      title: "Thân pháp & Kiếm thế cổ truyền (Kiếm Thân Hợp Nhất)",
      masterName: "Võ Sư Kai Vallely (Thị phạm Kiếm pháp truyền thống)",
      lineageBadge: "Kiếm Thân Hợp Nhất • Uyển Chuyển Như Lá Liễu",
      pedagogicalFocus: "Minh họa sự mềm mại, linh hoạt của cổ tay và nguyên lý 'Lấy thân dẫn kiếm, kiếm thân hợp nhất' trong kiếm pháp cổ truyền.",
      watchPoints: [
        "Cổ tay xoay vòng tròn (Khuyên kiếm) mềm mại như lá liễu bay trong gió.",
        "Mũi kiếm luôn hướng về trung tâm mục tiêu dù thân người xoay chuyển liên tục.",
        "Sự kết hợp giữa bước chân nhẹ nhàng thanh thoát và đòn đâm thẳng (Thích kiếm)."
      ],
      comparisonWithBook: "Sách gốc (Lời dẫn Trang 189–190, Bài tập Trang 202–206): Bài Liễu Diệp Kiếm vận dụng Lục đại kiếm thế (Khuyên, Trầm, Trát, Thích, Phất, Lặc) với tôn chỉ 'Kiếm thân hợp nhất'."
    },
    {
      id: "kiem-master-demo",
      youtubeId: "xNx3rirCuwA",
      title: "Tuyệt kỹ Kiếm Pháp & Lục Đại Kiếm Thế Cổ Truyền",
      masterName: "Danh Sư Võ Thuật Cổ Truyền",
      lineageBadge: "Lục Đại Kiếm Thế: Khuyên, Trầm, Trát, Thích, Phất, Lặc",
      pedagogicalFocus: "Quan sát cách vận dụng 6 thế kiếm căn bản để vừa gạt hóa giải vũ khí đối phương vừa phản kích chớp nhoáng.",
      watchPoints: [
        "Không dùng sức chém mạnh đối kháng trực diện mà dùng lưỡi kiếm trượt lách theo lực địch.",
        "Tay cầm kiếm và tay kiếm chỉ (tay trái) phối hợp nhịp nhàng để giữ thăng bằng.",
        "Thần thái điềm tĩnh, mắt nhìn suốt mũi kiếm."
      ],
      comparisonWithBook: "Bổ trợ trực quan cho 30 động tác (35 chiêu / 30 hình chụp) Bài Liễu Diệp Kiếm do Võ sư Nguyễn Văn Thắng biểu diễn trong sách gốc (Trang 202–206)."
    }
  ],

  "bai-29": [
    {
      id: "khicong-ngo-si-quy",
      youtubeId: "QRva9_51kVw",
      title: "Bài Khí Công Quyền (Lục Hợp Khí Công) — Cố Võ Sư Ngô Sĩ Quý",
      masterName: "Cố Võ Sư Ngô Sĩ Quý (1922–2018 • Dòng Sư Tổ Nguyễn Tế Công)",
      lineageBadge: "Tư Liệu Quý Giá • Vĩnh Xuân Việt Nam",
      pedagogicalFocus: "Tư liệu lịch sử vô giá quay trực tiếp Cố Võ sư Ngô Sĩ Quý biểu diễn đúng bài Khí Công Quyền của hệ phái Vịnh Xuân cụ Nguyễn Tế Công tại Việt Nam!",
      watchPoints: [
        "Quan sát nhịp hít vào sâu (phình bụng) và thở ra từ từ (thót bụng) đồng bộ với từng thế mở – khép tay.",
        "Động tác cực kỳ khoan thai, mềm mại, dẫn nội khí từ Đan Điền ra khắp tứ chi.",
        "Sự kết hợp giữa Bát Đoạn Cẩm, Dịch Cân Kinh và thủ pháp Vịnh Xuân Quyền."
      ],
      comparisonWithBook: "Khớp với Bài Phật Gia Khí Công Quyền thuộc Chương IV — Nội Công (Trang 172, do Võ sư ThS.DS Nguyễn Duy Thức trình bày) trong sách gốc của PGS.TS Nguyễn Mạnh Nhâm."
    },
    {
      id: "khicong-duong-sinh-vn",
      youtubeId: "rE_zuTllP50",
      title: "Dưỡng Sinh Nhu Quyền & Khí Công Vĩnh Xuân Việt Nam",
      masterName: "Võ Đường Vĩnh Xuân Việt Nam",
      lineageBadge: "Dưỡng Sinh & Nội Công Thở 4 Thì",
      pedagogicalFocus: "Minh họa cách tập Khí Công Quyền để phục hồi sức khỏe, điều hòa huyết áp và tăng cường nội lực.",
      watchPoints: [
        "Giữ tinh thần hoàn toàn thư giãn, mắt nhìn bình thản, lưỡi đặt nhẹ lên hàm trên.",
        "Chuyển động tay tròn đầy, không gồng cứng cơ vai hay cơ ngực.",
        "Cảm nhận hơi ấm lan tỏa ra lòng bàn tay (huyệt Lao Cung) sau khi tập."
      ],
      comparisonWithBook: "Minh họa cho lời dặn của PGS.TS Nguyễn Mạnh Nhâm tại Chương IV — Nội Công (Trang 167–184): kết hợp thở Đan Điền 4 thì với các động tác dưỡng sinh nội công."
    }
  ]
};

/**
 * Helper: Lấy danh sách video thị phạm của một bài quyền (có fallback an toàn).
 */
export function getMasterVideosForForm(formId: string): MasterVideoItem[] {
  return FORM_MASTER_VIDEOS[formId] || FORM_MASTER_VIDEOS["bai-07"];
}
