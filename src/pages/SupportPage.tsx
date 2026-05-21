import { Mail, MessageCircleQuestion } from "lucide-react";
import Container from "../components/Container";
import Badge from "../components/Badge";
import { site } from "../lib/site";

export default function SupportPage() {
  return (
    <section className="py-14 sm:py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-emerald-500/10 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-200">
              Support URL
            </Badge>
            <Badge>We typically reply within 24–48 hours</Badge>
          </div>

          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Support
          </h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Need help with {site.appName}? Contact us and include screenshots if
            possible.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href={`mailto:${site.supportEmail}?subject=${encodeURIComponent(
                `${site.appName} Support`,
              )}`}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-start gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-blue-600/10 text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
                  <Mail className="size-5" />
                </div>
                <div>
                  <div className="text-base font-extrabold">
                    Email support
                  </div>
                  <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    {site.supportEmail}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-sm font-semibold text-blue-700 group-hover:underline dark:text-blue-200">
                Open email →
              </div>
            </a>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
              <div className="flex items-start gap-3">
                <div className="grid size-10 place-items-center rounded-xl bg-slate-900/5 text-slate-900 dark:bg-white/10 dark:text-white">
                  <MessageCircleQuestion className="size-5" />
                </div>
                <div>
                  <div className="text-base font-extrabold">Include this</div>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600 dark:text-slate-300">
                    <li>Device model & OS version</li>
                    <li>App version</li>
                    <li>Steps to reproduce the issue</li>
                    <li>Screenshots (recommended)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
            <div className="font-extrabold text-slate-900 dark:text-white">
              App Store fields
            </div>
            <div className="mt-2">
              Use this page as your <span className="font-semibold">Support URL</span>{" "}
              and the home page (<span className="font-semibold">/</span>) as your{" "}
              <span className="font-semibold">Marketing URL</span>.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

