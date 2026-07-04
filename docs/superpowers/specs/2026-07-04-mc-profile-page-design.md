# Thiết kế: Trang profile cá nhân MC Thanh Hiếu

**Ngày:** 2026-07-04
**Trạng thái:** Đã duyệt

## Mục tiêu

Trang web profile một trang (single-page) cho **Thanh Hiếu** — MC, diễn giả truyền động lực, người yêu thể thao (chạy bộ, bơi lội, pickleball, tham gia các giải chạy).

Mục đích kép:
1. Xây dựng thương hiệu cá nhân — truyền cảm hứng, thể hiện năng lượng.
2. Nhận booking — khách hàng xem xong có thể liên hệ đặt lịch MC/diễn giả ngay.

## Quyết định đã chốt

| Hạng mục | Quyết định |
|---|---|
| Phong cách | Năng lượng thể thao — poster Nike: chữ to đậm, ảnh lớn, tương phản mạnh |
| Kỹ thuật | Trang tĩnh 1 trang, HTML/CSS/JS thuần, không build step |
| Song ngữ | VI/EN toggle bằng từ điển JS trong trang, lưu lựa chọn vào localStorage |
| Tư liệu ảnh | Người dùng tự lưu ảnh từ Facebook vào `images/`; dựng trước bằng placeholder |
| Deploy | Vercel / Netlify / GitHub Pages (miễn phí) |

## Bố cục trang (từ trên xuống)

1. **Hero** — full màn hình. Ảnh lớn (`images/hero.jpg`) phủ lớp tối, tên **THANH HIẾU** chữ cực to kiểu poster, tagline `MC · SPEAKER · RUNNER`. Header cố định: logo chữ + menu neo tới các section + nút VI/EN. Mũi tên mời cuộn ở đáy.
2. **Marquee** — băng chữ chạy ngang vô hạn: `TRUYỀN LỬA ★ KEEP MOVING ★ NĂNG LƯỢNG TÍCH CỰC ★ NEVER STOP ★`.
3. **Câu chuyện (About)** — ảnh chân dung (`images/portrait.jpg`) trái, câu chuyện cá nhân phải, một pull-quote lớn in đậm.
4. **Số liệu (Stats)** — 4 con số nhảy đếm khi cuộn tới: sự kiện đã dẫn, km đã chạy, giải đã tham gia, năm kinh nghiệm. Số liệu placeholder, thay số thật sau.
5. **Ba đam mê** — 3 thẻ: Chạy bộ / Bơi lội / Pickleball (`images/sport-run.jpg`, `sport-swim.jpg`, `sport-pickleball.jpg`), hover phóng ảnh + hiện mô tả.
6. **Khoảnh khắc (Gallery)** — lưới mosaic ô to nhỏ xen kẽ (`images/gallery-1.jpg` … `gallery-6.jpg`), bấm mở lightbox xem full.
7. **Dịch vụ (Booking)** — 3 gói: MC sự kiện · Diễn giả truyền động lực · Host giải chạy/sự kiện thể thao.
8. **Liên hệ (CTA)** — câu kêu gọi lớn + nút liên hệ trực tiếp: Gọi điện (`tel:`), Zalo, Messenger, Email (`mailto:`) + link mạng xã hội. Không cần backend/form server. Số điện thoại/email/link dùng giá trị placeholder, gom về một chỗ đầu file JS để thay một lần; Messenger trỏ tới `facebook.com/thanh.hieu.43246`.
9. **Footer** — gọn: tên, năm, social links.

## Thiết kế thị giác

- **Màu:** nền đen than `#0A0A0A`, chữ trắng `#F5F5F5`, màu nhấn **volt (vàng chanh neon)** `#C8FF00`.
- **Font tiêu đề:** Anton (Google Fonts, hỗ trợ tiếng Việt), viết hoa, tracking chặt.
- **Font nội dung:** Be Vietnam Pro (Google Fonts, tối ưu tiếng Việt).
- **Hiệu ứng:** scroll-reveal (IntersectionObserver), số đếm tăng dần, parallax nhẹ ảnh hero, marquee CSS animation, hover zoom gallery. Tôn trọng `prefers-reduced-motion`.

## Song ngữ

- Mọi phần tử chữ gắn `data-i18n="key"`; từ điển `{ vi: {...}, en: {...} }` trong `js/main.js`.
- Nút VI/EN trên header; lựa chọn lưu `localStorage`, mặc định tiếng Việt.
- `lang` attribute của `<html>` cập nhật theo ngôn ngữ.

## Cấu trúc file

```
index.html
css/style.css
js/main.js        (i18n + hiệu ứng + lightbox)
images/           (ảnh thật do người dùng thả vào, đặt đúng tên)
```

## Xử lý ảnh placeholder

Khi chưa có ảnh thật: mỗi vị trí ảnh hiển thị nền gradient tối + nhãn ghi tên file cần thả vào (ví dụ "Thả ảnh: images/hero.jpg"). Dùng `onerror` trên `<img>` để tự chuyển sang placeholder khi file chưa tồn tại — thả ảnh đúng tên vào là hiện ngay, không cần sửa code.

## Responsive & chất lượng

- Mobile-first: khách xem profile MC chủ yếu qua điện thoại.
- Không dependency ngoài (trừ Google Fonts). Lightbox, marquee, counter tự viết.
- SEO cơ bản: title, meta description, Open Graph tags (ảnh share Facebook đẹp).

## Ngoài phạm vi (YAGNI)

- CMS, blog, trang con, form gửi server, analytics — có thể thêm sau nếu cần.
