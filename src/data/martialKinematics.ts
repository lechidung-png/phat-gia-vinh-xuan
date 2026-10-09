// Martial Kinematics & Specific Form Directives
// Bộ khẩu quyết, yếu lĩnh và lưu ý chuyên biệt cho từng bài quyền Phật Gia Vịnh Xuân

export interface FormKinematics {
  kieu: string; // Tên phân loại
  khauQuyet: string; // Khẩu quyết võ đạo
  yeuLinh: string; // Yếu lĩnh thân pháp
  cotTu: [string, string, string]; // 3 điểm cốt tử
}

export const FORM_KINEMATICS_MAP: Record<string, FormKinematics> = {
  // 1. TIỂU NIỆM ĐẦU
  "01-tieu-niem-dau": {
    kieu: "Khởi Môn Định Hình",
    khauQuyet: "Ý thủ đan điền • Trực chỉ trung tuyến • Nhu hòa phát kình • Tùy cơ ứng biến.",
    yeuLinh: "Nhị Tự Kiềm Dương Tấn chân hẹp hơn vai, hai đầu gối khép hướng tâm che hạ bộ. Cùi chỏ ghì sát sườn cự ly 1 nắm đấm. Xoay cổ tay (Khẩu thủ) mượn lực xoắn gân, thở bằng bụng tự nhiên.",
    cotTu: [
      "Không gồng cứng cơ bắp; chuyển động mềm mại như nước chảy để tích lũy nội kình.",
      "Khép hai đầu gối hướng tâm bảo vệ hạ bàn, không choãi chân làm hở cửa dưới.",
      "Mắt nhìn thẳng tầm mắt đối phương, duy trì thần thái trầm tĩnh an định."
    ]
  },
  "bai-06-m-1": {
    kieu: "Khởi Môn Định Hình",
    khauQuyet: "Tiểu Niệm Đầu tâm tư bất tranh • Trọng tâm hạ trầm kiềm dương • Nhật tự xung quyền trung tuyến khai thông.",
    yeuLinh: "Nhị Tự Kiềm Dương Tấn chân hẹp hơn vai, hai đầu gối khép hướng tâm. Cùi chỏ ghì sát mạn sườn, xuất lực xoay cổ tay mượn kình từ gân cốt.",
    cotTu: [
      "Cùi chỏ thủ trung tuyến, không mở nách làm hở sườn.",
      "Hạ trầm đan điền, giữ cột sống thẳng đứng tự nhiên.",
      "Tập chậm rãi để kiểm soát từng thớ cơ và đường đi của lực."
    ]
  },

  // 2. TẦM KIỀU
  "02-tam-kieu": {
    kieu: "Nhập Nội Bắc Nhịp",
    khauQuyet: "Hữu kiều độ kiều, vô kiều tầm kiều • Lạc bộ sinh kình, chuyển thân hóa lực • Song Bàng biến ảo.",
    yeuLinh: "Xoay trục hông 90° - 180° né đòn đối kháng, dùng Song Bàng Thủ và Lan Thủ triệt tiêu đòn đấm thẳng. Nhập nội cự ly gần bằng bước tam giác đè chân đối phương.",
    cotTu: [
      "Xoay hông nhưng không nhấc gót chân làm mất trọng tâm hạ bàn.",
      "Cùi chỏ dẫn đường cho bàn tay, không vung tay quá rộng khỏi trung lộ.",
      "Đón lực rồi mượn lực xoay hướng, không dùng sức thô chặn đối đầu."
    ]
  },
  "bai-09": {
    kieu: "Nhập Nội Bắc Nhịp",
    khauQuyet: "Hữu kiều độ kiều, vô kiều tầm kiều • Xoay trục né quyền, nhập môn khóa gối.",
    yeuLinh: "Xoay eo đổi góc 45° - 90°, cùi chỏ áp sát sườn. Khi cầu nối (tay đối phương) chạm vào lập tức dính sát không rời, chân lướt vào áp sát.",
    cotTu: [
      "Chuyển tấn nhịp nhàng giữa Kiềm Dương và Đinh Tấn xoay.",
      "Cẳng tay luôn duy trì áp lực nêm hướng về trung tâm đối thủ.",
      "Phối hợp đòn cước tầm thấp triệt hạ bộ khi đối phương tiến bước."
    ]
  },

  // 3. TIÊU CHỈ
  "03-tieu-chi": {
    kieu: "Tuyệt Kỹ Cứu Nguy",
    khauQuyet: "Tiêu Chỉ bất xuất môn • Phóng tiêu như đạn, thoát hiểm nan sinh • Khử khẩn quy viên.",
    yeuLinh: "Phóng đầu ngón tay xuyên phá hiểm hóc (mắt, yết hầu, nách). Động tác vung chém xoay tròn thoát khỏi gọng kìm khống chế, lật ngược thế cờ trong gang tấc.",
    cotTu: [
      "Chỉ xuất thủ khi bị áp chế mất thế hoặc thất thế trung tuyến.",
      "Cổ tay và ngón tay phải luyện dẻo dai để tránh tổn thương khi đâm xỉa.",
      "Thân pháp xoay chuyển đột ngột giải phóng toàn bộ kình lực tích tụ."
    ]
  },
  "bai-09-m-1": {
    kieu: "Tuyệt Kỹ Cứu Nguy",
    khauQuyet: "Tiêu Chỉ hộ mệnh • Xuyên thấu hiểm huyệt, cứu nguy phá vây.",
    yeuLinh: "Tập trung lực ở đầu 4 ngón tay duỗi thẳng, cùi chỏ đóng vai trò đòn bẩy. Vừa né tránh vừa phản công vào các tử huyệt thượng bàn.",
    cotTu: [
      "Gân ngón tay phải khóa cứng đúng thời điểm tiếp xúc mục tiêu.",
      "Xoay eo hết biên độ để gia tăng uy lực ly tâm cho ngón tay.",
      "Hồi thủ lập tức về thế thủ bảo vệ mặt sau khi phóng đòn."
    ]
  },

  // 4. BÀI 108 TẠI CHỖ & TIẾN LÙI (ĐƠN LUYỆN)
  "04-108-don-luyen": {
    kieu: "Đại Pháp Đơn Luyện",
    khauQuyet: "Bách bát liên hoàn bất đoạn kình • Nhất động toàn thân câu động • Khép chặt hạ môn.",
    yeuLinh: "108 động tác liên hoàn tại chỗ. Luyện phối hợp Than - Bàng - Phục cùng các thế xỉa chưởng, thung kình và câu thủ trong tư thế hạ bàn bất động.",
    cotTu: [
      "Đòn nọ nối tiếp đòn kia mượt mà, không dừng ngắt quãng.",
      "Hạ bàn giữ nguyên tấn kiềm dương, chân bám chặt sàn như rễ cây.",
      "Hơi thở nhịp nhàng theo từng nhịp ra đòn và thu quyền."
    ]
  },
  "bai-11-m-1": {
    kieu: "Đại Pháp Đơn Luyện",
    khauQuyet: "108 thế liên hoàn tại chỗ • Đơn luyện thuần thục, thấu suốt âm dương.",
    yeuLinh: "Rèn luyện sự dẻo dai của khớp vai, cùi chỏ và cổ tay qua 108 tư thế biến hóa. Giữ trục cột sống thẳng đứng, đan điền tích khí.",
    cotTu: [
      "Mỗi thế đòn phải đạt chuẩn góc nêm 135° của tam giác sinh lực.",
      "Không gồng vai làm tắc nghẽn kinh mạch và giảm tốc độ phát đòn.",
      "Tập trung tinh thần quán tưởng đối thủ đang ở trước mặt."
    ]
  },

  // 5. BÀI 108 ĐỐI LUYỆN (SONG ĐẤU 2 NGƯỜI)
  "05-108-doi-luyen": {
    kieu: "Đối Kháng Thực Chiến",
    khauQuyet: "Thính kình hiểu lực, mượn sức đánh sức • Cầm nã khóa siết, triệt quyền xuyên tâm.",
    yeuLinh: "Hai người A & B đối diện tập hóa giải đòn thế. Luyện cảm giác tiếp xúc tay (niêm thủ), bẻ khóa cổ tay, cùi chỏ và phản đòn lập tức khi phát hiện sơ hở.",
    cotTu: [
      "Không đối đầu sức mạnh cơ bắp; trượt đòn đối phương bằng góc nghiêng.",
      "Khoảng cách 2 người vừa vặn một sải cẳng tay, luôn che kín yết hầu.",
      "Nương theo hướng lực của bạn tập để dẫn dắt vào thế bẫy."
    ]
  },
  "bai-12-m-1": {
    kieu: "Đối Kháng Thực Chiến",
    khauQuyet: "108 thế đối luyện tại chỗ • Cầm nã hóa giải, song quyền tương triệt.",
    yeuLinh: "Người đánh người đỡ phối hợp nhịp nhàng. Tập thói quen phản xạ không cần suy nghĩ khi cánh tay chạm đối thủ.",
    cotTu: [
      "Khống chế lực vừa phải để bảo vệ an toàn cho bạn đồng môn.",
      "Luôn giữ cùi chỏ che chở mạn sườn trong mọi pha áp sát.",
      "Quan sát hạ bàn bạn tập để không bị cài chân quét ngã."
    ]
  },

  // 6. 108 TIẾN LÙI
  "06-108-tien-lui-don": {
    kieu: "Bộ Pháp Tiến Lùi",
    khauQuyet: "Bộ pháp như thuyền lướt nước • Khoa chân vẽ vòng tròn • Tiến như gió cuốn, thoái như bóng mây.",
    yeuLinh: "Phối hợp Đinh Tấn và bước chân hình bán nguyệt (Khoa bộ). Vừa di chuyển tiến lùi vừa phát đòn chém, đấm bồi và hoành thoái né tránh.",
    cotTu: [
      "Bàn chân lướt sát mặt đất, không nhảy chồm chồm làm mất thăng bằng.",
      "Trọng tâm 7/3 (7 phần chân sau, 3 phần chân trước) khi tiến bước.",
      "Thân trên giữ tĩnh trong khi hạ bàn di chuyển linh hoạt."
    ]
  },
  "bai-13-m-1": {
    kieu: "Bộ Pháp Tiến Lùi",
    khauQuyet: "Tiến thoái như ý • Khoa chân né đòn, chớp thời cơ dứt điểm.",
    yeuLinh: "Di chuyển liên tục trên trục thẳng và chéo 45 độ, duy trì thế thủ trước ngực trong mọi bước chuyển dịch.",
    cotTu: [
      "Không bắt chéo chân làm vướng vấp hạ bàn.",
      "Hông và vai xoay đồng bộ theo hướng bước của chân.",
      "Khoảng cách giữa hai chân luôn ổn định sau mỗi bước lướt."
    ]
  },
  "bai-14-m-1": {
    kieu: "Đối Luyện Tiến Lùi",
    khauQuyet: "Tiến lui giáp chiến • Vồ long trảo, thúc gối nhọn, quét gót triệt hạ.",
    yeuLinh: "Thực chiến di động 2 người. Một người tấn công dồn dập, một người thoái lui hóa giải rồi phản kích chiếm lại không gian trung lộ.",
    cotTu: [
      "Kiểm soát khoảng cách an toàn, không để đối thủ dồn vào góc tường.",
      "Dùng cẳng chân chèn ép chân đối phương khi vừa nhập nội.",
      "Thực hiện đòn thốn kình ở cự ly 1 tấc khi áp sát."
    ]
  },

  // 7. CỌC GỖ MỘC NHÂN (MỘC NHÂN THUNG)
  "bai-16-m-1": {
    kieu: "Thao Pháp Cọc Gỗ",
    khauQuyet: "Cọc gỗ như địch sống • Lắng nghe thớ gỗ lim • Đạp cọc sinh lực, chuyển bộ quanh tâm.",
    yeuLinh: "Tập đòn thế với 3 tay cọc và 1 chân cọc cong. Dùng góc nêm đón đỡ lực cứng của gỗ, xoay thân áp sát thân cọc, chân gài khóa chân cọc gỗ.",
    cotTu: [
      "Dùng thung kình rung động phát lực, không dùng cơ bắp đập mạnh vào cọc.",
      "Áp sát ngực vào thân cọc để luyện thói quen chiến đấu cự ly hẹp.",
      "Cẳng tay trượt nhẹ nhàng trên tay cọc để bảo vệ màng xương."
    ]
  },
  "bai-17-m-1": {
    kieu: "Mộc Nhân Tiến Lùi",
    khauQuyet: "Vây quanh cọc gỗ • Chuyển bộ 8 hướng, triệt cọc phá thế.",
    yeuLinh: "Di chuyển liên tục quanh cọc gỗ 38 Gia Ngư. Đổi góc đánh từ trước mặt sang bên sườn và phía sau cọc mộc nhân.",
    cotTu: [
      "Bước chân vòng quanh chân cọc gỗ nhịp nhàng, không để chân cọc ngáng ngã.",
      "Đánh vào tay cọc trên đồng thời chèn chân vào chân cọc dưới.",
      "Tưởng tượng cọc gỗ là đối thủ cao lớn đang dồn ép ta."
    ]
  },

  // 8. NGŨ HÌNH QUYỀN (LONG, XÀ, HỔ, BÁO, HẠC)
  "gioi-thieu-ngu-hinh-m-1": {
    kieu: "Ngũ Linh Võ Học • Long Quyền",
    khauQuyet: "Du Long uốn lượn • Nhu trung hữu cương • Rồng lượn mây bay, biến hóa khôn lường.",
    yeuLinh: "Thân pháp uốn lượn theo hình sóng, cánh tay vươn dài kéo giãn cơ gân. Bàn tay hóa Long Trảo chụp bắt, kéo giật đối phương vào thế mất trọng tâm.",
    cotTu: [
      "Lực phát ra từ sống lưng truyền qua khớp vai ra đầu móng vuốt.",
      "Di chuyển uyển chuyển mềm mại, không có góc chết gập cơ.",
      "Mắt thần uy nghiêm thể hiện khí phách thần long xuất hải."
    ]
  },
  "bai-21-m-1": {
    kieu: "Ngũ Linh Võ Học • Xà Quyền",
    khauQuyet: "Linh xà thổ tín • Nhu nhuận triền ty • Mềm như dải lụa, mổ trúng huyệt sâu.",
    yeuLinh: "Cổ tay mềm dẻo như đầu rắn linh hoạt. Đòn đánh luồn lách qua các khe hở phòng thủ của đối phương, phóng mổ nhanh vào yết hầu, nách, mắt sườn.",
    cotTu: [
      "Thả lỏng tuyệt đối toàn bộ cánh tay để gia tăng tốc độ luồn lách.",
      "Đòn mổ xuất phát bất ngờ không báo trước đường đi.",
      "Sau khi chạm mục tiêu lập tức rút về thế quấn trói như trăn xà."
    ]
  },
  "bai-22-m-1": {
    kieu: "Ngũ Linh Võ Học • Hổ Quyền",
    khauQuyet: "Mãnh hổ phục cừu • Kình phát sấm sét • Cương mãnh trầm hùng, bẻ gãy khớp xương.",
    yeuLinh: "Các ngón tay co quắp cứng như móng vuốt cọp. Phát lực bộc phát (thốn kình) từ hông và gót chân, đè bẹp phòng ngự đối phương bằng sức mạnh chấn động.",
    cotTu: [
      "Hạ tấn vững như bàn thạch, gầm hơi thở phát âm tạo uy thế.",
      "Vuốt hổ vồ từ trên xuống hoặc móc thốc từ dưới lên cằm đối thủ.",
      "Khóa chặt cổ tay đối phương bằng lực bấu của các đầu ngón tay."
    ]
  },
  "bai-23-m-1": {
    kieu: "Ngũ Linh Võ Học • Báo Quyền",
    khauQuyet: "Kim báo phi thân • Tốc độ vô song • Ra đòn chớp giật, dồn dập liên miên.",
    yeuLinh: "Gập các đốt ngón tay tạo thành nắm đấm báo (Báo quyền). Đánh liên hoàn cự ly ngắn với tốc độ cực nhanh, nhắm vào thái dương, chấn thủy và hạ sườn.",
    cotTu: [
      "Tần số ra đòn cao, đòn tay này vừa rút thì đòn tay kia đã chạm đích.",
      "Bước chân thoăn thoắt tiến áp sát, không cho đối thủ cơ hội thở.",
      "Cổ tay khóa thẳng góc để tránh bẻ ngược khớp khi đấm nhanh."
    ]
  },
  "bai-24-m-1": {
    kieu: "Ngũ Linh Võ Học • Hạc Quyền",
    khauQuyet: "Bạch hạc lượng dực • Khinh linh thâm nhập • Độc lập hạc tấn, điểm châm chính xác.",
    yeuLinh: "Cánh tay mở rộng dang như cánh hạc, chụm 5 ngón tay thành mỏ hạc (Hạc trủy). Đứng tấn một chân thanh thoát, đòn mổ chính xác vào các đại huyệt cơ thể.",
    cotTu: [
      "Khả năng giữ thăng bằng tuyệt hảo trên một chân.",
      "Cánh tay rung giật tạo lực chém bằng cạnh bàn tay như cánh chim bổ xuống.",
      "Thần thái điềm tĩnh, nhắm mục tiêu chính xác tuyệt đối."
    ]
  },
  "bai-25-m-1": {
    kieu: "Ngũ Linh Hợp Nhất",
    khauQuyet: "Ngũ hình hợp nhất • Long - Xà - Hổ - Báo - Hạc biến hóa liên hoàn.",
    yeuLinh: "Chuyển đổi nhịp nhàng giữa cương (Hổ, Báo) và nhu (Long, Xà, Hạc). Tùy theo thế đánh của đối phương mà hóa thân thành linh vật khắc chế thích hợp.",
    cotTu: [
      "Chuyển đổi thế tay không khựng lại giữa chừng.",
      "Thân pháp thích ứng linh hoạt theo từng tính chất của 5 loài vật.",
      "Nội lực và thần khí hòa quyện làm một."
    ]
  },

  // 9. BINH KHÍ CỔ TRUYỀN (BÁT TRẢM ĐAO, CÔN, KIẾM)
  "bai-30-m-1": {
    kieu: "Binh Khí • Song Đao Cận Chiến",
    khauQuyet: "Bát Trảm Đao pháp • Song đao hộ thân, trảm thủ áp môn • Nhập nội triệt cước.",
    yeuLinh: "Cầm song đao cán ngắn có quai bảo vệ tay. Một đao che chắn thân mình (Than đao, Bàng đao), một đao chém phạt chớp nhoáng vào cổ tay, đùi hoặc cổ đối phương.",
    cotTu: [
      "Lưỡi đao luôn dính sát cẳng tay che chở thân thể, không vung quá rộng.",
      "Bước chân lướt áp sát vào điểm mù của vũ khí dài (thương, côn).",
      "Phối hợp hai tay đao nhịp nhàng như hai cánh cửa khép mở liên tục."
    ]
  },
  "bai-31-m-1": {
    kieu: "Binh Khí • Trường Côn",
    khauQuyet: "Lục Điểm Bán Côn • Trường thương phá trận • Khí quán côn đầu, thốn kình điểm huyệt.",
    yeuLinh: "Côn gỗ dài 2m7 hạ thấp trọng tâm. Luyện 6 thế điểm cốt lõi và 1 thế nửa (Bán côn). Phát lực rung giật từ gốc côn truyền thẳng ra đầu ngọn côn đâm thẳng trung tâm.",
    cotTu: [
      "Hạ tấn thật sâu để làm điểm tựa vững chãi cho cây côn nặng.",
      "Tay sau đẩy, tay trước định hướng; phát lực giật như bắn cung.",
      "Đầu côn rung lắc làm đối phương không đoán được điểm đâm."
    ]
  },
  "lieu-diep-kiem": {
    kieu: "Binh Khí • Đoản Kiếm",
    khauQuyet: "Liễu Diệp Kiếm pháp • Kiếm khí thanh linh • Nhẹ như lá liễu, sắc tựa phong ba.",
    yeuLinh: "Thanh kiếm mỏng nhẹ linh hoạt. Thao tác đâm, chém, gạt, điểm xoay quanh cổ tay với tốc độ xé gió, nương theo đường chuyển động tròn của Vịnh Xuân.",
    cotTu: [
      "Lực phóng ra ở mũi kiếm, không dùng sức cánh tay đập chém thô bạo.",
      "Kiếm đi cùng thân, thân xoay kiếm lướt, không để lộ sơ hở.",
      "Mũi kiếm luôn hướng về yết hầu đối phương trong mọi bước đi."
    ]
  },

  // 10. NIÊM THỦ & NỘI CÔNG
  "bai-26-m-1": {
    kieu: "Nội Gia • Niêm Thủ Linh Giác",
    khauQuyet: "Tay dính như keo • Không đón không xua, nương theo mà đánh • Thính kình tinh tường.",
    yeuLinh: "Hai cánh tay chạm nhau xoay tròn liên tục (Xí Sao). Nhắm mắt vẫn cảm nhận được hướng lực, cường độ lực và ý đồ của đối phương qua bề mặt da cẳng tay.",
    cotTu: [
      "Thả lỏng khớp vai tuyệt đối để dây thần kinh xúc giác nhạy bén tối đa.",
      "Khi đối phương xô tới thì nhường bước hóa giải; khi đối phương rút thì theo sát.",
      "Chỉ phát lực phản công vào đúng khoảnh khắc đối phương đổi lực."
    ]
  },
  "bai-28-m-1": {
    kieu: "Nội Gia • Khí Công Dưỡng Sinh",
    khauQuyet: "Khí trầm đan điền • Ý dẫn khí hành, khí sinh kình lực • Thiền võ nhất như.",
    yeuLinh: "Hít sâu thở chậm bằng cơ hoành. Dẫn luồng chân khí từ đan điền chạy dọc cột sống lên đỉnh đầu (Bách hội) rồi hạ xuống ngực, tích lũy nội công thâm hậu.",
    cotTu: [
      "Tâm trí tuyệt đối thanh tịnh, loại bỏ mọi tạp niệm khi luyện tập.",
      "Không gượng ép hơi thở; hơi thở phải êm, sâu, dài và tự nhiên.",
      "Cảm nhận luồng hơi ấm lan tỏa tại vùng đan điền dưới rốn 3 thốn."
    ]
  }
};

// Fallback chung khi chưa có bài riêng biệt
export const DEFAULT_KINEMATICS: FormKinematics = {
  kieu: "Quyền Pháp Phật Gia",
  khauQuyet: "Trực chỉ trung tuyến • Nhu hòa phát kình • Tùy cơ ứng biến • Tâm võ hợp nhất.",
  yeuLinh: "Giữ vững hạ bàn, cùi chỏ thủ trung lộ. Vận dụng lực xoay eo và gân cốt để đón đỡ và phản kích chuẩn xác.",
  cotTu: [
    "Duy trì cột sống thẳng đứng tự nhiên, không nghiêng ngả.",
    "Thả lỏng cơ bắp để kình lực lưu chuyển thông suốt.",
    "Tập trung tinh thần, quán chiếu từng chuyển động của đòn thế."
  ]
};

export function getFormKinematics(lessonId: string): FormKinematics {
  return FORM_KINEMATICS_MAP[lessonId] || DEFAULT_KINEMATICS;
}
