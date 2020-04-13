import { yesterdayFormattedDate } from './services/time';

export const API = 'http://data.fixer.io/api/';
export const API_KEY = '0e3e3d5bddeb34067fe3afdeab8e0f38';

export const latest = `${API}latest?ac${yesterdayFormattedDate}cess_key=${API_KEY}`;
