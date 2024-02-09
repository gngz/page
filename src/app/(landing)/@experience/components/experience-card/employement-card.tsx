import { cn } from '@/lib/utils';
import Image from 'next/image';
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
    <div className='px-3 py-3 bg-zinc-200 '>
      <div className='grid grid-cols-[auto_1fr_auto] gap-4 items-start'>
        <div className='w-10 h-10 rounded-sm overflow-clip '>
          <a
            href={options.companyUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src={options.companyLogo}
              alt={options.companyName}
              title={options.companyName}
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-full'
              quality={100}
            />
          </a>
        </div>
        <div className='flex flex-col gap-1'>
          <span className=' text-gray-500 text-sm'>{options.role}</span>
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
        <div className='flex flex-col gap-1 text-sm items-end self-center'>
          {options.endDate && (
            <span className='text-gray-800'>
              {formatDate(options.startDate)} - {formatDate(options.endDate)}
            </span>
          )}
          <div className='text-gray-500 flex items-center gap-1'>
            <IoLocationOutline />
            <span className='leading-none h-[10px]'>{options.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
