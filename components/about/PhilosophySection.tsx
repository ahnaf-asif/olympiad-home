import React from "react";
import { Sparkles, Brain, Compass, Quote, Award } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

const philosophyPillars = [
  {
    icon: Sparkles,
    badge: "20+ Year Heritage",
    title: "The Gonit Utshob Spirit",
    description: "Inspired by Bangladesh's Math Festival—shifting education from high-stakes commercial memorization into a celebratory journey of cognitive discovery.",
  },
  {
    icon: Brain,
    badge: "Pedagogical Scaffolding",
    title: "Creative Leaps Over Rote Spoilers",
    description: "Traditional exams evaluate static formula memory. We provide multi-tier hints (Spark → Lemma → Proof) to build original problem-solving intuition.",
  },
  {
    icon: Compass,
    badge: "64 Districts Covered",
    title: "Democratizing National Talent",
    description: "Bridging the academic divide between Dhaka apex schools and rural district talent through 100% open public problem archives.",
  },
];

export function PhilosophySection() {
  return (
    <section className="py-12 md:py-20 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Foundational Inspiration"
          title="Shifting Education from Transaction to Celebration"
          subtitle="How the legacy of Gonit Utshob drives our mission to transform cognitive development across Bangladesh."
        />

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {philosophyPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-50 p-6 md:p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-indigo-300 hover:shadow-md transition-all"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant="indigo" className="text-[10px]">
                      {item.badge}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Manifesto Quote Banner */}
        <div className="rounded-2xl bg-slate-900 text-white p-6 md:p-10 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <Quote className="h-6 w-6" />
            </div>
            <div>
              <blockquote className="text-base md:text-lg font-extrabold text-white tracking-tight leading-snug">
                &ldquo;Mathematics and science are not subjects to be memorized for certificates; they are languages through which the universe speaks.&rdquo;
              </blockquote>
              <p className="text-xs text-slate-400 mt-2 font-mono">
                The Olympiad Playground Manifesto &bull; Est. Bangladesh
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
