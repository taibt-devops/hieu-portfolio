# Thanh Hiếu — MC · Gia sư tiếng Anh

HTML/CSS/JS thuần, không cần cài đặt gì, mở file là chạy.

**Hai trang, dùng chung một bộ code:**

| Trang | Dành cho | Gửi link này khi |
|---|---|---|
| `index.html` | Khách thuê MC đám cưới / sự kiện | Ai đó hỏi thuê MC |
| `teaching.html` | Học viên muốn học tiếng Anh giao tiếp | Ai đó hỏi học tiếng Anh |

Đừng gửi nhầm link — hai nhóm người này quan tâm hai thứ hoàn toàn khác nhau.

Cấu trúc file:

```
index.html        trang MC (nền đen, sân khấu)
teaching.html     trang gia sư — dạng "bản ghi cuộc trò chuyện" trên nền giấy
css/style.css     chỉ cho trang MC
css/teaching.css  chỉ cho trang gia sư
js/site.js        hành vi dùng chung (hiệu ứng cuộn, nút liên hệ, popup gọi điện)
js/i18n-mc.js     chữ của trang MC (VI + EN)
```

Trang gia sư KHÔNG có nút VI/EN — bản ghi cố ý trộn hai thứ tiếng, kèm dòng
dịch nhỏ dưới câu tiếng Anh, vì chính điều đó là hàng mẫu của sản phẩm.
Toàn bộ chữ của trang gia sư nằm thẳng trong `teaching.html`.

Số điện thoại / Zalo / email nằm ở khối `CONTACT` đầu file `js/site.js` — sửa
một chỗ là cả hai trang cùng đổi.

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

Mở `js/site.js`, sửa khối `CONTACT` ngay đầu file (số điện thoại, Zalo, email).
Áp dụng cho cả hai trang.

## 3. Thay số liệu thành tích

Mở `index.html`, tìm `data-count` — sửa 4 con số: sự kiện đã dẫn, km đã chạy, giải đã tham gia, năm kinh nghiệm.

## 4. Sửa chữ / nội dung

Trang MC: toàn bộ chữ (VI + EN) nằm trong từ điển `js/i18n-mc.js` — sửa một
chỗ, cả trang cập nhật. Trang gia sư: chữ nằm thẳng trong `teaching.html`.

## 4b. Trang gia sư — học phí

Bảng giá nằm trong `teaching.html`, khối `<div class="pricecard">` (tìm chữ
`300.000`). Nếu đổi giá, sửa luôn khối JSON-LD ở đầu file (phần `offers`) để
Google không đọc ra giá cũ.

## 4c. Gắn video "nghe tôi nói thử" — việc quan trọng nhất

> **Kịch bản quay đầy đủ nằm ở [docs/kich-ban-video.md](docs/kich-ban-video.md)** —
> 90 giây, chia sẵn từng mốc thời gian, kèm cách đặt máy, ánh sáng, tiếng.

Trang gia sư đang có một ô gạch chéo chờ video. Không có chứng chỉ thì **video
chính là thứ thay thế**: người ta nghe 90 giây là biết bạn nói được hay không,
không cần tin lời quảng cáo.

Quay bằng điện thoại cũng được. Nội dung gợi ý: tự giới thiệu, kể một chuyện
ngắn, trả lời một câu hỏi ngẫu nhiên — quay một lần, **không cắt ghép** (chính
chỗ "không cắt ghép" mới là bằng chứng).

Up lên YouTube (để chế độ *Không công khai* cũng được), rồi trong `teaching.html`
thay cả khối `<div class="video-slot">...</div>` bằng:

```html
<div class="video-frame reveal">
  <iframe src="https://www.youtube.com/embed/MA-VIDEO-CUA-BAN"
          title="Thanh Hiếu nói tiếng Anh" allowfullscreen loading="lazy"></iframe>
</div>
```

Khung `.video-frame` đã có sẵn trong `css/teaching.css` — chỉ cần thay khối
HTML là xong, không phải thêm CSS.

## 5. Đưa lên mạng (miễn phí)

Chọn một trong ba:

- **Netlify**: vào [app.netlify.com/drop](https://app.netlify.com/drop), kéo thả cả thư mục này vào — xong.
- **Vercel**: cài [Vercel CLI](https://vercel.com/docs/cli) rồi chạy `vercel` trong thư mục này.
- **GitHub Pages**: đẩy repo lên GitHub → Settings → Pages → chọn branch → Save.

Sau khi có tên miền, mở `index.html` và thay **tất cả** chỗ ghi `DOI-TEN-MIEN-CUA-BAN.com`
bằng tên miền thật (có 4 chỗ: `og:image`, `og:url`, và 2 chỗ trong khối JSON-LD ở cuối `<head>`).
Chưa thay thì Facebook/Zalo sẽ không hiện ảnh khi chia sẻ link.
