import { useState, useEffect } from 'react'
import Currency from './Currency';
import axios from 'axios';

// APIKEY = 81336ae3e06b60de326369e3f8927b24

function App() {

	const [amount1, setAmount1] = useState(1);
	const [amount2, setAmount2] = useState(1);
	const [currency1, setCurrency1] = useState('AUD')
	const [currency2, setCurrency2] = useState('USD')

	
		return (
			<div>
			  <h1>Currency Exchanger</h1>
				<Currency currencies={['AUD']} amount={amount1} currency={currency1}/>
				<Currency currencies={['USD']} amount={amount2} currency={currency2}/>
			</div>
		);
}

export default App;