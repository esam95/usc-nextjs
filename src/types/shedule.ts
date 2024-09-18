type Schedule = {
  [day: string]: {
    [time: string]: string;
  };
};

export const timeSlots: string[] = [
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00',
];

export const days: string[] = ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag', 'Söndag'];

export const schedule: Schedule = {
  'Tisdag': { '19:00 - 21:00': 'Boxning' },
  'Onsdag': { '19:00 - 20:00': 'Fys' },
  'Torsdag': { '19:00 - 21:00': 'Boxning' },
  'Lördag': { '13:30 - 14:30': 'Fys' },
  'Söndag': { '13:00 - 14:00': 'Boxning' },
};