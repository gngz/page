import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa6';

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
          <Button variant={'ghost'}>
            <FaBars size={20} />
          </Button>
        </div>
        <div className='hidden md:flex gap-2'>
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>About Me</Link>
          <Link href={'#'}>Technologies</Link>
          <Link href={'#'}>Projects</Link>
          <Link href={'#'}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
