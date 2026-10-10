"use client";

import React, { useState, useEffect } from "react";
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
  Flower2,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  Eye,
  Compass,
  BookOpen,
} from "lucide-react";
import {
  FOOT_STANCES,
  BASIC_DRILLS,
  LEARNING_STAGES,
  SAN_SHOU_CORE_MOTO,
} from "@/data/fundamentals";
import { CenterlineExplorer } from "@/components/CenterlineExplorer";
import { KnowledgeHub } from "@/components/KnowledgeHub";

export type FundamentalSubTab = "hands" | "feet" | "bai-to" | "drills" | "centerline" | "theory";

interface FundamentalAtlasProps {
  onNavigateStage?: (stageId: string) => void;
  initialSubTab?: FundamentalSubTab;
}

export interface BaiToStep {
  stepNo: number;
  title: string;
  nameHán: string;
  desc: string;
  imgUrl: string;
  keypoints: string[];
  postureDetail: string;
  principle: string;
}

export const BAI_TO_STEPS: BaiToStep[] = [
  {
    stepNo: 1,
    title: "Bước 1: Khởi Thế Thu Quyền Dưới Nách",
    nameHán: "雙拳收腋",
    desc: "Hai chân khép sát cạnh nhau, hai tay thu quyền dưới nách.",
    imgUrl: "/assets/images/techniques/bai_to/bai_to_1.png",
    keypoints: [
      "Hai chân khép sát song song, đứng thẳng tự nhiên",
      "Hai nắm đấm dựng ngửa thu sát hốc nách, cùi chỏ ghì sát sườn",
      "Mắt nhìn thẳng trên trục Tý Ngọ Tuyến, tĩnh tâm tụ khí"
    ],
    postureDetail: "Đứng nghiêm trang, đầu đỉnh thiên, cằm hơi thu, ngực hàm lưng thẳng. Hai bàn tay nắm chặt dựng đứng dưới hai bên nách, mu bàn tay úp xuống dưới, lòng bàn tay hướng lên trời. Giữ nhịp thở điều hòa tại Đan Điền.",
    principle: "Tĩnh như sơn nhạc, ngưng thần định khí chuẩn bị khai môn."
  },
  {
    stepNo: 2,
    title: "Bước 2: Tả Thủ Dựng Chưởng Cạnh Nách",
    nameHán: "左立掌",
    desc: "Tay trái chuyển thành chưởng dựng cạnh nách trái.",
    imgUrl: "/assets/images/techniques/bai_to/bai_to_2.png",
    keypoints: [
      "Tay trái mở chưởng dựng đứng cạnh nách trái",
      "Bốn ngón tay khép kín vươn thẳng, ngón cái gập sát lòng bàn tay",
      "Tay phải giữ nguyên thế quyền dưới nách phải"
    ],
    postureDetail: "Bàn tay trái mở ra thành Phật chưởng dựng đứng song song với thân người, các ngón tay khép kín chỉ thiên. Cùi chỏ ghim sát sườn bảo vệ mạn sườn trái.",
    principle: "Khai mở chưởng pháp bên trái, tượng trưng cho Văn đức và Từ bi."
  },
  {
    stepNo: 3,
    title: "Bước 3: Chưởng Quyền Tương Khắc (Hữu Quyền Vào Tả Chưởng)",
    nameHán: "掌拳相合",
    desc: "Chuyển quyền phải đến tay chưởng trái.",
    imgUrl: "/assets/images/techniques/bai_to/bai_to_3.png",
    keypoints: [
      "Quyền phải đưa vào giữa lòng chưởng trái",
      "Tạo thế Bái Tổ Chưởng Quyền Tương Hợp",
      "Hai cùi chỏ vẫn ép sát thân người"
    ],
    postureDetail: "Đưa nắm đấm phải sang áp sát vào lòng bàn tay trái đang dựng đứng cạnh nách trái. Hai tay liên kết nhịp nhàng tạo thành cấu trúc bảo vệ mạn sườn trái.",
    principle: "Quyền là Võ, Chưởng là Văn — Văn Võ song toàn, âm dương hòa hợp."
  },
  {
    stepNo: 4,
    title: "Bước 4: Định Khí Quy Tâm (Chuyển Song Thủ Về Trung Tuyến)",
    nameHán: "歸心正中",
    desc: "Chuyển hai tay đến điểm giữa, ngang ngực.",
    imgUrl: "/assets/images/techniques/bai_to/bai_to_4.png",
    keypoints: [
      "Hai tay đưa về chính diện trục Tý Ngọ Tuyến",
      "Vị trí ngang mỏ ác / chấn thủy (mức trung bình)",
      "Cùi chỏ che kín ngực, tụ khí Đan Điền"
    ],
    postureDetail: "Di chuyển liên hợp chưởng quyền từ nách trái sang chính giữa trục trung tâm cơ thể, ngang mức chấn thủy. Hai cổ tay liên kết vững vàng trước ngực, mắt nhìn thẳng qua điểm tiếp xúc.",
    principle: "Trực chỉ trung tuyến, quy tâm định ý trước bàn thờ Sư Tổ."
  },
  {
    stepNo: 5,
    title: "Bước 5: Song Chưởng Tiêu Phong (Phóng Chưởng Thẳng Trục Trung Tuyến)",
    nameHán: "雙掌前推",
    desc: "Chuyển hai tay thành chưởng đưa thẳng ra trước.",
    imgUrl: "/assets/images/techniques/bai_to/bai_to_5.png",
    keypoints: [
      "Hai tay mở song chưởng phóng thẳng dọc trục trung tuyến",
      "Mũi tay hướng lên trời, hai cổ tay cách nhau gang tấc",
      "Cùi chỏ hướng vào trong, không bạnh ra ngoài"
    ],
    postureDetail: "Từ vị trí ngang ngực, mở nắm đấm phải thành chưởng đồng thời phóng thẳng cả hai bàn tay ra trước mặt dọc theo trục Tý Ngọ Tuyến. Hai lòng bàn tay hướng về phía trước, cẳng tay duỗi thẳng nhưng khớp khuỷu vẫn giữ độ nêm đàn hồi.",
    principle: "Hưng hóa võ đạo, phóng kình bái tạ công đức tiền nhân."
  },
  {
    stepNo: 6,
    title: "Bước 6: Khuyên Thủ Luân Chuyển (Gập & Xoay Hai Cổ Tay)",
    nameHán: "圈手旋腕",
    desc: "Gập và xoay hai cổ tay.",
    imgUrl: "/assets/images/techniques/bai_to/bai_to_6.png",
    keypoints: [
      "Khớp cổ tay xoay tròn vẽ vòng khép kín",
      "Mở rộng biên độ ổ bi cổ tay (Hóa kình)",
      "Cánh tay giữ nguyên trục trung tâm"
    ],
    postureDetail: "Hai cổ tay mềm mại gập xuống rồi xoay tròn từ trong ra ngoài (Khuyên thủ). Chuyển động xoay mượt mà như ổ bi có dầu bôi trơn, kích hoạt toàn bộ các kinh lạc kinh thủ thái âm phế và thủ thiếu âm tâm chạy qua cổ tay.",
    principle: "Hóa cương vi nhu, xoay chuyển càn khôn, thông đạt kinh mạch."
  },
  {
    stepNo: 7,
    title: "Bước 7: Thu Kình Thành Quyền (Nắm Chặt Hai Tay)",
    nameHán: "握拳聚勁",
    desc: "Chuyển thành hai quyền.",
    imgUrl: "/assets/images/techniques/bai_to/bai_to_7.png",
    keypoints: [
      "Cuộn từng ngón tay nắm chặt thành hai quyền",
      "Lực nắm dồn từ ngón út đến ngón cái",
      "Kéo lực và tập trung kình về trung tâm"
    ],
    postureDetail: "Sau khi hoàn tất vòng xoay cổ tay, các ngón tay lần lượt cuộn chặt lại thành hai nắm đấm dựng đứng (Nhật tự quyền). Cổ tay thẳng hàng với cẳng tay, định hình kình lực sẵn sàng thu hồi.",
    principle: "Nắm giữ tinh khí, tụ lực về nguồn."
  },
  {
    stepNo: 8,
    title: "Bước 8: Thu Quyền Sát Nách (Hồi Kình Bảo Vệ Mạn Sườn)",
    nameHán: "雙拳收回",
    desc: "Thu quyền về sát nách.",
    imgUrl: "/assets/images/techniques/bai_to/bai_to_8.png",
    keypoints: [
      "Thu dứt khoát hai nắm đấm về sát nách",
      "Cùi chỏ ép chặt ra sau bảo vệ sườn non",
      "Ngực hơi hàm, lưng thẳng, hơi thở chìm xuống rốn"
    ],
    postureDetail: "Dùng lực cơ lưng và bả vai rút nhanh hai nắm đấm về vị trí hốc nách ban đầu. Hai khuỷu tay ép chặt sát vào hai bên mạng sườn, mở rộng lồng ngực nhưng không ưỡn bụng.",
    principle: "Súc kình đãi phát, kín kẽ như tường đồng vách sắt."
  },
  {
    stepNo: 9,
    title: "Bước 9: Khai Mở Nhị Tự Kiềm Dương Tấn (Định Tấn Nhập Môn)",
    nameHán: "二字鉗羊馬",
    desc: "Mở hai mũi chân cách nhau 1 bàn chân, rồi mở hai gót chân rộng bằng 2 bàn chân, hạ trọng tâm thành thế Nhị tự kiềm dương mã.",
    imgUrl: "/assets/images/techniques/bai_to/bai_to_9.png",
    keypoints: [
      "Mở mũi chân 1 bàn chân (hình chữ Bát)",
      "Mở tiếp hai gót chân rộng bằng 2 bàn chân",
      "Hai đầu gối khép chụm che kín hạ bộ, ngón chân bấu sàn",
      "Hạ trọng tâm Đan Điền, hoàn thành thế Tấn Kiềm Dương chuẩn mực"
    ],
    postureDetail: "Từ thế đứng chân khép sát: trước tiên tách hai mũi chân sang hai bên một góc khoảng 60 độ (bằng 1 bàn chân). Tiếp theo, lấy hai ức bàn chân làm trụ xoay mở hai gót chân ra ngoài để hai mép ngoài bàn chân song song (hoặc hơi khép hình chữ Nhị 二, rộng bằng 2 bàn chân). Hạ nhẹ khớp gối, khép hai đầu gối hướng vào trong để che kín hạ bộ, xương cụt hơi thu vào trong, cột sống thẳng tắp.",
    principle: "Hạ bàn kiên cố, tam giác sinh lực vững như bàn thạch, chính thức bước vào quyền phổ."
  }
];

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
    nameVn: "Than Thủ (Tay Ngửa)",
    nameHán: "攤手",
    pinyin: "Tān Shǒu",
    imgUrl: "/assets/images/fundamentals/than_thu.png",
    instructor: "Tư Thế Chuẩn Môn Phái",
    source: "Đồ Hình Bàn Tay Ngửa",
    level: "Trung Bàn (Ngang Mỏ Ác / Chấn Thủy)",
    shortDesc: "Bàn tay mở ngửa hướng lên trời, cùi chỏ ép chặt trung lộ cách ngực 1 nắm tay. Lực phát từ bả vai truyền thẳng qua cùi chỏ ra đầu ngón tay.",
    techniqueDetail: "Than thủ là thế đỡ cơ bản và quan trọng bậc nhất của Vịnh Xuân. Bàn tay mở ngửa hướng lên trời, các ngón tay duỗi thẳng tự nhiên mềm mại. Cùi chỏ ghim chặt vào trung lộ, không bao giờ nhấc bổng hay mở nách. Lực phát từ xương bả vai truyền thẳng qua cùi chỏ ra đầu ngón tay trên trục Tý Ngọ Tuyến.",
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
    rhyme: "Bàng thủ cánh cung tiêu kình địch • Thân xoay né đòn hóa thế nguy.",
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
    shortDesc: "Sự phối hợp nhịp nhàng giữa Than Thủ (tay trên vươn xa) và Hạ Bàng Thủ (tay dưới hạ thấp). Tạo thành chiếc kìm trói chặt đường phát lực của địch.",
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
    combatApplication: "Dùng để bạt gạt đòn đấm thẳng của đối thủ ra khỏi trục trung lộ, đồng thời chuyển hoá lập tức thành đòn đẩy chưởng xuyên tâm (Chính diện Phật Chưởng) tác động vào chấn thủy hoặc cằm đối phương.",
    rhyme: "Phật chưởng từ bi tâm thanh tịnh • Búp sen xuất thế hóa kình hung.",
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
    shortDesc: "Hai bàn tay xòe phẳng áp sát nhau theo chiều dọc hoặc đối xứng như đôi cánh bướm chao lượn, phát lực đẩy chấn động hiệu quả ở cự ly ngắn.",
    techniqueDetail: "Điệp chưởng (chữ Điệp nghĩa là trùng điệp, xếp chồng lên nhau) là kỹ pháp chưởng pháp cận chiến. Hai bàn tay liên kết chặt chẽ tạo thành một diện tích tiếp xúc kép vững chắc. Khi tiếp cận thân thể đối phương, hai bàn tay phát lực thốn kình đồng bộ từ đan điền, tạo ra xung lực lớn đẩy lùi hoặc hóa giải thế áp sát của đối phương.",
    keyPoints: [
      "Hai bàn tay phối hợp nhịp nhàng, cườm tay hoặc cạnh bàn tay hỗ trợ nhau",
      "Phát lực đồng thời cả 2 tay tạo nên sức công phá cộng hưởng",
      "Áp sát cơ thể địch mới phát lực thốn kình (không vung lấy đà xa)",
      "Cùi chỏ giữ góc nêm đàn hồi bảo vệ sườn ngực",
    ],
    combatApplication: "Đòn đánh cận chiến khi áp sát ngực hoặc mạng sườn địch, đẩy bật đối thủ ra xa hoặc hóa giải trong thế ôm vật.",
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

const DRILL_IMAGE_METADATA: Record<
  string,
  { key: string; label: string; src: string; desc: string; isDiagram?: boolean }[]
> = {
  "drill-quay-tay": [
    {
      key: "masterPosture",
      label: "Võ Sư Thị Phạm",
      src: "/assets/hinh-2x/p032-h01.png",
      desc: "Võ sư thị phạm đứng thế Tấn Kiềm Dương tay trái thu nách, tay phải xuất Than thủ quay cổ tay."
    },
    {
      key: "cycle1Diagram",
      label: "Chu Kỳ 1 (Ngửa Than Thủ B-M-A-N-B)",
      src: "/assets/hinh-2x/p032-h02.png",
      desc: "Đồ hình quay cổ tay chu kỳ 1: Than thủ ngửa tay, ngón tay từ tâm O ra điểm B, xoay ngược kim đồng hồ B-M-A-N-B rồi lật úp đánh sang A.",
      isDiagram: true
    },
    {
      key: "cycle2Diagram",
      label: "Chu Kỳ 2 (Úp Phục Thủ A-M-B-N-A)",
      src: "/assets/hinh-2x/p032-h03.png",
      desc: "Đồ hình quay cổ tay chu kỳ 2: Phục thủ úp tay, xoay xuôi kim đồng hồ A-M-B-N-A, tại A lật ngửa đánh sang B trở về xuất phát.",
      isDiagram: true
    },
    {
      key: "fullStepsGuide",
      label: "Bảng 8 Bước Toàn Thể",
      src: "/assets/hinh-2x/p033-h01.png",
      desc: "Bảng đồ hình toàn thể 8 bước chi tiết từ thế 1.1 đến 1.8 của bài tập xoay cổ tay.",
      isDiagram: true
    }
  ],
  "drill-quay-nguoi": [
    {
      key: "turnLeftMaster",
      label: "Quay Người Sang Trái",
      src: "/assets/hinh-2x/p033-h02.png",
      desc: "Võ sư quay người sang trái 90 độ, hai bàn chân song song cách nhau một bàn chân, vai phải hướng trước (biên thân)."
    },
    {
      key: "turnRightMaster",
      label: "Quay Người Sang Phải",
      src: "/assets/hinh-2x/p033-h03.png",
      desc: "Võ sư quay người sang phải 90 độ, đưa vai trái và chân trái ra trước thành thế biên thân né đòn."
    },
    {
      key: "hoanhThoaiDiagram",
      label: "Sơ Đồ Hoành Thoái 90°",
      src: "/assets/hinh-2x/p034-h02.png",
      desc: "Sơ đồ chuyển hướng chân 90 độ hoành thoái né đòn trên trục Tý Ngọ Tuyến.",
      isDiagram: true
    },
    {
      key: "hoanhThoai270Diagram",
      label: "Sơ Đồ Hoành Thoái 270°",
      src: "/assets/hinh-2x/p034-h03.png",
      desc: "Sơ đồ hoành thoái 270 độ theo chiều kim đồng hồ, hoán chuyển vị trí né đòn trực diện.",
      isDiagram: true
    }
  ],
  "drill-di-chuyen": [
    {
      key: "centerlineStepsDiagram",
      label: "Vị Trí Ban Đầu (Trục Tý Ngọ Tuyến A-B)",
      src: "/assets/hinh-2x/p034-h01.png",
      desc: "Sơ đồ vị trí hai bàn chân đứng theo Nhị Tự Kiềm Dương Tấn trên trục Tý Ngọ Tuyến A-B.",
      isDiagram: true
    },
    {
      key: "advanceRetreatDiagram",
      label: "Cách Di Chuyển Chân (Tiến, Lùi Tuyến Tính)",
      src: "/assets/hinh-2x/p035-h01.png",
      desc: "Sơ đồ cách di chuyển chân tiến, lùi trên trục Tý Ngọ Tuyến: tiến chân trước bước trước, chân sau theo sau; lùi chân sau bước trước, chân trước theo sau.",
      isDiagram: true
    },
    {
      key: "footworkCurveDiagram",
      label: "Cách Di Chuyển Chân (Đạp Cung & Chuyển Hướng)",
      src: "/assets/hinh-2x/p035-h02.png",
      desc: "Sơ đồ vị trí các bước chân di chuyển tiến, lùi né đòn, đạp cung trung và chuyển dịch góc độ bảo toàn trọng tâm.",
      isDiagram: true
    }
  ],
  "drill-linh-giac": [
    {
      key: "niemThuMasterImg",
      label: "Thị Phạm Niêm Thủ Linh Giác",
      src: "/assets/hinh-2x/p146-h01.png",
      desc: "GS.TS Nguyễn Mạnh Nhâm và môn sinh thị phạm Niêm Thủ Linh Giác tiếp xúc cẳng tay, rèn luyện thính kình cảm ứng lực."
    },
    {
      key: "reflexDiagram",
      label: "Sơ Đồ Phản Xạ Cảm Ứng Xúc Giác",
      src: "/assets/hinh-2x/p147-h01.png",
      desc: "Sơ đồ cung phản xạ tủy sống: Cảm nhận xung lực tiếp xúc qua da thịt ➔ Kích hoạt phản xạ tức thì, bỏ qua xử lý nhận thức chậm trễ của não bộ.",
      isDiagram: true
    },
    {
      key: "niemThuMasterPartner",
      label: "Tập Niêm Thủ Với Sư Phụ",
      src: "/assets/hinh-2x/p148-h01.png",
      desc: "Võ sư tập Niêm Thủ Linh Giác với Sư phụ, thực hành nguyên lý tri bỉ tri kỷ, lai lưu khứ tống."
    }
  ]
};

export const FundamentalHandFootAtlas: React.FC<FundamentalAtlasProps> = ({
  onNavigateStage,
  initialSubTab,
}) => {
  const [activeTab, setActiveTab] = useState<FundamentalSubTab>(initialSubTab || "hands");
  const [selectedHand, setSelectedHand] = useState<CoreHandTechnique>(CORE_HAND_POSTURES[0]);
  const [baiToStepIndex, setBaiToStepIndex] = useState<number>(0);
  const [baiToViewMode, setBaiToViewMode] = useState<"player" | "grid">("player");
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(false);
  const [zoomImg, setZoomImg] = useState<{ src: string; title: string } | null>(null);

  // States cho Tab 4 Bài Luyện Căn Bản
  const [activeDrillIndex, setActiveDrillIndex] = useState<number>(0);
  const [selectedDrillImgKey, setSelectedDrillImgKey] = useState<Record<string, string>>({
    "drill-quay-tay": "masterPosture",
    "drill-quay-nguoi": "turnLeftMaster",
    "drill-di-chuyen": "centerlineStepsDiagram",
    "drill-linh-giac": "niemThuMasterImg",
  });
  const [drillsViewMode, setDrillsViewMode] = useState<"detail" | "grid">("detail");
  const touchStartX = React.useRef<number | null>(null);
  const touchStartY = React.useRef<number | null>(null);

  // Đồng bộ initialSubTab khi có thay đổi từ bên ngoài
  useEffect(() => {
    if (initialSubTab) {
      setActiveTab(initialSubTab);
    }
  }, [initialSubTab]);

  // Tự động phát trình chiếu các bước Bái Tổ khi bật auto-play
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoPlaying && activeTab === "bai-to" && baiToViewMode === "player") {
      timer = setInterval(() => {
        setBaiToStepIndex((prev) => (prev < BAI_TO_STEPS.length - 1 ? prev + 1 : 0));
      }, 3000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isAutoPlaying, activeTab, baiToViewMode]);

  // Lắng nghe phím Escape để đóng Lightbox modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomImg(null);
    };
    if (zoomImg) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomImg]);

  const currentBaiToStep = BAI_TO_STEPS[baiToStepIndex] || BAI_TO_STEPS[0];

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      {/* 1. LỘ TRÌNH SƯ PHẠM VÕ HỌC (LEARNING ROADMAP STEPPER) */}
      <section className="glass-panel p-4 sm:p-6 border border-[#3D291F] rounded-2xl bg-gradient-to-r from-[#20150F] via-[#1A100B] to-[#20150F]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5 border-b border-[#3D291F]/80 pb-4">
          <div>
            <div className="flex items-center gap-2 text-[#E2B743] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Lộ Trình Sư Phạm Võ Học Truyền Thống
            </div>
            <h2 className="text-lg sm:text-xl font-bold font-serif gold-gradient">
              Trình Tự Học Võ Chuẩn Phật Gia Vịnh Xuân (Theo Giáo Trình)
            </h2>
            <p className="text-xs text-amber-200/70 mt-0.5">
              Từ Cơ Bản & Bái Tổ ➔ Tam Đại Quyền ➔ 108 Thế Liên Hoàn ➔ Mộc Nhân ➔ Ngũ Hình & Binh Khí
            </p>
          </div>
          <span className="text-[11px] text-amber-300/80 bg-[#E2B743]/15 border border-[#E2B743]/30 px-3 py-1.5 rounded-full shrink-0 self-start md:self-auto">
            Lộ Trình 5 Chặng Chuẩn Mực
          </span>
        </div>

        {/* 5 Learning Stages Stepper */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {LEARNING_STAGES.map((s) => {
            const isCurrent = s.id === "fundamentals";
            return (
              <div
                key={s.id}
                onClick={() => {
                  if (s.id === "fundamentals") {
                    setActiveTab("hands");
                    onNavigateStage?.("fundamentals");
                  } else {
                    onNavigateStage?.(s.id);
                  }
                }}
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
                    Chặng {s.stage}
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
      <div className="flex flex-wrap gap-1.5 sm:gap-2 border-b border-[#3D291F] pb-3">
        <button
          onClick={() => setActiveTab("hands")}
          className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer ${
            activeTab === "hands"
              ? "bg-[#E2B743] text-black font-bold shadow-lg shadow-[#E2B743]/20"
              : "bg-[#20150F] text-slate-300 hover:text-white border border-[#3D291F]"
          }`}
        >
          <Hand className="w-4 h-4" />
          <span>1. Thủ Pháp</span>
        </button>

        <button
          onClick={() => setActiveTab("feet")}
          className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer ${
            activeTab === "feet"
              ? "bg-[#E2B743] text-black font-bold shadow-lg shadow-[#E2B743]/20"
              : "bg-[#20150F] text-slate-300 hover:text-white border border-[#3D291F]"
          }`}
        >
          <Footprints className="w-4 h-4" />
          <span className="hidden sm:inline">2. Cước Pháp (8 Thế)</span>
          <span className="sm:hidden">2. Cước Pháp (8)</span>
        </button>

        <button
          onClick={() => setActiveTab("bai-to")}
          className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer ${
            activeTab === "bai-to"
              ? "bg-[#E2B743] text-black font-bold shadow-lg shadow-[#E2B743]/20"
              : "bg-[#20150F] text-slate-300 hover:text-white border border-[#3D291F]"
          }`}
        >
          <Flower2 className="w-4 h-4" />
          <span className="hidden sm:inline">3. Bái Tổ (9 Bước)</span>
          <span className="sm:hidden">3. Bái Tổ (9)</span>
        </button>

        <button
          onClick={() => setActiveTab("drills")}
          className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer ${
            activeTab === "drills"
              ? "bg-[#E2B743] text-black font-bold shadow-lg shadow-[#E2B743]/20"
              : "bg-[#20150F] text-slate-300 hover:text-white border border-[#3D291F]"
          }`}
        >
          <RotateCw className="w-4 h-4" />
          <span className="hidden sm:inline">4. Bài Luyện Căn Bản</span>
          <span className="sm:hidden">4. Bài Luyện</span>
        </button>

        <button
          onClick={() => setActiveTab("centerline")}
          className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer ${
            activeTab === "centerline"
              ? "bg-[#E2B743] text-black font-bold shadow-lg shadow-[#E2B743]/20"
              : "bg-[#20150F] text-slate-300 hover:text-white border border-[#3D291F]"
          }`}
        >
          <Compass className="w-4 h-4" />
          <span className="hidden sm:inline">5. Trục Tý Ngọ Tuyến</span>
          <span className="sm:hidden">5. Trục Tý Ngọ</span>
        </button>

        <button
          onClick={() => setActiveTab("theory")}
          className={`px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer ${
            activeTab === "theory"
              ? "bg-[#E2B743] text-black font-bold shadow-lg shadow-[#E2B743]/20"
              : "bg-[#20150F] text-slate-300 hover:text-white border border-[#3D291F]"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span className="hidden sm:inline">6. Lý Thuyết &amp; Khảo Cứu</span>
          <span className="sm:hidden">6. Lý Thuyết</span>
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
                  Thủ Pháp Căn Bản
                </h3>
                <p className="text-xs text-amber-200/70">
                  Các thế thủ pháp căn bản đặt trên trục Tý Ngọ Tuyến
                </p>
              </div>
              <button
                onClick={() =>
                  setZoomImg({
                    src: "/assets/images/fundamentals/anatomy_hand.png",
                    title: "Sơ Đồ Các Phần Của Tay",
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
                  className="relative w-full max-w-[260px] aspect-[3/4] martial-photo-frame rounded-2xl overflow-hidden p-3 border-2 border-amber-900/30 shadow-xl cursor-zoom-in group flex items-center justify-center"
                >
                  <Image
                    src={selectedHand.imgUrl}
                    alt={selectedHand.nameVn}
                    fill
                    className="object-contain p-2 martial-filter group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 260px"
                  />
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-white text-[10px] font-mono flex items-center gap-1 opacity-80 group-hover:opacity-100 transition shadow border border-white/20">
                    <Maximize2 className="w-3 h-3 text-[#E2B743]" /> Phóng to
                  </div>
                </div>
                <div className="mt-2 text-center text-[11px] text-amber-200/60 font-mono">
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
                      className="relative w-full aspect-[3/4] martial-photo-frame rounded-xl overflow-hidden p-2 border border-amber-900/30 cursor-zoom-in group flex items-center justify-center shadow-md hover:border-[#E2B743] transition"
                    >
                      <Image
                        src={stance.imgUrl}
                        alt={stance.nameVn}
                        fill
                        className="object-contain p-1 martial-filter group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 300px"
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

      {/* ========================================================================= */}
      {/* TAB 3: NGHI THỨC BÁI TỔ SƯ MÔN (9 BƯỚC KHAI KHẨU QUYẾT)                 */}
      {/* ========================================================================= */}
      {activeTab === "bai-to" && (
        <div className="space-y-6">
          {/* Header Bái Tổ */}
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-[#E2B743]/40 bg-gradient-to-r from-[#20150F] via-[#2A140E] to-[#20150F] space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#3D291F] pb-4">
              <div>
                <div className="flex items-center gap-2 text-[#E2B743] text-xs font-semibold uppercase tracking-wider">
                  <Flower2 className="w-4 h-4 text-[#F5D06C]" />
                  <span>Nghi Thức Nhập Môn • Phật Gia Vịnh Xuân Quyền</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif gold-gradient mt-1">
                  Nghi Thức Bái Tổ Sư Môn (9 Bước)
                </h3>
                <p className="text-xs sm:text-sm text-amber-200/80 mt-1 max-w-2xl leading-relaxed">
                  Nghi thức tôn kính Sư Tổ Tế Công, định tâm ngưng thần, mở thông kinh mạch và định hình Tấn Kiềm Dương trước khi bước vào luyện quyền.
                </p>
              </div>

              {/* Thông số & Mode Switcher */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <div className="px-3 py-1.5 rounded-xl bg-[#140C08] border border-[#3D291F] text-xs text-amber-200/80">
                  <span className="text-[#E2B743] font-bold">Thị phạm:</span> Võ sư Lê Văn Tùng
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-[#140C08] border border-[#3D291F] text-xs text-amber-200/80">
                  <span className="text-[#10B981] font-bold">Tấn pháp:</span> Kiềm Dương Tấn
                </div>

                {/* View Switcher: Player / Grid */}
                <div className="flex items-center bg-[#140C08] p-1 rounded-xl border border-[#3D291F]">
                  <button
                    onClick={() => setBaiToViewMode("player")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      baiToViewMode === "player"
                        ? "bg-[#E2B743] text-black shadow font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Từng bước</span>
                  </button>
                  <button
                    onClick={() => setBaiToViewMode("grid")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                      baiToViewMode === "grid"
                        ? "bg-[#E2B743] text-black shadow font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Ma trận 9 bước</span>
                    <span className="sm:hidden">Ma trận (9)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Khẩu quyết Bái Tổ Banner */}
            <div className="p-3.5 rounded-xl bg-[#140C08]/90 border border-amber-500/30 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#E2B743] animate-pulse" />
                <span className="font-serif italic text-amber-100 font-medium">
                  &ldquo;Tôn sư trọng đạo, trực chỉ trung tâm • Tụ khí đan điền, định hình càn khôn.&rdquo;
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#E2B743] font-bold shrink-0">
                Bước {baiToStepIndex + 1} / 9
              </span>
            </div>
          </div>

          {/* CHẾ ĐỘ 1: TRÌNH DIỄN TỪNG BƯỚC (PLAYER) */}
          {baiToViewMode === "player" && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Cột Trái: Khung ảnh võ sư lụa ngà thu gọn chuẩn */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="w-full max-w-[320px] martial-photo-frame p-4 rounded-3xl shadow-2xl relative group">
                    {/* Badge Bước */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-full bg-[#713128] text-[#F5D06C] border border-[#F5D06C]/40">
                        Bước 0{currentBaiToStep.stepNo}
                      </span>
                      <span className="text-xs font-serif font-bold text-amber-950">
                        {currentBaiToStep.nameHán}
                      </span>
                    </div>

                    {/* Vùng hiển thị ảnh */}
                    <div
                      onTouchStart={(e) => {
                        touchStartX.current = e.touches[0].clientX;
                        touchStartY.current = e.touches[0].clientY;
                      }}
                      onTouchEnd={(e) => {
                        if (touchStartX.current === null || touchStartY.current === null) return;
                        const deltaX = touchStartX.current - e.changedTouches[0].clientX;
                        const deltaY = touchStartY.current - e.changedTouches[0].clientY;
                        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
                          if (deltaX > 0) {
                            setBaiToStepIndex((prev) => (prev < BAI_TO_STEPS.length - 1 ? prev + 1 : 0));
                          } else {
                            setBaiToStepIndex((prev) => (prev > 0 ? prev - 1 : BAI_TO_STEPS.length - 1));
                          }
                          if (typeof navigator !== "undefined" && navigator.vibrate) {
                            navigator.vibrate(15);
                          }
                        }
                        touchStartX.current = null;
                        touchStartY.current = null;
                      }}
                      onClick={() =>
                        setZoomImg({
                          src: currentBaiToStep.imgUrl,
                          title: `${currentBaiToStep.title} — Thị phạm: Võ sư Lê Văn Tùng`,
                        })
                      }
                      className="relative w-full h-[380px] sm:h-[420px] rounded-2xl overflow-hidden cursor-zoom-in group/img bg-[#FBF9F5] touch-action-manipulation select-none"
                    >
                      <Image
                        src={currentBaiToStep.imgUrl}
                        alt={currentBaiToStep.title}
                        fill
                        className="object-contain martial-filter group-hover/img:scale-105 transition-transform duration-300"
                        priority
                        sizes="(max-width: 640px) 280px, 320px"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/70 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Phóng to</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-2.5 text-center">
                      <span className="text-[11px] text-amber-900/80 font-mono">
                        Võ sư Lê Văn Tùng • Phật Gia Vịnh Xuân
                      </span>
                    </div>
                  </div>

                  {/* Nút điều hướng bước (Prev / Next / Autoplay) */}
                  <div className="flex items-center gap-2 mt-4">
                    <button
                      onClick={() => setBaiToStepIndex((prev) => (prev > 0 ? prev - 1 : BAI_TO_STEPS.length - 1))}
                      className="px-3.5 py-2 rounded-xl bg-[#180E09] border border-[#3D291F] hover:border-[#E2B743] text-slate-200 text-xs font-semibold flex items-center gap-1 transition cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span className="hidden sm:inline">Bước trước</span>
                      <span className="sm:hidden">Trước</span>
                    </button>

                    <button
                      onClick={() => setIsAutoPlaying((prev) => !prev)}
                      className={`px-3.5 sm:px-4 py-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition cursor-pointer ${
                        isAutoPlaying
                          ? "bg-amber-500 text-black border-amber-400 animate-pulse"
                          : "bg-[#2A140E] border-[#E2B743]/50 text-[#F5D06C] hover:bg-[#351912]"
                      }`}
                    >
                      {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      <span className="hidden sm:inline">{isAutoPlaying ? "Tạm dừng" : "Tự động phát"}</span>
                      <span className="sm:hidden">{isAutoPlaying ? "Dừng" : "Phát"}</span>
                    </button>

                    <button
                      onClick={() => setBaiToStepIndex((prev) => (prev < BAI_TO_STEPS.length - 1 ? prev + 1 : 0))}
                      className="px-3.5 py-2 rounded-xl bg-[#180E09] border border-[#3D291F] hover:border-[#E2B743] text-slate-200 text-xs font-semibold flex items-center gap-1 transition cursor-pointer"
                    >
                      <span className="hidden sm:inline">Bước tiếp</span>
                      <span className="sm:hidden">Tiếp</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Cột Phải: Yếu lĩnh thân pháp & Điểm cốt tử */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Card Mô Tả Động Tác */}
                  <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-[#3D291F] space-y-3">
                    <div className="flex items-center justify-between border-b border-[#3D291F] pb-3">
                      <div>
                        <span className="text-[10px] font-mono font-bold text-[#E2B743] uppercase tracking-wider">
                          Động Tác Thứ 0{currentBaiToStep.stepNo} / 09
                        </span>
                        <h4 className="text-lg sm:text-xl font-bold font-serif text-white mt-0.5">
                          {currentBaiToStep.title}
                        </h4>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-[#E2B743]/20 border border-[#E2B743]/40 text-[#E2B743] font-serif font-bold">
                        {currentBaiToStep.nameHán}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-amber-100 font-medium leading-relaxed bg-[#180E09] p-3.5 rounded-xl border border-[#3D291F]">
                      {currentBaiToStep.desc}
                    </p>

                    <div className="space-y-1.5 pt-1">
                      <h5 className="text-xs font-bold text-[#E2B743] uppercase tracking-wider flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        Phân Tích Chi Tiết Thân Pháp
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {currentBaiToStep.postureDetail}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-[#3D291F]/80">
                      <h5 className="text-xs font-bold text-[#10B981] uppercase tracking-wider flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        3 Yếu Lĩnh Cốt Tử Cần Khắc Ghi
                      </h5>
                      <ul className="space-y-1.5">
                        {currentBaiToStep.keypoints.map((pt, idx) => (
                          <li key={idx} className="text-xs text-slate-200 flex items-start gap-2">
                            <span className="w-4 h-4 rounded-full bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                              {idx + 1}
                            </span>
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-3 p-3 rounded-xl bg-[#2A140E]/80 border border-[#E2B743]/30 flex items-center gap-2.5 text-xs text-amber-200">
                      <span className="text-[#E2B743] font-bold font-serif">Triết lý:</span>
                      <span className="italic">{currentBaiToStep.principle}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dải 9 nút bước dạng Thumbnail dưới chân */}
              <div className="glass-panel p-4 rounded-2xl border border-[#3D291F] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#E2B743] uppercase tracking-wider">
                    Toàn Bộ 9 Bước Nghi Thức Bái Tổ
                  </span>
                  <span className="text-slate-400 font-mono">
                    Nhấp vào bước để chuyển nhanh
                  </span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-9 gap-2">
                  {BAI_TO_STEPS.map((step, idx) => {
                    const isSelected = idx === baiToStepIndex;
                    return (
                      <button
                        key={step.stepNo}
                        onClick={() => {
                          setBaiToStepIndex(idx);
                          setIsAutoPlaying(false);
                        }}
                        aria-label={`Xem bước ${step.stepNo}: ${step.title}`}
                        className={`p-2 rounded-xl border text-left transition-all cursor-pointer flex flex-col items-center gap-1.5 relative overflow-hidden group ${
                          isSelected
                            ? "bg-[#E2B743] text-black font-bold border-[#E2B743] shadow-lg shadow-[#E2B743]/20 ring-2 ring-[#E2B743]"
                            : "bg-[#140C08] border-[#3D291F] hover:border-[#E2B743]/60 text-slate-300"
                        }`}
                      >
                        <div className="relative w-12 h-14 rounded-lg overflow-hidden bg-[#FBF9F5] border border-amber-900/30">
                          <Image
                            src={step.imgUrl}
                            alt={step.title}
                            fill
                            className="object-contain martial-filter"
                          />
                        </div>
                        <span className={`text-[10px] font-mono font-bold ${isSelected ? "text-black" : "text-amber-200/80"}`}>
                          Bước {step.stepNo}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* CHẾ ĐỘ 2: MA TRẬN 9 BƯỚC (GRID VIEW) */}
          {baiToViewMode === "grid" && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {BAI_TO_STEPS.map((step, idx) => (
                  <div
                    key={step.stepNo}
                    className="glass-panel p-4 sm:p-5 rounded-2xl border border-[#3D291F] hover:border-[#E2B743]/60 transition-all group flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#2A140E] text-[#E2B743] border border-[#E2B743]/40">
                          Bước 0{step.stepNo}
                        </span>
                        <span className="text-xs font-serif font-bold text-amber-200/80">
                          {step.nameHán}
                        </span>
                      </div>

                      {/* Khung ảnh lụa ngà */}
                      <div
                        onClick={() =>
                          setZoomImg({
                            src: step.imgUrl,
                            title: `${step.title} — Thị phạm: Võ sư Lê Văn Tùng`,
                          })
                        }
                        className="relative w-full h-[240px] martial-photo-frame rounded-2xl overflow-hidden cursor-zoom-in group/card bg-[#FBF9F5] p-2"
                      >
                        <Image
                          src={step.imgUrl}
                          alt={step.title}
                          fill
                          className="object-contain martial-filter group-hover/card:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/15 transition-colors flex items-center justify-center">
                          <div className="opacity-0 group-hover/card:opacity-100 transition-opacity bg-black/70 text-white text-[11px] px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
                            <Maximize2 className="w-3 h-3" /> Phóng to
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-sm text-white group-hover:text-[#E2B743] transition-colors">
                          {step.title}
                        </h4>
                        <p className="text-xs text-amber-100/80 mt-1 leading-relaxed line-clamp-3">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#3D291F]/70 flex items-center justify-between">
                      <span className="text-[11px] text-amber-200/60 italic line-clamp-1">
                        {step.principle}
                      </span>
                      <button
                        onClick={() => {
                          setBaiToStepIndex(idx);
                          setBaiToViewMode("player");
                        }}
                        className="text-xs font-bold text-[#E2B743] hover:underline inline-flex items-center gap-1 shrink-0 ml-2 cursor-pointer"
                      >
                        Học bước này <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 4: 4 BÀI LUYỆN CĂN BẢN (XOAY TAY & BỘ PHÁP TÝ NGỌ) */}
      {activeTab === "drills" && (
        <div className="space-y-6">
          {/* Header Tab 4 */}
          <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-[#E2B743]/40 bg-gradient-to-r from-[#20150F] via-[#2A140E] to-[#20150F] space-y-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#3D291F] pb-4">
              <div>
                <div className="flex items-center gap-2 text-[#E2B743] text-xs font-semibold uppercase tracking-wider">
                  <RotateCw className="w-4 h-4 text-[#F5D06C]" />
                  <span>Kỹ Thuật Cơ Bản Nhập Môn • Phật Gia Vịnh Xuân Quyền</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-serif gold-gradient mt-1">
                  4 Bài Luyện Căn Bản (Xoay Cổ Tay, Biên Thân &amp; Bộ Pháp Tý Ngọ)
                </h3>
                <p className="text-xs sm:text-sm text-amber-200/80 mt-1 max-w-3xl leading-relaxed">
                  Trọn bộ 4 bài tập cốt tủy từ giáo trình: Khai mở 8 khớp xương cổ tay (đồ hình vòng xoay A-B-M-N Than thủ &amp; Phục thủ), hoành thoái biên thân né đòn trên trục Tý Ngọ Tuyến, và bộ pháp xước mã tiến thoái túc bất ly địa.
                </p>
              </div>

              {/* Mode Switcher: Chi tiết kèm đồ hình / Ma trận 4 bài */}
              <div className="flex items-center bg-[#140C08] p-1 rounded-xl border border-[#3D291F] shrink-0">
                <button
                  onClick={() => setDrillsViewMode("detail")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    drillsViewMode === "detail"
                      ? "bg-[#E2B743] text-black shadow font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Từng bài (Đồ hình HD)</span>
                  <span className="sm:hidden">Từng bài</span>
                </button>
                <button
                  onClick={() => setDrillsViewMode("grid")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    drillsViewMode === "grid"
                      ? "bg-[#E2B743] text-black shadow font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Toàn cảnh 4 bài</span>
                  <span className="sm:hidden">Toàn cảnh</span>
                </button>
              </div>
            </div>

            {/* Khẩu quyết luyện tập */}
            <div className="p-3.5 rounded-xl bg-[#140C08]/90 border border-amber-500/30 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#E2B743] animate-pulse" />
                <span className="font-serif italic text-amber-100 font-medium">
                  &ldquo;Cổ tay mềm kình lực mới lưu thông • Thân bất ly trục, dĩ dật đãi lao, túc bất ly địa.&rdquo;
                </span>
              </div>
              <span className="text-[11px] font-mono text-[#E2B743] font-bold shrink-0">
                4 Bài Luyện Cốt Tủy
              </span>
            </div>
          </div>

          {/* DẢI 4 NÚT CHỌN BÀI LUYỆN (Sub-drill Selector) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {BASIC_DRILLS.map((d, idx) => {
              const isSelected = activeDrillIndex === idx && drillsViewMode === "detail";
              return (
                <button
                  key={d.id}
                  onClick={() => {
                    setActiveDrillIndex(idx);
                    setDrillsViewMode("detail");
                  }}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden group flex flex-col justify-between ${
                    isSelected
                      ? "bg-[#E2B743]/15 border-[#E2B743] shadow-lg shadow-[#E2B743]/10 ring-1 ring-[#E2B743]/40"
                      : "bg-[#180E09] border-[#3D291F] hover:border-[#E2B743]/60 hover:bg-[#20150F]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isSelected ? "bg-[#E2B743] text-[#140C08]" : "bg-[#2A1C14] text-amber-200/80"
                      }`}>
                        Bài 0{d.number}
                      </span>
                      <span className="text-xs font-serif font-bold text-amber-200/80">
                        {d.nameHán}
                      </span>
                    </div>
                    <h4 className="font-bold text-xs sm:text-sm text-white group-hover:text-[#E2B743] transition-colors line-clamp-1">
                      {d.title}
                    </h4>
                    <p className="text-[11px] text-amber-200/70 mt-1 line-clamp-2 leading-relaxed">
                      {d.purpose}
                    </p>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-[#3D291F]/50 flex items-center justify-between text-[11px]">
                    <span className="text-amber-400 font-mono text-[10px]">{d.repetition.split("(")[0]}</span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? "text-[#E2B743] translate-x-0.5" : "text-slate-500 group-hover:text-[#E2B743]"}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* CHẾ ĐỘ 1: XEM CHI TIẾT TỪNG BÀI KÈM ĐỒ HÌNH VÀ ẢNH VÕ SƯ */}
          {drillsViewMode === "detail" && (() => {
            const currentDrill = BASIC_DRILLS[activeDrillIndex] || BASIC_DRILLS[0];
            const metaList = DRILL_IMAGE_METADATA[currentDrill.id] || [];
            const currentImgKey = selectedDrillImgKey[currentDrill.id] || metaList[0]?.key;
            const currentActiveMeta = metaList.find(m => m.key === currentImgKey) || metaList[0];

            return (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  {/* Cột Trái: Trưng Bày Đồ Hình & Ảnh Phục Chế 2× Retina */}
                  <div className="lg:col-span-6 flex flex-col items-center space-y-4">
                    <div className="w-full martial-photo-frame p-4 sm:p-5 rounded-3xl shadow-2xl relative group bg-[#FBF9F5]">
                      {/* Badge trên ảnh */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold font-mono px-2.5 py-0.5 rounded-full bg-[#713128] text-[#F5D06C] border border-[#F5D06C]/40">
                          {currentActiveMeta?.isDiagram ? "Đồ Hình Sách Gốc" : "Thị Phạm Võ Sư"}
                        </span>
                        <span className="text-xs font-serif font-bold text-amber-950">
                          {currentActiveMeta?.label}
                        </span>
                      </div>

                      {/* Khung ảnh chính */}
                      <div
                        onClick={() =>
                          currentActiveMeta &&
                          setZoomImg({
                            src: currentActiveMeta.src,
                            title: `${currentDrill.title} — ${currentActiveMeta.label}`,
                          })
                        }
                        className="relative w-full h-[360px] sm:h-[420px] rounded-2xl overflow-hidden cursor-zoom-in group/img bg-white border border-amber-900/20 shadow-inner flex items-center justify-center p-2"
                      >
                        {currentActiveMeta && (
                          <Image
                            src={currentActiveMeta.src}
                            alt={currentActiveMeta.label}
                            fill
                            className="object-contain martial-filter group-hover/img:scale-105 transition-transform duration-300"
                            priority
                            sizes="(max-width: 768px) 100vw, 500px"
                          />
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors flex items-center justify-center">
                          <div className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-black/70 text-white text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-white/20">
                            <Maximize2 className="w-3.5 h-3.5 text-[#F5D06C]" />
                            <span>Phóng to xem chi tiết</span>
                          </div>
                        </div>
                      </div>

                      {/* Chú thích chi tiết đồ hình / ảnh */}
                      <div className="mt-3 p-3 rounded-xl bg-amber-50/90 border border-amber-900/15 text-xs text-amber-950 leading-relaxed font-sans">
                        <strong className="text-amber-900 block mb-0.5 font-serif font-bold">
                          {currentActiveMeta?.label}:
                        </strong>
                        {currentActiveMeta?.desc}
                      </div>
                    </div>

                    {/* Dải Nút Thumbnail Chuyển Đổi Các Đồ Hình Trong Bài */}
                    {metaList.length > 1 && (
                      <div className="w-full glass-panel p-3.5 rounded-2xl border border-[#3D291F] space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-[#E2B743] uppercase tracking-wider text-[11px]">
                            Đồ hình &amp; Ảnh tư liệu ({metaList.length} ảnh)
                          </span>
                          <span className="text-slate-400 font-mono text-[10px]">
                            Nhấp để đổi đồ hình
                          </span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {metaList.map((m) => {
                            const isThumbActive = m.key === currentActiveMeta?.key;
                            return (
                              <button
                                key={m.key}
                                onClick={() =>
                                  setSelectedDrillImgKey((prev) => ({
                                    ...prev,
                                    [currentDrill.id]: m.key,
                                  }))
                                }
                                className={`p-2 rounded-xl border text-left transition-all cursor-pointer flex flex-col items-center gap-1 relative overflow-hidden group ${
                                  isThumbActive
                                    ? "bg-[#E2B743] text-black font-bold border-[#E2B743] shadow-md ring-2 ring-[#E2B743]"
                                    : "bg-[#140C08] border-[#3D291F] hover:border-[#E2B743]/60 text-slate-300"
                                }`}
                              >
                                <div className="relative w-full h-16 rounded-lg overflow-hidden bg-white border border-amber-900/20">
                                  <Image
                                    src={m.src}
                                    alt={m.label}
                                    fill
                                    className="object-contain p-1"
                                  />
                                </div>
                                <span className={`text-[10px] font-medium text-center line-clamp-1 mt-0.5 ${
                                  isThumbActive ? "text-black font-bold" : "text-amber-200/90"
                                }`}>
                                  {m.label}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Cột Phải: Hướng Dẫn Kỹ Thuật Tuần Tự & Võ Lý */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="glass-panel p-5 sm:p-6 rounded-2xl border border-[#3D291F] space-y-4">
                      <div className="flex items-center justify-between border-b border-[#3D291F] pb-3">
                        <div>
                          <span className="text-[10px] font-mono font-bold text-[#E2B743] uppercase tracking-wider">
                            Bài Luyện Thứ 0{currentDrill.number} / 04
                          </span>
                          <h4 className="text-lg sm:text-xl font-bold font-serif text-white mt-0.5">
                            {currentDrill.title}
                          </h4>
                        </div>
                        <span className="text-xs px-2.5 py-1 rounded-full bg-[#E2B743]/20 border border-[#E2B743]/40 text-[#E2B743] font-serif font-bold">
                          {currentDrill.nameHán}
                        </span>
                      </div>

                      {/* Tần suất lặp lại & Mục đích */}
                      <div className="p-3.5 rounded-xl bg-[#180E09] border border-[#3D291F] space-y-2">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="text-[#E2B743] font-bold">Tần suất luyện:</span>
                          <span className="text-emerald-400 font-mono font-medium">{currentDrill.repetition}</span>
                        </div>
                        <div className="text-xs sm:text-sm text-amber-100 font-medium leading-relaxed">
                          <span className="text-amber-300 font-bold block mb-0.5">Mục đích bài luyện:</span>
                          {currentDrill.purpose}
                        </div>
                      </div>

                      {/* Các bước thực hiện chi tiết */}
                      <div className="space-y-2 pt-1">
                        <h5 className="text-xs font-bold text-[#10B981] uppercase tracking-wider flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Các Bước Thực Hiện Chi Tiết Tuần Tự
                        </h5>
                        <ul className="space-y-2">
                          {currentDrill.instructions.map((st, i) => (
                            <li key={i} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2.5 bg-[#140C08]/60 p-2.5 rounded-xl border border-[#3D291F]/60">
                              <span className="w-5 h-5 rounded-full bg-[#E2B743]/20 text-[#E2B743] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-[#E2B743]/40">
                                {i + 1}
                              </span>
                              <span className="leading-relaxed">{st}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Võ Lý Cốt Tủy */}
                      <div className="p-3.5 rounded-xl bg-[#2A140E]/80 border border-[#E2B743]/30 text-xs sm:text-sm text-amber-200 leading-relaxed">
                        <strong className="text-[#E2B743] font-serif font-bold block mb-1">
                          Võ Lý Cốt Tủy:
                        </strong>
                        <p className="italic">
                          {currentDrill.martialPrinciple}
                        </p>
                      </div>

                      {/* Nút Chuyển Bài Trước / Sau */}
                      <div className="pt-2 flex items-center justify-between border-t border-[#3D291F]/80">
                        <button
                          onClick={() => setActiveDrillIndex((prev) => (prev > 0 ? prev - 1 : BASIC_DRILLS.length - 1))}
                          className="px-3.5 py-2 rounded-xl bg-[#180E09] border border-[#3D291F] hover:border-[#E2B743] text-slate-200 text-xs font-semibold flex items-center gap-1 transition cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span className="hidden sm:inline">Bài trước</span>
                          <span className="sm:hidden">Trước</span>
                        </button>
                        <span className="text-xs font-mono text-amber-300/80">
                          {activeDrillIndex + 1} / {BASIC_DRILLS.length}
                        </span>
                        <button
                          onClick={() => setActiveDrillIndex((prev) => (prev < BASIC_DRILLS.length - 1 ? prev + 1 : 0))}
                          className="px-3.5 py-2 rounded-xl bg-[#180E09] border border-[#3D291F] hover:border-[#E2B743] text-slate-200 text-xs font-semibold flex items-center gap-1 transition cursor-pointer"
                        >
                          <span className="hidden sm:inline">Bài tiếp</span>
                          <span className="sm:hidden">Tiếp</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* CHẾ ĐỘ 2: MA TRẬN TOÀN CẢNH 4 BÀI LUYỆN */}
          {drillsViewMode === "grid" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {BASIC_DRILLS.map((drill, idx) => {
                const metaList = DRILL_IMAGE_METADATA[drill.id] || [];
                const firstImg = metaList[0];
                return (
                  <div
                    key={drill.id}
                    className="glass-panel p-5 sm:p-6 rounded-2xl border border-[#3D291F] hover:border-[#E2B743]/60 transition-all space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-[#E2B743] bg-[#E2B743]/15 px-2.5 py-0.5 rounded border border-[#E2B743]/30">
                          Bài Luyện {drill.number}/4
                        </span>
                        <span className="text-xs font-serif font-bold text-amber-200/80">
                          {drill.nameHán}
                        </span>
                      </div>

                      {/* Khung ảnh tiêu biểu */}
                      {firstImg && (
                        <div
                          onClick={() =>
                            setZoomImg({
                              src: firstImg.src,
                              title: `${drill.title} — ${firstImg.label}`,
                            })
                          }
                          className="relative w-full h-[220px] martial-photo-frame rounded-2xl overflow-hidden cursor-zoom-in group/card bg-white p-2 border border-amber-900/20"
                        >
                          <Image
                            src={firstImg.src}
                            alt={firstImg.label}
                            fill
                            className="object-contain martial-filter group-hover/card:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover/card:bg-black/15 transition-colors flex items-center justify-center">
                            <div className="opacity-0 group-hover/card:opacity-100 transition-opacity bg-black/70 text-white text-[11px] px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
                              <Maximize2 className="w-3 h-3 text-[#F5D06C]" /> Phóng to ({metaList.length} ảnh)
                            </div>
                          </div>
                        </div>
                      )}

                      <h4 className="text-base sm:text-lg font-bold font-serif text-white">
                        {drill.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                        {drill.purpose}
                      </p>

                      <div className="space-y-1 pt-1 border-t border-[#3D291F]">
                        <strong className="text-[#10B981] text-xs block">Bước Thực Hiện:</strong>
                        <ul className="space-y-1 text-xs text-slate-300">
                          {drill.instructions.slice(0, 2).map((st, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-4 h-4 rounded-full bg-[#E2B743]/20 text-[#E2B743] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                                {i + 1}
                              </span>
                              <span className="line-clamp-2">{st}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#3D291F]/70 flex items-center justify-between">
                      <span className="text-[11px] text-amber-200/60 italic line-clamp-1 max-w-[200px]">
                        {drill.martialPrinciple}
                      </span>
                      <button
                        onClick={() => {
                          setActiveDrillIndex(idx);
                          setDrillsViewMode("detail");
                        }}
                        className="text-xs font-bold text-[#E2B743] hover:underline inline-flex items-center gap-1 cursor-pointer"
                      >
                        Học bài này <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}


      {/* ========================================================================= */}
      {/* TAB 5: TRỤC TÝ NGỌ TUYẾN & TAM GIÁC SINH LỰC                             */}
      {/* ========================================================================= */}
      {activeTab === "centerline" && (
        <div className="space-y-6">
          <CenterlineExplorer />
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 6: LÝ THUYẾT & CHUYÊN KHẢO VÕ HỌC DI SẢN                             */}
      {/* ========================================================================= */}
      {activeTab === "theory" && (
        <div className="space-y-6">
          <KnowledgeHub />
        </div>
      )}

      {/* Modal Phóng To Ảnh Lightbox */}
      {zoomImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-hidden max-w-full w-full"
          onClick={() => setZoomImg(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={zoomImg.title}
            className="relative max-w-4xl w-full max-h-[92vh] martial-photo-frame rounded-3xl p-3 sm:p-6 shadow-2xl flex flex-col items-center border-2 border-[#E2B743] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoomImg(null)}
              aria-label="Đóng phóng to"
              className="absolute top-3 right-3 min-w-[44px] min-h-[44px] rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-xl border-2 border-white transition cursor-pointer z-20"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full h-[60vh] sm:h-[75vh]">
              <Image
                src={zoomImg.src}
                alt={zoomImg.title}
                fill
                className="object-contain martial-filter"
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
            <div className="mt-3 text-center text-xs sm:text-sm text-amber-950 font-serif font-bold px-2">
              {zoomImg.title}
            </div>
            <div className="w-full pt-2 sm:hidden border-t border-amber-900/20 mt-2">
              <button
                onClick={() => setZoomImg(null)}
                className="w-full py-2.5 rounded-xl bg-[#2A0E0A] text-[#F5D06C] font-bold text-xs flex items-center justify-center gap-1.5 border border-[#F5D06C]/40 cursor-pointer"
                aria-label="Đóng phóng to"
              >
                <X className="w-4 h-4" />
                <span>Đóng Cửa Sổ</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
