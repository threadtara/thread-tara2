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
  title: "Thread Tara | Premium Fabrics Store in Lajpat Nagar Delhi",
  description:
    "Shop premium brocade, organza, silk & embroidered fabrics at Thread Tara, Lajpat Nagar Delhi (Gate No.2, near Metro). Trusted by designers & brides. Visit our showroom or WhatsApp now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={threadTaraFont.variable}>
      <head>
        {/* Google Ads Tag */}
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

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThreadWave />
        {children}
      </body>
    </html>
  );
}