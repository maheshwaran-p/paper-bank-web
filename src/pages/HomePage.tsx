import {
  Apple,
  ArrowRight,
  Bell,
  Camera,
  Check,
  FileSearch,
  FileUp,
  FolderArchive,
  Languages,
  Lock,
  Play,
  RefreshCcw,
  Tag,
  WifiOff,
  ShieldCheck,
  Star,
  WandSparkles,
} from "lucide-react";
import Badge from "../components/Badge";
import Container from "../components/Container";
import { site } from "../lib/site";

import screen2 from "../assets/screens/screen-2.png";
import screen3 from "../assets/screens/screen-3.png";

function PhoneMock({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative mx-auto w-[280px] ${className ?? ""}`}>
      <div className="absolute -inset-4 rounded-[2.75rem] bg-gradient-to-b from-blue-500/15 to-indigo-500/0 blur-2xl" />
      <div className="relative rounded-[2.75rem] bg-slate-900 p-2 shadow-2xl shadow-slate-950/40 ring-1 ring-white/10">
        <div className="rounded-[2.1rem] bg-black p-1">
          <img
            src={src}
            alt={alt}
            className="h-auto w-full rounded-[1.9rem]"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-48 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/25 via-indigo-500/10 to-transparent blur-3xl" />
          <div className="absolute -bottom-56 right-[-140px] h-[680px] w-[680px] rounded-full bg-gradient-to-br from-sky-400/10 via-blue-500/10 to-transparent blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/10 to-transparent" />
        </div>

        <Container className="relative grid gap-14 py-16 lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-20">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="border border-white/10 bg-white/5 text-white">
                <span className="inline-flex items-center gap-2">
                  <span className="size-2 rounded-full bg-blue-400" />
                  {site.appName}
                </span>
              </Badge>
              <Badge>
                <span className="inline-flex items-center gap-2">
                  <Star className="size-4 text-amber-500" />
                  {site.stats.rating} · {site.stats.ratingsCount} ratings
                </span>
              </Badge>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
              {site.appNamePro}
              <span className="block text-white/75">
                Your receipts, bills & warranties — always in one place.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
              {site.tagline} Scan receipts, manage bills, track warranties, and
              find any document instantly — with smart reminders so you never
              miss a bill or a warranty expiry.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/70">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Play className="size-4 text-white/80" />
                {site.stats.downloads} downloads
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Bell className="size-4 text-white/80" />
                Reminders built-in
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2">
                <Lock className="size-4 text-white/80" />
                Privacy-first
              </span>
            </div>

            <div className="mt-8 grid gap-2 text-sm text-white/70 sm:grid-cols-2">
              {[
                "Never miss a bill due date",
                "Never miss a warranty expiry",
                "All documents in one place",
                "Backup & restore anytime",
              ].map((t) => (
                <div key={t} className="inline-flex items-center gap-2">
                  <span className="grid size-5 place-items-center rounded-full bg-white/10">
                    <Check className="size-3 text-white/80" />
                  </span>
                  {t}
                </div>
              ))}
            </div>

            <div
              id="get-app"
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href={site.playStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-sm transition hover:bg-white/10 sm:w-[240px]"
              >
                <span className="inline-flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-white/10">
                    <Play className="size-5 text-white/85" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-xs font-semibold text-white/70">
                      Get it on
                    </span>
                    <span className="block text-base font-extrabold text-white">
                      Google Play
                    </span>
                  </span>
                </span>
                <ArrowRight className="size-5 text-white/60 transition group-hover:translate-x-0.5 group-hover:text-white/85" />
              </a>
              <a
                href={site.appStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 shadow-sm transition hover:bg-white/10 sm:w-[240px]"
              >
                <span className="inline-flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-white/10">
                    <Apple className="size-5 text-white/85" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-xs font-semibold text-white/70">
                      Download on
                    </span>
                    <span className="block text-base font-extrabold text-white">
                      App Store
                    </span>
                  </span>
                </span>
                <ArrowRight className="size-5 text-white/60 transition group-hover:translate-x-0.5 group-hover:text-white/85" />
              </a>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-semibold text-white/60">
              <span className="inline-flex items-center gap-2">
                <Languages className="size-4" />
                App supports {site.stats.languagesSupported} languages
              </span>
              <span className="text-white/20">•</span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="size-4" />
                Support & privacy URLs included
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative h-[520px] sm:h-[580px]">
              <div className="absolute right-0 top-10 sm:right-6 sm:top-6">
                <PhoneMock
                  src={screen2}
                  alt="Paper Bank – onboarding"
                  className="rotate-[4deg]"
                />
              </div>
              <div className="absolute left-0 top-0 sm:left-0 sm:top-16">
                <PhoneMock
                  src={screen3}
                  alt="Paper Bank Pro – paywall"
                  className="-rotate-[6deg] scale-[0.98]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200/70 py-16 dark:border-white/10">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Why thousands of users love Paper Bank.
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              All your documents in one place, organized in seconds — with
              smart reminders to keep you ahead of due dates and expiry dates.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Camera className="size-5" />,
                title: "Scan & save",
                body: "Scan bills, receipts, and documents with your camera.",
              },
              {
                icon: <FileUp className="size-5" />,
                title: "Import from anywhere",
                body: "Import PDFs and images from other apps.",
              },
              {
                icon: <WifiOff className="size-5" />,
                title: "Offline vault",
                body: "Keep your documents available offline on your device.",
              },
              {
                icon: <FolderArchive className="size-5" />,
                title: "Organize in seconds",
                body: "Sort by categories like Bills, Warranties, and Documents.",
              },
              {
                icon: <Tag className="size-5" />,
                title: "Tags, notes, dates",
                body: "Add details for clean records and faster searching.",
              },
              {
                icon: <FileSearch className="size-5" />,
                title: "Find anything fast",
                body: "Search by title, tag, or keyword in seconds.",
              },
              {
                icon: <Bell className="size-5" />,
                title: "Never miss a due date",
                body: "Bill reminders before the due date and for subscriptions.",
              },
              {
                icon: <WandSparkles className="size-5" />,
                title: "Never miss coverage",
                body: "Warranty expiry reminders so you don't miss protection.",
              },
              {
                icon: <RefreshCcw className="size-5" />,
                title: "Backup & restore",
                body: "Export a backup anytime and restore when changing phones.",
              },
              {
                icon: <Lock className="size-5" />,
                title: "Privacy-first by design",
                body: "Built with trust, privacy, and safety in mind.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <div className="grid size-10 place-items-center rounded-xl bg-slate-900/5 text-slate-900 dark:bg-white/10 dark:text-white">
                  {f.icon}
                </div>
                <div className="mt-4 text-base font-extrabold">{f.title}</div>
                <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {f.body}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
