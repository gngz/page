import { Button } from '@/components/ui/button';
import { getPosts } from '@/services/cms-api/apis/blog';
import BlogPost from './components/post';
import { BlogSectionLayout } from './layout';

export default async function Blog() {
  const posts = await getPosts();

  return (
    <BlogSectionLayout>
      <div className={`grid grid-cols-4 gap-4 mt-6 justify-center`}>
        {posts.map((post) => (
          <BlogPost key={post.slug} post={post} />
        ))}
      </div>
      {posts.length > 4 && (
        <div className='flex justify-center mt-6'>
          <Button className='mx-auto'>More Posts</Button>
        </div>
      )}
    </BlogSectionLayout>
  );
}
