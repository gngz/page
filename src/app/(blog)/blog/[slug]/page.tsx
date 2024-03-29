import { SyntaxHighlight } from '@/components/syntax-highlight';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heading } from '@/components/ui/heading';
import { getCmsAssetUrl } from '@/lib/cms-asset';
import { renderMarkdown } from '@/lib/markdown';
import { imageFallback } from '@/lib/post-image-fallback';
import { nameLetters } from '@/lib/utils';
import { getSeoData } from '@/services/cms-api';
import { getPost } from '@/services/cms-api/apis/blog';
import '@/styles/blog.scss';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Readonly<Props>) {
  const seo = await getSeoData();
  const post = await getPost(slug);

  if (!post) return;

  const fallbackImage = imageFallback(post.title, post.user_created.name);

  return {
    metadataBase: new URL(process.env.WEB_URL ?? 'https://diogopassos.pt'),
    title: seo.title + ' - ' + post.title,
    description: post.preview,
    keywords: seo.keywords,
    creator: post.user_created.name,
    openGraph: {
      type: 'article',
      url: new URL(`/blog/${slug}`, process.env.WEB_URL).toString(),
      title: seo.title + ' - ' + post.title,
      description: post ? post.preview : seo.description,
      authors: post.user_created.name,
      tags: seo.keywords,
      images: [fallbackImage],
      locale: 'en-US',
    },
    twitter: {
      card: 'summary',
      title: seo.title + ' - ' + post.title,
      authors: post.user_created.name,
      description: post.preview,
      tags: seo.keywords,
      images: [fallbackImage],
    },
  } as Metadata;
}

export default async function BlogPost({ params: { slug } }: Readonly<Props>) {
  const post = await getPost(slug);

  if (!post) return notFound();

  return (
    <main className='container mx-auto py-6'>
      <Heading className='text-4xl'>{post.title}</Heading>
      <div className='mt-2 flex items-center justify-start gap-2'>
        <div className='flex items-center gap-2'>
          <Avatar className='h-8 w-8'>
            <AvatarImage
              alt={post.user_created.name}
              src={getCmsAssetUrl(post.user_created.avatar ?? '')}
              asChild
            >
              <Image
                alt={post.user_created.name}
                src={getCmsAssetUrl(post.user_created.avatar ?? '')}
                blurDataURL={
                  getCmsAssetUrl(post.user_created.avatar ?? '') +
                  `?transforms=[["blur","100"]]&quality=1`
                }
                placeholder='blur'
                width={32}
                height={32}
                quality={70}
              />
            </AvatarImage>
            <AvatarFallback className='font-sans text-sm' delayMs={600}>
              {nameLetters(post.user_created.name)}
            </AvatarFallback>
          </Avatar>
          <span className='mt-2 text-gray-800'>{post.user_created.name}</span>
        </div>
        <span className='mt-2 text-gray-500'>|</span>
        <span className='mt-2 text-gray-500'>
          {post.date_created.toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          })}
        </span>
      </div>
      <SyntaxHighlight>
        <div
          className='blog-content mt-8 text-lg'
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />
      </SyntaxHighlight>

      <Heading as='h3' className='mt-6 text-2xl'>
        Related Posts
      </Heading>
    </main>
  );
}
