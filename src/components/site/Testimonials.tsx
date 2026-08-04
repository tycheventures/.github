import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/site-data";

export function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % total), 7000);
    return () => clearInterval(t);
  }, [paused, total]);

  const item = TESTIMONIALS[i]!;

  return (
    <div
      className="mx-auto mt-10 max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <figure className="rounded-md bg-background p-8 text-center shadow-card md:p-12">
        <img
          src={item.img}
          alt={item.name}
          width={85}
          height={85}
          loading="lazy"
          className="mx-auto h-20 w-20 rounded-full object-cover"
        />
        <Quote className="mx-auto mt-5 h-6 w-6 text-primary" aria-hidden="true" />
        <blockquote className="mt-4 text-base leading-relaxed text-muted-foreground">
          {item.quote}
        </blockquote>
        <figcaption className="mt-6">
          <div className="text-sm font-semibold uppercase tracking-wide text-heading">
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary"
              >
                {item.name}
              </a>
            ) : (
              item.name
            )}
          </div>
          {item.company && (
            <div className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
              {item.company}
            </div>
          )}
        </figcaption>
      </figure>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => setI((v) => (v - 1 + total) % total)}
          aria-label="Previous testimonial"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`Show testimonial from ${t.name}`}
              aria-current={idx === i}
              className={`h-2 w-2 rounded-full transition-colors ${
                idx === i ? "bg-primary" : "bg-border"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setI((v) => (v + 1) % total)}
          aria-label="Next testimonial"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
