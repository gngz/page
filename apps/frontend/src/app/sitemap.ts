import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.WEB_URL ?? 'https://diogopassos.pt';

  return [
    {
      url: `${baseURL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },

    {
      url: `${baseURL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
