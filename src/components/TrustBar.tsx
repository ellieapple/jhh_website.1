const trustItems = [
  { icon: "✦", label: "20+ Years Experience" },
  { icon: "◈", label: "Licensed & Bonded" },
  { icon: "☆", label: "NACHI Certified" },
  { icon: "◉", label: "Multi-Trade Expertise" },
];

export default function TrustBar() {
  return (
    <div
      className="flex justify-center gap-12 flex-wrap px-10 py-7 border-t"
      style={{
        background: "var(--slate-800)",
        borderColor: "rgba(201,165,92,0.1)",
      }}
    >
      {trustItems.map(({ icon, label }) => (
        <div
          key={label}
          className="flex items-center gap-3 text-[13px] font-semibold tracking-[0.04em] uppercase"
          style={{ color: "rgba(245,242,237,0.6)" }}
        >
          <div
            className="w-10 h-10 flex items-center justify-center text-base shrink-0"
            style={{
              border: "1px solid rgba(201,165,92,0.25)",
              color: "var(--accent-gold)",
            }}
          >
            {icon}
          </div>
          {label}
        </div>
      ))}
    </div>
  );
}
