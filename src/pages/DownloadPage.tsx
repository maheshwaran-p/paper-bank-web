import { Apple, ArrowRight, Check, Play, Star } from "lucide-react";
import Container from "../components/Container";
import { site } from "../lib/site";

const iosFeatures = [
  "iPhone and iPad support",
  "iCloud backup integration",
  "Face ID & Touch ID lock",
  "Share extension to import from any app",
  "Shortcuts app integration",
  "iOS 15+ compatible",
];

const androidFeatures = [
  "Android 8.0+ compatible",
  "Google Drive backup",
  "Fingerprint & biometric lock",
  "Import from Files, Drive, Gmail",
  "Material You design",
  "Works on phones and tablets",
];

export default function DownloadPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 py-20 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-48 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/20 via-blue-500/10 to-transparent blur-3xl" />
        </div>
        <Container className="relative text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/70">
            <Star className="size-4 text-amber-400" />
            {site.stats.rating} stars · {site.stats.ratingsCount} ratings
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Download Paper Bank
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            The best free receipt scanner, bill tracker, and document organizer for iPhone and Android. Available now on the App Store and Google Play.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={site.appStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex w-full max-w-[260px] items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 transition hover:bg-white/15"
            >
              <span className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-white/10">
                  <Apple className="size-6" />
                </span>
                <span className="text-left leading-tight">
                  <span className="block text-xs text-white/60">Download on the</span>
                  <span className="block text-lg font-extrabold">App Store</span>
                </span>
              </span>
              <ArrowRight className="size-5 text-white/50 transition group-hover:translate-x-0.5 group-hover:text-white/80" />
            </a>
            <a
              href={site.playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex w-full max-w-[260px] items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 transition hover:bg-white/15"
            >
              <span className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-white/10">
                  <Play className="size-6" />
                </span>
                <span className="text-left leading-tight">
                  <span className="block text-xs text-white/60">Get it on</span>
                  <span className="block text-lg font-extrabold">Google Play</span>
                </span>
              </span>
              <ArrowRight className="size-5 text-white/50 transition group-hover:translate-x-0.5 group-hover:text-white/80" />
            </a>
          </div>
          <p className="mt-5 text-sm text-white/40">Free to download · In-app Pro upgrade available · No ads</p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="mb-10 text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
            Available on iOS & Android
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center gap-3">
                <div className="grid size-12 place-items-center rounded-xl bg-slate-900 text-white dark:bg-white/10">
                  <Apple className="size-6" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold">iPhone & iPad</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">iOS App Store</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {iosFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <Check className="size-4 shrink-0 text-green-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={site.appStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900"
              >
                <Apple className="size-4" /> Download on App Store
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
              <div className="flex items-center gap-3">
                <div className="grid size-12 place-items-center rounded-xl bg-green-600 text-white dark:bg-green-600/80">
                  <Play className="size-6" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold">Android</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Google Play Store</p>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                {androidFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <Check className="size-4 shrink-0 text-green-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={site.playStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-700"
              >
                <Play className="size-4" /> Get it on Google Play
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-14 text-center dark:border-white/10 dark:bg-white/5">
        <Container>
          <h2 className="text-2xl font-extrabold">Why Users Love Paper Bank</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              { stat: site.stats.rating + " ★", label: "Average app rating" },
              { stat: site.stats.ratingsCount, label: "Happy users" },
              { stat: site.stats.languagesSupported, label: "Languages supported" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">{s.stat}</div>
                <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">{s.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
