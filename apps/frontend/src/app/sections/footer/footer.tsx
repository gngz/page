import Image from 'next/image';
import Link from 'next/link';

import SocialIcon from '../../../components/social-icon';

export async function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-zinc-900 text-lg text-zinc-300'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-between border-b border-zinc-500/30 py-11 md:flex-row'>
          <h1 className='flex items-center justify-center md:justify-start'>
            <Link href={'/#top'}>
              <Image
                src={'/logo-white.svg'}
                alt={'Diogo Passos'}
                width={'224'}
                height={'30'}
              />
            </Link>
          </h1>
          <div className='mt-4 flex flex-row items-center justify-center gap-4 md:mt-0'>
            <SocialIcon
              socialNetwork='linkedin'
              href='https://www.linkedin.com/in/gdpassos/'
              title='LinkedIn'
            />
            <SocialIcon
              socialNetwork='github'
              href='https://github.com/gngz'
              title='GitHub'
            />
            <SocialIcon
              socialNetwork='x'
              href='https://twitter.com/gdfpassos'
              title='X'
            />
          </div>
        </div>
        <div className='flex flex-col py-14 lg:flex-row'>
          <div className='flex flex-auto flex-col flex-wrap gap-x-12 gap-y-3 lg:flex-row'>
            <Link href='/#top'>home</Link>
            <Link href='/#experience'>about me</Link>
            <Link href='/#skills'>skills and technologies</Link>
            {/* <a href='/#blog'>Blog</a> */}
            <Link href='/#contact'>contact</Link>
          </div>
          <div className='flex-inital mt-14 lg:mt-0'>
            © {year} DiogoPassos.pt - All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
