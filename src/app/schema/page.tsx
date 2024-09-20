import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shadcn/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/shadcn/table';
import { FaMapPin as LocationPinIcon } from 'react-icons/fa';
import { findActivity, strToMins } from '@/functions/findActivity';
import { days, timeSlots } from '@/types/shedule';
import { pickColor } from '@/functions/pickColor';




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
                <TableHead className='text-center p-0 w-[calc(100%/10)]'>Tid</TableHead>
                {days.map((day: string) => (
                  <TableHead key={day} className='text-center p-0 w-[calc(100%/8)]'>{day}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {timeSlots.map((time: string) => (
                strToMins(time) < 870 || strToMins(time) > 1110 ? 
                <TableRow key={time} className='h-10 max-h-10  border-0'>
                  <TableCell key={time} className='border-r-2 border-b-2 p-0 align-top text-center'>{time}</TableCell>
                  {days.map((day: string) => 
                  findActivity(time, day).currentNonActivity ? null:
                    <TableCell 
                    key={day} 
                    rowSpan={findActivity(time, day).rowSpan} 
                    className={`${pickColor(findActivity(time, day)?.activity)} rounded-md bg-opacity-75 p-2 border-r-2`}
                    >
                      <div className='flex flex-col items-center'>
                        <h6>{findActivity(time, day)?.activity}</h6>
                        <span className='whitespace-nowrap text-xs'>{findActivity(time, day)?.time}</span>
                      </div>
                      
                    </TableCell>
                  )}
                </TableRow>:
                <TableRow key={time} className='h-10 max-h-10  border-0'>
                  <TableCell key={time} className='border-r-2 border-b-2 p-0 align-top text-center'>{time}</TableCell> 
                  {days.map((day: string) =>
                  <TableCell key={day} className='border-r-2'></TableCell>
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
