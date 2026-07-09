import { CourseFilterPanel } from "@/components/course/CourseFilterPanel";
import type { CourseFilters } from "@/types/course.types";

interface CourseFilterSidebarProps {
  filters: CourseFilters;
  onChange: (patch: Partial<CourseFilters>) => void;
  onClear: () => void;
  activeFilterCount: number;
}

export const CourseFilterSidebar = (props: CourseFilterSidebarProps)  => {
  return (
    <aside className="hidden w-64 shrink-0 lg:block">
      <div className="sticky top-24 rounded-xl border border-border bg-card p-5 shadow-sm">
        <CourseFilterPanel {...props} />
      </div>
    </aside>
  );
};
