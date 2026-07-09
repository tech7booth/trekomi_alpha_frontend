"use client";

import { X } from "lucide-react";
import { CATEGORY_ITEMS } from "@/constants/landing-data";
import { PRICE_BUCKET_OPTIONS, RATING_OPTIONS, type CourseFilters } from "@/types/course.types";

interface ActiveFiltersBarProps {
  filters: CourseFilters;
  onChange: (patch: Partial<CourseFilters>) => void;
}

interface Chip {
  key: string;
  label: string;
  onRemove: () => void;
}

export const ActiveFiltersBar = ({ filters, onChange }: ActiveFiltersBarProps) => {
  const chips: Chip[] = [
    ...filters.categories.map((slug: any) => {
      const category = CATEGORY_ITEMS.find((item) => item.slug === slug);
      return {
        key: `category-${slug}`,
        label: category?.title ?? slug,
        onRemove: () =>
          onChange({ categories: filters.categories.filter((item) => item !== slug) }),
      };
    }),
    ...filters.levels.map((level) => ({
      key: `level-${level}`,
      label: level,
      onRemove: () => onChange({ levels: filters.levels.filter((item) => item !== level) }),
    })),
    ...filters.priceBuckets.map((bucket) => ({
      key: `price-${bucket}`,
      label: PRICE_BUCKET_OPTIONS.find((option) => option.value === bucket)?.label ?? bucket,
      onRemove: () =>
        onChange({ priceBuckets: filters.priceBuckets.filter((item) => item !== bucket) }),
    })),
    ...(filters.minRating
      ? [
        {
          key: "rating",
          label: RATING_OPTIONS.find((option) => option.value === filters.minRating)?.label ?? "",
          onRemove: () => onChange({ minRating: null }),
        },
      ]
      : []),
  ];

  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2" role="list" aria-label="Active filters">
      {chips.map((chip) => (
        <button
          key={chip.key}
          type="button"
          role="listitem"
          onClick={chip.onRemove}
          className="flex items-center gap-1.5 rounded-full border border-border bg-card py-1.5 pl-3 pr-2 text-xs font-medium text-foreground transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {chip.label}
          <X className="h-3 w-3 text-muted-foreground" aria-hidden="true" />
          <span className="sr-only">Remove {chip.label} filter</span>
        </button>
      ))}
    </div>
  );
};
