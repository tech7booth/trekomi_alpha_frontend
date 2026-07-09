import { CourseCardSkeleton } from "@/components/course/CourseCard";

export const CourseCatalogSkeleton = ()  => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 h-8 w-64 animate-pulse rounded bg-muted" />
      <div className="mb-6 h-12 w-full animate-pulse rounded-xl bg-muted" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <CourseCardSkeleton key={`catalog-skeleton-${index}`} />
        ))}
      </div>
    </div>
  );
};
