import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV, QUOTE_URL } from "@/lib/site-data";

const linkCls =
  "text-[14px] font-semibold uppercase tracking-wide text-title transition-colors duration-300 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary";

export function SiteHeader({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubs, setOpenSubs] = useState<string[]>([]);
  const toggleSub = (label: string) =>
    setOpenSubs((v) => (v.includes(label) ? v.filter((x) => x !== label) : [...v, label]));


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !transparent || scrolled || open;

  return (
    <header
      data-transparent={transparent ? "true" : "false"}
      className={`fixed inset-x-0 top-0 z-50 transition-shadow ${
        solid ? "bg-background" : "bg-transparent"
      } ${solid && scrolled ? "shadow-card" : ""}`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-sm focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-accent-foreground"
      >
        Skip to content
      </a>



      <div className="container-tyche flex items-center justify-between gap-6 px-5 py-3">
        <Link to="/" className="shrink-0" aria-label="Tyche Ventures home">
          <img
            src="/img/Tayche-C-3.png"
            alt="Tyche Ventures logo"
            width={250}
            height={77}
            className="h-10 w-auto md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {NAV.map((item) => {
            if (item.children) {
              return (
                <div key={item.label} className="group relative">
                  <a
                    href={item.href}
                    {...(item.anchor ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                    className={`${linkCls} inline-flex items-center gap-1`}
                  >

                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                  <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="rounded-sm border border-border bg-background py-2 shadow-card-hover">
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <a
                            href={c.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-5 py-2 text-[14px] text-muted-foreground transition-colors duration-300 hover:text-primary"
                          >
                            {c.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }
            return item.internal ? (
              <Link
                key={item.label}
                to={item.href}
                className={linkCls}
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ) : (
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={linkCls}>
                {item.label}
              </a>
            );
          })}
          <a
            href={QUOTE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-quote"
            data-ga-event="cta_click"
            data-ga-section="header"
            data-ga-label="Get A Quote"
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
        <nav
          className="max-h-[75vh] overflow-y-auto border-t border-border bg-background lg:hidden"
          aria-label="Mobile"
        >
          <ul className="container-tyche py-2">
            {NAV.map((item) => (
              <li key={item.label} className="border-b border-border last:border-0">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => toggleSub(item.label)}
                      aria-expanded={openSubs.includes(item.label)}
                      className="flex w-full items-center justify-between py-3 text-sm font-semibold uppercase tracking-wide text-card-foreground"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openSubs.includes(item.label) ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openSubs.includes(item.label) && (
                      <ul className="pb-3 pl-3">
                        {item.children.map((c) => (
                          <li key={c.label}>
                            <a
                              href={c.href}
                              target="_blank"
                              rel="noopener noreferrer"

                              className="block py-2 text-sm text-muted-foreground"
                            >
                              {c.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : item.internal ? (
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
                    {...(item.anchor ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                    onClick={() => item.anchor && setOpen(false)}
                    className="block py-3 text-sm font-semibold uppercase tracking-wide text-card-foreground"
                  >
                    {item.label}
                  </a>
                )}

              </li>
            ))}
            <li className="py-3">
              <a
                href={QUOTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-quote"
                data-ga-event="cta_click"
                data-ga-section="mobile_menu"
                data-ga-label="Get A Quote"
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
