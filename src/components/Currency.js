import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const {dispatch } = useContext(AppContext);
    const [currency, setCurrency] = useState('');

    const changeCurrency = (event) => {
        dispatch({
            currency = setCurrency(event.target.value)
            type: 'CHG_CURRENCY',
            payload: currency
        });
    }
    return(
        <div className='alert alert-success'>
            <select 
            className='bg-success'
            id="currency" 
            onChange={(event) => changeCurrency(event)}>
                <option value="Dollar" name="Dollar">$ Dollar</option>
                <option selected value="Pound" name="Pound">£ Pound</option>
                <option value="Euro" name="Euro">€ Euro</option>
                <option value="Ruppee" name="Rupee">₹ Rupee</option>
            </select>
        </div>
    );
};

export default Currency;
