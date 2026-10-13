# NỀN TẢNG VÕ ĐƯỜNG SỐ PHẬT GIA VỊNH XUÂN (WEB APPLICATION)
*(Next.js 16 App Router, React 19, Tailwind CSS v4, Web Audio API, PWA)*

Đây là ứng dụng web tương tác chính của dự án, cung cấp nền tảng số hóa học tập võ thuật trực quan cho môn phái Phật Gia Vịnh Xuân Quyền (dựa trên giáo trình của **PGS.TS Y khoa Nguyễn Mạnh Nhâm** & **ThS.DS Nguyễn Duy Thức**, tích hợp 1.096 hình ảnh và 36 chương mục từ bộ dữ liệu chuẩn `C:\Cowork\Phat gia Vinh Xuan\Vinh xuan Phat gia\Phat-gia-Vinh-Xuan-Quyen-Phuc-che`).

---

## 🏗️ KIẾN TRÚC KỸ THUẬT (TECH STACK)

- **Framework:** [Next.js 16.3.6](https://nextjs.org/) (App Router, SSG output: `'export'`).
- **Thư viện UI & Core:** [React 19](https://react.dev/), [TypeScript 5.8](https://www.typescriptlang.org/).
- **Kiểu dáng & Thẩm mỹ:** [Tailwind CSS v4](https://tailwindcss.com/) với bảng màu môn phái Nâu Đất Ánh Kim Sa (`martial-*`), màu chữ Kem Ấm (`#F5EBE6`) chống mỏi mắt, Glassmorphism và Backdrop Blur.
- **Công thái học đọc (Reading Ergonomics):** Bộ điều khiển cỡ chữ động toàn cục `A- / A / A+` (`FontSizeProvider.tsx`) với tỷ lệ gốc `16px / 18px / 20px` và giãn dòng `leading-[1.8]`.
- **Biểu tượng:** [Lucide React](https://lucide.dev/) (toàn bộ biểu tượng tối ưu SVG).
- **Âm thanh thiền:** Web Audio API thuần synthesizer (`zenAudio.ts`), chuông xoay Tây Tạng (singing bowl) & nhịp mõ Đan Điền không phụ thuộc tệp audio bên ngoài.
- **Khả năng tiếp cận:** WCAG 2.1 Level AA/AAA với 100% phần tử tương tác có `aria-label` và hỗ trợ điều hướng bàn phím (`Ctrl+K`, `Escape`, `Tab`, `←`, `→`).
- **Ứng dụng Offline (PWA):** `manifest.json` đầy đủ định danh môn phái, standalone mode, splash icons.

---

## 📂 CẤU TRÚC THƯ MỤC NGUỒN (`web/src/`)

```
web/src/
├── app/                             # Next.js 16 App Router Pages
│   ├── layout.tsx                   # Root layout, FontSizeProvider, AnalyticsProvider & SEO metadata
│   ├── page.tsx                     # Single Page App chính (6 Tab Router & Stepper)
│   ├── error.tsx                    # Error Boundary toàn cục xử lý ngoại lệ an toàn
│   ├── not-found.tsx                # Trang 404 trang nhã theo phong cách võ đạo
│   └── globals.css                  # Toàn bộ CSS biến số (--base-font-scale), bảng màu và animation
│
├── components/                      # Các thành phần giao diện chuyên biệt (21 components)
│   ├── AnalyticsProvider.tsx        # Tích hợp Google Analytics 4 (G-17V87XT91Y) & Cloudflare Analytics
│   ├── CenterlineExplorer.tsx       # Trục Tý Ngọ Tuyến laser giải phẫu & 2 người đối kháng thực chiến
│   ├── CombatScenariosExplorer.tsx  # 200 Tình huống thực chiến & Trắc nghiệm phản xạ ngẫu nhiên
│   ├── CommandPalette.tsx           # Hộp tìm kiếm toàn thư in-memory nhanh chóng (Ctrl + K)
│   ├── CurriculumExplorer.tsx       # 18 bài quyền & binh khí, 3 chế độ xem (Chi tiết, Ma trận, Triết lý)
│   ├── DojoPlayer3.tsx              # Trình phát động tác phân thế, lật gương, zoom 2x Retina & Zen Audio
│   ├── FontSizeProvider.tsx         # Hệ thống điều chỉnh cỡ chữ động toàn cục (A- / A / A+) chống mỏi mắt
│   ├── FundamentalHandFootAtlas.tsx # Cơ Bản Công: Thủ pháp (14), Cước pháp (8), Bái Tổ (9 bước), 4 Bài luyện
│   ├── Header.tsx                   # Thanh điều hướng đầu trang với Logo, A-/A/A+, Search & Menu
│   ├── HeritageReader.tsx           # Tàng Kinh Các: Đọc toàn văn 18 chuyên đề lịch sử, lý luận & nội công
│   ├── KnowledgeHub.tsx             # Trung tâm tri thức & quản trị dữ liệu võ học
│   ├── LandingSplash.tsx            # Cổng chào mừng Welcome Portal
│   ├── LineageTree.tsx              # Sơ đồ truyền thừa 4 thế hệ (5 vị thầy tiêu biểu) & triết lý đạo võ
│   ├── MartialEmblem.tsx            # Biểu tượng linh thú Ngũ Hình Quyền (Rồng, Rắn, Hổ, Báo, Hạc) & Binh Khí
│   ├── MasterDetailModal.tsx        # Bảo tàng số chi tiết thân thế, kỹ pháp & giai thoại 5 vị thầy truyền thừa
│   ├── MeditationBreathingGuide.tsx # Vòng dẫn nhịp thở vuông 4 thì Đan Điền tương tác & đồng hồ thiền
│   ├── MeditationQiGongHub.tsx      # Không gian Thiền Định & Khí Công (Tam Điều, Khí Công Quyền)
│   ├── MobileBottomBar.tsx          # Thanh điều hướng đáy cố định (Mobile Bottom Dock) chuẩn công thái học
│   ├── PhilosophyHub.tsx            # Triết lý & Yếu quyết: 7 khẩu quyết, 42 lời khuyên, 7 huyền thoại & 6 bài quyền quốc tế
│   ├── WelcomePortal.tsx            # Cổng chào mừng, Lộ trình học tập & Widget Châm Ngôn Hôm Nay
│   └── WoodenDummyCanvas.tsx        # Cọc Gỗ Mộc Nhân SVG tương tác 5 tầng cọc & thư viện ảnh thao pháp
│
├── data/                            # Cơ sở dữ liệu võ học tinh gọn (11 files)
│   ├── canonicalCatalog.ts          # CSDL chuẩn 18 bài quyền và 18 chuyên đề từ gói Vinh xuan Phat gia
│   ├── lessonsFullText.json         # Toàn văn 36 chương mục sách gốc
│   ├── lessonsFullText.ts           # Typed wrapper cho toàn văn chương mục
│   ├── fundamentals.ts              # Dữ liệu 14 thủ pháp căn bản, 8 thế cước pháp & 4 bài luyện
│   ├── combatScenarios.ts           # CSDL 200 tình huống đối kháng phân theo 5 vùng giải phẫu
│   ├── martialPhilosophy.ts         # CSDL 7 khẩu quyết, 42 lời khuyên, 7 huyền thoại & đối chiếu 6 bài quyền thế giới
│   ├── masterProfiles.ts            # Hồ sơ khảo cứu chuyên sâu của 5 vị thầy truyền thừa
│   ├── meditationQiGong.ts          # CSDL Thiền định, Tam Điều, Thở 4 thì Đan Điền & Phật Gia Khí Công Quyền
│   ├── formsIntro.ts                # Giới thiệu xuất xứ, yếu lĩnh và khẩu quyết cho từng bài quyền
│   ├── martialKinematics.ts         # Cơ sinh học vận động, quỹ đạo lực và động học quyền pháp
│   ├── monographs.ts                # Toàn văn các chuyên luận lý thuyết, lịch sử truyền thừa & y võ
│   └── techniques.ts                # Định nghĩa TypeScript interfaces (Technique, TechniqueStep, SparringInfo)
│
└── lib/                             # Thư viện logic dữ liệu & thuật toán (5 modules)
    ├── analytics.ts                 # Hàm theo dõi sự kiện võ học (view_martial_form, view_master_profile...)
    ├── formatters.ts                # Chuẩn hóa tên động tác (loại bỏ lặp CHIÊU X: / Động tác X:)
    ├── lessonResolver.ts            # Bộ phân giải liên kết điều hướng bài học và chuyên mục
    ├── searchEngine.ts              # Engine tìm kiếm in-memory tốc độ < 2ms với mảng tiền xử lý
    └── zenAudio.ts                  # Web Audio API Synthesizer chuông thiền và mõ gỗ Đan Điền
```

---

## 🛠️ HƯỚNG DẪN PHÁT TRIỂN & CHẠY THỰC TẾ

### 1. Khởi động môi trường phát triển
```powershell
cd web
npm run dev
```
Mở trình duyệt tại: `http://localhost:3000`

### 2. Kiểm tra chất lượng code (Quality Gates)
Trước khi commit hoặc báo cáo hoàn thành:
```powershell
# 1. Static Type Checking
npx tsc --noEmit

# 2. ESLint Flat Config
npm run lint

# 3. Kiểm định chân xác võ học
python ../scripts/audit_martial_integrity.py
```
Yêu cầu: Cả 3 lệnh kiểm định phải đạt `PASS 100%`, `0 error` và `0 warning`.

### 3. Xuất bản tĩnh (SSG Production Build)
```powershell
npm run build
```
Thư mục `web/out/` sẽ được tạo ra với toàn bộ HTML/JS/CSS tĩnh và 1.096 ảnh (`hinh/`, `hinh-2x/`), sẵn sàng triển khai trên Cloudflare Pages, Vercel hoặc GitHub Pages.
