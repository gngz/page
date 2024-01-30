import { CMSApi } from '@/services/cms-api/api';
import { PostModel, PostSchema } from './models/post';

export function getPost() {}

export async function getPosts() {
  const query = `
        query {
            blog_posts {
                id
                slug
                date_created
                preview
                title
                content
            }
        }
    `;

  const collection = 'blog_posts';
  const result = await CMSApi.getInstance().query<{ blog_posts: PostModel[] }>(
    query,
    undefined,
    ['all', collection, `${collection}_translations`],
  );

  return PostSchema.array().parse(result.blog_posts);
}
