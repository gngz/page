import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { NavbarDrawer } from './drawer';

export function Navbar() {
  return (
    <nav className='bg-slate-100 py-4'>
      <div className='container flex items-center justify-between'>
        <div>
          <Image
            src={'/logo.svg'}
            alt={'Diogo Passos'}
            width={'224'}
            height={'30'}
          ></Image>
        </div>
        <div className='md:hidden'>
          <NavbarDrawer />
        </div>
        <div className='hidden md:flex gap-2'>
          <Button variant={'link'} asChild>
            <Link href={'#'}>Home</Link>
          </Button>
          <Button variant={'link'} asChild>
            <Link href={'#'}>About Me</Link>
          </Button>
          <Button variant={'link'} asChild>
            <Link href={'#'}>Technologies</Link>
          </Button>
          <Button variant={'link'} asChild>
            <Link href={'#'}>Projects</Link>
          </Button>
          <Button variant={'link'} asChild>
            <Link href={'#'}>Contact</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
