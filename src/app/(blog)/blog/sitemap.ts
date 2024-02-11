import { getPosts } from '@/services/cms-api/apis/blog';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.WEB_URL ?? 'https://diogopassos.pt';
  const posts = await getPosts();

  return posts.map((post) => ({
    url: `${baseURL}/blog/${post.slug}`,
    lastModified: post.date_created,
    priority: 0.2,
  }));
}
