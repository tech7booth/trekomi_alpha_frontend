import type { Metadata } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { StatsSection } from "@/components/landing/StatsSection";
import { CategoriesSection } from "@/components/landing/CategoriesSection";
import { FeaturedCoursesSection } from "@/components/landing/FeaturedCoursesSection";
import { WhyChooseUsSection } from "@/components/landing/WhyChooseUsSection";
import { InstructorsSection } from "@/components/landing/InstructorsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { Footer } from "@/components/landing/Footer";

export const metadata: Metadata = {
  title: "Trekomi Alpha — Learn without limits",
  description:
    "Live classes, structured test series, and mentorship from India's top educators for JEE, NEET, UPSC, and school foundation courses.",
};

/**
 * Public marketing landing page. Server component by default — every
 * section below is either a server component or a small client island
 * (Navbar, HeroSection's motion elements, NewsletterForm), so the page
 * ships minimal client JS while still feeling interactive.
 */
const LandingPage = () => {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <CategoriesSection />
        <FeaturedCoursesSection />
        <WhyChooseUsSection />
        <InstructorsSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
