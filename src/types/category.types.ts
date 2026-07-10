import type { LucideIcon } from "lucide-react";
import type { IconColorTheme } from "@/constants/icon-color-themes";

export interface Category {
  id: string;
  title: string;
  description?: string;
  courseCount: number;
  icon: LucideIcon;
  href: string;
  colorTheme: IconColorTheme;
}

export interface QuickAccessItem {
  id: string;
  label: string;
  icon: LucideIcon;
  href: string;
  colorTheme: IconColorTheme;
}