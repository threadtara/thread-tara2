import type { Metadata } from "next";
import "./globals.css";
import { threadTaraFont } from "@/lib/font";
import ThreadWave from "@/components/ThreadWave";
import Script from "next/script";

// ─── Removed: Geist & Geist_Mono (unused font requests) ──────

const BASE_URL = "https://www.threadtara.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Thread Tara | Premium Fabrics Store in Lajpat Nagar, Delhi",
    template: "%s | Thread Tara",
  },

  description:
    "Explore premium brocade, organza, silk & embroidered fabrics at Thread Tara, Lajpat Nagar Delhi (Gate No. 2, near Metro). Trusted by designers & brides. Visit our showroom or WhatsApp us today.",

  // ─── Trimmed to 12 high-signal keywords only ─────────────
  keywords: [
    "fabric store Lajpat Nagar",
    "premium fabrics Delhi",
    "bridal fabric Delhi",
    "brocade fabric Delhi",
    "silk fabric Delhi",
    "organza fabric India",
    "embroidered fabric store",
    "fabric for indo western dresses",
    "wedding lehenga fabric",
    "designer blouse fabric",
    "Thread Tara",
    "Lajpat Nagar fabric market",
  ],

  authors: [{ name: "Thread Tara" }],
  creator: "Thread Tara",



  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Thread Tara",
    title: "Thread Tara | Premium Fabrics Store in Lajpat Nagar, Delhi",
    description:
      "Shop premium brocade, organza, silk & embroidered fabrics at Thread Tara, Lajpat Nagar Delhi. Trusted by designers & brides.",
    images: [
      {
        // ─── Replace with a 1200×630 banner image, not a logo ──
        url: "/threadlogo.png",
        width: 1200,
        height: 630,
        alt: "Thread Tara – Premium Fabric Store, Lajpat Nagar Delhi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Thread Tara | Premium Fabrics Store in Lajpat Nagar, Delhi",
    description:
      "Explore premium brocade, organza, silk & embroidered fabrics at Thread Tara, Lajpat Nagar Delhi.",
    images: ["/og-banner.jpg"], // same 1200×630 image
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },
};

// ─── LocalBusiness JSON-LD — enables Google Maps rich results ──
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",  // or "ClothingStore" for more specificity
  name: "Thread Tara",
  description:
    "Premium fabric store in Lajpat Nagar Delhi specialising in brocade, organza, silk, and embroidered fabrics for bridal and occasion wear.",
  url: BASE_URL,
  telephone: "+91-XXXXXXXXXX", // ← your WhatsApp/store number
  address: {
    "@type": "PostalAddress",
    streetAddress: "A-20, Lajpat Nagar Part-2, Gate No. 2",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110024",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.5706,   // ← verify exact coords on Google Maps
    longitude: 77.2434,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  image: `${BASE_URL}/og-banner.jpg`,
  priceRange: "₹₹",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={threadTaraFont.variable}>
      <head>
        {/* ─── LocalBusiness structured data for Google ──── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>

      <body className={`${threadTaraFont.variable} antialiased`}>
        <ThreadWave />
        {children}

        {/* ─── Google Tag — moved out of <head>, after body ── */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=AW-17982401607`}
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17982401607');
          `}
        </Script>
      </body>
    </html>
  );
}