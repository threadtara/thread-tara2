// app/page.tsx — SERVER component (no "use client")
// metadata export works here because this is not a client component

import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "Thread Tara | Premium Fabrics Store in Lajpat Nagar, Delhi",
  description:
    "Explore premium brocade, organza, silk & embroidered fabrics at Thread Tara, Lajpat Nagar Delhi (Gate No. 2, near Metro). Trusted by designers & brides. Visit our showroom or WhatsApp us today.",
  alternates: {
    canonical: "https://www.threadtara.com",
  },
  openGraph: {
    url: "https://www.threadtara.com",
    title: "Thread Tara | Premium Fabrics Store in Lajpat Nagar, Delhi",
    description:
      "Shop premium brocade, organza, silk & embroidered fabrics at Thread Tara, Lajpat Nagar Delhi. Trusted by designers & brides.",
  },
};

export default function Page() {
  return <HomeClient />;
}
