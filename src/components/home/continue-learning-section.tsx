import { SectionHeader } from "@/components/shared/section-header";
import { EmptyState } from "@/components/shared/empty-state";
import { ContinueLearningCard } from "./continue-learning-card";
import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen } from "lucide-react";
import type { ContinueLearningCourse } from "@/types/course.types";

interface ContinueLearningSectionProps {
  courses: ContinueLearningCourse[];
  isLoading?: boolean;
}

export const ContinueLearningSection = ({
  courses,
  isLoading = false,
}: ContinueLearningSectionProps) => {
  return (
    <section aria-labelledby="continue-learning-heading">
      <SectionHeader title="Continue Learning" className="mb-4" />

      {isLoading ? (
        <div className="space-y-3">
          {Array.from({ length: 2 }).map((_, index) => (
            <Skeleton key={index} className="h-24 rounded-xl" />
          ))}
        </div>
      ) : courses.length === 0 ? (
        <EmptyState
          icon={BookOpen}
          title="No courses in progress"
          description="Enroll in a course to see your progress here."
        />
      ) : (
        <div className="space-y-3">
          {courses.map((course) => (
            <ContinueLearningCard
              key={course.id}
              title={course.title}
              categoryLabel={course.categoryLabel}
              progressPercent={course.progressPercent}
              thumbnailUrl={course.thumbnailUrl}
              href={course.href}
            />
          ))}
        </div>
      )}
    </section>
  );
};