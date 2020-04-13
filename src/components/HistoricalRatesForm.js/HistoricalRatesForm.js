import React, { useState } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { useDispatch } from 'react-redux';
import { showHistoricalRates } from '../../store/actions/timeChanges';
import { formatDate, getTodayDate } from '../../services/dates';

const HistoricalRatesForm = () => {
	const [dateRange, setDateRange] = useState({
		from: '',
		to: '',
	});

	const dispatch = useDispatch();
	const onShowHistoricalRates = (from, to) =>
		dispatch(showHistoricalRates(from, to));

	const handleDateFromChange = from => {
		setDateRange({ ...dateRange, from });
	};

	const handleDateToChange = to => {
		setDateRange({ ...dateRange, to });
	};

	const handleSubmit = event => {
		event.preventDefault();

		onShowHistoricalRates(formatDate(dateRange.from), formatDate(dateRange.to));
	};

	const getFormattedValue = date => (date ? formatDate(date) : '');

	let { from, to } = dateRange;
	const modifiers = { start: from, end: to };

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="from">From:</label>
			<DayPickerInput
				name="from"
				placeholder=""
				value={getFormattedValue(from)}
				dayPickerProps={{
					selectedDays: [from, { from, to }],
					disabledDays: { before: new Date(1999, 1, 1), after: to },
					modifiers,
					numberOfMonths: 2,
					onDayClick: () => to.getInput().focus(),
				}}
				onDayChange={handleDateFromChange}
			/>{' '}
			<label htmlFor="to">To:</label>
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
			<button>SUBMIT</button>
		</form>
	);
};

export default HistoricalRatesForm;
