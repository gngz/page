import { ComponentProps } from 'react';
import { Input } from '../input';


export type TelInputProps = Omit<
    ComponentProps<typeof Input>,
    'type' | 'onBlur' | 'onChange' | 'value'
> & {
    onBlur?: () => void;
    onChange?: (value: string | undefined) => void;
    value?: string;
    defaultCountry?: string;
};

export type TelInputRef = {
    focus: () => void;
};
