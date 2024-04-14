import { Select as RadixSelect } from '@radix-ui/themes';
import { ComponentProps, ReactNode } from 'react';

type SelectVariantType = ComponentProps<typeof RadixSelect.Trigger>['variant'];
type SelectSizeType = ComponentProps<typeof RadixSelect.Root>['size'];
export type SelectItem = {
  label?: ReactNode;
  value: string;
  icon?: JSX.Element;
};

export type SelectProps = {
  initialValue?: string;
  placeholder?: string;
  size?: SelectSizeType;
  variant?: SelectVariantType;
  items: SelectItem[];
  disabled?: boolean;
  onChange?: (value: string) => void;
};
