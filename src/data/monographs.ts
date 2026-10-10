export interface MonographSection {
  id: string;
  title: string;
  chapter: string;
  badge: string;
  excerpt: string;
  readTime: string;
  content: string[];
  keypoints: string[];
}

export const MONOGRAPHS: MonographSection[] = [
  {
    id: "lich-su",
    title: "Sự Hình Thành Vịnh Xuân Quyền & Dòng Chảy Việt Nam",
    chapter: "Phần 1: Lịch Sử & Xuất Xứ",
    badge: "Lịch Sử",
    readTime: "8 phút",
    excerpt: "Nguồn gốc từ Nam Thiếu Lâm, phong trào Phản Thanh Phục Minh, hành trình nhập Việt năm 1939 của Sư Tổ Nguyễn Tế Công và Cố Đại Võ Sư Trần Thúc Tiển.",
    content: [
      "Vịnh Xuân Quyền bắt nguồn từ phong trào 'Phản Thanh Phục Minh' tại miền Nam Trung Hoa sau khi chùa Nam Thiếu Lâm bị đốt phá. Để đào tạo nhanh chóng những nghĩa sĩ có khả năng cận chiến sát thương cao trong không gian chật hẹp, các bậc cao đồ đã chắt lọc những tinh hoa giản dị, thực chiến nhất để sáng tạo nên môn phái.",
      "Năm 1939, Sư Tổ Nguyễn Tế Công (1877 - 1959) từ Phật Sơn sang Việt Nam, đặt chân tới Hà Nội rồi sau này vào Chợ Lớn. Tại Hà Nội, Cụ đã truyền thụ võ công cho Đại đệ tử Trần Thúc Tiển (1912 - 1980).",
      "Võ sư Trần Thúc Tiển là tấm gương võ học mẫu mực, người đã truyền thụ toàn bộ hệ thống quyền pháp Vịnh Xuân và Nội công cho GS.TS Y khoa Nguyễn Mạnh Nhâm, tạo nên nền móng vững chắc cho Võ đường Phật Gia Vịnh Xuân ngày nay."
    ],
    keypoints: [
      "Sư Tổ Nguyễn Tế Công là người khai sơn phá thạch Vịnh Xuân Quyền Việt Nam.",
      "Cố Đại Võ Sư Trần Thúc Tiển là sư phụ chân truyền trực tiếp của GS.TS Nguyễn Mạnh Nhâm.",
      "Võ phái luôn giữ vững đạo lý Tôn Sư Trọng Đạo và tinh thần phụng sự y võ."
    ]
  },
  {
    id: "tan-kiem-duong",
    title: "Quy Chuẩn Tấn Kiềm Dương (Nhị Tự Kiềm Dương Tấn)",
    chapter: "Phần 1: Kỹ Thuật Cơ Bản",
    badge: "Tấn Pháp",
    readTime: "6 phút",
    excerpt: "Đặc trưng bất biến của Phật Gia Vịnh Xuân: Hai bàn chân đứng rất gần nhau, gối khép che hạ bộ, ngực hàm lưng thẳng.",
    content: [
      "Khác biệt căn bản nhất giữa Phật Gia Vịnh Xuân và các môn phái ngoại gia như Thiếu Lâm, Karatedo là cự ly hai bàn chân. Môn phái tuyệt đối không đứng tấn rộng (trung bình tấn bành rộng).",
      "Quy cách chuẩn: Hai bàn chân đứng rất gần nhau (khoảng cách hẹp hơn vai), mũi chân hướng nhẹ vào trong hoặc song song, hai đầu gối chùng nhẹ và kẹp miết vào trong để che kín 100% cửa hạ bộ.",
      "Cột sống luôn giữ trục thẳng đứng tuyệt đối (Hư linh đỉnh kình), xương cụt hơi thu vào trong để mở khóa khớp háng và tụ khí đan điền."
    ],
    keypoints: [
      "Khoảng cách hai bàn chân hẹp hơn vai, hai gối khép che kín hạ bộ.",
      "Lưng thẳng, ngực buông lỏng, cùi chỏ khép chặt mạn sườn.",
      "Nghiêm cấm đứng tấn rộng kiểu cưỡi ngựa (Mã bộ rộng)."
    ]
  },
  {
    id: "linh-giac",
    title: "Chuyên Đề Linh Giác: Giác Quan Thứ Sáu Của Vịnh Xuân",
    chapter: "Phần 2: Chương 2",
    badge: "Công Phu",
    readTime: "7 phút",
    excerpt: "Phương pháp phát triển độ linh của xúc giác qua Niêm Thủ (Chi Sao), Động Thiền và bài tập song đấu bịt mắt.",
    content: [
      "Khi đối kháng tốc độ cao, mắt người không thể bắt kịp những đòn biến ảo cận chiến; thông tin truyền từ mắt lên não rồi mới phát tín hiệu co cơ sẽ bị trễ. Linh Giác chính là chìa khóa then chốt.",
      "Nhờ tiếp xúc xúc giác trên da thịt, môn sinh cảm nhận ngay hướng lực, độ mạnh yếu và ý đồ của đối phương để hóa giải trong tích tắc mà không cần qua chỉ đạo não bộ.",
      "Cấp độ chuyên sâu của luyện tập là song đấu bịt mắt: Môn sinh dùng dải vải che kín 2 mắt, hoàn toàn dựa vào cảm nhận xúc giác, biến võ thuật thành một hình thức Động Thiền tĩnh tại."
    ],
    keypoints: [
      "Xúc giác phản xạ nhanh hơn thị giác gấp nhiều lần trong cận chiến.",
      "Vừa đỡ vừa đánh đồng thời (Phản thủ đồng thời), dĩ công vi thủ.",
      "Luyện bịt mắt giúp tâm an định, xóa bỏ nỗi sợ hãi thị giác."
    ]
  },
  {
    id: "khau-quyet",
    title: "Khẩu Quyết Bí Truyền & Trục Tý Ngọ Tuyến",
    chapter: "Phần 2: Chương 3",
    badge: "Khẩu Quyết",
    readTime: "5 phút",
    excerpt: "Các bài thơ Hán - Việt đúc kết nguyên lý hình học và vật lý học: Tý Ngọ Tuyến, Lai lưu khứ tống, Thoát thủ trực xông.",
    content: [
      "1. Tý Ngọ Tuyến: Trục thẳng nối liền tâm ngực của ta và đối thủ. Ai khống chế được trục này, người đó kiểm soát trận đấu.",
      "2. Lai lưu khứ tống, thoát thủ trực xông: Đòn tới thì mượn lực đón giữ, đòn rút đi thì áp sát tiễn theo; hễ tay rời đòn đỡ là lập tức phóng thẳng trung lộ.",
      "3. Lưỡng điểm chi gian, trực tuyến tối giản: Đường thẳng là con đường ngắn nhất và nhanh nhất, không đánh vòng vo hao lực.",
      "4. Bất tiêu bất báng, xỉa nhược lưu tinh: Không chống cự cứng nhắc, đòn đâm xỉa nhanh như sao băng."
    ],
    keypoints: [
      "Kiểm soát đường trung tuyến là nguyên tắc sống còn.",
      "Đánh thẳng tâm điểm, mượn quán tính của đối thủ.",
      "Phát lực ngắn (Thung kình) không cần lấy đà xa."
    ]
  },
  {
    id: "noi-cong",
    title: "Chuyên Đề Nội Công Dưới Góc Nhìn Y Học Hiện Đại",
    chapter: "Phần 2: Chương 4",
    badge: "Y Võ",
    readTime: "9 phút",
    excerpt: "Luận giải của GS.TS Y khoa Nguyễn Mạnh Nhâm về cơ chế thở cơ hoành, kích thích hệ thần kinh phó giao cảm và phát lực thấu kình.",
    content: [
      "Câu nói ngạn ngữ: 'Đả quyền bất luyện công - Đáo lão nhất trường không; Lực bất đả quyền - Quyền bất đả công'. Sức mạnh cơ bắp theo tuổi tác sẽ teo nhược, nhưng nội công thì càng già càng thâm hậu.",
      "Dưới góc nhìn y học hiện đại: Thở đan điền (thở cơ hoành) huy động toàn bộ các phế nang vùng đáy phổi, tăng thể tích thông khí và giải phóng nồng độ hormone hạnh phúc Endorphin.",
      "Kích hoạt hệ thần kinh phó giao cảm giúp hạ huyết áp, ổn định nhịp tim và đưa cơ thể vào trạng thái tái tạo tế bào. Trong chiến đấu, lực thấu kình được phóng qua hệ thống cân mạc (Fascia) đàn hồi tạo sóng chấn động phá hủy nội tạng đối thủ."
    ],
    keypoints: [
      "Nội công duy trì sức khỏe tráng kiện và uy lực võ học trọn đời.",
      "Thở bụng sâu kích thích tuần hoàn máu và tái tạo tế bào nội tạng.",
      "Phát lực thấu kình thông qua đàn hồi cân mạc, không dùng gồng cứng."
    ]
  },
  {
    id: "binh-khi",
    title: "Hệ Thống Binh Khí Võ Phái & Dị Khí Cụ Tế Công",
    chapter: "Phần 2: Chương 5",
    badge: "Binh Khí",
    readTime: "8 phút",
    excerpt: "Bát Trảm Đao cận chiến, Lục Điểm Bán Côn tầm xa, Liễu Diệp Kiếm biến hóa cùng kỹ pháp Chuỳ Dây và Phi Tiêu Cụ Tế Công.",
    content: [
      "Nguyên lý cốt lõi: 'Binh khí là cánh tay nối dài'. Mọi góc độ của binh khí đều vận hành dựa trên các thủ pháp quyền cước cơ bản (Than đao, Bàng đao, Khuyên đao...).",
      "Bát Trảm Đao: Cặp song đao ngắn có quai chắn bảo vệ mu bàn tay, chuyên dụng cận chiến trên ghe thuyền với 8 hướng phạt sắc bén.",
      "Lục Điểm Bán Côn: Côn gỗ sáp trắng dài 2m70 với 6 thế rưỡi thấu kình cương mãnh.",
      "Các dị khí đặc biệt: Khi ở Hà Nội, Cụ Tế Công còn truyền thụ Đao + Khiên mây, Đại đao Quan Công, Chuỳ Dây (Lưu tinh chuỳ cho cụ Đinh Công Niết) và phi tiêu lá liễu cắm sâu vào gỗ lim."
    ],
    keypoints: [
      "Vũ khí là tay nối dài, bộ pháp linh hoạt theo Tấn Kiềm Dương.",
      "Bát Trảm Đao và Lục Điểm Bán Côn là 2 bài binh khí cổ truyền tiêu biểu.",
      "Kỹ pháp chuỳ dây và phi tiêu thể hiện trình độ phát lực tinh tế."
    ]
  },
  {
    id: "thieu-lam-phu-luc",
    title: "Cội Nguồn Thiếu Lâm & Lịch Sử Võ Đường Phật Gia",
    chapter: "Phần 3 & Phụ Lục",
    badge: "Thiếu Lâm",
    readTime: "6 phút",
    excerpt: "Bắc Thiếu Lâm Tung Sơn, Nam Thiếu Lâm Phúc Kiến, Ngũ Tổ Thiếu Lâm và chuyến về nguồn Phật Sơn năm 2004 tại Võ đường Diêu Kỳ.",
    content: [
      "Bắc Thiếu Lâm tại Tung Sơn (Hà Nam) do Bạt Đà lập năm 495, Bồ Đề Đạt Ma truyền Dịch Cân Kinh năm 527. Nam Thiếu Lâm tại Lộc Tùng (Phúc Kiến) là nơi khai sinh ra Vịnh Xuân Quyền trong phong trào kháng Thanh.",
      "Dòng truyền thừa Phật Sơn: Ngũ Mai Sư Thái -> Nghiêm Vịnh Xuân -> Lương Nhị Tỷ & Hoàng Hoa Bảo -> Lương Tán -> Trần Hoa Thuận -> Ngô Trọng Tố -> Nguyễn Tế Công & Diêu Tài.",
      "Năm 2004, đoàn võ sư Võ đường Phật Gia Vịnh Xuân do GS.TS Nguyễn Mạnh Nhâm dẫn đầu đã sang Phật Sơn, dâng hương tại Nhà thờ họ Diêu và Võ đường Diêu Kỳ, diện kiến VS Diêu Cường kết nối tình thâm huynh đệ đồng môn."
    ],
    keypoints: [
      "Vịnh Xuân Quyền kế thừa dòng máu hào kiệt của Nam Thiếu Lâm.",
      "Nguyễn Tế Công và Diêu Tài là đồng môn thân thiết tại Phật Sơn.",
      "Chuyến về nguồn 2004 xác lập vị thế và nguồn cội vững chắc của môn phái."
    ]
  }
];
