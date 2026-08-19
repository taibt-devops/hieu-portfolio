# Thanh Hiếu — MC · Gia sư tiếng Anh

HTML/CSS/JS thuần, không cần cài đặt gì, mở file là chạy.

**Repo này chỉ còn trang MC.** Trang gia sư tiếng Anh đã tách sang repo riêng
`teaching-speakhieu` để gắn tên miền riêng:

| Trang | Repo | Tên miền dự kiến |
|---|---|---|
| MC đám cưới / sự kiện | `hieu-portfolio` (repo này) | `mc.speakhieu.pro` |
| Gia sư tiếng Anh | `teaching-speakhieu` | `teaching.speakhieu.pro` |

Cấu trúc file:

```
index.html       trang MC
cv/index.html    CV — mở ở mc.speakhieu.pro/cv/, bấm nút là in ra PDF
css/style.css    giao diện trang MC
js/site.js       hành vi (hiệu ứng cuộn, nút liên hệ, popup gọi điện)
js/i18n-mc.js    toàn bộ chữ VI + EN
```

**CV còn 2 chỗ `[NĂM]`** cần điền (khoá đào tạo giáo viên NGO và năm dạy tình
nguyện) — mở `cv/index.html`, tìm `[NĂM]`. Sửa số liệu thì nhớ sửa cả 4 ô
trong dải thống kê lẫn phần Experience cho khớp trang MC.

Số điện thoại / Zalo / email nằm ở khối `CONTACT` đầu `js/site.js`.
Lưu ý: repo `teaching-speakhieu` có bản `site.js` riêng — đổi số thì sửa cả hai repo.

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

## 3. Thay số liệu thành tích

Mở `index.html`, tìm `data-count` — sửa 4 con số: sự kiện đã dẫn, km đã chạy, giải đã tham gia, năm kinh nghiệm.

## 4. Sửa chữ / nội dung

Toàn bộ chữ (VI + EN) nằm trong từ điển `js/i18n-mc.js` — sửa một chỗ,
cả trang cập nhật.

## 5. Đưa lên mạng (miễn phí)

Chọn một trong ba:

- **Netlify**: vào [app.netlify.com/drop](https://app.netlify.com/drop), kéo thả cả thư mục này vào — xong.
- **Vercel**: cài [Vercel CLI](https://vercel.com/docs/cli) rồi chạy `vercel` trong thư mục này.
- **GitHub Pages**: đẩy repo lên GitHub → Settings → Pages → chọn branch → Save.

Tên miền đã điền sẵn là `mc.speakhieu.pro`. DNS ở nhà đăng ký:
`CNAME | mc | taibt-devops.github.io`, rồi Settings → Pages → Custom domain:
`mc.speakhieu.pro` → Save → bật Enforce HTTPS.
