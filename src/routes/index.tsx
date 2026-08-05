import { createFileRoute } from "@tanstack/react-router";
import { Monitor, Settings, User } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { BackToTop } from "@/components/site/BackToTop";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CountUp } from "@/components/site/CountUp";
import { HighlightCard } from "@/components/site/HighlightCard";
import { Testimonials } from "@/components/site/Testimonials";
import { TypedTagline } from "@/components/site/TypedTagline";
import { CLIENTS, COUNTERS, HIGHLIGHTS, OG_IMAGE, PROJECTS, QUOTE_URL, SERVICES, SITE, SOCIALS, WPG_WORK } from "@/lib/site-data";


const TITLE = "Tyche Ventures — Website Design & Development Agency";
const DESC =
  "Tyche Ventures builds websites, e-commerce stores, learning management systems and digital marketing campaigns that turn visitors into customers.";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "robots", content: "index,follow" },
      { name: "google-site-verification", content: "o_TVVb2Is-hngngOgbLZzo_811HImqrvBmYNdwuBOC0" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: `${SITE}/` },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],

    links: [
      { rel: "canonical", href: `${SITE}/` },
      { rel: "preload", as: "image", href: "/img/hero-banner.webp" },
    ],
    scripts: [

      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Tyche Ventures",
          description: DESC,
          url: SITE,
          image: `${SITE}/img/taychi-230x70.png`,
          areaServed: "Worldwide",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Kolhapur",
            addressRegion: "Maharashtra",
            addressCountry: "IN",
          },
          sameAs: SOCIALS.map((s) => s.href),
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Services",
            itemListElement: SERVICES.map((s) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: s.title,
                description: s.text,
                url: s.href,
                provider: { "@type": "Organization", name: "Tyche Ventures" },
              },
            })),
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader transparent />

      <main id="main">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-wave via-wave-soft to-background lg:bg-none">
          {/* desktop / large: full-bleed artwork behind the transparent header */}
          <img
            src="/img/hero-banner.webp"
            alt=""
            aria-hidden="true"
            width={1920}
            height={650}
            fetchPriority="high"
            className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover object-bottom lg:block"
          />


          <div className="relative z-10 container-tyche flex flex-col pb-10 pt-28 md:pt-32 lg:grid lg:min-h-[560px] lg:grid-cols-2 lg:items-center lg:gap-10 lg:pb-24 lg:pt-40">
            <div>
              <p className="font-display text-xl font-medium text-title sm:text-2xl">Welcome to</p>
              <h1 className="mt-2 font-display text-[38px] font-bold leading-[1.06] tracking-[3px] text-title sm:text-5xl lg:text-[60px] lg:leading-[64px] lg:tracking-[4px]">
                TYCHE
                <br />
                VENTURES
                <span className="sr-only"> — Website Design &amp; Development Agency</span>
              </h1>
              <p className="mt-4 max-w-xl text-lg font-medium leading-[28px] text-muted-foreground sm:text-xl lg:text-2xl lg:leading-[34px]">
                <TypedTagline text="Building Brands With Passion And Ulterior Motive" />
              </p>
              <a
                href={QUOTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-quote mt-7"
                data-ga-event="cta_click"
                data-ga-section="hero"
                data-ga-label="Get A Quote"
              >
                Get A Quote
              </a>
            </div>
            <div aria-hidden="true" className="hidden lg:block" />
          </div>

          {/* tablet / mobile: artwork sits below the copy so nothing overlaps the headline */}
          <img
            src="/img/hero-banner-mobile.webp"
            alt=""
            aria-hidden="true"
            width={900}
            height={600}
            fetchPriority="high"
            className="relative z-0 block h-[240px] w-full object-cover object-[72%_bottom] sm:h-[320px] md:h-[380px] md:object-[78%_bottom] lg:hidden"
          />
        </section>

        {/* Highlights */}
        <section className="container-tyche py-16 md:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h) => (
              <HighlightCard key={h.title} icon={h.icon} title={h.title} text={h.text} />
            ))}
          </div>
        </section>







        {/* Services */}
        <section id="services" className="pb-16 md:pb-20">
          <div className="container-tyche">
            <SectionTitle icon={Settings}>Services</SectionTitle>
            <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <article key={s.title} className="group flex gap-5">
                  <img
                    src={s.icon}
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    className="h-12 w-12 shrink-0 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  <div>
                    <h3 className="text-[18px] font-medium leading-[1.2] text-title">
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors duration-300 hover:text-primary"
                      >
                        {s.title}
                      </a>
                    </h3>
                    <p className="mt-3 text-[14px] leading-[24px] text-muted-foreground">{s.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Purple CTA band */}
        <section className="bg-accent">
          <div className="container-tyche flex flex-col items-center gap-5 py-10 text-center md:flex-row md:justify-between md:text-left">
            <p className="text-2xl font-medium leading-[34px] text-accent-foreground">
              Talk to our experts today and get professional design, and development services.
            </p>
            <a
              href={QUOTE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-quote btn-quote-on-accent shrink-0"
              data-ga-event="cta_click"
              data-ga-section="cta_banner"
              data-ga-label="Get A Quote"
            >
              Get A Quote
            </a>
          </div>
        </section>

        {/* Featured projects */}
        <section id="work" className="py-16 md:py-20">
          <div className="container-tyche">
            <SectionTitle icon={Monitor}>Featured Projects</SectionTitle>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((p) => (
                <a
                  key={p.title}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="group relative block overflow-hidden rounded-sm shadow-card transition-shadow duration-300 hover:shadow-card-hover"
                >
                  <img
                    src={p.img}
                    alt={`${p.title} website project by Tyche Ventures`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-heading/0 transition-colors duration-500 group-hover:bg-heading/45" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-5 pb-4 pt-12">
                    <h3 className="text-xl font-medium leading-[30px] text-primary-foreground transition-transform duration-300 group-hover:-translate-y-1">
                      {p.title}
                    </h3>
                    <span className="mt-2 block h-[3px] w-0 bg-marker transition-all duration-500 group-hover:w-full" />
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a
                href={WPG_WORK}
                data-ga-event="cta_click"
                data-ga-section="work"
                data-ga-label="View All Work"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-sm border border-primary px-8 py-3 text-[15px] font-semibold uppercase tracking-wide text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                View All
              </a>
            </div>
          </div>
        </section>

        {/* Counters */}
        <section className="counter-bg relative bg-heading bg-cover bg-center bg-no-repeat py-20">
          <div className="counter-overlay absolute inset-0" aria-hidden="true" />

          <div className="container-tyche relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {COUNTERS.map((c) => (
              <div key={c.label}>
                <CountUp value={c.value} suffix={c.suffix} />
                <p className="mt-3 text-center text-[15px] font-medium text-primary-foreground/90">
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Clients */}
        <section className="py-16 md:py-20">
          <div className="container-tyche">
            <SectionTitle icon={User}>Who Trusted Us</SectionTitle>
            <ul className="mx-auto mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
              {CLIENTS.map((c) => (
                <li key={c.name}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    title={c.name}
                    className="flex h-32 items-center justify-center rounded-sm border border-border bg-surface px-5 py-4 transition-all duration-[400ms] ease-in-out hover:border-primary hover:shadow-card"
                  >
                    <img
                      src={c.img}
                      alt={`${c.name} logo`}
                      loading="lazy"
                      className="max-h-20 w-auto max-w-[180px] object-contain"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>


        {/* Testimonials */}
        <section className="bg-surface py-16 md:py-20">
          <div className="container-tyche">
            <SectionTitle icon={User}>Our Client Says</SectionTitle>
            <Testimonials />
          </div>
        </section>
      </main>

      <SiteFooter />
      <BackToTop />
    </div>
  );
}
