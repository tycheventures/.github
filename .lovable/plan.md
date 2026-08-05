# Container width, counter overlay, project hover, and archive cross-check

## 1. Container width → 1170px

Every section currently uses a 1152px container. Introduce one shared `.container-tyche` (max-width 1170px, 15px side padding) in the stylesheet and apply it to all sections on the homepage, About page, header and footer, so the whole site matches the original grid. The static export picks this up automatically on rebuild.

## 2. Counter section overlay

The overlay above the background photo is currently navy-tinted, which reads blue. Replace it with a neutral black overlay (roughly 70% black) so the photo shows through as on the original.

## 3. Project hover effect

Match the original tile hover: on hover the image zooms slightly, a dark wash fades in, the title lifts, and a short accent underline bar appears beneath the title (the coloured line in your screenshot). Currently there is no underline bar — it will be added, animating in from zero width, using the brand accent colour.

## 4. Cross-check against the archive — fixes found

- **Hero is missing the "Get A Quote" button.** The archived hero has Welcome to / Tyche Ventures / tagline / Get A Quote button. Add the button, linking to the live get-a-quote page.
- **Highlight cards** verified: 4 cards, titles and copy match the archive text exactly.
- **Services**: the archive lists 6 services in this order — Website Designing and Development, Learning Management System, E-Commerce Development, Job Portal Development, Search Engine Optimization, Digital Marketing Services. Confirm the site shows exactly these six, same order, same copy, and remove any extras that don't exist in the source.
- **Section titles**: archive uses "Services", "Featured Projects", "Who Trusted Us", "Our Client Says". Our testimonial heading will be aligned to "Our Client Says" if it differs.
- **Testimonials**: 16 entries in the archive; confirm all present after the recent addition and that quote text matches verbatim (including the fuller Georg Meyer quote).
- **Client logos**: confirm the archive's logo set and order matches ours.
- **Typography/spacing pass**: re-check section heading size, body 15px/25px, and card shadows against the archive CSS, since the container change shifts column widths.

## Technical notes

- New container utility in `src/styles.css`; replaces `max-w-6xl px-5` usages in `src/routes/index.tsx`, `src/routes/about.tsx`, `SiteHeader.tsx`, `SiteFooter.tsx`.
- Counter overlay: swap `bg-heading/75` for a black overlay token.
- Project hover underline built with a `group-hover` scaled span under the title.
- After the code changes, regenerate `docs/` so the static GitHub Pages export stays in sync.
