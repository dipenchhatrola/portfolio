"use client";

import { useEffect, useRef, useState } from "react";
import { useIsTouch } from "@/hooks/useMediaQuery";

// A custom interactive cursor: a small dot + a trailing ring that
// grows when hovering interactive elements ([data-cursor] / a / button).
export function Cursor() {
  const isTouch = useIsTouch();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (isTouch) return;
    let raf = 0;
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      setHidden(false);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0)`;
      }
      const t = e.target as HTMLElement;
      setHovering(
        !!t.closest("a, button, [data-cursor], input, textarea, [role='button']")
      );
    };

    const onLeave = () => setHidden(true);

    const loop = () => {
      ring.x += (mouse.x - ring.x) * 0.15;
      ring.y += (mouse.y - ring.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100]"
      style={{ opacity: hidden ? 0 : 1, transition: "opacity 0.3s" }}
    >
      <div
        ref={dotRef}
        className="absolute left-0 top-0 -ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-white"
        style={{ willChange: "transform" }}
      />
      <div
        ref={ringRef}
        className="absolute left-0 top-0 rounded-full border border-white/40 transition-[width,height,margin,background-color,border-color] duration-300"
        style={{
          width: hovering ? 56 : 30,
          height: hovering ? 56 : 30,
          marginLeft: hovering ? -28 : -15,
          marginTop: hovering ? -28 : -15,
          backgroundColor: hovering ? "rgba(124,58,237,0.12)" : "transparent",
          borderColor: hovering ? "rgba(34,211,238,0.6)" : "rgba(255,255,255,0.4)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
