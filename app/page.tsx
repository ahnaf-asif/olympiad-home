import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { LiveMetricsBanner } from "@/components/home/LiveMetricsBanner";
import { BentoGrid } from "@/components/home/BentoGrid";
import { InteractiveFeatures } from "@/components/home/InteractiveFeatures";
import { SustainabilitySection } from "@/components/home/SustainabilitySection";
import { CallToAction } from "@/components/home/CallToAction";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <LiveMetricsBanner />
      <BentoGrid />
      <InteractiveFeatures />
      <SustainabilitySection />
      <CallToAction />
    </>
  );
}
