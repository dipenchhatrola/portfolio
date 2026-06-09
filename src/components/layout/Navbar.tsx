"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { portfolio } from "@/lib/portfolio";
import { scrollToId } from "@/lib/scrollTo";
import { cn } from "@/lib/utils";

const LINKS = [
  { id: "story", label: "Story" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "philosophy", label: "Philosophy" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className={cn(
            "flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300",
            scrolled ? "glass-strong" : "bg-transparent"
          )}
        >
          <button
            onClick={() => go("hero")}
            className="flex items-center gap-2 font-display text-base font-bold text-ink"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet to-blue text-sm text-white">
              {portfolio.personal.firstName.charAt(0)}
            </span>
            {portfolio.personal.firstName}
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="rounded-full px-3.5 py-1.5 text-sm text-slate-deep/80 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                {l.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => go("contact")}
            className="hidden rounded-full bg-ink px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105 md:block"
          >
            Let&apos;s talk
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="text-ink md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </motion.header>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 flex flex-col gap-1 rounded-3xl p-4 glass-strong md:hidden"
          >
            {LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="rounded-xl px-4 py-3 text-left text-ink/85 hover:bg-ink/5"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => go("contact")}
              className="mt-1 rounded-xl bg-gradient-to-r from-violet to-blue px-4 py-3 font-medium text-white"
            >
              Let&apos;s talk
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
