import {
  CountryCode,
  getExampleNumber,
  parsePhoneNumber,
} from 'libphonenumber-js';
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
    return parsePhoneNumber(value, country).formatInternational().trim();
  } catch {
    return value ?? '';
  }
};

export const formatNumber = (value: string, country: CountryCode) => {
  try {
    const phoneNumber = parsePhoneNumber(value, country);
    if (phoneNumber.isValid()) {
      return phoneNumber.formatNational().trim();
    }
    return value;
  } catch {
    return value;
  }
};
