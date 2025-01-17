import { membershipOptions } from './membershipOptions';
import Link from 'next/link';
import { PricingCard } from '@/components/PricingCard';
import Image from 'next/image';
import membershipHeroImg from '../../../public/img/membership_hero.webp'; // You'll need to add this image
import { Calendar, Users, Dumbbell, Mail } from 'lucide-react';

const Membership = () => {
  return (
    <>
      {/* Hero Section */}
      <div className='relative w-full min-h-screen'>
        <Image
          id='shift-navbar-color'
          src={membershipHeroImg}
          alt='Membership Background'
          fill
          style={{
            objectFit: 'cover',
          }}
          quality={100}
          priority
          className='pointer-events-none opacity-60'
        />
        <div className='absolute inset-0 flex flex-col justify-center items-center p-4'>
          <h1 className='text-secondary-foreground text-4xl font-bold text-center md:text-6xl'>
            Priser & Medlemskap
          </h1>
          <span className='mt-6 text-secondary-foreground/90 text-lg font-light text-center'>
            <h4>Här kan du se våra medlemskap och priser</h4>
            Välj det medlemskap som passar dig
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div
          id='rabatter-section'
          className='rounded-sm relative overflow-hidden bg-gradient-to-br from-[#192334] to-[#1d2942] text-secondary-foreground p-8 md:p-12 mb-12 w-full shadow-xl max-sm:break-words'
        >
          <div className='absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2' />
          <div className='absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2' />

          <div className='relative'>
            <h3 className='text-2xl md:text-3xl font-bold mb-6 text-secondary-foreground'>
              Rabatter & erbjudanden
            </h3>

            <div className='space-y-6'>
              <p className='text-lg font-light'>
                <span className='inline-flex items-center gap-2 mb-2 text-primary'>
                  <Calendar className='h-5 w-5' />
                  Terminer
                </span>
                <br />
                <strong className='font-bold'>Vårterminen</strong> sträcker sig från januari till maj.&nbsp;
                <strong className='font-bold'>Höstterminen</strong> sträcker sig från augusti till december.{' '}
                <strong className='font-bold'>Juni och juli</strong> är sommarträning.
              </p>

              <p className='text-lg font-light'>
                <span className='inline-flex items-center gap-2 mb-2 text-primary'>
                  <Users className='h-5 w-5' />
                  Platser
                </span>
                <br />
                På grund av det begränsade antalet tillgängliga platser för medlemmar rekommenderar vi starkt
                att du säkrar din plats redan idag genom att registrera dig.
              </p>

              <p className='text-lg font-light'>
                <span className='inline-flex items-center gap-2 mb-2 text-primary'>
                  <Dumbbell className='h-5 w-5' />
                  Träningsformer
                </span>
                <br />
                För närvarande erbjuder vi&nbsp;
                <strong className='text-primary font-semibold'>boxning, brottning </strong> samt
                <strong className='text-primary font-semibold'> fys- och konditionsträningar.&nbsp;</strong>
                Snart introducerar vi även&nbsp;
                <strong className='text-primary font-semibold'>MMA.</strong>
              </p>

              <p className='text-lg font-light'>
                <span className='inline-flex items-center gap-2 mb-2 text-primary'>
                  <Mail className='h-5 w-5' />
                  Kontakt
                </span>
                <br />
                För frågor angående betalning och avgifter, kontakta&nbsp;
                <a href='mailto:ekonomi@upprustningensc.nu' className='group transition-colors'>
                  <strong className='font-bold underline underline-offset-2 group-hover:decoration-primary/100 transition-colors'>
                    ekonomi@upprustningensc.nu
                  </strong>
                </a>
              </p>
            </div>
          </div>
        </div>

        <main className='flex min-h-screen min-w-80 w-full flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center justify-items-center'>
            {membershipOptions.map((membership) => (
              <PricingCard key={membership.title} {...membership} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Membership;
