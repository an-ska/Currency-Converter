import React from 'react';
import PropTypes from 'prop-types';

const HistoricalRatesResult = ({ historicalRates }) => (
	<section className="container">
		<div>Historical rates for currency: {historicalRates.currency}</div>
		{historicalRates.chart.map(data => (
			<div key={data.date}>
				<span>{data.date}</span> : <span>{data.rate}</span>
			</div>
		))}
	</section>
);

HistoricalRatesResult.propTypes = {
	historicalRates: PropTypes.object.isRequired,
};

export default HistoricalRatesResult;
