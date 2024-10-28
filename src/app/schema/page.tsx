'use client'

import React from 'react';
import { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shadcn/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/shadcn/table';
import { FaMapPin as LocationPinIcon } from 'react-icons/fa';
import { findActivity, strToMins } from '@/functions/findActivity';
import { days, schedule, timeSlots } from '@/types/shedule';
import { pickColor } from '@/functions/pickColor';
import { useWindowSize } from 'usehooks-ts'
import ScheduleTable from '@/components/ScheduleTable';
import { ScheduleCards } from '@/components/ScheduleCards';


const TrainingSchedule = () => {
  const { width = 0, height = 0 } = useWindowSize()
  const [mobile, setMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set to true after the component mounts
    console.log('mobile, mounted, width', mobile, mounted, width)
  }, []);

  useEffect(() => {
    if (mounted) {
      setMobile(width < 768);
      console.log('mobile, mounted, width', mobile, mounted, width)

    }
  }, [width, mounted]);

  return (
    <main className='pt-36 flex flex-col items-center min-w-full py-8 px-4 mt-0 sm:px-6 lg:px-8 min-h-screen'>
      <h1 id='content' className='font-extrabold tracking-tight text-secondary-foreground lg:text-5xl mb-8'>
        Träningstider
      </h1>
      <Card className='w-full max-w-3xl shadow-xl rounded-lg'>
        <CardHeader className='bg-secondary text-secondary-foreground rounded-t-lg p-6'>
          <CardTitle className='text-3xl font-bold'>Veckoschema</CardTitle>
          <CardDescription className='mt-2'>
            Här är vårt nuvarande träningsschema för veckan. (OBS, tider kan variera!)
          </CardDescription>
          <div className='flex flex-column gap-2 items-center	'>
            <LocationPinIcon color="red" />
            <strong>Plats: Kvarnbacka BP (Jyllandsgatan 3, 164 47 Kista)</strong>
          </div>
        </CardHeader>
        <CardContent className='p-6'>
          <ScheduleCards/>
          <ScheduleTable/>
        </CardContent>
      </Card>
    </main>
  );
};

export default TrainingSchedule;
