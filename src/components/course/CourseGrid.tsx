import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CourseCard, CourseCardSkeleton } from "@/components/course/CourseCard";
import type { Course } from "@/types/course.types";

interface CourseGridProps {
  courses: Course[];
  isLoading: boolean;
  isError: boolean;
  onClearFilters: () => void;
}

export const CourseGrid = ({
  courses,
  isLoading,
  isError,
  onClearFilters,
}: CourseGridProps)  => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <CourseCardSkeleton key={`course-skeleton-${index}`} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card px-6 py-16 text-center">
        <p className="font-medium text-foreground">Couldn&apos;t load courses</p>
        <p className="mt-1 max-w-sm text-sm text-muted-foreground">
          Something went wrong on our end. Please refresh the page or try again shortly.
        </p>
      </div>
    );
  }

  if (courses.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card px-6 py-16 text-center">
        <SearchX className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
        <p className="mt-3 font-medium text-foreground">No courses match your filters</p>
        <p className="mt-1 max-w-sm text-sm text-muted-foreground">
          Try removing a filter or searching for a different topic.
        </p>
        <Button
          type="button"
          variant="outline"
          onClick={onClearFilters}
          className="mt-5 rounded-xl"
        >
          Clear all filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};
