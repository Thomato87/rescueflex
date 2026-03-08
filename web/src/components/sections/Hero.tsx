"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { brand } from "@/data/brand";
import { ease } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col px-6 pt-28 pb-12 md:px-12 lg:px-24">
      {/* Top label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="flex items-center gap-3"
      >
        <span className="eyebrow text-muted-foreground">{brand.hero.eyebrow}</span>
        <div className="h-px w-10 bg-border" />
      </motion.div>

      {/* Main headline – fills vertical space */}
      <div className="flex flex-1 flex-col justify-center py-12">
        <h1 className="display-xl max-w-5xl">
          {brand.hero.headline.map((line, i) => (
            <motion.span
              key={i}
              className="block overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15 + i * 0.1, ease }}
            >
              {line}
            </motion.span>
          ))}
        </h1>
      </div>

      {/* Bottom bar – body copy + CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease }}
      >
        <Separator className="mb-8" />
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
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
    </section>
  );
}
