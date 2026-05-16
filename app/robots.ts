// app/robots.ts
import { MetadataRoute } from "next";

const BASE_URL = "https://www.threadtara.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ─── Rule 1: Good bots (Google, Bing, etc.) ──────────────
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",           // API routes — not public content
          "/_next/",         // Next.js build internals
          "/admin/",         // Admin panel if you have one
          "/search?",        // Search result pages (duplicate content)
          "/cart/",          // Shopping cart — private session data
          "/checkout/",      // Checkout — private
          "/account/",       // User account pages — private
          "/*.json$",        // Raw JSON files
        ],
      },

      // ─── Rule 2: Block AI training crawlers ──────────────────
      // These bots scrape your content to train AI models,
      // not to rank you in search results — block them.
      {
        userAgent: "GPTBot",         // OpenAI
        disallow: "/",
      },
      {
        userAgent: "Claude-Web",     // Anthropic
        disallow: "/",
      },
      {
        userAgent: "CCBot",          // Common Crawl (used for AI training)
        disallow: "/",
      },
      {
        userAgent: "anthropic-ai",
        disallow: "/",
      },
      {
        userAgent: "Google-Extended", // Google Gemini training
        disallow: "/",
      },
    ],

    // ─── Point all bots to your sitemap ──────────────────────
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}