"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  durationMs?: number;
}

/**
 * Counts up from 0 to `value` once the element scrolls into view.
 * Uses a plain rAF loop rather than a spring so the final displayed
 * number is always exact (springs can overshoot/undershoot integers).
 */
export const AnimatedCounter = ({
  value,
  suffix = "",
  durationMs = 1200,
}: AnimatedCounterProps)  => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let animationFrame: number;
    const startTime = performance.now();

    const tick = (now: number): void => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = 1 - (1 - progress) ** 3;
      setDisplayValue(Math.round(eased * value));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, durationMs]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
};
