import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/shadcn/card';

const NoActivityList: React.FC = () => {
  return (
    <Card className='flex flex-col items-center justify-center p-6 bg-gray-300 shadow-lg rounded-t-none'>
      <CardHeader className='text-center'>
        <CardTitle className='text-lg font-bold text-gray-500'>Inga aktiviteter</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-gray-500'>Det finns inga aktiviteter för denna dag.</p>
      </CardContent>
    </Card>
  );
};

export default NoActivityList;
