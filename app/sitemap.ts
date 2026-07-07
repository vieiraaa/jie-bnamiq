import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

const base = "https://www.jiebnamiq.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/sobre",
    "/produtos",
    "/segmentos",
    "/contato",
    "/privacidade",
    "/termos",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/produtos/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...productRoutes];
}
