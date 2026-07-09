import { Mail, CalendarDays } from "lucide-react";
import { AvatarUpload } from "./avatar-upload";
import { Skeleton } from "@/components/ui/skeleton";
import type { UserProfile } from "@/types/profile.types";

interface ProfileHeaderProps {
  profile?: UserProfile;
  isLoading?: boolean;
}

export const ProfileHeader = ({ profile, isLoading }: ProfileHeaderProps) => {
  if (isLoading || !profile) {
    return (
      <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5">
        <Skeleton className="size-24 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-5 w-40" />
          <Skeleton className="h-4 w-56" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
    );
  }

  const initials = profile.fullName
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const joinedDate = new Date(profile.joinedAt).toLocaleDateString("en-IN", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-card p-5 sm:flex-row sm:items-start">
      <AvatarUpload avatarUrl={profile.avatarUrl} fallbackText={initials} />

      <div className="min-w-0 flex-1 text-center sm:text-left">
        <h2 className="text-title font-bold text-foreground">{profile.fullName}</h2>

        <div className="mt-1 flex flex-col items-center gap-1 sm:flex-row sm:gap-4">
          <span className="flex items-center gap-1.5 text-caption text-muted-foreground">
            <Mail className="size-3.5" />
            {profile.email}
          </span>
          <span className="flex items-center gap-1.5 text-caption text-muted-foreground">
            <CalendarDays className="size-3.5" />
            Joined {joinedDate}
          </span>
        </div>

        {profile.bio && <p className="mt-2 text-caption text-foreground">{profile.bio}</p>}
      </div>
    </div>
  );
};