"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, XCircle, CheckCircle2, ChevronRight, Lock, Unlock, Sparkles, Brain } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function ProgressiveHintDemo() {
  const [activeMode, setActiveMode] = useState<"progressive" | "binary">("progressive");
  const [unlockedLevel, setUnlockedLevel] = useState<number>(1);

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Pedagogical Methodology"
          title="Progressive Hint Architecture vs Binary Answer Checking"
          subtitle="Binary grading punishes creative attempts. Progressive hints preserve intellectual discovery while guiding students through logical bottlenecks."
        />

        {/* Mode Switcher */}
        <div className="flex items-center justify-center gap-4 mb-8 md:mb-10">
          <button
            onClick={() => setActiveMode("progressive")}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all cursor-pointer min-h-[44px] ${
              activeMode === "progressive"
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Lightbulb className="h-5 w-5 text-amber-300" />
            <span>Progressive Hint Architecture (Our Model)</span>
          </button>

          <button
            onClick={() => setActiveMode("binary")}
            className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm transition-all cursor-pointer min-h-[44px] ${
              activeMode === "binary"
                ? "bg-rose-600 text-white shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <XCircle className="h-5 w-5 text-rose-200" />
            <span>Traditional Binary Checking (Legacy)</span>
          </button>
        </div>

        {/* Equal Height Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Sample Problem Info */}
          <div className="lg:col-span-5 flex flex-col h-full">
            <div className="bg-slate-900 text-white p-5 md:p-8 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between h-full min-h-[420px]">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <Badge variant="indigo" className="bg-indigo-600 text-white text-xs">
                    IMO Shortlist Problem
                  </Badge>
                  <span className="text-xs text-slate-400 font-mono">Combinatorics</span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2">
                  The Tournament Vertex Lemma:
                </h4>

                <p className="text-xs text-slate-300 leading-relaxed font-mono bg-slate-950 p-4 rounded-xl border border-slate-800">
                  Let T be a tournament graph with 2026 vertices. Show that there exists a vertex v such that every other vertex can be reached from v in at most 2 steps.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Cognitive Challenge: 1850</span>
                <span className="text-emerald-400 font-bold">4-Stage Scaffolding</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Mode Display */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <AnimatePresence mode="wait">
              {activeMode === "progressive" ? (
                <motion.div
                  key="progressive"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="rounded-2xl bg-slate-50 border border-slate-200 p-5 md:p-8 flex flex-col justify-between h-full min-h-[420px]"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                      <div>
                        <h4 className="text-base md:text-lg font-extrabold text-slate-900">
                          Guided Scaffolding Experience
                        </h4>
                        <p className="text-xs text-slate-600">
                          Simulate revealing multi-tier conceptual hints without spoiling the proof.
                        </p>
                      </div>
                      <Badge variant="emerald" className="text-[10px] md:text-xs">Pedagogical Approved</Badge>
                    </div>

                    {/* Hints Stepper */}
                    <div className="flex flex-col gap-2.5">
                      
                      {/* Stage 1 */}
                      <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-1">
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span className="flex items-center gap-1.5 text-indigo-600">
                            <Sparkles className="h-3.5 w-3.5" />
                            Hint 1: Conceptual Spark
                          </span>
                          <span className="text-emerald-600 font-bold text-[11px]">Unlocked</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Consider selecting a vertex <span className="font-mono font-bold text-slate-900">v</span> that has the maximum out-degree in the tournament.
                        </p>
                      </div>

                      {/* Stage 2 */}
                      <div
                        className={`p-3.5 rounded-xl transition-all ${
                          unlockedLevel >= 2
                            ? "bg-white border border-indigo-200 shadow-xs"
                            : "bg-slate-100 border border-slate-200 opacity-60"
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span className="flex items-center gap-1.5 text-indigo-600">
                            <Brain className="h-3.5 w-3.5" />
                            Hint 2: Structural Partition Lemma
                          </span>
                          {unlockedLevel >= 2 ? (
                            <span className="text-emerald-600 font-bold flex items-center gap-1 text-[11px]">
                              <Unlock className="h-3 w-3" /> Unlocked
                            </span>
                          ) : (
                            <span className="text-slate-600 flex items-center gap-1 text-[11px]">
                              <Lock className="h-3 w-3" /> Locked
                            </span>
                          )}
                        </div>
                        {unlockedLevel >= 2 ? (
                          <p className="text-xs text-slate-600 leading-relaxed mt-1">
                            Partition the remaining vertices into out-neighbors <span className="font-mono text-indigo-600 font-bold">Out(v)</span> and non-out-neighbors <span className="font-mono text-purple-600 font-bold">In(v)</span>.
                          </p>
                        ) : (
                          <p className="text-[11px] text-slate-600 italic mt-0.5">Submit attempt or request Tier 2 unlock.</p>
                        )}
                      </div>

                      {/* Stage 3 */}
                      <div
                        className={`p-3.5 rounded-xl transition-all ${
                          unlockedLevel >= 3
                            ? "bg-white border border-purple-200 shadow-xs"
                            : "bg-slate-100 border border-slate-200 opacity-60"
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-bold">
                          <span className="flex items-center gap-1.5 text-purple-600">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            Hint 3: Contradiction Argument
                          </span>
                          {unlockedLevel >= 3 ? (
                            <span className="text-emerald-600 font-bold flex items-center gap-1 text-[11px]">
                              <Unlock className="h-3 w-3" /> Unlocked
                            </span>
                          ) : (
                            <span className="text-slate-600 flex items-center gap-1 text-[11px]">
                              <Lock className="h-3 w-3" /> Locked
                            </span>
                          )}
                        </div>
                        {unlockedLevel >= 3 ? (
                          <p className="text-xs text-slate-600 leading-relaxed mt-1">
                            If a vertex <span className="font-mono font-bold">u &isin; In(v)</span> cannot be reached in 2 steps, then <span className="font-mono font-bold">u</span> must beat <span className="font-mono font-bold">v</span> AND all vertices in <span className="font-mono font-bold">Out(v)</span>, contradicting the maximum out-degree of <span className="font-mono font-bold">v</span>!
                          </p>
                        ) : (
                          <p className="text-[11px] text-slate-600 italic mt-0.5">Submit attempt or request Tier 3 unlock.</p>
                        )}
                      </div>

                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-200 mt-3">
                    <span className="text-xs text-slate-600 font-semibold">
                      Scaffolding: Tier {unlockedLevel} of 3
                    </span>
                    {unlockedLevel < 3 ? (
                      <Button
                        size="sm"
                        variant="default"
                        onClick={() => setUnlockedLevel((prev) => Math.min(3, prev + 1))}
                      >
                        <span>Unlock Next Tier</span>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setUnlockedLevel(1)}
                      >
                        <span>Reset Simulation</span>
                      </Button>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="binary"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="rounded-2xl bg-rose-50 border border-rose-200 p-5 md:p-8 flex flex-col justify-between h-full min-h-[420px]"
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between border-b border-rose-200 pb-3">
                      <div>
                        <h4 className="text-base md:text-lg font-extrabold text-rose-950">
                          Legacy Binary Answer Checking
                        </h4>
                        <p className="text-xs text-rose-800">
                          Simulating how traditional platforms reject partial solutions without feedback.
                        </p>
                      </div>
                      <Badge variant="amber" className="text-[10px] md:text-xs">High Friction</Badge>
                    </div>

                    <div className="p-6 rounded-2xl bg-white border border-rose-200 text-center flex flex-col items-center gap-3 my-auto">
                      <XCircle className="h-12 w-12 text-rose-500" />
                      <h5 className="font-bold text-rose-900 text-base">
                        Submission Result: Incorrect Answer (0 / 10)
                      </h5>
                      <p className="text-xs text-slate-600 max-w-md">
                        Your answer did not match the static key. No conceptual hint, step feedback, or partial credit was awarded.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-rose-100/70 text-xs text-rose-900 leading-relaxed font-semibold">
                    &ldquo;Binary checking causes 72% of aspiring Olympiad students to abandon problem sets when stuck on a single logical step.&rdquo;
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
