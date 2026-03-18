"use client";

interface CallbackBarProps {
  onOpen: () => void;
}

export default function CallbackBar({ onOpen }: CallbackBarProps) {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-2.5 text-[13px] tracking-wide"
      style={{ background: "var(--slate-900)", color: "var(--warm-white)" }}
    >
      <span className="opacity-80 hidden sm:block">
        For immediate assistance, request a callback
      </span>
      <span className="opacity-80 sm:hidden">JHH Contracting Consultants</span>
      <button
        onClick={onOpen}
        className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase transition-colors duration-200 cursor-pointer"
        style={{ background: "var(--accent-gold)", color: "var(--slate-900)" }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.background = "var(--accent-gold-light)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.background = "var(--accent-gold)")
        }
      >
        Request Callback
      </button>
    </div>
  );
}
