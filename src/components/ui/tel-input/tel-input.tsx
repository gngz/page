import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { Input } from '../input';
import CountryCodes from './country-codes.json';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const TelInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className='flex'>
        <Select>
          <SelectTrigger className='w-[180px] rounded-r-none'>
            <SelectValue placeholder='Theme' />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(CountryCodes).map((key) => (
              <SelectItem key={key} value={key}>
                {key}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          ref={ref}
          type={type}
          {...props}
          className={cn('rounded-l-none border-l-0', className)}
        />
      </div>
    );
  },
);

TelInput.displayName = 'TelInput';

export { TelInput };
