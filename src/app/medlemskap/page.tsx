import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shadcn/card';
import { membershipOptions } from './membershipOptions';
import { Check } from 'lucide-react';
import { Button } from '@/components/shadcn/button';
import Link from 'next/link';
import clubStampLogo from '../../../public/img/club_logo_stamps.webp';

const MembershipOptions = () => {
  return (
    <div className='mt-32 flex min-h-screen min-w-80 w-full flex-col items-center justify-center py-12'>
      <div id='content' className='w-full max-w-3xl mb-8'>
        <h1 className='text-center font-extrabold tracking-tight lg:text-5xl text-secondary-foreground'>
          Prislista
        </h1>
      </div>

      <div id='rabatter-section' className='bg-[#545960] text-secondary-foreground p-12 mb-12 w-full'>
        <h3 className='text-2xl font-bold mb-4'>Rabatter & erbjudanden</h3>
        <p className='text-lg font-light mb-4'>
          – För <strong>varje</strong> vän du tar med dig som blir medlem hos oss, erbjuder vi en 10% rabatt
          på träningsavgiften.
        </p>
        <p className='text-lg font-light mb-4'>
          – Ifall du har medlemskap i två grupper får du halva priset på den andra gruppen.
        </p>
        <p className='text-lg font-light mb-4'>
          – På grund av det begränsade antalet tillgängliga platser för medlemmar rekommenderar vi starkt att
          du säkrar din plats redan idag genom att registrera dig.
        </p>
        <p className='text-lg font-light mb-4'>
          – För närvarande erbjuder vi&nbsp;
            <strong className='text-primary'>boxning, grappling, brottning </strong> samt
            <strong className='text-primary'> fys- och konditionsträningar.&nbsp;</strong>
            Snart introducerar vi även&nbsp;
            <strong className='text-primary'> MMA.</strong>
        </p>
        <p className='text-lg font-light mb-4'>
          – För frågor angående betalning och avgifter, kontakta&nbsp;
          <strong className='text-secondary-foreground'>ekonomi@upprustningensc.nu</strong>.
        </p>
      </div>

      <main className='flex min-h-screen min-w-80 w-full flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div id='membership-cards' className='grid gap-12 md:grid-cols-2 lg:grid-cols-3'>
          {membershipOptions.map((membership, index) => (
            <Card key={index} className='shadow-xl h-[500px] flex flex-col'>
              <CardHeader id='header' className='rounded-sm bg-secondary text-secondary-foreground'>
                <CardTitle id='title' className='mb-2 text-3xl font-bold'>
                  {membership.title}
                </CardTitle>
                <CardDescription id='description' className='text-xl font-normal text-primary'>
                  {membership.price}
                </CardDescription>
                <p className='text-secondary-foreground'>{membership.age}</p>
              </CardHeader>
              <CardContent className='flex-1 flex flex-col items-center overflow-auto justify-between pt-8'>
                <ul className='list-none'>
                  {membership.description.map((description, index) => (
                    <li className='flex items-start mb-2' key={index}>
                      <Check className='w-6 h-6 mr-2 flex-shrink-0' />
                      <p className='m-0 text-lg'>{description}</p>
                    </li>
                  ))}
                </ul>
                {membership?.route && (
                  <Link href={membership.route} className='w-full'>
                    <Button size={'lg'} className='w-full hover:text-primary hover:bg-secondary-foreground'>
                      Bli stödmedlem
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MembershipOptions;
