"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, User, Mail, Tag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "student",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <div className="rounded-2xl bg-white p-5 sm:p-6 md:p-8 border border-slate-200 shadow-xs h-full flex flex-col justify-between">
      {submitted ? (
        <div className="py-8 md:py-12 flex flex-col items-center text-center gap-3 my-auto">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
            Message Received!
          </h3>
          <p className="text-xs md:text-sm text-slate-600 max-w-md leading-relaxed">
            Thank you, <strong>{formData.name}</strong>. Our team will review your inquiry regarding <strong>{formData.inquiryType === "club" ? "School/College Club Partnership" : formData.inquiryType}</strong> and reply within 24-48 hours.
          </p>
          <Button
            variant="outline"
            className="mt-3"
            onClick={() => {
              setSubmitted(false);
              setFormData({ name: "", email: "", inquiryType: "student", subject: "", message: "" });
            }}
          >
            Send Another Inquiry
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col justify-between h-full gap-4 md:gap-5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 md:pb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Connect with The Olympiad Playground
                </h3>
                <p className="text-[11px] md:text-xs text-slate-600 mt-0.5">
                  Have questions about Math Live Cohorts, Archiving, or Club Partnerships?
                </p>
              </div>
              <Badge variant="indigo" className="text-[10px] md:text-xs">Official Channel</Badge>
            </div>

            {/* Select Inquiry Type */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[11px] md:text-xs font-bold uppercase tracking-wider text-slate-700">
                I am reaching out as a:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                {[
                  { id: "student", label: "Student / Aspirant" },
                  { id: "club", label: "School/College Club" },
                  { id: "mentor", label: "Mentor / Volunteer" },
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, inquiryType: type.id })}
                    className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all min-h-[44px] cursor-pointer ${
                      formData.inquiryType === type.id
                        ? "bg-indigo-600 text-white shadow-xs"
                        : "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Email Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-[11px] md:text-xs font-bold text-slate-700">
                  Full Name / Club Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Notre Dame Math Club / Abrar Fahim"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs md:text-sm text-slate-900 focus:border-indigo-600 focus:outline-none transition-colors min-h-[44px]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-[11px] md:text-xs font-bold text-slate-700">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs md:text-sm text-slate-900 focus:border-indigo-600 focus:outline-none transition-colors min-h-[44px]"
                  />
                </div>
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1">
              <label htmlFor="subject" className="text-[11px] md:text-xs font-bold text-slate-700">
                Subject
              </label>
              <div className="relative">
                <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  id="subject"
                  type="text"
                  placeholder="e.g. Offline Club Exam Center Partnership Request"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs md:text-sm text-slate-900 focus:border-indigo-600 focus:outline-none transition-colors min-h-[44px]"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-[11px] md:text-xs font-bold text-slate-700">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={3}
                placeholder="Write your message, cohort query, or club partnership details..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3.5 rounded-xl border border-slate-300 bg-white text-xs md:text-sm text-slate-900 focus:border-indigo-600 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <Button type="submit" variant="default" size="lg" className="w-full justify-center mt-2">
            <span>Send Message</span>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      )}
    </div>
  );
}
