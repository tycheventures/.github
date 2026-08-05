#!/usr/bin/env python3
"""Regenerate the static docs/ export from the dev server."""
import re
import shutil
from pathlib import Path
from urllib.parse import urljoin, urlparse

import requests

BASE_URL = "http://localhost:8080"
DOCS = Path("docs")


def fetch(path: str) -> str:
    url = urljoin(BASE_URL, path)
    r = requests.get(url, timeout=30)
    r.raise_for_status()
    return r.text


def rewrite_for_folder(html: str, folder_depth: int) -> str:
    """Rewrite dev server absolute paths into relative docs/ paths."""
    prefix = "../" * folder_depth if folder_depth else ""

    def rel(path: str) -> str:
        if path.startswith("/"):
            return prefix + path.lstrip("/")
        return path

    # Styles / scripts / preloads / fonts / images
    html = re.sub(r'(<link[^>]+href=")/("?[^">]*)', lambda m: m.group(1) + rel(m.group(2)) + '"', html)
    html = re.sub(r'(<script[^>]+src=")/("?[^">]*)', lambda m: m.group(1) + rel(m.group(2)) + '"', html)
    html = re.sub(r'(<img[^>]+src=")/("?[^">]*)', lambda m: m.group(1) + rel(m.group(2)) + '"', html)

    # href attributes: internal links
    def href_repl(m: re.Match) -> str:
        href = m.group(2)
        if href.startswith("http://") or href.startswith("https://") or href.startswith("mailto:") or href.startswith("tel:"):
            return m.group(0)
        if href.startswith("#"):
            return m.group(0)
        if href.startswith("/"):
            return m.group(1) + rel(href) + '"'
        return m.group(0)

    html = re.sub(r'(<a[^>]+href=")([^"]+)"', href_repl, html)
    html = re.sub(r'(<form[^>]+action=")([^"]+)"', href_repl, html)

    # srcset / other url() forms
    html = re.sub(r'url\(/([^)]+)\)', lambda m: f"url({rel('/' + m.group(1))})", html)

    return html


def save_page(server_path: str, file_path: Path, depth: int) -> None:
    html = fetch(server_path)
    html = rewrite_for_folder(html, depth)
    file_path.parent.mkdir(parents=True, exist_ok=True)
    file_path.write_text(html, encoding="utf-8")
    print(f"Wrote {file_path}")


def main():
    # Index
    save_page("/", DOCS / "index.html", 0)
    # About
    save_page("/about", DOCS / "about" / "index.html", 1)
    # Remove obsolete products redirect stub
    products_dir = DOCS / "products"
    if products_dir.exists():
        shutil.rmtree(products_dir)
        print(f"Removed {products_dir}")


if __name__ == "__main__":
    main()
