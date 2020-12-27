import React from 'react';

export default function SymbolSelector(props) {
	let symbols = [
		"CAD",
		"HKD",
		"ISK",
		"PHP",
		"DKK",
		"HUF",
		"CZK",
		"AUD",
		"RON",
		"SEK",
		"IDR",
		"INR",
		"BRL",
		"RUB",
		"HRK",
		"JPY",
		"THB",
		"CHF",
		"SGD",
		"PLN",
		"BGN",
		"TRY",
		"CNY",
		"NOK",
		"NZD",
		"ZAR",
		"USD",
		"MXN",
		"ILS",
		"GBP",
		"KRW",
		"MYR"
	];

	symbols.sort();
	const onChange = (e)=>{
		props.onCurrencyChange(e.target.value)
	}



	return (
		<span id={props.id}>
			<select onChange={onChange} className="form-control"> 
				{symbols.map((v,i)=>{
					return (
						<option value={v} key={i}>{v}</option>
					)
				})}
			</select>
		</span>
	)
}
