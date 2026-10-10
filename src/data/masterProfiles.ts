// ==============================================================================
// HỒ SƠ TỔ SƯ & CÁC BẬC TIỀN BỐI TRUYỀN THỪA PHẬT GIA VỊNH XUÂN
// Tư liệu lịch sử chính thống & đối chiếu công trình "Phật Gia Vịnh Xuân Quyền"
// (GS.TS Y khoa Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức - 2012)
// ==============================================================================

export interface MasterProfileSection {
  title: string;
  subtitle?: string;
  content: string[];
  keyHighlight?: string;
}

export interface MasterProfile {
  id: string;
  generation: number;
  generationLabel: string;
  name: string;
  courtesyName?: string; // Tên chữ / Biệt danh
  hanzi?: string;
  cantoneseName?: string;
  period: string;
  birthYear: number;
  deathYear?: number;
  roleTitle: string;
  hometown: string;
  portrait: string;
  greetingPhoto?: string;
  coreQuote: string;
  quoteContext: string;
  historicalLocations: string[];
  lineagePredecessor?: string;
  lineageSuccessors: string[];
  summary: string;
  sections: MasterProfileSection[];
  keyContributions: string[];
  famousAnecdotes?: {
    title: string;
    story: string;
  }[];
}

export const MASTER_PROFILES: MasterProfile[] = [
  // ============================================================================
  // ĐỜI THỨ NHẤT: SƯ TỔ NGUYỄN TẾ CÔNG (YUEN CHAI WAN)
  // ============================================================================
  {
    id: "nguyen-te-cong",
    generation: 1,
    generationLabel: "Sư Tổ Khai Sơn (Thế Hệ Thứ Nhất)",
    name: "Nguyễn Tế Công",
    courtesyName: "Nguyễn Lão Tứ, Đậu Bì Tế",
    hanzi: "阮濟雲",
    cantoneseName: "Yuen Chai Wan (Nguyễn Tế Vân)",
    period: "1877 – 1959",
    birthYear: 1877,
    deathYear: 1959,
    roleTitle: "Sư Tổ Vịnh Xuân Quyền Việt Nam",
    hometown: "Phật Sơn, Nam Hải, tỉnh Quảng Đông, Trung Quốc",
    portrait: "/assets/images/historical/nguyen_te_cong.png",
    coreQuote: "Đạo Vịnh Xuân lấy nhu thuận làm gốc, lấy thẳng thắn làm đường, lấy trung dung làm đích.",
    quoteContext: "Khẩu truyền tâm pháp truyền thừa môn phái khi khai mở võ đạo tại Việt Nam năm 1939.",
    historicalLocations: [
      "Phật Sơn (Quảng Đông)",
      "Ngõ Hàng Chỉ (Hà Nội)",
      "38 Phố Gia Ngư (Hà Nội)",
      "Chợ Lớn (Sài Gòn)",
      "Lái Thiêu (Bình Dương)"
    ],
    lineagePredecessor: "Đại sư Hoắc Bảo Toàn & Danh sư Phùng Thiếu Thanh (Phật Sơn)",
    lineageSuccessors: [
      "Trần Thúc Tiển",
      "Vũ Bá Quý",
      "Ngô Sĩ Quý",
      "Trần Văn Phùng",
      "Hồ Hải Long",
      "Lục Viễn Khai"
    ],
    summary:
      "Tông sư sáng lập hệ phái Vịnh Xuân Việt Nam. Bậc danh gia võ học xuất thân từ cái nôi Phật Sơn, người đã đem ngọn lửa quyền thuật bí truyền vượt ngàn dặm về phương Nam, khai mở nên một dòng chảy võ đạo rực rỡ suốt gần một thế kỷ qua.",
    sections: [
      {
        title: "1. Thân Thế & Cơ Duyên Võ Học Phật Sơn",
        subtitle: "Dòng dõi danh gia & tầm đạo danh sư",
        content: [
          "Sư Tổ Nguyễn Tế Công sinh năm 1877 tại Phật Sơn (Quảng Đông) — kinh đô võ thuật của miền Nam Trung Hoa. Tên thật của Cụ là Nguyễn Tế Vân. Do tiếng Quảng Đông từ 'Tế Vân' phát âm gần với 'trệ vận' (vận rủi), Cụ thường tự xưng là Nguyễn Tế. Về sau, học trò và nhân dân kính trọng gọi Cụ là Nguyễn Tế Công (chữ 'Công' là danh xưng tôn kính dành cho bậc cao niên đức độ).",
          "Cụ là anh ruột của võ sư Nguyễn Kỳ Sơn (Yuen Kay Shan) — một trong ba 'Phật Sơn Vịnh Xuân Tam Hùng' lừng lẫy (cùng với Diệp Vấn và Diêu Tài). Thân phụ của hai anh em là cụ Nguyễn Long Minh, một phú thương cự phách sở hữu xưởng chế tác pháo hoa danh tiếng Mulberry Gardens tại Phật Sơn.",
          "Nhờ gia thế giàu có và lòng say mê võ học tột bậc, gia đình đã mời những bậc đại tông sư đương thời về tư gia thụ giáo riêng: Đại sư Hoắc Bảo Toàn (truyền thụ Vịnh Xuân quyền và song đao Bát Trảm Đao) và Danh sư Phùng Thiếu Thanh (truyền thụ đại đao, trường côn và công phu cận chiến nội gia). Cụ Tế Công tiếp thu trọn vẹn cả hai dòng mạch quyền pháp và binh khí tinh thâm nhất của võ phái."
        ],
        keyHighlight: "Nguyễn Tế Công là bậc tiền bối đồng môn của Đại sư Diệp Vấn tại Phật Sơn, sở hữu nguồn cội võ học chính thống và thuần khiết nhất."
      },
      {
        title: "2. Hành Trình Về Phương Nam & Khai Đạo Tại Hà Nội",
        subtitle: "Lánh nạn năm 1937 và ngọn lửa võ đạo bùng cháy tại đất Thăng Long",
        content: [
          "Năm 1937, khi chiến tranh nổ ra tại Trung Quốc, Sư Tổ Nguyễn Tế Công rời quê hương lánh nạn sang Việt Nam. Sau một thời gian ngắn lưu lại Hải Phòng, Cụ chuyển lên Hà Nội định cư từ khoảng năm 1939.",
          "Tại đất kinh kỳ, ban đầu Cụ sống giản dị, mở hiệu thuốc y học cổ truyền và bán hàng để mưu sinh. Vốn tính khiêm nhường, Cụ không hề phô trương võ công. Tuy nhiên, đạo cao đức trọng chẳng thể giấu kín; tiếng tăm về một bậc danh sư võ nghệ siêu quần, y thuật cao minh nhanh chóng lan tỏa trong giới trí thức và võ giới thủ đô.",
          "Giai đoạn 1939 – 1954 tại Hà Nội là thời kỳ vàng son định hình Vịnh Xuân Việt Nam. Cụ thu nhận và rèn giũa thế hệ đại đệ tử đầu tiên — những bậc hào kiệt đất Thăng Long như Trần Thúc Tiển, Ngô Sĩ Quý, Vũ Bá Quý, Trần Văn Phùng, Hồ Hải Long... Các lớp học diễn ra bí mật tại các địa chỉ lịch sử như ngõ Hàng Chỉ và đặc biệt là số nhà 38 phố Gia Ngư (tư gia của Võ sư Trần Thúc Tiển)."
        ],
        keyHighlight: "Năm 1954, tại 38 Gia Ngư, Sư Tổ Nguyễn Tế Công đã trực tiếp chỉ đạo thiết kế và lắp đặt cây Mộc Nhân 5 tầng cọc lịch sử làm chuẩn mực truyền dạy cho môn đồ miền Bắc."
      },
      {
        title: "3. Giai Đoạn Sài Gòn — Chợ Lớn & Di Sản Bất Hủ",
        subtitle: "Những năm tháng cuối đời và sự lan tỏa toàn cầu",
        content: [
          "Năm 1954, theo dòng biến động của lịch sử, Sư Tổ Nguyễn Tế Công di chuyển vào miền Nam, định cư tại khu vực Chợ Lớn (Sài Gòn). Tại đây, Cụ tiếp tục mở rộng truyền dạy cho các môn sinh như Lục Viễn Khai, Nguyễn Bá Khả, Đỗ Bá Vinh...",
          "Ngày 23 tháng 6 năm 1959, Sư Tổ tạ thế tại Sài Gòn, hưởng thọ 82 tuổi. Mộ phần của Cụ được an táng trang trọng tại nghĩa trang Lái Thiêu (tỉnh Bình Dương), đến nay vẫn là chốn hành hương thiêng liêng của hàng vạn môn đồ Vịnh Xuân khắp năm châu.",
          "Đặc trưng lớn nhất của dòng Vịnh Xuân Nguyễn Tế Công là sự bảo tồn trọn vẹn yếu tố 'Phật Gia' nội công: Lấy nhu thắng cương, vận động cơ thể theo cơ chế xoắn lò xo đàn hồi (thoát thủ trực xông), đề cao thính kình xúc giác và phép thở Đan Điền dưỡng sinh trường thọ."
        ],
        keyHighlight: "Hệ phái Vịnh Xuân Nguyễn Tế Công (Việt Nam Vịnh Xuân) ngày nay đã phát triển rực rỡ tại Pháp, Nga, Canada, Ba Lan, Úc và trở thành di sản văn hóa võ học độc đáo của thế giới."
      }
    ],
    keyContributions: [
      "Khai sơn lập phái, truyền bá Vịnh Xuân Quyền chính thống vào Việt Nam từ năm 1939.",
      "Thiết kế và chuẩn hóa hệ thống Mộc Nhân 5 tầng cọc (38 Gia Ngư, Hà Nội).",
      "Đào tạo nên thế hệ đại sư đầu tiên lẫy lừng cho nền võ học nước nhà.",
      "Kết hợp hoàn hảo giữa võ thuật cận chiến đỉnh cao và y thuật dưỡng sinh trường thọ."
    ],
    famousAnecdotes: [
      {
        title: "Giai thoại đứng tấn Kiềm Dương bạt lực lính lê dương",
        story:
          "Trong thời kỳ kháng chiến tại Hà Nội, một nhóm lính lê dương to lớn hung hãn đã bao vây và tìm cách xô ngã Cụ Tế Công. Cụ điềm nhiên chùng chân đứng thế Nhị Tự Kiềm Dương Tấn, hai tay thu dưới nách. Khi đối phương dốc toàn lực lao vào đẩy, thân Cụ như ghim chặt rễ sắt vào lòng đất; ngược lại, kình lực nén đàn hồi bung ra khiến đối phương bật ngửa văng xa hàng mét mà Cụ không hề xê dịch một tấc."
      }
    ]
  },

  // ============================================================================
  // ĐỜI THỨ HAI: CỐ VÕ SƯ TRẦN THÚC TIỂN (1911 – 1980)
  // ============================================================================
  {
    id: "tran-thuc-tien",
    generation: 2,
    generationLabel: "Đại Đệ Tử Chân Truyền (Thế Hệ Thứ Hai)",
    name: "Trần Thúc Tiển",
    courtesyName: "Thầy Tiển 38 Gia Ngư",
    hanzi: "陳叔展",
    period: "1911 – 1980",
    birthYear: 1911,
    deathYear: 1980,
    roleTitle: "Đại Võ Sư Nội Công & Bậc Thầy Giữ Lửa Hà Nội",
    hometown: "Làng Nam Dư Hạ, xã Trần Phú, huyện Thanh Trì, Hà Nội",
    portrait: "/assets/images/historical/tran_thuc_tien.png",
    coreQuote: "Chân như rễ cây cắm sâu vào lòng đất. Chân không vững thì đòn đánh chỉ là sức hời hợt bên ngoài.",
    quoteContext: "Lời răn dạy đệ tử về công phu Nhị Tự Kiềm Dương Tấn tại võ đường 38 phố Gia Ngư.",
    historicalLocations: [
      "Quảng Châu (nơi sinh)",
      "Nam Dư Hạ (Thanh Trì, Hà Nội)",
      "Số 38 Phố Gia Ngư (Hà Nội)",
      "Nhà in Chấn Hưng (Hà Nội)"
    ],
    lineagePredecessor: "Sư Tổ Nguyễn Tế Công",
    lineageSuccessors: [
      "GS.TS Nguyễn Mạnh Nhâm",
      "Trần Thiết Côn (con trai)",
      "Các môn sinh nòng cốt Hà Nội"
    ],
    summary:
      "Một trong những đại đệ tử đầu tiên và xuất sắc nhất của Sư Tổ Nguyễn Tế Công tại Hà Nội. Trí thức Tây học yêu nước, chủ nhà in Chấn Hưng, bậc thầy công phu nội khí Đan Điền và thính kình Niêm Thủ, người đã giữ trọn vẹn ngọn lửa Vịnh Xuân miền Bắc sau năm 1954.",
    sections: [
      {
        title: "1. Thân Thế Trí Thức & Cơ Duyên Khỏi Bệnh Thần Kỳ",
        subtitle: "Từ một thanh niên thư sinh mang bệnh đến kỳ tích võ học",
        content: [
          "Cố Võ sư Trần Thúc Tiển sinh năm 1911 tại Quảng Châu (Trung Quốc) trong thời kỳ thân phụ Cụ sang làm việc tại đây, quê gốc tại làng Nam Dư Hạ, huyện Thanh Trì, Hà Nội. Cụ xuất thân trong một gia đình nền nếp, theo học nền giáo dục Pháp - Việt và đỗ bằng Diplom (Thành chung) — một học vị danh giá của tầng lớp trí thức bấy giờ.",
          "Thời trai trẻ, Cụ là doanh nhân thành đạt, sở hữu nhà in Chấn Hưng danh tiếng tại phố cổ Hà Nội. Tuy nhiên, Cụ có thể trạng gầy yếu và không may mắc phải căn bệnh lao phổi hiểm nghèo (thời bấy giờ y học coi là chứng nan y).",
          "Năm 1939, cơ duyên hạnh ngộ Sư Tổ Nguyễn Tế Công vừa từ miền Nam sang Hà Nội. Nhận thấy Cụ Tiển là người trí thức khiêm cung, tâm tính thuần hậu, Cụ Tế Công đã nhận làm đồ đệ và trực tiếp hướng dẫn Cụ phương pháp luyện thở Đan Điền, thả lỏng toàn thân và bài quyền Tiểu Niệm Đầu. Nhờ kiên trì khổ luyện phi thường, bệnh lao phổi của Cụ Tiển đã biến mất hoàn toàn, cơ thể trở nên tráng kiện, nội lực hùng hậu khác thường."
        ],
        keyHighlight: "Câu chuyện tự chữa lành bệnh lao phổi bằng Vịnh Xuân của Thầy Tiển là minh chứng sống động cho giá trị y võ kết hợp và dưỡng sinh trường thọ của môn phái."
      },
      {
        title: "2. Địa Chỉ Đỏ 38 Gia Ngư & Ngọn Lửa Giữ Gìn Di Sản",
        subtitle: "Tổ đình của Vịnh Xuân miền Bắc suốt nhiều thập kỷ",
        content: [
          "Căn nhà số 38 phố Gia Ngư (quận Hoàn Kiếm, Hà Nội) vốn là tư gia của gia đình Cố Võ sư Trần Thúc Tiển. Trong suốt những năm 1940 – 1954, nơi đây trở thành tổng hành dinh võ học, nơi Sư Tổ Tế Công thường xuyên lui tới truyền dạy cho các đại đồ đệ.",
          "Chính tại tầng 1 căn nhà 38 Gia Ngư, Sư Tổ đã chỉ dẫn Cụ Tiển chế tác cây mộc nhân 5 tầng cọc — báu vật võ học đến nay vẫn được bảo tồn nguyên vẹn. Khi Cụ Tế Công vào Nam năm 1954, trọng trách gìn giữ ngọn lửa Vịnh Xuân tại miền Bắc được Cụ Tiển gánh vác trọn vẹn trên vai.",
          "Trong giai đoạn chiến tranh và bao cấp đầy gian khó, lớp học tại 38 Gia Ngư vẫn đỏ lửa trong âm thầm. Cụ Tiển truyền dạy cực kỳ nghiêm cẩn, chọn lọc kỹ càng, chú trọng rèn luyện đạo đức môn sinh trước khi dạy quyền thế."
        ],
        keyHighlight: "Võ sư Trần Thúc Tiển từng tham gia đào tạo võ thuật thực chiến và cận chiến cho cán bộ Bộ Công an và chiến sĩ đặc công Quân đội Nhân dân Việt Nam."
      },
      {
        title: "3. Tuyệt Kỹ Nội Khí & Đúc Kết Sư Phạm Chân Truyền",
        subtitle: "Thính kình xúc giác đạt cảnh giới thượng thừa",
        content: [
          "Võ sư Trần Thúc Tiển nổi danh với trình độ Niêm Thủ (黐手) đạt tới mức xuất quỷ nhập thần. Mắt Cụ có thể nhắm nghiền, nhưng chỉ cần cẳng tay đối phương chạm vào tay Cụ là toàn bộ hướng lực, tốc độ và ý đồ tấn công của đối thủ đều bị hóa giải và phản hồi kình lực ngược trở lại ngay tức khắc.",
          "Cụ dạy học trò: 'Đánh Vịnh Xuân không được gồng cơ bắp, phải buông lỏng như nước, thở sâu dưới Đan Điền. Khi lực đến thì nhường đường cho lực đi, khi lực hết thì kình tự phóng.'",
          "Những năm tháng cuối đời, Cụ đã dốc lòng truyền thụ toàn bộ tinh hoa quyền pháp, mộc nhân pháp và triết lý y võ cho học trò xuất sắc là Bác sĩ Nguyễn Mạnh Nhâm, đặt nền móng vững chắc cho sự ra đời của công trình giáo trình chính thống sau này."
        ],
        keyHighlight: "Năm 2016, Cố Võ sư Trần Thúc Tiển được Hội Võ thuật Hà Nội chính thức vinh danh vì những cống hiến kiệt xuất cho nền võ học cổ truyền dân tộc."
      }
    ],
    keyContributions: [
      "Gìn giữ và duy trì trọn vẹn mạch nguồn Vịnh Xuân Quyền miền Bắc sau năm 1954.",
      "Lưu giữ và bảo tồn cây Mộc Nhân 5 tầng cọc lịch sử tại 38 Gia Ngư, Hà Nội.",
      "Huấn luyện võ thuật cận chiến cho lực lượng Công an và Quân đội nhân dân Việt Nam.",
      "Đào tạo và trao truyền toàn bộ di sản cho GS.TS Y khoa Nguyễn Mạnh Nhâm."
    ]
  },

  // ============================================================================
  // ĐỜI THỨ BA: ĐẠI SƯ GS.TS Y KHOA NGUYỄN MẠNH NHÂM (1932 – NAY)
  // ============================================================================
  {
    id: "nguyen-manh-nham",
    generation: 3,
    generationLabel: "Bậc Thầy Y Võ (Thế Hệ Thứ Ba)",
    name: "Nguyễn Mạnh Nhâm",
    courtesyName: "Bác Sĩ Nhâm Vịnh Xuân",
    hanzi: "阮孟壬",
    period: "1932 – nay (Đại thọ 94 tuổi)",
    birthYear: 1932,
    roleTitle: "Đại Sư Phật Gia Vịnh Xuân • Tác Giả Giáo Trình 2012 • Giáo Sư Y Khoa",
    hometown: "Hà Nội, Việt Nam",
    portrait: "/assets/images/historical/tran_thuc_tien.png", // Dùng portrait placeholder trang trọng
    coreQuote: "Phương pháp tốt nhất trước một cuộc chiến là tránh cuộc chiến. Ý nghĩa cao nhất của võ đạo là bảo tồn sinh mạng và sự hòa hiếu giữa con người.",
    quoteContext: "Trích Lời khuyên số 3 trong tác phẩm kinh điển 'Phật Gia Vịnh Xuân Quyền' (NXB Văn Hóa Thông Tin 2012).",
    historicalLocations: [
      "Bệnh viện Hữu nghị Việt Đức (Hà Nội)",
      "Số 38 Phố Gia Ngư (nơi thọ giáo Cụ Tiển)",
      "Hội Vịnh Xuân Hà Nội",
      "Hội Hậu môn Trực tràng Việt Nam"
    ],
    lineagePredecessor: "Cố Võ Sư Trần Thúc Tiển",
    lineageSuccessors: [
      "Võ sư Lê Đắc Kiên (Võ đường Huỳnh Thúc Kháng)",
      "ThS.DS Nguyễn Duy Thức (đồng tác giả)",
      "11 Võ sư nòng cốt ghi danh trong sách giáo trình 2012"
    ],
    summary:
      "Bậc đại thụ y học Việt Nam và là đại danh sư của dòng phái Phật Gia Vịnh Xuân. Người có công vĩ đại nhất trong việc dùng tri thức khoa học giải phẫu, cơ sinh học và sinh lý thần kinh hiện đại để giải mã, hệ thống hóa và xuất bản thành sách toàn bộ 225 trang giáo trình chân truyền cho hậu thế.",
    sections: [
      {
        title: "1. Sự Nghiệp Y Khoa Lẫy Lừng & Đại Thụ Ngoại Khoa",
        subtitle: "Gần 60 năm cứu người tại Bệnh viện Hữu nghị Việt Đức",
        content: [
          "Giáo sư, Tiến sĩ Y khoa Nguyễn Mạnh Nhâm sinh năm 1932 tại Hà Nội. Ông là một trong những chuyên gia ngoại khoa đầu ngành uy tín bậc nhất Việt Nam, nguyên Trưởng khoa Phẫu thuật Tiêu hóa Bệnh viện Hữu nghị Việt Đức, Chủ tịch Danh dự Hội Hậu môn Trực tràng Việt Nam.",
          "Với gần 60 năm tận tụy cống hiến cho sự nghiệp cứu người, GS.TS Nguyễn Mạnh Nhâm đã thực hiện hàng vạn ca phẫu thuật phức tạp, cứu sống vô số bệnh nhân hiểm nghèo và đào tạo nhiều thế hệ bác sĩ phẫu thuật xuất sắc cho đất nước.",
          "Chính nền tảng y học lâm sàng sâu sắc, sự thấu hiểu tường tận về hệ cơ xương khớp, mạng lưới mạch máu và các cung phản xạ thần kinh đã trở thành chiếc chìa khóa vàng giúp ông tiếp cận võ học cổ truyền dưới góc nhìn khoa học thực nghiệm hiếm có."
        ],
        keyHighlight: "GS.TS Nguyễn Mạnh Nhâm là hiện thân sống động của mẫu hình 'Y Võ Tương Thông' — Lấy y thuật cứu người, lấy võ thuật rèn tâm và bảo vệ sinh mạng."
      },
      {
        title: "2. Thọ Giáo Chân Truyền & Khoa Học Hóa Vịnh Xuân",
        subtitle: "Giải mã thính kình, trục Tý Ngọ dưới góc độ sinh lý thần kinh",
        content: [
          "Từ thập niên 1960, Bác sĩ Nguyễn Mạnh Nhâm theo học Cố Võ sư Trần Thúc Tiển tại số nhà 38 Gia Ngư. Nhờ tư chất thông tuệ và sự kiên trì bền bỉ, ông lĩnh hội trọn vẹn các công phu tinh túy nhất từ Cụ Tiển: từ các bài quyền Tiểu Niệm Đầu, Tầm Kiều, Tiêu Chỉ, 108 thế liên hoàn đến kỹ thuật Mộc Nhân và ngũ hình binh khí.",
          "Khác với cách truyền miệng bí hiểm xưa cũ, GS.TS Nguyễn Mạnh Nhâm đã dùng ngôn ngữ cơ sinh học hiện đại để luận giải tường tận: Tại sao cùi chỏ phải luôn cách ngực một nắm đấm (thủ lưu trung tuyến)? Tại sao đòn đánh theo trục Tý Ngọ đi quãng ngắn nhất và uy lực nhất? Tại sao phản xạ Niêm Thủ xúc giác lại nhanh hơn thị giác của mắt (bỏ qua vỏ não, đi thẳng qua tủy sống)?",
          "Dưới sự lãnh đạo của ông trên cương vị Chủ tịch Hội Vịnh Xuân Hà Nội, môn phái đã bước ra khỏi bóng tối bí truyền, trở thành một môn thể thao võ đạo rèn luyện sức khỏe lành mạnh, khoa học và nhân văn."
        ],
        keyHighlight: "Chuyên khảo về cơ chế phản xạ tủy xúc giác không qua vỏ não trong chương 'Linh Giác' là đóng góp học thuật độc nhất vô nhị của GS.TS Nguyễn Mạnh Nhâm cho võ học thế giới."
      },
      {
        title: "3. Tác Phẩm Để Đời: 'Phật Gia Vịnh Xuân Quyền' (2012)",
        subtitle: "225 trang giáo trình chuẩn mực — Báu vật di sản số hóa",
        content: [
          "Năm 2012, sau nhiều thập kỷ ấp ủ và chắt lọc, GS.TS Y khoa Nguyễn Mạnh Nhâm cùng ThS.DS Nguyễn Duy Thức đã xuất bản tác phẩm kinh điển: 'Phật Gia Vịnh Xuân Quyền' (Nhà xuất bản Văn Hóa Thông Tin, 225 trang).",
          "Cuốn sách quy tụ 1.096 bức ảnh chụp thị phạm chân thực của các võ sư nòng cốt (như HLV Lê Đắc Kiên, Lê Văn Tùng, Nguyễn Việt Dũng...), phân định chi tiết toàn bộ hệ thống quyền pháp, binh khí, cọc mộc nhân, 200 thế đòn đối kháng và 42 lời khuyên vàng của sư phụ.",
          "Đây chính là cuốn cẩm nang toàn thư duy nhất của môn phái có giá trị pháp lý, học thuật và tư liệu gốc chuẩn mực nhất, là nền tảng cốt lõi được số hóa 100% trong dự án Võ Đường Số hôm nay."
        ],
        keyHighlight: "Cuốn sách là kim chỉ nam bảo tồn tính chân xác 100% cho toàn bộ hệ thống kỹ thuật Phật Gia Vịnh Xuân, ngăn chặn hoàn toàn nguy cơ tam sao thất bản."
      }
    ],
    keyContributions: [
      "Khoa học hóa và y học hóa toàn bộ lý luận võ học Phật Gia Vịnh Xuân.",
      "Tác giả công trình đồ sộ 225 trang sách 'Phật Gia Vịnh Xuân Quyền' (NXB Văn Hóa Thông Tin 2012).",
      "Chủ tịch Hội Vịnh Xuân Hà Nội, người quy tụ và đào tạo 11 Võ sư nòng cốt kỳ cựu.",
      "Định hình 7 Đại Khẩu Quyết, Trục Tý Ngọ Tuyến và 42 Lời Khuyên Của Sư Phụ lưu truyền hậu thế."
    ]
  },

  // ============================================================================
  // ĐỜI THỨ TƯ: VÕ SƯ LÊ ĐẮC KIÊN (1975 – NAY)
  // ============================================================================
  {
    id: "le-dac-kien",
    generation: 4,
    generationLabel: "Thế Hệ Nòng Cốt Kế Thừa (Thế Hệ Thứ Tư)",
    name: "Lê Đắc Kiên",
    courtesyName: "Võ Sư Kiên Huỳnh Thúc Kháng",
    period: "1975 – nay",
    birthYear: 1975,
    roleTitle: "Chủ Nhiệm Võ Đường Huỳnh Thúc Kháng • Học Trò Nòng Cốt GS.TS Nguyễn Mạnh Nhâm",
    hometown: "Hà Nội, Việt Nam",
    portrait: "/assets/images/instructors/vo_su_le_dac_kien.jpg",
    greetingPhoto: "/assets/images/instructors/vo_su_le_dac_kien_chao.jpg",
    coreQuote: "Đến thì mở lòng đón nhận, đi thì nhẹ nhàng đưa tiễn; buông lỏng toàn thân để mượn lực đả lực. Cốt lõi của Vịnh Xuân không phải là thắng người bằng sức mạnh cơ bắp, mà là chiến thắng chính sự nóng vội và bản ngã của bản thân.",
    quoteContext: "Tâm pháp truyền thừa của Võ sư Lê Đắc Kiên gửi tới môn sinh tại Võ đường Huỳnh Thúc Kháng (Hà Nội).",
    historicalLocations: [
      "Võ Đường Huỳnh Thúc Kháng (Hà Nội)",
      "Sàn tập Phật Gia Vịnh Xuân Hà Nội",
      "Không gian Võ Đường Số (Digital Dojo)"
    ],
    lineagePredecessor: "GS.TS Y Khoa Nguyễn Mạnh Nhâm",
    lineageSuccessors: [
      "Các môn sinh và người tập tại Võ đường Huỳnh Thúc Kháng"
    ],
    summary:
      "Võ sư nòng cốt kỳ cựu được ghi danh chính thức trong tác phẩm kinh điển 'Phật Gia Vịnh Xuân Quyền' (2012). Người trực tiếp phụ trách giảng dạy và truyền lửa tại Võ đường Huỳnh Thúc Kháng, gìn giữ phương pháp sư phạm y võ chuẩn xác và tiên phong đưa di sản võ học bước vào kỷ nguyên số.",
    sections: [
      {
        title: "1. Cơ Duyên Bái Sư & Gần Ba Thập Kỷ Khổ Luyện",
        subtitle: "Học trò nòng cốt kề cận bên GS.TS Nguyễn Mạnh Nhâm",
        content: [
          "Võ sư Lê Đắc Kiên bén duyên với Phật Gia Vịnh Xuân từ thuở thanh xuân, may mắn được trực tiếp thọ giáo và kề cận bên cạnh GS.TS Y khoa Nguyễn Mạnh Nhâm trong suốt gần ba mươi năm ròng rã.",
          "Với bản tính điềm đạm, khiêm cung, Cụ Thầy Nhâm đã truyền thụ cho ông từng chi tiết vi giải phẫu: từ góc mở của mũi chân Kiềm Dương Tấn, cách khép chỏ bảo vệ mạng sườn đến cảm nhận thính kình đan điền trong từng nhịp thở.",
          "Ông là một trong 11 Võ sư nòng cốt kỳ cựu được Thầy Nhâm tin tưởng ghi danh chính thức trong phần Lời Giới Thiệu trang trọng của tác phẩm 'Phật Gia Vịnh Xuân Quyền' (2012) — ghi nhận công sức đóng góp thị phạm và bảo tồn môn phái."
        ],
        keyHighlight: "Hơn 20 năm đứng lớp giảng dạy, Võ sư Lê Đắc Kiên luôn kiên trì giữ đúng từng khuôn đòn chuẩn mực của sách gốc, tuyệt đối không lai tạp hay biến tướng."
      },
      {
        title: "2. Tinh Thần Võ Đường Huỳnh Thúc Kháng: Thiền Võ Nhất Như",
        subtitle: "Rèn luyện thân tâm — Tiên học lễ, hậu học văn",
        content: [
          "Tại Võ đường Huỳnh Thúc Kháng (Hà Nội), Võ sư Lê Đắc Kiên xây dựng môi trường tập luyện đậm chất thiền môn: Tôn sư trọng đạo, hòa ái, không sát phạt tranh đua. Mỗi buổi tập đều bắt đầu và kết thúc bằng nghi thức Bão Quyền Lễ cung kính.",
          "Ông đặc biệt chú trọng rèn luyện Tấn Kiềm Dương và bài tập Xoay Cổ Tay (B-M-A-N-B) cho võ sinh mới: 'Chân chưa vững thì chưa học đấm, tâm chưa tĩnh thì chưa học phản đòn.'",
          "Rất nhiều thế hệ môn sinh từ học sinh, sinh viên đến các bác sĩ, trí thức đã tìm thấy sự cân bằng tâm lý, phục hồi sức khỏe cột sống và tôi luyện bản lĩnh điềm đạm trước nghịch cảnh cuộc sống nhờ phương pháp huấn luyện của ông."
        ],
        keyHighlight: "Bão quyền lễ không chỉ là cử chỉ chào hỏi, mà là tâm thế khiêm nhường: Dùng đức nhân từ (chưởng trái) bao bọc ý chí dũng mãnh (quyền phải) để hòa giải vạn biến."
      },
      {
        title: "3. Tầm Nhìn Số Hóa Di Sản & Khẩu Quyết Thực Hành",
        subtitle: "Cầu nối giữa kho tàng tiền nhân và người học hiện đại",
        content: [
          "Trong kỷ nguyên công nghệ số, Võ sư Lê Đắc Kiên ủng hộ mạnh mẽ việc số hóa toàn văn 225 trang giáo trình, phục chế 1.096 bức ảnh $2\\times$ Retina và xây dựng nền tảng Web Võ Đường Số nhằm lưu giữ ngọn lửa di sản mãi mãi với thời gian.",
          "Tuy nhiên, ông luôn đau đáu dặn dò môn sinh khẩu quyết mang tính thức tỉnh: 'Kiến thức thì số hoá nhưng luyện tập vẫn là thật và cần thực hành hàng ngày.'",
          "Màn hình số hay cuốn sách giáo trình chỉ là tấm bản đồ chỉ đường; nếu người học không tự mình bước lên sàn tập, không đổ mồ hôi đứng tấn và niêm thủ mỗi ngày thì mãi mãi không thể chạm tới công phu thực chứng của Phật Gia Vịnh Xuân."
        ],
        keyHighlight: "Khẩu quyết 'Số hóa tri thức — Khổ luyện thực chứng' của Võ sư Kiên đã trở thành triết lý kim chỉ nam xuyên suốt toàn bộ dự án Võ Đường Số hôm nay."
      }
    ],
    keyContributions: [
      "Chủ nhiệm và linh hồn của Võ đường Huỳnh Thúc Kháng (Hà Nội) suốt hơn 20 năm qua.",
      "Góp công bảo tồn và thị phạm các tư liệu ảnh chuẩn xác cho giáo trình 2012.",
      "Kế thừa và duy trì phương pháp huấn luyện y võ nghiêm cẩn của GS.TS Nguyễn Mạnh Nhâm.",
      "Định hướng và đồng hành cùng dự án Số Hóa Di Sản Phật Gia Vịnh Xuân Quyền."
    ]
  }
];

/** Lấy hồ sơ vị thầy theo ID */
export function getMasterProfileById(id: string): MasterProfile | undefined {
  return MASTER_PROFILES.find((m) => m.id === id);
}

/** Lấy danh sách ID 4 vị thầy theo thứ tự truyền thừa */
export const MASTER_IDS = [
  "nguyen-te-cong",
  "tran-thuc-tien",
  "nguyen-manh-nham",
  "le-dac-kien"
];
