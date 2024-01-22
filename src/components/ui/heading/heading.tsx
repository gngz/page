import { createElement } from 'react';
import { HeadingProps } from './types';

function Heading({ as = 'h1', children, ...rest }: Readonly<HeadingProps>) {
  return createElement(as, rest, children);
}

Heading.displayName = 'Heading';

export { Heading };
