import React, { useState, useEffect} from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

export default function DateRangeSelection(props) {
	const today = new Date();
	const [startDate, setStartDate] = useState(today);
	const [endDate, setEndDate] = useState(today);

	const formatDate = (date) =>{
		var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) 
			month = '0' + month;
		if (day.length < 2) 
			day = '0' + day;

		return [year, month, day].join('-');
	}

	const on_startDateChange = (startDate) => {
		setStartDate(startDate)
		
		if(props.onStartDateChange) {
			props.onStartDateChange(formatDate(startDate));
		}
		
	}

	const on_endDateChange = (endDate) => {
		setEndDate(endDate)
		
		if(props.onEndDateChange) {
			props.onEndDateChange(formatDate(endDate));
		}
		
	}

	useEffect(() => {
		props.onDateRangeSelectionInit(formatDate(startDate), formatDate(endDate));
	});

	return (
		<React.Fragment>
		<div className="row">
			<div className="col-md-12">
				<div className="row">
					<div className="col-md-2">
						<label>Start Date: </label>
					</div>

					<div className="col-md-10">
						<DatePicker
							className="form-control"
							selected={startDate}
							onChange={date => on_startDateChange(date)}
							selectsStart
							startDate={startDate}
							endDate={endDate}
							maxDate={today}
						/>
					</div>
				</div>
			</div>

			<div className="col-md-12">
				<div className="row">
					<div className="col-md-2">
						<label>End Date: </label>
					</div>
					
					<div className="col-md-10">
						<DatePicker
							className="form-control"
							selected={endDate}
							onChange={date => on_endDateChange(date)}
							selectsEnd
							startDate={startDate}
							endDate={endDate}
							maxDate={today}
						/>
					</div>
				</div>
			</div>

			
		</div>

		<div className="row">
			
		</div>
		</React.Fragment>
	)
}
