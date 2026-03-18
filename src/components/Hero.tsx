"use client";

import { useModal } from "@/components/providers";
import { PHONE_DISPLAY, PHONE_HREF, STATES_BADGE } from "@/lib/constants";

export default function Hero() {
  const { openModal } = useModal();

  return (
    <section
      id="hero"
      className="relative flex items-end overflow-hidden"
      style={{ minHeight: "100svh", paddingTop: "97px", background: "var(--slate-900)" }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.4 }}
        aria-hidden="true"
      >
        <source src="/videos/jla-hero-final.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay — dark at bottom so text is always readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(15,25,35,0.97) 0%, rgba(15,25,35,0.6) 45%, rgba(15,25,35,0.25) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-6 sm:px-10 pb-16 sm:pb-24">
        {/* Badge */}
        <div
          className="animate-fade-up-1 inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 text-[11px] font-bold tracking-[0.12em] uppercase"
          style={{
            background: "rgba(201,165,92,0.1)",
            border: "1px solid rgba(201,165,92,0.3)",
            color: "var(--accent-gold)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent-gold)" }} />
          {STATES_BADGE}
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up-2 font-serif leading-[1.08] mb-5"
          style={{ fontSize: "clamp(38px, 6vw, 72px)", color: "var(--warm-white)" }}
        >
          JHH Contracting{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent-gold)" }}>Consultants</em>
        </h1>

        {/* Sub */}
        <p
          className="animate-fade-up-3 text-base sm:text-lg leading-relaxed mb-3 max-w-xl"
          style={{ color: "rgba(245,242,237,0.75)" }}
        >
          20+ Years of Hands-On Construction Experience.
        </p>
        <p
          className="animate-fade-up-3 text-sm mb-8"
          style={{ color: "rgba(245,242,237,0.45)" }}
        >
          Residential&nbsp;&bull;&nbsp;Commercial&nbsp;&bull;&nbsp;Inspection&nbsp;&bull;&nbsp;Consultation
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-4 flex flex-col sm:flex-row gap-3">
          <button onClick={openModal} className="btn-primary justify-center">
            Get Free Estimate
          </button>
          <a href="#work" className="btn-secondary justify-center">
            View Our Work
          </a>
        </div>

        {/* Phone */}
        <a
          href={PHONE_HREF}
          className="mt-6 inline-flex items-center gap-1.5 text-sm transition-colors no-underline"
          style={{ color: "rgba(245,242,237,0.45)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,242,237,0.45)")}
        >
          &#9742; {PHONE_DISPLAY}
        </a>
      </div>
    </section>
  );
}
