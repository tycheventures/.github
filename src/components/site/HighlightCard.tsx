import { IndianRupee, Star, ThumbsUp, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const HIGHLIGHT_ICONS: Record<string, LucideIcon> = {
  "thumbs-up": ThumbsUp,
  rupee: IndianRupee,
  star: Star,
  team: Users,
};

type Props = {
  icon: string;
  title: string;
  text: string;
  /** Heading level used for the card title. */
  as?: "h2" | "h3";
};

export function HighlightCard({ icon, title, text, as: Heading = "h3" }: Props) {
  const Icon = HIGHLIGHT_ICONS[icon] ?? Star;

  return (
    <article className="flex h-full flex-col items-center rounded-sm bg-card px-6 py-9 text-center shadow-card transition-shadow duration-300 hover:shadow-card-hover">
      <Icon className="h-10 w-10 text-primary" aria-hidden="true" strokeWidth={1.5} />
      <Heading className="mt-5 text-lg font-bold leading-6 text-heading">{title}</Heading>
      <p className="mt-4 text-[15px] leading-[25px] text-muted-foreground">{text}</p>
    </article>
  );
}
