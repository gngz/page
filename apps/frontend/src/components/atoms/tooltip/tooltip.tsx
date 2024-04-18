'use client';

import { Tooltip as RTooltip } from '@radix-ui/themes';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

type Props = ComponentPropsWithoutRef<typeof RTooltip>;
type Ref = ComponentRef<typeof RTooltip>;

const Tooltip = forwardRef<Ref, Props>(function (props, ref) {
  return <RTooltip ref={ref} {...props} />;
});

Tooltip.displayName = 'Tooltip';

export default Tooltip;
