"use client"
import { HeroBanner } from "@/components/home/hero-banner";
import { QuickAccessSection } from "@/components/home/quick-access-section";
import { ScholarshipBanner } from "@/components/home/scholarship-banner";
import { CategorySection } from "@/components/home/category-section";
import { ContinueLearningSection } from "@/components/home/continue-learning-section";
import {
  HERO_SLIDES,
  QUICK_ACCESS_ITEMS,
  TOP_CATEGORIES,
  CONTINUE_LEARNING_COURSES,
} from "@/constants/mock/home-mock-data";
import { GreetingSection } from "@/components/home/greeting-section";
import { useGetProfileQuery } from "@/services/profile.service";

// TODO: replace mock imports with RTK Query hooks once
// services/home.service.ts + homeApi are built, e.g.:
// const { data: slides, isLoading } = useGetHeroSlidesQuery();

const HomePage = () => {
  const { data: profile, isLoading } = useGetProfileQuery();

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-4 py-6 md:px-6 md:py-8">
      <GreetingSection
        name={profile?.fullName || ". . ."}
        streak={7}
        courses={12}
        progress={86}
        certificates={5}
      />
      <HeroBanner slides={HERO_SLIDES} />
      <QuickAccessSection items={QUICK_ACCESS_ITEMS} />
      <ScholarshipBanner />
      <CategorySection categories={TOP_CATEGORIES} />
      <ContinueLearningSection courses={CONTINUE_LEARNING_COURSES} />
    </div>
  );
};

export default HomePage;