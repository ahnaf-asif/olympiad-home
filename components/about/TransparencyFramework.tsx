import React from "react";
import { ShieldCheck, FileText, Lock, Users, Heart } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

const governancePillars = [
  {
    icon: ShieldCheck,
    title: "100% Non-Profit Foundation Charter",
    description: "Incorporated strictly as a non-profit foundation. Shareholders receive zero equity dividends.",
  },
  {
    icon: Lock,
    title: "Open Archives Permanence Mandate",
    description: "All problem archives, hints, and editorials remain permanently free for all Bangladeshi students.",
  },
  {
    icon: FileText,
    title: "Annual Financial Transparency Audits",
    description: "Detailed itemized breakdown of platform revenues, server costs, and grant disbursements published publicly.",
  },
  {
    icon: Heart,
    title: "Dedicated Rural & Need-Based Grants",
    description: "Minimum 20% of live course proceeds reserved for student travel & residential bootcamp scholarships.",
  },
];

export function TransparencyFramework() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Governance & Trust"
          title="Non-Profit Transparency Framework"
          subtitle="We believe an educational trust must hold itself to the highest standard of financial and academic integrity."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {governancePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <Card key={idx} className="bg-slate-50 border-slate-200 p-6 flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-base font-extrabold text-slate-900 leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
