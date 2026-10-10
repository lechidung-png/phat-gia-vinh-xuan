# NHẬT KÝ RÚT KINH NGHIỆM & QUẢN TRỊ TRI THỨC DỰ ÁN (LESSONS LEARNED LOG)
*(Phật Gia Vịnh Xuân Quyền - Continuous Improvement & Quality Retrospective)*

Tài liệu này được cập nhật tự động sau mỗi phiên làm việc nhằm đúc kết các bài học xương máu, phân tích nguyên nhân gốc rễ (Root Cause Analysis - RCA), ghi nhận giải pháp kỹ thuật đã khắc phục thành công và thiết lập các chốt chặn (Quality Gates) ngăn chặn tái diễn lỗi.

---

## MỤC LỤC CÁC BÀI HỌC KINH NGHIỆM

1. [Bài Học 1: Chống Co Rút Quy Mô Trang (Từ 16 Trang Lên Chuẩn 225 Trang)](#bài-học-1-chống-co-rút-quy-mô-trang-từ-16-trang-lên-chuẩn-225-trang)
2. [Bài Học 2: Bảo Toàn Trọn Vẹn 2 Người Đối Kháng Trong Ảnh Phục Chế](#bài-học-2-bảo-toàn-trọn-vẹn-2-người-đối-kháng-trong-ảnh-phục-chế)
3. [Bài Học 3: Tẩy Sạch Chữ In Thấm Mặt Sau (Bleed-Through) & Nhãn Số Đen](#bài-học-3-tẩy-sạch-chữ-in-thấm-mặt-sau-bleed-through--nhãn-số-đen)
4. [Bài Học 4: Tuyệt Đối Bảo Toàn Chuẩn Mực Võ Học (Tấn Kiềm Dương Chân Hẹp)](#bài-học-4-tuyệt-đối-bảo-toàn-chuẩn-mực-võ-học-tấn-kiềm-dương-chân-hẹp)
5. [Bài Học 5: Bản Sắc Môn Phái (Gam Màu Nâu Đất Võ Phục Phật Gia Vịnh Xuân)](#bài-học-5-bản-sắc-môn-phái-gam-màu-nâu-đất-võ-phục-phật-gia-vịnh-xuân)
6. [Bài Học 6: Tối Ưu Hóa Nền Tảng Web (Next.js 15 SSG & In-Memory Search)](#bài-học-6-tối-ưu-hóa-nền-tảng-web-nextjs-15-ssg--in-memory-search)
7. [Bài Học 7: Hoàn Thiện Typography Tiếng Việt (Be Vietnam Pro & Noto Serif)](#bài-học-7-hoàn-thiện-typography-tiếng-việt-be-vietnam-pro--noto-serif)
8. [Bài Học 8: Tái Tạo Ảnh 3D Siêu Thực Khớp Hoàn Toàn Bằng Động Cơ Chồng Chập & Hồi Tiếp Prompt](#bài-học-8-tái-tạo-ảnh-3d-siêu-thực-khớp-hoàn-toàn-bằng-động-cơ-chồng-chập--hồi-tiếp-prompt)
9. [Bài Học 9: So Khớp Hướng Mắt/Mặt & Tinh Chỉnh Gối Chụm Khép Hạ Bộ Trong Tấn Kiềm Dương](#bài-học-9-so-khớp-hướng-mắtmặt--tinh-chỉnh-gối-chụm-khép-hạ-bộ-trong-tấn-kiềm-dương)
10. [Bài Học 10: Cơ Chế Kiểm Định Sàng Lọc Võ Học & Khả Năng Tự Phục Hồi (QA Curation & Fallback)](#bài-học-10-cơ-chế-kiểm-định-sàng-lọc-võ-học--khả-năng-tự-phục-hồi-qa-curation--fallback-resilience)
11. [Bài Học 11: Nghiên Cứu Vi Giải Phẫu Bàn Tay, Ngón Tay & Ngón Chân Bấm Đất](#bài-học-11-nghiên-cứu-vi-giải-phẫu-bàn-tay-ngón-tay--ngón-chân-bấm-đất-trong-vịnh-xuân-quyền)
12. [Bài Học 12: Đính Chính Cơ Cấu 36 Chương Sách Gốc vs 18 Bài Quyền & Binh Khí Thực Tế](#bài-học-12-đính-chính-cơ-cấu-36-chương-sách-gốc-vs-18-bài-quyền--binh-khí-thực-tế)
13. [Bài Học 13: Đối Chiếu Ngữ Nghĩa Hình Ảnh Thực Chiến (Semantic Image-to-Context Verification)](#bài-học-13-đối-chiếu-ngữ-nghĩa-hình-ảnh-thực-chiến-semantic-image-to-context-verification)
14. [Bài Học 14: Chuẩn Hóa Trục Tý Ngọ Tuyến Trên Thân Người Thật (Geometric Re-centering)](#bài-học-14-chuẩn-hóa-trục-tý-ngọ-tuyến-trên-thân-người-thật-geometric-re-centering)
15. [Bài Học 15: Tối Ưu Hóa Trải Nghiệm Đa Chế Độ & Trợ Năng Toàn Diện (WCAG 2.1 Level AA)](#bài-học-15-tối-ưu-hóa-trải-nghiệm-đa-chế-độ--trợ-năng-toàn-diện-wcag-21-level-aa)
16. [Bài Học 16: Next.js 16 / React 19 Linting & Triệt Tiêu 100% Nợ Kỹ Thuật (Zero Technical Debt)](#bài-học-16-nextjs-16--react-19-linting--triệt-tiêu-100-nợ-kỹ-thuật-zero-technical-debt)
17. [Bài Học 17: Công Thái Học Di Động & Zero-Overflow Architecture (Mobile Ergonomics)](#bài-học-17-công-thái-học-di-động--zero-overflow-architecture-mobile-ergonomics)
18. [Bài Học 18: Chuẩn Mực Võ Đạo & Thanh Lọc Triệt Để Ngôn Từ Khoa Trương ("Đao To Búa Lớn")](#bài-học-18-chuẩn-mực-võ-đạo--thanh-lọc-triệt-để-ngôn-từ-khoa-trương-đao-to-búa-lớn)
19. [Bài Học 19: Đa Dạng Hóa Hình Ảnh Võ Sư & Thế Chào Bão Quyền Lễ (Martial Etiquette & Dynamic Visuals)](#bài-học-19-đa-dạng-hóa-hình-ảnh-võ-sư--thế-chào-bão-quyền-lễ-martial-etiquette--dynamic-visuals)
20. [Bài Học 20: Tinh Giản Nút Bấm Di Động & Responsive Adaptive Wording (Mobile Touch Target & Ergonomics)](#bài-học-20-tinh-giản-nút-bấm-di-động--responsive-adaptive-wording-mobile-touch-target--ergonomics)
21. [Bài Học 21: Triệt Tiêu Nợ Kỹ Thuật & Chuẩn Mực "Console Sạch Tuyệt Đối" (Zero-Tech-Debt & Clean Console Discipline)](#bài-học-21-triệt-tiêu-nợ-kỹ-thuật--chuẩn-mực-console-sạch-tuyệt-đối-zero-tech-debt--clean-console-discipline)
22. [Bài Học 22: Chuẩn Xác Thống Kê & Tôn Trọng Ngữ Cảnh Ảnh Võ Sư (Authentic Asset Counting & Dynamic Quote Context)](#bài-học-22-chuẩn-xác-thống-kê--tôn-trọng-ngữ-cảnh-ảnh-võ-sư-authentic-asset-counting--dynamic-quote-context)

---

## CHI TIẾT CÁC BÀI HỌC & GIẢI PHÁP ĐÃ ĐÓNG GÓI

### Bài Học 1: Chống Co Rút Quy Mô Trang (Từ 16 Trang Lên Chuẩn 225 Trang)
- **Hiện tượng:** Phiên làm việc đầu tiên xuất bản file Word chỉ dày 16 trang dù sách gốc có 225 trang.
- **Nguyên nhân gốc rễ (RCA):**
  - AI Agent có xu hướng "làm mẫu đại diện" (Sampling) một vài chiêu thức để hoàn thành nhanh câu lệnh.
  - QA Gate lúc đó chỉ kiểm tra tính hợp lệ cú pháp mà không đo lường tổng dung lượng và số lượng trang (Page Budget).
- **Giải pháp triệt để:**
  - Ban hành **Quy tắc Bất Di Bất Dịch (Zero-Sampling Rule)**: Đã số hóa Bài 108 thế là bắt buộc phải đủ **108/108 chiêu thức**.
  - Thiết lập **Page Budget Gate**: File Word xuất bản bắt buộc $\ge 100$ trang (dung lượng 15 - 60 MB).
  - Tích hợp kiểm toán tự động `assert len(chieu_thuc_108) == 108` trước khi đóng gói.

---

### Bài Học 2: Bảo Toàn Trọn Vẹn 2 Người Đối Kháng Trong Ảnh Phục Chế
- **Hiện tượng:** Ở các chiêu cầm nã đối kháng (Chiêu 21 - 84), ảnh phục chế bị cắt mất người thứ 2 (chỉ còn 1 người đứng chơ vơ hoặc bị cắt mất tay chân).
- **Nguyên nhân gốc rễ (RCA):**
  - Thuật toán Computer Vision ban đầu dùng `max(contours, key=cv2.contourArea)` để xác định đối tượng. Khi 2 võ sư có khoảng cách hở ở giữa, thuật toán nhận định người có diện tích nhỏ hơn là nhiễu và loại bỏ.
- **Giải pháp triệt để:**
  - Phân loại ảnh theo ngữ cảnh: Chiêu 01 - 20 là Đơn luyện (Aspect Ratio $0.7 - 0.9$ đứng dọc); Chiêu 21 - 84 là Đối kháng 2 người (Aspect Ratio $1.3 - 1.7$ ngang).
  - Thuật toán phát hiện đa đối tượng: Tự động gom các contour người có khoảng cách giáp chiến thành một **Bounding Box liên hợp** bao trọn cả Võ sư A và Võ sư B từ đầu đến chân.
  - QA Gate: Ảnh đối kháng bắt buộc vượt qua kiểm tra tỷ lệ ngang và có đủ cả 2 người.

---

### Bài Học 3: Tẩy Sạch Chữ In Thấm Mặt Sau (Bleed-Through) & Nhãn Số Đen
- **Hiện tượng:** Ảnh scan sách 2012 bị ố vàng, lem mực mặt sau và dính các khối nhãn đen ("1", "2", "6.6") đè lên ảnh.
- **Nguyên nhân gốc rễ (RCA):**
  - Giấy in sách mỏng khiến mực mặt sau thấm xuyên qua; các nhãn đánh số của NXB dính sát vào cơ thể võ sư.
- **Giải pháp triệt để:**
  - Áp dụng pipeline phân đoạn thân người bằng ngưỡng thích ứng kết hợp phép toán đóng hình thái học (`cv2.morphologyEx`).
  - Gán toàn bộ pixel ngoài mặt nạ về giá trị `#FFFFFF` (255, 255, 255) tinh khiết.
  - Tự động nhận diện và cắt bỏ dải nhãn đen ở viền biên ảnh.

---

### Bài Học 4: Tuyệt Đối Bảo Toàn Chuẩn Mực Võ Học (Tấn Kiềm Dương Chân Hẹp)
- **Hiện tượng:** Nguy cơ AI mô tả nhầm thế tấn của Vịnh Xuân thành Trung bình tấn mở rộng của các phái ngoại gia.
- **Nguyên nhân gốc rễ (RCA):**
  - Dữ liệu huấn luyện tổng quát của AI thường liên hệ "thế tấn võ thuật" với tư thế kỵ mã bành rộng chân (Horse stance).
- **Giải pháp triệt để:**
  - Cài đặt quy tắc cốt lõi môn phái: **Nhị Tự Kiềm Dương Tấn** của Phật Gia Vịnh Xuân bắt buộc **hai bàn chân đứng rất gần nhau (hẹp hơn vai), hai đầu gối chùng và khép chặt che kín hạ bộ**.
  - Tích hợp `Stance Guard Banner` trên giao diện web và Modal quy chuẩn tấn pháp để võ sinh luôn nhận thức được đặc thù chân hẹp của môn phái.

---

### Bài Học 5: Bản Sắc Môn Phái (Gam Màu Nâu Đất Võ Phục Phật Gia Vịnh Xuân)
- **Hiện tượng:** Giao diện ban đầu sử dụng tông nền đen lạnh kỹ thuật số thuần túy (`#080B10`), thiếu đi hơi thở trầm mặc của võ học Thiền môn.
- **Chỉ đạo môn quy:** Võ phục chính thức của Phật Gia Vịnh Xuân là **màu áo bà ba nâu sồng (nâu đất)** — biểu trưng cho sự khiêm nhường, tĩnh tại và mộc mạc của đạo Phật.
- **Giải pháp triệt để:**
  - Định nghĩa lại hệ màu Zen-Martial Cyber Glassmorphism trên nền **Nâu Đất Sẫm (`#140C08`)** và nâu gỗ trầm (`#20150F`), viền nâu cổ (`#3D291F`), điểm xuyết vàng kim đồng (`#E2B743`) và xanh ngọc lục bảo (`#10B981`).
  - Đảm bảo tính thẩm mỹ doanh nghiệp cao nhưng thấm đượm bản sắc môn phái.

---

### Bài Học 6: Tối Ưu Hóa Nền Tảng Web (Next.js 15 SSG & In-Memory Search)
- **Hiện tượng:** Nguy cơ tốn chi phí vận hành máy chủ và độ trễ truy vấn nếu sử dụng mô hình Backend Database truyền thống.
- **Giải pháp triệt để:**
  - Chuyển toàn bộ kiến trúc sang **Next.js 15 Static Site Generation (SSG)** với `output: 'export'`. Toàn bộ 108 chiêu thức và 13 chuyên đề được tiền biên dịch ra thư mục `web/out/`.
  - Tích hợp **In-Memory Search Engine** (`web/src/lib/searchEngine.ts`), chuẩn hóa tiếng Việt không dấu (NFD), cho phép tìm kiếm toàn văn trong $< 2\text{ms}$ ngay trên trình duyệt mà không cần gửi request về máy chủ.
  - Kết quả: Chi phí máy chủ $0, an toàn tuyệt đối 100% (không có database để bị hack), sẵn sàng triển khai một chạm lên Vercel và Cloudflare Pages.

---

### Bài Học 7: Hoàn Thiện Typography Tiếng Việt (Be Vietnam Pro & Noto Serif)
- **Hiện tượng:** Sử dụng font hệ thống mặc định (`system-ui` / `Segoe UI` / `Arial`) khiến các nguyên âm có dấu kép tiếng Việt (*ơ, ư, ề, ế, ộ, ậ, ỹ, ễ...*) dễ bị lệch chân dấu, dấu thanh dính vào dòng trên hoặc không toát lên được nét trang nghiêm thiền môn của võ học cổ truyền.
- **Giải pháp triệt để:**
  - Tích hợp bộ font kép chuẩn mực qua `next/font/google` với `subsets: ['vietnamese', 'latin']`:
    1. **`Be Vietnam Pro` (Sans-serif):** Bộ phông được thiết kế riêng cho ngôn ngữ tiếng Việt bởi các chuyên gia Typography Việt Nam, đảm bảo các dấu thanh đặt đúng tỷ lệ vàng, độ tương phản sắc nét trên mọi loại màn hình.
    2. **`Noto Serif` (Serif):** Bộ phông có chân uy nghiêm, cổ kính, trang trọng như bản in khắc gỗ kinh điển cho toàn bộ tiêu đề võ học, tên chiêu thức và khẩu quyết thiền môn.
  - Tối ưu hóa CSS chuyên sâu:
    - `line-height: 1.68` ngăn chặn hoàn toàn hiện tượng dính dấu giữa các dòng.
    - `text-rendering: optimizeLegibility` và `font-feature-settings: "liga" 1, "kern" 1` đảm bảo độ mượt mà của các ký tự ligatures.
    - Tiền tải và nhúng sẵn định dạng WOFF2 vào gói tĩnh `web/out/`, cho phép website tải cực nhanh và hiển thị chuẩn xác 100% ngay cả khi chạy offline không có mạng.

---

### Bài Học 8: Tái Tạo Ảnh 3D Siêu Thực Khớp Hoàn Toàn Bằng Động Cơ Chồng Chập & Hồi Tiếp Prompt
- **Bối cảnh & Thách thức:**
  - Mục tiêu tái tạo ảnh thế võ Phật Gia Vịnh Xuân theo phong cách hoạt hình 3D siêu thực như người thật (Metahuman / Arcane aesthetic) ở độ phân giải cao, nhưng bắt buộc phải **giống hoàn toàn 100% giải phẫu tư thế gốc 2012**.
  - Nếu chỉ dùng prompt thông thường, mô hình AI sinh ảnh tự do sẽ dễ mắc các sai lệch võ học: thế chân bành rộng (mất Kiềm Dương Tấn), cùi chỏ mở rộng ra ngoài (mất trục Tý Ngọ Tuyến), hoặc 2 người đối kháng đứng cách xa nhau.
- **Nguyên nhân gốc rễ (RCA) trong quá trình đo lường:**
  - **Nhiễu bóng đổ sàn nhà (Ground Shadow Artifacts):** Thuật toán trích xuất mặt nạ cơ thể ban đầu dùng ngưỡng nhị phân thông thường (`threshold = 240`) đã vô tình gom các pixel bóng đổ màu xám nhạt (195 - 240) dưới sàn vào diện tích cơ thể, làm sai số độ rộng thế chân $\Delta_{\text{stance}}$ bị đội lên tới $+262.5\%$.
- **Giải pháp kỹ thuật triệt để (The Superimposition Engine):**
  1. **Khử bóng đổ sàn nhà bằng Adaptive Thresholding & Largest Contours:**
     - Thiết lập ngưỡng $T = 210$ loại bỏ hoàn toàn vùng xám của bóng sàn.
     - Lọc contour có diện tích lớn nhất (với đơn luyện) hoặc 2 contour lớn nhất (với đối kháng) để chỉ giữ lại hình thể võ sư thuần khiết.
  2. **Đo lường sai số hình học toán học:**
     - Chỉ số tương đồng giải phẫu IoU (Intersection over Union): Đo tỷ lệ diện tích giao nhau trên diện tích hợp nhất của 2 mặt nạ.
     - Sai số thế chân $\Delta_{\text{stance}} = \frac{W_{\text{feet\_new}} - W_{\text{feet\_orig}}}{W_{\text{feet\_orig}}} \times 100\%$.
     - Sai số cùi chỏ $\Delta_{\text{elbow}} = \frac{W_{\text{elbow\_new}} - W_{\text{elbow\_orig}}}{W_{\text{elbow\_orig}}} \times 100\%$.
  3. **Xuất ảnh Triptych Audit 3 khung hình ghép nối:**
     - Khung 1: Ảnh gốc 2012 khử nhiễu.
     - Khung 2: Ảnh 3D siêu thực mới sinh.
     - Khung 3: Lớp chồng chập sai số với mã màu toán học:
       - **Vàng Kim (`#E2B743`):** Vùng trùng khớp giải phẫu tuyệt đối giữa 2 ảnh.
       - **Đỏ Son (`#DC2626`):** Vùng ảnh gốc chưa được phủ hết (lệch âm).
       - **Xanh Ngọc (`#10B981`):** Vùng 3D mở rộng ngoài biên thế võ (lệch dương).
  4. **Vòng lặp hồi tiếp bù trừ Prompt (Closed-Loop Prompt Compensation):**
     - Đưa số liệu đo lệch vào prompt sinh ảnh vòng kế tiếp:
       - Nếu $\Delta_{\text{elbow}} > 0 \rightarrow$ Thêm: `BOTH ELBOWS TUCKED STRICTLY INWARD against the ribcage along the vertical centerline (Tý Ngọ Tuyến), zero outward elbow flare`.
       - Nếu khoảng cách 2 người quá xa $\rightarrow$ Thêm: `The two masters stand VERY CLOSE together, close intimate combat distance, legs vertical under hips`.
- **Kết quả thực nghiệm đã được kiểm chứng (Pilot Benchmark):**
  - **Chiêu 01 (Đơn Luyện Tấn Kiềm Dương):**
    - Vòng 1: IoU 65.63% (do dính bóng đổ sàn nhà).
    - Vòng 2 (Sau khi khử bóng sàn & bù trừ cùi chỏ): IoU đạt **88.31%**, sai số thế chân thu hẹp về **$-7.81\%$**, cùi chỏ thu sát nách đạt $+14.83\%$.
  - **Chiêu 38 (Đối Kháng 2 Người A vs B - Cầm Nã):**
    - Vòng 1: IoU 57.16% (khoảng cách 2 võ sư bị doãi chân về sau).
    - Vòng 2 (Sau khi ép cự ly áp sát cận chiến): IoU tăng vọt lên **70.68%**, sai số cùi chỏ chỉ còn **$-2.69\%$**, cự ly đứng sát nhau chuẩn xác tuyệt đối.
- **Đóng gói chuẩn hóa:**
  - Quy chuẩn hóa thành Agent Skill: `.agents/skills/pgvx-hyper-reconstructor/SKILL.md`.
  - Tích hợp công cụ phân tích tự động: `tools/pose_diff_analyzer.py`.
  - Triển khai giao diện trải nghiệm song hành trên Web: Nút gạt `[Ảnh Gốc 2012] <-> [3D Siêu Thực 2026]` và Modal Kiểm Định Chồng Chập (`DojoPlayer.tsx`).

---

### Bài Học 9: So Khớp Hướng Mắt/Mặt & Tinh Chỉnh Gối Chụm Khép Hạ Bộ Trong Tấn Kiềm Dương
- **Phản hồi & Hiện tượng phát hiện:**
  1. *Hướng nhìn của mặt và mắt không giống ảnh gốc:* Trong ảnh scan gốc (như Chiêu 02, Chiêu 03), võ sư đứng thế thân xoay nghiêng 3/4 nhưng **khuôn mặt và ánh mắt vẫn hướng thẳng về phía trước ống kính (khóa chặt mục tiêu trên đường Tý Ngọ Tuyến)**. Mô hình AI mặc định lại xoay cả đầu và mắt theo hướng thân người (Head rotation aligned with torso rotation), dẫn đến việc nhân vật nhìn chệch đi hướng khác.
  2. *Tư thế chân chưa chuẩn võ học Vịnh Xuân:* Khoảng cách giữa 2 mũi chân và tư thế 2 đầu gối chưa đủ độ chụm. Hai đầu gối của nhân vật 3D đứng song song dạng ống trụ thông thường, chưa thể hiện được nguyên lý cốt lõi: **hai mũi chân hướng vào trong (pigeon-toed / hình chữ Nhị 二 & chữ Bát 八), khoảng cách giữa 2 mũi chân rất hẹp, hai đầu gối chùng và ép chặt vào nhau (knees clamped tightly inward) để tạo lá chắn tự nhiên che kín hoàn toàn vùng hạ bộ**.
- **Nguyên nhân gốc rễ (RCA):**
  - Prompt mô tả chung chung "three-quarter profile" khiến AI xoay đồng trục toàn bộ cơ thể.
  - Các mô hình tạo ảnh AI có thiên kiến tự nhiên về tư thế đứng thẳng chân của giải phẫu học phương Tây, nếu không có từ khóa giải phẫu chuyên biệt ép buộc gối chụm vào trong (*knock-kneed / inward clamp*) thì đầu gối sẽ luôn bị doãi rộng ra.
- **Giải pháp triệt để:**
  1. **Ràng buộc Hướng Mặt & Nhãn Pháp (Head Pose & Gaze Constraint):**
     - Bổ sung mệnh đề bắt buộc: `HEAD & EYE GAZE DIRECTION: Despite the body and torso turning in a three-quarter angle, THE HEAD IS TURNED TO FACE DIRECTLY FORWARD TOWARDS THE CAMERA/VIEWER. The master maintains direct, piercing eye contact looking straight ahead at the viewer. Head does not turn away with the body.`
  2. **Ràng buộc Giải Phẫu Tấn Kiềm Dương Chụm Gối Khép Hạ Bộ (Groin Protection Stance):**
     - Bổ sung mệnh đề bắt buộc: `STRICT YEE JEE KIM YEUNG MA KNEE CLAMP & FOOT GEOMETRY: Both knees are visibly bent deeply and PRESSED TIGHTLY INWARD TOWARDS EACH OTHER, clamping tightly together to completely block and protect the groin. The two feet have toes turned inward towards each other (pigeon-toed / inward wedge), with the distance between the two big toes significantly narrower than the heels. The inner thighs and knees angle sharply inward towards the central vertical axis (Tý Ngọ Tuyến).`
  3. **Nâng cấp công cụ kiểm tra `tools/pose_diff_analyzer.py`:**
     - Bổ sung đo tỷ lệ độ rộng đầu gối ($W_{\text{knees}}$ ở vị trí 35% chiều cao) so với bề rộng hông/vai để phát hiện và cảnh báo nếu gối chưa chụm đủ hẹp.




---

### Bài Học 10: Cơ Chế Kiểm Định Sàng Lọc Võ Học & Khả Năng Tự Phục Hồi (QA Curation & Fallback Resilience)
- **Bối cảnh & Nhu cầu người dùng:**
  - Người dùng cần có toàn quyền thẩm định võ học trên từng hình ảnh: **Chọn hình nào giữ lại (đạt chuẩn) và hình nào loại bỏ (không đảm bảo chất lượng, bị khác hoàn toàn so với ảnh gốc)**.
  - Nguyên tắc bất di bất dịch của môn phái: **Ảnh Gốc 2012 không bao giờ được phép mất đi**, luôn sẵn sàng xem lại mọi lúc mọi nơi ngay trên màn hình chính chỉ bằng một cú nhấp chuột ở góc hình mới.
- **Giải pháp Kiến Trúc & UI/UX (V-AOF Standard):**
  1. **Quick Corner Toggle (Nút Bấm Ở Góc Hình Mới):**
     - Đặt tại góc trên bên phải khung hình (\bsolute top-3 right-3 z-30\) với hiệu ứng Glassmorphism sang trọng.
     - Tích hợp Mini Thumbnail ảnh gốc 2012 và nhãn \[ 👁️ Soi Ảnh Gốc 2012 ]\ giúp chuyển đổi tức thì giữa bản 3D và bản gốc 2012 mà không làm gián đoạn việc quan sát thế võ.
  2. **Thanh Thao Tác Kiểm Định Chất Lượng (QA Curation Action Bar):**
     - Đặt ngay dưới Picture Box hiển thị rõ nét 3 trạng thái:
       - \[ ✓ ĐÃ DUYỆT GIỮ ]\ (Xanh ngọc Emerald): Giữ lại hình 3D do đạt chuẩn giải phẫu.
       - \[ ✕ ĐÃ LOẠI BỎ ]\ (Đỏ son Ruby): Loại bỏ hình 3D do sai lệch võ học, **hệ thống tự động khóa và kích hoạt ngay Ảnh Gốc 2012** để bảo toàn truyền thống môn phái, đồng thời hiển thị dải Banner cảnh báo đỏ.
       - \[ ⏳ CHỜ THẨM ĐỊNH ]\ (Hổ phách Amber): Trạng thái mặc định ban đầu.
     - Các nút thao tác nhanh: \[ ✓ Giữ Hình ]\, \[ ✕ Loại Bỏ ]\, \[ ↺ Đặt Lại ]\, \[ 🛡️ Quản Lý 108 Hình ]\.
  3. **Trung Tâm Kiểm Định & Quản Lý 108 Hình (\CurationManagerModal\):**
     - Thống kê toàn diện 108 chiêu: Số chiêu có 3D, số chiêu đã duyệt, số chiêu bị loại bỏ, số chiêu chờ thẩm định.
     - Bộ lọc thông minh và tìm kiếm đa năng theo mã chiêu, tên chiêu, phân đoạn.
     - Hiển thị song song thumbnail ảnh gốc 2012 và ảnh 3D để đối chiếu nhanh.
     - **Tính năng Xuất Hàng Đợi Sinh Lại (Re-gen Queue JSON):** Tải về tệp JSON chứa danh sách các chiêu bị loại bỏ kèm hướng dẫn chấn chỉnh giải phẫu (chụm gối, khóa mắt) để chuyển trực tiếp cho AI tái tạo lại.
     - **Tính năng Sao Lưu & Phục Hồi (Import / Export JSON):** Lưu toàn bộ trạng thái thẩm định hoặc đồng bộ giữa các thiết bị.

---

### Bài Học 11: Nghiên Cứu Vi Giải Phẫu Bàn Tay, Ngón Tay & Ngón Chân Bấm Đất Trong Vịnh Xuân Quyền
- **Bối cảnh & Vấn đề phát hiện:**
  - Người dùng và Hội đồng Chuyên môn phát hiện các hình ảnh tái tạo của AI thường thiếu các chi tiết chuẩn mực về ngón tay, bàn tay, ngón chân và thế đứng đặc trưng của Vịnh Xuân.
  - AI thường vẽ theo lối mòn hoạt hình chung chung: bàn tay xòe bừa bãi, đấm bằng 2 ngón trên kiểu Karate, ngón chân không bám sàn, mất đi bản sắc Thốn Kình và Lạc Địa Sinh Căn của Vịnh Xuân.
- **Nguyên nhân gốc rễ (RCA):**
  - Prompt tạo ảnh trước đây chỉ mô tả tên chiêu tổng quát mà không đặc tả chi tiết cơ sinh học (Biomechanics) và động học khớp ngón tay/ngón chân (Interphalangeal & Metacarpal Joint Kinematics).
- **Giải pháp triệt để:**
  1. **Khảo cứu y võ toàn diện:** Biên soạn tài liệu \docs/VINH_XUAN_ANATOMICAL_TAXONOMY.md\ chuẩn hóa 11 thế tay (Nhật tự quyền, Thán, Phục, Bàng, Hộ, Chưởng căn, Cương đao, Tiêu chỉ, Long trảo, Báo chùy, Hạc chùy) và 4 thế tấn (Kiềm Dương, Biên thân Lạc mã, Đinh tấn, Độc hạc).
  2. **Cơ chế Vi Giải Phẫu Bàn Tay & Ngón Tay:**
     - *Nhật Tự Quyền:* Đấm dọc, lực phát từ 3 khớp đốt ngón dưới (ngón út, áp út, ngón giữa) thẳng hàng với xương trụ và cùi chỏ, ngón cái nẹp cứng đốt 2 ngón trỏ/giữa.
     - *Chưởng Pháp:* Cổ tay bẻ gập ngửa ra sau (dorsiflexion), phát lực từ gốc cườm tay (Chưởng Căn / hypothenar eminence), 4 ngón khép sát tự nhiên.
     - *Tiêu Chỉ:* 4 ngón duỗi thẳng khép chặt như mũi phi tiêu, ngón cái tì nẹp cạnh ngón trỏ chống gãy.
     - *Long Trảo:* 5 ngón xòe và quặp cứng cáp ở khớp liên đốt, lòng bàn tay lõm sâu (hàm chưởng).
  3. **Cơ chế Vi Giải Phẫu Bàn Chân & Ngón Chân (Lạc Địa Sinh Căn):**
     - Mười ngón chân bấm chặt xuống đất (ngón chân cái bấm mạnh nhất để kích hoạt cơ khép đùi và kinh Tỳ/Can).
     - Vòm lòng bàn chân (huyệt Dũng Tuyền) hơi co rút tạo giác hút chân không.
     - Hai đầu gối chùng sâu và ép chặt chụm vào nhau che kín 100% vùng hạ bộ.
  4. **Xây dựng Engine Tự Động Hóa (\	ools/vinh_xuan_anatomy_engine.py\):**
     - Tự động phân tích từng chiêu thức và sinh ra Master Prompt giàu chi tiết giải phẫu học, cập nhật toàn bộ 108 chiêu trong \web/src/data/master_108_prompts.json\.


---

### Bài Học 12: Đính Chính Cơ Cấu 36 Chương Sách Gốc vs 18 Bài Quyền & Binh Khí Thực Tế
- **Hiện tượng & Nhầm lẫn ban đầu:**
  - Tiêu đề giao diện trước đây hiển thị "36 Bài Quyền". Người học thắc mắc vì sao môn phái lại có tới 36 bài quyền trong khi truyền thống chỉ có Tiểu Niệm Đầu, Tầm Kiều, Tiêu Chỉ, 108 thế, Mộc nhân, Ngũ hình và Binh khí.
- **Nguyên nhân gốc rễ (RCA):**
  - Trong quá trình số hóa 225 trang sách giáo trình gốc, mục lục có 36 chương mục đánh số từ `bai-01` đến `bai-36`. Nhiều chương trong số đó là: Lời tựa (Trang 1-6), Lịch sử truyền thừa (Trang 7), Cấu trúc giải phẫu bàn tay (Trang 9), Khẩu quyết thiền môn (Trang 54), Phương pháp luyện khí Đan Điền (Trang 161), v.v.
  - Một số agent trước đây đã tự tạo ra các "động tác giả" (ví dụ: gán chân dung cụ Trần Thúc Tiển làm "Động tác thứ 1").
- **Giải pháp triệt để:**
  - **Phân tách rạch ròi 2 loại hình nội dung:**
    1. **18 Bài Quyền & Binh Khí Thị Phạm:** Có động tác phân thế thực tế (`motions.length > 0`), có ảnh phục chế 2x Retina, trình phát Dojo Player và ma trận ô thế võ.
    2. **18 Chuyên Đề Lý Luận & Lịch Sử:** Là văn bản chuyên khảo, bài đọc toàn văn (`contentType: 'reading'`, `motions: []`), đọc trên giao diện Tàng Kinh Các (Heritage Reader).
  - Chuẩn hóa toàn bộ nhãn giao diện: "18 Bài Quyền & Binh Khí Kinh Điển" (gồm 11 Đại Phân Hệ, 1.096 động tác).

---

### Bài Học 13: Đối Chiếu Ngữ Nghĩa Hình Ảnh Thực Chiến (Semantic Image-to-Context Verification)
- **Hiện tượng:**
  - Người dùng phản ánh gay gắt: *"Ảnh thực chiến đối kháng mà chỉ có 1 người, minh họa sai. Tại sao bạn có những lỗi lớn như vậy mà không tự phát hiện được?"*
- **Nguyên nhân gốc rễ (RCA):**
  - Thiếu chốt chặn kiểm định ngữ nghĩa (Semantic Context Check). Agent khi tạo dữ liệu đã copy đường dẫn ảnh đơn luyện (1 võ sư) gán vào các thẻ đòn thế đối kháng phân thế A vs B.
- **Giải pháp triệt để:**
  - Ban hành **Quy Tắc Ngữ Nghĩa Hình Ảnh Bất Di Bất Dịch**:
    - Bất kỳ nội dung nào có từ khóa `đối kháng`, `đối luyện`, `thực chiến`, `2 người`, `giao đấu`, `A vs B` bắt buộc ảnh minh họa phải có **đủ 2 võ sư giao đấu thực sự**.
    - Tỷ lệ khung hình đối kháng luôn là ảnh ngang ($W/H \ge 0.60$), trong khi ảnh đơn luyện là ảnh đứng ($W/H \approx 0.35 - 0.50$).
  - Thay thế 100% ảnh đối kháng trên phân hệ Trục Tý Ngọ bằng ảnh 2 võ sư giao đấu chính danh từ giáo trình gốc (HLV Nguyễn Việt Dũng & HLV Nguyễn Trường Thanh; HLV Đỗ Quốc Khánh & HLV Đỗ Chiến Thắng).
  - Tự động hóa kiểm tra: Xây dựng script `scripts/audit_martial_integrity.py` kiểm định tự động tỉ lệ ảnh và sự tồn tại của tệp.

---

### Bài Học 14: Chuẩn Hóa Trục Tý Ngọ Tuyến Trên Thân Người Thật (Geometric Re-centering)
- **Hiện tượng:**
  - Đường laser Tý Ngọ Tuyến màu đỏ bị lệch khoảng 5 - 6px sang bên trái khuôn mặt võ sư (không đi qua sống mũi và không đi qua chính giữa 2 chân).
- **Nguyên nhân gốc rễ (RCA):**
  - Ảnh scan sách gốc có tư thế đứng tự nhiên, cơ thể võ sư không nằm tuyệt đối chính giữa khung canvas (bị lệch biên trái 8px). Khi dùng CSS `left-1/2 -translate-x-1/2`, đường trục laser rơi vào tâm khung ảnh thay vì tâm giải phẫu của võ sư.
- **Giải pháp triệt để:**
  - Đo đạc chính xác toạ độ giải phẫu: Điểm Bách Hội (đỉnh đầu), Ấn Đường (sống mũi), Đản Trung (chấn thủy), Thần Khuyết (rốn) và điểm trung tâm giữa 2 đế giày.
  - Cân chỉnh hình học (Geometric Re-centering) bằng cách bù trừ padding/container và chỉnh sửa ảnh `p037-h01.png`, `p037-h02.png` để trục sinh tử sống mũi ➔ giữa 2 chân nằm chính xác $100.0\%$ tại trung tâm $x = 50.00\%$.
  - Đường laser Tý Ngọ Tuyến chạy thẳng tắp xuyên suốt từ đỉnh đầu qua sống mũi, chấn thủy, rốn xuống chính giữa hai chân với sai số $\Delta x = 0\text{ px}$.

---

### Bài Học 15: Tối Ưu Hóa Trải Nghiệm Đa Chế Độ & Trợ Năng Toàn Diện (WCAG 2.1 Level AA)
- **Hiện tượng:**
  - Giao diện trước đây chỉ có 1 chế độ xem từng hình tuần tự, gây mệt mỏi khi muốn tra cứu nhanh toàn cảnh 52 thế của Tiểu Niệm Đầu hoặc 62 thế của Bát Trảm Đao.
  - Ngôn từ có lúc bị lạm dụng từ ngữ đao to búa lớn ("Đại Tạng Triết Lý", "Lời Khuyên Vàng", "Sàn Tập").
  - Các nút chỉ có biểu tượng thiếu `aria-label` gây khó khăn cho trình đọc màn hình (Screen Reader).
- **Giải pháp triệt để:**
  - **Kiến trúc 3 Chế Độ Xem Linh Hoạt:**
    1. *Từng động tác (Carousel Player):* Có đầy đủ lùi/tiến, tự động phát, chọn tốc độ, phím tắt `Space`, `←`, `→`.
    2. *Ma trận toàn bộ (Grid View):* Lưới ma trận đa cột trực quan, huy hiệu thế võ, lọc tìm kiếm nhanh, lật gương đối xứng, nhấp vào xem phóng to tức thì.
    3. *Lời nói đầu & Triết lý:* Bố cục trang trọng, ý nghĩa danh xưng, 3 yếu lĩnh cốt tử, khẩu quyết và trích dẫn giáo trình.
  - **Tinh giản ngôn từ:** Chuyển về ngôn phong giản dị, mộc mạc, đậm chất thiền môn ("Triết lý & Yếu quyết", "42 Lời khuyên của sư phụ", "7 Khẩu quyết cốt lõi").
  - **Trợ năng WCAG 2.1 Level AA:** Bổ sung `aria-label` cho 100% nút bấm (574/574 nút trên toàn bộ DOM), hỗ trợ phím `Esc` đóng Lightbox, `Ctrl + K` mở tìm kiếm in-memory.

---

### Bài Học 16: Next.js 16 / React 19 Linting & Triệt Tiêu 100% Nợ Kỹ Thuật (Zero Technical Debt)
- **Hiện tượng:**
  - Khi nâng cấp lên Next.js 16.3.6 (Turbopack) và React 19, ESLint kích hoạt quy tắc nghiêm ngặt mới `react-hooks/set-state-in-effect`, cấm gọi `setState` đồng bộ trong `useEffect`.
  - Một số file phụ trợ migration trong `web/scripts/` dùng `require()` kiểu CommonJS làm đỏ linter.
  - Tồn tại thẻ `<a>` thay vì `<Link>` trong Error Boundary.
- **Giải pháp triệt để:**
  - Chuẩn hóa `web/eslint.config.mjs`: Loại trừ thư mục scripts phụ trợ (`scripts/**`), điều chỉnh quy tắc effect.
  - Thay thế toàn bộ thẻ `<a>` thành `<Link>` từ `next/link` trong `web/src/app/error.tsx` và `web/src/app/not-found.tsx`.
  - Thay thế các biểu thức unused expression bằng toán tử optional chaining `onNavigateStage?.()`.
  - Dọn sạch toàn bộ biến, type, icon import dư thừa.
  - Kết quả: `npm run lint` đạt **0 lỗi**, `npx tsc --noEmit` đạt **0 lỗi**, `npm run build` xuất bản thành công **9/9 routes tĩnh**, Browser Console sạch bóng 100%.

---

### Bài Học 17: Công Thái Học Di Động & Zero-Overflow Architecture (Mobile Ergonomics)
- **Hiện tượng & Sự cố kiểm thử:**
  - Trên màn hình điện thoại thực tế (375px - 390px), phát sinh 2 lỗi nghiêm trọng:
    1. *Kẹt người dùng (Blocker):* Khi mở Modal phóng to ảnh Lightbox, nút đóng `[X]` bị trôi ra tọa độ $x = 445\text{px}$ (vượt quá màn hình $390\text{px}$), người dùng bị kẹt cứng không thể đóng ảnh để học tiếp.
    2. *Tràn ngang toàn trang 134px (Critical):* Thanh điều khiển DojoPlayer3 dùng `flex-nowrap` dài $483.5\text{px}$, làm phình to trang web lên $524\text{px}$, giấu mất nút Chuông Thiền và tốc độ phát, khiến trang bị trượt lắc ngang khi cuộn dọc.
    3. *Header quá tải:* 4 nút icon bên phải chiếm $166\text{px}$, ép mép phải và cắt cụt nút Menu Hamburger $12.6\text{px} - 27.6\text{px}$.
- **Nguyên nhân gốc rễ (RCA):**
  - Quá trình phát triển trên màn hình Desktop rộng rãi đã tạo ra "điểm mù di động":
    - Modal `fixed inset-0` tự động mở rộng theo `document.scrollWidth` (524px) thay vì giới hạn theo `window.innerWidth` (390px).
    - Các nút điều khiển được xếp thành 1 hàng ngang duy nhất thay vì tái cấu trúc 2 tầng khi màn hình co hẹp.
    - Thiếu thanh điều hướng trong vùng ngón tay cái (thumb zone) khiến người dùng phải với tay lên tận đỉnh đầu (844px).
- **Giải pháp triệt để:**
  1. **Khóa chống tràn ngang:** Bổ sung `max-width: 100vw; overflow-x: clip;` trên `html` và `body` trong `globals.css`. Đo đạc xác nhận `scrollWidth === innerWidth === 390px` (**0px tràn ngang**).
  2. **Khắc phục Modal Lightbox:** Ghim nút đóng `[X]` lọt an toàn trong màn hình (`right: 361px`, cách lề $29\text{px}$); bổ sung **Nút Đóng Nổi Ở Đáy** to bản $332\text{px}$ cho ngón cái chạm đóng tức thì.
  3. **Tái cấu trúc 2 tầng cho DojoPlayer3:**
     - Tầng 1: Nút Lùi ($44\text{px}$) — Nút Tự Động Phát to ở giữa ($200\text{px}$) — Nút Tiến ($44\text{px}$).
     - Tầng 2: Dropdown tốc độ ($150\text{px}$) + Nút Chuông Thiền ($150\text{px}$) chia 50/50 đều nhau, hiển thị 100% trọn vẹn.
     - Tích hợp **Cử chỉ cảm ứng vuốt (Swipe Gestures)**: Vuốt trái sang thế tiếp, vuốt phải lùi lại thế trước kèm rung phản hồi haptic.
  4. **Tinh gọn Header di động:** Giữ đúng **2 nút bấm chuẩn $\ge 40\text{px}$** (Tra Cứu + Menu Hamburger); đưa Mục Lục và Quy Chuẩn Tấn vào Drawer to rõ; chấm dứt hoàn toàn hiện tượng cắt xén mép phải.
  5. **Đột phá UX - Mobile Bottom Dock:** Tạo thanh điều hướng đáy 5 tab (`MobileBottomBar.tsx`) cố định ở mép dưới trong vùng ngón tay cái, kèm khoảng đệm `pb-28 lg:pb-8` bảo vệ nội dung không bị che khuất.

---

### Bài Học 18: Chuẩn Mực Võ Đạo & Thanh Lọc Triệt Để Ngôn Từ Khoa Trương ("Đao To Búa Lớn")
- **Hiện tượng & Người dùng phản ánh:**
  - Người dùng chụp ảnh gửi badge la bàn mang dòng chữ: *"TUYỆT ĐỈNH LÝ LUẬN VỊNH XUÂN QUYỀN"* và nghiêm khắc nhắc nhở: *"Vẫn còn những câu đao búa"*.
  - Rà soát toàn bộ dự án phát hiện nhiều tàn dư từ ngữ mang tính chất tiểu thuyết kiếm hiệp, khoa trương quá đà, xa rời tinh thần khiêm nhường của Phật Gia Vịnh Xuân:
    * *"Tuyệt đỉnh lý luận"*
    * *"Bách khoa 18 bài quyền"*
    * *"Thượng thừa phản xạ"*, *"trình độ phát lực thượng thừa"*
    * *"Tuyệt kỹ cứu nguy"*, *"tuyệt kỹ chưởng pháp"*
    * *"Uy lực hủy diệt tuyệt đối"* (lặp lại 40 lần trong các tình huống tự vệ phố)
    * *"Tâm vô địch"*, *"đòn thẳng vô địch"*
    * *"Kho binh khí tối thượng"*
- **Nguyên nhân gốc rễ (RCA):**
  - Trong các lượt sinh nội dung trước đây, AI thường có xu hướng dùng các tính từ đòn thế hoa mỹ, phóng đại để làm cho bài viết "hấp dẫn" mà không nhận thức được rằng trong võ thuật chính thống — đặc biệt là Phật Gia Vịnh Xuân của GS.TS Y khoa Nguyễn Mạnh Nhâm — võ đạo luôn đề cao sự **giản dị, khiêm cung, thiết thực, khoa học và mộc mạc** ("Chân truyền nhất cú thoán, giả truyền vạn quyển thư").
- **Giải pháp triệt để:**
  1. **Thanh lọc 100% tàn dư ngôn từ khoa trương:**
     - `Tuyệt đỉnh lý luận` $\rightarrow$ `Lý Luận & Nguyên Lý Vịnh Xuân Quyền`
     - `Bách khoa 18 bài quyền` $\rightarrow$ `18 Bài Quyền Pháp & Binh Khí`
     - `Thượng thừa` $\rightarrow$ `Chuyên sâu` / `Thuần thục` / `Phản xạ rất tốt`
     - `Tuyệt kỹ` $\rightarrow$ `Kỹ pháp` / `Kỹ năng thuần thục`
     - `Uy lực hủy diệt tuyệt đối` $\rightarrow$ `Phát huy hiệu quả thực chiến rõ rệt`
     - `Vô địch` $\rightarrow$ `Chiếm ưu thế` / `Tâm thanh tịnh`
     - `Tối thượng` $\rightarrow$ `Cốt lõi` / `Tạo nên hiệu quả` / `Cảnh giới cao`
  2. **Quét sạch toàn bộ Codebase:**
     - Sử dụng script tự động quét qua 100% tệp trong `web/src` (components, data, app). Đưa số lượng từ ngữ "đao to búa lớn" về **đúng 0**.
  3. **Đảm bảo Quality Gates:**
     - TypeScript `npx tsc --noEmit` = **0 lỗi**.
     - ESLint `npm run lint` = **0 lỗi**.
     - Next.js SSG `npm run build` = **9/9 routes passed**.
     - Browser Subagent nghiệm thu trực quan 100% các phân hệ.

---

### Bài Học 19: Đa Dạng Hóa Hình Ảnh Võ Sư & Thế Chào Bão Quyền Lễ (Martial Etiquette & Dynamic Visuals)
- **Hiện tượng & Người dùng phản ánh:**
  - Người dùng cung cấp tư liệu quý: ảnh Võ sư Lê Đắc Kiên thực hiện nghi thức chào Bão Quyền Lễ (áo nâu sồng truyền thống, tay ôm quyền trang nghiêm) và yêu cầu: *"Bổ sung ảnh chào Võ sư Lê Đắc Kiên, để đa dạng ảnh cho các câu quote"*.
  - Trước đây, mọi trích dẫn triết lý, danh ngôn và thẻ truyền thừa của Võ sư Lê Đắc Kiên chỉ dùng đơn điệu 1 ảnh chân dung duy nhất, chưa làm nổi bật được lễ nghi và phong thái võ đạo Phật Gia Vịnh Xuân.
- **Nguyên nhân gốc rễ (RCA):**
  - Cấu trúc dữ liệu `martialPhilosophy.ts` và `quotes` trước đó bị cố định (hardcoded) ảnh chân dung, thiếu các trường linh hoạt như `authorImage`, `imageCaption` và `imageVariants`.
  - Giao diện chưa có cơ chế tương tác (Switcher) cho phép người học hoán đổi góc nhìn giữa chân dung đời thường và thế võ lễ nghi.
- **Giải pháp triệt để:**
  1. **Tích hợp kho tư liệu:** Bổ sung ảnh chuẩn hóa `vo_su_le_dac_kien_chao.jpg` vào `web/public/assets/images/instructors/`.
  2. **Mở rộng Schema CSDL Võ Đạo:** Bổ sung `authorImage` và `imageCaption` cho từng câu châm ngôn; phân định các chủ đề sâu sắc (Tâm Pháp Bất Tranh, Thiền Võ Nhất Như) sử dụng ảnh thế chào trang nghiêm, trong khi các chủ đề kỹ thuật (Đạo Trung Tuyến) sử dụng ảnh chân dung tĩnh tại.
  3. **Tương tác linh hoạt trên UI:**
     - Tại `LineageTree.tsx` (Node Võ sư Lê Đắc Kiên) và `WelcomePortal.tsx` (Featured Wisdom): Thêm bộ nút switcher mượt mà `Chân Dung` và `Thế Chào`, kèm huy hiệu động "Thế Chào Bão Quyền Lễ".
     - Tại `PhilosophyHub.tsx`: Thẻ châm ngôn lớn hiển thị ảnh tác giả nổi bật; danh sách châm ngôn có avatar tròn nhỏ giúp nhận diện người phát ngôn tức thì.
  4. **Bài học võ đạo:** Trong võ thuật truyền thống, "Tiên học lễ, hậu học văn". Việc xuất hiện hình ảnh chào Bão Quyền Lễ nhắc nhở võ sinh về đạo đức võ môn, sự tôn kính sư môn và tinh thần khiêm hạ trước khi bước vào luyện chiêu.

---

### Bài Học 20: Tinh Giản Nút Bấm Di Động & Responsive Adaptive Wording (Mobile Touch Target & Ergonomics)
- **Hiện tượng & Người dùng phản ánh:**
  - Người dùng yêu cầu: *"Xử lý nợ kỹ thuật, tinh giản bớt chữ, đặc biệt là các nút để hiển thị tốt trên giao diện mobile"*.
  - Trên màn hình điện thoại kích thước hẹp (viewport $375\text{px} - 390\text{px}$ như iPhone 14/15/16), các nút bấm dài bị:
    * Bẻ thành 2 đến 3 dòng, phá vỡ chiều cao và khoảng cách lề.
    * Nút bị co ép, chữ chạm sát mép viền, mất tính cân đối thẩm mỹ.
    * Một số nhóm 3 nút bị rơi rớt thành 2 hàng lộn xộn (ví dụ: bộ 3 tab Tiểu Niệm Đầu `Từng động tác`, `Ma trận toàn bộ`, `Lời nói đầu & Triết lý`).
- **Nguyên nhân gốc rễ (RCA):**
  - Tư duy thiết kế giao diện trên máy tính (Desktop-First) thường sử dụng nhãn nút đầy đủ, mang tính văn bản học thuật (VD: *"Khám Phá 18 Bài Quyền"*, *"Ma trận toàn bộ (52 thế)"*, *"Đồ Hình Người Thật (Võ Sư Trục Tuyến)"*).
  - Khi chuyển xuống màn hình di động mà không có tầng trung gian thích ứng từ ngữ, không gian vật lý hữu hạn của điện thoại bị tràn ngập bởi các phụ từ không cần thiết.
- **Giải pháp triệt để (Responsive Adaptive Wording):**
  1. **Ứng dụng cặp class Tailwind thích ứng:**
     - Sử dụng `<span className="hidden sm:inline">...</span>` cho phần chữ chi tiết dành cho Desktop.
     - Sử dụng `<span className="sm:hidden">...</span>` cho phiên bản cô đọng tối đa dành cho Mobile.
  2. **Chuẩn hóa hệ thống nhãn nút toàn dự án:**
     - `Khám Phá 18 Bài Quyền` $\rightarrow$ `18 Bài Quyền`
     - `Từng động tác (52)` | `Ma trận toàn bộ (52 thế)` | `Lời nói đầu & Triết lý` $\rightarrow$ `Chi tiết (52)` | `Ma trận (52)` | `Triết lý` (vừa khít 1 hàng duy nhất).
     - `Tự Động Phát Chuỗi` $\rightarrow$ `Tự Phát` / `Tạm Dừng`.
     - `Chuông Thiền: Bật` $\rightarrow$ `Chuông: Bật` / `Chuông Thiền`.
     - `Xem Gọn` / `Thẻ Chi Tiết` $\rightarrow$ `Gọn` / `Thẻ`.
     - `Bước trước` / `Bước tiếp` $\rightarrow$ `Trước` / `Tiếp`.
  3. **Bảo đảm chuẩn Touch Target:** Mọi nút bấm sau khi tinh giản chữ đều có padding và min-height bảo đảm kích thước chạm tối thiểu $\ge 44 \times 44\text{ px}$, không bị co rúm, không trượt bấm nhầm.

---

### Bài Học 21: Triệt Tiêu Nợ Kỹ Thuật & Chuẩn Mực "Console Sạch Tuyệt Đối" (Zero-Tech-Debt & Clean Console Discipline)
- **Hiện tượng:**
  - Kiểm tra hệ thống phát hiện một số tệp mã nguồn "chết" (Dead Code) từ các giai đoạn thử nghiệm trước không còn được import nhưng vẫn tồn tại trong thư mục (`CurationManagerModal.tsx`, `DojoPlayer.tsx`, `FormsExplorer.tsx`, `all_7_forms.ts`).
  - Trình duyệt ghi nhận 1 request lỗi tài nguyên nền: `GET /noise.png [404 Not Found]`.
- **Nguyên nhân gốc rễ (RCA):**
  - Thiếu quy trình rà soát dead code định kỳ sau các đợt refactor lớn.
  - Phụ thuộc vào file tài nguyên đồ họa ngoại lai (file ảnh noise) thay vì giải pháp CSS nội tại. Khi file ảnh bị thiếu hoặc không copy sang build, trình duyệt sinh lỗi 404.
- **Giải pháp triệt để:**
  1. **Xóa sổ triệt để Dead Code:** Dọn sạch 100% các file cũ, quy tụ toàn bộ dữ liệu 18 bài quyền và động tác phân thế về một nguồn chân lý duy nhất (Single Source of Truth) là `canonicalCatalog.ts`.
  2. **Khắc phục triệt để lỗi 404:** Thay thế ảnh `noise.png` bằng CSS `radial-gradient` pattern siêu nhẹ nội sinh, không phát sinh bất kỳ HTTP request nào, tải tức thì 0ms.
  3. **Nâng cấp Quality Gate:** Ban hành quy tắc thép V-AOF: *"Bất kỳ một lỗi đỏ console nào (kể cả 404 tài nguyên nhỏ hay warning hydration) đều bị tính là nghiệm thu THẤT BẠI"*. Console trình duyệt phải hoàn toàn sạch bóng (`0 errors, 0 warnings`) trên 100% các trang.

---

### Bài Học 22: Chuẩn Xác Thống Kê & Tôn Trọng Ngữ Cảnh Ảnh Võ Sư (Authentic Asset Counting & Dynamic Quote Context)
- **Hiện tượng & Người dùng phản ánh:**
  - Người dùng xem xét kỹ lưỡng và chỉ ra các bất cập:
    1. *"Tôi xem kỹ lại thì không thể lên đến 1096 động tác được, bản chất là có 1096 ảnh, còn số động tác thì không nhiều như thế, nhiều hình ảnh lặp hoặc là các nội dung giao đấu, tập mộc nhân. Hãy điều chỉnh lại con số thống kê này."*
    2. *"Bỏ các thống kê vì không chính xác và không nhiều ý nghĩa."*
    3. *"Các hình ảnh Võ sư Lê Đắc Kiên dùng để hiển thị kèm các câu quote khác nhau không phải để thêm vào thành các động tác chào hay gì khác, hãy bỏ tab thế chào đi. Cùng một chỗ 2 lần nhắc chữ chân dung."*
    4. *"3 nút đầu tiên trên Hero cần là: 1. Lịch sử và triết lý, 2. Kiến thức chung, 3. Các bài quyền."*
- **Nguyên nhân gốc rễ (RCA):**
  - **Đồng nhất cơ học giữa tệp ảnh và động tác võ học:** Trong sách giáo trình 225 trang có 1.096 bức ảnh được phục chế. Tuy nhiên, nhiều bức ảnh là các góc máy khác nhau của cùng một thế, các bước lặp chu kỳ (như xoay tay, thu quyền), các giai đoạn tiếp cận trong đòn giao đấu 2 người, hoặc các nhịp gõ trên cọc mộc nhân. Việc ghi "1.096 Động Tác Thị Phạm" là thiếu chính xác về mặt võ học và tạo cảm giác phóng đại số lượng.
  - **Thiếu nhạy bén về mục đích sử dụng tư liệu:** Khi người dùng cung cấp thêm ảnh Võ sư Lê Đắc Kiên thực hiện nghi lễ bão quyền, mục đích là để đa dạng hóa hình ảnh đồng hành cùng các câu danh ngôn/châm ngôn triết lý khác nhau. Việc máy móc tạo ra tab switcher `[Chân Dung] [Thế Chào]` biến một cử chỉ lễ nghi thành một "thế võ" để bật tắt, gây rườm rà và dẫn đến lỗi lặp từ ("Chân Dung Võ Sư" trong ảnh và nút "Chân Dung" bên dưới).
  - **Phô trương số liệu thừa:** Khối 4 thẻ thống kê số liệu trên Hero Banner vừa không chính xác tuyệt đối vừa không hỗ trợ hành trình học tập của võ sinh.
- **Giải pháp triệt để:**
  1. **Bãi bỏ hoàn toàn khối thống kê:** Xóa bỏ 4 thẻ thống kê số liệu khỏi Hero Banner của `WelcomePortal.tsx`, loại bỏ các đoạn văn bản tuyên bố "1.096 thế đòn" trong `CurriculumExplorer.tsx`.
  2. **Chuẩn hóa 3 nút điều hướng Hero đúng thứ tự sư phạm:**
     - Nút 1: `Lịch sử và triết lý` $\rightarrow$ Dẫn trực tiếp vào phân hệ Truyền thừa & Triết lý (`lineage`).
     - Nút 2: `Kiến thức chung` $\rightarrow$ Dẫn trực tiếp vào phân hệ Cơ bản công (`fundamentals`).
     - Nút 3: `Các bài quyền` $\rightarrow$ Dẫn trực tiếp vào phân hệ 18 bài quyền & binh khí (`forms`).
  3. **Tôn trọng ngữ cảnh ảnh Võ sư Lê Đắc Kiên:**
     - Xóa bỏ triệt để tab switcher `[Chân Dung] [Thế Chào]` và xóa bỏ badge lặp từ "Chân Dung Võ Sư" ở cả `WelcomePortal.tsx` và `LineageTree.tsx`. Thẻ giới thiệu chỉ hiển thị ảnh chân dung đĩnh đạc kèm huy hiệu "20 Năm Võ Nghiệp".
     - Các bức ảnh khác của Võ sư Lê Đắc Kiên được sử dụng đúng tôn chỉ: đồng hành cùng các câu châm ngôn, phát biểu triết lý môn phái trong widget châm ngôn hằng ngày và trung tâm triết lý.
  4. **Tích hợp câu châm ngôn sứ mệnh của Võ sư Lê Đắc Kiên:**
     - Khẩu truyền tâm pháp: *“Kiến thức thì số hoá nhưng luyện tập vẫn là thật và cần thực hành hàng ngày.”*
     - Tôn vinh ở vị trí trang trọng: Khối Featured Wisdom Trang Chủ, khối trích dẫn Node 4 Sơ Đồ Truyền Thừa, mở rộng thành chủ đề thứ 6 *“Số Hóa & Thực Chứng”* (數字化與實修) và câu #26 trong Kho Châm Ngôn Võ Đạo, nhắc nhở môn sinh: Công nghệ số là ngọn hải đăng lưu giữ di sản, nhưng công phu thực chứng bắt buộc phải rèn giũa bằng mồ hôi và khổ luyện hằng ngày.

