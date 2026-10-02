'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  r: number;
  d: number;
  phase: number;
  lime: boolean;
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
      const dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(180, Math.max(70, Math.round((width * height) / 8000)));
      stars = Array.from({ length: count }, () => ({
        x: Math.random(),
        y: Math.random(),
        r: 0.35 + Math.random() * 0.95,
        d: 0.25 + Math.random() * 0.75,
        phase: Math.random() * Math.PI * 2,
        lime: Math.random() < 0.12, // 12% subtle lime stars
      }));

      draw(0);
    };

    const draw = (dt: number) => {
      elapsed += dt;
      ctx.clearRect(0, 0, width, height);
      const motion = !mediaQuery.matches;
      const scrollY = window.scrollY || 0;

      for (const s of stars) {
        const x = (s.x * width + (motion ? elapsed * 0.0035 * s.d : 0) + width) % width;
        const y =
          (s.y * height +
            (motion ? -elapsed * 0.0018 * s.d - scrollY * 0.015 * s.d : 0) +
            height * 100) %
          height;

        const alpha = motion
          ? 0.35 + 0.25 * (0.5 + 0.5 * Math.sin(elapsed * 0.0006 + s.phase))
          : 0.45;

        ctx.fillStyle = s.lime
          ? `rgba(190, 225, 154, ${alpha * 0.9})`
          : `rgba(190, 212, 247, ${alpha})`;

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
    window.addEventListener('scroll', () => {
      if (mediaQuery.matches) draw(0);
    }, { passive: true });
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
          'radial-gradient(ellipse at 75% 24%, rgba(37, 35, 68, 0.19), transparent 52%), radial-gradient(ellipse at 20% 75%, rgba(23, 44, 68, 0.2), transparent 55%), #05070d',
      }}
    >
      <canvas ref={canvasRef} id="starfield" className="block w-full h-full" />
    </div>
  );
}
