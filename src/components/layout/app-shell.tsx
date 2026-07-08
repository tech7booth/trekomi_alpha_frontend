"use client";

import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";
import { Footer } from "./footer";
import { BottomNavigation } from "./bottom-navigation";
import { MobileSidebar } from "./mobile-sidebar";
import { useAppDispatch } from "@/app/store/hooks";
import { toggleMobileSidebar } from "@/app/store/slices/ui-slice";

interface AppShellProps {
  children: React.ReactNode;
}

/**
 * Composition root for the app's persistent layout chrome.
 * This is the only place that wires Navbar's onMenuClick to
 * global sidebar state — keeps Navbar itself presentational/reusable.
 */
export const AppShell = ({ children }: AppShellProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex min-h-svh flex-col">
      {/* TODO: notificationCount is hardcoded until the notifications
          RTK Query service (services/notification.service.ts) is built */}
      <Navbar onMenuClick={() => dispatch(toggleMobileSidebar())} notificationCount={3} />

      <div className="flex flex-1">
        <Sidebar />

        <div className="flex min-w-0 flex-1 flex-col">
          <main className="flex-1 pb-16 md:pb-0">{children}</main>
          <Footer />
        </div>
      </div>

      <BottomNavigation />
      <MobileSidebar />
    </div>
  );
};