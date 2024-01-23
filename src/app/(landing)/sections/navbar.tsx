import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav>
      <div className='container flex justify-between py-2'>
        <div>
          <Image
            src={'/logo.svg'}
            alt={'Diogo Passos'}
            width={'224'}
            height={'30'}
          ></Image>
        </div>
        <div className='flex gap-2'>
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>About M</Link>
          <Link href={'#'}>Technologies</Link>
          <Link href={'#'}>Projects</Link>
          <Link href={'#'}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
