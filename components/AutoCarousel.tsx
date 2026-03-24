'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Brand {
  id: number;
  name: string;
}

const brands: Brand[] = [
  {
    id: 1,
    name: 'Silk',
  },
  {
    id: 2,
    name: 'Cotton',
  },
  {
    id: 3,
    name: 'Brocade',
  },
  {
    id: 4,
    name: 'Banarasi',
  },
  {
    id: 5,
    name: 'Printed',
  },
  {
    id: 6,
    name: 'Dyeable',
  },
 
];

export default function AutoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const xRef = useRef<number>(0);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;

    // Get original items
    const originalItems = Array.from(content.querySelectorAll('.scroll-item'));
    const itemCount = originalItems.length;

    // Clone items 4 times for seamless infinite loop
    for (let i = 0; i < 4; i++) {
      originalItems.forEach((item) => {
        const clone = item.cloneNode(true) as HTMLElement;
        content.appendChild(clone);
      });
    }

    // Calculate width of one set
    let singleSetWidth = 0;
    originalItems.forEach((item) => {
      const element = item as HTMLElement;
      singleSetWidth += element.offsetWidth + 32; // 32px gap
    });

    // Kill any existing animation
    if (animationRef.current) {
      animationRef.current.kill();
    }

    // Create infinite continuous animation
    animationRef.current = gsap.to(
      { value: 0 },
      {
        value: singleSetWidth * 4,
        duration: 60,
        ease: 'linear',
        repeat: -1,
        onUpdate: function () {
          const currentValue = this.targets()[0].value;
          const wrappedValue = currentValue % singleSetWidth;
          xRef.current = -wrappedValue;
          gsap.set(content, { x: xRef.current });
        },
      }
    );

    // Pause animation on hover
    const handleMouseEnter = () => {
      if (animationRef.current) {
        animationRef.current.pause();
      }
    };

    const handleMouseLeave = () => {
      if (animationRef.current) {
        animationRef.current.play();
      }
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup
    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, []);

  return (
    <div className="w-full bg-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-fit mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl lg:text-6xl font-heading text-fabric-dark mb-4">
            Be Your Own Designer
          </h2>
          <p className="text-lg font-serif text-gray-600">
            Explore our curated selection of premium fabrics and create your own masterpiece.
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div
          ref={containerRef}
          className="overflow-hidden rounded-2xl py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8"
        >
          <div
            ref={contentRef}
            className="flex gap-8 sm:gap-12 lg:gap-16 will-change-transform"
          >
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="scroll-item shrink-0 flex items-center justify-center min-w-max"
              >
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-bold italic text-black whitespace-nowrap hover:scale-110 transition-transform duration-300">
                    {brand.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}