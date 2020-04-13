import * as actionTypes from '../actions/actionTypes';

export const initialState = {
	error: null,
	loading: false,
	timeChangesData: {
		fetchedData: [],
		from: null,
		to: null,
	},
};

const timeChangesStart = state => {
	return {
		...state,
		loading: true,
	};
};

const timeChangesSuccess = (state, action) => {
	return {
		...state,
		loading: false,
		timeChangesData: {
			fetchedData: action.timeChanges,
			from: action.from,
			to: action.to,
		},
	};
};

const timeChangesFail = (state, action) => {
	return {
		...state,
		error: action.error,
		loading: false,
	};
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.TIME_CHANGES_START:
			return timeChangesStart(state);
		case actionTypes.TIME_CHANGES_SUCCESS:
			return timeChangesSuccess(state, action);
		case actionTypes.TIME_CHANGES_FAIL:
			return timeChangesFail(state, action);
		default:
			return state;
	}
};
