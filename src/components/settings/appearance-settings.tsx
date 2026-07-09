"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const THEME_OPTIONS = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: Monitor },
] as const;

export const AppearanceSettings = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="text-title font-semibold text-foreground">Theme</h3>
      <p className="mt-1 text-caption text-muted-foreground">
        Choose how Trekomi Alpha looks on this device.
      </p>

      <div className="mt-4 grid grid-cols-3 gap-3">
        {THEME_OPTIONS.map(({ value, label, icon: Icon }) => {
          const isActive = mounted && theme === value;

          return (
            <button
              key={value}
              type="button"
              onClick={() => setTheme(value)}
              aria-pressed={isActive}
              className={cn(
                "relative flex flex-col items-center gap-2 rounded-xl border p-4 transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive ? "border-primary bg-accent" : "border-border hover:bg-muted"
              )}
            >
              {isActive && (
                <span className="absolute right-2 top-2 flex size-4 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3" />
                </span>
              )}
              <Icon className={cn("size-5", isActive ? "text-primary" : "text-muted-foreground")} />
              <span className={cn("text-caption font-medium", isActive ? "text-foreground" : "text-muted-foreground")}>
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};