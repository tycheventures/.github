# Fix hero/header alignment and responsive behaviour

## What is wrong today (verified in the running site)

1. **White gap above the illustration (desktop).** The hero uses the banner as a CSS background sized to the full section width and pinned to the bottom. At 1280px the image is only ~433px tall inside a 700px section, so the top ~267px is plain white and the pale wave never reaches up behind the transparent header. Your screenshot has the wave running all the way to the top edge, behind the menu.
2. **Illustration covers the headline (mobile, 375px).** At small widths the background switches to `cover` at 65% focus, so the desks and monitor sit directly on top of "Welcome to / TYCHE VENTURES" and the tagline — text is unreadable.
3. **Dead space under the hero (tablet, 768px).** After the wave ends there is ~90px of empty white before the USP cards, so the hero looks unbalanced.
4. **Hero text is not vertically aligned with the artwork.** Because the artwork is bottom-anchored and the text block is centred in a taller box, the copy floats above the illustration instead of sitting beside it as in the reference.
5. **Header/hero handoff.** Header is correctly transparent at rest, but with the current gap it reads as a solid white bar. Header height also jumps (64px mobile / 72px desktop) with no matching hero offset.

## The fix

**Hero structure** — stop using a single stretched background and build the hero as a proper two-part stage:

- Desktop / large tablet: full-bleed artwork anchored to the **top-right** of the section and starting at y=0 so the pale wave passes behind the transparent header, with the section height derived from the image's aspect ratio (no fixed 700px box, no bottom gap).
- The text column sits in the left half, vertically centred against the artwork, with top padding equal to the header height so it never tucks under the menu.
- Tablet (768–1023px): artwork scaled down and shifted right, text column widened; hero height follows the artwork so the empty strip below disappears.
- Mobile (<768px): artwork moves out from behind the text — a light wave/tinted band stays at the top behind the header, the illustration renders below the headline at reduced size (or is cropped to the empty right portion), so the copy is always on clean background.

**Header**

- Keep transparent-at-top / solid-on-scroll, but make the height consistent and expose it as a single value the hero padding reuses, so there is never a mismatch.
- Solid state (scrolled, mobile menu open, About page) unchanged.

**Also fixed in the same pass**

- Remove the leftover fixed `min-h` values on the hero that fight the image ratio.
- Ensure no horizontal scroll at any width from the full-bleed artwork.
- Re-verify the USP cards start cleanly below the hero at all three widths.

**Static export**

- Rebuild and regenerate `docs/` (index + about + redirect stubs) so the published GitHub Pages copy matches, and re-check the exported `docs/assets/style.css` background rules and `site.js` transparent→solid toggle.

## Verification

Screenshots at 375, 768, 1024 and 1280px of both the React preview and the exported `docs/index.html`, checking: wave reaches the top edge behind the header, no white gap, headline legible, no dead space before the USP cards, no horizontal scrollbar.

## Technical notes

- `src/routes/index.tsx`: hero becomes a relative section with an absolutely positioned `<img>`/picture layer (object-fit + object-position per breakpoint) instead of the `.hero-banner` background utility; height driven by aspect ratio with a min-height floor.
- `src/styles.css`: drop or repurpose the `.hero-banner` background rule.
- `src/components/site/SiteHeader.tsx`: normalise header height, no behavioural change to the scroll logic.
- Export pipeline scripts under `/tmp/browser/tv/` (`export.py`, `post.py`) re-run unchanged apart from any selector updates the new hero markup requires.
