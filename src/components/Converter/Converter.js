import React from 'react';
import './Converter.scss';
import currencies from '../../currencies';

const Converter = () => {
	const currencyOptions = Object.entries(currencies).map(([key, value]) => (
		<option key={key} value={key}>
			{key}: {value}
		</option>
	));

	const handleSubmit = async event => {
		event.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="convert_amount">Amount:</label>
			<input id="convert_amount" type="number"></input>
			<label htmlFor="convert_from">Convert from:</label>
			<select id="convert_from">{currencyOptions}</select>
			<label htmlFor="convert_to">Convert to:</label>
			<select id="convert_to">{currencyOptions}</select>
			<button>SUBMIT</button>
		</form>
	);
};

export default Converter;
