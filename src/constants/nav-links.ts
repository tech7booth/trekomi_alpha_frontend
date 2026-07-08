import type { LucideIcon } from "lucide-react";
import {
  Home,
  BookOpen,
  ClipboardList,
  Trophy,
  User,
} from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

/**
 * Single source of truth for primary navigation.
 * Consumed by both Navbar (desktop sidebar) and BottomNavigation (mobile).
 */
export const PRIMARY_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "My Courses", href: "/my-courses", icon: BookOpen },
  { label: "Test", href: "/test-series", icon: ClipboardList },
  { label: "Scholarship", href: "/scholarship", icon: Trophy },
  { label: "Profile", href: "/profile", icon: User },
];
