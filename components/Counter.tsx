"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px" });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    const duration = 2400; // ms

    function animate(from: number, to: number) {
      const start = performance.now();

      function step(now: number) {
        if (cancelled) return;
        const elapsed = now - start;
        const t = Math.min(1, elapsed / duration);
        const eased = easeOutCubic(t);
        const current = Math.round(from + (to - from) * eased);
        if (ref.current) ref.current.textContent = String(current);
        if (t < 1) {
          rafRef.current = requestAnimationFrame(step);
        }
      }

      rafRef.current = requestAnimationFrame(step);
    }

    if (inView) {
      animate(0, value);
    } else if (typeof window !== "undefined" && window.innerWidth <= 480) {
      // mobile fallback
      const t = setTimeout(() => animate(0, value), 150);
      return () => {
        cancelled = true;
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        clearTimeout(t);
      };
    }

    return () => {
      cancelled = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [inView, value]);

  return (
    <motion.span className="tabular-nums">
      <span ref={ref}>0</span>
      {suffix}
    </motion.span>
  );
}
