import { schedule } from "@/constants/scheduleAndTimes";

export function strToMins(t: string) {
  var s = t.split(":");
  return Number(s[0]) * 60 + Number(s[1]);
}

export const findActivity = (time: string, day: string) => {
  const arrayOfFullSchedule = Object.entries(schedule);

  const singleDay: any = arrayOfFullSchedule.find((singleDay) => {
    return singleDay[0] === day;
  });

  const arrayOfActivitiesInSingeDay = Object.entries(singleDay ? singleDay[1] as { [key: string]: string }: {});

  const currentActivity = arrayOfActivitiesInSingeDay.find((activity) => {
    const [start, end] = activity[0].split(' - ');
    return time === start;
  })

  const currentNonActivity = arrayOfActivitiesInSingeDay.find((activity) => {
    const [start, end] = activity[0].split(' - ');
    return time >start && time < end;
  })

  // console.log('time, day, currentNonActivity', time, day, currentNonActivity)
  const [start, end] = currentActivity ? currentActivity[0].split(' - '): ['12:00', '13:00'];

  const endHalfHours = strToMins(end)/30
  const startHalfHours = strToMins(start)/30

  const rowSpan = endHalfHours - startHalfHours;

  return currentActivity ? { rowSpan: rowSpan, activity: currentActivity[1], time: currentActivity[0], currentNonActivity: currentNonActivity }
  : { rowSpan: 1, activity: null, currentNonActivity: currentNonActivity };
}