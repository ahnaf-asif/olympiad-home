import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer touch-manipulation min-h-[44px]",
  {
    variants: {
      variant: {
        default:
          "bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30",
        secondary:
          "bg-slate-900 text-white hover:bg-slate-800 shadow-md shadow-slate-900/10",
        outline:
          "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900",
        ghost:
          "text-slate-600 hover:text-indigo-600 hover:bg-indigo-50/60",
        white:
          "bg-white text-slate-900 hover:bg-slate-100 shadow-md shadow-black/5 font-bold",
        gradient:
          "bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 text-white hover:opacity-95 shadow-md shadow-indigo-500/25",
      },
      size: {
        sm: "h-10 px-4 text-xs rounded-lg",
        default: "h-12 px-6 text-sm",
        lg: "h-14 px-8 text-base rounded-2xl",
        icon: "h-11 w-11 p-0 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
        className: cn(
          buttonVariants({ variant, size, className }),
          (children.props as { className?: string }).className
        ),
        ...props,
      });
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
