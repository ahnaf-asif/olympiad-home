import React from "react";
import { Badge } from "./Badge";

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
}

export function PageHeader({ badge, title, subtitle }: PageHeaderProps) {
  return (
    <section className="bg-slate-900 text-white py-10 md:py-20 border-b border-slate-800 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-indigo-600/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center gap-3">
        <Badge variant="indigo" className="py-1.5 px-3.5 text-xs font-bold bg-slate-800 text-indigo-300 border border-indigo-500/40">
          {badge}
        </Badge>
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl">
          {title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
