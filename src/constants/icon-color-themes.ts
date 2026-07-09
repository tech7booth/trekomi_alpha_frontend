export type IconColorTheme = "blue" | "orange" | "green" | "purple" | "pink" | "teal";

/**
 * Each theme uses low-opacity tinted backgrounds so the same class
 * string works correctly in both light and dark mode without a
 * separate dark: override for every color — opacity does the work.
 */
export const ICON_COLOR_THEMES: Record<IconColorTheme, string> = {
  blue: "bg-blue-500/10 dark:bg-blue-950 text-blue-600 dark:text-blue-400",
orange: "bg-orange-500/10 dark:bg-orange-950 text-orange-600 dark:text-orange-400",
green: "bg-emerald-500/10 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400",
purple: "bg-violet-500/10 dark:bg-violet-950 text-violet-600 dark:text-violet-400",
pink: "bg-rose-500/10 dark:bg-rose-950 text-rose-600 dark:text-rose-400",
teal: "bg-teal-500/10 dark:bg-teal-950 text-teal-600 dark:text-teal-400",
};