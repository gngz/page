import { CMSApi } from '@/services/cms-api/api';
import { PostModel, PostSchema } from './models/post';

export async function getPost(slug: string) {
  const query = `
    query ($slug: String) {
      blog_posts(filter: { slug: { _eq: $slug } }) {
        id
        slug
        user_created {
          first_name
          last_name
          avatar { id }
        }
        date_created
        preview
        title
        content
      }
    }
  
  `
  const collection = 'blog_posts';
  const result = await CMSApi.getInstance().query<{ blog_posts: PostModel[] }>(
    query,
    { slug },
    ['all', collection],
  );

  return PostSchema.array().parse(result.blog_posts).at(0);
}

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
    ['all', collection],
  );

  return PostSchema.array().parse(result.blog_posts);
}
