import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  glass?: boolean;
}

export function Card({
  className,
  children,
  hoverEffect = true,
  glass = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl md:rounded-3xl border border-slate-200/80 bg-white p-6 md:p-8 transition-all duration-300",
        glass && "bg-white/80 backdrop-blur-md",
        hoverEffect &&
          "hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/5 hover:border-slate-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
