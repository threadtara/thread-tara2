import { MetadataRoute } from "next";
import { fabrics } from "@/lib/fabrics";

export default function sitemap(): MetadataRoute.Sitemap {
  const fabricPages = fabrics.map((f) => ({
    url: `https://www.threadtara.com/fabrics/${f.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://www.threadtara.com",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...fabricPages,
  ];
}
