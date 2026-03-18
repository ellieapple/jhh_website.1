import { CONSULTATION_BLOCKS } from "@/lib/constants";

export default function ConsultationDetail() {
  return (
    <section
      id="consultation"
      className="px-6 sm:px-10 py-20 max-w-[1100px] mx-auto"
      aria-labelledby="consultation-heading"
    >
      <span className="section-label">Consultation Services</span>
      <h2
        id="consultation-heading"
        className="font-serif mb-4"
        style={{ fontSize: "clamp(28px,4vw,42px)", color: "var(--text-dark)", lineHeight: 1.15 }}
      >
        Pre-design &amp; construction analysis
      </h2>
      <p className="text-base leading-[1.7] mb-10" style={{ color: "var(--text-mid)", maxWidth: "640px" }}>
        Strategic guidance from someone who&apos;s actually built it — across every trade.
      </p>

      <div
        className="grid gap-6 md:gap-10 mt-10"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}
      >
        {CONSULTATION_BLOCKS.map(({ title, body }) => (
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

      <p className="mt-6 text-sm font-semibold" style={{ color: "var(--accent-gold)" }}>
        ◆ We provide you with a full, comprehensive report for every consultation.
      </p>
    </section>
  );
}
