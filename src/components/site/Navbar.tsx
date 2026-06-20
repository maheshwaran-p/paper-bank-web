import { Link, NavLink } from "react-router-dom";
import { HelpCircle, LifeBuoy, ShieldCheck, Sparkles } from "lucide-react";
import Container from "../Container";
import LogoMark from "./LogoMark";
import { site } from "../../lib/site";
import { cn } from "../../lib/cn";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "rounded-full px-4 py-2 text-sm font-semibold transition",
    "text-slate-600 hover:text-slate-900 hover:bg-slate-900/5",
    "dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/10",
    isActive && "bg-blue-600/10 text-slate-900 dark:bg-blue-500/15 dark:text-white",
  );

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:border-white/10 dark:bg-slate-950/60">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <LogoMark />
          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-tight">
              {site.appName}
            </div>
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              Receipt & Document Organizer
            </div>
          </div>
        </Link>

        <nav className="hidden items-center sm:flex">
          <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white/60 p-1 shadow-sm dark:border-white/10 dark:bg-white/5">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/features" className={navLinkClass}>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="size-4" />
                Features
              </span>
            </NavLink>
            <NavLink to="/faq" className={navLinkClass}>
              <span className="inline-flex items-center gap-2">
                <HelpCircle className="size-4" />
                FAQ
              </span>
            </NavLink>
            <NavLink to="/support" className={navLinkClass}>
              <span className="inline-flex items-center gap-2">
                <LifeBuoy className="size-4" />
                Support
              </span>
            </NavLink>
            <NavLink to="/privacy-policy" className={navLinkClass}>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="size-4" />
                Privacy
              </span>
            </NavLink>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/download"
            className={cn(
              "inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-extrabold transition",
              "bg-blue-600/10 text-blue-800 ring-1 ring-blue-600/20 hover:bg-blue-600/15",
              "dark:bg-blue-500/15 dark:text-blue-100 dark:ring-blue-400/25 dark:hover:bg-blue-500/20",
            )}
          >
            Get the app
          </a>
        </div>
      </Container>
    </header>
  );
}
