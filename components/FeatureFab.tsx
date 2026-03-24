'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const features = [
  {
    id: 1,
    reel: "/fabric-clip/model1.mp4",
    title: 'Sharp looks for every occasion.',
    href: '/shop/mens',
  },
  {
    id: 2,
    reel: "/fabric-clip/model2.mp4",
    title: 'Complete your style with premium fabrics.',
    href: '/shop/accessories',
  },
  {
    id: 3,
    reel: "/fabric-clip/model3.mp4",
    title: 'Step into comfort and confidence.',
    href: '/shop/footwear',
  },
  {
    id: 4,
    reel: "/fabric-clip/model4.mp4",
    title: 'Effortless elegance every day.',
    href: '/shop/womens',
  },
];

export default function FeatureFab() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-fabric-cream py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading text-fabric-dark mb-4 sm:mb-6">
            Best threads for your best moments.
          </h1>
          <p className="text-lg sm:text-xl font-serif text-gray-600 max-w-2xl mx-auto">
            Explore our curated selection of premium fashion and accessories
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {features.map((feature) => (
            <a
              key={feature.id}
              // href={feature.href}
              className="group relative shadow border-1.5 border-[#c6b6ae] overflow-hidden rounded-3xl h-48 sm:h-56 lg:h-96 cursor-pointer transition-all duration-500 hover:scale-[1.03] block"
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >

              {/* 🎥 Video Background */}
              <video
                src={feature.reel}
                autoPlay
                loop
                muted
                playsInline
                 onLoadedMetadata={(e) => {
    e.currentTarget.playbackRate = 0.8; // 👈 slower (premium feel)
  }}
                className="absolute inset-0 w-full h-full object-cover transition-transform   duration-700 group-hover:scale-110"
              />

              {/* 🌑 Premium Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-80 transition duration-500" />

              {/* ✨ Subtle glass shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-500 bg-white/10 backdrop-blur-[2px]" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 lg:p-6 z-10">
                <h2 className="text-white text-base sm:text-lg lg:text-xl font-serif leading-tight">
                  {feature.title}
                </h2>

                {/* Optional premium arrow */}
                {/* <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition duration-300">
                  <span className="text-white text-sm">Explore</span>
                  <ChevronRight className="text-white w-4 h-4" />
                </div> */}
              </div>

            </a>
          ))}
        </div>
      </div>
    </div>
  );
}