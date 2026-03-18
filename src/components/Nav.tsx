"use client";

import { useState } from "react";

interface NavProps {
  onOpenModal: () => void;
}

const navLinks = [
  { label: "Residential", href: "#services" },
  { label: "Commercial", href: "#services" },
  { label: "Inspection", href: "#inspections" },
  { label: "Consultation", href: "#consultation" },
  { label: "Reviews", href: "#", disabled: true },
];

export default function Nav({ onOpenModal }: NavProps) {
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
        <a href="#hero" className="flex items-center gap-3.5 no-underline">
          <div
            className="w-11 h-11 flex items-center justify-center text-base"
            style={{
              background: "var(--accent-gold)",
              color: "var(--slate-900)",
              fontFamily: "var(--font-dm-serif)",
            }}
          >
            JHH
          </div>
          <div>
            <div
              className="text-[17px] tracking-wide leading-tight"
              style={{
                color: "var(--warm-white)",
                fontFamily: "var(--font-dm-serif)",
              }}
            >
              JHH Contracting Consultants
            </div>
            <div
              className="text-[10px] font-semibold tracking-[0.14em] uppercase mt-0.5"
              style={{ color: "var(--accent-gold)" }}
            >
              Build · Inspect · Consult
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

      {/* SLIDE-IN MENU */}
      <div
        className="fixed top-0 z-50 w-80 h-full flex flex-col pt-24 px-10 pb-10 gap-0 transition-all duration-[400ms]"
        style={{
          right: menuOpen ? "0" : "-320px",
          background: "var(--slate-800)",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {navLinks.map(({ label, href, disabled }) => (
          <a
            key={label}
            href={disabled ? undefined : href}
            onClick={disabled ? undefined : closeMenu}
            className="py-4 text-lg font-medium no-underline border-b transition-colors duration-200"
            style={{
              color: disabled ? "rgba(245,242,237,0.4)" : "var(--warm-white)",
              borderColor: "rgba(255,255,255,0.06)",
              cursor: disabled ? "default" : "pointer",
            }}
            onMouseEnter={(e) => {
              if (!disabled)
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--accent-gold)";
            }}
            onMouseLeave={(e) => {
              if (!disabled)
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--warm-white)";
            }}
          >
            {label}
          </a>
        ))}
        <a
          href="#"
          className="py-4 text-lg font-medium no-underline border-b transition-colors duration-200"
          style={{
            color: "var(--warm-white)",
            borderColor: "rgba(255,255,255,0.06)",
          }}
          onClick={(e) => {
            e.preventDefault();
            closeMenu();
            onOpenModal();
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--accent-gold)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--warm-white)")
          }
        >
          Contact Us
        </a>
      </div>
    </>
  );
}
