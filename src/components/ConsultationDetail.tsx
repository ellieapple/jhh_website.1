import { CONSULTATION_BLOCKS } from "@/lib/constants";

export default function ConsultationDetail() {
  return (
    <section
      id="consultation"
      className="px-6 sm:px-10 py-20 max-w-5xl mx-auto"
      aria-labelledby="consultation-heading"
    >
      <span className="section-label">Consultation Services</span>
      <h2
        id="consultation-heading"
        className="font-serif mb-4"
        style={{ fontSize: "clamp(26px,4vw,40px)", color: "var(--text-dark)", lineHeight: 1.15 }}
      >
        Pre-design &amp; construction analysis
      </h2>
      <p className="text-base leading-relaxed mb-10" style={{ color: "var(--text-mid)", maxWidth: "580px" }}>
        Strategic guidance from someone who has actually built it — across every trade.
        We help you make smarter decisions before a single dollar is spent on construction.
      </p>

      <div
        className="grid gap-5"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
      >
        {CONSULTATION_BLOCKS.map(({ title, body }) => (
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
        ◆&nbsp; We provide you with a full, comprehensive report for every consultation.
      </p>
    </section>
  );
}
