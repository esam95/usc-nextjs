import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/shadcn/table';
import { findActivity } from '@/functions/findActivity';
import { days, timeSlots } from '@/types/shedule';
import { pickColor } from '@/functions/pickColor';

export function ScheduleTable() {
  return (
    <Table className='min-w-full hidden md:block'>
      <TableHeader>
        <TableRow className='border-b-2 border-gray-200'>
          <TableHead className='text-center p-0 w-[calc(100%/10)]'>Tid</TableHead>
          {days.map((day: string) => (
            <TableHead key={day} className='text-center p-0 w-[calc(100%/8)]'>
              {day}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {timeSlots.map((time: string) => (
          <TableRow key={time} className='h-10 max-h-10  border-0'>
            <TableCell key={time} className='border-r-2 border-b-2 p-0 align-top text-center'>
              {time}
            </TableCell>
            {days.map((day: string) =>
              findActivity(time, day).currentNonActivity ? null : (
                <TableCell
                  key={day}
                  rowSpan={findActivity(time, day).rowSpan}
                  className={`${pickColor(
                    findActivity(time, day)?.activity,
                  )} rounded-md bg-opacity-75 p-2 border-r-2`}
                >
                  <div className='flex flex-col items-center'>
                    <h6 className='text-center'>{findActivity(time, day)?.activity}</h6>
                    <span className='whitespace-nowrap text-xs'>{findActivity(time, day)?.time}</span>
                  </div>
                </TableCell>
              ),
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ScheduleTable;
