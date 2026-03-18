"use client";

interface FinalCtaProps {
  onOpen: () => void;
}

export default function FinalCta({ onOpen }: FinalCtaProps) {
  return (
    <div
      className="py-20 px-10 text-center"
      style={{ background: "var(--slate-900)" }}
    >
      <h2
        className="mb-3"
        style={{
          fontFamily: "var(--font-dm-serif)",
          fontSize: "clamp(26px, 4vw, 40px)",
          color: "var(--warm-white)",
        }}
      >
        Ready to start your project?
      </h2>
      <p
        className="text-base leading-[1.6] mb-8 max-w-[500px] mx-auto"
        style={{ color: "rgba(245,242,237,0.55)" }}
      >
        Tell us about your construction, inspection, or consultation needs.
        We&apos;ll get back to you within 24 hours.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          onClick={onOpen}
          className="inline-flex items-center gap-2 px-8 py-4 text-[13px] font-bold tracking-[0.1em] uppercase transition-all duration-200 cursor-pointer"
          style={{
            background: "var(--accent-gold)",
            color: "var(--slate-900)",
            border: "none",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.background = "var(--accent-gold-light)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.background = "var(--accent-gold)")
          }
        >
          Contact Us →
        </button>
        <a
          href="tel:+12675667725"
          className="inline-flex items-center gap-2 px-8 py-4 text-[13px] font-semibold tracking-[0.06em] uppercase transition-all duration-200 no-underline"
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
  );
}
