import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PostModel } from '@/services/cms-api/apis/blog/models/post';
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
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card key={post.slug}>
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
