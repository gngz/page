import { Button as RButton } from '@radix-ui/themes';
import { ComponentProps, ComponentRef, forwardRef } from 'react';

type Props = ComponentProps<typeof RButton>;
type Ref = ComponentRef<typeof RButton>;

const Button = forwardRef<Ref, Props>(function (props, ref) {
  return <RButton ref={ref} {...props} />;
});

Button.displayName = 'Button';

export default Button;
