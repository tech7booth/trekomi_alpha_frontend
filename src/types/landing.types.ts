/**
 * Shared domain types for the marketing/landing surface.
 * Kept separate from API response types (services/*.types.ts) so the
 * landing page can be statically generated without depending on
 * authenticated data contracts.
 */

export type IconName =
  | "BookOpen"
  | "Video"
  | "Trophy"
  | "Users"
  | "ShieldCheck"
  | "Sparkles"
  | "GraduationCap"
  | "Clock"
  | "Award"
  | "TrendingUp";

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  icon: IconName;
}

export interface CategoryItem {
  id: string;
  title: string;
  courseCount: number;
  icon: IconName;
  href: string;
  slug?:string,
  accent: "primary" | "secondary";
}

export interface CourseSummary {
  id: string;
  slug: string;
  title: string;
  instructor: string;
  thumbnailUrl: string;
  category: string;
  rating: number;
  reviewCount: number;
  studentCount: number;
  price: number;
  originalPrice?: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  durationHours: number;
  isBestseller?: boolean;
}

export interface TeacherSummary {
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
  studentCount: number;
  rating: number;
  subject: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: IconName;
}
