import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  MessageCircle,
  Globe,
  ChevronRight,
} from "lucide-react";
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

const SOCIAL_COLORS: Record<string, string> = {
  WhatsApp: "bg-[#25d366]",
  LinkedIn: "bg-[#0077b5]",
  Facebook: "bg-[#3b5998]",
  Twitter: "bg-[#1da1f2]",
  GitHub: "bg-[#4078c0]",
  WordPress: "bg-[#21759b]",
  YouTube: "bg-[#e52d27]",
};

export function SiteFooter() {
  return (
    <footer className="bg-footer text-footer-muted">
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
          <p className="mt-5 text-sm leading-relaxed">
            Kolhapur based website design and development agency delivering high quality, reliable and
            result-oriented digital solutions since 2015.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-base font-semibold text-footer-foreground">Services</h4>
          <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
            {FOOTER_SERVICES.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="inline-flex items-start gap-1.5 text-sm transition-colors hover:text-primary"
                >
                  <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold text-footer-foreground">Connect With Us</h4>
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
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-footer-foreground transition-opacity hover:opacity-80 ${
                      SOCIAL_COLORS[s.label] ?? "bg-primary"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-5 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Tyche Ventures. All Rights Reserved.
          </p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {FOOTER_LINKS.map((l) => (
              <li key={l.label}>
                {l.internal ? (
                  <Link to={l.href} className="text-xs transition-colors hover:text-primary">
                    {l.label}
                  </Link>
                ) : (
                  <a href={l.href} className="text-xs transition-colors hover:text-primary">
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
