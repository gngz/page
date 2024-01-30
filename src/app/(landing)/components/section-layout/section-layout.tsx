import { Heading } from '@/components/ui/heading';
import { SectionLayoutProps } from './types';

export function SectionLayout({
  title,
  subtitle,
  children,
}: Readonly<SectionLayoutProps>) {
  return (
    <section>
      <div className='container pb-8'>
        <Heading as='h1' className='text-center text-5xl font-medium'>
          {title}
        </Heading>
        {subtitle && (
          <Heading as='h2' className='text-center text-2xl'>
            {subtitle}
          </Heading>
        )}
        {children}
      </div>
    </section>
  );
}
