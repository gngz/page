'use client';

import { TextArea as RTextArea } from '@radix-ui/themes';
import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from 'react';

type Props = ComponentPropsWithoutRef<typeof RTextArea>;
type Ref = ComponentRef<typeof RTextArea>;

const TextArea = forwardRef<Ref, Props>(function (
  { size = '3', variant = 'surface', ...rest }: Props,
  ref,
) {
  return <RTextArea ref={ref} variant={variant} size={size} {...rest} />;
});

TextArea.displayName = 'TextArea';

export default TextArea;
