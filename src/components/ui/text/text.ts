import { TextProps } from './types';
import { createElement } from 'react';

function Text({ as = 'span', children, ...rest }: TextProps) {
  return createElement(as, rest, children);
}

Text.displayName = 'Text';

export { Text };
