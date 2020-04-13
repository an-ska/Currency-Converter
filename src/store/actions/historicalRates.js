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

export const showHistoricalRates = (from, to, currency) => async dispatch => {
	dispatch(historicalRatesStart());

	const urlStartDate = `${API}${from}?access_key=${API_KEY}&symbols=${currency}`;
	const urlEndDate = `${API}${to}?access_key=${API_KEY}&symbols=${currency}`;

	try {
		const startPoint = await axios.get(urlStartDate);
		const endPoint = await axios.get(urlEndDate);

		const historicalRates = [startPoint.data, endPoint.data];

		dispatch(historicalRatesSuccess(currency, historicalRates));
	} catch (error) {
		dispatch(historicalRatesFail(true));
	}
};
