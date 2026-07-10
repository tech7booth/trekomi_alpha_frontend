"use client";

import { useState } from "react";
import { PageHeader } from "@/components/shared/page-header";
import { SettingsNav } from "@/components/settings/settings-nav";
import { AppearanceSettings } from "@/components/settings/appearance-settings";
import { NotificationSettings } from "@/components/settings/notification-settings";
import { SecuritySettings } from "@/components/settings/security-settings";
import { DangerZone } from "@/components/settings/danger-zone";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("appearance");

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-6 md:px-6 md:py-8">
      <PageHeader title="Settings" description="Manage your account preferences and security." />

      <SettingsNav value={activeTab} onValueChange={setActiveTab} />

      {activeTab === "appearance" && <AppearanceSettings />}
      {activeTab === "notifications" && <NotificationSettings />}
      {activeTab === "security" && <SecuritySettings />}
      {activeTab === "danger" && <DangerZone />}
    </div>
  );
};

export default SettingsPage;