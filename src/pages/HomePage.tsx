import {
  ArrowRight,
  FileSearch,
  FolderArchive,
  Languages,
  Lock,
  ShieldCheck,
  Star,
  WandSparkles,
} from "lucide-react";
import Badge from "../components/Badge";
import Button from "../components/Button";
import Container from "../components/Container";
import { site } from "../lib/site";

import screen1 from "../assets/screens/screen-1.png";
import screen2 from "../assets/screens/screen-2.png";
import screen3 from "../assets/screens/screen-3.png";

function PhoneMock({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto w-[260px]">
      <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-b from-blue-500/10 to-indigo-500/0 blur-xl" />
      <div className="relative rounded-[2.5rem] bg-slate-900 p-2 shadow-2xl shadow-slate-900/25">
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
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-transparent blur-3xl" />
          <div className="absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-amber-400/20 via-yellow-500/10 to-transparent blur-3xl" />
        </div>

        <Container className="relative grid gap-14 py-16 lg:grid-cols-2 lg:items-center lg:gap-10 lg:py-20">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="bg-blue-600/10 text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
                Private · Organized · Fast
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
              <span className="block text-slate-600 dark:text-slate-300">
                Everything you need to stay organized.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
              {site.tagline} Capture receipts, manage bills, track warranties,
              and find any document instantly — with a clean, professional
              experience designed for daily life.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={site.appStoreUrl} target="_blank" rel="noreferrer">
                <Button
                  size="lg"
                  leftIcon={<ArrowRight className="size-5" />}
                >
                  Download on App Store
                </Button>
              </a>
              <a href={site.playStoreUrl} target="_blank" rel="noreferrer">
                <Button size="lg" variant="secondary">
                  Get it on Google Play
                </Button>
              </a>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="grid size-10 place-items-center rounded-xl bg-blue-600/10 text-blue-700 dark:bg-blue-500/15 dark:text-blue-200">
                  <FileSearch className="size-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    Instant search
                  </div>
                  <div>Find any receipt or document in seconds.</div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="grid size-10 place-items-center rounded-xl bg-amber-500/15 text-amber-700 dark:text-amber-200">
                  <Lock className="size-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    Privacy-first
                  </div>
                  <div>Your data stays yours. Built with trust.</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-2">
                <Languages className="size-4" />
                App supports {site.stats.languagesSupported} languages
              </span>
              <span className="text-slate-300 dark:text-white/20">•</span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="size-4" />
                Support & privacy URLs included
              </span>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            <PhoneMock src={screen3} alt="Paper Bank Pro – paywall" />
            <div className="hidden sm:block lg:hidden">
              <PhoneMock src={screen1} alt="Paper Bank – onboarding" />
            </div>
            <div className="hidden sm:block lg:hidden">
              <PhoneMock src={screen2} alt="Paper Bank – onboarding" />
            </div>
            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6">
              <PhoneMock src={screen1} alt="Paper Bank – onboarding" />
              <PhoneMock src={screen2} alt="Paper Bank – onboarding" />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200/70 py-16 dark:border-white/10">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Built for receipts, bills, and everything in between.
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              A simple workflow, polished UI, and powerful organization — so you
              never lose track of what matters.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <FolderArchive className="size-5" />,
                title: "Unlimited documents",
                body: "Store receipts, warranties, and important files.",
              },
              {
                icon: <WandSparkles className="size-5" />,
                title: "Smart reminders",
                body: "Bill due dates & warranty expiry alerts.",
              },
              {
                icon: <ShieldCheck className="size-5" />,
                title: "Pro-grade UX",
                body: "Clean layouts, fast flows, and clarity everywhere.",
              },
              {
                icon: <Lock className="size-5" />,
                title: "Security-minded",
                body: "Designed with privacy and safety in mind.",
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

