"use client";

import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { CourseFilterPanel } from "@/components/course/CourseFilterPanel";
import type { CourseFilters } from "@/types/course.types";

interface CourseFilterDrawerProps {
  filters: CourseFilters;
  onChange: (patch: Partial<CourseFilters>) => void;
  onClear: () => void;
  activeFilterCount: number;
}

export const CourseFilterDrawer = ({
  filters,
  onChange,
  onClear,
  activeFilterCount,
}: CourseFilterDrawerProps)  => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button type="button" variant="outline" className="h-11 rounded-xl">
          <SlidersHorizontal className="mr-2 h-4 w-4" aria-hidden="true" />
          <span className="max-md:hidden">Filters</span>
          {activeFilterCount > 0 && (
            <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
              {activeFilterCount}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-75 overflow-y-auto">
        <div className="px-4 pt-10 ">
          <CourseFilterPanel
            filters={filters}
            onChange={onChange}
            onClear={onClear}
            activeFilterCount={activeFilterCount}
          />
        </div>
        <SheetClose asChild>
          <Button className="my-6 mx-4 rounded-xl bg-primary hover:bg-primary/90">
            Show results
          </Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};
