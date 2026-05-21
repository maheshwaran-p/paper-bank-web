import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  leftIcon?: ReactNode;
};

const sizeClasses: Record<NonNullable<Props["size"]>, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-4 text-sm",
  lg: "h-12 px-5 text-base",
};

const variantClasses: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "bg-blue-600 text-white shadow-sm hover:bg-blue-700 focus-visible:outline-blue-600",
  secondary:
    "bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15",
  ghost:
    "bg-transparent text-slate-900 hover:bg-slate-900/5 dark:text-white dark:hover:bg-white/10",
};

export default function Button({
  className,
  variant = "primary",
  size = "md",
  leftIcon,
  children,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {leftIcon ? <span className="size-5">{leftIcon}</span> : null}
      {children}
    </button>
  );
}

