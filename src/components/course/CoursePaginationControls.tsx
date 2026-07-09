"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CoursePaginationControlsProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

/** Builds a compact page list with ellipses, e.g. 1 … 4 5 6 … 12. */
const buildPageList = (page: number, totalPages: number): (number | "ellipsis")[] => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }
  const pages = new Set<number>([1, totalPages, page, page - 1, page + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= totalPages).sort((a, b) => a - b);

  const result: (number | "ellipsis")[] = [];
  sorted.forEach((p, index) => {
    if (index > 0 && p - sorted[index - 1] > 1) {
      result.push("ellipsis");
    }
    result.push(p);
  });
  return result;
};

export const CoursePaginationControls = ({
  page,
  totalPages,
  onPageChange,
}: CoursePaginationControlsProps) => {
  if (totalPages <= 1) return null;

  const pageList = buildPageList(page, totalPages);

  return (
    <nav aria-label="Course pagination" className="mt-10 flex items-center justify-center gap-1.5">
      <Button
        type="button"
        variant="outline"
        size="icon"
        className="rounded-lg"
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" aria-hidden="true" />
      </Button>

      {pageList.map((item, index) =>
        item === "ellipsis" ? (
          <span key={`ellipsis-${index}`} className="px-2 text-sm text-muted-foreground">
            …
          </span>
        ) : (
          <Button
            key={item}
            type="button"
            variant="outline"
            onClick={() => onPageChange(item)}
            aria-current={item === page ? "page" : undefined}
            className={cn(
              "h-9 w-9 rounded-lg p-0 text-sm",
              item === page && "border-primary bg-primary text-primary-foreground hover:bg-primary/90",
            )}
          >
            {item}
          </Button>
        ),
      )}

      <Button
        type="button"
        variant="outline"
        size="icon"
        className="rounded-lg"
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
      </Button>
    </nav>
  );
};
