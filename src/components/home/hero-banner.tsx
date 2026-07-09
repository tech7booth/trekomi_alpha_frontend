"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import type { HeroSlide } from "@/types/hero.types";
import { cn } from "@/lib/utils";

const AUTOPLAY_INTERVAL_MS = 5000;

interface HeroBannerProps {
  slides: HeroSlide[];
  isLoading?: boolean;
}

export const HeroBanner = ({ slides, isLoading = false }: HeroBannerProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [isPaused, slides.length]);

  if (isLoading) {
    return <Skeleton className="h-64 w-full rounded-xl md:h-80" />;
  }

  if (slides.length === 0) return null;

  const activeSlide = slides[activeIndex];

  return (
    // components/home/hero-banner.tsx
    <div
      className="relative h-64 w-full overflow-hidden rounded-xl md:h-80"
      style={{
        background: "linear-gradient(135deg, var(--gradient-from) 0%, var(--gradient-via) 55%, var(--gradient-to) 100%)",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
<div
  className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-secondary/20 blur-3xl"
  aria-hidden="true"
/>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide.id}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center"
        >
          <div className="relative z-10 flex w-full flex-col justify-center gap-3 px-6 md:w-3/5 md:px-10">
            <h1 className="text-heading font-bold leading-tight text-primary-foreground">
              {activeSlide.title}
              <br />
              <span className="text-secondary">{activeSlide.highlight}</span>
            </h1>
            <p className="max-w-sm text-body text-primary-foreground/80">
              {activeSlide.description}
            </p>
            <Link
              href={activeSlide.ctaHref}
              className={cn(
                "mt-2 inline-flex w-fit items-center gap-2 rounded-xl bg-secondary px-5 py-2.5",
                "text-body font-semibold text-secondary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
              )}
            >
              {activeSlide.ctaLabel}
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="absolute right-0 top-0 hidden h-full w-2/5 md:block">
            <Image
              src={activeSlide.imageUrl}
              alt=""
              fill
              priority={activeIndex === 0}
              sizes="(min-width: 768px) 40vw, 0vw"
              className="object-contain object-bottom"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {slides.length > 1 && (
        <div className="absolute bottom-4 left-6 z-10 flex gap-1.5 md:left-10">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === activeIndex}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                index === activeIndex
                  ? "w-6 bg-secondary"
                  : "w-1.5 bg-primary-foreground/40 hover:bg-primary-foreground/60"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};