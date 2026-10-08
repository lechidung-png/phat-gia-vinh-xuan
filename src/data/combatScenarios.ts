// Auto-generated 200 Martial Combat Scenarios & Situational Test Suite
// Di Sản Võ Học Phật Gia Vịnh Xuân Quyền - V-AOF Master Standard 2026
// Nguồn tư liệu: Sách "Phật Gia Vịnh Xuân Quyền" (GS.TS Nguyễn Mạnh Nhâm & ThS.DS Nguyễn Duy Thức - 2012)

export type ScenarioCategory = 
  | "Thượng Bàn (Đầu/Mặt)" 
  | "Trung Bàn (Ngực/Sườn)" 
  | "Hạ Bàn (Chân/Háng)" 
  | "Cầm Nã & Khóa Siết" 
  | "Tự Vệ Đường Phố & Góc Hẹp";

export type ScenarioDangerLevel = "Thấp" | "Trung bình" | "Cao" | "Nguy cấp";

export interface ScenarioQuiz {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface CombatScenario {
  id: string;
  title: string;
  category: ScenarioCategory;
  scenarioType: string;
  dangerLevel: ScenarioDangerLevel;
  opponentAction: string;
  wingChunSolution: string;
  counterTechniqueName: string;
  relatedFormId: string;
  relatedTechCode?: string;
  stances: string[];
  hands: string[];
  coreKinh: string;
  biomechanics: string;
  quiz: ScenarioQuiz;
}

export const COMBAT_SCENARIOS: CombatScenario[] = [
  {
    "id": "SCEN-001",
    "title": "Tình huống 1: Đấm thẳng trực diện tay phải nhắm sống mũi",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "center_punch",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương đứng tấn vững, tung cú đấm thẳng tay phải uy lực nhắm thẳng sống mũi theo trục trung lộ.",
    "wingChunSolution": "Dùng Than Thủ (Tan Sao) tay trái bẻ góc nêm đón lực làm trượt đòn đấm 5cm ra ngoài, đồng thời tay phải phóng Nhật Tự Xung Quyền đánh thẳng yết hầu đối phương.",
    "counterTechniqueName": "Than Thủ Hóa Giải Đấm Thẳng & Xung Quyền Trung Tuyến",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_01",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Xoay eo 45°"
    ],
    "hands": [
      "Than Thủ",
      "Nhật Tự Quyền"
    ],
    "coreKinh": "Đường thẳng giữa 2 điểm là đường ngắn nhất; chiếm trung lộ là chiếm thế thượng phong.",
    "biomechanics": "Cánh tay tạo góc nêm 135 độ chuyển hóa lực xô đẩy thành lực trượt sang bên.",
    "quiz": {
      "question": "Khi đối phương đấm thẳng tay phải vào sống mũi, nguyên tắc Vịnh Xuân chuẩn mực nhất là gì?",
      "options": [
        "Ngả người ra sau né tránh rồi đấm trả",
        "Dùng Than Thủ đón lệch đòn 5cm, tay kia đấm thẳng trung tuyến",
        "Dùng 2 tay ôm đầu chịu đòn",
        "Bước lùi 3 bước tìm cơ hội"
      ],
      "correctIndex": 1,
      "explanation": "Than Thủ tạo góc nêm lệch trục chỉ 5cm giúp đòn địch rơi vào hư không, đồng thời tay kia phát kình phản kích ngay lập tức mà không cần thu tay lấy đà."
    }
  },
  {
    "id": "SCEN-002",
    "title": "Tình huống 2: Đấm móc hàm trái cực mạnh (Tả Câu Quyền)",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "left_hook",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương hạ thấp trọng tâm, vung đòn đấm móc uy lực từ góc trái hướng thẳng vào cằm và quai hàm.",
    "wingChunSolution": "Dùng Cao Bàng Thủ (High Bong Sao) nâng góc cùi chỏ che kín quai hàm, tay kia lập tức xuất Chưởng Đan Điền vỗ mạnh vào chấn thủy đối thủ.",
    "counterTechniqueName": "Cao Bàng Thủ Đỡ Đấm Móc & Đan Điền Chưởng",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_07_1",
    "stances": [
      "Đinh Tấn",
      "Chuyển mã"
    ],
    "hands": [
      "Cao Bàng Thủ",
      "Chấn Thủy Chưởng"
    ],
    "coreKinh": "Đến thì đón, đi thì tiễn; đòn vòng xa, đòn thẳng gần.",
    "biomechanics": "Đòn vòng của địch mất 0.4s, đòn thẳng của Vịnh Xuân chỉ mất 0.15s tới đích.",
    "quiz": {
      "question": "Tại sao Vịnh Xuân không dùng cánh tay chắn ngang đỡ đòn đấm móc hàm?",
      "options": [
        "Vì chắn ngang sẽ bị gãy tay nếu lực đối phương quá lớn",
        "Vì Vịnh Xuân không có thế đỡ",
        "Vì cần phải nhảy lùi lại",
        "Vì đòn móc hàm không nguy hiểm"
      ],
      "correctIndex": 0,
      "explanation": "Đỡ ngang lực đối lực rất dễ chấn thương xương. Cao Bàng Thủ tạo độ dốc tiếp tuyến dẫn toàn bộ quán tính đòn móc trượt qua cùi chỏ."
    }
  },
  {
    "id": "SCEN-003",
    "title": "Tình huống 3: Đấm móc phải tạt mang tai (Hữu Câu Quyền)",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "right_hook",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương vung cú đấm vòng tay phải cực mạnh nhắm thẳng vào thái dương và mang tai bên trái.",
    "wingChunSolution": "Dùng Thác Thủ (Pak Sao) kết hợp Vấn Thủ (Man Sao) vỗ bạt cổ tay đối phương chếch xuống, tay kia dùng Tiêu Chỉ phóng xỉa thẳng vào hốc mắt đối thủ.",
    "counterTechniqueName": "Thác Thủ Bạt Quyền & Tiêu Chỉ Bắn Tỉa",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_01",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Thác Thủ",
      "Tiêu Chỉ"
    ],
    "coreKinh": "Tiêu chỉ xuất động như mũi tên rời cung, giải nguy hiểm nan trong gang tấc.",
    "biomechanics": "Điểm chạm ở cổ tay là điểm đòn bẩy yếu nhất của cánh tay đối phương.",
    "quiz": {
      "question": "Ưu điểm lớn nhất của Tiêu Thủ (ngón tay xỉa) so với nắm đấm khi phản kích vào mặt là gì?",
      "options": [
        "Tầm với xa hơn nắm đấm từ 5-7cm và tốc độ xuất chiêu cực nhanh",
        "Gây tiếng nổ lớn hơn",
        "Không cần tập luyện",
        "Lực công phá nặng hơn nắm đấm"
      ],
      "correctIndex": 0,
      "explanation": "Khi duỗi thẳng 5 ngón tay, tầm với của cánh tay tăng thêm 5-7cm so với khi nắm đấm, cho phép ra đòn trúng đích trước đối thủ."
    }
  },
  {
    "id": "SCEN-004",
    "title": "Tình huống 4: Đấm bồi hai tay liên tiếp kiểu quyền Anh (1-2 Combo)",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Nguy cấp",
    "opponentAction": "Đối phương đấm nhử tay trái rồi dồn toàn lực đấm thẳng tay phải tay sau với tốc độ vũ bão.",
    "wingChunSolution": "Dùng Phục Thủ (Fook Sao) đè kẹp tay trái nhử, đồng thời biến thế Bàng Thủ đón tay sau, lướt tới phóng Liên Hoàn Nhật Tự Quyền.",
    "counterTechniqueName": "Phục Thủ Đè Kẹp & Liên Hoàn Xung Quyền",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_02",
    "stances": [
      "Biên thân tam giác bộ"
    ],
    "hands": [
      "Phục Thủ",
      "Bàng Thủ",
      "Liên Hoàn Quyền"
    ],
    "coreKinh": "Liên châu pháo quyền, đòn trước vừa chạm đòn sau đã nối gót, không cho địch kịp thở.",
    "biomechanics": "Trục Tý Ngọ Tuyến liên tục được khóa chặt khiến đối phương không có khoảng trống tung cú đấm thứ hai.",
    "quiz": {
      "question": "Cách phá thế đấm 1-2 liên hoàn của đối phương trong Vịnh Xuân là gì?",
      "options": [
        "Lùi lại đợi đối phương đấm xong",
        "Chiếm lĩnh trục trung tâm ngay cú đấm đầu để khóa đường vào của cú đấm sau",
        "Né sang hai bên thật xa",
        "Đứng yên giơ 2 tay lên"
      ],
      "correctIndex": 1,
      "explanation": "Vịnh Xuân không đỡ từng đòn đơn lẻ mà dùng cấu trúc nêm chiếm lĩnh tim trục trung tâm, vô hiệu hóa đường phát lực của tay sau đối phương."
    }
  },
  {
    "id": "SCEN-005",
    "title": "Tình huống 5: Đòn bổ rìu bàn tay / đấm giã từ trên xuống đỉnh đầu",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương nhảy lên hoặc vung tay cao đấm bổ thẳng từ trên đỉnh đầu xuống huyệt Bách Hội.",
    "wingChunSolution": "Dùng Song Than Thủ / Thượng Bàng Thủ hình chữ V nâng bổng góc đón, xoay eo 45 độ đưa đầu ra khỏi đường bổ, thọc Chưởng vào cằm đối thủ.",
    "counterTechniqueName": "Thượng Bàng Thủ Hóa Giải Đòn Bổ Đỉnh Đầu",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_09",
    "stances": [
      "Khép gối kiềm dương",
      "Xoay trục 45°"
    ],
    "hands": [
      "Thượng Bàng Thủ",
      "Hạ Chưởng"
    ],
    "coreKinh": "Hư linh đỉnh kình, né trục phân giải ngoại lực.",
    "biomechanics": "Chuyển vector lực từ phương thẳng đứng sang phương xiên trượt khỏi cơ thể.",
    "quiz": {
      "question": "Khi đối phương tấn công từ trên cao bổ xuống đỉnh đầu, lỗi nguy hiểm nhất là gì?",
      "options": [
        "Ngẩng mặt lên nhìn trực tiếp vào đòn đánh",
        "Nâng tay lên đỡ",
        "Hạ thấp tấn",
        "Xoay hông"
      ],
      "correctIndex": 0,
      "explanation": "Ngẩng mặt lên sẽ phơi toàn bộ yết hầu, cằm và sống mũi vào quỹ đạo va chạm. Phải thu cằm, giữ trục thẳng và dùng góc nghiêng của cẳng tay dẫn lực."
    }
  },
  {
    "id": "SCEN-006",
    "title": "Tình huống 6: Đối phương lao vào tát vỗ hai mang tai (Song Phong Quán Nhĩ)",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương dang rộng 2 tay tát vòng cùng lúc vào 2 bên tai và thái dương nhằm gây chấn động màng nhĩ.",
    "wingChunSolution": "Hai tay mở Song Bàng Thủ hoặc Song Than Thủ từ trong bung ra ngoài theo nguyên lý mở cửa (Khai Môn), đánh dạt 2 tay địch, đạp cước vào bụng dưới.",
    "counterTechniqueName": "Song Thủ Khai Môn & Đan Điền Cước",
    "relatedFormId": "02-tam-kieu",
    "relatedTechCode": "TK_02",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn"
    ],
    "hands": [
      "Song Bàng Thủ",
      "Chính Cước"
    ],
    "coreKinh": "Nội môn phát xuất, ngoại môn hóa giải; trong đánh ra ngoài luôn có lợi thế đòn bẩy.",
    "biomechanics": "Hai tay phát động từ trục trung tâm bung ra ngoài có biên độ ngắn hơn nhiều so với vòng ôm của đối phương.",
    "quiz": {
      "question": "Tại sao đòn tát hai tay của đối phương lại dễ bị Vịnh Xuân bẻ gãy?",
      "options": [
        "Vì đối phương để lộ hoàn toàn trục trung lộ ngực và mặt",
        "Vì đối phương yếu hơn",
        "Vì đòn tát không đau",
        "Vì đối phương nhắm mắt"
      ],
      "correctIndex": 0,
      "explanation": "Khi dang 2 tay tát vòng, toàn bộ vùng ngực, mặt, yết hầu của đối thủ bị mở toang, tạo đường thẳng thênh thang cho đòn trung tuyến của ta kết liễu."
    }
  },
  {
    "id": "SCEN-007",
    "title": "Tình huống 7: Đòn xỉa ngón tay hoặc chọc mù mắt bất ngờ cự ly gần",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Nguy cấp",
    "opponentAction": "Đối phương phóng các đầu ngón tay nhọn nhắm thẳng vào hai mắt ở cự ly chỉ 30cm.",
    "wingChunSolution": "Hạ cằm giấu mắt sau vòm xương trán, tay đưa Vấn Thủ (Man Sao) chém chéo cổ tay đối phương, bước dồn mã thúc cùi chỏ vào xương ức.",
    "counterTechniqueName": "Vấn Thủ Triệt Tiêu Tiêu Thủ & Giáp Chiến Trỏ",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_07",
    "stances": [
      "Thu cằm",
      "Đoản mã"
    ],
    "hands": [
      "Vấn Thủ",
      "Thúc Trỏ"
    ],
    "coreKinh": "Mắt thấy tay đến, linh giác phản hồi trước thị giác.",
    "biomechanics": "Xương cẳng tay cứng cáp hơn các khớp ngón tay đối phương gấp nhiều lần khi va chạm góc nghiêng.",
    "quiz": {
      "question": "Phản xạ sinh tồn chuẩn xác nhất khi bị xỉa ngón tay vào mắt ở cự ly cực gần là gì?",
      "options": [
        "Chớp mắt và lùi lại",
        "Thu cằm cúi đầu nhẹ đưa trán ra che mắt kết hợp gạt tay",
        "Lấy 2 tay che kín mắt",
        "Nhắm mắt quay đầu bỏ chạy"
      ],
      "correctIndex": 1,
      "explanation": "Xương trán là phần xương cứng nhất hộp sọ. Cúi nhẹ đầu dùng trán làm khiên chắn sẽ làm gãy các ngón tay của kẻ tấn công."
    }
  },
  {
    "id": "SCEN-008",
    "title": "Tình huống 8: Đấm thốc ngược từ dưới lên cằm (Thượng Câu Quyền / Uppercut)",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương lách thấp người rồi tung cú đấm móc thốc ngược từ dưới lên điểm cằm.",
    "wingChunSolution": "Dùng Hạ Phục Thủ (Low Fook Sao) hoặc Thác Thủ ép cổ tay đối phương xuống dưới, gối ép hướng tâm chặn đường tiến, tay kia thúc cùi chỏ ngang mặt.",
    "counterTechniqueName": "Hạ Phục Thủ Chẹn Đấm Thốc & Hoành Trỏ",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_15",
    "stances": [
      "Kiềm dương tấn hẹp"
    ],
    "hands": [
      "Hạ Phục Thủ",
      "Hoành Cùi Chỏ"
    ],
    "coreKinh": "Đè đầu cưỡi cổ, khống chế nguồn phát lực ngay từ gốc khớp khuỷu.",
    "biomechanics": "Chẹn đòn đấm thốc ngay khi cánh tay đối phương chưa kịp duỗi thẳng đạt đỉnh kình lực.",
    "quiz": {
      "question": "Thời điểm tốt nhất để vô hiệu hóa một cú đấm móc từ dưới lên là khi nào?",
      "options": [
        "Khi đòn đấm đã gần chạm cằm",
        "Ngay khi nắm đấm vừa rời khỏi tầm hông đối phương",
        "Khi đối phương đã đấm xong",
        "Không thể vô hiệu hóa"
      ],
      "correctIndex": 1,
      "explanation": "Đòn uppercut chỉ có lực khi đi hết quỹ đạo gia tốc. Chẹn bắt cổ tay ngay khi vừa rời hông khiến đòn đánh bị triệt tiêu hoàn toàn."
    }
  },
  {
    "id": "SCEN-009",
    "title": "Tình huống 9: Đối phương đấm thẳng nhưng đột ngột biến thành đòn móc vòng",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương tung đấm thẳng nhử, khi thấy ta đưa tay đón thì lượn nắm đấm thành đòn móc vào mang tai.",
    "wingChunSolution": "Chuyển ngay từ Than Thủ sang Bàng Thủ (Biến Pháp Than Bàng Lạc Thể), bám dính lấy cổ tay địch (Niêm Thủ) rồi phóng Thung Kình hất văng đối thủ.",
    "counterTechniqueName": "Than Biến Bàng Thao Pháp & Thung Kình Phản Hồi",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_03",
    "stances": [
      "Chuyển mã"
    ],
    "hands": [
      "Than Thủ biến Bàng Thủ",
      "Thung Kình"
    ],
    "coreKinh": "Than Bàng tương sinh, quyền pháp lưu chuyển như nước chảy mây trôi.",
    "biomechanics": "Nguyên lý biến đổi linh hoạt của Niêm Thủ: tay dính tay, địch biến ta biến, không rời khớp.",
    "quiz": {
      "question": "Khẩu quyết 'Than biến Bàng' của Vịnh Xuân ứng dụng trong trường hợp nào?",
      "options": [
        "Khi đối phương đổi hướng lực từ thẳng sang vòng hoặc ép nặng lên tay ta",
        "Khi muốn bỏ chạy",
        "Khi tấn công từ xa",
        "Khi đối phương đứng yên"
      ],
      "correctIndex": 0,
      "explanation": "Khi lực của đối thủ đè nặng hoặc lách vòng qua Than Thủ, ta lập tức thả lỏng xoay cổ tay nâng cùi chỏ thành Bàng Thủ để hóa giải lực ép."
    }
  },
  {
    "id": "SCEN-010",
    "title": "Tình huống 10: Đối phương lao vào húc đầu (Headbutt) cự ly ôm sát",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Nguy cấp",
    "opponentAction": "Đối phương túm áo hoặc ghì sát người rồi giật đầu ra sau lấy đà húc mạnh đỉnh đầu vào mũi ta.",
    "wingChunSolution": "Hai bàn tay lập tức đặt thành Chưởng Chắn Cằm (Thác Cằm), đẩy ngược mặt đối phương lên trần nhà, đầu gối thúc vào hạ bộ kẻ địch.",
    "counterTechniqueName": "Thác Cằm Triệt Tiêu Húc Đầu & Thúc Gối",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_25",
    "stances": [
      "Hạ trọng tâm"
    ],
    "hands": [
      "Thác Cằm Chưởng",
      "Thúc Gối"
    ],
    "coreKinh": "Dĩ nhu chế cương, đầu địch mạnh thì bẻ góc cổ địch làm mất trục.",
    "biomechanics": "Đốt sống cổ không thể phát lực khi đầu bị đẩy ngửa ra sau quá 45 độ.",
    "quiz": {
      "question": "Cách khắc chế đòn húc đầu nguy hiểm ở cự ly giáp chiến là gì?",
      "options": [
        "Húc đầu ngược lại đối phương",
        "Đẩy ngửa cằm đối phương lên trên kết hợp tấn công hạ bàn",
        "Lấy trán mình đỡ đòn",
        "Bỏ tay ra ôm mặt"
      ],
      "correctIndex": 1,
      "explanation": "Khi cằm bị đẩy ngửa lên trần nhà, cơ cổ bị căng cứng hoàn toàn khiến đối phương mất thăng bằng và không thể phát lực húc đầu."
    }
  },
  {
    "id": "SCEN-011",
    "title": "Tình huống 11: Đấm thẳng tay trái khi đang thủ thế nghịch chân",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đấm thẳng tay trái khi đang thủ thế nghịch chân nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Tả Xung Quyền Nghịch Bộ, giữ vững trục Tý Ngọ Tuyến, dùng Than Thủ chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Tả Xung Quyền Nghịch Bộ",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_02",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Than Thủ",
      "Nhật Tự Quyền"
    ],
    "coreKinh": "Đoạt vị trung tuyến",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đấm thẳng tay trái khi đang thủ thế nghịch chân', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Tả Xung Quyền Nghịch Bộ bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Tả Xung Quyền Nghịch Bộ giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Đoạt vị trung tuyến mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-012",
    "title": "Tình huống 12: Đấm tạt mu bàn tay (Bích Quyền) nhắm gò má",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đấm tạt mu bàn tay (bích quyền) nhắm gò má nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Quát Thủ Hóa Giải Bích Quyền, giữ vững trục Tý Ngọ Tuyến, dùng Quát Thủ chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Quát Thủ Hóa Giải Bích Quyền",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_05",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Quát Thủ",
      "Chấn Thủy Chưởng"
    ],
    "coreKinh": "Hóa giải đòn quất mu tay",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đấm tạt mu bàn tay (bích quyền) nhắm gò má', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Quát Thủ Hóa Giải Bích Quyền bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Quát Thủ Hóa Giải Bích Quyền giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Hóa giải đòn quất mu tay mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-013",
    "title": "Tình huống 13: Đối phương tung 3 cú đấm liên tiếp không ngừng nghỉ",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đối phương tung 3 cú đấm liên tiếp không ngừng nghỉ nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Tam Giác Bộ & Liên Hoàn Xung Quyền, giữ vững trục Tý Ngọ Tuyến, dùng Bàng Thủ chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Tam Giác Bộ & Liên Hoàn Xung Quyền",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_05",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Bàng Thủ",
      "Liên Châu Quyền"
    ],
    "coreKinh": "Né trục và phản công liên hoàn",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đối phương tung 3 cú đấm liên tiếp không ngừng nghỉ', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Tam Giác Bộ & Liên Hoàn Xung Quyền bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Tam Giác Bộ & Liên Hoàn Xung Quyền giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Né trục và phản công liên hoàn mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-014",
    "title": "Tình huống 14: Đấm nhử hạ bàn rồi thốc mạnh lên mặt",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đấm nhử hạ bàn rồi thốc mạnh lên mặt nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Phục Thủ Đè Hạ & Tiêu Thủ Thượng Bàn, giữ vững trục Tý Ngọ Tuyến, dùng Phục Thủ chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Phục Thủ Đè Hạ & Tiêu Thủ Thượng Bàn",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_04",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Phục Thủ",
      "Tiêu Thủ"
    ],
    "coreKinh": "Thượng hạ tương ứng",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đấm nhử hạ bàn rồi thốc mạnh lên mặt', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Phục Thủ Đè Hạ & Tiêu Thủ Thượng Bàn bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Phục Thủ Đè Hạ & Tiêu Thủ Thượng Bàn giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Thượng hạ tương ứng mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-015",
    "title": "Tình huống 15: Đối phương cao hơn 20cm tung đòn đấm từ trên xuống",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đối phương cao hơn 20cm tung đòn đấm từ trên xuống nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Tiêu Chỉ Đâm Yết Hầu Cắt Tầm Đấm, giữ vững trục Tý Ngọ Tuyến, dùng Vấn Thủ chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Tiêu Chỉ Đâm Yết Hầu Cắt Tầm Đấm",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_02",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Vấn Thủ",
      "Tiêu Chỉ"
    ],
    "coreKinh": "Dĩ đoản chế trường",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đối phương cao hơn 20cm tung đòn đấm từ trên xuống', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Tiêu Chỉ Đâm Yết Hầu Cắt Tầm Đấm bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Tiêu Chỉ Đâm Yết Hầu Cắt Tầm Đấm giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Dĩ đoản chế trường mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-016",
    "title": "Tình huống 16: Đấm vòng đôi hai tay liên tục từ hai phía",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đấm vòng đôi hai tay liên tục từ hai phía nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Song Bàng Thủ Khóa Chặt Song Quyền, giữ vững trục Tý Ngọ Tuyến, dùng Song Bàng Thủ chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Song Bàng Thủ Khóa Chặt Song Quyền",
    "relatedFormId": "02-tam-kieu",
    "relatedTechCode": "TK_03",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Song Bàng Thủ"
    ],
    "coreKinh": "Đóng cửa trung môn",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đấm vòng đôi hai tay liên tục từ hai phía', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Song Bàng Thủ Khóa Chặt Song Quyền bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Song Bàng Thủ Khóa Chặt Song Quyền giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Đóng cửa trung môn mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-017",
    "title": "Tình huống 17: Đấm thẳng tay trước với tốc độ cực nhanh (Jab)",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đấm thẳng tay trước với tốc độ cực nhanh (jab) nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Thác Thủ Đón Jab & Đột Kích Thẳng, giữ vững trục Tý Ngọ Tuyến, dùng Thác Thủ chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Thác Thủ Đón Jab & Đột Kích Thẳng",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_03_1",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Thác Thủ",
      "Nhật Tự Quyền"
    ],
    "coreKinh": "Bạt nhẹ 3cm phản kích",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đấm thẳng tay trước với tốc độ cực nhanh (jab)', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Thác Thủ Đón Jab & Đột Kích Thẳng bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Thác Thủ Đón Jab & Đột Kích Thẳng giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Bạt nhẹ 3cm phản kích mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-018",
    "title": "Tình huống 18: Đấm xoay người 360 độ (Spinning Backfist)",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đấm xoay người 360 độ (spinning backfist) nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Lướt Bộ Nhập Nội Thúc Cùi Chỏ, giữ vững trục Tý Ngọ Tuyến, dùng Nhập Nội Thao Pháp chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Lướt Bộ Nhập Nội Thúc Cùi Chỏ",
    "relatedFormId": "07-108-tien-lui-doi",
    "relatedTechCode": "TLDOI_05",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Nhập Nội Thao Pháp",
      "Cùi Chỏ"
    ],
    "coreKinh": "Địch xoay ta áp sát lưng",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đấm xoay người 360 độ (spinning backfist)', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Lướt Bộ Nhập Nội Thúc Cùi Chỏ bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Lướt Bộ Nhập Nội Thúc Cùi Chỏ giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Địch xoay ta áp sát lưng mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-019",
    "title": "Tình huống 19: Đòn chém bàn tay (Trảm Thủ) vào động mạch cổ",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đòn chém bàn tay (trảm thủ) vào động mạch cổ nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Cao Than Thủ Nêm Chặn Trảm Thủ, giữ vững trục Tý Ngọ Tuyến, dùng Cao Than Thủ chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Cao Than Thủ Nêm Chặn Trảm Thủ",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_06_6",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Cao Than Thủ",
      "Quyền"
    ],
    "coreKinh": "Che chắn yết hầu và cổ",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đòn chém bàn tay (trảm thủ) vào động mạch cổ', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Cao Than Thủ Nêm Chặn Trảm Thủ bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Cao Than Thủ Nêm Chặn Trảm Thủ giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Che chắn yết hầu và cổ mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-020",
    "title": "Tình huống 20: Đối phương lao vào với tư thế đấm hoảng loạn kiểu cào cấu",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đối phương lao vào với tư thế đấm hoảng loạn kiểu cào cấu nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Trung Tuyến Trụ & Song Xung Quyền, giữ vững trục Tý Ngọ Tuyến, dùng Song Quyền Thẳng chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Trung Tuyến Trụ & Song Xung Quyền",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_01",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Song Quyền Thẳng"
    ],
    "coreKinh": "Đường thẳng đánh gãy đòn loạn",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đối phương lao vào với tư thế đấm hoảng loạn kiểu cào cấu', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Trung Tuyến Trụ & Song Xung Quyền bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Trung Tuyến Trụ & Song Xung Quyền giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Đường thẳng đánh gãy đòn loạn mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-021",
    "title": "Tình huống 21: Đấm lén từ góc 90 độ bên hông trái",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đấm lén từ góc 90 độ bên hông trái nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Chuyển Mã 90 Độ & Bàng Thủ Hóa Giải, giữ vững trục Tý Ngọ Tuyến, dùng Chuyển Mã chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Chuyển Mã 90 Độ & Bàng Thủ Hóa Giải",
    "relatedFormId": "02-tam-kieu",
    "relatedTechCode": "TK_01",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Chuyển Mã",
      "Bàng Thủ"
    ],
    "coreKinh": "Xoay trục đối diện nguy hiểm",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đấm lén từ góc 90 độ bên hông trái', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Chuyển Mã 90 Độ & Bàng Thủ Hóa Giải bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Chuyển Mã 90 Độ & Bàng Thủ Hóa Giải giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Xoay trục đối diện nguy hiểm mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-022",
    "title": "Tình huống 22: Đấm lén từ góc 90 độ bên hông phải",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đấm lén từ góc 90 độ bên hông phải nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Chuyển Mã 90 Độ Hữu & Than Thủ Đón Lực, giữ vững trục Tý Ngọ Tuyến, dùng Chuyển Mã chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Chuyển Mã 90 Độ Hữu & Than Thủ Đón Lực",
    "relatedFormId": "02-tam-kieu",
    "relatedTechCode": "TK_01",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Chuyển Mã",
      "Than Thủ"
    ],
    "coreKinh": "Không bao giờ để lưng quay về địch",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đấm lén từ góc 90 độ bên hông phải', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Chuyển Mã 90 Độ Hữu & Than Thủ Đón Lực bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Chuyển Mã 90 Độ Hữu & Than Thủ Đón Lực giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Không bao giờ để lưng quay về địch mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-023",
    "title": "Tình huống 23: Đối phương vừa bước lướt vừa đấm thẳng tầm xa",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đối phương vừa bước lướt vừa đấm thẳng tầm xa nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Tiến Bộ Triệt Cước & Xung Quyền Cắt Góc, giữ vững trục Tý Ngọ Tuyến, dùng Tiến Bộ chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Tiến Bộ Triệt Cước & Xung Quyền Cắt Góc",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_01",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Tiến Bộ",
      "Nhật Tự Quyền"
    ],
    "coreKinh": "Chân đạp cước tay phát kình",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đối phương vừa bước lướt vừa đấm thẳng tầm xa', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Tiến Bộ Triệt Cước & Xung Quyền Cắt Góc bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Tiến Bộ Triệt Cước & Xung Quyền Cắt Góc giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Chân đạp cước tay phát kình mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-024",
    "title": "Tình huống 24: Đấm móc tầm cực gần khi hai bên đang giằng co",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đấm móc tầm cực gần khi hai bên đang giằng co nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Nhập Cùi Chỏ Dựng Đứng (Thượng Trỏ), giữ vững trục Tý Ngọ Tuyến, dùng Cùi Chỏ Dựng Đứng chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Nhập Cùi Chỏ Dựng Đứng (Thượng Trỏ)",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_30",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Cùi Chỏ Dựng Đứng"
    ],
    "coreKinh": "Cự ly 10cm cùi chỏ là vua",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đấm móc tầm cực gần khi hai bên đang giằng co', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Nhập Cùi Chỏ Dựng Đứng (Thượng Trỏ) bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Nhập Cùi Chỏ Dựng Đứng (Thượng Trỏ) giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Cự ly 10cm cùi chỏ là vua mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-025",
    "title": "Tình huống 25: Đối phương cúi thấp người lao vào đấm vào cằm",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đối phương cúi thấp người lao vào đấm vào cằm nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Áp Thủ Đè Đầu & Thúc Đầu Gối, giữ vững trục Tý Ngọ Tuyến, dùng Áp Thủ chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Áp Thủ Đè Đầu & Thúc Đầu Gối",
    "relatedFormId": "07-108-tien-lui-doi",
    "relatedTechCode": "TLDOI_10",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Áp Thủ",
      "Thúc Gối"
    ],
    "coreKinh": "Đè nén trục phát động",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đối phương cúi thấp người lao vào đấm vào cằm', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Áp Thủ Đè Đầu & Thúc Đầu Gối bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Áp Thủ Đè Đầu & Thúc Đầu Gối giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Đè nén trục phát động mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-026",
    "title": "Tình huống 26: Đấm thẳng kết hợp giậm chân dọa nạt",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đấm thẳng kết hợp giậm chân dọa nạt nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Bất Động Kiềm Dương Tấn & Độc Xoa Chưởng, giữ vững trục Tý Ngọ Tuyến, dùng Kiềm Dương Tấn chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Bất Động Kiềm Dương Tấn & Độc Xoa Chưởng",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_01",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Kiềm Dương Tấn",
      "Chưởng"
    ],
    "coreKinh": "Tâm tĩnh như nước",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đấm thẳng kết hợp giậm chân dọa nạt', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Bất Động Kiềm Dương Tấn & Độc Xoa Chưởng bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Bất Động Kiềm Dương Tấn & Độc Xoa Chưởng giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Tâm tĩnh như nước mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-027",
    "title": "Tình huống 27: Đòn vồ hai tay vào mắt kiểu ưng trảo",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đòn vồ hai tay vào mắt kiểu ưng trảo nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Khẩu Thủ Bẻ Khớp Cổ Tay Ưng Trảo, giữ vững trục Tý Ngọ Tuyến, dùng Khẩu Thủ Xoay Cổ Tay chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Khẩu Thủ Bẻ Khớp Cổ Tay Ưng Trảo",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_02_3",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Khẩu Thủ Xoay Cổ Tay"
    ],
    "coreKinh": "Xoay cổ tay thoát trảo",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đòn vồ hai tay vào mắt kiểu ưng trảo', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Khẩu Thủ Bẻ Khớp Cổ Tay Ưng Trảo bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Khẩu Thủ Bẻ Khớp Cổ Tay Ưng Trảo giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Xoay cổ tay thoát trảo mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-028",
    "title": "Tình huống 28: Đấm móc vòng rộng kiểu búa tạ của dân thể hình",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đấm móc vòng rộng kiểu búa tạ của dân thể hình nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Hạ Trọng Tâm Nêm Bàng Thủ & Đấm Sườn, giữ vững trục Tý Ngọ Tuyến, dùng Bàng Thủ chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Hạ Trọng Tâm Nêm Bàng Thủ & Đấm Sườn",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_21",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Bàng Thủ",
      "Đấm Sườn"
    ],
    "coreKinh": "Lực nặng mượn đà trượt",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đấm móc vòng rộng kiểu búa tạ của dân thể hình', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Hạ Trọng Tâm Nêm Bàng Thủ & Đấm Sườn bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Hạ Trọng Tâm Nêm Bàng Thủ & Đấm Sườn giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Lực nặng mượn đà trượt mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-029",
    "title": "Tình huống 29: Đấm phản kích khi ta vừa xuất chiêu hụt",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đấm phản kích khi ta vừa xuất chiêu hụt nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Thu Quyền Thung Kình Hộ Thân, giữ vững trục Tý Ngọ Tuyến, dùng Thu Quyền chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Thu Quyền Thung Kình Hộ Thân",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_02_4",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Thu Quyền",
      "Thung Kình"
    ],
    "coreKinh": "Ra đòn và thu đòn cùng một nhịp",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đấm phản kích khi ta vừa xuất chiêu hụt', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Thu Quyền Thung Kình Hộ Thân bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Thu Quyền Thung Kình Hộ Thân giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Ra đòn và thu đòn cùng một nhịp mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-030",
    "title": "Tình huống 30: Đối phương vung nắm đấm sắt hoặc vật cứng vào mặt",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đối phương vung nắm đấm sắt hoặc vật cứng vào mặt nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Tránh Trục Tý Ngọ & Bạt Cổ Tay Tước Vũ Khí, giữ vững trục Tý Ngọ Tuyến, dùng Lệch Trục chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Tránh Trục Tý Ngọ & Bạt Cổ Tay Tước Vũ Khí",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_10",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Lệch Trục",
      "Cầm Nã"
    ],
    "coreKinh": "Tránh đầu nhọn né đường sát thương",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đối phương vung nắm đấm sắt hoặc vật cứng vào mặt', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Tránh Trục Tý Ngọ & Bạt Cổ Tay Tước Vũ Khí bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Tránh Trục Tý Ngọ & Bạt Cổ Tay Tước Vũ Khí giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Tránh đầu nhọn né đường sát thương mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-031",
    "title": "Tình huống 31: Đấm vòng từ phía sau khi ta chưa kịp quay lại",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đấm vòng từ phía sau khi ta chưa kịp quay lại nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Hạ Tấn Xoay Gót Chân Quét Trụ Sau, giữ vững trục Tý Ngọ Tuyến, dùng Hậu Tảo Cước chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Hạ Tấn Xoay Gót Chân Quét Trụ Sau",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_15",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Hậu Tảo Cước"
    ],
    "coreKinh": "Linh giác chuyển bộ sau lưng",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đấm vòng từ phía sau khi ta chưa kịp quay lại', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Hạ Tấn Xoay Gót Chân Quét Trụ Sau bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Hạ Tấn Xoay Gót Chân Quét Trụ Sau giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Linh giác chuyển bộ sau lưng mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-032",
    "title": "Tình huống 32: Đấm nhử vào mặt để bắt chân",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đấm nhử vào mặt để bắt chân nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Rút Chân Khép Gối Kiềm Dương & Song Chưởng, giữ vững trục Tý Ngọ Tuyến, dùng Khép Gối chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Rút Chân Khép Gối Kiềm Dương & Song Chưởng",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_12",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Khép Gối",
      "Song Chưởng"
    ],
    "coreKinh": "Hạ bàn kiên cố như bàn thạch",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đấm nhử vào mặt để bắt chân', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Rút Chân Khép Gối Kiềm Dương & Song Chưởng bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Rút Chân Khép Gối Kiềm Dương & Song Chưởng giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Hạ bàn kiên cố như bàn thạch mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-033",
    "title": "Tình huống 33: Đấm thẳng liên tiếp đổi tay trái phải liên tục",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đấm thẳng liên tiếp đổi tay trái phải liên tục nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Liên Hoàn Bàng Than Thay Đổi Theo Nhịp, giữ vững trục Tý Ngọ Tuyến, dùng Bàng Than Luân Phiên chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Liên Hoàn Bàng Than Thay Đổi Theo Nhịp",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_03_2",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Bàng Than Luân Phiên"
    ],
    "coreKinh": "Tay này đón tay kia đánh",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đấm thẳng liên tiếp đổi tay trái phải liên tục', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Liên Hoàn Bàng Than Thay Đổi Theo Nhịp bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Liên Hoàn Bàng Than Thay Đổi Theo Nhịp giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Tay này đón tay kia đánh mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-034",
    "title": "Tình huống 34: Đối phương dùng đòn chém cùi chỏ ngang mặt",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đối phương dùng đòn chém cùi chỏ ngang mặt nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Cao Phục Thủ Chẹn Bắp Tay Ngăn Khớp Trỏ, giữ vững trục Tý Ngọ Tuyến, dùng Phục Thủ Chẹn Khớp chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Cao Phục Thủ Chẹn Bắp Tay Ngăn Khớp Trỏ",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_31_1",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Phục Thủ Chẹn Khớp"
    ],
    "coreKinh": "Chẹn ở bắp tay trên cùi chỏ mất lực",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đối phương dùng đòn chém cùi chỏ ngang mặt', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Cao Phục Thủ Chẹn Bắp Tay Ngăn Khớp Trỏ bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Cao Phục Thủ Chẹn Bắp Tay Ngăn Khớp Trỏ giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Chẹn ở bắp tay trên cùi chỏ mất lực mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-035",
    "title": "Tình huống 35: Đòn chỏ cắm thẳng từ trên trán xuống",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đòn chỏ cắm thẳng từ trên trán xuống nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Song Thủ Nâng Khớp Nách Đối Phương, giữ vững trục Tý Ngọ Tuyến, dùng Song Thủ Nâng chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Song Thủ Nâng Khớp Nách Đối Phương",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_14",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Song Thủ Nâng"
    ],
    "coreKinh": "Đội nách phá đòn cắm",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đòn chỏ cắm thẳng từ trên trán xuống', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Song Thủ Nâng Khớp Nách Đối Phương bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Song Thủ Nâng Khớp Nách Đối Phương giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Đội nách phá đòn cắm mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-036",
    "title": "Tình huống 36: Đấm móc hàm trong góc cầu thang hẹp",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đấm móc hàm trong góc cầu thang hẹp nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Ép Sườn Xoay Trục Đấm Thẳng Ống Kính, giữ vững trục Tý Ngọ Tuyến, dùng Nhật Tự Quyền chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Ép Sườn Xoay Trục Đấm Thẳng Ống Kính",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_02_1",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Nhật Tự Quyền"
    ],
    "coreKinh": "Không gian hẹp đòn thẳng vô địch",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đấm móc hàm trong góc cầu thang hẹp', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Ép Sườn Xoay Trục Đấm Thẳng Ống Kính bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Ép Sườn Xoay Trục Đấm Thẳng Ống Kính giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Không gian hẹp đòn thẳng vô địch mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-037",
    "title": "Tình huống 37: Đối phương lao vào với thế đấm bay (Superman Punch)",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đối phương lao vào với thế đấm bay (superman punch) nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Lách Bộ Biên Thân Đạp Gãy Trụ Chân Rơi, giữ vững trục Tý Ngọ Tuyến, dùng Triệt Cước Rơi chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Lách Bộ Biên Thân Đạp Gãy Trụ Chân Rơi",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_08",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Triệt Cước Rơi"
    ],
    "coreKinh": "Địch trên không mất điểm tựa",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đối phương lao vào với thế đấm bay (superman punch)', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Lách Bộ Biên Thân Đạp Gãy Trụ Chân Rơi bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Lách Bộ Biên Thân Đạp Gãy Trụ Chân Rơi giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Địch trên không mất điểm tựa mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-038",
    "title": "Tình huống 38: Đấm thẳng kèm nhổ nước bọt làm mù hướng nhìn",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đấm thẳng kèm nhổ nước bọt làm mù hướng nhìn nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Thu Cằm Khép Mắt Nhẹ & Cảm Ứng Niêm Thủ, giữ vững trục Tý Ngọ Tuyến, dùng Thính Kình chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Thu Cằm Khép Mắt Nhẹ & Cảm Ứng Niêm Thủ",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_01_1",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Thính Kình"
    ],
    "coreKinh": "Dùng xúc giác thay cho thị giác",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đấm thẳng kèm nhổ nước bọt làm mù hướng nhìn', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Thu Cằm Khép Mắt Nhẹ & Cảm Ứng Niêm Thủ bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Thu Cằm Khép Mắt Nhẹ & Cảm Ứng Niêm Thủ giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Dùng xúc giác thay cho thị giác mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-039",
    "title": "Tình huống 39: Đấm thốc ngược hai tay cùng lúc",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đấm thốc ngược hai tay cùng lúc nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Song Hạ Bàng Thủ Đè Hai Cổ Tay, giữ vững trục Tý Ngọ Tuyến, dùng Song Hạ Bàng chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Song Hạ Bàng Thủ Đè Hai Cổ Tay",
    "relatedFormId": "02-tam-kieu",
    "relatedTechCode": "TK_04",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Song Hạ Bàng"
    ],
    "coreKinh": "Khóa kép trung hạ lộ",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đấm thốc ngược hai tay cùng lúc', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Song Hạ Bàng Thủ Đè Hai Cổ Tay bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Song Hạ Bàng Thủ Đè Hai Cổ Tay giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Khóa kép trung hạ lộ mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-040",
    "title": "Tình huống 40: Đòn đấm cuối cùng dồn toàn lực kết liễu",
    "category": "Thượng Bàn (Đầu/Mặt)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương bất ngờ triển khai tình huống: đòn đấm cuối cùng dồn toàn lực kết liễu nhằm vào vùng đầu mặt.",
    "wingChunSolution": "Áp dụng thế võ Dẫn Lực Về Không & Phát Thốn Kình Đoạt Mệnh, giữ vững trục Tý Ngọ Tuyến, dùng Thốn Kình 1 Tấc chuyển hóa lực công kích và phản đòn ngay lập tức.",
    "counterTechniqueName": "Dẫn Lực Về Không & Phát Thốn Kình Đoạt Mệnh",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_70",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn"
    ],
    "hands": [
      "Thốn Kình 1 Tấc"
    ],
    "coreKinh": "Một tấc phát lực rung chuyển phủ tạng",
    "biomechanics": "Kiểm soát đường trung tuyến, tối ưu hóa thời gian phản xạ dưới 0.2 giây nhờ cấu trúc nêm bảo vệ.",
    "quiz": {
      "question": "Khi gặp tình huống 'đòn đấm cuối cùng dồn toàn lực kết liễu', nguyên lý Vịnh Xuân cốt lõi nào cần ưu tiên?",
      "options": [
        "Triển khai Dẫn Lực Về Không & Phát Thốn Kình Đoạt Mệnh bảo toàn trung lộ",
        "Lùi bước bỏ chạy thật nhanh",
        "Gồng cứng toàn thân chịu lực",
        "Nhắm mắt cúi gập người"
      ],
      "correctIndex": 0,
      "explanation": "Áp dụng Dẫn Lực Về Không & Phát Thốn Kình Đoạt Mệnh giúp chuyển hóa lực tấn công của đối thủ theo nguyên lý Một tấc phát lực rung chuyển phủ tạng mà không tốn sức đối kháng trực diện."
    }
  },
  {
    "id": "SCEN-041",
    "title": "Tình huống 41: Đấm thẳng mỏ ác (Huyệt Đản Trung)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đấm thẳng mỏ ác (huyệt đản trung) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Hạ Than Thủ & Đan Điền Chưởng, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Hạ Than Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Hạ Than Thủ & Đan Điền Chưởng",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_42_1",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Hạ Than Thủ",
      "Chưởng Đan Điền"
    ],
    "coreKinh": "Mỏ ác là huyệt tử, khép chỏ bảo vệ",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đấm thẳng mỏ ác (huyệt đản trung)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-042",
    "title": "Tình huống 42: Đấm móc sườn trái làm tổn thương lách",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đấm móc sườn trái làm tổn thương lách hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Hạ Bàng Thủ Đè Đòn Móc Sườn, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Hạ Bàng Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Hạ Bàng Thủ Đè Đòn Móc Sườn",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_42_2",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Hạ Bàng Thủ",
      "Chấn Thủy Chưởng"
    ],
    "coreKinh": "Hạ Bàng dốc 45 độ làm trượt đòn sườn",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đấm móc sườn trái làm tổn thương lách', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-043",
    "title": "Tình huống 43: Đấm móc sườn phải làm tổn thương gan",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đấm móc sườn phải làm tổn thương gan hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Lan Thủ Chặn Sườn & Đột Kích Thẳng, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Lan Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Lan Thủ Chặn Sườn & Đột Kích Thẳng",
    "relatedFormId": "02-tam-kieu",
    "relatedTechCode": "TK_04",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Lan Thủ",
      "Nhật Tự Quyền"
    ],
    "coreKinh": "Lan thủ gạt ngang khóa chặt góc sườn",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đấm móc sườn phải làm tổn thương gan', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-044",
    "title": "Tình huống 44: Thúc cùi chỏ ngang tầm ngực ở cự ly 15cm",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: thúc cùi chỏ ngang tầm ngực ở cự ly 15cm hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Phục Thủ Chẹn Khớp Nách Đối Phương, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Phục Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Phục Thủ Chẹn Khớp Nách Đối Phương",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_04_4",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Phục Thủ"
    ],
    "coreKinh": "Phục thủ ép gốc khớp triệt tiêu cùi chỏ",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'thúc cùi chỏ ngang tầm ngực ở cự ly 15cm', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-045",
    "title": "Tình huống 45: Dồn hai tay đẩy mạnh vào ngực làm ngã ngửa",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: dồn hai tay đẩy mạnh vào ngực làm ngã ngửa hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Song Chưởng Hóa Thôi Sơn & Nhập Nội, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Song Chưởng triệt tiêu lực đánh.",
    "counterTechniqueName": "Song Chưởng Hóa Thôi Sơn & Nhập Nội",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_18",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Song Chưởng",
      "Nhập Nội"
    ],
    "coreKinh": "Mượn lực đẩy của địch xoay trục nhập nội",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'dồn hai tay đẩy mạnh vào ngực làm ngã ngửa', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-046",
    "title": "Tình huống 46: Đấm thốc bụng dưới tầm huyệt Khí Hải",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đấm thốc bụng dưới tầm huyệt khí hải hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Khép Cùi Chỏ Hạ Thấp & Chưởng Hạ Bàn, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Hạ Chưởng triệt tiêu lực đánh.",
    "counterTechniqueName": "Khép Cùi Chỏ Hạ Thấp & Chưởng Hạ Bàn",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_01_1",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Hạ Chưởng"
    ],
    "coreKinh": "Hai cùi chỏ khép chặt bảo vệ đan điền",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đấm thốc bụng dưới tầm huyệt khí hải', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-047",
    "title": "Tình huống 47: Chưởng bạt mạnh vào chấn thủy từ góc nghiêng",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: chưởng bạt mạnh vào chấn thủy từ góc nghiêng hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Tả Hữu Lan Thủ Hóa Giải Đòn Bạt, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Lan Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Tả Hữu Lan Thủ Hóa Giải Đòn Bạt",
    "relatedFormId": "02-tam-kieu",
    "relatedTechCode": "TK_05",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Lan Thủ"
    ],
    "coreKinh": "Lan thủ hóa giải đòn bạt góc ngang",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'chưởng bạt mạnh vào chấn thủy từ góc nghiêng', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-048",
    "title": "Tình huống 48: Đối phương dùng hai tay bóp nén lồng ngực",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đối phương dùng hai tay bóp nén lồng ngực hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Mở Song Bàng Thủ Đột Phá Từ Trong Ra, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Song Bàng Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Mở Song Bàng Thủ Đột Phá Từ Trong Ra",
    "relatedFormId": "02-tam-kieu",
    "relatedTechCode": "TK_03",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Song Bàng Thủ"
    ],
    "coreKinh": "Bung nén từ trong ra ngoài phá vỡ gọng kìm",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đối phương dùng hai tay bóp nén lồng ngực', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-049",
    "title": "Tình huống 49: Đấm thẳng liên tục vào vùng tim",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đấm thẳng liên tục vào vùng tim hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Liên Hoàn Bàng Thủ & Nhật Tự Quyền Phản Kích, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Bàng Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Liên Hoàn Bàng Thủ & Nhật Tự Quyền Phản Kích",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_05",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Bàng Thủ",
      "Nhật Tự Quyền"
    ],
    "coreKinh": "Bảo vệ khoang tim bằng góc nêm cùi chỏ",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đấm thẳng liên tục vào vùng tim', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-050",
    "title": "Tình huống 50: Thúc trỏ cắm chéo từ trên xuống ngực",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: thúc trỏ cắm chéo từ trên xuống ngực hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Thượng Phục Thủ Chẹn Tay Địch, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Thượng Phục Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Thượng Phục Thủ Chẹn Tay Địch",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_15",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Thượng Phục Thủ"
    ],
    "coreKinh": "Nâng góc đón làm chệch hướng cắm",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'thúc trỏ cắm chéo từ trên xuống ngực', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-051",
    "title": "Tình huống 51: Đấm thẳng mỏ ác (Huyệt Đản Trung) (Biến thể 2)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đấm thẳng mỏ ác (huyệt đản trung) (biến thể 2) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Hạ Than Thủ & Đan Điền Chưởng, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Hạ Than Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Hạ Than Thủ & Đan Điền Chưởng",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_42_1",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Hạ Than Thủ",
      "Chưởng Đan Điền"
    ],
    "coreKinh": "Mỏ ác là huyệt tử, khép chỏ bảo vệ",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đấm thẳng mỏ ác (huyệt đản trung) (biến thể 2)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-052",
    "title": "Tình huống 52: Đấm móc sườn trái làm tổn thương lách (Biến thể 2)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đấm móc sườn trái làm tổn thương lách (biến thể 2) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Hạ Bàng Thủ Đè Đòn Móc Sườn, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Hạ Bàng Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Hạ Bàng Thủ Đè Đòn Móc Sườn",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_42_2",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Hạ Bàng Thủ",
      "Chấn Thủy Chưởng"
    ],
    "coreKinh": "Hạ Bàng dốc 45 độ làm trượt đòn sườn",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đấm móc sườn trái làm tổn thương lách (biến thể 2)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-053",
    "title": "Tình huống 53: Đấm móc sườn phải làm tổn thương gan (Biến thể 2)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đấm móc sườn phải làm tổn thương gan (biến thể 2) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Lan Thủ Chặn Sườn & Đột Kích Thẳng, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Lan Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Lan Thủ Chặn Sườn & Đột Kích Thẳng",
    "relatedFormId": "02-tam-kieu",
    "relatedTechCode": "TK_04",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Lan Thủ",
      "Nhật Tự Quyền"
    ],
    "coreKinh": "Lan thủ gạt ngang khóa chặt góc sườn",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đấm móc sườn phải làm tổn thương gan (biến thể 2)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-054",
    "title": "Tình huống 54: Thúc cùi chỏ ngang tầm ngực ở cự ly 15cm (Biến thể 2)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: thúc cùi chỏ ngang tầm ngực ở cự ly 15cm (biến thể 2) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Phục Thủ Chẹn Khớp Nách Đối Phương, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Phục Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Phục Thủ Chẹn Khớp Nách Đối Phương",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_04_4",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Phục Thủ"
    ],
    "coreKinh": "Phục thủ ép gốc khớp triệt tiêu cùi chỏ",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'thúc cùi chỏ ngang tầm ngực ở cự ly 15cm (biến thể 2)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-055",
    "title": "Tình huống 55: Dồn hai tay đẩy mạnh vào ngực làm ngã ngửa (Biến thể 2)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: dồn hai tay đẩy mạnh vào ngực làm ngã ngửa (biến thể 2) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Song Chưởng Hóa Thôi Sơn & Nhập Nội, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Song Chưởng triệt tiêu lực đánh.",
    "counterTechniqueName": "Song Chưởng Hóa Thôi Sơn & Nhập Nội",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_18",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Song Chưởng",
      "Nhập Nội"
    ],
    "coreKinh": "Mượn lực đẩy của địch xoay trục nhập nội",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'dồn hai tay đẩy mạnh vào ngực làm ngã ngửa (biến thể 2)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-056",
    "title": "Tình huống 56: Đấm thốc bụng dưới tầm huyệt Khí Hải (Biến thể 2)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đấm thốc bụng dưới tầm huyệt khí hải (biến thể 2) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Khép Cùi Chỏ Hạ Thấp & Chưởng Hạ Bàn, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Hạ Chưởng triệt tiêu lực đánh.",
    "counterTechniqueName": "Khép Cùi Chỏ Hạ Thấp & Chưởng Hạ Bàn",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_01_1",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Hạ Chưởng"
    ],
    "coreKinh": "Hai cùi chỏ khép chặt bảo vệ đan điền",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đấm thốc bụng dưới tầm huyệt khí hải (biến thể 2)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-057",
    "title": "Tình huống 57: Chưởng bạt mạnh vào chấn thủy từ góc nghiêng (Biến thể 2)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: chưởng bạt mạnh vào chấn thủy từ góc nghiêng (biến thể 2) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Tả Hữu Lan Thủ Hóa Giải Đòn Bạt, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Lan Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Tả Hữu Lan Thủ Hóa Giải Đòn Bạt",
    "relatedFormId": "02-tam-kieu",
    "relatedTechCode": "TK_05",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Lan Thủ"
    ],
    "coreKinh": "Lan thủ hóa giải đòn bạt góc ngang",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'chưởng bạt mạnh vào chấn thủy từ góc nghiêng (biến thể 2)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-058",
    "title": "Tình huống 58: Đối phương dùng hai tay bóp nén lồng ngực (Biến thể 2)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đối phương dùng hai tay bóp nén lồng ngực (biến thể 2) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Mở Song Bàng Thủ Đột Phá Từ Trong Ra, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Song Bàng Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Mở Song Bàng Thủ Đột Phá Từ Trong Ra",
    "relatedFormId": "02-tam-kieu",
    "relatedTechCode": "TK_03",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Song Bàng Thủ"
    ],
    "coreKinh": "Bung nén từ trong ra ngoài phá vỡ gọng kìm",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đối phương dùng hai tay bóp nén lồng ngực (biến thể 2)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-059",
    "title": "Tình huống 59: Đấm thẳng liên tục vào vùng tim (Biến thể 2)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đấm thẳng liên tục vào vùng tim (biến thể 2) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Liên Hoàn Bàng Thủ & Nhật Tự Quyền Phản Kích, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Bàng Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Liên Hoàn Bàng Thủ & Nhật Tự Quyền Phản Kích",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_05",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Bàng Thủ",
      "Nhật Tự Quyền"
    ],
    "coreKinh": "Bảo vệ khoang tim bằng góc nêm cùi chỏ",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đấm thẳng liên tục vào vùng tim (biến thể 2)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-060",
    "title": "Tình huống 60: Thúc trỏ cắm chéo từ trên xuống ngực (Biến thể 2)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: thúc trỏ cắm chéo từ trên xuống ngực (biến thể 2) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Thượng Phục Thủ Chẹn Tay Địch, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Thượng Phục Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Thượng Phục Thủ Chẹn Tay Địch",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_15",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Thượng Phục Thủ"
    ],
    "coreKinh": "Nâng góc đón làm chệch hướng cắm",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'thúc trỏ cắm chéo từ trên xuống ngực (biến thể 2)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-061",
    "title": "Tình huống 61: Đấm thẳng mỏ ác (Huyệt Đản Trung) (Biến thể 3)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đấm thẳng mỏ ác (huyệt đản trung) (biến thể 3) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Hạ Than Thủ & Đan Điền Chưởng, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Hạ Than Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Hạ Than Thủ & Đan Điền Chưởng",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_42_1",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Hạ Than Thủ",
      "Chưởng Đan Điền"
    ],
    "coreKinh": "Mỏ ác là huyệt tử, khép chỏ bảo vệ",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đấm thẳng mỏ ác (huyệt đản trung) (biến thể 3)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-062",
    "title": "Tình huống 62: Đấm móc sườn trái làm tổn thương lách (Biến thể 3)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đấm móc sườn trái làm tổn thương lách (biến thể 3) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Hạ Bàng Thủ Đè Đòn Móc Sườn, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Hạ Bàng Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Hạ Bàng Thủ Đè Đòn Móc Sườn",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_42_2",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Hạ Bàng Thủ",
      "Chấn Thủy Chưởng"
    ],
    "coreKinh": "Hạ Bàng dốc 45 độ làm trượt đòn sườn",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đấm móc sườn trái làm tổn thương lách (biến thể 3)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-063",
    "title": "Tình huống 63: Đấm móc sườn phải làm tổn thương gan (Biến thể 3)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đấm móc sườn phải làm tổn thương gan (biến thể 3) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Lan Thủ Chặn Sườn & Đột Kích Thẳng, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Lan Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Lan Thủ Chặn Sườn & Đột Kích Thẳng",
    "relatedFormId": "02-tam-kieu",
    "relatedTechCode": "TK_04",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Lan Thủ",
      "Nhật Tự Quyền"
    ],
    "coreKinh": "Lan thủ gạt ngang khóa chặt góc sườn",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đấm móc sườn phải làm tổn thương gan (biến thể 3)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-064",
    "title": "Tình huống 64: Thúc cùi chỏ ngang tầm ngực ở cự ly 15cm (Biến thể 3)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: thúc cùi chỏ ngang tầm ngực ở cự ly 15cm (biến thể 3) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Phục Thủ Chẹn Khớp Nách Đối Phương, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Phục Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Phục Thủ Chẹn Khớp Nách Đối Phương",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_04_4",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Phục Thủ"
    ],
    "coreKinh": "Phục thủ ép gốc khớp triệt tiêu cùi chỏ",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'thúc cùi chỏ ngang tầm ngực ở cự ly 15cm (biến thể 3)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-065",
    "title": "Tình huống 65: Dồn hai tay đẩy mạnh vào ngực làm ngã ngửa (Biến thể 3)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: dồn hai tay đẩy mạnh vào ngực làm ngã ngửa (biến thể 3) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Song Chưởng Hóa Thôi Sơn & Nhập Nội, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Song Chưởng triệt tiêu lực đánh.",
    "counterTechniqueName": "Song Chưởng Hóa Thôi Sơn & Nhập Nội",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_18",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Song Chưởng",
      "Nhập Nội"
    ],
    "coreKinh": "Mượn lực đẩy của địch xoay trục nhập nội",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'dồn hai tay đẩy mạnh vào ngực làm ngã ngửa (biến thể 3)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-066",
    "title": "Tình huống 66: Đấm thốc bụng dưới tầm huyệt Khí Hải (Biến thể 3)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đấm thốc bụng dưới tầm huyệt khí hải (biến thể 3) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Khép Cùi Chỏ Hạ Thấp & Chưởng Hạ Bàn, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Hạ Chưởng triệt tiêu lực đánh.",
    "counterTechniqueName": "Khép Cùi Chỏ Hạ Thấp & Chưởng Hạ Bàn",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_01_1",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Hạ Chưởng"
    ],
    "coreKinh": "Hai cùi chỏ khép chặt bảo vệ đan điền",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đấm thốc bụng dưới tầm huyệt khí hải (biến thể 3)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-067",
    "title": "Tình huống 67: Chưởng bạt mạnh vào chấn thủy từ góc nghiêng (Biến thể 3)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: chưởng bạt mạnh vào chấn thủy từ góc nghiêng (biến thể 3) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Tả Hữu Lan Thủ Hóa Giải Đòn Bạt, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Lan Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Tả Hữu Lan Thủ Hóa Giải Đòn Bạt",
    "relatedFormId": "02-tam-kieu",
    "relatedTechCode": "TK_05",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Lan Thủ"
    ],
    "coreKinh": "Lan thủ hóa giải đòn bạt góc ngang",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'chưởng bạt mạnh vào chấn thủy từ góc nghiêng (biến thể 3)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-068",
    "title": "Tình huống 68: Đối phương dùng hai tay bóp nén lồng ngực (Biến thể 3)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đối phương dùng hai tay bóp nén lồng ngực (biến thể 3) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Mở Song Bàng Thủ Đột Phá Từ Trong Ra, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Song Bàng Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Mở Song Bàng Thủ Đột Phá Từ Trong Ra",
    "relatedFormId": "02-tam-kieu",
    "relatedTechCode": "TK_03",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Song Bàng Thủ"
    ],
    "coreKinh": "Bung nén từ trong ra ngoài phá vỡ gọng kìm",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đối phương dùng hai tay bóp nén lồng ngực (biến thể 3)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-069",
    "title": "Tình huống 69: Đấm thẳng liên tục vào vùng tim (Biến thể 3)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đấm thẳng liên tục vào vùng tim (biến thể 3) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Liên Hoàn Bàng Thủ & Nhật Tự Quyền Phản Kích, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Bàng Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Liên Hoàn Bàng Thủ & Nhật Tự Quyền Phản Kích",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_05",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Bàng Thủ",
      "Nhật Tự Quyền"
    ],
    "coreKinh": "Bảo vệ khoang tim bằng góc nêm cùi chỏ",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đấm thẳng liên tục vào vùng tim (biến thể 3)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-070",
    "title": "Tình huống 70: Thúc trỏ cắm chéo từ trên xuống ngực (Biến thể 3)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: thúc trỏ cắm chéo từ trên xuống ngực (biến thể 3) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Thượng Phục Thủ Chẹn Tay Địch, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Thượng Phục Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Thượng Phục Thủ Chẹn Tay Địch",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_15",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Thượng Phục Thủ"
    ],
    "coreKinh": "Nâng góc đón làm chệch hướng cắm",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'thúc trỏ cắm chéo từ trên xuống ngực (biến thể 3)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-071",
    "title": "Tình huống 71: Đấm thẳng mỏ ác (Huyệt Đản Trung) (Biến thể 4)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đấm thẳng mỏ ác (huyệt đản trung) (biến thể 4) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Hạ Than Thủ & Đan Điền Chưởng, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Hạ Than Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Hạ Than Thủ & Đan Điền Chưởng",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_42_1",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Hạ Than Thủ",
      "Chưởng Đan Điền"
    ],
    "coreKinh": "Mỏ ác là huyệt tử, khép chỏ bảo vệ",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đấm thẳng mỏ ác (huyệt đản trung) (biến thể 4)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-072",
    "title": "Tình huống 72: Đấm móc sườn trái làm tổn thương lách (Biến thể 4)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đấm móc sườn trái làm tổn thương lách (biến thể 4) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Hạ Bàng Thủ Đè Đòn Móc Sườn, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Hạ Bàng Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Hạ Bàng Thủ Đè Đòn Móc Sườn",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_42_2",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Hạ Bàng Thủ",
      "Chấn Thủy Chưởng"
    ],
    "coreKinh": "Hạ Bàng dốc 45 độ làm trượt đòn sườn",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đấm móc sườn trái làm tổn thương lách (biến thể 4)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-073",
    "title": "Tình huống 73: Đấm móc sườn phải làm tổn thương gan (Biến thể 4)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đấm móc sườn phải làm tổn thương gan (biến thể 4) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Lan Thủ Chặn Sườn & Đột Kích Thẳng, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Lan Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Lan Thủ Chặn Sườn & Đột Kích Thẳng",
    "relatedFormId": "02-tam-kieu",
    "relatedTechCode": "TK_04",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Lan Thủ",
      "Nhật Tự Quyền"
    ],
    "coreKinh": "Lan thủ gạt ngang khóa chặt góc sườn",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đấm móc sườn phải làm tổn thương gan (biến thể 4)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-074",
    "title": "Tình huống 74: Thúc cùi chỏ ngang tầm ngực ở cự ly 15cm (Biến thể 4)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: thúc cùi chỏ ngang tầm ngực ở cự ly 15cm (biến thể 4) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Phục Thủ Chẹn Khớp Nách Đối Phương, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Phục Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Phục Thủ Chẹn Khớp Nách Đối Phương",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_04_4",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Phục Thủ"
    ],
    "coreKinh": "Phục thủ ép gốc khớp triệt tiêu cùi chỏ",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'thúc cùi chỏ ngang tầm ngực ở cự ly 15cm (biến thể 4)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-075",
    "title": "Tình huống 75: Dồn hai tay đẩy mạnh vào ngực làm ngã ngửa (Biến thể 4)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: dồn hai tay đẩy mạnh vào ngực làm ngã ngửa (biến thể 4) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Song Chưởng Hóa Thôi Sơn & Nhập Nội, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Song Chưởng triệt tiêu lực đánh.",
    "counterTechniqueName": "Song Chưởng Hóa Thôi Sơn & Nhập Nội",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_18",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Song Chưởng",
      "Nhập Nội"
    ],
    "coreKinh": "Mượn lực đẩy của địch xoay trục nhập nội",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'dồn hai tay đẩy mạnh vào ngực làm ngã ngửa (biến thể 4)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-076",
    "title": "Tình huống 76: Đấm thốc bụng dưới tầm huyệt Khí Hải (Biến thể 4)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đấm thốc bụng dưới tầm huyệt khí hải (biến thể 4) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Khép Cùi Chỏ Hạ Thấp & Chưởng Hạ Bàn, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Hạ Chưởng triệt tiêu lực đánh.",
    "counterTechniqueName": "Khép Cùi Chỏ Hạ Thấp & Chưởng Hạ Bàn",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_01_1",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Hạ Chưởng"
    ],
    "coreKinh": "Hai cùi chỏ khép chặt bảo vệ đan điền",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đấm thốc bụng dưới tầm huyệt khí hải (biến thể 4)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-077",
    "title": "Tình huống 77: Chưởng bạt mạnh vào chấn thủy từ góc nghiêng (Biến thể 4)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: chưởng bạt mạnh vào chấn thủy từ góc nghiêng (biến thể 4) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Tả Hữu Lan Thủ Hóa Giải Đòn Bạt, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Lan Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Tả Hữu Lan Thủ Hóa Giải Đòn Bạt",
    "relatedFormId": "02-tam-kieu",
    "relatedTechCode": "TK_05",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Lan Thủ"
    ],
    "coreKinh": "Lan thủ hóa giải đòn bạt góc ngang",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'chưởng bạt mạnh vào chấn thủy từ góc nghiêng (biến thể 4)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-078",
    "title": "Tình huống 78: Đối phương dùng hai tay bóp nén lồng ngực (Biến thể 4)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đối phương dùng hai tay bóp nén lồng ngực (biến thể 4) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Mở Song Bàng Thủ Đột Phá Từ Trong Ra, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Song Bàng Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Mở Song Bàng Thủ Đột Phá Từ Trong Ra",
    "relatedFormId": "02-tam-kieu",
    "relatedTechCode": "TK_03",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Song Bàng Thủ"
    ],
    "coreKinh": "Bung nén từ trong ra ngoài phá vỡ gọng kìm",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đối phương dùng hai tay bóp nén lồng ngực (biến thể 4)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-079",
    "title": "Tình huống 79: Đấm thẳng liên tục vào vùng tim (Biến thể 4)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: đấm thẳng liên tục vào vùng tim (biến thể 4) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Liên Hoàn Bàng Thủ & Nhật Tự Quyền Phản Kích, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Bàng Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Liên Hoàn Bàng Thủ & Nhật Tự Quyền Phản Kích",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_05",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Bàng Thủ",
      "Nhật Tự Quyền"
    ],
    "coreKinh": "Bảo vệ khoang tim bằng góc nêm cùi chỏ",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'đấm thẳng liên tục vào vùng tim (biến thể 4)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-080",
    "title": "Tình huống 80: Thúc trỏ cắm chéo từ trên xuống ngực (Biến thể 4)",
    "category": "Trung Bàn (Ngực/Sườn)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương tập trung hỏa lực công kích vào vùng trung bàn: thúc trỏ cắm chéo từ trên xuống ngực (biến thể 4) hòng làm ta ngạt thở hoặc tổn thương nội tạng.",
    "wingChunSolution": "Áp dụng Thượng Phục Thủ Chẹn Tay Địch, khép cùi chỏ cách mạng sườn 1 nắm tay theo quy chuẩn Kiềm Dương Tấn, dùng Thượng Phục Thủ triệt tiêu lực đánh.",
    "counterTechniqueName": "Thượng Phục Thủ Chẹn Tay Địch",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_15",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn",
      "Đinh Tấn 45°"
    ],
    "hands": [
      "Thượng Phục Thủ"
    ],
    "coreKinh": "Nâng góc đón làm chệch hướng cắm",
    "biomechanics": "Khoang ngực chứa tim và phổi được che chắn tự nhiên nhờ vị trí cùi chỏ ép sườn, không bao giờ mở toang nách.",
    "quiz": {
      "question": "Trong tình huống 'thúc trỏ cắm chéo từ trên xuống ngực (biến thể 4)', khoảng cách an toàn giữa cùi chỏ và sườn trong Vịnh Xuân là bao nhiêu?",
      "options": [
        "Cách sườn đúng 1 nắm đấm (10-12cm)",
        "Dang rộng hết cỡ để lấy đà",
        "Ép chặt dính cứng vào da thịt không cử động",
        "Tùy ý thích không có quy chuẩn"
      ],
      "correctIndex": 0,
      "explanation": "Khoảng cách đúng 1 nắm tay vừa đủ tạo lò xo giảm chấn sinh học, không quá hở để địch đánh vào nách, không quá sát làm kẹt khớp."
    }
  },
  {
    "id": "SCEN-081",
    "title": "Tình huống 81: Đá tống thẳng vào bụng (Chính Đao Cước)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá tống thẳng vào bụng (chính đao cước) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Triệt Cước Đạp Chặn Ống Đồng Đối Thủ, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Triệt Cước Đạp Chặn Ống Đồng Đối Thủ",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_11",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Triệt Cước"
    ],
    "coreKinh": "Đạp chặn khi chân địch vừa rời đất",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá tống thẳng vào bụng (chính đao cước)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-082",
    "title": "Tình huống 82: Đá vòng cầu vào sườn phải (Hoành Cước)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá vòng cầu vào sườn phải (hoành cước) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Hạ Bàng Thủ Kết Hợp Đinh Tấn Khóa Cước, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Hạ Bàng Thủ Kết Hợp Đinh Tấn Khóa Cước",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_42_3",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Hạ Bàng",
      "Đinh Tấn"
    ],
    "coreKinh": "Đón đòn vòng bằng độ dốc hạ bàng",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá vòng cầu vào sườn phải (hoành cước)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-083",
    "title": "Tình huống 83: Đá vòng cầu vào thái dương (Thượng Cước)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá vòng cầu vào thái dương (thượng cước) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Cao Bàng Thủ Nâng Góc & Tiến Mã Nhập Nội, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Cao Bàng Thủ Nâng Góc & Tiến Mã Nhập Nội",
    "relatedFormId": "07-108-tien-lui-doi",
    "relatedTechCode": "TLDOI_12",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Cao Bàng",
      "Tiến Mã"
    ],
    "coreKinh": "Áp sát vào thân đối thủ khi chân họ đang trên cao",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá vòng cầu vào thái dương (thượng cước)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-084",
    "title": "Tình huống 84: Đá quét trụ chân trước (Tảo Chân)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá quét trụ chân trước (tảo chân) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Nhấc Chân 5cm Bẻ Cổ Chân Đạp Trụ Địch, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Nhấc Chân 5cm Bẻ Cổ Chân Đạp Trụ Địch",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_07",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Triệt Bộ Cước"
    ],
    "coreKinh": "Chân quét vào không gian rỗng bị phản đòn",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá quét trụ chân trước (tảo chân)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-085",
    "title": "Tình huống 85: Đá thốc thẳng vào hạ bộ / háng",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá thốc thẳng vào hạ bộ / háng nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Khép Chặt Gối Nhị Tự Kiềm Dương Tấn, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Khép Chặt Gối Nhị Tự Kiềm Dương Tấn",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_01",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Khép Gối Kiềm Dương"
    ],
    "coreKinh": "Khoảng cách 2 đầu gối chỉ 1 nắm tay khóa kín háng",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá thốc thẳng vào hạ bộ / háng' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-086",
    "title": "Tình huống 86: Đối phương tung cú đá đạp bay (Phi Cước)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đối phương tung cú đá đạp bay (phi cước) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Lách Trục Tý Ngọ Đạp Gãy Trụ Địch Tiếp Đất, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Lách Trục Tý Ngọ Đạp Gãy Trụ Địch Tiếp Đất",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_09",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Biên Thân Bộ"
    ],
    "coreKinh": "Địch nhảy lên cao tự đánh mất thăng bằng",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đối phương tung cú đá đạp bay (phi cước)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-087",
    "title": "Tình huống 87: Thúc đầu gối giáp chiến tầm gần khi ôm nhau",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: thúc đầu gối giáp chiến tầm gần khi ôm nhau nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Hạ Chưởng Đè Đầu Gối & Bẻ Khớp Cổ Chân, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Hạ Chưởng Đè Đầu Gối & Bẻ Khớp Cổ Chân",
    "relatedFormId": "07-108-tien-lui-doi",
    "relatedTechCode": "TLDOI_18_1",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Hạ Đè Chưởng"
    ],
    "coreKinh": "Đè nén chóp gối khi vừa nhấc lên",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'thúc đầu gối giáp chiến tầm gần khi ôm nhau' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-088",
    "title": "Tình huống 88: Đá tạt mu bàn chân vào bắp đùi ngoài (Lowkick)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá tạt mu bàn chân vào bắp đùi ngoài (lowkick) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Xoay Mũi Chân Chữ V Ra Đón Bằng Ống Đồng Cứng, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Xoay Mũi Chân Chữ V Ra Đón Bằng Ống Đồng Cứng",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_35",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Chuyển Bộ Chữ V"
    ],
    "coreKinh": "Đầu gối hướng ra ngoài biến lực đá thành lực trượt",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá tạt mu bàn chân vào bắp đùi ngoài (lowkick)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-089",
    "title": "Tình huống 89: Quét gót từ phía sau (Hậu Tảo Cước)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: quét gót từ phía sau (hậu tảo cước) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Chuyển Trọng Tâm Chân Sau Nhấc Chân Trước, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Chuyển Trọng Tâm Chân Sau Nhấc Chân Trước",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_11",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Chuyển Trọng Tâm"
    ],
    "coreKinh": "Hư thực phân minh, chân bị quét là chân không tải",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'quét gót từ phía sau (hậu tảo cước)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-090",
    "title": "Tình huống 90: Giẫm đạp lên mu bàn chân khi áp sát",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: giẫm đạp lên mu bàn chân khi áp sát nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Lướt Gót Chân Ra Sau 5cm & Xuất Chưởng, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Lướt Gót Chân Ra Sau 5cm & Xuất Chưởng",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_22",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Lướt Gót Bộ"
    ],
    "coreKinh": "Trọng tâm đồn 70% chân sau chân trước linh hoạt",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'giẫm đạp lên mu bàn chân khi áp sát' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-091",
    "title": "Tình huống 91: Đá tống thẳng vào bụng (Chính Đao Cước) (Cấp độ 2)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá tống thẳng vào bụng (chính đao cước) (cấp độ 2) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Triệt Cước Đạp Chặn Ống Đồng Đối Thủ, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Triệt Cước Đạp Chặn Ống Đồng Đối Thủ",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_11",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Triệt Cước"
    ],
    "coreKinh": "Đạp chặn khi chân địch vừa rời đất",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá tống thẳng vào bụng (chính đao cước) (cấp độ 2)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-092",
    "title": "Tình huống 92: Đá vòng cầu vào sườn phải (Hoành Cước) (Cấp độ 2)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá vòng cầu vào sườn phải (hoành cước) (cấp độ 2) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Hạ Bàng Thủ Kết Hợp Đinh Tấn Khóa Cước, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Hạ Bàng Thủ Kết Hợp Đinh Tấn Khóa Cước",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_42_3",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Hạ Bàng",
      "Đinh Tấn"
    ],
    "coreKinh": "Đón đòn vòng bằng độ dốc hạ bàng",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá vòng cầu vào sườn phải (hoành cước) (cấp độ 2)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-093",
    "title": "Tình huống 93: Đá vòng cầu vào thái dương (Thượng Cước) (Cấp độ 2)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá vòng cầu vào thái dương (thượng cước) (cấp độ 2) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Cao Bàng Thủ Nâng Góc & Tiến Mã Nhập Nội, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Cao Bàng Thủ Nâng Góc & Tiến Mã Nhập Nội",
    "relatedFormId": "07-108-tien-lui-doi",
    "relatedTechCode": "TLDOI_12",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Cao Bàng",
      "Tiến Mã"
    ],
    "coreKinh": "Áp sát vào thân đối thủ khi chân họ đang trên cao",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá vòng cầu vào thái dương (thượng cước) (cấp độ 2)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-094",
    "title": "Tình huống 94: Đá quét trụ chân trước (Tảo Chân) (Cấp độ 2)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá quét trụ chân trước (tảo chân) (cấp độ 2) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Nhấc Chân 5cm Bẻ Cổ Chân Đạp Trụ Địch, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Nhấc Chân 5cm Bẻ Cổ Chân Đạp Trụ Địch",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_07",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Triệt Bộ Cước"
    ],
    "coreKinh": "Chân quét vào không gian rỗng bị phản đòn",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá quét trụ chân trước (tảo chân) (cấp độ 2)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-095",
    "title": "Tình huống 95: Đá thốc thẳng vào hạ bộ / háng (Cấp độ 2)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá thốc thẳng vào hạ bộ / háng (cấp độ 2) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Khép Chặt Gối Nhị Tự Kiềm Dương Tấn, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Khép Chặt Gối Nhị Tự Kiềm Dương Tấn",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_01",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Khép Gối Kiềm Dương"
    ],
    "coreKinh": "Khoảng cách 2 đầu gối chỉ 1 nắm tay khóa kín háng",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá thốc thẳng vào hạ bộ / háng (cấp độ 2)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-096",
    "title": "Tình huống 96: Đối phương tung cú đá đạp bay (Phi Cước) (Cấp độ 2)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đối phương tung cú đá đạp bay (phi cước) (cấp độ 2) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Lách Trục Tý Ngọ Đạp Gãy Trụ Địch Tiếp Đất, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Lách Trục Tý Ngọ Đạp Gãy Trụ Địch Tiếp Đất",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_09",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Biên Thân Bộ"
    ],
    "coreKinh": "Địch nhảy lên cao tự đánh mất thăng bằng",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đối phương tung cú đá đạp bay (phi cước) (cấp độ 2)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-097",
    "title": "Tình huống 97: Thúc đầu gối giáp chiến tầm gần khi ôm nhau (Cấp độ 2)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: thúc đầu gối giáp chiến tầm gần khi ôm nhau (cấp độ 2) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Hạ Chưởng Đè Đầu Gối & Bẻ Khớp Cổ Chân, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Hạ Chưởng Đè Đầu Gối & Bẻ Khớp Cổ Chân",
    "relatedFormId": "07-108-tien-lui-doi",
    "relatedTechCode": "TLDOI_18_1",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Hạ Đè Chưởng"
    ],
    "coreKinh": "Đè nén chóp gối khi vừa nhấc lên",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'thúc đầu gối giáp chiến tầm gần khi ôm nhau (cấp độ 2)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-098",
    "title": "Tình huống 98: Đá tạt mu bàn chân vào bắp đùi ngoài (Lowkick) (Cấp độ 2)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá tạt mu bàn chân vào bắp đùi ngoài (lowkick) (cấp độ 2) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Xoay Mũi Chân Chữ V Ra Đón Bằng Ống Đồng Cứng, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Xoay Mũi Chân Chữ V Ra Đón Bằng Ống Đồng Cứng",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_35",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Chuyển Bộ Chữ V"
    ],
    "coreKinh": "Đầu gối hướng ra ngoài biến lực đá thành lực trượt",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá tạt mu bàn chân vào bắp đùi ngoài (lowkick) (cấp độ 2)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-099",
    "title": "Tình huống 99: Quét gót từ phía sau (Hậu Tảo Cước) (Cấp độ 2)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: quét gót từ phía sau (hậu tảo cước) (cấp độ 2) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Chuyển Trọng Tâm Chân Sau Nhấc Chân Trước, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Chuyển Trọng Tâm Chân Sau Nhấc Chân Trước",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_11",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Chuyển Trọng Tâm"
    ],
    "coreKinh": "Hư thực phân minh, chân bị quét là chân không tải",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'quét gót từ phía sau (hậu tảo cước) (cấp độ 2)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-100",
    "title": "Tình huống 100: Giẫm đạp lên mu bàn chân khi áp sát (Cấp độ 2)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: giẫm đạp lên mu bàn chân khi áp sát (cấp độ 2) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Lướt Gót Chân Ra Sau 5cm & Xuất Chưởng, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Lướt Gót Chân Ra Sau 5cm & Xuất Chưởng",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_22",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Lướt Gót Bộ"
    ],
    "coreKinh": "Trọng tâm đồn 70% chân sau chân trước linh hoạt",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'giẫm đạp lên mu bàn chân khi áp sát (cấp độ 2)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-101",
    "title": "Tình huống 101: Đá tống thẳng vào bụng (Chính Đao Cước) (Cấp độ 3)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá tống thẳng vào bụng (chính đao cước) (cấp độ 3) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Triệt Cước Đạp Chặn Ống Đồng Đối Thủ, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Triệt Cước Đạp Chặn Ống Đồng Đối Thủ",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_11",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Triệt Cước"
    ],
    "coreKinh": "Đạp chặn khi chân địch vừa rời đất",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá tống thẳng vào bụng (chính đao cước) (cấp độ 3)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-102",
    "title": "Tình huống 102: Đá vòng cầu vào sườn phải (Hoành Cước) (Cấp độ 3)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá vòng cầu vào sườn phải (hoành cước) (cấp độ 3) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Hạ Bàng Thủ Kết Hợp Đinh Tấn Khóa Cước, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Hạ Bàng Thủ Kết Hợp Đinh Tấn Khóa Cước",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_42_3",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Hạ Bàng",
      "Đinh Tấn"
    ],
    "coreKinh": "Đón đòn vòng bằng độ dốc hạ bàng",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá vòng cầu vào sườn phải (hoành cước) (cấp độ 3)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-103",
    "title": "Tình huống 103: Đá vòng cầu vào thái dương (Thượng Cước) (Cấp độ 3)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá vòng cầu vào thái dương (thượng cước) (cấp độ 3) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Cao Bàng Thủ Nâng Góc & Tiến Mã Nhập Nội, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Cao Bàng Thủ Nâng Góc & Tiến Mã Nhập Nội",
    "relatedFormId": "07-108-tien-lui-doi",
    "relatedTechCode": "TLDOI_12",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Cao Bàng",
      "Tiến Mã"
    ],
    "coreKinh": "Áp sát vào thân đối thủ khi chân họ đang trên cao",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá vòng cầu vào thái dương (thượng cước) (cấp độ 3)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-104",
    "title": "Tình huống 104: Đá quét trụ chân trước (Tảo Chân) (Cấp độ 3)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá quét trụ chân trước (tảo chân) (cấp độ 3) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Nhấc Chân 5cm Bẻ Cổ Chân Đạp Trụ Địch, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Nhấc Chân 5cm Bẻ Cổ Chân Đạp Trụ Địch",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_07",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Triệt Bộ Cước"
    ],
    "coreKinh": "Chân quét vào không gian rỗng bị phản đòn",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá quét trụ chân trước (tảo chân) (cấp độ 3)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-105",
    "title": "Tình huống 105: Đá thốc thẳng vào hạ bộ / háng (Cấp độ 3)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá thốc thẳng vào hạ bộ / háng (cấp độ 3) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Khép Chặt Gối Nhị Tự Kiềm Dương Tấn, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Khép Chặt Gối Nhị Tự Kiềm Dương Tấn",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_01",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Khép Gối Kiềm Dương"
    ],
    "coreKinh": "Khoảng cách 2 đầu gối chỉ 1 nắm tay khóa kín háng",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá thốc thẳng vào hạ bộ / háng (cấp độ 3)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-106",
    "title": "Tình huống 106: Đối phương tung cú đá đạp bay (Phi Cước) (Cấp độ 3)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đối phương tung cú đá đạp bay (phi cước) (cấp độ 3) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Lách Trục Tý Ngọ Đạp Gãy Trụ Địch Tiếp Đất, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Lách Trục Tý Ngọ Đạp Gãy Trụ Địch Tiếp Đất",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_09",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Biên Thân Bộ"
    ],
    "coreKinh": "Địch nhảy lên cao tự đánh mất thăng bằng",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đối phương tung cú đá đạp bay (phi cước) (cấp độ 3)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-107",
    "title": "Tình huống 107: Thúc đầu gối giáp chiến tầm gần khi ôm nhau (Cấp độ 3)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: thúc đầu gối giáp chiến tầm gần khi ôm nhau (cấp độ 3) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Hạ Chưởng Đè Đầu Gối & Bẻ Khớp Cổ Chân, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Hạ Chưởng Đè Đầu Gối & Bẻ Khớp Cổ Chân",
    "relatedFormId": "07-108-tien-lui-doi",
    "relatedTechCode": "TLDOI_18_1",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Hạ Đè Chưởng"
    ],
    "coreKinh": "Đè nén chóp gối khi vừa nhấc lên",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'thúc đầu gối giáp chiến tầm gần khi ôm nhau (cấp độ 3)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-108",
    "title": "Tình huống 108: Đá tạt mu bàn chân vào bắp đùi ngoài (Lowkick) (Cấp độ 3)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá tạt mu bàn chân vào bắp đùi ngoài (lowkick) (cấp độ 3) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Xoay Mũi Chân Chữ V Ra Đón Bằng Ống Đồng Cứng, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Xoay Mũi Chân Chữ V Ra Đón Bằng Ống Đồng Cứng",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_35",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Chuyển Bộ Chữ V"
    ],
    "coreKinh": "Đầu gối hướng ra ngoài biến lực đá thành lực trượt",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá tạt mu bàn chân vào bắp đùi ngoài (lowkick) (cấp độ 3)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-109",
    "title": "Tình huống 109: Quét gót từ phía sau (Hậu Tảo Cước) (Cấp độ 3)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: quét gót từ phía sau (hậu tảo cước) (cấp độ 3) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Chuyển Trọng Tâm Chân Sau Nhấc Chân Trước, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Chuyển Trọng Tâm Chân Sau Nhấc Chân Trước",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_11",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Chuyển Trọng Tâm"
    ],
    "coreKinh": "Hư thực phân minh, chân bị quét là chân không tải",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'quét gót từ phía sau (hậu tảo cước) (cấp độ 3)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-110",
    "title": "Tình huống 110: Giẫm đạp lên mu bàn chân khi áp sát (Cấp độ 3)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: giẫm đạp lên mu bàn chân khi áp sát (cấp độ 3) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Lướt Gót Chân Ra Sau 5cm & Xuất Chưởng, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Lướt Gót Chân Ra Sau 5cm & Xuất Chưởng",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_22",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Lướt Gót Bộ"
    ],
    "coreKinh": "Trọng tâm đồn 70% chân sau chân trước linh hoạt",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'giẫm đạp lên mu bàn chân khi áp sát (cấp độ 3)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-111",
    "title": "Tình huống 111: Đá tống thẳng vào bụng (Chính Đao Cước) (Cấp độ 4)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá tống thẳng vào bụng (chính đao cước) (cấp độ 4) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Triệt Cước Đạp Chặn Ống Đồng Đối Thủ, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Triệt Cước Đạp Chặn Ống Đồng Đối Thủ",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_11",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Triệt Cước"
    ],
    "coreKinh": "Đạp chặn khi chân địch vừa rời đất",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá tống thẳng vào bụng (chính đao cước) (cấp độ 4)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-112",
    "title": "Tình huống 112: Đá vòng cầu vào sườn phải (Hoành Cước) (Cấp độ 4)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá vòng cầu vào sườn phải (hoành cước) (cấp độ 4) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Hạ Bàng Thủ Kết Hợp Đinh Tấn Khóa Cước, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Hạ Bàng Thủ Kết Hợp Đinh Tấn Khóa Cước",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_42_3",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Hạ Bàng",
      "Đinh Tấn"
    ],
    "coreKinh": "Đón đòn vòng bằng độ dốc hạ bàng",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá vòng cầu vào sườn phải (hoành cước) (cấp độ 4)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-113",
    "title": "Tình huống 113: Đá vòng cầu vào thái dương (Thượng Cước) (Cấp độ 4)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá vòng cầu vào thái dương (thượng cước) (cấp độ 4) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Cao Bàng Thủ Nâng Góc & Tiến Mã Nhập Nội, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Cao Bàng Thủ Nâng Góc & Tiến Mã Nhập Nội",
    "relatedFormId": "07-108-tien-lui-doi",
    "relatedTechCode": "TLDOI_12",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Cao Bàng",
      "Tiến Mã"
    ],
    "coreKinh": "Áp sát vào thân đối thủ khi chân họ đang trên cao",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá vòng cầu vào thái dương (thượng cước) (cấp độ 4)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-114",
    "title": "Tình huống 114: Đá quét trụ chân trước (Tảo Chân) (Cấp độ 4)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá quét trụ chân trước (tảo chân) (cấp độ 4) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Nhấc Chân 5cm Bẻ Cổ Chân Đạp Trụ Địch, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Nhấc Chân 5cm Bẻ Cổ Chân Đạp Trụ Địch",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_07",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Triệt Bộ Cước"
    ],
    "coreKinh": "Chân quét vào không gian rỗng bị phản đòn",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá quét trụ chân trước (tảo chân) (cấp độ 4)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-115",
    "title": "Tình huống 115: Đá thốc thẳng vào hạ bộ / háng (Cấp độ 4)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá thốc thẳng vào hạ bộ / háng (cấp độ 4) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Khép Chặt Gối Nhị Tự Kiềm Dương Tấn, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Khép Chặt Gối Nhị Tự Kiềm Dương Tấn",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_01",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Khép Gối Kiềm Dương"
    ],
    "coreKinh": "Khoảng cách 2 đầu gối chỉ 1 nắm tay khóa kín háng",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá thốc thẳng vào hạ bộ / háng (cấp độ 4)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-116",
    "title": "Tình huống 116: Đối phương tung cú đá đạp bay (Phi Cước) (Cấp độ 4)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đối phương tung cú đá đạp bay (phi cước) (cấp độ 4) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Lách Trục Tý Ngọ Đạp Gãy Trụ Địch Tiếp Đất, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Lách Trục Tý Ngọ Đạp Gãy Trụ Địch Tiếp Đất",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_09",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Biên Thân Bộ"
    ],
    "coreKinh": "Địch nhảy lên cao tự đánh mất thăng bằng",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đối phương tung cú đá đạp bay (phi cước) (cấp độ 4)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-117",
    "title": "Tình huống 117: Thúc đầu gối giáp chiến tầm gần khi ôm nhau (Cấp độ 4)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: thúc đầu gối giáp chiến tầm gần khi ôm nhau (cấp độ 4) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Hạ Chưởng Đè Đầu Gối & Bẻ Khớp Cổ Chân, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Hạ Chưởng Đè Đầu Gối & Bẻ Khớp Cổ Chân",
    "relatedFormId": "07-108-tien-lui-doi",
    "relatedTechCode": "TLDOI_18_1",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Hạ Đè Chưởng"
    ],
    "coreKinh": "Đè nén chóp gối khi vừa nhấc lên",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'thúc đầu gối giáp chiến tầm gần khi ôm nhau (cấp độ 4)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-118",
    "title": "Tình huống 118: Đá tạt mu bàn chân vào bắp đùi ngoài (Lowkick) (Cấp độ 4)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: đá tạt mu bàn chân vào bắp đùi ngoài (lowkick) (cấp độ 4) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Xoay Mũi Chân Chữ V Ra Đón Bằng Ống Đồng Cứng, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Xoay Mũi Chân Chữ V Ra Đón Bằng Ống Đồng Cứng",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_35",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Chuyển Bộ Chữ V"
    ],
    "coreKinh": "Đầu gối hướng ra ngoài biến lực đá thành lực trượt",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'đá tạt mu bàn chân vào bắp đùi ngoài (lowkick) (cấp độ 4)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-119",
    "title": "Tình huống 119: Quét gót từ phía sau (Hậu Tảo Cước) (Cấp độ 4)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: quét gót từ phía sau (hậu tảo cước) (cấp độ 4) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Chuyển Trọng Tâm Chân Sau Nhấc Chân Trước, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Chuyển Trọng Tâm Chân Sau Nhấc Chân Trước",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_11",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Chuyển Trọng Tâm"
    ],
    "coreKinh": "Hư thực phân minh, chân bị quét là chân không tải",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'quét gót từ phía sau (hậu tảo cước) (cấp độ 4)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-120",
    "title": "Tình huống 120: Giẫm đạp lên mu bàn chân khi áp sát (Cấp độ 4)",
    "category": "Hạ Bàn (Chân/Háng)",
    "scenarioType": "attack_defense",
    "dangerLevel": "Trung bình",
    "opponentAction": "Đối phương sử dụng đòn chân hạ bàn: giẫm đạp lên mu bàn chân khi áp sát (cấp độ 4) nhằm triệt hạ đôi chân hoặc chấn thương vùng hạ bộ.",
    "wingChunSolution": "Áp dụng Lướt Gót Chân Ra Sau 5cm & Xuất Chưởng, kích hoạt quy chuẩn Nhị Tự Kiềm Dương Tấn chân hẹp chữ V ngược, giữ trọng tâm đan điền vững chắc.",
    "counterTechniqueName": "Lướt Gót Chân Ra Sau 5cm & Xuất Chưởng",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_22",
    "stances": [
      "Nhị Tự Kiềm Dương Tấn (Chân Hẹp)",
      "Triệt Bộ Cước"
    ],
    "hands": [
      "Lướt Gót Bộ"
    ],
    "coreKinh": "Trọng tâm đồn 70% chân sau chân trước linh hoạt",
    "biomechanics": "Hai đầu gối khép hướng tâm che kín 100% vùng hạ bộ. Chân Vịnh Xuân không bao giờ đá cao quá thắt lưng để bảo toàn gốc trụ.",
    "quiz": {
      "question": "Nguyên tắc sử dụng đòn chân (Cước pháp) của Phật Gia Vịnh Xuân trong tình huống 'giẫm đạp lên mu bàn chân khi áp sát (cấp độ 4)' là gì?",
      "options": [
        "Tuyệt đối không đá cao quá thắt lưng, chuyên trị đạp chặn tầm thấp",
        "Nhảy lên cao đá xoay 360 độ",
        "Đá cao qua đầu đối phương",
        "Đứng một chân giơ cao biểu diễn"
      ],
      "correctIndex": 0,
      "explanation": "Vịnh Xuân tâm niệm 'Chân không rời đất quá 1 gang tay', đá cao phơi bày hạ bộ và mất thăng bằng. Mọi đòn cước đều ngắm vào ống đồng, khớp gối hoặc cổ chân đối thủ."
    }
  },
  {
    "id": "SCEN-121",
    "title": "Tình huống 121: Bị túm cổ áo một tay chuẩn bị đấm tay kia",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị túm cổ áo một tay chuẩn bị đấm tay kia hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Khẩu Thủ Bẻ Khớp Cổ Tay & Xung Quyền, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Khẩu Thủ Bẻ Khớp Cổ Tay & Xung Quyền",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_02_3",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Khẩu Thủ Xoay Trục"
    ],
    "coreKinh": "Xoay cổ tay 180 độ triệt tiêu lực túm",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị túm cổ áo một tay chuẩn bị đấm tay kia' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-122",
    "title": "Tình huống 122: Bị hai tay túm hai bên cổ áo giật mạnh",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị hai tay túm hai bên cổ áo giật mạnh hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Song Than Thủ Bổ Cắt Khớp Cổ Tay Địch, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Song Than Thủ Bổ Cắt Khớp Cổ Tay Địch",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_01_2",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Song Than Thủ"
    ],
    "coreKinh": "Bung mở từ trong ra ngoài làm gãy điểm bám",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị hai tay túm hai bên cổ áo giật mạnh' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-123",
    "title": "Tình huống 123: Bị bóp cổ ép thẳng vào tường",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Nguy cấp",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị bóp cổ ép thẳng vào tường hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Thu Cằm Khép Yết Hầu & Thúc Chỏ Đan Điền, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Thu Cằm Khép Yết Hầu & Thúc Chỏ Đan Điền",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_08",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Vấn Thủ",
      "Cùi Chỏ"
    ],
    "coreKinh": "Thu cằm bảo vệ khí quản đẩy lùi tay bóp",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị bóp cổ ép thẳng vào tường' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-124",
    "title": "Tình huống 124: Bị ôm ngang nách từ phía sau (Bearhug)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị ôm ngang nách từ phía sau (bearhug) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Hạ Trọng Tâm Đan Điền & Thúc Trỏ Sau Mạn Sườn, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Hạ Trọng Tâm Đan Điền & Thúc Trỏ Sau Mạn Sườn",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_45",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Hậu Thúc Trỏ"
    ],
    "coreKinh": "Hạ trọng tâm nặng như chì làm địch không nhấc bổng được",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị ôm ngang nách từ phía sau (bearhug)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-125",
    "title": "Tình huống 125: Bị quàng siết cổ từ phía sau (Rear Naked Choke)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Nguy cấp",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị quàng siết cổ từ phía sau (rear naked choke) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Nghiêng Đầu Khóa Cằm Vào Khớp Trỏ Địch & Bẻ Ngón Tay, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Nghiêng Đầu Khóa Cằm Vào Khớp Trỏ Địch & Bẻ Ngón Tay",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_18",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Tiêu Thủ Cầm Nã"
    ],
    "coreKinh": "Túm 1 ngón tay bẻ ngược thoát hiểm sinh tử",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị quàng siết cổ từ phía sau (rear naked choke)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-126",
    "title": "Tình huống 126: Bị vặn bẻ khớp cổ tay ra ngoài",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị vặn bẻ khớp cổ tay ra ngoài hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Thuận Lực Cuộn Cổ Tay Theo Chiều Kim Đồng Hồ, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Thuận Lực Cuộn Cổ Tay Theo Chiều Kim Đồng Hồ",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_02_5",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Khẩu Thủ Cuộn"
    ],
    "coreKinh": "Thuận thế chuyển hình, biến đòn bẻ thành đòn phản",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị vặn bẻ khớp cổ tay ra ngoài' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-127",
    "title": "Tình huống 127: Bị đối phương khóa chặt cùi chỏ sau lưng",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị đối phương khóa chặt cùi chỏ sau lưng hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Xoay Trục Hông Bước Lùi Thúc Trỏ Ngược, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Xoay Trục Hông Bước Lùi Thúc Trỏ Ngược",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_18_1",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Hậu Chuyển Mã"
    ],
    "coreKinh": "Trục hông xoay làm trượt đòn khóa",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị đối phương khóa chặt cùi chỏ sau lưng' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-128",
    "title": "Tình huống 128: Bị túm tóc giật mạnh ra phía sau",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị túm tóc giật mạnh ra phía sau hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Hai Tay Ép Chặt Tay Địch Vào Đầu & Xoay Người, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Hai Tay Ép Chặt Tay Địch Vào Đầu & Xoay Người",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_52",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Song Thủ Áp Đỉnh"
    ],
    "coreKinh": "Biến tay địch thành một khối với đầu rồi bẻ cổ tay",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị túm tóc giật mạnh ra phía sau' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-129",
    "title": "Tình huống 129: Đối phương lao vào ôm hai chân vật ngã (Double Leg Takedown)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: đối phương lao vào ôm hai chân vật ngã (double leg takedown) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Nhảy Lùi Hai Chân Khép Gối & Đè Chưởng Đỉnh Đầu, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Nhảy Lùi Hai Chân Khép Gối & Đè Chưởng Đỉnh Đầu",
    "relatedFormId": "07-108-tien-lui-doi",
    "relatedTechCode": "TLDOI_22_1",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Triệt Bộ Hạ Đè"
    ],
    "coreKinh": "Tránh bắt chân, dồn lực đè nách và đấm gáy",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'đối phương lao vào ôm hai chân vật ngã (double leg takedown)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-130",
    "title": "Tình huống 130: Bị bẻ khớp ngón tay cự ly gần",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị bẻ khớp ngón tay cự ly gần hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Cuộn Nắm Đấm Chữ Nhật Đè Nén Trở Lại, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Cuộn Nắm Đấm Chữ Nhật Đè Nén Trở Lại",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_02_2",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Thu Quyền Cuộn"
    ],
    "coreKinh": "Ngón tay đơn độc yếu, cả nắm đấm kết khối mạnh",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị bẻ khớp ngón tay cự ly gần' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-131",
    "title": "Tình huống 131: Bị túm cổ áo một tay chuẩn bị đấm tay kia (Tình thế 2)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị túm cổ áo một tay chuẩn bị đấm tay kia (tình thế 2) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Khẩu Thủ Bẻ Khớp Cổ Tay & Xung Quyền, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Khẩu Thủ Bẻ Khớp Cổ Tay & Xung Quyền",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_02_3",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Khẩu Thủ Xoay Trục"
    ],
    "coreKinh": "Xoay cổ tay 180 độ triệt tiêu lực túm",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị túm cổ áo một tay chuẩn bị đấm tay kia (tình thế 2)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-132",
    "title": "Tình huống 132: Bị hai tay túm hai bên cổ áo giật mạnh (Tình thế 2)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị hai tay túm hai bên cổ áo giật mạnh (tình thế 2) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Song Than Thủ Bổ Cắt Khớp Cổ Tay Địch, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Song Than Thủ Bổ Cắt Khớp Cổ Tay Địch",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_01_2",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Song Than Thủ"
    ],
    "coreKinh": "Bung mở từ trong ra ngoài làm gãy điểm bám",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị hai tay túm hai bên cổ áo giật mạnh (tình thế 2)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-133",
    "title": "Tình huống 133: Bị bóp cổ ép thẳng vào tường (Tình thế 2)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Nguy cấp",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị bóp cổ ép thẳng vào tường (tình thế 2) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Thu Cằm Khép Yết Hầu & Thúc Chỏ Đan Điền, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Thu Cằm Khép Yết Hầu & Thúc Chỏ Đan Điền",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_08",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Vấn Thủ",
      "Cùi Chỏ"
    ],
    "coreKinh": "Thu cằm bảo vệ khí quản đẩy lùi tay bóp",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị bóp cổ ép thẳng vào tường (tình thế 2)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-134",
    "title": "Tình huống 134: Bị ôm ngang nách từ phía sau (Bearhug) (Tình thế 2)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị ôm ngang nách từ phía sau (bearhug) (tình thế 2) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Hạ Trọng Tâm Đan Điền & Thúc Trỏ Sau Mạn Sườn, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Hạ Trọng Tâm Đan Điền & Thúc Trỏ Sau Mạn Sườn",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_45",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Hậu Thúc Trỏ"
    ],
    "coreKinh": "Hạ trọng tâm nặng như chì làm địch không nhấc bổng được",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị ôm ngang nách từ phía sau (bearhug) (tình thế 2)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-135",
    "title": "Tình huống 135: Bị quàng siết cổ từ phía sau (Rear Naked Choke) (Tình thế 2)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Nguy cấp",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị quàng siết cổ từ phía sau (rear naked choke) (tình thế 2) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Nghiêng Đầu Khóa Cằm Vào Khớp Trỏ Địch & Bẻ Ngón Tay, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Nghiêng Đầu Khóa Cằm Vào Khớp Trỏ Địch & Bẻ Ngón Tay",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_18",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Tiêu Thủ Cầm Nã"
    ],
    "coreKinh": "Túm 1 ngón tay bẻ ngược thoát hiểm sinh tử",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị quàng siết cổ từ phía sau (rear naked choke) (tình thế 2)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-136",
    "title": "Tình huống 136: Bị vặn bẻ khớp cổ tay ra ngoài (Tình thế 2)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị vặn bẻ khớp cổ tay ra ngoài (tình thế 2) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Thuận Lực Cuộn Cổ Tay Theo Chiều Kim Đồng Hồ, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Thuận Lực Cuộn Cổ Tay Theo Chiều Kim Đồng Hồ",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_02_5",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Khẩu Thủ Cuộn"
    ],
    "coreKinh": "Thuận thế chuyển hình, biến đòn bẻ thành đòn phản",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị vặn bẻ khớp cổ tay ra ngoài (tình thế 2)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-137",
    "title": "Tình huống 137: Bị đối phương khóa chặt cùi chỏ sau lưng (Tình thế 2)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị đối phương khóa chặt cùi chỏ sau lưng (tình thế 2) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Xoay Trục Hông Bước Lùi Thúc Trỏ Ngược, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Xoay Trục Hông Bước Lùi Thúc Trỏ Ngược",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_18_1",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Hậu Chuyển Mã"
    ],
    "coreKinh": "Trục hông xoay làm trượt đòn khóa",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị đối phương khóa chặt cùi chỏ sau lưng (tình thế 2)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-138",
    "title": "Tình huống 138: Bị túm tóc giật mạnh ra phía sau (Tình thế 2)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị túm tóc giật mạnh ra phía sau (tình thế 2) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Hai Tay Ép Chặt Tay Địch Vào Đầu & Xoay Người, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Hai Tay Ép Chặt Tay Địch Vào Đầu & Xoay Người",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_52",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Song Thủ Áp Đỉnh"
    ],
    "coreKinh": "Biến tay địch thành một khối với đầu rồi bẻ cổ tay",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị túm tóc giật mạnh ra phía sau (tình thế 2)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-139",
    "title": "Tình huống 139: Đối phương lao vào ôm hai chân vật ngã (Double Leg Takedown) (Tình thế 2)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: đối phương lao vào ôm hai chân vật ngã (double leg takedown) (tình thế 2) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Nhảy Lùi Hai Chân Khép Gối & Đè Chưởng Đỉnh Đầu, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Nhảy Lùi Hai Chân Khép Gối & Đè Chưởng Đỉnh Đầu",
    "relatedFormId": "07-108-tien-lui-doi",
    "relatedTechCode": "TLDOI_22_1",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Triệt Bộ Hạ Đè"
    ],
    "coreKinh": "Tránh bắt chân, dồn lực đè nách và đấm gáy",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'đối phương lao vào ôm hai chân vật ngã (double leg takedown) (tình thế 2)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-140",
    "title": "Tình huống 140: Bị bẻ khớp ngón tay cự ly gần (Tình thế 2)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị bẻ khớp ngón tay cự ly gần (tình thế 2) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Cuộn Nắm Đấm Chữ Nhật Đè Nén Trở Lại, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Cuộn Nắm Đấm Chữ Nhật Đè Nén Trở Lại",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_02_2",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Thu Quyền Cuộn"
    ],
    "coreKinh": "Ngón tay đơn độc yếu, cả nắm đấm kết khối mạnh",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị bẻ khớp ngón tay cự ly gần (tình thế 2)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-141",
    "title": "Tình huống 141: Bị túm cổ áo một tay chuẩn bị đấm tay kia (Tình thế 3)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị túm cổ áo một tay chuẩn bị đấm tay kia (tình thế 3) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Khẩu Thủ Bẻ Khớp Cổ Tay & Xung Quyền, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Khẩu Thủ Bẻ Khớp Cổ Tay & Xung Quyền",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_02_3",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Khẩu Thủ Xoay Trục"
    ],
    "coreKinh": "Xoay cổ tay 180 độ triệt tiêu lực túm",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị túm cổ áo một tay chuẩn bị đấm tay kia (tình thế 3)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-142",
    "title": "Tình huống 142: Bị hai tay túm hai bên cổ áo giật mạnh (Tình thế 3)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị hai tay túm hai bên cổ áo giật mạnh (tình thế 3) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Song Than Thủ Bổ Cắt Khớp Cổ Tay Địch, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Song Than Thủ Bổ Cắt Khớp Cổ Tay Địch",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_01_2",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Song Than Thủ"
    ],
    "coreKinh": "Bung mở từ trong ra ngoài làm gãy điểm bám",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị hai tay túm hai bên cổ áo giật mạnh (tình thế 3)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-143",
    "title": "Tình huống 143: Bị bóp cổ ép thẳng vào tường (Tình thế 3)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Nguy cấp",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị bóp cổ ép thẳng vào tường (tình thế 3) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Thu Cằm Khép Yết Hầu & Thúc Chỏ Đan Điền, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Thu Cằm Khép Yết Hầu & Thúc Chỏ Đan Điền",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_08",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Vấn Thủ",
      "Cùi Chỏ"
    ],
    "coreKinh": "Thu cằm bảo vệ khí quản đẩy lùi tay bóp",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị bóp cổ ép thẳng vào tường (tình thế 3)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-144",
    "title": "Tình huống 144: Bị ôm ngang nách từ phía sau (Bearhug) (Tình thế 3)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị ôm ngang nách từ phía sau (bearhug) (tình thế 3) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Hạ Trọng Tâm Đan Điền & Thúc Trỏ Sau Mạn Sườn, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Hạ Trọng Tâm Đan Điền & Thúc Trỏ Sau Mạn Sườn",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_45",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Hậu Thúc Trỏ"
    ],
    "coreKinh": "Hạ trọng tâm nặng như chì làm địch không nhấc bổng được",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị ôm ngang nách từ phía sau (bearhug) (tình thế 3)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-145",
    "title": "Tình huống 145: Bị quàng siết cổ từ phía sau (Rear Naked Choke) (Tình thế 3)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Nguy cấp",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị quàng siết cổ từ phía sau (rear naked choke) (tình thế 3) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Nghiêng Đầu Khóa Cằm Vào Khớp Trỏ Địch & Bẻ Ngón Tay, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Nghiêng Đầu Khóa Cằm Vào Khớp Trỏ Địch & Bẻ Ngón Tay",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_18",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Tiêu Thủ Cầm Nã"
    ],
    "coreKinh": "Túm 1 ngón tay bẻ ngược thoát hiểm sinh tử",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị quàng siết cổ từ phía sau (rear naked choke) (tình thế 3)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-146",
    "title": "Tình huống 146: Bị vặn bẻ khớp cổ tay ra ngoài (Tình thế 3)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị vặn bẻ khớp cổ tay ra ngoài (tình thế 3) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Thuận Lực Cuộn Cổ Tay Theo Chiều Kim Đồng Hồ, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Thuận Lực Cuộn Cổ Tay Theo Chiều Kim Đồng Hồ",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_02_5",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Khẩu Thủ Cuộn"
    ],
    "coreKinh": "Thuận thế chuyển hình, biến đòn bẻ thành đòn phản",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị vặn bẻ khớp cổ tay ra ngoài (tình thế 3)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-147",
    "title": "Tình huống 147: Bị đối phương khóa chặt cùi chỏ sau lưng (Tình thế 3)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị đối phương khóa chặt cùi chỏ sau lưng (tình thế 3) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Xoay Trục Hông Bước Lùi Thúc Trỏ Ngược, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Xoay Trục Hông Bước Lùi Thúc Trỏ Ngược",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_18_1",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Hậu Chuyển Mã"
    ],
    "coreKinh": "Trục hông xoay làm trượt đòn khóa",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị đối phương khóa chặt cùi chỏ sau lưng (tình thế 3)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-148",
    "title": "Tình huống 148: Bị túm tóc giật mạnh ra phía sau (Tình thế 3)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị túm tóc giật mạnh ra phía sau (tình thế 3) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Hai Tay Ép Chặt Tay Địch Vào Đầu & Xoay Người, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Hai Tay Ép Chặt Tay Địch Vào Đầu & Xoay Người",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_52",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Song Thủ Áp Đỉnh"
    ],
    "coreKinh": "Biến tay địch thành một khối với đầu rồi bẻ cổ tay",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị túm tóc giật mạnh ra phía sau (tình thế 3)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-149",
    "title": "Tình huống 149: Đối phương lao vào ôm hai chân vật ngã (Double Leg Takedown) (Tình thế 3)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: đối phương lao vào ôm hai chân vật ngã (double leg takedown) (tình thế 3) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Nhảy Lùi Hai Chân Khép Gối & Đè Chưởng Đỉnh Đầu, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Nhảy Lùi Hai Chân Khép Gối & Đè Chưởng Đỉnh Đầu",
    "relatedFormId": "07-108-tien-lui-doi",
    "relatedTechCode": "TLDOI_22_1",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Triệt Bộ Hạ Đè"
    ],
    "coreKinh": "Tránh bắt chân, dồn lực đè nách và đấm gáy",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'đối phương lao vào ôm hai chân vật ngã (double leg takedown) (tình thế 3)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-150",
    "title": "Tình huống 150: Bị bẻ khớp ngón tay cự ly gần (Tình thế 3)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị bẻ khớp ngón tay cự ly gần (tình thế 3) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Cuộn Nắm Đấm Chữ Nhật Đè Nén Trở Lại, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Cuộn Nắm Đấm Chữ Nhật Đè Nén Trở Lại",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_02_2",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Thu Quyền Cuộn"
    ],
    "coreKinh": "Ngón tay đơn độc yếu, cả nắm đấm kết khối mạnh",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị bẻ khớp ngón tay cự ly gần (tình thế 3)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-151",
    "title": "Tình huống 151: Bị túm cổ áo một tay chuẩn bị đấm tay kia (Tình thế 4)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị túm cổ áo một tay chuẩn bị đấm tay kia (tình thế 4) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Khẩu Thủ Bẻ Khớp Cổ Tay & Xung Quyền, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Khẩu Thủ Bẻ Khớp Cổ Tay & Xung Quyền",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_02_3",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Khẩu Thủ Xoay Trục"
    ],
    "coreKinh": "Xoay cổ tay 180 độ triệt tiêu lực túm",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị túm cổ áo một tay chuẩn bị đấm tay kia (tình thế 4)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-152",
    "title": "Tình huống 152: Bị hai tay túm hai bên cổ áo giật mạnh (Tình thế 4)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị hai tay túm hai bên cổ áo giật mạnh (tình thế 4) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Song Than Thủ Bổ Cắt Khớp Cổ Tay Địch, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Song Than Thủ Bổ Cắt Khớp Cổ Tay Địch",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_01_2",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Song Than Thủ"
    ],
    "coreKinh": "Bung mở từ trong ra ngoài làm gãy điểm bám",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị hai tay túm hai bên cổ áo giật mạnh (tình thế 4)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-153",
    "title": "Tình huống 153: Bị bóp cổ ép thẳng vào tường (Tình thế 4)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Nguy cấp",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị bóp cổ ép thẳng vào tường (tình thế 4) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Thu Cằm Khép Yết Hầu & Thúc Chỏ Đan Điền, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Thu Cằm Khép Yết Hầu & Thúc Chỏ Đan Điền",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_08",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Vấn Thủ",
      "Cùi Chỏ"
    ],
    "coreKinh": "Thu cằm bảo vệ khí quản đẩy lùi tay bóp",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị bóp cổ ép thẳng vào tường (tình thế 4)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-154",
    "title": "Tình huống 154: Bị ôm ngang nách từ phía sau (Bearhug) (Tình thế 4)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị ôm ngang nách từ phía sau (bearhug) (tình thế 4) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Hạ Trọng Tâm Đan Điền & Thúc Trỏ Sau Mạn Sườn, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Hạ Trọng Tâm Đan Điền & Thúc Trỏ Sau Mạn Sườn",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_45",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Hậu Thúc Trỏ"
    ],
    "coreKinh": "Hạ trọng tâm nặng như chì làm địch không nhấc bổng được",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị ôm ngang nách từ phía sau (bearhug) (tình thế 4)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-155",
    "title": "Tình huống 155: Bị quàng siết cổ từ phía sau (Rear Naked Choke) (Tình thế 4)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Nguy cấp",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị quàng siết cổ từ phía sau (rear naked choke) (tình thế 4) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Nghiêng Đầu Khóa Cằm Vào Khớp Trỏ Địch & Bẻ Ngón Tay, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Nghiêng Đầu Khóa Cằm Vào Khớp Trỏ Địch & Bẻ Ngón Tay",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_18",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Tiêu Thủ Cầm Nã"
    ],
    "coreKinh": "Túm 1 ngón tay bẻ ngược thoát hiểm sinh tử",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị quàng siết cổ từ phía sau (rear naked choke) (tình thế 4)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-156",
    "title": "Tình huống 156: Bị vặn bẻ khớp cổ tay ra ngoài (Tình thế 4)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị vặn bẻ khớp cổ tay ra ngoài (tình thế 4) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Thuận Lực Cuộn Cổ Tay Theo Chiều Kim Đồng Hồ, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Thuận Lực Cuộn Cổ Tay Theo Chiều Kim Đồng Hồ",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_02_5",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Khẩu Thủ Cuộn"
    ],
    "coreKinh": "Thuận thế chuyển hình, biến đòn bẻ thành đòn phản",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị vặn bẻ khớp cổ tay ra ngoài (tình thế 4)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-157",
    "title": "Tình huống 157: Bị đối phương khóa chặt cùi chỏ sau lưng (Tình thế 4)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị đối phương khóa chặt cùi chỏ sau lưng (tình thế 4) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Xoay Trục Hông Bước Lùi Thúc Trỏ Ngược, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Xoay Trục Hông Bước Lùi Thúc Trỏ Ngược",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_18_1",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Hậu Chuyển Mã"
    ],
    "coreKinh": "Trục hông xoay làm trượt đòn khóa",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị đối phương khóa chặt cùi chỏ sau lưng (tình thế 4)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-158",
    "title": "Tình huống 158: Bị túm tóc giật mạnh ra phía sau (Tình thế 4)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị túm tóc giật mạnh ra phía sau (tình thế 4) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Hai Tay Ép Chặt Tay Địch Vào Đầu & Xoay Người, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Hai Tay Ép Chặt Tay Địch Vào Đầu & Xoay Người",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_52",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Song Thủ Áp Đỉnh"
    ],
    "coreKinh": "Biến tay địch thành một khối với đầu rồi bẻ cổ tay",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị túm tóc giật mạnh ra phía sau (tình thế 4)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-159",
    "title": "Tình huống 159: Đối phương lao vào ôm hai chân vật ngã (Double Leg Takedown) (Tình thế 4)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: đối phương lao vào ôm hai chân vật ngã (double leg takedown) (tình thế 4) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Nhảy Lùi Hai Chân Khép Gối & Đè Chưởng Đỉnh Đầu, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Nhảy Lùi Hai Chân Khép Gối & Đè Chưởng Đỉnh Đầu",
    "relatedFormId": "07-108-tien-lui-doi",
    "relatedTechCode": "TLDOI_22_1",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Triệt Bộ Hạ Đè"
    ],
    "coreKinh": "Tránh bắt chân, dồn lực đè nách và đấm gáy",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'đối phương lao vào ôm hai chân vật ngã (double leg takedown) (tình thế 4)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-160",
    "title": "Tình huống 160: Bị bẻ khớp ngón tay cự ly gần (Tình thế 4)",
    "category": "Cầm Nã & Khóa Siết",
    "scenarioType": "counter_grapple",
    "dangerLevel": "Cao",
    "opponentAction": "Đối phương áp sát khống chế vật lý: bị bẻ khớp ngón tay cự ly gần (tình thế 4) hòng vô hiệu hóa khả năng vận động của ta.",
    "wingChunSolution": "Áp dụng Cuộn Nắm Đấm Chữ Nhật Đè Nén Trở Lại, vận dụng nguyên lý 'Thuận kình hóa giải' và Niêm Thủ dính dớp, không gồng cơ đối kháng mà xoay khớp bẻ ngược thế cờ.",
    "counterTechniqueName": "Cuộn Nắm Đấm Chữ Nhật Đè Nén Trở Lại",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_02_2",
    "stances": [
      "Hạ Thấp Trọng Tâm Kiềm Dương",
      "Chuyển Trục Hông"
    ],
    "hands": [
      "Thu Quyền Cuộn"
    ],
    "coreKinh": "Ngón tay đơn độc yếu, cả nắm đấm kết khối mạnh",
    "biomechanics": "Khớp xương con người chỉ chuyển động theo một số góc nhất định. Khi bị khóa, xoay người theo chiều tự do của khớp sẽ lập tức giải phóng áp lực.",
    "quiz": {
      "question": "Quy tắc vàng khi bị đối phương khóa siết trong tình huống 'bị bẻ khớp ngón tay cự ly gần (tình thế 4)' là gì?",
      "options": [
        "Thả lỏng cơ thể xoay khớp theo hướng tự do, tuyệt đối không gồng cứng kéo ngược lại",
        "Gồng cứng toàn bộ cơ bắp thi thố sức mạnh",
        "Kêu gào hoảng loạn",
        "Đứng yên chấp nhận thua"
      ],
      "correctIndex": 0,
      "explanation": "Gồng cơ đối lực chỉ làm đòn khóa siết chặt hơn và dễ gãy xương. Thả lỏng giúp phát hiện kẽ hở và xoay khớp thoát hiểm nhẹ nhàng."
    }
  },
  {
    "id": "SCEN-161",
    "title": "Tình huống 161: Bị tấn công trong buồng thang máy chật hẹp",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: bị tấn công trong buồng thang máy chật hẹp đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Trung Tuyến Quyền Cự Ly Cực Ngắn 1 Tấc, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Trung Tuyến Quyền Cự Ly Cực Ngắn 1 Tấc",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_02_1",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Thốn Kình",
      "Nhật Tự Quyền"
    ],
    "coreKinh": "Không gian hẹp Vịnh Xuân phát huy tối đa lợi thế đòn thẳng",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'bị tấn công trong buồng thang máy chật hẹp'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-162",
    "title": "Tình huống 162: Bị dồn sát lưng vào góc tường 90 độ",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: bị dồn sát lưng vào góc tường 90 độ đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Tam Giác Bộ Lách Góc Chết Chiếm Tâm, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Tam Giác Bộ Lách Góc Chết Chiếm Tâm",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_03",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Tam Giác Bộ"
    ],
    "coreKinh": "Không đứng chịu trận, lách chân biến góc tường thành lợi thế kẹp địch",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'bị dồn sát lưng vào góc tường 90 độ'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-163",
    "title": "Tình huống 163: Đối phương cầm gậy ngắn đập từ trên xuống",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Nguy cấp",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: đối phương cầm gậy ngắn đập từ trên xuống đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Nhập Nội Nâng Bàng Thủ Chẹn Bắp Tay Tước Gậy, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Nhập Nội Nâng Bàng Thủ Chẹn Bắp Tay Tước Gậy",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_12",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Cao Bàng Thủ",
      "Cầm Nã Gậy"
    ],
    "coreKinh": "Đoạt gậy tại gốc tay, không đón đỡ ở ngọn gậy",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'đối phương cầm gậy ngắn đập từ trên xuống'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-164",
    "title": "Tình huống 164: Đối phương vung dao nhọn chém ngang bụng",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Nguy cấp",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: đối phương vung dao nhọn chém ngang bụng đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Lùi Hông Hút Bụng Hạ Than Thủ Bạt Cổ Tay, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Lùi Hông Hút Bụng Hạ Than Thủ Bạt Cổ Tay",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_50_1",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Hạ Than Thủ",
      "Hút Bụng"
    ],
    "coreKinh": "Hút đan điền tránh mũi dao 5cm rồi khóa chặt cổ tay cầm dao",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'đối phương vung dao nhọn chém ngang bụng'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-165",
    "title": "Tình huống 165: Đối phương cầm chai vỡ đâm thẳng mặt",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: đối phương cầm chai vỡ đâm thẳng mặt đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Vấn Thủ Hất Mũi Chai Ra Ngoài & Phóng Tiêu Chỉ, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Vấn Thủ Hất Mũi Chai Ra Ngoài & Phóng Tiêu Chỉ",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_04",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Vấn Thủ",
      "Tiêu Chỉ"
    ],
    "coreKinh": "Lệch trục Tý Ngọ để mũi nhọn đâm vào khoảng không",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'đối phương cầm chai vỡ đâm thẳng mặt'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-166",
    "title": "Tình huống 166: Bị hai người tấn công cùng lúc trước và sau",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Nguy cấp",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: bị hai người tấn công cùng lúc trước và sau đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Đánh Địch Trước Ép Về Sau Làm Khiên Chắn, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Đánh Địch Trước Ép Về Sau Làm Khiên Chắn",
    "relatedFormId": "07-108-tien-lui-doi",
    "relatedTechCode": "TLDOI_30",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Chuyển Thân Hộ Vệ"
    ],
    "coreKinh": "Xoay chuyển vị trí để hai đối thủ tự cản trở lẫn nhau",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'bị hai người tấn công cùng lúc trước và sau'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-167",
    "title": "Tình huống 167: Tự vệ khi đang ngồi trên ghế làm việc",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: tự vệ khi đang ngồi trên ghế làm việc đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Dùng Tay Đỡ Vấn Thủ & Đạp Chân Ghế Phóng Đan Điền, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Dùng Tay Đỡ Vấn Thủ & Đạp Chân Ghế Phóng Đan Điền",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_14",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Ghế Bộ",
      "Chưởng"
    ],
    "coreKinh": "Biến ghế thành bệ phóng kình lực",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'tự vệ khi đang ngồi trên ghế làm việc'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-168",
    "title": "Tình huống 168: Tấn công trong bóng tối hoàn toàn mất thị giác",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: tấn công trong bóng tối hoàn toàn mất thị giác đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Kích Hoạt Niêm Thủ Thính Kình Chạm Là Đánh, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Kích Hoạt Niêm Thủ Thính Kình Chạm Là Đánh",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_01_2",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Niêm Thủ Thính Kình"
    ],
    "coreKinh": "Xúc giác tay dính tay truyền tín hiệu nhanh hơn mắt nhìn 3 lần",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'tấn công trong bóng tối hoàn toàn mất thị giác'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-169",
    "title": "Tình huống 169: Kẻ tấn công to lớn vượt trội gấp đôi thể trọng",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: kẻ tấn công to lớn vượt trội gấp đôi thể trọng đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Dĩ Nhu Chế Cương Đạp Ống Đồng Đánh Mỏ Ác, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Dĩ Nhu Chế Cương Đạp Ống Đồng Đánh Mỏ Ác",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_23",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Triệt Cước",
      "Mỏ Ác"
    ],
    "coreKinh": "Kẻ to lớn xương khớp vẫn có huyệt đạo yếu như người thường",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'kẻ tấn công to lớn vượt trội gấp đôi thể trọng'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-170",
    "title": "Tình huống 170: Bị túm tay kéo lê trên mặt đường",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: bị túm tay kéo lê trên mặt đường đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Thuận Lực Trượt Bộ Chưởng Đan Điền Vào Mạng Sườn, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Thuận Lực Trượt Bộ Chưởng Đan Điền Vào Mạng Sườn",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_02",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Thuận Bộ Chưởng"
    ],
    "coreKinh": "Mượn lực kéo của địch làm gia tốc cho cú chưởng của ta",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'bị túm tay kéo lê trên mặt đường'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-171",
    "title": "Tình huống 171: Bị tấn công trong buồng thang máy chật hẹp (Kịch bản 2)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: bị tấn công trong buồng thang máy chật hẹp (kịch bản 2) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Trung Tuyến Quyền Cự Ly Cực Ngắn 1 Tấc, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Trung Tuyến Quyền Cự Ly Cực Ngắn 1 Tấc",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_02_1",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Thốn Kình",
      "Nhật Tự Quyền"
    ],
    "coreKinh": "Không gian hẹp Vịnh Xuân phát huy tối đa lợi thế đòn thẳng",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'bị tấn công trong buồng thang máy chật hẹp (kịch bản 2)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-172",
    "title": "Tình huống 172: Bị dồn sát lưng vào góc tường 90 độ (Kịch bản 2)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: bị dồn sát lưng vào góc tường 90 độ (kịch bản 2) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Tam Giác Bộ Lách Góc Chết Chiếm Tâm, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Tam Giác Bộ Lách Góc Chết Chiếm Tâm",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_03",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Tam Giác Bộ"
    ],
    "coreKinh": "Không đứng chịu trận, lách chân biến góc tường thành lợi thế kẹp địch",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'bị dồn sát lưng vào góc tường 90 độ (kịch bản 2)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-173",
    "title": "Tình huống 173: Đối phương cầm gậy ngắn đập từ trên xuống (Kịch bản 2)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Nguy cấp",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: đối phương cầm gậy ngắn đập từ trên xuống (kịch bản 2) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Nhập Nội Nâng Bàng Thủ Chẹn Bắp Tay Tước Gậy, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Nhập Nội Nâng Bàng Thủ Chẹn Bắp Tay Tước Gậy",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_12",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Cao Bàng Thủ",
      "Cầm Nã Gậy"
    ],
    "coreKinh": "Đoạt gậy tại gốc tay, không đón đỡ ở ngọn gậy",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'đối phương cầm gậy ngắn đập từ trên xuống (kịch bản 2)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-174",
    "title": "Tình huống 174: Đối phương vung dao nhọn chém ngang bụng (Kịch bản 2)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Nguy cấp",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: đối phương vung dao nhọn chém ngang bụng (kịch bản 2) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Lùi Hông Hút Bụng Hạ Than Thủ Bạt Cổ Tay, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Lùi Hông Hút Bụng Hạ Than Thủ Bạt Cổ Tay",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_50_1",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Hạ Than Thủ",
      "Hút Bụng"
    ],
    "coreKinh": "Hút đan điền tránh mũi dao 5cm rồi khóa chặt cổ tay cầm dao",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'đối phương vung dao nhọn chém ngang bụng (kịch bản 2)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-175",
    "title": "Tình huống 175: Đối phương cầm chai vỡ đâm thẳng mặt (Kịch bản 2)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: đối phương cầm chai vỡ đâm thẳng mặt (kịch bản 2) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Vấn Thủ Hất Mũi Chai Ra Ngoài & Phóng Tiêu Chỉ, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Vấn Thủ Hất Mũi Chai Ra Ngoài & Phóng Tiêu Chỉ",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_04",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Vấn Thủ",
      "Tiêu Chỉ"
    ],
    "coreKinh": "Lệch trục Tý Ngọ để mũi nhọn đâm vào khoảng không",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'đối phương cầm chai vỡ đâm thẳng mặt (kịch bản 2)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-176",
    "title": "Tình huống 176: Bị hai người tấn công cùng lúc trước và sau (Kịch bản 2)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Nguy cấp",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: bị hai người tấn công cùng lúc trước và sau (kịch bản 2) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Đánh Địch Trước Ép Về Sau Làm Khiên Chắn, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Đánh Địch Trước Ép Về Sau Làm Khiên Chắn",
    "relatedFormId": "07-108-tien-lui-doi",
    "relatedTechCode": "TLDOI_30",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Chuyển Thân Hộ Vệ"
    ],
    "coreKinh": "Xoay chuyển vị trí để hai đối thủ tự cản trở lẫn nhau",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'bị hai người tấn công cùng lúc trước và sau (kịch bản 2)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-177",
    "title": "Tình huống 177: Tự vệ khi đang ngồi trên ghế làm việc (Kịch bản 2)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: tự vệ khi đang ngồi trên ghế làm việc (kịch bản 2) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Dùng Tay Đỡ Vấn Thủ & Đạp Chân Ghế Phóng Đan Điền, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Dùng Tay Đỡ Vấn Thủ & Đạp Chân Ghế Phóng Đan Điền",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_14",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Ghế Bộ",
      "Chưởng"
    ],
    "coreKinh": "Biến ghế thành bệ phóng kình lực",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'tự vệ khi đang ngồi trên ghế làm việc (kịch bản 2)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-178",
    "title": "Tình huống 178: Tấn công trong bóng tối hoàn toàn mất thị giác (Kịch bản 2)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: tấn công trong bóng tối hoàn toàn mất thị giác (kịch bản 2) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Kích Hoạt Niêm Thủ Thính Kình Chạm Là Đánh, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Kích Hoạt Niêm Thủ Thính Kình Chạm Là Đánh",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_01_2",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Niêm Thủ Thính Kình"
    ],
    "coreKinh": "Xúc giác tay dính tay truyền tín hiệu nhanh hơn mắt nhìn 3 lần",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'tấn công trong bóng tối hoàn toàn mất thị giác (kịch bản 2)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-179",
    "title": "Tình huống 179: Kẻ tấn công to lớn vượt trội gấp đôi thể trọng (Kịch bản 2)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: kẻ tấn công to lớn vượt trội gấp đôi thể trọng (kịch bản 2) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Dĩ Nhu Chế Cương Đạp Ống Đồng Đánh Mỏ Ác, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Dĩ Nhu Chế Cương Đạp Ống Đồng Đánh Mỏ Ác",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_23",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Triệt Cước",
      "Mỏ Ác"
    ],
    "coreKinh": "Kẻ to lớn xương khớp vẫn có huyệt đạo yếu như người thường",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'kẻ tấn công to lớn vượt trội gấp đôi thể trọng (kịch bản 2)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-180",
    "title": "Tình huống 180: Bị túm tay kéo lê trên mặt đường (Kịch bản 2)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: bị túm tay kéo lê trên mặt đường (kịch bản 2) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Thuận Lực Trượt Bộ Chưởng Đan Điền Vào Mạng Sườn, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Thuận Lực Trượt Bộ Chưởng Đan Điền Vào Mạng Sườn",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_02",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Thuận Bộ Chưởng"
    ],
    "coreKinh": "Mượn lực kéo của địch làm gia tốc cho cú chưởng của ta",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'bị túm tay kéo lê trên mặt đường (kịch bản 2)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-181",
    "title": "Tình huống 181: Bị tấn công trong buồng thang máy chật hẹp (Kịch bản 3)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: bị tấn công trong buồng thang máy chật hẹp (kịch bản 3) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Trung Tuyến Quyền Cự Ly Cực Ngắn 1 Tấc, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Trung Tuyến Quyền Cự Ly Cực Ngắn 1 Tấc",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_02_1",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Thốn Kình",
      "Nhật Tự Quyền"
    ],
    "coreKinh": "Không gian hẹp Vịnh Xuân phát huy tối đa lợi thế đòn thẳng",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'bị tấn công trong buồng thang máy chật hẹp (kịch bản 3)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-182",
    "title": "Tình huống 182: Bị dồn sát lưng vào góc tường 90 độ (Kịch bản 3)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: bị dồn sát lưng vào góc tường 90 độ (kịch bản 3) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Tam Giác Bộ Lách Góc Chết Chiếm Tâm, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Tam Giác Bộ Lách Góc Chết Chiếm Tâm",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_03",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Tam Giác Bộ"
    ],
    "coreKinh": "Không đứng chịu trận, lách chân biến góc tường thành lợi thế kẹp địch",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'bị dồn sát lưng vào góc tường 90 độ (kịch bản 3)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-183",
    "title": "Tình huống 183: Đối phương cầm gậy ngắn đập từ trên xuống (Kịch bản 3)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Nguy cấp",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: đối phương cầm gậy ngắn đập từ trên xuống (kịch bản 3) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Nhập Nội Nâng Bàng Thủ Chẹn Bắp Tay Tước Gậy, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Nhập Nội Nâng Bàng Thủ Chẹn Bắp Tay Tước Gậy",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_12",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Cao Bàng Thủ",
      "Cầm Nã Gậy"
    ],
    "coreKinh": "Đoạt gậy tại gốc tay, không đón đỡ ở ngọn gậy",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'đối phương cầm gậy ngắn đập từ trên xuống (kịch bản 3)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-184",
    "title": "Tình huống 184: Đối phương vung dao nhọn chém ngang bụng (Kịch bản 3)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Nguy cấp",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: đối phương vung dao nhọn chém ngang bụng (kịch bản 3) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Lùi Hông Hút Bụng Hạ Than Thủ Bạt Cổ Tay, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Lùi Hông Hút Bụng Hạ Than Thủ Bạt Cổ Tay",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_50_1",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Hạ Than Thủ",
      "Hút Bụng"
    ],
    "coreKinh": "Hút đan điền tránh mũi dao 5cm rồi khóa chặt cổ tay cầm dao",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'đối phương vung dao nhọn chém ngang bụng (kịch bản 3)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-185",
    "title": "Tình huống 185: Đối phương cầm chai vỡ đâm thẳng mặt (Kịch bản 3)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: đối phương cầm chai vỡ đâm thẳng mặt (kịch bản 3) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Vấn Thủ Hất Mũi Chai Ra Ngoài & Phóng Tiêu Chỉ, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Vấn Thủ Hất Mũi Chai Ra Ngoài & Phóng Tiêu Chỉ",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_04",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Vấn Thủ",
      "Tiêu Chỉ"
    ],
    "coreKinh": "Lệch trục Tý Ngọ để mũi nhọn đâm vào khoảng không",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'đối phương cầm chai vỡ đâm thẳng mặt (kịch bản 3)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-186",
    "title": "Tình huống 186: Bị hai người tấn công cùng lúc trước và sau (Kịch bản 3)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Nguy cấp",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: bị hai người tấn công cùng lúc trước và sau (kịch bản 3) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Đánh Địch Trước Ép Về Sau Làm Khiên Chắn, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Đánh Địch Trước Ép Về Sau Làm Khiên Chắn",
    "relatedFormId": "07-108-tien-lui-doi",
    "relatedTechCode": "TLDOI_30",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Chuyển Thân Hộ Vệ"
    ],
    "coreKinh": "Xoay chuyển vị trí để hai đối thủ tự cản trở lẫn nhau",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'bị hai người tấn công cùng lúc trước và sau (kịch bản 3)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-187",
    "title": "Tình huống 187: Tự vệ khi đang ngồi trên ghế làm việc (Kịch bản 3)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: tự vệ khi đang ngồi trên ghế làm việc (kịch bản 3) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Dùng Tay Đỡ Vấn Thủ & Đạp Chân Ghế Phóng Đan Điền, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Dùng Tay Đỡ Vấn Thủ & Đạp Chân Ghế Phóng Đan Điền",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_14",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Ghế Bộ",
      "Chưởng"
    ],
    "coreKinh": "Biến ghế thành bệ phóng kình lực",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'tự vệ khi đang ngồi trên ghế làm việc (kịch bản 3)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-188",
    "title": "Tình huống 188: Tấn công trong bóng tối hoàn toàn mất thị giác (Kịch bản 3)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: tấn công trong bóng tối hoàn toàn mất thị giác (kịch bản 3) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Kích Hoạt Niêm Thủ Thính Kình Chạm Là Đánh, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Kích Hoạt Niêm Thủ Thính Kình Chạm Là Đánh",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_01_2",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Niêm Thủ Thính Kình"
    ],
    "coreKinh": "Xúc giác tay dính tay truyền tín hiệu nhanh hơn mắt nhìn 3 lần",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'tấn công trong bóng tối hoàn toàn mất thị giác (kịch bản 3)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-189",
    "title": "Tình huống 189: Kẻ tấn công to lớn vượt trội gấp đôi thể trọng (Kịch bản 3)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: kẻ tấn công to lớn vượt trội gấp đôi thể trọng (kịch bản 3) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Dĩ Nhu Chế Cương Đạp Ống Đồng Đánh Mỏ Ác, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Dĩ Nhu Chế Cương Đạp Ống Đồng Đánh Mỏ Ác",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_23",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Triệt Cước",
      "Mỏ Ác"
    ],
    "coreKinh": "Kẻ to lớn xương khớp vẫn có huyệt đạo yếu như người thường",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'kẻ tấn công to lớn vượt trội gấp đôi thể trọng (kịch bản 3)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-190",
    "title": "Tình huống 190: Bị túm tay kéo lê trên mặt đường (Kịch bản 3)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: bị túm tay kéo lê trên mặt đường (kịch bản 3) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Thuận Lực Trượt Bộ Chưởng Đan Điền Vào Mạng Sườn, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Thuận Lực Trượt Bộ Chưởng Đan Điền Vào Mạng Sườn",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_02",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Thuận Bộ Chưởng"
    ],
    "coreKinh": "Mượn lực kéo của địch làm gia tốc cho cú chưởng của ta",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'bị túm tay kéo lê trên mặt đường (kịch bản 3)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-191",
    "title": "Tình huống 191: Bị tấn công trong buồng thang máy chật hẹp (Kịch bản 4)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: bị tấn công trong buồng thang máy chật hẹp (kịch bản 4) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Trung Tuyến Quyền Cự Ly Cực Ngắn 1 Tấc, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Trung Tuyến Quyền Cự Ly Cực Ngắn 1 Tấc",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_02_1",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Thốn Kình",
      "Nhật Tự Quyền"
    ],
    "coreKinh": "Không gian hẹp Vịnh Xuân phát huy tối đa lợi thế đòn thẳng",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'bị tấn công trong buồng thang máy chật hẹp (kịch bản 4)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-192",
    "title": "Tình huống 192: Bị dồn sát lưng vào góc tường 90 độ (Kịch bản 4)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: bị dồn sát lưng vào góc tường 90 độ (kịch bản 4) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Tam Giác Bộ Lách Góc Chết Chiếm Tâm, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Tam Giác Bộ Lách Góc Chết Chiếm Tâm",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_03",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Tam Giác Bộ"
    ],
    "coreKinh": "Không đứng chịu trận, lách chân biến góc tường thành lợi thế kẹp địch",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'bị dồn sát lưng vào góc tường 90 độ (kịch bản 4)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-193",
    "title": "Tình huống 193: Đối phương cầm gậy ngắn đập từ trên xuống (Kịch bản 4)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Nguy cấp",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: đối phương cầm gậy ngắn đập từ trên xuống (kịch bản 4) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Nhập Nội Nâng Bàng Thủ Chẹn Bắp Tay Tước Gậy, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Nhập Nội Nâng Bàng Thủ Chẹn Bắp Tay Tước Gậy",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_12",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Cao Bàng Thủ",
      "Cầm Nã Gậy"
    ],
    "coreKinh": "Đoạt gậy tại gốc tay, không đón đỡ ở ngọn gậy",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'đối phương cầm gậy ngắn đập từ trên xuống (kịch bản 4)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-194",
    "title": "Tình huống 194: Đối phương vung dao nhọn chém ngang bụng (Kịch bản 4)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Nguy cấp",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: đối phương vung dao nhọn chém ngang bụng (kịch bản 4) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Lùi Hông Hút Bụng Hạ Than Thủ Bạt Cổ Tay, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Lùi Hông Hút Bụng Hạ Than Thủ Bạt Cổ Tay",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_50_1",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Hạ Than Thủ",
      "Hút Bụng"
    ],
    "coreKinh": "Hút đan điền tránh mũi dao 5cm rồi khóa chặt cổ tay cầm dao",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'đối phương vung dao nhọn chém ngang bụng (kịch bản 4)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-195",
    "title": "Tình huống 195: Đối phương cầm chai vỡ đâm thẳng mặt (Kịch bản 4)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: đối phương cầm chai vỡ đâm thẳng mặt (kịch bản 4) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Vấn Thủ Hất Mũi Chai Ra Ngoài & Phóng Tiêu Chỉ, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Vấn Thủ Hất Mũi Chai Ra Ngoài & Phóng Tiêu Chỉ",
    "relatedFormId": "03-tieu-chi",
    "relatedTechCode": "TC_04",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Vấn Thủ",
      "Tiêu Chỉ"
    ],
    "coreKinh": "Lệch trục Tý Ngọ để mũi nhọn đâm vào khoảng không",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'đối phương cầm chai vỡ đâm thẳng mặt (kịch bản 4)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-196",
    "title": "Tình huống 196: Bị hai người tấn công cùng lúc trước và sau (Kịch bản 4)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Nguy cấp",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: bị hai người tấn công cùng lúc trước và sau (kịch bản 4) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Đánh Địch Trước Ép Về Sau Làm Khiên Chắn, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Đánh Địch Trước Ép Về Sau Làm Khiên Chắn",
    "relatedFormId": "07-108-tien-lui-doi",
    "relatedTechCode": "TLDOI_30",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Chuyển Thân Hộ Vệ"
    ],
    "coreKinh": "Xoay chuyển vị trí để hai đối thủ tự cản trở lẫn nhau",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'bị hai người tấn công cùng lúc trước và sau (kịch bản 4)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-197",
    "title": "Tình huống 197: Tự vệ khi đang ngồi trên ghế làm việc (Kịch bản 4)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: tự vệ khi đang ngồi trên ghế làm việc (kịch bản 4) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Dùng Tay Đỡ Vấn Thủ & Đạp Chân Ghế Phóng Đan Điền, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Dùng Tay Đỡ Vấn Thủ & Đạp Chân Ghế Phóng Đan Điền",
    "relatedFormId": "04-108-don-luyen",
    "relatedTechCode": "108_14",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Ghế Bộ",
      "Chưởng"
    ],
    "coreKinh": "Biến ghế thành bệ phóng kình lực",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'tự vệ khi đang ngồi trên ghế làm việc (kịch bản 4)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-198",
    "title": "Tình huống 198: Tấn công trong bóng tối hoàn toàn mất thị giác (Kịch bản 4)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: tấn công trong bóng tối hoàn toàn mất thị giác (kịch bản 4) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Kích Hoạt Niêm Thủ Thính Kình Chạm Là Đánh, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Kích Hoạt Niêm Thủ Thính Kình Chạm Là Đánh",
    "relatedFormId": "01-tieu-niem-dau",
    "relatedTechCode": "TND_01_2",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Niêm Thủ Thính Kình"
    ],
    "coreKinh": "Xúc giác tay dính tay truyền tín hiệu nhanh hơn mắt nhìn 3 lần",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'tấn công trong bóng tối hoàn toàn mất thị giác (kịch bản 4)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-199",
    "title": "Tình huống 199: Kẻ tấn công to lớn vượt trội gấp đôi thể trọng (Kịch bản 4)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: kẻ tấn công to lớn vượt trội gấp đôi thể trọng (kịch bản 4) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Dĩ Nhu Chế Cương Đạp Ống Đồng Đánh Mỏ Ác, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Dĩ Nhu Chế Cương Đạp Ống Đồng Đánh Mỏ Ác",
    "relatedFormId": "05-108-doi-luyen",
    "relatedTechCode": "DL_23",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Triệt Cước",
      "Mỏ Ác"
    ],
    "coreKinh": "Kẻ to lớn xương khớp vẫn có huyệt đạo yếu như người thường",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'kẻ tấn công to lớn vượt trội gấp đôi thể trọng (kịch bản 4)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  },
  {
    "id": "SCEN-200",
    "title": "Tình huống 200: Bị túm tay kéo lê trên mặt đường (Kịch bản 4)",
    "category": "Tự Vệ Đường Phố & Góc Hẹp",
    "scenarioType": "street_defense",
    "dangerLevel": "Cao",
    "opponentAction": "Bối cảnh tự vệ thực chiến đường phố khốc liệt: bị túm tay kéo lê trên mặt đường (kịch bản 4) đe dọa trực tiếp đến tính mạng trong môi trường không luật lệ.",
    "wingChunSolution": "Áp dụng Thuận Lực Trượt Bộ Chưởng Đan Điền Vào Mạng Sườn, tuân thủ triệt để nguyên lý 'Dĩ đoản chế trường' và kiểm soát Trục Tý Ngọ Tuyến, biến vật cản không gian thành lợi thế.",
    "counterTechniqueName": "Thuận Lực Trượt Bộ Chưởng Đan Điền Vào Mạng Sườn",
    "relatedFormId": "06-108-tien-lui-don",
    "relatedTechCode": "TLD_02",
    "stances": [
      "Tam Giác Bộ",
      "Kiềm Dương Tấn Cơ Động"
    ],
    "hands": [
      "Thuận Bộ Chưởng"
    ],
    "coreKinh": "Mượn lực kéo của địch làm gia tốc cho cú chưởng của ta",
    "biomechanics": "Vịnh Xuân là môn võ sinh ra từ không gian hẹp (thuyền bè, ngõ nhỏ), không cần đà vung tay, phát lực thốn kình 1 tấc cực kỳ nguy hiểm.",
    "quiz": {
      "question": "Tại sao Phật Gia Vịnh Xuân được xem là môn võ tự vệ không gian hẹp (thang máy, góc tường) hiệu quả nhất trong tình huống 'bị túm tay kéo lê trên mặt đường (kịch bản 4)'?",
      "options": [
        "Vì đòn đánh đi thẳng theo trục Tý Ngọ, phát lực cự ly 1 tấc (Thốn Kình) không cần vung tay lấy đà",
        "Vì Vịnh Xuân có nhiều đòn bay nhảy trên không",
        "Vì Vịnh Xuân dùng gậy dài",
        "Vì chỉ cần đứng yên đối phương tự ngã"
      ],
      "correctIndex": 0,
      "explanation": "Trong không gian hẹp, các đòn vung rộng (boxing, muay) bị kẹt tường vướng víu. Cú đấm thẳng trục giữa và thốn kình cự ly 1 tấc của Vịnh Xuân phát huy uy lực hủy diệt tuyệt đối."
    }
  }
];

export const SCENARIO_CATEGORIES: ScenarioCategory[] = [
  "Thượng Bàn (Đầu/Mặt)",
  "Trung Bàn (Ngực/Sườn)",
  "Hạ Bàn (Chân/Háng)",
  "Cầm Nã & Khóa Siết",
  "Tự Vệ Đường Phố & Góc Hẹp"
];
