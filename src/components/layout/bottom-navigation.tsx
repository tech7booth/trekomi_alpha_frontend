"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { PRIMARY_NAV_LINKS } from "@/constants/nav-links";
import { cn } from "@/lib/utils";

export const BottomNavigation = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 md:hidden",
        "border-t border-border bg-card",
        "pb-[env(safe-area-inset-bottom)]"
      )}
    >
      <ul className="grid grid-cols-5">
        {PRIMARY_NAV_LINKS.map(({ label, href, icon: Icon }) => {
          const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

          return (
            <li key={href}>
              <Link
                href={href}
                aria-label={label}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative flex flex-col items-center gap-1 py-2.5 text-small",
                  "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                <Icon className={cn("size-5", isActive && "fill-primary/10")} strokeWidth={isActive ? 2.5 : 2} />
                <span className={cn(isActive && "font-medium")}>{label}</span>

                {isActive && (
                  <motion.span
                    layoutId="bottom-nav-indicator"
                    className="absolute -top-px h-0.5 w-8 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};