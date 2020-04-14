import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../../store/store';
import ConverterForm from './ConverterForm';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('ConverterForm', () => {
	let store = mockStore({});

	const mountProvider = storeState => {
		return mount(
			<Provider store={storeState}>
				<PersistGate loading={null} persistor={persistor}>
					<ConverterForm />
				</PersistGate>
			</Provider>,
		);
	};

	it('has a form', () => {
		const wrapper = mountProvider(store);

		const form = wrapper.find('form');

		expect(form).toHaveLength(1);
	});

	it('has a input', () => {
		const wrapper = mountProvider(store);

		const input = wrapper.find('input');

		expect(input).toHaveLength(1);
		expect(input.props().name).toBe('amount');
	});

	it('has two select lists', () => {
		const wrapper = mountProvider(store);

		const select = wrapper.find('select');

		expect(select).toHaveLength(2);
	});

	it('has a input with amount name prop', () => {
		const wrapper = mountProvider(store);

		const input = wrapper.find('input');

		expect(input.props().name).toBe('amount');
	});

	it('has a select lists with proper name prop', () => {
		const wrapper = mountProvider(store);

		const select = wrapper.find('select');

		expect(select.first().props().name).toBe('from');
		expect(select.at(1).props().name).toBe('to');
	});
});
