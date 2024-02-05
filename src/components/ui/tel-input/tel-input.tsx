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
import { useState } from 'react';
import { Input } from '../input';
import CountryCodes from './country-codes.json';
import { getNumberPlaceholder } from './utils';
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  defaultCountry?: string;
}

const TelInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ defaultCountry, className, ...props }, ref) => {
    const [country, setCountry] = useState(defaultCountry ?? 'PT');
    const numberExample = React.useMemo(
      () => getNumberPlaceholder(country),
      [country],
    );

    return (
      <div className='flex focus-within:ring-ring focus-within:ring-2 focus-within:ring-offset-2 rounded-md'>
        <Select
          defaultValue={country}
          disabled={props.disabled}
          onValueChange={setCountry}
        >
          <SelectTrigger
            className='rounded-r-none focus:!ring-transparent flex-shrink max-w-[128px]'
            tabIndex={-1}
          >
            <SelectValue className='w-full' />
          </SelectTrigger>
          <SelectContent>
            {CountryCodes.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                <div className='flex items-center gap-3 justify-start '>
                  <img
                    src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.code}.svg`}
                    alt={country.name}
                    title={country.name}
                    className='w-4 h-4'
                  />
                  <span className='mr-2 truncate'>{country.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Input
          ref={ref}
          type='tel'
          {...props}
          className={cn(
            'rounded-l-none border-l-0 focus-visible:!ring-offset-0 focus-visible:!ring-transparent flex-grow',
            className,
          )}
          placeholder={props.placeholder ?? numberExample}
        />
      </div>
    );
  },
);

TelInput.displayName = 'TelInput';

export { TelInput };
