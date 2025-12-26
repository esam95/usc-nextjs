export const timeSlots: string[] = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00',
];

export const days: string[] = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];

export const schedule: Schedule = {
  'Måndag': {
    '17:00 - 18:00': 'Barn tävlingsgruppen',
    '18:00 - 19:00': 'Boxning\n(MMA)',
    '19:00 - 21:00': 'Brottarfys',
  },
  'Tisdag': {
    '18:00 - 19:30': 'BJJ\n(MMA)',
    '19:30 - 21:20': 'Brottning\n(Greco)',
  },
  'Onsdag': {
    '17:30 - 19:00': 'Boxning\n(Tjejer)',
    '19:00 - 20:30': 'Barn tävlingsgruppen',
    '20:30 - 22:00': 'Öppenmatta\n(BJJ & Brottning)',
  },
  'Torsdag': {
    '19:00 - 21:00': 'Brottning\n(Greco)',
  },
  'Fredag': {
    '17:30 - 19:00': 'BJJ\n(MMA)',
    '19:00 - 21:00': 'Brottning\n(Greco)',
  },
  'Lördag': {
    '10:00 - 10:50': 'Brottarlekis',
    '11:00 - 12:30': 'Boxning\n(Tjejer)',
    '12:30 - 13:30': 'Boxning\n(Sparring)',
    '13:30 - 15:30': 'Barn tävlingsgruppen',
    '15:30 - 17:00': 'Barn nybörjargruppen',
  },
  'Söndag': {
    '10:00 - 11:00': 'Fys\n(Tjejer)',
    '11:00 - 12:30': 'BJJ',
    '12:30 - 14:00': 'MMA',
    '14:00 - 15:00': 'Barn nybörjargruppen',
    '15:00 - 16:00': 'Gymnastik',
  },
};


export const workoutDays: WorkoutDays = {
  man: {
    boxning: [3, 0],
    olympiskBrottning: [2, 4, 5],
    bjj: [2, 0],
    fysOchKondition: [1],
  },
  woman: {
    boxning: [6],
    fysOchKondition: [1],
  },
  child: {
    olympiskBrottning: [4, 6],
  }
}