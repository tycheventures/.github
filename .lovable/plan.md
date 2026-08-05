# Fix USP cards, About URL structure, and README content

## 1. Restore the USP ("Why Choose Us") cards to the original design

The current cards use oversized headings and cramped bodies. Match the archived/original design instead:

- Card heading: 24px, bold, navy — but with normal (not enlarged) line height so two-line titles like "100 % Customer Satisfaction" sit tightly, as in the reference.
- Body text: 16px grey with comfortable line height, not the current small 14px.
- Icon: teal, sized as in the source, with the original spacing above the heading.
- Card: white, subtle rounded corners, soft wide shadow, generous even padding, equal card heights across the row.
- Keep 4 across on desktop, 2 on tablet, 1 on mobile.

## 2. Apply the same USP design on the About Us page

The About page currently renders these cards with a different, smaller style. Extract the card into a single shared component used by both the homepage and About page so the two never drift again, including the teal icons that the About page is missing.

## 3. Move About Us to a folder URL

Change the static export so About is published at `/about/` (`docs/about/index.html`) instead of `docs/about.html`, matching the rest of the site's folder structure. Keep a small redirect at the old `about.html` path so any existing link still works, and update internal links (header, footer, README) to `/about/`.

## 4. README updates

- Restore the full "About us" company description that was there before the shortening.
- Give every item in the Services list a short one-line description after the link, so the section no longer looks like a bare list of names.
- Leave the products, logo and layout as they are.

## Technical notes

- USP styling lives in `src/routes/index.tsx` and `src/routes/about.tsx`; both move to a new `src/components/site/HighlightCard.tsx`.
- Font sizes/shadow to be taken from the Wayback CSS (24px title / 16px body / soft `0 0 24px` style shadow).
- Export script updated to emit `about/index.html` plus the legacy stub, then `docs/` regenerated.
- README changes are to `profile/README.md`.
