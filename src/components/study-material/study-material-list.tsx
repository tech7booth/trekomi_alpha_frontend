"use client";

import { useMemo, useState } from "react";
import { FileSearch } from "lucide-react";
import { TabFilter, type TabFilterOption } from "@/components/shared/tab-filter";
import { EmptyState } from "@/components/shared/empty-state";
import { StudyMaterialCard } from "./study-material-card";
import { Skeleton } from "@/components/ui/skeleton";
import type { StudyMaterial } from "@/types/study-material.types";

interface StudyMaterialListProps {
  materials: StudyMaterial[];
  isLoading?: boolean;
}

export const StudyMaterialList = ({ materials, isLoading = false }: StudyMaterialListProps) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categoryOptions: TabFilterOption<string>[] = useMemo(() => {
    const uniqueCategories = Array.from(new Set(materials.map((m) => m.categoryLabel)));
    return [
      { value: "all", label: "All", count: materials.length },
      ...uniqueCategories.map((label) => ({
        value: label,
        label,
        count: materials.filter((m) => m.categoryLabel === label).length,
      })),
    ];
  }, [materials]);

  const filteredMaterials = useMemo(
    () => (activeCategory === "all" ? materials : materials.filter((m) => m.categoryLabel === activeCategory)),
    [materials, activeCategory]
  );

  return (
    <div className="space-y-5">
      <TabFilter options={categoryOptions} value={activeCategory} onChange={setActiveCategory} />

      {isLoading ? (
        <div className="space-y-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <Skeleton key={index} className="h-20 rounded-xl" />
          ))}
        </div>
      ) : filteredMaterials.length === 0 ? (
        <EmptyState icon={FileSearch} title="No study material found" description="Try a different category." />
      ) : (
        <div className="space-y-3">
          {filteredMaterials.map((material) => (
            <StudyMaterialCard key={material.id} material={material} />
          ))}
        </div>
      )}
    </div>
  );
};