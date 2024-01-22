import { createElement } from 'react';
import { TextProps } from './types';

export default function Text({ as, children, ...rest }: TextProps) {
  return createElement(as, rest, children);
}
