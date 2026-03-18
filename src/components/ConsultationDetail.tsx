const consultationItems = [
  {
    title: "Pre-design / Construction",
    body: "Planning and evaluation before any work begins — so you go in with a clear picture.",
  },
  {
    title: "Cost / Investment",
    body: "Honest cost analysis and identification of potential issues before they become expensive ones.",
  },
  {
    title: "General Consultation",
    body: "Project guidance and decision support from someone who has actually done the work.",
  },
];

export default function ConsultationDetail() {
  return (
    <section
      id="consultation"
      className="px-6 sm:px-10 py-16"
      style={{ background: "var(--slate-900)" }}
      aria-labelledby="consultation-heading"
    >
      <div className="max-w-[1100px] mx-auto">
        <span className="section-label">Consultation Services</span>
        <h2
          id="consultation-heading"
          className="font-serif mb-4"
          style={{ fontSize: "clamp(28px,4vw,42px)", color: "var(--warm-white)", lineHeight: 1.15 }}
        >
          Pre-design &amp; construction analysis
        </h2>
        <p className="text-[16px] leading-[1.7] mb-12" style={{ color: "rgba(245,242,237,0.6)", maxWidth: "640px" }}>
          Strategic guidance from someone who&apos;s actually built it — across every trade.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
          {consultationItems.map(({ title, body }) => (
            <div
              key={title}
              className="pt-6"
              style={{ borderTop: "1px solid rgba(201,165,92,0.35)" }}
            >
              <h4 className="font-serif text-lg mb-2" style={{ color: "var(--warm-white)" }}>
                {title}
              </h4>
              <p className="text-[13px] leading-[1.75]" style={{ color: "rgba(245,242,237,0.55)" }}>
                {body}
              </p>
            </div>
          ))}
        </div>

        <p
          className="mt-10 text-[13px] leading-[1.6]"
          style={{
            color: "rgba(245,242,237,0.4)",
            borderLeft: "3px solid var(--accent-gold)",
            paddingLeft: "14px",
          }}
        >
          We provide a full, comprehensive report.
        </p>
      </div>
    </section>
  );
}
