# Hero pattern, transparent header, and outbound links

Three refinements to match the archived design, applied to both the React app and the static `docs/` export.

## 1. Hero background pattern

The hero currently sits on a flat light-grey block. The reference shows a soft pale-blue curved wave sweeping behind the illustration, fading into white at the edges.

- Add a decorative wave shape as an inline SVG layer behind the hero content (pale teal tint of the brand colour, no extra image download needed).
- Keep it absolutely positioned, `aria-hidden`, clipped to the hero section so it never causes horizontal scroll.
- Hero background becomes white with the wave on top, matching the screenshot instead of the current grey band.
- Scales down cleanly on tablet/mobile (wave shrinks and stays behind the text, never over it).

## 2. Transparent header that solidifies on scroll

- At the top of the page the header is fully transparent — no background, no shadow — sitting over the hero.
- Once the page is scrolled past ~20px, the header gains the white background plus soft shadow it has today, and stays sticky.
- The hero gets top padding so its content is not hidden under the overlaying header (the current fixed-height spacer is removed).
- The mobile menu panel always keeps a solid background so the links stay readable when opened over the hero.
- On the About page there is no hero image, so the header starts in its solid state there to keep the logo and links legible.

## 3. Links to pages we are not building

All navigation, footer, and call-to-action links already point at the live WordPress URLs (`https://tycheventures.com/...`) and the external product sites; only `About` and the logo stay internal. This will be re-verified link by link across the header, footer, hero, CTA band, projects "View all", and client rows so every non-built page opens its real target directly, with no local dead route and no intermediate redirect page. External product links keep `target="_blank"` with safe `rel` attributes.

## Technical notes

- `src/components/site/SiteHeader.tsx`: add a `transparent` prop (default true) driving the initial background/shadow classes off the existing `scrolled` state; About passes the solid variant.
- `src/routes/index.tsx`: hero section markup gets the SVG wave layer and updated spacing; remove the fixed `pt-[68px]` offset in favour of hero-internal padding.
- `src/routes/about.tsx`: solid header variant, unchanged content.
- Static export: re-run the build and the existing Playwright export pipeline so `docs/index.html`, `docs/about.html`, and `docs/assets/style.css` pick up the changes; `docs/assets/site.js` gains the transparent→solid class toggle on scroll. Export is re-verified with screenshots and a console/404 check before finishing.
