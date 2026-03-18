"use client";

import { useModal } from "@/components/providers";

export default function CtaBanner() {
  const { openModal } = useModal();
  return (
    <section className="px-6 sm:px-10 py-16" style={{ background: "var(--slate-900)" }}>
      <div className="panel-dark max-w-[1100px] mx-auto px-8 sm:px-12 py-10 sm:py-12 text-center">
        <span
          className="inline-block text-[11px] font-bold tracking-[0.16em] uppercase mb-4"
          style={{ color: "var(--accent-gold)" }}
        >
          Full-Scope Service
        </span>
        <p
          className="font-serif mb-3"
          style={{ fontSize: "clamp(22px,3.5vw,34px)", color: "var(--warm-white)" }}
        >
          Ground-up construction to home renovations
        </p>
        <span className="block text-[15px] mb-8 mx-auto max-w-[620px]" style={{ color: "rgba(245,242,237,0.58)" }}>
          Let decades of field experience guide the entire job, from first conversation through final execution.
        </span>
        <button onClick={openModal} className="btn-primary mx-auto">
          Tell Us About Your Project
        </button>
      </div>
    </section>
  );
}
