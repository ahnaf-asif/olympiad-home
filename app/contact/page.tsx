import React from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { FaqAccordion } from "@/components/contact/FaqAccordion";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Mail, Clock, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Community | The Olympiad Playground",
  description:
    "Get in touch with our national mentor team, apply for mentorship, or partner with us for school and university Olympiad chapters.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        badge="Community & Support"
        title="Connect with The Olympiad Playground"
        subtitle="Whether you are a student aspirant, candidate mentor, or institution, we are here to support your journey."
      />

      <div className="py-12 md:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Contact Form Column (Span 7) */}
            <div className="lg:col-span-7 h-full flex flex-col">
              <ContactForm />
            </div>

            {/* Sidebar Info Column (Span 5) */}
            <div className="lg:col-span-5 h-full flex flex-col justify-between gap-6">
              <Card className="bg-slate-900 text-white p-6 md:p-8 border border-slate-800 shadow-xl flex-1 flex flex-col justify-between">
                <div>
                  <Badge variant="indigo" className="bg-indigo-600 text-white w-fit mb-4">
                    Headquarters
                  </Badge>

                  <h4 className="text-xl font-bold text-white mb-2">
                    The Olympiad Playground Foundation
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    Operational headquarters based in Dhaka, coordinating mentor cohorts and contest hosting across all 64 districts in Bangladesh.
                  </p>
                </div>

                <div className="space-y-4 border-t border-slate-800 pt-4 text-xs text-slate-300">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                    <span>Dhaka, Bangladesh</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                    <span>contact@olympiadplayground.org</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                    <span>Response Time: 24 - 48 hours</span>
                  </div>
                </div>
              </Card>

              <Card className="bg-emerald-50 border-emerald-200 p-6 flex items-start gap-4 flex-shrink-0">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <Heart className="h-5 w-5 fill-white text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-emerald-950">Non-Profit Grant Hotline</h4>
                  <p className="text-xs text-emerald-900/80 mt-1 leading-relaxed">
                    Need-based scholarships are available for students from underprivileged backgrounds. Mention &quot;Grant Application&quot; in your message.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <FaqAccordion />
    </>
  );
}
