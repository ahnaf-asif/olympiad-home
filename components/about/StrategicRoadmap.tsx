"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Users, Video, Compass, Rocket, Award, BookOpen, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

const oneYearGoals = [
  {
    icon: Target,
    title: "International Team Representation",
    description: "Support candidate training camps for IMO, IPhO, and IOI selection with medalist coaching.",
  },
  {
    icon: Users,
    title: "Reach 50,000+ Active Minds",
    description: "Expand contest registration across school and college divisions across all 64 districts.",
  },
  {
    icon: Video,
    title: "Video Solution Archive",
    description: "Produce 500+ step-by-step video problem breakdowns with LaTeX visual animations.",
  },
  {
    icon: Compass,
    title: "Informatics & Economics Launch",
    description: "Formally introduce structured pathways for IOI competitive programming & IEO economics.",
  },
];

const threeYearGoals = [
  {
    icon: Rocket,
    title: "5 International Delegations",
    description: "Send dedicated BD delegations including specialized Girls' and Junior Olympiad teams.",
  },
  {
    icon: GraduationCap,
    title: "University Bridging Curricula",
    description: "Advanced university-level courses in Abstract Algebra, Real Analysis, and Quantum Physics.",
  },
  {
    icon: Award,
    title: "Residential Summer & Winter Camps",
    description: "Host 10-day intensive residential problem-solving bootcamps with international visiting professors.",
  },
  {
    icon: BookOpen,
    title: "Bangladesh Journal of Young Olympians",
    description: "Publish peer-reviewed student research papers in mathematics, theoretical physics, and algorithms.",
  },
];

export function StrategicRoadmap() {
  const [activeVision, setActiveVision] = useState<"1-year" | "3-year">("1-year");

  return (
    <section className="py-20 md:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Strategic Horizons"
          title="Our Execution Roadmap for Bangladesh"
          subtitle="Building a sustainable talent pipeline requires clear milestones. Here is our 1-year and 3-year strategic growth plan."
        />

        {/* Toggle Controls */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveVision("1-year")}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer min-h-[44px] ${
              activeVision === "1-year"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            1-Year Strategic Horizon (2026-2027)
          </button>

          <button
            onClick={() => setActiveVision("3-year")}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all cursor-pointer min-h-[44px] ${
              activeVision === "3-year"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
            }`}
          >
            3-Year Strategic Horizon (2027-2029)
          </button>
        </div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          {activeVision === "1-year" ? (
            <motion.div
              key="1-year"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {oneYearGoals.map((goal, idx) => {
                const Icon = goal.icon;
                return (
                  <div key={idx} className="rounded-2xl bg-white p-6 md:p-8 border border-slate-200 shadow-xs flex items-start gap-5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-extrabold text-slate-900">
                          {goal.title}
                        </h4>
                        <Badge variant="indigo" className="text-[10px]">Year 1 Focus</Badge>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="3-year"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {threeYearGoals.map((goal, idx) => {
                const Icon = goal.icon;
                return (
                  <div key={idx} className="rounded-2xl bg-white p-6 md:p-8 border border-purple-200 shadow-xs flex items-start gap-5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 border border-purple-100">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-extrabold text-slate-900">
                          {goal.title}
                        </h4>
                        <Badge variant="purple" className="text-[10px]">3-Year Horizon</Badge>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
