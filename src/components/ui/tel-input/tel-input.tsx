'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { Input } from '../input';
import CountryCodes from './country-codes.json';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  defaultCountry?: string;
}

const TelInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ defaultCountry, className, type, ...props }, ref) => {
    return (
      <div className='flex'>
        <Select defaultValue={defaultCountry}>
          <SelectTrigger className='w-[180px] rounded-r-none'>
            <SelectValue className='truncate text-ellipsis' />
          </SelectTrigger>
          <SelectContent>
            {CountryCodes.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                <div className='flex items-center gap-2 truncate text-ellipsis'>
                  <picture>
                    <img
                      className='w-4 h-4'
                      alt={country.name}
                      src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.code}.svg`}
                    />
                  </picture>
                  {country.name}
                </div>
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
