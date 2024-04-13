'use client';

import * as RLabel from '@radix-ui/react-label';
import { ComponentPropsWithRef, ComponentRef, forwardRef } from 'react';

type Props = ComponentPropsWithRef<typeof RLabel.Root>;
type Ref = ComponentRef<typeof RLabel.Root>;

const Label = forwardRef<Ref, Props>(function ({ ...rest }: Props, ref) {
  return <RLabel.Root ref={ref} {...rest} />;
});

Label.displayName = 'Label';

export default Label;
