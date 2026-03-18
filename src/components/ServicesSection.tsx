"use client";

import Image from "next/image";
import { useModal } from "@/components/providers";

const services = [
  {
    title: "Residential",
    image: "/images/kitchen.png",
    items: ["New Construction", "Kitchens", "Bathrooms", "Flooring", "Windows & Doors"],
  },
  {
    title: "Commercial",
    image: "/images/living.png",
    items: ["Apartment Conversions", "Multi-family", "Mixed Use"],
    cta: "Get Estimate",
  },
  {
    title: "Inspection",
    image: "/images/bathroom.png",
    items: ["Residential & Commercial", "Structural", "Energy Audit", "Radon"],
  },
  {
    title: "Consultation",
    image: "/images/home2.jpg",
    items: ["Pre-design Analysis", "Cost Analysis", "Investment Strategy"],
  },
];

export default function ServicesSection() {
  const { openModal } = useModal();
  return (
    <section id="services" className="py-16 sm:py-20" style={{ background: "var(--slate-900)" }}>
      <div className="max-w-[1100px] mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-16 items-start">
          {/* Left column - text and CTAs */}
          <div className="lg:sticky lg:top-32">
            <h2
              className="font-serif leading-[1.1] mb-5"
              style={{ fontSize: "clamp(28px,4vw,40px)", color: "var(--warm-white)" }}
            >
              We Provide Full-Scope Construction &amp; Building Services
            </h2>
            <p className="text-[15px] leading-[1.7] mb-8" style={{ color: "rgba(245,242,237,0.6)" }}>
              Get in touch to discuss your residential, commercial, inspection, or consultation needs with our expert team.
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={openModal} className="btn-primary">
                Request Callback
              </button>
              <a href="#contact" className="btn-secondary">
                Contact Us &rsaquo;
              </a>
            </div>
          </div>

          {/* Right column - service cards grid */}
          <div className="grid grid-cols-2 gap-[2px]" style={{ background: "var(--slate-800)" }}>
            {services.map(({ title, image, items, cta }) => (
              <button
                key={title}
                onClick={openModal}
                className="relative group text-left overflow-hidden cursor-pointer border-none"
                style={{ background: "var(--slate-700)", minHeight: "200px" }}
              >
                {/* Background image */}
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ opacity: 0.35 }}
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(15,25,35,0.95) 30%, rgba(15,25,35,0.5) 100%)",
                  }}
                />
                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <h3
                    className="font-serif text-xl mb-3"
                    style={{ color: "var(--warm-white)" }}
                  >
                    {title}
                  </h3>
                  <ul className="flex flex-col gap-1 list-none p-0 m-0 mb-3">
                    {items.slice(0, 4).map((item) => (
                      <li
                        key={item}
                        className="text-[12px] leading-snug"
                        style={{ color: "rgba(245,242,237,0.6)" }}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  {cta && (
                    <span
                      className="text-[11px] font-bold tracking-[0.08em] uppercase mt-auto"
                      style={{ color: "var(--accent-gold)" }}
                    >
                      {cta} &rsaquo;
                    </span>
                  )}
                </div>
                {/* Hover arrow */}
                <span
                  className="absolute bottom-4 right-4 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: "var(--accent-gold)" }}
                >
                  →
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

