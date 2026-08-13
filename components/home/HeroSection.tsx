"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Brain, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function HeroSection() {
  return (
    <section className="bg-slate-900 text-white py-12 md:py-20 lg:py-24 border-b border-slate-800 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-600/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-6">

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Olympiad <span className="text-indigo-400">Reimagined.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
              Open problem archives and medalist-led live courses for Primary, Junior, and Secondary sections across Bangladesh.
            </p>

            {/* Action Buttons (Equal top & bottom pt-10 spacing) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto pt-10">
              <Button
                asChild
                variant="gradient"
                size="default"
                className="h-11 sm:h-14 px-5 sm:px-8 text-xs sm:text-base font-bold shadow-lg shadow-indigo-500/25"
              >
                <Link href="/courses" className="flex items-center justify-center gap-2">
                  <span>Cohorts Opening Soon</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="default"
                className="h-11 sm:h-14 px-5 sm:px-8 text-xs sm:text-base font-bold border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white"
              >
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  <BookOpen className="h-4 w-4 text-indigo-400" />
                  <span>Join Launch Waitlist</span>
                </Link>
              </Button>
            </div>

            {/* Value Highlights (3 Bullet Points) */}
            <div className="pt-10 border-slate-800/80 w-full flex flex-wrap items-center gap-3 sm:gap-6 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                <span>Primary, Junior & Secondary</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                <span>Progressive Scaffolding Archive</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-purple-400 flex-shrink-0" />
                <span>Nationwide Club Network</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Showcase Card (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="rounded-2xl bg-slate-800/90 p-6 md:p-8 shadow-xl border border-slate-700 flex flex-col gap-5">
              
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
                    <Brain className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      Combinatorics Problem #402
                    </h3>
                    <p className="text-[11px] text-slate-400">IMO National Track</p>
                  </div>
                </div>
                <Badge variant="indigo" className="text-[10px] bg-indigo-500/20 text-indigo-300 border-indigo-500/40">
                  Opening Soon
                </Badge>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-mono bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                Let S be a set of 2026 points in the plane. Prove that there exists a monochromatic subset under rule P(x)...
              </p>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-slate-950 text-white text-xs border border-slate-800 flex items-start gap-2">
                  <span className="font-bold text-amber-400 flex-shrink-0">Hint 1:</span>
                  <span className="text-slate-300">Partition vertices into odd and even degree subsets.</span>
                </div>
                <div className="p-3 rounded-xl bg-indigo-950/80 text-white text-xs border border-indigo-900 flex items-start gap-2">
                  <span className="font-bold text-indigo-400 flex-shrink-0">Hint 2:</span>
                  <span className="text-slate-300">Apply Handshaking Lemma to bounds on d(v) &ge; 3.</span>
                </div>
              </div>

              <div className="pt-1 flex items-center justify-between text-xs font-bold">
                <span className="text-slate-400">Archive Launching in ~30 Days</span>
                <Link href="/contact" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                  <span>Get Notified</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
