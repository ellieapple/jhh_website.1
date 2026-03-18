const inspectionCategories = [
  {
    title: "Older Homes",
    items: ["Structural", "Energy efficiency", "Pre-purchase"],
  },
  {
    title: "New Homes",
    items: ["Construction oversight", "Systems", "Pre-purchase"],
  },
  {
    title: "Energy Audit",
    items: ["Energy usage", "Efficiency analysis"],
  },
  {
    title: "Multi-Family",
    items: ["Maintenance costs", "Safety", "Structural", "Mechanical / Electrical"],
  },
  {
    title: "Commercial / Industrial",
    items: ["Maintenance costs", "Safety", "Structural"],
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
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-20 items-start">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-32">
            <span className="section-label">Inspection Services</span>
            <h2
              id="inspections-heading"
              className="font-serif mb-5"
              style={{ fontSize: "clamp(28px,4vw,42px)", color: "var(--text-dark)", lineHeight: 1.1 }}
            >
              Backed by hands-on construction experience
            </h2>
            <p className="text-[15px] leading-[1.7] mb-6" style={{ color: "var(--text-mid)" }}>
              We know what to look for because we&apos;ve built it ourselves.
            </p>
            <p className="text-[13px] leading-[1.6]" style={{ color: "var(--text-mid)", borderLeft: "2px solid var(--accent-gold)", paddingLeft: "14px" }}>
              We provide a full, comprehensive report.
            </p>
          </div>

          {/* Right: category rows */}
          <div className="flex flex-col" style={{ borderTop: "1px solid var(--sand)" }}>
            {inspectionCategories.map(({ title, items }) => (
              <div
                key={title}
                className="py-5 flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-0"
                style={{ borderBottom: "1px solid var(--sand)" }}
              >
                <div
                  className="text-[11px] font-bold tracking-[0.1em] uppercase shrink-0 sm:w-52"
                  style={{ color: "var(--text-dark)" }}
                >
                  {title}
                </div>
                <div className="text-[14px]" style={{ color: "var(--text-mid)" }}>
                  {items.join(" · ")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
