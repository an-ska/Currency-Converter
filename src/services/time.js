import moment from 'moment';

const yesterday = moment().subtract(1, 'day');
export const yesterdayFormattedDate = yesterday.format('YYYY-MM-DD');
