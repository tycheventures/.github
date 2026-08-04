import { createFileRoute } from "@tanstack/react-router";
import { IndianRupee, Monitor, Settings, Star, ThumbsUp, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionTitle } from "@/components/site/SectionTitle";
import { CountUp } from "@/components/site/CountUp";
import { Testimonials } from "@/components/site/Testimonials";
import { CLIENTS, COUNTERS, HIGHLIGHTS, PROJECTS, SERVICES, SITE } from "@/lib/site-data";

const TITLE = "Tyche Ventures — Website Design & Development Agency";
const DESC =
  "Tyche Ventures builds websites, e-commerce stores, learning management systems and digital marketing campaigns that turn visitors into customers.";

const HIGHLIGHT_ICONS: Record<string, LucideIcon> = {
  "thumbs-up": ThumbsUp,
  rupee: IndianRupee,
  star: Star,
  team: Users,
};

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
      <SiteHeader transparent />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-background">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-0"
          >
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 1440 720"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
            >
              <path
                d="M1440 0H520c-40 66 12 108 90 128 96 24 118 78 44 118-96 52-268 44-330 118-58 70 12 148 168 176 130 24 268 34 420 42 172 10 380 12 628 8V0Z"
                fill="hsl(var(--brand-soft, 191 47% 94%))"
              />
              <path
                d="M1440 96H744c-30 52 6 84 66 100 74 20 90 62 34 92-74 42-206 36-254 94-44 56 10 118 130 140 100 20 206 28 322 34 132 8 292 10 398 6V96Z"
                fill="hsl(var(--brand-soft-2, 191 55% 97%))"
              />
            </svg>
          </div>

          <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-28 md:pb-24 md:pt-36 lg:grid-cols-2">
            <div>
              <p className="font-display text-2xl font-normal text-heading sm:text-3xl">Welcome to</p>
              <h1 className="mt-2 font-display text-4xl font-semibold tracking-[0.04em] text-heading sm:text-5xl">
                TYCHE
                <br />
                VENTURES
              </h1>
              <p className="mt-4 max-w-md text-base text-muted-foreground">
                Building Brands With Passion And Ulterior Motive
              </p>
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
        <section className="mx-auto -mt-10 max-w-6xl px-5 pb-16 md:pb-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h) => {
              const Icon = HIGHLIGHT_ICONS[h.icon] ?? Star;
              return (
                <article
                  key={h.title}
                  className="rounded-sm border border-border bg-card p-6 text-center shadow-card transition-shadow hover:shadow-card-hover"
                >
                  <Icon className="mx-auto h-7 w-7 text-primary" aria-hidden="true" />
                  <h2 className="mt-4 text-sm font-semibold leading-snug">{h.title}</h2>
                  <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">{h.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Services */}
        <section className="pb-16 md:pb-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle icon={Settings}>Services</SectionTitle>
            <div className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((s) => (
                <article key={s.title} className="flex gap-4">
                  <img
                    src={s.icon}
                    alt=""
                    width={48}
                    height={48}
                    loading="lazy"
                    className="h-10 w-10 shrink-0 object-contain"
                  />
                  <div>
                    <h3 className="text-base font-medium leading-snug">
                      <a href={s.href} className="transition-colors hover:text-primary">
                        {s.title}
                      </a>
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Purple CTA band */}
        <section className="bg-accent">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-8 text-center md:flex-row md:justify-between md:text-left">
            <p className="text-base text-accent-foreground">
              Talk to our experts today and get professional design, and development services.
            </p>
            <a
              href={`${SITE}/get-a-quote/`}
              className="shrink-0 rounded-sm border border-accent-foreground/70 px-6 py-2.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-foreground hover:text-accent"
            >
              Get A Quote
            </a>
          </div>
        </section>

        {/* Featured projects */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle icon={Monitor}>Featured Projects</SectionTitle>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((p) => (
                <a
                  key={p.title}
                  href={p.href}
                  className="group relative block overflow-hidden rounded-sm shadow-card"
                >
                  <img
                    src={p.img}
                    alt={`${p.title} website project by Tyche Ventures`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent px-4 pb-3 pt-10">
                    <h3 className="text-sm font-medium text-white">{p.title}</h3>
                  </div>
                  <span className="absolute inset-x-0 bottom-0 h-[3px] w-0 bg-primary transition-all duration-500 group-hover:w-full" />
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
        <section className="relative bg-heading py-20">
          <div
            className="absolute inset-0 bg-gradient-to-r from-brand-alt/35 via-transparent to-brand/30"
            aria-hidden="true"
          />


          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4">
            {COUNTERS.map((c) => (
              <div key={c.label}>
                <CountUp value={c.value} suffix={c.suffix} />
                <p className="mt-2 text-center text-sm text-white/85">{c.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Clients */}
        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <SectionTitle icon={Users}>Who Trusted Us</SectionTitle>
            <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {CLIENTS.map((c) => (
                <li key={c.name}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={c.name}
                    className="flex h-24 items-center justify-center rounded-sm border border-border bg-surface p-4 transition-colors hover:border-primary"
                  >
                    <img
                      src={c.img}
                      alt={`${c.name} logo`}
                      loading="lazy"
                      className="max-h-12 w-auto max-w-[120px] object-contain"
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
            <SectionTitle icon={Users}>Our Client Says</SectionTitle>
            <Testimonials />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
