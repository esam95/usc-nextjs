import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/shadcn/table';
import { findActivity } from '@/functions/findActivity';
import { days, timeSlots } from '@/constants/scheduleAndTimes';
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
                className='rounded-md p-1 border-r-2 align-top overflow-hidden'
              >
                <div
                  className='flex flex-row gap-1 items-stretch w-full'
                  style={{ height: `${findActivity(time, day).rowSpan * 2.5}rem` }}
                >
                  {findActivity(time, day)?.activity
                    ?.split('\n\n')
                    .map((activity, idx) => (
                      <div
                        key={idx}
                        className={`${pickColor(activity)} rounded-md bg-opacity-75 p-1 flex-1 min-w-0 flex flex-col items-center justify-center overflow-hidden`}
                      >
                        <h6 className='whitespace-pre-line text-center text-[10px] leading-tight break-words'>
                          {activity}
                        </h6>
                        <span className='whitespace-nowrap block text-center text-[10px]'>
                          {findActivity(time, day)?.time}
                        </span>
                      </div>
                    ))}
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
