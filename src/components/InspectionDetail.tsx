import { INSPECTION_BLOCKS } from "@/lib/constants";

export default function InspectionDetail() {
  return (
    <section
      id="inspections"
      className="px-6 sm:px-10 py-20"
      style={{ background: "var(--warm-white)" }}
      aria-labelledby="inspections-heading"
    >
      <div className="max-w-[1100px] mx-auto">
        <span className="section-label">Inspection Services</span>
        <h2
          id="inspections-heading"
          className="font-serif mb-4"
          style={{ fontSize: "clamp(28px,4vw,42px)", color: "var(--text-dark)", lineHeight: 1.15 }}
        >
          Backed by hands-on construction experience — not just theory
        </h2>
        <p className="text-base leading-[1.7] mb-10" style={{ color: "var(--text-mid)", maxWidth: "640px" }}>
          All inspections provided in accordance with the International Association of 
          Certified Home Inspectors (NACHI) Standards &amp; Practices.
        </p>

        <div
          className="grid gap-6 md:gap-10 mt-10"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
        >
          {INSPECTION_BLOCKS.map(({ title, body }) => (
            <div
              key={title}
              className="p-8"
              style={{
                background: "var(--white)",
                border: "1px solid var(--sand)",
                borderTop: "3px solid var(--accent-gold)",
              }}
            >
              <h4 className="font-serif text-xl mb-3" style={{ color: "var(--text-dark)" }}>
                {title}
              </h4>
              <p className="text-sm leading-[1.7]" style={{ color: "var(--text-mid)" }}>
                {body}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-8 px-7 py-5"
          style={{
            background: "rgba(201,165,92,0.06)",
            borderLeft: "3px solid var(--accent-gold)",
          }}
        >
          <p className="text-[13px] leading-[1.6]" style={{ color: "var(--text-mid)" }}>
            All inspections follow NACHI Standards &amp; Practices. We provide you with a full, comprehensive report.
          </p>
        </div>
      </div>
    </section>
  );
}
