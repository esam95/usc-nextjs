'use client'

import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shadcn/card';
import { days, schedule } from '@/types/shedule';
import ScheduleTable from '@/components/ScheduleTable';
import { strToMins } from '@/functions/findActivity';
import { pickColor } from '@/functions/pickColor';

export function ScheduleCards() {
  
const findDay = (currentDay: string) => {
  const dayHasTraining = Object.entries(schedule).find((scheduleDay) => {
    return currentDay === scheduleDay[0];
  })

  const arrayOfActivitiesInDay = dayHasTraining ? Object.entries(dayHasTraining[1]): [];

  dayHasTraining ? console.log(Object.entries(dayHasTraining[1])): null
  return arrayOfActivitiesInDay;
}

const calculateTime = (timePeriod: string) => {
  const [start, end] = timePeriod.split(' - ');
  return strToMins(end)-strToMins(start);
}

return (
  days.map((day: string) =>
    <Card key={day} className='mb-4 border-none md:hidden'>
      <CardHeader className='bg-secondary  rounded-lg p-6'>
        <CardTitle className='text-lg font-bold'>{day}</CardTitle>
      </CardHeader>
      <CardContent className='p-0 border-none'>
        {findDay(day).map((activity: any) =>
          <Card key={activity} className='flex flex-row p-2 shadow-lg bg-blue-600'>              
            <CardHeader className={`${pickColor(activity[1])} p-0 rounded-full w-36 h-28 flex justify-center`}>
              <CardTitle className='text-center text-sm whitespace-nowrap	'>
                {activity[0]}
              </CardTitle>
              <CardDescription className='text-center text-white m-0'>
                {calculateTime(activity[0])} min
              </CardDescription>
            </CardHeader>
            <CardContent className='w-full flex items-center justify-center p-0'>
              <div>{activity[1]}</div>
            </CardContent>
          </Card>
        )}
        {/* {findDay(day).length === 0 ? 'No activities': null} */}
      </CardContent>
    </Card>
    )
);
}

export default ScheduleTable;
