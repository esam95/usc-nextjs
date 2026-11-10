import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/shadcn/table';
import { columnsForDay, findActivity } from '@/functions/findActivity';
import { days, timeSlots } from '@/constants/scheduleAndTimes';
import { pickColor } from '@/functions/pickColor';

const ROW_HEIGHT_REM = 2.5;
const TIME_COLUMN_PERCENT = 10;

export function ScheduleTable() {
  // A day with overlapping passes (e.g. Saturday) gets a double-wide column.
  const totalDayColumns = days.reduce((sum, day) => sum + columnsForDay(day), 0);
  const dayWidth = (day: string) =>
    `${((100 - TIME_COLUMN_PERCENT) * columnsForDay(day)) / totalDayColumns}%`;

  // md:[display:table] instead of md:table: DaisyUI's "table" component class
  // would add its own cell padding and row borders.
  return (
    <Table className='w-full table-fixed hidden md:[display:table]'>
      <TableHeader>
        <TableRow className='border-b-2 border-gray-200'>
          <TableHead className='text-center p-0' style={{ width: `${TIME_COLUMN_PERCENT}%` }}>
            Tid
          </TableHead>
          {days.map((day: string) => (
            <TableHead key={day} className='text-center p-0' style={{ width: dayWidth(day) }}>
              {day}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* Empty row so 09:00 and the first passes don't touch the header line. */}
        <TableRow aria-hidden className='h-3 border-0 hover:bg-transparent'>
          <TableCell colSpan={days.length + 1} className='p-0' />
        </TableRow>
        {timeSlots.map((time: string) => (
          <TableRow key={time} className='h-10 max-h-10  border-0'>
            <TableCell key={time} className='border-r-2 border-b-2 p-0 align-top text-center'>
              {time}
            </TableCell>
            {days.map((day: string) => {
              const { rowSpan, passes, coveredByCellAbove } = findActivity(time, day);
              if (coveredByCellAbove) {
                return null;
              }

              return (
                <TableCell
                  key={day}
                  rowSpan={rowSpan}
                  className='rounded-md p-1 border-r-2 align-top overflow-hidden'
                >
                  <div
                    className='flex flex-row gap-1 w-full'
                    style={{ height: `${rowSpan * ROW_HEIGHT_REM}rem` }}
                  >
                    {passes.map((pass) => (
                      // Each pass is its own column. Overlapping passes sit side by
                      // side and start and end on their own rows.
                      <div key={pass.timeLabel} className='relative flex-1 min-w-0'>
                        <div
                          className='absolute inset-x-0 flex flex-row gap-1'
                          style={{
                            top: `${pass.offset * ROW_HEIGHT_REM}rem`,
                            height: `${pass.span * ROW_HEIGHT_REM}rem`,
                          }}
                        >
                          {pass.label.split('\n\n').map((activity, idx) => (
                            <div
                              key={idx}
                              className={`${pickColor(activity)} rounded-md bg-opacity-75 p-1 flex-1 min-w-0 flex flex-col items-center justify-center overflow-hidden`}
                            >
                              <h6 className='whitespace-pre-line text-center text-[10px] leading-tight break-words'>
                                {activity}
                              </h6>
                              <span className='whitespace-nowrap block text-center text-[10px]'>
                                {pass.timeLabel}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ScheduleTable;
