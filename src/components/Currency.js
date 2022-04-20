function Currency(props) {
    return (
        <div className="group">
            <input type='text' value={props.amount}/>
            <select value={props.currency}>
                {props.currencies.map((currency => <option value={currency}>{currency}</option>))}
            </select>
        </div>
    )

}

export default Currency;