import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { IoLocationOutline } from 'react-icons/io5';
import { EmploymentCardOptions } from './types';
type Props = {
  options: EmploymentCardOptions;
};

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-Us', {
    month: 'short',
    year: '2-digit',
  }).format(date);
};

export default function EmployementCard({ options }: Readonly<Props>) {
  return (
    <div className='bg-slate-100 px-3 py-3'>
      <div className='grid grid-cols-[auto_1fr_auto] items-start gap-4'>
        <div className='h-10 w-10 overflow-clip rounded-sm '>
          <Link
            href={options.companyUrl ?? '#'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src={options.companyLogo}
              alt={options.companyName}
              title={options.companyName}
              width={40}
              height={40}
              quality={100}
              className='pointer-events-none'
            />
          </Link>
        </div>
        <div className='flex flex-col gap-1'>
          <span className=' text-sm text-slate-600'>{options.role}</span>
          <span className='font-medium  text-gray-800'>
            <a
              href={options.companyUrl}
              target='_blank'
              rel='noopener noreferrer'
              className={cn({
                'hover:underline hover:underline-offset-2': options.companyUrl,
              })}
            >
              {options.companyName}
            </a>
          </span>
        </div>
        <div className='flex flex-col items-end gap-1 self-center text-sm'>
          {options.endDate && (
            <span className='text-gray-800'>
              {formatDate(options.startDate)} - {formatDate(options.endDate)}
            </span>
          )}
          <div className='flex items-center gap-1 text-slate-600'>
            <IoLocationOutline />
            <span className='h-[10px] leading-none'>{options.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
