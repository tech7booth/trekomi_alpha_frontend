import Link from "next/link";
import Image from "next/image";
import { PlayCircle, CheckCircle2, BookOpen } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import type { MyCourse } from "@/types/course.types";
import { cn } from "@/lib/utils";

interface MyCourseCardProps {
  course: MyCourse;
}

const STATUS_CONFIG = {
  "in-progress": { label: "In Progress", icon: PlayCircle, className: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
  completed: { label: "Completed", icon: CheckCircle2, className: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
  "not-started": { label: "Not Started", icon: BookOpen, className: "bg-muted text-muted-foreground" },
} as const;

export const MyCourseCard = ({ course }: MyCourseCardProps) => {
  const { title, categoryLabel, instructorName, thumbnailUrl, progressPercent, completedLessons, totalLessons, status, href } = course;
  const statusInfo = STATUS_CONFIG[status];
  const StatusIcon = statusInfo.icon;

  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors",
        "hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform group-hover:scale-105"
        />
        <span
          className={cn(
            "absolute left-2 top-2 flex items-center gap-1 rounded-full px-2.5 py-1 text-small font-medium backdrop-blur-sm",
            statusInfo.className
          )}
        >
          <StatusIcon className="size-3.5" />
          {statusInfo.label}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-small font-medium text-primary">{categoryLabel}</span>
        <h3 className="line-clamp-2 text-title font-semibold text-foreground">{title}</h3>
        <p className="text-caption text-muted-foreground">By {instructorName}</p>

        <div className="mt-auto space-y-1.5 pt-2">
          <div className="flex items-center justify-between text-caption">
            <span className="text-muted-foreground">
              {completedLessons}/{totalLessons} lessons
            </span>
            <span className="font-medium text-foreground">{progressPercent}%</span>
          </div>
          <Progress value={progressPercent} className="h-1.5" />
        </div>
      </div>
    </Link>
  );
};