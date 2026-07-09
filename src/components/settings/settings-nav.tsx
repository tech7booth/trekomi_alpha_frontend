"use client";

import { Palette, Bell, ShieldCheck, TriangleAlert } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SettingsNavProps {
  value: string;
  onValueChange: (value: string) => void;
}

export const SETTINGS_TABS = [
  { value: "appearance", label: "Appearance", icon: Palette },
  { value: "notifications", label: "Notifications", icon: Bell },
  { value: "security", label: "Security", icon: ShieldCheck },
  { value: "danger", label: "Danger Zone", icon: TriangleAlert },
] as const;

export const SettingsNav = ({ value, onValueChange }: SettingsNavProps) => {
  return (
    <Tabs value={value} onValueChange={onValueChange}>
      <TabsList className="grid w-full grid-cols-2 gap-1 sm:grid-cols-4">
        {SETTINGS_TABS.map(({ value: tabValue, label, icon: Icon }) => (
          <TabsTrigger key={tabValue} value={tabValue} className="gap-1.5">
            <Icon className="size-4" />
            <span className="hidden sm:inline">{label}</span>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};