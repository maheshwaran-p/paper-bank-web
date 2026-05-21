import { Link, NavLink } from "react-router-dom";
import { LifeBuoy, ShieldCheck } from "lucide-react";
import Container from "../Container";
import LogoMark from "./LogoMark";
import { site } from "../../lib/site";
import { cn } from "../../lib/cn";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-900/5",
    "dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/10",
    isActive && "text-slate-900 dark:text-white",
  );

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-white/10 dark:bg-slate-950/70">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <LogoMark />
          <div className="leading-tight">
            <div className="text-sm font-extrabold tracking-tight">
              {site.appName}
            </div>
            <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              Support & Privacy
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
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
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.appStoreUrl}
            className="hidden rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 sm:inline-flex"
            target="_blank"
            rel="noreferrer"
          >
            App Store
          </a>
        </div>
      </Container>
    </header>
  );
}

