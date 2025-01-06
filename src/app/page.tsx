'use client';
import backgroundImg from '../../public/img/background_img.webp';
import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/shadcn/button';
import { CarouselComponent } from '@/components/CarouselComponent';
import Link from 'next/link';
import logo from '../../public/img/club_logo.webp';
import boxingImg from '../../public/img/boxing_img.webp';
import mmaImg from '../../public/img/mma_img.webp';
import submissionWrestling from '../../public/img/nogi.webp';
import freeStyleWrestling from '../../public/img/freestyle_wrestling.webp';
import strengthCondition from '../../public/img/strength_condition.webp';
import armbar from '../../public/img/armbar.webp';
import logoRf from '../../public/img/logo_rf.webp';
import logoUpprustningen from '../../public/img/logo_upprustningen.webp';
import logoSbk from '../../public/img/logo_sbk.webp';
import logoFryshuset from '../../public/img/logo_fryshuset.webp';
import logoFolketsHusby from '../../public/img/logo_folkets_husby.webp';

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
        'En kampsport som kombinerar tekniker från brottning och brasiliansk jiu-jitsu. Fokuset ligger på att använda kast, positionering och markkontroll för att få motståndaren att ge upp genom ledlås eller strypgrepp.',
    },
    {
      imgSrc: freeStyleWrestling,
      alt: 'Freestyle Wrestling',
      label: 'Freestyle Wrestling',
      description:
        'Traditionell brottningsstil som tillåter brottare att använda sina ben både offensivt och defensivt. Det handlar om att kontrollera och kasta sin motståndare för att få poäng.',
    },
    {
      imgSrc: strengthCondition,
      alt: 'Fys & Kondition',
      label: 'Fys & Kondition',
      description:
        'Detta träningsprogram är perfekt för dig som vill förbättra din allmänna fysik, styrka, flexibilitet och uthållighet genom olika övningar. Våra träningspass erbjuder en rolig och utmanande träningsmiljö.',
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
            id='shift-navbar-color'
          />
          <div className='absolute inset-0 bg-black opacity-50'></div>
        </div>

        <div className='relative z-10 flex flex-col items-center justify-center min-h-screen gap-8'>
          <h1 className='mt-12 px-2 text-secondary-foreground text-center drop-shadow-lg text-4xl font-bold  md:text-5xl lg:text-6xl xl:text-7xl'>
            Upprustningen Sports Club
          </h1>

          <div className='mt-8'>
            <div className='flex flex-row gap-6'>
              <Link href={'/bli-medlem'}>
                <Button
                  size='lg'
                  className='px-9 py-5 rounded-[2px] text-primary-foreground opacity-90 hover:text-secondary-foreground md:min-w-36 md:min-h-12 xl:text-base'
                >
                  Bli medlem
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
        className='w-full bg-[#0d1420] py-11 flex flex-col justify-start items-center flex-wrap gap-16 md:flex-row md:min-h-screen self-center xl:min-h-[80vh]'
      >
        <div className='flex flex-col items-center min-w-fit w-full gap-8 md:flex-row md:items-start md:gap-16 md:justify-evenly'>
          <div className='flex flex-col max-w-[22rem] w-full max-h-fit items-start justify-center lg:max-w-fit lg:w-2/4'>
            <h2 className='text-secondary-foreground font-semibold mb-4 lg:text-4xl'>
              Välkommen till Upprustningen Sports Club
            </h2>
            <p className='text-base leading-relaxed mb-6 max-w-max lg:text-lg'>
              Vi är en kampsportsklubb i Järva där passionerade idrottare och kampsportsälskare kan komma
              samman för att utmana sig själva, växa som individer och uppnå sina träningsmål. På vår klubb
              erbjuder vi en rolig och stödjande miljö som främjar teknisk utveckling, fysisk styrka och ökat
              självförtroende.
            </p>
          </div>

          <div className='relative flex flex-col items-center max-w-fit w-full md:w-1/2 md:items-start'>
            <Image src={logo} alt={'club logo'} width={250} height={250} className='lg:w-80 lg:h-80' />
          </div>
        </div>

        <div className='flex flex-col items-center md:items-start w-full md:mt-0 md:ml-12 lg:ml-[5.5rem] xl:ml-32 2xl:ml-72'>
          <Link href='/om-oss'>
            <Button
              size={'lg'}
              className='text-primary-foreground hover:text-primary hover:bg-slate-200 md:h-12 md:px-12'
            >
              Läs mer om oss
              <ArrowRightIcon className='ml-2 h-4 w-4' />
            </Button>
          </Link>
        </div>

        <div className='min-w-fit w-full flex flex-col items-center gap-y-2'>
          <h2 className='text-secondary-foreground font-semibold mb-4 lg:text-4xl'>Våra samarbetspartners</h2>
          <div className='min-w-fit w-full flex flex-wrap flex-col md:flex-row md:justify-evenly items-center gap-y-5'>
            <div className='max-w-fit'>
              <Image className='max-w-56' src={logoUpprustningen} alt={'Upprustningen'} />
            </div>
            <div className='max-w-fit'>
              <Image className='max-w-56' src={logoRf} alt={'Riksidrottsförbundet'} />
            </div>
            <div className='max-w-fit'>
              <Image className='max-w-56' src={logoSbk} alt={'Svenska Budo & Kampsportsförbundet'} />
            </div>
            <div className='max-w-fit'>
              <Image className='max-w-56' src={logoFryshuset} alt={'Fryshuset'} />
            </div>
            <div className='max-w-fit'>
              <Image className='max-w-56' src={logoFolketsHusby} alt={'Folkets husby'} />
            </div>
          </div>
        </div>
      </section>

      {/* VÅRA KLASSER */}
      <section className='relative w-screen py-11 flex flex-col justify-center items-center gap-12'>
        {/* <Image src={logoStamps} alt={'logos'} className='absolute h-full w-full object-cover opacity-10' /> */}
        <div className='relative min-h-[400px] flex flex-col justify-evenly items-center gap-3 px-8 z-10'>
          <div className='flex flex-col'>
            <h2 id='our-classes' className='text-white font-semibold text-center lg:text-4xl'>
              Upptäck våra klasser
            </h2>
          </div>

          <p className='mt-4 text-base leading-relaxed mb-1 max-w-[800px] w-full text-center text-white lg:text-lg'>
            Oavsett din ålder eller erfarenhet, har vi träningen för dig. <br />
            Våra träningspass inkluderar för närvarande&nbsp;
            <strong className='text-primary'>boxning, grappling, brottning </strong> samt
            <strong className='text-primary'> fys- och konditionsträningar.&nbsp;</strong>
            Snart introducerar vi även&nbsp;
            <strong className='text-primary'> MMA.</strong>
          </p>
          <p className='text-sm font-semibold leading-relaxed max-w-[800px] w-full text-center text-white lg:text-base'>
            Kom och hitta den perfekta träningsformen som passar just dig!
          </p>
          <Link href='/schema'>
            <Button size={'lg'} className='text-primary-foreground hover:text-primary hover:bg-slate-200'>
              Schema
              <ArrowRightIcon className='ml-2 h-4 w-4' />
            </Button>
          </Link>
        </div>
        <CarouselComponent images={classesImages} />
      </section>

      {/* PROVTRÄNA */}
      <section
        id='provträna-content'
        className='py-12 flex flex-col justify-center items-center gap-8 flex-wrap md:gap-16'
      >
        <div className='flex flex-col items-center w-full gap-16'>
          <div className='relative w-full min-h-[420px] h-[420px] md:h-[600px] lg:h-[500px]'>
            <Image
              src={armbar}
              alt={'armbar, by Vladislav Bychkov'}
              className='w-full h-full object-cover opacity-50'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
            <div className='absolute inset-0 flex flex-col items-center justify-evenly text-center p-4'>
              <div>
                <h1 className='text-secondary-foreground font-semibold mb-4'>Vill du provträna?</h1>
                <h4 className='text-center font-semibold leading-relaxed w-full '>
                  Att börja på en ny klubb kan vara ett stort steg för många <br /> Därför är du alltid
                  välkommen att provträna
                </h4>
              </div>
              <div>
                <Link href='/kontakt'>
                  <Button
                    size={'lg'}
                    className='text-primary-foreground hover:text-primary hover:bg-slate-200'
                  >
                    Kontakta oss
                    <ArrowRightIcon className='ml-2 h-4 w-4' />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
