import { Link } from '@/components/atoms';
import LanguageSelector from '@/components/lang-selector';
import Image from 'next/image';
import NextLink from 'next/link';
import Drawer from './drawer';

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
        <div className='lg:hidden'>
          <Drawer />
        </div>
        <div className='hidden items-center gap-6 lg:flex'>
          <Link asChild size='5'>
            <NextLink href='/#top'>home</NextLink>
          </Link>
          <Link asChild size='5'>
            <NextLink href='/#experience'>about me</NextLink>
          </Link>
          <Link asChild size='5'>
            <NextLink href='/#skills'>skills and tech</NextLink>
          </Link>
          <Link asChild size='5'>
            <NextLink href='/#contact'>contact-me</NextLink>
          </Link>
          <LanguageSelector
            languages={[
              { name: 'Portuguese', langCode: 'pt', flagCode: 'pt' },
              { name: 'English', langCode: 'en', flagCode: 'us' },
            ]}
            defaultLanguage={'pt'}
          />
        </div>
      </div>
    </nav>
  );
}
