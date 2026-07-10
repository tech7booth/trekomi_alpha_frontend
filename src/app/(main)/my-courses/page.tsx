import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { MyCoursesGrid } from "@/components/my-courses/my-courses-grid";
import { MY_COURSES } from "@/constants/mock/my-courses-mock";

export const metadata: Metadata = {
  title: "My Courses",
  description: "Track progress across all your enrolled courses.",
};

// TODO: swap for useGetMyCoursesQuery() once /courses/my-courses is live.
const MyCoursesPage = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-6 md:px-6 md:py-8">
      <PageHeader title="My Courses" description="Continue where you left off or revisit completed courses." />
      <MyCoursesGrid courses={MY_COURSES} />
    </div>
  );
};

export default MyCoursesPage;