import { useEffect, useState } from "react";

const PHRASE = "Building brands with passion and ulterior motive";

export function TypedTagline() {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (n >= PHRASE.length) return;
    const t = setTimeout(() => setN((v) => v + 1), 55);
    return () => clearTimeout(t);
  }, [n]);

  return (
    <p className="mt-5 min-h-[3.5rem] text-lg text-muted-foreground md:text-xl">
      <span>{PHRASE.slice(0, n)}</span>
      <span className="caret-blink text-primary" aria-hidden="true">
        |
      </span>
      <span className="sr-only">{PHRASE}</span>
    </p>
  );
}
