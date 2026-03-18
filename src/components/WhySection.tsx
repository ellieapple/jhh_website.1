"use client";

import { TRADES } from "@/lib/constants";

const features = [
  {
    title: "Fast Estimates",
    desc: "Get an estimate for your project quickly and accurately. We respect your time and your budget.",
    cta: "Get Estimate",
    href: "#contact",
  },
  {
    title: "Expert Team",
    desc: "Our certified and licensed professionals deliver high-quality building every time.",
    cta: "Get Estimate",
    href: "#contact",
  },
  {
    title: "Quality Guarantee",
    desc: "100% satisfaction guarantee on all our building services. We stand behind every project.",
    cta: "Schedule Inspection",
    href: "#inspections",
  },
  {
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
      <p className="text-base leading-[1.7] max-w-[580px] mb-10" style={{ color: "var(--text-mid)" }}>
        45+ years of hands-on expertise across every trade means we catch what others miss — and build what others can&apos;t.
      </p>

      {/* Trade tags */}
      <div className="flex flex-wrap gap-2 mb-14">
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

      {/* Feature rows — no boxes */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ title, desc, cta, href }) => (
          <a
            key={title}
            href={href}
            className="group block no-underline"
          >
            <div
              className="w-8 h-[2px] mb-5 transition-all duration-300 group-hover:w-12"
              style={{ background: "var(--accent-gold)" }}
            />
            <div
              className="font-serif text-lg mb-2 transition-colors duration-300 group-hover:text-[var(--accent-gold)]"
              style={{ color: "var(--text-dark)" }}
            >
              {title}
            </div>
            <div
              className="text-[13px] leading-[1.7] mb-4"
              style={{ color: "var(--text-mid)" }}
            >
              {desc}
            </div>
            <span
              className="text-[11px] font-bold tracking-[0.1em] uppercase"
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
