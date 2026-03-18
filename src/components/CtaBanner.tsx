"use client";

import { useModal } from "@/components/providers";

export default function CtaBanner() {
  const { openModal } = useModal();
  return (
    <div className="px-6 sm:px-10 py-16 text-center" style={{ background: "var(--slate-900)" }}>
      <p
        className="font-serif mb-2"
        style={{ fontSize: "clamp(20px,3.5vw,30px)", color: "var(--warm-white)" }}
      >
        Ground-up construction to home renovations
      </p>
      <span className="block text-[15px] mb-7" style={{ color: "rgba(245,242,237,0.5)" }}>
        Let our decades of experience handle all of your needs.
      </span>
      <button onClick={openModal} className="btn-primary mx-auto">
        Tell Us About Your Project
      </button>
    </div>
  );
}
