import { AsYouType, CountryCode, getExampleNumber, parseIncompletePhoneNumber, parsePhoneNumber } from 'libphonenumber-js';
import examples from 'libphonenumber-js/mobile/examples';
export function getNumberPlaceholder(countryCode: string) {
  const example = getExampleNumber(
    countryCode as CountryCode,
    examples,
  )?.formatNational();

  return example ? `e.g. ${example}` : '';
}

export const toInternationalNumber = (value: string, country: CountryCode) => {
  try {
    return parsePhoneNumber(value, country).formatInternational();
  } catch {
    return value ?? '';
  }
};

export const fromInternationalNumber = (value: string) => {
  try {

    const parsedNumber = parsePhoneNumber(value)
    return new AsYouType(parsedNumber.country).input(parsedNumber.nationalNumber.replace(" ", ""));
  } catch {
    return value ?? '';
  }
};