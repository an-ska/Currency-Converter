import React, { useState } from 'react';
import './Converter.scss';
import currencies from '../../currencies';
import { convert } from '../../store/actions/converter';
import { useDispatch, useSelector } from 'react-redux';

const Converter = () => {
	const currencyOptions = Object.entries(currencies).map(([key, value]) => (
		<option key={key} value={key}>
			{key}: {value}
		</option>
	));

	const dispatch = useDispatch();
	const [converterData, setConverterData] = useState({
		amount: '',
		from: 'EUR',
		to: '',
	});

	const onConvert = converterData => dispatch(convert(converterData));
	const conversionResult = useSelector(state => state.converter.conversionResult);

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
					{currencyOptions}
				</select>
				<button>SUBMIT</button>
			</form>
			<div>
				{conversionResult.amount} {conversionResult.from} is{' '}
				{conversionResult.result} {conversionResult.to}
			</div>
		</>
	);
};

export default Converter;
