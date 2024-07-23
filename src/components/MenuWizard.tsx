import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
  SheetDescription,
} from './shadcn/sheet';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { Button } from './shadcn/button';

export function MenuWizard() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className='text-primary-foreground hover:text-gray-300 focus:outline-none'
          aria-label='Toggle menu'
        >
          <Menu className='w-6 h-6 text-primary' />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className='text-xl text-left'>Meny</SheetTitle>
          <VisuallyHidden.Root>
            <SheetDescription>Navigera till sidor</SheetDescription>
          </VisuallyHidden.Root>
        </SheetHeader>
        <div className='mt-12 flex flex-col flex-wrap gap-7 py-4 justify-center items-center min-h-56 h-auto'>
          <SheetClose asChild aria-label='Home button'>
            <Link
              href='/'
              className='font-medium text-lg text-secondary-foreground transition-colors hover:text-gray-300 dark:hover:text-gray-50'
              prefetch={false}
            >
              Hem
            </Link>
          </SheetClose>
          <SheetClose asChild aria-label='om-oss button'>
            <Link
              href='/om-oss'
              className='font-medium text-lg text-secondary-foreground transition-colors hover:text-gray-300 dark:hover:text-gray-50'
              prefetch={false}
            >
              Om oss
            </Link>
          </SheetClose>
          <SheetClose asChild aria-label='schema button'>
            <Link
              href='/schema'
              className='font-medium text-lg text-secondary-foreground transition-colors hover:text-gray-300 dark:hover:text-gray-50'
              prefetch={false}
            >
              Schema
            </Link>
          </SheetClose>
          <SheetClose asChild aria-label='kontakta-oss button'>
            <Link
              href='/kontakta-oss'
              className='font-medium text-lg text-secondary-foreground transition-colors hover:text-gray-300 dark:hover:text-gray-50'
              prefetch={false}
            >
              Kontakt
            </Link>
          </SheetClose>
          <SheetClose asChild aria-label='FAQ button'>
            <Link
              href='/Q&A'
              className='font-medium text-lg text-secondary-foreground transition-colors hover:text-gray-300 dark:hover:text-gray-50'
              prefetch={false}
            >
              FAQ
            </Link>
          </SheetClose>
        </div>
        <SheetFooter className='mt-6'>
          <SheetClose asChild aria-label='Close menu'>
            <Link href={'/bli-medlem'} className='w-full'>
              <Button
                className='w-full text-primary-foreground hover:text-gray-300 focus:outline-none'
                aria-label='Bli medlem'
                size={'lg'}
              >
                Bli medlem
              </Button>
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
