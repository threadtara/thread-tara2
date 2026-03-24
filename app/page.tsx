
"use client";

import Image from "next/image"; // Import Image component

import { fabrics } from "@/lib/fabrics";

import FabricCard from "@/components/FabricCard";



import { CSSProperties, useEffect, useRef, useState } from "react";

import SparkleCanvas from "@/components/SparkleCanvas";
import ServiceComp from "@/components/ServiceComp";
import ContactForm from "@/components/ContactForm";
import FeatureFab from "@/components/FeatureFab";
import AutoCarousel from "@/components/AutoCarousel";


interface Particle {

  id: number;

  left: number;

  top: number;

  delay: number;

  tx: number;

  ty: number;

  size: number;

}



export default function Home() {

  const [particles, setParticles] = useState<Particle[]>([]);



  useEffect(() => {

    const frame = requestAnimationFrame(() => {

      // INCREASED COUNT: 40 stars for a much richer effect

      const newParticles: Particle[] = [...Array(40)].map((_, i) => ({

        id: i,

        left: 30 + Math.random() * 40, // Wider birth area

        top: 30 + Math.random() * 40,

        delay: Math.random() * 8, // More randomized timing

        tx: (Math.random() - 0.5) * 450, // INCREASED VELOCITY: Further travel

        ty: (Math.random() - 0.5) * 350,

        size: 1 + Math.random() * 3, // Varied sizes (1px to 4px)

      }));

      setParticles(newParticles);

    });



    return () => cancelAnimationFrame(frame);

  }, []);

  const textRef = useRef<HTMLHeadingElement>(null);

  return (

    <main className="min-h-screen">

      <nav className="flex items-center justify-end px-8 py-6 z-50 absolute top-0 w-full bg-transparent">

        <a

          href="#contact"

          className="rounded-full border-2 border-fabric-cream px-6 py-2 text-sm font-bold text-fabric-cream transition hover:bg-fabric-gold hover:text-fabric-dark hover:border-fabric-gold shadow-lg"

        >
          Contact Shop
        </a>

      </nav>



      <section className="relative flex h-[85vh] items-center justify-center overflow-hidden">

        {/* 1. Background Image & Overlays */}

        <div className="absolute inset-0">

          <Image

            src="/bg.jpg"

            alt="Rich Indian Silk Background"

            fill

            className="object-cover animate-pan"

            priority

          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-fabric-dark/80 to-black/60" />

        </div>



        {/* NEW: Animated Silk Threads */}

        <ThreadOverlay />



        {/* The Magic Stars Component */}

        {/* Cast the ref to the expected type */}

        <SparkleCanvas

          containerRef={textRef as React.RefObject<HTMLHeadingElement>}

        />



        {/* 2. Hero Content */}

        <div className="relative z-10 px-6 text-center flex flex-col items-center">

          {/* 2. Apply to the Logo */}

          <div className="absolute inset-0 pointer-events-none">

        {particles.map((p) => (

          <div

            key={p.id}

            className="absolute w-1 h-1 bg-fabric-gold rounded-full animate-ooze-sparkle"

            style={{

              left: `${p.left}%`,

              top: `${p.top}%`,

              animationDelay: `${p.delay}s`,

              "--tx": `${p.tx}px`,

              "--ty": `${p.ty}px`,

            } as CSSProperties} // Cast style to CSSProperties to allow custom variables

          />

        ))}

      </div>

          <div className="relative mx-auto flex justify-center overflow-hidden">

            

            <Image

              src="/threadlogo.png"

              width={420}

              height={420}

              alt="Logo"

              className="mx-auto animate-fade-in-up transition-all duration-1000"

              style={{

                filter: "drop-shadow(0 4px 15px rgba(212,175,55,0.3))",

              }}

            />

          </div>

          <style jsx global>{`

        @keyframes ooze-sparkle {

          0% { transform: translate(0, 0) scale(0); opacity: 0; }

          20% { opacity: 1; }

          100% { transform: translate(var(--tx), var(--ty)) scale(1.2); opacity: 0; }

        }

        @keyframes soft-glow {

          0%, 100% { filter: drop-shadow(0 0 12px rgba(212, 175, 55, 0.5)); }

          50% { filter: drop-shadow(0 0 25px rgba(212, 175, 55, 0.8)); }
        }

        .animate-ooze-sparkle { animation: ooze-sparkle 5s ease-out infinite; }

        .animate-soft-glow { animation: soft-glow 4s ease-in-out infinite; }

      `}</style>



          <style jsx global>{`

            @keyframes fade-in-up {

              0% {

                opacity: 0;

                transform: translateY(10px) scale(0.98);

              }

              100% {

                opacity: 1;

                transform: translateY(0) scale(1);

              }

            }

            .animate-fade-in-up {

              animation: fade-in-up 1.5s ease-out forwards;

            }

          `}</style>



          {/* 3. Add a soft float to complement the wave */}

          <style jsx global>{`

            @keyframes flag-flow {

              0% {

                transform: translate(-2px, 0);

              }

              50% {

                transform: translate(2px, -2px);

              }
              100% {
                transform: translate(-2px, 0);
              }

            }

            .animate-flag-flow {

              /* Slow and smooth movement to complement the filter */

              animation: flag-flow 12s ease-in-out infinite;
            }

          `}</style>



          <h2 className="mb-8 mt-8 font-serif text-3xl text-white md:text-5xl font-light leading-tight">

            Premium Textiles For  Every Vision

          </h2>



          <div className="mx-auto h-1 w-32 bg-fabric-gold mb-8 rounded-full"></div>
          <p className="mx-auto max-w-2xl text-lg text-gray-200 leading-relaxed">

            Explore our curated collection of exquisite silks, artisanal linens,

            and royal velvets. Visit our showroom to experience the touch of
            luxury.

          </p>

        </div>

      </section>



      <section className="bg-fabric-cream/30 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-16 text-center">

            <h2 className="font-heading text-5xl text-fabric-dark mb-4">

              Our Collection

            </h2>

            <p className="text-gray-600 font-serif text-xl max-w-2xl mx-auto">

              Handpicked fabrics defining elegance and heritage.

            </p>

          </div>



          <div className="grid  items-center justify-center grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

            {fabrics.map((fabric) => (

              <FabricCard key={fabric.id} fabric={fabric} />

            ))}

          </div>

        </div>

      </section>
      
      <FeatureFab/>
      <AutoCarousel/>
      <ServiceComp />
      <ContactForm/>

      <section

        id="contact"

        className="bg-fabric-dark px-6 py-24 text-fabric-cream relative overflow-hidden"

      >

        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

        <div className="mx-auto max-w-7xl relative z-10">

          <div className="grid grid-cols-1 gap-12 md:grid-cols-4 text-center md:text-left">

  {/* Column 1: Brand */}

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



  {/* Column 2: Showroom */}

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

      href="https://www.google.com/maps/search/?api=1&query=A-20+Lajpat+Nagar+Part-II+New+Delhi" // Recommended: Use a direct link to your shop location here

      target="_blank"

      rel="noreferrer"

      className="mt-6 inline-block border-b border-fabric-gold pb-0.5 text-sm text-fabric-gold transition hover:text-white hover:border-white"

    >

      Get Directions →

    </a>

  </div>



  {/* Column 3: Contact */}

  <div className="flex flex-col items-center md:items-start">

    <h3 className="mb-6 text-lg font-bold uppercase tracking-wider text-fabric-gold">

      Contact Us

    </h3>

    <div className="space-y-6">

      <div>

        <p className="mb-1 text-xs text-gray-500 uppercase">Phone / WhatsApp</p>

        <a href="tel:+918750503536" className="block text-lg transition hover:text-fabric-gold">+91 8750503536</a>

        <a href="tel:+919999056556" className="block text-lg transition hover:text-fabric-gold">+91 9999056556</a>

      </div>

      <div>

        <p className="mb-1 text-xs text-gray-500 uppercase">Email Inquiry</p>

        <a href="mailto:threadtara2025@gmail.com" className="text-lg transition hover:text-fabric-gold">threadtara2025@gmail.com</a>

      </div>

    </div>

  </div>



  {/* COLUMN 4: NEW SOCIAL MEDIA SECTION */}

  <div className="flex flex-col items-center md:items-start">

    <h3 className="mb-6 text-lg font-bold uppercase tracking-wider text-fabric-gold">

      Follow Our Journey

    </h3>

    <div className="flex flex-col space-y-4">

      <a 

        href="https://www.instagram.com/thread_tara" 

        target="_blank" 

        rel="noopener noreferrer"

        className="group flex items-center space-x-3 text-gray-300 hover:text-fabric-gold transition-colors"

      >

        <span className="p-2 border border-white/10 rounded-full group-hover:border-fabric-gold transition-colors">

          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>

        </span>

        <span className="font-serif">Instagram</span>

      </a>

      

      <a 

        href="https://www.facebook.com/profile.php?id=61587532977285" 

        target="_blank" 

        rel="noopener noreferrer"

        className="group flex items-center space-x-3 text-gray-300 hover:text-fabric-gold transition-colors"

      >

        <span className="p-2 border border-white/10 rounded-full group-hover:border-fabric-gold transition-colors">

          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>

        </span>

        <span className="font-serif">Facebook</span>

      </a>

    </div>

  </div>

</div>

        </div>

      </section>

      <div className="py-6 bg-[#111] text-center text-[13px] text-gray-400 tracking-wider">

        <p>© {new Date().getFullYear()} Thread Tara. All rights reserved.</p>

      </div>

    </main>

  );

}



const ThreadOverlay = () => {

  return (

    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

      {[...Array(15)].map((_, i) => (

        <div

          key={i}

          className="absolute h-full w-[1px]"

          style={{

            left: `${(i + 1) * 6.5}%`,

            background:

              "linear-gradient(to bottom, transparent, #D4AF37, transparent)",

            opacity: 0.4,

            animation: `thread-sway ${6 + (i % 4)}s ease-in-out ${i * 0.5}s infinite alternate`,

          }}

        />

      ))}

      <style jsx global>{`

        @keyframes thread-sway {

          0% {

            transform: translateX(0px) rotate(0deg);

          }

          100% {

            transform: translateX(20px) rotate(1deg);

          }

        }

      `}</style>

    </div>

  );

};
