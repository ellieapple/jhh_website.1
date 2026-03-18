"use client";

import Image from "next/image";
import { useModal } from "@/components/providers";
import { PHONE_DISPLAY, PHONE_HREF, STATES_BADGE } from "@/lib/constants";

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden"
      style={{ minHeight: "100svh", marginTop: "97px", background: "var(--slate-900)" }}
    >
      {/* Background image */}
      <Image
        src="/images/home2.jpg"
        alt="Custom home exterior"
        fill
        priority
        className="object-cover"
        style={{ opacity: 0.4 }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(15,25,35,0.92) 0%, rgba(15,25,35,0.6) 50%, rgba(15,25,35,0.85) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[720px] px-6 sm:px-10 py-12 sm:py-16">
        {/* Badge */}
        <div
          className="animate-fade-up-1 inline-flex items-center gap-2 px-4 py-2 mb-7 text-[11px] font-bold tracking-[0.12em] uppercase"
          style={{
            background: "rgba(201,165,92,0.12)",
            border: "1px solid rgba(201,165,92,0.25)",
            color: "var(--accent-gold)",
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
          <em style={{ fontStyle: "italic", color: "var(--accent-gold)" }}>&amp; Building</em> Consultant
        </h1>

        {/* Sub */}
        <p
          className="animate-fade-up-3 text-[15px] sm:text-[17px] leading-[1.7] mb-9 max-w-[520px]"
          style={{ color: "rgba(245,242,237,0.7)" }}
        >
          20+ years of hands-on experience across HVAC, roofing, siding, framing, and plumbing. 
          From ground-up construction to home renovations — we understand how the entire system works together.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-4 flex flex-wrap gap-3.5">
          <button onClick={openModal} className="btn-primary">
            Get Free Estimate &rarr;
          </button>
          <a href="#work" className="btn-secondary">
            View Our Work
          </a>
        </div>

        {/* Phone */}
        <a
          href={PHONE_HREF}
          className="animate-fade-up-4 mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors no-underline"
          style={{ color: "rgba(245,242,237,0.5)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,242,237,0.5)")}
        >
          &#9742; {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  );
}
