import React from "react";
import { Heart, Trophy, Lightbulb, Users } from "lucide-react";

const metrics = [
  {
    icon: Lightbulb,
    value: "Math Archive",
    label: "Scaffolding Engine",
    description: "Step-by-step conceptual hints without solution spoilers",
  },
  {
    icon: Trophy,
    value: "Live Cohorts",
    label: "Primary, Junior & Secondary",
    description: "Interactive classes led by BD national medalists",
  },
  {
    icon: Users,
    value: "Club Network",
    label: "Online & Offline Exams",
    description: "Collaborating with school & college math clubs nationwide",
  },
  {
    icon: Heart,
    value: "100% Non-Profit",
    label: "Core Foundation",
    description: "Reinvested in server bandwidth & student contest grants",
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
