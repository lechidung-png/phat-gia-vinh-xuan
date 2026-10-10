# HƯỚNG DẪN CẤU HÌNH GOOGLE ANALYTICS 4 & CLOUDFLARE WEB ANALYTICS
**Hệ thống Phân Tích & Đo Lường Chuyên Nghiệp — Di Sản Võ Học Phật Gia Vịnh Xuân**

---

## I. TỔNG QUAN

Website đã được tích hợp sẵn tầng đo lường chuẩn quốc tế:
1. **Google Analytics 4 (GA4):** Theo dõi số người truy cập thời gian thực, thiết bị (Điện thoại/Máy tính), vị trí địa lý (Hà Nội, TP.HCM, Hải Phòng, Quốc tế...) và bài quyền nào được xem nhiều nhất.
2. **Cloudflare Web Analytics:** Đo lường lượt truy cập mạng toàn cầu mà không sử dụng cookie, bảo vệ quyền riêng tư tuyệt đối cho môn sinh.
3. **Custom Martial Events (Sự kiện võ học riêng biệt):**
   - `view_martial_form`: Đo lường khi môn sinh học bài quyền (Tiểu Niệm Đầu, Tầm Kiều, Tiêu Chỉ, 108 thế...).
   - `view_master_profile`: Đo lường khi mở xem tiểu sử các vị thầy truyền thừa.
   - `interact_wooden_dummy`: Đo lường tương tác trên cọc Mộc Nhân.
   - `search`: Thống kê các từ khóa môn sinh tra cứu nhiều nhất.
   - `toggle_zen_audio`: Theo dõi tần suất môn sinh nghe chuông thiền đan điền khi luyện quyền.

---

## II. HƯỚNG DẪN LẤY MÃ GOOGLE ANALYTICS 4 (CHỈ MẤT 2 PHÚT)

1. Truy cập: [https://analytics.google.com/](https://analytics.google.com/) và đăng nhập bằng tài khoản Google.
2. Bấm nút **Bắt đầu đo lường** (Start measuring):
   - **Tên tài khoản:** `Phat Gia Vinh Xuan`
   - **Tên thuộc tính (Property Name):** `Di San Vo Hoc`
   - **Múi giờ:** `Việt Nam (GMT+7)`
   - **Tiền tệ:** `Đồng Việt Nam (VND)`
3. Chọn nền tảng: **Web**:
   - Nhập URL trang web: `https://phat-gia-vinh-xuan.pages.dev` (hoặc tên miền riêng của võ đường).
   - Tên luồng: `Võ Đường Số Web`.
4. Sau khi tạo xong, Google sẽ cung cấp **Mã Đo Lường (Measurement ID)** có dạng:
   ```text
   G-XXXXXXXXXX
   ```

---

## III. KÍCH HOẠT VÀO HỆ THỐNG

### Cách 1: Khi chạy thử nghiệm trên máy tính cá nhân (Local Dev)
Tạo file `.env.local` trong thư mục `web/` và điền:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
Khởi động lại (`npm run dev`), hệ thống sẽ tự động kết nối và gửi dữ liệu lên Google Analytics.

### Cách 2: Khi triển khai lên Cloudflare Pages / Vercel
1. Vào trang quản trị dự án trên **Cloudflare Pages** (hoặc **Vercel**).
2. Vào mục **Settings** -> **Environment Variables**.
3. Thêm biến:
   - **Variable name:** `NEXT_PUBLIC_GA_ID`
   - **Value:** `G-XXXXXXXXXX` (Mã đo lường của Thầy)
4. Bấm **Save** và nhấn **Retry deployment**. Kể từ thời điểm này, 100% lượt truy cập của môn sinh khắp nơi trên thế giới sẽ được tự động ghi nhận chuẩn xác từng giây!

---

## IV. CÁCH XEM BÁO CÁO NHỮNG BÀI ĐƯỢC XEM NHIỀU NHẤT TRÊN GOOGLE ANALYTICS

1. Mở [Google Analytics Dashboard](https://analytics.google.com/).
2. Vào mục **Báo cáo (Reports)** -> **Thời gian thực (Realtime)**: Thầy sẽ nhìn thấy ngay số người đang đọc giáo trình trên bản đồ thế giới.
3. Vào mục **Tương tác (Engagement)** -> **Sự kiện (Events)**:
   - Tìm sự kiện `view_martial_form`: Xem danh sách bài quyền nào được môn sinh truy cập nhiều nhất (*Tiểu Niệm Đầu*, *108 thế*, *Bát Trảm Đao*...).
   - Tìm sự kiện `search`: Biết môn sinh đang tìm kiếm kỹ thuật gì nhiều nhất để Ban Quản Trị bổ sung thêm hình ảnh và bài giảng.
