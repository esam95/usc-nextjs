'use client';
import backgroundImg from '../../public/img/background_img.webp';
import Image from 'next/image';
import logo from '../../public/img/club_logo.webp';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/shadcn/button';
import Link from 'next/link';
import { CardDescription } from '@/components/shadcn/card';
import React from 'react';
import { CarouselComponent } from '@/components/CarouselComponent';
import boxingImg from '../../public/img/boxing_img.webp';
import mmaImg from '../../public/img/mma_img.webp';
import submissionWrestling from '../../public/img/nogi.webp';
import freeStyleWrestling from '../../public/img/freestyle_wrestling.webp';

export default function Home() {
  const classesImages = [boxingImg, mmaImg, submissionWrestling, freeStyleWrestling];

  return (
    <>
      <div className='relative min-h-screen'>
        <div className='absolute inset-0 z-0 h-full w-full'>
          <Image
            alt='background'
            src={backgroundImg}
            fill
            style={{
              objectFit: 'cover',
            }}
            quality={100}
            priority
            className='pointer-events-none'
          />
          <div className='absolute inset-0 bg-black opacity-50'></div>
        </div>

        <div className='relative z-10 flex flex-col items-center justify-center min-h-screen gap-8'>
          <h1 className='px-2 text-4xl font-extrabold text-secondary-foreground text-center drop-shadow-lg lg:text-5xl'>
            Upprustningen Sports Club
          </h1>

          <div className='mt-8'>
            <div className='flex flex-row gap-6'>
              <Link href={'/bli-medlem'}>
                <Button
                  size='lg'
                  className='px-9 py-5 rounded-[2px] text-primary-foreground opacity-90 md:min-w-36 md:min-h-12 xl:text-base'
                >
                  Bli Medlem
                </Button>
              </Link>
              <Link href={'/schema'}>
                <Button
                  size='lg'
                  className='px-9 py-5 rounded-[2px] text-secondary-foreground opacity-90 md:min-w-36 md:min-h-12 xl:text-base'
                  variant={'outline'}
                >
                  Våra klasser
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className='container py-11 mt-12 flex flex-col justify-center items-center gap-12 flex-wrap md:flex-row md:gap-16'>
        <div className='flex flex-col items-center min-w-fit w-full gap-8 md:flex-row md:justify-center md:min-w-fit lg:gap-16'>
          <div className='flex flex-col max-w-[22rem] w-full max-h-fit items-start justify-center lg:max-w-fit lg:w-2/4'>
            <h2 className='text-secondary-foreground font-semibold mb-4 lg:text-4xl'>
              Välkommen till Upprustningen Sports Club
            </h2>
            <p className='text-base leading-relaxed mb-6 max-w-max lg:text-lg'>
              Vi är stolta över att presentera vår nyöppnade klubb i Järva som är en plats där passionerade
              idrottare och kampsports entusiaster kan komma samman för att utmana sig själva, växa som
              individer och uppnå sina träningsmål. På vår klubb erbjuder vi en dynamisk och stödjande miljö
              som främjar teknisk utveckling, fysisk styrka och mental skärpa.
            </p>
          </div>

          <div className='flex flex-col items-center max-w-fit w-full md:justify-center'>
            <Image src={logo} alt={'club logo'} width={250} height={250} className='lg:w-80 lg:h-80' />
          </div>
        </div>

        <div className='flex flex-col items-center justify-center min-h-36 h-full'>
          <Link href='/om-oss'>
            <Button size={'lg'} className='text-primary-foreground hover:text-primary hover:bg-slate-200'>
              Läs mer om oss
              <ArrowRightIcon className='ml-2 h-4 w-4' />
            </Button>
          </Link>
        </div>
      </section>

      <section className='container py-11 flex flex-col justify-center items-center gap-12 flex-wrap'>
        <div className='flex flex-col gap-3 min-w-fit w-full max-h-fit items-center justify-center'>
          <div className='flex flex-col'>
            <h2 className='text-secondary-foreground font-semibold text-center lg:text-4xl'>
              Upptäck våra klasser
            </h2>
            <CardDescription className='text-center text-primary font-medium'>
              Det finns inga gränser för vad du kan åstadkomma hos oss
            </CardDescription>
          </div>
          <p className='text-base leading-relaxed mb-6 max-w-max w-full text-center lg:text-lg'>
            Vi erbjuder träningsmiljö av hög kvalitet för alla nivåer, från nybörjare till proffs. Oavsett din
            ålder eller erfarenhet, har vi träningen för dig.
          </p>
        </div>

        <CarouselComponent images={classesImages} delayTime={3000} />

        <div className='flex flex-col items-center justify-center min-h-36 h-full mt-6'>
          <Link href='/schema'>
            <Button size={'lg'} className='text-primary-foreground hover:text-primary hover:bg-slate-200'>
              Schema
              <ArrowRightIcon className='ml-2 h-4 w-4' />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
