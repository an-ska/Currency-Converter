import React from 'react';
import './CurrencyConverter.scss';
import Converter from '../../components/Converter/Converter';
import Timeseries from '../../components/Timeseries/Timeseries';
import Chart from '../../components/Chart/Chart';
import { useSelector } from 'react-redux';

const CurrencyConverter = () => {
	const chartData = useSelector(state => state.timeChanges.timeChangesData);

	return (
		<>
			<Converter></Converter>
			<Timeseries></Timeseries>
			<Chart data={chartData.fetchedData} />
		</>
	);
};

export default CurrencyConverter;
