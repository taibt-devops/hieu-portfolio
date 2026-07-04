# Thanh Hiếu — MC · Speaker · Ironman

Trang profile cá nhân một trang: HTML/CSS/JS thuần, không cần cài đặt gì, mở `index.html` là chạy.

## 1. Thay ảnh thật

Lưu ảnh từ Facebook về, đặt **đúng tên file** vào thư mục `images/` — trang tự hiển thị, không cần sửa code:

| File | Vị trí trên trang | Gợi ý ảnh |
|---|---|---|
| `images/hero.jpg` | Màn hình đầu (to nhất, quan trọng nhất) | Ảnh ngang chất lượng cao: đang chạy giải hoặc cầm mic trên sân khấu |
| `images/hero-mobile.jpg` | Màn hình đầu trên điện thoại | Ảnh dọc (9:16), nhân vật nên đứng lệch phải khung |
| `images/portrait.jpg` | Phần "Câu chuyện" | Ảnh chân dung dọc (tỷ lệ 3:4) |
| `images/sport-run.jpg` | Thẻ Chạy bộ | Ảnh dọc đang chạy |
| `images/sport-swim.jpg` | Thẻ Bơi lội | Ảnh dọc đang bơi |
| `images/sport-pickleball.jpg` | Thẻ Pickleball | Ảnh dọc trên sân |
| `images/gallery-1.jpg` → `gallery-5.jpg` | Mục Khoảnh khắc | Số 1 là ảnh mở màn full-width (hiển thị trọn không cắt); 2–5 là hàng 4 ô đều nhau |

Mẹo: ảnh nên nén dưới ~500KB/tấm (dùng [squoosh.app](https://squoosh.app)) để trang tải nhanh.

## 2. Thay thông tin liên hệ

Mở `js/main.js`, sửa khối `CONTACT` ngay đầu file (số điện thoại, Zalo, email).

## 3. Thay số liệu thành tích

Mở `index.html`, tìm `data-count` — sửa 4 con số: sự kiện đã dẫn, km đã chạy, giải đã tham gia, năm kinh nghiệm.

## 4. Sửa chữ / nội dung

Toàn bộ chữ (cả tiếng Việt và tiếng Anh) nằm trong từ điển `I18N` ở `js/main.js`. Sửa một chỗ, cả trang cập nhật.

## 5. Đưa lên mạng (miễn phí)

Chọn một trong ba:

- **Netlify**: vào [app.netlify.com/drop](https://app.netlify.com/drop), kéo thả cả thư mục này vào — xong.
- **Vercel**: cài [Vercel CLI](https://vercel.com/docs/cli) rồi chạy `vercel` trong thư mục này.
- **GitHub Pages**: đẩy repo lên GitHub → Settings → Pages → chọn branch → Save.

Sau khi có tên miền, cập nhật thẻ `og:image` trong `index.html` thành URL tuyệt đối (ví dụ `https://tenmien.com/images/hero.jpg`) để ảnh hiện đẹp khi chia sẻ lên Facebook.
