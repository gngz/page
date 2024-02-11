import { Heading } from '@/components/ui/heading';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { CiCircleChevDown } from 'react-icons/ci';

export function Hero() {
  const Terminal = dynamic(
    () => import('./terminal').then((mod) => mod.HeroTerminal),
    {
      loading: () => <p>Loading...</p>,
    },
  );

  return (
    <section className='bg-slate-100 min-h-[60vh] mb-16 flex flex-col'>
      <main className='container grid grid-cols-1 lg:grid-cols-[1fr_auto] py-4 mb-12  items-center gap-x-8 gap-y-16 mt-auto'>
        <div className='px-8'>
          <Heading className='text-4xl font-bold text-center'>
            Welcome to my personal site!
          </Heading>
          <Heading className='text-2xl font-light text-center mt-2' as='h2'>
            Here you cand find my digital resumee and <br /> my latests thoughts
            on tech.
          </Heading>
          <div className='flex justify-center mt-16'>
            <Image
              src={'/dev.svg'}
              alt='Developer'
              width={300}
              height={184}
              className='pointer-events-none user-select-none'
              priority
            ></Image>
          </div>
        </div>
        <div className=''>
          <Terminal />
        </div>
      </main>
      <div className='text-slate-600 text-2xl flex justify-center mt-auto'>
        <span className='animate-bounce my-6'>
          <CiCircleChevDown />
        </span>
      </div>
    </section>
  );
}
