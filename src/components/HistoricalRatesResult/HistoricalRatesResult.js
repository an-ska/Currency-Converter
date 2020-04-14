import React from 'react';
import { calculateCurrencyDifference } from '../../services/currency/currencyConverter';
import PropTypes from 'prop-types';

const HistoricalRatesResult = ({ historicalRates }) => {
	const rates = historicalRates.chart.map(data => data.rate);
	const currencyDifference = calculateCurrencyDifference(rates[0], rates[1]);

	return (
		<section className="container">
			<p className="container__text">
				Historical rates of currency: {historicalRates.currency}
			</p>
			{historicalRates.chart.map((data, index) => (
				<p key={index} className="container__text">
					<span>{data.date}</span>: <span>{data.rate}</span>
				</p>
			))}
			<p className="container__text">
				{currencyDifference > 0 ? 'Rate decreased by: ' : 'Rate increased by: '}
				{Math.abs(currencyDifference)}
			</p>
		</section>
	);
};

HistoricalRatesResult.propTypes = {
	historicalRates: PropTypes.object.isRequired,
};

export default HistoricalRatesResult;
