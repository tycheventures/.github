# Archive vs. Export: mismatch checklist

Compared the live export (desktop 1280px) against the Wayback capture
(22 Dec 2021), section by section, using both screenshots and the archive's
computed CSS values. Content, section order, counters (200+/150+/100%/7),
project tiles, client logos and the 15 testimonials all match. The remaining
gaps are typography, button styling and a few small elements.

## Confirmed source values (from the archive's computed styles)

```text
body            15px / 500 / #7b7b7b / line-height 25px
nav links       14px / 600 / #444444
H1              60px / 700 / #444444 / lh 64px
section H2      32px / 700 / #3a3a3a
USP card title  18px / 700 / #1b1b4f / lh 24px
service title   18px / 500 / #3a3a3a / lh 21.6px
CTA banner text 24px / 500 / #ffffff / lh 34px
project title   20px / 500 / #ffffff
counter number  34px / 600 / #ffffff
footer links    15px / 500 / #eaeaea / lh 25px
footer bg       #333333
Get A Quote btn purple #8f4190, 2px border, radius 7px 0, padding 12-15px / 22-25px
```

## Fix checklist

1. **USP cards are too large** (home + About). Titles are 24px/lh30; source is
   18px/700/lh24. Body copy should be 15px/500/#7b7b7b/lh25. Fix once in
   `HighlightCard.tsx` so both pages follow.
2. **Counter numbers** render at 48px/700; source is 34px/600. Labels stay
   15px white.
3. **Get A Quote buttons don't match.** Both the hero and the purple CTA
   banner button should be purple `#8f4190` with a 2px border (white border on
   the purple banner), `border-radius: 7px 0`, 15-16px/500-600 text and
   12-15px / 22-25px padding. Currently they are square, transparent/teal.
4. **Header "GET A QUOTE" button** does not exist in the archive header (nav
   ends at CONTACT). Keep it but restyle to the purple pill above, or drop it —
   see question below.
5. **Hero tagline size**: currently 16px; the archive renders it noticeably
   larger (~24px/500 grey) under the 60px title. Bump the typed tagline to
   24px/lh34 on desktop, 18px on mobile.
6. **Client logo grid**: archive shows 5 logos per row (11 logos → 5/5/1);
   export shows 4 per row. Change to 5 columns on desktop, 3 tablet, 2 mobile.
7. **Footer background** is `#3a3a3a`-ish; source is exactly `#333333`.
8. **Missing Skype icon** in "Connect With Us" (archive has 8: WhatsApp, Skype,
   LinkedIn, Facebook, Twitter, GitHub, WordPress, YouTube). Also give the
   WordPress icon its brand colour `#21759b`.
9. **Back-to-top button** (red/pink square, bottom-right, appears on scroll) is
   present in the archive and missing from the export. Add it in React and in
   `docs/assets/site.js`.
10. **Testimonial slider arrows**: archive uses dots only. Remove the prev/next
    arrows, or keep them — cosmetic, low priority.
11. **Section divider icons**: services = gear, projects = monitor, who trusted
    us / client says = person. Verify each matches the archive icon.
12. **Heading hierarchy**: USP titles are currently `h2`. In the archive the
    first `h2` is "SERVICES"; make USP titles `h3` so section headings stay the
    only `h2`s.

Container stays at 1170 content width as requested (the archive theme uses
1220 outer / 1190 content).

## Technical notes

- All type/colour values move into `src/styles.css` tokens or the shared
  `HighlightCard`, no per-component hardcoding.
- Every change is re-exported with the existing `export.py` run so `docs/`
  (`index.html`, `about/index.html`, `assets/style.css`, `assets/site.js`)
  stays in sync; redirect stubs are untouched.
- After the export, re-screenshot desktop / tablet / mobile and diff against
  the archive capture again.

## One decision needed

The header "GET A QUOTE" button is an addition — the archive header has no
button. Keep it (restyled purple) or remove it for an exact match?
