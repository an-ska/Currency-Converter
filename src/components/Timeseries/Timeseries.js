import React, { useState } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { showTimeChanges } from '../../store/actions/timeChanges';

const Timeseries = () => {
	const [dateRange, setDateRange] = useState({
		from: '',
		to: '',
	});

	const dispatch = useDispatch();
	const onShowTimeChange = (formattedFrom, formattedTo) =>
		dispatch(showTimeChanges(formattedFrom, formattedTo));

	const handleFromChange = from => {
		setDateRange({ ...dateRange, from });
	};

	const handleToChange = to => {
		setDateRange({ ...dateRange, to });
	};

	const handleSubmit = event => {
		event.preventDefault();

		const formattedFrom = moment(dateRange.from).format('YYYY-MM-DD');
		const formattedTo = moment(dateRange.to).format('YYYY-MM-DD');
		// onShowTimeChange(formattedFrom, formattedTo);
	};

	const getFormattedValue = value =>
		value ? moment(value).format('YYYY-MM-DD') : '';

	let { from, to } = dateRange;
	const modifiers = { start: from, end: to };
	return (
		<>
			<form onSubmit={handleSubmit}>
				<span className="InputFromTo">
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
						onDayChange={handleFromChange}
					/>
				</span>{' '}
				—{' '}
				<span className="InputFromTo-to">
					<label htmlFor="to">To:</label>
					<DayPickerInput
						name="to"
						placeholder=""
						ref={el => (to = el)}
						value={getFormattedValue(to)}
						dayPickerProps={{
							selectedDays: [from, { from, to }],
							disabledDays: { before: from, after: new Date() },
							modifiers,
							month: from,
							numberOfMonths: 2,
						}}
						onDayChange={handleToChange}
					/>
				</span>
				<button>SUBMIT</button>
			</form>
		</>
	);
};

export default Timeseries;
