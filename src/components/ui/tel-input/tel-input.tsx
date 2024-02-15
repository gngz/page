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
import { TelInputProps, TelInputRef } from './types';
import {
  formatNumber,
  toInternationalNumber,
  useTelephonePlaceholder,
} from './utils';

const TelInput = React.forwardRef<TelInputRef, TelInputProps>(
  ({ defaultCountry, className, value, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [country, setCountry] = useState<CountryCode>(
      (defaultCountry as CountryCode) ?? 'PT',
    );
    const [inputValue, setInputValue] = useState<string>(value?.number ?? '');
    const placeholder = useTelephonePlaceholder(country);

    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current?.focus(),
    }));

    React.useEffect(() => {
      setInputValue(value?.number ?? '');
    }, [value]);

    const countryList = React.useMemo(
      () =>
        CountryCodes.map((country) => (
          <SelectItem key={country.code} value={country.code}>
            <div className='flex items-center justify-start gap-3 '>
              <Image
                src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.code}.svg`}
                alt={`Flag of ${country.name}`}
                title={country.name}
                className='h-4 w-4'
                width={0}
                height={0}
              />
              <span className='mr-2 truncate'>{country.name}</span>
            </div>
          </SelectItem>
        )),
      [],
    );

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = toInternationalNumber(
        event.target.value,
        country as CountryCode,
      );

      setInputValue(event.target.value);

      props.onChange?.({
        internationalNumber: value,
        number: event.target.value,
      });
    };

    const handleSelectChange = (value: string) => {
      const newCountry = value as CountryCode;
      setCountry(newCountry);

      if (inputValue) {
        const newValue = toInternationalNumber(inputValue, newCountry);
        props.onChange?.({ internationalNumber: newValue, number: inputValue });
        props.onBlur?.();
      }

      setTimeout(() => {
        if (inputRef.current) {
          const length = inputRef.current.value.length;
          inputRef.current.setSelectionRange(length, length);
          inputRef.current.focus();
        }
      }, 0);
    };

    const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      const newInputValue = formatNumber(event.target.value, country);
      setInputValue(newInputValue);
      props.onBlur?.();
    };

    return (
      <div className='flex rounded-md focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2'>
        <Select
          defaultValue={country}
          disabled={props.disabled}
          onValueChange={handleSelectChange}
        >
          <SelectTrigger
            className='max-w-[128px] flex-shrink select-none rounded-r-none focus:!ring-transparent'
            tabIndex={-1}
            aria-label='Select country'
          >
            <SelectValue className='w-full' />
          </SelectTrigger>
          <SelectContent>{countryList}</SelectContent>
        </Select>
        <Input
          ref={inputRef}
          type='tel'
          {...props}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          value={inputValue}
          className={cn(
            'flex-grow rounded-l-none border-l-0 focus-visible:!ring-transparent focus-visible:!ring-offset-0',
            className,
          )}
          placeholder={props.placeholder ?? placeholder}
        />
      </div>
    );
  },
);

TelInput.displayName = 'TelInput';

export { TelInput };
