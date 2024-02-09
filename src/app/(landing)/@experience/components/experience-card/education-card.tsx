import { cn } from '@/lib/utils';
import Image from 'next/image';
import { IoLocationOutline } from 'react-icons/io5';
import { EducationCardOptions } from './types';
type Props = {
  options: Omit<EducationCardOptions, 'type'>;
};

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-Us', {
    month: 'short',
    year: '2-digit',
  }).format(date);
};

export default function EmployementCard({ options }: Readonly<Props>) {
  return (
    <div className='px-3 py-3 bg-slate-100'>
      <div className='grid grid-cols-[auto_1fr_auto] gap-4 items-start'>
        <div className='w-10 h-10 rounded-sm overflow-clip '>
          <a
            href={options.instituitionUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              src={options.instituitionLogo}
              alt={options.institutionName}
              title={options.institutionName}
              width={40}
              height={40}
              quality={100}
            />
          </a>
        </div>
        <div className='flex flex-col gap-1'>
          <span className='text-slate-600 text-sm'>{options.courseName}</span>
          <span className='font-medium  text-gray-800'>
            <a
              href={options.instituitionUrl}
              target='_blank'
              rel='noopener noreferrer'
              className={cn({
                'hover:underline hover:underline-offset-2':
                  options.instituitionUrl,
              })}
            >
              {options.institutionName}
            </a>
          </span>
        </div>
        <div className='flex flex-col gap-1 text-sm items-end self-center'>
          <span className='text-gray-800'>
            {options.endDate ? (
              <>
                {formatDate(options.startDate)} - {formatDate(options.endDate)}
              </>
            ) : (
              'Not finished'
            )}
          </span>

          <div className='text-slate-600 flex items-center gap-1'>
            <IoLocationOutline />
            <span className='leading-none h-[10px]'>{options.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
