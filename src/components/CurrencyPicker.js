import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyPicker = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [new_currency, setCurrency] = useState(currency);
    const submitEvent = () => {
        dispatch({type: 'CHG_CURRENCY', payload: new_currency});
    };
    return(
        <div>
            {currency}
            <select className="custom-select" id="currencySelection" onChange={(event) => {setCurrency(event.target.value);}}>
                <option defaultValue value="£" name="£">£ Pound</option>
                <option value="$" name="$">$ Dollar</option>
                <option value="€" name="€">€ Euro</option>
                <option value="₹" name="₹">₹ Ruppee</option>
            </select>
            <button className="btn btn-primary" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                Save currency
            </button>
        </div>
    )
};

export default CurrencyPicker;