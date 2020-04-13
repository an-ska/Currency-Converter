import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';

const app = (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
