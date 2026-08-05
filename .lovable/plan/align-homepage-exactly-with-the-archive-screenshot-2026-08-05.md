# Align homepage exactly with the archive screenshot

Differences spotted between the archive capture and our current build, with the fix for each. Applied to the React site and re-exported to `docs/`.

## Header
- Nav is only: ABOUT, WORK, SERVICES (dropdown), PRODUCTS (dropdown), BLOG, CAREERS, CONTACT — no "GET A QUOTE" button. Remove the header button.
- Nav labels uppercase, small (13px), dark grey, generous letter spacing; header transparent over the hero, solid white on scroll (already correct).

## Hero
- No CTA button in the hero. Remove the "Get A Quote" button; hero has only "Welcome to", the big two-line "TYCHE VENTURES", and the grey tagline with the typing effect.
- "Welcome to" is regular weight ~30px grey-dark; "TYCHE VENTURES" bold ~52-60px navy-black, wrapping to two lines; tagline 16-17px grey.
- Background image bleeds to the very top behind the transparent header (keep current behaviour), illustration on the right.

## Purple CTA banner
- Button is a transparent pill with a thin white border and white text ("Get A Quote"), not a filled/white button. Left text 17px white, single line on desktop.

## Featured projects
- Archive shows six tiles and nothing after them — remove the "VIEW ALL" button below the grid.
- Keep the caption bar + coloured hover accent line.

## Testimonials
- Archive uses dots only (a long row of small dots), no left/right arrows. Remove the arrows, keep dot pagination.
- Single testimonial per slide: square avatar left, large quote glyph, grey 15px quote text, teal-purple name line with email in grey.

## Footer
- Two content columns only: logo block, then "Services" (two sub-columns with small red arrow bullets), then "Connect With Us" with all social icons on one row.
- No paragraph of company text under the logo (archive has logo only).
- Bottom bar: copyright left, pipe-separated links right, 14px.

## Technical notes
- Files touched: `src/components/site/SiteHeader.tsx`, `src/routes/index.tsx`, `src/components/site/Testimonials.tsx`, `src/components/site/SiteFooter.tsx`, plus `src/styles.css` utilities for the outline CTA button.
- Re-run `export.py` afterwards so `docs/` (including `docs/about/index.html`, `assets/style.css`, `assets/site.js`) matches, then visually diff the export against this screenshot.
