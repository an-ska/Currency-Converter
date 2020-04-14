import axios from 'axios';
import * as actionTypes from './actionTypes';
import { latest } from '../../endpoints';
import { convertCurrency } from '../../services/currency/currencyConverter';

export const convertStart = () => ({
	type: actionTypes.CONVERT_START,
});

export const convertSuccess = (converterData, rate) => {
	const { amount, from, to } = converterData;

	return {
		type: actionTypes.CONVERT_SUCCESS,
		amount,
		from,
		to,
		result: convertCurrency(amount, rate),
	};
};

export const convertFail = error => ({
	type: actionTypes.CONVERT_FAIL,
	error,
});

export const convert = converterData => dispatch => {
	dispatch(convertStart());

	const url = `${latest}&base=${converterData.from}&symbols=${converterData.to}`;

	return axios
		.get(url)
		.then(response => {
			const rate = response.data.rates[converterData.to];

			dispatch(convertSuccess(converterData, rate));
		})
		.catch(() => {
			dispatch(convertFail(true));
		});
};
