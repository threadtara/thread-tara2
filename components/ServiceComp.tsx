import Image from "next/image";
import serviceFeature from "../public/features.webp";

export const metadata = {
title: "Our Services - Thread Tara",
description: "Discover our premium fabric services at Thread Tara. We offer a wide range of high-quality fabrics including Banarasi Silk, Organza, Chiffon, and Net fabrics for bridal and occasion wear. Enjoy free delivery and personalized customization options.",
keywords:[
    // Fabric types
    "Banarasi Silk fabric",
    "Organza fabric India",
    "Chiffon fabric bridal",
    "Net fabric lehenga",
    "Georgette fabric ethnic wear",
    "Chanderi silk fabric",
    "Brocade fabric",
    "minimalist ethnic fabric",
    "lightweight bridal fabric",
    "sustainable ethnic fabric",
    "pastel lehenga fabric",
    // Indian ethnic
    "bridal lehenga fabric",
    "Indian ethnic wear fabric",
    "occasion wear fabric India",
    // Indo western
    "Indo western fabric",
    "fusion ethnic dress material",
    // Local SEO
    "fabric store Lajpat Nagar",
    "fabric store New Delhi",
    "bridal fabric Lajpat Nagar",
    "wedding fabric store in gurugram",
    "fabric customization in south delhi",
    "fabrics for mens in delhi",
    "fabrics for womens in delhi",
    // Services
    "free fabric delivery India",
    "discounted fabric delivery Delhi",
    "luxury fabric store in delhi",
    "fabric customization service Delhi",
]
};

export default function ServiceComp() {
  return (
    <section
      aria-labelledby="services-heading"
      itemScope
      itemType="https://schema.org/Service" // ✅ structured data for Google
    >
      <div className="flex flex-col items-center justify-center min-h-auto py-2 my-12 px-4">
        <div className="items-center justify-center flex flex-col text-center">

          {/* ✅ h2 not h1 — only ONE h1 per page (should be in hero/page level) */}
          <h2
            id="services-heading"
            className="font-heading text-6xl text-fabric-dark my-4"
            itemProp="name" 
          >
            Our Services
          </h2>

          <p
            className="text-gray-600 font-serif text-lg md:text-xl max-w-3xl py-4 md:pb-8 mx-auto"
            itemProp="description" // ✅ Google reads this as the service description
          >
         Experience premium fabrics with free delivery and personalized customization.
          </p>

          {/* ✅ Hidden text for crawlers — extra keywords without cluttering UI */}
          <span className="sr-only">
            Thread Tara offers premium fabric services including Banarasi Silk,
            Organza, Chiffon, and Net fabrics for bridal and occasion wear in
            New Delhi. Visit us at A-20, Lajpat Nagar Part-2, New Delhi 110024.
          </span>

          <Image
            src={serviceFeature}
            alt="Thread Tara Services — Premium bridal and wedding fabric store at Lajpat Nagar, New Delhi offering free delivery and customization"
            width={1300}
            height={1000}
            loading="lazy"        // ✅ not above-the-fold, so lazy load
            className="rounded-lg shadow-lg"
            itemProp="image"      // ✅ tells Google this image represents the service
          />

        </div>
      </div>
    </section>
  );
}