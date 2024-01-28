'use client';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa6';

export function NavbarDrawer() {
  return (
    <Drawer direction='right'>
      <DrawerTrigger asChild>
        <Button variant={'ghost'} aria-label='Toggle navigation'>
          <FaBars size={20} />
        </Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerContent className='h-screen left-6 p-4'>
          <DrawerHeader>
            <DrawerTitle>Navigation</DrawerTitle>
          </DrawerHeader>
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
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
}
