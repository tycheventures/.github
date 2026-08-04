import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { CountUp } from "@/components/site/CountUp";
import { Testimonials } from "@/components/site/Testimonials";
import { TypedTagline } from "@/components/site/TypedTagline";
import { CLIENTS, COUNTERS, HIGHLIGHTS, PROJECTS, SERVICES, SITE } from "@/lib/site-data";

const TITLE = "Tyche Ventures — Website Design & Development Agency";
const DESC =
  "Tyche Ventures builds websites, e-commerce stores, learning management systems and digital marketing campaigns that turn visitors into customers.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pt-[68px] md:pt-[76px]">
        {/* Hero */}
        <section className="bg-surface">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:py-24 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Welcome to
              </p>
              <h1 className="mt-3 font-display text-4xl font-semibold tracking-[0.12em] text-heading sm:text-5xl lg:text-6xl">
                TYCHE VENTURES
              </h1>
              <TypedTagline />
              <a
                href={`${SITE}/get-a-quote/`}
                className="mt-7 inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-accent"
              >
                Get A Quote <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <img
              src="/img/banner1.png"
              alt="Illustration of the Tyche Ventures team designing and building websites"
              width={900}
              height={584}
              className="mx-auto w-full max-w-xl"
            />
          </div>
        </section>

        {/* Highlights */}
        <section className="mx-auto -mt-8 max-w-6xl px-5 pb-16 md:pb-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h) => (
              <article
                key={h.title}
                className="rounded-md border border-border bg-card p-7 text-center shadow-card transition-shadow hover:shadow-card-hover"
              >
                <h2 className="text-base font-semibold leading-snug">{h.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="bg-surface py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="section-title text-center text-3xl md:text-4xl">Services</h2>
            <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <article
                  key={s.title}
                  className="rounded-md border border-border bg-card p-8 text-center shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <img
                    src={s.icon}
                    alt=""
                    width={64}
                    height={64}
                    loading="lazy"
                    className="mx-auto h-14 w-14 object-contain"
                  />
                  <h3 className="mt-5 text-lg font-semibold leading-snug">
                    <a href={s.href} className="transition-colors hover:text-primary">
                      {s.title}
                    </a>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href={`${SITE}/services/`}
                className="rounded-sm border border-primary px-7 py-3 text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                View All
              </a>
              <a
                href={`${SITE}/get-a-quote/`}
                className="rounded-sm bg-primary px-7 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-accent"
              >
                Get A Quote
              </a>
            </div>
          </div>
        </section>

        {/* Featured projects */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="section-title text-center text-3xl md:text-4xl">Featured Projects</h2>
            <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((p) => (
                <a
                  key={p.title}
                  href={p.href}
                  className="group block overflow-hidden rounded-md border border-border bg-card shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <div className="overflow-hidden">
                    <img
                      src={p.img}
                      alt={`${p.title} website project by Tyche Ventures`}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="px-5 py-4 text-center text-base font-semibold transition-colors group-hover:text-primary">
                    {p.title}
                  </h3>
                </a>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a
                href={`${SITE}/work/`}
                className="inline-block rounded-sm border border-primary px-7 py-3 text-sm font-semibold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                View All
              </a>
            </div>
          </div>
        </section>

        {/* Counters */}
        <section className="bg-primary py-14">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4">
            {COUNTERS.map((c) => (
              <div key={c.label}>
                <CountUp value={c.value} suffix={c.suffix} />
                <p className="mt-2 text-center text-sm font-semibold uppercase tracking-wide text-primary-foreground/90">
                  {c.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Clients */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="section-title text-center text-3xl md:text-4xl">Who Trusted Us</h2>
            <ul className="mt-12 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 lg:grid-cols-6">
              {CLIENTS.map((c) => (
                <li key={c.name} className="flex items-center justify-center">
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={c.name}
                    className="opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                  >
                    <img
                      src={c.img}
                      alt={`${c.name} logo`}
                      loading="lazy"
                      className="h-12 w-auto max-w-[140px] object-contain"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-surface py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="section-title text-center text-3xl md:text-4xl">Our Client Says</h2>
            <Testimonials />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
