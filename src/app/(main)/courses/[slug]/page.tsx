import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Star, Users, Clock, BarChart3 } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { MOCK_COURSES } from "@/constants/mock/mock-courses";

interface CourseDetailPageProps {
  params: { slug: string };
}

export const generateStaticParams = (): { slug: string }[] =>
  MOCK_COURSES.map((course) => ({ slug: course.slug }));

export const generateMetadata = ({ params }: CourseDetailPageProps): Metadata => {
  const course = MOCK_COURSES.find((item) => item.slug === params.slug);
  return {
    title: course ? course.title : "Course not found",
    description: course
      ? `${course.title} by ${course.instructor} — ${course.durationHours} hours, ${course.level} level.`
      : undefined,
  };
};

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

/**
 * Deliberately minimal: this resolves the CourseCard links so nothing
 * 404s, and establishes the data-fetch pattern (slug -> course lookup,
 * generateStaticParams for SSG, notFound() for invalid slugs). The full
 * detail experience — curriculum accordion, video player, reviews,
 * related courses — is a separate, larger piece of work.
 */
const CourseDetailPage = async ({ params }: CourseDetailPageProps)  => {
  const course = MOCK_COURSES.find(async (item) => item.slug == (await params).slug);

  if (!course) {
    console.log((await params).slug);
    notFound();
  }

  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-primary">{course.category}</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {course.title}
          </h1>
          <p className="mt-3 text-muted-foreground">by {course.instructor}</p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1 font-semibold text-foreground">
              <Star className="h-4 w-4 fill-secondary text-secondary" aria-hidden="true" />
              {course.rating.toFixed(1)} ({course.reviewCount.toLocaleString("en-IN")} reviews)
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-4 w-4" aria-hidden="true" />
              {course.studentCount.toLocaleString("en-IN")} students
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {course.durationHours} hours
            </span>
            <span className="flex items-center gap-1">
              <BarChart3 className="h-4 w-4" aria-hidden="true" />
              {course.level}
            </span>
          </div>

          <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-xl border border-border bg-muted">
            <Image src={course.thumbnailUrl} alt={course.title} fill className="object-cover" />
          </div>

          <div className="mt-8 flex items-center gap-4 rounded-xl border border-border bg-card p-6">
            <div>
              <p className="text-2xl font-bold text-foreground">
                {currencyFormatter.format(course.price)}
              </p>
              {course.originalPrice && (
                <p className="text-sm text-muted-foreground line-through">
                  {currencyFormatter.format(course.originalPrice)}
                </p>
              )}
            </div>
            <Button size="lg" className="ml-auto rounded-xl bg-primary hover:bg-primary/90">
              Enroll now
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetailPage;
