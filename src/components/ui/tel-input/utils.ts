import { CountryCode, getExampleNumber } from 'libphonenumber-js';
import examples from 'libphonenumber-js/mobile/examples';
export function getNumberPlaceholder(countryCode: string) {
  const example = getExampleNumber(
    countryCode as CountryCode,
    examples,
  )?.formatNational();

  return example ? `e.g. ${example}` : '';
}
