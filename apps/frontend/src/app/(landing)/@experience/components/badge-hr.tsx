import { Badge } from '@/components/atoms';
import { PropsWithChildren } from 'react';

export function BadgeHR({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className='relative my-6 select-none'>
      <hr className=' absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 border-0 bg-gray-200 dark:bg-gray-700' />
      <Badge
        className='relative left-1/2 top-0 inline-flex -translate-x-1/2 items-center bg-white'
        variant={'outline'}
      >
        <span className='h-[10px] font-normal leading-none text-slate-800'>
          {children}
        </span>
      </Badge>
    </div>
  );
}
