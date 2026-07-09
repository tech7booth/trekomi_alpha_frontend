import { z } from "zod";
import type { CourseFilters } from "@/types/course.types";
import { DEFAULT_COURSE_FILTERS } from "@/types/course.types";

const csv = (raw: string | null): string[] =>
  raw ? raw.split(",").filter(Boolean) : [];

/**
 * URL search params are always strings (or absent). This schema is the
 * single place that turns that untrusted string bag into a typed,
 * defaulted CourseFilters object — used by useCourseFilters on both the
 * initial server-rendered read and every client-side update.
 */
export const courseFiltersSchema = z.object({
  search: z.string().default(DEFAULT_COURSE_FILTERS.search),
  categories: z.array(z.string()).default(DEFAULT_COURSE_FILTERS.categories),
  levels: z
    .array(z.enum(["Beginner", "Intermediate", "Advanced"]))
    .default(DEFAULT_COURSE_FILTERS.levels),
  priceBuckets: z
    .array(z.enum(["under-3000", "3000-6000", "above-6000"]))
    .default(DEFAULT_COURSE_FILTERS.priceBuckets),
  minRating: z.union([z.literal(4.5), z.literal(4.0), z.null()]).default(DEFAULT_COURSE_FILTERS.minRating),
  sort: z
    .enum(["popular", "rating", "price-asc", "price-desc", "newest"])
    .default(DEFAULT_COURSE_FILTERS.sort),
  page: z.number().int().min(1).default(DEFAULT_COURSE_FILTERS.page),
});

export const parseCourseFiltersFromSearchParams = (
  searchParams: URLSearchParams,
): CourseFilters => {
  const raw = {
    search: searchParams.get("search") ?? undefined,
    categories: csv(searchParams.get("category")),
    levels: csv(searchParams.get("level")),
    priceBuckets: csv(searchParams.get("price")),
    minRating: searchParams.get("rating") ? Number(searchParams.get("rating")) : null,
    sort: searchParams.get("sort") ?? undefined,
    page: searchParams.get("page") ? Number(searchParams.get("page")) : undefined,
  };

  const result = courseFiltersSchema.safeParse(raw);
  return result.success ? (result.data as CourseFilters) : DEFAULT_COURSE_FILTERS;
};

export const courseFiltersToSearchParams = (filters: CourseFilters): URLSearchParams => {
  const params = new URLSearchParams();
  if (filters.search) params.set("search", filters.search);
  if (filters.categories.length) params.set("category", filters.categories.join(","));
  if (filters.levels.length) params.set("level", filters.levels.join(","));
  if (filters.priceBuckets.length) params.set("price", filters.priceBuckets.join(","));
  if (filters.minRating) params.set("rating", String(filters.minRating));
  if (filters.sort !== "popular") params.set("sort", filters.sort);
  if (filters.page > 1) params.set("page", String(filters.page));
  return params;
};
