import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { imageFallback } from '@/lib/post-image-fallback';
import { PostModel } from '@/services/cms-api/apis/blog/models/post';
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

export default function BlogPost({ post }: Readonly<Props>) {
  const fallbackImageSrc = imageFallback(post.title, post.user_created.name);
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card key={post.slug}>
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
        <CardFooter className='text-gray-500'>
          {formatDate(post.date_created)}
        </CardFooter>
      </Card>
    </Link>
  );
}