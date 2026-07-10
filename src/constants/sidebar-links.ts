import type { LucideIcon } from "lucide-react";
import {
  Home,
  Video,
  BookOpen,
  ClipboardList,
  FileText,
  LayoutGrid,
  Heart,
  Trophy,
  Bell,
  User,
  Settings,
} from "lucide-react";

export interface SidebarLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface SidebarGroup {
  title: string;
  links: SidebarLink[];
}

/**
 * Grouped navigation used by both the desktop Sidebar and the
 * mobile drawer (MobileSidebar). BottomNavigation intentionally
 * uses a separate, shorter list (constants/nav-links.ts) since
 * mobile screen real estate only fits 5 items.
 */
export const SIDEBAR_NAV_GROUPS: SidebarGroup[] = [
  {
    title: "Learn",
    links: [
      { label: "Home", href: "/dashboard", icon: Home },
      { label: "Live Classes", href: "/live-classes", icon: Video },
      { label: "My Courses", href: "/my-courses", icon: BookOpen },
      { label: "Test Series", href: "/test-series", icon: ClipboardList },
      { label: "Study Material", href: "/study-material", icon: FileText },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Categories", href: "/categories", icon: LayoutGrid },
      { label: "Wishlist", href: "/wishlist", icon: Heart },
      { label: "Scholarship", href: "/scholarship", icon: Trophy },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Notifications", href: "/notifications", icon: Bell },
      { label: "Profile", href: "/profile", icon: User },
      { label: "Settings", href: "/settings", icon: Settings },
    ],
  },
];