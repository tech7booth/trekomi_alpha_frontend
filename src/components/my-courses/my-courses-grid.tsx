"use client";

import { useMemo, useState } from "react";
import { BookOpen } from "lucide-react";
import { TabFilter, type TabFilterOption } from "@/components/shared/tab-filter";
import { EmptyState } from "@/components/shared/empty-state";
import { MyCourseCard } from "./my-course-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { CourseStatus, MyCourse } from "@/types/course.types";

type FilterValue = CourseStatus | "all";

interface MyCoursesGridProps {
  courses: MyCourse[];
  isLoading?: boolean;
}

export const MyCoursesGrid = ({ courses, isLoading = false }: MyCoursesGridProps) => {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const filterOptions: TabFilterOption<FilterValue>[] = useMemo(
    () => [
      { value: "all", label: "All", count: courses.length },
      { value: "in-progress", label: "In Progress", count: courses.filter((c) => c.status === "in-progress").length },
      { value: "completed", label: "Completed", count: courses.filter((c) => c.status === "completed").length },
      { value: "not-started", label: "Not Started", count: courses.filter((c) => c.status === "not-started").length },
    ],
    [courses]
  );

  const filteredCourses = useMemo(
    () => (activeFilter === "all" ? courses : courses.filter((c) => c.status === activeFilter)),
    [courses, activeFilter]
  );

  return (
    <div className="space-y-5">
      <TabFilter options={filterOptions} value={activeFilter} onChange={setActiveFilter} />

      {isLoading ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="h-72 rounded-xl" />
          ))}
        </div>
      ) : filteredCourses.length === 0 ? (
        <EmptyState
          icon={BookOpen}
          title="No courses found"
          description="Courses matching this filter will show up here."
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <MyCourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};