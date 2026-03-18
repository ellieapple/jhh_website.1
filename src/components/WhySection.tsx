"use client";

import { TRADES } from "@/lib/constants";

const features = [
  {
    icon: "⚡",
    title: "Fast Estimates",
    desc: "Get an estimate for your project quickly and accurately. We respect your time and your budget.",
    cta: "Get Estimate",
    href: "#contact",
  },
  {
    icon: "★",
    title: "Expert Team",
    desc: "Our certified and licensed professionals deliver high-quality building every time.",
    cta: "Get Estimate",
    href: "#contact",
  },
  {
    icon: "✕",
    title: "Multi-Trade Expertise",
    desc: "Experts in HVAC, roofing, siding, framing, plumbing, and radon — all under one roof.",
    cta: "Schedule Inspection",
    href: "#inspections",
  },
  {
    icon: "◆",
    title: "Quality Guarantee",
    desc: "100% satisfaction guarantee on all our building services. We stand behind every project.",
    cta: "Book Consult",
    href: "#consultation",
  },
];

export default function WhySection() {
  return (
    <section id="why" className="py-20 px-6 sm:px-10 max-w-5xl mx-auto">
      <span className="section-label">Why Choose JHH</span>
      <h2
        className="font-serif leading-[1.15] mb-4"
        style={{ fontSize: "clamp(28px,4vw,42px)", color: "var(--text-dark)" }}
      >
        Why Choose JHH Contracting Consultants?
      </h2>
      <p className="text-base leading-relaxed max-w-2xl mb-10" style={{ color: "var(--text-mid)" }}>
        We combine decades of expertise, the latest technology, and modern building techniques to deliver
        exceptional finished products for your home or business construction needs.
      </p>

      {/* Trade tags */}
      <div className="flex flex-wrap gap-2 mb-12">
        {TRADES.map((t) => (
          <span
            key={t}
            className="px-3.5 py-1.5 text-[12px] font-semibold tracking-[0.04em] uppercase"
            style={{ background: "var(--cream)", color: "var(--text-mid)", border: "1px solid var(--sand)" }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Feature cards */}
      <div
        className="grid gap-[2px]"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", background: "var(--sand)" }}
      >
        {features.map(({ icon, title, desc, cta, href }) => (
          <div
            key={title}
            className="group p-8 transition-all duration-300"
            style={{ background: "#fff" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = "var(--slate-900)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#fff")}
          >
            <div
              className="w-10 h-10 flex items-center justify-center text-lg mb-5"
              style={{ border: "1px solid var(--sand)", color: "var(--accent-gold)" }}
            >
              {icon}
            </div>
            <div
              className="fc-title font-serif text-xl mb-2.5 transition-colors duration-300"
              style={{ color: "var(--text-dark)" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
            >
              {title}
            </div>
            <div
              className="text-sm leading-relaxed mb-5 transition-colors duration-300"
              style={{ color: "var(--text-mid)" }}
            >
              {desc}
            </div>
            <a
              href={href}
              className="text-[11px] font-bold tracking-[0.1em] uppercase no-underline transition-colors"
              style={{ color: "var(--accent-gold)" }}
            >
              {cta} &rsaquo;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

