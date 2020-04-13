import React from 'react';
import currencies from './currencies';

export default Object.entries(currencies).map(([key, value]) => (
	<option key={key} value={key}>
		{key}: {value}
	</option>
));
