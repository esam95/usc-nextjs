import Link from 'next/link';
import { Button } from './shadcn/button';

const HeroSection: React.FC = () => (
  <section className='mt-20 py-16 px-6 lg:py-20 lg:px-8 xl:py-24 xl:px-10'>
    <div className='mx-auto max-w-7xl'>
      <div className='flex flex-col gap-10 items-center md:flex-row lg:items-start'>
        <div className='flex flex-col items-start gap-5'>
          <h1 className='text-4xl font-bold text-secondary-foreground md:text-5xl lg:text-6xl xl:text-8xl'>
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
          <img
            className='w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-xl'
            src='https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/1/3d-illustration.png'
            alt='Hero image logo'
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
