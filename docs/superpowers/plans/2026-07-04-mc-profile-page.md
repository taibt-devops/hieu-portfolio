# MC Thanh Hiếu Profile Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Single-page static profile website for MC Thanh Hiếu — sporty Nike-poster style, bilingual VI/EN, placeholder images that auto-swap when real photos are dropped in.

**Architecture:** One `index.html` with all sections in DOM order; `css/style.css` holds design tokens + section styles; `js/main.js` holds the i18n dictionary, language toggle, scroll-reveal, counters, marquee needs no JS, lightbox, and image-placeholder fallback. No build step, no dependencies except Google Fonts.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, animations), vanilla JS (IntersectionObserver, localStorage). Spec: `docs/superpowers/specs/2026-07-04-mc-profile-page-design.md`.

## Global Constraints

- Colors: background `#0A0A0A`, text `#F5F5F5`, accent volt `#C8FF00`.
- Fonts: Anton (display, uppercase), Be Vietnam Pro (body) — Google Fonts with `&display=swap`, Vietnamese subset.
- Default language: `vi`; toggle persists to `localStorage` key `lang`; `<html lang>` updates.
- All user-visible text lives in the i18n dictionary in `js/main.js` — no hardcoded copy in HTML except proper nouns (THANH HIẾU).
- Contact placeholders gathered at top of `js/main.js` in one `CONTACT` object; Messenger links to `https://m.me/thanh.hieu.43246`.
- Every `<img>` gets `onerror` fallback → styled placeholder telling which file to drop into `images/`.
- Respect `prefers-reduced-motion: reduce` (disable marquee scroll, parallax, counters animate instantly, reveals shown immediately).
- Mobile-first responsive; breakpoints at 768px and 1100px.
- No test framework exists — each task verifies by opening `index.html` in a browser (or `Start-Process index.html`) and checking the listed expectations, plus a syntax sanity check via `node --check js/main.js` where JS changes.

## File Structure

```
index.html          — full DOM: header, 9 sections, lightbox dialog
css/style.css       — tokens, base, header, per-section styles, responsive, reduced-motion
js/main.js          — CONTACT config, I18N dict, lang toggle, reveal/counter/parallax, lightbox, img fallback
images/             — user drops: hero.jpg, portrait.jpg, sport-run.jpg, sport-swim.jpg,
                      sport-pickleball.jpg, gallery-1.jpg … gallery-6.jpg
README.md           — how to replace photos, contact info, numbers; how to deploy
```

---

### Task 1: Skeleton + design tokens + header/hero/marquee

**Files:**
- Create: `index.html`, `css/style.css`, `js/main.js`, `images/.gitkeep`

**Interfaces:**
- Produces: section ids `#home #about #stats #passions #gallery #services #contact`; CSS custom properties `--bg --ink --volt --font-display --font-body`; `data-i18n` attribute convention; `js/main.js` exposes `applyLang(lang)` used by toggle buttons.

- [ ] **Step 1:** Write `index.html` with `<head>` (charset, viewport, title "Thanh Hiếu — MC · Speaker · Runner", meta description, OG tags pointing at `images/hero.jpg`, Google Fonts link for Anton + Be Vietnam Pro Vietnamese subsets), fixed header (logo text `TH.`, nav anchors, VI/EN buttons `.lang-btn[data-lang]`), hero section (`#home`: `img.hero-img[src=images/hero.jpg]`, overlay, `h1` THANH HIẾU, tagline, scroll cue), marquee section (duplicated track spans for seamless loop).
- [ ] **Step 2:** Write `css/style.css`: `:root` tokens, reset, body styles, header (blur backdrop, volt underline on hover), hero (100svh, object-fit cover image, dark gradient overlay, clamp()-sized Anton headline ~`clamp(3.5rem, 14vw, 11rem)`), marquee (`@keyframes marquee` translateX -50%, duplicated content), `.img-fallback` placeholder style (dark gradient + dashed volt border + centered label), `@media (prefers-reduced-motion: reduce)` kill animations.
- [ ] **Step 3:** Write `js/main.js` initial: `CONTACT` object (phone/zalo/messenger/email placeholders), empty-ish `I18N` with keys used so far (nav, hero tagline, scroll cue, marquee items), `applyLang()`, toggle wiring + localStorage, `installImageFallbacks()` replacing broken imgs with labeled placeholder divs.
- [ ] **Step 4:** Verify: `node --check js/main.js` passes; open page — hero shows placeholder box labeled `images/hero.jpg`, headline THANH HIẾU renders in Anton, VI/EN buttons swap tagline text and persist after reload, marquee scrolls seamlessly.
- [ ] **Step 5:** Commit `feat: skeleton, hero, marquee, i18n core`.

### Task 2: About + Stats (counters)

**Files:**
- Modify: `index.html`, `css/style.css`, `js/main.js`

**Interfaces:**
- Consumes: `I18N`, `applyLang`, reveal classes.
- Produces: `.reveal` class + `initReveals()` (IntersectionObserver adds `.is-visible`); `data-count` attribute + `initCounters()`.

- [ ] **Step 1:** Add `#about`: two-column grid — `img[src=images/portrait.jpg]` with volt offset-frame, story copy (3 short paragraphs, VI+EN in dict), big pull-quote styled Anton with volt highlight.
- [ ] **Step 2:** Add `#stats`: 4 items with `data-count` (200 sự kiện, 1500 km, 15 giải, 8 năm), Anton numerals, volt `+` suffix, labels via i18n.
- [ ] **Step 3:** Implement `initReveals()` (stagger via `--reveal-delay`), `initCounters()` (requestAnimationFrame ease-out count-up on first intersection; instant when reduced-motion).
- [ ] **Step 4:** Verify in browser: sections fade in on scroll, numbers count up once, VI/EN swaps all about/stats copy.
- [ ] **Step 5:** Commit `feat: about story and animated stats`.

### Task 3: Passions cards + Gallery + Lightbox

**Files:**
- Modify: `index.html`, `css/style.css`, `js/main.js`

**Interfaces:**
- Produces: `.card` hover pattern; `initLightbox()` binding `.gallery-item` clicks to `<dialog id="lightbox">`.

- [ ] **Step 1:** Add `#passions`: 3 tall cards (run/swim/pickleball) — image, index numeral `01/02/03` in volt, title Anton, hover: image scales 1.06 + description slides up.
- [ ] **Step 2:** Add `#gallery`: mosaic grid (`grid-auto-flow: dense`, feature tiles span 2), 6 items `images/gallery-1..6.jpg`, hover zoom + volt caption chip.
- [ ] **Step 3:** Add `<dialog id="lightbox">` + `initLightbox()`: click opens image full, Esc/backdrop/× closes; skip opening for still-placeholder tiles.
- [ ] **Step 4:** Verify: cards hover correctly, gallery mosaic has no holes at 375px/768px/1280px widths, lightbox opens/closes.
- [ ] **Step 5:** Commit `feat: passions, gallery mosaic, lightbox`.

### Task 4: Services + Contact CTA + Footer

**Files:**
- Modify: `index.html`, `css/style.css`, `js/main.js`

**Interfaces:**
- Consumes: `CONTACT` object — hrefs built as `tel:`, `https://zalo.me/`, `https://m.me/thanh.hieu.43246`, `mailto:`.

- [ ] **Step 1:** Add `#services`: 3 offer rows/cards (MC sự kiện / Diễn giả truyền động lực / Host giải chạy) — numbered, title Anton, 2-line description, volt hover border.
- [ ] **Step 2:** Add `#contact`: giant Anton CTA ("Cùng tạo nên một sự kiện BÙNG NỔ?" / EN variant), 4 contact buttons populated from `CONTACT` by JS, social row; footer with name + year.
- [ ] **Step 3:** Verify: buttons carry correct hrefs from `CONTACT`, all copy toggles VI/EN, tab-through keyboard order sane.
- [ ] **Step 4:** Commit `feat: services, contact CTA, footer`.

### Task 5: Polish + SEO + README + final review

**Files:**
- Modify: `index.html`, `css/style.css`
- Create: `README.md`

**Interfaces:** none new.

- [ ] **Step 1:** Hero parallax (translateY on scroll, disabled reduced-motion), smooth-scroll nav with header offset, active-section nav highlight.
- [ ] **Step 2:** Pass over responsive: 375px, 768px, 1440px — no horizontal scroll, headline never clips diacritics (line-height ≥ 1.1 for Vietnamese caps).
- [ ] **Step 3:** `README.md` (Vietnamese): photo file names + where to drop them, where to edit `CONTACT` + stats numbers, deploy steps for Vercel/Netlify/GitHub Pages.
- [ ] **Step 4:** Full verify pass against spec checklist; commit `feat: polish, seo, readme`.

## Self-Review

- Spec coverage: all 9 sections + visual/i18n/placeholder/responsive/SEO requirements map to Tasks 1–5. ✓
- Placeholder scan: copy text authored during implementation lives in the I18N dict (single source, reviewed in browser both languages) — deliberate; contact values are spec-mandated placeholders. ✓
- Naming consistency: `applyLang`, `initReveals`, `initCounters`, `initLightbox`, `installImageFallbacks`, `CONTACT`, `I18N` used consistently. ✓
