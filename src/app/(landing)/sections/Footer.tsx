import SocialIcon from '@/components/SocialIcon';
import React from 'react';

type Props = {};

export function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-zinc-900 text-lg text-zinc-300'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-between border-b border-zinc-500/30 py-11 md:flex-row'>
          <h1 className='text-center text-4xl md:text-left'>DiogoPassos.pt</h1>
          <div className='flex flex-row items-center justify-center gap-4'>
            <SocialIcon socialNetwork='github' href='https://github.com/gngz' />
            <SocialIcon
              socialNetwork='linkedin'
              href='https://www.linkedin.com/in/gdfpassos/'
            />
            <SocialIcon socialNetwork='x' href='https://x.com/gdfpassos' />
          </div>
        </div>
        <div className='flex flex-col py-14 lg:flex-row'>
          <div className='flex flex-auto flex-col flex-wrap gap-x-12 lg:flex-row'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Technologies</a>
            <a href='#'>Projects</a>
            <a href='#'>Contact</a>
          </div>
          <div className='flex-inital mt-14 lg:mt-0'>
            © {year} DiogoPassos.pt - All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
