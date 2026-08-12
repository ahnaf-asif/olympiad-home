import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wide transition-colors shadow-xs",
  {
    variants: {
      variant: {
        indigo: "bg-indigo-600 text-white border border-indigo-700",
        emerald: "bg-emerald-700 text-white border border-emerald-800",
        amber: "bg-amber-700 text-white border border-amber-800",
        purple: "bg-purple-700 text-white border border-purple-800",
        slate: "bg-slate-900 text-white border border-slate-950",
        dark: "bg-slate-900 text-slate-100 border border-slate-800",
        outline: "bg-white text-slate-900 border border-slate-300 font-bold",
      },
    },
    defaultVariants: {
      variant: "indigo",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
