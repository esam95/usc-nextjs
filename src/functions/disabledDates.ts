import { workoutDays } from "@/constants/scheduleAndTimes";

export const disabledDates = (date: Date, needsGuardian: boolean, gender: string, sport: string) => {
  const today = new Date();
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 30);

  const isOutOfRange = date < today || date > maxDate;

  // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const dayOfWeek = date.getDay();
  let isAllowedWeekday: boolean = false;

  if(!needsGuardian) {
    if(gender === 'man') {
      isAllowedWeekday = 
      sport === 'Boxning' ?  workoutDays.man.boxning.includes(dayOfWeek):
      sport === 'Olympisk brottning' ? workoutDays.man.olympiskBrottning.includes(dayOfWeek):
      sport === 'BJJ' ? workoutDays.man.bjj.includes(dayOfWeek):
      workoutDays.man.fysOchKondition.includes(dayOfWeek);
    } else if(gender === 'woman') {
      isAllowedWeekday = 
      sport === 'Boxning' ?  workoutDays.woman.boxning.includes(dayOfWeek):
      workoutDays.woman.fysOchKondition.includes(dayOfWeek);
    } 
  } else {
    isAllowedWeekday = workoutDays.child.olympiskBrottning.includes(dayOfWeek);
  };
  
  return isOutOfRange || !isAllowedWeekday;
}

export default function getNextValidDate(needsGuardian: boolean, gender: string, sport: string): Date {
  const today = new Date();
  let date = new Date(today);

  let trainingDays: number[] = [];

  if(!needsGuardian) {
    if(gender === 'man') {
      trainingDays = 
      sport === 'Boxning' ?  workoutDays.man.boxning:
      sport === 'Olympisk brottning' ? workoutDays.man.olympiskBrottning:
      sport === 'BJJ' ? workoutDays.man.bjj:
      [1];
    } else if(gender === 'woman') {
      trainingDays = 
      sport === 'Boxning' ?  workoutDays.woman.boxning:
      workoutDays.woman.fysOchKondition;
    }
  } else {
    trainingDays = workoutDays.child.olympiskBrottning;
  };
  

  while (!trainingDays.includes(date.getDay())) {
    date.setDate(date.getDate() + 1);
  }
  return date;
}