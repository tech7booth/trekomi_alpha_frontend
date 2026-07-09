"use client";

import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useDebounce } from "@/hooks/useDebounce";

interface CourseSearchBarProps {
  defaultValue: string;
  onSearch: (value: string) => void;
  placeholder?: string;
}

/**
 * Uncontrolled from the parent's perspective — keeps every keystroke local
 * and only calls onSearch (which pushes to the URL) once typing pauses.
 * defaultValue is only read on mount/URL-driven reset, not on every render,
 * so it doesn't fight the user's typing.
 */
export const CourseSearchBar = ({
  defaultValue,
  onSearch,
  placeholder = "Search courses, instructors, or topics",
}: CourseSearchBarProps)  => {
  const [value, setValue] = useState(defaultValue);
  const debouncedValue = useDebounce(value, 400);
  const isFirstRun = useRef(true);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    onSearch(debouncedValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <div className="relative w-full">
      <Search
        className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden="true"
      />
      <Input
        type="search"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder={placeholder}
        aria-label="Search courses"
        className="h-12 rounded-xl bg-card pl-10 pr-10 text-base"
      />
      {value && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          aria-label="Clear search"
          onClick={() => setValue("")}
          className="absolute right-1.5 top-1/2 h-8 w-8 -translate-y-1/2 rounded-lg"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </Button>
      )}
    </div>
  );
};
