@AGENTS.md


---

## 🏛️ Cập Nhật Kiến Trúc UI/UX Zen Gallery 4.0 & MasterClass Editorial (v4.0 — Tháng 10/2026)

1. **Triệt Tiêu Hội Chứng "Khung-lồng-Khung" (Zero Box-in-Box) & Chuẩn Đọc Cách 2 Mét (2-Meter Stance Readability):**
   - **Sân khấu tập luyện 50/50 (`DojoPlayer3.tsx`):** Phóng to khung ảnh Sách gốc lên `420x430px` (+55% diện tích) trên nền giấy lụa ngà `#FBF9F5`; nâng cỡ chữ chỉ dẫn động tác chính lên `24px–36px` (`text-2xl sm:text-3xl lg:text-4xl font-serif`) không đóng hộp, giúp môn sinh đứng tấn cách màn hình **2 mét** vẫn đọc rõ từng chữ.
   - **Khung nhìn rộng `1440px` (`max-w-[1440px]`):** Mở rộng không gian ngang toàn trang thêm `+160px` trên `page.tsx` và `Header.tsx`; sửa dứt điểm lỗi `scrollTo(380)` về `scrollTo(0)` để Sân khấu tập luyện hiển thị trọn vẹn trong 1 màn hình.
2. **Xóa Sổ 100% Chữ Siêu Nhỏ (`<12px`) & Đồng Bộ Phóng To `A- / A / A+` Toàn Hệ Thống:**
   - Đã rà soát định lượng toàn bộ **26 file mã nguồn (`13.943` dòng code)**, loại bỏ toàn bộ **157 vị trí chữ `8px–11px`** và chuyển **163 vị trí chữ `px` cố định** sang đơn vị tương đối `rem` (`text-xs`, `text-sm`, `text-base`, `text-3xl`, `text-4xl`), nâng cỡ chữ gốc `<html>` lên `16.5px` (`A+`: `18.5px`, `A++`: `20.5px`) và đạt chuẩn tương phản **WCAG 2.1 Level AA** (**0 vị trí chữ mờ `<=50%`**).
3. **Tinh Tuyển 31 Video Đại Sư Phụ & Châm Ngôn Cốt Tủy `"Structure before Speed"`:**
   - Tinh lọc kho tư liệu `masterVideos.ts` gồm **31 video tinh tuyển** cho 18/18 bài quyền & binh khí, ưu tiên tuyệt đối **4 vị Đại Sư Phụ**: **Đại Tông Sư Diệp Vấn (Ip Man)**, **Đại Sư Chu Thượng Đồng (Chu Shong Tin)**, **Đại Sư Diệp Chuẩn (Ip Chun)** và **Cố Võ Sư Ngô Sĩ Quý** (riêng Tam Đại Bộ Quyền gồm **9 video**: 4 Tiểu Niệm Đầu, 3 Tầm Kiều, 2 Tiêu Chỉ; đã loại bỏ video số 6 trùng lặp chất lượng thấp).
   - Khắc sâu châm ngôn nền tảng **`"Structure before Speed"` *(Cấu trúc trước Tốc độ)*** xuyên suốt các bài quyền cơ bản (`formsIntro.ts`, `martialKinematics.ts`, `CurriculumExplorer.tsx`, `DojoPlayer3.tsx`, `FundamentalHandFootAtlas.tsx`).
4. **Kiểm Định Tự Động Zero-Trust (7/7 Suites & 28/28 Martial Audits PASS):**
   - `node scripts/run_verification_tests.js`: **7/7 Suites PASS (`28.058 assertions`)**, kiểm tra tự động cả dữ liệu võ học lẫn tiêu chuẩn `0` chữ `<12px` của UI/UX v4.0.
   - `python scripts/audit_martial_integrity.py`: **28/28 tiêu chí PASS (0 warnings, 0 errors)**.
