import { Separator } from "@/components/ui/separator";
import { FadeIn, Stagger, StaggerItem } from "@/lib/motion";
import { brand } from "@/data/brand";

export function TrustBar() {
  return (
    <section className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 lg:px-24">
        <Stagger className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {brand.trust.map((item, i) => (
            <StaggerItem key={i}>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-foreground">{item.label}</span>
                <span className="eyebrow text-brand">{item.detail}</span>
              </div>
              {i < brand.trust.length - 1 && (
                <Separator orientation="vertical" className="absolute right-0 top-0 hidden h-full md:block" />
              )}
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
