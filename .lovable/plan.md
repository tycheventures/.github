# Rework the testimonial slider to match the live site

Rebuild the "Our Client Says" slider so it matches the current tycheventures.com layout in the screenshot: a centered stacked card instead of the current avatar-left / text-right layout.

## New layout (top to bottom, all centered)

```text
            (round avatar, ~115px)

  ┌──────────────────────────────────────────┐
  │ ”  quote text on light-grey panel with   │
  │    thin ruled underline per text line    │
  └──────────────────────────────────────────┘

                 • • •   (small teal dot separator)

                 Ajay Domun            (bold)
        MD Magna Carta Ltd and MD Florian Kappe LLP

        ● ● ● ● ● ● ● ● ● ● ● ● ● ●     (pagination dots)
```

## Changes

Testimonials component
- Stack vertically and center: avatar on top (round, ~115px, subtle border/shadow), then the quote panel, then the dot separator, then name and company, then pagination.
- Quote panel: light grey background (`bg-muted`-style token), generous padding (~40px), full container width, no rounded corners as on live site.
- Ruled lines: thin horizontal rules behind each line of quote text (repeating linear-gradient sized to the line height) exactly like the live site, with the text centered on top.
- Large decorative quote glyph at the start of the text, grey, overlapping the first line.
- Teal three-dot separator between the quote panel and the client name.
- Pagination: one dot per testimonial, grey inactive / teal active, centered; keep click-to-select, autoplay, and pause-on-hover. Replace the prev/next chevron buttons with the dots-only control used on the live site (keyboard access preserved via the dot buttons).

Typography
- Quote text: 17px, line-height ~43px (to sit on the ruled lines), regular weight, muted grey, centered.
- Client name: 15px, bold, dark heading colour.
- Company: 15px, regular, muted grey.

Static export (`docs/`)
- Re-run the export so `docs/index.html`, `docs/about/index.html` and `docs/assets/style.css` pick up the new markup and utilities.
- Update `docs/assets/site.js` slider logic to match the new dots-only control (no prev/next buttons) and keep autoplay + pause on hover.

## Technical notes

- Ruled-line effect uses a `repeating-linear-gradient` background on the blockquote with `background-size` equal to the line height, so it scales with any quote length.
- The avatar, quote, name, and company continue to come from `TESTIMONIALS` in `src/lib/site-data.ts`; no content changes.
- Responsive: on mobile the panel padding shrinks and quote text keeps 17px with a reduced line height so the ruled lines stay aligned.
