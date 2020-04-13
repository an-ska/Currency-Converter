import React, { useState } from 'react';
import './ConverterForm.scss';
import { convert } from '../../store/actions/converter';
import { useDispatch } from 'react-redux';

import getCurrencySelectOptions from '../../services/currency/getCurrencySelectOptions';

const ConverterForm = () => {
	const dispatch = useDispatch();
	const [converterData, setConverterData] = useState({
		amount: '',
		from: 'EUR',
		to: '',
	});

	const onConvert = converterData => dispatch(convert(converterData));

	const handleChange = event => {
		const { name, value } = event.target;

		setConverterData({ ...converterData, [name]: value });
	};

	const handleSubmit = event => {
		event.preventDefault();

		onConvert(converterData);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor="convert_amount">Amount:</label>
				<input
					id="convert_amount"
					type="number"
					name="amount"
					value={converterData.amount}
					onChange={handleChange}
				></input>
				<label htmlFor="convert_from">Convert from:</label>
				{/*
          <select
            id="convert_from"
            name="from"
            value={converterData.from}
            onChange={handleChange}
          >
            {currencyOptions}
          </select>
        */}
				<span>EUR</span>
				<label htmlFor="convert_to">Convert to:</label>
				<select
					id="convert_to"
					name="to"
					value={converterData.to}
					onChange={handleChange}
				>
					{getCurrencySelectOptions}
				</select>
				<button>SUBMIT</button>
			</form>
		</>
	);
};

export default ConverterForm;
