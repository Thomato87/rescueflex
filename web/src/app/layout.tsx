import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { brand } from "@/data/brand";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: brand.meta.title,
    template: `%s | ${brand.name}`,
  },
  description: brand.meta.description,
  keywords: brand.meta.keywords,
  metadataBase: new URL(brand.meta.url),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: brand.meta.url,
    siteName: brand.name,
    title: brand.meta.title,
    description: brand.meta.description,
    images: [{ url: brand.meta.ogImage, width: 1200, height: 630, alt: brand.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: brand.meta.title,
    description: brand.meta.description,
    images: [brand.meta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: brand.name,
  description: brand.description,
  url: brand.meta.url,
  telephone: brand.contact.phone,
  email: brand.contact.email,
  address: {
    "@type": "PostalAddress",
    addressCountry: "CH",
    addressRegion: brand.location,
  },
  areaServed: brand.serviceArea,
  foundingDate: brand.established.toString(),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Leistungen",
    itemListElement: brand.offers.map((o) => ({
      "@type": "Offer",
      name: `${o.title} ${o.subtitle}`,
      description: o.description,
    })),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
