import { Link } from '@/components/atoms';
import Image from 'next/image';
import NextLink from 'next/link';

export function Navbar() {
  return (
    <nav className='sticky top-0 z-50 bg-slate-100 py-4'>
      <div className='container flex items-center justify-between'>
        <div>
          <Link href={'/#top'}>
            <Image
              src={'/logo.svg'}
              alt={'Diogo Passos'}
              width={'224'}
              height={'30'}
            />
          </Link>
        </div>
        <div className='lg:hidden'>{/* Add Mobile Logic Here */}</div>
        <div className='hidden gap-6 lg:flex'>
          <Link asChild size='5'>
            <NextLink href='/#top'>home</NextLink>
          </Link>
          <Link asChild size='5'>
            <NextLink href='/#experience'>about Me</NextLink>
          </Link>
          <Link asChild size='5'>
            <NextLink href='/#skills'>skills and tech</NextLink>
          </Link>
          <Link asChild size='5'>
            <NextLink href='/#contact'>contact-me</NextLink>
          </Link>
        </div>
      </div>
    </nav>
  );
}
