import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Category } from "@/types/category.types";
import { ICON_COLOR_THEMES } from "@/constants/icon-color-themes";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: Category;
  variant?: "row" | "tile";
}

export const CategoryCard = ({ category, variant = "row" }: CategoryCardProps) => {
  const { title, courseCount, href, icon: Icon, colorTheme } = category;

  if (variant === "tile") {
    return (
      <Link
        href={href}
        className={cn(
          "flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 text-center transition-colors",
          "hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        )}
      >
        <div className={cn("flex size-12 items-center justify-center rounded-xl", ICON_COLOR_THEMES[colorTheme])}>
          <Icon className="size-5" />
        </div>
        <span className="text-caption font-medium text-foreground">{title}</span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-colors",
        "hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      )}
    >
      <div className="flex items-center gap-3">
        <div className={cn("flex size-12 shrink-0 items-center justify-center rounded-xl", ICON_COLOR_THEMES[colorTheme])}>
          <Icon className="size-5" />
        </div>
        <div>
          <p className="text-title font-semibold text-foreground">{title}</p>
          <p className="text-caption text-muted-foreground">{courseCount} Courses</p>
        </div>
      </div>
      <ChevronRight className="size-5 text-muted-foreground" />
    </Link>
  );
};