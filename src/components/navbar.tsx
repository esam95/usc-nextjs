// /**
//  * This code was generated by v0 by Vercel.
//  * @see https://v0.dev/t/ZPrRUV51n0W
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

type Props = {
  title: string;
  imageSrc: string | StaticImageData;
};

export function Navbar({ imageSrc, title }: Props) {
  return (
    <nav className="min-w-full bg-blue-500">
      <div className="container">
        <div className="flex h-[5.5rem] items-center justify-between">
          <Link href="/" className="mr-auto flex items-center gap-4 text-lg font-semibold" prefetch={false}>
            <Image src={imageSrc} alt={'logo'} width={60} height={60}></Image>
            <h2 className="text-primary-foreground">{title}</h2>
          </Link>
          <nav className="flex items-center space-x-4 gap-4">
            <Link
              href="/"
              className="font-medium text-sm text-primary-foreground border-transparent transition-colors hover:text-gray-300 dark:hover:text-gray-50"
              prefetch={false}
            >
              Hem
            </Link>
            <Link
              href="/om-oss"
              className="font-medium text-sm text-primary-foreground border-transparent transition-colors hover:text-gray-300 dark:hover:text-gray-50"
              prefetch={false}
            >
              Om oss
            </Link>
            <Link
              href="/schema"
              className="font-medium text-sm text-primary-foreground border-transparent transition-colors hover:text-gray-300 dark:hover:text-gray-50"
              prefetch={false}
            >
              Schema
            </Link>
            <Link
              href="/kontakta-oss"
              className="font-medium text-sm text-primary-foreground border-transparent transition-colors hover:text-gray-300 dark:hover:text-gray-50"
              prefetch={false}
            >
              Kontakt
            </Link>
            <Link
              href="/Q&A"
              className="font-medium text-sm text-primary-foreground border-transparent transition-colors hover:text-gray-300 dark:hover:text-gray-50"
              prefetch={false}
            >
              FAQ
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
}

// For Svg's
function PackageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  );
}

export default Navbar;
