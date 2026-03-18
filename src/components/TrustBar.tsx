const trustItems = [
  { icon: "✦", label: "45+ Years Experience" },
  { icon: "◈", label: "Licensed & Bonded" },
  { icon: "◉", label: "Multi-Trade Expertise" },
  { icon: "☆", label: "Serving PA & NJ" },
];

export default function TrustBar() {
  return (
    <div
      className="flex justify-center gap-6 sm:gap-10 flex-wrap px-6 sm:px-10 py-7 border-t"
      style={{ background: "var(--slate-800)", borderColor: "rgba(201,165,92,0.1)" }}
    >
      {trustItems.map(({ icon, label }) => (
        <div
          key={label}
          className="flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.04em] uppercase"
          style={{ color: "rgba(245,242,237,0.6)" }}
        >
          <div
            className="w-9 h-9 flex items-center justify-center text-sm shrink-0"
            style={{ border: "1px solid rgba(201,165,92,0.25)", color: "var(--accent-gold)" }}
          >
            {icon}
          </div>
          {label}
        </div>
      ))}
    </div>
  );
}

