import { useEffect, useState } from "react";
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
      className="mx-auto mt-12 max-w-5xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <figure id="testimonial-figure" className="flex flex-col items-center text-center">
        <img
          src={item.img}
          alt={item.name}
          width={115}
          height={115}
          loading="lazy"
          className="h-[115px] w-[115px] shrink-0 rounded-full object-cover shadow-card"
        />

        <div className="mt-10 w-full bg-[rgba(0,0,0,0.06)] px-6 pb-[10px] pt-[30px] sm:px-10">
          <blockquote className="testimonial-lines relative indent-[62px] text-[17px] font-medium leading-[31px] text-muted-foreground">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-[-14px] font-display text-[64px] font-bold leading-none text-[rgba(0,0,0,0.12)]"
            >
              &rdquo;
            </span>
            {item.quote}
          </blockquote>
        </div>



        <div className="mt-6 flex items-center justify-center gap-2" aria-hidden="true">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        </div>

        <figcaption className="mt-5">
          <span className="block text-[15px] font-bold text-heading">
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="transition-colors hover:text-primary"
              >
                {item.name}
              </a>
            ) : (
              item.name
            )}
          </span>
          {item.company && (
            <span className="mt-1 block text-[15px] font-medium text-muted-foreground">
              {item.company}
            </span>

          )}
        </figcaption>
      </figure>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {TESTIMONIALS.map((t, idx) => (
          <button
            key={t.name}
            type="button"
            onClick={() => setI(idx)}
            data-dot={idx}
            aria-label={`Show testimonial from ${t.name}`}
            aria-current={idx === i}
            className={`h-[13px] w-[13px] rounded-full transition-colors ${
              idx === i ? "bg-primary" : "bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
