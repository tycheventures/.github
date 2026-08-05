# Validate docs/ asset links before publishing

Add an automated check that every CSS/JS (and image/font) URL referenced by the exported static site actually exists in `docs/`, so a broken export can never reach GitHub Pages unnoticed.

## What it does

A new script `scripts/verify-docs.py` walks the `docs/` output and reports missing files:

- Scans every `.html` file for `href`, `src`, and `srcset` references (stylesheets, scripts, images, fonts, favicon, canonical/manifest links).
- Scans `docs/assets/style.css` for `url(...)` references (background images, `@font-face` sources).
- Scans `docs/assets/*.js` for referenced asset paths (e.g. `img/...`, `assets/...` string literals).
- Resolves each reference relative to the page that declares it, honouring the `../` prefixes the exporter writes for `about/index.html`.
- Skips external URLs (`http(s)://`, `//`, `mailto:`, `tel:`), pure hash anchors, and `data:` URIs.
- Also flags directory-style links (e.g. `/services/`) that have no `index.html`, so redirect stubs are covered too.

## Output and failure behaviour

- Prints a summary: number of references checked, per-file list of anything missing.
- Exits with code `1` if any referenced asset is missing, `0` otherwise — so it can gate publishing.
- Verbose mode (`--verbose`) lists every resolved reference for debugging.

## Wiring it into the build

- `scripts/export-docs.py` calls the verifier at the end of a successful export and fails loudly if it reports missing assets.
- The verifier stays runnable on its own: `python3 scripts/verify-docs.py`.
- `README.md` gets a short note in the publishing section: run the export, confirm the verification passes, then push `docs/` to GitHub Pages.

## Technical notes

- Pure Python 3 standard library (`pathlib`, `re`, `html.parser`) — no new dependencies, no network calls.
- Read-only with respect to `docs/`; it never rewrites output.
- Current export produces `index.html`, `about/index.html`, `404.html`, redirect stubs, `assets/style.css`, `assets/site.js`, `assets/slides.js`, `assets/analytics.js`, plus `img/` and `fonts/` — all of these are covered by the scan.
