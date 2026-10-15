# NỀN TẢNG VÕ ĐƯỜNG SỐ PHẬT GIA VỊNH XUÂN (WEB APPLICATION)
*(Next.js 16 App Router, React 19, Tailwind CSS v4, Web Audio API, Multimedia Pedagogy, PWA)*

Đây là ứng dụng web tương tác đa phương thức chính của dự án, cung cấp nền tảng số hóa học tập võ thuật trực quan cho môn phái Phật Gia Vịnh Xuân Quyền (dựa trên giáo trình của **PGS.TS Y khoa Nguyễn Mạnh Nhâm** & **ThS.DS Nguyễn Duy Thức**, tích hợp 1.096 hình ảnh và 36 chương mục từ bộ dữ liệu chuẩn `C:\Cowork\Phat gia Vinh Xuan\Vinh xuan Phat gia\Phat-gia-Vinh-Xuan-Quyen-Phuc-che`).

---

## 🏗️ KIẾN TRÚC KỸ THUẬT & SƯ PHẠM (TECH & PEDAGOGY STACK)

- **Framework:** [Next.js 16.2.3](https://nextjs.org/) (App Router, SSG `output: 'export'`, **7/7 static routes**).
- **Thư viện UI & Core:** [React 19](https://react.dev/), [TypeScript 5.8](https://www.typescriptlang.org/).
- **Kiến trúc Sư phạm Đa phương thức (Multimedia Learning & Progressive Disclosure):**
  - **Phòng Chiếu Video Đại Sư (`masterVideos.ts` + `CurriculumExplorer.tsx`):** **31 video thị phạm & phân tích kỹ thuật tinh tuyển** (31 video tinh tuyển (ưu tiên 4 Đại Sư Phụ: Diệp Vấn, Chu Thượng Đồng, Diệp Chuẩn, Ngô Sĩ Quý) ID duy nhất, 100% xác thực HTTP 200 qua YouTube oEmbed API) cho toàn bộ 18 bài quyền + Phật Gia Khí Công Quyền, trong đó riêng **Tam Đại Bộ Quyền (`bai-07`, `bai-09`, `bai-10`) có 9 video tinh tuyển kinh điển & HD sư phạm** kèm chế độ xem **Song hành (Video + Sách gốc)** và **Thanh chuyển nhanh Tam Đại Bộ Quyền**.
  - **Kiến trúc Sư phạm 3 Tầng (`formsIntro.ts` + `CurriculumExplorer.tsx`):** Khôi phục 100% nguyên văn lời dẫn sách gốc, những điểm cần biết khi tập, tác dụng, khẩu quyết và Bài luyện tổng hợp 8 phần, hiển thị theo 3 tầng chống quá tải nhận thức.
- **Kiểu dáng & Thẩm mỹ:** [Tailwind CSS v4](https://tailwindcss.com/) với bảng màu môn phái Nâu Đất Ánh Kim Sa (`#140C08`), màu chữ Kem Ấm (`#F5EBE6`) chống mỏi mắt, Glassmorphism và Backdrop Blur.
- **Công thái học đọc (Reading Ergonomics):** Bộ điều khiển cỡ chữ động toàn cục `A- / A / A+` (`FontSizeProvider.tsx`) với tỷ lệ gốc `16px / 18px / 20px` và giãn dòng `leading-[1.8]`.
- **Âm thanh thiền:** Web Audio API thuần synthesizer (`zenAudio.ts`), chuông xoay Tây Tạng (singing bowl) & nhịp mõ Đan Điền không phụ thuộc tệp audio bên ngoài.
- **Khả năng tiếp cận:** WCAG 2.1 Level AA/AAA với 100% phần tử tương tác có `aria-label`, bố cục thẻ Menu không bao giờ bị cắt (`flex-wrap` & `grid`), và hỗ trợ điều hướng bàn phím (`Ctrl+K`, `Escape`, `Tab`, `←`, `→`).

---

## 📂 CẤU TRÚC THƯ MỤC NGUỒN (`web/src/`)

```
web/src/
├── app/                             # Next.js 16 App Router Pages (7 static routes)
│   ├── layout.tsx                   # Root layout, FontSizeProvider, AnalyticsProvider & SEO metadata
│   ├── page.tsx                     # Single Page App chính (Tab Router & Dynamic Code-Splitting)
│   ├── error.tsx                    # Error Boundary toàn cục xử lý ngoại lệ an toàn
│   ├── not-found.tsx                # Trang 404 trang nhã theo phong cách võ đạo
│   └── globals.css                  # Toàn bộ CSS biến số (--font-scale), bảng màu và animation
│
├── components/                      # Các thành phần giao diện chuyên biệt
│   ├── AnalyticsProvider.tsx        # Tích hợp Google Analytics 4 (G-17V87XT91Y) & Cloudflare Analytics
│   ├── CenterlineExplorer.tsx       # Trục Tý Ngọ Tuyến laser giải phẫu & 2 người đối kháng thực chiến
│   ├── CombatScenariosExplorer.tsx  # 200 Tình huống thực chiến & Trắc nghiệm phản xạ ngẫu nhiên
│   ├── CommandPalette.tsx           # Hộp tìm kiếm toàn thư in-memory nhanh chóng (Ctrl + K)
│   ├── CurriculumExplorer.tsx       # 18 bài quyền (917 động tác), 4 chế độ xem (Động tác, Ma trận, Triết lý 3 tầng, Video Đại Sư)
│   ├── DojoPlayer3.tsx              # Trình phát động tác phân thế, lật gương, zoom 2x Retina & Zen Audio
│   ├── FontSizeProvider.tsx         # Hệ thống điều chỉnh cỡ chữ động toàn cục (A- / A / A+) chống mỏi mắt
│   ├── FundamentalHandFootAtlas.tsx # Cơ Bản Công: 18 Thủ pháp & Lục Chủng Trửu, 8 Tấn/Bộ/Cước, 9 bước Bái Tổ, 4 Bài luyện
│   ├── Header.tsx                   # Thanh điều hướng đầu trang đa hàng không cắt thẻ với A-/A/A+ & Search
│   ├── HeritageReader.tsx           # Tàng Kinh Các: Đọc toàn văn 36 chương mục (225 trang sách gốc)
│   ├── KnowledgeHub.tsx             # Trung tâm tri thức & quản trị dữ liệu võ học
│   ├── LineageTree.tsx              # Sơ đồ truyền thừa 4 thế hệ (5 vị thầy tiêu biểu) & triết lý đạo võ
│   ├── MasterDetailModal.tsx        # Bảo tàng số chi tiết thân thế, kỹ pháp & giai thoại 5 vị thầy truyền thừa
│   ├── MeditationBreathingGuide.tsx # Vòng dẫn nhịp thở vuông 4 thì Đan Điền tương tác & đồng hồ thiền
│   ├── MeditationQiGongHub.tsx      # Không gian Thiền Định & Khí Công (Tam Điều, Phật Gia Khí Công Quyền)
│   ├── MobileBottomBar.tsx          # Thanh điều hướng đáy cố định (Mobile Bottom Dock) chuẩn công thái học
│   ├── PhilosophyHub.tsx            # Triết lý & Yếu quyết: 12 Đại Khẩu Quyết, 42 Lời khuyên, 13 Đại sư thế giới & 72 Châm ngôn
│   ├── WelcomePortal.tsx            # Cổng chào mừng, Lộ trình học tập & Widget Châm Ngôn Hôm Nay
│   └── WoodenDummyCanvas.tsx        # Cọc Gỗ Mộc Nhân SVG tương tác 5 tầng cọc & thư viện ảnh thao pháp
│
├── data/                            # Cơ sở dữ liệu võ học chuẩn xác (12 modules)
│   ├── canonicalCatalog.ts          # CSDL chuẩn 36 chương mục (18 bài thực hành 917 động tác & 18 chuyên đề đọc)
│   ├── lessonsFullText.json         # Toàn văn 36 chương mục sách gốc (225 trang)
│   ├── formsIntro.ts                # Nguyên văn lời dẫn, những điểm cần biết khi tập, tác dụng, khẩu quyết 18 bài & Bài tổng hợp 8 phần
│   ├── fundamentals.ts              # 18 thủ pháp & lục chủng trửu, 8 thế tấn/bộ/cước, 4 bài luyện căn bản, 5 chặng học
│   ├── martialPhilosophy.ts         # 12 Đại Khẩu Quyết, 42 Lời khuyên, 13 Đại sư thế giới & 72 câu Châm ngôn võ đạo
│   ├── masterVideos.ts              # 53 Video Đại sư thị phạm (9 video tinh tuyển Tam Đại Quyền) đã xác thực oEmbed & 6 nguồn học thuật
│   ├── lineageMasters.ts            # Hồ sơ khảo cứu chuyên sâu của 5 vị thầy truyền thừa
│   ├── meditationQiGong.ts          # CSDL Thiền định, Tam Điều, Thở 4 thì Đan Điền & Phật Gia Khí Công Quyền
│   ├── combat200.ts                 # CSDL 200 tình huống đối kháng phân theo 5 vùng giải phẫu
│   ├── terminologyGlossary.ts       # Từ điển thuật ngữ võ học Hán - Việt
│   ├── beltTesting.ts               # Hệ thống khảo thí & lộ trình tu tập
│   └── wingChunData.ts              # Cấu trúc tổng quan hệ thống
│
└── lib/                             # Thư viện logic dữ liệu & thuật toán
    ├── analytics.ts                 # Hàm theo dõi sự kiện võ học (view_martial_form, view_master_profile...)
    ├── formatters.ts                # Chuẩn hóa tên động tác
    ├── lessonResolver.ts            # Bộ phân giải liên kết điều hướng bài học và chuyên mục
    ├── searchEngine.ts              # Engine tìm kiếm in-memory tốc độ < 2ms với mảng tiền xử lý
    └── zenAudio.ts                  # Web Audio API Synthesizer chuông thiền và mõ gỗ Đan Điền
```

---

## 🛠️ HƯỚNG DẪN PHÁT TRIỂN & 6 CỔNG KIỂM ĐỊNH CHẤT LƯỢNG

### 1. Khởi động môi trường phát triển
```powershell
cd web
npm run dev
```
Mở trình duyệt tại: `http://localhost:3000`

### 2. Kiểm tra chất lượng code & Chống ảo giác (6 Quality Gates)
Trước khi commit hoặc báo cáo hoàn thành:
```powershell
# 1. Static Type Checking
npx tsc --noEmit

# 2. ESLint Flat Config
npm run lint

# 3. Xuất bản tĩnh SSG (7/7 static routes)
npm run build

# 4. Kiểm định chân xác võ học (28/28 tiêu chí)
python ../scripts/audit_martial_integrity.py

# 5. Kiểm thử hồi quy tự động (6 suites / 28.058 assertions)
node ../scripts/run_verification_tests.js

# 6. Kiểm chứng Thực tế Không Khoan Nhượng (Zero-Trust Reality Gate)
node ../scripts/verify_claims_and_reality.js
```
Yêu cầu: Cả 6 cổng kiểm định phải đạt `PASS 100%`, `0 error` và `0 warning`.


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
