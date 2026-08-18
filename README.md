# Thanh Hiếu — MC · Speaker · Ironman

Trang profile cá nhân một trang: HTML/CSS/JS thuần, không cần cài đặt gì, mở `index.html` là chạy.

## 1. Thay ảnh thật

Lưu ảnh từ Facebook về, đặt **đúng tên file** vào thư mục `images/` — trang tự hiển thị, không cần sửa code:

| File | Vị trí trên trang | Gợi ý ảnh |
|---|---|---|
| `images/hero.jpg` | Màn hình đầu (to nhất, quan trọng nhất) | Ảnh dọc (2:3) chất lượng cao, cầm mic, **nhìn thẳng ống kính**, nhân vật lệch phải khung — dùng chung cho máy tính & điện thoại |
| `images/portrait.jpg` | Phần "Câu chuyện" | Ảnh chân dung dọc (tỷ lệ 3:4) |
| `images/sport-run.jpg` | Mục "Đam mê", ảnh dọc bên trái | Ảnh dọc đang chạy (3:4). **Không dùng ảnh có watermark của bên thứ ba** |
| `images/sport-swim.jpg` | Mục "Đam mê", dải ngang dưới danh sách | Ảnh ngang, nhân vật ở giữa (bị cắt còn 16:6) |
| `images/moment-crowd.jpg` | "Khoảnh khắc", ô trái | Ảnh ngang 3:2 — đang dẫn, có khán giả trong khung |
| `images/moment-ceremony.jpg` | "Khoảnh khắc", ô phải | Ảnh ngang 3:2 — bối cảnh sự kiện |

Thư mục `images/unused/` chứa các ảnh đã gỡ khỏi trang (mờ, lạc đề, hoặc nhân vật
chính không phải MC). Giữ lại để đối chiếu — xoá lúc nào cũng được.

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

Sau khi có tên miền, mở `index.html` và thay **tất cả** chỗ ghi `DOI-TEN-MIEN-CUA-BAN.com`
bằng tên miền thật (có 4 chỗ: `og:image`, `og:url`, và 2 chỗ trong khối JSON-LD ở cuối `<head>`).
Chưa thay thì Facebook/Zalo sẽ không hiện ảnh khi chia sẻ link.
