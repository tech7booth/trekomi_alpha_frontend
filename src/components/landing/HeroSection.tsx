"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, PlayCircle, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" },
  }),
};

export const HeroSection = ()  => {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Ambient background accent — decorative only, hidden from AT */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-120 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(15,61,145,0.12),transparent)] dark:bg-[radial-gradient(60%_60%_at_50%_0%,rgba(15,61,145,0.25),transparent)]"
      />

      <div className="mx-auto flex flex-col-reverse sm:grid max-w-7xl sm:grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 md:py-18 lg:grid-cols-2 lg:px-8 lg:py-18">
        <div>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            Trusted by 2.4L+ students across India
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.05}
            variants={fadeUp}
            className="mt-5 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl"
          >
            Learn from India&apos;s best educators,{" "}
            <span className="text-primary">rank without the guesswork</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.1}
            variants={fadeUp}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Live classes, structured test series, and honest progress
            tracking for JEE, NEET, UPSC, and school foundation courses —
            all on one platform built for serious preparation.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.15}
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button
              asChild
              size="lg"
              className="rounded-xl px-4 bg-primary text-base hover:bg-primary/90"
            >
              <Link href="/register">
                Start learning free
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl text-base"
            >
              <Link href="/courses">
                <PlayCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                Browse courses
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.2}
            variants={fadeUp}
            className="mt-8 flex items-center gap-3"
          >
            <div className="flex -space-x-3" aria-hidden="true">
              {["S1", "S2", "S3", "S4"].map((seed) => (
                <span
                  key={seed}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-muted text-[10px] font-semibold text-muted-foreground"
                >
                  {seed}
                </span>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              <div className="flex items-center gap-1 text-foreground">
                <Star className="h-4 w-4 fill-secondary text-secondary" aria-hidden="true" />
                <span className="font-semibold">4.8/5</span>
              </div>
              <span>from 42,000+ verified reviews</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
            <Image
              src="/cources/jee-p.jpg"
              alt="Student attending a live Trekomi Alpha class on a laptop"
              width={640}
              height={480}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-lg sm:block">
            <p className="text-xs font-medium text-muted-foreground">Today&apos;s live class</p>
            <p className="mt-1 text-sm font-semibold text-foreground">
              Thermodynamics · Physics
            </p>
            <p className="text-xs text-secondary-foreground">Starts in 12 minutes</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
