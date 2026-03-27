'use client';

import { useState } from 'react';
import { fabricClips } from '@/lib/fabrics'; // your SEO-friendly clips file

// Map fabricClips to the format your component expects
const features = fabricClips.map((clip) => ({
  id: parseInt(clip.id),
  reel: clip.video,
  title: clip.title,
  href: clip.slug, // optional: link to the fabric page
  videoAlt: clip.videoAlt, // can use for aria-label or SEO
}));

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {features.map((feature) => (
            <a
              key={feature.id}
              href={feature.href} // optional: link to fabric detail page
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
                aria-label={feature.videoAlt} // SEO & accessibility
                onLoadedMetadata={(e) => {
                  e.currentTarget.playbackRate = 0.8; // slower, premium feel
                }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
              </div>

            </a>
          ))}
        </div>
      </div>
    </div>
  );
}