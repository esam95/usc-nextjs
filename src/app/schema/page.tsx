'use client'

import React, { ReactNode } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shadcn/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/shadcn/table';
import { FaMapPin as LocationPinIcon } from 'react-icons/fa';

const timeSlots: string[] = [
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
];

const days: any = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];

const schedule: any = {
  'Måndag': { '16:00 - 18:00': 'Random', '19:00 - 21:00': 'Boxning' },
  'Onsdag': { '19:00 - 20:00': 'Fys' },
  'Torsdag': { '19:00 - 21:00': 'Boxning' },
  'Lördag': { '13:30 - 14:30': 'Fys' },
  'Söndag': { '13:00 - 14:00': 'Boxning' },
};


const findMatch = (time: string, day: string) => {
  const arrayOfFullSchedule = Object.entries(schedule);
console.log('arrayOfFullSchedule', arrayOfFullSchedule)

const singleDay: any = arrayOfFullSchedule.find((singleDay) => {
  console.log('singleDay[0]', singleDay[0], 'day', day)
  return singleDay[0] === day;
});
console.log('singleDay', singleDay);

const arrayOfActivitiesInSingeDay = Object.entries(singleDay ? singleDay[1] as { [key: string]: string }: {});
console.log('arrayOfActivitiesInSingeDay', arrayOfActivitiesInSingeDay)

const currentActivity = arrayOfActivitiesInSingeDay.find((activity) => {
  const [start, end] = activity[0].split(' - ');

  return time >= start && time < end;
})
currentActivity ? console.log('currentActivity', currentActivity[1]): null;
return currentActivity ? currentActivity[1]: null;
}
const day = 'Torsdag';
const time = '20:00';



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
            Här är vårt nuvarande träningsschema för veckan. (OBS, tider kan variera!)<br />
            {/* <div className='flex flex-column gap-2'>
              <LocationPinIcon color="red" />
              <strong>Plats: Kvarnbacka BP (Jyllandsgatan 3, 164 47 Kista)</strong>
            </div> */}
          </CardDescription>
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
                <TableRow key={time} className='border-0 min-h-14 max-h-14'>
                  <TableCell key={time} className='border-b-2 border-r-2 p-0 align-top text-center'>{time}</TableCell>
                  {days.map((day: string) => 
                    <TableCell key={day} className={`${findMatch(time, day) === 'Fys' ? 'bg-cyan-600' : ''}`}>{findMatch(time, day)}</TableCell>,
                    
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
