import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export default function Badge({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700",
        "dark:bg-white/10 dark:text-slate-200",
        className,
      )}
    >
      {children}
    </span>
  );
}

