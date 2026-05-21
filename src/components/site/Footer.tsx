import { Link } from "react-router-dom";
import Container from "../Container";
import { site } from "../../lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 py-10 dark:border-white/10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-slate-600 dark:text-slate-300">
          <div className="font-semibold text-slate-900 dark:text-white">
            {site.appName}
          </div>
          <div className="mt-1">
            Marketing: <span className="font-semibold">/</span> · Support:{" "}
            <span className="font-semibold">/support</span> · Privacy:{" "}
            <span className="font-semibold">/privacy-policy</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
          <Link
            to="/support"
            className="rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            Support
          </Link>
          <Link
            to="/privacy-policy"
            className="rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            Privacy Policy
          </Link>
          <a
            href={`mailto:${site.supportEmail}`}
            className="rounded-lg px-3 py-2 text-slate-600 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            {site.supportEmail}
          </a>
        </div>
      </Container>
    </footer>
  );
}

