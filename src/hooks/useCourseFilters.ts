"use client";

import { useCallback, useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { CourseFilters } from "@/types/course.types";
import {
  courseFiltersToSearchParams,
  parseCourseFiltersFromSearchParams,
} from "@/lib/validations/course-filters.schema";

interface UseCourseFiltersResult {
  filters: CourseFilters;
  setFilters: (patch: Partial<CourseFilters>, options?: { resetPage?: boolean }) => void;
  resetFilters: () => void;
}

/**
 * Filters live in the URL, not component state — a filtered/sorted view
 * of the catalog is a real page a student should be able to bookmark or
 * share, and the back button should undo one filter change at a time.
 * This is why filters use this hook instead of React Hook Form: RHF
 * models form *submission*, this models live, URL-addressable view state.
 */
export const useCourseFilters = (): UseCourseFiltersResult => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filters = useMemo(
    () => parseCourseFiltersFromSearchParams(searchParams),
    [searchParams],
  );

  const setFilters = useCallback(
    (patch: Partial<CourseFilters>, options?: { resetPage?: boolean }) => {
      const next: CourseFilters = {
        ...filters,
        ...patch,
        page: options?.resetPage === false ? (patch.page ?? filters.page) : 1,
      };
      const nextParams = courseFiltersToSearchParams(next);
      router.push(`${pathname}?${nextParams.toString()}`, { scroll: false });
    },
    [filters, pathname, router],
  );

  const resetFilters = useCallback(() => {
    router.push(pathname, { scroll: false });
  }, [pathname, router]);

  return { filters, setFilters, resetFilters };
};
