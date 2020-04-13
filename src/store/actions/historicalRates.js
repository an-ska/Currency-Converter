import axios from 'axios';
import * as actionTypes from './actionTypes';
import { API, API_KEY } from '../../endpoints';

export const historicalRatesStart = () => ({
	type: actionTypes.HISTORICAL_RATES_START,
});

const historicalRatesSuccess = (currency, historicalRates) => ({
	type: actionTypes.HISTORICAL_RATES_SUCCESS,
	historicalRates: historicalRates.map(data => ({
		date: data.date,
		rate: data.rates[currency],
	})),
	currency,
});

export const historicalRatesFail = error => ({
	type: actionTypes.HISTORICAL_RATES_FAIL,
	error,
});

export const showHistoricalRates = (fromDate, toDate) => async dispatch => {
	dispatch(historicalRatesStart());

	const currency = 'USD';
	const urlStartDate = `${API}${fromDate}?access_key=${API_KEY}&symbols=${currency}`;
	const urlEndDate = `${API}${toDate}?access_key=${API_KEY}&symbols=${currency}`;

	try {
		const start = await axios.get(urlStartDate);
		const end = await axios.get(urlEndDate);

		const historicalRates = [start.data, end.data];

		dispatch(historicalRatesSuccess(currency, historicalRates));
	} catch (error) {
		dispatch(historicalRatesFail(error.response.status));
	}
};
