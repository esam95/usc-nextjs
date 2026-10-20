import { schedule, timeSlots } from "@/constants/scheduleAndTimes";

export function strToMins(t: string) {
  const [hours, minutes] = t.split(":");
  return Number(hours) * 60 + Number(minutes);
}

type DrawnBlock = {
  label: string;
  timeLabel: string;
  slots: string[];
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

// Earlier passes claim their rows first. A pass that starts in the middle of
// another one is drawn from the first free half-hour, so the table does not
// leave a hole that pulls the next day left.
function drawnBlocksForDay(day: string): DrawnBlock[] {
  const daySchedule = schedule[day];
  if (!daySchedule) {
    return [];
  }

  const activities = Object.entries(daySchedule)
    .map(([range, label]) => {
      const [start, end] = range.split(" - ");
      return { start, end, label, range };
    })
    .sort((a, b) => strToMins(a.start) - strToMins(b.start));

  const taken = new Set<string>();
  const blocks: DrawnBlock[] = [];

  for (const activity of activities) {
    const possibleSlots = slotsBetween(activity.start, activity.end);
    const firstFreeSlot = possibleSlots.find((slot) => !taken.has(slot));
    if (!firstFreeSlot) {
      continue;
    }

    const slots: string[] = [];
    const firstFreeIndex = possibleSlots.indexOf(firstFreeSlot);
    for (const slot of possibleSlots.slice(firstFreeIndex)) {
      if (taken.has(slot)) {
        break;
      }
      slots.push(slot);
      taken.add(slot);
    }

    blocks.push({
      label: activity.label,
      timeLabel: activity.range,
      slots,
    });
  }

  return blocks;
}

export const findActivity = (time: string, day: string) => {
  const block = drawnBlocksForDay(day).find((item) => item.slots.includes(time));
  const isStartOfBlock = block?.slots[0] === time;

  if (!block || !isStartOfBlock) {
    return {
      rowSpan: 1,
      activity: null,
      time: block ? block.timeLabel : null,
      currentNonActivity: block,
    };
  }

  return {
    rowSpan: block.slots.length,
    activity: block.label,
    time: block.timeLabel,
    currentNonActivity: undefined,
  };
};
