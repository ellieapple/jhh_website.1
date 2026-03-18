const inspectionBlocks = [
  {
    title: "Older Homes",
    desc: "Structural integrity, energy efficiency, and pre-purchase inspections. We know what to look for because we've built it ourselves.",
  },
  {
    title: "New Homes",
    desc: "Construction oversight, OSHA-qualified evaluation, systems operation documentation, and pre-purchase inspections.",
  },
  {
    title: "Multi-Family Buildings",
    desc: "Maintenance costs, safety issues, structural integrity, mechanical and electrical independence of each unit.",
  },
  {
    title: "Commercial & Industrial",
    desc: "Factories, office buildings, and other structures — maintenance costs, safety issues, and structural integrity assessments.",
  },
  {
    title: "Energy Audits",
    desc: "Energy usage, efficiency analysis, carbon footprint assessment, and operational expense evaluation.",
  },
];

const consultationBlocks = [
  {
    title: "Green Design",
    desc: "Materials assessment, workmanship evaluation, and anticipated energy usage analysis for sustainable building.",
  },
  {
    title: "Value Added Design",
    desc: "Focused on reducing building costs and operational expenses without compromising quality.",
  },
  {
    title: "Strategic Investment",
    desc: "Cost analysis, potential challenges assessment, and monetization opportunity identification for your property.",
  },
];

function DetailBlock({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      className="p-8"
      style={{
        background: "#fff",
        border: "1px solid var(--sand)",
        borderTop: "3px solid var(--accent-gold)",
      }}
    >
      <h4
        className="text-xl mb-3"
        style={{
          fontFamily: "var(--font-dm-serif)",
          color: "var(--text-dark)",
        }}
      >
        {title}
      </h4>
      <p
        className="text-sm leading-[1.7]"
        style={{ color: "var(--text-mid)" }}
      >
        {desc}
      </p>
    </div>
  );
}

export default function DetailSections() {
  return (
    <>
      {/* INSPECTION */}
      <section
        id="inspections"
        className="py-20 px-6 sm:px-10 max-w-[1100px] mx-auto"
      >
        <div
          className="text-[11px] font-bold tracking-[0.16em] uppercase mb-3"
          style={{ color: "var(--accent-gold)" }}
        >
          Inspection Services
        </div>
        <h2
          className="leading-[1.15] mb-4"
          style={{
            fontFamily: "var(--font-dm-serif)",
            fontSize: "clamp(28px, 4vw, 42px)",
            color: "var(--text-dark)",
          }}
        >
          Backed by hands-on construction experience — not just theory
        </h2>
        <p
          className="text-base leading-[1.7] max-w-2xl mb-10"
          style={{ color: "var(--text-mid)" }}
        >
          All inspections provided in accordance with the International
          Association of Certified Home Inspectors (NACHI) Standards &amp;
          Practices.
        </p>

        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        >
          {inspectionBlocks.map((b) => (
            <DetailBlock key={b.title} {...b} />
          ))}
        </div>

        <div
          className="mt-8 px-7 py-5 text-[13px] leading-[1.6]"
          style={{
            background: "rgba(201,165,92,0.06)",
            borderLeft: "3px solid var(--accent-gold)",
            color: "var(--text-mid)",
          }}
        >
          All inspections follow NACHI Standards &amp; Practices. We provide
          you with a full, comprehensive report.
        </div>
      </section>

      {/* CONSULTATION */}
      <section
        id="consultation"
        className="py-20 px-6 sm:px-10 max-w-[1100px] mx-auto"
      >
        <div
          className="text-[11px] font-bold tracking-[0.16em] uppercase mb-3"
          style={{ color: "var(--accent-gold)" }}
        >
          Consultation Services
        </div>
        <h2
          className="leading-[1.15] mb-4"
          style={{
            fontFamily: "var(--font-dm-serif)",
            fontSize: "clamp(28px, 4vw, 42px)",
            color: "var(--text-dark)",
          }}
        >
          Pre-design &amp; construction analysis
        </h2>
        <p
          className="text-base leading-[1.7] max-w-2xl mb-10"
          style={{ color: "var(--text-mid)" }}
        >
          Strategic guidance from someone who&apos;s actually built it — across
          every trade.
        </p>

        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        >
          {consultationBlocks.map((b) => (
            <DetailBlock key={b.title} {...b} />
          ))}
        </div>

        <p
          className="mt-6 text-sm font-semibold"
          style={{ color: "var(--accent-gold)" }}
        >
          ◆ We provide you with a full, comprehensive report for every
          consultation.
        </p>
      </section>
    </>
  );
}
