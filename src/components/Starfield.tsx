'use client';

import { useEffect, useRef } from 'react';
import { GALAXY_POINTS } from '@/data/galaxyPoints';

interface Star {
  x: number;
  y: number;
  r: number;
  d: number;
  phase: number;
  lime: boolean;
}

interface ShapePoint {
  u: number;
  v: number;
  x: number;
  y: number;
  r: number;
  phase: number;
  lime: boolean;
}

interface Shape {
  anchor: HTMLElement;
  section: HTMLElement;
  ratio: number;
  armed: boolean;
  progress: number;
  points: ShapePoint[];
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const clamp = (n: number) => Math.max(0, Math.min(1, n));
    const smooth = (n: number) => n * n * (3 - 2 * n);

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let shapes: Shape[] = [];
    let rafId = 0;
    let lastTime = 0;
    let elapsed = 0;
    let px = 0;
    let py = 0;
    let tx = 0;
    let ty = 0;

    const initShapes = () => {
      const anchors = Array.from(document.querySelectorAll<HTMLElement>('[data-particle="galaxy"]'));
      shapes = anchors.map((anchor) => {
        const section = (anchor.closest('section') || anchor.parentElement || document.body) as HTMLElement;
        return {
          anchor,
          section,
          ratio: 1.25,
          armed: false,
          progress: 0,
          points: GALAXY_POINTS.map(([u, v], i) => {
            const dist = Math.hypot(u - 0.5, v - 0.5);
            const isCore = dist < 0.13;
            const r = isCore
              ? 0.55 + Math.random() * 0.9
              : 0.38 + Math.random() * 0.75;
            return {
              u,
              v,
              x: Math.random(),
              y: Math.random(),
              r,
              phase: Math.random() * Math.PI * 2,
              lime: i % 7 === 0, // ~14% subtle lime stars
            };
          }),
        };
      });
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.6);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(200, Math.max(85, Math.round((width * height) / 7000)));
      stars = Array.from({ length: count }, () => ({
        x: Math.random(),
        y: Math.random(),
        r: 0.35 + Math.random() * 0.95,
        d: 0.25 + Math.random() * 0.75,
        phase: Math.random() * Math.PI * 2,
        lime: Math.random() < 0.12,
      }));

      initShapes();
      draw(0);
    };

    const draw = (dt: number) => {
      elapsed += dt;
      ctx.clearRect(0, 0, width, height);
      const motion = !mediaQuery.matches;
      const scrollY = window.scrollY || 0;

      // Mouse parallax easing
      px += (tx - px) * 0.025;
      py += (ty - py) * 0.025;

      // 1. Drifting background starfield
      for (const s of stars) {
        const x = (s.x * width + (motion ? elapsed * 0.004 * s.d + px * s.d : 0) + width) % width;
        const y =
          (s.y * height +
            (motion ? -elapsed * 0.0018 * s.d + py * s.d - scrollY * 0.018 * s.d : 0) +
            height * 100) %
          height;

        const alpha = motion
          ? 0.38 + 0.28 * (0.5 + 0.5 * Math.sin(elapsed * 0.0006 + s.phase))
          : 0.5;

        ctx.fillStyle = s.lime
          ? `rgba(190, 225, 154, ${alpha})`
          : `rgba(190, 212, 247, ${alpha})`;

        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Interactive Celestial Galaxy Particle Gathering & Scattering Engine
      for (const shape of shapes) {
        const section = shape.section.getBoundingClientRect();
        const box = shape.anchor.getBoundingClientRect();

        const visibleHeight = Math.max(0, Math.min(box.bottom, height * 0.94) - Math.max(box.top, 80));
        const visibleRatio = visibleHeight / Math.max(1, Math.min(box.height, height * 0.8));

        if (visibleHeight <= 0) {
          shape.armed = false;
          shape.progress = 0;
        }

        if (section.bottom < -height * 0.25 || section.top > height * 1.25) continue;

        if (visibleRatio >= 0.45) {
          shape.armed = true;
        }

        const entering = clamp((height * 0.95 - section.top) / (height * 0.4));
        const leaving = clamp((section.bottom - height * 0.15) / (height * 0.65));
        const target = shape.armed ? smooth(Math.min(entering, leaving)) : 0;

        // Smooth gathering animation (~2.2s inward travel)
        if (target > shape.progress) {
          shape.progress = Math.min(target, shape.progress + dt / 2200);
        } else {
          shape.progress = target;
        }

        const progress = motion ? shape.progress : 1;
        const visible =
          clamp((height * 1.12 - section.top) / (height * 0.25)) *
          clamp((section.bottom + height * 0.15) / (height * 0.25));

        if (!visible || progress <= 0.001) continue;

        const sw = Math.min(box.width, box.height * shape.ratio);
        const sh = sw / shape.ratio;
        const ox = box.left + (box.width - sw) / 2;
        const oy = box.top + (box.height - sh) / 2;

        // Subtle slow cosmic rotation when formed
        const rot = motion ? elapsed * 0.00007 : 0;
        const cosR = Math.cos(rot);
        const sinR = Math.sin(rot);

        for (const p of shape.points) {
          // Orbit around galaxy nucleus (0.5, 0.5)
          const cu = p.u - 0.5;
          const cv = p.v - 0.5;
          const ru = 0.5 + cu * cosR - cv * sinR;
          const rv = 0.5 + cu * sinR + cv * cosR;

          const targetX = ox + ru * sw;
          const targetY = oy + rv * sh;
          const spreadX = p.x * width;
          const spreadY = p.y * height;

          // Smooth interpolation between scattered star position and galaxy position
          const x = spreadX * (1 - progress) + targetX * progress;
          const y = spreadY * (1 - progress) + targetY * progress;

          const shimmer = motion ? 0.75 + 0.15 * Math.sin(elapsed * 0.001 + p.phase) : 0.85;
          const alpha = ((shape.armed ? 0.15 : 0.03) + 0.65 * progress) * visible * shimmer;

          ctx.fillStyle = p.lime
            ? `rgba(190, 225, 154, ${alpha})`
            : `rgba(190, 212, 247, ${alpha})`;

          ctx.beginPath();
          ctx.arc(x, y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
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

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') {
        tx = (e.clientX / width - 0.5) * 15;
        ty = (e.clientY / height - 0.5) * 15;
      }
    };

    // Watch for DOM changes (navigation, mounting of hero anchor)
    const observer = new MutationObserver(() => {
      const currentAnchors = document.querySelectorAll('[data-particle="galaxy"]');
      if (currentAnchors.length !== shapes.length) {
        initShapes();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('resize', resize, { passive: true });
    window.addEventListener('scroll', () => {
      if (mediaQuery.matches) draw(0);
    }, { passive: true });
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('visibilitychange', start);
    mediaQuery.addEventListener('change', start);

    resize();
    start();

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('visibilitychange', start);
      mediaQuery.removeEventListener('change', start);
    };
  }, []);

  return (
    <div aria-hidden="true" className="space-backdrop">
      <canvas ref={canvasRef} id="starfield" />
    </div>
  );
}
