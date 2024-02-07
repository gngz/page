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
import { useImperativeHandle, useRef, useState } from 'react';
import { Input } from '../input';
import CountryCodes from './country-codes.json';
import { getNumberPlaceholder } from './utils';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  defaultCountry?: string;
}

const TelInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ defaultCountry, className, ...props }, ref) => {
    const innerRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => innerRef.current!, []);

    const countryList = React.useMemo(
      () =>
        CountryCodes.map((country) => (
          <SelectItem key={country.code} value={country.code}>
            <div className='flex items-center gap-3 justify-start '>
              <Image
                src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.code}.svg`}
                alt={country.name}
                title={country.name}
                className='w-4 h-4'
                width={0}
                height={0}
              />
              <span className='mr-2 truncate'>{country.name}</span>
            </div>
          </SelectItem>
        )),
      [],
    );

    const [country, setCountry] = useState(defaultCountry ?? 'PT');

    const numberExample = React.useMemo(
      () => getNumberPlaceholder(country),
      [country],
    );

    const onValueChangeHandler = (value: string) => {
      setCountry(value);

      setTimeout(() => {
        if (innerRef.current) {
          const length = innerRef.current.value.length;
          innerRef.current.setSelectionRange(length, length);
          innerRef.current.focus();
        }
      }, 100);
    };

    return (
      <div className='flex focus-within:ring-ring focus-within:ring-2 focus-within:ring-offset-2 rounded-md'>
        <Select
          defaultValue={country}
          disabled={props.disabled}
          onValueChange={onValueChangeHandler}
        >
          <SelectTrigger
            className='rounded-r-none focus:!ring-transparent flex-shrink max-w-[128px]'
            tabIndex={-1}
          >
            <SelectValue className='w-full' />
          </SelectTrigger>
          <SelectContent>{countryList}</SelectContent>
        </Select>
        <Input
          ref={innerRef}
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
