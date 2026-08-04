# Match the archived (non-broken) homepage layout

The screenshot confirms the original 2021 design. The current rebuild has the right content but several sections use a generic card style instead of the original layout. This aligns the homepage to the screenshot.

## Changes, section by section

1. **Header** — add the `PRODUCTS` menu item (with dropdown caret, like `SERVICES`), matching the original nav order: About, Work, Services, Products, Blog, Careers, Contact. Both link out to the WordPress site.

2. **Hero** — replace the typewriter effect with the plain static tagline "Building Brands With Passion And Ulterior Motive" as in the screenshot, and drop the standalone teal "Get A Quote" button under it (the original hero has no button; the quote button lives in the header).

3. **Why-choose-us cards** — add the four teal icons above each title (thumbs-up, rupee, star, team) and use the original tighter card styling.

4. **Services** — switch from three big centered cards to the original two-column-per-row list layout: small teal line icon on the left, title and paragraph on the right, no card borders. Keep the six services and their links.

5. **Purple CTA band** — add the missing full-width purple strip between Services and Featured Projects: "Talk to our experts today and get professional design, and development services." with an outlined "Get A Quote" button on the right.

6. **Featured Projects** — restyle the tiles as in the original: screenshot fills the tile, dark gradient overlay at the bottom, project name in white bottom-left, teal underline accent on hover.

7. **Counters** — place the counters over the original dark desk/photo background band with a dark overlay instead of the flat teal block.

8. **Who Trusted Us** — display client logos in the original bordered, light-grey boxed grid (5 per row) rather than free-floating logos.

9. **Our Client Says** — left-aligned testimonial with the avatar on the left, large quote mark, grey body text, and the teal "– Name" attribution line, with the dot pagination underneath.

10. **Section headings** — uppercase heading with the short divider line and small teal icon underneath (as on SERVICES / FEATURED PROJECTS / WHO TRUSTED US / OUR CLIENT SAYS).

11. **Footer** — switch to the original dark charcoal footer: logo left, "Services" link list in two columns with small teal arrow bullets, "Connect With Us" brand-coloured round social icons, and the copyright bar with the right-side link row.

## Notes

- About page keeps its current content; it inherits the updated header/footer automatically.
- All outbound links stay pointed at the existing WordPress URLs.
- Any icons or background images still missing locally will be pulled from the archive into `public/img` so the page stays self-contained.
