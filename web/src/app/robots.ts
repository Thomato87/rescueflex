import { MetadataRoute } from "next";
import { brand } from "@/data/brand";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${brand.meta.url}/sitemap.xml`,
  };
}
