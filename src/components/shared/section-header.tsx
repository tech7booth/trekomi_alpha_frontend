import Link from "next/link";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  seeAllHref?: string;
  className?: string;
}

export const SectionHeader = ({ title, seeAllHref, className }: SectionHeaderProps) => {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <h2 className="text-subheading font-bold text-foreground">{title}</h2>
      {seeAllHref && (
        <Link
          href={seeAllHref}
          className={cn(
            "text-caption font-medium text-primary transition-colors hover:text-primary/80",
            "focus-visible:outline-none focus-visible:underline"
          )}
        >
          See All
        </Link>
      )}
    </div>
  );
};