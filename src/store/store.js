import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as converter } from './reducers/converter';
import { reducer as timeChanges } from './reducers/timeChanges';

const rootReducer = combineReducers({ converter, timeChanges });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
