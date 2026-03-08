import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { FadeIn, Stagger, StaggerItem } from "@/lib/motion";
import { brand } from "@/data/brand";

export function Services() {
  return (
    <section id="leistungen" className="mx-auto max-w-7xl px-6 py-28 md:px-12 lg:px-24">
      {/* Section header */}
      <FadeIn className="mb-20 flex items-end justify-between gap-8 border-b border-border pb-8">
        <div className="flex flex-col gap-3">
          <Badge variant="outline" className="eyebrow w-fit">
            Leistungen
          </Badge>
          <h2 className="display-lg max-w-lg">
            Was wir für Sie leisten.
          </h2>
        </div>
        <p className="hidden max-w-xs text-sm leading-relaxed text-muted-foreground md:block">
          Vier Kernleistungen – alle basierend auf echter Einsatzerfahrung aus dem Schweizer Rettungsdienst.
        </p>
      </FadeIn>

      {/* Service grid */}
      <Stagger className="grid grid-cols-1 gap-0 md:grid-cols-2">
        {brand.offers.map((offer, i) => (
          <StaggerItem key={offer.id}>
            <div
              className={`group relative flex flex-col gap-6 border-border p-8 transition-colors hover:bg-muted/30 md:p-10
                ${i % 2 === 0 ? "md:border-r" : ""}
                ${i < 2 ? "border-b" : ""}
                border-b md:border-b
                ${i >= brand.offers.length - 2 ? "md:border-b-0" : ""}
              `}
            >
              {/* Number watermark */}
              <span
                className="section-number absolute right-6 top-4 select-none opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:right-8 md:top-6"
                aria-hidden
              >
                {offer.id}
              </span>

              {/* Content */}
              <div className="flex items-start justify-between gap-4">
                <span className="eyebrow text-brand">{offer.id}</span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-medium tracking-tight">{offer.title}</h3>
                <span className="text-sm text-muted-foreground">{offer.subtitle}</span>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {offer.description}
              </p>

              <Separator />

              <ul className="flex flex-col gap-2">
                {offer.deliverables.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-2">
                <Link
                  href="#kontakt"
                  className="eyebrow text-muted-foreground hover:text-foreground inline-flex items-center gap-2 transition-colors"
                >
                  Anfrage stellen
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
