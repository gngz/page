'use client';

import { Button } from '@/components/atoms';
import NextLink from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { CgMenu, CgMenuRightAlt } from 'react-icons/cg';

const useScrollLock = () => {
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    document.querySelector('body')?.classList.toggle('overflow-hidden', locked);
  }, [locked]);

  return {
    lock: () => setLocked(true),
    unlock: () => setLocked(false),
  };
};

export default function Drawer() {
  const [open, setOpen] = useState(false);

  const bodyLock = useScrollLock();

  const toggleNavbar = useCallback(() => {
    setOpen((oldVal) => !oldVal);
    open ? bodyLock.unlock() : bodyLock.lock();
  }, [open, bodyLock]);

  return (
    <>
      <Button
        onClick={toggleNavbar}
        variant='ghost'
        aria-expanded={open}
        aria-haspopup
        aria-controls='drawer'
      >
        {open ? <CgMenuRightAlt size={24} /> : <CgMenu size={24} />}
      </Button>
      <div
        id='drawer'
        aria-hidden={!open}
        className={`fixed inset-0 top-[58px] z-50 bg-gray-200/50 backdrop-blur-md ${open ? 'block' : 'hidden'} flex flex-col items-center gap-4 p-4`}
      >
        <Button
          variant='surface'
          color='gray'
          highContrast
          size='4'
          className='w-full'
          onClick={toggleNavbar}
          asChild
        >
          <NextLink href='/#top'>home</NextLink>
        </Button>
        <Button
          variant='surface'
          color='gray'
          highContrast
          size='4'
          className='w-full'
          onClick={toggleNavbar}
          asChild
        >
          <NextLink href='/#experience'>about me</NextLink>
        </Button>
        <Button
          variant='surface'
          color='gray'
          highContrast
          size='4'
          className='w-full'
          onClick={toggleNavbar}
          asChild
        >
          <NextLink href='/#skills'>skills and tech</NextLink>
        </Button>
        <Button
          variant='surface'
          color='gray'
          highContrast
          size='4'
          className='w-full'
          onClick={toggleNavbar}
          asChild
        >
          <NextLink href='/#contact'>contact-me</NextLink>
        </Button>
      </div>
    </>
  );
}
