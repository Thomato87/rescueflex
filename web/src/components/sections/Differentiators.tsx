import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FadeIn, Stagger, StaggerItem } from "@/lib/motion";
import { brand } from "@/data/brand";

export function Differentiators() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        {/* Header */}
        <FadeIn className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
          <div className="flex flex-col gap-3">
            <Badge variant="outline" className="eyebrow w-fit">
              Warum RescueFlex
            </Badge>
            <h2 className="display-lg">Der Unterschied zählt.</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-right">
            Was RescueFlex von Samaritervereinen und allgemeinen Sicherheitsdienstleistern unterscheidet – in der Praxis.
          </p>
        </FadeIn>
      </div>

      {/* Editorial full-bleed image */}
      <FadeIn>
        <div className="relative mx-auto mb-16 h-[40vh] max-h-[520px] min-h-[260px] max-w-7xl overflow-hidden px-6 md:px-12 lg:px-24">
          <div className="relative h-full w-full overflow-hidden rounded-sm">
            <Image
              src="/rtw-highway.png"
              alt="Rettungswagen auf der Autobahn"
              fill
              className="object-cover object-[center_35%]"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            {/* Dark overlay for legibility */}
            <div className="absolute inset-0 bg-foreground/20" />
          </div>
        </div>
      </FadeIn>

      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        {/* Differentiator list */}
        <Stagger className="flex flex-col">
          {brand.differentiators.map((item, i) => (
            <StaggerItem key={i}>
              <div className="group grid grid-cols-1 gap-6 border-t border-border py-10 transition-colors hover:bg-muted/20 md:grid-cols-[1fr_2fr] md:gap-12 md:px-4">
                <div className="flex items-start gap-4">
                  <span className="eyebrow text-brand tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-medium leading-snug tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground md:max-w-lg">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
          <Separator />
        </Stagger>
      </div>
    </section>
  );
}
