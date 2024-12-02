import Link from 'next/link';
import { Button } from './shadcn/button';
import Image from 'next/image';
import usc_text_logo from '../../public/img/usc_text_logo.webp';

const HeroSection: React.FC = () => (
  <section className='py-16 lg:py-20 xl:py-24'>
    <div className='max-w-7xl'>
      <div className='mt-24 flex flex-col justify-center gap-4 items-center md:flex-row'>
        <div className='flex flex-col items-start gap-5'>
          <h1 className='text-4xl font-bold text-secondary-foreground md:text-5xl lg:text-6xl xl:text-7xl'>
            Frågor & Svar
          </h1>
          <p className='max-w-lg text-xl font-normal text-muted-foreground   md:mt-6'>
            Här får du svar på de vanligaste frågorna. <br /> Skulle du fortfarande inte få svar så är du
            alltid välkommen att kontakta oss.
          </p>
          <Link href='/kontakt' className='w-full relative inline-flex items-center mt-12 md:mt-10 group'>
            <Button
              title='Kontakta oss'
              className='mx-auto w-[80%] text-base hover:text-primary hover:bg-secondary-foreground md:mx-0 md:max-lg:w-[90%]'
              size={'lg'}
              role='button'
            >
              Kontakta oss
            </Button>
          </Link>
        </div>
        <div className='mt-8 lg:mt-0 lg:ml-8 flex-shrink-0'>
          <Image
            className='w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-xl'
            src={usc_text_logo}
            alt='Upprustningen SC logo'
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
