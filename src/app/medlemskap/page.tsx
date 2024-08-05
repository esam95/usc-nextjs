import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shadcn/card';
import { membershipOptions } from './membershipOptions';
import { Check } from 'lucide-react';
import { Button } from '@/components/shadcn/button';
import Link from 'next/link';

const MembershipOptions = () => {
  return (
    <main className='mt-32 flex min-h-screen min-w-80 w-full flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <h1 className='font-extrabold tracking-tight lg:text-5xl mb-8 text-secondary-foreground'>Medlemskap</h1>

      <div className='bg-secondary rounded-md flex flex-col space-y-2 p-6 mb-6'>
        <h3>Rabatter & erbjudanden</h3>
        <p className='text-base font-light'>
          – Vi erbjuder en 15% rabatt på träningsavgiften när du betalar för <strong>hela terminen</strong>{' '}
          tillsammans med medlemsavgiften.
        </p>
        <p className=' text-secondary-foreground  font-light'>
          – För <strong>varje</strong> vän du tar med dig som blir medlem hos oss, erbjuder vi en 10% rabatt
          på träningsavgiften.
        </p>
        <p className=' text-secondary-foreground  font-light'>
          – Ifall du har medlemskap i två grupper får du halva priset på den andra gruppen.
        </p>
        <p className=' text-secondary-foreground  font-light'>
          – På grund av det begränsade antalet tillgängliga platser för medlemmar rekommenderar vi starkt att
          du säkrar din plats redan idag genom att registrera dig.
        </p>
        <p className=' text-secondary-foreground  font-light'>
          – För närvarande erbjuder vi endast träningar inom boxning på olika nivåer. Inom några månader
          kommer vi också att introducera träningar i{' '}
          <strong className='text-secondary-foreground'>Fristilsbrottning, Grappling, Fys & Kondition</strong>{' '}
          och <strong className='text-secondary-foreground'>MMA</strong>.
        </p>
      </div>

      <div id='membership-cards' className='p-6 grid gap-12 md:grid-cols-2 lg:grid-cols-3'>
        {membershipOptions.map((membership, index) => (
          <Card key={index} className='shadow-xl h-[500px] flex flex-col'>
            <CardHeader id='header' className='bg-secondary text-secondary-foreground'>
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
                    Köp
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default MembershipOptions;
