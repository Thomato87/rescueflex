import { brand } from "@/data/brand";

const items = [
  ...brand.offers.map((o) => o.title.toUpperCase()),
  ...brand.offers.map((o) => o.title.toUpperCase()),
];

export function Marquee() {
  return (
    <div
      className="overflow-hidden border-y border-border bg-foreground py-4 text-background"
      aria-hidden
    >
      <div className="marquee-track flex whitespace-nowrap">
        {/* Two copies for seamless loop */}
        {[0, 1].map((copy) => (
          <span key={copy} className="marquee-inner flex shrink-0">
            {items.map((label, i) => (
              <span key={i} className="flex items-center">
                <span className="eyebrow px-8 text-background/80 hover:text-background transition-colors">
                  {label}
                </span>
                <span className="text-brand/60 text-xs" aria-hidden>
                  ·
                </span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
