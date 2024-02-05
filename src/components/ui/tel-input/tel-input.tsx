'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import Image from 'next/image';
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
    const numberExample = getNumberPlaceholder(country);

    return (
      <div className='flex focus-within:ring-ring focus-within:ring-2 focus-within:ring-offset-2 rounded-md'>
        <Select
          defaultValue={country}
          disabled={props.disabled}
          onValueChange={setCountry}
        >
          <SelectTrigger
            className='w-auto rounded-r-none border-r-0 focus:!ring-transparent'
            tabIndex={-1}
          >
            <SelectValue className='truncate text-ellipsis border-r-0 box-border' />
          </SelectTrigger>
          <SelectContent>
            {CountryCodes.map((country) => (
              <SelectItem
                key={country.code}
                value={country.code}
                className='px-2'
              >
                <div className='flex flex-shrink-0 items-center gap-3'>
                  <Image
                    src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.code}.svg`}
                    alt={country.name}
                    title={country.name}
                    className='w-4 h-4'
                    height={0}
                    width={0}
                  />
                  <div className='mr-2 shrink-0'>{country.name}</div>
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
            'rounded-l-none border-l-0 focus-visible:!ring-offset-0 focus-visible:!ring-transparent',
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
