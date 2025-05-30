export const PACKLISTE_DATE = new Date('2025-07-27T10:20:00.000Z');
export const PANIK_DATE = new Date('2025-07-27T10:00:00.000Z');
export const STARTPUNKT_DATE = new Date('2025-07-27T10:00:00.000Z');
export const ABFAHRT_DATE = new Date('2025-07-27T10:00:00.000Z');
export const UMSTIEG_DATE = new Date('2025-07-27T10:00:00.000Z');
export const ENDBAHNHOF_DATE = new Date('2025-07-27T10:00:00.000Z');
export const OPTION_SPORTLICH_DATE = new Date('2025-07-27T10:00:00.000Z');
export const OPTION_GNUESSER_DATE = new Date('2025-07-27T10:00:00.000Z');
export const HOTEL_DATE = new Date('2025-07-27T10:00:00.000Z');
export const TIPPS_TRICKS_DATE = new Date('2025-07-27T10:00:00.000Z');
export const HEIWEH_DATE = new Date('2025-07-27T10:00:00.000Z');
export const MORITZ_DATE = new Date('2025-07-27T10:00:00.000Z');
export const NATASCIA_LORIS_DATE = new Date('2025-07-27T10:00:00.000Z');
export const BEATRICE_THOMAS_DATE = new Date('2025-07-27T10:00:00.000Z');

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
  { date: HEIWEH_DATE, name: 'Heimweh', path: 'heimweh' },
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
