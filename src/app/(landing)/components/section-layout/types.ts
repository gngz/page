import { PropsWithChildren } from 'react';

export type SectionLayoutProps = PropsWithChildren<{
  title: string;
  subtitle?: string;
}>;
