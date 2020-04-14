import React from 'react';
import './Loader.scss';
import PropTypes from 'prop-types';

const Loader = ({ text }) => <div className="loader">{text}</div>;

Loader.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Loader;
