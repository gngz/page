import { TextProps } from '@/components/ui/text/types';
import { ComponentProps, ReactElement } from 'react';

type MaybeArray<T> = T | T[];

export type TerminalLineProps = {
  children: MaybeArray<React.ReactElement<TextProps> | string>;
};

export type TerminalCommandOutputProps = ComponentProps<'div'>;

export type TerminalProps = {
  title?: string;
  children: MaybeArray<ReactElement<TerminalLineProps>>;
};
