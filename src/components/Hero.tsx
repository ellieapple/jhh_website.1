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
      style={{ minHeight: "88vh", marginTop: "97px", background: "var(--slate-900)" }}
    >
      {/* Background image */}
      <Image
        src="/images/kitchen.png"
        alt="Modern kitchen renovation"
        fill
        priority
        className="object-cover"
        style={{ opacity: 0.45, objectPosition: "center center" }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,25,35,0.78) 0%, rgba(15,25,35,0.52) 45%, rgba(15,25,35,0.82) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[820px] px-6 sm:px-10 py-14 sm:py-20">
        <p className="animate-fade-up-1 text-[12px] tracking-[0.14em] uppercase mb-6" style={{ color: "var(--accent-gold)" }}>
          {STATES_BADGE}
        </p>

        {/* Headline */}
        <h1
          className="animate-fade-up-2 font-serif leading-[1.08] mb-5"
          style={{ fontSize: "clamp(42px, 6.2vw, 80px)", color: "var(--warm-white)", letterSpacing: "-0.015em" }}
        >
          J.H.H. Contracting
          <br />
          Consultants
        </h1>

        {/* Sub */}
        <p
          className="animate-fade-up-3 text-[19px] sm:text-[22px] leading-[1.35] mb-3 max-w-[620px] font-serif"
          style={{ color: "rgba(245,242,237,0.92)" }}
        >
          20+ Years of Hands-On Construction Experience
          <br />
          Serving Pennsylvania &amp; New Jersey
        </p>
        <p className="animate-fade-up-3 text-[16px] leading-[1.55] mb-9" style={{ color: "rgba(245,242,237,0.78)" }}>
          Residential • Commercial • Inspection • Consultation
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-4 flex flex-wrap gap-3.5 items-center">
          <button onClick={openModal} className="btn-primary">
            Get Free Estimate
          </button>
          <a href="#work" className="btn-secondary">
            View Our Work
          </a>
          <a
            href={PHONE_HREF}
            className="text-[28px] sm:text-[32px] leading-none font-serif no-underline"
            style={{ color: "rgba(245,242,237,0.88)" }}
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
