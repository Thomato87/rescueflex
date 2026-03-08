import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FadeIn, Stagger, StaggerItem } from "@/lib/motion";
import { brand } from "@/data/brand";

export function Process() {
  return (
    <section id="prozess" className="border-y border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 lg:px-24">
        {/* Header */}
        <FadeIn className="mb-20">
          <Badge variant="outline" className="eyebrow mb-4">
            Prozess
          </Badge>
          <h2 className="display-lg max-w-md">
            In drei Schritten zu Ihrer Lösung.
          </h2>
        </FadeIn>

        {/* Steps */}
        <Stagger className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {brand.process.map((step) => (
            <StaggerItem key={step.step}>
              <div className="flex flex-col gap-6 bg-background p-8 md:p-10">
                <span className="eyebrow text-brand">{step.step}</span>
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-medium tracking-tight">{step.title}</h3>
                  <Separator />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Bottom note */}
        <FadeIn delay={0.3} className="mt-12">
          <p className="max-w-sm text-xs text-muted-foreground">
            Jede Anfrage wird individuell geprüft. Wir melden uns in der Regel innerhalb von 24 Stunden.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
