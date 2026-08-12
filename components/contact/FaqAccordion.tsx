"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "Which Math Olympiad cohort sections are launching first?",
    answer: "We are launching live cohort programs for Primary (Class 3-5), Junior (Class 6-8), and Secondary (Class 9-12) sections. Each cohort features weekly live interactive classes, guided problem sets with progressive hints, and mentor Q&A.",
  },
  {
    question: "When will the Open Problem Archive be accessible?",
    answer: "The Open Math Olympiad Archive will launch in approximately 30 days. It will feature categorized problem sets across Combinatorics, Number Theory, Geometry, and Algebra with multi-tier progressive conceptual hints.",
  },
  {
    question: "How can school and college clubs collaborate for offline assessments?",
    answer: "Science and Math clubs across Bangladesh can apply through our Contact Page. Partner clubs will be co-branded offline assessment centers for regional mock Olympiad exams and synchronized nationwide contests.",
  },
  {
    question: "Is The Olympiad Playground a commercial coaching center?",
    answer: "No. The Olympiad Playground is a 100% non-profit EdTech foundation. All revenue generated from live cohort enrollments is directly reinvested into cloud server infrastructure, open archives, and regional student travel grants.",
  },
  {
    question: "When will Physics, Informatics, and interactive arenas launch?",
    answer: "Theoretical Physics (IPhO) and Informatics (IOI) open archives will launch in Phase 2 (Months 3-6). Interactive 1v1 arenas, speed sprints, and AI proof verification engines are part of our Phase 3 technology roadmap.",
  },
];

export function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <section className="py-12 md:py-20 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Everything You Need to Know About Our Launch"
          subtitle="Clear answers regarding our Math Olympiad cohorts, open archive timeline, and club assessment network."
        />

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-slate-50 transition-all overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer min-h-[44px]"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="h-4 w-4 text-indigo-600 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-indigo-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
