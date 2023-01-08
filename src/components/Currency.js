import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);

    let curType = '';
    function setCurValues() {
        document.getElementById('dollar').setAttribute('value', '$');
        document.getElementById('pound').setAttribute('value', '£');
        document.getElementById('euro').setAttribute('value', '€');
        document.getElementById('rupee').setAttribute('value', '₹');
        /*alert(document.getElementById('dollar').getAttribute('value'));*/
    };
    setCurValues();
    const changeCurrency = (val) => {


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
            onClick={(event)=>changeCurrency(event.target.value)}>
                <li><a id='dollar' class="dropdown-item" href='#'>$ Dollar</a></li>
                <li><a id='pound' class="dropdown-item" href="#">£ Pound</a></li>
                <li><a id='euro' class="dropdown-item" href="#">€ Euro</a></li>
                <li><a id='rupee' class="dropdown-item" href="#">₹ Rupee</a></li>
            </ul>
        </div>
    );
};

export default Currency;
