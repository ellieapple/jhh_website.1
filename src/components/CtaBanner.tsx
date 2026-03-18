"use client";

interface CtaBannerProps {
  onOpen: () => void;
}

export default function CtaBanner({ onOpen }: CtaBannerProps) {
  return (
    <div
      className="px-10 py-16 text-center"
      style={{ background: "var(--slate-900)" }}
    >
      <p
        className="mb-2"
        style={{
          fontFamily: "var(--font-dm-serif)",
          fontSize: "clamp(22px, 3.5vw, 32px)",
          color: "var(--warm-white)",
        }}
      >
        Ground-up construction to home renovations
      </p>
      <span
        className="block text-[15px] mb-7"
        style={{ color: "rgba(245,242,237,0.5)" }}
      >
        Let our decades of experience handle all of your needs.
      </span>
      <div className="flex justify-center">
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
          Tell Us About Your Project
        </button>
      </div>
    </div>
  );
}
