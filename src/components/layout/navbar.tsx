"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, Bell, Search, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../shared/theme-toggle";

interface NavbarProps {
  onMenuClick?: () => void;
  notificationCount?: number;
}
// components/layout/navbar.tsx
export const Navbar = ({ onMenuClick, notificationCount = 0 }: NavbarProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-border",
        "bg-card/90 backdrop-blur-md supports-[backdrop-filter]:bg-card/70"
      )}
    >
      <div className="mx-auto flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground hover:bg-muted"
            aria-label="Open menu"
            onClick={onMenuClick}
          >
            <Menu className="size-6" />
          </Button>

          <Link href="/" className="flex items-center gap-2" aria-label="Trekomi Alpha home">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
      
            {/* <Image src="/logo.png" alt="Trekomi Alpha logo" width={36} height={36} className="rounded-full" priority /> */}
            <span className="hidden text-title font-bold tracking-tight text-foreground sm:block">
              TREKOMI <span className="text-primary">ALPHA</span>
            </span>
          </Link>
        </div>

        <div className="hidden flex-1 max-w-md md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search courses, test series..."
              aria-label="Search"
              className={cn(
                "w-full rounded-xl bg-muted py-2 pl-9 pr-4 text-body text-foreground placeholder:text-muted-foreground",
                "outline-none transition-colors focus:bg-accent focus:ring-2 focus:ring-ring"
              )}
            />
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground hover:bg-muted md:hidden"
            aria-label="Search"
            onClick={() => setIsSearchOpen((prev) => !prev)}
          >
            <Search className="size-5" />
          </Button>

          <ThemeToggle className="text-foreground hover:bg-muted" />

          <Link
            href="/notifications"
            className={cn(
              "relative inline-flex size-10 items-center justify-center rounded-xl",
              "text-foreground hover:bg-muted transition-colors",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
            aria-label={`Notifications${notificationCount > 0 ? `, ${notificationCount} unread` : ""}`}
          >
            <Bell className="size-5" />
            {notificationCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex size-4 items-center justify-center rounded-full bg-destructive text-[10px] font-semibold text-destructive-foreground">
                {notificationCount > 9 ? "9+" : notificationCount}
              </span>
            )}
          </Link>

          <DeskProfileMenu/>
        </div>
      </div>

      {isSearchOpen && (
        <div className="border-t border-border px-4 py-3 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              autoFocus
              placeholder="Search courses, test series..."
              aria-label="Search"
              className="w-full rounded-xl bg-muted py-2 pl-9 pr-4 text-body text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
        </div>
      )}
    </header>
  );
};

import {
  LogOut,
  Settings,
  User,
  BookOpen,
  ChevronDown,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DeskProfileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="hidden md:block rounded-full outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <Avatar className="size-9 cursor-pointer">
            <AvatarImage src="/images/avatar.png" />
            <AvatarFallback>KS</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-60"
        sideOffset={8}
      >
        <DropdownMenuLabel>
          <div className="flex flex-col">
            <span className="font-medium">Kunal Shroff</span>
            <span className="text-xs text-muted-foreground">
              kunal@example.com
            </span>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <User className="mr-2 size-4" />
          Profile
        </DropdownMenuItem>

        <DropdownMenuItem>
          <BookOpen className="mr-2 size-4" />
          My Courses
        </DropdownMenuItem>

        <DropdownMenuItem>
          <Settings className="mr-2 size-4" />
          Settings
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="text-destructive focus:text-destructive">
          <LogOut className="mr-2 size-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}