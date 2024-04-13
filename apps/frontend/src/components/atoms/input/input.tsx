'use client';

import { TextField } from '@radix-ui/themes';
import { ComponentRef, forwardRef } from 'react';
import { InputProps } from './types';

type Ref = ComponentRef<typeof TextField.Root>;

const Input = forwardRef<Ref, InputProps>(function (
  { size = '3', variant = 'surface', leftSlot, rightSlot, ...rest }: InputProps,
  ref,
) {
  return (
    <TextField.Root ref={ref} variant={variant} size={size} {...rest}>
      {leftSlot && <TextField.Slot side='left'>{leftSlot}</TextField.Slot>}
      {rightSlot && <TextField.Slot side='right'>{rightSlot}</TextField.Slot>}
    </TextField.Root>
  );
});

Input.displayName = 'Input';

export default Input;
