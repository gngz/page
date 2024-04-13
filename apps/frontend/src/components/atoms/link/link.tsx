'use client';

import { Link as RadixLink } from '@radix-ui/themes';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

type Props = ComponentPropsWithoutRef<typeof RadixLink>;
type Ref = ComponentRef<typeof RadixLink>;

const Link = forwardRef<Ref, Props>(function (props, ref) {
  return <RadixLink ref={ref} {...props} />;
});

Link.displayName = 'Link';

export default Link;
