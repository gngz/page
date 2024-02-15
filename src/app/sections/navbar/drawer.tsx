'use client';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
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
    <Drawer direction='right' modal={true} preventScrollRestoration={false}>
      <DrawerTrigger asChild>
        <Button variant={'ghost'} aria-label='Toggle navigation'>
          <FaBars size={20} />
        </Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerContent className='left-6 h-screen p-4'>
          <DrawerHeader>
            <DrawerTitle>Navigation</DrawerTitle>
          </DrawerHeader>
          <Button className='text-lg' variant={'link'} asChild>
            <Link href={'/#top'}>Home</Link>
          </Button>
          <Button className='text-lg' variant={'link'} asChild>
            <DrawerClose>
              <a href={'/#experience'}>About Me</a>
            </DrawerClose>
          </Button>
          <Button className='text-lg' variant={'link'} asChild>
            <Link href={'/#skills'}>Skills and Tech</Link>
          </Button>
          {/* <Button className='text-lg' variant={'link'} asChild>
            <Link href={'/#blog'}>Blog</Link>
          </Button> */}
          <Button className='text-lg' variant={'link'} asChild>
            <DrawerClose>
              <a href={'/#contact'}>Contact</a>
            </DrawerClose>
          </Button>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
}
