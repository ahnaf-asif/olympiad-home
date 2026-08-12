"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DisciplineCard, Discipline } from "./DisciplineCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, X, Clock } from "lucide-react";

const disciplinesData: Discipline[] = [
  {
    id: "math",
    category: "math",
    title: "Olympiad Mathematics",
    track: "Active Launch Track (~30 Days)",
    level: "Primary, Junior & Secondary Sections",
    description: "Rigorous proof-based mathematics focusing on invariant discovery, algebraic bounds, and non-routine problem solving across Primary, Junior, and Secondary divisions.",
    topics: ["Combinatorics", "Number Theory", "Euclidean Geometry", "Functional Equations"],
    problemCount: 1450,
    badgeVariant: "indigo",
  },
  {
    id: "physics",
    category: "physics",
    title: "Theoretical Physics",
    track: "Upcoming Roadmap Track",
    level: "National & International IPhO",
    description: "Deep mathematical physics covering non-linear mechanics, field theory, thermodynamics, and wave optics.",
    topics: ["Kinematics & Dynamics", "Electromagnetism", "Relativity", "Optics & Waves"],
    problemCount: 920,
    badgeVariant: "purple",
  },
  {
    id: "informatics",
    category: "informatics",
    title: "Informatics & Algorithms",
    track: "Upcoming Roadmap Track",
    level: "High School to IOI Podium",
    description: "Competitive programming and algorithm design focusing on asymptotic complexity, graph theory, and dynamic programming.",
    topics: ["Dynamic Programming", "Graph Algorithms", "Segment Trees", "Shortest Paths"],
    problemCount: 880,
    badgeVariant: "emerald",
  },
  {
    id: "economics",
    category: "economics",
    title: "Economics & Logic",
    track: "Upcoming Roadmap Track",
    level: "National Economics Olympiad",
    description: "Mathematical economics, game-theoretic analysis, mechanism design, and macroeconomic equilibrium models.",
    topics: ["Game Theory", "Mechanism Design", "Microeconomic Equilibrium", "Quantitative Finance"],
    problemCount: 450,
    badgeVariant: "amber",
  },
  {
    id: "social",
    category: "social",
    title: "Social Sciences & Philosophy",
    track: "Upcoming Roadmap Track",
    level: "New Frontier Track",
    description: "Analytical social science evaluating classical political theory, ethical paradoxes, public policy logic, and epistemology.",
    topics: ["Political Philosophy", "Moral Logic", "Institutional Analysis", "Epistemology"],
    problemCount: 320,
    badgeVariant: "slate",
  },
];

export function DisciplineFilter() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline | null>(null);

  const filteredDisciplines =
    activeCategory === "all"
      ? disciplinesData
      : disciplinesData.filter((d) => d.category === activeCategory);

  return (
    <section className="py-12 md:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academic Tracks"
          title="Disciplines Offered at The Olympiad Playground"
          subtitle="Explore structured curricula curated by national medalists and university researchers."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 md:mb-12">
          {[
            { id: "all", label: "All Disciplines" },
            { id: "math", label: "Mathematics (Launching Soon)" },
            { id: "physics", label: "Physics (Roadmap)" },
            { id: "informatics", label: "Informatics (Roadmap)" },
            { id: "economics", label: "Economics (Roadmap)" },
            { id: "social", label: "Social Sciences (Roadmap)" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer min-h-[44px] ${
                activeCategory === cat.id
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {filteredDisciplines.map((d) => (
            <DisciplineCard
              key={d.id}
              discipline={d}
              onSelect={(disc) => setSelectedDiscipline(disc)}
            />
          ))}
        </div>

        {/* Detail Modal when a card is tapped */}
        {selectedDiscipline && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
            <div className="w-full max-w-xl rounded-3xl bg-slate-900 text-white p-6 md:p-8 shadow-2xl border border-slate-800 flex flex-col gap-6 relative animate-in fade-in zoom-in-95 duration-200">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <Badge variant="indigo" className="bg-indigo-600 text-white text-xs gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{selectedDiscipline.track}</span>
                  </Badge>
                  <span className="text-xs text-slate-400 font-mono">
                    {selectedDiscipline.problemCount}+ Problems
                  </span>
                </div>
                <button
                  onClick={() => setSelectedDiscipline(null)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  {selectedDiscipline.title}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed font-normal">
                  {selectedDiscipline.description}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  Core Topics Covered
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedDiscipline.topics.map((t, i) => (
                    <span key={i} className="text-xs bg-slate-800 text-slate-200 border border-slate-700 px-3 py-1 rounded-lg">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-400">Level: {selectedDiscipline.level}</span>
                <Button asChild variant="gradient" size="default">
                  <Link href="/contact" onClick={() => setSelectedDiscipline(null)}>
                    <span>Join Launch Waitlist</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
