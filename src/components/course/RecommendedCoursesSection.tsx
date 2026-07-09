"use client";

import { Sparkles } from "lucide-react";
import { useGetRecommendedCoursesQuery } from "@/features/courses/coursesApi";
import { CourseCard, CourseCardSkeleton } from "@/components/course/CourseCard";

export const RecommendedCoursesSection = () => {
  const { data: courses, isLoading, isError } = useGetRecommendedCoursesQuery();

  if (isError) return null;

  return (
    <section aria-labelledby="recommended-heading" className="mb-10">
      <div className="mb-4 flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-secondary" aria-hidden="true" />
        <h2 id="recommended-heading" className="text-lg font-semibold text-foreground">
          Recommended for you
        </h2>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:thin]">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <div key={`recommended-skeleton-${index}`} className="w-64 shrink-0">
                <CourseCardSkeleton />
              </div>
            ))
          : courses?.map((course) => (
              <div key={course.id} className="w-64 shrink-0">
                <CourseCard course={course} />
              </div>
            ))}
      </div>
    </section>
  );
};
