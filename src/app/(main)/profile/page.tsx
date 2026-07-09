"use client";

import { GraduationCap, CheckCircle2, Award } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { ProfileHeader } from "@/components/profile/profile-header";
import { ProfileInfoForm } from "@/components/profile/profile-info-form";
import { StatCard } from "@/components/shared/stat-card";
import { useGetProfileQuery } from "@/services/profile.service";

const ProfilePage = () => {
  const { data: profile, isLoading } = useGetProfileQuery();

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-6 md:px-6 md:py-8">
      <PageHeader title="My Profile" description="Manage your personal information and account details." />

      <ProfileHeader profile={profile} isLoading={isLoading} />

      <div className="grid grid-cols-3 gap-3">
        <StatCard
          icon={GraduationCap}
          label="Enrolled"
          value={profile?.coursesEnrolled ?? 0}
          colorTheme="blue"
          isLoading={isLoading}
        />
        <StatCard
          icon={CheckCircle2}
          label="Completed"
          value={profile?.coursesCompleted ?? 0}
          colorTheme="green"
          isLoading={isLoading}
        />
        <StatCard
          icon={Award}
          label="Certificates"
          value={profile?.certificatesEarned ?? 0}
          colorTheme="orange"
          isLoading={isLoading}
        />
      </div>

      <ProfileInfoForm profile={profile} isLoading={isLoading} />
    </div>
  );
};

export default ProfilePage;