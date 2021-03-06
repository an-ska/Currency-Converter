import React from 'react';
import './ErrorMessage.scss';
import PropTypes from 'prop-types';

const ErrorMessage = ({ text }) => <div className="error-message">{text}</div>;

ErrorMessage.propTypes = {
	text: PropTypes.string.isRequired,
};

export default ErrorMessage;
