import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/shadcn/toaster';
import Navbar from '@/components/navbar';
import { Footer } from '@/components/footer';
import logo from '../../public/img/club_logo.webp';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Upprustningen Sports Club',
  description: 'Järvas Kampsports Klubb',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} dark`}>
        <Toaster />
        <Navbar title={'Upprustningen Sports Club'} imageSrc={logo} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
