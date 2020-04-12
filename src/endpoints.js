import { yesterdayFormattedDate } from './services/time';

const API = 'http://data.fixer.io/api/';
const API_KEY = '0e3e3d5bddeb34067fe3afdeab8e0f38';

export const historicalRates = `${API}${yesterdayFormattedDate}?access_key=${API_KEY}`;
export const latest = `${API}latest?access_key=${API_KEY}`;
