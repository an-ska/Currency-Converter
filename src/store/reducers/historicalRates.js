import * as actionTypes from '../actions/actionTypes';

export const initialState = {
	error: null,
	loading: false,
	historicalRatesData: {
		chart: [],
		currency: null,
	},
};

const historicalRatesStart = state => ({
	...state,
	error: null,
	loading: true,
});

const historicalRatesSuccess = (state, action) => ({
	...state,
	loading: false,
	historicalRatesData: {
		chart: action.historicalRates,
		currency: action.currency,
	},
});

const historicalRatesFail = (state, action) => ({
	...state,
	error: action.error,
	loading: false,
});

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.HISTORICAL_RATES_START:
			return historicalRatesStart(state);
		case actionTypes.HISTORICAL_RATES_SUCCESS:
			return historicalRatesSuccess(state, action);
		case actionTypes.HISTORICAL_RATES_FAIL:
			return historicalRatesFail(state, action);
		default:
			return state;
	}
};
