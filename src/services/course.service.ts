import { MOCK_COURSES } from "@/constants/mock/mock-courses";
import { CATEGORY_ITEMS } from "@/constants/landing-data";
import type { Course, CourseFilters, PaginatedCourses } from "@/types/course.types";
import { COURSES_PER_PAGE } from "@/types/course.types";

const CATEGORY_SLUG_TO_TITLE: Record<string, string> = Object.fromEntries(
  CATEGORY_ITEMS.map((category) => [category.slug, category.title]),
);

const priceMatchesBucket = (price: number, bucket: string): boolean => {
  if (bucket === "under-3000") return price < 3000;
  if (bucket === "3000-6000") return price >= 3000 && price <= 6000;
  if (bucket === "above-6000") return price > 6000;
  return true;
};

const sortCourses = (courses: Course[], sort: CourseFilters["sort"]): Course[] => {
  const sorted = [...courses];
  switch (sort) {
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "newest":
      return sorted.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
    case "popular":
    default:
      return sorted.sort((a, b) => b.studentCount - a.studentCount);
  }
};

/**
 * Mirrors the async, filter-in/paginated-out signature the real
 * `GET /courses` Fastify endpoint will expose. Swapping the body for an
 * axiosInstance.get call is the only change needed once the backend
 * exists — nothing above this layer (RTK Query, hooks, components)
 * needs to change.
 */
export const getCourses = async (filters: CourseFilters): Promise<PaginatedCourses> => {
  await new Promise((resolve) => setTimeout(resolve, 350));

  const selectedCategoryTitles = filters.categories.map(
    (slug) => CATEGORY_SLUG_TO_TITLE[slug] ?? slug,
  );

  const filtered = MOCK_COURSES.filter((course) => {
    const matchesSearch = filters.search
      ? course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        course.instructor.toLowerCase().includes(filters.search.toLowerCase())
      : true;

    const matchesCategory = selectedCategoryTitles.length
      ? selectedCategoryTitles.includes(course.category)
      : true;

    const matchesLevel = filters.levels.length ? filters.levels.includes(course.level) : true;

    const matchesPrice = filters.priceBuckets.length
      ? filters.priceBuckets.some((bucket) => priceMatchesBucket(course.price, bucket))
      : true;

    const matchesRating = filters.minRating ? course.rating >= filters.minRating : true;

    return matchesSearch && matchesCategory && matchesLevel && matchesPrice && matchesRating;
  });

  const sorted = sortCourses(filtered, filters.sort);

  const total = sorted.length;
  const totalPages = Math.max(1, Math.ceil(total / COURSES_PER_PAGE));
  const page = Math.min(filters.page, totalPages);
  const start = (page - 1) * COURSES_PER_PAGE;
  const items = sorted.slice(start, start + COURSES_PER_PAGE);

  return { items, total, page, totalPages };
};

/** Top-rated courses outside the student's active filters — powers the
 * "Recommended for you" strip, which should feel personal, not filtered. */
export const getRecommendedCourses = async (excludeIds: string[] = []): Promise<Course[]> => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return [...MOCK_COURSES]
    .filter((course) => !excludeIds.includes(course.id))
    .sort((a, b) => b.rating - a.rating || b.studentCount - a.studentCount)
    .slice(0, 4);
};
