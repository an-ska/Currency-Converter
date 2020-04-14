import React from 'react';
import PropTypes from 'prop-types';

const HistoricalRatesResult = ({ historicalRates }) => (
	<section className="container">
		<p className="container__text">
			Historical rates for currency: {historicalRates.currency}
		</p>
		{historicalRates.chart.map(data => (
			<p key={data.date} className="container__text">
				<span>{data.date}</span>: <span>{data.rate}</span>
			</p>
		))}
	</section>
);

HistoricalRatesResult.propTypes = {
	historicalRates: PropTypes.object.isRequired,
};

export default HistoricalRatesResult;
