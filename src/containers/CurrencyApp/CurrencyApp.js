import React from 'react';
import './CurrencyApp.scss';
import ConverterForm from '../ConverterForm/ConverterForm';
import HistoricalRatesForm from '../HistoricalRatesForm/HistoricalRatesForm';
import HistoricalRatesChart from '../../components/HistoricalRatesChart/HistoricalRatesChart';
import HistoricalRatesResult from '../../components/HistoricalRatesResult/HistoricalRatesResult';
import { useSelector } from 'react-redux';
import ConverterResult from '../../components/ConverterResult/ConverterResult';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import {
	conversionErrorText,
	historicalRatesErrorText,
} from '../../services/errorMessages';

const CurrencyApp = () => {
	const historicalRates = useSelector(
		state => state.historicalRates.historicalRatesData,
	);
	const historicalRatesError = useSelector(state => state.historicalRates.error);
	const { chart } = historicalRates;
	const conversionResult = useSelector(state => state.converter.conversionResult);
	const conversionError = useSelector(state => state.converter.error);
	const { amount, from, result, to } = conversionResult;

	return (
		<>
			<ConverterForm></ConverterForm>
			{conversionError && <ErrorMessage text={conversionErrorText}></ErrorMessage>}

			{result && (
				<ConverterResult
					amount={amount}
					from={from}
					result={result}
					to={to}
				></ConverterResult>
			)}
			<HistoricalRatesForm></HistoricalRatesForm>

			{historicalRatesError && (
				<ErrorMessage text={historicalRatesErrorText}></ErrorMessage>
			)}
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
