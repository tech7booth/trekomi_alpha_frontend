"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CATEGORY_ITEMS } from "@/constants/landing-data";
import {
  LEVEL_OPTIONS,
  PRICE_BUCKET_OPTIONS,
  RATING_OPTIONS,
  type CourseFilters,
} from "@/types/course.types";

interface CourseFilterPanelProps {
  filters: CourseFilters;
  onChange: (patch: Partial<CourseFilters>) => void;
  onClear: () => void;
  activeFilterCount: number;
}

const toggleValue = <T,>(list: T[], value: T): T[] =>
  list.includes(value) ? list.filter((item) => item !== value) : [...list, value];

export const CourseFilterPanel = ({
  filters,
  onChange,
  onClear,
  activeFilterCount,
}: CourseFilterPanelProps)  => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-foreground">Filters</h2>
        {activeFilterCount > 0 && (
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={onClear}
            className="h-auto rounded-lg px-2 py-1 text-xs text-primary hover:text-primary"
          >
            Clear all ({activeFilterCount})
          </Button>
        )}
      </div>

      <fieldset className="flex flex-col gap-3">
        <legend className="mb-1 text-sm font-semibold text-foreground">Category</legend>
        {CATEGORY_ITEMS.map((category) => (
          <div key={category.slug} className="flex items-center gap-2.5">
            <Checkbox
              id={`category-${category.slug}`}
              checked={filters.categories.includes(category.slug!)}
              onCheckedChange={() =>
                onChange({ categories: toggleValue(filters.categories, category.slug!) })
              }
            />
            <Label
              htmlFor={`category-${category.slug}`}
              className="cursor-pointer text-sm font-normal text-muted-foreground"
            >
              {category.title}
            </Label>
          </div>
        ))}
      </fieldset>

      <Separator />

      <fieldset className="flex flex-col gap-3">
        <legend className="mb-1 text-sm font-semibold text-foreground">Level</legend>
        {LEVEL_OPTIONS.map((level) => (
          <div key={level} className="flex items-center gap-2.5">
            <Checkbox
              id={`level-${level}`}
              checked={filters.levels.includes(level)}
              onCheckedChange={() => onChange({ levels: toggleValue(filters.levels, level) })}
            />
            <Label htmlFor={`level-${level}`} className="cursor-pointer text-sm font-normal text-muted-foreground">
              {level}
            </Label>
          </div>
        ))}
      </fieldset>

      <Separator />

      <fieldset className="flex flex-col gap-3">
        <legend className="mb-1 text-sm font-semibold text-foreground">Price</legend>
        {PRICE_BUCKET_OPTIONS.map((bucket) => (
          <div key={bucket.value} className="flex items-center gap-2.5">
            <Checkbox
              id={`price-${bucket.value}`}
              checked={filters.priceBuckets.includes(bucket.value)}
              onCheckedChange={() =>
                onChange({ priceBuckets: toggleValue(filters.priceBuckets, bucket.value) })
              }
            />
            <Label htmlFor={`price-${bucket.value}`} className="cursor-pointer text-sm font-normal text-muted-foreground">
              {bucket.label}
            </Label>
          </div>
        ))}
      </fieldset>

      <Separator />

      <fieldset className="flex flex-col gap-3">
        <legend className="mb-1 text-sm font-semibold text-foreground">Rating</legend>
        {RATING_OPTIONS.map((rating) => (
          <div key={rating.value} className="flex items-center gap-2.5">
            <Checkbox
              id={`rating-${rating.value}`}
              checked={filters.minRating === rating.value}
              onCheckedChange={(checked) =>
                onChange({ minRating: checked ? rating.value : null })
              }
            />
            <Label htmlFor={`rating-${rating.value}`} className="cursor-pointer text-sm font-normal text-muted-foreground">
              {rating.label}
            </Label>
          </div>
        ))}
      </fieldset>
    </div>
  );
};
