import { Apple, ChevronDown, Play } from "lucide-react";
import { useState } from "react";
import Container from "../components/Container";
import { site } from "../lib/site";

const faqs = [
  {
    q: "What is Paper Bank?",
    a: "Paper Bank is a receipt scanner, bill tracker, and document organizer app available on iPhone, iPad, and Android. It helps you scan receipts, track bills and due dates, store warranties, and keep all your important documents in one safe place on your device.",
  },
  {
    q: "Is Paper Bank free to download?",
    a: "Yes, Paper Bank is free to download on both the App Store and Google Play. A Pro upgrade (Paper Bank Pro) is available as an in-app purchase for users who want unlimited storage and advanced features.",
  },
  {
    q: "How does the receipt scanner work?",
    a: "Simply open the app, tap the camera icon, and point your camera at any receipt or document. Paper Bank automatically captures and stores it. You can also import documents and images from other apps like Mail, Files, iCloud, or Google Drive.",
  },
  {
    q: "Can I track bills and get reminders?",
    a: "Yes! Paper Bank has a built-in bill tracker with customizable reminders. Add any bill — utilities, rent, subscriptions, credit cards — set a due date, and get a push notification before it's due so you never pay a late fee.",
  },
  {
    q: "Does Paper Bank work offline?",
    a: "Yes. All your documents and receipts are stored directly on your device. You can access and browse everything even without an internet connection.",
  },
  {
    q: "Is my data private and secure?",
    a: "Absolutely. Paper Bank is privacy-first by design. Your documents are stored on your device, not on a remote server. The app supports Face ID, Touch ID, and passcode lock to keep your documents secure.",
  },
  {
    q: "Can I back up and restore my documents?",
    a: "Yes. Paper Bank lets you export a full backup of all your documents at any time. When you switch phones, simply import the backup file to restore everything — no data is lost.",
  },
  {
    q: "Can I track warranties?",
    a: "Yes! You can log product warranties with purchase dates and expiry dates. Paper Bank will send you a reminder before a warranty expires so you can file a claim in time.",
  },
  {
    q: "What types of documents can I store?",
    a: "Paper Bank supports receipts, bills, invoices, warranties, contracts, insurance policies, medical records, tax documents, home inventory items, and any other paper document you want to digitize and organize.",
  },
  {
    q: "How do I organize my documents?",
    a: "You can organize documents into built-in categories (Receipts, Bills, Warranties, Medical, Insurance, Home, etc.) and add custom tags, notes, and dates. The search feature lets you find any document instantly.",
  },
  {
    q: "What languages does Paper Bank support?",
    a: `Paper Bank supports ${site.stats.languagesSupported} languages including English, Spanish, French, German, Portuguese, Hindi, Arabic, Japanese, Korean, Chinese, and many more.`,
  },
  {
    q: "Is Paper Bank available on iPad?",
    a: "Yes, Paper Bank works on both iPhone and iPad. The iPad version takes full advantage of the larger screen for viewing and organizing your documents.",
  },
  {
    q: "How is Paper Bank different from other receipt apps?",
    a: "Paper Bank combines receipt scanning, bill tracking, warranty management, and document organization all in one app — with an offline-first, privacy-first approach. No account required. Your data stays on your device.",
  },
  {
    q: "How do I contact support?",
    a: `You can reach our support team at ${site.supportEmail} or visit the Support page on this website. We respond within 24 hours.`,
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 dark:border-white/10">
      <button
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>{q}</span>
        <ChevronDown
          className={`size-5 shrink-0 text-slate-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {a}
        </p>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 py-20 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent blur-3xl" />
        </div>
        <Container className="relative text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
            Everything you need to know about Paper Bank — the receipt scanner, bill tracker, and document organizer app for iOS and Android.
          </p>
        </Container>
      </section>

      <section className="py-14">
        <Container className="max-w-3xl">
          <div>
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center dark:border-white/10 dark:bg-white/5">
            <h2 className="text-xl font-extrabold">Still have questions?</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Contact our support team — we're happy to help.
            </p>
            <a
              href="/support"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900"
            >
              Contact Support
            </a>
          </div>

          <div className="mt-10 text-center">
            <p className="mb-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
              Ready to get started?
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={site.appStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900"
              >
                <Apple className="size-4" /> Download for iPhone
              </a>
              <a
                href={site.playStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                <Play className="size-4" /> Download for Android
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
