# HƯỚNG DẪN TRIỂN KHAI NỀN TẢNG VÕ ĐƯỜNG SỐ PHẬT GIA VỊNH XUÂN
*(V-AOF Cloud Deployment Specification - Vercel & Cloudflare Pages)*

Nền tảng đã được cấu hình kiến trúc **Next.js 15 Static Site Generation (SSG)** với `output: 'export'`. Toàn bộ mã nguồn và kho ảnh phục chế HD được biên dịch sẵn thành gói tĩnh độc lập tại thư mục `web/out/`.

---

## PHƯƠNG ÁN 1: TRIỂN KHAI LÊN VERCEL (KHUYẾN NGHỊ NHANH NHẤT)

### Cách 1.1: Triển khai tự động qua GitHub / GitLab (Khuyến nghị số 1)
1. Đẩy mã nguồn dự án lên kho chứa GitHub.
2. Truy cập [vercel.com](https://vercel.com/) và đăng nhập.
3. Bấm **"Add New Project"** -> Chọn Repository GitHub của dự án.
4. Tại mục **Root Directory**: Chọn thư mục `web`.
5. Vercel sẽ tự động phát hiện Next.js và đọc cấu hình từ file [vercel.json](file:///c:/Cowork/Phat%20gia%20Vinh%20Xuan/web/vercel.json).
6. Bấm **"Deploy"**. Trong vòng 30 - 60 giây, website sẽ chính thức online với tên miền dạng `phatgiavinhxuan.vercel.app`.
7. Bạn có thể trỏ tên miền riêng tùy chỉnh (ví dụ: `phatgiavinhxuan.vn`) hoàn toàn miễn phí tại tab **Settings -> Domains**.

### Cách 1.2: Triển khai trực tiếp bằng Vercel CLI từ Terminal
Trong thư mục `web/`, chạy lệnh:
```bash
npx vercel --prod
```
Đăng nhập theo hướng dẫn trên màn hình và chấp nhận các thiết lập mặc định để website tự động deploy.

---

## PHƯƠNG ÁN 2: TRIỂN KHAI LÊN CLOUDFLARE PAGES (TỐC ĐỘ CDN TỐI THƯỢNG TẠI VIỆT NAM)

Cloudflare Pages có cụm máy chủ CDN đặt trực tiếp tại Hà Nội và TP.HCM, mang lại độ trễ mạng cực thấp ($< 15\text{ms}$).

### Cách 2.1: Triển khai Kéo & Thả (Direct Upload - Không cần Git)
1. Truy cập [dash.cloudflare.com](https://dash.cloudflare.com/) -> Chọn mục **Workers & Pages**.
2. Chọn **Create Application** -> Tab **Pages** -> **Upload assets**.
3. Đặt tên dự án (ví dụ: `phat-gia-vinh-xuan`).
4. Kéo thả toàn bộ thư mục `web/out/` vào khung tải lên.
5. Bấm **Deploy site**. Trang web sẽ hoạt động ngay lập tức với tên miền `*.pages.dev`.

### Cách 2.2: Triển khai tự động qua Cloudflare Pages Git Integration
1. Tại Cloudflare Pages, chọn **Connect to Git** và liên kết repo GitHub.
2. Cấu hình bản dựng:
   - **Framework preset:** `Next.js (Static HTML Export)`
   - **Root directory:** `web`
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
3. Bấm **Save and Deploy**. Mỗi khi bạn commit mã mới, Cloudflare sẽ tự động build lại trong 1 phút.

### Cách 2.3: Triển khai bằng Wrangler CLI
Trong thư mục `web/`, chạy lệnh:
```bash
npx wrangler pages deploy out --project-name=phat-gia-vinh-xuan
```

---

## KIỂM THỬ TẠI CHỖ TRƯỚC KHI DEPLOY (LOCAL PREVIEW)

Để xem thử bản dựng tĩnh `web/out/` chạy giống hệt như trên máy chủ đám mây:
```bash
# Cài đặt serve nhẹ hoặc dùng npx
npx serve web/out -p 3000
```
Mở trình duyệt tại `http://localhost:3000` để trải nghiệm tốc độ tải tức thì.

---

## CÁC TỐI ƯU HÓA ĐÃ ĐƯỢC TÍCH HỢP SẴN
- **Zero Server Cost:** $0 chi phí máy chủ hàng tháng.
- **Bảo mật tuyệt đối:** Không có database hay backend runtime để bị khai thác tấn công.
- **PWA (Progressive Web App):** File `manifest.json` cho phép võ sinh cài app lên màn hình chính điện thoại iOS/Android.
- **Cache vĩnh viễn:** Cấu hình `Cache-Control: public, max-age=31536000, immutable` cho hơn 435 ảnh võ thuật HD.
