import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn, Stagger, StaggerItem } from "@/lib/motion";
import { brand } from "@/data/brand";

export function FAQ() {
  return (
    <section id="faq" className="border-y border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-12 lg:px-24">
        {/* Header */}
        <FadeIn className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-end">
          <div className="flex flex-col gap-3">
            <Badge variant="outline" className="eyebrow w-fit">
              FAQ
            </Badge>
            <h2 className="display-lg">
              Häufige Fragen.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Nicht dabei? Schreiben Sie uns – wir antworten persönlich und ohne Wartezeit.
          </p>
        </FadeIn>

        {/* Accordion */}
        <FadeIn delay={0.1} className="max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {brand.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
                  <span className="flex items-start gap-4">
                    <span className="eyebrow text-brand tabular-nums mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-10 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
