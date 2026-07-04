/* ==========================================================================
   Thanh Hiếu — MC · Speaker · Runner
   ========================================================================== */

/* --- Contact placeholders: replace these once, everything updates --------- */
const CONTACT = {
  phone: "0900000000",                              // ← thay số điện thoại thật
  zalo: "0900000000",                               // ← thay số Zalo thật
  messenger: "https://m.me/thanh.hieu.43246",
  email: "hello@thanhhieu.vn",                      // ← thay email thật
  facebook: "https://www.facebook.com/thanh.hieu.43246",
};

/* --- i18n ------------------------------------------------------------------
   Every user-visible string lives here. data-i18n="key" on the element. --- */
const I18N = {
  vi: {
    "logo": "TH.",
    "nav.about": "Câu chuyện",
    "nav.passions": "Đam mê",
    "nav.gallery": "Khoảnh khắc",
    "nav.services": "Dịch vụ",
    "nav.contact": "Booking",
    "hero.km": "VẠCH XUẤT PHÁT",
    "hero.sub": "Người truyền động lực — trên sân khấu & trên đường chạy.",
    "hero.scroll": "CUỘN XUỐNG",
    "marquee.1": "TRUYỀN LỬA",
    "marquee.2": "NĂNG LƯỢNG TÍCH CỰC",
  },
  en: {
    "logo": "TH.",
    "nav.about": "The Story",
    "nav.passions": "Passions",
    "nav.gallery": "Moments",
    "nav.services": "Services",
    "nav.contact": "Book me",
    "hero.km": "STARTING LINE",
    "hero.sub": "Bringing energy — on stage & on the road.",
    "hero.scroll": "SCROLL DOWN",
    "marquee.1": "IGNITE THE CROWD",
    "marquee.2": "POSITIVE ENERGY",
  },
};

function applyLang(lang) {
  const dict = I18N[lang] || I18N.vi;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  try { localStorage.setItem("lang", lang); } catch (_) { /* private mode */ }
}

function initLangSwitch() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });
  let saved = "vi";
  try { saved = localStorage.getItem("lang") || "vi"; } catch (_) { /* private mode */ }
  if (saved !== "vi") applyLang(saved);
}

/* --- Image fallbacks -------------------------------------------------------
   Until a real photo exists at the path, show a labeled drop-target box.
   Drop the correctly named file into images/ and it appears — no code edits. */
function installImageFallbacks() {
  document.querySelectorAll("img[data-fallback]").forEach((img) => {
    const swap = () => {
      const box = document.createElement("div");
      box.className = "img-fallback " + img.className;
      box.innerHTML =
        '<span>📷 Thả ảnh vào:</span><strong>' + img.dataset.fallback + "</strong>";
      img.replaceWith(box);
    };
    if (img.complete && img.naturalWidth === 0) swap();
    else img.addEventListener("error", swap, { once: true });
  });
}

/* --- boot ---------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initLangSwitch();
  installImageFallbacks();
});
