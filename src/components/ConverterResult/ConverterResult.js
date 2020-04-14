import React from 'react';
import PropTypes from 'prop-types';

const ConverterResult = ({ amount, from, result, to }) => (
	<section className="container">
		{amount} {from} is {result} {to}
	</section>
);

ConverterResult.propTypes = {
	amount: PropTypes.string.isRequired,
	from: PropTypes.string.isRequired,
	result: PropTypes.number.isRequired,
	to: PropTypes.string.isRequired,
};

export default ConverterResult;
