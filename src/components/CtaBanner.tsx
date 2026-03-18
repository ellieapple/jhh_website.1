"use client";

import { useModal } from "@/components/providers";

export default function CtaBanner() {
  const { openModal } = useModal();
  return (
    <section className="px-6 sm:px-10 py-16 text-center" style={{ background: "var(--slate-900)" }}>
      <div className="max-w-[980px] mx-auto">
        <p
          className="font-serif mb-2"
          style={{ fontSize: "clamp(22px,3.5vw,34px)", color: "var(--warm-white)" }}
        >
          Ground-up construction to home renovations
        </p>
        <span className="block text-[16px] mb-7" style={{ color: "rgba(245,242,237,0.56)" }}>
          Let our decades of experience handle all of your needs.
        </span>
        <button onClick={openModal} className="btn-primary mx-auto">
          Tell Us About Your Project
        </button>
      </div>
    </section>
  );
}
