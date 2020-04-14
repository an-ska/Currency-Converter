import React from 'react';
import PropTypes from 'prop-types';

const ConverterResult = ({ amount, from, result, to }) => (
	<section className="container">
		<p className="container__text">Conversion result:</p>
		<p className="container__text">
			{amount} {from} is {result} {to}
		</p>
	</section>
);

ConverterResult.propTypes = {
	amount: PropTypes.string.isRequired,
	from: PropTypes.string.isRequired,
	result: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};

export default ConverterResult;
