import { INSPECTION_BLOCKS } from "@/lib/constants";

export default function InspectionDetail() {
  return (
    <section
      id="inspections"
      className="px-6 sm:px-10 py-20"
      style={{ background: "var(--cream)" }}
      aria-labelledby="inspections-heading"
    >
      <div className="max-w-5xl mx-auto">
        <span className="section-label">Inspection Services</span>
        <h2
          id="inspections-heading"
          className="font-serif mb-4"
          style={{ fontSize: "clamp(26px,4vw,40px)", color: "var(--text-dark)", lineHeight: 1.15 }}
        >
          Backed by hands-on construction experience — not just theory
        </h2>
        <p className="text-base leading-relaxed mb-10" style={{ color: "var(--text-mid)", maxWidth: "600px" }}>
          Because we&rsquo;ve built homes and commercial structures from the ground up, we know
          exactly where problems hide and what they cost to fix. All inspections provided in
          accordance with NACHI Standards &amp; Practices.
        </p>

        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
        >
          {INSPECTION_BLOCKS.map(({ title, body }) => (
            <div
              key={title}
              className="p-8"
              style={{
                background: "#fff",
                border: "1px solid var(--sand)",
                borderTop: "3px solid var(--accent-gold)",
              }}
            >
              <h4
                className="font-serif text-xl mb-3"
                style={{ color: "var(--text-dark)" }}
              >
                {title}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-mid)" }}>
                {body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm font-semibold" style={{ color: "var(--accent-gold)" }}>
          ◆&nbsp; We provide you with a full, comprehensive report for every inspection.
        </p>
      </div>
    </section>
  );
}
