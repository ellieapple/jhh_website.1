import Image from "next/image";

const PHOTOS = [
  { src: "/images/home2.jpg",         alt: "Custom exterior construction",         wide: true  },
  { src: "/images/kitchen.png",       alt: "Kitchen remodel",                       wide: false },
  { src: "/images/living.png",        alt: "Living space addition",                 wide: false },
  { src: "/images/marble-bathroom.png", alt: "Marble bathroom renovation",          wide: false },
  { src: "/images/modern-bath.png",   alt: "Modern bathroom build",                 wide: false },
  { src: "/images/outside-window.png", alt: "Exterior window installation",         wide: false },
];

export default function ProjectStrip() {
  return (
    <section id="work" aria-labelledby="work-heading" style={{ background: "var(--warm-white)" }}>
      {/* Header */}
      <div className="px-6 sm:px-10 pt-20 pb-10 max-w-5xl mx-auto">
        <span className="section-label">Our Work</span>
        <h2
          id="work-heading"
          className="font-serif"
          style={{ fontSize: "clamp(26px,4vw,42px)", color: "var(--text-dark)", lineHeight: 1.1 }}
        >
          Craftsmanship You Can See
        </h2>
        <p className="mt-3 text-base leading-relaxed" style={{ color: "var(--text-mid)", maxWidth: "520px" }}>
          Every project reflects decades of trade expertise — from ground-up builds to precision interior renovations.
        </p>
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-[3px] max-w-5xl mx-auto px-6 sm:px-10 pb-20">
        {/* Wide card — spans full width on mobile, 2 cols on md */}
        <div className="col-span-2 md:col-span-2 relative h-64 sm:h-80 overflow-hidden group">
          <Image
            src={PHOTOS[0].src}
            alt={PHOTOS[0].alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 66vw"
          />
          <div
            className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-12 text-[12px] font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "linear-gradient(to top, rgba(15,25,35,0.8) 0%, transparent 100%)",
              color: "var(--accent-gold)",
            }}
          >
            {PHOTOS[0].alt}
          </div>
        </div>

        {/* Single card */}
        <div className="col-span-1 relative h-64 sm:h-80 overflow-hidden group">
          <Image
            src={PHOTOS[1].src}
            alt={PHOTOS[1].alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          <div
            className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-12 text-[11px] font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "linear-gradient(to top, rgba(15,25,35,0.8) 0%, transparent 100%)",
              color: "var(--accent-gold)",
            }}
          >
            {PHOTOS[1].alt}
          </div>
        </div>

        {/* Bottom row — 3 equal cards */}
        {PHOTOS.slice(2).map((photo) => (
          <div key={photo.src} className="col-span-1 relative h-48 sm:h-60 overflow-hidden group">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div
              className="absolute bottom-0 left-0 right-0 px-4 pb-3 pt-10 text-[10px] font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "linear-gradient(to top, rgba(15,25,35,0.8) 0%, transparent 100%)",
                color: "var(--accent-gold)",
              }}
            >
              {photo.alt}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
