'use client';
import { Input, Select } from '@/components/atoms';
import { cn } from '@/lib/utils/cn';
import { CountryCode } from 'libphonenumber-js';
import Image from 'next/image';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import CountryCodes from './country-codes.json';
import { TelInputProps, TelInputRef } from './types';
import {
  formatNumber,
  toInternationalNumber,
  useTelephonePlaceholder,
} from './utils';

const TelInput = forwardRef<TelInputRef, TelInputProps>(
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

    useEffect(() => {
      setInputValue(value?.number ?? '');
    }, [value]);

    const selectOptions = useMemo(
      () =>
        CountryCodes.map((country) => {
          return {
            value: country.code,
            label: country.name,
            icon: (
              <Image
                src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.code}.svg`}
                alt={`Flag of ${country.name}`}
                title={country.name}
                className='h-4 w-4'
                width={0}
                height={0}
              />
            ),
          };
        }),
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
      <Input
        ref={inputRef}
        type='tel'
        {...props}
        onBlur={handleOnBlur}
        onChange={handleOnChange}
        value={inputValue}
        className={cn('flex-grow ', className)}
        placeholder={props.placeholder ?? placeholder}
        leftSlot={
          <Select
            size='2'
            variant='ghost'
            items={selectOptions}
            disabled={props.disabled}
            onChange={handleSelectChange}
            initialValue={country}
          />
        }
      />
    );
  },
);

TelInput.displayName = 'TelInput';

export { TelInput };
