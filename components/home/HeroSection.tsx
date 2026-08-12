"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Brain, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function HeroSection() {
  return (
    <section className="bg-slate-900 text-white py-10 md:py-20 lg:py-24 border-b border-slate-800 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4 sm:gap-6">
            
            {/* Dark Badge */}
            <Badge variant="indigo" className="py-1.5 px-3.5 text-xs font-bold gap-2 bg-slate-800 text-indigo-300 border border-indigo-500/40 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="tracking-wide text-[11px] sm:text-xs">100% Non-Profit EdTech Ecosystem in Bangladesh</span>
            </Badge>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Transforming Academic Rigor into{" "}
              <span className="text-indigo-400">
                Pure Intellectual Discovery
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              A modern non-profit platform empowering Bangladesh&apos;s youth through structured Olympiad training, bi-weekly contests, and progressive hint architecture.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-1">
              <Button asChild variant="gradient" size="lg" className="shadow-lg shadow-indigo-500/25">
                <Link href="/academics" className="flex items-center justify-center gap-2">
                  <span>Explore Pathways</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white">
                <Link href="/about" className="flex items-center justify-center gap-2">
                  <BookOpen className="h-5 w-5 text-indigo-400" />
                  <span>Read Concept Paper</span>
                </Link>
              </Button>
            </div>

            {/* Value Highlights */}
            <div className="pt-4 border-t border-slate-800 w-full flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Progressive Hinting (Zero Spoilers)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-indigo-400" />
                <span>Medalist Faculty Mentorship</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-purple-400" />
                <span>Free Open Archives</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Showcase Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-slate-800/90 p-5 md:p-8 shadow-xl border border-slate-700 flex flex-col gap-4 sm:gap-6">
              
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
                    <Brain className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white">
                      Combinatorics Problem #402
                    </h3>
                    <p className="text-[11px] text-slate-400">IMO National Track</p>
                  </div>
                </div>
                <Badge variant="indigo" className="text-[10px] bg-indigo-500/20 text-indigo-300 border-indigo-500/40">
                  Level 3 Track
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
                <span className="text-slate-400">842 Students Solved</span>
                <Link href="/academics" className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
                  <span>Practice Problem</span>
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
