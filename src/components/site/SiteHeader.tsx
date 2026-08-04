import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV, SITE } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-background transition-shadow ${
        scrolled ? "shadow-card" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3">
        <Link to="/" className="shrink-0" aria-label="Tyche Ventures home">
          <img
            src="/img/Tayche-C-3.png"
            alt="Tyche Ventures logo"
            width={250}
            height={77}
            className="h-10 w-auto md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {NAV.map((item) =>
            item.internal ? (
              <Link
                key={item.label}
                to={item.href}
                className="text-[13px] font-semibold uppercase tracking-wide text-card-foreground transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] font-semibold uppercase tracking-wide text-card-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ),
          )}
          <a
            href={`${SITE}/get-a-quote/`}
            className="rounded-sm bg-primary px-5 py-2.5 text-[13px] font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-accent"
          >
            Get A Quote
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-heading lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden" aria-label="Mobile">
          <ul className="mx-auto max-w-6xl px-5 py-2">
            {NAV.map((item) => (
              <li key={item.label} className="border-b border-border last:border-0">
                {item.internal ? (
                  <Link
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-sm font-semibold uppercase tracking-wide text-card-foreground"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="block py-3 text-sm font-semibold uppercase tracking-wide text-card-foreground"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
            <li className="py-3">
              <a
                href={`${SITE}/get-a-quote/`}
                className="inline-block rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground"
              >
                Get A Quote
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
