'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shadcn/card';
import { days, schedule } from '@/types/shedule';
import { strToMins } from '@/functions/findActivity';
import { pickColor } from '@/functions/pickColor';

export function ScheduleCards() {
  const findDay = (currentDay: string) => {
    const dayHasTraining = Object.entries(schedule).find((scheduleDay) => {
      return currentDay === scheduleDay[0];
    });

    const arrayOfActivitiesInDay = dayHasTraining ? Object.entries(dayHasTraining[1]) : [];

    return arrayOfActivitiesInDay;
  };

  const calculateTime = (timePeriod: string) => {
    const [start, end] = timePeriod.split(' - ');
    return strToMins(end) - strToMins(start);
  };

  return days.map((day: string) => (
    <Card key={day} className='mb-4 border-none md:hidden'>
      <CardHeader className='bg-secondary rounded-lg rounded-b-none p-6'>
        <CardTitle className='text-lg font-bold'>{day}</CardTitle>
      </CardHeader>
      <CardContent className='p-0 border-none text-center flex flex-col'>
        {findDay(day).length > 0 ? (
          findDay(day).map((activity: [string, string]) => (
            <Card key={activity[0]} className='flex flex-row p-2 shadow-lg min-h-[150px]'>
              <CardHeader
                className={`${pickColor(activity[1])} p-0 rounded-md w-36 h-28 flex justify-center my-auto`}
              >
                <CardTitle className='text-center text-sm whitespace-nowrap'>{activity[0]}</CardTitle>
                <CardDescription className='text-center text-white m-0'>
                  {calculateTime(activity[0])} min
                </CardDescription>
              </CardHeader>
              <CardContent className='w-full flex items-center justify-center p-0'>
                <div>{activity[1]}</div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card className='flex flex-col items-center justify-center p-6 bg-gray-300 shadow-lg rounded-t-none'>
            <CardHeader className='text-center'>
              <CardTitle className='text-lg font-bold text-gray-500'>Inga aktiviteter</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='text-gray-500'>Det finns inga aktiviteter för denna dag.</p>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  ));
}

export default ScheduleCards;
