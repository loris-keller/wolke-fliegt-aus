export const PACKLISTE_DATE = new Date('2025-08-07T15:00:00+02:00');
export const STARTPUNKT_DATE = new Date('2025-08-07T16:00:00+02:00');
export const PANIK_DATE = new Date('2025-08-07T16:15:00+02:00');
export const ABFAHRT_DATE = new Date('2025-08-08T12:15:00+02:00');
export const UMSTIEG_DATE = new Date('2025-08-08T13:15:00+02:00');
export const ENDBAHNHOF_DATE = new Date('2025-08-08T14:40:00+02:00');
export const OPTION_SPORTLICH_DATE = new Date('2025-08-08T14:45:00+02:00');
export const OPTION_GNUESSER_DATE = new Date('2025-08-08T14:50:00+02:00');
export const HOTEL_DATE = new Date('2025-08-08T15:42:00+02:00');
export const TIPPS_TRICKS_DATE = new Date('2025-08-08T16:00:00+02:00');
export const HEIMWEH_DATE = new Date('2025-08-10T16:12:34+02:00');
export const MORITZ_DATE = new Date('2025-08-11T11:11:11+02:00');
export const NATASCIA_LORIS_DATE = new Date('2025-08-11T11:22:22+02:00');
export const BEATRICE_THOMAS_DATE = new Date('2025-08-11T11:33:33+02:00');

export type Page = { name: string; path: string };

export type DatePage = { date: Date } & Page;

export const DATE_PAGE_MAP: readonly DatePage[] = [
  { date: PACKLISTE_DATE, name: 'Packliste', path: 'packliste' },
  { date: STARTPUNKT_DATE, name: 'Startpunkt', path: 'startpunkt' },
  { date: PANIK_DATE, name: 'Panik? Keis Problem', path: 'panik' },
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
