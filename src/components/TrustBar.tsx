const trustItems = [
  "45+ Years Experience",
  "Licensed & Bonded",
  "Multi-Trade Expertise",
];

export default function TrustBar() {
  return (
    <div
      className="relative flex justify-center gap-8 sm:gap-12 flex-wrap px-6 sm:px-10 py-6 border-y"
      style={{
        background: "linear-gradient(180deg, var(--slate-800) 0%, rgba(26,42,58,0.94) 100%)",
        borderColor: "rgba(201,165,92,0.1)",
      }}
    >
      {trustItems.map((label, i) => (
        <div
          key={label}
          className="flex items-center gap-2 text-[12px] sm:text-[13px] font-semibold tracking-[0.08em] uppercase"
          style={{ color: "rgba(245,242,237,0.7)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent-gold)" }} />
          {label}
        </div>
      ))}
    </div>
  );
}
