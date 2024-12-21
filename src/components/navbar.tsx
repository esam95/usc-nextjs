'use client';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { MenuWizard } from './MenuWizard';
import { Button } from './shadcn/button';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

type Props = {
  title: string;
  imageSrc: string | StaticImageData;
};

export function Navbar({ imageSrc, title }: Props) {
  const pathname = usePathname();
  const [bgColor, setBgColor] = useState('bg-transparent');

  const links = [
    { href: '/', label: 'Hem' },
    { href: '/om-oss', label: 'Om oss' },
    { href: '/schema', label: 'Schema' },
    { href: '/medlemskap', label: 'Priser' },
    { href: '/kontakt', label: 'Kontakt' },
    { href: '/Q&A', label: 'FAQ' },
  ];

  const isActive = (href: string) => pathname === href;

  const navLinks = links.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className={`
        ${isActive(link.href) ? 'text-primary' : 'text-secondary-foreground'}
        font-sm transition-colors hover:text-secondary hover:underline-offset-4 2xl:text-lg dark:hover:text-gray-50 hover-animation`}
      prefetch={false}
    >
      {link.label}
    </Link>
  ));

  const [ref] = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: false,
    onChange: (isIntersecting) => {
      if (isIntersecting) {
        setBgColor('bg-transparent');
      } else {
        setBgColor('bg-[#020617]');
      }
    },
  });

  useEffect(() => {
    // Dynamically find the element with id='shift-navbar-color on the page'
    const targetElement = document.getElementById('shift-navbar-color');

    if (targetElement) {
      ref(targetElement);
    } else {
      setBgColor('bg-transparent');
    }
  }, [pathname, ref]);

  return (
    <nav className={`w-full fixed top-0 left-0 z-20 transition-colors duration-300 ${bgColor}`}>
      <div className={`container pl-5 flex h-24 items-center justify-between`}>
        <Link href='/' className='flex items-center gap-4 text-lg font-semibold'>
          <Image src={imageSrc} alt='logo' width={60} height={60} />
          <h2 className='text-xl text-foreground lg:text-2xl'>{title}</h2>
        </Link>
        <div className='lg:hidden'>
          <MenuWizard />
        </div>
        <div className='hidden lg:flex items-center space-x-4 gap-4'>{navLinks}</div>
        <div className='hidden lg:flex items-center'>
          <Link href='/bli-medlem' className='font-medium transition-colors' prefetch={false}>
            <Button
              variant='default'
              className='lg:text-md text-primary-foreground hover:text-primary hover:bg-slate-200 xl:h-11 rounded-md px-8'
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
