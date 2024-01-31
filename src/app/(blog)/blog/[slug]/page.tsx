import SyntaxHighlight from '@/components/syntax-highlight';
import { Heading } from '@/components/ui/heading';
import { renderMarkdown } from '@/lib/markdown';
import { getSeoData } from '@/services/cms-api';
import { getPost } from '@/services/cms-api/apis/blog';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Readonly<Props>) {
  const seo = await getSeoData();
  const post = await getPost(slug);

  return {
    metadataBase: new URL(process.env.WEB_URL ?? 'https://diogopassos.pt'),
    title: post ? seo.title + ' - ' + post.title : seo.title,
    description: seo.description,
    keywords: seo.keywords,
    creator: post?.user_created.name,
    openGraph: {
      title: post ? seo.title + ' - ' + post.title : seo.title,
      description: post ? post.preview : seo.description,
      tags: seo.keywords,
    },
    twitter: {
      card: 'summary',
      title: post ? seo.title + ' - ' + post.title : seo.title,
      description: post ? post.preview : seo.description,
      tags: seo.keywords,
    },
  } as Metadata;
}

export default async function BlogPost({ params: { slug } }: Readonly<Props>) {
  const post = await getPost(slug);

  if (!post) return notFound();

  return (
    <main className='container mx-auto py-6'>
      <Heading className='text-4xl'>{post.title}</Heading>
      <div className='flex justify-between'>
        <span className='text-gray-500'>
          {post.date_created.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </span>
        <span>{post.user_created.name}</span>
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
