import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import PropTypes from 'prop-types';

const HistoricalRatesChart = ({ historicalRates }) => (
	<AreaChart
		width={800}
		height={400}
		data={historicalRates}
		margin={{ top: 50, right: 30, left: 30, bottom: 0 }}
	>
		<CartesianGrid strokeDasharray="5 5" />
		<XAxis dataKey="date" padding={{ left: 40, right: 40 }} label="date" />
		<YAxis type="category" dataKey="rate" label="rate" />
		<Tooltip />
		<Area type="monotone" dataKey="rate" stroke="#8884d8" fill="#8884d8" />
	</AreaChart>
);

HistoricalRatesChart.propTypes = {
	historicalRates: PropTypes.array.isRequired,
};

export default HistoricalRatesChart;
