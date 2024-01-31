import SyntaxHighlight from '@/components/syntax-highlight';
import { Heading } from '@/components/ui/heading';
import { renderMarkdown } from '@/lib/markdown';
import { getPost } from '@/services/cms-api/apis/blog';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export default async function BlogPost({ params: { slug } }: Readonly<Props>) {
  const post = await getPost(slug);

  if (!post) return notFound();

  return (
    <main className='container mx-auto py-6'>
      <Heading className='text-4xl'>{post.title}</Heading>
      <div>
        <p className='text-gray-500'>
          {post.date_created.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </p>
      </div>
      <SyntaxHighlight>
        <div
          className='mt-6 text-lg'
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />
      </SyntaxHighlight>

      <Heading as='h3' className='text-2xl mt-6'>
        Related Posts
      </Heading>
    </main>
  );
}
