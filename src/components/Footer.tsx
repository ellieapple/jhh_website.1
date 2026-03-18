"use client";

import Link from "next/link";
import { COMPANY_NAME, PHONE_DISPLAY, PHONE_HREF, SERVICE_AREA } from "@/lib/constants";

const LINKS = [
  { label: "Services",     href: "#services" },
  { label: "Inspections",  href: "#inspections" },
  { label: "Consultation", href: "#consultation" },
  { label: "Our Work",     href: "#work" },
  { label: "Contact",      href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      className="px-6 py-12 text-center border-t"
      style={{ background: "var(--slate-800)", borderColor: "rgba(201,165,92,0.08)" }}
    >
      <p className="font-serif text-[18px] mb-2" style={{ color: "var(--warm-white)" }}>
        {COMPANY_NAME}
      </p>
      <p className="text-[13px] leading-relaxed" style={{ color: "rgba(245,242,237,0.4)" }}>
        Serving the {SERVICE_AREA}
      </p>
      <a
        href={PHONE_HREF}
        className="block mt-1 text-[13px] transition-colors no-underline"
        style={{ color: "rgba(245,242,237,0.4)" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,242,237,0.4)")}
      >
        &#9742; {PHONE_DISPLAY}
      </a>

      <nav className="flex justify-center flex-wrap gap-6 mt-6" aria-label="Footer navigation">
        {LINKS.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="text-[12px] font-medium tracking-[0.06em] uppercase no-underline transition-colors"
            style={{ color: "rgba(245,242,237,0.4)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,242,237,0.4)")}
          >
            {label}
          </Link>
        ))}
      </nav>

      <p className="text-[11px] mt-6" style={{ color: "rgba(245,242,237,0.2)" }}>
        &copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
      </p>
    </footer>
  );
}
