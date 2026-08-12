"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "Is The Olympiad Playground completely non-profit?",
    answer: "Yes, 100%. We operate strictly as an educational foundation. All revenue generated from live cohort courses is directly reinvested into high-speed contest infrastructure, open public problem archives, and travel/book scholarships for underprivileged students across Bangladesh.",
  },
  {
    question: "How do the bi-weekly live contests work?",
    answer: "Every two weeks, we host timed online problem-solving contests across Mathematics, Theoretical Physics, and Informatics. Participants submit step proofs or algorithmic solutions. Comprehensive editorials written by national medalists are published immediately after the contest window closes.",
  },
  {
    question: "What is the Progressive Hint Architecture?",
    answer: "Unlike traditional platforms that give binary (correct/incorrect) results or spoil the full solution instantly, our progressive hint architecture breaks problems down into multi-stage conceptual prompts (Hint 1: Conceptual Spark → Hint 2: Core Lemma → Hint 3: Partial Proof Setup). This allows students to break through bottlenecks while preserving original problem-solving discovery.",
  },
  {
    question: "How can schools or universities partner with us?",
    answer: "We partner with schools, colleges, and university science clubs to establish local Olympiad chapters, host regional practice leagues, and grant bulk scholarship access to students. Reach out via our Contact form choosing 'School / Institution'.",
  },
  {
    question: "Who can apply as a mentor or contest problem reviewer?",
    answer: "We welcome former IMO, IPhO, IOI, and IEO medalists, Gonit Utshob coaches, and university STEM researchers to join our faculty panel. Mentors receive fair stipends funded by our course reinvestment pool.",
  },
];

export function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200/80">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Frequently Asked Questions"
          title="Everything You Need to Know"
          subtitle="Clear answers about our non-profit mission, live contest format, and mentorship."
        />

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 md:p-6 text-left flex items-center justify-between gap-4 font-bold text-base md:text-lg text-slate-900 hover:text-indigo-600 transition-colors cursor-pointer min-h-[44px]"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-indigo-600" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
