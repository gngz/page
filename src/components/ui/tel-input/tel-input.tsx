'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { CountryCode } from 'libphonenumber-js';
import Image from 'next/image';
import * as React from 'react';
import { useImperativeHandle, useRef, useState } from 'react';
import { Input } from '../input';
import CountryCodes from './country-codes.json';
import {
  formatNumber,
  getNumberPlaceholder,
  toInternationalNumber,
} from './utils';

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'type' | 'onBlur' | 'onChange' | 'value'
  > {
  onBlur?: () => void;
  onChange?: (value: string | undefined) => void;
  value?: string;
  defaultCountry?: string;
}

export type TelInputRef = {
  focus: () => void;
};

const TelInput = React.forwardRef<TelInputRef, InputProps>(
  ({ defaultCountry, className, value, ...props }, ref) => {
    const innerRef = useRef<HTMLInputElement>(null);
    const [country, setCountry] = useState<CountryCode>(
      (defaultCountry as CountryCode) ?? 'PT',
    );
    const [inputValue, setInputValue] = useState<string>('');

    useImperativeHandle(ref, () => ({
      focus: () => {},
    }));

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

    const numberExample = React.useMemo(
      () => getNumberPlaceholder(country),
      [country],
    );

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = toInternationalNumber(
        event.target.value,
        country as CountryCode,
      );

      setInputValue(event.target.value);

      props.onChange?.(value);
    };

    const handleOnValueChange = (value: string) => {
      const newCountry = value as CountryCode;
      setCountry(newCountry);

      if (inputValue) {
        const newValue = toInternationalNumber(inputValue, newCountry);
        props.onChange?.(newValue);
      }

      setTimeout(() => {
        if (innerRef.current) {
          const length = innerRef.current.value.length;
          innerRef.current.setSelectionRange(length, length);
          innerRef.current.focus();
        }
      }, 0);
    };

    const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      const newInputValue = formatNumber(event.target.value, country);
      setInputValue(newInputValue);
      props.onBlur?.();
    };

    return (
      <div className='flex focus-within:ring-ring focus-within:ring-2 focus-within:ring-offset-2 rounded-md'>
        <Select
          defaultValue={country}
          disabled={props.disabled}
          onValueChange={handleOnValueChange}
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
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          value={inputValue}
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
