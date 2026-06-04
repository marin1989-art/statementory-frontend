import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/warenkorb', '/success', '/cancel', '/api/'],
    },
    sitemap: 'https://statementory.shop/sitemap.xml',
  };
}
