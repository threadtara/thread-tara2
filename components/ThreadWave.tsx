"use client";
import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
}

const ThreadWave = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const points = useRef<{ x: number; y: number }[]>([]);
  const stars = useRef<Star[]>([]);
  
  const THREAD_LENGTH = 18;
  const SMOOTHNESS = 0.25;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    points.current = Array(THREAD_LENGTH).fill(0).map(() => ({ 
      x: window.innerWidth / 2, 
      y: window.innerHeight / 2 
    }));

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      
      // Emit stars from the cursor position
      if (Math.random() > 0.6) { // Only create stars occasionally for elegance
        stars.current.push({
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 3 + 1,
          opacity: 1,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
        });
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    handleResize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Update Thread Physics
      let head = points.current[0];
      head.x += (mouse.current.x - head.x) * SMOOTHNESS;
      head.y += (mouse.current.y - head.y) * SMOOTHNESS;

      for (let i = 1; i < THREAD_LENGTH; i++) {
        const prev = points.current[i - 1];
        const curr = points.current[i];
        curr.x += (prev.x - curr.x) * SMOOTHNESS;
        curr.y += (prev.y - curr.y) * SMOOTHNESS;
      }

      // 2. Draw Stars (Draw before thread so thread sits on top)
      stars.current.forEach((star, index) => {
        star.x += star.vx;
        star.y += star.vy;
        star.opacity -= 0.015; // Stars fade out

        if (star.opacity <= 0) {
          stars.current.splice(index, 1);
          return;
        }

        ctx.fillStyle = `rgba(255, 230, 150, ${star.opacity})`;
        ctx.beginPath();
        // Draw a diamond/star shape
        ctx.moveTo(star.x, star.y - star.size);
        ctx.lineTo(star.x + star.size/2, star.y);
        ctx.lineTo(star.x, star.y + star.size);
        ctx.lineTo(star.x - star.size/2, star.y);
        ctx.fill();
      });

      // 3. Draw the Thread
      ctx.beginPath();
      ctx.moveTo(points.current[0].x, points.current[0].y);
      for (let i = 1; i < points.current.length - 1; i++) {
        const xc = (points.current[i].x + points.current[i + 1].x) / 2;
        const yc = (points.current[i].y + points.current[i + 1].y) / 2;
        ctx.quadraticCurveTo(points.current[i].x, points.current[i].y, xc, yc);
      }

      const gradient = ctx.createLinearGradient(
        points.current[0].x, points.current[0].y, 
        points.current[THREAD_LENGTH-1].x, points.current[THREAD_LENGTH-1].y
      );
      gradient.addColorStop(0, "#D4AF37");   // Gold
      gradient.addColorStop(0.2, "#FFF096"); // Shine
      gradient.addColorStop(1, "transparent");

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1.5;
      ctx.lineCap = "round";
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
      style={{ cursor: 'none' }} // This hides the default cursor
    />
  );
};

export default ThreadWave;