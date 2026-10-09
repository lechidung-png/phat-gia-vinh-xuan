"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Hand,
  Footprints,
  RotateCw,
  Sparkles,
  Maximize2,
  X,
  ArrowRight,
  CheckCircle2,
  BookOpen,
} from "lucide-react";
import {
  FOOT_STANCES,
  BASIC_DRILLS,
  LEARNING_STAGES,
  SAN_SHOU_CORE_MOTO,
} from "@/data/fundamentals";

interface FundamentalAtlasProps {
  onNavigateStage?: (stageId: string) => void;
}

interface CoreHandTechnique {
  id: string;
  nameVn: string;
  nameHán: string;
  pinyin: string;
  imgUrl: string;
  instructor: string;
  source: string;
  level: string;
  shortDesc: string;
  techniqueDetail: string;
  keyPoints: string[];
  combatApplication: string;
  rhyme: string;
}

// Danh mục Thủ Pháp Chuẩn Mực dựa trên tư thế bóc tách nguyên bản từ Trang 28 & 29 Sách Gốc 2012
const CORE_HAND_POSTURES: CoreHandTechnique[] = [
  {
    id: "than-thu",
    nameVn: "Than Thủ (Tay Ngửa Xin Ăn)",
    nameHán: "攤手",
    pinyin: "Tān Shǒu",
    imgUrl: "/assets/images/fundamentals/than_thu.png",
    instructor: "Tư Thế Chuẩn Môn Phái",
    source: "Đồ Hình Bàn Tay Ngửa",
    level: "Trung Bàn (Ngang Mỏ Ác / Chấn Thủy)",
    shortDesc: "Bàn tay mở ngửa hướng lên trời, cùi chỏ ép chặt trung lộ cách ngực 1 nắm tay. Lực phát từ bả vai truyền thẳng qua cùi chỏ ra đầu ngón tay.",
    techniqueDetail: "Than thủ là thế đỡ cơ bản và quan trọng bậc nhất của Vịnh Xuân. Bàn tay mở ngửa hướng lên trời như người ăn mày ngửa tay xin ăn. Cùi chỏ ghim chặt vào trung lộ, không bao giờ nhấc bổng hay mở nách. Lực phát từ xương bả vai truyền thẳng qua cùi chỏ ra đầu ngón tay trên trục Tý Ngọ Tuyến.",
    keyPoints: [
      "Bàn tay ngửa, các ngón tay khép tự nhiên mềm mại",
      "Khuỷu tay cách mỏ ác đúng bằng 1 nắm tay (khoảng 8-10cm)",
      "Cùi chỏ nằm trên trục Tý Ngọ Tuyến, che kín mạn sườn",
      "Đứng Tấn Kiềm Dương chân hẹp để giữ vững hạ bộ",
    ],
    combatApplication: "Chuyên dùng để đỡ và nâng các đòn đấm thẳng của địch từ dưới lên, mượn lực xoay hông để làm chệch hướng đòn tấn công mà không tốn sức.",
    rhyme: "Than thủ ngửa tay cầu đón nhận • Trung tâm giữ vững chuyển ngàn cân.",
  },
  {
    id: "bang-thu",
    nameVn: "Bàng Thủ (Tay Cánh Cung Đặc Hiệu)",
    nameHán: "膀手",
    pinyin: "Bǎng Shǒu",
    imgUrl: "/assets/images/fundamentals/bang_thu.png",
    instructor: "Tư Thế Chuẩn Môn Phái",
    source: "Đồ Hình Cánh Cung",
    level: "Trung Bàn & Thượng Bàn",
    shortDesc: "Đặc hiệu của Vịnh Xuân Quyền. Cánh tay bẻ cong hình cánh cung đàn hồi, cùi chỏ ở trung lộ, cẳng và bàn tay quay sang phía bên.",
    techniqueDetail: "Bàng thủ tạo thành hình cánh cung đàn hồi tuyệt đối. Vai và tay mềm mại thả lỏng hoàn toàn. Tuyệt đối không dùng sức cơ bắp để chống cự lại lực đối thủ, mà mượn cấu trúc vòm cung và chuyển động xoay trục thân mình để trượt tiêu biến toàn bộ kình lực của địch.",
    keyPoints: [
      "Cùi chỏ nâng cao hơn cổ tay một góc tù thoải mái (khoảng 120-135 độ)",
      "Cổ tay thả lỏng, bàn tay hướng nghiêng sang bên",
      "Không chống gượng lực đối kháng mà mượn lực trượt qua cánh cung",
    ],
    combatApplication: "Hóa giải các đòn đấm vòng, móc ngang hoặc đòn đấm mạnh xộc thẳng. Sau khi trượt lực lập tức biến thành Phục thủ hoặc phóng Nhật tự quyền phản công chớp nhoáng.",
    rhyme: "Bàng thủ cánh cung tiêu kình địch • Thân xoay né đòn hóa sát chiêu.",
  },
  {
    id: "phuc-thu",
    nameVn: "Phục Thủ (Tay Úp Rủ Cổ Tay Đè Nén)",
    nameHán: "伏手",
    pinyin: "Fú Shǒu",
    imgUrl: "/assets/images/fundamentals/phuc_thu.png",
    instructor: "Tư Thế Chuẩn Môn Phái",
    source: "Đồ Hình Cổ Tay Úp",
    level: "Trung Bàn (Kiểm Soát Cổ Tay Địch)",
    shortDesc: "Cổ tay mềm mại cong rủ hình lưỡi câu, khuỷu tay ở trung lộ, lòng bàn tay úp đè cảm nhận chuyển động của địch.",
    techniqueDetail: "Phục thủ là thế tay kiểm soát trung môn siêu đẳng. Cổ tay cong mềm mại như chiếc móc câu, các ngón tay rủ nhẹ thả lỏng áp trên cẳng tay đối thủ. Khuỷu tay luôn hướng về rốn và trung lộ để truyền tải trọng lượng thân trên đè nén địch.",
    keyPoints: [
      "Cổ tay cong rủ tự nhiên, không gồng ngón tay",
      "Cùi chỏ ghim chặt vào trung tâm cơ thể",
      "Dùng độ dính (niêm) cảm nhận chuyển động của tay đối thủ",
    ],
    combatApplication: "Khống chế và đè nén cánh tay của đối phương trên trục trung tuyến, triệt tiêu mọi khả năng rút tay hoặc chuyển đòn của địch, mở đường cho đòn đánh thọc tâm.",
    rhyme: "Phục thủ móc câu đè trung lộ • Cảm nhận kình lực chế ngự địch.",
  },
  {
    id: "nhat-tu-quyen",
    nameVn: "Nắm Đấm (Nhật Tự Quyền)",
    nameHán: "日字拳",
    pinyin: "Rì Zì Quán",
    imgUrl: "/assets/images/fundamentals/nam_dam_nhat_tu_quyen.png",
    instructor: "Tư Thế Chuẩn Môn Phái",
    source: "Nắm Đấm Dựng Đứng",
    level: "Thẳng Trục Tý Ngọ Tuyến",
    shortDesc: "Nắm đấm đặt dọc hình chữ Nhật (日), ngón cái khóa bên ngoài. Đường đấm đi thẳng ngắn nhất giữa hai điểm.",
    techniqueDetail: "Khác biệt với đấm xoay ngang của Boxing hay Karate, Vịnh Xuân đấm nắm tay dọc để cùi chỏ luôn ghim sát sườn, bảo vệ sườn non và tập trung 100% lực phát dọc trục Tý Ngọ Tuyến. 3 khớp xương ngón dưới là điểm tiếp xúc chính.",
    keyPoints: [
      "Nắm đấm dựng thẳng đứng, cổ tay thẳng hàng với cẳng tay",
      "Cùi chỏ không mở bung sang hai bên (không bay chỏ)",
      "Phát lực thốn kình từ chân truyền qua eo lên đầu nắm đấm",
    ],
    combatApplication: "Đòn đánh chủ lực của Vịnh Xuân: Liên hoàn xung quyền (đấm xối xả liên tục) phá tan thế thủ của địch, dồn ép đối phương trên đường thẳng.",
    rhyme: "Nhật tự quyền thẳng đường ngắn nhất • Xuyên tâm liên hoàn địch khó dung.",
  },
  {
    id: "lien-xung-quyen",
    nameVn: "Liên Xung Quyền (Chuỗi Quyền Dọc Bắn Phá)",
    nameHán: "連衝拳",
    pinyin: "Lián Chōng Quán",
    imgUrl: "/assets/images/fundamentals/lien_xung_quyen.png",
    instructor: "Tư Thế Chuẩn Môn Phái",
    source: "Hai Nắm Đấm Luân Phiên",
    level: "Trung Bàn (Trực Diễn Trục Tý Ngọ Tuyến)",
    shortDesc: "Hai nắm đấm đặt trước ngực, đấm luân phiên liên hoàn như nòng súng liên thanh bắn phá, nắm đấm sau đẩy nắm đấm trước.",
    techniqueDetail: "Liên xung quyền là đặc sản kinh điển của Vịnh Xuân: hai nắm đấm đặt dọc nối đuôi nhau luân phiên phóng thẳng trên trục Tý Ngọ Tuyến. Tay trước đánh ra vừa chạm đích hoặc trượt thì tay sau lập tức phóng bồi, đấm liên hồi không ngắt quãng khiến đối phương không có khoảng trống để phản đòn. Lực phát thốn kình ngắn, dồn dập từ eo và trục cơ thể.",
    keyPoints: [
      "Hai nắm đấm giữ trục dọc chữ Nhật (日), cùi chỏ ghì sát sườn",
      "Đấm theo nguyên lý bánh guồng xích xe đạp: thu - phóng liên hoàn",
      "Mỗi cú đấm đều phát lực từ chân dồn lên eo và ngực",
      "Không bao giờ mở khuỷu tay sang hai bên",
    ],
    combatApplication: "Áp đảo và đánh gục đối thủ trong cận chiến. Một khi đã phá vỡ thế thủ của địch, chuỗi liên xung quyền sẽ dồn ép đối phương liên tục không thể thở hay phản kích.",
    rhyme: "Liên xung như thác đổ ngàn cân • Nối tiếp quyền phong địch bạt hồn.",
  },
  {
    id: "hoanh-thu",
    nameVn: "Hoành Thủ (Tay Chắn Ngang Song Song / Song Hoành Thủ)",
    nameHán: "橫手",
    pinyin: "Héng Shǒu",
    imgUrl: "/assets/images/fundamentals/hoanh_thu.png",
    instructor: "Tư Thế Chuẩn Môn Phái",
    source: "Đồ Hình Hai Tay Chắn Ngang",
    level: "Thượng Bàn & Trung Bàn (Song Tầng Chắn)",
    shortDesc: "Hai cánh tay đặt song song nằm ngang trước ngực và bụng. Tay trên che mỏ ác và ngực, tay dưới che rốn và hạ đan điền, cùi chỏ mở sang hai bên tạo vòm chắn vững chắc.",
    techniqueDetail: "Hoành thủ là thế thủ ngang đặc thù dùng để phong tỏa và đón đỡ các đòn đánh vòng, đòn tạt hoặc tấn công từ hai bên sườn. Hai cẳng tay đặt ngang song song tầng trên và tầng dưới tạo thành chiếc khiên kép che kín toàn bộ diện tích thân trước từ cổ họng xuống tới bụng dưới. Khớp vai và cùi chỏ giữ độ đàn hồi để phân tán chấn động.",
    keyPoints: [
      "Hai cẳng tay đặt nằm ngang song song, khoảng cách giữa 2 tay khoảng 1 gang tay",
      "Lòng bàn tay úp xuống, ngón tay khép tự nhiên",
      "Cùi chỏ mở sang hai bên tạo góc nghiêng hóa giải lực ép trực diện",
      "Kết hợp Tấn Kiềm Dương hoặc Đinh Tấn để giữ vững trụ đáy",
    ],
    combatApplication: "Chuyên phá các đòn đấm vòng (Swing/Hook), đòn đá tạt ngang sườn hoặc đón bắt vũ khí gậy ngắn. Đồng thời là thế chuyển tiếp nhanh sang đòn Song Chưởng hoặc song xung quyền.",
    rhyme: "Hoành thủ song tầng phân thượng hạ • Khiên đồng chắn sóng định càn khôn.",
  },
  {
    id: "phach-chuong",
    nameVn: "Phách Chưởng (Chưởng Bổ Từ Trên Xuống)",
    nameHán: "劈掌",
    pinyin: "Pī Zhǎng",
    imgUrl: "/assets/images/fundamentals/phach_chuong.png",
    instructor: "Tư Thế Chuẩn Môn Phái",
    source: "Đồ Hình Bàn Tay Bổ Xuống",
    level: "Thượng Bàn Sang Trung Bàn (Đòn Bổ Gia Tốc)",
    shortDesc: "Cổ tay gập chéo, lòng bàn tay phát lực chém bổ theo quỹ đạo mũi tên cong từ trên xuống dưới, lợi dụng gia tốc hạ trọng tâm.",
    techniqueDetail: "Phách chưởng là kỹ thuật phát lực chém bổ (hạ kình) sấm sét của Vịnh Xuân. Khởi phát từ trên cao, bàn tay vung chưởng bổ xuống theo đường cong mũi tên trong đồ hình. Gia tốc trọng lực kết hợp độ giật cổ tay biến cạnh dưới bàn tay thành lưỡi rìu sắc bén bổ vỡ phòng tuyến đối phương.",
    keyPoints: [
      "Quỹ đạo bàn tay di chuyển theo chiều mũi tên cong từ trên xuống dưới",
      "Điểm tiếp xúc chính là gót bàn tay (chưởng căn) hoặc cạnh bàn tay phía ngón út",
      "Kết hợp hạ trọng tâm Đan Điền để dồn toàn bộ thể trọng vào cú đánh",
      "Thu tay về trung tâm ngay lập tức sau khi tiếp xúc mục tiêu",
    ],
    combatApplication: "Đánh bổ gãy xương quai xanh (xương đòn), công phá khớp vai, đập gãy tay cầm hung khí của địch hoặc chặt bổ vào gáy trong cận chiến.",
    rhyme: "Phách chưởng sấm sét bổ không gian • Đoạt kích trung tâm địch ngã nhào.",
  },
  {
    id: "khon-thu",
    nameVn: "Khổn Thủ (Tay Trói Buộc / Song Thủ Thượng Hạ)",
    nameHán: "捆手",
    pinyin: "Kǔn Shǒu",
    imgUrl: "/assets/images/fundamentals/khon_thu.png",
    instructor: "Tư Thế Chuẩn Môn Phái",
    source: "Đồ Hình Tay Trói Buộc",
    level: "Thượng - Hạ Đồng Thời (Song Tuyến Phong Tỏa)",
    shortDesc: "Sự kết hợp hoàn hảo giữa Than Thủ (tay trên vươn xa) và Hạ Bàng Thủ (tay dưới hạ thấp). Tạo thành chiếc kìm trói chặt đường phát lực của địch.",
    techniqueDetail: "Khổn thủ (chữ Khổn nghĩa là trói buộc, trói chặt) là thế phòng thủ kép trứ danh của Vịnh Xuân. Một tay mở Than thủ vươn dài ra phía trước khống chế đòn công của địch ở vùng ngực/mặt, trong khi tay còn lại hạ thành Hạ Bàng thủ bảo vệ sườn và hạ bộ. Hai tay tạo thành một chiếc gọng kìm trói chặt đường phát lực của đối thủ từ trên xuống dưới.",
    keyPoints: [
      "Tay trên mở Than thủ ngửa tay đón đỡ trên trục Tý Ngọ Tuyến",
      "Tay dưới chúc xuống Hạ Bàng thủ che kín mạn sườn và hạ môn",
      "Thân người đứng biên thân hoặc Đinh Tấn để tạo chiều sâu phòng ngự",
      "Khớp vai thả lỏng, không gồng cứng để sẵn sàng chuyển hoán tay trên thành tay dưới và ngược lại",
    ],
    combatApplication: "Hóa giải đồng thời các đòn tấn công phối hợp của địch (ví dụ: đấm thẳng mặt kết hợp đá sườn, hoặc đấm 1-2 trên dưới). Sau khi khóa trói lực địch, lập tức biến chiêu thành đòn phản công đấm thọc hoặc triệt cước.",
    rhyme: "Khổn thủ song phong trói càn khôn • Thượng than hạ bàng địch hết đường.",
  },
  {
    id: "an-chuong",
    nameVn: "Ấn Chưởng (Chưởng Đè / Đóng Dấu Đan Điền)",
    nameHán: "印掌",
    pinyin: "Yìn Zhǎng",
    imgUrl: "/assets/images/fundamentals/an_chuong.png",
    instructor: "Tư Thế Chuẩn Môn Phái",
    source: "Đồ Hình Bàn Tay Bẻ Góc Đè Xuống",
    level: "Trung Bàn Sang Hạ Bàn (Đòn Đè Nén & Dập Tắt)",
    shortDesc: "Cẳng tay buông thẳng, cổ tay bẻ gập 90 độ, dùng gốc bàn tay (chưởng căn) phát lực đè nén xuống dưới như chiếc triện đóng dấu vững chắc.",
    techniqueDetail: "Ấn chưởng (chữ Ấn nghĩa là con dấu, đóng dấu) là đòn chưởng phát lực nén theo phương thẳng đứng từ trên ép xuống dưới. Cổ tay bẻ gập vuông góc, 5 ngón tay hướng ra trước, điểm tiếp xúc dồn toàn bộ kình lực vào gót bàn tay. Đòn thế này dùng để đè nén vũ khí, ép gãy đòn đấm tầm thấp hoặc đánh dập vào vùng hạ bộ, mỏ ác, chấn thủy của đối thủ.",
    keyPoints: [
      "Cổ tay bẻ gập 90 độ chắc chắn, không để lỏng khớp cổ tay",
      "Lực phát động tập trung vào gót bàn tay (chưởng căn)",
      "Dùng lực ép của thân trên và hơi thở Đan Điền để nhấn chưởng xuống",
      "Các ngón tay khép tự nhiên, hơi cong nhẹ che chở khớp ngón",
    ],
    combatApplication: "Đè bạt cú đấm móc bụng hoặc đòn đá hạ bàn của địch, khóa cứng cánh tay đối thủ xuống ngực khi giáp chiến tầm gần, hoặc tung đòn 'Ấn Chưởng Phá Tâm' đánh dập chấn thủy đối phương.",
    rhyme: "Ấn chưởng triện đồng đè vạn lực • Đan điền dồn kình định phong ba.",
  },
  {
    id: "phat-chuong",
    nameVn: "Phật Chưởng (Chưởng Dựng Đứng / Như Lai Phật Thủ)",
    nameHán: "佛掌",
    pinyin: "Fó Zhǎng",
    imgUrl: "/assets/images/fundamentals/phat_chuong.png",
    instructor: "Tư Thế Chuẩn Môn Phái",
    source: "Đồ Hình Bàn Tay Đứng Thẳng",
    level: "Thượng Bàn & Trung Bàn (Đòn Thẳng Xuyên Tâm & Đỡ Bạt)",
    shortDesc: "Bàn tay dựng thẳng đứng hướng lên trời, 4 ngón tay khép tự nhiên, ngón cái co gập nhẹ vào sát lòng bàn tay như thế chắp tay bái Phật. Lực phát qua chưởng căn và cạnh bàn tay.",
    techniqueDetail: "Phật chưởng là một trong những chưởng pháp tinh hoa mang đậm triết lý giải thoát và vô tranh của Phật Gia Vịnh Xuân Quyền. Khác với chưởng thông thường mở toang các ngón tay, Phật chưởng khép chặt 4 ngón vươn thẳng đứng như búp sen (hoặc lá liễu - Liễu Diệp Chưởng), ngón cái gập nép bảo vệ huyệt Hổ Khẩu. Thế tay này vừa dùng làm đòn chắn bạt trực diện dọc trục Tý Ngọ Tuyến, vừa là đòn chưởng xỉa đẩy thẳng tâm chấn vào mỏ ác, họng hoặc cằm đối thủ với kình lực xuyên thấu không cần đà.",
    keyPoints: [
      "Bốn ngón tay duỗi thẳng đứng, khép kín tự nhiên không gồng cứng",
      "Ngón tay cái gập gọn vào trong, bảo vệ huyệt Hổ Khẩu và lòng bàn tay",
      "Cổ tay dựng thẳng hoặc hơi bẻ nhẹ để định hướng lực đẩy xuyên tâm",
      "Cùi chỏ luôn ghim sát trung tâm, không vểnh nách để bảo vệ sườn non",
    ],
    combatApplication: "Dùng để bạt gạt đòn đấm thẳng của đối thủ ra khỏi trục trung lộ, đồng thời chuyển hoá lập tức thành đòn đẩy chưởng xuyên tâm (Chính diện Phật Chưởng) phá hủy chấn thủy hoặc cằm đối phương.",
    rhyme: "Phật chưởng từ bi tâm vô địch • Búp sen xuất thế phá quần ma.",
  },
  {
    id: "diep-chuong",
    nameVn: "Điệp Chưởng (Song Chưởng Cánh Bướm)",
    nameHán: "疊掌",
    pinyin: "Dié Zhǎng",
    imgUrl: "/assets/images/fundamentals/diep_chuong.png",
    instructor: "Tư Thế Chuẩn Môn Phái",
    source: "Đồ Hình Hai Bàn Tay Xếp Chồng",
    level: "Trung Bàn (Thốn Kình Cự Ly Gang Tấc)",
    shortDesc: "Hai bàn tay xòe phẳng áp sát nhau theo chiều dọc hoặc đối xứng như đôi cánh bướm chao lượn, phát lực đẩy chấn động cực mạnh ở cự ly ngắn.",
    techniqueDetail: "Điệp chưởng (chữ Điệp nghĩa là trùng điệp, xếp chồng lên nhau) là tuyệt kỹ chưởng pháp cận chiến. Hai bàn tay liên kết chặt chẽ tạo thành một diện tích tiếp xúc kép vững như tường đồng cối đá. Khi tiếp cận thân thể đối phương, hai bàn tay phát lực thốn kình đồng bộ từ đan điền, tạo ra xung lực cực lớn đánh văng hoặc làm chấn thương phủ tạng đối phương.",
    keyPoints: [
      "Hai bàn tay phối hợp nhịp nhàng, cườm tay hoặc cạnh bàn tay hỗ trợ nhau",
      "Phát lực đồng thời cả 2 tay tạo nên sức công phá cộng hưởng",
      "Áp sát cơ thể địch mới phát lực thốn kình (không vung lấy đà xa)",
      "Cùi chỏ giữ góc nêm đàn hồi bảo vệ sườn ngực",
    ],
    combatApplication: "Đòn dứt điểm sát thủ khi áp sát ngực hoặc mạng sườn địch, đẩy văng đối thủ ra xa hoặc phá hủy cấu trúc xương sườn đối phương trong thế ôm vật.",
    rhyme: "Điệp chưởng bướm lượn phát thốn kình • Cự ly gang tấc định phong lôi.",
  },
  {
    id: "khuyen-thu",
    nameVn: "Khuyên Thủ (Tay Cuộn Vòng Giải Thoát & Đỡ Bắt)",
    nameHán: "圈手",
    pinyin: "Quān Shǒu",
    imgUrl: "/assets/images/fundamentals/khuyen_thu.png",
    instructor: "Tư Thế Chuẩn Môn Phái",
    source: "Đồ Hình Cuộn Cổ Tay & Tay Dưới Ngửa",
    level: "Đa Dụng (Thoát Nã & Biến Thế)",
    shortDesc: "Tay trên cuộn tròn cổ tay hình móc câu để hóa giải đòn bám bắt (Cầm Nã), tay dưới mở ngửa vươn ra nâng đỡ và chuyển tiếp đòn công.",
    techniqueDetail: "Khuyên thủ (Khuyên nghĩa là chiếc vòng tròn, cuộn tròn) là kỹ thuật vận dụng khớp cổ tay tròn trịa mềm mại như ổ bi. Khi đối thủ nắm chặt cổ tay hoặc cẳng tay, ta không giằng co bằng sức mà lập tức thả lỏng xoay tròn cổ tay vẽ một vòng tròn nhỏ để thoát khỏi ngón tay cái yếu nhất của địch, đồng thời luồn tay sang thế công áp đảo.",
    keyPoints: [
      "Chuyển động xoay xuất phát từ khớp cổ tay, cánh tay giữ ổn định",
      "Thả lỏng tuyệt đối, không gồng cứng đối kháng lực bám của địch",
      "Vẽ vòng cung ôm sát cẳng tay đối thủ để chuyển từ bị động sang chủ động",
      "Tay dưới luôn sẵn sàng Than thủ hoặc chưởng đè hỗ trợ",
    ],
    combatApplication: "Chuyên phá các thế cầm nã, khóa cổ tay hoặc gạt đòn của địch. Ngay sau khi cuộn thoát lập tức biến thành Phục thủ đè hoặc chưởng thọc yết hầu.",
    rhyme: "Khuyên thủ cuộn tròn thoát hiểm nguy • Cổ tay linh hoạt biến khôn lường.",
  },
  {
    id: "cui-cho",
    nameVn: "Đòn Khuỷu Tay (Cùi Chỏ / Trửu Pháp)",
    nameHán: "肘法",
    pinyin: "Zhǒu Fǎ",
    imgUrl: "/assets/images/fundamentals/cui_cho.png",
    instructor: "Tư Thế Chuẩn Môn Phái",
    source: "Đồ Hình Đòn Khuỷu Tay",
    level: "Cận Chiến Tột Cùng (Vũ Khí Giáp La Cà)",
    shortDesc: "Khớp khuỷu tay bẻ gập nhọn hoắt như lưỡi rìu, bàn tay kia áp hỗ trợ gia tăng lực đẩy hoặc che chở trung môn.",
    techniqueDetail: "Trong cự ly cực gần khi không thể đấm hay đá, cùi chỏ là vũ khí tàn khốc nhất. Đầu xương khuỷu tay cứng như thép nguội, kết hợp với chuyển động vặn xoắn của toàn bộ thân người và hông biến đòn chỏ thành cú bổ sấm sét. Bàn tay còn lại đặt áp sát hỗ trợ hoặc che chắn sườn non.",
    keyPoints: [
      "Khớp cùi chỏ gập chặt tạo góc nhọn sắc bén",
      "Lực phát động từ xoay eo và gót chân, không đánh chỏ bằng sức tay đơn thuần",
      "Bàn tay thứ hai luôn thủ sát sườn hoặc áp hỗ trợ trợ lực",
      "Đánh xong lập tức thu cùi chỏ về vị trí che chở trung lộ",
    ],
    combatApplication: "Bổ chỏ xuống đỉnh đầu, giập ngang quai hàm, thúc chỏ ngược vào cằm hoặc húc chỏ ra sau khi bị đối thủ ôm khóa từ phía sau lưng.",
    rhyme: "Trửu pháp cận chiến sắc tựa gươm • Đập tan phòng tuyến phá trùng vây.",
  },
  {
    id: "ngon-tay-chi",
    nameVn: "Ngón Tay (Chỉ Pháp / Tiêu Chỉ Thọc Xuyên)",
    nameHán: "指法 / 標指",
    pinyin: "Zhǐ Fǎ",
    imgUrl: "/assets/images/fundamentals/ngon_tay_chi.png",
    instructor: "Tư Thế Chuẩn Môn Phái",
    source: "Đồ Hình Ngón Tay Thẳng",
    level: "Thượng Bàn (Điểm Huyệt & Đoạt Mệnh Tầm Xa)",
    shortDesc: "Cẳng tay chúc lên, khớp cổ tay gập 90 độ, các ngón tay duỗi phẳng ngang thành mũi giáo sắc bén thọc thẳng vào các điểm yếu hiểm.",
    techniqueDetail: "Chỉ pháp (đặc biệt trong bài Tiêu Chỉ - Ngón tay chỉ đường) là kỹ thuật thọc ngón tay tầm xa của Vịnh Xuân. Nhờ duỗi thẳng các ngón tay, tầm với của đòn đánh dài hơn cú đấm từ 8 - 12cm. Lực phát qua đầu ngón tay như mũi tên bay nhắm thẳng vào các huyệt đạo hiểm yếu như mắt, hõm cổ, họng, nách.",
    keyPoints: [
      "Bốn ngón tay khép chặt duỗi thẳng phẳng lì, ngón cái gập sát sườn bàn tay",
      "Cổ tay bẻ gập chắc chắn định hình góc thọc",
      "Đường thọc đi thẳng tắp trên trục Tý Ngọ Tuyến, cùi chỏ che ngực",
      "Rèn luyện gân ngón tay dẻo dai để tránh tổn thương khớp ngón",
    ],
    combatApplication: "Thọc mù mắt địch, đâm lõm yết hầu, chọc sườn non hoặc điểm huyệt giải vây trong tình thế ngặt nghèo (Tiêu chỉ bất xuất môn).",
    rhyme: "Tiêu chỉ xuất thế đoạt mục tiêu • Đầu ngón sắc bén phá vạn chiêu.",
  },
];

export const FundamentalHandFootAtlas: React.FC<FundamentalAtlasProps> = ({
  onNavigateStage,
}) => {
  const [activeTab, setActiveTab] = useState<"hands" | "feet" | "drills" | "scans">("hands");
  const [selectedHand, setSelectedHand] = useState<CoreHandTechnique>(CORE_HAND_POSTURES[0]);
  const [zoomImg, setZoomImg] = useState<{ src: string; title: string } | null>(null);

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      {/* 1. LỘ TRÌNH SƯ PHẠM VÕ HỌC (LEARNING ROADMAP STEPPER) */}
      <section className="glass-panel p-4 sm:p-6 border border-[#3D291F] rounded-2xl bg-gradient-to-r from-[#20150F] via-[#1A100B] to-[#20150F]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 border-b border-[#3D291F]/80 pb-4">
          <div>
            <div className="flex items-center gap-2 text-[#E2B743] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Lộ Trình Sư Phạm Võ Học Chính Tông
            </div>
            <h2 className="text-lg sm:text-xl font-bold font-serif gold-gradient">
              Trình Tự Học Võ Chuẩn Phật Gia Vịnh Xuân
            </h2>
            <p className="text-xs text-amber-200/70 mt-0.5">
              Từ Cơ Bản Công (Thủ & Cước) ➔ Bái Tổ ➔ 108 Thế Liên Hoàn ➔ Cọc Gỗ Mộc Nhân
            </p>
          </div>
          <span className="text-[11px] text-amber-300/80 bg-[#E2B743]/15 border border-[#E2B743]/30 px-3 py-1.5 rounded-full shrink-0 self-start md:self-auto">
            Lộ Trình Sư Phạm Chuẩn Mực
          </span>
        </div>

        {/* 4 Learning Stages Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {LEARNING_STAGES.map((s) => {
            const isCurrent = s.id === "fundamentals";
            return (
              <div
                key={s.id}
                onClick={() => onNavigateStage && onNavigateStage(s.id)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer relative overflow-hidden group ${
                  isCurrent
                    ? "bg-[#E2B743]/15 border-[#E2B743] shadow-lg shadow-[#E2B743]/10 ring-1 ring-[#E2B743]/40"
                    : "bg-[#180E09] border-[#3D291F] hover:border-[#E2B743]/60 hover:bg-[#20150F]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isCurrent
                        ? "bg-[#E2B743] text-[#140C08]"
                        : "bg-[#2A1C14] text-amber-200/80"
                    }`}
                  >
                    Bước {s.stage}
                  </span>
                  {isCurrent && (
                    <span className="text-[10px] font-semibold text-[#10B981] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                      Đang Học
                    </span>
                  )}
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-white group-hover:text-[#E2B743] transition-colors line-clamp-1">
                  {s.title}
                </h4>
                <p className="text-[11px] text-amber-200/70 mt-1 line-clamp-2 leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-3 flex items-center justify-end text-[10px] text-[#E2B743] font-medium gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Vào học ngay <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. KHẨU QUYẾT TAM THỦ NỔI TIẾNG */}
      <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 text-amber-300 font-serif font-black text-xl">
            手
          </div>
          <div>
            <div className="text-[11px] font-semibold tracking-wider text-amber-300 uppercase">
              Khẩu Quyết Tâm Pháp Vịnh Xuân Quyền
            </div>
            <p className="font-bold text-sm sm:text-base text-white font-serif mt-0.5">
              &quot;{SAN_SHOU_CORE_MOTO}&quot;
            </p>
          </div>
        </div>
        <div className="text-xs text-amber-200/80 font-mono shrink-0">
          Tam Thủ: Than Thủ • Bàng Thủ • Phục Thủ
        </div>
      </div>

      {/* 3. TABS CHUYÊN MỤC CƠ BẢN CÔNG */}
      <div className="flex flex-wrap gap-2 border-b border-[#3D291F] pb-3">
        <button
          onClick={() => setActiveTab("hands")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
            activeTab === "hands"
              ? "bg-[#E2B743] text-black font-bold shadow-lg shadow-[#E2B743]/20"
              : "bg-[#20150F] text-slate-300 hover:text-white border border-[#3D291F]"
          }`}
        >
          <Hand className="w-4 h-4" />
          <span>1. Thủ Pháp & Tư Thế Chuẩn</span>
        </button>

        <button
          onClick={() => setActiveTab("feet")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
            activeTab === "feet"
              ? "bg-[#E2B743] text-black font-bold shadow-lg shadow-[#E2B743]/20"
              : "bg-[#20150F] text-slate-300 hover:text-white border border-[#3D291F]"
          }`}
        >
          <Footprints className="w-4 h-4" />
          <span>2. Cước Pháp & Tấn Bộ Chuẩn</span>
        </button>

        <button
          onClick={() => setActiveTab("drills")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
            activeTab === "drills"
              ? "bg-[#E2B743] text-black font-bold shadow-lg shadow-[#E2B743]/20"
              : "bg-[#20150F] text-slate-300 hover:text-white border border-[#3D291F]"
          }`}
        >
          <RotateCw className="w-4 h-4" />
          <span>3. 4 Bài Luyện Căn Bản Hàng Ngày</span>
        </button>

        <button
          onClick={() => setActiveTab("scans")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
            activeTab === "scans"
              ? "bg-[#E2B743] text-black font-bold shadow-lg shadow-[#E2B743]/20"
              : "bg-[#20150F] text-slate-300 hover:text-white border border-[#3D291F]"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>4. Bản Vẽ Đồ Hình Gốc</span>
        </button>
      </div>

      {/* ========================================================================= */}
      {/* TAB 1: THỦ PHÁP & TƯ THẾ VÕ SƯ CHUẨN MỰC                                */}
      {/* ========================================================================= */}
      {activeTab === "hands" && (
        <div className="space-y-6">
          {/* Tam Thủ Cốt Lõi & Thế Võ Toàn Thân Chuẩn Mực */}
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-[#3D291F] space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#3D291F] pb-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold font-serif gold-gradient">
                  Thủ Pháp Chuẩn Mực &amp; Tư Thế Thị Phạm Hoàn Chỉnh
                </h3>
                <p className="text-xs text-amber-200/70">
                  Thị phạm trực tiếp chuẩn xác theo từng đồ hình giải phẫu chi trên và chi dưới
                </p>
              </div>
              <button
                onClick={() =>
                  setZoomImg({
                    src: "/assets/images/fundamentals/anatomy_hand.png",
                    title: "Đồ Hình Giải Phẫu: Tên Gọi Các Phần Của Tay",
                  })
                }
                className="self-start sm:self-auto text-xs px-3 py-1.5 rounded-xl bg-[#2A0E0A] border border-[#F5D06C]/30 text-[#F5D06C] hover:border-[#F5D06C] flex items-center gap-1.5 transition cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Xem Sơ Đồ Tên Gọi Các Phần Của Tay</span>
              </button>
            </div>

            {/* Selector Buttons for Core Postures (14 thế) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2.5">
              {CORE_HAND_POSTURES.map((p) => {
                const isSelected = selectedHand.id === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedHand(p)}
                    className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? "bg-[#E2B743] text-black border-[#E2B743] font-bold shadow-lg shadow-[#E2B743]/20"
                        : "bg-[#20150F] text-slate-300 border-[#3D291F] hover:border-[#E2B743]/50 hover:bg-[#2A1C14]"
                    }`}
                  >
                    <div>
                      <span className={`text-[10px] font-mono uppercase tracking-wider block ${isSelected ? "text-amber-950 font-bold" : "text-[#E2B743]"}`}>
                        {p.nameHán} • {p.pinyin}
                      </span>
                      <h4 className={`text-xs sm:text-sm font-bold mt-0.5 ${isSelected ? "text-black" : "text-white"}`}>
                        {p.nameVn.split(" (")[0]}
                      </h4>
                    </div>
                    <span className={`text-[10px] mt-2 block ${isSelected ? "text-amber-950" : "text-slate-400"}`}>
                      {p.level.split(" (")[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Detailed Display of Selected Hand Posture */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-5 rounded-2xl bg-[#180E09] border border-[#3D291F]">
              {/* Left 5 Cols: Full Posture Photo */}
              <div className="md:col-span-5 flex flex-col items-center">
                <div
                  onClick={() =>
                    setZoomImg({
                      src: selectedHand.imgUrl,
                      title: `${selectedHand.nameVn} - ${selectedHand.instructor}`,
                    })
                  }
                  className="relative w-full max-w-[260px] aspect-[3/4] bg-white rounded-2xl overflow-hidden p-3 border-2 border-slate-300 shadow-xl cursor-zoom-in group flex items-center justify-center"
                >
                  <Image
                    src={selectedHand.imgUrl}
                    alt={selectedHand.nameVn}
                    fill
                    className="object-contain p-2"
                  />
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-white text-[10px] font-mono flex items-center gap-1 opacity-80 group-hover:opacity-100 transition shadow">
                    <Maximize2 className="w-3 h-3 text-[#E2B743]" /> Phóng to
                  </div>
                </div>
                <div className="mt-2 text-center text-[11px] text-slate-400 font-mono">
                  {selectedHand.instructor} • {selectedHand.source}
                </div>
              </div>

              {/* Right 7 Cols: Martial Breakdown */}
              <div className="md:col-span-7 space-y-3.5 text-xs sm:text-sm">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#E2B743]/20 text-[#E2B743] font-bold">
                      {selectedHand.nameHán}
                    </span>
                    <span className="text-xs text-amber-200/80 font-mono">
                      Vị trí: {selectedHand.level}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-serif text-white">
                    {selectedHand.nameVn}
                  </h3>
                  <p className="text-xs text-slate-300 italic mt-0.5">
                    &quot;{selectedHand.rhyme}&quot;
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#20150F] border border-[#3D291F] space-y-1.5">
                  <strong className="text-[#E2B743] text-xs uppercase tracking-wider block">
                    Yếu Lĩnh Thân Pháp & Giải Phẫu:
                  </strong>
                  <p className="text-slate-200 text-xs leading-relaxed">
                    {selectedHand.techniqueDetail}
                  </p>
                </div>

                <div>
                  <strong className="text-[#10B981] text-xs uppercase tracking-wider block mb-1.5">
                    3 Điểm Cốt Tử Cần Lưu Ý:
                  </strong>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {selectedHand.keyPoints.map((kp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{kp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200">
                  <strong className="text-amber-300 block mb-0.5">Ứng Dụng Thực Chiến:</strong>
                  {selectedHand.combatApplication}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: CƯỚC PHÁP & TẤN BỘ CHUẨN */}
      {activeTab === "feet" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FOOT_STANCES.map((stance) => {
              return (
                <div
                  key={stance.id}
                  className="glass-panel p-5 rounded-2xl border border-[#3D291F] hover:border-[#E2B743]/50 transition flex flex-col justify-between space-y-4 shadow-xl"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#E2B743] bg-[#E2B743]/15 px-2.5 py-0.5 rounded border border-[#E2B743]/30">
                        {stance.nameHán}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">
                        {stance.category}
                      </span>
                    </div>

                    <div
                      onClick={() =>
                        setZoomImg({
                          src: stance.imgUrl,
                          title: stance.nameVn,
                        })
                      }
                      className="relative w-full aspect-[3/4] bg-white rounded-xl overflow-hidden p-2 border border-slate-300 cursor-zoom-in group flex items-center justify-center shadow-inner hover:border-[#E2B743] transition"
                    >
                      <Image
                        src={stance.imgUrl}
                        alt={stance.nameVn}
                        fill
                        className="object-contain p-1 group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-white text-[10px] font-mono flex items-center gap-1 opacity-80 group-hover:opacity-100 transition shadow border border-white/20">
                        <Maximize2 className="w-3 h-3 text-[#E2B743]" /> Phóng to
                      </div>
                    </div>

                    <h4 className="font-bold text-sm sm:text-base text-white font-serif">
                      {stance.nameVn}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {stance.shortDesc}
                    </p>
                  </div>

                  <div className="space-y-2 text-xs border-t border-[#3D291F] pt-3">
                    <strong className="text-[#10B981] block">Yếu Lĩnh Tấn Pháp:</strong>
                    <ul className="space-y-1 text-slate-300">
                      {stance.keyPoints.slice(0, 3).map((kp, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-[#10B981] shrink-0 mt-0.5" />
                          <span>{kp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: 4 BÀI LUYỆN CĂN BẢN */}
      {activeTab === "drills" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {BASIC_DRILLS.map((drill) => (
            <div
              key={drill.id}
              className="glass-panel p-5 sm:p-6 rounded-2xl border border-[#3D291F] space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-[#E2B743] bg-[#E2B743]/15 px-2.5 py-0.5 rounded">
                  Bài Luyện {drill.number}/4
                </span>
                <span className="text-xs text-amber-200/70 font-mono">{drill.repetition}</span>
              </div>
              <h4 className="text-base sm:text-lg font-bold font-serif text-white">
                {drill.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {drill.purpose}
              </p>

              <div className="space-y-1.5 pt-2 border-t border-[#3D291F]">
                <strong className="text-[#10B981] text-xs block">Các Bước Thực Hiện:</strong>
                <ul className="space-y-1 text-xs text-slate-300">
                  {drill.instructions.map((st, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#E2B743]/20 text-[#E2B743] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{st}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 italic">
                <strong className="text-[#E2B743] not-italic">Võ Lý:</strong> {drill.martialPrinciple}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: ẢNH TƯ LIỆU ĐỒ HÌNH GỐC */}
      {activeTab === "scans" && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              onClick={() =>
                setZoomImg({
                  src: "/assets/images/fundamentals/page_028_authentic.png",
                  title: "Đồ Hình 1: Kỹ Thuật Cơ Bản - Chi Trên",
                })
              }
              className="glass-panel p-4 rounded-2xl border border-[#3D291F] cursor-zoom-in group flex flex-col items-center"
            >
              <div className="relative w-full h-[480px] bg-white rounded-xl overflow-hidden p-2 border border-slate-300">
                <Image
                  src="/assets/images/fundamentals/page_028_authentic.png"
                  alt="Đồ Hình 1"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs text-slate-300 mt-2 font-mono">
                Đồ Hình 1: Kỹ Thuật Cơ Bản - Chi Trên (Click để phóng to)
              </span>
            </div>

            <div
              onClick={() =>
                setZoomImg({
                  src: "/assets/images/fundamentals/page_029_authentic.png",
                  title: "Đồ Hình 2: Kỹ Thuật Cơ Bản - Chi Dưới & Cước Bộ",
                })
              }
              className="glass-panel p-4 rounded-2xl border border-[#3D291F] cursor-zoom-in group flex flex-col items-center"
            >
              <div className="relative w-full h-[480px] bg-white rounded-xl overflow-hidden p-2 border border-slate-300">
                <Image
                  src="/assets/images/fundamentals/page_029_authentic.png"
                  alt="Đồ Hình 2"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs text-slate-300 mt-2 font-mono">
                Đồ Hình 2: Kỹ Thuật Cơ Bản - Chi Dưới & Cước Bộ (Click để phóng to)
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Modal Phóng To Ảnh Lightbox */}
      {zoomImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setZoomImg(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] bg-white rounded-3xl p-4 sm:p-6 shadow-2xl flex flex-col items-center border-2 border-[#E2B743]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoomImg(null)}
              className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-xl border-2 border-white transition"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full h-[70vh] sm:h-[80vh]">
              <Image
                src={zoomImg.src}
                alt={zoomImg.title}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-3 text-center text-xs text-slate-700 font-mono font-bold">
              {zoomImg.title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
