import asyncio, json, re, shutil, os
from pathlib import Path
from playwright.async_api import async_playwright

ROOT = Path("/dev-server")
DOCS = ROOT / "docs"
BASE = "http://localhost:8080"
LIVE = "https://tycheventures.com"

PAGES = [("/", "index.html"), ("/about", "about/index.html")]

CSS_JS = """() => {
  let out = '';
  for (const sheet of document.styleSheets) {
    try {
      for (const r of sheet.cssRules) out += r.cssText + '\\n';
    } catch (e) {}
  }
  return out;
}"""


WPG = "https://wpgenius.in"
SERVICES = f"{WPG}/services/"
CONTACT = f"{WPG}/contact/"
DESIGN = f"{WPG}/services/wordpress-design-development-customization/"
THEME = f"{WPG}/services/wordpress-custom-theme-devlopment/"
LMS = f"{WPG}/services/wordpress-learning-management-systems/"
AMC = f"{WPG}/services/wordpress-support-maintenance/"
FENIX = "https://shop.fenixhost.in/"

REDIRECTS = {
    "work": f"{WPG}/work/",
    "services": SERVICES,
    "service": SERVICES,
    "services/website-designing-and-development": DESIGN,
    "services/learning-management-system": LMS,
    "services/annual-maintenance-contract": AMC,
    "services/e-commerce-development": SERVICES,
    "services/job-portal-development": SERVICES,
    "services/search-engine-optimization": SERVICES,
    "services/digital-marketing-services": SERVICES,
    "services/graphics-design-services": SERVICES,
    "service/website-designing": DESIGN,
    "service/dynamic-website-development": THEME,
    "service/seo": SERVICES,
    "service/digital-marketing": SERVICES,
    "service/graphics-design": SERVICES,
    "service/domain-and-hosting": FENIX,
    "blog": f"{WPG}/blog/",
    "careers": f"{WPG}/careers/",
    "contact": CONTACT,
    "get-a-quote": CONTACT,
    "privacy-policy": f"{WPG}/privacy-policy/",
    "products": "/",
}


def stub(target: str) -> str:
    return (
        f'<!DOCTYPE html><html lang="en"><head><meta charset="utf-8">'
        f'<meta name="robots" content="noindex">'
        f'<meta http-equiv="refresh" content="0; url={target}">'
        f'<link rel="canonical" href="{target}"><title>Redirecting…</title></head>'
        f'<body><p>Redirecting to <a href="{target}">{target}</a>…</p>'
        f'<script>location.replace("{target}")</script></body></html>\n'
    )


def clean(html: str, prefix: str = "") -> str:
    # Keep JSON-LD plus the Google Analytics tag / click-tracking snippets.
    kept = [
        m
        for m in re.findall(r"<script\b[^>]*>[\s\S]*?</script>", html, flags=re.I)
        if ("application/ld+json" in m.lower())
        or ("googletagmanager.com" in m)
        or ("gtag(" in m)
    ]
    html = re.sub(r"<script\b[^>]*>[\s\S]*?</script>", "", html, flags=re.I)
    if kept:
        html = html.replace("</head>", "\n".join(kept) + "</head>", 1)
    html = re.sub(r"<link\b[^>]*rel=\"(?:modulepreload|preload)\"[^>]*>", "", html, flags=re.I)
    html = re.sub(r"<link\b[^>]*\.css[^>]*>", "", html, flags=re.I)
    html = re.sub(r"<style\b[^>]*>[\s\S]*?</style>", "", html, flags=re.I)
    html = re.sub(r"\sdata-tsd-source=\"[^\"]*\"", "", html)
    html = html.replace('src="/img/', f'src="{prefix}img/').replace("url(/img/", f"url({prefix}img/")
    html = html.replace('href="/favicon.ico"', f'href="{prefix}favicon.ico"')
    html = html.replace('href="/img/', f'href="{prefix}img/')
    html = html.replace('href="/fonts/', f'href="{prefix}fonts/')
    html = re.sub(r'href="/about/?"', f'href="{prefix}about/"', html)
    html = re.sub(r'href="/"(?![^>]*target)', f'href="{prefix}index.html"', html)
    return html


def analytics_js() -> str:
    """Reuse the GA4 snippet declared in src/routes/__root.tsx."""
    root = (ROOT / "src" / "routes" / "__root.tsx").read_text()
    for block in re.findall(r"children:\s*`([\s\S]*?)`", root):
        if "dataLayer" in block:
            return block.replace("\\/", "/").strip() + "\n"
    return ""


async def main():
    async with async_playwright() as pw:
        b = await pw.chromium.launch(headless=True)
        c = await b.new_context(viewport={"width": 1440, "height": 1200})
        p = await c.new_page()

        css = None
        mobile_nav = None
        pages = {}

        for route, out in PAGES:
            await p.goto(BASE + route, wait_until="networkidle")
            await p.wait_for_timeout(2500)
            if css is None:
                css = await p.evaluate(CSS_JS)
            pages[out] = "<!DOCTYPE html>\n" + await p.evaluate("document.documentElement.outerHTML")

        # capture mobile nav markup (opened) from a mobile viewport
        mc = await b.new_context(viewport={"width": 390, "height": 900})
        mp = await mc.new_page()
        await mp.goto(BASE + "/", wait_until="networkidle")
        await mp.wait_for_timeout(1500)
        await mp.click("header button[aria-label='Open menu']")
        await mp.wait_for_timeout(400)
        for btn in await mp.query_selector_all("nav[aria-label='Mobile'] button[aria-expanded]"):
            await btn.click()
            await mp.wait_for_timeout(120)
        mobile_nav = await mp.eval_on_selector("nav[aria-label='Mobile']", "el => el.outerHTML")

        # testimonial slides: cycle the slider and capture each figure state
        tp = await c.new_page()
        await tp.goto(BASE + "/", wait_until="networkidle")
        await tp.wait_for_timeout(1200)
        n = len(await tp.query_selector_all("[data-dot]"))
        slides = []
        for k in range(n):
            await tp.click(f"[data-dot='{k}']")
            await tp.wait_for_timeout(250)
            slides.append(await tp.eval_on_selector("#testimonial-figure", "el => el.innerHTML"))
        await b.close()

    DOCS.mkdir(exist_ok=True)
    (DOCS / "assets").mkdir(exist_ok=True)
    css = css or ""

    css = css + "\n.hero-banner{background-image:url(\"../img/hero-banner.webp\")}\n.counter-bg{background-image:url(\"../img/counter-bg.webp\")}\n"
    css = css.replace('url("/img/', 'url("../img/').replace("url(/img/", "url(../img/")
    css = css.replace('url("/fonts/', 'url("../fonts/').replace("url(/fonts/", "url(../fonts/")
    (DOCS / "assets" / "style.css").write_text(css)
    (DOCS / "assets" / "analytics.js").write_text(analytics_js())
    (DOCS / "assets" / "slides.js").write_text(
        "window.__SLIDES__ = " + json.dumps([clean(x) for x in slides]) + ";\n"
    )

    # copy images / static
    if (DOCS / "img").exists():
        shutil.rmtree(DOCS / "img")
    shutil.copytree(ROOT / "public" / "img", DOCS / "img")
    if (DOCS / "fonts").exists():
        shutil.rmtree(DOCS / "fonts")
    shutil.copytree(ROOT / "public" / "fonts", DOCS / "fonts")
    for f in ["favicon.ico", "robots.txt"]:
        src = ROOT / "public" / f
        if src.exists():
            shutil.copy(src, DOCS / f)

    for out, html in pages.items():
        depth = out.count("/")
        prefix = "../" * depth
        nav = clean(mobile_nav, prefix).replace("<nav ", '<nav id="mobile-nav" hidden ', 1)
        html = clean(html, prefix)
        html = html.replace(
            "</head>",
            f'<link rel="stylesheet" href="{prefix}assets/style.css">\n'
            f'<script src="{prefix}assets/analytics.js"></script>\n</head>',
        )
        html = html.replace(
            "</body>",
            f'<script>window.__ASSET_PREFIX__="{prefix}";</script>\n'
            f'<script src="{prefix}assets/slides.js"></script>\n'
            f'<script src="{prefix}assets/site.js"></script>\n</body>',
        )
        html = re.sub(
            r"<button([^>]*?)aria-label=\"Open menu\"",
            r'<button id="menu-toggle"\1aria-label="Open menu"',
            html,
            count=1,
        )
        html = html.replace("</header>", nav + "</header>", 1)
        html = re.sub(
            r'(<header[^>]*data-transparent="true"[^>]*class=")([^"]*)(")',
            lambda m: m.group(1) + m.group(2).replace("bg-background", "bg-transparent").replace("shadow-card", "") + m.group(3),
            html,
        )
        dest = DOCS / out
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(html)

    # css url() paths are relative to docs/assets/, so they already resolve for every page

    # redirect stubs for every off-site deep link
    for folder, target in REDIRECTS.items():
        if folder in ("about",):
            continue
        d = DOCS / folder
        d.mkdir(parents=True, exist_ok=True)
        (d / "index.html").write_text(stub(target))

    # legacy per-project work stubs
    for sub in sorted((DOCS / "work").glob("*/index.html")):
        sub.write_text(stub(f"{WPG}/work/"))

    # legacy flat about page
    (DOCS / "about.html").write_text(stub("about/"))

    # branded 404 built from the exported homepage shell
    home = (DOCS / "index.html").read_text()
    body404 = (
        '<main><section class="container-tyche" style="padding:140px 0 100px;text-align:center">'
        '<h1 class="text-title" style="font-size:60px;line-height:1.1;margin:0">404</h1>'
        '<p class="text-title" style="font-size:24px;margin:18px 0 10px">Page not found</p>'
        '<p style="font-size:15px;line-height:26px;color:#6c757d;margin:0 auto 30px;max-width:560px">'
        'The page you are looking for has moved or no longer exists.</p>'
        '<p><a class="btn-quote" href="/">Back to home</a> '
        '<a class="btn-quote" href="/about/" style="margin-left:10px">About us</a></p>'
        '</section></main>'
    )
    page404 = re.sub(r"<main[\s\S]*?</main>", body404, home, count=1)
    page404 = page404.replace('href="index.html"', 'href="/"')
    page404 = page404.replace('href="assets/', 'href="/assets/').replace('src="assets/', 'src="/assets/')
    page404 = page404.replace('src="img/', 'src="/img/').replace('href="about/"', 'href="/about/"')
    page404 = page404.replace('src="/img/hero-banner', 'data-x="/img/hero-banner')
    page404 = re.sub(r"<title>[\s\S]*?</title>", "<title>Page not found | Tyche Ventures</title>", page404, count=1)
    page404 = re.sub(r'<link rel="canonical"[^>]*>', '', page404)
    page404 = page404.replace("</head>", '<meta name="robots" content="noindex">\n</head>', 1)
    (DOCS / "404.html").write_text(page404)

    # sitemap
    (DOCS / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        f'  <url><loc>{LIVE}/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>\n'
        f'  <url><loc>{LIVE}/about/</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>\n'
        '</urlset>\n'
    )
    robots = (DOCS / "robots.txt").read_text() if (DOCS / "robots.txt").exists() else "User-agent: *\nAllow: /\n"
    if "Sitemap:" not in robots:
        robots = robots.rstrip() + f"\n\nSitemap: {LIVE}/sitemap.xml\n"
    (DOCS / "robots.txt").write_text(robots)

    (DOCS / ".nojekyll").write_text("")
    print("exported", list(pages), "css", len(css or ""), "redirects", len(REDIRECTS))

    # gate publishing: every referenced asset URL must exist in docs/
    code = subprocess.call([sys.executable, str(ROOT / "scripts" / "verify-docs.py")])
    if code != 0:
        raise SystemExit("export aborted: docs/ has missing asset references")


asyncio.run(main())

