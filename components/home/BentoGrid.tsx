"use client";

import React from "react";
import Link from "next/link";
import { Lightbulb, Trophy, Compass, Users, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

const solutions = [
  {
    icon: Lightbulb,
    title: "Progressive Hinting Archive",
    badge: "Scaffolding Engine",
    description: "Eliminating solution spoilers. Our archive provides multi-tier conceptual prompts (Spark → Lemma → Partial Proof) to build true problem-solving intuition.",
    highlight: "3,500+ Curated Olympiad Problems",
    linkText: "Explore Archive",
  },
  {
    icon: Trophy,
    title: "Bi-Weekly Live Contests",
    badge: "Competitive Loops",
    description: "Building consistent practice loops with real-time leaderboards, automated test benches, and editorial breakdowns written by national medalists.",
    highlight: "Math, Physics & Informatics Arenas",
    linkText: "View Schedule",
  },
  {
    icon: Compass,
    title: "Structured Learning Pathways",
    badge: "Guided Curricula",
    description: "Step-by-step curricula spanning Number Theory, Combinatorics, Kinematics, Algorithms, and Logic—taking students from school to IMO/IPhO readiness.",
    highlight: "School to International Divisions",
    linkText: "See Syllabi",
  },
  {
    icon: Users,
    title: "National & International Faculty",
    badge: "Medalist Mentorship",
    description: "Live cohort classes and direct Q&A led by Bangladesh's proven IMO, IPhO, and IOI medalists, university researchers, and veteran coaches.",
    highlight: "Live Cohort Workshops & Office Hours",
    linkText: "Meet Faculty",
  },
];

export function BentoGrid() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Systemic Engineering"
          title="Solving the Core Bottlenecks of Olympiad Education"
          subtitle="Replacing fragmented PDF archives and binary answer keys with structured cognitive scaffolding."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {solutions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white p-5 md:p-8 border border-slate-200 shadow-xs flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all"
              >
                <div className="flex flex-col gap-3 md:gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-xs">
                      <Icon className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <Badge variant="dark" className="text-[10px] md:text-xs">
                      {item.badge}
                    </Badge>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 md:pt-6 border-t border-slate-100 mt-4 md:mt-6 flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-600 text-[11px] md:text-xs">{item.highlight}</span>
                  <Link
                    href="/academics"
                    className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
