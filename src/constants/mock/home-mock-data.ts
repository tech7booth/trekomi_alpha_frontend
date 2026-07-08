import {
  Video,
  Mic,
  Landmark,
  GraduationCap,
  BookOpen,
  HelpCircle,
  ClipboardList,
  FileText,
  UserRound,
} from "lucide-react";
import type { HeroSlide } from "@/types/hero.types";
import type { Category, QuickAccessItem } from "@/types/category.types";
import type { ContinueLearningCourse } from "@/types/course.types";

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    title: "Learn Today,",
    highlight: "Lead Tomorrow",
    description: "English Speaking | Public Speaking | Banking | Other Subjects",
    ctaLabel: "Start Learning",
    ctaHref: "/courses",
    imageUrl: "/images/hero/students-1.png",
  },
  {
    id: "slide-2",
    title: "Master Every",
    highlight: "Competitive Exam",
    description: "IBPS, SBI, RBI and other banking exams with expert mentors",
    ctaLabel: "Explore Courses",
    ctaHref: "/categories/competitive-exams",
    imageUrl: "/images/hero/students-2.png",
  },
];

export const QUICK_ACCESS_ITEMS: QuickAccessItem[] = [
  { id: "qa-1", label: "Live Classes", icon: Video, href: "/live-classes", colorTheme: "blue" },
  { id: "qa-2", label: "Courses", icon: BookOpen, href: "/my-courses", colorTheme: "purple" },
  { id: "qa-3", label: "Test Series", icon: ClipboardList, href: "/test-series", colorTheme: "green" },
  { id: "qa-4", label: "Study Material", icon: FileText, href: "/study-material", colorTheme: "orange" },
  { id: "qa-5", label: "Ask Doubt", icon: HelpCircle, href: "/ask-doubt", colorTheme: "teal" },
];

export const TOP_CATEGORIES: Category[] = [
  { id: "cat-1", title: "English Speaking", courseCount: 12, icon: Mic, href: "/categories/english-speaking", colorTheme: "blue" },
  { id: "cat-2", title: "Public Speaking", courseCount: 10, icon: Mic, href: "/categories/public-speaking", colorTheme: "orange" },
  { id: "cat-3", title: "Banking", courseCount: 15, icon: Landmark, href: "/categories/banking", colorTheme: "green" },
  { id: "cat-4", title: "Competitive Exams", courseCount: 20, icon: GraduationCap, href: "/categories/competitive-exams", colorTheme: "purple" },
  { id: "cat-5", title: "Academic Subjects", courseCount: 25, icon: BookOpen, href: "/categories/academic", colorTheme: "pink" },
  { id: "cat-6", title: "Personality Development", courseCount: 8, icon: UserRound, href: "/categories/personality-development", colorTheme: "teal" },
];

export const CONTINUE_LEARNING_COURSES: ContinueLearningCourse[] = [
  {
    id: "course-1",
    title: "English Speaking Beginner to Advanced",
    categoryLabel: "English Speaking",
    progressPercent: 60,
    thumbnailUrl: "/images/courses/english-speaking.png",
    href: "/my-courses/course-1/learn",
  },
  {
    id: "course-2",
    title: "Banking Preparation (IBPS, SBI, RBI)",
    categoryLabel: "Banking",
    progressPercent: 45,
    thumbnailUrl: "/images/courses/banking-prep.png",
    href: "/my-courses/course-2/learn",
  },
];