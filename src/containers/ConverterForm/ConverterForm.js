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

	const isButtonDisabled = () =>
		!converterData.amount || !converterData.from || !converterData.to;

	return (
		<section className="container">
			<form onSubmit={handleSubmit}>
				<div className="formField">
					<label htmlFor="convert_amount">Amount:</label>
					<input
						id="convert_amount"
						type="number"
						name="amount"
						value={converterData.amount}
						onChange={handleChange}
					></input>
				</div>
				<div className="formField">
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
					<select
						id="convert_from"
						name="from"
						value={converterData.from}
						onChange={handleChange}
					>
						<option>EUR: EURO</option>
					</select>
				</div>
				<div className="formField">
					<label htmlFor="convert_to">Convert to:</label>
					<select
						id="convert_to"
						name="to"
						value={converterData.to}
						onChange={handleChange}
					>
						{getCurrencySelectOptions}
					</select>
				</div>
				<button disabled={isButtonDisabled()}>SUBMIT</button>
			</form>
		</section>
	);
};

export default ConverterForm;
