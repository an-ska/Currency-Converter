import * as actionTypes from '../actions/actionTypes';

export const initialState = {
	error: null,
	loading: false,
	conversionResult: {
		amount: null,
		from: null,
		to: null,
		result: null,
	},
};

const convertStart = state => {
	return {
		...state,
		error: null,
		loading: true,
	};
};

const convertSuccess = (state, action) => {
	return {
		...state,
		loading: false,
		conversionResult: {
			amount: action.amount,
			from: action.from,
			to: action.to,
			result: action.result,
		},
	};
};

const convertFail = (state, action) => {
	return {
		...state,
		error: action.error,
		loading: false,
	};
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.CONVERT_START:
			return convertStart(state);
		case actionTypes.CONVERT_SUCCESS:
			return convertSuccess(state, action);
		case actionTypes.CONVERT_FAIL:
			return convertFail(state, action);
		default:
			return state;
	}
};
