'use client';
import backgroundImg from '../../public/img/background_img.webp';
import Image from 'next/image';
import logo from '../../public/img/club_logo.webp';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/shadcn/button';
import Link from 'next/link';
import React from 'react';
import { CarouselComponent } from '@/components/CarouselComponent';
import boxingImg from '../../public/img/boxing_img.webp';
import mmaImg from '../../public/img/mma_img.webp';
import submissionWrestling from '../../public/img/nogi.webp';
import freeStyleWrestling from '../../public/img/freestyle_wrestling.webp';
import { Separator } from '@radix-ui/react-separator';
import { EmblaOptionsType } from 'embla-carousel';

export default function Home() {
  const classesImages = [
    {
      imgSrc: boxingImg,
      alt: 'Boxing',
      label: 'Boxning',
      description:
        'En traditionell kampsport som fokuserar på slagtekniker med händerna. Det handlar om snabbhet, styrka och strategi för att överlista sin motståndare.',
    },
    {
      imgSrc: mmaImg,
      alt: 'Mixed Martial Arts',
      label: 'MMA',
      description:
        'Mixed Martial Arts är en hybrid kampsport som kombinerar tekniker från boxning, thai-boxning, brottning, jiu-jitsu, och andra kampsporter. Det är en allsidig träning som inkluderar både stående och markkamp.',
    },
    {
      imgSrc: submissionWrestling,
      alt: 'Submission Wrestling',
      label: 'Submission Wrestling / NoGi',
      description:
        'En kampsport som kombinerar tekniker från brottning och brasiliansk jiu-jitsu. Fokuset ligger på att använda kast, positionering och markkontroll för att få motståndaren att ge upp genom ledlås eller strypgrepp. Perfekt för att utveckla både styrka och teknisk skicklighet.',
    },
    {
      imgSrc: freeStyleWrestling,
      alt: 'Freestyle Wrestling',
      label: 'Freestyle Wrestling',
      description:
        'Traditionell brottningsstil som tillåter brottare att använda sina ben både offensivt och defensivt. Det handlar om att kontrollera och kasta sin motståndare för att få poäng.',
    },
  ];

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
                  className='px-9 py-5 rounded-[2px] text-primary-foreground opacity-90 hover:text-secondary-foreground md:min-w-36 md:min-h-12 xl:text-base'
                >
                  Bli Medlem
                </Button>
              </Link>
              <Link href={'#our-classes'}>
                <Button
                  size='lg'
                  className='px-9 py-5 rounded-[2px] text-secondary-foreground opacity-90 hover:text-primary md:min-w-36 md:min-h-12 xl:text-base'
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
      <section
        id='main-content'
        className='container py-11 mt-12 flex flex-col justify-center items-center gap-12 flex-wrap md:flex-row md:gap-16'
      >
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

      <Separator orientation='horizontal' decorative className='h-0.5 bg-secondary w-3/4 mx-auto' />

      {/* VÅRA KLASSER  */}
      <section className='container py-11 flex flex-col justify-center items-center gap-12 flex-wrap w-full'>
        <div className='flex flex-col gap-3 min-w-fit w-full max-h-fit items-center justify-center'>
          <div className='flex flex-col'>
            <h2 id='our-classes' className='text-secondary-foreground font-semibold text-center lg:text-4xl'>
              Upptäck våra klasser
            </h2>
            {/* <CardDescription className='text-center text-primary font-medium'>
              Det finns inga gränser för vad du kan åstadkomma hos oss
            </CardDescription> */}
          </div>

          <p className='mt-4 text-base leading-relaxed mb-1 max-w-[800px] w-full text-left md:text-center lg:text-lg'>
            Vi erbjuder träningsmiljö av hög kvalitet för alla nivåer, från nybörjare till proffs. <br />
            Oavsett din ålder eller erfarenhet, har vi träningen för dig. <br />
            Våra träningspass inkluderar&nbsp;
            <strong className='text-primary'>
              Boxning, MMA, Fristilsbrottning, Submission Wrestling / NoGi&nbsp;
            </strong>
            och även&nbsp;
            <strong className='text-primary'>fys och styrke träningar</strong>&nbsp; för den som inte är ute
            efter kampsport.
          </p>
          <p className='text-sm font-semibold leading-relaxed max-w-[800px] w-full text-center lg:text-base md:text-center'>
            Kom och hitta den perfekta träningsformen som passar just dig!
          </p>
        </div>

        <CarouselComponent images={classesImages} />

        {/* <div className='flex flex-col items-center justify-center min-h-36 h-full mt-6'>
          <Link href='/schema'>
            <Button size={'lg'} className='text-primary-foreground hover:text-primary hover:bg-slate-200'>
              Schema
              <ArrowRightIcon className='ml-2 h-4 w-4' />
            </Button>
          </Link>
        </div> */}
      </section>
    </>
  );
}
