'use client'

import React, { ReactNode } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shadcn/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/shadcn/table';
import { FaMapPin as LocationPinIcon } from 'react-icons/fa';
import { findActivity } from '@/functions/findActivity';
import { days, timeSlots } from '@/types/shedule';



const pickColor = (activity: string | null) => {
  return activity === 'Boxning' ? 'bg-cyan-600': activity === 'Fys' ? 'bg-red-600': activity === 'Random' ? 'bg-yellow-600': null

}


const TrainingSchedule = () => {
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
          <Table className='min-w-full'>
            <TableHeader>
              <TableRow className='border-b-2 border-gray-200'>
                <TableHead className='py-3 px-6 text-left'>Tid</TableHead>
                {days.map((day: string) => (
                  <TableHead key={day} className='py-3 px-6 text-left'>{day}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {timeSlots.map((time: string) => (
                <TableRow key={time} className='border-0 h-14 max-h-14'>
                  <TableCell key={time} className='border-b-2 border-r-2 p-0 align-top text-center'>{time}</TableCell>
                  {days.map((day: string) => 
                  findActivity(time, day).currentNonActivity ? null:
                    <TableCell 
                    key={day} 
                    rowSpan={findActivity(time, day).rowSpan} 
                    className={`${pickColor(findActivity(time, day)?.activity)}`}
                    >
                      {findActivity(time, day)?.activity}
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
};

export default TrainingSchedule;
