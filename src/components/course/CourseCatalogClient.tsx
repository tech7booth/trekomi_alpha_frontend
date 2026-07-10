"use client";

import { useCourseFilters } from "@/hooks/useCourseFilters";
import { useGetCoursesQuery } from "@/features/courses/coursesApi";
import { CourseSearchBar } from "@/components/course/CourseSearchBar";
// import { CourseSortSelect } from "@/components/course/CourseSortSelect";
// import { CourseFilterSidebar } from "@/components/course/CourseFilterSidebar";
import { CourseFilterDrawer } from "@/components/course/CourseFilterDrawer";
import { ActiveFiltersBar } from "@/components/course/ActiveFiltersBar";
import { CourseGrid } from "@/components/course/CourseGrid";
import { CoursePaginationControls } from "@/components/course/CoursePaginationControls";
// import { RecommendedCoursesSection } from "@/components/course/RecommendedCoursesSection";

export const CourseCatalogClient = ()  => {
  const { filters, setFilters, resetFilters } = useCourseFilters();
  const { data, isLoading, isFetching, isError } = useGetCoursesQuery(filters);

  const activeFilterCount =
    filters.categories.length +
    filters.levels.length +
    filters.priceBuckets.length +
    (filters.minRating ? 1 : 0);

  return (
    <div className="mx-auto max-w-7xl px-4 pt-2 pb-10 sm:px-6 lg:px-8">

      
      <div className="mb-6 flex gap-3 flex-row items-center">
        <CourseSearchBar
          defaultValue={filters.search}
          onSearch={(value) => setFilters({ search: value })}
        />

        <div className="flex gap-3">
          <CourseFilterDrawer
            filters={filters}
            onChange={(patch) => setFilters(patch)}
            onClear={resetFilters}
            activeFilterCount={activeFilterCount}
          />
          {/* <CourseSortSelect value={filters.sort} onChange={(sort) => setFilters({ sort }, { resetPage: false })} /> */}
        </div>

      </div>
      {activeFilterCount > 0 && (
        <div className="mb-6">
          <ActiveFiltersBar filters={filters} onChange={(patch) => setFilters(patch)} />
        </div>
      )}


      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-[32px]">
          Explore courses
        </h1>
        <p className="mt-2 max-w-2xl text-base text-muted-foreground">
          {data ? `${data.total.toLocaleString("en-IN")} courses` : "Loading courses"} across
          JEE &amp; NEET, UPSC, banking, tech, and design.
        </p>
      </div>

      {/* <RecommendedCoursesSection /> */}


      <div className="flex gap-8">
        {/* <CourseFilterSidebar
          filters={filters}
          onChange={(patch) => setFilters(patch)}
          onClear={resetFilters}
          activeFilterCount={activeFilterCount}
        /> */}

        <div className="min-w-0 flex-1">
          <CourseGrid
            courses={data?.items ?? []}
            isLoading={isLoading || isFetching}
            isError={isError}
            onClearFilters={resetFilters}
          />
          {data && (
            <CoursePaginationControls
              page={data.page}
              totalPages={data.totalPages}
              onPageChange={(page) => setFilters({ page }, { resetPage: false })}
            />
          )}
        </div>
      </div>
    </div>
  );
};
