import { FileText, FileType2, Presentation as PresentationIcon, Video, Download } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { StudyMaterial, StudyMaterialFileType } from "@/types/study-material.types";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface StudyMaterialCardProps {
  material: StudyMaterial;
}

const FILE_TYPE_CONFIG: Record<StudyMaterialFileType, { icon: LucideIcon; className: string; label: string }> = {
  pdf: { icon: FileText, className: "bg-rose-500/10 text-rose-600 dark:text-rose-400", label: "PDF" },
  doc: { icon: FileType2, className: "bg-blue-500/10 text-blue-600 dark:text-blue-400", label: "DOC" },
  ppt: { icon: PresentationIcon, className: "bg-orange-500/10 text-orange-600 dark:text-orange-400", label: "PPT" },
  video: { icon: Video, className: "bg-violet-500/10 text-violet-600 dark:text-violet-400", label: "VIDEO" },
};

export const StudyMaterialCard = ({ material }: StudyMaterialCardProps) => {
  const { title, categoryLabel, fileType, fileSizeLabel, uploadedAt, downloadUrl } = material;
  const config = FILE_TYPE_CONFIG[fileType];
  const Icon = config.icon;

  const formattedDate = new Date(uploadedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
      <div className={cn("flex size-12 shrink-0 items-center justify-center rounded-xl", config.className)}>
        <Icon className="size-5" />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-title font-semibold text-foreground">{title}</p>
        <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-caption text-muted-foreground">
          <span>{categoryLabel}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{config.label}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{fileSizeLabel}</span>
          <span aria-hidden="true">&middot;</span>
          <span>{formattedDate}</span>
        </div>
      </div>

      <a
        href={downloadUrl}
        download
        aria-label={`Download ${title}`}
        className={cn(
          "flex size-10 shrink-0 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors",
          "hover:border-primary hover:bg-accent hover:text-primary",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        )}
      >
        <Download className="size-4" />
      </a>
    </div>
  );
};