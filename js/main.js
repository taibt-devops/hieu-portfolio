/* ==========================================================================
   Thanh Hiếu — MC · Speaker · Ironman
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
    "hero.role1": "MC SONG NGỮ",
    "hero.sub": "Người truyền động lực — trên sân khấu & trên đường chạy.",
    "hero.scroll": "CUỘN XUỐNG",
    "marquee.1": "TRUYỀN LỬA",
    "marquee.2": "NĂNG LƯỢNG TÍCH CỰC",
    "about.km": "CÂU CHUYỆN",
    "about.title": "Năng lượng là thứ dễ lây lan nhất",
    "about.p1": "Tôi là Thanh Hiếu — MC song ngữ và người truyền động lực. Với tôi, mỗi sự kiện là một đường chạy: có vạch xuất phát hồi hộp, những khúc quanh bất ngờ, và khoảnh khắc về đích vỡ òa mà mọi người sẽ nhớ mãi.",
    "about.p2": "Năng lượng tôi mang lên sân khấu được rèn mỗi ngày trên đường chạy, dưới làn bơi và trên sân pickleball. Thể thao dạy tôi điều quan trọng nhất của nghề dẫn: giữ nhịp — biết lúc nào cần bứt tốc, lúc nào cần lắng lại.",
    "about.p3": "Tôi tin một chương trình hay không nằm ở kịch bản hoàn hảo, mà ở người dẫn dám cháy hết mình để khán giả cũng muốn cháy theo.",
    "about.quote": "“Cứ chạy rồi sẽ tới — trên đường đua hay trên sân khấu.”",
    "stats.km": "CON SỐ BIẾT NÓI",
    "stats.events": "Sự kiện đã dẫn",
    "stats.km2": "Kilômét đã chạy",
    "stats.races": "Giải đã tham gia",
    "stats.years": "Năm kinh nghiệm",
    "passions.km": "BA ĐAM MÊ",
    "passions.title": "Thể thao là phòng gym của tinh thần",
    "passions.run.title": "Chạy bộ",
    "passions.run.desc": "Nơi rèn sức bền và kỷ luật — từ những buổi chạy 5 giờ sáng đến vạch đích các giải half-marathon.",
    "passions.swim.title": "Bơi lội",
    "passions.swim.desc": "Nơi học cách thở, giữ bình tĩnh và kiểm soát nhịp — kỹ năng sống còn của người cầm mic.",
    "passions.pickle.title": "Pickleball",
    "passions.pickle.desc": "Nơi phản xạ nhanh gặp niềm vui kết nối — môn thể thao của những cuộc gặp gỡ mới.",
    "gallery.km": "KHOẢNH KHẮC",
    "gallery.title": "Những khung hình đáng nhớ",
    "services.km": "ĐỒNG HÀNH CÙNG BẠN",
    "services.title": "Tôi có thể tiếp lửa cho sự kiện của bạn",
    "services.mc.title": "MC sự kiện song ngữ",
    "services.mc.desc": "Lễ khai trương, year-end party, hội nghị, gala — dẫn song ngữ Việt–Anh với năng lượng khiến khán phòng không ai muốn xem điện thoại.",
    "services.speaker.title": "Diễn giả truyền động lực",
    "services.speaker.desc": "Chia sẻ về kỷ luật, sức bền và tư duy tích cực — những bài học thật từ đường chạy, kể bằng ngôn ngữ của sân khấu.",
    "services.host.title": "Host giải chạy & sự kiện thể thao",
    "services.host.desc": "MC hiểu vận động viên vì chính mình là vận động viên — giữ lửa từ vạch xuất phát đến người về đích cuối cùng.",
    "contact.km": "VỀ ĐÍCH",
    "contact.title1": "Cùng tạo nên một sự kiện",
    "contact.title2": "bùng nổ?",
    "contact.sub": "Nhắn tôi một tin — chúng ta sẽ bắt đầu từ ý tưởng của bạn.",
    "contact.call": "Gọi điện",
    "footer.tag": "Cứ chạy rồi sẽ tới.",
  },
  en: {
    "logo": "TH.",
    "nav.about": "The Story",
    "nav.passions": "Passions",
    "nav.gallery": "Moments",
    "nav.services": "Services",
    "nav.contact": "Book me",
    "hero.km": "STARTING LINE",
    "hero.role1": "BILINGUAL MC",
    "hero.sub": "Bringing energy — on stage & on the road.",
    "hero.scroll": "SCROLL DOWN",
    "marquee.1": "IGNITE THE CROWD",
    "marquee.2": "POSITIVE ENERGY",
    "about.km": "THE STORY",
    "about.title": "Energy is the most contagious thing",
    "about.p1": "I'm Thanh Hieu — a bilingual MC and motivational speaker. To me, every event is a race: a nervous starting line, unexpected turns, and that explosive finish-line moment people remember forever.",
    "about.p2": "The energy I bring on stage is trained daily — on the running track, in the pool, and on the pickleball court. Sport taught me the most important skill of hosting: pacing — knowing when to sprint and when to slow down.",
    "about.p3": "I believe a great show isn't about a perfect script. It's about a host who dares to burn bright enough that the audience wants to burn too.",
    "about.quote": "“Keep running and you'll get there — on the track or on the stage.”",
    "stats.km": "NUMBERS THAT TALK",
    "stats.events": "Events hosted",
    "stats.km2": "Kilometers run",
    "stats.races": "Races finished",
    "stats.years": "Years of experience",
    "passions.km": "THREE PASSIONS",
    "passions.title": "Sport is the gym of the mind",
    "passions.run.title": "Running",
    "passions.run.desc": "Where endurance and discipline are forged — from 5 AM runs to half-marathon finish lines.",
    "passions.swim.title": "Swimming",
    "passions.swim.desc": "Where I learned to breathe, stay calm and control the rhythm — survival skills for anyone holding a mic.",
    "passions.pickle.title": "Pickleball",
    "passions.pickle.desc": "Where fast reflexes meet the joy of connection — the sport of new friendships.",
    "gallery.km": "MOMENTS",
    "gallery.title": "Frames worth remembering",
    "services.km": "LET'S WORK TOGETHER",
    "services.title": "I can fuel your event",
    "services.mc.title": "Bilingual event MC",
    "services.mc.desc": "Grand openings, year-end parties, conferences, galas — hosted in both Vietnamese and English, with an energy that keeps every phone in every pocket.",
    "services.speaker.title": "Motivational speaker",
    "services.speaker.desc": "Talks on discipline, endurance and positive thinking — real lessons from the road, told in the language of the stage.",
    "services.host.title": "Race & sports event host",
    "services.host.desc": "An MC who understands athletes because he is one — keeping the fire alive from the starting gun to the very last finisher.",
    "contact.km": "FINISH LINE",
    "contact.title1": "Let's create an event that",
    "contact.title2": "explodes?",
    "contact.sub": "Send me a message — we'll start from your idea.",
    "contact.call": "Call me",
    "footer.tag": "Keep running, you'll get there.",
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

/* --- Lightbox --------------------------------------------------------------
   Opens only for real photos; placeholder tiles stay inert. */
function initLightbox() {
  const box = document.getElementById("lightbox");
  if (!box || typeof box.showModal !== "function") return;
  const boxImg = box.querySelector(".lightbox-img");

  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      if (!img) return; // placeholder tile — nothing to enlarge
      boxImg.src = img.src;
      boxImg.alt = img.alt;
      box.showModal();
    });
  });

  box.querySelector(".lightbox-close").addEventListener("click", () => box.close());
  box.addEventListener("click", (e) => {
    if (e.target === box) box.close(); // backdrop click
  });
}

/* --- Hero parallax ---------------------------------------------------------- */
function initParallax() {
  if (REDUCED_MOTION) return;
  const heroImg = document.querySelector(".hero-img, .hero .img-fallback");
  if (!heroImg) return;
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight) heroImg.style.transform = "translateY(" + y * 0.25 + "px)";
        ticking = false;
      });
    },
    { passive: true }
  );
}

/* --- Active nav highlight --------------------------------------------------- */
function initActiveNav() {
  const links = Array.from(document.querySelectorAll(".site-nav a"));
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);
  if (!("IntersectionObserver" in window) || !sections.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) =>
          a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id)
        );
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((s) => io.observe(s));
}

/* --- Contact buttons ------------------------------------------------------- */
function initContactLinks() {
  const set = (id, href) => {
    const el = document.getElementById(id);
    if (el) el.href = href;
  };
  set("btn-phone", "tel:" + CONTACT.phone);
  set("btn-zalo", "https://zalo.me/" + CONTACT.zalo);
  set("btn-messenger", CONTACT.messenger);
  set("btn-email", "mailto:" + CONTACT.email);
  set("link-facebook", CONTACT.facebook);

  const year = document.getElementById("footer-year");
  if (year) year.textContent = new Date().getFullYear();
}

/* --- boot ---------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initLangSwitch();
  installImageFallbacks();
  initReveals();
  initCounters();
  initLightbox();
  initContactLinks();
  initParallax();
  initActiveNav();
});
