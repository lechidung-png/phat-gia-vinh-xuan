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
│   ├── CenterlineExplorer.tsx       # Trục Tý Ngọ Tuyến laser giải phẫu & 2 người đối kháng thực chiến
│   ├── CombatScenariosExplorer.tsx  # 200 Tình huống thực chiến & Trắc nghiệm phản xạ ngẫu nhiên
│   ├── CommandPalette.tsx           # Hộp tìm kiếm toàn thư in-memory nhanh chóng (Ctrl + K)
│   ├── CurriculumExplorer.tsx       # 18 bài quyền & binh khí, 3 chế độ xem (Chi tiết, Ma trận, Triết lý)
│   ├── DojoPlayer3.tsx              # Trình phát động tác phân thế, lật gương, zoom 2x Retina & Zen Audio
│   ├── FundamentalHandFootAtlas.tsx # Cơ Bản Công: Thủ pháp, Cước pháp (8), Bái Tổ (9 bước), 4 Bài luyện
│   ├── Header.tsx                   # Thanh điều hướng đầu trang với Logo, Search, Menu & Stance Check
│   ├── HeritageReader.tsx           # Tàng Kinh Các: Đọc toàn văn 18 chuyên đề lịch sử, lý luận & nội công
│   ├── KnowledgeHub.tsx             # Trung tâm tri thức & quản trị dữ liệu võ học
│   ├── LandingSplash.tsx            # Cổng chào mừng Welcome Portal và Stepper 5 chặng
│   ├── LineageTree.tsx              # Sơ đồ truyền thừa 4 thế hệ, trích dẫn triết lý & thế chào Bão Quyền Lễ
│   ├── MartialEmblem.tsx            # Biểu tượng linh thú Ngũ Hình Quyền (Rồng, Rắn, Hổ, Báo, Hạc) & Binh Khí
│   ├── MegaMenuModal.tsx            # Modal mục lục toàn thư 5 phân hệ
│   ├── MobileBottomBar.tsx          # Thanh điều hướng đáy cố định (Mobile Bottom Dock) chuẩn công thái học
│   ├── PhilosophyHub.tsx            # Triết lý & Yếu quyết: 7 khẩu quyết, 42 lời khuyên, tinh hoa thế giới
│   ├── StanceCheckerModal.tsx       # Modal quy chuẩn Tấn Kiềm Dương và Trục Sinh Tử
│   ├── WelcomePortal.tsx            # Cổng chào mừng, Lộ trình 5 chặng & Widget Châm Ngôn Hôm Nay
│   └── WoodenDummyCanvas.tsx        # Cọc Gỗ Mộc Nhân SVG tương tác 5 tầng cọc & thư viện ảnh thao pháp
│
├── data/                            # Cơ sở dữ liệu võ học chính xác
│   ├── canonicalCatalog.ts          # CSDL chuẩn 18 bài quyền, 1.096 động tác và danh mục phân hệ
│   ├── fundamentals.ts              # Dữ liệu 14 thủ pháp căn bản, 8 thế cước pháp & 4 bài luyện
│   ├── bai_to_data.json             # Dữ liệu 9 bước nghi thức Bái Tổ Sư Môn do Võ sư Lê Văn Tùng thị phạm
│   ├── combatScenarios.ts           # CSDL 200 tình huống đối kháng phân theo 5 vùng giải phẫu
│   ├── martialPhilosophy.ts         # CSDL 7 khẩu quyết cốt lõi, 42 lời khuyên sư phụ, châm ngôn & 5 tông sư
│   ├── formsIntro.ts                # Giới thiệu xuất xứ, yếu lĩnh và khẩu quyết cho từng bài quyền
│   ├── martialKinematics.ts         # Cơ sinh học vận động, quỹ đạo lực và động học quyền pháp
│   └── monographs.ts                # Toàn văn các chuyên luận lý thuyết, lịch sử truyền thừa & y võ
│
└── lib/                             # Thư viện logic dữ liệu & thuật toán
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
Thư mục `web/out/` sẽ được tạo ra với toàn bộ HTML/JS/CSS tĩnh và 1.096 ảnh phục chế HD $2\times$ Retina, sẵn sàng triển khai trên Cloudflare Pages, Vercel hoặc GitHub Pages.

---

## 🚀 KHO LƯU TRỮ GIT & TRIỂN KHAI PRODUCTION
- **Kho lưu trữ Git Remote:**
  - `origin/main`: [https://github.com/lechidung-png/phat-gia-vinh-xuan.git](https://github.com/lechidung-png/phat-gia-vinh-xuan.git)
  - `dunglechi/main`: [https://github.com/dunglechi/phat-gia-vinh-xuan.git](https://github.com/dunglechi/phat-gia-vinh-xuan.git)
- **Hướng dẫn chi tiết:** Xem tại [DEPLOYMENT_GUIDE.md](file:///c:/Cowork/Phat%20gia%20Vinh%20Xuan/web/DEPLOYMENT_GUIDE.md).

---

## 🛡️ CHUẨN THIẾT KẾ & CÔNG THÁI HỌC (V-AOF ERGONOMICS)
- **Glassmorphism:** Sử dụng `bg-martial-card/90 backdrop-blur-md` kết hợp border hổ phách `border-martial-amber/30`.
- **Contrast & Hierarchy:** Văn bản chính dùng font chữ `Be Vietnam Pro` và `Noto Serif`, độ tương phản $\ge 4.5:1$ theo WCAG 2.1 AA.
- **Responsive Adaptive Wording:** Nút bấm tự động tinh giản từ ngữ trên màn hình di động ($\le 390\text{px}$) bằng cặp class `hidden sm:inline` và `sm:hidden`, không bẻ gãy dòng, không tràn ngang ($0\text{px}$ overflow).
- **Touch Target:** 100% nút bấm, icon thao tác và nút đóng modal đều bảo đảm kích thước chạm tối thiểu $\ge 44 \times 44\text{ px}$.
- **Accessible Elements:** Mọi nút icon đơn lẻ bắt buộc phải có thuộc tính `aria-label` mô tả hành động.
- **Phím tắt & Cử chỉ:**
  - `Ctrl + K`: Mở hộp tìm kiếm toàn thư.
  - `Escape`: Đóng Modal, Lightbox, Mega Menu.
  - `Space`: Tự động phát / Tạm dừng chuỗi động tác.
  - `←` / `→`: Lùi lại / Tiến tới động tác tiếp theo.
  - Vuốt cảm ứng trái/phải trên màn hình điện thoại để chuyển thế võ kèm phản hồi rung haptic.

