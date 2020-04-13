import React from 'react';
import './CurrencyApp.scss';
import ConverterForm from '../ConverterForm/ConverterForm';
import HistoricalRatesForm from '../HistoricalRatesForm/HistoricalRatesForm';
import HistoricalRatesChart from '../../components/HistoricalRatesChart/HistoricalRatesChart';
import { useSelector } from 'react-redux';
import ConverterResult from '../../components/ConverterResult/ConverterResult';

const CurrencyApp = () => {
	const historicalRates = useSelector(
		state => state.historicalRates.historicalRatesData,
	);
	const resultData = useSelector(state => state.converter.conversionResult);
	const { amount, from, result, to } = resultData;

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
			<HistoricalRatesChart historicalRates={historicalRates.chart} />
		</>
	);
};

export default CurrencyApp;
