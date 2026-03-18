import type { Metadata } from "next";
import { DM_Serif_Display, Plus_Jakarta_Sans } from "next/font/google";
import Analytics from "@/components/Analytics";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jhhcontractingconsultants.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "JHH Contracting Consultants | Builder & Home Inspector in PA & NJ",
    template: "%s | JHH Contracting Consultants",
  },
  description:
    "20+ years of hands-on construction experience across HVAC, roofing, siding, framing, and plumbing. Residential & commercial building, home inspection (NACHI certified), and strategic consultation. Serving Greater Philadelphia, Bucks County & New Jersey.",
  keywords: [
    "contractor Pennsylvania",
    "contractor New Jersey",
    "home inspector Bucks County",
    "NACHI certified inspector",
    "residential construction Philadelphia",
    "commercial construction PA",
    "building consultation",
    "HVAC contractor",
    "roofing contractor PA NJ",
    "home inspector Philadelphia",
    "general contractor Bucks County",
    "JHH Contracting Consultants",
  ],
  authors: [{ name: "JHH Contracting Consultants" }],
  creator: "JHH Contracting Consultants",
  publisher: "JHH Contracting Consultants",
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "JHH Contracting Consultants",
    title: "JHH Contracting Consultants | Builder & Home Inspector in PA & NJ",
    description:
      "20+ years of hands-on construction experience. NACHI-certified inspections. Full-scope residential & commercial building. Serving PA & NJ.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JHH Contracting Consultants – Builder & Home Inspector PA & NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JHH Contracting Consultants | Builder & Home Inspector in PA & NJ",
    description:
      "20+ years of hands-on construction experience. NACHI-certified inspections. Serving PA & NJ.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// LocalBusiness structured data (schema.org) — critical for local SEO
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "HomeAndConstructionBusiness"],
  name: "JHH Contracting Consultants",
  description:
    "Full-scope residential and commercial construction, NACHI-certified home inspections, and building consultation services.",
  url: SITE_URL,
  telephone: "+12675667725",
  priceRange: "$$",
  areaServed: [
    { "@type": "State", name: "Pennsylvania" },
    { "@type": "State", name: "New Jersey" },
    { "@type": "City", name: "Philadelphia" },
    { "@type": "AdministrativeArea", name: "Bucks County" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Construction & Consulting Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Construction" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Construction" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Home Inspection" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Building Consultation" } },
    ],
  },
  knowsAbout: ["HVAC", "Roofing", "Siding", "Framing", "Plumbing", "Concrete", "Foundations"],
  award: "NACHI Certified Home Inspector",
  foundingDate: "2004",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Analytics />
        {children}
      </body>
    </html>
  );
}
