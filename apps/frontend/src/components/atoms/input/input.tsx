'use client';

import { TextField } from '@radix-ui/themes';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

type Props = ComponentPropsWithoutRef<typeof TextField.Root>;
type Ref = ComponentRef<typeof TextField.Root>;

const Input = forwardRef<Ref, Props>(function Checkbox(
  { size = '3', ...rest }: Props,
  ref,
) {
  return <TextField.Root ref={ref} size={size} {...rest} />;
});

Input.displayName = 'Input';

export default Input;
