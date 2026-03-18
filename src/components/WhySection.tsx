"use client";

const trades = [
  "HVAC", "Roofing", "Siding", "Framing",
  "Plumbing", "Concrete", "Foundations", "Windows & Doors",
];

const features = [
  {
    icon: "⚡",
    title: "Fast Estimates",
    desc: "Get an estimate for your project quickly and accurately. We respect your time and your budget.",
  },
  {
    icon: "★",
    title: "Expert Team",
    desc: "Our certified and licensed professionals deliver high-quality building every time.",
  },
  {
    icon: "✓",
    title: "Quality Guarantee",
    desc: "100% satisfaction guarantee on all our building services. We stand behind every project.",
  },
  {
    icon: "◆",
    title: "Premium Materials",
    desc: "We use only the finest building materials and installation practices.",
  },
];

export default function WhySection() {
  return (
    <section id="why" className="py-20 px-6 sm:px-10 max-w-[1100px] mx-auto">
      <div
        className="text-[11px] font-bold tracking-[0.16em] uppercase mb-3"
        style={{ color: "var(--accent-gold)" }}
      >
        Why Choose JHH
      </div>
      <h2
        className="leading-[1.15] mb-4"
        style={{
          fontFamily: "var(--font-dm-serif)",
          fontSize: "clamp(28px, 4vw, 42px)",
          color: "var(--text-dark)",
        }}
      >
        We don&apos;t just build —<br />we understand the whole system
      </h2>
      <p
        className="text-base leading-[1.7] max-w-2xl mb-12"
        style={{ color: "var(--text-mid)" }}
      >
        We combine decades of hands-on expertise, the latest technology, and
        modern building techniques to deliver an exceptional finished product
        for your home or business construction needs.
      </p>

      {/* Trade tags */}
      <div className="flex flex-wrap gap-2 mb-12">
        {trades.map((t) => (
          <span
            key={t}
            className="px-3.5 py-1.5 text-[12px] font-semibold tracking-[0.04em] uppercase"
            style={{
              background: "var(--cream)",
              color: "var(--text-mid)",
              border: "1px solid var(--sand)",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* Feature cards */}
      <div
        className="grid gap-[2px]"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          background: "var(--sand)",
        }}
      >
        {features.map(({ icon, title, desc }) => (
          <div
            key={title}
            className="group p-9 transition-all duration-300 cursor-default"
            style={{ background: "var(--white, #fff)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.background =
                "var(--slate-900)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.background = "#fff";
            }}
          >
            <div
              className="w-11 h-11 flex items-center justify-center text-xl mb-5 transition-all duration-300 group-hover:border-[rgba(201,165,92,0.3)]"
              style={{
                border: "1px solid var(--sand)",
                color: "var(--accent-gold)",
              }}
            >
              {icon}
            </div>
            <FeatureTitle>{title}</FeatureTitle>
            <FeatureDesc>{desc}</FeatureDesc>
          </div>
        ))}
      </div>
    </section>
  );
}

// Small sub-components with CSS group-hover via inline transitions
function FeatureTitle({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="text-xl mb-2.5 group-hover:text-[var(--accent-gold)] transition-colors duration-300"
      style={{ fontFamily: "var(--font-dm-serif)" }}
    >
      {children}
    </div>
  );
}

function FeatureDesc({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="text-sm leading-[1.65] group-hover:text-[rgba(245,242,237,0.7)] transition-colors duration-300"
      style={{ color: "var(--text-mid)" }}
    >
      {children}
    </div>
  );
}
