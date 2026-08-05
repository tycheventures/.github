# Fix broken redirects in the static export

## What's wrong

`docs/CNAME` points the export at `tycheventures.com`, but every redirect stub inside `docs/` sends the browser to an absolute URL on that *same* domain. Once GitHub Pages serves the domain, each stub redirects to itself:

```text
/services/  ->  https://tycheventures.com/services/  ->  /services/  -> ... (loop)
```

The same loop hits all 30 stubs: `/services/*`, `/service/*`, `/work/*`, `/blog/`, `/careers/`, `/contact/`, `/get-a-quote/`, `/privacy-policy/`, `/products/`, and `docs/404.html` (which redirects to the homepage instead of rendering a page).

Both live pages also link out to `https://tycheventures.com/...` for nav items (Services, Work, Contact, Blog, Careers, Get A Quote, Privacy Policy, and every individual service), so the header/footer send visitors straight into those loops.

## Fixes

1. **Point every stub at a page that exists in the export.** Use relative targets, never the absolute domain:
   - `/services/`, `/services/*`, `/service/*`, `/products/` -> homepage (`/`), which already lists the services and products.
   - `/work/`, `/work/*` -> homepage (`/`).
   - `/blog/`, `/careers/`, `/contact/`, `/get-a-quote/`, `/privacy-policy/` -> homepage (`/`).
   - Keep `docs/about.html` -> `/about/` (this one is already correct).
2. **Replace `docs/404.html`** with a real branded 404 page (site header/footer, "page not found" message, links to Home and About) instead of a meta-refresh to the homepage — a redirecting 404 is a soft-404 and hides genuine broken links.
3. **Rewrite the in-page links** in the header, footer, services list and CTA buttons so they no longer use `https://tycheventures.com/...`:
   - Services / individual services -> homepage services section.
   - Work -> homepage portfolio section.
   - Contact / Get A Quote -> homepage contact/CTA section.
   - Blog, Careers, Privacy Policy -> homepage until those pages are rebuilt.
   Add `id` anchors to the homepage sections (`#services`, `#work`, `#contact`) so these links land in the right place.
4. **Add `Sitemap:` and correct URLs** — regenerate `sitemap.xml` for the export so it only lists `/` and `/about/`, and reference it from `docs/robots.txt` using the `tycheventures.com` domain.
5. Leave genuine external links (client sites, WPGenius, FenixHost, social profiles) exactly as they are — they already open in a new tab with `rel="nofollow"`.

## Technical notes

- Changes live in `src/routes/index.tsx`, `src/routes/about.tsx`, `src/components/site/SiteHeader.tsx`, `src/components/site/SiteFooter.tsx`, and `src/lib/site-data.ts` (link table).
- The `docs/` export is regenerated afterwards so the stubs, 404 page, sitemap and rewritten links all ship together.

## Verification

Serve `docs/` locally and follow every stub URL plus each header/footer link, confirming no redirect loops, no 404s, and that anchor links scroll to the right homepage section.
