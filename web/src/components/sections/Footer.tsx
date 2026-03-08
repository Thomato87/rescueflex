import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { brand } from "@/data/brand";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-24">
        {/* Top */}
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="eyebrow tracking-widest">{brand.name}</span>
            <p className="max-w-xs text-sm leading-relaxed text-background/60">
              {brand.tagline}
            </p>
          </div>

          {/* Nav links */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-3 sm:grid-cols-2">
            {brand.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="eyebrow text-background/50 hover:text-background transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${brand.contact.email}`}
              className="text-sm text-background/60 hover:text-background transition-colors"
            >
              {brand.contact.email}
            </a>
            <a
              href={`tel:${brand.contact.phone}`}
              className="text-sm text-background/60 hover:text-background transition-colors"
            >
              {brand.contact.phone}
            </a>
          </div>
        </div>

        <Separator className="my-10 bg-background/10" />

        {/* Bottom */}
        <div className="flex flex-col gap-3 text-xs text-background/40 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} {brand.name}. Alle Rechte vorbehalten.
          </span>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-background/70 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-background/70 transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
