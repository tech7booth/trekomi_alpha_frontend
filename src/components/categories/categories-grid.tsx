"use client";

import { useMemo, useState } from "react";
import { Search, LayoutGrid } from "lucide-react";
import { CategoryCard } from "@/components/shared/category-card";
import { EmptyState } from "@/components/shared/empty-state";
import { Skeleton } from "@/components/ui/skeleton";
import type { Category } from "@/types/category.types";
import { ALL_CATEGORIES } from "@/constants/mock/categories-mock";

import { cn } from "@/lib/utils";
import {
  Mic,
  Presentation,
  Landmark,
  GraduationCap,
  BookOpen,
  UserRound,
  Calculator,
  Globe,
} from "lucide-react";

const iconMap = {
  Mic,
  Presentation,
  Landmark,
  GraduationCap,
  BookOpen,
  UserRound,
  Calculator,
  Globe,
} as const;

interface CategoriesGridProps {
  categories?: Category[];
  isLoading?: boolean;
}

export const CategoriesGrid = ({ categories = ALL_CATEGORIES, isLoading = false }: CategoriesGridProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    const query = searchQuery.toLowerCase();
    return categories.filter((category) => category.title.toLowerCase().includes(query));
  }, [categories, searchQuery]);

  return (
    <div className="space-y-5">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search categories..."
          aria-label="Search categories"
          className={cn(
            "w-full rounded-xl border border-input bg-background py-2.5 pl-9 pr-4 text-body text-foreground placeholder:text-muted-foreground",
            "outline-none transition-colors focus:ring-2 focus:ring-ring"
          )}
        />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} className="h-24 rounded-xl" />
          ))}
        </div>
      ) : filteredCategories.length === 0 ? (
        <EmptyState icon={LayoutGrid} title="No categories found" description="Try a different search term." />
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {filteredCategories.map((category) => (
            <CategoryCard key={category.id} category={category} variant="row" />
          ))}
        </div>
      )}
    </div>
  );
};