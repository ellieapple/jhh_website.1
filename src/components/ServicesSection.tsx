"use client";

interface ServicesProps {
  onOpen: () => void;
}

const services = [
  {
    tag: "Building",
    title: "Residential",
    items: [
      "New Construction",
      "Additions",
      "Kitchens & Bathrooms",
      "Flooring & Pavers",
      "Concrete, Decks, Windows",
      "Doors, Siding, Roofs",
      "Foundations",
    ],
  },
  {
    tag: "Building",
    title: "Commercial",
    items: [
      "New Construction",
      "Additions",
      "Apartment Conversions",
      "Multi-Family",
      "Mixed Use",
    ],
  },
  {
    tag: "Assessment",
    title: "Inspection",
    items: [
      "Residential & Commercial",
      "Structural & Mechanical",
      "Energy Audit",
      "Radon Testing",
    ],
  },
  {
    tag: "Advisory",
    title: "Consultation",
    items: [
      "Pre-Design Analysis",
      "Inspection for Investment",
      "Cost Analysis",
      "Monetization Opportunities",
    ],
  },
];

export default function ServicesSection({ onOpen }: ServicesProps) {
  return (
    <section id="services" className="py-20 px-6 sm:px-10 max-w-[1100px] mx-auto">
      <div
        className="text-[11px] font-bold tracking-[0.16em] uppercase mb-3"
        style={{ color: "var(--accent-gold)" }}
      >
        Our Services
      </div>
      <h2
        className="leading-[1.15] mb-4"
        style={{
          fontFamily: "var(--font-dm-serif)",
          fontSize: "clamp(28px, 4vw, 42px)",
          color: "var(--text-dark)",
        }}
      >
        Full-scope construction &amp; building services
      </h2>
      <p
        className="text-base leading-[1.7] max-w-2xl mb-12"
        style={{ color: "var(--text-mid)" }}
      >
        Every service category connects you directly to our team. Tell us what
        you need — we&apos;ll handle the rest.
      </p>

      <div
        className="grid gap-[2px]"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          background: "var(--slate-900)",
        }}
      >
        {services.map(({ tag, title, items }) => (
          <div
            key={title}
            className="relative overflow-hidden p-9 cursor-pointer transition-all duration-300 group"
            style={{ background: "var(--slate-800)" }}
            onClick={onOpen}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--slate-700)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--slate-800)")
            }
          >
            {/* Arrow reveal */}
            <span
              className="absolute bottom-5 right-5 text-lg transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-[-8px] group-hover:translate-x-0"
              style={{ color: "var(--accent-gold)" }}
              aria-hidden
            >
              →
            </span>

            <div
              className="inline-block text-[10px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 mb-3"
              style={{
                color: "var(--accent-gold)",
                border: "1px solid rgba(201,165,92,0.2)",
              }}
            >
              {tag}
            </div>
            <h3
              className="text-[22px] mb-4"
              style={{
                fontFamily: "var(--font-dm-serif)",
                color: "var(--warm-white)",
              }}
            >
              {title}
            </h3>
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              {items.map((item) => (
                <li
                  key={item}
                  className="text-[13px] pl-3.5 relative leading-[1.5]"
                  style={{ color: "rgba(245,242,237,0.55)" }}
                >
                  <span
                    className="absolute left-0 top-[7px] w-1 h-1 rounded-full"
                    style={{ background: "var(--accent-gold)" }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
