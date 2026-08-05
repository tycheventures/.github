import { useEffect, useState } from "react";

export function TypedTagline({ text, className = "" }: { text: string; className?: string }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setN((v) => {
        if (v >= text.length) {
          clearInterval(t);
          return v;
        }
        return v + 1;
      });
    }, 55);
    return () => clearInterval(t);
  }, [text]);

  return (
    <span className={`relative inline-block ${className}`} data-typed={text}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{text.slice(0, n)}</span>
      <span aria-hidden="true" className="caret-blink ml-0.5 inline-block text-primary">
        |
      </span>
    </span>
  );
}
