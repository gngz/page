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
          <Button className='text-lg' variant={'link'} asChild>
            <Link href={'/#top'}>Home</Link>
          </Button>
          <Button className='text-lg' variant={'link'} asChild>
            <Link href={'/#experience'}>About Me</Link>
          </Button>
          <Button className='text-lg' variant={'link'} asChild>
            <Link href={'/#skills'}>Skills and Tech</Link>
          </Button>
          {/* <Button className='text-lg' variant={'link'} asChild>
            <Link href={'/#blog'}>Blog</Link>
          </Button> */}
          <Button className='text-lg' variant={'link'} asChild>
            <Link href={'/#contact'}>Contact</Link>
          </Button>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
}
