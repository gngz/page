import { Heading } from '@/components/ui/heading';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { CiCircleChevDown } from 'react-icons/ci';

export function Hero() {
  const Terminal = dynamic(() =>
    import('./terminal').then((mod) => mod.HeroTerminal),
  );

  return (
    <section className='mb-16 flex min-h-[60vh] flex-col bg-slate-100'>
      <main className='container mb-12 mt-auto grid grid-cols-1 items-center  gap-x-8 gap-y-16 py-4 lg:grid-cols-[1fr_auto]'>
        <div className='px-8'>
          <Heading className='text-center text-4xl font-bold' as='h2'>
            Welcome to my personal site!
          </Heading>
          <Heading className='mt-2 text-center text-2xl font-light' as='h1'>
            Here you cand find my digital resumee and <br /> my latest thoughts
            on tech.
          </Heading>
          <div className='mt-16 flex justify-center'>
            <Image
              src={'/dev.svg'}
              alt='Developer'
              width={300}
              height={184}
              className='pointer-events-none select-none'
              priority
            ></Image>
          </div>
        </div>
        <div className=''>
          <Terminal />
        </div>
      </main>
      <div className='mt-auto flex justify-center text-3xl text-slate-600'>
        <Link
          href={'/#experience'}
          className='my-6 animate-bounce'
          aria-label='See More'
        >
          <CiCircleChevDown />
        </Link>
      </div>
    </section>
  );
}
