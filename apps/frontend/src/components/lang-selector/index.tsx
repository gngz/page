'use client';

import Image from 'next/image';
import { Select } from '../atoms';

type Language = {
  flagCode: string;
  langCode: string;
  name: string;
};
type Props = {
  languages: Language[];
  defaultLanguage: string;
  onChange?: (langCode: string) => void;
};

const generateFlag = (countryCode: string) => {
  return (
    <Image
      src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode.toUpperCase()}.svg`}
      alt={`Flag`}
      className='h-4 w-4'
      width={0}
      height={0}
    />
  );
};
export default function LanguageSelector({
  languages,
  defaultLanguage,
  onChange,
}: Readonly<Props>) {
  const langs = languages.map((lang) => ({
    label: generateFlag(lang.flagCode),
    value: lang.langCode,
  }));
  return (
    <Select
      placeholder='Select Language'
      variant='surface'
      items={langs}
      initialValue={defaultLanguage}
      onChange={onChange}
    />
  );
}
