"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { SIDEBAR_NAV_GROUPS } from "@/constants/sidebar-links";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { toggleSidebarCollapsed } from "@/app/store/slices/ui-slice";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const collapsed = useAppSelector((state) => state.ui.sidebarCollapsed);

  return (
    <motion.aside
      initial={false}
      animate={{ width: collapsed ? 80 : 256 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="sticky top-16 hidden h-[calc(100svh-4rem)] shrink-0 flex-col border-r border-border bg-card md:flex"
    >
      <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Sidebar">
        {SIDEBAR_NAV_GROUPS.map((group) => (
          <div key={group.title} className="mb-6 last:mb-0">
            {!collapsed && (
              <h3 className="mb-2 px-3 text-small font-semibold uppercase tracking-wide text-muted-foreground">
                {group.title}
              </h3>
            )}
            <ul className="space-y-1">
              {group.links.map(({ label, href, icon: Icon }) => {
                const isActive =
                  href === "/" ? pathname === "/" : pathname.startsWith(href);

                return (
                  <li key={href}>
                    <Link
                      href={href}
                      title={collapsed ? label : undefined}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-3 py-2.5 text-body transition-colors",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                        collapsed && "justify-center",
                        isActive
                          ? "bg-accent font-medium text-accent-foreground"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      <Icon className="size-5 shrink-0" strokeWidth={isActive ? 2.5 : 2} />
                      {!collapsed && <span className="truncate">{label}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-border p-3">
        <button
          type="button"
          onClick={() => dispatch(toggleSidebarCollapsed())}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className={cn(
            "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-body text-muted-foreground transition-colors",
            "hover:bg-muted hover:text-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
            collapsed && "justify-center"
          )}
        >
          <ChevronLeft
            className={cn("size-5 shrink-0 transition-transform", collapsed && "rotate-180")}
          />
          {!collapsed && <span>Collapse</span>}
        </button>
      </div>
    </motion.aside>
  );
};