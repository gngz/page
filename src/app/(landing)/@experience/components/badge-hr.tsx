import { Badge } from '@/components/ui/badge';
import { PropsWithChildren } from 'react';

export function BadgeHR({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className='relative my-6'>
      <hr className=' h-px bg-gray-200 border-0 dark:bg-gray-700 absolute right-0 left-0 top-1/2 -translate-y-1/2' />
      <Badge
        className='relative top-0 left-1/2 -translate-x-1/2 bg-white inline-flex items-center'
        variant={'outline'}
      >
        <span className='text-slate-800 leading-none h-[10px] font-normal'>
          {children}
        </span>
      </Badge>
    </div>
  );
}
