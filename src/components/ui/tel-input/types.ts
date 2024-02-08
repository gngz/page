import { ComponentProps } from 'react';
import { Input } from '../input';

export type TelInputValueType = {
    internationalNumber?: string
    number: string
}

export type TelInputProps = Omit<
    ComponentProps<typeof Input>,
    'type' | 'onBlur' | 'onChange' | 'value'
> & {
    onBlur?: () => void;
    onChange?: (value: TelInputValueType) => void;
    value?: TelInputValueType;
    defaultCountry?: string;
};

export type TelInputRef = {
    focus: () => void;
};

