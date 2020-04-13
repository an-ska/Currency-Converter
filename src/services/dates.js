import moment from 'moment';

export const formatDate = date => moment(date).format('YYYY-MM-DD');
export const getTodayDate = new Date();
