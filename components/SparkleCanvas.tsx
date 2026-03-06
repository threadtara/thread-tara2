"use client";
import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  life: number;
  rotation: number; // Added for a twinkling effect
}

const SparkleCanvas = ({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | HTMLHeadingElement>;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !containerRef.current) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const particles: Particle[] = [];
    let animationFrame: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      // Spawn stars randomly within the text area
      const x = rect.left + Math.random() * rect.width;
      // Start slightly towards the bottom of the text for a "falling off" look
      const y = rect.top + (Math.random() * rect.height);

      return {
        x,
        y,
        size: Math.random() * 2 + 1.5,
        speedX: (Math.random() - 0.5) * 0.8, 
        speedY: Math.random() * 1 + 0.5, // Changed to positive to fall DOWN
        opacity: 1,
        life: Math.random() * 0.01 + 0.005, // Slower fade for a longer fall
        rotation: Math.random() * Math.PI,
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Increase density slightly for falling effect
      if (particles.length < 80 && Math.random() > 0.7) {
        const particle = createParticle();
        if (particle) particles.push(particle);
      }

      particles.forEach((p, i) => {
        p.y += p.speedY; // Falling down
        p.x += p.speedX; // Slight drift
        p.opacity -= p.life;
        p.rotation += 0.05;

        if (p.opacity <= 0) {
          particles.splice(i, 1);
        } else {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          
          // Classy gold color with glow
          ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity})`; 
          ctx.shadowBlur = 5;
          ctx.shadowColor = "rgba(212, 175, 55, 0.5)";
          
          ctx.beginPath();
          // Draw star/diamond
          ctx.moveTo(0, -p.size);
          ctx.lineTo(p.size / 2, 0);
          ctx.lineTo(0, p.size);
          ctx.lineTo(-p.size / 2, 0);
          ctx.closePath();
          ctx.fill();
          
          ctx.restore();
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resize);
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-20"
    />
  );
};

export default SparkleCanvas;