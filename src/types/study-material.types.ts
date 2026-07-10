export type StudyMaterialFileType = "pdf" | "doc" | "ppt" | "video";

export interface StudyMaterial {
  id: string;
  title: string;
  categoryLabel: string;
  fileType: StudyMaterialFileType;
  fileSizeLabel: string;
  uploadedAt: string;
  downloadUrl: string;
}