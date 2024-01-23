import SocialIcon from '@/components/social-icon';
import React from 'react';
import Image from 'next/image';
import { getSocialNetworksData } from '../actions/social-networks';

export async function Footer() {
  const year = new Date().getFullYear();
  const socialNetworks = await getSocialNetworksData();

  return (
    <footer className='bg-zinc-900 text-lg text-zinc-300'>
      <div className='container mx-auto'>
        <div className='flex flex-col justify-between border-b border-zinc-500/30 py-11 md:flex-row'>
          <h1 className='text-center text-4xl md:text-left'>
            <Image
              src={'/logo-white.svg'}
              alt={'Diogo Passos'}
              width={'224'}
              height={'30'}
            ></Image>
          </h1>
          {socialNetworks && (
            <div className='flex flex-row items-center justify-center gap-4'>
              {socialNetworks.map((network) => {
                return (
                  <SocialIcon
                    key={network.code}
                    socialNetwork={network.code}
                    href={network.url}
                    title={network.name}
                  />
                );
              })}
            </div>
          )}
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
