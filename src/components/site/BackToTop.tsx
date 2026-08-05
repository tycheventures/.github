import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      id="back-to-top"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-sm bg-marker text-white shadow-card transition-opacity duration-300 hover:opacity-90 ${
        show ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ChevronUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
