import React from 'react';
import './CurrencyApp.scss';
import ConverterForm from '../ConverterForm/ConverterForm';
import HistoricalRatesForm from '../HistoricalRatesForm/HistoricalRatesForm';
import HistoricalRatesChart from '../../components/HistoricalRatesChart/HistoricalRatesChart';
import HistoricalRatesResult from '../../components/HistoricalRatesResult/HistoricalRatesResult';
import { useSelector } from 'react-redux';
import ConverterResult from '../../components/ConverterResult/ConverterResult';

const CurrencyApp = () => {
	const historicalRates = useSelector(
		state => state.historicalRates.historicalRatesData,
	);
	const { chart } = historicalRates;
	const conversionResult = useSelector(state => state.converter.conversionResult);
	const { amount, from, result, to } = conversionResult;

	return (
		<>
			<ConverterForm></ConverterForm>
			{result && (
				<ConverterResult
					amount={amount}
					from={from}
					result={result}
					to={to}
				></ConverterResult>
			)}
			<HistoricalRatesForm></HistoricalRatesForm>
			{chart.length > 0 && (
				<>
					<HistoricalRatesChart historicalRates={chart} />
					<HistoricalRatesResult historicalRates={historicalRates} />
				</>
			)}
		</>
	);
};

export default CurrencyApp;
