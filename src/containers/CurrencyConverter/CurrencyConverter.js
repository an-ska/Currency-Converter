import React from 'react';
import './CurrencyConverter.scss';
import Converter from '../../components/Converter/Converter';
import Timeseries from '../../components/Timeseries/Timeseries';

const CurrencyConverter = () => {
	return (
		<>
			<Converter></Converter>
			<Timeseries></Timeseries>
		</>
	);
};

export default CurrencyConverter;
