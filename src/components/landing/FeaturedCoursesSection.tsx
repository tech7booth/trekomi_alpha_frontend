import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FEATURED_COURSES } from "@/constants/landing-data";
import { CourseCard } from "@/components/course/CourseCard";

export const FeaturedCoursesSection = ()  => {
  return (
    <section className="bg-muted/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Popular right now
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-[32px]">
              Courses students are choosing this month
            </h2>
          </div>
          <Button asChild variant="outline" className="rounded-xl">
            <Link href="/courses">
              View all courses
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        {FEATURED_COURSES.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURED_COURSES.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-border bg-card p-12 text-center">
            <p className="font-medium text-foreground">No courses available yet</p>
            <p className="mt-1 text-sm text-muted-foreground">
              New batches are added every week — check back soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
