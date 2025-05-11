type Schedule = {
  [day: string]: {
    [time: string]: string;
  };
};

type WorkoutDays = {  
  [gender: string]: {
    [sport: string]: number[];
  } 
};

type ListOfSports = {
  [gender: string]: string[];
}