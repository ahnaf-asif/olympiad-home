import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { DisciplineFilter } from "@/components/academics/DisciplineFilter";
import { ProgressiveHintDemo } from "@/components/academics/ProgressiveHintDemo";
import { CallToAction } from "@/components/home/CallToAction";

export const metadata: Metadata = {
  title: "Academics & Pathways | The Olympiad Playground",
  description:
    "Explore structured curricula and Progressive Hint Architecture across Mathematics, Physics, Informatics, Economics, and Social Sciences.",
};

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        badge="Curriculum & Scaffolding"
        title="Structured Olympiad Pathways"
        subtitle="From school fundamentals to IMO, IPhO, and IOI podiums—guided by progressive cognitive scaffolding."
      />
      <DisciplineFilter />
      <ProgressiveHintDemo />
      <CallToAction />
    </>
  );
}
