import Image from "next/image";
import Link from "next/link";
import { Clock, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { CourseSummary } from "@/types/landing.types";

interface CourseCardProps {
  course: CourseSummary;
}

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

/**
 * Read-only summary card. Deliberately takes the full CourseSummary object
 * rather than individual scalar props — the shape is stable across every
 * surface that renders a course (catalog, search, wishlist, landing).
 */
export const CourseCard = ({ course }: CourseCardProps)  => {
  const discountPercent = course.originalPrice
    ? Math.round(100 - (course.price / course.originalPrice) * 100)
    : null;

  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <Image
          src={course.thumbnailUrl}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {course.isBestseller && (
          <Badge className="absolute left-3 top-3 rounded-md bg-secondary text-secondary-foreground hover:bg-secondary">
            Bestseller
          </Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs font-medium text-primary">{course.category}</p>
        <h3 className="line-clamp-2 text-base font-semibold leading-snug text-foreground">
          {course.title}
        </h3>
        <p className="text-sm text-muted-foreground">{course.instructor}</p>

        <div className="flex items-center gap-2 text-sm">
          <span className="flex items-center gap-1 font-semibold text-foreground">
            <Star className="h-3.5 w-3.5 fill-secondary text-secondary" aria-hidden="true" />
            {course.rating.toFixed(1)}
          </span>
          <span className="text-muted-foreground">
            ({course.reviewCount.toLocaleString("en-IN")})
          </span>
          <span className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {course.durationHours}h
          </span>
        </div>

        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-lg font-bold text-foreground">
            {currencyFormatter.format(course.price)}
          </span>
          {course.originalPrice && (
            <>
              <span className="text-sm text-muted-foreground line-through">
                {currencyFormatter.format(course.originalPrice)}
              </span>
              <span className="text-xs font-semibold text-primary">
                {discountPercent}% off
              </span>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

/** Skeleton placeholder matching CourseCard's exact layout, for loading states. */
export const CourseCardSkeleton = ()  => {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="aspect-video w-full animate-pulse bg-muted" />
      <div className="flex flex-col gap-2 p-4">
        <div className="h-3 w-20 animate-pulse rounded bg-muted" />
        <div className="h-4 w-full animate-pulse rounded bg-muted" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
        <div className="h-3 w-24 animate-pulse rounded bg-muted" />
        <div className="mt-1 h-5 w-28 animate-pulse rounded bg-muted" />
      </div>
    </div>
  );
};
