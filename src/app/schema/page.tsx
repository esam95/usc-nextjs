'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shadcn/card';
import { FaMapPin as LocationPinIcon } from 'react-icons/fa';
import ScheduleTable from '@/components/ScheduleTable';
import { ScheduleCards } from '@/components/ScheduleCards';

const TrainingSchedule = () => {
  return (
    <main className='pt-36 flex flex-col items-center min-w-full py-8 px-4 mt-0 sm:px-6 lg:px-8 min-h-screen'>
      <h1 id='content' className='font-extrabold tracking-tight text-secondary-foreground lg:text-5xl mb-8'>
        Träningstider
      </h1>
      <Card className='w-full max-w-3xl shadow-xl'>
        <CardHeader className='bg-secondary text-secondary-foreground rounded-t-lg p-6'>
          <CardTitle className='text-3xl font-bold'>Veckoschema</CardTitle>
          <CardDescription className='mt-2 text-inherit'>
            Här är vårt nuvarande träningsschema för veckan. (OBS, tider kan variera!)
          </CardDescription>
          <p></p>
          <div className='flex gap-2'>
            <div className='flex flex-row md:items-center mt-1 md:mt-0'>
              <LocationPinIcon color='red' />
            </div>
            <strong>Plats: Fryshuset Husby (Lofotengatan 32-34, 164 33 Kista)</strong>
          </div>
        </CardHeader>
        <CardContent className='p-8 flex flex-col gap-10'>
          <ScheduleCards />
          <ScheduleTable />
        </CardContent>
      </Card>
    </main>
  );
};

export default TrainingSchedule;
