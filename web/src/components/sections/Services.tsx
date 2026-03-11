"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "@/lib/motion";
import { brand, type Offer } from "@/data/brand";

function ServiceRow({ offer, index }: { offer: Offer; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-border last:border-b">
      {/* Row trigger */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group w-full py-5 text-left transition-colors hover:bg-muted/20 sm:py-8 md:py-10"
      >
        <div className="flex items-center gap-3 px-4 sm:gap-6 sm:px-6 md:px-12 lg:px-24">
          {/* Large number */}
          <span
            aria-hidden
            className="w-12 shrink-0 text-right font-light tabular-nums text-muted-foreground/25 transition-colors group-hover:text-muted-foreground/40 sm:w-20"
            style={{ fontSize: "clamp(1.75rem, 4vw, 4rem)", lineHeight: 1 }}
          >
            {offer.id}
          </span>

          {/* Title block */}
          <div className="flex flex-1 flex-col gap-0.5 md:flex-row md:items-baseline md:gap-4">
            <h3 className="text-xl font-light tracking-tight sm:text-2xl md:text-3xl">
              {offer.title}
            </h3>
            <span className="text-sm text-muted-foreground md:text-base">
              {offer.subtitle}
            </span>
          </div>

          {/* Arrow */}
          <ArrowUpRight
            className={`h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-foreground ${
              open ? "rotate-45 text-brand" : "rotate-0"
            }`}
          />
        </div>
      </button>

      {/* Expandable detail */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-6 sm:px-6 sm:pb-10 md:px-12 lg:px-24">
              <div className="grid grid-cols-1 gap-6 border-t border-border pt-6 sm:gap-8 sm:pt-8 md:grid-cols-[1fr_1fr] md:gap-12">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {offer.description}
                </p>
                <div className="flex flex-col gap-4">
                  <ul className="flex flex-col gap-2">
                    {offer.deliverables.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#kontakt"
                    className="eyebrow mt-2 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Anfrage stellen
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Services() {
  return (
    <section id="leistungen" className="py-14 sm:py-28">
      {/* Section header */}
      <FadeIn className="mb-10 flex items-end justify-between gap-4 px-4 sm:mb-16 sm:gap-8 sm:px-6 md:px-12 lg:px-24">
        <div className="flex flex-col gap-2">
          <span className="eyebrow text-brand">Leistungen</span>
          <h2 className="display-lg max-w-lg">Was wir für Sie leisten.</h2>
        </div>
        <p className="hidden max-w-xs text-right text-sm leading-relaxed text-muted-foreground md:block">
          Vier Kernleistungen – basierend auf echter Einsatzerfahrung aus dem Schweizer Rettungsdienst.
        </p>
      </FadeIn>

      {/* Stacked rows — full bleed, no container */}
      <div>
        {brand.offers.map((offer, i) => (
          <ServiceRow key={offer.id} offer={offer} index={i} />
        ))}
      </div>
    </section>
  );
}
