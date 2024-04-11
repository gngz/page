import { Checkbox as RCheckbox } from '@radix-ui/themes';
import { ComponentProps, ComponentRef, forwardRef } from 'react';

type Props = ComponentProps<typeof RCheckbox>;
type Ref = ComponentRef<typeof RCheckbox>;

const Checkbox = forwardRef<Ref, Props>(function Checkbox(
  { size = '2', ...rest }: Props,
  ref,
) {
  return <RCheckbox ref={ref} size={size} {...rest} />;
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
