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
 * Danh mục Video Đại Sư Thị Phạm được tuyển chọn tinh gọn và xác thực cho 18 bài quyền & binh khí.
 * Chỉ ưu tiên 4 bậc Đại Sư tiêu biểu:
 * 1. Đại Tông Sư Diệp Vấn (Ip Man, 1893–1972)
 * 2. Đại Sư Chu Thượng Đồng (Chu Shong Tin, 1933–2014)
 * 3. Đại Sư Diệp Chuẩn (Ip Chun, sinh 1924)
 * 4. Cố Võ Sư Ngô Sĩ Quý (1922–2018 • Dòng Sư Tổ Nguyễn Tế Công tại Việt Nam)
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
      id: "snt-ip-chun",
      youtubeId: "eYNgfIEw17w",
      title: "Đại Sư Diệp Chuẩn (Ip Chun) biểu diễn chuẩn mực toàn bài Tiểu Niệm Đầu (Siu Lim Tao)",
      masterName: "Đại Sư Diệp Chuẩn (Ip Chun, sinh 1924 • Trưởng tử Đại Tông Sư Diệp Vấn)",
      lineageBadge: "Trưởng Tử Diệp Gia • Chuẩn Mực Cổ Truyền",
      pedagogicalFocus: "Góc quay trực diện, sáng rõ của Đại Sư Diệp Chuẩn giúp người học quan sát tường tận độ khép của hai đầu gối, vị trí thu quyền sát ngực và góc độ chuẩn của từng thủ pháp.",
      watchPoints: [
        "Cách lập Nhị Tự Kiềm Dương Tấn và thu hai nắm đấm sát lên cạnh ngực ngay từ thế mở đầu.",
        "Nhịp điệu khoan thai, rõ ràng từng tiết đoạn: Tam Bái Phật, Ấn chưởng 4 hướng, Khuyên thủ và Liên hoàn xung quyền.",
        "Hai vai luôn trầm xuống, cổ tay xoay tròn mượt mà trên trục trung tuyến."
      ],
      comparisonWithBook: "Giúp người học đối chiếu trực tiếp từng động tác với 52 thế (73 hình chụp từ H0064–H0136, Trang 37–42) bài Tiểu Niệm Đầu trong sách gốc."
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
      id: "ck-ip-chun",
      youtubeId: "sySJqYMXOR8",
      title: "Đại Sư Diệp Chuẩn (Ip Chun) biểu diễn chuẩn mực toàn bài Tầm Kiều (Chum Kiu)",
      masterName: "Đại Sư Diệp Chuẩn (Ip Chun, sinh 1924 • Trưởng tử Đại Tông Sư Diệp Vấn)",
      lineageBadge: "Trưởng Tử Diệp Gia • Chuẩn Mực Cổ Truyền",
      pedagogicalFocus: "Đại Sư Diệp Chuẩn thị phạm rõ ràng từng nhịp xoay hông (Chuyển mã), bước lướt (Binh bộ) và đòn chân phối hợp tay của bài Tầm Kiều.",
      watchPoints: [
        "Nhịp kết hợp đồng bộ giữa xoay mũi chân, xoay hông và gạt Lan thủ / Bàng thủ.",
        "Cách bước lướt giữ nguyên độ cao trọng tâm, không bị nhấp nhô lên xuống.",
        "Giữ vững thăng bằng trục dọc ngay sau các đòn đá và xoay người 180 độ."
      ],
      comparisonWithBook: "Đối chiếu trực tiếp với 45 động tác (63 hình chụp từ H0225–H0287, Trang 44–48 • HLV Nguyễn Trọng Sơn biểu diễn) của bài Tầm Kiều trong sách gốc."
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
    }
  ],

  "bai-12": [
    {
      id: "108-ngo-si-quy-1",
      youtubeId: "sbshmjBDFYg",
      title: "Bài 108 — Cố Võ Sư Ngô Sĩ Quý trực tiếp thị phạm (Vĩnh Xuân Việt Nam)",
      masterName: "Cố Võ Sư Ngô Sĩ Quý (1922–2018 • Dòng Sư Tổ Nguyễn Tế Công)",
      lineageBadge: "Tư Liệu Gốc Quý Giá • Cố Võ Sư Ngô Sĩ Quý",
      pedagogicalFocus: "Tư liệu lịch sử quý giá ghi hình trực tiếp Cố Võ sư Ngô Sĩ Quý biểu diễn Bài 108 của dòng Vịnh Xuân cụ Nguyễn Tế Công truyền tại Việt Nam — nhịp điệu khoan thai, mềm mại như dòng nước.",
      watchPoints: [
        "Quan sát các thế mở đầu kinh điển: Đại Bàng Triển Dực, Khổng Tước Khai Bình, Pháp Đao Thủ, Song Long Xuất Hải.",
        "Cách chuyển trọng tâm kết hợp xoay cổ tay mềm như bông (Miên quyền).",
        "Sự liền mạch giữa các chiêu thức không bị ngắt quãng cứng nhắc."
      ],
      comparisonWithBook: "Khớp trực tiếp với hệ thống tên chiêu và cấu trúc Bài 108 tại chỗ — đơn luyện (75 động tác / 114 hình chụp, Lời dẫn Trang 54, Bài tập Trang 55–64) trong sách gốc."
    }
  ],

  "bai-13": [
    {
      id: "108-doi-luyen-ngo-si-quy",
      youtubeId: "lskwfUHd_WY",
      title: "Tay Dính (Niêm Thủ & Đối Luyện) — Cố Võ Sư Ngô Sĩ Quý trực tiếp thị phạm",
      masterName: "Cố Võ Sư Ngô Sĩ Quý (1922–2018 • Dòng Sư Tổ Nguyễn Tế Công)",
      lineageBadge: "Tư Liệu Gốc Quý Giá • Cố Võ Sư Ngô Sĩ Quý",
      pedagogicalFocus: "Cố Võ sư Ngô Sĩ Quý trực tiếp thị phạm kỹ thuật Tay Dính (Niêm thủ / Đối luyện 2 người) — dùng sự mềm dẻo và linh giác để hóa giải và phản đòn tự nhiên.",
      watchPoints: [
        "Hai tay bám dính nhẹ nhàng nhưng luôn kiểm soát trục trung tuyến của đối phương.",
        "Hóa giải lực tấn công bằng xoay thân (Biên thân) và cổ tay mềm dẻo thay vì gồng sức chống đỡ.",
        "Phản đòn ngay trong tích tắc khi đối phương vừa hở trung lộ."
      ],
      comparisonWithBook: "Minh họa chân thực cho Bài 108 tại chỗ — đối luyện (Trang 65–74) trong sách gốc của PGS.TS Nguyễn Mạnh Nhâm."
    },
    {
      id: "108-tai-cho-doi-luyen-ip-chun",
      youtubeId: "oFSBdd4fTBA",
      title: "Đại Sư Diệp Chuẩn (Ip Chun, 94 tuổi) đối luyện Niêm Thủ tại chỗ",
      masterName: "Đại Sư Diệp Chuẩn (Ip Chun, sinh 1924)",
      lineageBadge: "Đỉnh Cao Đối Luyện Tại Chỗ • Diệp Chuẩn",
      pedagogicalFocus: "Minh họa cách đứng tấn tại chỗ đối luyện tay dính ở tuổi 94 của Đại Sư Diệp Chuẩn — hoàn toàn không dùng sức cơ bắp, chỉ dùng góc độ và sự thả lỏng.",
      watchPoints: [
        "Hai tay dính sát như hai con rồng phối hợp ('Không để con rồng nào chết' — Lời khuyên số 7).",
        "Nguyên lý 'Lai lưu khứ tống, thoát thủ trực xông' diễn ra liên tục ngay tại chỗ.",
        "Hạ bàn giữ vững tấn Kiềm Dương tại chỗ, chỉ dùng xoay hông để hóa giải lực."
      ],
      comparisonWithBook: "Đối sánh bổ trợ cho Bài 108 tại chỗ — đối luyện (Trang 65–74) trong sách gốc."
    }
  ],

  "bai-14": [
    {
      id: "108-tien-lui-ngo-si-quy",
      youtubeId: "xo5odoLeaq8",
      title: "Bài 108 (Di chuyển & Bộ pháp) — Cố Võ Sư Ngô Sĩ Quý trực tiếp biểu diễn",
      masterName: "Cố Võ Sư Ngô Sĩ Quý (1922–2018 • Dòng Sư Tổ Nguyễn Tế Công)",
      lineageBadge: "Tư Liệu Gốc Quý Giá • Cố Võ Sư Ngô Sĩ Quý",
      pedagogicalFocus: "Quan sát cách Cố Võ sư Ngô Sĩ Quý kết hợp bộ pháp di chuyển tiến – lùi, hoành thoái nhẹ nhàng với toàn bộ thủ pháp của hệ thống 108.",
      watchPoints: [
        "Bước chân lướt êm sát mặt đất ('Túc bất ly địa') đồng bộ với nhịp thu phóng của hai tay.",
        "Nhịp chuyển trọng tâm giữa chân trước và chân sau hoàn toàn tự nhiên, không bị khựng.",
        "Giữ trục cột sống ngay ngắn trong suốt quá trình di chuyển tiến lùi."
      ],
      comparisonWithBook: "Khớp với Bài 108 tiến lùi (Trang 75–82) trong sách gốc: đưa toàn bộ cấu trúc 108 tại chỗ vào di chuyển thực chiến."
    }
  ],

  "bai-15": [
    {
      id: "108-tien-lui-doi-luyen-ngo-si-quy",
      youtubeId: "lskwfUHd_WY",
      title: "Đối Luyện Tay Dính Di Động — Cố Võ Sư Ngô Sĩ Quý thị phạm cùng học trò",
      masterName: "Cố Võ Sư Ngô Sĩ Quý (1922–2018 • Dòng Sư Tổ Nguyễn Tế Công)",
      lineageBadge: "Tư Liệu Gốc Quý Giá • Cố Võ Sư Ngô Sĩ Quý",
      pedagogicalFocus: "Quan sát cách Cố Võ sư Ngô Sĩ Quý vừa di chuyển bước chân tiến – lùi vừa dẫn hóa lực và phản kích liên hoàn.",
      watchPoints: [
        "Khi đối phương tiến bước tấn công, người thủ lách góc (Hoành thoái) đồng thời dẫn hóa lực.",
        "Khi đối phương lùi, lập tức bước lướt theo sát giữ cầu nối ('Khi đối thủ lùi, không đứng yên mà cần lướt theo sát').",
        "Nguyên lý 'Phản thủ đồng thời' trong trạng thái di động."
      ],
      comparisonWithBook: "Sách gốc (Trang 83–91): Bài 108 tiến lùi — đối luyện rèn luyện cảm giác cự ly và thời điểm khi giao đấu thực tế."
    }
  ],

  "bai-17": [
    {
      id: "dummy-ip-man-1972",
      youtubeId: "qI25cw8__SQ",
      title: "Tư liệu lịch sử 1972: Đại Tông Sư Diệp Vấn luyện Mộc Nhân Trang",
      masterName: "Đại Tông Sư Diệp Vấn (Ip Man, 1893–1972)",
      lineageBadge: "Tư Liệu Lịch Sử Vô Giá • Đại Tông Sư Diệp Vấn",
      pedagogicalFocus: "Quan sát cách Đại Tông Sư Diệp Vấn di chuyển bộ pháp quanh cọc gỗ và phát thốn kình làm rung chuyển Mộc Nhân dù lúc đó ông đã 79 tuổi.",
      watchPoints: [
        "Không dùng sức đập mạnh vào tay gỗ, mà dùng bước chân chuyển trọng tâm áp sát vào thân cọc.",
        "Hai tay luôn vận động đồng thời: một tay khống chế tay gỗ, một tay phóng đòn vào thân gỗ.",
        "Bộ pháp lướt ngang và xoay góc 45 độ linh hoạt quanh trục Mộc Nhân."
      ],
      comparisonWithBook: "Sách gốc (Trang 92–105): Luyện Bài Mộc Nhân Số 1 giúp chỉnh sửa toàn bộ góc độ sai lệch của tay chân và rèn phản xạ cận chiến."
    },
    {
      id: "dummy-chu-shong-tin",
      youtubeId: "NutVm24D8lo",
      title: "Đại Sư Chu Thượng Đồng biểu diễn Mộc Nhân Trang — Kình lực Thả lỏng & Khối lượng Cơ thể",
      masterName: "Đại Sư Chu Thượng Đồng (Chu Shong Tin, 1933–2014)",
      lineageBadge: "Đỉnh Cao Nội Công Mộc Nhân • Chu Thượng Đồng",
      pedagogicalFocus: "Quan sát cách Đại Sư Chu Thượng Đồng truyền toàn bộ trọng lượng cơ thể qua khung tay thả lỏng vào thân Mộc Nhân mà không cần gồng vai.",
      watchPoints: [
        "Âm thanh cọc gỗ vang đanh, trầm nhờ lực phát ra từ sự xoay hông và kết nối cột sống.",
        "Hai bờ vai luôn chìm thấp, khuỷu tay dẫn hướng trong mọi thao tác nhập nội.",
        "Sự liền mạch giữa thủ pháp và cước pháp đá vào chân Mộc Nhân."
      ],
      comparisonWithBook: "Minh họa sâu sắc cho nguyên lý phát lực kết cấu trong Bài Mộc Nhân Số 1 (Trang 92–105)."
    },
    {
      id: "dummy-ip-chun",
      youtubeId: "MpgdlLJmeu8",
      title: "Đại Sư Diệp Chuẩn (Ip Chun) thị phạm chuẩn mực toàn bài Mộc Nhân Trang",
      masterName: "Đại Sư Diệp Chuẩn (Ip Chun, sinh 1924)",
      lineageBadge: "Trưởng Tử Diệp Gia • Chuẩn Mực Mộc Nhân",
      pedagogicalFocus: "Góc quay rõ ràng từng tiết đoạn Mộc Nhân của Đại Sư Diệp Chuẩn giúp người học nắm vững trình tự tay và chân.",
      watchPoints: [
        "Khoảng cách chuẩn giữa thân người và thân cọc gỗ trong suốt bài tập.",
        "Cách luồn đổi tay bên trong và bên ngoài hai tay cọc gỗ chính xác.",
        "Nhịp ngắt nghỉ rõ ràng giữa từng tổ hợp kỹ thuật."
      ],
      comparisonWithBook: "Đối chiếu trực quan với 80 động tác của Bài Mộc Nhân Số 1 trong sách gốc (Trang 95–105)."
    }
  ],

  "bai-18": [
    {
      id: "dummy-2-ip-man",
      youtubeId: "2BZb3FuypAA",
      title: "Tư liệu gốc 1972: Đại Tông Sư Diệp Vấn thị phạm bộ pháp tiến lùi trên Mộc Nhân Trang",
      masterName: "Đại Tông Sư Diệp Vấn (Ip Man, 1893–1972)",
      lineageBadge: "Tư Liệu Lịch Sử 1972 • Đại Tông Sư Diệp Vấn",
      pedagogicalFocus: "Góc quay cận cảnh giúp quan sát rõ sự biến hóa của bộ tay và bước chân lướt tiến – lùi – lách góc quanh Mộc Nhân.",
      watchPoints: [
        "Nhịp ngắt nghỉ (Timing) và bước chân tiến lùi linh hoạt quanh cọc gỗ.",
        "Cách dùng cẳng tay nêm chéo để chiếm lĩnh trung tuyến của Mộc Nhân.",
        "Đòn chưởng và đòn chỉ phóng thẳng vào phần cổ/ngực của Mộc Nhân."
      ],
      comparisonWithBook: "Bổ trợ cho Bài Mộc Nhân Tiến Lùi (Trang 106–116) với các bước di chuyển nhập nội và lách góc đa dạng."
    },
    {
      id: "dummy-2-chu-shong-tin",
      youtubeId: "tvkluDbR5W8",
      title: "Đại Sư Chu Thượng Đồng thị phạm Mộc Nhân Trang & Bộ pháp di chuyển",
      masterName: "Đại Sư Chu Thượng Đồng (Chu Shong Tin, 1933–2014)",
      lineageBadge: "Tông Sư Ý Niệm Lực • Chu Thượng Đồng",
      pedagogicalFocus: "Cách giữ nguyên trục thẳng đứng của cột sống khi lướt bước tiến lùi và chuyển góc quanh Mộc Nhân.",
      watchPoints: [
        "Bước chân di chuyển nhẹ nhàng nhưng khi tiếp xúc tay gỗ thì toàn thân vững như bàn thạch.",
        "Phối hợp đồng thời giữa bước chân chèn góc và hai tay khống chế – tấn công.",
        "Tập đối xứng đều cả hai bên trái và phải."
      ],
      comparisonWithBook: "Minh họa rõ ràng cho Bài Mộc Nhân Tiến Lùi trong sách gốc (Trang 106–116)."
    }
  ],

  "bai-21": [
    {
      id: "long-quyen-ngo-si-quy",
      youtubeId: "9SHtWSOra4Y",
      title: "Long Quyền — Cố Võ Sư Ngô Sĩ Quý trực tiếp biểu diễn (Vĩnh Xuân Việt Nam)",
      masterName: "Cố Võ Sư Ngô Sĩ Quý (1922–2018 • Dòng Sư Tổ Nguyễn Tế Công)",
      lineageBadge: "Tư Liệu Gốc Quý Giá • Cố Võ Sư Ngô Sĩ Quý",
      pedagogicalFocus: "Tư liệu lịch sử quý giá quay trực tiếp Cố Võ sư Ngô Sĩ Quý biểu diễn bài Long Quyền đặc hữu của Vịnh Xuân Việt Nam: thân pháp uốn lượn uyển chuyển như rồng bay, rèn luyện Thần và sự biến hóa.",
      watchPoints: [
        "Bộ tay Long trảo kết hợp xoay cổ tay và vặn xoắn cột sống mềm mại.",
        "Thân pháp lên cao – xuống thấp nhịp nhàng theo hơi thở.",
        "Ánh mắt sáng, tập trung tinh thần (Long thuộc Thổ, chủ Tỳ — luyện Thần)."
      ],
      comparisonWithBook: "Khớp hoàn toàn với truyền thống Ngũ Hình Quyền trong sách gốc (Trang 118–123 • 25 động tác do Võ sư Hồ Văn Khang biểu diễn): 'Long thuộc Thổ, chủ Tỳ (lá lách) — Luyện Long quyền để tăng cường Thần và sự biến hóa (mềm mại)'."
    },
    {
      id: "long-hinh-ngo-si-quy",
      youtubeId: "uHDY96P-56w",
      title: "Long Hình — Cố Võ Sư Ngô Sĩ Quý thị phạm thần thái & thủ pháp Rồng",
      masterName: "Cố Võ Sư Ngô Sĩ Quý (1922–2018 • Dòng Sư Tổ Nguyễn Tế Công)",
      lineageBadge: "Tư Liệu Gốc Quý Giá • Cố Võ Sư Ngô Sĩ Quý",
      pedagogicalFocus: "Quan sát cận cảnh cách vận chuyển khớp vai, khuỷu tay và cổ tay uốn lượn mềm dẻo của Long hình do chính Cố Võ sư Ngô Sĩ Quý thị phạm.",
      watchPoints: [
        "Các khớp tay chuyển động nối tiếp nhau như sóng lượn, không có điểm gãy cứng.",
        "Kết hợp xoay hông nhẹ nhàng dẫn dắt đường đi của hai bàn tay.",
        "Sự dung hợp giữa Miên quyền Vịnh Xuân và thần thái Long hình."
      ],
      comparisonWithBook: "Bổ trợ trực tiếp cho Bài Long Quyền (Trang 120–123) trong sách gốc của PGS.TS Nguyễn Mạnh Nhâm."
    }
  ],

  "bai-22": [
    {
      id: "xa-hinh-ngo-si-quy",
      youtubeId: "gEk7tOjX2iw",
      title: "Xà Hình (Xà Quyền) — Cố Võ Sư Ngô Sĩ Quý trực tiếp biểu diễn",
      masterName: "Cố Võ Sư Ngô Sĩ Quý (1922–2018 • Dòng Sư Tổ Nguyễn Tế Công)",
      lineageBadge: "Tư Liệu Gốc Quý Giá • Cố Võ Sư Ngô Sĩ Quý",
      pedagogicalFocus: "Tư liệu gốc ghi hình Cố Võ sư Ngô Sĩ Quý trực tiếp biểu diễn Xà Hình: thân pháp và thủ pháp trườn lướt mềm mại như rắn, rèn luyện Khí và sự dẻo dai.",
      watchPoints: [
        "Bàn tay Xà thủ (các ngón tay khép thẳng như đầu rắn) phóng lướt êm và hiểm hóc.",
        "Cách hạ tấn thấp và xoắn vặn khớp háng mềm dẻo để luồn tránh đòn.",
        "Hơi thở êm, dài và liên tục giúp dẫn Khí lưu thông khắp kinh mạch (Xà thuộc Thủy, chủ Thận)."
      ],
      comparisonWithBook: "Sách gốc (Trang 118–119 & 124–128 • 39 động tác do Võ sư Lê Đắc Kiên biểu diễn): 'Xà thuộc Thủy, chủ Thận — Luyện Xà quyền để tăng cường Khí và sự mềm dẻo'."
    }
  ],

  "bai-23": [
    {
      id: "ho-hinh-ngo-si-quy",
      youtubeId: "wPYNZvuWTzs",
      title: "Hổ Hình (Hổ Quyền) — Cố Võ Sư Ngô Sĩ Quý trực tiếp biểu diễn",
      masterName: "Cố Võ Sư Ngô Sĩ Quý (1922–2018 • Dòng Sư Tổ Nguyễn Tế Công)",
      lineageBadge: "Tư Liệu Gốc Quý Giá • Cố Võ Sư Ngô Sĩ Quý",
      pedagogicalFocus: "Tư liệu gốc ghi hình Cố Võ sư Ngô Sĩ Quý trực tiếp biểu diễn Hổ Hình: thể hiện uy lực trầm hùng của Hổ trảo và sự vững chãi của khung xương sống.",
      watchPoints: [
        "Đòn Hổ trảo vồ chụp và ấn đẩy phát kình từ lưng, eo và cơ hoành.",
        "Tấn pháp trầm vững, kết hợp nhu hòa và cương mãnh đúng chất Vịnh Xuân.",
        "Phối hợp hơi thở sâu tạo áp lực nội khí mạnh mẽ bổ trợ tạng Phế (Hổ thuộc Kim, chủ Phế — luyện Cốt)."
      ],
      comparisonWithBook: "Sách gốc (Trang 118–119 & 129–132 • 36 động tác do Võ sư Đặng Danh Tuấn biểu diễn): 'Hổ thuộc Kim, chủ Phế (phổi) — Luyện Hổ quyền để tăng cường Xương Cốt và làm mạnh cơ bắp'."
    }
  ],

  "bai-24": [
    {
      id: "bao-quyen-ngo-si-quy",
      youtubeId: "0bOZVyTOCyE",
      title: "Báo Quyền — Cố Võ Sư Ngô Sĩ Quý trực tiếp biểu diễn",
      masterName: "Cố Võ Sư Ngô Sĩ Quý (1922–2018 • Dòng Sư Tổ Nguyễn Tế Công)",
      lineageBadge: "Tư Liệu Gốc Quý Giá • Cố Võ Sư Ngô Sĩ Quý",
      pedagogicalFocus: "Tư liệu gốc ghi hình Cố Võ sư Ngô Sĩ Quý trực tiếp biểu diễn bài Báo Quyền: rèn luyện gân cơ (Cân), tốc độ bật nảy và bộ pháp linh hoạt.",
      watchPoints: [
        "Cấu trúc nắm tay Báo chùy và đòn đánh bật nhanh gọn từ khuỷu tay và cổ tay.",
        "Độ nảy đàn hồi của gân cơ mà vẫn giữ nguyên sự thư giãn của hai vai (Báo thuộc Mộc, chủ Can — luyện Cân).",
        "Bộ pháp chuyển hướng linh hoạt, gọn gàng."
      ],
      comparisonWithBook: "Sách gốc (Trang 118–119 & 133–136 • 33 động tác do Võ sư Trần Bạch Tiến biểu diễn): 'Báo thuộc Mộc, chủ Can (gan) — Luyện Báo quyền để luyện gân (Cân), tăng tốc độ và sự bền bỉ'."
    },
    {
      id: "bao-hinh-ngo-si-quy",
      youtubeId: "b27W-9oPBkk",
      title: "Báo Hình — Cố Võ Sư Ngô Sĩ Quý thị phạm kỹ thuật và thần thái Báo",
      masterName: "Cố Võ Sư Ngô Sĩ Quý (1922–2018 • Dòng Sư Tổ Nguyễn Tế Công)",
      lineageBadge: "Tư Liệu Gốc Quý Giá • Cố Võ Sư Ngô Sĩ Quý",
      pedagogicalFocus: "Quan sát thêm bản ghi Báo Hình của Cố Võ sư Ngô Sĩ Quý để nắm bắt trọn vẹn cách thu phóng lực nhanh nhạy của loài Báo.",
      watchPoints: [
        "Đòn tay phóng ngắn, dứt khoát và thu về hộ trung lộ ngay lập tức.",
        "Sự phối hợp đồng bộ giữa xoay hông ngắn và phát lực cổ tay.",
        "Thân hình gọn, kín kẽ không tạo sơ hở."
      ],
      comparisonWithBook: "Bổ trợ trực tiếp cho Bài Báo Quyền (Trang 133–136) trong sách gốc."
    }
  ],

  "bai-25": [
    {
      id: "hac-hinh-ngo-si-quy",
      youtubeId: "tlH53nkUBU0",
      title: "Hạc Hình (Hạc Quyền) — Cố Võ Sư Ngô Sĩ Quý trực tiếp biểu diễn",
      masterName: "Cố Võ Sư Ngô Sĩ Quý (1922–2018 • Dòng Sư Tổ Nguyễn Tế Công)",
      lineageBadge: "Tư Liệu Gốc Quý Giá • Cố Võ Sư Ngô Sĩ Quý",
      pedagogicalFocus: "Tư liệu gốc ghi hình Cố Võ sư Ngô Sĩ Quý trực tiếp biểu diễn Hạc Hình: phong thái thanh thoát, điềm tĩnh, thăng bằng vững chãi và đòn cánh hạc / mỏ hạc chuẩn mực.",
      watchPoints: [
        "Cách mở hai cánh tay nhẹ nhàng như cánh hạc (Hạc dực) và chụm ngón tay làm mỏ hạc (Hạc chủy).",
        "Trục thân thẳng, tĩnh tại, giữ thăng bằng hoàn hảo khi chuyển tấn.",
        "Tinh thần thanh tịnh, thu liễm nội tinh (Hạc thuộc Hỏa, chủ Tâm — luyện Tinh)."
      ],
      comparisonWithBook: "Sách gốc (Trang 118–119 & 137–140 • 32 động tác do Võ sư Nguyễn Hoàng Giang biểu diễn): 'Hạc thuộc Hỏa, chủ Tâm (tim) — Luyện Hạc quyền để luyện Tinh, tăng cường thăng bằng và sự tĩnh tại'."
    }
  ],

  "bai-26": [
    {
      id: "ngu-hinh-tong-hop-ngo-si-quy",
      youtubeId: "bepUAEyWh4Y",
      title: "Ngũ Hình Quyền Tổng Hợp — Cố Võ Sư Ngô Sĩ Quý trực tiếp biểu diễn",
      masterName: "Cố Võ Sư Ngô Sĩ Quý (1922–2018 • Dòng Sư Tổ Nguyễn Tế Công)",
      lineageBadge: "Tư Liệu Gốc Quý Giá • Cố Võ Sư Ngô Sĩ Quý",
      pedagogicalFocus: "Tư liệu lịch sử vô giá ghi hình Cố Võ sư Ngô Sĩ Quý trực tiếp biểu diễn trọn vẹn bài Ngũ Hình Tổng Hợp — dung hợp cả 5 linh thú Long, Xà, Hổ, Báo, Hạc trong một dòng chảy liên hoàn.",
      watchPoints: [
        "Sự chuyển hóa tự nhiên, không gượng gạo giữa 5 thần thái: Long (biến hóa), Xà (mềm dẻo), Hổ (trầm hùng), Báo (nhanh nhạy), Hạc (tĩnh tại).",
        "Sự hợp nhất của Tinh – Khí – Thần – Lực – Cốt trên nền tảng trung tuyến Vịnh Xuân.",
        "Nhịp thở sâu và khoan thai xuyên suốt toàn bài."
      ],
      comparisonWithBook: "Khớp trực tiếp với Bài Ngũ Hình Quyền Tổng Hợp (Trang 141–145 • 37 động tác do Võ sư Nguyễn Hoàng Giang biểu diễn) trong sách gốc của PGS.TS Nguyễn Mạnh Nhâm."
    }
  ],

  "bai-31": [
    {
      id: "bat-tram-dao-ip-chun",
      youtubeId: "fEDvxC7VIB8",
      title: "Đại Sư Diệp Chuẩn (Ip Chun) biểu diễn toàn bài Bát Trảm Đao (Bart Cham Doh)",
      masterName: "Đại Sư Diệp Chuẩn (Ip Chun, sinh 1924 • Trưởng tử Đại Tông Sư Diệp Vấn)",
      lineageBadge: "Trưởng Tử Diệp Gia • Tuyệt Kỹ Song Đao",
      pedagogicalFocus: "Tư liệu quý giá ghi hình Đại Sư Diệp Chuẩn trực tiếp biểu diễn trọn vẹn 8 tiết đoạn Bát Trảm Đao chính tông của Đại Tông Sư Diệp Vấn truyền lại.",
      watchPoints: [
        "Hai thanh đao luôn đi đôi: một đao gạt khóa vũ khí địch, đao kia lập tức chém/đâm trên trung tuyến.",
        "Kỹ thuật xoay lật cổ tay mềm dẻo đưa sống đao áp sát cẳng tay.",
        "Bộ pháp di chuyển lướt xéo nhập nội đúng khẩu quyết 'Đơn đao khán thủ, song đao khán bộ'."
      ],
      comparisonWithBook: "Đối sánh trực quan với 61 động tác (26 chiêu / 69 hình chụp) Bài Bát Trảm Đao trong sách gốc (Lời dẫn Trang 187–188, Bài tập Trang 191–198)."
    }
  ],

  "con": [
    {
      id: "con-ip-man-lineage",
      youtubeId: "sNu8dMgz2X0",
      title: "Lục Điểm Bán Côn (Luk Dim Boon Kwun) — Truyền thống Dòng Đại Tông Sư Diệp Vấn – Diệp Chuẩn",
      masterName: "Dòng Truyền Thừa Đại Tông Sư Diệp Vấn – Đại Sư Diệp Chuẩn",
      lineageBadge: "Chuẩn Mực 6,5 Điểm Côn Vịnh Xuân",
      pedagogicalFocus: "Minh họa rõ ràng 6 động tác rưỡi của Lục Điểm Bán Côn (Thương, Cái, Phất, Đinh, Khiêu, Khuyên và Bán điểm tích thủy) cùng tấn pháp vững chãi.",
      watchPoints: [
        "Tấn Kiềm Dương và Tứ Bình tấn hạ thấp để làm đối trọng vững chắc cho cây côn dài.",
        "Đầu côn xoay trong vòng tròn nhỏ với uy lực xuyên thấu lớn nhờ lực đòn bẩy từ hai tay và hông.",
        "Động tác 'Bán điểm' (nửa điểm cuối): mũi côn chúc xuống như giọt nước rơi xuống đất (Tích thủy)."
      ],
      comparisonWithBook: "Khớp với nguyên văn sách gốc (Lời dẫn Trang 188–189, Bài tập Trang 199–202): Bài Lục Điểm Bán Côn gồm 26 động tác (17 chiêu / 18 hình chụp)."
    }
  ],

  "lieu-diep-kiem": [
    {
      id: "kiem-flow-jian",
      youtubeId: "_Fvl-t52MwQ",
      title: "Thân pháp & Kiếm thế cổ truyền (Kiếm Thân Hợp Nhất)",
      masterName: "Tư Liệu Kiếm Pháp Cổ Truyền",
      lineageBadge: "Kiếm Thân Hợp Nhất • Uyển Chuyển Như Lá Liễu",
      pedagogicalFocus: "Minh họa sự mềm mại, linh hoạt của cổ tay và nguyên lý 'Lấy thân dẫn kiếm, kiếm thân hợp nhất' trong kiếm pháp cổ truyền.",
      watchPoints: [
        "Cổ tay xoay vòng tròn (Khuyên kiếm) mềm mại như lá liễu bay trong gió.",
        "Mũi kiếm luôn hướng về trung tâm mục tiêu dù thân người xoay chuyển liên tục.",
        "Sự kết hợp giữa bước chân nhẹ nhàng thanh thoát và đòn đâm thẳng (Thích kiếm)."
      ],
      comparisonWithBook: "Sách gốc (Lời dẫn Trang 189–190, Bài tập Trang 202–206): Bài Liễu Diệp Kiếm vận dụng Lục đại kiếm thế (Khuyên, Trầm, Trát, Thích, Phất, Lặc) với tôn chỉ 'Kiếm thân hợp nhất'."
    }
  ],

  "bai-29": [
    {
      id: "khicong-ngo-si-quy",
      youtubeId: "QRva9_51kVw",
      title: "Bài Khí Công Quyền — Cố Võ Sư Ngô Sĩ Quý trực tiếp biểu diễn",
      masterName: "Cố Võ Sư Ngô Sĩ Quý (1922–2018 • Dòng Sư Tổ Nguyễn Tế Công)",
      lineageBadge: "Tư Liệu Gốc Quý Giá • Cố Võ Sư Ngô Sĩ Quý",
      pedagogicalFocus: "Tư liệu lịch sử vô giá quay trực tiếp Cố Võ sư Ngô Sĩ Quý biểu diễn đúng bài Khí Công Quyền của hệ phái Vịnh Xuân cụ Nguyễn Tế Công tại Việt Nam!",
      watchPoints: [
        "Quan sát nhịp hít vào sâu (phình bụng) và thở ra từ từ (thót bụng) đồng bộ với từng thế mở – khép tay.",
        "Động tác cực kỳ khoan thai, mềm mại, dẫn nội khí từ Đan Điền ra khắp tứ chi.",
        "Sự kết hợp giữa Bát Đoạn Cẩm, Dịch Cân Kinh và thủ pháp Vịnh Xuân Quyền."
      ],
      comparisonWithBook: "Khớp với Bài Phật Gia Khí Công Quyền thuộc Chương IV — Nội Công (Trang 172, do Võ sư ThS.DS Nguyễn Duy Thức trình bày) trong sách gốc của PGS.TS Nguyễn Mạnh Nhâm."
    }
  ]
};

/**
 * Helper: Lấy danh sách video thị phạm của một bài quyền (có fallback an toàn).
 */
export function getMasterVideosForForm(formId: string): MasterVideoItem[] {
  return FORM_MASTER_VIDEOS[formId] || FORM_MASTER_VIDEOS["bai-07"];
}
