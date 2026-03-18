"use client";

import { useModal } from "@/components/providers";
import { SERVICES } from "@/lib/constants";

export default function ServicesSection() {
  const { openModal } = useModal();
  return (
    <section id="services" className="py-20 px-6 sm:px-10 max-w-5xl mx-auto">
      <span className="section-label">Our Services</span>
      <h2
        className="font-serif leading-[1.15] mb-4"
        style={{ fontSize: "clamp(28px,4vw,42px)", color: "var(--text-dark)" }}
      >
        Full-scope construction &amp; building services
      </h2>
      <p className="text-base leading-relaxed max-w-2xl mb-12" style={{ color: "var(--text-mid)" }}>
        Every service category connects you directly to our team. Tell us what you need — we’ll handle the rest.
      </p>

      <div
        className="grid gap-[2px]"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", background: "var(--slate-900)" }}
      >
        {SERVICES.map(({ tag, title, items }) => (
          <button
            key={title}
            className="relative overflow-hidden p-8 text-left transition-all duration-300 group cursor-pointer border-none"
            style={{ background: "var(--slate-800)" }}
            onClick={openModal}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "var(--slate-700)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "var(--slate-800)")}
            aria-label={`Learn more about ${title} services`}
          >
            <span
              className="absolute bottom-4 right-5 text-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
              style={{ color: "var(--accent-gold)" }}
              aria-hidden
            >
              →
            </span>
            <div
              className="inline-block text-[10px] font-bold tracking-[0.1em] uppercase px-2.5 py-1 mb-3"
              style={{ color: "var(--accent-gold)", border: "1px solid rgba(201,165,92,0.2)" }}
            >
              {tag}
            </div>
            <h3 className="font-serif text-[22px] mb-4" style={{ color: "var(--warm-white)" }}>
              {title}
            </h3>
            <ul className="flex flex-col gap-1.5 list-none p-0 m-0">
              {items.map((item) => (
                <li
                  key={item}
                  className="text-[13px] pl-3.5 relative leading-snug"
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
          </button>
        ))}
      </div>
    </section>
  );
}

