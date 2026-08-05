# Testimonial quote panel — match source CSS

## What's wrong now

- The quote panel uses a solid grey (`bg-muted`) with symmetric `py-10` padding, not the source styling.
- The ruled lines are drawn every 43px starting from the top of the text box, so a rule cuts through the text instead of sitting beneath each line.

## Fixes

1. Panel styling (source `.bq_wrapper`)
  - Background: `rgba(0, 0, 0, 0.02)` instead of the solid muted grey. make this section look diffrent thatn section background color
  - Padding: `30px 40px 10px` (with a reduced horizontal padding on small screens so text doesn't cramp).
2. Ruled lines sit under the text, not through it
  - Keep 31px rhythm and 17px/31px text.
  - Shift the repeating gradient down so each 1px rule lands just below the baseline of its line of text (offset the background start by roughly a third of the line box), so no rule ever crosses a glyph.
  - Anchor the gradient to the text block's top edge so the first rule falls under the first line regardless of quote length.
3. Consistency
  - Apply the same panel/rule treatment on all viewport widths; verify with a 2-line and a 4-line quote so rules stay under the text in both.
4. cleint name font weight 700
5. cleint designation fotn weight 500

## Technical notes

- Edit `src/components/site/Testimonials.tsx` (panel background + padding classes).
- Edit the `@utility testimonial-lines` block in `src/styles.css` (add background-position offset, keep `background-size: 100% 43px`).
- Mirror both changes into the static export: rebuild `docs/` via `export.py`, and confirm the `.testimonial-lines` rule and panel classes exist in `docs/assets/style.css`.
- Verify with an element screenshot of the testimonial section at desktop and mobile widths.