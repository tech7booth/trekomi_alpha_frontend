import {
  Award,
  BookOpen,
  Clock,
  GraduationCap,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Trophy,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/types/landing.types";

/**
 * Central registry so data files can stay serializable (plain strings)
 * while components resolve the actual icon component here. Add new
 * icons in exactly one place.
 */
export const ICON_MAP: Record<IconName, LucideIcon> = {
  BookOpen,
  Video,
  Trophy,
  Users,
  ShieldCheck,
  Sparkles,
  GraduationCap,
  Clock,
  Award,
  TrendingUp,
};
