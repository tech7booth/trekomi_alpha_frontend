import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { StudyMaterialList } from "@/components/study-material/study-material-list";
import { STUDY_MATERIALS } from "@/constants/mock/study-material-mock";

export const metadata: Metadata = {
  title: "Study Material",
  description: "Download notes, formula sheets and practice sets.",
};

// TODO: swap for useGetStudyMaterialsQuery() once /study-materials is live.
const StudyMaterialPage = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-6 md:px-6 md:py-8">
      <PageHeader title="Study Material" description="Downloadable notes and resources across all your courses." />
      <StudyMaterialList materials={STUDY_MATERIALS} />
    </div>
  );
};

export default StudyMaterialPage;