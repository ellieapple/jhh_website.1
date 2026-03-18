export default function Footer() {
  return (
    <footer
      className="px-10 py-10 text-center border-t"
      style={{
        background: "var(--slate-800)",
        borderColor: "rgba(201,165,92,0.08)",
      }}
    >
      <div
        className="text-lg mb-2"
        style={{
          fontFamily: "var(--font-dm-serif)",
          color: "var(--warm-white)",
        }}
      >
        JHH Contracting Consultants
      </div>
      <p
        className="text-[13px] leading-[1.6]"
        style={{ color: "rgba(245,242,237,0.4)" }}
      >
        Serving the Greater Philadelphia Area, Bucks County &amp; New Jersey
      </p>
      <p
        className="text-[13px] mt-1"
        style={{ color: "rgba(245,242,237,0.4)" }}
      >
        <a
          href="tel:+12675667725"
          className="no-underline transition-colors duration-200"
          style={{ color: "rgba(245,242,237,0.4)" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--accent-gold)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "rgba(245,242,237,0.4)")
          }
        >
          ☎ (267) 566-7725
        </a>
      </p>
      <nav
        className="flex justify-center gap-6 mt-5"
        aria-label="Footer navigation"
      >
        {[
          { label: "Services", href: "#services" },
          { label: "Inspections", href: "#inspections" },
          { label: "Consultation", href: "#consultation" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            className="text-[12px] tracking-[0.06em] uppercase no-underline transition-colors duration-200"
            style={{ color: "rgba(245,242,237,0.4)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent-gold)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(245,242,237,0.4)")
            }
          >
            {label}
          </a>
        ))}
      </nav>
      <p
        className="text-[11px] mt-6"
        style={{ color: "rgba(245,242,237,0.2)" }}
      >
        © {new Date().getFullYear()} JHH Contracting Consultants. All rights
        reserved.
      </p>
    </footer>
  );
}
