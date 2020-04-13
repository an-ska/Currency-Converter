import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as converter } from './reducers/converter';
import { reducer as historicalRates } from './reducers/historicalRates';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage: storage,
	whitelist: ['converter', 'historicalRates'],
};
const rootReducer = combineReducers({ converter, historicalRates });
const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(thunk)),
);
const persistor = persistStore(store);

export { persistor, store };
