# Recommended improvements for the exported site

Findings below come from inspecting the current `docs/` export (index, about, 404, assets, images, robots, sitemap). Grouped by priority.

## 1. SEO gaps (highest value)

- **Canonical tags are wrong.** Homepage has `<link rel="canonical" href="index.html">` (relative to file, not URL) and `/about/` has no canonical at all. Set absolute canonicals: `https://tycheventures.com/` and `https://tycheventures.com/about/`.
- **`og:url` is `/`** on the homepage and missing on About. Set absolute URLs on both.
- **No `og:image` / `twitter:image`.** Social shares currently render as a blank card. Add a 1200x630 share image (hero illustration + logo on brand teal) and reference it with its absolute URL on both pages.
- **No JSON-LD in the exported HTML.** Add `Organization` (name, logo, url, sameAs social profiles) and `WebSite` blocks to the homepage, and a `LocalBusiness`/`AboutPage` block to About — the site targets "Kolhapur web design agency", so the address/area served helps local search.
- **404 page has no `<title>`.** Give it a real title and a `noindex` robots meta.
- **Add `<meta name="robots" content="index,follow">`** on the two real pages, and `noindex` on every redirect stub so Google doesn't index empty bounce pages.

## 2. Bugs in the header

- **Products nav item** links to `href="/" target="_blank"` — clicking it opens a new tab of the homepage instead of scrolling to the products section. It should be an in-page link to `#products` in the same tab (the two child links to WPGenius/FenixHost stay external).
- **Favicon path is absolute** (`/img/favicon.png`). Works on the custom domain but breaks on a GitHub Pages project URL. Make it relative per page depth, like the CSS/JS links already are.
- **Mobile Services dropdown** renders a toggle button but the panel markup is missing from the export, so tapping Services on mobile does nothing. Restore the sub-list.

## 3. Performance

- **Two oversized images**: `hero-banner.png` (368 KB) and `counter-bg.jpg` (358 KB) are ~half the page weight. Convert to WebP with JPG/PNG fallback via `<picture>`, and serve a smaller mobile crop through `srcset`. Expect roughly 500 KB saved on first load.
- **Preload the hero image** and mark it `fetchpriority="high"` — it is the Largest Contentful Paint element.
- **Google Fonts is render-blocking.** Self-host the four Montserrat weights actually used as `woff2` in `docs/assets/fonts/`, with `font-display: swap`. Removes two third-party connections and a layout shift.
- **`style.css` is 94 KB** because the export ships every Tailwind utility present in the build. Purge to only the classes used by the two pages.
- Add `loading="lazy"` + `decoding="async"` to the remaining below-the-fold images that still lack it, and keep `width`/`height` on all of them (most already have it).

## 4. Accessibility

- Add a "Skip to content" link as the first focusable element.
- Visible focus rings on nav links, project tiles and the Get A Quote button (currently only hover states are styled).
- Dropdown menus are hover/focus-within only — add keyboard `aria-expanded` toggling so they open on Enter.
- Testimonial slider needs `aria-live="polite"` and prev/next buttons with labels; autoplay should pause on hover/focus.
- Check the teal `#3aaac0` on white for small text — it fails WCAG AA at 14 px and needs a slightly darker shade for body-size text only.

## 5. Content and conversion

- There is no way to contact Tyche from this site — every CTA leaves to WPGenius. Consider a lightweight contact block (email + phone as `mailto:`/`tel:` links) in the footer so the page has a self-contained conversion path.
- Counter numbers and testimonials carry no dates or sources; that is fine, but avoid adding new claims that can't be backed up.
- The About page reuses the homepage description almost verbatim in some sections — differentiate the copy so the two pages don't compete.

## 6. Housekeeping

- Add `sitemap.xml` `lastmod` only if you want it — right now it is correctly omitted rather than faked with the build date.
- Add a `docs/.nojekyll` file so GitHub Pages never strips underscore-prefixed assets.
- The repo `README.md` could gain a one-line "how to rebuild the export" note so future edits regenerate `docs/` the same way.

## Suggested order

1. SEO gaps + header bugs (section 1 and 2) — small, high impact.
2. Image/WebP + font self-hosting + CSS purge (section 3).
3. Accessibility pass (section 4).
4. Contact block and copy differentiation (section 5), then housekeeping.

Tell me which sections to execute — I can do 1 and 2 together in one pass, or all of it in sequence.
