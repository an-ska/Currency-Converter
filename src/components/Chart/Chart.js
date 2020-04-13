import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Chart = chartData => {
	const data = chartData.data;

	return (
		<AreaChart
			width={800}
			height={400}
			data={data}
			margin={{ top: 50, right: 30, left: 30, bottom: 0 }}
		>
			<CartesianGrid strokeDasharray="5 5" />
			<XAxis dataKey="date" padding={{ left: 40, right: 40 }} label="date" />
			<YAxis type="category" dataKey="rate" label="rate" />
			<Tooltip />
			<Area type="monotone" dataKey="rate" stroke="#8884d8" fill="#8884d8" />
		</AreaChart>
	);
};

export default Chart;
