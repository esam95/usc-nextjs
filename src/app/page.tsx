import backgroundImg from '../../public/img/background_img.webp';
import Image from 'next/image';
import logo from '../../public/img/club_logo.webp';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/shadcn/button';
import Link from 'next/link';

export default function Home() {
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
          <h1 className='px-2 text-4xl font-extrabold text-secondary-foreground text-center drop-shadow-lg'>
            Upprustningen Sports Club
          </h1>

          <div className='flex flex-row gap-6 mt-6'>
            <Link href={'/bli-medlem'}>
              <Button size='lg' className='rounded-none text-secondary-foreground opacity-90 md:w-42 md:h-12'>
                Bli Medlem
              </Button>
            </Link>
            <Link href={'/schema'}>
              <Button size='lg' className='rounded-none opacity-90 md:w-42 md:h-12' variant={'outline'}>
                Våra klasser
              </Button>
            </Link>
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
            <Button size={'lg'}>
              Läs mer om oss
              <ArrowRightIcon className='ml-2 h-4 w-4' />
            </Button>
          </Link>
        </div>
      </section>

      {/* <section
        className='container py-11 flex flex-col justify-center items-center gap-12 flex-wrap
      md:flex-row'
      >
        <div className='flex flex-col max-w-[20rem] w-full mt-6'>
          <h2 className='text-secondary-foreground font-semibold mb-4'>Upptäck våra klasser</h2>
          <p className='text-base leading-relaxed mb-6 max-w-max'>
            <strong className=''>Det finns inga gränser för vad du kan åstadkomma hos oss.</strong>
            Vi erbjuder träningsmiljö av hög kvalitet för alla nivåer, från nybörjare till proffs, oavsett din
            ålder eller erfarenhet, har vi träningen för dig.
          </p>
        </div>
      </section> */}
    </>
  );
}
