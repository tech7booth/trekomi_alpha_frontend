"use client";

import { useState } from "react";
import {toast} from "sonner";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import type { NotificationPreferences } from "@/types/profile.types";

// TODO: replace with useGetNotificationPreferencesQuery /
// useUpdateNotificationPreferencesMutation once the backend
// endpoint exists — kept as local state for now so the UI is complete.
const DEFAULT_PREFERENCES: NotificationPreferences = {
  emailUpdates: true,
  pushNotifications: true,
  courseReminders: true,
  promotionalOffers: false,
};

const PREFERENCE_ROWS: Array<{ key: keyof NotificationPreferences; label: string; description: string }> = [
  { key: "emailUpdates", label: "Email Updates", description: "Receive updates about your courses via email" },
  { key: "pushNotifications", label: "Push Notifications", description: "Get notified on your device instantly" },
  { key: "courseReminders", label: "Course Reminders", description: "Reminders to continue your enrolled courses" },
  { key: "promotionalOffers", label: "Promotional Offers", description: "Scholarship and discount announcements" },
];

export const NotificationSettings = () => {
  const [preferences, setPreferences] = useState(DEFAULT_PREFERENCES);
  const [isSaving, setIsSaving] = useState(false);

  const handleToggle = (key: keyof NotificationPreferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    // Simulated latency until the real mutation is wired up.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSaving(false);
    toast.success("Notification preferences saved");
  };

  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h3 className="text-title font-semibold text-foreground">Notification Preferences</h3>
      <p className="mt-1 text-caption text-muted-foreground">
        Choose what you want to be notified about.
      </p>

      <div className="mt-4 divide-y divide-border">
        {PREFERENCE_ROWS.map(({ key, label, description }) => (
          <div key={key} className="flex items-center justify-between py-3">
            <div className="pr-4">
              <Label htmlFor={key} className="text-body font-medium text-foreground">
                {label}
              </Label>
              <p className="text-caption text-muted-foreground">{description}</p>
            </div>
            <Switch id={key} checked={preferences[key]} onCheckedChange={() => handleToggle(key)} />
          </div>
        ))}
      </div>

      <Button onClick={handleSave} disabled={isSaving} className="mt-4">
        {isSaving ? "Saving..." : "Save Preferences"}
      </Button>
    </div>
  );
};