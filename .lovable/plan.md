# Remove Skype from Footer

## Objective
Eliminate all remaining Skype references from the site footer so it matches the user's current preference and the live site.

## Changes

1. **Source footer component** (`src/components/site/SiteFooter.tsx`)
   - Remove the `Skype` entry from the `ICONS` map.
   - Remove the `Skype` entry from the `SOCIAL_COLORS` map.
   - Remove the unused `MessageSquare` import.

2. **Data source** (`src/lib/site-data.ts`)
   - Verify `SOCIALS` array does not contain a Skype entry. If present, remove it.

3. **Static export** (`docs/`)
   - Rebuild the static export after the React source changes.
   - Confirm the generated `docs/index.html` and `docs/about/index.html` no longer contain a Skype anchor or social icon.

## Verification
- `grep -R "Skype" src/ docs/` returns no matches.
- Footer renders the same remaining social icons without errors.
