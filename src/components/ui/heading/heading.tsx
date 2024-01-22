import { createElement } from 'react';
import { HeadingProps } from './types';

export function Heading({ as, children, ...rest }: Readonly<HeadingProps>) {
  return createElement(as, rest, children);
}
