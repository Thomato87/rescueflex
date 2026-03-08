"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { brand } from "@/data/brand";

// Premium easing — fast out, smooth settle
const reveal = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden lg:flex-row">
      {/* Left vertical rule + year stamp — desktop only */}
      <div
        aria-hidden
        className="absolute left-10 top-0 bottom-0 z-10 hidden flex-col items-center lg:flex"
      >
        <div className="mt-24 w-px flex-1 bg-border" />
        <span
          className="eyebrow my-5 text-[0.6rem] text-muted-foreground/50"
          style={{ writingMode: "vertical-rl", letterSpacing: "0.25em" }}
        >
          {brand.established}
        </span>
        <div className="h-20 w-px bg-border" />
      </div>

      {/* ── LEFT COLUMN ── text content */}
      <div className="relative z-10 flex flex-1 flex-col px-6 pt-32 pb-10 md:px-12 lg:pl-28 lg:pr-16 lg:pt-36">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="eyebrow text-muted-foreground">{brand.hero.eyebrow}</span>
          <div className="h-px w-8 bg-border" />
        </motion.div>

        {/* Headline — each line rolls up from below */}
        <h1 className="display-xl mt-10 flex-1 content-center">
          {brand.hero.headline.map((line, i) => (
            <span key={i} className="block overflow-hidden leading-[1.0]">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.95,
                  delay: 0.2 + i * 0.14,
                  ease: reveal,
                }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Bottom strip */}
        <motion.div
          className="mt-10 border-t border-border pt-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.72, ease: reveal }}
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-start">
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              {brand.hero.body}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="#kontakt">{brand.hero.cta.primary}</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="#leistungen" className="flex items-center gap-2">
                  {brand.hero.cta.secondary}
                  <ArrowDown className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── RIGHT COLUMN ── portrait image */}
      <motion.div
        className="relative h-72 w-full overflow-hidden lg:h-auto lg:w-[42%] lg:shrink-0"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: reveal }}
      >
        {/* Subtle dot-grid overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle, oklch(0.55 0 0) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {/* Gradient fade on the left edge (desktop) */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-background to-transparent lg:block"
        />
        <Image
          src={brand.hero.image}
          alt={brand.hero.imageAlt}
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 42vw"
        />
      </motion.div>
    </section>
  );
}
