import { HeadingProps } from './types';
import { createElement } from 'react';

function Heading({ as = 'h1', children, ...rest }: Readonly<HeadingProps>) {
  return createElement(as, rest, children);
}

Heading.displayName = 'Heading';

export { Heading };
