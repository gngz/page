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
    <main className='container mx-auto'>
      <Heading>{post.title}</Heading>

      <div
        dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
      ></div>
    </main>
  );
}
