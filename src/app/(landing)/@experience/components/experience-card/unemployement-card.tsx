import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function UnemployementCard() {
  return (
    <div className='px-3 py-3 bg-zinc-200 first:ring first:ring-offset-4 first:rounded-md first:mb-2 first:ring-stone-700'>
      <div className='grid grid-cols-[auto_1fr_auto] gap-4 items-start'>
        <div className='w-10 h-10 rounded-sm text-lg flex items-center justify-center select-none bg-gradient-to-tr  from-sky-500 to-sky-950'>
          <Image
            src={'/rocket.gif'}
            alt='rocket'
            width={0}
            height={0}
            sizes='100vw'
            className='w-full h-full p-[4px]'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <span className=' text-gray-500 text-sm'>Software Engineer</span>
          <a
            href='/#contact'
            className='font-medium  text-gray-800 hover:underline underline-offset-2'
          >
            Your Company Here
          </a>
        </div>
        <div className='flex h-full items-center'>
          <Link href={'/#contact'}>
            <Button size={'sm'} className='relative'>
              Hire me!
              <div className='absolute flex h-3 w-3 top-0 right-0 -translate-y-1/3 translate-x-1/3'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-3 w-3 bg-sky-500'></span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
