import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../../store/store';
import HistoricalRatesForm from './HistoricalRatesForm';
import DayPickerInput from 'react-day-picker/DayPickerInput';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('HistoricalRatesForm', () => {
	let store = mockStore({});

	const mountProvider = storeState => {
		return mount(
			<Provider store={storeState}>
				<PersistGate loading={null} persistor={persistor}>
					<HistoricalRatesForm />
				</PersistGate>
			</Provider>,
		);
	};

	it('has a form', () => {
		const wrapper = mountProvider(store);

		const form = wrapper.find('form');

		expect(form).toHaveLength(1);
	});

	it('has a select list', () => {
		const wrapper = mountProvider(store);

		const select = wrapper.find('select');

		expect(select).toHaveLength(1);
	});

	it('has two DayPickerInput components', () => {
		const wrapper = mountProvider(store);

		const dayPicker = wrapper.find(DayPickerInput);

		expect(dayPicker).toHaveLength(2);
	});

	it('has a select with proper name prop', () => {
		const wrapper = mountProvider(store);

		const select = wrapper.find('select');

		expect(select.props().name).toBe('currency');
	});

	it('has day pickers with proper name prop', () => {
		const wrapper = mountProvider(store);

		const dayPicker = wrapper.find(DayPickerInput);

		expect(dayPicker.first().props().name).toBe('from');
		expect(dayPicker.at(1).props().name).toBe('to');
	});
});
