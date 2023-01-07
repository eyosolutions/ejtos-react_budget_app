import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { budget,dispatch,expenses, currency } = useContext(AppContext);

	const changeBudget = (val)=>{
		const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

		
		if(val<totalExpenses) {
			alert("You cannot reduce the budget that is already allocated and spent!");
		}else if(val>20000) {
            alert("You cannot exceed the maximum budget limit of 20,000");
        }else {
			dispatch({
				type: 'SET_BUDGET',
				payload: val,
			})
			}
	}
	
	return (
		<div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
			<input 
                required = 'required'
                type="number" 
                step="10"
                style={{ width: '70%'}}
                value={budget} 
                onInput={(event)=>changeBudget(event.target.value)}>
            </input>
		</div>
	);
};

export default Budget;
