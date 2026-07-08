import Link from "next/link";
import type { QuickAccessItem as QuickAccessItemType } from "@/types/category.types";
import { ICON_COLOR_THEMES } from "@/constants/icon-color-themes";
import { cn } from "@/lib/utils";

interface QuickAccessItemProps {
  item: QuickAccessItemType;
}

export const QuickAccessItem = ({ item }: QuickAccessItemProps) => {
  const { label, href, icon: Icon, colorTheme } = item;

  return (
    <Link
      href={href}
      className={cn(
        "flex shrink-0 flex-col items-center gap-2 rounded-xl p-2 text-center transition-transform",
        "hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      )}
    >
      <div
        className={cn(
          "flex size-14 items-center justify-center rounded-xl",
          ICON_COLOR_THEMES[colorTheme]
        )}
      >
        <Icon className="size-6" />
      </div>
      <span className="w-16 text-caption font-medium text-foreground">{label}</span>
    </Link>
  );
};