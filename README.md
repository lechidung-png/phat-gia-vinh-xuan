# NỀN TẢNG VÕ ĐƯỜNG SỐ PHẬT GIA VỊNH XUÂN (WEB APPLICATION)
*(Next.js 16 App Router, React 19, Tailwind CSS v4, Web Audio API, PWA)*

Đây là ứng dụng web tương tác chính của dự án, cung cấp nền tảng số hóa học tập võ thuật trực quan cho môn phái Phật Gia Vịnh Xuân Quyền.

---

## 🏗️ KIẾN TRÚC KỸ THUẬT (TECH STACK)

- **Framework:** [Next.js 16.3.6](https://nextjs.org/) (App Router, SSG output: `'export'`).
- **Thư viện UI & Core:** [React 19](https://react.dev/), [TypeScript 5.8](https://www.typescriptlang.org/).
- **Kiểu dáng & Thẩm mỹ:** [Tailwind CSS v4](https://tailwindcss.com/) với bảng màu môn phái Nâu Đất Ánh Kim Sa (`martial-*`), Glassmorphism, Backdrop Blur và Hiệu ứng Ánh Kim.
- **Biểu tượng:** [Lucide React](https://lucide.dev/) (toàn bộ biểu tượng tối ưu SVG).
- **Âm thanh thiền:** Web Audio API thuần synthesizer (`zenAudio.ts`), chuông xoay Tây Tạng (singing bowl) & nhịp mõ Đan Điền không phụ thuộc tệp audio bên ngoài.
- **Khả năng tiếp cận:** WCAG 2.1 Level AA với 100% phần tử tương tác có `aria-label` và hỗ trợ điều hướng bàn phím (`Ctrl+K`, `Escape`, `Tab`).
- **Ứng dụng Offline (PWA):** `manifest.json` đầy đủ định danh môn phái, standalone mode, splash icons.

---

## 📂 CẤU TRÚC THƯ MỤC NGUỒN (`web/src/`)

```
web/src/
├── app/                             # Next.js 16 App Router Pages
│   ├── layout.tsx                   # Root layout, metadata & global navigation header
│   ├── page.tsx                     # Single Page App chính (5 Tab Router & Stepper)
│   ├── error.tsx                    # Error Boundary toàn cục xử lý ngoại lệ an toàn
│   ├── not-found.tsx                # Trang 404 trang nhã theo phong cách võ đạo
│   └── globals.css                  # Toàn bộ CSS biến số, bảng màu và animation
│
├── components/                      # Các thành phần giao diện chuyên biệt
│   ├── DojoPlayer3.tsx              # Trình phát động tác phân thế, lật gương, zoom 2x Retina & Zen Audio
│   ├── CurriculumExplorer.tsx       # Bách khoa 18 bài quyền, 3 chế độ xem (Từng đòn, Ma trận, Triết lý)
│   ├── FundamentalHandFootAtlas.tsx # Cơ Bản Công: Thủ pháp, Cước pháp 8 thế, Bái Tổ 9 bước, 4 bài luyện
│   ├── CenterlineStanceGuide.tsx    # Hướng dẫn Trục Tý Ngọ Tuyến căn chỉnh laser giải phẫu & 2 người đối kháng
│   ├── WoodenDummyVisualizer.tsx    # Cọc Gỗ Mộc Nhân SVG tương tác 5 tầng cọc & thư viện ảnh thao pháp
│   ├── CombatScenariosExplorer.tsx  # 200 Tình huống thực chiến & Trắc nghiệm phản xạ ngẫu nhiên
│   ├── LineageTree.tsx              # Sơ đồ truyền thừa 4 thế hệ từ Sư Tổ Nguyễn Tế Công
│   ├── PhilosophyHub.tsx            # Triết lý & Yếu quyết: 7 khẩu quyết, 42 lời khuyên, tinh hoa thế giới
│   ├── DailyQuoteWidget.tsx         # Widget châm ngôn võ đạo hôm nay với khả năng đổi câu & sao chép
│   ├── CommandPalette.tsx           # Hộp tìm kiếm toàn thư nhanh chóng (Ctrl + K)
│   ├── StanceCheckerModal.tsx       # Modal quy chuẩn Tấn Kiềm Dương và Trục Sinh Tử
│   ├── MegaMenuModal.tsx            # Modal mục lục toàn thư 5 phân hệ
│   └── LandingSplash.tsx            # Cổng chào mừng Welcome Portal và Stepper 5 chặng
│
└── lib/                             # Thư viện logic dữ liệu & thuật toán
    ├── canonicalCatalog.ts          # CSDL 18 bài quyền, 1.096 động tác và danh mục phân hệ
    ├── fundamentalsData.ts          # Dữ liệu thủ pháp, cước pháp, nghi thức bái tổ 9 bước và 4 bài luyện
    ├── combatScenariosData.ts       # CSDL 200 tình huống đối kháng phân theo 5 vùng giải phẫu
    ├── philosophyQuotesData.ts      # CSDL 7 khẩu quyết, 42 lời khuyên sư phụ và 5 tông sư thế giới
    ├── searchEngine.ts              # Engine tìm kiếm in-memory tốc độ < 2ms với mảng tiền xử lý
    ├── formatters.ts                # Chuẩn hóa tên động tác (loại bỏ lặp CHIÊU X: / Động tác X:)
    └── zenAudio.ts                  # Web Audio API Synthesizer chuông thiền định tâm
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
```
Yêu cầu: Cả 2 lệnh phải đạt `0 error` và `0 warning`.

### 3. Xuất bản tĩnh (SSG Production Build)
```powershell
npm run build
```
Thư mục `web/out/` sẽ được tạo ra với toàn bộ HTML/JS/CSS tĩnh, sẵn sàng triển khai trên Cloudflare Pages, Vercel hoặc GitHub Pages.

---

## 🛡️ CHUẨN THIẾT KẾ & ACCESSIBILITY (V-AOF)
- **Glassmorphism:** Sử dụng `bg-martial-card/90 backdrop-blur-md` kết hợp border hổ phách `border-martial-amber/30`.
- **Contrast & Hierarchy:** Văn bản chính dùng font chữ rõ ràng, độ tương phản $\ge 4.5:1$ theo WCAG 2.1 AA.
- **Accessible Elements:** Mọi nút icon đơn lẻ bắt buộc phải có thuộc tính `aria-label` mô tả hành động (ví dụ: `aria-label="Thu nhỏ ảnh"`, `aria-label="Mở hộp tìm kiếm"`).
- **Escape Key & Keyboard Navigation:** Mọi dialog/modal đều phải lắng nghe phím `Escape` để đóng và cho phép người dùng dùng phím `Tab` duyệt qua các nút bấm.
