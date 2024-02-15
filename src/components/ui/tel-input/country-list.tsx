import { SelectItem } from '@radix-ui/react-select';
import Image from 'next/image';
import { useMemo } from 'react';
import CountryCodes from './country-codes.json';

export function useCountryList() {
  return useMemo(
    () =>
      CountryCodes.map((country) => (
        <SelectItem key={country.code} value={country.code}>
          <div className='flex items-center justify-start gap-3 '>
            <Image
              src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.code}.svg`}
              alt={country.name}
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
}
