
import { useState } from "react";
import QueryForm from './components/QueryForm';
import ResultArea from './components/ResultArea';

import './styles/App.css';

function App() {
	const [ratesResult, setRatesResult] = useState(null);
	const [currency1, setCurrency1] = useState(null);
	const [currency2, setCurrency2] = useState(null);

	function on_dataReturn(d, c1, c2) {
		setRatesResult(d);
		setCurrency1(c1);
		setCurrency2(c2);
	}

	return (
		<div className="App container">
			<div className="row">
				<div className="col">
					<QueryForm onDataReturn={on_dataReturn}/>
				</div>
			</div>

			<div className="row">
				<div className="col">
					<ResultArea data={ratesResult} currency1={currency1} currency2={currency2}/>	
				</div>
			</div>
		</div>
  );
}

export default App;
