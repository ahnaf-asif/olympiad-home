"use client";

import React from "react";
import {
  ArrowRight,
  Binary,
  Atom,
  Code2,
  TrendingUp,
  BookOpenCheck,
  Sparkles,
} from "lucide-react";

export interface Discipline {
  id: string;
  category: "math" | "physics" | "informatics" | "economics" | "social";
  title: string;
  track: string;
  level: string;
  description: string;
  topics: string[];
  problemCount: number;
  badgeVariant: "indigo" | "purple" | "emerald" | "amber" | "slate";
}

interface DisciplineCardProps {
  discipline: Discipline;
  onSelect: (d: Discipline) => void;
}

const categoryIcons = {
  math: Binary,
  physics: Atom,
  informatics: Code2,
  economics: TrendingUp,
  social: BookOpenCheck,
};

export function DisciplineCard({ discipline, onSelect }: DisciplineCardProps) {
  const Icon = categoryIcons[discipline.category] || Sparkles;

  return (
    <div
      onClick={() => onSelect(discipline)}
      className="group rounded-2xl bg-white p-6 border border-slate-200/90 shadow-xs hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between cursor-pointer min-h-[220px] relative overflow-hidden"
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-xs group-hover:bg-indigo-600 transition-colors">
          <Icon className="h-6 w-6" />
        </div>
        <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
          {discipline.track}
        </span>
      </div>

      {/* Main Content */}
      <div className="my-4 flex flex-col gap-2">
        <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
          {discipline.title}
        </h3>
        <p className="text-xs font-semibold text-slate-600 leading-normal">
          {discipline.problemCount.toLocaleString()}+ Problems • {discipline.level}
        </p>
      </div>

      {/* Topics Summary Chips with Clean Wrapping */}
      <div className="flex flex-wrap gap-1.5">
        {discipline.topics.map((topic, i) => (
          <span
            key={i}
            className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md"
          >
            {topic}
          </span>
        ))}
      </div>

      {/* Bottom Action Indicator */}
      <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-bold text-indigo-600">
        <span>View Full Pathway</span>
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}
