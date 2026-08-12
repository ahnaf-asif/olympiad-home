import React from "react";
import { Heart, Trophy, Lightbulb, Users } from "lucide-react";

const metrics = [
  {
    icon: Heart,
    value: "100% Non-Profit",
    label: "Core Model",
    description: "Reinvested in Bangladesh youth & regional grants",
  },
  {
    icon: Trophy,
    value: "Bi-Weekly",
    label: "Live Contests",
    description: "Timed competitions with editorial solution writeups",
  },
  {
    icon: Lightbulb,
    value: "Progressive",
    label: "Hint Architecture",
    description: "Step-by-step guidance without solution spoilers",
  },
  {
    icon: Users,
    value: "50,000+",
    label: "Target Minds",
    description: "National outreach across 64 districts in BD",
  },
];

export function LiveMetricsBanner() {
  return (
    <section className="bg-white pt-10 md:pt-16 pb-10 md:pb-14 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={i}
                className="rounded-2xl bg-slate-50 p-5 md:p-6 border border-slate-200/80 shadow-xs flex flex-col justify-between gap-4"
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-xs">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-xl md:text-2xl font-black text-slate-900 font-mono tracking-tight leading-snug">
                    {m.value}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                    {m.label}
                  </span>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
