import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispatch, currency } = useContext(AppContext);
    let curType = ' Pound';

    const changeCurrency = (val) => {
        
        switch (val) {
            case '$':
                curType = ' Dollar';
                alert('Hello');
                break;
            case '£':
                curType = ' Pound';
            case '€':
                curType = ' Euro';
            case '€':
                curType = ' Rupee'; 
            default:
                curType = 'Pound';

        }

        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        });
    }
    return(
        <div>
            <div class="dropdown">
            <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown">
                Currency ({currency} {curType})
            </button>
            <ul class="dropdown-menu bg-success">
                <li><a class="dropdown-item" href='javascript:changeCurrency("$")'>$ Dollar</a></li>
                <li><a class="dropdown-item" value='£' href="#">£ Pound</a></li>
                <li><a class="dropdown-item" value='€' href="#">€ Euro</a></li>
                <li><a class="dropdown-item" value='₹' href="#">₹ Rupee</a></li>
            </ul>
            </div>
        </div>
    );
};

export default Currency;
