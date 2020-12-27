import React from 'react';

import {Line} from 'react-chartjs-2';

export default function ResultArea(props) {
	let sortedData;
	const data = props.data;	
	const currency1 = props.currency1;
	const currency2 = props.currency2;

	function genChart() {
		let chartData = {
			labels : [],
			datasets:[
				{
					label: currency1,
					filled: false,
					borderColor: "green",
					data:[]
				},
				{
					label: currency2,
					filled: false,
					borderColor: "blue",
					data:[]
				}
			]
		};

		sortedData.map((v) => {
			let _dataRow = data[v];

			chartData.labels.push(v);
			chartData.datasets[0].data.push(_dataRow[currency1]);
			chartData.datasets[1].data.push(_dataRow[currency2]);
			return null
		})

		return (<div> <Line data={chartData}/> </div>)
	}

	function genTable() {
		sortedData = Object.keys(data).sort();

		return(
			<div>
				<div>
					{genChart()}
				</div>
			
				<div className="table-responsive">
					<table className="table table-striped table-hover">
						<tbody>
							
							<tr>
								<th>Date</th>
								<th>{currency1}</th>
								<th>{currency2}</th>
							</tr>
							
							{
								sortedData.map((v,i) => {
									let _dataRow = data[v];

									return (
										getTableRow(i, v, _dataRow[currency1], _dataRow[currency2])
									)
								})
							}

						</tbody>
					</table>
				</div>
			</div>
		)
	}

	function getTableRow($key,$date, $currency1, $currency2) {
		let _cur1Rounded = Number($currency1).toFixed(2);
		let _cur2Rounded = Number($currency2).toFixed(2);
		
		return (
			<tr key={$key}>
				<td>{$date}</td>
				<td>{_cur1Rounded}</td>
				<td>{_cur2Rounded}</td>
			</tr>
		)
	}

	if(data === null) {
		return (<div></div>);

	} else if (Object.keys(data).length === 0) {
		return (
			<div className="alert alert-warning alert-dismissible fade show">
    			It seems no any result with the given information, try selecting a longer peroid...
			</div>
			
		)

	} else {
		return (
			<div>	
				{genTable()}
			</div>
		)
	}

	
}
