import { SectionHeader } from "@/components/shared/section-header";
import { EmptyState } from "@/components/shared/empty-state";
import { CategoryCard } from "./category-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Category } from "@/types/category.types";

interface CategorySectionProps {
  categories: Category[];
  isLoading?: boolean;
}

export const CategorySection = ({ categories, isLoading = false }: CategorySectionProps) => {
  return (
    <section aria-labelledby="top-categories-heading">
      <SectionHeader title="Top Categories" seeAllHref="/categories" className="mb-4" />

      {isLoading ? (
        <div className="grid grid-cols-3 gap-3 md:grid-cols-5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-24 rounded-xl" />
          ))}
        </div>
      ) : categories.length === 0 ? (
        <EmptyState title="No categories available" description="Please check back soon." />
      ) : (
        <div className="grid grid-cols-3 gap-3 md:grid-cols-5">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} variant="tile" />
          ))}
        </div>
      )}
    </section>
  );
};