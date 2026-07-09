"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { SIDEBAR_NAV_GROUPS } from "@/constants/sidebar-links";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setMobileSidebarOpen } from "@/store/slices/ui-slice";
import { cn } from "@/lib/utils";

/**
 * Full navigation drawer for mobile, triggered by the Navbar's
 * hamburger menu. BottomNavigation covers the 5 primary routes;
 * this covers everything else (Wishlist, Settings, Study Material, etc.)
 */
export const MobileSidebar = () => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const open = useAppSelector((state) => state.ui.mobileSidebarOpen);

  return (
    <Sheet open={open} onOpenChange={(next) => dispatch(setMobileSidebarOpen(next))}>
      <SheetContent side="left" className="w-72 p-0">
        <SheetHeader className="border-b border-border px-4 py-4">
          <SheetTitle className="text-title">Menu</SheetTitle>
        </SheetHeader>

        <nav className="overflow-y-auto px-3 py-4" aria-label="Mobile navigation">
          {SIDEBAR_NAV_GROUPS.map((group) => (
            <div key={group.title} className="mb-6 last:mb-0">
              <h3 className="mb-2 px-3 text-small font-semibold uppercase tracking-wide text-muted-foreground">
                {group.title}
              </h3>
              <ul className="space-y-1">
                {group.links.map(({ label, href, icon: Icon }) => {
                  const isActive =
                    href === "/" ? pathname === "/" : pathname.startsWith(href);

                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={() => dispatch(setMobileSidebarOpen(false))}
                        aria-current={isActive ? "page" : undefined}
                        className={cn(
                          "flex items-center gap-3 rounded-xl px-3 py-2.5 text-body transition-colors",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                          isActive
                            ? "bg-accent font-medium text-accent-foreground"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        )}
                      >
                        <Icon className="size-5 shrink-0" strokeWidth={isActive ? 2.5 : 2} />
                        <span>{label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};