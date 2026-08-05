import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
      className="mx-auto mt-12 max-w-4xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <figure id="testimonial-figure" className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <img
          src={item.img}
          alt={item.name}
          width={85}
          height={85}
          loading="lazy"
          className="h-24 w-24 shrink-0 rounded-full object-cover shadow-card"
        />
        <div className="relative pl-7">
          <span
            aria-hidden="true"
            className="absolute left-0 top-[-10px] font-display text-6xl leading-none text-border"
          >
            &ldquo;
          </span>
          <blockquote className="text-[16px] font-medium leading-[28px] text-muted-foreground">
            {item.quote}
          </blockquote>
          <figcaption className="mt-5 text-[16px] font-semibold text-primary">
            {"– "}
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                {item.name}
              </a>
            ) : (
              item.name
            )}
            {item.company && (
              <span className="font-normal text-muted-foreground"> {item.company}</span>
            )}
          </figcaption>
        </div>
      </figure>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => setI((v) => (v - 1 + total) % total)}
          id="testimonial-prev"
          aria-label="Previous testimonial"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setI(idx)}
              data-dot={idx}
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
          id="testimonial-next"
          aria-label="Next testimonial"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
