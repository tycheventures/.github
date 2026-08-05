# Fix testimonial quote spacing and weight

## The bug
The large decorative quote mark (64px) sits inline inside the blockquote, so it stretches the first line's box far taller than the 31px line rhythm. That is the big gap after the first line, and it also knocks the ruled lines out of alignment with the text below.

## Fixes
1. Take the quote mark out of the text flow: render it as an absolutely positioned element at the top-left of the blockquote (no effect on line height), and indent only the first line of text so it starts clear of the glyph.
2. Keep the blockquote on a strict 31px line rhythm so every ruled line lands directly under a line of text, matching the reference screenshot.
3. Set the quote text to font-weight 500 (17px, muted grey).
4. Nudge the glyph size/opacity to match the reference (soft grey, sitting slightly above the first baseline).

## Files
- `src/components/site/Testimonials.tsx` — restructure the quote mark, add first-line indent, weight 500.
- `src/styles.css` — small tweak to the `testimonial-lines` utility if the rhythm needs re-anchoring after the flow change.
- `docs/` — rebuild the static export (index + about + assets) so GitHub Pages matches.

## Verification
Screenshot the exported testimonial at desktop, tablet and mobile widths and confirm equal spacing on every line with rules sitting under the text.
