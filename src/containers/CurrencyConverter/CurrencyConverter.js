import React from 'react';
import './CurrencyConverter.scss';
import Converter from '../../components/Converter/Converter';
import HistoricalRatesForm from '../../components/HistoricalRatesForm.js/HistoricalRatesForm';
import Chart from '../../components/Chart/Chart';
import { useSelector } from 'react-redux';

const CurrencyConverter = () => {
	const chartData = useSelector(state => state.timeChanges.timeChangesData);

	return (
		<>
			<Converter></Converter>
			<HistoricalRatesForm></HistoricalRatesForm>
			<Chart data={chartData.fetchedData} />
		</>
	);
};

export default CurrencyConverter;
