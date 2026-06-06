"use client";

import { useEffect, useState } from "react";

// Cycles through phrases with a type / delete effect.
export function useTypewriter(words: string[], speed = 80, pause = 1600): string {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;
    const current = words[index % words.length];

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
      return;
    }

    const delta = deleting ? speed / 2 : speed;
    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, delta);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}
