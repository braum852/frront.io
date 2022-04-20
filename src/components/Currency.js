import PropTypes from "prop-types";

function Currency(props) {
    return (
        <div className="group">
            <input type='text' value={props.amount} onChange={(e) => props.onAmountChange(e.target.value)}/>
            <select value={props.currency} onChange={(e) => props.onCurrencyChange(e.target.value)}>
                {props.currencies.map((currency => <option value={currency}>{currency}</option>))}
            </select>
        </div>
    )
}

//You can use prop-types to document the intended types of properties passed to components.
Currency.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onAmountChange: PropTypes.func,
    onCurrencyChange: PropTypes.func
}

export default Currency;