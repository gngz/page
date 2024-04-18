import { TextField } from '@radix-ui/themes';
import { ComponentPropsWithoutRef } from 'react';

export type InputProps = ComponentPropsWithoutRef<typeof TextField.Root> & {
  leftSlot?: JSX.Element;
  rightSlot?: JSX.Element;
};
