import React, { useState } from 'react';
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

	const isButtonDisabled =
		!converterData.amount || !converterData.from || !converterData.to;

	return (
		<section className="container">
			<form onSubmit={handleSubmit}>
				<div className="form-field">
					<label htmlFor="amount">
						Amount (only number with decimal to 2 places allowed):
					</label>
					<input
						type="number"
						min="0"
						step="0.01"
						name="amount"
						value={converterData.amount}
						onChange={handleChange}
					></input>
				</div>
				<div className="form-field">
					<label htmlFor="from">Convert from currency:</label>
					{/*
          <select "name="from" value={converterData.from} onChange={handleChange}>
            {currencyOptions}
          </select>
        */}
					<select name="from" value={converterData.from} onChange={handleChange}>
						<option value="EUR">EUR: EURO</option>
					</select>
				</div>
				<div className="form-field">
					<label htmlFor="to">Convert to currency:</label>
					<select name="to" value={converterData.to} onChange={handleChange}>
						{getCurrencySelectOptions}
					</select>
				</div>
				<button disabled={isButtonDisabled}>SUBMIT</button>
			</form>
		</section>
	);
};

export default ConverterForm;
