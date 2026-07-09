import type { Metadata } from "next";
import { Suspense } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CourseCatalogClient } from "@/components/course/CourseCatalogClient";
import { CourseCatalogSkeleton } from "@/components/course/CourseCatalogSkeleton";

export const metadata: Metadata = {
  title: "Courses",
  description:
    "Browse and filter live and recorded courses for JEE, NEET, UPSC, banking, tech, and design on Trekomi Alpha.",
};

const CoursesPage = ()  => {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<CourseCatalogSkeleton />}>
          <CourseCatalogClient />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
