export default function LogoMark({ className }: { className?: string }) {
  return (
    <div
      className={
        "grid size-10 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 shadow-sm " +
        (className ?? "")
      }
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="size-6 text-white" fill="currentColor">
        <path d="M12 2l2.7 5.8 6.3.8-4.7 4.2 1.3 6.2L12 16.9 6.4 19l1.3-6.2L3 8.6l6.3-.8L12 2z" />
      </svg>
    </div>
  );
}

