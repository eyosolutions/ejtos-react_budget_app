import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const [curType, setCurType] = useState('£ Pound');
    const changeCurrency = (val) => {
        
        setCurType(document.getElementById(val).innerHTML);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        });        
    };
    return(
        <div class="dropdown">
            <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown">
                Currency ({curType})
            </button>
            <ul class="dropdown-menu bg-success" 
            onClick={(event)=>changeCurrency(event.target.id)}>
                <li><a id='$' class="dropdown-item" href='#'>$ Dollar</a></li>
                <li><a id='£' class="dropdown-item" href="#">£ Pound</a></li>
                <li><a id='€' class="dropdown-item" href="#">€ Euro</a></li>
                <li><a id='₹' class="dropdown-item" href="#">₹ Rupee</a></li>
            </ul>
        </div>
    );
};

export default Currency;
