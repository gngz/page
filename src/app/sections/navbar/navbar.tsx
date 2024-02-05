import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { NavbarDrawer } from './drawer';

export function Navbar() {
  return (
    <nav className='bg-slate-100 py-4 sticky top-0 z-50'>
      <div className='container flex items-center justify-between'>
        <div>
          <Link href={'/'}>
            <Image
              src={'/logo.svg'}
              alt={'Diogo Passos'}
              width={'224'}
              height={'30'}
            />
          </Link>
        </div>
        <div className='lg:hidden'>
          <NavbarDrawer />
        </div>
        <div className='hidden lg:flex gap-2'>
          <Button className='text-lg' variant={'link'} asChild>
            <Link href={'/#top'}>Home</Link>
          </Button>
          <Button className='text-lg' variant={'link'} asChild>
            <Link href={'/#about'}>About Me</Link>
          </Button>
          <Button className='text-lg' variant={'link'} asChild>
            <Link href={'/#tech'}>Technologies</Link>
          </Button>
          <Button className='text-lg' variant={'link'} asChild>
            <Link href={'/#blog'}>Blog</Link>
          </Button>
          <Button className='text-lg' variant={'link'} asChild>
            <Link href={'/#contact'}>Contact</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
