"use client";

import { cn } from "@/lib/utils";

export interface TabFilterOption<T extends string> {
  value: T;
  label: string;
  count?: number;
}

interface TabFilterProps<T extends string> {
  options: TabFilterOption<T>[];
  value: T;
  onChange: (value: T) => void;
}

export const TabFilter = <T extends string>({ options, value, onChange }: TabFilterProps<T>) => {
  return (
    <div
      role="tablist"
      className="flex gap-2 overflow-x-auto pb-1 scrollbar-none [&::-webkit-scrollbar]:hidden"
    >
      {options.map((option) => {
        const isActive = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.value)}
            className={cn(
              "shrink-0 rounded-xl px-4 py-2 text-caption font-medium transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isActive
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )}
          >
            {option.label}
            {option.count !== undefined && (
              <span className={cn("ml-1.5", isActive ? "text-primary-foreground/70" : "text-muted-foreground/70")}>
                ({option.count})
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};