import { HTMLAttributes, PropsWithChildren, createElement } from 'react';

type Props = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & PropsWithChildren &
  HTMLAttributes<HTMLHeadingElement>;
export function Heading({ as, children, ...rest }: Readonly<Props>) {
  return createElement(as, rest, children);
}
