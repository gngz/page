import Link from 'next/link';

export function Navbar() {
  return (
    <nav>
      <div className='container flex justify-between'>
        <div>LOGO</div>
        <div className='flex gap-2'>
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Technologies</Link>
          <Link href={'#'}>Projects</Link>
          <Link href={'#'}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}
