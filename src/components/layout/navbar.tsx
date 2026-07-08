"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../shared/theme-toggle";

interface NavbarProps {
  onMenuClick?: () => void;
  notificationCount?: number;
}

export const Navbar = ({ onMenuClick, notificationCount = 0 }: NavbarProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-border/50",
        "bg-primary text-primary-foreground",
        "supports-backdrop-filter:bg-primary/95 supports-backdrop-filter:backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        {/* Left: menu (mobile) / logo */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:bg-white/10"
            aria-label="Open menu"
            onClick={onMenuClick}
          >
            <Menu className="size-6" />
          </Button>

          <Link href="/" className="flex items-center gap-2" aria-label="Trekomi Alpha home">
            <Image
              src="/logo.png"
              alt="Trekomi Alpha logo"
              width={36}
              height={36}
              className="rounded-full"
              priority
            />
            <span className="hidden text-title font-bold tracking-tight sm:block">
              TREKOMI <span className="text-secondary">ALPHA</span>
            </span>
          </Link>
        </div>

        {/* Center: search (desktop only) */}
        <div className="hidden flex-1 max-w-md md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary-foreground/60" />
            <input
              type="search"
              placeholder="Search courses, test series..."
              aria-label="Search"
              className={cn(
                "w-full rounded-xl bg-white/10 py-2 pl-9 pr-4 text-body text-primary-foreground placeholder:text-primary-foreground/60",
                "outline-none ring-0 transition-colors focus:bg-white/15 focus:ring-2 focus:ring-secondary"
              )}
            />
          </div>
        </div>

<ThemeToggle/>
        {/* Right: search toggle (mobile) + notifications */}
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground hover:bg-white/10 md:hidden"
            aria-label="Search"
            onClick={() => setIsSearchOpen((prev) => !prev)}
          >
            <Search className="size-5" />
          </Button>

          <Link
            href="/notifications"
            className={cn(
              "relative inline-flex size-10 items-center justify-center rounded-xl",
              "text-primary-foreground hover:bg-white/10 transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary"
            )}
            aria-label={`Notifications${notificationCount > 0 ? `, ${notificationCount} unread` : ""}`}
          >
            <Bell className="size-5" />
            {notificationCount > 0 && (
              <span
                className={cn(
                  "absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center",
                  "rounded-full bg-destructive text-[10px] font-semibold text-destructive-foreground"
                )}
              >
                {notificationCount > 9 ? "9+" : notificationCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile search row, toggled open */}
      {isSearchOpen && (
        <div className="border-t border-white/10 px-4 py-3 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-primary-foreground/60" />
            <input
              type="search"
              autoFocus
              placeholder="Search courses, test series..."
              aria-label="Search"
              className="w-full rounded-xl bg-white/10 py-2 pl-9 pr-4 text-body text-primary-foreground placeholder:text-primary-foreground/60 outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
        </div>
      )}
    </header>
  );
};