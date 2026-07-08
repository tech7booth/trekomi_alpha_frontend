import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ContinueLearningCardProps {
  title: string;
  categoryLabel: string;
  progressPercent: number;
  thumbnailUrl: string;
  href: string;
}

export const ContinueLearningCard = ({
  title,
  categoryLabel,
  progressPercent,
  thumbnailUrl,
  href,
}: ContinueLearningCardProps) => {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 rounded-xl border border-border bg-card p-3 transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="relative size-16 shrink-0 overflow-hidden rounded-xl">
        <Image src={thumbnailUrl} alt={title} fill sizes="64px" className="object-cover" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-title font-semibold text-foreground">{title}</p>
        <p className="text-caption text-muted-foreground">{categoryLabel}</p>
        <div className="mt-2 flex items-center gap-2">
          <Progress value={progressPercent} className="h-1.5 flex-1" />
          <span className="text-small font-medium text-muted-foreground">
            {progressPercent}%
          </span>
        </div>
      </div>

      <span
        aria-hidden="true"
        className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
      >
        <Play className="size-4 fill-current" />
      </span>
    </Link>
  );
};