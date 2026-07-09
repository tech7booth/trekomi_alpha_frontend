import type {
  CategoryItem,
  CourseSummary,
  FaqItem,
  FeatureItem,
  StatItem,
  TeacherSummary,
  TestimonialItem,
} from "@/types/landing.types";

export const HERO_STATS: StatItem[] = [
  { id: "students", label: "Active learners", value: 2_40_000, suffix: "+", icon: "Users" },
  { id: "courses", label: "Live & recorded courses", value: 1_200, suffix: "+", icon: "BookOpen" },
  { id: "educators", label: "Verified educators", value: 850, suffix: "+", icon: "GraduationCap" },
  { id: "selections", label: "Exam selections in 2025", value: 18_500, suffix: "+", icon: "Trophy" },
];

export const CATEGORY_ITEMS: CategoryItem[] = [
  { id: "cat-1", title: "JEE & NEET", courseCount: 240, icon: "Sparkles", href: "/courses?cat=jee-neet", accent: "primary" },
  { id: "cat-2", title: "Class 6–10 Foundation", courseCount: 180, icon: "BookOpen", href: "/courses?cat=foundation", accent: "secondary" },
  { id: "cat-3", title: "UPSC & State PSC", courseCount: 96, icon: "Award", href: "/courses?cat=upsc", accent: "primary" },
  { id: "cat-4", title: "Banking & SSC", courseCount: 140, icon: "TrendingUp", href: "/courses?cat=banking-ssc", accent: "secondary" },
  { id: "cat-5", title: "Coding & Tech Skills", courseCount: 75, icon: "Video", href: "/courses?cat=tech-skills", accent: "primary" },
  { id: "cat-6", title: "Design & Creativity", courseCount: 52, icon: "Sparkles", href: "/courses?cat=design", accent: "secondary" },
];

export const FEATURED_COURSES: CourseSummary[] = [
  {
    id: "course-1",
    slug: "jee-advanced-physics-mastery",
    title: "JEE Advanced Physics Mastery 2026",
    instructor: "Ananya Rao",
    thumbnailUrl: "/cources/jee-p.jpg",
    category: "JEE & NEET",
    rating: 4.8,
    reviewCount: 3120,
    studentCount: 18400,
    price: 4999,
    originalPrice: 8999,
    level: "Advanced",
    durationHours: 96,
    isBestseller: true,
  },
  {
    id: "course-2",
    slug: "neet-biology-complete-course",
    title: "NEET Biology Complete Course",
    instructor: "Dr. Kavita Menon",
    thumbnailUrl: "/cources/neet1.jpg",
    category: "JEE & NEET",
    rating: 4.9,
    reviewCount: 4520,
    studentCount: 26100,
    price: 4499,
    originalPrice: 7999,
    level: "Intermediate",
    durationHours: 120,
    isBestseller: true,
  },
  {
    id: "course-3",
    slug: "upsc-prelims-gs-foundation",
    title: "UPSC Prelims GS Foundation Batch",
    instructor: "Rohit Verma",
    thumbnailUrl: "/cources/upsc1.jpg",
    category: "UPSC & State PSC",
    rating: 4.7,
    reviewCount: 1890,
    studentCount: 9800,
    price: 6999,
    originalPrice: 11999,
    level: "Beginner",
    durationHours: 150,
  },
  {
    id: "course-4",
    slug: "class-10-cbse-maths-science",
    title: "Class 10 CBSE Maths & Science Foundation",
    instructor: "Priya Sharma",
    thumbnailUrl: "/cources/c10-f.jpg",
    category: "Class 6–10 Foundation",
    rating: 4.8,
    reviewCount: 2760,
    studentCount: 15200,
    price: 2999,
    originalPrice: 4999,
    level: "Beginner",
    durationHours: 80,
  },
];

export const FEATURE_ITEMS: FeatureItem[] = [
  {
    id: "feat-1",
    title: "Live interactive classes",
    description: "Attend real-time classes with doubt-solving, polls, and replays available for 12 months.",
    icon: "Video",
  },
  {
    id: "feat-2",
    title: "Structured test series",
    description: "Sit for chapter-wise, sectional, and full-length mock tests benchmarked against real exam patterns.",
    icon: "Trophy",
  },
  {
    id: "feat-3",
    title: "Verified educators",
    description: "Every instructor is vetted for subject depth and teaching quality before they go live on Trekomi Alpha.",
    icon: "ShieldCheck",
  },
  {
    id: "feat-4",
    title: "Progress you can see",
    description: "Track chapter completion, test accuracy, and rank trends on a single, honest dashboard.",
    icon: "TrendingUp",
  },
  {
    id: "feat-5",
    title: "Merit-based scholarships",
    description: "Take our free scholarship test and unlock fee waivers of up to 90% on flagship batches.",
    icon: "Award",
  },
  {
    id: "feat-6",
    title: "Learn on your schedule",
    description: "Download lectures for offline viewing and pick up exactly where you left off, on any device.",
    icon: "Clock",
  },
];

export const TEACHER_ITEMS: TeacherSummary[] = [
  { id: "t-1", name: "Ananya Rao", title: "Physics · IIT Bombay", avatarUrl: "/faculties/f1.jpg", studentCount: 42000, rating: 4.9, subject: "Physics" },
  { id: "t-2", name: "Dr. Kavita Menon", title: "Biology · AIIMS Delhi", avatarUrl: "/faculties/f2.jpg", studentCount: 51000, rating: 4.9, subject: "Biology" },
  { id: "t-3", name: "Rohit Verma", title: "Polity & Governance, ex-IAS Faculty", avatarUrl: "/faculties/f3.jpg", studentCount: 28000, rating: 4.8, subject: "General Studies" },
  { id: "t-4", name: "Priya Sharma", title: "Mathematics · NIT Trichy", avatarUrl: "/faculties/f4.jpg", studentCount: 33500, rating: 4.8, subject: "Mathematics" },
];

export const TESTIMONIAL_ITEMS: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Aarav Kulkarni",
    role: "AIR 412, JEE Advanced 2025",
    avatarUrl: "/images/students/aarav.jpg",
    quote:
      "The daily test series kept me honest about my weak chapters. I could see my rank trend improve every single week.",
    rating: 5,
  },
  {
    id: "test-2",
    name: "Ishita Bansal",
    role: "NEET 2025, 682/720",
    avatarUrl: "/images/students/ishita.jpg",
    quote:
      "Dr. Menon's biology classes made a 700-page syllabus feel manageable. The recorded lectures saved me before my finals.",
    rating: 5,
  },
  {
    id: "test-3",
    name: "Mohammed Faisal",
    role: "Scholarship recipient, UPSC batch",
    avatarUrl: "/images/students/faisal.jpg",
    quote:
      "I got an 80% fee waiver through the scholarship test. Without it, I couldn't have afforded a structured UPSC batch at all.",
    rating: 5,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    question: "How do live classes work on Trekomi Alpha?",
    answer:
      "Live classes run on a fixed weekly timetable inside your course dashboard. You can ask doubts in real time via chat, and every session is recorded and available for replay within 24 hours.",
  },
  {
    id: "faq-2",
    question: "Can I get a refund if a course doesn't work for me?",
    answer:
      "Yes. Every paid course is covered by a 7-day no-questions-asked refund window from the date of purchase, as long as you haven't completed more than 25% of the content.",
  },
  {
    id: "faq-3",
    question: "How does the scholarship test work?",
    answer:
      "The scholarship test is free and takes about 60 minutes. Your score determines a fee waiver band of 10% to 90% on select batches, valid for 30 days after your results are declared.",
  },
  {
    id: "faq-4",
    question: "Do I get a certificate after completing a course?",
    answer:
      "Yes, every course issues a verifiable completion certificate once you cross 80% course progress, which you can share directly to LinkedIn or download as a PDF.",
  },
  {
    id: "faq-5",
    question: "Can I access courses on mobile?",
    answer:
      "Trekomi Alpha is fully responsive on the web and also available as a native app for iOS and Android, with offline downloads for lectures and notes.",
  },
];
