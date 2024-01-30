import { PropsWithChildren } from 'react';
import { SectionLayout } from '../components/section-layout';

export function BlogSectionLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <SectionLayout title='Blog' subtitle='My latest thoughts on tech.'>
      {children}
    </SectionLayout>
  );
}
