# Fix broken redirects in the static export

## What's wrong

`docs/CNAME` points the export at `tycheventures.com`, but every redirect stub inside `docs/` sends the browser to an absolute URL on that *same* domain. Once GitHub Pages serves the domain, each stub redirects to itself:

```text
/services/  ->  https://tycheventures.com/services/  ->  /services/  -> ... (loop)
```

The same loop hits all 30 stubs: `/services/*`, `/service/*`, `/work/*`, `/blog/`, `/careers/`, `/contact/`, `/get-a-quote/`, `/privacy-policy/`, `/products/`, and `docs/404.html` (which meta-refreshes to the homepage instead of rendering a page).

The header, footer and CTA buttons on both live pages also link to `https://tycheventures.com/...`, so visitors are sent straight into those loops.

## Redirect targets

Pages that live on now go to the matching page on WPGenius; the rest stay inside the export.

| Old URL | Target |
| --- | --- |
| `/work/` and each `/work/<project>/` | WPGenius portfolio page — link needed |
| `/services/` | WPGenius services page — link needed |
| `/services/website-designing-and-development/` | link needed |
| `/services/e-commerce-development/` | link needed |
| `/services/search-engine-optimization/` | link needed |
| `/services/digital-marketing-services/` | link needed |
| `/services/graphics-design-services/` | link needed |
| `/services/job-portal-development/` | link needed |
| `/services/learning-management-system/` | link needed |
| `/services/annual-maintenance-contract/` | link needed |
| `/service/website-designing/` | link needed |
| `/service/dynamic-website-development/` | link needed |
| `/service/seo/` | link needed |
| `/service/digital-marketing/` | link needed |
| `/service/graphics-design/` | link needed |
| `/service/domain-and-hosting/` | link needed |
| `/blog/` | link needed |
| `/careers/` | link needed |
| `/contact/` | link needed |
| `/get-a-quote/` | link needed |
| `/products/` | stays on this site — homepage products section |
| `/privacy-policy/` | stays on this site — homepage (until rebuilt) |
| `/about.html` | `/about/` (already correct) |

Where a specific WPGenius page doesn't exist, that URL falls back to the closest WPGenius page (services or home).

## Fixes

1. **Rewrite every stub** in `docs/` to redirect to its target above. No stub may point back at `tycheventures.com`, which is what causes the loops. Each stub keeps `<meta http-equiv="refresh">` plus a `location.replace()` fallback, a `noindex` tag, and a `rel="canonical"` to the new target.
2. **Rewrite the in-page links** in the header, footer, services list and CTA buttons to the same targets, so no navigation depends on a redirect hop. Off-site links get `target="_blank"` and `rel="nofollow noopener"`, matching the existing outbound link style.
3. **Replace `docs/404.html`** with a real branded 404 page (site header/footer, "page not found" message, links to Home and About) instead of a meta-refresh — a redirecting 404 is a soft-404 and hides genuine broken links.
4. **Add homepage anchors** (`#services`, `#products`) so the links that stay on this site land in the right section.
5. **Refresh `sitemap.xml`** so it lists only `/` and `/about/` under `https://tycheventures.com`, and leave genuine external links (client sites, WPGenius, FenixHost, socials) untouched.

## Technical notes

- Changes live in `src/routes/index.tsx`, `src/routes/about.tsx`, `src/components/site/SiteHeader.tsx`, `src/components/site/SiteFooter.tsx`, and the link table in `src/lib/site-data.ts`.
- The `docs/` export is regenerated afterwards so stubs, 404 page, sitemap and rewritten links ship together.

## Verification

Serve `docs/` locally, follow every stub URL and every header/footer link, and confirm no redirect loops, no self-referencing hops, and that on-site anchors scroll to the right section.

## Needed from you

The WPGenius target URLs for the rows marked "link needed" above. A single services page and a single contact page is fine if per-service pages don't exist there.
