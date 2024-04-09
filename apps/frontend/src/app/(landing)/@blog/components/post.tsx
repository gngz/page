import { Button } from '../../../../components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../../../components/ui/card';
import { imageFallback } from '../../../../lib/post-image-fallback';
import { PostModel } from '../../../../services/cms-api/apis/blog/models/post';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  post: PostModel;
};

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('pt-PT', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(date);
};

export function BlogPost({ post }: Readonly<Props>) {
  const fallbackImageSrc = imageFallback(post.title, post.user_created.name);
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card key={post.slug} className='group overflow-hidden'>
        <Image
          src={fallbackImageSrc}
          alt={post.title}
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '100%', height: 'auto' }}
        />
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent>{post.preview}</CardContent>
        <CardFooter className='flex items-center justify-between text-gray-500'>
          {formatDate(post.date_created)}
          <Button
            variant={'outline'}
            className='pointer-events-none opacity-0 group-hover:opacity-100'
          >
            Read More
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
