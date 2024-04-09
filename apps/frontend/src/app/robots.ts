import type { MetadataRoute } from 'next';

const baseURL = process.env.WEB_URL ?? 'https://diogopassos.pt';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,
  };
}
