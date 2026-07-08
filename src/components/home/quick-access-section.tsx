import { SectionHeader } from "@/components/shared/section-header";
import { EmptyState } from "@/components/shared/empty-state";
import { QuickAccessItem } from "./quick-access-item";
import { Skeleton } from "@/components/ui/skeleton";
import type { QuickAccessItem as QuickAccessItemType } from "@/types/category.types";

interface QuickAccessSectionProps {
  items: QuickAccessItemType[];
  isLoading?: boolean;
}

export const QuickAccessSection = ({ items, isLoading = false }: QuickAccessSectionProps) => {
  return (
    <section aria-labelledby="quick-access-heading">
      <SectionHeader title="Quick Access" seeAllHref="/quick-access" className="mb-4" />

      {isLoading ? (
        <div className="flex gap-4 overflow-x-auto">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <Skeleton className="size-14 rounded-xl" />
              <Skeleton className="h-3 w-12 rounded" />
            </div>
          ))}
        </div>
      ) : items.length === 0 ? (
        <EmptyState title="No quick access items" description="Check back later." />
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-1 [scrollbar-width:none] md:grid md:grid-cols-5 md:overflow-visible">
          {items.map((item) => (
            <QuickAccessItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
};