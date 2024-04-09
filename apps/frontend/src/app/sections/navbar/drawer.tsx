'use client';

import { Button } from '../../../components/ui/button';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '../../../components/ui/sheet';
import Link from 'next/link';
import { FaBars, FaXmark } from 'react-icons/fa6';

export function NavbarDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'ghost'} aria-label='Toggle navigation'>
          <FaBars size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent
        onCloseAutoFocus={(e) => e.preventDefault()}
        className='bg-slate-100'
      >
        <div className='flex items-center justify-between'>
          <SheetTitle>Navigation</SheetTitle>
          <SheetClose asChild>
            <Button
              className='text-2xl text-slate-800'
              aria-label='Close'
              variant={'ghost'}
            >
              <FaXmark />
            </Button>
          </SheetClose>
        </div>
        <div className='mt-6 flex flex-col gap-4'>
          <SheetClose asChild>
            <Button className='text-lg' variant={'link'} asChild>
              <Link href={'/#top'}>Home</Link>
            </Button>
          </SheetClose>

          <SheetClose asChild>
            <Button className='text-lg' variant={'link'} asChild>
              <Link href={'/#experience'}>About Me</Link>
            </Button>
          </SheetClose>

          <SheetClose asChild>
            <Button className='text-lg' variant={'link'} asChild>
              <Link href={'/#skills'}>Skills and Tech</Link>
            </Button>
          </SheetClose>
          {/* <Button className='text-lg' variant={'link'} asChild>
            <Link href={'/#blog'}>Blog</Link>
          </Button> */}
          <SheetClose asChild>
            <Button className='text-lg' variant={'link'} asChild>
              <Link href={'/#contact'}>Contact</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
