import React from "react";
import Link from "next/link";
import { ArrowRight, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function CallToAction() {
  return (
    <section className="py-12 md:py-20 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-900 p-6 sm:p-8 md:p-12 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          
          <div className="flex flex-col gap-2.5 max-w-2xl text-left">
            <span className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-amber-400" />
              <span>Phase 1 Launching Soon &bull; Get Notified</span>
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Challenge Your Mind Beyond School Boundaries?
            </h2>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-normal">
              Whether you are an aspiring student, a medalist looking to mentor, or a school/college club seeking collaboration—join our launch waitlist today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto flex-shrink-0">
            <Button asChild variant="gradient" size="lg">
              <Link href="/contact" className="flex items-center justify-center gap-2">
                <span>Join Launch Waitlist</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white">
              <Link href="/contact" className="flex items-center justify-center gap-2">
                <Users className="h-5 w-5 text-indigo-400" />
                <span>Partner With Us</span>
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
