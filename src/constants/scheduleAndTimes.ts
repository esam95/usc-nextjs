export const timeSlots: string[] = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00',
];

export const days: string[] = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];

export const schedule: Schedule = {
  'Måndag': {
    '18:00 - 19:00': 'Barn tävlingsgruppen\n& nybörjargruppen',
    '19:00 - 21:00': 'Brottarfys',
  },
  'Tisdag': {
    '17:00 - 18:00': 'Boxning\n(Tjejer)',
    '18:00 - 19:30': 'BJJ',
    '19:30 - 21:30': 'Brottning\n(Greco)',
  },
  'Onsdag': {
    '18:00 - 19:00': 'Barn nybörjargruppen',
    '19:00 - 20:30': 'Barn tävlingsgruppen',
    '20:30 - 22:00': 'Öppenmatta\n(BJJ & Brottning)',
  },
  'Torsdag': {
    '19:00 - 21:00': 'Brottning\n(Greco)',
  },
  'Fredag': {
    '17:30 - 19:00': 'BJJ',
    '19:00 - 21:00': 'Brottning\n(Greco)',
  },
  'Lördag': {
    '09:00 - 09:50': 'Brottarlekis',
    '10:00 - 10:50': 'Brottarlekis',
    '11:00 - 12:30': 'Boxning\n(Tjejer)',
    '13:30 - 15:30': 'Barn tävlingsgruppen',
    '15:30 - 17:00': 'Barn nybörjargruppen',
  },
  'Söndag': {
    '11:00 - 12:30': 'BJJ',
    '12:30 - 14:00': 'Öppenmatta',
    '14:30 - 15:30': 'Gymnastik',
  },
};


export const workoutDays: WorkoutDays = {
  man: {
    boxning: [2, 6],          // Tisdag(tjejer men låt vara), Lördag - egentligen bara tjejer nu?
    olympiskBrottning: [2, 4, 5, 6], // Tisdag, Torsdag, Fredag, Lördag
    bjj: [2, 5, 0],           // Tisdag, Fredag, Söndag
    fysOchKondition: [1],     // Måndag (Brottarfys)
  },
  woman: {
    boxning: [2, 6],          // Tisdag, Lördag
    fysOchKondition: [],
  },
  child: {
    olympiskBrottning: [6, 0], // Lördag, Söndag
  }
}