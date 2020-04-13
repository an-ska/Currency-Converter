import React from 'react';
import './CurrencyConverter.scss';
import Converter from '../../components/Converter/Converter';
import HistoricalRatesForm from '../../components/HistoricalRatesForm.js/HistoricalRatesForm';
import Chart from '../../components/Chart/Chart';
import { useSelector } from 'react-redux';

const CurrencyConverter = () => {
	const historicalRates = useSelector(
		state => state.historicalRates.historicalRatesData,
	);

	return (
		<>
			<Converter></Converter>
			<HistoricalRatesForm></HistoricalRatesForm>
			<Chart data={historicalRates.chart} />
		</>
	);
};

export default CurrencyConverter;
