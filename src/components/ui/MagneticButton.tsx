"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { useIsTouch } from "@/hooks/useMediaQuery";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  strength?: number;
  download?: boolean;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

// A button/link that magnetically follows the cursor — a signature
// premium-portfolio interaction.
export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  strength = 0.4,
  download,
  target,
  rel,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouch();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  const handleMove = (e: React.MouseEvent) => {
    if (isTouch || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mx = e.clientX - (rect.left + rect.width / 2);
    const my = e.clientY - (rect.top + rect.height / 2);
    x.set(mx * strength);
    y.set(my * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const styles = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-300",
    variant === "primary" &&
      "text-white shadow-[0_8px_30px_rgba(124,58,237,0.35)] bg-gradient-to-r from-violet to-blue hover:shadow-[0_8px_40px_rgba(124,58,237,0.45)]",
    variant === "outline" &&
      "text-ink border border-ink/15 bg-white/70 hover:border-violet/50 hover:bg-violet/[0.04]",
    variant === "ghost" && "text-ink/80 hover:text-ink",
    className
  );

  const inner = <span className="relative z-10 flex items-center gap-2">{children}</span>;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: sx, y: sy }}
      className="inline-block"
      data-cursor
    >
      {href ? (
        <a
          href={href}
          onClick={onClick}
          download={download}
          target={target}
          rel={rel}
          aria-label={ariaLabel}
          className={styles}
        >
          {inner}
        </a>
      ) : (
        <button type="button" onClick={onClick} aria-label={ariaLabel} className={styles}>
          {inner}
        </button>
      )}
    </motion.div>
  );
}
