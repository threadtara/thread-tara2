export interface Fabric {
  id: string;
  slug: string;          // SEO-friendly URL slug
  name: string;
  category: string;
  image: string;
  imageAlt: string;      // Descriptive alt text for Google Image Search
  description: string;
  longDescription: string; // Richer content for the fabric detail page
  metaTitle: string;     // <title> tag for the fabric page
  metaDescription: string; // <meta name="description"> for the fabric page
  keywords: string[];    // Supporting keywords for the page
}

export const fabrics: Fabric[] = [
  {
    id: '1',
    slug: 'brocade-fabric-delhi',
    name: 'Brocade Fabrics',
    category: 'Brocade',
    image: '/brocade/brocade.webp',
    imageAlt: 'Luxury brocade fabric with raised woven patterns for bridal and festive wear, Lajpat Nagar Delhi',
    description: 'A luxurious, heavy-weight fabric featuring intricate, raised patterns woven directly into the cloth for a three-dimensional, embossed effect.',
    longDescription:
      'Thread Tara\'s brocade collection brings together the finest heavy-weight fabrics with intricate raised patterns woven directly into the cloth. Perfect for bridal lehengas, sherwanis, and festive ethnic wear, our brocades are sourced from master weavers across India. Visit our Lajpat Nagar showroom in New Delhi to feel the texture and richness in person.',
    metaTitle: 'Brocade Fabric in Delhi | Bridal & Festive Brocade — Thread Tara, Lajpat Nagar',
    metaDescription: 'Buy premium brocade fabric in Delhi at Thread Tara, Lajpat Nagar. Intricate raised-pattern brocades for bridal lehengas, sherwanis & festive ethnic wear. Visit our showroom.',
    keywords: ['brocade fabric Delhi', 'bridal brocade fabric', 'festive brocade', 'brocade lehenga fabric', 'Lajpat Nagar fabric shop'],
  },
  {
    id: '2',
    slug: 'embroidery-fabric-delhi',
    name: 'Embroidery Fabrics',
    category: 'Embroidery',
    image: '/embroidery/embroidery.webp',
    imageAlt: 'Fine embroidery fabric with heavy needlework for bridal and festive ethnic wear, Delhi',
    description: 'Fine embroidery featuring heavy needlework for bridal and festive wear.',
    longDescription:
      'Our embroidery fabric range features fine, heavy needlework crafted by skilled artisans for bridal and festive occasions. From zardozi and zari work to thread embroidery and mirror embellishments, Thread Tara stocks a wide selection of embroidered fabrics suited for bridal lehengas, sarees, and designer suits. Explore the full collection at our Lajpat Nagar showroom, New Delhi.',
    metaTitle: 'Embroidery Fabric in Delhi | Bridal Embroidered Fabric — Thread Tara, Lajpat Nagar',
    metaDescription: 'Shop bridal embroidery fabric in Delhi at Thread Tara. Heavy needlework, zari & zardozi embroidered fabrics for lehengas, sarees & festive wear. Lajpat Nagar showroom.',
    keywords: ['embroidery fabric Delhi', 'bridal embroidery fabric', 'zardozi fabric', 'zari embroidery fabric', 'festive embroidered fabric Delhi'],
  },
  {
    id: '3',
    slug: 'plain-fabric-delhi',
    name: 'Plain Fabrics',
    category: 'Plain',
    image: '/plain/plain.webp',
    imageAlt: 'Premium plain silk and solid-colored fabric with soft fall and matte finish, Thread Tara Delhi',
    description: 'High-quality, solid-colored fabrics with a soft fall and matte finish.',
    longDescription:
      'Thread Tara\'s plain fabric collection offers high-quality, solid-coloured silks, georgettes, and crepes with a beautiful soft fall and matte finish. Ideal for custom ethnic wear, linings, and contemporary designer garments. Our plain fabrics are available in a wide range of colours, making them perfect for tailors, designers, and home sewers alike. Visit us at Lajpat Nagar, New Delhi.',
    metaTitle: 'Plain Fabric in Delhi | Silk & Solid Ethnic Fabric — Thread Tara, Lajpat Nagar',
    metaDescription: 'Buy premium plain fabric in Delhi at Thread Tara. Soft-fall silk, georgette & crepe in solid colours for ethnic wear & designer garments. Lajpat Nagar, New Delhi.',
    keywords: ['plain fabric Delhi', 'solid colour ethnic fabric', 'plain silk fabric Delhi', 'georgette fabric Delhi', 'fabric shop Lajpat Nagar'],
  },
  {
  id: '4',
  slug: 'organza-fabric-delhi',
  name: 'Organza Fabrics',
  category: 'Organza',
  image: '/organza/organza.JPG',
  imageAlt: 'Premium organza fabric with sheer texture and crisp finish, perfect for designer ethnic wear, Thread Tara Delhi',
  description: 'Elegant, sheer organza fabrics with a crisp texture and luxurious finish.',
  longDescription:
    'Thread Tara\'s organza fabric collection features premium-quality sheer fabrics known for their lightweight feel and crisp texture. Perfect for designer sarees, lehengas, dupattas, and contemporary fashion pieces, organza adds structure and elegance to any outfit. Available in a wide range of colours and subtle finishes, our organza fabrics are ideal for designers, boutiques, and fashion enthusiasts. Visit us at Lajpat Nagar, New Delhi.',
  metaTitle: 'Organza Fabric in Delhi | Sheer Designer Fabric — Thread Tara, Lajpat Nagar',
  metaDescription: 'Shop premium organza fabric in Delhi at Thread Tara. Lightweight, sheer & crisp fabric for sarees, lehengas & designer wear. Lajpat Nagar, New Delhi.',
  keywords: ['organza fabric Delhi', 'sheer fabric Delhi', 'organza for saree Delhi', 'designer fabric organza', 'fabric shop Lajpat Nagar'],
},
{
  id: '5',
  slug: 'embroidered-organza-fabric-delhi',
  name: 'Embroidered Organza Fabrics',
  category: 'embroideredOrganza',
  image: '/embroideredOrganza/embroidered-organza.JPG',
  imageAlt: 'Premium embroidered organza fabric with floral thread work and pearl embellishments, ideal for designer ethnic wear, Thread Tara Delhi',
  description: 'Luxurious embroidered organza fabrics featuring delicate thread work and elegant pearl embellishments.',
  longDescription:
    'Thread Tara\'s embroidered organza fabric collection showcases premium sheer fabrics enhanced with intricate floral thread embroidery and delicate pearl embellishments. Known for its lightweight feel and crisp texture, this fabric adds structure and richness to designer outfits. Perfect for sarees, lehengas, dupattas, and couture ethnic wear, embroidered organza offers a blend of elegance and craftsmanship. Available in sophisticated colours and detailed patterns, it is a preferred choice for designers, boutiques, and bridal wear creations. Visit us at Lajpat Nagar, New Delhi to explore our exclusive collection.',
  metaTitle: 'Embroidered Organza Fabric in Delhi | Pearl Work Designer Fabric — Thread Tara',
  metaDescription: 'Buy embroidered organza fabric in Delhi with floral thread work & pearl detailing at Thread Tara. Perfect for sarees, lehengas & bridal wear. Lajpat Nagar.',
  keywords: [
    'embroidered organza fabric Delhi',
    'pearl work organza fabric',
    'designer organza fabric Delhi',
    'bridal organza fabric',
    'organza embroidery fabric India',
    'fabric shop Lajpat Nagar'
  ],
}
];

// Helper: get fabric by slug (use in Next.js dynamic routes)
export function getFabricBySlug(slug: string): Fabric | undefined {
  return fabrics.find((f) => f.slug === slug);
}

// Helper: get fabric by id (backwards compatible)
export function getFabricById(id: string): Fabric | undefined {
  return fabrics.find((f) => f.id === id);
}



export interface FabricClip {
  id: string;
  video: string;
  videoAlt: string;       // descriptive alt text for video SEO
  slug: string;           // SEO-friendly URL of the fabric page
  title: string;          // Video title for context
  metaDescription: string; // Optional description for SEO
}

// Exportable array of SEO-friendly fabric clips
export const fabricClips: FabricClip[] = [
  {
    id: '1',
    video: '/fabric-clip/model1.MP4',
    videoAlt: 'Video showcasing luxurious brocade fabrics for bridal and festive wear in Delhi, Thread Tara',
    slug: '/brocade-fabric-delhi',
    title: 'Brocade Fabrics Video',
    metaDescription: 'Watch a premium video showcasing luxurious brocade fabrics for bridal and festive wear available at Thread Tara, Lajpat Nagar, Delhi.',
  },
  {
    id: '2',
    video: '/fabric-clip/model2.MP4',
    videoAlt: 'Video showcasing intricate embroidery fabrics for bridal and festive wear in Delhi, Thread Tara',
    slug: '/embroidery-fabric-delhi',
    title: 'Embroidery Fabrics Video',
    metaDescription: 'Watch our embroidery fabrics video highlighting intricate needlework for bridal and festive occasions at Thread Tara, Lajpat Nagar, Delhi.',
  },
  {
    id: '3',
    video: '/fabric-clip/model3.MP4',
    videoAlt: 'Video showing premium plain silk and solid-colored fabrics in Delhi, Thread Tara',
    slug: '/plain-fabric-delhi',
    title: 'Plain Fabrics Video',
    metaDescription: 'Explore a video of premium plain silk and solid-colored fabrics at Thread Tara, perfect for ethnic wear and designer garments in Delhi.',
  },
  {
    id: '4',
    video: '/fabric-clip/model4.MP4',
    videoAlt: 'Video highlighting premium organza fabrics with sheer texture and crisp finish in Delhi, Thread Tara',
    slug: '/organza-fabric-delhi',
    title: 'Organza Fabrics Video',
    metaDescription: 'Watch a premium video showcasing elegant organza fabrics with sheer texture and crisp finish, available at Thread Tara, Lajpat Nagar, Delhi.',
  },
];

