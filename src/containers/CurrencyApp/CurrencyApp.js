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
	conversionLoaderText,
	historicalRatesLoaderText,
} from '../../services/messages';
import Loader from '../../components/Loader/Loader';

const CurrencyApp = () => {
	const {
		conversionResult,
		error: conversionError,
		loading: conversionLoading,
	} = useSelector(state => state.converter);
	const { amount, from, result, to } = conversionResult;
	const historicalRates = useSelector(state => state.historicalRates);
	const { chart } = historicalRates.historicalRatesData;

	return (
		<div className="currency-app">
			<div className="currency-app__container">
				<ConverterForm />
				{conversionError && <ErrorMessage text={conversionErrorText} />}
				{conversionLoading && <Loader text={conversionLoaderText} />}
				{result && (
					<ConverterResult
						amount={amount}
						from={from}
						result={result}
						to={to}
					></ConverterResult>
				)}
				<HistoricalRatesForm />
				{historicalRates.loading && <Loader text={historicalRatesLoaderText} />}
				{historicalRates.error && <ErrorMessage text={historicalRatesErrorText} />}
				{chart.length > 0 && (
					<>
						<HistoricalRatesChart historicalRates={chart} />
						<HistoricalRatesResult
							historicalRates={historicalRates.historicalRatesData}
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default CurrencyApp;
