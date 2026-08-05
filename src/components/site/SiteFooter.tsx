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
      <div className="container-tyche grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" aria-label="Tyche Ventures home">
            <img
              src="/img/Tayche-C-3.png"
              alt="Tyche Ventures logo"
              width={250}
              height={77}
              className="h-16 w-auto"
            />
          </Link>
          <p className="mt-6 text-[17px] font-normal leading-[30px] text-footer-muted">
            Kolhapur based website design and development agency delivering high quality, reliable and
            result-oriented digital solutions since 2015.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-2xl font-normal leading-8 text-footer-foreground">Services</h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {FOOTER_SERVICES.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2.5 text-[15px] font-normal leading-[26px] text-footer-muted transition-colors duration-300 hover:translate-x-0.5 hover:text-footer-foreground"
                >
                  <ChevronRight
                    className="mt-1 h-4 w-4 shrink-0 fill-marker text-marker"
                    aria-hidden="true"
                  />
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-normal leading-8 text-footer-foreground">Connect With Us</h3>
          <ul className="mt-6 flex flex-wrap gap-3">
            {SOCIALS.map((s) => {
              const Icon = ICONS[s.label] ?? Globe;
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-footer-foreground transition-opacity hover:opacity-80 ${
                      SOCIAL_COLORS[s.label] ?? "bg-primary"
                    }`}
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tyche flex flex-col items-center gap-4 py-6 text-center md:flex-row md:justify-between md:text-left">
          <p className="text-sm font-normal leading-6 text-footer-muted">
            &copy; {new Date().getFullYear()} Tyche Ventures. All Rights Reserved.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {FOOTER_LINKS.map((l, i) => (
              <li key={l.label} className="flex items-center gap-4">
                {l.internal ? (
                  <Link
                    to={l.href}
                    className="text-sm font-normal leading-6 text-footer-muted transition-colors hover:text-footer-foreground"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-normal leading-6 text-footer-muted transition-colors duration-300 hover:text-footer-foreground"
                  >
                    {l.label}
                  </a>
                )}
                {i < FOOTER_LINKS.length - 1 && (
                  <span aria-hidden="true" className="text-footer-muted/50">
                    |
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>

  );
}
