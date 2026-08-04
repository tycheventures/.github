import { Link } from "@tanstack/react-router";
import { Facebook, Github, Linkedin, Twitter, Youtube, MessageCircle, Globe } from "lucide-react";
import { FOOTER_LINKS, FOOTER_SERVICES, SOCIALS } from "@/lib/site-data";

const ICONS: Record<string, typeof Facebook> = {
  WhatsApp: MessageCircle,
  LinkedIn: Linkedin,
  Facebook: Facebook,
  Twitter: Twitter,
  GitHub: Github,
  WordPress: Globe,
  YouTube: Youtube,
};

export function SiteFooter() {
  return (
    <footer className="bg-surface-alt">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" aria-label="Tyche Ventures home">
            <img
              src="/img/Tayche-C-3.png"
              alt="Tyche Ventures logo"
              width={250}
              height={77}
              className="h-14 w-auto"
            />
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Kolhapur based website design and development agency delivering high quality, reliable and
            result-oriented digital solutions since 2015.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-base font-semibold uppercase tracking-wide">Services</h4>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {FOOTER_SERVICES.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold uppercase tracking-wide">Connect With Us</h4>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {SOCIALS.map((s) => {
              const Icon = ICONS[s.label] ?? Globe;
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-5 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Tyche Ventures. All Rights Reserved.
          </p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {FOOTER_LINKS.map((l) => (
              <li key={l.label}>
                {l.internal ? (
                  <Link
                    to={l.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    href={l.href}
                    className="text-xs text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
