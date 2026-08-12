import React from "react";
import { CheckCircle2, Clock, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

const roadmapPhases = [
  {
    phase: "Phase 1 (Immediate Launch)",
    timeline: "Months 1 – 3",
    status: "Active Execution",
    badgeVariant: "indigo" as const,
    title: "Math Olympiad Archive & Live Cohorts",
    items: [
      "Launch open Math Olympiad Scaffolding Archive (Combinatorics, Geometry, Number Theory, Algebra).",
      "Enrollment for Primary (Class 3-5), Junior (Class 6-8), and Secondary (Class 9-12) Math Cohorts.",
      "Establish initial school & college math club partner network across 15 districts.",
    ],
  },
  {
    phase: "Phase 2 (Ecosystem Expansion)",
    timeline: "Months 3 – 6",
    status: "In Development",
    badgeVariant: "purple" as const,
    title: "Nationwide Club Exam Network & Physics Track",
    items: [
      "Expand offline assessment centers in partnership with science and math clubs across all 64 districts.",
      "Launch Theoretical Physics (IPhO Track) open problem archive & live cohorts.",
      "Deploy regional contest grants funded by non-profit live course reinvestment.",
    ],
  },
  {
    phase: "Phase 3 (Next-Gen Technology)",
    timeline: "6+ Months Out",
    status: "Future Vision",
    badgeVariant: "emerald" as const,
    title: "Real-Time Arenas & AI Proof Engine",
    items: [
      "Deploy real-time 1v1 Math & Physics matchmaking arenas with national Elo ratings.",
      "Integrate AI proof verification engine for step-by-step LaTeX and handwritten proof validation.",
      "Launch Informatics (IOI Track) and Economics (IEO Track) full curricula.",
    ],
  },
];

export function StrategicRoadmap() {
  return (
    <section className="py-12 md:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Execution Roadmap"
          title="Our Strategic Growth Milestones"
          subtitle="A phased rollout prioritizing Math Olympiad archiving and live cohorts today, followed by nationwide club assessment loops and advanced technology."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roadmapPhases.map((p, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white p-6 md:p-8 border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    {p.timeline}
                  </span>
                  <Badge variant={p.badgeVariant} className="text-[10px]">
                    {p.status}
                  </Badge>
                </div>

                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {p.phase}
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mt-1">
                    {p.title}
                  </h3>
                </div>

                <div className="space-y-3 pt-2 border-t border-slate-100">
                  {p.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
