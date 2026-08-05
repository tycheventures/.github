import type { LucideIcon } from "lucide-react";

export function SectionTitle({
  children,
  icon: Icon,
}: {
  children: React.ReactNode;
  icon: LucideIcon;
}) {
  return (
    <div className="text-center">
      <h2 className="section-title text-[26px] uppercase leading-tight md:text-[32px]">{children}</h2>
      <div className="mt-3 flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-border" />
        <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
        <span className="h-px w-12 bg-border" />
      </div>
    </div>
  );
}
