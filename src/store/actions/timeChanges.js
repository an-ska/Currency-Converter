import axios from 'axios';
import * as actionTypes from './actionTypes';
import { API, API_KEY } from '../../endpoints';

export const timeChangesStart = () => ({
	type: actionTypes.TIME_CHANGES_START,
});

const timeChangesSuccess = (from, to, fetchedData) => {
	const timeChanges = fetchedData.map(data => ({
		date: data.date,
		rate: data.rates[to],
	}));

	return {
		type: actionTypes.TIME_CHANGES_SUCCESS,
		from,
		to,
		timeChanges,
	};
};

export const timeChangesFail = error => ({
	type: actionTypes.TIME_CHANGES_FAIL,
	error,
});

export const showHistoricalRates = (fromDate, toDate) => async dispatch => {
	dispatch(timeChangesStart());

	const from = 'EUR';
	const to = 'USD';
	const urlStartDate = `${API}${fromDate}?access_key=${API_KEY}&base=EUR&symbols=${to}`;
	const urlEndDate = `${API}${toDate}?access_key=${API_KEY}&base=EUR&symbols=${to}`;

	try {
		const start = await axios.get(urlStartDate);
		const end = await axios.get(urlEndDate);

		const timeChanges = [start.data, end.data];

		dispatch(timeChangesSuccess(from, to, timeChanges));
	} catch (error) {
		dispatch(timeChangesFail(error.response.status));
	}
};
