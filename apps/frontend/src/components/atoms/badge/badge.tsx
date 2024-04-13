'use client';

import { Badge as RadixBadge } from '@radix-ui/themes';
import { ComponentPropsWithRef, ComponentRef, forwardRef } from 'react';

type Props = ComponentPropsWithRef<typeof RadixBadge>;
type Ref = ComponentRef<typeof RadixBadge>;

const Badge = forwardRef<Ref, Props>(function ({ ...rest }: Props, ref) {
  return <RadixBadge ref={ref} {...rest} />;
});

Badge.displayName = 'Label';

export default Badge;
