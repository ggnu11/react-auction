import dayjs from 'dayjs';

const DEFAULTDATEFORMAT = 'yyyy-MM-dd HH:mm:ss';

export const dateToString = (date: Date) => dayjs(date, DEFAULTDATEFORMAT);
