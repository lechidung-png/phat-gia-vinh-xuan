/**
 * TIỆN ÍCH ĐỊNH DẠNG VĂN BẢN VÕ HỌC PHẬT GIA VỊNH XUÂN
 * Chuẩn hóa tiêu đề động tác, loại bỏ các tiền tố trùng lặp thừa (CHIÊU 1:, ĐỘNG TÁC 1:, Thế 1:...)
 * Bảo toàn 100% nội dung giải phẫu võ học của giáo trình gốc.
 */

/**
 * Làm sạch mô tả động tác bằng cách loại bỏ các tiền tố trùng lặp thừa
 * Ví dụ:
 * - "CHIÊU 1: Hai bàn tay hình xà, di chuyển theo 2 đường tròn..." -> "Hai bàn tay hình xà, di chuyển theo 2 đường tròn..."
 * - "CHIÊU 2: Đấm thẳng ra trước." -> "Đấm thẳng ra trước."
 * - "Thế 1: Thu quyền sát nách." -> "Thu quyền sát nách."
 */
export function cleanMotionTitle(desc?: string | null): string {
  if (!desc) return "";
  
  // Loại bỏ các tiền tố thừa: CHIÊU X:, Chiêu X:, ĐỘNG TÁC X:, Thế X:, HÌNH X:, Bước X:
  const cleaned = desc.replace(
    /^(?:CHIÊU|Chiêu|ĐỘNG TÁC|Động tác|THẾ|Thế|HÌNH|Hình|BƯỚC|Bước)\s*[\d\.\-/\s]*[:\s\-–—]+\s*/i,
    ""
  ).trim();

  if (cleaned.length > 0) {
    // Viết hoa chữ cái đầu tiên
    return cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
  }
  return desc.trim();
}

/**
 * Trích xuất nhãn số chiêu từ mô tả gốc (nếu có) để hiển thị huy hiệu đối chiếu sách
 * Ví dụ: "CHIÊU 1: Hai bàn tay hình xà..." -> "Chiêu 1"
 */
export function extractMotionChieu(desc?: string | null): string | null {
  if (!desc) return null;
  const match = desc.match(/^(?:CHIÊU|Chiêu)\s*([\d\.\-]+)/i);
  if (match && match[1]) {
    return `Chiêu ${match[1]}`;
  }
  return null;
}
