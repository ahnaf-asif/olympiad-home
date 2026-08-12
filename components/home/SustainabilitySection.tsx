import React from "react";
import Link from "next/link";
import { Heart, Server, Users, Award, ShieldCheck, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const reinvestmentLoops = [
  {
    icon: Server,
    title: "Platform Infrastructure",
    percentage: "35%",
    description: "High-speed auto-scaling servers for contest hosting, open problem archives, and LaTeX rendering.",
  },
  {
    icon: Users,
    title: "Medalist Content Faculty",
    percentage: "35%",
    description: "Stipends for national IMO/IPhO medalists writing original problem sets and hint trees.",
  },
  {
    icon: Award,
    title: "Student Grants & Outreach",
    percentage: "20%",
    description: "Sponsoring travel, books, and registration for underprivileged students across all 64 districts.",
  },
  {
    icon: ShieldCheck,
    title: "Open Archive Permanence",
    percentage: "10%",
    description: "Ensuring 100% of problem archives and step hints remain permanently free for all students.",
  },
];

export function SustainabilitySection() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="100% Non-Profit Model"
          title="Ethical Sustainability & Reinvestment Cycle"
          subtitle="Course proceeds directly sustain free public infrastructure for every student in Bangladesh."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6">
            <Badge variant="emerald" className="py-1.5 px-3.5 text-xs font-bold gap-2 w-fit">
              <Heart className="h-3.5 w-3.5 fill-white text-white" />
              <span>Zero Equity / Zero Dividends</span>
            </Badge>

            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Fueling Bangladesh&apos;s Cognitive Engine Without Financial Barriers
            </h3>

            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Every Taka generated from premium live cohorts is locked into maintaining open access problem sets, server bandwidth, and student contest travel grants.
            </p>

            <Button asChild variant="secondary" size="lg" className="w-fit">
              <Link href="/about" className="flex items-center gap-2">
                <span>Read Governance Framework</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {reinvestmentLoops.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="rounded-2xl bg-white p-5 md:p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
                  <div className="flex flex-col gap-2.5 md:gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 md:h-11 md:w-11 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-xs">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xl md:text-2xl font-black text-slate-900 font-mono">
                        {item.percentage}
                      </span>
                    </div>

                    <h4 className="text-sm md:text-base font-bold text-slate-900">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
