import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { CategoriesGrid } from "@/components/categories/categories-grid";

export const metadata: Metadata = {
  title: "Explore Categories",
  description: "Browse all course categories available on Trekomi Alpha.",
};

// TODO: swap for useGetCategoriesQuery() once /categories is live.
const CategoriesPage = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-6 md:px-6 md:py-8">
      <PageHeader title="Explore Categories" description="Find the right course for your goals." />
      <CategoriesGrid />
    </div>
  );
};

export default CategoriesPage;