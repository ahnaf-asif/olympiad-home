import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { PhilosophySection } from "@/components/about/PhilosophySection";
import { StrategicRoadmap } from "@/components/about/StrategicRoadmap";
import { TransparencyFramework } from "@/components/about/TransparencyFramework";
import { CallToAction } from "@/components/home/CallToAction";

export const metadata: Metadata = {
  title: "About & Mission | The Olympiad Playground",
  description:
    "Learn about our Gonit Utshob inspired philosophy, 1-year and 3-year strategic roadmap, and 100% non-profit governance framework in Bangladesh.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        badge="About The Playground"
        title="Shifting Education from Transaction to Celebration"
        subtitle="Building a world-class cognitive ecosystem for Bangladesh's next generation of scientists, mathematicians, and thinkers."
      />
      <PhilosophySection />
      <StrategicRoadmap />
      <TransparencyFramework />
      <CallToAction />
    </>
  );
}
