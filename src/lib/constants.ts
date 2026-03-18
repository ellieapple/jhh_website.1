// ─── Site-wide constants ───────────────────────────────────────────────────
// Edit these values to update content across the whole site.

export const PHONE_DISPLAY = "(267) 566-7725";
export const PHONE_HREF = "tel:+12675667725";

export const COMPANY_NAME = "J.H.H. Contracting Consultants";
export const COMPANY_SHORT = "JHH Contracting Consultants";
export const COMPANY_INITIALS = "JHH";
export const TAGLINE = "Build · Inspect · Consult";

export const SERVICE_AREA =
  "Greater Philadelphia Area, Bucks County & New Jersey";
export const STATES_BADGE = "Serving Pennsylvania & New Jersey";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jhhcontractingconsultants.com";

// ─── Trade tags ───────────────────────────────────────────────────────────
export const TRADES = [
  "HVAC",
  "Roofing",
  "Siding",
  "Framing",
  "Plumbing",
  "Concrete",
  "Foundations",
  "Windows & Doors",
];

// ─── Services ─────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    tag: "Building",
    title: "Residential",
    items: [
      "New Construction",
      "Additions",
      "Kitchens",
      "Bathrooms",
      "Flooring / Pavers",
      "Concrete",
      "Decks",
      "Windows",
      "Doors",
      "Siding",
      "Roofs",
      "Foundations",
    ],
  },
  {
    tag: "Building",
    title: "Commercial",
    items: [
      "New Construction",
      "Additions",
      "Apartment Conversions",
      "Multi-Family",
      "Mixed Use",
    ],
  },
  {
    tag: "Assessment",
    title: "Inspection",
    items: [
      "Residential",
      "Commercial",
      "Structural",
      "Mechanical",
      "Energy Audit",
      "Radon",
    ],
  },
  {
    tag: "Advisory",
    title: "Consultation",
    items: [
      "Pre-design",
      "Inspection for Investment",
      "Cost Analysis",
      "Monetization Opportunities",
    ],
  },
];

// ─── Inspection detail blocks ─────────────────────────────────────────────
export const INSPECTION_BLOCKS = [
  {
    title: "Older Homes",
    body: "Structural integrity, energy efficiency, and pre-purchase inspections. We know what to look for because we've built it ourselves.",
  },
  {
    title: "New Homes",
    body: "Construction oversight, OSHA-qualified evaluation, systems operation documentation, and pre-purchase inspections.",
  },
  {
    title: "Energy Audits",
    body: "Energy usage, efficiency analysis, carbon footprint assessment, and operational expense evaluation.",
  },
  {
    title: "Multi-Family Buildings",
    body: "Maintenance costs, safety issues, structural integrity, and mechanical & electrical independence of each unit.",
  },
  {
    title: "Commercial & Industrial",
    body: "Factories, office buildings, and other structures — maintenance costs, safety issues, and structural integrity assessments.",
  },
];

// ─── Consultation detail blocks ───────────────────────────────────────────
export const CONSULTATION_BLOCKS = [
  {
    title: "Green Design",
    body: "Materials assessment, workmanship evaluation, and anticipated energy usage analysis for sustainable building.",
  },
  {
    title: "Value Added Design",
    body: "Focused on reducing building costs and operational expenses without compromising quality.",
  },
  {
    title: "Strategic Investment",
    body: "Cost analysis, potential challenges assessment, and monetization opportunity identification for your property.",
  },
];
