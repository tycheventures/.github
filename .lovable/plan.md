# Fix broken redirects in the static export

## What's wrong

`docs/CNAME` points the export at `tycheventures.com`, but every redirect stub inside `docs/` sends the browser to an absolute URL on that *same* domain. Once GitHub Pages serves the domain, each stub redirects to itself:

```text
/services/  ->  https://tycheventures.com/services/  ->  /services/  -> ... (loop)
```

The same loop hits all 30 stubs: `/services/*`, `/service/*`, `/work/*`, `/blog/`, `/careers/`, `/contact/`, `/get-a-quote/`, `/privacy-policy/`, `/products/`, and `docs/404.html` (which meta-refreshes to the homepage instead of rendering a page).

The header, footer and CTA buttons on both live pages also link to `https://tycheventures.com/...`, so visitors are sent straight into those loops.

## Redirect targets

Crawled `https://wpgenius.in/` (sitemaps: page, services, portfolio, post). Available pages there: `/about/`, `/services/`, `/work/`, `/blog/`, `/careers/`, `/contact/`, `/testimonial/`, `/privacy-policy/`, `/terms-of-use/`, plus service pages `wordpress-plugin-development`, `wordpress-custom-theme-devlopment`, `wordpress-design-development-customization`, `wordpress-doctor`, `wordpress-learning-management-systems`, `wordpress-support-maintenance`, `hire-a-developer`.

| Old URL | Target |
| --- | --- |
| `/work/` and each `/work/<project>/` | `https://wpgenius.in/work/` |
| `/services/` and `/service/` | `https://wpgenius.in/services/` |
| `/services/website-designing-and-development/` | `https://wpgenius.in/services/wordpress-design-development-customization/` |
| `/service/website-designing/` | `https://wpgenius.in/services/wordpress-design-development-customization/` |
| `/service/dynamic-website-development/` | `https://wpgenius.in/services/wordpress-custom-theme-devlopment/` |
| `/services/learning-management-system/` | `https://wpgenius.in/services/wordpress-learning-management-systems/` |
| `/services/annual-maintenance-contract/` | `https://wpgenius.in/services/wordpress-support-maintenance/` |
| `/services/e-commerce-development/` | `https://wpgenius.in/services/` (no matching page) |
| `/services/job-portal-development/` | `https://wpgenius.in/services/` (no matching page) |
| `/services/search-engine-optimization/`, `/service/seo/` | `https://wpgenius.in/services/` (no matching page) |
| `/services/digital-marketing-services/`, `/service/digital-marketing/` | `https://wpgenius.in/services/` (no matching page) |
| `/services/graphics-design-services/`, `/service/graphics-design/` | `https://wpgenius.in/services/` (no matching page) |
| `/service/domain-and-hosting/` | `https://shop.fenixhost.in/` (FenixHost is the hosting product) |
| `/blog/` | `https://wpgenius.in/blog/` |
| `/careers/` | `https://wpgenius.in/careers/` |
| `/contact/` | `https://wpgenius.in/contact/` |
| `/get-a-quote/` | `https://wpgenius.in/contact/` (no quote form on WPGenius) |
| `/products/` | stays on this site — homepage products section (drop the Plugins Gallery and Themes Expert product links) |
| `/privacy-policy/` | `https://wpgenius.in/privacy-policy/` |
| `/about.html` | `/about/` (already correct) |



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
