import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { MenuWizard } from './MenuWizard';
import { Button } from './shadcn/button';

type Props = {
  title: string;
  imageSrc: string | StaticImageData;
};

export function Navbar({ imageSrc, title }: Props) {
  return (
    <nav className='w-full fixed top-0 left-0 z-20  bg-background/20 dark:bg-opacity-50'>
      <div className='container pl-5 flex h-32 items-center justify-between'>
        <Link href='/' className='flex items-center gap-4 text-lg font-semibold' prefetch={false}>
          <Image src={imageSrc} alt='logo' width={60} height={60} />
          <h2 className='text-xl text-foreground lg:text-2xl'>{title}</h2>
        </Link>
        <div className='lg:hidden'>
          <MenuWizard />
        </div>
        <div className='hidden lg:flex items-center space-x-4 gap-4'>
          <Link
            href='/'
            className='font-medium text-md text-secondary-foreground transition-colors hover:text-secondary hover:underline hover:underline-offset-4 dark:hover:text-gray-50'
            prefetch={false}
          >
            Hem
          </Link>
          <Link
            href='/om-oss'
            className='font-medium text-md text-secondary-foreground transition-colors hover:text-secondary hover:underline hover:underline-offset-4 dark:hover:text-gray-50'
            prefetch={false}
          >
            Om oss
          </Link>
          <Link
            href='/schema'
            className='font-medium text-md text-secondary-foreground transition-colors hover:text-secondary hover:underline hover:underline-offset-4 dark:hover:text-gray-50'
            prefetch={false}
          >
            Schema
          </Link>
          <Link
            href='/kontakta-oss'
            className='font-medium text-md text-secondary-foreground transition-colors hover:text-secondary hover:underline hover:underline-offset-4 dark:hover:text-gray-50'
            prefetch={false}
          >
            Kontakt
          </Link>
          <Link
            href='/Q&A'
            className='font-medium text-md text-secondary-foreground transition-colors hover:text-secondary hover:underline hover:underline-offset-2 dark:hover:text-gray-50'
            prefetch={false}
          >
            FAQ
          </Link>
        </div>
        <div className='hidden lg:flex items-center'>
          <Link href='/bli-medlem' className='font-medium transition-colors' prefetch={false}>
            <Button
              variant='default'
              className='text-primary-foreground hover:text-primary hover:bg-slate-200'
            >
              Bli medlem
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
