import {
  Apple,
  ArrowRight,
  Bell,
  Camera,
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
  WandSparkles,
  ScanLine,
  Receipt,
  Wallet,
  FileBadge,
  Home,
  HeartPulse,
} from "lucide-react";
import Container from "../components/Container";
import { site } from "../lib/site";

const features = [
  {
    icon: <Camera className="size-6" />,
    title: "Receipt Scanner",
    body: "Instantly scan any receipt with your phone camera. Our OCR engine reads and stores the details automatically — no typing required.",
    keyword: "receipt scanner app",
  },
  {
    icon: <ScanLine className="size-6" />,
    title: "Document Scanner",
    body: "Scan contracts, invoices, letters, and any paper document. Store them digitally and access them from anywhere on your device.",
    keyword: "document scanner",
  },
  {
    icon: <Bell className="size-6" />,
    title: "Bill Tracker & Reminders",
    body: "Track every bill, utility payment, subscription, and due date. Get push reminders before anything is due so you never pay a late fee.",
    keyword: "bill tracker app",
  },
  {
    icon: <WandSparkles className="size-6" />,
    title: "Warranty Tracker",
    body: "Log warranties for appliances, electronics, and purchases. Get expiry alerts before your coverage runs out.",
    keyword: "warranty tracker",
  },
  {
    icon: <FileUp className="size-6" />,
    title: "Import PDFs & Images",
    body: "Import documents from Files, Mail, iCloud, Google Drive, or any app. Consolidate everything into one secure vault.",
    keyword: "document organizer",
  },
  {
    icon: <FolderArchive className="size-6" />,
    title: "Smart Organization",
    body: "Organize into categories — Bills, Receipts, Warranties, Medical, Insurance, Home, and more. Custom tags for deeper sorting.",
    keyword: "document management app",
  },
  {
    icon: <FileSearch className="size-6" />,
    title: "Instant Search",
    body: "Find any receipt, document, or bill in seconds by searching by title, tag, amount, or keyword.",
    keyword: "receipt organizer",
  },
  {
    icon: <WifiOff className="size-6" />,
    title: "Offline Access",
    body: "All your documents are stored on-device. Access them even without internet — no cloud required.",
    keyword: "offline document vault",
  },
  {
    icon: <RefreshCcw className="size-6" />,
    title: "Backup & Restore",
    body: "Export a full backup at any time. Restore to a new phone without losing a single receipt or document.",
    keyword: "document backup app",
  },
  {
    icon: <Lock className="size-6" />,
    title: "Privacy-First Security",
    body: "Your data stays on your device. No selling of personal data. App lock with Face ID and passcode support.",
    keyword: "secure document app",
  },
  {
    icon: <Languages className="size-6" />,
    title: "25+ Languages",
    body: `Available in ${site.stats.languagesSupported} languages worldwide — English, Spanish, French, German, Portuguese, Hindi, and more.`,
    keyword: "multilingual receipt app",
  },
  {
    icon: <Tag className="size-6" />,
    title: "Notes, Tags & Dates",
    body: "Add custom notes, tags, and dates to every document. Build rich records for tax season, insurance claims, or returns.",
    keyword: "expense tracker",
  },
];

const useCases = [
  { icon: <Receipt className="size-5" />, title: "Tax Receipts", desc: "Keep every business and personal receipt organized for tax time." },
  { icon: <Wallet className="size-5" />, title: "Expense Tracking", desc: "Track spending across categories with scanned receipts as proof." },
  { icon: <FileBadge className="size-5" />, title: "Insurance Documents", desc: "Store policy documents, claim receipts, and medical bills." },
  { icon: <Home className="size-5" />, title: "Home Inventory", desc: "Log appliances, warranties, and receipts for home purchases." },
  { icon: <HeartPulse className="size-5" />, title: "Medical Records", desc: "Keep medical bills, prescriptions, and insurance docs in one place." },
  { icon: <ShieldCheck className="size-5" />, title: "Warranty Management", desc: "Track product warranties so you never miss a claim window." },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950 py-20 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-48 left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-transparent blur-3xl" />
        </div>
        <Container className="relative text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Every Feature You Need to<br />
            <span className="text-blue-400">Go Paperless</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/70">
            Paper Bank is the most complete receipt scanner, bill tracker, and document organizer app for iPhone and Android. Scan, store, search, and get reminded — all in one place.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={site.appStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow transition hover:bg-white/90"
            >
              <Apple className="size-5" /> Download on App Store
            </a>
            <a
              href={site.playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/15"
            >
              <Play className="size-5" /> Get it on Google Play
            </a>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <h2 className="mb-10 text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
            Powerful Features for Every Need
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-slate-900/5 text-slate-700 dark:bg-white/10 dark:text-white">
                  {f.icon}
                </div>
                <h3 className="mt-4 text-base font-extrabold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 dark:border-white/10 dark:bg-white/5">
        <Container>
          <h2 className="mb-3 text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
            Built for Every Use Case
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-slate-600 dark:text-slate-300">
            From freelancers and small businesses to families and homeowners — Paper Bank adapts to how you manage your documents.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u) => (
              <div
                key={u.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-white/5"
              >
                <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                  {u.icon}
                </div>
                <div>
                  <div className="font-bold">{u.title}</div>
                  <div className="mt-0.5 text-sm text-slate-600 dark:text-slate-300">{u.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="text-center">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Ready to Go Paperless?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-slate-600 dark:text-slate-300">
            Join thousands of users who use Paper Bank to organize receipts, track bills, and store important documents — all for free.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={site.appStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-white/90"
            >
              <Apple className="size-5" /> App Store
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href={site.playStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <Play className="size-5" /> Google Play
              <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
