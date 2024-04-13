import { Input } from '@/components/atoms';
import { ComponentProps } from 'react';

export type TelInputValueType = {
  internationalNumber?: string;
  number: string;
};

export type TelInputProps = Omit<
  ComponentProps<typeof Input>,
  | 'type'
  | 'onBlur'
  | 'onChange'
  | 'value'
  | 'defaultValue'
  | 'leftSlot'
  | 'rightSlot'
> & {
  onBlur?: () => void;
  onChange?: (value: TelInputValueType) => void;
  value?: TelInputValueType;
  defaultCountry?: string;
};

export type TelInputRef = {
  focus: () => void;
};
