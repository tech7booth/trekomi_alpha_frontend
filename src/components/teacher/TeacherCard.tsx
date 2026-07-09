import Image from "next/image";
import { Star } from "lucide-react";
import type { TeacherSummary } from "@/types/landing.types";

interface TeacherCardProps {
  teacher: TeacherSummary;
}

export const TeacherCard = ({ teacher }: TeacherCardProps)  => {
  return (
    <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md">
      <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-primary/20">
        <Image
          src={teacher.avatarUrl}
          alt={teacher.name}
          fill
          sizes="80px"
          className="object-cover"
        />
      </div>
      <h3 className="mt-4 font-semibold text-foreground">{teacher.name}</h3>
      <p className="text-sm text-muted-foreground">{teacher.title}</p>

      <div className="mt-3 flex items-center gap-1 text-sm">
        <Star className="h-3.5 w-3.5 fill-secondary text-secondary" aria-hidden="true" />
        <span className="font-semibold text-foreground">{teacher.rating.toFixed(1)}</span>
      </div>
      <p className="text-xs text-muted-foreground">
        {teacher.studentCount.toLocaleString("en-IN")} students taught
      </p>
    </div>
  );
};

/** Skeleton placeholder matching TeacherCard's layout. */
export const TeacherCardSkeleton = ()  => {
  return (
    <div className="flex flex-col items-center rounded-xl border border-border bg-card p-6">
      <div className="h-20 w-20 animate-pulse rounded-full bg-muted" />
      <div className="mt-4 h-4 w-24 animate-pulse rounded bg-muted" />
      <div className="mt-2 h-3 w-32 animate-pulse rounded bg-muted" />
      <div className="mt-3 h-3 w-16 animate-pulse rounded bg-muted" />
    </div>
  );
};
