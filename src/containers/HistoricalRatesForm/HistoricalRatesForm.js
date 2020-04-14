import React, { useState } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { useDispatch } from 'react-redux';
import { showHistoricalRates } from '../../store/actions/historicalRates';
import {
	formatDate,
	getTodayDate,
	getHistoricalRatesStartDate,
} from '../../services/dates';
import getCurrencySelectOptions from '../../services/currency/getCurrencySelectOptions';

const HistoricalRatesForm = () => {
	const [dateRange, setDateRange] = useState({
		from: '',
		to: '',
	});
	const [currency, setCurrency] = useState('');

	const dispatch = useDispatch();
	const onShowHistoricalRates = (from, to, currency) =>
		dispatch(showHistoricalRates(from, to, currency));

	const handleDateFromChange = from => {
		setDateRange({ ...dateRange, from });
	};

	const handleDateToChange = to => {
		setDateRange({ ...dateRange, to });
	};

	const handleCurrencyChange = event => {
		setCurrency(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();

		onShowHistoricalRates(
			formatDate(dateRange.from),
			formatDate(dateRange.to),
			currency,
		);
	};

	const getFormattedValue = date => (date ? formatDate(date) : '');

	const isButtonDisabled = () => !dateRange.from || !dateRange.to || !currency;

	let { from, to } = dateRange;
	const modifiers = { start: from, end: to };

	return (
		<section className="container">
			<form onSubmit={handleSubmit}>
				<div className="form-field">
					<label htmlFor="currency">Get historical rates of currency:</label>
					<select name="currency" value={currency} onChange={handleCurrencyChange}>
						{getCurrencySelectOptions}
					</select>
				</div>
				<div className="form-field">
					<label htmlFor="from">Start date:</label>
					<DayPickerInput
						name="from"
						placeholder=""
						value={getFormattedValue(from)}
						dayPickerProps={{
							selectedDays: [from, { from, to }],
							disabledDays: {
								before: getHistoricalRatesStartDate,
								after: getTodayDate,
							},
							modifiers,
							numberOfMonths: 2,
							onDayClick: () => to.getInput().focus(),
						}}
						onDayChange={handleDateFromChange}
					/>
				</div>
				<div className="form-field">
					<label htmlFor="to">End date:</label>
					<DayPickerInput
						name="to"
						placeholder=""
						ref={el => (to = el)}
						value={getFormattedValue(to)}
						dayPickerProps={{
							selectedDays: [from, { from, to }],
							disabledDays: { before: from, after: getTodayDate },
							modifiers,
							month: from,
							numberOfMonths: 2,
						}}
						onDayChange={handleDateToChange}
					/>
				</div>
				<button disabled={isButtonDisabled()}>SUBMIT</button>
			</form>
		</section>
	);
};

export default HistoricalRatesForm;
