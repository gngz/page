import { SelectItem } from '@radix-ui/react-select';
import Image from 'next/image';
import { useMemo } from 'react';
import CountryCodes from './country-codes.json';

export function useCountryList() {
  return useMemo(
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
}
