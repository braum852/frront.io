import { useState, useEffect } from 'react'
import Currency from './currency/Currency';
import axios from 'axios';

// APIKEY = 81336ae3e06b60de326369e3f8927b24

function App() {

	const [amount1, setAmount1] = useState(1);
	const [amount2, setAmount2] = useState(1);
	const [currency1, setCurrency1] = useState('AUD')
	const [currency2, setCurrency2] = useState('USD')
	const [rates, setRates] = useState([])

	useEffect(() => {
		axios.get('http://data.fixer.io/api/latest?access_key=81336ae3e06b60de326369e3f8927b24')
		.then(res => {
			setRates(res.data.rates)
		})
	}, []);

	function format(number) {
		return number.toFixed(4);
	  }
//To 4 decimal places

	
	  function handleAmount1Change(amount1) {
		setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
		setAmount1(amount1);
	  }
	
	  function handleCurrency1Change(currency1) {
		setAmount2(format(amount1 * rates[currency2] / rates[currency1]));
		setCurrency1(currency1);
	  }
	
	  function handleAmount2Change(amount2) {
		setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
		setAmount2(amount2);
	  }
	
	  function handleCurrency2Change(currency2) {
		setAmount1(format(amount2 * rates[currency1] / rates[currency2]));
		setCurrency2(currency2);
	  }

	
		return (
			<div>
			  <h1>Currency Exchanger</h1>
				<Currency onAmountChange={handleAmount1Change} onCurrencyChange={handleCurrency1Change} currencies={Object.keys(rates)} amount={amount1} currency={currency1}/>
				<Currency onAmountChange={handleAmount2Change} onCurrencyChange={handleCurrency2Change} currencies={Object.keys(rates)} amount={amount2} currency={currency2}/>
			</div>
		);
}

export default App;