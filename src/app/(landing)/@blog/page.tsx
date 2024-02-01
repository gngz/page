import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { getPosts } from '@/services/cms-api/apis/blog';
import { BlogPost } from './components/post';
import { BlogSectionLayout } from './section-layout';

export default async function Blog() {
  const posts = await getPosts();

  return (
    <BlogSectionLayout>
      <Carousel
        className='mt-6'
        opts={{ align: 'center', loop: true, active: false }}
      >
        <CarouselContent>
          {posts.map((post) => (
            <CarouselItem key={post.slug} className='md:basis-2/4 lg:basis-1/4'>
              <BlogPost post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='lg:hidden' />
        <CarouselNext className='lg:hidden' />
      </Carousel>
    </BlogSectionLayout>
  );
}
