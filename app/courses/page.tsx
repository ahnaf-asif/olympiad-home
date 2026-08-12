import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CallToAction } from "@/components/home/CallToAction";
import {
  Video,
  BookOpen,
  HelpCircle,
  Award,
  ArrowRight,
  CheckCircle2,
  Users,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Live Courses & Cohorts | The Olympiad Playground",
  description:
    "Join live Math Olympiad cohort courses for Primary, Junior, and Secondary sections taught by Bangladesh's national medalists.",
};

const mathCohorts = [
  {
    id: "primary",
    division: "Primary Section",
    classRange: "Class 3 – 5",
    title: "Primary Math Olympiad Foundation",
    description: "Building early numerical intuition, visual geometry logic, pattern recognition, and elementary problem-solving confidence.",
    highlights: ["Visual Logic & Spatial Reasoning", "Elementary Number Patterns", "Weekly Live Classes + Guided Homework"],
    badge: "Opening Soon",
    badgeVariant: "amber" as const,
  },
  {
    id: "junior",
    division: "Junior Section",
    classRange: "Class 6 – 8",
    title: "Junior Math Olympiad Masterclass",
    description: "Rigorous introductory Combinatorics, Modular Arithmetic, Euclidean Geometry proofs, and Algebraic manipulation for regional & national contests.",
    highlights: ["Modular Arithmetic & Divisibility", "Euclidean Geometry Proofs", "Combinatorial Counting & Pigeonhole"],
    badge: "Opening Soon",
    badgeVariant: "indigo" as const,
  },
  {
    id: "secondary",
    division: "Secondary & Higher Section",
    classRange: "Class 9 – 12",
    title: "Secondary IMO Track Advanced Camp",
    description: "Advanced proof-based problem solving targeting National Math Olympiad selection and the International Mathematical Olympiad (IMO).",
    highlights: ["Functional Equations & Bounds", "Advanced Invariants & Graph Theory", "IMO Shortlist Proof Techniques"],
    badge: "Opening Soon",
    badgeVariant: "purple" as const,
  },
];

const courseSteps = [
  {
    step: "01",
    icon: Video,
    title: "Live Interactive Classes",
    description: "Weekly live sessions led by national IMO medalists focusing on conceptual intuition and proof strategy.",
  },
  {
    step: "02",
    icon: BookOpen,
    title: "Progressive Problem Sets",
    description: "Homework sets powered by multi-tier hints so students solve bottlenecks without instant spoilers.",
  },
  {
    step: "03",
    icon: HelpCircle,
    title: "Mentor Q&A & Office Hours",
    description: "Dedicated weekly live office hours for direct proof feedback and individual student guidance.",
  },
  {
    step: "04",
    icon: Award,
    title: "Online & Offline Club Exams",
    description: "Regular assessments held online and in partnership with regional school & college math clubs nationwide.",
  },
];

export default function CoursesPage() {
  return (
    <>
      <PageHeader
        badge="Cohorts Opening Soon"
        title="Math Olympiad Live Courses & Assessment Network"
        subtitle="Medalist-led live interactive classes paired with progressive problem scaffolding and nationwide club assessment loops."
      />

      {/* Flagship Cohorts Grid */}
      <section className="py-12 md:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Upcoming Cohorts"
            title="Cohorts Launching for Primary, Junior & Secondary Sections"
            subtitle="Structured curricula tailored for every stage of Bangladesh's national Math Olympiad pathway."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {mathCohorts.map((cohort) => (
              <div
                key={cohort.id}
                className="rounded-2xl bg-white p-6 md:p-8 border border-slate-200 shadow-xs hover:border-indigo-600 hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                      {cohort.classRange}
                    </span>
                    <Badge variant={cohort.badgeVariant} className="text-[11px] gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{cohort.badge}</span>
                    </Badge>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                      {cohort.division}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mt-1">
                      {cohort.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-2 font-normal">
                      {cohort.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {cohort.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-600">
                    <Users className="h-4 w-4 text-indigo-600" />
                    <span>Medalist Faculty</span>
                  </div>

                  <Button asChild variant="gradient" size="sm">
                    <Link href="/contact" className="flex items-center gap-1.5">
                      <span>Join Waitlist</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cohort Learning Methodology */}
      <section className="py-12 md:py-20 bg-white border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Course Architecture"
            title="How Our Live Cohort System Works"
            subtitle="A 4-step learning cycle combining live instruction, progressive problem sets, and nationwide assessment loops."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courseSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="rounded-2xl bg-slate-50 p-6 border border-slate-200/80 flex flex-col justify-between gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white shadow-xs">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-2xl font-black font-mono text-indigo-600">
                      {step.step}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
