import { createElement } from 'react';
import { TextProps } from './types';

function Text({ as = 'span', children, ...rest }: TextProps) {
  return createElement(as, rest, children);
}

Text.displayName = 'Text';

export { Text };
