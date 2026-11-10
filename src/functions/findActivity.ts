import { schedule, timeSlots } from "@/constants/scheduleAndTimes";

export function strToMins(t: string) {
  const [hours, minutes] = t.split(":");
  return Number(hours) * 60 + Number(minutes);
}

// One pass inside a drawn cell. offset and span are counted in half-hour rows
// from the top of the cell, so overlapping passes can sit side by side and
// still start and end on their own rows.
export type PassInCell = {
  label: string;
  timeLabel: string;
  offset: number;
  span: number;
};

type DrawnCell = {
  slots: string[];
  passes: PassInCell[];
};

// Half-hour rows from the schedule grid that this pass covers.
// 15:00-16:30 covers 15:00, 15:30 and 16:00. The end time itself is the next row.
function slotsBetween(start: string, end: string) {
  const startMin = strToMins(start);
  const endMin = strToMins(end);

  return timeSlots.filter((slot) => {
    const slotMin = strToMins(slot);
    return slotMin >= startMin && slotMin < endMin;
  });
}

// Passes that share at least one row are drawn in one table cell that covers
// all of their rows. Inside the cell each pass gets its own column.
function drawnCellsForDay(day: string): DrawnCell[] {
  const daySchedule = schedule[day];
  if (!daySchedule) {
    return [];
  }

  const activities = Object.entries(daySchedule)
    .map(([range, label]) => {
      const [start, end] = range.split(" - ");
      return { label, range, slots: slotsBetween(start, end) };
    })
    .filter((activity) => activity.slots.length > 0)
    .sort((a, b) => timeSlots.indexOf(a.slots[0]) - timeSlots.indexOf(b.slots[0]));

  const groups: (typeof activities)[] = [];
  let lastRow = -1;
  for (const activity of activities) {
    const firstRow = timeSlots.indexOf(activity.slots[0]);
    const endRow = timeSlots.indexOf(activity.slots[activity.slots.length - 1]);
    if (groups.length > 0 && firstRow <= lastRow) {
      groups[groups.length - 1].push(activity);
    } else {
      groups.push([activity]);
    }
    lastRow = Math.max(lastRow, endRow);
  }

  return groups.map((group) => {
    const firstRow = timeSlots.indexOf(group[0].slots[0]);
    const endRow = Math.max(
      ...group.map((a) => timeSlots.indexOf(a.slots[a.slots.length - 1])),
    );

    return {
      slots: timeSlots.slice(firstRow, endRow + 1),
      passes: group.map((a) => ({
        label: a.label,
        timeLabel: a.range,
        offset: timeSlots.indexOf(a.slots[0]) - firstRow,
        span: a.slots.length,
      })),
    };
  });
}

// How many boxes a day ever shows side by side: overlapping passes, plus
// passes whose label is split with "\n\n" (e.g. Monday 18:00). The table makes
// that day's column this many times wider, so the boxes are not squeezed.
export function columnsForDay(day: string) {
  return Math.max(
    1,
    ...drawnCellsForDay(day).map((cell) =>
      cell.passes.reduce((sum, pass) => sum + pass.label.split("\n\n").length, 0),
    ),
  );
}

export const findActivity = (time: string, day: string) => {
  const cell = drawnCellsForDay(day).find((item) => item.slots.includes(time));

  if (!cell) {
    return { rowSpan: 1, passes: [] as PassInCell[], coveredByCellAbove: false };
  }

  if (cell.slots[0] !== time) {
    return { rowSpan: 1, passes: [] as PassInCell[], coveredByCellAbove: true };
  }

  return { rowSpan: cell.slots.length, passes: cell.passes, coveredByCellAbove: false };
};
