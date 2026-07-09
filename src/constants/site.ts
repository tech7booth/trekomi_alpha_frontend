import type { NavLink } from "@/types/landing.types";

export const SITE_CONFIG = {
  name: "Trekomi Alpha",
  tagline: "Learn without limits",
  description:
    "Trekomi Alpha is a K-12 and competitive-exam learning platform with live classes, structured test series, and mentorship from India's top educators.",
  supportEmail: "support@trekomialpha.com",
} as const;

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: "Courses", href: "/courses" },
  { label: "Test Series", href: "/test-series" },
  { label: "Scholarship", href: "/scholarship" },
  { label: "Teachers", href: "/teachers" },
  { label: "Pricing", href: "/pricing" },
];

export const FOOTER_LINK_GROUPS: { title: string; links: NavLink[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "Browse Courses", href: "/courses" },
      { label: "Test Series", href: "/test-series" },
      { label: "Scholarship Program", href: "/scholarship" },
      { label: "Certificates", href: "/certificates" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Become a Teacher", href: "/teach" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Blog", href: "/blog" },
      { label: "Student Community", href: "/community" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];
