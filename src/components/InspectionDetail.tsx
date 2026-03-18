const inspectionBlocks = [
  {
    title: "Older Homes",
    body: "Structural integrity, energy efficiency, and pre-purchase inspections. We know what to look for because we've built it ourselves.",
  },
  {
    title: "New Homes",
    body: "Construction oversight, OSHA-qualified evaluation, systems operation documentation, and pre-purchase inspections.",
  },
  {
    title: "Energy Audits",
    body: "Energy usage, efficiency analysis, carbon footprint assessment, and operational expense evaluation.",
  },
  {
    title: "Multi-Family",
    body: "Maintenance costs, safety issues, structural integrity, and mechanical & electrical independence of each unit.",
  },
  {
    title: "Commercial & Industrial",
    body: "Factories, office buildings, and other structures — maintenance costs, safety issues, and structural integrity assessments.",
  },
];

export default function InspectionDetail() {
  return (
    <section
      id="inspections"
      className="px-6 sm:px-10 py-20 sm:py-24"
      style={{ background: "var(--cream)" }}
      aria-labelledby="inspections-heading"
    >
      <div className="max-w-[1100px] mx-auto">
        <span className="section-label">Inspection Services</span>
        <h2
          id="inspections-heading"
          className="font-serif mb-5"
          style={{ fontSize: "clamp(28px,4vw,42px)", color: "var(--text-dark)", lineHeight: 1.1 }}
        >
          Backed by hands-on construction experience
        </h2>
        <p className="text-[15px] leading-[1.7] mb-12" style={{ color: "var(--text-mid)", maxWidth: "560px" }}>
          We know what to look for because we&apos;ve built it ourselves.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {inspectionBlocks.map(({ title, body }, index) => (
            <div
              key={title}
              className={`p-7 flex flex-col${index === inspectionBlocks.length - 1 && inspectionBlocks.length % 3 !== 0 ? " lg:col-span-2" : ""}`}
              style={{ background: "#fff" }}
            >
              <div
                className="w-6 h-[2px] mb-5"
                style={{ background: "var(--accent-gold)" }}
              />
              <h4 className="font-serif text-lg mb-3" style={{ color: "var(--text-dark)" }}>
                {title}
              </h4>
              <p className="text-sm leading-[1.75]" style={{ color: "var(--text-mid)" }}>
                {body}
              </p>
            </div>
          ))}
        </div>

        <p
          className="mt-8 text-[13px]"
          style={{ color: "var(--text-mid)", borderLeft: "2px solid var(--accent-gold)", paddingLeft: "14px" }}
        >
          We provide a full, comprehensive report.
        </p>
      </div>
    </section>
  );
}
