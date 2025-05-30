export const PACKLISTE_DATE = new Date('2025-05-30T21:00:00+02:00');
export const PANIK_DATE = new Date('2025-05-30T21:05:00+02:00');
export const STARTPUNKT_DATE = new Date('2025-05-30T21:10:00+02:00');
export const ABFAHRT_DATE = new Date('2025-05-30T21:15:00+02:00');
export const UMSTIEG_DATE = new Date('2025-05-30T21:20:00+02:00');
export const ENDBAHNHOF_DATE = new Date('2025-05-30T21:25:00+02:00');
export const OPTION_SPORTLICH_DATE = new Date('2025-05-30T21:30:00+02:00');
export const OPTION_GNUESSER_DATE = new Date('2025-05-30T21:35:00+02:00');
export const HOTEL_DATE = new Date('2025-05-30T21:40:00+02:00');
export const TIPPS_TRICKS_DATE = new Date('2025-05-30T21:45:00+02:00');
export const HEIMWEH_DATE = new Date('2025-05-30T21:50:00+02:00');
export const MORITZ_DATE = new Date('2025-05-30T21:55:00+02:00');
export const NATASCIA_LORIS_DATE = new Date('2025-05-30T22:00:00+02:00');
export const BEATRICE_THOMAS_DATE = new Date('2025-05-30T22:05:00+02:00');

export type Page = { name: string; path: string };

export type DatePage = { date: Date } & Page;

export const DATE_PAGE_MAP: readonly DatePage[] = [
  { date: PACKLISTE_DATE, name: 'Packliste', path: 'packliste' },
  { date: PANIK_DATE, name: 'Panik? Keis Problem', path: 'panik' },
  { date: STARTPUNKT_DATE, name: 'Startpunkt', path: 'startpunkt' },
  { date: ABFAHRT_DATE, name: 'Abfahrt', path: 'abfahrt' },
  { date: UMSTIEG_DATE, name: 'Umstiige', path: 'umstig' },
  { date: ENDBAHNHOF_DATE, name: 'Endbahnhof', path: 'endbahnhof' },
  {
    date: OPTION_SPORTLICH_DATE,
    name: 'Option Sportlich',
    path: 'option-sportlich',
  },
  {
    date: OPTION_GNUESSER_DATE,
    name: 'Option Gnüsser',
    path: 'option-gnuesser',
  },
  { date: HOTEL_DATE, name: 'Hotel', path: 'hotel' },
  { date: TIPPS_TRICKS_DATE, name: 'Tipps und Tricks', path: 'tipps-tricks' },
  { date: HEIMWEH_DATE, name: 'Heimweh', path: 'heimweh' },
  { date: MORITZ_DATE, name: 'Moritz', path: 'moritz' },
  {
    date: NATASCIA_LORIS_DATE,
    name: 'Natascia und Loris',
    path: 'natascia-loris',
  },
  {
    date: BEATRICE_THOMAS_DATE,
    name: 'Beatrice und Thomas',
    path: 'beatrice-thomas',
  },
] as const;
