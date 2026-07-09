import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CATEGORY_ITEMS } from "@/constants/landing-data";
import { ICON_MAP } from "@/lib/utils/icon-map";
import { cn } from "@/lib/utils";

export const CategoriesSection = ()  => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mb-10 flex flex-col gap-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Explore
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-[32px]">
          Find the right track for your goal
        </h2>
        <p className="max-w-2xl text-base text-muted-foreground">
          From school foundation to competitive exams, every category is
          taught by educators who&apos;ve cracked the exam themselves.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORY_ITEMS.map((category) => {
          const Icon = ICON_MAP[category.icon];
          return (
            <Link
              key={category.id}
              href={category.href}
              className="group relative flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="flex items-center gap-4">
                <span
                  className={cn(
                    "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                    category.accent === "primary"
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary/15 text-secondary-foreground",
                  )}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-semibold text-foreground">{category.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {category.courseCount} courses
                  </p>
                </div>
              </div>
              <ArrowUpRight
                className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
                aria-hidden="true"
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};
