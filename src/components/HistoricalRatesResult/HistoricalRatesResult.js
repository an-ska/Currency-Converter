import React from 'react';
import PropTypes from 'prop-types';

const HistoricalRatesResult = ({ historicalRates }) => (
	<>
		<div>Historical rates for currency: {historicalRates.currency}</div>
		{historicalRates.chart.map(data => (
			<div key={data.date}>
				<span>{data.date}</span> : <span>{data.rate}</span>
			</div>
		))}
	</>
);

HistoricalRatesResult.propTypes = {
	historicalRates: PropTypes.object.isRequired,
};
export default HistoricalRatesResult;
