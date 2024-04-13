'use client';

import { Button as RButton } from '@radix-ui/themes';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

type Props = ComponentPropsWithoutRef<typeof RButton>;
type Ref = ComponentRef<typeof RButton>;

const Button = forwardRef<Ref, Props>(function (props, ref) {
  return <RButton ref={ref} {...props} />;
});

Button.displayName = 'Button';

export default Button;
