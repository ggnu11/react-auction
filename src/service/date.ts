import { format } from 'date-fns';

const DEFAULTDATEFORMAT = 'yyyy-MM-dd HH:mm:ss';

export const dateToString = (date: Date) => format(date, DEFAULTDATEFORMAT);
