"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { GraduationCap, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { MAIN_NAV_LINKS, SITE_CONFIG } from "@/constants/site";
import { ThemeToggle } from "@/components/landing/ThemeToggle";

/**
 * Desktop: logo + inline nav + auth actions.
 * Mobile/tablet: logo + hamburger triggering a Sheet drawer, since the
 * bottom navigation is reserved for the authenticated app shell, not
 * the public marketing site.
 */
export const Navbar = ()  => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = (): void => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-200",
        isScrolled
          ? "border-border/80 bg-background/80 backdrop-blur-lg supports-backdrop-filter:bg-background/60"
          : "bg-background",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            {SITE_CONFIG.name}
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {MAIN_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <div className="items-center gap-2 flex">
            <Button asChild variant="ghost" className="rounded-xl">
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild className="rounded-xl hidden sm:block bg-primary hover:bg-primary/90">
              <Link href="/register">Sign up free</Link>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="rounded-xl lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex p-4 w-75 flex-col gap-6">
              <nav aria-label="Mobile primary" className="flex flex-col gap-1 pt-8">
                {MAIN_NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded-lg px-3 py-2.5 text-base font-medium text-foreground hover:bg-muted"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-2 border-t border-border pt-4">
                <SheetClose asChild>
                  <Button asChild variant="outline" className="rounded-xl">
                    <Link href="/login">Log in</Link>
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button asChild className="rounded-xl bg-primary hover:bg-primary/90">
                    <Link href="/register">Sign up free</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
