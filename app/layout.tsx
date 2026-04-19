import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { threadTaraFont } from "@/lib/font";
import ThreadWave from "@/components/ThreadWave";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.threadtara.com"), // ← replace with your real domain

  title: {
    default: "Thread Tara | Premium Fabrics Store in Lajpat Nagar, Delhi",
    template: "%s | Thread Tara",
  },
  description:
    "Explore premium brocade, organza, silk & embroidered fabrics at Thread Tara, Lajpat Nagar Delhi (Gate No. 2, near Metro). Trusted by designers & brides. Visit our showroom or WhatsApp us today.",

  keywords: [
    "fabric store Delhi",
    "premium fabrics Lajpat Nagar",
    "brocade fabric Delhi",
    "silk fabric Delhi",
    "organza fabric",
    "embroidered fabric",
    "bridal fabric Delhi",
    "Thread Tara",
    "Lajpat Nagar fabric market",
    "designer fabric store",
    "Fabric store near me",
    "fabric cloth",
    "fabrics for clothing",
    "Fabrics in mid range"
  ],

  authors: [{ name: "Thread Tara" }],
  creator: "Thread Tara",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.threadtara.com",
    siteName: "Thread Tara",
    title: "Thread Tara | Premium Fabrics Store in Lajpat Nagar, Delhi",
    description:
      "Shop premium brocade, organza, silk & embroidered fabrics at Thread Tara, Lajpat Nagar Delhi. Trusted by designers & brides.",
    images: [
      {
        url: "/threadlogo.png", // ← add a 1200x630 image to your /public folder
        width: 1200,
        height: 630,
        alt: "Thread Tara - Premium Fabric Store Lajpat Nagar Delhi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Thread Tara | Premium Fabrics Store in Lajpat Nagar, Delhi",
    description:
      "Explore premium brocade, organza, silk & embroidered fabrics at Thread Tara, Lajpat Nagar Delhi.",
    images: ["/threadlogo.png"],
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
    canonical: "https://www.threadtara.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={threadTaraFont.variable}>
      <head>
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
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${threadTaraFont.variable} antialiased`}
      >
        <ThreadWave />
        {children}
      </body>
    </html>
  );
}
