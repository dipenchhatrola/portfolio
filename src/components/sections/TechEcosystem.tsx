"use client";

import { useEffect, useRef } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/lib/portfolio";

interface Vertex {
  x: number;
  y: number;
  vx: number;
  vy: number;
  label: string;
  r: number;
}

// A living constellation: each technology is a node, nearby nodes link up,
// and the cursor gently pushes the network around.
export function TechEcosystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const labels = portfolio.techEcosystem;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };
    let raf = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const nodes: Vertex[] = labels.map((label) => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      label,
      r: 3 + Math.random() * 3,
    }));

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // place nodes from normalized coords on first sizing
      nodes.forEach((n) => {
        if (n.x <= 1) n.x = n.x * width;
        if (n.y <= 1) n.y = n.y * height;
      });
    };
    resize();

    const linkDist = Math.min(width, height) * 0.32;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // update positions
      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;
        }
        // bounds
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));

        // mouse repulsion
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 130) {
          const force = (130 - dist) / 130;
          n.x += (dx / dist) * force * 2.4;
          n.y += (dy / dist) * force * 2.4;
        }
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < linkDist) {
            const alpha = (1 - d / linkDist) * 0.4;
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(0, `rgba(124,58,237,${alpha})`);
            grad.addColorStop(1, `rgba(34,211,238,${alpha})`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // nodes + labels
      ctx.font = "12px var(--font-mono, monospace)";
      for (const n of nodes) {
        const near = Math.hypot(n.x - mouse.x, n.y - mouse.y) < 130;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = near ? "#22d3ee" : "#a78bfa";
        ctx.shadowColor = near ? "#22d3ee" : "#7c3aed";
        ctx.shadowBlur = near ? 16 : 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        ctx.fillStyle = near ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.55)";
        ctx.fillText(n.label, n.x + n.r + 6, n.y + 4);
      }

      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <Section id="ecosystem">
      <SectionHeading
        eyebrow="Tech Ecosystem"
        title="A connected web of technologies"
        subtitle="Move your cursor through the network — the technologies I work with don't live in isolation, they connect."
      />
      <div
        ref={wrapRef}
        className="relative mt-14 h-[480px] w-full overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.08),transparent_70%)] sm:h-[560px]"
      >
        <canvas ref={canvasRef} className="absolute inset-0" />
      </div>
    </Section>
  );
}
