#!/usr/bin/env python3
"""Validate that every asset URL referenced by docs/ actually exists on disk.

Run standalone:  python3 scripts/verify-docs.py [--verbose]
Exits 1 when any referenced file is missing.
"""

import re
import sys
from pathlib import Path
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"

SKIP_PREFIXES = ("http://", "https://", "//", "mailto:", "tel:", "data:", "javascript:", "#")

HTML_REF_RE = re.compile(r'(?:href|src)\s*=\s*"([^"]+)"', re.I)
SRCSET_RE = re.compile(r'srcset\s*=\s*"([^"]+)"', re.I)
CSS_URL_RE = re.compile(r'url\(\s*["\']?([^"\')]+)["\']?\s*\)', re.I)
JS_ASSET_RE = re.compile(r'["\'((?:\.\./)*(?:assets|img|fonts)/[A-Za-z0-9_\-./]+)["\']')


def is_local(ref: str) -> bool:
    ref = ref.strip()
    if not ref:
        return False
    return not ref.lower().startswith(SKIP_PREFIXES)


def resolve(ref: str, source: Path) -> Path | None:
    """Resolve a reference declared in `source` to a path inside docs/."""
    ref = unquote(urlparse(ref.strip()).path)
    if not ref:
        return None
    if ref.startswith("/"):
        target = DOCS / ref.lstrip("/")
    else:
        target = (source.parent / ref).resolve()
    return target


def exists(target: Path) -> bool:
    if target.is_dir():
        return (target / "index.html").exists()
    if target.exists():
        return True
    # directory-style link without trailing slash
    return (target / "index.html").exists()


def collect(path: Path) -> list[str]:
    text = path.read_text(errors="ignore")
    refs: list[str] = []
    suffix = path.suffix.lower()
    if suffix in (".html", ".htm"):
        refs += HTML_REF_RE.findall(text)
        for group in SRCSET_RE.findall(text):
            refs += [c.strip().split(" ")[0] for c in group.split(",") if c.strip()]
        refs += CSS_URL_RE.findall(text)
    elif suffix == ".css":
        refs += CSS_URL_RE.findall(text)
    elif suffix == ".js":
        refs += JS_ASSET_RE.findall(text)
    return refs


def main() -> int:
    verbose = "--verbose" in sys.argv

    if not DOCS.exists():
        print(f"ERROR: {DOCS} does not exist — run scripts/export-docs.py first.")
        return 1

    files = sorted(
        p
        for p in DOCS.rglob("*")
        if p.is_file() and p.suffix.lower() in (".html", ".htm", ".css", ".js")
    )

    checked = 0
    missing: list[tuple[Path, str, Path]] = []

    for f in files:
        for ref in collect(f):
            if not is_local(ref):
                continue
            target = resolve(ref, f)
            if target is None:
                continue
            checked += 1
            ok = exists(target)
            if verbose:
                print(f"{'ok  ' if ok else 'MISS'} {f.relative_to(DOCS)} -> {ref}")
            if not ok:
                missing.append((f, ref, target))

    print(f"\nverify-docs: scanned {len(files)} files, checked {checked} local references")

    if missing:
        print(f"FAILED: {len(missing)} missing asset reference(s):")
        for src, ref, target in missing:
            try:
                shown = target.relative_to(DOCS)
            except ValueError:
                shown = target
            print(f"  - {src.relative_to(DOCS)}: {ref}  (expected docs/{shown})")
        return 1

    print("OK: every referenced CSS/JS/image/font/page exists in docs/")
    return 0


if __name__ == "__main__":
    sys.exit(main())
