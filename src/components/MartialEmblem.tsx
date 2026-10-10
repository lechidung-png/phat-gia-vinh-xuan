"use client";

import React from "react";

export type MartialFormId =
  | "bai-07" // Tiểu Niệm Đầu
  | "bai-09" // Tầm Kiều
  | "bai-10" // Tiêu Chỉ
  | "bai-12" // 108 Tại Chỗ Đơn Luyện
  | "bai-13" // 108 Tại Chỗ Đối Luyện
  | "bai-14" // 108 Tiến Lùi Đơn Luyện
  | "bai-15" // 108 Tiến Lùi Đối Luyện
  | "bai-17" // Bài Mộc Nhân Số 1
  | "bai-18" // Bài Mộc Nhân Tiến Lùi
  | "bai-21" // Long Quyền (Rồng)
  | "bai-22" // Xà Quyền (Rắn)
  | "bai-23" // Hổ Quyền (Hổ)
  | "bai-24" // Báo Quyền (Báo)
  | "bai-25" // Hạc Quyền (Hạc)
  | "bai-26" // Ngũ Hình Quyền Tổng Hợp
  | "bai-31" // Bát Trảm Đao
  | "con" // Lục Điểm Bán Côn
  | "lieu-diep-kiem"; // Liễu Diệp Kiếm

interface MartialEmblemProps {
  formId: string;
  className?: string;
  size?: number | string;
  variant?: "badge" | "icon" | "card";
}

export const MartialEmblem: React.FC<MartialEmblemProps> = ({
  formId,
  className = "",
  size = 24,
  variant = "icon",
}) => {
  const pixelSize = typeof size === "number" ? `${size}px` : size;

  // Render SVG hình tượng chuẩn võ học cho từng bài quyền
  const renderSvgContent = () => {
    switch (formId) {
      // 1. Long Quyền: HÌNH RỒNG HOÀNG KIM (Celestial Dragon)
      case "bai-21":
        return (
          <g>
            <path
              d="M12 2C8 2 5 4.5 5 7.5c0 1.8 1.1 3.4 2.8 4.3-.8.6-1.5 1.5-1.8 2.5C5.2 17 6.5 19 8.5 20c1.2.6 2.3.8 3.5.8 3.5 0 6.5-2.2 7.5-5.3.8-2.5-.2-5.2-2.3-6.5.8-.8 1.3-1.8 1.3-3 0-2.2-2.9-4-6.5-4z"
              fill="url(#goldGrad)"
              opacity="0.25"
            />
            {/* Đầu rồng uy nghi, sừng, râu, vảy */}
            <path
              d="M7 4c1-1 3-1.5 5-1.5s4 .5 5 1.5M6 8c0-2 2.5-3.5 6-3.5s6 1.5 6 3.5c0 1.2-1 2.3-2.5 2.8.5.8.5 1.7 0 2.5-1 1.5-3 2.2-5.5 2.2-2 0-3.8-.5-4.8-1.5-.7-.7-.8-1.5-.2-2.3C6.8 10.8 6 9.5 6 8z"
              stroke="url(#goldGrad)"
              strokeWidth="1.6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Mắt rồng rực sáng */}
            <circle cx="9.5" cy="7.5" r="1" fill="#FFF" />
            <circle cx="14.5" cy="7.5" r="1" fill="#FFF" />
            <circle cx="9.5" cy="7.5" r="0.5" fill="#2A0E0A" />
            <circle cx="14.5" cy="7.5" r="0.5" fill="#2A0E0A" />
            {/* Râu rồng uốn lượn */}
            <path
              d="M8 11c-2 1.5-4 1-5 2.5M16 11c2 1.5 4 1 5 2.5"
              stroke="url(#goldGrad)"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            {/* Thân rồng cuộn sóng mây bên dưới */}
            <path
              d="M7 16c1.5 2.5 4 4 7 4 3.5 0 6-2 5-5-1-3-4-3-6-4.5"
              stroke="url(#goldGrad)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            {/* Hạt ngọc rồng bảo châu */}
            <circle cx="12" cy="18" r="1.8" fill="url(#goldGrad)" />
          </g>
        );

      // 2. Xà Quyền: HÌNH RẮN HỔ MANG (Striking Viper / Snake)
      case "bai-22":
        return (
          <g>
            <path
              d="M12 2.5c-2.5 0-4.5 1.8-4.5 4 0 1.5 1 2.8 2.5 3.5-1.5 1-2.5 2.5-2.5 4.5 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2-1-3.5-2.5-4.5 1.5-.7 2.5-2 2.5-3.5 0-2.2-2-4-4.5-4z"
              fill="url(#goldGrad)"
              opacity="0.2"
            />
            {/* Đầu rắn hổ mang bạnh mang uy lực */}
            <path
              d="M8.5 7C7 8 6 9.5 6 11.5c0 2 1.5 3.5 3.5 4.5M15.5 7C17 8 18 9.5 18 11.5c0 2-1.5 3.5-3.5 4.5"
              stroke="url(#goldGrad)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            {/* Đầu rắn thon gọn sắc bén nhắm thẳng */}
            <path
              d="M12 3c-1.8 0-3 1.2-3 2.8 0 1.5 1.2 2.7 3 3.5 1.8-.8 3-2 3-3.5C15 4.2 13.8 3 12 3z"
              stroke="url(#goldGrad)"
              strokeWidth="1.6"
              fill="none"
            />
            {/* Mắt rắn sắc lẹm */}
            <circle cx="10.5" cy="5" r="0.75" fill="#FFF" />
            <circle cx="13.5" cy="5" r="0.75" fill="#FFF" />
            {/* Lưỡi rắn thò ra hình chữ Y xỉa huyệt */}
            <path
              d="M12 9v2.5m0 0l-1.2 1.5m1.2-1.5l1.2 1.5"
              stroke="#F59E0B"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            {/* Thân rắn cuộn chữ S mềm mại như dải lụa */}
            <path
              d="M12 15c-2.5 0-4 1.5-4 3s1.8 2.5 4 2.5 4-1 4-2.5-1.5-2.5-4-3z"
              stroke="url(#goldGrad)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </g>
        );

      // 3. Hổ Quyền: HÌNH MÃNH HỔ & HỔ TRẢO (Ferocious Tiger)
      case "bai-23":
        return (
          <g>
            <path
              d="M12 3C7 3 5 6 5 10c0 4.5 3 8 7 9s7-4.5 7-9c0-4-2-7-7-7z"
              fill="url(#goldGrad)"
              opacity="0.2"
            />
            {/* Đầu hổ dũng mãnh, hai tai vểnh */}
            <path
              d="M6 7l2 1M18 7l-2 1M8 4c-1 0-2 1-2 2.5 0 2 1.5 3.5 3 3.5M16 4c1 0 2 1 2 2.5 0 2-1.5 3.5-3 3.5"
              stroke="url(#goldGrad)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            {/* Khuôn mặt hổ, chữ Vương (王) trên trán */}
            <path
              d="M10 6h4M10 7.5h4M10 9h4M12 5.5v4"
              stroke="url(#goldGrad)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Mũi và mép hổ gầm */}
            <path
              d="M10 13c0-1 1-1.5 2-1.5s2 .5 2 1.5c0 1.2-1 2-2 2s-2-.8-2-2z"
              stroke="url(#goldGrad)"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M12 15v2m-3-1c1 1.5 3 2 3 2s2-.5 3-2"
              stroke="url(#goldGrad)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Móng vuốt hổ (Hổ trảo) cấu xé hai bên */}
            <path
              d="M6 14c-.8 1.5-.5 3.5 1 4.5M18 14c.8 1.5.5 3.5-1 4.5"
              stroke="url(#goldGrad)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </g>
        );

      // 4. Báo Quyền: HÌNH BÁO GẤM THẦN TỐC (Leopard / Báo Quyền)
      case "bai-24":
        return (
          <g>
            <path
              d="M4 12c2-3 6-4 9-3 3.5 1 6 3.5 7 6-1 2-4 3-7 2.5-3-.5-6-2.5-9-5.5z"
              fill="url(#goldGrad)"
              opacity="0.2"
            />
            {/* Thân báo gấm lao mình vút đi như tia chớp */}
            <path
              d="M3 13c3-3 7-4.5 11-3.5 3 .8 5.5 3 7 5.5"
              stroke="url(#goldGrad)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Đầu báo sắc gọn, tai ép sát khí động học */}
            <path
              d="M15 7c1.5-.5 3.5 0 4.5 1.5s1 3.5 0 4.5c-.8.8-2 1-3.5.5"
              stroke="url(#goldGrad)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <circle cx="17.5" cy="9.5" r="0.75" fill="#FFF" />
            {/* Đốm hoa mai đặc trưng của báo gấm */}
            <circle cx="8" cy="11.5" r="0.9" fill="url(#goldGrad)" />
            <circle cx="11.5" cy="11" r="0.9" fill="url(#goldGrad)" />
            <circle cx="10" cy="14" r="0.9" fill="url(#goldGrad)" />
            <circle cx="6" cy="13.5" r="0.9" fill="url(#goldGrad)" />
            {/* Bàn chân báo quyền co gập đốt ngón tay sắc bén */}
            <path
              d="M4 17c1.5-1 3-1 4 0M17 17c1.5-1 3-1 4 0"
              stroke="url(#goldGrad)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>
        );

      // 5. Hạc Quyền: HÌNH BẠCH HẠC XÒE CÁNH (Graceful Crane)
      case "bai-25":
        return (
          <g>
            {/* Đôi cánh hạc xòe rộng thanh tao */}
            <path
              d="M12 12C8 7 4 8 2 11c3 2 7 3 10 1M12 12c4-5 8-4 10-1-3 2-7 3-10 1"
              stroke="url(#goldGrad)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            {/* Cổ hạc dài thanh mảnh kiêu hãnh */}
            <path
              d="M12 13c0-3-1-6 0-8.5.5-1.2 1.5-1.5 2.5-1"
              stroke="url(#goldGrad)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            {/* Đầu và mỏ hạc xỉa điểm huyệt nhọn hoắt */}
            <path
              d="M14.5 3.5L19 4.5"
              stroke="url(#goldGrad)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="14" cy="3.5" r="0.7" fill="#FFF" />
            {/* Hạc đứng độc lập tấn trên 1 chân vững như bàn thạch */}
            <path
              d="M12 13v7M10 20h4"
              stroke="url(#goldGrad)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            {/* Chân kia co gập sẵn sàng tung cước */}
            <path
              d="M12 15l-2.5 1.5 1 2"
              stroke="url(#goldGrad)"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </g>
        );

      // 6. Ngũ Hình Quyền Tổng Hợp: PHÙ HIỆU NGŨ THÚ HỢP NHẤT (Five Animals Mandala)
      case "bai-26":
        return (
          <g>
            {/* Vòng tròn ngũ hành bao quanh */}
            <circle cx="12" cy="12" r="9.5" stroke="url(#goldGrad)" strokeWidth="1.5" fill="none" opacity="0.6" />
            <circle cx="12" cy="12" r="6.5" stroke="url(#goldGrad)" strokeWidth="1" strokeDasharray="2 2" fill="none" />
            {/* Ngôi sao 5 cánh / 5 đỉnh đại diện Long - Xà - Hổ - Báo - Hạc */}
            <path
              d="M12 3.5l2.2 5.5 5.8.5-4.5 3.8 1.4 5.7-4.9-3-4.9 3 1.4-5.7L4 9.5l5.8-.5z"
              stroke="url(#goldGrad)"
              strokeWidth="1.4"
              fill="url(#goldGrad)"
              fillOpacity="0.2"
              strokeLinejoin="round"
            />
            {/* Biểu tượng Âm Dương ở trung tâm */}
            <circle cx="12" cy="12" r="2.2" fill="url(#goldGrad)" />
          </g>
        );

      // 7. Tiểu Niệm Đầu: Ý NIỆM ĐẦU • TRỤC TRUNG TUYẾN & THIỀN ĐỊNH
      case "bai-07":
        return (
          <g>
            {/* Vòng tròn định tâm thủ trung */}
            <circle cx="12" cy="12" r="9.5" stroke="url(#goldGrad)" strokeWidth="1.4" fill="none" opacity="0.4" />
            {/* Hoa sen thiền tịnh tĩnh tâm */}
            <path
              d="M12 5c-2 3-3 5-3 7 0 2.5 1.5 4 3 4s3-1.5 3-4c0-2-1-4-3-7z"
              fill="url(#goldGrad)"
              opacity="0.3"
            />
            <path
              d="M12 5c-2 3-3 5-3 7 0 2.5 1.5 4 3 4s3-1.5 3-4c0-2-1-4-3-7z"
              stroke="url(#goldGrad)"
              strokeWidth="1.5"
              fill="none"
            />
            {/* Cánh sen hai bên */}
            <path
              d="M7.5 11c0 3 2 5 4.5 5M16.5 11c0 3-2 5-4.5 5"
              stroke="url(#goldGrad)"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
            {/* Trục Tý Ngọ Tuyến laser đỏ xuyên tâm */}
            <line x1="12" y1="2" x2="12" y2="22" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="12" cy="12" r="1.5" fill="#EF4444" />
          </g>
        );

      // 8. Tầm Kiều: BẮC CẦU TIẾP XÚC • VẤN THỦ VẤN LỘ (Bridge of Contact)
      case "bai-09":
        return (
          <g>
            {/* Cây cầu vòm bắc qua khoảng không nối 2 bờ */}
            <path
              d="M2 17c3-5 7-8 10-8s7 3 10 8"
              stroke="url(#goldGrad)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            {/* Cột trụ cầu và sóng nước bên dưới */}
            <path
              d="M6 14v4M12 9v9M18 14v4M3 20c3-1 6-1 9 0s6 1 9 0"
              stroke="url(#goldGrad)"
              strokeWidth="1.3"
              strokeLinecap="round"
              opacity="0.7"
            />
            {/* Hai cánh tay giao nhau bắc cầu (Tiếp xúc thủ) */}
            <path
              d="M6 6l12 9M18 6L6 15"
              stroke="url(#goldGrad)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <circle cx="12" cy="10.5" r="1.8" fill="url(#goldGrad)" />
          </g>
        );

      // 9. Tiêu Chỉ: CHỈ PHÁP XUYÊN THẤU • PHÓNG SỨC ĐẦU NGÓN TAY (Darting Fingers)
      case "bai-10":
        return (
          <g>
            {/* Bàn tay mở với 4 ngón tay duỗi thẳng sắc như mũi lao */}
            <path
              d="M5 18l5-5c1-1 2.5-1 3.5 0l5-5c.8-.8 2-.8 2.8 0s.8 2 0 2.8l-5 5c-1 1-1 2.5 0 3.5l-5 5"
              stroke="url(#goldGrad)"
              strokeWidth="1.6"
              strokeLinecap="round"
              fill="none"
            />
            {/* Tia chớp phóng kình từ đầu ngón tay */}
            <path
              d="M17 5l4-2-2 4 3 .5-5 5"
              stroke="#F59E0B"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Vòng sóng xung kích tỏa ra từ mũi chỉ pháp */}
            <circle cx="19" cy="5" r="3" stroke="url(#goldGrad)" strokeWidth="1" strokeDasharray="2 2" fill="none" />
          </g>
        );

      // 10. 108 Tại Chỗ Đơn Luyện: KIỀM DƯƠNG TẤN & BÁCH BÁT QUYẾT (108 Posture Seal)
      case "bai-12":
        return (
          <g>
            {/* Khung bát giác vững chãi */}
            <polygon
              points="8,3 16,3 21,8 21,16 16,21 8,21 3,16 3,8"
              stroke="url(#goldGrad)"
              strokeWidth="1.5"
              fill="url(#goldGrad)"
              fillOpacity="0.15"
            />
            {/* Con số 108 cách điệu trang trọng */}
            <text
              x="12"
              y="14.5"
              textAnchor="middle"
              fill="url(#goldGrad)"
              fontSize="7.5"
              fontWeight="bold"
              fontFamily="monospace"
            >
              108
            </text>
            <circle cx="12" cy="7" r="1" fill="url(#goldGrad)" />
            <circle cx="12" cy="18" r="1" fill="url(#goldGrad)" />
          </g>
        );

      // 11. 108 Tại Chỗ Đối Luyện: ĐỐI KHÁNG HAI NGƯỜI TẠI CHỖ (Two-person Duet)
      case "bai-13":
        return (
          <g>
            {/* Hai võ sinh đứng Kiềm dương tấn đối diện nhau giao thủ */}
            <circle cx="7" cy="6" r="2" fill="url(#goldGrad)" />
            <path d="M7 8v5l-3 4M7 11h4" stroke="url(#goldGrad)" strokeWidth="1.6" strokeLinecap="round" />
            
            <circle cx="17" cy="6" r="2" fill="url(#goldGrad)" />
            <path d="M17 8v5l3 4M17 11h-4" stroke="url(#goldGrad)" strokeWidth="1.6" strokeLinecap="round" />
            
            {/* Điểm chạm lực thính kình ở giữa */}
            <circle cx="12" cy="11" r="2" stroke="#EF4444" strokeWidth="1.4" fill="none" />
            <circle cx="12" cy="11" r="0.8" fill="#EF4444" />
          </g>
        );

      // 12. 108 Tiến Lùi Đơn Luyện: BỘ PHÁP TIẾN THOÁI (Stepping Footwork)
      case "bai-14":
        return (
          <g>
            {/* Vệt bước chân tiến và lùi liên hoàn */}
            <path
              d="M12 3v18M12 3l-3 3M12 3l3 3M12 21l-3-3M12 21l3-3"
              stroke="url(#goldGrad)"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Hai bàn chân chuyển tấn đạp bộ */}
            <rect x="5" y="8" width="3" height="5" rx="1.5" fill="url(#goldGrad)" opacity="0.8" />
            <rect x="16" y="11" width="3" height="5" rx="1.5" fill="url(#goldGrad)" opacity="0.8" />
          </g>
        );

      // 13. 108 Tiến Lùi Đối Luyện: ĐỐI KHÁNG DI ĐỘNG (Dynamic Dual Battle)
      case "bai-15":
        return (
          <g>
            {/* Hai luồng kình lực xoáy di chuyển tiến thoái va chạm */}
            <path
              d="M4 12c0-4 4-7 8-7 3 0 5 1.5 6.5 3.5M20 12c0 4-4 7-8 7-3 0-5-1.5-6.5-3.5"
              stroke="url(#goldGrad)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <path d="M18.5 4.5l1.5 4h-4M5.5 19.5l-1.5-4h4" stroke="url(#goldGrad)" strokeWidth="1.5" strokeLinecap="round" />
            {/* Tâm điểm giao tranh */}
            <circle cx="12" cy="12" r="2" fill="url(#goldGrad)" />
            <line x1="9" y1="9" x2="15" y2="15" stroke="#EF4444" strokeWidth="1.5" />
          </g>
        );

      // 14. Bài Mộc Nhân Số 1: CỌC GỖ MỘC NHÂN THUNG (Wooden Dummy)
      case "bai-17":
        return (
          <g>
            {/* Thân cọc gỗ chính */}
            <rect x="10" y="3" width="4" height="18" rx="1" fill="url(#goldGrad)" opacity="0.8" />
            {/* Hai tay cọc trên chĩa xéo ra hai bên */}
            <path
              d="M10 7L4 5M14 7l6-2"
              stroke="url(#goldGrad)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            {/* Một tay cọc giữa chĩa thẳng về phía trước */}
            <path
              d="M10 11H3"
              stroke="url(#goldGrad)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Chân cọc cong hạ bàn */}
            <path
              d="M12 16c0 2-1 4-4 5"
              stroke="url(#goldGrad)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </g>
        );

      // 15. Bài Mộc Nhân Tiến Lùi: CỌC GỖ CHUYỂN BỘ 360 ĐỘ (Revolving Wooden Dummy)
      case "bai-18":
        return (
          <g>
            {/* Vòng tròn bộ pháp xoay quanh cọc gỗ */}
            <ellipse cx="12" cy="15" rx="8.5" ry="4.5" stroke="url(#goldGrad)" strokeWidth="1.4" strokeDasharray="3 2" fill="none" />
            {/* Thân cọc mộc nhân ở tâm */}
            <rect x="10.5" y="4" width="3" height="13" rx="1" fill="url(#goldGrad)" />
            {/* Tay cọc xoay đa hướng */}
            <path d="M10.5 7L5 5.5M13.5 7l5.5-1.5M10.5 10l-4 1.5M13.5 10l4 1.5" stroke="url(#goldGrad)" strokeWidth="1.8" strokeLinecap="round" />
            {/* Mũi tên chỉ hướng di chuyển quanh cọc */}
            <path d="M19 13.5l1.5 2-2 1" stroke="url(#goldGrad)" strokeWidth="1.4" strokeLinecap="round" />
          </g>
        );

      // 16. Bát Trảm Đao: CẶP SONG ĐAO HỘ THÂN (Twin Butterfly Swords)
      case "bai-31":
        return (
          <g>
            {/* Hai thanh đao ngắn bắt chéo hình chữ X */}
            {/* Thanh đao 1 */}
            <path
              d="M4 20l12-14c1.5-1.5 3.5-1.5 4.5-.5s1 3-.5 4.5L8 22z"
              fill="url(#goldGrad)"
              opacity="0.3"
            />
            <path
              d="M5 19L18 6c1-1 2.5-.5 3 .5s0 2.5-1 3L7 21"
              stroke="url(#goldGrad)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Quai bảo hộ tay của đao */}
            <path d="M6 18c-1.5 0-2.5 1-2.5 2.5S4.5 23 6 23h3" stroke="url(#goldGrad)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            
            {/* Thanh đao 2 chéo ngược lại */}
            <path
              d="M19 19L6 6c-1-1-2.5-.5-3 .5s0 2.5 1 3l13 12"
              stroke="url(#goldGrad)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path d="M18 18c1.5 0 2.5 1 2.5 2.5S19.5 23 18 23h-3" stroke="url(#goldGrad)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </g>
        );

      // 17. Lục Điểm Bán Côn: TRƯỜNG CÔN SÁU ĐIỂM RƯỠI (Long Pole / Côn)
      case "con":
        return (
          <g>
            {/* Thân côn dài đặt chéo dũng mãnh */}
            <line x1="3" y1="21" x2="21" y2="3" stroke="url(#goldGrad)" strokeWidth="2.4" strokeLinecap="round" />
            {/* 6 điểm phát kình (Lục điểm) dọc thân côn */}
            <circle cx="6" cy="18" r="1" fill="#FFF" />
            <circle cx="9" cy="15" r="1" fill="#FFF" />
            <circle cx="12" cy="12" r="1" fill="#FFF" />
            <circle cx="15" cy="9" r="1" fill="#FFF" />
            <circle cx="18" cy="6" r="1" fill="#FFF" />
            <circle cx="21" cy="3" r="1.3" fill="#EF4444" />
            {/* Nửa điểm mượn lực xoáy quanh đầu côn */}
            <path d="M18 2c2 0 3 1.5 3 3" stroke="#F59E0B" strokeWidth="1.4" strokeLinecap="round" />
          </g>
        );

      // 18. Liễu Diệp Kiếm: THANH KIẾM LÁ LIỄU (Willow Leaf Sword)
      case "lieu-diep-kiem":
        return (
          <g>
            {/* Lưỡi kiếm mềm mại uốn cong hình lá liễu */}
            <path
              d="M6 19l9-10c1-1.2 2.5-3 4.5-5 0 2-1 3.5-2 4.5l-9 12z"
              fill="url(#goldGrad)"
              opacity="0.3"
            />
            <path
              d="M5 20l10-11c1.5-1.5 2.8-3.5 4.5-5.5-.5 2.2-1.5 4-3 5.5L7 21"
              stroke="url(#goldGrad)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Chuôi kiếm và đốc kiếm hình cánh bướm */}
            <path d="M4 19l3 3M3 21l3-3" stroke="url(#goldGrad)" strokeWidth="1.6" strokeLinecap="round" />
            {/* Dải lụa kiếm (kiếm tuệ) bay phấp phới trong gió */}
            <path
              d="M3 21c-1 2-2 3.5-1 4.5s2 0 2-1.5"
              stroke="#EF4444"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        );

      // Mặc định: Phù hiệu võ học môn phái (Chữ Phật hoặc đinh tán Tý Ngọ)
      default:
        return (
          <g>
            <circle cx="12" cy="12" r="9.5" stroke="url(#goldGrad)" strokeWidth="1.5" fill="none" opacity="0.5" />
            <circle cx="12" cy="12" r="2.5" fill="url(#goldGrad)" />
            <line x1="12" y1="4" x2="12" y2="20" stroke="url(#goldGrad)" strokeWidth="1.5" />
            <line x1="4" y1="12" x2="20" y2="12" stroke="url(#goldGrad)" strokeWidth="1.5" />
          </g>
        );
    }
  };

  // Render theo variant
  if (variant === "badge") {
    return (
      <div
        className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#2D160E] to-[#170A06] border border-[#F5D06C]/40 p-2 shadow-lg shadow-black/40 shrink-0 ${className}`}
        style={{ width: pixelSize, height: pixelSize }}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-full h-full filter drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF1B8" />
              <stop offset="45%" stopColor="#F5D06C" />
              <stop offset="85%" stopColor="#D4A017" />
              <stop offset="100%" stopColor="#966C0C" />
            </linearGradient>
          </defs>
          {renderSvgContent()}
        </svg>
      </div>
    );
  }

  // Variant "icon" thông thường
  return (
    <svg
      viewBox="0 0 24 24"
      className={`shrink-0 ${className}`}
      style={{ width: pixelSize, height: pixelSize }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF1B8" />
          <stop offset="45%" stopColor="#F5D06C" />
          <stop offset="85%" stopColor="#D4A017" />
          <stop offset="100%" stopColor="#966C0C" />
        </linearGradient>
      </defs>
      {renderSvgContent()}
    </svg>
  );
};
