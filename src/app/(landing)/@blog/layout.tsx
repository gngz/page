import { PropsWithChildren } from 'react';
import { SectionLayout } from '../components/section-layout';

export function BlogSectionLayout({ children }: Readonly<PropsWithChildren>) {
  return <SectionLayout title='Blog'>{children}</SectionLayout>;
}
