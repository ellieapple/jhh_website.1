"use client";

import Image from "next/image";
import { useModal } from "@/components/providers";
import { STATES_BADGE } from "@/lib/constants";

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: "85vh", marginTop: "97px", background: "var(--slate-900)" }}
    >
      {/* Background image */}
      <Image
        src="/images/hero-outsidewindow.png"
        alt="Modern interior renovation"
        fill
        priority
        className="object-cover"
        style={{ opacity: 0.38, objectPosition: "center center" }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(13,22,32,0.94) 0%, rgba(13,22,32,0.62) 50%, rgba(13,22,32,0.88) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[720px] px-6 sm:px-10 py-16 sm:py-20">
        <div
          className="animate-fade-up-1 inline-flex items-center gap-2 mb-7 px-4 py-2 text-[11px] font-bold tracking-[0.12em] uppercase"
          style={{
            color: "var(--accent-gold)",
            background: "rgba(201,165,92,0.12)",
            border: "1px solid rgba(201,165,92,0.25)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent-gold)" }} />
          {STATES_BADGE}
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up-2 font-serif leading-[1.08] mb-5"
          style={{ fontSize: "clamp(36px, 5.5vw, 62px)", color: "var(--warm-white)", letterSpacing: "-0.01em" }}
        >
          Your Area&apos;s Premier Builder{" "}
          <em style={{ color: "var(--accent-gold)" }}>&amp; Building</em>{" "}
          Consultant
        </h1>

        {/* Sub */}
        <p
          className="animate-fade-up-3 text-[17px] leading-[1.7] mb-9 max-w-[520px]"
          style={{ color: "rgba(245,242,237,0.7)" }}
        >
          45+ years of hands-on experience across HVAC, roofing, siding, framing, and plumbing. From ground-up construction to home renovations — we understand how the entire system works together.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-4 flex flex-wrap gap-3.5 items-center">
          <button onClick={openModal} className="btn-primary">
            Get Free Estimate &rarr;
          </button>
          <a href="#work" className="btn-secondary">
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
