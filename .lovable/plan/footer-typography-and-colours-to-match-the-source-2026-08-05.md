# Footer typography and colours to match the source

The footer text is currently too small and too uniform compared with the original. Bring it in line with the archived design.

## Changes

- **Column headings** ("Services", "Connect With Us"): step up to the source size (~24px), regular/medium weight rather than semibold, in near-white.
- **Service links**: ~17px, regular weight, light grey (`#b9b9b9`-ish) instead of the current small muted text; brighten to white on hover, keeping the existing slide transition.
- **Bullet markers**: the source uses small solid red/pink triangles, not teal chevrons — switch the marker colour to that accent and keep the size proportional to the new text size.
- **Intro paragraph** under the logo: match the same body size and grey as the service links.
- **Bottom bar**: copyright and the link row move from 12px up to ~16px, regular weight, same light grey, white on hover. Add the thin vertical separators between the bottom links as in the source.
- **Social icons**: keep the brand-coloured circles but enlarge them slightly (~40px) so they sit correctly against the larger type.
- Spacing between rows nudged up so the bigger text doesn't feel cramped.

## Technical notes

- All changes are in `src/components/site/SiteFooter.tsx` plus, where a colour is reused, the footer tokens in `src/styles.css`.
- No content, link or structural changes.
- Regenerate `docs/` afterwards so the static export matches.
