import { PropsWithChildren } from 'react';

export type SectionLayoutProps = PropsWithChildren<{
  id: string;
  title: string;
  subtitle?: string;
}>;
