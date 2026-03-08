import { MetadataRoute } from "next";
import { brand } from "@/data/brand";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: brand.meta.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
