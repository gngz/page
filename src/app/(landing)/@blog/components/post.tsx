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

export default function BlogPost({ post }: Readonly<Props>) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card key={post.slug}>
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
        </CardHeader>
        <CardContent>{post.preview}</CardContent>
        <CardFooter className='text-gray-500'>
          {new Date(post.date_created).toLocaleDateString()}
        </CardFooter>
      </Card>
    </Link>
  );
}
