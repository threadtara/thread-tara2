# Thread Tara — Complete SEO Setup Guide

## Files Changed / Created

| File | Action | What it does |
|------|--------|-------------|
| `app/layout.tsx` | ✏️ Updated | Root metadata, JSON-LD LocalBusiness, lang="en-IN", OG tags |
| `app/page.tsx` | ✏️ Updated | Homepage metadata export (server component wrapper) |
| `app/HomeClient.tsx` | 🆕 New | Your existing page.tsx moved here (client component) |
| `app/fabrics/[id]/page.tsx` | ✏️ Updated | generateMetadata + Product & Breadcrumb JSON-LD |
| `app/fabrics/[id]/FabricDetailClient.tsx` | 🆕 New | Your existing fabric detail UI (client component) |
| `app/sitemap.ts` | ✏️ Updated | Correct domain + all fabric URLs |
| `app/robots.ts` | 🆕 New | robots.txt via Next.js |
| `next.config.ts` | ✏️ Updated | Security headers (HSTS, X-Frame, etc.) |

---

## Setup Checklist

### 1. Update your domain
Search and replace `https://www.threadtara.in` with your actual live domain in:
- `app/layout.tsx`
- `app/fabrics/[id]/page.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `next.config.ts`

### 2. Add your OG image
Create a **1200×630px** image of your store/fabrics and save it as:
```
/public/og-image.jpg
```
This image appears when someone shares your link on WhatsApp, Facebook, etc.

### 3. Add Google Search Console verification
- Go to [Google Search Console](https://search.console.google.com)
- Add your site → choose "HTML tag" method
- Copy the content value (looks like: `abc123XYZ...`)
- Paste it in `app/layout.tsx`:
```ts
verification: {
  google: "PASTE_YOUR_CODE_HERE",
},
```

### 4. Verify your GPS coordinates
In `app/layout.tsx`, confirm these match your exact Google Maps pin:
```ts
geo: {
  latitude: 28.5696,   // ← verify this
  longitude: 77.2366,  // ← verify this
}
```
Open Google Maps → right-click your shop → copy coordinates.

### 5. Confirm opening hours
Update in `app/layout.tsx` `localBusinessJsonLd.openingHoursSpecification`
if your hours differ from the defaults set (Mon–Sat 10:30–20:00, Sun 11:00–19:00).

---

## Why These Changes Rank Better

### `lang="en-IN"` 
Tells Google this is an India-targeted English site — better local results.

### `metadataBase`
Without this, Next.js can't build absolute OG/canonical URLs. You had this missing — it would break WhatsApp previews.

### JSON-LD: ClothingStore
Google uses this to build your Knowledge Panel and show your store in Maps results for searches like "fabric store near Lajpat Nagar metro".

### JSON-LD: Product (fabric pages)
Each fabric page now tells Google it's a product — eligible for rich results in shopping searches.

### JSON-LD: BreadcrumbList
Shows `Thread Tara > Fabrics > Brocade` in Google results — improves CTR.

### `generateStaticParams`
Pre-renders all fabric pages at build time — Google can crawl them instantly.

### Descriptive alt text
All images now use `fabric.imageAlt` which contains location + fabric type keywords, boosting Google Image Search ranking.

### `robots.ts`
Explicitly tells Google to crawl everything except `/api/` routes.

---

## After Deploying

1. Submit `https://yourdomain.in/sitemap.xml` in Google Search Console
2. Use [Rich Results Test](https://search.google.com/test/rich-results) to verify JSON-LD
3. Use [Google's Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
4. Test OG previews: [opengraph.xyz](https://www.opengraph.xyz)
