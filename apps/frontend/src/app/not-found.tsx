import { Heading } from '../components/ui/heading';
import { Text } from '../components/ui/text';
import Image from 'next/image';
import Link from 'next/link';
export default function NotFound() {
  return (
    <main className=' bg-slate-50'>
      <div className='container min-h-[calc(100svh-327px)] py-8 text-center'>
        <Image
          src={'/404.svg'}
          alt='404'
          width={300}
          height={300}
          className='pointer-events-none mx-auto select-none py-6'
        />

        <Heading className='text-4xl font-bold'>
          <Text as='span' className='text-5xl text-red-400'>
            Whoops!
          </Text>{' '}
          Page not found!
        </Heading>
        <Heading className='mx-auto mt-4 max-w-screen-sm text-2xl font-light'>
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
