import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/shadcn/card';
import { pickColor } from '@/functions/pickColor';

interface ActivityListProps {
  activities: [string, string][];
  calculateTime: (timePeriod: string) => number;
}

const ActivityList: React.FC<ActivityListProps> = ({ activities, calculateTime }) => {
  return (
    <>
      {activities.map((activity) =>
        activity[1].split('\n\n').map((singleActivity, idx) => (
          <Card key={`${activity[0]}-${idx}`} className='flex flex-row p-2 shadow-lg min-h-[150px]'>
            <CardHeader
              className={`${pickColor(singleActivity)} p-0 rounded-md w-36 h-28 flex justify-center my-auto`}
            >
              <CardTitle className='text-center text-sm whitespace-nowrap'>{activity[0]}</CardTitle>
              <CardDescription className='text-center text-white m-0'>
                {calculateTime(activity[0])} min
              </CardDescription>
            </CardHeader>
            <CardContent className='w-full flex items-center justify-center p-0'>
              <div className='whitespace-pre-line text-center'>{singleActivity}</div>
            </CardContent>
          </Card>
        )),
      )}
    </>
  );
};

export default ActivityList;