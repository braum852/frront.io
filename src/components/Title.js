import { useState, useEffect } from 'react'
import Currency from './Currency';
import axios from 'axios';

// APIKEY = 81336ae3e06b60de326369e3f8927b24

function App() {

	const [amount1, setAmount1] = useState(1);
	const [amount2, setAmount2] = useState(1);
	const [currency1, setCurrency1] = useState('AUD')
	const [currency2, setCurrency2] = useState('USD')

	useEffect(() => {
		axios.get('http://data.fixer.io/api/latest?access_key=81336ae3e06b60de326369e3f8927b24')
		.then(res => {
			setRates(res.data.rates)
		})
	}, []);

	
		return (
			<div>
			  <h1>Currency Exchanger</h1>
				<Currency onAmountChange={setAmount1} onCurrencyChange={setCurrency1} currencies={Object.keys(rates)} amount={amount1} currency={currency1}/>
				<Currency onAmountChange={setAmount2} onCurrencyChange={setCurrency2} currencies={['USD']} amount={amount2} currency={currency2}/>
			</div>
		);
}

export default App;