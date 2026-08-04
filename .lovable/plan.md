# Hero polish, USP fix, and README updates

## 1. Hero section
- Give the hero a taller, full-width stage so the banner illustration sits fully inside it (min height around the viewport height on desktop, auto on mobile) and the image continues behind the transparent header, matching the original screenshot.
- Keep the header transparent over the image and only solid on scroll (already in place); ensure the hero starts at the very top with no gap.
- Mobile/tablet: switch background sizing so the illustration stays legible (contain/shifted focal point at small widths, cover at large), keep the headline readable, and verify at 375px, 768px, and 1024px with screenshots.

## 2. USP / highlights section (broken)
- Remove the negative top margin that pulls the four cards up into the hero image and clips their text.
- Give the section normal top padding, equal-height cards, and consistent text wrapping so all four cards line up.
- Re-verify against the original archived look (bordered white cards with teal icons, sitting below the hero).

## 3. profile/README.md
- Rewrite as a short profile overview: intro/tagline, About us, Services, Our products, Connect with us.
- Remove the "Why choose us", "By the numbers", "Selected work", and "What clients say" sections.
- Remove the WhatsApp link from the connect line.

## 4. Repo README.md
- Replace the raw prompt text at the top with a clear project description.
- Add: quick overview of the project (static rebuild of tycheventures.com), what's inside (`src/` React source, `docs/` static export, `public/img/` assets, `profile/` GitHub profile readme), and how to publish/navigate to GitHub Pages (Settings → Pages → branch `main`, folder `/docs`) plus the live Pages URL pattern.
- Keep the local development instructions.

## 5. Re-export
- Rebuild and regenerate `docs/` so the static export matches the updated hero and USP section, then verify the exported pages in a browser at desktop and mobile widths.
