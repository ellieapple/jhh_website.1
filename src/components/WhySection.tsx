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
    icon: "✓",
    title: "Quality Guarantee",
    desc: "100% satisfaction guarantee on all our building services. We stand behind every project.",
    cta: "Schedule Inspection",
    href: "#inspections",
  },
  {
    icon: "◆",
    title: "Premium Materials",
    desc: "We use only the finest building materials and installation practices.",
    cta: "Book Consult",
    href: "#consultation",
  },
];

export default function WhySection() {
  return (
    <section id="why" className="py-20 px-6 sm:px-10 max-w-[1100px] mx-auto">
      <span className="section-label">Why Choose JHH</span>
      <h2
        className="font-serif leading-[1.15] mb-4"
        style={{ fontSize: "clamp(28px,4vw,42px)", color: "var(--text-dark)" }}
      >
        We don&apos;t just build —<br />we understand the whole system
      </h2>
      <p className="text-base leading-[1.7] max-w-[640px] mb-12" style={{ color: "var(--text-mid)" }}>
        We combine decades of hands-on expertise, the latest technology, and modern building techniques 
        to deliver an exceptional finished product for your home or business construction needs.
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
          <a
            key={title}
            href={href}
            className="group block p-9 transition-all duration-300 no-underline"
            style={{ background: "var(--white)" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--slate-900)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--white)")}
          >
            <div
              className="w-11 h-11 flex items-center justify-center text-xl mb-5 transition-colors duration-300"
              style={{ border: "1px solid var(--sand)", color: "var(--accent-gold)" }}
            >
              {icon}
            </div>
            <div
              className="font-serif text-xl mb-2.5 transition-colors duration-300 group-hover:text-[var(--accent-gold)]"
              style={{ color: "var(--text-dark)" }}
            >
              {title}
            </div>
            <div
              className="text-sm leading-[1.65] mb-5 transition-colors duration-300 group-hover:text-[rgba(245,242,237,0.7)]"
              style={{ color: "var(--text-mid)" }}
            >
              {desc}
            </div>
            <span
              className="text-[11px] font-bold tracking-[0.1em] uppercase transition-colors"
              style={{ color: "var(--accent-gold)" }}
            >
              {cta} &rsaquo;
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
