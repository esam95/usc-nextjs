import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shadcn/card';
import { membershipOptions } from './membershipOptions';

const MembershipOptions = () => {
  return (
    <main className='flex flex-col items-center min-w-full py-8 px-4 mt-0 sm:px-6 lg:px-8 bg-gray-100 min-h-screen'>
      <h1 className='font-extrabold tracking-tight lg:text-5xl mb-8 text-gray-700'>Medlemskap</h1>
      <Card>
        <CardHeader>
          <CardTitle>Rabatter & påminnelser</CardTitle>
          <CardDescription>
            <br />– Vi erbjuder en 15% rabatt på träningsavgiften när du betalar för{' '}
            <strong>hela terminen</strong> tillsammans med medlemsavgiften.
            <br />
            <br />– För <strong>varje</strong> vän du tar med dig som blir medlem hos oss, erbjuder vi en 10%
            rabatt på träningsavgiften.
            <br />
            <br />
            – Ifall du har medlemskap i två grupper får du halva priset på den andra gruppen.
            <br />
            <br />
            – På grund av det begränsade antalet tillgängliga platser för medlemmar rekommenderar vi starkt
            att du säkrar din plats redan idag genom att registrera dig.
            <br />
            <br />– För närvarande erbjuder vi endast träningar inom boxning på olika nivåer. Inom några
            månader kommer vi också att introducera träningar i{' '}
            <strong>fristilsbrottning, Grappling, fys & Kondition</strong> och <strong>MMA</strong>.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <section className='flex flex-wrap -mx-2'>
            {membershipOptions.map((membership, index) => (
              <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-2 mb-4'>
                <Card key={index} className='bg-white shadow-xl rounded-lg h-full'>
                  <CardHeader className='bg-primary text-primary-foreground rounded-t-lg p-6'>
                    <CardTitle className='text-3xl font-bold whitespace-nowrap'>{membership.title}</CardTitle>
                    <CardDescription className='text-secondary mt-2'>{membership.price}</CardDescription>
                  </CardHeader>
                  <CardContent className='p-6'>
                    <ul>
                      {membership.description.map((description, index) => (
                        <li className='list-disc p-0,5' key={index}>
                          {description}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </section>
        </CardContent>
      </Card>
    </main>
  );
};

export default MembershipOptions;
