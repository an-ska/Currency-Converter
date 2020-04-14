import React from 'react';
import './HistoricalRatesChart.scss';
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

const HistoricalRatesChart = ({ historicalRates }) => (
	<section className="container">
		<ResponsiveContainer height={320}>
			<AreaChart
				data={historicalRates}
				margin={{ top: 50, right: 30, left: 30, bottom: 0 }}
			>
				<CartesianGrid strokeDasharray="5 5" />
				<XAxis dataKey="date" padding={{ left: 40, right: 40 }} label="date" />
				<YAxis type="category" dataKey="rate" label="rate" />
				<Tooltip />
				<Area type="monotone" dataKey="rate" stroke="#203145" fill="#203145" />
			</AreaChart>
		</ResponsiveContainer>
	</section>
);

HistoricalRatesChart.propTypes = {
	historicalRates: PropTypes.array.isRequired,
};

export default HistoricalRatesChart;
