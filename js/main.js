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
    "about.km": "CÂU CHUYỆN",
    "about.title": "Năng lượng là thứ dễ lây lan nhất",
    "about.p1": "Tôi là Thanh Hiếu — MC và người truyền động lực. Với tôi, mỗi sự kiện là một đường chạy: có vạch xuất phát hồi hộp, những khúc quanh bất ngờ, và khoảnh khắc về đích vỡ òa mà mọi người sẽ nhớ mãi.",
    "about.p2": "Năng lượng tôi mang lên sân khấu được rèn mỗi ngày trên đường chạy, dưới làn bơi và trên sân pickleball. Thể thao dạy tôi điều quan trọng nhất của nghề dẫn: giữ nhịp — biết lúc nào cần bứt tốc, lúc nào cần lắng lại.",
    "about.p3": "Tôi tin một chương trình hay không nằm ở kịch bản hoàn hảo, mà ở người dẫn dám cháy hết mình để khán giả cũng muốn cháy theo.",
    "about.quote": "“Cứ chạy rồi sẽ tới — trên đường đua hay trên sân khấu.”",
    "stats.km": "CON SỐ BIẾT NÓI",
    "stats.events": "Sự kiện đã dẫn",
    "stats.km2": "Kilômét đã chạy",
    "stats.races": "Giải đã tham gia",
    "stats.years": "Năm kinh nghiệm",
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
    "about.km": "THE STORY",
    "about.title": "Energy is the most contagious thing",
    "about.p1": "I'm Thanh Hieu — an MC and motivational speaker. To me, every event is a race: a nervous starting line, unexpected turns, and that explosive finish-line moment people remember forever.",
    "about.p2": "The energy I bring on stage is trained daily — on the running track, in the pool, and on the pickleball court. Sport taught me the most important skill of hosting: pacing — knowing when to sprint and when to slow down.",
    "about.p3": "I believe a great show isn't about a perfect script. It's about a host who dares to burn bright enough that the audience wants to burn too.",
    "about.quote": "“Keep running and you'll get there — on the track or on the stage.”",
    "stats.km": "NUMBERS THAT TALK",
    "stats.events": "Events hosted",
    "stats.km2": "Kilometers run",
    "stats.races": "Races finished",
    "stats.years": "Years of experience",
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

/* --- Scroll reveal --------------------------------------------------------- */
const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initReveals() {
  const items = document.querySelectorAll(".reveal");
  if (REDUCED_MOTION || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((el, i) => {
    // stagger siblings that enter together
    el.style.setProperty("--reveal-delay", (i % 4) * 0.08 + "s");
    io.observe(el);
  });
}

/* --- Stat counters --------------------------------------------------------- */
function animateCount(el, target) {
  const duration = 1600;
  const start = performance.now();
  const fmt = (n) => n.toLocaleString("vi-VN");
  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
    el.textContent = fmt(Math.round(target * eased));
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function initCounters() {
  const nums = document.querySelectorAll("[data-count]");
  if (REDUCED_MOTION || !("IntersectionObserver" in window)) {
    nums.forEach((el) => (el.textContent = Number(el.dataset.count).toLocaleString("vi-VN")));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCount(entry.target, Number(entry.target.dataset.count));
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.6 }
  );
  nums.forEach((el) => io.observe(el));
}

/* --- boot ---------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initLangSwitch();
  installImageFallbacks();
  initReveals();
  initCounters();
});
