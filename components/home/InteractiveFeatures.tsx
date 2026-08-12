"use client";

import React, { useState } from "react";
import { Swords, Zap, Cpu, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const featureTabs = [
  {
    id: "duels",
    title: "Math & Physics Duels",
    subtitle: "Real-time 1v1 problem solving",
    icon: Swords,
    badge: "Live Arena",
  },
  {
    id: "mental",
    title: "Mental Math Sprints",
    subtitle: "Rapid logic & calculation rounds",
    icon: Zap,
    badge: "Speed Sprint",
  },
  {
    id: "ai-checker",
    title: "AI Proof Checker",
    subtitle: "Logical step-by-step verification",
    icon: Cpu,
    badge: "Engine Preview",
  },
];

export function InteractiveFeatures() {
  const [activeTab, setActiveTab] = useState("duels");

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Interactive Formats"
          title="Gamified Learning & Real-Time Practice"
          subtitle="Cognitive growth thrives when practice is active, collaborative, and immediate."
        />

        {/* Selector Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-10">
          {featureTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`p-4 md:p-6 rounded-2xl border text-left transition-all flex flex-col justify-between gap-3 md:gap-4 cursor-pointer min-h-[44px] ${
                  isActive
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-md"
                    : "bg-slate-50 text-slate-900 border-slate-200 hover:bg-slate-100"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-indigo-50 text-indigo-600"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <span
                    className={`text-[10px] md:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 md:px-3 md:py-1 rounded-full ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    {tab.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-extrabold text-base md:text-lg leading-snug">
                    {tab.title}
                  </h3>
                  <p
                    className={`text-xs mt-0.5 leading-relaxed ${
                      isActive ? "text-indigo-100" : "text-slate-600"
                    }`}
                  >
                    {tab.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Feature Preview Showcase Card */}
        <div className="rounded-2xl bg-slate-900 p-5 md:p-10 text-white shadow-xl">
          {activeTab === "duels" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-6 flex flex-col gap-3 md:gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  Live Matchmaking Arena
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  Math & Physics Duels
                </h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  Match with peers across Bangladesh in 10-minute real-time problem-solving duels. Earn Elo ratings on the national leaderboard and compare step proofs.
                </p>
                <div className="space-y-2 text-xs text-slate-300 pt-1">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>Division-matched Elo rating system</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    <span>Instant post-match editorial solution comparison</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 rounded-xl bg-slate-800 p-4 md:p-6 border border-slate-700 space-y-3 md:space-y-4">
                <div className="flex items-center justify-between text-xs font-bold border-b border-slate-700 pb-2.5">
                  <span className="text-emerald-400 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Duel #8942 Active
                  </span>
                  <span className="font-mono text-amber-400 text-[11px]">04:12 Remaining</span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
                    <p className="text-[11px] text-slate-400">Challenger A (Dhaka)</p>
                    <p className="text-sm md:text-base font-bold text-indigo-400 mt-0.5">Rating 1840</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-700">
                    <p className="text-[11px] text-slate-400">Challenger B (Ctg)</p>
                    <p className="text-sm md:text-base font-bold text-purple-400 mt-0.5">Rating 1795</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "mental" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-6 flex flex-col gap-3 md:gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Speed Sprints
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  Mental Math Sprints
                </h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  60-second high-intensity calculation rounds designed to build numerical fluency, rapid pattern recognition, and mental algebra speed for regional Olympiads.
                </p>
              </div>

              <div className="lg:col-span-6 rounded-xl bg-slate-800 p-4 md:p-6 border border-slate-700 text-center">
                <span className="text-xs text-slate-400 uppercase tracking-wider">Question 7 of 15</span>
                <p className="text-2xl md:text-3xl font-mono font-bold text-amber-400 my-3">
                  17 &times; 19 + 23 = ?
                </p>
                <span className="inline-block px-5 py-1.5 bg-indigo-600 text-white font-mono rounded-lg text-sm md:text-base font-bold">
                  346
                </span>
              </div>
            </div>
          )}

          {activeTab === "ai-checker" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
              <div className="lg:col-span-6 flex flex-col gap-3 md:gap-4">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                  Proof Verification Engine
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  AI Solve Checker for Logical Proofs
                </h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  Our upcoming AI proof validation engine analyzes student LaTeX and handwritten step-by-step mathematical proofs—flagging invalid logical jumps while preserving creative valid paths.
                </p>
              </div>

              <div className="lg:col-span-6 rounded-xl bg-slate-800 p-4 md:p-6 border border-slate-700 space-y-2.5 font-mono text-xs">
                <div className="p-3 rounded bg-emerald-950/60 border border-emerald-800 text-emerald-300">
                  <span className="font-bold font-sans text-emerald-400">Step 1: Verified Base Case</span>
                  <p className="mt-1">For n = 1: 1^3 = 1^2 = 1 → Valid.</p>
                </div>
                <div className="p-3 rounded bg-rose-950/60 border border-rose-800 text-rose-300">
                  <span className="font-bold font-sans text-rose-400">Step 2: Logical Jump Detected</span>
                  <p className="mt-1">Assuming f(k+1) holds without applying inductive hypothesis on f(k).</p>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
