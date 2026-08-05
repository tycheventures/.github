import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { HIGHLIGHTS } from "@/lib/site-data";

const TITLE = "About Tyche Ventures — Kolhapur Web Design Agency";
const DESC =
  "Tyche Ventures is a Kolhapur based web design and development agency delivering reliable, result-oriented websites, e-commerce and digital marketing solutions.";

export const Route = createFileRoute("/about")({
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
  component: About,
});

const PARAGRAPHS = [
  "Today, in the digital era, it is essential to build your professional online presence to sustain in the market. A well designed and properly working website can convert your visitors to potential customers.",
  "Tyche Ventures are the Kolhapur based leading website design and development agency delivering high quality, reliable and result-oriented website solutions.",
  "Innovation, Customer satisfaction, quality, and commitment are four basic building blocks of our team. Our talented programmers, creative designers, and skilled marketers work together to fulfill our customer's goals and improve market branding. We help you to develop web solutions to attract your target audience. We understand the value of your business, so always focus on the requirements carefully and convert it into workable solutions.",
  "Our team possesses advanced knowledge and experience in website designing, e-commerce development, content management system development, job portal development and matrimony portal development. We specialize in learning management system development, graphic designing, logo designing, and many more digital solutions. We also provide annual maintenance services to our customers to keep your website updated.",
  "Tyche Ventures also offer services like domain registration, windows hosting, Linux hosting, dedicated servers and cloud hosting services. Our digital marketing team is well versed in advanced marketing skills and proficiency. We deeply understand your goals and help to achieve success. We serve all kinds of digital marketing solutions to our customers with the latest marketing strategies. Our committed team is available to help you with all types of business requirements, with 100 % customer satisfaction. We always strive to deliver consistent and all-inclusive digital solutions to our customers.",
];

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="pt-[68px] md:pt-[76px]">
        <section className="bg-surface py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-5 text-center">
            <h1 className="font-display text-4xl font-semibold tracking-[0.08em] text-heading md:text-5xl">
              About Tyche Ventures
            </h1>
            <img
              src="/img/taychi-230x70.png"
              alt="Tyche Ventures wordmark"
              width={230}
              height={70}
              className="mx-auto mt-8 h-16 w-auto"
            />
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-5 py-14 md:py-20">
          {PARAGRAPHS.map((p) => (
            <p key={p.slice(0, 32)} className="mb-6 text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}

          <div className="mt-10 grid gap-7 md:grid-cols-2">
            <article className="rounded-md border border-border bg-card p-8 shadow-card">
              <h2 className="text-xl font-semibold">Vision</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Tyche Ventures' vision is to use advanced technologies and strategies to expand your
                online presence. We offer perfect digital solutions to improve your branding.
              </p>
            </article>
            <article className="rounded-md border border-border bg-card p-8 shadow-card">
              <h2 className="text-xl font-semibold">Mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                We combine the knowledge and passion together to bring our customer's market value much
                ahead in the competition. We always strive to deliver the best customer satisfaction
                with a dedicated and committed team.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-surface py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="section-title text-center text-3xl uppercase md:text-4xl">Why Choose Us?</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {HIGHLIGHTS.map((h) => (
                <article
                  key={h.title}
                  className="rounded-md border border-border bg-card p-7 text-center shadow-card"
                >
                  <h3 className="text-base font-semibold leading-snug">{h.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
