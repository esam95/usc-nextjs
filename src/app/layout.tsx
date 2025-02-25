import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/shadcn/toaster';
import Navbar from '@/components/navbar';
import { Footer } from '@/components/footer';
import logo from '../../public/img/club_logo.webp';
import { Analytics } from '@vercel/analytics/react';
import CookieBanner from '@/components/CookieBanner';

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
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11515902602"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-11515902602');
            `,
          }}
        ></script>
      </head>
      <body className={`${inter.className} dark`}>
        <Toaster />
        <Navbar title={'Upprustningen Sports Club'} imageSrc={logo} />
        {children}
        <CookieBanner/>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
