import React from 'react';

type Props = {};

export function Footer({}: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-zinc-900 text-lg text-zinc-300'>
      <div className='container mx-auto'>
        <div className='flex flex-row justify-between border-b border-zinc-500/30 py-11'>
          <div className=''>
            <h1 className='text-4xl'>DiogoPassos.pt</h1>
          </div>
          <div className='flex flex-col justify-center'>Social Links</div>
        </div>
        <div className='flex py-14'>
          <div className='flex flex-auto flex-row flex-wrap gap-x-12'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Technologies</a>
            <a href='#'>Projects</a>
            <a href='#'>Contact</a>
          </div>
          <div className='flex-inital'>
            © {year} DiogoPassos.pt - All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
