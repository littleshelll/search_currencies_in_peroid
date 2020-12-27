import React, { useState } from 'react'

import SymbolSelector from './SymbolSelector';
import DateRangeSelection from './DateRangeSelection';

import axios from 'axios';

export default function QueryForm(props) {

	const BASE_API_URL = "https://api.exchangeratesapi.io/history";

	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);
	const [currency1, setCurrency1] = useState('AUD');
	const [currency2, setCurrency2] = useState('AUD');

	const onCurrencyChange1 = (currency) =>{
		setCurrency1(currency);
	}

	const onCurrencyChange2 = (currency) =>{
		setCurrency2(currency);
	}

	const on_startDateChange = (date) => {
		
		setStartDate(date);
	}

	const on_endDateChange = (date) => {
		
		setStartDate(date);
	}

	const on_searchClick = () => {

		let _symbols = [currency1, currency2].join(",");
		
		axios.get(BASE_API_URL, {
			params:{
				start_at: startDate,
				end_at: endDate,
				symbols: _symbols
			}
		})
			.then(response => {
				on_result(response.data.rates, currency1, currency2)
				
			}).catch(err => {
				console.log(err);
			})
	}

	const on_result = (data, curr1, curr2) => {
		
		props.onDataReturn(data, curr1, curr2)
	}

	const on_dateRangeSelectionInit = (start, end) => {
		setStartDate(start);
		setEndDate(end);
	}

	return (
		<React.Fragment>
		
		<div className="row">
			<div className="col-md-6 col-sm-12">
				<label>Currency 1: </label>
				<SymbolSelector id="symbolSelector1" onCurrencyChange={onCurrencyChange1}/>
			</div>

			<div className="col-md-6 col-sm-12">
				<label>Currency 2: </label>
				<SymbolSelector id="symbolSelector2" onCurrencyChange={onCurrencyChange2}/>
			</div>
		</div>

		<div className="row">
			<div className="col-md-12">
				<DateRangeSelection
					onDateRangeSelectionInit={on_dateRangeSelectionInit}
					onStartDateChange={on_startDateChange}
					onEndDateChange={on_endDateChange}
				/>
			</div>
		</div>

		<div className="row">
			<div className="col">
				<button className="btn btn-primary" onClick={on_searchClick}>Search</button>
			</div>
		</div>
		</React.Fragment>
	)
}
