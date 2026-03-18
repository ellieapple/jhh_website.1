"use client";

import { useModal } from "@/components/providers";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/constants";

export default function CallbackBar() {
  const { openModal } = useModal();
  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-2.5"
      style={{ background: "var(--slate-900)", color: "var(--warm-white)" }}
    >
      <div className="flex items-center gap-4 text-[13px] tracking-wide">
        <span className="opacity-80 hidden sm:block">For immediate assistance, request a callback</span>
        <span className="opacity-80 sm:hidden text-[12px]">JHH Contracting Consultants</span>
        <a
          href={PHONE_HREF}
          className="hidden sm:block text-[12px] font-semibold tracking-wider transition-opacity no-underline"
          style={{ color: "var(--accent-gold)" }}
        >
          {PHONE_DISPLAY}
        </a>
      </div>
      <button
        onClick={openModal}
        className="px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase transition-colors duration-200 cursor-pointer"
        style={{ background: "var(--accent-gold)", color: "var(--slate-900)", border: "none" }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-gold-light)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent-gold)")}
      >
        Request Callback
      </button>
    </div>
  );
}
