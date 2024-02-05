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
      <div className='flex focus-within:ring-ring focus-within:ring-2 focus-within:ring-offset-2 rounded-md'>
        <Select defaultValue={defaultCountry ?? 'PT'}>
          <SelectTrigger className='w-auto rounded-r-none border-r-0 focus:!ring-transparent'>
            <SelectValue className='truncate text-ellipsis border-r-0' />
          </SelectTrigger>
          <SelectContent>
            {CountryCodes.map((country) => (
              <SelectItem
                key={country.code}
                value={country.code}
                className='px-2'
              >
                <div className='flex items-center gap-2 truncate text-ellipsis'>
                  <picture className='w-4 h-4 flex justify-center items-center'>
                    <img
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
          className={cn(
            'rounded-l-none border-l-0 focus-visible:!ring-offset-0 focus-visible:!ring-transparent',
            className,
          )}
        />
      </div>
    );
  },
);

TelInput.displayName = 'TelInput';

export { TelInput };
