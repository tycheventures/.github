# Fix hero/header alignment and responsive behaviour

## What is wrong today (verified in the running site and supplied screenshots)

1. **White gap above the illustration (desktop).** The hero uses the banner as a CSS background sized to the full section width and pinned to the bottom. At 1280px the image is only ~433px tall inside a 700px section, so the top ~267px is plain white and the pale wave never reaches up behind the transparent header. Your screenshot has the wave running all the way to the top edge, behind the menu.
2. **Illustration covers the headline (mobile).** The supplied phone screenshot shows the oversized people, monitors, and PHP blocks crossing through both "TYCHE VENTURES" and the tagline. The crop is too large for the available width and the centred copy has no protected clear area.
3. **Mobile hero is much too tall.** The phone screenshot extends the artwork to roughly 930px before the first USP card; the source banner is being scaled by height rather than composed for a portrait viewport.
4. **Tablet crop is oversized and clipped.** The supplied tablet screenshot keeps the text readable, but crops a large monitor off the right edge and gives the artwork much more visual weight than the copy.
5. **Tablet USP row is too wide.** Four desktop-style cards remain in one row and are visibly cut at the viewport edges instead of adapting to a tablet grid.
6. **Hero text is not consistently aligned with the artwork.** Desktop is close to the reference, but tablet/mobile use different apparent vertical anchors; phone copy becomes centred while the illustration remains right-weighted.
7. **Header/hero handoff.** Header is transparent, but the desktop white gap makes it read as a separate white bar. On phone/tablet the logo and menu are correctly over the wave, so that relationship must be preserved while correcting the crop.

## The fix

**Hero structure** — keep the supplied 1920×650 banner as one non-repeating layer, but control its scale and crop independently from the content:

- **Desktop (1024px+):** match the supplied desktop screenshot: logo and navigation over the top of the pale wave, headline left, illustration right, and hero ending immediately after the banner. Use top-right anchoring and a cover/width calculation that fills the header area without creating the current white strip.
- **Tablet (768–1023px):** match the supplied tablet composition but scale the artwork down enough to keep the full main monitor inside the viewport. Keep headline left-aligned with a protected clear zone and end the hero near the bottom of the wave rather than adding empty whitespace.
- **Mobile (<768px):** use a deliberate portrait composition rather than `background-size: cover`: retain the pale wave behind the logo/menu, place the headline in a clean left-aligned area, and scale/position the illustration to the right/below without crossing any text. The hero should end around one mobile viewport, not continue for ~930px.
- Use breakpoint-specific `background-size`/`background-position` (or an absolutely positioned decorative image) with `background-repeat: no-repeat`; do not duplicate, stretch, or distort the source artwork.
- Keep the existing desktop type scale, reduce heading/tagline sizes and line lengths on tablet/mobile, and never allow the headline to extend underneath the illustration.

**Header**

- Keep transparent-at-top / solid-on-scroll, but make the height consistent and expose it as a single value the hero padding reuses, so there is never a mismatch.
- Solid state (scrolled, mobile menu open, About page) unchanged.

**Also fixed in the same pass**

- Remove the leftover fixed `min-h` values on the hero that fight the image ratio.
- Ensure no horizontal scroll at any width from the full-bleed artwork.
- Re-verify the USP cards start cleanly below the hero at all three widths.
- Make USP cards 4 columns on desktop, 2 columns on tablet, and 1 column on mobile so none are clipped at the viewport edge.

## Pull the real CSS from the original site

Yes — instead of re-guessing values, the original stylesheets (live site + Wayback snapshot) will be fetched and read, and the actual declarations copied across for the sections below: font sizes, line heights, letter spacing, box-shadow values, transition timings, and hover states. Anything the original defines becomes the source of truth; only genuinely broken rules get corrected.

## USP / highlights cards

- Heading 24px, body 14px (as in your original), with the original line-height and heading colour.
- Replace the current tight `shadow-card` with the original's soft, wide, low-opacity shadow so the cards read as gently lifted rather than hard-edged.
- Match original card padding, radius, border treatment, and centre alignment; equal-height cards.
- Restore the original hover transition on the cards.

## Missing hover effects

Audit every interactive element against the original CSS and restore what is missing:

- Project tiles: original image zoom / overlay reveal / caption and accent-bar behaviour with the original transition duration and easing.
- Service items, client logo tiles, nav links and dropdowns, footer links, buttons (Get A Quote, View All, CTA band) — each gets its original hover colour, background, border, and transition.

## Testimonials

- Apply the original type scale (quote size, name/role size, line-height) instead of the current smaller text.
- Match the original layout: avatar treatment, quote mark, spacing, card/shadow styling, and slider controls/dots.

## Static export

- Rebuild and regenerate `docs/` (index + about + redirect stubs) so the published GitHub Pages copy matches, and re-check the exported `docs/assets/style.css` background rules and `site.js` transparent→solid toggle.

## Verification

Screenshots at 375, 768, 1024 and 1280px of both the React preview and the exported `docs/index.html`, compared against the supplied device screenshots and the original site. Check: wave reaches the top edge behind the header, no white gap, headline/tagline legible, hero height controlled, USP cards fit their grid with correct type and soft shadow, hover states fire on projects/services/clients/links, testimonials match the original scale, and no horizontal scrollbar.


## Technical notes

- `src/routes/index.tsx`: hero becomes a relative section with a separately positioned decorative image layer (object-fit + object-position per breakpoint) instead of one generic `cover` rule; responsive height is controlled per device class.
- `src/styles.css`: drop or repurpose the `.hero-banner` background rule.
- `src/components/site/SiteHeader.tsx`: normalise header height, no behavioural change to the scroll logic.
- Export pipeline scripts under `/tmp/browser/tv/` (`export.py`, `post.py`) re-run unchanged apart from any selector updates the new hero markup requires.
