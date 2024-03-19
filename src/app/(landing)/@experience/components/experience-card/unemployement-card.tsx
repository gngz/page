import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { RocketAnimation } from '../rocket-animation/rocket-animation';

export default function UnemployementCard() {
  return (
    <div className='bg-slate-200 px-3 py-3'>
      <div className='grid grid-cols-[auto_1fr_auto] items-start gap-4'>
        <div className='flex h-10 w-10 select-none items-center justify-center rounded-sm bg-gradient-to-tr from-sky-500  to-sky-950 text-lg'>
          <RocketAnimation />
        </div>
        <div className='flex flex-col gap-1'>
          <span className=' text-sm text-slate-600'>Software Engineer</span>
          <a
            href='/#contact'
            className='font-medium  text-gray-800 underline-offset-2 hover:underline'
          >
            Your Company Here
          </a>
        </div>
        <div className='flex h-full items-center'>
          <Link href={'/#contact'}>
            <Button size={'sm'} className='relative'>
              Hire me!
              <div className='absolute right-0 top-0 flex h-3 w-3 -translate-y-1/3 translate-x-1/3'>
                <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75'></span>
                <span className='relative inline-flex h-3 w-3 rounded-full bg-sky-500'></span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
