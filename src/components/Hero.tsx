"use client";

interface HeroProps {
  onOpenModal: () => void;
  onViewWork: () => void;
}

export default function Hero({ onOpenModal, onViewWork }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative flex items-center overflow-hidden"
      style={{
        marginTop: "97px",
        minHeight: "85vh",
        background: "var(--slate-900)",
      }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(15,25,35,0.92) 0%, rgba(15,25,35,0.6) 50%, rgba(15,25,35,0.85) 100%),
            url('/hero-bg.jpg')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Fallback geometric SVG bg when no photo */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Crect fill='%231a2a3a' width='1200' height='800'/%3E%3Crect fill='%23243447' x='100' y='200' width='400' height='350' rx='2'/%3E%3Crect fill='%23344d65' x='120' y='220' width='120' height='180' rx='1'/%3E%3Crect fill='%23344d65' x='260' y='220' width='120' height='180' rx='1'/%3E%3Crect fill='%23243447' x='600' y='150' width='500' height='450' rx='2'/%3E%3Cpolygon fill='%23344d65' points='600,150 850,50 1100,150'/%3E%3Crect fill='%231a2a3a' x='700' y='300' width='80' height='120'/%3E%3Crect fill='%231a2a3a' x='850' y='280' width='60' height='100'/%3E%3Crect fill='%23344d65' x='950' y='350' width='100' height='250'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl px-6 sm:px-10 py-16">
        {/* Badge */}
        <div
          className="animate-fade-up-1 inline-flex items-center gap-2 px-4 py-2 mb-7 text-[11px] font-bold tracking-[0.12em] uppercase"
          style={{
            background: "rgba(201,165,92,0.12)",
            border: "1px solid rgba(201,165,92,0.25)",
            color: "var(--accent-gold)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--accent-gold)" }}
          />
          Serving Pennsylvania &amp; New Jersey
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up-2 leading-[1.08] mb-5 tracking-[-0.01em]"
          style={{
            fontFamily: "var(--font-dm-serif)",
            fontSize: "clamp(36px, 5.5vw, 62px)",
            color: "var(--warm-white)",
          }}
        >
          Your Area&apos;s Premier Builder{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent-gold)" }}>
            &amp; Building
          </em>{" "}
          Consultant
        </h1>

        {/* Sub */}
        <p
          className="animate-fade-up-3 text-[17px] leading-[1.7] mb-9 max-w-lg"
          style={{ color: "rgba(245,242,237,0.7)" }}
        >
          20+ years of hands-on experience across HVAC, roofing, siding,
          framing, and plumbing. From ground-up construction to home
          renovations — we understand how the entire system works together.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up-4 flex gap-3.5 flex-wrap sm:flex-nowrap">
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-8 py-4 text-[13px] font-bold tracking-[0.1em] uppercase transition-all duration-200 cursor-pointer w-full sm:w-auto justify-center"
            style={{
              background: "var(--accent-gold)",
              color: "var(--slate-900)",
              border: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent-gold-light)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--accent-gold)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Get Free Estimate →
          </button>
          <button
            onClick={onViewWork}
            className="inline-flex items-center gap-2 px-8 py-4 text-[13px] font-semibold tracking-[0.06em] uppercase transition-all duration-200 cursor-pointer w-full sm:w-auto justify-center"
            style={{
              background: "transparent",
              color: "var(--warm-white)",
              border: "1px solid rgba(245,242,237,0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent-gold)";
              e.currentTarget.style.color = "var(--accent-gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(245,242,237,0.25)";
              e.currentTarget.style.color = "var(--warm-white)";
            }}
          >
            View Our Work
          </button>
          <a
            href="tel:+12675667725"
            className="inline-flex items-center gap-2 px-8 py-4 text-[13px] font-semibold tracking-[0.06em] uppercase transition-all duration-200 cursor-pointer w-full sm:w-auto justify-center no-underline"
            style={{
              background: "transparent",
              color: "var(--warm-white)",
              border: "1px solid rgba(245,242,237,0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent-gold)";
              e.currentTarget.style.color = "var(--accent-gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(245,242,237,0.25)";
              e.currentTarget.style.color = "var(--warm-white)";
            }}
          >
            ☎ (267) 566-7725
          </a>
        </div>
      </div>
    </section>
  );
}
