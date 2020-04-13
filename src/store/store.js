import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as converter } from './reducers/converter';
import { reducer as historicalRates } from './reducers/historicalRates';

const rootReducer = combineReducers({ converter, historicalRates });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
