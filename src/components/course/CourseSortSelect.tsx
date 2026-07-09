"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SORT_OPTIONS, type CourseSortOption } from "@/types/course.types";

interface CourseSortSelectProps {
  value: CourseSortOption;
  onChange: (value: CourseSortOption) => void;
}

export const CourseSortSelect = ({ value, onChange }: CourseSortSelectProps)  => {
  return (
    <Select value={value} onValueChange={(next) => onChange(next as CourseSortOption)}>
      <SelectTrigger className="h-11 w-full rounded-xl sm:w-56" aria-label="Sort courses">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        {SORT_OPTIONS.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
