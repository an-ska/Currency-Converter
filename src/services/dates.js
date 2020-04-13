import moment from 'moment';

export const formatDate = date => moment(date).format('YYYY-MM-DD');
export const getTodayDate = new Date();
export const getHistoricalRatesStartDate = new Date(1999, 1, 1);
