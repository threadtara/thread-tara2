// app/sitemap.ts
import { MetadataRoute } from "next";

const BASE_URL = "https://www.threadtara.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ─── Core pages ────────────────────────────────────
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/fabrics`,
      lastModified: new Date(),
      changeFrequency: "weekly",   // inventory changes often
      priority: 0.9,               // your main product page
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ─── Fabric category pages (add as you create them) ──
    {
      url: `${BASE_URL}/fabrics/banarasi-silk`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/fabrics/organza`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/fabrics/chiffon`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/fabrics/net`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/fabrics/indo-western`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // ─── Business / info pages ──────────────────────────
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}