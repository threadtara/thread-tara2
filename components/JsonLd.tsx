// components/JsonLd.tsx
// Place this component inside your app/page.tsx or layout.tsx

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Thread Tara",
    description:
      "Premium fabric store in Lajpat Nagar, Delhi offering brocade, organza, silk, and embroidered fabrics. Trusted by designers and brides.",
    url: "https://www.threadtara.com",
    logo: "https://www.threadtara.com/logo.png",
    image: "https://www.threadtara.com/og-image.jpg",
    telephone: "+91-XXXXXXXXXX", // ← replace with your real number
    email: "tarathread@gmail.com", // ← replace with your real email
    priceRange: "₹550 - Depends On Fabrics",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, UPI, Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Gate No. 2, Lajpat Nagar Market, near Metro Station",
      addressLocality: "Lajpat Nagar",
      addressRegion: "Delhi",
      postalCode: "110024",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.5665,   // ← verify exact coordinates
      longitude: 77.2431,
    },
  openingHoursSpecification: [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "11:00",
    closes: "20:00",
  },

      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "11:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      // ← add your social media URLs here
      "https://www.instagram.com/threadtaramens",
      "https://www.instagram.com/thread_tara/",
      "https://www.youtube.com/@ThreadTara",
    ],
    hasMap: "https://maps.google.com/?q=Thread+Tara+Lajpat+Nagar+Delhi",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
