'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  r: number;
  d: number;
  phase: number;
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let rafId = 0;
    let lastTime = 0;
    let elapsed = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Star density reduced on small viewports
      const starCount = Math.min(130, Math.max(35, Math.round((width * height) / 9000)));
      stars = Array.from({ length: starCount }, () => ({
        x: Math.random(),
        y: Math.random(),
        r: 0.4 + Math.random() * 0.9,
        d: 0.2 + Math.random() * 0.8,
        phase: Math.random() * Math.PI * 2,
      }));

      draw(0);
    };

    const draw = (dt: number) => {
      elapsed += dt;
      ctx.clearRect(0, 0, width, height);
      const motion = !mediaQuery.matches;

      for (const s of stars) {
        // Slow vertical and horizontal celestial drift
        const x = (s.x * width + (motion ? elapsed * 0.003 * s.d : 0) + width) % width;
        const y = (s.y * height + (motion ? -elapsed * 0.0015 * s.d : 0) + height) % height;
        const opacity = motion
          ? 0.35 + 0.3 * (0.5 + 0.5 * Math.sin(elapsed * 0.0008 + s.phase))
          : 0.45;

        ctx.fillStyle = `rgba(195, 218, 254, ${opacity})`;
        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = (now: number) => {
      rafId = 0;
      if (document.hidden || mediaQuery.matches) return;
      const dt = lastTime ? Math.min(now - lastTime, 50) : 0;
      lastTime = now;
      draw(dt);
      rafId = requestAnimationFrame(tick);
    };

    const start = () => {
      cancelAnimationFrame(rafId);
      rafId = 0;
      lastTime = 0;
      if (mediaQuery.matches) {
        draw(0);
        return;
      }
      if (!document.hidden) {
        rafId = requestAnimationFrame(tick);
      }
    };

    window.addEventListener('resize', resize, { passive: true });
    document.addEventListener('visibilitychange', start);
    mediaQuery.addEventListener('change', start);

    resize();
    start();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', start);
      mediaQuery.removeEventListener('change', start);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse at 80% 20%, rgba(30, 42, 68, 0.28), transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(20, 28, 48, 0.32), transparent 55%), #05070d',
      }}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
