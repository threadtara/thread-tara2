"use client";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { fabrics } from "@/lib/fabrics";
// Import the generated manifest
import imageManifest from "@/lib/image-manifest.json";

// Type safety for the manifest
const manifest = imageManifest as Record<string, string[]>;

export default function FabricDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const id = resolvedParams.id;

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fabric = fabrics.find((f) => String(f.id) === String(id));

  // Fix: Lowercase the category name to match the manifest keys
  const images = fabric ? manifest[fabric.category.toLowerCase()] || [] : [];

  // Close modal on 'Esc' key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  if (!fabric)
    return (
      <div className="p-20 text-center font-serif italic text-gray-400">
        Fabric not found.
      </div>
    );

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] selection:bg-amber-100">
      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/90 backdrop-blur-md cursor-zoom-out p-4 md:p-12"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full h-full max-w-5xl"
            >
              <Image
                src={selectedImage}
                alt="Enlarged view"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <button
              className="absolute top-8 right-8 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              Close [esc]
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference">
        <Link
          href="/"
          /* Changed text-gray-500 to text-white and removed hover:text-black */
          className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white transition-all"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>{" "}
          Back to Collection
        </Link>

        <div className="hidden md:block text-[10px] font-bold uppercase tracking-[0.3em] text-white">
          Selected Works / {fabric.category}
        </div>
      </nav>

      <header className="mx-auto max-w-7xl px-8 pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block mb-4 text-[11px] font-extrabold uppercase tracking-[0.5em] text-amber-700/80">
                {fabric.category}
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif italic tracking-tight text-gray-950 leading-[0.85]">
                {fabric.name}
              </h1>
            </motion.div>
          </div>
          <div className="lg:col-span-4 lg:pb-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-gray-500 leading-relaxed text-sm md:text-base font-light border-l border-gray-200 pl-6"
            >
              {fabric.description}
            </motion.p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] px-8 pb-32">
        {/* Images are now handled instantly without a loading state */}
        {images.length === 0 ? (
          <div className="text-center py-20 text-gray-400 font-serif italic">
            No images found in this collection.
          </div>
        ) : (
          <div className="columns-1 gap-8 sm:columns-2 lg:columns-3 space-y-8">
            <AnimatePresence>
              {images.map((src, index) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.05,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  onClick={() => setSelectedImage(src)}
                  className="group relative break-inside-avoid overflow-hidden bg-white cursor-zoom-in"
                >
                  <div className="relative overflow-hidden aspect-[3/4]">
                    <Image
                      src={src}
                      alt={`${fabric.name} detail ${index}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1.5s] cubic-bezier(0.2, 1, 0.3, 1) group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
                  </div>

                  <div className="mt-4 flex justify-between items-baseline px-1">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">
                      Plate {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <div className="h-px flex-grow mx-4 bg-gray-100" />
                    <span className="text-[9px] font-medium uppercase text-gray-300 italic font-serif">
                      Detail View
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>

      <footer className="border-t border-gray-100 py-24 text-center">
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-gray-400 mb-8">
          Inquire about this textile
        </p>
        <a
          href="https://wa.me/918750503536?text=Hello%20Thread%20Tara,%20I%20am%20interested%20in%20learning%20more%20about%20your%20textiles."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-12 py-4 bg-gray-950 text-white text-xs font-bold uppercase tracking-widest hover:bg-green-700 transition-colors duration-500"
        >
          Whatsapp Us
        </a>
      </footer>
      <section
        id="contact"
        className="bg-fabric-dark px-6 py-24 text-fabric-cream relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="mb-2 font-heading text-5xl text-fabric-gold">
                Thread Tara
              </h2>
              <p className="mb-6 text-sm font-light tracking-[0.2em] uppercase text-white/80">
                Be Your Own Designer
              </p>

              <div className="space-y-1 text-sm font-medium text-gray-400">
                <p>Fabrics • Apparels • Accessories</p>
                <p>Mens • Women • Kids</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="mb-6 text-lg font-bold uppercase tracking-wider text-fabric-gold">
                Visit Our Showroom
              </h3>
              <address className="not-italic leading-relaxed text-gray-300">
                <p>A-20 Lajpat Nagar Part-II</p>
                <p>Opposite Lajpat Nagar Metro Station</p>
                <p>Gate No.2</p>
                <p className="mt-2 font-semibold text-white">
                  New Delhi - 110024
                </p>
              </address>

              <a
                href="https://www.google.com/maps/search/?api=1&query=A-20+Lajpat+Nagar+Part-II+New+Delhi"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block border-b border-fabric-gold pb-0.5 text-sm text-fabric-gold transition hover:text-white hover:border-white"
              >
                Get Directions →
              </a>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="mb-6 text-lg font-bold uppercase tracking-wider text-fabric-gold">
                Contact Us
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="mb-1 text-xs text-gray-500 uppercase">
                    Phone / WhatsApp
                  </p>
                  <a
                    href="tel:+918750503536"
                    className="block text-lg transition hover:text-fabric-gold"
                  >
                    +91 8750503536
                  </a>
                  <a
                    href="tel:+919999056556"
                    className="block text-lg transition hover:text-fabric-gold"
                  >
                    +91 9999056556
                  </a>
                </div>

                <div>
                  <p className="mb-1 text-xs text-gray-500 uppercase">
                    Email Inquiry
                  </p>
                  <a
                    href="mailto:threadtara2025@gmail.com"
                    className="text-lg transition hover:text-fabric-gold"
                  >
                    threadtara2025@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-6 bg-[#111] text-center text-[13px] text-gray-400 tracking-wider">
        <p>© {new Date().getFullYear()} Thread Tara. All rights reserved.</p>
      </div>
    </div>
  );
}
