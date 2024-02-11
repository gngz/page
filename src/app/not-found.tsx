import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import Image from 'next/image';
import Link from 'next/link';
export default function NotFound() {
  return (
    <main className=' bg-slate-50'>
      <div className='container text-center py-8 min-h-[calc(100svh-327px)]'>
        <Image
          src={'/404.svg'}
          alt='404'
          width={300}
          height={300}
          className='mx-auto py-6 select-none pointer-events-none'
        />

        <Heading className='text-4xl font-bold'>
          <Text as='span' className='text-red-400 text-5xl'>
            Whoops!
          </Text>{' '}
          Page not found!
        </Heading>
        <Heading className='text-2xl font-light mt-4 max-w-screen-sm mx-auto'>
          I can&apos;t find the page that are you looking for, please try again
          later or{' '}
          <Link href='/#contact' className='underline underline-offset-2'>
            contact me
          </Link>
          .
        </Heading>
      </div>
    </main>
  );
}
