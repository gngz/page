import { Button as RButton } from '@radix-ui/themes';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof RButton>;

export default function Button(props: Props) {
  return <RButton {...props} />;
}
