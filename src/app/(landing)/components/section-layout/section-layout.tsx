import { Heading } from '@/components/ui/heading';
import { SectionLayoutProps } from './types';

export function SectionLayout({
  id,
  title,
  subtitle,
  children,
}: Readonly<SectionLayoutProps>) {
  return (
    <section id={id}>
      <div className='container pb-24'>
        <Heading as='h1' className='text-center text-5xl font-medium'>
          {title}
        </Heading>
        {subtitle && (
          <Heading as='h2' className='text-center text-2xl'>
            {subtitle}
          </Heading>
        )}
        <div className='mt-6'>{children}</div>
      </div>
    </section>
  );
}
