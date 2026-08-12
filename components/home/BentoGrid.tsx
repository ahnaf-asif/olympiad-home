"use client";

import React from "react";
import Link from "next/link";
import { Lightbulb, Trophy, Compass, Users, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

const solutions = [
  {
    icon: Lightbulb,
    title: "Progressive Math Scaffolding Archive",
    badge: "Launching in ~30 Days",
    description: "Eliminating solution spoilers. Our Math Olympiad archive provides multi-tier conceptual prompts (Spark → Lemma → Partial Proof) for Combinatorics, Geometry, Number Theory, and Algebra.",
    highlight: "Primary, Junior & Secondary Problem Sets",
    linkText: "Explore Archive Roadmap",
    linkHref: "/academics",
  },
  {
    icon: Trophy,
    title: "Medalist-Led Live Cohorts",
    badge: "Cohorts Opening Soon",
    description: "Interactive live classes for Primary (Class 3-5), Junior (Class 6-8), and Secondary (Class 9-12) sections taught by national IMO medalists & Gonit Utshob coaches.",
    highlight: "Weekly Live Instruction & Office Hours",
    linkText: "View Upcoming Cohorts",
    linkHref: "/courses",
  },
  {
    icon: Compass,
    title: "Nationwide Club Assessment Network",
    badge: "Club Partnerships Open",
    description: "Partnering with school and college math clubs across Bangladesh to conduct synchronized online assessments and local offline mock exams.",
    highlight: "School & College Club Exam League",
    linkText: "Partner With Us",
    linkHref: "/contact",
  },
  {
    icon: Users,
    title: "100% Non-Profit Foundation Core",
    badge: "Open Access Guarantee",
    description: "Course fees directly fund hosting, cloud server scaling, open problem archives, and travel scholarships for underprivileged students across all 64 districts.",
    highlight: "100% Reinvested in Bangladesh Youth",
    linkText: "Our Governance",
    linkHref: "/about",
  },
];

export function BentoGrid() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Core Launch Pillars"
          title="Building Bangladesh's Math Olympiad Ecosystem"
          subtitle="Replacing fragmented PDF archives and static answer keys with structured cognitive scaffolding and live medalist mentorship."
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
                    <Badge variant="amber" className="text-[10px] md:text-xs">
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
                    href={item.linkHref}
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
