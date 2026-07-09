import type { CourseSummary } from "@/types/landing.types";

/** A course as returned by the catalog endpoint. Landing page's
 * CourseSummary is a strict subset — Course adds fields only the
 * catalog/filtering layer needs. */
export interface Course extends CourseSummary {
  createdAt: string;
}

export type CourseSortOption =
  | "popular"
  | "rating"
  | "price-asc"
  | "price-desc"
  | "newest";

export type PriceBucket = "under-3000" | "3000-6000" | "above-6000";

export type RatingThreshold = 4.5 | 4.0;

export interface CourseFilters {
  search: string;
  categories: string[];
  levels: Course["level"][];
  priceBuckets: PriceBucket[];
  minRating: RatingThreshold | null;
  sort: CourseSortOption;
  page: number;
}

export const DEFAULT_COURSE_FILTERS: CourseFilters = {
  search: "",
  categories: [],
  levels: [],
  priceBuckets: [],
  minRating: null,
  sort: "popular",
  page: 1,
};

export const COURSES_PER_PAGE = 8;

export interface PaginatedCourses {
  items: Course[];
  total: number;
  page: number;
  totalPages: number;
}

export const SORT_OPTIONS: { value: CourseSortOption; label: string }[] = [
  { value: "popular", label: "Most popular" },
  { value: "rating", label: "Highest rated" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "newest", label: "Newest" },
];

export const PRICE_BUCKET_OPTIONS: { value: PriceBucket; label: string }[] = [
  { value: "under-3000", label: "Under ₹3,000" },
  { value: "3000-6000", label: "₹3,000 – ₹6,000" },
  { value: "above-6000", label: "Above ₹6,000" },
];

export const RATING_OPTIONS: { value: RatingThreshold; label: string }[] = [
  { value: 4.5, label: "4.5 & up" },
  { value: 4.0, label: "4.0 & up" },
];

export const LEVEL_OPTIONS: Course["level"][] = ["Beginner", "Intermediate", "Advanced"];



export interface ContinueLearningCourse {
  id: string;
  title: string;
  categoryLabel: string;
  progressPercent: number;
  thumbnailUrl: string;
  href: string;
}