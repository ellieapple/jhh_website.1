"use client";

import { useState } from "react";
import { useModal } from "@/components/providers";
import { COMPANY_NAME, TAGLINE } from "@/lib/constants";

const navLinks = [
  { label: "Residential",  href: "#services" },
  { label: "Commercial",   href: "#services" },
  { label: "Inspection",   href: "#inspections" },
  { label: "Consultation", href: "#consultation" },
  { label: "Our Work",     href: "#work" },
];

export default function Nav() {
  const { openModal } = useModal();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* NAV BAR */}
      <nav
        className="fixed left-0 right-0 z-40 flex justify-between items-center px-8 py-4 border-b"
        style={{
          top: "37px",
          background: "rgba(26, 42, 58, 0.97)",
          backdropFilter: "blur(12px)",
          borderColor: "rgba(201,165,92,0.15)",
        }}
      >
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 no-underline">
          <div
            className="w-10 h-10 flex items-center justify-center text-sm font-bold"
            style={{ background: "var(--accent-gold)", color: "var(--slate-900)", fontFamily: "var(--font-dm-serif)" }}
          >
            JHH
          </div>
          <div>
            <div className="font-serif text-[14px] sm:text-[16px] leading-tight" style={{ color: "var(--warm-white)" }}>
              {COMPANY_NAME}
            </div>
            <div className="text-[10px] font-bold tracking-[0.14em] uppercase mt-0.5" style={{ color: "var(--accent-gold)" }}>
              {TAGLINE}
            </div>
          </div>
        </a>

        {/* Hamburger */}
        <button
          className="flex flex-col justify-center items-center gap-[5px] w-9 h-9 bg-transparent border-none p-0 cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className="block w-[22px] h-[2px] transition-all duration-300"
            style={{
              background: "var(--warm-white)",
              transform: menuOpen ? "rotate(45deg) translateY(5px)" : "none",
            }}
          />
          <span
            className="block w-[22px] h-[2px] transition-all duration-300"
            style={{
              background: "var(--warm-white)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-[22px] h-[2px] transition-all duration-300"
            style={{
              background: "var(--warm-white)",
              transform: menuOpen ? "rotate(-45deg) translateY(-5px)" : "none",
            }}
          />
        </button>
      </nav>

      {/* OVERLAY */}
      <div
        className="fixed inset-0 z-40 transition-opacity duration-300"
        style={{
          background: "rgba(0,0,0,0.5)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
        }}
        onClick={closeMenu}
      />

      {/* DRAWER */}
      <div
        className="fixed top-0 right-0 z-50 w-72 h-full flex flex-col pt-24 px-8 pb-10 transition-transform duration-[400ms]"
        style={{
          background: "var(--slate-800)",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={closeMenu}
            className="py-4 text-base font-medium no-underline border-b transition-colors duration-200"
            style={{ color: "var(--warm-white)", borderColor: "rgba(255,255,255,0.06)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--warm-white)")}
          >
            {label}
          </a>
        ))}
        <button
          onClick={() => { closeMenu(); openModal(); }}
          className="py-4 text-base font-medium text-left bg-transparent border-none border-b cursor-pointer transition-colors duration-200"
          style={{ color: "var(--warm-white)", borderColor: "rgba(255,255,255,0.06)", fontFamily: "inherit" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--warm-white)")}
        >
          Contact Us
        </button>
      </div>
    </>
  );
}
