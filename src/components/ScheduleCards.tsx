import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/shadcn/card';
import { days, schedule } from '@/types/shedule';
import { strToMins } from '@/functions/findActivity';
import ActivityList from './ActivityList';
import NoActivityList from './NoActivityList';

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
          <ActivityList activities={findDay(day)} calculateTime={calculateTime} />
        ) : (
          <NoActivityList />
        )}
      </CardContent>
    </Card>
  ));
}

export default ScheduleCards;
