import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../../store/store';
import CurrencyApp from './CurrencyApp';
import ConverterForm from '../ConverterForm/ConverterForm';
import HistoricalRatesForm from '../HistoricalRatesForm/HistoricalRatesForm';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Loader from '../../components/Loader/Loader';
import ConverterResult from '../../components/ConverterResult/ConverterResult';
import HistoricalRatesChart from '../../components/HistoricalRatesChart/HistoricalRatesChart';
import HistoricalRatesResult from '../../components/HistoricalRatesResult/HistoricalRatesResult';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('CurrencyApp', () => {
	let store;

	beforeEach(() => {
		store = mockStore({
			converter: {
				error: false,
				loading: false,
				conversionResult: {
					amount: null,
					from: null,
					to: null,
					result: null,
				},
			},
			historicalRates: {
				error: false,
				loading: false,
				historicalRatesData: {
					chart: [],
					currency: null,
				},
			},
		});
	});

	const mountProvider = storeState => {
		return mount(
			<Provider store={storeState}>
				<PersistGate loading={null} persistor={persistor}>
					<CurrencyApp />
				</PersistGate>
			</Provider>,
		);
	};

	it('renders ConverterForm component', () => {
		const wrapper = mountProvider(store);

		const converterForm = wrapper.find(ConverterForm);

		expect(converterForm).toHaveLength(1);
	});

	it('renders HistoricalRatesForm component', () => {
		const wrapper = mountProvider(store);

		const historicalRatesForm = wrapper.find(HistoricalRatesForm);

		expect(historicalRatesForm).toHaveLength(1);
	});

	it('passes text prop to ErrorMessage component when fetching conversion data fails', () => {
		store = mockStore({
			converter: {
				error: true,
				loading: false,
				conversionResult: {
					amount: null,
					from: null,
					to: null,
					result: null,
				},
			},
			historicalRates: {
				error: false,
				loading: false,
				historicalRatesData: {
					chart: [],
					currency: null,
				},
			},
		});

		const textProp = 'Something went wrong. Conversion data cannot be shown.';
		const wrapper = mountProvider(store);

		const errorMessage = wrapper.find(ErrorMessage);

		expect(errorMessage.props().text).toBe(textProp);
	});

	it('passes text prop to ErrorMessage component when fetching historical rates data fails', () => {
		store = mockStore({
			converter: {
				error: false,
				loading: false,
				conversionResult: {
					amount: null,
					from: null,
					to: null,
					result: null,
				},
			},
			historicalRates: {
				error: true,
				loading: false,
				historicalRatesData: {
					chart: [],
					currency: null,
				},
			},
		});

		const textProp = 'Something went wrong. Historical rates data cannot be shown.';
		const wrapper = mountProvider(store);

		const errorMessage = wrapper.find(ErrorMessage);

		expect(errorMessage.props().text).toBe(textProp);
	});

	it('passes text prop to Loader component when conversion data is loading', () => {
		store = mockStore({
			converter: {
				error: false,
				loading: true,
				conversionResult: {
					amount: null,
					from: null,
					to: null,
					result: null,
				},
			},
			historicalRates: {
				error: false,
				loading: false,
				historicalRatesData: {
					chart: [],
					currency: null,
				},
			},
		});

		const textProp = 'Loading conversion data...';
		const wrapper = mountProvider(store);

		const loader = wrapper.find(Loader);

		expect(loader.props().text).toBe(textProp);
	});

	it('passes text prop to Loader component when conversion data is loading', () => {
		store = mockStore({
			converter: {
				error: false,
				loading: false,
				conversionResult: {
					amount: null,
					from: null,
					to: null,
					result: null,
				},
			},
			historicalRates: {
				error: false,
				loading: true,
				historicalRatesData: {
					chart: [],
					currency: null,
				},
			},
		});

		const textProp = 'Loading historical rates data...';
		const wrapper = mountProvider(store);

		const loader = wrapper.find(Loader);

		expect(loader.props().text).toBe(textProp);
	});

	it('renders ConverterResult component when fetching conversion data succeeds', () => {
		store = mockStore({
			converter: {
				error: false,
				loading: false,
				conversionResult: {
					amount: '2',
					from: 'EUR',
					to: 'USD',
					result: '23',
				},
			},
			historicalRates: {
				error: false,
				loading: true,
				historicalRatesData: {
					chart: [],
					currency: null,
				},
			},
		});
		const wrapper = mountProvider(store);

		const converterResult = wrapper.find(ConverterResult);

		expect(converterResult).toHaveLength(1);
	});

	it('renders HistoricalRatesChart and HistoricalRatesResult component when fetching chart data succeeds', () => {
		store = mockStore({
			converter: {
				error: false,
				loading: false,
				conversionResult: {
					amount: null,
					from: null,
					to: null,
					result: null,
				},
			},
			historicalRates: {
				error: false,
				loading: true,
				historicalRatesData: {
					chart: [{ chartData: 'data' }],
					currency: null,
				},
			},
		});
		const wrapper = mountProvider(store);

		const historicalRatesChart = wrapper.find(HistoricalRatesChart);
		const historicalRatesResult = wrapper.find(HistoricalRatesResult);

		expect(historicalRatesChart).toHaveLength(1);
		expect(historicalRatesResult).toHaveLength(1);
	});
});
