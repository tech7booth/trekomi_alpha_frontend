import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: number | string;
  colorTheme?: "blue" | "green" | "orange";
  isLoading?: boolean;
}

const THEME_CLASSES: Record<NonNullable<StatCardProps["colorTheme"]>, string> = {
  blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  green: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  orange: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
};

export const StatCard = ({ icon: Icon, label, value, colorTheme = "blue", isLoading }: StatCardProps) => {
  if (isLoading) {
    return <Skeleton className="h-24 rounded-xl" />;
  }

  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
      <div className={cn("flex size-11 shrink-0 items-center justify-center rounded-xl", THEME_CLASSES[colorTheme])}>
        <Icon className="size-5" />
      </div>
      <div className="min-w-0">
        <p className="text-title font-bold text-foreground">{value}</p>
        <p className="truncate text-caption text-muted-foreground">{label}</p>
      </div>
    </div>
  );
};