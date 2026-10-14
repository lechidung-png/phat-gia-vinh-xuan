# NHẬT KÝ RÚT KINH NGHIỆM & QUẢN TRỊ TRI THỨC DỰ ÁN (LESSONS LEARNED LOG)
*(Phật Gia Vịnh Xuân Quyền — Continuous Improvement & Zero-Trust Quality Retrospective)*

Tài liệu này đúc kết **30 bài học kinh nghiệm thực tế** trong suốt quá trình phát triển nền tảng số hóa **Phật Gia Vịnh Xuân Quyền**, phân tích nguyên nhân gốc rễ (Root Cause Analysis - RCA) và các giải pháp kỹ thuật đã được đóng gói để hoàn thiện dự án.

---

## MỤC LỤC 30 BÀI HỌC KINH NGHIỆM CỐT LÕI

1. [Bài Học 1: Loại Bỏ Xử Lý Ảnh Tự Động OpenCV / 3D AI Không Hiệu Quả & Chuyển Sang Bộ Dữ Liệu Chuẩn](#bài-học-1-loại-bỏ-xử-lý-ảnh-tự-động-opencv--3d-ai-không-hiệu-quả--chuyển-sang-bộ-dữ-liệu-chuẩn)
2. [Bài Học 2: Quy Tắc Toàn Vẹn Nội Dung (Zero-Sampling Rule — Đủ 36 Chương Mục & 108/108 Chiêu Thức)](#bài-học-2-quy-tắc-toàn-vẹn-nội-dung-zero-sampling-rule--đủ-36-chương-mục--108108-chiêu-thức)
3. [Bài Học 3: Tuyệt Đối Bảo Toàn Chuẩn Mực Võ Học (Nhị Tự Kiềm Dương Tấn Chân Hẹp)](#bài-học-3-tuyệt-đối-bảo-toàn-chuẩn-mực-võ-học-nhị-tự-kiềm-dương-tấn-chân-hẹp)
4. [Bài Học 4: Bản Sắc Môn Phái (Gam Màu Nâu Đất Võ Phục Phật Gia Vịnh Xuân)](#bài-học-4-bản-sắc-môn-phái-gam-màu-nâu-đất-võ-phục-phật-gia-vịnh-xuân)
5. [Bài Học 5: Tối Ưu Hóa Nền Tảng Web (Next.js 16 SSG & In-Memory Search < 2ms)](#bài-học-5-tối-ưu-hóa-nền-tảng-web-nextjs-16-ssg--in-memory-search--2ms)
6. [Bài Học 6: Hoàn Thiện Typography Tiếng Việt (Be Vietnam Pro & Noto Serif)](#bài-học-6-hoàn-thiện-typography-tiếng-việt-be-vietnam-pro--noto-serif)
7. [Bài Học 7: Phân Định Rạch Ròi 36 Chương Sách Gốc vs 18 Bài Quyền & Binh Khí Thực Tế](#bài-học-7-phân-định-rạch-ròi-36-chương-sách-gốc-vs-18-bài-quyền--binh-khí-thực-tế)
8. [Bài Học 8: Đối Chiếu Ngữ Nghĩa Hình Ảnh Thực Chiến (Semantic Image-to-Context Verification)](#bài-học-8-đối-chiếu-ngữ-nghĩa-hình-ảnh-thực-chiến-semantic-image-to-context-verification)
9. [Bài Học 9: Chuẩn Hóa Trục Tý Ngọ Tuyến Trên Thân Người Thật (Geometric Re-centering)](#bài-học-9-chuẩn-hóa-trục-tý-ngọ-tuyến-trên-thân-người-thật-geometric-re-centering)
10. [Bài Học 10: Tối Ưu Hóa Trải Nghiệm Đa Chế Độ & Trợ Năng Toàn Diện (WCAG 2.1)](#bài-học-10-tối-ưu-hóa-trải-nghiệm-đa-chế-độ--trợ-năng-toàn-diện-wcag-21)
11. [Bài Học 11: Next.js 16 / React 19 Linting & Triệt Tiêu 100% Nợ Kỹ Thuật](#bài-học-11-nextjs-16--react-19-linting--triệt-tiêu-100-nợ-kỹ-thuật)
12. [Bài Học 12: Công Thái Học Di Động & Zero-Overflow Architecture (Mobile Ergonomics)](#bài-học-12-công-thái-học-di-động--zero-overflow-architecture-mobile-ergonomics)
13. [Bài Học 13: Chuẩn Mực Võ Đạo & Thanh Lọc Triệt Để Ngôn Từ Khoa Trương ("Đao To Búa Lớn")](#bài-học-13-chuẩn-mực-võ-đạo--thanh-lọc-triệt-để-ngôn-từ-khoa-trương-đao-to-búa-lớn)
14. [Bài Học 14: Đa Dạng Hóa Hình Ảnh Võ Sư Theo Ngữ Cảnh Châm Ngôn Võ Đạo](#bài-học-14-đa-dạng-hóa-hình-ảnh-võ-sư-theo-ngữ-cảnh-châm-ngôn-võ-đạo)
15. [Bài Học 15: Tinh Giản Nút Bấm Di Động & Responsive Adaptive Wording](#bài-học-15-tinh-giản-nút-bấm-di-động--responsive-adaptive-wording)
16. [Bài Học 16: Chuẩn Mực "Console Sạch Tuyệt Đối" & Loại Bỏ Dead Code](#bài-học-16-chuẩn-mực-console-sạch-tuyệt-đối--loại-bỏ-dead-code)
17. [Bài Học 17: Chuẩn Xác Số Liệu & Thứ Tự Điều Hướng Sư Phạm Trên Hero](#bài-học-17-chuẩn-xác-số-liệu--thứ-tự-điều-hướng-sư-phạm-trên-hero)
18. [Bài Học 18: Bảo Tàng Số Giới Thiệu Chi Tiết Về Tổ Sư & Các Vị Thầy Truyền Thừa](#bài-học-18-bảo-tàng-số-giới-thiệu-chi-tiết-về-tổ-sư--các-vị-thầy-truyền-thừa)
19. [Bài Học 19: Khiêm Tốn Hóa Hồ Sơ Võ Sư & Tích Hợp GA4 / Looker Studio Dashboard](#bài-học-19-khiêm-tốn-hóa-hồ-sơ-võ-sư--tích-hợp-ga4--looker-studio-dashboard)
20. [Bài Học 20: Không Gian Thiền Định & Khí Công Thở Vuông 4 Thì Đan Điền](#bài-học-20-không-gian-thiền-định--khí-công-thở-vuông-4-thì-đan-điền)
21. [Bài Học 21: Xác Thực Chéo Chân Dung Nhân Vật Lịch Sử (Chống Gán Nhầm Ảnh Võ Sư Trần Thúc Tiển)](#bài-học-21-xác-thực-chéo-chân-dung-nhân-vật-lịch-sử-chống-gán-nhầm-ảnh-võ-sư-trần-thúc-tiển)
22. [Bài Học 22: Chuẩn Xác Học Hàm PGS.TS & Nghiêm Cấm Tự Bịa Biệt Danh Sư Phụ](#bài-học-22-chuẩn-xác-học-hàm-pgsts--nghiêm-cấm-tự-bịa-biệt-danh-sư-phụ)
23. [Bài Học 23: Nghiên Cứu Đối Chiếu 6 Bài Quyền Vịnh Xuân Thế Giới & 13 Nhân Vật Huyền Thoại](#bài-học-23-nghiên-cứu-đối-chiếu-6-bài-quyền-vịnh-xuân-thế-giới--13-nhân-vật-huyền-thoại)
24. [Bài Học 24: Công Thái Học Đọc Quốc Tế Chống Mỏi Mắt (A- / A / A+) & Bổ Sung Hồ Sơ Đồng Tác Giả ThS.DS Nguyễn Duy Thức](#bài-học-24-công-thái-học-đọc-quốc-tế-chống-mỏi-mắt-a--a--a--bổ-sung-hồ-sơ-đồng-tác-giả-thsds-nguyễn-duy-thức)
25. [Bài Học 25: Khôi Phục Đầy Đủ Các Đoạn Lặp Đối Xứng Trong Sách Gốc (917 Động Tác Thực Tế)](#bài-học-25-khôi-phục-đầy-đủ-các-đoạn-lặp-đối-xứng-trong-sách-gốc-917-động-tác-thực-tế)
26. [Bài Học 26: Đồng Bộ Số Liệu Châm Ngôn (72 Câu) & Cân Đối Tỷ Lệ Khung Ảnh Và Chữ](#bài-học-26-đồng-bộ-số-liệu-châm-ngôn-72-câu--cân-đối-tỷ-lệ-khung-ảnh-và-chữ)
27. [Bài Học 27: Khôi Phục 100% Hướng Dẫn Tập Luyện, Tác Dụng & 12 Đại Khẩu Quyết Sách Gốc](#bài-học-27-khôi-phục-100-hướng-dẫn-tập-luyện-tác-dụng--12-đại-khẩu-quyết-sách-gốc)
28. [Bài Học 28: Khắc Phục Triệt Để Lỗi Cắt Thẻ Menu Bằng Kiến Trúc Flex-Wrap & Lưới Thích Ứng](#bài-học-28-khắc-phục-triệt-để-lỗi-cắt-thẻ-menu-bằng-kiến-trúc-flex-wrap--lưới-thích-ứng)
29. [Bài Học 29: Đột Phá Sư Phạm Đa Phương Thức (Phòng Chiếu 53 Video Đại Sư, 20 Video Tam Đại Quyền & Progressive Disclosure 3 Tầng)](#bài-học-29-đột-phá-sư-phạm-đa-phương-thức-phòng-chiếu-53-video-đại-sư-20-video-tam-đại-quyền--progressive-disclosure-3-tầng)
30. [Bài Học 30: Giải Quyết Triệt Để Căn Bệnh "Báo Cáo Ảo" Bằng Động Cơ Kiểm Chứng Không Khoan Nhượng (Zero-Trust Anti-Hallucination Engine)](#bài-học-30-giải-quyết-triệt-để-căn-bệnh-báo-cáo-ảo-bằng-động-cơ-kiểm-chứng-không-khoan-nhượng-zero-trust-anti-hallucination-engine)

---

## CHI TIẾT CÁC BÀI HỌC & GIẢI PHÁP ĐÃ ĐÓNG GÓI

### Bài Học 1: Loại Bỏ Xử Lý Ảnh Tự Động OpenCV / 3D AI Không Hiệu Quả & Chuyển Sang Bộ Dữ Liệu Chuẩn
- **Hiện tượng & Đánh giá thực tế:**
  - Trong giai đoạn thử nghiệm đầu tiên, các kịch bản tự động tách ảnh từ file PDF scan bằng OpenCV và thử nghiệm tái tạo ảnh 3D AI tỏ ra không hiệu quả, phát sinh nhiều sai sót (cắt phạm tay chân võ sư, mất người thứ hai trong các thế đối kháng, hoặc sai lệch tư thế võ học).
- **Giải pháp triệt để:**
  1. **Sử dụng 100% bộ dữ liệu chuẩn từ `C:\Cowork\Phat gia Vinh Xuan\Vinh xuan Phat gia\Phat-gia-Vinh-Xuan-Quyen-Phuc-che`:** Toàn bộ **1.096 hình ảnh** (`hinh/`, `hinh-2x/`) và **36 tệp nội dung chương mục** (`noi-dung/`) được dùng làm nguồn dữ liệu duy nhất (Single Source of Truth).
  2. **Thanh lọc & làm nhẹ dự án (Giải phóng $920.5\text{ MB}$):** Xóa bỏ hoàn toàn các thư mục ảnh trích xuất thô, các kịch bản xử lý ảnh cũ và 2 Agent Skills xử lý ảnh không dùng.

---

### Bài Học 2: Quy Tắc Toàn Vẹn Nội Dung (Zero-Sampling Rule — Đủ 36 Chương Mục & 108/108 Chiêu Thức)
- **Hiện tượng:** AI Agent đôi khi có xu hướng "làm mẫu đại diện" (Sampling) một vài chiêu thức thay vì nạp toàn bộ dữ liệu.
- **Giải pháp triệt để:**
  - Ban hành **Quy tắc Bất Di Bất Dịch (Zero-Sampling Rule)**: Bắt buộc tích hợp đủ 36/36 chương mục (18 bài quyền thực hành và 18 chuyên đề lý luận) và đủ **108/108 chiêu thức** của Bài 108 thế từ gói dữ liệu `Vinh xuan Phat gia`.

---

### Bài Học 3: Tuyệt Đối Bảo Toàn Chuẩn Mực Võ Học (Nhị Tự Kiềm Dương Tấn Chân Hẹp)
- **Hiện tượng:** Nguy cơ mô tả nhầm thế tấn của Vịnh Xuân thành Trung bình tấn mở rộng của các phái ngoại gia.
- **Giải pháp triệt để:**
  - Cài đặt quy tắc cốt lõi môn phái theo sách gốc (Trang 20 & 25): **Nhị Tự Kiềm Dương Tấn** của Phật Gia Vịnh Xuân có **hai mũi chân quay vào nhau cách nhau khoảng 1 bàn chân, hai gót chân mở rộng bằng 2 bàn chân (khi quay người hai bàn chân song song cách nhau một bề ngang bàn chân), hai đầu gối hơi khuỵu hướng vào trong che kín hạ bộ**.

---

### Bài Học 4: Bản Sắc Môn Phái (Gam Màu Nâu Đất Võ Phục Phật Gia Vịnh Xuân)
- **Chỉ đạo môn quy:** Võ phục chính thức của Phật Gia Vịnh Xuân là **màu áo bà ba nâu sồng (nâu đất)** — biểu trưng cho sự khiêm nhường, tĩnh tại và mộc mạc của đạo Phật.
- **Giải pháp triệt để:**
  - Định nghĩa hệ màu Zen-Martial Glassmorphism trên nền **Nâu Đất Sẫm (`#140C08`)** và nâu gỗ trầm (`#20150F`), viền nâu cổ (`#3D291F`), điểm xuyết vàng kim đồng (`#E2B743`) và màu chữ kem ấm (`#F5EBE6`).

---

### Bài Học 5: Tối Ưu Hóa Nền Tảng Web (Next.js 16 SSG & In-Memory Search < 2ms)
- **Giải pháp triệt để:**
  - Kiến trúc **Next.js 16 Static Site Generation (SSG)** với `output: 'export'`. Toàn bộ 18 bài quyền và 18 chuyên đề được tiền biên dịch ra thư mục `web/out/` (7/7 static routes).
  - Tích hợp **In-Memory Search Engine** (`web/src/lib/searchEngine.ts`), chuẩn hóa tiếng Việt không dấu (NFD), cho phép tìm kiếm toàn văn trong $< 2\text{ms}$ ngay trên trình duyệt với chi phí vận hành máy chủ $0.

---

### Bài Học 6: Hoàn Thiện Typography Tiếng Việt (Be Vietnam Pro & Noto Serif)
- **Giải pháp triệt để:**
  - Tích hợp bộ font kép chuẩn mực qua `next/font/google` với `subsets: ['vietnamese', 'latin']`: **`Be Vietnam Pro`** cho nội dung văn bản rõ nét dấu thanh và **`Noto Serif`** cho tiêu đề võ học trang nghiêm.

---

### Bài Học 7: Phân Định Rạch Ròi 36 Chương Sách Gốc vs 18 Bài Quyền & Binh Khí Thực Tế
- **Hiện tượng & Nhầm lẫn ban đầu:**
  - Mục lục sách gốc có 36 chương mục đánh số từ `bai-01` đến `bai-36`, trong đó có cả Lời nói đầu, Lịch sử, Khẩu quyết, Lý luận Linh giác, Nội công. Nếu gộp chung thành "36 Bài Quyền" sẽ gây hiểu nhầm về mặt võ học.
- **Giải pháp triệt để:**
  - **Phân tách rạch ròi 2 loại hình nội dung:**
    1. **18 Bài Quyền & Binh Khí Thực Hành:** Có động tác phân thế thực tế (`motions.length > 0`), hiển thị trên trình phát `DojoPlayer3.tsx`.
    2. **18 Chuyên Đề Lý Luận & Lịch Sử:** Là văn bản chuyên khảo (`contentType: 'reading'`, `motions: []`), đọc trên giao diện Tàng Kinh Các (`HeritageReader.tsx`).

---

### Bài Học 8: Đối Chiếu Ngữ Nghĩa Hình Ảnh Thực Chiến (Semantic Image-to-Context Verification)
- **Hiện tượng:**
  - Ở phân hệ Trục Tý Ngọ trước đây từng xảy ra lỗi dùng ảnh 1 người đơn luyện để minh họa cho thẻ tình huống đối kháng 2 người.
- **Giải pháp triệt để:**
  - Ban hành **Quy Tắc Ngữ Nghĩa Hình Ảnh**: Mọi nội dung có từ khóa `đối kháng`, `đối luyện`, `thực chiến`, `2 người`, `A vs B` bắt buộc sử dụng ảnh 2 võ sư giao đấu thực tế từ sách gốc (`p065-h03.png`, `p067-h04.png`, `p065-h08.png`, `p091-h03.png`).
  - Tự động hóa kiểm tra bằng kịch bản `scripts/audit_martial_integrity.py`.

---

### Bài Học 9: Chuẩn Hóa Trục Tý Ngọ Tuyến Trên Thân Người Thật (Geometric Re-centering)
- **Giải pháp triệt để:**
  - Đo đạc chính xác toạ độ giải phẫu: Điểm Bách Hội (đỉnh đầu), Ấn Đường (sống mũi), Đản Trung (chấn thủy), Thần Khuyết (rốn) và điểm trung tâm giữa 2 đế giày trên ảnh `p037-h01.png` và `p037-h02.png` để đường laser Tý Ngọ Tuyến đi thẳng tắp qua trục sinh tử.

---

### Bài Học 10: Tối Ưu Hóa Trải Nghiệm Đa Chế Độ & Trợ Năng Toàn Diện (WCAG 2.1)
- **Giải pháp triệt để:**
  - **Kiến trúc Đa Chế Độ Xem Linh Hoạt:** *Từng động tác (Carousel Player)*, *Ma trận toàn bộ (Grid View)*, *Lời nói đầu & Triết lý*, và *Video Đại Sư*.
  - **Trợ năng WCAG 2.1:** Bổ sung `aria-label` cho 100% nút bấm, hỗ trợ phím `Esc` đóng Lightbox, `Ctrl + K` mở tìm kiếm in-memory.

---

### Bài Học 11: Next.js 16 / React 19 Linting & Triệt Tiêu 100% Nợ Kỹ Thuật
- **Giải pháp triệt để:**
  - Chuẩn hóa `web/eslint.config.mjs`, thay thế thẻ `<a>` bằng `<Link>`, dọn sạch các biến dư thừa. Đạt `npm run lint` = **0 lỗi**, `npx tsc --noEmit` = **0 lỗi**, `npm run build` = **7/7 static routes**.

---

### Bài Học 12: Công Thái Học Di Động & Zero-Overflow Architecture (Mobile Ergonomics)
- **Giải pháp triệt để:**
  - Khóa chống tràn ngang `max-width: 100vw; overflow-x: clip;` đạt `scrollWidth === innerWidth === 390px` (**0px tràn ngang**).
  - Tái cấu trúc 2 tầng cho thanh điều khiển `DojoPlayer3`, tích hợp cử chỉ vuốt (Swipe Gestures) và thanh điều hướng đáy `MobileBottomBar.tsx` trong vùng ngón tay cái.

---

### Bài Học 13: Chuẩn Mực Võ Đạo & Thanh Lọc Triệt Để Ngôn Từ Khoa Trương ("Đao To Búa Lớn")
- **Giải pháp triệt để:**
  - Thanh lọc 100% các tính từ khoa trương kiếm hiệp (*"tuyệt đỉnh"*, *"bách khoa"*, *"thượng thừa"*, *"uy lực hủy diệt"*, *"vô địch"*, *"tối thượng"*), chuyển hoàn toàn về ngôn phong giản dị, khiêm cung, chuẩn xác và khoa học của Phật Gia Vịnh Xuân.

---

### Bài Học 14: Đa Dạng Hóa Hình Ảnh Võ Sư Theo Ngữ Cảnh Châm Ngôn Võ Đạo
- **Giải pháp triệt để:**
  - Bổ sung ảnh Võ sư Lê Đắc Kiên thực hiện nghi thức Bão Quyền Lễ (`vo_su_le_dac_kien_chao.jpg`) và ảnh thiền định (`vo_su_le_dac_kien_thien.jpg`) đồng hành cùng các câu châm ngôn võ đạo theo từng chủ đề tương ứng.

---

### Bài Học 15: Tinh Giản Nút Bấm Di Động & Responsive Adaptive Wording
- **Giải pháp triệt để:**
  - Ứng dụng cặp class Tailwind thích ứng (`hidden sm:inline` và `sm:hidden`) giúp nhãn nút bấm tự động cô đọng trên màn hình điện thoại hẹp ($375\text{px} - 390\text{px}$), giữ trọn vẹn trên 1 hàng và bảo đảm kích thước chạm $\ge 44 \times 44\text{ px}$.

---

### Bài Học 16: Chuẩn Mực "Console Sạch Tuyệt Đối" & Loại Bỏ Dead Code
- **Giải pháp triệt để:**
  - Dọn sạch 100% các component/file dữ liệu không còn sử dụng, thay thế ảnh `noise.png` bằng CSS gradient nội sinh, đảm bảo Browser Console đạt `0 errors, 0 warnings`.

---

### Bài Học 17: Chuẩn Xác Số Liệu & Thứ Tự Điều Hướng Sư Phạm Trên Hero
- **Giải pháp triệt để:**
  - Bãi bỏ các thẻ thống kê số liệu dễ gây hiểu nhầm giữa "1.096 bức ảnh" và "1.096 động tác".
  - Chuẩn hóa 3 nút điều hướng trên Hero đúng lộ trình sư phạm: `1. Lịch sử và triết lý` $\rightarrow$ `2. Kiến thức chung` $\rightarrow$ `3. Các bài quyền`.

---

### Bài Học 18: Bảo Tàng Số Giới Thiệu Chi Tiết Về Tổ Sư & Các Vị Thầy Truyền Thừa
- **Giải pháp triệt để:**
  - Xây dựng kho dữ liệu hồ sơ chuyên sâu (`lineageMasters.ts`) và giao diện Bảo tàng số (`MasterDetailModal.tsx`) với 4 chương khảo cứu (Thân thế, Kỹ pháp, Đóng góp di sản, Giai thoại võ lâm) cùng phím tắt chuyển nhanh (`←`, `→`, `Escape`).

---

### Bài Học 19: Khiêm Tốn Hóa Hồ Sơ Võ Sư & Tích Hợp GA4 / Looker Studio Dashboard
- **Giải pháp triệt để:**
  - Chuẩn hóa hồ sơ Võ sư Lê Đắc Kiên (sinh năm 1968) với văn phong giản dị, khiêm tốn ("Võ Đường Huỳnh Thúc Kháng").
  - Xây dựng `AnalyticsProvider.tsx` và `analytics.ts` kết nối trực tiếp Google Analytics 4 (`G-17V87XT91Y`), Google Search Console và bảng điều khiển KPI trên Google Looker Studio.

---

### Bài Học 20: Không Gian Thiền Định & Khí Công Thở Vuông 4 Thì Đan Điền
- **Giải pháp triệt để:**
  - Phát triển tổ hợp `MeditationQiGongHub.tsx`, `MeditationBreathingGuide.tsx` và `meditationQiGong.ts` với vòng tròn dẫn nhịp thở tương tác 4 pha (*Hít vào — Nín giữ — Thở ra — Buông thư*) kết hợp chuông xoay Tây Tạng và hướng dẫn Tam Điều.

---

### Bài Học 21: Xác Thực Chéo Chân Dung Nhân Vật Lịch Sử (Chống Gán Nhầm Ảnh Võ Sư Trần Thúc Tiển)
- **Hiện tượng & Sự cố:**
  - Một bức ảnh đen trắng chụp cụ Trần Thúc Tiển (mặc áo vest, đeo cà vạt) từng bị gán nhầm vào vị trí của PGS.TS Nguyễn Mạnh Nhâm.
- **Giải pháp triệt để:**
  - Phân định rạch ròi ảnh chân dung của **Cố Võ sư Trần Thúc Tiển** (`tran_thuc_tien.png`) và ảnh chân dung của **PGS.TS Nguyễn Mạnh Nhâm** (`pgs_ts_nguyen_manh_nham.jpg`); bổ sung quy tắc xác thực chéo chân dung lịch sử vào `pgvx-martial-auditor`.

---

### Bài Học 22: Chuẩn Xác Học Hàm PGS.TS & Nghiêm Cấm Tự Bịa Biệt Danh Sư Phụ
- **Giải pháp triệt để:**
  - **Cấm tuyệt đối tự đặt biệt danh:** Xóa bỏ hoàn toàn cụm từ tự suy diễn `(Bác Sĩ Nhâm Vịnh Xuân)`.
  - **Chuẩn hóa 100% học hàm học vị chính danh:** Đồng bộ toàn bộ mã nguồn và tài liệu dự án về đúng danh xưng trên bìa sách gốc: **PGS.TS Y khoa Nguyễn Mạnh Nhâm (1932 – nay)** và **ThS.DS Nguyễn Duy Thức**.

---

### Bài Học 23: Nghiên Cứu Đối Chiếu 6 Bài Quyền Vịnh Xuân Thế Giới & 13 Nhân Vật Huyền Thoại
- **Giải pháp triệt để:**
  - Mở rộng `martialPhilosophy.ts` và `PhilosophyHub.tsx` với hồ sơ và danh ngôn của **13 Đại sư & Danh gia Vịnh Xuân Thế giới** (mỗi vị có từ 3–9 câu danh ngôn sâu sắc kèm chữ Hán/nguyên bản tiếng Anh và bối cảnh võ học) cùng chuyên khảo đối chiếu các bài quyền kinh điển của Vịnh Xuân quốc tế.

---

### Bài Học 24: Công Thái Học Đọc Quốc Tế Chống Mỏi Mắt (A- / A / A+) & Bổ Sung Hồ Sơ Đồng Tác Giả ThS.DS Nguyễn Duy Thức
- **Giải pháp triệt để:**
  1. **Công thái học đọc chống mỏi mắt (`FontSizeProvider.tsx`):** Tích hợp cụm 3 nút **`A-` (16px) | `A` (18px - Mặc định) | `A+` (20px)** trên thanh `Header.tsx`, loại bỏ chữ nhỏ dưới $12\text{px}$, nâng giãn dòng lên `leading-[1.8]` và dùng màu chữ kem ấm `#F5EBE6` đạt chuẩn WCAG 2.1 AAA.
  2. **Hoàn thiện chân dung & hồ sơ đồng tác giả ThS.DS Nguyễn Duy Thức và ảnh cận cảnh PGS.TS Nguyễn Mạnh Nhâm:** Hoàn thiện Bảo tàng số **5 vị thầy truyền thừa**.

---

### Bài Học 25: Khôi Phục Đầy Đủ Các Đoạn Lặp Đối Xứng Trong Sách Gốc (917 Động Tác Thực Tế)
- **Hiện tượng:**
  - Trong sách gốc, nhiều bài quyền có các câu chỉ dẫn lặp đối xứng (ví dụ: *"Từ động tác X đến động tác Y làm giống như từ động tác A đến B nhưng đổi bên"*). Nếu chỉ đếm số hình ảnh đơn lẻ (796 hình) mà không khôi phục các bước lặp đối xứng thì người tập sẽ bị thiếu hụt động tác khi tập theo trình phát.
- **Giải pháp triệt để:**
  - Cập nhật `scripts/build_canonical_catalog.js` tự động nội suy và khôi phục đầy đủ 100% các bước lặp đối xứng theo đúng chỉ dẫn văn bản sách gốc, nâng tổng số bước thực hành của 18 bài quyền từ 796 lên **917 động tác thực tế** (ví dụ: Tiểu Niệm Đầu đủ **53 động tác**, Bài 108 tại chỗ đơn luyện đủ **134 động tác**, Bài Mộc nhân số 1 đủ **110 động tác**).

---

### Bài Học 26: Đồng Bộ Số Liệu Châm Ngôn (72 Câu) & Cân Đối Tỷ Lệ Khung Ảnh Và Chữ
- **Hiện tượng:**
  - Trước đây nhãn bên ngoài ghi "60 câu châm ngôn" nhưng mảng dữ liệu bên trong chỉ có 26 câu; đồng thời khung ảnh chân dung võ sư trong thẻ Châm ngôn quá lớn so với phần chữ làm mất cân đối thị giác.
- **Giải pháp triệt để:**
  - Mở rộng kho `MARTIAL_WISDOM_QUOTES` trong `web/src/data/martialPhilosophy.ts` lên **72 câu châm ngôn & yếu quyết** (**22 câu nguyên bản Sách gốc PGVX + 50 câu Tinh hoa Thế giới**), sử dụng `MARTIAL_WISDOM_QUOTES.length` động trên giao diện để số liệu ngoài và trong luôn khớp 100%.
  - Thiết kế lại bố cục thẻ Châm ngôn và thẻ Danh sư trong `PhilosophyHub.tsx` với khung chân dung gọn gàng, tỷ lệ vàng hài hòa với phần văn bản.

---

### Bài Học 27: Khôi Phục 100% Hướng Dẫn Tập Luyện, Tác Dụng & 12 Đại Khẩu Quyết Sách Gốc
- **Hiện tượng:**
  - Nhiều hướng dẫn tập luyện vô cùng quan trọng trong sách gốc (như *Những điểm cần biết khi tập Tiểu Niệm Đầu*: tập chậm 30–45 phút, bàn tay mở ra như cánh hoa nở, ngâm mình dưới nước để thấy lực cản, cảm giác nóng râm ran bàn tay căng căng; hay *Bài luyện tổng hợp 8 phần* trang 117–118; hay *Lục chủng trửu* trang 30) từng bị tóm tắt lược bỏ khi đưa lên web.
- **Giải pháp triệt để:**
  - Rà soát toàn bộ 36 chương sách gốc và tích hợp **100% nguyên văn không lược bỏ** vào `web/src/data/formsIntro.ts` (`bookOriginalIntro`, `bookTrainingGuidelines`, `bookBenefits`, `bookMantras`, `bookClosingNote`, `COMPOSITE_TRAINING_ROUTINE_8`), `web/src/data/fundamentals.ts` (bổ sung **Lục Chủng Trửu**, **Canh Thủ, Hộ Thủ, Trầm Thủ, Tam Không Thủ** thành **18 thủ pháp**, **Quyền 5 Cước 7**, **Đòn gối cầm nã**, **vòng mây 18cm**) và `web/src/data/martialPhilosophy.ts` (**12 Đại Khẩu Quyết Sách Gốc**).

---

### Bài Học 28: Khắc Phục Triệt Để Lỗi Cắt Thẻ Menu Bằng Kiến Trúc Flex-Wrap & Lưới Thích Ứng
- **Hiện tượng:**
  - Thanh menu chính và thanh chọn 18 bài quyền khi dùng `overflow-x-auto whitespace-nowrap` trên màn hình Desktop vừa phải đã làm các thẻ cuối bị khuất/cắt mất một phần mà người dùng không nhận ra có thanh cuộn ngang.
- **Giải pháp triệt để:**
  - Chuyển đổi thanh điều hướng trong `Header.tsx`, `CurriculumExplorer.tsx`, `PhilosophyHub.tsx`, `FundamentalHandFootAtlas.tsx` sang kiến trúc **`flex-wrap` đa hàng trên Desktop** và **Lưới thích ứng (`grid-cols-2 sm:grid-cols-3`)** cho danh sách bài quyền, đảm bảo 100% các thẻ luôn hiển thị trọn vẹn ngay trước mắt người dùng.

---

### Bài Học 29: Đột Phá Sư Phạm Đa Phương Thức (Phòng Chiếu 53 Video Đại Sư, 20 Video Tam Đại Quyền & Progressive Disclosure 3 Tầng)
- **Hiện tượng:**
  - Người học võ chỉ nhìn ảnh chụp tĩnh sẽ rất khó hình dung quỹ đạo chuyển động liên tục, nhịp thở và cách phát kình; nhưng nếu đổ toàn bộ lý thuyết dài dòng và video ra cùng một màn hình sẽ gây quá tải thị giác (Cognitive Overload).
- **Giải pháp triệt để:**
  1. **Phòng Chiếu Video Đại Sư (`web/src/data/masterVideos.ts` & `CurriculumExplorer.tsx`):** Tuyển chọn và xác thực trực tuyến **53 video thị phạm & phân tích kỹ thuật** (49 video ID duy nhất, 100% phản hồi HTTP 200 qua YouTube oEmbed API) cho toàn bộ 18 bài quyền + Phật Gia Khí Công Quyền. Đặc biệt ưu tiên **Tam Đại Bộ Quyền (`bai-07` Tiểu Niệm Đầu, `bai-09` Tầm Kiều, `bai-10` Tiêu Chỉ) với 20 video kinh điển & HD sư phạm** (Đại Tông Sư Diệp Vấn 1972, Chu Thượng Đồng, Hoàng Thuần Lương, Diệp Chuẩn, Diệp Chính, Ngô Sĩ Quý, Nima King, Samuel Kwok...), tích hợp chế độ xem **Song hành (Video + Sách gốc)** và **Thanh chuyển nhanh Tam Đại Bộ Quyền**.
  2. **Kiến trúc Sư phạm 3 Tầng (Progressive Disclosure):** Chia nội dung bài quyền thành 3 tầng rõ ràng (*Tầng 1: Điểm chạm cốt lõi 30 giây* $\rightarrow$ *Tầng 2: Cẩm nang nguyên bản Sách gốc* $\rightarrow$ *Tầng 3: Đối chiếu Vịnh Xuân Thế giới & Y học*), giúp người học tiếp thu sâu sắc mà không bao giờ bị ngợp thông tin.

---

### Bài Học 30: Giải Quyết Triệt Để Căn Bệnh "Báo Cáo Ảo" Bằng Động Cơ Kiểm Chứng Không Khoan Nhượng (Zero-Trust Anti-Hallucination Engine)
- **Hiện tượng & Phản hồi chí lý từ Người dùng:**
  - Một nhược điểm cố hữu của các hệ thống AI Agent là đôi khi tuyên bố *"đã làm xong"* hoặc *"đã kiểm tra 100%"* trong báo cáo, nhưng thực tế trên ổ đĩa vẫn còn đường dẫn file không tồn tại, số liệu cũ từ các phiên bản trước chưa được cập nhật đồng bộ sang toàn bộ 14 file `.md`, hoặc tên võ sư trong tài liệu lệch với sách gốc.
- **Giải pháp kỹ thuật triệt để:**
  - Xây dựng **Động cơ Kiểm chứng Thực tế Không Khoan Nhượng (`scripts/verify_claims_and_reality.js`)** hoạt động theo nguyên tắc **Zero-Trust (Không tin bất kỳ lời tuyên bố nào nếu không đo đạc trực tiếp từ ổ đĩa)**:
    1. Đọc trực tiếp AST/JSON của mã nguồn để lấy Ground Truth thực tế (36 chương, 18 bài thực hành, 917 động tác, 1.095 ảnh duy nhất / 1.096 file ảnh, 18 thủ pháp, 8 thế tấn/bộ/cước, 42 lời khuyên, 12 đại khẩu quyết, 13 đại sư thế giới, 72 châm ngôn, 53 video đại sư / 20 video Tam Đại Quyền, 71 file Markdown + 2 file Canvas Obsidian).
    2. Gọi trực tiếp giao thức mạng **YouTube oEmbed API** để kiểm chứng sống (Live HTTP 200) toàn bộ 49/49 Unique Video IDs (53 video entries).
    3. Quét toàn bộ 14 file `.md` / `SKILL.md` và 71 file Obsidian để phát hiện mọi đường dẫn ảo, số liệu cũ, tên võ sư sai hoặc học hàm sai; nếu có bất kỳ 1 sai lệch nào thì lệnh trả về `Exit Code 1` (THẤT BẠI).
    4. Xuất biên bản bằng chứng kèm chữ ký băm mật mã **SHA-256** của từng tệp tại `reports/audits/evidence/04_zero_trust_reality_proof.json`.
